"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { ArrowUp, BookOpen, FileText, Compass, Mail } from "lucide-react";
import Link from "next/link";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// Register ScrollTrigger safely for Next.js SSR
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// -------------------------------------------------------------------------
// 1. THEME-ADAPTIVE INLINE STYLES (KTUNODE Light Theme)
// -------------------------------------------------------------------------
const STYLES = `

.cinematic-footer-wrapper {
  font-family: 'Plus Jakarta Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: var(--color-bg);
  transition: background-color 0.5s ease;
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.animate-footer-scroll-marquee {
  animation: footer-scroll-marquee 40s linear infinite;
}

/* Crisp Blue Grid Background */
.footer-bg-grid {
  background-size: 80px 80px;
  background-image: 
    linear-gradient(to right, rgba(37, 99, 235, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(37, 99, 235, 0.04) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
}

.dark .footer-bg-grid {
  background-image: 
    linear-gradient(to right, rgba(96, 165, 250, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(96, 165, 250, 0.03) 1px, transparent 1px);
}

/* Light Aurora Glow */
.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%, 
    rgba(37, 99, 235, 0.06) 0%, 
    transparent 60%
  );
}

.dark .footer-aurora {
  background: radial-gradient(
    circle at 50% 50%, 
    rgba(96, 165, 250, 0.08) 0%, 
    transparent 60%
  );
}

/* White Glass Pill Theming */
.footer-glass-pill {
  background: var(--color-surface);
  box-shadow: 
    0 4px 20px -2px rgba(37, 99, 235, 0.06), 
    inset 0 0 0 1px var(--color-border);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-glass-pill:hover {
  background: var(--color-sky);
  box-shadow: 
    0 8px 30px -4px rgba(37, 99, 235, 0.12), 
    inset 0 0 0 1px var(--color-accent);
  transform: translateY(-2px);
}

/* Giant Background Text Masking */
.footer-giant-bg-text {
  font-size: clamp(4rem, 24vw, 18rem);
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  overflow: hidden;
  max-width: 100vw;
  -webkit-text-stroke: 1px rgba(37, 99, 235, 0.09);
  background: linear-gradient(180deg, rgba(37, 99, 235, 0.12) 0%, transparent 70%);
  -webkit-background-clip: text;
  background-clip: text;
  transition: -webkit-text-stroke 0.5s ease;
}

.dark .footer-giant-bg-text {
  -webkit-text-stroke: 1px rgba(96, 165, 250, 0.16);
  background: linear-gradient(180deg, rgba(96, 165, 250, 0.22) 0%, transparent 70%);
  -webkit-background-clip: text;
  background-clip: text;
}
`;

