import React, { createContext, useState } from "react";

export const Context = createContext({});
export const ContextProvider = props => {
  const [cartItems, SetCartItems] = useState([]);
  
  const [pageNo, setPageNo] = useState(1);
  const [isLoading, setLoading] = useState(true);


  return (
    <Context.Provider
      value={{
        cartItems,
        SetCartItems,
        pageNo,
        setPageNo,
        isLoading,
        setLoading
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
