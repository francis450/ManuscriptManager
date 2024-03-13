import React, { useState, useEffect } from 'react';
import { Trash } from '@/Svgs/Svgs';

const Attachments = ({ onSelectAttachments }) => {
    const [attachments, setAttachments] = useState([]);

    // useEffect(() => {
    //     setAttachments(existingAttachments);
    // }, [existingAttachments]);

    const addAttachment = () => {
        if (attachments.length < 5) {
            setAttachments([...attachments, { file: null }]);
        }
    };

    const updateDescription = (index, value) => {
        const updatedAttachments = [...attachments];
        updatedAttachments[index].description = value;
        setAttachments(updatedAttachments);
        onSelectAttachments(updatedAttachments); 
    };

    const updateFile = (index, file) => {
        const updatedAttachments = [...attachments];
        updatedAttachments[index].file = file;
        setAttachments(updatedAttachments);
        onSelectAttachments(updatedAttachments); // Call the function to update selected attachments
    };

    const deleteAttachment = (index) => {
        const updatedAttachments = [...attachments];
        updatedAttachments.splice(index, 1);
        setAttachments(updatedAttachments);
        onSelectAttachments(updatedAttachments); // Call the function to update selected attachments
    };

    console.log('Attachments:', attachments)

    return (
        <div className='w-full' >
            {attachments.map((attachment, index) => (
                <div key={index} className='flex m-2 justify-between hr-gap-1 hr-m-y-1'>
                    <input
                        type="file"
                        onChange={(e) => updateFile(index, e.target.files[0])}
                        className='grid-colspan-2 w-full bg-gray-100 rounded p-2'
                        // value={attachment.file}
                    />
                    <button
                        type='button'
                        className='grid-colspan-1 mt-1 block bg-gray-500 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                        onClick={() => deleteAttachment(index)}
                    >
                        <Trash />
                    </button>
                </div>
            ))}
            <button
                onClick={addAttachment}
                type='button'
                className='mt-2 w-full bg-gray-500 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
                + New Attachment
            </button>
        </div>
    );
};

export default Attachments;
