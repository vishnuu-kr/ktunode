---
title: "Resistor selection"
subject: "HIGH SPEED DIGITAL DESIGN"
module: "Module 3: Transmission Lines: Problems of point to point wiring"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feb7a"
status: "completed"
scrapedAt: "2026-05-23T17:57:26.530Z"
---
# HIGH SPEED DIGITAL DESIGN

## Module 3: Transmission Lines: Problems of Point-to-Point Wiring

### Topic: Resistor Selection

---

**Learning Outcomes:**

*   Understand the role and importance of resistors in high-speed digital design, especially concerning signal integrity.
*   Identify the key parameters to consider when selecting resistors for termination and other applications in high-speed circuits.
*   Analyze the impact of different resistor types and their characteristics on signal propagation.
*   Apply resistor selection principles to solve common signal integrity problems in point-to-point wiring.

---

**Course Outcomes Alignment:**

*   **CO1 (K2):** This topic directly addresses the fundamentals of how passive circuit elements (resistors) affect signal propagation by controlling reflections and damping.
*   **CO3 (K3):** Understanding resistor selection is crucial for analyzing the effects of wiring (impedance mismatch) and load on signal propagation.

---

### 1. Introduction to Resistors in High-Speed Digital Design

In high-speed digital circuits, signals travel through interconnects which, at sufficiently high frequencies or long lengths, behave as transmission lines. Mismatches in impedance along these transmission lines cause signal reflections, leading to signal degradation, timing jitter, and potential errors. Resistors play a critical role in mitigating these issues.

**Key Concept:** **Impedance Matching**
The primary goal of using resistors in high-speed digital design is to achieve impedance matching, thereby minimizing signal reflections.

**Key Concept:** **Signal Integrity**
Resistors are essential tools for maintaining signal integrity by controlling signal reflections, damping oscillations, and setting voltage levels.

---

### 2. The Problem of Point-to-Point Wiring: Reflections

When a signal travels along a transmission line and encounters a change in impedance, a portion of the signal energy is reflected back towards the source. This phenomenon is governed by the reflection coefficient.

**Formula:** Reflection Coefficient ($\Gamma$) at the load:
$\Gamma = \frac{Z_L - Z_0}{Z_L + Z_0}$

Where:
*   $Z_L$: Load impedance
*   $Z_0$: Characteristic impedance of the transmission line

**Problems Caused by Reflections:**

*   **Ringing:** Oscillations at the receiver due to multiple reflections.
*   **Overshoot/Undershoot:** Exceeding or falling below intended voltage levels.
*   **Increased Rise/Fall Times:** Slowing down the signal transitions.
*   **Timing Jitter:** Uncertainty in the arrival time of the signal edge.
*   **Electromagnetic Interference (EMI):** Reflected signals can radiate energy.

**Reference:** Howard Johnson & Martin Graham, *High Speed Digital Design: A Handbook of Black Magic*, Chapter 2 discusses the fundamentals of transmission lines and reflections.

---

### 3. Resistor Selection for Termination

Termination resistors are strategically placed at the ends of transmission lines to absorb incident signal energy and prevent reflections.

#### 3.1. Types of Termination

*   **Parallel Termination (or Thevenin Termination):** A resistor is placed in parallel with the transmission line at the receiver end.
    *   **How it works:** The resistor value is chosen to match the characteristic impedance of the transmission line ($Z_0$). This presents a matched impedance to the signal as it arrives at the receiver, preventing reflections from the open end.
    *   **Circuit:** Typically a resistor connected from the signal line to a voltage source or ground.
    *   **Value:** $R_{term} = Z_0$
    *   **Advantages:** Effective in preventing reflections.
    *   **Disadvantages:** Draws current from the driver, increasing power consumption. The termination voltage source needs to be carefully chosen.

    **Example:** If a transmission line has a characteristic impedance ($Z_0$) of 50 Ohms, a 50 Ohm resistor is used for parallel termination.

