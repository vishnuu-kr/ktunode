import { Metadata } from "next";
import { redirect } from "next/navigation";
import path from "path";
import { SITE_URL } from "@/lib/siteConfig";
import { fileExists, readDir, readJsonFile, statIsDir } from "@/lib/fsHelper";

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

  const subjectsDir = path.join(process.cwd(), "src", "data", "subjects");
  if (!fileExists(subjectsDir)) {
    return subjectCache;
  }

  try {
    const folders = readDir(subjectsDir);
    for (const folder of folders) {
      const folderPath = path.join(subjectsDir, folder);
      if (!statIsDir(folderPath)) continue;

      const lastDashIndex = folder.lastIndexOf("-");
      if (lastDashIndex === -1) continue;

      const branchId = folder.substring(0, lastDashIndex);
      const semStr = folder.substring(lastDashIndex + 1);
      const sem = Number(semStr);
      if (isNaN(sem)) continue;

      try {
        const files = readDir(folderPath);
        for (const file of files) {
          if (!file.endsWith(".json")) continue;
          const filePath = path.join(folderPath, file);
          const s = readJsonFile(filePath);
          if (s && s.code) {
            subjectCache.set(s.code.toLowerCase(), {
              code: s.code,
              name: s.name,
              branchId,
              semester: sem,
            });
          }
        }
      } catch {
        // skip corrupt directories or files
      }
      cacheTimestamps.set(folder, now);
    }
  } catch {
    // skip
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
