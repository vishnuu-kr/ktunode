---
title: "Drain characteristics, transfer characteristics."
subject: "SOLID STATE DEVICES"
module: "Module 3: Metal Semiconductor contacts : Electron affinity and work function, Ohmic and Rectifying Contacts, current voltage characteristics."
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2bc"
status: "completed"
scrapedAt: "2026-05-23T17:47:38.074Z"
---
# SOLID STATE DEVICES - Module 3: Metal Semiconductor Contacts

## Topic: Drain Characteristics and Transfer Characteristics

This module focuses on the behavior of metal-semiconductor contacts, specifically their electrical characteristics under varying bias conditions. We will delve into the formation of these contacts, their classification into Ohmic and Rectifying types, and the fundamental principles governing their current-voltage (I-V) behavior. This specific topic will then detail the output and transfer characteristics of transistors, which are crucial for understanding their operation.

---

### 1. Introduction to Metal-Semiconductor Contacts

*   **Definition:** A metal-semiconductor contact is formed when a metal is brought into intimate contact with a semiconductor material.
*   **Importance:** These contacts are fundamental building blocks in semiconductor devices, serving as terminals for applying voltages and currents, and influencing device performance significantly. The nature of the contact (Ohmic or Rectifying) dictates the device's functionality.
*   **Key Concepts:**
    *   **Work Function ($\Phi_m$):** The minimum energy required to remove an electron from the Fermi level of a metal to the vacuum level. (Sze, Physics of Semiconductor Devices)
    *   **Electron Affinity ($\chi_s$):** The energy difference between the vacuum level and the bottom of the conduction band ($E_c$) in a semiconductor. (Pierret, Semiconductor Device Fundamentals)
    *   **Fermi Level ($E_F$):** The energy level at which the probability of occupation by an electron is 1/2 at absolute zero temperature. In thermal equilibrium, the Fermi level is constant throughout the system.

#### 1.1 Work Function and Electron Affinity

*   **Work Function ($\Phi_m$):**
    *   $\Phi_m = \chi_m + (E_{vac} - E_F)$ where $\chi_m$ is the vacuum level of the metal and $E_{vac}$ is the vacuum level.
    *   *Example:* Copper has a work function of approximately 4.7 eV.
*   **Electron Affinity ($\chi_s$):**
    *   $\chi_s = E_{vac} - E_c$
    *   *Example:* Silicon has an electron affinity of approximately 4.01 eV.

#### 1.2 Energy Band Diagrams at Contact

When a metal and a semiconductor are brought into contact, electrons will flow from the material with a higher Fermi level to the material with a lower Fermi level until the Fermi levels align, establishing thermal equilibrium. This process leads to the formation of a depletion region and a built-in potential ($\Phi_{bi}$).

*   **Case 1: $\Phi_m > \Phi_s$ (where $\Phi_s = \chi_s + E_F - E_i$)**
    *   Electrons flow from semiconductor to metal.
    *   Forms a **rectifying contact** (Schottky barrier).
    *   A depletion region forms in the semiconductor near the interface.
    *   The band diagram shows a barrier at the interface.

*   **Case 2: $\Phi_m < \Phi_s$**
    *   Electrons flow from metal to semiconductor.
    *   Forms an **Ohmic contact**.
    *   A depletion region forms in the metal if it's heavily doped, or no significant barrier forms in the semiconductor.
    *   The band diagram shows a continuous or very small barrier.

*   **Note:** The work function of the semiconductor ($\Phi_s$) depends on the doping concentration. For an n-type semiconductor, $\Phi_s = \chi_s + (E_c - E_F)$ and for a p-type semiconductor, $\Phi_s = \chi_s + (E_F - E_v)$.

---

### 2. Ohmic and Rectifying Contacts

#### 2.1 Rectifying Contacts (Schottky Barriers)

*   **Formation:** Occurs when the work function of the metal is greater than that of the semiconductor (for n-type) or less than that of the semiconductor (for p-type).
*   **Mechanism:** A potential barrier (Schottky barrier) is formed at the interface, hindering current flow in one direction.
*   **Band Bending:** The energy bands of the semiconductor bend upwards (for n-type with $\Phi_m > \Phi_s$) or downwards (for p-type with $\Phi_m < \Phi_s$) at the interface.
*   **Depletion Region:** A region depleted of majority carriers forms in the semiconductor, extending from the interface.
*   **Forward Bias:** Applying a positive voltage to the metal relative to the semiconductor (for n-type) reduces the barrier height, allowing significant current flow. The current is primarily due to majority carriers crossing the barrier.
*   **Reverse Bias:** Applying a negative voltage to the metal relative to the semiconductor (for n-type) increases the barrier height, significantly limiting current flow. The current is primarily due to minority carriers being swept across the barrier.

