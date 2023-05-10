import React from 'react'
import Input from './Input'
import ItemList from './ItemList'
import SearchItem from './SearchItem'
const Content = ({items, handleCheck, handleDelete, text, setText, addNewItem, handleSubmit, search, setSearch}) => {
    return (
        <main>
            <Input text = {text} setText = {setText} addNewItem = {addNewItem} handleSubmit = {handleSubmit}/>
            <SearchItem search = {search} setSearch = {setSearch}/>
            <ItemList items = {items} handleCheck={handleCheck} handleDelete = {handleDelete}/>
        </main>
    )
}

export default Content
