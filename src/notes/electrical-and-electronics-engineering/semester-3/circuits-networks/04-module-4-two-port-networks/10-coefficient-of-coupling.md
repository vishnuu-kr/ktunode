---
title: "coefficient of coupling"
subject: "CIRCUITS & NETWORKS"
module: "Module 4: Two port networks"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35ae4"
status: "completed"
scrapedAt: "2026-05-23T16:11:49.706Z"
---
# CIRCUITS & NETWORKS - Module 4: Two Port Networks

## Topic: Coefficient of Coupling

### Learning Outcomes:

*   Understand the concept of mutual inductance and its role in coupled circuits.
*   Define and calculate the coefficient of coupling.
*   Analyze the behavior of magnetically coupled circuits.
*   Relate the coefficient of coupling to the degree of magnetic linkage between coils.
*   Apply the concept of coupling to the analysis of transformers.

---

### 1. Introduction to Coupled Circuits

**Key Concepts:**

*   **Mutual Inductance (M):** When the magnetic flux produced by one inductor links with another inductor, a voltage is induced in the second inductor due to the current in the first. This phenomenon is described by mutual inductance.
*   **Magnetic Coupling:** The degree to which the magnetic flux produced by one coil links with another coil.
*   **Dot Convention:** A convention used to indicate the polarity of the induced voltage in coupled circuits. Dots are placed on the terminals of coils where the current entering the dot produces a magnetic flux in the same direction.

**Definition:**

A circuit is said to be coupled if there is a magnetic flux linkage between its components. In two-port networks, coupling often arises from inductors that share a common magnetic field. This shared magnetic field is quantified by the **mutual inductance (M)**.

**Textbook References:**

*   **Van Valkenburg, Network Analysis:** Discusses mutual inductance and its representation in circuit diagrams.
*   **Ravish R Singh, Network Analysis and Synthesis:** Explains the concept of magnetically coupled circuits and the dot convention.
*   **Suresh Kumar, Electric Circuits & Networks:** Covers the mathematical formulation of mutual inductance and its impact on circuit equations.
*   **A Sudhakar, Shyammohan S Palli, Circuits and Networks, Analysis and Synthesis:** Provides a detailed explanation of coupled circuits and their analysis.

---

### 2. Mutual Inductance (M)

**Key Concepts:**

*   **Definition:** Mutual inductance (M) is the property of two coils by which a change in current in one coil induces a voltage in the other.
*   **Relationship to Self-Inductances:**
    *   $M = k \sqrt{L_1 L_2}$, where $L_1$ and $L_2$ are the self-inductances of the two coils, and $k$ is the coefficient of coupling.
*   **Energy Stored in Coupled Inductors:**
    The total energy stored in a system of two coupled inductors is given by:
    $W = \frac{1}{2} L_1 I_1^2 + \frac{1}{2} L_2 I_2^2 \pm M I_1 I_2$
    The sign of the mutual inductance term depends on the relative orientation of the magnetic fields (or the dot convention).

**Voltage Equations for Coupled Coils:**

Consider two coils with self-inductances $L_1$ and $L_2$, and mutual inductance $M$.
Let $v_1$ be the voltage across coil 1 and $v_2$ be the voltage across coil 2.
Let $i_1$ be the current in coil 1 and $i_2$ be the current in coil 2.

The voltage equations are:

$v_1 = L_1 \frac{di_1}{dt} \pm M \frac{di_2}{dt}$
$v_2 = L_2 \frac{di_2}{dt} \pm M \frac{di_1}{dt}$

The sign of the mutual inductance term depends on the dot convention.

*   **If currents enter the dotted terminals:** The mutual inductance term is positive ($\pm M \frac{di}{dt}$).
*   **If one current enters the dotted terminal and the other leaves the dotted terminal:** The mutual inductance term is negative ($\mp M \frac{di}{dt}$).

**Example 1 (Dot Convention):**

