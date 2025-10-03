import { ArrowRight } from "lucide-react";

export function AnimatedArrow() {
  return (
    <div className="relative flex h-8 w-8 items-center justify-center">
      <div
        className="
          absolute h-full w-full rounded-full border border-white
          scale-75 opacity-0 transition-all duration-300 ease-in-out
          group-hover:scale-100 group-hover:opacity-100
        "
      />

      <ArrowRight className="h-5 w-5" />
    </div>
  );
}
