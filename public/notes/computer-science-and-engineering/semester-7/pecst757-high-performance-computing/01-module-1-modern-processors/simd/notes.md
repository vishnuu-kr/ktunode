# SIMD

<!-- SECTION_1_START -->

# SIMD — Single Instruction, Multiple Data

## 1.1 Formal Academic Definition (KTU 2024 Syllabus)

> [!IMPORTANT]
> **SIMD (Single Instruction, Multiple Data)** is a parallel computing architectural paradigm classified under **Flynn's Taxonomy (1966)** in which **one single control unit dispatches a single instruction** that is executed **synchronously across multiple processing elements (lanes)** operating on **distinct data items** drawn from a packed vector register, all within a **single clock cycle (or a small fixed number of cycles)**.

In modern CPUs, SIMD manifests as **vector extensions** — short, fixed-width vector registers (e.g., **128-bit XMM**, **256-bit YMM**, **512-bit ZMM** in Intel; **128-bit V** in ARM **NEON/SVE**) that hold multiple scalar operands packed together. A single instruction (e.g., `VADDPS`) performs pairwise arithmetic on every lane simultaneously.

### Key Terminology You Must Know

| Term | Definition |
|---|---|
| **Vector Register** | Wide register (128/256/512-bit) holding N packed operands |
| **Lane** | One of the N parallel functional units that operate on packed data |
| **Vector Length (VL)** | Number of scalar elements packed in a vector register |
| **Vector Length Register (VL)** | Architectural register controlling active lanes in scalable vectors (RISC-V V, ARM SVE) |
| **Predication / Masking** | Per-lane conditional execution to disable selected lanes |
| **SIMD Width** | Bit-width of the vector register (e.g., 256-bit AVX2) |
| **Saturated Arithmetic** | Overflow clamps to min/max representable value (common in DSP/NEON) |
| **Horizontal Reduction** | Operation that collapses a vector into a scalar (e.g., `sum`, `max`) |

## 1.2 Intuitive Analogy — The Bakery Analogy

Imagine a **baker** with **8 ovens** (lanes). The baker gives **one command** — *"Set temperature to 180 °C!"* — and **all 8 ovens** simultaneously respond. One instruction, eight simultaneous reactions on eight different cakes (data). This is **SIMD**.

Compare with **SISD** (one oven, one cake at a time) and **MIMD** (8 bakers, each with their own oven, each doing a *different* recipe). SIMD is the sweet spot for **data-parallel** workloads like image processing, ML convolutions, and scientific simulations.

> [!NOTE]
> **Historical Footnote:** The first commercial SIMD machine was the **ILLIAC IV (1975)** with 64 processing elements. Modern incarnations live inside your **x86 CPU** (SSE, AVX, AVX-512) and **GPU shader cores**.

## 1.3 Flynn's Taxonomy Placement

```
                Single Instruction      Multiple Instruction
Single Data     SISD (Classic CPU)      MISD (Rare: fault-tolerant)
Multiple Data   SIMD (Vector/GPU)       MIMD (Multicore, Clusters)
```

> [!TIP]
> In KTU board answers, always **draw the 2×2 table** and **bold the SIMD cell** — examiners love this.

## 1.4 Visualization Block

> [!VISUALIZATION CONTROL]
> **Concept:** SIMD vector addition of two arrays of 4 floats using a 128-bit register
> **GeoGebra / Desmos Input:**
> * `Vector A = {2, 4, 6, 8}` (packed in XMM0)
> * `Vector B = {1, 1, 1, 1}` (packed in XMM1)
> * `C[i] = A[i] + B[i]` for `i = 1, 2, 3, 4`
> **Visual Description:** Plot 4 colored arrows for A, 4 dashed arrows for B, and 4 result arrows for C — all additions happen in **one instruction** across **4 parallel lanes**.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Anatomy of a SIMD Instruction

A typical SIMD instruction pipeline:

1. **Fetch** — single 64-byte instruction cache line carries the vector opcode.
2. **Decode** — control unit identifies packed operand count and data type.
3. **Read Operands** — one or two wide vector registers (e.g., 256-bit YMM) are read.
4. **Execute** — N parallel ALUs (lanes) operate on N scalar slices.
5. **Write-Back** — results packed back into a destination vector register.
6. **Predicate Apply** — masked lanes may be zeroed (merge) or frozen (zeroing).

## 2.2 SIMD Widths Across Generations

