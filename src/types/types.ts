export interface Trip {
  startingPosition: StartingPosition;
  _id: string;
  tripLink: string;
  city: City;
  routes: Route[];
  createdAt: Date;
  __v: number;
  id: string;
}

export interface City {
  center: StartingPosition;
  radius: number;
  name_he: string;
  name_en: string;
  _id: string;
}

export interface StartingPosition {
  lat: number;
  lng: number;
}

export interface Route {
  places: Place[];
  dayName: string;
  date: string;
  _id: string;
}

export interface Place {
  name_ro?: string;
  name_en?: string;
  name_he?: string;
  address?: string;
  category?: string;
  operation_hours?: string;
  close_days?: string;
  maps_link?: string;
  summary_he?: string;
  description_he?: string;
  coordinates?: Coordinates;
  modified: boolean;
  createdAt: Date;
  _id: string;
  __v: number;
  id: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
  _id: string;
}
