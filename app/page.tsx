export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-8">
      <h1 className="text-2xl font-semibold">Color palette test</h1>
      <div className="flex gap-4">
        <div className="w-20 h-20 rounded bg-viz-default flex items-center justify-center text-white text-sm">
          default
        </div>
        <div className="w-20 h-20 rounded bg-viz-active flex items-center justify-center text-white text-sm">
          active
        </div>
        <div className="w-20 h-20 rounded bg-viz-success flex items-center justify-center text-white text-sm">
          success
        </div>
        <div className="w-20 h-20 rounded bg-viz-error flex items-center justify-center text-white text-sm">
          error
        </div>
        <div className="w-20 h-20 rounded bg-viz-structural flex items-center justify-center text-white text-sm">
          structural
        </div>
      </div>
    </div>
  );
}