| ISA Extension | Register | Bits | float32 Lanes | int32 Lanes | Year |
|---|---|---|---|---|---|
| **MMX** | MM0–MM7 | 64 | — | 8 (int8) | 1996 |
| **SSE** | XMM0–XMM7 | 128 | 4 | 4 | 1999 |
| **SSE2 / SSE4** | XMM0–XMM15 | 128 | 4 | 4 | 2001/2008 |
| **AVX** | YMM0–YMM15 | 256 | 8 | 8 | 2011 |
| **AVX2** | YMM0–YMM15 | 256 | 8 | 8 | 2013 |
| **AVX-512** | ZMM0–ZMM31 | 512 | 16 | 16 | 2016 |
| **NEON** (ARM) | Q0–Q15 | 128 | 4 | 4 | 2004 |
| **SVE / SVE2** (ARM) | Z0–Z31 | 128–2048 | scalable | scalable | 2016/2019 |
| **RISC-V V** | V0–V31 | scalable | scalable | scalable | 2020+ |

## 2.3 Why SIMD Wins — The Performance Logic

- **ILP (Instruction-Level Parallelism)** is harnessed *implicitly* by the hardware.
- **Fetch/Decode overhead** is amortized — one decoded instruction does 4×–16× work.
- **Power efficiency** improves because the control logic is shared across lanes.
- **Cache friendliness** — vector loads are contiguous, exploiting spatial locality.

## 2.4 KTU Formula Sheet / Cheat Sheet

> [!IMPORTANT]
> Memorize the formulas below — they appear in **derivation problems** every KTU exam cycle.

| Concept | Formula | Meaning |
|---|---|---|
| **SIMD Theoretical Speedup** | $S = \dfrac{N \cdot f_{scalar}}{f_{vector}}$ | N = number of lanes, f = frequency |
| **Speedup w/ Packed Data** | $S_{SIMD} = \dfrac{n \cdot T_{scalar}}{T_{vector} + T_{overhead}}$ | T_overhead = gather/scatter, mask setup |
| **Amdahl's Law (vector portion)** | $S_{total} = \dfrac{1}{(1 - p) + \dfrac{p}{S_{SIMD}}}$ | p = fraction of code vectorized |
| **Vector Length (VL)** | $VL = \dfrac{W_{reg}}{W_{element}}$ | W_reg = register width, W_element = element width |
| **Roofline Compute Bound** | $\text{Performance} = \min(\pi, \beta \cdot I)$ | π = peak FLOP/s, β = bandwidth, I = intensity |
| **Data Reuse Factor** | $DR = \dfrac{M \cdot N}{\text{loads of operands}}$ | Higher DR ⇒ better SIMD efficiency |
| **Mask Latency Penalty** | $T_{masked} = T_{exec} \cdot (1 + \alpha \cdot p_{mask})$ | α = penalty constant (~0.05–0.15) |
| **Energy per Op (SIMD vs Scalar)** | $E_{SIMD} = \dfrac{E_{fetch+decode} + N \cdot E_{lane}}{N}$ | Amortized control cost over N lanes |
| **Throughput** | $\Theta = \dfrac{N \cdot \text{ops}}{t_{cycle}}$ | ops per cycle (e.g., 32 fp32 ops/cycle for AVX-512) |
| **SIMD Efficiency** | $\eta = \dfrac{\text{useful lanes active}}{\text{total lanes}} \cdot 100\%$ | Drops at loop tails and conditional branches |

## 2.5 Real-World Engineering Utility

| Domain | Where SIMD is Deployed |
|---|---|
| **Machine Learning** | Convolution kernels, GEMM (cuBLAS, oneDNN) |
| **Image/Video Processing** | JPEG decode, H.264/HEVC motion estimation |
| **Scientific HPC** | LINPACK, molecular dynamics (NAMD, GROMACS) |
| **Cryptography** | AES-NI, SHA extensions, ChaCha20 |
| **Databases** | Vectorized query execution (DuckDB, Apache Arrow) |
| **DSP / Audio** | FIR filters, FFT butterflies, MP3 decode |
| **GPGPU** | CUDA `float4`, Vulkan `vec4`, Metal SIMD groups |

> [!TIP]
> **KTU Examiner Tip:** Always mention at least **one industry use case** (e.g., *"SIMD AVX-512 is used in Intel oneDNN for 2×–4× speedup of convolution layers in CNN inference"*). It shows applied awareness.

## 2.6 Vector vs SIMD — Terminology Distinction

