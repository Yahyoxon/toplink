import { useState } from "react";
import { createContext } from "react";

const AnimationContext = createContext();
const byDefault=localStorage.getItem("animation")
function AnimateContext({children}){
  const [animation,setAnimation] =  useState(byDefault ? byDefault : "");
    
  return (
    <AnimationContext.Provider value={[animation,setAnimation]} >
      {children}
      </AnimationContext.Provider>
  )
}

export {AnimationContext,AnimateContext}