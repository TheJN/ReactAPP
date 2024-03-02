import React from 'react';

const Question = ({ question, options, selectedOptions, onOptionChange }) => {
  return (
    <div>
      <h2>{question}</h2>
      <div>
        {options.map((option, index) => (
          <div key={index} className="form-check d-flex justify-content-center align-items-center">
            <input
              type="checkbox"
              className="form-check-input"
              id={`option-${index}`}
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => onOptionChange(option)}
            />
            <label className="form-check-label" htmlFor={`option-${index}`}>
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