| Aspect | **Vector Processor** (old) | **SIMD Extensions** (modern CPU) |
|---|---|---|
| Register size | 64–256 words, scalable VL | Fixed 128/256/512-bit |
| Memory model | Strided/scatter-gather hw | Strided/scatter-gather via instructions |
| Length | Programmable VL register | Hard-coded by ISA |
| Example | Cray-1, NEC SX-Aurora | SSE, AVX, NEON, SVE |

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# Step-by-Step Derivations & Code Implementation

## 3.1 Derivation 1 — Theoretical Speedup of SIMD

**Problem:** A scalar kernel runs in 10 ms. A SIMD version packs 8 elements per instruction and runs in 2 ms (excluding loop tail). Compute theoretical speedup.

**Given:**
* Scalar time $T_s = 10 \text{ ms}$
* SIMD width $N = 8$ lanes
* SIMD time $T_v = 2 \text{ ms}$
* Loop tail (remainder) $T_{tail} = 0.1 \text{ ms}$

**Step 1 — Amdahl's vector fraction:**
Assume $90\%$ of time is vectorizable, $10\%$ is scalar (loop setup, tails).

$$p = 0.9, \quad 1 - p = 0.1$$

**Step 2 — Intrinsic SIMD gain:**
$$\text{Theoretical gain from 8 lanes} = \frac{N \cdot T_{scalar\_portion}}{T_{vector}} = \frac{8 \cdot 0.9 \cdot 10}{2 \cdot 0.9} = \frac{72}{1.8} = 40 \times$$

Wait — let us be more careful. The actual observed ratio:

$$S_{SIMD} = \frac{T_{scalar}}{T_{vector}} = \frac{10}{2} = 5 \times$$

**Step 3 — Apply Amdahl's Law to factor the scalar tail:**

$$S_{total} = \frac{1}{(1 - p) + \dfrac{p}{S_{SIMD}}} = \frac{1}{0.1 + \dfrac{0.9}{5}} = \frac{1}{0.1 + 0.18} = \frac{1}{0.28}$$

$$S_{total} \approx 3.57 \times$$

**Step 4 — Final practical result:**

$$\boxed{S_{total} \approx 3.57 \times \text{ speedup, limited by the 10\% scalar portion}}$$

> **Interpretation:** Even though the SIMD hardware can do 8× work per cycle, the **scalar tail (loop remainder, conditionals, I/O)** caps real speedup at 3.57×. This is the **#1 KTU question pattern** on SIMD.

## 3.2 Derivation 2 — Roofline Model for SIMD Kernel

**Problem:** A kernel performs 256 FLOPs per 32 bytes loaded. SIMD peak = 64 GFLOP/s. Memory bandwidth = 32 GB/s. Find the achievable performance.

**Step 1 — Compute arithmetic intensity:**

$$I = \frac{\text{FLOPs}}{\text{Bytes loaded}} = \frac{256}{32} = 8 \text{ FLOP/byte}$$

**Step 2 — Memory-bound ceiling:**

$$P_{mem} = \beta \cdot I = 32 \text{ GB/s} \cdot 8 \text{ FLOP/byte} = 256 \text{ GFLOP/s}$$

**Step 3 — Compare to compute peak:**

$$P_{peak} = 64 \text{ GFLOP/s}, \quad P_{mem} = 256 \text{ GFLOP/s}$$

**Step 4 — Choose the minimum (Roofline):**

$$P_{achievable} = \min(P_{peak}, P_{mem}) = \min(64, 256) = 64 \text{ GFLOP/s}$$

**Step 5 — Conclusion:**

$$\boxed{P_{achievable} = 64 \text{ GFLOP/s, kernel is compute-bound}}$$

## 3.3 Derivation 3 — Masking Penalty

**Problem:** A SIMD loop processes 1000 elements with a 128-bit register (4 int32 lanes). 30% of iterations use masking. Compute throughput.

**Step 1 — Total iterations:**

$$\text{Iters} = \frac{1000}{4} = 250 \text{ vector iterations}$$

**Step 2 — Masked iterations:**

$$I_{mask} = 0.3 \cdot 250 = 75 \text{ iterations}$$

**Step 3 — Penalty per masked iteration $\alpha = 0.1$:**

$$T_{masked} = T_{unmasked} \cdot (1 + \alpha) = 1.1 \text{ cycles}$$

**Step 4 — Total cycles:**

