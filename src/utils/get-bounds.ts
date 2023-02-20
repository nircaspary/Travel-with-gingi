import { ICity } from '../data/locations';

export interface IBounds {
  north: number;
  south: number;
  east: number;
  west: number;
}
export const getBounds = (city: ICity) => {
  const { center, radius } = city;
  return {
    north: center.lat + radius,
    south: center.lat - radius,
    east: center.lng + radius,
    west: center.lng - radius,
  };
};
