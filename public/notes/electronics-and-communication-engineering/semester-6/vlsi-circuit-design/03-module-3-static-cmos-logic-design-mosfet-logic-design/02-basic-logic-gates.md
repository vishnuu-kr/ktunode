---
title: "basic logic gates"
subject: "VLSI CIRCUIT DESIGN"
module: "Module 3: Static CMOS Logic Design : MOSFET Logic Design "
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fefca"
status: "completed"
scrapedAt: "2026-05-23T18:03:41.283Z"
---
# VLSI Circuit Design: Module 3 - Static CMOS Logic Design: MOSFET Logic Design

## Topic: Basic Logic Gates

### Learning Outcomes Covered:
*   Understanding of basic logic gate implementations using MOSFETs in static CMOS logic.
*   Analysis of the operation and characteristics of these gates.
*   Ability to derive the logic structure and transistor sizing for fundamental gates.

---

### Introduction to Static CMOS Logic

Static CMOS logic is the cornerstone of modern digital integrated circuit design due to its **low static power consumption**, **high noise margins**, and **robustness**. It utilizes a complementary structure of **PMOS (p-channel Metal-Oxide-Semiconductor) transistors** forming the pull-up network (PUN) and **NMOS (n-channel Metal-Oxide-Semiconductor) transistors** forming the pull-down network (PDN).

**Key Concepts:**

*   **Complementary Structure:** For every PMOS transistor in the PUN, there is a corresponding NMOS transistor in the PDN that controls the same output node and is driven by the same input signal.
*   **Pull-Up Network (PUN):** Connects the output to the VDD (power supply) when the output should be logic '1'. Composed of PMOS transistors.
*   **Pull-Down Network (PDN):** Connects the output to VSS (ground) when the output should be logic '0'. Composed of NMOS transistors.
*   **Zero Static Power Dissipation:** In steady-state (either logic '0' or logic '1'), one of the networks (PUN or PDN) is always non-conductive, preventing a direct path from VDD to VSS, thus consuming negligible static power.
*   **Noise Margins:** Static CMOS exhibits high noise margins (NM<sub>H</sub> and NM<sub>L</sub>), providing good immunity to noise.
*   **Ratioed Logic:** Unlike older logic families like NMOS logic or pseudo-NMOS, static CMOS is **not ratioed**. This means the performance is not critically dependent on the W/L ratios of transistors in a way that would lead to contention.

**Textbook References:**

*   Kang, Leblebici, Kim: Chapter 2 (Introduction to CMOS VLSI Design), Chapter 3 (Basic CMOS Technology) - provides the foundational understanding of MOSFET operation and CMOS fabrication.
*   Weste, Eshraghian: Chapter 4 (CMOS Logic Gate Design) - details the static CMOS logic style and gate implementations.

---

### 1. CMOS Inverter (NOT Gate)

The inverter is the most fundamental logic gate and serves as the building block for more complex circuits.

**Functionality:** $Y = \overline{A}$

**Structure:**

*   **PUN:** A single PMOS transistor connecting the output $Y$ to VDD, with its gate connected to input $A$.
*   **PDN:** A single NMOS transistor connecting the output $Y$ to VSS, with its gate connected to input $A$.

**Circuit Diagram:**

```
      VDD
       |
      (PMOS)
       |
Y -----+-------
       |
      (NMOS)
       |
      VSS
       |
       A
```

**Operation:**

1.  **When $A = 0$ (Logic Low):**
    *   The PMOS transistor is **ON** (gate-source voltage $V_{GS} = 0 - 0 = 0$ for NMOS, $V_{GS} = V_{DD} - 0 = V_{DD}$ for PMOS - PMOS turns ON when $V_{GS} \le V_{TP}$, typically $V_{TP}$ is negative).
    *   The NMOS transistor is **OFF** (gate-source voltage $V_{GS} = 0 - 0 = 0$).
    *   The output $Y$ is pulled up to VDD (Logic High).