$$T_{total} = 175 \cdot 1.0 + 75 \cdot 1.1 = 175 + 82.5 = 257.5 \text{ cycles}$$

**Step 5 — Effective throughput:**

$$\Theta = \frac{1000 \text{ ops}}{257.5 \text{ cycles}} \approx 3.88 \text{ ops/cycle}$$

$$\boxed{\Theta \approx 3.88 \text{ ops/cycle (vs ideal 4.0)}}$$

## 3.4 Code Implementation — C with x86 Intrinsics

```c
/* SIMD Vector Addition: A[i] = B[i] + C[i] for i in [0, N)  */
#include <immintrin.h>   /* AVX intrinsics   */
#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>

/* Compile with:  gcc -O3 -mavx2 -march=native simd_add.c -o simd_add */

void vector_add_scalar(const float* A, const float* B, float* C, size_t n) {
    for (size_t i = 0; i < n; ++i) {
        C[i] = A[i] + B[i];
    }
}

void vector_add_avx(const float* A, const float* B, float* C, size_t n) {
    size_t i = 0;
    const size_t step = 8;  /* AVX: 8 floats per 256-bit register */

    /* Process 8 elements per iteration */
    for (; i + step <= n; i += step) {
        __m256 va = _mm256_loadu_ps(A + i);  /* unaligned load   */
        __m256 vb = _mm256_loadu_ps(B + i);
        __m256 vc = _mm256_add_ps(va, vb);   /* packed add       */
        _mm256_storeu_ps(C + i, vc);
    }

    /* Scalar tail for remainder (n % 8) */
    for (; i < n; ++i) {
        C[i] = A[i] + B[i];
    }
}

int main(void) {
    const size_t N = 1024;
    float* A = aligned_alloc(32, N * sizeof(float));
    float* B = aligned_alloc(32, N * sizeof(float));
    float* C = aligned_alloc(32, N * sizeof(float));

    for (size_t i = 0; i < N; ++i) {
        A[i] = (float)i;
        B[i] = (float)(2 * i);
    }

    vector_add_avx(A, B, C, N);
    printf("C[0]=%.1f  C[7]=%.1f  C[1023]=%.1f\n", C[0], C[7], C[1023]);

    free(A); free(B); free(C);
    return 0;
}
```

## 3.5 Code Implementation — ARM NEON (Mobile / Apple Silicon)

```c
/* SIMD Vector Addition using ARM NEON intrinsics  */
#include <arm_neon.h>
#include <stddef.h>

void vector_add_neon(const float32_t* A, const float32_t* B,
                     float32_t* C, size_t n) {
    size_t i = 0;
    const size_t step = 4;  /* NEON 128-bit: 4 floats */

    for (; i + step <= n; i += step) {
        float32x4_t va = vld1q_f32(A + i);
        float32x4_t vb = vld1q_f32(B + i);
        float32x4_t vc = vaddq_f32(va, vb);
        vst1q_f32(C + i, vc);
    }
    for (; i < n; ++i) {           /* scalar tail */
        C[i] = A[i] + B[i];
    }
}
```

## 3.6 Code Implementation — Portable C++ with std::experimental::simd (C++23 P1928)

```cpp
/* Portable SIMD using P1928 std::experimental::simd  */
#include <experimental/simd>
#include <iostream>
#include <vector>

namespace stdx = std::experimental;

void vector_add_portable(const std::vector<float>& a,
                         const std::vector<float>& b,
                         std::vector<float>& c) {
    using V = stdx::simd<float>;   /* auto-vectorized lane width */
    const std::size_t N = a.size();
    std::size_t i = 0;

    for (; i + V::size() <= N; i += V::size()) {
        V va(&a[i], stdx::element_aligned);
        V vb(&b[i], stdx::element_aligned);
        V vc = va + vb;
        vc.copy_to(&c[i], stdx::element_aligned);
    }
    for (; i < N; ++i) { c[i] = a[i] + b[i]; }  /* tail */
}
```

## 3.7 Code Implementation — Auto-Vectorization Friendly Loop

```c
/* Write loops so the compiler can auto-vectorize  */
void saxpy(const float* __restrict__ x, float a,
           const float* __restrict__ y, float* __restrict__ z, int n) {
    #pragma GCC ivdep              /* ignore possible aliasing  */
    #pragma GCC unroll 4
    for (int i = 0; i < n; ++i) {
        z[i] = a * x[i] + y[i];
    }
}
```

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# Structural Diagrams & Schematics

