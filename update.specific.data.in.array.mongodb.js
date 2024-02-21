use("esports-imdb");

// db.friends.updateOne(
//   { name: "Jivana", "scores.sub": "Science" },
//   { $set: { "scores.$.sub": "Computer" } }//scores.$sub=> $ use garxa tei object janauna, array vitra change garna $ usr
// );
// db.friends.updateOne(
//   { name: "Jivana", "scores.sub": "Social" },
//   {
//     $set: {
//       "scores.$.sub": "Nepali",
//       "scores.$.point": 59,
//     },
//   }
// );
// db.friends.updateOne(
//   { name: "Jivana", "scores.point": 55 },
//   { $set: { "scores.$.sub": "Pythin" } }
// );
// db.friends.updateOne(
//   { name: "Jivana" },
//   {
//     $set: {
//       "scores.$[].point": 70,
//     },
//   }
// );
//60,65,70 array vitra change garna $
// db.friends.updateOne(
//   { name: "Jivana", "scores.sub": "Pythin" },
//   { $set: { "scores.$.point": 60 } }
// );
//decrrease point of all subjects by 10
// db.friends.updateOne({ name: "Jivana" }, { $inc: { "scores.$[].point": -10 } });
// db.friends.updateOne(
//   { name: "Jivana", hobbies: "Dancing" },
//   { $set: { "hobbies.$": "Cycling" } }
// );
// db.friends.updateOne(
//   { name: "Jivana" },
//   { $set: { "scores.$[item].point": 70 } },
//   { arrayFilters: [{ "item.point": { $gte: 55 } }] }
// );
//filter garna [item], select all garna []
//?change jivanas hobbies of gaming and cycling to rafting
// db.friends.updateOne(
//   { name: "Jivana" },
//   { $set: { "hobbies.$[item]": "Rafting" } },
//   { arrayFilters: [{ $or: [{ item: "Gaming" }, { item: "Cycling" }] }] }
// );
db.friends.find();
