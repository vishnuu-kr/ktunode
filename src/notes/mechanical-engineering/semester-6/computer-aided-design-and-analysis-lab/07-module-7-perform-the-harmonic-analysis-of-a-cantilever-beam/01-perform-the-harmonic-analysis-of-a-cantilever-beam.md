---
title: "Perform the harmonic analysis of a cantilever beam"
subject: "COMPUTER AIDED DESIGN AND ANALYSIS LAB"
module: "Module 7: Perform the harmonic analysis of a cantilever beam"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463c23"
status: "completed"
scrapedAt: "2026-05-20T18:03:45.038Z"
---
# Computer Aided Design and Analysis Lab: Module 7 - Harmonic Analysis of a Cantilever Beam

## Introduction to Harmonic Analysis

Harmonic analysis, also known as steady-state dynamic analysis or frequency response analysis, is a powerful FEA technique used to determine the response of a structure subjected to time-varying loads that are **sinusoidal in nature**. It is essential for understanding how a structure will behave when exposed to vibrations, rotating machinery, or any other oscillatory forces.

**Key Concepts:**

*   **Harmonic Load:** A load that varies sinusoidally with time, typically represented as $F(t) = F_0 \sin(\omega t + \phi)$ or $F(t) = F_0 \cos(\omega t + \phi)$, where:
    *   $F_0$ is the amplitude of the load.
    *   $\omega$ is the angular frequency of the load (in rad/s).
    *   $\phi$ is the phase angle.
*   **Frequency Response:** The relationship between the amplitude and phase of the structural response (displacement, stress, strain) and the frequency of the applied harmonic load.
*   **Resonance:** A phenomenon that occurs when the frequency of the applied load matches one of the natural frequencies of the structure, leading to significantly amplified vibrations and potentially catastrophic failure.
*   **Damping:** The dissipation of energy from a vibrating system, which reduces the amplitude of vibrations and prevents resonance from reaching extreme levels.

**Importance of Harmonic Analysis:**

Harmonic analysis is crucial for:

*   **Predicting structural behavior under vibrating loads:** This is vital for designing components in automotive, aerospace, and machinery applications where vibrations are common.
*   **Avoiding resonance:** By understanding the natural frequencies of a structure and the frequencies of applied loads, engineers can design to prevent resonance and its damaging effects.
*   **Determining the dynamic stress and displacement:** This provides critical information for ensuring the structural integrity and performance of components.
*   **Evaluating the effectiveness of damping mechanisms.**

**Alignment with Course Outcomes:**

*   **CO1 (K3): Apply CAD and FEA tools to design and simulate mechanical systems.** This module directly involves applying FEA tools (like ANSYS, SolidWorks Simulation, Creo Simulate) to simulate the dynamic behavior of a mechanical system (cantilever beam).
*   **CO2 (K4): Perform dynamic simulations of mechanical systems and analyze their kinematic behavior.** Harmonic analysis is a type of dynamic simulation, and we will analyze the dynamic response (displacements, velocities, accelerations) of the beam.
*   **CO3 (K5): Conduct thermal and stress analysis on mechanical components under different loading conditions.** While this module focuses on dynamic loads, the resulting stresses and displacements are a direct output of the analysis, akin to stress analysis.

---

## 1. Fundamentals of Harmonic Analysis

Harmonic analysis builds upon the concepts of static and modal analysis.

### 1.1 Static Analysis vs. Harmonic Analysis

| Feature             | Static Analysis                                   | Harmonic Analysis                                     |
| :------------------ | :------------------------------------------------ | :---------------------------------------------------- |
| **Load Type**       | Constant or slowly varying loads                  | Sinusoidally varying loads (time-dependent)           |
| **Governing Equation** | $[K]\{u\} = \{F\}$                                | $[M]\{\ddot{u}\} + [C]\{\dot{u}\} + [K]\{u\} = \{F(t)\}$ |
| **Output**          | Static displacement, stress, strain               | Dynamic displacement, stress, strain as a function of frequency |
| **Purpose**         | To find the equilibrium state under static loads | To find the steady-state response under oscillatory loads |

### 1.2 The Dynamic Equation of Motion

The general equation of motion for a discrete system is:

$[M]\{\ddot{u}\} + [C]\{\dot{u}\} + [K]\{u\} = \{F(t)\}$

Where:

*   $[M]$: Global mass matrix
*   $[C]$: Global damping matrix
*   $[K]$: Global stiffness matrix
*   $\{u\}$: Vector of nodal displacements
*   $\{\dot{u}\}$: Vector of nodal velocities
*   $\{\ddot{u}\}$: Vector of nodal accelerations
*   $\{F(t)\}$: Vector of time-dependent external forces

For harmonic analysis, the external force is assumed to be harmonic:

