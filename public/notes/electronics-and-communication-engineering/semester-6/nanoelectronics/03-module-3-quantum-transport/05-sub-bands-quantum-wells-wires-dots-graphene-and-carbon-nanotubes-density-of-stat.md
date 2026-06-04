---
title: "Sub bands - Quantum wells, wires, dots, graphene and “carbon nanotubes” -- Density of states-Minimum resistance of a wire"
subject: "NANOELECTRONICS"
module: "Module 3: Quantum Transport"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780feedb"
status: "completed"
scrapedAt: "2026-05-23T18:02:02.007Z"
---
# NANOELECTRONICS - Module 3: Quantum Transport

## Topic: Sub-bands, Quantum Wells, Wires, Dots, Graphene, Carbon Nanotubes, Density of States, Minimum Resistance of a Wire

---

### Module Overview:

This module delves into the fascinating realm of quantum transport, exploring how quantum mechanical effects become dominant in nanoscale electronic devices. We will investigate how confinement of electrons in reduced dimensions leads to quantized energy levels (sub-bands) and how this influences the material's electronic properties. We will also analyze the density of states and its implications for device performance, culminating in an understanding of the fundamental limits of conductivity in nanoscale conductors.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **LO1:** Explain the concept of sub-bands in quantum confined structures.
*   **LO2:** Describe the formation and properties of quantum wells, quantum wires, and quantum dots.
*   **LO3:** Discuss the electronic properties of graphene and carbon nanotubes in the context of quantum transport.
*   **LO4:** Define and calculate the density of states for various dimensionalities.
*   **LO5:** Understand the concept of minimum resistance in a nanoscale wire.

---

### Course Outcomes Alignment:

*   **CO1 (K2):** This topic directly supports understanding the challenges of scaling, as quantum effects arise when device dimensions become comparable to electron wavelengths.
*   **CO2 (K3):** The understanding of quantum confinement is crucial for designing novel transistor devices that exploit these effects to overcome short-channel effects and improve performance.
*   **CO3 (K2):** We will outline the nanoscale quantum transport from the fundamental principles of confinement to device behavior.
*   **CO4 (K3):** This topic requires applying quantum mechanics to materials (graphene, CNTs) and quantum devices (wells, wires, dots).

---

### 1. Sub-bands and Quantum Confinement

#### 1.1 Introduction to Quantum Confinement

*   **Key Concept:** When the physical dimensions of a material are reduced to a scale comparable to the de Broglie wavelength of the charge carriers (electrons or holes), their motion becomes restricted in one or more directions. This restriction leads to the quantization of energy levels, forming discrete energy bands known as **sub-bands**.
*   **De Broglie Wavelength ($\lambda_d$):** $\lambda_d = h/p$, where $h$ is Planck's constant and $p$ is the momentum. For electrons in semiconductors at room temperature, $\lambda_d$ is typically in the range of 10-50 nm.
*   **Comparison:** In bulk materials (3D), electrons have continuous energy bands. In confined structures, the energy spectrum becomes discrete due to the boundary conditions imposed by the confinement.

#### 1.2 Quantum Wells (1D Confinement)

*   **Definition:** A quantum well is a structure where charge carriers are confined in one direction (e.g., the z-direction) but are free to move in the other two directions (x and y).
*   **Formation:** Typically formed by a thin layer of a semiconductor material sandwiched between two layers of a material with a larger bandgap.
*   **Energy Levels:** The energy of the charge carriers in the confined direction is quantized. The energy spectrum is a combination of continuous bands in the unconfined directions and discrete sub-bands in the confined direction.
    *   For a particle in a 1D box of length $L_z$, the energy levels are given by:
        $E_n = \frac{n^2 h^2}{8m^* L_z^2}$, where $n = 1, 2, 3, ...$ is the quantum number, $h$ is Planck's constant, and $m^*$ is the effective mass of the charge carrier.
*   **Density of States (DOS):** The DOS in a quantum well shows a stair-step-like behavior. For each sub-band, there's a constant DOS, and then it jumps at the energy of the next sub-band.

    *   **Textbook Reference:** Taur & Ning, Chapter 10 (Quantum Effects in MOSFETs); Datta, Chapter 3 (Quantum Mechanics of Particles in Potential); Hanson, Chapter 4 (Quantum Confinement in Nanostructures).

