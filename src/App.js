import React from 'react';
import logo from './logo.svg';
import './App.css';
import Blog from './Blog';
import { Footer } from './Blog';
import ContainedButtons from './ContainedButtons';
import LabelBottomNavigation from './BotonNav';
import MediaCard from './Cards';


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <LabelBottomNavigation/>
      <h2>El Blog de Las Flores</h2>
      </header>
      <ContainedButtons className="buttons"/>
     <MediaCard className="card"/>
      <Footer/>
    </div>
  );
}

export default App;

