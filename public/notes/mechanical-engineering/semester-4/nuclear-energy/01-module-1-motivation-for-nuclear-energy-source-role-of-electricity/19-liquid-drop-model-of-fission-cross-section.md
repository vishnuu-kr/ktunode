---
title: "liquid drop model of fission cross section"
subject: "NUCLEAR ENERGY"
module: "Module 1: MOTIVATION FOR NUCLEAR ENERGY SOURCE: Role of electricity"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804463044"
status: "completed"
scrapedAt: "2026-05-20T17:55:28.766Z"
---
# NUCLEAR ENERGY: Module 1 - MOTIVATION FOR NUCLEAR ENERGY SOURCE: Role of electricity

## Topic: Liquid Drop Model of Fission Cross Section

---

### 1. Introduction to Nuclear Fission and Cross Section

*   **Nuclear Fission:** The process by which a heavy atomic nucleus, such as uranium or plutonium, splits into two or more lighter nuclei, releasing a significant amount of energy and neutrons. This forms the basis of nuclear power generation.
*   **Neutron Cross Section ($\sigma$):** A measure of the probability that a particular nuclear reaction will occur when a nucleus is bombarded by a neutron. It is often expressed in units of barns (1 barn = $10^{-28} m^2$).
    *   A larger cross section implies a higher probability of interaction.
    *   Cross sections are dependent on the type of nucleus, the energy of the incident neutron, and the specific reaction (e.g., fission, capture, scattering).
*   **Fission Cross Section ($\sigma_f$):** The probability that an incident neutron will cause a fission event in a nucleus. This is a crucial parameter for understanding neutron behavior in a nuclear reactor.

**(Referenced from: Gupta & Gaur, Chapter X - Nuclear Reactions; Vaidyanathan, Chapter 2 - Nuclear Principles)**

---

### 2. The Liquid Drop Model

The Liquid Drop Model, developed by Niels Bohr and John Wheeler, provides a classical analogy to understand the behavior of atomic nuclei and the process of nuclear fission.

*   **Analogy:** The nucleus is treated as a drop of incompressible liquid, where:
    *   **Nucleons (protons and neutrons):** Act like molecules in the liquid.
    *   **Strong Nuclear Force:** Acts like surface tension, holding the nucleus together.
    *   **Coulomb Repulsion (between protons):** Acts like an outward pressure or centrifugal force, tending to break the nucleus apart.

*   **Key Concepts of the Model:**
    *   **Volume Energy:** Proportional to the volume of the nucleus (A), representing the cohesive force due to the strong nuclear force acting between nucleons. This term increases with A.
        *   $E_v = a_v A$
    *   **Surface Energy:** Proportional to the surface area of the nucleus (A$^{2/3}$), representing the nucleons on the surface that have fewer neighboring nucleons to interact with via the strong force. This term reduces the binding energy.
        *   $E_s = -a_s A^{2/3}$
    *   **Coulomb Energy:** Represents the electrostatic repulsion between protons. This term is positive and increases with the number of protons ($Z^2$) and decreases with the nuclear radius ($A^{1/3}$).
        *   $E_c = -a_c \frac{Z^2}{A^{1/3}}$
    *   **Pairing Energy:** Accounts for the additional stability when nucleons are paired (even number of protons and/or neutrons).
        *   $E_p = \pm a_p A^{-1/2}$ (positive for even-even, negative for odd-odd)
    *   **Asymmetry Energy:** Accounts for the tendency of nuclei to have roughly equal numbers of protons and neutrons for stability, penalizing deviations.
        *   $E_{asy} = -a_{asy} \frac{(N-Z)^2}{A}$

*   **Binding Energy Formula (Semi-empirical Mass Formula):** Combining these terms gives an approximate formula for the binding energy of a nucleus:
    $B(A, Z) = a_v A - a_s A^{2/3} - a_c \frac{Z^2}{A^{1/3}} - a_{asy} \frac{(A-2Z)^2}{A} \pm a_p A^{-1/2}$
    (The exact form might vary slightly depending on the constants and approximations used in different texts.)

