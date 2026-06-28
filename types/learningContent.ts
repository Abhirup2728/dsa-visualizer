export type CodeSnippets = {
  cpp: string;
  python: string;
  java: string;
};

export type LearningContent = {
  concept: string;
  working: string[];
  complexity: {
    best: string;
    average: string;
    worst: string;
    space: string;
  };
  code: CodeSnippets;
};