2.  **When $A = 1$ (Logic High):**
    *   The PMOS transistor is **OFF** (gate-source voltage $V_{GS} = V_{DD} - V_{DD} = 0$).
    *   The NMOS transistor is **ON** (gate-source voltage $V_{GS} = V_{DD} - 0 = V_{DD}$, which is greater than $V_{TH}$, typically positive).
    *   The output $Y$ is pulled down to VSS (Logic Low).

**Transfer Characteristics ($V_{out}$ vs. $V_{in}$):**

The voltage transfer characteristic (VTC) of a CMOS inverter is a steep transition from $V_{DD}$ to VSS. The switching threshold $V_M$ is ideally at $V_{DD}/2$. This occurs when the currents through the PMOS and NMOS transistors are equal.

*   For a symmetric inverter (where $|V_{TP}| \approx V_{TH}$ and transistor sizes are chosen appropriately), $V_M \approx V_{DD}/2$.
*   This sharp transition provides excellent noise margins.

**Transistor Sizing (W/L ratios):**

To achieve a symmetric switching threshold ($V_M \approx V_{DD}/2$) and balanced rise/fall times, the effective conductances of the PMOS and NMOS transistors should be matched.

*   The drain current for NMOS in saturation: $I_{DS,n} = \frac{1}{2} \mu_n C_{ox} (\frac{W}{L})_n (V_{GS} - V_{TH})^2$
*   The drain current for PMOS in saturation: $I_{DS,p} = \frac{1}{2} \mu_p C_{ox} (\frac{W}{L})_p (V_{SD} - |V_{TP}|)^2$

For equal currents at $V_{in} = V_M = V_{DD}/2$, and assuming $V_{GS,n} = V_{DD}/2 - V_{TH}$ and $|V_{GS,p}| = V_{DD} - V_{DD}/2 - |V_{TP}| = V_{DD}/2 - |V_{TP}|$. If $|V_{TP}| \approx V_{TH}$, then $V_{GS,n} \approx |V_{GS,p}|$.

For current matching:
$\mu_n (\frac{W}{L})_n V_{TH}^2 = \mu_p (\frac{W}{L})_p |V_{TP}|^2$

Assuming $\mu_n \approx 2 \mu_p$ and $|V_{TP}| \approx V_{TH}$:
$2 \mu_p (\frac{W}{L})_n = \mu_p (\frac{W}{L})_p$
$\implies (\frac{W}{L})_n = \frac{1}{2} (\frac{W}{L})_p$

This means the PMOS transistor needs to be twice as wide as the NMOS transistor (assuming equal lengths) to compensate for the lower mobility of holes in PMOS. This is often referred to as the **"beta ratio"** (ratio of $\mu C_{ox} (W/L)$).

**Important Points:**

*   The CMOS inverter is a universal gate; any logic function can be implemented using only inverters.
*   **Rise time** is typically slower than **fall time** due to the lower mobility of holes in PMOS. Sizing the PMOS wider helps to balance this.
*   The delay of an inverter is dependent on the load capacitance and the transistor sizes.

---

### 2. CMOS NAND Gate

**Functionality:** $Y = \overline{A \cdot B}$

**Structure:**

*   **PDN:** Two NMOS transistors in **series**. Both must be ON for the output to be pulled low. If $A=1$ AND $B=1$, then both NMOS are ON.
*   **PUN:** Two PMOS transistors in **parallel**. Either one being ON is sufficient to pull the output high. If $A=0$ OR $B=0$, then at least one PMOS is ON.

**Circuit Diagram:**

```
      VDD
       |
      (PMOS) -- A
      /
     +
    / \
  (PMOS) -- B
     |
Y ---+-------
     |
    (NMOS) -- A
     |
     +
    / \
  (NMOS) -- B
     |
    VSS
```

**Operation:**

