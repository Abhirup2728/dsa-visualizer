type ArrayBarProps = {
  value: number;
  maxValue: number;
  isComparing: boolean;
  isSorted: boolean;
};

export default function ArrayBar({
  value,
  maxValue,
  isComparing,
  isSorted,
}: ArrayBarProps) {
  const heightPercent = (value / maxValue) * 100;

  let colorClass = "bg-viz-default";
  if (isSorted) colorClass = "bg-viz-success";
  else if (isComparing) colorClass = "bg-viz-active";

  return (
    <div className="flex flex-col items-center justify-end h-full flex-1">
      <span className="text-xs text-zinc-600 mb-1">{value}</span>
      <div
        className={`w-full rounded-t transition-all duration-300 ${colorClass} ${
          isComparing ? "border-2 border-zinc-900" : ""
        }`}
        style={{ height: `${heightPercent}%` }}
      />
    </div>
  );
}