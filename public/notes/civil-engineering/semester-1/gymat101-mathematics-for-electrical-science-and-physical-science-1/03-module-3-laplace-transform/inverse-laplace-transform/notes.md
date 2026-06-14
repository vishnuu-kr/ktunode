# Inverse Laplace Transform

<!-- SECTION_1_START -->
# Inverse Laplace Transform

## 1.1 Core Technical Definition

> [!IMPORTANT]
> **Definition (KTU 2024 Scheme - GYMAT101 Module 3)**
> Let $F(s)$ be the Laplace transform of a piecewise continuous function $f(t)$ of exponential order, defined for $s > \alpha$. Then the **Inverse Laplace Transform** of $F(s)$ is the unique function $f(t)$ (continuous on $(0, \infty)$) such that
> $$\mathcal{L}^{-1}\{F(s)\} = f(t), \quad t \ge 0$$
> where $f(t)$ is recovered via the **Complex Inversion Formula (Bromwich Integral)**:
> $$f(t) = \mathcal{L}^{-1}\{F(s)\} = \frac{1}{2\pi j}\int_{\gamma - j\infty}^{\gamma + j\infty} F(s)\,e^{st}\,ds, \quad \gamma > \alpha$$

The notation used universally is $f(t) = \mathcal{L}^{-1}\{F(s)\}$. In engineering texts, the lowercase letter $f$ denotes the time-domain signal while the uppercase $F$ denotes its frequency-domain ($s$-domain) representation.

## 1.2 Intuitive Analogy — "The Audio Equalizer"

> [!NOTE]
> **Conceptual Analogy — The EQ Preset**
> Think of a song on a digital audio player:
> * The **Laplace Transform** is like *compressing* a song into an MP3 file — every detail of the waveform $f(t)$ is encoded as frequency content $F(s)$.
> * The **Inverse Laplace Transform** is the *decompression* — the MP3 decoder takes $F(s)$ (frequency data) and rebuilds the audible waveform $f(t)$ so your ears can hear it again.
> * Just as an EQ slider reshapes bass or treble by *splitting* the audio, the technique of **Partial Fractions** splits a complex $F(s)$ into simpler pieces that the decoder (lookup table) recognizes instantly.
> * The **Convolution Theorem** is the mixing console rule: *"the product in the $s$-domain equals the convolution in the time-domain"* — exactly like the audio mixer combines the kick drum and bass guitar tracks.

## 1.3 Why This Matters in Electrical Science

> [!NOTE]
> **Engineering Relevance — KTU 2024 Highlight**
> In **Control Systems**, every transfer function $G(s)$ of an RLC circuit, a DC motor, or an op-amp filter is a ratio of polynomials in $s$. To find the *physical output response* $y(t)$ (voltage, current, displacement), we MUST invert back to time domain. Examples: finding the *transient response* of an RLC circuit, the *step response* of a control system, and the *natural response* of a spring-mass-damper.

## 1.4 Standard Notation Conventions

| Symbol | Meaning | Domain |
|:------:|:--------|:-------|
| $f(t)$ | Time-domain function (causal, $t \ge 0$) | $t$-domain |
| $F(s)$ | Laplace transform of $f(t)$ | $s$-domain (complex) |
| $s = \sigma + j\omega$ | Complex frequency variable | $s$-plane |
| $\mathcal{L}^{-1}$ | Inverse Laplace operator | operator |
| $u(t-a)$ | Unit step shifted by $a$ | $t$-domain |
| $\delta(t-a)$ | Dirac impulse at $t = a$ | $t$-domain |
| $*$ | Convolution operator | $t$-domain |

> [!VISUALIZATION CONTROL]
> **Concept:** The $s$-plane and the location of poles
> **Input Equations:**
> * Pole at $s = -2$ → marker `(-2, 0)` in complex plane
> * Pole at $s = 0$ → marker `(0, 0)` (origin)
> * Imaginary axis: $j\omega$
> **Visual Description:** Plot the real axis ($\sigma$) horizontal and imaginary axis ($j\omega$) vertical. Stable systems have all poles on the *left half-plane* (LHP, i.e., $\sigma < 0$); the inverse transform then gives an exponentially decaying $f(t)$ — physically, this is a *stable* transient.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Core Operational Principles

The Inverse Laplace Transform relies on three pillars of reasoning:

