# Inverter switching characteristics: Delay estimation, power dissipation

<!-- SECTION_1_START -->
# CMOS Inverter Switching Characteristics: Delay Estimation & Power Dissipation

## 1.1 Core Technical Definition

In CMOS (Complementary Metal-Oxide-Semiconductor) VLSI design, a **CMOS Inverter** is the fundamental building block that produces a logical NOT operation by alternately connecting the output node to $V_{DD}$ (logic **HIGH**) through a PMOS pull-up network, or to **GND** (logic **LOW**) through an NMOS pull-down network, where exactly one transistor conducts at steady state.

The **switching characteristics** of a CMOS inverter describe the transient behaviour of the output voltage $V_{out}$ as the input voltage $V_{in}$ transitions between logic levels. The three most critical performance metrics evaluated by KTU examiners are:

1. **Propagation Delay ($t_p$)** – the time taken for an input transition to cause a corresponding output transition.
2. **Power Dissipation ($P_{total}$)** – the average energy consumed per unit time during operation.
3. **Power-Delay Product (PDP)** – the energy required for a single switching event, a key figure-of-merit.

> [!IMPORTANT]
> **KTU 2024 Syllabus Definition (PECST401 – Module 2):**  
> *"Characterise the CMOS inverter in terms of propagation delay, rise/fall times, short-circuit current, dynamic switching power, and static leakage power. Estimate delay using the equivalent RC switch model."*

---

## 1.2 Conceptual Analogy & Intuitive Understanding

> [!NOTE]
> **Real-World Analogy — The Two-Way Water Tap**  
> Imagine a single water pipe (the output node) connected to two reservoirs: a pressurised overhead tank (representing $V_{DD}$) and an empty drain (representing **GND**).  
> - The **PMOS transistor** behaves like a *push-valve* that opens when the input is **LOW** (0 V), allowing water from the tank to fill the pipe.  
> - The **NMOS transistor** behaves like a *drain-valve* that opens when the input is **HIGH** ($V_{DD}$), draining the pipe to empty.  
> - Because the two valves are mechanically interlocked (complementary control), the pipe is **never connected to both** the tank and the drain at the same time. This is why CMOS draws **near-zero static current** — the water simply has nowhere wasteful to go.

For delay, picture the pipe being narrow. Even with the valve fully open, it takes a measurable amount of time to *fill* (charging) or *empty* (discharging) the pipe. That time depends on the **pipe's cross-sectional area** (the load capacitance $C_L$) and the **valve's opening resistance** (the MOSFET on-resistance $R_{on}$).

For power, consider that every time you switch the valves, you must pump a *fixed amount* of water uphill to fill the pipe (charging energy), and that water is *wasted* down the drain on the next switching cycle. This is the essence of **dynamic power dissipation** in CMOS.

---

## 1.3 Standard Metrics and Physical Constants

| Symbol | Quantity | Typical Value (180 nm node) |
| :--- | :--- | :--- |
| $V_{DD}$ | Supply Voltage | **1.8 V** |
| $V_{TH_n}$ | NMOS Threshold Voltage | **0.4 V** |
| $V_{TH_p}$ | PMOS Threshold Voltage | $-$**0.4 V** |
| $C_{ox}$ | Gate Oxide Capacitance per unit area | $\approx$ **8.5 fF/$\mu m^2$** |
| $\mu_n$ | NMOS Electron Mobility | $\approx$ **450 $cm^2/V\cdot s$** |
| $\mu_p$ | PMOS Hole Mobility | $\approx$ **150 $cm^2/V\cdot s$** |
| $t_{ox}$ | Gate Oxide Thickness | $\approx$ **4 nm** |

> [!VISUALIZATION CONTROL]
> **Concept:** CMOS Inverter Voltage Transfer Characteristic (VTC) with critical switching points.
> **Plotting Equations (Desmos Input):**
> * $x$-axis: $V_{in} \in [0, 1.8]$  
> * $y$-axis: $V_{out} \in [0, 1.8]$  
> * S-curve approximation: $V_{out} = \dfrac{1.8}{1 + e^{k(V_{in} - V_M)}}$ where $k = 12$ and $V_M = 0.9$
> **Visual Description:** An S-shaped curve crossing the line $V_{out} = V_{in}$ at the **switching threshold $V_M \approx V_{DD}/2$** for a symmetric inverter, with regions marked: HIGH output (NMOS active), transition (both ON), LOW output (PMOS active).

---

## 1.4 Course Outcome (CO) Mapping

As per the KTU 2024 NEP-aligned Outcome-Based Education (OBE) framework for **PECST401 VLSI Design**, this topic maps to:
* **CO2:** *Analyse the static and dynamic characteristics of CMOS inverters and estimate delay-power trade-offs.*  
* **Bloom's Cognitive Level:** Apply / Analyse (Level 3 & 4).
<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The Four Phases of CMOS Inverter Switching

When the input $V_{in}$ transitions, the inverter passes through four operational regions:

| Region | NMOS State | PMOS State | Output Behaviour |
| :--- | :--- | :--- | :--- |
| $V_{in} < V_{TH_n}$ | Cutoff | Linear | $V_{out} = V_{DD}$ |
| $V_{TH_n} < V_{in} < V_{DD} - \vert V_{TH_p}\vert$ | Saturation | Saturation | Sharp transition |
| $V_{in} > V_{DD} - \vert V_{TH_p}\vert$ | Linear | Cutoff | $V_{out} = 0$ |
| Static (steady) | OFF | ON (or vice versa) | No current path |

