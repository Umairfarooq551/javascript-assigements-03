// question No:1


// const products = [
//     { id: 102, title: "Mobile", variations: [], reviews: [] },
//     { id: 103, title: "Sony LED 40 inch", variations: [], reviews: [] },
//   ];
  
//   function findProductById(productId) {
//     const product = products.find(p => p.id === productId); 
//     console.log(product); 
//   }
//   findProductById(102);
//   findProductById(103);

//question ;No7
// const product = {
//   id: 102,
//   title: "Mobile",
//   reviews: [
//     { user: "Ahmad", rating: 4.0, status: true },
//     { user: "Ali", rating: 5.0, status: true },
//     { user: "Sarah", rating: 3.0, status: false }
//   ]
// };

// function filterActiveReviews() {
//   const approvedReviews = product.reviews.filter(review => review.status === true);  
  
//   approvedReviews.forEach(review => {
//     console.log(review);  
//   });
// }

// filterActiveReviews();

//question no 2
// const products = [
//   { id: 101, title: "Sony LED 40 inch", variations: [], reviews: [] },
//   { id: 102, title: "Mobile", variations: [], reviews: [] },
//   { id: 103, title: "Bike", variations: [], reviews: [] }
// ];


// for (let i = 0; i < products.length; i++) {
//   console.log(products[i].title); 
// }

//question no 3


// const products = [
//   { id: 101, title: "Sony LED 40 inch", colors: ["black", "red", "silver"] },
//   { id: 102, title: "Mobile", colors: ["black", "blue", "white"] },
//   { id: 103, title: "Bike", colors: ["black", "red", "green"] }
// ];

// const productId = 102; 

// for (let i = 0; i < products.length; i++) {
//   if (products[i].id === productId) {
//     console.log("Available colors for " + products[i].title + ":");
//     for (let j = 0; j < products[i].colors.length; j++) {
//       console.log(products[i].colors[j]);  
//     }
//     break;  
//   }
// }

//question no 5 

// const products = [
//   { id: 101, title: "Sony LED 40 inch", variations: [{ price: 50000, quantity: 5 }, { price: 55000, quantity: 9 }] },
//   { id: 102, title: "Mobile", variations: [{ price: 15000, quantity: 3 }, { price: 18000, quantity: 11 }] },
//   { id: 103, title: "Bike", variations: [{ price: 20000, quantity: 7 }, { price: 25000, quantity: 7 }] }
// ];

// const productId = 102;  
// let totalQuantity = 0;


// for (let i = 0; i < products.length; i++) {
//   if (products[i].id === productId) {
  
//     for (let j = 0; j < products[i].variations.length; j++) {
//       totalQuantity += products[i].variations[j].quantity;  
//     }
//     break;  
//   }
// }

// console.log("Total Quantity: " + totalQuantity);
