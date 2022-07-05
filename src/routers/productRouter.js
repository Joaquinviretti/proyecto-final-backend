import { Router } from 'express';

import {ProductContainer} from '../Api/ProductContainer.js';

const productApi = new ProductContainer()
const productRouter = Router();

//MIDDLEWARE validate ID
let validarId = (req, res, next) => {
    let id = req.params.id;
    if (id < 0 || id > productApi.getAll().length) {
        res.status(400).send({
            error: "El ID no corresponde a ningún producto."
        })
    } else {
        next()
    }
}

productRouter.get('/', (req, res) => {
    const data = productApi.getAll()
    data.then(productos => {
        res.json(productos)
    })
})

productRouter.get('/:id', validarId, (req, res) => {
    const id = req.params.id;
    const data = productApi.getById(id);
    data.then(producto => {
        console.log(producto)
        if(!producto) res.json({error: "el producto no existe"})
        res.json(producto)
    })
})

productRouter.post('/', (req, res) => {
    const { title, price, thumbnail } = req.body;
    const producto = { title, price, thumbnail };
    productApi.add(producto)
    res.sendStatus(201)
})

productRouter.put('/:id', validarId, (req, res) => {
    let id = parseInt(req.params.id);
    let productoNuevo = {
        title: req.body.title,
        price: req.body.price,
        thumbnail: req.body.thumbnail,
    }
    const modificado = productApi.update(id, productoNuevo)
    modificado.then(p => {
        if(!p) res.json({error:"Error al actualizar."})
        res.json(p)
    })  
})

productRouter.delete('/:id', validarId, (req, res) => {
    productApi.delete(req.params.id)
    .then(() => {
        res.json({msg:"Borrado con éxito."})
    })
})

export {productRouter}