---
title: "Tests for Unconditional Stability"
subject: "RF ENGINEERING"
module: "Module 3: Amplifier design using S"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff5ea"
status: "completed"
scrapedAt: "2026-05-23T18:56:59.313Z"
---
# RF Engineering: Module 3 - Amplifier Design Using S-Parameters

## Topic: Tests for Unconditional Stability

### 1. Introduction to Stability in RF Amplifiers

*   **Definition of Stability:** An amplifier is considered stable if it does not oscillate. Oscillation occurs when the amplifier's feedback loop, internal or external, provides sufficient positive gain at a specific frequency to sustain oscillations.
*   **Importance of Stability:** Unconditional stability is crucial for reliable RF amplifier operation. Oscillations can lead to signal distortion, component damage, and unpredictable performance.
*   **S-Parameters and Stability:** S-parameters are fundamental to analyzing and predicting amplifier stability. They describe the relationship between incident and reflected waves at the ports of a multi-port network, including transistors.

**[CO1: Explain the basic idea about RF networks and working of RF filter circuits (Knowledge Level: K2)]**
*   S-parameters are a key tool for characterizing RF networks, which are the building blocks of amplifiers. Understanding how these networks behave under different conditions is essential for stability analysis.

**[CO3: Apply the principle of RF networks in the designing of RF amplifiers (Knowledge Level: K3)]**
*   This topic directly addresses the application of RF network principles (S-parameters) to ensure the stable design of RF amplifiers.

### 2. Understanding Oscillation Conditions

Oscillation occurs when the feedback path in an amplifier provides a positive gain at a specific frequency with a total phase shift of 360 degrees (or multiples thereof).

*   **Positive Feedback:** In an amplifier, unintended positive feedback can arise from internal device characteristics or external circuit elements.
*   **Gain and Phase Shift:** For oscillation to occur, the magnitude of the loop gain must be greater than or equal to 1, and the total phase shift around the loop must be 0 degrees or 360 degrees.

**Reference:**
*   **Pozar, Chapter 4: Amplifier Design:** Discusses feedback and its impact on amplifier stability, introducing the concept of oscillation conditions.

### 3. Defining Unconditional Stability

*   **Unconditional Stability:** An amplifier is unconditionally stable if it will not oscillate for *any* passive source and load impedance. This is the most desirable state for an amplifier.
*   **Conditional Stability:** An amplifier is conditionally stable if it might oscillate for certain combinations of source and load impedances, but not for all. In this case, careful impedance matching is required to prevent oscillations.

**Key Concept:** The goal of stability tests is to determine if an amplifier is unconditionally stable or conditionally stable.

### 4. Stability Factors and Parameters

Several parameters derived from S-parameters are used to quantitatively assess amplifier stability.

#### 4.1. Transducer Power Gain ($G_T$)

*   **Definition:** The ratio of the power delivered to the load to the power available from the source.
*   **Formula:** $G_T = \frac{|S_{21}|^2 (1 - |\Gamma_S|^2)(1 - |\Gamma_L|^2)}{|1 - S_{11}\Gamma_S|^2 |1 - S_{22}\Gamma_L|^2}$ where $\Gamma_S$ and $\Gamma_L$ are the source and load reflection coefficients, respectively.
*   **Importance for Stability:** While $G_T$ is about gain, its behavior is influenced by the stability of the amplifier. Large gains can sometimes be achieved at the expense of stability.

#### 4.2. Available Power Gain ($G_A$)

*   **Definition:** The ratio of the power delivered to the load to the power available from the source.
*   **Formula:** $G_A = \frac{|S_{21}|^2 (1 - |\Gamma_L|^2)}{|1 - S_{22}\Gamma_L|^2}$
*   **Relation to Stability:** Similar to $G_T$, its calculation relies on S-parameters.

#### 4.3. Stability Factor (K)

*   **Definition:** A measure of how close the amplifier is to oscillation. A value of K > 1 indicates unconditional stability.
*   **Formulas:**
    *   $K = \frac{1 - |S_{11}|^2 - |S_{22}|^2 + |\Delta|^2}{2|S_{12}S_{21}|}$
    *   where $\Delta = S_{11}S_{22} - S_{12}S_{21}$
