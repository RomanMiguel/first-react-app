import ItemDetail from './itemDetail'
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const Articulos= [{
    id: "0",
    title: 'remera jordan nike',
    price: 2500,
    category:"remeras",
    description:"REMERA PSG JORDAN WORDMARK NIKE Demuestra tu pasión por les Parisiens en tu rutina diaria con Nike. La remera mangas cortas Jordan Paris Saint-Germain Woodmark ha sido confeccionado con tela de algodón que se siente suave y liviana, con un ajuste que es fácil, relajado y versátil",
    stock: 30,
    picture:'https://www.digitalsport.com.ar/files/products/60ca64b59941b-516531-500x500.jpg'
},{
    id: "1",
    title: 'jean Levis 505 Regular Fit Dark Stone Wash',
    price: 7600,
    category:"pantalones",
    description:"Corte por debajo de la cintura Recto desde la cadera hasta el muslo Pierna recta desde el muslo hasta el tobillo",
    stock: 15,
    picture:'https://http2.mlstatic.com/D_NQ_NP_972800-MLA45342820640_032021-O.webp'
},{
    id: "2",
    title: 'Zapatillas Air Jordan 1 Mid Se Purple Basket Retro',
    price: 37499,
    category:"zapatillas",
    description:"Puntera redonda, suela plana de goma, cierre con agujetas en la parte delantera, plantilla con logo, detalle del logo y diseño por el tobillo. Estos estilos son suministrados por un marketplace de tenis, el cual ofrece los artículos más codiciados y difíciles de encontrar de todo el mundo.",
    stock: 6,
    picture:'https://http2.mlstatic.com/D_NQ_NP_680357-MLA47259735801_082021-O.webp'
}];

const getItem = () => {
    return new Promise((resolve, rejetc) => {
        setTimeout(() => {
          resolve(Articulos);
        }, 2000);
    });
}
function ItemDetailContainer() {
    const [element, setElement] = useState([undefined]);
    const {id} = useParams();

    useEffect(()=>{
        const art= getItem();
    
        art.then(list =>{ 
            const prod= list.filter(e=>e.id=== id)
            setElement(prod)
        })
    },[id])

    return(
        <div>
            {element.map(e=>{
                return <ItemDetail iten={e}/>
            })}
        </div>
    )
}
export default ItemDetailContainer;
