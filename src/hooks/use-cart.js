import { useContext } from "react";
import { CartContext } from "../context/cart-context";

export const useCart = () => { 
  const context = useContext(CartContext);

  return context;
}