**(Referenced from: Gupta & Gaur, Chapter II - Nuclear Models; Vaidyanathan, Chapter 3 - Nuclear Mass and Binding Energy)**

---

### 3. Fission Process and the Liquid Drop Model

The liquid drop model is particularly useful for explaining the mechanism of nuclear fission.

*   **Deformation:** When a nucleus absorbs a neutron, it gains additional energy. This energy causes the nucleus to vibrate and deform.
*   **Formation of a Neck:** As the nucleus deforms, a "neck" can form in the middle, similar to a vibrating liquid drop being stretched.
*   **Coulomb Repulsion Dominates:** If the deformation is sufficient, the Coulomb repulsion between the two ends of the deformed nucleus can overcome the surface tension (strong nuclear force) holding it together.
*   **Scission:** The nucleus then splits (scissions) into two smaller fragments, releasing energy.

*   **Energy Release in Fission:** The energy released in fission is primarily due to the difference in binding energy per nucleon between the heavy nucleus and the fission fragments. Fission fragments are typically more tightly bound (have higher binding energy per nucleon) than the original heavy nucleus.
    *   $Q = B(Fission \ Fragments) - B(Heavy \ Nucleus)$

**(Referenced from: Gupta & Gaur, Chapter X - Nuclear Reactions; Glasstone & Sesonske, Chapter 3 - Nuclear Fission)**

---

### 4. Fission Cross Section and Excitation Energy

The probability of fission (fission cross section, $\sigma_f$) is strongly dependent on the energy of the incident neutron, which determines the **excitation energy** imparted to the nucleus.

*   **Excitation Energy ($E^*$):** The energy gained by the nucleus upon absorbing a neutron.
    *   $E^* = S_n + E_n$
        *   $S_n$: Neutron separation energy (the energy required to remove the last neutron from the nucleus). This is a characteristic property of the target nucleus.
        *   $E_n$: Kinetic energy of the incident neutron.

*   **Relationship between Excitation Energy and Fission Probability:**
    *   **Low Excitation Energy (below $S_n$):** If $E^* < S_n$, the nucleus does not have enough energy to emit a neutron. Fission can still occur if the nucleus is very fissile (e.g., $^{235}$U with thermal neutrons), but the probability is generally lower.
    *   **High Excitation Energy (above $S_n$):** If $E^* > S_n$, the nucleus has enough energy to emit a neutron. This leads to two possible outcomes:
        1.  **Neutron Emission:** The nucleus de-excites by emitting one or more neutrons.
        2.  **Fission:** The nucleus de-excites by fissioning into two fragments.

*   **Fission Probability (Competitive Processes):** The fission cross section ($\sigma_f$) is related to the total cross section ($\sigma_{total}$) and the probability of fission occurring given that an interaction has happened.
    *   $\sigma_f = \sigma_{total} \times P_{fission}$
    *   $P_{fission} = \frac{\Gamma_f}{\Gamma_n + \Gamma_f + \Gamma_\gamma}$
        *   $\Gamma_f$: Fission width (related to the probability of fission).
        *   $\Gamma_n$: Neutron emission width (related to the probability of neutron emission).
        *   $\Gamma_\gamma$: Radiative capture width (related to the probability of gamma ray emission).

*   **The Liquid Drop Model's Contribution:** The liquid drop model helps explain how increasing excitation energy leads to increased nuclear deformation, eventually reaching a point where fission becomes more probable than neutron emission or radiative capture. The potential energy barrier for fission is a key concept here.

**(Referenced from: Gupta & Gaur, Chapter X - Nuclear Reactions; Vaidyanathan, Chapter 7 - Neutron Interaction with Matter; Glasstone & Sesonske, Chapter 4 - Nuclear Cross Sections)**

