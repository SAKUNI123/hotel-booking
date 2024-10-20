import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

import { authOptions } from '@/libs/auth';
import {
  checkReviewExists,
  createReview,
  getUserData,
  updateReview,
} from '@/libs/apis';

// Handle GET request
export async function GET(req: Request) {
  // Fetch session
  const session = await getServerSession(authOptions);

  // If user is not authenticated
  if (!session) {
    return new NextResponse('Authentication Required', { status: 401 });
  }

  const userId = session.user.id;

  try {
    // Fetch user data
    const data = await getUserData(userId);
    return NextResponse.json(data, { status: 200, statusText: 'Successful' });
  } catch (error) {
    console.error('Error fetching user data:', error);
    return new NextResponse('Unable to fetch user data', { status: 500 });
  }
}

// Handle POST request
export async function POST(req: Request) {
  // Fetch session
  const session = await getServerSession(authOptions);

  // If user is not authenticated
  if (!session) {
    return new NextResponse('Authentication Required', { status: 401 });
  }

  try {
    // Parse the request body
    const { roomId, reviewText, ratingValue } = await req.json();

    // Check if all required fields are provided
    if (!roomId || !reviewText || !ratingValue) {
      return new NextResponse('All fields are required', { status: 400 });
    }

    const userId = session.user.id;

    // Check if the user has already reviewed this room
    const alreadyExists = await checkReviewExists(userId, roomId);

    let data;

    // Update review if it exists, otherwise create a new one
    if (alreadyExists) {
      data = await updateReview({
        reviewId: alreadyExists._id,
        reviewText,
        userRating: ratingValue,
      });
    } else {
      data = await createReview({
        hotelRoomId: roomId,
        reviewText,
        userId,
        userRating: ratingValue,
      });
    }

    return NextResponse.json(data, { status: 200, statusText: 'Successful' });
  } catch (error: any) {
    console.error('Error creating/updating review:', error);
    return new NextResponse('Unable to create or update review', { status: 500 });
  }
}
