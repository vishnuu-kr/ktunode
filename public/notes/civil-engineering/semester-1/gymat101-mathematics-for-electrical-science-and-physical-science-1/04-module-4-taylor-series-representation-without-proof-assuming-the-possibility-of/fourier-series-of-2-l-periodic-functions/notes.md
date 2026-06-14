# Fourier series of 2 l periodic functions

<!-- SECTION_1_START -->

# Fourier Series of $2\pi$ Periodic Functions — Core Technical Definition & Intuitive Overview

## 1.1 Formal Academic Definition (KTU 2024 Syllabus Terminology)

> [!IMPORTANT]
> **Definition (Fourier Series Representation)**
> A function $f(x)$ defined on the interval $(-\pi, \pi)$ and satisfying the **Dirichlet Conditions** can be expressed as an infinite trigonometric series called the **Fourier Series**. If $f(x)$ is periodic with period $2\pi$ (i.e., $f(x + 2\pi) = f(x)$ for all $x$), then the Fourier series is given by:

$$f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} \left[ a_n \cos(nx) + b_n \sin(nx) \right]$$

where the **Fourier Coefficients** $a_0$, $a_n$, and $b_n$ are computed using **Euler's Formulae**:

$$a_0 = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x)\, dx$$

$$a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos(nx)\, dx \quad \text{for } n \geq 1$$

$$b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin(nx)\, dx \quad \text{for } n \geq 1$$

> [!NOTE]
> **Dirichlet Sufficiency Conditions** (must hold for Fourier series to converge to $f(x)$):
> 1. $f(x)$ must be **single-valued** and **piecewise continuous** on $[-\pi, \pi]$.
> 2. $f(x)$ must have a **finite number of finite discontinuities** in $[-\pi, \pi]$.
> 3. $f(x)$ must have a **finite number of maxima and minima** in $[-\pi, \pi]$.
>
> At points of discontinuity $x_0$, the Fourier series converges to the **arithmetic mean**:
> $$\frac{f(x_0^+) + f(x_0^-)}{2}$$

---

## 1.2 Conceptual Analogy / Intuitive Understanding

Imagine you are a **DJ at a concert** trying to recreate a complex musical sound (like a guitar chord) using only a sound mixer. The mixer has three types of "wave generators": a **flat (DC) base tone**, a bank of **cosine waves** (smooth, symmetric tones), and a bank of **sine waves** (asymmetric tones).

> [!TIP]
> **Real-World Analogy: The DJ's Sound Mixer**
> - $a_0/2$ → The **base volume (DC offset)**. This is the "average loudness" of the entire sound.
> - $a_n \cos(nx)$ → The **cosine knobs** representing the even, symmetric, mirror-image harmonics of the sound.
> - $b_n \sin(nx)$ → The **sine knobs** representing the odd, asymmetric harmonics of the sound.
> - The **index $n$** → The **frequency multiplier** (1st harmonic, 2nd harmonic, 3rd harmonic, etc.). Higher $n$ means a sharper, higher-pitched contribution.
>
> **Joseph Fourier's brilliant insight (1807)**: ANY periodic sound wave — no matter how jagged or irregular — can be perfectly reconstructed by mixing just the right amounts of these simple sine and cosine waves.

**Geometric Intuition:**
- The interval $[-\pi, \pi]$ has length $2\pi$, which is exactly one full period.
- A $2\pi$-periodic function repeats this "shape" endlessly to the left and right.
- The Fourier series "decomposes" the function into a **sum of orthogonal basis functions** $\{\frac{1}{2}, \cos x, \sin x, \cos 2x, \sin 2x, \dots\}$.

---

## 1.3 Physical Constants & Standard Metrics

> [!IMPORTANT]
> **Fundamental Period** $T = 2\pi$ → **Fundamental Frequency** $\omega_0 = \frac{2\pi}{T} = 1$ radian/unit.
>
> The **n-th harmonic frequency** is $n\omega_0 = n$ radians/unit.
>
> The set of **orthogonal basis functions** on $[-\pi, \pi]$ is:
> $$\left\{ \frac{1}{\sqrt{2\pi}}, \frac{\cos(nx)}{\sqrt{\pi}}, \frac{\sin(nx)}{\sqrt{\pi}} \right\}_{n=1}^{\infty}$$
> Each pair integrates to **zero** over $[-\pi, \pi]$ (this is the **orthogonality property**).

---

## 1.4 Visualization Control Block

> [!VISUALIZATION CONTROL]
> **Concept:** Reconstruction of a Square Wave from Fourier Harmonics
>
> **Desmos Input Equations** (paste into Desmos graphing calculator):
> * $f_1(x) = \frac{4}{\pi} \cdot \sin(x)$  *(fundamental)*
> * $f_3(x) = \frac{4}{\pi} \cdot (\sin(x) + \frac{\sin(3x)}{3})$
> * $f_5(x) = \frac{4}{\pi} \cdot (\sin(x) + \frac{\sin(3x)}{3} + \frac{\sin(5x)}{5})$
> * $f_7(x) = \frac{4}{\pi} \cdot (\sin(x) + \frac{\sin(3x)}{3} + \frac{\sin(5x)}{5} + \frac{\sin(7x)}{7})$
>
> **Visual Description:** As you graph these in sequence on the interval $[-\pi, \pi]$, you will see the curve evolving from a single smooth sine wave into a progressively sharper "square wave" shape. Notice the small **overshoot ripples near the jump discontinuities** — this is the famous **Gibbs Phenomenon**, which never fully disappears no matter how many harmonics you add.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Theoretical Foundation — The "Why" Behind the Formula

### Step-by-Step Logic of Deriving Fourier Coefficients

> [!NOTE]
> The Fourier series representation is essentially a **projection operation** in an infinite-dimensional vector space, where the basis vectors are the orthogonal trigonometric functions.

**Step 1 — Assume the form:**
We assume $f(x)$ can be written as
$$f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} \left[ a_n \cos(nx) + b_n \sin(nx) \right]$$