| A | B | Y | PUN State | PDN State |
|---|---|---|-----------|-----------|
| 0 | 0 | 1 | ON (both parallel) | OFF (series broken) |
| 0 | 1 | 1 | ON (PMOS A ON) | OFF (series broken) |
| 1 | 0 | 1 | ON (PMOS B ON) | OFF (series broken) |
| 1 | 1 | 0 | OFF (both parallel OFF) | ON (series ON) |

**Transistor Sizing:**

*   For the PDN (series NMOS): To have a resistance equivalent to a single NMOS of size $W/L$, each series NMOS transistor must have twice the width, i.e., $(W/L)_{n1} = (W/L)_{n2} = 2 \times (W/L)_{min}$.
*   For the PUN (parallel PMOS): To have a resistance equivalent to a single PMOS of size $W/L$, each parallel PMOS transistor can have the minimum width, i.e., $(W/L)_{p1} = (W/L)_{p2} = (W/L)_{min}$.

The goal is to ensure that when $A=1$ and $B=1$, the pull-down resistance is sufficiently low. The resistance of two series NMOS transistors with $(W/L)_n$ each is approximately twice the resistance of a single NMOS with $(W/L)_n$. To match the pull-down resistance of a single minimum-sized NMOS, the series transistors need to be wider.

**Important Points:**

*   The PUN consists of PMOS transistors in parallel.
*   The PDN consists of NMOS transistors in series.
*   The number of transistors in series in the PDN increases the pull-down resistance.
*   The number of transistors in parallel in the PUN decreases the pull-down resistance.

---

### 3. CMOS NOR Gate

**Functionality:** $Y = \overline{A + B}$

**Structure:**

*   **PDN:** Two NMOS transistors in **parallel**. Either one being ON is sufficient to pull the output low. If $A=1$ OR $B=1$, then at least one NMOS is ON.
*   **PUN:** Two PMOS transistors in **series**. Both must be ON for the output to be pulled high. If $A=0$ AND $B=0$, then both PMOS are ON.

**Circuit Diagram:**

```
      VDD
       |
      (PMOS) -- A
       |
      (PMOS) -- B
       |
Y -----+-------
       |
      (NMOS) -- A
      /
     +
    / \
  (NMOS) -- B
     |
    VSS
```

**Operation:**

| A | B | Y | PUN State | PDN State |
|---|---|---|-----------|-----------|
| 0 | 0 | 1 | ON (series ON) | OFF (parallel broken) |
| 0 | 1 | 0 | OFF (series broken) | ON (parallel ON) |
| 1 | 0 | 0 | OFF (series broken) | ON (parallel ON) |
| 1 | 1 | 0 | OFF (series broken) | ON (parallel ON) |

**Transistor Sizing:**

*   For the PDN (parallel NMOS): To have a resistance equivalent to a single NMOS of size $W/L$, each parallel NMOS transistor can have the minimum width, i.e., $(W/L)_{n1} = (W/L)_{n2} = (W/L)_{min}$.
*   For the PUN (series PMOS): To have a resistance equivalent to a single PMOS of size $W/L$, each series PMOS transistor must have twice the width, i.e., $(W/L)_{p1} = (W/L)_{p2} = 2 \times (W/L)_{min}$.

**Important Points:**

*   The PUN consists of PMOS transistors in series.
*   The PDN consists of NMOS transistors in parallel.
*   The number of transistors in series in the PUN increases the pull-up resistance.
*   The number of transistors in parallel in the PDN decreases the pull-down resistance.

---

### Generalizing to Multi-Input Gates (NAND, NOR)

For a K-input NAND gate:
*   PDN: K NMOS transistors in series. Each $(W/L)_n = K \times (W/L)_{min}$.
*   PUN: K PMOS transistors in parallel. Each $(W/L)_p = (W/L)_{min}$.

For a K-input NOR gate:
*   PDN: K NMOS transistors in parallel. Each $(W/L)_n = (W/L)_{min}$.
*   PUN: K PMOS transistors in series. Each $(W/L)_p = K \times (W/L)_{min}$.

**Textbook References:**

