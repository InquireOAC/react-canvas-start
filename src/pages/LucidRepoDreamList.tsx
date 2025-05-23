
import React from "react";
import { DreamEntry, DreamTag } from "@/types/dream";
import LucidDreamsContent from "@/components/repos/LucidDreamsContent";

interface LucidRepoDreamListProps {
  isLoading: boolean;
  filteredDreams: DreamEntry[];
  dreamTags: DreamTag[];
  onLike: (dreamId: string) => void;
  onOpenDream: (dream: DreamEntry) => void;
  onUserClick: (userId: string | undefined) => void;
  onTagClick: (tagId: string) => void;
  searchQuery: string;
}

const LucidRepoDreamList = ({
  isLoading,
  filteredDreams,
  dreamTags,
  onLike,
  onOpenDream,
  onUserClick,
  onTagClick,
  searchQuery
}: LucidRepoDreamListProps) => {
  return (
    <LucidDreamsContent
      isLoading={isLoading}
      filteredDreams={filteredDreams}
      dreamTags={dreamTags} // Pass along!
      onLike={onLike}
      onOpenDream={onOpenDream}
      onUserClick={onUserClick}
      onTagClick={onTagClick}
      searchQuery={searchQuery}
    />
  );
};

export default LucidRepoDreamList;
