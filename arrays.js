let names = ['Zab', 'Fer', 'Magali', 'Yare'];
let numbers = [10, -1000, 5.5, 40, 30];
let mix = ['Andy', 26, 'Crystal Princess', true];
let booleanMix = [true, false, false, true];

//Acceder a la info de un array

const userData = ['Andy', 26, 'Crystal Princess', 'NIN'];

// print
console.log(userData);

// longitud
const arrLength = userData.length;

console.log(userData.length);
console.log(arrLength);

// Indices y/o posiciones son diferentes a la longitud
//Indicamos la posicion dentro de corchetes [pos]
console.log(userData[2]);

const username = (userData[0]);

console.log(`Mi nombre es: ${username}`)

//

const matrix = [[-1, 0], [1, -1]];

// Eje x y eje Y
console.log (matrix[0][1])

// Coordenadas de Londres

const londonCoord = [[51, "30'30 N'"], [0, "7'32 O'"]];

//Pop elimiina el ultimo dato que encuentre dentro de un array
userData.pop()
console.log(userData);

//Push
userData.push('Belanova');
console.log(userData);

//Join une los elementos con el character o string que indiquemos
console.log(userData.join(' '));

// Shift elimina el primer elemento y acomoda el resto
console.log(userData.shift());

console.log(userData);

//Ushift agrega algun dato al inicio del array
console.log(userData.unshift('Andrea', 'Hermosa'));
console.log(userData);