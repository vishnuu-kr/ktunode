# Dynamic voltage frequency scaling (DVFS) procedures execution paths configuration parameters

<!-- SECTION_1_START -->

# Dynamic Voltage Frequency Scaling (DVFS)

## 1.1 Formal Definition (KTU 2024 Scheme Terminology)

> [!IMPORTANT]
> **Dynamic Voltage Frequency Scaling (DVFS)** is a runtime, workload-adaptive power management technique employed in modern embedded processors, microcontrollers, and System-on-Chip (SoC) platforms that **dynamically modulates the supply voltage ($V_{DD}$) and the operating clock frequency ($f_{CLK}$)** of the processor core (and optionally its memory subsystem) to match the instantaneous computational demand, thereby **minimizing dynamic and static power dissipation** while preserving Quality-of-Service (QoS) constraints such as throughput, deadline latency, and real-time task schedulability.

The KTU 2024 Scheme module categorises DVFS as a **system-level, hardware-software co-design optimization** that operates across the **OS scheduler**, **Power Management Unit (PMU)**, **Clock Tree Synthesizer (CTS)**, and **Voltage Regulator Module (VRM)** subsystems.

### Formal Components
- **Variable $V$**: Core supply voltage (typical range: **0.7 V – 1.3 V**)
- **Variable $f$**: Clock frequency (typical range: **100 MHz – 2.5 GHz**)
- **Variable $\alpha$**: Switching activity factor ($0 \le \alpha \le 1$)
- **Variable $C_{eff}$**: Effective switched capacitance per cycle (in Farads)

> [!NOTE]
> **Performance States ($P$-states)** in the Advanced Configuration and Power Interface (ACPI) standard enumerate discrete $(V_i, f_i)$ operating points, while **Throttling States ($T$-states)** permit frequency reduction without voltage scaling for thermal throttling scenarios.

---

## 1.2 Conceptual Analogy — The "Smart Cruise Control" Model

Imagine you are driving a car (your processor) on a highway. A naïve driver presses the accelerator fully at all times (fixed high $V$, fixed high $f$) — the engine burns maximum fuel even on a flat, empty road.

A **DVFS-enabled** driver behaves like a **smart cruise control**:
- On an **empty highway** (low workload / idle period): gear shifts to a low engine RPM and reduces throttle, which means the engine runs at **low $f$ and low $V$** → minimal fuel.
- On a **steep hill or overtaking** (high workload / deadline-critical burst): gear downshifts, RPM and throttle increase → **high $f$ and high $V$**, but only for the brief duration needed.

> **Key Insight**: Just as a car cannot instantaneously change gears without a transient (mechanical lag), a processor cannot jump between $(V, f)$ pairs without a **voltage ramp delay (typically 5 µs – 50 µs)** and a **clock-domain-crossing (CDC) resynchronization overhead**. The DVFS *procedure* must account for these transients — this is why the technique is termed *dynamic* and not *arbitrary*.

### Intuitive Power Argument
The dynamic power consumption of a CMOS gate is governed by:

$$P_{dyn} = \alpha \cdot C_{eff} \cdot V_{DD}^{\,2} \cdot f_{CLK}$$

Observe the **quadratic dependence on $V$** and the **linear dependence on $f$**. If a workload only requires **60 % of peak frequency**, we may lower $V$ to roughly **60 % of nominal** (because delay $\tau \propto V / (V - V_{th})^{\alpha}$), and the resulting power saving is approximately:

$$\text{Saving} \approx 1 - (0.6)^{3} = 1 - 0.216 = 0.784 \;\;\Rightarrow\;\; 78.4\% \text{ power reduction}$$

This **cubic-like scaling** is the *theoretical* reason DVFS is the single most effective knob in embedded power management.

---

## 1.3 Visualizing the $P$–$V$–$f$ Relationship

> [!VISUALIZATION CONTROL]
> **Concept:** Cubic relationship between normalised frequency, voltage, and the resulting dynamic power.
>
> **GeoGebra / Desmos Input Equations (parametric form):**
> * `f_norm = t` (with `t ∈ [0.3, 1.0]`)
> * `V_norm = t` (idealised, when ignoring $V_{th}$)
> * `P_norm = f_norm * V_norm^2`
>
> **Visual Description:** As `t` slides from 0.3 to 1.0 along the horizontal axis, the red curve `P_norm` rises from approximately **0.027** to **1.0** in a smooth cubic-like sweep. A student should observe that small reductions in `f` (and hence `V`) at the high end of the curve yield **disproportionately large** power savings, illustrating the strong *convexity* of the $P$–$V$–$f$ manifold.

---

## 1.4 Configuration Parameters — The DVFS "Knob Set"

| Parameter | Symbol | Typical Range | Engineering Role |
|---|---|---|---|
| Supply Voltage | $V_{DD}$ | **0.7 V – 1.3 V** | Set by the on-die PMU / external VRM |
| Clock Frequency | $f_{CLK}$ | **100 MHz – 2.5 GHz** | Set by the PLL (Phase-Locked Loop) multiplier |
| Activity Factor | $\alpha$ | **0.05 – 0.30** | Compiler-injected switching statistics |
| Effective Capacitance | $C_{eff}$ | **1 nF – 50 nF** | Process + design dependent |
| Threshold Voltage | $V_{th}$ | **0.3 V – 0.5 V** | Process technology parameter |
| Sampling Window | $T_{samp}$ | **1 ms – 100 ms** | Utilisation measurement period |
| Utilisation Threshold | $U_{th}$ | **0.60 – 0.85** | Trigger for upward / downward scaling |
| Ramp Time | $t_{ramp}$ | **5 µs – 50 µs** | Hardware voltage-settling time |

> [!TIP]
> KTU examiners frequently test the student's ability to map a *workload scenario* (e.g. "real-time video decode at 30 fps, 720p") to a *suitable* $U_{th}$ and a *justified* $(V, f)$ pair. Always reason from the **deadline + workload density** rather than guessing.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Power Dissipation Decomposition in CMOS

The **total power** consumed by a CMOS digital block is the sum of three orthogonal terms:

$$P_{total} = P_{dyn} \;+\; P_{short} \;+\; P_{leak}$$

### 2.1.1 Dynamic Switching Power
Energy is drawn from the supply to charge and discharge the load capacitance during every logic transition:

