// var - the old way to declare a variable in javascript
var price = 100;
console.log(price);

/*let - modren way to declare a variable. 
 we can  change it value.
*/
let quantity = 25;
console.log(quantity);

/** Now you can change the value of age. */
quantity = 30;
console.log(quantity);

/* const - to declare constants, so that we can not 
 change the value late on after it is declared */
const alphabets = 26;
console.log(alphabets);

/** Now if you try to change the value of "point",
 * you will get an error
 *
 * alphabets =28;
 *
 * Also you have initialize a const at the time of declaration.
 * So below code will give you error.
 *
 * const alphabets;
 * alphabets =10;
 *
 * But if you use let keyword the statements will work fine.
 *
 * let quantity;
 * quantity = 25;
 *
 */
