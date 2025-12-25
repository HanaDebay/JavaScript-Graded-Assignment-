// Part A: Higher Order Functions - Data Transformation (40 marks)
// 1. Create a file named kgl_analytics.js . Create an array of at least 6 procurement record
// objects with this structure:
// {
// id: number,
// dealerName: string,
// produceType: string,
// tonnageInKgs: number,
// costInUgx: number,
// procurementDate: Date object
// }
// (10 marks)
let procurementRecords = [
  {
    id: Math.floor(Math.random() * 9000) + 1000,
    dealerName: "Jhon",
    produceType: "Maize",
    tonnageInKgs: 200,
    costInUgx: 400000,
    procurementDate: new Date(),
  },

  {
    id: Math.floor(Math.random() * 9000) + 1000,
    dealerName: "Daniel",
    produceType: "Beans",
    tonnageInKgs: 300,
    costInUgx: 300000,
    procurementDate: new Date(),
  },
  {
    id: Math.floor(Math.random() * 9000) + 1000,
    dealerName: "Paul",
    produceType: "Rice",
    tonnageInKgs: 100,
    costInUgx: 40000,
    procurementDate: new Date(),
  },
  {
    id: Math.floor(Math.random() * 9000) + 1000,
    dealerName: "Mark",
    produceType: "Cassava",
    tonnageInKgs: 400,
    costInUgx: 400000,
    procurementDate: new Date(),
  },
  {
    id: Math.floor(Math.random() * 9000) + 1000,
    dealerName: "Sara",
    produceType: "Soyabeans",
    tonnageInKgs: 400,
    costInUgx: 500000,
    procurementDate: new Date(),
  },
  {
    id: Math.floor(Math.random() * 9000) + 1000,
    dealerName: "Mary",
    produceType: "G-nuts",
    tonnageInKgs: 5000,
    costInUgx: 4000,
    procurementDate: new Date(),
  },
];

// 2. Use the .map() method to create a new array where each record includes a new
// calculated property costPerKg (costInUgx ÷ tonnageInKgs). The new array should have
// objects with the original properties PLUS the new costPerKg property. (10 marks)

let procurementWithCostPerKg = procurementRecords.map((record) => {
  return { ...record, costPerKg: record.costInUgx / record.tonnageInKgs };
});

console.log(procurementWithCostPerKg);

// 3. Use the .filter() method to create a new array containing only procurement records
// where:tonnageInKgs >= 1000 (meeting the minimum requirement for individual dealers) Log the filtered array and its length (10 marks)

let minimumTonnageProcurements = procurementRecords.filter((tonnage) => {
  return tonnage.tonnageInKgs >= 1000;
});
console.log(minimumTonnageProcurements);
console.log(minimumTonnageProcurements.length);
// 4. Use the .reduce() method to calculate:
// The total tonnage procured across all records
// The total cost (sum of all costInUgx values)
// Log both totals with appropriate labels using template literals (10 marks)

let totalTonnage = procurementRecords.reduce((total, record) => {
  return (total += record.tonnageInKgs);
}, 0);

let totalCost = procurementRecords.reduce((sum, record) => {
  return (sum += record.costInUgx);
}, 0);

console.log(`Total tonnage procured: ${totalTonnage} Kgs.`);
console.log(`Total procurement cost: ${totalCost} UGX`);


// Part B: Sets for Unique Data Management (30 marks)
// 5. Create a function getUniqueDealers that:
// Takes an array of procurement records as a parameter
// Uses a Set to extract all unique dealer names
// Returns an array of unique dealer names (convert Set back to array)
// Call the function with your procurement data and log the result (15 marks)

function getUniqueDealers(procurementRecords){
  let dealerNameSet = new Set();

  for(let record of procurementRecords){
    dealerNameSet.add(record.dealerName)
  }

  return Array.from(dealerNameSet);
}

let uniqueDealersName = getUniqueDealers(procurementRecords);
console.log(uniqueDealersName)//[ 'Jhon', 'Daniel', 'Paul', 'Mark', 'Sara', 'Mary' ]

// 6. Create a Set called authorizedRoles and add these values: 'Manager' , 'Director' .
// Write a function isAuthorizedForProcurement that:
// Takes a userRole parameter
// Uses the .has() method to check if the role exists in the Set
// Returns a Boolean
// Test the function with different roles and log the results (15 marks)

let userRoles = ['Manager', 'Director'];
let authorizedRoles = new Set(userRoles);
function isAuthorizedForProcurement(userRoles){
  return authorizedRoles.has(userRoles)
}
console.log(isAuthorizedForProcurement("Director"))// true
console.log(isAuthorizedForProcurement("Developer"))// false

// Part C: Maps for Price Management (30 marks)
// 7. Create a Map called kglPriceList and set the following key-value pairs:
// 'Beans' → 5500
// 'Grain Maize' → 4800
// 'Cow peas' → 6000
// 'G-nuts' → 7200
// 'Soybeans' → 5800 (10 marks)

let kglPriceList = new Map(); //creating an empty Map

kglPriceList.set('Beans' ,5500);
kglPriceList.set('Grain Maize' ,4800);
kglPriceList.set('Cow peas' ,6000);
kglPriceList.set('G-nuts' ,7200);
kglPriceList.set('Soyabeans' ,5800)
console.log(kglPriceList)

// 8. Write a function calculateSaleTotal that:
// Takes two parameters: produceName (string) and tonnageInKgs (number)
// Uses the Map's .get() method to retrieve the price per kg for that produce
// If the produce doesn't exist in the Map, return "Price not found"
// Otherwise, return the total sale amount (price × tonnage)
// Test with multiple produce types (15 marks)
function calculateSaleTotal(produceName, tonnageInKgs){
  let pricePerKg = kglPriceList.get(produceName);
  if(pricePerKg === undefined){
    return "Price not found"
  }else{
    let totalSaleAmount = pricePerKg * tonnageInKgs;
     return totalSaleAmount;
  }
 
}
console.log("Total Sale:",calculateSaleTotal("Cow peas", 50))//Total Sale: 300000
console.log("Total Sale:",calculateSaleTotal("Beans", 80))//Total Sale: 440000

//9. Write code that:
// Uses a loop to iterate over your kglPriceList Map
// For each entry, logs: "Produce: [name], Price per Kg: [price] UgX"
// Calculates and logs the highest price in the Map using the .reduce() method on the
// Map values (5 marks)


for(let [produceName, pricePerKg] of kglPriceList){
  console.log(`Produce: ${produceName}, Price per Kg: ${pricePerKg} Ugx`)
}



let prices = [...kglPriceList.values()]
let highestPrice = prices.reduce((max, current) =>{
  return current > max ? current : max
})
console.log(`Highest Price per Kg: ${highestPrice} Ugx`)//Highest Price per Kg: 7200 Ugx