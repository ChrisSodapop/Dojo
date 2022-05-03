let number = prompt("Choose a number");

function fizzBuzz() {
  if (number % 3 === 0 && number % 5 === 0) {
    return console.log("Fizzbuzz");
  } else if (number % 5 === 0) {
    return console.log("Buzz");
  } else if (number % 3 === 0) {
    return console.log("fizz");
  } else {
    return console.log("error");
  }
}

fizzBuzz();
//Écrire un programme qui renvoie :

//"fizz" dans le cas où le nombre passé en paramètre est un multiple de 3
//"buzz" dans le cas où le nombre passé en paramètre est un multiple de 5
//"fizzbuzz" dans le cas où le nombre passé est à la fois un multiple de 3 et de 5
//Le nombre dans le cas où ce dernier n'est ni un multiple de 3 ni un multiple de 5
