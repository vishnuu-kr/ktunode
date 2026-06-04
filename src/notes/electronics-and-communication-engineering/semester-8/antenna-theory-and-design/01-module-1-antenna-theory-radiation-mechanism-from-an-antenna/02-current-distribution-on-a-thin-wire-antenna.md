---
title: "Current Distribution on a Thin Wire Antenna"
subject: "ANTENNA THEORY AND DESIGN"
module: "Module 1: Antenna theory: Radiation mechanism from an antenna"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c463b09ce205780ff7c4"
status: "completed"
scrapedAt: "2026-05-23T18:11:32.037Z"
---
# ANTENNA THEORY AND DESIGN
## Module 1: Antenna Theory: Radiation Mechanism from an Antenna
### Topic: Current Distribution on a Thin Wire Antenna

---

### **1. Introduction to Thin Wire Antennas and Current Distribution**

**1.1 What is a Thin Wire Antenna?**
*   A fundamental antenna structure consisting of a straight, cylindrical conductor where the length ($L$) is significantly greater than the diameter ($D$).
*   The term "thin" implies that the diameter is much smaller than the wavelength ($\lambda$) of the operating frequency, allowing for simplifications in analysis.
*   Examples include dipoles, monopoles, and linear antennas.

**1.2 Significance of Current Distribution**
*   The **current distribution** along the antenna conductor is the primary driver of electromagnetic radiation.
*   It dictates the **radiation pattern**, **impedance**, **efficiency**, and **gain** of the antenna.
*   Understanding the current distribution is crucial for analyzing how an antenna radiates.

**1.3 Course Outcome Alignment**
*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3)**
    *   This topic directly addresses CO1 by explaining how the flow of current along a wire leads to the generation of electromagnetic waves.

---

### **2. Fundamental Concepts of Current Distribution**

**2.1 The Lorentz Force and Current**
*   Electromagnetic radiation is fundamentally linked to the acceleration of charges.
*   In a conductor, the flow of electrons constitutes an electric current.
*   When this current is not uniform or is varying sinusoidally along the length, it leads to the radiation of electromagnetic waves.

**2.2 Sinusoidal Current Distribution (Ideal Case)**
*   For many thin wire antennas, especially dipoles, the current distribution can be approximated as sinusoidal.
*   **Maximum current ($I_0$)** occurs at the feed point (e.g., center of a dipole).
*   **Zero current** occurs at the ends of the antenna.
*   This sinusoidal nature is a consequence of the boundary conditions at the ends of the conductor and the wave nature of the current.

**2.3 Current Element (Hertzian Dipole) - A Simplification**
*   The simplest radiating element is the **Hertzian dipole**, a hypothetical short current element of length $dl$ carrying a uniform current $I$.
*   While not a practical antenna, it serves as a building block for understanding radiation.
*   The current distribution is assumed to be uniform ($I(z) = I$) over its short length.
*   **Key Point:** The Hertzian dipole is an approximation used to derive fundamental radiation equations. In reality, the current is never truly uniform unless the antenna is infinitesimally short.

**2.4 Thin Wire Approximation and Assumptions**
*   When analyzing thin wire antennas, several assumptions are made:
    *   **Diameter is negligible compared to length and wavelength:** $D \ll L$ and $D \ll \lambda$. This simplifies the electromagnetic field calculations.
    *   **Surface current:** The current is assumed to flow only on the surface of the conductor.
    *   **Axial current:** The current is primarily axial (along the length of the wire) and tangential to the surface.
    *   **Uniform axial current density:** Across the thin wire's cross-section, the axial current density is considered uniform.
*   **Reference:** Balanis (4th ed.), Chapter 2, discusses these approximations in detail when deriving the radiation from dipoles.

---

### **3. Types of Current Distribution on Thin Wire Antennas**

**3.1 Current Distribution on a Dipole Antenna**
*   **Infinitely Long Dipole:** The current distribution is purely exponential, decaying from the feed point without any reflection.
    *   $I(z) = I_0 e^{-j\beta z}$, where $\beta$ is the phase constant.
    *   This is a theoretical construct to simplify analysis.
