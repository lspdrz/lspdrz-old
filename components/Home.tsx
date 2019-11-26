/* eslint-disable react/react-in-jsx-scope */
import { NextPage } from 'next';
import CopyToClipboard from 'react-copy-to-clipboard';
import Link from 'next/link';
import { useState } from 'react';

const Home: NextPage = () => {
  const [copyStatus, setCopyStatus] = useState('Copy');

  return (
    <div>
      <h1 style={{ margin: 0 }}>Luis Pedraza</h1>
      <p>
        is a full stack engineer at{' '}
        <a href="https://nearpod.com" target="_blank" rel="noopener noreferrer">
          Nearpod
        </a>
      </p>
      <p>
        previously led engineering at{' '}
        <a
          href="https://datadrum.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Data Drum
        </a>
      </p>
      <p>
        codes around the{' '}
        <a
          href="https://github.com/lspdrz"
          target="_blank"
          rel="noopener noreferrer"
        >
          clock
        </a>
      </p>
      <p>
        loves{' '}
        <Link href="/map">
          <a target="_blank" rel="noopener noreferrer">
            traveling
          </a>
        </Link>
      </p>
      <p>
        can&apos;t stop listening to{' '}
        <a
          href="https://soundcloud.com/luis-1843"
          target="_blank"
          rel="noopener noreferrer"
        >
          electronic music
        </a>
      </p>
      <p>
        (very) occassionally takes{' '}
        <a
          href="https://www.instagram.com/lspdrz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          photos
        </a>
      </p>
      <p>
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
    </div>
  );
};

export default Home;