Consider two coils L1 and L2 with a mutual inductance M.
*   **Case 1: Currents entering dotted terminals.**
    *   $i_1$ enters the dot of L1, $i_2$ enters the dot of L2.
    *   $v_1 = L_1 \frac{di_1}{dt} + M \frac{di_2}{dt}$
    *   $v_2 = L_2 \frac{di_2}{dt} + M \frac{di_1}{dt}$

*   **Case 2: $i_1$ enters the dot of L1, $i_2$ leaves the dot of L2.**
    *   $v_1 = L_1 \frac{di_1}{dt} - M \frac{di_2}{dt}$
    *   $v_2 = L_2 \frac{di_2}{dt} - M \frac{di_1}{dt}$

**Important Point to Remember:** The dot convention is crucial for correctly writing the voltage equations for coupled circuits. If the currents enter the dotted terminals, the mutual inductance terms have the same sign. If one current enters the dot and the other leaves, the terms have opposite signs.

---

### 3. Coefficient of Coupling (k)

**Key Concepts:**

*   **Definition:** The coefficient of coupling ($k$) is a dimensionless quantity that represents the fraction of the magnetic flux produced by one coil that links with the other coil. It quantifies the degree of magnetic linkage.
*   **Range:** The value of $k$ is always between 0 and 1 ($0 \le k \le 1$).

**Calculation:**

The coefficient of coupling is defined as:

$k = \frac{M}{\sqrt{L_1 L_2}}$

**Interpretation of 'k' values:**

*   **k = 0 (No Coupling):** No magnetic flux from one coil links with the other. This occurs when the coils are placed far apart or are oriented such that their magnetic fields are perpendicular.
*   **0 < k < 1 (Partial Coupling):** Some magnetic flux from one coil links with the other. This is the most common scenario in practical coupled circuits.
*   **k = 1 (Perfect Coupling):** All the magnetic flux produced by one coil links with the other. This is an ideal condition and is rarely achieved in practice. It implies that the two coils are wound on the same core with very high permeability and are positioned optimally.

**Textbook References:**

*   **Van Valkenburg:** Introduces the concept of coupling coefficient in the context of transformers.
*   **Ravish R Singh:** Provides a clear mathematical definition and interpretation of the coupling coefficient.
*   **Suresh Kumar:** Explains the relationship between mutual inductance and coupling coefficient.
*   **A Sudhakar, Shyammohan S Palli:** Discusses the significance of the coupling coefficient in analyzing the performance of coupled circuits.

**Example 2 (Calculating k):**

Two coils with self-inductances $L_1 = 100$ mH and $L_2 = 40$ mH are coupled. If the mutual inductance between them is $M = 50$ mH, find the coefficient of coupling.

**Solution:**

Given:
$L_1 = 100 \times 10^{-3}$ H
$L_2 = 40 \times 10^{-3}$ H
$M = 50 \times 10^{-3}$ H

$k = \frac{M}{\sqrt{L_1 L_2}}$
$k = \frac{50 \times 10^{-3}}{\sqrt{(100 \times 10^{-3}) \times (40 \times 10^{-3})}}$
$k = \frac{50 \times 10^{-3}}{\sqrt{4000 \times 10^{-6}}}$
$k = \frac{50 \times 10^{-3}}{63.24 \times 10^{-3}}$
$k \approx 0.79$

This indicates a relatively strong coupling between the two coils.

---

### 4. Analysis of Magnetically Coupled Circuits

**Key Concepts:**

*   **Transformer Model:** Coupled inductors are the fundamental components of transformers.
*   **Impedance and Admittance Parameters:** Coupled circuits can be analyzed using various two-port network parameters.
*   **T-Equivalent Circuit:** A useful representation for coupled inductors.

**T-Equivalent Circuit for Coupled Inductors:**

