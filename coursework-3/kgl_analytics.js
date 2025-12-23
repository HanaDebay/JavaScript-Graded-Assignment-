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