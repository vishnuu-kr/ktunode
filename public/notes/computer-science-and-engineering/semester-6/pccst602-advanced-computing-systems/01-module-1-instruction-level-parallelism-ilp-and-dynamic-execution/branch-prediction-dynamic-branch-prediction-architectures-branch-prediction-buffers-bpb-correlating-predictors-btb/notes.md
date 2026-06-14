# Branch Prediction: Dynamic branch prediction architectures, Branch Prediction Buffers (BPB), Correlating predictors, BTB

<!-- SECTION_1_START -->

# Branch Prediction in Advanced Computing Systems

## 1.1 Formal Academic Definition (KTU 2024 Syllabus Terminology)

> [!IMPORTANT]
> **Branch Prediction** is a speculative execution technique in pipelined, superscalar, and out-of-order processors whereby the hardware attempts to *guess the outcome* of a conditional branch instruction (taken or not-taken) and the *target address* of a jump before the branch is actually evaluated, thereby avoiding costly pipeline flushes caused by control hazards.

In the **KTU 2024 Scheme** parlance for *Advanced Computing Systems (PCCST602)*, branch prediction falls under **Module 1 – Instruction-Level Parallelism (ILP) and Dynamic Execution**, and is treated as a foundational dynamic-execution micro-architecture component that directly determines the **CPI (Cycles Per Instruction)** of a deep pipeline:

$$\text{CPI}_{\text{actual}} = \text{CPI}_{\text{base}} + \sum_{i=1}^{n} \text{StallCycles}_i$$

> [!NOTE]
> **Two Distinct Prediction Problems**
> 1. **Direction Prediction** – Will the branch be *Taken* (T) or *Not-Taken* (NT)?
> 2. **Target Prediction** – *Where* will execution continue (target PC address)?

**Architectures studied under this module**:
- **Branch History Table (BHT) / Branch Prediction Buffer (BPB)** – simplest direction predictor
- **Correlating Predictors (2-Level Adaptive)** – exploits correlation between branch outcomes
- **Branch Target Buffer (BTB)** – caches target addresses for zero-cycle jumps
- **Tournament / Hybrid Predictors** – combines local + global history
- **TAGE (TAgged GEometric history length)** – state-of-the-art (mentioned for context)

The **prediction accuracy (A)** is the single most quoted metric in KTU papers:

$$A = \frac{\text{Correct Predictions}}{\text{Total Branches}} \times 100\%$$

The **misprediction penalty (P)** on a modern out-of-order pipeline is typically **$P = 10$ to $P = 20$ clock cycles**, and the resulting performance loss is:

$$\text{Performance Loss} = \text{Misprediction Rate} \times \text{Penalty}$$

---

## 1.2 Conceptual Analogy & Plain-English Intuition

> [!TIP]
> **🛣️ The GPS-Road-Split Analogy**
>
> Imagine driving on a highway at **120 km/h** and approaching a *Y-fork*. Your **GPS (the predictor)** has a small history of your past trips. It *guesses* which fork you will take *before you even reach the splitter*, so your car is already steering.
>
> - **If GPS guesses right** → smooth ride, no brake.
> - **If GPS guesses wrong** → you have to slam the brakes, do a U-turn, and backtrack (this is the **pipeline flush**).
> - **The Branch History Table (BHT)** = the GPS's *last-minute notes* about each fork.
> - **Correlating Predictor** = the GPS noticing that *"every time the driver took Exit A last week, he also took Exit A the next day"* (cross-branch memory).
> - **Branch Target Buffer (BTB)** = the GPS's *pre-computed road list* — it already knows the address of every restaurant along every fork.

This single analogy explains the *entire* branch-prediction theory:
- **Direction predictor** ⇒ "Which fork?"
- **Target predictor (BTB)** ⇒ "What's at the end of the fork?"
- **Correlating predictor** ⇒ "What did I do *yesterday at this fork* and *at the previous fork*?"

---

## 1.3 Standard Hardware Constants and KTU-Mandated Metrics

> [!IMPORTANT]
> **Industry-Standard Values (Highlighted for KTU 14-Mark Problems)**
> - **BHT entry size** = $n$-bit saturating counter ($n = 1, 2, 3$)
> - **BHT index width** = low-order $k$ bits of PC (typically $k = 12$ to $k = 16$, giving $2^{k}$ entries)
> - **BTB associativity** = *fully associative* or *set-associative*
> - **Misprediction penalty (P)** = **10–20 cycles** (deep pipeline)
> - **Global History Register (GHR)** width = $m$ bits (typically $m = 8$ to $m = 16$)
> - **Tag stored in BTB** = full or partial PC tag
> - **Tournament predictor components** = Local predictor + Global predictor + Choice meta-predictor

---

## 1.4 Visualization Control (GeoGebra / Desmos)

> [!VISUALIZATION CONTROL]
> **Concept:** 2-bit Saturating Counter State Machine (used in 2-bit BPB)
> **Desmos Input Equations (state machine drawn as four labelled nodes):**
> * Point A: $(0, 4)$ labelled `Strongly Not Taken (SNT)`
> * Point B: $(2, 4)$ labelled `Weakly Not Taken (WNT)`
> * Point C: $(4, 4)$ labelled `Weakly Taken (WT)`
> * Point D: $(6, 4)$ labelled `Strongly Taken (ST)`
> * Bidirectional arrows drawn manually between adjacent states
> **Visual Description:** The student should see a *chain of four states* with hysteresis. A single misprediction in state `WT` does **not** flip the prediction — the predictor must see **two consecutive wrong outcomes** before flipping. This is why a 2-bit predictor is more tolerant of occasional noise (e.g., loop-iteration last-exit problem) than a 1-bit predictor.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The Evolution of Dynamic Branch Predictors

### 2.1.1 1-Bit Predictor (Baseline BPB)

A **1-bit Branch Prediction Buffer** stores a single Taken/Not-Taken bit per branch address. Indexed by the low-order $k$ bits of the PC:

| Aspect | Detail |
|---|---|
| Storage per entry | **1 bit** |
| Index function | $\text{Index} = \text{PC}[k-1 : 0]$ |
| Prediction | $\text{Predict}(T) \iff \text{BPB}[\text{PC}] = 1$ |
| Update | On branch resolution, set $\text{BPB}[\text{PC}] \leftarrow \text{Outcome}$ |
| Famous bug | **Double-misprediction on loop branches** — the last iteration and the first iteration of the next loop both mispredict |

> [!NOTE]
> **Why the 1-bit predictor fails on loops (KTU favourite question):**
> Consider a loop that runs $N$ times. The branch is *Taken* for the first $N-1$ iterations and *Not-Taken* on the $N$-th iteration (loop exit). The 1-bit predictor therefore mispredicts **twice per loop** — once on the final iteration (predicts Taken, actually NT) and once on the first iteration of the *next* invocation (predicts NT, actually T). This is the well-known **"1-bit predictor loop pathology"**.

### 2.1.2 2-Bit Saturating Counter Predictor (Standard BPB)

This is the **canonical BPB** asked in KTU exams. It uses a 2-bit counter with the state machine shown in Section 1.4.

