---
title: "MOSFET scaling : Need for scaling, constant voltage scaling and constant field scaling."
subject: "SOLID STATE DEVICES"
module: "Module 4: MOSFET scaling : Need for scaling, constant voltage scaling and constant field scaling."
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2be"
status: "completed"
scrapedAt: "2026-05-23T17:47:38.770Z"
---
# SOLID STATE DEVICES - Module 4: MOSFET Scaling

## Topic: MOSFET Scaling: Need for Scaling, Constant Voltage Scaling and Constant Field Scaling

### Learning Outcomes:

*   Understand the fundamental reasons behind MOSFET scaling.
*   Explain the concepts and implications of constant voltage scaling.
*   Explain the concepts and implications of constant field scaling.

### Course Outcomes Alignment:

*   **CO5:** Outline the effects of scaling in semiconductor devices. (Knowledge Level: K2) - This module directly addresses the effects of scaling, a key aspect of CO5.

---

## 1. The Need for MOSFET Scaling

As integrated circuits (ICs) become more complex, the demand for higher density, faster operation, and lower power consumption grows. MOSFET scaling is a fundamental technique used to achieve these goals.

### 1.1. Driving Forces for Scaling

*   **Increased Density:** Smaller transistors allow more transistors to be packed onto a single chip, leading to higher integration levels and more complex functionality.
*   **Higher Speed:** Shorter channel lengths reduce the transit time of charge carriers across the channel, resulting in faster switching speeds and improved performance.
*   **Lower Power Consumption:** Reduced gate capacitance and operating voltages contribute to lower power dissipation, crucial for battery-powered devices and high-performance computing.
*   **Reduced Cost:** Higher density per chip translates to lower manufacturing cost per transistor.

### 1.2. The Basic Idea of Scaling

The core idea of scaling is to reduce the physical dimensions of the MOSFET while maintaining or improving its electrical characteristics. This involves scaling down the key physical parameters of the device.

### 1.3. Key Parameters Affected by Scaling:

*   **Gate Length (L):** The distance between the source and drain.
*   **Gate Oxide Thickness ($t_{ox}$):** The thickness of the insulating layer between the gate and the channel.
*   **Gate Width (W):** The dimension of the gate perpendicular to the channel length. (Often scaled along with L).
*   **Doping Concentrations ($N_A$, $N_D$):** The concentration of impurity atoms in the semiconductor substrate and source/drain regions.
*   **Applied Voltages ($V_{GS}$, $V_{DS}$):** The voltages applied to the gate and drain terminals.

---

## 2. Constant Voltage Scaling (CVS) - (Also known as "Classical Scaling" or "Dennard Scaling")

Constant Voltage Scaling, introduced by Robert H. Dennard et al. in 1974, aims to scale down all linear dimensions by a factor of $k > 1$ while keeping the electric fields and voltages constant. This is achieved by also scaling down the oxide thickness and doping concentrations appropriately.

### 2.1. Scaling Factor ($k$)

All linear dimensions are reduced by a factor of $k$.
*   $L_{new} = L_{old} / k$
*   $W_{new} = W_{old} / k$
*   $t_{ox, new} = t_{ox, old} / k$

### 2.2. Constant Voltage Strategy

In CVS, the applied voltages are kept constant.
*   $V_{GS, new} = V_{GS, old}$
*   $V_{DS, new} = V_{DS, old}$

### 2.3. Implications of Constant Voltage Scaling

To maintain constant electric fields, the doping concentrations must be increased by the same factor $k$.

*   **Doping Concentration ($N_A$):** $N_{A, new} = N_{A, old} \times k$

Let's analyze the impact on key MOSFET parameters:

#### 2.3.1. Threshold Voltage ($V_{TH}$):

The threshold voltage is approximately given by:
$V_{TH} \approx V_{FB} + 2\phi_F + \frac{\sqrt{2q\epsilon_{si}N_A(2\phi_F)}}{C_{ox}}$

Where:
*   $V_{FB}$ is the flat-band voltage.
*   $2\phi_F$ is twice the Fermi potential.
*   $q$ is the elementary charge.
*   $\epsilon_{si}$ is the permittivity of silicon.
*   $N_A$ is the substrate doping concentration.
*   $C_{ox}$ is the gate oxide capacitance per unit area.