$\{F(t)\} = \{F_0\} \sin(\omega t)$ or $\{F_0\} \cos(\omega t)$

The displacement response is also assumed to be harmonic, but with a potentially different amplitude and phase:

$\{u(t)\} = \{U_0\} \sin(\omega t - \phi_d)$ or $\{U_0\} \cos(\omega t - \phi_d)$

Where $\{U_0\}$ represents the amplitude of displacement and $\phi_d$ is the phase lag.

Substituting these into the equation of motion and simplifying leads to the system of equations solved in harmonic analysis:

$([K] - \omega^2[M] + i\omega[C])\{U_0\} = \{F_0\}$

Here, $\{U_0\}$ is a complex vector representing both magnitude and phase.

### 1.3 Damping in Harmonic Analysis

Damping plays a crucial role in limiting the amplitude of vibrations, especially near resonance. Common damping models include:

*   **Viscous Damping:** Proportional to velocity. Modeled by the $[C]$ matrix. Often simplified using **Rayleigh Damping**, where $[C] = \alpha[M] + \beta[K]$.
*   **Hysteretic Damping (Structural Damping):** Assumed to be proportional to the stiffness and the displacement, with a phase lag. Represented by a complex stiffness term, where the stiffness matrix becomes $[K](1 + i\eta)$, where $\eta$ is the loss factor.

**Important Point to Remember:** In many practical harmonic analyses, if damping is not explicitly defined, the software might assume zero damping, which can lead to unrealistically high amplitudes at resonance. It is crucial to consider and include appropriate damping values.

---

## 2. Performing Harmonic Analysis of a Cantilever Beam using FEA Software

This section outlines the general steps involved in performing a harmonic analysis of a cantilever beam using typical FEA software. The specific commands and interfaces will vary depending on the software used (e.g., ANSYS, SolidWorks Simulation, Creo Simulate).

**Referenced Textbooks:**

*   **Finite Element Analysis: Theory and Application with ANSYS by Saeed Moaveni:** This book provides a comprehensive theoretical background and practical examples for using ANSYS for various types of analysis, including harmonic analysis. It can guide you through the workflow and interpretation of results.
*   **Engineering Design with SolidWorks 2019 by David C. Planchard and Marie P. Planchard:** This textbook covers the use of SolidWorks Simulation, which can be used for harmonic analysis. It will help you understand the modeling and meshing aspects within the SolidWorks environment.
*   **Creo Parametric 6.0 for Engineers and Designers by Prof. Sham Tickoo:** This book will be useful if you are using Creo Simulate for your analysis. It will detail the workflow from CAD modeling to simulation within the Creo environment.

### 2.1 Steps in the Harmonic Analysis Process

1.  **CAD Modeling of the Cantilever Beam:**
    *   Create a 3D model of the cantilever beam using your preferred CAD software (e.g., SolidWorks, Creo, CATIA, UG NX).
    *   Ensure the geometry is clean and suitable for FEA.
    *   Define material properties (Young's Modulus, Poisson's Ratio, Density, Damping Properties if available).
        *   *Example Material Properties (Steel):*
            *   Young's Modulus (E): 200 GPa (200 x 10^9 Pa)
            *   Poisson's Ratio (ν): 0.3
            *   Density (ρ): 7850 kg/m³
            *   Damping Ratio (ζ) or Loss Factor (η): Typically 0.01 to 0.05 for steel (This needs to be specified if available in the software).

2.  **Setting up the FEA Simulation:**
    *   **Import or Create Geometry:** Bring your CAD model into the simulation environment.
    *   **Assign Material Properties:** Assign the previously defined material properties to the beam.
    *   **Apply Boundary Conditions:**
        *   **Fixed End (Clamped):** Constrain all degrees of freedom (translations and rotations) at one end of the beam. This is the "cantilever" condition.
        *   **Free End:** The other end of the beam will be free to displace and rotate.
    *   **Define the Harmonic Load:**
        *   Specify the type of load (e.g., Force, Pressure, Acceleration).
        *   Apply the load to the free end of the beam.
        *   Define the **frequency range** of interest for the analysis (e.g., 0 Hz to 1000 Hz).
        *   Specify the **amplitude** of the harmonic load.
        *   Define the **direction** of the load.
        *   Define **damping settings** (e.g., damping ratio, Rayleigh damping coefficients) if available and necessary.

3.  **Meshing:**
    *   Discretize the beam into a mesh of finite elements.
    *   The element type should be appropriate for beam analysis (e.g., beam elements, or solid elements with a finer mesh).
    *   Ensure the mesh is sufficiently fine to capture the behavior of the beam, especially near areas of expected high stress or displacement gradients.
    *   Perform mesh convergence studies if accuracy is critical.

