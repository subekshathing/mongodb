use("esports-imdb");
//array read operations
//$all=> array field hunu parxa
//$eleMatch
//?$size
// db.students.insertMany([
//   {
//     name: "Manish",
//     favoriteSingers: ["Arijit", "Menuka", "Shreya"],
//     hobbies: [
//       {
//         name: "Badminton",
//         frequency: 5,
//       },
//       {
//         name: "PubG",
//         frequency: 7,
//       },
//       {
//         name: "Dancing",
//         frequency: 2,
//       },
//     ],
//   },

//   {
//     name: "Sona",
//     favoriteSingers: ["Sonu", "Narayan", "Pramod"],
//     hobbies: [
//       {
//         name: "Singing",
//         frequency: 4,
//       },
//       {
//         name: "Football",
//         frequency: 5,
//       },
//       {
//         name: "Volleyball",
//         frequency: 3,
//       },
//     ],
//   },

//   {
//     name: "Arun",
//     favoriteSingers: ["Aatif", "Sushant", "Udit"],
//     hobbies: [
//       {
//         name: "PubG",
//         frequency: 5,
//       },
//       {
//         name: "Singing",
//         frequency: 7,
//       },
//       {
//         name: "Bikes",
//         frequency: 2,
//       },
//     ],
//   },
// ]);
// db.students.insertOne({
//   name: "Rina",
//   favoriteSingers: ["Neha", "Tony"],
//   hobbies: [
//     {
//       name: "Dancing",
//       frequency: 10,
//     },
//   ],
// });
// db.students.find();
//? find students whose favorite singer includes "Arijit" and "Shreya"
// db.students.find({ favoriteSingers: { $all: ["Arijit", "Shreya"] } });

//!size=> does not accept range such as greater and less, value exact chahiyo
//?findstudents who has two favorite singers
// db.students.find({ favoriteSingers: { $size: 2 } });

//?findstudents who has three favorite singers
// db.students.find({ favoriteSingers: { $size: 3 } });
//?findstudents who has one hobbies
// db.students.find({ hobbies: { $size: 1 } });

//?findstudents whose hobby is "PubG" and frequency is greater than 6

// db.students.find({
//   $and: [{ "hobbies.name": "PubG", "hobbies.frequency": { $gt: 6 } }],//frequency arko object ko match vayo
// });
//$eleMatch=> same element huna parxa
// db.students.find({
//   hobbies: { $elemMatch: { name: "PubG", frequency: { $gt: 6 } } },
// });

// ? find students whose hobby is "Singing" and
// ? frequency is greater than or equals to 5
db.students.find({
  hobbies: { $elemMatch: { name: "Singing", frequency: { $gte: 5 } } },
});
