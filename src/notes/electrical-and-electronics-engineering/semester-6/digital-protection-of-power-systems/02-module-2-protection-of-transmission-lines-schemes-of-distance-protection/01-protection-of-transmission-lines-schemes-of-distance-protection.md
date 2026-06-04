---
title: "Protection of Transmission Lines:  Schemes of distance protection"
subject: "DIGITAL PROTECTION OF POWER SYSTEMS"
module: "Module 2: Protection of Transmission Lines:  Schemes of distance protection"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3657e"
status: "completed"
scrapedAt: "2026-05-23T16:25:52.518Z"
---
# Digital Protection of Power Systems: Module 2 - Protection of Transmission Lines: Schemes of Distance Protection

## Introduction to Distance Protection

Distance protection is a fundamental protective relaying scheme for transmission lines. It is based on the principle that the impedance of a transmission line is proportional to its length. By measuring the apparent impedance seen by the relay, it can determine the location of a fault and initiate tripping of the circuit breakers at the ends of the protected line.

**Key Concepts:**

*   **Impedance:** The opposition to the flow of alternating current in a circuit. For a transmission line, it is primarily composed of resistance (R) and reactance (X). Impedance ($Z = R + jX$).
*   **Apparent Impedance:** The impedance measured by the relay at its location. This is calculated by dividing the measured voltage by the measured current ($Z_{app} = V/I$).
*   **Fault Location:** The distance to the fault is inversely proportional to the measured apparent impedance.
*   **Relay Characteristic:** A graphical representation on an R-X plane that defines the operating region of the distance relay.

**Learning Outcome Addressed:**
*   Identify the relay protection scheme suitable for overcurrent, differential and distance protection. (CO1 - K3)

**Textbook References:**
*   *Digital Protection of Power System* by A. T. Johns and S. K. Salman (Chapter 4: Distance Protection)
*   *Computer Relaying for Power Systems* by A. G. Phadke and James S. Thorpe (Chapter 4: Distance Relays)

---

## Principles of Distance Protection

The fundamental principle of distance protection is that the impedance of a transmission line segment is directly proportional to its length.

$$Z_{line} = \rho \times L$$

Where:
*   $Z_{line}$ is the impedance of the transmission line.
*   $\rho$ is the impedance per unit length of the transmission line.
*   $L$ is the length of the transmission line.

The relay measures the voltage ($V$) and current ($I$) at its location. The apparent impedance ($Z_{app}$) seen by the relay is then calculated as:

$$Z_{app} = V / I$$

If the fault occurs at a distance $d$ from the relay location, and the line impedance per unit length is $\rho$, then the fault impedance ($Z_{fault}$) is:

$$Z_{fault} = \rho \times d$$

Therefore, if the relay measures $Z_{app}$ and it equals $Z_{fault}$, the relay can determine the fault distance $d$.

**Important Points to Remember:**
*   Distance protection relies on the relationship between impedance and length.
*   The accuracy of distance protection is affected by factors like fault resistance and the presence of series capacitors.

**Learning Outcome Addressed:**
*   Identify the relay protection scheme suitable for overcurrent, differential and distance protection. (CO1 - K3)

**Textbook References:**
*   *Digital Protection of Power System* by A. T. Johns and S. K. Salman (Chapter 4: Distance Protection)
*   *Computer Relaying for Power Systems* by A. G. Phadke and James S. Thorpe (Chapter 4: Distance Relays)

---

## Types of Distance Relays

Distance relays are classified based on their operating characteristics on the R-X plane.

### 1. Impedance Relays

*   **Characteristic:** A circle passing through the origin, with its diameter along the R-axis.
*   **Operation:** Operates when the apparent impedance ($V/I$) falls within the circle.
*   **Formula:** $|V/I| \le Z_{setting}$
*   **Application:** Suitable for short transmission lines where the resistance component is significant compared to reactance. They are generally not selective for longer lines due to the angle of the line impedance.

**Example:** If a relay has an impedance setting of 10 ohms, it will trip if the measured impedance is less than or equal to 10 ohms.

### 2. Mho Relays

*   **Characteristic:** A circle passing through the origin and the point representing the line impedance ($\rho L$) on the R-X plane. The center of the circle lies on the line impedance characteristic.
*   **Operation:** Operates when the apparent impedance falls within the circle. The characteristic is defined by the angle of the line impedance.
*   **Formula:** $|V/I - Z_{line}/2| \le |Z_{line}/2|$ or $V - I \cdot (Z_{line}/2) \ge 0$ where $Z_{line}$ is the impedance of the line section being protected.
*   **Application:** Widely used for medium and long transmission lines as they are less affected by power swings and fault resistance variations compared to impedance relays, as long as the fault resistance does not significantly change the angle of the apparent impedance.

