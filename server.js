import express from 'express'
import cors from 'cors'
import {getTierVehiclesInZone} from './services/tierServices.js';

//app config
const app = express()
const port = process.env.PORT || 8080;

//middlewares
app.use(express.json()) //send responses in json format
app.use(cors())

//api routes
app.get('/', (req, res) => {
    res.send('API Backend of MobilityApp')
})

app.get('/getScooters/:location', (req, res) => {

    const location = req.params.location.toUpperCase();

    getTierVehiclesInZone(location).then((response) => {
        res.send(response.data)
    })
    .catch((err) => {
        res.send(err)
    })
   
})

// listen
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})