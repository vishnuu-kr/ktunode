---
title: "Stability Considerations – Stability Circles"
subject: "RF ENGINEERING"
module: "Module 3: Amplifier design using S"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff5e9"
status: "completed"
scrapedAt: "2026-05-23T18:56:58.586Z"
---
# RF Engineering: Module 3 - Amplifier Design using S-Parameters

## Topic: Stability Considerations – Stability Circles

---

### 1. Introduction to Amplifier Stability

An amplifier is considered **stable** if it does not oscillate. Oscillation occurs when positive feedback causes the output signal to reinforce the input signal, leading to an uncontrolled increase in amplitude. In RF amplifier design, ensuring stability is paramount.

**Key Concept:** Stability is concerned with the amplifier's behavior when subjected to various source and load impedances. An amplifier can be unconditionally stable or conditionally stable.

**Relevant Textbooks:**
*   **Pozar, David M. (2011) - Microwave and RF design of wireless systems:** This textbook extensively covers stability analysis techniques, including the use of stability circles.
*   **Ludwig, Reinhold (2000) - RF Circuit Design: Theory & Applications:** Provides a solid foundation in S-parameters and their application to amplifier stability.

---

### 2. Sources of Instability in Amplifiers

Instability in amplifiers can arise from several factors:

*   **Positive Feedback:** Unwanted feedback paths, especially at higher frequencies, can lead to signal reinforcement.
*   **High Gain:** Amplifiers with very high gain are more susceptible to oscillation.
*   **Mismatch between Source and Load Impedances:** Connecting source and load impedances that are far from the transistor's optimal values can push the amplifier into an unstable region.
*   **Parasitic Elements:** Inductance and capacitance associated with component packaging and circuit layout can create feedback paths.

**Course Outcome Alignment:**
*   **CO1 (K2):** Explaining the basic idea about RF networks inherently involves understanding how components interact and can lead to feedback.
*   **CO2 (K2):** Describing the behavior of RF components is crucial for identifying potential sources of instability.

---

### 3. Stability Factors: Unconditional vs. Conditional Stability

**3.1. Unconditional Stability:**
An amplifier is unconditionally stable if it remains stable for *all* possible passive source and load impedances.

**3.2. Conditional Stability:**
An amplifier is conditionally stable if it is stable only for a specific range of source and load impedances. If the source or load impedance falls outside this range, the amplifier can oscillate.

**Key Concept:** The goal of stability analysis is to determine if an amplifier is unconditionally stable or, if conditionally stable, to identify the regions of source and load impedances that cause instability.

**3.3. Stability Factors (Calculated from S-parameters):**

To determine the stability of a two-port amplifier network, we use specific stability factors derived from the S-parameters of the active device (transistor). These factors help quantify the degree of stability.

**a) Transducer Power Gain ($G_T$) and Available Power Gain ($G_A$):**
These are important performance metrics for amplifiers, but stability is a prerequisite for achieving them.

**b) Group Delay and Phase Margin:**
While not directly used in the initial stability circle calculation, understanding phase margin is crucial for understanding the *mechanism* of oscillation. Oscillation occurs when there is sufficient gain and a 360-degree phase shift around the feedback loop.

**c) Stability Factors $K$ and $\Delta$:**

From **Pozar (2011)** and **Ludwig (2000)**, the most common stability factors derived from the S-parameters of a two-port network are:

*   **$\Delta$ (Delta) - The Determinant of the Scattering Matrix:**
    $$\Delta = S_{11}S_{22} - S_{12}S_{21}$$

*   **$K$ (Stability Factor):**
    $$K = \frac{1 - |S_{11}|^2 - |S_{22}|^2 + |S_{12}S_{21}|^2}{2|S_{12}S_{21}|}$$

**Stability Criteria:**

An amplifier is **unconditionally stable** if **both** of the following conditions are met:
1.  $K > 1$
2.  $|\Delta| < 1$

If either $K \le 1$ or $|\Delta| \ge 1$, the amplifier is **conditionally stable**.

