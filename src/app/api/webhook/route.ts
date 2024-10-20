import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createBooking, updateHotelRoom } from '@/libs/apis';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-09-30.acacia',
});

const checkout_session_completed = 'checkout.session.completed';

export async function POST(req: Request) {
  const reqBody = await req.text();
  const sig = req.headers.get('stripe-signature');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event: Stripe.Event;

  try {
    if (!sig || !webhookSecret) {
      return new NextResponse('Missing webhook signature or secret', { status: 400 });
    }

    event = stripe.webhooks.constructEvent(reqBody, sig, webhookSecret);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Webhook Error: ${error.message}`);
      return new NextResponse(`Webhook Error: ${error.message}`, { status: 500 });
    }
    return new NextResponse('Webhook Error: An unknown error occurred', { status: 500 });
  }

  // Process the event
  switch (event.type) {
    case checkout_session_completed:
      const session = event.data.object as Stripe.Checkout.Session;

      const metadata = session.metadata;
      if (!metadata) {
        return new NextResponse('Metadata is missing in the session', { status: 400 });
      }

      const {
        adults,
        checkinDate,
        checkoutDate,
        children,
        hotelRoom,
        numberOfDays,
        user,
        discount,
        totalPrice,
      } = metadata;

      try {
        await createBooking({
          adults: Number(adults),
          checkinDate,
          checkoutDate,
          children: Number(children),
          hotelRoom,
          numberOfDays: Number(numberOfDays),
          discount: Number(discount),
          totalPrice: Number(totalPrice),
          user,
        });

        // Update hotel room status
        await updateHotelRoom(hotelRoom);

        return NextResponse.json('Booking successful', {
          status: 200,
          statusText: 'Booking Successful',
        });
      } catch (bookingError) {
        console.error(`Booking Error: ${bookingError}`);
        return new NextResponse('Failed to create booking', { status: 500 });
      }

    default:
      console.log(`Unhandled event type ${event.type}`);
      return new NextResponse(`Unhandled event type: ${event.type}`, { status: 200 });
  }
}
