import React, { Component } from 'react';
import './App.css';
import Progress from './Progress/Progress';
import Question from './Question/Question';
import Submit from './Submit/Submit';
import Wrapper from './hoc/Wrapper';

class App extends Component {
  state = {
    data: [],
    answers: {},
    score: '?'
  }

  componentDidMount() {
    fetch('https://api.myjson.com/bins/en3n5')
      .then(res => res.json())
      .then(data => this.setState({data: data}))
      .catch(err => console.error(err))
  }

  onAnswerChangeHandler = (id, index) => {
    let choiceIndex = index,
        updatedAnswers = { ...this.state.answers, ...{[id]: choiceIndex} };

    this.setState({
      answers: updatedAnswers
    });
  }

  getAnswersLength = () => {
    return Object.keys(this.state.answers).length;
  }

  getTotalQuestions = () => {
    return this.state.data.length;
  }
  getCorrectChoices = () => {
    return this.state.data.map(elem => elem.correctChoiceIndex);
  }

  calculateScore = () => {
    const correctChoices = this.getCorrectChoices();
    let numCorrect = 0;

    correctChoices.forEach((choice, index) => {
      if(choice === this.state.answers[index+1]) {
        numCorrect++
      }
    })

    this.setState({
      score: `${numCorrect} out of ${this.getTotalQuestions()} correct.`
    });
  }

  render() {
    let question = this.state.data.map(elem => (
      <Question
       questionData={elem}
       key={elem.id}
       change={this.onAnswerChangeHandler} />
     )
    )

    return (
      <section>
        <h4 className="mb-4">Example Vocabulary Quiz</h4>
        {this.state.data.length > 0 ?
          <React.Fragment>
            <Progress
              totalQuestions={this.getTotalQuestions()}
              answersLength={this.getAnswersLength()} />
           {question}
           <Submit
             score={this.state.score}
             click={this.calculateScore} />
         </React.Fragment>
        : null}
      </section>
    );
  }
}

export default Wrapper(App);
