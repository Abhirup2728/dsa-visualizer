type SearchBarProps = {
  value: number;
  maxValue: number;
  isCurrent: boolean;
  isFound: boolean;
  isEliminated: boolean;
};

export default function SearchBar({
  value,
  maxValue,
  isCurrent,
  isFound,
  isEliminated,
}: SearchBarProps) {
  const heightPercent = (value / maxValue) * 100;

  let colorClass = "bg-viz-default";
  if (isFound) colorClass = "bg-viz-success";
  else if (isCurrent) colorClass = "bg-viz-active";
  else if (isEliminated) colorClass = "bg-viz-structural opacity-40";

  return (
    <div className="flex flex-col items-center justify-end h-full flex-1">
      <span className="text-xs text-zinc-600 mb-1">{value}</span>
      <div
        className={`w-full rounded-t transition-all duration-300 ${colorClass} ${
          isCurrent ? "border-2 border-zinc-900" : ""
        }`}
        style={{ height: `${heightPercent}%` }}
      />
    </div>
  );
}