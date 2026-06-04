---
title: "internally reversible isothermal heat transfer"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 3: Second law: Kelvin–Planck statement"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f62"
status: "completed"
scrapedAt: "2026-05-20T17:53:41.544Z"
---
# Engineering Thermodynamics: Module 3 - Second Law: Kelvin–Planck Statement

## Topic: Internally Reversible Isothermal Heat Transfer

This module delves into the Second Law of Thermodynamics, focusing on the Kelvin–Planck statement and its implications. This topic specifically examines heat transfer processes that are **internally reversible** and occur at a **constant temperature (isothermal)**.

---

### Learning Outcomes Covered:

*   **LO1: Understand the concept of a reversible process and its implications for thermodynamic analysis.**
*   **LO2: State and explain the Kelvin–Planck and Clausius statements of the Second Law.**
*   **LO3: Analyze the performance of simple thermodynamic cycles (e.g., Carnot cycle).**
*   **LO4: Understand the relationship between heat transfer and work in reversible processes.**

---

### Course Outcomes Alignment:

*   **CO1: Understand basic concepts of thermodynamics (K1, K2)** - This topic builds upon fundamental concepts like systems, states, and properties.
*   **CO2: Understand the laws of thermodynamics (K1, K2)** - Directly addresses the Second Law and its implications for heat transfer.
*   **CO3: Conduct first law analysis of open and closed systems (K3)** - While focusing on the Second Law, understanding energy balance (First Law) is crucial for analyzing these processes.
*   **CO4: Determine entropy changes associated with different processes (K3)** - Internally reversible processes are key to understanding entropy generation.
*   **CO5: Determine the properties of pure substances (K2, K3)** - Isothermal processes often involve phase changes, requiring knowledge of pure substance properties.

---

### 1. Introduction to Reversible Processes

**Definition:** A **reversible process** is an idealized process that can be reversed without leaving any trace on the surroundings. In a reversible process, the system and surroundings are always infinitesimally close to a state of equilibrium.

**Key Characteristics of Reversible Processes:**

*   **Infinitesimal driving forces:** Any potential difference (temperature, pressure, etc.) that drives the process is infinitesimally small.
*   **No dissipative effects:** Phenomena like friction, unrestrained expansion, or electrical resistance are absent.
*   **Can be reversed:** The process can be carried out in the opposite direction, returning both the system and surroundings to their initial states.
*   **Maximum work output/minimum work input:** Reversible processes represent the theoretical limits for work done by or on a system.
*   **Constant equilibrium:** The system remains in thermodynamic equilibrium throughout the process (or infinitesimally close to it).

**Importance in Thermodynamics:** Reversible processes serve as benchmarks for evaluating the performance of real, irreversible processes. They help establish the maximum possible efficiency of thermal devices.

**(Referenced in: Cengel & Boles, Chapter 6; P.K. Nag, Chapter 5; Moran & Shapiro, Chapter 6; Sonntag, Borgnakke, & VanWylen, Chapter 7)**

---

### 2. The Kelvin–Planck Statement of the Second Law

**Statement:** "It is impossible to construct a device that operates in a cycle and produces no effect other than the transfer of heat from a single reservoir and the performance of an equivalent amount of work."

**Implications:**

*   **No 100% efficient heat engines:** This statement directly implies that a heat engine cannot convert all the heat it receives from a high-temperature reservoir into work. Some heat must always be rejected to a low-temperature reservoir.
*   **Requirement of a cold reservoir:** For a cyclic device to produce work, it must exchange heat with at least two reservoirs at different temperatures.

**(Referenced in: Cengel & Boles, Chapter 6; P.K. Nag, Chapter 5; Moran & Shapiro, Chapter 6; Sonntag, Borgnakke, & VanWylen, Chapter 7)**

---

### 3. Internally Reversible Isothermal Heat Transfer

This is a specific type of reversible process where heat transfer occurs between the system and its surroundings at a constant temperature.

**Definition:** An **internally reversible isothermal heat transfer** is a process where:
    *   The system's temperature remains constant throughout the heat transfer.
    *   The process is reversible within the system boundaries. This means that any irreversibilities within the system itself (e.g., friction) are negligible.