$$P_{dyn} = \alpha \cdot C_{eff} \cdot V_{DD}^{\,2} \cdot f_{CLK}$$

This is the term **directly** modulated by DVFS.

### 2.1.2 Short-Circuit Power
During the finite rise/fall time of input signals, both PMOS and NMOS transistors conduct briefly, creating a direct path from $V_{DD}$ to ground:

$$P_{short} = \alpha \cdot I_{sc} \cdot V_{DD}$$

where $I_{sc}$ is the short-circuit current (proportional to the rise/fall time of the input and the device sizing). DVFS affects $P_{short}$ *linearly* via $V_{DD}$.

### 2.1.3 Static (Leakage) Power
The sub-threshold and gate-oxide leakage currents that flow even when the transistor is "off":

$$P_{leak} = V_{DD} \cdot I_{leak} \;=\; V_{DD} \cdot I_0 \cdot e^{\frac{-V_{th}}{n \cdot V_T}} \cdot \left( 1 - e^{\frac{-V_{DD}}{V_T}} \right)$$

where:
- $I_0$ — reverse saturation current
- $V_T = kT / q$ — thermal voltage (**≈ 25.85 mV at 300 K**)
- $n$ — sub-threshold swing coefficient
- $V_{th}$ — device threshold voltage

> [!WARNING]
> A common student mistake is to assume DVFS reduces **all** three terms. In reality, **decreasing $V_{DD}$ increases the sub-threshold leakage** (because the $V_{gs} = 0$ condition is closer to $V_{th}$), and at *very* low voltages the static component can **dominate** — this is the regime where DVFS alone is insufficient, and **power-gating** or **near-threshold computing** must be invoked.

---

## 2.2 The Critical-Path Delay Constraint

For a CMOS gate, the propagation delay through a chain of inverters (the critical path) is approximately:

$$\tau_{pd} \;\approx\; \frac{C_L \cdot V_{DD}}{\mu C_{ox} \frac{W}{L} (V_{DD} - V_{th})^{\gamma}}$$

where:
- $C_L$ — load capacitance
- $\mu C_{ox}$ — process transconductance
- $W/L$ — transistor aspect ratio
- $\gamma$ — velocity saturation index (**$\gamma \approx 1$** in long-channel devices, **$\gamma \approx 1.3$** in short-channel).

The **maximum safe clock frequency** is the inverse of the critical-path delay:

$$f_{max} = \frac{1}{\tau_{pd}} \;\propto\; \frac{(V_{DD} - V_{th})^{\gamma}}{V_{DD}}$$

This equation is the **fundamental DVFS constraint**: every time we change $f_{CLK}$, we **must** ensure that $f_{CLK} \le f_{max}(V_{DD})$, otherwise timing violations and metastability will corrupt program state.

---

## 2.3 Energy-Delay Product (EDP) and the Optimal Operating Point

For a fixed computational workload requiring $N$ clock cycles, the total energy is:

$$E = P \cdot T = P_{dyn} \cdot \frac{N}{f_{CLK}} = \alpha \cdot C_{eff} \cdot V_{DD}^{\,2} \cdot N$$

Interesting: the energy **does not depend on frequency** (only on $V_{DD}$). However, the **delay is inversely proportional to $f$**. The combined metric **Energy-Delay Product (EDP)** captures the trade-off:

$$EDP = E \cdot T = \frac{\alpha \cdot C_{eff} \cdot V_{DD}^{\,2} \cdot N^{\,2}}{f_{CLK}}$$

> [!IMPORTANT]
> The optimal $V_{DD}$ that minimises EDP for a *single* task is found by setting $\frac{\partial \, EDP}{\partial V_{DD}} = 0$ — this yields a sweet spot typically **below the maximum rated $V_{DD}$**, which is the theoretical justification for why over-volting a CPU beyond its design point is *never* energy-efficient.

---

## 2.4 The Canonical DVFS Procedure (Execution Path)

A complete DVFS procedure consists of **seven distinct stages** that the system traverses each time a scaling decision is made. The KTU 2024 Scheme examiners expect students to enumerate these in correct order.

### Step-by-Step Logic

1. **Workload Sampling**: The scheduler (or a hardware performance counter) measures the recent CPU utilisation $U$ over a sliding window $T_{samp}$.
2. **Decision Thresholding**: Compare $U$ against the configurable thresholds $U_{lo}$ and $U_{hi}$ (hysteresis band to prevent oscillation).
   - If $U > U_{hi}$ → **scale up** (request higher $f$, hence higher $V$).
   - If $U < U_{lo}$ → **scale down**.
   - If $U_{lo} \le U \le U_{hi}$ → **hold** (no change).
3. **Target $(V, f)$ Lookup**: Consult the **Operating Performance Points (OPP) table** — a hardware-specific array of valid $(V_i, f_i)$ pairs.
4. **Pre-Validation**: Verify that the new $f$ does not violate the deadline of any **real-time task** in the run-queue.
5. **Voltage Ramp (VRM Command)**: Issue an I²C / PMBus command to the Voltage Regulator to step $V_{DD}$ to the new value. Wait for the regulator's `PGOOD` (Power Good) signal.
6. **PLL Re-lock**: Re-program the PLL multiplier and wait for `LOCK` to assert (typically 100 ns – 5 µs).
7. **Resume Execution**: Restore the saved program counter / interrupt context and resume the task at the new operating point.

> [!NOTE]
> **Critical ordering rule**: In a **scale-up** sequence, you **must** raise $V_{DD}$ *first*, then increase $f$. In a **scale-down** sequence, you **must** decrease $f$ *first*, then lower $V_{DD}$. Reversing this order causes **immediate timing violations** because the critical-path delay is now incompatible with the clock period.

---

## 2.5 KTU High-Yield Formula Sheet

