import ReactDOM from 'react-dom/client';
import { ApolloProvider, InMemoryCache, ApolloClient, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import GithubFork from './components/GithubFork';
import ParticlesBg from './components/Particles';

// import { ConfigProvider } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from 'antd/es/locale/zh_CN';
console.log('ddd', import.meta.env.VITE_GITHUB_TOKEN);
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // 开发环境从根目录 .env.development.local 读取
  const token = import.meta.env.VITE_GITHUB_TOKEN || '';
  // const token = localStorage.getItem('AUTH_TOKEN');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(new HttpLink({ uri: 'https://api.github.com/graphql' })),
  cache: new InMemoryCache(),
});

import App from './App';
import GlobalStyle from './Global.style';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ParticlesBg />
    {/* <GithubFork /> */}
    <GlobalStyle />
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </>
);
