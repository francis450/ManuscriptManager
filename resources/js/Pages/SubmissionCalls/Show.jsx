import Authenticated from '@/Layouts/AuthenticatedLayout';
import React, { useState } from 'react';
import TabHeader from './Partials/TabHeader';
import { Overview, Document, Review, Statistic, Settings } from '@/Svgs/Svgs';
import Content from './Partials/Content';
import OverviewTabContent from './Tabs/OverviewTabContent';
import SubmissionsTabContent from './Tabs/SubmissionsTabContent';
import ReviewsTabContent from './Tabs/ReviewsTabContent';
import StatisticsTabContent from './Tabs/StatisticsTabContent';
import ActionsTabContent from './Tabs/ActionsTabContent';

const Show = ({ auth, submissionCall, tab}) => {

    const [activeTab, setActiveTab] = useState(tab);

    const tabs = [
        { title: 'Overview', content: 'Content for Tab 1' },
        { title: 'Submissions', content: 'Content for Tab 2' },
        { title: 'Reviews', content: 'Content for Tab 3' },
        { title: 'Statistics', content: '' },
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
                return <OverviewTabContent submissionCall={submissionCall} />;
            case 1:
                return <SubmissionsTabContent submissions={submissionCall.submissions} />;
            case 2:
                return <ReviewsTabContent reviews={submissionCall.reviews} />;
            case 3:
                return <StatisticsTabContent submissions={submissionCall.submissions} />;
            case 4:
                return <ActionsTabContent submissionCall={submissionCall} />;
            default:
                return <OverviewTabContent submissionCall={submissionCall} />;
                
        }
    }
    return (
        <div>
            <Authenticated
                user={auth.user}
                header={
                    <>
                        <h2 className="font-bold text-gray-1000 leading-tight mb-2">Calls / <span className='text-gray-400'>{submissionCall.title}</span></h2>
                    </>
                }
            >
                <div className="mt-1">
                    <div className="overflow-x-scroll max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                        <TabHeader tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} icons={icons} />
                    </div>
                </div>

                <div className="py-3 bg-white p-4 ">
                    <div className="max-w-7xl  mx-auto sm:px-6 lg:px-8 space-y-6">
                        <Content content={renderTabContent(activeTab)} />
                    </div>
                </div>
            </Authenticated >
        </div >
    );
};
export default Show;
