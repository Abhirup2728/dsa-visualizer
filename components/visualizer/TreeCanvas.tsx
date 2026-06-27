import { TreeNodeData } from "@/types/tree";

type TreeCanvasProps = {
  tree: TreeNodeData[];
  currentId: number | null;
  visitedIds: number[];
};

export default function TreeCanvas({ tree, currentId, visitedIds }: TreeCanvasProps) {
  function getColor(id: number): string {
    if (id === currentId) return "var(--color-active)";
    if (visitedIds.includes(id)) return "var(--color-success)";
    return "var(--color-default)";
  }

  return (
    <svg viewBox="0 0 600 280" className="w-full max-w-2xl">
      {tree.map((node) => (
        <g key={`edges-${node.id}`}>
          {node.left !== null && (
            <line
              x1={node.x}
              y1={node.y}
              x2={tree.find((n) => n.id === node.left)!.x}
              y2={tree.find((n) => n.id === node.left)!.y}
              stroke="#d4d4d8"
              strokeWidth={2}
            />
          )}
          {node.right !== null && (
            <line
              x1={node.x}
              y1={node.y}
              x2={tree.find((n) => n.id === node.right)!.x}
              y2={tree.find((n) => n.id === node.right)!.y}
              stroke="#d4d4d8"
              strokeWidth={2}
            />
          )}
        </g>
      ))}
      {tree.map((node) => (
        <g key={node.id}>
          <circle
            cx={node.x}
            cy={node.y}
            r={20}
            fill={getColor(node.id)}
            className="transition-all duration-300"
          />
          <text
            x={node.x}
            y={node.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize={14}
            fontWeight={500}
          >
            {node.value}
          </text>
        </g>
      ))}
    </svg>
  );
}