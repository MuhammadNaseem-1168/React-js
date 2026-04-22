import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ClerkProvider } from "@clerk/react";
import { DataProvider } from "./Context/DataContext";
import { CartContext, CartProvider } from "./Context/CartContext";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("missing publishable key");
}

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <DataProvider>
        <CartProvider>
          <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
            <App />
          </ClerkProvider>
        </CartProvider>
      </DataProvider>
    </StrictMode>,
  );
} else {
  console.error("Root element not found");
}
