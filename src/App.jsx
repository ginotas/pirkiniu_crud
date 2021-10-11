
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Items from './Items';


function App() {

  const [items, setItems] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  useEffect(() => {
    axios.get('http://localhost:3003/items')
      .then((response) => {
        setItems(response.data);
      })
  }, [lastUpdate]);


  return (
    <div className="App">
     <Items items={items} ></Items>
    </div>
  );
}

export default App;
