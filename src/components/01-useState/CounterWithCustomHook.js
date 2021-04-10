import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import "./counter.css"


export const CounterWithCustomHook = () => {

    const {state,increment,decrement,reset} = useCounter( 100 )


    return (
        <>
              <h1>Counter with Hook : { state }</h1>
              <hr />

              <button onClick={ () =>  decrement() } className="btn btn-danger"> -1 </button>
              <button onClick={ reset } className="btn btn-secondary"> Reset </button>
              <button onClick={ () =>  increment() } className="btn btn-primary"> +1 </button>
        </>
              
    )
}