**Example:** For a line with an impedance of 5 + j15 ohms, a Mho relay will have a characteristic circle centered at 2.5 + j7.5 ohms with a radius of 2.5 + j7.5 ohms.

### 3. Quadrilateral Relays

*   **Characteristic:** A quadrilateral shape defined by four lines on the R-X plane. These lines represent:
    *   A minimum impedance setting (often a circle or a straight line) to avoid operation on close-up faults or overloads.
    *   A maximum impedance setting (a straight line parallel to the R-axis, often called the "reach" of the relay).
    *   Two characteristic lines that define the resistive and reactive boundaries of the protected line impedance.
*   **Operation:** Operates when the apparent impedance falls within the quadrilateral.
*   **Application:** Offer greater flexibility and selectivity, especially in networks with varying fault angles and significant fault resistance. They can be set to cover the line impedance while avoiding undesirable operation.

**Example:** A quadrilateral relay might be set to operate for impedances $Z$ such that $R_{min} \le \text{Re}(Z) \le R_{max}$ and $X_{min} \le \text{Im}(Z) \le X_{max}$, with additional constraints on the magnitude or angle of $Z$.

**Learning Outcome Addressed:**
*   Identify the relay protection scheme suitable for overcurrent, differential and distance protection. (CO1 - K3)

**Textbook References:**
*   *Digital Protection of Power System* by A. T. Johns and S. K. Salman (Chapter 4: Distance Protection - Types of Distance Relays)
*   *Computer Relaying for Power Systems* by A. G. Phadke and James S. Thorpe (Chapter 4: Distance Relays - Types and Characteristics)
*   *Power System Protection and Switchgear* by Badri Ram and D. N. Viswakarma (Chapter 5: Distance Protection Relays)

---

## Zone of Protection

Distance protection schemes divide the transmission line into several zones, typically three zones, to achieve selectivity and provide backup protection.

### Zone 1 (Main Protection)

*   **Reach:** Set to cover 80-90% of the protected line section.
*   **Operation:** Instantaneous tripping.
*   **Purpose:** Provides fast primary protection for the majority of the line. The slight under-reach is to avoid operation due to inaccuracies in relaying, variations in line impedance, and fault resistance.
*   **Setting:** $Z_1 = (0.8 \text{ to } 0.9) \times Z_{line}$ where $Z_{line}$ is the impedance of the protected line section.

### Zone 2 (First Backup)

*   **Reach:** Set to cover the entire length of the protected line section plus a portion of the adjacent line section (typically 50% of the adjacent line).
*   **Operation:** Timed tripping. The time delay is usually short (e.g., 0.2-0.5 seconds).
*   **Purpose:** Provides backup protection for the protected line if Zone 1 fails to operate. It also provides primary protection for faults in the adjacent line section.
*   **Setting:** $Z_2 = Z_{line} + (0.5 \times Z_{next\_line})$

### Zone 3 (Second Backup)

*   **Reach:** Set to cover the entire length of the protected line section, the adjacent line section, and a portion of the next adjacent line section (typically 50% of the second adjacent line).
*   **Operation:** Timed tripping. The time delay is longer than Zone 2 (e.g., 0.5-1.0 seconds).
*   **Purpose:** Provides backup protection for the protected line and the adjacent line section if Zone 1 and Zone 2 fail. It also provides protection for faults further down the system.
*   **Setting:** $Z_3 = Z_{line} + Z_{next\_line} + (0.5 \times Z_{second\_next\_line})$

**Important Points to Remember:**
*   **Selectivity:** The time delays in Zone 2 and Zone 3 ensure that only the relay nearest to the fault operates, preventing unnecessary tripping of healthy lines.
*   **Overreach:** Zone 2 and Zone 3 settings are designed to account for impedance variations and to ensure coverage of the entire line and beyond.
*   **Power Swings:** Zone 2 and 3 characteristics need to be carefully set to avoid maloperation during power swings.

**Learning Outcome Addressed:**
*   Identify the relay protection scheme suitable for overcurrent, differential and distance protection. (CO1 - K3)

**Textbook References:**
*   *Digital Protection of Power System* by A. T. Johns and S. K. Salman (Chapter 4: Distance Protection - Zones of Protection)
*   *Computer Relaying for Power Systems* by A. G. Phadke and James S. Thorpe (Chapter 4: Distance Relays - Zones of Operation)
*   *Power System Protection and Switchgear* by Badri Ram and D. N. Viswakarma (Chapter 5: Distance Protection Schemes)

