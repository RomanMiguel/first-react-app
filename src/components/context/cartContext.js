import { createContext, useState, useEffect} from "react";

const CarContext= createContext()

export const CartContextProvider=({children})=>{
    const [carrito, setCarrito]=useState([])

    const isInCar=(id)=>{
        const result= carrito.some(e=>e.id === id)
        return result
    }
    const addItem=(item, quantity)=>{
        const newProd={...item, cantidad:quantity}
        if( !isInCar(newProd.id)){
            const arrayProd= [...carrito, newProd] 
            setCarrito(arrayProd)
        }
    }    
    const removeItem=(itemId)=>{
        const newCart= carrito.filter(e=>e.id === itemId)
        setCarrito(newCart)
    }
    const clear=()=>{
        setCarrito([])
    }
    return(
        <CarContext.Provider value={{addItem, removeItem, clear, carrito}}>
            {children}
        </CarContext.Provider>
    )
}

export default CarContext;