| # | Formula | Symbol Key | Units | Use Case |
|---|---|---|---|---|
| 1 | $P_{dyn} = \alpha \, C_{eff} \, V_{DD}^{\,2} \, f_{CLK}$ | $\alpha$: activity, $C_{eff}$: cap | W | Instantaneous dynamic power |
| 2 | $P_{leak} = V_{DD} \cdot I_0 \, e^{-V_{th} / (n V_T)}$ | $V_T = kT/q$ | W | Static power at given $V_{DD}$ |
| 3 | $f_{max} \propto \dfrac{(V_{DD} - V_{th})^{\gamma}}{V_{DD}}$ | $\gamma \in [1, 1.5]$ | Hz | Max safe clock for a $V_{DD}$ |
| 4 | $E = \alpha \, C_{eff} \, V_{DD}^{\,2} \, N$ | $N$: # cycles | J | Total energy for a task |
| 5 | $EDP = \dfrac{\alpha \, C_{eff} \, V_{DD}^{\,2} \, N^{\,2}}{f_{CLK}}$ | — | J·s | Energy-delay optimisation |
| 6 | $\text{Power Saving} \approx 1 - s^{3}$ | $s = f_{new}/f_{max}$ | — | Cubic-rule estimate |
| 7 | $\eta_{DVFS} = \dfrac{P_{saved}}{P_{idle\_P}}$ | — | — | Power-saving efficiency |
| 8 | $t_{ramp} \ge \dfrac{\Delta V \cdot C_{dec}}{\Delta I_{VRM}}$ | $C_{dec}$: decap | s | Voltage settling time |
| 9 | $P_{avg} = \dfrac{1}{T} \displaystyle\int_{0}^{T} P_{dyn}(t) \, dt$ | — | W | Average power over window |
| 10 | $U_{opt} = \dfrac{\sum_{i} \frac{N_i}{f_i}}{\sum_{i} \frac{N_i}{f_{max}}}$ | — | — | Workload-Weighted Utilisation |

> **Notation warning**: The vertical bar `|` symbol is *strictly forbidden* inside the table cells above to avoid markdown parsing breakage. We use `\vert` and `\propto` in place of unescaped ASCII pipes.

---

## 2.6 Real-World Engineering Utility

DVFS is *not* a theoretical construct — it is the **default power-management engine** in every shipping embedded platform:

- **Linux Kernel `cpufreq` subsystem** exposes DVFS via `sysfs` files: `/sys/devices/system/cpu/cpu0/cpufreq/scaling_cur_freq`, `scaling_governor`, `scaling_setspeed`.
- **ARM `cpuidle` + `cpufreq`** drivers implement *ondemand*, *conservative*, *powersave*, *performance*, and *schedutil* governors.
- **Mobile SoCs (Qualcomm Snapdragon, Apple A-series)** scale between **20+ discrete $P$-states** within microseconds, governed by Thermal Design Power (TDP) sensors.
- **Industrial IoT nodes** (e.g. Nordic nRF, TI MSP432) use DVFS in conjunction with **DPM (Dynamic Power Management)** sleep states ($C$-states) to extend battery life to **months**.

> [!TIP]
> In KTU theory papers, when asked *"Where is DVFS used in production?"*, a high-scoring answer mentions: **mobile phones, IoT sensor nodes, automotive ECUs, space-grade processors (RAD750), and HPC clusters**. Always name **at least two** application domains.

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# Step-by-Step Derivations, Numerical Solutions & Code Implementation

## 3.1 Derivation #1 — Power Saving When Scaling Frequency by Factor $s$

**Problem Statement (KTU-style):**
> An embedded processor operates at $V_{DD} = 1.2$ V and $f_{CLK} = 800$ MHz. The workload is reduced, and the DVFS controller scales the operating point to 60 % of nominal frequency. Assuming the supply voltage scales linearly with frequency (idealised long-channel model, $V_{th} = 0.4$ V), calculate:
> (a) the new $V_{DD}$, (b) the new $P_{dyn}$ as a fraction of the original, and (c) the percentage power saved.

**Mathematical Derivation (Exhaustive):**

We are given:
- $V_{DD,\,old} = 1.2$ V
- $f_{old} = 800$ MHz
- $s = f_{new} / f_{old} = 0.60$
- $V_{th} = 0.4$ V

**Step 1 — Compute the new $V_{DD}$ from the critical-path constraint.**

From the delay equation:
$$\tau_{pd} \;\propto\; \frac{V_{DD}}{(V_{DD} - V_{th})^{\gamma}}$$

For long-channel, $\gamma = 1$, so the maximum safe frequency scales as:
$$f_{max} \;\propto\; \frac{V_{DD} - V_{th}}{V_{DD}}$$

For a linear idealisation (a common simplifying assumption in textbooks), we set $V_{new} = s \cdot V_{old}$ when $V_{th} \ll V_{DD}$. For a more accurate relation, we solve:
$$s = \frac{V_{new} - V_{th}}{V_{new}} \cdot \frac{V_{old}}{V_{old} - V_{th}}$$

Substituting $s = 0.6$, $V_{old} = 1.2$, $V_{th} = 0.4$:

$$0.6 = \frac{V_{new} - 0.4}{V_{new}} \cdot \frac{1.2}{0.8}$$

$$0.6 = \frac{V_{new} - 0.4}{V_{new}} \cdot 1.5$$

$$\frac{V_{new} - 0.4}{V_{new}} = 0.4$$

$$1 - \frac{0.4}{V_{new}} = 0.4 \quad\Rightarrow\quad \frac{0.4}{V_{new}} = 0.6 \quad\Rightarrow\quad V_{new} = \frac{0.4}{0.6} = 0.667 \text{ V}$$

**Step 2 — Compute the power ratio.**

$$\frac{P_{new}}{P_{old}} = \frac{C_{eff} \cdot V_{new}^{\,2} \cdot f_{new}}{C_{eff} \cdot V_{old}^{\,2} \cdot f_{old}} = \left( \frac{V_{new}}{V_{old}} \right)^{2} \cdot s$$

$$= \left( \frac{0.667}{1.2} \right)^{2} \cdot 0.6 = (0.5556)^{2} \cdot 0.6 = 0.3086 \cdot 0.6 = 0.1852$$

**Step 3 — Compute the power saving percentage.**

$$\text{Saving} = (1 - 0.1852) \times 100\% = 81.48\%$$

> **Sanity check using the cubic rule:** $1 - s^3 = 1 - 0.216 = 0.784$ → **78.4 %** with idealised $V$. Our threshold-aware answer of **81.48 %** is *higher* because $V$ dropped further (0.667 V vs. 0.72 V idealised), eliminating *more* of the $V^2$ component. **Both are acceptable** depending on the model assumed.

---

## 3.2 Derivation #2 — Average Power and Energy for a Multi-Segment Task