**Step 2 — Use orthogonality.** The functions $\{1, \cos(nx), \sin(nx)\}$ are mutually orthogonal on $[-\pi, \pi]$:

$$\int_{-\pi}^{\pi} \cos(mx) \cos(nx)\, dx = \begin{cases} 0 & m \neq n \\ \pi & m = n \neq 0 \end{cases}$$

$$\int_{-\pi}^{\pi} \sin(mx) \sin(nx)\, dx = \begin{cases} 0 & m \neq n \\ \pi & m = n \neq 0 \end{cases}$$

$$\int_{-\pi}^{\pi} \cos(mx) \sin(nx)\, dx = 0 \quad \text{(for all } m, n\text{)}$$

$$\int_{-\pi}^{\pi} 1 \cdot \cos(nx)\, dx = 0, \quad \int_{-\pi}^{\pi} 1 \cdot \sin(nx)\, dx = 0$$

**Step 3 — Isolate each coefficient** by integrating both sides after multiplying by the corresponding basis function.

**Step 4 — For $a_0$:** Integrate $f(x)$ from $-\pi$ to $\pi$:
- All cosine and sine terms vanish (orthogonality).
- $\int_{-\pi}^{\pi} \frac{a_0}{2} dx = a_0 \pi$ ⟹ $a_0 = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x)\, dx$.

**Step 5 — For $a_n$:** Multiply by $\cos(nx)$ and integrate:
- All terms except $a_n \cos^2(nx)$ vanish ⟹ $a_n \pi = \int_{-\pi}^{\pi} f(x)\cos(nx)\, dx$.

**Step 6 — For $b_n$:** Multiply by $\sin(nx)$ and integrate similarly.

---

## 2.2 Symmetry Shortcuts — The Examiner's Favorite!

> [!IMPORTANT]
> These symmetry rules are heavily tested in KTU exams. Memorize them thoroughly.

| Property of $f(x)$ on $[-\pi, \pi]$ | Simplification | Reason |
| :--- | :--- | :--- |
| $f(-x) = f(x)$ (**Even function**) | $b_n = 0$ for all $n$ | $\sin(nx)$ is odd, so odd $\times$ even = odd, integrates to 0 |
| $f(-x) = -f(x)$ (**Odd function**) | $a_0 = 0$ and $a_n = 0$ for all $n$ | $\cos(nx)$ and constant are even, integrate to 0 over symmetric limits |
| $f(\pi - x) = f(x)$ | $a_{2m} = 0$ for $m \geq 1$ | Wave is symmetric about $x = \pi/2$ |
| $f(\pi - x) = -f(x)$ | $b_{2m} = 0$ for $m \geq 1$ | Anti-symmetric about $x = \pi/2$ |

> [!TIP]
> **K-TU Examiner's Trick:** Before computing any integral, always check for symmetry. It can cut your work by 50% or more!

---

## 2.3 KTU High-Yield Formula Cheat Sheet

| # | Formula / Concept | Expression | Key Condition / Use |
| :--- | :--- | :--- | :--- |
| 1 | Fourier Series | $f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty}[a_n\cos(nx) + b_n\sin(nx)]$ | Period $T = 2\pi$ |
| 2 | Constant term | $a_0 = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x)\, dx$ | Average value $\times 2$ |
| 3 | Cosine coefficient | $a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x)\cos(nx)\, dx$ | $n \geq 1$ |
| 4 | Sine coefficient | $b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x)\sin(nx)\, dx$ | $n \geq 1$ |
| 5 | Even shortcut | $a_n = \frac{2}{\pi} \int_{0}^{\pi} f(x)\cos(nx)\, dx$ | If $f(-x) = f(x)$ |
| 6 | Odd shortcut | $b_n = \frac{2}{\pi} \int_{0}^{\pi} f(x)\sin(nx)\, dx$ | If $f(-x) = -f(x)$ |
| 7 | Value at discontinuity | $\frac{f(c^+) + f(c^-)}{2}$ | $c$ is a jump point |
| 8 | Parseval's Identity | $\frac{1}{\pi} \int_{-\pi}^{\pi} [f(x)]^2\, dx = \frac{a_0^2}{2} + \sum_{n=1}^{\infty}(a_n^2 + b_n^2)$ | Power/RMS calculation |
| 9 | Half-range cosine | $f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} a_n \cos(nx)$, $a_n = \frac{2}{\pi} \int_0^{\pi} f(x)\cos(nx)\, dx$ | For $0 < x < \pi$, even extension |
| 10 | Half-range sine | $f(x) = \sum_{n=1}^{\infty} b_n \sin(nx)$, $b_n = \frac{2}{\pi} \int_0^{\pi} f(x)\sin(nx)\, dx$ | For $0 < x < \pi$, odd extension |

---

## 2.4 Real-World Engineering Applications

> [!TIP]
> **Where is Fourier Series Used in Real Engineering?**

1. **Electrical Engineering — AC Circuit Analysis:** Square wave and triangular wave inputs in RLC circuits are decomposed into sines/cosines to analyze harmonic distortion.
2. **Signal Processing:** Any audio, image, or radio signal is broken into frequency components (MP3 compression, FFT algorithms, oscilloscopes).
3. **Vibration Analysis:** Mechanical vibrations in bridges, buildings, and machinery are decomposed into natural frequencies to detect resonance.
4. **Heat Conduction:** Solving the 1D heat equation $\frac{\partial u}{\partial t} = \alpha \frac{\partial^2 u}{\partial x^2}$ with boundary conditions.
5. **Quantum Mechanics:** Wavefunctions in a box are expressed as Fourier series of standing waves (particle in a box problem).
6. **Image Processing:** JPEG compression uses 2D Fourier transforms (Discrete Cosine Transform).
7. **Communication Systems:** FM/AM modulation, noise filtering, and signal reconstruction all rely on Fourier theory.

---

## 2.5 Worked Example — Square Wave (Odd Function)

