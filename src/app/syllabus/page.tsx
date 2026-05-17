"use client";
import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function Redirect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {
    const params = new URLSearchParams();
    const sem = searchParams.get("sem");
    const branch = searchParams.get("branch");
    if (sem) params.set("sem", sem);
    if (branch) params.set("branch", branch);
    router.replace(`/dashboard${params.toString() ? `?${params.toString()}` : ""}`);
  }, [router, searchParams]);
  return null;
}

export default function SyllabusPage() {
  return (
    <Suspense>
      <Redirect />
    </Suspense>
  );
}
