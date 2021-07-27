import React , { createContext , useContext , useReducer } from "react";

// this is the data layer
export const StateContext = createContext();

// build a provider
export const StateProvider = ( { reducer , initalState , children } ) => (
    <StateContext.Provider value={useReducer(reducer , initalState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext)