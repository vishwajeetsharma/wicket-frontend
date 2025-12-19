type Provider = {
  id: string;
  label: string;
};

type OAuthButtonsProps = {
  providers?: Provider[];
  action?: string; // e.g., "Continue" or "Sign up"
  className?: string;
};

export default function OAuthButtons({
  providers = [
    { id: "google", label: "Google" },
    { id: "github", label: "GitHub" },
  ],
  action = "Continue",
  className = "",
}: OAuthButtonsProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {providers.map((p) => (
        <button
          key={p.id}
          className="w-full rounded-full border border-black px-4 py-2.5 text-sm font-medium hover:bg-black hover:text-white transition"
          // Placeholder: replace with real handlers or link when integrating
          type="button"
          aria-label={`${action} with ${p.label}`}
        >
          {action} with {p.label}
        </button>
      ))}
    </div>
  );
}
