import React, { useState, useEffect } from "react";
import "./App.css";
import MiddleContent from './components/imgContainer/middleContent'
import axios from 'axios';
import TitleHeader from './components/headerContainer/titleHeader';
import Footer from './components/footer/footerInfo';
import styled from 'styled-components';


const AppDiv = styled.div `
background:grey;

`




function App() {
  const [Data, setData] = useState([])
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=6blFCQncdXvLUKRwdZYiDB7hUDnzf67dy6DvF7l0')
    .then(response => {console.log(response.data)
setData(response.data)
      
    }).catch(error => {
      console.log('ERROR', error)
    })
  },[]);
  return (
 
    <AppDiv className="App">

      <TitleHeader apodData={Data} />
     <MiddleContent apodData={Data} />
     <Footer apodData={Data} />

    </AppDiv>
  );
}

export default App;
