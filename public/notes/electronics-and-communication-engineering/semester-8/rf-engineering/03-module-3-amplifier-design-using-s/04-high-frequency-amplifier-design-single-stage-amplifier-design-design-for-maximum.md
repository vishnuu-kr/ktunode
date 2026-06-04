---
title: "High frequency amplifier design – Single stage amplifier Design – Design for maximum gain"
subject: "RF ENGINEERING"
module: "Module 3: Amplifier design using S"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff5eb"
status: "completed"
scrapedAt: "2026-05-23T18:57:00.086Z"
---
# RF Engineering: Module 3 - Amplifier Design using S-Parameters

## Topic: High Frequency Amplifier Design – Single Stage Amplifier Design – Design for Maximum Gain

### 1. Introduction to High-Frequency Amplifier Design

At high frequencies (RF and microwave ranges), traditional small-signal analysis methods become insufficient. The parasitic effects of components (e.g., lead inductance, inter-electrode capacitance) and the physical layout of the circuit become significant. **S-parameters (Scattering Parameters)** emerge as the most effective tool for characterizing and designing RF circuits, including amplifiers.

**Why S-parameters?**

*   **Convenient for measurement:** S-parameters are easily measured using a Vector Network Analyzer (VNA) at high frequencies, where terminating circuits in open or short conditions (needed for Z or Y parameters) is challenging.
*   **Account for transmission line effects:** S-parameters inherently consider the wave propagation and interaction within the circuit.
*   **Systematic design approach:** They facilitate the design of stable and predictable RF circuits, especially when dealing with active devices like transistors.

**(Reference: Pozar, D. M. (2011). *Microwave and RF design of wireless systems*. (2nd ed.). John Wiley & Sons. Chapter 4)**

### 2. Single-Stage Amplifier Design Fundamentals

A single-stage amplifier uses a single active device (e.g., transistor) to provide amplification. The primary goals in designing such amplifiers are:

*   **Gain:** Amplifying the signal power or voltage.
*   **Stability:** Ensuring the amplifier does not oscillate.
*   **Noise Figure:** Minimizing the added noise from the amplifier.
*   **Power Output:** Delivering sufficient power to the load.
*   **Bandwidth:** Operating effectively over a desired range of frequencies.

This topic focuses specifically on **designing for maximum gain**.

**(Reference: Ludwig, R., & Reinhold, B. (2000). *RF Circuit Design: Theory & Applications*. (2nd ed.). Pearson Education India. Chapter 6)**

### 3. S-Parameters for Active Devices

An active device (like a transistor) can be characterized by its S-parameters. For a two-port network (which a transistor typically represents in an amplifier circuit), there are four S-parameters: $S_{11}$, $S_{12}$, $S_{21}$, and $S_{22}$.

*   **$S_{11}$ (Input Reflection Coefficient):** Measures the mismatch at the input port when the output port is terminated in a characteristic impedance ($Z_0$).
*   **$S_{21}$ (Forward Transmission Coefficient):** Measures the amplification (gain) from the input to the output.
*   **$S_{22}$ (Output Reflection Coefficient):** Measures the mismatch at the output port when the input port is terminated in a characteristic impedance ($Z_0$).
*   **$S_{12}$ (Reverse Transmission Coefficient):** Measures the signal feedback from the output to the input. This is often small in good amplifiers.

**Example:** A common-emitter BJT amplifier at RF frequencies can be modeled as a two-port network. The S-parameters of the transistor are provided by the manufacturer in a data sheet, usually as a function of frequency.

**(Reference: Radmanesh, M. M. (2017). *Advanced RF & microwave circuit design: the ultimate guide to superior design*. (2nd ed.). Author House. Chapter 5)**

### 4. Design for Maximum Available Gain (MAG) and Maximum Flat Gain (MFG)

When designing for maximum gain, we need to consider the operating conditions of the transistor and the impedance matching at the input and output.

#### 4.1. Unilateral Gain ($G_U$)

For a **lossless reciprocal** two-port network, the transducer power gain can be expressed in terms of S-parameters. However, transistors are generally **non-reciprocal** (due to active devices) and can have losses.

For a **non-reciprocal** two-port network, the **unilateral gain** ($G_U$) is defined under the assumption that the device is **unilateral**, meaning there is no reverse transmission ($S_{12} = 0$). In this idealized case, the gain is purely dependent on input and output matching.

$G_U = \frac{|S_{21}|^2 (1 - |\Gamma_{in}|^2)(1 - |\Gamma_{out}|^2)}{(1 - |S_{11}|^2)(1 - |S_{22}|^2)}$

