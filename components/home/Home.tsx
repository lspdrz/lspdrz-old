/* eslint-disable react/react-in-jsx-scope */
import { NextPage } from 'next';
import CopyToClipboard from 'react-copy-to-clipboard';
import Link from 'next/link';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import Container from '../Container';
import StyledHome from './Home.css';

const Home: NextPage = () => {
  const [copyStatus, setCopyStatus] = useState('Copy');
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <Container>
      <StyledHome isOnMobile={isTabletOrMobile}>
        <h1 className="home-title" style={{ margin: 0 }}>
          Luis Pedraza
        </h1>
        <p className="home-entry">
          is a full stack engineer at{' '}
          <a
            href="https://nearpod.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nearpod
          </a>
        </p>
        <p className="home-entry">
          previously led engineering at{' '}
          <a
            href="https://datadrum.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Data Drum
          </a>
        </p>
        <p className="home-entry">
          codes every{' '}
          <a
            href="https://github.com/lspdrz"
            target="_blank"
            rel="noopener noreferrer"
          >
            day
          </a>
        </p>
        <p className="home-entry">
          loves{' '}
          <Link href="/map">
            <a target="_blank" rel="noopener noreferrer">
              traveling
            </a>
          </Link>
        </p>
        <p className="home-entry">
          can&apos;t stop listening to{' '}
          <a
            href="https://soundcloud.com/luis-1843"
            target="_blank"
            rel="noopener noreferrer"
          >
            electronic music
          </a>
        </p>
        <p className="home-entry">
          (very) occassionally takes{' '}
          <a
            href="https://www.instagram.com/lspdrz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            photos
          </a>
        </p>
        <p className="home-entry">
          isn&apos;t big on mailto: hrefs, but enjoys receiving emails:
          luis@lspdrz.com
          <CopyToClipboard
            text="luis@lspdrz.com"
            onCopy={() => setCopyStatus('Copied!')}
          >
            <button
              style={{
                marginLeft: '10px',
                fontSize: '20px',
                width: copyStatus === 'Copy' ? '62.5px' : '85px',
                height: '35px',
                borderRadius: '5px'
              }}
            >
              {copyStatus}
            </button>
          </CopyToClipboard>
        </p>
      </StyledHome>
    </Container>
  );
};

export default Home;