**Key Considerations for Internal Reversibility in Isothermal Heat Transfer:**

For heat transfer to be internally reversible, the temperature difference between the system and the heat source/sink must be infinitesimally small.

*   **System to Source:** If heat is transferred *from* the system to a reservoir at temperature $T_{res}$, for reversibility, the system temperature $T$ must be infinitesimally greater than $T_{res}$ ($T = T_{res} + dT_{sys}$).
*   **Source to System:** If heat is transferred *to* the system from a reservoir at temperature $T_{res}$, for reversibility, the system temperature $T$ must be infinitesimally less than $T_{res}$ ($T = T_{res} - dT_{sys}$).

**Mathematical Representation:**

Consider a closed system undergoing an internally reversible isothermal process at temperature $T$ where heat $Q$ is transferred.

*   **Work Done (W):** The work done depends on the nature of the system (e.g., gas, liquid).
    *   For a simple compressible substance: $W_{rev} = \int_1^2 P dV$
    *   Since the process is isothermal, $T = constant$.
*   **Heat Transfer (Q):** According to the First Law of Thermodynamics for a closed system:
    $Q - W = \Delta U$
    Since the temperature is constant and the process is reversible, the change in internal energy ($\Delta U$) for many substances (like ideal gases) is zero.
    *   For an **ideal gas** undergoing an isothermal process: $\Delta U = 0$ (since internal energy of an ideal gas is a function of temperature only).
        Therefore, $Q_{rev} = W_{rev}$.
    *   For **real gases or phase change processes**, $\Delta U$ might not be zero even if $T$ is constant. In such cases, $Q_{rev} = W_{rev} + \Delta U$.

**Entropy Change ($\Delta S$):**

For an internally reversible process, the entropy change of the system is given by:
$\Delta S = \int_1^2 \frac{\delta Q_{rev}}{T}$

Since $T$ is constant for an isothermal process:
$\Delta S_{sys} = \frac{Q_{rev}}{T_{sys}}$

This is a crucial relationship. It shows that for an internally reversible isothermal heat transfer, the heat transfer is directly proportional to the system's entropy change and its absolute temperature.

**(Referenced in: Cengel & Boles, Chapter 6, Section 6-4; P.K. Nag, Chapter 5, Section 5.3; Moran & Shapiro, Chapter 6, Section 6.3; Sonntag, Borgnakke, & VanWylen, Chapter 7, Section 7.3)**

---

### 4. Examples of Internally Reversible Isothermal Heat Transfer

**a) Isothermal Expansion/Compression of an Ideal Gas:**

Consider an ideal gas in a cylinder with a piston undergoing an isothermal process at temperature $T$.

*   **Reversible Isothermal Expansion:** The gas expands by absorbing heat $Q_{in}$ from a reservoir at temperature $T$, performing work $W_{out}$.
    *   $T_{sys} = T_{res} = T$ (constant)
    *   $\Delta U_{sys} = 0$ (for ideal gas)
    *   From First Law: $Q_{in} - W_{out} = 0 \Rightarrow Q_{in} = W_{out}$
    *   Work done by ideal gas: $W_{out} = \int_{V_1}^{V_2} P dV = \int_{V_1}^{V_2} \frac{mRT}{V} dV = mRT \ln\left(\frac{V_2}{V_1}\right)$
    *   So, $Q_{in} = mRT \ln\left(\frac{V_2}{V_1}\right)$
    *   Entropy change of the system: $\Delta S_{sys} = \frac{Q_{in}}{T} = mR \ln\left(\frac{V_2}{V_1}\right)$

