// use("esports-imdb");
// ?one to one =>
// e.g one vehicle has one ownerDetails, one person has one national identity card
// ? one to many =>
// e.g. one person can play multiple games in sport week
// ?many to many => one to many from both direction
// e.g. one student can enroll in multiple courses in broadway
// and one course has multiple students
// db.owners.insertMany([
//   { name: "Kamal", address: "Surkhet" },
//   { name: "Laxman", address: "Lalitpur" },
//   { name: "Arun", address: "Tripureshwor" },
// ]);

// db.owners.find();

// db.vehicles.insertOne({
//   name: "FZ",
//   brand: "Yamaha",
//   cc: 250,
//   color: "blue",
//   ownerId: ObjectId("65d5a4e119d242e7a90af32d"),
// });

//?lookup
// db.vehicles.aggregate([
//   { $match: {} },
//   {
//     $lookup: {
//       from: "owners",
//       localField: "ownerId",
//       foreignField: "_id",
//       as: "ownerDetails",
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       brand: 1,
//       color: 1,
//       cc: 1,
//       ownerName: { $first: "$ownerDetails.name" },
//     },
//   },
// ]);
use("esports-relation");

//?example 2
// db.courses.insertMany([
//   {
//     name: "MERN",
//     duration: 90,
//   },
//   {
//     name: "Python",
//     duration: 45,
//   },

//   {
//     name: "Devops",
//     duration: 65,
//   },

//   {
//     name: "AI",
//     duration: 90,
//   },
//   {
//     name: "Flutter",
//     duration: 55,
//   },
// ]);

// db.students.insertOne({
//   name: "Sumitra",
//   address: "Ktm",
//   email: "sumi@gmail.com",
//   enrollIds: [
//     ObjectId("65d5ab3dc6fbbd447e32755b"),
//     ObjectId("65d5ab3dc6fbbd447e32755e"),
//   ],
// });

db.students.aggregate([
  { $match: {} },
  {
    $lookup: {
      from: "courses",
      localField: "enrollIds",
      foreignField: "_id",
      as: "courseDetails",
    },
  },
  {
    $project: {
      name: 1,
      address: 1,
      email: 1,
      "courseDetails.name": 1,
      "courseDetails.duration": 1,
    },
  },
]);
