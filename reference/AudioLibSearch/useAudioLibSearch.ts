import type { AudioLibSearchElement } from './AudioLibSearch.types';

export const useAudioLibSearch = (
  audioLibraryList: AudioLibSearchElement[],
) => {
  const getByTitle = (searchString: string) => {
    if (!searchString.trim()) {
      return [];
    }
    return audioLibraryList.filter((element) =>
      element.title.toLowerCase().includes(searchString.trim().toLowerCase()),
    );
  };

  const getByDescription = (searchString: string) => {
    if (!searchString.trim()) {
      return [];
    }
    return audioLibraryList.filter((element) =>
      element.description
        .toLowerCase()
        .includes(searchString.trim().toLowerCase()),
    );
  };

  const getByTag = (searchString: string) => {
    if (!searchString.trim()) {
      return [];
    }
    return audioLibraryList.filter(
      (element) =>
        element.tags.find((tag) =>
          tag.toLowerCase().includes(searchString.trim().toLowerCase()),
        )?.length,
    );
  };

  const searchInAll = (searchString: string) => {
    if (!searchString.trim()) {
      return [];
    }
    return audioLibraryList.filter((element) => {
      return (
        element.title
          .toLowerCase()
          .includes(searchString.trim().toLowerCase()) ||
        element.description
          .toLowerCase()
          .includes(searchString.trim().toLowerCase()) ||
        element.tags.find((tag) =>
          tag.toLowerCase().includes(searchString.trim().toLowerCase()),
        )?.length
      );
    });
  };

  return {
    getByTitle,
    getByDescription,
    getByTag,
    searchInAll,
  };
};
