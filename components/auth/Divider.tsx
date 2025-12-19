export default function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="h-px flex-1 bg-neutral-200" />
      <span className="text-xs text-neutral-400">OR</span>
      <div className="h-px flex-1 bg-neutral-200" />
    </div>
  );
}
