import axios from 'axios'
import './App.css';
import React, { useState } from 'react'
import Card from './component/Card';

function App() {
  const [data, setData] = useState({id: 0, advice: "go a head"});

  const getData = async ()=> {
    const res = await axios.get("https://api.adviceslip.com/advice");
    setData(res.data.slip);
  };


  return (
    <div>
      <Card data={data} getData={getData}/>
    </div>
  );
}

export default App;