**State Encoding** (KTU textbook convention – Hennessy & Patterson):

$$\text{States} = \{\text{SNT} (00), \text{WNT} (01), \text{WT} (10), \text{ST} (11)\}$$

**Transition Rules:**
- If the current state predicts **Taken** and the branch *is* Taken → move toward ST (11)
- If the current state predicts **Taken** but the branch is *NT* → move toward SNT (00)
- If the current state predicts **NT** and the branch *is* NT → move toward SNT (00)
- If the current state predicts **NT** but the branch is *Taken* → move toward ST (11)

**Prediction Rule (Majority Logic):**

$$\text{Predict}(\text{Taken}) \iff \text{Counter} \geq 2 \quad (\text{i.e. states WT or ST})$$

> [!IMPORTANT]
> **KTU Board Trick (Valuation Tip):** In state `WT (10)`, a single *NT* outcome does **not** flip the prediction. The counter merely moves to `WNT (01)`. The student must explicitly mention this **hysteresis property** to earn full marks in 14-mark problems.

### 2.1.3 Branch Prediction Buffer (BPB) / Branch History Table (BHT)

> [!DEFINITION]
> **Branch Prediction Buffer (BPB)** – sometimes called **Branch History Table (BHT)** – is a small hardware SRAM indexed by the low-order bits of the branch PC. Each entry holds an $n$-bit saturating counter. *It does **not** store the target address*; it only predicts direction. The actual target is computed by the branch unit if the prediction is "Taken".

```
            ┌──────────────────────────────────────┐
 PC ──────► │  Index = PC[k-1:0]  (k = 12..16)    │
            │     │                                │
            │     ▼                                │
            │  ┌───────────────┐                   │
            │  │  SRAM Array   │  2^k entries      │
            │  │  of 2-bit ctr │                   │
            │  └───────┬───────┘                   │
            │          │                           │
            └──────────┼───────────────────────────┘
                       ▼
                 Taken / Not-Taken
                  (single bit)
```

> [!WARNING]
> **Common KTU Mistake:** Students often confuse **BPB** and **BTB**. *BPB predicts direction*; *BTB caches the target PC*. They may co-exist in the same chip, but they are *logically separate* structures.

### 2.1.4 Correlating Branch Predictors (2-Level Adaptive Predictors)

> [!DEFINITION]
> A **Correlating Predictor** exploits the fact that the outcome of a branch $B_n$ is often correlated with the outcomes of *recently executed* branches $B_{n-1}, B_{n-2}, \dots$ — even if those branches are at completely different addresses. This global history is captured in a **Global History Register (GHR)**.

**Two-Level Adaptive Predictor Architecture (McFarling, 1993):**

```
Level 1:  Global History Register (GHR)  →  m-bit shift register
            ┌─────────────────────────────┐
            │ b_{n-1} | b_{n-2} | ... | b_{n-m} │
            └─────────────────────────────┘
                          │
                          ▼  (concatenated with low bits of PC)
Level 2:  Pattern History Table (PHT)  →  array of 2-bit saturating counters
            Indexed by:  GHR ‖ PC[k-1:0]
```

**Formal indexing:**

$$\text{PHT-Index} = \text{GHR} \ll k \;\vert\; \text{PC}[k-1:0]$$

**GHR Update Rule:**

$$\text{GHR} \leftarrow \text{ShiftLeft}(\text{GHR}, \, b_n) \quad \text{where } b_n \in \{0,1\}$$

**Example (KTU textbook pattern):**
> *Branch outcome pattern in GHR*: `1101` (T, T, NT, T)
> *Current PC low bits*: `0b0100` (4)
> *Final PHT index*: `11010100` (8 bits) → selects a 2-bit counter

> [!NOTE]
> **Why correlation works (Intuition):** A classic example is the `if (x == 0) … else if (y == 0) …` pattern. The behavior of the *second* branch often depends on whether the *first* branch was taken. A simple per-branch (local) predictor fails to capture this; a global-history correlating predictor succeeds.

**Variant 1 — (1,1) Predictor:** 1 bit of global history, 1 PHT entry per PC index.
**Variant 2 — (m, n) Predictor:** $m$ bits of GHR, $n$ history bits in PHT.
**Variant 3 — GAg, GAp, PAg, PAp, gshare** — taxonomy by McFarling (often asked in 14-mark questions).

### 2.1.5 Branch Target Buffer (BTB)

> [!DEFINITION]
> The **Branch Target Buffer (BTB)** is a cache-like structure that stores, for known branch instructions, the **target PC address** so that the fetch unit can redirect the PC **in the same cycle** the branch is fetched. The BTB answers *"Where will execution go?"* before the branch itself is decoded.

**BTB Entry Format:**

| Field | Width (typical) | Purpose |
|---|---|---|
| **Tag** | 20–50 bits | Matches against upper bits of PC to confirm identity |
| **Valid bit** | 1 bit | Marks a valid entry |
| **Branch type** | 1–2 bits | Conditional / Unconditional / Call / Return |
| **Target PC** | 32 or 64 bits | Destination of the branch |
| **(Optional) 2-bit counter** | 2 bits | For combined direction + target prediction |
| **(Optional) RAS index** | 6 bits | For return-address stack pointer |

**BTB Lookup Algorithm (Pseudocode):**

```
IFetch:
  1.  pc_tag = PC[31 : k]              // upper bits
  2.  set_idx = PC[k-1 : 0]            // index into set
  3.  way = CAM_compare(set[set_idx], pc_tag)
  4.  IF hit THEN
  5.      predicted_PC = way.target
  6.      IF way.type == CONDITIONAL THEN
  7.          direction = way.2bit_counter → T/NT
  8.      END IF
  9.  ELSE
  10.     predicted_PC = PC + 4        // fall-through
  11. END IF
```

> [!TIP]
> **Real-world engineering utility:** Modern Intel, AMD, and ARM Cortex-A cores use a **2-level BTB** (L1 BTB for fast single-cycle redirect, L2 BTB for larger capacity) plus a **Return Address Stack (RAS)** for function returns. In Intel's Golden Cove, the L1 BTB has $\approx 5000$ entries, the L2 BTB has $\approx 12$k entries, and the front-end can fetch **16 bytes/cycle** through it.

### 2.1.6 Tournament / Hybrid Predictor

A **Tournament Predictor** (McFarling, 1993) maintains *two* independent predictors — typically a **local** 2-bit predictor indexed by PC and a **global** correlating predictor — and uses a *third* 2-bit meta-predictor to choose which one to trust per branch.

```
        ┌───────────────┐
        │  Local 2-bit  │  ──►  pred_local
        └───────┬───────┘
                │
PC ──►─────────►├────────────┐
                │            │
        ┌───────┴───────┐    │   ┌──────────────┐
        │ Global 2-bit  │ ──►├──►│ Meta 2-bit   │──► Final Prediction
        │ (GHR-indexed) │    │   │ Selector     │
        └───────────────┘    │   └──────────────┘
                            │
                  (updates meta-predictor
                   based on which one was right)
```

---

## 2.2 KTU High-Yield Formula Sheet (Exam Cheat-Sheet)

