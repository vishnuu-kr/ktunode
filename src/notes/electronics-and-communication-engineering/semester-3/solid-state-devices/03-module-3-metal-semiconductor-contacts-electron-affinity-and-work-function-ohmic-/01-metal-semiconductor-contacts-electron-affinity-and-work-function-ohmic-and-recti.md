---
title: "Metal Semiconductor contacts : Electron affinity and work function, Ohmic and Rectifying Contacts, current voltage characteristics."
subject: "SOLID STATE DEVICES"
module: "Module 3: Metal Semiconductor contacts : Electron affinity and work function, Ohmic and Rectifying Contacts, current voltage characteristics."
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2b8"
status: "completed"
scrapedAt: "2026-05-23T17:47:35.352Z"
---
# SOLID STATE DEVICES - Module 3: Metal Semiconductor Contacts

## Topic: Metal Semiconductor Contacts: Electron Affinity and Work Function, Ohmic and Rectifying Contacts, Current-Voltage Characteristics

---

### **Introduction**

This module delves into the fundamental concepts governing the interaction between metals and semiconductors when they are brought into contact. This interface is crucial for the operation of virtually all semiconductor devices, as it forms the basis for injecting or extracting charge carriers. We will explore the factors determining the nature of this contact, specifically whether it's rectifying (like a diode) or ohmic (low resistance), and analyze their characteristic current-voltage (I-V) behavior.

---

### **Key Concepts and Definitions**

#### **1. Electron Affinity ($\chi$)**

*   **Definition:** The electron affinity of a material is the energy required to move an electron from the bottom of the conduction band to the vacuum level. It represents the energy barrier for an electron to escape from the solid into free space.
*   **Units:** Electron Volts (eV).
*   **Significance:** A higher electron affinity means it's harder for electrons to escape the material.
*   **Reference:** Pierret, R. S. (1996). *Semiconductor Device Fundamentals*. Pearson Education. (Chapter 4: Metal-Semiconductor Junctions)

#### **2. Work Function ($\Phi$)**

*   **Definition:** The work function of a material is the minimum energy required to remove an electron from the Fermi level to the vacuum level.
*   **Units:** Electron Volts (eV).
*   **Significance:** The work function is a critical parameter in determining the behavior of metal-semiconductor contacts. It dictates the energy barrier for electrons to flow between the metal and the semiconductor.
*   **Formula:** $\Phi = \chi + (E_c - E_F)$ (for electrons)
    *   $\chi$: Electron affinity of the material.
    *   $E_c$: Energy of the conduction band edge.
    *   $E_F$: Fermi level energy.
*   **Reference:** Shur, M. (2019). *Physics of Semiconductor Devices*. Pearson Education. (Chapter 7: Metal-Semiconductor Contacts)

#### **3. Fermi Level ($E_F$)**

*   **Definition:** The Fermi level represents the energy level at which the probability of finding an electron is 1/2 at absolute zero temperature. In thermal equilibrium, it is constant throughout a system, including across a metal-semiconductor junction.
*   **Significance:** The alignment of Fermi levels is the driving force for charge redistribution when two materials are brought into contact, leading to the formation of depletion regions and potential barriers.
*   **Reference:** Sze, S. M., & Lee, M. K. (2021). *Semiconductor Physics and Devices*. Wiley. (Chapter 2: Properties of p-n Junctions)

#### **4. Metal-Semiconductor Contact Formation**

When a metal and a semiconductor are brought into intimate contact, charge carriers will redistribute until their Fermi levels align. This process leads to the formation of either:

*   **Rectifying Contacts (Schottky Barriers):** These contacts exhibit a non-linear current-voltage (I-V) characteristic, similar to a diode. They allow current to flow easily in one direction (forward bias) and resist flow in the opposite direction (reverse bias).
*   **Ohmic Contacts:** These contacts exhibit a linear I-V characteristic, meaning they offer very low resistance to current flow in both directions. They are essential for injecting or extracting carriers from semiconductor devices without significant voltage drops.

