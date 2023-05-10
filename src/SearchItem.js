const SearchItem = ({search, setSearch}) => {
    return (
        <div className="searchInput">
            <input 
                   typeof="text"
                   placeholder="Search List"
                   value={search}
                   onChange={(e)=> {
                   setSearch(e.target.value)
                   }}
                   />
        </div>
            
    )
}

export default SearchItem
