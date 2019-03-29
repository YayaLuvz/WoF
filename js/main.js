var scoreboard = {
  player_score : [0, 0, 0],

  changeScore(pl, score) {
    if (score == 12) {
      this.player_score[pl] = 0;
    }//bankrupt
    else if (score == -2) {
      this.player_score[pl] /= 2;
    }//solve incorrectly
    else {
      this.player_score[pl] += score;
    }

    if (this.player_score[pl] < 0)  {
      this.player_score[pl] = 0;
    }
  }//'pl' specifies which property gets changed, 'score' specifies by how much. + or -
}

var solutions = {
  currentIndex: 0,
  fantasyBooks: ["THE LIGHTNING THIEF", "THE SORCERERS STONE", "THE ALCHEMYST"],
  videoGames: ["HORIZON ZERO DAWN", "FINAL FANTASY XII"],
  coolCharacters: ["LUCINA", "PROFESSOR OAK", "ONE PUNCH MAN"]
}, solution;

var category, categoryIndex = 1;
var letters = [], vowelValue = -250, vowelCount = 0;

function letterType(char) {
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
        return 'not';
    }
}

function toggleWheel() {
  $('#overlay').toggle(1000);
}

function spinWheel() {
  //startSpin();
  return prize();
}
function prize() {
  var pr = 300/*parseInt(indicatedSegment)*/;
  return pr;
}
//GAME START
function gameStart() {
  chooseSolu(categoryIndex);
  for (i in scoreboard.player_score) {
    scoreboard.player_score[i] = 0;
  }
  alert(solution);
  // if (categoryIndex == solutions.length()) {
  //   categoryIndex = 1;
  // }
  // else {
  //   categoryIndex++;
  // }

  lettersboard(solution);

}
$('document').ready(function() {
  $(document).one("click", function() {
    gameStart();
  });
  $('.player-score > p').append(scoreboard.player_score[0]);
  $('#oppo_1 > p').append(scoreboard.player_score[1]);
  $('#oppo_2 > p').append(scoreboard.player_score[2]);
});
//SPIN
$("document").ready(function() {
  $('#spin_button').click(function() {
    toggleWheel();
    var spinValue = spinWheel();
    alert('spinning for ' + spinValue);
    var cons = guessCons();
    console.log(cons);
    if (cons == true) {
      scoreboard.changeScore(0, spinValue);
      console.log(scoreboard.player_score[0]);
    } else {
    //  disable vowel and solve buttons
      alert('sorry, bad guess');
    }
    toggleWheel();
    //pass_button enabled
    //  change class of button to disable repeated clicking
  });
});

//this function should be called when the wheel has spun and given its value
function guessCons() {
  var guess = prompt('pick a consonant').toUpperCase();
  while (letterType(guess) == 'vowel') {
    alert('entered a vowel. try again');
    guess = prompt('pick a consonant').toUpperCase();
  }

  if (letterType(guess)!='vowel') {
    //check to see if the solution contains guess
    if (searchSolu(solution, guess)) {
      showLetter(solution, guess);
      return true;
    } else {
      return false;
    }
  }
}
//VOWEL
$('document').ready(function() {
  $('#vowel_button').click(function() {
    scoreboard.changeScore(0, vowelValue); //should be negative
    alert('your score' + scoreboard.player_score[0]);
    vowel = guessVow();
    if (vowel == false) {
      // disable solve
    }
    else {
      scoreboard.changeScore(0, (vowelValue * (vowel - 1)));
      alert('your score' + scoreboard.player_score[0]);
    }

  //pass_button enabled
  //change class of button to disable repeated clicking
  });
});

function guessVow() {
  do {
    var guess = prompt('buy a vowel').toUpperCase();
    if (letterType(guess) != 'vowel') {
      alert('Not a vowel. try again');
    }
  }while(letterType(guess) != 'vowel');

  if (searchSolu(solution, guess)) {
    vowelCount = 0;
    showLetter(solution, guess);
    return vowelCount;
  } else {
    return false;
  }
}

//SOLVE
$('document').ready(function() {

  $('#solve_button').click(function(){

    // if (guessSolu()) {
    // //  you_win()
    // }
    // else
    if (guessSolu() == false){
      scoreboard.changeScore(0, -2);
      alert('your score: '+ scoreboard.player_score[0]);
    //  disable other buttons
    }
    else {
      //youWin();
      //start new game
      gameStart();
    }
    //pass_button enabled
    //change class of button to disable repeated clicking


  });
});

function victory() {
  alert('you win');
}

function guessSolu() {
  var solve = prompt('guess the answer');
  solve = solve.toUpperCase();
  if (solve == solution) {
    return true;
  }
  else {
    return false;
  }
}

function searchSolu(str, substr) {
  if (str.search(substr) > -1) {
    return true;
  }
  else {
    return false;
  }
}

function div(parent, className) {
  var r = document.createElement('div');
  r.className = className;
  parent.appendChild(r);
  return r;
}

function lettersboard(str) {
  var letter_board = document.getElementById('letter_board');

  while (letter_board.hasChildNodes()) {
    letter_board.removeChild(letter_board.firstChild);
  }

  var word = div(letter_board, 'word');
  for (var i = 0; i < str.length; ++i) {
    if (str[i] == ' ') {
      letters.push(div(letter_board, 'space'));
      word = div(letter_board, 'word');
    } else {
      letters.push(div(word, 'letter'));
    }
    console.log(i, str[i], word.children, letters.length);
  }
  $('#letter_board').addClass('clear');
  // for (var i = 0; i < solution.length; ++i) {
  //   letters[i].innerHTML = solution[i];
  // }
}

function showLetter(str, letter) {
  var indices = [];
  for(var i = 0; i < str.length; i++) {
    if (str[i] === letter){
      if (letterType(letter) == 'vowel') {
        vowelCount++;
      }
      indices.push(i);
      letters[i].innerHTML = str[i];
    }
    console.log(indices);
  }
}//gets the solution string and displays it in the boxes

//takes an int as parameter to choose the solution category
function chooseSolu(cdex) {
  //cycle through object property array of solutions
  category = Object.keys(solutions)[cdex];

  if (solutions['currentIndex'] == solutions[category].length) {
    solutions['currentIndex'] = 0;
  }

  //index += 1;
  solution = solutions[category][solutions['currentIndex']++];
}//should be called when the game ends

//PASS
