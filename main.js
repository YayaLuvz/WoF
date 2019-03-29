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
  //  populate letterboard
  //}
  //else {
  //  disable vowel and solve buttons
  // }
  //pass button
}
//this function should be called when the wheel has spun and given its value
function guessCons() {
  var guess = prompt('enter a consonant');
  if (letter(guess)=='consonant') {
    //check to see if the solution contains guess
    if (/*solution contains guess*/) {
      return true;
    }
    else {
      return false;
    }
  }
}
//VOWEL
$('#vowel_button').click(function() {
  //guessVow();
  //
}
function guessVow() {
  var guess = prompt('enter a vowel');
  if (letter(guess)=='vowel') {
    //check to see if the solution contains guess
    if (/*solution contains guess*/) {
      return true;
    }
    else {
      return false;
    }
  }


}

//SOLVE
$('#solve_button').click(function(e){

  //check guess
});
