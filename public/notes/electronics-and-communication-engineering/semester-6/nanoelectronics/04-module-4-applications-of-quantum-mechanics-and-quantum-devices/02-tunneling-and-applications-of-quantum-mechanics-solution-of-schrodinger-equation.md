---
title: "Tunneling and applications of quantum mechanics - solution of Schrodinger equation: Free space, Potential well, tunneling through a potential barrier. Potential energy profiles for material interfaces, Applications of tunneling."
subject: "NANOELECTRONICS"
module: "Module 4: Applications of Quantum mechanics and Quantum devices"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780feedf"
status: "completed"
scrapedAt: "2026-05-23T18:02:04.685Z"
---
# NANOELECTRONICS - Module 4: Applications of Quantum Mechanics and Quantum Devices

## Topic: Tunneling and Applications of Quantum Mechanics - Solution of Schrödinger Equation

This module delves into the fundamental quantum mechanical principles that govern the behavior of electrons in nanoscale electronic devices. We will explore the solutions to the Schrödinger equation for various scenarios and understand how quantum phenomena like tunneling are harnessed for practical applications.

### Learning Outcomes Addressed:

*   **CO1:** Describe the challenges of scaling of electron devices to Nanometer scales (K2) - *Tunneling is a direct consequence of nanoscale dimensions.*
*   **CO2:** Design novel transistor devices to reduce the short channel effects and improve performance (K3) - *Understanding tunneling is crucial for designing devices like tunnel FETs.*
*   **CO3:** Outline the Nano scale quantum transport in Nano electronic devices from atom to transistor (K2) - *Tunneling is a key aspect of quantum transport.*
*   **CO4:** Apply quantum mechanics in materials and quantum devices (K3) - *This entire module focuses on applying quantum mechanics.*

---

### 1. Solution of the Schrödinger Equation

The **Schrödinger equation** is the fundamental equation in quantum mechanics that describes how the quantum state of a physical system changes over time. For stationary states (where the energy is constant), we use the time-independent Schrödinger equation:

$$ \hat{H}\psi(\mathbf{r}) = E\psi(\mathbf{r}) $$

Where:
*   $\hat{H}$ is the **Hamiltonian operator**, representing the total energy of the system (kinetic + potential).
*   $\psi(\mathbf{r})$ is the **wavefunction**, a complex-valued function that contains all the probabilistic information about the system. $|\psi(\mathbf{r})|^2$ represents the probability density of finding the particle at position $\mathbf{r}$.
*   $E$ is the **energy** of the system, which are quantized (discrete values) for bound states.

**Key Concept:** The solution to the Schrödinger equation gives us the allowed energy levels and the corresponding wavefunctions for a particle in a given potential.

#### 1.1 Free Space

In free space, a particle experiences no potential energy, meaning $V(\mathbf{r}) = 0$. The Schrödinger equation becomes:

$$ -\frac{\hbar^2}{2m}\nabla^2\psi(\mathbf{r}) = E\psi(\mathbf{r}) $$

Where:
*   $\hbar$ is the reduced Planck constant.
*   $m$ is the mass of the particle (e.g., electron).
*   $\nabla^2$ is the Laplacian operator.

**Solution:** The solutions are plane waves of the form:

$$ \psi(x, t) = A e^{i(kx - \omega t)} $$

For the time-independent case, the solutions are plane waves:

$$ \psi(x) = A e^{ikx} $$

Where $k = \sqrt{2mE}/\hbar$ is the wave number. These wavefunctions represent a particle with a definite momentum ($p = \hbar k$) and energy ($E = p^2/2m$) that is not localized. It can be anywhere in space.

**Importance in Nanoelectronics:** While perfectly free space is an idealization, this solution forms the basis for understanding electron propagation in conducting materials where the potential is relatively uniform.

#### 1.2 Potential Well (Infinite and Finite)

A **potential well** is a region where the potential energy is lower than the surrounding regions. Electrons confined within a potential well exhibit quantized energy levels.

