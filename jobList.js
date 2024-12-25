import React from 'react';

function JobList({ jobs }) {
  return (
    <div>
      {jobs.map(job => (
        <div key={job._id}>
          <h2>{job.title}</h2>
          <p>{job.description}</p>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Location:</strong> {job.location}</p>
        </div>
      ))}
    </div>
  );
}

export default JobList;