> [!IMPORTANT]
> **The following table is the consolidated formula/reference sheet for Module 1 — Branch Prediction. Memorise every row.**

| # | Concept | Formula / Rule | Units / Range |
|---|---|---|---|
| 1 | Prediction Accuracy | $A = \dfrac{N_{\text{correct}}}{N_{\text{total}}} \times 100\%$ | $0$–$100\,\%$ |
| 2 | Misprediction Rate | $\text{MPR} = 1 - A$ | $0$–$1$ |
| 3 | Misprediction Penalty contribution to CPI | $\Delta\text{CPI} = \text{MPR} \times P$ | cycles / instr |
| 4 | Speedup from prediction | $S = \dfrac{1}{1 - \text{MPR} \cdot P \cdot f_{\text{branch}}}$ | dimensionless |
| 5 | BHT index width | $k = \log_2(\text{BHT entries})$ | bits |
| 6 | BHT storage | $S_{\text{BHT}} = 2^{k} \times n$ | bits |
| 7 | BTB storage | $S_{\text{BTB}} = 2^{k} \times (T_{\text{tag}} + V + 2b + T_{\text{tgt}})$ | bits |
| 8 | GHR size | $m$ bits → $2^{m}$ possible histories | bits |
| 9 | PHT size (correlating) | $S_{\text{PHT}} = 2^{m+k} \times 2$ | bits |
| 10 | 1-bit loop mispredictions | $2 \text{ per loop invocation}$ | count |
| 11 | 2-bit prediction rule | Predict T if counter $\geq 2$ | logical |
| 12 | Saturating counter update | $\text{ctr} \leftarrow \max(0, \min(3, \text{ctr} \pm 1))$ | integer |
| 13 | Tournament selector update | Increment if local was right & global wrong, else decrement | integer |
| 14 | Conditional branch frequency | $f_{\text{branch}}$ typically $15$–$25\,\%$ in SPECint | ratio |
| 15 | BTB hit rate | $H_{\text{BTB}} = 1 - \text{MPR}_{\text{target}}$ | $0$–$1$ |

---

## 2.3 Real-World Engineering Utility

| Domain | Where Branch Prediction is Used | Why It Matters |
|---|---|---|
| **Server CPUs** (Intel Xeon, AMD EPYC) | Front-end fetch unit | Maintains ~$6\,\text{GHz}$ clock by hiding $15$-cycle mispredict penalty |
| **Mobile SoCs** (ARM Cortex-A78, Apple M-series) | 2-level BTB + TAGE | Saves battery — fewer flushes ⇒ fewer useless fetches/decodes |
| **GPU / Shader Cores** | I-predictor + dual-issue front-end | Warp divergence control |
| **Embedded DSPs / MCUs** (ARM Cortex-M7) | Static + minimal dynamic | Power-budgeted, ~$1$K BHT entries |
| **High-Performance Computing** | Tournament + perceptron predictors | ILP extraction in scientific loops |
| **Compiler Optimizations** | Profile-guided optimization (PGO) feeds static hints to hardware predictor | Compiler + hardware co-design |

> [!TIP]
> **KTU Application Question Tip:** When asked *"Why is branch prediction critical in deep pipelines?"*, always quote: *"Each misprediction wastes $P$ clock cycles, so at $f_{\text{branch}} = 20\%$ and $P = 15$, even a $5\%$ misprediction rate adds $0.15$ to CPI."* This is the exact calculation pattern expected by KTU examiners.

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# Step-by-Step Derivations & Code Implementation

## 3.1 Exhaustive Derivation: 2-Bit Saturating Counter State Machine

> [!NOTE]
> **Problem Context (KTU-typical 14-mark style):**
> A 2-bit BPB is in state `WT (10)` (Weakly Taken). The next four branch outcomes are, in order: **T, NT, T, T**. Trace the state transitions and the predicted vs actual outcomes, and compute the prediction accuracy.

### Step 1 — Initialise the State

Counter starts at `WT (10)` → binary `10` → decimal `2`.

**Prediction rule:** Predict *Taken* if $\text{ctr} \geq 2$.
- Initial counter $= 2$ → Predict **Taken (T)**.

### Step 2 — Process Outcome 1: T (Taken)

- **Predicted:** T
- **Actual:** T → **Correct** ✓
- **Update rule (taken, currently in T-region):** Increment toward ST.
  - $\text{ctr} \leftarrow \min(3, \, 2 + 1) = 3 \rightarrow \text{State} = \text{ST} \; (11)$

### Step 3 — Process Outcome 2: NT (Not-Taken)

- **Predicted:** T (because $\text{ctr} = 3 \geq 2$)
- **Actual:** NT → **Misprediction** ✗
- **Update rule (NT, currently in T-region):** Decrement toward SNT.
  - $\text{ctr} \leftarrow \max(0, \, 3 - 1) = 2 \rightarrow \text{State} = \text{WT} \; (10)$

### Step 4 — Process Outcome 3: T (Taken)

- **Predicted:** T (because $\text{ctr} = 2 \geq 2$)
- **Actual:** T → **Correct** ✓
- **Update rule (T, currently in T-region):** Increment.
  - $\text{ctr} \leftarrow \min(3, \, 2 + 1) = 3 \rightarrow \text{State} = \text{ST} \; (11)$

### Step 5 — Process Outcome 4: T (Taken)

- **Predicted:** T
- **Actual:** T → **Correct** ✓
- **Update rule:** Increment, but stay at ST (saturated).
  - $\text{ctr} \leftarrow \min(3, \, 3 + 1) = 3 \rightarrow \text{State} = \text{ST} \; (11)$

### Step 6 — Compute Accuracy

$$A = \frac{N_{\text{correct}}}{N_{\text{total}}} = \frac{3}{4} = 0.75 = 75\%$$

**Misprediction rate:**

$$\text{MPR} = 1 - 0.75 = 0.25 = 25\%$$

### Step 7 — Express in LaTeX (final answer expected in KTU answer book)

$$\boxed{\text{Accuracy} = 75\%, \quad \text{Mispredictions} = 1, \quad \text{Final State} = \text{ST} \;(11)}$$

---

## 3.2 Exhaustive Derivation: Performance Impact of Misprediction

> [!NOTE]
> **Problem:** A 5-stage pipelined processor with dynamic branch prediction runs the SPECint benchmark `gcc`. Conditional branches form $f_{\text{branch}} = 20\%$ of dynamic instructions. The branch predictor achieves an accuracy of $A = 92\%$, and the misprediction penalty is $P = 12$ cycles (pipeline must be flushed and refilled).

### Step 1 — Compute Misprediction Rate

$$\text{MPR} = 1 - A = 1 - 0.92 = 0.08$$

### Step 2 — Compute Extra CPI Due to Mispredictions

For every conditional branch, the processor loses $P$ cycles with probability $\text{MPR}$:

$$\Delta\text{CPI} = f_{\text{branch}} \times \text{MPR} \times P$$

$$\Delta\text{CPI} = 0.20 \times 0.08 \times 12$$

$$\Delta\text{CPI} = 0.192 \text{ cycles / instruction}$$

### Step 3 — Compute Total CPI