*   **Interpretation:**
    *   **K > 1:** Unconditionally stable. The amplifier will not oscillate for any passive source or load impedance.
    *   **K < 1:** Conditionally stable. Oscillation may occur for certain source and load impedances.
    *   **|Δ| < 1:** This is a prerequisite for unconditional stability. If |Δ| ≥ 1, the amplifier is unconditionally stable.

**Reference:**
*   **Ludwig & Reinhold, Chapter 8: Stability Analysis:** Provides a thorough derivation and explanation of the K-factor and its significance.
*   **Pozar, Chapter 4: Amplifier Design:** Introduces K and other stability parameters.

#### 4.4. Rollett's Stability Factor (B1)

*   **Definition:** Another stability factor that, along with K, is used to determine unconditional stability.
*   **Formula:** $B_1 = \frac{1 - |S_{11}|^2 - |S_{22}|^2 + |\Delta|^2}{2|S_{12}S_{21}|}$ (Note: This is the same formula as K, sometimes referred to as B1 when considering specific conditions or derivations).

#### 4.5. Magnitude of $\Delta$

*   **Definition:** The determinant of the S-parameter matrix for a two-port network.
*   **Formula:** $\Delta = S_{11}S_{22} - S_{12}S_{21}$
*   **Condition for Unconditional Stability:** If $|\Delta| < 1$, the amplifier is unconditionally stable. This is a simpler condition to check first.

**Important Point to Remember:**
*   **Unconditional Stability Condition:** An amplifier is unconditionally stable if and only if:
    1.  $K > 1$
    2.  $|\Delta| < 1$
    3.  $g_s > 0$ (where $g_s$ is the source norm, $g_s = 1 - |\Gamma_S|^2$)
    4.  $g_l > 0$ (where $g_l$ is the load norm, $g_l = 1 - |\Gamma_L|^2$)
    *   If $K > 1$ and $|\Delta| < 1$ are met, the amplifier is unconditionally stable for all passive terminations (which by definition have $g_s > 0$ and $g_l > 0$).

#### 4.6. Operating Power Gain ($G_P$) and Maximum Available Gain ($G_{m a}$)

*   **Operating Power Gain ($G_P$):** The power delivered to the load divided by the power delivered to the input of the amplifier.
*   **Maximum Available Gain ($G_{m a}$):** The maximum possible gain of the amplifier when simultaneously matched to the source and load.
*   **Relation to Stability:** These gain parameters are important for amplifier performance. However, achieving very high $G_{m a}$ might push the amplifier into a conditionally stable region.

**Reference:**
*   **Carr & Bowick, Chapter 5: Understanding S-Parameters:** Explains the interpretation of stability factors and their relationship to S-parameters.
*   **Radmanesh (Author House), Chapter 9: Stability Analysis:** Provides detailed mathematical derivations for stability criteria.

### 5. Stability Circles

Stability circles are graphical tools used to determine the regions of source and load impedances for which the amplifier is stable.

*   **Definition:** A circle on the Smith Chart that separates the stable region from the unstable region of source or load impedances.
*   **Unstable Region:** The region outside the stability circle is typically the unstable region.
*   **Types of Stability Circles:**
    1.  **Source Stability Circles ($S_S$):** Locus of source reflection coefficients ($\Gamma_S$) for which the amplifier becomes unstable.
    2.  **Load Stability Circles ($S_L$):** Locus of load reflection coefficients ($\Gamma_L$) for which the amplifier becomes unstable.

#### 5.1. Derivation and Plotting of Stability Circles

The derivation involves setting the denominator of the gain expression to zero, which corresponds to the condition for oscillation.

*   **For Source Stability Circles:**
    *   Consider the amplifier terminated with a stable load ($\Gamma_L$).
    *   The condition for oscillation is when the input reflection coefficient of the amplifier, $\Gamma_{in}$, is equal to the source reflection coefficient, $\Gamma_S$.
    *   $\Gamma_{in} = S_{11} + \frac{S_{12}S_{21}\Gamma_L}{1 - S_{22}\Gamma_L}$
    *   The equation $\Gamma_{in} = \Gamma_S$ leads to an equation of a circle on the $\Gamma_S$ plane.

