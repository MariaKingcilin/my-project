import React, { useReducer } from 'react'
import { initialState, setReducer } from './Context/Reducer'
import { stateContext } from './Context/StateContext'
import Router from './Router';

function Routring() {
    const [state,dispatch] = useReducer(setReducer,initialState);

  return (
    <div>
        <stateContext.Provider value={{state,dispatch}}>
            <Router />
        </stateContext.Provider>
    </div>
  )
}

export default Routring