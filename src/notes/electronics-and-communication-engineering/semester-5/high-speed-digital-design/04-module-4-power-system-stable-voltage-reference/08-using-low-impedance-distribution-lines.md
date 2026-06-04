---
title: "using low impedance distribution lines"
subject: "HIGH SPEED DIGITAL DESIGN"
module: "Module 4: Power system: Stable voltage reference"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feb84"
status: "completed"
scrapedAt: "2026-05-23T17:57:32.931Z"
---
# Module 4: Power System: Stable Voltage Reference - Topic: Using Low Impedance Distribution Lines

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


## 1. Introduction: The Importance of Stable Voltage References

In high-speed digital design, a stable and clean voltage reference is paramount for reliable operation. Fluctuations or noise in the power supply can lead to:

*   **Timing Jitter:** Variations in clock edges, causing errors in data capture.
*   **Logic Errors:** Incorrect switching of logic gates due to insufficient or excessive voltage.
*   **Reduced Noise Margins:** Making the system more susceptible to other noise sources.
*   **Component Degradation:** Over time, voltage fluctuations can stress components and reduce their lifespan.

This module focuses on techniques to achieve a stable voltage reference, and a crucial aspect of this is the design of the **power distribution network (PDN)**, specifically focusing on **low impedance distribution lines**.

---

## 2. Understanding Impedance in Power Distribution

### 2.1 What is Impedance?

Impedance ($Z$) is the total opposition to alternating current (AC) flow in a circuit. It's a complex quantity that includes both resistance ($R$) and reactance ($X$).

*   **Resistance ($R$):** Opposition to current flow due to material properties. It dissipates energy as heat.
*   **Reactance ($X$):** Opposition to current flow due to the storage and release of energy in electric (capacitance) or magnetic (inductance) fields. It doesn't dissipate energy but delays current relative to voltage.

In a PDN, impedance is contributed by:
    *   **Resistors:** The inherent resistance of traces, wires, and component pins.
    *   **Inductors:** Parasitic inductance of traces, wires, vias, connectors, and decoupling capacitors.
    *   **Capacitors:** Decoupling capacitors placed near ICs.

### 2.2 Why Low Impedance is Critical in High-Speed Digital Design

High-speed digital circuits draw current in very rapid, pulsed fashion. When a logic gate switches, it can demand a significant amount of current very quickly. This current demand is often referred to as **simultaneous switching output (SSO)** or **current spikes**.

*   **Current Flow:** $I = C \frac{dV}{dt}$ (This is a simplified representation of current demand during switching).
*   **Voltage Drop:** When current flows through an impedance, a voltage drop occurs according to Ohm's Law: $\Delta V = I \times Z$.

**If the PDN has high impedance, even a moderate current spike can cause a significant voltage drop ($ \Delta V $).** This drop means the voltage delivered to the IC is lower than the intended supply voltage, potentially causing the IC to malfunction.

**Key Concept (Referencing Johnson & Graham, Chapter 4):** The primary goal of a good PDN is to keep the impedance between the voltage source (e.g., voltage regulator) and the IC as low as possible across the entire frequency spectrum of interest, which is directly related to the rise/fall times of the digital signals.

---

## 3. Sources of Impedance in the Power Distribution Network

The PDN includes everything from the voltage regulator to the pins of the integrated circuits (ICs). Understanding the parasitic elements at each stage is crucial:

### 3.1 Voltage Regulators and Power Supplies

*   **Output Impedance:** Voltage regulators themselves have an output impedance, which is typically a few milliohms. While low, it's not zero.
*   **Internal Inductance:** The internal circuitry and connections within the regulator also contribute inductance.

### 3.2 Distribution Traces and Planes

*   **Trace Resistance:** The resistance of copper traces depends on their length, width, thickness, and material.
    *   **Formula:** $R = \frac{\rho \times L}{A}$, where $\rho$ is resistivity, $L$ is length, and $A$ is cross-sectional area (width x thickness).