*   **For Load Stability Circles:**
    *   Consider the amplifier terminated with a stable source ($\Gamma_S$).
    *   The condition for oscillation is when the output reflection coefficient of the amplifier, $\Gamma_{out}$, is equal to the load reflection coefficient, $\Gamma_L$.
    *   $\Gamma_{out} = S_{22} + \frac{S_{12}S_{21}\Gamma_S}{1 - S_{11}\Gamma_S}$
    *   The equation $\Gamma_{out} = \Gamma_L$ leads to an equation of a circle on the $\Gamma_L$ plane.

**Important Points for Stability Circles:**

*   **Center and Radius:** The center ($C$) and radius ($r$) of a general circle equation $|z - C| = r$ on the Smith Chart are calculated from the S-parameters.
*   **Determining the "Inside" of the Circle:** To determine which side of the circle represents the unstable region, test a known point. For example, if you test $\Gamma_S = 0$ (short circuit at the input), and the amplifier is stable with this termination, then the region containing $\Gamma_S = 0$ is the stable region.

**Formulas for Stability Circles (General Case):**

For source stability circles (locus of $\Gamma_S$):
*   Center: $C_S = \frac{S_{11}^* - \Delta S_{22}^*}{1 - |S_{11}|^2 - |S_{22}|^2 + |\Delta|^2}$
*   Radius: $r_S = \frac{|S_{12}S_{21}|}{1 - |S_{11}|^2 - |S_{22}|^2 + |\Delta|^2}$

For load stability circles (locus of $\Gamma_L$):
*   Center: $C_L = \frac{S_{22}^* - \Delta S_{11}^*}{1 - |S_{11}|^2 - |S_{22}|^2 + |\Delta|^2}$
*   Radius: $r_L = \frac{|S_{12}S_{21}|}{1 - |S_{11}|^2 - |S_{22}|^2 + |\Delta|^2}$

**[CO2: Describe the behaviour of RF components and application of Network analyser in parameter measurement (Knowledge Level: K2)]**
*   Network analyzers are used to measure the S-parameters of RF components, which are then used to calculate and plot stability circles. Understanding the behavior of components under varying terminations is crucial for interpreting stability plots.

**[CO3: Apply the principle of RF networks in the designing of RF amplifiers (Knowledge Level: K3)]**
*   Stability circles are a direct application of RF network principles to identify safe operating regions for impedance matching in amplifier design.

**Reference:**
*   **Pozar, Chapter 4: Amplifier Design:** Provides the derivation and graphical interpretation of stability circles.
*   **Radmanesh (Pearson), Chapter 11: Stability and Sensitivity:** Explains the construction and use of stability circles.

### 6. Tests for Unconditional Stability

There are several tests to determine unconditional stability.

#### 6.1. The K-Factor and |Δ| Test (Algebraic Method)

*   **Procedure:**
    1.  Obtain the S-parameters ($S_{11}, S_{12}, S_{21}, S_{22}$) of the amplifier at the desired frequency.
    2.  Calculate $\Delta = S_{11}S_{22} - S_{12}S_{21}$.
    3.  Calculate $K = \frac{1 - |S_{11}|^2 - |S_{22}|^2 + |\Delta|^2}{2|S_{12}S_{21}|}$.
*   **Result:**
    *   If $K > 1$ **AND** $|\Delta| < 1$, the amplifier is unconditionally stable.
    *   If either $K \le 1$ or $|\Delta| \ge 1$, the amplifier is conditionally stable.

**Example:**
Given S-parameters at a certain frequency:
$S_{11} = 0.5 \angle 30^\circ$
$S_{12} = 0.1 \angle 10^\circ$
$S_{21} = 3.0 \angle 45^\circ$
$S_{22} = 0.4 \angle -20^\circ$

