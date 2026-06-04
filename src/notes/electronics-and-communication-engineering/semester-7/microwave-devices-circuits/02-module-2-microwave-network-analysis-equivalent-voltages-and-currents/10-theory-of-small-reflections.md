---
title: "Theory of small reflections."
subject: "MICROWAVE DEVICES & CIRCUITS"
module: "Module 2: Microwave Network Analysis – Equivalent voltages and currents"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff49b"
status: "completed"
scrapedAt: "2026-05-23T18:07:54.441Z"
---
# MICROWAVE DEVICES & CIRCUITS - Study Notes

## Module 2: Microwave Network Analysis – Equivalent Voltages and Currents

### Topic: Theory of Small Reflections

**Introduction:**

At microwave frequencies, discontinuities in transmission lines, such as changes in impedance, bends, or junctions, lead to reflections. These reflections can significantly impact the performance of microwave circuits by causing power loss, voltage standing waves, and signal distortion. The "Theory of Small Reflections" provides a framework for understanding and analyzing these reflections, especially when the impedance mismatches are not severe. This topic is crucial for understanding how microwave networks behave and how to design them to minimize undesirable reflections. This topic directly supports **CO2: Analyse Microwave Networks using signal flow graphs** as understanding reflections is fundamental to network analysis.

---

### 1. Understanding Reflections

**Key Concept:** When a wave traveling along a transmission line encounters a change in characteristic impedance ($Z_0$), a portion of the wave is reflected back towards the source.

*   **Incident Wave:** The wave traveling towards the discontinuity.
*   **Reflected Wave:** The wave traveling away from the discontinuity.
*   **Transmitted Wave:** The wave that continues to propagate beyond the discontinuity.

**Mathematical Representation:**

Consider a uniform transmission line with characteristic impedance $Z_0$ connected to a load impedance $Z_L$.

*   Let $V_{inc}$ be the incident voltage wave and $I_{inc}$ be the incident current wave.
*   Let $V_{ref}$ be the reflected voltage wave and $I_{ref}$ be the reflected current wave.
*   Let $V_{trans}$ be the transmitted voltage wave and $I_{trans}$ be the transmitted current wave.

At the interface between the transmission line and the load, the voltage and current must be continuous.

*   $V_{total} = V_{inc} + V_{ref}$
*   $I_{total} = I_{inc} + I_{ref}$

At the load, $V_{total} = I_{total} Z_L$. Also, $V_{inc} = I_{inc} Z_0$ and $V_{ref} = -I_{ref} Z_0$ (assuming the direction of $I_{ref}$ is away from the load).

Substituting these into the continuity equation:
$I_{inc} Z_0 + I_{ref} Z_0 = (I_{inc} + I_{ref}) Z_L$

Dividing by $I_{inc}$:
$Z_0 + \frac{I_{ref}}{I_{inc}} Z_0 = (1 + \frac{I_{ref}}{I_{inc}}) Z_L$

This leads to the definition of the **reflection coefficient ($\Gamma$)**:

$$ \Gamma = \frac{V_{ref}}{V_{inc}} = \frac{Z_L - Z_0}{Z_L + Z_0} $$

The reflected current wave can be related to the reflected voltage wave:
$I_{ref} = \frac{V_{ref}}{-Z_0} = -\frac{V_{ref}}{Z_0}$

Therefore, $\frac{I_{ref}}{I_{inc}} = \frac{-V_{ref}/Z_0}{V_{inc}/Z_0} = -\frac{V_{ref}}{V_{inc}} = -\Gamma$.

The **transmission coefficient ($\tau$)** describes the transmitted wave relative to the incident wave. At the load, the total voltage is $V_{trans} = V_{inc} + V_{ref}$ and the total current is $I_{trans} = I_{inc} + I_{ref}$.

The transmitted wave traveling *beyond* the load is related to the total voltage and current at the load.
$V_{trans} = I_{trans} Z_0$

