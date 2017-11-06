import express from 'express'

const PORT = 3000
const app = express()

app.set("json spaces", 4)

app.get("/", (req, res) => res.json({status : "API"}))
app.get("/users", (req,res) => {
  res.json({
    tasks: [
      {title: "test1"},
      {title: "test2"}
    ]
  })
})

app.listen(PORT, () => console.log(`API - Port ${PORT}`))
