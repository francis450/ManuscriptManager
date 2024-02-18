import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from '@inertiajs/react';
import InsertSubmissionCall from "./Partials/InsertSubmissionCall";
import ListOfCalls from "./Partials/ListOfCalls";

export default function Index({ auth, submissionCallForm, submissionCalls}) {
    console.log('submissionCalls:', submissionCalls);


    return (
        <Authenticated
            user={auth.user}
            // add a another nav link

            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">My Submission Calls</h2>}
        >
            <Head title="Submission Call Form" />

            <div className="py-3">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-2 sm:p-8 bg-white shadow sm:rounded-lg">
                        <InsertSubmissionCall submissionCallForm={submissionCallForm} className="max-w-xl" />
                    </div>
                </div>
            </div>

            <div className="py-3">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <header>
                            <h2 className="text-lg font-medium text-gray-900">All My Calls</h2>
                            <ListOfCalls callForSubmissions={submissionCalls}></ListOfCalls>
                        </header>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

// Path: resources/js/Pages/SubmissionCallForm/Index.jsx