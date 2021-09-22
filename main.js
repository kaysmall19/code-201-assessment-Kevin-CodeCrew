// Problem 1
// Ask the user for two numbers. Create a function that will take both user inputs as parameters.
// In the function, if both numbers are positive, return the string `Positive`. If both are negative, return `Negative`. 
// If both are zero return `Zero`. If they are two different things return `Mixed`.
// Get two numbers from the user and call the function printing the returned string.


// Problem 2
// Ask the user for a positive number. If they do not enter a positive number, ask the user again, and continue asking until a positive number is entered. 
// Starting from zero and going up to the number entered, add up all of the ODD numbers up to thenumber the user entered. 
// Print the total of the odd numbers.
// let positiveNumber = true;
// let oddNumbers = [];
// let totalofOddNumbers = 0;

// while (positiveNumber) {
//     let userNumber = parseInt(prompt("Enter a positive number: "));
//     if (userNumber >= 0)
//     {
//         console.log(`You enter a positive number of ${userNumber}`);
//         positiveNumber = false;
        // odd numbers function
//         for (let m = 0; m <= userNumber; m++)
//         {
//             if (m % 2 != 0)
//             {
//                 oddNumbers.push(m);
//                 totalofOddNumbers += m;
//             }
//         }
//     }
//     else{
//         console.log (`The number you enterd of ${userNumber} was not positive. Please try again.`);
//     }
// }

//adding the odd numbers
//console.log(oddNumbers);
// oddNumbers.forEach(element => {
//     totalofOddNumbers += element;
// });
// console.log(`The total of the odd numbers was ${totalofOddNumbers}`);
 
// Problem 3
// Create a function that takes a string array and returns a string array with the letter 's' at the end of each element. Call the function.

// Example:
// Original Array
// ["Dog","Cat","Bird"]
 
// Returned Array
// Array
// ["Dogs","Cats","Birds"] 

// Problem 4:
// Create a function that will accept the string `firstName` as a parameter.
// In the function ask the user for their last name. Print "Hello [FIRST & LAST NAME]" in the function.
// Call the function and verify the output.

// Problem 5:
// Ask the user for a positive number. Create an empty array called `justNumbers`.
// Starting from zero, add each number from zero to the number entered by the user into the `justNumbers` array.
// Use Array.map to iterate through the array and generate a new array called `numbersDoubled` that has each number from the original array multiplied by 2.
// Print the `numbersDoubled` array.

// Problem 6
// Create a function that will take a sentence as a parameter. Prompt the user to enter a sentence of their choosing.
// Use your function to replace all spaces in the sentence with '-' (hyphen) and return the new sentence/string.
// Do not use a built-in replacement function to change spaces to hyphens. Process the sentence and do the replacements manually.

// ```Example:
// spaceToDash(“This is an example function”)

// “This-is-an-example-function”
// ```

// Problem 7
// Create a `Shape` class with properties of `name`, `length`, and `width`.
// class Shape {
//     constructor(name, length, width) {
//         this.name = name;
//         this.length = length;
//         this.width = width;
//     }
// };
// print()
// {
//     console.log(`${this.name}, $${this.length}, ${this.width}`);
// };
// Create a method inside of the class called `area` that 
// calculates and returns the area of the shape (length * width).
// area()
// {
//     return (length * width);
// };

// Create 3 instances of `Shape` and put them into an array. 
// let shape1 = new Shape ("Baby Room", "100", "75");
// let shape2 = new Shape ("Kitchen Sink", "10", "20");
// let shape3 = new Shape ("Crate", "5", "15")
//let myShapeArea = [ shape1, shape2, shape3]

// Iterate through each shape in the array and call the `area` method. 
// Use the returned area value and print `[NAME] has an area of [AREA]` for each instance in the array.

// Problem 8
// Ask the user to enter a number between 1 - 25. Using the provided `list_of_many_numbers` array,
// use a loop to iterate the array and print out all the values that are smaller than the number the user entered.
// Then print out all the values that are larger than the number entered by the user.
// ```
// // Start with this List
// list_of_many_numbers = [12, 24, 1, 34, 10, 2, 7]

// // Example Output if the user enters the number 9:
// The User entered 9
// 1  2  7 are smaller than 9
// 12  24  34  10 are larger than 9
// ```

// Problem 9
// Create a `Puppy` class. It should have the properties `name` and `color`.
class Puppy
{
    constructor(name, color) 
    {
        this.name = name;
        this.color = color;
    }
};
// Create a program that will ask a user to enter a `name` and a `color` of a puppy.
let user = alert(`Please enter a ${this.name} and ${color} of a puppy.`);
// Create a new instance of `Puppy` and add it to an array called `myPups`.
let puppy1 = new Puppy ("", "");
let myPups = [puppy1];
// Keep prompting the user to enter additional puppies until they enter `q` to quit. 
prompt(`Please additional puppies. Hit q if you are done!`)
// Once they finish entering puppies, use `Array.filter` to produce a new array called `notBrownPups` from the `myPups` array. The new array `notBrownPups` should contain only the puppies who are NOT brown.

// Problem 10
// Using each string from the `listOfNames` array below, create a `NewEmployee` class with a property for `name`. Within the class, create a method called `greeting` that says “Hello [NAME]”. 

// Outside of the class, create a `NewEmployee` instance for each name in the `listOfNames` array and store each instance in a new array named `listOfNewEmployees`.

// Iterate through the `listOfNewEmployees` array and call the `greeting` method for each `NewEmployee` instance in the array.

// ```listOfNames = ["Susie","Michel","Essie","Eboni","Markus","Candie","Ingrid","Pearlie","Maryanna","Loren","Cyndi","Britney","Yahaira","Wendell","Monica","Janis","Rich","Danae","Ola","Yulanda","Arlena","Destiny","May","Thuy","Denna","Levi","Loralee","Gia","Collette","Bryanna","Mendy","Brigida","Kareen","Rebeca","Shelton","Amada","Chara","Renae","Nadene","Janna","Detra","Emilie","Garland","Josephine","Usha","Iola","Cuc","Isiah","Brenton","Laurette"]
// ```