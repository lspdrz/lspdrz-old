import { ContentfulClientApi, createClient } from 'contentful';
import { Location } from './location.types';
import moment from 'moment';

export class LocationApi {
  client: ContentfulClientApi;

  constructor() {
    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID as string,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string
    });
  }

  fetchLocationEntries = async (): Promise<Array<Location>> => {
    return await this.client
      .getEntries({
        // eslint-disable-next-line @typescript-eslint/camelcase
        content_type: 'location'
      })
      .then(entries => {
        if (entries && entries.items && entries.items.length > 0) {
          const locations = entries.items.map(entry =>
            this.convertLocation(entry)
          );
          return locations;
        }
        return [];
      })
      .catch(error => {
        console.log(error.response.data.sys);
        return [];
      });
  };

  fetchLocationById = async (id: string): Promise<Location | null> => {
    return await this.client
      .getEntry(id)
      .then(entry => {
        if (entry) {
          const location = this.convertLocation(entry) as Location;
          return location;
        }
        return null;
      })
      .catch(error => {
        console.log(error.response.data.sys);
        return null;
      });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  convertLocation = (rawData: any): Location => {
    const rawLocation = rawData.fields;
    return {
      id: rawData.sys.id,
      title: rawLocation.title,
      dateVisited: moment(rawLocation.publishedDate).format('DD MMM YYYY'),
      notes: rawLocation.notes,
      coordinates: rawLocation.coordinates
    };
  };
}

export default LocationApi;
