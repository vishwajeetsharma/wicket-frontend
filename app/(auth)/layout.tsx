import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="w-full max-w-md px-6">
        {children}

        {/* Footer */}
        <p className="mt-10 text-center text-xs text-neutral-500">
          Powered by <span className="font-medium">WICKET</span>
        </p>
      </div>
    </div>
  );
}