*   **Trace Inductance:** Even a straight trace has inductance. This inductance increases with length and decreases with width.
    *   **Approximation for a trace:** $L \approx \frac{\mu_0 \mu_r A}{P}$, where $\mu_0$ is permeability of free space, $\mu_r$ is relative permeability of the dielectric, $A$ is the cross-sectional area, and $P$ is the perimeter. More specifically, inductance of a microstrip trace is approximately: $L \approx 0.0002l (\ln(\frac{8t}{w}) + 0.5) \text{ H}$ where $l$ is length in meters, $t$ is thickness in meters, and $w$ is width in meters. (This is a complex topic, and precise calculation requires EM simulation, but the general dependencies are important).
*   **Return Path Inductance:** The path for current to return to the source is just as important as the supply path. A high-impedance return path creates a voltage drop that affects the signal integrity. Loops formed by signal traces and their return paths contribute to inductance.
    *   **Importance:** As per **Ott (Chapter 4: The Loop Area)**, the inductance of the current loop is the dominant factor in high-frequency noise coupling. Minimizing loop area is key to reducing inductance.

### 3.3 Vias and Connectors

*   **Via Inductance:** Vias used to connect different layers introduce significant parasitic inductance due to their physical construction (a plated-through hole).
*   **Connector Inductance:** Connectors, especially high-density ones, can have substantial inductance per pin.

### 3.4 Decoupling Capacitors (Bypass Capacitors)

*   **Purpose:** Placed close to IC power pins to supply instantaneous current demands and shunt high-frequency noise to ground.
*   **Parasitic Inductance (ESL):** All capacitors have parasitic inductance in their leads and internal construction, known as Equivalent Series Inductance (ESL). This inductance limits the capacitor's effectiveness at higher frequencies.
*   **Parasitic Resistance (ESR):** Also have Equivalent Series Resistance (ESR), which contributes to power loss and voltage droop.
*   **Self-Resonant Frequency (SRF):** A capacitor behaves capacitively only up to its SRF, where the inductive and capacitive reactances cancel out. Above SRF, it behaves inductively.
    *   **Formula:** $SRF = \frac{1}{2\pi \sqrt{LC}}$, where $L$ is the ESL and $C$ is the capacitance.

---

## 4. Designing for Low Impedance in the PDN

The goal is to minimize the PDN impedance over the range of frequencies relevant to the digital signals being used.

### 4.1 Using Low-Inductance Power/Ground Planes

**Concept:** Power and ground planes in multilayer PCBs offer significantly lower impedance than discrete traces.
*   **Low Inductance:** The inductance of a plane is very low because the return current can spread out and take the shortest path, minimizing loop area.
    *   **Formula for parallel plates:** $L = \frac{\mu_0 \mu_r d}{W}$, where $d$ is the distance between plates and $W$ is the width of the plane. For typical PCB stackups, this inductance is in the nanohenry range per inch.
*   **Low Resistance:** Thick copper planes provide very low resistance.
*   **Decoupling:** Planes act as large, distributed decoupling capacitors themselves, especially when separated by a thin dielectric.

**Implementation:**
*   **Dedicated Planes:** Use dedicated layers for power and ground.
*   **Close Proximity:** Keep power and ground planes adjacent to each other to minimize dielectric thickness and inductance.
*   **Segmentation:** While dedicated planes are good, sometimes power planes are segmented to isolate different voltage domains or noise sources. Careful design is needed to avoid increasing impedance at the segmentation boundaries.

**Reference (Johnson & Graham, Chapter 4):** Johnson and Graham emphasize the critical role of power and ground planes. They advocate for a "solid ground plane" and ample "power plane" coverage.

### 4.2 Optimizing Decoupling Capacitor Strategy

**Concept:** A single capacitor is not sufficient for all frequencies. A combination of capacitors with different values is needed to cover the entire spectrum of current demands.

