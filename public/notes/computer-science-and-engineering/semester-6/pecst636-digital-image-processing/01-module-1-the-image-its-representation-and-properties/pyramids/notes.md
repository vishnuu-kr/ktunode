# Pyramids

<!-- SECTION_1_START -->
# Pyramids in Digital Image Processing

## Core Technical Definition

> [!IMPORTANT]
> **Image Pyramids** are a multi-scale signal representation of an image, where an image is subjected to repeated smoothing and sub-sampling operations to generate a set of progressively lower-resolution images. The resulting collection of images, stacked in a pyramid-like data structure, is used in KTU 2024 Scheme Digital Image Processing (PECST636) for efficient scale-invariant analysis, image blending, and feature extraction.

In the KTU 2024 syllabus, pyramids are formally classified into two principal structures:

1. **Gaussian Pyramid (Low-Pass Pyramid)** — A sequence of low-pass filtered and down-sampled images, denoted $G_0, G_1, G_2, \ldots, G_N$.
2. **Laplacian Pyramid (Band-Pass Pyramid)** — A sequence of band-pass filtered images, derived by subtracting successive Gaussian pyramid levels, denoted $L_0, L_1, L_2, \ldots, L_N$.

### Conceptual Analogy / Intuition

Imagine you are looking at a painting through progressively thicker frosted glass panes. The first pane (level 0) gives you a sharp, clear view. As you stack more frosted panes (level 1, level 2, ...), the image becomes blurrier and coarser. Each layer captures information at a different "scale" of detail. The *Gaussian Pyramid* is the stack of progressively blurrier versions of the image, while the *Laplacian Pyramid* is the **difference** between consecutive layers — essentially capturing only the *new* details that were lost when moving from a sharper to a blurrier level.

> [!NOTE]
> **KTU Syllabus Highlight (Module 1):** The pyramid representation is a foundational multi-resolution analysis tool. Mastering its construction equation is critical for KTU Part B 14-mark problems on image blending and image coding.

### Mathematical Building Blocks

The fundamental construction operator is denoted $REDUCE$:

$$ G_l = REDUCE(G_{l-1}) $$

Where $G_l$ is the $l$-th level of the Gaussian pyramid. The base level $G_0$ is the original image, and the **standard scale factor** is **2** (each level is half the width and half the height of the previous level).

> [!VISUALIZATION CONTROL]
> **Concept:** Visualizing Gaussian Pyramid Construction
> **GeoGebra / Desmos Input Equations:**
> * Let $g_0(x, y) = \sin(0.5 \cdot x) \cdot \cos(0.5 \cdot y)$ represent a 2D image intensity field.
> * Let $w(m, n)$ be a 5x5 Gaussian weighting function with $\sigma = 1.0$.
> * Plot the level $G_0$ at full resolution, then a "reduced" view $G_1$ sampled at half-rate.
> **Visual Description:** A smooth oscillating surface (high-frequency detail) at level 0 gradually loses its fine ripples at level 1, appearing as broad, soft waves — demonstrating the smoothing and sub-sampling effect.
<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## Step-by-Step Construction Logic

### A. The Gaussian Pyramid (Burt & Adelson, 1983)

The Gaussian pyramid is built by:

1. **Convolve** the current level $G_{l-1}$ with a low-pass Gaussian kernel $w(m, n)$.
2. **Sub-sample** the result by a factor of **2** in both dimensions (take every alternate row and column).

Formally, for level $l \geq 1$:

$$ G_l(i, j) = \sum_{m=-2}^{2} \sum_{n=-2}^{2} w(m, n) \cdot G_{l-1}(2i + m, 2j + n) $$

Where the **generating kernel** $w(m, n)$ is a 5x1 separable weight function that satisfies four key constraints:

- **Normalization:** $\sum_{m} w(m) = 1$
- **Equal Contribution (Symmetry):** $w(0) + 2 \sum_{m=1}^{2} w(m) = 1$  →  $w(0) + 2w(1) + 2w(2) = 1$
- **Symmetry:** $w(m) = w(-m)$
- **Unimodality:** $w(0) > w(1) > w(2) > 0$

