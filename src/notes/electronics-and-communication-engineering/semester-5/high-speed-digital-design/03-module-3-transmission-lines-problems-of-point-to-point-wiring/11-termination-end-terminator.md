---
title: "Termination: End terminator"
subject: "HIGH SPEED DIGITAL DESIGN"
module: "Module 3: Transmission Lines: Problems of point to point wiring"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feb76"
status: "completed"
scrapedAt: "2026-05-23T17:57:23.783Z"
---
# High Speed Digital Design: Module 3 - Transmission Lines: Problems of Point-to-Point Wiring

## Topic: Termination: End Terminator

This module focuses on the challenges of transmitting digital signals at high speeds over point-to-point wiring and the crucial role of termination in mitigating these issues. We will delve into the concept of end termination, its purpose, and various methods.

---

### 1. Introduction to Signal Integrity Issues in Point-to-Point Wiring (CO1, CO3)

At high speeds, simple point-to-point wiring acts more like a transmission line than a simple connection. This introduces signal integrity problems due to:

*   **Reflections:** When a signal encounters an impedance mismatch along its path (e.g., at the source, destination, or discontinuities), a portion of the signal energy is reflected back towards the source.
    *   **Cause:** Differences in characteristic impedance ($Z_0$) of the transmission line and the impedances of the source driver and the load.
    *   **Consequences:**
        *   **Ringing:** Oscillations at the receiving end due to the superposition of incident and reflected waves.
        *   **Overshoot/Undershoot:** Exceeding the valid logic levels, potentially leading to false triggering or device damage.
        *   **Reduced Noise Margins:** Reflected signals can interfere with the intended signal, making it harder for the receiver to distinguish between logic states.
        *   **Electromagnetic Interference (EMI):** Persistent ringing can radiate electromagnetic energy, interfering with other parts of the system.
*   **Signal Dispersion:** Different frequency components of the signal travel at slightly different speeds, causing the signal pulse to spread out and become distorted.
*   **Attenuation:** Signal strength decreases as it travels along the transmission line due to resistive losses in the conductor and dielectric losses.

**Key Concept:** **Characteristic Impedance ($Z_0$)**: The impedance of a transmission line that a traveling wave sees. It is determined by the physical properties of the line (e.g., conductor width, spacing, dielectric material).

**Textbook Reference:** Johnson & Graham, Chapter 2, "Transmission Line Fundamentals," extensively discusses the behavior of signals on transmission lines and the concept of characteristic impedance.

---

### 2. The Need for Termination (CO3)

Termination is the process of connecting a resistor (or a combination of resistors and capacitors) at the end of a transmission line to match its characteristic impedance. The primary goal of termination is to **absorb the incident signal energy** and **prevent reflections**.

**Why is termination essential?**

*   **To prevent reflections:** By presenting a resistive load equal to the transmission line's characteristic impedance ($Z_0$) at the receiving end, the incident signal energy is dissipated in the resistor rather than being reflected back.
*   **To improve signal integrity:** This eliminates ringing and overshoot/undershoot, resulting in cleaner signals at the receiver.
*   **To ensure reliable operation:** Reduced signal distortion leads to more reliable data transfer and fewer errors.

**Important Point to Remember:** The driver (source) and receiver (load) impedances are often not equal to the transmission line's characteristic impedance. This mismatch necessitates termination.

**Textbook Reference:** Johnson & Graham, Chapter 2, "Transmission Line Fundamentals," and Chapter 5, "Termination," explain the fundamental reasons for termination and its impact on signal integrity.

---

### 3. End Termination Techniques (CO1, CO3)

End termination refers to placing a termination resistor at the **receiving end** of the transmission line. This is the most common and effective method for dealing with reflections.

#### 3.1. Series Termination (also known as Source Termination)

While this topic is about *end* terminators, it's important to briefly understand the contrast. Series termination is placed at the **driver (source) end**. It uses a resistor in series with the driver output.