When scaling by $k$:
*   $C_{ox} \propto 1/t_{ox} \propto k$.
*   $\sqrt{N_A} \propto \sqrt{k}$.

So, $V_{TH} \propto \frac{\sqrt{k}}{k} = \frac{1}{\sqrt{k}}$.
**This implies that the threshold voltage decreases with CVS.** This is generally undesirable as it can lead to increased leakage currents.

#### 2.3.2. Gate Capacitance ($C_{ox}$):

$C_{ox} = \frac{\epsilon_{ox}}{t_{ox}}$
Where $\epsilon_{ox}$ is the permittivity of the gate oxide.
Since $t_{ox}$ is reduced by $k$, $C_{ox, new} = k \times C_{ox, old}$.
**Gate capacitance increases by a factor of $k$.**

#### 2.3.3. Drain Current ($I_{DS}$):

In the linear region, $I_{DS} \approx \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{TH} - V_{DS}/2) V_{DS}$.
In saturation, $I_{DS} \approx \frac{1}{2} \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{TH})^2$.

Let's consider the saturation current:
$I_{DS} \propto C_{ox} \frac{W}{L} (V_{GS} - V_{TH})^2$

Substituting the scaled parameters:
$I_{DS, new} \propto (k C_{ox, old}) \frac{W_{old}/k}{L_{old}/k} (V_{GS, old} - V_{TH, new})^2$
$I_{DS, new} \propto k C_{ox, old} \frac{W_{old}}{L_{old}} (V_{GS, old} - \frac{V_{TH, old}}{\sqrt{k}})^2$

If $V_{TH}$ is small compared to $V_{GS}$, the term $(V_{GS} - V_{TH})^2 \approx V_{GS}^2$.
Then, $I_{DS, new} \propto k C_{ox, old} \frac{W_{old}}{L_{old}} V_{GS, old}^2$.
**This implies that the drain current increases by a factor of $k$.**

#### 2.3.4. Power Consumption ($P$):

The dominant power consumption is often dynamic power, given by $P \propto C_{load} V_{DD}^2 f$, where $C_{load}$ is the load capacitance and $f$ is the operating frequency.
The switching speed ($f$) is roughly proportional to $I_{DS}/C_{gate}$, which would increase with CVS.
However, keeping $V_{DD}$ constant means the power consumption per transistor actually increases.

*   **Dynamic Power:** $P_{dyn} \propto C_{gate} V_{DD}^2 f$.
    *   $C_{gate} \propto C_{ox} WL \propto (k C_{ox, old}) (W_{old}/k)(L_{old}/k) = C_{ox, old} W_{old} L_{old} / k$. Gate capacitance *decreases*.
    *   $f \propto I_{DS}/C_{gate} \propto (k I_{DS, old}) / (C_{ox, old}/k) \propto k^2 f_{old}$. Frequency increases.
    *   $V_{DD}$ is constant.
    *   Therefore, $P_{dyn} \propto (C_{ox, old}/k) V_{DD}^2 (k^2 f_{old}) = k f_{old} V_{DD}^2 C_{ox, old}$. **Dynamic power increases by a factor of $k$.**

*   **Static Power:** $P_{static} = I_{leakage} V_{DD}$.
    *   Leakage current tends to increase with reduced $V_{TH}$ and thinner oxides.

**Overall, Constant Voltage Scaling leads to:**
*   **Increased Speed:** Due to reduced dimensions and increased current.
*   **Increased Power Density:** Due to increased current and constant voltage.
*   **Reduced Gate Capacitance:** Contrary to intuition, gate capacitance decreases.
*   **Reduced Threshold Voltage:** Can lead to reliability and leakage issues.

**Reference:**
*   **Shrinking the Transistor:** Dennard's original paper is a cornerstone.
*   **Pierret:** Chapter on MOSFETs will likely discuss scaling principles.
*   **Sze:** Chapters on MOSFETs and scaling will provide detailed analysis.

---

## 3. Constant Field Scaling (CFS)

Constant Field Scaling aims to keep the electric fields within the device constant. This is achieved by scaling down all linear dimensions and voltages by the same factor $k$.

### 3.1. Scaling Factor ($k$)

All linear dimensions are reduced by a factor of $k$.
*   $L_{new} = L_{old} / k$
*   $W_{new} = W_{old} / k$
*   $t_{ox, new} = t_{ox, old} / k$

### 3.2. Constant Field Strategy