**Important Point to Remember:** These criteria are typically evaluated at the desired operating frequency.

**Course Outcome Alignment:**
*   **CO3 (K3):** Applying these principles is directly related to designing RF amplifiers and ensuring their stable operation.

---

### 4. Stability Circles

Stability circles are graphical tools used to visualize the regions of source and load reflection coefficients ($\Gamma_S$ and $\Gamma_L$) that lead to amplifier instability. They help us identify regions to *avoid* when designing matching networks.

**4.1. Source Stability Circles:**
These circles plot the region of $\Gamma_S$ for a fixed $\Gamma_L$ that causes instability.

**4.2. Load Stability Circles:**
These circles plot the region of $\Gamma_L$ for a fixed $\Gamma_S$ that causes instability.

**Key Concept:** The stability circles define boundaries on the Smith Chart. Regions inside or outside these circles (depending on the convention and derivation) represent unstable conditions.

**4.3. Derivation of Stability Circles:**

The derivation involves considering the condition for oscillation, which is when the input reflection coefficient looking into the amplifier with a load $\Gamma_L$ connected is equal to the source reflection coefficient $\Gamma_S$.

**a) Input Reflection Coefficient ($\Gamma_{in}$):**
When a load $\Gamma_L$ is connected to the output port, the input reflection coefficient seen at port 1 is given by:
$$\Gamma_{in} = S_{11} + \frac{S_{12}S_{21}\Gamma_L}{1 - S_{22}\Gamma_L}$$

For the amplifier to be stable, $\Gamma_{in}$ must be within the stable region of the Smith Chart for all passive $\Gamma_L$. An amplifier oscillates when $\Gamma_{in} = \Gamma_S$ for some $\Gamma_S$.

**b) Condition for Oscillation:**
An amplifier is at the edge of oscillation when the input reflection coefficient looking into port 1 (with load $\Gamma_L$) is exactly matched by the source reflection coefficient $\Gamma_S$. For oscillation to occur, this condition must be met for a passive $\Gamma_S$ and $\Gamma_L$.

The stability circles are derived by setting $|\Gamma_{in}| = 1$ (boundary of the passive $\Gamma_S$ plane) or $|\Gamma_{out}| = 1$ (boundary of the passive $\Gamma_L$ plane), where $\Gamma_{out}$ is the output reflection coefficient.

**i) Source Stability Circles (Plotting Region of $\Gamma_S$):**
We set the input reflection coefficient $\Gamma_{in}$ to be equal to $\Gamma_S$ and consider the condition $|\Gamma_S| = 1$.
$$\Gamma_S = S_{11} + \frac{S_{12}S_{21}\Gamma_L}{1 - S_{22}\Gamma_L}$$
The locus of $\Gamma_L$ for which $|\Gamma_S|=1$ will define the **source stability circles**.
The equation for the center ($C_S$) and radius ($r_S$) of the source stability circles are:

*   **Center ($C_S$):**
    $$C_S = \frac{S_{11}^* - S_{22}\Delta^*}{|S_{11}|^2 - |S_{22}|^2 + |\Delta|^2}$$
    where $\Delta = S_{11}S_{22} - S_{12}S_{21}$ and $x^*$ denotes the complex conjugate of $x$.

*   **Radius ($r_S$):**
    $$r_S = \frac{|S_{12}S_{21}|}{||S_{11}|^2 - |S_{22}|^2 + |\Delta|^2|}$$

These circles are plotted on the $\Gamma_L$ plane, representing the locus of $\Gamma_L$ where $|\Gamma_{in}|=1$.

**ii) Load Stability Circles (Plotting Region of $\Gamma_L$):**
Similarly, we consider the output reflection coefficient $\Gamma_{out}$ and set $|\Gamma_{out}| = 1$.
$$\Gamma_{out} = S_{22} + \frac{S_{12}S_{21}\Gamma_S}{1 - S_{11}\Gamma_S}$$
The locus of $\Gamma_S$ for which $|\Gamma_{out}|=1$ will define the **load stability circles**.
The equation for the center ($C_L$) and radius ($r_L$) of the load stability circles are:

*   **Center ($C_L$):**
    $$C_L = \frac{S_{22}^* - S_{11}\Delta^*}{|S_{22}|^2 - |S_{11}|^2 + |\Delta|^2}$$

*   **Radius ($r_L$):**
    $$r_L = \frac{|S_{12}S_{21}|}{||S_{22}|^2 - |S_{11}|^2 + |\Delta|^2|}$$

These circles are plotted on the $\Gamma_S$ plane, representing the locus of $\Gamma_S$ where $|\Gamma_{out}|=1$.

**Important Point to Remember:** The derivation involves complex algebraic manipulation of the S-parameter equations and setting the magnitude of the reflection coefficient to 1.

**Reference Books:**
*   **Radmanesh, Matthew M (2017) - Advanced RF & microwave circuit design:** Provides a detailed step-by-step derivation of stability circles and their interpretation.
*   **Carr, Joseph J. (2001) - Secrets of RF circuit design:** Offers practical insights and simplified explanations of stability analysis.

---

### 5. Interpretation of Stability Circles on the Smith Chart

The stability circles divide the Smith Chart ($\Gamma_S$ or $\Gamma_L$ plane) into regions of stability and instability.

**5.1. Unconditionally Stable Case ($K > 1$ and $|\Delta| < 1$):**
If the amplifier is unconditionally stable, the entire Smith Chart (representing all possible passive $\Gamma_S$ or $\Gamma_L$) is stable. The stability circles will not enclose the center of the Smith Chart ($ \Gamma = 0$, which represents a matched load/source).

**5.2. Conditionally Stable Case ($K \le 1$ or $|\Delta| \ge 1$):**
In this case, there are regions on the Smith Chart that cause instability.

**a) Determining the Stable Region:**

To determine whether the interior or exterior of a stability circle represents the stable region, we can use a test point. A common test point is the center of the Smith Chart, $\Gamma = 0$ (representing a matched source or load).

*   **For Source Stability Circles (plotted on $\Gamma_L$ plane):**
    *   If the amplifier is stable when $\Gamma_L = 0$, then the region *outside* the source stability circle on the $\Gamma_L$ plane is the stable region for $\Gamma_L$. The stable region for $\Gamma_S$ is then determined by the load matching.
    *   To determine this, substitute $\Gamma_L = 0$ into the $\Gamma_{in}$ equation:
        $$\Gamma_{in}(\text{for } \Gamma_L=0) = S_{11}$$
    *   If $|S_{11}| < 1$, the amplifier is stable for $\Gamma_L = 0$. Therefore, the region *outside* the source stability circle on the $\Gamma_L$ plane is the stable region.

*   **For Load Stability Circles (plotted on $\Gamma_S$ plane):**
    *   If the amplifier is stable when $\Gamma_S = 0$, then the region *outside* the load stability circle on the $\Gamma_S$ plane is the stable region for $\Gamma_S$. The stable region for $\Gamma_L$ is then determined by the source matching.
    *   To determine this, substitute $\Gamma_S = 0$ into the $\Gamma_{out}$ equation:
        $$\Gamma_{out}(\text{for } \Gamma_S=0) = S_{22}$$
    *   If $|S_{22}| < 1$, the amplifier is stable for $\Gamma_S = 0$. Therefore, the region *outside* the load stability circle on the $\Gamma_S$ plane is the stable region.

**Convention Summary:**
*   If $K > 1$ and $|\Delta| < 1$: Unconditionally stable. No need to consider stability circles for gain circles.
*   If $K \le 1$ or $|\Delta| \ge 1$: Conditionally stable.
    *   Source stability circles define regions of $\Gamma_L$ that cause instability for a given $\Gamma_S$.
    *   Load stability circles define regions of $\Gamma_S$ that cause instability for a given $\Gamma_L$.
    *   The stability region is usually *outside* the drawn circles if the test point $\Gamma=0$ is stable (i.e., $|S_{11}| < 1$ for source circles and $|S_{22}| < 1$ for load circles).