For two coupled inductors with self-inductances $L_1$ and $L_2$, and mutual inductance $M$, they can be replaced by an equivalent T-network consisting of three inductors. There are two possible T-equivalent circuits, depending on the assumed relationship between $L_1$, $L_2$, and $M$.

**Case A: Positive Mutual Inductance (e.g., currents entering dotted terminals)**

The T-equivalent circuit consists of:
*   Inductor in the series arm (common flux path): $L_{12} = M$
*   Inductor in the $i_1$ branch: $L_{11} = L_1 - M$
*   Inductor in the $i_2$ branch: $L_{22} = L_2 - M$

This is valid only if $L_1 \ge M$ and $L_2 \ge M$.

**Case B: Negative Mutual Inductance (e.g., current entering dot of one, leaving dot of other)**

The T-equivalent circuit consists of:
*   Inductor in the series arm (common flux path): $L_{12} = -M$
*   Inductor in the $i_1$ branch: $L_{11} = L_1 + M$
*   Inductor in the $i_2$ branch: $L_{22} = L_2 + M$

This is always valid.

**Textbook References:**

*   **Ravish R Singh:** Provides detailed derivations of the T-equivalent circuits for coupled inductors.
*   **Suresh Kumar:** Explains how to convert coupled inductors into their T-equivalent forms.
*   **A Sudhakar, Shyammohan S Palli:** Focuses on the application of T-equivalent circuits in transformer analysis and the derivation of impedance parameters from coupled circuits.

**Example 3 (T-equivalent circuit):**

Two coils with $L_1 = 60$ mH, $L_2 = 90$ mH, and $M = 30$ mH are coupled. Assume the currents $i_1$ and $i_2$ enter the dotted terminals. Draw the T-equivalent circuit and calculate the values of the inductors.

**Solution:**

Since the currents enter the dotted terminals, we can use the T-equivalent circuit where the common inductor is $M$.

*   Inductor in the series arm (common flux path): $L_{12} = M = 30$ mH
*   Inductor in the $i_1$ branch: $L_{11} = L_1 - M = 60 \text{ mH} - 30 \text{ mH} = 30$ mH
*   Inductor in the $i_2$ branch: $L_{22} = L_2 - M = 90 \text{ mH} - 30 \text{ mH} = 60$ mH

The T-equivalent circuit would look like this:

```
      L11 (30mH)
i1 -->--/\/\/\/\/\/\/\--+
                      |
                      L12 (30mH)
                      |
i2 -->--/\/\/\/\/\/\/\--+
                      |
                     L22 (60mH)
```

**Practice Question 1:**

Two coils with self-inductances $L_1 = 200$ mH and $L_2 = 50$ mH are coupled with a coefficient of coupling $k = 0.6$.
(a) Calculate the mutual inductance $M$.
(b) If the currents $i_1$ and $i_2$ enter the dotted terminals, write the voltage equations.
(c) If the current $i_1$ enters the dotted terminal of $L_1$ and $i_2$ leaves the dotted terminal of $L_2$, write the voltage equations.

**Answer to Practice Question 1:**

(a) $M = k \sqrt{L_1 L_2} = 0.6 \sqrt{200 \text{ mH} \times 50 \text{ mH}} = 0.6 \sqrt{10000 \text{ mH}^2} = 0.6 \times 100 \text{ mH} = 60$ mH.

(b) Assuming sinusoidal steady-state, let $v_1 = j\omega L_1 I_1$, $v_2 = j\omega L_2 I_2$, and $M = j\omega M$.
$V_1 = j\omega L_1 I_1 + j\omega M I_2$
$V_2 = j\omega L_2 I_2 + j\omega M I_1$

(c) $V_1 = j\omega L_1 I_1 - j\omega M I_2$
$V_2 = j\omega L_2 I_2 - j\omega M I_1$

---

### 5. Application to Transformers

**Key Concepts:**

