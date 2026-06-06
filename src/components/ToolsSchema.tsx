import React from "react";

/**
 * ToolsSchema Component
 * Injecting high-validity FAQPage and SoftwareApplication JSON-LD schemas
 * dynamically targeting APJAKTU B.Tech 2024 scheme student search queries.
 */
export function ToolsSchema() {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://ktunode.vercel.app").replace(/\/$/, "");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How is attendance calculated in KTU 2024 scheme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In the APJAKTU B.Tech 2024 scheme, students must maintain a minimum of 75% attendance to be eligible to write the End Semester Examinations (ESE). The KTU Attendance Guard bunk planner calculates your current attendance percentage based on classes attended and total hours conducted, and dynamically determines how many subsequent classes you can safely bunk or must attend to meet the 75% target."
        }
      },
      {
        "@type": "Question",
        "name": "What are the passing marks requirements for KTU exams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under the APJAKTU 2024 regulations, a student must secure a minimum of 40% in the End Semester Examination (ESE) and a total aggregate of 50% (combining both Continuous Internal Evaluation/CIE and ESE) to pass a theory course. The Internal Marks Target Finder helps you input your internals and calculate the exact score you need in the final exam to pass."
        }
      },
      {
        "@type": "Question",
        "name": "How is the SGPA calculated in the KTU 2024 scheme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Semester Grade Point Average (SGPA) is calculated as the sum of the product of credits and grade points earned in all courses divided by the total credits registered in that semester. The KTU SGPA Matrix allows you to input grades for your courses and automatically calculates your GPA based on the exact credit weightings specified in the 2024 scheme curriculum."
        }
      }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "KTU Node Engineering Utilities",
    "operatingSystem": "All",
    "applicationCategory": "EducationalApplication",
    "browserRequirements": "Requires HTML5 compatible web browser.",
    "url": `${siteUrl}/tools`,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "description": "Zero-auth utility tool suite for APJAKTU B.Tech engineering students. Includes the Attendance Guard bunk planner, SGPA Matrix grade calculator, and Internal Marks Target Finder."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  );
}