*   **Series Termination:** A resistor is placed in series with the signal source.
    *   **How it works:** The resistor is placed at the driver output. Its value is chosen to match the impedance of the transmission line ($Z_0$). This matches the source impedance to the line impedance, preventing reflections from the source end. It also helps to damp oscillations.
    *   **Circuit:** A resistor placed directly after the driver output, before the transmission line.
    *   **Value:** $R_{series} = Z_0 - R_{driver}$ (where $R_{driver}$ is the driver's effective output impedance). Often, $R_{driver}$ is small, so $R_{series} \approx Z_0$.
    *   **Advantages:** Lowers power consumption as current is only drawn during signal transitions. Can be effective in damping overshoot.
    *   **Disadvantages:** Can cause a voltage drop at the receiver, potentially falling below logic thresholds for slower drivers or longer lines. Requires the driver to have a low impedance.

    **Example:** For a 50 Ohm transmission line and a driver with an output impedance of 10 Ohms, a series resistor of approximately 40 Ohms would be used.

*   **AC Termination:** Uses a series combination of a resistor and a capacitor.
    *   **How it works:** The resistor matches the characteristic impedance at DC (or low frequencies), while the capacitor blocks the DC component of the driver's output. This is useful for preventing DC bias issues and reducing DC power consumption.
    *   **Circuit:** A resistor and capacitor in series, connected to the signal line.
    *   **Value:** $R_{AC} = Z_0$. The capacitor value is chosen based on the desired cutoff frequency.
    *   **Advantages:** Blocks DC offset, reduces power consumption.
    *   **Disadvantages:** Not effective for signals with significant low-frequency content.

*   **Diode Termination:** Uses diodes to clamp voltage levels.
    *   **How it works:** Diodes are placed in parallel with the transmission line, with their cathodes connected to a termination voltage and anodes to ground (or vice-versa). They conduct only when the signal voltage exceeds the termination voltage, effectively clamping the signal.
    *   **Advantages:** Very low power consumption.
    *   **Disadvantages:** Can introduce non-linearity and distortion. Not ideal for all applications.

#### 3.2. Choosing the Right Termination

The choice of termination depends on several factors:

*   **Driver Strength and Impedance:** Series termination requires a strong driver.
*   **Receiver Sensitivity:** Parallel termination can cause a voltage drop if the termination voltage is too low.
*   **Power Consumption:** Series and diode termination are more power-efficient.
*   **Signal Frequency Content:** AC termination is suitable for AC-coupled signals.
*   **Layout Complexity:** Parallel termination is generally simpler to implement.

**Important Point:** Most modern high-speed interfaces (like PCIe, USB, DDR) specify termination requirements as part of their standard. Always consult the relevant interface specification.

**Reference:** Howard Johnson & Martin Graham, *High Speed Digital Design*, Chapter 5, discusses various termination schemes and their effectiveness. Henry Ott's *Noise Reduction Techniques in Electronic Systems* also provides detailed coverage of termination strategies.

---

### 4. Resistor Characteristics for High-Speed Design

Selecting the correct resistor goes beyond just matching impedance. Several physical and electrical characteristics are critical.

#### 4.1. Tolerance

*   **Definition:** The permissible deviation from the nominal resistance value.
*   **Impact:** A tighter tolerance (e.g., 1% or 0.5%) is crucial for accurate impedance matching. Wider tolerances can lead to impedance mismatches and increased reflections.
*   **Example:** A 50 Ohm transmission line requires a 50 Ohm resistor. If the resistor has a tolerance of 5%, its actual value could be anywhere between 47.5 Ohms and 52.5 Ohms, leading to significant reflections.

#### 4.2. Temperature Coefficient of Resistance (TCR)

*   **Definition:** How much the resistance changes with temperature.
*   **Impact:** In systems with significant temperature variations, a low TCR is essential to maintain impedance matching across the operating temperature range.
*   **Example:** A resistor with a high TCR might change its resistance by 0.1% per degree Celsius. Over a 50°C temperature change, its value could shift by 5%, potentially causing reflections.

#### 4.3. Power Rating

*   **Definition:** The maximum power the resistor can dissipate without exceeding its temperature limits.
*   **Impact:** The resistor must be able to handle the power dissipated during normal operation. Under-specified power ratings can lead to resistor failure.
*   **Calculation:** $P = I^2 R$ or $P = \frac{V^2}{R}$. The current ($I$) is typically the signal current, and voltage ($V$) is related to the signal amplitude.

#### 4.4. Parasitics (Inductance and Capacitance)

*   **Definition:** Real-world resistors are not ideal. They have parasitic inductance and capacitance due to their physical construction and leads.
*   **Impact:** These parasitics can significantly alter the effective impedance of the resistor at high frequencies, rendering them ineffective for termination.
*   **Types of Resistors and Parasitics:**
    *   **Wirewound Resistors:** Generally have high parasitic inductance, making them unsuitable for high-speed applications.
    *   **Carbon Composition Resistors:** Can exhibit non-linear behavior and are generally not preferred.
    *   **Metal Film Resistors:** Offer good performance and are commonly used.
    *   **SMD (Surface Mount Device) Chip Resistors:** Designed for high-frequency performance. They typically have very low parasitic inductance and capacitance.
        *   **MELF (Metal Electrode Leadless Face) Resistors:** Cylindrical devices with end caps. Can have higher parasitics than chip resistors.
        *   **SMD Chip Resistors (e.g., 0805, 0603, 0402):** These are preferred for high-speed designs due to their low parasitics. The smaller the package size, the lower the parasitics.

**Important Point:** For high-speed termination, SMD chip resistors with low parasitics are the preferred choice. Look for resistors specifically designed for high-frequency applications.

**Reference:** Stephen H. Hall, Garrett W. Hall, James A. McCall, *High-Speed Digital System Design*, Chapter 3, discusses the impact of parasitic elements in interconnects and components.

---

### 5. Resistor Selection for Other Applications

Besides termination, resistors are used in other critical areas in high-speed digital design.

#### 5.1. Pull-up and Pull-down Resistors

*   **Purpose:** To define a known logic state for an input pin when it is not actively driven.
*   **High-Speed Considerations:**
    *   **Value Selection:** While standard pull-up/pull-down values (e.g., 1kΩ to 10kΩ) are common, in high-speed designs, these values might be too high. High resistance can lead to increased susceptibility to noise and slower signal transitions due to the RC time constant formed with parasitic capacitance.
    *   **Lower Values:** For faster rise/fall times and better noise immunity, lower resistance values (e.g., 470Ω, 220Ω, or even lower) are often preferred, provided they don't draw excessive current.
    *   **Consider Driver Capability:** Ensure the driver can sink/source the current required by the lower resistance pull-up/pull-down.
    *   **Source Termination Interaction:** The value of pull-up/pull-down resistors can affect the effective impedance seen by the driver and the termination if they are connected to the same net.

#### 5.2. Current Limiting Resistors

*   **Purpose:** To protect sensitive components from excessive current.
*   **High-Speed Considerations:**
    *   **Low Resistance Needed:** To minimize signal degradation, current limiting resistors in high-speed signal paths should have very low resistance values.
    *   **Parasitics:** Again, low parasitic inductance and capacitance are crucial.
    *   **Power Dissipation:** Ensure the resistor can handle the power.

#### 5.3. Series Damping Resistors

*   **Purpose:** To reduce ringing on signal lines, especially when reflections are difficult to eliminate completely with end termination.
*   **Location:** Placed near the driver or at intermediate points along the transmission line.
*   **Value:** Typically a few ohms (e.g., 10Ω to 50Ω).
*   **Impact:** Introduces some loss to the signal, so the value must be chosen carefully to reduce ringing without unduly degrading the signal amplitude or shape.
*   **Reference:** Howard Johnson & Martin Graham's book provides detailed examples of using series damping resistors.

---

### 6. Resistor Selection Workflow and Best Practices

1.  **Identify the Application:** Is it for termination, pull-up/down, or damping?
2.  **Determine the Impedance:** For termination, this is the characteristic impedance ($Z_0$) of the transmission line.
3.  **Choose the Termination Scheme:** Based on driver capability, power budget, and noise sensitivity.
4.  **Select Resistor Type:** Prioritize SMD chip resistors with low parasitics for termination and high-speed paths.
5.  **Specify Tolerance:** Aim for 1% or tighter for impedance matching.
6.  **Consider Power Rating:** Calculate the expected power dissipation and select a resistor with a sufficient rating (with margin).
7.  **Check TCR:** If operating over a wide temperature range, choose a resistor with a low TCR.
8.  **Evaluate Parasitics:** Consult datasheets for parasitic inductance and capacitance, especially for high-frequency applications. Smaller package sizes generally have lower parasitics.
9.  **Simulate:** Use electromagnetic simulation tools and SPICE models to verify the performance of the chosen resistor in the circuit.
10. **Consult Standards:** For standardized interfaces, always adhere to the specified component requirements.

---

### 7. Practice Questions and Exercises

**Question 1:**
You have a high-speed digital signal routed on a PCB trace with a characteristic impedance of 60 Ohms. At the receiver end, you are experiencing significant ringing.

*   a) What type of termination would you most likely use to mitigate this ringing?
*   b) What value resistor would you select for this termination?
*   c) What physical characteristics of the resistor are most critical for this application?

