---
title: "Band structure - 1-D examples- General result with basis- 2-D example"
subject: "NANOELECTRONICS"
module: "Module 3: Quantum Transport"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780feeda"
status: "completed"
scrapedAt: "2026-05-23T18:02:01.122Z"
---
# NANOELECTRONICS: Module 3: Quantum Transport

## Topic: Band Structure - 1-D Examples, General Result with Basis, 2-D Example

### Learning Outcomes Addressed:

*   **CO3:** Outline the Nano scale quantum transport in Nano electronic devices from atom to transistor (Knowledge Level: K2)
*   **CO4:** Apply quantum mechanics in materials and quantum devices (Knowledge Level: K3)

### Key Concepts and Definitions:

*   **Band Structure:** The range of energy levels that electrons can occupy within a crystalline material. In solids, individual atomic energy levels broaden into bands due to the interaction between neighboring atoms.
*   **Energy Bands:** Regions of allowed energy for electrons in a solid.
*   **Band Gap ($E_g$):** The forbidden energy region between the valence band and the conduction band. Electrons cannot exist within the band gap.
*   **Valence Band:** The highest energy band that is typically filled with electrons at absolute zero temperature.
*   **Conduction Band:** The lowest energy band that is typically empty of electrons at absolute zero temperature.
*   **Quantum Transport:** The study of electron motion in nanoscale devices, where quantum mechanical effects become significant and classical transport models are insufficient.
*   **Bloch's Theorem:** States that the wave function of an electron in a periodic potential (like a crystal lattice) can be written as a product of a plane wave and a periodic function with the same periodicity as the lattice. This leads to the concept of energy bands.
*   **Reciprocal Lattice:** A mathematical construct used in solid-state physics to describe the periodicity of crystal structures in momentum space.
*   **k-space:** Momentum space, where the wavevector 'k' represents the momentum of an electron.
*   **Brillouin Zone:** The Wigner-Seitz primitive cell in the reciprocal lattice. It represents the fundamental unit of reciprocal space.
*   **Effective Mass ($m^*$):** A parameter that describes how electrons respond to forces in a crystal lattice. It is related to the curvature of the energy-momentum (E-k) relation. $1/m^* = (1/\hbar^2) \frac{d^2E}{dk^2}$.
*   **Density of States (DOS):** The number of available electron states per unit energy interval per unit volume.
*   **Basis:** The set of atoms or molecules that repeat periodically to form a crystal structure.
*   **Primitive Cell:** The smallest unit cell that, when translated by integer multiples of its lattice vectors, fills all of space.

### Importance of Band Structure in Nanoelectronics:

Understanding band structure is fundamental to controlling electron flow in nanoscale devices. It dictates:

*   **Electrical Conductivity:** Whether a material is a conductor, semiconductor, or insulator.
*   **Optical Properties:** How materials interact with light (absorption, emission).
*   **Device Functionality:** The behavior of transistors, diodes, and other electronic components.
*   **Quantum Phenomena:** Tunneling, quantum confinement, and ballistic transport are all influenced by band structure.

---

### 1-D Examples of Band Structure

Consider a simplified one-dimensional periodic potential, which can represent atoms arranged in a line.

#### a) Free Electron Model (No Potential):

*   **Description:** Electrons are treated as free particles in space.
*   **Energy-Momentum Relation:** $E = \frac{\hbar^2 k^2}{2m_0}$, where $m_0$ is the free electron mass.
*   **Band Structure:** A continuous parabolic curve in E-k space. No bands or band gaps.
*   **Relevance:** A starting point, but not realistic for solids.

#### b) Kronig-Penney Model (Periodic Potential Wells):

