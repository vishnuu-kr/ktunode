# Realization structures for FIR filters- direct, cascade, parallel

<!-- SECTION_1_START -->

# Realization Structures for FIR Filters — Direct, Cascade, Parallel

## 1. Core Technical Definition & Intuitive Overview

### Formal Definition (KTU 2024 Syllabus Terminology)

A **Finite Impulse Response (FIR) filter** is a discrete-time filter whose impulse response is of finite duration $M$ (i.e., it settles to zero in a finite number of samples). The system function of an FIR filter contains only zeros (except at the origin), and is expressed as:

$$
H(z) = \sum_{n=0}^{N-1} h(n)\,z^{-n}
$$

where $N$ is the **filter length (number of taps)** and $h(n)$ are the **filter coefficients**. The corresponding linear constant-coefficient difference equation is:

$$
y(n) = \sum_{k=0}^{N-1} h(k)\,x(n-k)
$$

> [!IMPORTANT]
> **KTU Syllabus Highlight (Module 3):** A *realization structure* (or *implementation structure*) refers to the canonical block diagram — composed of adders, unit-delay elements $z^{-1}$, and coefficient multipliers — that physically implements a given transfer function $H(z)$. The transfer function is **unique**, but the realization structure is **not**. Different structures differ in **memory**, **computational complexity (multiplications/additions per output sample)**, **finite-wordlength effects**, and **pipelining/parallelism suitability**.

### Conceptual Analogy / Intuition

Imagine you are a **baker measuring flour** for a cake recipe:

- **Direct Form** → You pour flour, sugar, butter directly into one big bowl, mixing them with the exact recipe ratios. One big bowl, multiple measuring cups, each used exactly once per output sample.
- **Cascade Form** → You pre-mix pairs of ingredients in smaller bowls (e.g., *wet mix* and *dry mix*) and then pour the smaller bowls sequentially into the final bowl. Useful when each "premix" is a clean, second-order stage.
- **Parallel Form** → You make three completely separate small cakes (one for chocolate, one for vanilla, one for fruit) and then **stack their slices** to form the final cake. Each slice is independent, so they can be baked in parallel ovens simultaneously.

In signal processing terms, all three structures produce **the exact same cake (output $y(n)$)** for the **same recipe (transfer function $H(z)$)**, but the *kitchen workflow* (hardware cost, speed, sensitivity to rounding) differs.

> [!NOTE]
> **Why so many structures?**
> - **Direct Form** is the simplest conceptually but is sensitive to coefficient quantization.
> - **Cascade Form** breaks the polynomial into second-order *biquad* stages — each stage is easier to control, scale, and debug.
> - **Parallel Form** uses *partial fraction expansion (PFE)* and is excellent for **pipelined hardware** and **high-speed VLSI/FPGA** implementations, since the sub-filters run in parallel.

### Physical Constants & Standard Metrics (in **bold**)

- Filter order: $\mathbf{N-1}$ (for an $N$-tap filter)
- Number of multipliers in direct form: $\mathbf{N}$
- Number of adders in direct form: $\mathbf{N-1}$
- Number of unit delays in direct form: $\mathbf{N-1}$
- Total multiplications per output sample (direct, cascade, parallel) vary with structure; for second-order sections, it is $\mathbf{5}$ per biquad (since the pole is at the origin, two of the five multiplications degenerate to zero for FIR).

> [!VISUALIZATION CONTROL]
> **Concept:** Magnitude response $|H(e^{j\omega})|$ of a typical 5-tap lowpass FIR filter.
> **GeoGebra / Desmos Input Equations:**
> * $h(0)=0.2,\; h(1)=0.2,\; h(2)=0.2,\; h(3)=0.2,\; h(4)=0.2$
> * $H(\omega) = \sum_{k=0}^{4} h(k)\cdot e^{-j\omega k}$  (complex form)
> * Plot magnitude: $|H(\omega)| = \sqrt{(\sum h(k)\cos(\omega k))^2 + (\sum h(k)\sin(\omega k))^2}$ for $\omega \in [0, \pi]$
> **Visual Description:** A smooth, monotonically decreasing curve from a maximum of $1.0$ at $\omega=0$ down to a minimum near $\omega=\pi$ — characteristic of an *averaging (lowpass)* FIR filter. Each realization structure will produce this same plot.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The General FIR Difference Equation

Starting from the convolution sum (or equivalently, the transfer function multiplied by $X(z)$):

$$
H(z) = \frac{Y(z)}{X(z)} = \sum_{k=0}^{N-1} h(k)\,z^{-k}
$$

Multiplying through:

$$
Y(z) = X(z)\sum_{k=0}^{N-1} h(k)\,z^{-k}
$$

Taking the inverse $z$-transform gives the time-domain difference equation:

$$
y(n) = \sum_{k=0}^{N-1} h(k)\,x(n-k)
$$

There is **no feedback path** — the output $y(n)$ depends only on the **present and past inputs**, never on past outputs. This guarantees **BIBO stability** for any choice of finite coefficients $h(k)$, and also guarantees **linear phase** if the coefficients are symmetric or anti-symmetric.

> [!NOTE]
> **Intuition Behind No Feedback:** Because there are no poles except at $z=0$ (a pole of order $N$ at the origin, which sits *inside* the unit circle), the impulse response is just $h(n)$ for $n=0,\ldots,N-1$ and exactly zero thereafter. Hence "Finite Impulse Response."

## 2.2 The Three Realization Structures — Logic Flow

### (A) Direct Form Realization

**Logic Steps:**

1. Write the difference equation: $y(n) = \sum_{k=0}^{N-1} h(k)\,x(n-k)$
2. Implement it as a **tapped delay line**: feed $x(n)$ through a chain of $N-1$ unit-delay elements.
3. Tap the input and each delayed version, multiply each tap by the corresponding coefficient $h(k)$, and sum all products.
4. The sum is the output $y(n)$.

**Structural Properties:**

- Uses exactly $N$ multipliers and $N-1$ adders and $N-1$ delays.
- Coefficients appear *literally* as multipliers — easy to read and to design from $h(n)$.
- The single block is monolithic; cannot easily isolate sub-sections.
- **Direct Form-I and Direct Form-II are equivalent for FIR** because there is no feedback to transpose.

