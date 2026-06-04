---
title: "Periodicity and Symmetry property of DT signals"
subject: "SIGNALS AND SYSTEMS"
module: "Module 1: 1D Signals  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b136"
status: "completed"
scrapedAt: "2026-05-20T16:15:24.631Z"
---
# SIGNALS AND SYSTEMS - Module 1: 1D Signals - Periodicity and Symmetry of DT Signals

## Introduction

This module focuses on the properties of Discrete-Time (DT) signals. Specifically, we will explore the periodicity and symmetry properties of these signals. Understanding these properties is crucial for analyzing and processing DT signals in various applications.

## Learning Outcomes

Upon completion of this module, you will be able to:

*   Define periodicity in the context of DT signals.
*   Determine if a DT signal is periodic and calculate its fundamental period.
*   Define and identify even (symmetric) and odd (anti-symmetric) DT signals.
*   Decompose a DT signal into its even and odd components.
*   Apply the properties of periodicity and symmetry to simplify signal analysis.

## 1. Periodicity of DT Signals

### 1.1 Definition

A discrete-time signal x[n] is said to be **periodic** if and only if there exists a positive integer N such that:

**x[n] = x[n + N] for all n**

where:

*   `x[n]` is the signal value at discrete time `n`.
*   `N` is the **period** of the signal.
*   The smallest positive integer N that satisfies the above condition is called the **fundamental period**, often denoted by N₀.

### 1.2 Determining Periodicity

To determine if a DT signal x[n] is periodic:

1.  **Check for a pattern:** Visually inspect the signal for a repeating pattern. If a pattern is not apparent, try analyzing the mathematical expression defining the signal.

2.  **Test for the condition:**  Attempt to find an integer N that satisfies x[n] = x[n + N].  If such an N exists, the signal is periodic.

3.  **Fundamental Period:** The smallest positive integer N that satisfies the condition is the fundamental period.

**Important Note:**  A discrete-time sinusoid,  x[n] = A cos(ωn + φ) or  x[n] = A sin(ωn + φ), is *periodic only if ω/2π is a rational number*. That is,

**ω / 2π = p / q**, where p and q are integers.

In this case, the fundamental period N₀ is given by:

**N₀ = q** (assuming p/q is in the simplest form)

### 1.3 Examples

**Example 1: Periodic Signal**

x[n] = cos(πn/4)

ω = π/4, so ω/2π = (π/4) / 2π = 1/8, which is rational (p = 1, q = 8).

Therefore, x[n] is periodic.  The fundamental period is N₀ = 8.

**Example 2: Aperiodic Signal**

x[n] = cos(n)

ω = 1, so ω/2π = 1/2π, which is irrational.

Therefore, x[n] is aperiodic.

**Example 3:  Checking with the definition**
x[n] = {..., 1, 2, 3, 1, 2, 3, ...} repeating forever

x[n] = x[n + 3] for all n. N = 3. So, the signal is periodic, and N₀ = 3.

### 1.4  Important Points to Remember regarding Periodicity

*   Not all DT signals are periodic.
*   The fundamental period must be an *integer*.
*   If you find a value of N that works, but it's not an integer, then the signal is *not* periodic.

## 2. Symmetry of DT Signals

### 2.1 Even Signals (Symmetric)

A discrete-time signal x[n] is said to be **even** or **symmetric** if:

**x[n] = x[-n] for all n**

This means the signal is mirrored about the vertical axis (n=0).

### 2.2 Odd Signals (Anti-Symmetric)

A discrete-time signal x[n] is said to be **odd** or **anti-symmetric** if:

**x[n] = -x[-n] for all n**

This means the signal is mirrored about the vertical axis and then inverted.  An important characteristic of an odd signal is that:

**x[0] = 0**

### 2.3 Examples

**Example 1: Even Signal**

x[n] = n²

x[-n] = (-n)² = n² = x[n]

Therefore, x[n] is even.

**Example 2: Odd Signal**

x[n] = n

x[-n] = -n = -x[n]

Therefore, x[n] is odd.

**Example 3: Neither Even Nor Odd**

x[n] = n + 1