*   **Ideal Transformer:** A theoretical transformer with perfect coupling ($k=1$), zero winding resistance, and infinite core permeability.
*   **Real Transformer:** A transformer with imperfect coupling, winding resistance, leakage flux, and core losses.
*   **Turns Ratio:** The ratio of the number of turns in the secondary winding to the number of turns in the primary winding ($n = N_2/N_1$).

**Relationship between Voltage, Current, and Turns Ratio:**

For an ideal transformer:
*   $\frac{V_2}{V_1} = \frac{N_2}{N_1} = n$
*   $\frac{I_1}{I_2} = \frac{N_2}{N_1} = n$

**Impedance Transformation:**

An impedance $Z_L$ connected to the secondary of an ideal transformer is reflected to the primary as:

$Z_{in} = (\frac{N_1}{N_2})^2 Z_L = \frac{1}{n^2} Z_L$

**Coefficient of Coupling and Transformers:**

The coefficient of coupling ($k$) is a crucial parameter for real transformers.
*   For an ideal transformer, $k=1$.
*   For real transformers, $k < 1$, and the deviation from unity signifies energy loss due to leakage flux.

**Textbook References:**

*   **Van Valkenburg:** Provides a comprehensive analysis of ideal and real transformers, emphasizing the role of coupling.
*   **Ravish R Singh:** Details the impedance transformation property of transformers and how it relates to the turns ratio and coupling.
*   **Suresh Kumar:** Explains the circuit model of a real transformer, including leakage inductances and magnetizing inductance.
*   **A Sudhakar, Shyammohan S Palli:** Discusses the applications of transformers and the impact of coupling on their efficiency and performance.

**Example 4 (Impedance Transformation):**

A load impedance of $Z_L = 100 \angle 0^\circ$ $\Omega$ is connected to the secondary of an ideal transformer with a turns ratio $N_1:N_2 = 1:2$. Calculate the input impedance seen at the primary terminals.

**Solution:**

Turns ratio $n = N_2/N_1 = 2/1 = 2$.
The input impedance is $Z_{in} = (\frac{N_1}{N_2})^2 Z_L = (\frac{1}{n})^2 Z_L$.
$Z_{in} = (\frac{1}{2})^2 \times 100 \angle 0^\circ$ $\Omega$
$Z_{in} = \frac{1}{4} \times 100 \angle 0^\circ$ $\Omega$
$Z_{in} = 25 \angle 0^\circ$ $\Omega$

**Practice Question 2:**

A transformer has $L_1 = 10$ mH, $L_2 = 40$ mH, and $M = 15$ mH. If it is used to step down a voltage by a factor of 2 (i.e., $N_1/N_2 = 2$), what is the coefficient of coupling? What is the value of the primary series inductance and the secondary series inductance in its T-equivalent circuit, assuming the currents are in the same direction of flux linkage (e.g., entering dotted terminals)?

**Answer to Practice Question 2:**

Coefficient of coupling:
$k = \frac{M}{\sqrt{L_1 L_2}} = \frac{15 \text{ mH}}{\sqrt{10 \text{ mH} \times 40 \text{ mH}}} = \frac{15 \text{ mH}}{\sqrt{400 \text{ mH}^2}} = \frac{15}{20} = 0.75$.

T-equivalent circuit assuming currents enter dotted terminals:
*   Common inductor: $L_{12} = M = 15$ mH.
*   Primary series inductor: $L_{11} = L_1 - M = 10 \text{ mH} - 15 \text{ mH} = -5$ mH.
    *   **Note:** A negative inductance value in the T-equivalent circuit arises when $M > L_1$ or $M > L_2$. In such cases, the alternative T-equivalent circuit (Case B) with negative mutual inductance should be used, which results in all positive inductance values.
*   Secondary series inductor: $L_{22} = L_2 - M = 40 \text{ mH} - 15 \text{ mH} = 25$ mH.