*   Kang, Leblebici, Kim: Chapter 4 (Basic CMOS Circuits) - dedicated section on CMOS logic gates, including NAND and NOR implementations and their characteristics.
*   Weste, Eshraghian: Chapter 4 (CMOS Logic Gate Design) - detailed analysis of NAND and NOR gate structures, transistor sizing for performance, and VTCs.
*   Rabaey: Chapter 3 (CMOS Logic) - provides a comprehensive overview of static CMOS logic, including gate implementations and performance considerations.

---

### CMOS Combinational Logic Design Principles

**Course Outcome Alignment:** CO3: Design, analyse and create the layout of static CMOS logic circuits adhering to design rules and specifications.

**Key Principles:**

1.  **Pull-Up Network (PUN) and Pull-Down Network (PDN) Complementarity:** For any input combination that turns the PDN ON (pulling the output LOW), the PUN must be OFF (isolating the output from VDD). Conversely, for any input combination that turns the PUN ON (pulling the output HIGH), the PDN must be OFF (isolating the output from VSS).
2.  **Series/Parallel Arrangement:**
    *   For NAND gates, NMOS are in series, PMOS are in parallel.
    *   For NOR gates, NMOS are in parallel, PMOS are in series.
3.  **Transistor Sizing for Performance:**
    *   The resistance of a chain of $k$ series transistors is $k$ times the resistance of a single transistor.
    *   The resistance of $k$ parallel transistors is $1/k$ times the resistance of a single transistor.
    *   To achieve balanced rise and fall times, the overall pull-up resistance (PUN) should ideally match the pull-down resistance (PDN).
    *   This often requires PMOS transistors to be wider than NMOS transistors due to lower hole mobility ($\mu_p < \mu_n$). The typical ratio $(\frac{W}{L})_p / (\frac{W}{L})_n$ is around 2:1 for NMOS and PMOS of same length, but this needs to be adjusted based on the transistor count in series/parallel.

**Example: Implementing a 2-input AND gate:**

An AND gate is implemented by inverting the output of a 2-input NAND gate.
$Y = A \cdot B = \overline{\overline{A \cdot B}}$

**Structure:**

*   **NAND part:** Two series NMOS, two parallel PMOS.
*   **Inverter part:** One NMOS, one PMOS.

**Circuit Diagram:**

```
      VDD
       |
      (PMOS) -- A
      /
     +
    / \
  (PMOS) -- B
     |
Y ---+-------+-------
     |       |
    (NMOS) -- A     (PMOS_inv) -- INV_IN
     |       |
     +-------+
    / \     |
  (NMOS) -- B  (NMOS_inv) -- INV_IN
     |       |
    VSS     VSS

(where INV_IN is the output of the NAND part)
```

**Transistor Sizing for AND gate (assuming minimum size NMOS as base):**

*   NAND part PUN (parallel PMOS): $(W/L)_{p1} = (W/L)_{p2} = (W/L)_{min\_p}$
*   NAND part PDN (series NMOS): $(W/L)_{n1} = (W/L)_{n2} = 2 \times (W/L)_{min\_n}$
*   Inverter PUN (single PMOS): $(W/L)_{p\_inv} = (\frac{W}{L})_{min\_p} \times \frac{R_{PDN}}{R_{PUN}}$
*   Inverter PDN (single NMOS): $(W/L)_{n\_inv} = (\frac{W}{L})_{min\_n}$

To balance the inverter, its PMOS width should be approximately twice its NMOS width. The "load" on the inverter is the output capacitance of the NAND gate, which is driven by the transistors in the NAND gate. The resistance of the NAND gate's PDN (two series NMOS) needs to be matched by the PUN.