*   **Reversible Isothermal Compression:** The gas is compressed by rejecting heat $Q_{out}$ to a reservoir at temperature $T$, work $W_{in}$ is done on the gas.
    *   $T_{sys} = T_{res} = T$ (constant)
    *   $\Delta U_{sys} = 0$ (for ideal gas)
    *   From First Law: $Q_{out} - W_{in} = 0 \Rightarrow Q_{out} = W_{in}$ (where $W_{in}$ is work done *on* the system, so $W_{net}$ would be negative)
    *   Work done on the gas: $W_{in} = \int_{V_1}^{V_2} P dV = mRT \ln\left(\frac{V_2}{V_1}\right)$ (Note: $V_2 < V_1$, so $\ln$ is negative, and $W_{in}$ is positive if $V_2 < V_1$).
    *   So, $Q_{out} = -mRT \ln\left(\frac{V_2}{V_1}\right) = mRT \ln\left(\frac{V_1}{V_2}\right)$
    *   Entropy change of the system: $\Delta S_{sys} = \frac{Q_{out}}{T} = mR \ln\left(\frac{V_1}{V_2}\right)$ (Note: For compression, $V_2/V_1 < 1$, so $\ln$ is negative, meaning $\Delta S_{sys}$ is negative as expected).

**b) Isothermal Vaporization/Condensation of a Pure Substance:**

Consider a pure substance undergoing a phase change (e.g., water boiling) at a constant temperature $T$ and constant pressure $P$. This is an isothermal process.

*   **Reversible Isothermal Vaporization:** Liquid absorbs heat $Q_{in}$ from a reservoir at temperature $T$ to become vapor. This occurs at the saturation temperature $T_{sat}$ for a given pressure.
    *   $T_{sys} = T_{res} = T_{sat}$ (constant during phase change)
    *   Work done: $W_{out} = P(v_{g} - v_{f})$, where $v_g$ is specific volume of vapor and $v_f$ is specific volume of liquid.
    *   Heat transfer: $Q_{in} = h_{fg}$, the latent heat of vaporization.
    *   From First Law: $Q_{in} - W_{out} = \Delta U_{sys} = u_{fg} = h_{fg} - P(v_g - v_f)$
    *   This confirms $h_{fg} - P(v_g - v_f) = \Delta U_{sys}$.
    *   Entropy change of the system: $\Delta S_{sys} = \frac{Q_{in}}{T} = \frac{h_{fg}}{T_{sat}}$. This is the entropy of vaporization.

*   **Reversible Isothermal Condensation:** Vapor rejects heat $Q_{out}$ to a reservoir at temperature $T$ to become liquid.
    *   $T_{sys} = T_{res} = T_{sat}$ (constant)
    *   Work done: $W_{in} = P(v_f - v_g) = -P(v_g - v_f)$ (work done *on* the system)
    *   Heat transfer: $Q_{out} = -h_{fg}$ (heat rejected)
    *   From First Law: $Q_{out} - W_{in} = \Delta U_{sys} = u_{fg}$
    *   Entropy change of the system: $\Delta S_{sys} = \frac{Q_{out}}{T} = \frac{-h_{fg}}{T_{sat}}$. This is the entropy of condensation.

**(Referenced in: Cengel & Boles, Chapter 6, Section 6-4, Example 6-4; P.K. Nag, Chapter 5, Section 5.3, Example 5.4; Sonntag, Borgnakke, & VanWylen, Chapter 7, Section 7.3)**

---

### 5. Entropy Generation in Isothermal Heat Transfer

While internally reversible isothermal heat transfer has $\Delta S_{sys} = Q_{rev}/T_{sys}$, we must consider the entropy change of the surroundings and the universe.

*   **For a reversible isothermal heat transfer with a reservoir at $T_{res}$:**
    *   If heat $Q$ is transferred from the reservoir to the system (system temperature $T_{sys} = T_{res} - dT_{sys}$):
        *   $\Delta S_{sys} = Q/T_{sys}$
        *   $\Delta S_{res} = -Q/T_{res}$
        *   Entropy change of the universe: $\Delta S_{univ} = \Delta S_{sys} + \Delta S_{res} = \frac{Q}{T_{sys}} - \frac{Q}{T_{res}}$
        *   Since $T_{res} > T_{sys}$ (infinitesimally), $\Delta S_{univ} = 0$ for reversible heat transfer.
    *   If heat $Q$ is transferred from the system to the reservoir (system temperature $T_{sys} = T_{res} + dT_{sys}$):
        *   $\Delta S_{sys} = -Q/T_{sys}$
        *   $\Delta S_{res} = Q/T_{res}$
        *   Entropy change of the universe: $\Delta S_{univ} = \Delta S_{sys} + \Delta S_{res} = -\frac{Q}{T_{sys}} + \frac{Q}{T_{res}}$
        *   Since $T_{sys} > T_{res}$ (infinitesimally), $\Delta S_{univ} = 0$ for reversible heat transfer.

