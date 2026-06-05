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

  let title = `${subjectCode} - ${branch.toUpperCase()} S${semNum} | KTUNode`;
  let description = `Official notes, syllabus mapping, and exam resources for ${subjectTitle}.`;
  let canonicalUrl = `https://ktunode.com/${branch}/sem-${semNum}/${subjectIdOrCode.toLowerCase()}`;

  if (topicId && subject) {
    const topic = subject.modules.flatMap(m => m.topics).find(t => t.id === topicId);
    if (topic) {
      title = `${topic.title} - ${subjectCode} | KTUNode`;
      description = `Read notes and study resources on ${topic.title} under ${subjectTitle} (${subjectCode}).`;
      canonicalUrl = `https://ktunode.com/${branch}/sem-${semNum}/${subjectIdOrCode.toLowerCase()}/${topicId.toLowerCase()}`;
    }
  }

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: topicId ? title : `${subjectCode} Study Hub`,
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
