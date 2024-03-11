import React, { useState } from 'react';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';

const EditCall = ({ submissionCall }) => {

    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        title: submissionCall.title,
        description: submissionCall.description,
        deadline: submissionCall.deadline,
    });

    const handleInputChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('submissionCall.update', submissionCall.id));
    };
    
    const isFormEmptyOrUnchanged = () => {
        return (
            data.title === submissionCall.title &&
            data.description === submissionCall.description &&
            data.deadline === submissionCall.deadline
        );
    };

    return (
        <section className="max-w-xl mt-2">
            <header>
                {/* <div className="border-b border-gray-200 mb-4"></div> */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Edit Submission Call Details</h2>
                <p className="mt-1 text-sm text-gray-600">
                    Update the submission call details
                </p>
            </header>
            <form onSubmit={handleSubmit}>
                <InputLabel htmlFor="title" value="Title" />
                <TextInput
                    type="text"
                    className="mt-1 block w-full"
                    name="title"
                    value={data.title}
                    onChange={handleInputChange}
                />
                <InputLabel htmlFor="description" value="Description" />
                <TextInput
                    type="text"
                    className="mt-1 block w-full"
                    name="description"
                    value={data.description}
                    onChange={handleInputChange}
                />
                <InputLabel htmlFor="deadline" value="Deadline" />
                <TextInput
                    type="datetime-local"
                    className="mt-1 block w-full"
                    name="deadline"
                    value={data.deadline}
                    onChange={handleInputChange}
                />
                <PrimaryButton
                    type="submit"
                    className="mt-3"
                    disabled={isFormEmptyOrUnchanged()}
                >
                    Save Changes
                </PrimaryButton>
            </form>
        </section>
    );
};

export default EditCall;