## 4.1 SIMD Execution Pipeline (Mermaid Flow)

<!-- mermaid -->
flowchart LR
    A["Instruction Fetch"]:::stage --> B["Instruction Decode"]:::stage
    B --> C["Read Vector Reg A"]:::lane
    B --> D["Read Vector Reg B"]:::lane
    C --> E["Lane 0 ALU"]:::lane
    C --> F["Lane 1 ALU"]:::lane
    C --> G["Lane 2 ALU"]:::lane
    C --> H["Lane 3 ALU"]:::lane
    D --> E
    D --> F
    D --> G
    D --> H
    E --> I["Pack Result Reg C"]:::stage
    F --> I
    G --> I
    H --> I
    I --> J["Apply Predicate Mask"]:::stage
    J --> K["Write Back to Vector Reg"]:::stage

    classDef stage fill:#1f3a5f,stroke:#fff,color:#fff
    classDef lane fill:#2e7d32,stroke:#fff,color:#fff
<!-- /mermaid -->

## 4.2 Block Diagram — SIMD Functional Unit

<!-- mermaid -->
flowchart TB
    subgraph CTRL["Control Unit"]
        CU["Single Instruction Decoder"]
    end

    subgraph VRF["Vector Register File 256-bit x 16"]
        Y0["YMM0"]
        Y1["YMM1"]
        Y2["YMM2"]
        Y3["YMM3"]
    end

    subgraph EXU["Parallel Execution Lanes"]
        L0["Lane 0: FP32 ALU"]
        L1["Lane 1: FP32 ALU"]
        L2["Lane 2: FP32 ALU"]
        L3["Lane 3: FP32 ALU"]
        L4["Lane 4: FP32 ALU"]
        L5["Lane 5: FP32 ALU"]
        L6["Lane 6: FP32 ALU"]
        L7["Lane 7: FP32 ALU"]
    end

    subgraph MASK["Mask Register k1"]
        MK["Per-lane Predicate Bits"]
    end

    CU --> VRF
    Y0 --> L0
    Y0 --> L1
    Y0 --> L2
    Y0 --> L3
    Y1 --> L4
    Y1 --> L5
    Y1 --> L6
    Y1 --> L7
    MK --> L0
    MK --> L1
    MK --> L2
    MK --> L3
    L0 --> Y2
    L1 --> Y2
    L2 --> Y2
    L3 --> Y2
    L4 --> Y3
    L5 --> Y3
    L6 --> Y3
    L7 --> Y3
<!-- /mermaid -->

## 4.3 SIMD vs MIMD Comparison Flow

<!-- mermaid -->
flowchart LR
    A["Workload: Element-wise add of 1024 floats"]:::in
    A --> B{"Parallelism Style?"}:::d
    B -->|One instr, many data| C["SIMD: 1024 / 8 = 128 instr"]:::simd
    B -->|Many instr, many data| D["MIMD: 1024 instr on 8 cores"]:::mimd
    C --> E["Shared Control Unit"]:::simd
    D --> F["Independent Cores"]:::mimd
    E --> G["Synchronous, Lockstep"]:::simd
    F --> H["Asynchronous, MIMD"]:::mimd

    classDef in fill:#37474f,color:#fff
    classDef d fill:#6a1b9a,color:#fff
    classDef simd fill:#1565c0,color:#fff
    classDef mimd fill:#c62828,color:#fff
<!-- /mermaid -->

## 4.4 Sequential Processing Topology Matrix — SIMD Memory Access

| Stage | Operation | Data Source | Lane Width | Bytes/Cycle |
|---|---|---|---|---|
| 1 | `vmovaps ymm0, [rsi]` | L1 Cache line | 256-bit | 32 |
| 2 | `vmovaps ymm1, [rdi]` | L1 Cache line | 256-bit | 32 |
| 3 | `vaddps ymm2, ymm0, ymm1` | VRF read | 256-bit | 32 |
| 4 | `vmovaps [rdx], ymm2` | L1 Cache line | 256-bit | 32 |
| **Total throughput** | — | — | — | **8 fp32 ops/cycle** |

## 4.5 Flynn's Taxonomy Visualization

