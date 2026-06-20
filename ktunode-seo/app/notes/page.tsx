/**
 * app/notes/page.tsx  (EXAMPLE — adapt to your existing /notes page)
 * ---------------------------------------------------------------------------
 * Shows the correct pattern: SELF-canonical (/notes -> /notes, NOT homepage),
 * a unique title, an <h1>, and a FAQ block for AEO. Keep your existing UI /
 * client components; just wrap them and add this metadata + schema.
 * ---------------------------------------------------------------------------
 */
import { buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, faqSchema, breadcrumbSchema } from "@/components/seo/schema";

export const metadata = buildMetadata({
  title: "KTU Notes — Module-wise Study Notes for 2024 Scheme",
  description:
    "Download free module-wise KTU notes for the 2024 B.Tech scheme. Clean, exam-focused notes for CSE, ECE, ME, CE & EEE across all semesters.",
  path: "/notes", // <-- self-canonical fix
});

const faqs = [
  {
    question: "Are KTU notes on KTUNODE free?",
    answer:
      "Yes. All KTU notes on KTUNODE are completely free and no account or login is required.",
  },
  {
    question: "Are the notes updated for the KTU 2024 scheme?",
    answer:
      "Yes. Every note set is structured module-by-module and updated for the APJ Abdul Kalam Technological University 2024 B.Tech scheme.",
  },
  {
    question: "Which branches are covered?",
    answer:
      "KTUNODE covers Computer Science (CSE), Electronics & Communication (ECE), Mechanical (ME), Civil (CE) and Electrical & Electronics (EEE) across all semesters.",
  },
];

export default function NotesPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <JsonLd
        data={graph(
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Notes", path: "/notes" },
          ])
        )}
      />

      {/* Add ONE descriptive H1 (the audit found /notes had no h1). */}
      <h1 className="text-3xl font-bold tracking-tight">
        KTU Notes — 2024 Scheme
      </h1>
      <p className="mt-2 text-muted-foreground">
        Free, module-wise, exam-focused notes for every KTU B.Tech branch and semester.
      </p>

      {/* ===== Your existing notes browser / client components go here ===== */}
      {/* <NotesBrowser /> */}

      {/* Visible FAQ reinforces the FAQ schema above (AEO best practice). */}
      <section className="mt-16" aria-labelledby="notes-faq">
        <h2 id="notes-faq" className="text-2xl font-bold">Frequently Asked Questions</h2>
        <dl className="mt-4 space-y-6">
          {faqs.map((f, i) => (
            <div key={i}>
              <dt className="font-semibold">{f.question}</dt>
              <dd className="mt-1 text-muted-foreground">{f.answer}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
