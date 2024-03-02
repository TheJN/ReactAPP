import React from 'react';

const Summary = ({ responses }) => {
  return (
    <div>
      <h2>Summary of Answers</h2>
      <ul>
        {Object.entries(responses).map(([question, answer]) => (
          <li key={question}>
            <strong>{question}:</strong> {answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;
