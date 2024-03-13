import React, { useState, useEffect } from 'react';
import InputLabel from './InputLabel'
import Modal from './Modal';

const SubmissionCallCard = ({ submissionCall }) => {

    const [formTemplate, setFormTemplate] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        if (showModal && !formTemplate) {
            getFormTemplate();
        }
    }, [showModal]); // Fetch form template when showModal state changes

    const handleClose = () => {
        setShowModal(false);
    }

    const getFormTemplate = () => {
        setLoading(true);
        fetch(`api/formTemplate/${submissionCall.form_template_id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch form template');
                }
                return response.json();
            })
            .then(data => {
                setFormTemplate(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    };

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
                            Deadline: {submissionCall.deadline}
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
                    {loading ? (
                        <p>Loading form template...</p>
                    ) : error ? (
                        <p>Error: {error}</p>
                    ) : (
                        formTemplate && (
                            <form className='p-4'>
                                <div>
                                    <InputLabel htmlFor='title' value="Title" />
                                </div>
                                {formTemplate[0].fields.map((field, fieldIndex) => (
                                    <div key={fieldIndex}>
                                        <label className="block font-semibold">{field.label}</label>
                                        {field.type === 'text' && (
                                            <input
                                                type="text"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                required={field.required}
                                            />
                                        )}
                                        {field.type === 'textarea' && (
                                            <textarea
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                required={field.required}
                                            ></textarea>
                                        )}
                                        {field.type === 'select' && (
                                            <select
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                required={field.required}
                                            >
                                                <option value="">Select an option</option>
                                                {field.options.map((option, optionIndex) => (
                                                    <option key={optionIndex} value={option}>{option}</option>
                                                ))}
                                            </select>
                                        )}
                                    </div>
                                ))}
                                <button
                                    type="submit"
                                    className=" mt-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                                >
                                    Submit
                                </button>
                            </form>
                        )
                    )}
                </Modal>
            )}
        </>
    );
};

export default SubmissionCallCard;
