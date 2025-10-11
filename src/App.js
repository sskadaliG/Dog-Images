import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import appStore from './utils/appStore';
import { Provider } from 'react-redux';

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Header />
    }
  ]);

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}> </RouterProvider>
    </Provider>
  );
};

export default App;
