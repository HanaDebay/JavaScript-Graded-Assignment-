// Part A: Variable Declaration and Type Checking (20 marks)
// 1. Create a file named kgl_validation.js . Declare the following variables using appropriate
// keywords ( let or const ):

// companyName with the value "Karibu Groceries LTD"
const companyName = "Karibu Groceries LTD";

// minimumTonnage with the value 1000
let minimumTonnage = 1000;
// isOperational with the value true
let isOperational = true;
// managerName (declare but do not assign a value)
let managerName;
// closedBranches with the value null
let closedBranches = null;
// 2. Use the typeof operator to check and log the data type of each variable. (5 marks)

console.log(typeof companyName); //String
console.log(typeof minimumTonnage); //number
console.log(typeof managerName); //undefined
console.log(typeof isOperational); //boolean
console.log(typeof closedBranches); //object
// 3. Write comments (single-line and multiline) explaining why you chose let or const for
// each variable. (5 marks)
/**
 * I used const for Company Name because the company name will not be change /it remain the same
 * I used let for minimum tonnage the value can change any time
 * I used let for isOperationa the value can change any time to false
 * I used let for manager name I can assign a value for it at any time
 * I used let for closed branches now it's assigned null I may give which branch is closed at any time
 * */

/** Part B: String Manipulation and Validation (25 marks) **/
// 4. Declare a variable dealerNameInput with the value " james BOND " (note the extra spaces and inconsistent capitalization).
let dealerNameInput = " james BOND ";

// 5. Write code that: Removes the leading and trailing whitespace
console.log("Before Trimmed:", dealerNameInput);
let trimmedName = dealerNameInput.trim();
console.log("After Trimmed:", trimmedName);
// Converts the cleaned name to proper title case (first letter of each word capitalized)
// Stores the result in a new variable cleanDealerName
// Logs the result using a template literal: "Cleaned Dealer Name: [name]" (10 marks)
let words = trimmedName.split(" ");
console.log(words);
let titleCaseWords = words.map(
  (word) =>
    word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()
);
console.log(titleCaseWords);

// 6. Write a validation check using comparison operators to verify that cleanDealerName :
// Has a length of not less than 2 characters
// Is not empty
// Log "Valid dealer name" or "Invalid dealer name" based on the result (10 marks)
if (titleCaseWords.length >= 2 && titleCaseWords != "") {
  console.log("Valid dealer name");
} else {
  console.log("Invalid dealer name");
}

//Part C: Conditional Logic and Business Rules (30 marks)
// 7. Create variables for a procurement record:
let userRole = "Sales Agent";
let procurementTonnage = 1500;
let produceType = "Beans";
let costInUgx = "50000";

// 8. Implement the following KGL business rules using if...else if...else statements:
// Rule 1: No sales agent is allowed to record any produce entry. If userRole is 'Sales
// Agent', log an error message and do NOT proceed with the other checks. (10 marks)
// Rule 2: For individual dealers, tonnage must be not less than 1000kg. Check if
// procurementTonnage >= 1000 . (5 marks)
// Rule 3: The cost must be not less than 5 digits. First convert costInUgx to a Number
// type, then check if it's >= 10000. (10 marks)

if (userRole === "Sales Agent") {
  console.log("Sales Agent not allowed to record produce");
} else if (procurementTonnage < 1000) {
  console.log("Tonnage must not be less than 1000kg");
} else if (Number(costInUgx) < 10000) {
  console.log("The cost must not be less than 5 digits");
} else {
  console.log("All rules passed");
}

// 9. Use the logical AND ( && ) operator to create a single Boolean expression that checks if
// BOTH tonnage and cost conditions are met, and log "Procurement record valid" or
// "Procurement record invalid". (5 marks)
if(procurementTonnage >= 1000 && Number(costInUgx) >= 10000){
console.log("Procurement record valid")
}else{
    console.log("Procurement record invalid")
}

//Part D: Arrays and Produce Management (25 marks)
// 10. Create an array named kglProduce containing the five types of produce: ['Beans',
// 'Grain Maize', 'Cow peas', 'G-nuts', 'Soybeans'] . (5 marks)

 let kglProduce = ['Beans','Grain Maize', 'Cow peas', 'G-nuts', 'Soybeans'];



// 11. Write code that:
// Adds a new produce type "Green Peas" to the end of the array

kglProduce.push("Green Peas")

console.log("After Using push() method: ", kglProduce) //After Using push() method:  ['Beans','Grain Maize','Cow peas','G-nuts','Soybeans','Green Peas']

// Removes the first item from the array (simulate oldest stock being sold)

kglProduce.shift();

console.log("After Removing the first item:" , kglProduce) //After Removing the first item: [ 'Grain Maize', 'Cow peas', 'G-nuts', 'Soybeans', 'Green Peas' ]

// Checks if "G-nuts" exists in the array using an appropriate array method

console.log("Check if G-nuts exists in the array: ", kglProduce.includes("G-nuts"))//Check if G-nuts exists in the array:  true

// Logs the final array and its length (15 marks)

console.log("Final items in the array:",kglProduce , "The lenght of the array is:",kglProduce.length) //Final items in the array: [ 'Grain Maize', 'Cow peas', 'G-nuts', 'Soybeans', 'Green Peas' ] The lenght of the array is: 5

// 12. Create a second array branch2Produce with values ['Maize', 'Beans'] . Use the
// .concat() method to merge kglProduce and branch2Produce into a new array called
// allProduce . (5 marks)
let branch2Produce =  ['Maize', 'Beans'];

let allProduce = kglProduce.concat(branch2Produce)
console.log("Merged elements of array[kglProduce] and array[branch2Produce]: ",allProduce)
/**
 * Merged elements of array[kglProduce] and array[branch2Produce]:  [
  'Grain Maize',
  'Cow peas',
  'G-nuts',
  'Soybeans',
  'Green Peas',
  'Maize',
  'Beans'
]
 */