*   **Example:** Metal-Oxide-Semiconductor Field-Effect Transistors (MOSFETs) with very thin gate oxides and inversion layers exhibit quantum well behavior. The inversion layer acts as a quantum well for electrons.

#### 1.3 Quantum Wires (2D Confinement)

*   **Definition:** A quantum wire is a structure where charge carriers are confined in two directions (e.g., y and z) but are free to move in one direction (x).
*   **Formation:** Can be fabricated using advanced lithography techniques or by self-assembly. Examples include nanowires.
*   **Energy Levels:** The energy spectrum is quantized in two directions. The energy is given by:
    $E_{n_y, n_z} = \frac{n_y^2 h^2}{8m^* L_y^2} + \frac{n_z^2 h^2}{8m^* L_z^2} + \frac{\hbar^2 k_x^2}{2m^*}$, where $n_y, n_z$ are quantum numbers for the confined directions and $k_x$ is the wavevector in the unconfined direction.
*   **Density of States (DOS):** The DOS in a quantum wire is inversely proportional to the square root of energy: $DOS(E) \propto (E - E_0)^{-1/2}$. This leads to singularities at the onset of each sub-band.

    *   **Textbook Reference:** Hanson, Chapter 4 (Quantum Confinement in Nanostructures); Goser et al., Chapter 9 (Quantum Transport and Nanodevices).

*   **Example:** Silicon nanowires used in future transistors.

#### 1.4 Quantum Dots (3D Confinement)

*   **Definition:** A quantum dot is a nanostructure where charge carriers are confined in all three dimensions.
*   **Formation:** Can be fabricated using lithography or through self-assembly processes (e.g., colloidal quantum dots, epitaxial growth).
*   **Energy Levels:** The energy spectrum is fully quantized, resembling the energy levels of an artificial atom. The energy levels are discrete and depend on the size and shape of the dot.
    $E_{n_x, n_y, n_z} = \frac{n_x^2 h^2}{8m^* L_x^2} + \frac{n_y^2 h^2}{8m^* L_y^2} + \frac{n_z^2 h^2}{8m^* L_z^2}$.
*   **Density of States (DOS):** The DOS in a quantum dot consists of discrete delta functions at each energy level.

    *   **Textbook Reference:** Hanson, Chapter 4 (Quantum Confinement in Nanostructures); Goser et al., Chapter 9 (Quantum Transport and Nanodevices).

*   **Example:** Quantum dot LEDs (QLEDs) used in displays, quantum dots for bio-imaging.

---

### 2. Graphene and Carbon Nanotubes (CNTs)

#### 2.1 Graphene

*   **Definition:** Graphene is a single layer of carbon atoms arranged in a hexagonal lattice. It is a 2D material with unique electronic properties.
*   **Electronic Structure:**
    *   **Dirac Cones:** The conduction and valence bands meet at six points in the Brillouin zone called Dirac points. Near these points, the electrons behave as massless Dirac fermions.
    *   **Linear Dispersion:** The energy-momentum relation near the Dirac points is linear: $E = \pm \hbar v_F |k|$, where $v_F$ is the Fermi velocity (approximately $10^6$ m/s).
*   **Density of States (DOS):**
    *   The DOS of graphene is zero at the Dirac points and increases linearly with energy: $DOS(E) \propto |E|$.
*   **Quantum Phenomena:**
    *   **Quantum Hall Effect:** Graphene exhibits an anomalous quantum Hall effect at room temperature.
    *   **Ballistic Transport:** Due to its unique electronic structure and low scattering, graphene can exhibit ballistic transport over relatively long distances.
*   **Applications:** High-speed transistors, transparent conductive films, sensors.

    *   **Textbook Reference:** Hanson, Chapter 7 (Graphene); Goser et al., Chapter 11 (Future Nanoelectronic Devices); Datta, Chapter 7 (Quantum Transport in Graphene).

#### 2.2 Carbon Nanotubes (CNTs)

*   **Definition:** Carbon nanotubes are cylindrical molecules made of rolled-up sheets of graphene. They can be metallic or semiconducting depending on their chirality (the way the graphene sheet is rolled).
*   **Electronic Structure:**
    *   **Chirality:** Described by the chiral vector $(n, m)$. If $n-m$ is a multiple of 3, the CNT is metallic or semi-metallic. Otherwise, it's semiconducting.
    *   **Band Gap:** Semiconducting CNTs have a band gap inversely proportional to their diameter ($E_g \propto 1/d$).
