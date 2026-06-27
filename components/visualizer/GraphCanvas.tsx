import { GraphData, TraversalStep } from "@/types/graph";

type GraphCanvasProps = {
  graph: GraphData;
  step: TraversalStep;
};

export default function GraphCanvas({ graph, step }: GraphCanvasProps) {
  function getNodeColor(nodeId: number): string {
    if (step.currentNode === nodeId) return "var(--color-active)";
    if (step.visitedNodes.includes(nodeId)) return "var(--color-success)";
    if (step.frontierNodes.includes(nodeId)) return "var(--color-default)";
    return "var(--color-structural)";
  }

  return (
    <svg viewBox="0 0 600 320" className="w-full max-w-2xl">
      {graph.edges.map((edge, index) => {
        const fromNode = graph.nodes.find((n) => n.id === edge.from)!;
        const toNode = graph.nodes.find((n) => n.id === edge.to)!;
        return (
          <line
            key={index}
            x1={fromNode.x}
            y1={fromNode.y}
            x2={toNode.x}
            y2={toNode.y}
            stroke="#d4d4d8"
            strokeWidth={2}
          />
        );
      })}

      {graph.nodes.map((node) => (
        <g key={node.id}>
          <circle
            cx={node.x}
            cy={node.y}
            r={20}
            fill={getNodeColor(node.id)}
            stroke={step.currentNode === node.id ? "#18181b" : "none"}
            strokeWidth={3}
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
            {node.id}
          </text>
        </g>
      ))}
    </svg>
  );
}