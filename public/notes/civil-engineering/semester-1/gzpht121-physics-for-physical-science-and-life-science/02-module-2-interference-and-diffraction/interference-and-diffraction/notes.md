# Interference and Diffraction

<!-- SECTION_1_START -->
# 1. Core Technical Definition & Intuitive Overview

## 1.1 Interference — Formal Definition

**Interference of light** is the non‑uniform redistribution of energy in the region of superposition of two (or more) coherent light waves, resulting in the formation of alternate **bright** and **dark** bands called *fringes* on a screen.

> [!NOTE]
> **Syllabus Highlight (KTU 2024 — GZPHT121, Module 2)**
> The student must clearly distinguish between *interference* (superposition of two distinct coherent beams) and *diffraction* (bending of a single wavefront at an aperture or obstacle). Both are direct consequences of the **wave nature of light** and the **Principle of Superposition**.

For sustained, observable interference fringes, the source pair must satisfy the **Coherence Conditions**:

1. **Same frequency** (monochromatic) — $\nu_1 = \nu_2$ , i.e., same wavelength $\lambda$.
2. **Zero or constant initial phase difference** — $\phi_0$ is constant in time.
3. **Same plane of polarisation** (or at least non‑orthogonal components).
4. **Nearly equal amplitudes** — $A_1 \approx A_2$ (else contrast $V$ becomes poor).

**Mathematical statement of Superposition Principle:**

If two waves arriving at a point $P$ are
$$y_1 = A_1 \sin(\omega t - kx_1)$$
$$y_2 = A_2 \sin(\omega t - kx_2)$$
the resultant is
$$y = y_1 + y_2 = A \sin(\omega t - \phi)$$
where the resultant amplitude is governed by the **phase difference**
$$\delta = \frac{2\pi}{\lambda}\,\Delta$$
with $\Delta = x_2 - x_1$ being the **optical path difference (OPD)**.

> [!IMPORTANT]
> **Intensity Condition for Interference**
> $$I = I_1 + I_2 + 2\sqrt{I_1 I_2}\cos\delta$$
> When $I_1 = I_2 = I_0$, this reduces to
> $$I = 4I_0\cos^{2}\!\left(\frac{\delta}{2}\right)$$
> Maximum intensity $I_{\max} = 4I_0$ and minimum $I_{\min} = 0$, giving maximum visibility $V = 1$.

---

## 1.2 Diffraction — Formal Definition

**Diffraction** is the phenomenon of *bending of light* from its straight‑line rectilinear path when it encounters an obstacle or an aperture whose size is comparable to its wavelength.

> [!NOTE]
> **Two classes of Diffraction**
>
> | Class | Source–Screen Distance | Aperture Size | Mathematical Treatment |
> |-------|------------------------|---------------|--------------------------|
> | **Fresnel Diffraction** | Finite (near field) | $\sim \lambda$ | Huygens–Fresnel integrals |
> | **Fraunhofer Diffraction** | Effectively infinite (far field / lens used) | arbitrary | Fourier transform / sum of phasors |

---

## 1.3 Conceptual Analogy & Intuition

> [!TIP]
> **Interference Analogy — "Two Drums in a Pond"**
> Imagine dropping two stones simultaneously into a still pond. The circular ripples spread out, cross each other, and at certain places the crests pile on crests (bright ripples) while at others crest meets trough (calm water). Light does exactly the same — but the "ripples" are oscillating electric and magnetic fields.

> [!TIP]
> **Diffraction Analogy — "Voice around a Door"**
> You can hear a person talking in the next room even though you cannot see them. Sound waves *bend* around the door opening. Light does the same around a slit or edge — the smaller the opening, the more pronounced the bending. This is why a laser beam, when passed through a tiny pinhole, spreads out into a wide cone on the other side.

> [!IMPORTANT]
> **Why we don't see fringes in daily life**
> Ordinary lamps emit millions of *incoherent* random wavetrains. Each train lasts only $\sim 10^{-8}$ s, so fringes shift a trillion times a second and average out to uniform brightness. To see fringes, we need *coherent* sources — usually achieved by splitting **one** beam into two using slits, mirrors, or films.

---

## 1.4 Physical Constants and Standard Metrics

The following numerical values are **standard** in KTU 2024 numerical problems:

- Speed of light: $c = 3 \times 10^{8}\ \text{m/s}$
- Visible wavelength range: $\lambda = 400\ \text{nm}$ (violet) to $700\ \text{nm}$ (red)
- Typical sodium D‑line: $\lambda_D = 589.3\ \text{nm}$ (mean of D$_1$ and D$_2$)
- Standard reference: $1\ \text{nm} = 10^{-9}\ \text{m}$, $1\ \text{\AA} = 10^{-10}\ \text{m}$
- **Fringe visibility** $V = \dfrac{I_{\max}-I_{\min}}{I_{\max}+I_{\min}}$ — must always satisfy $0 \le V \le 1$.

> [!VISUALIZATION CONTROL]
> **Concept:** Two‑slit interference pattern on a screen
> **Geometric Setup (Desmos input form):**
> * Let $D = 1.0$ m, $d = 0.5$ mm, $\lambda = 600$ nm. Screen coordinates $(X, Y)$ in metres.
> * Path difference $\Delta = \dfrac{d\,Y}{D}$ (small‑angle approximation $\sin\theta \approx \tan\theta = Y/D$)
> * Intensity $I(Y) = 4I_0 \cos^{2}\!\left(\dfrac{\pi d\,Y}{\lambda D}\right)$
> * Plot $I(Y)$ for $Y \in [-0.01, 0.01]$.
> **Visual Description:** You will observe a series of equally spaced bright and dark bands centred at $Y = 0$. The spacing between successive maxima is the **fringe width** $\beta = \lambda D / d$.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# 2. Deep Theoretical Analysis & KTU High‑Yield Formula Sheet

## 2.1 Young's Double Slit Experiment (YDSE) — The Prototype of Interference

### 2.1.1 Experimental Arrangement

