import express from 'express';
import cors from 'cors'

const app = express();
app.use(cors());

import {productRouter} from './routers/productRouter.js';
import {cartRouter} from './routers/cartRouter.js';

// built-in middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//app.use(express.static(path.join(__dirname, '..', './public')))

// Router
const PORT = 8080;
app.use('/api/productos', productRouter)
app.use('/api/carrito', cartRouter)

const server = app.listen(PORT, () => {
    console.log(`listening on port: ${server.address().port}`)
})