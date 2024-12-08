const express = require('express');
const app = express();
const PORT = 3001;

const cors = require('cors');
app.use(cors());

// Mock database
const books = [
    { 
      id: 1, 
      title: 'Clean Code', 
      author: 'Robert C. Martin',
      imageUrl: 'https://m.media-amazon.com/images/I/41zV67O9UtL._SY346_.jpg' 
    },
    { 
      id: 2, 
      title: 'The Pragmatic Programmer', 
      author: 'Andrew Hunt',
      imageUrl: 'https://m.media-amazon.com/images/I/41vh2QZIl0L._SY346_.jpg' 
    },
    { 
      id: 3, 
      title: 'You Don’t Know JS', 
      author: 'Kyle Simpson',
      imageUrl: 'https://m.media-amazon.com/images/I/41t8sY4kA2L._SX396_BO1,204,203,200_.jpg' 
    },
    { 
      id: 4, 
      title: 'Dom Casmurro', 
      author: 'Machado de Assis',
      imageUrl: 'https://images-americanas.b2w.io/produtos/4752623382/imagens/dom-casmurro-colecao-a-obra-prima-de-cada-autor/4752623382_1_large.jpg' 
    },
    { 
      id: 5, 
      title: 'Grande Sertão: Veredas', 
      author: 'Guimarães Rosa',
      imageUrl: 'https://m.media-amazon.com/images/I/51onGmY3xlL._SX312_BO1,204,203,200_.jpg' 
    },
    { 
      id: 6, 
      title: 'O Alquimista', 
      author: 'Paulo Coelho',
      imageUrl: 'https://m.media-amazon.com/images/I/51Zm0oZ9bHL._SX336_BO1,204,203,200_.jpg' 
    },
    { 
      id: 7, 
      title: 'Vidas Secas', 
      author: 'Graciliano Ramos',
      imageUrl: 'https://m.media-amazon.com/images/I/51eV0+04TTL._SY346_.jpg' 
    },
    { 
      id: 8, 
      title: 'Capitães da Areia', 
      author: 'Jorge Amado',
      imageUrl: 'https://m.media-amazon.com/images/I/51EIt9qxF3L._SY346_.jpg' 
    },
    { 
      id: 9, 
      title: 'A Hora da Estrela', 
      author: 'Clarice Lispector',
      imageUrl: 'https://m.media-amazon.com/images/I/61TaHURu27L._AC_UF1000,1000_QL80_.jpg' 
    },
    { 
      id: 10, 
      title: 'O Cortiço', 
      author: 'Aluísio Azevedo',
      imageUrl: 'https://m.media-amazon.com/images/I/71vC7+LhB6S._AC_UF1000,1000_QL80_.jpg' 
    },
  ];
  

// API route to fetch books
app.get('/api/books', (req, res) => {
    const query = req.query.q || '';
    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    res.json(filteredBooks);
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
