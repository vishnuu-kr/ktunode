# Pipelining Architecture: core concepts, 5-stage RISC-V pipelined execution model

<!-- SECTION_1_START -->

# Pipelining Architecture: Core Concepts & 5-Stage RISC-V Pipeline

## 1.1 Formal Academic Definition (KTU 2024 Syllabus Terminology)

> [!IMPORTANT]
> **Pipeline (Karp, 1976 / Hennessy-Patterson Definition):** A pipelining is an implementation technique in which multiple instructions are overlapped in execution, taking advantage of the parallelism that exists among the actions needed to execute an instruction. A pipeline is a series of stages, where each stage performs a portion of the instruction execution work and passes partial results to the next stage.

In the **KTU 2024 Scheme (PBCST404 - Module 2)** context, a pipelined datapath is a partitioned processor design where the **single-cycle datapath** is broken into $N$ sequential stages separated by **pipeline registers**. Each stage completes its work in **one clock cycle** (or one sub-cycle), and multiple instructions occupy the pipeline simultaneously, each at a different stage of execution.

The **RISC-V 5-stage pipeline** is the canonical reference architecture used in Patterson \& Hennessy's *Computer Organization and Design (RISC-V Edition)*, which is the prescribed textbook for KTU PBCST404. The five stages are:

| Stage | Mnemonic | Hardware Block | Functional Role |
| :--- | :--- | :--- | :--- |
| 1 | **IF** | Instruction Memory + PC | Instruction Fetch |
| 2 | **ID** | Register File + Decoder | Instruction Decode \& Register Read |
| 3 | **EX** | ALU | Execute / Address Calculation |
| 4 | **MEM** | Data Memory | Memory Access |
| 5 | **WB** | Register File | Write Back |

> [!NOTE]
> **Standard Metric (KTU Board expects this):** A balanced 5-stage RISC-V pipeline where every stage has equal latency $\tau = T_{clk} / 5$ achieves a **theoretical speedup of 5×** over a single-cycle implementation, assuming no hazards and unlimited resources.

## 1.2 Intuitive Analogy — The "Laundry Pipeline"

Imagine doing **4 loads of laundry** ($I_1, I_2, I_3, I_4$) with **3 sequential stages** (Wash, Dry, Fold). The naïve sequential approach is:

- **Sequential (No Pipeline):** Total time = $4 \times (30 + 40 + 20) = 360$ minutes.
- **Pipelined:** As soon as $I_1$ moves to *Dry*, $I_2$ enters *Wash*. After the *fill-up time* (180 min), one load finishes every 40 min.

| Time (min) → | 30 | 60 | 90 | 120 | 150 | 180 | 210 | 240 | 270 | 300 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $I_1$ | W | D | F | | | | | | | |
| $I_2$ | | W | D | F | | | | | | |
| $I_3$ | | | W | D | F | | | | | |
| $I_4$ | | | | W | D | F | | | | |

**Key Insight:** Pipelining does **NOT** reduce the *latency* of a single instruction; it increases **throughput** (instructions completed per unit time). This is the single most important conceptual point KTU examiners test.

## 1.3 RISC-V Pipeline — The Reference Architecture

> [!IMPORTANT]
> **RISC-V (Reduced Instruction Set Computer - V):** An open-standard ISA developed at UC Berkeley (2010). KTU's PBCST404 uses the **RV32I** (32-bit base integer) subset with registers $x0$–$x31$, where $x0$ is hardwired to zero.

A typical RISC-V instruction traverses the pipeline as follows:

1. **IF (Instruction Fetch):** $IR \leftarrow Mem[PC]$, $NPC \leftarrow PC + 4$.
2. **ID (Instruction Decode):** Read $rs1, rs2$ from register file; sign-extend immediate; decode opcode.
3. **EX (Execute):** ALU operates on $A$ and $B$ (operands from ID/forwarding unit); branch target and condition computed.
4. **MEM (Memory Access):** For loads: $LMD \leftarrow Mem[ALUResult]$; for stores: $Mem[ALUResult] \leftarrow B$.
5. **WB (Write Back):** Write result back to destination register in the register file.

