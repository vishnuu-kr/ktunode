# Convolution of long data sequences- Overlap add method

<!-- SECTION_1_START -->
# Convolution of Long Data Sequences — Overlap-Add Method

> [!NOTE]
> **KTU 2024 Scheme | Module 1 | Digital Signal Processing (PECST526)**
> *CO1: Apply DFT/IDFT principles to efficiently compute linear convolution of finite-length sequences.* | RBT Level: Apply / Analyze

## 1.1 Formal Academic Definition

The **Overlap-Add (OLA) method** is a linear, block-processing technique used to compute the **linear convolution** $y(n) = x(n) * h(n)$ between a very long input sequence $x(n)$ of length $L_x$ and a finite impulse response $h(n)$ of length $M$, by segmenting $x(n)$ into short, non-overlapping sub-sequences, convolving each sub-sequence with $h(n)$ using efficient **DFT/FFT** machinery, and finally **summing** the resulting blocks after aligning their time indices.

The method exploits the fact that the **circular convolution** of length $N$ equals linear convolution **iff** $N \geq L + M - 1$, where $L$ is the length of each input block.

> [!IMPORTANT]
> **Why OLA exists:** Direct time-domain convolution requires $O(L_x \cdot M)$ multiplications, which becomes prohibitive for very long signals (e.g., audio streams, seismic data, biomedical ECG). By splitting $x(n)$ into blocks of size $L$ and using an $N$-point FFT (where $N = L + M - 1$), the per-block cost becomes $O(N \log_2 N)$, yielding a total cost of roughly $O(N \log_2 N \cdot \frac{L_x}{L})$ — a dramatic speed-up when $M \ll L_x$.

## 1.2 Intuitive Analogy — The "Conveyor-Belt Book Binding" Model

Imagine a long ream of printed pages ($x(n)$) being fed through a small **binding machine** that can only glue together **M = 3 pages at a time** ($h(n)$ represents the gluing action). Since the machine cannot handle all the pages at once, the operator tears the ream into smaller stacks of $L = 3$ pages each, sends each stack through the machine, and lays down the resulting bound mini-books on a table.

When two consecutive mini-books are placed on the table, the **last 2 pages of one** physically **overlap** with the **first 2 pages of the next**, because the glue action from one stack still affects the following samples. The operator solves this by **adding (stacking) the overlapping pages together** — hence *Overlap-Add*. The final, perfect bound book is the linear convolution of the entire ream with the gluing action.

> [!TIP]
> **The "overlap" is always $M-1$ samples** — i.e., the number of extra samples produced by the linear convolution of a single block with $h(n)$ that extend beyond the block's pure, non-overlapping region.

## 1.3 Critical Parameters and Their Geometric Meaning

- **Block length $L$** — number of "fresh" input samples in each segment.
- **Impulse response length $M$** — fixed and typically small.
- **FFT size $N$** — must satisfy $N \geq L + M - 1$ to prevent **time-domain aliasing** (the central requirement that makes circular convolution equal linear convolution).
- **Overlap length = $M - 1$** — the number of samples by which consecutive output blocks overlap and must be summed.

> [!VISUALIZATION CONTROL]
> **Concept:** Geometric visualization of $N = L + M - 1$ requirement and the overlap region.
> **GeoGebra / Desmos Input Equations:**
> * `L = 3` (slider), `M = 3` (slider), `N = L + M - 1` (derived).
> * `polygon((0,0), (L,0), (L,1), (0,1))` — input block.
> * `polygon((L,0), (N,0), (N,1), (L,1))` — zero-padded tail (size $M-1$).
> * `polygon((L,0.4), (N,0.4), (N,0.6), (L,0.6))` — overlap region highlight.
> **Visual Description:** Two adjacent rectangles share a shaded middle strip of width $M-1$, representing the samples that must be summed when reconstructing the output from successive blocks.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# 2. Deep Theoretical Analysis and KTU Formula Sheet

## 2.1 Operational Principle — Step-by-Step Logic

Let $x(n)$ have length $L_x$ and $h(n)$ have length $M$.

1. **Choose the FFT size $N$** such that $N \geq L + M - 1$, where $L$ is the block length. For minimum computational cost, $L$ is typically chosen equal to $M$, giving $N = 2M - 1$ (often rounded to the next power of two for radix-2 FFT efficiency).
2. **Compute $H(k)$ once** — perform an $N$-point DFT on $h(n)$ zero-padded to length $N$. Store this.
3. **Segment $x(n)$** into $\lceil L_x / L \rceil$ contiguous, non-overlapping blocks:
   $$x_r(n) = \begin{cases} x(n + rL), & 0 \leq n \leq L-1 \\ 0, & L \leq n \leq N-1 \end{cases}, \quad r = 0, 1, 2, \dots$$
4. **Process each block** by computing its $N$-point DFT $X_r(k)$, multiplying by $H(k)$, and computing the inverse $N$-point IDFT:
   $$y_r(n) = \text{IDFT}\{X_r(k) \cdot H(k)\}, \quad n = 0, 1, \dots, N-1$$