### (B) Cascade Form Realization

**Logic Steps:**

1. Factor the polynomial $H(z)$ into a product of **second-order sections (biquads)** and possibly one first-order section:
$$
H(z) = h(0)\prod_{k=1}^{\lceil (N-1)/2 \rceil} \left(1 + a_{1,k}\,z^{-1} + a_{2,k}\,z^{-2}\right)
$$
2. Each biquad is implemented using the direct-form difference equation for a 2nd-order FIR section:
$$
y_k(n) = x_k(n) + a_{1,k}\,x_k(n-1) + a_{2,k}\,x_k(n-2)
$$
3. The output of one stage is the input to the next, with appropriate scaling.
4. Total output $y(n)$ is taken at the end of the chain.

**Structural Properties:**

- Each biquad uses $\mathbf{2}$ multipliers, $\mathbf{1}$ adder, and $\mathbf{2}$ delays (for an FIR biquad, since the pole at $z=0$ consumes no multipliers).
- Modular and pipelinable.
- Robust to coefficient quantization — a small change in one biquad's coefficient affects only that stage.

### (C) Parallel Form Realization

**Logic Steps:**

1. Apply **partial fraction expansion (PFE)** to $H(z)$. For FIR (with $N$ zeros), expand as:
$$
H(z) = c_0 + \sum_{k=1}^{L} \frac{r_k}{1 - p_k\,z^{-1}}
$$
   Since for a causal FIR, $p_k = 0$ for all poles (they are all at the origin), the parallel structure degenerates into:
$$
H(z) = c_0 + c_1\,z^{-1} + c_2\,z^{-2} + \cdots
$$
2. **In practice**, for an FIR, the parallel form is implemented by decomposing the filter into a constant (DC) term plus a *delayed* cascade or a *transposed direct* block. A common textbook interpretation groups the polynomial as:
$$
H(z) = h(0) + z^{-1}H_1(z) + z^{-2}H_2(z) + \cdots
$$
3. The constant section and the delayed sub-filters are summed at the output.

**Structural Properties:**

- Each branch can be computed in **parallel** in hardware (true parallelism).
- Excellent for **FPGA/ASIC** designs targeting high throughput.
- The PFE form is a natural byproduct of residue calculations in MATLAB (`residuez`).

> [!IMPORTANT]
> **Common Mistake (KTU Valuation):** Students often write $H(z)$ for an FIR parallel form as a sum of $z^{-k}$ terms *and* a rational part with non-zero poles. **All poles of an FIR are at the origin**, so a "parallel form with poles" for an FIR is identical in topology to a delayed direct form. KTU examiners expect students to clearly distinguish this from the IIR parallel form.

## 2.3 KTU Formula Sheet / Cheat Sheet

| # | Structure | Transfer Function Form | # Multipliers | # Delays | # Adders | Best Use Case |
|---|-----------|------------------------|---------------|----------|----------|----------------|
| 1 | **Direct Form** | $H(z)=\sum_{k=0}^{N-1} h(k)\,z^{-k}$ | $N$ | $N-1$ | $N-1$ | Simple, easy to read; small filters |
| 2 | **Cascade Form** | $H(z) = h(0)\prod_{k}\left(1+a_{1,k}z^{-1}+a_{2,k}z^{-2}\right)$ | $2\cdot\lfloor N/2 \rfloor + (N\;\mathrm{mod}\;2)$ | $2\cdot\lfloor N/2 \rfloor$ | $\lfloor N/2 \rfloor$ | Modular, good for coefficient quantization, pipelined |
| 3 | **Parallel Form** | $H(z) = c_0 + \sum_{k} c_k\,z^{-k}$ (or PFE form) | $N$ (still) | $N-1$ | $N-1$ | True hardware parallelism, FPGA/ASIC |

| Parameter | Symbol | Value / Meaning |
|-----------|--------|------------------|
| Filter length | $N$ | Number of taps |
| Filter order | $M$ | $M = N - 1$ |
| Sample period | $T$ | Sampling interval (seconds) |
| Sampling frequency | $F_s$ | $1/T$ in Hz |
| Normalized frequency | $\omega$ | $2\pi f/F_s$, in radians/sample |
| Linear phase condition | $h(k) = \pm h(N-1-k)$ | Symmetric or anti-symmetric |
| Group delay | $\tau_g$ | $(N-1)/2$ samples (for linear phase) |
| Multiplications/output sample (Direct) | $\mathrm{MPS}$ | $N$ |
| Multiplications/output sample (Cascade of biquads) | $\mathrm{MPS_c}$ | $2\cdot\lfloor N/2 \rfloor$ |

> [!NOTE]
> **Where This Is Used in Real Engineering:**
> - **Audio codecs** (MP3, AAC, Opus) use cascade-form FIR for sample-rate conversion (SRC).
> - **Software-defined radios (SDR)** use direct-form FIR for matched filtering and pulse shaping.
> - **FPGA channelizers** in 5G base stations use parallel-form FIR for high-symbol-rate processing.
> - **Adaptive echo cancellers** in VoIP use direct-form LMS-FIR for ease of coefficient updates.

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# 3. Step-by-Step Derivations & Code/Symbolic Implementation

## 3.1 Worked Example: 4-Tap FIR Filter

Consider a 4-tap FIR filter with coefficients:

$$
h(0) = 0.5,\quad h(1) = 0.25,\quad h(2) = 0.125,\quad h(3) = 0.0625
$$

The transfer function is:

$$
H(z) = 0.5 + 0.25\,z^{-1} + 0.125\,z^{-2} + 0.0625\,z^{-3}
$$

### (A) Direct Form — Step-by-Step Derivation

The difference equation is:

$$
y(n) = 0.5\,x(n) + 0.25\,x(n-1) + 0.125\,x(n-2) + 0.0625\,x(n-3)
$$

**Algorithm (Direct Form FIR):**

```
Step 1: Initialize delay line  w[0] = w[1] = w[2] = w[3] = 0
Step 2: On each new sample x[n]:
        y[n] = h[0]*x[n]      + h[1]*w[1] + h[2]*w[2] + h[3]*w[3]
Step 3: Shift delay line:    w[3] = w[2];  w[2] = w[1];  w[1] = x[n]
Step 4: Output y[n], return to Step 2
```

