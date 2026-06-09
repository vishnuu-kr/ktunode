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

const subjectCache = new Map<string, { code: string; name: string; branchId: string; semester: number } | null>();
const CACHE_TTL = 60_000;
const cacheTimestamps = new Map<string, number>();

function getSubjectIndex() {
  const now = Date.now();
  if (subjectCache.size > 0) {
    const oldest = Math.min(...cacheTimestamps.values());
    if (now - oldest < CACHE_TTL) {
      return subjectCache;
    }
  }
  subjectCache.clear();
  cacheTimestamps.clear();

  const branches = ["cs", "ec", "me", "ce", "ee"];
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

  for (const branch of branches) {
    for (const sem of semesters) {
      const cacheKey = `${branch}-${sem}`;
      try {
        const filePath = path.join(process.cwd(), "src", "data", "subjects", `${cacheKey}.json`);
        if (fs.existsSync(filePath)) {
          const fileContent = fs.readFileSync(filePath, "utf8");
          const subjects = JSON.parse(fileContent);
          if (Array.isArray(subjects)) {
            for (const s of subjects) {
              if (s.code) {
                subjectCache.set(s.code.toLowerCase(), { code: s.code, name: s.name, branchId: branch, semester: sem });
              }
            }
          }
        }
      } catch {
        // skip corrupt files
      }
      cacheTimestamps.set(cacheKey, now);
    }
  }
  return subjectCache;
}

function findSubjectByCode(code: string) {
  const index = getSubjectIndex();
  return index.get(code.toLowerCase()) || null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;
  
  const subject = findSubjectByCode(code);
  const subjectName = subject ? subject.name : "Course Details";
  const courseCodeUpper = code.toUpperCase();

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

export default async function CourseDetailPage({ params }: Props) {
  const { code } = await params;
  const subject = findSubjectByCode(code);

  if (subject) {
    redirect(`/${subject.branchId}/sem-${subject.semester}/${code.toLowerCase()}`);
  } else {
    redirect("/dashboard");
  }
}
