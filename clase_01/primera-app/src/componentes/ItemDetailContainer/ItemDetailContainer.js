import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';
import productos from './../../Utils/Productos';

const ItemDetailContainer  = ()=>{
    
    const {id} = useParams();
    
    const [producto,setProducto] = useState({});

    const buscarProdcuto  = ()=>{
        return new Promise((resolve,reject)=>{

            setTimeout(()=>{
                setProducto(productos.find((p)=>p.id == id));
            },1)

        })
    }

    useEffect(()=>{
        buscarProdcuto();
    },[]);

    return <ItemDetail producto={producto}/>
}

export default ItemDetailContainer;