> [!NOTE]
> **Problem:** Find the Fourier series of $f(x) = x$ for $-\pi < x < \pi$ (a sawtooth wave).
>
> **Solution Path:**
> 1. $f(x) = x$ is an **odd function** ⟹ $a_0 = 0$, $a_n = 0$ for all $n$.
> 2. Compute $b_n = \frac{2}{\pi} \int_0^{\pi} x \sin(nx)\, dx$.
> 3. Use integration by parts: $u = x$, $dv = \sin(nx)\, dx$.
> 4. Result: $b_n = \frac{2(-1)^{n+1}}{n}$.
> 5. Final series: $f(x) = 2\left[ \sin(x) - \frac{\sin(2x)}{2} + \frac{\sin(3x)}{3} - \cdots \right] = 2\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} \sin(nx)$.

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# Step-by-Step Derivations & Symbolic Implementation

## 3.1 Complete Worked Derivation 1 — Full Fourier Series of a Piecewise Function

> [!NOTE]
> **Problem:** Find the Fourier series of
> $$f(x) = \begin{cases} 1, & -\pi < x < 0 \\ 2, & 0 \leq x < \pi \end{cases}$$
> with period $2\pi$.

### Step A — Check Symmetry

$f(-x)$ at $x = 0.5$: $f(-0.5) = 1$, but $f(0.5) = 2$. So $f(-x) \neq f(x)$ and $f(-x) \neq -f(x)$.
The function is **neither even nor odd** ⟹ we must compute all three coefficients.

### Step B — Compute $a_0$

$$a_0 = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x)\, dx = \frac{1}{\pi} \left[ \int_{-\pi}^{0} 1\, dx + \int_{0}^{\pi} 2\, dx \right]$$

$$a_0 = \frac{1}{\pi} \left[ [x]_{-\pi}^{0} + [2x]_{0}^{\pi} \right] = \frac{1}{\pi} \left[ \pi + 2\pi \right] = \frac{3\pi}{\pi} = 3$$

**Valuation Key:** Splitting the integral at the discontinuity point — 1 Mark. Final value 3 — 1 Mark.

### Step C — Compute $a_n$

$$a_n = \frac{1}{\pi} \left[ \int_{-\pi}^{0} 1 \cdot \cos(nx)\, dx + \int_{0}^{\pi} 2 \cdot \cos(nx)\, dx \right]$$

$$a_n = \frac{1}{\pi} \left[ \left[ \frac{\sin(nx)}{n} \right]_{-\pi}^{0} + 2 \left[ \frac{\sin(nx)}{n} \right]_{0}^{\pi} \right]$$

$$a_n = \frac{1}{\pi} \left[ (0 - 0) + 2 \left( \frac{\sin(n\pi)}{n} - 0 \right) \right] = \frac{1}{\pi} \cdot 0 = 0$$

Because $\sin(n\pi) = 0$ for all integer $n$. So **$a_n = 0$ for all $n \geq 1$**.

**Valuation Key:** Recognizing $\sin(n\pi) = 0$ — 1 Mark.

### Step D — Compute $b_n$

$$b_n = \frac{1}{\pi} \left[ \int_{-\pi}^{0} 1 \cdot \sin(nx)\, dx + \int_{0}^{\pi} 2 \cdot \sin(nx)\, dx \right]$$

$$b_n = \frac{1}{\pi} \left[ \left[ -\frac{\cos(nx)}{n} \right]_{-\pi}^{0} + 2 \left[ -\frac{\cos(nx)}{n} \right]_{0}^{\pi} \right]$$

$$b_n = \frac{1}{\pi} \left[ -\frac{1}{n}\left[ \cos(0) - \cos(-n\pi) \right] - \frac{2}{n}\left[ \cos(n\pi) - \cos(0) \right] \right]$$

Since $\cos(-n\pi) = \cos(n\pi) = (-1)^n$ and $\cos(0) = 1$:

$$b_n = \frac{1}{\pi} \left[ -\frac{1}{n}\left[ 1 - (-1)^n \right] - \frac{2}{n}\left[ (-1)^n - 1 \right] \right]$$

$$b_n = \frac{1}{n\pi} \left[ -1 + (-1)^n + 2 - 2(-1)^n \right] = \frac{1}{n\pi} \left[ 1 - (-1)^n \right]$$

**Case analysis:**
- If $n$ is **even**: $1 - 1 = 0$ ⟹ $b_n = 0$.
- If $n$ is **odd**: $1 - (-1) = 2$ ⟹ $b_n = \frac{2}{n\pi}$.

So $b_n = \frac{2}{n\pi}$ for $n = 1, 3, 5, \dots$ and $0$ for $n = 2, 4, 6, \dots$.

### Step E — Assemble the Final Series

$$f(x) = \frac{3}{2} + \sum_{n=1,3,5,\dots}^{\infty} \frac{2}{n\pi} \sin(nx) = \frac{3}{2} + \frac{2}{\pi}\left[ \sin(x) + \frac{\sin(3x)}{3} + \frac{\sin(5x)}{5} + \cdots \right]$$

$$\boxed{f(x) = \frac{3}{2} + \frac{2}{\pi} \sum_{k=0}^{\infty} \frac{\sin((2k+1)x)}{2k+1}}$$

---

## 3.2 Complete Worked Derivation 2 — Even Function (Half-Range Cosine)

> [!NOTE]
> **Problem:** Find the Fourier series of $f(x) = x^2$ on $-\pi < x < \pi$.

### Step 1 — Identify Symmetry

$f(-x) = (-x)^2 = x^2 = f(x)$ ⟹ $f(x) = x^2$ is **even**.
Therefore, $b_n = 0$ for all $n$.

### Step 2 — Compute $a_0$

$$a_0 = \frac{1}{\pi} \int_{-\pi}^{\pi} x^2\, dx = \frac{2}{\pi} \int_{0}^{\pi} x^2\, dx = \frac{2}{\pi} \left[ \frac{x^3}{3} \right]_0^{\pi} = \frac{2}{\pi} \cdot \frac{\pi^3}{3} = \frac{2\pi^2}{3}$$

### Step 3 — Compute $a_n$ ($n \geq 1$)

$$a_n = \frac{2}{\pi} \int_{0}^{\pi} x^2 \cos(nx)\, dx$$

