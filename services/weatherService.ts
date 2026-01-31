import { DayItinerary, WeatherForecast, WeatherCondition } from '../types';

// Coordinates for Busan
const COORDS = {
  BUSAN: { lat: 35.1796, lng: 129.0756 },
};

const mapWmoCodeToCondition = (code: number): WeatherCondition => {
  if (code === 0) return 'Sunny';
  if (code >= 1 && code <= 3) return 'PartlyCloudy';
  if (code >= 45 && code <= 48) return 'Cloudy';
  if (code >= 51 && code <= 67) return 'Rain';
  if (code >= 80 && code <= 82) return 'Rain';
  if (code >= 95) return 'Rain';
  return 'Cloudy';
};

export const weatherService = {
  getForecast: async (day: DayItinerary): Promise<WeatherForecast[]> => {
    const targetDate = new Date(day.date);
    const today = new Date();
    const diffTime = targetDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const isWithinForecastRange = diffDays >= 0 && diffDays < 14;

    if (!isWithinForecastRange) {
      return day.weather;
    }

    try {
      const location = COORDS.BUSAN;
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lng}&hourly=temperature_2m,weathercode&timezone=Asia%2FSeoul&start_date=${day.date}&end_date=${day.date}`
      );
      
      const data = await response.json();
      if (!data.hourly) throw new Error("No hourly data");

      const targetHours = [9, 12, 15, 18, 21];
      const realForecast: WeatherForecast[] = [];

      data.hourly.time.forEach((timeStr: string, index: number) => {
        const dateObj = new Date(timeStr);
        const hour = dateObj.getHours();

        if (targetHours.includes(hour)) {
           const temp = Math.round(data.hourly.temperature_2m[index]);
           const code = data.hourly.weathercode[index];
           realForecast.push({
             time: `${hour.toString().padStart(2, '0')}:00`,
             temp: `${temp}°`,
             condition: mapWmoCodeToCondition(code)
           });
        }
      });

      return realForecast.length > 0 ? realForecast : day.weather;
    } catch (error) {
      return day.weather;
    }
  }
};