import Link from "next/link";
import { AuthHeader, OAuthButtons, Divider, EmailForm } from "@/components/auth";

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <AuthHeader title="WICKET" subtitle="Welcome back! Please login to your account." />

      <OAuthButtons />

      <Divider />

      <EmailForm submitLabel="Continue" />

      {/* Links */}
      <div className="flex justify-between text-sm">
        <Link
          href="/forgot-password"
          className="text-neutral-500 hover:text-black transition"
        >
          Forgot password?
        </Link>

        <Link
          href="/signup"
          className="font-medium hover:underline"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}