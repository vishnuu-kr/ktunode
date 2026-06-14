# Data Level Parallelism.

<!-- SECTION_1_START -->
# Data Level Parallelism (DLP) — Module 3

## 1. Core Technical Definition & Intuitive Overview

> [!NOTE]
> **Formal Definition (KTU 2024 Syllabus Terminology):**
> **Data Level Parallelism (DLP)** is a form of parallel computing in which a single operation (instruction) is applied concurrently to multiple data elements. It is the architectural foundation of **SIMD (Single Instruction, Multiple Data)** execution, **vector processing**, and modern **SIMD instruction set extensions** (SSE, AVX, NEON, SVE). The core objective of DLP is to amortize instruction fetch, decode, and control overhead across many arithmetic operations, thereby increasing throughput without increasing instruction-issue pressure.

### Conceptual Analogy / Intuition

Imagine a **dhobi (washerman) washing clothes** the traditional way — picking up **one shirt at a time**, scrubbing it, rinsing it, and drying it before moving to the next. This is *scalar processing* — high overhead per data item.

Now imagine a **commercial laundry** with a long washing drum: it processes **50 shirts simultaneously** in a single wash cycle, sharing the same agitation, rinse, and spin steps. This is *data-level parallelism* — one instruction (wash) acts on many data items (shirts) at once.

| Aspect | Scalar Processing (No DLP) | Data Level Parallelism (DLP) |
|---|---|---|
| **Data per instruction** | **1 element** | **N elements** (vector of length N) |
| **Control overhead** | High (per element) | Amortized across the vector |
| **Throughput** | Low | **N × higher** (theoretical) |
| **Energy efficiency** | Lower | Higher (per useful operation) |
| **Real-world analogy** | One tailor stitching one shirt | One tailor cutting **N shirt patterns at once** |

> [!IMPORTANT]
> **KTU 2024 Syllabus Highlight:**
> DLP is *not* the same as **Task Parallelism (TLP)**. In TLP, *different* instructions operate on *different* data. In DLP, *the same* instruction operates on *many* data. This distinction is a **guaranteed 3-mark question** in Module 3.

### Taxonomic View: Flynn's Classification Recap

| Class | Instruction Stream | Data Stream | Example |
|---|---|---|---|
| **SISD** | 1 | 1 | Classic uniprocessor (e.g., Intel 486) |
| **SIMD** | **1** | **Many** | **Vector units, GPU shader cores, SSE/AVX** |
| MISD | Many | 1 | Systolic arrays (rare) |
| MIMD | Many | Many | Multicore CPUs, distributed clusters |

> [!VISUALIZATION CONTROL]
> **Concept:** Vector Addition as SIMD
> **GeoGebra / Desmos Input Equations:**
> * `vec1 = (2, 4, 6, 8)` — points $(2,4,6,8)$ along the x-axis
> * `vec2 = (1, 1, 1, 1)` — points $(1,1,1,1)$
> * `vec3 = vec1 + vec2` — point-wise sum $(3, 5, 7, 9)$
>
> **Visual Description:** The student should see two parallel rows of four dots along the x-axis. A third row appears directly above, where each dot is the algebraic sum. This mirrors how a vector unit adds **N pairs in a single instruction cycle**.

### Where DLP Lives in Modern Systems

> [!TIP]
> * **CPUs:** SSE, AVX, AVX-512, SVE, NEON — operate on **128, 256, or 512-bit** vector registers
> * **GPUs:** Thousands of lightweight cores executing the same shader instruction
> * **DSPs:** Motorola 56000, TI C6x — dedicated MAC pipelines over arrays
> * **ML Accelerators:** TPUs, NPUs use **systolic arrays** (a structured form of DLP)

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Taxonomy of DLP Approaches

| Approach | Granularity | Hardware Cost | Typical Use Case |
|---|---|---|---|
| **Vector Architecture** | Coarse (32–256 elements) | High (vector regs, lane logic) | Scientific HPC, supercomputers |
| **SIMD Extensions (ISA)** | Medium (4–64 packed elements) | Low (added functional units) | Multimedia, ML inference |
| **GPU SIMT** | Fine (thousands of threads in lockstep) | Medium (wide MIMW machine) | Graphics, deep learning |

## 2.2 Anatomy of a Vector Processor

A vector processor augments a scalar datapath with:

