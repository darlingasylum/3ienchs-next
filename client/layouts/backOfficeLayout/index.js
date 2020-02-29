import Header from './components/Header';
import Head from 'next/head';

const BackOfficeLayout = props => (
  <div>
    <Head>
      <title>Backoffice 3ienchs</title>

      <script
        src='https://kit.fontawesome.com/c454abd8c1.js'
        crossOrigin='anonymous'
      ></script>
    </Head>
    <Header />
    {props.children}
  </div>
);

export default BackOfficeLayout;