---

### **Factors Determining Contact Type: Schottky-Mott Rule**

The nature of the metal-semiconductor contact (Schottky or Ohmic) is primarily determined by the relative values of the metal work function ($\Phi_m$) and the semiconductor electron affinity ($\chi_s$) and doping concentration.

#### **Schottky-Mott Rule (Ideal Case):**

In the ideal case, assuming a clean interface, no interface states, and neglecting image force lowering, the Schottky barrier height ($\Phi_B$) for electrons in an n-type semiconductor is given by:

*   **For n-type semiconductor:** $\Phi_{Bn} = \Phi_m - \chi_s$
*   **For p-type semiconductor:** $\Phi_{Bp} = E_g - (\Phi_m - \chi_s)$
    *   $E_g$: Bandgap energy of the semiconductor.

**Consequences of the Schottky-Mott Rule:**

*   **Rectifying Contact:** If $\Phi_m > \chi_s$ for an n-type semiconductor, or $\Phi_m < E_g + \chi_s$ for a p-type semiconductor, a Schottky barrier is formed, resulting in a rectifying contact.
*   **Ohmic Contact:** If $\Phi_m < \chi_s$ for an n-type semiconductor, or $\Phi_m > E_g + \chi_s$ for a p-type semiconductor, the barrier height is small or zero, ideally leading to an ohmic contact.

**Important Note:** The Schottky-Mott rule provides a good first approximation but often fails to predict the contact behavior accurately in real devices.

#### **Real-World Deviations and Interface Effects:**

*   **Interface States:** The presence of electronic states at the metal-semiconductor interface (due to surface defects, impurities, or chemical reactions) can significantly alter the barrier height. These states can pin the Fermi level at the interface, making the barrier height largely independent of the metal work function. This phenomenon is known as Fermi-level pinning.
*   **Doping Concentration:** For highly doped semiconductors, even if the Schottky-Mott rule predicts a rectifying contact, the depletion region becomes very narrow. This allows for quantum mechanical tunneling of carriers through the barrier, resulting in an ohmic contact. This is often referred to as a "tunneling contact."
*   **Image Force Lowering:** The image force lowering effect reduces the effective barrier height, especially under reverse bias.

**Summary of Factors for Ohmic Contacts:**

1.  **Low Barrier Height:** $\Phi_m < \chi_s$ (n-type) or $\Phi_m > E_g + \chi_s$ (p-type).
2.  **High Doping Concentration:** Facilitates tunneling through a narrow barrier.

*   **Reference:** Neamen, D. A. (2017). *Semiconductor Physics and Devices*. McGraw Hill. (Chapter 13: Metal-Semiconductor Junctions)

---

### **Ohmic Contacts**

Ohmic contacts are designed to allow efficient charge carrier injection or extraction. They are characterized by a low, linear I-V relationship.

#### **Formation of Ohmic Contacts:**

*   **Using Metals with Appropriate Work Functions:** Selecting metals with work functions that lead to small or zero barrier heights, as predicted by the Schottky-Mott rule (e.g., using Al for n-type Si or Au-Zn for p-type Si).
*   **High Doping Concentration at the Interface:** This is the most common method. By heavily doping the semiconductor surface under the metal contact (often through diffusion or ion implantation), a very thin depletion region is formed. This thin barrier allows carriers to tunnel through easily, regardless of the barrier height. This is known as a **tunneling contact**.

#### **Current Transport Mechanisms in Ohmic Contacts:**

*   **Thermionic Emission:** For wider depletion regions, carriers can gain enough thermal energy to surmount the barrier.
*   **Tunneling:** For very narrow depletion regions (due to high doping), carriers tunnel through the barrier.

#### **I-V Characteristics of Ohmic Contacts:**

