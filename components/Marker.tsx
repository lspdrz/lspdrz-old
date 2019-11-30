import React, { FunctionComponent } from 'react';

interface MarkerProps {
  lat: number;
  lng: number;
  title: string;
}

const Marker: FunctionComponent<MarkerProps> = (props: MarkerProps) => {
  return <button>{props.title}</button>;
};

export default Marker;
