type AuthHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export default function AuthHeader({ title, subtitle, className = "" }: AuthHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
      {subtitle ? (
        <p className="mt-2 text-sm text-neutral-500">{subtitle}</p>
      ) : null}
    </div>
  );
}