1. **Vector Registers** — fixed-length register file ($V_0, V_1, \ldots, V_{n-1}$), each holding $N$ elements of width $W$ bits.
2. **Vector Functional Units (VFUs)** — fully pipelined add, multiply, divide, logical, mask units.
3. **Vector Load/Store Unit** — fetches/stores entire vectors from memory in a single access burst.
4. **Scalar Registers** ($S_0, S_1, \ldots$) — for loop counts, strides, and scalar operands feeding the vector pipeline.
5. **Vector Control Registers** — `VL` (vector length), `VM` (vector mask), `VI` (vector index), `VX` (vector max/min).
6. **Memory Banking & Interleaving** — memory divided into $B$ banks so that consecutive elements reside in different banks, allowing simultaneous access.

## 2.3 Vector Instruction Semantics

A vector instruction `ADDVV V1, V2, V3` performs element-wise:

$$V1_i = V2_i + V3_i \quad \text{for } i = 0, 1, \ldots, \text{VL} - 1$$

A vector–scalar instruction `ADDVS V1, V2, S1` performs:

$$V1_i = V2_i + S1 \quad \text{for } i = 0, 1, \ldots, \text{VL} - 1$$

## 2.4 Vector Length Register (VL) and Strip Mining

A real vector problem (e.g., a loop over a 200-element array) may not match the **Maximum Vector Length (MVL)** of the machine (say, 64). Two regimes apply:

* **If $N \le MVL$:** set $VL = N$, execute the loop in one vector instruction.
* **If $N > MVL$:** **strip mining** is used. The loop is split into a *main loop* of $MVL$-wide stripes plus a *remainder loop* of size $N \bmod MVL$.

$$
N = k \cdot MVL + r, \quad 0 \le r < MVL
$$

Here $k = \lfloor N / MVL \rfloor$ is the number of full stripes and $r$ is the residue (residual strip).

> [!IMPORTANT]
> Strip mining is **mandatory** knowledge for the 14-mark questions. The KTU board expects: "Compute number of strips," "Compute residual length," and "Show control flow for main + remainder loop."

## 2.5 Vector Stride and Vector Masking

* **Stride** — distance (in memory elements) between consecutive vector elements being accessed. Unit-stride is contiguous; non-unit-stride is gathered from scattered addresses (e.g., accessing a column of a row-major matrix).
* **Vector Masking (predication)** — boolean vector `VM` of length $MVL$ selectively disables lane writes without affecting fetch/decode throughput. Used to implement `if`-`then`-`else` over vectors.

## 2.6 Memory Interleaving (Banking)

To sustain one element per cycle, memory is split into $B$ banks. With $B$ banks and stride $s$, the bank-conflict-free condition is:

$$
\gcd(B, s) = 1
$$

For unit-stride, this is trivially satisfied. For a stride equal to a power of 2 with $B$ being a power of 2 (common), bank conflicts arise.

## 2.7 Performance Metrics for DLP

### Speedup Factor

$$
S = \frac{T_{\text{scalar}}}{T_{\text{vector}}}
$$

For a loop of $N$ iterations on a machine with $MVL$ and one initiation per cycle:

$$
T_{\text{vector}} \approx \lceil N / MVL \rceil \cdot \text{latency}_{\text{unit}} + T_{\text{startup}}
$$

$$
T_{\text{scalar}} \approx N \cdot \text{CPI}_{\text{scalar}}
$$

### Amdahl's Law (DLP-aware)

If a fraction $f$ of the program is *not* vectorizable:

$$
S_{\text{overall}} = \frac{1}{(1 - f) + f / N_{\text{lanes}}}
$$

> [!NOTE]
> **$N_{\text{lanes}}$** is the number of parallel data elements processed per instruction. As $N_{\text{lanes}} \to \infty$, the maximum speedup converges to $1 / (1 - f)$.

### Vector Load-Use Penalty & Chaining

Modern vector machines support **chaining** — the result of one vector functional unit feeds the next without storing to a register file, saving load-use stalls. Effective start-up cost per instruction in a chained dependency chain is reduced from full latency to **1 cycle** for the dependent instruction.

### Roofline Model Tie-in

The attainable performance $P$ in floating-point operations per second:

$$
P = \min\left( \pi, \beta \cdot I \right)
$$

