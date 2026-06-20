import React from "react";
import { PremiumLayout } from "@/components/layouts/PremiumLayout";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <PremiumLayout>{children}</PremiumLayout>;
}