Where:
*   $\Gamma_{in}$ is the reflection coefficient looking into the input port when the output is terminated in $Z_0$.
*   $\Gamma_{out}$ is the reflection coefficient looking into the output port when the input is terminated in $Z_0$.

#### 4.2. Maximum Available Gain (MAG)

The **Maximum Available Gain (MAG)** is the maximum possible transducer power gain that can be achieved from a two-port network, regardless of whether it is stable or not. This is achieved by optimally conjugating matching the input and output.

For a **potentially conjugate matched** amplifier, the MAG is:

$MAG = \frac{|S_{21}|}{|S_{12}|} (K - \sqrt{K^2 - 1})$

Where $K$ is the **Rollett stability factor**, given by:

$K = \frac{1 + |S_{11}S_{22} - S_{12}S_{21}|^2 - |S_{11}|^2 - |S_{22}|^2}{2 |S_{12}S_{21}|}$

**Important Note:** MAG is the gain achieved when both input and output are **conjugately matched**. This means:
*   Input Match: $\Gamma_{S} = \Gamma_{in}^*$
*   Output Match: $\Gamma_{L} = \Gamma_{out}^*$

#### 4.3. Maximum Flat Gain (MFG) / Flat Gain (FG)

The **Maximum Flat Gain (MFG)**, also referred to as **Flat Gain (FG)**, is the maximum gain achievable when the amplifier is **simultaneously matched** to the source and load impedances. This means the amplifier is matched at both the input and output ports for maximum power transfer without necessarily achieving the highest possible gain (which is MAG).

This is achieved by designing the source ($\Gamma_S$) and load ($\Gamma_L$) reflection coefficients to be equal to the input and output reflection coefficients of the device itself when terminated in $Z_0$ on the other side.

Specifically, the maximum flat gain is achieved when:

$\Gamma_{S} = S_{11}$
$\Gamma_{L} = S_{22}$

And the gain achieved is then:

$FG = |S_{21}|^2$

**In simpler terms:**
*   **MAG:** Achieves the highest possible gain, but might not be stable. It requires specific source and load impedances to achieve.
*   **MFG/FG:** Achieves a good gain while ensuring stability and simpler matching. The source and load impedances are chosen to be equal to the device's intrinsic input and output reflection coefficients.

**(Reference: Carr, J. J. (2001). *Secrets of RF circuit design*. (2nd ed.). McGraw-Hill Education. Chapter 7)**

### 5. Stability Considerations

Before designing for maximum gain, it's crucial to ensure the amplifier is stable. An unstable amplifier will oscillate, producing an unwanted, uncontrolled output.

**Stability Factors:**

*   **B1 (Beta 1) Stability Factor:** $B_1 = \frac{1 - |S_{11}|^2}{ |S_{12}S_{21} - S_{11}S_{22}| + |S_{11}|^2 }$
*   **B2 (Beta 2) Stability Factor:** $B_2 = \frac{1 - |S_{22}|^2}{ |S_{12}S_{21} - S_{11}S_{22}| + |S_{22}|^2 }$
*   **Rollett Stability Factor (K):**
    $K = \frac{1 + |S_{11}S_{22} - S_{12}S_{21}|^2 - |S_{11}|^2 - |S_{22}|^2}{2 |S_{12}S_{21}|}$

**Conditions for Stability:**

1.  **Unconditional Stability:** If $K > 1$ and $B_1 > 1$ (or $B_2 > 1$), the amplifier is unconditionally stable. This means it will be stable for *any* source and load impedances.
2.  **Conditional Stability:** If $K \leq 1$ or $B_1 \leq 1$ (or $B_2 \leq 1$), the amplifier is conditionally stable. It will only be stable for certain ranges of source and load impedances.

**For Maximum Gain Design:**

*   If the device is unconditionally stable ($K > 1$), we can proceed to design for MAG by conjugately matching the input and output.
*   If the device is conditionally stable ($K \leq 1$), we may need to add **stabilizing networks** (e.g., resistors) at the input or output to improve the stability factor ($K$) before attempting to achieve maximum gain. Adding series resistors at the input/output ports often improves stability but reduces gain.

**(Reference: Misra, D. K. (2019). *Radio-frequency and microwave communication circuits: analysis and design*. (2nd ed.). John Wiley & Sons. Chapter 7)**

### 6. Designing for Maximum Gain

#### 6.1. Achieving Maximum Available Gain (MAG)

