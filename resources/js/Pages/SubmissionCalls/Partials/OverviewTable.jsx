

const OverviewTable = ({ submissionCall }) => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-200">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Metric
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Count
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <h4 className="text-gray-900 font-medium">Submissions</h4>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <p className="text-gray-700">{submissionCall.submissions.length}</p>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <h4 className="text-gray-900 font-medium">Documents</h4>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <p className="text-gray-700">{submissionCall.documents.length}</p>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <h4 className="text-gray-900 font-medium">Reviews</h4>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <p className="text-gray-700">{submissionCall.reviews.length}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default OverviewTable;