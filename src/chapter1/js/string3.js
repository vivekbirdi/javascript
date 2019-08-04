let email = "vivekbirdi@gmail.com";

/**
 * 6) slice function
 * Like substr,this method is also used to get the section of string. But there is a difference.
 * It accepts two parameters,
 * 1) start index. (Which is same as substr)
 * 2) number of characters, Here it is different from substr.
 *    It is the end index i.e the index upto which, we want our string to be sliced.
 */

let slicedString = email.slice(5, 10);
console.log("6) slicedString: " + slicedString);

/**
 * Here unlike substr function, it slicing the String from 5th to 10th index, so output is
 * "birdi".
 */

/** 6.1) like substr, if the second argument is more than length of string,
 * it will simply return rest of String from begining index, which we have passed as first argument.
 * Result of below code will be birdi@gmail.com
 */

slicedString = email.slice(5, 40);
console.log("6.1) slicedString :- " + slicedString);

/** 6.2) If we pass 0 as second argument it will return nothing.
 *
 */

slicedString = email.slice(5, 0);
console.log("6.2) slicedString :- " + slicedString);

/** 6.3) If we pass negative value to second argument, it will work in different way than substr fuction.
 *  Now the begining index will be the value of first argument.
 *  And the value of second argument is calculated as follows:
 *  length of String + value of second argument.
 *  So in below case, number of characters it will fetch will be
 *  20+ (-10)
 *  =20-10
 *  =10
 *  so result will be similar to email.slice(5,10)
 */

slicedString = email.slice(5, -10);
console.log(" 6.3) slicedString :- " + slicedString);

/** 6.4) In above example if result is <= value of first then it will return nothing.
 *
 */

slicedString = email.slice(5, -16);
console.log("6.4) slicedString :- " + slicedString);

/** 6.5) If value of first argument is negative,
 * then slice method will return nothing
 */
slicedString = email.slice(-2, 5);
console.log("6.5) :- " + slicedString);

/** 7) replace function string.replace(stringToBeReplaced, replacement).
 *  This function accepts two arguments
 *  1) String or charSquence in a String which has to be replaced.
 *  2) Replacement String.
 */

let replacedEmail = email.replace("vivek", "vicky");
console.log("7) :- " + replacedEmail);

/** 7.1) This function replaces only the first occurance of the first argument
 *  So eg. we have a String
 * let newEmail= "vivek_birdi_12@gmail.com";
 * and we call replace function on above String as follows:
 * newReplacedEmail =  newEmail.replace("_","-");
 * It will result as follows:
 * vivek-birdi_12@gmail.com
 */

let newEmail = "vivek_birdi_12@gmail.com";
let newReplacedEmail = newEmail.replace("_", "-");
console.log("7.1) :- " + newReplacedEmail);

/** 7.2)
 * if we have to replace all the occurances then we must use regular expression.
 */

newReplacedEmail = newEmail.replace(/([_])/g, "-");
console.log("7.2) :- " + newReplacedEmail);
