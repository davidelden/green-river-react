import React from 'react';

const Submit = props => {
  const { score, click } = props;

  return (
    <div className="d-flex align-items-center">
      <div className="ml-auto mr-4">Your Score: {score}</div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={click}>
        Submit
      </button>
    </div>
  )
}

export default Submit;
