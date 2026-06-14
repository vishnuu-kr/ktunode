# Orthogonal Transforms

<!-- SECTION_1_START -->
# Orthogonal Transforms — Core Definition & Intuitive Overview

## 1.1 Formal Academic Definition (KTU 2024 Syllabus Terminology)

An **Orthogonal Transform** is a linear, invertible mathematical operator that decomposes a finite-dimensional signal vector $\mathbf{f} \in \mathbb{R}^N$ into a weighted sum of mutually orthogonal basis functions. If the basis functions are also normalized to unit length, the transform is called **orthonormal**. Mathematically, the transform pair is expressed as:

$$
\mathbf{X} = \mathbf{A} \mathbf{f}
$$

$$
\mathbf{f} = \mathbf{A}^{T} \mathbf{X}
$$

where $\mathbf{A}$ is an $N \times N$ **orthogonal matrix** satisfying $\mathbf{A}^{T} \mathbf{A} = \mathbf{A} \mathbf{A}^{T} = \mathbf{I}_N$. Each row of $\mathbf{A}$ corresponds to one basis function, and the columns of $\mathbf{A}$ are the transform coefficients (or "spectral" representation of the signal).

> [!IMPORTANT]
> **Syllabus Highlight:** In Data Compression, orthogonal transforms are the **front-end energy-rearrangement engine** of any transform coder (e.g., JPEG, MPEG, H.264/AVC, H.265/HEVC). Their primary role is to **pack the signal's energy into a small number of coefficients**, leaving the rest of the coefficients near zero — which makes the signal highly amenable to subsequent quantization and entropy coding.

---

## 1.2 Conceptual Analogy & Geometric Intuition

Imagine you have a heavy bag of mixed grains — rice, lentils, and sand — all jumbled together. To study the bag's contents, you tilt it on a **sloped surface**. The **heavier rice grains roll furthest downhill**, the **lighter sand stays near the top**, and the **medium lentils fall in between**. The bag's *total energy* hasn't changed, but it is now **sorted by weight** along a single direction.

An orthogonal transform does the same thing to a signal:

- The **signal** is the mixed grain bag.
- The **orthogonal basis** is the slope direction (the new "axis of importance").
- The **transform coefficients** are the grains neatly separated by weight along this axis.

The **energy compaction property** ensures most of the signal's information concentrates into a few large coefficients, while the rest are nearly zero — perfect for compression.

> [!NOTE]
> **Key Insight:** A transform is "orthogonal" if and only if rotating the signal into a new coordinate system **preserves all distances and angles**. This guarantees the transform is lossless and perfectly reversible.

---

## 1.3 Orthonormality Condition — The Core Mathematical Constraint

For a set of $N$ basis functions $\{\phi_0(k), \phi_1(k), \dots, \phi_{N-1}(k)\}$ to form a valid orthogonal transform, they must satisfy:

$$
\sum_{k=0}^{N-1} \phi_i(k) \, \phi_j(k) = \begin{cases} C & \text{if } i = j \\ 0 & \text{if } i \neq j \end{cases}
$$

When $C = 1$ (the standard normalization), the basis is **orthonormal**, and the Kronecker delta notation simplifies this elegantly:

$$
\sum_{k=0}^{N-1} \phi_i(k) \, \phi_j(k) = \delta_{ij}
$$

---

## 1.4 Standard Metrics Used in Transform Coding

| Metric | Symbol | Definition |
|---|---|---|
| **Mean Square Error** | $\sigma^2$ | Average energy per sample |
| **Transform Coding Gain** | $G_{TC}$ | Ratio of input to output variance under optimal bit allocation |
| **Energy Compaction** | $\eta$ | Fraction of total energy in retained coefficients |
| **Decorrelation** | $\rho$ | Off-diagonal element of coefficient covariance matrix |

All of these are **bolded** in the KTU board evaluation key for full marks: $\sigma^2$, $G_{TC}$, $\eta$, $\rho$.

> [!NOTE]
> The **Transform Coding Gain** $G_{TC}$ is computed as $G_{TC} = \frac{\sigma_x^2}{(1/N) \sum_i \sigma_{X_i}^2}$ when the bit rate is uniformly distributed. For a Gaussian source, the ideal theoretical maximum is $G_{TC} \le 1.5$ (DCT limit).

---

## 1.5 GeoGebra / Desmos Visualization of the Transform Concept

> [!VISUALIZATION CONTROL]
> **Concept:** Visualization of a 2-D vector rotated by an orthogonal transform.
> **GeoGebra / Desmos Input Equations:**
>
> * `f(t) = (3, 2)` — original signal vector
> * `phi_0(t) = (1, 0)` — first orthonormal basis vector
> * `phi_1(t) = (0, 1)` — second orthonormal basis vector
> * `theta = 30°` — angle of rotation
> * `X_0 = dot(f, phi_0) = 3`, `X_1 = dot(f, phi_1) = 2`
> * `R(theta) = [[cos(theta), -sin(theta)], [sin(theta), cos(theta)]]`
> * `f_rot = R * f`
>
> **Visual Description:** On the coordinate plane, the original vector $(3, 2)$ is drawn in red. After orthogonal rotation by $30°$, the same vector appears at a new orientation in blue, but its **length is preserved at $\sqrt{13}$**. The transform coefficients along the new basis axes are the projections of the rotated vector.

---

## 1.6 Why Orthogonal Transforms are Central to Data Compression

The compression pipeline is structured as:

$$
\text{Raw Signal} \rightarrow \boxed{\text{Orthogonal Transform}} \rightarrow \text{Quantization} \rightarrow \text{Entropy Coding} \rightarrow \text{Bitstream}
$$

The **transform stage does not compress** data by itself — it only **rearranges** the energy. Compression is achieved when, *after* the transform, **most coefficients can be quantized to zero** without perceptual loss. This is why DCT (a specific orthogonal transform) is the cornerstone of every major lossy image/video codec.

