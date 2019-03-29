var scoreboard = {
  p1 : 0,
  p2 : 0,
  p3 : 0,
  changeScore : function(pl, score) {
    if (score == 12) {
      this.pl = 0;
    }//bankrupt
    else if (score == -2) {
      this.pl /= 2;
    }//solve incorrectly
    else {
      this.pl += score;
    }

    if (this.pl < 0)  {
      this.pl = 0;
    }
  }//'pl' specifies which property gets changed, 'score' specifies by how much. + or -
}

var solutions = {
  currentIndex: 0,
  fantasyBooks: ["The Lightning Thief", "The Sorcerer's Stone", "The Alchemyst"]
};

var letters = [];

function letterType( char) {
    char = char.toUpperCase();

    switch(char) {
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U':
        return 'vowel';
        break;
      default:
        return 'consonant';
    }
}
function toggleWheel() {

}

//SPIN
$('spin_button').click(function() {
  //showWheel();
  //var spinValue = spinWheel(); -ideally returns spinvalue
  //
  //if (guessCons();) {
  //  scoreboard.changeScore(p1, spinValue);
  //
  //}
  //else {
  //  disable vowel and solve buttons
  //}
  //pass_button enabled
  //  change class of button to disable repeated clicking
});
//this function should be called when the wheel has spun and given its value
function guessCons() {
  var guess = prompt('pick a consonant');
  if (letterType(guess)=='consonant') {
    //check to see if the solution contains guess
    //if (/*solution contains guess*/) {
    //  return true;
    //}
    //     else {
    //       return false;
    //     }
  }
}

//VOWEL
$('#vowel_button').click(function() {
  //scoreboard.changeScore(p1, vowelValue); //should be negative
  //if (guessVow()==false) {
  //  disable solve_button
  //}
  //else {
  //  scoreboard.changeScore(p1, vowelValue * (guessVow() - 1));
  //  populate letter_board
  //}
  //pass_button enabled
  //change class of button to disable repeated clicking
});

function guessVow() {
  var guess = prompt('buy a vowel');
  if (letterType(guess)=='vowel') {
    // if (/*solution contains guess*/) {
    //   //populate letterboard
    //   //get number of instances of guess in solution
    //   return true /*number of instances of guess in solution */;
    // }
    // else {
    //   return false;
    // }
  }
}

//SOLVE
$('#solve_button').click(function(){

  //if (guessSolu()) {
  //  you_win()
  //}
  //else {
  //  scoreboard.changeScore(p1, -2);
  //  disable other buttons
  //}
  //pass_button enabled
  //change class of button to disable repeated clicking
});

function guessSolu() {
  var solve = prompt('guess the answer');
  // if (solve == /* solution */) {
  //   return true;
  // }
  // else {
  //   return false;
  // }
}

function div(parent, className) {
  var r = document.createElement('div');
  r.className = className;
  parent.appendChild(r);
  return r;
}

var solution = 'solution solute';

function lettersboard() {
  var letter_board = document.getElementById('letter_board');

  while (letter_board.hasChildNodes()) {
    letter_board.removeChild(letter_board.firstChild);
  }

  var word = div(letter_board, 'word');
  for (var i = 0; i < solution.length; ++i) {
    if (solution[i] == ' ') {
      letters.push(div(letter_board, 'space'));
      word = div(letter_board, 'word');
    } else {
      letters.push(div(word, 'letter'));
    }
    console.log(i, solution[i], word.children, letters.length);
  }
  div(letter_board, 'clear');
  // for (var i = 0; i < solution.length; ++i) {
  //   letters[i].innerHTML = solution[i];
  // }
}

function showLetter(str, letter) {
  var indices = [];
  for(var i = 0; i < str.length; i++) {
    if (str[i] === letter){
      indices.push(i);
      letters[i].innerHTML = str[i];
    }
    console.log(indices);
  }
}//gets the solution string and displays it in the boxes



function chooseSolu() {
  //cycle through object property array of solutions
  if (solutions['currentIndex'] == solutions['fantasyBooks'].length) {
    solutions['currentIndex'] = 0;
  }

  //index += 1;
  return solutions['fantasyBooks'][solutions['currentIndex']++];

  //}
}//should be called when the game ends

//PASS
