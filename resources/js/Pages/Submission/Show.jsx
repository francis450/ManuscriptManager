import Authenticated from '@/Layouts/AuthenticatedLayout';
import React, { useState } from 'react';
import TabHeader from '../SubmissionCalls/Partials/TabHeader';
import { Overview, Document, Review, Statistic, Settings } from '@/Svgs/Svgs';
import Content from '../SubmissionCalls/Partials/Content';
import OverviewTabContent from './tabs/OverviewTabContent';
import ReviewFeedbackTab from './tabs/ReviewFeedbackTabContent';
import ReviewFeedbackTab1 from './tabs/ReviewerFeedbackTab';
import AttachmentsTab from './tabs/AttachmentsTab';



const Show = ({ auth, submission, tab}) => {

    console.log("Submission details: ",submission);

    const [activeTab, setActiveTab] = useState(tab);

    const tabs = [
        { title: 'Overview', content: 'Content for Tab 1' },
        { title: 'Review Feedback', content: 'Content for Tab 2' },
        { title: 'Attachments', content: 'Content for Tab 3' },
        { title: 'Activity Log', content: '' },
        { title: 'Actions', content: '' },
    ];

    const icons = [
        <Overview />,
        <Document />,
        <Review />,
        <Statistic />,
        <Settings />,
    ];
    const renderTabContent = (activeTab) => {
        switch (activeTab) {
            case 0:
                return <OverviewTabContent submission={submission} />;
            case 1:
                return <ReviewFeedbackTab submission={submission} />;
                // return <ReviewFeedbackTab1 submission={submission} />;
            case 2:
                return <AttachmentsTab documents={submission.documents} />;
            case 3:
                // return <StatisticsTabContent submissions={submissionCall.submissions} />;
            case 4:
                // return <ActionsTabContent submissionCall={submissionCall} />;
            default:
                // return <OverviewTabContent submissionCall={submissionCall} />;
                
        }
    }
    return (
        <div>
            <Authenticated
                user={auth.user}
                header={
                    <>
                        <h2 className="font-bold text-gray-1000 leading-tight mb-2">Submission / <span className='text-gray-400'>{submission.title}</span></h2>
                    </>
                }
            >
                <div className="mt-1">
                    <div className="overflow-x-scroll max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                        <TabHeader tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} icons={icons} />
                    </div>
                </div>

                <div className="py-3 bg-white h-full p-4 ">
                    <div className="max-w-7xl  mx-auto sm:px-6 lg:px-8 space-y-6">
                        <Content content={renderTabContent(activeTab)} />
                    </div>
                </div>
            </Authenticated >
        </div >
    );
};
export default Show;
