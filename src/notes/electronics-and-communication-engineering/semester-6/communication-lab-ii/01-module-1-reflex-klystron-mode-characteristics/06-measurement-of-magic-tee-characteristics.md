---
title: "Measurement of Magic Tee characteristics."
subject: "COMMUNICATION LAB II"
module: "Module 1: Reflex Klystron Mode Characteristics."
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780ff0b6"
status: "completed"
scrapedAt: "2026-05-23T17:59:39.345Z"
---
# COMMUNICATION LAB II - Module 1: Reflex Klystron Mode Characteristics

## Topic: Measurement of Magic Tee Characteristics

### Learning Outcomes:

*   Understand the working principle of a Magic Tee.
*   Measure the scattering parameters (S-parameters) of a Magic Tee.
*   Determine the isolation and coupling characteristics of a Magic Tee.
*   Verify the properties of a Magic Tee using measured data.

### Course Outcomes Alignment:

This topic directly contributes to:

*   **CO1: Familiarize the basic Microwave components and to analyse a few microwave measurements and its parameters. (Knowledge Level: K4)**
    *   Measuring S-parameters of a Magic Tee is a direct application of microwave measurements and analysis of component parameters.

---

## 1. Introduction to Microwave Junctions and the Magic Tee

### 1.1. Microwave Junctions

*   **Definition:** A microwave junction is a passive microwave component consisting of two or more ports (waveguides or transmission lines) connected at a common point.
*   **Purpose:** They are used for power division, mixing, signal coupling, and impedance matching in microwave circuits.
*   **Types:** Common types include tees (E-plane, H-plane, Hybrid tees), couplers (90-degree, 180-degree), and circulators.

### 1.2. The Magic Tee (Hybrid Tee)

*   **Definition:** A Magic Tee, also known as a hybrid tee or a magic junction, is a four-port microwave junction with specific scattering properties that make it highly useful in microwave systems. It's a fundamental component for signal splitting and combining.
*   **Structure:** It is formed by joining an H-plane tee and an E-plane tee at their centers.
    *   **Port 1:** Input port (often for incident power).
    *   **Port 2:** Isolated port (no direct connection, ideally no power output).
    *   **Port 3 & Port 4:** Output ports (where the incident power is divided).
    *   **Ports 2 and 3** are in an H-plane junction.
    *   **Ports 2 and 4** are in an E-plane junction.
    *   **Ports 3 and 4** are collinear and in phase.

*   **Key Characteristics (Ideal):**
    *   **Complete Isolation:** There is no energy transfer between port 2 and port 3 (when ports 1 and 4 are terminated in matched loads).
    *   **Equal Power Division:** Incident power at port 1 is divided equally between ports 3 and 4.
    *   **Phase Relationship:** The signals at ports 3 and 4 are in phase when power is incident on port 1.
    *   **Mutual Isolation:** Port 2 is isolated from port 3, and port 1 is isolated from port 4.

*   **Reference from Textbooks:**
    *   **Liao, "Microwave Devices and Circuits":** Chapter on "Microwave Circuit Components and Applications" often details the analysis and applications of hybrid junctions like the Magic Tee. It discusses the scattering matrix representation and properties.
    *   **Sadiku & Kulkarni, "Principles of Electromagnetics":** May discuss electromagnetic wave propagation in waveguides and the behavior of discontinuities, which is foundational to understanding how junctions like the Magic Tee function.

---

## 2. Scattering Parameters (S-parameters) of a Magic Tee

### 2.1. S-parameters: A Brief Review

