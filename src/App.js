import React, { useState } from 'react'
import DisplayItems from './Components/DisplayItems'
import './App.css'
import { Container } from '@material-ui/core';
import Kart from './Components/Kart';

const App = () => {

  const [items, setItems] = useState([]);

  const addToKart = (item) => {

    const a = items.findIndex(array => (array.id === item.id))
    console.log("aaa", a);
    if (a >= 0) {
      return alert("already added");
    }
    setItems([...items, item]);
    console.log("working", items)
  }

  const remove=(item)=>{
    setItems(items.filter(array=>item.id!==array.id));

  }
  const buyNow=()=>{
    setItems([]);
  }

  return (
    <Container>
      <DisplayItems addToKart={addToKart} />
      <Kart items={items} remove={remove} buyNow={buyNow} />
      
    </Container>
  )
}

export default App
