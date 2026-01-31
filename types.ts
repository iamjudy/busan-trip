
export enum Tab {
  ITINERARY = 'ITINERARY',
  NOTES = 'NOTES',
  AI_ASSISTANT = 'AI_ASSISTANT'
}

export enum Traveler {
  YI_CHEN = '弈辰',
  ZHU_TING = '筑婷',
  YI_CHEN_DAD = '弈辰爸',
  YI_CHEN_MOM = '弈辰媽'
}

// Fixed: Added Payer enum for expense tracking functionality
export enum Payer {
  ME = '弈辰',
  DAD = '弈辰爸',
  MOM = '弈辰媽'
}

// Fixed: Added ExpenseCategory enum for organizing expenses
export enum ExpenseCategory {
  TRANSPORT = '交通',
  HOTEL = '住宿',
  ENTERTAINMENT = '娛樂',
  FOOD = '餐飲',
  SHOPPING = '購物',
  OTHER = '其他'
}

// Fixed: Added Expense interface to define the structure of a transaction
export interface Expense {
  id: string;
  item: string;
  amount: number;
  payer: Payer;
  date: string;
  category: ExpenseCategory;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  author: Traveler;
  date: string;
  category?: string;
}

export interface FlightInfo {
  airlineCode: string;
  airlineName: string;
  aircraft: string;
  departureTime: string;
  arrivalTime: string;
  departureAirport: string;
  arrivalAirport: string;
  departureCity: string;
  arrivalCity: string;
  departureTerminal?: string;
  arrivalTerminal?: string;
  duration: string;
  co2?: string;
  date?: string;
}

export interface HotelInfo {
  name: string;
  note?: string;
  locationUrl: string;
}

export interface ItineraryEvent {
  time: string;
  title: string;
  description: string;
  location?: string;
  locationUrl?: string;
  image?: string;
  notes?: string;
  icon?: string;
  highlight?: boolean;
  flight?: FlightInfo;
}

export type WeatherCondition = 'Sunny' | 'Cloudy' | 'Rain' | 'PartlyCloudy';

export interface WeatherForecast {
  time: string;
  temp: string;
  condition: WeatherCondition;
}

export interface DayItinerary {
  dayTitle: string;
  date: string;
  weather: WeatherForecast[];
  events: ItineraryEvent[];
  hotel?: HotelInfo;
}
