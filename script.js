// var products = [
//     {
//         id: 101,
//         title: "Car",
//         variations: [
//             { id: 1, color: "black", price: 50000, quantity: 5 },
//             { id: 2, color: "red", price: 50000, quantity: 3 },
//             { id: 3, color: "silver", price: 55000, quantity: 4 },
//         ],
//         reviews: [
//             {
//                 id: 1,
//                 user: "Ahmad",
//                 rating: 4.0,
//                 title: "Good Product",
//                 comments: "It is a very good product ....",
//                 date: "06-02-2021",
//                 status: true,
//             },
//             {
//                 id: 2,
//                 user: "Zubair",
//                 rating: 4.5,
//                 title: "Very Good Product",
//                 comments: "zubair It is a very good product ....",
//                 date: "05-02-2021",
//                 status: false,
//             },
//             {
//                 id: 3,
//                 user: "Ali",
//                 rating: 5.0,
//                 title: "bad Product",
//                 comments: "ali It is a very good product ....",
//                 date: "04-02-2021",
//                 status: true,
//             },
//         ],
//     },
//     {
//         id: 102,
//         title: "Mobile",
//         variations: [
//             { id: 1, color: "black", price: 50000, quantity: 5 },
//             { id: 2, color: "red", price: 50000, quantity: 1 },
//             { id: 3, color: "silver", price: 55000, quantity: 8 },
//         ],
//         reviews: [
//             {
//                 id: 1,
//                 user: "Ahmad",
//                 rating: 4.0,
//                 title: "Good Product",
//                 comments: "It is a very good product ....",
//                 date: "06-02-2021",
//                 status: true,
//             },
//             {
//                 id: 2,
//                 user: "Zubair",
//                 rating: 4.5,
//                 title: "Very Good Product",
//                 comments: "zubair It is a very good product ....",
//                 date: "05-02-2021",
//                 status: false,
//             },
//             {
//                 id: 3,
//                 user: "Ali",
//                 rating: 5.0,
//                 title: "Best Product",
//                 comments: "ali It is a very good product ....",
//                 date: "04-02-2021",
//                 status: true,
//             },
//         ],
//     },
//     {
//         id: 103,
//         title: "Bike",
//         variations: [
//             { id: 1, color: "black", price: 55000, quantity: 20 },
//             { id: 2, color: "red", price: 50000, quantity: 1 },
//         ],
//         reviews: [
//             {
//                 id: 1,
//                 user: "Ahmad",
//                 rating: 4.0,
//                 title: "Good Product",
//                 comments: "It is a very good product ....",
//                 date: "06-02-2021",
//                 status: true,
//             },
//             {
//                 id: 2,
//                 user: "Zubair",
//                 rating: 3.0,
//                 title: "Very Good Product",
//                 comments: "zubair It is a very good product ....",
//                 date: "05-02-2021",
//                 status: false,
//             },
//         ],
//     },
// ];

 
// question No:1

// var userInput = prompt("Enter ID Number");
// for (a = 0; a < products.length; a++) {
//     if (userInput == products[a].id) {
//         console.log(products[a]);
//     };
// };


// question :no 2

// for (i = 0; i < products.length; i++) {
//     console.log(products[i].title);
// };

// Question 3

// var colorInput = prompt("Enter ID Number for available colors");
// for (i = 0; i < products.length; i++) {
//     for (j = 0; j < products[i].variations.length; j++) {
//         for (e = 0; e < products[1].variations.length; e++) {
//             if (colorInput == products[i].id) {
//                 console.log(products[i].variations[j].color);
//             };
//         };
//     };
// };

// Question 4

// var productTotalQuantity = "Mobile";
// var totalQuantity = 0;
// for (f = 0; f < products.length; f++) {
//     for (g = 0; g < products[f].variations.length; g++) {
//         if (productTotalQuantity === products[f].title) {
//             totalQuantity += products[f].variations[g].quantity;
//         };
//     };
// };
// console.log("Total Quantity is : " + totalQuantity);

// Question 5

// var lessCount = 0;
// for (h = 0; h < products.length; h++) {
//     for (i = 0; i < products[h].variations.length; i++) {
//         if (products[h].variations[i].quantity < 2) {
//             console.log (products[h].title);
//         };
//     };
// };


//question no 07


// for (i = 0; i < products.length; i++) {
//     for (j = 0; j < products[i].reviews.length; j++) {
//         if (products[i].reviews[j].status) {
//             console.log(products[i].reviews[j]);
//         };
//     };
// };





//question no 06

// const reviews = [
//     {
//         id: 1,
//         user: "Ahmad",
//         rating: 4.0,
//         title: "Good Product",
//         comments: "It is a very good product ....",
//         date: "06-02-2021",
//         status: true,
//         product: "Mobile"
//     },
//     {
//         id: 2,
//         user: "Zubair",
//         rating: 4.5,
//         title: "Very Good Product",
//         comments: "zubair It is a very good product ....",
//         date: "05-02-2021",
//         status: false,
//         product: "Mobile"
//     },
//     {
//         id: 3,
//         user: "Ali",
//         rating: 5.0,
//         title: "bad Product",
//         comments: "ali It is a very good product ....",
//         date: "04-02-2021",
//         status: true,
//         product: "Mobile"
//     }
// ];


// const productRatings = {};

// for (let i = 0; i < reviews.length; i++) {
//     const review = reviews[i];
//     const product = review.product;
//     const rating = review.rating;

//     if (!productRatings[product]) {
//         productRatings[product] = { totalRating: 0, count: 0 };
//     }

//     productRatings[product].totalRating += rating;
//     productRatings[product].count += 1;
// }

// let highestAvgRating = -1;
// let highestRatedProduct = '';

// for (let product in productRatings) {
//     const { totalRating, count } = productRatings[product];
//     const avgRating = totalRating / count;

//     if (avgRating > highestAvgRating) {
//         highestAvgRating = avgRating;
//         highestRatedProduct = product;
//     }
// }


// console.log(`Highest Rated Product: ${highestRatedProduct}`);


//question no 8

// const products = [
//     { productId: 101, name: "Sony LED 40 inch", color: "Silver", price: 50000 },
//     { productId: 101, name: "Sony LED 40 inch", color: "Black", price: 55000 },
//     { productId: 102, name: "Mobile", color: "Silver", price: 50000 },
//     { productId: 102, name: "Mobile", color: "Gold", price: 55000 },
//     { productId: 103, name: "Bike", color: "Red", price: 45000 },
//     { productId: 103, name: "Bike", color: "Black", price: 55000 },
// ];


// const mostExpensive = {};


// for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     const productId = product.productId;
    

//     if (!mostExpensive[productId] || product.price > mostExpensive[productId].price) {
//         mostExpensive[productId] = product;
//     }
// }


// for (let productId in mostExpensive) {
//     const product = mostExpensive[productId];
//     console.log("Product " + productId + " = " + product.name + " - " + product.color + " (" + product.price + ")");
// }