**Implementation:**
*   **Place Closely:** Decoupling capacitors must be placed as close as possible to the IC power pins they are serving. This minimizes the inductance of the trace connecting the capacitor to the IC.
*   **Use Multiple Capacitor Values:**
    *   **Large Capacitors (e.g., 10 µF, 100 µF):** Effective at lower frequencies (hundreds of kHz to a few MHz) for bulk decoupling. Often tantalum or electrolytic capacitors.
    *   **Medium Capacitors (e.g., 1 µF):** Good for mid-range frequencies (few MHz to tens of MHz). Often ceramic capacitors.
    *   **Small Capacitors (e.g., 0.1 µF, 0.01 µF):** Crucial for high frequencies (tens of MHz up to GHz range) because they have lower ESL and lower SRF. Ceramic capacitors (e.g., X7R, C0G/NP0) are ideal.
*   **Minimize Lead Inductance:** Use surface-mount (SMD) capacitors. For very high-speed designs, consider **low-ESL capacitors** designed for minimal lead inductance (e.g., copper-foil tabbed capacitors or planar capacitors).
*   **Via Placement:** When placing decoupling capacitors, use multiple vias to connect to the ground plane. This reduces the inductance of the return path. A single via can become an inductive bottleneck.

**Example:** For a high-speed FPGA or CPU, you might place a 10 µF capacitor a few centimeters away from the package, a 1 µF capacitor within a centimeter, and several 0.1 µF capacitors directly adjacent to each power pin.

**Reference (Ott, Chapter 3: Bypass and Decoupling Capacitors):** Ott provides detailed guidance on selecting and placing bypass capacitors, emphasizing the need for a frequency-aware approach. He discusses the importance of ESR and ESL.

### 4.3 Using Low-Inductance Interconnects

**Concept:** When planes are not feasible (e.g., for point-to-point connections or between boards), the choice of interconnect matters.

**Implementation:**
*   **Thick, Wide Traces:** Wider and thicker traces have lower resistance and inductance.
*   **Short Traces:** Minimize trace length wherever possible.
*   **Avoid Sharp Bends:** Use 45-degree bends instead of 90-degree bends to reduce inductance and impedance mismatches.
*   **Controlled Impedance:** For high-speed signals, maintain controlled impedance throughout the transmission line (signal trace and its return path). This is typically done by controlling the trace width, dielectric thickness, and dielectric constant.
*   **Differential Signaling:** Using differential pairs can inherently reduce the susceptibility to common-mode noise on the PDN.

### 4.4 Minimizing Return Path Inductance

**Concept:** The inductance of the PDN is as much about the return path as it is about the supply path. A "good" return path follows the signal path closely, minimizing loop area.

**Implementation:**
*   **Co-located Power and Ground:** Ensure that every signal has a nearby power and ground reference. For signals routed on a specific layer, ensure there's a solid, unbroken ground plane (or plane segment) on an adjacent layer.
*   **Via Stitching:** On PCBs, use numerous ground vias ("via stitching") around the edges and within the plane to ensure continuity and low impedance across the ground plane. This is particularly important at layer transitions.
*   **Avoid Routing over Splits:** Never route a high-speed signal or a power trace over a split in the ground plane. The return current will be forced to take a longer path, increasing inductance.
*   **Connectors:** Ensure that connector pins used for power and ground are adequately sized and have low-inductance connections to the PCB planes.

**Reference (Hall, Hall, McCall, Chapter 3: Power and Ground Delivery):** This book delves deeply into the physics of PDN impedance, including the impact of plane resonances, vias, and decoupling strategies. They stress the importance of a low-impedance path for *both* the supply and return current.

---

## 5. Power System Modeling and Simulation

**Concept:** To verify the effectiveness of a PDN design and identify potential resonance issues, modeling and simulation are essential.

**Tools:**
*   **SPICE Simulators:** Can be used to model the PDN as a circuit, including parasitic R, L, and C components of traces, planes, and capacitors.
*   **Electromagnetic (EM) Simulators:** More accurate for complex geometries, especially for characterizing the inductance of planes, vias, and interconnects.
*   **Network Analyzers:** Used to measure the actual impedance of the PDN on a prototype board.

