import React, { useState } from 'react';
import { DownArrow, Download, RightArrow, View } from '@/Svgs/Svgs';
import PrimaryButton from '../../../Components/PrimaryButton';
import CardLink from '@/Layouts/CardLink';
import { router } from '@inertiajs/react'

const SubmissionsTabContent = ({ submissions }) => {
    const [expandedSubmissionId, setExpandedSubmissionId] = useState(null);
    const [submissionDocuments, setSubmissionDocuments] = useState([]);
    const toggleSubmission = async (submissionId) => {
        if (expandedSubmissionId === submissionId) {
            setExpandedSubmissionId(null);
            setSubmissionDocuments([]);
        } else {
            setExpandedSubmissionId(submissionId);
            const response = await fetch('/api/document/' + submissionId)
            if (response.ok) {
                const data = await response.json();
                setSubmissionDocuments(data);
            } else {
                console.error('Error fetching documents:', response.error);
            }
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'active':
                return 'bg-green-500';
            case 'pending':
                return 'bg-yellow-500';
            case 'completed':
                return 'bg-blue-500';
            case 'rejected':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    const openSubmission = (expandedSubmissionId) => {
        // open submission/expandedSUbmissionId route
        // console.log("expandedSubmissionId: ", [...expandedSubmissionId]);
        router.get('/submission/' + expandedSubmissionId);
    }

    return (
        <div>
            {submissions.map(submission => (
                <div key={submission.id} className="bg-gray-100 rounded-lg shadow-md mb-4">
                    <div className="p-2">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">{submission.title}</h2>
                            <button
                                onClick={() => toggleSubmission(submission.id)}
                                className="text-gray-500 focus:outline-none"
                            >
                                {expandedSubmissionId === submission.id ? <DownArrow /> : <RightArrow />}
                            </button>
                        </div>
                        {expandedSubmissionId === submission.id && (
                            <div>
                                <p className="text-gray-700 mb-4 grid-colspan-2">
                                    {submission.description}
                                </p>
                                {/* line  */}
                                <div className="border-t border-gray-300 my-4"></div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Documents</h3>
                                    <div className="">
                                        <table className="min-w-full sm:rounded-lg divide-y divide-gray-200">
                                            <thead className="bg-gray-200 shade">
                                                <tr>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">file name</th>
                                                    {/* <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Extension</th> */}
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Size (MB)</th>
                                                    {/* <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Status</th> */}
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Uploaded at</th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {submissionDocuments.map(document => (
                                                    <tr key={document.id}>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{document.name}</td>
                                                        {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{document.extension}</td> */}
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{document.size / 1000000}</td>
                                                        {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{document.status}</td> */}
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(document.created_at).toLocaleString()}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm flex font-medium">
                                                            <a href={`https://storage.cloud.google.com/manuscript-manager/manuscript-manager/${document.path}`} download={document.name}>
                                                                <button type='button' className="bg-gray-300 mr-2 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                                                    <Download />
                                                                    <span>Download</span>
                                                                </button>
                                                            </a>


                                                            <a target='_blank' href={`https://storage.cloud.google.com/manuscript-manager/manuscript-manager/${document.path}`} >
                                                                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                                                    <View />
                                                                    <span>Open</span>
                                                                </button>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/* <div>
                                    <h3 className="text-lg font-semibold mb-2">Reviews</h3>
                                    <div>
                                        <CardLink href={'laravel.com'} />
                                    </div>
                                </div> */}
                            </div>
                        )}
                        <div className="flex pt-2 items-center text-gray-500">
                            <span className={`text-sm mr-4 ${getStatusColor(submission.status)} text-white px-2 rounded-full`}>{submission.status}</span>
                            <p className="text-sm mr-4 font-semibold">Submitted at: {new Date(submission.created_at).toLocaleString()}</p>
                            <p className="text-sm mr-4 font-bold">Reviews: </p>
                            <a className='
                            text-sm mr-4 font-bold bg-gray-400 p-1 rounded text-gray-900
                            ' href={`/submission/` + submission.id}>Open Submission</a>
                            {/* Add more crucial information here */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SubmissionsTabContent;
