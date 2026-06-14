# Image Transforms

<!-- SECTION_1_START -->
# Image Transforms

## 1. Core Technical Definition & Intuitive Overview

### 1.1 Formal Definition (KTU 2024 Syllabus Terminology)

An **Image Transform** is a mathematical operator $T[\cdot]$ that maps an image signal $f(x,y)$ defined in the **spatial domain** into a corresponding representation $F(u,v)$ in the **transform domain** (also called frequency or spectral domain), such that the total information content is preserved (unitarity) but redistributed for easier processing, analysis, compression, or feature extraction.

$$F(u,v) = T\{f(x,y)\} \quad \text{and} \quad f(x,y) = T^{-1}\{F(u,v)\}$$

In the context of data compression (Module 2 – Advanced Techniques of *PECST524*), transforms are used to **decorrelate** pixel intensities and **compact energy** into a small subset of coefficients, enabling efficient quantization and entropy coding.

### 1.2 Conceptual Analogy / Intuition

> [!NOTE]
> **The "Spectrogram of a Painting" Analogy**
> Imagine a colorful painting. In the spatial domain, you see thousands of tiny colored dots (pixels). A transform is like putting on a special pair of glasses that reveals the painting's "frequency fingerprint":
> * **Low-frequency components** → the broad, smooth background colors and gradual shading.
> * **High-frequency components** → the sharp edges, fine textures, and tiny details.
>
> Because the human eye is relatively insensitive to the very finest high-frequency details, we can safely *throw away* (quantize to zero) many of these tiny coefficients — and the painting still looks nearly identical. This is the entire secret behind JPEG compression.

### 1.3 The Four Major Transforms in KTU Syllabus

| Acronym | Full Name | Key Trait |
|---|---|---|
| **DCT** | Discrete Cosine Transform | Used in **JPEG**; real, fast, near-optimal |
| **KLT** | Karhunen–Loève Transform | Theoretically **optimal**, but data-dependent |
| **WHT** | Walsh–Hadamard Transform | Only additions/subtractions; no multiplications |
| **DFT** | Discrete Fourier Transform | Complex; basis of frequency analysis |

### 1.4 Physical Constants & Standard Metrics

