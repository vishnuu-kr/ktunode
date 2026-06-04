---
title: "Microwave filters – Periodic structures – Analysis of infinite periodic structures and terminated periodic structures"
subject: "MICROWAVE DEVICES & CIRCUITS"
module: "Module 3: Microwave filters – Periodic structures – Analysis of infinite periodic structures and terminated periodic structures"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff49d"
status: "completed"
scrapedAt: "2026-05-23T18:07:55.244Z"
---
# MICROWAVE DEVICES & CIRCUITS: Module 3: Microwave Filters – Periodic Structures

## Introduction to Microwave Filters and Periodic Structures

**Definition:** Microwave filters are passive or active circuits designed to pass signals within a specific frequency range while attenuating (blocking) signals outside that range. They are fundamental components in almost all microwave systems for signal selection, noise reduction, and harmonic suppression.

**Periodic Structures:** Microwave filters often utilize periodic structures, which are arrangements of repeating unit cells. These structures exhibit unique transmission characteristics due to the interaction of electromagnetic waves with the repeating elements.

**Relevance to Course Outcomes:**
*   **CO3: Design microwave filters by different methods (Knowledge Level: K3)** - This module directly addresses filter design principles using periodic structures.

**Textbook References:**
*   Pozar, D. M. (2012). *Microwave Engineering* (4th ed.). Wiley India. (Chapters on filters and periodic structures)
*   Collin, R. E. (2012). *Foundation of Microwave Engineering* (2nd ed.). Wiley India. (Chapters on filters and transmission line theory)
*   Liao, S. Y. (n.d.). *Microwave Devices & Circuits* (3rd ed.). Pearson. (Chapters related to filter design)

---

## 1. Analysis of Infinite Periodic Structures

An infinite periodic structure can be thought of as a transmission line with a repeating pattern of discontinuities. The analysis of such structures is crucial for understanding the fundamental behavior of periodic filters.

### Key Concepts and Definitions

*   **Unit Cell:** The basic repeating element of a periodic structure.
*   **Propagating Modes:** Frequencies for which energy can propagate through the structure with minimal attenuation.
*   **Stopbands:** Frequency ranges where the structure exhibits high attenuation, preventing signal propagation.
*   **Passbands:** Frequency ranges where the structure allows signals to propagate with low attenuation.
*   **Floquet's Theorem:** A fundamental theorem in the analysis of linear differential equations with periodic coefficients. For periodic structures, it states that the solutions (wave propagation) can be expressed as a product of an exponential term (representing propagation) and a periodic function.
    *   For a transmission line section, the voltage or current can be written as:
        $V(z) = V_0 e^{-\gamma z}$ where $\gamma$ is the propagation constant.
    *   In a periodic structure, the propagation constant $\gamma$ is generally complex and depends on frequency. The wave propagating through a unit cell can be described by a propagation constant $\gamma$ such that the voltage/current at the end of the cell is related to the voltage/current at the beginning by $e^{-\gamma}$.
*   **Propagation Constant ($\gamma$):** For an infinite periodic structure, the propagation constant $\gamma$ is determined by the electrical length and impedance characteristics of the unit cell. It is often expressed as $\gamma = \alpha + j\beta$, where $\alpha$ is the attenuation constant and $\beta$ is the phase constant.
*   **Bragg Wavelength:** The wavelength at which the phase shift per unit cell is $180^\circ$ ($\pi$ radians). This often marks the center of a stopband.

### Analysis Methods

The analysis of infinite periodic structures typically involves determining the propagation constant ($\gamma$) as a function of frequency. This allows us to identify the passbands and stopbands.

#### 1.1. ABCD Matrix Method (or Transfer Matrix Method)

The ABCD matrix relates the voltage and current at the input of a network to those at the output. For a single unit cell of a periodic structure, we can determine its ABCD matrix.

*   Let the unit cell have input voltage/current $V_1, I_1$ and output voltage/current $V_2, I_2$.
    $$ \begin{pmatrix} V_1 \\ I_1 \end{pmatrix} = \begin{pmatrix} A & B \\ C & D \end{pmatrix} \begin{pmatrix} V_2 \\ I_2 \end{pmatrix} $$