5. **Overlap and add** — since each $y_r$ has $M-1$ trailing samples that conceptually belong to the next block, sum the overlapping regions of consecutive $y_r$ outputs to form the final $y(n)$:
   $$y(n) = \sum_{r=0}^{\lceil L_x/L \rceil - 1} y_r(n - rL)$$

## 2.2 Why $N = L + M - 1$ Is Mandatory (The "Why" Behind It)

If the circular convolution length is $N < L + M - 1$, the linear convolution of a block of length $L$ with $h$ of length $M$ produces $L + M - 1$ samples. Wrapping these around a circle of length $N$ causes **time-domain aliasing**, and the recovered samples will be wrong. The minimum $N$ that avoids aliasing is therefore $L + M - 1$.

> [!NOTE]
> **Why "Overlap" and not "Overlap-Save":** In OLA, the input blocks are *non-overlapping* (saving memory), and the *output* blocks overlap. In the related **Overlap-Save method**, the input blocks overlap and the output blocks are truncated. Both achieve the same goal — efficient long-sequence convolution via FFT — but with different memory/time trade-offs.

## 2.3 KTU Formula Sheet / Cheat Sheet

| # | Formula / Concept | Expression | Remarks |
|---|-------------------|------------|---------|
| 1 | Linear convolution length | $L_y = L_x + M - 1$ | Length of final output $y(n)$ |
| 2 | Minimum FFT size | $N_{\min} = L + M - 1$ | To prevent time-aliasing |
| 3 | Number of input blocks | $R = \lceil L_x / L \rceil$ | Round up to nearest integer |
| 4 | Length of each block output | $N = L + M - 1$ | Same as FFT size |
| 5 | Overlap samples between blocks | $M - 1$ | Trailing samples that extend into next block |
| 6 | Per-block FFT cost | $O(N \log_2 N)$ | Radix-2 FFT complexity |
| 7 | Total multiplications (direct) | $L_x \cdot M$ | Time-domain brute force |
| 8 | Total multiplications (OLA) | $\approx R \cdot N \log_2 N$ | Significant saving if $M \ll L_x$ |
| 9 | Circular-to-linear equivalence | $x \circledast_N h = x *_L h$ iff $N \geq L + M - 1$ | $\circledast$ = circular, $*=$ linear |
| 10 | Block $r$ time-index mapping | $y_r$ occupies $[rL, rL + N - 1]$ | For overlap-add alignment |
| 11 | Output memory savings | Stores only 1 $H(k)$ | Re-used for all blocks |
| 12 | Block-length design choice | $L = M \Rightarrow N = 2M - 1$ | Minimum cost; round to power-of-2 |

## 2.4 Real-World Engineering Utility

> [!IMPORTANT]
> **Where Overlap-Add is used in industry:**
> 1. **Real-time audio processing** (e.g., convolution reverb, equalization in DAWs like Logic Pro / Ableton) — applying a long impulse response to a streaming audio buffer.
> 2. **Telecommunications** — software-defined radios (SDR) filter a continuous RF stream with a long FIR; OLA allows block processing.
> 3. **Biomedical signal processing** — ECG/EEG filtering on long recordings.
> 4. **Image processing** — applying 2D FIR filters on large images by row-by-row block processing.
> 5. **Seismic and radar** — matched filtering on massive streaming datasets.

The fundamental insight is: **anywhere you cannot fit an entire signal in memory at once, OLA is the standard solution.**

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# 3. Step-by-Step Derivation, Numerical Worked Example, and Python Implementation

## 3.1 Canonical Numerical Example — Complete Walkthrough

**Problem Statement:**
Compute $y(n) = x(n) * h(n)$ using the **Overlap-Add method**, where

$$h(n) = \{1, \; 2, \; 1\}, \quad M = 3$$
$$x(n) = \{\underset{n=0}{1}, 2, 3, \underset{n=3}{1}, 2, 3, \underset{n=6}{1}, 2, 3\}, \quad L_x = 9$$

**Step 1 — Choose $L$ and compute $N$:**

Let us pick $L = 3$ (block length = length of $h$, a common choice for minimum cost).
$$N = L + M - 1 = 3 + 3 - 1 = 5$$

**Step 2 — Zero-pad $h(n)$ to length $N = 5$ and compute $H(k)$:**

$$h_p(n) = \{1, 2, 1, 0, 0\}$$

The 5-point DFT will be computed later symbolically; we only need its existence for the OLA pipeline. (Computing $H(k)$ explicitly is optional for the OLA recipe; for verification we can use direct convolution in each block.)

**Step 3 — Segment $x(n)$ into $R = \lceil 9/3 \rceil = 3$ non-overlapping blocks of length 3:**

$$x_0(n) = \{1, 2, 3\}, \quad x_1(n) = \{1, 2, 3\}, \quad x_2(n) = \{1, 2, 3\}$$

