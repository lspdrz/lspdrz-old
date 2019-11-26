/* eslint-disable react/react-in-jsx-scope */
import { NextPage } from 'next';
import Head from 'next/head';
import Home from '../components/Home';

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>lspdrz</title>
        <link
          href="https://fonts.googleapis.com/css?family=Hind&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Home />
      <style jsx global>{`
        h1 {
          font-size: 9em;
        }
        p {
          font-size: 2em;
          margin: 0;
        }
        body {
          background: #000;
          color: #fff;
          font-family: 'Hind', sans-serif;
        }
        a {
          text-decoration: underline;
          color: white;
        }
        a:visited {
          color: white;
        }
        a:hover {
          color: white;
        }
        a:focus {
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Index;
