type EmailFormProps = {
  submitLabel?: string;
  showTerms?: boolean;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function EmailForm({
  submitLabel = "Continue",
  showTerms = false,
  onSubmit,
}: EmailFormProps) {
  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-black px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 transition"
      >
        {submitLabel}
      </button>

      {showTerms ? (
        <p className="text-xs text-neutral-500 text-center leading-relaxed">
          By continuing, you agree to WICKET’s{' '}
          <a href="#" className="underline hover:text-black">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="underline hover:text-black">
            Privacy Policy
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
