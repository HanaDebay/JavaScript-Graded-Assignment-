// Part A: Function Implementation (30 marks)
// 1. Create a file named kgl_functions.js . Write a function named
// calculateProcurementCost that:
// Takes two parameters: tonnageInKg and pricePerKg
// Returns the total cost (tonnage × price)
// If either parameter is not a number or is less than 0, return the string "Invalid input" (10
// marks)

function calculateProcurementCost(tonnageInKg, pricePerKg) {
  if (
    tonnageInKg != Number ||
    pricePerKg != Number ||
    tonnageInKg < 0 ||
    pricePerKg < 0
  ) {
    console.log("Invalid Input");
  }

  return tonnageInKg * pricePerKg;
}
console.log("Total Procurment Cost: ", calculateProcurementCost(40, 4000));

// 2. Write an arrow function named validateBuyerName that:
// Takes one parameter: buyerName
// Returns true if the name length is >= 2 and the name is not empty
// Returns false otherwise (10 marks)

const validateBuyerName = (buyerName) => {
  if (typeof buyerName !== "string") {
    return false;
  }

  if (buyerName.length >= 2 && buyerName !== "") {
    return true;
  } else {
    return false;
  }
};

console.log(validateBuyerName(123)); //false
console.log(validateBuyerName("hana")); //true

// 3. Create a function named checkUserAuthorization that:
// Takes one parameter: role
// Uses a switch statement to check the role
// Returns "procurement_and_sales" for 'Manager'
// Returns "sales_only" for 'Sales Agent'
// Returns "view_aggregations" for 'Director'
// Returns "unauthorized" for any other role (10 marks)

function checkUserAuthorization(role) {
  switch (role) {
    case "Manager":
      return "procurement_and_sales";
      break;
    case "Sales Agent":
      return "sales_only";
      break;
    case "Director":
      return "view_aggregations";
      break;
    default:
      return "unauthorized";
  }
}
console.log(checkUserAuthorization("Sales Agent")); //output: sales_only
console.log(checkUserAuthorization("Accountant")); //output: unauthorized

// Part B: Object Creation and Manipulation (35 marks)

// 4. Create a function createSalesRecord that takes four parameters ( produceName ,
// tonnage , buyerName , amountPaid ) and returns an object with the following structure:
// {
// id: // Generate a random number between 1000-9999
// produceName: // parameter value
// tonnageInKgs: // parameter value
// buyerName: // parameter value
// amountPaid: // parameter value
// saleDate: // current date using new Date()
// isCreditSale: false
// }

function createSalesRecord(produceName , tonnage , buyerName , amountPaid){
return {
  id: Math.floor(Math.random() * 9000)+ 1000,
  produceName,
  tonnage,
  buyerName,
  amountPaid,
  saleDate: new Date(),
  isCreditSale: false
};
}

console.log(createSalesRecord("Maize",50, "Hana", 4000))
/**
 * output:
  {
  id: 4339, this output varies in number when we console it again and again
  produceName: 'Maize',
  tonnage: 50,
  buyerName: 'Hana',
  amountPaid: 4000,
  saleDate: 2025-12-22T21:42:08.172Z,
  isCreditSale: false
}
 */


//5. Create a sales record object by calling your function with test data. Then:
let salesRecord = createSalesRecord("Beans", 1500, "Jhon", 400000);
// Add a new property branch with value "Maganjo" using dot notation
salesRecord.branch = "Maganjo";
// Modify the isCreditSale property to true
salesRecord.isCreditSale = true;
// Add a dueDate property using bracket notation
salesRecord["dueDate"] = new Date("2026-01-15");
// Use Object.keys() to get all property names and log them (10 marks)
console.log(Object.keys(salesRecord));

// 6. Write a for...in loop that iterates over your sales record object and logs each property
// name and value in the format: "Property: [name], Value: [value]" (10 marks)
for(let property in salesRecord){
  console.log(`Property: ${property}, Value: ${salesRecord[property]}`)
}

/**
output:
Property: id, Value: 9293
Property: produceName, Value: Beans
Property: tonnage, Value: 1500
Property: buyerName, Value: Jhon
Property: amountPaid, Value: 400000
Property: saleDate, Value: Tue Dec 23 2025 20:33:35 GMT+0300 (East Africa Time)      
Property: isCreditSale, Value: true
Property: branch, Value: Maganjo
Property: dueDate, Value: Thu Jan 15 2026 03:00:00 GMT+0300 (East Africa Time)
 */

// Part C: Loop Implementation and Data Processing (35 marks)
// 7. Create an array of daily procurement tonnages for a week:
let weeklyTonnage = [1200, 1500, 980, 2000, 1100, 1800, 1300];

// Calculates the total tonnage for the week
let totalTonnage = 0;
for(let i = 0; i < weeklyTonnage.length; i++){
totalTonnage += weeklyTonnage[i];
}
// Calculates the average daily tonnage

let averageDailyTonnage = totalTonnage / weeklyTonnage.length
// Logs both results (15 marks)
console.log("Total Tonnage:",totalTonnage)//Total Tonnage: 9880
console.log("Daily Tonnage Average:", averageDailyTonnage)//Daily Tonnage Average: 1411.4285714285713

// 8. Create an array of sales records (use your createSalesRecord function to create at least 5 records with varying data). 
// Write code using a for...of loop that: Counts how many credit sales exist ( isCreditSale === true )
// Uses the continue statement to skip non-credit sales
// Logs "Total credit sales: [count]" (15 marks);

let salesRecords = [];

salesRecords.push(createSalesRecord("Maize", 1200, "Jhon", 50000));
salesRecords.push(createSalesRecord("Beans", 1500, "Sara", 30000));
salesRecords.push(createSalesRecord("Rice", 200, "Karl", 20000));
salesRecords.push(createSalesRecord("Coffee", 2000, "Hana", 100000));
salesRecords.push(createSalesRecord("Cassava", 1100, "Mary", 40000));
// console.log(salesRecords)

salesRecords[1].isCreditSale = true;
salesRecords[3].isCreditSale = true;

let creditSalesCount = 0;
for(let sale of salesRecords){
  if(sale.isCreditSale !== true){
    continue; //if credit sale is not true or if it is fales it skips it
  }
  creditSalesCount++;
}
console.log("Total Credit Sales: ", creditSalesCount);

// 9. Simulate a stock check: Create an inventory array:
let inventory = [
{name: 'Beans', tonnage: 500},
{name: 'Maize', tonnage: 0},
{name: 'G-nuts', tonnage: 300}
];

// Use a for loop with a break statement to: Search for the first item with tonnage === 0
// When found, log "Manager Alert: [produce name] is out of stock" and exit the loop immediately (5 marks)

for(let i = 0; i < inventory.length; i++){
  if(inventory[i].tonnage === 0){
    console.log(`Manager Alert: ${inventory[i].name} is out of stock`) //Manager Alert: Maize is out of stock
    break;
  }
}