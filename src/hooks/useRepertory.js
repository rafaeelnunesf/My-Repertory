import { useContext } from "react";
import { RepertoryContext } from "../contexts/repertoryContext";

export default function useRepertory() {
  const repertoryContext = useContext(RepertoryContext);
  if (!repertoryContext) {
    throw new Error(
      "usRepertory must be used inside a RepertoryContext Provider"
    );
  }

  return repertoryContext;
}
