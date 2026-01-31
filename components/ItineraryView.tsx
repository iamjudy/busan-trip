
import React, { useState, useEffect } from 'react';
import { ITINERARY_DATA } from '../constants';
import { MapPin, Camera, Coffee, ShoppingBag, Train, Plane, Utensils, Landmark, Moon, Sun, Cloud, CloudRain, CloudSun, BedDouble, ChevronRight, Info, ExternalLink, Sparkles } from 'lucide-react';
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
  <div className="bg-white/60 rounded-2xl p-4 border border-busan-primary/20 my-3 backdrop-blur-sm shadow-sm">
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
      </div>
      
      <div className="flex flex-col items-center flex-1 px-4">
        <div className="text-[9px] font-bold text-slate-300 mb-1">{flight.duration}</div>
        <div className="w-full h-[1px] bg-slate-200 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-1">
            <ChevronRight size={12} className="text-slate-300" />
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="text-xl font-black text-busan-headline">{flight.arrivalTime}</div>
        <div className="text-[10px] font-bold text-busan-paragraph/60">{flight.arrivalAirport}</div>
        <div className="text-[11px] font-medium mt-1">{flight.arrivalCity}</div>
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
        <h2 className="text-[10px] font-bold tracking-[0.3em] text-busan-primary mb-1 uppercase">Feb 2026 Trip</h2>
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
              
              <div className="bg-white p-5 rounded-[24px] shadow-sm border border-busan-primary/5 relative group transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold text-busan-primary bg-busan-primary/10 px-2 py-0.5 rounded-md">{event.time}</span>
                  {event.icon && <span className="text-busan-primary opacity-60">{IconMap[event.icon]}</span>}
                </div>
                
                <h4 className="text-lg font-bold mb-1 font-serif text-busan-headline">{event.title}</h4>
                <p className="text-busan-paragraph text-sm leading-relaxed mb-4 opacity-90">{event.description}</p>
                
                {event.flight && <FlightCard flight={event.flight} />}

                {event.image && (
                  <div className="mb-4 overflow-hidden rounded-2xl border border-busan-primary/10 shadow-sm">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-auto object-cover max-h-56 hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                )}

                {event.location && (
                  <div className="mb-3">
                    {event.locationUrl ? (
                      <a 
                        href={event.locationUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-xl border bg-sky-50 text-sky-700 border-sky-100 hover:bg-sky-100 transition-colors underline decoration-sky-200 decoration-2 underline-offset-2"
                      >
                        <MapPin size={11} className="text-sky-500" /> {event.location} <ExternalLink size={10} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-xl border bg-slate-50 text-slate-400 border-slate-100">
                        <MapPin size={11} /> {event.location}
                      </span>
                    )}
                  </div>
                )}

                {event.notes && (
                  <div className="mt-4 p-4 bg-busan-secondary rounded-2xl border border-rose-200 text-xs text-[#880E4F] italic shadow-sm">
                    <div className="flex items-center gap-1.5 text-[#C2185B] font-bold mb-2 not-italic uppercase tracking-widest text-[9px]">
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
            <div className="bg-[#2e669e] text-white p-7 pb-10 rounded-[32px] shadow-2xl relative overflow-hidden group border border-white/10">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>
                
                <div className="relative z-10">
                    <div className="flex items-center gap-1.5 mb-2.5 text-white/50 font-bold uppercase tracking-[0.2em] text-[10px]">
                      <BedDouble size={14} /> Tonight's Stay
                    </div>
                    
                    <h3 className="font-serif font-bold text-lg mb-1 tracking-tight leading-tight">{selectedDay.hotel.name}</h3>
                    <p className="text-white/70 text-xs mb-6 font-medium tracking-wide italic leading-relaxed">{selectedDay.hotel.note}</p>
                    
                    <a 
                      href={selectedDay.hotel.locationUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl border border-white/20 transition-all active:scale-95 shadow-lg backdrop-blur-sm"
                    >
                      <MapPin size={11} /> 在地圖中查看 <ExternalLink size={10} className="opacity-50" />
                    </a>
                </div>

                <div className="absolute bottom-6 right-6 flex flex-col items-center opacity-40 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                  <div className="relative">
                    <Moon size={36} className="text-white/40 animate-pulse fill-white/10" />
                    <div className="absolute -top-1 -right-1 animate-bounce">
                      <Sparkles size={16} className="text-amber-200 shadow-amber-200/50" />
                    </div>
                  </div>
                </div>
            </div>
        </div>
      )}
      <div className="text-center pt-4 pb-12 opacity-30 italic font-serif text-sm text-busan-headline">Enjoy your Busan trip! 🌊</div>
    </div>
  );
};
