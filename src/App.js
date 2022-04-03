import './App.css';
import Main from './components/Main';
import Data from './components/data';
import { useState } from 'react';

function App() {
  const [list, setList] = useState(Data)

  

  return (
    <div className="App">
<Main list ={list} setList={setList}/>
    </div>
  );
}

export default App;
