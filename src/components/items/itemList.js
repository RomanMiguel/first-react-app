import Item from './item'

const ItemList = ({items}) => {
  return(
    <div>
      {items.map(e=>{
        return<Item item={e}></Item>
      })}
    </div>
  )
};

export default ItemList;
