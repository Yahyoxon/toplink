import { useState } from "react";
import { createContext } from "react";

const FontContext = createContext();

const byDefault=localStorage.getItem("font")

function FontFunctionContext({children}){
  const [font,setFont] = useState(byDefault?byDefault:"");
  
  return (
    <FontContext.Provider value={[font,setFont]} >
      {children}
    </FontContext.Provider>
  )
}

export {FontContext,FontFunctionContext}