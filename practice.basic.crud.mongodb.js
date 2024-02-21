use("netflix");
// db.flims.insertOne({
//   name: "Batman",
//   leadActor: "Christian Bale",
//   releaseYear: 2000,
//   length: 90,
// });
// db.flims.insertOne({
//   name: "Cast away",
//   leadActor: "Christian Bale",
//   releaseYear: 2000,
//   length: 70,
// });
// db.flims.find();
// db.flims.insertMany([
//   {
//     name: "chhakka panja",
//     leadActor: "Dipak Raj Giri",
//     releaseYear: 2000,
//     length: 90,
//   },
//   {
//     name: "12th Fail ",
//     leadActor: "Vikrant Massey",
//     releaseYear: 2023,
//     length: 90,
//   },
// ]);

// db.flims.find({ length: 90 });
// db.flims.findOne({ leadActor: "Vikrant Massey" });
// db.flims.findOne({ name: "chhakka panja" });
// db.flims.find({ releaseYear: 2023 });
//?update movie releasedyear 2020 whose name is chakka panja
// db.flims.updateOne({ name: "chhakka panja" }, { $set: { releaseYear: 2020 } });
//?update releaseyear 2023 and length 90 whose name is Cast away
// db.flims.updateOne(
//   { name: "Cast away" },
//   { $set: { releaseYear: 2023, length: 90 } }
// );
//?update movies length 180 whose name is Cast away
// db.flims.updateOne({ name: "Cast away" }, { $set: { length: 180 } });
// db.flims.updateOne({ name: "Batman" }, { $set: { name: "Batman Returns" } });
//?update movies whose length is 90 to 105
// db.flims.updateMany({ length: 90 }, { $set: { length: 105 } });
// db.flims.find();

//?delete movie whose main actor name is Dipak Raj Giri
// db.flims.deleteOne({ leadActor: "Dipak Raj Giri" });
//?delete movies whose length is 105
// db.flims.deleteMany({ length: 105 });
