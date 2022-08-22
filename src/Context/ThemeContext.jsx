import { useState } from "react";
import { createContext } from "react";

const Context = createContext();
const byDefault=localStorage.getItem("theme")
function Themes({children}){
  const [theme,setTheme] =  useState(byDefault?byDefault:"");
  
  return (
    <Context.Provider value={[theme,setTheme]} >
      {children}
      </Context.Provider>
  )
}

export {Context,Themes}