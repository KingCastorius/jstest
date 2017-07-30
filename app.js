let lifesMeaning = 42;

console.log('What is the meaning of life?')

function sayName() {
  if(lifesMeaning) {
    return 'correct';
  }else {
    return 'incorrect'
  }
}

console.log(sayName());

// build a quiz app
// 1. in the  console i need to ask a question
// 2. Pass an answer to my question function
// 3.if the answer is correct, console log "correct", else console log incorrect
