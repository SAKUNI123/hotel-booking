import axios from 'axios';
import { FC } from 'react';
import useSWR from 'swr';

import { Review } from '@/models/review';
import Rating from '../Rating/Rating';

const RoomReview: FC<{ roomId: string }> = ({ roomId }) => {
  const fetchRoomReviews = async () => {
    const { data } = await axios.get<Review[]>(`/api/room-reviews/${roomId}`);
    return data;
  };

  const {
    data: roomReviews,
    error,
    isLoading,
  } = useSWR(`/api/room-reviews/${roomId}`, fetchRoomReviews);

  // Log reviews for debugging purposes
  console.log(roomReviews);

  // Handle loading state
  if (isLoading) {
    return <p>Loading reviews...</p>; // Replace with a loading spinner if needed
  }

  // Handle error state
  if (error) {
    return <p>Failed to load reviews. Please try again later.</p>;
  }

  return (
    <>
      {roomReviews && roomReviews.length > 0 ? (
        roomReviews.map(review => (
          <div
            className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg"
            key={review._id}
          >
            <div className="font-semibold mb-2 flex">
              <p>{review.user.name}</p>
              <div className="ml-4 flex items-center text-tertiary-light text-lg">
                <Rating rating={review.userRating} />
              </div>
            </div>
            <p>{review.text}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet for this room.</p>
      )}
    </>
  );
};

export default RoomReview;
