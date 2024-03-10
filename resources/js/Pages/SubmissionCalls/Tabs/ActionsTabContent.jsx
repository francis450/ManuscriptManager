import React from 'react';
import EditCall from '../Partials/EditCall';

const ActionsTabContent = (submissionCall) => {
    // Add your code here for handling actions on a submission call
    console.log('Passed to Action Tab:', submissionCall);
    var submissionCallDetails = submissionCall['submissionCall'];
    console.log('Submission Call Details:', submissionCallDetails)
    return (
        <div className='px-4 py-6 bg-white shadow sm:rounded-lg'>
            {/* Edit Submission Call */}
            <EditCall submissionCall={submissionCallDetails} />

            {/* Add Reviewers section */}
        </div>
    );
};

export default ActionsTabContent;