Let's re-evaluate using the alternative T-equivalent circuit (Case B) for consistency with positive inductances.
If we use the formulation where the common inductance is $-M$ and the series inductances are $L_1+M$ and $L_2+M$, we consider the scenario where currents leave dotted terminals for one coil relative to the other. However, if we must adhere to the given relationship of flux linkage, the initial calculation for $L_{11}$ indicates that this particular representation may not be directly applicable without considering the alternative if negative values are not permissible in the model.

Let's assume the problem implies the standard T-equivalent derivation where $L_{11} = L_1 \mp M$ and $L_{22} = L_2 \mp M$. When $M > L_1$, the standard formulation leads to negative values, suggesting the other form of T-equivalent is more appropriate.
For the case where currents enter the dots, the T-equivalent is $L_1-M$, $L_2-M$, and $M$. If $L_1 < M$, then $L_1-M$ is negative.

Let's use the T-equivalent where the series arm is $-M$:
$L_{11} = L_1 + M = 10 \text{ mH} + 15 \text{ mH} = 25$ mH
$L_{22} = L_2 + M = 40 \text{ mH} + 15 \text{ mH} = 55$ mH
$L_{12} = -M = -15$ mH

This form is always valid. The physical interpretation of negative inductance is that it's effectively a capacitor. In circuit analysis, it's common to use the formulation that yields positive inductance values. The choice of which T-equivalent to use depends on the sign convention applied to the mutual inductance term in the voltage equations.

For the purpose of this exercise, if we strictly follow the first derivation for positive mutual linkage (currents entering dots), we acknowledge the negative inductance arises when $M > L_1$. The problem statement does not explicitly forbid negative inductance in the model.

**Key Takeaway from Practice Question 2:** The coefficient of coupling is independent of the direction of currents or the specific T-equivalent representation chosen. However, the values of the individual inductors in the T-equivalent circuit do depend on the chosen representation, and a negative inductance can arise when $M$ is greater than one of the self-inductances in the $L-M$ formulation.

---

### 6. Relating to Course Outcomes

*   **CO5: Describe two-port networks in terms of various parameters.**
    The coefficient of coupling is fundamental to understanding how coupled inductors behave as a two-port network. The mutual inductance $M$ directly influences the impedance ($z$) and admittance ($y$) parameters of coupled circuits. For example, the $z$-parameters of two coupled inductors will include terms involving $j\omega M$.
    $z_{11} = j\omega L_1$, $z_{22} = j\omega L_2$, $z_{12} = z_{21} = j\omega M$ (for currents entering dots).

*   **CO6: Explain the steady-state behaviour of coupled circuits with sinusoidal excitation.**
    The coefficient of coupling determines the extent of energy transfer between the coupled inductors when subjected to sinusoidal excitation. A higher $k$ value leads to more efficient energy transfer, impacting resonance conditions and overall circuit response. The analysis of transformers, which are a prime example of coupled circuits, directly falls under this outcome.

---

### 7. Summary and Important Points to Remember

*   **Mutual Inductance (M):** Quantifies the magnetic linkage between coils.
*   **Coefficient of Coupling (k):** $k = \frac{M}{\sqrt{L_1 L_2}}$, ranges from 0 to 1.
    *   $k=0$: No coupling.
    *   $k=1$: Perfect coupling (ideal transformer).
    *   $0 < k < 1$: Partial coupling.
*   **Dot Convention:** Crucial for determining the sign of the mutual inductance term in voltage equations.
    *   Currents entering dots: Additive mutual inductance.
    *   One current entering dot, other leaving: Subtractive mutual inductance.
*   **T-Equivalent Circuit:** A method to represent coupled inductors using three discrete inductors, useful for analysis.
*   **Transformers:** Ideal transformers have $k=1$, while real transformers have $k<1$. The coupling coefficient affects impedance transformation and efficiency.

---

This concludes the study notes on the coefficient of coupling. Ensure you practice the calculations and understand the implications of different $k$ values on circuit behavior.
