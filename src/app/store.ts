import { create } from 'zustand';

interface Store {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

export const useStore = create<Store>((set) => ({
  searchQuery: '',
  setSearchQuery: (val) => set({ searchQuery: val }),
}));