use("esports-imdb");
//?read operator
// db.movies.find();

//?$eq, $lt, $lte, $gte, $ne

//? $eq => ===
//name ==="Under the Dome"

// ? find movies whose language is Japanese
// db.movies.find({ language: { $eq: "Japanese" } });
// ?find movies whose runtime is less than 30
// db.movies.find({ runtime: { $lt: 30 } });
// ? find movies whose runtime is greater than 90
// db.movies.find({ runtime: { $gt: 90 } });
// ? find movies whose rating is less than or equal to 6
// db.movies.find({ "rating.average": { $lte: 6 } });

//?not equals to
// db.movies.find({ language: { $not: { $eq: "English" } } });

//?find movies whose status is not "ended"
// db.movies.find({ status: { $ne: "Ended" } });
//? find movies whose weight is not 75
// db.movies.find({ weight: { $ne: 75 } });

//?find movies whose genre includes Thriller=>thriller ani aru ni vaye ni hunxa
// db.movies.find({ genres: "Thriller" });
//? genres ma thriller matra hune aru huna vayena [] use garne
// db.movies.find({ genres: ["Thriller"] });
//? find movies whose geners includes Crime
// db.movies.find({ genres: "Crime" });
//?logical operator
// $and, $or, $nor

//?find movies whose weight is greater than 75 and is rating is greater than 7.
// db.movies.find({
//   $and: [{ weight: { $gt: 75 } }, { "rating.average": { $gt: 7 } }],
// });
//?find movies whose genres is "Drama" and "Crime"

// db.movies.find({ genres: ["Drama", "Crime"] });
// db.movies.find({ $and: [{ genres: "Drama" }, { genres: "Crime" }] });
//? find movies whose network country name is "United States" and status is "Running"
// db.movies.find({
//   $and: [
//     { "network.country.name": { $eq: "United States" } },
//     { status: { $eq: "Running" } },
//   ],
// });

//?find movies whose rating is greater than 7 and less than equal to 9
// db.movies.find({
//   $and: [{ "rating.average": { $gt: 7 } }, { "rating.average": { $lte: 9 } }],
// });

//?or
//?find movies whose ratig is greater than 8 or genres is "Thriller"

// db.movies.find({
//   $or: [{ "rating.average": { $gt: 8 } }, { genres: "Thriller" }],
// });

//?Find movies whose status is "Ended"
// db.movies.find({ status: "Ended" });

// ?find movies whose rating is 9
// db.movies.find({ "rating.average": 9 });
// ?find movies whose rating is greater than 7 and less than 9
// db.movies.find({
//   $and: [{ "rating.average": { $gt: 7 } }, { "rating.average": { $lt: 9 } }],
// });
// ?find movies whose genres is Thriller
// db.movies.find({ genres: "Thriller" });
// ?find movies whose status is Running
// db.movies.find({ status: "Running" });
//? find movies whose status is Ended and runtime is 60
// db.movies.find({ $and: [{ status: "Ended" }, { runtime: 60 }] });
// ?find movies whose weight is 75 and network country is Canada
// db.movies.find({
//   $and: [{ weight: 75 }, { "network.country.name": "Canada" }],
// });
// ?find movies whose weight is 96 or runtime is 60
// db.movies.find({ $or: [{ weight: 96 }, { runtime: 60 }] });
// ? find movies whose rating average is not 9
// db.movies.find({ "rating.average": { $ne: 9 } });
//? find movies whose id is less than 5 or runtime is less than 3
// db.movies.find({ $or: [{ id: { $lt: 5 } }, { runtime: { $lt: 3 } }] });
//? fund movies whose genres doen nor include thriller
// db.movies.find({ genres: { $ne: "Thriller" } });

//?find movies whose status is not "Ended"
// db.movies.find({ status: { $ne: "Ended" } });

//?find movies whose genres is neigther Thriller nor Drama
// db.movies.find({ $nor: [{ genres: "Thriller" }, { genres: "Drama" }] });
//? find movies whose status is neither "Running" nor langauge is "English"
db.movies.find({ $nor: [{ status: "Runnig" }, { langauge: "English" }] });
