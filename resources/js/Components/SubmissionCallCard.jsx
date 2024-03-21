import React, { useState, useEffect } from 'react';
import InputLabel from './InputLabel';
import TextInput from './TextInput';
import Modal from './Modal';
import CountdownTimer from './CountDownTimer';
import SubmissionForm from './SubmissionForm'; // Import the SubmissionForm component

const SubmissionCallCard = ({ submissionCall }) => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    }

    const handleSubmitEntry = () => {
        setShowModal(true);
    };

    return (
        <>
            <div key={submissionCall.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between h-full">
                <div>
                    <h2 className="text-lg font-semibold mb-2">{submissionCall.title}</h2>
                    <div className="flex flex-col justify-between text-sm text-gray-500 mb-2">
                        <div>
                            {/* <CountdownTimer deadline={submissionCall.deadline} /> */}
                        </div>
                        <div>
                            Status: {submissionCall.status}
                        </div>
                        <div>
                            Type: {submissionCall.form_template_type}
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex justify-end">
                    <a
                        className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 text-xs rounded mr-2"
                        type='button'
                        href={`/submissionCall/${submissionCall.id}`}
                    >
                        View Details
                    </a>
                    <button
                        className="bg-green-500 hover:bg-green-600 text-white text-xs font-semibold py-2 px-4 rounded"
                        onClick={handleSubmitEntry}
                    >
                        Submit Entry
                    </button>
                </div>
            </div>
            {showModal && (
                <Modal
                    show={showModal}
                    onClose={handleClose}
                >
                    <SubmissionForm submissionCall={submissionCall} requirements={submissionCall.requirements} onClose={handleClose} />
                </Modal>
            )}
        </>
    );
};

export default SubmissionCallCard;
