export type StackState = {
  items: number[];
  lastAction: "push" | "pop" | "reset" | null;
  errorMessage: string | null;
};