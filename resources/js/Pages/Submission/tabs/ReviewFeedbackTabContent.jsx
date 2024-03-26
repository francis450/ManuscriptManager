import React from 'react';
import { RightArrow } from '../../../Svgs/Svgs';
import Tweet from '../partials/Tweet';

const ReviewFeedbackTab = ({ submission }) => {
    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Review Feedback</h2>
            {submission.reviews.map(review => (
                <a href='#' key={review.id} className={`block bg-gray-100 border border-gray-300 rounded-lg p-4 mb-4  focus:border-gray-400 ${review.status === 'approved' ? 'hover:border-green-600' : 'hover:border-red-600'}`}>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">Reviewer: {review.reviewer.name}</h3>
                        <span className={`text-sm font-semibold ${review.status === 'approved' ? 'text-green-600' : 'text-red-600'}`}>{review.status}</span>
                    </div>
                    <p className="mb-2">{review.comment}</p>
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-4 mb-2">
                            <p className="mb-0"><strong>Date Reviewed:</strong> {review.date_reviewed}</p>
                            <p className="mb-0"><strong>Rating:</strong> {review.rating}</p>
                        </div>
                        {/* an arrow to indicate next */}
                        <div className="p-4">
                            <RightArrow />
                        </div>
                    </div>
                </a>
            ))}
            <Tweet />
        </div>
    );
};

export default ReviewFeedbackTab;
