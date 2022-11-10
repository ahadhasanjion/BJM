import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
          <Toaster></Toaster>
            <RouterProvider router={routes}>

            </RouterProvider>
    </div>
  );
}

export default App;
