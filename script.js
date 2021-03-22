function Pageload(){

 /*class Car {
   constructor(name, year) {
     this.name = name;
     this.year = year;
   }
   age() {
     let date = new Date();
     return date.getFullYear() - this.year;
   }
   isOld() {
     return this.age() < 10 ? "New" : "old";
   }
 }
 let myCar = new Car("Ford", 2014);
 document.getElementById("root").innerHTML = `My car is ${myCar.name}, and is ${myCar.age()} years old.This is ${myCar.isOld()} car.`;
*/
/*
const car = (name, year) => {
  return {
    name: name,
    year: year,
    age: () => {
      let date = new Date();
      return date.getFullYear() - year;
    },
 
  };
 
};
console.log(car("Ford", 2014));

document.getElementById("root").innerHTML = `My car is a ${car("Forkd", 2014).name
}, and is ${car("Forkd", 2014).age()} years old.`;
*/
function myCar(type, age, year, date) {
  let myCar1 = new carCon('Ford', 7, 2021, 2014, ['klíma', 'rádió']);

  this.type = type;
  this.newage = age;
  this.year = year;
  this.date = new Date();
  let myCar = new Car("Ford", 2014);
  document.getElementById("root").innerHTML = `My car is ${myCar.name}, and is ${myCar.age()} years old.This is ${myCar.isOld()} car.`;
  
}
myCar();
};




window.addEventListener("load", Pageload);