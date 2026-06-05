import React from "react";
import { Metadata } from "next";
import DashboardPage from "@/app/dashboard/page";

interface PageProps {
  params: Promise<{
    branch: string;
    sem: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const branch = resolvedParams.branch;
  const semStr = resolvedParams.sem;
  const semNum = parseInt(semStr.replace("sem-", ""), 10);

  const branchLabel = branch.toUpperCase();
  const title = `KTU ${branchLabel} Semester ${semNum} Notes, Syllabus & PYQs | KTUNODE`;
  const description = `Download module-wise KTU notes, syllabus tracker, and previous year question papers for ${branchLabel} Semester ${semNum} (2024 scheme) on KTUNODE.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://ktunode.com/${branch}/sem-${semNum}`,
    },
    openGraph: {
      title,
      description,
      images: ["/og-main.webp"],
    },
  };
}

export default function SemesterNotesPage() {
  return <DashboardPage />;
}
