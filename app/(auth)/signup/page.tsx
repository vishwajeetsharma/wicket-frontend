import Link from "next/link";
import { AuthHeader, OAuthButtons, Divider, EmailForm } from "@/components/auth";

export default function SignupPage() {
  return (
    <div className="space-y-6">
      <AuthHeader title="Create account" subtitle="Get started in seconds" />

      <OAuthButtons action="Sign up" />

      <Divider />

      <EmailForm submitLabel="Continue" showTerms />

      {/* Login link */}
      <p className="text-sm text-center">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