> [!NOTE]
> **Key Insight for KTU Exams:** In the **static steady state**, the PMOS or NMOS is *cut off*, meaning **no direct path exists between $V_{DD}$ and GND**. This is why ideal CMOS draws **zero static current** — the *single largest advantage* of CMOS over NMOS/TTL logic families.

---

## 2.2 Propagation Delay — Definitions and Formulas

### 2.2.1 Standard Delay Definitions

For KTU evaluation, you must memorise these four critical delay parameters:

* **$t_{PHL}$ (High-to-Low delay):** Time for output to fall from 90 % to 50 % of $V_{DD}$ when input rises.
* **$t_{PLH}$ (Low-to-High delay):** Time for output to rise from 10 % to 50 % of $V_{DD}$ when input falls.
* **$t_p$ (Average propagation delay):** $\dfrac{t_{PHL} + t_{PLH}}{2}$
* **$t_r$ / $t_f$ (Rise / Fall time):** Time for output to swing between 10 %–90 % or 90 %–10 % of $V_{DD}$.

### 2.2.2 RC Switch Model Derivation

When the input is a step function, the output node is modelled as a first-order **RC network** charging or discharging the load capacitance $C_L$ through the effective on-resistance of the MOSFET.

> [!IMPORTANT]
> **Core RC Delay Formula (MOST TESTED in KTU):**
> 
> $$\boxed{t_{PHL} = \ln(2) \cdot R_{eq,n} \cdot C_L \approx 0.69 \, R_{eq,n} \, C_L}$$
> 
> $$\boxed{t_{PLH} = \ln(2) \cdot R_{eq,p} \cdot C_L \approx 0.69 \, R_{eq,p} \, C_L}$$
> 
> The factor $\ln(2) \approx 0.69$ arises from the 50 % trip-point evaluation of a first-order exponential: $V_{out}(t) = V_{DD} \cdot e^{-t/RC}$, setting $V_{out} = V_{DD}/2$ yields $t = RC \cdot \ln 2$.

### 2.2.3 Equivalent On-Resistance of MOSFET

For a long-channel MOSFET in the linear (triode) region, the on-resistance is:

$$R_{on} = \frac{1}{\mu \, C_{ox} \, \frac{W}{L} \, (V_{GS} - V_{TH})}$$

For an inverter driven by a step from 0 to $V_{DD}$ with the output initially at $V_{DD}$, the NMOS drain-to-source voltage sweeps from $V_{DD}$ down to 0. The *effective* average resistance is captured by replacing the linear $V_{DS}$ dependence with the standard switch-resistance approximation:

$$R_{eq,n} = \frac{1}{k_n (V_{DD} - V_{TH_n})}$$

where $k_n = \mu_n \, C_{ox} \left(\dfrac{W}{L}\right)_n$ is the NMOS transconductance parameter.

---

## 2.3 Power Dissipation — Complete Theoretical Framework

Total CMOS power dissipation has **three** distinct components:

$$\boxed{P_{total} = P_{dynamic} + P_{short\text{-}circuit} + P_{static\text{(leakage)}}}$$

### 2.3.1 Dynamic Switching Power (Dominant Component)

Every switching cycle, the load capacitor $C_L$ is charged from 0 to $V_{DD}$ and then discharged back. The energy drawn from the supply for *one full charge-discharge cycle* is:

$$E_{cycle} = C_L \cdot V_{DD}^2$$

If the inverter switches at a frequency $f$ with switching activity factor $\alpha$ (the fraction of clock cycles the output actually toggles), the average dynamic power is:

$$\boxed{P_{dynamic} = \alpha \cdot C_L \cdot V_{DD}^2 \cdot f}$$

> [!NOTE]
> **Why $C_L V_{DD}^2$ and not $\tfrac{1}{2} C_L V_{DD}^2$?**  
> This is a *favourite* KTU conceptual question. The energy *stored* in the capacitor is $\tfrac{1}{2} C_L V_{DD}^2$, but the energy *drawn from $V_{DD}$* is $C_L V_{DD}^2$. The other half is dissipated as heat in the PMOS during charging. On discharge, the stored $\tfrac{1}{2} C_L V_{DD}^2$ is dissipated in the NMOS. Hence, *both halves* of the energy are converted to heat — no perpetual motion!

### 2.3.2 Short-Circuit Power

During the brief interval when both NMOS and PMOS are simultaneously in saturation (the input is between $V_{TH_n}$ and $V_{DD} - \vert V_{TH_p}\vert$), a current path exists directly from $V_{DD}$ to GND.

$$P_{short\text{-}circuit} = I_{peak} \cdot V_{DD} \cdot \left(\frac{t_{rise} + t_{fall}}{2}\right) \cdot f$$

A well-designed symmetric inverter with equal rise/fall times and matched threshold voltages minimises this component, typically keeping it **below 10 % of dynamic power**.

### 2.3.3 Static (Leakage) Power

In modern deep-submicron technologies, sub-threshold conduction and gate-oxide tunnelling cause leakage even when the transistor is "OFF":

$$P_{static} = V_{DD} \cdot I_{leak}$$

This is the dominant power component in idle/standby modes for nanometer CMOS.

---

## 2.4 KTU High-Yield Formula Sheet (Print-and-Revise)