---

## Challenges and Considerations in Distance Protection

While distance protection is effective, several factors can influence its performance.

### 1. Fault Resistance

*   **Effect:** Fault resistance (e.g., due to vegetation, poor connections) increases the measured apparent impedance ($Z_{app} = Z_{line} + Z_{fault\_resistance}$). This can cause the relay to under-reach, especially for Zone 1.
*   **Mitigation:**
    *   Using relays with characteristics that are less sensitive to resistance angle variations (e.g., quadrilateral relays with resistive reach).
    *   Implementing fault resistance estimation techniques in digital relays.
    *   Setting Zone 1 with a slight under-reach to account for typical fault resistance.

### 2. Power Swings

*   **Effect:** Power swings are large, sustained oscillations in voltage and current that occur during system disturbances. During a power swing, the impedance locus traced by the apparent impedance seen by the relay may enter the operating regions of the distance relays, leading to maloperation.
*   **Mitigation:**
    *   Using Mho or quadrilateral relays with careful setting of Zone 2 and Zone 3 to avoid intersection with the power swing locus.
    *   Implementing power swing blocking schemes, which temporarily disable the distance relays during detected power swings.

### 3. Line Loadability and Reactive Power Flow

*   **Effect:** High line loading can lead to large voltage drops, making the apparent impedance seen by the relay closer to the line impedance. This can be problematic for distance relays, especially if they are set to operate on a large portion of the line.
*   **Mitigation:**
    *   Careful setting of distance relays to ensure that normal load conditions do not cause maloperation.
    *   Considering the effect of line loading on the impedance seen by the relay during fault studies.

### 4. Mutual Inductance (Second Circuit Effect)

*   **Effect:** In transmission lines with parallel circuits, the magnetic coupling between the circuits can affect the measured impedance. This is particularly noticeable for phase-to-phase faults.
*   **Mitigation:**
    *   Using compensation factors or algorithms in digital relays to account for mutual inductance.
    *   Specific settings or logic within the relay to handle parallel circuits.

### 5. Source Impedance Variation

*   **Effect:** The impedance of the source behind the relay can vary depending on the network configuration. This variation can alter the apparent impedance seen by the relay during a fault.
*   **Mitigation:**
    *   Conducting thorough fault studies with different network configurations to determine the range of source impedances.
    *   Setting distance relays to be robust against typical source impedance variations.

**Learning Outcome Addressed:**
*   Identify the relay protection scheme suitable for overcurrent, differential and distance protection. (CO1 - K3)
*   Explain signal processing methods and algorithms in digital protection (CO4 - K2) - *Implicitly, as digital relays use these to overcome challenges.*

**Textbook References:**
*   *Digital Protection of Power System* by A. T. Johns and S. K. Salman (Chapter 4: Distance Protection - Factors Affecting Performance)
*   *Computer Relaying for Power Systems* by A. G. Phadke and James S. Thorpe (Chapter 4: Distance Relays - Limitations and Considerations)
*   *Power System Protection and Switchgear* by Badri Ram and D. N. Viswakarma (Chapter 5: Distance Protection - Challenges and Solutions)

---

## Digital Distance Protection

Digital distance relays leverage advanced signal processing and computational capabilities to overcome the limitations of traditional electromechanical distance relays.

### Signal Processing in Digital Relays

Digital relays sample analog voltage and current waveforms at high frequencies. These sampled data are then processed using digital signal processing (DSP) techniques.

*   **Sampling:** Analog signals are converted to digital values using Analog-to-Digital Converters (ADCs). The sampling rate is crucial for accurate waveform reconstruction and frequency analysis (typically 12 or 16 samples per cycle for fundamental frequency, and higher for advanced algorithms).
*   **Filtering:** Digital filters (e.g., Finite Impulse Response - FIR, Infinite Impulse Response - IIR) are used to:
    *   Remove unwanted noise (harmonics, DC offsets).
    *   Extract the fundamental frequency component of the voltage and current.
    *   Shift the phase of signals for impedance calculations.
*   **Fourier Analysis (FFT):** The Fast Fourier Transform (FFT) is commonly used to decompose the sampled waveforms into their fundamental frequency components and harmonics. This allows for accurate calculation of RMS values and phase angles of voltage and current.
*   **Other Algorithms:**
    *   **Least Error Squares (LES):** Estimates waveform parameters by minimizing the squared error between the actual and estimated waveform.
    *   **Kalman Filtering:** A recursive algorithm that estimates the state of a dynamic system, useful for tracking changes in voltage and current during faults.
    *   **Wavelet Transform:** Can be used for analyzing transient signals and detecting faults with high accuracy, even in the presence of noise.

