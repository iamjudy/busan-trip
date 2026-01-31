
import React, { useState } from 'react';
import { ItineraryView } from './components/ItineraryView';
import { NotesView } from './components/NotesView';
import { AiAssistant } from './components/AiAssistant';
import { Tab } from './types';
import { APP_NAME } from './constants';
import { Calendar, StickyNote, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.ITINERARY);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.ITINERARY: return <ItineraryView />;
      case Tab.NOTES: return <NotesView />;
      case Tab.AI_ASSISTANT: return <AiAssistant />;
      default: return <ItineraryView />;
    }
  };

  return (
    <div className="min-h-screen bg-busan-bg font-sans max-w-md mx-auto shadow-2xl relative flex flex-col border-x border-slate-100">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-busan-tertiary/50 px-6 py-5 flex items-center justify-between shadow-sm">
        <h1 className="text-xl font-serif font-bold text-busan-headline tracking-tight">{APP_NAME}</h1>
        <div className="text-[9px] font-black px-2 py-0.5 border border-busan-primary text-busan-primary rounded uppercase tracking-tighter">
          Feb 2026
        </div>
      </header>

      <main className="flex-1 overflow-y-auto">
        {renderContent()}
      </main>

      <nav className="sticky bottom-0 w-full bg-white/95 backdrop-blur-md border-t border-busan-tertiary/30 pb-6 pt-3 px-6 z-50">
        <div className="flex justify-around items-center">
          <button
            onClick={() => setActiveTab(Tab.ITINERARY)}
            className={`flex flex-col items-center justify-center space-y-1 w-16 transition-all duration-300 ${
              activeTab === Tab.ITINERARY ? 'text-busan-primary scale-110' : 'text-busan-paragraph opacity-40'
            }`}
          >
            <Calendar size={24} strokeWidth={activeTab === Tab.ITINERARY ? 2.5 : 2} />
            <span className="text-[10px] font-bold">行程</span>
          </button>

          <button
            onClick={() => setActiveTab(Tab.AI_ASSISTANT)}
            className={`flex flex-col items-center justify-center space-y-1 w-20 transition-all duration-300 ${
              activeTab === Tab.AI_ASSISTANT ? 'text-busan-headline' : 'text-busan-paragraph opacity-40'
            }`}
          >
            <div className={`p-2.5 rounded-full transition-all ${activeTab === Tab.AI_ASSISTANT ? 'bg-busan-secondary shadow-lg' : 'bg-busan-bg'}`}>
               <Sparkles size={24} className={activeTab === Tab.AI_ASSISTANT ? 'text-white fill-white' : 'text-busan-paragraph'} />
            </div>
          </button>

          <button
            onClick={() => setActiveTab(Tab.NOTES)}
            className={`flex flex-col items-center justify-center space-y-1 w-16 transition-all duration-300 ${
              activeTab === Tab.NOTES ? 'text-busan-primary scale-110' : 'text-busan-paragraph opacity-40'
            }`}
          >
            <StickyNote size={24} strokeWidth={activeTab === Tab.NOTES ? 2.5 : 2} />
            <span className="text-[10px] font-bold">筆記</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default App;
