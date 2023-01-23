import {useState} from 'react';
import './App.css';


function Counter() {
const [count, setCount] = useState(10);
function addOne(){

setCount(count+1);
}

return<div>

<button
onClick={addOne}
>count ={count}</button>

</div>


}

function App(){
  return <div>
    <Counter/>
     <Counter/>
      <Counter/>
  </div>
}

export default App;