We have $V_{inc} + V_{ref} = (I_{inc} + I_{ref}) Z_L$.
$V_{inc} + \Gamma V_{inc} = (I_{inc} - \Gamma I_{inc}) Z_L$
$V_{inc}(1+\Gamma) = I_{inc} (1-\Gamma) Z_L$
$Z_0 (1+\Gamma) = Z_0 (1-\Gamma) \frac{Z_L}{Z_0}$
$(1+\Gamma) = (1-\Gamma) \frac{Z_L}{Z_0}$
$Z_0(1+\Gamma) = Z_L(1-\Gamma)$
$Z_0 + Z_0\Gamma = Z_L - Z_L\Gamma$
$\Gamma(Z_0 + Z_L) = Z_L - Z_0$
$\Gamma = \frac{Z_L - Z_0}{Z_L + Z_0}$ (This confirms our earlier definition)

Now consider the transmitted wave $V_{trans}$ (voltage propagating *after* the load with impedance $Z_0$).
$V_{trans} = V_{inc} + V_{ref} = V_{inc}(1+\Gamma)$.
The transmission coefficient for voltage is:
$$ \tau_V = \frac{V_{trans}}{V_{inc}} = 1 + \Gamma $$

Similarly, for current:
$I_{trans} = I_{inc} + I_{ref} = I_{inc} + (-\Gamma I_{inc}) = I_{inc}(1-\Gamma)$.
The transmission coefficient for current is:
$$ \tau_I = \frac{I_{trans}}{I_{inc}} = 1 - \Gamma $$

**Important Note:** The transmission coefficient can be defined with respect to the incident voltage, incident current, or even the transmitted current relative to the incident voltage. The definitions $1+\Gamma$ and $1-\Gamma$ are common and derived from continuity.

---

### 2. Theory of Small Reflections

**Key Concept:** This theory applies when the impedance mismatch is small, meaning $|\Gamma|$ is close to zero. In such cases, the reflected wave is significantly smaller than the incident wave. This allows for approximations that simplify the analysis of microwave circuits.

**Conditions for Small Reflections:**

*   $|Z_L - Z_0| \ll |Z_L + Z_0|$
*   This implies $|Z_L - Z_0|$ is small compared to $Z_0$ (assuming $Z_L \approx Z_0$).
*   Practically, this means the voltage standing wave ratio (VSWR) is close to 1.

**Approximations in the Theory of Small Reflections:**

When $|\Gamma| \ll 1$, we can make the following approximations:

1.  **Voltage and Current Relationship:**
    *   The total voltage at the discontinuity is $V_{total} = V_{inc} + V_{ref} \approx V_{inc}$. (Since $V_{ref}$ is small).
    *   The total current at the discontinuity is $I_{total} = I_{inc} + I_{ref} \approx I_{inc}$. (Since $I_{ref} = -\Gamma I_{inc}$ and $|\Gamma|$ is small).

2.  **Power Transfer:**
    *   The power delivered to the load is $P_{load} = \frac{1}{2} \text{Re}(V_{total} I_{total}^*)$.
    *   With small reflections, $V_{total} \approx V_{inc}$ and $I_{total} \approx I_{inc}$.
    *   The incident power is $P_{inc} = \frac{1}{2} \frac{|V_{inc}|^2}{Z_0}$.
    *   The reflected power is $P_{ref} = \frac{1}{2} \frac{|V_{ref}|^2}{Z_0} = \frac{1}{2} \frac{|\Gamma V_{inc}|^2}{Z_0} = |\Gamma|^2 P_{inc}$.
    *   The transmitted power through the load is $P_{trans} = P_{inc} - P_{ref} = P_{inc}(1 - |\Gamma|^2)$.
    *   When $|\Gamma|$ is small, $|\Gamma|^2$ is even smaller, so most of the incident power is transmitted.