**Answer 1:**
*   a) Parallel termination is a common and effective method to mitigate ringing by matching the impedance at the receiver.
*   b) You would select a resistor with a value of 60 Ohms to match the characteristic impedance of the transmission line.
*   c) The most critical physical characteristics are:
        *   **Tolerance:** A tight tolerance (e.g., 1%) to ensure accurate impedance matching.
        *   **Parasitics:** Low parasitic inductance and capacitance, favoring SMD chip resistors (e.g., 0603 or smaller).
        *   **Power Rating:** Sufficient to handle the signal power without overheating.

**Question 2:**
A microcontroller's input pin, with a significant parasitic capacitance of 20pF, is left unconnected.

*   a) What type of resistor would you use to ensure the pin is always in a defined logic state?
*   b) If you choose a 10kΩ pull-up resistor, estimate the approximate rise time of the signal on this pin due to the RC time constant.
*   c) Would a lower value pull-up resistor be beneficial in a high-speed context? Explain why.

**Answer 2:**
*   a) A pull-up resistor would be used to ensure the pin is in a defined logic high state when not actively driven.
*   b) The RC time constant is approximately $\tau = R \times C = 10 \times 10^3 \Omega \times 20 \times 10^{-12} F = 200 \times 10^{-9} s = 0.2 \mu s$. A typical approximation for a signal to reach its final value is 5 time constants. So, rise time $\approx 5 \times 0.2 \mu s = 1 \mu s$. (Note: This is a simplified calculation; actual rise time depends on the driving source and threshold levels).
*   c) Yes, a lower value pull-up resistor would be beneficial in a high-speed context. A lower resistance reduces the RC time constant ($ \tau = R \times C $), leading to faster signal rise times and improved noise immunity. However, this comes at the cost of increased power consumption when the pin is driven low.

