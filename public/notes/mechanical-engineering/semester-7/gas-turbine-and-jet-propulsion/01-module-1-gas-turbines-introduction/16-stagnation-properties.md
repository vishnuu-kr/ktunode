---
title: "stagnation properties"
subject: "GAS TURBINE AND JET PROPULSION"
module: "Module 1: Gas Turbines – Introduction"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463c9a"
status: "completed"
scrapedAt: "2026-05-20T18:13:44.954Z"
---
## GAS TURBINE AND JET PROPULSION: Module 1: Gas Turbines – Introduction

### Topic: Stagnation Properties

This module introduces the fundamental concepts of gas turbines. This topic focuses on understanding stagnation properties, which are crucial for analyzing fluid flow in gas turbine engines.

---

### 1. Introduction to Stagnation Properties

In fluid mechanics, especially when dealing with compressible flow, it's important to distinguish between static and stagnation properties. Stagnation properties represent the state of a fluid if it were brought to rest isentropically from its current flow condition. This concept is fundamental to understanding the energy transformations within a gas turbine.

---

### 2. Key Concepts and Definitions

*   **Static Property:** These are the properties of a fluid in its actual state of motion. They are measured by instruments moving with the fluid or by instruments fixed in a stationary frame that measure the fluid property at a point without affecting the flow.
    *   **Static Pressure ($P$):** The pressure exerted by the fluid at rest. It's the force per unit area normal to the flow.
    *   **Static Temperature ($T$):** The actual temperature of the fluid in its flowing state.
    *   **Static Density ($\rho$):** The mass per unit volume of the fluid in its flowing state.
    *   **Static Velocity ($V$):** The actual speed of the fluid relative to a stationary observer.

*   **Stagnation Property:** These properties represent the state of the fluid if it were brought to rest isentropically. This means that during the process of bringing the fluid to rest, there is no heat transfer and no irreversibility (e.g., no friction).

    *   **Stagnation Pressure ($P_0$ or $P_s$):** The pressure a fluid would have if it were brought to rest isentropically. It is also known as the total pressure.
    *   **Stagnation Temperature ($T_0$ or $T_s$):** The temperature a fluid would have if it were brought to rest isentropically. It is also known as the total temperature.
    *   **Stagnation Density ($\rho_0$ or $\rho_s$):** The density a fluid would have if it were brought to rest isentropically.
    *   **Stagnation Velocity ($V_0$ or $V_s$):** The velocity of the fluid when it is brought to rest, which is zero by definition.

---

### 3. Relationship Between Static and Stagnation Properties

The relationship between static and stagnation properties can be derived using the **steady flow energy equation** and the **isentropic process assumption**.

**Derivation for Stagnation Temperature:**

Consider a fluid element moving with velocity $V$ and having static enthalpy $h$ and static temperature $T$. If this fluid element is brought to rest isentropically, its velocity becomes zero and its enthalpy changes to $h_0$. Applying the steady flow energy equation for a single inlet and outlet with no work done:

$h + \frac{V^2}{2} = h_0 + \frac{V_0^2}{2}$

Since $V_0 = 0$, we get:

$h_0 = h + \frac{V^2}{2}$

For an ideal gas with constant specific heats: $h = c_p T$. Therefore:

$c_p T_0 = c_p T + \frac{V^2}{2}$

Dividing by $c_p$:

$T_0 = T + \frac{V^2}{2c_p}$

We know that for an ideal gas, $c_p = \frac{\gamma R}{\gamma - 1}$, where $\gamma$ is the ratio of specific heats and $R$ is the gas constant. Substituting this:

$T_0 = T + \frac{V^2}{2 \frac{\gamma R}{\gamma - 1}}$

$T_0 = T \left(1 + \frac{\gamma - 1}{2} \frac{V^2}{\gamma R T}\right)$

Using the ideal gas law, $P = \rho R T$, and the definition of sonic velocity, $a = \sqrt{\gamma R T}$, we can write $R T = P/\rho$.

$T_0 = T \left(1 + \frac{\gamma - 1}{2} \frac{V^2}{\gamma (P/\rho)}\right)$

$T_0 = T \left(1 + \frac{\gamma - 1}{2} \frac{\rho V^2}{P \gamma}\right)$

This can also be expressed in terms of Mach number ($M = V/a$):

$T_0 = T \left(1 + \frac{\gamma - 1}{2} M^2\right)$

**Important Point:** Stagnation temperature ($T_0$) is always greater than or equal to static temperature ($T$). It is equal only when the fluid is at rest ($V=0$).

**Derivation for Stagnation Pressure:**

For an isentropic process, the relationship between pressure and temperature is given by:

$\frac{P_0}{P} = \left(\frac{T_0}{T}\right)^{\frac{\gamma}{\gamma - 1}}$

Substituting the expression for $T_0/T$:

$\frac{P_0}{P} = \left(1 + \frac{\gamma - 1}{2} M^2\right)^{\frac{\gamma}{\gamma - 1}}$

