import './App.css';
import { data } from './data';
import { useState } from "react";


function App() {
  const [books, setBooks] = useState(data);

  const removeBook = (id) =>{
    let newBooks = books.filter(book => book.id !== id)
    setBooks(newBooks)
  }
  return (
    <div>
      <div className='container'>
        <h1>List of {books.length} books for reading</h1>
      </div>
      {books.map((element => {
        const{id,book,image}=element;
        return(<div key = "id">
          <div className='container'>
            <h2>{id} - {book}</h2>
          </div>
          <div className='container'>
            <img src={image} width="300px" alt ="gift"/>
          </div>
          <div className='container'>
              <button onClick = {()=> removeBook(id)}>Remove</button>
          </div>
        </div>)
      }))}
      <div className='container'>
        <button onClick = {()=> setBooks([])}>delete all</button>
      </div>
    </div>
  );
}

export default App;