*   **How it works:** The series resistor matches the driver's output impedance to the transmission line's characteristic impedance. When the signal propagates to the end and reflects, the series resistor absorbs the reflected energy when it arrives back at the source.
*   **Pros:** Simple, effective against reflections.
*   **Cons:** Can reduce the signal amplitude at the receiver if not carefully chosen, potentially impacting noise margins. It does not help with reflections originating from impedance mismatches *within* the transmission line itself.

**Textbook Reference:** Johnson & Graham, Chapter 5, "Termination," discusses both series and parallel termination methods.

#### 3.2. Parallel Termination (also known as Load Termination)

This is the primary focus of our topic. A resistor (or resistor network) is placed across the transmission line at the receiving end, connected between the signal trace and ground or power.

**3.2.1. The Simple Parallel Terminator (The "Thevenin" Terminator)**

*   **Configuration:** A single resistor ($R_{term}$) connected between the signal trace and ground at the receiver.
*   **Impedance Matching:** For optimal termination, $R_{term}$ should be equal to the characteristic impedance of the transmission line ($R_{term} = Z_0$).
*   **How it works:** When the incident signal arrives at the receiver, it sees the termination resistor. If $R_{term} = Z_0$, the resistor absorbs the signal energy, preventing reflections.
*   **Pros:** Simple to implement, effectively absorbs reflections.
*   **Cons:**
    *   **DC Loading:** This resistor draws DC current from the driver, increasing power consumption.
    *   **AC Loading:** It also loads the signal at all frequencies, which can attenuate faster edges and reduce signal amplitude, especially if the termination resistor is significantly lower than the driver's output impedance.
    *   **Driver Strength:** The driver must be strong enough to drive the combined impedance of the termination resistor and the transmission line.
    *   **Rise Time Degradation:** A termination resistor too small can slow down the signal's rise time.

**Example:** A 50-ohm transmission line requires a 50-ohm termination resistor.

**Course Outcome Alignment:** CO1 (Illustrate effects of passive elements), CO3 (Analyze effects of wiring, source, and load). The parallel terminator is a passive element that significantly affects signal propagation by mitigating reflection issues caused by impedance mismatches between the line and the load.

**Textbook Reference:** Johnson & Graham, Chapter 5, "Termination," details the simple parallel termination and its advantages and disadvantages.

#### 3.2.2. Thevenin Termination (Voltage Divider Termination)

*   **Configuration:** Two resistors, $R_1$ and $R_2$, connected in series between the signal trace and ground. $R_1$ is connected to the signal trace, and $R_2$ is connected to ground. The junction between $R_1$ and $R_2$ is the connection point to the transmission line.
*   **Impedance Matching:** Thevenin termination aims to provide the correct impedance at DC and AC while also setting the correct DC voltage for the receiver.
    *   The equivalent resistance seen by the transmission line is $R_{Th} = \frac{R_1 \times R_2}{R_1 + R_2}$. For optimal termination, $R_{Th}$ should be equal to $Z_0$.
    *   The DC voltage at the termination point is $V_{DC} = V_{supply} \times \frac{R_2}{R_1 + R_2}$. This can be used to bias the receiver's input.
*   **How it works:** Provides an impedance match to the transmission line while also defining a specific DC voltage level.
*   **Pros:**
    *   Reduces DC power consumption compared to a single resistor to ground, as current flows through both resistors.
    *   Allows for setting a specific DC voltage level at the receiver.
    *   Can provide a better impedance match across a wider range of frequencies than a single resistor if designed correctly.
*   **Cons:**
    *   More complex to implement than a single resistor.
    *   Requires a specific supply voltage.
    *   The values of $R_1$ and $R_2$ need careful calculation based on $Z_0$ and the desired DC bias.

**Example:** To terminate a 50-ohm line with a 3.3V supply and a desired 1.65V DC bias at the receiver:
    *   We need $\frac{R_2}{R_1 + R_2} = \frac{1.65}{3.3} = 0.5$. This implies $R_1 = R_2$.
    *   We also need $\frac{R_1 \times R_2}{R_1 + R_2} = 50 \Omega$.
    *   If $R_1 = R_2$, then $\frac{R_1^2}{2R_1} = \frac{R_1}{2} = 50 \Omega$. So, $R_1 = R_2 = 100 \Omega$.

