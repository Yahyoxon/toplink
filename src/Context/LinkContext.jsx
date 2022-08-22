import { useState } from "react";
import { createContext } from "react";

const LinkContext = createContext();

const byDefault = localStorage.getItem("link");

function LinkFunctionContext({ children }) {
  const [links, setLinks] = useState(byDefault ? byDefault : "");

  return (
    <LinkContext.Provider value={[links, setLinks]}>
      {children}
    </LinkContext.Provider>
  );
}

export { LinkContext, LinkFunctionContext };