3.  **Network Analysis Simplification:**
    *   In a multi-element microwave circuit, each discontinuity contributes a reflection. The "theory of small reflections" allows us to treat these reflections as perturbations.
    *   The overall behavior of the circuit can be approximated by considering the dominant reflections and neglecting higher-order, doubly-reflected terms.

**Example: Analysis of a Small Impedance Mismatch**

Consider a lossless transmission line with characteristic impedance $Z_0 = 50 \, \Omega$. A load $Z_L = 52 + j2 \, \Omega$ is connected.

*   **Calculate the reflection coefficient:**
    $$ \Gamma = \frac{Z_L - Z_0}{Z_L + Z_0} = \frac{(52 + j2) - 50}{(52 + j2) + 50} = \frac{2 + j2}{102 + j2} $$
    To simplify, divide numerator and denominator by 2:
    $$ \Gamma = \frac{1 + j1}{51 + j1} $$
    Now, multiply by the conjugate of the denominator:
    $$ \Gamma = \frac{(1 + j1)(51 - j1)}{(51 + j1)(51 - j1)} = \frac{51 - j1 + j51 - j^21}{51^2 - j^21^2} = \frac{51 + 1 + j50}{2601 + 1} = \frac{52 + j50}{2602} $$
    $$ \Gamma \approx 0.02 + j0.019 $$

*   **Magnitude and Phase:**
    $|\Gamma| = \sqrt{0.02^2 + 0.019^2} = \sqrt{0.0004 + 0.000361} = \sqrt{0.000761} \approx 0.0276$
    The phase angle is $\phi = \arctan\left(\frac{0.019}{0.02}\right) \approx 43.6^\circ$.
    So, $\Gamma \approx 0.0276 \angle 43.6^\circ$.

*   **Observation:** Since $|\Gamma|$ is small (approximately 0.0276, which is much less than 1), this scenario represents a situation where the theory of small reflections is applicable. The reflected voltage is only about 2.76% of the incident voltage.

*   **Voltage Standing Wave Ratio (VSWR):**
    $$ VSWR = \frac{1 + |\Gamma|}{1 - |\Gamma|} = \frac{1 + 0.0276}{1 - 0.0276} = \frac{1.0276}{0.9724} \approx 1.057 $$
    A VSWR close to 1 (e.g., < 1.5 or 2) indicates small reflections.

---

### 3. Applications and Implications of Small Reflections

**Key Concept:** In complex microwave systems, numerous small reflections from various components can add up constructively or destructively, affecting overall performance. The theory of small reflections helps in predicting and managing these effects.

**Applications:**

*   **Impedance Matching:** When designing matching networks (e.g., using stubs or L-sections), the goal is to minimize the reflection coefficient at the interface. The theory of small reflections guides the design by indicating the magnitude of the residual mismatch.
*   **Filter Design:** Microwave filters are designed to reflect certain frequencies while transmitting others. The transitions between passbands and stopbands involve controlled reflections. The theory of small reflections helps in analyzing the sharpness and behavior of these transitions. (Relates to **CO3: Design microwave filters by different methods**).
*   **Amplifier Stability:** Reflections from the input and output matching networks can affect amplifier stability. Small reflections, when analyzed correctly, help in ensuring stable operation. (Relates to **CO1: Describe the basic principles of Microwave solid state diodes, transistors, generators and amplifiers**).
*   **System Analysis:** In cascaded systems, the overall reflection coefficient can be approximated by summing the individual reflection coefficients if they are small. This simplifies the analysis of multi-stage microwave circuits.
*   **Signal Flow Graphs:** The concept of reflection coefficients is fundamental to constructing signal flow graphs for microwave networks. Each port with a mismatch can be represented by a reflection coefficient. (Directly relates to **CO2: Analyse Microwave Networks using signal flow graphs**).

**Implications:**

