const Articulos=[
    {
        id: 1,
        title: "RYZEN 3200G",
	    category: "2",
        price: 40000,
	    description:"",
        stock: 30,
	    picture: "https://http2.mlstatic.com/D_NQ_NP_765679-MLA40219168655_122019-O.webp"
    },
    {
        id: 2, 
        title: "INTEL CORE I3", 
        category: "2",
    	price: 25000,
        description:"",
	    stock: 30,
	    picture: "https://http2.mlstatic.com/D_NQ_NP_872687-MLA43117152530_082020-V.webp"
    },
    {
        id: 4, 
        title: "rx 5500XT 4gb", 
        category: "3",
	    price: 110000,
        description:"",
	    stock: 30,
	    picture: "https://http2.mlstatic.com/D_NQ_NP_649837-MLA41913051988_052020-V.webp"
    },
    {
        id: 6, 
        title: "rtx 3070 ti",
	    category: "3",        
	    price: 249000,
        description:"",
	    stock: 30,
	    picture: "https://http2.mlstatic.com/D_NQ_NP_661298-MLA46793159279_072021-W.webp"
    },
    {
        id: 7, 
        title: "a320m-k asus", 
        category: "1",
	    price: 10000,
        description:"",
	    stock: 30,
	    picture: "https://http2.mlstatic.com/D_NQ_NP_751760-MLA31065397561_062019-V.webp"
    },
    {
        id: 8, 
        title: "b450m aorus", 
        category: "1",
	    price: 23497,
	    description:"",
	    stock: 30,
        picture: "https://http2.mlstatic.com/D_NQ_NP_946391-MLA43139390440_082020-W.webp"
    }
]

export const getProdCat=()=>[
    {id: 1, category:"Placa Madre"},
    {id: 2, category:"Procesador"},
    {id: 3, category:"Tarjeta Grafica"}
]

export const getProducts = (category) => {
    return new Promise((resolve, rejetc) => {
      setTimeout(() => {
        category?resolve(Articulos.filter(e=>e.category=== category)) :resolve(Articulos);
      }, 2000);
    });
}

export const getProductDetail = (id) => {
    return new Promise((resolve, rejetc) => {
        const unico= Articulos.find(e=>Number(e.id)=== Number(id))
        setTimeout(() => resolve(unico), 2000);
    });
}