**Important Point to Remember:** Always check the stability criterion ($K$ and $|\Delta|$) first. If conditionally stable, use stability circles and a test point to identify the forbidden regions for $\Gamma_S$ and $\Gamma_L$.

**Example Scenario:**
Suppose you plot the source stability circles on the $\Gamma_L$ plane and find that the region inside the circle is the unstable region. If your desired load matching network results in a $\Gamma_L$ that falls inside this circle, the amplifier will oscillate for the chosen source impedance. You must then adjust your matching network to achieve a $\Gamma_L$ outside the unstable region.

**Course Outcome Alignment:**
*   **CO3 (K3):** This topic is directly about applying S-parameter principles to design stable RF amplifiers.

---

### 6. Designing for Stability

**6.1. Stabilizing a Conditionally Stable Amplifier:**

If an amplifier is found to be conditionally stable, we need to incorporate techniques to make it unconditionally stable or ensure that the chosen source and load impedances fall within the stable region.

*   **Using Matching Networks:** Design source and load matching networks ($\Gamma_S$ and $\Gamma_L$) that are always in the stable region. This is the most common approach.
*   **Adding Resistive Elements:** Incorporating small resistors in series with the transistor's gate/base or drain/collector can increase the stability margin by increasing damping and reducing gain at frequencies where oscillations might occur. This might slightly reduce the gain but improves stability.
*   **Reducing Gain at Higher Frequencies:** The use of series peaking coils or other frequency-selective elements can help reduce the gain at frequencies above the desired operating band, thus mitigating potential oscillations.

**6.2. Constant Gain Circles and Stability:**

When designing an amplifier for a specific gain, constant gain circles are superimposed on the Smith Chart. The stability circles must be considered *before* or *simultaneously* with the gain circles.

*   **Unconditionally Stable Case:** If the amplifier is unconditionally stable, you can simply choose $\Gamma_S$ and $\Gamma_L$ to achieve the desired gain without worrying about stability boundaries.
*   **Conditionally Stable Case:** If the amplifier is conditionally stable, you must select $\Gamma_S$ and $\Gamma_L$ that lie within *both* the stable region *and* the desired gain circle. The intersection of these regions dictates the achievable gain.

**Important Point to Remember:** Stability is always the primary concern. Achieving high gain is secondary to ensuring the amplifier does not oscillate.

**Reference Books:**
*   **Misra, Devendra K (2019) - Radio-frequency and microwave communication circuits: analysis and design:** Discusses strategies for stabilizing amplifiers and the interplay between stability and gain.
*   **Rohde, Ulrich L., and David P. Newkirk (2017) - RF/microwave circuit design for wireless applications:** Provides practical design guidelines and case studies for achieving stable amplifier designs.

---

### 7. Practice Questions

**Question 1:**
An amplifier has the following S-parameters at 2 GHz:
$S_{11} = 0.4 \angle 45^\circ$
$S_{12} = 0.1 \angle 10^\circ$
$S_{21} = 2.0 \angle 120^\circ$
$S_{22} = 0.3 \angle -30^\circ$

Calculate the stability factors $K$ and $|\Delta|$. Determine if the amplifier is unconditionally stable or conditionally stable.

**Answer:**
First, calculate $\Delta$:
$S_{11}S_{22} = (0.4 \angle 45^\circ)(0.3 \angle -30^\circ) = 0.12 \angle 15^\circ = 0.1159 + j0.0311$
$S_{12}S_{21} = (0.1 \angle 10^\circ)(2.0 \angle 120^\circ) = 0.2 \angle 130^\circ = -0.1286 + j0.1532$
$\Delta = (0.1159 + j0.0311) - (-0.1286 + j0.1532) = 0.2445 - j0.1221$
$|\Delta| = \sqrt{0.2445^2 + (-0.1221)^2} = \sqrt{0.05979 + 0.01491} = \sqrt{0.0747} \approx 0.273$