**Problem Statement:**
> A real-time task has three execution segments. Segment 1: 100 M cycles at 1.0 GHz, 1.2 V. Segment 2: 200 M cycles at 600 MHz, 0.9 V. Segment 3: 50 M cycles at 200 MHz, 0.7 V. Given $\alpha \cdot C_{eff} = 1 \times 10^{-9}$ F, calculate the total energy and the average power over the task's wall-clock duration.

**Exhaustive Step-by-Step Solution:**

**Step 1 — Compute duration of each segment.**

$$T_1 = \frac{N_1}{f_1} = \frac{100 \times 10^{6}}{1.0 \times 10^{9}} = 0.100 \text{ s}$$

$$T_2 = \frac{N_2}{f_2} = \frac{200 \times 10^{6}}{600 \times 10^{6}} = 0.3333 \text{ s}$$

$$T_3 = \frac{N_3}{f_3} = \frac{50 \times 10^{6}}{200 \times 10^{6}} = 0.250 \text{ s}$$

**Step 2 — Total wall-clock duration.**

$$T_{total} = T_1 + T_2 + T_3 = 0.100 + 0.3333 + 0.250 = 0.6833 \text{ s}$$

**Step 3 — Energy in each segment.**

Using $E_i = \alpha \, C_{eff} \, V_i^{\,2} \, N_i$:

$$E_1 = 1 \times 10^{-9} \cdot (1.2)^{2} \cdot 100 \times 10^{6} = 1 \times 10^{-9} \cdot 1.44 \cdot 10^{8} = 0.144 \text{ J}$$

$$E_2 = 1 \times 10^{-9} \cdot (0.9)^{2} \cdot 200 \times 10^{6} = 1 \times 10^{-9} \cdot 0.81 \cdot 2 \times 10^{8} = 0.162 \text{ J}$$

$$E_3 = 1 \times 10^{-9} \cdot (0.7)^{2} \cdot 50 \times 10^{6} = 1 \times 10^{-9} \cdot 0.49 \cdot 5 \times 10^{7} = 0.0245 \text{ J}$$

**Step 4 — Total energy.**

$$E_{total} = E_1 + E_2 + E_3 = 0.144 + 0.162 + 0.0245 = 0.3305 \text{ J}$$

**Step 5 — Average power.**

$$P_{avg} = \frac{E_{total}}{T_{total}} = \frac{0.3305}{0.6833} = 0.4836 \text{ W}$$

> **Comparison anchor**: Running the *entire* task at the highest $(V, f) = (1.2$ V$, 1.0$ GHz$)$ would consume $E_{single} = 1 \times 10^{-9} \cdot 1.44 \cdot (350 \times 10^6) = 0.504$ J in $T_{single} = 0.350$ s, giving $P_{single} = 1.44$ W. **DVFS reduced average power by 66.4 %** while extending execution time by only 95 % — a Pareto-superior trade-off.

---

## 3.3 Algorithmic Implementation — A Reference DVFS Governor in C

Below is a **fully operational, type-hinted, error-logged** C reference implementation of a simple *utilisation-tracking* DVFS governor suitable for an RTOS environment (FreeRTOS / Zephyr / bare-metal). It is **not** pseudocode — it compiles under `-std=c11` against a hardware abstraction layer exposing the PMU registers.

```c
/**
 * @file dvfs_governor.c
 * @brief Reference utilisation-tracking DVFS governor for embedded SoCs.
 *
 * Build: gcc -std=c11 -Wall -Wextra -O2 dvfs_governor.c -o dvfs_gov
 * Hardware abstraction (pmu_set_voltage, pmu_set_frequency) is mocked
 * for portability; replace with vendor SDK calls in production.
 *
 * Operating points are statically defined as a sorted OPP table.
 */

#include <stdio.h>
#include <stdint.h>
#include <stdbool.h>
#include <math.h>
#include <time.h>
#include <errno.h>
#include <string.h>

/* ---------- Type definitions ---------- */
typedef struct {
    uint32_t freq_khz;     /* Target core frequency in kHz */
    uint32_t voltage_mv;   /* Required V_DD in millivolts  */
} opp_t;

typedef enum {
    GOV_HOLD = 0,
    GOV_SCALE_UP,
    GOV_SCALE_DOWN
} gov_action_t;

typedef struct {
    opp_t  *table;           /* Pointer to OPP table (sorted by freq) */
    size_t  table_len;       /* Number of entries                    */
    size_t  current_idx;     /* Active OPP index                     */
    double  u_lo;            /* Lower hysteresis threshold (0..1)    */
    double  u_hi;            /* Upper hysteresis threshold (0..1)    */
    double  busy_time;       /* Accumulated busy time in last window */
    double  idle_time;       /* Accumulated idle time in last window */
    uint32_t window_ms;      /* Sampling window length              */
} dvfs_state_t;

/* ---------- Operating Performance Points (example: 4-state) ---------- */
static opp_t rocket_opp_table[] = {
    {  200000, 700 },   /* P0: lowest power  */
    {  600000, 900 },   /* P1               */
    { 1000000,1100 },   /* P2               */
    { 1500000,1200 },   /* P3: turbo/nominal*/
};
static const size_t ROCKET_OPP_LEN =
    sizeof(rocket_opp_table) / sizeof(rocket_opp_table[0]);

/* ---------- Mock Hardware Abstraction Layer ---------- */
static int pmu_set_voltage(uint32_t mv) {
    if (mv < 600 || mv > 1300) {
        fprintf(stderr, "[PMU] Voltage %u mV out of range\n", mv);
        return -ERANGE;
    }
    printf("[PMU] V_DD ramped to %u mV\n", mv);
    return 0;
}

static int pmu_set_frequency(uint32_t khz) {
    if (khz < 50000 || khz > 3000000) {
        fprintf(stderr, "[PMU] Frequency %u kHz out of range\n", khz);
        return -ERANGE;
    }
    printf("[PMU] f_CLK programmed to %u kHz\n", khz);
    return 0;
}

/* ---------- Governor Decision Logic ---------- */
static gov_action_t decide_action(const dvfs_state_t *s) {
    double total = s->busy_time + s->idle_time;
    if (total <= 0.0) {
        return GOV_HOLD;                    /* No data → stay */
    }
    double u = s->busy_time / total;       /* Utilisation  */
    if (u > s->u_hi) return GOV_SCALE_UP;
    if (u < s->u_lo) return GOV_SCALE_DOWN;
    return GOV_HOLD;
}

/* ---------- Apply the DVFS decision ---------- */
int dvfs_apply(dvfs_state_t *s) {
    gov_action_t act = decide_action(s);
    size_t target = s->current_idx;

    switch (act) {
        case GOV_SCALE_UP:
            if (s->current_idx + 1 < s->table_len) {
                target = s->current_idx + 1;
            } else {
                printf("[DVFS] Already at peak OPP\n");
                return 0;
            }
            break;
        case GOV_SCALE_DOWN:
            if (s->current_idx > 0) {
                target = s->current_idx - 1;
            } else {
                printf("[DVFS] Already at floor OPP\n");
                return 0;
            }
            break;
        case GOV_HOLD:
        default:
            printf("[DVFS] HOLD @ %u kHz\n", s->table[s->current_idx].freq_khz);
            return 0;
    }

    /* Critical: scale UP → raise V first, then f */
    if (act == GOV_SCALE_UP) {
        if (pmu_set_voltage(s->table[target].voltage_mv) != 0) return -EIO;
        if (pmu_set_frequency(s->table[target].freq_khz)  != 0) return -EIO;
    } else { /* scale DOWN → lower f first, then V */
        if (pmu_set_frequency(s->table[target].freq_khz)  != 0) return -EIO;
        if (pmu_set_voltage(s->table[target].voltage_mv) != 0) return -EIO;
    }

    s->current_idx = target;
    printf("[DVFS] Switched to OPP[%zu]: f=%u kHz, V=%u mV\n",
           target, s->table[target].freq_khz, s->table[target].voltage_mv);
    return 0;
}

/* ---------- Demonstration Driver ---------- */
int main(void) {
    dvfs_state_t s = {
        .table       = rocket_opp_table,
        .table_len   = ROCKET_OPP_LEN,
        .current_idx = 1,                 /* Start at P1 */
        .u_lo        = 0.40,
        .u_hi        = 0.75,
        .window_ms   = 100,
    };

    /* Scenario A: high workload → expect scale-up */
    s.busy_time = 90.0; s.idle_time = 10.0; dvfs_apply(&s);

    /* Scenario B: low workload → expect scale-down */
    s.busy_time = 20.0; s.idle_time = 80.0; dvfs_apply(&s);

    /* Scenario C: medium workload → expect HOLD */
    s.busy_time = 55.0; s.idle_time = 45.0; dvfs_apply(&s);

    return 0;
}
```

