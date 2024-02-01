import MainLayout from '@common/components/layouts/MainLayout';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import createEmotionCache from '@helpers/createEmotionCache';
import { CssBaseline, Modal } from '@mui/material';
import Head from 'next/head';
import setGlobalStyles from 'src/styles/setGlobalStyles';
import Theme from 'src/styles/theme';
import PropTypes from 'prop-types';
import { wrapper } from '@store/index';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

export function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <ThemeProvider theme={Theme}>
        {setGlobalStyles(Theme)}
        <CssBaseline />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.instanceOf(Object),
  pageProps: PropTypes.instanceOf(Object).isRequired,
};

export default wrapper.withRedux(MyApp);