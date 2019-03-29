var person = {
  fname : "Aaeron",
  mname : "Emmannuel Llewelyn",
  lname : "Jhonson-Whyte",
  fcandy : "peach rings",
  fgame : "Dark Souls"
};

function printFullName() {
  console.log(this.fname + " " + this.mname + " " + this.lname);
}

function printFullDetails() {
  console.log(this.fname + " " + this.mname + " " + this.lname + " likes " + this.fcandy + " and " + this.fgame + ".");
}

var boundPrintFullName = printFullName.bind(person);
var boundPrintFullDetails = printFullDetails.bind(person);

boundPrintFullName();
printFullDetails.call(person);
