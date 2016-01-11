
var counter = 0;

var res1 = document.getElementById('firstResult');
var res2 = document.getElementById('secondResult');
var res3 = document.getElementById('thirdResult');
var res4 = document.getElementById('fourthResult');
var img1 = document.getElementById('girls');
var img2 = document.getElementById('ipod')
var img3 = document.getElementById('bus')

var q1 = [', does Susan have children? Yes or No?', 'Y', 'YES', 'N', 'NO', 'That\'s correct. She has 2 children: Chanel & MaKayla.', 'That\'s incorrect. She has 2 children: Chanel & MaKayla.', res1, './images/girls.jpg', img1];
var q2 = [', does Susan have a cell phone? Yes or No', 'N', 'NO', 'Y', 'YES','That\'s correct. She hasn\'t had a cell phone for 5 years so she uses an iPod as a phone instead.', 'That\'s incorrect. She only has an iPod that she uses like a phone.', res2, './images/ipod.jpg', img2];
var q3 = [', does Susan live in Everett?', 'Y', 'YES', 'N', 'NO', 'That\'s correct. She takes the bus to school.', 'That\'s incorrect. She lives in Everett and takes the bus to school.', res3, './images/bus.jpg', img3];
var questData = [q1, q2, q3];

var userName = prompt('What is your name?');
  console.log ('The user\'s name is ' + userName);
  //   alert ('Hi, ' + userName + '.' + ' I\'m going to ask you a few questions.');

//confused with the the 3 console.logs below. There are not showing the user answers? Isn't this what they are suppose to do?
function questions (){
  //ask the Question
  var ans1 = prompt(userName + questData[i][0]).toUpperCase();
    console.log(questData[i][0]);
  //test the Question
  if (ans1 === questData[i][1] || ans1 === questData [i][2]) {
    //correct answer
    console.log(questData[i][7]);
    questData[i][7].textContent = questData[i][5];
    questData[i][7].className = 'right';
     questData[i][9].src = questData[i][8];
    counter++;
  }
  else if (ans1 === questData[i][3] || ans1 === questData[i][4]) {
      console.log(questData[i][7]);
    //wrong answer
    questData[i][7].textContent = questData[i][6];
    questData[i][7].className = 'wrong';
    questData[i][9].src = questData[i][8];
  }
  else {
    alert('Please give a yes or no answer');
      console.log(questData[i][7]);
      questions();
      //What would this line do?
      // questionData[i][7].parentNode.removeChild(questionData[i][7])
  }

}

function askQuestionFour() {
  var correct = false;
  while (correct === false){
    var answer4 = prompt(userName + ', Guess a number between 1 and 10');
    answer4 = parseInt(answer4);
    console.log('The user answered Questions 4: ' + answer4);
    if (answer4 <= 4) {
        alert('That number is too low. Try Again');
      }else if (answer4 >=6)
      {
        alert('That number is too high.Try Again');
      }else if (answer4 === 5){
        //alert('That\'s the correct number.');
        res4.className = 'right';
        res4.textContent = 'The correct number was 5.';
          correct = true;
      }else{
        alert('Please answer with a number')
      }
      }
  };
for (var i = 0; i < questData.length; i++){
  questions();
}

askQuestionFour();

alert(userName + ' You got ' + counter + ' correct out of 3.');
