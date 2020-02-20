import Header from './components/Header';
import Head from 'next/head';

const ClassicLayout = props => (
  <div>
    <Head>
      <title>Brasserie 3ienchs</title>

      <script
        src='https://kit.fontawesome.com/c454abd8c1.js'
        crossOrigin='anonymous'
      ></script>
    </Head>
    <Header />
    {props.children}
  </div>
);

export default ClassicLayout;
