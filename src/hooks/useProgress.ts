"use client";

import { useState, useEffect } from "react";

export function useProgress() {
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const saved = localStorage.getItem("ktunode_progress");
      if (saved) {
        try {
          setCompletedTopics(JSON.parse(saved));
        } catch (e) {
          console.error("Failed to parse progress", e);
        }
      }
      setIsLoaded(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Listen for progress synchronization updates (e.g. from cloud login/sync)
  useEffect(() => {
    const handleProgressUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<string[]>;
      if (customEvent.detail && Array.isArray(customEvent.detail)) {
        setCompletedTopics(customEvent.detail);
      }
    };
    window.addEventListener("ktunode-progress-update", handleProgressUpdate);
    return () => {
      window.removeEventListener("ktunode-progress-update", handleProgressUpdate);
    };
  }, []);

  // Save to local storage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("ktunode_progress", JSON.stringify(completedTopics));
    }
  }, [completedTopics, isLoaded]);

  const toggleTopic = (topicId: string) => {
    setCompletedTopics((prev) =>
      prev.includes(topicId)
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId]
    );
  };

  const isCompleted = (topicId: string) => completedTopics.includes(topicId);

  const getModuleProgress = (topicIdsInModule: string[]) => {
    if (!topicIdsInModule.length) return 0;
    const completedCount = topicIdsInModule.filter((id) => completedTopics.includes(id)).length;
    return Math.round((completedCount / topicIdsInModule.length) * 100);
  };

  const getSubjectProgress = (topicIdsInSubject: string[]) => {
    if (!topicIdsInSubject.length) return 0;
    const completedCount = topicIdsInSubject.filter((id) => completedTopics.includes(id)).length;
    return Math.round((completedCount / topicIdsInSubject.length) * 100);
  };

  return {
    completedTopics,
    toggleTopic,
    isCompleted,
    getModuleProgress,
    getSubjectProgress,
    isLoaded,
  };
}