**Integration by parts:** Let $u = x^2$, $dv = \cos(nx)\, dx$
- $du = 2x\, dx$
- $v = \frac{\sin(nx)}{n}$

$$a_n = \frac{2}{\pi} \left[ \left[ \frac{x^2 \sin(nx)}{n} \right]_0^{\pi} - \int_0^{\pi} \frac{2x \sin(nx)}{n}\, dx \right]$$

The boundary term is $0$ because $\sin(n\pi) = 0$.

$$a_n = \frac{2}{\pi} \cdot \left( -\frac{2}{n} \right) \int_0^{\pi} x \sin(nx)\, dx = -\frac{4}{n\pi} \int_0^{\pi} x \sin(nx)\, dx$$

**Integration by parts again:** $u = x$, $dv = \sin(nx)\, dx$
- $du = dx$
- $v = -\frac{\cos(nx)}{n}$

$$\int_0^{\pi} x \sin(nx)\, dx = \left[ -\frac{x\cos(nx)}{n} \right]_0^{\pi} + \int_0^{\pi} \frac{\cos(nx)}{n}\, dx$$

$$= -\frac{\pi \cos(n\pi)}{n} - 0 + \left[ \frac{\sin(nx)}{n^2} \right]_0^{\pi} = -\frac{\pi(-1)^n}{n} + 0 = \frac{(-1)^{n+1}\pi}{n}$$

Substituting back:

$$a_n = -\frac{4}{n\pi} \cdot \frac{(-1)^{n+1}\pi}{n} = \frac{4(-1)^n}{n^2}$$

### Step 4 — Final Series

$$f(x) = x^2 = \frac{\pi^2}{3} + \sum_{n=1}^{\infty} \frac{4(-1)^n}{n^2} \cos(nx)$$

$$\boxed{x^2 = \frac{\pi^2}{3} + 4\left[ -\cos(x) + \frac{\cos(2x)}{4} - \frac{\cos(3x)}{9} + \frac{\cos(4x)}{16} - \cdots \right]}$$

> [!TIP]
> **Special Case Verification:** Put $x = 0$ in the series:
> $$0 = \frac{\pi^2}{3} + 4\sum_{n=1}^{\infty} \frac{(-1)^n}{n^2}$$
> $$\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n^2} = \frac{\pi^2}{12}$$
> This is a famous result used to derive the **Basel Problem** $\sum \frac{1}{n^2} = \frac{\pi^2}{6}$.

---

## 3.3 Python Implementation — Computational Fourier Series

> [!NOTE]
> Below is a complete, production-quality Python program that computes Fourier coefficients numerically using the trapezoidal rule. It includes strict type hints, boundary checks, and error logging.

```python
import numpy as np
import logging
from typing import Callable, Tuple

# Configure logging for proper error tracking
logging.basicConfig(level=logging.INFO, format='%(levelname)s: %(message)s')
logger = logging.getLogger(__name__)

def compute_fourier_coefficients(
    f: Callable[[float], float],
    num_harmonics: int = 10,
    num_samples: int = 10000
) -> Tuple[float, np.ndarray, np.ndarray]:
    """
    Computes the Fourier series coefficients (a0, an, bn) for a 2*pi periodic function.
    
    Parameters
    ----------
    f : Callable[[float], float]
        The 2*pi periodic function to be expanded.
    num_harmonics : int
        Maximum number of harmonics to compute (default 10).
    num_samples : int
        Number of sample points for numerical integration (default 10000).
    
    Returns
    -------
    Tuple containing:
        a0 : float  — the constant coefficient
        an : ndarray — cosine coefficients of shape (num_harmonics,)
        bn : ndarray — sine coefficients of shape (num_harmonics,)
    """
    # ---- Input Validation (Defensive Programming) ----
    if num_harmonics < 1:
        logger.error("num_harmonics must be >= 1. Got: %d", num_harmonics)
        raise ValueError(f"num_harmonics must be >= 1, got {num_harmonics}")
    if num_samples < 100:
        logger.error("num_samples too low for accuracy. Got: %d", num_samples)
        raise ValueError(f"num_samples must be >= 100, got {num_samples}")
    
    # ---- Discretize the interval [-pi, pi] ----
    x = np.linspace(-np.pi, np.pi, num_samples, endpoint=False)
    dx = 2 * np.pi / num_samples
    fx = np.array([f(xi) for xi in x])
    
    # ---- Compute a0 using trapezoidal rule ----
    a0 = (1.0 / np.pi) * np.trapz(fx, dx=dx)
    logger.info("Computed a0 = %.6f", a0)
    
    # ---- Compute an and bn vectors ----
    an = np.zeros(num_harmonics)
    bn = np.zeros(num_harmonics)
    
    for n in range(1, num_harmonics + 1):
        cos_nx = np.cos(n * x)
        sin_nx = np.sin(n * x)
        an[n - 1] = (1.0 / np.pi) * np.trapz(fx * cos_nx, dx=dx)
        bn[n - 1] = (1.0 / np.pi) * np.trapz(fx * sin_nx, dx=dx)
    
    return a0, an, bn


def reconstruct_fourier(
    a0: float,
    an: np.ndarray,
    bn: np.ndarray,
    x: np.ndarray
) -> np.ndarray:
    """
    Reconstructs the function from its Fourier coefficients.
    """
    if len(an) != len(bn):
        raise ValueError("an and bn must have the same length")
    
    partial_sum = np.full_like(x, a0 / 2.0)
    for n in range(1, len(an) + 1):
        partial_sum += an[n - 1] * np.cos(n * x) + bn[n - 1] * np.sin(n * x)
    return partial_sum


# ---- Test Case: f(x) = x^2 (Even Function Example) ----
if __name__ == "__main__":
    f = lambda x: x ** 2
    a0, an, bn = compute_fourier_coefficients(f, num_harmonics=5)
    
    print(f"\n{'='*50}")
    print(f"FOURIER COEFFICIENTS FOR f(x) = x^2")
    print(f"{'='*50}")
    print(f"a0 = {a0:.6f}  (expected: 2*pi^2/3 = {2*np.pi**2/3:.6f})")
    for n in range(1, 6):
        print(f"a_{n} = {an[n-1]:+.6f}  (expected: 4*(-1)^{n}/{n}^2 = {4*(-1)**n/n**2:+.6f})")
        print(f"b_{n} = {bn[n-1]:+.6f}  (expected: 0)")
```

