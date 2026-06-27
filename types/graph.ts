export type GraphNode = {
  id: number;
  x: number;
  y: number;
};

export type GraphEdge = {
  from: number;
  to: number;
};

export type GraphData = {
  nodes: GraphNode[];
  edges: GraphEdge[];
};

export type TraversalStep = {
  currentNode: number | null;
  visitedNodes: number[];
  frontierNodes: number[];
  visitOrder: number[];
};