<!-- mermaid -->
flowchart LR
    subgraph SISD["SISD"]
        S1["Single Instruction Stream"]
        S2["Single Data Stream"]
    end
    subgraph SIMD["SIMD"]
        M1["Single Instruction Stream"]
        M2["Multiple Data Stream"]
    end
    subgraph MISD["MISD"]
        I1["Multiple Instruction Stream"]
        I2["Single Data Stream"]
    end
    subgraph MIMD["MIMD"]
        N1["Multiple Instruction Stream"]
        N2["Multiple Data Stream"]
    end
<!-- /mermaid -->

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# KTU 2024 Scheme Examination Question Bank

## 5.1 Part A — Short Answer Questions (3 Marks Each)

### Question 1 [KTU University Exam — July 2023]
**Q: Define SIMD and state how it differs from MIMD with a one-line example for each.** *(CO1, Remember)*

**Model Answer:**

> **SIMD (Single Instruction, Multiple Data):** A parallel architecture in which a *single* control unit dispatches *one* instruction that operates *simultaneously* on multiple data elements packed in vector registers.
>
> **MIMD (Multiple Instruction, Multiple Data):** Multiple independent processors execute *different* instructions on *different* data at the same time.
>
> **Example — SIMD:** `VADDPS YMM0, YMM1, YMM2` adds 8 pairs of single-precision floats in one cycle.
> **Example — MIMD:** Core 0 runs a sorting routine while Core 1 runs matrix multiplication concurrently.

> [!TIP]
> **Valuation Key:** Definition: 1.5 marks • Difference: 1 mark • Example: 0.5 mark.

---

### Question 2 [KTU University Exam — Dec 2023]
**Q: List any three SIMD extensions used in modern processors with their bit-widths.** *(CO1, Remember)*

**Model Answer:**

| # | Extension | Register | Bit-Width | Vendor |
|---|---|---|---|---|
| 1 | **SSE** | XMM | 128 | Intel/AMD |
| 2 | **AVX2** | YMM | 256 | Intel/AMD |
| 3 | **AVX-512** | ZMM | 512 | Intel |
| 4 | **NEON** | Q | 128 | ARM |
| 5 | **SVE** | Z | 128–2048 | ARM |

> [!TIP]
> **Valuation Key:** Three correct entries with bit-width: 3 marks (1 mark each).

---

## 5.2 Part B — 14-Mark Questions (Module Internal Choice)

### **Question A [KTU University Exam — July 2024]**

**(a)** *(7 marks)* Explain the **SIMD execution model** with a neat block diagram. Discuss the role of **vector registers, lanes, and predicate masks** in modern x86 processors. *(CO1, CO2 — Understand)*

**(b)** *(7 marks)* Consider a kernel where **80%** of execution time is vectorizable with **AVX-512 (16 fp32 lanes)**. The SIMD version runs the vector portion **14× faster** than the scalar baseline, while the remaining 20% runs at the same speed as scalar. The total baseline scalar runtime is **100 ms**. Calculate the **overall speedup** and the **limiting factor**. *(CO3, CO4 — Apply)*

---

### **Solution to Question A(a) — 7 Marks**

**Step 1 — Define SIMD Execution Model (2 marks):**

> SIMD execution is a data-parallel model where **one instruction stream** drives **multiple processing lanes** that perform the **same operation** on **different data** drawn from packed vector registers, in a single instruction cycle.

**Step 2 — Architectural Components (3 marks):**

| Component | Role |
|---|---|
| **Vector Register File** | Stores 16/32 wide registers (YMM 256-bit, ZMM 512-bit) holding packed data |
| **Decode & Dispatch Unit** | Single decoder, single control flow |
| **N Parallel Lanes** | 8 (AVX) or 16 (AVX-512) independent FP/INT ALUs operating in lockstep |
| **Predicate Mask Register (k1–k7)** | 16/64-bit mask disabling individual lanes; enables conditional SIMD |
| **Load/Store Unit** | Aligned / unaligned packed memory accesses (vmovaps, vmovups) |
| **Shuffle Unit** | In-lane data rearrangement (vpermilps, vshufps) |

**Step 3 — Block Diagram (2 marks):** *(refer to Section 4.2 mermaid block)*

```
[Instr] → [Decoder] → [YMM Reg File] → [16 Lanes] → [k-Mask] → [YMM Write-Back]
```

> **Valuation Key:** Definition: 2 marks • Component table: 3 marks • Diagram: 2 marks.

---

### **Solution to Question A(b) — 7 Marks**

**Given:**
* Vectorizable fraction $p = 0.80$
* Scalar fraction $1 - p = 0.20$
* SIMD speedup on vector portion $S_{SIMD} = 14\times$
* Total scalar baseline $T_s = 100$ ms

