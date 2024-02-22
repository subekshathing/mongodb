use("esports-imdb");
//?unwind=> undo, hobbies ko pratek hobbies lai xuttauxa..in array
// db.teachers.insertOne({
//   name: "Sambhav",
//   hobbies: ["Cycling", "Dancing", "Singing", "Book"],
// });
// db.teachers.insertOne({
//   name: "Sambhav",
//   hobbies: [],
// });
// db.teachers.aggregate([
//   { $match: {} },
//   {
//     $unwind: "$hobbies",
//   },
// ]);
db.teachers.aggregate([
  {
    $match: {},
  },
  {
    $unwind: {
      path: "$hobbies",
      includeArrayIndex: "arrayIndex",
      preserveNullAndEmptyArrays: true,
    },
  },
]);