All voltages are scaled down by the factor $k$.
*   $V_{GS, new} = V_{GS, old} / k$
*   $V_{DS, new} = V_{DS, old} / k$
*   $V_{TH, new} \approx V_{TH, old} / k$ (ideally)

### 3.3. Implications of Constant Field Scaling

Since all voltages and dimensions are scaled, the electric fields ($E \approx V/L$) remain constant.

#### 3.3.1. Threshold Voltage ($V_{TH}$):

As mentioned, ideally $V_{TH}$ scales down with voltage.
$V_{TH, new} \approx V_{TH, old} / k$.
**Threshold voltage decreases proportionally to the scaling factor.** This helps maintain good gate control.

#### 3.3.2. Gate Capacitance ($C_{ox}$):

$C_{ox} = \frac{\epsilon_{ox}}{t_{ox}}$
Since $t_{ox}$ is reduced by $k$, $C_{ox, new} = k \times C_{ox, old}$.
**Gate capacitance increases by a factor of $k$.**

#### 3.3.3. Drain Current ($I_{DS}$):

Let's consider the saturation current:
$I_{DS} \propto \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{TH})^2$

Substituting the scaled parameters:
$I_{DS, new} \propto \mu_n (k C_{ox, old}) \frac{W_{old}/k}{L_{old}/k} (V_{GS, old}/k - V_{TH, old}/k)^2$
$I_{DS, new} \propto \mu_n k C_{ox, old} \frac{W_{old}}{L_{old}} (\frac{V_{GS, old} - V_{TH, old}}{k})^2$
$I_{DS, new} \propto \frac{1}{k} \left(\mu_n C_{ox, old} \frac{W_{old}}{L_{old}} (V_{GS, old} - V_{TH, old})^2\right)$
**This implies that the drain current decreases by a factor of $k$.**

#### 3.3.4. Power Consumption ($P$):

*   **Dynamic Power:** $P_{dyn} \propto C_{load} V_{DD}^2 f$.
    *   $C_{load}$ is proportional to $WL$, so $C_{load, new} = C_{load, old} / k^2$.
    *   $V_{DD}$ is scaled down by $k$.
    *   Switching speed $f \propto I_{DS}/C_{gate}$.
        *   $I_{DS, new} = I_{DS, old}/k$.
        *   $C_{gate, new} = C_{ox, new} W_{new} L_{new} = (k C_{ox, old}) (W_{old}/k) (L_{old}/k) = C_{ox, old} W_{old} L_{old} / k$.
        *   $f_{new} \propto (I_{DS, old}/k) / (C_{gate, old}/k) = I_{DS, old} / C_{gate, old} = f_{old}$. **Frequency remains roughly the same.**
    *   Therefore, $P_{dyn, new} \propto (C_{load, old}/k^2) (V_{DD, old}/k)^2 f_{old} = \frac{1}{k^4} P_{dyn, old}$.
    **Dynamic power reduces drastically by a factor of $k^4$.**

*   **Static Power:** $P_{static} = I_{leakage} V_{DD}$.
    *   With scaled voltages, leakage currents are generally reduced.

**Overall, Constant Field Scaling leads to:**
*   **Reduced Speed:** Due to reduced current.
*   **Significantly Reduced Power Consumption:** Especially dynamic power.
*   **Increased Gate Capacitance:** This is a drawback.
*   **Reduced Threshold Voltage:** Beneficial for gate control.
*   **Maintained Electric Fields:** Avoids some short-channel effects associated with high electric fields.

**Reference:**
*   **Shur:** Chapters on MOSFET modeling will discuss scaling.
*   **Tsividis:** "Operation and Modelling of the MOS Transistor" is an excellent resource for scaling details.
*   **Neamen:** Semiconductor Physics and Devices will cover scaling effects.

---

## 4. Comparison and Limitations

