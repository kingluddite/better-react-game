import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';

const Question = ({
  question,
  answers,
  handleAnswerClick,
  handleEnterPress,
}) => {
  return (
    <li className="question">
      <h2 className="question-title">{question}</h2>

      <ul className="question-answers">
        {answers.map((answer, index) => {
          // grab each answer and that answer's index
          // console.log(index);
          return (
            <Answer
              key={JSON.stringify(answer.props.children)}
              answer={answer}
              // pass the function and index as argument
              handleAnswerClick={handleAnswerClick(index)}
              handleEnterPress={handleEnterPress(index)}
            />
          );
        })}
      </ul>
    </li>
  );
};

Question.propTypes = {
  question: PropTypes.object.isRequired,
  answers: PropTypes.array.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
  handleEnterPress: PropTypes.func.isRequired,
};

export default Question;