*   Linear relationship between current ($I$) and voltage ($V$).
*   The contact resistance is low and relatively constant over a wide range of applied voltages.
*   **Current Density ($J$):** The current density in an ohmic contact can be approximated by:
    $J = J_0 \left( e^{qV/kT} - 1 \right)$ (Thermionic emission component, similar to PN junction)
    However, for heavily doped regions, tunneling dominates. The exact expression for tunneling current is complex.

#### **Contact Resistance ($R_c$):**

*   A key parameter for ohmic contacts, representing the resistance offered by the metal-semiconductor interface.
*   It is typically expressed in units of $\Omega \cdot cm^2$.
*   **Measurement:** Often determined using the Transmission Line Model (TLM) method.

*   **Reference:** Sze, S. M. (2015). *Physics of Semiconductor Devices*. John Wiley. (Chapter 5: Metal-Semiconductor Contacts)

---

### **Rectifying Contacts (Schottky Barriers)**

Rectifying contacts exhibit a diode-like behavior, allowing current flow in one direction and blocking it in the other.

#### **Formation of Rectifying Contacts:**

*   **Using Metals with Appropriate Work Functions:** Selecting metals with work functions that create a significant barrier height according to the Schottky-Mott rule (e.g., using Pt or Au for n-type Si).
*   **Clean Interface:** Crucial to avoid Fermi-level pinning by interface states.

#### **Schottky Barrier Model:**

Consider a Schottky barrier formed between a metal and an n-type semiconductor.

1.  **Contact Formation:** When brought together, electrons flow from the semiconductor to the metal if $\Phi_m > \Phi_s$ (where $\Phi_s$ is the work function of the semiconductor). This leaves behind ionized donor atoms in the semiconductor, creating a depletion region.
2.  **Equilibrium:** Equilibrium is reached when the Fermi levels align. A potential barrier is formed at the interface.
3.  **Barrier Height:** The barrier height for electrons from the metal into the semiconductor is $\Phi_{Bn} = \Phi_m - \chi_s$.
4.  **Depletion Region:** A region depleted of mobile charge carriers forms in the semiconductor near the interface.
5.  **Built-in Potential ($V_{bi}$):** The potential difference across the depletion region. For an n-type semiconductor: $V_{bi} = \Phi_m - \Phi_s$ (where $\Phi_s$ is the semiconductor work function).

#### **Current Transport Mechanisms in Rectifying Contacts:**

*   **Thermionic Emission (Dominant for moderately doped semiconductors):** Majority carriers in the semiconductor gain enough thermal energy to overcome the barrier and flow into the metal.
*   **Diffusion Current:** Minority carriers from the semiconductor diffuse towards the barrier and are swept across by the electric field.
*   **Tunneling:** Becomes significant for highly doped semiconductors or very thin barriers.
*   **Thermionic-Field Emission:** A combination of thermionic emission and tunneling.

#### **Current-Voltage (I-V) Characteristics of Rectifying Contacts:**

The current density ($J$) across a Schottky barrier can be described by the Schottky diode equation:

$J = J_s \left( e^{qV/kT} - 1 \right)$

where:

*   $J_s$: Saturation current density, given by $J_s = A^* T^2 e^{-q\Phi_B/kT}$
    *   $A^*$: Richardson's constant (material-dependent, e.g., $A^* = 1.2 \times 10^6 A/cm^2 \cdot K^2$ for Si).
    *   $T$: Absolute temperature in Kelvin.
    *   $\Phi_B$: Schottky barrier height.
    *   $q$: Elementary charge.
    *   $k$: Boltzmann constant.
*   $V$: Applied voltage.

**Forward Bias ($V > 0$):**

*   The applied voltage opposes the built-in potential, reducing the barrier height.
*   Thermionic emission current increases exponentially with voltage.
*   $J \approx J_s e^{qV/kT}$
*   The current is dominated by majority carriers.

**Reverse Bias ($V < 0$):**

