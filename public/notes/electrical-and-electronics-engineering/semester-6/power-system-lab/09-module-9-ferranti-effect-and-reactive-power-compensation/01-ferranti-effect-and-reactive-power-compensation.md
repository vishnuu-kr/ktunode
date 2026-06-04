---
title: "Ferranti Effect and Reactive Power Compensation"
subject: "POWER SYSTEM LAB"
module: "Module 9: Ferranti Effect and Reactive Power Compensation"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f367f5"
status: "completed"
scrapedAt: "2026-05-23T16:31:06.671Z"
---
# Power System Lab: Module 9 - Ferranti Effect and Reactive Power Compensation

This module delves into two critical phenomena in power systems: the Ferranti Effect and the necessity and methods of Reactive Power Compensation. Understanding these concepts is vital for maintaining stable and efficient power transmission.

## 1. Introduction to Ferranti Effect

### 1.1. What is the Ferranti Effect?

The **Ferranti Effect** is a phenomenon observed in long overhead transmission lines where the voltage at the receiving end is higher than the voltage at the sending end when the line is lightly loaded or unloaded. This effect is counter-intuitive to what one might expect from a simple resistive circuit, where voltage drop occurs with current flow.

### 1.2. Causes of Ferranti Effect

The primary cause of the Ferranti Effect is the **capacitance** inherent in the transmission line.

*   **Line Capacitance:** Transmission lines, due to their parallel conductors separated by insulation, exhibit distributed capacitance along their entire length. This capacitance acts as a shunt admittance.
*   **Shunt Admittance:** In an unloaded or lightly loaded line, the current drawn from the source is primarily due to the charging current required to establish the voltage across the distributed capacitance. This charging current flows *into* the line capacitance.
*   **Capacitive Reactance:** At transmission frequencies, the capacitive reactance ($X_C$) of a long line is significant.
*   **Nature of Charging Current:** The charging current leads the voltage by 90 degrees.
*   **Voltage Rise:** When this charging current flows through the inductive reactance ($X_L$) of the line, it causes a voltage rise at the receiving end. This can be visualized using phasor diagrams or by considering the line as a series of LC circuits.

**Key Concept:** The distributed capacitance of the transmission line acts like a source of reactive power, supplying the reactive power needed to establish the electric field across the line.

### 1.3. Mathematical Representation (Simplified)

For a short transmission line (negligible capacitance), the receiving end voltage ($V_R$) is typically less than the sending end voltage ($V_S$) due to the line impedance ($Z_{line} = R + jX_L$):

$V_S = V_R + I \cdot Z_{line}$

However, for a long transmission line, the distributed capacitance cannot be ignored. Considering a simplified $\pi$-model for a long line, the admittance $Y = G + jB$ is added. For an unloaded line, $I \approx 0$. The receiving end voltage is then influenced by the charging current flowing through the line's series impedance.

A more accurate analysis using the characteristic impedance ($Z_0$) and propagation constant ($\gamma$) for a long line reveals that the voltage at any point $x$ along the line can be expressed as:

$V(x) = V_R e^{\gamma x} + I_R Z_0 e^{-\gamma x}$

For an unloaded line, $I_R = 0$. If we consider $V_R$ at the receiving end ($x=0$), the sending end voltage ($V_S$) at $x=L$ is:

$V_S = V_R e^{\gamma L}$

where $\gamma = \sqrt{ZY}$ and $Z$ and $Y$ are the series impedance and shunt admittance per unit length. For lightly loaded lines, the voltage at the receiving end can indeed be higher than the sending end voltage due to the phase shift introduced by the exponential term and the fact that $\gamma$ is typically complex and its magnitude depends on frequency and line parameters.

**Important Point to Remember:** The Ferranti Effect is more pronounced for longer transmission lines, higher voltages, lower load conditions, and at higher frequencies.

### 1.4. Factors Affecting Ferranti Effect Magnitude

