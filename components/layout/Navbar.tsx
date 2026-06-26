import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex items-center gap-3 h-14 px-4 border-b border-zinc-200 bg-white shrink-0">
      <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
        <span className="text-viz-default">DSA</span>
        <span>Visualizer</span>
      </Link>
      <span className="text-sm text-zinc-500 ml-auto">
        Developed by Abhirup Gumtya
      </span>
    </header>
  );
}