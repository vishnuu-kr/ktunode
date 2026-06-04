---
title: "Analysis of high frequency response of CE amplifier."
subject: "SOLID STATE DEVICES"
module: "Module 2: BJT amplifiers: RC coupled amplifier –Design"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35f86"
status: "completed"
scrapedAt: "2026-05-23T16:18:43.607Z"
---
# SOLID STATE DEVICES: Module 2: BJT Amplifiers: RC Coupled Amplifier – Design

## Topic: Analysis of High Frequency Response of CE Amplifier

This module focuses on understanding and designing BJT amplifiers, with this specific topic delving into the behavior of a Common Emitter (CE) amplifier at high frequencies. We will analyze the limitations imposed by parasitic capacitances within the BJT and the circuit, and how these affect the amplifier's gain.

---

### 1. Introduction to High Frequency Response

At lower frequencies, the coupling capacitors ($C_C$) and bypass capacitor ($C_E$) dominate the frequency response, causing the gain to roll off. As frequency increases, the parasitic capacitances within the BJT and the circuit itself become significant, also causing the gain to roll off. This topic examines the latter phenomenon.

**Key Concept:** Parasitic capacitances act as shunts across various parts of the amplifier circuit, effectively reducing the amplifier's gain at higher frequencies.

**Reference:** Boylestad & Nashelsky (11/e) Chapter 7: "Frequency Response" often introduces the general concept of frequency response and the impact of capacitors.

---

### 2. Parasitic Capacitances in a BJT

BJTs contain internal capacitances that are inherent to their physical structure. These capacitances become significant at high frequencies and influence the amplifier's performance.

*   **Base-Emitter Capacitance ($C_{be}$):** This capacitance exists between the base and emitter terminals of the BJT. It includes both the diffusion capacitance (dominant at forward bias, related to charge storage) and the junction capacitance (depletion capacitance, present even at reverse bias).
*   **Base-Collector Capacitance ($C_{bc}$ or $C_c$):** This capacitance exists between the base and collector terminals. It's primarily a depletion capacitance, as the base-collector junction is usually reverse-biased in active mode.
*   **Collector-Emitter Capacitance ($C_{ce}$):** This capacitance exists between the collector and emitter terminals. It's generally much smaller than $C_{be}$ and $C_{bc}$ and can often be neglected in initial analyses, though it can become important in certain configurations.

**Important Point to Remember:** $C_{be}$ and $C_{bc}$ are the most critical parasitic capacitances affecting the high-frequency response of a CE amplifier.

**Reference:** Sedra & Smith (6/e) Chapter 4: "Bipolar Junction Transistor" discusses the internal structure and capacitances of a BJT. Millman & Halkias (2/e) Chapter 5: "Field-Effect and Bipolar Transistor Amplifiers" also covers BJT capacitances.

---

### 3. High Frequency Hybrid-$\pi$ Model

To analyze the high-frequency response, we use the hybrid-$\pi$ model of the BJT, which includes the parasitic capacitances.

**Key Components of the Hybrid-$\pi$ Model at High Frequencies:**

*   **Input Resistance ($r_{\pi}$):** $\beta_0 / g_m$ (where $\beta_0$ is the low-frequency beta and $g_m$ is the transconductance).
*   **Miller Capacitance ($C_M$):** This is the most crucial element for understanding the high-frequency rolloff. Due to the voltage gain between the base and collector terminals, $C_{bc}$ appears amplified at the input. The Miller effect states that a capacitance between the input and output of an amplifier with gain $A_v$ appears as $C_M = C_{bc}(1 - A_v)$ at the input. Since $A_v$ is negative for a CE amplifier, $C_M = C_{bc}(1 + |A_v|)$.
*   **Base-Emitter Capacitance ($C_{be}$):** This capacitance remains directly across the base-emitter junction.
*   **Collector-Emitter Capacitance ($C_{ce}$):** This capacitance is in parallel with the output resistance ($r_o$) and the load.

**Simplified High-Frequency Hybrid-$\pi$ Model:**

At high frequencies, the coupling and bypass capacitors are effectively short circuits. The hybrid-$\pi$ model is simplified by considering the input loop (base-emitter) and the output loop (collector-emitter), with $C_{be}$ and the effectively larger Miller capacitance $C_M$ dominating the input behavior.

**Reference:** Boylestad & Nashelsky (11/e) Chapter 7: "Frequency Response" section on the hybrid-$\pi$ model for high frequencies. Sedra & Smith (6/e) Chapter 6: "Single-Stage Amplifiers" section on the hybrid-$\pi$ model.

---

### 4. Analysis of High Frequency Response of CE Amplifier

We'll analyze the amplifier by considering the equivalent circuit at high frequencies. The key is to determine the input time constant that dictates the upper cutoff frequency ($f_H$).