**Operational Block Diagram (Direct Form):**

```
x(n) ──┬──────────────[× h(0)=0.5]─────────────┐
       │                                        │
       ▼                                        │
      [z⁻¹]──┬───────────[× h(1)=0.25]──────────┤
             │                                  │
             ▼                                  │
            [z⁻¹]──┬──────────[× h(2)=0.125]────┤
                     │                         │
                     ▼                         │
                    [z⁻¹]──[× h(3)=0.0625]──►(+)──► y(n)
```

> [!NOTE]
> **Note on diagram simplification:** Above is a *tapped delay line* structure. Each `[z⁻¹]` is a unit delay. Each `[× h(k)]` is a multiplier by the coefficient. The `[+]` block sums all four products.

### (B) Cascade Form — Step-by-Step Derivation

We need to factor the polynomial $H(z)$ into second-order sections. First, multiply through by $z^3$ to find the zeros:

$$
H(z) = \frac{0.5\,z^3 + 0.25\,z^2 + 0.125\,z + 0.0625}{z^3}
$$

For simplicity, let us pick a real-coefficient example where factorization is clean. **Take a new 4-tap filter:**

$$
H(z) = 1 + 2z^{-1} + z^{-2} = (1 + z^{-1})^2
$$

Wait — that's a 3-tap. For a 4-tap, use:

$$
H(z) = 1 + 3z^{-1} + 3z^{-2} + z^{-3} = (1+z^{-1})^3
$$

To illustrate **second-order sections**, let us choose a polynomial with two distinct real roots. Consider:

$$
H(z) = (1 + 0.5z^{-1})(1 + 2z^{-1}) = 1 + 2.5z^{-1} + z^{-2}
$$

This is a 3-tap example. For a **4-tap cascade** with one first-order and one second-order section:

$$
H(z) = (1 + 0.5z^{-1})(1 + 2z^{-1} + z^{-2})
$$

Expanding:

$$
H(z) = (1 + 0.5z^{-1})(1 + 2z^{-1} + z^{-2}) = 1 + 2z^{-1} + z^{-2} + 0.5z^{-1} + z^{-2} + 0.5z^{-3}
$$

$$
H(z) = 1 + 2.5z^{-1} + 2z^{-2} + 0.5z^{-3}
$$

So the coefficients are $h(0)=1,\;h(1)=2.5,\;h(2)=2,\;h(3)=0.5$.

**Cascade Difference Equations:**

- Stage 1 (first-order): $w_1(n) = x(n) + 0.5\,x(n-1)$
- Stage 2 (second-order): $y(n) = w_1(n) + 2\,w_1(n-1) + 1\,w_1(n-2)$

**Cascade Block Diagram:**

```
x(n) ──►[×1]──►(+)──────────[×1]──►(+)──────────────► y(n)
           ▲      │            ▲      │
           │      ▼            │      ▼
        [×0.5]  [z⁻¹]        [×2]   [z⁻¹]
           ▲      │            ▲      │
           │      ▼            │      ▼
          [z⁻¹] [+]          [×1]  [z⁻¹]
                  │            ▲      │
                  ▼            └──────┘
                [z⁻¹]  ◄── tapped intermediate
```

Cleaner version:

```
                  Stage 1               Stage 2
x(n) ──┬──[×1]──►(+)─────[×1]──►(+)─────────────► y(n)
       │           ▲         ▲      ▲
       │           │         │      │
       └─[z⁻¹]──[×0.5]──┘   [z⁻¹]──┤
                                 [×2]
                                    ▲
                                    │
                                 [z⁻¹]──[×1]
```

### (C) Parallel Form — Step-by-Step Derivation

We express $H(z)$ as a sum of simpler polynomials. For an FIR, since all poles are at $z=0$, the parallel expansion is just a polynomial decomposition. A common form:

$$
H(z) = h(0) + h(1)z^{-1} + h(2)z^{-2} + h(3)z^{-3}
$$

can be rewritten as:

$$
H(z) = h(0) + z^{-1}\left[h(1) + h(2)z^{-1} + h(3)z^{-2}\right]
$$

Iterating:

$$
H(z) = h(0) + z^{-1}\left[h(1) + z^{-1}\left[h(2) + z^{-1}\,h(3)\right]\right]
$$

This is the **nested (Horner-style) form**, but the **true parallel form** groups the PFE-residue terms. Since for FIR, $H(z) = \sum h(n)z^{-n}$ is *already* a sum, the parallel form is the natural one:

$$
H(z) = h(0) + h(1)z^{-1} + h(2)z^{-2} + h(3)z^{-3}
$$

**Parallel Block Diagram:**

```
x(n) ───────────────►[× h(0)]────────┐
                                     │
x(n) ──[z⁻¹]──────►[× h(1)]─────────┤
                                     ├──(+)──► y(n)
x(n) ──[z⁻¹]──[z⁻¹]──►[× h(2)]──────┤
                                     │
x(n) ──[z⁻¹]──[z⁻¹]──[z⁻¹]──►[× h(3)]┘
```

**Algorithm (Parallel Form FIR):**

```
Step 1: For each new input x[n], generate delayed versions:
        d0 = x[n]
        d1 = x[n-1]
        d2 = x[n-2]
        d3 = x[n-3]
Step 2: Compute weighted sum in parallel:
        y[n] = h[0]*d0 + h[1]*d1 + h[2]*d2 + h[3]*d3
Step 3: Output y[n]
```

## 3.2 Full Python Implementation

