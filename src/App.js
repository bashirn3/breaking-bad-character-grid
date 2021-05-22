import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/ui/Header.js'
import CharacterGrid from './components/characters/CharacterGrid.js'
import Search from './components/ui/Search.js';


const App = () => {
  const [items, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');



  useEffect(() => {
    const fetchItems = async () => {
      const results = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`);

      setItem(results.data);

      setLoading(false);

    }

    fetchItems();

  }, [query]);


  return (
    <div>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid items={items} loading={loading} />
    </div>
  );
}

export default App;
