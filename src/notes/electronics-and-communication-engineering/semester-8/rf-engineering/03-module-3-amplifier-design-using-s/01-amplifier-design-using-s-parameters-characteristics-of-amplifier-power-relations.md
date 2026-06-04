---
title: "Amplifier design using S-parameters - Characteristics of Amplifier Power Relations"
subject: "RF ENGINEERING"
module: "Module 3: Amplifier design using S"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff5e8"
status: "completed"
scrapedAt: "2026-05-23T18:56:57.856Z"
---
# Module 3: Amplifier Design using S-Parameters - Characteristics of Amplifier Power Relations

This module delves into the fundamental characteristics of amplifier power relations when designing RF amplifiers using S-parameters. Understanding these concepts is crucial for achieving desired amplification, efficiency, and stability in RF circuits.

## 1. Introduction to Amplifier Power Relations

RF amplifiers are designed to increase the power of an input signal. The efficiency and effectiveness of an amplifier are quantified by various power-related parameters. S-parameters provide a powerful framework for analyzing and designing these amplifiers by relating incident and reflected power waves at the ports of a network.

*   **Key Concept:** Power is the rate at which energy is transferred or converted. In RF circuits, we are interested in signal power, which is often measured in Watts (W) or dBm (decibels relative to 1 milliwatt).
*   **Reference:** Both Ludwig & Reinhold and Pozar extensively cover fundamental RF power concepts, which are the basis for understanding amplifier power relations.

## 2. Definitions of Key Power Parameters

To effectively design and analyze RF amplifiers, several key power parameters must be understood:

### 2.1. Input Power ($P_{in}$)