*   **Definition:** S-parameters are a set of parameters that describe the electrical behavior of linear electrical networks for signals at high frequencies (e.g., microwaves). They relate the incident and reflected voltage waves at each port of a multi-port network.
*   **Matrix Representation:** For an $N$-port network, the S-parameter matrix $S$ is an $N \times N$ matrix where $S_{ij}$ represents the ratio of the voltage wave leaving port $i$ to the voltage wave incident on port $j$, assuming all other ports are terminated in matched loads.

    $$
    \begin{bmatrix} b_1 \\ b_2 \\ \vdots \\ b_N \end{bmatrix}
    =
    \begin{bmatrix}
    S_{11} & S_{12} & \cdots & S_{1N} \\
    S_{21} & S_{22} & \cdots & S_{2N} \\
    \vdots & \vdots & \ddots & \vdots \\
    S_{N1} & S_{N2} & \cdots & S_{NN}
    \end{bmatrix}
    \begin{bmatrix} a_1 \\ a_2 \\ \vdots \\ a_N \end{bmatrix}
    $$

    Where:
    *   $a_i$: Incident voltage wave at port $i$.
    *   $b_i$: Reflected voltage wave at port $i$.

### 2.2. Ideal S-parameters of a Magic Tee

For a 4-port Magic Tee, the ideal S-parameter matrix is structured as follows:

*   **Ports:** Let's assume:
    *   Port 1: Input
    *   Port 2: Isolated
    *   Port 3: Output 1
    *   Port 4: Output 2

*   **Ideal S-Matrix:**

    $$
    S_{ideal} =
    \begin{bmatrix}
    0 & 0 & \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\
    0 & 0 & \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} \\
    \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 & 0 \\
    \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} & 0 & 0
    \end{bmatrix}
    $$

*   **Explanation of Ideal S-parameters:**
    *   $S_{11} = 0$: No reflection at the input port (port 1) when other ports are matched.
    *   $S_{22} = 0$: No reflection at the isolated port (port 2) when other ports are matched.
    *   $S_{33} = 0$: No reflection at output port 1 (port 3) when other ports are matched.
    *   $S_{44} = 0$: No reflection at output port 2 (port 4) when other ports are matched.
    *   $S_{12} = 0$: Port 1 is isolated from port 2.
    *   $S_{21} = 0$: Port 2 is isolated from port 1.
    *   $S_{13} = \frac{1}{\sqrt{2}}$: Incident power at port 1 is split equally ($\frac{1}{2}$ power) and delivered to port 3. The magnitude of the voltage wave is $\frac{1}{\sqrt{2}}$ (since power is proportional to $|S|^2$, $(\frac{1}{\sqrt{2}})^2 = \frac{1}{2}$).
    *   $S_{14} = \frac{1}{\sqrt{2}}$: Incident power at port 1 is split equally ($\frac{1}{2}$ power) and delivered to port 4. The signals at ports 3 and 4 are in phase.
    *   $S_{31} = \frac{1}{\sqrt{2}}$: Incident power at port 3 is split equally ($\frac{1}{2}$ power) and delivered to port 1.
    *   $S_{41} = \frac{1}{\sqrt{2}}$: Incident power at port 3 is split equally ($\frac{1}{2}$ power) and delivered to port 4.
    *   $S_{23} = \frac{1}{\sqrt{2}}$: Incident power at port 2 is split equally ($\frac{1}{2}$ power) and delivered to port 3.
    *   $S_{32} = \frac{1}{\sqrt{2}}$: Incident power at port 2 is split equally ($\frac{1}{2}$ power) and delivered to port 3.
    *   $S_{24} = -\frac{1}{\sqrt{2}}$: Incident power at port 2 is split equally ($\frac{1}{2}$ power) and delivered to port 4, but with a phase shift of 180 degrees (represented by the negative sign).
    *   $S_{42} = -\frac{1}{\sqrt{2}}$: Incident power at port 2 is split equally ($\frac{1}{2}$ power) and delivered to port 4, with a phase shift of 180 degrees.

    **Important Note:** The indexing convention can vary. The provided matrix is a common representation. The key is to understand the relationships and phase shifts.

*   **Reference from Textbooks:**
    *   **Liao, "Microwave Devices and Circuits":** This text is a primary source for understanding the S-parameter representation of microwave junctions and the theoretical derivation of the Magic Tee's S-matrix.

---

## 3. Measurement of Magic Tee Characteristics