*   **Line Length:** Longer lines have more distributed capacitance, leading to a more significant Ferranti Effect.
*   **Line Voltage:** Higher voltage levels generally imply longer lines or higher capacitance per unit length, exacerbating the effect.
*   **Load Conditions:** The effect is most pronounced when the line is unloaded or lightly loaded. As the load increases, the voltage drop across the line impedance starts to dominate, reducing the Ferranti Effect.
*   **Line Configuration:** The spacing between conductors and their configuration affect the capacitance.
*   **Frequency:** Higher frequencies increase the charging current, thus intensifying the Ferranti Effect.

### 1.5. Consequences of Ferranti Effect

*   **Overvoltage:** The most direct consequence is overvoltage at the receiving end, which can exceed the insulation limits of equipment.
*   **Equipment Damage:** Persistent overvoltages can lead to insulation breakdown and damage to transformers, switchgear, and other connected equipment.
*   **Reduced System Reliability:** Increased stress on equipment can lead to failures and reduce the overall reliability of the power system.

## 2. Reactive Power Compensation

### 2.1. What is Reactive Power?

Reactive power ($Q$), measured in Volt-Amperes Reactive (VAR), is the power that oscillates between the source and the inductive or capacitive elements of a circuit. It does not perform useful work but is essential for establishing and maintaining magnetic fields (in inductors) and electric fields (in capacitors) necessary for the operation of AC machines like motors and transformers.

*   **Inductive Loads:** Require reactive power (lagging VARs) to create magnetic fields.
*   **Capacitive Loads:** Produce reactive power (leading VARs).

### 2.2. Why is Reactive Power Compensation Necessary?

Maintaining a stable voltage profile across the transmission and distribution network is crucial for efficient and reliable power delivery. Reactive power plays a pivotal role in voltage regulation.

*   **Voltage Support:** Inductive loads draw lagging reactive power, causing a voltage drop. Compensation with leading reactive power (from capacitors) counteracts this voltage drop.
*   **Improved Power Factor:** By supplying the required reactive power locally, compensation reduces the flow of reactive power from the source, improving the overall power factor of the system.
*   **Increased Power Transfer Capability:** A higher power factor allows for the transmission of more real power for the same apparent power, thereby increasing the power transfer capability of transmission lines.
*   **Reduced Line Losses:** Lower reactive power flow means reduced current flow, which in turn reduces $I^2R$ losses in the transmission lines.
*   **Stability Enhancement:** Adequate reactive power support is essential for maintaining system stability during disturbances.
*   **Mitigation of Ferranti Effect:** The Ferranti Effect, being a voltage rise due to excessive reactive power supplied by the line capacitance, can be mitigated by injecting lagging reactive power at the receiving end.

### 2.3. Methods of Reactive Power Compensation

Reactive power compensation involves injecting or absorbing reactive power at various points in the power system to control voltage levels and improve the power factor.

#### 2.3.1. Shunt Compensation

Shunt compensation involves connecting reactive power compensation devices in parallel with the transmission line.

*   **Capacitor Banks:**
    *   **Operation:** Provide leading reactive power (VARs).
    *   **Application:** Used to counteract voltage drops caused by inductive loads and to compensate for the Ferranti Effect.
    *   **Connection:** Typically connected in parallel with the load or at intermediate points along long transmission lines.
    *   **Advantages:** Simple, relatively inexpensive, readily available.
    *   **Disadvantages:** Fixed compensation, can lead to overcompensation and voltage rise under light load conditions (especially if over-sized).
    *   **Types:** Fixed capacitor banks, switched capacitor banks (to adjust compensation based on load).

*   **Synchronous Condensers (Synchronous Compensators):**
    *   **Operation:** An over-excited synchronous motor operating without any mechanical load. It can absorb or generate reactive power by varying its excitation. When over-excited, it generates leading VARs.
    *   **Application:** Provides variable reactive power, allowing for precise voltage control. Can also be used to improve power factor and provide dynamic voltage support.
    *   **Advantages:** Flexible and variable compensation, fast response, can provide inertia to the system.
    *   **Disadvantages:** Higher cost, requires DC excitation, maintenance, and starting mechanisms.

