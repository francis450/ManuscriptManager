import React, { useState } from 'react';
import axios from 'axios';

const SubmissionForm = () => {
  // State variables to track form fields
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [abstract, setAbstract] = useState('');
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object to send form data including file
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('abstract', abstract);
    formData.append('file', file);

    try {
      // Make POST request to API endpoint to submit form data
      const response = await axios.post('/api/submissions/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Display success message
      setSuccessMessage('Submission successful!');
      
      // Reset form fields
      setTitle('');
      setAuthor('');
      setAbstract('');
      setFile(null);
    } catch (error) {
      // Display error message
      setErrorMessage('Failed to submit form. Please try again.');
    }
  };

  return (
    <div>
      <h2>Submission Form</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <div>
          <label>Abstract:</label>
          <textarea value={abstract} onChange={(e) => setAbstract(e.target.value)} required />
        </div>
        <div>
          <label>File:</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubmissionForm;
