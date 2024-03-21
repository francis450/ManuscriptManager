import React from 'react';
import EditCall from '../Partials/EditCall';
import DeleteSubmissionCallForm from '../Partials/DeleteSubmissionCallForm';
import ManageAttachmentFiles from '../Partials/ManageAttachmentFiles';

const ActionsTabContent = (submissionCall) => {
    // Add your code here for handling actions on a submission call
    console.log('Passed to Action Tab:', submissionCall);
    var submissionCallDetails = submissionCall['submissionCall'];

    console.log('Submission Call Details:', submissionCallDetails)
    return (
        <div className='px-4 py-6 bg-white shadow sm:rounded-lg'>
            {/* <ManageDocumentFilters /> */}
            <EditCall submissionCall={submissionCallDetails} />

            <ManageAttachmentFiles submissionCall={submissionCallDetails} />



            <DeleteSubmissionCallForm submissionCall={submissionCallDetails}  />

        </div>
    );
};

export default ActionsTabContent;