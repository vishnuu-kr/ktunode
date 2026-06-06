import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { readSiteConfig, SITE_URL } from "@/lib/siteConfig";

/**
 * Dynamic sitemap generator that loops through all branches and semesters
 * and maps course layout structures using the local JSON schema data.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const config = readSiteConfig();
  const baseUrl = SITE_URL;
  const now = new Date().toISOString();

  // 1. Core static routes derived from src/app structure
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/dashboard`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/notes`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/syllabus`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pyqs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const branches = config.allowedBranches.length > 0 ? config.allowedBranches : ["cs", "ec", "me", "ce", "ee"];
  const semesters = config.visibleSemesters.length > 0 ? config.visibleSemesters : [1, 2, 3, 4, 5, 6, 7, 8];

  // 2. Loop through local JSON index files to dynamically generate semester and subject routes
  for (const branch of branches) {
    for (const sem of semesters) {
      // Add semester-level landing page (e.g., /cs/sem-4)
      routes.push({
        url: `${baseUrl}/${branch}/sem-${sem}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      });

      try {
        const filePath = path.join(process.cwd(), "src", "data", "subjects", `${branch}-${sem}.json`);
        
        if (fs.existsSync(filePath)) {
          const fileContent = fs.readFileSync(filePath, "utf8");
          const subjects = JSON.parse(fileContent);

          if (Array.isArray(subjects)) {
            for (const subject of subjects) {
              if (subject.code) {
                const subjectCode = subject.code.toLowerCase();
                // Add subject-level detail page (e.g., /cs/sem-4/pccst402)
                routes.push({
                  url: `${baseUrl}/${branch}/sem-${sem}/${subjectCode}`,
                  lastModified: now,
                  changeFrequency: "weekly",
                  priority: 0.7,
                });

                if (Array.isArray(subject.modules)) {
                  for (const mod of subject.modules) {
                    if (!Array.isArray(mod.topics)) continue;
                    for (const topic of mod.topics) {
                      if (topic?.id) {
                        routes.push({
                          url: `${baseUrl}/${branch}/sem-${sem}/${subjectCode}/${topic.id}`,
                          lastModified: now,
                          changeFrequency: "monthly",
                          priority: 0.55,
                        });
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } catch (error) {
        console.error(`Sitemap: Failed to parse index for ${branch}-sem-${sem}:`, error);
      }
    }
  }

  return routes;
}