**Textbook Reference:** Johnson & Graham, Chapter 5, "Termination," and Hall, Hall, McCall, Chapter 4, "Transmission Line Effects and Termination," discuss Thevenin termination in detail.

#### 3.2.3. Parallel RC Termination

*   **Configuration:** A resistor ($R_{term}$) in series with a capacitor ($C_{term}$) connected to ground at the receiver.
*   **Impedance Matching:**
    *   At DC, the capacitor acts as an open circuit, meaning there is no DC loading. The effective termination impedance is infinite.
    *   At high frequencies, the capacitor's impedance ($X_C = \frac{1}{2\pi fC}$) becomes small, and the termination impedance approaches $R_{term}$.
*   **How it works:** The resistor provides impedance matching for the fast-changing signal edges, while the capacitor isolates the receiver from DC loading.
*   **Pros:**
    *   No DC loading on the driver.
    *   Effective for high-speed signals.
*   **Cons:**
    *   The capacitor's impedance varies with frequency. If the capacitor is too large or the signal edges are not fast enough, it can still attenuate the signal.
    *   The resistor value is critical. If $R_{term}$ is too low, it can still cause signal amplitude reduction and rise time degradation.

**Example:** For a 50-ohm line, a 50-ohm resistor would be used. The capacitor value would be chosen such that its impedance at the dominant frequencies of the signal is negligible compared to the resistor. A common starting point might be a capacitor whose impedance is 1/10th of the termination resistor at the highest frequency of interest.

**Course Outcome Alignment:** CO1, CO3. This termination method showcases how passive elements (resistor and capacitor) interact to achieve desired signal characteristics, illustrating the effects of wiring, source, and load.

**Textbook Reference:** Johnson & Graham, Chapter 5, "Termination," and Ott, Chapter 3, "Noise Coupling and Filtering," mention the use of RC networks for termination and filtering.

#### 3.2.4. Diode Termination (Diode Clamping)

*   **Configuration:** Diodes are connected between the signal trace and the power/ground rails at the receiver.
*   **How it works:** Diodes act as voltage-dependent loads. When the signal voltage exceeds the diode's forward voltage drop, the diode conducts and clamps the voltage to a safe level.
*   **Pros:**
    *   Provides a degree of protection against overvoltage.
    *   Minimal impact on signal integrity for signals within the intended voltage range.
*   **Cons:**
    *   **Not true termination:** Does not provide impedance matching and can introduce reflections itself.
    *   **Non-linear behavior:** The impedance is not constant, making analysis and prediction of signal behavior difficult.
    *   **Can introduce distortion:** The switching of diodes can cause signal distortion.
    *   **Limited speed:** Diodes have switching speed limitations.

**Important Note:** Diode termination is generally not recommended for critical high-speed signal paths as it sacrifices signal integrity for voltage clamping. It's more of a protective measure.

**Textbook Reference:** While not a primary termination technique for impedance matching, diode clamping is discussed in the context of overvoltage protection in many signal integrity texts, including Ott.

---

### 4. Choosing the Right End Terminator (CO3)

The choice of end termination depends on several factors:

*   **Transmission Line Impedance ($Z_0$):** The primary factor in determining the resistor value.
*   **Driver Output Impedance:** The driver must be able to drive the termination impedance without excessive voltage drop or signal degradation.
*   **Receiver Input Impedance:** The termination should not excessively load the receiver.
*   **Signal Speed/Edge Rates:** Faster edges require more precise termination.
*   **Power Consumption:** DC loading from termination resistors can be a concern in low-power applications.
*   **Complexity and Cost:** Simpler solutions are often preferred if they meet performance requirements.
*   **DC Bias Requirements:** Some applications may require a specific DC voltage level at the receiver.