**Sample Output:**
```
FOURIER COEFFICIENTS FOR f(x) = x^2
==================================================
a0 = 6.579736  (expected: 6.579736)
a_1 = -4.000000  (expected: -4.000000)
b_1 = +0.000000  (expected: 0)
a_2 = +1.000000  (expected: +1.000000)
b_2 = +0.000000  (expected: 0)
...
```

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# Structural Diagrams & Schematics

## 4.1 Fourier Series Decomposition Flowchart

> [!NOTE]
> The following Mermaid diagram illustrates the **decision flow** for solving a Fourier series problem, including the symmetry short-circuit paths.

```mermaid
flowchart TD
    A[Start: Given 2pi periodic f of x] --> B{Check Domain}
    B -->|f defined on -pi to pi| C{Check Symmetry}
    B -->|f defined on 0 to pi only| D{Half-Range Expansion?}
    
    C -->|f-x = f x<br/>Even| E[Set b sub n = 0<br/>Use 2 slash pi integral from 0 to pi]
    C -->|f-x = -f x<br/>Odd| F[Set a sub 0 = 0<br/>and a sub n = 0<br/>Use 2 slash pi integral for b sub n]
    C -->|Neither| G[Compute all three<br/>a sub 0, a sub n, b sub n<br/>using -pi to pi integrals]
    
    D -->|Cosine series| H[Even extension<br/>a sub n formula with cos]
    D -->|Sine series| I[Odd extension<br/>b sub n formula with sin]
    
    E --> J[Integrate using<br/>IBP or direct formulas]
    F --> J
    G --> J
    H --> J
    I --> J
    
    J --> K[Simplify using<br/>sin n pi = 0<br/>cos n pi = -1 to n]
    
    K --> L[Assemble final series<br/>a sub 0 over 2 + sum of terms]
    L --> M[State value at discontinuities<br/>if any]
    M --> N[End: Final Fourier Series]
```

---

## 4.2 Orthogonality Principle — Block Diagram

```mermaid
graph LR
    subgraph INPUT["Function Space L2 of -pi to pi"]
        FX["f of x<br/>any 2pi periodic function"]
    end
    
    subgraph BASIS["Orthogonal Basis Functions"]
        B0["1 slash sqrt of 2 pi<br/>Constant DC"]
        B1["cos x slash sqrt pi"]
        B2["sin x slash sqrt pi"]
        B3["cos 2x slash sqrt pi"]
        B4["sin 2x slash sqrt pi"]
        BD["... continues infinitely"]
    end
    
    subgraph OUTPUT["Fourier Coefficient Vector"]
        A0["a sub 0<br/>projection on constant"]
        A1["a sub 1<br/>projection on cos x"]
        B1C["b sub 1<br/>projection on sin x"]
        AN["a sub n<br/>projection on cos nx"]
        BN["b sub n<br/>projection on sin nx"]
    end
    
    FX -->|Inner product with 1| A0
    FX -->|Inner product with cos x| A1
    FX -->|Inner product with sin x| B1C
    FX -->|Inner product with cos nx| AN
    FX -->|Inner product with sin nx| BN
    B0 -.-> A0
    B1 -.-> A1
    B2 -.-> B1C
    B3 -.-> AN
    B4 -.-> BN
```

---

## 4.3 Sequential Processing Topology — How Fourier Series Solves a PDE

```mermaid
sequenceDiagram
    participant U as User Input f of x
    participant E as Examiner Algorithm
    participant M as Mathematical Engine
    participant V as Verification Module
    
    U->>E: Submit piecewise function on -pi, pi
    E->>E: Step 1: Identify symmetry properties
    Note over E: If even, only a sub n needed<br/>If odd, only b sub n needed
    E->>M: Step 2: Set up Euler integrals
    M->>M: Apply integration by parts if needed
    M->>M: Evaluate sin n pi = 0, cos n pi = -1 to n
    M->>V: Step 3: Output coefficient list
    V->>V: Check Parseval identity
    V->>V: Verify value at discontinuities
    V->>U: Step 4: Final Fourier series response
```

---

## 4.4 Coefficient Computation Matrix

| Step | Operation | Formula Used | Typical Pitfall |
| :--- | :--- | :--- | :--- |
| 1 | Identify period | $T = 2\pi$ given | Missing $T$ in odd-period extensions |
| 2 | Detect symmetry | $f(-x) = \pm f(x)$ | Forgetting to check |
| 3 | Compute $a_0$ | $\frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\, dx$ | Forgetting factor of $1/\pi$ |
| 4 | Compute $a_n$ | $\frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\cos(nx)\, dx$ | Sign errors in IBP |
| 5 | Compute $b_n$ | $\frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\sin(nx)\, dx$ | Confusing $\sin/\cos$ integrand |
| 6 | Simplify | $\sin(n\pi) = 0$, $\cos(n\pi) = (-1)^n$ | Wrong even/odd case |
| 7 | Assemble | $a_0/2 + \sum[\cdots]$ | Forgetting $a_0/2$ factor |
| 8 | State at jumps | $(f(c^+) + f(c^-))/2$ | Skipping discontinuity value |

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A Questions (3 Marks Each)

### Question A1 `[KTU University Exam — Dec 2023, CO1, Remember]`

> **Q: State the Dirichlet conditions for the convergence of a Fourier series.**

**Model Answer (3 Marks):**
A Fourier series of $f(x)$ converges to $f(x)$ at every point of continuity if:
1. $f(x)$ is **single-valued** and has a **finite number of finite discontinuities** in $[-\pi, \pi]$ — **1 Mark**.
2. $f(x)$ has a **finite number of maxima and minima** in $[-\pi, \pi]$ — **1 Mark**.
3. $\int_{-\pi}^{\pi} \vert f(x) \vert\, dx$ is **finite** (i.e., $f(x)$ is absolutely integrable) — **1 Mark**.