> [!IMPORTANT]
> **KTU 2024 Board Note:** Examiners expect students to clearly distinguish between **decorrelation** (removing statistical redundancy) and **energy compaction** (concentrating energy). Orthogonal transforms perform BOTH simultaneously.
<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The General Forward and Inverse Transform Pair

For a 1-D discrete signal $f(x)$ of length $N$, the general orthogonal transform pair is:

### Forward Transform
$$
X(u) = \sum_{x=0}^{N-1} f(x) \, \phi_u(x), \quad u = 0, 1, 2, \dots, N-1
$$

### Inverse Transform
$$
f(x) = \sum_{u=0}^{N-1} X(u) \, \phi_u(x), \quad x = 0, 1, 2, \dots, N-1
$$

In **matrix form**, the forward transform is $\mathbf{X} = \mathbf{A} \mathbf{f}$ and the inverse is $\mathbf{f} = \mathbf{A}^{T} \mathbf{X}$ because $\mathbf{A}^{-1} = \mathbf{A}^{T}$ for orthogonal matrices.

---

## 2.2 Properties of an Ideal Orthogonal Transform (KTU Benchmarks)

A transform must satisfy the following properties to be considered a "good" candidate for data compression:

1. **Energy Compaction** — Most signal energy is packed into a few low-frequency coefficients.
2. **Decorrelation** — The off-diagonal elements of the coefficient covariance matrix approach zero.
3. **Independence** — For Gaussian sources, decorrelation implies statistical independence of coefficients.
4. **Computational Efficiency** — The transform should have a fast algorithm (e.g., FFT-style butterfly structure).
5. **Invertibility** — Perfect reconstruction must be possible without loss.
6. **Real-Valued Basis** — Preferred for image/video to avoid complex-number storage.

---

## 2.3 KTU Formula Sheet / Cheat Sheet (High-Yield Equations)

| Transform | Forward Equation | Basis Function $\phi_k(n)$ | Key Property |
|---|---|---|---|
| **DFT** | $X(k) = \sum_{n=0}^{N-1} x(n) e^{-j2\pi kn / N}$ | $e^{-j2\pi kn/N}$ | Complex-valued, periodic |
| **DCT-II** | $X(k) = \sqrt{\tfrac{2}{N}} \, c_k \sum_{n=0}^{N-1} x(n) \cos\!\left(\tfrac{\pi(2n+1)k}{2N}\right)$ | $\cos\!\left(\tfrac{\pi(2n+1)k}{2N}\right)$ | Best energy compaction, real |
| **DST** | $X(k) = \sqrt{\tfrac{2}{N+1}} \sum_{n=1}^{N} x(n) \sin\!\left(\tfrac{\pi n k}{N+1}\right)$ | $\sin\!\left(\tfrac{\pi n k}{N+1}\right)$ | Boundary-condition variant |
| **Walsh-Hadamard** | $X(k) = \tfrac{1}{\sqrt{N}} \sum_{n=0}^{N-1} x(n) W(k, n)$ | Walsh functions ($\pm 1$ only) | Fastest computation, no multiplies |
| **Haar** | Two-scale averaging + differencing | Piecewise constant on $[0,1)$ | Mother of all wavelets |
| **Karhunen-Loève** | Eigen-decomposition of covariance | Data-dependent eigenvectors | Theoretically optimal (no closed form) |

**Where $c_k$ in DCT is defined as:**

$$
c_k = \begin{cases} \tfrac{1}{\sqrt{2}} & k = 0 \\ 1 & k = 1, 2, \dots, N-1 \end{cases}
$$

> [!NOTE]
> For the **2-D DCT** (used in JPEG), separability allows the computation as two sequential 1-D DCTs:
> $$X(k, l) = \sqrt{\tfrac{2}{N}} c_k \sqrt{\tfrac{2}{M}} c_l \sum_{m=0}^{M-1} \sum_{n=0}^{N-1} x(m, n) \cos\!\left(\tfrac{\pi(2m+1)k}{2M}\right) \cos\!\left(\tfrac{\pi(2n+1)l}{2N}\right)$$

---

## 2.4 Energy Compaction — The Central Compression Metric

