import './index.css'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';
function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) ?? [],);
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('shoppinglist', JSON.stringify(items));
  }, [items])

  const handleCheck = (id) => {

    const listItems = items.map((item) =>
    (item.id === id ? {
      ...item, checked: !item.checked
    } : item
    ))

    console.log(listItems);
    setItems(listItems);

  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id ? item : console.log(`deleted item ${item.id}`));
    setItems(listItems)
    console.log(listItems);
  }

  const addNewItem = () => {

    if (text.length > 0) {
      const id = items.length > 0 ? items[items.length - 1].id + 1 : 1;
      const newItem = { id: id, checked: false, text: text };
      const listItems = [...items, newItem];
      setItems(listItems);
      console.log(listItems);
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');

  }


  return (
    <div className="App">
      <Header title='Things To Do' />
      <Content items={items.filter(item => ((item.text).toLowerCase()).includes
        (search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        text={text}
        setText={setText}
        addNewItem={addNewItem}
        handleSubmit={handleSubmit}
        search={search}
        setSearch={setSearch}
      />
      <Footer />
    </div>
  );
}

export default App;
