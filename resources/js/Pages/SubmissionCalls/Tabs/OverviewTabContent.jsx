import { Cross, HourGlass } from '@/Svgs/Svgs';
import React from 'react';
import OverviewTable from '../Partials/OverviewTable';

const OverviewTabContent = ({ submissionCall }) => {
    return (
        <>
            <div className="bg-gray-200 rounded-lg shadow-md mb-4"> 
                <div className="p-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2 justify-between">{submissionCall.title}
                        <span className="px-2 ml-2 inline-flex text-xs leading-5 font-semibold border border-gray-500 rounded-full bg-transparent text-gray-599">
                            {submissionCall.status}
                        </span>
                    </h2>
                    <p className="text-gray-700 mb-4">{submissionCall.description}</p>
                    <div className="flex items-center text-gray-500">
                        <Cross />
                        <p className="text-sm mr-4">{new Date(submissionCall.created_at).toLocaleString()}</p>
                        <HourGlass />
                        <p className="text-sm mr-4">{new Date(submissionCall.deadline).toLocaleString()}</p>
                    </div>
                </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
                <OverviewTable submissionCall={submissionCall} />
            </div>
        </>
    );
};

export default OverviewTabContent;
