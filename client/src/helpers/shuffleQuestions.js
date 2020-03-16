const shuffleQuestions = array => {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
};

export default shuffleQuestions;

// alt (more efficient)
// const shuffleQuestions = (arr) => {
//   return arr.sort((a,b) => Math.random() < .5 ? 1 : -1);
// }
