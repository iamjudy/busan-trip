
import { Note, Traveler } from '../types';

const STORAGE_KEY = 'busan_trip_notes_v2';

const INITIAL_NOTES: Note[] = [
  {
    id: '1',
    title: '釜山必吃清單',
    content: '1. 豬肉湯飯 (西面松亭三代)\n2. 糖餅 (BIFF 廣場)\n3. 盲鰻 (海雲台市場)\n4. 巨人炸雞 (富平市場)',
    author: Traveler.YI_CHEN,
    date: new Date().toISOString(),
  },
  {
    id: '2',
    title: '伴手禮清單',
    content: '1. 樂天超市海苔\n2. 辣雞麵限定口味\n3. 燒酒杯\n4. 韓國芝麻油',
    author: Traveler.ZHU_TING,
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

  update: (id: string, title: string, content: string, author: Traveler): Note | null => {
    const notes = noteService.getAll();
    const index = notes.findIndex(n => n.id === id);
    if (index === -1) return null;

    const updatedNote: Note = {
      ...notes[index],
      title,
      content,
      author,
      date: new Date().toISOString(),
    };

    notes[index] = updatedNote;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    return updatedNote;
  },

  delete: (id: string): Note[] => {
    const notes = noteService.getAll();
    const newNotes = notes.filter(n => n.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newNotes));
    return newNotes;
  }
};
