use("esports-imdb");
// ? delete movies whose genres includes "Drama" and "Thriller"'
// db.movies.deleteMany({ $and: [{ genres: "Drama" }, { genres: "Thriller" }] });

// db.movies.find({ $and: [{ genres: "Drama" }, { genres: "Thriller" }] });
// ? delete movies whose  network country us "Canada"
// db.movies.deleteMany({ "network.country.name": "Canada" });

// ? delete movies whose rating is greater than 8 and less than or equal to 9
// db.movies.deleteMany({
//   $and: [{ "rating.average": { $gt: 8 } }, { "rating.average": { $lte: 9 } }],
// });
//or
// db.movies.deleteMany({ "rating.average": { $gt: 8, $lte: 9 } });
// db.movies.find();
