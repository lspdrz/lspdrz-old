/* eslint-disable react/react-in-jsx-scope */
import { NextPage } from 'next';
import PlacesMap from '../components/PlacesMap';

import LocationApi from '../services/location';
import { Location } from '../services/location.types';

interface MapProps {
  entries: Array<Location>;
}

const Map: NextPage<MapProps> = (props: MapProps) => {
  return <PlacesMap plotPoints={props.entries} />;
};

Map.getInitialProps = async () => {
  const api = new LocationApi();
  const entries = await api.fetchLocationEntries();
  return { entries };
};

export default Map;
