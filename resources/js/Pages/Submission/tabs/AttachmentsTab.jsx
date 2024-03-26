import React, { useState } from 'react';

const AttachmentsTab = ({ documents }) => {
    const [selectedDocuments, setSelectedDocuments] = useState([]);
    console.log('Selected Attachment: ', selectedDocuments);
    console.log('Documents: ', documents);
    const handleCheckboxChange = (documentId) => {
        if (selectedDocuments.includes(documentId)) {
            setSelectedDocuments(selectedDocuments.filter(id => id !== documentId));
        } else {
            setSelectedDocuments([...selectedDocuments, documentId]);
        }
    };

    return (
        <div className="rounded-lg border border-gray-300 bg-white shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4">Attachments</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 text-indigo-600"
                                    checked={selectedDocuments.length === documents.length}
                                    onChange={(e) => {
                                        (e.target.checked) ? setSelectedDocuments(documents.map(document => document.id))
                                        : setSelectedDocuments([])
                                    }
                                    }
                                />
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Extension
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Size
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {documents.map((document, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-indigo-600"
                                        checked={selectedDocuments.includes(document.id)}
                                        onChange={() => handleCheckboxChange(document.id)}
                                    />
                                </td>
                                <td className="px-6 text-xs/16px py-4 whitespace-nowrap">
                                    {document.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {document.extension}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {document.size > 1024 ? `${(document.size / 1024).toFixed(2)} KB` : `${document.size} B`}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <a href={`https://storage.cloud.google.com/manuscript-manager/manuscript-manager/${document.path}`} download={document.name}>
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Download
                                        </button>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AttachmentsTab;