**Learning Outcome Addressed:**
*   Illustrate the operation of a numerical relay. (CO3 - K2)
*   Explain signal processing methods and algorithms in digital protection. (CO4 - K2)

**Textbook References:**
*   *Digital Protection of Power System* by A. T. Johns and S. K. Salman (Chapter 3: Microprocessor-Based Relays, Chapter 5: Digital Signal Processing)
*   *Computer Relaying for Power Systems* by A. G. Phadke and James S. Thorpe (Chapter 3: Digital Signal Processing Techniques)
*   *Digital Signal Processing in Power System Protection and Control* by Waldemar Rebizant (Entire Book focuses on DSP techniques)

---

### Digital Distance Relay Characteristics and Operation

Digital distance relays implement various relay characteristics (impendance, Mho, quadrilateral) using mathematical algorithms based on the processed voltage and current phasors.

*   **Phasor Estimation:** Digital relays calculate voltage and current phasors ($\mathbf{V}$ and $\mathbf{I}$) from the sampled data.
*   **Apparent Impedance Calculation:**
    $$ \mathbf{Z}_{app} = \frac{\mathbf{V}}{\mathbf{I}} $$
    Or, to avoid division by zero for very low currents, they might use:
    $$ \mathbf{Z}_{app} = \frac{\mathbf{V} \cdot \mathbf{I}^*}{|\mathbf{I}|^2} $$
    where $\mathbf{I}^*$ is the complex conjugate of $\mathbf{I}$.
*   **Characteristic Implementation:**
    *   **Impedance Relay:** $| \mathbf{Z}_{app} | \le Z_{setting}$
    *   **Mho Relay:** The condition for operation can be expressed using the phase angle difference between the voltage and current, or as $| \mathbf{Z}_{app} - Z_{line}/2 | \le | Z_{line}/2 |$.
    *   **Quadrilateral Relay:** Implemented using a set of linear inequalities based on the real and imaginary parts of $\mathbf{Z}_{app}$ and the set impedance values for the quadrilateral vertices.

**Advanced Features of Digital Distance Relays:**

*   **Directional Supervision:** Digital relays inherently perform directional calculations, allowing for accurate fault direction determination.
*   **Fault Type Identification:** Can distinguish between phase-to-phase, phase-to-ground, and phase-to-phase-to-ground faults.
*   **Communication-Assisted Schemes:** Can communicate with relays at the other end of the line to implement permissive or blocking schemes for faster and more secure tripping (e.g., POTT, PUTT).
*   **Self-Correction Algorithms:** Can compensate for variations in line parameters and fault conditions.
*   **Event Recording and Disturbance Analysis:** Store fault data (waveforms, settings, operating times) for post-fault analysis.

**Learning Outcome Addressed:**
*   Illustrate the operation of a numerical relay. (CO3 - K2)
*   Explain signal processing methods and algorithms in digital protection (CO4 - K2)
*   Identify the relay protection scheme suitable for overcurrent, differential and distance protection. (CO1 - K3)

**Textbook References:**
*   *Digital Protection of Power System* by A. T. Johns and S. K. Salman (Chapter 4: Distance Protection - Digital Implementation)
*   *Computer Relaying for Power Systems* by A. G. Phadke and James S. Thorpe (Chapter 4: Distance Relays - Digital Implementation)
*   *Power System Protection and Switchgear* by Badri Ram and D. N. Viswakarma (Chapter 5: Digital Distance Relays)

---

## Communication-Assisted Distance Schemes

To improve speed and security, distance protection is often enhanced with communication channels between the line ends.

### Permissive Overreaching Transfer Trip (POTT) Scheme

*   **Principle:**
    *   Relay at end A detects a fault within its Zone 1 reach (instantaneous trip).
    *   Simultaneously, it sends a "trip" signal to the relay at end B over a communication channel.
    *   If relay B also sees the fault within its Zone 1 reach, it sends a "permissive" signal back to relay A.
    *   If relay A receives the permissive signal from B, it trips instantaneously. If not, it resorts to its Zone 2 timed trip.
*   **Advantages:** Faster tripping for all faults on the line compared to standalone Zone 2.
*   **Disadvantages:** Requires a reliable communication channel. If the communication fails, the scheme degrades to Zone 1/Zone 2 operation.
*   **Security:** The permissive signal ensures that tripping only occurs for faults within the line section.

### Directional Comparison Blocking (DCB) Scheme