##### 1.2.1 Infinite Potential Well (Particle in a Box)

This is a simplified model where a particle is confined to a region of space (e.g., a 1D box of length $L$) with infinitely high potential barriers at the boundaries ($V(x) = 0$ for $0 \le x \le L$, and $V(x) = \infty$ otherwise).

**Schrödinger Equation (within the box):**

$$ -\frac{\hbar^2}{2m} \frac{d^2\psi(x)}{dx^2} = E\psi(x) $$

**Boundary Conditions:** $\psi(0) = 0$ and $\psi(L) = 0$ (since the particle cannot be in regions of infinite potential).

**Solutions:** The allowed energy levels are quantized:

$$ E_n = \frac{n^2\pi^2\hbar^2}{2mL^2}, \quad n = 1, 2, 3, \ldots $$

And the corresponding wavefunctions are:

$$ \psi_n(x) = \sqrt{\frac{2}{L}} \sin\left(\frac{n\pi x}{L}\right) $$

**Key Concepts:**
*   **Quantization of Energy:** The energy of the electron is not continuous but can only take specific discrete values.
*   **Zero-Point Energy:** The lowest possible energy ($n=1$) is non-zero, meaning the particle is never completely at rest.
*   **Probability Distribution:** The probability of finding the electron is not uniform; it is highest in certain regions and zero at the boundaries.

**Relevance to Nanoelectronics:** This model helps understand electron behavior in quantum dots, quantum wells, and nanowires, where electrons are confined in one or more dimensions. The energy spacing increases as the size of the confinement ($L$) decreases, which is crucial for understanding quantum confinement effects in nanostructures. (Ref: Goser et al., Griffiths & Schroetter)

##### 1.2.2 Finite Potential Well

In a finite potential well, the potential energy barriers at the boundaries have a finite height ($V_0$).

**Schrödinger Equation (for different regions):**
*   Inside the well ($0 \le x \le L$): $-\frac{\hbar^2}{2m} \frac{d^2\psi}{dx^2} + V_0 \psi = E\psi$
*   Outside the well ($x < 0$ and $x > L$): $-\frac{\hbar^2}{2m} \frac{d^2\psi}{dx^2} = E\psi$

**Solutions:** The solutions are more complex, involving trigonometric functions inside the well and decaying exponential functions outside the well. The energy levels are still quantized but are generally lower than in an infinite well for the same confinement, and there is a finite probability of finding the particle *outside* the well (though it decays exponentially).

**Importance:** A more realistic model for understanding electron confinement in quantum wells, which are fundamental structures in optoelectronics and advanced transistors.

#### 1.3 Tunneling Through a Potential Barrier

**Quantum tunneling** is a phenomenon where a quantum mechanical particle can pass through a potential energy barrier, even if its kinetic energy is less than the height of the barrier. Classically, this is impossible.

**Scenario:** Consider a particle with energy $E$ encountering a potential barrier of height $V_0$ and width $a$, where $E < V_0$.

**Schrödinger Equation (in different regions):**
*   Region 1 (before barrier, $x < 0$): $V(x) = 0$. Solution is an incident wave and a reflected wave.
*   Region 2 (inside barrier, $0 \le x \le a$): $V(x) = V_0$. Solution is a decaying exponential.
*   Region 3 (after barrier, $x > a$): $V(x) = 0$. Solution is a transmitted wave.

**Key Concept: Transmission Probability (Tunneling Probability)**

The wavefunction inside the barrier ($0 \le x \le a$) takes the form:

$$ \psi_{II}(x) = A e^{\kappa x} + B e^{-\kappa x} $$

Where $\kappa = \sqrt{2m(V_0 - E)}/\hbar$. This shows that the wavefunction does not drop to zero immediately but decays exponentially. If the barrier is not infinitely wide, there will be a non-zero amplitude of the wavefunction on the other side of the barrier, leading to a probability of transmission.

