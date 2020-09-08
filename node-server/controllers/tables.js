const Tables = require("../models/tables");

module.exports = (app) => {
  //!  Tables Pagination  ----------------------------------
  // eslint-disable-next-line no-unused-expressions
  app.get("/api/data/:limit/:page", function (request, response) {
    const limit = parseInt(request.params.limit);
    const offset = limit * parseInt(request.params.page);

    Tables.findAndCountAll({
      order: [["id", "ASC"]],
      limit: limit,
      offset: offset,
    }).then((tables) => {
      response.json(tables);
    });
  }),
    //!  Tables Searcher  ----------------------------------
    app.post("/api/searchdata", function (request, response) {
      const body = request.body;
      const column = body.column;
      const uslovie = body.uslovie;
      const text = body.text;
      var whereparams = {};
      var whereparamschildren = {};

      if (uslovie === "equally") {
        whereparamschildren = { $eq: text };
      } else if (uslovie === "contains") {
        whereparamschildren = { $like: "%" + text + "%" };
      } else if (uslovie === "more") {
        whereparamschildren = { $gt: text };
      } else if (uslovie === "less") {
        whereparamschildren = { $lt: text };
      }

      if (column === "count") {
        whereparams.count = whereparamschildren;
      } else if (column === "name") {
        whereparams.name = whereparamschildren;
      } else if (column === "distance") {
        whereparams.distance = whereparamschildren;
      }

      Tables.findAll({
        order: [[column, "DESC"]],
        where: whereparams,
      }).then((tables) => {
        response.json(tables);
      });
    });
};
