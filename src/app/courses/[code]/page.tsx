import { Metadata } from "next";
import { redirect } from "next/navigation";
import fs from "fs";
import path from "path";
import { SITE_URL } from "@/lib/siteConfig";

interface Props {
  params: Promise<{
    code: string;
  }>;
}

/**
 * Searches dynamically through the local JSON subject index files
 * to locate subject details matching the dynamic code parameter.
 */
function findSubjectByCode(code: string) {
  const branches = ["cs", "ec", "me", "ce", "ee"];
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

  for (const branch of branches) {
    for (const sem of semesters) {
      try {
        const filePath = path.join(process.cwd(), "src", "data", "subjects", `${branch}-${sem}.json`);
        if (fs.existsSync(filePath)) {
          const fileContent = fs.readFileSync(filePath, "utf8");
          const subjects = JSON.parse(fileContent);
          if (Array.isArray(subjects)) {
            const found = subjects.find(
              (s) => s.code?.toLowerCase() === code.toLowerCase()
            );
            if (found) {
              return { ...found, branchId: branch, semester: sem };
            }
          }
        }
      } catch (error) {
        // Safe catch to ensure file-read issues do not halt search scan
      }
    }
  }
  return null;
}

/**
 * Dynamically builds page metadata targeting semantic engineering searches.
 * Renders the course code first to align with student search patterns.
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;
  
  const subject = findSubjectByCode(code);
  const subjectName = subject ? subject.name : "Course Details";
  const courseCodeUpper = code.toUpperCase();

  // Primary alphanumeric course code hierarchy first for student queries
  const title = `${courseCodeUpper} | ${subjectName} Notes & Tools | KTU Node`;
  const description = `Access comprehensive KTU study notes, previous year solved questions (PYQs), and syllabus tracker for ${courseCodeUpper} - ${subjectName} (2024 scheme) on KTU Node.`;
  const canonicalUrl = `${SITE_URL}/courses/${code.toLowerCase()}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(courseCodeUpper)}&subtitle=${encodeURIComponent(subjectName)}`,
          width: 1200,
          height: 630,
          alt: `${courseCodeUpper} - ${subjectName} on KTU Node`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/api/og?title=${encodeURIComponent(courseCodeUpper)}&subtitle=${encodeURIComponent(subjectName)}`],
    },
  };
}

/**
 * Server page component redirecting dynamically to the correct branch/semester notes dashboard route.
 */
export default async function CourseDetailPage({ params }: Props) {
  const { code } = await params;
  const subject = findSubjectByCode(code);

  if (subject) {
    // Dynamic redirect to notes dashboard path
    redirect(`/${subject.branchId}/sem-${subject.semester}/${code.toLowerCase()}`);
  } else {
    // Safe fallback to main dashboard
    redirect("/dashboard");
  }
}
