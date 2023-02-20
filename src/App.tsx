import './app.scss';
import Forms from './components/forms';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Map from './components/map';

const router = createBrowserRouter([
  { path: '/', element: <Forms /> },
  { path: '/map/:id', element: <Map /> },
]);

const App = () => {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
