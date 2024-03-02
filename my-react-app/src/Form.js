import Question from './Question';
import Summary from './Summary';
import React, { useState } from 'react';



const Form = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [responses, setResponses] = useState({});
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [showSummary, setShowSummary] = useState(false);
  
    const questions = [
      {
        question: "What is your favorite color?",
        options: ["Red", "Blue", "Green", "Yellow"]
      },
      {
        question: "What is your favorite animal?",
        options: ["Dog", "Cat", "Bird", "Fish"]
      },
      // Add more questions as needed
    ];
  
    const handleNextQuestion = () => {
      if (currentQuestion === questions.length - 1) {
        setShowSummary(true);
      } else {
        setCurrentQuestion(prev => prev + 1);
      }
    };
    
  
    const handlePrevQuestion = () => {
      setCurrentQuestion(prev => prev - 1);
    };
  
    const handleOptionChange = (option) => {
      const updatedOptions = selectedOptions.includes(option)
        ? selectedOptions.filter(item => item !== option)
        : [...selectedOptions, option];
      setSelectedOptions(updatedOptions);
    };
  
    const handleSubmit = () => {
      // Perform POST request with the collected responses
      fetch('your-post-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(responses)
      })
      .then(response => {
        // Handle response as needed
      })
      .catch(error => {
        // Handle error
      });
    };
  
    return (
      <div className="container text-center">
        {!showSummary ? (
          <div>
            <Question
              question={questions[currentQuestion].question}
              options={questions[currentQuestion].options}
              selectedOptions={selectedOptions}
              onOptionChange={handleOptionChange}
            />
            <div>
              {currentQuestion > 0 && (
                <button className="btn btn-primary m-2" onClick={handlePrevQuestion}>Previous</button>
              )}
              {currentQuestion < questions.length - 1 ? (
                <button className="btn btn-primary m-2" onClick={handleNextQuestion}>Next</button>
              ) : (
                <button className="btn btn-primary m-2" onClick={handleNextQuestion}>Submit</button>
              )}
            </div>
          </div>
        ) : (
          <Summary responses={responses} />
        )}
      </div>
    );
  };

export default Form;
