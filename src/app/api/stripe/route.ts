import { getRoom } from "@/libs/apis";
import { authOptions } from "@/libs/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import Stripe from 'stripe';

// Initialize Stripe with the secret key and API version
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-09-30.acacia', // Ensure this version is correct
});

// Define the expected structure for request data
interface RequestData {
  checkinDate: string;
  checkoutDate: string;
  adults: number;
  children: number;
  numberOfDays: number;
  hotelRoomSlug: string;
}

export async function POST(req: Request) {
  try {
    // Parse the request body and validate fields
    const {
      checkinDate,
      checkoutDate,
      adults,
      children,
      hotelRoomSlug,
      numberOfDays,
    }: RequestData = await req.json();

    // Validate the required fields
    if (!checkinDate || !checkoutDate || !adults || !hotelRoomSlug || !numberOfDays) {
      return new NextResponse('All fields are required', { status: 400 });
    }

    const origin = req.headers.get('origin');
    const session = await getServerSession(authOptions);

    // If user is not authenticated, return a 401 response
    if (!session) {
      return new NextResponse('Authentication required', { status: 401 });
    }

    const userId = session.user.id;

    // Format dates for Stripe metadata
    const formattedCheckoutDate = checkoutDate.split('T')[0];
    const formattedCheckinDate = checkinDate.split('T')[0];

    // Fetch the room details using the provided slug
    const room = await getRoom(hotelRoomSlug);
    if (!room) {
      return new NextResponse('Room not found', { status: 404 });
    }

    // Calculate the discounted price and total price
    const discountPrice = room.price - (room.price / 100) * room.discount;
    const totalPrice = discountPrice * numberOfDays;

    // Create a new Stripe checkout session
    const stripeSession = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'LKR',
            product_data: {
              name: room.name,
              images: room.images?.map(image => image.url) || [],
            },
            unit_amount: Math.round(totalPrice * 100), // Convert to cents for Stripe
          },
        },
      ],
      payment_method_types: ['card'],
      success_url: `${origin}/users/${userId}`,
      metadata: {
        adults: adults.toString(),
        checkinDate: formattedCheckinDate,
        checkoutDate: formattedCheckoutDate,
        children: children.toString(),
        hotelRoom: room._id,
        numberOfDays: numberOfDays.toString(),
        user: userId,
        discount: room.discount.toString(),
        totalPrice: totalPrice.toString(),
      },
    });

    // Return the created Stripe session as JSON
    return NextResponse.json(stripeSession, {
      status: 200,
      statusText: 'Payment session created',
    });
  } catch (error: unknown) {
    console.error('Payment failed:', error);

    // Return a meaningful error message based on the error type
    if (error instanceof Error) {
      return new NextResponse(JSON.stringify({ message: error.message }), { status: 500 });
    }

    // Fallback error response for unknown error types
    return new NextResponse(JSON.stringify({ message: 'An unexpected error occurred' }), { status: 500 });
  }
}