*   **Approximation in Calculations:** In systems with low VSWR, approximations like $1 \pm \Gamma \approx 1$ can be used in power calculations and network analysis.
*   **Sensitivity to Changes:** While small reflections are generally good, systems operating very close to the "small reflection" regime can be sensitive to small variations in component impedance, leading to significant changes in performance.
*   **Higher-Order Effects:** In systems with many cascaded stages, even small reflections can become significant after multiple reflections and re-reflections. The theory of small reflections is often a first-order approximation, and higher-order analysis might be needed in critical applications.

---

### 4. Connection to Network Parameters (S-Parameters)

**Key Concept:** The reflection coefficient $\Gamma$ is directly related to the $S_{11}$ parameter of a two-port network when the network is terminated in its characteristic impedance ($Z_0$).

For a two-port network, the scattering parameters (S-parameters) describe the behavior of the network when excited by incident waves at its ports.

*   Let $a_1, a_2$ be the incident wave amplitudes at port 1 and port 2, respectively.
*   Let $b_1, b_2$ be the reflected/transmitted wave amplitudes at port 1 and port 2, respectively.

The S-parameter equations are:
$b_1 = S_{11} a_1 + S_{12} a_2$
$b_2 = S_{21} a_1 + S_{22} a_2$

**Definition of $S_{11}$:**
$S_{11}$ is the reflection coefficient at port 1 when port 2 is terminated in its characteristic impedance ($Z_0$).
When port 2 is terminated in $Z_0$, there is no incident wave from port 2, so $a_2 = 0$.
In this case, $b_1 = S_{11} a_1$.
The reflection coefficient at port 1 is defined as $\Gamma_1 = \frac{b_1}{a_1}$ when $a_2 = 0$.
Therefore, $\Gamma_1 = S_{11}$.

**Similarly:**
$S_{22}$ is the reflection coefficient at port 2 when port 1 is terminated in its characteristic impedance ($Z_0$).
$\Gamma_2 = S_{22}$ (when $a_1 = 0$).

**Significance of Small Reflections in S-Parameters:**

*   When a component exhibits small reflections at its ports (i.e., low VSWR when terminated in $Z_0$), its $S_{11}$ and $S_{22}$ values will be small in magnitude.
*   In a cascaded system of two-port networks, where the output of network 1 is connected to the input of network 2, the overall system behavior can be analyzed using S-parameters. The "theory of small reflections" helps in understanding the impact of small $|S_{11}|$ and $|S_{22}|$ values on the overall system performance.

**Example:** A transistor amplifier has $S_{11} = 0.2 \angle 30^\circ$ and $S_{22} = 0.15 \angle -45^\circ$. These represent small reflections at the input and output ports, respectively, when terminated in 50 $\Omega$.

*   The input match is not perfect, leading to some reflection.
*   The output match is better, with a smaller reflection.

The theory of small reflections tells us that these values, while not zero, are small enough that we can approximate the power delivered to the transistor input as $P_{in} \approx P_{incident}(1 - |S_{11}|^2)$.

---

### 5. Practice Questions and Answers

**Question 1:**
A transmission line with characteristic impedance $Z_0 = 50 \, \Omega$ is terminated with a load $Z_L = 75 + j0 \, \Omega$. Calculate the reflection coefficient ($\Gamma$) and the VSWR. Would the theory of small reflections be applicable here?

**Answer 1:**
$$ \Gamma = \frac{Z_L - Z_0}{Z_L + Z_0} = \frac{75 - 50}{75 + 50} = \frac{25}{125} = 0.2 $$
$$ VSWR = \frac{1 + |\Gamma|}{1 - |\Gamma|} = \frac{1 + 0.2}{1 - 0.2} = \frac{1.2}{0.8} = 1.5 $$
Since the VSWR is 1.5, which is relatively close to 1, the theory of small reflections can be considered applicable as a first-order approximation. The reflection coefficient magnitude of 0.2 is not extremely small, but it's not large either.

**Question 2:**
Explain the meaning of $S_{11}$ in the context of reflection coefficient.

**Answer 2:**
$S_{11}$ is the scattering parameter that represents the reflection coefficient at port 1 of a two-port network when port 2 is terminated in its characteristic impedance ($Z_0$). It quantifies how much of the wave incident at port 1 is reflected back to port 1.