*   For an infinite periodic structure, the voltage and current at the input of the $n$-th cell are related to those at the input of the $(n+1)$-th cell by the same ABCD matrix:
    $$ \begin{pmatrix} V_n \\ I_n \end{pmatrix} = \begin{pmatrix} A & B \\ C & D \end{pmatrix} \begin{pmatrix} V_{n+1} \\ I_{n+1} \end{pmatrix} $$
*   If the entire infinite structure is characterized by a total ABCD matrix $\mathbf{T}_{total}$, and we consider the propagation from $z=0$ to $z=L$, then:
    $$ \begin{pmatrix} V(0) \\ I(0) \end{pmatrix} = \mathbf{T}_{total} \begin{pmatrix} V(L) \\ I(L) \end{pmatrix} $$
*   For an infinite structure, the propagation constant $\gamma$ is related to the ABCD parameters of the unit cell by:
    $$ e^{-\gamma l} = A + \frac{B}{Z_0} = D + C Z_0 $$
    where $l$ is the length of the unit cell and $Z_0$ is the characteristic impedance of the line. This equation is derived from the conditions for wave propagation through the periodic structure.
    *   $A = \cosh(\gamma l)$ and $D = \cosh(\gamma l)$
    *   $B = Z_0 \sinh(\gamma l)$ and $C = \frac{1}{Z_0} \sinh(\gamma l)$
    *   These are the ABCD parameters for a uniform transmission line section of length $l$ with characteristic impedance $Z_0$ and propagation constant $\gamma$. In the case of a periodic structure, these equations are used to *define* the equivalent propagation constant $\gamma$ for the periodic structure.

#### 1.2. Characteristic Impedance of Periodic Structures

The concept of characteristic impedance is extended to periodic structures. It's defined as the ratio of voltage to current for a traveling wave.

*   $Z_{0,p} = \frac{V}{I} = \sqrt{\frac{B}{C}}$ (for structures with reciprocal ABCD matrices)
*   Passbands occur when the propagation constant is purely imaginary ($\gamma = j\beta$), meaning $\alpha = 0$. This corresponds to frequencies where the structure acts like a lossless transmission line.
*   Stopbands occur when the propagation constant is real ($\gamma = \alpha$), meaning $\beta = 0$ or $\pi$ per unit cell. This corresponds to frequencies where significant attenuation occurs.

**Condition for Passband:** The argument of the eigenvalue of the ABCD matrix (which relates to the propagation constant) must be real. This often translates to:
$$ -1 \le \frac{A+D}{2} \le 1 $$
If $\frac{A+D}{2} > 1$ or $\frac{A+D}{2} < -1$, then the structure is in a stopband, and the propagation constant is real, leading to attenuation.

**Example:** Consider a simple periodic structure made of cascaded sections of transmission lines with alternating characteristic impedances $Z_1$ and $Z_2$ and electrical lengths $\theta_1$ and $\theta_2$. The ABCD matrix for each section can be calculated, and then multiplied to get the ABCD matrix for the unit cell. From this, the propagation constant $\gamma$ can be determined.

**Textbook Reference:**
*   Pozar, Chapter 7: Microwave Network Analysis, Section 7.8: Periodic Structures. This section details the use of ABCD matrices and the conditions for passbands and stopbands.

---

## 2. Analysis of Terminated Periodic Structures

An infinite periodic structure is an idealized concept. In reality, periodic structures are finite in length and are connected to source and load impedances. The analysis of terminated periodic structures considers these practical aspects.

### Key Concepts and Definitions

*   **Finite Length:** The periodic structure has a specific number of unit cells.
*   **Source and Load Impedances:** The impedances connected at the input and output of the periodic structure, respectively.
*   **Reflection Coefficient:** The ratio of reflected voltage to incident voltage at the input and output, determined by the mismatch between the periodic structure's characteristic impedance and the source/load impedances.
*   **Cascaded Matrices:** The overall ABCD matrix of a finite periodic structure is obtained by multiplying the ABCD matrices of its individual unit cells (or segments). If there are $N$ identical unit cells, and the ABCD matrix of a single unit cell is $\begin{pmatrix} A & B \\ C & D \end{pmatrix}$, then the ABCD matrix of $N$ cells is $\begin{pmatrix} A & B \\ C & D \end{pmatrix}^N$.