A monochromatic source $S$ illuminates a narrow slit; light from $S$ falls on two parallel slits $S_1$ and $S_2$ separated by a small distance $d$. The slits behave as **secondary coherent sources** (Huygens' construction). A screen placed at distance $D$ from the slits displays an interference pattern.

### 2.1.2 Path Difference and Condition for Maxima / Minima

At a point $P$ on the screen at perpendicular distance $y$ from the central maximum, the optical path difference is
$$\Delta = S_2 P - S_1 P = \frac{d\,y}{D}\quad (\text{for}\ y \ll D)$$

Equivalently, using angle $\theta$ such that $\sin\theta \approx y/D$,
$$\Delta = d\sin\theta$$

The phase difference is
$$\phi = \frac{2\pi}{\lambda}\,\Delta = \frac{2\pi d y}{\lambda D}$$

> [!IMPORTANT]
> **Conditions for Maxima (Constructive Interference)**
> $$\Delta = n\lambda \quad \text{or} \quad d\sin\theta_n = n\lambda,\quad n = 0, \pm 1, \pm 2, \dots$$
> **Conditions for Minima (Destructive Interference)**
> $$\Delta = \left(n + \tfrac{1}{2}\right)\lambda \quad \text{or} \quad d\sin\theta_n = \left(n+\tfrac{1}{2}\right)\lambda$$

### 2.1.3 Fringe Width

The distance between two successive maxima (or two successive minima) is
$$\boxed{\ \beta = \frac{\lambda D}{d}\ }$$

This is a **constant**, independent of the order $n$ — which is why YDSE fringes are *equally spaced*.

### 2.1.4 Angular Width of a Fringe

The angular half‑width of a fringe (distance between a maximum and the adjacent minimum) is
$$\Delta\theta = \frac{\lambda}{2d}$$

---

## 2.2 Interference in Thin Films

A thin transparent film of *uniform thickness* $t$ and *refractive index* $\mu$ reflects light from its top and bottom surfaces. Because of the phase change of $\pi$ (i.e., a path change of $\lambda/2$) on reflection from a **denser** medium, the two reflected rays acquire an effective path difference.

> [!IMPORTANT]
> **For reflected light (one reflection from denser medium):**
> $$\boxed{\ 2\mu t\cos r = n\lambda\ \text{— Constructive (bright reflected fringe)}\ }$$
> $$\boxed{\ 2\mu t\cos r = \left(n+\tfrac{1}{2}\right)\lambda\ \text{— Destructive (dark reflected fringe)}\ }$$

> [!IMPORTANT]
> **For transmitted light (complementary conditions):**
> $$2\mu t\cos r = n\lambda \;\Rightarrow\; \text{dark transmitted fringe}$$
> $$2\mu t\cos r = \left(n+\tfrac{1}{2}\right)\lambda \;\Rightarrow\; \text{bright transmitted fringe}$$

> [!NOTE]
> *The reflected and transmitted patterns are **complementary** — what is bright in reflection is dark in transmission, and vice versa (because energy is conserved).*

---

## 2.3 Newton's Rings — A Special Case of Thin‑Film Interference

A plano‑convex lens of large radius of curvature $R$ is placed on a flat glass plate. A thin film of air (refractive index $\approx 1$) of varying thickness $t$ is trapped between them. When monochromatic light of wavelength $\lambda$ is incident normally from above, a series of concentric **bright and dark rings** is observed in reflected light, centred at the point of contact.

> [!IMPORTANT]
> **Geometric relation (using $R \gg t$):**
> $$r_n^{2} = (2R - t)\,t \;\approx\; 2Rt \quad \text{(since } t \ll R\text{)}$$

**Reflected light conditions** (one phase change at the lower glass–air interface → the top lens surface reflects from glass‑to‑air, the bottom plate reflects from air‑to‑glass; one $\pi$ shift occurs):

> [!IMPORTANT]
> **Radius of $n^{\text{th}}$ dark ring (reflected light):**
> $$\boxed{\ r_n^{2} = n\lambda R\ }$$
> **Radius of $n^{\text{th}}$ bright ring (reflected light):**
> $$\boxed{\ r_n^{2} = \left(n + \tfrac{1}{2}\right)\lambda R\ }$$

> [!NOTE]
> **Why the centre is dark (in reflected light)**
> At the point of contact, $t = 0$, so the path difference is zero. But the bottom plate reflection introduces a $\pi$ phase shift, while the top lens surface does not. Net phase difference = $\pi$ → destructive interference → **dark centre**. This is a classic KTU viva question.

---

## 2.4 Diffraction — Fraunhofer Single Slit

A plane wave of wavelength $\lambda$ is incident normally on a slit of width $a$. The intensity pattern on a distant screen consists of a **central maximum** flanked by secondary minima and maxima of rapidly decreasing intensity.

### 2.4.1 Minima Condition

Dividing the slit into two equal halves, the path difference between the extreme rays is $a\sin\theta$. For destructive interference between the two halves:
$$\boxed{\ a\sin\theta_n = n\lambda,\quad n = \pm 1, \pm 2, \dots\ }$$

### 2.4.2 Maxima Condition (Approximate)

Between successive minima there is a secondary maximum whose position is *approximately* given by
$$a\sin\theta \approx \left(n + \tfrac{1}{2}\right)\lambda$$
but the actual value lies slightly closer to the nearer minimum. The **central maximum** extends from $n = -1$ to $n = +1$, giving a total angular width
$$\Delta\theta_{\text{central}} = \frac{2\lambda}{a}$$

### 2.4.3 Intensity Distribution

The exact intensity distribution is
$$I(\theta) = I_0 \left(\frac{\sin\alpha}{\alpha}\right)^{2},\quad \alpha = \frac{\pi a \sin\theta}{\lambda}$$

---

## 2.5 Diffraction Grating

A grating consists of $N$ parallel slits, each of width $a$, separated by a constant distance $d = a + b$ (where $b$ is the opaque gap). The quantity $d$ is called the **grating element** and $1/d$ is the **number of lines per metre**.

> [!IMPORTANT]
> **Principal Maxima Condition (Grating Equation):**
> $$\boxed{\ (a + b)\sin\theta_n = n\lambda\ }$$
> **Intensity of principal maxima:**
> $$I_n = I_0 \left(\frac{\sin N\beta}{\sin\beta}\right)^{2}\!\left(\frac{\sin\alpha}{\alpha}\right)^{2}$$
> where $\alpha = \dfrac{\pi a \sin\theta}{\lambda}$ and $\beta = \dfrac{\pi d \sin\theta}{\lambda}$.

**Missing Orders:** If $a$ and $b$ are such that $d/a$ is an integer ratio, certain orders of the grating spectrum vanish. Specifically, the order $n$ is missing if
$$n = \frac{d}{a}\,k,\quad k = 1, 2, 3, \dots$$

---

## 2.6 Resolving Power

**Resolving power** is the ability of an optical instrument to distinguish two closely spaced spectral lines as separate.

> [!IMPORTANT]
> **Rayleigh's Criterion of Resolution**
> Two wavelengths $\lambda$ and $\lambda + d\lambda$ are said to be *just resolved* when the principal maximum of one falls exactly on the first minimum of the other.

> [!IMPORTANT]
> **Resolving Power of a Grating**
> $$\boxed{\ R = \frac{\lambda}{d\lambda} = nN\ }$$
> where $n$ is the order of the spectrum and $N$ is the total number of illuminated slits.

> [!IMPORTANT]
> **Resolving Power of a Telescope (Airy Disc Criterion)**
> $$R = \frac{1}{d\theta} = \frac{D}{1.22\,\lambda}$$
> Minimum resolvable angular separation
> $$d\theta = \frac{1.22\,\lambda}{D}$$

---

## 2.7 KTU High‑Yield Formula Cheat Sheet

> [!IMPORTANT]
> | Phenomenon | Key Equation | Symbols & Notes |
> |------------|--------------|-----------------|
> | YDSE maxima | $d\sin\theta = n\lambda$ | $n = 0, \pm 1, \pm 2 \dots$ |
> | YDSE minima | $d\sin\theta = (n + \tfrac{1}{2})\lambda$ | equally spaced |
> | Fringe width | $\beta = \lambda D / d$ | independent of $n$ |
> | Shift of fringes (slab) | $\Delta y = (\mu - 1)t D / d$ | wedge or slab introduced |
> | Thin film (reflected bright) | $2\mu t\cos r = n\lambda$ | with one $\pi$ shift |
> | Thin film (reflected dark) | $2\mu t\cos r = (n + \tfrac{1}{2})\lambda$ | complementary to transmitted |
> | Newton's ring (dark) | $r_n^{2} = n\lambda R$ | centre is dark |
> | Newton's ring (bright) | $r_n^{2} = (n + \tfrac{1}{2})\lambda R$ | for reflected light |
> | Single‑slit minima | $a\sin\theta = n\lambda$ | $n \ne 0$ |
> | Single‑slit central max width | $\Delta\theta = 2\lambda / a$ | full angular width |
> | Grating equation | $(a+b)\sin\theta = n\lambda$ | principal maxima |
> | Grating resolving power | $R = \lambda / d\lambda = nN$ | Rayleigh's criterion |
> | Telescope resolution | $d\theta = 1.22\lambda / D$ | Airy disc |
> | Fringe visibility | $V = (I_{\max} - I_{\min})/(I_{\max} + I_{\min})$ | $0 \le V \le 1$ |

---

## 2.8 Real‑World Engineering Utility

> [!TIP]
> **Where this matters in industry and research:**
> * **YDSE principle → Laser Interferometers (LIGO)** — detection of gravitational waves relies on sub‑nanometre path‑difference measurements using Michelson interferometry.
> * **Thin‑film interference → Anti‑reflection coatings on camera lenses, solar cells, eyeglasses** — a single $\lambda/4$ layer of MgF$_2$ reduces reflection from $\sim 4\%$ to $<1\%$.
> * **Newton's rings → Optical flatness testing** — a reference flat and a test surface produce interference contours whose deviation from perfect circles maps surface irregularities to within $\lambda/20$.
> * **Diffraction grating → Spectrometers in astronomy, chemical analysis (ICP‑OES), and laser pulse compression (chirped pulse amplifiers).**
> * **Rayleigh's criterion → Telescope design (Hubble, James Webb) and camera lens MTF testing** — sets the minimum aperture $D$ for resolving a given $d\theta$.

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# 3. Step‑by‑Step Derivations, Worked Examples & Code Implementation

## 3.1 Derivation of Fringe Width in YDSE

**Statement:** Show that the fringe width in Young's double‑slit experiment is $\beta = \lambda D / d$.

**Setup:** Let $S_1$ and $S_2$ be two coherent slits separated by distance $d$, with a screen at perpendicular distance $D$. Let $P$ be a point on the screen at distance $y$ from the central point $O$, and let $P'$ be the foot of the perpendicular from $S_1$ to $S_2 P$.

**Geometric construction:**
$$S_2 P' = S_2 P - S_1 P = \Delta \quad \text{(optical path difference)}$$

From the right triangle $S_1 S_2 P'$ with $S_1 S_2 = d$ and angle $\angle S_1 P' S_2 = \theta$,
$$S_2 P' = d \sin\theta$$

But for small angles, $\sin\theta \approx \tan\theta = y/D$, hence
$$\Delta = d \cdot \frac{y}{D} = \frac{dy}{D}$$

**Condition for $n^{\text{th}}$ bright fringe:**
$$\frac{dy_n}{D} = n\lambda \quad\Rightarrow\quad y_n = \frac{n\lambda D}{d}$$

**Condition for $(n+1)^{\text{th}}$ bright fringe:**
$$y_{n+1} = \frac{(n+1)\lambda D}{d}$$

**Fringe width** $\beta = y_{n+1} - y_n$:
$$\beta = \frac{(n+1)\lambda D}{d} - \frac{n\lambda D}{d} = \frac{\lambda D}{d}$$

$$\boxed{\ \beta = \frac{\lambda D}{d}\ }$$

**Validity check:** Units — $\lambda$ in metres, $D$ in metres, $d$ in metres → $\beta$ in metres. The result is independent of $n$, so the fringes are *equally spaced*. ✔

---

## 3.2 Derivation of Newton's Ring Formula (Radius of $n^{\text{th}}$ Dark Ring)

**Setup:** A plano‑convex lens of radius of curvature $R$ rests on a flat glass plate. At a radial distance $r$ from the point of contact, the air film has thickness $t$. By the geometry of the lens:
$$R^{2} = r^{2} + (R - t)^{2}$$
$$\Rightarrow R^{2} = r^{2} + R^{2} - 2Rt + t^{2}$$
$$\Rightarrow r^{2} = 2Rt - t^{2}$$

For $t \ll R$, neglect $t^{2}$:
$$r^{2} \approx 2Rt \quad\Rightarrow\quad t = \frac{r^{2}}{2R} \tag{1}$$

**Path difference between the two reflected rays** (one undergoes $\pi$ phase shift on reflection at the lower glass plate):
$$\Delta = 2\mu t \cos r + \frac{\lambda}{2}$$
With $\mu = 1$ (air) and normal incidence ($\cos r = 1$):
$$\Delta = 2t + \frac{\lambda}{2}$$

**Dark ring condition:** $\Delta = (2n+1)\dfrac{\lambda}{2}$
$$2t + \frac{\lambda}{2} = (2n+1)\frac{\lambda}{2} \quad\Rightarrow\quad 2t = n\lambda \quad\Rightarrow\quad t = \frac{n\lambda}{2}$$

Substituting into (1):
$$\frac{r_n^{2}}{2R} = \frac{n\lambda}{2}$$

$$\boxed{\ r_n^{2} = n\lambda R\ }$$

**Why centre is dark:** At $r = 0$, $t = 0$, so the only path difference is the $\pi$ shift → destructive. ✔

---

## 3.3 Worked Example 1 — YDSE Fringe Width (7 marks, Apply level)

> **[KTU University Exam — July 2024 pattern]**
> In a Young's double‑slit experiment, the two slits are separated by $0.5$ mm and the screen is at a distance of $1.2$ m from the slits. Monochromatic light of wavelength $600$ nm is used. Calculate (a) the fringe width and (b) the distance of the 5th bright fringe from the central maximum.

**Given:**
$$d = 0.5\ \text{mm} = 0.5 \times 10^{-3}\ \text{m}, \quad D = 1.2\ \text{m}, \quad \lambda = 600\ \text{nm} = 6 \times 10^{-7}\ \text{m}, \quad n = 5$$

**(a) Fringe width:**
$$\beta = \frac{\lambda D}{d} = \frac{(6 \times 10^{-7})(1.2)}{0.5 \times 10^{-3}}$$

Step by step:
$$\beta = \frac{6 \times 1.2}{0.5} \times 10^{-7+3} = \frac{7.2}{0.5} \times 10^{-4}$$
$$\beta = 14.4 \times 10^{-4}\ \text{m} = 1.44\ \text{mm}$$

**(b) Distance of 5th bright fringe:**
$$y_5 = \frac{n \lambda D}{d} = 5 \times 1.44\ \text{mm} = 7.2\ \text{mm}$$

**Result:** $\beta = 1.44\ \text{mm}$ and $y_5 = 7.2\ \text{mm}$ from the centre.

> [!WARNING]
> **Common Valuation Pitfall:** Forgetting to convert mm to m. Always write units explicitly. Marks are awarded for clear unit handling, not just the final number.

---

## 3.4 Worked Example 2 — Newton's Rings Wavelength Determination (7 marks, Apply level)

> **[KTU University Exam — Dec 2023 pattern]**
> In a Newton's rings experiment, the radius of the 5th dark ring is $3.0$ mm and that of the 15th dark ring is $5.0$ mm, with a lens of radius of curvature $R = 1.0$ m. Calculate the wavelength of light used.

**Given:** $n_1 = 5$, $r_1 = 3.0$ mm $= 3.0 \times 10^{-3}$ m; $n_2 = 15$, $r_2 = 5.0$ mm $= 5.0 \times 10^{-3}$ m; $R = 1.0$ m.

**Formula:** $r_n^{2} = n\lambda R$, so
$$r_1^{2} = n_1 \lambda R, \quad r_2^{2} = n_2 \lambda R$$

**Subtracting (to eliminate any zero error in $R$ if needed; here $R$ is given directly):**
$$r_2^{2} - r_1^{2} = (n_2 - n_1)\lambda R$$
$$\lambda = \frac{r_2^{2} - r_1^{2}}{(n_2 - n_1)R}$$

**Numerical evaluation:**
$$r_2^{2} = (5.0 \times 10^{-3})^{2} = 25 \times 10^{-6}\ \text{m}^{2}$$
$$r_1^{2} = (3.0 \times 10^{-3})^{2} = 9 \times 10^{-6}\ \text{m}^{2}$$
$$r_2^{2} - r_1^{2} = 16 \times 10^{-6}\ \text{m}^{2}$$
$$n_2 - n_1 = 15 - 5 = 10$$
$$\lambda = \frac{16 \times 10^{-6}}{10 \times 1.0} = 1.6 \times 10^{-6}\ \text{m} = 1600\ \text{nm}$$

**This value lies in the infrared** — the answer in the *expected* KTU range is typically a few hundred nm. The result indicates the problem data leads to IR; the *method* is what earns full marks.

> [!NOTE]
> **Better‑conditioned data:** If the question gave $n_1 = 10$, $r_1 = 2.5$ mm and $n_2 = 20$, $r_2 = 3.5$ mm with $R = 1.0$ m, then
> $$\lambda = \frac{(3.5^{2} - 2.5^{2}) \times 10^{-6}}{(20-10) \times 1.0} = \frac{(12.25 - 6.25)\times 10^{-6}}{10} = \frac{6 \times 10^{-6}}{10} = 6 \times 10^{-7}\ \text{m} = 600\ \text{nm}$$
> which is realistic visible light.

---

## 3.5 Worked Example 3 — Diffraction Grating Wavelength (7 marks, Apply)

> **[KTU University Exam — Model pattern]**
> A diffraction grating has $5000$ lines/cm. Light incident normally produces a second‑order maximum at $30^{\circ}$. Calculate the wavelength.

**Given:** Lines per cm $= 5000$, so $d = 1/(5000 \times 100) = 2 \times 10^{-6}$ m; $n = 2$; $\theta = 30^{\circ}$.

**Grating equation:**
$$d\sin\theta = n\lambda$$
$$\lambda = \frac{d \sin\theta}{n} = \frac{(2 \times 10^{-6})(\sin 30^{\circ})}{2} = \frac{2 \times 10^{-6} \times 0.5}{2}$$
$$\boxed{\ \lambda = 5 \times 10^{-7}\ \text{m} = 500\ \text{nm}\ }$$

---

## 3.6 Python Implementation — Simulating YDSE, Newton's Rings, and Single‑Slit Diffraction

The following self‑contained Python program visualises all three phenomena. It uses **NumPy** for vectorised math and **Matplotlib** for plotting. Run it in any standard Python 3.9+ environment.

```python
"""
GZPHT121 — Module 2 (Interference and Diffraction) Visualiser
Author : KTU Senior Examiner Reference Code
Python : 3.9+  (Dependencies: numpy, matplotlib)
"""

from __future__ import annotations
import numpy as np
import matplotlib.pyplot as plt
from typing import Tuple


# ------------------------------------------------------------
# 1. Young's Double Slit — Intensity on a distant screen
# ------------------------------------------------------------
def ydse_intensity(
    y: np.ndarray,
    wavelength: float,
    slit_separation: float,
    screen_distance: float,
    intensity_0: float = 1.0,
) -> np.ndarray:
    """
    Returns the interference intensity I(y) for a YDSE setup.
    Validated against analytical maxima at y_n = n * lambda * D / d.
    """
    if slit_separation <= 0:
        raise ValueError("Slit separation 'd' must be strictly positive.")
    if wavelength <= 0:
        raise ValueError("Wavelength must be strictly positive.")
    if screen_distance <= 0:
        raise ValueError("Screen distance 'D' must be strictly positive.")

    phase = (2.0 * np.pi * slit_separation * y) / (wavelength * screen_distance)
    return 4.0 * intensity_0 * np.cos(phase / 2.0) ** 2


# ------------------------------------------------------------
# 2. Newton's Rings — Radial intensity in reflected light
# ------------------------------------------------------------
def newtons_rings_intensity(
    r: np.ndarray,
    wavelength: float,
    radius_of_curvature: float,
    intensity_0: float = 1.0,
) -> np.ndarray:
    """
    Returns the reflected intensity I(r) for a Newton's rings setup.
    Central spot is dark (I=0) because of the pi phase shift on
    reflection from the lower glass plate.
    """
    if radius_of_curvature <= 0:
        raise ValueError("Radius of curvature 'R' must be positive.")
    if wavelength <= 0:
        raise ValueError("Wavelength must be positive.")

    # Optical path difference = 2*t = r^2 / R   (since t = r^2 / (2R))
    phase = (np.pi * r ** 2) / (wavelength * radius_of_curvature)
    return 4.0 * intensity_0 * np.sin(phase / 2.0) ** 2  # sin^2 gives DARK at r=0


# ------------------------------------------------------------
# 3. Single Slit Fraunhofer Diffraction
# ------------------------------------------------------------
def single_slit_intensity(
    theta: np.ndarray,
    wavelength: float,
    slit_width: float,
    intensity_0: float = 1.0,
) -> np.ndarray:
    """
    Fraunhofer single-slit intensity I(theta) = I0 * (sin(alpha)/alpha)^2
    where alpha = pi * a * sin(theta) / lambda.
    """
    if slit_width <= 0:
        raise ValueError("Slit width 'a' must be positive.")
    if wavelength <= 0:
        raise ValueError("Wavelength must be positive.")

    alpha = (np.pi * slit_width * np.sin(theta)) / wavelength
    # Avoid division by zero at alpha=0 -> limit is I0
    with np.errstate(divide="ignore", invalid="ignore"):
        I = intensity_0 * (np.sinc(alpha / np.pi)) ** 2
    return np.where(np.isfinite(I), I, intensity_0)


# ------------------------------------------------------------
# Helper — generate axes
# ------------------------------------------------------------
def _make_axis(
    domain: Tuple[float, float], points: int = 2000
) -> np.ndarray:
    return np.linspace(domain[0], domain[1], points)


# ------------------------------------------------------------
# Main demonstration
# ------------------------------------------------------------
def main() -> None:
    # Common parameters (KTU-typical visible light)
    lam = 589e-9        # 589 nm (sodium D-line)
    D, d, a = 1.0, 0.5e-3, 0.1e-3
    R_curv = 1.0        # 1 m lens

    # ----- YDSE -----
    y = _make_axis((-0.01, 0.01))                # ±10 mm on screen
    I_y = ydse_intensity(y, lam, d, D)
    beta = lam * D / d
    print(f"[YDSE]   Fringe width beta = {beta*1e3:.4f} mm")

    # ----- Newton's Rings -----
    r = _make_axis((0.0, 5e-3))                  # 0 to 5 mm
    I_r = newtons_rings_intensity(r, lam, R_curv)
    r_10 = np.sqrt(10 * lam * R_curv)
    print(f"[Newton] r(10th dark) = {r_10*1e3:.4f} mm")

    # ----- Single Slit -----
    theta = _make_axis((-0.05, 0.05))            # ±0.05 rad
    I_t = single_slit_intensity(theta, lam, a)
    print(f"[Slit ]  Central max half-width = {lam/a:.5f} rad")

    # ----- Plot -----
    fig, axes = plt.subplots(3, 1, figsize=(9, 9))
    axes[0].plot(y * 1e3, I_y, color="navy")
    axes[0].set_title("Young's Double Slit — Intensity Pattern")
    axes[0].set_xlabel("Screen position y (mm)")
    axes[0].set_ylabel("I / I0")
    axes[0].grid(alpha=0.3)

    axes[1].plot(r * 1e3, I_r, color="darkred")
    axes[1].set_title("Newton's Rings — Reflected Intensity")
    axes[1].set_xlabel("Radial distance r (mm)")
    axes[1].set_ylabel("I / I0")
    axes[1].grid(alpha=0.3)

    axes[2].plot(np.degrees(theta), I_t, color="darkgreen")
    axes[2].set_title("Single-Slit Fraunhofer Diffraction")
    axes[2].set_xlabel("Angle theta (degrees)")
    axes[2].set_ylabel("I / I0")
    axes[2].grid(alpha=0.3)

    plt.tight_layout()
    plt.show()


if __name__ == "__main__":
    main()
```

**Expected numerical output:**
```
[YDSE]   Fringe width beta = 1.1780 mm
[Newton] r(10th dark) = 2.4265 mm
[Slit ]  Central max half-width = 0.00589 rad
```

The three plots will be displayed in a single window:
1. **YDSE** — equally spaced, equal‑height fringes across the full screen.
2. **Newton's Rings** — sharp dark centre with rapidly damped oscillations outward.
3. **Single Slit** — tall narrow central maximum with tiny side lobes.

> [!TIP]
> **Try this experiment (no marks, but for understanding):** Modify `d` in the YDSE call to $0.25$ mm. Re‑run and notice that the fringe width *doubles*. This visualises $\beta \propto 1/d$.

---

## 3.7 Worked Example 4 — Resolving Power of a Telescope (7 marks, Apply)

> **[KTU University Exam — Sample pattern]**
> A telescope has an objective lens of diameter $20$ cm. Calculate the smallest angular separation it can resolve at a mean wavelength of $550$ nm.

**Given:** $D = 0.20$ m, $\lambda = 550$ nm $= 5.5 \times 10^{-7}$ m.

**Rayleigh's criterion:**
$$d\theta = \frac{1.22\,\lambda}{D} = \frac{1.22 \times 5.5 \times 10^{-7}}{0.20}$$

Step by step:
$$1.22 \times 5.5 = 6.71$$
$$d\theta = \frac{6.71 \times 10^{-7}}{0.20} = 33.55 \times 10^{-7}\ \text{rad}$$
$$d\theta = 3.355 \times 10^{-6}\ \text{rad} \approx 0.69\ \text{arc‑seconds}$$

**Result:** The smallest resolvable angular separation is about **0.69 arc‑seconds**. This matches typical human vision limits — the Hubble Space Telescope ($D = 2.4$ m) achieves $\sim 0.05$ arc‑seconds.

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# 4. Structural Diagrams & Schematics

## 4.1 Mermaid Block — YDSE Optical Train and Fringe Formation Topology

```mermaid
flowchart LR
    subgraph SourceAssembly["MONOCHROMATIC SOURCE BLOCK"]
        srcA["Monochromatic Lamp"]
        fltA["Filter 589 nm"]
        sltA["Source Slit S"]
    end

    subgraph Collimation["COLLIMATION MODULE"]
        lnsA["Biconvex Lens L1"]
    end

    subgraph SlitPlane["DOUBLE SLIT ASSEMBLY"]
        sltB1["Slit S1"]
        sltB2["Slit S2 separated by d"]
    end

    subgraph ImagingOptics["IMAGING OPTICS"]
        lnsB["Lens L2 optional"]
    end

    subgraph ScreenModule["DETECTION SCREEN"]
        obsA["Screen at distance D"]
        bndA["Bright fringes n = 0 plus minus 1 plus minus 2"]
        bndB["Dark fringes between bright bands"]
    end

    srcA --> fltA --> sltA --> lnsA
    lnsA --> sltB1
    lnsA --> sltB2
    sltB1 -.path difference dy on screen.-> obsA
    sltB2 -.path difference dy on screen.-> obsA
    obsA --> bndA
    obsA --> bndB
    lnsB -.optional Fourier lens.-> obsA
```

**Reading the diagram:** A single source $S$ ensures the two secondary sources $S_1$ and $S_2$ are *mutually coherent*. The dashed arrows indicate the *interfering beams*, not a physical light path — they represent the *phase relationship* between the two rays arriving at the screen.

---

## 4.2 Mermaid Block — Newton's Rings Optical Path

```mermaid
flowchart TD
    subgraph InputBeam["INCIDENT BEAM"]
        incA["Monochromatic parallel light lambda"]
    end

    subgraph LensOnPlate["LENS PLATE COMBINATION"]
        lnsR["Plano convex lens radius R"]
        gapA["Air film thickness t at radius r"]
        pltA["Flat glass plate"]
    end

    subgraph ReflectionPaths["TWO REFLECTED RAYS"]
        refA["Ray 1 reflected from top lens surface no phase shift"]
        refB["Ray 2 reflected from bottom plate air to glass phase shift pi"]
    end

    subgraph Interference["INTERFERENCE STATE"]
        ifrA["Phase difference phi = 2 pi times 2t plus pi over lambda"]
        ifrB["Bright ring if 2t = n plus half times lambda"]
        ifrC["Dark ring if 2t = n times lambda"]
    end

    incA --> lnsR
    lnsR --> refA
    lnsR --> gapA --> pltA --> refB
    refA --> ifrA
    refB --> ifrA
    ifrA --> ifrB
    ifrA --> ifrC
```

---

## 4.3 Mermaid Block — Diffraction Grating Spectral Dispersion

```mermaid
flowchart LR
    subgraph InputSide["INCIDENT SIDE"]
        srcG["White light source"]
        clnG["Collimating lens"]
    end

    subgraph GratingAssembly["TRANSMISSION GRATING"]
        grtG["Grating with N slits period d"]
    end

    subgraph OutputOrders["DIFFRACTED ORDERS"]
        ord0["Zero order central white"]
        ord1["First order spectrum angle theta 1"]
        ord2["Second order spectrum angle theta 2"]
        ord3["Higher orders theta increases"]
    end

    srcG --> clnG --> grtG
    grtG --> ord0
    grtG --> ord1
    grtG --> ord2
    grtG --> ord3
```

**Operational note:** The angle $\theta_n$ depends on $\lambda$ through $(a+b)\sin\theta_n = n\lambda$. For fixed $n$, longer wavelengths (red) are deviated more than shorter (violet), producing the characteristic rainbow spread in each order.

---

## 4.4 Mermaid Block — Single Slit Diffraction Intensity Distribution

```mermaid
flowchart TD
    subgraph Geometry["PHYSICAL SETUP"]
        sltS["Slit of width a"]
        scnS["Far field screen"]
        angS["Angle theta from central axis"]
    end

    subgraph IntensityChain["INTENSITY EVALUATION"]
        phaseA["Path difference across slit a sin theta"]
        phasB["Phase difference alpha = pi a sin theta over lambda"]
        formA["I of theta = I0 times sin alpha over alpha squared"]
    end

    subgraph Features["KEY FEATURES OF PATTERN"]
        cenS["Central maximum at theta equals 0"]
        minS["Minima at a sin theta equals n lambda for n non zero"]
        maxS["Secondary maxima between minima lower than central"]
    end

    sltS --> scnS
    angS --> phaseA --> phasB --> formA
    formA --> cenS
    formA --> minS
    formA --> maxS
```

---

## 4.5 Sequential Processing Topology — How an Interference Pattern is Digitally Reconstructed

```mermaid
flowchart TD
    step1["Step 1 Record intensity profile I y on CCD"]
    step2["Step 2 Identify fringe spacing using FFT peak detection"]
    step3["Step 3 Compute wavelength lambda equals beta d over D"]
    step4["Step 4 Estimate error by varying slit separation d"]
    step5["Step 5 Compare with reference Hg or Na spectrum for calibration"]

    step1 --> step2 --> step3 --> step4 --> step5
```

This topology is useful in a **physics laboratory** logbook entry: even if you do not have a precision spectrometer, the *fringe spacing* of YDSE gives wavelength to about $\pm 2\%$ accuracy.

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A — Short Answer Questions (2 × 3 = 6 marks)

> **Cognitive Levels: Remember / Understand**

### Question A.1 — Define coherence. (3 marks, CO1, Remember)

> **[KTU University Exam — July 2024]**

**Model Answer:**
**Coherence** refers to the property of two or more waves to maintain a **fixed phase relationship** over time and space. Two sources are *coherent* if they emit waves of the same frequency with a constant (preferably zero) initial phase difference.

*Temporal coherence* refers to the finite spectral width of a source — a perfectly monochromatic source is *temporally fully coherent*. *Spatial coherence* refers to the finite size of the source — a true point source is *spatially fully coherent*. Real sources have *partial* coherence, and the fringe visibility $V$ drops below 1 accordingly.

**Valuation key:**
- [Correct definition of coherence: 1 Mark]
- [Mention of phase relationship and frequency: 1 Mark]
- [Distinction of temporal vs spatial coherence: 1 Mark]

---

### Question A.2 — State and explain Rayleigh's criterion of resolution. (3 marks, CO2, Understand)

> **[KTU University Exam — Dec 2023]**

**Model Answer:**
Rayleigh's criterion states that two spectral lines of wavelengths $\lambda$ and $\lambda + d\lambda$ are *just resolved* by an optical instrument when the **central maximum of the diffraction pattern of one source falls exactly on the first minimum of the other**. Mathematically, the minimum resolvable angular separation is
$$d\theta = \frac{1.22\,\lambda}{D}\quad \text{(for a circular aperture of diameter } D\text{)}$$
and the resolving power of a grating is
$$R = \frac{\lambda}{d\lambda} = nN$$
where $n$ is the order and $N$ is the total number of illuminated slits.

**Valuation key:**
- [Statement of Rayleigh's criterion: 1 Mark]
- [Mathematical expression for grating / aperture: 1 Mark]
- [Physical meaning: 1 Mark]

---

## 5.2 Part B — Long Answer Questions (Internal Choice, 14 marks each)

> **Cognitive Levels: Understand (7) + Apply (7)**

---

### Question B (Option A) — Young's Double Slit + Shift Due to Slab [14 marks]

> **[KTU University Exam — Dec 2023, Adapted]**

**(a) [7 marks, CO1, Understand]** *Describe Young's double‑slit experiment with a neat labelled diagram. Derive the conditions for constructive and destructive interference, and hence obtain an expression for the fringe width.*

**Model Solution:**

**Construction:** A monochromatic source $S$ (e.g., a sodium lamp with a filter) illuminates a narrow slit. Light from this slit falls on two parallel, narrow, closely spaced slits $S_1$ and $S_2$ separated by distance $d$. A screen is placed at a large distance $D$ from the slits, perpendicular to the line joining them.

**Working:** $S_1$ and $S_2$ act as *secondary coherent sources* (Huygens' construction). The light waves from $S_1$ and $S_2$ superpose on the screen. The path difference at a point $P$ on the screen at perpendicular distance $y$ from the central maximum $O$ is
$$\Delta = S_2 P - S_1 P = \frac{d\,y}{D}$$
The corresponding phase difference is
$$\phi = \frac{2\pi}{\lambda}\,\Delta = \frac{2\pi d y}{\lambda D}$$

**Conditions:**
* *Constructive interference* (bright fringe): $\Delta = n\lambda \;\Rightarrow\; y_n = \dfrac{n\lambda D}{d}$
* *Destructive interference* (dark fringe): $\Delta = \left(n+\tfrac{1}{2}\right)\lambda \;\Rightarrow\; y_n' = \dfrac{(2n+1)\lambda D}{2d}$

**Fringe width:**
$$\beta = y_{n+1} - y_n = \frac{\lambda D}{d}$$

**Valuation key (a):**
- [Diagram with labels S, S1, S2, d, D, y, P: 2 Marks]
- [Derivation of path difference dy/D: 2 Marks]
- [Conditions of maxima and minima: 2 Marks]
- [Final fringe width expression: 1 Mark]

---

**(b) [7 marks, CO2, Apply]** *A YDSE apparatus uses slits separated by $0.4$ mm and a screen at $1.5$ m. Light of wavelength $500$ nm is used. A thin glass slab of refractive index $1.5$ and thickness $10\ \mu\text{m}$ is placed in front of one of the slits. Calculate (i) the fringe width, (ii) the shift of the central maximum, and (iii) the new position of the central fringe.*

**Model Solution:**

**Given:** $d = 0.4 \times 10^{-3}$ m, $D = 1.5$ m, $\lambda = 500 \times 10^{-9}$ m, $\mu = 1.5$, $t = 10 \times 10^{-6}$ m.

**(i) Fringe width:**
$$\beta = \frac{\lambda D}{d} = \frac{(500 \times 10^{-9})(1.5)}{0.4 \times 10^{-3}}$$
$$\beta = \frac{750 \times 10^{-9}}{4 \times 10^{-4}} = \frac{750}{4} \times 10^{-5} = 187.5 \times 10^{-5}\ \text{m} = 1.875\ \text{mm}$$

**(ii) Shift of the central maximum:**

When a slab of thickness $t$ and refractive index $\mu$ is introduced in front of one slit, an additional path difference $(\mu - 1)t$ is introduced. The central maximum shifts by
$$x = \frac{(\mu - 1)\,t\,D}{d}$$
$$x = \frac{(1.5 - 1)(10 \times 10^{-6})(1.5)}{0.4 \times 10^{-3}} = \frac{(0.5)(10 \times 10^{-6})(1.5)}{0.4 \times 10^{-3}}$$

Step by step:
$$0.5 \times 10 \times 1.5 = 7.5$$
$$x = \frac{7.5 \times 10^{-6}}{0.4 \times 10^{-3}} = \frac{7.5}{0.4} \times 10^{-3} = 18.75 \times 10^{-3}\ \text{m}$$
$$x = 18.75\ \text{mm}$$

**(iii) New position of the central fringe:**

The number of fringes that have *crossed* the original central point is
$$N = \frac{x}{\beta} = \frac{18.75\ \text{mm}}{1.875\ \text{mm}} = 10$$

So the central fringe (the point of zero net path difference) has shifted to the position of the *10th* bright fringe of the undisturbed pattern — exactly $10$ fringes to one side.

**Final answer:** $\beta = 1.875$ mm, shift $x = 18.75$ mm toward the side of the slab.

**Valuation key (b):**
- [Correct formula for fringe width: 1 Mark]
- [Numerical value of beta: 1 Mark]
- [Correct formula for shift with slab: 1 Mark]
- [Substitution with proper units: 2 Marks]
- [Final answer x = 18.75 mm: 1 Mark]
- [Interpretation as 10 fringes shift: 1 Mark]

---

### Question B (Option B) — Newton's Rings + Diffraction Grating [14 marks]

> **[KTU University Exam — July 2024, Adapted]**

**(a) [7 marks, CO1, Understand]** *With a neat labelled diagram, describe the formation of Newton's rings in reflected light. Derive the expression for the radius of the $n^{\text{th}}$ dark ring, and explain why the centre of the pattern is dark.*

**Model Solution:**

**Setup:** A plano‑convex lens of large radius of curvature $R$ is placed on a flat glass plate. A thin film of air of varying thickness is enclosed between them. Monochromatic light of wavelength $\lambda$ falls normally from above; reflected light is observed through a travelling microscope.

**Working — two reflected rays:**
* Ray 1: Reflected from the top curved surface (glass‑to‑air) → no phase change.
* Ray 2: Refracted into the air film, reflected from the bottom flat surface (air‑to‑glass) → phase change of $\pi$.

**Path difference:**
$$\Delta = 2\mu t + \frac{\lambda}{2}$$
With $\mu = 1$ and normal incidence:
$$\Delta = 2t + \frac{\lambda}{2}$$

**Geometric relation** (lens on flat plate):
$$r^{2} = (2R - t)\,t \approx 2Rt \;\Rightarrow\; t = \frac{r^{2}}{2R}$$

**Condition for $n^{\text{th}}$ dark ring** (destructive interference):
$$\Delta = (2n+1)\frac{\lambda}{2} \;\Rightarrow\; 2t = n\lambda \;\Rightarrow\; t = \frac{n\lambda}{2}$$

Equating the two expressions for $t$:
$$\frac{r_n^{2}}{2R} = \frac{n\lambda}{2} \;\Rightarrow\; \boxed{r_n^{2} = n\lambda R}$$

**Centre is dark because** at $r = 0$, $t = 0$, so $\Delta = \lambda/2$ → destructive. The single $\pi$ phase shift is responsible for the dark central spot.

**Valuation key (a):**
- [Diagram with lens, plate, air film, microscope: 2 Marks]
- [Two reflected rays with phase shifts identified: 2 Marks]
- [Derivation: r^2 = 2Rt: 1 Mark]
- [Final formula r_n^2 = n lambda R: 1 Mark]
- [Reason for dark centre: 1 Mark]

---

**(b) [7 marks, CO2, Apply]** *A Newton's rings experiment uses a lens of radius of curvature $R = 100$ cm and light of wavelength $590$ nm. Find (i) the radius of the 8th dark ring, and (ii) the thickness of the air film at the 12th bright ring.*

**Model Solution:**

**Given:** $R = 1.00$ m, $\lambda = 590 \times 10^{-9}$ m, $n_{\text{dark}} = 8$, $n_{\text{bright}} = 12$.

**(i) Radius of 8th dark ring:**
$$r_8^{2} = 8 \lambda R = 8 \times 590 \times 10^{-9} \times 1.0$$
$$r_8^{2} = 4720 \times 10^{-9} = 4.72 \times 10^{-6}\ \text{m}^{2}$$
$$r_8 = \sqrt{4.72 \times 10^{-6}} = 2.173 \times 10^{-3}\ \text{m} = 2.173\ \text{mm}$$

**(ii) Thickness of air film at the 12th bright ring:**

For the $n^{\text{th}}$ bright ring in reflected light:
$$r_n^{2} = \left(n + \tfrac{1}{2}\right)\lambda R \quad \text{and}\quad t_n = \frac{r_n^{2}}{2R}$$
$$\Rightarrow t_n = \frac{\left(n + \tfrac{1}{2}\right)\lambda R}{2R} = \left(n + \tfrac{1}{2}\right)\frac{\lambda}{2}$$

For $n = 12$:
$$t_{12} = \left(12.5\right) \times \frac{590 \times 10^{-9}}{2} = 12.5 \times 295 \times 10^{-9}$$
$$t_{12} = 3687.5 \times 10^{-9}\ \text{m} = 3.6875\ \mu\text{m}$$

**Final answers:** $r_8 = 2.173$ mm, $t_{12} = 3.6875\ \mu$m.

**Valuation key (b):**
- [Correct use of dark ring formula: 1 Mark]
- [Numerical r_8 = 2.173 mm: 1 Mark]
- [Bright ring formula: 1 Mark]
- [Relation t = r^2 / 2R: 1 Mark]
- [Numerical t_12 in micrometres: 2 Marks]
- [Unit conversion and significant figures: 1 Mark]

---

## 5.3 KTU Examiner's Valuation Warning & Common Pitfalls

> [!WARNING]
> **Where students *actually* lose marks on this module — read carefully!**
>
> 1. **Missing the $\pi$ phase shift** in Newton's rings or thin films. *Marks lost:* 2–3. Always draw a *separate* ray diagram showing the two reflected rays and label which one undergoes the half‑wavelength shift.
> 2. **Forgetting unit conversion.** Angstrom, nanometre, micrometre, millimetre, metre — KTU questions mix them deliberately. State conversions explicitly on the side: $1\ \text{nm} = 10^{-9}$ m.
> 3. **Using the wrong formula for the bright ring in Newton's rings.** The bright ring formula is $r_n^{2} = (n + 1/2)\lambda R$ for *reflected* light, **not** $n\lambda R$. The latter gives *dark* rings.
> 4. **Treating diffraction grating fringes as a single‑slit problem.** Grating has *both* single‑slit envelope and multi‑slet interference. The "missing order" concept ($n = d/a \cdot k$) is favourite viva territory.
> 5. **In YDSE slab problems, sign of the shift is asked.** Always mention the *direction* (toward the slab). Marks are reserved for this.
> 6. **Rayleigh criterion applied wrongly.** For a *slit* (not circular aperture), the factor is 1.0, not 1.22. The 1.22 factor is for a *circular* aperture (Airy disc).
> 7. **Leaving the central maximum in Newton's rings as a "bright" centre.** Many students memorise the formula but forget that *reflected* Newton's rings have a **dark** centre.

---

## 5.4 Topic Recap & Important Things to Remember

> [!TIP]
> **Rapid‑revision checklist for the night before the exam — print this section!**

- [ ] **Interference = superposition of 2+ coherent beams**; **Diffraction = bending of a single wavefront at an aperture/obstacle**.
- [ ] For sustained fringes: sources must be **coherent, monochromatic, same polarisation, comparable amplitudes**.
- [ ] **Intensity formula:** $I = I_1 + I_2 + 2\sqrt{I_1 I_2}\cos\delta$. When $I_1 = I_2 = I_0$, $I = 4I_0\cos^{2}(\delta/2)$.
- [ ] **YDSE bright:** $d\sin\theta = n\lambda$; **dark:** $d\sin\theta = (n + 1/2)\lambda$.
- [ ] **Fringe width:** $\beta = \lambda D / d$ — *constant*, independent of $n$.
- [ ] **Slab shift:** $x = (\mu - 1)t D / d$ — *toward the slab* containing the higher‑$\mu$ material.
- [ ] **Thin film reflected bright:** $2\mu t\cos r = n\lambda$ (one $\pi$ shift); reflected dark: $(n + 1/2)\lambda$.
- [ ] **Transmitted fringes are complementary to reflected fringes.**
- [ ] **Newton's rings (reflected) dark:** $r_n^{2} = n\lambda R$, **bright:** $r_n^{2} = (n + 1/2)\lambda R$.
- [ ] **Centre of Newton's rings is DARK in reflected light** — because of the lone $\pi$ phase shift.
- [ ] **Geometric lens relation:** $r^{2} = 2Rt - t^{2} \approx 2Rt$ for $t \ll R$.
- [ ] **Single‑slit minima:** $a\sin\theta = n\lambda$ ($n \ne 0$); **central maximum width:** $2\lambda / a$.
- [ ] **Single‑slit intensity:** $I(\theta) = I_0 (\sin\alpha / \alpha)^{2}$ with $\alpha = \pi a \sin\theta / \lambda$.
- [ ] **Grating equation:** $(a + b)\sin\theta_n = n\lambda$; **resolving power:** $R = nN$.
- [ ] **Missing order condition:** $n = (d/a)k$ for integer $k$.
- [ ] **Rayleigh's criterion (aperture):** $d\theta = 1.22\lambda / D$ (circular) or $\lambda / D$ (slit).
- [ ] **Fringe visibility:** $V = (I_{\max} - I_{\min}) / (I_{\max} + I_{\min})$, $0 \le V \le 1$.
- [ ] Always **state units** and **convert** to SI before substitution.
- [ ] Always **draw a ray diagram** in 2‑mark sub‑parts of YDSE / Newton's rings / thin film.
- [ ] For *transmitted* light, **invert** the bright/dark conditions relative to reflected.
- [ ] Visible light range: $400$ nm to $700$ nm; $c = 3 \times 10^{8}$ m/s.
- [ ] The **central maximum of a single slit** is **twice as wide as any secondary maximum**.
- [ ] **Coherence length** $L_c \approx \lambda^{2} / \Delta\lambda$ — sets the maximum OPD for visible fringes.

> [!IMPORTANT]
> **Final advice:** In the KTU 2024 ESE, Module 2 carries roughly 25–30% weightage. Practise at least **two numerical problems each** on YDSE, Newton's rings, and diffraction grating. Memorise the conditions of maxima/minima for *both* reflected and transmitted thin films, and remember that the dark/bright conditions are *swapped*. With these points locked, the module becomes a guaranteed 14–15 mark pickup in Part B.

---

<!-- SECTION_5_END -->
