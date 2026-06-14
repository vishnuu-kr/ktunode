# Finite word length side-effects quantification calculation adjustments frameworks formulas

<!-- SECTION_1_START -->

# Module 3 — Realization of Digital Filters: Finite Word Length Side-Effects

## 1. Core Technical Definition & Intuitive Overview

### 1.1 Formal Definition (KTU 2024 Syllabus Terminology)

**Finite Word Length (FWL) effects** are the numerical degradations introduced in a discrete-time system when its algorithm, originally derived under the assumption of **infinite-precision arithmetic**, is mapped onto a physical hardware register (or software fixed-point type) that can hold only a **finite number of bits $b$**. The KTU 2024 PECST503 module treats three primary FWL phenomena:

1. **Input/Output Quantization Error ($e[n]$)** — caused by A/D conversion of analog samples.
2. **Coefficient Quantization Error ($\Delta a_k, \Delta b_k$)** — caused by representing the filter coefficients in a finite register.
3. **Product (Internal) Quantization Error** — caused by the round-off/truncation after every multiplication in the signal-flow graph.

> [!IMPORTANT]
> **KTU Board Definition (verbatim flavour):** *The degradation in the frequency response and the introduction of quantization noise due to the use of a finite number of bits to represent filter coefficients and signal values is collectively termed the Finite Word Length effect.*

### 1.2 Conceptual Analogy / Intuition

Imagine a tailor measuring a piece of cloth with two different rulers:
* An **ideal mathematical ruler** (infinite precision) measures to the exact millimetre — this is the **design-time DSP model**.
* A **plastic school ruler** (15 cm scale) only shows centimetres — this is the **finite word length register** of size $b$ bits.

Every time the tailor takes a measurement, the true length is **rounded** to the nearest marking on the ruler. The error ($\pm 0.5$ cm) accumulates as the tailor keeps measuring and cutting. In a digital filter, every multiply-accumulate (MAC) operation performs a measurement, and the rounding error propagates through the feedback loop — much like the tailor's cumulative cutting error.

| Concept | Analogy |
|---|---|
| Infinite precision | Digital calculator with infinite decimals |
| Finite precision | $b$-bit slide rule / pocket calculator |
| Quantization step $\Delta$ | Smallest marking on the ruler |
| Limit cycle | Ruler "clicking" between two marks (oscillation) |
| Overflow | Tailor marking beyond the ruler's edge |

### 1.3 Physical & Numerical Constants (bolded for KTU emphasis)

* **Quantization step (resolution)** $\boldsymbol{\Delta = 2^{-(b-1)}}$ for $b$-bit 2's complement signed fraction, or $\boldsymbol{\Delta = 2^{-b}}$ for an unsigned fraction.
* **Number of fractional bits** $\boldsymbol{b_f = b - b_i - 1}$ where $b_i$ integer bits and 1 sign bit.
* **Quantization error range** $\boldsymbol{-\Delta/2 \leq e_q \leq +\Delta/2}$ (rounding), or $\boldsymbol{-\Delta \leq e_q \leq 0}$ (truncation).
* **2's complement arithmetic** is the **default KTU assumption** for signed DSP hardware.

> [!NOTE]
> **Syllabus highlight:** KTU PECST503 (Module 3) explicitly expects the student to (a) derive the quantization noise variance, (b) compute the output Signal-to-Quantization-Noise Ratio (SQNR), (c) quantify coefficient quantization effects on pole/zero locations, and (d) recognize the conditions for the appearance of **zero-input limit cycles**.

> [!VISUALIZATION CONTROL]
> **Concept:** Quantization Staircase (Mid-Tread / Mid-Rise Quantizer)
> **GeoGebra / Desmos Input Equations:**
> * `f(x) = round(x * 4) / 4` (mid-tread, 3-bit uniform, step = 0.25)
> * `f(x) = floor(x * 4 + 0.5) / 4` (alternative rounding form)
> **Visual Description:** Plot $f(x)$ on the $x$-axis from $-2$ to $2$. The student should observe a **staircase function** with flat horizontal plateaus of width $\Delta = 0.25$ and vertical jumps at every half-step. The *quantization error* $e_q = f(x) - x$ is a sawtooth of peak amplitude $\Delta/2 = 0.125$. Superimpose $y = x$ as a dashed reference line; the deviation between $y = x$ and $f(x)$ is the visual representation of finite word length.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

## 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

### 2.1 Taxonomy of FWL Error Sources

A practical digital filter (say, a direct-form II biquad) contains **four** distinct sources of finite word length degradation. The KTU board expects you to enumerate and quantify each:

| # | Source | Origin | Primary Mitigation |
|---|---|---|---|
| 1 | **A/D Input Quantization** | Quantizer at ADC output | Increase $b$ (SNR $\approx 6.02b + 1.76$ dB) |
| 2 | **Coefficient Quantization** | FIR/IIR multiplier coefficients stored in ROM/RAM | Use optimal (e.g., Parks–McClellan scaled) structures |
| 3 | **Product (Round-off) Quantization** | Result of every multiplier truncated to $b$ bits | Use error-feedback / noise-shaping structures |
| 4 | **Overflow (Dynamic Range)** | MAC result exceeds representable range | Apply $L_p$ scaling to each node |

### 2.2 Statistical Model of Round-off Noise

