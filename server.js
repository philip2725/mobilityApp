import express from 'express'
import cors from 'cors'

//app config
const app = express()
const port = process.env.PORT || 8080;

//middlewares
app.use(express.json())
app.use(cors())

//api routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// listen
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})