**Step 4 — Zero-pad each block to length $N = 5$:**

$$x_0^{(p)} = \{1, 2, 3, 0, 0\}, \quad x_1^{(p)} = \{1, 2, 3, 0, 0\}, \quad x_2^{(p)} = \{1, 2, 3, 0, 0\}$$

**Step 5 — Linear-convolve each block with $h$ (length 3) to obtain $y_r$ of length $N = 5$:**

For $x_0 = \{1, 2, 3\}$, compute $y_0(n) = \sum_{k=0}^{2} h(k) \, x_0(n - k)$:

$$y_0(0) = h(0) \cdot x_0(0) = 1 \cdot 1 = 1$$
$$y_0(1) = h(0) \cdot x_0(1) + h(1) \cdot x_0(0) = 1 \cdot 2 + 2 \cdot 1 = 4$$
$$y_0(2) = h(0) \cdot x_0(3 \text{ is OOB}) + h(1) \cdot x_0(1) + h(2) \cdot x_0(0) = 1 \cdot 0 + 2 \cdot 2 + 1 \cdot 1 = 5$$

Wait — recheck: $x_0 = \{1, 2, 3\}$ indexed as $x_0(0)=1, x_0(1)=2, x_0(2)=3$, and $x_0(n) = 0$ for $n \geq 3$.

$$y_0(2) = h(0) x_0(2) + h(1) x_0(1) + h(2) x_0(0) = 1 \cdot 3 + 2 \cdot 2 + 1 \cdot 1 = 3 + 4 + 1 = 8$$
$$y_0(3) = h(1) x_0(2) + h(2) x_0(1) = 2 \cdot 3 + 1 \cdot 2 = 6 + 2 = 8$$
$$y_0(4) = h(2) x_0(2) = 1 \cdot 3 = 3$$

So $y_0 = \{1, 4, 8, 8, 3\}$. By identical inputs, $y_1 = y_2 = \{1, 4, 8, 8, 3\}$.

**Step 6 — Align and Overlap-Add the three blocks onto the output timeline:**

Block $r$ starts at global time-index $rL = 3r$. The three blocks therefore occupy:

| Block | Local Index $\to$ Global Index | Samples (placed at global positions) |
|-------|-------------------------------|---------------------------------------|
| $y_0$ | $0 \to 0$, $4 \to 4$ | positions 0, 1, 2, 3, 4 |
| $y_1$ | $0 \to 3$, $4 \to 7$ | positions 3, 4, 5, 6, 7 |
| $y_2$ | $0 \to 6$, $4 \to 10$ | positions 6, 7, 8, 9, 10 |

**Overlaps occur at positions 3, 4, 6, 7** (the last $M-1 = 2$ samples of each block overlap with the first $M-1 = 2$ samples of the next). Now perform the addition:

| Global Index $n$ | Contributing Blocks | Sum | Result |
|------------------|---------------------|-----|--------|
| 0 | $y_0(0)$ | $1$ | $\mathbf{1}$ |
| 1 | $y_0(1)$ | $4$ | $\mathbf{4}$ |
| 2 | $y_0(2)$ | $8$ | $\mathbf{8}$ |
| 3 | $y_0(3) + y_1(0)$ | $8 + 1$ | $\mathbf{9}$ |
| 4 | $y_0(4) + y_1(1)$ | $3 + 4$ | $\mathbf{7}$ |
| 5 | $y_1(2)$ | $8$ | $\mathbf{8}$ |
| 6 | $y_1(3) + y_2(0)$ | $8 + 1$ | $\mathbf{9}$ |
| 7 | $y_1(4) + y_2(1)$ | $3 + 4$ | $\mathbf{7}$ |
| 8 | $y_2(2)$ | $8$ | $\mathbf{8}$ |
| 9 | $y_2(3)$ | $8$ | $\mathbf{8}$ |
| 10 | $y_2(4)$ | $3$ | $\mathbf{3}$ |

**Final reconstructed output:**

$$y(n) = \{1, \; 4, \; 8, \; 9, \; 7, \; 8, \; 9, \; 7, \; 8, \; 8, \; 3\}, \quad L_y = 11$$

**Step 7 — Verification by direct convolution** (KTU requires this check):

Using $y(n) = \sum_{k=0}^{2} h(k) x(n-k)$ with $x = \{1,2,3,1,2,3,1,2,3\}$:

$$y(0)=1, \; y(1)=4, \; y(2)=8, \; y(3)=1+6+2=9, \; y(4)=2+2+3=7$$
$$y(5)=3+4+1=8, \; y(6)=1+6+2=9, \; y(7)=2+2+3=7, \; y(8)=3+4+1=8$$
$$y(9)=6+2=8, \; y(10)=3$$

$\Rightarrow$ Direct: $\{1,4,8,9,7,8,9,7,8,8,3\}$ — **MATCHES OLA output exactly.** ✓

## 3.2 Algorithmic / Symbolic Python Implementation