**Step 1 — Decompose baseline runtime (1 mark):**

$$T_{vector} = p \cdot T_s = 0.80 \cdot 100 = 80 \text{ ms}$$

$$T_{scalar} = (1 - p) \cdot T_s = 0.20 \cdot 100 = 20 \text{ ms}$$

**Step 2 — Compute vectorized runtime (1 mark):**

$$T'_{vector} = \frac{T_{vector}}{S_{SIMD}} = \frac{80}{14} \approx 5.714 \text{ ms}$$

**Step 3 — Total new runtime (1 mark):**

$$T_{new} = T'_{vector} + T_{scalar} = 5.714 + 20 = 25.714 \text{ ms}$$

**Step 4 — Overall speedup (2 marks):**

$$S_{total} = \frac{T_s}{T_{new}} = \frac{100}{25.714} \approx 3.89 \times$$

**Step 5 — Apply Amdahl's Law for verification (1 mark):**

$$S_{total} = \frac{1}{(1 - p) + \dfrac{p}{S_{SIMD}}} = \frac{1}{0.20 + \dfrac{0.80}{14}} = \frac{1}{0.20 + 0.0571} = \frac{1}{0.2571}$$

$$S_{total} \approx 3.89 \times$$

**Step 6 — Limiting Factor (1 mark):**

> **Limiting Factor:** The **20% scalar portion** (loop tails, I/O, scalar reductions) caps the achievable speedup well below the 14× hardware peak. The maximum theoretical speedup even with infinite SIMD is:
> $$S_{max} = \frac{1}{1 - p} = \frac{1}{0.20} = 5 \times$$

$$\boxed{S_{total} \approx 3.89 \times, \text{ bounded by the 20\% scalar tail}}$$

---

### **Question B [KTU University Exam — Dec 2024 — Alternative Choice]**

**(a)** *(7 marks)* With the help of **Flynn's Taxonomy**, classify SIMD and explain the architectural reasons why **GPUs are massive SIMD/SPMD engines**. *(CO1, CO2 — Understand)*

**(b)** *(7 marks)* A scientific code has a **hot loop** performing **vector addition** of two float arrays of size **N = 4096**. Using **AVX (256-bit, 8 fp32 lanes)**, compute the **number of vector iterations**, the **speedup** over scalar (assuming no overhead), and the **Roofline-limited performance** if the kernel's arithmetic intensity is **4 FLOP/byte** and memory bandwidth is **20 GB/s**, while SIMD peak compute is **50 GFLOP/s**. *(CO3, CO4 — Apply)*

---

### **Solution to Question B(a) — 7 Marks**

**Step 1 — Flynn's 2×2 Table (2 marks):**

| | Single Instruction | Multiple Instruction |
|---|---|---|
| **Single Data** | SISD | MISD |
| **Multiple Data** | **SIMD** | MIMD |

**Step 2 — SIMD Classification (1 mark):**

> SIMD belongs to the "Single Instruction × Multiple Data" cell — one instruction stream, multiple data streams, lockstep execution across N lanes.

**Step 3 — Why GPUs are SIMD/SPMD engines (4 marks):**

1. **Throughput-Oriented Design:** GPUs sacrifice single-thread latency to maximize **throughput-per-watt**, mirroring SIMD's lockstep efficiency.
2. **Wide Warps/Wavefronts:** A CUDA warp is 32 threads; AMD wavefront is 64. They execute one instruction across 32/64 lanes — **physically a SIMD lane set**.
3. **Scalar + Vector ALUs:** NVIDIA SMs contain 4 SIMT sub-warps of 8 lanes each, sharing one instruction decoder.
4. **Coalesced Memory Access:** Adjacent threads load contiguous addresses — naturally vectorizable.
5. **Predication for Divergence:** When threads in a warp diverge, the GPU serializes them under a stack-based predication mask — exactly like SIMD predicate registers (`k1`).

> **Valuation Key:** Table: 2 marks • Classification: 1 mark • 4 GPU reasons: 4 marks (1 each).

---

### **Solution to Question B(b) — 7 Marks**

**Given:**
* $N = 4096$ float32 elements
* AVX register: 256 bits → $\dfrac{256}{32} = 8$ fp32 lanes
* Arithmetic intensity $I = 4$ FLOP/byte
* Memory bandwidth $\beta = 20$ GB/s
* SIMD peak $\pi = 50$ GFLOP/s