*   **Description:** A one-dimensional chain of identical potential wells separated by potential barriers. This model is a classic example used to derive band structure.
*   **Setup:** A series of rectangular potential wells of width 'a' and depth $V_0$, separated by potential barriers of width 'b' and height $V_0$. The potential has a period $P = a+b$.
*   **Mathematical Formulation:** Solving the time-independent Schrödinger equation for this periodic potential leads to allowed and forbidden energy regions.
*   **Resulting Band Structure:** The Kronig-Penney model yields energy bands separated by forbidden energy gaps.
    *   **Allowed Bands:** Regions of energy where electrons can propagate through the crystal.
    *   **Forbidden Bands (Band Gaps):** Regions of energy where electrons cannot exist within the crystal.
*   **Key Equation:** The transcendental equation derived from the Kronig-Penney model that determines the allowed energy levels involves the energy, potential parameters, and the wavevector 'k'. It exhibits oscillatory behavior, creating the bands and gaps.
*   **Influence of Parameters:**
    *   **Strength of Potential Barriers:** Higher barriers lead to wider band gaps and narrower energy bands.
    *   **Width of Barriers and Wells:** Affects the energy spacing and band widths.
    *   **Bragg Scattering:** The formation of band gaps can be understood in terms of constructive interference of electron waves scattered by the periodic lattice, similar to Bragg diffraction of X-rays. For an electron wave with wavevector $k$, the condition for constructive interference and reflection (leading to a gap) is $2kd = n\lambda$, where $d$ is the lattice spacing and $\lambda$ is the electron wavelength. In terms of wavevector, this corresponds to $k = n\pi/d$.

#### c) Tight-Binding Model (Approximation for Atomic Orbitals):

*   **Description:** This model considers electrons localized around individual atoms and then accounts for their interaction and delocalization as atoms are brought together to form a crystal.
*   **Basis:** Starts with atomic orbitals (e.g., s, p orbitals).
*   **Band Formation:** As atoms approach, the atomic energy levels broaden into bands due to the overlap of wavefunctions between adjacent atoms. The wider the overlap, the broader the band.
*   **Energy-Momentum Relation:** The resulting E-k relation is often more complex than the parabolic free-electron or Kronig-Penney bands, reflecting the nature of the atomic orbitals.
*   **Applications:** Useful for understanding the band structure of semiconductors and insulators, where valence electrons are tightly bound to atoms.
*   **Reference:** **Fundamentals of Modern VLSI Devices (Taur & Ning)** discusses tight-binding as a method for calculating band structure. **Quantum Transport Atom to Transistor (Datta)** extensively uses tight-binding for simulating transport in nanostructures.

---

### General Result with Basis

The band structure of any periodic crystal can be generally described using Bloch's theorem, where the wave function $\psi(\mathbf{r})$ is of the form:

$\psi_{n\mathbf{k}}(\mathbf{r}) = u_{n\mathbf{k}}(\mathbf{r}) e^{i\mathbf{k} \cdot \mathbf{r}}$

where:
*   $u_{n\mathbf{k}}(\mathbf{r})$ is a periodic function with the same periodicity as the crystal lattice.
*   $n$ is the band index (e.g., valence band, conduction band).
*   $\mathbf{k}$ is the wavevector, representing the crystal momentum.

**The Basis and Band Structure:**

The nature of the basis (the arrangement of atoms or molecules within the primitive cell) significantly influences the band structure.

*   **Single Atom Basis (e.g., simple cubic lattice of identical atoms):** Leads to simpler band structures. The band width and gap are determined by the overlap of atomic orbitals.
*   **Multiple Atom Basis (e.g., diamond structure like Silicon):** The primitive cell contains multiple atoms. The interaction between atomic orbitals from *different* atoms within the unit cell leads to the splitting of energy levels and the formation of more complex band structures, including indirect band gaps.

**Example: Diamond Structure (Silicon)**

*   **Basis:** Two atoms per primitive cell (one at $(0,0,0)$ and another at $(a/4, a/4, a/4)$ for the FCC lattice).
*   **Result:** The interaction between these two atoms results in the splitting of energy levels. For example, the valence band maximum and conduction band minimum are not at the same k-point in the Brillouin zone, leading to an *indirect band gap*. This has significant implications for optical properties, as light emission/absorption often requires phonon assistance to conserve momentum.

