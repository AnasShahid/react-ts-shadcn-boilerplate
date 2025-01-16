import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { useEnv } from './hooks/use-env';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { ConfigProvider, theme } from 'antd';
import { ThemeProvider } from './providers/theme-provider';
import { useTheme } from './hooks/use-theme';

function AppContent() {
  const { theme: currentTheme } = useTheme();
  const isDark = currentTheme === 'dark';

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: '#1677ff',
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

function App() {
  const env = useEnv();

  useEffect(() => {
    console.log('Current Environment:', env.APP_ENV);
    console.log('API URL:', env.API_URL);
    console.log('App Title:', env.APP_TITLE);
  }, [env]);

  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="light" storageKey="app-theme">
        <AppContent />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
