import type { AudioLibSearchElement } from '../app/types/library.types';
import { audioLibraryList_part_01 } from './libraryList_part_01';
import { audioLibraryList_part_02 } from './libraryList_part_02';

export const audioLibraryList: AudioLibSearchElement[] =
  audioLibraryList_part_01.concat(audioLibraryList_part_02);