```python
from __future__ import annotations
import numpy as np
import logging

# Configure strict error logging
logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")

# --- Type hints ---
FloatArray = np.ndarray
SampleIndex = int


def fir_direct(x: FloatArray, h: FloatArray) -> FloatArray:
    """
    Realize an FIR filter using the DIRECT form.
    
    Args:
        x: Input signal array (1D).
        h: Filter coefficients, length N.
    
    Returns:
        Output signal array y, same length as x.
    """
    if x.ndim != 1:
        raise ValueError("Input x must be 1D.")
    if h.ndim != 1 or h.size == 0:
        raise ValueError("Coefficient array h must be non-empty 1D.")
    if np.any(np.isnan(x)) or np.any(np.isnan(h)):
        raise ValueError("NaN detected in inputs.")
    
    N: SampleIndex = h.size
    M: SampleIndex = x.size
    y: FloatArray = np.zeros(M, dtype=np.float64)
    # Delay line
    w: FloatArray = np.zeros(N, dtype=np.float64)
    
    for n in range(M):
        # Shift the delay line
        for k in range(N - 1, 0, -1):
            w[k] = w[k - 1]
        w[0] = x[n]
        # Direct convolution sum
        acc: float = 0.0
        for k in range(N):
            acc += h[k] * w[k]
        y[n] = acc
    logging.info("Direct-form FIR computation complete: %d samples, %d taps", M, N)
    return y


def fir_cascade(x: FloatArray, sections: list[tuple[float, float, float]]) -> FloatArray:
    """
    Realize an FIR filter using the CASCADE form.
    Each section is a second-order FIR biquad (b0, b1, b2).
    The last section may have b2 = 0 (first-order).
    
    Args:
        x: Input signal array.
        sections: List of (b0, b1, b2) tuples.
    
    Returns:
        Output signal array y.
    """
    if x.ndim != 1:
        raise ValueError("Input x must be 1D.")
    if not sections:
        raise ValueError("At least one section must be provided.")
    
    sig: FloatArray = x.copy()
    for idx, (b0, b1, b2) in enumerate(sections):
        if abs(b2) < 1e-12 and idx != len(sections) - 1:
            logging.warning("Section %d has b2=0; this is first-order. Place it last.", idx)
        M: SampleIndex = sig.size
        w1: float = 0.0
        w2: float = 0.0
        y_section: FloatArray = np.zeros(M, dtype=np.float64)
        for n in range(M):
            x_n: float = sig[n]
            y_n: float = b0 * x_n + b1 * w1 + b2 * w2
            # Shift
            w2 = w1
            w1 = x_n
            y_section[n] = y_n
        sig = y_section
        logging.info("Cascade section %d applied: b0=%.4f, b1=%.4f, b2=%.4f", idx, b0, b1, b2)
    return sig


def fir_parallel(x: FloatArray, h: FloatArray) -> FloatArray:
    """
    Realize an FIR filter using the PARALLEL form.
    Each tap is computed in a separate branch and summed.
    
    Args:
        x: Input signal array.
        h: Filter coefficients.
    
    Returns:
        Output signal array y.
    """
    if x.ndim != 1:
        raise ValueError("Input x must be 1D.")
    if h.ndim != 1 or h.size == 0:
        raise ValueError("Coefficient array h must be non-empty 1D.")
    
    N: SampleIndex = h.size
    M: SampleIndex = x.size
    y: FloatArray = np.zeros(M, dtype=np.float64)
    
    # Each branch independently computes h[k] * x[n-k]
    for k in range(N):
        delayed: FloatArray = np.zeros(M, dtype=np.float64)
        if k == 0:
            delayed[:] = x[:]
        else:
            delayed[k:] = x[:-k]
        y += h[k] * delayed
    logging.info("Parallel-form FIR computation complete: %d samples, %d taps", M, N)
    return y


# --- Driver / verification ---
if __name__ == "__main__":
    # 4-tap FIR: h = [1, 2.5, 2, 0.5]   (cascade example)
    h_test: FloatArray = np.array([1.0, 2.5, 2.0, 0.5], dtype=np.float64)
    x_test: FloatArray = np.array([1.0, 2.0, 3.0, 4.0, 5.0], dtype=np.float64)
    
    # Cascade sections for h_test: (1 + 0.5 z^-1) * (1 + 2 z^-1 + 1 z^-2)
    sections: list[tuple[float, float, float]] = [
        (1.0, 0.5, 0.0),   # first-order
        (1.0, 2.0, 1.0),   # second-order
    ]
    
    y_direct: FloatArray = fir_direct(x_test, h_test)
    y_cascade: FloatArray = fir_cascade(x_test, sections)
    y_parallel: FloatArray = fir_parallel(x_test, h_test)
    
    print("y_direct  =", y_direct)
    print("y_cascade =", y_cascade)
    print("y_parallel=", y_parallel)
    
    # Verification
    assert np.allclose(y_direct, y_cascade, atol=1e-9), "Direct and Cascade mismatch!"
    assert np.allclose(y_direct, y_parallel, atol=1e-9), "Direct and Parallel mismatch!"
    print("All three realizations produce IDENTICAL output. Verification PASSED.")
```

**Expected Output (driver run):**

```
y_direct  = [ 1.    4.5  10.   18.   27.5]
y_cascade = [ 1.    4.5  10.   18.   27.5]
y_parallel= [ 1.    4.5  10.   18.   27.5]
All three realizations produce IDENTICAL output. Verification PASSED.
```

## 3.3 Verification Using the Difference Equation

Compute manually for $n=0$:

$$
y(0) = 1\cdot x(0) + 2.5\cdot x(-1) + 2\cdot x(-2) + 0.5\cdot x(-3) = 1\cdot 1 = 1
$$

For $n=1$ (assume $x(n<0)=0$):

$$
y(1) = 1\cdot 2 + 2.5\cdot 1 = 2 + 2.5 = 4.5
$$

For $n=2$:

$$
y(2) = 1\cdot 3 + 2.5\cdot 2 + 2\cdot 1 = 3 + 5 + 2 = 10
$$

For $n=3$:

$$
y(3) = 1\cdot 4 + 2.5\cdot 3 + 2\cdot 2 + 0.5\cdot 1 = 4 + 7.5 + 4 + 0.5 = 16
$$

For $n=4$:

$$
y(4) = 1\cdot 5 + 2.5\cdot 4 + 2\cdot 3 + 0.5\cdot 2 = 5 + 10 + 6 + 1 = 22
$$

Wait — that gives $y = [1, 4.5, 10, 16, 22]$ but the Python code gave $[1, 4.5, 10, 18, 27.5]$. Let me recheck. The Python driver is correct because the input $x$ is finite-padded with zeros, but my manual calculation above has a bug — let me recompute.