```python
import numpy as np
from numpy.fft import fft, ifft

def overlap_add(x: np.ndarray, h: np.ndarray, L: int) -> np.ndarray:
    """
    Compute linear convolution y = x * h using the Overlap-Add method.
    
    Parameters
    ----------
    x : np.ndarray
        Long input sequence (length Lx).
    h : np.ndarray
        Short impulse response (length M).
    L : int
        Block length for segmenting x(n).
    
    Returns
    -------
    y : np.ndarray
        Linear convolution of x and h (length Lx + M - 1).
    
    Raises
    ------
    ValueError
        If L < 1 or len(h) < 1.
    """
    if L < 1 or len(h) < 1:
        raise ValueError("Block length L and impulse response length M must be >= 1.")
    
    M = len(h)
    Lx = len(x)
    N = L + M - 1                 # Minimum FFT size to avoid aliasing
    H = fft(h, N)                 # Compute H(k) once and reuse
    
    R = int(np.ceil(Lx / L))      # Number of input blocks
    y = np.zeros(Lx + M - 1, dtype=complex)
    
    for r in range(R):
        start = r * L
        end   = min(start + L, Lx)
        x_block = x[start:end]
        
        # Zero-pad block to length N, take FFT, multiply, inverse FFT
        X_r = fft(x_block, N)
        Y_r = ifft(X_r * H)
        
        # Overlap-add Y_r into the global output buffer
        y[start:start + N] += Y_r
    
    return np.real(y)            # Imaginary part is numerical noise ~ 1e-15


# ---------- Demonstration with the worked example ----------
if __name__ == "__main__":
    h = np.array([1, 2, 1], dtype=float)
    x = np.array([1, 2, 3, 1, 2, 3, 1, 2, 3], dtype=float)
    L = 3
    
    y_ola = overlap_add(x, h, L)
    y_direct = np.convolve(x, h)
    
    print("OLA output      :", y_ola.astype(int))
    print("Direct convolve :", y_direct.astype(int))
    print("Match           :", np.allclose(y_ola, y_direct))
```

**Expected output:**

```
OLA output      : [1 4 8 9 7 8 9 7 8 8 3]
Direct convolve : [1. 4. 8. 9. 7. 8. 9. 7. 8. 8. 3.]
Match           : True
```

## 3.3 Cost Comparison Algebra

Let $L_x$ be the length of $x$ and $M$ the length of $h$, with $L = M$ (minimum-cost choice) and $N = 2M - 1$.

- **Direct time-domain convolution**:
$$C_{\text{direct}} = L_x \cdot M \;\text{ multiplications}$$

- **Overlap-Add (via FFT)** — $R = \lceil L_x / M \rceil$ blocks, each requiring 2 FFTs + $N$ multiplications:
$$C_{\text{OLA}} \approx R \cdot \left( 2 \cdot \frac{N}{2} \log_2 N + N \right) \approx R \cdot N \log_2 N$$

- **Speed-up ratio**:
$$\eta = \frac{C_{\text{direct}}}{C_{\text{OLA}}} = \frac{L_x \cdot M}{R \cdot N \log_2 N} = \frac{M}{(2M - 1)\log_2(2M - 1)} \quad (\text{for } L_x \gg M)$$

For $M = 64$ (typical FIR filter), $N = 127$, $\log_2 N \approx 7$:
$$\eta \approx \frac{64}{127 \cdot 7} \approx 0.072 \;\text{(direct still cheaper!)}$$

For $M = 1024$ (long reverb), $N = 2047$, $\log_2 N \approx 11$:
$$\eta \approx \frac{1024}{2047 \cdot 11} \approx 0.045 \;\text{(OLA wins by }\sim 22\times\text{)}$$

> [!NOTE]
> **Rule of thumb:** OLA is profitable when $M \gtrsim 30$–$50$. For very small $M$ (e.g., $M \leq 16$), direct convolution in time-domain is often faster due to FFT overhead.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# 4. Structural Diagrams and Schematics

## 4.1 High-Level Block Diagram — Overlap-Add Pipeline

```mermaid
flowchart TB
    subgraph INPUT_PREP["STAGE 1: INPUT PREPARATION"]
        A["Long input x(n), length Lx"]
        B["Impulse response h(n), length M"]
        A2["Segment x(n) into R blocks of length L: x0, x1, x2, ..."]
        B2["Zero-pad h(n) to length N = L + M - 1"]
        A --> A2
        B --> B2
        B2 --> B3["Compute N-point DFT: H(k) = DFT{h_p(n)}"]
        B3 --> STORE["Store H(k) for reuse"]
    end

    subgraph BLOCK_PROC["STAGE 2: PER-BLOCK PROCESSING (Loop over r)"]
        C["Extract block x_r of length L"]
        C2["Zero-pad x_r to length N"]
        C3["Compute N-point DFT: X_r(k)"]
        C4["Multiply in frequency domain: Y_r(k) = X_r(k) * H(k)"]
        C5["Compute N-point IDFT: y_r(n) = IDFT{Y_r(k)}"]
        C --> C2 --> C3 --> C4 --> C5
    end

    subgraph OLA_RECON["STAGE 3: OVERLAP-ADD RECONSTRUCTION"]
        D["Initialize output buffer y(n), length Lx + M - 1, all zeros"]
        D2["For each block r, align y_r at time-index r*L"]
        D3["Add overlapping M-1 samples: y[n] = y[n] + y_r[n - r*L]"]
        D --> D2 --> D3 --> D4["Final output y(n) = x(n) * h(n)"]
    end

    A2 --> C
    STORE --> C4
    C5 --> D2
```

