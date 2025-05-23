export interface DreamEntry {
  id: string;
  date: string;
  title: string;
  content: string;
  tags: string[];
  mood?: string;
  lucid: boolean;
  user_id?: string;
  userId?: string;
  analysis?: string;
  generatedImage?: string;
  image_url?: string; // Added to fix type errors
  imagePrompt?: string;
  image_prompt?: string; // Added to fix type errors
  is_public?: boolean;
  isPublic?: boolean;
  like_count?: number;
  likeCount?: number;
  comment_count?: number;
  commentCount?: number;
  liked?: boolean;
  profiles?: {
    username?: string;
    display_name?: string;
    avatar_url?: string;
  };
  audioUrl?: string;
  audio_url?: string;
  image_dataurl?: string; // Newly added for persistent images
}

export interface DreamTag {
  id: string;
  name: string;
  color: string;
  user_id?: string;
}

export interface DreamStore {
  entries: DreamEntry[];
  tags: DreamTag[];
}