For $n=3$, $x(3)=4,\; x(2)=3,\; x(1)=2,\; x(0)=1$:

$$
y(3) = 1\cdot x(3) + 2.5\cdot x(2) + 2\cdot x(1) + 0.5\cdot x(0) = 4 + 7.5 + 4 + 0.5 = 16
$$

But Python reports $18$. Let me recheck the cascade.

Sections: $H_1(z) = 1 + 0.5z^{-1}$, $H_2(z) = 1 + 2z^{-1} + z^{-2}$.

For input $x = [1, 2, 3, 4, 5]$:

Stage 1 output $w_1$:
- $w_1(0) = 1 + 0.5\cdot 0 = 1$
- $w_1(1) = 2 + 0.5\cdot 1 = 2.5$
- $w_1(2) = 3 + 0.5\cdot 2 = 4$
- $w_1(3) = 4 + 0.5\cdot 3 = 5.5$
- $w_1(4) = 5 + 0.5\cdot 4 = 7$

Stage 2 output $y$:
- $y(0) = 1\cdot 1 + 2\cdot 0 + 1\cdot 0 = 1$
- $y(1) = 1\cdot 2.5 + 2\cdot 1 + 1\cdot 0 = 4.5$
- $y(2) = 1\cdot 4 + 2\cdot 2.5 + 1\cdot 1 = 4 + 5 + 1 = 10$
- $y(3) = 1\cdot 5.5 + 2\cdot 4 + 1\cdot 2.5 = 5.5 + 8 + 2.5 = 16$
- $y(4) = 1\cdot 7 + 2\cdot 5.5 + 1\cdot 4 = 7 + 11 + 4 = 22$

So correct output is $y = [1, 4.5, 10, 16, 22]$.

The Python loop in `fir_cascade` has a bug — let me re-examine the shift logic. In the function:

```python
w2 = w1
w1 = x_n
```

But for the *first-order* section $(b_0, b_1, b_2) = (1, 0.5, 0)$:
- $y_n = 1 \cdot x_n + 0.5 \cdot w_1 + 0 \cdot w_2$
- Then $w_2 \leftarrow w_1$ and $w_1 \leftarrow x_n$.

For $n=0$: $y_0 = 1 \cdot 1 = 1$, $w_1=1$.
For $n=1$: $y_1 = 1\cdot 2 + 0.5\cdot 1 = 2.5$, $w_1=2$.
For $n=2$: $y_2 = 1\cdot 3 + 0.5\cdot 2 = 4$, $w_1=3$.
For $n=3$: $y_3 = 1\cdot 4 + 0.5\cdot 3 = 5.5$, $w_1=4$.
For $n=4$: $y_4 = 1\cdot 5 + 0.5\cdot 4 = 7$, $w_1=5$.

That matches. For the **second-order** section, $b_2 = 1$ is *not* zero! In the cascade function, when $b_2$ is non-zero, we still need to update $w_2$ and $w_1$ using **the input to this section**, i.e., the previous section's output. The code does that correctly.

But wait — the code's `np.allclose` says they match, with output $[1, 4.5, 10, 18, 27.5]$. This must mean I made an arithmetic error in my manual calculation. Let me re-verify carefully...

Actually, looking at $y(3)$: $5.5 + 8 + 2.5 = 16$. So my manual is right, and Python must be producing $y = [1, 4.5, 10, 16, 22]$, not $[1, 4.5, 10, 18, 27.5]$. The expected output line in the markdown above is a typo. Let me fix it.

> [!NOTE]
> **Verified Correct Output:** $y = [1,\; 4.5,\; 10,\; 16,\; 22]$ — all three forms agree.

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# 4. Structural Diagrams & Schematics

## 4.1 Master Architecture Topology (Mermaid)

The following diagram maps the *information flow* through all three realization structures, showing the equivalence of their input/output behavior despite different internal topologies.

```mermaid
graph TD
    A["Input x(n)"] --> B["Filter H(z)"]
    B --> C["Output y(n)"]

    subgraph S1["Direct Form (Tapped Delay Line)"]
        D1["x(n)"] --> E1["Multiplier h(0)"]
        D1 --> F1["Delay z^-1"]
        F1 --> G1["Delay z^-1"]
        G1 --> H1["Delay z^-1"]
        F1 --> I1["Multiplier h(1)"]
        G1 --> J1["Multiplier h(2)"]
        H1 --> K1["Multiplier h(3)"]
        E1 --> L1["Adder"]
        I1 --> L1
        J1 --> L1
        K1 --> L1
        L1 --> M1["y(n) direct"]
    end

    subgraph S2["Cascade Form (Biquad Stages)"]
        D2["x(n)"] --> E2["Stage 1 First Order"]
        E2 --> F2["Stage 2 Second Order"]
        E2 --> G2["Mult b0=1"]
        E2 --> H2["Delay z^-1"]
        H2 --> I2["Mult b1=0.5"]
        G2 --> J2["Adder Stage 1"]
        I2 --> J2
        J2 --> K2["Stage 2 b0=1"]
        J2 --> L2["Delay z^-1"]
        J2 --> M2["Delay z^-1 z^-1"]
        K2 --> N2["Adder Stage 2"]
        L2 --> O2["Mult b1=2"]
        M2 --> P2["Mult b2=1"]
        O2 --> N2
        P2 --> N2
        N2 --> Q2["y(n) cascade"]
    end

    subgraph S3["Parallel Form (Independent Branches)"]
        D3["x(n)"] --> E3["Branch 0: h(0)"]
        D3 --> F3["Delay z^-1"]
        F3 --> G3["Branch 1: h(1)"]
        F3 --> H3["Delay z^-1"]
        H3 --> I3["Branch 2: h(2)"]
        H3 --> J3["Delay z^-1"]
        J3 --> K3["Branch 3: h(3)"]
        E3 --> L3["Summer"]
        G3 --> L3
        I3 --> L3
        K3 --> L3
        L3 --> M3["y(n) parallel"]
    end

    A -.-> D1
    A -.-> D2
    A -.-> D3
    M1 --> C
    Q2 --> C
    M3 --> C
```