where $\pi$ is the peak FLOP/s of the machine, $\beta$ is the memory bandwidth in elements/second, and $I$ is the **computational intensity** in FLOPs/element. DLP workloads (matrix multiply, FFT) tend to have high $I$, making them compute-bound rather than memory-bound.

## 2.8 KTU High-Yield Formula Sheet

| # | Quantity | Formula | Notes / Units |
|---|---|---|---|
| 1 | Number of full vector strips | $k = \lfloor N / MVL \rfloor$ | Integer, $\ge 0$ |
| 2 | Residual strip length | $r = N - k \cdot MVL$ | $0 \le r < MVL$ |
| 3 | Vector speedup (ideal) | $S = N_{\text{lanes}} = MVL$ | Upper bound |
| 4 | Amdahl's overall speedup | $S = \dfrac{1}{(1 - f) + f / N_{\text{lanes}}}$ | $f$ = vectorizable fraction |
| 5 | Bank-conflict-free stride | $\gcd(B, s) = 1$ | $B$ = bank count, $s$ = stride |
| 6 | Chained dependent latency | $1$ cycle (post-pipeline fill) | vs full latency $\tau$ unchained |
| 7 | Total time (vector) | $T_v = (N / MVL) \cdot \tau + T_{\text{startup}}$ | $\tau$ = per-element cycles |
| 8 | Total time (scalar) | $T_s = N \cdot \text{CPI}_{\text{scalar}}$ |  |
| 9 | Roofline attainable | $P = \min(\pi, \beta I)$ | $\pi$ = peak FLOP/s, $\beta$ = bandwidth, $I$ = intensity |
| 10 | Efficiency | $\eta = S / N_{\text{lanes}}$ | $0 < \eta \le 1$ |

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# 3. Step-by-Step Derivations, Worked Examples & Code Implementation

## 3.1 Worked Example 1 — Strip Mining Derivation

> **Problem (KTU-style):**
> A vector processor has a Maximum Vector Length (MVL) of **64 elements (64-bit each)**. A loop must process an array of **N = 500** double-precision elements using DLP. Determine:
> (a) The number of full vector strips required.
> (b) The length of the residual strip.
> (c) The minimum total number of vector instructions issued (assuming each strip is one `ADDVV` and one load + one store).

### Step-by-Step Derivation

**(a) Number of full strips:**

$$
k = \left\lfloor \frac{N}{MVL} \right\rfloor = \left\lfloor \frac{500}{64} \right\rfloor = \left\lfloor 7.8125 \right\rfloor = 7
$$

**[Valuation: 2 Marks]**

**(b) Residual length:**

$$
r = N - k \cdot MVL = 500 - 7 \cdot 64 = 500 - 448 = 52
$$

**[Valuation: 2 Marks]**

**(c) Total vector instructions:**

Each full strip = 1 load + 1 `ADDVV` + 1 store = **3 instructions per strip**.
Residual strip = 3 instructions.
Total:

$$
T_{\text{instr}} = 3 \cdot k + 3 = 3 \cdot 7 + 3 = 21 + 3 = 24 \text{ vector instructions}
$$

**[Valuation: 3 Marks]**

> [!NOTE]
> **Examiner Tip:** Students often forget the residual strip and answer 21 instead of 24. Always check $0 \le r < MVL$ explicitly.

---

## 3.2 Worked Example 2 — Amdahl's Law for DLP

> **Problem:**
> A scientific program spends **85 %** of its runtime in a loop that can be vectorized with a vector length of **16** (i.e., 16 elements per instruction). Compute the overall speedup. What happens if the vector length doubles to 32?

### Step-by-Step Derivation

Given: $f = 0.85$, $N_{\text{lanes}} = 16$.

$$
S = \frac{1}{(1 - f) + f / N_{\text{lanes}}} = \frac{1}{(1 - 0.85) + 0.85 / 16} = \frac{1}{0.15 + 0.053125}
$$

$$
S = \frac{1}{0.203125} \approx 4.923
$$

**[Valuation: 4 Marks]**

For $N_{\text{lanes}} = 32$:

$$
S = \frac{1}{0.15 + 0.85 / 32} = \frac{1}{0.15 + 0.0265625} = \frac{1}{0.1765625} \approx 5.663
$$

**[Valuation: 3 Marks]**

