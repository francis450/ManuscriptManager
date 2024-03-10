import React from 'react';

const SubmissionCallCard = ({ submissionCall }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between h-full">
            <div>
                <h2 className="text-lg font-semibold mb-2">{submissionCall.title}</h2>
                <p className="text-gray-600 mb-2">{submissionCall.description}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <div>
                        Deadline: {submissionCall.deadline}
                    </div>
                    <div>
                        Status: {submissionCall.status}
                    </div>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                    <div>
                        Visibility: {submissionCall.visibility}
                    </div>
                    <div>
                        Categories: {submissionCall.categories.join(', ')}
                    </div>
                </div>
            </div>
            <div className="mt-4 flex justify-end">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2">
                    View Details
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                    Submit Entry
                </button>
            </div>
        </div>
    );
};

export default SubmissionCallCard;
