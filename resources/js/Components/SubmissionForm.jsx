import React, { useState } from 'react';
import InputLabel from './InputLabel';
import TextInput from './TextInput';
import CountdownTimer from './CountDownTimer';
import Attachments from '../Pages/SubmissionCalls/Partials/Attachments';
import InputError from '../Components/InputError';
import { useForm } from '@inertiajs/react'; // Assuming this is the correct import
// Removed unnecessary import { formToJSON } from 'axios';

const SubmissionForm = ({ submissionCall, requirements, onClose }) => {
    const { data: formData, setData: setFormData, post: insert, processing, reset, errors } = useForm({
        title: '',
        description: '',
        files: []
    });

    const [files, setFiles] = useState([]);
    console.log('Files state',files);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateFiles = () => {
        console.log('clicked');
        const allowedFileTypes = JSON.parse(requirements.file_types);
        const fileNames = formData.files.map(file => file.file.name);
        const invalidFiles = fileNames.filter(fileName => !allowedFileTypes.includes(fileName.split('.').pop().toUpperCase()));
        console.log('Invalid File: ', invalidFiles);
        if (invalidFiles.length > 0) {
            console.log(`Invalid file types. Allowed types are: ${allowedFileTypes.join(', ')}`);
            // set errors here
            errors.files = `Invalid file types. Allowed types are: ${allowedFileTypes.join(', ')}`;
        }

        const maxFileSizeInMB = requirements.max_file_size;
        const invalidFileSize = formData.files.some(file => file.size > maxFileSizeInMB * 1024 * 1024);
        if (invalidFileSize) {
            console.log(`File size exceeds the maximum allowed size of ${maxFileSizeInMB}MB`);
            // set errors here
            errors.files = `File size exceeds the maximum allowed size of ${maxFileSizeInMB}MB`;
        }

        const maxFiles = requirements.max_files;
        if (formData.files.length > maxFiles) {
            console.log(`You can only upload a maximum of ${maxFiles} files`);

            // set errors here
            errors.files = `You can only upload a maximum of ${maxFiles} files`;
        }

        if (errors.files) {
            return false;
        } else {
            return true;
        }
    }

    const handleFileInputChange = (newFiles) => {
        const allFiles = [...formData.files, ...newFiles]; // Combine existing files with newly added files
        console.log('All Files:', allFiles);
        const maxFileSizeInMB = requirements.max_file_size;
        const allowedFileTypes = JSON.parse(requirements.file_types);
        const maxFiles = requirements.max_files;

        // Validate each new file
        const invalidFiles = newFiles.filter(file => {
            const isInvalidType = !allowedFileTypes.includes(file.file.name.split('.').pop().toUpperCase());
            const isInvalidSize = file.size > maxFileSizeInMB * 1024 * 1024;
            return isInvalidType || isInvalidSize;
        });

        // Check if the total number of files exceeds the limit
        const exceedsMaxFiles = allFiles.length > maxFiles;

        // Update errors object
        const newErrors = {};
        if (invalidFiles.length > 0) {
            newErrors.files = `Invalid file types or sizes. Allowed types are: ${allowedFileTypes.join(', ')}. Maximum file size is ${maxFileSizeInMB}MB.`;
        } else if (exceedsMaxFiles) {
            newErrors.files = `You can only upload a maximum of ${maxFiles} files.`;
        }

        // Set errors and form data
        setFormData({
            ...formData,
            files: exceedsMaxFiles ? formData.files : allFiles // Only update files if not exceeding max files
        });

        if (!exceedsMaxFiles) {
            setFiles({
                allFiles
            })
        }

        errors.files = newErrors.files || ''; // Update errors

        // send to backend if no errors
        if (Object.keys(newErrors).length === 0) {
            console.log('No errors. Send to backend');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateFiles()) {
            return;
        }

        insert(`/submissionCall/${submissionCall.id}/submit`, { 
            onSuccess: () => onClose(),
            onError: () => console.log('Error submitting form'),
            // onFinish: () => reset()
        });

        onClose();
    };

    return (
        <>
            <div className="m-2">
                <h3 className='font-bold text-xl'>Submit {submissionCall.form_template_type}</h3>
            </div>
            <div className="border-b-2 border-gray-300 w-full"></div>
            <div className="m-2 flex justify-between">
                <h4 className='font-bold'>Title: {submissionCall.title}</h4>
                <p><CountdownTimer deadline={submissionCall.deadline} /></p>
            </div>
            <div className="border-b-2 border-gray-300 w-full"></div>

            <form onSubmit={handleSubmit} className='p-4'>
                <div className="formGroup"></div>

                <InputLabel htmlFor="title" value={'Submission Title'} className='font-semibold' />
                <TextInput
                    className='border-2 border-gray-300 p-2 rounded-lg w-full'
                    name='title'
                    type='text'
                    value={formData.title} // Added value prop
                    onChange={handleInputChange}
                    required
                />
                <InputError message={errors.title} className='mt-2' />

                <InputLabel htmlFor="description" value={'Submission Description'} className='font-semibold' />
                <textarea
                    className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border-2 border-gray-300 p-2 rounded-lg'
                    name='description'
                    value={formData.description} // Added value prop
                    onChange={handleInputChange}
                />
                <InputError message={errors.description} className='mt-2' />

                <InputLabel htmlFor="file" value={'Upload Files'} className='font-semibold' />
                <Attachments onSelectAttachments={handleFileInputChange} />
                <InputError message={errors.files} className='mt-2' />

                <div className="flex justify-end mt-4">
                    <button
                        type='submit'
                        className="bg-green-500 hover:bg-green-600 text-white text-xs font-semibold py-2 px-4 rounded"
                        disabled={processing}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
};

export default SubmissionForm;