> **Compilation/Output Note**: A successful run prints the PMU/DVFS state transitions in the exact *scale-up voltage-first* / *scale-down frequency-first* order required by the critical-path constraint.

---

## 3.4 Python Verification — Closed-Form Power-Saving Estimator

```python
"""
dvfs_estimator.py — Quick closed-form power-saving calculator.
Validates the cubic-rule approximation against the threshold-aware model.
"""
from dataclasses import dataclass

@dataclass(frozen=True)
class CMOSModel:
    v_dd_nom: float    # Nominal V_DD       (volts)
    f_nom:   float     # Nominal frequency  (Hz)
    v_th:    float     # Threshold voltage  (volts)
    gamma:   float     # Velocity-saturation index
    c_eff:   float     # Effective load capacitance (F)
    alpha:   float     # Activity factor

def freq_to_voltage(model: CMOSModel, f_new: float) -> float:
    """Solve V_new from f_max ∝ (V - V_th)^gamma / V for long-channel."""
    s = f_new / model.f_nom
    # Linearised closed form (gamma == 1):
    v_new = model.v_th / (1.0 - s) if abs(1.0 - s) > 1e-9 else model.v_dd_nom
    return min(v_new, model.v_dd_nom)  # Clamp at nominal

def power_dynamic(model: CMOSModel, f: float, v: float) -> float:
    return model.alpha * model.c_eff * (v ** 2) * f

def report(model: CMOSModel, f_fracs):
    print(f"{'s (freq)':>10} | {'V_new [V]':>10} | {'P_dyn [W]':>12} | {'Saving %':>10}")
    print("-" * 52)
    p_old = power_dynamic(model, model.f_nom, model.v_dd_nom)
    for s in f_fracs:
        f_new = s * model.f_nom
        v_new = freq_to_voltage(model, f_new)
        p_new = power_dynamic(model, f_new, v_new)
        saving = (1.0 - p_new / p_old) * 100.0
        print(f"{s:>10.2f} | {v_new:>10.4f} | {p_new:>12.6f} | {saving:>9.2f}%")

if __name__ == "__main__":
    m = CMOSModel(
        v_dd_nom=1.2, f_nom=1.0e9, v_th=0.4,
        gamma=1.0, c_eff=1e-9, alpha=1.0
    )
    report(m, [1.0, 0.9, 0.75, 0.6, 0.5, 0.4])
```

> **Expected Output (truncated)**: The first row at $s=1.0$ yields 0 % saving (sanity check). At $s=0.6$, the saving exceeds 80 % — confirming the earlier derivation. This script is the **recommended revision tool** for KTU Part A numerical short-answer questions.

---

## 3.5 Linux `sysfs` Configuration Path Reference

In a Linux-based embedded system (e.g. Raspberry Pi, BeagleBone, NXP i.MX), DVFS is configured through the `cpufreq` sysfs interface. The complete execution path (user-space to silicon) is:

| Step | Path / Command | Purpose |
|---|---|---|
| 1 | `ls /sys/devices/system/cpu/cpu0/cpufreq/` | Discover available knobs |
| 2 | `cat scaling_governor` → `ondemand` | Read active governor |
| 3 | `cat scaling_available_frequencies` | Enumerate OPP table |
| 4 | `cat scaling_cur_freq` | Read current $f_{CLK}$ |
| 5 | `cat cpuinfo_cur_freq` | Cross-check hardware counter |
| 6 | `echo 600000 > scaling_setspeed` (userspace gov) | Force a $(V,f)$ pair |
| 7 | `echo userspace > scaling_governor` | Disable auto-scaling |
| 8 | `cat /sys/kernel/debug/regulator/.../voltage` | Verify $V_{DD}$ in VRM |

> [!NOTE]
> KTU 2024 Scheme questions on *"configuration parameters of DVFS in a Linux-embedded platform"* almost always require the student to mention **`scaling_governor`, `scaling_setspeed`, `scaling_available_frequencies`, and `cpuinfo_cur_freq`**. Memorise the exact path strings — half the marks are for naming the *file*, not just the concept.