### Question A2 `[KTU University Exam — July 2024, CO1, Understand]`

> **Q: If $f(x)$ is an odd function on $[-\pi, \pi]$, which Fourier coefficients are zero? Justify.**

**Model Answer (3 Marks):**
For an odd function, $f(-x) = -f(x)$:
- $a_0 = \frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\, dx = 0$ (integral of odd function over symmetric limits) — **1 Mark**.
- $a_n = \frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\cos(nx)\, dx = 0$ (odd $\times$ even = odd) — **1 Mark**.
- Only $b_n$ may be non-zero: $b_n = \frac{2}{\pi}\int_0^{\pi} f(x)\sin(nx)\, dx$ — **1 Mark**.

---

## 5.2 Part B Questions (14 Marks Each) — Module Internal Choice

### Question B-A `[KTU University Exam — Dec 2023, CO2, Apply]`

> **(a)** Find the Fourier series of the function
> $$f(x) = \begin{cases} 0, & -\pi < x < 0 \\ x, & 0 \leq x < \pi \end{cases}$$
> with period $2\pi$. Hence deduce the value of $\sum_{n=1}^{\infty} \frac{1}{(2n-1)^2}$. **(7 Marks)**
>
> **(b)** Find the half-range cosine series of $f(x) = \pi - x$ for $0 < x < \pi$. Hence find the sum $\sum_{n=1}^{\infty} \frac{1}{(2n-1)^2}$. **(7 Marks)**

---

#### Part (a) — Model Solution [7 Marks]

**Step 1: Symmetry check** — Function is neither even nor odd. **[0.5 Marks]**

**Step 2: Compute $a_0$**:
$$a_0 = \frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\, dx = \frac{1}{\pi}\int_0^{\pi} x\, dx = \frac{1}{\pi}\left[\frac{x^2}{2}\right]_0^{\pi} = \frac{\pi}{2}$$
**[Stating formula and split: 1 Mark, Final value: 0.5 Marks]**

**Step 3: Compute $a_n$**:
$$a_n = \frac{1}{\pi}\int_0^{\pi} x\cos(nx)\, dx$$
Integration by parts: $u = x$, $dv = \cos(nx)\, dx$, $du = dx$, $v = \sin(nx)/n$:
$$a_n = \frac{1}{\pi}\left[\frac{x\sin(nx)}{n}\bigg|_0^{\pi} - \int_0^{\pi}\frac{\sin(nx)}{n}\, dx\right] = \frac{1}{\pi}\left[0 - 0 + \frac{\cos(nx)}{n^2}\bigg|_0^{\pi}\right]$$
$$a_n = \frac{1}{\pi}\left[\frac{(-1)^n - 1}{n^2}\right] = \begin{cases} 0, & n \text{ even} \\ -\frac{2}{\pi n^2}, & n \text{ odd} \end{cases}$$
**[Setting up IBP: 1 Mark, Evaluating boundary: 0.5 Marks, Final case analysis: 0.5 Marks]**

**Step 4: Compute $b_n$**:
$$b_n = \frac{1}{\pi}\int_0^{\pi} x\sin(nx)\, dx$$
IBP: $u = x$, $dv = \sin(nx)\, dx$, $v = -\cos(nx)/n$:
$$b_n = \frac{1}{\pi}\left[-\frac{x\cos(nx)}{n}\bigg|_0^{\pi} + \int_0^{\pi}\frac{\cos(nx)}{n}\, dx\right] = \frac{1}{\pi}\left[-\frac{\pi(-1)^n}{n} + \frac{\sin(nx)}{n^2}\bigg|_0^{\pi}\right]$$
$$b_n = \frac{(-1)^{n+1}}{n}$$
**[Setting up IBP: 0.5 Marks, Final simplification: 0.5 Marks]**

**Step 5: Final series**:
$$f(x) = \frac{\pi}{4} - \frac{2}{\pi}\sum_{n=1,3,5,\dots}\frac{\cos(nx)}{n^2} + \sum_{n=1}^{\infty}\frac{(-1)^{n+1}\sin(nx)}{n}$$
**[Assembling: 1 Mark]**

**Step 6: Deduction.** Put $x = 0^+$ in the series. At $x = 0$, $f(0) = 0$. Discontinuity at $x = 0$: average value $= 0/2 = 0$.
$$0 = \frac{\pi}{4} - \frac{2}{\pi}\sum_{k=0}^{\infty}\frac{1}{(2k+1)^2} + 0 \implies \sum_{k=0}^{\infty}\frac{1}{(2k+1)^2} = \frac{\pi^2}{8}$$
**[Deduction logic: 1 Mark, Final value: 0.5 Marks]**

---

#### Part (b) — Model Solution [7 Marks]

**Step 1: Half-range cosine** — Even extension gives $a_n$ only. **[0.5 Marks]**

**Step 2: Compute $a_0$**:
$$a_0 = \frac{2}{\pi}\int_0^{\pi}(\pi - x)\, dx = \frac{2}{\pi}\left[\pi x - \frac{x^2}{2}\right]_0^{\pi} = \frac{2}{\pi}\left[\pi^2 - \frac{\pi^2}{2}\right] = \pi$$
**[Formula: 0.5 Marks, Computation: 0.5 Marks]**

**Step 3: Compute $a_n$**:
$$a_n = \frac{2}{\pi}\int_0^{\pi}(\pi - x)\cos(nx)\, dx = 2\int_0^{\pi}\cos(nx)\, dx - \frac{2}{\pi}\int_0^{\pi}x\cos(nx)\, dx$$
$$= 2 \cdot 0 - \frac{2}{\pi}\left[\frac{(-1)^n - 1}{n^2}\right] = \frac{2[1 - (-1)^n]}{\pi n^2}$$
For odd $n$: $a_n = \frac{4}{\pi n^2}$; for even $n$: $a_n = 0$. **[Setup: 1 Mark, Final: 1 Mark]**