**Question 3:**
For a small reflection coefficient $|\Gamma| = 0.05$, what is the approximate percentage of incident power that is reflected?

**Answer 3:**
The reflected power is given by $P_{ref} = |\Gamma|^2 P_{inc}$.
$|\Gamma|^2 = (0.05)^2 = 0.0025$.
So, the reflected power is $0.0025 \times P_{inc}$.
In percentage, this is $0.0025 \times 100\% = 0.25\%$.
This means only 0.25% of the incident power is reflected, indicating a very good match and strong applicability of the theory of small reflections.

**Question 4:**
Consider a system with two cascaded components. Component 1 has a reflection coefficient $\Gamma_1 = 0.1$ at its output, and Component 2 has a reflection coefficient $\Gamma_2 = 0.05$ at its input. If these reflections are small, how can you approximate the overall reflection coefficient seen from the input of Component 1?

**Answer 4:**
For small reflections and many cascaded stages, the overall reflection coefficient can be approximated by the sum of individual reflection coefficients. However, the situation is slightly more complex as the reflection from Component 2 will be seen by Component 1 after passing through Component 1's forward transmission.

A simplified view for cascaded systems with small reflections:
If we consider the primary reflections at each interface and assume they are small, the overall reflection can be approximated. For two cascaded two-port networks (N1 and N2), where N1 is followed by N2, the input reflection coefficient of the cascade is approximately:
$\Gamma_{in, cascade} \approx S_{11,1} + S_{21,1} S_{12,2} S_{21,2}$ (This is a simplified view and signal flow graphs are more precise).

However, if we are looking at reflections *from the perspective of the input port of the first stage*, and we assume the output of the second stage is terminated in $Z_0$, the dominant reflection comes from the input of the first stage and potentially reflections from the second stage reflected back.

A more direct interpretation for small reflections in a cascade without considering intermediate transmission: if we are looking at reflections originating from interfaces, and these are small, we might consider summing them if they are in phase. However, the phase is critical.

A better approximation, often used in systems with overall low VSWR, is that the primary contribution to the input reflection coefficient ($\Gamma_{in}$) of a cascaded system comes from the input reflection of the first stage, and subsequent reflections are attenuated.
$\Gamma_{in} \approx S_{11, \text{overall}} \approx S_{11,1} + (\text{terms involving } S_{21,1}, S_{12,2}, S_{22,2}, \text{ etc.})$

For *very* small reflections where the effect of transmission through stages is also small, one might approximate the input reflection of the cascade as roughly the input reflection of the first stage if the second stage is well-matched at its input.

A more rigorous approach using signal flow graphs (as per CO2) is necessary for precise cascaded system analysis. For this question, let's consider the simplest approximation where the reflection coefficient at the input of a cascade is primarily determined by the first stage, and other reflections are secondary. If we only consider the reflection *at the input port of the first stage*, and it's isolated, it would be $\Gamma_1 = 0.1$.

A key aspect of "small reflections" in a cascade is that the total reflected power is less sensitive to the exact phase relationships between reflections from different stages compared to large reflections.

**Let's rephrase the intent of the question for clarity:** If we look at the reflection coefficient at the input of a chain of components, and each component has a small reflection coefficient at its input and output, how do these combine?

Consider the input reflection coefficient of the entire system $\Gamma_{in, system}$.
$\Gamma_{in, system} = S_{11, \text{system}}$
Using signal flow graphs, this is derived by considering all paths that lead to a wave leaving port 1 when a wave enters port 1, and port 2 (and any other ports) are terminated in $Z_0$.

