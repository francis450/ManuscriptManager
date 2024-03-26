import React from 'react';

const ReviewFeedbackTab1 = ({ submission }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4">Review Feedback</h2>
            {submission.reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 py-4">
                    <div className="flex items-center space-x-4">
                        <img
                            className="h-8 w-8 rounded-full border border-gray-300"
                            // src={`https://www.gravatar.com/avatar/${review.reviewer.email}?s=64`}
                            alt="Reviewer Avatar"
                        />
                        <div className="flex-grow">
                            <div className="flex items-center justify-between">
                                <div className="text-sm font-medium text-gray-900">{review.reviewer.name}</div>
                                <div className="text-sm text-gray-500">{review.date_reviewed}</div>
                            </div>
                            <div className="mt-2 text-sm text-gray-600">{review.comment}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReviewFeedbackTab1;
