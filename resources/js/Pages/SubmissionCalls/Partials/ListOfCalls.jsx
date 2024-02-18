import CardLink from "@/Layouts/CardLink";

export default function ListOfCalls({ callForSubmissions }) {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {callForSubmissions.map((submissionCall, index) => (
                    <CardLink
                        href={`/submissionCall/${submissionCall.id}`}
                        title={submissionCall.title}
                        creation_date={`Created: ${new Date(submissionCall.created_at).toLocaleString()}`}
                        deadline={`Deadline: ${new Date(submissionCall.deadline).toLocaleString()}`}
                    />
                ))}
            </div>
        </div>
    );
}