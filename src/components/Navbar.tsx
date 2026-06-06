"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { flushSync } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ArrowRight, LayoutDashboard, UserRound, Sun, Moon, Wrench } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useTheme } from "next-themes";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const { scrollY } = useScroll();
  const lastFired = useRef(0);

  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = (e: React.MouseEvent) => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    
    // Fallback to instant change if not supported or prefers-reduced-motion
    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(nextTheme);
      return;
    }

    const rect = e.currentTarget ? e.currentTarget.getBoundingClientRect() : null;
    const x = rect ? rect.left + rect.width / 2 : (typeof window !== "undefined" ? window.innerWidth / 2 : 0);
    const y = rect ? rect.top + rect.height / 2 : (typeof window !== "undefined" ? window.innerHeight / 2 : 0);

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme);
      });
    });

    transition.ready.then(() => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const radius = Math.max(
        Math.hypot(x, y),
        Math.hypot(w - x, y),
        Math.hypot(x, h - y),
        Math.hypot(w - x, h - y)
      ) + 65;

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 650,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    const checkAuth = () => {
      const loggedIn = localStorage.getItem("ktunode_logged_in") === "true";
      setIsLoggedIn(loggedIn);
      setUserName(localStorage.getItem("ktunode_user_name") || "");
    };

    checkAuth();

    const handleAuthChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        setIsLoggedIn(customEvent.detail.isLoggedIn);
        setUserName(customEvent.detail.userName);
      } else {
        checkAuth();
      }
    };

    window.addEventListener("ktunode-auth-change", handleAuthChange);
    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("ktunode-auth-change", handleAuthChange);
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  const handleSignInClick = () => {
    if (pathname === "/dashboard") {
      window.dispatchEvent(new CustomEvent("ktunode-open-auth"));
    } else {
      router.push("/dashboard?auth=open");
    }
  };

  const handleAvatarClick = () => {
    if (pathname === "/dashboard") {
      window.dispatchEvent(new CustomEvent("ktunode-open-profile"));
    } else {
      router.push("/dashboard?profile=open");
    }
  };

  const getInitials = (name: string) => {
    if (!name) return "KS";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const [clickCount, setClickCount] = useState(0);
  const lastClickTime = useRef(0);

  const handleLogoClick = useCallback(async (e: React.MouseEvent) => {
    // Capture event properties synchronously before any await
    const rect = e.currentTarget ? e.currentTarget.getBoundingClientRect() : null;
    const originX = rect ? (rect.left + rect.width / 2) / (window.innerWidth || 1) : 0.5;
    const originY = rect ? (rect.top + rect.height / 2) / (window.innerHeight || 1) : 0.5;

    const now = Date.now();
    let currentCount = 1;
    if (now - lastClickTime.current < 1200) {
      currentCount = clickCount + 1;
    }
    setClickCount(currentCount);
    lastClickTime.current = now;

    const colors = ["#2E95FF", "#007AFF", "#60a5fa", "#818cf8", "#a78bfa", "#f472b6", "#facc15", "#ffffff"];

    const confetti = (await import("canvas-confetti")).default;

    if (currentCount === 1) {
      // Stage 1: Tiny pop sparkle at click location
      confetti({
        particleCount: 15,
        spread: 25,
        origin: { x: originX, y: originY },
        colors,
        startVelocity: 18,
        gravity: 1.1,
      });
    } else if (currentCount === 2) {
      // Stage 2: Dual corner streams
      confetti({
        particleCount: 40,
        angle: 45,
        spread: 35,
        origin: { x: 0, y: 0.85 },
        colors,
        startVelocity: 45,
      });
      confetti({
        particleCount: 40,
        angle: 135,
        spread: 35,
        origin: { x: 1, y: 0.85 },
        colors,
        startVelocity: 45,
      });
    } else {
      // Stage 3+: Full-screen storm!
      confetti({
        particleCount: 160,
        angle: 90,
        spread: 90,
        origin: { x: 0.5, y: 0.4 },
        colors,
        startVelocity: 55,
        gravity: 0.85,
        scalar: 1.15,
      });
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 45,
          origin: { x: 0.2, y: 0.5 },
          colors,
          startVelocity: 45,
        });
      }, 100);
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 45,
          origin: { x: 0.8, y: 0.5 },
          colors,
          startVelocity: 45,
        });
      }, 200);

      setClickCount(0); // Reset combo
    }
  }, [clickCount]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isDashboardOrNotes = pathname?.startsWith("/dashboard") || pathname?.startsWith("/notes") || pathname?.includes("/sem-");

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] w-full pt-4 pb-2 sm:pt-4 sm:pb-3 transition-all duration-300 pointer-events-none">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`pointer-events-auto relative mx-auto flex w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-w-6xl items-center justify-between rounded-full px-3.5 py-2.5 sm:px-6 sm:py-3 transition-all duration-300 overflow-visible ${
          scrolled
            ? "bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800"
            : "bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800/50"
        }`}
        style={{
          boxShadow: !mounted
            ? undefined
            : scrolled
              ? resolvedTheme === "dark"
                ? "0 12px 40px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.3)"
                : "0 12px 40px rgba(37,99,235,0.15), 0 4px 12px rgba(0,0,0,0.05)"
              : resolvedTheme === "dark"
                ? "0 4px 16px rgba(0,0,0,0.3), 0 1px 3px rgba(0,0,0,0.2)"
                : "0 4px 16px rgba(37,99,235,0.07), 0 1px 3px rgba(0,0,0,0.04)",
        }}
      >
        {/* Logo */}
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-1.5 sm:gap-2 group select-none">
        <Image
          src="/logo.webp"
          alt="KTU node Logo"
          width={28}
          height={28}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-slate-900/10"
        />
        <span className="text-sm sm:text-base font-logo tracking-tight transition-colors duration-200 whitespace-nowrap">
          <span className="font-extrabold text-slate-900 dark:text-slate-100">KTU</span>{" "}
          <span className="font-medium text-slate-500 dark:text-slate-400 group-hover:text-blue-600 group-hover:dark:text-blue-400 transition-colors duration-200">node</span>
        </span>
      </Link>

      {/* Sign In & Dashboard controls */}
      <div className="flex items-center gap-1.5 sm:gap-3">
        {/* Dynamic Theme Toggle Button */}
        {mounted ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="flex h-10 w-10 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 shadow-sm transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer shrink-0"
            aria-label="Toggle dark mode"
            title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
          >
            {resolvedTheme === "dark" ? (
              <Sun className="h-4 w-4 text-amber-500 fill-amber-500/20" />
            ) : (
              <Moon className="h-4 w-4 text-slate-500 fill-slate-500/10" />
            )}
          </motion.button>
        ) : (
          <div className="w-10 h-10 sm:w-9 sm:h-9 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 opacity-40 shrink-0" />
        )}

        {pathname.startsWith("/dashboard") && (
          <>
            {isLoggedIn ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAvatarClick}
                className="relative flex items-center justify-center h-10 w-10 sm:h-9 sm:w-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 border border-white/20 shadow-md text-white font-bold text-xs select-none transition-all duration-300 hover:shadow-blue-500/20 cursor-pointer"
                title={`Logged in as ${userName}`}
                aria-label={`Logged in as ${userName}`}
              >
                {getInitials(userName)}
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white shadow-sm" />
              </motion.button>
            ) : (
              <motion.button
                whileHover="hover"
                whileTap="tap"
                onClick={handleSignInClick}
                className="group flex h-10 sm:h-9 w-10 sm:w-auto items-center justify-center gap-1 sm:gap-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40 px-0 sm:pl-2.5 sm:pr-3.5 text-[10px] sm:text-xs font-black text-slate-600 dark:text-slate-300 shadow-sm transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-blue-50/40 dark:hover:bg-blue-950/40 hover:text-blue-650 dark:hover:text-blue-400 cursor-pointer whitespace-nowrap"
                title="Sign In"
                aria-label="Sign In"
              >
                <motion.div
                  variants={{
                    hover: { rotate: [0, -8, 8, -8, 8, 0], transition: { duration: 0.45 } }
                  }}
                >
                  <UserRound className="h-3.5 w-3.5 sm:h-3.5 sm:w-3.5 text-slate-400 group-hover:text-blue-500 transition-colors duration-200" />
                </motion.div>
                <span className="hidden sm:inline">Sign In</span>
              </motion.button>
            )}

            <div className="w-[1px] h-4 bg-slate-200/80 dark:bg-slate-800 mx-0.5" />
          </>
        )}

        {isActive("/tools") ? (
          <button
            type="button"
            className="inline-flex h-10 sm:h-9 w-10 sm:w-auto items-center justify-center gap-1 sm:gap-2 rounded-full border border-violet-100 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 px-0 sm:px-3.5 text-[10px] sm:text-xs font-black text-slate-600 dark:text-slate-300 shadow-sm whitespace-nowrap"
            aria-label="Tools"
            title="Tools"
            aria-current="page"
          >
            <Wrench className="h-3.5 w-3.5 sm:h-3.5 sm:w-3.5 text-violet-500" />
            <span className="hidden sm:inline">Tools</span>
          </button>
        ) : (
          <Link
            href="/tools"
            className="inline-flex h-10 sm:h-9 w-10 sm:w-auto items-center justify-center gap-1 sm:gap-2 rounded-full border border-slate-200/80 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40 px-0 sm:px-3.5 text-[10px] sm:text-xs font-black text-slate-500 dark:text-slate-400 shadow-sm whitespace-nowrap transition-all duration-200 hover:border-violet-200 dark:hover:border-violet-800 hover:text-violet-600 dark:hover:text-violet-400"
            title="Tools"
            aria-label="Tools"
          >
            <Wrench className="h-3.5 w-3.5 sm:h-3.5 sm:w-3.5" />
            <span className="hidden sm:inline">Tools</span>
          </Link>
        )}

        {isActive("/dashboard") ? (
          <button
            type="button"
            className="inline-flex h-10 sm:h-9 w-10 sm:w-auto items-center justify-center gap-1 sm:gap-2 rounded-full border border-blue-100 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 px-0 sm:px-3.5 text-[10px] sm:text-xs font-black text-slate-600 dark:text-slate-300 shadow-sm whitespace-nowrap animate-none"
            aria-label="Dashboard"
            title="Dashboard"
            aria-current="page"
          >
            <LayoutDashboard className="h-3.5 w-3.5 sm:h-3.5 sm:w-3.5 text-blue-500" />
            <span className="hidden sm:inline">Dashboard</span>
          </button>
        ) : (
          <MagneticButton href="/dashboard" aria-label="Dashboard" className="!h-10 sm:!h-9 !w-10 sm:!w-auto flex items-center justify-center !py-0 !px-0 sm:!px-4 !text-[10px] sm:!text-xs whitespace-nowrap" customShadow="shadow-none">
            <LayoutDashboard className="h-3.5 w-3.5 block sm:hidden text-white" />
            <span className="hidden sm:inline">Dashboard</span>
            <ArrowRight className="w-3 h-3 hidden sm:inline" />
          </MagneticButton>
        )}
      </div>
      </motion.header>
    </div>
  );
}
