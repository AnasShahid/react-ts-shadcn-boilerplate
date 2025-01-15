import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { useEnv } from './hooks/use-env';
import { useEffect } from 'react';

function App() {
  const env = useEnv();

  useEffect(() => {
    console.log('Current Environment:', env.APP_ENV);
    console.log('API URL:', env.API_URL);
    console.log('App Title:', env.APP_TITLE);
  }, [env]);

  return <RouterProvider router={router} />;
}

export default App;