To achieve MAG, we need to design the source impedance ($Z_S$) and load impedance ($Z_L$) such that the reflection coefficients at the input and output are the complex conjugates of the device's intrinsic reflection coefficients when terminated in $Z_0$.

*   **Input Matching for MAG:** The source reflection coefficient $\Gamma_S$ should be chosen to present the complex conjugate of $S_{11}$ when the output is terminated in $Z_0$. This is $\Gamma_{in}^*$.
    $\Gamma_S = S_{11}^*$ (This is for maximum **power gain**, not necessarily MAG, assuming $S_{12}=0$).
    For MAG, the input is matched to provide the conjugate of the input impedance of the device itself, when the output is terminated in $Z_0$.

*   **Output Matching for MAG:** The load reflection coefficient $\Gamma_L$ should be chosen to present the complex conjugate of $S_{22}$ when the input is terminated in $Z_0$. This is $\Gamma_{out}^*$.
    $\Gamma_L = S_{22}^*$ (This is for maximum **power gain**, not necessarily MAG, assuming $S_{12}=0$).
    For MAG, the output is matched to provide the conjugate of the output impedance of the device itself, when the input is terminated in $Z_0$.

**The key to MAG is to achieve conjugate matching for both input and output simultaneously.** This is done by designing the source impedance ($Z_S$) and load impedance ($Z_L$) to present the correct reflection coefficients to the device.

**Design Steps for MAG:**

1.  **Check Stability:** Calculate $K$, $B_1$, and $B_2$. If $K \leq 1$ or $B_1 \leq 1$ or $B_2 \leq 1$, the device is conditionally stable.
2.  **Stabilize (if necessary):** If conditionally stable, add stabilizing elements (e.g., resistors in series with source/load) to achieve $K>1$. This will reduce the potential gain.
3.  **Calculate MAG:** If unconditionally stable (or stabilized to be so), calculate MAG using the formula:
    $MAG = \frac{|S_{21}|}{|S_{12}|} (K - \sqrt{K^2 - 1})$
4.  **Determine Input and Output Matching Networks:**
    *   The input reflection coefficient required for MAG is $\Gamma_{in,MAG}$. This is obtained by conjugating the input impedance $Z_{in}$ when the output is terminated in $Z_0$: $\Gamma_{in,MAG} = \left(\frac{Z_{in} - Z_0}{Z_{in} + Z_0}\right)^*$.
    *   The output reflection coefficient required for MAG is $\Gamma_{out,MAG}$. This is obtained by conjugating the output impedance $Z_{out}$ when the input is terminated in $Z_0$: $\Gamma_{out,MAG} = \left(\frac{Z_{out} - Z_0}{Z_{out} + Z_0}\right)^*$.
    *   Design $\Gamma_S$ to match $\Gamma_{in,MAG}$ and $\Gamma_L$ to match $\Gamma_{out,MAG}$. These $\Gamma_S$ and $\Gamma_L$ values are generally complex and not necessarily $S_{11}^*$ and $S_{22}^*$.

**(Reference: Rohde, U. L., & Newkirk, D. P. (2017). *RF/microwave circuit design for wireless applications*. (2nd ed.). John Wiley & Sons. Chapter 5)**

#### 6.2. Achieving Maximum Flat Gain (MFG/FG)

The **Maximum Flat Gain (MFG)** is often preferred in practical designs because it guarantees stability with simple matching. It is achieved by matching the source and load impedances to the intrinsic input and output impedances of the transistor.

*   **Input Matching for MFG:** $\Gamma_S = S_{11}$
*   **Output Matching for MFG:** $\Gamma_L = S_{22}$

The gain achieved in this case is $FG = |S_{21}|^2$.

**Design Steps for MFG:**

1.  **Check Stability:** Calculate $K$, $B_1$, and $B_2$.
2.  **Stabilize (if necessary):** If conditionally stable, add stabilizing elements to improve $K$.
3.  **Design Input Match:** Design the source impedance ($Z_S$) to match the input reflection coefficient $S_{11}$ of the device. This means the reflection coefficient looking from the source towards the amplifier's input port should be $S_{11}$.
    $\Gamma_S = S_{11}$
4.  **Design Output Match:** Design the load impedance ($Z_L$) to match the output reflection coefficient $S_{22}$ of the device. This means the reflection coefficient looking from the load towards the amplifier's output port should be $S_{22}$.
    $\Gamma_L = S_{22}$
5.  **Calculate Gain:** The gain achieved with this matching is $FG = |S_{21}|^2$. This gain is guaranteed to be stable.

