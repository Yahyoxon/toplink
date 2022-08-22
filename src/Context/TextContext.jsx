import { useState } from "react";
import { createContext } from "react";

const MatnContext = createContext();
const byDefault=localStorage.getItem("text")

function TextContext({children}){
  const [text,setText] =  useState(byDefault?byDefault:"");
  
  return (
    <MatnContext.Provider value={[text,setText]} >
      {children}
      </MatnContext.Provider>
  )
}

export {MatnContext,TextContext}