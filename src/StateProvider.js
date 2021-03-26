import React, { createContext, useContext, useReducer } from "react"; 

export const StateContext = createContext(); 

export const StateProvider = ({ reducer, initiaState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initiaState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);