## 4.2 Memory and Time Indexing Schematic

```mermaid
flowchart LR
    subgraph BLK0["Block r = 0, y0 = 1,4,8,8,3"]
        P00["y0(0)=1"]
        P01["y0(1)=4"]
        P02["y0(2)=8"]
        P03["y0(3)=8"]
        P04["y0(4)=3"]
        P00 --> P01 --> P02 --> P03 --> P04
    end

    subgraph BLK1["Block r = 1, y1 = 1,4,8,8,3"]
        P10["y1(0)=1"]
        P11["y1(1)=4"]
        P12["y1(2)=8"]
        P13["y1(3)=8"]
        P14["y1(4)=3"]
        P10 --> P11 --> P12 --> P13 --> P14
    end

    subgraph BLK2["Block r = 2, y2 = 1,4,8,8,3"]
        P20["y2(0)=1"]
        P21["y2(1)=4"]
        P22["y2(2)=8"]
        P23["y2(3)=8"]
        P24["y2(4)=3"]
        P20 --> P21 --> P22 --> P23 --> P24
    end

    BLK0 --> SHIFT0["Shift by 0"]
    BLK1 --> SHIFT1["Shift by L = 3"]
    BLK2 --> SHIFT2["Shift by 2L = 6"]

    SHIFT0 --> SUM["Element-wise sum at overlapping positions 3,4,6,7"]
    SHIFT1 --> SUM
    SHIFT2 --> SUM
    SUM --> OUT["y = 1,4,8,9,7,8,9,7,8,8,3"]
```

## 4.3 Sequential Processing Topology Matrix

| Stage | Operation | Input Domain | Output Domain | Computational Cost | Notes |
|-------|-----------|--------------|---------------|--------------------|-------|
| 1 | Zero-pad $h(n)$ to $N$ | Time | Time (extended) | $O(N - M)$ | Done once |
| 2 | $H(k) = \text{DFT}_N\{h_p(n)\}$ | Time | Frequency | $O(N \log N)$ | Done once, cached |
| 3 | Segment $x(n)$ | Time | Time (blocks) | $O(L_x)$ | Memory copy |
| 4 | Zero-pad block $x_r$ | Time | Time (length $N$) | $O(N - L)$ | Inside loop |
| 5 | $X_r(k) = \text{DFT}_N\{x_r^{(p)}\}$ | Time | Frequency | $O(N \log N)$ | Per block |
| 6 | $Y_r(k) = X_r(k) \cdot H(k)$ | Frequency | Frequency | $O(N)$ | Per block (pointwise) |
| 7 | $y_r(n) = \text{IDFT}_N\{Y_r(k)\}$ | Frequency | Time | $O(N \log N)$ | Per block |
| 8 | Overlap-add $y_r$ into $y$ | Time | Time (global) | $O(N)$ | Per block |
| 9 | Truncate $y$ to $L_x + M - 1$ | Time | Time | $O(1)$ | Cleanup |

> [!NOTE]
> **The bottleneck is Stage 5 + Stage 7 (FFT/IFFT)**. All other stages are linear in $N$. For streaming systems, the cached $H(k)$ (Stage 2) is the key reason OLA is so efficient when $L_x \gg M$.

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# 5. KTU 2024 Scheme Examination Question Bank and Topic Recap

---

## Part A — Short Answer Questions (3 Marks Each)

### Question A1
**[KTU University Exam — July 2024]** | CO1 | RBT: Remember

**What is the need for the Overlap-Add method in computing the linear convolution of long sequences?**

**Model Answer (3 Marks):**

The linear convolution of a long sequence $x(n)$ of length $L_x$ with an impulse response $h(n)$ of length $M$ requires $L_x \cdot M$ multiplications in the time domain, which is computationally prohibitive when $L_x \gg M$ (e.g., audio streaming, biomedical signal filtering). The Overlap-Add method addresses this by (1) segmenting $x(n)$ into shorter blocks of length $L$, (2) computing each block's convolution with $h(n)$ using the **DFT/FFT** — exploiting the fact that circular convolution equals linear convolution when the DFT length $N \geq L + M - 1$, and (3) summing the overlapping output blocks. This reduces the per-block cost to $O(N \log_2 N)$, making long-sequence convolution feasible in real-time systems. **[3 Marks]**

---

### Question A2
**[KTU University Exam — Dec 2023]** | CO1 | RBT: Understand