*   **Static VAR Compensators (SVCs):**
    *   **Operation:** A bank of thyristor-controlled or thyristor-switched capacitors and/or reactors. SVCs provide rapid and continuous control of reactive power.
    *   **Components:** Thyristor-Switched Capacitors (TSCs), Thyristor-Controlled Reactors (TCRs), and sometimes Fixed Reactors.
    *   **Application:** Widely used for voltage control, transient stability improvement, and flicker mitigation.
    *   **Advantages:** Fast response, stepless control, automatic operation.
    *   **Disadvantages:** More complex than capacitor banks, can generate harmonics, relatively expensive.

#### 2.3.2. Series Compensation

Series compensation involves connecting reactive power compensation devices in series with the transmission line.

*   **Series Capacitors:**
    *   **Operation:** Insert capacitance in series with the line. This reduces the effective inductive reactance of the line.
    *   **Application:** Primarily used to increase the power transfer capability of long transmission lines and to improve system stability by reducing the angle between sending and receiving end voltages.
    *   **Mechanism:** By reducing the line reactance, they reduce the voltage drop across the line for a given current and also reduce the overall line impedance, allowing more power to be transmitted.
    *   **Advantages:** Effective in increasing power transfer capability, improves stability, reduces line losses.
    *   **Disadvantages:** Can lead to resonance issues, protection complexity, potential for voltage oscillations, and can exacerbate the Ferranti Effect if not managed carefully (as they effectively increase the line's capacitive nature relative to its inductive nature if not properly designed).

*   **Thyristor-Controlled Series Compensators (TCSCs):**
    *   **Operation:** A series capacitor bank with a parallel thyristor-controlled reactor. This allows for adjustable series compensation.
    *   **Application:** More advanced form of series compensation offering variable control.
    *   **Advantages:** Stepless control of series compensation, improved dynamic performance.
    *   **Disadvantages:** More complex and expensive than fixed series capacitors.

#### 2.3.3. Combined Series and Shunt Compensation

Some advanced FACTS (Flexible AC Transmission Systems) devices, like STATCOMs (Static Synchronous Compensators) and SVS (Static VAR Systems), can provide both shunt and series compensation effects or offer more sophisticated control.

## 3. Ferranti Effect and Reactive Power Compensation - The Interplay

The Ferranti Effect and reactive power compensation are intrinsically linked.

*   **Ferranti Effect as a Source of Reactive Power:** The distributed capacitance of a lightly loaded line acts as a source of leading reactive power, leading to a voltage rise.
*   **Compensation for Ferranti Effect:** To mitigate the Ferranti Effect, we need to inject lagging reactive power into the system at the receiving end or at intermediate points. This is typically achieved using:
    *   **Shunt Reactors:** Inductive devices that absorb reactive power (supply lagging VARs).
    *   **Synchronous Condensers:** Operated in an under-excited mode to absorb reactive power.
    *   **SVCs/STATCOMs:** Can be controlled to absorb reactive power.

**Example:** Consider a long transmission line operating at no load. The line capacitance causes a significant leading reactive power flow, resulting in a voltage rise at the receiving end, making it higher than the sending end voltage (Ferranti Effect). To counter this, a shunt reactor can be connected at the receiving end. The reactor absorbs lagging VARs, which opposes the leading VARs supplied by the line capacitance, thereby reducing the voltage rise and bringing the receiving end voltage closer to the sending end voltage.

## 4. Practical Aspects and Lab Demonstrations

### 4.1. Power System Lab Experiments

In a power system lab, the Ferranti Effect and reactive power compensation can be demonstrated using scaled-down models or simulation software.

*   **Experiment 1: Demonstrating Ferranti Effect:**
    *   Connect a simulated transmission line (e.g., using RL and RC components to represent distributed parameters or a physical model) to a variable voltage source.
    *   Measure sending end and receiving end voltages at no load or light load.
    *   Observe the voltage rise at the receiving end.
    *   Vary the load and observe how the Ferranti Effect diminishes with increasing load.

*   **Experiment 2: Reactive Power Compensation using Capacitor Banks:**
    *   Repeat Experiment 1, but this time connect a capacitor bank at the receiving end.
    *   Observe the reduction in voltage rise compared to the case without compensation.
    *   Experiment with different sizes of capacitor banks to find the optimal compensation.

*   **Experiment 3: Reactive Power Compensation using Reactors:**
    *   Repeat Experiment 1, but connect a shunt reactor at the receiving end.
    *   Observe how the reactor absorbs lagging VARs and reduces the voltage rise.

*   **Experiment 4: Power Factor Improvement:**
    *   Connect an inductive load to the simulated line.
    *   Measure the power factor at the source.
    *   Connect a capacitor bank in parallel with the load and observe the improvement in power factor.
    *   Measure the reactive power supplied by the capacitor bank and by the source.

### 4.2. Software Tools for Analysis

*   **MATLAB/Simulink:** Powerful for simulating power systems, including transmission lines, loads, and compensation devices. Allows for detailed analysis of voltage profiles, power flow, and transient behavior.
*   **PSCAD/EMTDC:** Specialized software for electromagnetic transient studies, ideal for detailed simulation of switching events and dynamic response of compensation devices.
*   **ETAP, PSS/E, PowerWorld Simulator:** Commercial power system analysis software used for load flow, fault analysis, and system planning, which can incorporate compensation strategies.

## 5. Practice Questions and Exercises

**Question 1:**
Explain the fundamental reason behind the Ferranti Effect in transmission lines.
**Answer:** The Ferranti Effect is caused by the distributed capacitance of the transmission line. In lightly loaded or unloaded lines, the charging current required to establish the voltage across this capacitance flows through the line's series inductance, resulting in a voltage rise at the receiving end.

**Question 2:**
List three factors that influence the magnitude of the Ferranti Effect.
**Answer:**
1.  Line Length
2.  Load Conditions (light load)
3.  Line Voltage

**Question 3:**
Why is reactive power compensation necessary in power systems?
**Answer:** Reactive power compensation is necessary for voltage support, improving the power factor, increasing power transfer capability, reducing line losses, and enhancing system stability.

**Question 4:**
What is the primary difference in operation between a shunt capacitor bank and a shunt reactor for reactive power compensation?
**Answer:** A shunt capacitor bank provides leading reactive power (absorbs lagging VARs) to counteract voltage drops and Ferranti effect. A shunt reactor absorbs leading reactive power (provides lagging VARs) to reduce overvoltages caused by excessive line capacitance.

**Question 5:**
A 400 kV, 50 Hz transmission line exhibits a voltage rise of 10% at the receiving end under no-load conditions. If the line is to be compensated, what type of reactive power compensation device would be most suitable at the receiving end, and why?
**Answer:** A shunt reactor would be most suitable. The voltage rise indicates an excess of leading reactive power supplied by the line capacitance (Ferranti Effect). A shunt reactor absorbs lagging reactive power, which will counteract the effect of line capacitance and reduce the voltage at the receiving end.

**Exercise 1: (Conceptual)**
Draw phasor diagrams for a lightly loaded transmission line showing the Ferranti Effect. Compare it with a heavily loaded line.
**Hint:**
*   **Lightly Loaded:** Show $V_R$ leading $I_R$ (if load is slightly inductive or balanced), and then show the charging current $I_C$ leading $V_R$. The voltage drop across the line inductance due to $I_C$ adds to $V_R$, resulting in $V_S > V_R$.
*   **Heavily Loaded:** Show $I_L$ lagging $V_R$. The voltage drop across the line impedance due to $I_L$ is significant and usually dominates over any voltage rise from charging current, resulting in $V_S < V_R$.

**Exercise 2: (Simulation/Conceptual Calculation)**
Consider a transmission line with series impedance $Z = 0.05 + j0.3$ pu and shunt admittance $Y = j0.001$ pu. If the receiving end voltage is $V_R = 1.0$ pu and the line is unloaded ($I_R = 0$). Calculate the approximate sending end voltage using a simplified $\pi$-model.

**Solution Approach:**
Using the $\pi$-model, the admittance $Y$ is split equally between the sending and receiving ends.
$I_{load} = 0$
$V_{mid} = V_R$
$I_{mid} = V_{mid} \cdot (Y/2) = 1.0 \cdot (j0.001/2) = j0.0005$ pu
$V_S = V_{mid} + I_{mid} \cdot Z = 1.0 + (j0.0005) \cdot (0.05 + j0.3)$
$V_S = 1.0 + j0.000025 - 0.00015$
$V_S = (1.0 - 0.00015) + j0.000025$
$V_S \approx 0.99985 + j0.000025$ pu

This simplified calculation doesn't show the voltage rise as clearly. A more accurate $\pi$-model where the entire shunt admittance is considered at the midpoint or a distributed parameter model is needed for a pronounced Ferranti Effect demonstration.

**Revised Calculation for Ferranti Effect (Conceptual using simplified $\pi$-model):**
For an unloaded line, the receiving end voltage is approximately:
$V_R \approx V_S (1 - YZ/2)$ if load is taken at the sending end and admittance at the end.

A more intuitive approach often seen in textbooks for demonstrating Ferranti Effect with a $\pi$-model involves considering the current flowing through the line impedance due to the shunt admittance. If we consider the line as a lumped element for simplicity of illustration (though the effect is due to distributed parameters):

Let $V_R$ be the receiving end voltage.
The charging current $I_c$ drawn by the line capacitance is $I_c = V_R \cdot Y_{total}$.
If this current $I_c$ flows through the series impedance $Z_{line}$, it causes a voltage drop. However, for Ferranti effect, it's about the current from the source and its interaction with the distributed capacitance.

**Using a simplified approach for understanding:**
Assume a transmission line has a series impedance $Z$ and a total shunt admittance $Y$.
For an unloaded line, $I_R = 0$.
The sending end voltage $V_S$ can be approximated using the $\pi$-model as:
$V_S = V_R + I_R Z + (V_R + I_R Z) Y_{total} Z/4$ (This is getting complex).

**A better qualitative understanding from textbook formulas for unloaded lines:**
$V_S \approx V_R (1 + ZY/2)$
where $Z$ and $Y$ are the total series impedance and shunt admittance respectively.
If $Z = jX_L$ and $Y = jB_C$, then
$V_S \approx V_R (1 + (jX_L)(jB_C)/2) = V_R (1 - X_L B_C / 2)$
This formula indicates a voltage *drop* if $X_L$ and $B_C$ have the same sign (which they don't - one is inductive, one is capacitive).

Let's use the formula derived from ABCD parameters for an unloaded line:
$V_S = A V_R$ where $A = 1 + YZ/2$.
If $Z = R + jX_L$ and $Y = G + jB_C$,
$A = 1 + (R+jX_L)(G+jB_C)/2$
$A = 1 + (RG - X_L B_C + j(RB_C + X_L G))/2$

For a lossless line ($R=0, G=0$), $A = 1 - X_L B_C / 2$. This still indicates a drop.
The Ferranti effect arises from the phase relationship.

**A more appropriate approximation for voltage at sending end $V_S$ in terms of receiving end voltage $V_R$ for unloaded line:**
$V_S = V_R + I_{charging} \cdot Z_{line}$
Where $I_{charging}$ is the current supplied to the line capacitance.

**Consider a lumped circuit analogy:**
A line with series inductance $L$ and shunt capacitance $C$. For Ferranti, it's the charging current.
The total shunt susceptance $B$ of the line is $B = \omega C$.
The total series reactance $X$ of the line is $X = \omega L$.
For an unloaded line, the sending end voltage can be approximated as:
$V_S \approx V_R + I_c \cdot Z_{line}$
$I_c = V_R \cdot jB$
$V_S \approx V_R + (V_R \cdot jB) \cdot (R + jX)$
$V_S \approx V_R + V_R (jBR - BX)$
$V_S \approx V_R (1 - BX + jBR)$
For a lossless line ($R=0$), $V_S \approx V_R (1 - BX)$.
Since $X$ is inductive reactance ($+ve$) and $B$ is capacitive susceptance ($+ve$), $BX$ is positive. So $1 - BX$ is less than 1, indicating a voltage drop. This is still not right for explaining the rise.

**Correct understanding using characteristic impedance and propagation constant:**
The voltage at any point $z$ from the receiving end is $V(z) = V_R \cosh(\gamma z)$.
The sending end voltage is $V_S = V(L) = V_R \cosh(\gamma L)$.
$\gamma = \sqrt{ZY} = \sqrt{(R+jX_L)(G+jB_C)}$.
For a lossless line, $\gamma = j \omega \sqrt{LC} = j\beta$.
$V_S = V_R \cosh(j\beta L) = V_R \cos(\beta L)$.
This still doesn't give a clear rise. The rise is more apparent when considering the complex exponential form:
$V(z) = V_R e^{\gamma z}$ for receiving end at $z=0$.
$V_S = V_R e^{\gamma L}$.
If $\gamma L$ has a positive real part, voltage increases. $\gamma L = \sqrt{ZY}L$.

Let's go back to simpler qualitative explanation:
The charging current $I_c$ drawn by the line capacitance leads the voltage by 90 degrees. When this charging current flows through the series inductance of the line, it causes a voltage drop which is in phase with the current. Since the charging current leads the voltage, this voltage drop from the inductance effectively adds to the receiving end voltage (out of phase with the voltage itself).

**Practical Example for Exercise 2 Answer Clarification:**
To observe the Ferranti effect with a simplified lumped model, consider the receiving end voltage $V_R$. The charging current $I_c$ flows from the receiving end towards the sending end. This current $I_c$ flows through the series impedance $Z$ of the line.
$I_c \approx V_R \cdot (jB_{line})$ where $B_{line}$ is the total line susceptance.
$V_S = V_R + I_c \cdot Z_{line}$
$V_S = V_R + (V_R \cdot jB_{line}) \cdot (R_{line} + jX_{line})$
$V_S = V_R [1 + jB_{line}R_{line} - B_{line}X_{line}]$
$V_S = V_R [(1 - B_{line}X_{line}) + jB_{line}R_{line}]$
For a lossless line ($R_{line}=0$), $V_S = V_R (1 - B_{line}X_{line})$. This is still a drop.

The correct approach involves considering the distributed nature or using ABCD parameters derived for distributed lines. For a lossless line, the voltage gain factor $A$ is $A = \cos(\beta L) + j(Z_0 \sin(\beta L)) = \cos(\beta L) + j(1/Y_0 \sin(\beta L))$, where $Z_0$ and $Y_0$ are characteristic impedance and admittance.
$V_S = A V_R$.
For short lines, $A \approx 1$. For longer lines, $A$ becomes complex. The voltage rise happens when $\cos(\beta L)$ starts to dominate or when the phase shift in $A$ causes $V_S$ to be larger in magnitude than $V_R$.

**Focus on understanding the concept:** The key is that the charging current, which is 90 degrees ahead of the voltage, creates a voltage drop across the line inductance that is in phase with the charging current. This effectively adds a component to the receiving end voltage that can cause it to exceed the sending end voltage.

## 6. Important Points to Remember

*   **Ferranti Effect:** Voltage rise at the receiving end of a lightly loaded long transmission line due to line capacitance.
*   **Cause:** Distributed capacitance and series inductance of the line.
*   **Consequences:** Overvoltage, equipment stress, reduced reliability.
*   **Mitigation of Ferranti Effect:** Inject lagging reactive power (using shunt reactors, synchronous condensers in under-excited mode, or STATCOMs).
*   **Reactive Power:** Essential for AC circuits, but excessive or insufficient reactive power flow leads to voltage instability and power quality issues.
*   **Reactive Power Compensation:** Methods include shunt (capacitors, reactors, SVCs, STATCOMs) and series (series capacitors, TCSCs) compensation.
*   **Series Capacitors:** Primarily used to increase power transfer capability and improve stability.
*   **Shunt Capacitors:** Primarily used for voltage support and power factor correction.
*   **Shunt Reactors:** Used to absorb reactive power and mitigate overvoltages (like Ferranti effect).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## 7. References

*   **Power System Analysis** by Grainger and Stevenson. (Chapter on Transmission Line Parameters and Performance)
*   **Elements of Power System Analysis** by William D. Stevenson Jr. (Chapter on Long Transmission Lines)
*   **Modern Power Systems Analysis** by D. P. Kothari and I. J. Nagrath.
*   **Power System Stability and Control** by P. Kundur.

This comprehensive set of notes should provide a strong foundation for understanding the Ferranti Effect and Reactive Power Compensation in your Power System Lab module. Remember to relate these theoretical concepts to practical lab experiments and simulation results.