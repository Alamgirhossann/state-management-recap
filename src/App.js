import React, {createContext, useState} from "react";
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Shipment from './components/Shipment/Shipment';

export const CategoryContext = createContext(); 
 
function App() {
  const [pategory, setPategory] = useState('Laptop')
  return (
  
  <CategoryContext.Provider value={[pategory, setPategory]}>
    <p>count: {pategory} </p>
    <Header></Header>
    <Home></Home>
    <Shipment></Shipment>
  </CategoryContext.Provider>
  );
}

export default App;
