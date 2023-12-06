import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import routes from './router';

function App() {
  return (
    <RouterProvider router={createBrowserRouter(routes)} />
  );
}

export default App;