*   **Quantum Phenomena:**
    *   **Ballistic Transport:** CNTs are excellent conductors and can exhibit ballistic transport due to their 1D structure and minimal scattering.
*   **Applications:** Field-effect transistors (FETs), interconnects, sensors, composite materials.

    *   **Textbook Reference:** Hanson, Chapter 6 (Carbon Nanotubes); Goser et al., Chapter 11 (Future Nanoelectronic Devices).

---

### 3. Density of States (DOS)

#### 3.1 Definition and Significance

*   **Key Concept:** The **density of states**, denoted by $g(E)$ or $DOS(E)$, represents the number of available electronic states per unit energy per unit volume. It tells us how many energy states are available for electrons to occupy at a given energy level.
*   **Significance:** The DOS is a fundamental property of a material that influences its electrical conductivity, optical properties, and thermal properties. In nanoscale devices, the dimensionality of confinement significantly alters the DOS.

#### 3.2 DOS for Different Dimensionalities

*   **3D (Bulk Materials):**
    *   The DOS is proportional to the square root of energy: $g_{3D}(E) \propto \sqrt{E}$.
    *   **Formula:** $g_{3D}(E) = \frac{1}{2\pi^2} (\frac{2m^*}{\hbar^2})^{3/2} \sqrt{E}$ (for parabolic bands).

*   **2D (Quantum Wells):**
    *   The DOS is constant for each sub-band and shows step-like increases at the sub-band edge.
    *   **Formula:** $g_{2D}(E) = \sum_{n} \frac{m^*}{\pi \hbar^2 L_z}$ for $E \ge E_n$, where $E_n$ is the energy of the n-th sub-band.

*   **1D (Quantum Wires):**
    *   The DOS diverges as the inverse square root of energy at the sub-band edges: $g_{1D}(E) \propto \frac{1}{\sqrt{E-E_0}}$.
    *   **Formula:** $g_{1D}(E) = \sum_{n_y, n_z} \frac{1}{2\pi} (\frac{2m^*}{\hbar^2})^{1/2} \frac{1}{\sqrt{E - E_{n_y, n_z}}}$ for $E \ge E_{n_y, n_z}$.

*   **0D (Quantum Dots):**
    *   The DOS consists of discrete delta functions at each energy level: $g_{0D}(E) = \sum_i \delta(E - E_i)$.

    *   **Textbook Reference:** Datta, Chapter 2 (Quantum Mechanics of Particles in Potential); Hanson, Chapter 3 (Density of States and Electron-Gas Models).

---

### 4. Minimum Resistance of a Wire

#### 4.1 Quantum Limit of Resistance

*   **Key Concept:** In nanoscale conductors, the resistance can be limited by fundamental quantum mechanical principles rather than classical scattering.
*   **Landauer Formula:** The conductance of a quantum conductor can be related to the number of conducting channels ($N$) and the transmission probability ($T_i$) through each channel:
    $G = \frac{2e^2}{h} \sum_{i=1}^{N} T_i$
    Where $e$ is the elementary charge and $h$ is Planck's constant. The term $\frac{2e^2}{h}$ is the quantum of conductance, approximately $77.5 \ \mu S$.
*   **Minimum Resistance:**
    *   If a wire is sufficiently short and wide such that it can support multiple conducting channels with near-perfect transmission ($T_i \approx 1$), the resistance will be limited by the quantum of conductance.
    *   In the ballistic regime (no scattering), for a wire with $N$ conducting channels, the conductance is $G = N \frac{2e^2}{h}$.
    *   The minimum resistance $R_{min}$ is the inverse of the maximum possible conductance. If we consider a single channel ($N=1$) with perfect transmission ($T=1$), the minimum resistance is:
        $R_{min} = \frac{1}{G_{max}} = \frac{h}{2e^2} \approx 12.9 \ k\Omega$.
    *   For a wire with multiple channels, the resistance will be $R = \frac{1}{N} \frac{h}{2e^2}$. The minimum resistance occurs for the maximum number of available channels that can carry current efficiently.
