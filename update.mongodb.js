//?upate=> edit values in document
//?$set
use("esports-imdb");

//?update name from "Alish" to"Laxman
// db.friends.updateOne({ name: "Alish" }, { $set: { name: "Laxman" } });
//?update name  "unique" to "Jivana" and age to 21 and contact number to "98766543210"

// db.friends.updateOne(
//   { name: "Unique" },
//   { $set: { name: "Jivana", age: 21, contactNumber: "9876543210" } }
// );

//?update name  "Prakash" to "Prithvi" and age to 22 and contact number to "987665489
// db.friends.updateOne(
//   { name: "Prakash" },
//   { $set: { name: "Prithvi", age: 22, contactNumber: "987665489" } }
// );

//?update name  "Nischal" to "Shuvechchha" and age to 22 and contact number to "9876578976" and also isNepali to true

// db.friends.updateOne(
//   { name: "Nischal" },
//   {
//     $set: {
//       name: "Shuvechchha",
//       age: 22,
//       contactNumber: "9876578976",
//       isGraduated: true,
//       isNepali: true,
//     },
//   }
// );
// db.friends.updateOne(
//   { name: "Shuvechchha" },
//   {
//     $set: {
//       isNepali: true,
//     },
//   }
// );
//? $inc=> increases value by given number
//?update age of "Jivana" by 40
// db.friends.updateOne({ name: "Jivana" }, { $inc: { age: 40 } });//age=age+40 garxa

//decrease age of jivana by 45
// db.friends.updateOne({ name: "Jivana" }, { $inc: { age: -45 } });
//?increase age for all friend by 10
// db.friends.updateMany({}, { $inc: { age: 10 } });
//? $mul=> multiply field by provided
// db.friends.updateOne({ name: "Shuvechchha" }, { $mul: { age: 2 } });

//? divide=> mul by 1/2
// db.friends.updateOne({ name: "Prithvi" }, { $mul: { age: 0.5 } });
// db.friends.find();
