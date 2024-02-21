// use("amazon-12pm");

// db.course.insertOne({
//   name: "HTML/css",
//   duration: 50,
//   price: 7000,
// });

// db.student.insertOne({
//   name: "subu",
//   age: 50,
//   address: "ktm",
// });
// db.student.find();

// use("daraz");
//CRUD
//?Create => add
//insertOne,insertMany
//?insertOne=> to insert one item
// db.product.insertOne({
//   name: "Bottle",
//   brand: "serve well",
//   price: 700,
// });
// db.product.insertOne({
//   name: "Noodle",
//   brand: "WAi wai",
//   price: 30,
// });
// db.product.insertOne({
//   name: "Rice cooker",
//   brand: "samsung",
//   price: 10500,
// });
// db.product.insertOne({
//   name: "Phone",
//   brand: "samsung",
//   price: 700,
// });
//?insertMany
// db.product.insertMany([
//   { name: "shampoo", brand: "sunsilk", price: 600 },
//   { name: "Hair oil", brand: "dabur amala", price: 300 },
// ]);
//to read or get item from table
// db.product.find();

// db.customer.insertOne({
//   name: "Prithvi",
//   address: "ktm",
//   email: "prithvi@gmail.com",
// });

// db.customer.find();

//?read operation
//findOne, find
// db.customer.find({});
//?findOne=> returns first item that matches condition
// db.product.findOne({ name: "Bottle" });
// db.product.findOne({ price: 300 });
//db.product.findOne({ name: "Bell" }); //returns null if product doenot exist

//?find=>returns all product that matches the conditon

// db.product.find({ price: 700 });

//?delete=> deletes items from table
//deleteOne, deleteMany

// db.product.deleteOne({ name: "Rice cooker" });
// db.product.deleteMany({ price: 700 });

//?update=> changes values /edit
//updateOne,updateMany
// db.product.updateOne(
//   { name: "Hair oil" },
//   {
//     $set: {
//       price: 500,
//       brand: "parachute",
//     },
//   }
// );

// db.product.insertOne({
//   name: "Hair oil",
//   brand: "streaks",
//   price: 900,
// });

// db.product.updateMany(
//   { name: "Hair oil" },
//   {
//     $set: {
//       price: 1550,
//     },
//   }
// );
// db.product.find();
//?udemy database, courses add update delete

// use.udemy();

// db.courses.insertOne({
//   name: "MERN",
//   duration: 90,
//   price: 20000,
// });
// db.courses.insertMany([
//   { name: "python", duration: 97, price: 50000 },
//   { name: "Devops", duration: 80, price: 20000 },
// ]);
// db.courses.updateOne(
//   { name: "python" },
//   {
//     $set: {
//       duration: 30,
//     },
//   }
// );
// db.courses.updateMany({ price: 20000 }, { $set: { duration: 60 } });

// db.courses.deleteOne({ name: "python" });
// db.courses.deleteMany({ price: 20000 });
// db.courses.find({});