**(Reference: Davis, W. A., & Agarwal, K. K. (2017). *Radio frequency circuit design*. (2nd ed.). John Wiley. Chapter 7)**

### 7. Impedance Matching Networks

To achieve the desired $\Gamma_S$ and $\Gamma_L$ (for MAG or MFG), impedance matching networks are used. These networks transform the characteristic impedance ($Z_0$, usually 50 ohms) to the required source ($Z_S$) or load ($Z_L$) impedances that will result in the desired reflection coefficients.

Common matching networks include:

*   **L-networks:** Simple, two-component networks.
*   **Pi (Π) and Tee (T) networks:** Three-component networks, offering more flexibility.
*   **Stub matching:** Using short or open-circuited transmission line stubs.
*   **Distributed elements:** Using microstrip lines or striplines.

The design of these networks involves calculations using Smith Charts or circuit analysis tools.

**(Reference: Bowick, C., Ajluni, C., & Blyler, J. (2015). *RF Circuit Design*. (2nd ed.). Newnes. Chapter 6)**

### 8. Design Example: Designing for Maximum Gain

Let's assume we have a transistor with the following S-parameters at a specific frequency:

$S_{11} = 0.5 \angle 30^\circ$
$S_{12} = 0.1 \angle 10^\circ$
$S_{21} = 4.0 \angle 75^\circ$
$S_{22} = 0.4 \angle -45^\circ$

**Step 1: Check Stability**

Calculate K:
$|S_{11}S_{22} - S_{12}S_{21}| = |(0.5 \angle 30^\circ)(0.4 \angle -45^\circ) - (0.1 \angle 10^\circ)(4.0 \angle 75^\circ)|$
$= |(0.2 \angle -15^\circ) - (0.4 \angle 85^\circ)|$
$= |(0.193 - j0.052) - (0.035 + j0.396)|$
$= |0.158 - j0.448| = 0.475$

$K = \frac{1 + |S_{11}S_{22} - S_{12}S_{21}|^2 - |S_{11}|^2 - |S_{22}|^2}{2 |S_{12}S_{21}|}$
$|S_{11}|^2 = 0.5^2 = 0.25$
$|S_{22}|^2 = 0.4^2 = 0.16$
$|S_{12}S_{21}| = |(0.1)(4.0)| = 0.4$

$K = \frac{1 + (0.475)^2 - 0.25 - 0.16}{2 \times 0.4} = \frac{1 + 0.2256 - 0.25 - 0.16}{0.8} = \frac{0.8156}{0.8} \approx 1.02$

Since $K \approx 1.02 > 1$, the device is **unconditionally stable**.

**Step 2: Design for Maximum Gain (MAG)**

To achieve MAG, we need to conjugate match the input and output.
First, let's calculate MAG:

$MAG = \frac{|S_{21}|}{|S_{12}|} (K - \sqrt{K^2 - 1})$
$MAG = \frac{4.0}{0.1} (1.02 - \sqrt{1.02^2 - 1})$
$MAG = 40 (1.02 - \sqrt{1.0404 - 1})$
$MAG = 40 (1.02 - \sqrt{0.0404})$
$MAG = 40 (1.02 - 0.201)$
$MAG = 40 (0.819) \approx 32.76$

In dB, $MAG_{dB} = 10 \log_{10}(32.76) \approx 15.15$ dB.

To achieve this, we need to design source and load impedances that present the conjugate of the input and output impedances of the transistor. This requires calculating the input and output impedances from S-parameters, which is a more involved process typically done using software or Smith Chart calculations. The target $\Gamma_S$ and $\Gamma_L$ will be derived from these impedances.

**Step 3: Design for Maximum Flat Gain (MFG/FG)**

To achieve MFG, we simply match $\Gamma_S = S_{11}$ and $\Gamma_L = S_{22}$.

*   **Input Match:** Design the source impedance $Z_S$ such that the reflection coefficient seen by the amplifier at its input is $S_{11} = 0.5 \angle 30^\circ$.
    This means $\Gamma_S = 0.5 \angle 30^\circ$.
*   **Output Match:** Design the load impedance $Z_L$ such that the reflection coefficient seen by the amplifier at its output is $S_{22} = 0.4 \angle -45^\circ$.
    This means $\Gamma_L = 0.4 \angle -45^\circ$.

The gain achieved in this case is $FG = |S_{21}|^2 = (4.0)^2 = 16$.
In dB, $FG_{dB} = 10 \log_{10}(16) \approx 12.04$ dB.