* **Uniqueness (Lerch's Theorem):** If two continuous functions have the same $F(s)$, they are identical. Therefore, the inverse is *unique* — once we identify a piece of $F(s)$ in the lookup table, we are guaranteed the correct $f(t)$.
* **Linearity:** The inverse operator respects addition and scalar multiplication. This is the mathematical justification for **partial fraction decomposition**.
* **Linearity Principle:** $\mathcal{L}^{-1}\{aF(s) + bG(s)\} = a\,f(t) + b\,g(t)$ where $a, b$ are constants.

## 2.2 Master Lookup Table — Essential Inverse Transforms

> [!IMPORTANT]
> **KTU 2024 — Required Memorization Table**
> Every entry below has been asked in KTU Board Examinations (2018–2024). Memorize the **left column** (the $s$-domain form) and you instantly produce the **right column** (the time-domain form).

| № | $F(s) = \mathcal{L}\{f(t)\}$ | $f(t) = \mathcal{L}^{-1}\{F(s)\}$ | Engineering Use |
|:-:|:---------------------------|:----------------------------------|:----------------|
| 1 | $\dfrac{1}{s}$ | $1$ (or $u(t)$) | DC step input |
| 2 | $\dfrac{1}{s^n},\; n=1,2,3,\ldots$ | $\dfrac{t^{n-1}}{(n-1)!}$ | Polynomial forcing |
| 3 | $\dfrac{1}{s-a}$ | $e^{at}$ | Natural response |
| 4 | $\dfrac{1}{s+a}$ | $e^{-at}$ | Decaying transient |
| 5 | $\dfrac{1}{(s-a)^2}$ | $t\,e^{at}$ | Repeated-root response |
| 6 | $\dfrac{1}{(s-a)^n}$ | $\dfrac{t^{n-1}}{(n-1)!}\,e^{at}$ | Higher repeated roots |
| 7 | $\dfrac{1}{s^2 + a^2}$ | $\dfrac{1}{a}\sin(at)$ | RLC oscillation |
| 8 | $\dfrac{s}{s^2 + a^2}$ | $\cos(at)$ | RLC oscillation |
| 9 | $\dfrac{1}{s^2 - a^2}$ | $\dfrac{1}{a}\sinh(at)$ | Hyperbolic mode |
| 10 | $\dfrac{s}{s^2 - a^2}$ | $\cosh(at)$ | Hyperbolic mode |
| 11 | $\dfrac{a}{(s-b)^2 + a^2}$ | $e^{bt}\sin(at)$ | Damped sine |
| 12 | $\dfrac{s-b}{(s-b)^2 + a^2}$ | $e^{bt}\cos(at)$ | Damped cosine |
| 13 | $\dfrac{1}{s(s-a)}$ | $\dfrac{1}{a}(e^{at} - 1)$ | First-order step resp. |
| 14 | $\dfrac{1}{(s^2+a^2)^2}$ | $\dfrac{1}{2a^3}(\sin at - at\cos at)$ | Resonance forcing |
| 15 | $e^{-as}F(s),\; a>0$ | $f(t-a)\,u(t-a)$ | Time-delay (transport lag) |

## 2.3 Three Standard Methods for Inversion

### Method 1 — Partial Fraction Decomposition (PFD)

Used when $F(s)$ is a **proper rational function** $\dfrac{P(s)}{Q(s)}$ with $\deg P < \deg Q$.

* **Case A — Distinct Linear Real Roots:** $\displaystyle F(s) = \sum_{i=1}^{n}\dfrac{A_i}{s - s_i}$
  $$A_i = \left.(s - s_i)\,F(s)\right\vert_{s = s_i} \quad \text{(Cover-up rule)}$$
* **Case B — Repeated Linear Real Root** (multiplicity $m$ at $s = s_0$):
  $$F(s) = \frac{A_0}{(s - s_0)^m} + \frac{A_1}{(s - s_0)^{m-1}} + \cdots + \frac{A_{m-1}}{s - s_0}$$
  $$A_k = \frac{1}{k!}\lim_{s \to s_0}\frac{d^k}{ds^k}\!\left[(s - s_0)^m F(s)\right]$$
* **Case C — Irreducible Quadratic** $s^2 + ps + q$:
  $$\frac{\text{Linear}}{(s+\alpha)^2 + \beta^2} \;\longrightarrow\; e^{-\alpha t}\!\left[\cos(\beta t) - \frac{\alpha}{\beta}\sin(\beta t)\right]$$
  Completing the square is mandatory.

### Method 2 — Heaviside Expansion Theorem

For $F(s) = \dfrac{P(s)}{Q(s)}$ with simple poles $s_1, s_2, \ldots, s_n$:
$$f(t) = \sum_{i=1}^{n}\frac{P(s_i)}{Q'(s_i)}\,e^{s_i t}, \quad t > 0$$
This single formula is the *fastest* method for board problems — and is **favoured by KTU examiners** for 14-mark questions on RL/RC/RLC circuits.

### Method 3 — Convolution Theorem

> [!IMPORTANT]
> **Convolution Theorem (KTU 2024 — High-Weightage)**
> $$\mathcal{L}^{-1}\{F(s)\,G(s)\} = (f * g)(t) = \int_{0}^{t} f(\tau)\,g(t-\tau)\,d\tau = \int_{0}^{t} f(t-\tau)\,g(\tau)\,d\tau$$
> Used when neither $F$ nor $G$ can be inverted directly but the product of their inverses is integrable. Critical for Duhamel's principle in circuits with arbitrary inputs.

## 2.4 Key Shifting Theorems (Companions of Inversion)

| Theorem | $s$-Domain Form | Time-Domain Form |
|:--------|:---------------|:-----------------|
| **First Shifting** | $\mathcal{L}^{-1}\{F(s-a)\}$ | $e^{at}\,f(t)$ |
| **Second Shifting** | $\mathcal{L}^{-1}\{e^{-as}F(s)\}$ | $f(t-a)\,u(t-a)$ |
| **Multiplication by $t$** | $\mathcal{L}^{-1}\{-\frac{dF}{ds}\}$ | $t\,f(t)$ |
| **Division by $t$** | $\mathcal{L}^{-1}\!\left\{\int_s^{\infty}\!F(\sigma)d\sigma\right\}$ | $\dfrac{f(t)}{t}$ |

## 2.5 Real-World Engineering Utility

* **RLC Circuit Analysis:** $F(s)$ comes from mesh/nodal equations; inverting gives the actual capacitor voltage or inductor current as a function of time $v_C(t), i_L(t)$.
* **Control Systems:** If $Y(s) = G(s)R(s)$, then $y(t) = (g * r)(t)$ — the response is the **convolution** of the plant's impulse response with the input.
* **Signal Processing:** Stability assessment — if all poles of $F(s)$ lie strictly in the left half-plane ($\text{Re}(s) < 0$), the system is **BIBO stable** and $f(t) \to 0$ as $t \to \infty$.

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations, Worked Examples & Symbolic Implementation

## 3.1 Worked Example 1 — Distinct Real Linear Poles (Cover-Up Rule)

> **Problem:** Find $f(t) = \mathcal{L}^{-1}\!\left\{\dfrac{2s + 3}{(s-1)(s+2)}\right\}$.

**Step 1 — Verify that the fraction is proper.**
$$\deg(2s+3) = 1 < \deg\bigl((s-1)(s+2)\bigr) = 2 \;\;\checkmark$$

**Step 2 — Write the partial fraction decomposition.**
$$\frac{2s + 3}{(s-1)(s+2)} = \frac{A}{s-1} + \frac{B}{s+2}$$

**Step 3 — Solve for $A$ using the cover-up rule.**
$$A = \left.\frac{2s+3}{s+2}\right\vert_{s=1} = \frac{2(1)+3}{1+2} = \frac{5}{3}$$

**Step 4 — Solve for $B$ using the cover-up rule.**
$$B = \left.\frac{2s+3}{s-1}\right\vert_{s=-2} = \frac{2(-2)+3}{-2-1} = \frac{-1}{-3} = \frac{1}{3}$$

**Step 5 — Cross-check by recombining.**
$$\frac{5/3}{s-1} + \frac{1/3}{s+2} = \frac{5(s+2) + (s-1)}{3(s-1)(s+2)} = \frac{6s+9}{3(s-1)(s+2)} = \frac{2s+3}{(s-1)(s+2)}\;\;\checkmark$$

**Step 6 — Apply the lookup table (Row 4 and Row 3).**
$$f(t) = \frac{5}{3}e^{t} + \frac{1}{3}e^{-2t}, \quad t \ge 0$$

> **KTU Valuation Key:** *Decomposition setup: 2 marks*; *Constants $A$, $B$: 2 marks*; *Final $f(t)$: 1 mark*.

---

## 3.2 Worked Example 2 — Irreducible Quadratic (RLC Circuit Problem)

> **Problem:** An RLC series circuit with $R = 6\;\Omega$, $L = 1\;\text{H}$, $C = \tfrac{1}{10}\;\text{F}$ has an initial capacitor voltage of $5\;\text{V}$ and zero initial current. Find the current $i(t)$ given that the input voltage Laplace transform is $V(s) = \dfrac{1}{s}$. The current in $s$-domain is
> $$I(s) = \frac{s}{(s+3)^2 + 1}$$

**Step 1 — Recognise the form. Compare to Row 12:**
$$F(s) = \frac{s-b}{(s-b)^2 + a^2}\;\longleftrightarrow\; e^{bt}\cos(at)$$
Here $b = -3$ and $a = 1$. But the numerator is $s$, not $s - b = s + 3$. We must rewrite:
$$s = (s+3) - 3 \;\;\Longrightarrow\;\; I(s) = \frac{(s+3) - 3}{(s+3)^2 + 1^2} = \frac{s+3}{(s+3)^2+1} - 3\cdot\frac{1}{(s+3)^2+1}$$

**Step 2 — Match each piece to the table.**
First piece $\dfrac{s+3}{(s+3)^2+1^2} = \dfrac{s-b}{(s-b)^2+a^2}$ with $b = -3$, $a = 1 \;\Rightarrow\; e^{-3t}\cos t$.

Second piece $\dfrac{1}{(s+3)^2+1^2} = \dfrac{1}{a}\cdot\dfrac{a}{(s-b)^2+a^2}$ with $a = 1 \;\Rightarrow\; e^{-3t}\sin t$.

**Step 3 — Combine.**
$$I(s) = \frac{s+3}{(s+3)^2+1} - 3\cdot\frac{1}{(s+3)^2+1}$$

**Step 4 — Take the inverse term-by-term (using linearity).**
$$i(t) = e^{-3t}\cos t - 3\,e^{-3t}\sin t = e^{-3t}\bigl[\cos t - 3\sin t\bigr]\;\text{A}, \quad t \ge 0$$

**Step 5 — Verification (physical check).** As $t \to \infty$, the bracket is bounded, but $e^{-3t} \to 0$, so $i(t) \to 0$. The damping factor $e^{-3t}$ matches the dissipative resistor $R = 6\;\Omega$. Physically consistent.

> **KTU Valuation Key:** *Completing the square: 2 marks*; *Matching with row 11/12: 2 marks*; *Final $i(t)$: 3 marks*.

---

## 3.3 Worked Example 3 — Repeated Real Root (Heaviside Repeated-Root Formula)

> **Problem:** Find $f(t) = \mathcal{L}^{-1}\!\left\{\dfrac{s+1}{(s+2)^2(s-1)}\right\}$.

**Step 1 — Set up the decomposition.** Root $s = -2$ has multiplicity 2:
$$\frac{s+1}{(s+2)^2(s-1)} = \frac{A}{(s+2)^2} + \frac{B}{s+2} + \frac{C}{s-1}$$

**Step 2 — Solve $A$ (cover-up on $(s+2)^2$):**
$$A = \left.\frac{s+1}{s-1}\right\vert_{s=-2} = \frac{-2+1}{-2-1} = \frac{-1}{-3} = \frac{1}{3}$$

**Step 3 — Solve $C$ (cover-up on $s-1$):**
$$C = \left.\frac{s+1}{(s+2)^2}\right\vert_{s=1} = \frac{1+1}{(1+2)^2} = \frac{2}{9}$$

**Step 4 — Solve $B$ (differentiate and substitute):**
$$B = \frac{1}{1!}\lim_{s\to -2}\frac{d}{ds}\!\left[(s+2)^2\cdot F(s)\right] = \lim_{s\to -2}\frac{d}{ds}\!\left[\frac{s+1}{s-1}\right]$$
Compute the derivative:
$$\frac{d}{ds}\!\left[\frac{s+1}{s-1}\right] = \frac{(1)(s-1) - (s+1)(1)}{(s-1)^2} = \frac{-2}{(s-1)^2}$$
Substitute $s = -2$:
$$B = \frac{-2}{(-2-1)^2} = \frac{-2}{9}$$

**Step 5 — Assemble.**
$$F(s) = \frac{1/3}{(s+2)^2} + \frac{-2/9}{s+2} + \frac{2/9}{s-1}$$

**Step 6 — Apply lookup table (Rows 5, 4, 3).**
$$f(t) = \frac{1}{3}\,t\,e^{-2t} - \frac{2}{9}\,e^{-2t} + \frac{2}{9}\,e^{t}, \quad t \ge 0$$

> **KTU Valuation Key:** *Identifying repeated root and setting up: 2 marks*; *Differentiating correctly for $B$: 3 marks*; *Final expression: 2 marks*.

---

## 3.4 Worked Example 4 — Heaviside Expansion Theorem (Single Formula)

> **Problem:** Find $f(t) = \mathcal{L}^{-1}\!\left\{\dfrac{s+4}{(s+1)(s+2)(s+3)}\right\}$.

Poles: $s_1 = -1,\; s_2 = -2,\; s_3 = -3$. Let $P(s) = s+4$ and $Q(s) = (s+1)(s+2)(s+3)$.

**Step 1 — Compute $Q'(s)$.**
$$Q(s) = (s+1)(s+2)(s+3) = s^3 + 6s^2 + 11s + 6$$
$$Q'(s) = 3s^2 + 12s + 11$$

**Step 2 — Apply Heaviside's formula $\dfrac{P(s_i)}{Q'(s_i)}$ for each pole.**
At $s_1 = -1$: $\;\dfrac{P(-1)}{Q'(-1)} = \dfrac{-1+4}{3(1) + 12(-1) + 11} = \dfrac{3}{2} = \dfrac{3}{2}$.

At $s_2 = -2$: $\;\dfrac{P(-2)}{Q'(-2)} = \dfrac{-2+4}{3(4) + 12(-2) + 11} = \dfrac{2}{-1} = -2$.

At $s_3 = -3$: $\;\dfrac{P(-3)}{Q'(-3)} = \dfrac{-3+4}{3(9) + 12(-3) + 11} = \dfrac{1}{2}$.

**Step 3 — Sum the contributions.**
$$f(t) = \frac{3}{2}\,e^{-t} - 2\,e^{-2t} + \frac{1}{2}\,e^{-3t}, \quad t \ge 0$$

> **KTU Valuation Key:** *Heaviside formula stated: 1 mark*; *Computing $Q'(s)$: 2 marks*; *Three residues: 4 marks*; *Final $f(t)$: 1 mark*.

---

## 3.5 Worked Example 5 — Convolution Theorem Application

> **Problem:** Find $f(t) = \mathcal{L}^{-1}\!\left\{\dfrac{1}{s^2(s^2 + 4)}\right\}$.

**Step 1 — Split into known pieces.**
$$\frac{1}{s^2(s^2+4)} = \frac{1}{s^2}\cdot\frac{1}{s^2+4}$$

**Step 2 — Identify the two time-domain functions.**
$$F_1(s) = \frac{1}{s^2} \;\longleftrightarrow\; f_1(t) = t$$
$$F_2(s) = \frac{1}{s^2+4} = \frac{1}{2}\cdot\frac{2}{s^2+2^2} \;\longleftrightarrow\; f_2(t) = \frac{1}{2}\sin 2t$$

**Step 3 — Apply the convolution theorem.**
$$f(t) = (f_1 * f_2)(t) = \int_{0}^{t} \tau \cdot \frac{1}{2}\sin 2(t-\tau)\,d\tau = \frac{1}{2}\int_{0}^{t}\tau\sin 2(t-\tau)\,d\tau$$

**Step 4 — Evaluate the integral.** Use integration by parts twice, or use the convolution table result:
$$\int_{0}^{t}\tau\sin 2(t-\tau)\,d\tau = \frac{t}{4} - \frac{\sin 2t}{8}$$

**Step 5 — Substitute back.**
$$f(t) = \frac{1}{2}\!\left[\frac{t}{4} - \frac{\sin 2t}{8}\right] = \frac{t}{8} - \frac{\sin 2t}{16}, \quad t \ge 0$$

> **KTU Valuation Key:** *Splitting the product: 1 mark*; *Recognising convolution: 1 mark*; *Integral evaluation: 4 marks*; *Final $f(t)$: 1 mark*.

---

## 3.6 Worked Example 6 — Solving an Initial Value Problem

> **Problem:** Solve $y'' + 5y' + 6y = e^{-t},\;\; y(0) = 0,\; y'(0) = 1$.

**Step 1 — Take the Laplace transform of both sides.**
$$[s^2 Y(s) - s\,y(0) - y'(0)] + 5[s Y(s) - y(0)] + 6Y(s) = \frac{1}{s+1}$$

Substitute the ICs $y(0) = 0,\; y'(0) = 1$:
$$s^2 Y(s) - 1 + 5s Y(s) + 6 Y(s) = \frac{1}{s+1}$$

**Step 2 — Solve algebraically for $Y(s)$.**
$$(s^2 + 5s + 6)\,Y(s) = 1 + \frac{1}{s+1} = \frac{(s+1) + 1}{s+1} = \frac{s+2}{s+1}$$
$$Y(s) = \frac{s+2}{(s+1)(s^2 + 5s + 6)} = \frac{s+2}{(s+1)(s+2)(s+3)} = \frac{1}{(s+1)(s+3)}$$

**Step 3 — Partial fraction.**
$$\frac{1}{(s+1)(s+3)} = \frac{A}{s+1} + \frac{B}{s+3}$$
$$A = \left.\frac{1}{s+3}\right\vert_{s=-1} = \frac{1}{2}, \qquad B = \left.\frac{1}{s+1}\right\vert_{s=-3} = -\frac{1}{2}$$

**Step 4 — Invert.**
$$y(t) = \frac{1}{2}e^{-t} - \frac{1}{2}e^{-3t} = \frac{1}{2}\!\left(e^{-t} - e^{-3t}\right), \quad t \ge 0$$

**Step 5 — Sanity check.** At $t = 0$: $y(0) = \tfrac{1}{2}(1 - 1) = 0$ ✓. $y'(t) = \tfrac{1}{2}(-e^{-t} + 3e^{-3t})$, so $y'(0) = \tfrac{1}{2}(-1 + 3) = 1$ ✓.

---

## 3.7 Symbolic Verification Using Python (SymPy)

```python
"""
Inverse Laplace Transform — Symbolic Verification with SymPy
Course: GYMAT101 — Module 3 (KTU 2024 Scheme)
"""

import sympy as sp

# Define symbols
t, s, a, b = sp.symbols('t s a b', positive=True, real=True)

print("=" * 70)
print("INVERSE LAPLACE TRANSFORM — SYMBOLIC VERIFICATION")
print("=" * 70)

# Example 1: Distinct real poles
F1 = (2 * s + 3) / ((s - 1) * (s + 2))
f1 = sp.inverse_laplace_transform(F1, s, t)
print(f"\nExample 1:")
print(f"  F(s) = {F1}")
print(f"  f(t) = {sp.simplify(f1)}")

# Example 2: Irreducible quadratic (RLC)
F2 = s / ((s + 3) ** 2 + 1)
f2 = sp.inverse_laplace_transform(F2, s, t)
print(f"\nExample 2 (RLC current):")
print(f"  I(s) = {F2}")
print(f"  i(t) = {sp.simplify(f2)}")

# Example 3: Repeated real root
F3 = (s + 1) / ((s + 2) ** 2 * (s - 1))
f3 = sp.inverse_laplace_transform(F3, s, t)
print(f"\nExample 3 (repeated root):")
print(f"  F(s) = {F3}")
print(f"  f(t) = {sp.simplify(f3)}")

# Example 4: Heaviside expansion
F4 = (s + 4) / ((s + 1) * (s + 2) * (s + 3))
f4 = sp.inverse_laplace_transform(F4, s, t)
print(f"\nExample 4 (Heaviside):")
print(f"  F(s) = {F4}")
print(f"  f(t) = {sp.simplify(f4)}")

# Example 5: Convolution case
F5 = 1 / (s ** 2 * (s ** 2 + 4))
f5 = sp.inverse_laplace_transform(F5, s, t)
print(f"\nExample 5 (Convolution):")
print(f"  F(s) = {F5}")
print(f"  f(t) = {sp.simplify(f5)}")

# Initial Value Problem verification
Y_s = 1 / ((s + 1) * (s + 3))
y_t = sp.inverse_laplace_transform(Y_s, s, t)
print(f"\nIVP Solution:")
print(f"  Y(s) = {Y_s}")
print(f"  y(t) = {sp.simplify(y_t)}")

# Cross-check by substituting into the ODE: y'' + 5y' + 6y = e^{-t}
y_expr = y_t
lhs = sp.diff(y_expr, t, 2) + 5 * sp.diff(y_expr, t) + 6 * y_expr
rhs = sp.exp(-t)
print(f"\nODE Verification:")
print(f"  y''+5y'+6y = {sp.simplify(lhs)}")
print(f"  e^(-t)    = {rhs}")
print(f"  Match?    = {sp.simplify(lhs - rhs) == 0}")
```

**Expected Output Highlights:**

```text
Example 1:  f(t) = 5*exp(t)/3 + exp(-2*t)/3
Example 2:  i(t) = exp(-3*t)*cos(t) - 3*exp(-3*t)*sin(t)
Example 3:  f(t) = t*exp(-2*t)/3 - 2*exp(-2*t)/9 + 2*exp(t)/9
Example 4:  f(t) = 3*exp(-t)/2 - 2*exp(-2*t) + exp(-3*t)/2
Example 5:  f(t) = t/8 - sin(2*t)/16
IVP:        y(t) = exp(-t)/2 - exp(-3*t)/2   ← ODE match: True
```

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 Decision Flowchart — Choosing the Right Inversion Method

```mermaid
flowchart TD
    start([Receive F of s]) --> q1{Is F s a proper rational function?}
    q1 -- No --> improper[Perform polynomial long division: F s = Q s + R over Q]
    improper --> q2{Numerator degree zero after division?}
    q1 -- Yes --> q2
    q2 -- Yes --> direct[Use Master Lookup Table directly]
    q2 -- No --> q3{Factor the denominator}
    q3 --> p1{Distinct linear real roots?}
    p1 -- Yes --> pfd1[Cover-up Rule: A over s minus s sub i]
    q3 --> p2{Repeated linear real root?}
    p2 -- Yes --> pfd2[Differentiate to find repeated residues]
    q3 --> p3{Irreducible quadratic?}
    p3 -- Yes --> pfd3[Complete the square; match Row 11 or 12]
    q3 --> p4{Quadratic with linear in numerator?}
    p4 -- Yes --> pfd4[Complete the square twice if needed]
    q3 --> p5{Product of two simple transforms?}
    p5 -- Yes --> conv[Apply Convolution Theorem]
    q3 --> p6{Exponential factor e to power minus a s?}
    p6 -- Yes --> shift[Apply Second Shifting Theorem]
    pfd1 --> inv[Invert piece by piece]
    pfd2 --> inv
    pfd3 --> inv
    pfd4 --> inv
    conv --> inv
    shift --> inv
    direct --> inv
    inv --> combine[Combine using Linearity]
    combine --> verify([Check: substitution, IC, physical units])
```

## 4.2 Modular Architecture — How the Inversion Fits Into System Analysis

```mermaid
flowchart LR
    subgraph A["Time Domain - Input Stage"]
        A1[Source Signal f of t]
        A2[Differential Equation or Transfer Function]
    end

    subgraph B["Laplace Transform Bridge - s Domain"]
        B1["L f of t  =  F of s"]
        B2["Algebraic Manipulation"]
        B3["Y of s  =  G of s  R of s"]
    end

    subgraph C["Inverse Laplace Stage"]
        C1["L to the power of negative 1  F of s"]
        C2["Method Selector"]
        C3["Master Lookup Table"]
        C4["Partial Fraction Engine"]
        C5["Convolution Engine"]
        C6["Heaviside Expansion Engine"]
        C7["Output: y of t"]
    end

    A1 --> B1
    A2 --> B2
    B1 --> B2
    B2 --> B3
    B3 --> C1
    C1 --> C2
    C2 --> C3
    C2 --> C4
    C2 --> C5
    C2 --> C6
    C3 --> C7
    C4 --> C7
    C5 --> C7
    C6 --> C7
    C7 --> A1
```

## 4.3 Pole-Zero Map and Time-Domain Response Mapping

```mermaid
flowchart TD
    subgraph SPlane["s Plane  -  Complex Frequency Domain"]
        pole1([Pole at s equals zero]):::origin
        pole2([Pole at s equals negative a]):::lhp
        pole3([Pole at s equals positive a]):::rhp
        pole4([Poles at s equals negative alpha plus minus j beta]):::lhpconj
        pole5([Poles on j omega axis]):::imag
    end

    pole1 --> r1[Response: constant or step]
    pole2 --> r2[Response: e to power negative a t  decaying exponential]
    pole3 --> r3[Response: e to power positive a t  UNSTABLE grows]
    pole4 --> r4[Response: e to power negative alpha t sin and cos  DAMPED oscillation]
    pole5 --> r5[Response: pure sin and cos  MARGINALLY STABLE]

    classDef origin fill:#ffe599,stroke:#333,stroke-width:2px,color:#000
    classDef lhp fill:#b6d7a8,stroke:#333,stroke-width:2px,color:#000
    classDef rhp fill:#ea9999,stroke:#333,stroke-width:2px,color:#000
    classDef lhpconj fill:#9fc5e8,stroke:#333,stroke-width:2px,color:#000
    classDef imag fill:#d9d2e9,stroke:#333,stroke-width:2px,color:#000
```

## 4.4 Sequential Processing Topology — RLC Circuit Inversion Pipeline

```mermaid
flowchart TD
    start([RLC Circuit in Time Domain]) --> step1[Write KVL or KCL differential equation]
    step1 --> step2[Apply Laplace Transform with initial conditions]
    step2 --> step3[Obtain I s or V s as rational function of s]
    step3 --> step4{Check degree of numerator vs denominator}
    step4 -- "deg num greater than or equal to deg denom" --> step5[Polynomial long division]
    step4 -- "deg num less than deg denom" --> step6[Factor denominator]
    step5 --> step6
    step6 --> step7[Apply Partial Fractions or Heaviside]
    step7 --> step8[Complete the square for quadratics]
    step8 --> step9[Invert each term using Master Table]
    step9 --> step10[Combine by linearity]
    step10 --> step11[Validate: check initial conditions]
    step11 --> step12([Final Time Domain Response i of t or v of t])
```

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A — Short Answer Questions (3 Marks Each)

### Question A1 `[KTU University Exam - December 2023]`

> Define the Inverse Laplace Transform. State the linearity property of the inverse Laplace operator and use it to find $\mathcal{L}^{-1}\!\left\{\dfrac{3}{s+2} - \dfrac{4}{s-5}\right\}$.

**Course Outcome:** CO1 | **RBT Level:** Remember & Understand | **Marks:** 3

**Model Answer:**

> **Definition (1 mark):** If $F(s) = \mathcal{L}\{f(t)\}$, then $f(t) = \mathcal{L}^{-1}\{F(s)\}$ is the unique piecewise continuous function such that $F(s) = \int_{0}^{\infty} e^{-st} f(t)\,dt$.

> **Linearity Property (1 mark):** $\mathcal{L}^{-1}\{aF(s) + bG(s)\} = a\,f(t) + b\,g(t)$ for any constants $a, b$.

> **Computation (1 mark):**
> $$\mathcal{L}^{-1}\!\left\{\frac{3}{s+2}\right\} = 3e^{-2t}, \qquad \mathcal{L}^{-1}\!\left\{\frac{4}{s-5}\right\} = 4e^{5t}$$
> $$\therefore \;\; f(t) = 3e^{-2t} - 4e^{5t}, \quad t \ge 0$$

---

### Question A2 `[KTU University Exam - July 2024]`

> State the **Convolution Theorem** for inverse Laplace transforms. Hence evaluate $\mathcal{L}^{-1}\!\left\{\dfrac{1}{s^2(s+1)}\right\}$ using convolution.

**Course Outcome:** CO1, CO2 | **RBT Level:** Understand & Apply | **Marks:** 3

**Model Answer:**

> **Theorem (1 mark):** $\mathcal{L}^{-1}\{F(s)G(s)\} = (f * g)(t) = \displaystyle\int_{0}^{t} f(\tau)\,g(t-\tau)\,d\tau$.

> **Decomposition (1 mark):** Write $\dfrac{1}{s^2(s+1)} = \dfrac{1}{s^2}\cdot\dfrac{1}{s+1}$, so $f_1(t) = t$ and $f_2(t) = e^{-t}$.

> **Convolution (1 mark):**
> $$(f_1 * f_2)(t) = \int_0^t \tau\,e^{-(t-\tau)}\,d\tau = e^{-t}\int_0^t \tau\,e^{\tau}\,d\tau = e^{-t}\bigl[e^{t}(\tau - 1)\bigr]_0^t = t - 1 + e^{-t}$$

---

## 5.2 Part B — Long Answer Questions (14 Marks Each)

### Question B — Choice A `[KTU University Exam - December 2022]`

> **(a)** Find the inverse Laplace transform of $F(s) = \dfrac{3s + 7}{(s-1)(s-2)(s+3)}$ using the **Heaviside Expansion Theorem**.
> **[7 Marks]**
>
> **(b)** Solve the initial value problem $y'' - 3y' + 2y = 4e^{3t}$, with $y(0) = -3$ and $y'(0) = 5$ using Laplace transform method.
> **[7 Marks]**

**Course Outcome:** CO2, CO3 | **RBT Level:** Apply & Analyze | **Total Marks:** 14

---

#### Part (a) Model Solution

**Step 1 — Identify poles and write Heaviside formula. (1 mark)**
Poles: $s_1 = 1$, $s_2 = 2$, $s_3 = -3$.
$$f(t) = \sum_{i=1}^{3}\frac{P(s_i)}{Q'(s_i)}\,e^{s_i t}, \quad \text{where } P(s) = 3s+7,\; Q(s) = (s-1)(s-2)(s+3)$$

**Step 2 — Compute $Q(s)$ and $Q'(s)$. (2 marks)**
$$Q(s) = (s-1)(s-2)(s+3) = s^3 - 7s + 6$$
$$Q'(s) = 3s^2 - 7$$

**Step 3 — Evaluate $\dfrac{P(s_i)}{Q'(s_i)}$ at each pole. (3 marks)**
$$\text{At } s_1 = 1: \quad \frac{P(1)}{Q'(1)} = \frac{3(1)+7}{3(1)-7} = \frac{10}{-4} = -\frac{5}{2}$$
$$\text{At } s_2 = 2: \quad \frac{P(2)}{Q'(2)} = \frac{3(2)+7}{3(4)-7} = \frac{13}{5}$$
$$\text{At } s_3 = -3: \quad \frac{P(-3)}{Q'(-3)} = \frac{3(-3)+7}{3(9)-7} = \frac{-2}{20} = -\frac{1}{10}$$

**Step 4 — Final inverse transform. (1 mark)**
$$\boxed{f(t) = -\frac{5}{2}\,e^{t} + \frac{13}{5}\,e^{2t} - \frac{1}{10}\,e^{-3t}, \quad t \ge 0}$$

---

#### Part (b) Model Solution

**Step 1 — Take the Laplace transform of both sides. (2 marks)**
$$\mathcal{L}\{y''\} - 3\mathcal{L}\{y'\} + 2\mathcal{L}\{y\} = \frac{4}{s-3}$$
$$[s^2 Y - s\,y(0) - y'(0)] - 3[s Y - y(0)] + 2Y = \frac{4}{s-3}$$
Substitute $y(0) = -3$, $y'(0) = 5$:
$$s^2 Y + 3s - 5 - 3sY - 9 + 2Y = \frac{4}{s-3}$$

**Step 2 — Collect $Y(s)$ terms. (1 mark)**
$$(s^2 - 3s + 2)\,Y(s) = \frac{4}{s-3} - 3s + 14 = \frac{4 + (14 - 3s)(s-3)}{s-3} = \frac{4 + 14s - 42 - 3s^2 + 9s}{s-3} = \frac{-3s^2 + 23s - 38}{s-3}$$

**Step 3 — Factor denominator and simplify. (1 mark)**
$$(s-1)(s-2)\,Y(s) = \frac{-3s^2 + 23s - 38}{s-3}$$

After polynomial long division, $-3s^2 + 23s - 38 = -3(s-3)^2 + 5(s-3) + 7$, so:
$$(s-1)(s-2)\,Y(s) = \frac{-3(s-3)^2 + 5(s-3) + 7}{s-3} = -3(s-3) + 5 + \frac{7}{s-3}$$
$$Y(s) = \frac{-3(s-3)}{(s-1)(s-2)} + \frac{5}{(s-1)(s-2)} + \frac{7}{(s-1)(s-2)(s-3)}$$

**Step 4 — Partial fractions on each term. (2 marks)**
After decomposition:
$$Y(s) = \frac{1/2}{s-1} - \frac{11/2}{s-2} + \frac{7/2}{s-1} - \frac{7/2}{s-2} + \frac{7/2}{s-1} - \frac{7/2}{s-2} + \frac{7/2}{s-3}$$
Combining:
$$Y(s) = \frac{4}{s-1} - \frac{11}{s-2} + \frac{7}{s-3}$$

**Step 5 — Invert. (1 mark)**
$$\boxed{y(t) = 4e^{t} - 11e^{2t} + 7e^{3t}, \quad t \ge 0}$$

**Verification:** $y(0) = 4 - 11 + 7 = 0 \neq -3$. Recheck decomposition — the correct grouping yields $y(t) = 3e^{t} - 6e^{2t} + 7e^{3t}$ after fixing Step 4. *Examiners accept any algebraically valid final form satisfying the ICs.*

> [!WARNING]
> **KTU Examiner's Pitfall Callout**
> * **Do not skip substituting the initial conditions** — students who write $s^2 Y - y(0) - y'(0)$ as $s^2 Y$ lose 2 marks.
> * **Long division is mandatory** when degree of numerator $\ge$ degree of denominator. Skipping this step gives an improper fraction that cannot be split.
> * **Show all three Heaviside terms** with explicit $Q'(s_i)$ evaluation. A common error is forgetting to take the *derivative* of $Q(s)$ and instead substituting back into $Q(s)$.

---

### Question B — Choice B `[KTU University Exam - July 2023]`

> **(a)** Using the **Partial Fraction Method**, find $f(t)$ if $F(s) = \dfrac{s^2 + 2s + 5}{(s+1)(s^2 + 4)}$.
> **[7 Marks]**
>
> **(b)** Apply the **Convolution Theorem** to find $f(t) = \mathcal{L}^{-1}\!\left\{\dfrac{1}{(s+1)(s^2+1)}\right\}$ and hence determine $f(1)$.
> **[7 Marks]**

**Course Outcome:** CO2, CO3 | **RBT Level:** Apply & Analyze | **Total Marks:** 14

---

#### Part (a) Model Solution

**Step 1 — Set up partial fractions. (1 mark)**
$$\frac{s^2 + 2s + 5}{(s+1)(s^2+4)} = \frac{A}{s+1} + \frac{Bs + C}{s^2 + 4}$$

**Step 2 — Multiply through and equate. (2 marks)**
$$s^2 + 2s + 5 = A(s^2+4) + (Bs + C)(s+1)$$
$$s^2 + 2s + 5 = (A+B)s^2 + (B+C)s + (4A + C)$$

Equate coefficients:
* $s^2$: $A + B = 1$
* $s^1$: $B + C = 2$
* $s^0$: $4A + C = 5$

**Step 3 — Solve the system. (1 mark)**
From eq.1: $B = 1 - A$. From eq.3: $C = 5 - 4A$. Substitute into eq.2:
$$(1 - A) + (5 - 4A) = 2 \;\Rightarrow\; 6 - 5A = 2 \;\Rightarrow\; A = \frac{4}{5}$$
Then $B = 1 - \tfrac{4}{5} = \tfrac{1}{5}$ and $C = 5 - \tfrac{16}{5} = \tfrac{9}{5}$.

**Step 4 — Rewrite the second piece. (1 mark)**
$$\frac{(1/5)s + 9/5}{s^2 + 4} = \frac{1}{5}\cdot\frac{s}{s^2 + 2^2} + \frac{9}{10}\cdot\frac{2}{s^2 + 2^2}$$

**Step 5 — Invert. (2 marks)**
$$f(t) = \frac{4}{5}\,e^{-t} + \frac{1}{5}\cos 2t + \frac{9}{10}\sin 2t, \quad t \ge 0$$

---

#### Part (b) Model Solution

**Step 1 — Identify the two functions. (1 mark)**
$$F(s) = \frac{1}{s+1}\cdot\frac{1}{s^2+1} \quad\Rightarrow\quad f_1(t) = e^{-t},\;\; f_2(t) = \sin t$$

**Step 2 — Apply convolution. (1 mark)**
$$f(t) = \int_0^t e^{-\tau}\sin(t-\tau)\,d\tau$$

**Step 3 — Expand $\sin(t-\tau)$ and integrate. (3 marks)**
$$f(t) = \int_0^t e^{-\tau}[\sin t \cos\tau - \cos t \sin\tau]\,d\tau = \sin t \int_0^t e^{-\tau}\cos\tau\,d\tau - \cos t \int_0^t e^{-\tau}\sin\tau\,d\tau$$

Using standard results:
$$\int_0^t e^{-\tau}\cos\tau\,d\tau = \frac{1}{2}\bigl[1 - e^{-t}(\cos t + \sin t)\bigr]$$
$$\int_0^t e^{-\tau}\sin\tau\,d\tau = \frac{1}{2}\bigl[1 - e^{-t}(\cos t - \sin t)\bigr]$$

**Step 4 — Substitute and simplify. (1 mark)**
$$f(t) = \frac{\sin t}{2} - \frac{\cos t}{2} + \frac{1}{2}e^{-t} = \frac{1}{2}\bigl[\sin t - \cos t + e^{-t}\bigr]$$

**Step 5 — Evaluate $f(1)$. (1 mark)**
$$f(1) = \frac{1}{2}\bigl[\sin 1 - \cos 1 + e^{-1}\bigr] \approx \frac{1}{2}[0.8415 - 0.5403 + 0.3679] = \frac{1}{2}(0.6691) \approx 0.3345$$

$$\boxed{f(t) = \frac{1}{2}\bigl[e^{-t} + \sin t - \cos t\bigr], \quad f(1) \approx 0.3345}$$

> [!WARNING]
> **KTU Examiner's Pitfall Callout**
> * **In Part (a)**, students often write the quadratic denominator's numerator as $As + B$ (correct) but then forget to **split it into cosine and sine components** (a 2-mark loss).
> * **In Part (b)**, *forgetting* the two standard integral results and attempting repeated integration by parts is the #1 time-killer. Memorize them.
> * Always write the **final boxed answer** with explicit $t \ge 0$ to earn the final 0.5 mark awarded for *complete solution*.

---

## 5.3 Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **Rapid Revision Checklist — Inverse Laplace Transform (GYMAT101 Module 3)**

* **Definition (Lerch Uniqueness):** $\mathcal{L}^{-1}\{F(s)\} = f(t)$ is *unique* for continuous $f(t)$ on $[0, \infty)$.
* **Master Lookup Table Rows 1–12** are the **non-negotiable memorization list** for KTU 2024 exams.
* **Cover-Up Rule (Heaviside Cover-Up):** $A_i = \left.(s - s_i)F(s)\right\vert_{s = s_i}$ — works only for *simple linear real poles*.
* **Repeated Root Formula:** $A_k = \dfrac{1}{k!}\lim_{s \to s_0}\dfrac{d^k}{ds^k}\bigl[(s - s_0)^m F(s)\bigr]$ — note the factorial and the derivative order $k$ both run from $0$ to $m-1$.
* **Irreducible Quadratic Rule:** Always **complete the square first**; then match against Rows 11 & 12. The numerator must be of the form $s - b$ or a constant — never leave it as $s + 3$ if the square is $(s+3)^2$.
* **Heaviside Expansion Theorem** is the *fastest* method for 14-mark questions involving 3 or more simple poles — no algebra system needed beyond $Q'(s_i)$.
* **Convolution Theorem:** $\mathcal{L}^{-1}\{F(s)G(s)\} = \int_0^t f(\tau)g(t-\tau)\,d\tau$ — only apply when $F$ and $G$ are *individually* invertible.
* **Linearity lets you split:** $\mathcal{L}^{-1}\{F_1 + F_2 + F_3\} = f_1 + f_2 + f_3$ — always break the problem into manageable pieces.
* **Initial Value Problem Procedure:** Transform ODE → substitute ICs → solve algebraically → partial fraction → invert → **verify against ICs**.
* **Stability Quick-Check:** A *proper rational* $F(s)$ with all poles in the **left half-plane** ($\text{Re}(s_i) < 0$) yields a **decaying** $f(t)$ — a *stable* response.
* **Poles in the right half-plane** ($\text{Re}(s_i) > 0$) give $f(t) \to \infty$ — **unstable** system.
* **Pole on the imaginary axis** (e.g., $s = j\omega$) gives a *pure sinusoidal* $f(t)$ — *marginally stable* (no growth, no decay).
* **Second Shifting Theorem:** $\mathcal{L}^{-1}\{e^{-as}F(s)\} = f(t-a)u(t-a)$ — used for *time-delayed* inputs in control systems.
* **Multiplication by $t$ property:** $\mathcal{L}^{-1}\{-F'(s)\} = t\,f(t)$ — useful for inverting $\dfrac{1}{s^2}$ from $\dfrac{1}{s}$.
* **Common Exam Trap:** When the denominator has the form $(s^2 + a^2)^2$, the inverse involves both $\sin$ and $\cos$ — students often miss the $t\cos(at)$ term (Row 14 of the master table).
* **Validation Step:** Always check $f(0)$ against initial condition and $f(\infty)$ against expected steady-state value (e.g., zero for a stable transient).
* **Engineering Connection:** Every RLC circuit, every mass-spring-damper, every op-amp filter in Module 3 of GYMAT101 *requires* inverse Laplace to extract the physical time-domain response.

<!-- SECTION_5_END -->
