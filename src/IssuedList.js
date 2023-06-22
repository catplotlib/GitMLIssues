import React, { useEffect, useState } from 'react';
import Issue from './Issue';

function IssuesList() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/issues/') // replace with your API endpoint
      .then(response => response.json())
      .then(data => setIssues(data));
  }, []);
  return (
    <div className="IssuesList">
      {issues.map(issue => (
        <Issue key={issue.id} issue={issue} />
      ))}
    </div>
  );
}

export default IssuesList;
