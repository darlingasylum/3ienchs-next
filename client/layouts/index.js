import Header from './components/Header';
import Head from 'next/head';

const Layout = props => (
  <div>
    <Head>
      <title>Brasserie 3ienchs</title>
      <link rel='shortcut icon' href='./../static/logos/3ienchs_favicon.gif' />
      <script
        src='https://kit.fontawesome.com/c454abd8c1.js'
        crossorigin='anonymous'
      ></script>
    </Head>
    <Header />
    {props.children}
  </div>
);

export default Layout;
