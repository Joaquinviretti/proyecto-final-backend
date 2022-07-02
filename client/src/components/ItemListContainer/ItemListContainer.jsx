import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/api/productos')
            .then(res => {
              return res.json()
            }).then(items => {
                setItems(items)
            })
    }, [])

    return (
        <section className="container">
            <h2 className="text-center">Productos</h2>
            <ItemList items={items} />
        </section>
    )
}

export default ItemListContainer;