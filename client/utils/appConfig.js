const appConfig = {
  production: 'dunno yet',
  development: 'http://localhost:4000/api',
};

export const BASE_URL = appConfig[process.env.ENV];