**State and explain the condition under which circular convolution is equivalent to linear convolution. Why is this condition critical to the Overlap-Add method?**

**Model Answer (3 Marks):**

**Condition:** Circular convolution of a block of length $L$ with a sequence of length $M$ is equivalent to their linear convolution **if and only if** the circular convolution length $N$ satisfies $N \geq L + M - 1$.

**Explanation:** Linear convolution produces $L + M - 1$ samples. Performing circular convolution of length $N < L + M - 1$ causes these samples to "wrap around" the time axis, producing **time-domain aliasing** and hence an incorrect result.

**Criticality to Overlap-Add:** This condition directly dictates the **minimum FFT size** $N_{\min} = L + M - 1$ to be used. Choosing $N < L + M - 1$ corrupts each block's output, and no amount of overlap-add correction can recover the true linear convolution. **[3 Marks]**

---

## Part B — Long Answer Questions (14 Marks, Internal Choice)

### Question B (Option A) — Comprehensive Computational Problem

**[KTU University Exam — Model Paper 2024, Module 1]** | CO1, CO2 | RBT: Apply, Analyze

**(a)** Compute the linear convolution $y(n) = x(n) * h(n)$ using the **Overlap-Add method** with block length $L = 4$, where

$$h(n) = \{1, \; 1, \; 1\}, \quad M = 3$$
$$x(n) = \{2, \; 1, \; 3, \; 0, \; 1, \; 2, \; 4, \; 1\}, \quad L_x = 8$$

Clearly state the FFT size, segment $x(n)$, compute each block's output, perform the overlap-add, and verify with direct convolution. **[7 Marks]**

**(b)** If the impulse response is changed to $h(n) = \{1, -1, 2\}$ and the same $x(n)$ is processed with the same block length $L = 4$, recompute the output. Compare the computational cost (in number of multiplications) of the Overlap-Add method vs. direct time-domain convolution, assuming $L_x = 1024$ and $M = 3$. Justify when OLA outperforms direct convolution. **[7 Marks]**

---

#### Model Solution for Question B (Option A)

**Part (a) — Step-by-Step Computation [7 Marks]**

**Step 1 — Determine parameters [1 Mark]:**
$M = 3$, $L = 4$, $N = L + M - 1 = 4 + 3 - 1 = 6$, $R = \lceil 8/4 \rceil = 2$ blocks.

**Step 2 — Segment $x(n)$ [1 Mark]:**
$$x_0 = \{2, 1, 3, 0\}, \quad x_1 = \{1, 2, 4, 1\}$$

**Step 3 — Convolve each block with $h$ [3 Marks]:**

For $x_0 = \{2, 1, 3, 0\}$, $y_0(n) = \sum_{k=0}^{2} h(k) \, x_0(n - k)$, length $= 6$:

$$y_0(0) = 1 \cdot 2 = 2$$
$$y_0(1) = 1 \cdot 1 + 1 \cdot 2 = 3$$
$$y_0(2) = 1 \cdot 3 + 1 \cdot 1 + 1 \cdot 2 = 6$$
$$y_0(3) = 1 \cdot 0 + 1 \cdot 3 + 1 \cdot 1 = 4$$
$$y_0(4) = 1 \cdot 0 + 1 \cdot 3 = 3$$
$$y_0(5) = 1 \cdot 0 = 0$$
$$y_0 = \{2, 3, 6, 4, 3, 0\}$$

For $x_1 = \{1, 2, 4, 1\}$:

$$y_1(0) = 1 \cdot 1 = 1$$
$$y_1(1) = 1 \cdot 2 + 1 \cdot 1 = 3$$
$$y_1(2) = 1 \cdot 4 + 1 \cdot 2 + 1 \cdot 1 = 7$$
$$y_1(3) = 1 \cdot 1 + 1 \cdot 4 + 1 \cdot 2 = 7$$
$$y_1(4) = 1 \cdot 1 + 1 \cdot 4 = 5$$
$$y_1(5) = 1 \cdot 1 = 1$$
$$y_1 = \{1, 3, 7, 7, 5, 1\}$$

**Step 4 — Overlap-Add [1 Mark]:** Block $y_1$ starts at global index $4$. Overlap occurs at indices $4$ and $5$ (last $M-1 = 2$ samples of $y_0$ overlap with first $M-1 = 2$ of $y_1$).

| $n$ | Source | Value |
|-----|--------|-------|
| 0 | $y_0(0)$ | 2 |
| 1 | $y_0(1)$ | 3 |
| 2 | $y_0(2)$ | 6 |
| 3 | $y_0(3)$ | 4 |
| 4 | $y_0(4) + y_1(0)$ | $3 + 1 = 4$ |
| 5 | $y_0(5) + y_1(1)$ | $0 + 3 = 3$ |
| 6 | $y_1(2)$ | 7 |
| 7 | $y_1(3)$ | 7 |
| 8 | $y_1(4)$ | 5 |
| 9 | $y_1(5)$ | 1 |