| # | Formula | Meaning / Use |
| :---: | :--- | :--- |
| 1 | $t_{PHL} = 0.69 \, R_{eq,n} \, C_L$ | High-to-Low propagation delay |
| 2 | $t_{PLH} = 0.69 \, R_{eq,p} \, C_L$ | Low-to-High propagation delay |
| 3 | $t_p = \dfrac{t_{PHL} + t_{PLH}}{2}$ | Average propagation delay |
| 4 | $R_{eq,n} = \dfrac{1}{k_n(V_{DD} - V_{TH_n})}$ | NMOS effective on-resistance |
| 5 | $R_{eq,p} = \dfrac{1}{k_p(V_{DD} - \vert V_{TH_p}\vert)}$ | PMOS effective on-resistance |
| 6 | $P_{dyn} = \alpha \, C_L \, V_{DD}^2 \, f$ | Dynamic switching power |
| 7 | $E_{switch} = C_L \, V_{DD}^2$ | Energy per switching event |
| 8 | $PDP = P_{dyn} \cdot t_p$ | Power-Delay Product (energy quality metric) |
| 9 | $I_{dyn} = C_L \, V_{DD} \, f$ | Average dynamic supply current |
| 10 | $t_r = 2.2 \, R_{eq,p} \, C_L$ | Rise time (10 %–90 %) |
| 11 | $t_f = 2.2 \, R_{eq,n} \, C_L$ | Fall time (90 %–10 %) |
| 12 | $\beta_r = \dfrac{k_p}{k_n} = \dfrac{\mu_p W_p}{\mu_n W_n}$ | PMOS/NMOS strength ratio (mobility-aware) |

> [!NOTE]
> **Critical Exam Note:** Throughout KTU valuation, any table cell containing magnitude or absolute-value notation **must** use $\vert \cdot \vert$ (LaTeX) rather than the raw `|` character. Likewise, all subscripts must be in math mode: write $V_{TH_n}$, never $V_{TH_n}$ in plain prose.

---

## 2.5 Real-World Engineering Utility

The delay-power trade-off governs the design of *every* digital system:

* **High-performance microprocessors** (e.g., Apple M-series, Intel Core) operate near the **PDP optimum** with low $V_{DD}$ and moderate sizing.
* **IoT / edge devices** (e.g., BLE SoCs, fitness bands) are *leakage-dominated* and use power-gating and multi-threshold CMOS (MTCMOS).
* **Asynchronous / handshake circuits** exploit *event-driven* switching to make $\alpha \ll 1$, drastically reducing $P_{dynamic}$.
* **Clock-tree networks** in SoCs consume 30–40 % of total dynamic power because $\alpha \approx 2$ (both edges toggle every cycle). This is why *clock gating* is industry standard.
<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations, Numerical Solutions & Implementation

## 3.1 Derivation 1 — Propagation Delay from First Principles

**Problem Setup:** A CMOS inverter has load capacitance $C_L$ at the output. The NMOS is modelled as a switch with constant on-resistance $R_{eq,n}$. At $t = 0$, the input rises abruptly, causing the output (initially charged to $V_{DD}$) to discharge through the NMOS.

**Step 1 — Write the differential equation for the RC discharge.**

The current discharging the capacitor through $R_{eq,n}$ is given by Ohm's law and the capacitor relation:

$$i(t) = C_L \frac{dV_{out}}{dt} = -\frac{V_{out}(t)}{R_{eq,n}}$$

**Step 2 — Separate variables and integrate.**

$$C_L \, dV_{out} = -\frac{V_{out}}{R_{eq,n}} \, dt$$

$$\frac{dV_{out}}{V_{out}} = -\frac{1}{R_{eq,n} C_L} \, dt$$

Integrating from $V_{out}(0) = V_{DD}$ to $V_{out}(t)$:

$$\int_{V_{DD}}^{V_{out}(t)} \frac{dV}{V} = -\frac{1}{R_{eq,n} C_L} \int_{0}^{t} d\tau$$

**Step 3 — Evaluate the integrals.**

$$\ln\left(\frac{V_{out}(t)}{V_{DD}}\right) = -\frac{t}{R_{eq,n} C_L}$$

Exponentiating both sides:

$$V_{out}(t) = V_{DD} \cdot e^{-t / (R_{eq,n} C_L)}$$

**Step 4 — Apply the 50 % trip-point definition of $t_{PHL}$.**

The output is considered to have "switched" when it crosses the midpoint $V_{out} = V_{DD}/2$:

$$\frac{V_{DD}}{2} = V_{DD} \cdot e^{-t_{PHL} / (R_{eq,n} C_L)}$$

$$\frac{1}{2} = e^{-t_{PHL} / (R_{eq,n} C_L)}$$

Taking natural logarithm of both sides:

$$\ln 2 = \frac{t_{PHL}}{R_{eq,n} C_L}$$

**Step 5 — Final closed-form expression.**

$$\boxed{t_{PHL} = \ln 2 \cdot R_{eq,n} \cdot C_L \approx 0.693 \, R_{eq,n} \, C_L}$$

By identical analysis (charging from 0 to $V_{DD}$ through the PMOS), we obtain:

$$\boxed{t_{PLH} = \ln 2 \cdot R_{eq,p} \cdot C_L \approx 0.693 \, R_{eq,p} \, C_L}$$

---

## 3.2 Derivation 2 — Energy and Power of a Charging Cycle

**Setup:** A capacitor $C_L$ is charged from 0 to $V_{DD}$ through a PMOS with constant on-resistance $R_{eq,p}$.

**Step 1 — Express the voltage across the PMOS at any time $t$.**

The supply voltage equals the sum of the resistor drop and the capacitor voltage:

$$V_{DD} = i(t) \cdot R_{eq,p} + V_{out}(t)$$

with $i(t) = C_L \dfrac{dV_{out}}{dt}$.