**Important Point:** Stagnation pressure ($P_0$) is always greater than or equal to static pressure ($P$) for subsonic flow ($M < 1$). For supersonic flow ($M > 1$), $P_0$ is still greater than $P$ if brought to rest isentropically. However, if the flow is decelerated through a shock wave, the stagnation pressure after the shock is lower than before the shock (due to irreversibility).

**Derivation for Stagnation Density:**

Similarly, for an isentropic process:

$\frac{\rho_0}{\rho} = \left(\frac{T_0}{T}\right)^{\frac{1}{\gamma - 1}}$

Substituting the expression for $T_0/T$:

$\frac{\rho_0}{\rho} = \left(1 + \frac{\gamma - 1}{2} M^2\right)^{\frac{1}{\gamma - 1}}$

**Important Point:** Stagnation density ($\rho_0$) is always greater than or equal to static density ($\rho$).

---

### 4. Importance of Stagnation Properties in Gas Turbines

Stagnation properties are crucial in gas turbine analysis because:

*   **Energy Conservation:** Stagnation enthalpy is conserved in adiabatic processes without work. This is fundamental for analyzing compressors and turbines, where heat transfer is ideally minimized.
*   **Component Analysis:** Stagnation properties are used to characterize the overall performance of components like compressors, turbines, and combustion chambers. For instance, the rise in stagnation pressure across a compressor indicates its work output.
*   **Flow Machining:** The relationships between static and stagnation properties, especially in terms of Mach number, help in understanding and predicting the flow behavior at different points in the engine.
*   **Cycle Analysis:** Gas turbine cycles (like the Brayton cycle) are often analyzed using stagnation properties to quantify the work and heat transfers between components.

---

### 5. Measurement of Stagnation Properties

*   **Stagnation Temperature:** Measured using a **stagnation thermometer** or **total temperature probe**. This probe is designed to bring the air to rest isentropically before measurement, minimizing errors due to kinetic energy.
*   **Stagnation Pressure:** Measured using a **stagnation pressure probe** or **Pitot tube**. The Pitot tube measures the pressure at the stagnation point where the fluid is brought to rest.

---

### 6. Application Examples

Let's consider air flowing through a gas turbine engine.

**Example 1: Air entering the compressor**

Suppose at the inlet of a gas turbine compressor, the static temperature is $T = 288 \, \text{K}$ and the static pressure is $P = 101.3 \, \text{kPa}$. The air velocity is $V = 50 \, \text{m/s}$. Assume air is an ideal gas with $\gamma = 1.4$ and $c_p = 1.005 \, \text{kJ/kg} \cdot \text{K}$.

Calculate the stagnation temperature and stagnation pressure.

**Solution:**

*   **Stagnation Temperature ($T_0$):**
    $T_0 = T + \frac{V^2}{2c_p}$
    $T_0 = 288 \, \text{K} + \frac{(50 \, \text{m/s})^2}{2 \times 1005 \, \text{J/kg} \cdot \text{K}}$ (Note: $c_p$ in J/kg·K)
    $T_0 = 288 \, \text{K} + \frac{2500 \, \text{m}^2/\text{s}^2}{2010 \, \text{J/kg} \cdot \text{K}}$
    $T_0 = 288 \, \text{K} + 1.24 \, \text{K}$
    $T_0 \approx 289.24 \, \text{K}$

*   **Stagnation Pressure ($P_0$):**
    First, we need to find the Mach number ($M$).
    Speed of sound, $a = \sqrt{\gamma R T}$
    $R = c_p - c_v = c_p - \frac{c_p}{\gamma} = c_p (1 - \frac{1}{\gamma}) = 1.005 \times 10^3 \, \text{J/kg} \cdot \text{K} (1 - \frac{1}{1.4})$
    $R \approx 287 \, \text{J/kg} \cdot \text{K}$
    $a = \sqrt{1.4 \times 287 \, \text{J/kg} \cdot \text{K} \times 288 \, \text{K}}$
    $a = \sqrt{116169.6} \approx 340.8 \, \text{m/s}$

    Mach number, $M = \frac{V}{a} = \frac{50 \, \text{m/s}}{340.8 \, \text{m/s}} \approx 0.1467$

    Now, use the stagnation pressure formula:
    $\frac{P_0}{P} = \left(1 + \frac{\gamma - 1}{2} M^2\right)^{\frac{\gamma}{\gamma - 1}}$
    $\frac{P_0}{P} = \left(1 + \frac{1.4 - 1}{2} (0.1467)^2\right)^{\frac{1.4}{1.4 - 1}}$
    $\frac{P_0}{P} = \left(1 + 0.2 \times 0.02152\right)^{3.5}$
    $\frac{P_0}{P} = (1 + 0.004304)^{3.5}$
    $\frac{P_0}{P} \approx (1.004304)^{3.5} \approx 1.0150$

    $P_0 = P \times 1.0150 = 101.3 \, \text{kPa} \times 1.0150 \approx 102.8 \, \text{kPa}$

