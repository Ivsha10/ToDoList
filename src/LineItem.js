import React from 'react'
import './index.css'
import {FaTrashAlt} from 'react-icons/fa';
const LineItem = ({item, handleCheck, handleDelete}) => {
    return (
        <li className='item'>
            <input className='checkbox' type='checkbox'
                    checked = {(item.checked) ? true : false}
                   onChange={()=> handleCheck(item.id)}
                   />
            <label htmlFor='checkbox'
             style={(item.checked) ? {textDecoration: "line-through" } : null}>
                {item.text}
            </label>
            <FaTrashAlt role='button' onClick={()=> handleDelete(item.id)} className='btnDelete'/>
        </li>
    )
}

export default LineItem
