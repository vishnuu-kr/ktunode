/**
 * components/seo/schema.ts
 * ---------------------------------------------------------------------------
 * Typed builders for schema.org JSON-LD. Rich structured data is the #1 lever
 * for AEO (Answer Engines) and GEO (Generative Engines / AI Overviews):
 * it lets Google, Bing, ChatGPT, Perplexity & Gemini extract facts confidently.
 *
 * Render the objects returned here with <JsonLd> (see JsonLd.tsx).
 * ---------------------------------------------------------------------------
 */
import { siteConfig, absoluteUrl } from "@/lib/site";

const ORG_ID = `${siteConfig.url}/#organization`;
const SITE_ID = `${siteConfig.url}/#website`;

/** Organization — describes the brand. Include once (root layout). */
export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: { "@type": "ImageObject", url: absoluteUrl(siteConfig.logo) },
    description: siteConfig.description,
    email: siteConfig.email,
    sameAs: siteConfig.social,
  };
}

/** WebSite + Sitelinks Search Box. Include once (root layout). */
export function webSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/notes?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** EducationalOrganization flavour — clarifies the niche for AI engines. */
export function educationalOrgSchema() {
  return {
    "@type": "EducationalOrganization",
    "@id": ORG_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    description:
      "KTUNODE provides free study resources for B.Tech students of APJ Abdul Kalam Technological University (KTU) under the 2024 scheme.",
    knowsAbout: [
      "KTU 2024 scheme",
      "B.Tech notes",
      "Previous year question papers",
      "Engineering syllabus",
      "APJ Abdul Kalam Technological University",
    ],
  };
}

/** BreadcrumbList — shows path in search results & helps crawlers + AI. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

/** FAQPage — THE most important schema for AEO. Powers "People Also Ask"
 *  and is heavily cited by ChatGPT/Perplexity. Add to any page with Q&A. */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** HowTo — great for "How to prepare for KTU exams" style guides (AEO). */
export function howToSchema(input: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
  totalTime?: string; // ISO 8601 duration, e.g. "PT2H"
}) {
  return {
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    ...(input.totalTime ? { totalTime: input.totalTime } : {}),
    step: input.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

/** Article / BlogPosting — required for every blog post. */
export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  tags?: string[];
}) {
  return {
    "@type": "BlogPosting",
    "@id": `${absoluteUrl(input.path)}#article`,
    headline: input.title,
    description: input.description,
    image: input.image.startsWith("http") ? input.image : absoluteUrl(input.image),
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    inLanguage: siteConfig.language,
    author: {
      "@type": "Person",
      name: input.authorName ?? siteConfig.authorName,
      url: siteConfig.authorUrl,
    },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(input.path) },
    ...(input.tags ? { keywords: input.tags.join(", ") } : {}),
  };
}

/** Course — for a branch+semester landing page (e.g. /cs/sem-1). */
export function courseSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@type": "Course",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: { "@id": ORG_ID },
    inLanguage: siteConfig.language,
    isAccessibleForFree: true,
  };
}

/** Wrap one or more schema objects into a single @graph document. */
export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
