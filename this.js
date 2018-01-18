/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  global - goes up and grabs the nearest object
    
* 2.  implicit binding - when calling a function, implict this will refer to the object to the left of the function name
* 3.  new keyword - A new constructor has an inherent 'this'.  When you create new occurence, this refers back to that instance of the constructor (left of the dot)
* 4.  explicit binding -  Program is specifically told what to use as 'this'.

* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1
//(in browser)
console.log(this);
// code example for Window Binding

// Principle 2
let myObj = {
    name: 'Lisa',
    age: 38,
    saysHi: function() {
      console.log(`Hi, ${this.name}!`);
    }
  };
  
  myObj.saysHi();
// Principle 3
function Duties(name, task) {
    this.name = name;
    this.task = task;
    this.toDo = function() {
      console.log(`${name} : ${task}`);
    };
  }
  
  let dishes = new Duties('Lisa', 'Clean and put away dishes');
  dishes.toDo();
// Principle 4

function Duties(name, task) {
    this.name = name;
    this.task = task;
    this.toDo = function() {
      console.log(`${this.name} : ${this.task}`);
    };
  }
  
  let dishes = new Duties('Lisa', 'Clean and put away dishes');
  let laundry = new Duties('John', 'Wash, dry, and fold clothes');

  let x = laundry.toDo.bind(dishes);
  x();

