const Sequelize = require("sequelize");
const sequelize = require("./../db");

module.exports = sequelize.define(
  "tables",
  {
    id: {
      field: "id",
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      field: "name",
      type: Sequelize.TEXT,
    },
    count: {
      field: "count",
      type: Sequelize.INTEGER,
    },
    distance: {
      field: "distance",
      type: Sequelize.INTEGER,
    },
    date: {
      field: "date",
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);
