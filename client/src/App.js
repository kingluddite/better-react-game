import React, { Component } from 'react';
import QuizApp from './components/QuizApp';

class App extends Component {
  render() {
    return (
      <>
        <QuizApp totalQuestions={23} />
      </>
    );
  }
}

export default App;