*   The applied voltage aids the built-in potential, increasing the barrier height.
*   The only current component is the drift of minority carriers across the depletion region, which is essentially constant. This is the saturation current density ($J_s$).
*   $J \approx -J_s$
*   **Image Force Lowering:** The effective barrier height is reduced by the image force, which is proportional to the square root of the electric field at the interface. This leads to a slight increase in reverse current with voltage, deviating from the ideal $-J_s$.
    *   $\Phi'_B = \Phi_B - \sqrt{\frac{qE_s}{4\pi\epsilon_s}}$
        *   $E_s$: Electric field at the interface.
        *   $\epsilon_s$: Permittivity of the semiconductor.

*   **Reference:** Sze, S. M. (2016). *Semiconductor Devices: Physics and Technology*. John Wiley. (Chapter 5: Schottky Barrier Diodes)

---

### **Learning Outcomes Covered**

*   **CO1: Apply Fermi-Dirac statistics to compare equilibrium carrier concentration.**
    *   The concept of Fermi level alignment is crucial for understanding carrier redistribution and barrier formation at metal-semiconductor contacts. Fermi-Dirac statistics govern the probability of electron occupation of energy states, which directly influences carrier concentration in equilibrium.
*   **CO2: State different carrier transport mechanisms in extrinsic semiconductors and obtain the current densities due to this transport.**
    *   This module discusses thermionic emission and tunneling as primary transport mechanisms across metal-semiconductor junctions. The derivation of current densities for these mechanisms is central to understanding the I-V characteristics.
*   **CO3: Apply the concept of semiconductor physics to solve the current components in semiconductor devices.**
    *   Understanding electron affinity, work function, barrier height, and depletion region formation allows for the calculation and analysis of current components (thermionic emission, diffusion, tunneling) in metal-semiconductor contacts, which are fundamental building blocks of semiconductor devices.
*   **CO4: Analyze the response of semiconductor devices for different biasing conditions.**
    *   The module explicitly analyzes the I-V characteristics of both ohmic and rectifying contacts under forward and reverse bias. This involves understanding how the applied voltage modifies the potential barrier and influences carrier transport.
*   **CO5: Outline the effects of scaling in semiconductor devices.**
    *   While not directly a focus of this module, the principles of metal-semiconductor contacts are fundamental to scaled devices. For instance, achieving reliable ohmic contacts becomes more challenging at smaller dimensions due to increased interface effects and tunneling.

---

### **Practice Questions and Exercises**

**Question 1:**

A metal with a work function of 4.5 eV is brought into contact with n-type Silicon (Si). The electron affinity of Si is 4.0 eV, and its bandgap is 1.1 eV. The donor doping concentration in Si is $N_D = 10^{17} cm^{-3}$. The Richardson's constant for Si is $A^* = 1.2 \times 10^6 A/(cm^2 \cdot K^2)$. Assume temperature T = 300 K.

**(a)** Calculate the Schottky barrier height for electrons ($\Phi_{Bn}$) based on the Schottky-Mott rule.
**(b)** Is the contact expected to be rectifying or ohmic based on this rule?
**(c)** Calculate the saturation current density ($J_s$) for this contact. (Assume $\Phi_B = \Phi_{Bn}$)
**(d)** What would be the approximate current density at a forward bias of 0.4 V?
**(e)** If the doping concentration were increased to $N_D = 10^{19} cm^{-3}$, how would this affect the nature of the contact and its I-V characteristics?

**Answer 1:**

**(a)** $\Phi_{Bn} = \Phi_m - \chi_s = 4.5 \text{ eV} - 4.0 \text{ eV} = 0.5 \text{ eV}$.

**(b)** Since $\Phi_m > \chi_s$, the Schottky-Mott rule predicts a rectifying contact.

