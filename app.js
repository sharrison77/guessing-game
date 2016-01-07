var userName = prompt('What is your name?');
  console.log ('The user\'s name is ' + userName);
    alert ('Hi, ' + userName + '.' + ' I\'m going to ask you a few questions.');

var counter = 0;

function askQuestionOne(){
  var answer1 = prompt(userName + ', does Susan have children? Yes or No?').toUpperCase();
    console.log ('The user answered Question 1: ' + answer1);
    
  var check1 = false;
    do {
      if (answer1 === 'YES' || answer1 === 'Y') {
        alert('That\'s correct. She has 2 children.');
        counter = counter + 1;
        check1 = true;
      } else if (answer1 === 'NO' || answer1 === 'N') {
        alert('That\'s incorrect. She has children.');
        check1 = true;
      } else {
        alert('Please answer with \'Yes\' or \'No\'.');
        var answer1 = prompt(userName + ', does Susan have children? Yes or No?').toUpperCase();
        console.log ('The user answered Question 1: ' + answer1);
      }
    } while (check1 === false);
  };


function askQuestionTwo() {
  var answer2 = prompt(userName + ', does Susan have a cell phone? Yes or No').toUpperCase();
  console.log ('The user answered Question 2: ' + answer2);

  var check1 = false;
    do {
      if (answer2 === 'YES' || answer2 === 'Y') {
        alert('That incorrect. She hasn\'t had a cell phone for the past 5 years.');
        check1 = true;
        } else if (answer2 === 'NO' || answer2 === 'N') {
          alert('That\'s correct. She doesn\'t have a cell phone.');
          counter = counter + 1
          check1 = true;
        } else {
          alert('Please answer with \'Yes\' or \'No\'.');
          var answer2 = prompt(userName + ', does Susan have a cell phone? Yes or No').toUpperCase();
          console.log ('The user answered Question 2: ' + answer2);
        }
      } while (check1 === false);
};


function askQuestionThree() {
  var answer3 = prompt(userName + ', does Susan live in Everett?').toUpperCase();
  console.log('The user answered Question 3: ' + answer3);

  var check1 = false
    do {
      if (answer3 === 'YES'|| answer3 === 'Y') {
        alert('That\'s correct. She takes the bus to school.');
        counter = counter + 1;
        check1 = true;
        } else if (answer3 === 'NO' || answer3 === 'N') {
          alert('That\'s incorrect. She lives in Everett.');
          check1 = true;
        }else {
          alert('Please answer with \'Yes\' or \'No\'.');
        }
      } while (check1 === false);
};

function askQuestionFour() {
  var correct = false;
  while (correct === false){
    var answer4 = prompt(userName + ', Guess a number between 1 and 10');
    answer4 = parseInt(answer4);
    console.log('The user answered Questions 4: ' + answer4);
    if (answer4 <= 4) {
        alert('That number is too low.');
      }else if (answer4 >=6)
      {
        alert('That number is too high.');
      }else if (answer4 === 5){
        alert('That\'s the correct number.');
          correct = true;
      }else{
        alert('Please answer with a number')
      }
      }
  };

askQuestionOne();
askQuestionTwo();
askQuestionThree();
askQuestionFour();

alert('You got ' + counter + ' correct.');