**Key Metrics:**
*   **Target Impedance:** The maximum acceptable impedance of the PDN, which is determined by the IC's current demand and acceptable voltage droop.
    *   $Z_{max} = \frac{\Delta V_{max}}{I_{peak}}$, where $\Delta V_{max}$ is the maximum allowable voltage drop and $I_{peak}$ is the peak current demand.
*   **Frequency Response:** Plotting the PDN impedance versus frequency to identify peaks (resonances) and ensure it stays below the target impedance across the relevant bandwidth.

**Reference (Dally & Poulton, Chapter 8: Power Distribution):** Dally and Poulton provide a rigorous treatment of power distribution design, including analytical methods and simulation techniques for analyzing PDN impedance.

---

## 6. Impact on Signal Integrity (CO3 Alignment)

**Concept:** The PDN's impedance directly impacts signal integrity. A poorly designed PDN can cause:

*   **Voltage Overshoot and Undershoot:** When current spikes occur, the voltage might drop below the expected level. When the current demand stops, the inductance in the PDN can cause the voltage to "ring" above the nominal supply voltage.
*   **Ground Bounce/VDD Sag:** Simultaneous switching of many outputs can cause the ground reference to rise (ground bounce) or the power rail to drop (VDD sag) due to the PDN's inductance and resistance. This can lead to false clock edges or incorrect logic levels.
*   **Power-Supply Noise:** Current drawn by one IC can inject noise onto the power rails, affecting other ICs sharing the same PDN.

**Using low-impedance distribution lines (planes, optimized decoupling) directly addresses these issues by minimizing the voltage fluctuations experienced by active ICs.**

---

## 7. Summary of Key Points for Low Impedance PDN Design

*   **Power and Ground Planes are King:** Utilize dedicated, adjacent power and ground planes for the lowest possible impedance.
*   **Minimize Loop Area:** This is fundamental for reducing inductance in both signal and power return paths.
*   **Decouple Effectively:** Employ a multi-capacitor strategy (bulk, mid-range, high-frequency) placed as close as possible to IC power pins.
*   **Low-ESL Capacitors:** For critical high-speed components, use capacitors with minimized ESL.
*   **Via Optimization:** Use multiple vias for ground connections of decoupling capacitors and ensure good via stitching for plane integrity.
*   **Trace Width and Thickness:** Use wider and thicker traces for power and ground distribution when planes are not an option.
*   **Simulation is Crucial:** Model and simulate your PDN to predict its impedance characteristics and identify potential problems before fabrication.
*   **Target Impedance:** Understand the peak current demands of your ICs and the acceptable voltage droop to determine the required maximum PDN impedance.

---

## 8. Practice Questions and Exercises

**Question 1 (CO1, CO4):**
Explain why parasitic inductance in a power distribution network is more problematic at high frequencies compared to resistance.

**Answer:**
At high frequencies, the impedance of an inductor ($Z_L = j\omega L$) increases linearly with frequency. This means that even a small inductance can present a very high impedance to the rapidly changing currents drawn by high-speed digital circuits. Resistance ($R$) remains relatively constant with frequency (ignoring skin effect for simplicity). Therefore, inductive voltage drops ($V_L = I \times Z_L$) become dominant and far more significant than resistive drops ($V_R = I \times R$) at high frequencies, leading to voltage fluctuations.

**Question 2 (CO4):**
A high-speed digital chip requires a peak current of 2A with a rise time of 1 ns. If the maximum allowable voltage droop on the power rail is 50 mV, what is the maximum acceptable impedance of the power distribution network at the frequency corresponding to this current demand?

**Answer:**
The frequency corresponding to the rise time can be approximated as $f \approx \frac{1}{\text{rise time}}$. So, $f \approx \frac{1}{1 \text{ ns}} = 1 \text{ GHz}$.
The maximum acceptable impedance ($Z_{max}$) can be calculated using Ohm's Law:
$Z_{max} = \frac{\Delta V_{max}}{I_{peak}}$
$Z_{max} = \frac{50 \text{ mV}}{2 \text{ A}} = \frac{0.050 \text{ V}}{2 \text{ A}} = 0.025 \text{ } \Omega$
The PDN impedance must be less than 0.025 $\Omega$ at the relevant frequencies.

