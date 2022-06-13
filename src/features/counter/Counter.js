import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement,reset, incrementByAmount } from './counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount,setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;

    const amount = () =>{
      dispatch(incrementByAmount(addValue))
    }

    const setAmount = (e) =>{
      setIncrementAmount(e.target.value)
    }
    const increaseAmount = () =>{
      dispatch(increment())
    }
    const decreaseAmount = () =>{
      dispatch(decrement())
    }
    const resetAll = () => {
      setIncrementAmount(0);
      dispatch(reset());
    }
  return (
    <section>
        <h1>Counter</h1>
        <p>Count: {count}</p>
        <input type= "text" 
        value={incrementAmount} 
        onChange={setAmount}
        />
        <button onClick={increaseAmount}>+</button>
        <button onClick={decreaseAmount}>-</button>
        
        <div>
          <button onClick = {amount}>Add Amount</button>
          <button onClick={resetAll}>RESET</button>
        </div>
    </section>
  )
}

export default Counter