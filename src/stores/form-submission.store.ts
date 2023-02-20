import axios from 'axios';
import { makeAutoObservable, toJS } from 'mobx';
import { ICity, locations } from '../data/locations';
import { stringToDate } from '../utils/date';

class FormSubmitionStore {
  city: ICity = locations[0];
  arrival: Date = new Date(Date.now());
  departure: Date = new Date(Date.now());
  hotel: { lat: number; lng: number; name: string } = { lat: 0, lng: 0, name: '' };
  isNoHotel: boolean = false;
  interests: string[] = [];
  foodPreferences: string[] = [];
  user: { fullName: string; email: string; phone: string } = { fullName: '', email: '', phone: '' };

  constructor() {
    makeAutoObservable(this);
  }
  setCity = (city: ICity) => {
    this.city = city;
  };

  setArrival = (date: string) => {
    this.arrival = stringToDate(date);
  };
  setDeparture = (date: string) => {
    this.departure = stringToDate(date);
  };
  setHotel = (lat: number, lng: number, name: string) => {
    this.hotel.lat = lat;
    this.hotel.lng = lng;
    this.hotel.name = name;
  };
  resetHotelToDefaults = () => {
    this.hotel = { lat: 0, lng: 0, name: '' };
  };
  setIsNoHotel = (boolean: boolean) => {
    if (boolean) {
      this.resetHotelToDefaults();
    }
    this.isNoHotel = boolean;
  };
  setInterests = (interests: string[]) => {
    this.interests = interests;
  };
  setFoodPreferences = (foodPreferences: string[]) => {
    this.foodPreferences = foodPreferences;
  };
  setUserFullName = (name: string) => {
    this.user.fullName = name;
  };
  setUserEmail = (email: string) => {
    this.user.email = email;
  };
  setUserPhone = (phone: string) => {
    this.user.phone = phone;
  };
  submitForm = async () => {
    try {
      const { data } = await axios.post('http://localhost:8000/api/v1/trip-data', { ...this });
      console.log(data);
    } catch (err: any) {
      console.log(err.message);
    }
  };
}
const formSubmitionStore = new FormSubmitionStore();
export default formSubmitionStore;
