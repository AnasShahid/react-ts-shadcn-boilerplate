import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { useEnv } from './hooks/use-env';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  const env = useEnv();

  useEffect(() => {
    console.log('Current Environment:', env.APP_ENV);
    console.log('API URL:', env.API_URL);
    console.log('App Title:', env.APP_TITLE);
  }, [env]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
