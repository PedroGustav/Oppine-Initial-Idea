import React from 'react';
import { Routes } from './routes';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle} from './styles/global';
import { AppProvider } from './hooks';
function App() {
  return (
    <>
      <GlobalStyle/>
        <AppProvider>
          <BrowserRouter>
            <Routes/>
          </BrowserRouter>
        </AppProvider>
      
    </>
  );
}

export default App;
