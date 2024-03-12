import axios from 'axios';
import React, { useState } from 'react';
import Attachments from '@/Pages/SubmissionCalls/Partials/Attachments';

const ManageAttachmentFiles = (submissionCall) => {
    const [attachmentFiles, setAttachmentFiles] = useState(submissionCall.submissionCall.documents);

    console.log('Manage attachment files: ', submissionCall.submissionCall.documents);
    var existingAttachments = submissionCall.submissionCall.documents;
    const handleFileChange = (event) => {
        const files = event.target.files;
        setAttachmentFiles([...attachmentFiles, ...files]);
    };

    const handleRemoveFile = (index) => {
        const updatedFiles = [...attachmentFiles];
        updatedFiles.splice(index, 1);
        setAttachmentFiles(updatedFiles);
    };

    return (
        <div className="max-w-xl mt-2">
            <header>
                {/* <div className="border-b border-gray-200 mb-4"></div> */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Manage File Attachments</h2>
                <p className="mt-1 text-sm text-gray-600">
                    Add or Remove File Attachments From Submission Call
                </p>
            </header>

            <Attachments existingAttachments={existingAttachments}  onSelectAttachments={setAttachmentFiles} />
        </div>
    );
};

export default ManageAttachmentFiles;