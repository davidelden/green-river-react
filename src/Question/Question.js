import React from 'react';

const Question = props => {
  const { word, choices, id } = props.questionData;
  return (
    <div className="mb-4">
      <h5>Question: Define {word}</h5>
        {choices.map((choice, index) => (
          <div className="form-check" key={index}>
            <input
              type="radio"
              className="form-check-input"
              value={index}
              name={`question-${id}`}
              onChange={() => props.change(id, index)} />
            <label className="form-check-label"> {choice.text}</label><br />
          </div>
        ))}
    </div>
  )
}

export default Question;
