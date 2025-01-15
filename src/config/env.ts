export type Environment = 'development' | 'qa' | 'production';

interface EnvironmentConfig {
  APP_ENV: Environment;
  API_URL: string;
  APP_TITLE: string;
}

function getEnvironmentVariables(): EnvironmentConfig {
  const env = import.meta.env;

  // Validate environment variables
  if (!env.VITE_APP_ENV) {
    throw new Error('VITE_APP_ENV is not defined');
  }
  if (!env.VITE_API_URL) {
    throw new Error('VITE_API_URL is not defined');
  }
  if (!env.VITE_APP_TITLE) {
    throw new Error('VITE_APP_TITLE is not defined');
  }

  return {
    APP_ENV: env.VITE_APP_ENV as Environment,
    API_URL: env.VITE_API_URL,
    APP_TITLE: env.VITE_APP_TITLE,
  };
}

// Create a singleton instance
const envConfig = getEnvironmentVariables();

// Freeze the config to prevent modifications
Object.freeze(envConfig);

export const env = envConfig;
