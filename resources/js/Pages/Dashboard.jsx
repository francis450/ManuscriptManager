import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import SubmissionCallCard from '@/Components/SubmissionCallCard';
import { Search } from '../Svgs/Svgs';

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
            header={
                <div className='flex justify-between align-center'>
                    <h2 className="font-semibold flex items-center text-xl text-gray-800 leading-tight">
                        Discover
                    </h2>
                    <div>
                        <div className="flex justify-between">
                            <div className="flex items-center">
                                
                                <div className="flex items-center mr-2">
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
                                <div className="flex items-center mr-2">
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
                                <div className="flex items-center mr-2">
                                    <button className='flex justify-between bg-gray-200 items-center  p-1 rounded'>
                                        <input className='rounded mr-2' type="text" />
                                        <Search />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        >
            <Head title="Dashboard" />

            <div className="py-1">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">

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