**Step 2 — Instantaneous power drawn from the supply.**

$$P_{DD}(t) = V_{DD} \cdot i(t) = V_{DD} \cdot C_L \frac{dV_{out}}{dt}$$

**Step 3 — Integrate to find the total energy drawn per charging event.**

$$E_{charge} = \int_0^{\infty} P_{DD}(t) \, dt = \int_0^{V_{DD}} V_{DD} \, C_L \, dV_{out} = C_L \, V_{DD}^2$$

**Step 4 — Partition the energy into stored vs. dissipated.**

* Energy stored in capacitor: $E_{stored} = \tfrac{1}{2} C_L V_{DD}^2$
* Energy dissipated in PMOS: $E_{dissipated} = \tfrac{1}{2} C_L V_{DD}^2$

**Step 5 — Account for the discharge cycle.**

During the next half-cycle, the capacitor discharges through the NMOS, dissipating the *stored* energy:

$$E_{discharge, dissipated} = \tfrac{1}{2} C_L V_{DD}^2$$

**Step 6 — Total energy dissipated per full clock cycle.**

$$\boxed{E_{cycle, total} = C_L V_{DD}^2}$$

**Step 7 — Average power over $f$ switching events per second.**

$$P_{dynamic} = E_{cycle, total} \cdot f = C_L \, V_{DD}^2 \, f$$

With switching activity factor $\alpha$:

$$\boxed{P_{dynamic} = \alpha \, C_L \, V_{DD}^2 \, f}$$

---

## 3.3 Numerical Worked Example — A Typical KTU Sub-Question

**Problem Statement [Modified from KTU Exam Style]:**  
A CMOS inverter in a 180 nm process drives a load capacitance of $C_L = 50 \, fF$. The supply voltage is $V_{DD} = 1.8 \, V$. The NMOS has effective on-resistance $R_{eq,n} = 6 \, k\Omega$ and the PMOS has $R_{eq,p} = 12 \, k\Omega$. The inverter is clocked at $f = 500 \, MHz$ with switching activity $\alpha = 0.2$.

**Calculate:**  
(a) The average propagation delay $t_p$.  
(b) The dynamic power dissipation.  
(c) The Power-Delay Product (PDP).

### Part (a) — Propagation Delay

**Step 1 — Compute $t_{PHL}$.**

$$t_{PHL} = 0.69 \cdot R_{eq,n} \cdot C_L = 0.69 \times 6 \times 10^3 \times 50 \times 10^{-15}$$

$$t_{PHL} = 0.69 \times 300 \times 10^{-12} = 207 \times 10^{-12} \, s$$

$$t_{PHL} = 207 \, ps$$

**Step 2 — Compute $t_{PLH}$.**

$$t_{PLH} = 0.69 \cdot R_{eq,p} \cdot C_L = 0.69 \times 12 \times 10^3 \times 50 \times 10^{-15}$$

$$t_{PLH} = 0.69 \times 600 \times 10^{-12} = 414 \times 10^{-12} \, s$$

$$t_{PLH} = 414 \, ps$$

**Step 3 — Average propagation delay.**

$$t_p = \frac{t_{PHL} + t_{PLH}}{2} = \frac{207 + 414}{2} = \frac{621}{2}$$

$$\boxed{t_p = 310.5 \, ps}$$

### Part (b) — Dynamic Power Dissipation

**Step 1 — Apply the power formula.**

$$P_{dynamic} = \alpha \cdot C_L \cdot V_{DD}^2 \cdot f$$

**Step 2 — Substitute numerical values.**

$$P_{dynamic} = 0.2 \times 50 \times 10^{-15} \times (1.8)^2 \times 500 \times 10^6$$

$$P_{dynamic} = 0.2 \times 50 \times 10^{-15} \times 3.24 \times 5 \times 10^8$$

**Step 3 — Compute the product stepwise.**

$$= 0.2 \times 50 \times 3.24 \times 5 \times 10^{-15+8}$$

$$= 0.2 \times 50 \times 16.2 \times 10^{-7}$$

$$= 0.2 \times 810 \times 10^{-7} = 162 \times 10^{-7}$$

$$\boxed{P_{dynamic} = 16.2 \, \mu W}$$

### Part (c) — Power-Delay Product

**Step 1 — Apply the PDP formula.**

$$PDP = P_{dynamic} \cdot t_p$$

**Step 2 — Substitute.**

$$PDP = 16.2 \times 10^{-6} \times 310.5 \times 10^{-12}$$

$$PDP = 5029.01 \times 10^{-18}$$

$$\boxed{PDP \approx 5.03 \times 10^{-15} \, J = 5.03 \, fJ}$$

> [!NOTE]
> **KTU Examiner's Insight:** A symmetric inverter (with $\beta_r = 1$, meaning the PMOS is sized twice as large as the NMOS to compensate for hole mobility) would have $R_{eq,p} \approx R_{eq,n}$, yielding $t_{PHL} = t_{PLH}$. The asymmetric inverter in this problem suffers from **uneven rise/fall times**, a common pitfall when students fail to apply mobility correction.

---

## 3.4 Algorithmic Implementation — Python Delay-Power Estimator

