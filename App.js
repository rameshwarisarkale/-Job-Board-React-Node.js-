import React, { useState, useEffect } from 'react';
import axios from './api/api';
import JobList from './components/JobList';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('/jobs')
      .then(response => setJobs(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default App;