// -------------------------------------------------------------------------
// 2. MAGNETIC BUTTON PRIMITIVE
// -------------------------------------------------------------------------
export type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & 
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType;
  };

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      if (window.innerWidth < 768 || window.matchMedia("(hover: none)").matches) return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const w = rect.width / 2;
          const h = rect.height / 2;
          const x = e.clientX - rect.left - h;
          const y = e.clientY - rect.top - w;

          gsap.to(element, {
            x: x * 0.3,
            y: y * 0.3,
            rotationX: -y * 0.1,
            rotationY: x * 0.1,
            scale: 1.05,
            ease: "power2.out",
            duration: 0.4,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1.2,
          });
        };

        element.addEventListener("mousemove", handleMouseMove as EventListener);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          element.removeEventListener("mousemove", handleMouseMove as EventListener);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    },[]);

    return (
      <Component
        ref={(node: HTMLElement | null) => {
          (localRef as React.MutableRefObject<HTMLElement | null>).current = node;
          if (typeof forwardedRef === "function") {
            forwardedRef(node);
          } else if (forwardedRef && "current" in forwardedRef) {
            (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node;
          }
        }}
        className={cn("cursor-pointer", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

// -------------------------------------------------------------------------
// 3. MAIN COMPONENT
// -------------------------------------------------------------------------
const MarqueeItem = () => (
  <div className="flex items-center space-x-12 px-6">
    <span>2024 SCHEME UPDATED</span> <span className="text-blue-300">✦</span>
    <span>SMART DASHBOARD</span> <span className="text-blue-300">✦</span>
    <span>SYLLABUS TRACKER</span> <span className="text-blue-300">✦</span>
    <span>CHAPTER-WISE PYQS</span> <span className="text-blue-300">✦</span>
    <span>INSTANT RESOURCE SEARCH</span> <span className="text-blue-300">✦</span>
  </div>
);

export function CinematicFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      // Background Parallax (Removed scrub, plays on enter)
      gsap.fromTo(
        giantTextRef.current,
        { y: "10vh", scale: 0.9, opacity: 0 },
        {
          y: "0vh",
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Main Content Reveal (Removed scrub, plays on enter)
      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  },[]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      
      <div
        ref={wrapperRef}
        className="relative h-screen w-full bg-background overflow-hidden"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <footer className="fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden text-slate-900 dark:text-slate-100 cinematic-footer-wrapper">
          
          <div className="footer-aurora absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-[50%] blur-[100px] pointer-events-none z-0" />
          <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

          <div
            ref={giantTextRef}
            className="footer-giant-bg-text absolute -bottom-[5vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none"
          >
            KTUNODE
          </div>

          {/* Marquee strip */}
          <div aria-hidden="true" className="absolute top-12 left-0 w-full overflow-hidden border-y border-blue-100 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md py-4 z-10 -rotate-2 scale-x-110 shadow-sm">
            <div className="flex w-max animate-footer-scroll-marquee text-xs md:text-sm font-bold tracking-[0.2em] text-slate-500 dark:text-slate-400 uppercase">
              <MarqueeItem />
              <MarqueeItem />
            </div>
          </div>

          {/* Center Content */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-16 w-full max-w-5xl mx-auto">
            <h2
              ref={headingRef}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-[#1d4ed8] dark:text-blue-400 tracking-tighter mb-10 text-center"
            >
              Ace KTU Exams<br />with KTU Node.
            </h2>

            {/* Footer Navigation Links */}
            <div ref={linksRef} className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 w-full max-w-3xl mb-12 mt-4 text-left">
              {/* Product */}
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1">Product</span>
                <Link href="/notes" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5" /> Notes
                </Link>
                <Link href="/pyqs" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5" /> PYQs
                </Link>
                <Link href="/syllabus" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5" /> Syllabus
                </Link>
              </div>
              {/* Navigate */}
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1">Navigate</span>
                <Link href="/dashboard" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Dashboard
                </Link>
                <Link href="/?landing=true#how-it-works-heading" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  How it Works
                </Link>
                <Link href="/?landing=true#faq-heading" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  FAQ
                </Link>
              </div>
              {/* Social */}
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1">Social</span>
                <a href="https://github.com/vishnuu-kr/ktunode" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                  <GithubIcon className="w-3.5 h-3.5" /> GitHub
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                  <InstagramIcon className="w-3.5 h-3.5" /> Instagram
                </a>
                <a href="mailto:contact@ktunode.com" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5" /> Contact
                </a>
              </div>
              {/* Legal */}
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1">Legal</span>
                <Link href="/privacy" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Terms of Use
                </Link>
                <Link href="/disclaimer" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Disclaimer
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="relative z-20 w-full pb-8 px-8 flex flex-col items-center gap-4">
            {/* Built by foundree — centered, clickable */}
            {/* Built by foundree — centered, clickable */}
            <a
              href="https://foundree.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-glass-pill px-5 py-2.5 rounded-full flex items-center gap-2 group"
            >
              <span className="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest group-hover:text-slate-500 transition-colors">Built by</span>
              <span className="text-slate-800 dark:text-slate-200 font-black text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">foundree</span>
              <span className="text-slate-300 dark:text-slate-600 text-[10px] font-bold">.dev</span>
            </a>

            {/* Bottom row */}
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-slate-400 dark:text-slate-500 text-xs font-semibold tracking-wider uppercase">
                © {new Date().getFullYear()} KTU node. All rights reserved.
              </div>
              <MagneticButton as="button" onClick={scrollToTop} aria-label="Scroll to top" className="footer-glass-pill w-10 h-10 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 group">
                <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300" />
              </MagneticButton>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
