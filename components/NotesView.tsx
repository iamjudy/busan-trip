import React, { useState, useEffect, useCallback } from 'react';
import { Plus, Trash2, StickyNote, User, Calendar, X } from 'lucide-react';
import { Note, Traveler } from '../types';
import { noteService } from '../services/noteService';
import { TRAVELER_OPTIONS } from '../constants';

export const NotesView: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState<Traveler>(Traveler.YI_CHEN);

  const loadNotes = useCallback(() => {
    setNotes(noteService.getAll());
  }, []);

  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;
    noteService.add(title, content, author);
    setTitle('');
    setContent('');
    setShowForm(false);
    loadNotes();
  };

  const handleDelete = (id: string) => {
    if (window.confirm('確定要刪除這則筆記嗎？')) {
      noteService.delete(id);
      loadNotes();
    }
  };

  return (
    <div className="pb-8 pt-4 px-4 space-y-6 animate-fade-in bg-busan-bg min-h-full">
      <div className="text-center space-y-1 mb-2">
        <h2 className="text-2xl font-serif font-bold text-busan-headline">旅遊隨手記</h2>
        <p className="text-busan-paragraph/60 text-sm italic">記錄旅行中的點點滴滴</p>
      </div>

      {!showForm ? (
        <button 
          onClick={() => setShowForm(true)}
          className="w-full bg-white border-2 border-dashed border-busan-primary/30 text-busan-primary font-bold py-6 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all active:scale-95 shadow-sm"
        >
          <Plus size={24} />
          <span>新增筆記</span>
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-3xl shadow-xl border border-busan-secondary/30 space-y-4 animate-slide-up">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-busan-headline flex items-center gap-2">
              <StickyNote size={18} className="text-busan-primary" />
              寫下新發現
            </h3>
            <button type="button" onClick={() => setShowForm(false)} className="text-busan-paragraph/40 hover:text-busan-primary transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="space-y-3">
            <input 
              type="text" 
              placeholder="標題..." 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-busan-bg/30 border-none rounded-xl p-3 focus:ring-2 focus:ring-busan-primary/20 text-busan-headline font-bold placeholder:text-busan-paragraph/30"
            />
            <textarea 
              placeholder="想記點什麼？" 
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              className="w-full bg-busan-bg/30 border-none rounded-xl p-3 focus:ring-2 focus:ring-busan-primary/20 text-busan-paragraph placeholder:text-busan-paragraph/30 resize-none"
            />
          </div>

          <div className="flex items-center gap-3">
            <User size={16} className="text-busan-primary" />
            <div className="flex flex-wrap gap-2">
              {TRAVELER_OPTIONS.map(opt => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setAuthor(opt)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    author === opt ? 'bg-busan-primary text-white' : 'bg-busan-secondary/20 text-busan-paragraph opacity-60'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <button type="submit" className="w-full bg-busan-primary text-white font-bold py-3 rounded-xl shadow-lg shadow-busan-primary/20 active:scale-[0.98] transition-transform">
            儲存筆記
          </button>
        </form>
      )}

      <div className="grid gap-4">
        {notes.length === 0 ? (
          <div className="text-center py-12 text-busan-paragraph/40 italic">
            目前還沒有筆記喔～
          </div>
        ) : (
          notes.map((note) => (
            <div key={note.id} className="bg-white p-5 rounded-2xl shadow-sm border border-busan-secondary/20 relative group overflow-hidden">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-serif font-bold text-busan-headline text-lg">{note.title}</h4>
                <button 
                  onClick={() => handleDelete(note.id)}
                  className="text-busan-paragraph/20 hover:text-red-400 p-1 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              <p className="text-busan-paragraph text-sm leading-relaxed whitespace-pre-wrap mb-4 opacity-80">
                {note.content}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-busan-bg/50">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-busan-tertiary flex items-center justify-center text-[10px] font-bold text-busan-headline">
                    {note.author[0]}
                  </div>
                  <span className="text-xs font-bold text-busan-paragraph/60">{note.author}</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-busan-paragraph/30">
                  <Calendar size={10} />
                  {new Date(note.date).toLocaleDateString()}
                </div>
              </div>
              <div className="absolute top-0 right-0 w-8 h-8 bg-busan-tertiary/20 -mr-4 -mt-4 rotate-45"></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};