The **transmission coefficient (T)**, which represents the probability of tunneling, depends on:
*   **Mass of the particle (m):** Lighter particles tunnel more easily.
*   **Barrier Height ($V_0$):** Higher barriers reduce tunneling probability.
*   **Barrier Width (a):** Wider barriers significantly reduce tunneling probability.
*   **Energy of the particle (E):** Lower energy particles tunnel less easily.

For a rectangular barrier and $E < V_0$, the transmission coefficient is approximately:

$$ T \approx e^{-2\kappa a} = e^{-2a\sqrt{2m(V_0 - E)}/\hbar} $$

**Important Point to Remember:** Tunneling probability decreases exponentially with increasing barrier width and height, and with increasing particle mass. (Ref: Goser et al., Griffiths & Schroetter, Datta)

---

### 2. Potential Energy Profiles for Material Interfaces

Understanding how the potential energy changes at the interface between different materials is crucial for predicting electron behavior in heterostructures and multi-material devices.

**Key Concept:** When two materials with different work functions or electron affinities meet, the potential energy profile at the interface is shaped by the need to satisfy the Schrödinger equation and maintain continuity of the wavefunction and its derivative.

**Examples of Potential Energy Profiles:**

*   **Abrupt Heterojunction (e.g., Metal-Semiconductor):**
    *   The potential energy changes abruptly at the interface.
    *   For a metal-semiconductor contact, this leads to a **Schottky barrier**. The barrier height depends on the metal's work function and the semiconductor's electron affinity.
    *   If the metal's work function is significantly larger than the semiconductor's electron affinity, a potential barrier is formed, which can impede electron flow (Schottky barrier contact). If it's smaller, it forms an ohmic contact.

*   **Graded Heterojunction (e.g., Semiconductor-Semiconductor):**
    *   The potential energy changes gradually over a certain region.
    *   This can be due to alloying or doping gradients.
    *   Such profiles can create **potential wells** or **barriers** depending on the band alignment of the materials.

*   **Insulator-Semiconductor Interface (e.g., MOSFET Gate Stack):**
    *   A significant potential barrier is created by the insulator (e.g., SiO2 or high-k dielectric).
    *   Electrons in the semiconductor face this barrier. The barrier height and width determine whether tunneling occurs, which is a significant issue in scaled-down MOSFETs (gate leakage current).

**Relevance to Nanoelectronics:** The precise engineering of these potential energy profiles at material interfaces is fundamental to designing advanced transistors (like FinFETs, Tunnel FETs), memory devices (Flash memory), and optoelectronic devices (LEDs, lasers). (Ref: Taur & Ning, Goser et al., Hanson)

---

### 3. Applications of Tunneling

Quantum tunneling, though counter-intuitive, is a cornerstone of many modern electronic and quantum devices.

#### 3.1 Tunnel Diodes (Esaki Diodes)

*   **Principle:** Heavily doped p-n junctions exhibit a narrow depletion region and a sharp potential barrier. Due to high doping, the Fermi levels are close to the band edges. At low forward bias, electrons can tunnel from the conduction band of the n-side to the valence band of the p-side, resulting in a negative differential resistance (NDR) region in the I-V characteristic.
*   **Application:** Used in high-frequency oscillators and amplifiers.
*   **Nanoelectronics Relevance:** Demonstrates tunneling in a semiconductor device.

#### 3.2 Flash Memory (Floating Gate Transistors)

*   **Principle:** Stores information by trapping charge (electrons) on an electrically isolated **floating gate**. This is achieved by tunneling electrons through a thin gate oxide layer (tunneling oxide) using **Fowler-Nordheim tunneling** or **hot-carrier injection**.
*   **Tunneling Mechanism:** Electrons are forced through the thin insulator by a high electric field.
*   **Application:** Non-volatile memory in computers, USB drives, SSDs.
*   **Nanoelectronics Relevance:** A ubiquitous application of tunneling in data storage. The scaling of flash memory relies on maintaining control over tunneling through extremely thin oxide layers. (Ref: Goser et al., Hanson)

