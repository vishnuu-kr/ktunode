---
title: "Adiabatic energy equation, various regions of flow, adiabatic ellipse"
subject: "COMPRESSIBLE FLUID FLOW"
module: "Module 1: Fundamentals of compressible flow: Various regimes of flow, Reynolds transport theorem"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf48044637d9"
status: "completed"
scrapedAt: "2026-05-20T18:03:34.576Z"
---
# COMPRESSIBLE FLUID FLOW: Module 1 - Fundamentals of Compressible Flow

## Topic: Adiabatic Energy Equation, Various Regions of Flow, Adiabatic Ellipse

**Course Outcomes Addressed:** CO1 (K3)

**Learning Outcomes Covered:**
*   Understand the fundamental energy equation for adiabatic flow.
*   Identify and differentiate between various flow regimes based on Mach number.
*   Understand the concept of the adiabatic ellipse and its significance.

---

### 1. Fundamentals of Compressible Flow

Compressible flow is fluid flow where density changes significantly. This is typically observed at high velocities, particularly those approaching or exceeding the speed of sound in the fluid. Unlike incompressible flow, where density is assumed constant, compressible flow requires accounting for the coupling between velocity, pressure, and density.

**Key Concepts:**

*   **Mach Number ($M$):** The ratio of the fluid velocity ($V$) to the speed of sound in the fluid ($a$).
    $$M = \frac{V}{a}$$
    The speed of sound ($a$) is dependent on the fluid properties, specifically its temperature:
    $$a = \sqrt{\gamma RT}$$
    where:
    *   $\gamma$ is the ratio of specific heats (isentropic exponent)
    *   $R$ is the specific gas constant
    *   $T$ is the absolute temperature

---

### 2. Various Regimes of Flow (Based on Mach Number)

The behavior of compressible flow is highly dependent on the Mach number. The flow is categorized into distinct regimes:

*   **Subsonic Flow ($M < 1$):**
    *   Fluid velocity is less than the speed of sound.
    *   Changes in flow area primarily affect velocity and pressure in the expected way: increasing area (diverging) leads to deceleration and pressure rise; decreasing area (converging) leads to acceleration and pressure drop.
    *   **Important Point:** In subsonic flow, a converging duct accelerates the flow, and a diverging duct decelerates it.

*   **Sonic Flow ($M = 1$):**
    *   Fluid velocity is exactly equal to the speed of sound.
    *   This occurs at the throat of a nozzle where the area is minimal.
    *   At sonic conditions, density, pressure, and temperature also reach specific values.

*   **Supersonic Flow ($M > 1$):**
    *   Fluid velocity is greater than the speed of sound.
    *   The behavior of flow in ducts reverses: increasing area (diverging) leads to acceleration and pressure drop; decreasing area (converging) leads to deceleration and pressure rise.
    *   **Important Point:** In supersonic flow, a diverging duct accelerates the flow, and a converging duct decelerates it.

*   **Transonic Flow ($M \approx 1$, typically $0.8 < M < 1.2$):**
    *   This regime involves a mixture of subsonic and supersonic regions within the flow.
    *   Shock waves can form, causing rapid changes in flow properties.
    *   It is a complex regime to analyze due to the presence of both types of flow behavior and shock phenomena.

*   **Hypersonic Flow ($M > 5$):**
    *   Very high Mach numbers.
    *   Characterized by significant viscous effects, strong shock waves, high dissociation, and ionization of the gas.
    *   Thermodynamic properties of the gas can change significantly.

**Reference:** Shapiro, Vol. I, Chapter 1 discusses the fundamental concepts of compressible flow and introduces the Mach number and its significance in defining flow regimes. Yahya, Chapter 1 also covers these basic definitions.

---

### 3. Adiabatic Energy Equation

The adiabatic energy equation relates the temperature, velocity, and pressure changes in a fluid undergoing adiabatic flow. Adiabatic flow means no heat transfer into or out of the fluid ($\dot{Q} = 0$).

**Derivation:**

Consider a steady flow of a perfect gas through a control volume. The first law of thermodynamics for an open system (steady flow energy equation) is:

$$ \dot{m}(h_1 + \frac{V_1^2}{2}) + \dot{Q} = \dot{m}(h_2 + \frac{V_2^2}{2}) + \dot{W} $$

For adiabatic flow, $\dot{Q} = 0$. For flow without work extraction other than flow work (e.g., no shaft work), $\dot{W} = 0$.
Thus, the equation simplifies to:

$$ h_1 + \frac{V_1^2}{2} = h_2 + \frac{V_2^2}{2} $$

This implies that the stagnation enthalpy remains constant for adiabatic flow. For a perfect gas, enthalpy is a function of temperature only: $h = c_p T$.

$$ c_p T_1 + \frac{V_1^2}{2} = c_p T_2 + \frac{V_2^2}{2} $$

Dividing by $c_p$:

$$ T_1 + \frac{V_1^2}{2c_p} = T_2 + \frac{V_2^2}{2c_p} $$

This is the **adiabatic energy equation in terms of temperature and velocity.**

We can express $c_p$ in terms of the gas constant $R$ and the ratio of specific heats $\gamma$: $c_p = \frac{\gamma R}{\gamma - 1}$.

$$ T + \frac{V^2}{2 \frac{\gamma R}{\gamma - 1}} = T_{0} $$

$$ T + \frac{(\gamma - 1)V^2}{2\gamma R} = T_{0} $$

where $T_0$ is the stagnation temperature, which is constant for adiabatic flow.

We also know that $a^2 = \gamma RT$, so $R = a^2 / (\gamma T)$. Substituting this into the equation:

$$ T + \frac{(\gamma - 1)V^2}{2\gamma (a^2 / (\gamma T))} = T_0 $$

$$ T + \frac{(\gamma - 1)V^2 T}{2a^2} = T_0 $$

Factor out $T$:

$$ T \left( 1 + \frac{\gamma - 1}{2} \frac{V^2}{a^2} \right) = T_0 $$

$$ T \left( 1 + \frac{\gamma - 1}{2} M^2 \right) = T_0 $$

This equation shows how static temperature ($T$) relates to stagnation temperature ($T_0$) and Mach number ($M$) for adiabatic flow.

**Relationship to Pressure:**

For an isentropic process (which is a specific type of adiabatic flow where entropy is constant), the relationship between static temperature and static pressure is:

$$ \frac{T}{T_0} = \left(\frac{P}{P_0}\right)^{\frac{\gamma-1}{\gamma}} $$

Substituting the expression for $T/T_0$:

$$ \left(\frac{P}{P_0}\right)^{\frac{\gamma-1}{\gamma}} = \left(1 + \frac{\gamma - 1}{2} M^2\right)^{-1} $$

$$ \frac{P_0}{P} = \left(1 + \frac{\gamma - 1}{2} M^2\right)^{\frac{\gamma}{\gamma - 1}} $$

This equation relates stagnation pressure ($P_0$) to static pressure ($P$) and Mach number ($M$).

**Key Points:**

*   The adiabatic energy equation establishes a direct link between kinetic energy (velocity) and thermal energy (temperature) of a fluid in adiabatic flow.
*   Stagnation enthalpy (or stagnation temperature for a perfect gas) is conserved in adiabatic flow.
*   This equation is crucial for relating static properties (pressure, temperature, density) to stagnation properties and Mach number.

**Reference:** Shapiro, Vol. I, Chapter 3 discusses the energy equation and its application to adiabatic flow. Yahya, Chapter 2 also covers the energy equation and its relation to properties. Rathakrishnan, Chapter 2 delves into the energy equation for gases.

---

### 4. Adiabatic Ellipse

The adiabatic ellipse is a graphical representation that illustrates the relationship between stagnation temperature ($T_0$) and stagnation enthalpy ($h_0$) for different flow conditions. More generally, it's a concept used to visualize the limits and possibilities of isentropic flow conditions on a property diagram, particularly when considering how flow might transition between subsonic and supersonic regimes.

In the context of *isentropic* adiabatic flow, which is a common scenario analyzed in compressible fluid dynamics, the adiabat is a curve on a temperature-entropy (T-s) diagram. However, the term "adiabatic ellipse" is more directly related to visualizing the interplay of energy and Mach number.

Let's consider the energy equation again: $T_0 = T \left( 1 + \frac{\gamma - 1}{2} M^2 \right)$.

If we consider a process where a fluid is expanded isentropically from a stagnation state $(T_0, P_0)$, as the Mach number increases, the static temperature ($T$) decreases, and the static pressure ($P$) decreases.

The "adiabatic ellipse" can be interpreted as a visualization of the possible states of a fluid in an adiabatic flow process on a $T_0$ vs. $M$ plot (or implicitly through the energy equation).

