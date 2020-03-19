/* eslint-disable react/react-in-jsx-scope */
import GoogleMapReact from 'google-map-react';
import { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import { Flex, Text, Box, Link } from 'rebass';
import { useMediaQuery } from 'react-responsive';

import Container from '../Container';
import Marker from './Marker';
import { locales, mapOptions } from './constants';
import { Location } from '../../services/location.types';
import { initGA, logPageView } from '../../tools/googleAnalytics';

interface PlacesMapProps {
  plotPoints?: Array<Location>;
}

const PlacesMap: NextPage<PlacesMapProps> = (props: PlacesMapProps) => {
  const [center, setCenter] = useState({ lat: 40.7831, lng: -73.9712 }); // uses Manhattan as default
  const [zoom, setZoom] = useState(0); // zoomed all the way out on default
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  useEffect(() => {
    if (!(window as any).GA_INITIALIZED) {
      initGA();
      (window as any).GA_INITIALIZED = true;
      logPageView();
    }
  }, []);

  const getMarkers = () => {
    const { plotPoints } = props;
    const markers =
      plotPoints &&
      plotPoints.map(point => (
        <Marker
          key={point.id}
          lat={point.coordinates.lat}
          lng={point.coordinates.lon}
          title={point.title}
          notes={point.notes}
        />
      ));
    return markers;
  };

  const getLocales = () => {
    const entries = Object.entries(locales);
    return !isTabletOrMobile ? (
      entries.map(locale => (
        <Text
          key={locale[0]}
          onClick={() => {
            setCenter(locale[1]);
            setZoom(13);
          }}
          sx={{
            ':hover': {
              cursor: 'pointer'
            }
          }}
          p={2}
          fontWeight="bold"
        >
          {locale[0]}
        </Text>
      ))
    ) : (
      <select
        name="select"
        style={{ backgroundColor: 'white', color: 'black' }}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          setCenter(locales[e.target.value]);
          setZoom(12);
        }}
      >
        {entries.map(locale => (
          <option key={locale[0]} value={locale[0]}>
            {locale[0]}
          </option>
        ))}
      </select>
    );
  };

  return (
    <Container>
      <div style={{ height: '100vh', width: '100%' }}>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <Flex px={2} color="white" bg="black" alignItems="center">
          <Link variant="nav" href="/">
            lspdrz
          </Link>
          <Box mx="auto" />
          {getLocales()}
        </Flex>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.GOOGLE_MAPS_API_KEY}` }}
          defaultCenter={center}
          center={center}
          defaultZoom={zoom}
          zoom={zoom}
          options={mapOptions}
        >
          {getMarkers()}
        </GoogleMapReact>
      </div>
    </Container>
  );
};

export default PlacesMap;
