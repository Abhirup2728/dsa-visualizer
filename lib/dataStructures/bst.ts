export type BSTNode = {
  id: number;
  value: number;
  left: BSTNode | null;
  right: BSTNode | null;
};

let nextId = 1;

export function createNode(value: number): BSTNode {
  return { id: nextId++, value, left: null, right: null };
}

export function insertNode(root: BSTNode | null, value: number): BSTNode {
  if (root === null) return createNode(value);
  if (value < root.value) {
    root.left = insertNode(root.left, value);
  } else if (value > root.value) {
    root.right = insertNode(root.right, value);
  }
  return root;
}

export function searchPath(root: BSTNode | null, value: number): number[] {
  const path: number[] = [];
  let current = root;
  while (current !== null) {
    path.push(current.id);
    if (value === current.value) return path;
    current = value < current.value ? current.left : current.right;
  }
  return path;
}

export function deleteNode(root: BSTNode | null, value: number): BSTNode | null {
  if (root === null) return null;

  if (value < root.value) {
    root.left = deleteNode(root.left, value);
    return root;
  }
  if (value > root.value) {
    root.right = deleteNode(root.right, value);
    return root;
  }

  if (root.left === null) return root.right;
  if (root.right === null) return root.left;

  let successor = root.right;
  while (successor.left !== null) successor = successor.left;
  root.value = successor.value;
  root.right = deleteNode(root.right, successor.value);
  return root;
}

export function assignPositions(
  root: BSTNode | null,
  positions: Map<number, { x: number; y: number }>,
  depth = 0,
  xMin = 20,
  xMax = 580
) {
  if (root === null) return;
  const x = (xMin + xMax) / 2;
  const y = 40 + depth * 70;
  positions.set(root.id, { x, y });
  assignPositions(root.left, positions, depth + 1, xMin, x);
  assignPositions(root.right, positions, depth + 1, x, xMax);
}

export function getAllNodes(root: BSTNode | null): BSTNode[] {
  if (root === null) return [];
  return [...getAllNodes(root.left), root, ...getAllNodes(root.right)];
}