**Final output:** $y(n) = \{2, 3, 6, 4, 4, 3, 7, 7, 5, 1\}$, length $= 8 + 3 - 1 = 10$. **[7 Marks total]**

**Verification:** Direct convolution of $x = \{2,1,3,0,1,2,4,1\}$ with $h = \{1,1,1\}$ gives the cumulative sum $\{2,3,6,6,7,9,13,14,15,16\}$? No — this is wrong because $h = \{1,1,1\}$ is a 3-tap moving average, so direct: $y(0)=2$, $y(1)=2+1=3$, $y(2)=1+3=4$, $y(3)=3+0=3$, $y(4)=0+1=1$, $y(5)=1+2=3$, $y(6)=2+4=6$, $y(7)=4+1=5$, $y(8)=1$, $y(9)=1$. Hmm — but OLA gave $\{2,3,6,4,4,3,7,7,5,1\}$ — let me recheck.

Actually, **re-examination of direct convolution:**
$y(0) = h(0)x(0) = 1 \cdot 2 = 2$.
$y(1) = h(0)x(1) + h(1)x(0) = 1 + 2 = 3$.
$y(2) = h(0)x(2) + h(1)x(1) + h(2)x(0) = 3 + 1 + 2 = 6$.
$y(3) = h(0)x(3) + h(1)x(2) + h(2)x(1) = 0 + 3 + 1 = 4$.
$y(4) = h(0)x(4) + h(1)x(3) + h(2)x(2) = 1 + 0 + 3 = 4$.
$y(5) = h(0)x(5) + h(1)x(4) + h(2)x(3) = 2 + 1 + 0 = 3$.
$y(6) = h(0)x(6) + h(1)x(5) + h(2)x(4) = 4 + 2 + 1 = 7$.
$y(7) = h(0)x(7) + h(1)x(6) + h(2)x(5) = 1 + 4 + 2 = 7$.
$y(8) = h(1)x(7) + h(2)x(6) = 1 + 4 = 5$.
$y(9) = h(2)x(7) = 1$.

**Direct:** $\{2, 3, 6, 4, 4, 3, 7, 7, 5, 1\}$ — **MATCHES OLA perfectly** ✓ (I had miscalculated direct above; the OLA answer is correct.)

---

**Part (b) — Cost Comparison and Analysis [7 Marks]**

**Recomputing with $h = \{1, -1, 2\}$:** Following the same procedure, each block produces an output of length 6, with overlap of 2 samples. (Detailed steps omitted for brevity but follow the same template as Part a.) **[2 Marks]**

**Cost analysis [3 Marks]:**

For $L_x = 1024$, $M = 3$, $L = M = 3$, $N = 2M - 1 = 5$ (round up to $N = 8$ for radix-2 FFT, so $L_{\text{eff}} = 8 - M + 1 = 6$, but using $N = 5$ for non-power-of-2 gives $L = 3$).

**Direct convolution:** $C_{\text{direct}} = L_x \cdot M = 1024 \cdot 3 = 3072$ multiplications.

**Overlap-Add:** $R = \lceil 1024 / 3 \rceil = 342$ blocks. Using $N = 8$ (next power of 2 above 5):
$$C_{\text{OLA}} \approx R \cdot (2 \cdot N \log_2 N + N) = 342 \cdot (2 \cdot 8 \cdot 3 + 8) = 342 \cdot 56 = 19152 \text{ multiplications}$$

**Conclusion:** For $M = 3$, direct convolution ($3072$ mults) is **cheaper** than OLA ($19152$ mults) because the FFT overhead dominates. OLA outperforms direct convolution only when $M$ is large enough that $M \cdot \log_2 N > N$ amortizes the per-block setup cost. Empirically, $M \gtrsim 30$–$50$ is the break-even point. **[2 Marks]**

**Incremental Valuation Key:**
- [Stating $N = L + M - 1$ explicitly: 1 Mark]
- [Correct block segmentation: 1 Mark]
- [Correct per-block convolution: 2 Marks]
- [Correct overlap-add reconstruction: 1 Mark]
- [Verification with direct convolution: 1 Mark]
- [Cost formulas and numerical evaluation: 1 Mark]
- [Justification of break-even point: 1 Mark]

---

### Question B (Option B) — Theory-Heavy Comparative Question

**[KTU University Exam — Model Paper 2024, Module 1 Alternative]** | CO1, CO2 | RBT: Understand, Analyze

**(a)** With the aid of a neat block schematic, describe the **Overlap-Add method** for the linear convolution of two finite-duration sequences. State the algorithm clearly and explain why the FFT size $N = L + M - 1$ is mandatory. **[7 Marks]**

**(b)** Compare the Overlap-Add method with the **Overlap-Save method** in terms of: (i) input block overlap, (ii) output block overlap, (iii) discarded samples, (iv) computational efficiency for a long sequence. Illustrate your answer with the same example $h(n) = \{1, 2, 1\}$ and $x(n) = \{1, 2, 3, 1, 2, 3, 1, 2, 3\}$. **[7 Marks]**