*   **Principle:**
    *   Relay at end A determines the fault direction.
    *   If the fault is forward (towards end B), relay A sends a "block" signal to relay B.
    *   If relay B sees the fault as forward (towards A), it receives the block signal and is prevented from tripping instantaneously. Instead, it relies on its Zone 2 operation.
    *   If the fault is in the opposite direction at end A, it does not send a block signal, and relay B can trip instantaneously based on its Zone 1 if the fault is within its reach.
*   **Advantages:** Secure operation for faults outside the protected line section, as the blocking signal prevents maloperation.
*   **Disadvantages:** Tripping is delayed for faults on the protected line section compared to POTT.

### Phase Comparison Scheme

*   **Principle:** Compares the phase angle of the current waveforms at both ends of the line. If the phase angles differ significantly (indicating a fault within the line), a trip command is issued.
*   **Advantages:** Relatively simple and less susceptible to false tripping due to power swings than some other schemes.
*   **Disadvantages:** Can be affected by DC offsets and requires precise phase comparison.

**Learning Outcome Addressed:**
*   Identify the relay protection scheme suitable for overcurrent, differential and distance protection. (CO1 - K3)
*   Infer emerging protection schemes in power systems (CO5 - K3) - *Communication-assisted schemes are foundational for modern protection.*

**Textbook References:**
*   *Digital Protection of Power System* by A. T. Johns and S. K. Salman (Chapter 4: Distance Protection - Communication Assisted Schemes)
*   *Computer Relaying for Power Systems* by A. G. Phadke and James S. Thorpe (Chapter 6: Communication-Assisted Schemes)
*   *Power System Protection and Switchgear* by Badri Ram and D. N. Viswakarma (Chapter 5: Communication Assisted Schemes)

---

## Practice Questions and Answers

**Question 1:**
A transmission line has an impedance of 5 + j20 ohms per phase. A distance relay located at one end is set for Zone 1 protection with a reach of 85% of the line impedance. Calculate the setting of Zone 1 in ohms.

**Answer 1:**
Zone 1 setting $Z_1 = 0.85 \times Z_{line}$
$Z_1 = 0.85 \times (5 + j20)$
$Z_1 = 4.25 + j17$ ohms.

**Question 2:**
Explain the primary advantage of using Mho relays over Impedance relays for long transmission lines.

**Answer 2:**
Mho relays are more suitable for long transmission lines because their characteristic circle is centered on the line impedance angle. This makes them less susceptible to maloperation during power swings and less affected by fault resistance variations that might shift the apparent impedance angle away from the R-axis compared to impedance relays.

**Question 3:**
Describe the basic principle of a Permissive Overreaching Transfer Trip (POTT) scheme used with distance protection.

**Answer 3:**
In a POTT scheme, when a distance relay at one end of a line detects a fault within its Zone 1 reach, it sends a permissive signal to the relay at the other end. If the relay at the other end also sees the fault within its Zone 1 reach, it acknowledges the permissive signal, and both relays trip instantaneously. If the permissive signal is not received, the relay resorts to its Zone 2 timed trip. This allows for faster tripping than standalone Zone 2 protection for faults anywhere on the line.

**Question 4:**
What is the main challenge posed by fault resistance in distance protection, and how can digital relays help mitigate it?

**Answer 4:**
Fault resistance increases the measured apparent impedance ($Z_{app} = Z_{line} + Z_{fault\_resistance}$), which can cause the relay to under-reach, particularly for Zone 1 protection. Digital relays can mitigate this by using more advanced signal processing (like FFT) to accurately estimate phasors, implementing quadrilateral characteristics that are less sensitive to fault resistance angle variations, and employing algorithms that estimate fault resistance to adjust the reach.

**Question 5:**
What is the purpose of Zone 2 protection in a distance relaying scheme?

**Answer 5:**
Zone 2 protection provides first backup for the protected line section. Its reach is set to cover the entire protected line and a portion of the adjacent line. It operates with a short time delay to ensure selectivity with Zone 1 protection of the protected line and to provide primary protection for faults occurring in the adjacent line section.

---

## Summary and Key Takeaways

*   **Distance protection** is based on the principle that line impedance is proportional to its length.
*   **Types of relays** include Impedance, Mho, and Quadrilateral relays, each with distinct operating characteristics on the R-X plane.
*   **Zones of protection** (Zone 1, 2, 3) are used to provide instantaneous primary protection and graded backup protection with selectivity.
*   **Challenges** like fault resistance and power swings need to be carefully considered and addressed in setting and design.
*   **Digital distance relays** offer enhanced performance due to advanced signal processing techniques (sampling, filtering, FFT) and flexible implementation of characteristics.
*   **Communication-assisted schemes** (POTT, DCB) improve the speed and security of distance protection.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
