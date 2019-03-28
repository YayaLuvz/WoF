var scoreboard = {
  p1_score : 0,
  p2_score : 0,
  p3_score : 0
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
//this function should be called when the wheel has spun and given its value
function guessCons() {
  var guess = prompt('enter a consonant');
  if (letter(guess)=='consonant') {
    //check to see if the solution contains guess
  }


}
//VOWEL
//var vowel =
//SOLVE
$('#solve_button').click(function(e){

  //check guess
});
