import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

  // Fetch books from the server
  const fetchBooks = async () => {
    try {
      setError('');
      const response = await axios.get(`/api/books?q=${encodeURIComponent(query)}`);
      console.log(response.data); 
      console.log('oi')
      setBooks(response.data);
    } catch (err) {
      setError('ocorreu um erro na sua busca.');
    }
  };

  // Handle search input
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  // Submit search
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBooks();
  };


  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Biblioteca</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Procure um livro no nosso banco de dados..."
          value={query}
          onChange={handleSearch}
          style={{ width: '300px', padding: '10px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>
          Pesquisar
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div style={{ marginTop: '20px' }}>
        <h2>Resultados:</h2>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              {/* Avoid XSS by using dangerouslySetInnerHTML carefully */}
              <span>{book.title}</span>
              <br />
              <small>Autor: {book.author}</small>
              <img 
                src={book.imageUrl} 
                alt={book.title} 
                style={{ width: '150px', height: '200px', objectFit: 'cover' }} 
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