*   **Role of Dimensions:** As the wire becomes narrower, the number of conducting channels ($N$) decreases, leading to a higher resistance.

    *   **Textbook Reference:** Datta, Chapter 4 (Scattering and Transport); Lundstrom, Chapter 8 (Conductance Quantization); Hanson, Chapter 2 (Quantum Mechanics of Carriers).

*   **Example:** A very short metallic CNT can exhibit near-ballistic transport with resistance close to the quantum limit.

---

### Key Points to Remember:

*   **Quantum Confinement:** Reduces dimensionality, leading to quantized energy levels (sub-bands).
*   **DOS Behavior:** Changes drastically with dimensionality: 3D ($\sqrt{E}$), 2D (step-like), 1D ($1/\sqrt{E}$), 0D (delta functions).
*   **Graphene:** Unique electronic structure with massless Dirac fermions and linear dispersion.
*   **CNTs:** Metallic or semiconducting depending on chirality; exhibit ballistic transport.
*   **Minimum Resistance:** Determined by the quantum of conductance ($\frac{2e^2}{h}$) and the number of conducting channels.

---

### Practice Questions:

1.  **Question:** Explain why quantum confinement occurs in nanoscale devices and what are its consequences for the energy levels of charge carriers?
    **Answer:** Quantum confinement occurs when the physical dimensions of a material are comparable to the de Broglie wavelength of the charge carriers. This restricts their motion in one or more directions, leading to the quantization of their energy levels into discrete sub-bands. This contrasts with bulk materials where energy bands are continuous.

2.  **Question:** How does the density of states (DOS) of a quantum wire differ from that of a bulk semiconductor? What is the mathematical form of the DOS for a quantum wire?
    **Answer:** The DOS of a quantum wire diverges as the inverse square root of energy at the edge of each sub-band ($DOS(E) \propto (E - E_0)^{-1/2}$). This is different from a bulk semiconductor where the DOS is proportional to the square root of energy ($DOS(E) \propto \sqrt{E}$).

3.  **Question:** What determines whether a carbon nanotube is metallic or semiconducting?
    **Answer:** The chirality of the carbon nanotube, represented by the chiral vector $(n, m)$, determines its electronic properties. If $n-m$ is a multiple of 3, the CNT is metallic or semi-metallic. Otherwise, it is semiconducting.

4.  **Question:** Calculate the minimum resistance of a nanoscale wire that can support two independent conducting channels with perfect transmission.
    **Answer:** The conductance of a wire with $N$ channels and perfect transmission is $G = N \frac{2e^2}{h}$. For $N=2$, $G = 2 \times \frac{2e^2}{h}$. The minimum resistance is $R_{min} = \frac{1}{G} = \frac{h}{4e^2}$.
    Using $h = 6.626 \times 10^{-34} \ J\cdot s$ and $e = 1.602 \times 10^{-19} \ C$,
    $R_{min} = \frac{6.626 \times 10^{-34}}{4 \times (1.602 \times 10^{-19})^2} \approx \frac{6.626 \times 10^{-34}}{4 \times 2.566 \times 10^{-38}} \approx \frac{6.626 \times 10^{-34}}{1.026 \times 10^{-37}} \approx 6.45 \times 10^{-3} \ \Omega = 6.45 \ m\Omega$.

5.  **Question:** Briefly describe the concept of a quantum dot and how its electronic properties differ from a quantum well.
    **Answer:** A quantum dot is a nanostructure where charge carriers are confined in all three dimensions, leading to fully quantized energy levels, similar to an artificial atom. This contrasts with a quantum well, where confinement is in only one dimension, resulting in quantized sub-bands in that direction and continuous bands in the other two.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### Further Reading and Exercises:

*   **Taur & Ning:** Chapter 10 provides details on quantum effects in MOSFETs, including inversion layer quantization.
*   **Datta:** Chapter 2 on quantum mechanics and Chapter 4 on scattering and transport are highly relevant. Work through the examples of DOS calculations.
*   **Hanson:** Chapters 3, 4, 6, and 7 offer in-depth discussions on DOS, quantum confinement, CNTs, and graphene.
*   **Lundstrom:** Chapter 8 covers conductance quantization and the Landauer formula.

**Exercise:**
Derive the expression for the density of states in a 2D system (quantum well) for a parabolic band. Show how it leads to a constant DOS per sub-band.

---