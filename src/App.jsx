import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeRange, decrement, increment, reset } from './redux/counterSlice';
import { useState } from 'react';

function App() {

  const [range, setRange] = useState('')
  const count = useSelector((state)=>state.counter.value)
  console.log(count);
  console.log(range);
  
  const dispatch = useDispatch() //call action
  return (
    <>
      <div style={{ height: '100vh', width: '100%', display:'flex', justifyContent:'center', alignItems:'center'}} >
        <div className='border border-2 rounded p-5' style={{backgroundColor:'white'}}>
          <h1 style={{color:'black', fontSize:'45px'}}>COUNTER APPLICATION</h1>
          <h1 className='text-center my-5'style={{color:'black'}}>{count}</h1>
          <div className='d-flex justify-content-evenly'> 
            <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>Decrement</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger'>Clear</button>
            <button className='btn btn-success' onClick={()=>dispatch(increment())}>Increment</button>
          </div>
          <div className='d-flex mt-3'>
            <input type="text"  placeholder='Range' onChange={(e)=>setRange(e.target.value)} className='form-control border border-1'/>
            <button className='btn btn-primary mx-2' onClick={()=>dispatch(changeRange(Number(range)))}>Click</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
