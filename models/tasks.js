module.exports = app => {
  return {
    findAll: (params, callback) => {
      return callback([
        {title: "test"},
        {title: "test 2"}
      ])
    }
  }
}
