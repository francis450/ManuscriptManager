import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import SubmissionCallCard from '@/Components/SubmissionCallCard';

export default function Dashboard({ auth }) {
    const [file, setFile] = useState(null);

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
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Welcome to ManuScript Manager</div>
                    </div>
                    <div className="overflow-hidden w-full h-100 mt-4 grid grid-template-cols-4">
                        <div className="p-6 grid-colspan-1">
                            {/* <form onSubmit={handleSubmit}>
                                <input type="file" onChange={handleFileChange} />
                                <button type="submit">Upload</button>
                            </form> */}
                            <SubmissionCallCard submissionCall={{
                                title: 'Call for Papers',
                                description: 'Submit your research papers for publication in our journal.',
                                deadline: '2021-12-31',
                                status: 'Open',
                                visibility: 'Public',
                                categories: ['Science', 'Technology'],
                            }} />

                        </div>
                    </div>
                </div>

            </div>
        </AuthenticatedLayout>
    );
}
