import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { TokenProvider } from "./context/tokenCotextProvider";
import ScrollToTop from "./components/scrollToTop.jsx";
import { AppointmentsProvider } from "./context/AppointmentsContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <TokenProvider>
    <AppointmentsProvider>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </AppointmentsProvider>
  </TokenProvider>
);
