import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { UserModel } from '../shared-models/user-model';
import { instance } from '../shared/instance/axios-instance/axios-instance';

interface UserState {
  user: UserModel | null;
  isLoading: boolean;
  setUser: (user: UserModel | null) => void;
  setIsLoading: (isLoading: boolean) => void;
  loadUser: () => void;
}

const useUserStore = create<UserState>()(
  devtools(
    immer((set) => ({
      user: null,
      isLoading: true,
      setUser: (user) =>
        set((state) => {
          state.user = user;
        }),
      setIsLoading: (isLoading) =>
        set((state) => {
          state.isLoading = isLoading;
        }),
      loadUser: async () => {
        const user = await instance.get('/auth/profile');
        set({ user: user.data, isLoading: false });
      },
    }))
  )
);

export default useUserStore;