### 3.1. Experimental Setup

The typical experimental setup for measuring the S-parameters of a Magic Tee involves:

*   **Microwave Source:** A stable microwave signal generator operating at the desired frequency.
*   **Frequency Meter:** To measure the output frequency of the source.
*   **Variable Attenuator:** To control the input power level.
*   **Directional Couplers:** To sample incident and reflected power at each port.
*   **Crystal Detector/Power Meter:** To measure the detected power level.
*   **Standing Wave Ratio (SWR) Meter/Slotted Section with Detector:** For VSWR measurements.
*   **Magic Tee:** The component under test.
*   **Matched Loads:** Termination for unused ports with a VSWR of approximately 1.0.
*   **Waveguide Components:** Connectors, adapters, and possibly phase shifters.
*   **Network Analyzer (Vector Network Analyzer - VNA):** This is the most efficient instrument for directly measuring all S-parameters of a microwave device. If a VNA is not available, a microwave bench setup can be used to measure individual S-parameters.

### 3.2. Measurement Techniques

#### 3.2.1. Using a Vector Network Analyzer (VNA)

This is the most direct and comprehensive method.

1.  **Calibration:** Calibrate the VNA for the specific frequency range and with appropriate adapters.
2.  **Connection:** Connect the Magic Tee to the VNA ports (e.g., Port 1 of VNA to Port 1 of Magic Tee, Port 2 of VNA to Port 3 of Magic Tee, etc.). Ensure other ports of the Magic Tee are terminated with matched loads.
3.  **Port Configuration:** Configure the VNA to measure the desired S-parameters (e.g., S11, S21, S31, S41, etc.).
4.  **Measurement:** Perform the measurement across the desired frequency range. The VNA will directly display the magnitude and phase of each S-parameter.

#### 3.2.2. Using a Microwave Bench Setup (Traditional Method)

This method involves measuring parameters individually. For a 4-port network, this is more complex. We will outline measurements for key characteristics.

**Objective:** Measure $S_{21}$, $S_{31}$, $S_{41}$, $S_{12}$, $S_{13}$, $S_{14}$, $S_{32}$, $S_{42}$, $S_{34}$, $S_{43}$ and reflections $S_{11}$, $S_{22}$, $S_{33}$, $S_{44}$.

**General Procedure:**
*   Terminate all ports except the input port ($j$) with matched loads.
*   Feed signal into port $i$.
*   Measure incident power ($P_{in}$) and transmitted power ($P_{out}$) at port $k$ using a power meter or crystal detector.
*   $|S_{ki}| = \sqrt{\frac{P_{out}}{P_{in}}}$ (assuming matched loads).
*   Phase can be measured using a phase meter or by observing the shift in the null of a slotted section.

**Specific Measurements:**

1.  **Measuring $S_{11}$ (Reflection at Port 1):**
    *   Terminate ports 2, 3, and 4 with matched loads.
    *   Connect port 1 to the output of the microwave source via a directional coupler.
    *   Measure incident power and reflected power at port 1 using a power meter or crystal detector.
    *   $S_{11} = \sqrt{\frac{P_{reflected}}{P_{incident}}}$ (in magnitude).

2.  **Measuring $S_{21}$ (Transmission from Port 1 to Port 2):**
    *   Terminate ports 3 and 4 with matched loads.
    *   Connect port 2 to a detector/power meter.
    *   Feed signal into port 1.
    *   $|S_{21}| = \sqrt{\frac{P_{output\_at\_port2}}{P_{input\_at\_port1}}}$.
    *   **Expected Ideal:** $|S_{21}| = 0$.

3.  **Measuring $S_{31}$ (Transmission from Port 1 to Port 3):**
    *   Terminate ports 2 and 4 with matched loads.
    *   Connect port 3 to a detector/power meter.
    *   Feed signal into port 1.
    *   $|S_{31}| = \sqrt{\frac{P_{output\_at\_port3}}{P_{input\_at\_port1}}}$.
    *   **Expected Ideal:** $|S_{31}| = \frac{1}{\sqrt{2}} \approx -3$ dB.