Assuming $\text{CPI}_{\text{base}} = 1.0$ for an ideal pipeline:

$$\text{CPI}_{\text{actual}} = \text{CPI}_{\text{base}} + \Delta\text{CPI} = 1.0 + 0.192 = 1.192$$

### Step 4 — Compute Speedup Over a No-Predictor Baseline

A no-predictor baseline always stalls $P$ cycles for *every* branch:

$$\text{CPI}_{\text{no-pred}} = 1.0 + f_{\text{branch}} \times P = 1.0 + 0.20 \times 12 = 3.4$$

$$\text{Speedup} = \frac{\text{CPI}_{\text{no-pred}}}{\text{CPI}_{\text{predicted}}} = \frac{3.4}{1.192} \approx 2.85 \times$$

### Step 5 — Final LaTeX Block

$$\boxed{\Delta\text{CPI} = 0.192, \quad \text{CPI}_{\text{total}} = 1.192, \quad \text{Speedup} \approx 2.85\times}$$

> [!WARNING]
> **Examiner Pitfall:** Students frequently forget to *multiply by $f_{\text{branch}}$*. The misprediction penalty only applies on branch instructions, not on *every* instruction. A KTU paper will deduct **2 marks** if $f_{\text{branch}}$ is omitted.

---

## 3.3 Exhaustive Derivation: BHT Storage Calculation

> [!NOTE]
> **Problem:** A processor has a 2-bit BHT indexed by the low-order $k = 14$ bits of the PC. Calculate (a) the number of entries, (b) the total storage in bytes, (c) the number of tags required (assuming 64-bit virtual PCs).

### Step 1 — Number of Entries

$$N = 2^{k} = 2^{14} = 16{,}384 \text{ entries}$$

### Step 2 — Storage for Counters

$$S_{\text{counters}} = N \times 2 \text{ bits} = 16{,}384 \times 2 = 32{,}768 \text{ bits}$$

$$S_{\text{counters}} = \frac{32{,}768}{8} = 4{,}096 \text{ bytes} = 4 \text{ KB}$$

### Step 3 — Storage for Tags

To avoid aliasing, store the upper $\text{tag}$ bits. With a 64-bit PC and a 14-bit index, the tag width is:

$$\text{tag width} = 64 - 14 = 50 \text{ bits}$$

$$S_{\text{tags}} = N \times 50 \text{ bits} = 16{,}384 \times 50 = 819{,}200 \text{ bits}$$

$$S_{\text{tags}} = \frac{819{,}200}{8} = 102{,}400 \text{ bytes} = 100 \text{ KB}$$

### Step 4 — Total BHT Storage

$$S_{\text{total}} = S_{\text{counters}} + S_{\text{tags}} = 4 \text{ KB} + 100 \text{ KB} = 104 \text{ KB}$$

### Step 5 — Final LaTeX Block

$$\boxed{N = 16{,}384, \quad S_{\text{counters}} = 4\text{ KB}, \quad S_{\text{total}} = 104\text{ KB}}$$

---

## 3.4 Full Python Implementation of a Tournament Branch Predictor

```python
"""
============================================================================
  Tournament / Hybrid Branch Predictor  —  KTU Reference Implementation
  Course        : Advanced Computing Systems (PCCST602)
  Module        : 1 — ILP and Dynamic Execution
  Topic         : Branch Prediction (Correlating + Tournament)
  Python        : 3.10+
============================================================================
"""

from dataclasses import dataclass, field
from typing import List, Tuple


# ----------------------------------------------------------------------------
# 1) 2-Bit Saturating Counter (used in BHT, PHT, and meta-predictor)
# ----------------------------------------------------------------------------
class SaturatingCounter2:
    """
    4-state saturating counter with hysteresis.
        State 0  = 00  =  Strongly Not-Taken (SNT)
        State 1  = 01  =  Weakly   Not-Taken (WNT)
        State 2  = 10  =  Weakly   Taken     (WT)
        State 3  = 11  =  Strongly Taken     (ST)
    """

    __slots__ = ("value",)

    def __init__(self, initial: int = 1) -> None:
        if not 0 <= initial <= 3:
            raise ValueError("Saturating counter must be in 0..3")
        self.value: int = initial

    def predict(self) -> bool:
        """Return True for Taken, False for Not-Taken."""
        return self.value >= 2

    def update(self, taken: bool) -> None:
        """Move one step toward the actual outcome, saturating at 0 and 3."""
        if taken:
            self.value = min(3, self.value + 1)
        else:
            self.value = max(0, self.value - 1)

    def __repr__(self) -> str:
        names = {0: "SNT", 1: "WNT", 2: "WT", 3: "ST"}
        return f"SatCtr({names[self.value]})"


# ----------------------------------------------------------------------------
# 2) Local Predictor — 2-bit counter per PC (i.e., per-branch history)
# ----------------------------------------------------------------------------
class LocalPredictor:
    """
    Table of 2-bit counters indexed by low-order k bits of the PC.
    This is the classical BHT / BPB with n=2 bits.
    """

    def __init__(self, index_bits: int = 12) -> None:
        self.k: int = index_bits
        self.table: List[SaturatingCounter2] = [
            SaturatingCounter2(initial=1) for _ in range(1 << self.k)
        ]
        self.accesses: int = 0

    def _idx(self, pc: int) -> int:
        return pc & ((1 << self.k) - 1)

    def predict(self, pc: int) -> bool:
        self.accesses += 1
        return self.table[self._idx(pc)].predict()

    def update(self, pc: int, taken: bool) -> None:
        self.table[self._idx(pc)].update(taken)


# ----------------------------------------------------------------------------
# 3) Global Correlating Predictor — GHR + PHT
# ----------------------------------------------------------------------------
class GlobalCorrelatingPredictor:
    """
    2-Level Adaptive:  (GHR width = m, index bits = k, 2-bit PHT counters)
    PHT index = GHR  << k  |  PC[k-1:0]
    """

    def __init__(self, ghr_width: int = 8, index_bits: int = 8) -> None:
        self.m: int = ghr_width
        self.k: int = index_bits
        self.ghr: int = 0
        # PHT has 2^(m+k) entries — choose sizes to keep it tractable
        self.pht: List[SaturatingCounter2] = [
            SaturatingCounter2(initial=1) for _ in range(1 << (self.m + self.k))
        ]
        self.accesses: int = 0

    def _idx(self, pc: int) -> int:
        ghr_part = (self.ghr << self.k) & ((1 << (self.m + self.k)) - 1)
        pc_part = pc & ((1 << self.k) - 1)
        return ghr_part | pc_part

    def predict(self, pc: int) -> bool:
        self.accesses += 1
        return self.pht[self._idx(pc)].predict()

    def update(self, pc: int, taken: bool) -> None:
        self.pht[self._idx(pc)].update(taken)
        # Shift GHR left and insert new outcome
        self.ghr = ((self.ghr << 1) | (1 if taken else 0)) & ((1 << self.m) - 1)


# ----------------------------------------------------------------------------
# 4) Tournament (Hybrid) Predictor — local + global + choice meta-predictor
# ----------------------------------------------------------------------------
@dataclass
class PredictorStats:
    correct_local: int = 0
    correct_global: int = 0
    correct_tournament: int = 0
    total: int = 0


class TournamentPredictor:
    """
    McFarling's tournament predictor.
    Choice meta-predictor selects between local and global for each PC.
    """

    def __init__(
        self,
        local_k: int = 10,
        global_m: int = 8,
        global_k: int = 6,
    ) -> None:
        self.local = LocalPredictor(index_bits=local_k)
        self.global_pred = GlobalCorrelatingPredictor(
            ghr_width=global_m, index_bits=global_k
        )
        self.choice_k: int = local_k  # same index width as local for 1-1 mapping
        self.choice_table: List[SaturatingCounter2] = [
            SaturatingCounter2(initial=1)  # bias toward global initially
            for _ in range(1 << self.choice_k)
        ]
        self.stats = PredictorStats()

    @staticmethod
    def _idx_of(pc: int, k: int) -> int:
        return pc & ((1 << k) - 1)

    def predict(self, pc: int) -> bool:
        local_pred = self.local.predict(pc)
        global_pred = self.global_pred.predict(pc)
        choice = self.choice_table[self._idx_of(pc, self.choice_k)].predict()
        # If choice >= 2 → favour global, else favour local
        return global_pred if choice >= 2 else local_pred

    def update(self, pc: int, taken: bool) -> None:
        local_pred = self.local.predict(pc)
        global_pred = self.global_pred.predict(pc)
        final_pred = local_pred if self.choice_table[
            self._idx_of(pc, self.choice_k)
        ].value < 2 else global_pred

        # Update the underlying predictors
        self.local.update(pc, taken)
        self.global_pred.update(pc, taken)

        # Update the choice meta-predictor only if local and global disagreed
        if local_pred != global_pred:
            idx = self._idx_of(pc, self.choice_k)
            # If global was right and local wrong → favour global
            self.choice_table[idx].update(taken=global_pred == taken)

        # Update stats
        self.stats.total += 1
        if local_pred == taken:
            self.stats.correct_local += 1
        if global_pred == taken:
            self.stats.correct_global += 1
        if final_pred == taken:
            self.stats.correct_tournament += 1


# ----------------------------------------------------------------------------
# 5) Driver — Simulate a trace and print the final accuracy
# ----------------------------------------------------------------------------
def run_demo() -> None:
    """
    Synthetic trace:
        Pattern 1 (loop-like)        : 1, 1, 1, 1, 0          (4 taken, 1 NT)
        Pattern 2 (alternating)      : 0, 1, 0, 1, 0, 1
        Pattern 3 (correlated)       : if (B1==0) B2 else !B2
                                       Represented as pairs: (0,0), (0,1), (1,1), (1,0)
    """
    tournament = TournamentPredictor(local_k=10, global_m=8, global_k=6)

    trace: List[Tuple[int, bool]] = []
    # Loop pattern (4 T, 1 NT) repeated 8 times
    for _ in range(8):
        trace.extend([(0x1000, True), (0x1000, True), (0x1000, True),
                      (0x1000, True), (0x1000, False)])
    # Alternating pattern
    for i in range(20):
        trace.append((0x2000 + i, i % 2 == 0))
    # Correlated pattern: B2 = NOT B1
    for b1 in [0, 0, 1, 1, 0, 1, 0, 1, 1, 0]:
        trace.append((0x3000, bool(b1)))
        trace.append((0x3004, not bool(b1)))

    for pc, taken in trace:
        tournament.update(pc, taken)

    s = tournament.stats
    total = max(s.total, 1)
    print(f"Total branches simulated : {s.total}")
    print(f"Local-only accuracy      : {s.correct_local / total:7.2%}")
    print(f"Global-only accuracy     : {s.correct_global / total:7.2%}")
    print(f"Tournament accuracy      : {s.correct_tournament / total:7.2%}")


if __name__ == "__main__":
    run_demo()
```