---

### 5. Fission Cross Section as a Function of Neutron Energy

The fission cross section of fissile materials (like $^{235}$U) exhibits characteristic behavior with incident neutron energy.

*   **Thermal Neutrons (low energy, ~0.025 eV):**
    *   Fission cross sections for fissile isotopes like $^{235}$U are very high (hundreds of barns).
    *   The cross section is inversely proportional to neutron velocity ($v$) in this region, following a $1/v$ law for many interactions.
    *   This high cross section makes thermal reactors efficient.

*   **Resonance Region (intermediate energy, eV to keV):**
    *   The fission cross section shows sharp peaks called **resonances**.
    *   These resonances correspond to the formation of highly excited **compound nuclei** with specific energy levels that match the incident neutron energy.
    *   At these resonance energies, the probability of fission is significantly enhanced. The liquid drop model, when combined with quantum mechanical descriptions of nuclear states (e.g., compound nucleus model), helps explain these resonances as specific configurations of the excited nucleus.

*   **Fast Neutron Region (high energy, MeV):**
    *   Above the resonances, the fission cross section generally decreases.
    *   However, for **fissionable** materials (like $^{238}$U, which is not fissile with thermal neutrons but can fission with fast neutrons), the fission cross section starts to rise at higher energies (around 1 MeV).
    *   This is because the excitation energy from fast neutrons is sufficient to overcome the fission barrier for even non-fissile isotopes. The liquid drop model's concept of the fission barrier is crucial here.

**(Referenced from: Gupta & Gaur, Chapter X - Nuclear Reactions; Vaidyanathan, Chapter 7 - Neutron Interaction with Matter; Glasstone, Chapter 6 - Nuclear Fission)**

---

### 6. Role of Electricity and Motivation for Nuclear Energy

While this topic focuses on the "Liquid Drop Model of Fission Cross Section," it's important to connect it back to the motivation for nuclear energy.

*   **High Energy Density:** Nuclear fission releases vastly more energy per unit mass than chemical reactions (like burning fossil fuels). This is a direct consequence of the mass-energy equivalence ($E=mc^2$).
*   **Electricity Generation:** This released energy is used to heat water, producing steam, which drives turbines connected to generators to produce electricity.
*   **Reliable Baseload Power:** Nuclear power plants can operate continuously for long periods, providing a stable and reliable source of electricity (baseload power), unlike intermittent sources like solar and wind.
*   **Low Greenhouse Gas Emissions:** Nuclear power generation does not directly emit greenhouse gases, contributing to climate change mitigation efforts.
*   **Understanding Fission Cross Section:** Precisely understanding the fission cross section is fundamental to:
    *   **Reactor Design:** Determining the required amount of fuel, moderator, and control rods.
    *   **Neutron Economy:** Ensuring that enough neutrons are available to sustain a chain reaction.
    *   **Reactor Control:** Managing the rate of fission reactions.
    *   **Fuel Cycle Management:** Understanding how fuel burns and what happens to it.

**(Referenced from: Gupta & Gaur, Chapter I - Introduction to Nuclear Energy; Vaidyanathan, Chapter 1 - Introduction to Nuclear Power)**

---

### 7. Relating to Course Outcomes

*   **CO1: Describe the key components of a nuclear reactor system and their functions (Knowledge Level: K2):** Understanding fission cross section is crucial for knowing how the fuel component functions in generating energy.
*   **CO2: Explain the principles of reactor control and safety mechanism (Knowledge Level: K2):** The fission cross section's dependence on neutron energy dictates how control rods (which absorb neutrons) are used to manage the chain reaction.
*   **CO3: Analyse the role of fuel cycle (Knowledge Level: K2):** Fission cross sections determine fuel burnup rates and the production of fissile materials, influencing fuel cycle choices.
*   **CO7: Critically analyse the safety aspects of historic and future reactor design (Knowledge Level: K3):** Understanding how neutron energies influence fission probability is vital for analyzing reactor behavior under different conditions and designing safer systems.