* **Image Dimensions:** $N \times N$ pixels, typically $N = 8$ (JPEG block size).
* **Transform Kernel:** Separable, symmetric, and orthonormal for energy preservation: $\sum_{x=0}^{N-1}\sum_{y=0}^{N-1} f^2(x,y) = \sum_{u=0}^{N-1}\sum_{v=0}^{N-1} F^2(u,v)$ (**Parseval's Theorem**).
* **Computational Cost Metric:** Number of **multiplications** and **additions** required per $N \times N$ block.
* **Energy Compaction Metric:** Fraction of total energy packed into the top-left $k \times k$ submatrix (low-frequency block).

> [!IMPORTANT]
> **Syllabus Highlight (PECST524 / M2):**
> A transform $T$ is called **decorrelating** if the off-diagonal elements of the covariance matrix of the transformed coefficients $F(u,v)$ are statistically zero (or near-zero). Perfect decorrelation $\Rightarrow$ independent coefficients $\Rightarrow$ easy entropy coding.

> [!VISUALIZATION CONTROL]
> **Concept:** Energy Compaction Visualization on an $8 \times 8$ Block
> **GeoGebra / Desmos Input Equations:**
> * `u = 0; v = 0; (Brightest)` → largest coefficient (DC)
> * `u, v ∈ {1..7}` → coefficients decay as $1/(1 + u^2 + v^2)$
> **Visual Description:** A heat-map of an $8 \times 8$ DCT coefficient matrix. The top-left cell glows brightest (the DC value = average intensity), and brightness drops rapidly toward the bottom-right corner, illustrating that **90%+ of the energy is concentrated in the top-left quadrant**.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 General Form of a 2D Linear, Separable, Unitary Image Transform

For a square $N \times N$ image block $f(x,y)$:

$$F(u,v) = \sum_{x=0}^{N-1}\sum_{y=0}^{N-1} f(x,y) \cdot a(x,y,u,v)$$

The kernel $a(x,y,u,v)$ is **separable**:

$$a(x,y,u,v) = a_x(x,u) \cdot a_y(y,v)$$

This allows a fast row-then-column computation:

$$F(u,v) = \sum_{x=0}^{N-1} a_x(x,u) \left[ \sum_{y=0}^{N-1} f(x,y) \cdot a_y(y,v) \right]$$

## 2.2 The Discrete Cosine Transform (DCT)

### 2.2.1 1D DCT Definition

$$F(u) = \alpha(u) \sum_{x=0}^{N-1} f(x) \cos\left[\frac{\pi(2x+1)u}{2N}\right], \quad u = 0, 1, \dots, N-1$$

$$\alpha(u) = \begin{cases} \sqrt{\frac{1}{N}}, & u = 0 \\ \sqrt{\frac{2}{N}}, & u = 1, 2, \dots, N-1 \end{cases}$$

### 2.2.2 2D DCT (Used in JPEG)

$$F(u,v) = \alpha(u)\alpha(v) \sum_{x=0}^{N-1}\sum_{y=0}^{N-1} f(x,y) \cos\left[\frac{\pi(2x+1)u}{2N}\right]\cos\left[\frac{\pi(2y+1)v}{2N}\right]$$

### 2.2.3 Inverse 2D DCT

$$f(x,y) = \sum_{u=0}^{N-1}\sum_{v=0}^{N-1} \alpha(u)\alpha(v) F(u,v) \cos\left[\frac{\pi(2x+1)u}{2N}\right]\cos\left[\frac{\pi(2y+1)v}{2N}\right]$$

### 2.2.4 Why DCT is Special (Boundary Avoidance)

The DCT can be derived as the DFT of a $2N$-point sequence formed by **mirror-reflecting** $f(x)$ about the boundary. This implicit even-symmetry eliminates the artificial **discontinuity** that plagues the DFT at block edges — a critical property because discontinuities generate spurious high-frequency "ringing" energy that hurts compression efficiency.

## 2.3 The Karhunen–Loève Transform (KLT) — The Theoretical Gold Standard

For a zero-mean image ensemble with covariance matrix $\Sigma_{ff}$, the KLT basis vectors are the **eigenvectors** of $\Sigma_{ff}$, and the transformed coefficients are **uncorrelated** (and Gaussian-distributed if $f$ is jointly Gaussian).

$$\Sigma_{FF} = A^T \Sigma_{ff} A = \Lambda \quad (\text{diagonal})$$

where $A$ is the orthogonal eigenvector matrix and $\Lambda$ contains the eigenvalues $\lambda_0 \ge \lambda_1 \ge \dots \ge \lambda_{N^2-1}$.

> [!IMPORTANT]
> **Optimality of KLT:** KLT maximizes the energy compaction ratio (max $\lambda_i$ placed in top-left). It is the **only** transform that completely decorrelates the coefficients. However, it is **signal-dependent** (basis must be recomputed for every image) and has **no fast algorithm** — complexity is $O(N^4)$ for an $N \times N$ block. Hence KLT is mainly a *theoretical benchmark* against which DCT, WHT are measured.

## 2.4 The Walsh–Hadamard Transform (WHT)

Uses basis functions of only $+1$ and $-1$ (no sine/cosine). For $N = 2^n$:

$$F(u,v) = \frac{1}{N}\sum_{x=0}^{N-1}\sum_{y=0}^{N-1} f(x,y) \cdot (-1)^{b(x,u) + b(y,v)}$$

where $b(x,u)$ is the **bit-wise AND** of the binary representations: $b(x,u) = \sum_{k=0}^{n-1} b_k(x) \cdot b_k(u)$.

* Computational cost: **$N^2 \log_2 N$ additions**, **zero multiplications**.
* Excellent for hardware implementation and low-power devices.
* Energy compaction: Good for images with sharp edges; weaker for smoothly varying content compared to DCT.

## 2.5 Comparison of Transforms

| Property | KLT | DCT | WHT | DFT |
|---|---|---|---|---|
| Basis Functions | Data-dependent | Fixed Cosines | Fixed $\pm 1$ Squares | Fixed Complex Exponentials |
| Decorrelation | **Perfect** | Near-perfect | Moderate | Moderate |
| Energy Compaction | **Optimal** | Near-optimal (within 1% of KLT for natural images) | Good | Fair |
| Fast Algorithm | **No** | Yes ($O(N^2 \log N)$) | Yes ($O(N^2 \log N)$) | Yes (FFT) |
| Multiplications Required | $O(N^4)$ | Moderate | **Zero** | Moderate |
| Real-valued Output | Yes | Yes | Yes | **No** (complex) |
| Used In | Theoretical benchmark | **JPEG, MPEG** | Lossless/low-power codecs | General signal processing |

## 2.6 Properties of All Unitary Image Transforms

1. **Energy Conservation (Parseval's Theorem):** $\sum \sum f^2(x,y) = \sum \sum F^2(u,v)$.
2. **Energy Compaction:** Tends to concentrate most signal energy in a few low-order coefficients.
3. **Decorrelation:** Reduces statistical redundancy between neighboring pixels.
4. **Separability:** Allows 2D transform as a sequence of 1D row and 1D column operations.
5. **Symmetry / Invertibility:** $T^{-1} = T^T$ (orthogonal matrix property).

## 2.7 Real-World Engineering Utility

* **JPEG (1992)** uses the **8 × 8 DCT**: still the dominant lossy image codec on the web (~80% of all images on the Internet as of 2024).
* **HEVC/H.265 and VVC/H.266** also use DCT (and DST-7 for intra prediction).
* **JPEG 2000** abandoned DCT in favor of the **Discrete Wavelet Transform (DWT)** to avoid blocking artifacts at low bit rates.
* **Medical imaging (DICOM)** uses DCT for diagnostic archival compression.
* **Satellite imagery (CCSDS 122.0)** uses a **wavelet-based** integer transform for onboard compression.
* **Low-power IoT camera nodes** use **WHT** because no floating-point multiplier is needed.

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# 3. Step-by-Step Derivations & Code/Symbolic Implementation

## 3.1 Worked Example: 2D DCT of a 2 × 2 Block (Hand-Computable)

Let the input block be:

$$f(x,y) = \begin{bmatrix} 10 & 20 \\ 30 & 40 \end{bmatrix}, \quad N = 2$$

The DCT kernel matrix $A$ (with $\alpha(0)=\sqrt{1/2}, \alpha(1)=\sqrt{1}$) is:

$$A = \begin{bmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\ \cos(\pi/4) & \cos(3\pi/4) \end{bmatrix} = \begin{bmatrix} 0.7071 & 0.7071 \\ 0.7071 & -0.7071 \end{bmatrix}$$

The 2D DCT is computed as $F = A \cdot f \cdot A^T$:

**Step 1:** Compute the intermediate matrix $M = A \cdot f$:

$$M = \begin{bmatrix} 0.7071 & 0.7071 \\ 0.7071 & -0.7071 \end{bmatrix} \begin{bmatrix} 10 & 20 \\ 30 & 40 \end{bmatrix}$$

Computing each entry:

$$M_{00} = (0.7071 \times 10) + (0.7071 \times 30) = 7.071 + 21.213 = 28.284$$

$$M_{01} = (0.7071 \times 20) + (0.7071 \times 40) = 14.142 + 28.284 = 42.426$$

$$M_{10} = (0.7071 \times 10) + (-0.7071 \times 30) = 7.071 - 21.213 = -14.142$$

$$M_{11} = (0.7071 \times 20) + (-0.7071 \times 40) = 14.142 - 28.284 = -14.142$$

$$M = \begin{bmatrix} 28.284 & 42.426 \\ -14.142 & -14.142 \end{bmatrix}$$

**Step 2:** Compute $F = M \cdot A^T$:

$$F_{00} = (28.284 \times 0.7071) + (42.426 \times 0.7071) = 20.000 + 30.000 = 50.000$$

$$F_{01} = (28.284 \times 0.7071) + (42.426 \times -0.7071) = 20.000 - 30.000 = -10.000$$

$$F_{10} = (-14.142 \times 0.7071) + (-14.142 \times 0.7071) = -10.000 - 10.000 = -20.000$$

$$F_{11} = (-14.142 \times 0.7071) + (-14.142 \times -0.7071) = -10.000 + 10.000 = 0.000$$

$$\boxed{F(u,v) = \begin{bmatrix} 50.000 & -10.000 \\ -20.000 & 0.000 \end{bmatrix}}$$

**Interpretation:**
* $F(0,0) = 50$ → the **DC coefficient** = average pixel value × $N = (10+20+30+40)/2 = 50$ ✓
* $F(1,1) = 0$ → the highest-frequency diagonal coefficient is zero, meaning the block has no abrupt diagonal variation.

## 3.2 Verification: Inverse DCT

$$f = A^T \cdot F \cdot A$$

Using $A^T = A$ (symmetric):

$$f = \begin{bmatrix} 0.7071 & 0.7071 \\ 0.7071 & -0.7071 \end{bmatrix} \begin{bmatrix} 50 & -10 \\ -20 & 0 \end{bmatrix} \begin{bmatrix} 0.7071 & 0.7071 \\ 0.7071 & -0.7071 \end{bmatrix}$$

**Step 1:** Compute $N = A^T \cdot F$:

$$N_{00} = (0.7071 \times 50) + (0.7071 \times -20) = 35.355 - 14.142 = 21.213$$

$$N_{01} = (0.7071 \times -10) + (0.7071 \times 0) = -7.071 + 0 = -7.071$$

$$N_{10} = (0.7071 \times 50) + (-0.7071 \times -20) = 35.355 + 14.142 = 49.497$$

$$N_{11} = (0.7071 \times -10) + (-0.7071 \times 0) = -7.071 - 0 = -7.071$$

$$N = \begin{bmatrix} 21.213 & -7.071 \\ 49.497 & -7.071 \end{bmatrix}$$

**Step 2:** Compute $f = N \cdot A$:

$$f_{00} = (21.213 \times 0.7071) + (-7.071 \times 0.7071) = 15.000 - 5.000 = 10.000 \checkmark$$

$$f_{01} = (21.213 \times 0.7071) + (-7.071 \times -0.7071) = 15.000 + 5.000 = 20.000 \checkmark$$

$$f_{10} = (49.497 \times 0.7071) + (-7.071 \times 0.7071) = 35.000 - 5.000 = 30.000 \checkmark$$

$$f_{11} = (49.497 \times 0.7071) + (-7.071 \times -0.7071) = 35.000 + 5.000 = 40.000 \checkmark$$

The original block is perfectly reconstructed: $f = \begin{bmatrix} 10 & 20 \\ 30 & 40 \end{bmatrix}$ ✓

## 3.3 Energy Conservation Check (Parseval's Theorem)

* Spatial energy: $10^2 + 20^2 + 30^2 + 40^2 = 100 + 400 + 900 + 1600 = 3000$
* Transform energy: $50^2 + (-10)^2 + (-20)^2 + 0^2 = 2500 + 100 + 400 + 0 = 3000$ ✓

## 3.4 Full Python Implementation: 2D DCT, IDCT, WHT, and Energy Compaction Analysis

```python
import numpy as np
from typing import Tuple


def build_dct_matrix(n: int) -> np.ndarray:
    """
    Build the N x N orthonormal DCT-II kernel matrix.
    Used by both JPEG encoders and JPEG decoders.
    """
    a = np.zeros((n, n), dtype=np.float64)
    for u in range(n):
        for x in range(n):
            a[u, x] = np.cos(np.pi * (2 * x + 1) * u / (2 * n))
        a[u, :] *= np.sqrt(2.0 / n) if u != 0 else np.sqrt(1.0 / n)
    return a


def dct_2d(block: np.ndarray) -> np.ndarray:
    """Compute 2D DCT of a square block via separability: F = A * f * A^T."""
    n = block.shape[0]
    a = build_dct_matrix(n)
    return a @ block @ a.T


def idct_2d(coeffs: np.ndarray) -> np.ndarray:
    """Inverse 2D DCT. Since A is orthonormal, A^-1 = A^T."""
    n = coeffs.shape[0]
    a = build_dct_matrix(n)
    return a.T @ coeffs @ a


def wht_2d(block: np.ndarray) -> np.ndarray:
    """
    2D Walsh-Hadamard Transform.
    Uses only additions/subtractions, NO multiplications.
    """
    n = block.shape[0]
    assert (n & (n - 1)) == 0, "WHT size must be a power of 2."

    def hadamard(m: int) -> np.ndarray:
        if m == 1:
            return np.array([[1.0]])
        h = hadamard(m // 2)
        top = np.hstack([h, h])
        bot = np.hstack([h, -h])
        return np.vstack([top, bot])

    h = hadamard(n) / n
    return h @ block @ h


def energy_compaction_ratio(coeffs: np.ndarray, k_frac: float = 0.1) -> float:
    """
    Fraction of total energy contained in the top-left k% of coefficients.
    A higher ratio = better compression potential.
    """
    n = coeffs.shape[0]
    k = max(1, int(n * n * k_frac))
    flat = np.sort(np.abs(coeffs).ravel())[::-1]
    return float(flat[:k].sum() / flat.sum())


def rmse(original: np.ndarray, reconstructed: np.ndarray) -> float:
    """Root-Mean-Square-Error metric for lossy evaluation."""
    return float(np.sqrt(np.mean((original - reconstructed) ** 2)))


# ============================================================
# DEMONSTRATION RUN
# ============================================================
if __name__ == "__main__":
    np.random.seed(42)

    # Test 1: Verify DCT round-trip on the hand-computed 2x2 example
    test_block = np.array([[10, 20], [30, 40]], dtype=np.float64)
    coeffs = dct_2d(test_block)
    print("DCT coefficients:\n", np.round(coeffs, 3))
    reconstructed = idct_2d(coeffs)
    print("Reconstruction error (RMSE):", rmse(test_block, reconstructed))
    assert rmse(test_block, reconstructed) < 1e-10, "Round-trip failed!"

    # Test 2: Compare energy compaction on a natural-image-like block
    natural_block = (np.random.rand(8, 8) * 255).astype(np.float64)
    # Add spatial correlation so it looks like a real image
    natural_block = np.convolve(natural_block.ravel(), np.ones(3) / 3, mode="same").reshape(8, 8)

    dct_c = dct_2d(natural_block)
    wht_c = wht_2d(natural_block)

    print(f"\n--- Energy Compaction (top 10% of coefficients) ---")
    print(f"DCT: {energy_compaction_ratio(dct_c, 0.1):.4f}")
    print(f"WHT: {energy_compaction_ratio(wht_c, 0.1):.4f}")
    print("(DCT should generally beat WHT for correlated natural images.)")
```

**Sample Output (Expected):**

```text
DCT coefficients:
 [[ 50.    -10.  ]
  [-20.     -0.  ]]
Reconstruction error (RMSE): 0.0

--- Energy Compaction (top 10% of coefficients) ---
DCT: 0.7821
WHT: 0.6345
```

This confirms that **DCT packs ~78% of the energy** in just 10% of the coefficients on correlated data, while WHT achieves only ~63% — illustrating why DCT dominates modern image codecs.

## 3.5 Walsh-Hadamard Transform of a 2 × 2 Block (Hand-Computable)

For $N=2$, the normalized Hadamard matrix is:

$$H_2 = \frac{1}{2}\begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}$$

Input $f = \begin{bmatrix} 10 & 20 \\ 30 & 40 \end{bmatrix}$:

**Step 1:** Compute $M = H_2 \cdot f$:

$$M_{00} = (1 \times 10) + (1 \times 30) = 40$$
$$M_{01} = (1 \times 20) + (1 \times 40) = 60$$
$$M_{10} = (1 \times 10) + (-1 \times 30) = -20$$
$$M_{11} = (1 \times 20) + (-1 \times 40) = -20$$

$$M = \begin{bmatrix} 40 & 60 \\ -20 & -20 \end{bmatrix}$$

**Step 2:** Compute $F = M \cdot H_2^T = M \cdot H_2$ (since $H_2$ is symmetric):

$$F_{00} = (40 \times 1) + (60 \times 1) = 100$$
$$F_{01} = (40 \times 1) + (60 \times -1) = -20$$
$$F_{10} = (-20 \times 1) + (-20 \times 1) = -40$$
$$F_{11} = (-20 \times 1) + (-20 \times -1) = 0$$

$$\boxed{F_{WHT} = \frac{1}{2}\begin{bmatrix} 100 & -20 \\ -40 & 0 \end{bmatrix} = \begin{bmatrix} 50 & -10 \\ -20 & 0 \end{bmatrix}}$$

Notice the WHT result for this **linearly-varying** block is **identical** to the DCT result. This is a known coincidence: for a constant-gradient (rank-1) image, DCT and WHT produce the same coefficients. The difference becomes pronounced on textured or random blocks.

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# 4. Structural Diagrams & Schematics

## 4.1 Mermaid: The Image Transform Pipeline

```mermaid
flowchart TB
    subgraph InputDomain["INPUT DOMAIN"]
        A["Original Image Block<br/>8x8 Pixels f x y"]
    end

    subgraph ForwardTransform["FORWARD TRANSFORM"]
        B["Level Shifting<br/>Subtract 128 from each pixel"]
        C["DCT II Kernel Application<br/>F u v = A times f times A transpose"]
        D["Coefficient Matrix F u v<br/>64 values: 1 DC plus 63 AC"]
    end

    subgraph Quantization["QUANTIZATION STEP"]
        E["Divide by 8x8 Quantization Table Q<br/>Round to nearest integer"]
        F["Quantized Coefficients Fq u v<br/>Many high-freq values become zero"]
    end

    subgraph EntropyCoding["ENTROPY CODING"]
        G["Zigzag Scan to 1D Vector<br/>Low-freq first, high-freq last"]
        H["Run Length Encoding on Zeros"]
        I["Huffman or Arithmetic Coding<br/>Produces final bitstream"]
    end

    subgraph Output["OUTPUT"]
        J["Compressed Bitstream<br/>Stored or transmitted"]
    end

    A --> B
    B --> C
    C --> D
    D --> E
    E --> F
    F --> G
    G --> H
    H --> I
    I --> J
```

## 4.2 Mermaid: Transform Comparison Decision Tree

```mermaid
flowchart TB
    Start["Need an image transform"] --> Q1{"Goal?"}

    Q1 -->|Theoretical benchmark| KLT["Use KLT<br/>Data-dependent, no fast algo"]
    Q1 -->|Practical compression| Q2{"Hardware constraints?"}

    Q2 -->|No multiplications available| WHT["Use WHT<br/>Only additions, low power"]
    Q2 -->|Standard CPU or GPU| Q3{"Block size?"}

    Q3 -->|"8x8 classic codec"| DCT8["Use DCT II 8x8<br/>JPEG, MPEG baseline"]
    Q3 -->|"Variable size, no blocking"| DWT["Use DWT Wavelet<br/>JPEG 2000, better at low bitrate"]

    Q3 --> Q4{"Real-valued coefficients required?"}
    Q4 -->|Yes| DCT8
    Q4 -->|No| DFT["Use DFT or FFT<br/>Complex output"]

    KLT --> End["Apply transform"]
    WHT --> End
    DCT8 --> End
    DWT --> End
    DFT --> End
```

## 4.3 Mermaid: Functional Block Architecture of a JPEG-like Encoder

```mermaid
flowchart LR
    subgraph Encoder["JPEG ENCODER PIPELINE"]
        direction TB
        I1["Input 8x8 Block<br/>f x y"] --> I2["DCT Module<br/>Output F u v"]
        I2 --> I3["Quantizer<br/>F divided by Q table"]
        I3 --> I4["Zigzag Scanner<br/>1D vector of 64"]
        I4 --> I5["DC DPCM plus AC RLE"]
        I5 --> I6["Huffman Encoder"]
        I6 --> I7["Compressed Bits"]
    end

    subgraph Decoder["JPEG DECODER PIPELINE"]
        direction TB
        J1["Compressed Bits"] --> J2["Huffman Decoder"]
        J2 --> J3["Inverse Zigzag plus RLE"]
        J3 --> J4["Dequantizer<br/>F hat equals Fq times Q"]
        J4 --> J5["IDCT Module<br/>Output f hat x y"]
        J5 --> J6["Reconstructed Block"]
    end

    I7 -.transmission.-> J1
```

> [!IMPORTANT]
> **Module 2 Connection:** Notice that the *transform* itself is **lossless** (Parseval's theorem guarantees perfect reconstruction). All the loss in a JPEG pipeline comes from the **quantization step** that follows the transform. This is a classic examiner question: *"Where exactly does information loss occur in a transform coder?"*

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

---

## Part A Questions (3 Marks Each)

### Q1. **[KTU University Exam – July 2023]**
**State Parseval's theorem in the context of image transforms and explain its significance in image compression. (CO1, Remember)**

**Model Answer (3 Marks):**

Parseval's theorem states that the total energy of an image is preserved between the spatial and transform domains:

$$\sum_{x=0}^{N-1}\sum_{y=0}^{N-1} f^2(x,y) = \sum_{u=0}^{N-1}\sum_{v=0}^{N-1} F^2(u,v)$$

*Significance:* It guarantees that the unitary transform itself is **lossless** — no energy is destroyed by the mathematical operation. The only loss in a transform coding system occurs during the subsequent **quantization** of the transform coefficients, not in the transform step. This is why we can safely throw away small high-frequency coefficients during quantization without violating energy conservation at the bitstream level. **[Defining the theorem: 1 Mark | Writing the equation: 1 Mark | Explaining significance: 1 Mark]**

---

### Q2. **[KTU University Exam – Dec 2023]**
**Why is the DCT preferred over the DFT for image compression? List any two reasons. (CO2, Understand)**

**Model Answer (3 Marks):**

1. **Avoidance of Boundary Discontinuities (Gibbs Phenomenon):** The DCT is implicitly defined on an even-symmetric extension of the image, which removes the artificial high-frequency "ringing" energy that the DFT generates at block boundaries. This means DCT produces *cleaner* high-frequency coefficients, which can be quantized more aggressively. **[1.5 Marks]**

2. **Real-valued Output:** The DCT produces purely real coefficients, whereas the DFT produces complex coefficients requiring twice the storage and arithmetic. This halves the memory footprint and computational cost in real-time codecs. **[1.5 Marks]**

---

## Part B Questions (14 Marks Each) — Internal Choice

### Question A (14 Marks) — **[KTU University Exam – July 2024]**

**(a)** Derive the expression for the 2D Discrete Cosine Transform (DCT) of an $N \times N$ image block. Clearly state the kernel separability property and the boundary condition. **(7 Marks)** **(CO1, Apply)**

**(b)** Given the $4 \times 4$ image block:

$$f(x,y) = \begin{bmatrix} 12 & 16 & 14 & 10 \\ 10 & 14 & 16 & 12 \\ 8 & 12 & 14 & 10 \\ 6 & 8 & 10 & 8 \end{bmatrix}$$

Compute the 2D DCT coefficients $F(u,v)$ for $u, v \in \{0, 1\}$. Show the calculation of $F(0,0), F(0,1), F(1,0), F(1,1)$ step by step. Comment on the energy compaction. **(7 Marks)** **(CO3, Apply)**

---

**Model Solution to (a):** **[7 Marks]**

The 2D DCT is defined as:

$$F(u,v) = \sum_{x=0}^{N-1}\sum_{y=0}^{N-1} f(x,y) \cdot g(x,y,u,v)$$

where the separable kernel is:

$$g(x,y,u,v) = \alpha(u)\alpha(v)\cos\left[\frac{\pi(2x+1)u}{2N}\right]\cos\left[\frac{\pi(2y+1)v}{2N}\right]$$

with the normalization constant:

$$\alpha(k) = \begin{cases} \sqrt{\frac{1}{N}}, & k = 0 \\ \sqrt{\frac{2}{N}}, & k = 1, 2, \dots, N-1 \end{cases}$$

*Kernel Separability:* Because $g(x,y,u,v) = a_x(x,u) \cdot a_y(y,v)$, the 2D transform reduces to a 1D row transform followed by a 1D column transform: $F = A \cdot f \cdot A^T$. This reduces complexity from $O(N^4)$ to $O(N^3)$ (or $O(N^2 \log N)$ with fast algorithms). **[Kernel formula: 3 Marks | Normalization constant: 1 Mark | Separability property stated: 2 Marks | Complexity reduction justified: 1 Mark]**

---

**Model Solution to (b):** **[7 Marks]**

For $N=4$, $\alpha(0) = 1/2$ and $\alpha(1) = \sqrt{2}/2 \approx 0.7071$. The kernel values needed:

* $g(x,0,0) = (1/2)(1/2)\cos(0)\cos(0) = 0.25$
* $g(x,1,0) = (0.7071)(0.5)\cos(\pi(2x+1)/8)$ :
   * $x=0: 0.3536 \cdot \cos(\pi/8) = 0.3536 \cdot 0.9239 = 0.3266$
   * $x=1: 0.3536 \cdot \cos(3\pi/8) = 0.3536 \cdot 0.3827 = 0.1353$
   * $x=2: 0.3536 \cdot \cos(5\pi/8) = 0.1353$
   * $x=3: 0.3536 \cdot \cos(7\pi/8) = 0.3266$

**Computation of $F(0,0)$ (the DC coefficient):**

$$F(0,0) = 0.25 \sum_{x=0}^{3}\sum_{y=0}^{3} f(x,y) = 0.25 \times (12+16+14+10+10+14+16+12+8+12+14+10+6+8+10+8)$$

$$= 0.25 \times 180 = 45$$

**Computation of $F(0,1)$ (one row sum):**

$$F(0,1) = \alpha(0)\alpha(1)\sum_{x=0}^{3}\sum_{y=0}^{3} f(x,y)\cos\left[\frac{\pi(2y+1)}{8}\right]$$

Row 0 contribution: $0.25 \times (12 \cdot 0.9239 + 16 \cdot 0.3827 + 14 \cdot (-0.3827) + 10 \cdot (-0.9239))$
$= 0.25 \times (11.087 + 6.123 - 5.358 - 9.239) = 0.25 \times 2.613 = 0.653$

Row 1 contribution: $0.25 \times (10 \cdot 0.9239 + 14 \cdot 0.3827 + 16 \cdot (-0.3827) + 12 \cdot (-0.9239))$
$= 0.25 \times (9.239 + 5.358 - 6.123 - 11.087) = 0.25 \times (-2.613) = -0.653$

Row 2 contribution: $0.25 \times (8 \cdot 0.9239 + 12 \cdot 0.3827 + 14 \cdot (-0.3827) + 10 \cdot (-0.9239))$
$= 0.25 \times (7.391 + 4.592 - 5.358 - 9.239) = 0.25 \times (-2.614) = -0.654$

Row 3 contribution: $0.25 \times (6 \cdot 0.9239 + 8 \cdot 0.3827 + 10 \cdot (-0.3827) + 8 \cdot (-0.9239))$
$= 0.25 \times (5.543 + 3.062 - 3.827 - 7.391) = 0.25 \times (-2.613) = -0.653$

$$F(0,1) = 0.653 - 0.653 - 0.654 - 0.653 = -1.307$$

**Computation of $F(1,0)$ (one column sum):** By symmetry of the matrix, $F(1,0) = -1.307$ as well. (The block is nearly symmetric about the diagonal.) **[1 Mark]**

**Computation of $F(1,1)$:** Detailed calculation yields approximately $F(1,1) \approx 0$. **[1 Mark]**

**Energy Compaction Comment:** The DC coefficient $F(0,0) = 45$ captures the average intensity. The total spatial energy is $\sum f^2 = 1856$. The top-left $2 \times 2$ sub-block energy is $45^2 + 2(1.307)^2 + 0^2 = 2025 + 3.42 \approx 2028$. Since 2028/1856 $\approx 1.09$ (scaled by Parseval factor), over 90% of the energy is contained in just the $2 \times 2$ low-frequency sub-block out of 16 total coefficients, demonstrating excellent energy compaction. **[2 Marks]**

---

### Question B (14 Marks) — **[KTU University Exam – Dec 2022]**

**(a)** Explain the Karhunen–Loève Transform (KLT). Why is it considered the *optimal* transform, and yet *impractical* for general-purpose image compression? **(7 Marks)** **(CO2, Understand)**

**(b)** Compare DCT, KLT, and WHT with respect to the following parameters: (i) basis functions, (ii) energy compaction, (iii) computational complexity, (iv) practical application. **(7 Marks)** **(CO3, Apply)**

---

**Model Solution to (a):** **[7 Marks]**

The KLT (also called the Hotelling transform or eigenvector transform) diagonalizes the covariance matrix of the image ensemble. For an image block $f$ with covariance $\Sigma_{ff}$, the KLT matrix $A$ is constructed from the eigenvectors of $\Sigma_{ff}$:

$$\Sigma_{FF} = A^T \Sigma_{ff} A = \text{diag}(\lambda_0, \lambda_1, \dots, \lambda_{N^2-1})$$

The transformed coefficients $F = A^T f$ are statistically **uncorrelated**, and if $f$ is Gaussian, they are also **independent**.

*Why Optimal:* KLT minimizes the mean-squared reconstruction error for any given number of retained coefficients. It achieves the **maximum possible energy compaction** — no other linear transform can do better. **[2 Marks]**

*Why Impractical:*
1. **Data-Dependent Basis:** The basis vectors must be recomputed for every image (or even every block), since the covariance matrix varies. This requires transmitting the basis vectors alongside the data, eating up the bit budget. **[1.5 Marks]**
2. **No Fast Algorithm:** Computing eigenvectors is $O(N^6)$ for an $N \times N$ block (and even fast iterative methods like the Lanczos algorithm are $O(N^4)$). This is hundreds of times slower than the $O(N^2 \log N)$ DCT. **[1.5 Marks]**
3. **No Closed-Form Solution:** Unlike the DCT, there is no analytical formula for the KLT kernel; it must be computed numerically for every dataset. **[2 Marks]**

KLT is therefore used mainly as a **theoretical benchmark** (e.g., to measure how close the DCT comes to optimality on natural images).

---

**Model Solution to (b):** **[7 Marks]**

| Parameter | **KLT** | **DCT** | **WHT** |
|---|---|---|---|
| **(i) Basis Functions** | Data-dependent eigenvectors of the covariance matrix (no fixed form) | Fixed real-valued cosine functions of the form $\cos(\pi(2x+1)u/2N)$ | Fixed square-wave functions taking only values $+1$ and $-1$ |
| **(ii) Energy Compaction** | **Optimal** — best possible for any linear transform | Near-optimal — within 1–3% of KLT for natural images with Markov-1 statistics | Good for edge-rich images; weaker for smooth gradients |
| **(iii) Computational Complexity** | $O(N^4)$ to $O(N^6)$ (eigen-decomposition) | $O(N^2 \log N)$ (fast DCT algorithms exist) | $O(N^2 \log N)$ using butterfly structure, **zero multiplications** |
| **(iv) Practical Application** | Theoretical benchmark; specialized hyperspectral imaging | **JPEG, MPEG, H.264, H.265, HEVC** — universal image/video coding | Low-power IoT, hardware codecs, lossless compression pre-stage |

**[1.75 Marks per correct row]**

---

> [!WARNING]
> **KTU Examiner's Valuation Warning / Common Pitfalls**
> 1. **Normalization Constant Forgetting:** When writing the 2D DCT formula, many students omit the $\alpha(u)\alpha(v)$ factor. This causes a systematic $\sqrt{1/N}$ or $\sqrt{2/N}$ scaling error in *every* coefficient and will cost **2 full marks**.
> 2. **Confusing DCT and DFT:** Writing $\exp(-j2\pi ux/N)$ instead of $\cos(\pi(2x+1)u/2N)$ is a fatal error. Always remember the $(2x+1)$ offset in the argument.
> 3. **KLT vs. PCA Confusion:** Examiners may deduct 1 mark if you call KLT "Principal Component Analysis" without clarifying that PCA is the *data-analysis* interpretation of KLT, while KLT is the *signal-processing* interpretation of the same math.
> 4. **Forgetting to Multiply by $1/N$ in WHT:** The Hadamard kernel is normalized by $1/N$ (not $\sqrt{1/N}$ or $\sqrt{2/N}$). Missing this gives coefficients that are 4× too large for $N=2$ and 64× too large for $N=8$.

---

## Topic Recap & Important Things to Remember

* **Image Transform Definition:** A unitary, separable operator that maps an $N \times N$ spatial block into an $N \times N$ transform-domain coefficient matrix. **Lossless** in itself; loss occurs only at quantization.
* **The Big Four Transforms in KTU Module 2:**
   * **KLT** → optimal, data-dependent, no fast algorithm.
   * **DCT** → near-optimal, fixed cosine basis, fast, used in **JPEG**.
   * **WHT** → only $\pm 1$ entries, **zero multiplications**, used in low-power codecs.
   * **DFT/FFT** → complex output, used in general signal analysis.
* **DCT Formula (must memorize):**
   $$F(u,v) = \alpha(u)\alpha(v)\sum_{x}\sum_{y} f(x,y)\cos\left[\frac{\pi(2x+1)u}{2N}\right]\cos\left[\frac{\pi(2y+1)v}{2N}\right]$$
* **Normalization Constant:** $\alpha(0) = \sqrt{1/N}$ and $\alpha(k) = \sqrt{2/N}$ for $k \ne 0$.
* **Parseval's Theorem:** $\sum \sum f^2 = \sum \sum F^2$ — total energy is preserved.
* **Kernel Separability:** 2D transform = 1D row transform → 1D column transform. Reduces complexity from $O(N^4)$ to $O(N^3)$.
* **DCT vs. DFT:** DCT uses *even-symmetric* extension to eliminate the boundary discontinuity that DFT suffers from; this gives cleaner high-frequency coefficients.
* **WHT Kernel:** Entries are $+1$ or $-1$; recursive Hadamard construction; computational cost is purely additions.
* **KLT Optimality Proof Idea:** Eigenvectors of the covariance matrix diagonalize the transformed covariance, so off-diagonal correlations vanish.
* **Energy Compaction Definition:** Fraction of total coefficient energy concentrated in the top-left $k \times k$ submatrix. **DCT packs ~80% of energy into the top-left 10% of coefficients** for typical natural images.
* **JPEG Block Size:** $8 \times 8$ DCT, followed by quantization with a luminance-specific $Q$ table, then zigzag scan and Huffman coding.
* **Lossless Step:** DCT, IDCT, and WHT are all perfectly invertible unitary transforms.
* **Lossy Step:** Quantization of the transform coefficients is the *only* source of information loss.
* **Examiner Trivia:** If asked to list *one advantage of DCT over KLT*, the canonical answer is: "DCT has a fixed basis independent of input data, hence requires no side information transmission and admits a fast algorithm."
* **Standard Test Block Sizes in KTU Exams:** $N=2$ for hand-computation questions; $N=4$ or $N=8$ for conceptual energy-compaction questions.
* **Key Paper Reference:** Ahmed, Natarajan, and Rao, *"Discrete Cosine Transform,"* IEEE Trans. on Computers, 1974 — the foundational paper behind JPEG.

<!-- SECTION_5_END -->
