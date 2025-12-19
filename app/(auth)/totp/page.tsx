import OtpPage from "@/components/auth/OtpPage";

export default function TotpPage() {
  return (
    <OtpPage
      title="Enter authentication code"
      description="Enter the 6-digit code from your authenticator app."
      showResend={false}
    />
  );
}
