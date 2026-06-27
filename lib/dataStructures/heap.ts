export function insertIntoHeap(heap: number[], value: number): number[] {
  const next = [...heap, value];
  let i = next.length - 1;

  while (i > 0) {
    const parent = Math.floor((i - 1) / 2);
    if (next[parent] > next[i]) {
      [next[parent], next[i]] = [next[i], next[parent]];
      i = parent;
    } else {
      break;
    }
  }
  return next;
}

export function extractMin(heap: number[]): number[] {
  if (heap.length === 0) return heap;
  const next = [...heap];
  const last = next.pop()!;

  if (next.length === 0) return next;

  next[0] = last;
  let i = 0;

  while (true) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let smallest = i;

    if (left < next.length && next[left] < next[smallest]) smallest = left;
    if (right < next.length && next[right] < next[smallest]) smallest = right;

    if (smallest === i) break;

    [next[i], next[smallest]] = [next[smallest], next[i]];
    i = smallest;
  }

  return next;
}

export function getNodePositions(heap: number[]): { x: number; y: number }[] {
  return heap.map((_, i) => {
    const depth = Math.floor(Math.log2(i + 1));
    const levelStart = Math.pow(2, depth) - 1;
    const posInLevel = i - levelStart;
    const totalInLevel = Math.pow(2, depth);
    const width = 580;
    const x = (width / (totalInLevel + 1)) * (posInLevel + 1) + 10;
    const y = 40 + depth * 65;
    return { x, y };
  });
}