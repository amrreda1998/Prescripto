import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { TokenProvider } from "./context/tokenCotextProvider";
import ScrollToTop from './components/scrollToTop';

createRoot(document.getElementById("root")).render(
  <TokenProvider>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </TokenProvider>
);
