/**
 * components/blog/mdx-components.tsx
 * ---------------------------------------------------------------------------
 * Maps MDX elements to styled, accessible, SEO-friendly components.
 * - next/link for internal links (faster nav, no full reload)
 * - next/image for images (lazy, responsive, WebP/AVIF)
 * - explicit ids on headings so AI engines + anchor links can target sections
 * ---------------------------------------------------------------------------
 */
import Link from "next/link";
import Image from "next/image";
import type { ComponentProps } from "react";

function slugify(children: React.ReactNode): string {
  return String(children)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const mdxComponents = {
  h2: ({ children, ...props }: ComponentProps<"h2">) => (
    <h2 id={slugify(children)} className="mt-10 scroll-mt-24 text-2xl font-bold" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: ComponentProps<"h3">) => (
    <h3 id={slugify(children)} className="mt-8 scroll-mt-24 text-xl font-semibold" {...props}>
      {children}
    </h3>
  ),
  a: ({ href = "", children, ...props }: ComponentProps<"a">) => {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link href={href} className="font-medium underline underline-offset-4" {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer"
         className="font-medium underline underline-offset-4" {...props}>
        {children}
      </a>
    );
  },
  img: ({ src = "", alt = "", ...props }: ComponentProps<"img">) => (
    <Image
      src={src as string}
      alt={alt}                 // ALWAYS write descriptive alt in your MDX
      width={1200}
      height={630}
      className="rounded-lg"
      {...(props as Record<string, unknown>)}
    />
  ),
};
