/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import React, { FunctionComponent, ReactNode } from 'react';
import PropTypes from 'prop-types';

const Container: FunctionComponent = props => {
  return (
    <div>
      <Head>
        <title>lspdrz</title>
        <link
          href="https://fonts.googleapis.com/css?family=Hind&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>
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
      {props.children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node
};

export default Container;