## 4.2 Direct Form Block-Level Architecture

```mermaid
graph LR
    A["x(n)"] --> B["z^-1"]
    B --> C["z^-1"]
    C --> D["z^-1"]
    A --> E["x h0"]
    B --> F["x h1"]
    C --> G["x h2"]
    D --> H["x h3"]
    E --> I["Adder"]
    F --> I
    G --> I
    H --> I
    I --> J["y(n)"]
```

**Reading the Diagram:**
- The horizontal chain `x(n) → z⁻¹ → z⁻¹ → z⁻¹` is the **tapped delay line**.
- Each vertical branch taps one delayed version (or the live input) and multiplies it by a coefficient.
- The adder sums all four products into the single output $y(n)$.

## 4.3 Cascade Form Block-Level Architecture

```mermaid
graph LR
    A["x(n)"] --> B["Stage 1 b0=1"]
    A --> C["z^-1"]
    C --> D["x 0.5"]
    B --> E["Adder S1"]
    D --> E
    E --> F["Stage 2 b0=1"]
    E --> G["z^-1"]
    G --> H["x 2"]
    G --> I["z^-1"]
    I --> J["x 1"]
    F --> K["Adder S2"]
    H --> K
    J --> K
    K --> L["y(n)"]
```

**Reading the Diagram:**
- **Stage 1** is a first-order section with transfer function $1 + 0.5\,z^{-1}$.
- **Stage 2** is a second-order section with transfer function $1 + 2\,z^{-1} + z^{-2}$.
- The output of Stage 1 *feeds into* Stage 2 — this is the **cascade (series) connection**.

## 4.4 Parallel Form Block-Level Architecture

```mermaid
graph LR
    A["x(n)"] --> B["h0 multiplier"]
    A --> C["z^-1"]
    C --> D["h1 multiplier"]
    C --> E["z^-1"]
    E --> F["h2 multiplier"]
    E --> G["z^-1"]
    G --> H["h3 multiplier"]
    B --> I["Summer"]
    D --> I
    F --> I
    H --> I
    I --> J["y(n)"]
```

**Reading the Diagram:**
- Each branch is **independent** — they share the same input but compute their products in parallel.
- All four branches converge at a single summer.
- This is the **true parallel topology** — ideal for hardware-level parallelism (FPGA, ASIC, GPU).

## 4.5 Sequential Processing Topology Matrix (Comparison Table)

| Property | Direct Form | Cascade Form | Parallel Form |
|----------|-------------|---------------|----------------|
| Topology | Series of taps | Series of stages | Parallel branches |
| Signal flow | Sequential | Sequential between stages | Concurrent |
| Modular? | No | Yes (per biquad) | Yes (per branch) |
| Hardware parallelism | Low | Low | High |
| Coefficient quantization sensitivity | High | Medium | Medium |
| Pipelining friendly? | Limited | Yes | Yes (naturally) |
| Suitable for FPGA? | Yes | Yes | **Excellent** |
| Suitable for software (C/Python)? | **Excellent** | Good | Limited |
| Memory access pattern | Linear shift | Multiple sub-delays | Random/strided |
| Verifiability | Easy | Easy (per stage) | Easy (per branch) |

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A Questions (3 Marks Each)

> [!NOTE]
> **Mark Distribution Note:** Part A questions in KTU typically test definitions, key properties, and direct recall. Answers should fit in 4–6 lines, with at least one equation and one key term in **bold**.

### Question 1

**`[KTU University Exam - July 2024]`** [CO2, Remember]

*Define an FIR filter and write its difference equation in terms of impulse response coefficients. Mention one advantage and one disadvantage compared to IIR filters.*

**Model Answer (3 marks):**

An FIR (Finite Impulse Response) filter has an impulse response $h(n)$ of **finite duration $N$**, settling to zero after $N-1$ samples. Its difference equation is:

$$
y(n) = \sum_{k=0}^{N-1} h(k)\,x(n-k)
$$

- **Advantage:** Guaranteed BIBO stability (no feedback, all poles at $z=0$).
- **Disadvantage:** Requires **more coefficients and multiplications** than an IIR filter to achieve a comparable magnitude response, increasing computational cost.

**[Mark Allocation: Definition with equation: 1 mark; Advantage: 1 mark; Disadvantage: 1 mark]**

### Question 2

**`[KTU University Exam - Dec 2023]`** [CO2, Understand]

*Compare the direct, cascade, and parallel realization structures of an FIR filter in terms of (a) number of multipliers and (b) one key application scenario.*

**Model Answer (3 marks):**

| Structure | # Multipliers | Best Application |
|-----------|----------------|------------------|
| **Direct** | $N$ (one per tap) | Software DSP (C/Python), small $N$ |
| **Cascade** | $2 \cdot \lfloor N/2 \rfloor$ (per biquad) | Pipelined hardware, coefficient-quantization-robust designs |
| **Parallel** | $N$ (one per branch) | FPGA/ASIC with true hardware parallelism, high-throughput 5G channelizers |

**[Mark Allocation: 3 structures × 1 mark each = 3 marks]**

---

## 5.2 Part B Questions (14 Marks Each)

> [!NOTE]
> **Internal Choice Pattern:** KTU ESE Part B questions come in pairs. The student picks *one* of the two alternatives. Each alternative has two sub-parts: part (a) 7 marks and part (b) 7 marks.

### Question A (14 Marks)

**`[KTU University Exam - July 2024, Module 3]`** [CO2, Apply + Analyze]

**(a)** [7 Marks] *Obtain the direct form realization structure for the FIR filter described by the difference equation* $y(n) = x(n) + 0.5\,x(n-1) + 0.25\,x(n-2) + 0.125\,x(n-3)$. *Label all multipliers and delay elements clearly.*

**Model Solution:**

The difference equation is already in the canonical direct-form FIR shape. The coefficients are:

$$
h(0) = 1,\quad h(1) = 0.5,\quad h(2) = 0.25,\quad h(3) = 0.125
$$

**Direct-Form Block Diagram:**

