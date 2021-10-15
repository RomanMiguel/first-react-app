import Item from './item'

const ItemList = ({items}) => {
  if(items.length===0){
    return <h1>Sin stock</h1>
  }
  return(
    <div className="row">
      {items.map(e=><Item item={e}></Item>)}
    </div>
  )
};

export default ItemList;