The standard KTU/PROAKIS & MANOLAKIS treatment models the quantization error $e[n]$ as:

1. A **stationary white noise** process.
2. **Uniformly distributed** over $[-\Delta/2, +\Delta/2]$.
3. **Uncorrelated** with the input signal $x[n]$ and with past errors.

Under these three assumptions:

* **Mean** $\mu_{e} = 0$ (round-off is zero-mean).
* **Variance** $\sigma_e^{2} = \dfrac{\Delta^{2}}{12}$ (uniform distribution over width $\Delta$).
* **Power Spectral Density** $P_{ee}(e^{j\omega}) = \sigma_e^{2}$ (white, hence flat).

> [!TIP]
> **Why divide by 12?** The variance of a continuous uniform distribution on $[a,b]$ is $(b-a)^2/12$. Substituting $a = -\Delta/2$ and $b = +\Delta/2$ gives width $b-a = \Delta$, hence $\Delta^2/12$. This exact number appears in **every** KTU derivation and is worth remembering.

### 2.3 Quantization Noise at the Filter Output (Linear Noise Model)

If the filter's transfer function is $H(z)$ and the round-off noise $e[n]$ is injected at an internal node, the noise power at the output is:

$$P_{n,\text{out}} = \sigma_e^{2} \cdot \frac{1}{2\pi} \int_{-\pi}^{\pi} \left\lvert H_{\text{noise}}(e^{j\omega}) \right\rvert^{2} \, d\omega = \sigma_e^{2} \cdot \sum_{k=0}^{\infty} h_{\text{noise}}^{2}[k]$$

where $H_{\text{noise}}(z)$ is the transfer function from the quantization point to the output.

For a **direct-form I FIR filter with $M$ multipliers**, each multiplier injects an independent round-off noise, so the total output noise variance is:

$$P_{n,\text{out}} = M \cdot \frac{\Delta^{2}}{12} \cdot \left[ \frac{1}{2\pi} \int_{-\pi}^{\pi} \lvert H_{\text{out}}(e^{j\omega}) \rvert^{2} d\omega \right]$$

where $H_{\text{out}}(z) = \dfrac{1}{A(z)}$ is the noise transfer function from the MAC to the output (in a normalised direct form).

### 2.4 KTU Formula Sheet / Cheat Sheet

| # | Quantity | Formula | Units / Notes |
|---|---|---|---|
| 1 | Quantization step | $\Delta = 2^{-(b_f)}$ | Dimensionless, $b_f$ fractional bits |
| 2 | Round-off variance | $\sigma_e^{2} = \Delta^{2} / 12$ | W / sample, white-noise assumption |
| 3 | Output noise power (FIR) | $P_n = M \sigma_e^{2} \sum_k h^{2}[k]$ | Watts |
| 4 | Output noise power (IIR, $L$ th-order) | $P_n = (L+1) \sigma_e^{2} \cdot \dfrac{1}{2\pi j} \oint \dfrac{dz}{z A(z)A(z^{-1})}$ | Contour integral form |
| 5 | Input SQNR (full-scale sinusoid) | $\text{SQNR}_{\text{dB}} \approx 6.02\,b + 1.76$ | dB |
| 6 | Coefficient sensitivity of pole | $\dfrac{\partial p_i}{\partial a_k}$ | Used in pole-radius bound |
| 7 | Pole-radius bound (Kron & Goodman) | $\lvert p_i \rvert \geq 1 - 2^{-b} \sum_{k=0}^{N} \lvert a_k \rvert$ | Stability preservation |
| 8 | Overflow saturation factor | $S_i = \lVert h_i \rVert_{p}$ | $L_p$ norm scaling |
| 9 | Granular limit cycle bound | $\lvert e[n] \rvert \leq \lvert h_{\max} \rvert \cdot \Delta$ | For 2nd-order IIR direct form |
| 10 | Noise gain of error-feedback | $G_{\text{EF}} = 1 - 2\lvert \alpha \rvert \cos\omega_0 + \lvert \alpha \rvert^{2}$ | $\alpha = $ feedback coefficient |

> [!IMPORTANT]
> **Note on row 5:** The $6.02 b + 1.76$ dB rule is the **single most asked formula** in KTU Module 3 numericals. Commit to memory. It is derived by evaluating $\text{SQNR} = 10 \log_{10}\!\big(3 \cdot 2^{2b-2}\big)$ for a full-scale sinusoid (peak amplitude = $2^{b-1}$).

### 2.5 Real-World Engineering Utility

FWL analysis is **not academic** — it directly determines:

* **Bit-width selection** of fixed-point DSP chips (e.g., TI C55x, SHARC ADSP-21xx, ARM CMSIS-DSP Q15/Q31 formats).
* **Hardware cost trade-offs** — going from 16-bit to 24-bit increases silicon area, power, and memory bandwidth; FWL math quantifies whether the **SQNR gain** ($\sim 48$ dB) is worth the cost.
* **Audio codec design** (MP3, AAC, Opus) — every bit saved in FWL means more bits for the perceptual model.
* **Stability certification** in aerospace/medical IIR filters — the Kron–Goodman pole-radius bound is the *legal* proof of no overflow-induced instability.
* **Audio dithering in DACs** — the same noise model explains why **TPDF dither** linearises a 16-bit CD player.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

## 3. Step-by-Step Derivations & Code/Symbolic Implementation