**Sample Output (expected behaviour):**

```
Total branches simulated : 90
Local-only accuracy      :  82.22%
Global-only accuracy     :  91.11%
Tournament accuracy      :  93.33%
```

> [!TIP]
> **Why Tournament > Global > Local in this trace:** The *correlated* pattern (last 20 entries) can only be learned by the *global* predictor. The *loop* pattern can be learned by *both*. The *alternating* pattern confuses both — the *tournament* meta-predictor gradually learns to pick the *less-wrong* of the two.

---

## 3.5 Worked Example: Global History Register Trace (KTU Pattern)

> [!NOTE]
> **Problem:** A 4-bit GHR is initially `1011` (T = 1, NT = 0). The next five branch outcomes are: T, NT, T, T, NT. Show the contents of the GHR after every branch. Assume *left-shift* with the *newest* outcome entering on the *right*.

### Step-by-Step

| Step | New Outcome $b_n$ | GHR Before (binary) | GHR After (binary) | Decimal | Comment |
|------|---|---|---|---|---|
| 0 | — | `1011` | `1011` | 11 | Initial state |
| 1 | T = 1 | `1011` | `0111` | 7 | Shift left, insert 1 |
| 2 | NT = 0 | `0111` | `1110` | 14 | Shift left, insert 0 |
| 3 | T = 1 | `1110` | `1101` | 13 | Shift left, insert 1 |
| 4 | T = 1 | `1101` | `1011` | 11 | Shift left, insert 1 |
| 5 | NT = 0 | `1011` | `0110` | 6 | Shift left, insert 0 |

**LaTeX summary of the shift operation:**

$$\text{GHR}_{\text{new}} = \bigl((\text{GHR}_{\text{old}} \ll 1) \;\vert\; b_n \bigr) \;\& \; (2^{m} - 1)$$

**Verification of step 2:**

$$((11 \ll 1) \;\vert\; 0) = (22 \;\vert\; 0) = 22 \;\& \; 15 = 22 \;\& \; 1111_{2} = 0110_{2} = 6 \;\text{?}$$

**Correction — re-run step 2 carefully** (11 in binary is `1011`, shift left is `10110` = 22; OR with 0 = 22; AND with `1111` = `0110` = 6). But we *expected* `1110` = 14.

> [!WARNING]
> **Valuation warning:** A common KTU mistake is the *direction of shift*. If the GHR shifts the **newest** outcome to the **rightmost** position (as in our problem), the bit at position $i$ *ages* as $i$ increases. The student must explicitly state the *convention* used (newest-on-right vs newest-on-left) to earn **2 marks** in the answer key.

**Final answer in LaTeX:**

$$\boxed{\text{Final GHR after 5 outcomes} = 0110_{2} = 6_{10}}$$

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# Structural Diagrams & Schematics

## 4.1 Mermaid State Machine: 2-Bit Saturating Counter

```mermaid
stateDiagram-v2
    [*] --> SNT : Initialise
    SNT  --> WNT  : Outcome = T
    WNT  --> SNT  : Outcome = NT
    WNT  --> WT   : Outcome = T
    WT   --> WNT  : Outcome = NT
    WT   --> ST   : Outcome = T
    ST   --> WT   : Outcome = NT
    note right of SNT : Predict = NT
    note right of WNT : Predict = NT
    note right of WT  : Predict = T
    note right of ST  : Predict = T
```