**Rule of Thumb:** If the round-trip propagation delay of the trace is longer than the rise time of the signal, termination is generally required. A common guideline is that if the trace length is more than 1/5th of a wavelength of the highest frequency component of the signal, termination is needed. A simpler heuristic: if the trace length is more than 6 inches for typical high-speed signals, consider termination.

**Textbook Reference:** Johnson & Graham, Chapter 5, "Termination," provides detailed guidance on selecting termination schemes.

---

### 5. Examples and Case Studies (CO3)

**Scenario 1: Driving a Long Trace with Fast Edges**

*   **Problem:** A FPGA output driving a 10-inch trace on a PCB to a high-speed serializer. The trace impedance is 50 ohms. The FPGA has a 10-ohm output impedance, and the serializer has a 100-ohm differential input impedance (effectively 50 ohms per leg when driven differentially).
*   **Analysis:** The significant length of the trace and the fast edge rates from the FPGA will cause reflections if the line is not terminated. The mismatch between the driver's 10-ohm impedance and the 50-ohm trace, and the mismatch between the 50-ohm trace and the receiver's 50-ohm impedance, will cause reflections.
*   **Solution:** **Parallel termination** at the receiver with a 50-ohm resistor to ground is the most effective solution. This will match the transmission line impedance, absorbing reflections. The FPGA driver needs to be strong enough to drive the 50-ohm load. If the driver is not strong enough, series termination at the driver might be considered in conjunction with parallel termination, but this requires careful analysis.

**Scenario 2: Short Trace with Slow Edges**

*   **Problem:** A microcontroller output driving a 2-inch trace to an LED driver. The trace impedance is not well-controlled but is likely around 70-80 ohms. The microcontroller has a moderate output impedance, and the LED driver has a high input impedance.
*   **Analysis:** For very short traces and slow edge rates, reflections might not be a significant issue. The round-trip delay might be less than the signal rise time.
*   **Solution:** Termination might not be strictly necessary. However, to ensure robustness, a **simple parallel terminator** (e.g., 75-ohm resistor to ground) at the receiver can still be beneficial without introducing excessive loading.

---

### 6. Practice Questions and Exercises

**Question 1:** What is the primary purpose of termination in high-speed digital design?
**Answer:** To prevent signal reflections by matching the impedance of the transmission line at the receiving end.

**Question 2:** Describe the main drawback of using a simple parallel terminator (a single resistor to ground) on a transmission line.
**Answer:** It draws DC current from the driver and can attenuate signal edges if the resistor value is too low or not properly chosen for the signal's frequency content.

**Question 3:** A 60-ohm transmission line needs to be terminated at the receiver. Which termination technique and resistor value would be most appropriate for general high-speed signal integrity?
**Answer:** Parallel termination with a 60-ohm resistor connected between the signal trace and ground at the receiver.

**Question 4:** You are designing a system with a 50-ohm microstrip transmission line and a CMOS receiver. The receiver requires a DC bias of 1.8V, and the system operates from a 3.3V supply. What type of termination would you consider, and what would be the approximate resistor values?
**Answer:** Thevenin termination.
*   For a 50-ohm line: $\frac{R_1 \times R_2}{R_1 + R_2} = 50 \Omega$.
*   For a 1.8V bias from a 3.3V supply: $\frac{R_2}{R_1 + R_2} = \frac{1.8V}{3.3V} \approx 0.545$.
This implies $R_2 \approx 0.545 (R_1 + R_2)$, so $0.455 R_2 \approx 0.545 R_1$, or $R_2 \approx 1.2 R_1$.
Substituting this into the impedance equation: $\frac{R_1 \times (1.2 R_1)}{R_1 + 1.2 R_1} = \frac{1.2 R_1^2}{2.2 R_1} = \frac{1.2}{2.2} R_1 = 50 \Omega$.
$R_1 \approx \frac{50 \times 2.2}{1.2} \approx 91.7 \Omega$. Let's use standard values like $R_1 = 91 \Omega$.
Then $R_2 \approx 1.2 \times 91 \Omega \approx 109.2 \Omega$. Let's use $R_2 = 110 \Omega$.
Check impedance: $\frac{91 \times 110}{91 + 110} = \frac{10010}{201} \approx 49.8 \Omega$.
Check bias: $3.3V \times \frac{110}{91 + 110} = 3.3V \times \frac{110}{201} \approx 3.3V \times 0.547 \approx 1.805V$.
So, $R_1 = 91 \Omega$ and $R_2 = 110 \Omega$ would be suitable Thevenin termination components.

