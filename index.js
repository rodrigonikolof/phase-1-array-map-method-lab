const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCaseds = () => {
  return tutorials
}


function titleCased(array){
  const casedTutorials = text.replace(array.map(/(^\w|\s\w)/g, m => m.toUpperCase()))
  return casedTutorials;
}

console.log(titleCased(tutorials));


// text.replace(/(^\w|\s\w)/g, m => m.toUpperCase());