---

### 8. Important Points to Remember

*   The Liquid Drop Model provides a macroscopic view of nuclear behavior, explaining fission as a process driven by surface tension and Coulomb forces.
*   Fission cross section ($\sigma_f$) quantifies the probability of fission.
*   $\sigma_f$ is highly dependent on incident neutron energy.
*   Thermal neutrons lead to high $\sigma_f$ for fissile materials like $^{235}$U.
*   Resonances in $\sigma_f$ occur at specific neutron energies where compound nucleus formation is favored.
*   Fast neutrons are needed for fission in fissionable materials like $^{238}$U.
*   Understanding fission cross sections is fundamental to nuclear reactor design, operation, and safety.

---

### 9. Practice Questions and Answers

**Question 1:**
Explain the analogy used in the Liquid Drop Model for the nucleus. What forces are represented by surface tension and the internal pressure?
**(CO1, K2)**

**Answer:**
In the Liquid Drop Model, the nucleus is compared to a drop of incompressible liquid.
*   **Surface Tension:** Represents the strong nuclear force, which acts to hold the nucleons together and minimizes the surface area.
*   **Internal Pressure/Centrifugal Force:** Represents the Coulomb repulsion between positively charged protons, which tends to break the nucleus apart.

**Question 2:**
Define fission cross section ($\sigma_f$). What are the three main regions of neutron energy where $\sigma_f$ for uranium isotopes behaves differently?
**(CO3, K2)**

**Answer:**
Fission cross section ($\sigma_f$) is a measure of the probability that an incident neutron will cause a fission event in a nucleus.
The three main regions are:
1.  **Thermal Neutron Region:** Low energy (~0.025 eV), where $\sigma_f$ for $^{235}$U is very high and generally follows a $1/v$ law.
2.  **Resonance Region:** Intermediate energies (eV to keV), where $\sigma_f$ shows sharp peaks (resonances) due to compound nucleus formation.
3.  **Fast Neutron Region:** High energies (MeV), where $\sigma_f$ generally decreases but becomes significant for fissionable materials like $^{238}$U as the neutron energy surpasses the fission barrier.

**Question 3:**
How does the excitation energy of a nucleus influence the probability of fission?
**(CO7, K3)**

**Answer:**
The excitation energy ($E^*$) of a nucleus, gained from absorbing a neutron ($E^* = S_n + E_n$), determines its stability.
*   If $E^* < S_n$ (neutron separation energy), the nucleus cannot emit a neutron easily and fission probability might be lower.
*   If $E^* > S_n$, the nucleus has sufficient energy to de-excite either by emitting neutrons or by undergoing fission. The Liquid Drop Model explains that higher excitation energy leads to greater nuclear deformation, increasing the likelihood that Coulomb forces overcome surface tension, thus promoting fission. The competition between neutron emission ($\Gamma_n$) and fission ($\Gamma_f$) is key; as excitation energy increases, $\Gamma_f$ relative to $\Gamma_n$ often increases, leading to a higher fission probability.

**Question 4 (Conceptual):**
If you were designing a reactor using natural uranium (which contains mostly $^{238}$U and only 0.7% $^{235}$U), what type of neutrons would you need to use for efficient fission? Explain using the concept of fission cross section.
**(CO1, CO3, K2)**

**Answer:**
To efficiently fission natural uranium, you would need to use **thermal neutrons**.
*   $^{238}$U has a very low fission cross section for thermal neutrons; it can only fission with fast neutrons.
*   $^{235}$U, while present in low concentration, has a very high fission cross section for thermal neutrons.
*   Therefore, to achieve a self-sustaining chain reaction with natural uranium, you need to moderate the fast neutrons released from fission down to thermal energies using a moderator (like heavy water or graphite). This maximizes the probability of fission in the abundant $^{235}$U.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
