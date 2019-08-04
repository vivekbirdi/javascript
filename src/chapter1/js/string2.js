/** More functions of string */

let email = "vivekbirdi@gmail.com";
/** 3) indexOf function.
 * return the index of first occurance of character in a String.
 * index of string start from 0.
 */
let index = email.indexOf("b");
console.log("Index of b:" + index);

/**
 * 4) Above code will return 2.
 * In case character is not present in string, it return -1.
 * So Below code with print -1.
 * let index = email.indexOf("B");
 * console.log("Index of B: " + index);
 *
 */

/** lastIndexOf function
 *  return the index of last occurance of character in a String.
 *  In case character is not found it returns -1 like indexOf function.
 **/

let lastIndex = email.lastIndexOf("v");
console.log("Last index of: " + lastIndex);

/**
 * 5) subString function.
 * This method is used to get the section of string.
 * It accepts two parameters,
 * 1) start index.
 * 2) number of characters, you want from string.
 */

let subString = email.substr(5, 10);
console.log("subString: " + subString);

/**
 * It will return birdi@gmai, i.e 10 characters which we mentioned in second argument.
 */
/** 5.1) If the second argument is more than length of string,
 * it will simply return rest of String from begining index, which we have passed as first argument.
 * e.g
 * */

subString = email.substr(5, 40);
console.log("subString second argument exceeding String length:- " + subString);

/* result will be birdi@gmail.com
 
/** 5.2) If we pass negative value for second argument, it return nothing.
 */

subString = email.substr(5, -3);
console.log("subString with negative value for second argument : " + subString);

/* it will return nothing. */

/** 5.3) If pass negative value for first argument.
 *  It will start from length of the String + value of first argument
 *  and goes upto the value of second argument.
 *
 */

subString = email.substr(-5, 3);
console.log("subString with negative value for first argument: " + subString);

/**
 * It will return "l.c". Below is the explanation of this result.
 * length of String is 20 and value of first argument is -5.
 * so it will take begining index as 20 + (-5).
 * i.e 20-5=15
 * Value of second argument is 3. so it will return the section from 15th position upto 17th postion of String.
 * So result will be "l.c"
 */

/** 5.4) if the result of length of String + value of first argument is in minus,
 * then begining index is considered as 0.
 * So below code will return "vivek"
 */

subString = email.substr(-25, 5);
console.log(
  "subString with result of length of String + value of first argument is negative value: " +
    subString
);

/** 5.5) If the value of first argument exceeds length of String,
 * then substr function return nothing.
 * So below code will return nothing.
 */

subString = email.substr(40, 5);
console.log(
  "subString with value of first argument exceeds length of String: " +
    subString
);
