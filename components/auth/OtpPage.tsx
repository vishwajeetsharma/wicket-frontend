import OtpInput from "./OtpInput";

type OtpPageProps = {
  title: string;
  description: string;
  showResend?: boolean;
};

export default function OtpPage({ title, description, showResend }: OtpPageProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-2 text-sm text-neutral-500">{description}</p>
      </div>

      {/* OTP input */}
      <OtpInput />

      {/* Continue button */}
      <button
        type="button"
        className="w-full rounded-full bg-black px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 transition"
      >
        Continue
      </button>

      {/* Resend (optional) */}
      {showResend && (
        <p className="text-center text-sm text-neutral-500">
          Didn’t receive the code?{" "}
          <button className="font-medium hover:underline text-black">
            Resend
          </button>
        </p>
      )}
    </div>
  );
}