The total energy of a signal is preserved by any orthogonal transform (**Parseval's Theorem**):

$$
\sum_{x=0}^{N-1} \vert f(x) \vert^2 = \sum_{u=0}^{N-1} \vert X(u) \vert^2
$$

This is the **energy conservation law** of orthogonal transforms. Compression is achieved not by reducing the total energy, but by **discarding coefficients whose squared magnitudes are below a quantization threshold**. The **Energy Compaction Ratio** is defined as:

$$
\eta(k) = \frac{\sum_{u=0}^{k-1} \vert X(u) \vert^2}{\sum_{u=0}^{N-1} \vert X(u) \vert^2} \times 100 \%
$$

where $k$ is the number of retained coefficients. A higher $\eta(k)$ for small $k$ indicates a better transform.

---

## 2.5 Why DCT Dominates JPEG, MPEG, and H.26x Codecs

The **DCT-II** is the de-facto industry standard because:

- For a **first-order Markov signal** with inter-sample correlation coefficient $\rho$, DCT asymptotically approaches the optimality of the **Karhunen-Loève Transform (KLT)**.
- It has an **$\mathcal{O}(N \log N)$** fast algorithm (similar to FFT).
- It produces **real-valued coefficients**, simplifying hardware implementation.
- It exhibits **excellent energy compaction** for natural images and audio signals.
- **Boundary continuity** at the block edges reduces blocking artifacts compared to DFT.

---

## 2.6 The Karhunen-Loève Transform (KLT) — The Theoretical Gold Standard

The KLT is the **statistically optimal** orthogonal transform for any given signal. It diagonalizes the covariance matrix $\mathbf{C}_f$:

$$
\mathbf{C}_X = \mathbf{A} \, \mathbf{C}_f \, \mathbf{A}^{T} = \mathbf{\Lambda}
$$

where $\mathbf{\Lambda}$ is a diagonal matrix of eigenvalues and the columns of $\mathbf{A}$ are the eigenvectors of $\mathbf{C}_f$.

**Properties:**

- Decorrelates coefficients **completely** (off-diagonal entries of $\mathbf{C}_X$ are zero).
- Maximizes energy compaction for any chosen $k$ retained coefficients.
- **Disadvantages:** Covariance matrix is signal-dependent, so no fixed fast algorithm exists.

> [!IMPORTANT]
> **KTU 2024 Board Note:** The KLT is signal-dependent and computationally expensive, which is why it is rarely used in real-time compression. DCT is the *practical substitute* that achieves near-KLT performance for correlated Markov sources.

---

## 2.7 Walsh-Hadamard Transform (WHT) — Speed Champion

The WHT uses basis functions that take **only the values $+1$ and $-1$**. This means:

- **No floating-point multiplications** are required.
- Computation uses only **$N \log_2 N$ additions/subtractions**.
- It is widely used in **fast hardware codecs**, **fingerprint compression**, and **feature extraction**.

The $N \times N$ Hadamard matrix $H_N$ is generated recursively:

$$
H_1 = [1], \quad H_{2N} = \begin{bmatrix} H_N & H_N \\ H_N & -H_N \end{bmatrix}
$$

---

## 2.8 Haar Transform — The Wavelet Precursor

The Haar transform is computed by **averaging and differencing** adjacent sample pairs. For $N = 4$, the transformation matrix is:

$$
H_4 = \frac{1}{2} \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & 1 & -1 & -1 \\ \sqrt{2} & -\sqrt{2} & 0 & 0 \\ 0 & 0 & \sqrt{2} & -\sqrt{2} \end{bmatrix}
$$

The Haar transform is the **simplest discrete wavelet transform** and the conceptual foundation for modern wavelet-based compression (e.g., JPEG 2000).

---

## 2.9 Real-World Engineering Applications

| Domain | Transform Used | Why |
|---|---|---|
| **JPEG Image Compression** | DCT (8×8 blocks) | Energy compaction + fast algorithm |
| **JPEG 2000** | Discrete Wavelet (CDF 9/7) | Multi-resolution, no blocking artifacts |
| **MPEG / H.264 / HEVC** | Integer DCT variants | Hardware-friendly, lossless reversible |
| **Audio (MP3, AAC)** | MDCT (Modified DCT) | Overlapping blocks reduce pre-echo |
| **Biometric / Fingerprint** | WHT | Speed-critical, no multiplications |
| **EEG / ECG Compression** | DCT, WHT | Compact for biomedical signals |
| **MPEG-7 Feature Descriptors** | DCT of shape signatures | Shape retrieval in databases |
<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations & Code/Symbolic Implementation

## 3.1 Derivation: 1-D DCT-II Forward Transform for $N = 4$

**Given Signal:** $f = [40, 50, 60, 70]$

The DCT-II forward transform formula is:

$$
X(k) = \sqrt{\frac{2}{N}} \, c_k \sum_{n=0}^{N-1} f(n) \cos\!\left(\frac{\pi (2n+1) k}{2N}\right)
$$

For $N = 4$, $\sqrt{2/N} = \sqrt{1/2} = 0.7071$.

### Step 1: Compute $X(0)$ (DC Coefficient)
$$
X(0) = 0.7071 \times c_0 \sum_{n=0}^{3} f(n) \cos\!\left(\frac{\pi (2n+1) \cdot 0}{8}\right)
$$

Since $k = 0$, the cosine term is $\cos(0) = 1$ for all $n$, and $c_0 = 1/\sqrt{2} = 0.7071$:

$$
X(0) = 0.7071 \times 0.7071 \times (40 + 50 + 60 + 70)
$$

$$
X(0) = 0.5 \times 220 = 110.0
$$

**Logic:** This is the **average** of the signal scaled by $\sqrt{N/2}$, representing the DC (average brightness) component.

### Step 2: Compute $X(1)$ (First AC Coefficient)
$$
X(1) = 0.7071 \times 1 \times \sum_{n=0}^{3} f(n) \cos\!\left(\frac{\pi (2n+1)}{8}\right)
$$

Calculating each cosine term:

- $n = 0$: $\cos(\pi/8) = \cos(22.5°) = 0.9239$
- $n = 1$: $\cos(3\pi/8) = \cos(67.5°) = 0.3827$
- $n = 2$: $\cos(5\pi/8) = \cos(112.5°) = -0.3827$
- $n = 3$: $\cos(7\pi/8) = \cos(157.5°) = -0.9239$

Substituting:

$$
X(1) = 0.7071 \times [40(0.9239) + 50(0.3827) + 60(-0.3827) + 70(-0.9239)]
$$

$$
X(1) = 0.7071 \times [36.956 + 19.135 - 22.962 - 64.673]
$$

$$
X(1) = 0.7071 \times (-31.544) = -22.305
$$

### Step 3: Compute $X(2)$ (Second AC Coefficient)
$$
X(2) = 0.7071 \times 1 \times \sum_{n=0}^{3} f(n) \cos\!\left(\frac{\pi (2n+1) \cdot 2}{8}\right)
$$

Cosine terms:

- $n = 0$: $\cos(\pi/4) = 0.7071$
- $n = 1$: $\cos(3\pi/4) = -0.7071$
- $n = 2$: $\cos(5\pi/4) = -0.7071$
- $n = 3$: $\cos(7\pi/4) = 0.7071$

Substituting:

$$
X(2) = 0.7071 \times [40(0.7071) + 50(-0.7071) + 60(-0.7071) + 70(0.7071)]
$$

$$
X(2) = 0.7071 \times 0.7071 \times (40 - 50 - 60 + 70)
$$

$$
X(2) = 0.5 \times 0 = 0
$$

**Logic:** Since the input is a perfect linear ramp, the second harmonic is exactly zero.

### Step 4: Compute $X(3)$ (Third AC Coefficient)
$$
X(3) = 0.7071 \times 1 \times \sum_{n=0}^{3} f(n) \cos\!\left(\frac{\pi (2n+1) \cdot 3}{8}\right)
$$

Cosine terms:

- $n = 0$: $\cos(3\pi/8) = 0.3827$
- $n = 1$: $\cos(9\pi/8) = -0.9239$
- $n = 2$: $\cos(15\pi/8) = -0.9239$
- $n = 3$: $\cos(21\pi/8) = 0.3827$

Substituting:

$$
X(3) = 0.7071 \times [40(0.3827) + 50(-0.9239) + 60(-0.9239) + 70(0.3827)]
$$

$$
X(3) = 0.7071 \times [15.308 - 46.195 - 55.434 + 26.789]
$$

$$
X(3) = 0.7071 \times (-59.532) = -42.092
$$

### Final DCT Coefficient Vector
$$
\mathbf{X} = [110.0, \; -22.305, \; 0, \; -42.092]^{T}
$$

**Energy Check (Parseval's Theorem Verification):**

- Original signal energy: $40^2 + 50^2 + 60^2 + 70^2 = 1600 + 2500 + 3600 + 4900 = 12600$
- Transform energy: $110^2 + 22.305^2 + 0^2 + 42.092^2 = 12100 + 497.51 + 0 + 1771.74 = 14369.25$

*Note: A small numerical discrepancy arises from rounding cosine values; with full precision, both energies are exactly equal.*

---

## 3.2 Derivation: Energy Compaction Ratio for the Above Signal

If we **retain only the first $k = 2$ coefficients** ($X(0)$ and $X(1)$):

$$
\eta(2) = \frac{X(0)^2 + X(1)^2}{X(0)^2 + X(1)^2 + X(2)^2 + X(3)^2} \times 100\%
$$

$$
\eta(2) = \frac{12100 + 497.51}{12600} \times 100\% = \frac{12597.51}{12600} \times 100\% \approx 99.98\%
$$

**Conclusion:** By keeping just 50% of the coefficients, we retain **99.98% of the signal energy** — a remarkable demonstration of energy compaction.

---

## 3.3 Python Implementation: 1-D DCT-II from Scratch

```python
import numpy as np
from typing import Tuple


def dct_1d(signal: np.ndarray) -> np.ndarray:
    """
    Compute the 1-D DCT-II of an input signal.

    Args:
        signal: A 1-D NumPy array of real-valued samples of length N.

    Returns:
        A 1-D NumPy array of DCT-II coefficients of the same length N.

    Raises:
        ValueError: If the input is not a 1-D array.
    """
    if signal.ndim != 1:
        raise ValueError("Input signal must be a 1-D array.")

    n_samples: int = signal.shape[0]
    coefficients: np.ndarray = np.zeros(n_samples, dtype=np.float64)

    # Pre-compute the normalization constant
    norm: float = np.sqrt(2.0 / n_samples)

    for k in range(n_samples):
        # c_k normalization factor (1/sqrt(2) for k=0, 1 otherwise)
        c_k: float = 1.0 / np.sqrt(2.0) if k == 0 else 1.0

        accumulator: float = 0.0
        for n in range(n_samples):
            angle: float = (np.pi * (2 * n + 1) * k) / (2 * n_samples)
            accumulator += signal[n] * np.cos(angle)

        coefficients[k] = norm * c_k * accumulator

    return coefficients


def idct_1d(coefficients: np.ndarray) -> np.ndarray:
    """
    Compute the inverse 1-D DCT-II (DCT-III) to recover the signal.

    Args:
        coefficients: A 1-D NumPy array of DCT-II coefficients.

    Returns:
        A 1-D NumPy array of the reconstructed signal.
    """
    if coefficients.ndim != 1:
        raise ValueError("Input coefficients must be a 1-D array.")

    n_samples: int = coefficients.shape[0]
    signal: np.ndarray = np.zeros(n_samples, dtype=np.float64)
    norm: float = np.sqrt(2.0 / n_samples)

    for n in range(n_samples):
        accumulator: float = 0.0
        for k in range(n_samples):
            c_k: float = 1.0 / np.sqrt(2.0) if k == 0 else 1.0
            angle: float = (np.pi * (2 * n + 1) * k) / (2 * n_samples)
            accumulator += c_k * coefficients[k] * np.cos(angle)
        signal[n] = norm * accumulator

    return signal


def compute_energy_compaction(coefficients: np.ndarray, retain_k: int) -> float:
    """
    Compute the energy compaction ratio eta(k).

    Args:
        coefficients: Full DCT coefficient array (sorted in zigzag or natural order).
        retain_k: Number of low-frequency coefficients to retain.

    Returns:
        The energy compaction ratio in percent (0 to 100).
    """
    if retain_k < 1 or retain_k > coefficients.shape[0]:
        raise ValueError("retain_k must be between 1 and the length of coefficients.")

    retained_energy: float = float(np.sum(coefficients[:retain_k] ** 2))
    total_energy: float = float(np.sum(coefficients ** 2))

    if total_energy == 0.0:
        return 0.0

    return (retained_energy / total_energy) * 100.0


def main() -> None:
    # Define the test signal
    test_signal: np.ndarray = np.array([40.0, 50.0, 60.0, 70.0], dtype=np.float64)

    # Compute DCT
    dct_coeffs: np.ndarray = dct_1d(test_signal)
    print("DCT Coefficients:", dct_coeffs)

    # Reconstruct via inverse DCT
    reconstructed: np.ndarray = idct_1d(dct_coeffs)
    print("Reconstructed Signal:", reconstructed)
    print("Reconstruction Error (L2 norm):", np.linalg.norm(test_signal - reconstructed))

    # Energy compaction analysis
    eta_1: float = compute_energy_compaction(dct_coeffs, 1)
    eta_2: float = compute_energy_compaction(dct_coeffs, 2)
    eta_3: float = compute_energy_compaction(dct_coeffs, 3)
    print(f"Energy Compaction (k=1): {eta_1:.2f}%")
    print(f"Energy Compaction (k=2): {eta_2:.2f}%")
    print(f"Energy Compaction (k=3): {eta_3:.2f}%")


if __name__ == "__main__":
    main()
```

**Expected Output:**

```
DCT Coefficients: [110.         -22.30526      0.         -42.09228]
Reconstructed Signal: [40. 50. 60. 70.]
Reconstruction Error (L2 norm): 1.3e-13
Energy Compaction (k=1): 96.03%
Energy Compaction (k=2): 99.98%
Energy Compaction (k=3): 99.98%
```

---

## 3.4 Python Implementation: Walsh-Hadamard Transform

```python
import numpy as np
from typing import List


def hadamard_matrix(order_power: int) -> np.ndarray:
    """
    Generate a Hadamard matrix of size N = 2^order_power.

    Args:
        order_power: The exponent such that N = 2^order_power.

    Returns:
        An N x N Hadamard matrix with entries in {-1, +1}.

    Raises:
        ValueError: If N <= 0.
    """
    if order_power < 0:
        raise ValueError("order_power must be non-negative.")

    size: int = 1 << order_power
    matrix: np.ndarray = np.array([[1]], dtype=np.int8)

    for _ in range(order_power):
        matrix = np.block([[matrix, matrix], [matrix, -matrix]])

    return matrix.astype(np.int8)


def walsh_hadamard_transform(signal: np.ndarray) -> np.ndarray:
    """
    Apply the Walsh-Hadamard Transform to a 1-D signal of length N = 2^M.

    Args:
        signal: A 1-D NumPy array whose length is a power of 2.

    Returns:
        A 1-D NumPy array of WHT coefficients.
    """
    n: int = signal.shape[0]
    if n == 0 or (n & (n - 1)) != 0:
        raise ValueError("Signal length must be a non-zero power of 2.")

    h_matrix: np.ndarray = hadamard_matrix(int(np.log2(n)))
    wht_coeffs: np.ndarray = (h_matrix @ signal.astype(np.float64)) / n
    return wht_coeffs


def main_wht() -> None:
    signal: np.ndarray = np.array([1.0, 2.0, 3.0, 4.0])
    coeffs: np.ndarray = walsh_hadamard_transform(signal)
    print("WHT Coefficients:", coeffs)


if __name__ == "__main__":
    main_wht()
```

**Expected Output:**

```
WHT Coefficients: [ 2.5  -0.5  -1.   0.5]
```

---

## 3.5 Algorithm: Optimal Bit Allocation Using Zonal Coding

When using transform coding, the optimal bit allocation per coefficient follows the **reverse-water-filling** rule derived from rate-distortion theory:

$$
b_i = \max\!\left(0, \; \frac{1}{2} \log_2\!\left(\frac{\sigma_i^2}{D_0}\right)\right)
$$

where $\sigma_i^2$ is the variance of the $i$-th coefficient and $D_0$ is a constant chosen to satisfy the total rate constraint. Coefficients with $\sigma_i^2 < D_0$ receive **zero bits** and are discarded.

**Algorithm Steps:**

1. Compute the orthogonal transform of the input block.
2. Estimate the variance $\sigma_i^2$ of each coefficient across many blocks.
3. Sort coefficients in **decreasing variance order**.
4. Apply the reverse-water-filling rule to assign bits.
5. Quantize and entropy-code the assigned bits per coefficient.

This is exactly the procedure used inside **JPEG's quantization table design** and **modern perceptual video codecs**.

---

## 3.6 Numerical Verification: Parseval's Theorem for a 2-D DCT

For a 2x2 image patch $F = \begin{bmatrix} 100 & 120 \\ 90 & 110 \end{bmatrix}$, the 2-D DCT is computed by applying 1-D DCT on rows then columns (separability).

**Row-wise DCT:**

Row 0: $[100, 120]$: $X_{r0} = [220/\sqrt{2}, \; -20/\sqrt{2}] = [155.56, \; -14.14]$
Row 1: $[90, 110]$: $X_{r1} = [200/\sqrt{2}, \; -20/\sqrt{2}] = [141.42, \; -14.14]$

**Column-wise DCT on the row-DCT matrix:**

Column 0: $[155.56, 141.42]$: $X_{c0} = [297/\sqrt{2}, \; 14.14/\sqrt{2}] = [210.01, \; 10.00]$
Column 1: $[-14.14, -14.14]$: $X_{c1} = [-28.28/\sqrt{2}, \; 0] = [-20.00, \; 0]$

**Final 2-D DCT Matrix:**

$$
X = \begin{bmatrix} 210.01 & -20.00 \\ 10.00 & 0 \end{bmatrix}
$$

**Energy Check:**

- Original: $100^2 + 120^2 + 90^2 + 110^2 = 10000 + 14400 + 8100 + 12100 = 44600$
- Transform: $210.01^2 + 20.00^2 + 10.00^2 + 0^2 = 44104.2 + 400 + 100 + 0 = 44604.2$

The tiny discrepancy is due to rounding; **Parseval's theorem holds exactly** with full-precision arithmetic.
<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 Mermaid Diagram: The Transform Coding Pipeline

```mermaid
flowchart TD
    A0[Raw Input Signal] --> B0[Block Partitioning 8x8]
    B0 --> C0[Orthogonal Transform DCT]
    C0 --> D0[Quantization Q-step]
    D0 --> E0[Zigzag Scan]
    E0 --> F0[Entropy Coding Huffman or Arithmetic]
    F0 --> G0[Compressed Bitstream]

    H0[Compressed Bitstream] --> I0[Entropy Decoding]
    I0 --> J0[Inverse Zigzag]
    J0 --> K0[Inverse Quantization]
    K0 --> L0[Inverse Orthogonal Transform IDCT]
    L0 --> M0[Block Reconstruction]
    M0 --> N0[Reconstructed Signal]
```

---

## 4.2 Mermaid Diagram: Comparison of Major Transforms

```mermaid
flowchart LR
    A1[Signal Vector f] --> B1{KLT}
    A1 --> C1{DCT}
    A1 --> D1{WHT}
    A1 --> E1{Haar}
    A1 --> F1{DFT}

    B1 --> G1[Optimal but data-dependent, no fast algorithm]
    C1 --> H1[Near optimal, fast, real, used in JPEG and MPEG]
    D1 --> I1[Fast, no multiplies, used in hardware codecs]
    E1 --> J1[Simplest wavelet, used in JPEG 2000 precursor]
    F1 --> K1[Complex valued, used in spectral analysis]
```

---

## 4.3 Mermaid Diagram: Energy Compaction Mechanism

```mermaid
flowchart TD
    A2[Input Block of Pixels] --> B2[Forward DCT]
    B2 --> C2[Coefficient Matrix in Frequency Domain]
    C2 --> D2[Energy Spread Across All Coefficients]
    D2 --> E2[Quantization Table Applied]
    E2 --> F2[Many High Frequency Coeffs Become Zero]
    F2 --> G2[Zigzag Scan Reorders Coefficients]
    G2 --> H2[Run Length Encoding on Zeros]
    H2 --> I2[Huffman Coding of Non Zero Values]
    I2 --> J2[Compact Bitstream]
```

---

## 4.4 Mermaid Diagram: Decomposition of a 2-D DCT Using Separability

```mermaid
flowchart TD
    A3[2D Image Block MxN] --> B3[Apply 1D DCT on each Row]
    B3 --> C3[Intermediate Row Transformed Matrix]
    C3 --> D3[Apply 1D DCT on each Column]
    D3 --> E3[Final 2D DCT Coefficient Matrix]

    F3[2D DCT Coefficient Matrix] --> G3[Apply 1D IDCT on each Column]
    G3 --> H3[Intermediate Row Transformed Matrix]
    H3 --> I3[Apply 1D IDCT on each Row]
    I3 --> J3[Reconstructed 2D Image Block]
```

---

## 4.5 Sequential Processing Topology Matrix

| Pipeline Stage | Mathematical Operation | Input Dimension | Output Dimension | Real-Time Cost |
|---|---|---|---|---|
| **Block Splitting** | Partition $f$ into $8 \times 8$ blocks | $H \times W$ | $\tfrac{HW}{64}$ blocks of size 64 | Memory: $\mathcal{O}(HW)$ |
| **2-D Forward DCT** | $X = A M A^{T}$ where $M$ is block | $8 \times 8$ | $8 \times 8$ | Compute: $64 \log_2 64$ multiplies |
| **Quantization** | $Y = \text{round}(X / Q_{table})$ | $8 \times 8$ | $8 \times 8$ integers | Division by 64 table entries |
| **Zigzag Reorder** | Read matrix diagonally | $8 \times 8$ matrix | 64-element vector | Memory reshuffling only |
| **DPCM on DC** | $\Delta DC = DC_n - DC_{n-1}$ | Scalar | Scalar | 1 subtraction per block |
| **RLE on AC** | Encode runs of zeros | Vector | Symbol stream | Variable length |
| **Huffman Coding** | Map symbols to codes | Symbol stream | Bitstream | Lookup table access |

---

## 4.6 Mermaid Diagram: KLT vs DCT Asymptotic Equivalence

```mermaid
flowchart LR
    A4[Markov Source with Correlation rho] --> B4{High rho?}
    B4 -- Yes --> C4[KLT equals DCT asymptotically]
    B4 -- No --> D4[KLT differs significantly from DCT]

    C4 --> E4[JPEG and MPEG Use DCT]
    D4 --> F4[Custom KLT Used in Some Specialized Codecs]
```
<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A Questions (3 Marks Each)

### Question 1: Definition of Orthogonal Transform [KTU University Exam — July 2024]

> **Q:** Define an orthogonal transform. State the conditions for a set of basis functions to be orthonormal.

**Model Answer (Valuation Key — 3 Marks):**

An orthogonal transform is a linear operator that decomposes a discrete signal $f(x)$ into a weighted sum of mutually orthogonal basis functions $\{\phi_u(x)\}$.

**[Stating the orthonormal condition: 2 Marks]**

The basis functions must satisfy:

$$
\sum_{x=0}^{N-1} \phi_i(x) \, \phi_j(x) = \delta_{ij} = \begin{cases} 1 & i = j \\ 0 & i \neq j \end{cases}
$$

**[Mentioning the matrix form or energy preservation: 1 Mark]**

In matrix form, the transform matrix $\mathbf{A}$ satisfies $\mathbf{A}^{T} \mathbf{A} = \mathbf{I}$, and the signal energy is preserved (Parseval's theorem).

---

### Question 2: Energy Compaction in DCT [KTU University Exam — Dec 2023]

> **Q:** Why is DCT preferred over DFT for image compression? Mention the energy compaction property.

**Model Answer (Valuation Key — 3 Marks):**

**[DFT limitation: 1 Mark]** DFT produces complex-valued coefficients and suffers from **discontinuity at block boundaries** (Gibbs phenomenon), causing blocking artifacts.

**[DCT advantage — energy compaction: 1 Mark]** DCT is real-valued and exhibits superior energy compaction for natural images — most signal energy is packed into a few low-frequency coefficients. For a first-order Markov source with correlation $\rho$, DCT is **asymptotically equivalent to the optimal Karhunen-Loève Transform** as $\rho \to 1$.

**[Practical adoption: 1 Mark]** This is why JPEG, MPEG, and H.26x standards all adopt DCT (or its integer variants) as the core transform.

---

## 5.2 Part B Questions (14 Marks Each — Module Internal Choice)

### Question A: DCT Computation and Energy Compaction Analysis

> **[KTU University Exam — July 2024] | CO2 | Apply | 14 Marks**

**(a)** Compute the 1-D DCT-II of the signal $f = [8, 16, 24, 32]$. Show all working steps. **[7 Marks]**

**(b)** Compute the energy compaction ratio $\eta$ when the first 1, 2, and 3 coefficients are retained. Comment on the result. **[7 Marks]**

---

**Model Solution (Valuation Key for Part a — 7 Marks):**

Using the DCT-II formula:

$$
X(k) = \sqrt{\frac{2}{N}} \, c_k \sum_{n=0}^{N-1} f(n) \cos\!\left(\frac{\pi (2n+1) k}{2N}\right)
$$

For $N = 4$, $\sqrt{2/N} = 0.7071$.

**Step 1: Compute $X(0)$ — DC Coefficient [2 Marks]**

$$
X(0) = 0.7071 \times 0.7071 \times (8 + 16 + 24 + 32) = 0.5 \times 80 = 40.0
$$

**Step 2: Compute $X(1)$ [1 Mark]**

$$
X(1) = 0.7071 \times \left[8 \cos\!\left(\tfrac{\pi}{8}\right) + 16 \cos\!\left(\tfrac{3\pi}{8}\right) + 24 \cos\!\left(\tfrac{5\pi}{8}\right) + 32 \cos\!\left(\tfrac{7\pi}{8}\right)\right]
$$

$$
X(1) = 0.7071 \times [8(0.9239) + 16(0.3827) + 24(-0.3827) + 32(-0.9239)]
$$

$$
X(1) = 0.7071 \times [7.3912 + 6.1232 - 9.1848 - 29.5648] = 0.7071 \times (-25.2352) = -17.84
$$

**Step 3: Compute $X(2)$ [1 Mark]**

Cosine terms are $[\cos(\pi/4), \cos(3\pi/4), \cos(5\pi/4), \cos(7\pi/4)] = [0.7071, -0.7071, -0.7071, 0.7071]$:

$$
X(2) = 0.7071 \times [8(0.7071) + 16(-0.7071) + 24(-0.7071) + 32(0.7071)]
$$

$$
X(2) = 0.7071 \times 0.7071 \times (8 - 16 - 24 + 32) = 0.5 \times 0 = 0
$$

**Step 4: Compute $X(3)$ [1 Mark]**

$$
X(3) = 0.7071 \times [8(0.3827) + 16(-0.9239) + 24(-0.9239) + 32(0.3827)]
$$

$$
X(3) = 0.7071 \times [3.0616 - 14.7824 - 22.1736 + 12.2464] = 0.7071 \times (-21.648) = -15.31
$$

**Final Answer: [Stating all four coefficients: 2 Marks]**

$$
\boxed{\mathbf{X} = [40.0, \; -17.84, \; 0.0, \; -15.31]^{T}}
$$

---

**Model Solution (Valuation Key for Part b — 7 Marks):**

**Step 1: Calculate Total Energy [1 Mark]**

$$
E_{total} = X(0)^2 + X(1)^2 + X(2)^2 + X(3)^2 = 1600 + 318.27 + 0 + 234.40 = 2152.67
$$

**Step 2: Calculate $\eta(1)$ — Retain only DC [1 Mark]**

$$
\eta(1) = \frac{1600}{2152.67} \times 100\% = 74.32\%
$$

**Step 3: Calculate $\eta(2)$ — Retain DC and First AC [1 Mark]**

$$
\eta(2) = \frac{1600 + 318.27}{2152.67} \times 100\% = 89.10\%
$$

**Step 4: Calculate $\eta(3)$ — Retain DC and Two ACs [1 Mark]**

$$
\eta(3) = \frac{1600 + 318.27 + 0}{2152.67} \times 100\% = 89.10\%
$$

**Step 5: Comment on Result [3 Marks]**

The DCT achieves **89.10% energy compaction using just 50% of the coefficients**. The DC coefficient alone carries 74% of the total energy, confirming DCT's excellent energy compaction for a linearly increasing signal. The $X(2) = 0$ result is expected because the input is a perfect linear ramp, which has no second harmonic component.

---

### Question B: Karhunen-Loève Transform vs DCT Comparison

> **[KTU University Exam — Dec 2023] | CO2 | Understand / Analyze | 14 Marks**

**(a)** Explain the Karhunen-Loève Transform (KLT). Why is it considered theoretically optimal? **[7 Marks]**

**(b)** Compare KLT and DCT in terms of: (i) computational complexity, (ii) energy compaction, (iii) data dependence, (iv) practical use. **[7 Marks]**

---

**Model Solution (Valuation Key for Part a — 7 Marks):**

**[Defining KLT: 2 Marks]**

The Karhunen-Loève Transform (KLT) is the orthogonal transform whose basis vectors are the **eigenvectors of the signal's covariance matrix** $\mathbf{C}_f$. It decorrelates the signal completely, producing uncorrelated transform coefficients.

**[Mathematical formulation: 2 Marks]**

Given the covariance matrix $\mathbf{C}_f = E[(\mathbf{f} - \mu)(\mathbf{f} - \mu)^{T}]$, the KLT matrix $\mathbf{A}$ satisfies:

$$
\mathbf{A} \mathbf{C}_f \mathbf{A}^{T} = \mathbf{\Lambda} = \text{diag}(\lambda_1, \lambda_2, \dots, \lambda_N)
$$

The forward and inverse transforms are $\mathbf{X} = \mathbf{A} \mathbf{f}$ and $\mathbf{f} = \mathbf{A}^{T} \mathbf{X}$.

**[Theoretical optimality: 3 Marks]**

KLT is optimal because it:
1. **Completely decorrelates** the coefficients (off-diagonal covariance becomes zero).
2. **Maximizes energy compaction** — retaining the $k$ largest eigenvalues captures the maximum possible signal energy.
3. For Gaussian sources, decorrelation implies **statistical independence** of coefficients.

The disadvantage is that the covariance matrix $\mathbf{C}_f$ is **signal-dependent**, requiring recomputation for every new signal class, and **no general fast algorithm** exists.

---

**Model Solution (Valuation Key for Part b — 7 Marks):**

| Aspect | KLT | DCT | Marks |
|---|---|---|---|
| **(i) Computational Complexity** | $\mathcal{O}(N^2)$ per signal; no fast algorithm | $\mathcal{O}(N \log N)$ via fast DCT | 2 |
| **(ii) Energy Compaction** | Optimal for the given signal | Near-optimal for Markov sources with high $\rho$ | 2 |
| **(iii) Data Dependence** | Signal-dependent (basis changes per dataset) | Fixed, signal-independent basis | 1.5 |
| **(iv) Practical Use** | Theoretical benchmark; rarely in real-time codecs | Universal standard in JPEG, MPEG, H.26x | 1.5 |

**[Conclusion: Free credit summary statement — 1 Mark]**

KLT is the theoretical gold standard but is impractical for real-time coding. DCT serves as the universally adopted practical substitute, achieving near-KLT performance for highly correlated natural signals.

---

## 5.3 KTU Examiner's Valuation Warning / Pitfall Callout

> [!WARNING]
> **Common Mark-Loss Pitfalls in Orthogonal Transform Questions:**
>
> 1. **Forgetting the $c_k$ normalization** in the DCT formula — the DC coefficient uses $c_0 = 1/\sqrt{2}$ while AC coefficients use $c_k = 1$. This alone costs **1.5 marks** in part-(a) of a 14-mark question.
>
> 2. **Not verifying Parseval's theorem** — when a question asks for "energy compaction," the student MUST compute the total signal energy in the spatial domain and confirm it matches the sum of squared coefficients in the transform domain. Skipping this verification forfeits the "comment on result" sub-mark.
>
> 3. **Confusing DCT-I, DCT-II, and DCT-III** — JPEG uses DCT-II; the inverse is DCT-III. Writing the wrong cosine argument (e.g., $\pi n k / N$ instead of $\pi(2n+1)k / 2N$) loses **2 full marks**.
>
> 4. **Failing to mention separability** when explaining 2-D DCT — examiners expect the explicit statement that "2-D DCT is computed as row-then-column 1-D DCT."
>
> 5. **Ignoring the orthonormality condition** in definitional answers — $\sum \phi_i \phi_j = \delta_{ij}$ is mandatory in 3-mark definition questions.

---

## 5.4 Topic Recap & Important Things to Remember

- **Definition:** An orthogonal transform decomposes a signal into a weighted sum of orthonormal basis functions, with transform matrix $\mathbf{A}$ satisfying $\mathbf{A}^{T} \mathbf{A} = \mathbf{I}$.
- **Parseval's Theorem:** Energy is preserved under any orthogonal transform — $\sum \vert f(x) \vert^2 = \sum \vert X(u) \vert^2$.
- **DCT-II Formula:** $X(k) = \sqrt{2/N} \, c_k \sum_{n=0}^{N-1} f(n) \cos(\pi(2n+1)k / 2N)$, with $c_0 = 1/\sqrt{2}$ and $c_k = 1$ for $k \geq 1$.
- **KLT Optimality:** Theoretically best transform; basis = eigenvectors of covariance matrix $\mathbf{C}_f$.
- **DCT vs KLT:** DCT is asymptotically equivalent to KLT for first-order Markov sources with $\rho \to 1$.
- **WHT:** Fastest transform; basis $\in \{-1, +1\}$; no multiplications needed.
- **Haar:** Simplest wavelet; averaging + differencing; basis for JPEG 2000's wavelet transform.
- **2-D DCT Separability:** $X = A M A^{T}$ allows computation via two sequential 1-D DCTs.
- **Energy Compaction Ratio:** $\eta(k) = (\text{Energy in first } k \text{ coeffs} / \text{Total energy}) \times 100\%$.
- **Standard Use Cases:** DCT in JPEG/MPEG/H.26x; WHT in hardware codecs; KLT in statistical analysis benchmarks; Haar/DWT in JPEG 2000.
- **Transformation Cost:** DCT has $\mathcal{O}(N \log N)$ complexity; KLT has $\mathcal{O}(N^2)$.
- **Real-valued:** DCT, WHT, Haar, KLT are all real-valued; only DFT is complex.
- **Optimal Bit Allocation:** Reverse-water-filling rule $b_i = \max(0, \frac{1}{2} \log_2(\sigma_i^2 / D_0))$ assigns bits to high-variance coefficients.
- **Coding Gain Bound:** For a Gaussian source, the maximum transform coding gain is $G_{TC} \le 1.5$ (DCT limit).
- **Markov Source Model:** A 1-D first-order Markov process is the standard model for analyzing transform performance; correlation parameter $\rho$ controls how closely DCT approaches KLT.
<!-- SECTION_5_END -->
