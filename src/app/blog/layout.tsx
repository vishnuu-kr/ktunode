import React from "react";
import { PremiumLayout } from "@/components/layouts/PremiumLayout";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <PremiumLayout>{children}</PremiumLayout>;
}
