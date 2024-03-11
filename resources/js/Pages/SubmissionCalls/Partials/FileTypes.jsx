import React, { useState } from 'react';
import Dropdown from '@/Components/Dropdown';
import { Close, DownArrow } from '@/Svgs/Svgs';
import TextInput from '@/Components/TextInput';


function FileTypes({ selectedItems, setSelectedItems }) {
    const [searchInput, setSearchInput] = useState('');

    const fileTypes = ['PDF', 'DOC', 'DOCX', 'PPT', 'PPTX', 'XLS', 'XLSX', 'TXT', 'RTF', 'ODT', 'ODS', 'ODP', 'ODG',
        'ODF', 'ODC', 'ODB', 'ODM', 'OTT', 'OTS', 'OTP', 'OTG', 'OTF', 'HTML', 'HTM', 'XML', 'CSV', 'JSON', 'YAML',
        'YML', 'XLS', 'XLSX', 'XLSM', 'XLSB', 'XLTX', 'XLTM', 'XLT', 'XLAM', 'XLA', 'XLW', 'XLR', 'XLL', 'XLK', 'XLM', 'XLG'];

    const filteredFileTypes = fileTypes.filter(item =>
        item.toLowerCase().includes(searchInput.toLowerCase())
    );

    const handleSelect = (event) => {
        const selectedItem = event.target.value;
        if (selectedItems.includes(selectedItem)) {
            setSelectedItems(selectedItems.filter(item => item !== selectedItem));
        } else {
            setSelectedItems([...selectedItems, selectedItem]);
        }
    };

    const handleRemove = (item) => {
        setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
    };

    return (
        <div>
            <div className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'>
                <Dropdown className=" w-full">
                    <Dropdown.Trigger>
                        <TextInput
                            id="file-types"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            autoComplete="file-types"
                        />
                    </Dropdown.Trigger>
                    <Dropdown.Content style={{ maxHeight: '200px', overflowY: 'auto' }}>
                        {filteredFileTypes.map((item, index) => (
                            <Dropdown.Item key={index} value={item} onClick={handleSelect} className={`block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out ${selectedItems.includes(item) ? 'bg-gray-100' : ''}`}>
                                {item}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Content>
                </Dropdown> 
            </div>

            <div className="flex flex-wrap mt-2">
                {selectedItems.map((item, index) => (
                    <div key={index} className="inline-flex items-center px-3 py-1 bg-gray-200 text-gray-700 rounded-full m-1">
                        <span className='text-xs'>{item}</span>
                        <button type='button' onClick={() => handleRemove(item)} className="ml-1">
                            <Close />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default FileTypes;
