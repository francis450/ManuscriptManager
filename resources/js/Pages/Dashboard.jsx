import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import SubmissionCallCard from '@/Components/SubmissionCallCard';

export default function Dashboard({ auth, submissionCalls }) {
    const [file, setFile] = useState(null);

    const [filterStatus, setFilterStatus] = useState('all');
    const [sortBy, setSortBy] = useState('latest');

    console.log('Submission Calls:', submissionCalls);

    const filteredSubmissionCalls = submissionCalls.filter(submissionCall => {
        if (filterStatus === 'all') {
            return true;
        } else if (filterStatus === 'open') {
            return submissionCall.status === 'active';
        } else if (filterStatus === 'closed') {
            return submissionCall.deadline < new Date().toISOString();
        }
    });

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await uploadFile(formData);
            console.log('File uploaded:', response);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    const uploadFile = async (formData) => {
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
        });

        return response.json();
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Discover </h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex justify-between">
                                <div className="flex items-center">
                                    <h2 className="text-lg font-semibold text-gray-800 leading-tight">Submission Calls</h2>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        <label htmlFor="filterStatus" className="text-gray-600 mr-2">Filter by:</label>
                                        <select
                                            className="border border-gray-300 rounded-md"
                                            name="status"
                                            id="filterStatus"
                                            value={filterStatus}
                                            onChange={(e) => setFilterStatus(e.target.value)}
                                        >
                                            <option value="all">All</option>
                                            <option value="open">Open</option>
                                            <option value="closed">Closed</option>
                                        </select>
                                    </div>
                                    <div className="flex items-center ml-4">
                                        <label htmlFor="sortBy" className="text-gray-600 mr-2">Sort by:</label>
                                        <select
                                            className="border border-gray-300 rounded-md"
                                            name="status"
                                            id="sortBy"
                                            value={sortBy}
                                            onChange={(e) => setSortBy(e.target.value)}
                                        >
                                            <option value="latest">Latest</option>
                                            <option value="oldest">Oldest</option>
                                        </select>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden w-full h-100 mt-4 grid grid-cols-4">
                        {filteredSubmissionCalls.map((submissionCall, index) => (
                            <div key={index} className="p-6 grid-colspan-1">
                                <SubmissionCallCard
                                    submissionCall={submissionCall}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </AuthenticatedLayout>
    );
}
