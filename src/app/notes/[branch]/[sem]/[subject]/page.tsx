import React from "react";
import { Metadata } from "next";
import DashboardPage from "@/app/dashboard/page";
import { mockSubjects } from "@/lib/mockData";

interface PageProps {
  params: Promise<{
    branch: string;
    sem: string;
    subject: string;
  }>;
  searchParams: Promise<{
    topic?: string;
  }>;
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const branch = resolvedParams.branch;
  const semStr = resolvedParams.sem;
  const semNum = parseInt(semStr.replace("sem-", ""), 10);
  const subjectIdOrCode = resolvedParams.subject;
  const topicId = resolvedSearchParams.topic;

  // Search by either ID or Code (case-insensitive)
  const subject = mockSubjects.find(
    (s) =>
      s.branchId === branch &&
      s.semester === semNum &&
      (s.id.toLowerCase() === subjectIdOrCode.toLowerCase() ||
        s.code.toLowerCase() === subjectIdOrCode.toLowerCase())
  );

  const subjectTitle = subject ? subject.name : subjectIdOrCode.toUpperCase();
  const subjectCode = subject ? subject.code.toUpperCase() : subjectIdOrCode.toUpperCase();

  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://ktunode.vercel.app").replace(/\/$/, "");
  let title = `${subjectCode} - ${subjectTitle} | KTU ${branch.toUpperCase()} S${semNum} Notes | KTUNODE`;
  let description = `Get module-wise notes, solved question papers, and syllabus tracking for ${subjectCode} - ${subjectTitle} (${branch.toUpperCase()} Semester ${semNum}) on KTUNODE.`;
  let canonicalUrl = `${siteUrl}/${branch}/sem-${semNum}/${subjectIdOrCode.toLowerCase()}`;

  if (topicId && subject) {
    const topic = subject.modules.flatMap(m => m.topics).find(t => t.id === topicId);
    if (topic) {
      title = `${topic.title} - ${subjectCode} (${branch.toUpperCase()} S${semNum}) | KTUNODE`;
      description = `Read comprehensive KTU study notes and exam preparation material on ${topic.title} under ${subjectTitle} (${subjectCode}) on KTUNODE.`;
      canonicalUrl = `${siteUrl}/${branch}/sem-${semNum}/${subjectIdOrCode.toLowerCase()}/${topicId.toLowerCase()}`;
    }
  }

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      images: [
        `/api/og?title=${encodeURIComponent(
          topicId ? title : subjectCode
        )}&subtitle=${encodeURIComponent(
          topicId ? `${subjectCode} • ${subjectTitle}` : subjectTitle
        )}`
      ],
    },
  };
}

export default function SubjectNotesPage() {
  return <DashboardPage />;
}
