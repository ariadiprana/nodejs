module.exports = app => {
  const Tasks = app.db.models.Tasks;

  app.route("/tasks")
    .all((req, res) => {
      delete req.body.id;
      next();
      // Middleware for preexecution of routes
    })
    .get((req, res) => {
      // "/tasks": List tasks
    })
    .post((req, res) => {
      // "/tasks": Save new task
    });

  app.route("/tasks/:id")
    .all((req, res) => {
      delete req.body.id;
      next();
      // Middleware for preexecution of routes
    })
    .get((req, res) => {
      // "/tasks/1": Find a task
    })
    .put((r eq, res) => {
      // "/tasks/1": Update a task
    })
    .delete((req, res) => {
      // "/tasks/1": Delete a task
    });
};
