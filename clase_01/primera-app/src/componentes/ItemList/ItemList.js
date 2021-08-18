import React from 'react'
import {Item} from './Item'

const ItemList = ({lista}) =>{
    return(
        <div>
            {
                lista ? 
                <>
                    {
                        lista.map((prod)=>(
                            <Item key={prod.id} producto={prod}/>
                        ))
                    }
                </>
                : 
                <h3>No hay lista de productos</h3>
            }
        </div>
    )
}

export default ItemList