Without a specific system diagram, and focusing on the *theory of small reflections*, the implication is that the overall system's input reflection coefficient is unlikely to be drastically larger than the individual input reflection coefficients.
For a simple cascade of two-port networks (N1 followed by N2), where N1's output is connected to N2's input, and the entire system is terminated at the output of N2 in $Z_0$:
$\Gamma_{in, system} \approx S_{11,1} + S_{21,1} \Gamma_{in,2} S_{12,1}$ where $\Gamma_{in,2}$ is the input reflection coefficient of N2 when N2's output is terminated in $Z_0$, i.e., $\Gamma_{in,2} = S_{22,2}$.
So, $\Gamma_{in, system} \approx S_{11,1} + S_{21,1} S_{22,2} S_{12,1}$.
If the reflections are small, $S_{11,1}$ and $S_{22,2}$ are small. If the forward transmission $S_{21,1}$ is also significant, the second term might become comparable to the first.

**A more practical interpretation:** In systems with many components, each contributing small reflections, the overall mismatch is dominated by the component with the largest reflection coefficient if the phases are unfavorable, or it can be significantly reduced if the phases are favorable. The theory of small reflections implies that such systems are more amenable to impedance matching using broadband matching techniques.

**Key Takeaway for the Question:** The theory of small reflections implies that the overall system reflection coefficient is often dominated by the largest individual reflection coefficient, or that cancellations can occur, leading to a better overall match than simply summing worst-case reflections.

---

### 6. Important Points to Remember

*   **Reflection Coefficient ($\Gamma$)**: $\Gamma = \frac{Z_L - Z_0}{Z_L + Z_0}$. It's a complex quantity.
*   **VSWR**: $VSWR = \frac{1 + |\Gamma|}{1 - |\Gamma|}$. A VSWR close to 1 signifies a good match and small reflections.
*   **Small Reflections**: $|\Gamma| \ll 1$. This condition simplifies analysis and allows for approximations.
*   **Power Reflection**: $P_{ref} = |\Gamma|^2 P_{inc}$. Small $|\Gamma|$ means very small reflected power.
*   **S-Parameter Connection**: $S_{11}$ is the input reflection coefficient when the other port is terminated in $Z_0$.
*   **Approximation**: In systems with many small reflections, the overall system's reflection coefficient is often manageable and predictable, allowing for simplified design and analysis.
*   **Signal Flow Graphs**: Essential for analyzing complex cascaded systems, even when individual reflections are small. (Supports **CO2**).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 7. References and Further Reading

*   **Microwave Engineering by David M. Pozar (4/e, 2012):** Chapters on Transmission Line Theory and Network Parameters provide a thorough foundation. Specifically, chapters discussing impedance matching and S-parameters will be highly relevant.
*   **Foundation of Microwave Engineering by Robert E. Collin (2/e, 2012):** This book also offers detailed explanations of wave propagation, reflections, and network analysis techniques using S-parameters.
*   **Microwave Devices & Circuits by Samuel Y. Liao (3/e):** Chapters on microwave network analysis and impedance matching will cover these concepts.
*   **Passive RF and Microwave Integrated Circuits by Leo Maloratsky (2006):** Discusses practical aspects of impedance matching and reflection in various passive components.

---

### 8. Alignment with Course Outcomes

*   **CO1 (Knowledge Level K2):** Understanding reflections and the concept of impedance mismatch is fundamental to understanding how microwave solid-state devices operate in a circuit and how they are matched for optimal performance.
*   **CO2 (Knowledge Level K3):** This topic is the direct foundation for analyzing microwave networks using signal flow graphs. Reflection coefficients are the basic building blocks for constructing and solving these graphs.
*   **CO3 (Knowledge Level K3):** Designing microwave filters involves carefully controlling reflections at different frequencies. The theory of small reflections helps in understanding the behavior of filter elements and transitions between passbands and stopbands.
*   **CO4 (Knowledge Level K2):** While this topic focuses on network analysis, understanding reflections is a basic principle that applies to any interconnected microwave components, including those in monolithic integrated circuits (MICs).

---

This concludes the study notes for the "Theory of Small Reflections" topic. Remember to practice the calculations and understand the implications of the reflection coefficient on microwave circuit performance.