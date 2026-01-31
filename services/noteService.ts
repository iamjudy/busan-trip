import { Note, Traveler } from '../types';

const STORAGE_KEY = 'busan_trip_notes_v1';

const INITIAL_NOTES: Note[] = [
  {
    id: '1',
    title: '必買清單',
    content: '1. 韓國海苔\n2. 零食餅乾\n3. 燒酒杯',
    author: Traveler.ZHU_TING,
    date: new Date().toISOString(),
  },
  {
    id: '2',
    title: '提醒爸爸',
    content: '記得帶厚外套，釜山海邊風很大。',
    author: Traveler.YI_CHEN,
    date: new Date().toISOString(),
  }
];

export const noteService = {
  getAll: (): Note[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_NOTES));
        return INITIAL_NOTES;
      }
      return JSON.parse(data);
    } catch (e) {
      return [];
    }
  },

  add: (title: string, content: string, author: Traveler): Note => {
    const newNote: Note = {
      id: Date.now().toString(),
      title,
      content,
      author,
      date: new Date().toISOString(),
    };
    const notes = noteService.getAll();
    notes.unshift(newNote);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    return newNote;
  },

  delete: (id: string): Note[] => {
    const notes = noteService.getAll();
    const newNotes = notes.filter(n => n.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newNotes));
    return newNotes;
  }
};