#### 3.3 Scanning Tunneling Microscopy (STM)

*   **Principle:** A sharp conducting tip is brought very close to a conducting surface (nanometers away). A small bias voltage is applied between the tip and the surface. Electrons tunnel across the vacuum gap between the tip and the surface.
*   **Tunneling Probability:** The tunneling current is extremely sensitive to the tip-surface distance (exponential dependence).
*   **Application:** Imaging surfaces with atomic resolution, manipulating atoms.
*   **Nanoelectronics Relevance:** A powerful tool for characterizing and manipulating matter at the nanoscale, crucial for nanotechnology research and fabrication.

#### 3.4 Tunnel Field-Effect Transistors (TFETs)

*   **Principle:** Unlike conventional MOSFETs that rely on thermionic emission over a barrier, TFETs use **band-to-band tunneling (BTBT)** to switch on. Electrons tunnel from the valence band of the source to the conduction band of the channel when a gate voltage is applied.
*   **Advantage:** Potentially much lower subthreshold swing (SS) than MOSFETs, leading to lower power consumption.
*   **Application:** Low-power electronics, IoT devices.
*   **Nanoelectronics Relevance:** A leading candidate for future low-power digital logic, directly leveraging quantum tunneling for switching. (Ref: Colinge, Lundstrom & Guo)

#### 3.5 Quantum Mechanical Tunneling in Modern Transistors (Gate Leakage)

*   **Challenge:** As transistors shrink, gate oxide layers become thinner (e.g., < 1.5 nm). This makes them susceptible to direct tunneling of electrons from the channel to the gate.
*   **Problem:** This **gate leakage current** increases power consumption and reduces device reliability.
*   **Solution:** Introduction of **high-k dielectric materials** (e.g., HfO2, Al2O3) with higher permittivity. These materials allow for a physically thicker gate dielectric while maintaining the same capacitance, thereby reducing direct tunneling.
*   **Nanoelectronics Relevance:** A direct consequence of scaling that necessitates the application of quantum mechanics and materials science to overcome. (Ref: Huff & Gilmer, Taur & Ning)

#### 3.6 Resonant Tunneling Diodes (RTDs)

*   **Principle:** Consist of two potential barriers separated by a quantum well. When the energy of incoming electrons matches the quantized energy levels in the quantum well, **resonant tunneling** occurs, leading to a sharp peak in the current.
*   **Application:** High-speed oscillators, frequency multipliers, multi-valued logic.
*   **Nanoelectronics Relevance:** Exploits quantum well states and tunneling for specific electronic functions.

---

### Practice Questions

1.  **Explain why quantum tunneling is impossible in classical physics but possible in quantum mechanics. Provide the approximate formula for the transmission coefficient of a rectangular barrier and identify its key dependencies.**
    *   **Answer:** Classical particles have definite trajectories and cannot pass through potential barriers if their energy is less than the barrier height. In quantum mechanics, particles are described by wavefunctions. Even if $E < V_0$, the wavefunction decays exponentially within the barrier but doesn't immediately become zero. If the barrier is finite, there's a non-zero probability of finding the particle on the other side. The transmission coefficient $T \approx e^{-2a\sqrt{2m(V_0 - E)}/\hbar}$ shows exponential dependence on barrier width ($a$), barrier height ($V_0$), particle mass ($m$), and particle energy ($E$).

2.  **Describe the concept of quantum confinement in a "particle in a box" model. How does the energy spacing change as the size of the box decreases? Relate this to nanoscale semiconductor structures.**
    *   **Answer:** Quantum confinement occurs when a particle is restricted to a very small region of space, leading to quantized energy levels. In a 1D "particle in a box" of length $L$, the energy levels are $E_n = \frac{n^2\pi^2\hbar^2}{2mL^2}$. As $L$ decreases, the energy levels become more widely spaced. This is analogous to quantum dots, quantum wells, and nanowires where electron energy levels are quantized, and their properties change significantly with size.

