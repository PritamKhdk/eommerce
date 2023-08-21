import { CartProvider } from "./context/cartContext";
import { AppProvider } from "./context/productContext";
import Index from "./router";

export default function App() {
  return (
    <>
    <AppProvider>
      <CartProvider>
       <Index/>
      </CartProvider>
    </AppProvider>
    </>
  )
}