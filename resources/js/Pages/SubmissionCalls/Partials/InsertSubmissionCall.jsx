import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';

export default function InsertSubmissionCall({ submissionCallForm, className = '' }) {
    const [confirmingSubmissionCallInsertion, setConfirmingSubmissionCallInsertion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        post: insert,
        processing,
        reset,
        errors,
    } = useForm({
        title: '',
        description: '',
        deadline: '',
    });

    const confirmSubmissionCallInsertion = () => {
        setConfirmingSubmissionCallInsertion(true);
    };

    const insertSubmissionCall = (e) => {
        e.preventDefault();

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
                    <div>
                        <InputLabel htmlFor="title" value="Title" />

                        <TextInput
                            id="title"
                            className="mt-1 block w-full"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            required
                            isFocused
                            autoComplete="title"
                        />

                        <InputError className="mt-2" message={errors.title} />
                    </div>

                    <div>
                        <InputLabel htmlFor="description" value="Description" />

                        <TextInput
                            id="description"
                            className="mt-1 block w-full"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            required
                            autoComplete="description"
                        />

                        <InputError className="mt-2" message={errors.description} />
                    </div>

                    <div>
                        <InputLabel htmlFor="deadline" value="Deadline" />

                        <TextInput 
                            id="deadline"
                            type="date"
                            className="mt-1 block w-full"
                            value={data.deadline}
                            onChange={(e) => setData('deadline', e.target.value)}
                            required
                            autoComplete="deadline"
                        />
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
