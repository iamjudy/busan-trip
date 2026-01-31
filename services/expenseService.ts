import { Expense, Payer, ExpenseCategory } from '../types';

// Fix: Updated storage key to match Busan Trip
const STORAGE_KEY = 'busan_trip_expenses_v2';

// Fix: Updated initial data to match Busan trip items
const INITIAL_DATA: Expense[] = [
  {
    id: 'init-1',
    item: '來回機票 (金海機場)',
    amount: 35253,
    payer: Payer.ME,
    date: new Date('2025-12-07').toISOString(),
    category: ExpenseCategory.TRANSPORT
  },
  {
    id: 'init-2',
    item: '甘川洞小王子導覽',
    amount: 3813,
    payer: Payer.DAD,
    date: new Date('2025-12-07').toISOString(),
    category: ExpenseCategory.ENTERTAINMENT
  },
  {
    id: 'init-3',
    item: '海雲台帕樂德度假飯店',
    amount: 7068,
    payer: Payer.DAD,
    date: new Date('2025-12-07').toISOString(),
    category: ExpenseCategory.HOTEL
  },
  {
    id: 'init-4',
    item: '機場巴士車票',
    amount: 1335,
    payer: Payer.DAD,
    date: new Date('2025-12-07').toISOString(),
    category: ExpenseCategory.TRANSPORT
  },
  {
    id: 'init-5',
    item: '釜山帕悦飯店',
    amount: 35151,
    payer: Payer.DAD,
    date: new Date('2025-12-07').toISOString(),
    category: ExpenseCategory.HOTEL
  },
  {
    id: 'init-6',
    item: '韓國 5G 網卡',
    amount: 897,
    payer: Payer.ME,
    date: new Date('2025-12-10').toISOString(),
    category: ExpenseCategory.ENTERTAINMENT
  }
];

export const expenseService = {
  getAll: (): Expense[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) {
        // Seed initial data if empty
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DATA));
        return INITIAL_DATA;
      }
      return JSON.parse(data);
    } catch (e) {
      console.error("Error loading expenses", e);
      return [];
    }
  },

  add: (item: string, amount: number, payer: Payer, category: ExpenseCategory): Expense => {
    const newExpense: Expense = {
      id: Date.now().toString(),
      item,
      amount,
      payer,
      date: new Date().toISOString(),
      category
    };
    
    const expenses = expenseService.getAll();
    expenses.unshift(newExpense); // Add to top
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
    return newExpense;
  },

  delete: (id: string): Expense[] => {
    const expenses = expenseService.getAll();
    const newExpenses = expenses.filter(e => e.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newExpenses));
    return newExpenses;
  },

  getTotal: (): number => {
    const expenses = expenseService.getAll();
    return expenses.reduce((acc, curr) => acc + curr.amount, 0);
  },
  
  getByPayer: (): Record<Payer, number> => {
      const expenses = expenseService.getAll();
      const initial: Record<Payer, number> = {
          [Payer.ME]: 0,
          [Payer.DAD]: 0,
          [Payer.MOM]: 0
      };
      
      return expenses.reduce((acc, curr) => {
          if (acc[curr.payer] !== undefined) {
              acc[curr.payer] += curr.amount;
          }
          return acc;
      }, initial);
  }
};