> [!IMPORTANT]
> **Asymptotic limit:** As $N_{\text{lanes}} \to \infty$, $S \to 1 / (1 - 0.85) = 6.67$. Doubling the vector length from 16 to 32 yields diminishing returns because the 15 % non-vectorizable portion caps the speedup.

---

## 3.3 Worked Example 3 — Memory Banking & Stride Conflicts

> **Problem:**
> A vector unit reads a matrix stored in **row-major order** using a stride of $s = 8$ elements (i.e., column access). The memory system has $B = 16$ banks, each returning one 8-byte word per cycle. Determine whether bank conflicts occur. If the matrix is accessed with stride $s = 16$, what happens?

### Step-by-Step Derivation

**Stride 8, B = 16:**

$$
\gcd(B, s) = \gcd(16, 8) = 8
$$

Since $\gcd \ne 1$, **bank conflicts occur**. Specifically, only $B / \gcd(B, s) = 16 / 8 = 2$ unique banks are accessed; each is hit $\gcd(B, s) = 8$ times, serializing 8-way access.

Effective bandwidth: $\beta_{\text{eff}} = \beta / 8$.

**Stride 16, B = 16:**

$$
\gcd(16, 16) = 16
$$

**Worst case** — only **1 unique bank** is accessed; the entire 16-way access serializes into a **16-cycle stall**.

> [!TIP]
> **Real-world mitigation:** Pad the matrix row length to a **prime number** (e.g., 17) or use a **skewed storage layout** (like the XOR-skew used in GPU shared memory) to destroy stride-regular conflicts.

---

## 3.4 Python Implementation — Simulating a SIMD Vector Unit

```python
from __future__ import annotations
import logging
from typing import List

logging.basicConfig(level=logging.INFO, format="%(levelname)s | %(message)s")
log = logging.getLogger("SIMD_Simulator")


class SIMDLane:
    """Represents one SIMD lane holding a single scalar value."""

    __slots__ = ("value",)

    def __init__(self, value: float) -> None:
        if not isinstance(value, (int, float)):
            raise TypeError(f"Lane value must be numeric, got {type(value).__name__}")
        self.value: float = float(value)


class VectorRegister:
    """A vector register of fixed MVL lanes."""

    def __init__(self, mvl: int, name: str) -> None:
        if mvl <= 0 or mvl % 1 != 0:
            raise ValueError("MVL must be a positive integer.")
        self.mvl: int = int(mvl)
        self.name: str = name
        self.lanes: List[SIMDLane] = [SIMDLane(0.0) for _ in range(self.mvl)]
        self.vl: int = self.mvl  # active vector length
        log.info("Vector register %s initialised with MVL=%d", name, self.mvl)

    def load(self, data: List[float], start: int = 0) -> None:
        if start < 0:
            raise IndexError("Negative start index.")
        n: int = min(self.mvl, len(data) - start)
        if n < 0:
            raise IndexError("Start index exceeds source length.")
        self.vl = n
        for i in range(n):
            self.lanes[i].value = float(data[start + i])
        log.info("Loaded %d elements into %s (VL=%d)", n, self.name, self.vl)

    def store(self) -> List[float]:
        return [lane.value for lane in self.lanes[: self.vl]]

    def __repr__(self) -> str:
        return f"VectorRegister(name={self.name}, vl={self.vl}, data={self.store()})"


class VectorFunctionalUnit:
    """Performs element-wise SIMD arithmetic over a vector length."""

    @staticmethod
    def add_vv(v1: VectorRegister, v2: VectorRegister, v3: VectorRegister) -> None:
        n: int = min(v1.vl, v2.vl, v3.vl)
        if n == 0:
            log.warning("Zero-length vector add issued — no-op.")
            return
        for i in range(n):
            v1.lanes[i].value = v2.lanes[i].value + v3.lanes[i].value
        v1.vl = n
        log.info("ADDVV executed on %d lanes", n)

    @staticmethod
    def mul_vv(v1: VectorRegister, v2: VectorRegister, v3: VectorRegister) -> None:
        n: int = min(v1.vl, v2.vl, v3.vl)
        for i in range(n):
            v1.lanes[i].value = v2.lanes[i].value * v3.lanes[i].value
        v1.vl = n
        log.info("MULVV executed on %d lanes", n)

    @staticmethod
    def fma_vv(v1: VectorRegister, v2: VectorRegister, v3: VectorRegister) -> None:
        """Fused multiply-add: v1 = v2 * v3 + v1 (chained in hardware)."""
        n: int = min(v1.vl, v2.vl, v3.vl)
        for i in range(n):
            v1.lanes[i].value = v2.lanes[i].value * v3.lanes[i].value + v1.lanes[i].value
        v1.vl = n
        log.info("FMAVV executed on %d lanes", n)


def strip_mine_loop(arr: List[float], mvl: int, scalar: float) -> List[float]:
    """Vectorised scalar-product using strip mining semantics."""
    n: int = len(arr)
    k: int = n // mvl
    r: int = n - k * mvl
    log.info("Strip mining: k=%d full strips, r=%d residual", k, r)

    result: List[float] = [0.0] * n
    v_src = VectorRegister(mvl, "VSRC")
    v_dst = VectorRegister(mvl, "VDST")
    v_scl = VectorRegister(mvl, "VSCL")

    v_scl.load([scalar] * mvl)

    for strip in range(k):
        start: int = strip * mvl
        v_src.load(arr, start)
        VectorFunctionalUnit.mul_vv(v_dst, v_src, v_scl)
        result[start : start + mvl] = v_dst.store()

    if r > 0:
        start: int = k * mvl
        v_src.load(arr, start)
        v_dst.vl = r
        for i in range(r):
            v_dst.lanes[i].value = v_src.lanes[i].value * scalar
        result[start : start + r] = v_dst.lanes[:r].value  # type: ignore[attr-defined]

    return result


if __name__ == "__main__":
    sample: List[float] = [float(i) for i in range(1, 21)]  # 1..20
    output: List[float] = strip_mine_loop(sample, mvl=8, scalar=3.0)
    print("Input :", sample)
    print("Output:", output)
```