### Analysis Methods

The analysis of terminated periodic structures involves cascading the ABCD matrices of each segment (including potential matching sections) and then using the source and load impedances to calculate the overall transmission and reflection characteristics.

#### 2.1. Cascading ABCD Matrices

For a terminated periodic structure with $N$ unit cells, each with ABCD matrix $\mathbf{T}_{cell}$, the total ABCD matrix $\mathbf{T}_{total}$ is:
$$ \mathbf{T}_{total} = (\mathbf{T}_{cell})^N $$
The calculation of $\mathbf{T}_{total}$ can be simplified using eigenvalues and eigenvectors of $\mathbf{T}_{cell}$. If $\mathbf{T}_{cell} = \mathbf{P} \mathbf{\Lambda} \mathbf{P}^{-1}$, then $(\mathbf{T}_{cell})^N = \mathbf{P} \mathbf{\Lambda}^N \mathbf{P}^{-1}$.

The overall ABCD matrix for the terminated structure relates the input voltage/current to the output voltage/current:
$$ \begin{pmatrix} V_{in} \\ I_{in} \end{pmatrix} = \mathbf{T}_{total} \begin{pmatrix} V_{out} \\ I_{out} \end{pmatrix} $$
The output voltage and current are related to the load impedance $Z_L$:
$$ V_{out} = Z_L I_{out} $$
$$ \begin{pmatrix} V_{in} \\ I_{in} \end{pmatrix} = \mathbf{T}_{total} \begin{pmatrix} Z_L I_{out} \\ I_{out} \end{pmatrix} = \begin{pmatrix} A_{total} & B_{total} \\ C_{total} & D_{total} \end{pmatrix} \begin{pmatrix} Z_L I_{out} \\ I_{out} \end{pmatrix} $$
From this, we can calculate the input impedance $Z_{in} = V_{in}/I_{in}$ and then the reflection coefficients.

The transmission coefficient $T$ and reflection coefficient $\Gamma$ for the entire structure can be calculated from the overall ABCD parameters and the source impedance $Z_S$ and load impedance $Z_L$.

$$ \Gamma_{in} = \frac{Z_{in} - Z_S}{Z_{in} + Z_S} $$
$$ S_{11} = \Gamma_{in} $$
The transmission coefficient $S_{21}$ can be calculated as:
$$ S_{21} = \frac{T_{total}}{1 + \Gamma_{in}} $$
where $T_{total} = \frac{2 Z_S}{Z_S A_{total} + B_{total} + Z_S C_{total} Z_L + D_{total} Z_L}$.

#### 2.2. Impedance Matching

When terminating a periodic structure (especially one designed as a filter), matching the characteristic impedance of the structure to the source and load impedances is crucial for efficient power transfer and to minimize reflections.

*   **Matching Networks:** Often, matching networks (e.g., quarter-wave transformers, stubs) are used at the input and output of a periodic structure to ensure good impedance matching. The analysis of the terminated structure must include the ABCD matrices of these matching networks as well.

#### 2.3. Filter Design Implications

The analysis of terminated periodic structures is directly applied to designing filters.

*   **Bandpass Filters:** These can be realized using structures with passbands at the desired frequencies and stopbands elsewhere. The number of unit cells determines the sharpness of the filter's skirts (transition bands).
*   **Bandstop Filters:** Achieved by designing structures with stopbands at the desired rejection frequencies.
*   **Losses:** Real periodic structures will have conductor and dielectric losses, which increase attenuation even in the passbands. These losses can be incorporated into the ABCD parameters (making them non-reciprocal in some cases or increasing $\alpha$).

