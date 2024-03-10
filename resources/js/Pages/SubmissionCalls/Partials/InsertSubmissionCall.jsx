import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import FileTypes from './FileTypes';
import CallTypes from './CallTypes'
import Attachments from './Attachments';

export default function InsertSubmissionCall({ submissionCallForm, className = '', formTemplates }) {
    const [confirmingSubmissionCallInsertion, setConfirmingSubmissionCallInsertion] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedAttachments, setSelectedAttachments] = useState([]);

    // var templateTypes = [];
    // formTemplates.forEach(template => {
    //     templateTypes = template.type;
    // });

    const updateSelectedAttachments = (attachments) => {
        setSelectedAttachments(attachments);
    };

    const passwordInput = useRef();

    const { data, setData, post: insert, processing, reset, errors, } = useForm({
        type: '',
        title: '',
        description: '',
        deadline: '',
        max_files: 0,
        file_size: 0,
    });

    let count = selectedAttachments.length;
    console.log("Selected Attachments:", selectedAttachments);

    const confirmSubmissionCallInsertion = () => {
        setConfirmingSubmissionCallInsertion(true);
    };

    const insertSubmissionCall = (e) => {
        e.preventDefault()

        data.file_types = selectedItems;
        data.attachments = selectedAttachments;

        insert(route('submissionCallForm.store'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingSubmissionCallInsertion(false);

        reset();
    };

    console.log("Form Data", data);

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">New Submission Call</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Add a new submission call.
                </p>
            </header>

            <DangerButton onClick={confirmSubmissionCallInsertion}>Insert Submission Call</DangerButton>

            <Modal show={confirmingSubmissionCallInsertion} onClose={closeModal}>
                <form onSubmit={insertSubmissionCall} className="p-6">
                    <div className="md:grid md:grid-cols-5 gap-2">
                        <div className="col-span-3">
                            <div className="mt-2">
                                <InputLabel htmlFor="type" value="Call Type" />

                                <select
                                    id="type"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={(e) => setData('type', e.target.value)}
                                    required
                                    autoComplete="type"
                                >
                                    <option value="">Select Call Type</option>
                                    {formTemplates.map((template, index) => (
                                        <option key={index} value={template.type}>{template.type.toUpperCase()}</option>
                                    ))}

                                </select>

                                {/* <CallTypes templateTypes={templateTypes} /> */}
                            </div>
                            <div className='mt-2'>
                                <InputLabel htmlFor="title" value="Title" />

                                <TextInput
                                    id="title"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    required
                                    isFocused
                                    autoComplete="title"
                                />

                                <InputError className="mt-2" message={errors.title} />
                            </div>

                            <div className='mt-2'>
                                <InputLabel htmlFor="description" value="Description" />

                                <textarea
                                    id="description"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    required
                                    autoComplete="description"
                                />

                                <InputError className="mt-2" message={errors.description} />
                            </div>

                            <div className='mt-2'>
                                <InputLabel htmlFor="deadline" value="Deadline" />

                                <TextInput
                                    id="deadline"
                                    type="datetime-local"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={data.deadline}
                                    onChange={(e) => setData('deadline', e.target.value)}
                                    required
                                    autoComplete="deadline"
                                />
                            </div>

                            <div className="mt-2">
                                {/* Attachments */}
                                <InputLabel htmlFor="attachments" value={`Attachments (${count}/5)`} />

                                <Attachments
                                    onSelectAttachments={updateSelectedAttachments}
                                />

                                <InputError className="mt-2" message={errors.attachments} />
                            </div>
                            { /* Form Template[0] fields */}

                            {/* {formTemplates[0].fields.map((field, index) => (
                                <div key={index}>
                                    <InputLabel>{field.label}</InputLabel>
                                    {field.type === 'select' ? (
                                        <select
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        >
                                            {field.options.map((option, optionIndex) => (
                                                <option key={optionIndex}>{option}</option>
                                            ))}
                                        </select>
                                    ) : field.type === 'textarea' ? (
                                        <textarea
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        />
                                    ) : (
                                        <TextInput
                                            type={field.type}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        />
                                    )}
                                </div>
                            ))} */}
                        </div>
                        <div className="col-span-2 gap-2">
                            {/* Requirements */}
                            <div className="mt-2">
                                <InputLabel htmlFor="max_files" value="Maximum Number of Files" />

                                <TextInput
                                    id="max_files"
                                    type="number"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={data.max_files}
                                    onChange={(e) => setData('max_files', e.target.value)}
                                    required
                                    autoComplete="max_files"
                                />
                            </div>

                            <div className='mt-2'>
                                <InputLabel htmlFor="file size" value="Maximum File Size(Mbs)" />

                                <TextInput
                                    id="file-size"
                                    type="number"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={data.file_size}
                                    onChange={(e) => setData('file_size', e.target.value)}
                                    required
                                    autoComplete="file-size"
                                />

                                <InputError className="mt-2" message={errors.file_size} />
                            </div>

                            <div className='mt-2'>
                                <InputLabel htmlFor="file-types" value="Allowed File Types(optional)" />

                                <FileTypes selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
                            </div>


                        </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                        <DangerButton className="ms-3" disabled={processing}>
                            POST
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