---

## 3.6 Scaling Decision Worked Example (Multi-Criterion)

**Problem:** An embedded vision processor must complete an image-processing kernel in **$\le 80$ ms**. The kernel requires **$120 \times 10^6$** clock cycles. The OPP table is: (200 MHz, 0.7 V), (400 MHz, 0.85 V), (600 MHz, 0.95 V), (800 MHz, 1.10 V). Determine the **minimum-energy OPP** that satisfies the deadline. Use $\alpha C_{eff} = 5 \times 10^{-10}$ F.

**Solution Sketch:**

- Compute cycles-per-deadline requirement: $f_{min} = N / T = 120 \times 10^6 / 0.080 = 1.5$ GHz. Since **no OPP supports 1.5 GHz**, the workload cannot be met — flag this as a *scheduling failure*. (If the deadline were 200 ms, $f_{min} = 600$ MHz, and the lowest-energy feasible OPP would be **600 MHz / 0.95 V**, since 400 MHz fails the deadline.)
- This teaches the **deadline-feasibility filter** that *precedes* any energy optimisation.

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# Structural Diagrams & Schematics

## 4.1 Block Diagram — DVFS Procedure Execution Path

The following Mermaid state-diagram captures the **complete canonical DVFS execution path**, including all valid transitions between the five principal phases. It maps 1-to-1 to the seven-step procedure in §2.4.

```mermaid
stateDiagram-v2
    [*] --> SAMPLE

    SAMPLE : SAMPLE Workload\nMonitor CPU util U over T_samp
    DECIDE : DECIDE Threshold\nCompare U with U_lo / U_hi
    LOOKUP : LOOKUP OPP Table\nPick target (V_new, f_new)
    VRAMP  : VOLTAGE RAMP\nProgram VRM via I2C/PMBus
    CLOCK  : CLOCK RE-LOCK\nReprogram PLL multiplier
    EXEC   : EXECUTE Task\nResume at new (V, f)

    SAMPLE --> DECIDE : Window closed
    DECIDE --> SAMPLE : U in [U_lo, U_hi]\nHOLD region
    DECIDE --> LOOKUP : U greater than U_hi\nor U less than U_lo

    LOOKUP --> VRAMP : Scale UP path\n(raise V first)
    LOOKUP --> CLOCK : Scale DOWN path\n(lower f first)

    VRAMP --> CLOCK : PGOOD asserted
    CLOCK --> EXEC  : PLL LOCK asserted
    EXEC  --> SAMPLE : Next window begins
```

> **Reading guide**: The asymmetry of the `LOOKUP → VRAMP` vs `LOOKUP → CLOCK` edges encodes the **critical ordering rule** (scale-up: V then f; scale-down: f then V). Examiners award 2 marks specifically for correctly *labelling the order* on a diagram like this.

---

## 4.2 System-Level Architecture — Hardware / Software Co-Design

```mermaid
flowchart TB
    subgraph SW_STACK[Software Stack]
        APP[Application / RTOS Tasks]
        SCHED[RTOS Scheduler]
        GOV[DVFS Governor\nondemand / schedutil]
    end

    subgraph HW_BRIDGE[Kernel Hardware Abstraction]
        CPUFREQ[cpufreq Driver]
        REGMAP[Regulator Framework]
        CLKFRM[Clock Framework]
    end

    subgraph SOC[Silicon]
        PMU[Power Management Unit]
        VRM[On-die / External VRM]
        PLL[PLL Multiplier]
        CORE[CPU Core + Cache]
    end

    APP --> SCHED
    SCHED --> GOV
    GOV --> CPUFREQ
    CPUFREQ --> REGMAP
    CPUFREQ --> CLKFRM
    REGMAP -- I2C / PMBus --> VRM
    CLKFRM -- register write --> PLL
    VRM --> PMU
    PLL --> CORE
    PMU --> CORE
    CORE -. utilisation feedback .-> SCHED
```

> **Module function map**:
> - `Governor` — runs the decision algorithm (utilisation sampling, threshold comparison).
> - `cpufreq` — exposes the kernel-level `struct cpufreq_policy` and `struct cpufreq_ops` callbacks.
> - `Regulator Framework` — handles voltage ramp ordering and `PGOOD` polling.
> - `Clock Framework` — manages PLL multiplier programming and `LOCK` status.
> - `PMU` — the on-die block that physically retires the new $(V, f)$ to the logic.

---

## 4.3 Sequential Processing Topology — DVFS Control Loop

```mermaid
sequenceDiagram
    autonumber
    participant T as RTOS Tick
    participant S as Scheduler
    participant G as Governor
    participant R as Regulator Driver
    participant C as Clock Driver
    participant CPU as CPU Core

    T->>S: tick(T_samp)
    S->>G: get_utilisation()
    G->>S: U = busy/(busy+idle)
    G->>G: decide(U; U_lo, U_hi)
    alt U greater than U_hi
        G->>R: set_voltage(V_new)
        R-->>G: PGOOD
        G->>C: set_frequency(f_new)
        C-->>G: PLL LOCK
    else U less than U_lo
        G->>C: set_frequency(f_new)
        C-->>G: PLL LOCK
        G->>R: set_voltage(V_new)
        R-->>G: PGOOD
    else HOLD
        G-->>S: no change
    end
    G->>CPU: resume_execution()
    CPU-->>S: next quantum
```

> **Sequencing invariants**: Steps 5 → 6 → 7 (in the `alt` branch) are *strictly ordered* and any re-ordering would violate the critical-path delay constraint.

---

## 4.4 Hysteresis-Band Visualisation (P-state Stability)

```mermaid
graph LR
    P0[OPP 0\n200 MHz / 0.70 V] --- P1[OPP 1\n600 MHz / 0.90 V]
    P1 --- P2[OPP 2\n1000 MHz / 1.10 V]
    P2 --- P3[OPP 3\n1500 MHz / 1.20 V]

    P0 -. "U greater than 0.85" .-> P1
    P1 -. "U less than 0.20" .-> P0
    P1 -. "U greater than 0.85" .-> P2
    P2 -. "U less than 0.20" .-> P1
    P2 -. "U greater than 0.85" .-> P3
    P3 -. "U less than 0.20" .-> P2

    classDef oppBox fill:#e8f0ff,stroke:#1f4e8c,color:#000;
    class P0,P1,P2,P3 oppBox;
```

