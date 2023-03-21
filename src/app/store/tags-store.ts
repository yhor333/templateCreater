import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface TagsStore {
  tags: string[] | null;
  setTags: (tags: string[] | null) => void;
}

const useTagsStore = create<TagsStore>()(
  devtools(
    immer((set) => ({
      tags: null,
      setTags: (tags) =>
        set((state) => {
          state.tags = tags;
        }),
    }))
  )
);

export default useTagsStore;
