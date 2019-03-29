function Person(firstName, age) {
  this.firstName = firstName;
  this.age = age;

  this.describe = function() {
    return this.firstName + ", " + this.age + " years old"
  }
}
var myPerson = new Person("Aaeron", "23");
console.log(myPerson.describe())
