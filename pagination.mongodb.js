use("esports-imdb");
//page 1
//skip=(page-1)*limit
let page = 1;
const limit = 10;
let skip = (page - 1) * limit;
db.movies.aggregate([
  {
    $match: {},
  },
  { $skip: skip },
  { $limit: limit },
  {
    $project: {
      name: 1,
      id: 1,
      _id: 0,
    },
  },
]);
// db.movies.find();
