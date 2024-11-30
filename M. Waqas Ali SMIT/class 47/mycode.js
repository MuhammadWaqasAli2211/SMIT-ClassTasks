//CODE WITHOUT PROTOTYPE

// function Plan(name, price, space, transfer, pages, dicsountMonth) {
//   this.Name = name;
//   this.Price = price;
//   this.Space = space;
//   this.Transfer = transfer;
//   this.pages = pages;
//   this.dicsountMonth = dicsountMonth;
//   this.calculateAnnual = function (discountPercent) {
//     bestPrice = this.Price;
//     var currentDate = new Date();
//     var currentMonth = currentDate.getMonth();
//     for (var i = 0; i < this.dicsountMonth.length; i++) {
//       if (this.dicsountMonth[i] === currentMonth) {
//         bestPrice = this.Price * discountPercent;
//         break;
//       }
//     }
//     return bestPrice * 12;
//   };
// }
// var p1 = new Plan("Basic", 5, 100, 1000, 10, [0, 11]);
// var p2 = new Plan("Ultimate", 10, 200, 2000, 20, [0, 5, 10]);
// var p3 = new Plan("Professional", 20, 300, 3000, 30, [0, 3, 6, 11]);
// var p4 = new Plan("Ultra Pro Max", 50, 500, 5000, 50, [0, 2, 4, 6, 8, 10]);

// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p4);

// var discountAmountForBasic = p1.calculateAnnual(0.9);
// var discountAmountForUltimate = p2.calculateAnnual(0.8);
// var discountAmountForProfessional = p3.calculateAnnual(0.7);
// var discountAmountForUltraPro = p4.calculateAnnual(0.5);

// console.log("\n<== RESULTS ==>")
// console.log("Discounted Amount for Basics:", discountAmountForBasic, "Rs");
// console.log("Discounted Amount for Ultimate:", discountAmountForUltimate, "Rs");
// console.log("Discounted Amount for Professional:", discountAmountForProfessional, "Rs");
// console.log("Discounted Amount for Ultra Pro Max:", discountAmountForUltraPro, "Rs");

//CODE WITH PROTOTYPE

function Plan(name, price, space, transfer, pages, dicsountMonth) {
  this.Name = name;
  this.Price = price;
  this.Space = space;
  this.Transfer = transfer;
  this.pages = pages;
  this.dicsountMonth = dicsountMonth;
}

Plan.prototype.calculateAnnual = function (discountPercent) {
  bestPrice = this.Price;
  var currentDate = new Date();
  var currentMonth = currentDate.getMonth();
  for (var i = 0; i < this.dicsountMonth.length; i++) {
    if (this.dicsountMonth[i] === currentMonth) {
      bestPrice = this.Price * discountPercent;
      break;
    }
  }
  return bestPrice * 12;
};

var p1 = new Plan("Basic", 5, 100, 1000, 10, [0, 11]);
var p2 = new Plan("Ultimate", 10, 200, 2000, 20, [0, 5, 10]);
var p3 = new Plan("Professional", 20, 300, 3000, 30, [0, 3, 6, 11]);
var p4 = new Plan("Ultra Pro Max", 50, 500, 5000, 50, [0, 2, 4, 6, 8, 10]);

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

var discountAmountForBasic = p1.calculateAnnual(0.9);
var discountAmountForUltimate = p2.calculateAnnual(0.8);
var discountAmountForProfessional = p3.calculateAnnual(0.7);
var discountAmountForUltraPro = p4.calculateAnnual(0.5);

console.log("\n<== RESULTS ==>");
console.log("Discounted Amount for Basics:", discountAmountForBasic, "Rs");
console.log("Discounted Amount for Ultimate:", discountAmountForUltimate, "Rs");
console.log(
  "Discounted Amount for Professional:",
  discountAmountForProfessional,
  "Rs"
);
console.log(
  "Discounted Amount for Ultra Pro Max:",
  discountAmountForUltraPro,
  "Rs"
);
for (let x in Plan){
    console.log(x)
    console.log(Plan[x0000000000000000000000000000000000])
}
// THIS IS DYNAMIC

// Define the Plan constructor function
// function Plan(name, price, space, transfer, pages, discountMonths) {
//     this.Name = name;
//     this.Price = price;
//     this.Space = space;
//     this.Transfer = transfer;
//     this.Pages = pages;
//     this.DiscountMonths = discountMonths; // Array of months when discount applies
//   }

//   // Method to calculate the annual price with discounts
//   Plan.prototype.calculateAnnual = function (discountPercent) {
//     let bestPrice = this.Price;
//     let currentMonth = new Date().getMonth(); // Get the current month (0-indexed)

//     // Check if current month is in the discountMonths array
//     if (this.DiscountMonths.includes(currentMonth)) {
//       // Apply discount if current month is eligible
//       bestPrice = this.Price * discountPercent;
//     }

//     // Calculate the total cost for a year
//     return bestPrice * 12;
//   };

//   // Create Plan instances with dynamic parameters
//   var plans = [
//     new Plan("Basic", 5, 100, 1000, 10, [0, 11]),
//     new Plan("Ultimate", 10, 200, 2000, 20, [0, 5, 10]),
//     new Plan("Professional", 20, 300, 3000, 30, [0, 3, 6, 11]),
//     new Plan("Ultra Pro Max", 50, 500, 5000, 50, [0, 2, 4, 6, 8, 10]),
//   ];

//   // Ask user which plan they want
//   let selectedPlanName = prompt("Enter the name of the plan you want (Basic, Ultimate, Professional, Ultra Pro Max):");

//   // Find the selected plan
//   let selectedPlan = plans.find(plan => plan.Name.toLowerCase() === selectedPlanName.toLowerCase());

//   // If a valid plan is found, calculate and display the discounted price, else show an error
//   if (selectedPlan) {
//     let discountPercent = 0.9; // You can change this based on your logic, like asking user for discount
//     let discountedPrice = selectedPlan.calculateAnnual(discountPercent);
//     console.log(`\n<== RESULTS ==>`);
//     console.log(`Discounted Annual Amount for ${selectedPlan.Name}: ${discountedPrice} Rs`);
//   } else {
//     console.log("Invalid package name entered.");
//   }
