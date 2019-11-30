/* eslint-disable react/react-in-jsx-scope */
import GoogleMapReact from 'google-map-react';
import { NextPage } from 'next';
import React, { useState } from 'react';

import Container from './Container';
import Marker from './Marker';
import WorkInProgress from './WorkInProgress';
import { Location } from '../services/location.types';

const mapOptions = {
  styles: [
    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{ color: '#263c3f' }]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#6b9a76' }]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ color: '#38414e' }]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#212a37' }]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#9ca5b3' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{ color: '#746855' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#1f2835' }]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#f3d19c' }]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{ color: '#2f3948' }]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#17263c' }]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#515c6d' }]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#17263c' }]
    }
  ]
};

interface PlacesMapProps {
  plotPoints?: Array<Location>;
}

const PlacesMap: NextPage<PlacesMapProps> = props => {
  const [center, setCenter] = useState({ lat: 64.14594, lng: -21.9312 });
  const [zoom, setZoom] = useState(6);

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
        />
      ));
    return markers;
  };

  if (process.env.CURRENT_ENVIRONMENT === 'production') {
    return (
      <Container>
        <WorkInProgress />
      </Container>
    );
  } else {
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
  }
};

export default PlacesMap;