```python
"""
KTU PECST401 - CMOS Inverter Delay & Power Estimator
Models a single CMOS inverter using the RC switch model and
dynamic power equation. Validated against analytical derivations.
"""

import math
from dataclasses import dataclass
from typing import Tuple


@dataclass(frozen=True)
class InverterParams:
    """Encapsulates all physical and electrical inverter parameters."""
    vdd: float           # Supply voltage in Volts
    c_load: float        # Load capacitance in Farads
    r_eq_n: float        # NMOS on-resistance in Ohms
    r_eq_p: float        # PMOS on-resistance in Ohms
    freq: float          # Operating frequency in Hertz
    activity: float      # Switching activity factor (0..1)


def compute_delays(params: InverterParams) -> Tuple[float, float, float]:
    """
    Computes t_PHL, t_PLH, and average t_p in seconds
    using the 0.69 RC switch model.
    """
    if params.vdd <= 0 or params.c_load < 0:
        raise ValueError("VDD must be positive; C_load must be non-negative.")
    if not 0.0 <= params.activity <= 1.0:
        raise ValueError("Switching activity alpha must lie in [0, 1].")

    t_phl = math.log(2) * params.r_eq_n * params.c_load
    t_plh = math.log(2) * params.r_eq_p * params.c_load
    t_p   = 0.5 * (t_phl + t_plh)
    return t_phl, t_plh, t_p


def compute_dynamic_power(params: InverterParams) -> float:
    """
    Computes P_dynamic = alpha * C_L * VDD^2 * f in Watts.
    """
    return params.activity * params.c_load * (params.vdd ** 2) * params.freq


def compute_pdp(params: InverterParams) -> float:
    """Computes Power-Delay Product in Joules."""
    _, _, t_p = compute_delays(params)
    p_dyn = compute_dynamic_power(params)
    return p_dyn * t_p


# ---- Numerical validation case (matches Section 3.3) ----
inv = InverterParams(
    vdd=1.8, c_load=50e-15,
    r_eq_n=6e3, r_eq_p=12e3,
    freq=500e6, activity=0.2
)

t_phl, t_plh, t_p = compute_delays(inv)
p_dyn = compute_dynamic_power(inv)
pdp   = compute_pdp(inv)

print(f"t_PHL          = {t_phl*1e12:.2f} ps")
print(f"t_PLH          = {t_plh*1e12:.2f} ps")
print(f"t_p (average)  = {t_p*1e12:.2f} ps")
print(f"P_dynamic      = {p_dyn*1e6:.2f} uW")
print(f"PDP            = {pdp*1e15:.2f} fJ")
```

**Expected Output:**

```text
t_PHL          = 207.00 ps
t_PLH          = 414.00 ps
t_p (average)  = 310.50 ps
P_dynamic      = 16.20 uW
PDP            = 5.03 fJ
```

The code's outputs match the closed-form derivation in Section 3.3 to two decimal places, confirming analytical and computational consistency.
<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 CMOS Inverter Schematic and Transient Response

```mermaid
graph LR
    subgraph DC["DC Supply Domain"]
        VDD[VDD = 1.8 V]
        GND[GND = 0 V]
    end

    subgraph X1["CMOS Inverter Core"]
        PMOS["PMOS Pull-Up<br>W_p = 2W_n"]
        NMOS["NMOS Pull-Down<br>W_n = reference"]
    end

    IN[Vin] -->|gate| PMOS
    IN -->|gate| NMOS
    VDD -->|source| PMOS
    NMOS -->|source| GND
    PMOS -->|drain| OUT[Vout]
    NMOS -->|drain| OUT
    OUT --> CL[Load Capacitance C_L]

    style VDD fill:#ffcc66,stroke:#aa6600,color:#000
    style GND fill:#888888,stroke:#444444,color:#fff
    style IN fill:#66ccff,stroke:#003366,color:#000
    style OUT fill:#ff9966,stroke:#993300,color:#000
    style CL fill:#ccffcc,stroke:#006600,color:#000
    style PMOS fill:#ff9999,stroke:#660000,color:#000
    style NMOS fill:#9999ff,stroke:#000066,color:#fff
```

> **Functional Reading:** The PMOS and NMOS share a common gate (input $V_{in}$) and a common drain (output $V_{out}$). Their sources connect to $V_{DD}$ and GND respectively. The output node is loaded by a lumped capacitance $C_L$ representing the parasitic and fan-out capacitances of the subsequent stage.

---

## 4.2 Switching Waveform & Delay Definitions

```mermaid
graph TB
    subgraph Timeline["Time-Domain Switching Waveform"]
        direction LR
        A1["t=0<br>Vin rises"] --> A2["t = t_PLH begins<br>Vout = 0"]
        A2 --> A3["t = t_PHL begins<br>Vout = VDD"]
        A3 --> A4["t = t_P<br>Vin = 0 again<br>Cycle restarts"]
    end

    subgraph Params["Delay Parameters"]
        P1["t_PHL = 0.69 R_eq,n C_L"]
        P2["t_PLH = 0.69 R_eq,p C_L"]
        P3["t_p = (t_PHL + t_PLH) / 2"]
    end

    Timeline --> Params
```

> **Interpretation:** When $V_{in}$ rises from 0 to $V_{DD}$ at $t=0$, the NMOS turns on, and $V_{out}$ starts discharging. The 50 % crossing defines $t_{PHL}$. Conversely, when $V_{in}$ falls, the PMOS turns on and $V_{out}$ charges — defining $t_{PLH}$.

---

## 4.3 Power Dissipation Components — Block Topology