4.  **Running the Harmonic Analysis:**
    *   Initiate the analysis in the FEA software.
    *   The software will solve the complex system of equations for each specified frequency within the defined range.

5.  **Post-processing and Interpretation of Results:**
    *   **Frequency Response Plots:**
        *   **Amplitude vs. Frequency:** Plot the magnitude of displacement or stress at a specific point (e.g., the free end) as a function of frequency. This plot is crucial for identifying natural frequencies and resonance peaks.
        *   **Phase vs. Frequency:** Plot the phase lag of the response relative to the applied load.
    *   **Displacement:** Visualize the displacement distribution of the beam at different frequencies. You can animate the deformation at specific frequencies.
    *   **Stress and Strain:** Visualize the stress and strain distributions (e.g., Von Mises stress, maximum principal stress) at different frequencies.
    *   **Mode Shapes (from Modal Analysis):** While not directly part of harmonic analysis, it's good practice to perform a modal analysis first to identify the natural frequencies of the beam. This helps in correlating the peaks in the harmonic response plots with the beam's natural modes.

---

## 3. Cantilever Beam Example and Practical Considerations

Let's consider a steel cantilever beam with the following specifications:

*   **Length (L):** 1 meter
*   **Cross-section:** Square, 20 mm x 20 mm (0.02 m x 0.02 m)
*   **Material:** Steel (as specified above)
*   **Applied Load:** A sinusoidal force of 10 N amplitude applied vertically at the free end.
*   **Frequency Range:** 0 Hz to 1000 Hz.

### 3.1 Pre-analysis: Modal Analysis

Before performing harmonic analysis, it's beneficial to conduct a modal analysis to determine the natural frequencies of the cantilever beam. For a simple cantilever beam with uniform properties, the natural frequencies are given by:

$f_n = \frac{\beta_n^2}{2\pi} \sqrt{\frac{EI}{\rho AL^4}}}$

Where:
*   $E$: Young's Modulus
*   $I$: Area moment of inertia of the cross-section
*   $\rho$: Density
*   $A$: Cross-sectional area
*   $L$: Length
*   $\beta_n$: Dimensionless constants for cantilever beams (e.g., $\beta_1 = 1.875, \beta_2 = 4.694, \beta_3 = 7.855, ...$)

For a square cross-section of side $a = 0.02$ m:
*   $I = \frac{a^4}{12} = \frac{(0.02)^4}{12} = 6.667 \times 10^{-9} m^4$
*   $A = a^2 = (0.02)^2 = 0.0004 m^2$

Let's calculate the first natural frequency ($n=1$):
$f_1 = \frac{(1.875)^2}{2\pi} \sqrt{\frac{(200 \times 10^9 \, Pa) \times (6.667 \times 10^{-9} \, m^4)}{(7850 \, kg/m^3) \times (0.0004 \, m^2) \times (1 \, m^4)}}}$
$f_1 = \frac{3.515625}{6.283} \sqrt{\frac{1.3334}{3.14}} \approx 0.559 \times \sqrt{0.4245} \approx 0.559 \times 0.6515 \approx 364.1 \, Hz$

Similarly, the second natural frequency can be calculated using $\beta_2 = 4.694$.

**Important Point to Remember:** The natural frequencies obtained from modal analysis are crucial for interpreting the harmonic analysis results. Peaks in the harmonic response plots are expected at or near these natural frequencies.

### 3.2 Setting up the Harmonic Analysis in FEA Software (General Workflow)

1.  **Start a new Harmonic Analysis study.**
2.  **Create the beam geometry** (or import it).
3.  **Assign material properties** (Young's Modulus, Poisson's Ratio, Density). If damping is not specified globally, it might be applied per element or using a damping definition.
4.  **Apply Fixed Support** to one end of the beam.
5.  **Apply a Force** to the free end.
    *   Set the load type to **Harmonic**.
    *   Define the **Amplitude** (e.g., 10 N).
    *   Define the **frequency range** (e.g., 0 to 1000 Hz).
    *   Specify the **direction** of the force (e.g., along the Y-axis).
6.  **Mesh the model.** Use beam elements or a well-defined solid mesh.
7.  **Define Solution settings:** Specify the frequency step size or the number of frequency points to be computed.
8.  **Run the analysis.**
9.  **View results:**
    *   **Displacement Amplitude:** Plot the displacement magnitude at the free end versus frequency. You should observe peaks around 364 Hz (the first natural frequency).
    *   **Stress Amplitude:** Plot the stress magnitude at the fixed end or other critical locations versus frequency.

### 3.3 Interpreting Results

