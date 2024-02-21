use("esports-imdb");
//aggregate is read operation it does not change any
//match
//$sort
//$project
//$unwind
//$lookup
//$limit
//$skip
//$group
//
//?match=> it is a filter stage, similar to read operation
//?project=> select item
//?$sort=>sort document based upon value
//1=> acsending to decsending
//-1=> descending to acsending
// db.movies.aggregate([
//   {
//     $match: {
//       status: "Ended",
//       "rating.average": { $gt: 7 },
//     },
//   },
//   {
//     $project: {
//       _id: 0,
//       name: 1,
//       status: 1,
//       //rating: 1,
//       averageRating: "$rating.average",
//     },
//   },
// ]);
// db.movies.find().count();
db.movies.aggregate([
  {
    $match: {
      "rating.average": { $gt: 8 },
    },
  },
  {
    $project: {
      name: 1,
      //!$first and $last array ko case ma use garne
      scheduleDay: { $first: "$schedule.days" },
      averageRating: "$rating.average",
      secondGenres: { $arrayElemAt: ["$genres", 1] },
    },
  },
  {
    $sort: {
      averageRating: -1,
    },
  },
]);