**Reference:** **Fundamentals of Nanoelectronics (Hanson)** explains how the basis affects band structure and properties.

---

### 2-D Example of Band Structure

Extending the concepts from 1-D to 2-D involves considering a periodic potential in two dimensions. This is relevant for understanding the electronic properties of 2D materials and layered structures.

#### a) Square Lattice of Potential Wells:

*   **Description:** Consider a 2D grid of identical potential wells, representing atoms arranged in a square lattice.
*   **Wavefunction:** The wave function will depend on two wavevectors, $k_x$ and $k_y$.
*   **Energy-Momentum Relation:** $E(k_x, k_y)$ will describe surfaces in 3D space (E vs. $k_x$ and $k_y$).
*   **Band Structure:** The allowed energies will form bands, and band gaps will exist. The shape of the energy surfaces will depend on the 2D lattice structure and the potential.
*   **Brillouin Zone:** For a square lattice, the first Brillouin zone is a square.

#### b) 2D Materials (e.g., Graphene):

*   **Description:** Graphene is a single layer of carbon atoms arranged in a hexagonal lattice. Its band structure is one of the most striking examples in 2D nanotechnology.
*   **Basis:** Two carbon atoms per primitive cell in the hexagonal lattice.
*   **Key Features of Graphene Band Structure:**
    *   **Linear Dispersion Relation:** Near the Dirac points (specific k-vectors at the corners of the hexagonal Brillouin zone), the energy is linearly proportional to the wavevector: $E \propto |\mathbf{k}|$. This is unlike the parabolic dispersion in most semiconductors.
    *   **Dirac Cones:** The linear dispersion creates "cones" in the E-k diagram at the Dirac points.
    *   **Zero Band Gap:** Graphene is a zero-gap semiconductor or a semi-metal. The conduction and valence bands touch at the Dirac points.
    *   **High Electron Mobility:** The linear dispersion and the nature of the electronic states lead to exceptionally high electron mobility.
*   **Relevance:** Graphene's unique band structure makes it a promising material for high-speed electronics, flexible electronics, and optoelectronics.

#### c) Quantum Wells in 2D:

*   **Description:** Confining electrons in a 2D plane (e.g., in a semiconductor heterostructure like GaAs/AlGaAs) leads to quantum confinement in the direction perpendicular to the plane.
*   **Band Structure:** The continuous bands in the 2D plane are discretized into subbands due to the confinement. The energy levels become quantized, dependent on the quantum number associated with the confined motion.
*   **Applications:** Quantum well devices, quantum cascade lasers, high-electron-mobility transistors (HEMTs).

**Reference:** **Fundamentals of Nanoelectronics (Hanson)** discusses 2D band structures and materials like graphene. **Quantum Transport Atom to Transistor (Datta)** also provides insights into modeling transport in 2D nanostructures.

---

### Connecting Band Structure to Quantum Transport

*   **Effective Mass:** The curvature of the E-k bands determines the effective mass of charge carriers. A smaller effective mass (sharper curvature) implies that electrons respond more readily to electric fields, leading to higher mobility. This is crucial for high-speed transistors.
*   **Density of States (DOS):** The DOS is directly related to the band structure. Regions with a high density of states have more available energy levels for electrons. The DOS profile influences carrier concentration and transport properties.
*   **Tunneling:** Electrons can tunnel through potential barriers (or band gaps) if their energy lies within the forbidden region. The probability of tunneling depends on the width and height of the barrier and the band structure in that region.
*   **Ballistic Transport:** In very short nanodevices, electrons can travel from one contact to another without scattering. The transport is then governed by the transmission probability, which is determined by the band structure of the device channel.

---

### Practice Questions:

