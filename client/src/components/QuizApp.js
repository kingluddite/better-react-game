// 3rd parties
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// static data
import QUESTION_DATA from '../data/quiz-data';

// helpers
import shuffleQuestions from '../helpers/shuffleQuestions';

// components
import Quiz from './Quiz';
import Modal from './Modal';
import Results from './Results';

class QuizApp extends Component {
  // start off with how many total questions
  state = {
    ...this.getInitialState(this.props.totalQuestions),
  };

  // make total questions required
  static propTypes = {
    totalQuestions: PropTypes.number.isRequired,
  };

  getInitialState(totalQuestions) {
    // console.log(QUESTION_DATA);
    // return lowest value or NaN
    totalQuestions = Math.min(totalQuestions, QUESTION_DATA.length);
    // shuffle all the questions
    const QUESTIONS = shuffleQuestions(QUESTION_DATA).slice(0, totalQuestions);

    return {
      questions: QUESTIONS,
      totalQuestions: totalQuestions,
      userAnswers: QUESTIONS.map(() => {
        return {
          tries: 0,
        };
      }),
      step: 1,
      score: 0,
      // modal state stuff
      modal: {
        state: 'hide',
        praise: '',
        points: '',
      },
    };
  }

  handleAnswerClick = index => e => {
    const { questions, step, userAnswers } = this.state;
    // questions[0].correct is correct answer
    // check if the selected answer is the correct answer
    const isCorrect = questions[0].correct === index;
    const currentStep = step - 1;
    const tries = userAnswers[currentStep].tries;

    // correct answer clicked and is a list item (LI)
    if (isCorrect && e.target.nodeName === 'LI') {
      // Prevent other answers from being clicked after correct answer is clicked
      // style="pointer-events: none:" is added to the question ul
      e.target.parentNode.style.pointerEvents = 'none';

      // add a class name of "right" to the LI
      // this is the right answer and we can now style it as such (green background)
      e.target.classList.add('right');

      // increment the number of tries by 1
      userAnswers[currentStep] = {
        tries: tries + 1,
      };

      // update the state with the tries
      this.setState({
        userAnswers: userAnswers,
      });

      setTimeout(() => this.showModal(tries), 750);

      setTimeout(this.nextStep, 2750);
    } else if (e.target.nodeName === 'LI') {
      // wrong answer
      // turn off clickability on LI
      e.target.style.pointerEvents = 'none';
      // add "wrong" class to LI
      e.target.classList.add('wrong');

      // increment tries
      userAnswers[currentStep] = {
        tries: tries + 1,
      };

      this.setState({
        userAnswers,
      });
    }
  };

  // submit answers by pressing "enter" key
  // on work if set up tabs properly
  handleEnterPress = index => e => {
    if (e.keyCode === 13) {
      console.log(e.keyCode);
    }
  };

  // show end user progress in game
  // give points and praise
  showModal = tries => {
    let praise;
    let points;

    switch (tries) {
      case 0: {
        praise = '1st Try!';
        points = '+10';
        break;
      }
      case 1: {
        praise = '2nd Try!';
        points = '+5';
        break;
      }
      case 2: {
        praise = 'Correct!';
        points = '+2';
        break;
      }
      default: {
        praise = 'Correct!';
        points = '+1';
      }
    }

    // update state of modal
    // show modal with praise and points
    this.setState({
      modal: {
        state: 'show',
        praise,
        points,
      },
    });
  };

  nextStep = () => {
    const { questions, userAnswers, step, score } = this.state;
    const restOfQuestions = questions.slice(1);
    const currentStep = step - 1;
    const tries = userAnswers[currentStep].tries;

    this.setState({
      step: step + 1,
      score: this.updateScore(tries, score),
      questions: restOfQuestions,
      modal: {
        state: 'hide',
      },
    });
  };

  updateScore(tries, score) {
    switch (tries) {
      case 1:
        return score + 10;
      case 2:
        return score + 5;
      case 3:
        return score + 2;
      default:
        return score + 1;
    }
  }

  restartQuiz = () => {
    this.setState({
      ...this.getInitialState(this.props.totalQuestions),
    });
  };

  render() {
    const {
      questions,
      modal,
      step,
      userAnswers,
      totalQuestions,
      score,
    } = this.state;

    if (step >= totalQuestions + 1) {
      return (
        <Results
          score={score}
          restartQuiz={this.restartQuiz}
          userAnswers={userAnswers}
        />
      );
    } else
      return (
        <>
          <Quiz
            step={step}
            questions={questions}
            totalQuestions={totalQuestions}
            score={score}
            handleAnswerClick={this.handleAnswerClick}
            handleEnterPress={this.handleEnterPress}
          />
          {modal.state === 'show' && <Modal modal={modal} />}
        </>
      );
  }
}

export default QuizApp;
