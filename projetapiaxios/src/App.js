import './App.css';
import {useState,useEffect} from 'react';
import axios from "axios"


function App() {
  const [data,setData]=useState([]);

  useEffect(() => { 
  axios.get("https://jsonplaceholder.typicode.com/users").then((res)=> {
    setData(res.data);
  
  });
},[]);
  
  return (
    <>
    <h1 style={{color:"white",fontWeight:"100"}}>Doctors List</h1>
    <div className="App">
      {data.map((e)=> <div> Dr. {e.name} </div>)}
    </div>
    </>
    )
}

export default App;
