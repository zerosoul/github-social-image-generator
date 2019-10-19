import React, { lazy, Suspense, useState, useEffect } from 'react';
import { message } from 'antd';
import { useRepo, useLimit } from './hooks';
import { getQueryValue } from './utils';

import Loading from './components/Loading';
import GameoverModal from './components/GameoverModal';
const Dashboard = lazy(() => {
  return import('./containers/Dashboard');
});
const Header = lazy(() => {
  return import('./components/Header');
});
const Footer = lazy(() => {
  return import('./components/Footer');
});
message.config({
  duration: 2,
  maxCount: 1,
  top: 80
});

const App = () => {
  const [url, setUrl] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const { gameover, resetDate } = useLimit();

  const { total, loading, repo, error, fetchRepo } = useRepo();

  useEffect(() => {
    if (error) {
      let tmpMsg = '';
      const { graphQLErrors, networkError } = error;
      switch ((graphQLErrors.length && graphQLErrors[0].type) || networkError.statusCode) {
        case 401:
          tmpMsg = 'Github API Unauthorized!';
          break;
        case 'NOT_FOUND':
          tmpMsg = 'No result, check input URL please!';
          break;

        default:
          tmpMsg = 'Error';
          break;
      }
      setErrMsg(tmpMsg);
    }
  }, [error]);
  useEffect(() => {
    let urlVal = getQueryValue('repo');

    if (urlVal) {
      setUrl(urlVal);
    }
  }, []);

  // api error message
  useEffect(() => {
    if (errMsg) {
      message.error(errMsg, () => {
        setErrMsg(null);
      });
    }
  }, [errMsg]);

  return (
    <Suspense fallback={<Loading />}>
      <GameoverModal gameover={gameover} resetDate={resetDate} />
      <Header gameover={gameover} url={url} total={total} loading={loading} fetchRepo={fetchRepo} />
      <Dashboard loading={loading} repo={repo} />
      <Footer />
    </Suspense>
  );
};
export default App;