**(c)** $J_s = A^* T^2 e^{-q\Phi_B/kT}$
    $kT = (8.617 \times 10^{-5} \text{ eV/K}) \times 300 \text{ K} \approx 0.0259 \text{ eV}$
    $q\Phi_B = 1 \times 0.5 \text{ eV} = 0.5 \text{ eV}$
    $J_s = (1.2 \times 10^6 A/cm^2/K^2) \times (300 K)^2 \times e^{-0.5 \text{ eV} / 0.0259 \text{ eV}}$
    $J_s = (1.2 \times 10^6 \times 9 \times 10^4) \times e^{-19.3} \text{ A/cm}^2$
    $J_s \approx 1.08 \times 10^{11} \times 1.23 \times 10^{-9} \text{ A/cm}^2$
    $J_s \approx 0.133 \text{ A/cm}^2$.

**(d)** For forward bias ($V > 0$), $J \approx J_s e^{qV/kT}$.
    $J \approx 0.133 \text{ A/cm}^2 \times e^{(0.4 \text{ eV} / 0.0259 \text{ eV})}$
    $J \approx 0.133 \text{ A/cm}^2 \times e^{15.44}$
    $J \approx 0.133 \text{ A/cm}^2 \times 3.4 \times 10^6$
    $J \approx 4.5 \times 10^5 \text{ A/cm}^2$.

**(e)** If $N_D$ increases to $10^{19} cm^{-3}$, the depletion region width will significantly decrease. Even if the Schottky-Mott rule suggests a rectifying contact, the barrier will become narrow enough for significant quantum mechanical tunneling. This would lead to an **ohmic contact** characterized by a linear I-V relationship and low contact resistance.

---

**Question 2:**

Explain why highly doped semiconductor surfaces are used to create ohmic contacts, even if the metal work function and semiconductor properties suggest a rectifying junction according to the Schottky-Mott rule.

**Answer 2:**

When a semiconductor surface is highly doped, the concentration of ionized dopant atoms in the depletion region becomes very high. This leads to a very narrow depletion width. According to quantum mechanics, charge carriers (electrons or holes) can tunnel through a potential barrier if the barrier is sufficiently narrow (typically less than 10-20 nm). For highly doped semiconductors, this narrow barrier effectively allows carriers to pass through the junction with a low resistance, regardless of the height of the potential barrier. This phenomenon is known as **tunneling** and results in an ohmic contact.

---

### **Important Points to Remember**

*   **Work function ($\Phi$) and electron affinity ($\chi$)** are key material properties determining the behavior of metal-semiconductor contacts.
*   The **Schottky-Mott rule** provides an ideal prediction: $\Phi_{Bn} = \Phi_m - \chi_s$ for n-type.
*   **Rectifying contacts** are formed when $\Phi_m > \chi_s$ (n-type) or $\Phi_m < E_g + \chi_s$ (p-type), creating a significant barrier.
*   **Ohmic contacts** are formed when $\Phi_m < \chi_s$ (n-type) or $\Phi_m > E_g + \chi_s$ (p-type), or more commonly, due to high doping causing **tunneling**.
*   **Interface states** can lead to **Fermi-level pinning**, making the barrier height largely independent of the metal work function and often resulting in rectifying behavior.
*   The **Schottky diode equation** describes the I-V characteristics of rectifying contacts, with saturation current ($J_s$) being a critical parameter.
*   **Image force lowering** reduces the effective barrier height under reverse bias, increasing the reverse leakage current.
*   **Contact resistance ($R_c$)** is a key parameter for ohmic contacts.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### **References**

*   Pierret, R. S. (1996). *Semiconductor Device Fundamentals*. Pearson Education.
*   Shur, M. (2019). *Physics of Semiconductor Devices*. Pearson Education.
*   Sze, S. M., & Lee, M. K. (2021). *Semiconductor Physics and Devices*. Wiley.
*   Neamen, D. A. (2017). *Semiconductor Physics and Devices*. McGraw Hill.
*   Sze, S. M. (2015). *Physics of Semiconductor Devices*. John Wiley.
*   Sze, S. M. (2016). *Semiconductor Devices: Physics and Technology*. John Wiley.

---