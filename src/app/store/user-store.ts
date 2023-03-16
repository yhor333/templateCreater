import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { UserModel } from '../shared-models/user-model';

interface UserState {
  user: UserModel | null;
  isLoading: boolean;
  totalSum: number;
  setTotalSum: (sum: number) => void;
  setUser: (user: UserModel | null) => void;
  setIsLoading: (isLoading: boolean) => void;
}

const useUserStore = create<UserState>()(
  devtools(
    immer((set) => ({
      user: null,
      isLoading: true,
      totalSum: 0,
      setTotalSum: (sum) =>
        set((state) => {
          state.totalSum = sum;
        }),
      setUser: (user) =>
        set((state) => {
          state.user = user;
        }),
      setIsLoading: (isLoading) =>
        set((state) => {
          state.isLoading = isLoading;
        }),
    }))
  )
);

export default useUserStore;