**Example:** Consider a uniform periodic structure composed of $N$ identical stubs or irises in a transmission line.
1.  Calculate the ABCD matrix for a single stub/iris.
2.  Calculate the ABCD matrix for the intervening transmission line section.
3.  Multiply these matrices to get the ABCD matrix for one unit cell.
4.  Raise the unit cell matrix to the power of $N$ to get the total matrix for the periodic section.
5.  Incorporate source and load impedances to calculate $S_{11}$ and $S_{21}$.

**Textbook References:**
*   Collin, R. E. (2012). *Foundation of Microwave Engineering* (2nd ed.). Wiley India. Chapters on filter theory and microwave network analysis will detail the cascading of matrices.
*   Liao, S. Y. (n.d.). *Microwave Devices & Circuits* (3rd ed.). Pearson. Chapters on filters will provide practical examples of terminated structures.

---

## 3. Types of Periodic Structures Used in Microwave Filters

Periodic structures can be realized using various physical configurations.

### Key Concepts and Definitions

*   **Lattice Filters:** Constructed by cascading alternating series and shunt elements. These can be impedance inverters, series inductors, shunt capacitors, etc.
*   **Waveguide Filters:** Discontinuities in waveguides, such as irises (apertures) or posts, create periodic structures.
*   **Microstrip Filters:**
    *   **Interdigital Filters:** Parallel strips of varying lengths, with alternating connections to ground.
    *   **Stub Filters:** Series of open-circuited or short-circuited stubs connected to a main transmission line.
    *   **Hairpin Filters:** Folded stubs that reduce the physical length.
*   **Slow-wave Structures:** Structures that effectively increase the wavelength of the propagating wave, allowing for physically shorter filters. This can be achieved by introducing periodic variations in the characteristic impedance or effective dielectric constant.

### Analysis of Specific Structures

The analysis of these specific structures involves deriving their unit cell ABCD matrices.

*   **Stub Filters:** A unit cell might consist of a transmission line section and a stub. The ABCD matrix for a stub (e.g., open-circuited) can be derived from transmission line equations.

    *   **Open-circuited stub:** $Z_{in} = j Z_0 \tan(\beta l)$. The ABCD matrix for a stub (as a two-port network terminated in open circuit) can be derived.
*   **Irises in Waveguides:** An iris in a waveguide acts as a series impedance. A series of irises creates a periodic structure. The impedance of an iris depends on its aperture size and shape.

**Reference Books:**
*   Bhat, B., & Koul, S. K. (2007). *Stripline-like Transmission Lines for MIC*. New Age International (P) Ltd. (Provides details on microstrip and stripline structures.)
*   Konishi, Y. (n.d.). *Microwave Integrated Circuits*. Taylor & Francis. (Details on various MIC filter structures.)

---

## 4. Practical Considerations and Design

### Key Concepts and Definitions

*   **Insertion Loss:** Loss of power in the passband due to conductor and dielectric losses.
*   **Return Loss:** Measure of impedance mismatch, indicating power reflected back to the source.
*   **Selectivity:** The ability of a filter to distinguish between adjacent frequencies, related to the steepness of the skirts.
*   **Group Delay:** Variation of phase with frequency. Non-uniform group delay can distort signals.
*   **Bandwidth:** The range of frequencies that a filter passes.
*   **Characteristic Impedance of Unit Cell:** For design purposes, it's often useful to define an equivalent characteristic impedance for the periodic structure's unit cell, especially for matching.

### Design Procedure

1.  **Filter Specification:** Define the required passband, stopband frequencies, insertion loss, return loss, and bandwidth.
2.  **Filter Type Selection:** Choose an appropriate periodic structure based on specifications and physical constraints (e.g., microstrip, waveguide).
3.  **Unit Cell Design:** Determine the dimensions of the unit cell elements (e.g., stub lengths, iris sizes) to achieve the desired passband and stopband characteristics. This often involves using filter synthesis techniques (e.g., Butterworth, Chebyshev approximations) to determine the required element values, which are then translated into physical dimensions.
4.  **Analysis of Terminated Structure:** Analyze the performance of the designed finite periodic structure with appropriate terminations (source and load impedances).
5.  **Optimization:** Adjust the dimensions to meet all specifications, considering manufacturing tolerances.

