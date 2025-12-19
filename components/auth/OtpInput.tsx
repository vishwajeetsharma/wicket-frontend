type OtpInputProps = {
  length?: number;
};

export default function OtpInput({ length = 6 }: OtpInputProps) {
  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          type="text"
          inputMode="numeric"
          maxLength={1}
          className="h-12 w-10 rounded-lg border border-neutral-300 text-center text-lg font-medium focus:outline-none focus:ring-2 focus:ring-black"
        />
      ))}
    </div>
  );
}