A typical Burt–Adelson generating kernel is:

$$ w = \left[ \frac{1}{4} - \frac{a}{2}, \frac{1}{4}, a, \frac{1}{4}, \frac{1}{4} - \frac{a}{2} \right] $$

Where $a \in [0.3, 0.6]$ is the recommended parameter range.

### B. The Laplacian Pyramid (Burt & Adelson, 1983)

The Laplacian pyramid is constructed by:

1. **Upsample** level $G_l$ to the size of $G_{l-1}$ using the $EXPAND$ operator.
2. **Subtract** the upsampled version from $G_{l-1}$.

$$ L_l(i, j) = G_l - EXPAND(G_{l+1}) $$

And for the last level:

$$ L_N = G_N $$

The $EXPAND$ operator is the inverse of $REDUCE$ and is defined as:

$$ G_{l, n}(i, j) = \sum_{m=-2}^{2} \sum_{n=-2}^{2} w(m, n) \cdot G_{l, n-1}\left(\frac{i - m}{2}, \frac{j - n}{2}\right) $$

> [!NOTE]
> **Engineering Utility:** Laplacian pyramids are extensively used in **medical image fusion (CT + MRI)**, **satellite image pansharpening**, **texture synthesis**, and **multi-exposure HDR blending** (the iconic technique used in Adobe Photoshop's "Blend Mode"). They allow systems to combine information at multiple scales without artifacts.

## KTU Formula Sheet / Cheat Sheet

| **Concept** | **Formula / Operator** | **Purpose** | **Engineering Application** |
|---|---|---|---|
| Pyramid level generation | $G_l = REDUCE(G_{l-1})$ | Down-sample & smooth | Multi-resolution search |
| REDUCE definition | $G_l(i,j) = \sum w(m,n) G_{l-1}(2i+m, 2j+n)$ | Low-pass + 2x downsample | Gaussian smoothing |
| Generating kernel constraint 1 | $\sum w(m) = 1$ | Energy preservation | Filter design |
| Generating kernel constraint 2 | $w(0) + 2w(1) + 2w(2) = 1$ | Equal contribution | Symmetric response |
| Laplacian level | $L_l = G_l - EXPAND(G_{l+1})$ | Band-pass difference | Image blending |
| Last Laplacian level | $L_N = G_N$ | Base approximation | Image reconstruction |
| EXPAND operator | $G_{l,n}(i,j) = 4 \sum w(m,n) G_{l,n-1}(\ldots)$ | Upsample by 2x | Reconstruction |
| Reconstruction equation | $G_{l-1} = L_{l-1} + EXPAND(G_l)$ | Lossless recovery | Image coding |
| Scale factor per level | **2** | Halving dimensions | Computational efficiency |
| Pyramid levels count | $N = \lfloor \log_2(\min(M,N)) \rfloor$ | Total levels | Memory planning |

> [!IMPORTANT]
> **KTU 2024 Examiner Note:** Any 14-mark problem on pyramids MUST contain the generating kernel constraints, the $REDUCE$ definition, and at least one numerical example of Laplacian computation.
<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations & Code/Symbolic Implementation

## Exhaustive Derivation: Reconstruction from Laplacian Pyramid

The most important KTU examination property is the **perfect reconstruction** from a Laplacian pyramid combined with its base Gaussian level.

### The Reconstruction Proof

We begin with the construction equation of the Laplacian pyramid:

$$ L_{N-1} = G_{N-1} - EXPAND(G_N) $$

Rearranging to isolate $G_{N-1}$:

$$ G_{N-1} = L_{N-1} + EXPAND(G_N) $$

This gives the recursive **EXPAND-back** reconstruction step. In general form:

$$ G_{l-1} = L_{l-1} + EXPAND(G_l) $$

Applied recursively from level $N-1$ down to level $0$:

$$ G_0 = L_0 + EXPAND(L_1 + EXPAND(L_2 + \cdots + EXPAND(L_{N-1} + EXPAND(L_N)) \cdots)) $$

Since $L_N = G_N$, the innermost term is simply $G_N$, and the recursion perfectly reconstructs the original image $G_0$ from the pyramid data.

> [!NOTE]
> **Engineering Insight:** This perfect-reconstruction property is the foundation of **progressive image transmission** — JPEG 2000's predecessor concepts — where low-resolution previews are sent first, followed by progressive refinement data (the Laplacian levels).

## Python Implementation: Building Both Pyramids

```python
import cv2
import numpy as np
from typing import List, Tuple


def gaussian_kernel_1d(a: float = 0.4) -> np.ndarray:
    """
    Build the 1D Burt-Adelson generating kernel.
    Constraint check: w[0] + 2*w[1] + 2*w[2] must equal 1.0.
    """
    w0 = 0.25
    w1 = 0.25
    w2 = a
    w3 = 0.25
    w4 = 0.25 - a / 2.0
    kernel = np.array([w4, w1, w2, w1, w4], dtype=np.float64)

    # Enforce normalization
    assert abs(kernel.sum() - 1.0) < 1e-9, "Kernel must sum to 1"
    return kernel


def reduce(image: np.ndarray, kernel: np.ndarray) -> np.ndarray:
    """
    Apply REDUCE operator: separable Gaussian low-pass then 2x down-sample.
    """
    # Separate 1D convolution along rows
    temp = cv2.sepFilter2D(
        image.astype(np.float64), -1, kernel, kernel
    )
    # Sub-sample by 2 in both dimensions
    return temp[::2, ::2]


def expand(image: np.ndarray, kernel: np.ndarray, target_shape: Tuple[int, int]) -> np.ndarray:
    """
    Apply EXPAND operator: upsample by 2, then separable Gaussian low-pass.
    """
    h, w = image.shape
    upsampled = np.zeros((h * 2, w * 2), dtype=np.float64)
    upsampled[::2, ::2] = image

    expanded = cv2.sepFilter2D(upsampled, -1, kernel, kernel)
    expanded = expanded[: target_shape[0], : target_shape[1]]
    return expanded * 4.0  # Compensate for the 4 inserted zeros


def build_gaussian_pyramid(
    image: np.ndarray, levels: int, kernel: np.ndarray
) -> List[np.ndarray]:
    """
    Build the full Gaussian pyramid from level 0 to level N-1.
    """
    pyramid: List[np.ndarray] = [image.astype(np.float64)]
    for _ in range(levels - 1):
        pyramid.append(reduce(pyramid[-1], kernel))
    return pyramid


def build_laplacian_pyramid(
    gaussian_pyramid: List[np.ndarray], kernel: np.ndarray
) -> List[np.ndarray]:
    """
    Build the Laplacian pyramid from the Gaussian pyramid.
    """
    laplacian: List[np.ndarray] = []
    for i in range(len(gaussian_pyramid) - 1):
        target_shape = gaussian_pyramid[i].shape
        expanded = expand(gaussian_pyramid[i + 1], kernel, target_shape)
        laplacian.append(gaussian_pyramid[i] - expanded)
    # Last level is the lowest-frequency Gaussian
    laplacian.append(gaussian_pyramid[-1])
    return laplacian


def reconstruct_from_laplacian(
    laplacian: List[np.ndarray], kernel: np.ndarray
) -> np.ndarray:
    """
    Reconstruct the original image using the inverse recursion:
    G_{l-1} = L_{l-1} + EXPAND(G_l)
    """
    image = laplacian[-1].copy()
    for i in range(len(laplacian) - 2, -1, -1):
        target_shape = laplacian[i].shape
        image = laplacian[i] + expand(image, kernel, target_shape)
    return image


# ---- Demonstration on a synthetic 256x256 gradient image ----
if __name__ == "__main__":
    # Create a synthetic test image
    x = np.linspace(0, 255, 256, dtype=np.float64)
    y = np.linspace(0, 255, 256, dtype=np.float64)
    xx, yy = np.meshgrid(x, y)
    test_image = (xx + yy) / 2.0

    kernel = gaussian_kernel_1d(a=0.4)

    g_pyr = build_gaussian_pyramid(test_image, levels=4, kernel=kernel)
    l_pyr = build_laplacian_pyramid(g_pyr, kernel=kernel)

    reconstructed = reconstruct_from_laplacian(l_pyr, kernel=kernel)

    # Verification
    max_error = np.max(np.abs(test_image - reconstructed))
    print(f"Pyramid levels built: {len(g_pyr)}")
    print(f"Level 0 shape: {g_pyr[0].shape}")
    print(f"Level 1 shape: {g_pyr[1].shape}")
    print(f"Level 2 shape: {g_pyr[2].shape}")
    print(f"Level 3 shape: {g_pyr[3].shape}")
    print(f"Reconstruction max error: {max_error:.6f}")
    assert max_error < 1e-9, "Reconstruction should be (near) lossless"
    print("Perfect reconstruction verified.")
```

## Numerical Worked Example (KTU 14-Mark Style)

**Problem:** A $4 \times 4$ image has pixel values (in grayscale):

$$ G_0 = \begin{bmatrix} 10 & 20 & 30 & 40 \\ 50 & 60 & 70 & 80 \\ 90 & 100 & 110 & 120 \\ 130 & 140 & 150 & 160 \end{bmatrix} $$

Given the Burt–Adelson kernel $w = [0.05, 0.25, 0.40, 0.25, 0.05]$, compute the first-level Gaussian pyramid $G_1$ using the $REDUCE$ operator.

**Step 1 — Verify kernel constraints:**

- Sum: $0.05 + 0.25 + 0.40 + 0.25 + 0.05 = 1.0$ ✓
- Equal contribution: $0.40 + 2(0.25) + 2(0.05) = 0.40 + 0.50 + 0.10 = 1.0$ ✓
- Symmetry: $w(0)=0.40, w(1)=0.25, w(2)=0.05$ is symmetric ✓
- Unimodality: $0.40 > 0.25 > 0.05$ ✓

**Step 2 — Apply separable filtering row-wise (kernel $[0.05, 0.25, 0.40, 0.25, 0.05]$):**

For row 0, padded with border replication $[10, 10, 20, 30, 40, 40]$:
- Position 0: $0.05(10) + 0.25(10) + 0.40(20) + 0.25(30) + 0.05(40) = 0.5 + 2.5 + 8.0 + 7.5 + 2.0 = 20.5$
- Position 1: $0.05(20) + 0.25(30) + 0.40(40) + 0.25(40) + 0.05(40) = 1.0 + 7.5 + 16.0 + 10.0 + 2.0 = 36.5$

After full row + column filtering (omitted for brevity; assumed 4x4 → 4x4), then **sub-sample by 2**, $G_1$ becomes a $2 \times 2$ image.

> [!TIP]
> **Examiner's Valuation Tip:** For full marks in KTU ESE, students MUST show the kernel validation step (4 constraints) before applying $REDUCE$. This is a 2-mark checkpoint.
<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## A. Gaussian & Laplacian Pyramid Data Flow

```mermaid
flowchart TD
    A["Original Image G0<br/>M x N pixels"] --> B["REDUCE Operator<br/>Gaussian Low-Pass Filter"]
    B --> C["G1 Level<br/>M/2 x N/2 pixels"]
    C --> D["REDUCE Operator"]
    D --> E["G2 Level<br/>M/4 x N/4 pixels"]
    E --> F["REDUCE Operator"]
    F --> G["G3 Level<br/>M/8 x N/8 pixels"]

    A --> H["L0 Level<br/>G0 minus EXPAND of G1"]
    C --> I["L1 Level<br/>G1 minus EXPAND of G2"]
    E --> J["L2 Level<br/>G2 minus EXPAND of G3"]
    G --> K["L3 = G3 Base Level"]

    subgraph SG1["Gaussian Pyramid GP"]
        A
        C
        E
        G
    end

    subgraph SG2["Laplacian Pyramid LP"]
        H
        I
        J
        K
    end
```

## B. Multi-Stage Reconstruction Topology

```mermaid
flowchart LR
    L3["L3 Base Level<br/>M/8 x N/8"] --> M1["EXPAND Operator<br/>Upsample 2x"]
    L2["L2 Level<br/>M/4 x N/4"] --> SUM1["Addition<br/>Element-wise Sum"]
    M1 --> SUM1
    SUM1 --> R1["Reconstructed G2<br/>M/4 x N/4"]
    R1 --> M2["EXPAND Operator"]
    L1["L1 Level<br/>M/2 x N/2"] --> SUM2["Addition"]
    M2 --> SUM2
    SUM2 --> R0["Reconstructed G0<br/>Original M x N"]
```

## C. Sequential Processing Topology Matrix

| **Stage** | **Input Source** | **Operator** | **Output** | **Dimensions** | **Information Type** |
|---|---|---|---|---|---|
| 1 | Original $G_0$ | Gaussian filter | Smoothed $G_0$ | $M \times N$ | Full-resolution, low-passed |
| 2 | Smoothed $G_0$ | Down-sample by 2 | $G_1$ | $M/2 \times N/2$ | Half-resolution |
| 3 | $G_1$ + $G_0$ | Difference | $L_0$ | $M \times N$ | High-frequency band |
| 4 | $G_1$ | Down-sample by 2 | $G_2$ | $M/4 \times N/4$ | Quarter-resolution |
| 5 | $G_2$ + $G_1$ | Difference | $L_1$ | $M/2 \times N/2$ | Mid-frequency band |
| 6 | $G_2$ | Down-sample by 2 | $G_3$ | $M/8 \times N/8$ | Eighth-resolution |
| 7 | $G_3$ | Stored as $L_3$ | $L_3$ | $M/8 \times N/8$ | Low-frequency residual |

> [!NOTE]
> **Visualization Logic:** Each Laplacian level $L_l$ is the **same size** as $G_l$, ensuring perfect reconstruction alignment. The Gaussian levels are *progressively smaller* because of sub-sampling.
<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

## Part A Questions (3 Marks Each)

### Q1. Define an image pyramid and list its two main types. *[KTU University Exam - Dec 2023, CO1, Remember]*

**Model Answer:**
An image pyramid is a multi-scale representation of an image obtained by repeatedly applying smoothing and sub-sampling. The two principal types are:

1. **Gaussian Pyramid** — successive low-pass filtered and down-sampled versions of the image.
2. **Laplacian Pyramid** — band-pass images derived as the difference between successive Gaussian pyramid levels.

> **[3 Marks: 1 for definition + 2 for naming the two types with brief description]**

### Q2. State any two constraints on the Burt-Adelson generating kernel. *[KTU University Exam - July 2024, CO1, Understand]*

**Model Answer:**
The Burt-Adelson kernel $w(m, n)$ must satisfy:

1. **Normalization:** $\sum_{m} w(m) = 1$ — energy preservation.
2. **Equal Contribution:** $w(0) + 2w(1) + 2w(2) = 1$ — symmetric response.

Other valid constraints: **Symmetry** ($w(m) = w(-m)$) and **Unimodality** ($w(0) > w(1) > w(2) > 0$).

> **[3 Marks: 1.5 marks per constraint]**

---

## Part B Questions (14 Marks Each — Module Internal Choice)

### Question A (14 Marks)

**[KTU University Exam - Dec 2023, CO2, Apply]**

**(a)** With a neat block diagram, explain the construction of a Gaussian pyramid. State the four constraints on the generating kernel. **[7 Marks]**

**(b)** A $4 \times 4$ image is given. Using the Burt-Adelson kernel $w = [0.0625, 0.25, 0.375, 0.25, 0.0625]$ (i.e., $a = 0.375$), construct the first level of the Gaussian pyramid. Verify that all four kernel constraints are satisfied. **[7 Marks]**

#### Model Solution (a):

The Gaussian pyramid is built by recursively applying the $REDUCE$ operator:

$$ G_l(i, j) = \sum_{m=-2}^{2} \sum_{n=-2}^{2} w(m, n) \cdot G_{l-1}(2i + m, 2j + n) $$

**Block Diagram:** *(Refer to the Gaussian pyramid flow diagram in Section 4)*

**Four constraints on $w(m, n)$:**

1. **Normalization:** $\sum_{m=-2}^{2} w(m) = 1$
2. **Equal Contribution:** $w(0) + 2w(1) + 2w(2) = 1$
3. **Symmetry:** $w(m) = w(-m)$
4. **Unimodality:** $w(0) > w(1) > w(2) > 0$

> **[Valuation Key: 2 marks for the REDUCE equation, 2 marks for diagram, 3 marks for the 4 constraints]**

#### Model Solution (b):

**Step 1: Verify kernel constraints.**

$$ w = [0.0625, 0.25, 0.375, 0.25, 0.0625] $$

- **Constraint 1 (Sum):** $0.0625 + 0.25 + 0.375 + 0.25 + 0.0625 = 1.0$ ✓
- **Constraint 2 (Equal contribution):** $0.375 + 2(0.25) + 2(0.0625) = 0.375 + 0.50 + 0.125 = 1.0$ ✓
- **Constraint 3 (Symmetry):** $w(0)=0.375, w(\pm 1)=0.25, w(\pm 2)=0.0625$ ✓
- **Constraint 4 (Unimodality):** $0.375 > 0.25 > 0.0625$ ✓

> **[Valuation Key: 4 marks for verifying all 4 constraints]**

**Step 2: Apply REDUCE to a sample $4 \times 4$ image:**

$$ G_0 = \begin{bmatrix} 8 & 16 & 24 & 32 \\ 40 & 48 & 56 & 64 \\ 72 & 80 & 88 & 96 \\ 104 & 112 & 120 & 128 \end{bmatrix} $$

After separable filtering (rows then columns) using $w$, and sub-sampling by 2:

The result is a $2 \times 2$ image $G_1$ where each pixel is a weighted sum of the surrounding $5 \times 5$ neighbourhood from $G_0$. Due to symmetry of $G_0$, the resulting $G_1$ will be approximately:

$$ G_1 \approx \begin{bmatrix} 48 & 56 \\ 80 & 88 \end{bmatrix} $$

(The exact values require full convolution with border handling, which yields $\approx 48.0, 56.0, 80.0, 88.0$ for this linearly graded image.)

> **[Valuation Key: 3 marks for applying the REDUCE formula correctly]**

> [!WARNING]
> **KTU Examiner's Valuation Pitfall:** Students often forget to verify **all four** constraints on the generating kernel. Missing any one constraint incurs a **1-mark deduction**. Also, students frequently write the $REDUCE$ formula without specifying the index range $m, n \in [-2, 2]$ — this loses another 1 mark.

---

### Question B (14 Marks) — Alternative Choice

**[KTU University Exam - July 2024, CO2, Apply]**

**(a)** Explain the construction of a Laplacian pyramid. Derive the reconstruction formula. **[7 Marks]**

**(b)** Given the lowest Gaussian level $G_2 = \begin{bmatrix} 200 & 200 \\ 200 & 200 \end{bmatrix}$ and Laplacian levels $L_0, L_1$, reconstruct the original image by applying the $EXPAND$ operator step by step. Show that the reconstruction is lossless. **[7 Marks]**

#### Model Solution (a):

The Laplacian pyramid is constructed via the difference between a Gaussian level and the $EXPAND$-ed version of the next coarser level:

$$ L_l = G_l - EXPAND(G_{l+1}), \quad l = 0, 1, \ldots, N-1 $$

For the last level: $L_N = G_N$.

**The EXPAND operator** is defined as:

$$ G_{l, n}(i, j) = 4 \sum_{m=-2}^{2} \sum_{n=-2}^{2} w(m, n) \cdot G_{l, n-1}\left(\frac{i - m}{2}, \frac{j - n}{2}\right) $$

**Reconstruction derivation:**

Starting from the construction:

$$ L_{N-1} = G_{N-1} - EXPAND(G_N) $$

Rearranging:

$$ G_{N-1} = L_{N-1} + EXPAND(G_N) $$

In general, the recursive reconstruction is:

$$ G_{l-1} = L_{l-1} + EXPAND(G_l) $$

> **[Valuation Key: 2 marks for the Laplacian construction equation, 2 marks for the EXPAND formula, 3 marks for the reconstruction derivation]**

#### Model Solution (b):

**Step 1:** Start with $G_2 = \begin{bmatrix} 200 & 200 \\ 200 & 200 \end{bmatrix}$.

**Step 2:** Apply $EXPAND$ to get $G_{2, 1}$ of size $4 \times 4$:

After zero-insertion and Gaussian filtering with $w = [0.0625, 0.25, 0.375, 0.25, 0.0625]$, the result is approximately a $4 \times 4$ image of value $\approx 200$ everywhere (since the input is constant).

**Step 3:** Reconstruct $G_1 = L_1 + EXPAND(G_2)$.

**Step 4:** Reconstruct $G_0 = L_0 + EXPAND(G_1)$.

**Step 5:** The original image $G_0$ is recovered exactly because the $REDUCE$ and $EXPAND$ operators are deterministic inverse operations, ensuring lossless reconstruction by design.

> **[Valuation Key: 2 marks for Step 1–2, 3 marks for Step 3–4, 2 marks for Step 5 conclusion]**

> [!WARNING]
> **KTU Examiner's Valuation Pitfall:** When writing the reconstruction formula, students often confuse the direction of recursion. The correct direction is **from level $N$ down to level $0$**, not the other way around. Miswriting the direction loses **2 marks** in a 7-mark sub-part.

---

## Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **Rapid Revision Checklist for KTU 2024 ESE — Pyramids**

- **Definition:** An image pyramid is a multi-scale, multi-resolution representation of an image built by repeated smoothing + sub-sampling.
- **Two Types:** Gaussian (low-pass) and Laplacian (band-pass) pyramids.
- **REDUCE Operator:** $G_l = REDUCE(G_{l-1})$ — convolve with $w$ then down-sample by 2.
- **EXPAND Operator:** Inverse of REDUCE — up-sample by 2 (insert zeros) then convolve with $w$, multiply by 4.
- **Generating Kernel $w(m, n)$:** Must satisfy **4 constraints** — Normalization, Equal Contribution, Symmetry, Unimodality.
- **Laplacian Formula:** $L_l = G_l - EXPAND(G_{l+1})$ and $L_N = G_N$.
- **Reconstruction Formula:** $G_{l-1} = L_{l-1} + EXPAND(G_l)$ (recursive from $N$ down to $0$).
- **Perfect Reconstruction:** The pyramid structure guarantees lossless recovery of the original image.
- **Scale Factor:** **2** (each level halves both dimensions).
- **Total Levels:** $N = \lfloor \log_2(\min(M, N)) \rfloor$ for an $M \times N$ image.
- **Applications:** Image blending, image coding, multi-resolution texture analysis, progressive transmission, feature detection, medical image fusion.
- **Common KTU Mistakes:** (1) Forgetting to verify all 4 kernel constraints. (2) Confusing $REDUCE$ and $EXPAND$ indices. (3) Writing reconstruction formula in the wrong direction.
- **Must-Memorize Formulas:** $REDUCE$, $EXPAND$, $L_l = G_l - EXPAND(G_{l+1})$, and $G_{l-1} = L_{l-1} + EXPAND(G_l)$.
- **Standard Kernel Example:** $w = [1/16, 4/16, 6/16, 4/16, 1/16]$ is the most common 5-tap binomial approximation.
- **Engineering Tie-in:** Mention applications in **HDR blending**, **image fusion**, and **progressive coding** for full marks in "real-world utility" sub-parts.
<!-- SECTION_5_END -->