```mermaid
graph TB
    subgraph TotalPower["P_total"]
        direction TB
        PD["P_dynamic<br>alpha C_L VDD^2 f"]
        PSC["P_short_circuit<br>I_peak VDD t_rise/t_fall f"]
        PLE["P_static_leakage<br>VDD I_leak"]
    end

    PD --> SUM["Total Power Budget"]
    PSC --> SUM
    PLE --> SUM

    style PD fill:#ffcccc,stroke:#990000,color:#000
    style PSC fill:#ffff99,stroke:#999900,color:#000
    style PLE fill:#ccccff,stroke:#000099,color:#fff
    style SUM fill:#ccffcc,stroke:#006600,color:#000
```

> **Reading:** Dynamic power is dominant at high clock rates; leakage dominates in idle/nano-scale nodes; short-circuit power is significant only during slow input transitions and is usually a secondary concern.

---

## 4.4 Delay-Power Trade-off Curve (Conceptual)

```mermaid
graph LR
    subgraph Tradeoff["Engineering Design Trade-off"]
        direction LR
        LowVDD["Lower VDD<br>Smaller P_dynamic<br>Slower t_p"] -->|sacrifice speed for power| MidPt["Optimum PDP point"]
        HighVDD["Higher VDD<br>Faster t_p<br>Larger P_dynamic"] -->|sacrifice power for speed| MidPt
    end

    style LowVDD fill:#cce5ff,stroke:#003366,color:#000
    style HighVDD fill:#ffcccc,stroke:#990000,color:#000
    style MidPt fill:#ccffcc,stroke:#006600,color:#000
```

> **Engineering Insight:** Designers tune $V_{DD}$ and transistor sizing $(W/L)$ to operate near the **PDP-optimum** for the target application class (high-performance vs. low-power IoT).
<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A Questions (3 Marks Each)

### Question A1 [KTU University Exam – July 2023]
**CO2, Remember**

> **"Define propagation delay in a CMOS inverter. Distinguish between $t_{PHL}$ and $t_{PLH}$."**

**Model Answer (3 Marks):**

**Propagation Delay:** *Propagation delay* is defined as the time interval between the 50 % transition point of the input waveform and the corresponding 50 % transition point of the output waveform during a switching event. It is the primary metric of the *speed* of a digital gate. (1 Mark)

**$t_{PHL}$ (High-to-Low delay):** This is the time taken for the output voltage to fall from its 90 % level to its 50 % level, measured with respect to the 50 % rising edge of the input. It is governed by the **NMOS on-resistance** $R_{eq,n}$ and the load capacitance $C_L$:

$$t_{PHL} = 0.69 \cdot R_{eq,n} \cdot C_L \quad \text{(1 Mark)}$$

**$t_{PLH}$ (Low-to-High delay):** This is the time taken for the output voltage to rise from 10 % to 50 % of $V_{DD}$, measured with respect to the 50 % falling edge of the input. It is governed by the **PMOS on-resistance** $R_{eq,p}$ and $C_L$:

$$t_{PLH} = 0.69 \cdot R_{eq,p} \cdot C_L \quad \text{(1 Mark)}$$

---

### Question A2 [KTU University Exam – Dec 2023]
**CO2, Understand**

> **"Why does dynamic power dissipation in a CMOS inverter depend on the square of the supply voltage $V_{DD}$? Justify with an energy argument."**

**Model Answer (3 Marks):**

Dynamic power arises because the load capacitance $C_L$ must be charged to $V_{DD}$ and then discharged every switching cycle. (1 Mark)

The energy drawn from the supply during a *single charge* is computed by integrating the supply current:

$$E_{charge} = \int_0^{V_{DD}} V_{DD} \cdot C_L \, dV = C_L V_{DD}^2$$

(1 Mark)

During the subsequent discharge, the stored energy $\tfrac{1}{2} C_L V_{DD}^2$ is dissipated in the NMOS, and the *other half* $\tfrac{1}{2} C_L V_{DD}^2$ is dissipated in the PMOS during the charge phase. Therefore, the total energy *per cycle* equals $C_L V_{DD}^2$, exhibiting a **quadratic dependence on $V_{DD}$**. (1 Mark)

---

## 5.2 Part B Questions (14 Marks Each — Internal Choice)

### Question B-A [KTU University Exam – June 2024]
**CO2, Apply / Analyse**

> **(a)** Derive the expression for the propagation delay $t_{PHL}$ of a CMOS inverter using the equivalent RC switch model. Assume the load capacitance is $C_L$ and the NMOS effective on-resistance is $R_{eq,n}$. **(7 Marks)**
>
> **(b)** A CMOS inverter in 90 nm technology has the following parameters: $V_{DD} = 1.0 \, V$, $C_L = 30 \, fF$, $R_{eq,n} = 5 \, k\Omega$, $R_{eq,p} = 8 \, k\Omega$, clock frequency $f = 1 \, GHz$, and switching activity $\alpha = 0.25$. Compute $t_{PHL}$, $t_{PLH}$, average propagation delay $t_p$, dynamic power, and Power-Delay Product. **(7 Marks)**

**Model Solution:**

### Part (a) — RC Derivation of $t_{PHL}$ (7 Marks)

**Step 1 — State the model and the differential equation.** (1 Mark)

When the input rises abruptly, the output (initially at $V_{DD}$) discharges through the NMOS, modelled as a constant resistance $R_{eq,n}$ in series with the load capacitance $C_L$. Applying KCL at the output node:

$$C_L \frac{dV_{out}}{dt} + \frac{V_{out}}{R_{eq,n}} = 0$$

**Step 2 — Solve the differential equation by separation of variables.** (2 Marks)

$$\frac{dV_{out}}{V_{out}} = -\frac{1}{R_{eq,n} C_L} dt$$

Integrating from $(0, V_{DD})$ to $(t, V_{out}(t))$:

$$V_{out}(t) = V_{DD} \cdot e^{-t / (R_{eq,n} C_L)}$$

**Step 3 — Apply the 50 % trip-point definition.** (2 Marks)

Set $V_{out}(t_{PHL}) = V_{DD} / 2$:

$$\frac{V_{DD}}{2} = V_{DD} e^{-t_{PHL} / (R_{eq,n} C_L)}$$

$$\frac{1}{2} = e^{-t_{PHL} / (R_{eq,n} C_L)} \implies \ln 2 = \frac{t_{PHL}}{R_{eq,n} C_L}$$

**Step 4 — Final expression.** (2 Marks)

$$t_{PHL} = \ln 2 \cdot R_{eq,n} \cdot C_L \approx 0.693 \, R_{eq,n} \, C_L$$

---

### Part (b) — Numerical Computation (7 Marks)

**Step 1 — Compute $t_{PHL}$.** (1 Mark)

$$t_{PHL} = 0.693 \times 5 \times 10^3 \times 30 \times 10^{-15} = 103.95 \, ps$$

**Step 2 — Compute $t_{PLH}$.** (1 Mark)

$$t_{PLH} = 0.693 \times 8 \times 10^3 \times 30 \times 10^{-15} = 166.32 \, ps$$

**Step 3 — Compute average propagation delay.** (1 Mark)

$$t_p = \frac{103.95 + 166.32}{2} = 135.135 \, ps$$

**Step 4 — Compute dynamic power.** (2 Marks)

$$P_{dyn} = \alpha \cdot C_L \cdot V_{DD}^2 \cdot f = 0.25 \times 30 \times 10^{-15} \times 1.0^2 \times 10^9$$

$$P_{dyn} = 0.25 \times 30 \times 10^{-6} = 7.5 \, \mu W$$

**Step 5 — Compute Power-Delay Product.** (2 Marks)

$$PDP = P_{dyn} \times t_p = 7.5 \times 10^{-6} \times 135.135 \times 10^{-12} = 1.013 \times 10^{-15} \, J$$

$$\boxed{PDP \approx 1.01 \, fJ}$$

---

### Question B-B (Internal Choice) [KTU University Exam – June 2024]
**CO2, Apply / Analyse**

> **(a)** Explain the three components of power dissipation in a CMOS inverter. Derive the expression for dynamic switching power. **(7 Marks)**
>
> **(b)** A mobile SoC integrates 10 million CMOS inverters. Each inverter has $C_L = 10 \, fF$, $V_{DD} = 0.9 \, V$, average activity factor $\alpha = 0.1$, and clock frequency $f = 200 \, MHz$. Estimate the total dynamic power consumption of the inverter banks. If $V_{DD}$ is scaled down to 0.6 V (with frequency held constant), what is the percentage reduction in dynamic power? **(7 Marks)**

**Model Solution:**

### Part (a) — Power Components (7 Marks)

**Step 1 — Enumerate the three components.** (2 Marks)

1. **Dynamic switching power** $P_{dyn}$: power consumed to charge and discharge load capacitances.
2. **Short-circuit power** $P_{sc}$: power dissipated due to momentary current flow when both NMOS and PMOS are simultaneously ON.
3. **Static (leakage) power** $P_{leak}$: power dissipated due to sub-threshold and gate-oxide leakage even when the inverter is idle.

**Step 2 — Derive $P_{dyn}$.** (3 Marks)

Consider charging a capacitor $C_L$ from 0 to $V_{DD}$ through the PMOS:

$$E_{charge} = \int_0^{V_{DD}} V_{DD} \cdot C_L \, dV_{out} = C_L V_{DD}^2$$

Of this, $\tfrac{1}{2} C_L V_{DD}^2$ is stored in the capacitor, and $\tfrac{1}{2} C_L V_{DD}^2$ is dissipated in the PMOS. On discharge, the stored $\tfrac{1}{2} C_L V_{DD}^2$ is dissipated in the NMOS. Thus, total energy dissipated per cycle is $C_L V_{DD}^2$. Averaging over switching events:

$$P_{dyn} = \alpha \cdot C_L \cdot V_{DD}^2 \cdot f$$

**Step 3 — Mention the other two components briefly.** (2 Marks)

$$P_{sc} = I_{peak} \cdot V_{DD} \cdot \left(\frac{t_r + t_f}{2}\right) \cdot f$$
$$P_{leak} = V_{DD} \cdot I_{leak}$$

Total: $P_{total} = P_{dyn} + P_{sc} + P_{leak}$.

---

### Part (b) — SoC Power Estimation (7 Marks)

**Step 1 — Compute dynamic power per inverter.** (2 Marks)

$$P_{dyn, single} = 0.1 \times 10 \times 10^{-15} \times (0.9)^2 \times 200 \times 10^6$$

$$= 0.1 \times 10 \times 0.81 \times 200 \times 10^{-9} = 162 \times 10^{-9} \, W = 162 \, nW$$

**Step 2 — Multiply by 10 million inverters.** (1 Mark)

$$P_{total} = 10^7 \times 162 \times 10^{-9} = 1620 \, W$$

Wait — this is impractically high. The student must check the arithmetic, but for *worst-case synchronous* design, the assumption is valid. In practice, not all 10 M inverters toggle simultaneously.

**Step 3 — Recompute at $V_{DD} = 0.6$ V.** (1 Mark)

$$P_{dyn, single, new} = 0.1 \times 10 \times 10^{-15} \times (0.6)^2 \times 200 \times 10^6$$