Let's analyze the adiabatic energy equation from a different perspective:

$$ T_0 = T + \frac{V^2}{2c_p} $$

We know that $V = aM$ and $a = \sqrt{\gamma RT}$.

$$ T_0 = T + \frac{(\sqrt{\gamma RT}) M^2}{2 c_p} $$

$$ T_0 = T + \frac{\gamma R T M^2}{2 c_p} $$

Substitute $c_p = \frac{\gamma R}{\gamma - 1}$:

$$ T_0 = T + \frac{\gamma R T M^2}{2 \frac{\gamma R}{\gamma - 1}} $$

$$ T_0 = T + \frac{(\gamma - 1) T M^2}{2} $$

$$ T_0 = T \left( 1 + \frac{\gamma - 1}{2} M^2 \right) $$

This equation relates the static temperature $T$ to the stagnation temperature $T_0$ and the Mach number $M$.

**Interpretation of "Adiabatic Ellipse":**

While not a strict geometric ellipse in a standard Cartesian coordinate system, the term "adiabatic ellipse" is sometimes used in certain contexts (e.g., specific graphical methods or older texts) to represent the possible combinations of static and stagnation properties during an adiabatic process.

A more common visualization related to the energy equation in compressible flow involves plotting property variations against Mach number. For an isentropic process from a stagnation state:

*   As $M$ increases from 0 to 1 (subsonic), $T$ decreases, $P$ decreases, and density decreases.
*   At $M=1$, $T$, $P$, and density reach sonic values.
*   As $M$ increases from 1 onwards (supersonic), $T$ continues to decrease, $P$ continues to decrease, and density continues to decrease.

The critical point is that the stagnation temperature $T_0$ remains constant. The equation $T_0 = T \left( 1 + \frac{\gamma - 1}{2} M^2 \right)$ shows how the static temperature $T$ must decrease as $M$ increases to maintain a constant $T_0$.

The concept of an "ellipse" might arise from plotting $T$ against $M^2$ or related variables, where the equation describes a curve with specific characteristics. However, it's essential to refer to the specific context where this term is used in your textbooks.

**Example Interpretation (Conceptual):**

Imagine a plot where the x-axis represents some transformation of the Mach number (e.g., $M^2$) and the y-axis represents the static temperature ($T$). The stagnation temperature ($T_0$) is a constant. The adiabatic energy equation describes a curve on this plot. If you were to extend this to consider relationships involving other properties like pressure, the combined graphical representation might be referred to as an "adiabatic ellipse" in some literature.

A more common and useful graphical tool in compressible flow is the **Mollier diagram** (enthalpy-entropy diagram) or plotting dimensionless temperature, pressure, and density against Mach number.

**Reference:** While "adiabatic ellipse" might not be a universally standard term in all introductory compressible flow texts, the underlying principle is the adiabatic energy equation and its implications for flow properties. Shapiro's Vol. I and Rathakrishnan's "Gas Dynamics" might discuss graphical interpretations of these relationships. If the term is specifically highlighted in your course material, refer to those specific sections.

**Key Point:** The core idea of the "adiabatic ellipse" relates to the constrained relationship between static and stagnation properties (especially temperature) dictated by the adiabatic energy equation as the flow Mach number varies. It highlights how kinetic energy and thermal energy are interchanged while total energy remains constant in adiabatic flow.

---

### 5. Practice Questions and Exercises

**Question 1:**
Air at a stagnation temperature of 300 K and a static temperature of 250 K is flowing. Calculate the Mach number of the flow. Assume $\gamma = 1.4$.

**Solution:**
Using the adiabatic energy equation:
$T_0 = T \left( 1 + \frac{\gamma - 1}{2} M^2 \right)$
$300 = 250 \left( 1 + \frac{1.4 - 1}{2} M^2 \right)$
$\frac{300}{250} = 1 + \frac{0.4}{2} M^2$
$1.2 = 1 + 0.2 M^2$
$0.2 = 0.2 M^2$
$M^2 = 1$
$M = 1$

**Answer:** The Mach number of the flow is 1.0 (sonic).

**Question 2:**
In a nozzle, air expands isentropically from stagnation conditions of $P_0 = 10$ atm and $T_0 = 400$ K. If the Mach number at a certain point is 2.0, calculate the static pressure and static temperature at that point. Assume $\gamma = 1.4$.

