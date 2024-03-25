import React from 'react';
import EditCall from '../Partials/EditCall';
import DeleteSubmissionCallForm from '../Partials/DeleteSubmissionCallForm';
import ManageAttachmentFiles from '../Partials/ManageAttachmentFiles';

const ActionsTabContent = (submissionCall) => {
    var submissionCallDetails = submissionCall['submissionCall'];

    return (
        <div className='px-4 py-6 bg-white shadow sm:rounded-lg'>
            <EditCall submissionCall={submissionCallDetails} />

            <ManageAttachmentFiles submissionCall={submissionCallDetails} />



            <DeleteSubmissionCallForm submissionCall={submissionCallDetails} />

        </div>
    );
};

export default ActionsTabContent;