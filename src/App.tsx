import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Routing from './Components/Routing';



interface Category {
  name: string,
  subCategories: Array<string>
}

interface AdditionalInfo {
  title: string,
  info: string
}

interface Iproducts {
  id: number,
  name: string,
  uploadedDate: Date,
  price: number,
  description: string,
  category: Category,
  sellerName: string,
  additionalInfo: Array<AdditionalInfo>,
}

function App() {  
  return (
    <div className="App">
      <Routing/>
    </div>
  );
}

export default App;
