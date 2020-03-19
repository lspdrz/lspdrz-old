import ReactGA from 'react-ga';

export const initGA = () => {
  if (process.env.CURRENT_ENVIRONMENT === 'development') {
    console.info('initialized GA');
  } else {
    ReactGA.initialize('UA-161021424-1');
  }
};

export const logPageView = () => {
  if (process.env.CURRENT_ENVIRONMENT === 'development') {
    console.info('logged to GA');
  } else {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }
};