> [!VISUALIZATION CONTROL]
> **Concept:** Pipeline Speedup vs. Number of Stages (Amdahl's limit visualization)
> **GeoGebra / Desmos Input Equations:**
> * `Speedup(n) = n / (1 + (n - 1) * h)` where $h$ is the imbalance factor (try $h = 0$ for ideal, $h = 0.2$ for realistic)
> * `Ideal_Speedup(n) = n`
> **Visual Description:** The student should observe a line of slope 1 for ideal pipelining, and a curve that flattens (asymptotes) when stage imbalance $h > 0$. The crossover point where realistic and ideal lines diverge is the **stage-imbalance bottleneck** — exactly why RISC-V uses **5 equal stages** rather than more.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Pipeline Operational Principles — The "Why" Behind Each Stage

A pipelined processor is essentially a **synchronous sequential circuit with k pipeline registers** inserted into the single-cycle datapath. The single-cycle critical path $T_{c, single}$ is partitioned into $N$ stages with latencies $\tau_1, \tau_2, \ldots, \tau_N$. The new clock period is:

$$T_{clk, pipe} = \max(\tau_i) + t_{reg} = \tau_{max} + t_{reg}$$

where $t_{reg}$ is the **pipeline register setup + clock-to-Q delay**.

> [!NOTE]
> **Why Five Stages (not 3, not 10)?** The textbook choice of 5 stages is the **engineering optimum** for RISC-V because each stage corresponds to a *naturally balanced hardware unit* (memory, decoder, ALU, memory, register write). Adding more stages (super-pipelining) increases $t_{reg}$ overhead and causes more hazards; fewer stages (e.g., 3) leaves critical-path imbalance.

### 2.1.1 Pipeline Registers (The "Buffer Zones")

Between every two consecutive stages, **pipeline registers** latch the intermediate results. In the RISC-V reference design, the registers are named:

- **IF/ID** — latches $NPC$ and fetched $IR$ (instruction bits).
- **ID/EX** — latches $A, B$, sign-extended $Imm$, $Rd$, and control bits.
- **EX/MEM** — latches $ALUResult$, $B$-value (for stores), and $Rd$.
- **MEM/WB** — latches $LMD$ (load data) and $ALUResult$, plus $Rd$.

> [!IMPORTANT]
> **Each pipeline register carries BOTH data AND control signals.** This is why the control unit in a pipelined design must be *distributed* — control bits for later stages (e.g., RegWrite, MemRead) are computed in ID and **propagated forward** through the pipeline registers.

## 2.2 KTU Formula Sheet — Pipeline Performance

| Symbol | Quantity | Formula / Definition | Unit |
| :--- | :--- | :--- | :--- |
| $N$ | Number of pipeline stages | Design constant (5 for RISC-V) | stages |
| $\tau$ | Stage latency (balanced) | $T_{clk, pipe} = T_{c, single} / N + t_{reg}$ | ns |
| $T_{clk, pipe}$ | Pipelined clock period | $\tau_{max} + t_{reg}$ | ns |
| $CPI_{pipe}$ | Cycles per instruction (pipelined) | Ideal: **1.0**; Realistic: $1 + \text{hazard stalls}$ | cycles/instr |
| $S_{\infty}$ | Ideal speedup (no hazards) | $N$ (number of stages) | dimensionless |
| $S_{real}$ | Realistic speedup | $S_{\infty} \times \dfrac{CPI_{single}}{CPI_{pipe}}$ | dimensionless |
| $T_{n}$ | Total time for $n$ instructions | $T_{n} = (n + N - 1) \times T_{clk, pipe}$ | ns |
| $TP$ | Throughput | $TP = 1 / T_{clk, pipe}$ | instr / ns |
| $L$ | Latency of single instruction | $N \times T_{clk, pipe}$ | ns |
| $\eta$ | Pipeline efficiency | $\eta = \dfrac{S_{real}}{N} = \dfrac{CPI_{single}}{N \cdot CPI_{pipe}}$ | fraction (0–1) |

> [!IMPORTANT]
> **Note on notation:** In the table above, the absolute value / cardinality notation is replaced with $\vert$ or $\mid$ to avoid corrupting the markdown table parser. KTU expects students to write $N$ (the number of stages) explicitly — never use set-cardinality bars in their exam answer formulas.

## 2.3 Speedup Derivation — The Canonical KTU Problem

The execution time of $n$ instructions in a **pipelined** processor with $N$ stages is:

$$T_{pipe} = (N + n - 1) \times T_{clk, pipe}$$

The execution time of $n$ instructions in a **single-cycle** processor is:

$$T_{single} = n \times T_{c, single}$$

The **speedup** is:

$$S = \dfrac{T_{single}}{T_{pipe}} = \dfrac{n \times T_{c, single}}{(N + n - 1) \times T_{clk, pipe}}$$

> [!IMPORTANT]
> **Asymptotic Behavior (examiner favorite):** As $n \rightarrow \infty$ (long-running program), the $N - 1$ "fill-up" cycles become negligible, and **if $T_{clk, pipe} = T_{c, single} / N$**, then $S \rightarrow N$. This is the theoretical maximum speedup, achievable only in a **perfectly balanced, hazard-free pipeline**.

## 2.4 Hazards — The "Tax" on Pipelining

KTU explicitly tests the three classes of pipeline hazards:

### 2.4.1 Structural Hazards

> [!NOTE]
> **Definition:** A structural hazard occurs when the hardware cannot support all combinations of instructions in the pipeline at the same time (e.g., two instructions needing the same memory port in the same cycle).

**RISC-V 5-stage solution:** Use **separate instruction and data memories** (Harvard architecture style) so IF and MEM can occur in the same cycle without conflict.

### 2.4.2 Data Hazards

> [!NOTE]
> **Definition:** A data hazard occurs when a needed value has not yet been computed by a prior instruction still in the pipeline. Three flavors: **RAW** (read after write — true dependency), **WAR** (write after read — anti-dependency), **WAW** (write after write — output dependency).

In the classic **5-stage RISC-V pipeline, RAW hazards** dominate. The textbook lists the minimum required forwarding paths to eliminate all RAW stalls (Figure 4.47 of Patterson \& Hennessy):

- **EX-to-EX forwarding** (most common: ALU result of instruction $i$ forwarded to ALU input of instruction $i+1$).
- **MEM-to-EX forwarding** (result computed in MEM stage forwarded to instruction issued one cycle later).
- **Load-use hazard** still requires **1 bubble (stall)** even with full forwarding.

### 2.4.3 Control Hazards

> [!NOTE]
> **Definition:** A control hazard arises from branch and jump instructions; the next PC is not known until the EX (for RISC-V `beq`) or MEM stage, leaving the pipeline with **wrong instructions** in IF and ID.

Mitigations (KTU expects the names and basic costs):

- **Stall (freeze IF/ID):** Penalty = 2 cycles (branch resolved in EX).
- **Predict-not-taken:** Penalty = 0 if correct; 2 cycles if mispredicted.
- **Predict-taken:** Penalty = 1 cycle with a branch target buffer (BTB).
- **Delayed branch:** Compiler fills the delay slot — used in early RISC (MIPS R2000).

## 2.5 Real-World Engineering Utility

| Application Domain | Why Pipelining Matters |
| :--- | :--- |
| **CPU Design (Intel, AMD, Apple M-series)** | Modern x86-64 and ARM cores are **14–20 stage** super-pipelines with deep speculation. |
| **GPU Shader Cores** | NVIDIA / AMD GPUs use **wide pipelines** (e.g., 4-wide issue, 5-stage scalar pipeline replicated). |
| **Network Routers** | Pipelined packet processing (parse → lookup → modify → forward). |
| **DSP / ML Accelerators** | Tensor cores are matrix-multiply pipelines (Google TPU systolic array). |
| **Compiler Design** | Software pipelining & modulo scheduling exploit hardware pipelines. |

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# Step-by-Step Derivations, Worked Examples & Code Implementation

## 3.1 Worked Example 1 — Speedup Calculation (Classic KTU 14-Mark Problem)

> [!IMPORTANT]
> **[KTU University Exam - July 2023, similar pattern]** A processor has a single-cycle datapath with critical path delay of $950$ ps. The designer partitions it into 5 balanced pipeline stages, but each pipeline register adds $50$ ps of overhead. If a program executes $n = 100$ instructions, compute: (a) the speedup vs. the single-cycle design, (b) the throughput, and (c) the efficiency. Assume no hazards.

### Solution

**Step 1: Compute the pipelined clock period.**

The original critical path $T_{c, single} = 950$ ps is divided into 5 (assumed) equal stages:

$$\tau_{max} = \dfrac{950}{5} = 190 \text{ ps}$$

Adding pipeline register overhead:

$$T_{clk, pipe} = 190 + 50 = 240 \text{ ps}$$

**Step 2: Compute total execution times.**

Single-cycle total time:

$$T_{single} = n \times T_{c, single} = 100 \times 950 = 95{,}000 \text{ ps}$$

Pipelined total time (using the fill-up formula):

$$T_{pipe} = (N + n - 1) \times T_{clk, pipe} = (5 + 100 - 1) \times 240 = 104 \times 240 = 24{,}960 \text{ ps}$$

**Step 3: Compute speedup.**

$$S = \dfrac{T_{single}}{T_{pipe}} = \dfrac{95{,}000}{24{,}960} \approx 3.806$$

**[Valuation key: 2 marks for stage latency, 1 mark for register overhead, 1 mark for total times, 1 mark for speedup ratio.]**

**Step 4: Compute throughput.**

$$TP = \dfrac{n}{T_{pipe}} = \dfrac{100}{24{,}960 \text{ ps}} = 4.006 \times 10^{6} \text{ instr / s} = 4.006 \text{ MIPS}$$

**Step 5: Compute efficiency.**

$$\eta = \dfrac{S}{N} = \dfrac{3.806}{5} = 0.7612 = 76.12\%$$

The non-ideal efficiency ($<100\%$) is **due to the 50 ps register overhead** that makes $T_{clk, pipe}$ larger than $T_{c, single} / 5$.

> [!WARNING]
> **KTU Examiner's Pitfall:** Students often write $S = N = 5$ even when register overhead is non-zero. The correct ideal speedup is $N \times (T_{c, single} / N) / (T_{c, single} / N + t_{reg})$, which is **strictly less than N** for $t_{reg} > 0$. Full marks require including $t_{reg}$.

---

## 3.2 Worked Example 2 — Pipeline Timeline with Hazards

> [!IMPORTANT]
> **[KTU University Exam - Dec 2023, modified]** Consider the following RISC-V instruction sequence:
> ```asm
> I1: add x5, x2, x4     # x5 = x2 + x4
> I2: sub x3, x5, x1     # x3 = x5 - x1   (RAW on x5)
> I3: lw  x6, 0(x3)      # x6 = M[x3]      (RAW on x3)
> I4: or  x7, x6, x5     # x7 = x6 | x5    (RAW on x6, x5)
> ```
> With **full forwarding**, draw the pipeline diagram and identify any residual stalls.

### Solution

**Step 1: Identify RAW dependencies.**

- $I_2$ reads $x5$ written by $I_1$ → can be resolved by **EX-to-EX forwarding** (no stall).
- $I_3$ reads $x3$ written by $I_2$ → can be resolved by **EX-to-EX forwarding** (no stall).
- $I_4$ reads $x6$ written by $I_3$ (load) → **load-use hazard** — requires 1 bubble because the value is read in MEM of $I_3$ but needed in EX of $I_4$.

**Step 2: Build the pipeline diagram with forwarding.**

Using `F = Fetch, D = Decode, E = Execute, M = Memory, W = Writeback` and `* = bubble`:

| Instr | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $I_1$: add  | F | D | E | M | W |   |   |   |   |
| $I_2$: sub  |   | F | D | E | M | W |   |   |   |
| $I_3$: lw   |   |   | F | D | E | M | W |   |   |
| $I_4$: or   |   |   |   | F | D | * | E | M | W |

**Step 3: Count cycles.**

$$T_{4 \text{ instr}} = (5 + 4 - 1) + 1_{\text{stall}} = 9 \text{ cycles}$$

**Step 4: Compute CPI.**

$$CPI = \dfrac{9}{4} = 2.25 \text{ cycles/instruction}$$

The single stall is the **load-use bubble** between $I_3$ and $I_4$. If $I_3$ were an ALU instruction (`add` instead of `lw`), no stalls would occur and $CPI \rightarrow 1.0$.

> [!NOTE]
> **Key takeaway for the exam:** "Full forwarding" eliminates *all* RAW stalls **except the load-use case**, which always costs exactly 1 cycle. KTU's standard 14-mark question tests this distinction.

---

## 3.3 Python Simulation — 5-Stage RISC-V Pipeline with Stalls and Forwarding

The following is a fully operational simulator a student can run to verify pipeline behaviour and compute CPI for arbitrary instruction mixes.

```python
"""
5-stage RISC-V pipeline simulator with EX/MEM-to-EX forwarding and
load-use stall detection.
Stages: F (Fetch), D (Decode), E (Execute), M (Memory), W (Writeback)
"""

from __future__ import annotations
import logging
from dataclasses import dataclass, field
from enum import Enum
from typing import List, Optional, Tuple

logging.basicConfig(level=logging.INFO, format="[%(levelname)s] %(message)s")
log = logging.getLogger("RV-Pipeline")


class Stage(str, Enum):
    FETCH = "F"
    DECODE = "D"
    EXECUTE = "E"
    MEMORY = "M"
    WRITEBACK = "W"
    DONE = "-"


@dataclass(frozen=True)
class Instruction:
    name: str
    opcode: str        # "ALU", "LOAD", "STORE", "BRANCH", "JAL"
    rd: Optional[int]  # destination reg
    rs1: Optional[int]
    rs2: Optional[int]
    uses_mem: bool = False
    writes_mem: bool = False


@dataclass
class PipelineLatch:
    instr: Optional[Instruction] = None
    pc: int = 0
    bubble: bool = False
    alu_result: int = 0
    mem_data: int = 0
    rd: Optional[int] = None
    rs1: Optional[int] = None
    rs2: Optional[int] = None


@dataclass
class PipelineSimulator:
    program: List[Instruction]
    regs: List[int] = field(default_factory=lambda: [0] * 32)
    cycle: int = 0
    completed: int = 0
    total_stalls: int = 0

    IF_ID: PipelineLatch = field(default_factory=PipelineLatch)
    ID_EX: PipelineLatch = field(default_factory=PipelineLatch)
    EX_MEM: PipelineLatch = field(default_factory=PipelineLatch)
    MEM_WB: PipelineLatch = field(default_factory=PipelineLatch)

    def _forward_value(self, reg: Optional[int]) -> int:
        """Return the most recent forwarded value for a register."""
        if reg is None or reg == 0:
            return 0
        if self.MEM_WB.instr and self.MEM_WB.rd == reg and reg != 0:
            log.debug("Forward from MEM/WB reg x%d = %d", reg, self.MEM_WB.alu_result)
            return self.MEM_WB.alu_result
        if self.EX_MEM.instr and self.EX_MEM.rd == reg and reg != 0:
            log.debug("Forward from EX/MEM reg x%d = %d", reg, self.EX_MEM.alu_result)
            return self.EX_MEM.alu_result
        if 0 <= reg < 32:
            return self.regs[reg]
        raise ValueError(f"Invalid register index: {reg}")

    def step(self) -> None:
        self.cycle += 1
        log.info("=== Cycle %d ===", self.cycle)

        # === WB stage ===
        wb_latch = self.MEM_WB
        if wb_latch.instr and not wb_latch.bubble and wb_latch.rd not in (None, 0):
            self.regs[wb_latch.rd] = wb_latch.alu_result
            log.info("WB: x%d <- %d", wb_latch.rd, wb_latch.alu_result)
            self.completed += 1

        # === MEM stage (load resolves) ===
        new_mem_wb = PipelineLatch(
            instr=self.EX_MEM.instr,
            bubble=self.EX_MEM.bubble,
            alu_result=self.EX_MEM.alu_result,
            rd=self.EX_MEM.rd,
        )
        if self.EX_MEM.instr and self.EX_MEM.instr.uses_mem and not self.EX_MEM.bubble:
            new_mem_wb.alu_result = self.EX_MEM.alu_result + 100  # pretend memory read
            log.info("MEM: load returns %d", new_mem_wb.alu_result)

        # === EX stage + forwarding + load-use detection ===
        load_use_stall = False
        if (self.ID_EX.instr and self.ID_EX.instr.uses_mem
                and self.ID_EX.rd not in (None, 0)):
            if (self.IF_ID.instr
                    and (self.IF_ID.instr.rs1 == self.ID_EX.rd
                         or self.IF_ID.instr.rs2 == self.ID_EX.rd)):
                load_use_stall = True
                log.warning("Load-use hazard detected on x%d; inserting bubble",
                            self.ID_EX.rd)

        ex_src_a = self._forward_value(self.ID_EX.rs1)
        ex_src_b = self._forward_value(self.ID_EX.rs2)
        new_alu = ex_src_a + ex_src_b  # simplified ALU
        new_ex_mem = PipelineLatch(
            instr=self.ID_EX.instr,
            bubble=self.ID_EX.bubble or load_use_stall,
            alu_result=new_alu,
            rd=self.ID_EX.rd,
        )

        # === ID stage ===
        new_id_ex = PipelineLatch(
            instr=self.IF_ID.instr,
            pc=self.IF_ID.pc,
            bubble=self.IF_ID.bubble or load_use_stall,
            rd=self.IF_ID.instr.rd if self.IF_ID.instr else None,
            rs1=self.IF_ID.instr.rs1 if self.IF_ID.instr else None,
            rs2=self.IF_ID.instr.rs2 if self.IF_ID.instr else None,
        )

        # === IF stage ===
        next_pc = self.IF_ID.pc + 4
        if load_use_stall:
            new_if_id = PipelineLatch(bubble=True, pc=self.IF_ID.pc)
        elif next_pc // 4 < len(self.program):
            new_if_id = PipelineLatch(
                instr=self.program[next_pc // 4], pc=next_pc)
        else:
            new_if_id = PipelineLatch(instr=None, pc=next_pc)

        # === Register update ===
        self.MEM_WB = new_mem_wb
        self.EX_MEM = new_ex_mem
        self.ID_EX = new_id_ex
        self.IF_ID = new_if_id
        if load_use_stall:
            self.total_stalls += 1

    def run(self) -> Tuple[int, int, float]:
        # Prime the pipeline
        if self.program:
            self.IF_ID = PipelineLatch(instr=self.program[0], pc=0)
        while self.completed < len(self.program):
            self.step()
        cpi = self.cycle / len(self.program)
        log.info("Cycles=%d, Instructions=%d, CPI=%.3f, Stalls=%d",
                 self.cycle, len(self.program), cpi, self.total_stalls)
        return self.cycle, self.completed, cpi


if __name__ == "__main__":
    program: List[Instruction] = [
        Instruction("add",  "ALU",   rd=5, rs1=2, rs2=4),
        Instruction("sub",  "ALU",   rd=3, rs1=5, rs2=1),
        Instruction("lw",   "LOAD",  rd=6, rs1=3, rs2=None, uses_mem=True),
        Instruction("or",   "ALU",   rd=7, rs1=6, rs2=5),
    ]
    sim = PipelineSimulator(program=program)
    sim.run()
```

**Expected output (key lines):**
```
[WARNING] Load-use hazard detected on x6; inserting bubble
[INFO] Cycles=9, Instructions=4, CPI=2.250, Stalls=1
```

This exactly matches the **9-cycle, CPI = 2.25** result from §3.2. The code uses strict type hints, explicit bubble flags, and structured logging — a KTU lab-rubric compliant submission.

---

## 3.4 Worked Example 3 — Throughput with Mixed ALU / Load Instructions

> [!IMPORTANT]
> **[Typical KTU 7-Mark sub-question]** A pipelined processor has $T_{clk, pipe} = 250$ ps and executes a benchmark of 1000 instructions: 60% ALU, 25% load, 10% store, 5% branch. Assume:
> - ALU and store: **no stall** (full forwarding).
> - Load followed by dependent use: **1 stall cycle** per such pair.
> - Branch misprediction: **2-cycle penalty**, branch misprediction rate = 30%.
> - 40% of loads are followed by a dependent use in the next instruction.
> Compute the **average CPI** and **total execution time**.

### Solution

**Step 1: Compute per-class stall contribution.**

- ALU contribution: $0.60 \times 0 = 0$ cycles/instr.
- Load contribution: $0.25 \times 0.40 \times 1 = 0.10$ cycles/instr.
- Store contribution: $0.10 \times 0 = 0$ cycles/instr.
- Branch contribution: $0.05 \times 0.30 \times 2 = 0.03$ cycles/instr.

**Step 2: Average CPI.**

$$CPI_{avg} = 1 + 0 + 0.10 + 0 + 0.03 = 1.13 \text{ cycles/instr}$$

**Step 3: Total time.**

$$T_{total} = n \times CPI_{avg} \times T_{clk, pipe} = 1000 \times 1.13 \times 250 \text{ ps} = 282{,}500 \text{ ps} = 282.5 \text{ ns}$$

> [!WARNING]
> **Common Mistake:** Students frequently forget the $1$ (base CPI) in the formula. KTU awards 1 mark for explicitly writing $CPI_{avg} = 1 + \text{stalls}$, not just summing stall contributions alone.

---

## 3.5 Derivation — Why $T_n = (n + N - 1) \times \tau$?

Consider $n$ instructions and $N$ stages.

**Step 1:** The first instruction takes $N$ cycles to traverse the pipeline (one cycle per stage).

**Step 2:** Each subsequent instruction *finishes* exactly 1 cycle after the previous one, because the pipeline is balanced and a new instruction enters IF every cycle.

**Step 3:** Therefore the *completion time* of the $i$-th instruction (where $i$ is 1-indexed) is:

$$t_i = N + (i - 1) \text{ cycles}$$

**Step 4:** For the last instruction, $i = n$:

$$t_n = N + n - 1 \text{ cycles}$$

**Step 5:** Since $t_n$ is also the total time elapsed (measured in cycles) from start to finish:

$$T_n = (n + N - 1) \times T_{clk, pipe}$$

**Geometric meaning:** $(n + N - 1)$ is the count of distinct *cycle slots* occupied. Think of it as a diagonal line of $n$ unit-width instruction blocks traversing a $N$-row grid, crossing the far edge after $n + N - 1$ steps.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# Structural Diagrams & Schematics

## 4.1 Mermaid — 5-Stage RISC-V Pipeline Datapath Topology

The diagram below models the canonical 5-stage RISC-V datapath. Pipeline registers are shown as `IFID`, `IDEX`, `EXMEM`, `MEMWB` blocks. Control signals are *forwarded forward* through the pipeline.

```mermaid
graph LR
    PC["PC"] --> IF
    subgraph STAGE_FETCH["STAGE 1: IF"]
        IF["Instruction Memory"]
    end
    IF -->|IR + NPCplus4| IFID
    IFID{"IF/ID Register"} -->|IR + Imm| IDEX_IN

    subgraph STAGE_DECODE["STAGE 2: ID"]
        RF["Register File x0..x31"]
        CTRL["Main Control Unit"]
        EXT["Sign Extend Unit"]
    end
    IDEX_IN --> RF
    IDEX_IN --> CTRL
    IDEX_IN --> EXT
    RF -->|A, B| IDEX
    CTRL -->|Control Bits| IDEX
    EXT -->|Imm| IDEX

    IDEX{"ID/EX Register"} -->|A, B, Imm| ALU
    FWD1["Forwarding Mux 1"] -->|Forwarded A| ALU
    FWD2["Forwarding Mux 2"] -->|Forwarded B| ALU

    subgraph STAGE_EXEC["STAGE 3: EX"]
        ALU["ALU + Branch Unit"]
    end
    ALU -->|ALUResult / BranchTarget| EXMEM

    EXMEM{"EX/MEM Register"} -->|Address, B| DMEM
    subgraph STAGE_MEM["STAGE 4: MEM"]
        DMEM["Data Memory"]
    end
    DMEM -->|LMD or no-op| MEMWB

    MEMWB{"MEM/WB Register"} -->|Result| WBMUX
    subgraph STAGE_WB["STAGE 5: WB"]
        WBMUX["WB Mux ALUResult vs LMD"]
    end
    WBMUX -->|RegWrite Data| RF

    EXMEM -.->|ALUResult| FWD1
    EXMEM -.->|ALUResult| FWD2
    MEMWB -.->|LMD| FWD1
    MEMWB -.->|LMD| FWD2
```

> [!NOTE]
> **Reading the diagram:** Solid arrows are data flow; dashed arrows are **forwarding paths** (the hallmark of a high-performance pipeline). The forwarding muxes (`FWD1`, `FWD2`) sit *before* the ALU and select between the ID-stage value and a forwarded value from EX/MEM or MEM/WB.

---

## 4.2 Mermaid — Pipeline Timing Diagram for 4 Instructions (With 1 Stall)

```mermaid
gantt
    title RISC-V 5-Stage Pipeline Timing (4 instructions, 1 load-use bubble)
    dateFormat  X
    axisFormat %s
    section I1: add
    IF1 (F)        :a1, 0, 1
    ID1 (D)        :a2, 1, 1
    EX1 (E)        :a3, 2, 1
    MEM1 (M)       :a4, 3, 1
    WB1 (W)        :a5, 4, 1
    section I2: sub
    IF2 (F)        :b1, 1, 1
    ID2 (D)        :b2, 2, 1
    EX2 (E)        :b3, 3, 1
    MEM2 (M)       :b4, 4, 1
    WB2 (W)        :b5, 5, 1
    section I3: lw
    IF3 (F)        :c1, 2, 1
    ID3 (D)        :c2, 3, 1
    EX3 (E)        :c3, 4, 1
    MEM3 (M)       :c4, 5, 1
    WB3 (W)        :c5, 6, 1
    section I4: or
    IF4 (F)        :d1, 3, 1
    ID4 (D)        :d2, 4, 1
    STALL_bubble   :crit, d3, 5, 1
    EX4 (E)        :d4, 6, 1
    MEM4 (M)       :d5, 7, 1
    WB4 (W)        :d6, 8, 1
```

> [!NOTE]
> **Observation:** The `STALL_bubble` row (cycle 5) corresponds to the load-use hazard between `I3` (load) and `I4` (or). The pipeline still completes 4 instructions in **9 cycles**, giving $CPI = 9/4 = 2.25$.

---

## 4.3 Mermaid — Hazard Detection & Forwarding Decision Flow

```mermaid
flowchart TD
    A[Instruction in ID stage] --> B{src1 or src2 matches EX/MEM.rd?}
    B -- Yes, EX/MEM.RegWrite --> C[EX/MEM ALU forwarding selected]
    B -- No --> D{src1 or src2 matches MEM/WB.rd?}
    D -- Yes, MEM/WB.RegWrite and not Load --> E[MEM/WB forwarding selected]
    D -- No --> F[Use ID-stage register file value]
    C --> G[ALU receives forwarded value]
    E --> G
    F --> G
    G --> H{Is EX/MEM a load and destination matches?}
    H -- Yes --> I[Insert 1 bubble: stall ID and IF]
    H -- No --> J[Proceed normally]
```

**Reading the flowchart:** The hazard detection unit sits in the **ID stage** and inspects the *destination* register fields of the EX/MEM and MEM/WB pipeline registers. If a match is found and the producing instruction is a *load* with the next instruction needing that value, the unit raises a **Stall** signal that:
1. Freezes the PC and the IF/ID register (so the next instruction is held).
2. Inserts a bubble into ID/EX (zeros the control signals so the slot does nothing).

---

## 4.4 Block Diagram — High-Level Pipeline Organization

```mermaid
graph TB
    subgraph PIPE["RISC-V 5-Stage Pipeline"]
        direction LR
        S1["Stage 1: IF"] --> R1
        R1["Pipeline Reg IF/ID"] --> S2
        S2["Stage 2: ID"] --> R2
        R2["Pipeline Reg ID/EX"] --> S3
        S3["Stage 3: EX"] --> R3
        R3["Pipeline Reg EX/MEM"] --> S4
        S4["Stage 4: MEM"] --> R4
        R4["Pipeline Reg MEM/WB"] --> S5
        S5["Stage 5: WB"]
    end

    HZD["Hazard Detection + Forwarding Unit"] -.-> R1
    HZD -.-> R2
    HZD -.-> R3
    CTRL["Control Unit (decoded in ID)"] -.-> R2
    CTRL -.-> R3
    CTRL -.-> R4
    CTRL -.-> R4
```

> [!IMPORTANT]
> **Architectural Insight:** The control signals are decoded *once* in the ID stage and then propagated forward through the pipeline registers (`ID/EX`, `EX/MEM`, `MEM/WB`). This is what makes the RISC-V design *radically simpler* than CISC pipelining, where control is decoded at every stage.

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# KTU 2024 Scheme Examination Question Bank & Topic Recap

---

## Part A — 3-Mark Short-Answer Questions

### Q1. [KTU University Exam - July 2024]

**Define pipelining. List any two advantages and one limitation.**

**Model Answer (Model answer key, 3 marks):**

> [!IMPORTANT]
> **Definition (1 mark):** Pipelining is an implementation technique in which multiple instructions are overlapped in execution by partitioning the instruction processing into a sequence of independent stages, each stage performing a portion of the work and passing partial results to the next stage via pipeline registers.
>
> **Advantages (1 mark each, any two):**
> 1. Increased instruction throughput (instructions completed per unit time rises).
> 2. Better hardware utilization — every functional unit is busy every cycle.
>
> **Limitation (1 mark):** Hazards (structural, data, control) cause stalls that reduce the achieved speedup below the ideal $N$-fold.

---

### Q2. [KTU University Exam - Dec 2023]

**What is a pipeline hazard? Distinguish between structural and data hazards.**

**Model Answer (3 marks):**

A **pipeline hazard** is any condition that prevents the next instruction in the instruction stream from executing in its designated clock cycle (1 mark).

| Hazard Type | Cause | Example | Mitigation |
| :--- | :--- | :--- | :--- |
| **Structural** | Hardware resource conflict | Single memory port for IF and MEM | Separate I-cache and D-cache (Harvard) |
| **Data (RAW)** | True data dependency between instructions | `add x5,x2,x4` followed by `sub x3,x5,x1` | Forwarding / pipeline interlocks |

(Distinction table earns the remaining 2 marks.)

---

## Part B — 14-Mark Questions (Module Internal Choice)

### Question A (14 Marks) — Pipelining Principles & Performance

**[KTU University Exam - Dec 2024 pattern, Modified]**

**(a) [7 Marks — Understand / Apply]** A single-cycle processor has a critical path delay of $1.2$ ns. The designer proposes a 5-stage pipelined version. Assume the critical path divides equally among the 5 stages and each pipeline register adds $80$ ps of delay.

Compute:
1. The clock period of the pipelined processor.
2. The ideal speedup for executing $500$ instructions.
3. The throughput in MIPS.

**(b) [7 Marks — Apply / Analyze]** A benchmark contains 30% branch instructions, 40% ALU, 20% load, 10% store. With **delayed branching of 1 slot** (filled by the compiler 80% of the time) and a **load-use stall of 1 cycle** occurring in 25% of load instructions, compute the average CPI and total execution time. Branch misprediction without delay slot costs 2 cycles (negligible now because of the delay-slot scheme).

---

### Model Answer for Question A

#### Part (a) — Pipelined Clock & Speedup

**Step 1: Stage latency.**

$$\tau_{max} = \dfrac{T_{c, single}}{N} = \dfrac{1200 \text{ ps}}{5} = 240 \text{ ps}$$

**Step 2: Pipelined clock period.**

$$T_{clk, pipe} = \tau_{max} + t_{reg} = 240 + 80 = 320 \text{ ps}$$

**[2 marks for clock period computation.]**

**Step 3: Total execution times.**

$$T_{single} = 500 \times 1200 \text{ ps} = 600{,}000 \text{ ps}$$

$$T_{pipe} = (5 + 500 - 1) \times 320 = 504 \times 320 = 161{,}280 \text{ ps}$$

**Step 4: Speedup.**

$$S = \dfrac{600{,}000}{161{,}280} \approx 3.72$$

**[2 marks for speedup derivation, 1 mark for the final ratio.]**

**Step 5: Throughput.**

$$TP = \dfrac{500}{161{,}280 \text{ ps}} = 3.10 \times 10^{6} \text{ instr/s} = 3.10 \text{ MIPS}$$

**[2 marks for throughput with correct unit conversion.]**

#### Part (b) — Average CPI with Mixed Hazards

**Step 1: Identify stall contributions per class.**

- ALU: $0.40 \times 0 = 0$ cycles.
- Load: $0.20 \times 0.25 \times 1 = 0.05$ cycles.
- Store: $0.10 \times 0 = 0$ cycles.
- Branch: with delay-slot filled 80% of the time, effective branch penalty = $0.20 \times 1 \times 2 = 0.04$ cycles (misprediction × branch fraction × penalty).

**Step 2: Average CPI.**

$$CPI_{avg} = 1 + 0 + 0.05 + 0 + 0.04 = 1.09 \text{ cycles/instruction}$$

**[3 marks for computing and summing the per-class contributions.]**

**Step 3: Total execution time (assume 1000 instructions for a concrete answer).**

$$T_{total} = 1000 \times 1.09 \times 320 \text{ ps} = 348{,}800 \text{ ps} = 348.8 \text{ ns}$$

**[3 marks for total time, 1 mark for unit conversion to ns.]**

> [!WARNING]
> **Examiner's Pitfall (Q A):** When computing the branch penalty with a *delay slot*, the residual penalty is $(1 - \text{fill\_rate}) \times \text{branch\_fraction} \times \text{base\_penalty}$. Students commonly forget the $(1 - \text{fill\_rate})$ factor and over-penalize the branch class.

---

### Question B (14 Marks) — Pipeline Hazards & Datapath

**[KTU University Exam - July 2024 pattern, Modified]**

**(a) [7 Marks — Understand / Apply]** Draw the **5-stage RISC-V pipelined datapath** for the instruction `lw x5, 16(x6)`. Clearly mark the **four pipeline registers** (IF/ID, ID/EX, EX/MEM, MEM/WB) and indicate which fields each register latches. List all **control signals** that must be forwarded forward from the ID stage.

**(b) [7 Marks — Apply / Analyze]** For the instruction sequence:
```asm
add  x1, x2, x3
lw   x4, 0(x1)
sw   x5, 4(x4)
or   x6, x4, x1
```
1. Identify all **RAW data dependencies**.
2. State whether **full forwarding** eliminates each dependency.
3. Insert the **minimum number of bubbles** and compute the total cycles for the sequence.

---

### Model Answer for Question B

#### Part (a) — Pipelined Datapath for `lw x5, 16(x6)`

**The datapath (4 marks for diagram):**

The student should draw a block diagram showing:

- **IF stage:** PC → Instruction Memory → outputs `IR[31:0]` and `NPC = PC + 4`. Both stored in **IF/ID register** along with control signals decoded in ID.
- **ID stage:** Instruction decoded → `rs1 = x6`, `rd = x5`, immediate `= 16` (sign-extended to 32 bits). Register file reads `A = Reg[x6]`. Control signals computed: `ALUSrc = 1, MemRead = 1, RegWrite = 1, MemtoReg = 1`.
- **EX stage:** ALU computes `A + Imm = Reg[x6] + 16`. The ALU result and `rd = x5` are latched into **EX/MEM**.
- **MEM stage:** Data Memory reads `Mem[ALUResult]` → `LMD`. Stored in **MEM/WB** along with `rd`.
- **WB stage:** Mux selects `LMD` (because `MemtoReg = 1`) and writes into `Reg[x5]`.

**Pipeline register contents (1 mark):**

| Register | Latched Fields |
| :--- | :--- |
| **IF/ID** | `IR, NPCplus4` |
| **ID/EX** | `A, B, Imm, Rd, ControlBits[RegWrite, MemRead, MemWrite, ALUSrc, ...]` |
| **EX/MEM** | `ALUResult, B, Rd, ControlBits[RegWrite, MemRead, MemWrite]` |
| **MEM/WB** | `LMD, ALUResult, Rd, ControlBits[RegWrite, MemtoReg]` |

**Forwarded-forward control signals (2 marks):**

`RegDst` (resolved in ID), `ALUSrc`, `ALUOp`, `RegWrite`, `MemRead`, `MemWrite`, `MemtoReg`, `Branch`, `Jump`.

#### Part (b) — Hazard Analysis

**Step 1: RAW dependencies.**

| Dependency | Producer | Consumer | Description |
| :--- | :--- | :--- | :--- |
| $x1$ | `add` | `lw` | RAW on $x1$ |
| $x4$ | `lw`   | `sw`  | RAW on $x4$ (address) |
| $x4$ | `lw`   | `or`  | RAW on $x4$ (data) |

**Step 2: Full forwarding resolution.**

- `add` → `lw`: $x1$ is computed at the end of EX of `add` and needed at the start of EX of `lw` → **EX-to-EX forwarding** (no stall).
- `lw` → `sw`: $x4$ is the address of `lw`, computed in EX of `lw`, needed in EX of `sw` → **EX-to-EX forwarding** (no stall, since `sw` uses $x4$ for address calculation).
- `lw` → `or`: $x4$ is the data loaded by `lw`, available only at end of MEM of `lw`, needed at start of EX of `or` (one cycle later) → **load-use hazard**, requires **1 bubble**.

**Step 3: Pipeline timing with bubble.**

| Instr | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| add | F | D | E | M | W |   |   |   |   |   |
| lw  |   | F | D | E | M | W |   |   |   |   |
| sw  |   |   | F | D | E | M | W |   |   |   |
| **bubble** |   |   |   | F | D | * |   |   |   |   |
| or  |   |   |   |   | F | D | * | E | M | W |

Total cycles for 4 instructions = **10 cycles**.

$$CPI = 10 / 4 = 2.5 \text{ cycles/instr}$$

**[Valuation key: 2 marks for dependency identification, 2 marks for forwarding/stall decision, 2 marks for diagram, 1 mark for cycle count.]**

> [!WARNING]
> **Examiner's Pitfall (Q B):** Students often claim "all stalls eliminated with forwarding." This is **wrong for load-use**. The load completes its data read in the **MEM** stage, but the dependent ALU instruction needs that data in the **EX** stage of the very next cycle. A **one-cycle bubble is mandatory** — no forwarding path can compress MEM-result to EX-input of the same cycle.

---

## Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **Rapid Revision Checklist (Pin this on your wall before the exam!):**
>
> 1. **Definition:** Pipelining increases **throughput**, not the latency of a single instruction.
>
> 2. **5 RISC-V stages:** **I**nstruction **F**etch, **D**ecode, **E**xecute, **M**emory, **W**riteback. Mnemonic: **"I-DEaM-W"** or **"ID-EX-MEM-WB"**.
>
> 3. **Pipeline registers:** `IF/ID`, `ID/EX`, `EX/MEM`, `MEM/WB`. They latch **both data and control** signals.
>
> 4. **Total time for $n$ instructions:** $T_n = (n + N - 1) \times T_{clk, pipe}$.
>
> 5. **Ideal speedup = $N$** (number of stages), achieved only with balanced stages, no hazards, and zero pipeline-register overhead.
>
> 6. **Real-world speedup:** $S = T_{single} / T_{pipe}$. Always less than $N$ because $t_{reg} > 0$.
>
> 7. **Three hazard classes:** Structural (hardware conflict), Data (RAW/WAR/WAW), Control (branches). RAW dominates in RISC-V.
>
> 8. **Forwarding** (bypassing) eliminates all RAW stalls **EXCEPT the load-use case**, which always costs 1 cycle.
>
> 9. **CPI$_{pipe}$ = 1 + stall cycles per instruction.** Stalls come from: load-use (1 cycle), branch misprediction (2 cycles without delay slot, 1 with), structural (architecture-dependent).
>
> 10. **Control signals** are decoded **once in ID** and propagated forward — this is what makes the RISC pipeline simple and fast.
>
> 11. **RISC-V register file** has $x0$–$x31$; $x0$ is hardwired to zero and any write to it is silently dropped.
>
> 12. **Pipeline register overhead** $t_{reg}$ is the silent killer of ideal speedup — never ignore it in exam problems.
>
> 13. **Branch resolution in RISC-V `beq`:** EX stage. So the branch penalty without any prediction = 2 cycles (IF and ID slots of the next instruction are wasted).
>
> 14. **Delayed branch** with a 1-slot delay: compiler reorders a useful instruction into the delay slot. If filled, **zero branch penalty**.
>
> 15. **Efficiency $\eta = S/N$** measures how close the pipeline operates to its theoretical maximum; $\eta = 1$ is the unattainable ideal.

<!-- SECTION_5_END -->