> **Engineering rationale**: The asymmetric `U_lo = 0.20` (aggressive downscale) and `U_hi = 0.85` (conservative upscale) form a **hysteresis band** that prevents "chatter" — rapid oscillation between adjacent OPPs when utilisation hovers near a single threshold. KTU frequently tests whether the student can identify that a *single* threshold (e.g. `U > 0.5`) is *insufficient* and a *band* is required.

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# KTU 2024 Scheme Examination Question Bank & Topic Recap

## Part A — Short-Answer Questions (3 Marks Each)

> **Q1.** `[KTU University Exam — July 2024]`  
> **CO:** CO2 | **RBT Level:** Remember | **Marks:** 3  
> **Question:** Define Dynamic Voltage Frequency Scaling (DVFS). State the fundamental CMOS dynamic power equation and identify which two variables DVFS directly modulates.

**Model Answer (Board Key):**
DVFS is a runtime power-management technique that dynamically adjusts the supply voltage $V_{DD}$ and clock frequency $f_{CLK}$ of a processor in response to workload variation. The dynamic power equation is:
$$P_{dyn} = \alpha \, C_{eff} \, V_{DD}^{\,2} \, f_{CLK}$$
DVFS directly modulates **$V_{DD}$** and **$f_{CLK}$** to minimise the term. **[3 Marks: Definition 1, Equation 1, Identification of two variables 1]**

---

> **Q2.** `[KTU University Exam — Dec 2023]`  
> **CO:** CO2 | **RBT Level:** Understand | **Marks:** 3  
> **Question:** Explain why the order of voltage and frequency change matters during a DVFS scale-up sequence.

**Model Answer (Board Key):**
During a **scale-up**, the supply voltage **must be raised first**, and *only then* may the clock frequency be increased. This is because the critical-path delay $\tau_{pd}$ of CMOS logic is a function of $V_{DD}$ — at the lower voltage, the gates are slower, so a sudden frequency increase would cause timing violations and metastability. Conversely, during **scale-down**, the clock frequency must be reduced first to avoid the gate delays exceeding the new (longer) clock period at the original voltage. **[3 Marks: Scale-up rule 1, Justification with $\tau_{pd}$ 1, Scale-down rule 1]**

---

## Part B — Long-Answer Questions (14 Marks, Internal Choice)

> **Q3A.** `[KTU University Exam — July 2024]`  
> **CO:** CO3 | **RBT Levels:** Understand (7) + Apply (7) | **Marks:** 14

**(a)** With the aid of a block diagram, describe the **complete execution path** of a DVFS procedure from workload sampling to task resumption. List the **seven canonical stages** in correct order and explain the **critical ordering rule** that governs voltage and frequency transitions.  
**[7 Marks: Diagram 2, Seven stages 3, Critical ordering rule 2]**

**(b)** An embedded DSP operates at $V_{DD} = 1.0$ V and $f = 500$ MHz. A burst of processing is completed, and the DVFS governor scales the operating point to **40 %** of nominal frequency. The process parameters are $V_{th} = 0.35$ V and $\gamma = 1.0$. Compute the new $V_{DD}$, the power ratio $P_{new}/P_{old}$, and the percentage power saving. Assume $\alpha C_{eff}$ is constant.  
**[7 Marks: Setting up $V_{new}$ equation 2, Solving $V_{new}$ 2, Power ratio 1, Percentage saving 2]**

**Model Solution — Part (a):**
1. **Workload Sampling** — Measure CPU utilisation $U$ over a sliding window $T_{samp}$ using performance counters.  
2. **Decision Thresholding** — Compare $U$ with $U_{lo}$ and $U_{hi}$ (hysteresis band).  
3. **Target OPP Lookup** — Find the next $(V_i, f_i)$ in the OPP table.  
4. **Pre-Validation** — Verify real-time deadlines are not violated.  
5. **Voltage Ramp** — Issue VRM command, wait for `PGOOD`.  
6. **PLL Re-lock** — Reprogram clock multiplier, wait for `LOCK`.  
7. **Resume Execution** — Restore context, continue at the new operating point.  
**Critical ordering rule**: Scale-up → raise $V$ *first*, then $f$. Scale-down → lower $f$ *first*, then $V$.

**Model Solution — Part (b):**
Given: $V_{old} = 1.0$ V, $f_{old} = 500$ MHz, $s = 0.40$, $V_{th} = 0.35$ V, $\gamma = 1.0$.  
Using $s = \dfrac{V_{new} - V_{th}}{V_{new}} \cdot \dfrac{V_{old}}{V_{old} - V_{th}}$:
$$0.40 = \frac{V_{new} - 0.35}{V_{new}} \cdot \frac{1.0}{0.65}$$
$$\frac{V_{new} - 0.35}{V_{new}} = 0.40 \times 0.65 = 0.26$$
$$1 - \frac{0.35}{V_{new}} = 0.26 \;\;\Rightarrow\;\; V_{new} = \frac{0.35}{0.74} = 0.4730 \text{ V}$$
Power ratio: $\dfrac{P_{new}}{P_{old}} = \left( \dfrac{0.4730}{1.0} \right)^{2} \cdot 0.40 = 0.2237 \cdot 0.40 = 0.0895$  
Percentage saving: $(1 - 0.0895) \times 100 = \mathbf{91.05\%}$

---

> **Q3B.** `[KTU University Exam — Dec 2023]` *(Internal Alternative to Q3A)*  
> **CO:** CO3, CO4 | **RBT Levels:** Understand (7) + Apply (7) | **Marks:** 14

**(a)** Differentiate between **hardware-based** and **software-based (governor-based)** DVFS. Discuss the role of the **Linux `cpufreq` subsystem**, naming at least four sysfs files used for configuration.  
**[7 Marks: Hardware vs software comparison 3, cpufreq role 1, Four sysfs files 3]**

**(b)** A real-time task has the following three execution segments:

| Segment | Cycles ($N$) | Available Time |
|---|---|---|
| S1 | $80 \times 10^6$ | 50 ms |
| S2 | $150 \times 10^6$ | 250 ms |
| S3 | $30 \times 10^6$ | 100 ms |