*   **For an irreversible isothermal heat transfer:**
    *   If heat $Q$ is transferred from a reservoir at $T_H$ to a system at $T_L$, where $T_H > T_L$:
        *   $\Delta S_{sys} = Q/T_L$
        *   $\Delta S_{res} = -Q/T_H$
        *   $\Delta S_{univ} = \Delta S_{sys} + \Delta S_{res} = \frac{Q}{T_L} - \frac{Q}{T_H} = Q \left(\frac{1}{T_L} - \frac{1}{T_H}\right)$
        *   Since $T_H > T_L$, $\frac{1}{T_L} > \frac{1}{T_H}$, so $\Delta S_{univ} > 0$. This is positive entropy generation, characteristic of irreversible processes.

**(Referenced in: Cengel & Boles, Chapter 6, Section 6-4; P.K. Nag, Chapter 5, Section 5.4; Moran & Shapiro, Chapter 6, Section 6.4; Sonntag, Borgnakke, & VanWylen, Chapter 7, Section 7.4)**

---

### 6. Practice Questions and Exercises

**Question 1 (Conceptual - K1/K2):**
Explain why a perfectly reversible isothermal heat transfer requires an infinitesimally small temperature difference between the system and the heat reservoir. What happens to entropy generation if this temperature difference becomes significant?

**Answer:** A perfectly reversible process requires the system to be infinitesimally close to equilibrium at all times. For heat transfer, this means the temperature difference driving the heat flow must be infinitesimally small. If the temperature difference is significant, the heat transfer is irreversible, leading to positive entropy generation in the universe ($\Delta S_{univ} > 0$).

**Question 2 (Ideal Gas - K3):**
1 kg of an ideal gas (R = 0.287 kJ/kg·K, $c_v$ = 0.718 kJ/kg·K) is contained in a cylinder. It undergoes a reversible isothermal expansion from an initial state of 500 kPa and 0.05 m³ to a final volume of 0.1 m³.
(a) Calculate the initial and final temperatures.
(b) Calculate the heat transfer during this process.
(c) Calculate the entropy change of the gas.

**Solution:**
Given: m = 1 kg, R = 0.287 kJ/kg·K, $c_v$ = 0.718 kJ/kg·K, $P_1$ = 500 kPa, $V_1$ = 0.05 m³, $V_2$ = 0.1 m³.

(a) Initial Temperature ($T_1$):
Using the ideal gas law, $P_1V_1 = mRT_1$.
$T_1 = \frac{P_1V_1}{mR} = \frac{(500 \text{ kPa}) \times (0.05 \text{ m}^3)}{(1 \text{ kg}) \times (0.287 \text{ kJ/kg} \cdot \text{K})} \times \frac{1 \text{ kJ}}{1 \text{ kPa} \cdot \text{m}^3}$
$T_1 = \frac{25}{0.287} \approx 87.11$ K

Since the process is isothermal, $T_2 = T_1$.
$T_2 \approx 87.11$ K

(b) Heat Transfer ($Q_{rev}$):
For an ideal gas undergoing an isothermal process, $\Delta U = 0$.
From the First Law, $Q_{rev} = W_{rev} + \Delta U$. So, $Q_{rev} = W_{rev}$.
The work done during a reversible isothermal expansion is $W_{rev} = mRT \ln\left(\frac{V_2}{V_1}\right)$.
$W_{rev} = (1 \text{ kg}) \times (0.287 \text{ kJ/kg} \cdot \text{K}) \times (87.11 \text{ K}) \times \ln\left(\frac{0.1 \text{ m}^3}{0.05 \text{ m}^3}\right)$
$W_{rev} = 25 \times \ln(2) \approx 25 \times 0.6931 \approx 17.33$ kJ

