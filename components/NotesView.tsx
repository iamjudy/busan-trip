
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Plus, Trash2, StickyNote, X, Edit3, Save, AlertCircle } from 'lucide-react';
import { Note, Traveler } from '../types';
import { noteService } from '../services/noteService';
import { TRAVELER_OPTIONS } from '../constants';

export const NotesView: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // 表單狀態
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState<Traveler>(Traveler.YI_CHEN);
  
  const formRef = useRef<HTMLFormElement>(null);

  const loadNotes = useCallback(() => {
    setNotes(noteService.getAll());
  }, []);

  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    if (editingId) {
      noteService.update(editingId, title, content, author);
    } else {
      noteService.add(title, content, author);
    }

    resetForm();
    loadNotes();
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
    setAuthor(Traveler.YI_CHEN);
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (note: Note) => {
    setTitle(note.title);
    setContent(note.content);
    setAuthor(note.author);
    setEditingId(note.id);
    setShowForm(true);
    
    // 捲動到頂部讓使用者看到表單
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id: string) => {
    if (window.confirm('確定要刪除這則筆記嗎？')) {
      noteService.delete(id);
      loadNotes();
    }
  };

  const getAuthorStyle = (name: Traveler) => {
    switch (name) {
      case Traveler.YI_CHEN: return 'bg-blue-50 text-blue-600 border-blue-100';
      case Traveler.YI_CHEN_DAD: return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case Traveler.YI_CHEN_MOM: return 'bg-fuchsia-50 text-fuchsia-600 border-fuchsia-100';
      case Traveler.ZHU_TING: return 'bg-orange-50 text-orange-600 border-orange-100';
      default: return 'bg-slate-50 text-slate-600 border-slate-100';
    }
  };

  const getAuthorActiveStyle = (name: Traveler) => {
    switch (name) {
      case Traveler.YI_CHEN: return 'bg-blue-500 text-white';
      case Traveler.YI_CHEN_DAD: return 'bg-emerald-500 text-white';
      case Traveler.YI_CHEN_MOM: return 'bg-fuchsia-500 text-white';
      case Traveler.ZHU_TING: return 'bg-orange-500 text-white';
      default: return 'bg-busan-primary text-white';
    }
  };

  return (
    <div className="pb-8 pt-4 px-4 space-y-6 animate-fade-in bg-busan-bg min-h-full">
      <div className="text-center space-y-1 mb-2">
        <h2 className="text-2xl font-serif font-bold text-busan-headline">釜山記事本</h2>
        <p className="text-busan-paragraph/60 text-sm italic">隨手紀錄旅行中的點點滴滴</p>
      </div>

      {!showForm ? (
        <button 
          onClick={() => setShowForm(true)}
          className="w-full bg-white border border-busan-primary/20 text-busan-primary font-bold py-6 rounded-[24px] flex flex-col items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-sm"
        >
          <div className="p-2 bg-busan-bg rounded-full text-busan-primary">
            <Plus size={24} />
          </div>
          <span className="text-sm">新增旅遊筆記</span>
        </button>
      ) : (
        <form 
          ref={formRef}
          onSubmit={handleSubmit} 
          className="bg-white p-6 rounded-[32px] shadow-xl border border-busan-tertiary/50 space-y-4 animate-slide-up"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-busan-headline flex items-center gap-2 text-lg">
              {editingId ? <Edit3 size={18} className="text-amber-500" /> : <StickyNote size={18} className="text-busan-primary" />}
              {editingId ? '編輯筆記' : '寫下新筆記'}
            </h3>
            <button type="button" onClick={resetForm} className="text-busan-paragraph/40 p-1">
              <X size={24} />
            </button>
          </div>

          <div className="space-y-3">
            <input 
              type="text" 
              placeholder="給筆記一個標題..." 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-busan-bg border-none rounded-xl p-4 focus:ring-2 focus:ring-busan-primary/20 text-busan-headline font-bold placeholder:text-busan-paragraph/30 transition-all"
            />
            <textarea 
              placeholder="在此輸入內容..." 
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={5}
              className="w-full bg-busan-bg border-none rounded-xl p-4 focus:ring-2 focus:ring-busan-primary/20 text-busan-paragraph placeholder:text-busan-paragraph/30 resize-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-busan-headline/40 uppercase tracking-widest ml-1">記錄者</label>
            <div className="flex flex-wrap gap-2">
              {TRAVELER_OPTIONS.map(opt => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setAuthor(opt)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                    author === opt 
                      ? getAuthorActiveStyle(opt) 
                      : 'bg-white text-busan-paragraph/60 border-busan-tertiary/60'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <button 
            type="submit" 
            className={`w-full text-white font-bold py-4 rounded-2xl shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2 ${
              editingId ? 'bg-amber-500' : 'bg-busan-primary'
            }`}
          >
            {editingId ? <Save size={20} /> : <Plus size={20} />}
            {editingId ? '更新並儲存' : '儲存筆記'}
          </button>
        </form>
      )}

      {/* 警語提示 */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex gap-3 items-start">
        <AlertCircle className="text-amber-500 flex-shrink-0" size={18} />
        <div className="space-y-1">
          <p className="text-amber-900 text-[11px] font-bold">資料不具備同步功能</p>
          <p className="text-amber-800 text-[10px] leading-relaxed">
            筆記目前僅儲存在這台手機的瀏覽器中。\n你在這寫下的內容，其他人的手機是不會自動顯示的哦！
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        {notes.length === 0 ? (
          <div className="text-center py-12 text-busan-paragraph/30 italic">目前還沒有筆記喔...</div>
        ) : (
          notes.map((note) => (
            <div key={note.id} className="bg-white p-6 rounded-[24px] shadow-sm border border-busan-tertiary/50 relative overflow-hidden group transition-all hover:border-busan-secondary/50">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-serif font-bold text-busan-headline text-lg">{note.title}</h4>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleEdit(note)}
                    className="text-busan-paragraph/20 hover:text-amber-500 p-1.5 transition-colors bg-busan-bg rounded-lg"
                  >
                    <Edit3 size={16} />
                  </button>
                  <button 
                    onClick={() => handleDelete(note.id)}
                    className="text-busan-paragraph/20 hover:text-red-400 p-1.5 transition-colors bg-busan-bg rounded-lg"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <p className="text-busan-paragraph text-sm leading-relaxed whitespace-pre-wrap mb-4 opacity-80 font-medium">
                {note.content}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-busan-tertiary/30">
                <span className={`text-[10px] font-bold px-3 py-1 rounded-lg border ${getAuthorStyle(note.author)}`}>
                  {note.author}
                </span>
                <span className="text-[9px] text-busan-paragraph/30 uppercase tracking-widest">
                  {new Date(note.date).toLocaleDateString()} 修改
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
