import React, { useState, useRef, useEffect } from 'react';
import { ITINERARY_DATA, APP_VERSION } from '../constants';
import { MapPin, Camera, Coffee, ShoppingBag, Train, Plane, Utensils, Landmark, Moon, Sun, Cloud, CloudRain, CloudSun, BedDouble, ChevronDown, ChevronUp, StickyNote, Ticket, Footprints } from 'lucide-react';
import { weatherService } from '../services/weatherService';
import { WeatherForecast, FlightInfo } from '../types';

const IconMap: Record<string, React.ReactElement> = {
  Plane: <Plane size={18} />, Train: <Train size={18} />, Utensils: <Utensils size={18} />,
  ShoppingBag: <ShoppingBag size={18} />, Landmark: <Landmark size={18} />, Camera: <Camera size={18} />,
  Coffee: <Coffee size={18} />, Moon: <Moon size={18} />, Sunset: <Sun size={18} />,
  Map: <MapPin size={18} />, MapPin: <MapPin size={18} />
};

const WeatherIcon: Record<string, React.ReactNode> = {
  Sunny: <Sun size={24} className="text-amber-400 fill-amber-400" />,
  Cloudy: <Cloud size={24} className="text-stone-400 fill-stone-100" />,
  PartlyCloudy: <CloudSun size={24} className="text-amber-400" />,
  Rain: <CloudRain size={24} className="text-blue-400" />
};

const FlightCard: React.FC<{ flight: FlightInfo }> = ({ flight }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mt-3 border-t border-busan-secondary/30 pt-3">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-1 text-xs font-bold text-busan-primary hover:opacity-80 transition-colors mb-2">
        {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />} {isOpen ? '收起航班詳情' : '查看航班詳情'}
      </button>
      {isOpen && (
        <div className="bg-white/80 rounded-xl p-4 text-busan-headline border border-busan-secondary/50 animate-slide-up">
           <div className="flex items-center gap-2 mb-4 border-b border-busan-secondary/30 pb-2">
              <Plane className="text-busan-primary" size={16} />
              <span className="font-bold text-lg">{flight.airlineCode}</span>
              <span className="text-xs ml-auto opacity-70">{flight.duration}</span>
           </div>
           <div className="flex justify-between items-center mb-1">
              <div className="text-center">
                 <div className="text-2xl font-bold mb-1">{flight.departureTime}</div>
                 <div className="text-xl font-bold text-busan-primary">{flight.departureAirport}</div>
              </div>
              <div className="flex-1 px-4 text-center text-xs opacity-50">— {flight.date} →</div>
              <div className="text-center">
                 <div className="text-2xl font-bold mb-1">{flight.arrivalTime}</div>
                 <div className="text-xl font-bold text-busan-primary">{flight.arrivalAirport}</div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export const ItineraryView: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [weatherData, setWeatherData] = useState<WeatherForecast[]>([]);
  const selectedDay = ITINERARY_DATA[selectedIndex];

  useEffect(() => {
    weatherService.getForecast(selectedDay).then(setWeatherData);
  }, [selectedDay]);

  const getDayDetails = (dateStr: string) => {
    const date = new Date(dateStr);
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return { dayName: days[date.getDay()], dayNum: date.getDate() };
  };

  return (
    <div className="pb-8 pt-2 animate-fade-in bg-busan-bg min-h-full">
      <div className="px-6 pt-4 pb-2 text-center">
        <h2 className="text-xs font-bold tracking-widest text-busan-paragraph/60 mb-1 uppercase">Busan Trip</h2>
        <h1 className="text-3xl font-serif font-bold text-busan-headline mb-4">{selectedDay.dayTitle}</h1>
      </div>

      <div className="mb-8 overflow-x-auto no-scrollbar px-4">
        <div className="flex space-x-3 min-w-max">
          {ITINERARY_DATA.map((day, index) => {
            const isActive = selectedIndex === index;
            const { dayName, dayNum } = getDayDetails(day.date);
            return (
              <button key={index} onClick={() => setSelectedIndex(index)}
                className={`flex flex-col items-center justify-center w-[72px] h-[80px] rounded-xl transition-all duration-300 ${
                  isActive ? 'bg-busan-primary text-busan-headline shadow-lg' : 'bg-white text-busan-paragraph/40 border border-busan-secondary/30'
                }`}
              >
                <span className="text-[10px] font-bold uppercase mb-1">{dayName}</span>
                <span className="text-2xl font-bold leading-none">{dayNum}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="px-6 mb-8 flex gap-8 overflow-x-auto no-scrollbar pb-2">
        {weatherData.map((w, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2 flex-shrink-0">
            <span className="text-xs text-busan-paragraph/60">{w.time}</span>
            {WeatherIcon[w.condition]}
            <span className="text-lg font-bold text-busan-headline font-serif">{w.temp}</span>
          </div>
        ))}
      </div>

      <div className="px-6">
        <div className="relative border-l-2 border-busan-secondary/40 ml-3 space-y-8 pb-4">
          {selectedDay.events.map((event, index) => (
            <div key={index} className="relative pl-8">
              <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-white shadow-sm z-10 ${event.highlight ? 'bg-busan-primary' : 'bg-busan-tertiary'}`}></div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-busan-secondary/20 relative overflow-hidden group">
                {event.image && (
                  <div className="mb-3 rounded-xl overflow-hidden h-40 w-full relative">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <h4 className={`text-base font-bold mb-1 font-serif ${event.highlight ? 'text-busan-primary' : 'text-busan-headline'}`}>{event.title}</h4>
                <p className="text-busan-paragraph text-sm leading-relaxed whitespace-pre-wrap">{event.description}</p>
                {event.location && (
                  <div className="mt-2">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-busan-primary bg-busan-secondary/30 px-2 py-1 rounded-full">
                      <MapPin size={10} /> {event.location}
                    </span>
                  </div>
                )}
                {event.flight && <FlightCard flight={{...event.flight, date: selectedDay.date}} />}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedDay.hotel && (
        <div className="px-6 mt-4 mb-8">
            <div className="bg-busan-headline text-white p-5 rounded-2xl shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="font-serif font-bold text-lg mb-1">{selectedDay.hotel.name}</h3>
                    <p className="text-busan-bg/60 text-xs mb-3 font-mono">{selectedDay.hotel.note}</p>
                </div>
                <BedDouble className="absolute -right-4 -bottom-4 text-white opacity-10" size={100} />
            </div>
        </div>
      )}

      <div className="text-center pt-4 pb-4 opacity-30 italic font-serif">Busan is calling... 🌊</div>
    </div>
  );
};