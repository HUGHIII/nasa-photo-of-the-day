import React, { useState, useEffect } from "react";
import "./App.css";
import MiddleContent from './components/imgContainer/middleContent'
import axios from 'axios';


function App() {
  let [Data, setData] = useState([])
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=6blFCQncdXvLUKRwdZYiDB7hUDnzf67dy6DvF7l0').then
    (response => {
      console.log(response.data)
      setData(response.data)
      
    }).catch(error => {
      console.log('ERROR', error)
    })
  },[]);
  return (
 
    <div className="App">

     <MiddleContent apodData={Data} />

    </div>
  );
}

export default App;