Now, calculate $K$:
$|S_{11}|^2 = 0.4^2 = 0.16$
$|S_{22}|^2 = 0.3^2 = 0.09$
$|S_{12}S_{21}|^2 = |0.2 \angle 130^\circ|^2 = 0.2^2 = 0.04$
$K = \frac{1 - |S_{11}|^2 - |S_{22}|^2 + |S_{12}S_{21}|^2}{2|S_{12}S_{21}|}$
$K = \frac{1 - 0.16 - 0.09 + 0.04}{2 \times 0.2} = \frac{0.79}{0.4} = 1.975$

**Conclusion:**
Since $K = 1.975 > 1$ and $|\Delta| = 0.273 < 1$, the amplifier is **unconditionally stable**.

---

**Question 2:**
Describe the process of determining the stable region for $\Gamma_L$ using source stability circles if an amplifier is found to be conditionally stable.

**Answer:**
1.  **Calculate S-parameters:** Obtain the S-parameters of the active device at the desired frequency.
2.  **Calculate Stability Factors:** Compute $K$ and $|\Delta|$. If $K \le 1$ or $|\Delta| \ge 1$, the amplifier is conditionally stable.
3.  **Calculate Source Stability Circles:** If conditionally stable, calculate the center ($C_S$) and radius ($r_S$) of the source stability circles using the formulas:
    $$C_S = \frac{S_{11}^* - S_{22}\Delta^*}{|S_{11}|^2 - |S_{22}|^2 + |\Delta|^2}$$
    $$r_S = \frac{|S_{12}S_{21}|}{||S_{11}|^2 - |S_{22}|^2 + |\Delta|^2|}$$
4.  **Plot Circles on $\Gamma_L$ Plane:** Draw the source stability circles on a Smith Chart representing the $\Gamma_L$ plane.
5.  **Determine Stable Region:** To find the stable region for $\Gamma_L$, pick a test point, usually $\Gamma_L = 0$ (matched load). Calculate the input reflection coefficient for this condition: $\Gamma_{in}(\text{for } \Gamma_L=0) = S_{11}$.
6.  **Apply Test Point Rule:** If $|S_{11}| < 1$ (the device is stable with a matched load), then the region *outside* the source stability circle on the $\Gamma_L$ plane is the stable region for $\Gamma_L$. If $|S_{11}| > 1$, the region inside the circle is stable.
7.  **Design Matching Network:** Design the load matching network to provide a $\Gamma_L$ that lies within this determined stable region.

---

### 8. Important Points to Remember

*   **Stability is paramount:** Always analyze stability before optimizing for gain.
*   **$K > 1$ and $|\Delta| < 1$** are the conditions for unconditional stability.
*   **Stability circles** graphically represent regions of source or load reflection coefficients that lead to instability.
*   **Test point method** is crucial for identifying the stable region relative to the stability circles.
*   **Conditionally stable amplifiers** require careful selection of source and load impedances to avoid oscillation.
*   **Matching networks** play a vital role in ensuring the amplifier operates within its stable region.
*   **Gain is sacrificed for stability:** If an amplifier is conditionally stable, making it unconditionally stable often involves some reduction in maximum achievable gain.

---

### 9. Further Learning Resources

*   **Practice problems:** Work through examples from Pozar's and Ludwig's textbooks to solidify your understanding of calculating stability factors and plotting stability circles.
*   **Simulation tools:** Use RF simulation software (e.g., Keysight ADS, Cadence Virtuoso) to plot stability circles and verify your manual calculations.
*   **Real-world application:** When designing an amplifier, always check the stability of the chosen transistor over the entire frequency band of interest, not just at the center frequency.

---

This comprehensive set of notes covers the fundamental concepts of stability considerations and the application of stability circles in RF amplifier design, aligning with the provided learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
