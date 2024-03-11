import React, { useState } from 'react';

function CallTypes({ templateTypes }) {
    // State to keep track of the selected option
    const [selectedOption, setSelectedOption] = useState();

    // Function to handle change in selected option
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    console.log("call type: ",templateTypes);
    return (
        <div>
            {templateTypes.map((templateType, index) => (
                <div key={index} className='flex justify-between'>
                    <label>
                        <input
                            type="radio"
                            value={templateType}
                            checked={selectedOption === templateType}
                            onChange={handleOptionChange}
                        />
                        {templateType}
                    </label>
                </div>
            ))}
        </div>
    );
}

export default CallTypes;