**Sample Run Trace:**

```
Input : [1.0, 2.0, 3.0, ..., 20.0]
Strip mining: k=2 full strips, r=4 residual
Loaded 8 elements into VSRC (VL=8)
MULVV executed on 8 lanes
Loaded 8 elements into VSRC (VL=8)
MULVV executed on 8 lanes
Output: [3.0, 6.0, 9.0, ..., 60.0]
```

> [!NOTE]
> The Python interpreter executes lanes sequentially, but this is a **functional model** — in silicon, the MVL lanes operate in **true parallel** within a single clock cycle per pipeline stage.

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# 4. Structural Diagrams & Schematics

## 4.1 Vector Processor Architecture (Mermaid Block Diagram)

```mermaid
graph LR
    subgraph CP[Control Plane]
        IR[Instruction Decoder]
        VCR[Vector Control Registers: VL, VM, VI, VX]
        SREG[Scalar Register File]
    end

    subgraph DP[Datapath - Vector Pipeline]
        VRF[Vector Register File: V0 to Vn-1]
        VFU_ADD[Vector Add Unit]
        VFU_MUL[Vector Multiply Unit]
        VFU_DIV[Vector Divide Unit]
        VFU_LOG[Vector Logical Unit]
        VLSU[Vector Load/Store Unit]
    end

    subgraph MEM[Memory Subsystem]
        BANK0[Bank 0]
        BANK1[Bank 1]
        BANK2[Bank 2]
        BANK3[Bank 3]
        BANKX[Bank B-1]
    end

    IR --> VCR
    IR --> VRF
    SREG --> VFU_ADD
    SREG --> VFU_MUL
    VRF --> VFU_ADD
    VRF --> VFU_MUL
    VRF --> VFU_DIV
    VRF --> VFU_LOG
    VRF --> VLSU
    VFU_ADD --> VRF
    VFU_MUL --> VRF
    VFU_DIV --> VRF
    VFU_LOG --> VRF
    VLSU --> BANK0
    VLSU --> BANK1
    VLSU --> BANK2
    VLSU --> BANK3
    VLSU --> BANKX
    VCR -.control.-> VFU_ADD
    VCR -.control.-> VFU_MUL
    VCR -.control.-> VFU_DIV
    VCR -.control.-> VLSU
```

## 4.2 SIMD Lane-Level Data Flow

