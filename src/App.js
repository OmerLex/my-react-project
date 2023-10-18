import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';



function App() {
  const [data, setData] = useState("React is fun!!!");

  function handleClick(){
    setData("This is another value!!!");
  }
  
  
  return (
    <div className="App">      
      {data}
      <button onClick={handleClick}>Click Me</button>

      <Counter />
      <h1>My Site is Ready</h1>
      <h2>This is new update</h2>
      
      
      
    </div>
  );
}

export default App;
