import { GraphData, TraversalStep } from "@/types/graph";

export function bfsWithSteps(graph: GraphData, startId: number): TraversalStep[] {
  const steps: TraversalStep[] = [];
  const visited = new Set<number>();
  const visitOrder: number[] = [];
  const queue: number[] = [startId];
  visited.add(startId);

  while (queue.length > 0) {
    const current = queue.shift()!;
    visitOrder.push(current);

    steps.push({
      currentNode: current,
      visitedNodes: [...visitOrder],
      frontierNodes: [...queue],
      visitOrder: [...visitOrder],
    });

    const neighbors = graph.edges
      .filter((e) => e.from === current || e.to === current)
      .map((e) => (e.from === current ? e.to : e.from));

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  steps.push({
    currentNode: null,
    visitedNodes: [...visitOrder],
    frontierNodes: [],
    visitOrder: [...visitOrder],
  });

  return steps;
}