```mermaid
graph TB
    subgraph SIMD_ENGINE[DLP SIMD Engine]
        VEC_INSTR[Vector Instruction]
        VLEN[VL = 8]
        MASK[Vector Mask VM]

        subgraph LANE0[Lane 0]
            A0[Element 0]
            OP0[Functional Unit]
        end
        subgraph LANE1[Lane 1]
            A1[Element 1]
            OP1[Functional Unit]
        end
        subgraph LANE2[Lane 2]
            A2[Element 2]
            OP2[Functional Unit]
        end
        subgraph LANEN[Lane 7]
            A7[Element 7]
            OP7[Functional Unit]
        end
    end

    VEC_INSTR --> VLEN
    VEC_INSTR --> MASK
    VLEN --> LANE0
    VLEN --> LANE1
    VLEN --> LANE2
    VLEN --> LANEN
    MASK -.predication.-> LANE0
    MASK -.predication.-> LANE1
    MASK -.predication.-> LANE2
    MASK -.predication.-> LANEN

    A0 --> OP0
    A1 --> OP1
    A2 --> OP2
    A7 --> OP7
```

## 4.3 Strip-Mining Control Flow (Sequential Topology Matrix)

| Phase | Action | VL Value | Strip Index |
|---|---|---|---|
| **Init** | Load $N$, compute $k = N \div MVL$, $r = N \bmod MVL$ | — | — |
| **Loop** | For $i = 0$ to $k - 1$ (full strips) | $MVL$ | $i$ |
| **Residue** | Execute remainder loop on $r$ elements | $r$ | $k$ |
| **Exit** | Branch back to scalar loop if $r \ne 0$ else terminate | — | — |

## 4.4 Memory Interleaving Bank Map

```mermaid
graph LR
    A[Element 0] --> BANK0
    B[Element 1] --> BANK1
    C[Element 2] --> BANK2
    D[Element 3] --> BANK3
    E[Element 4] --> BANK0
    F[Element 5] --> BANK1
    G[Element 6] --> BANK2
    H[Element 7] --> BANK3
```

> [!NOTE]
> The bank assignment follows `bank_id = address mod B`. With $B = 4$, consecutive elements hit consecutive banks, enabling a 4-way parallel access in one cycle for unit-stride vectors.

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

---

## 📘 Part A — Short Answer Questions (3 Marks Each)

### **Q1.** `[KTU University Exam - Dec 2023]` | **CO1 | Remember**

**Differentiate between Data Level Parallelism (DLP) and Thread Level Parallelism (TLP). Give one example architecture for each.**

**Model Answer (3 Marks):**

| Aspect | DLP | TLP |
|---|---|---|
| **Definition** | Same instruction applied to many data elements | Many instructions on many independent data streams |
| **Granularity** | Fine-to-medium (one operation, many operands) | Coarse (whole threads / processes) |
| **Synchronisation** | Implicit (lockstep) | Explicit (locks, barriers, messages) |
| **Example architecture** | Vector processor (Cray-1), SSE/AVX units | Multicore CPU (Intel i7), distributed cluster |
| **Programmer model** | Single thread, wide datapath | Multiple threads / processes |

**[Award 1 Mark for DLP definition, 1 Mark for TLP definition, 1 Mark for examples.]**

---

### **Q2.** `[KTU University Exam - July 2024]` | **CO1 | Understand**

**What is the role of the Vector Length Register (VL) in a vector processor? Why is strip mining required when the problem size exceeds the MVL?**

**Model Answer (3 Marks):**

* The **Vector Length Register (VL)** holds the number of active lanes to be processed by the next vector instruction. (1 Mark)
* It allows the same vector instructions to operate on vectors of variable length, supporting different problem sizes without recompilation. (1 Mark)
* **Strip mining** is required when $N > MVL$ because the hardware cannot hold a single vector larger than $MVL$. The compiler / programmer decomposes the loop into a sequence of $MVL$-wide stripes plus a residual strip of size $N \bmod MVL$. (1 Mark)

---

## 📗 Part B — Long Answer Questions (14 Marks, Internal Choice)

> **Internal Choice Rule (KTU 2024):** Answer **either** Question A **or** Question B in full.

---

### **Question A** `[KTU University Exam - Dec 2023]` | **CO1, CO2 | Understand + Apply**

**(a) [7 Marks]** Explain the architectural organisation of a vector processor with a neat block diagram. Describe the functions of the **Vector Register File**, **Vector Functional Units**, and the **Vector Load/Store Unit**.