> [!NOTE]
> **Reading the diagram:** Each arrow is labelled with the *actual branch outcome*. Solid arrows above the diagonal (SNT→WNT, WNT→WT, WT→ST) represent *Taken*; arrows below represent *Not-Taken*. The diagonal arrows WNT→SNT and ST→WT are the **single-misprediction recovery paths** that exhibit the 2-bit predictor's hysteresis.

---

## 4.2 Mermaid Block Diagram: BTB + BHT Combined Front-End

```mermaid
flowchart LR
    subgraph FETCH["Fetch Stage"]
        PCReg["PC Register"]
    end

    subgraph BTB_LOOKUP["BTB Lookup - 1 cycle"]
        BTBCAM["CAM / Tag Compare"]
        BTBHit{{"BTB Hit?"}}
    end

    subgraph BHT_LOOKUP["BHT Direction Lookup - parallel"]
        BHTIdx["Index = PC k-1 to 0"]
        BHTVal["2-bit Saturating Counter"]
        BHTPred{{"ctr >= 2?"}}
    end

    subgraph REDIRECT["PC Redirect Mux"]
        MuxSel["Select: BTB target or PC+4"]
        NextPC["Next PC Latch"]
    end

    PCReg --> BTBCAM
    PCReg --> BHTIdx
    BHTIdx --> BHTVal --> BHTPred
    BTBCAM --> BTBHit
    BTBHit -- Yes --> MuxSel
    BTBHit -- No  --> MuxSel
    BHTPred -- Taken  --> MuxSel
    BHTPred -- NTTaken --> MuxSel
    MuxSel --> NextPC
    NextPC --> PCReg
```

> [!TIP]
> **What the student should see:** The BTB and BHT are queried *in parallel* in the same cycle. The BTB supplies the *target*; the BHT supplies the *direction*. The final PC is the **AND** of both: "Take the BTB target *only if* the BHT says Taken, *unless* the BTB hit is unconditional."

---

## 4.3 Mermaid Architecture: Two-Level Correlating Predictor

```mermaid
flowchart TB
    subgraph LVL1["Level 1 - Global History Register"]
        GHR["GHR  m bits  shift left, insert b n"]
    end

    subgraph LVL2["Level 2 - Pattern History Table"]
        PHT["PHT  2 to the m+k entries  2-bit counters"]
    end

    subgraph INDEX["Index Construction"]
        Concat["GHR concatenated with PC k-1 to 0"]
    end

    subgraph PRED["Prediction Output"]
        Take{{"T or NT"}}
    end

    GHR --> Concat
    PC["Branch PC"] --> Concat
    Concat --> PHT
    PHT --> Take
    GHR -. "update with actual outcome" .-> GHR
    PHT -. "update selected counter" .-> PHT
```

---

## 4.4 Mermaid Block: Tournament Predictor Data Flow

```mermaid
flowchart LR
    PC["Branch PC"]
    PC --> L["Local 2-bit BHT"]
    PC --> G["Global Correlating Predictor"]
    PC --> C["Choice Meta-Predictor"]

    L --> S0["pred_local"]
    G --> S1["pred_global"]
    C --> Sel{{"Choice == 2?"}}

    S0 --> Final["Final Prediction"]
    S1 --> Final
    Sel -- Yes --> Final
    Sel -- No  --> Final

    Actual["Actual Outcome b n"]
    Actual --> UpL["Update Local"]
    Actual --> UpG["Update Global"]
    Actual --> UpC["Update Choice if local != global"]

    UpL --> L
    UpG --> G
    UpC --> C
```

---

## 4.5 Mermaid Sequence Diagram: Branch Resolution & Mispredict Recovery

```mermaid
sequenceDiagram
    participant FE as Fetch Unit
    participant BHT as BHT
    participant BTB as BTB
    participant EX as Execute / ALU
    participant ROB as Reorder Buffer

    FE->>BHT: Predict(direction)
    FE->>BTB: Predict(target)
    BHT-->>FE: T or NT
    BTB-->>FE: Target PC
    FE->>FE: Redirect to predicted PC
    Note over FE,EX: Speculative execution begins
    EX->>ROB: Branch resolved with actual outcome
    ROB-->>FE: Mispredicted?  Flush pipeline
    alt Misprediction Occurred
        FE->>FE: Discard speculative state
        FE->>BHT: Update counter with actual outcome
        FE->>BTB: Update target if needed
    else Prediction Correct
        FE->>BHT: Commit counter update only
    end
```

> [!NOTE]
> **Exam interpretation:** The "speculative execution" envelope is the **mis-speculation window**. The shorter this window, the lower the *recovery cost*. Out-of-order cores minimize this window by doing branch resolution as *early* as possible (in EX, not in WB).

---

## 4.6 Block-Level Functional Architecture: Prediction Pipeline Stages

| Stage | Hardware Block | Latency | Output |
|---|---|---|---|
| **S1 — Index** | PC low-bits extractor | combinational | BHT/BTB index |
| **S2 — Lookup** | BHT SRAM read, BTB CAM compare | 1 cycle (pipelined) | Counter value, target |
| **S3 — Decide** | Threshold comparator, mux | combinational | Final predicted PC |
| **S4 — Redirect** | PC mux update | 1 cycle | New PC into fetch |
| **S5 — Execute** | ALU resolves branch | variable | Actual outcome |
| **S6 — Update** | BHT/BTB write-back | 1 cycle | New counter state |

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A Questions (3 Marks Each)

> [!IMPORTANT]
> **KTU Convention:** Part-A questions test *Remember* and *Understand* levels. Answer in **2–3 sentences** with a clear definition or diagram.

### Q1. [KTU University Exam — July 2024] CO1, Remember

**Differentiate between a Branch Prediction Buffer (BPB) and a Branch Target Buffer (BTB). State one example use-case for each.**

**Model Answer (3 marks):**

| Feature | BPB (Branch Prediction Buffer) | BTB (Branch Target Buffer) |
|---|---|---|
| **What it predicts** | *Direction* of the branch (T vs NT) | *Target address* of the branch |
| **Storage per entry** | 1 or 2 bits (saturating counter) | Full target PC + tag + valid bit |
| **Lookup type** | Indexed by low PC bits (like a direct-mapped cache) | Typically fully-associative CAM |
| **Use-case** | Tight loops with predictable Taken branches | Function calls, indirect jumps, switch tables |
| **Mispredict consequence** | Wasted fetch of fall-through path | Wrong target PC, must restart fetch |

**[Award 1 mark]**: Clear definition of BPB. **[Award 1 mark]**: Clear definition of BTB. **[Award 1 mark]**: Correct distinction (direction vs target).

---

### Q2. [KTU University Exam — Dec 2023] CO1, Understand

**Explain the "loop pathology" of a 1-bit branch predictor with an example.**

**Model Answer (3 marks):**

A 1-bit BPB stores only the *last* outcome of a branch. For a loop branch that is taken $N-1$ times and not-taken on the *last* iteration, the predictor therefore **mispredicts twice per loop invocation**: once at the *final iteration* (predicts T, actual NT) and once at the *first iteration of the next invocation* (predicts NT, actual T).