4.  **Measuring $S_{41}$ (Transmission from Port 1 to Port 4):**
    *   Terminate ports 2 and 3 with matched loads.
    *   Connect port 4 to a detector/power meter.
    *   Feed signal into port 1.
    *   $|S_{41}| = \sqrt{\frac{P_{output\_at\_port4}}{P_{input\_at\_port1}}}$.
    *   **Expected Ideal:** $|S_{41}| = \frac{1}{\sqrt{2}} \approx -3$ dB.
    *   **Phase Measurement:** By comparing the phase of the signal at port 3 and port 4 when port 2 is open (or terminated differently), the 180-degree phase difference can be observed.

5.  **Measuring $S_{23}$ (Transmission from Port 2 to Port 3):**
    *   Terminate ports 1 and 4 with matched loads.
    *   Connect port 3 to a detector/power meter.
    *   Feed signal into port 2.
    *   $|S_{23}| = \sqrt{\frac{P_{output\_at\_port3}}{P_{input\_at\_port2}}}$.
    *   **Expected Ideal:** $|S_{23}| = \frac{1}{\sqrt{2}} \approx -3$ dB.

6.  **Measuring $S_{24}$ (Transmission from Port 2 to Port 4):**
    *   Terminate ports 1 and 3 with matched loads.
    *   Connect port 4 to a detector/power meter.
    *   Feed signal into port 2.
    *   $|S_{24}| = \sqrt{\frac{P_{output\_at\_port4}}{P_{input\_at\_port2}}}$.
    *   **Expected Ideal:** $|S_{24}| = \frac{1}{\sqrt{2}} \approx -3$ dB (with 180-degree phase shift).

**Important Note on Microwave Bench Measurements:**
*   To measure transmissions from port $i$ to port $j$ ($S_{ji}$), you excite port $i$ and measure at port $j$, with all other ports terminated.
*   To measure reflections at port $i$ ($S_{ii}$), you excite port $i$ and measure the reflection at port $i$, with all other ports terminated.
*   For symmetry, $S_{ij} = S_{ji}$ for passive networks.
*   Measuring phase accurately on a microwave bench requires careful setup and calibration.

---

## 4. Determining Isolation and Coupling Characteristics

### 4.1. Isolation

*   **Definition:** Isolation refers to the degree to which power incident on one port is prevented from reaching another port. It's a measure of how well ports are separated.
*   **Measurement:** Isolation between port $i$ and port $j$ is measured as the ratio of incident power at port $i$ to the transmitted power at port $j$, with all other ports terminated in matched loads.
    *   Isolation ($dB$) = $10 \log_{10} \left( \frac{P_{incident\_at\_i}}{P_{transmitted\_at\_j}} \right)$.
    *   This is directly related to the magnitude of the off-diagonal S-parameters (e.g., Isolation between port 1 and 2 is related to $|S_{21}|$).

*   **For Magic Tee:**
    *   **Isolation between Port 1 and Port 2:** Determined by $|S_{21}|$. Ideally 0 (infinite isolation).
    *   **Isolation between Port 3 and Port 4:** Determined by $|S_{43}|$. Ideally 0 (infinite isolation).
    *   **Isolation between Port 2 and Port 4:** Determined by $|S_{42}|$. Ideally 0 (infinite isolation).

*   **Reference from Textbooks:**
    *   **Liao, "Microwave Devices and Circuits":** Discusses isolation as a key parameter for hybrid couplers and tees.

### 4.2. Coupling

*   **Definition:** Coupling refers to the transfer of power from one port to another. It's the inverse of isolation.
*   **Measurement:** Coupling is often expressed as the ratio of transmitted power to incident power.
    *   Coupling ($dB$) = $10 \log_{10} \left( \frac{P_{transmitted\_at\_j}}{P_{incident\_at\_i}} \right)$.
    *   This is directly related to the magnitude of the off-diagonal S-parameters (e.g., Coupling from port 1 to port 3 is related to $|S_{31}|$).

