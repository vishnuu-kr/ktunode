import React from "react";
import { Metadata } from "next";
import DashboardPage from "@/app/dashboard/page";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, courseSchema, breadcrumbSchema, faqSchema } from "@/components/seo/schema";

interface PageProps {
  params: Promise<{
    branch: string;
    sem: string;
  }>;
}

function getBranch(code: string) {
  return siteConfig.branches.find((b) => b.code === code.toLowerCase());
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const branch = resolvedParams.branch;
  const semStr = resolvedParams.sem;
  const semNum = parseInt(semStr.replace("sem-", ""), 10) || semStr;

  const b = getBranch(branch);
  if (!b) return buildMetadata({ title: "Not found", path: `/${branch}/sem-${semNum}`, noindex: true });

  return buildMetadata({
    absoluteTitle: `KTU ${b.short} Semester ${semNum} Notes, Syllabus & PYQs | ${siteConfig.name}`,
    description: `Download module-wise KTU notes, syllabus tracker, and previous year question papers for ${b.name} Semester ${semNum} (2024 scheme) on KTUNODE.`,
    path: `/${branch}/sem-${semNum}`,
  });
}

export default async function SemesterNotesPage({ params }: PageProps) {
  const resolvedParams = await params;
  const branch = resolvedParams.branch;
  const semStr = resolvedParams.sem;
  const semNum = parseInt(semStr.replace("sem-", ""), 10) || semStr;
  
  const b = getBranch(branch);
  
  if (b) {
    const path = `/${branch}/sem-${semNum}`;
    const faqs = [
      {
        question: `Where can I get KTU ${b.short} semester ${semNum} notes for the 2024 scheme?`,
        answer: `You can download free module-wise ${b.short} semester ${semNum} notes for the KTU 2024 scheme on KTUNODE at ${siteConfig.url}${path}. No login required.`,
      },
      {
        question: `Does KTUNODE have previous year question papers for ${b.short} semester ${semNum}?`,
        answer: `Yes. KTUNODE provides previous year question papers (PYQs) alongside notes and syllabus for ${b.short} semester ${semNum}.`,
      },
    ];

    return (
      <>
        <JsonLd
          data={graph(
            courseSchema({
              name: `KTU ${b.short} Semester ${semNum} — 2024 Scheme`,
              description: `Module-wise notes, syllabus and PYQs for KTU ${b.name} semester ${semNum}.`,
              path,
            }),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: b.short, path: `/${branch}/sem-1` },
              { name: `Semester ${semNum}`, path },
            ]),
            faqSchema(faqs)
          )}
        />
        <h1 className="sr-only">KTU {b.short} Semester {semNum} — Notes, Syllabus & PYQs</h1>
        <DashboardPage />
      </>
    );
  }

  return <DashboardPage />;
}