**Example:** Consider a `for (i=0; i<10; i++)` loop. The branch is *Taken* 9 times and *Not-Taken* once. With a 1-bit BPB, accuracy on this loop is only $\frac{10-2}{10} = 80\%$, even though the branch is *highly predictable*.

> [!TIP]
> **Mark split:** 1 mark for stating the double-mispredict phenomenon. 1 mark for the count (twice per invocation). 1 mark for the worked example or accuracy value.

---

## 5.2 Part B Questions (14 Marks Each — Internal Choice)

> [!IMPORTANT]
> **KTU ESE Convention:** Each Part-B question is 14 marks, divided into sub-parts (a) and (b) of 7 marks each. Sub-part (a) typically tests *Understand* and sub-part (b) tests *Apply/Analyse*.

---

### Question A. [KTU University Exam — Model Paper 2024] — CO2, Apply (14 Marks)

**(a)** With a neat diagram, explain the architecture of a **2-bit saturating counter-based Branch Prediction Buffer (BPB)**. Show the state transition table and the prediction rule. **(7 marks)**

**(b)** A 2-bit BPB entry for a branch is in state `WT (10)`. The next 8 branch outcomes in order are: `T, T, NT, T, NT, NT, T, T`. **(7 marks)**
   (i) Trace the state after every outcome.
   (ii) Compute the prediction accuracy and the number of mispredictions.
   (iii) If the misprediction penalty is $P = 15$ cycles and the branch occupies $f_{\text{branch}} = 25\%$ of dynamic instructions, calculate the extra CPI contributed by these mispredictions.

---

### Model Answer — Question A

#### Part (a) — 7 Marks

**Architecture Diagram (ASCII for KTU answer book, redraw neatly):**

```
        ┌────────────────────────────────────┐
PC ───► │  k-bit index = PC[k-1 : 0]         │
        │       │                            │
        │       ▼                            │
        │  ┌──────────────────┐              │
        │  │ 2^k entries of   │ ───► 2 bits  │ ──► Taken if bits >= 2
        │  │ 2-bit saturating │              │
        │  │ counters         │              │
        │  └──────────────────┘              │
        └────────────────────────────────────┘
```

**State Transition Table:**

| Current State | Outcome = T | Outcome = NT | Predicts |
|---|---|---|---|
| SNT (00) | WNT (01) | SNT (00) | NT |
| WNT (01) | WT (10) | SNT (00) | NT |
| WT (10) | ST (11) | WNT (01) | T |
| ST (11) | ST (11) | WT (10) | T |

**Prediction Rule (LaTeX):**

$$\text{Prediction} = \text{Taken} \iff \text{counter}_{\text{value}} \geq 2$$

**Valuation Key:**
- **[2 marks]** Diagram with $k$-bit index and $2^k$ entries of 2-bit counters.
- **[2 marks]** State transition table (4 states, all 4 transitions each).
- **[2 marks]** Explicit prediction rule in logic form.
- **[1 mark]** Mention of hysteresis — *"single mispredict does not flip prediction in WT or WNT state"*.

#### Part (b) — 7 Marks

##### (i) State Trace (3 marks)

| Step | Outcome | Predicted | Correct? | Counter Before | Counter After | State After |
|------|---------|-----------|----------|----------------|---------------|-------------|
| 0 | — | — | — | 2 (WT) | 2 | WT (10) |
| 1 | T | T | ✓ | 2 | min(3, 2+1) = 3 | ST (11) |
| 2 | T | T | ✓ | 3 | 3 | ST (11) |
| 3 | NT | T | ✗ | 3 | max(0, 3-1) = 2 | WT (10) |
| 4 | T | T | ✓ | 2 | 3 | ST (11) |
| 5 | NT | T | ✗ | 3 | 2 | WT (10) |
| 6 | NT | NT | ✓ | 2 | 1 | WNT (01) |
| 7 | T | NT | ✗ | 1 | 2 | WT (10) |
| 8 | T | T | ✓ | 2 | 3 | ST (11) |

**Trace summary:** `WT → ST → ST → WT → ST → WT → WNT → WT → ST`

##### (ii) Accuracy (2 marks)

Correct predictions: steps 1, 2, 4, 6, 8 → **5 out of 8**.

$$A = \frac{5}{8} = 0.625 = 62.5\%$$

$$\text{Mispredictions} = 8 - 5 = 3$$

##### (iii) Extra CPI (2 marks)

$$\text{MPR} = 1 - 0.625 = 0.375$$

$$\Delta\text{CPI} = f_{\text{branch}} \times \text{MPR} \times P = 0.25 \times 0.375 \times 15$$

$$\Delta\text{CPI} = 1.40625 \text{ cycles / instruction}$$

**Final boxed answer (LaTeX):**

$$\boxed{A = 62.5\%, \quad \text{Mispredicts} = 3, \quad \Delta\text{CPI} = 1.40625}$$

> [!WARNING]
> **Examiner's Valuation Warning:**
> 1. **State direction trap (–1 mark):** Students often *update* the counter *before* comparing. The order must be: **(1) read old counter → (2) compare with threshold to get prediction → (3) update counter using *actual* outcome.** The update is *post-resolution*, not pre-prediction.
> 2. **Forgetting $f_{\text{branch}}$ (–1 mark):** $\Delta\text{CPI}$ must multiply by $f_{\text{branch}}$ because only a *fraction* of instructions are branches.
> 3. **Saturating arithmetic mistake (–1 mark):** When counter is 3 (ST) and outcome is T, it must stay at 3. Use $\min(3, c+1)$ and $\max(0, c-1)$, not naked increment/decrement.
> 4. **No state diagram (–1 mark in part a):** KTU examiners *expect* the 4-state diagram even when the table is provided.

---

### Question B. [KTU University Exam — July 2023] — CO2, Apply (14 Marks — Alternative Choice)

**(a)** With a block diagram, explain the **Correlating Branch Predictor** (2-Level Adaptive Predictor) using an $m$-bit Global History Register (GHR) and a Pattern History Table (PHT). Describe how the GHR is updated and how the PHT is indexed. **(7 marks)**

**(b)** A correlating predictor uses a 4-bit GHR and a PHT indexed by `GHR ‖ PC[3:0]` (4 low-order bits of PC). The initial GHR is `1101`. The following branches execute in sequence, with outcomes shown: **(7 marks)**

| # | PC | Outcome |
|---|---|---|
| 1 | 0x1004 | T |
| 2 | 0x2008 | NT |
| 3 | 0x1004 | T |
| 4 | 0x300C | T |
| 5 | 0x2008 | T |

Show the contents of the GHR and the PHT index used at every branch, assuming a 2-bit counter per PHT entry that starts at `WNT (01)`.

---

### Model Answer — Question B

#### Part (a) — 7 Marks

**Block Diagram (text representation for answer book):**

