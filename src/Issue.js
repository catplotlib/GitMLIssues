import React from 'react';

function Issue({ issue }) {
  return (
    <div className="Issue">
      <h2>{issue.title}</h2>
      <p>{issue.labels}</p>
      <a href={issue.url}>Link to Issue</a>
    </div>
  );
}

export default Issue;