1.  **Question:** In the Kronig-Penney model, how does increasing the height of the potential barriers affect the band gap?
    **Answer:** Increasing the height of the potential barriers leads to wider band gaps. This is because stronger barriers reflect electron waves more effectively, creating larger forbidden energy regions. (CO3, K2)

2.  **Question:** Explain the significance of the linear dispersion relation found in graphene near the Dirac points. How does it differ from the parabolic dispersion in conventional semiconductors?
    **Answer:** The linear dispersion relation in graphene ($E \propto |\mathbf{k}|$) means that electrons behave like massless relativistic particles (Dirac fermions). This leads to unique properties like extremely high mobility and zero band gap. Conventional semiconductors have parabolic dispersion ($E \propto k^2$), where electrons have a finite effective mass. (CO3, CO4, K3)

3.  **Question:** What is the role of the "basis" in determining the band structure of a crystal, using the example of Silicon (diamond structure)?
    **Answer:** The basis defines the arrangement of atoms within the primitive cell. In Silicon, the presence of two atoms in the primitive cell leads to the splitting of energy levels and the formation of an indirect band gap. This is a direct consequence of the interaction between atomic orbitals from different atoms in the basis. (CO3, K2)

4.  **Question:** How is the effective mass of an electron related to the band structure? Why is it important in nanoelectronic devices?
    **Answer:** The effective mass ($m^*$) is related to the curvature of the energy-momentum (E-k) band by $1/m^* = (1/\hbar^2) \frac{d^2E}{dk^2}$. A smaller effective mass (sharper curvature) means electrons respond more easily to electric fields, resulting in higher mobility, which is critical for high-speed device operation. (CO4, K3)

5.  **Question:** Sketch the band structure (E-k diagram) for a semiconductor and an insulator. What is the key difference?
    **Answer:**
    *   **Semiconductor:** A small band gap between the valence band and the conduction band. At absolute zero, the valence band is full and the conduction band is empty. At finite temperatures, some electrons can be excited to the conduction band.
    *   **Insulator:** A large band gap between the valence band and the conduction band. A very large amount of energy is required to excite electrons to the conduction band, making them poor conductors.
    The key difference is the size of the band gap ($E_g$). (CO3, K2)

---

### Important Points to Remember:

*   Band structure is a direct consequence of the periodic potential in crystalline materials, as described by Bloch's Theorem.
*   The formation of energy bands and band gaps is crucial for classifying materials as conductors, semiconductors, or insulators.
*   The Kronig-Penney model is a foundational 1-D example that illustrates band formation through periodic potential barriers.
*   The basis of the crystal lattice significantly influences the complexity and specific features of the band structure (e.g., indirect vs. direct band gaps).
*   In 2D materials like graphene, the band structure can exhibit unique features like linear dispersion and zero band gap, leading to novel electronic properties.
*   The effective mass, derived from the band structure's curvature, is a critical parameter for understanding carrier transport and device speed.
*   Quantum transport phenomena like tunneling and ballistic transport are directly influenced by the band structure.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### References Incorporated:

*   **Fundamentals of Modern VLSI Devices (Taur & Ning):** Provides foundational understanding of semiconductor physics and device operation, relevant to band structure's role.
*   **Nanoelectronics and Nanosystems (Goser, GlÖsekötter, Dienstuhl):** Offers a broad overview of nanoelectronic devices, often touching upon the impact of quantum effects and band structure.
*   **Fundamentals of nano electronics (Hanson):** Excellent resource for 1D, 2D, and 3D band structures, and the impact of dimensionality on electronic properties. Explicitly discusses graphene.
*   **Quantum Transport Atom to Transistor (Datta):** A core text for quantum transport, detailing how band structures are used in simulations and theoretical models. Tight-binding methods are central.
*   **Introduction to Quantum Mechanics (Griffiths):** Provides the fundamental quantum mechanical principles necessary to understand wave functions, Schrödinger's equation, and their application to periodic potentials.

---