*   **Finite Length Dipole:** The current distribution is a **standing wave**, with a sinusoidal variation.
    *   **Current maximum** occurs at the feed point (center for a center-fed dipole).
    *   **Current minima** (nodes) occur at the ends of the antenna.
    *   The exact sinusoidal form depends on the length of the dipole relative to the wavelength.

    *   **For a center-fed dipole of length $L$:**
        *   The current distribution is given by:
            $I(z) = I_0 \cos(\beta z)$ for $|z| \leq L/2$.
        *   Here, $z$ is the position along the dipole from the center, and $\beta = 2\pi/\lambda$.
        *   **Half-wave dipole ($L = \lambda/2$):** The current distribution is a half-sine wave. The current is maximum at the center ($z=0$) and zero at the ends ($z=\pm L/2$).
            $I(z) = I_0 \cos(\frac{\pi z}{L})$ for $|z| \leq L/2$.
        *   **Full-wave dipole ($L = \lambda$):** The current distribution has two loops and nodes at the ends and at the center.
            $I(z) = I_0 \cos(\frac{2\pi z}{L})$ for $|z| \leq L/2$.
        *   **Resonant Dipole:** A dipole is resonant when its length is approximately half a wavelength ($\lambda/2$) or multiples of it, leading to a standing wave with a null at the ends. This resonance minimizes the reflected power and maximizes radiation.

*   **Reference:**
    *   Balanis (4th ed.), Chapter 6, "Linear Dipole Antennas," provides detailed analysis of current distribution on finite length dipoles.
    *   Collin (2nd ed.), Chapter 3, "Radiation from Line Sources," also covers current distributions.

**3.2 Current Distribution on a Monopole Antenna**
*   A monopole is essentially half a dipole placed over a ground plane.
*   The current distribution on a monopole is similar to that of a dipole, but mirrored due to the ground plane.
*   **For a quarter-wave monopole ($L = \lambda/4$):**
    *   The current is maximum at the feed point (base) and zero at the top end.
    *   The distribution is typically approximated as a quarter-sine wave.
    *   $I(z) = I_0 \sin(\beta z)$, where $z$ is the distance from the top end and the feed is at the base ($z=L$).
*   **Reference:** Balanis (4th ed.), Chapter 5, "Linear Wire Antennas," discusses monopoles.

**3.3 Effect of Antenna Length and End Conditions**
*   The length of the antenna relative to the wavelength ($L/\lambda$) significantly influences the current distribution.
*   **Electrically short antennas ($L \ll \lambda$):** The current is nearly uniform along the length, but it is out of phase.
*   **Electrically long antennas ($L \gg \lambda$):** The current distribution becomes more complex, with multiple lobes and traveling wave components.
*   **End conditions:** The boundary condition of zero current at the ends of a conductor forces the formation of standing waves.

---

### **4. Mathematical Representation of Current Distribution**

