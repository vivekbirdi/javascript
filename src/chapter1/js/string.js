/*Strings:  
A String is the sequence of characters, numbers or symbols
*/

var stringDemo = "Asda12127y^%&^^@^";
console.log(stringDemo);

let email = "vivek.birdi@novelerp.com";
console.log(email);

/** String operations :
 * Below I am demonstrating operations we can perform on String */

/** 1) String Concatination */

let firstName = "Vivek";
let lastName = "Birdi";

let fullName = firstName + " " + lastName;

console.log(fullName);

/** 2) String length */
console.log(firstName.length);

/** 3) Getting characters from particular index */
console.log(firstName[2]);

/** String functions: */

/** 1) toUpperCase()- To convert String into upper case */
firstName = firstName.toUpperCase();
console.log("Upper Case: " + firstName);
/** Now note that toUpperCase doenot change the original String,
 * It returns the new String converted into upper case.
 * so if you execute below statements, it will print original String.
 *
 * firstName.toUpperCase();
 * console.log(firstName);
 *
 * So it is necessary to assign the result of toUpperCase() into a variable
 * for further use. Same is true for all other functions of String.
 * This is called immutablity. So String object in javascript is immutable.
 */

/** 2) toLowerCase()- To convert String into upper case */
let result = fullName.toLowerCase();

console.log(result);
