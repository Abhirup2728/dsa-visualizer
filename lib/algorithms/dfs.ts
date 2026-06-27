import { GraphData, TraversalStep } from "@/types/graph";

export function dfsWithSteps(graph: GraphData, startId: number): TraversalStep[] {
  const steps: TraversalStep[] = [];
  const visited = new Set<number>();
  const visitOrder: number[] = [];

  function getNeighbors(nodeId: number): number[] {
    return graph.edges
      .filter((e) => e.from === nodeId || e.to === nodeId)
      .map((e) => (e.from === nodeId ? e.to : e.from));
  }

  function visit(nodeId: number, frontier: number[]) {
    visited.add(nodeId);
    visitOrder.push(nodeId);

    steps.push({
      currentNode: nodeId,
      visitedNodes: [...visitOrder],
      frontierNodes: [...frontier],
      visitOrder: [...visitOrder],
    });

    const neighbors = getNeighbors(nodeId);
    const unvisitedNeighbors = neighbors.filter((n) => !visited.has(n));

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        const remainingFrontier = unvisitedNeighbors.filter((n) => n !== neighbor);
        visit(neighbor, remainingFrontier);
      }
    }
  }

  visit(startId, []);

  steps.push({
    currentNode: null,
    visitedNodes: [...visitOrder],
    frontierNodes: [],
    visitOrder: [...visitOrder],
  });

  return steps;
}