**4.1 Integral Equation Approach (Method of Moments)**
*   For more accurate and complex antenna structures, the current distribution is not simply sinusoidal.
*   The **integral equation method** is used to solve for the unknown current distribution on the antenna surface.
*   The electric field integral equation (EFIE) is a common formulation:
    $$ \int_S \left( j\omega\mu \mathbf{J} + \frac{1}{j\omega\epsilon} \nabla'(\rho') \right) \cdot \mathbf{G}(\mathbf{r}, \mathbf{r}') dS' = \mathbf{E}_{inc} $$
    where $\mathbf{J}$ is the current density, $\mathbf{G}$ is the Green's function (kernel), and $\mathbf{E}_{inc}$ is the incident electric field.
*   This equation is typically solved numerically using techniques like the **Method of Moments (MoM)**.
*   MoM discretizes the antenna into segments and approximates the current on each segment, transforming the integral equation into a matrix equation.
*   **Reference:** Balanis (4th ed.), Chapter 11, "Method of Moments," provides an in-depth explanation.

**4.2 Current Distribution as a Function of Position**
*   The current distribution is a complex function of position ($z$ or $\mathbf{r}$) along the antenna and the operating frequency.
*   It has both magnitude and phase components.
*   $I(z) = |I(z)| e^{j\phi(z)}$

**4.3 Significance of Traveling Waves vs. Standing Waves**
*   **Standing Wave:** Occurs when waves are reflected from the ends of the conductor, interfering with the incident wave. This is typical for resonant antennas like dipoles and monopoles.
    *   Leads to current maxima and minima at fixed points.
    *   Efficient for radiation when the maxima are at the feed and minima are at the ends.
*   **Traveling Wave:** Occurs when there are no reflections or when the antenna is designed to support a traveling wave (e.g., rhombic antennas, long wires).
    *   The current amplitude and phase change continuously along the length.
    *   The radiation pattern is often directional.

---

### **5. Factors Affecting Current Distribution**

*   **Antenna Length ($L$):** As discussed, it dictates whether the distribution is primarily sinusoidal, exponential, or more complex.
*   **Antenna Diameter ($D$):** While we assume "thin," a larger diameter (fatter antenna) can lead to a slightly more uniform current distribution due to reduced end effects and less self-inductance, but it also introduces surface wave modes and changes the antenna's resonant frequency.
*   **Frequency of Operation ($\omega$ or $f$):** Determines the wavelength ($\lambda = c/f$) and hence the electrical length ($L/\lambda$) of the antenna.
*   **Antenna Geometry:** Bends, loops, or complex shapes alter the current path and distribution.
*   **Proximity of Other Conductors:** The ground plane, nearby antennas, or objects can reflect waves and alter the current distribution.
*   **Antenna Loading:** Inductive or capacitive loading can be used to modify the current distribution and electrical length of an antenna.

---

### **6. Examples and Applications**

**6.1 Half-Wave Dipole Antenna**
*   **Current Distribution:** Sinusoidal, with maximum at the center and nulls at the ends.
*   **Application:** Widely used as a reference antenna, in broadcasting, TV reception, and amateur radio.
*   **Reference:** Balanis (4th ed.), Chapter 6.

**6.2 Quarter-Wave Monopole Antenna**
*   **Current Distribution:** Quarter-sinusoidal, with maximum at the base (feed) and null at the top.
*   **Application:** Common in mobile phones, car antennas, and portable radios.
*   **Reference:** Balanis (4th ed.), Chapter 5.

**6.3 Long Wire Antenna**
*   **Current Distribution:** Approximates a traveling wave, decaying exponentially with a phase shift.
*   **Application:** Used for long-distance communication, often unidirectional.
*   **Reference:** Balanis (4th ed.), Chapter 7.

---

### **7. Important Points to Remember**

*   **Current is the source of radiation:** The spatial distribution and magnitude of current along an antenna determine its radiation characteristics.
*   **Sinusoidal distribution is a key approximation for dipoles and monopoles:** This simplification is valid for electrically thin antennas.
*   **Standing waves are formed due to reflections:** End conditions create standing waves with nulls at the antenna extremities.
*   **Antenna length relative to wavelength is critical:** Determines the number of lobes and the nature of the current distribution.
*   **Method of Moments is essential for accurate analysis:** For non-ideal or complex antennas, numerical methods are required.
*   **Understanding current distribution helps in impedance matching and pattern control.**

---

### **8. Practice Questions and Answers**

**Question 1:**
For a center-fed dipole antenna of length $L$, how does the current distribution typically vary along its length?
(a) Uniform
(b) Exponential
(c) Sinusoidal
(d) Gaussian

**Answer 1:**
(c) Sinusoidal. For a center-fed dipole, the current distribution is approximated as sinusoidal, with a maximum at the center and zeros at the ends.

**Question 2:**
What is the primary reason for the sinusoidal current distribution on a finite length dipole antenna?
(a) Uniform excitation of charges.
(b) The presence of a ground plane.
(c) Boundary conditions at the antenna ends forcing current nulls and creating standing waves.
(d) The antenna diameter being much larger than its length.

**Answer 2:**
(c) Boundary conditions at the antenna ends forcing current nulls and creating standing waves. The open ends of the conductor act as points of zero current, leading to standing wave formation when excited.

**Question 3:**
A quarter-wave monopole antenna is mounted vertically on a ground plane. Where is the current maximum expected to be?
(a) At the top end of the monopole.
(b) At the center of the monopole.
(c) At the base of the monopole, connected to the feed line.
(d) Uniformly distributed along the entire length.

**Answer 3:**
(c) At the base of the monopole, connected to the feed line. For a quarter-wave monopole, the current is maximum at the feed point (base) and decreases to zero at the open end.

**Question 4:**
Explain why the Method of Moments is often preferred over analytical methods for determining current distribution on real-world antennas.

**Answer 4:**
Analytical methods are often based on simplified models (like perfectly thin wires or idealized current distributions). Real antennas have finite thickness, complex geometries, and are often affected by their environment. The Method of Moments is a numerical technique that can handle these complexities by discretizing the antenna and solving integral equations, providing a much more accurate representation of the current distribution.

**Question 5:**
Consider a dipole antenna that is electrically very short ($L \ll \lambda$). Describe its current distribution and its implications for radiation.

**Answer 5:**
For an electrically short dipole, the current distribution is nearly uniform along its length, but there is a phase difference between different points. This results in inefficient radiation and a broad, omnidirectional radiation pattern. The impedance is also highly reactive (capacitive for a short dipole), making it difficult to match to a transmission line without loading.

---

### **9. Course Outcome Mapping**

*   **CO1: Analyse the radiation mechanism of antennas (Knowledge Level: K3)**
    *   This topic provides the foundational understanding of how the current distribution on a wire is directly responsible for generating electromagnetic waves, thus fulfilling CO1. The study of sinusoidal and standing wave distributions explains the mechanism of radiation from fundamental antenna structures.

---

This concludes the study notes for "Current Distribution on a Thin Wire Antenna." Remember to refer to the specified textbooks for more detailed derivations and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
