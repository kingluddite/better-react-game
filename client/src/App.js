import React, { Component } from 'react';
import QuizApp from './components/QuizApp';

class App extends Component {
  render() {
    return (
      <>
        <QuizApp totalQuestions={2} />
      </>
    );
  }
}

export default App;
