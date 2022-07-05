import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
const cartRouter = Router();

cartRouter.post('/', (req, res) => {
    const cart = {
        id: uuidv4(),
        timestamp: Date.now(),
        productos: []
    }
    res.json(cart.id)
})

cartRouter.get('/:id/productos', (req, res) => {
    const id = req.params.id;
})

cartRouter.post('/:id/productos/:id_prod', (req, res) => {
    const id = req.params.id;
    const id_prod = req.params.id_prod;
})

cartRouter.delete('/:id/productos/:id_prod', (req, res) => {
    const id = req.params.id;
    const id_prod = req.params.id_prod;
})

export {cartRouter}