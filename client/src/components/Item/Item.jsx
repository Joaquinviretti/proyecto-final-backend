import "./Item.scss"

const Item = ({ item }) => {

    return (
        <div className="col">
            <div className="itemContainer">
                <div className="itemContainer__image" style={{ backgroundImage: `url(${item.thumbnail})` }}></div>
                <div className="itemContainer__info">
                    <span className="item__price">{item.price}</span>
                    <h2 className="item__name">{item.title}</h2>
                    <button className="item__button">Actualizar</button>
                    <button className="item__button">Eliminar</button>
                </div>
            </div>
        </div>
    )
}

export default Item