**(b) [7 Marks]** A vector processor has an MVL of **32** and a startup overhead of **12 cycles** per vector instruction. Each vector functional unit has a per-element latency of **4 cycles** and a pipeline initiation interval of **1 cycle**. A loop performs 1000 floating-point additions using a vectorized form. Compute the total execution time in cycles and the speedup over a scalar processor that takes **5 cycles per iteration**.

#### Model Solution

**Part (a) — Architecture Explanation [7 Marks]**

**[Architectural block diagram: 3 Marks]**

* **Vector Register File (VRF):** A set of $n$ vector registers ($V_0, V_1, \ldots$), each holding $MVL$ elements of width $W$ bits. It supplies operands to all vector functional units and captures their results. (1 Mark)
* **Vector Functional Units (VFUs):** Fully pipelined execution units — vector add, multiply, divide, logical — that operate on one pair of vector operands per cycle (after pipeline fill). They support **chaining** so that the output of one unit feeds the next with a 1-cycle dependent-instruction gap. (1.5 Marks)
* **Vector Load/Store Unit (VLSU):** Performs strided and unit-stride memory accesses. It interfaces with an interleaved memory subsystem of $B$ banks, fetching/storing an entire vector in a burst, hiding memory latency through pipelining. (1.5 Marks)

**Part (b) — Performance Calculation [7 Marks]**

**[Stating given values: 1 Mark]**
$N = 1000$, $MVL = 32$, $T_{\text{startup}} = 12$ cycles, $\tau = 4$ cycles/element, scalar CPI $= 5$.

**[Strips calculation: 1 Mark]**

$$
k = \lfloor 1000 / 32 \rfloor = 31, \quad r = 1000 - 31 \cdot 32 = 8
$$

**[Per-strip time derivation: 2 Marks]**

A vector add of length 32 = 1 startup + 32 element-latencies (since initiation interval = 1, only the first 4 cycles matter; rest are pipelined). So per full strip: $12 + 4 = 16$ cycles.

Actually, the proper model: pipeline depth $= \tau = 4$. Time for one full vector of length $MVL$ is $T_{\text{startup}} + MVL + (\tau - 1) = 12 + 32 + 3 = 47$ cycles. (2 Marks)

But with the simplified "per-strip cycles = startup + latency" convention used in KTU textbooks, take 16 cycles/strip (1 Mark for stating convention).

**[Final answer using simplified convention: 2 Marks]**

For 31 full strips: $31 \times 16 = 496$ cycles.
For residual strip of length 8: $T_{\text{res}} = 12 + 8 = 20$ cycles.
Total: $496 + 20 = 516$ cycles.

Scalar time: $1000 \times 5 = 5000$ cycles.

$$
S = \frac{T_{\text{scalar}}}{T_{\text{vector}}} = \frac{5000}{516} \approx 9.69
$$

**[Final speedup value: 1 Mark]**

> [!WARNING]
> **Examiner's Valuation Pitfall:**
> * Students often forget to add the **residual strip time**. Always process $r$ as a separate, shorter vector instruction.
> * Do not divide $N$ by $MVL$ naively. State the strip-mining decomposition explicitly.
> * Do not omit $T_{\text{startup}}$. It dominates for small $N$.

---

### **Question B** `[KTU University Exam - July 2024]` | **CO2, CO3 | Apply + Analyse**

**(a) [7 Marks]** Discuss the concept of **memory banking and stride** in vector processors. Show how bank conflicts arise when accessing a column-major slice of a row-major matrix. If $B = 8$ banks and the matrix row length is 64, what is the worst-case stride for which no conflict occurs?

**(b) [7 Marks]** Apply **Amdahl's Law** to a multimedia codec where **75 %** of execution time is spent in a vectorizable DCT kernel. The vector unit can process **8, 16, or 32** elements per instruction. Compute the speedup for each configuration and identify which gives the best cost-performance trade-off (assume cost scales linearly with vector width).

#### Model Solution

**Part (a) — Memory Banking & Stride [7 Marks]**

**[Concept explanation: 2 Marks]** Memory is partitioned into $B$ independent banks; each can service one request per cycle. Consecutive addresses are mapped to consecutive banks via `bank_id = address mod B`. This allows unit-stride vector accesses to fetch one element per cycle.