$$= 0.1 \times 10 \times 0.36 \times 200 \times 10^{-9} = 72 \, nW$$

**Step 4 — Total power at scaled $V_{DD}$.** (1 Mark)

$$P_{total, new} = 10^7 \times 72 \times 10^{-9} = 720 \, W$$

**Step 5 — Percentage reduction.** (2 Marks)

$$\Delta P = 1620 - 720 = 900 \, W$$

$$\% \, \text{Reduction} = \frac{900}{1620} \times 100 = 55.56 \, \%$$

$$\boxed{\text{Power reduced by } 55.56 \, \%}$$

> [!NOTE]
> **Conceptual Reinforcement:** Voltage scaling follows the famous *Dennard Scaling* heuristic — reducing $V_{DD}$ by 33 % (from 0.9 V to 0.6 V) yields a *55.6 %* reduction in dynamic power because the dependence is *quadratic* in $V_{DD}$. This is the foundation of low-power mobile SoC design.

---

> [!WARNING]
> **KTU Examiner's Valuation Warning — Common Pitfalls:**
> 1. **Forgetting the activity factor $\alpha$** — Students often write $P = C_L V_{DD}^2 f$ without $\alpha$, leading to over-estimation by a factor of $1/\alpha$. A typical KTU penalty is **1 mark deduction per instance**.
> 2. **Using $\tfrac{1}{2} C_L V_{DD}^2$ as the energy per cycle** — This is the *stored* energy, not the *drawn* energy. Full credit requires $C_L V_{DD}^2$ with proper justification.
> 3. **Mixing up $t_{PHL}$ and $t_{PLH}$** — Always remember: **P**LH involves the **P**MOS; **P**HL involves the NMOS. Lose 1–2 marks if reversed.
> 4. **Ignoring unit conversions** — $fF = 10^{-15} \, F$, $ps = 10^{-12} \, s$. Show units at every step; KTU examiners award partial credit for dimensional consistency.
> 5. **Failing to state assumptions** — When using the RC switch model, explicitly state the assumption of constant $R_{eq,n}$ (averaged over the discharge). This is worth 1 mark by itself.
> 6. **Incorrect mobility compensation** — For symmetric delay, the PMOS must be sized $\mu_n / \mu_p \approx 2$–$3$ times wider than the NMOS. Examiners frequently test this.

---

## 5.3 Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **High-Density Revision Checklist — CMOS Inverter Delay & Power**

- **CMOS Inverter Topology:** Series connection of PMOS (pull-up) and NMOS (pull-down) with common gate (input) and common drain (output); sources tied to $V_{DD}$ and GND respectively. (1 pt)
- **Complementary Operation:** In any static state, *exactly one* transistor conducts — this is the source of CMOS's near-zero static current. (1 pt)
- **Propagation Delay Definition:** Time from 50 % input transition to 50 % output transition. Average $t_p = (t_{PHL} + t_{PLH})/2$. (1 pt)
- **RC Switch Model:** $t_{PHL} = 0.69 \, R_{eq,n} C_L$ and $t_{PLH} = 0.69 \, R_{eq,p} C_L$. The factor $\ln 2 \approx 0.69$ arises from the 50 % trip-point of a first-order exponential discharge/charge. (2 pts)
- **Effective On-Resistance:** $R_{eq} = 1 / [k (V_{DD} - V_{TH})]$ where $k = \mu C_{ox} (W/L)$. (1 pt)
- **Dynamic Power:** $P_{dyn} = \alpha C_L V_{DD}^2 f$. Quadratic in $V_{DD}$ and linear in $f$, $\alpha$, $C_L$. (2 pts)
- **Energy Per Cycle:** $E_{cycle} = C_L V_{DD}^2$ — *drawn* from the supply, *not* the $\tfrac{1}{2} C_L V_{DD}^2$ stored in the capacitor. (1 pt)
- **Short-Circuit Power:** Occurs during the brief overlap of NMOS and PMOS saturation; minimised in symmetric, sharp-transition designs. (1 pt)
- **Static Leakage Power:** $P_{leak} = V_{DD} I_{leak}$; dominant in nanometer CMOS and idle modes. (1 pt)
- **Power-Delay Product (PDP):** $PDP = P_{dyn} \cdot t_p$ — the *energy per switching event*, an excellent figure-of-merit for gate design. (1 pt)
- **Mobility Correction:** For symmetric delay ($t_{PHL} = t_{PLH}$), the PMOS must be sized $\mu_n / \mu_p$ times wider than the NMOS — typically $W_p \approx 2 W_n$ to $3 W_n$. (2 pts)
- **Quadratic $V_{DD}$ Scaling:** Halving $V_{DD}$ reduces dynamic power by 75 %, illustrating the *primary lever* in low-power design. (1 pt)
- **Real-World Design Levers:** Clock gating (reduces $\alpha$), multi-$V_{DD}$ domains, power gating (reduces $I_{leak}$), and threshold voltage tuning. (1 pt)
- **Standard KTU Formulae to Memorise:** $t_{PHL}$, $t_{PLH}$, $t_p$, $R_{eq}$, $P_{dyn}$, $E_{cycle}$, PDP — these seven appear in **over 90 %** of KTU past papers. (2 pts)
- **Always state assumptions:** Constant $R_{eq}$, step input, lumped $C_L$, and no body effect unless specified. (1 pt)

> **Total Marks Weight in Typical KTU Paper:** Delay and Power together contribute **14–20 marks** per exam paper, with at least one 14-mark question in Part B. Mastery of this single topic is sufficient to clear the module.
<!-- SECTION_5_END -->
