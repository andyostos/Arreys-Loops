console.log('Ayuda');

//Bucle
//Algo que se repite
const names = ['Andrea', 'Linda', 'Nana', 'Camila', 'Joe'];

console.log(names.legth);

// For


for (let count = 0; count <= names.length; count ++){
    console.log(names[count])
};


for (let i = 0; i <= names.length -1; i ++){
    console.log(names[i])
};



// for (let i = 0; i < 20; i++ ) {
//     console.log(i);
// }

// While
let count = 0;
 while (count <= 10) {
    console.log(count);
    count++;
 }

 //Pregunta de entrevista Bucle infinito.
//  while (count <= Infinity) {
//     console.log(count);
//     count++;
//  }

// Do while
// El procedimiento interno se realiza si o si al menos una vez

do {
    console.log(count);
    count++ ;
 } while (count < 1);

// forEach ()
//realiza el procedimiento/bloque
// de codigo por cada elemento de un Array
names.forEach(name => console.log(name));

function printName(name) {
    console.log(`Username: ${name}`)
}

names.forEach((user) => {
    console.log(user)
})

//Funcion que use loops y que resulte en factorial de un numero n
// donde 1000 >n > 0

const n = 5;

const calcFact = (number) => {
    let res = 1;
    for (number; number >= 1; number --) {
        res *= number;
    }
    return res;
}

console.log(calcFact(n));

//Recursividad
const factorial = (num) => {
    if (!num === 1) {
        factorial (num * num - 1);
    }
    return num;
}