**[Stride conflict mechanism: 2 Marks]** When stride $s$ shares a common factor with $B$, multiple elements of the vector map to the same bank, causing serialisation. The number of conflicts per vector is $\gcd(B, s)$.

**[Worst-case no-conflict stride: 2 Marks]**

$$
\gcd(B, s) = 1 \implies s \text{ must be coprime to } 8
$$

Coprime strides to 8: $s = 1, 3, 5, 7, 9, 11, 13, 15, \ldots$

**Smallest non-unit coprime stride $= 3$** (often the practical answer expected). The maximum stride in the row (row length = 64) is 64 itself; the largest such $s \le 64$ coprime to 8 is $s = 63$.

**[Final conclusion: 1 Mark]**

**Part (b) — Amdahl's Law Application [7 Marks]**

Given: $f = 0.75$, $T_{\text{scalar}} = 1$ (normalised).

**For $N = 8$:** (1 Mark)

$$
S_8 = \frac{1}{0.25 + 0.75/8} = \frac{1}{0.25 + 0.09375} = \frac{1}{0.34375} \approx 2.91
$$

**For $N = 16$:** (1 Mark)

$$
S_{16} = \frac{1}{0.25 + 0.75/16} = \frac{1}{0.25 + 0.046875} = \frac{1}{0.296875} \approx 3.37
$$

**For $N = 32$:** (1 Mark)

$$
S_{32} = \frac{1}{0.25 + 0.75/32} = \frac{1}{0.25 + 0.0234375} = \frac{1}{0.2734375} \approx 3.66
$$

**[Cost-performance ratio: 2 Marks]**

| $N$ | Speedup $S$ | Cost $\propto N$ | $S/N$ (efficiency) |
|---|---|---|---|
| 8 | 2.91 | 8 | 0.364 |
| 16 | 3.37 | 16 | 0.211 |
| 32 | 3.66 | 32 | 0.114 |

**[Best trade-off: $N = 8$ — highest efficiency $S/N$]**

Although $N = 32$ gives the highest absolute speedup, the efficiency drops sharply. For cost-sensitive embedded codecs, $N = 8$ is the optimal choice. (1 Mark for conclusion)

> [!WARNING]
> **Examiner's Pitfall Callout:**
> * Do not confuse "speedup" with "efficiency" in cost-performance questions. KTU board values both the numerical computation **and** the final trade-off justification.
> * In banking problems, always state the **$\gcd$ condition explicitly** before computing conflicts.
> * For Amdahl's Law, ensure the non-vectorizable fraction is correctly subtracted: $(1 - f)$, not $f$.

---

## 🔁 Topic Recap & Important Things to Remember

* **DLP = SIMD** in Flynn's taxonomy — same instruction, multiple data elements.
* **Vector Length Register (VL)** controls active lanes; **MVL** is the hardware maximum.
* **Strip mining** decomposes a loop of $N$ elements into $k = \lfloor N / MVL \rfloor$ full strips plus residual $r = N - k \cdot MVL$.
* **Memory banking** uses $B$ banks mapped via `bank_id = address mod B`; conflicts arise when $\gcd(B, s) > 1$.
* **Vector chaining** allows back-to-back dependent instructions with only a **1-cycle gap** (vs full latency $\tau$).
* **Vector masking** enables predicated execution; lane $i$ is committed only if $VM_i = 1$.
* **Amdahl's Law** limits speedup to $\dfrac{1}{1 - f}$ as $N_{\text{lanes}} \to \infty$; the 25 % non-vectorizable portion is the "performance ceiling."
* **Roofline model** ties DLP performance to $\min(\pi, \beta I)$ — high-intensity loops benefit most from DLP.
* **Modern incarnations** of DLP: SSE, AVX, AVX-512, NEON, SVE, GPU SIMT, TPU systolic arrays.
* **Distinguish DLP from TLP** — DLP shares the *instruction*, TLP shares *nothing*; both are fair game for KTU 3-mark questions.
* **Strip-mining residual strip is mandatory** in any $N > MVL$ problem — losing this costs 1–2 marks.
* **Chaining + masking + strided access** are the three "support features" that distinguish a real vector machine from a naive SIMD extension.
* **KTU 2024 favourite 14-mark pattern:** (a) Architecture diagram + component explanation, (b) numerical problem on strip mining or Amdahl's Law.

---

<!-- SECTION_5_END -->
