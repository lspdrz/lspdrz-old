export type Location = {
  id: number;
  title: string;
  dateVisited: string;
  notes: string;
  coordinates: { [coordinate: string]: number };
};
