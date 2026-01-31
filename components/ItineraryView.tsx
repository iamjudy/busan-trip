
import React, { useState, useEffect } from 'react';
import { ITINERARY_DATA } from '../constants';
import { MapPin, Camera, Coffee, ShoppingBag, Train, Plane, Utensils, Landmark, Moon, Sun, Cloud, CloudRain, CloudSun, BedDouble, ChevronRight, Info, ExternalLink } from 'lucide-react';
import { weatherService } from '../services/weatherService';
import { WeatherForecast, FlightInfo } from '../types';

const IconMap: Record<string, React.ReactElement> = {
  Plane: <Plane size={18} />, Train: <Train size={18} />, Utensils: <Utensils size={18} />,
  ShoppingBag: <ShoppingBag size={18} />, Landmark: <Landmark size={18} />, Camera: <Camera size={18} />,
  Coffee: <Coffee size={18} />, Moon: <Moon size={18} />, Sunset: <Sun size={18} />,
  Map: <MapPin size={18} />, MapPin: <MapPin size={18} />
};

const WeatherIcon: Record<string, React.ReactNode> = {
  Sunny: <Sun size={24} className="text-amber-400" />,
  Cloudy: <Cloud size={24} className="text-slate-300" />,
  PartlyCloudy: <CloudSun size={24} className="text-orange-300" />,
  Rain: <CloudRain size={24} className="text-blue-300" />
};

// 連結渲染組件：處理 [文字](連結) 格式
const LinkifiedText: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split(/(\[.*?\]\(.*?\))/g);
  return (
    <div className="whitespace-pre-wrap leading-relaxed">
      {parts.map((part, i) => {
        const match = part.match(/\[(.*?)\]\((.*?)\)/);
        if (match) {
          return (
            <a 
              key={i} 
              href={match[2]} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-busan-primary font-bold underline inline-flex items-center gap-0.5 mx-0.5"
            >
              {match[1]} <ExternalLink size={10} />
            </a>
          );
        }
        return part;
      })}
    </div>
  );
};