| Parameter            | Constant Voltage Scaling (CVS) | Constant Field Scaling (CFS) |
| :------------------- | :----------------------------- | :--------------------------- |
| Linear Dimensions    | Scaled by $1/k$                | Scaled by $1/k$              |
| Voltages             | Constant                       | Scaled by $1/k$              |
| $t_{ox}$             | Scaled by $1/k$                | Scaled by $1/k$              |
| Doping ($N_A$)       | Scaled by $k$                  | Constant                     |
| $V_{TH}$             | Scales by $1/\sqrt{k}$ (decreases) | Scales by $1/k$ (decreases)  |
| $C_{ox}$             | Scales by $k$ (increases)      | Scales by $k$ (increases)    |
| $I_{DS}$             | Scales by $k$ (increases)      | Scales by $1/k$ (decreases)  |
| Speed                | Increases                      | Remains roughly the same     |
| Dynamic Power ($P_{dyn}$) | Scales by $k$ (increases)      | Scales by $1/k^4$ (decreases) |
| Static Power         | Increases                      | Decreases                    |
| Electric Fields      | Increase                       | Constant                     |

**Limitations of Scaling:**

As devices shrink to nanometer dimensions, several physical effects become dominant and limit further scaling:

*   **Short-Channel Effects:**
    *   **Drain-Induced Barrier Lowering (DIBL):** The drain voltage significantly influences the threshold voltage.
    *   **Velocity Saturation:** Carriers reach their maximum drift velocity, and their velocity is no longer proportional to the electric field. This reduces the effectiveness of scaling for current.
    *   **Hot Carrier Effects:** High electric fields can impart high kinetic energy to carriers, leading to damage and reliability issues.
    *   **Punchthrough:** The depletion regions of the source and drain can merge, causing excessive current flow.
*   **Quantum Mechanical Effects:**
    *   **Tunneling:** Gate tunneling (through thin oxides) and band-to-band tunneling become significant leakage paths.
    *   **Quantization:** Carriers in narrow inversion layers can be quantized, affecting device characteristics.
*   **Lithography Limits:** The ability to print features at such small scales becomes a significant hurdle.
*   **Interconnect Delays:** As transistor switching speeds increase, the delays caused by interconnecting wires become a bottleneck.
*   **Power Density:** Even with reduced voltage, the massive increase in transistor density leads to very high power dissipation per unit area, making thermal management challenging.

**Modern Scaling:**

Modern scaling is a hybrid approach. While linear dimensions continue to shrink, voltage scaling has become more aggressive, and new device structures (like FinFETs and Gate-All-Around FETs) and materials are employed to mitigate short-channel effects and improve performance. The ideal CVS and CFS models are simplified representations of complex real-world scaling strategies.

**Important Points to Remember:**

*   Scaling is crucial for improving IC performance, density, and power efficiency.
*   CVS aims to maintain electric fields by scaling voltages and dimensions proportionally, but it leads to increased power and undesirable threshold voltage reduction.
*   CFS aims to maintain voltages constant, leading to reduced speed but significantly lower power consumption.
*   Both ideal scaling models have limitations, and real-world scaling involves compromises and advanced techniques.
*   Short-channel effects and quantum mechanical effects become dominant at very small scales, posing significant challenges to continued scaling.

---

## 5. Practice Questions and Answers

**Question 1:** What are the primary motivations behind MOSFET scaling?
**Answer:** Increased density, higher speed, lower power consumption, and reduced cost per transistor.

**Question 2:** In Constant Voltage Scaling (CVS), by what factor does the gate capacitance ($C_{ox}$) change if all linear dimensions are scaled by $1/k$?
**Answer:** Gate capacitance ($C_{ox} = \epsilon_{ox} / t_{ox}$) increases by a factor of $k$ because the oxide thickness ($t_{ox}$) is scaled down by $k$.

**Question 3:** Explain why Constant Field Scaling (CFS) is beneficial for power consumption.
**Answer:** In CFS, both voltages and dimensions are scaled down. This leads to a proportional reduction in current ($I_{DS}$) and a much more significant reduction in dynamic power ($P_{dyn} \propto V_{DD}^2$), which scales down by $1/k^4$.

**Question 4:** What is a major drawback of Constant Voltage Scaling (CVS) regarding threshold voltage?
**Answer:** CVS leads to a reduction in threshold voltage ($V_{TH}$ scales by $1/\sqrt{k}$), which can increase leakage currents and reduce noise margins.

**Question 5:** List two physical effects that become problematic as MOSFETs are scaled to very small dimensions.
**Answer:** Short-channel effects (like DIBL, velocity saturation) and quantum mechanical effects (like tunneling).

---
This comprehensive set of notes covers the core concepts of MOSFET scaling, including the need for it, Constant Voltage Scaling, and Constant Field Scaling, with explanations, implications, comparisons, limitations, and practice questions. The content is structured to align with the provided learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