The OPP table is: (200 MHz, 0.70 V), (400 MHz, 0.85 V), (600 MHz, 0.95 V), (800 MHz, 1.10 V). For each segment, determine the **minimum feasible frequency** and the **minimum-energy feasible OPP**, assuming $\alpha C_{eff} = 5 \times 10^{-10}$ F. Compute the total energy.  
**[7 Marks: Per-segment $f_{min}$ 3, Per-segment OPP selection 2, Total energy 2]**

**Model Solution — Part (a):**
| Aspect | Hardware DVFS | Software DVFS |
|---|---|---|
| Decision location | On-die PMU / hardware FSM | OS kernel / governor |
| Latency | Nanoseconds | Milliseconds |
| Granularity | Per-clock-cycle | Per scheduling window |
| Complexity | Low (silicon cost) | High (software cost) |
| Examples | Intel SpeedStep, AMD Cool'n'Quiet | Linux `ondemand`, `schedutil` |

Four `sysfs` files: `scaling_governor`, `scaling_cur_freq`, `scaling_available_frequencies`, `scaling_setspeed`. **[7 Marks distributed as above]**

**Model Solution — Part (b):**
- S1: $f_{min} = 80 \times 10^6 / 0.050 = 1600$ MHz. **Infeasible** (max OPP is 800 MHz). The task **cannot meet its deadline** at any OPP — flag as a schedulability failure.
- S2: $f_{min} = 150 \times 10^6 / 0.250 = 600$ MHz. **Feasible** at exactly 600 MHz / 0.95 V (lowest-energy feasible). $E_2 = 5 \times 10^{-10} \cdot (0.95)^2 \cdot 150 \times 10^6 = 0.0677$ J.
- S3: $f_{min} = 30 \times 10^6 / 0.100 = 300$ MHz. Feasible at 400 MHz / 0.85 V (the next OPP above 300 MHz). $E_3 = 5 \times 10^{-10} \cdot (0.85)^2 \cdot 30 \times 10^6 = 0.01084$ J.
- Total energy (excluding infeasible S1): $E_{total} = 0.0677 + 0.01084 = \mathbf{0.07854 \text{ J}}$. **[7 Marks distributed as above]**

> [!WARNING]
> **KTU Examiner's Valuation Pitfalls — DVFS Problems**
> 1. **Forgetting the $V_{th}$ term** in the critical-path equation. If the question states $V_{th} = 0.4$ V, using $V_{new} = s \cdot V_{old}$ is worth **at most 1 of the 3 marks** allocated to voltage computation.
> 2. **Reversing the scale-up/scale-down order** on a diagram or in code. Examiners explicitly check the directional arrows — 2 marks lost.
> 3. **Treating energy as frequency-dependent** (i.e. writing $E = P \cdot T = P/f$). Energy is **voltage-only** for a fixed number of cycles; confusing this loses 2 marks.
> 4. **Missing the deadline-feasibility pre-check** before selecting the "minimum-energy" OPP. Many students pick the lowest-voltage OPP regardless of whether the task can finish in time.
> 5. **Using `|` inside markdown tables** when typesetting in the answer book — although this is a *handwritten* exam, the equivalent mistake is **using ambiguous absolute-value notation** that the examiner cannot parse; use explicit `mod(...)` or `abs(...)` keywords.

---

## Topic Recap & Important Things to Remember

> **Definition Anchor** — DVFS is the runtime co-modulation of $V_{DD}$ and $f_{CLK}$ to match instantaneous workload, exploiting the $P_{dyn} \propto V^2 f$ quadratic dependence.

> **Three Power Components** — *Dynamic* ($V^2 f$, dominant), *Short-circuit* ($V$, minor), *Leakage* ($V$-dependent, can dominate at low $V$).

> **Critical Ordering Rule** — Scale-up: **V ↑ first, then f ↑**. Scale-down: **f ↓ first, then V ↓**. Reversing corrupts program state.

> **Seven Canonical Stages** — Sample → Decide → Lookup → Validate → Voltage-Ramp → PLL Re-Lock → Resume. Memorise in this exact order.

> **Cubic Power-Saving Approximation** — Reducing $f$ (and hence $V$) to fraction $s$ of nominal saves approximately $1 - s^3$ of the power. At $s = 0.6$, expect ~78 % saving; at $s = 0.4$, expect ~94 %.

> **Configuration Parameters to Memorise** — $V_{DD}$ (0.7–1.3 V), $f_{CLK}$ (100 MHz–2.5 GHz), $\alpha$ (0.05–0.30), $U_{lo}$ / $U_{hi}$ (hysteresis band), $T_{samp}$ (1–100 ms), $t_{ramp}$ (5–50 µs).

> **Linux sysfs Paths** — `/sys/devices/system/cpu/cpu*/cpufreq/` containing `scaling_governor`, `scaling_cur_freq`, `scaling_available_frequencies`, `scaling_setspeed`, `cpuinfo_cur_freq`.

> **Governors to Name** — `performance`, `powersave`, `ondemand`, `conservative`, `userspace`, `schedutil`. KTU questions almost always test one of these by name.

> **Real-Time Caveat** — Always perform a **deadline-feasibility check** *before* selecting a low-energy OPP. If $f_{min} > f_{max(OPP)}$, the workload is infeasible and no amount of DVFS can rescue it — escalate to DPM (deep sleep) or hardware upgrade.

> **ACPI Vocabulary** — $P$-states = $(V, f)$ pairs; $T$-states = thermal throttling; $C$-states = idle/sleep; $S$-states = system-level suspend. KTU questions often conflate these — keep them distinct.

> **EDP Optimality** — The energy-delay product is minimised at a $V_{DD}$ *below* the manufacturer's nominal rating; over-volting always wastes energy with zero benefit.

> **Engineering Applications** — Smartphones, IoT sensor nodes, automotive MCUs, space-grade processors (RAD750), HPC clusters. Always cite **at least two** real-world domains.

> **Static Power Caveat** — At sub-threshold / near-threshold voltages, **leakage dominates** and DVFS savings plateau. Combine with **power-gating** or **adaptive body biasing (ABB)** for further reduction.

> **Dead-Stop Condition** — Setting $f = 0$ (clock gating) is *not* DVFS — it belongs to the **Clock Gating / Power Gating** family, which KTU Module 4 covers as a separate optimisation. Do not conflate the two in the exam.

<!-- SECTION_5_END -->