**General Approach for Sizing:**
1.  Determine the pull-down resistance $R_{PDN}$ for the worst-case input combination (e.g., all series transistors ON).
2.  Determine the pull-up resistance $R_{PUN}$ for the worst-case input combination (e.g., all parallel transistors OFF).
3.  For the final inverter stage, its PDN transistor should have the minimum size $(W/L)_{min\_n}$.
4.  Its PUN transistor should be sized such that $R_{PUN\_inv} = R_{PDN\_inv} \times (\frac{\mu_n}{\mu_p})$. Typically, this means $(W/L)_{p\_inv} = (\frac{W}{L})_{n\_inv} \times \frac{\mu_n}{\mu_p} \approx 2 \times (W/L)_{n\_inv}$.
5.  The "effective $W/L$" of the NAND gate's PDN (two series NMOS) is $(W/L)_{eff, PDN} = \frac{(W/L)_{n}}{2}$.
6.  The "effective $W/L$" of the NAND gate's PUN (two parallel PMOS) is $(W/L)_{eff, PUN} = 2 \times (W/L)_{p}$.
7.  To balance the NAND gate itself, the effective ON-resistance of PUN should match PDN. This means $R_{PDN} \approx R_{PUN}$.

Consider a basic NAND gate with minimum $(W/L)$ for NMOS and $2(W/L)_{min}$ for PMOS.
*   PDN (series NMOS): Each is $2(W/L)_{min}$. Resistance is $R_n \times 2$.
*   PUN (parallel PMOS): Each is $(W/L)_{min}$. Resistance is $R_p / 2$.
For balance, $2 R_n \approx R_p/2 \implies R_p \approx 4 R_n$.
Since $R \propto \frac{L}{W \mu}$, $R_p \propto \frac{L}{(W/L)_p \mu_p}$ and $R_n \propto \frac{L}{(W/L)_n \mu_n}$.
$R_p \approx R_n \times \frac{(W/L)_n \mu_n}{(W/L)_p \mu_p}$.
So, $4 \approx \frac{(W/L)_n \mu_n}{(W/L)_p \mu_p}$.
If $\mu_n/\mu_p \approx 2$, then $4 \approx \frac{(W/L)_n}{(W/L)_p} \times 2 \implies \frac{(W/L)_p}{(W/L)_n} \approx 1$. This means the PMOS are not necessarily twice the NMOS for balanced delay in a NAND gate, but rather their ratio needs to be adjusted based on the series/parallel combination and mobility. The correct sizing aims to make the pull-up and pull-down resistances roughly equal.

A more common sizing strategy starts with the basic inverter. Then, for gates, extend this:
*   NAND2: $(W/L)_n = 2 \times (W/L)_{min}$, $(W/L)_p = 2 \times (W/L)_{min}$. (This is an oversimplification; actual sizing might differ for optimal performance.)
*   NOR2: $(W/L)_n = (W/L)_{min}$, $(W/L)_p = 2 \times (W/L)_{min}$.

The goal is to make the resistance of the PUN equal to the resistance of the PDN for the worst-case switching scenario.

**Textbook References:**

*   Weste, Eshraghian: Chapter 4.3 (Layouts for CMOS Logic Gates), Chapter 4.4 (Delay Calculation) - details practical sizing for performance and how it affects delay.
*   Rabaey: Chapter 3.4 (Design Margins), Chapter 3.5 (Performance Considerations) - discusses noise margins, delay, and power consumption in CMOS gates.

---

### Practice Questions

**Question 1:**
Draw the circuit diagram for a 2-input CMOS NAND gate. Explain why the PMOS transistors are in parallel and the NMOS transistors are in series.

**Answer:**
*   **Circuit Diagram:** (Refer to the circuit diagram provided in Section 2 of these notes).
*   **Explanation:**
    *   **PMOS in Parallel:** For the output to be pulled high (logic '1'), at least one of the PMOS transistors must be ON. If $A=0$ or $B=0$ (or both), the corresponding PMOS is ON, establishing a path from VDD to the output. This requires a parallel connection.
    *   **NMOS in Series:** For the output to be pulled low (logic '0'), both NMOS transistors must be ON. If $A=1$ AND $B=1$, both NMOS are ON, establishing a path from the output to VSS. This requires a series connection.