const FlightCard: React.FC<{ flight: FlightInfo }> = ({ flight }) => (
  <div className="bg-slate-50 rounded-2xl p-4 border border-busan-tertiary/40 my-3">
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-2">
        <div className="bg-busan-primary p-1.5 rounded-lg text-white">
          <Plane size={14} />
        </div>
        <span className="text-[11px] font-black text-busan-headline tracking-tighter">{flight.airlineName}</span>
      </div>
      <span className="text-[10px] font-bold text-slate-400">{flight.aircraft}</span>
    </div>
    
    <div className="flex justify-between items-center px-2">
      <div className="text-center">
        <div className="text-xl font-black text-busan-headline">{flight.departureTime}</div>
        <div className="text-[10px] font-bold text-busan-paragraph/60">{flight.departureAirport}</div>
        <div className="text-[11px] font-medium mt-1">{flight.departureCity}</div>
        {flight.departureTerminal && <div className="text-[9px] text-busan-primary mt-1">{flight.departureTerminal}</div>}
      </div>
      
      <div className="flex flex-col items-center flex-1 px-4">
        <div className="text-[9px] font-bold text-slate-300 mb-1">{flight.duration}</div>
        <div className="w-full h-[1px] bg-slate-200 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-1">
            <ChevronRight size={12} className="text-slate-300" />
          </div>
        </div>
        <div className="text-[9px] font-bold text-slate-300 mt-1">{flight.co2 || 'Standard Flight'}</div>
      </div>

      <div className="text-center">
        <div className="text-xl font-black text-busan-headline">{flight.arrivalTime}</div>
        <div className="text-[10px] font-bold text-busan-paragraph/60">{flight.arrivalAirport}</div>
        <div className="text-[11px] font-medium mt-1">{flight.arrivalCity}</div>
        {flight.arrivalTerminal && <div className="text-[9px] text-busan-primary mt-1">{flight.arrivalTerminal}</div>}
      </div>
    </div>
  </div>
);

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
        <h2 className="text-[10px] font-bold tracking-[0.3em] text-busan-primary mb-1 uppercase">Trip Diary</h2>
        <h1 className="text-3xl font-serif font-bold text-busan-headline mb-4">{selectedDay.dayTitle}</h1>
      </div>

      <div className="mb-8 overflow-x-auto no-scrollbar px-4">
        <div className="flex space-x-3 min-w-max px-2">
          {ITINERARY_DATA.map((day, index) => {
            const isActive = selectedIndex === index;
            const { dayName, dayNum } = getDayDetails(day.date);
            return (
              <button key={index} onClick={() => setSelectedIndex(index)}
                className={`flex flex-col items-center justify-center w-[68px] h-[86px] rounded-2xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-busan-primary text-white shadow-lg scale-105 border-none' 
                    : 'bg-white text-busan-headline border border-busan-primary/5 shadow-sm'
                }`}
              >
                <span className={`text-[9px] font-bold uppercase mb-1 ${isActive ? 'text-white' : 'text-busan-headline/30'}`}>{dayName}</span>
                <span className="text-2xl font-bold leading-none">{dayNum}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="px-6 mb-8 flex gap-8 overflow-x-auto no-scrollbar pb-2">
        {weatherData.map((w, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2 flex-shrink-0">
            <span className="text-[10px] text-busan-headline/40 font-bold uppercase tracking-wider">{w.time}</span>
            {WeatherIcon[w.condition]}
            <span className="text-base font-bold text-busan-headline font-serif">{w.temp}</span>
          </div>
        ))}
      </div>

      <div className="px-6">
        <div className="relative border-l-2 border-busan-primary/20 ml-3 space-y-8 pb-4">
          {selectedDay.events.map((event, index) => (
            <div key={index} className="relative pl-8">
              <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full border-2 border-white shadow-sm z-10 bg-busan-primary"></div>
              
              <div className="bg-white p-5 rounded-[24px] shadow-sm border border-busan-primary/5 relative group transition-transform">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold text-busan-primary bg-busan-primary/10 px-2 py-0.5 rounded-md">{event.time}</span>
                  {event.icon && <span className="text-busan-primary opacity-60">{IconMap[event.icon]}</span>}
                </div>
                <h4 className="text-base font-bold mb-1 font-serif text-busan-headline">{event.title}</h4>
                <p className="text-busan-paragraph text-sm leading-relaxed mb-3 opacity-90">{event.description}</p>
                
                {event.flight && <FlightCard flight={event.flight} />}

                {event.image && (
                  <div className="my-3 overflow-hidden rounded-2xl border border-busan-tertiary/30">
                    <img src={event.image} alt={event.title} className="w-full h-auto object-cover max-h-48" />
                  </div>
                )}

                {event.location && (
                  <div className="mt-2 flex items-center gap-2">
                    {event.locationUrl ? (
                      <a 
                        href={event.locationUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-xl border bg-amber-50 text-amber-800 border-amber-200/50 hover:bg-amber-100 transition-colors underline decoration-amber-300"
                      >
                        <MapPin size={11} /> {event.location} <ExternalLink size={9} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-xl border bg-slate-50 text-slate-600 border-slate-200">
                        <MapPin size={11} /> {event.location}
                      </span>
                    )}
                  </div>
                )}

                {event.notes && (
                  <div className="mt-4 p-4 bg-busan-secondary rounded-2xl border border-rose-200/50 text-xs text-busan-headline italic shadow-sm">
                    <div className="flex items-center gap-1.5 text-rose-500 font-bold mb-2 not-italic uppercase tracking-widest text-[9px]">
                      <Info size={12} /> Notes
                    </div>
                    <LinkifiedText text={event.notes} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedDay.hotel && (
        <div className="px-6 mt-4 mb-8">
            <div className="bg-[#5f94b9] text-white p-6 rounded-[32px] shadow-xl relative overflow-hidden group">
                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-2 bg-white/90 backdrop-blur-md rounded-2xl shadow-sm">
                        <BedDouble size={20} className="text-[#1a3a5a]" />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-white/20 text-white shadow-sm border border-white/30 backdrop-blur-sm">Tonight's Stay</span>
                    </div>
                    <h3 className="font-serif font-bold text-xl mb-1 tracking-tight">{selectedDay.hotel.name}</h3>
                    <p className="text-white/85 text-xs mb-3 font-medium tracking-wide">{selectedDay.hotel.note}</p>
                </div>
            </div>
        </div>
      )}
      <div className="text-center pt-4 pb-12 opacity-30 italic font-serif text-sm text-busan-headline">Enjoy your Busan trip! 🌊</div>
    </div>
  );
};
