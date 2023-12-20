// let apples = "2";
// let oranges = "3";

// // both values converted to numbers before the binary plus
// alert(+apples + +oranges); // 5

// "" + 1 + 0 = "10" // The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.
// "" - 1 + 0 = -1 // The subtraction - (like most math operations) only works with numbers, it converts an empty string "" to 0.
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// "  -9  " + 5 = "  -9  5" // The addition with a string appends the number 5 to the string.
// "  -9  " - 5 = -14 // The subtraction always converts to numbers, so it makes " -9 " a number -9 (ignoring spaces around it).
// null + 1 = 1 // null becomes 0 after the numeric conversion.
// undefined + 1 = NaN // undefined becomes NaN after the numeric conversion.
// " \t \n" - 2 = -2 // Space characters are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 0.



// Add two number from user input 

// let a = +prompt("First number?", 1);
// let b = +prompt("Second number?", 2);

// // The reason is that prompt returns user input as a string.

// alert(a + b); // 3
// or

// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(+a + +b); // 3

// let number = +prompt("Enter the Number")
// if (number > 0) {
//     alert(1)
// } else if (number === 0) {
//     alert(0)
// } else {
//     alert(-1)
// }



// Rewrite if..else using multiple ternary operators '?'.let message;

// if (login == 'Employee') {
//     message = 'Hello';
// } else if (login == 'Director') {
//     message = 'Greetings';
// } else if (login == '') {
//     message = 'No login';
// } else {
//     message = '';
// }

// in the form of ternary operators
// let message = (login == 'Employee') ? 'Hello' :
//   (login == 'Director') ? 'Greetings' :
//   (login == '') ? 'No login' :
//   '';

// alert(alert(1) || 2 || alert(3));// it shows an alert(1) just because of "alert(1)" this is truthy value, tHen shows second alert which is alert(2)

// alert( alert(1) && alert(2) );// it shows an alert(1) then check logical And "&&" which is undefined.

// alert( null || 2 && 3 || 4 );//Firstly check the 
//2 && 3 ==> 3 
// null || 3 || 4 ==> 3 || 4 ==> 3
// Because first Truthy value will be got.


// Which one will be excecuted?

// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );


// // Runs.
// // The result of -1 || 0 = -1, truthy
// if (-1 || 0) alert( 'first' );

// // Doesn't run
// // -1 && 0 = 0, falsy
// if (-1 && 0) alert( 'second' );

// // Executes
// // Operator && has a higher precedence than ||
// // so -1 && 1 executes first, giving us the chain:
// // null || -1 && 1  ->  null || 1  ->  1
// if (null || -1 && 1) alert( 'third' );


// Nullish coalescing operator '??'
// ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.
// Syntax: 

// result = a ?? b
// it can be rewrite it as
// result = (a !== null && a !== undefined) ? a : b;

// let user = "John";
// alert(user ?? "Anonymous"); // John (user is not null/undefined)
// let firstName = undefined;
// let lastName = null;
// let nickName = "Qadir";
// alert(firstName ?? lastName ?? nickName ?? "Anonymous");//Qadir

// Below line of code shows the first Truthy value as above

// alert(firstName || lastName || nickName || "Anonymous");//Qadir


// Another Example

// let height = 0;

// alert(height || 100); // output: 100
// Now check the height with 100. Here 100 is higher number than 0. that's why it shows an 100

// alert(height ?? 100); // output: 0
// Now check the height with 100. Here 0 is truthy value so that it shows an 0.

// let height = null;
// let width = null;
// let area = height ?? 100 * width ?? 50;// Doesn't properly Work
// let area = height ?? (100 * width )?? 50;//Does't properly Work which we want
// let area = (height ?? 100) * (width ?? 50);//it works as we need
// alert(area); // 5000

// let x = 1 && 2 ?? 3; // Syntax error
// let x = (1 && 2) ?? 3; // works



// Prime Number Progam

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // for each i...

//     for (let j = 2; j < i; j++) { // look for a divisor..
//         if (i % j == 0) continue nextPrime; // not a prime, go next i
//     }

//     document.write(i); // a prime
//     document.write("<br/>") 
// }








// Sum of the inputs

// let sum = 0;

// let numbers = +prompt("Enter a how many number", 0)

// while (numbers) {

//     let value = +prompt("Enter a number", 0);

//     if (!value) {
//         +prompt("Enter the correct number:")
//         sum += value;
//         numbers--;
//         continue;
//         // break
//     } // (*)

//     sum += value;
//     numbers--;
// }
// alert('Sum: ' + sum);



// outer: for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {

//         let input = prompt(`Value at coords (${i},${j})`, '');

//         // if an empty string or canceled, then break out of both loops
//         if (!input) break outer; // (*)

//         // do something with the value...
//     }
// }

// alert('Done!');


// function checkAge(age) {
/*if (age > 18) {
    return true;
} else {
    return confirm('Did parents allow you?');
}*/
//Alternative way

//  (age > 18) ? document.write(`You can check list of movies`) : confirm('Did parents allow you?')
// } 


// let age = +prompt("Enter your age:");
// checkAge(age);

// document.write(`You are ${age} years old`)


// function checkAge(age) {
//     return (age > 18) || confirm('Did parents allow you?');
// }


// Power of the function

// function pow(n, p) {
//     power = 1
//     for (i = 1; i <= p; i++) {
//         power *= n
//     }
//     return power;
// }
// document.write(pow(-2, 3))