**Question 2:**
What is the logic function implemented by a CMOS circuit with PUN consisting of two NMOS transistors in series, and PDN consisting of two PMOS transistors in parallel?

**Answer:**
The PUN is NMOS in series, which is incorrect nomenclature. The question seems to have swapped PUN and PDN descriptions. Let's rephrase:

**Corrected Question 2:**
What is the logic function implemented by a CMOS circuit with PUN consisting of two PMOS transistors in series, and PDN consisting of two NMOS transistors in parallel?

**Answer:**
This configuration implements a **NOR gate**.
*   **PUN (series PMOS):** Both PMOS must be ON (inputs $A=0$ AND $B=0$) to pull the output HIGH.
*   **PDN (parallel NMOS):** Either NMOS can be ON (inputs $A=1$ OR $B=1$) to pull the output LOW.
Therefore, the function is $Y = \overline{A + B}$.

**Question 3:**
Consider a CMOS inverter designed for symmetric switching characteristics. If the NMOS transistor has a $(W/L)_n = 1 \mu m / 0.1 \mu m$, what would be a suitable $(W/L)_p$ for the PMOS transistor, assuming $\mu_n = 2\mu_p$ and $|V_{TP}| \approx V_{TH}$?

**Answer:**
For symmetric switching ($V_M \approx V_{DD}/2$), we need to match the effective conductances, which is related to $\mu C_{ox} (W/L)$.
The condition for matching is $\mu_n (\frac{W}{L})_n = \mu_p (\frac{W}{L})_p$.
Given $\mu_n = 2\mu_p$:
$2\mu_p (\frac{W}{L})_n = \mu_p (\frac{W}{L})_p$
$(\frac{W}{L})_p = 2 (\frac{W}{L})_n$

Given $(\frac{W}{L})_n = \frac{1 \mu m}{0.1 \mu m} = 10$.
$(\frac{W}{L})_p = 2 \times 10 = 20$.

So, a suitable $(W/L)_p$ would be $2 \mu m / 0.1 \mu m$ (or any ratio yielding 20).

**Question 4:**
Why is it generally necessary to increase the width of PMOS transistors compared to NMOS transistors in static CMOS logic gates?

**Answer:**
PMOS transistors use holes as charge carriers, which have a significantly lower mobility ($\mu_p$) compared to electrons in NMOS transistors ($\mu_n$). Mobility directly affects the ON-resistance of a transistor. To achieve similar current drive (and thus balanced switching speeds and symmetric voltage transfer characteristics), PMOS transistors need to be wider to compensate for their lower mobility. A common rule of thumb for an inverter is to make the PMOS width twice the NMOS width, assuming equal lengths.

---

### Important Points to Remember:

*   **Static CMOS:** Zero static power, good noise margins, robust.
*   **Structure:** Complementary PUN (PMOS) and PDN (NMOS).
*   **Inverter:** Basis of all logic. PMOS width is typically twice NMOS width for symmetry.
*   **NAND:** PMOS in parallel, NMOS in series.
*   **NOR:** PMOS in series, NMOS in parallel.
*   **Sizing:** Crucial for performance. Series connections increase resistance, parallel connections decrease resistance. Mobility difference requires wider PMOS.
*   **Worst Case Delay:** Occurs when many transistors are in series in the path carrying the signal.

---

### Course Outcome Alignment Summary:

*   **CO1 (VLSI Design Methodologies):** This topic provides the fundamental building blocks (basic gates) used in designing larger VLSI circuits. Understanding these gates is essential for implementing any digital system.
*   **CO2 (VLSI Fabrication):** While not directly covered in this topic, the performance characteristics discussed (mobility, $W/L$) are directly influenced by the fabrication process.
*   **CO3 (Static CMOS Logic Design):** This topic is the core of CO3. It covers the design and analysis of basic static CMOS logic gates, including their structure, operation, and transistor sizing for performance.

---
This concludes the study notes for "Basic Logic Gates" within Module 3 of VLSI Circuit Design. Remember to consult the provided textbooks for more in-depth analysis and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