*   **For Magic Tee:**
    *   **Coupling from Port 1 to Port 3 ($C_{13}$):** Determined by $|S_{31}|$. Ideally $\frac{1}{\sqrt{2}}$ (which is $-3$ dB).
    *   **Coupling from Port 1 to Port 4 ($C_{14}$):** Determined by $|S_{41}|$. Ideally $\frac{1}{\sqrt{2}}$ (which is $-3$ dB).
    *   **Coupling from Port 2 to Port 3 ($C_{23}$):** Determined by $|S_{23}|$. Ideally $\frac{1}{\sqrt{2}}$ (which is $-3$ dB).
    *   **Coupling from Port 2 to Port 4 ($C_{24}$):** Determined by $|S_{24}|$. Ideally $\frac{1}{\sqrt{2}}$ (which is $-3$ dB).

---

## 5. Verification of Magic Tee Properties

### 5.1. Symmetry Properties

*   **Reciprocity:** For passive components, $S_{ij} = S_{ji}$. This means the transmission from port $i$ to port $j$ is the same as from port $j$ to port $i$.
    *   **Verification:** Measure $S_{13}$ and $S_{31}$. They should be approximately equal. Similarly for other relevant pairs.

*   **Unitarity:** For a lossless reciprocal network, the sum of the squares of the magnitudes of the S-parameters in any column or row is equal to 1.
    *   For Magic Tee (assuming lossless):
        *   Column 1: $|S_{11}|^2 + |S_{21}|^2 + |S_{31}|^2 + |S_{41}|^2 = 1$
        *   Column 2: $|S_{12}|^2 + |S_{22}|^2 + |S_{32}|^2 + |S_{42}|^2 = 1$
        *   Row 1: $|S_{11}|^2 + |S_{12}|^2 + |S_{13}|^2 + |S_{14}|^2 = 1$
        *   And so on for other columns/rows.
    *   **Verification:** Using the measured S-parameter magnitudes, substitute them into these equations. The sum should be close to 1. Deviations indicate losses or measurement errors.

*   **Schenkel's Theorem (for 4-port networks):** For a reciprocal lossless 4-port network, the sum of elements in each row and column is zero. For the Magic Tee, this is not directly applicable in the simple sense due to specific phasing, but the fundamental conservation of energy (unitarity) is crucial.

### 5.2. Phase Relationship

*   **Observation:** When power is incident on port 1, the signals exiting ports 3 and 4 are in phase. When power is incident on port 2, the signals exiting ports 3 and 4 are 180 degrees out of phase.
*   **Verification:** Using a VNA, observe the phase of $S_{31}$ and $S_{41}$. They should be identical. Similarly, observe the phase of $S_{32}$ and $S_{42}$. $S_{32}$ should be approximately in phase with the input, while $S_{42}$ should be approximately 180 degrees out of phase with the input.

---

## 6. Applications of the Magic Tee

*   **Radar Systems:** As a duplexer, allowing a single antenna to be used for both transmitting and receiving.
*   **Mixer Circuits:** Combining two signals with a local oscillator.
*   **Balanced Amplifiers:** Improving stability and linearity.
*   **Antenna Systems:** Beamforming and null steering.
*   **Measurement of Dielectric Properties:** Used in microwave interferometers.

*   **Reference from Textbooks:**
    *   **Liao, "Microwave Devices and Circuits":** Provides detailed applications of hybrid tees in various microwave systems.
    *   **Krauss, "Antennas for all Applications":** Might discuss the use of hybrid junctions in antenna arrays or feeding networks.

---

## 7. Important Points to Remember

