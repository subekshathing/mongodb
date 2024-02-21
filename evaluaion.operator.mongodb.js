use("esports-imdb");

//?evaluation operator
//?regex=>ali ali matra thaha xa vane field
//$options: "i"=> jun case vaye pani hunxa like uppercase and lowercase
//?expr

//?find movies whose summary includes "staring city"
// db.movies.find({ summary: { $regex: "Starling City", $options: "i" } });

//?find movies whose summary include "Pacific"
// db.movies.find({ summary: { $regex: "Pacific", $options: "i" } });

//?find movies whose name include "Morty"
// db.movies.find({ summary: { $regex: "Morty", $options: "i" } });

//?expr=> diff field compare garna

// db.sales.insertMany([
//   {
//     name: "TV",
//     order: 100,
//     volume: 50,
//   },
//   {
//     name: "Bottle",
//     order: 70,
//     volume: 150,
//   },
//   {
//     name: "Mouse",
//     order: 25,
//     volume: 10,
//   },
//   {
//     name: "Rice",
//     order: 10,
//     volume: 500,
//   },
// ]);

// db.sales.find();
//?find products whose order is greater than 100
// db.sales.find({ order: { $gt: 100 } });

//?find products whose value order is greater than volume
//?order>volume
// db.sales.find({ $expr: { $gt: ["$order", "$volume"] } });

//?find movies whose rating is either 7 or 7.5 or 8 or 8.5 or 9 or 9.3
// db.movies.find({
//   $or: [
//     { "rating.average": 7 },
//     { "rating.average": 7.5 },
//     { "rating.average": 8 },
//     { "rating.average": 8.5 },
//     { "rating.average": 9 },
//     { "rating.average": 9.3 },
//   ],
// });

//?in=> if or is applied on same field for multiple condition we can use $in
// db.movies.find({ "rating.average": { $in: [7, 7.5, 8, 8.5, 9, 9.3] } });

//?nin=> nor is applied in same field
//?find movies whose genres is neither"Thriller" nor "crime" nor "supernatural"
// db.movies.find({
//   $nor: [
//     { genres: "Thriller" },
//     { genres: "Crime" },
//     { genres: "Supernatural" },
//   ],
// });

// db.movies.find({ genres: { $nin: ["Thriller", "Crime", "Supernatural"] } });