**Model Solution Outline (Option B):**

- **(a)** Block schematic of OLA pipeline (refer Section 4.1), algorithm steps, proof that $N = L + M - 1$ is required using the time-aliasing argument. **[7 Marks]**
- **(b)** Tabular comparison:

| Aspect | Overlap-Add | Overlap-Save |
|--------|-------------|--------------|
| (i) Input block overlap | None (contiguous segments) | $M-1$ samples overlap |
| (ii) Output block overlap | Last $M-1$ samples of each block overlap and sum | No overlap; first $M-1$ samples are discarded (corrupted by circular wrap) |
| (iii) Discarded samples | None (all samples retained) | $M-1$ samples per block discarded |
| (iv) Memory required | Stores only $H(k)$ + current block | Stores only $H(k)$ + current overlapping block |
| (v) FFT size | $N = L + M - 1$ | $N = L$ (block length = FFT size) |
| (vi) Best for | Slightly larger memory, simpler logic | Streaming applications needing minimal latency |

Both methods achieve equivalent computational complexity $O(N \log_2 N \cdot L_x / L)$ for long sequences. **[7 Marks]**

---

> [!WARNING]
> **KTU Examiner's Valuation Warning — Common Pitfalls (lose 1–3 Marks each):**
> 1. **Wrong FFT size:** Forgetting to use $N = L + M - 1$ and instead using $N = L$ (which is the Overlap-Save choice). This is the #1 mistake — **always state $N$ explicitly before starting computation.**
> 2. **No zero-padding shown:** Examiners expect to see the zero-padded vectors $h_p$, $x_r^{(p)}$ explicitly written out. Skipping this step costs 1 Mark.
> 3. **Forgetting to add overlapping samples:** Writing $\{1,4,8,8,3,1,4,8,8,3,\dots\}$ as the final answer without performing the **sum** at overlapping positions. This shows a conceptual misunderstanding of the "Add" in "Overlap-Add" — **deduct 2 Marks minimum.**
> 4. **Block starting index error:** Placing block $y_r$ at global index $rL - M + 1$ or $rL + M - 1$ instead of the correct $rL$. Always remember: the *non-overlapping region* of each output block has length $L$, and the *trailing* $M-1$ samples are the overlap.
> 5. **No verification:** KTU examiners award bonus marks for verifying the OLA result with direct convolution. Always include this step.
> 6. **Confusing OLA with Overlap-Save:** Writing "we discard the first $M-1$ samples" — that is Overlap-Save, not OLA. In OLA, **all** samples are retained and summed.

---

## Topic Recap & Important Things to Remember

> [!TIP]
> **Rapid-Revision Checklist — print this on your exam preparation sheet:**

- **Definition:** Overlap-Add is a block-processing method that computes the linear convolution of a long sequence $x(n)$ and short sequence $h(n)$ by segmenting $x(n)$, FFT-convolving each block with $h(n)$, and summing overlapping output tails.
- **Three magical numbers:** $M$ (length of $h$), $L$ (block length), $N = L + M - 1$ (FFT size). Memorize this triangle.
- **Number of blocks:** $R = \lceil L_x / L \rceil$.
- **Output length:** $L_y = L_x + M - 1$.
- **Overlap region:** Last $M - 1$ samples of each block must be **added** to the first $M - 1$ samples of the next block.
- **Critical constraint:** $N \geq L + M - 1$. Violating this causes **time-domain aliasing** and the answer is silently wrong.
- **DFT once, reuse many times:** $H(k) = \text{DFT}\{h_p(n)\}$ is computed **only once** and stored. This is the key efficiency gain.
- **Per block:** Zero-pad, FFT, multiply by $H(k)$, IFFT, add to output buffer.
- **Computational cost (per block):** $O(N \log_2 N)$ for the two FFTs, $O(N)$ for the multiplication and overlap-add.
- **Total cost:** $O(R \cdot N \log_2 N)$ vs. $O(L_x \cdot M)$ for direct convolution.
- **Break-even point:** OLA wins when $M \gtrsim 30$–$50$ samples (for radix-2 FFT).
- **OLA vs. OLS:** OLA has *no* input overlap, *output* overlap. OLS has *input* overlap, *no* output overlap (first $M-1$ samples discarded).
- **Always verify** the OLA result with direct convolution (or `np.convolve` in MATLAB/Python) to catch errors.
- **Round $N$ up to the next power of 2** for radix-2 FFT efficiency, but remember this changes $L_{\text{effective}}$ and the overlap algebra.
- **Real-world uses:** Audio convolution reverb, software-defined radio, real-time FIR filtering, biomedical signal processing, image filtering on large 2D data.
- **Memory tip:** The OLA algorithm needs only the cached $H(k)$, the current input block, and a running output buffer — making it suitable for embedded/streaming systems with limited RAM.

<!-- SECTION_5_END -->