#### 2.2 Ohmic Contacts

*   **Formation:** Achieved when the work function difference is such that it creates a low-resistance path for current flow in both directions, or by heavily doping the semiconductor at the contact interface.
*   **Mechanism:**
    *   **Work Function Alignment:** If $\Phi_m = \Phi_s$, there is no significant barrier.
    *   **Heavy Doping:** For $\Phi_m > \Phi_s$ (n-type), heavily doping the semiconductor at the contact interface creates a very narrow depletion region. Tunneling of carriers through this narrow barrier becomes the dominant current transport mechanism, resulting in a low resistance contact. (Sze, Physics of Semiconductor Devices).
*   **Characteristics:** The I-V characteristic is linear, passing through the origin, similar to a resistor.

---

### 3. Current-Voltage (I-V) Characteristics

#### 3.1 Rectifying Contact I-V Characteristics (Schottky Diode)

The current through a Schottky diode is primarily governed by thermionic emission of majority carriers over the potential barrier.

*   **Forward Current ($I_F$):**
    $$I_F \approx I_S \left( e^{V/nV_T} - 1 \right)$$
    Where:
    *   $I_S$ is the reverse saturation current.
    *   $V$ is the applied voltage.
    *   $n$ is the ideality factor (typically 1 for ideal Schottky diodes).
    *   $V_T = kT/q$ is the thermal voltage ($k$ is Boltzmann constant, $T$ is temperature, $q$ is electron charge).

*   **Reverse Saturation Current ($I_S$):**
    $$I_S = A A^* T^2 e^{-\Phi_{Bn}/kT}$$
    Where:
    *   $A$ is the contact area.
    *   $A^*$ is the effective Richardson constant.
    *   $\Phi_{Bn}$ is the Schottky barrier height for electrons.

*   **Reverse Breakdown:** At sufficiently high reverse bias, breakdown occurs due to mechanisms like Zener breakdown or avalanche breakdown, leading to a rapid increase in reverse current.

#### 3.2 Ohmic Contact I-V Characteristics

*   **Linearity:** The I-V characteristic is linear, $I = V/R_{contact}$, where $R_{contact}$ is the contact resistance.
*   **Low Resistance:** $R_{contact}$ is very low, indicating efficient current injection and extraction.

---

### 4. Drain Characteristics and Transfer Characteristics (Focusing on FETs)

While Module 3 primarily deals with metal-semiconductor contacts, these contacts are critical for the terminals of Field-Effect Transistors (FETs), such as the Metal-Oxide-Semiconductor Field-Effect Transistor (MOSFET). The drain and transfer characteristics are essential for understanding FET operation.

**(Note: This section assumes basic knowledge of FET structure, which is often covered in other modules. However, the metal-semiconductor contacts discussed earlier are crucial for the source and drain terminals of MOSFETs, especially in forming Ohmic contacts for efficient current flow.)**

#### 4.1 MOSFET Drain Characteristics ($I_D$ vs. $V_{DS}$ for constant $V_{GS}$)

*   **Definition:** These plots show the drain current ($I_D$) as a function of the drain-source voltage ($V_{DS}$) for several constant values of gate-source voltage ($V_{GS}$).
*   **Regions of Operation:**
    1.  **Cut-off Region:** When $V_{GS} < V_{th}$ (threshold voltage), the channel is not formed, and $I_D \approx 0$.
    2.  **Linear (Ohmic) Region:** When $V_{GS} > V_{th}$ and $V_{DS} < (V_{GS} - V_{th})$ (often referred to as $V_{DS} < V_{DS,sat}$), a conductive channel is formed between the source and drain. The channel resistance is modulated by $V_{GS}$. The drain current increases almost linearly with $V_{DS}$.
        *   *Equation (approximate):* $I_D \approx \mu_n C_{ox} \frac{W}{L} \left( (V_{GS} - V_{th})V_{DS} - \frac{1}{2}V_{DS}^2 \right)$ (for n-channel enhancement MOSFET).
        *   $\mu_n$: electron mobility.
        *   $C_{ox}$: gate oxide capacitance per unit area.
        *   $W/L$: aspect ratio of the transistor.
    3.  **Saturation Region:** When $V_{DS} \geq (V_{GS} - V_{th})$, the channel near the drain becomes "pinched off." The drain current becomes relatively independent of $V_{DS}$ and is primarily controlled by $V_{GS}$.
        *   *Equation (approximate):* $I_D \approx \frac{1}{2} \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{th})^2$ (for n-channel enhancement MOSFET).
        *   This behavior is analogous to a controlled current source.