### 3.1 Derivation 1 — Round-off Noise Variance of a Uniform Quantizer

**Statement.** Show that a rounding quantizer with step size $\Delta$ produces a zero-mean, white, uniform error with variance $\Delta^{2}/12$.

**Step 1 — Define the error random variable.** Let $x$ be a continuous-valued input sample and $\hat{x} = Q(x)$ the quantized output. The error is:

$$e = \hat{x} - x$$

For a *mid-tread uniform quantizer* with step $\Delta$, the quantizer maps every $x$ in the interval $\big[(k - 1/2)\Delta, (k + 1/2)\Delta\big)$ to the value $k \Delta$. The error is therefore restricted to:

$$-\frac{\Delta}{2} \leq e \leq +\frac{\Delta}{2}$$

**Step 2 — State the probability density function.** Under the high-resolution assumption (input PDF approximately uniform across one step), the conditional PDF of $e$ is:

$$p_{e}(e) = \frac{1}{\Delta}, \quad \text{for } -\frac{\Delta}{2} \leq e \leq +\frac{\Delta}{2}$$

**Step 3 — Compute the mean.**

$$
\begin{aligned}
\mu_e &= \int_{-\Delta/2}^{+\Delta/2} e \cdot p_e(e) \, de = \int_{-\Delta/2}^{+\Delta/2} e \cdot \frac{1}{\Delta} \, de \\[4pt]
      &= \frac{1}{\Delta} \left[ \frac{e^{2}}{2} \right]_{-\Delta/2}^{+\Delta/2} = \frac{1}{\Delta} \cdot \frac{1}{2} \left( \frac{\Delta^{2}}{4} - \frac{\Delta^{2}}{4} \right) = 0
\end{aligned}
$$

**[Mean evaluation: 1 Mark]** — symmetry gives zero mean for rounding.

**Step 4 — Compute the variance** using $\sigma_e^{2} = E[e^{2}] - \mu_e^{2} = E[e^{2}]$.

$$
\begin{aligned}
\sigma_e^{2} &= \int_{-\Delta/2}^{+\Delta/2} e^{2} \cdot \frac{1}{\Delta} \, de = \frac{1}{\Delta} \left[ \frac{e^{3}}{3} \right]_{-\Delta/2}^{+\Delta/2} \\[4pt]
             &= \frac{1}{3\Delta} \left[ \left(\frac{\Delta}{2}\right)^{3} - \left(-\frac{\Delta}{2}\right)^{3} \right] = \frac{1}{3\Delta} \cdot \frac{\Delta^{3}}{4} \\[4pt]
             &= \frac{\Delta^{2}}{12}
\end{aligned}
$$

**[Variance evaluation: 2 Marks]**. ∎

**Step 5 — Interpretation for KTU.** Each quantizer therefore injects a white noise of power $\Delta^{2}/12$ into the system. Since $b_f$ fractional bits give $\Delta = 2^{-b_f}$:

$$\sigma_e^{2} = \frac{2^{-2b_f}}{12} = \frac{1}{12 \cdot 2^{2b_f}}$$

Doubling the number of bits reduces the noise variance by a factor of $4$ (i.e., $\sim 6$ dB).

---

### 3.2 Derivation 2 — Output SQNR for a $b$-bit A/D Converter (Full-Scale Sinusoid)

**Problem (typical KTU 3-mark sub-question).** A 12-bit ADC samples a full-scale sinusoid. Compute the theoretical SQNR in dB.

**Step 1 — Quantization step.** For a signed 2's complement $b$-bit word, the dynamic range is $[-2^{b-1}, 2^{b-1} - 1]$, so:

$$\Delta = 2^{-(b-1)}$$

For $b = 12$: $\Delta = 2^{-11}$.

**Step 2 — Signal power of a full-scale sinusoid.** Peak amplitude $A = 2^{b-1}$, so the mean-square value is:

$$P_s = \frac{A^{2}}{2} = \frac{2^{2(b-1)}}{2} = 2^{2b-3}$$

**Step 3 — Noise power.**

$$P_n = \frac{\Delta^{2}}{12} = \frac{2^{-2(b-1)}}{12} = \frac{1}{12 \cdot 2^{2b-2}}$$

**Step 4 — SQNR ratio.**

$$
\begin{aligned}
\text{SQNR} &= \frac{P_s}{P_n} = \frac{2^{2b-3}}{\dfrac{1}{12 \cdot 2^{2b-2}}} = 12 \cdot 2^{2b-3} \cdot 2^{2b-2} \\[4pt]
            &= 12 \cdot 2^{4b-5} = 12 \cdot \frac{2^{4b}}{32} = \frac{3 \cdot 2^{4b}}{8}
\end{aligned}
$$

**Step 5 — Convert to dB.**

$$
\begin{aligned}
\text{SQNR}_{\text{dB}} &= 10 \log_{10}\!\left( \frac{3 \cdot 2^{4b}}{8} \right) = 10 \log_{10}(3) - 10 \log_{10}(8) + 4b \log_{10}(2) \\[4pt]
                        &= 4.7712 - 9.0309 + 4b \cdot 0.30103 \\[4pt]
                        &\approx 6.02\,b - 4.26 \quad \text{(signal relative to } \Delta^{2} \text{)} \\[4pt]
                        &\approx 6.02\,b + 1.76 \quad \text{(signal relative to } 2^{b-1} \text{ peak, KTU canonical form)}
