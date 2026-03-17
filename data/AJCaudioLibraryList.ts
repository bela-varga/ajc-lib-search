import type { AudioLibSearchElement } from '../app/types/library.types';
import { audioLibraryList_part_01 } from './libraryList_part_01';
import { audioLibraryList_part_02 } from './libraryList_part_02';
import { audioLibraryList_part_03 } from './libraryList_part_03';
import { audioLibraryList_part_04 } from './libraryList_part_04';

export const audioLibraryList: AudioLibSearchElement[] =
  audioLibraryList_part_01
    .concat(audioLibraryList_part_02)
    .concat(audioLibraryList_part_03)
    .concat(audioLibraryList_part_04);
