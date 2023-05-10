import React from 'react'
const Input = ({text, setText, addNewItem, handleSubmit}) => {
    return (

        <form onSubmit={(e)=> handleSubmit(e)}>
            <input type='text'
                required
                value={text}
                placeholder='Add New Item'
                onChange={(e)=> setText(e.target.value)}
                 />
            <button className='addBtn' type='submit' onClick={addNewItem}>
                +
            </button>
        </form>


    )
}

export default Input