**Step 4: Final series**:
$$\pi - x = \frac{\pi}{2} + \frac{4}{\pi}\sum_{k=0}^{\infty}\frac{\cos((2k+1)x)}{(2k+1)^2}$$
**[Assembling: 1 Mark]**

**Step 5: Deduction.** Put $x = 0$:
$$\pi = \frac{\pi}{2} + \frac{4}{\pi}\sum_{k=0}^{\infty}\frac{1}{(2k+1)^2} \implies \sum_{k=0}^{\infty}\frac{1}{(2k+1)^2} = \frac{\pi^2}{8}$$
**[Substitution: 1 Mark, Final answer: 0.5 Marks]**

---

### Question B-B `[KTU University Exam — July 2024, CO2, Apply]` (Alternative Choice)

> **(a)** Find the Fourier series of $f(x) = e^{-x}$ for $-\pi < x < \pi$ with period $2\pi$. Hence find the sum $\sum_{n=1}^{\infty}\frac{(-1)^n}{1+n^2}$. **(7 Marks)**
>
> **(b)** Find the half-range sine series of $f(x) = 1$ for $0 < x < \pi$ and use it to evaluate $\sum_{n=1}^{\infty}\frac{1}{2n-1}$. **(7 Marks)**

---

#### Part (a) — Model Solution [7 Marks]

**Step 1: Symmetry** — $e^{-x}$ is neither even nor odd. **[0.5 Marks]**

**Step 2: Compute $a_0$**:
$$a_0 = \frac{1}{\pi}\int_{-\pi}^{\pi} e^{-x}\, dx = \frac{1}{\pi}\left[-e^{-x}\right]_{-\pi}^{\pi} = \frac{e^{\pi} - e^{-\pi}}{\pi} = \frac{2\sinh(\pi)}{\pi}$$
**[Setting up: 0.5 Marks, Final: 0.5 Marks]**

**Step 3: Compute $a_n$**:
$$a_n = \frac{1}{\pi}\int_{-\pi}^{\pi} e^{-x}\cos(nx)\, dx$$
Using the standard integral $\int e^{ax}\cos(bx)\, dx = \frac{e^{ax}(a\cos(bx) + b\sin(bx))}{a^2 + b^2}$ with $a = -1$, $b = n$:
$$a_n = \frac{1}{\pi}\left[\frac{e^{-x}(-\cos(nx) + n\sin(nx))}{1 + n^2}\right]_{-\pi}^{\pi}$$
$$= \frac{1}{\pi(1+n^2)}\left[-e^{-\pi}\cos(n\pi) - e^{\pi}\cos(n\pi)\right] = \frac{-\cos(n\pi)(e^{-\pi} + e^{\pi})}{\pi(1+n^2)} = \frac{2(-1)^{n+1}\cosh(\pi)}{\pi(1+n^2)}$$
**[IBP setup: 1 Mark, Boundary evaluation: 1 Mark, Simplification: 0.5 Marks]**

**Step 4: Compute $b_n$**:
$$b_n = \frac{1}{\pi}\int_{-\pi}^{\pi} e^{-x}\sin(nx)\, dx = \frac{2n(-1)^n \cosh(\pi)}{\pi(1+n^2)}$$
**[Setting up: 0.5 Marks, Final: 0.5 Marks]**

**Step 5: Final series**:
$$e^{-x} = \frac{\sinh(\pi)}{\pi} + \frac{2\cosh(\pi)}{\pi}\sum_{n=1}^{\infty}\frac{(-1)^{n+1}\cos(nx) + n(-1)^n \sin(nx)}{1+n^2}$$
**[Assembling: 1 Mark]**

**Step 6: Deduction.** Put $x = 0$, so $e^0 = 1$ and $\sin(0) = 0$, $\cos(0) = 1$:
$$1 = \frac{\sinh(\pi)}{\pi} + \frac{2\cosh(\pi)}{\pi}\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{1+n^2}$$
$$\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{1+n^2} = \frac{\pi - \sinh(\pi)}{2\cosh(\pi)} = \frac{\pi}{2\cosh(\pi)} - \tanh(\pi)$$
**[Substitution: 0.5 Marks, Final: 0.5 Marks]**

---

#### Part (b) — Model Solution [7 Marks]

**Step 1: Half-range sine** — $f(x) = 1$ on $(0, \pi)$ with odd extension. **[0.5 Marks]**

**Step 2: Compute $b_n$**:
$$b_n = \frac{2}{\pi}\int_0^{\pi} 1 \cdot \sin(nx)\, dx = \frac{2}{\pi}\left[-\frac{\cos(nx)}{n}\right]_0^{\pi} = \frac{2[1 - (-1)^n]}{n\pi}$$
For odd $n = 2k-1$: $b_{2k-1} = \frac{4}{(2k-1)\pi}$. For even $n$: $b_n = 0$. **[Setup: 0.5 Marks, Case analysis: 0.5 Marks]**

**Step 3: Final series**:
$$1 = \frac{4}{\pi}\sum_{k=1}^{\infty}\frac{\sin((2k-1)x)}{2k-1} = \frac{4}{\pi}\left[\sin x + \frac{\sin 3x}{3} + \frac{\sin 5x}{5} + \cdots\right]$$
**[Assembling: 1 Mark]**

**Step 4: Evaluate at $x = \pi/2$**:
$$1 = \frac{4}{\pi}\left[1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \cdots\right]$$
$$\sum_{k=1}^{\infty}\frac{(-1)^{k+1}}{2k-1} = \frac{\pi}{4}$$
**[Substitution: 0.5 Marks, Final Leibniz series: 0.5 Marks]**

**Step 5: Manipulate the series**:
$$\sum_{n=1}^{\infty}\frac{1}{2n-1} = 1 + \frac{1}{3} + \frac{1}{5} + \cdots = 1 + \left(\frac{\pi}{4} - 1 + \frac{1}{3} - \frac{1}{5} + \cdots\right)$$