1.  Calculate $|\Delta|$:
    *   $S_{11}S_{22} = (0.5 \angle 30^\circ)(0.4 \angle -20^\circ) = 0.2 \angle 10^\circ$
    *   $S_{12}S_{21} = (0.1 \angle 10^\circ)(3.0 \angle 45^\circ) = 0.3 \angle 55^\circ$
    *   $\Delta = 0.2 \angle 10^\circ - 0.3 \angle 55^\circ$
    *   $\Delta = (0.2 \cos 10^\circ + j 0.2 \sin 10^\circ) - (0.3 \cos 55^\circ + j 0.3 \sin 55^\circ)$
    *   $\Delta \approx (0.197 + j 0.035) - (0.172 + j 0.246)$
    *   $\Delta \approx 0.025 - j 0.211$
    *   $|\Delta| \approx \sqrt{0.025^2 + (-0.211)^2} \approx \sqrt{0.000625 + 0.044521} \approx \sqrt{0.045146} \approx 0.212$

2.  Calculate $K$:
    *   $|S_{11}|^2 = 0.5^2 = 0.25$
    *   $|S_{22}|^2 = 0.4^2 = 0.16$
    *   $|S_{12}S_{21}| = |0.3 \angle 55^\circ| = 0.3$
    *   $K = \frac{1 - 0.25 - 0.16 + (0.212)^2}{2(0.3)} = \frac{1 - 0.41 + 0.045}{0.6} = \frac{0.635}{0.6} \approx 1.058$

3.  **Conclusion:** Since $K \approx 1.058 > 1$ and $|\Delta| \approx 0.212 < 1$, the amplifier is **unconditionally stable** at this frequency.

#### 6.2. Stability Circle Plotting and Interpretation (Graphical Method)

*   **Procedure:**
    1.  Calculate the centers ($C_S, C_L$) and radii ($r_S, r_L$) of the source and load stability circles.
    2.  Plot these circles on a Smith Chart.
    3.  Determine the unstable regions. A common method is to test a known stable termination. For instance, if the amplifier is known to be stable with a matched source ($\Gamma_S = 0$) and a matched load ($\Gamma_L = 0$), then the regions containing the center of the Smith Chart are stable.
    4.  **Unconditional Stability Check:** If both stability circles completely lie outside the unit circle (i.e., the entire Smith Chart represents the stable region for both source and load), then the amplifier is unconditionally stable.
        *   For source stability circles: This means $|C_S| - r_S > 1$ (circle completely outside).
        *   For load stability circles: This means $|C_L| - r_L > 1$ (circle completely outside).

**Important Point to Remember:**
*   If $K > 1$ and $|\Delta| < 1$, then the stability circles will automatically lie outside the unit circle, confirming unconditional stability. The algebraic method is often quicker, but graphical methods are intuitive for understanding regions of stability.

#### 6.3. Other Stability Tests (Less Common for Direct Unconditional Stability Check but Relevant)

*   **D-Factor:** Related to the stability of cascaded stages.
*   **M-Factor:** Represents the minimum value of $|\Gamma_S|$ or $|\Gamma_L|$ for which the amplifier is stable. If $M_S > 1$ and $M_L > 1$ (for specific definitions of M-factor), it implies unconditional stability.

**Reference:**
*   **Misra, Chapter 7: Stability of Amplifiers:** Discusses various stability factors and their implications.
*   **Rohde & Newkirk, Chapter 6: Stability Analysis:** Provides detailed examples of stability circle plotting and interpretation.

### 7. Ensuring Unconditional Stability in Design

If an amplifier is found to be conditionally stable, design techniques can be employed to achieve unconditional stability.

*   **Input and Output Matching Networks:** Properly designed matching networks can alter the effective $\Gamma_S$ and $\Gamma_L$ seen by the active device.
*   **Stagger Tuning:** Adjusting the tuning of input and output networks to spread out the poles of the transfer function.
*   **Feedback:** Introducing controlled negative feedback can improve stability.
*   **Lowering Gain:** Reducing the amplifier's gain can often improve its stability margin.
*   **Component Selection:** Choosing active devices with inherently better stability characteristics.

**[CO3: Apply the principle of RF networks in the designing of RF amplifiers (Knowledge Level: K3)]**
*   This section focuses on the practical application of stability analysis in the design process. If stability tests reveal conditional stability, designers must use network principles to modify the design for unconditional stability.

**Reference:**
*   **Abrie, Chapter 5: Stability in Amplifier Design:** Offers strategies and techniques for achieving unconditional stability.
*   **Bowick et al., Chapter 10: Amplifier Design Considerations:** Covers practical aspects of amplifier design, including stability enhancement.

