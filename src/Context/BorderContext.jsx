import { useState } from "react";
import { createContext } from "react";

const BorderContext = createContext();

const byDefault=localStorage.getItem("border")

function Border({children}){
  const [border,setBorder] = useState(byDefault?byDefault:"");
  
  return (
    <BorderContext.Provider value={[border,setBorder]} >
      {children}
    </BorderContext.Provider>
  )
}

export {BorderContext,Border}