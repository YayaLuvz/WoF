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
  fantasyBooks: ["The Lightning Thief", "The Sorcerer's Stone"]
};

function letter(char) {
    // var lett = prompt('Enter a Letter');
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
}
//this function should be called when the wheel has spun and given its value
function guessCons() {
  var guess = prompt('pick a consonant');
  if (letter(guess)=='consonant') {
    //check to see if the solution contains guess
    if (/*solution contains guess*/) {
      return true;
    }
         else {
           return false;
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
  //  populate letterboard
  //}
  //pass_button enabled
  //change class of button to disable repeated clicking
});
function guessVow() {
  var guess = prompt('buy a vowel');
  if (letter(guess)=='vowel') {
    if (/*solution contains guess*/) {
      //populate letterboard
      //get number of instances of guess in solution
      return true /*number of instances of guess in solution */;
    }
    else {
      return false;
    }
  }


}

//SOLVE
$('#solve_button').click(function(){

  //if (guessSolu()) {
  //  you win function
  //}
  //else {
  //  scoreboard.changeScore(p1, -2);
  //  disable other buttons
  //}
  //pass_button enabled
});

function guessSolu() {
  var solve = prompt('guess the answer');
  if (solve == /* solution */) {
    return true;
  }
  else {
    return false;
  }
}
