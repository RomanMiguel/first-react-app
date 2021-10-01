import { createContext, useState} from "react";

const CarContext= createContext()

export const CartContextProvider=({children})=>{
    const [carrito, setCarrito]=useState([])

    const isInCar=(id)=>{
        const result= carrito.some(e=>e.id === id)
        return result
    }
    const addItem=(item, quantity)=>{
        const newProd={...item, quantity: quantity}
        if( !isInCar(newProd.id)){
            const arrayProd= [...carrito, newProd]
            setCarrito(arrayProd)
            console.log(carrito)
        }else{
            const newProducts = carrito.map(prod => {
                if(prod.id === item.id) {
                    const newProduct = {...prod, quantity: quantity}
                    return newProduct
                } else {
                    return prod
                }
            })
            setCarrito(newProducts)
        }
    }   
    const getProduct = (id) => {
        return carrito.find(prod => prod.id === id)
    }

    const removeItem=(itemId)=>{
        const newCart= carrito.filter(e=>e.id !== itemId)
        setCarrito(newCart)
    }
    const clear=()=>{
        setCarrito([])
    }
    return(
        <CarContext.Provider value={{ 
        carrito,
        addItem, 
        removeItem, 
        clear, 
        getProduct, 
        isInCar
        }}>
            {children}
        </CarContext.Provider>
    )
}

export default CarContext;