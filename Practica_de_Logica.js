
//Andy Ostos Practicas de Logica

/**User profile
Write a program that prompts a user for their data: 
username, age, and a list of their favorite movies. 
Store the information and then showcase it in the console. 
Take note that the output for the films should add a small message 
like: 'The film {film} is one of my favorites'. */

let username = prompt('Por favor ingresa tu username:');
let ageUser = prompt('escribe tu edad:');
let moviesUser = prompt('escribe tus peliculas favoritas:');
let movieList = moviesUser.split(',')
let movieSelection = movieList.length > 0 ? movieList[0].trim() : '';;

console.log(username);
console.log(ageUser);
console.log(moviesUser);
console.log(`The film ${movieSelection} is one of my favorites`);