3.  **Discuss the role of tunneling in the operation of a Flash memory cell. What are the primary concerns related to tunneling as Flash devices are scaled down?**
    *   **Answer:** In Flash memory, tunneling (typically Fowler-Nordheim tunneling) is used to inject electrons onto a floating gate through a thin tunnel oxide layer. This traps charge and stores data. As devices scale down, the tunnel oxide becomes thinner, increasing the risk of unwanted tunneling (leakage current) from the floating gate to the channel or substrate, leading to data loss and reduced reliability.

4.  **What is the fundamental difference in the switching mechanism between a MOSFET and a Tunnel FET (TFET)? How does this difference relate to their potential advantages?**
    *   **Answer:** MOSFETs switch by thermionic emission, where electrons overcome a potential barrier modulated by the gate voltage. TFETs switch using band-to-band tunneling (BTBT), where electrons tunnel from the valence band of the source to the conduction band of the channel, controlled by the gate. This BTBT mechanism allows TFETs to potentially achieve a steeper subthreshold swing (< 60 mV/decade), leading to lower operating voltages and reduced power consumption compared to MOSFETs.

5.  **Consider a semiconductor interface with a barrier height $V_0 = 0.5$ eV and a particle energy $E = 0.2$ eV. If the barrier width is $a = 1$ nm, estimate the tunneling probability. (Assume electron mass $m = 9.11 \times 10^{-31}$ kg and $\hbar \approx 1.05 \times 10^{-34}$ J·s).**
    *   **Answer:**
        First, calculate $\kappa$:
        $V_0 - E = (0.5 - 0.2) \text{ eV} = 0.3 \text{ eV}$
        Convert to Joules: $0.3 \text{ eV} \times 1.602 \times 10^{-19} \text{ J/eV} = 4.806 \times 10^{-20} \text{ J}$
        $2m(V_0 - E) = 2 \times (9.11 \times 10^{-31} \text{ kg}) \times (4.806 \times 10^{-20} \text{ J}) \approx 8.76 \times 10^{-50} \text{ kg·J}$
        $\sqrt{2m(V_0 - E)} \approx \sqrt{8.76 \times 10^{-50}} \approx 9.36 \times 10^{-25} \text{ kg}^{1/2} \text{ J}^{1/2}$
        $\hbar = 1.05 \times 10^{-34} \text{ J·s}$
        $\kappa = \frac{\sqrt{2m(V_0 - E)}}{\hbar} \approx \frac{9.36 \times 10^{-25}}{1.05 \times 10^{-34}} \approx 8.91 \times 10^9 \text{ m}^{-1}$
        Now calculate the exponent:
        $2a\kappa = 2 \times (1 \times 10^{-9} \text{ m}) \times (8.91 \times 10^9 \text{ m}^{-1}) \approx 17.82$
        Transmission Probability $T \approx e^{-17.82} \approx 1.5 \times 10^{-8}$
        **Therefore, the tunneling probability is very low, on the order of $10^{-8}$.**

---

### Important Points to Remember:

*   The **wavefunction ($\psi$)** is central to quantum mechanics; $|\psi|^2$ gives probability density.
*   **Quantum confinement** leads to **quantized energy levels** in nanostructures.
*   **Tunneling** allows particles to overcome potential barriers even if their energy is less than the barrier height.
*   Tunneling probability decreases **exponentially** with barrier width and height.
*   Potential energy profiles at **material interfaces** dictate electron behavior and device functionality.
*   Tunneling is a critical phenomenon in **Flash memory**, **TFETs**, and leads to **gate leakage** in modern transistors.
*   **STM** is a prime example of exploiting tunneling for imaging and manipulation.

---

This module provides a foundational understanding of how quantum mechanics, particularly tunneling, enables and challenges the development of nanoelectronic devices. The ability to solve the Schrödinger equation for various potentials and to predict tunneling behavior is essential for designing next-generation electronics.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