**Question 3:**
You are designing a high-speed interface operating at 1 GHz. You need to terminate a 50 Ohm microstrip line.

*   a) What are the primary concerns regarding resistor parasitics at this frequency?
*   b) What type of resistor package is generally preferred for such applications, and why?

**Answer 3:**
*   a) At 1 GHz, parasitic inductance and capacitance can significantly alter the effective impedance of a resistor. Parasitic inductance can cause the resistor to appear as an inductive element, leading to impedance mismatch and reflections, especially at higher frequencies. Parasitic capacitance can shunt the signal, affecting its amplitude and transition times.
*   b) SMD (Surface Mount Device) chip resistors are generally preferred. Their compact construction and terminal geometry result in significantly lower parasitic inductance and capacitance compared to leaded resistors or older SMD package types. Smaller package sizes (e.g., 0402, 0603) offer the lowest parasitics.

---

### 8. Important Points to Remember

*   **Impedance Matching is Key:** Resistors are fundamental for achieving impedance matching and minimizing reflections.
*   **Termination Schemes:** Understand the trade-offs between series, parallel, AC, and other termination methods.
*   **Parasitics Matter:** At high frequencies, parasitic inductance and capacitance of resistors can be more critical than their nominal resistance value.
*   **SMD Chip Resistors:** Prefer SMD chip resistors with low parasitics for high-speed applications.
*   **Tolerance and TCR:** Tight tolerance and low TCR are important for consistent performance.
*   **Power Dissipation:** Always ensure the resistor's power rating is adequate.
*   **Consult Standards:** For standardized interfaces, always follow the recommended component specifications.
*   **Simulation is Crucial:** Always simulate your designs to verify the performance of chosen resistors.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