### 8. Summary of Unconditional Stability Conditions

An amplifier is unconditionally stable if:

1.  **$K > 1$**
2.  **$|\Delta| < 1$**

These two conditions guarantee that the amplifier will not oscillate for any passive source or load impedance. Graphically, this means both the source and load stability circles lie entirely outside the unit circle on the Smith Chart.

### 9. Practice Questions

1.  **What are the two primary algebraic conditions that must be met for an amplifier to be unconditionally stable?**
    *   **Answer:** $K > 1$ and $|\Delta| < 1$.

2.  **If an amplifier has $K = 0.8$ and $|\Delta| = 0.5$, is it unconditionally stable? Explain why or why not.**
    *   **Answer:** No. While $|\Delta| < 1$, the condition $K > 1$ is not met. Therefore, the amplifier is conditionally stable.

3.  **Describe the significance of stability circles in RF amplifier design.**
    *   **Answer:** Stability circles graphically represent the regions of source and load impedances that lead to instability. They help designers identify stable operating regions and ensure that the amplifier does not oscillate for any passive termination by ensuring these circles lie outside the unit circle.

4.  **An amplifier has the following S-parameters at a particular frequency:**
    $S_{11} = 0.6 \angle 45^\circ$
    $S_{12} = 0.05 \angle 15^\circ$
    $S_{21} = 2.5 \angle 60^\circ$
    $S_{22} = 0.5 \angle -30^\circ$
    **Calculate $K$ and $|\Delta|$ and determine if the amplifier is unconditionally stable.**

    *   **Solution:**
        *   $S_{11}S_{22} = (0.6 \angle 45^\circ)(0.5 \angle -30^\circ) = 0.3 \angle 15^\circ$
        *   $S_{12}S_{21} = (0.05 \angle 15^\circ)(2.5 \angle 60^\circ) = 0.125 \angle 75^\circ$
        *   $\Delta = 0.3 \angle 15^\circ - 0.125 \angle 75^\circ$
        *   $\Delta = (0.3 \cos 15^\circ + j 0.3 \sin 15^\circ) - (0.125 \cos 75^\circ + j 0.125 \sin 75^\circ)$
        *   $\Delta \approx (0.2898 + j 0.0776) - (0.0324 + j 0.1209)$
        *   $\Delta \approx 0.2574 - j 0.0433$
        *   $|\Delta| \approx \sqrt{0.2574^2 + (-0.0433)^2} \approx \sqrt{0.06625 + 0.00187} \approx \sqrt{0.06812} \approx 0.261$
        *   $|S_{11}|^2 = 0.6^2 = 0.36$
        *   $|S_{22}|^2 = 0.5^2 = 0.25$
        *   $|S_{12}S_{21}| = 0.125$
        *   $K = \frac{1 - 0.36 - 0.25 + (0.261)^2}{2(0.125)} = \frac{1 - 0.61 + 0.068}{0.25} = \frac{0.458}{0.25} = 1.832$
    *   **Conclusion:** Since $K = 1.832 > 1$ and $|\Delta| = 0.261 < 1$, the amplifier is **unconditionally stable**.

5.  **How can a designer modify a conditionally stable amplifier to make it unconditionally stable? List at least two methods.**
    *   **Answer:**
        *   Introduce negative feedback.
        *   Modify input/output matching networks.
        *   Select a different active device with better inherent stability.
        *   Reduce the amplifier's gain.

### 10. Important Points to Remember

*   **Unconditional stability is the ideal state for RF amplifiers.**
*   **The K-factor and $|\Delta|$ are critical algebraic metrics for assessing stability.**
*   **$K > 1$ and $|\Delta| < 1$ are the necessary and sufficient conditions for unconditional stability.**
*   **Stability circles provide a graphical understanding of stable and unstable regions for source and load impedances.**
*   **If an amplifier is conditionally stable, design techniques are required to achieve unconditional stability.**
*   **Stability must be checked at all relevant frequencies of operation.**

This concludes the study notes on Tests for Unconditional Stability. Understanding these concepts is vital for the successful design of stable RF amplifiers.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
