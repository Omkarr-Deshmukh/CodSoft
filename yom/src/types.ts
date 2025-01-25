// src/types.ts
export type MediaType = 'video' | 'image';

export interface MediaItem {
  type: MediaType;
  src: string;
}
