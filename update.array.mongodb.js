use("esports-imdb");
//array update operators
//$push, $pop,$pull,$pullAll
//$push=> adds data to end of array
// db.friends.updateOne(
//   { name: "Laxman" },
//   {
//     $push: {
//       hobbies: "Dancing",
//     },
//   }
// );
//?push "Singing" and "Riding" to Laxman
// db.friends.updateOne(
//   { name: "Laxman" },
//   { $push: { hobbies: ["Singing", "Riding"] } }//array nai push hunxa
// );
// db.friends.updateOne(
//   { name: "Laxman" },
//   { $push: { hobbies: { $each: ["Singing", "Riding"] } } }
// );
//?$each => array nabanai multiple value add garxa same field ma

//array ma element repeat huna payo, set ma chai payena so value repeat nahuna $addToSet use garxa,
//?addToSet => push value to array if that item is not already there, if that value exist then it does not push value to array.same as $push
// db.friends.updateOne({ name: "Laxman" }, { $addToSet: { hobbies: "Cardio" } });
// db.friends.updateOne(
//   { name: "Laxman" },
//   { $addToSet: { hobbies: { $each: ["Riding", "Book"] } } }
// );
// db.friends.find();
