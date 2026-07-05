export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="w-fit border border-line bg-paper px-2.5 py-1 font-mono text-[11px] tracking-[0.05em]">
      {children}
    </span>
  );
}
