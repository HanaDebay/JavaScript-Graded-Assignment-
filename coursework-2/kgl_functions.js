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