import React from 'react';

const Progress = props => {
  const { answersLength, totalQuestions } = props,
        percentComplete = Math.floor((answersLength/totalQuestions)*100);

  let barStyle = {};

  if(isNaN(percentComplete)) {
    barStyle = { width: "0%" }
  } else {
    barStyle = { width: percentComplete.toString() + "%"}
  }

  return (
    <React.Fragment>
      <h5>Progress:</h5>
      <div className="progress mb-4">
        <div className="progress-bar" style={barStyle} />
      </div>
    </React.Fragment>
  )
}

export default Progress;
