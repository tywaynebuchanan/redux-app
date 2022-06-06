import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement,reset, incrementByAmount } from './counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount,setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
      setIncrementAmount(0);
      dispatch(reset());
    }
  return (
    <section>
        <h1>Counter</h1>
        <p>Count: {count}</p>
        <input type= "text" value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)}/>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        
        <div>
          <button onClick = {()=>dispatch(incrementByAmount(addValue))}>Add Amount</button>
          <button onClick={resetAll}>RESET</button>
        </div>
    </section>
  )
}

export default Counter