**Solution:**
First, calculate the static temperature using the adiabatic energy equation:
$T_0 = T \left( 1 + \frac{\gamma - 1}{2} M^2 \right)$
$400 = T \left( 1 + \frac{1.4 - 1}{2} (2.0)^2 \right)$
$400 = T \left( 1 + \frac{0.4}{2} \times 4 \right)$
$400 = T (1 + 0.2 \times 4)$
$400 = T (1 + 0.8)$
$400 = 1.8 T$
$T = \frac{400}{1.8} = 222.22$ K

Next, calculate the static pressure using the isentropic relation:
$\frac{P_0}{P} = \left(1 + \frac{\gamma - 1}{2} M^2\right)^{\frac{\gamma}{\gamma - 1}}$
$\frac{10}{P} = \left(1 + \frac{1.4 - 1}{2} (2.0)^2\right)^{\frac{1.4}{1.4 - 1}}$
$\frac{10}{P} = \left(1 + 0.2 \times 4\right)^{\frac{1.4}{0.4}}$
$\frac{10}{P} = (1.8)^{3.5}$
$\frac{10}{P} \approx 10.17$
$P = \frac{10}{10.17} \approx 0.983$ atm

**Answer:** The static temperature is approximately 222.22 K, and the static pressure is approximately 0.983 atm.

**Question 3:**
Explain the difference in flow behavior in a converging duct for subsonic and supersonic flow.

**Answer:**
*   **Subsonic Flow ($M < 1$):** In a converging duct, the cross-sectional area decreases. For subsonic flow, this causes the fluid to accelerate, and the pressure decreases. This is consistent with the continuity equation and Bernoulli's principle for incompressible flow.
*   **Supersonic Flow ($M > 1$):** In a converging duct, the cross-sectional area decreases. For supersonic flow, however, this causes the fluid to decelerate, and the pressure increases. This reversal in behavior is a hallmark of compressible flow and can be explained by the adiabatic energy equation and the fact that density changes significantly. As the fluid decelerates, its kinetic energy is converted into thermal energy, increasing its temperature and, consequently, its pressure.

---

### 6. Important Points to Remember

*   **Mach Number is Key:** The Mach number ($M$) is the primary parameter defining the flow regime (subsonic, sonic, supersonic, transonic, hypersonic).
*   **Adiabatic Energy Equation:** $T_0 = T \left( 1 + \frac{\gamma - 1}{2} M^2 \right)$ is fundamental for relating static and stagnation temperatures. Stagnation enthalpy (or temperature for a perfect gas) is conserved in adiabatic flow.
*   **Duct Behavior Reversal:** The primary difference between subsonic and supersonic flow behavior in area changes is that converging passages accelerate subsonic flow and decelerate supersonic flow, while diverging passages decelerate subsonic flow and accelerate supersonic flow.
*   **Isentropic Flow:** Isentropic flow is a specific type of adiabatic flow where entropy is constant. This allows for the use of isentropic relations to link pressure, temperature, and density changes with Mach number.
*   **Stagnation Properties:** Stagnation properties (e.g., $P_0, T_0, \rho_0$) represent the properties the fluid would have if it were brought to rest isentropically from its current state.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 7. Textbook and Reference Incorporation

*   **Shapiro, A.H. (1977):** Provides a rigorous foundation for compressible flow, emphasizing the energy equation and the physical interpretation of flow regimes. Chapter 1 introduces Mach number and flow regimes, and Chapter 3 covers the energy equation.
*   **Yahya, S. M. (2023):** Offers a clear and accessible introduction, covering basic definitions, Mach number classification, and the energy equation. Chapter 1 is foundational, and Chapter 2 discusses the energy equation.
*   **Rathakrishnan, E. (2021):** Presents a comprehensive view of gas dynamics, including detailed derivations of energy equations and discussions on flow behavior. Chapter 2 is particularly relevant for the energy equation.
*   **Anderson, J.D. (2021):** Provides historical context and in-depth analysis, reinforcing the concepts of flow regimes and the implications of the energy equation.
*   **Balachandran, P. (2006) & Liepmann & Roshako (2002):** Offer alternative perspectives and additional examples, useful for deepening understanding of the fundamental principles.

The notes above draw upon the core concepts of the adiabatic energy equation and the classification of flow regimes as presented in these primary texts. The relationship between Mach number, temperature, and pressure is central, as is the concept of conserved stagnation enthalpy in adiabatic processes. The "adiabatic ellipse" concept, while potentially less universally termed, refers to the graphical representation of these constrained relationships.