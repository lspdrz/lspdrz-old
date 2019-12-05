/* eslint-disable react/react-in-jsx-scope */
import GoogleMapReact from 'google-map-react';
import { NextPage } from 'next';
import React, { useState } from 'react';

import Container from '../Container';
import Marker from './Marker';
import mapOptions from './MapOptions';
import { Location } from '../../services/location.types';

interface PlacesMapProps {
  plotPoints?: Array<Location>;
}

const PlacesMap: NextPage<PlacesMapProps> = (props: PlacesMapProps) => {
  const [center, setCenter] = useState({ lat: 64.14594, lng: -21.9312 });
  const [zoom, setZoom] = useState(0);

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

  return (
    <Container>
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.GOOGLE_MAPS_API_KEY}` }}
          defaultCenter={center}
          center={center}
          defaultZoom={zoom}
          options={mapOptions}
        >
          {getMarkers()}
        </GoogleMapReact>
      </div>
    </Container>
  );
};

export default PlacesMap;
