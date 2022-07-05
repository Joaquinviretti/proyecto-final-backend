import fs from 'fs';

class ProductContainer {
    productos = []

    async add(producto) {
        /*   producto.id = this.getAll().length + 1;
          this.productos.push(producto);
          console.log(this.productos); */
        try {
            const data = await this.getAll()
            const productos = data
            producto.id = productos.length + 1
            productos.push(producto)
            fs.promises.writeFile('./data/productos.json', JSON.stringify(productos))

        } catch (e) {
            console.log(e)
        }
    }

    async getAll() {
        try {
            const data = await fs.promises.readFile('./data/productos.json', 'utf-8')
            return JSON.parse(data);
        } catch (e) {
            console.log(e)
        }
    }

    async getById(id) {
        try {
            const data = await this.getAll()
            return data.find(p => p.id == id)
        } catch (e) {
            console.log(e)
        }
    }

    async update(id, productoNuevo) {
        try {
            const data = await this.getAll()
            for (const p of data) {
                if (p.id === id) {
                    p.title = productoNuevo.title;
                    p.thumbnail = productoNuevo.thumbnail;
                    p.price = productoNuevo.price;
                }
            }
            await fs.promises.writeFile('./data/productos.json', JSON.stringify(data))
            return this.getById(id)
        } catch (e) {
            console.log(e)
        }
    }

    async delete(id) {
        try {
            const data = await this.getAll()
            data.filter(p => p.id != id)
            console.log(data)
            await fs.promises.writeFile('./data/productos.json', JSON.stringify(data))
        } catch (e) {
            console.log(e)
        }
    }
}

export {
    ProductContainer
}