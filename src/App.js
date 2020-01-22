import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';


function App() {
  let [apodData] = useState([])
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=6blFCQncdXvLUKRwdZYiDB7hUDnzf67dy6DvF7l0').then
    (response => {
      console.log(response)
    }).catch(error => {
      console.log('ERROR', error)
    })
  },[]);
  return (
 
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