**Simplified High-Frequency Equivalent Circuit:**

The input side of the CE amplifier at high frequencies can be modeled as a resistance $R_{in}'$ connected in series with $C_{be}$ and $C_M$. $R_{in}'$ is the equivalent resistance seen looking into the base terminal, considering the biasing resistors ($R_1 || R_2 || r_{\pi}$).

**Steps for Analysis:**

1.  **Identify the dominant capacitances:** $C_{be}$ and $C_M$.
2.  **Determine the equivalent input resistance:** $R_{in}' = R_1 || R_2 || r_{\pi}$.
3.  **Calculate the effective input capacitance:** $C_{in\_eq} = C_{be} + C_M = C_{be} + C_{bc}(1 + |A_v|)$.
4.  **Calculate the input time constant:** $\tau_{in} = R_{in}' \times C_{in\_eq}$.
5.  **Determine the upper cutoff frequency ($f_H$):** $f_H = \frac{1}{2 \pi \tau_{in}} = \frac{1}{2 \pi R_{in}' C_{in\_eq}}$.

**Explanation of the Gain Rolloff:**

As frequency increases, the impedance of $C_{be}$ and $C_M$ decreases. This shunts more of the input signal away from the base-emitter junction, reducing the effective signal driving the amplifier and thus reducing the output voltage. The amplifier's voltage gain $A_v$ starts to decrease from its mid-band value.

**Example Calculation:**

Let's consider a CE amplifier with the following parameters:
*   $R_1 = 100 \, \text{k}\Omega$, $R_2 = 47 \, \text{k}\Omega$
*   $r_{\pi} = 5 \, \text{k}\Omega$
*   $C_{be} = 20 \, \text{pF}$
*   $C_{bc} = 5 \, \text{pF}$
*   Mid-band voltage gain $|A_v| = -100$

**Solution:**

1.  **Equivalent input resistance seen by the BJT:**
    $r_{\pi} = 5 \, \text{k}\Omega$
2.  **Input resistance from biasing resistors:**
    $R_B = R_1 || R_2 = 100 \, \text{k}\Omega || 47 \, \text{k}\Omega = \frac{100 \times 47}{100 + 47} \, \text{k}\Omega \approx 31.97 \, \text{k}\Omega$
3.  **Equivalent resistance for input time constant ($R_{in}'$):**
    $R_{in}' = R_B || r_{\pi} = 31.97 \, \text{k}\Omega || 5 \, \text{k}\Omega = \frac{31.97 \times 5}{31.97 + 5} \, \text{k}\Omega \approx 4.27 \, \text{k}\Omega$
4.  **Miller Capacitance ($C_M$):**
    $C_M = C_{bc}(1 + |A_v|) = 5 \, \text{pF} (1 + 100) = 5 \, \text{pF} \times 101 = 505 \, \text{pF}$
5.  **Total effective input capacitance ($C_{in\_eq}$):**
    $C_{in\_eq} = C_{be} + C_M = 20 \, \text{pF} + 505 \, \text{pF} = 525 \, \text{pF}$
6.  **Input time constant ($\tau_{in}$):**
    $\tau_{in} = R_{in}' \times C_{in\_eq} = 4.27 \times 10^3 \, \Omega \times 525 \times 10^{-12} \, \text{F} \approx 2.24 \times 10^{-6} \, \text{s}$
7.  **Upper cutoff frequency ($f_H$):**
    $f_H = \frac{1}{2 \pi \tau_{in}} = \frac{1}{2 \pi \times 2.24 \times 10^{-6} \, \text{s}} \approx \frac{1}{14.07 \times 10^{-6}} \, \text{Hz} \approx 71.1 \, \text{kHz}$

**Therefore, the upper cutoff frequency for this amplifier is approximately 71.1 kHz.**

**Reference:** Neamen (3/e) Chapter 8: "Frequency Response of Single-Stage Amplifiers" covers this analysis in detail. Rashid (2/e) Chapter 9: "Frequency Response of Amplifiers" also provides a thorough treatment.

---

### 5. Identifying Dominant Pole (High-Frequency Poles)

In a more rigorous analysis, the high-frequency response is characterized by multiple poles (frequencies where the gain starts to roll off). The highest frequency pole ($f_{PH}$) is typically the most dominant and determines the overall bandwidth.

**Multiple Time Constants:**

The simplified approach assumes a single dominant pole. However, there are other time constants associated with different capacitance-resistance combinations in the circuit. For a CE amplifier, these include:

*   **Input Pole:** Primarily due to $C_{be}$ and $C_M$ in parallel with $R_{in}'$.
*   **Output Pole:** Primarily due to $C_{ce}$ in parallel with the output resistance ($r_o$) and the load resistance ($R_L'$). $R_L'$ is the effective load seen by the collector, which is the parallel combination of the actual load resistor ($R_C$) and any subsequent load.
    *   Output resistance for the pole calculation: $R_{out}' = r_o || R_L'$.
    *   Output time constant: $\tau_{out} = R_{out}' \times C_{ce}$.
    *   Output pole frequency: $f_{out} = \frac{1}{2 \pi R_{out}' C_{ce}}$.

**Dominant Pole Concept:**

The pole with the smallest time constant (or highest frequency) will have the most significant impact on the high-frequency response. In most CE amplifier configurations, the input pole associated with the Miller capacitance is the dominant one, meaning $f_H$ is primarily determined by the input time constant.

**Rule of Thumb:** The highest frequency pole is usually the dominant one. However, if $C_{ce}$ is exceptionally large or the output resistance is very low, the output pole could become dominant.

**Reference:** Sedra & Smith (6/e) Chapter 6: "Single-Stage Amplifiers" discusses the concept of poles and their effect on frequency response. Razavi (2015) Chapter 5: "Frequency Response" provides an excellent explanation of poles and their impact.

---

### 6. Design Considerations for High Frequency Response

To achieve a good high-frequency response, designers need to minimize the parasitic capacitances and the resistances they are associated with.

**Strategies for Improvement:**

*   **Reduce $C_{bc}$:**
    *   **Common-Base or Common-Collector Configuration:** These configurations have lower voltage gains from base to collector, thus reducing the Miller effect.
    *   **Grounded Collector (Emitter Follower) for Output:** This stage, when cascaded after a CE stage, has a voltage gain close to unity, significantly reducing the Miller effect at its input.
    *   **Cascode Amplifier:** This configuration effectively isolates the input from the output, preventing the Miller effect by keeping the voltage gain across $C_{bc}$ very small.
*   **Reduce $C_{be}$:**
    *   **Lower Collector Current ($I_C$):** Diffusion capacitance ($C_d$) is proportional to $I_C$. Lowering $I_C$ reduces $C_d$. However, this also reduces $g_m$, which in turn reduces the mid-band gain. A trade-off exists.
    *   **Use of Specific Transistors:** Some transistors are designed for high-frequency operation with inherently lower parasitic capacitances.
*   **Reduce Input Resistance ($R_{in}'$):**
    *   **Lower Biasing Resistors ($R_1 || R_2$):** This increases the current drawn from the source and might require a higher power supply.
    *   **Lower $r_{\pi}$:** This is achieved by increasing the quiescent collector current ($I_C$) and reducing the thermal voltage ($V_T$).
*   **Reduce Output Resistance ($R_{out}'$):**
    *   **Lower $r_o$:** This is influenced by the device but also by the bias current.
    *   **Lower Load Resistance ($R_L$):** This is a direct design choice.

**Reference:** Bell (5/e) Chapter 8: "Frequency Response of Amplifiers" discusses techniques for improving frequency response. Millman & Halkias (2/e) Chapter 12: "Multistage Amplifiers" might touch upon cascaded configurations for better frequency response.

---

### 7. Summary of Key Points for High Frequency Response

*   **Parasitic Capacitances:** $C_{be}$ and $C_{bc}$ are the primary contributors to high-frequency rolloff in CE amplifiers.
*   **Miller Effect:** $C_{bc}$ appears amplified at the input as $C_M = C_{bc}(1 + |A_v|)$, significantly increasing the effective input capacitance.
*   **Upper Cutoff Frequency ($f_H$):** Determined by the input time constant $\tau_{in} = R_{in}' \times C_{in\_eq}$, where $R_{in}'$ is the equivalent resistance seen at the input and $C_{in\_eq} = C_{be} + C_M$.
*   **Dominant Pole:** Usually the input pole, but output pole can be relevant. The highest frequency pole dictates the bandwidth.
*   **Design Strategies:** Reduce $C_{bc}$ (cascode, different configurations), reduce $C_{be}$ (lower $I_C$, specific transistors), and reduce associated resistances ($R_{in}', R_{out}'$).

**Important Point to Remember:** The Miller effect is the most significant factor causing the high-frequency gain reduction in a CE amplifier.

---

### 8. Practice Questions and Exercises

**Question 1:**
A CE amplifier has the following parameters: $R_1 = 56 \, \text{k}\Omega$, $R_2 = 22 \, \text{k}\Omega$, $r_{\pi} = 3 \, \text{k}\Omega$, $C_{be} = 30 \, \text{pF}$, $C_{bc} = 8 \, \text{pF}$, and a mid-band voltage gain $|A_v| = -120$. Calculate the upper cutoff frequency ($f_H$).

**Answer 1:**
1.  $R_B = R_1 || R_2 = 56 \, \text{k}\Omega || 22 \, \text{k}\Omega = \frac{56 \times 22}{56 + 22} \, \text{k}\Omega \approx 15.77 \, \text{k}\Omega$
2.  $R_{in}' = R_B || r_{\pi} = 15.77 \, \text{k}\Omega || 3 \, \text{k}\Omega = \frac{15.77 \times 3}{15.77 + 3} \, \text{k}\Omega \approx 2.54 \, \text{k}\Omega$
3.  $C_M = C_{bc}(1 + |A_v|) = 8 \, \text{pF} (1 + 120) = 8 \, \text{pF} \times 121 = 968 \, \text{pF}$
4.  $C_{in\_eq} = C_{be} + C_M = 30 \, \text{pF} + 968 \, \text{pF} = 998 \, \text{pF}$
5.  $\tau_{in} = R_{in}' \times C_{in\_eq} = 2.54 \times 10^3 \, \Omega \times 998 \times 10^{-12} \, \text{F} \approx 2.535 \times 10^{-6} \, \text{s}$
6.  $f_H = \frac{1}{2 \pi \tau_{in}} = \frac{1}{2 \pi \times 2.535 \times 10^{-6} \, \text{s}} \approx 62.7 \, \text{kHz}$

**Question 2:**
List at least three methods to improve the high-frequency response of a CE amplifier.

**Answer 2:**
1.  **Use a Cascode Amplifier Configuration:** This configuration isolates the input from the output, significantly reducing the Miller effect.
2.  **Reduce the Mid-Band Voltage Gain ($|A_v|$):** A lower gain means a smaller Miller capacitance ($C_M = C_{bc}(1+|A_v|)$). This can be achieved by adjusting the load resistor or the bias current.
3.  **Employ a Two-Stage Amplifier with an Emitter Follower:** The emitter follower (common-collector) stage has a voltage gain close to unity, minimizing the Miller effect at its input. Cascading a CE stage with an emitter follower can extend the bandwidth.
4.  **Choose Transistors with Lower Parasitic Capacitances:** Special high-frequency transistors are manufactured with reduced internal capacitances.
5.  **Lower the Quiescent Collector Current ($I_C$):** This reduces the diffusion capacitance component of $C_{be}$, but it comes at the cost of lower transconductance ($g_m$) and thus lower mid-band gain.

**Question 3:**
What is the Miller effect, and how does it impact the high-frequency response of a CE amplifier?

**Answer 3:**
The Miller effect describes how a capacitance ($C_{bc}$) connected between the input terminal (base) and the output terminal (collector) of an amplifier with a voltage gain ($A_v$) appears as a much larger capacitance at the input. This amplified capacitance, known as the Miller capacitance ($C_M$), is given by $C_M = C_{bc}(1 - A_v)$. For a CE amplifier, $A_v$ is negative, so $C_M = C_{bc}(1 + |A_v|)$. This significantly larger capacitance at the input, when combined with the input resistance, creates a dominant pole at a lower frequency, thus reducing the amplifier's bandwidth and causing gain rolloff at high frequencies.

---

### 9. Alignment with Course Outcomes

This topic directly addresses the following Course Outcomes:

*   **CO1: Design and analyze the RC circuits and BJT biasing circuits (Knowledge Level: K4)**
    *   Understanding the biasing resistors ($R_1, R_2$) and their role in setting the input resistance is crucial for the analysis. The calculation of $R_{in}'$ involves parallel combinations of these resistors.
*   **CO2: Perform small signal and high frequency analysis of BJT amplifier circuits using equivalent models (Knowledge Level: K3)**
    *   This entire topic is centered around the high-frequency analysis of the CE amplifier using the hybrid-$\pi$ model, specifically incorporating parasitic capacitances and the Miller effect. The calculation of $f_H$ is a direct application of this outcome.
*   **CO3: Design and analyze MOSFET amplifier circuits (Knowledge Level: K4)**
    *   While this topic is BJT-specific, the fundamental principles of frequency response analysis due to parasitic capacitances and the concept of a dominant pole are transferable to MOSFET amplifier analysis.
*   **CO4: Design and analyze feedback amplifiers and oscillators (Knowledge Level: K4)**
    *   The gain $|A_v|$ used in the Miller effect calculation is a key parameter for feedback amplifiers. Understanding how parasitic capacitances limit the bandwidth of amplifiers is essential for designing stable oscillators.
*   **CO5: Design power amplifiers and voltage regulator circuits (Knowledge Level: K4)**
    *   High-frequency performance is also a consideration in power amplifiers (e.g., RF amplifiers), although the dominant factors might differ. Understanding the general principles of frequency response is foundational.

---

This concludes the notes on the analysis of the high-frequency response of a CE amplifier. Understanding these concepts is vital for designing amplifiers that operate effectively over a desired range of frequencies.
