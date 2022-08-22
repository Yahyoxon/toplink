import { useState } from "react";
import { createContext } from "react";

const ButtonTextContext = createContext();
const byDefault=localStorage.getItem("buttonTextColor");

function ButtonTextFunctionContext({children}){
  const [buttonTextColor,setButtonTextColor] =  useState(byDefault?byDefault:"");
  
  return (
    <ButtonTextContext.Provider value={[buttonTextColor,setButtonTextColor]} >
      {children}
      </ButtonTextContext.Provider>
  )
}
export {ButtonTextContext,ButtonTextFunctionContext};

 
 