*   **Definition:** The power delivered to the input port of the amplifier.
*   **S-Parameter Relation:** In terms of voltage and current waves, $P_{in}$ is related to the incident voltage wave ($a_1$) and the characteristic impedance ($Z_0$) of the system.
    *   $P_{in} = \frac{|a_1|^2}{1 - |S_{11}|^2} \times \frac{1}{Z_0}$ (This is an approximation. More precisely, it's the power *delivered* to the amplifier, considering reflections.)
    *   A simpler way to think about it: $P_{in}$ is the power that would be delivered to the input port if it were matched to the source impedance ($Z_S$).

### 2.2. Output Power ($P_{out}$)

*   **Definition:** The power delivered by the amplifier to the output load.
*   **S-Parameter Relation:** $P_{out}$ is related to the outgoing voltage wave from the output port ($b_2$) and the load impedance ($Z_L$).
    *   $P_{out} = |b_2|^2 \times \frac{1}{Z_L}$ (This is the power *delivered* to the load, assuming the load impedance is $Z_L$.)

### 2.3. Transducer Power Gain ($G_T$)

*   **Definition:** The ratio of the power delivered to the load ($P_{out}$) to the maximum available power from the source ($P_{S,max}$). This is the most common measure of amplifier gain as it accounts for mismatch losses at both input and output.
*   **Formula:**
    $$G_T = \frac{P_{out}}{P_{S,max}}$$
*   **S-Parameter Relation:**
    $$G_T = \frac{|S_{21}|^2 (1 - |S_{11}|^2)}{(1 - |S_{12}|^2)(1 - |S_{22}|^2) - |S_{11}||S_{22}|^2 |S_{12}|^2}$$
    *   In simpler terms, for a well-matched system (where $S_{11} \approx 0$ and $S_{22} \approx 0$), $G_T \approx |S_{21}|^2$.

### 2.4. Available Power Gain ($G_A$)

*   **Definition:** The ratio of the power available from the amplifier's output port ($P_{out,avail}$) to the power available from the source ($P_{S,max}$). This is the gain of the amplifier itself, assuming the source is matched.
*   **Formula:**
    $$G_A = \frac{P_{out,avail}}{P_{S,max}}$$
*   **S-Parameter Relation:**
    $$G_A = \frac{|S_{21}|^2}{(1 - |S_{11}|^2)(1 - |S_{22}|^2) - |S_{11}||S_{22}|^2 |S_{12}|^2}$$
    *   Note that $G_A = G_T \times \frac{1 - |S_{11}|^2}{1 - |S_{11}|^2}$ if we consider power delivered to the load and power delivered by the source.
    *   For a unilateral amplifier (where $S_{12}=0$) and matched source and load ($S_{11}=0, S_{22}=0$), $G_A = |S_{21}|^2$.

### 2.5. Actual Power Gain ($G_P$)

*   **Definition:** The ratio of the power delivered to the load ($P_{out}$) to the power delivered to the input port of the amplifier ($P_{in}$). This gain accounts for input mismatch losses but not output mismatch losses.
*   **Formula:**
    $$G_P = \frac{P_{out}}{P_{in}}$$
*   **S-Parameter Relation:**
    $$G_P = |S_{21}|^2 \frac{1 - |S_{11}|^2}{1 - |S_{22}|^2}$$
    *   This is the gain when the amplifier is driven by the actual input power.

### 2.6. Efficiency Parameters

These parameters are crucial for power amplifiers, especially in high-power applications.

#### 2.6.1. Drain/Collector Efficiency ($\eta_D$ / $\eta_C$)

*   **Definition:** The ratio of the RF output power ($P_{out}$) to the DC power consumed by the active device ($P_{DC}$).
*   **Formula:**
    $$\eta_D = \frac{P_{out}}{P_{DC}}$$
*   **Importance:** Measures how effectively the DC power supply is converted into RF signal power. Higher efficiency means less heat generated and longer battery life (in portable devices).
*   **Reference:** Pozar and Ludwig & Reinhold discuss efficiency in the context of amplifier design, particularly for different types of active devices.

#### 2.6.2. Power Added Efficiency (PAE)

*   **Definition:** The ratio of the *added* RF power ($P_{out} - P_{in}$) to the DC power consumed ($P_{DC}$).
*   **Formula:**
    $$PAE = \frac{P_{out} - P_{in}}{P_{DC}}$$
*   **Importance:** More accurate measure of efficiency than drain efficiency for amplifiers with significant gain, as it accounts for the input signal power.

### 2.7. Insertion Loss (IL)

*   **Definition:** The reduction in power when a component or circuit is inserted into a signal path. It's often expressed as a negative gain.
*   **Formula:**
    $$IL = \frac{P_{out}}{P_{in}} \text{ (for a passive component)}$$
    $$IL = -\text{Gain}$$
*   **S-Parameter Relation:** For a two-port network, $IL = \frac{1}{|S_{21}|^2}$ if the ports are perfectly matched.

## 3. Power Gain Calculations from S-Parameters

S-parameters allow us to directly calculate the various gain figures of an amplifier without needing to measure intermediate power levels.

**Example:**
Consider a transistor whose S-parameters at a specific frequency are given as:
$S_{11} = 0.5 \angle 30^\circ$
$S_{12} = 0.1 \angle 10^\circ$
$S_{21} = 2.0 \angle 45^\circ$
$S_{22} = 0.4 \angle -20^\circ$

Let's assume the source impedance ($Z_S$) and load impedance ($Z_L$) are both $50 \Omega$ (our characteristic impedance $Z_0 = 50 \Omega$).

*   **Calculate $|S_{11}|^2$, $|S_{12}|^2$, $|S_{21}|^2$, $|S_{22}|^2$:**
    *   $|S_{11}|^2 = (0.5)^2 = 0.25$
    *   $|S_{12}|^2 = (0.1)^2 = 0.01$
    *   $|S_{21}|^2 = (2.0)^2 = 4.0$
    *   $|S_{22}|^2 = (0.4)^2 = 0.16$

*   **Calculate Transducer Power Gain ($G_T$):**
    $$G_T = \frac{|S_{21}|^2 (1 - |S_{11}|^2)}{(1 - |S_{12}|^2)(1 - |S_{22}|^2) - |S_{11}||S_{22}|^2 |S_{12}|^2}$$
    *   Numerator: $4.0 \times (1 - 0.25) = 4.0 \times 0.75 = 3.0$
    *   Denominator: $(1 - 0.01)(1 - 0.16) - (0.5 \times 0.4)^2 \times 0.01$
        *   $= (0.99)(0.84) - (0.2)^2 \times 0.01$
        *   $= 0.8316 - 0.04 \times 0.01$
        *   $= 0.8316 - 0.0004 = 0.8312$
    *   $G_T = \frac{3.0}{0.8312} \approx 3.61$

*   **Calculate Available Power Gain ($G_A$):**
    $$G_A = \frac{|S_{21}|^2}{(1 - |S_{11}|^2)(1 - |S_{22}|^2) - |S_{11}||S_{22}|^2 |S_{12}|^2}$$
    *   Numerator: $4.0$
    *   Denominator: $0.8312$ (from previous calculation)
    *   $G_A = \frac{4.0}{0.8312} \approx 4.81$

*   **Calculate Actual Power Gain ($G_P$):**
    $$G_P = |S_{21}|^2 \frac{1 - |S_{11}|^2}{1 - |S_{22}|^2}$$
    *   $G_P = 4.0 \times \frac{1 - 0.25}{1 - 0.16} = 4.0 \times \frac{0.75}{0.84} = 4.0 \times 0.8928 \approx 3.57$

**Observations:**

*   $G_T < G_A$ because $G_T$ accounts for the loss at the input port due to reflection ($1 - |S_{11}|^2$ term in the numerator).
*   $G_P$ is close to $G_T$ in this case because $|S_{12}|$ is small, meaning reverse isolation is good, and the output reflection coefficient term in $G_P$ is related to the *available* gain.

## 4. Stability Analysis and Power Relations

Stability is a fundamental requirement for any amplifier. An amplifier must not oscillate at any frequency, nor should it be susceptible to external conditions that might cause oscillations. S-parameters are instrumental in assessing amplifier stability.

### 4.1. Stability Factors

*   **Concept:** Stability is determined by whether the amplifier can deliver more power than it receives under certain conditions. This is related to the input and output reflection coefficients when the other port is terminated in a matched load.
*   **Rollett's Stability Factor (K):**
    $$K = \frac{1 - |S_{11}|^2 - |S_{22}|^2 + |\Delta|^2}{2|S_{12}S_{21}|}$$
    where $\Delta = S_{11}S_{22} - S_{12}S_{21}$.
*   **Conditions for Stability:**
    1.  **Unconditional Stability:** If $K > 1$ AND $|S_{11}| < 1$ AND $|S_{22}| < 1$. The amplifier is stable for all passive terminations.
    2.  **Conditional Stability:** If $K < 1$ OR $|S_{11}| > 1$ OR $|S_{22}| > 1$. The amplifier is stable only for specific load and source impedances. These are often represented by stability circles on a Smith chart.
*   **Reference:** Pozar and Ludwig & Reinhold provide detailed explanations of stability analysis using S-parameters and introduce concepts like stability circles.

### 4.2. Power Gain and Stability

*   **Impact of Mismatches:** When an amplifier is conditionally stable, large mismatches at the input or output ports can lead to oscillations. This means that the calculated power gain ($G_T$, $G_A$, $G_P$) might not be achievable or reliable under such conditions.
*   **Maximum Available Gain (MAG) and Maximum Flat Gain (MFG):** These are important gain figures for conditionally stable amplifiers.
    *   **MAG:** The maximum gain achievable when the amplifier is terminated with the conjugate of its input impedance and its output is terminated with the conjugate of its output impedance, *provided* the device is unconditionally stable. If conditionally stable, MAG is defined when the source and load impedances are chosen from the stability circles.
    *   **MFG:** The maximum gain achievable without any oscillations when the source and load impedances are *chosen to be matched* to the amplifier's input and output, respectively, *if* the amplifier is unconditionally stable. If conditionally stable, MFG is not a relevant concept.
*   **Relationship to Power:** The ability to achieve high power gain is directly linked to stability. If an amplifier is unstable, it will likely oscillate, consuming all available power and producing unwanted signals rather than amplifying the desired input signal.

## 5. Power Matching and Gain

### 5.1. Power Matching vs. Noise Matching

*   **Power Matching:** The goal is to maximize power transfer from the source to the amplifier and from the amplifier to the load. This typically involves matching the source impedance ($Z_S$) to the conjugate of the amplifier's input impedance ($Z_{in}$), and the load impedance ($Z_L$) to the conjugate of the amplifier's output impedance ($Z_{out}$). This maximizes the power gain.
*   **Noise Matching:** The goal is to minimize the noise figure. This often requires different source impedance terminations than those used for power matching.
*   **Trade-offs:** Designing for maximum power gain might compromise noise performance, and vice-versa. A judicious trade-off is often required depending on the application.

### 5.2. Stability Circles

*   **Definition:** Regions on the Smith chart representing source or load impedances that cause the amplifier to become unstable.
*   **Application:** By plotting stability circles, designers can identify regions of impedance that must be avoided to maintain stability. This directly impacts the achievable power gain, as the optimal power-matching impedances might lie within or close to the unstable regions for conditionally stable amplifiers.
*   **Reference:** Radmanesh (Advanced RF & microwave circuit design) and Carr (Secrets of RF circuit design) provide excellent visual explanations and methods for calculating and plotting stability circles.

## 6. Important Points to Remember

*   **Gain Definitions:** Understand the distinctions between transducer gain, available gain, and actual power gain. Transducer gain is usually the most relevant for system-level performance.
*   **S-Parameters are Frequency Dependent:** All gain calculations and stability analyses using S-parameters are valid only at the specific frequency for which the S-parameters were measured or calculated.
*   **Matching for Gain:** To maximize power gain, the source impedance should be matched to the input impedance of the amplifier, and the load impedance should be matched to the output impedance of the amplifier.
*   **Stability is Paramount:** An unstable amplifier is useless. Always verify stability before attempting to maximize gain.
*   **Efficiency Metrics:** For power amplifiers, efficiency (drain/collector efficiency and PAE) is as important as gain for overall performance and thermal management.
*   **S-Parameters and Impedances:** $S_{11}$ is the reflection coefficient at the input port, and $S_{22}$ is the reflection coefficient at the output port. These are directly related to input and output matching. $S_{21}$ represents the forward transmission gain, and $S_{12}$ represents the reverse transmission (feedback).

## 7. Practice Questions and Answers

**Question 1:**
Given the following S-parameters for a transistor at 1 GHz:
$S_{11} = 0.6 \angle 45^\circ$
$S_{12} = 0.2 \angle 20^\circ$
$S_{21} = 3.0 \angle 60^\circ$
$S_{22} = 0.5 \angle -30^\circ$

Assume a source impedance $Z_S = 50 \Omega$ and a load impedance $Z_L = 50 \Omega$.
Calculate the Transducer Power Gain ($G_T$) in dB.

**Answer 1:**
First, convert the magnitude to linear values squared:
$|S_{11}|^2 = (0.6)^2 = 0.36$
$|S_{12}|^2 = (0.2)^2 = 0.04$
$|S_{21}|^2 = (3.0)^2 = 9.0$
$|S_{22}|^2 = (0.5)^2 = 0.25$

Calculate $\Delta$:
$\Delta = S_{11}S_{22} - S_{12}S_{21}$
$S_{11}S_{22} = (0.6 \angle 45^\circ)(0.5 \angle -30^\circ) = 0.3 \angle 15^\circ = 0.3 (\cos 15^\circ + j \sin 15^\circ) \approx 0.3 (0.966 + j 0.259) \approx 0.290 + j 0.078$
$S_{12}S_{21} = (0.2 \angle 20^\circ)(3.0 \angle 60^\circ) = 0.6 \angle 80^\circ = 0.6 (\cos 80^\circ + j \sin 80^\circ) \approx 0.6 (0.174 + j 0.985) \approx 0.104 + j 0.591$
$\Delta \approx (0.290 + j 0.078) - (0.104 + j 0.591) \approx 0.186 - j 0.513$
$|\Delta|^2 = (0.186)^2 + (-0.513)^2 \approx 0.0346 + 0.263 \approx 0.2976$

Calculate $G_T$:
$$G_T = \frac{|S_{21}|^2 (1 - |S_{11}|^2)}{(1 - |S_{12}|^2)(1 - |S_{22}|^2) - |S_{11}||S_{22}|^2 |\Delta|^2}$$
*   Numerator: $9.0 \times (1 - 0.36) = 9.0 \times 0.64 = 5.76$
*   Denominator: $(1 - 0.04)(1 - 0.25) - (0.6 \times 0.5)^2 \times 0.2976$
    *   $= (0.96)(0.75) - (0.3)^2 \times 0.2976$
    *   $= 0.72 - 0.09 \times 0.2976$
    *   $= 0.72 - 0.0268 \approx 0.6932$
*   $G_T = \frac{5.76}{0.6932} \approx 8.308$

Convert to dB:
$G_T (dB) = 10 \log_{10}(8.308) \approx 9.196 \text{ dB}$

**Question 2:**
What is the primary difference between Transducer Power Gain ($G_T$) and Available Power Gain ($G_A$)? When is $G_T = G_A$?

**Answer 2:**
*   **Difference:** Transducer Power Gain ($G_T$) is the ratio of power delivered to the load to the maximum available power from the source. Available Power Gain ($G_A$) is the ratio of power available from the output port to the power available from the source. $G_T$ accounts for mismatch losses at the input port, while $G_A$ assumes the source is matched.
*   **When $G_T = G_A$:** $G_T = G_A$ when the input of the amplifier is perfectly matched to the source impedance, meaning there are no reflections at the input port ($|S_{11}| = 0$). In this case, the power delivered to the input equals the power available from the source.

**Question 3:**
If an amplifier has $K < 1$, what does this imply about its stability, and what measures might be taken to ensure stable operation?

**Answer 3:**
*   **Implication:** If $K < 1$, the amplifier is **conditionally stable**. This means it is not stable for all possible source and load impedances. There exist combinations of source and load impedances that will cause the amplifier to oscillate.
*   **Measures for Stable Operation:**
    1.  **Impedance Selection:** Carefully choose source and load impedances that lie within the stable regions of the stability circles on the Smith chart.
    2.  **Stabilization Networks:** Introduce feedback or series/shunt elements at the input or output to improve stability. This often involves designing matching networks that also have stabilizing effects.
    3.  **Sufficient Isolation:** For conditionally stable amplifiers, ensure adequate isolation between stages if cascading them.

## 8. Alignment with Course Outcomes

*   **CO1 (K2): Explain the basic idea about RF networks and working of RF filter circuits.**
    *   This module builds upon the understanding of RF networks by analyzing them as two-port devices with defined parameters (S-parameters). While not directly about filters, the concept of signal flow and power transfer through networks is foundational.
*   **CO2 (K2): Describe the behaviour of RF components and application of Network analyzer in parameter measurement.**
    *   S-parameters are the language used to describe the behavior of RF components like transistors and amplifiers. The entire analysis in this module relies on S-parameters, which are typically measured using a Vector Network Analyzer (VNA).
*   **CO3 (K3): Apply the principle of RF networks in the designing of RF amplifiers.**
    *   This module directly addresses the application of RF network principles (S-parameters) to design RF amplifiers by focusing on power relations, gain calculations, and stability analysis. The objective is to achieve a desired power output while maintaining stability.
*   **CO4 (K3): Apply the principle of RF networks in the designing RF Oscillators and Mixers.**
    *   While this module focuses on amplifiers, the principles of stability analysis using S-parameters are also critical for oscillator design (where feedback must be carefully controlled to achieve oscillation at a specific frequency) and mixer design. Unconditional stability is a prerequisite for reliable oscillator operation.

This comprehensive set of notes provides a solid foundation for understanding amplifier power relations using S-parameters in RF Engineering. Remember to practice these calculations and concepts with actual S-parameter data from datasheets or simulations to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