This example shows that the stagnation temperature and pressure are slightly higher than the static values due to the kinetic energy of the flow.

---

### 7. Practice Questions and Exercises

1.  Define static and stagnation properties and explain the difference between them.
2.  Derive the relationship between stagnation temperature ($T_0$) and static temperature ($T$) for an ideal gas.
3.  For air flowing at Mach 0.5 in a duct, the static temperature is 300 K. Calculate the stagnation temperature. (Assume $\gamma = 1.4$)
4.  A Pitot tube measures the stagnation pressure in a flow. If the static pressure is 150 kPa and the Mach number is 0.3, what is the stagnation pressure? (Assume $\gamma = 1.4$)
5.  Why are stagnation properties particularly important in the analysis of gas turbine engines?

---

### 8. Answers to Practice Questions

1.  **Static properties** are the properties of a fluid in its actual state of motion (e.g., static pressure, static temperature, static velocity). **Stagnation properties** represent the state of the fluid if it were brought to rest isentropically. The difference lies in the kinetic energy component: stagnation properties account for the fluid's kinetic energy being converted into internal energy upon stopping.
2.  *(See Section 3 for derivation)*
3.  $T_0 = T \left(1 + \frac{\gamma - 1}{2} M^2\right) = 300 \, \text{K} \left(1 + \frac{1.4 - 1}{2} (0.5)^2\right) = 300 \, \text{K} \left(1 + 0.2 \times 0.25\right) = 300 \, \text{K} (1 + 0.05) = 300 \, \text{K} \times 1.05 = 315 \, \text{K}$.
4.  $P_0 = P \left(1 + \frac{\gamma - 1}{2} M^2\right)^{\frac{\gamma}{\gamma - 1}} = 150 \, \text{kPa} \left(1 + \frac{1.4 - 1}{2} (0.3)^2\right)^{\frac{1.4}{1.4 - 1}} = 150 \, \text{kPa} \left(1 + 0.2 \times 0.09\right)^{3.5} = 150 \, \text{kPa} (1 + 0.018)^{3.5} \approx 150 \, \text{kPa} (1.018)^{3.5} \approx 150 \, \text{kPa} \times 1.0645 \approx 159.7 \, \text{kPa}$.
5.  Stagnation properties are important because they represent the total energy of the fluid and are conserved in adiabatic, reversible processes within the engine's components (like compressors and turbines). This allows for a consistent analysis of energy transfer and performance across different stages of the gas turbine cycle. They simplify calculations by removing the need to constantly track velocity-dependent kinetic energy in each step.

---

### 9. Important Points to Remember

*   Stagnation properties are defined for an isentropic process of bringing a fluid to rest.
*   $T_0 \ge T$, $P_0 \ge P$ (for subsonic flow), and $\rho_0 \ge \rho$. Equality holds when velocity is zero.
*   The difference between stagnation and static properties is directly related to the kinetic energy of the flow.
*   Stagnation enthalpy ($h_0$) is conserved in adiabatic processes without work.
*   The Mach number is critical for relating static and stagnation properties.
*   Stagnation properties are fundamental to analyzing the performance of gas turbine components and cycles.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 10. References and Further Reading

*   **Gas Turbines by V Ganesan (McGraw Hill Education, Third, 2017):** This textbook provides a comprehensive overview of gas turbine theory, including detailed derivations of stagnation property relationships.
*   **Turbines, Compressors and Fans by S M Yahya (McGraw Hill, Fourth, 2011):** This book offers insights into the fluid mechanics aspects relevant to gas turbine components, where stagnation properties are frequently used.
*   **Gas Turbine & Jet Rocket Propulsion by Mathur M L (Standard Publishers Distributors, First, 2010):** This text covers the broader field of propulsion, and the initial chapters on gas turbines will extensively use stagnation property concepts.
*   **Gas Turbine Theory by H. Cohen (Pearson Education, Seventh, 2019):** A highly respected text that delves deeply into the theoretical aspects of gas turbines, including advanced derivations and applications of stagnation properties.

---

### 11. Alignment with Course Outcomes

*   **CO1:** To apply the principles of thermodynamics and fluid dynamics to understand the performance and efficiency of various gas turbine cycles. (Knowledge Level: K3)
    *   This topic directly supports CO1 by introducing the thermodynamic and fluid dynamic principles (energy equation, isentropic relations) that define stagnation properties, which are essential for analyzing gas turbine cycles.
*   **CO3:** To analyse the performance of gas turbine systems by understanding the characteristics of various components. (Knowledge Level: K4)
    *   Understanding stagnation properties is fundamental to analyzing how components like compressors and turbines affect the fluid's energy state. This knowledge is critical for performance analysis.

---
**(End of Module 1: Introduction to Stagnation Properties)**