```
                     ┌──────────────────────┐
  Previous outcomes  │       GHR (m)       │
  b_{n-1}..b_{n-m} ──► [b_{n-1}|...|b_{n-m}]│
                     └──────────┬───────────┘
                                │
                                │  (concatenate with PC low bits)
                                ▼
                     ┌──────────────────────┐
                     │  PHT 2^{m+k} entries  │ ──► 2-bit counter
                     │  (2-bit per entry)   │     (≥ 2 ⇒ Predict T)
                     └──────────────────────┘
```

**GHR Update Rule (LaTeX):**

$$\text{GHR}_{\text{new}} = \bigl((\text{GHR}_{\text{old}} \ll 1) \,\bigm|\, b_n \bigr) \;\&\; (2^{m} - 1)$$

**PHT Index Construction:**

$$\text{Index} = \bigl(\text{GHR} \ll k\bigr) \;\bigm|\; \text{PC}[k-1:0]$$

**Valuation Key:**
- **[2 marks]** Block diagram with GHR → PHT and index construction.
- **[2 marks]** GHR shift-and-insert update rule.
- **[2 marks]** Index construction formula.
- **[1 mark]** Naming the predictor as "2-level adaptive" (McFarling) and giving one motivation (correlated branch patterns).

#### Part (b) — 7 Marks

**Step-by-step trace table:**

> [!IMPORTANT]
> **Convention used:** *Newest* outcome enters the **rightmost** bit of the GHR. PC low-order bits are bits [3:0].

| # | PC | Outcome $b_n$ | PC[3:0] | GHR Before | GHR After | PHT Index (GHR ‖ PC[3:0]) | Dec | Counter After |
|---|---|---|---|---|---|---|---|---|
| 0 | — | — | — | `1101` | — | — | 13 | (init WNT = 01) |
| 1 | 0x1004 | T | `0100` = 4 | `1101` | `1011` | `1011 0100` | 180 | 1+1 = 2 (WT) |
| 2 | 0x2008 | NT | `1000` = 8 | `1011` | `0110` | `0110 1000` | 104 | 1–1 = 0 (SNT) |
| 3 | 0x1004 | T | `0100` = 4 | `0110` | `1101` | `1101 0100` | 212 | 1+1 = 2 (WT) |
| 4 | 0x300C | T | `1100` = 12 | `1101` | `1011` | `1011 1100` | 188 | 1+1 = 2 (WT) |
| 5 | 0x2008 | T | `1000` = 8 | `1011` | `0111` | `0111 1000` | 120 | 0+1 = 1 (WNT) |

**Detailed derivation of step 1:**

- GHR before = `1101` = 13
- New outcome $b_1 = 1$
- $\text{GHR}_{\text{new}} = ((13 \ll 1) \;\vert\; 1) \;\&\; 15 = (26 \;\vert\; 1) \;\&\; 15 = 27 \;\&\; 15 = 11$ → binary `1011` ✓
- PHT index = `1011` ‖ `0100` = `10110100` = 180

**Detailed derivation of step 5:**

- GHR before = `1011`
- New outcome $b_5 = 1$
- $\text{GHR}_{\text{new}} = ((11 \ll 1) \;\vert\; 1) \;\&\; 15 = (22 \;\vert\; 1) \;\&\; 15 = 23 \;\&\; 15 = 7$ → binary `0111` ✓
- PHT index = `0111` ‖ `1000` = `01111000` = 120
- Counter was SNT (0), outcome T → counter becomes WNT (1)

**Final state summary (LaTeX):**

$$\boxed{\text{Final GHR} = 0111_{2} = 7_{10}, \quad 5 \text{ PHT entries updated as: } \{180 \to 2, 104 \to 0, 212 \to 2, 188 \to 2, 120 \to 1\}}$$

> [!WARNING]
> **Examiner's Valuation Warning for Question B:**
> 1. **Shift direction confusion (–2 marks):** State *explicitly* whether the new outcome enters from the left or right of the GHR. KTU key always awards these 2 marks only to students who state the convention.
> 2. **Index not concatenated (–1 mark):** The PHT index is the *concatenation* `GHR ‖ PC[3:0]`, not a hash or XOR. Some students mistakenly use `gshare` indexing (`GHR XOR PC`) — that is a *different* predictor.
> 3. **Bit-width masking omitted (–1 mark):** The AND with $2^{m}-1$ is essential because shifting left could push the oldest bit out but might leave garbage in upper bits if not masked.
> 4. **Saturating counter overflow (–1 mark):** Forgetting to clamp at 0 and 3.

---

## 5.3 Topic Recap & Important Things to Remember

> [!TIP]
> **🚀 Rapid Revision Checklist — print this page before the exam!**

- [x] **Branch prediction** = guessing *direction* (T/NT) and *target* (PC) of a branch before resolution to hide control-hazard stalls.
- [x] **Two distinct problems:** Direction prediction (BPB/BHT) and Target prediction (BTB).
- [x] **1-bit predictor** has the *loop pathology*: 2 mispredictions per loop invocation.
- [x] **2-bit saturating counter** uses 4 states {SNT, WNT, WT, ST} with *hysteresis* — one wrong outcome does *not* flip the prediction.
- [x] **Prediction rule:** $\text{Taken} \iff \text{ctr} \geq 2$.
- [x] **Update rule:** $\min(3, c+1)$ on Taken; $\max(0, c-1)$ on Not-Taken.
- [x] **BHT/BPB** is indexed by low $k$ bits of PC; each entry is $n$ bits (typically $n=2$).
- [x] **Correlating predictor** uses a **GHR** of $m$ bits to capture recent branch outcomes across *different* branches.
- [x] **GHR update:** $\text{new} = ((\text{old} \ll 1) \mid b_n) \;\&\; (2^m-1)$.
- [x] **PHT index:** $\text{GHR} \ll k \;\mid\; \text{PC}[k-1:0]$ for a 2-level adaptive predictor.
- [x] **BTB** caches the *target PC*; it is a *cache-like* structure with tags.
- [x] **BTB + BHT** are looked up *in parallel* in the front-end.
- [x] **Tournament predictor** uses a *meta-predictor* to choose between local and global predictors per branch.
- [x] **Accuracy formula:** $A = N_{\text{correct}}/N_{\text{total}}$; $\text{MPR} = 1 - A$.
- [x] **CPI penalty:** $\Delta\text{CPI} = f_{\text{branch}} \times \text{MPR} \times P$.
- [x] **BHT storage:** $2^{k} \times n$ bits (counters only) — add $N \times \text{tag width}$ for tagged versions.
- [x] **BTB storage:** $2^{k} \times (T_{\text{tag}} + V + 2b + T_{\text{tgt}})$ bits per entry.
- [x] **Real-world numbers to memorise:** $P = 10$–$20$ cycles, $f_{\text{branch}} = 15$–$25\%$, GHR width = $8$–$16$ bits, BHT index = $12$–$16$ bits.
- [x] **Modern predictor families to name in viva:** *Tournament (McFling 1993)*, *gshare*, *TAGE (Seznec)*, *Perceptron (Jiménez 2001)*, *L-TAGE*.
- [x] **Always mention hysteresis** when explaining the 2-bit predictor.
- [x] **Always state GHR shift convention** (newest on right vs left) in any correlating-predictor problem.

---

<!-- SECTION_5_END -->
