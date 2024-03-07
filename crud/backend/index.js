import express, { json } from 'express'
import mongoose from 'mongoose'
import *as PostController from './controllers.js'
import cors from 'cors'


mongoose.connect('mongodb+srv://lonskoy0304:QeV6cIoPj2x5Y3K6@cluster0.lb8c1lp.mongodb.net/notes?retryWrites=true&w=majority&appName=Cluster0')
.then(console.log('Подключено к БД'))
.catch((err) => console.log(err));

const app = express();
app.use(cors());
app.use(express.json());
const port= 3000;

app.post('/notes', PostController.create);
app.delete('/notes/:id', PostController.remove);
app.get('/notes', PostController.getAll);


app.listen(port, (err) => {
    if(err) {
        return console.log(err);
    }
    console.log(`Слушаю порт: ${port}`);
} )