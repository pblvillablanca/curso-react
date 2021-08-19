import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import listaProductos from '../../Utils/Productos';

const ItemListContainer = ()=>{

    const [productos, setProductos] = useState();

    const obtenerProductos = ()=>{
        return new Promise((resolve,reject)=>{
            resolve(listaProductos)
        })
    }

    useEffect(()=>{
        setTimeout(()=>{
            obtenerProductos().then((prods)=>{
                setProductos(prods);
            })
        },2)
    },[])

    return (
            <>
                <section className="center">
                     <h5>Nuestros productos recomendados</h5>
                </section>
            <ItemList lista={productos} />
            </>
        )
}

export default ItemListContainer;
