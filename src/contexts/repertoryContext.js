import { createContext, useState } from "react";

export const RepertoryContext = createContext(null);

export function RepertoryProvider({ children }) {
  const [repertories, setRepertories] = useState([]);

  return (
    <RepertoryContext.Provider value={{ repertories, setRepertories }}>
      {children}
    </RepertoryContext.Provider>
  );
}
