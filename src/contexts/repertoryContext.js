import { createContext, useState } from "react";

export const RepertoryContext = createContext(null);

export function RepertoryProvider({ children }) {
  const [repertories, setRepertories] = useState([]);
  const [postNewRepertory, setPostNewRepertory] = useState(false);
  const [music, setMusic] = useState({});

  return (
    <RepertoryContext.Provider
      value={{
        repertories,
        setRepertories,
        postNewRepertory,
        setPostNewRepertory,
        music,
        setMusic,
      }}
    >
      {children}
    </RepertoryContext.Provider>
  );
}
