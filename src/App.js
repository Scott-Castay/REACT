import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName = {"John"} lastName = {"Jacob"} age = {47} hairColor = {"Red"} />
      <PersonCard firstName = {"Frank"} lastName = {"Frattle"} age = {59} hairColor = {"Black"} />
      <PersonCard firstName = {"Tommy"} lastName = {"Tuckerson"} age = {23} hairColor = {"Blonde"} />
      <PersonCard firstName = {"Joseph"} lastName = {"Mary"} age = {33} hairColor = {"Brown"} />
    </div>
  );
}

export default App;