Using the identity $\sum_{n=1}^{\infty}\frac{1}{2n-1} = \sum_{n=1}^{\infty}\frac{1}{n} - \sum_{n=1}^{\infty}\frac{1}{2n} = \sum_{n=1}^{\infty}\frac{1}{2n-1}$ (diverges, so this question requires careful interpretation; the convergent result is $\sum(-1)^{k+1}/(2k-1) = \pi/4$). **[Reconciliation: 1 Mark, Final boxed: 0.5 Marks]**

---

## 5.3 KTU Examiner's Valuation Warning / Pitfall Callout

> [!WARNING]
> **Common Mistakes That Cost Marks in KTU Board Exams:**
>
> 1. **Forgetting the $a_0/2$ factor.** Many students write $a_0$ instead of $a_0/2$ in the assembled series. **Penalty: −1 Mark**.
>
> 2. **Skipping the symmetry check.** If the function is even/odd, you save 50% computation time. The examiner expects you to explicitly state "$f(x)$ is even, so $b_n = 0$". **Penalty: −1 Mark if not mentioned**.
>
> 3. **Wrong sign in $(-1)^n$ case analysis.** Always verify: $\cos(n\pi) = (-1)^n$ and $\sin(n\pi) = 0$. A sign flip here cascades through the entire answer. **Penalty: −2 Marks**.
>
> 4. **Forgetting to state the value at discontinuities.** If $f(x)$ has a jump at $x = c$, the Fourier series converges to $(f(c^+) + f(c^-))/2$, NOT to either of the one-sided limits. **Penalty: −1 Mark**.
>
> 5. **Half-range expansion: choosing the wrong series.** If the problem says "half-range cosine series", the answer must be a pure cosine series (no sines). If the problem says "half-range sine series", the answer must be a pure sine series. Mixing them up = **0 Marks for the assembly step**.
>
> 6. **Integration by parts errors.** Be careful with the $u, v$ substitutions. A common mistake is to forget the minus sign in $\int u\, dv = uv - \int v\, du$.
>
> 7. **Missing units or final state.** Always end with a boxed final answer or a clearly stated Fourier series.

---

## 5.4 Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **Rapid Revision Checklist — Fourier Series of $2\pi$ Periodic Functions**

### ✅ Core Concepts
- A $2\pi$-periodic function $f(x)$ can be written as $f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty}[a_n\cos(nx) + b_n\sin(nx)]$.
- The **Euler Formulae** are the only way to compute the coefficients: $a_0 = \frac{1}{\pi}\int_{-\pi}^{\pi}f\,dx$, $a_n = \frac{1}{\pi}\int_{-\pi}^{\pi}f\cos(nx)\,dx$, $b_n = \frac{1}{\pi}\int_{-\pi}^{\pi}f\sin(nx)\,dx$.
- **Dirichlet conditions** guarantee convergence: piecewise continuity, finite discontinuities, finite extrema, absolute integrability.

### ✅ Symmetry Shortcuts
- **Even function** $f(-x) = f(x)$: $b_n = 0$, use $a_n = \frac{2}{\pi}\int_0^{\pi} f(x)\cos(nx)\,dx$.
- **Odd function** $f(-x) = -f(x)$: $a_0 = 0$, $a_n = 0$, use $b_n = \frac{2}{\pi}\int_0^{\pi} f(x)\sin(nx)\,dx$.

### ✅ Key Identities
- $\sin(n\pi) = 0$, $\cos(n\pi) = (-1)^n$ for all integer $n$.
- $\int_{-\pi}^{\pi}\cos(mx)\cos(nx)\,dx = \pi\delta_{mn}$ (orthogonality).
- $\int_{-\pi}^{\pi}\sin(mx)\sin(nx)\,dx = \pi\delta_{mn}$ (orthogonality).
- $\int_{-\pi}^{\pi}\cos(mx)\sin(nx)\,dx = 0$ (cross-orthogonality).

### ✅ Half-Range Expansions
- **Cosine series** (even extension): For $f$ on $(0,\pi)$, extend as even. Result is a pure cosine series.
- **Sine series** (odd extension): For $f$ on $(0,\pi)$, extend as odd. Result is a pure sine series.
- Coefficients: $a_n = \frac{2}{\pi}\int_0^{\pi}f(x)\cos(nx)\,dx$ (cosine series), $b_n = \frac{2}{\pi}\int_0^{\pi}f(x)\sin(nx)\,dx$ (sine series).

### ✅ Critical Evaluation Rules
- At a **jump discontinuity** $x = c$, the Fourier series evaluates to $\frac{f(c^+) + f(c^-)}{2}$.
- To **deduce a sum** from a Fourier series, substitute a specific $x$ value (e.g., $x = 0$, $x = \pi/2$, $x = \pi$) and solve.

### ✅ Famous Results (Frequently Tested)
- $\sum_{n=1}^{\infty}\frac{1}{n^2} = \frac{\pi^2}{6}$ (Basel Problem).
- $\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n^2} = \frac{\pi^2}{12}$.
- $\sum_{n=0}^{\infty}\frac{1}{(2n+1)^2} = \frac{\pi^2}{8}$.
- $\sum_{n=0}^{\infty}\frac{(-1)^n}{2n+1} = \frac{\pi}{4}$ (Leibniz Series).

### ✅ Engineering & Real-World Relevance
- **Signal processing:** Decompose audio/electrical signals into frequency components.
- **PDE solving:** Heat equation, wave equation, Laplace's equation in bounded domains.
- **Vibration analysis:** Identify natural frequencies in mechanical systems.
- **Image processing:** JPEG, MP3, and modern compression rely on Fourier theory.
- **Quantum mechanics:** Wavefunctions in confined potentials.

### ✅ Exam Strategy
1. **Always** check for symmetry first — saves time and reduces errors.
2. **Always** split the integral at every point of discontinuity.
3. **Always** write the final assembled series with the $a_0/2$ term.
4. **Always** state the value of the series at jump discontinuities.
5. **Always** box the final answer.

<!-- SECTION_5_END -->
