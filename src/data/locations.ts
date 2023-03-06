export interface ICity {
  text: string;
  value: string;
  center: {
    lat: number;
    lng: number;
  };
  radius: number;
}

export const cities: ICity[] = [
  {
    text: 'בוקרשט',
    value: 'bucharest',
    center: { lat: 44.434572, lng: 26.104076 },
    radius: 0.17,
  },
  {
    text: "קלו'ז",
    value: 'cluj napoca',
    center: { lat: 46.771638, lng: 23.610537 },
    radius: 0.14,
  },
  { text: 'ברשוב', value: 'brasov', center: { lat: 45.652309, lng: 25.610275 }, radius: 0.18 },
  { text: 'יאשי', value: 'yasi', center: { lat: 47.161542, lng: 27.583722 }, radius: 0.13 },
  {
    text: 'טימישוארה',
    value: 'timisoara',
    center: { lat: 45.753836, lng: 21.225747 },
    radius: 0.14,
  },
];
