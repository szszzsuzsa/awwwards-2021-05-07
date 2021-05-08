import './App.css';
import { useState } from "react";
import Loading from './Components/Loading';
import Feathers from './Components/Feathers'
import ChatLoader from './Components/ChatLoader';


function App() {

const [main, setMain]= useState(null);

const loadingHandler = () => {
    setTimeout(() => {
      setMain("")
    }, 4000);
}
loadingHandler()

  return (
    <div className="App">
      <div>
     {main === null ? <Loading /> : <div><Feathers/><ChatLoader/></div>}
     
      </div>
     
    </div>
  );
}

export default App;
