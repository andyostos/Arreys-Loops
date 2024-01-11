//Andy Ostos Arrays and Loops Excercises

// Sum of Resistors in Series
 

// Calculate the sum of all resistors connected in series.
// Examples:
// - `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
// - `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
// - `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

// Note: This approach uses the absolute value of each resistance to ensure all values are positive.

const resistenceSeries = [8, 15, 100];
let sumResistence = 0;
for (let i = 0; i < resistenceSeries.length; i++){
  
    sumResistence += resistenceSeries[i];

}

console.log(`${sumResistence} ohms.`);

// Number divided into halves

// Given a number, return the number divided into its halves in an array.
 

// Examples:
// - `numDiv(4)` should return `[2, 2]`.
// - `numDiv(10)` should return `[5, 5]`.


// let divNumero = 4;

// let mitad1 = divNumero / 2;
// let mitad2 = divNumero / 2;
  
// console.log(`[${mitad1}, ${mitad2}]`);

const originNum = 10;
const divNumero = (originNum / 2);
let divMatrix = [0,0];
for (let i = 0; i < divMatrix.length; i++){

    divMatrix[i] += divNumero;
}
console.log(divMatrix);

// Secret Society
 

// Find the name of a secret society based on the first letter of each member's name.
 

// Examples:
// - `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
// - `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
// - `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HRH'`.

const secretNames = ["Esperanza", "Franco", "Nia"];
const secretSociety = '';

for (let i = 0; i < secretNames; i++){

    divMatrix[i] += divNumero;
}



  