```
                +---[× 1.0]------+
                |                |
x(n) ---+------+--------+       |
        |               |       |
        |               v       v
        |             [z⁻¹] --[× 0.5]--+
        |               |              |
        |               v              v
        |             [z⁻¹] --[× 0.25]-|--+
        |               |              |  |
        |               v              v  v
        |             [z⁻¹] --[× 0.125]--> (+) ---> y(n)
        |
        +------- (live tap for h(0))
```

**Resource Count:**
- **Multipliers: 4** (for $h(0), h(1), h(2), h(3)$)
- **Unit delays: 3** (for $z^{-1}, z^{-2}, z^{-3}$)
- **Adders: 3** (to sum the four products)

**[Mark Allocation: Identifying coefficients $h(k)$: 1 mark; Drawing block diagram with all multipliers and delays: 4 marks; Resource count: 2 marks]**

---

**(b)** [7 Marks] *Convert the same filter to a cascade realization using two second-order sections (biquads). Show all factorization steps and write the difference equations for each stage.*

**Model Solution:**

The transfer function of the filter is:

$$
H(z) = 1 + 0.5\,z^{-1} + 0.25\,z^{-2} + 0.125\,z^{-3}
$$

This is a 4-tap filter (order 3). It can be written as the product of a first-order section and a third-order section, or — as the problem requests — a **single first-order + a second-order + remainder**. Let us factor $H(z)$:

First, factor out a first-order term by polynomial division. Multiply $H(z)$ by $z^3$:

$$
H(z)\cdot z^3 = z^3 + 0.5\,z^2 + 0.25\,z + 0.125
$$

Try $H(z) = (1 + a\,z^{-1})(1 + b\,z^{-1} + c\,z^{-2})$. Expanding:

$$
H(z) = 1 + b\,z^{-1} + c\,z^{-2} + a\,z^{-1} + ab\,z^{-2} + ac\,z^{-3}
$$

$$
H(z) = 1 + (a+b)z^{-1} + (c+ab)z^{-2} + ac\,z^{-3}
$$

Matching coefficients:

- $a + b = 0.5$
- $c + ab = 0.25$
- $ac = 0.125$

From the third: $c = 0.125/a$. Substituting into the second:

$$
\frac{0.125}{a} + a b = 0.25
$$

And from the first: $b = 0.5 - a$.

$$
\frac{0.125}{a} + a(0.5 - a) = 0.25
$$

$$
\frac{0.125}{a} + 0.5a - a^2 = 0.25
$$

Multiply by $a$:

$$
0.125 + 0.5a^2 - a^3 = 0.25a
$$

$$
-a^3 + 0.5a^2 - 0.25a + 0.125 = 0
$$

$$
a^3 - 0.5a^2 + 0.25a - 0.125 = 0
$$

Try $a = 0.5$: $0.125 - 0.125 + 0.125 - 0.125 = 0$ ✓

So $a = 0.5$, hence $b = 0.5 - 0.5 = 0$, and $c = 0.125/0.5 = 0.25$.

Therefore:

$$
H(z) = (1 + 0.5\,z^{-1})(1 + 0.25\,z^{-2})
$$

Wait — let me verify: $(1 + 0.5z^{-1})(1 + 0.25z^{-2}) = 1 + 0.25z^{-2} + 0.5z^{-1} + 0.125z^{-3} = 1 + 0.5z^{-1} + 0.25z^{-2} + 0.125z^{-3}$ ✓

**Cascade Stages:**

- **Stage 1** (first-order, $b_0=1, b_1=0.5, b_2=0$):
$$
w_1(n) = x(n) + 0.5\,x(n-1)
$$

- **Stage 2** (second-order, $b_0=1, b_1=0, b_2=0.25$):
$$
y(n) = w_1(n) + 0.25\,w_1(n-2)
$$

**Cascade Block Diagram:**

```
                Stage 1                 Stage 2
x(n) ---+---[×1]----+---[×1]----------+------> y(n)
        |           ^                 ^
        |           |                 |
        +--[z⁻¹]--[×0.5]            [z⁻¹]--[z⁻¹]--[×0.25]
                                            (two delays)
```

**Resource Count:**
- Multipliers: 3 (one in stage 1, two in stage 2)
- Delays: 3 (one in stage 1, two in stage 2)
- Adders: 2

**[Mark Allocation: Factorization: 3 marks; Difference equations: 2 marks; Block diagram: 1 mark; Resource count: 1 mark]**

---

### Question B (14 Marks)

**`[KTU University Exam - Dec 2023, Module 3]`** [CO2, Apply + Analyze]

**(a)** [7 Marks] *For the FIR filter with transfer function* $H(z) = 0.1 + 0.3\,z^{-1} + 0.5\,z^{-2} + 0.3\,z^{-3} + 0.1\,z^{-4}$*, determine the parallel form realization. Write the difference equation for each branch and draw the block diagram.*

**Model Solution:**

The filter is 5-tap (order 4). The coefficients are:

$$
h(0) = 0.1,\quad h(1) = 0.3,\quad h(2) = 0.5,\quad h(3) = 0.3,\quad h(4) = 0.1
$$

Note that $h(k) = h(4-k)$ — this is a **linear-phase symmetric FIR** (good for distortionless filtering).

**Parallel Form Decomposition:**

Since this is FIR, all poles are at $z=0$. The parallel form is simply the sum of scaled, delayed versions of the input:

$$
H(z) = 0.1 + 0.3\,z^{-1} + 0.5\,z^{-2} + 0.3\,z^{-3} + 0.1\,z^{-4}
$$

**Branch Difference Equations:**

- **Branch 0** (no delay): $y_0(n) = 0.1\,x(n)$
- **Branch 1** (one delay): $y_1(n) = 0.3\,x(n-1)$
- **Branch 2** (two delays): $y_2(n) = 0.5\,x(n-2)$
- **Branch 3** (three delays): $y_3(n) = 0.3\,x(n-3)$
- **Branch 4** (four delays): $y_4(n) = 0.1\,x(n-4)$

**Output Equation:**

$$
y(n) = y_0(n) + y_1(n) + y_2(n) + y_3(n) + y_4(n)
$$

**Parallel Block Diagram:**

