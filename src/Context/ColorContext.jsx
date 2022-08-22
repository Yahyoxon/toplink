import { useState } from "react";
import { createContext } from "react";

const ColorContext = createContext();
const byDefault=localStorage.getItem("color1");

function ColorFunctionContext({children}){
  const [color1,setColor1] =  useState(byDefault?byDefault:"");
  
  return (
    <ColorContext.Provider value={[color1,setColor1]} >
      {children}
      </ColorContext.Provider>
  )
}
export {ColorContext,ColorFunctionContext};