*   **Visual Representation:** A set of curves, each corresponding to a different $V_{GS}$. As $V_{GS}$ increases, the current in both the linear and saturation regions increases.

#### 4.2 MOSFET Transfer Characteristics ($I_D$ vs. $V_{GS}$ for constant $V_{DS}$)

*   **Definition:** These plots show the drain current ($I_D$) as a function of the gate-source voltage ($V_{GS}$) for a constant drain-source voltage ($V_{DS}$).
*   **Key Features:**
    *   **Cut-off Region:** For $V_{GS} < V_{th}$, $I_D$ is close to zero.
    *   **Linear Region (for fixed $V_{DS}$):** If $V_{DS}$ is kept in the linear region and $V_{GS}$ is increased, $I_D$ increases approximately linearly with $(V_{GS} - V_{th})$.
    *   **Saturation Region:** Once $V_{DS}$ is sufficiently large (e.g., $V_{DS} \geq V_{GS} - V_{th}$), the transistor enters the saturation region. In this region, $I_D$ is approximately proportional to $(V_{GS} - V_{th})^2$.
        *   *Equation (saturation):* $I_D \approx K (V_{GS} - V_{th})^2$, where $K = \frac{1}{2} \mu_n C_{ox} \frac{W}{L}$.

*   **Visual Representation:** A single curve showing the transition from cut-off to the saturation region. The threshold voltage ($V_{th}$) is the gate voltage at which significant drain current begins to flow.

---

### 5. Important Points to Remember

*   The work function of the metal and the electron affinity of the semiconductor are crucial in determining the nature of the metal-semiconductor contact.
*   Rectifying contacts (Schottky barriers) exhibit diode-like behavior, allowing current flow primarily in one direction.
*   Ohmic contacts provide a low-resistance path for current flow in both directions, essential for efficient current injection and extraction in devices.
*   Heavy doping of the semiconductor at the contact interface is a common method to achieve Ohmic contacts when the work function difference would otherwise lead to a rectifying contact.
*   Drain characteristics of FETs show the relationship between drain current and drain-source voltage for different gate-source voltages, revealing the linear and saturation regions.
*   Transfer characteristics of FETs illustrate how the drain current is controlled by the gate-source voltage, highlighting the threshold voltage and the square-law dependence in saturation.
*   The ideality factor ($n$) in Schottky diode equations accounts for deviations from ideal thermionic emission.
*   The Schottky barrier height ($\Phi_{Bn}$) is a critical parameter that directly affects the reverse saturation current and forward voltage drop.

---

### 6. Practice Questions and Exercises

**Question 1 (Knowledge Level: K3, aligns with CO1, CO2, CO3):**
Explain the conditions under which a metal-semiconductor contact forms a rectifying junction. Draw the energy band diagram for an n-type semiconductor in equilibrium when a metal with a work function greater than the semiconductor's work function is in contact.

**Answer:**
A rectifying junction forms when there is a significant potential barrier at the metal-semiconductor interface that opposes current flow in one direction. For an n-type semiconductor and a metal, this occurs when the work function of the metal ($\Phi_m$) is greater than the work function of the semiconductor ($\Phi_s$).

*   **Energy Band Diagram:**
    *   Draw vacuum levels, metal Fermi level, semiconductor conduction band ($E_c$), valence band ($E_v$), and intrinsic Fermi level ($E_i$).
    *   Show the metal Fermi level aligned with the semiconductor Fermi level in equilibrium.
    *   The conduction band of the semiconductor bends upwards towards the metal interface.
    *   A depletion region forms in the semiconductor, depleted of electrons.
    *   The barrier height $\Phi_{Bn} = \Phi_m - \chi_s$ (approximate, considering doping effects).

---

**Question 2 (Knowledge Level: K3, aligns with CO3, CO4):**
Consider an n-channel enhancement MOSFET. Describe the two main regions of operation based on the drain characteristics ($I_D$ vs. $V_{DS}$).

**Answer:**
The two main regions of operation for an n-channel enhancement MOSFET based on drain characteristics are:

1.  **Linear (Ohmic) Region:**
    *   **Condition:** $V_{GS} > V_{th}$ and $V_{DS} < (V_{GS} - V_{th})$.
    *   **Description:** A continuous conductive channel exists between the source and drain. The drain current ($I_D$) increases approximately linearly with $V_{DS}$ because the channel acts like a voltage-controlled resistor. The conductivity of the channel is modulated by $V_{GS}$.

2.  **Saturation Region:**
    *   **Condition:** $V_{GS} > V_{th}$ and $V_{DS} \geq (V_{GS} - V_{th})$.
    *   **Description:** The channel near the drain becomes "pinched off" due to the high drain-source voltage. The drain current ($I_D$) becomes relatively constant and is primarily controlled by $V_{GS}$, acting like a current source. Further increases in $V_{DS}$ have minimal effect on $I_D$ (ignoring channel length modulation).

---

**Question 3 (Knowledge Level: K3, aligns with CO4):**
For an n-channel enhancement MOSFET, sketch the transfer characteristics ($I_D$ vs. $V_{GS}$) for a constant $V_{DS}$ that is large enough to ensure saturation. Label the threshold voltage ($V_{th}$) and indicate the cut-off and saturation regions.

**Answer:**
*   **Sketch:**
    *   The x-axis is $V_{GS}$, and the y-axis is $I_D$.
    *   The curve starts at $I_D \approx 0$ for $V_{GS} < V_{th}$ (Cut-off Region).
    *   At $V_{GS} = V_{th}$, $I_D$ begins to increase.
    *   For $V_{GS} > V_{th}$, $I_D$ increases approximately quadratically with $V_{GS}$ (Saturation Region). The curve should be roughly parabolic.
    *   Label $V_{th}$ on the $V_{GS}$ axis where the current starts to rise significantly.

---

**Question 4 (Knowledge Level: K3, aligns with CO3):**
The reverse saturation current for an ideal Schottky diode is given as $1 \times 10^{-6}$ A. If the applied voltage is $0.4$ V and the ideality factor is $1.1$, calculate the forward current. (Assume $kT/q \approx 0.025$ V).

**Answer:**
Using the forward current equation:
$I_F \approx I_S \left( e^{V/nV_T} - 1 \right)$

Given:
$I_S = 1 \times 10^{-6}$ A
$V = 0.4$ V
$n = 1.1$
$V_T = kT/q = 0.025$ V

$I_F \approx (1 \times 10^{-6}) \left( e^{0.4 / (1.1 \times 0.025)} - 1 \right)$
$I_F \approx (1 \times 10^{-6}) \left( e^{0.4 / 0.0275} - 1 \right)$
$I_F \approx (1 \times 10^{-6}) \left( e^{14.545} - 1 \right)$
$I_F \approx (1 \times 10^{-6}) (2,530,000 - 1)$
$I_F \approx 2.53$ A

*(Self-reflection: This calculated current is very high for a typical diode. This implies that either the given $I_S$ is unusually large, or the applied voltage is significantly high for a simple Schottky diode model, or the ideality factor is also a bit high. In real devices, other limiting factors would be present.)*

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 7. References and Further Reading

*   **Semiconductor device Fundamentals by Robert Pierret:** Provides a solid foundation in semiconductor physics and device operation, including detailed explanations of metal-semiconductor contacts.
*   **Physics of Semiconductor Devices by Michael Shur:** Offers a comprehensive treatment with advanced topics and detailed derivations, useful for understanding the nuances of barrier heights and current transport mechanisms.
*   **Semiconductor Physics and Devices, 3ed, An Indian Adaptation by S.M. Sze, M.K. Lee:** A widely used textbook that covers all essential concepts from basic physics to device characteristics, including Schottky diodes and FETs.
*   **Semiconductor Physics and Devices by Neamen:** Another excellent reference for detailed explanations and problem-solving approaches.
*   **Physics of Semiconductor Devices by Sze S.M:** A classic text that delves into the fundamental physics governing semiconductor devices, including metal-semiconductor contacts.
*   **Operation and Modelling of the MOS Transistor by Yannis Tsividis:** Specifically relevant for understanding MOSFET characteristics, including their drain and transfer curves.

---

This concludes the study notes for Drain Characteristics and Transfer Characteristics within the context of Metal-Semiconductor Contacts. Remember that the quality of metal-semiconductor contacts directly impacts the performance of transistors and other semiconductor devices.