So, $Q_{rev} \approx 17.33$ kJ.

(c) Entropy Change of the Gas ($\Delta S_{sys}$):
$\Delta S_{sys} = \frac{Q_{rev}}{T_{sys}} = \frac{17.33 \text{ kJ}}{87.11 \text{ K}} \approx 0.199$ kJ/K.
Alternatively, using the ideal gas entropy change formula for isothermal process:
$\Delta S_{sys} = mR \ln\left(\frac{V_2}{V_1}\right) = (1 \text{ kg}) \times (0.287 \text{ kJ/kg} \cdot \text{K}) \times \ln\left(\frac{0.1}{0.05}\right)$
$\Delta S_{sys} = 0.287 \times \ln(2) \approx 0.287 \times 0.6931 \approx 0.199$ kJ/K.

**Question 3 (Phase Change - K3/K2):**
Consider the vaporization of saturated liquid water to saturated vapor at a constant temperature of 100°C and 101.325 kPa (standard atmospheric pressure).
At 100°C: $h_{fg} = 2257$ kJ/kg, $T_{sat} = 373.15$ K.
Assume the process is reversible.
(a) Calculate the heat transfer per unit mass.
(b) Calculate the work done per unit mass.
(c) Calculate the entropy change of the water per unit mass.

**Solution:**
Given: $T = 100^\circ\text{C} = 373.15$ K, $P = 101.325$ kPa, $h_{fg} = 2257$ kJ/kg.

(a) Heat Transfer ($q_{in}$):
During vaporization, the heat absorbed is the latent heat of vaporization.
$q_{in} = h_{fg} = 2257$ kJ/kg.

(b) Work Done ($w_{out}$):
$w_{out} = P(v_g - v_f)$. From steam tables at 100°C: $v_f = 0.001043$ m³/kg, $v_g = 1.673$ m³/kg.
$w_{out} = (101.325 \text{ kPa}) \times (1.673 - 0.001043) \text{ m}^3/\text{kg}$
$w_{out} = 101.325 \times 1.671957 \approx 169.4$ kJ/kg.

(c) Entropy Change of Water ($\Delta s_{sys}$):
$\Delta s_{sys} = \frac{q_{in}}{T_{sys}} = \frac{h_{fg}}{T_{sat}} = \frac{2257 \text{ kJ/kg}}{373.15 \text{ K}} \approx 6.049$ kJ/kg·K.

---

### 7. Important Points to Remember

*   **Reversibility is an idealization:** Real processes are always irreversible.
*   **Internally reversible:** Means no irreversibilities within the system.
*   **Isothermal:** Constant temperature.
*   **Kelvin–Planck Statement:** No heat engine can be 100% efficient; some heat must be rejected to a cold reservoir.
*   **$\Delta S_{sys} = Q_{rev}/T_{sys}$ for internally reversible isothermal processes.**
*   **For ideal gases, $\Delta U = 0$ in isothermal processes, so $Q_{rev} = W_{rev}$.**
*   **For phase changes at constant temperature and pressure, the process is isothermal and reversible if heat is transferred infinitesimally slowly.**
*   **Entropy always increases for irreversible processes, and remains constant for reversible processes ($\Delta S_{univ} \ge 0$).**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 8. Further Reading and Reference

*   **Cengel & Boles:** Chapter 6 (Second Law of Thermodynamics) - Provides a comprehensive overview of the Second Law, reversible processes, and the Carnot cycle. Section 6-4 discusses reversible work and heat transfer.
*   **P.K. Nag:** Chapter 5 (Second Law of Thermodynamics) - Covers the fundamental statements of the Second Law and their implications. Section 5.3 deals with reversible processes, including isothermal ones.
*   **Moran & Shapiro:** Chapter 6 (Second Law of Thermodynamics) - Explains the concepts of reversibility and irreversibility in detail. Section 6.3 and 6.4 are relevant.
*   **Sonntag, Borgnakke, & VanWylen:** Chapter 7 (The Second Law of Thermodynamics) - Provides a strong theoretical foundation for reversible and irreversible processes. Section 7.3 and 7.4 are directly applicable.

---