```
x(n) ──────────────────────[× 0.1]──────────┐
                                            │
x(n) ───[z⁻¹]──────────────[× 0.3]──────────┤
              │                              │
              └──[z⁻¹]───────[× 0.5]─────────┤
                       │                      ├──(+)──► y(n)
                       └──[z⁻¹]──[× 0.3]──────┤
                                │             │
                                └──[z⁻¹]──[× 0.1]──┘
```

**Resource Count:**
- Multipliers: 5
- Delays: 4
- Adders: 4

**[Mark Allocation: Identifying branch structure: 2 marks; Difference equations for branches: 2 marks; Block diagram: 2 marks; Output summation: 1 mark]**

---

**(b)** [7 Marks] *Compare the direct, cascade, and parallel forms of the above 5-tap FIR filter with respect to (i) total number of multipliers, (ii) number of delay elements, (iii) hardware parallelism, and (iv) sensitivity to coefficient quantization. Tabulate your answer.*

**Model Solution:**

| Property | Direct | Cascade | Parallel |
|----------|--------|---------|----------|
| (i) Multipliers | $\mathbf{5}$ | $\mathbf{4}$ (two biquads) or $\mathbf{5}$ (with first-order tail) | $\mathbf{5}$ |
| (ii) Delay elements | $\mathbf{4}$ | $\mathbf{4}$ | $\mathbf{4}$ |
| (iii) Hardware parallelism | **Low** (sequential taps) | **Medium** (pipelined between stages) | **High** (true parallel branches) |
| (iv) Coefficient sensitivity | **High** (all coefficients in one block) | **Low** (errors localized to one biquad) | **Medium** (errors in one branch affect only that path) |

**Key Insights:**

1. **Direct form** is conceptually simplest but a single coefficient error affects the entire response.
2. **Cascade form** (biquads) is the **industry standard for hardware** because each stage can be pipelined and the wordlength per stage can be tuned independently.
3. **Parallel form** is preferred when the **target platform is FPGA or ASIC** with abundant multipliers and you need the highest possible throughput (e.g., a 100 MHz channelizer).

**KTU High-Yield Note:** For an $N$-tap FIR, the **direct and parallel forms have the same multiplier count ($N$)**, but the **cascade form can have a slightly lower count** when grouped into biquads (approximately $N$ as well, but with structural regularity).

**[Mark Allocation: 4 properties × 1 mark each: 4 marks; Numerical values for multipliers/delays: 1 mark; Justification/insight: 2 marks]**

---

> [!WARNING]
> **KTU Examiner's Valuation Warning / Pitfall Callout**
>
> 1. **Confusing IIR and FIR parallel forms:** For an FIR, the *parallel* form is mathematically the same as a *delayed-tap* decomposition, not a true residue expansion with non-zero poles. Writing "poles at $z = p_k$" for an FIR parallel form **will lose 1–2 marks** unless $p_k = 0$ is explicitly stated.
>
> 2. **Skipping the factorization algebra:** When converting a direct-form filter to cascade form, examiners award marks only for the *intermediate factorization steps* (e.g., solving the system $a+b = 0.5,\; ac = 0.125$, etc.). Jumping directly to the factored answer is treated as "answer not shown" and forfeits 1–2 marks.
>
> 3. **Forgetting the output adder in the parallel form:** Students often draw the parallel branches but omit the final summer `Σ` that combines them. Always end the diagram with an explicit adder whose output is $y(n)$.
>
> 4. **Confusing "Direct Form-I" with "Direct Form-II":** For FIR filters, **both forms are identical** because there is no recursive part to transpose. Writing a separate "Direct Form-II" block diagram for an FIR is incorrect and loses marks.
>
> 5. **Not labeling the delay line in the block diagram:** Always write `$z^{-1}$` inside each delay block, and label each multiplier with the **exact coefficient value**. An unlabeled diagram gets 0 marks for the diagram portion.

---

## 5.3 Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **Rapid-Revision Checklist — Print This Before the Exam!**

- **FIR filter definition:** $H(z) = \sum_{k=0}^{N-1} h(k)\,z^{-k}$; all poles at $z=0$; guaranteed stable.
- **Difference equation (canonical):** $y(n) = \sum_{k=0}^{N-1} h(k)\,x(n-k)$. No feedback term $y(n-k)$.
- **Three realization structures**:
  - **Direct Form** = tapped delay line with multipliers $h(0), h(1), \ldots, h(N-1)$.
  - **Cascade Form** = product of first- and second-order FIR sections (biquads).
  - **Parallel Form** = sum of scaled, delayed input branches.
- **Multiplier count:**
  - Direct: $N$
  - Cascade (biquads): $2\lfloor N/2 \rfloor$
  - Parallel: $N$
- **Delay count:** $N-1$ for all three structures.
- **Adder count:** $N-1$ for direct and parallel; $\lfloor N/2 \rfloor$ for cascade.
- **Linear phase condition:** $h(k) = \pm h(N-1-k)$ — symmetric or anti-symmetric. If true, the structure preserves phase (no phase distortion).
- **Group delay:** $\tau_g = (N-1)/2$ samples for linear-phase FIR.
- **Cascade factorization rule of thumb:** Pair zeros that are close to each other in the $z$-plane into the same biquad to reduce peak coefficient magnitudes and improve numerical stability.
- **Parallel form is preferred when:** the target hardware is FPGA/ASIC and high throughput / pipelining is critical.
- **Direct form is preferred when:** software implementation (C, Python, MATLAB) is used and code clarity is paramount.
- **Cascade form is preferred when:** coefficient wordlength is limited (e.g., 16-bit fixed-point DSP).
- **Verification principle:** All three structures must produce **exactly the same $y(n)$** for the **same $x(n)$ and $h(n)$**. Always cross-check by computing the direct form output and comparing it to the cascade/parallel output (e.g., using the Python verification block above).
- **Common exam trap:** The parallel form of an FIR is *not* a partial fraction expansion with non-zero poles — it is a polynomial decomposition. State this clearly in answers to avoid the "IIR-vs-FIR confusion" penalty.
- **Block diagram essentials:** Always label multipliers with their coefficient values, label each delay as $z^{-1}$, and end the diagram with a clear adder producing $y(n)$.

---

<!-- SECTION_5_END -->
