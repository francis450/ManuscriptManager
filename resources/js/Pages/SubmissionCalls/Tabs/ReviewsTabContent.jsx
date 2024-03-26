import React from 'react';
const ReviewsTabContent = ({ reviews }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews available</p>
      ) : (
        <div className="divide-y divide-gray-200">
          {reviews.map(review => (
            <div key={review.id} className="py-4">
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src={review.avatar} alt={review.author} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-lg font-semibold">{review.author}</p>
                  <p className="text-gray-600">{review.comment}</p>
                  <p className="text-gray-600">Rating: {review.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ReviewsTabContent;