**Question 3 (CO1, CO4):**
Describe the concept of "via stitching" and explain its importance in maintaining a low-impedance ground plane.

**Answer:**
Via stitching refers to the practice of placing numerous vias (plated-through holes) around the perimeter of a ground plane and/or at strategic locations within it. These vias connect the ground plane to other ground planes or the main ground return path on different layers of the PCB.
Its importance in maintaining a low-impedance ground plane is twofold:
1.  **Reduces Inductance:** Each via has parasitic inductance. By using many vias, the total inductance of the ground return path is distributed and significantly reduced. This ensures that current can flow easily back to its source with minimal voltage drop.
2.  **Improves Plane Continuity:** It ensures that the ground plane remains a continuous, low-impedance path for return currents, especially when signals transition between layers or when there are breaks or splits in the plane. This prevents the return current from taking longer, higher-impedance paths.

**Question 4 (CO1, CO4):**
Why is it necessary to use a combination of different capacitor values (e.g., 10µF, 1µF, 0.1µF) for decoupling a high-speed digital IC?

**Answer:**
High-speed digital ICs have complex current demands across a wide range of frequencies.
*   **Large Capacitors (e.g., 10µF):** Effective at lower frequencies (e.g., kHz to a few MHz) for supplying bulk energy and shunting slower noise.
*   **Medium Capacitors (e.g., 1µF):** Bridge the gap for mid-range frequencies.
*   **Small Capacitors (e.g., 0.1µF):** Crucial for high frequencies (tens of MHz to GHz) because they have lower ESL (Equivalent Series Inductance) and thus a higher self-resonant frequency (SRF). These small capacitors are needed to supply the very fast, instantaneous current spikes that occur when logic gates switch rapidly. A single capacitor cannot effectively provide decoupling across this entire spectrum. The combination ensures that the PDN impedance is kept low across all relevant frequencies.

**Question 5 (CO3, CO4):**
How does a high-impedance power distribution network contribute to "ground bounce" or "VDD sag"?

**Answer:**
*   **VDD Sag:** When many IC outputs switch simultaneously, they draw a large, brief current spike from the power supply. If the PDN has significant resistance and inductance, this current flow causes a voltage drop ($\Delta V = I \times Z_{PDN}$). This voltage drop means the voltage at the IC pins is momentarily lower than the regulated supply voltage, leading to "VDD sag."
*   **Ground Bounce:** Similarly, the return current for these switching outputs flows through the PDN's ground connections. If these ground paths have significant inductance, the rapid current flow creates a voltage drop across the ground path ($V_{ground\_drop} = I \times Z_{ground\_PDN}$). This means the ground reference point at the IC is no longer at true ground potential but is slightly elevated. This elevation is perceived as "ground bounce."

In both cases, a low-impedance PDN is essential to minimize these voltage fluctuations by ensuring $I \times Z_{PDN}$ is kept very small.

---

## 9. Important Points to Remember

*   **Frequency is Key:** The impedance of the PDN must be considered across the entire frequency spectrum relevant to your digital signals (related to their rise/fall times).
*   **Inductance is the Enemy:** While resistance matters, parasitic inductance is often the limiting factor in high-speed PDN design due to its frequency-dependent nature.
*   **Loop Area Minimization:** The smaller the loop formed by the power and return current path, the lower the inductance.
*   **Decoupling is a System:** Don't rely on a single capacitor. A well-designed decoupling strategy uses multiple capacitor values strategically placed.
*   **Planes are your Best Friend:** For robust PDNs, prioritize the use of solid power and ground planes.
*   **Return Paths Matter:** A good PDN requires both a low-impedance supply path AND a low-impedance return path.

---
This study note covers the fundamentals of using low-impedance distribution lines within the context of maintaining a stable voltage reference in high-speed digital design. It aligns with the learning outcomes and course objectives by explaining the underlying principles, design considerations, and practical implementation strategies, referencing the provided textbooks.