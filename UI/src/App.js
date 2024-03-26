import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [typescriptCode, setTypescriptCode] = useState('');
  const [testCases, setTestCases] = useState([]);

  const handleGenerateTestCases = async () => {
    try {
      const response = await axios.post('http://localhost:5000/generate-test-cases', { typescript_code: typescriptCode });
      setTestCases(response.data);
    } catch (error) {
      console.error('Error generating test cases:', error);
    }
  };

  return (
    <div>
      <center>
      <h1> Provide Test Cases </h1>
      <textarea 
      border={3} 
      rows={20} 
      cols={120} 
      color='white'
      placeholder=" Please enter your code..."
      value={typescriptCode} onChange={(e) => setTypescriptCode(e.target.value)} />
      <br />
      <br />
      <button onClick={handleGenerateTestCases}>Click Here to Generate Test Cases</button>
      </center>
      <h2>Test Cases:</h2>
      <ol>
        {testCases.map((testCase, index) => (
          <li key={index}>{testCase}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
