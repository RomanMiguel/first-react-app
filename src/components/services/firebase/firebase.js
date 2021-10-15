import * as firebase from "firebase/app"
import {getFirestore} from "firebase/firestore"
import { collection, 
    getDocs, 
    query, 
    where,
    doc, 
    getDoc, 
    writeBatch, 
    addDoc, 
    Timestamp} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAkSunaLOZumZkrEnQo9BZ8AGlLK9lladE",
    authDomain: "mi-proyecto-react-3b8d5.firebaseapp.com",
    projectId: "mi-proyecto-react-3b8d5",
    storageBucket: "mi-proyecto-react-3b8d5.appspot.com",
    messagingSenderId: "824859107377",
    appId: "1:824859107377:web:8be69f7bb271bbe8f7b510"
    // apiKey: process.env.REACT_APP_apiKey ,
    // authDomain: process.env.REACT_APP_authDomain ,
    // projectId: process.env.REACT_APP_projectId ,
    // storageBucket: process.env.REACT_APP_storageBucket ,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId ,
    // appId: process.env.REACT_APP_appId
}

const app= firebase.initializeApp(firebaseConfig)

export const getFirebase=()=>{return app}

export const db= getFirestore(app)

export const categorias=()=>{
    return new Promise((resolve, reject)=>{
        getDocs(collection(db,'categorias')).then((QuerySnapshot)=>{
            const cat= QuerySnapshot.docs.map(doc=>{
              return{id:doc.id, ... doc.data()}
            })
            resolve(cat)
        }).catch((error)=>{reject('error obteniendo categorias:', error)})
    })
}

export const getArticles= (category, op, value)=>{
    return new Promise((resolve, reject)=>{
        const collectionQuery= category&&op&&value? query(collection(db,"articulos"),where(category, op, value)): collection(db,"articulos")
        getDocs(collectionQuery).then((QuerySnapshot)=>{
            const articulos= QuerySnapshot.docs.map(doc=>{
                return{id: doc.id, ...doc.data()}
            })
            resolve(articulos)
        }).catch((error)=>{reject("error obteniendo articulos")})
    })
}

export const articlebyId= (id)=>{
    return new Promise((resolve, reject)=>{
        getDoc(doc(db, "articulos", id)).then((QuerySnapshot)=>{
            const prod= {id: QuerySnapshot.id, ... QuerySnapshot.data()}
            resolve(prod)
        }).catch((error)=>{
            reject("error obteniendo el articulo: "+ error)
        })
    })
}

export const sendOrder=(obj)=>{
    return new Promise((resolve, reject)=>{
        obj={...obj, date: Timestamp.fromDate(new Date())}
        const batch= writeBatch(db)
        const sinStock = []
        
        obj.items.forEach((element, i) => {
            getDoc(doc(db,'articulos',element.id)).then(DocumentSnapshot=>{
                if(DocumentSnapshot.data().stock>= obj.items[i].quantity){
                    batch.update(doc(db, 'articulos', DocumentSnapshot.id), {
                        stock: DocumentSnapshot.data().stock - obj.items[i].quantity
                    })
                }else{
                    sinStock.push({... DocumentSnapshot.data(), id: DocumentSnapshot.id})
                }
            })
        })

        if(sinStock.length === 0) {
            addDoc(collection(db, 'ordenes'), obj).then(() => {
                batch.commit().then(() => {
                    resolve('La orden se ejecuto con exito')
                })
            }).catch((error) => {
                reject('Error al ejecutar la orden'+ error)
            })
        }
    })

}