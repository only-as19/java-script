const myarray=[0,1,2,3,4,5]
console.log(myarray[1]);

const arry02=new Array(1,2,3,4,5)
// Empty array............................................
let emptyArray = [];

// Array with numbers
let numbers = [1, 2, 3, 4, 5];

// Array with strings
let fruits = ["Apple", "Banana", "Cherry"];

// Mixed data types
let mixed = [42, "Hello", true, { name: "Alice" }];

//methods of array........................................

let animals = ["Dog", "Cat", "Rabbit"];

// Add element
animals.push("Elephant"); 
console.log(animals); // ["Dog", "Cat", "Rabbit", "Elephant"]

// Remove last element
animals.pop();
console.log(animals); // ["Dog", "Cat", "Rabbit"]

// Add at the beginning
animals.unshift("Tiger");
console.log(animals); // ["Tiger", "Dog", "Cat", "Rabbit"]

// Remove first element
animals.shift();
console.log(animals); // ["Dog", "Cat", "Rabbit"]

myarray.push(6)
myarray.push(7)
myarray.push(8)
myarray.pop();
console.log(myarray);
myarray.unshift(0)
myarray.shift()

console.log(myarray.includes(10));
console.log(myarray.indexOf(10));
console.log(myarray.indexOf(3));
//change type of array into string ........................
const newarr=myarray.join()
console.log(newarr);


//Accessing and Modifying Elements.........................
let colors = ["Red", "Green", "Blue"];

console.log(colors[0]); // Red
console.log(colors[2]); // Blue

// Modify an element
colors[1] = "Yellow";
console.log(colors); // ["Red", "Yellow", "Blue"]

const nums = [1, 2, 3, 4];

// for loop................................................
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

// for...of
for (let num of nums) {
  console.log(num);
}

// forEach method
numbers.forEach(n => console.log(n));

//Useful Methods:..........................................
let scores = [10, 20, 30, 40, 50];

// Map - transform elements
let doubled = scores.map(score => score * 2);
console.log(doubled); // [20, 40, 60, 80, 100]

// Filter - select elements
let highScores = scores.filter(score => score > 25);
console.log(highScores); // [30, 40, 50]

// Reduce - accumulate values
let total = scores.reduce((sum, score) => sum + score, 0);
console.log(total); // 150

/*........................................................
slice() vs splice() in JavaScript Arrays
🔹 slice() – Copy Part of an Array

Does NOT manipulate the original array.

Returns a new array with selected elements.

Syntax: array.slice(start, end) → end index is exclusive.

Example:
*/
let myfruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

// Copy from index 1 to 3 (4 is excluded)
let sliced = myfruits.slice(1, 4);

console.log(sliced);   // ["Banana", "Cherry", "Mango"]
console.log(myfruits);   // ["Apple", "Banana", "Cherry", "Mango", "Orange"]
// ✅ slice does not change the original array
/*.......................................................
 🔹 splice() – Add / Remove / Replace Elements

Manipulates (mutates) the original array.

Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)

..................Example 1: Removing
 */
let colors = ["Red", "Green", "Blue", "Yellow"];

// Start at index 1, remove 2 items
let removed = colors.splice(1, 2);

console.log(removed); // ["Green", "Blue"]
console.log(colors);  // ["Red", "Yellow"]
// ⚠️ splice changed the original array
//...............Example 2: Adding
let num = [1, 2, 5, 6];

// At index 2, delete 0 elements, and insert 3,4
num.splice(2, 0, 3, 4);

console.log(num); // [1, 2, 3, 4, 5, 6]
// ⚠️ splice inserted items directly into original array

//.........................Example 3: Replacing
let pets = ["Dog", "Cat", "Rabbit"];

// At index 1, remove 1 element, insert "Hamster"
pets.splice(1, 1, "Hamster");

console.log(pets); // ["Dog", "Hamster", "Rabbit"]
// ⚠️ splice replaced Cat with Hamster
//...........................Example to See the Difference Clearly
let arr1 = [10, 20, 30, 40];
let arr2 = [10, 20, 30, 40];

// slice (no manipulation)
let sliced1 = arr1.slice(1, 3);
console.log(sliced1); // [20, 30]
console.log(arr1);   // [10, 20, 30, 40]  ✅ original safe

// splice (manipulation)
let spliced = arr2.splice(1, 2);
console.log(spliced); // [20, 30]
console.log(arr2);    // [10, 40]  ⚠️ original changed
