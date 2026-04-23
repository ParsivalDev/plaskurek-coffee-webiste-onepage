import { Wheat } from "@/components/Icons";

export default function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto flex max-w-6xl items-center justify-center gap-4 px-6 py-6 md:px-10"
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[color:rgba(178,135,73,0.35)]" />
      <Wheat className="text-[color:var(--wheat-500)]" size={22} />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[color:rgba(178,135,73,0.35)]" />
    </div>
  );
}
