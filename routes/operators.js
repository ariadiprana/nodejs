module.exports = app => {
  const Operators = app.db.models.Operators;
  app.get("/operators", (req, res) => {
    Operators.findAll({}).then(operators => {
      res.json({operators: operators});
    });
  });
};