*   The Magic Tee is a 4-port reciprocal lossless microwave junction.
*   Ideal characteristics include complete isolation between certain ports and equal power division.
*   S-parameters are crucial for describing its behavior.
*   $S_{11} = S_{22} = S_{33} = S_{44} = 0$ (ideal reflection coefficients).
*   $S_{12} = S_{21} = 0$ (isolation between port 1 and 2).
*   $S_{13} = S_{31} = 1/\sqrt{2}$ and $S_{14} = S_{41} = 1/\sqrt{2}$ (equal power division from port 1 to 3 and 4, in phase).
*   $S_{23} = S_{32} = 1/\sqrt{2}$ and $S_{24} = S_{42} = -1/\sqrt{2}$ (equal power division from port 2 to 3 and 4, with 180-degree phase shift for port 4).
*   The phase relationship between output ports is a key characteristic to verify.
*   Unitarity is a critical property for lossless networks, ensuring power conservation.
*   A VNA is the most efficient tool for measuring S-parameters.

---

## 8. Practice Questions and Answers

**Q1. What are the ideal values for the following S-parameters of a Magic Tee?**
    a) $S_{11}$
    b) $S_{21}$
    c) $S_{31}$
    d) $S_{41}$
    e) $S_{42}$

**A1.**
    a) $S_{11} = 0$ (No reflection at port 1)
    b) $S_{21} = 0$ (Isolation between port 1 and 2)
    c) $S_{31} = 1/\sqrt{2}$ (Equal power division from port 1 to 3)
    d) $S_{41} = 1/\sqrt{2}$ (Equal power division from port 1 to 4, in phase)
    e) $S_{42} = -1/\sqrt{2}$ (Equal power division from port 2 to 4, with 180-degree phase shift)

---

**Q2. If a signal of 10 mW is incident on port 1 of an ideal Magic Tee, what is the power delivered to port 3 and port 4, assuming matched loads on all other ports?**

**A2.**
The power division is equal, with each output port receiving half of the input power.
*   Power at Port 3 = $P_{in} \times |S_{31}|^2 = 10 \text{ mW} \times (1/\sqrt{2})^2 = 10 \text{ mW} \times (1/2) = 5 \text{ mW}$.
*   Power at Port 4 = $P_{in} \times |S_{41}|^2 = 10 \text{ mW} \times (1/\sqrt{2})^2 = 10 \text{ mW} \times (1/2) = 5 \text{ mW}$.

---

**Q3. What is the meaning of "unitarity" for a passive microwave network like the Magic Tee, and how can it be verified from measured S-parameters?**

**A3.**
Unitarity signifies that the network is lossless (no power is dissipated within the component). For a reciprocal lossless network, the sum of the squares of the magnitudes of the S-parameters in any row or column equals 1.
It can be verified by taking the measured S-parameters (e.g., $|S_{11}|, |S_{21}|, |S_{31}|, |S_{41}|$) and calculating $|S_{11}|^2 + |S_{21}|^2 + |S_{31}|^2 + |S_{41}|^2$. This sum should ideally be equal to 1. Deviations indicate power losses or measurement inaccuracies.

---

**Q4. Describe the phase relationship between the signals exiting ports 3 and 4 when power is incident on port 1 of a Magic Tee.**

**A4.**
When power is incident on port 1, the signals exiting ports 3 and 4 are **in phase**. This is indicated by $S_{31}$ and $S_{41}$ having the same phase, which is ideally 0 degrees relative to each other.

---

**Q5. What is the primary difference between an E-plane tee and an H-plane tee, and how is a Magic Tee constructed from them?**

**A5.**
*   **E-plane tee:** The side arm is perpendicular to the main guide and in the same plane as the electric field. The voltage waves combine in phase.
*   **H-plane tee:** The side arm is perpendicular to the main guide and in the same plane as the magnetic field. The voltage waves combine out of phase (180 degrees).

A **Magic Tee** is constructed by combining an E-plane tee and an H-plane tee at their centers. The four ports are arranged such that two are collinear (often called the main guide ports) and the other two are in the "hat" section, each perpendicular to the main guide. This specific arrangement gives rise to the unique isolation and splitting properties.

---
This concludes the study notes for the Measurement of Magic Tee Characteristics. Remember to consult your textbooks for deeper theoretical insights and practical lab guidance.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
