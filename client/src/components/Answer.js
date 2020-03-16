import React from 'react';
import PropTypes from 'prop-types';

const Answer = ({ answer, handleAnswerClick, handleEnterPress }) => {
  // on click grab index of answer
  return (
    <li
      className="question-answer"
      onClick={handleAnswerClick}
      tabIndex="0"
      onKeyDown={handleEnterPress}
    >
      {answer}
    </li>
  );
};

Answer.propTypes = {
  answer: PropTypes.object.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
  handleEnterPress: PropTypes.func.isRequired,
};
export default Answer;
