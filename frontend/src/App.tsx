import { Routes } from './routes';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle} from './styles/global';
import  Modal  from 'react-modal';
import { AppProvider } from './hooks';

function App() {

  Modal.setAppElement('#root');

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