**Example:** Designing a bandpass filter using cascaded quarter-wavelength stubs.
*   The length of each stub determines the resonant frequency.
*   The spacing between stubs and their characteristic impedance influence the coupling and bandwidth.

**Textbook References:**
*   Pozar, Chapter 7: Microwave Network Analysis, Section 7.9: Filter Design.
*   Liao, S. Y. (n.d.). *Microwave Devices & Circuits* (3rd ed.). Pearson. Chapters on filter design often include design examples.

---

## 5. Practice Questions and Exercises

**Question 1:**
A uniform transmission line section of length $l$, characteristic impedance $Z_0$, and propagation constant $\gamma$ has an ABCD matrix $\begin{pmatrix} A & B \\ C & D \end{pmatrix}$. What is the relationship between these parameters and $\gamma, Z_0, l$?
**Answer:** $A = D = \cosh(\gamma l)$, $B = Z_0 \sinh(\gamma l)$, $C = \frac{1}{Z_0} \sinh(\gamma l)$.

**Question 2:**
For an infinite periodic structure, what is the condition for being in a passband, in terms of the parameter $(A+D)/2$ where $\begin{pmatrix} A & B \\ C & D \end{pmatrix}$ is the ABCD matrix of the unit cell?
**Answer:** The structure is in a passband when $-1 \le \frac{A+D}{2} \le 1$.

**Question 3:**
Explain why the analysis of terminated periodic structures is important for practical filter design.
**Answer:** Practical filters are finite in length and connected to source and load impedances. Analyzing terminated structures allows us to determine the actual performance (insertion loss, return loss, bandwidth) under realistic operating conditions, considering reflections and mismatches.

**Question 4:**
Consider a periodic structure made of $N$ identical unit cells, each with an ABCD matrix $\mathbf{T}_{cell}$. How do you find the overall ABCD matrix $\mathbf{T}_{total}$ of the terminated structure?
**Answer:** The overall ABCD matrix for the $N$ cascaded unit cells is $\mathbf{T}_{total} = (\mathbf{T}_{cell})^N$. This matrix is then used in conjunction with source and load impedances to calculate overall performance.

**Question 5:**
What is a "stopband" in a periodic structure? How is it related to the propagation constant?
**Answer:** A stopband is a frequency range where a periodic structure exhibits high attenuation, preventing signal propagation. In this band, the propagation constant $\gamma = \alpha + j\beta$ has a significant real part ($\alpha > 0$), indicating exponential decay of the wave amplitude.

---

## 6. Important Points to Remember

*   **Periodic structures** are key to realizing microwave filters.
*   **Floquet's theorem** is the theoretical basis for wave propagation in infinite periodic structures.
*   The **ABCD matrix** of the unit cell is fundamental for analyzing both infinite and terminated periodic structures.
*   **Passbands** occur when the propagation constant is purely imaginary ($\gamma = j\beta$), and **stopbands** occur when it's real ($\gamma = \alpha$).
*   The condition for a **passband** for a unit cell's ABCD matrix is $-1 \le (A+D)/2 \le 1$.
*   **Terminated periodic structures** require cascading ABCD matrices and consideration of source/load impedances for performance analysis.
*   **Impedance matching** is critical for efficient operation of terminated periodic filters.
*   Different physical configurations like **stubs, irises, and interdigital lines** form periodic structures.

---

## Alignment with Course Outcomes

*   **CO1:** While this module primarily focuses on filters, understanding the behavior of waves in periodic structures indirectly relates to wave propagation principles relevant to solid-state devices and generators. (Indirect relevance)
*   **CO2:** The use of ABCD matrices and the analysis of cascaded networks for terminated structures directly aligns with analyzing microwave networks using signal flow graphs or matrix methods. (Direct relevance)
*   **CO3:** This module is entirely dedicated to the principles and analysis of microwave filters using periodic structures, covering the core of filter design. (Direct and primary relevance)
*   **CO4:** Concepts of transmission lines and their discontinuities used in periodic structures are foundational to understanding how components are integrated in MICs. (Foundational relevance)

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