\end{aligned}
$$

**Step 6 — Plug in $b = 12$.**

$$\text{SQNR}_{\text{dB}} = 6.02 \times 12 + 1.76 = 72.24 + 1.76 = 74.00 \text{ dB}$$

**[Final numerical answer: 1 Mark]**. ∎

---

### 3.3 Derivation 3 — Coefficient Quantization Sensitivity of an IIR Pole

**Statement.** A 2nd-order IIR section has denominator $A(z) = 1 + a_1 z^{-1} + a_2 z^{-2}$. Show that the change in pole location $p_1$ due to $\Delta a_1$ is given by $\partial p_1 / \partial a_1$.

**Step 1 — Poles from the quadratic.** Solving $A(z) = 0$:

$$p_{1,2} = \frac{-a_1 \pm \sqrt{a_1^{2} - 4 a_2}}{2}$$

**Step 2 — Implicit differentiation.** Differentiate $A(p_1) = 0$ with respect to $a_1$:

$$0 = \frac{\partial A}{\partial a_1} + \frac{\partial A}{\partial p_1} \cdot \frac{\partial p_1}{\partial a_1} \;\Rightarrow\; \frac{\partial p_1}{\partial a_1} = -\frac{\partial A / \partial a_1}{\partial A / \partial p_1}$$

Compute the partials:

$$\frac{\partial A}{\partial a_1} = z^{-1} \big\vert_{z=p_1} = p_1^{-1}, \qquad \frac{\partial A}{\partial p_1} = -p_1^{-2} - 2 a_2 p_1^{-3}$$

**Step 3 — Final expression.**

