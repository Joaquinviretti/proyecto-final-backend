import Item from "../Item/Item";

const ItemList = ({items}) => {
    console.log(items);
    return (
       <div className="row">
         {items.map((item, i) => 
            <Item key={i} item={item}/>
        )}
       </div>
    )
}

export default ItemList