*   **Amplitude-Frequency Plot:** The plot will show how the displacement (or stress) amplitude changes as the frequency of the applied load varies.
    *   **Low Frequencies:** The amplitude will be relatively low and will increase as the applied frequency approaches the beam's natural frequencies.
    *   **Resonance Peaks:** Sharp and high peaks will appear when the applied frequency matches a natural frequency of the beam. The amplitude at these points is heavily influenced by damping.
    *   **High Frequencies:** The amplitude will generally decrease after passing a resonance peak, especially with damping.

*   **Phase-Frequency Plot:** Shows the phase lag between the applied load and the response. At resonance, the phase shift is typically around 90 degrees.

**Example of Expected Output (Conceptual):**

Imagine plotting the vertical displacement at the free end of the beam vs. frequency. You would expect to see a curve that starts low, rises significantly to a peak around 364 Hz, and then decreases. If you had a second mode at, say, 2000 Hz, you might see another, smaller peak if your frequency range extended that far.

---

## 4. Practice Questions and Exercises

**Question 1:**

What is the primary purpose of performing a harmonic analysis?

*   A) To determine the static deformation under a constant load.
*   B) To find the natural frequencies and mode shapes of a structure.
*   C) To predict the steady-state response of a structure to sinusoidal excitation.
*   D) To analyze the fluid flow patterns around an object.

**Answer:** C) To predict the steady-state response of a structure to sinusoidal excitation.

---

**Question 2:**

If the frequency of an applied harmonic load matches a natural frequency of a structure, what phenomenon is likely to occur?

*   A) Static equilibrium
*   B) Resonance
*   C) Damping decay
*   D) Modal superposition

**Answer:** B) Resonance

---

**Question 3:**

Describe the key differences between static analysis and harmonic analysis in terms of the type of load applied and the nature of the results.

**Answer:**
*   **Static analysis** deals with constant or slowly varying loads and calculates the equilibrium state of the structure, providing static displacements and stresses.
*   **Harmonic analysis** deals with time-varying, sinusoidal loads and calculates the steady-state response as a function of frequency, providing dynamic displacements and stresses that vary with the applied frequency.

---

**Question 4 (Practical Exercise - Conceptual):**

You are tasked with designing a component that will be subjected to a vibrating motor. You perform a harmonic analysis on a prototype.
*   The analysis shows a significant peak in displacement at 500 Hz.
*   The motor operates at speeds that generate vibrations with frequencies ranging from 100 Hz to 700 Hz.

What is the most critical observation from this harmonic analysis, and what action might you consider?

**Answer:**
The most critical observation is that the component experiences a significant increase in displacement at 500 Hz, which falls within the operating frequency range of the motor. This indicates a potential for resonance.

**Possible Actions:**
1.  **Detune the operating frequency:** If possible, adjust the motor's operating speed to avoid the 500 Hz frequency.
2.  **Modify the component's stiffness or mass:** Change the geometry or material properties of the component to shift its natural frequencies away from 500 Hz. For example, increasing stiffness or decreasing mass generally increases natural frequencies.
3.  **Introduce damping:** Add damping mechanisms to the component or system to reduce the amplitude of vibrations at resonance.

---

## 5. Important Points to Remember

*   **Harmonic analysis is a frequency-domain analysis.** It tells you how the structure will respond at each specific frequency.
*   **Modal analysis is often a prerequisite.** Understanding the natural frequencies from modal analysis is crucial for interpreting harmonic analysis results and identifying potential resonance issues.
*   **Damping is critical.** Always consider damping, as it significantly affects the amplitude of response, especially near resonance. Without damping, resonance peaks can be unrealistically high.
*   **Frequency range selection is important.** Ensure your analysis covers the expected range of operating frequencies.
*   **Interpretation of plots is key.** Amplitude-frequency plots are the primary tool for identifying resonance.
*   **Units consistency is paramount.** Ensure all units (length, mass, force, frequency, material properties) are consistent throughout the analysis.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


## 6. Further Reading and Software Manuals

*   **Finite Element Analysis: Theory and Application with ANSYS by Saeed Moaveni:** Chapters related to dynamic analysis and harmonic analysis will provide detailed explanations and examples.
*   **Engineering Design with SolidWorks 2019 by David C. Planchard and Marie P. Planchard:** Refer to sections on SolidWorks Simulation and its dynamic analysis capabilities.
*   **Creo Parametric 6.0 for Engineers and Designers by Prof. Sham Tickoo:** Consult chapters covering Creo Simulate for guidance on setting up and running dynamic analyses.
*   **Software-Specific Manuals:** The official manuals for your chosen FEA software (e.g., ANSYS Help, SolidWorks Simulation Help, Creo Simulate Help) are invaluable resources for specific commands, workflows, and advanced settings. They often contain detailed tutorials on harmonic analysis.

This comprehensive set of notes should provide a solid foundation for understanding and performing harmonic analysis of a cantilever beam. Remember to practice with your chosen FEA software to solidify your understanding.