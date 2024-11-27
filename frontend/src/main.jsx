import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { TokenProvider } from './context/tokenCotextProvider.jsx';
import ScrollToTop from './components/scrollToTop.jsx';
import { AppointmentsProvider } from './context/AppointmentsContextProvider.jsx';
import { UserProvider } from './context/userContextProvider.jsx';
import { DoctorsProvider } from './context/doctorsContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <TokenProvider>
    <UserProvider>
      <DoctorsProvider>
        <AppointmentsProvider>
          <BrowserRouter>
            <ScrollToTop />
            <App />
          </BrowserRouter>
        </AppointmentsProvider>
      </DoctorsProvider>
    </UserProvider>
  </TokenProvider>
);