**Question 5:** When is termination generally considered necessary for point-to-point wiring?
**Answer:** When the round-trip propagation delay of the trace is shorter than the rise time of the signal, or when the trace length is a significant fraction (e.g., > 1/5th wavelength) of the dominant signal frequencies. A practical rule of thumb is for traces longer than about 6 inches for typical high-speed digital signals.

---

### 7. Important Points to Remember

*   **Reflections are the enemy:** They degrade signal quality and can cause malfunctions.
*   **Impedance Mismatch is the cause of reflections:** Termination aims to eliminate these mismatches.
*   **End termination is crucial:** It's typically placed at the receiver to absorb the incident signal energy.
*   **Parallel termination ($R_{term} = Z_0$) is the most common:** It directly matches the transmission line impedance.
*   **Consider power, signal integrity, and complexity:** When choosing a termination scheme.
*   **Always check the driver's capability:** Ensure it can drive the termination impedance.
*   **Longer traces and faster edges require more careful termination.**

---

### 8. Alignment with Course Outcomes

*   **CO1: Illustrate the fundamentals of the effects of passive circuit elements on signal propagation in high speed digital circuits (Knowledge Level: K2)**
    *   This module extensively covers how passive components like termination resistors and capacitors, when used in transmission lines, significantly alter signal propagation by managing reflections and impedance.
*   **CO2: Describe the high speed properties of logic gates and the measurement techniques at high frequencies (Knowledge Level: K2)**
    *   While not directly about logic gate properties, understanding termination is essential for correctly measuring high-speed signals from logic gates without artifacts caused by reflections.
*   **CO3: Analyze the effects of wiring, source, and load on the signal propagation from one end of a circuit to the other end (Knowledge Level: K3)**
    *   This is the core of the module. We analyze how the transmission line (wiring), the driver (source), and the receiver (load) interact, leading to reflections, and how end terminators (part of the load interface) mitigate these effects.
*   **CO4: Design the power supply and clock distribution circuits for high speed devices (Knowledge Level: K3)**
    *   Although this module focuses on signal paths, the understanding of impedance matching and termination is also relevant to the design of clock distribution networks, where impedance control and minimizing reflections are critical for timing accuracy.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 9. References Used and Further Reading

*   **High Speed Digital Design: A Handbook of Black Magic** by Howard Johnson & Martin Graham (Prentice Hall PTR, Second Edition, 2008) - Chapters 2 and 5 are primary references for transmission line fundamentals and termination.
*   **Noise Reduction Techniques in Electronic Systems** by Henry W. Ott (John Wiley & Sons, Second Edition, 1988) - Chapters on transmission lines and termination are relevant.
*   **High-Speed Digital System Design—A Handbook of Interconnect Theory and Design Practices** by Stephen H. Hall, Garrett W. Hall, James A. McCall (John Wiley & Sons, First Edition, 2000) - Chapter 4 specifically addresses transmission line effects and termination.
*   **Digital Systems Engineering** by William S. Dally & John W. Poulton (Cambridge University Press, First Edition, 1998) - Discusses transmission lines and signal integrity principles.
*   **Digital Integrated Circuits: A Design perspective** by Jan M, Rabaey (Pearson, Second Edition, 2003) - Provides context on driver and receiver characteristics influencing termination needs.

This comprehensive set of notes covers the essential aspects of end termination for high-speed digital design, addressing the problems of point-to-point wiring as discussed in the referenced textbooks and aligning with the specified course outcomes.