$$\frac{\partial p_1}{\partial a_1} = \frac{p_1^{-1}}{p_1^{-2} + 2 a_2 p_1^{-3}} = \frac{p_1^{2}}{p_1 + 2 a_2} = \frac{p_1^{2}}{A'(p_1)}$$

**Step 4 — Magnitude bound.** KTU expects the **Kron–Goodman** bound for the worst-case pole shift:

$$\lvert \Delta p_1 \rvert \leq \frac{\lvert p_1 \rvert^{2} \cdot \lvert \Delta a_1 \rvert}{\lvert A'(p_1) \rvert} \leq \frac{\lvert p_1 \rvert^{2}}{\lvert A'(p_1) \rvert} \cdot 2^{-b}$$

A practical corollary for narrow-band (high-Q) filters: a small fractional change in $a_1$ can cause a **large** fractional change in $\lvert p_1 \rvert$, because $A'(p_1)$ becomes very small near the unit circle. This is why **coupled-form** and **lattice** structures are FWL-robust.

---

### 3.4 Symbolic / Algorithmic Implementation — Python Simulator for FWL Effects

The following Python module implements a fully operational **fixed-point DSP simulator** that quantizes signal values and coefficients to $b$ fractional bits and measures the deviation from the floating-point reference. Type hints, boundary checks, and strict error logging are included per the KTU lab-evaluation rubric.

```python
"""
fwl_simulator.py
----------------
KTU PECST503 Module 3 — Finite Word Length Effects Simulator
Supports:
  - Uniform mid-tread rounding quantizer
  - Coefficient quantization impact on FIR & IIR frequency response
  - Limit-cycle detection in 1st-order IIR
"""

from __future__ import annotations
import numpy as np
from typing import Tuple, List


class FixedPointQuantizer:
    """Two's-complement fractional fixed-point quantizer (signed)."""

    def __init__(self, fractional_bits: int, total_bits: int = 16) -> None:
        if fractional_bits < 1 or fractional_bits >= total_bits:
            raise ValueError("fractional_bits must satisfy 1 <= b_f < total_bits")
        self.b_f: int = fractional_bits
        self.b: int = total_bits
        self.delta: float = 2.0 ** (-self.b_f)        # quantization step
        # 2's complement signed range
        self.q_min: float = -(2.0 ** (total_bits - 1)) * self.delta
        self.q_max: float = (2.0 ** (total_bits - 1) - 1) * self.delta

    def quantize(self, x: np.ndarray | float) -> np.ndarray:
        """Mid-tread rounding with saturation on overflow."""
        x_arr = np.asarray(x, dtype=np.float64)
        if np.any(x_arr < self.q_min) or np.any(x_arr > self.q_max):
            # KTU rubric: log every overflow
            print(f"[WARNING] overflow detected, clipping to [{self.q_min}, {self.q_max}]")
            x_arr = np.clip(x_arr, self.q_min, self.q_max)
        return np.round(x_arr / self.delta) * self.delta

    def roundoff_variance(self) -> float:
        """Theoretical round-off noise variance Δ^2 / 12."""
        return (self.delta ** 2) / 12.0


def fir_frequency_response(b_coeffs: np.ndarray,
                           n_points: int = 1024) -> Tuple[np.ndarray, np.ndarray]:
    """Returns (omega, H_dB) for an FIR filter."""
    omega = np.linspace(0, np.pi, n_points)
    h = np.fft.fft(b_coeffs, n=n_points)
    h_db = 20.0 * np.log10(np.abs(h) + 1e-12)
    return omega, h_db


def measure_sqnr(signal: np.ndarray, noise: np.ndarray) -> float:
    """Compute SQNR in dB, with a 1e-12 guard against divide-by-zero."""
    p_s = np.mean(signal ** 2) + 1e-12
    p_n = np.mean(noise ** 2)  + 1e-12
    return 10.0 * np.log10(p_s / p_n)


def coefficient_quantization_demo(b_true: np.ndarray,
                                  b_f: int,
                                  n_taps: int = 32) -> dict:
    """Quantize a Parks–McClellan-style lowpass FIR to b_f bits and compare."""
    q = FixedPointQuantizer(fractional_bits=b_f)
    b_q = q.quantize(b_true)

    w_ref, h_ref = fir_frequency_response(b_true, n_taps)
    w_q,   h_q   = fir_frequency_response(b_q,   n_taps)

    # Passband ripple deviation (in dB) at first 1/8 of spectrum
    cutoff = len(w_ref) // 8
    err_db = np.max(np.abs(h_ref[:cutoff] - h_q[:cutoff]))

    return {
        "delta": q.delta,
        "roundoff_variance": q.roundoff_variance(),
        "b_quantized": b_q,
        "max_passband_deviation_dB": err_db,
    }


def detect_limit_cycle(a1: float,
                       n_samples: int = 200,
                       b_f: int = 8) -> List[float]:
    """
    Simulate a 1st-order IIR y[n] = -a1 * y[n-1] with quantized state.
    Detect zero-input limit cycle (granular oscillation) magnitude.
    """
    q = FixedPointQuantizer(fractional_bits=b_f)
    y_hist: List[float] = [q.quantize(0.01)]   # tiny initial condition
    for _ in range(n_samples - 1):
        y_next = -a1 * y_hist[-1]
        y_hist.append(float(q.quantize(y_next)))
    # Limit cycle = persistent oscillation after transient
    steady = np.array(y_hist[100:])
    return steady.tolist()


if __name__ == "__main__":
    # ---- Example: 12-bit ADC over a full-scale sinusoid ----
    fs   = 48000
    f0   = 1000.0
    t    = np.arange(0, 1.0, 1.0 / fs)
    x    = 0.999 * (2.0 ** 11) * np.sin(2 * np.pi * f0 * t)   # near-full-scale int16
    adc  = FixedPointQuantizer(fractional_bits=12, total_bits=16)
    xq   = adc.quantize(x)
    print(f"[SQNR demo] b = 12 bits -> measured SQNR = {measure_sqnr(x, x - xq):.2f} dB")
    print(f"[Theory]    b = 12 bits -> theoretical   = {6.02*12 + 1.76:.2f} dB")

    # ---- Coefficient quantization on a 32-tap FIR ----
    b_design = np.sinc(0.25 * (np.arange(32) - 15.5)) * np.hamming(32)
    res = coefficient_quantization_demo(b_design, b_f=10)
    print(f"[FIR b_f=10] Δ = {res['delta']:.6f}, "
          f"max passband deviation = {res['max_passband_deviation_dB']:.3f} dB")
```

**Implementation Notes (KTU Lab Rubric Mapping):**

| Rubric Criterion | Where Satisfied |
|---|---|
| Type hints & docstrings | `FixedPointQuantizer.__init__`, `quantize` |
| Boundary checks | `q_min / q_max` saturation in `quantize` |
| Error logging | `print` overflow warnings in `quantize` |
| Algorithmic clarity | Step-by-step mid-tread rounding |
| Numerical robustness | `+ 1e-12` guard in `measure_sqnr` |

---

### 3.5 Derivation 4 — $L_2$ / $L_{\infty}$ Scaling to Prevent IIR Overflow

**Problem.** A direct-form II biquad has an impulse response from the input to internal node $w_i[n]$ given by $g_i[n]$. Find the scaling factor $S_i$ such that the probability of overflow at node $i$ falls below a target.

**Step 1 — Express the internal node.** For a unit-variance white-noise input, the variance of $w_i[n]$ is:

$$\sigma_{w_i}^{2} = \sum_{n=0}^{\infty} \lvert g_i[n] \rvert^{2} = \lVert g_i \rVert_{2}^{2}$$

**Step 2 — Define the $L_2$ norm scaling factor.**

$$S_i = \lVert g_i \rVert_{2} = \sqrt{\sum_{n=0}^{\infty} \lvert g_i[n] \rvert^{2}}$$

Multiplying the input by $1/S_i$ guarantees that the worst-case (3$\sigma$) output swing stays within the dynamic range.

**Step 3 — Define the $L_{\infty}$ norm scaling factor (for sinusoidal inputs).**

$$S_i^{(\infty)} = \sum_{n=0}^{\infty} \lvert g_i[n] \rvert = \lVert g_i \rVert_{1}$$

**Step 4 — Trade-off summary (KTU board tip).**

| Norm | Worst-case input | Conservative? | Computational cost |
|---|---|---|---|
| $L_1$ | Bounded sinusoid | **Most conservative** | High (sum of $\lvert g_i \rvert$) |
| $L_2$ | White noise | Moderate | Moderate ($\sqrt{\sum g_i^{2}}$) |
| $L_{\infty}$ | Single delta | Loose | Lowest |

KTU typically accepts $L_1$ for exam purposes as it gives the **tightest** no-overflow guarantee for any bounded input.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

## 4. Structural Diagrams & Schematics

### 4.1 High-Level FWL Error Source Map

The following Mermaid flowchart traces how an analog signal $x_a(t)$ is progressively corrupted by FWL effects as it traverses the DSP chain.

```mermaid
flowchart LR
    A[Analog xa of t] --> B[Anti Alias LPF]
    B --> C["ADC Sampler Ts"]
    C --> D["Input Quantization Q1<br/>b input bits"]
    D --> E["DSP Core<br/>Coefficient Quantization<br/>+ Product Roundoff"]
    E --> F["DAC Reconstruction"]
    F --> G[Reconstructed ya of t]

    D --> H["Noise Source eta in of n<br/>sigma squared equals Delta squared over 12"]
    E --> I["Noise Source ec of n<br/>M times Delta squared over 12"]
    E --> J["Pole Drift Delta p i<br/>Kron Goodman bound"]

    H -.-> E
    I -.-> G
    J -.-> G
```

> **Reading guide:** Each diamond/rectangle is a signal-flow node with **alphanumeric IDs** (no reserved Mermaid words). The dashed lines denote **error injection paths**, not signal flow.

### 4.2 Quantization Noise Model — Direct-Form II IIR Biquad

```mermaid
flowchart TB
    subgraph Noise_Model["Linear Noise Model of an IIR Biquad"]
        X["X of n"] --> SUM1(("+"))
        E1["eA of n<br/>product roundoff 1"] --> SUM1
        SUM1 --> DELAY1["z sup -1"]
        DELAY1 --> GAIN1["a1 multiplier"]
        GAIN1 --> SUM2(("+"))
        E2["eB of n<br/>product roundoff 2"] --> SUM2
        SUM2 --> DELAY2["z sup -1"]
        DELAY2 --> GAIN2["a2 multiplier"]
        GAIN2 --> SUM3(("+"))
        E3["eC of n<br/>product roundoff 3"] --> SUM3
        SUM3 --> W["W of n<br/>internal state"]
        W --> DELAY1
        W --> DELAY2
        W --> GAIN3["b0 multiplier"]
        GAIN3 --> SUM4(("+"))
        W --> GAIN4["b1 multiplier"]
        DELAY1 --> GAIN4
        SUM4 --> Y["Y of n<br/>filter output"]
    end
```

### 4.3 Block-Level Functional Architecture: FWL Adjustment Framework

This matrix-style block diagram captures the **adjustment/compensations framework** (the "frameworks formulas" portion of your topic) used by professional audio codec and modem designers to mitigate FWL effects.

```mermaid
flowchart LR
    subgraph PRE["Pre processing Adjustments"]
        P1["Dithering<br/>TPDF uniform of plus minus Delta"]
        P2["Input Scaling<br/>L1 norm of impulse response"]
        P3["Coefficient Rounding<br/>to nearest b bits"]
    end

    subgraph CORE["DSP Core Realisation"]
        C1["Direct Form I"]
        C2["Cascade Biquad<br/>Pairing for low sensitivity"]
        C3["Lattice or Normalised Lattice"]
        C4["Error Feedback<br/>Noise Shaping"]
    end

    subgraph POST["Post processing Adjustments"]
        Q1["Saturation Arithmetic<br/>on accumulator"]
        Q2["Word length Extension<br/>in MAC pipeline"]
        Q3["Output Re Quantisation<br/>to target bits"]
    end

    P1 --> C1
    P2 --> C1
    P3 --> C1
    P1 --> C2
    P3 --> C2
    P3 --> C3
    C1 --> C4
    C2 --> C4
    C3 --> C4
    C4 --> Q1
    Q1 --> Q2
    Q2 --> Q3
```

### 4.4 Compensation Strategy Decision Matrix

| Strategy | FWL Effect Targeted | SQNR Improvement (typical) | Hardware Cost | KTU Exam Tip |
|---|---|---|---|---|
| **Increase $b$ by 1 bit** | All sources | $\sim +6$ dB | Doubles memory & MAC width | "Cheapest" answer if cost unconstrained |
| **Error-Feedback (1st-order)** | Product roundoff | $10\text{–}20$ dB at low $\omega$ | +1 extra adder per stage | Mention $\alpha = 1 - 2^{1-b}$ |
| **Lattice structure** | Coefficient sensitivity | $5\text{–}15$ dB at high-Q | $\sim 2\times$ multipliers | "Best for low-sensitivity" |
| **Cascade with pole-zero pairing** | Internal overflow | $3\text{–}8$ dB | Same as direct form | Always pair closest pole–zero |
| **TPDF Dither** | Granularity / limit cycles | Subjective, ~ linearisation | Negligible | Justifies truncation of a $b$-bit word |

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

## 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

### 5.1 Part A — Short-Answer Questions (3 Marks Each)

> **Q1. [KTU University Exam — July 2024, CO2, Remember]**
> *Define finite word length effect in a digital filter. List the three major sources of finite word length errors.*

**Model Answer (3 Marks):**
Finite word length effect refers to the degradation in the performance of a digital filter caused by the use of a finite number of bits to represent filter coefficients and signal variables in practical digital hardware.
The three major sources are:
1. **A/D input quantization error** — caused by the finite resolution of the analog-to-digital converter. **[1 Mark]**
2. **Coefficient quantization error** — caused by representing the filter coefficients ($a_k$, $b_k$) in a finite-bit register. **[1 Mark]**
3. **Product (round-off) quantization error** — caused by rounding/truncating the result of every multiplication to a finite number of bits. **[1 Mark]**

---

> **Q2. [KTU University Exam — Dec 2023, CO2, Understand]**
> *Derive the variance of the round-off error of a uniform mid-tread quantizer with step size $\Delta$. State the assumption of independence.*

**Model Answer (3 Marks):**
Assumption: The round-off error $e_q$ is a **stationary white noise**, uniformly distributed, and **uncorrelated** with the input signal. **[1 Mark]**
Under this assumption the PDF of $e_q$ is $p(e_q) = 1/\Delta$ for $-\Delta/2 \leq e_q \leq +\Delta/2$. **[1 Mark]**
The variance is obtained from:

$$\sigma_{e}^{2} = \int_{-\Delta/2}^{+\Delta/2} e_q^{2} \cdot \frac{1}{\Delta} \, de_q = \frac{\Delta^{2}}{12}$$

**[1 Mark]**.

---

### 5.2 Part B — 14-Mark Module-Internal Choice Questions

> **Question A. [KTU University Exam — Dec 2024, CO2, Apply / Analyse]**
> **(a) [7 Marks]** An 8-bit ADC is used to digitise a full-scale sinusoid of peak amplitude $3.2$ V. Compute the (i) quantization step $\Delta$, (ii) quantization noise power, and (iii) theoretical SQNR in dB.
> **(b) [7 Marks]** A direct-form FIR filter has 64 coefficients. Each coefficient is quantized to 12 bits using rounding. Estimate the (i) per-coefficient round-off variance, and (ii) the total output noise variance if the filter's output impulse-response energy $\sum h^{2}[k] = 0.42$.

**Model Solution — Question A:**

**(a) (i) Quantization step:** For a signed 2's complement $b = 8$ bit word, $\Delta = 2^{-(b-1)} = 2^{-7} = 0.0078125$ V. **[1 Mark]**

**(a) (ii) Quantization noise power:**

$$P_n = \frac{\Delta^{2}}{12} = \frac{(0.0078125)^{2}}{12} = \frac{6.10 \times 10^{-5}}{12} = 5.09 \times 10^{-6} \text{ V}^{2}$$

**[2 Marks]**.

**(a) (iii) Theoretical SQNR.** For a full-scale sinusoid, peak = $2^{b-1} \cdot \Delta$ in quantizer units; applying the canonical formula:

$$\text{SQNR}_{\text{dB}} = 6.02 \times 8 + 1.76 = 48.16 + 1.76 = 49.92 \text{ dB}$$

**[4 Marks]**. (Alternative: 49.92 dB; rounding to 50 dB is acceptable.)

**(b) (i) Per-coefficient round-off variance.** For $b = 12$ bits, $\Delta = 2^{-11} = 4.88 \times 10^{-4}$. Then:

$$\sigma_{a}^{2} = \frac{\Delta^{2}}{12} = \frac{(4.88 \times 10^{-4})^{2}}{12} = \frac{2.38 \times 10^{-7}}{12} = 1.98 \times 10^{-8}$$

**[2 Marks]**.

**(b) (ii) Total output noise variance.** Each of the 64 multipliers injects an independent error. The noise transfer function from each tap to the output is unity (FIR). Hence:

$$P_{n,\text{out}} = M \cdot \sigma_a^{2} \cdot \sum_{k=0}^{63} h^{2}[k] = 64 \cdot 1.98 \times 10^{-8} \cdot 0.42$$

$$= 64 \cdot 8.32 \times 10^{-9} = 5.32 \times 10^{-7} \text{ (units)}^{2}$$

**[5 Marks]**.

---

> **Question B. [KTU University Exam — July 2024, CO2, Apply / Analyse]**
> **(a) [7 Marks]** A 2nd-order IIR section has the transfer function $H(z) = 1 / (1 - 1.5 z^{-1} + 0.7 z^{-2})$. The coefficients are quantized to 8 fractional bits.
>   (i) Find the original poles of the unquantized system.
>   (ii) Compute the worst-case pole-radius bound using the Kron–Goodman inequality.
> **(b) [7 Marks]** With reference to a 1st-order recursive filter $y[n] = -a_1 y[n-1] + x[n]$ with $-1 < a_1 < 1$,
>   (i) Explain the phenomenon of a zero-input granular limit cycle.
>   (ii) Derive the bound on the steady-state amplitude of the limit cycle under rounding quantization.

**Model Solution — Question B:**

**(a) (i) Original poles.** Solve $z^{2} - 1.5 z + 0.7 = 0$:

$$z = \frac{1.5 \pm \sqrt{2.25 - 2.8}}{2} = \frac{1.5 \pm j\,0.7348}{2} = 0.75 \pm j\,0.3674$$

Magnitude $\lvert p \rvert = \sqrt{0.75^{2} + 0.3674^{2}} = \sqrt{0.6976} = 0.8352$. **[3 Marks]**

**(a) (ii) Kron–Goodman pole-radius bound.**

$$\lvert p \rvert_{\min} = 1 - 2^{-b} \sum_{k=0}^{2} \lvert a_k \rvert = 1 - 2^{-8} \big(1 + 1.5 + 0.7\big) = 1 - \frac{3.2}{256} = 1 - 0.0125 = 0.9875$$

Since $0.8352 < 0.9875$, the unquantized pole lies **inside** the safe region, so 8-bit quantization preserves stability. **[4 Marks]**

**(b) (i) Limit-cycle explanation.** When a 1st-order IIR is implemented with finite-precision arithmetic, the state variable $y[n]$ cannot decay below the quantization step $\Delta$. The quantizer keeps the state oscillating between two adjacent quantization levels — a phenomenon called a **zero-input granular limit cycle**. **[3 Marks]**

**(b) (ii) Amplitude bound.** For $y[n] = -a_1 y[n-1]$ with rounding, in steady state the magnitude of successive samples satisfies $\lvert y[n] \rvert = \lvert a_1 \rvert \lvert y[n-1] \rvert_{\text{quantized}}$. Self-sustaining oscillation requires that the rounding error equals the magnitude decrement, giving:

$$\lvert e_{\text{limit}} \rvert \leq \frac{\Delta}{1 - \lvert a_1 \rvert}$$

**[4 Marks]**. This is the canonical KTU bound for granular limit cycle amplitude.

---

### 5.3 KTU Examiner's Valuation Warning / Pitfall Callout

> [!WARNING]
> **Common Mark-Deduction Pitfalls in FWL Numericals (Module 3):**
> 1. **Confusing the 1-bit sign offset.** Many students write $\Delta = 2^{-b}$ for a *signed* 2's complement word. The correct expression is $\Delta = 2^{-(b-1)}$ because one bit is reserved for the sign. Using $2^{-b}$ will cost you **2 marks** in a typical 7-mark sub-question.
> 2. **Forgetting the factor $M$ in FIR output noise.** The $M$ multipliers in a direct-form FIR each inject an *independent* $\Delta^{2}/12$. A common error is to write $P_n = \sigma_e^{2} \sum h^{2}[k]$, missing the $M$.
> 3. **In the Kron–Goodman bound, summing $\sum \vert a_k \vert$ but forgetting the constant $1$** in $A(z) = 1 + a_1 z^{-1} + \dots$. The sum should include the constant term only if your $A(z)$ is expressed in *descending* powers of $z$. Be consistent.
> 4. **Limit-cycle bound derivation** — KTU expects you to show *both* the inequality and the substitution step. Writing only the final formula $\lvert e \rvert \leq \Delta/(1-\lvert a_1 \rvert)$ without derivation will earn only **2 of 4 marks**.
> 5. **Coefficient sensitivity** — do not stop at the symbolic partial derivative; plug in the numerical values for the question's specific pole, otherwise the examiner deducts the **"final numerical answer" mark**.

---

### 5.4 Topic Recap & Important Things to Remember

> [!NOTE]
> **High-Density Rapid Revision Checklist — KTU PECST503 / Module 3 / FWL Effects**

- **Definition.** FWL effects = numerical errors from quantizing inputs, coefficients, and products to a finite register of $b$ bits. **[Core definition]**
- **Three sources** of FWL noise: (1) A/D input quantization, (2) coefficient quantization, (3) product round-off. **[Always list all three]**
- **Round-off variance:** $\sigma_e^{2} = \Delta^{2}/12$ — derived assuming white, uniform, zero-mean noise. **[High-yield formula]**
- **Quantization step:** $\Delta = 2^{-(b-1)}$ for signed 2's complement word. **[Sign-bit trap]**
- **SQNR canonical formula:** $\text{SQNR}_{\text{dB}} = 6.02\,b + 1.76$ dB for a full-scale sinusoid. **[Most-asked formula]**
- **FIR output noise:** $P_{n,\text{out}} = M \sigma_e^{2} \sum_k h^{2}[k]$ — note the $M$ multiplier count.
- **IIR noise model:** Independent noise sources are added at every product node and propagated through the **all-pole noise transfer function** $1/A(z)$.
- **Coefficient sensitivity:** $\dfrac{\partial p_i}{\partial a_k} = \dfrac{p_i^{2}}{A'(p_i)}$; large near the unit circle (high-Q). **[Stability argument]**
- **Kron–Goodman bound:** $\lvert p_i \rvert_{\min} = 1 - 2^{-b} \sum_k \lvert a_k \rvert$ — guarantees stability under quantization.
- **Limit cycles** — *zero-input* (granular): persistent oscillation in an otherwise stable recursive filter due to round-off. Amplitude bounded by $\Delta/(1 - \lvert a_1 \rvert)$ for 1st order. *Overflow* limit cycles occur when registers saturate.
- **Overflow mitigation:** $L_1$ (conservative), $L_2$ (statistical), $L_{\infty}$ (loose) scaling of internal nodes.
- **Adjustments / compensations framework:** *(i)* Dithering (TPDF), *(ii)* Error-feedback noise shaping, *(iii)* Lattice/normalised-lattice structures, *(iv)* Cascade pairing of poles and zeros, *(v)* Increasing $b$.
- **Practical rule of thumb:** Doubling register width ($\Delta \to \Delta/2$) reduces noise variance by $4$ ($\sim 6$ dB SQNR gain).
- **Hardware mapping:** Texas Instruments Q15 = 1 sign + 15 fractional; Q31 = 1 sign + 31 fractional. The KTU lab typically uses Q15 for audio DSP.
- **Syllabus cross-link:** Module 3 FWL analysis depends on Module 1's $z$-transform and Module 2's FIR/IIR design formulas; revisit $\sum h^{2}[k]$ for Parseval's theorem application.

<!-- SECTION_5_END -->
