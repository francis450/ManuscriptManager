import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import Modal from '@/Components/Modal';
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from '@/Components/SecondaryButton';

const DeleteSubmissionCallForm = ({ submissionCall }) => {
    const { data, setData, delete: destroy, errors, processing, recentlySuccessful } = useForm({
        id: submissionCall.id,
    });

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        destroy(route("submissionCall.destroy", submissionCall.id));
        closeModal();
    };

    const handleClick = () => {
        setShowDeleteModal(true);
    }

    const closeModal = () => {
        setShowDeleteModal(false);
    }

    return (
        <section className="max-w-xl mt-2">
            <header>
                <div className="border-b border-gray-200 mb-4"></div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Delete Submission Call</h2>
                <p className="mt-1 text-sm text-gray-600">
                    This will permanently delete submission call with all its associated data.
                </p>
            </header>
            <div className="mt-2">
                <PrimaryButton
                    className="bg-red-500 hover:bg-red-600"
                    type="button"
                    onClick={handleClick}
                >
                    Delete Submission Call
                </PrimaryButton>
                <Modal show={showDeleteModal} onClose={closeModal}>
                    <form onSubmit={handleSubmit} className="p-6">
                        <label htmlFor="confirmDelete" className="mr-2">
                            Are you sure you want to delete this submission call?
                        </label>
                        <div className="mt-4 ">
                            <SecondaryButton
                                onClick={closeModal}
                                type="button"
                                className="mr-2"
                            >
                                Cancel
                            </SecondaryButton>
                            <PrimaryButton
                                className="ml-2"
                                type="submit"
                                disabled={processing}
                            >
                                Confirm Delete
                            </PrimaryButton>
                        </div>
                    </form>
                </Modal>
            </div>
        </section>
    );
}

export default DeleteSubmissionCallForm;