x[-n] = -n + 1

x[-n] ≠ x[n] and x[-n] ≠ -x[n]

Therefore, x[n] is neither even nor odd.

### 2.4 Decomposition into Even and Odd Components

Any discrete-time signal x[n] can be expressed as the sum of its even and odd components:

**x[n] = xₑ[n] + xₒ[n]**

where:

*   xₑ[n] is the even part of x[n]:  **xₑ[n] = (x[n] + x[-n]) / 2**
*   xₒ[n] is the odd part of x[n]:  **xₒ[n] = (x[n] - x[-n]) / 2**

**Example:**

Let x[n] = u[n] (the unit step function: u[n] = 1 for n ≥ 0, u[n] = 0 for n < 0)

xₑ[n] = (u[n] + u[-n]) / 2

xₒ[n] = (u[n] - u[-n]) / 2

### 2.5 Important Points to Remember regarding Symmetry

*   Most signals are neither even nor odd.
*   A signal cannot be both even and odd (except for the trivial signal x[n] = 0 for all n).
*   The decomposition of a signal into its even and odd components is unique.

## 3. Practice Questions/Exercises

**Question 1:** Determine if the following DT signal is periodic and, if so, find its fundamental period:  x[n] = sin(πn/6)

**Answer:**

ω = π/6, ω/2π = (π/6) / 2π = 1/12 (rational)

Therefore, periodic, and N₀ = 12.

**Question 2:** Determine if the following DT signal is periodic and, if so, find its fundamental period: x[n] = cos(√2 * n)

**Answer:**

ω = √2, ω/2π = √2 / 2π (irrational)

Therefore, aperiodic.

**Question 3:**  Determine whether the following signal is even, odd, or neither: x[n] =  n³ + n

**Answer:**

x[-n] = (-n)³ + (-n) = -n³ - n = -(n³ + n) = -x[n]

Therefore, odd.

**Question 4:** Determine whether the following signal is even, odd, or neither: x[n] = |n|

**Answer:**

x[-n] = |-n| = |n| = x[n]

Therefore, even.

**Question 5:** Find the even and odd components of the signal x[n] = aⁿu[n], where |a| < 1 and u[n] is the unit step function.

**Answer:**

xₑ[n] = (x[n] + x[-n]) / 2 = (aⁿu[n] + a⁻ⁿu[-n]) / 2

xₒ[n] = (x[n] - x[-n]) / 2 = (aⁿu[n] - a⁻ⁿu[-n]) / 2

**Question 6:** Is the signal x[n] = n*sin(n) even, odd, or neither?

**Answer:**

x[-n] = -n * sin(-n) = -n * (-sin(n)) = n * sin(n) = x[n]

Therefore, even.

## 4. Summary of Key Concepts

*   **Periodicity:** x[n] = x[n + N] for all n, where N is an integer. Fundamental period N₀ is the smallest such integer.
*   **Periodicity Condition for Sinusoids:** x[n] = A cos(ωn + φ) or x[n] = A sin(ωn + φ) is periodic *only if* ω/2π is rational.
*   **Even Signal (Symmetric):** x[n] = x[-n]
*   **Odd Signal (Anti-Symmetric):** x[n] = -x[-n]  (and x[0] = 0 for odd signals)
*   **Even Component:** xₑ[n] = (x[n] + x[-n]) / 2
*   **Odd Component:** xₒ[n] = (x[n] - x[-n]) / 2
*   **Decomposition:** x[n] = xₑ[n] + xₒ[n]

## 5. Applications

The concepts of periodicity and symmetry are fundamental in signal processing and systems analysis. They allow us to:

*   **Simplify analysis:**  Exploiting symmetry can reduce the complexity of calculations.
*   **Predict signal behavior:** Knowing a signal is periodic allows us to predict its values over time.
*   **Design filters:** Symmetry properties influence the design of filters and other signal processing algorithms.
*   **Analyze frequency content:**  The Fourier Transform is heavily reliant on signal periodicity and symmetry.

This concludes the notes on Periodicity and Symmetry Properties of Discrete-Time Signals.  Understanding these properties is crucial for further studies in signals and systems.
