import React from 'react'
import './index.css'
import LineItem from './LineItem'
const ItemList = ({items, handleCheck, handleDelete}) => {
    return (
        items.length ? 
        <ul>
            {items.map((item)=>(
                <LineItem key={item.id} item = {item}
                 handleCheck={handleCheck}
                 handleDelete={handleDelete} />
            ))}
           
        </ul> : 
        <ul>
            <p style={{margin: '10px'}}>The list is empty!</p>
        </ul>
        
    )
}

export default ItemList
