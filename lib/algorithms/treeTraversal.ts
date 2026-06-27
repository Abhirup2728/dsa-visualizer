import { TreeNodeData } from "@/types/tree";

export type TreeTraversalStep = {
  currentId: number | null;
  visitedIds: number[];
};

function findNode(tree: TreeNodeData[], id: number | null): TreeNodeData | undefined {
  if (id === null) return undefined;
  return tree.find((n) => n.id === id);
}

export function inorderWithSteps(tree: TreeNodeData[]): TreeTraversalStep[] {
  const steps: TreeTraversalStep[] = [];
  const visited: number[] = [];

  function visit(id: number | null) {
    const node = findNode(tree, id);
    if (!node) return;
    visit(node.left);
    visited.push(node.id);
    steps.push({ currentId: node.id, visitedIds: [...visited] });
    visit(node.right);
  }

  visit(0);
  steps.push({ currentId: null, visitedIds: [...visited] });
  return steps;
}

export function preorderWithSteps(tree: TreeNodeData[]): TreeTraversalStep[] {
  const steps: TreeTraversalStep[] = [];
  const visited: number[] = [];

  function visit(id: number | null) {
    const node = findNode(tree, id);
    if (!node) return;
    visited.push(node.id);
    steps.push({ currentId: node.id, visitedIds: [...visited] });
    visit(node.left);
    visit(node.right);
  }

  visit(0);
  steps.push({ currentId: null, visitedIds: [...visited] });
  return steps;
}

export function postorderWithSteps(tree: TreeNodeData[]): TreeTraversalStep[] {
  const steps: TreeTraversalStep[] = [];
  const visited: number[] = [];

  function visit(id: number | null) {
    const node = findNode(tree, id);
    if (!node) return;
    visit(node.left);
    visit(node.right);
    visited.push(node.id);
    steps.push({ currentId: node.id, visitedIds: [...visited] });
  }

  visit(0);
  steps.push({ currentId: null, visitedIds: [...visited] });
  return steps;
}