**Step 1 — Vector iterations (1 mark):**

$$I_{vec} = \frac{N}{\text{lanes}} = \frac{4096}{8} = 512 \text{ vector iterations}$$

**Step 2 — Speedup over scalar (2 marks):**

Each vector iteration does 8 additions in ~1 cycle vs. 8 cycles scalar. Ideal speedup:

$$S_{ideal} = 8 \times$$

$$T_{scalar} = 4096 \text{ cycles}, \quad T_{vector} = 512 \text{ cycles}$$

$$S = \frac{4096}{512} = 8 \times$$

**Step 3 — Roofline memory-bound ceiling (2 marks):**

$$P_{mem} = \beta \cdot I = 20 \text{ GB/s} \cdot 4 \text{ FLOP/byte} = 80 \text{ GFLOP/s}$$

**Step 4 — Apply Roofline (1 mark):**

$$P_{achievable} = \min(\pi, P_{mem}) = \min(50, 80) = 50 \text{ GFLOP/s}$$

**Step 5 — Conclusion (1 mark):**

> The kernel is **compute-bound** — SIMD peak (50 GFLOP/s) is the ceiling, with the ideal 8× speedup fully achievable if memory bandwidth is sufficient.

$$\boxed{I_{vec} = 512, \quad S = 8 \times, \quad P_{achievable} = 50 \text{ GFLOP/s, compute-bound}}$$

---

## 5.3 KTU Examiner's Valuation Warning

> [!WARNING]
> **Common Mark-Deduction Pitfalls in SIMD Questions:**
> 1. **Forgetting the scalar tail (n % 8)** — students write `for(i=0; i<n; i+=8)` without remainder loop. Loss: 1–2 marks.
> 2. **Confusing SIMD with MIMD** — write "SIMD has multiple instruction decoders" → wrong. SIMD has **one** decoder.
> 3. **Quoting speedup without Amdahl's Law** — speedup is not just `N`; factor in the **non-vectorizable fraction**.
> 4. **No units in formula derivation** — write $T = 2$ instead of $T = 2$ ms. Examiner deducts 0.5 mark per missing unit.
> 5. **Missing the Roofline `min()` step** — the Roofline performance is the **minimum** of compute and memory ceilings, not the average.
> 6. **No block diagram** — for 7-mark questions on SIMD architecture, the diagram carries 2 marks. Always draw one.
> 7. **Ignoring alignment** — `_mm256_loadu_ps` is fine for unaligned, but explain that aligned (`_mm256_load_ps`) is faster.

---

## 5.4 Topic Recap & Important Things to Remember

> **Definition Block**
> * SIMD = **S**ingle **I**nstruction, **M**ultiple **D**ata — one instruction, many data items, parallel lanes.
> * Vector register widths: **SSE = 128, AVX = 256, AVX-512 = 512** bits.
> * Lane = one independent functional unit operating on packed slice.

> **Architectural Facts**
> * Modern x86: 16 YMM (AVX) or 32 ZMM (AVX-512) vector registers.
> * Modern ARM: 32 NEON 128-bit Q-registers; SVE has scalable 128–2048 bit Z-registers.
> * GPUs: 32-thread warps (NVIDIA) ≈ SIMD-32 lane lockstep.

> **Critical Formulas**
> * SIMD Speedup: $S = \dfrac{T_{scalar}}{T_{vector}}$
> * Amdahl: $S_{total} = \dfrac{1}{(1 - p) + \dfrac{p}{S_{SIMD}}}$
> * Roofline: $P = \min(\pi, \beta \cdot I)$
> * Max achievable: $S_{max} = \dfrac{1}{1 - p}$ (when $S_{SIMD} \to \infty$)

> **Engineering Application Mentions (for examiner brownie points)**
> * Intel oneDNN, MKL, BLAS — use AVX-512 for 4×–16× speedup.
> * CUDA `float4` and `__ldg` — manual SIMD via vector loads.
> * ARM NEON — used in Apple Silicon M-series for ML inference.
> * ARM SVE — used in Fugaku supercomputer for HPC.

> **Valuation Hot-Spots**
> * Always include the **scalar tail loop** in code answers.
> * Always quote **units** in derivations.
> * Always pair the **2×2 Flynn table** with the SIMD cell highlighted.
> * Always end speedup answers with a **limiting-factor analysis** (Amdahl).

<!-- SECTION_5_END -->
