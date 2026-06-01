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

  return {
    title: `${branchLabel} Semester ${semNum} Study Hub | KTUNode`,
    description: `Access notes, syllabus details, past questions, and focus tools for ${branchLabel} S${semNum}.`,
    alternates: {
      canonical: `https://ktunode.com/${branch}/sem-${semNum}`,
    },
    openGraph: {
      title: `${branchLabel} Semester ${semNum} Study Hub`,
      description: `The minimalist exam companion for KTU ${branchLabel} students.`,
    },
  };
}

export default function SemesterNotesPage() {
  return <DashboardPage />;
}