Comparing MAG and FG:
*   MAG $\approx 15.15$ dB
*   FG $\approx 12.04$ dB

As expected, MAG is higher than FG, but achieving MAG requires more precise matching and might be more sensitive to component variations. FG is generally preferred for robustness and guaranteed stability.

**(Reference: Abrie, P. L. D. (2019). *Design of RF and microwave amplifiers and oscillators*. (2nd ed.). Artech House. Chapter 3)**

### 9. Important Points to Remember

*   **S-parameters are essential** for high-frequency amplifier design due to their ability to characterize devices and account for wave propagation.
*   **Stability is paramount.** Always check stability factors ($K, B_1, B_2$) before designing for maximum gain.
*   **MAG** represents the absolute maximum achievable gain, achieved by conjugate matching, but can be sensitive and potentially unstable if the device is not unconditionally stable.
*   **MFG/FG** is the gain achieved by matching the source and load to the device's intrinsic input and output reflection coefficients, offering good gain with guaranteed stability.
*   **Impedance matching networks** are crucial for transforming impedances to achieve the desired reflection coefficients.
*   The choice between MAG and MFG depends on the application's requirements for gain, stability, and complexity.

### 10. Practice Questions

1.  What are the advantages of using S-parameters over Z or Y parameters for high-frequency amplifier design?
2.  Define MAG and MFG. Under what conditions is each achieved?
3.  Given the S-parameters of a transistor, how would you determine if it is unconditionally stable?
4.  If a transistor is conditionally stable, what steps might you take before designing for maximum gain?
5.  A single-stage amplifier is designed for maximum flat gain (MFG). If the device's $S_{21}$ is $5 \angle 60^\circ$, what is the gain of the amplifier in dB?
6.  Explain the role of impedance matching networks in achieving maximum gain.

### 11. Answers to Practice Questions

1.  **Advantages of S-parameters:**
    *   Easily measured at high frequencies using a VNA.
    *   Account for transmission line effects and wave propagation.
    *   Allow for systematic design of stable RF circuits.
    *   Handle non-reciprocal devices naturally.

2.  **MAG (Maximum Available Gain):** The highest possible transducer power gain achievable by optimally conjugating matching the input and output.
    **MFG (Maximum Flat Gain):** The gain achieved by matching the source and load impedances to the device's intrinsic input and output reflection coefficients, ensuring stability.

3.  To determine unconditional stability, you need to calculate the stability factors:
    *   **K-factor:** $K = \frac{1 + |S_{11}S_{22} - S_{12}S_{21}|^2 - |S_{11}|^2 - |S_{22}|^2}{2 |S_{12}S_{21}|}$
    *   **B1-factor:** $B_1 = \frac{1 - |S_{11}|^2}{ |S_{12}S_{21} - S_{11}S_{22}| + |S_{11}|^2 }$
    *   **B2-factor:** $B_2 = \frac{1 - |S_{22}|^2}{ |S_{12}S_{21} - S_{11}S_{22}| + |S_{22}|^2 }$
    The device is unconditionally stable if $K > 1$ and $B_1 > 1$ (and $B_2 > 1$).

4.  If a transistor is conditionally stable ($K \leq 1$ or $B_1 \leq 1$ or $B_2 \leq 1$), you might need to:
    *   Add **stabilizing networks** (e.g., series resistors at input/output, shunt resistors at input/output) to improve the stability factors. This often involves some trade-off in gain.
    *   Choose source and load impedances from the **stability circles** to ensure operation within the stable region.

5.  For maximum flat gain (MFG), the gain is simply $|S_{21}|^2$.
    Given $|S_{21}| = 5$, the gain is $|S_{21}|^2 = 5^2 = 25$.
    In dB, the gain is $10 \log_{10}(25) = 10 \times 1.398 \approx 13.98$ dB.

6.  Impedance matching networks are used to transform the standard source ($Z_0$) and load ($Z_0$) impedances to the specific source ($Z_S$) and load ($Z_L$) impedances required to achieve the desired reflection coefficients at the amplifier's input and output ports. For maximum gain (either MAG or MFG), these matching networks are designed to present the specific reflection coefficients ($\Gamma_{in,MAG}, \Gamma_{out,MAG}$ for MAG; $S_{11}, S_{22}$ for MFG) that maximize power transfer.

---
This concludes the study notes for designing single-stage amplifiers for maximum gain. Remember to always prioritize stability before pushing for the absolute maximum gain.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
