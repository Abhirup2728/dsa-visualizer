export type LearningContent = {
  concept: string;
  working: string[];
  complexity: {
    best: string;
    average: string;
    worst: string;
    space: string;
  };
};