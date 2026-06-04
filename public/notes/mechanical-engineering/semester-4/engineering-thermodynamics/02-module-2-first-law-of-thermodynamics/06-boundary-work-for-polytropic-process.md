---
title: "boundary work for polytropic process"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 2: First law of thermodynamics"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f49"
status: "completed"
scrapedAt: "2026-05-20T17:53:24.629Z"
---
# Engineering Thermodynamics: Module 2 - First Law of Thermodynamics

## Topic: Boundary Work for Polytropic Process

### 1. Learning Outcomes Covered

*   **Understand the concept of boundary work:** This topic directly addresses the calculation and understanding of work done by a system as its boundary changes volume. (Relates to CO1, CO2)
*   **Analyze boundary work for specific processes:** We will focus on a particular type of process, the polytropic process, to apply the first law of thermodynamics. (Relates to CO3)
*   **Relate work to pressure-volume (P-v) diagrams:** The polytropic process is visualized and analyzed on a P-v diagram, reinforcing the graphical interpretation of work. (Relates to CO1)

### 2. Key Concepts and Definitions

*   **Work (W):** In thermodynamics, work is the energy transferred across the boundary of a system due to a force acting over a distance. For a simple compressible system, this is typically associated with volume change.
*   **Boundary Work ($W_b$):** This is the work done by or on a system as its boundary moves. It is a form of work that occurs at the system boundary.
*   **Process:** A process is a transformation of a system from one state to another.
*   **Quasi-equilibrium Process:** A process that occurs so slowly and in such a way that the system remains infinitesimally close to an equilibrium state at all times. Boundary work calculations are typically based on quasi-equilibrium processes.
*   **Polytropic Process:** A process in which the relationship between pressure and volume can be expressed in the form:
    $P V^n = C$
    where:
    *   $P$ is the pressure of the system.
    *   $V$ is the volume of the system.
    *   $n$ is the polytropic exponent (a constant that characterizes the process).
    *   $C$ is a constant.

    **Important Note:** The polytropic process is a generalization that can represent several common processes by selecting appropriate values of 'n':
    *   $n=0$: Isobaric process (constant pressure)
    *   $n=1$: Isothermal process for an ideal gas (constant temperature)
    *   $n=\gamma$ (specific heat ratio): Isentropic process for an ideal gas (constant entropy)
    *   $n=\infty$: Isochoric process (constant volume)

*   **Work Done by a System:** For a quasi-equilibrium process, the boundary work done by a system is given by the integral of pressure with respect to volume:
    $W_b = \int_{V_1}^{V_2} P dV$

### 3. Boundary Work Calculation for a Polytropic Process

We want to calculate the boundary work $W_b$ for a polytropic process where $P V^n = C$.

**Derivation:**

1.  From the polytropic relation, we can express pressure $P$ as a function of volume $V$:
    $P = \frac{C}{V^n}$

2.  Substitute this expression for $P$ into the boundary work integral:
    $W_b = \int_{V_1}^{V_2} \frac{C}{V^n} dV$

3.  Evaluate the integral. We need to consider two cases for the value of 'n':

    **Case 1: $n \neq 1$**
    $W_b = C \int_{V_1}^{V_2} V^{-n} dV$
    $W_b = C \left[ \frac{V^{-n+1}}{-n+1} \right]_{V_1}^{V_2}$
    $W_b = C \left( \frac{V_2^{1-n}}{1-n} - \frac{V_1^{1-n}}{1-n} \right)$
    $W_b = \frac{C}{1-n} (V_2^{1-n} - V_1^{1-n})$

    Since $P_1 V_1^n = C$ and $P_2 V_2^n = C$, we can substitute $C = P_1 V_1^n$ and $C = P_2 V_2^n$ into the equation. Let's use $P_2 V_2^n$ for the second term:
    $W_b = \frac{P_2 V_2^n}{1-n} V_2^{1-n} - \frac{P_1 V_1^n}{1-n} V_1^{1-n}$
    $W_b = \frac{P_2 V_2 - P_1 V_1}{1-n}$

    This is the most common form for the boundary work in a polytropic process when $n \neq 1$.

    **Case 2: $n = 1$**
    If $n=1$, the polytropic relation becomes $P V = C$. This is the definition of an isothermal process for an ideal gas.
    $W_b = \int_{V_1}^{V_2} \frac{C}{V} dV$
    $W_b = C \int_{V_1}^{V_2} \frac{1}{V} dV$
    $W_b = C [\ln V]_{V_1}^{V_2}$
    $W_b = C (\ln V_2 - \ln V_1)$
    $W_b = C \ln \left( \frac{V_2}{V_1} \right)$

    Since $C = P_1 V_1 = P_2 V_2$ for this case (isothermal process), we can write:
    $W_b = P_1 V_1 \ln \left( \frac{V_2}{V_1} \right)$
    or
    $W_b = P_2 V_2 \ln \left( \frac{V_2}{V_1} \right)$

    **Summary Formula for Polytropic Boundary Work:**
    *   For $n \neq 1$: $W_b = \frac{P_2 V_2 - P_1 V_1}{1-n}$
    *   For $n = 1$: $W_b = P_1 V_1 \ln \left( \frac{V_2}{V_1} \right)$

    **Alternative Form using Pressure Ratio:**
    For $n \neq 1$, we can also express work in terms of the pressure ratio:
    Since $P_1 V_1^n = P_2 V_2^n$, we have $\frac{V_2}{V_1} = \left( \frac{P_1}{P_2} \right)^{1/n}$.
    Substituting $V_2 = V_1 \left( \frac{P_1}{P_2} \right)^{1/n}$ into the work formula:
    $W_b = \frac{P_2 \left( V_1 \left( \frac{P_1}{P_2} \right)^{1/n} \right) - P_1 V_1}{1-n}$
    $W_b = \frac{P_1 V_1 \left( P_2 \left( \frac{P_1}{P_2} \right)^{1/n} \frac{1}{P_1} - 1 \right)}{1-n}$
    $W_b = \frac{P_1 V_1 \left( \frac{P_1^{1/n}}{P_2^{1/n-1}} - 1 \right)}{1-n}$  <- This form is less common and prone to errors.

    A more useful form using the pressure ratio comes from rewriting $P_1 V_1$ and $P_2 V_2$:
    $W_b = \frac{P_1 V_1 \left( \frac{P_2 V_2}{P_1 V_1} - 1 \right)}{1-n}$
    Since $P_1 V_1^n = P_2 V_2^n \implies \frac{V_2}{V_1} = (\frac{P_1}{P_2})^{1/n}$.
    So, $\frac{P_2 V_2}{P_1 V_1} = \frac{P_2}{P_1} \frac{V_2}{V_1} = \frac{P_2}{P_1} \left( \frac{P_1}{P_2} \right)^{1/n} = \left( \frac{P_1}{P_2} \right)^{1/n - 1} = \left( \frac{P_1}{P_2} \right)^{(1-n)/n}$.
    $W_b = \frac{P_1 V_1 \left( \left( \frac{P_1}{P_2} \right)^{(1-n)/n} - 1 \right)}{1-n}$

    It is generally easier to work with the $P_2 V_2 - P_1 V_1$ form or the $\ln$ form for $n=1$.

### 4. Visualizing Polytropic Process on P-v Diagram

The boundary work done during a process is represented by the area under the process curve on a Pressure-Volume (P-v) diagram.

*   **Polytropic Curve:** The equation $P V^n = C$ implies a curve on a P-v diagram. The shape of this curve depends on the value of 'n'.
    *   As 'n' increases, the curve becomes steeper and approaches a vertical line (isochoric process).
    *   As 'n' decreases, the curve becomes flatter and approaches a horizontal line (isobaric process).
    *   For $n=1$ (isothermal for ideal gas), the curve is a hyperbola.
    *   For $n=\gamma$ (isentropic for ideal gas), the curve is steeper than an isothermal curve.

*   **Area under the Curve:**
    *   If the volume increases ($V_2 > V_1$, expansion), the work done by the system ($W_b$) is positive. The area is above the V-axis.
    *   If the volume decreases ($V_2 < V_1$, compression), the work done by the system ($W_b$) is negative. The area is "below" the V-axis (or the integral $\int P dV$ will result in a negative value).

### 5. Examples

**Example 1: Compression of air in a cylinder**

1 kg of air (ideal gas) is compressed polytropically from $P_1 = 100$ kPa, $V_1 = 0.8$ m³ to $P_2 = 400$ kPa. Determine the work done during this process. Assume the polytropic exponent $n=1.3$.

**Given:**
*   Mass of air ($m$) = 1 kg
*   Initial Pressure ($P_1$) = 100 kPa
*   Initial Volume ($V_1$) = 0.8 m³
*   Final Pressure ($P_2$) = 400 kPa
*   Polytropic exponent ($n$) = 1.3

**To find:** Boundary work ($W_b$)

**Solution:**
Since $n=1.3 \neq 1$, we use the formula: $W_b = \frac{P_2 V_2 - P_1 V_1}{1-n}$.
First, we need to find $V_2$. We use the polytropic relation $P_1 V_1^n = P_2 V_2^n$:
$V_2^n = V_1^n \frac{P_1}{P_2}$
$V_2 = V_1 \left( \frac{P_1}{P_2} \right)^{1/n}$
$V_2 = 0.8 \text{ m}^3 \left( \frac{100 \text{ kPa}}{400 \text{ kPa}} \right)^{1/1.3}$
$V_2 = 0.8 \text{ m}^3 (0.25)^{1/1.3}$
$V_2 = 0.8 \text{ m}^3 (0.25)^{0.7692}$
$V_2 = 0.8 \text{ m}^3 \times 0.3492$
$V_2 \approx 0.2794$ m³

Now, calculate the work:
$W_b = \frac{(400 \text{ kPa} \times 0.2794 \text{ m}^3) - (100 \text{ kPa} \times 0.8 \text{ m}^3)}{1 - 1.3}$
$W_b = \frac{111.76 \text{ kPa} \cdot \text{m}^3 - 80 \text{ kPa} \cdot \text{m}^3}{-0.3}$
$W_b = \frac{31.76 \text{ kPa} \cdot \text{m}^3}{-0.3}$
Since $1 \text{ kPa} \cdot \text{m}^3 = 1 \text{ kJ}$,
$W_b = \frac{31.76 \text{ kJ}}{-0.3}$
$W_b \approx -105.87$ kJ

The negative sign indicates that work is done *on* the system (compression).

**Example 2: Isothermal Expansion of Steam**

Steam at 1 MPa, 200°C expands isothermally to a specific volume of 0.2576 m³/kg. If the initial specific volume is 0.02327 m³/kg, determine the boundary work done per unit mass. (This is a polytropic process with n=1).

**Given:**
*   Initial Pressure ($P_1$) = 1 MPa = 1000 kPa
*   Initial specific volume ($v_1$) = 0.02327 m³/kg
*   Final specific volume ($v_2$) = 0.2576 m³/kg
*   Process: Isothermal expansion ($n=1$)

**To find:** Boundary work per unit mass ($w_b$)

**Solution:**
For an isothermal process ($n=1$), the work per unit mass is: $w_b = P_1 v_1 \ln \left( \frac{v_2}{v_1} \right)$.
$w_b = (1000 \text{ kPa}) \times (0.02327 \text{ m}^3/\text{kg}) \times \ln \left( \frac{0.2576 \text{ m}^3/\text{kg}}{0.02327 \text{ m}^3/\text{kg}} \right)$
$w_b = (23.27 \text{ kPa} \cdot \text{m}^3/\text{kg}) \times \ln (11.069)$
$w_b = (23.27 \text{ kJ}/\text{kg}) \times 2.395$
$w_b \approx 55.73$ kJ/kg

The positive sign indicates work is done *by* the system (expansion).

### 6. Important Points to Remember

*   **Quasi-equilibrium assumption is crucial:** The formulas derived for boundary work are valid for quasi-equilibrium processes where the system is always near an equilibrium state.
*   **P-v diagram:** Always visualize the process on a P-v diagram to understand whether work is positive (expansion) or negative (compression).
*   **Polytropic exponent 'n':** Recognize the significance of 'n' and how it relates to different thermodynamic processes.
*   **Units:** Be consistent with units, especially when converting between kPa·m³ and kJ. 1 kPa·m³ = 1 kJ.
*   **Work sign convention:** Work done *by* the system is positive, and work done *on* the system is negative.
*   **Ideal Gas Assumption:** While the polytropic process $PV^n = C$ is general, the specific formula $W_b = P_1 V_1 \ln(V_2/V_1)$ for $n=1$ is strictly valid for ideal gases undergoing an isothermal process. For real gases or other substances, the isothermal work calculation might be different. However, the general $W_b = \int P dV$ and the derivation for $n \neq 1$ apply to any substance undergoing a polytropic process.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 7. Textbook and Reference Material Alignment

*   **Cengel & Boles, "Thermodynamics: An Engineering Approach":** This textbook extensively covers the first law of thermodynamics and introduces various processes including polytropic processes. Chapter 4 likely details boundary work and its calculation. They emphasize the graphical interpretation on P-v diagrams.
*   **P.K. Nag, "Engineering Thermodynamics":** Similar to Cengel, Nag's book provides a thorough treatment of work, including boundary work for different processes. The polytropic process is a standard topic covered with clear derivations.
*   **Moran & Shapiro, "Fundamentals of Engineering Thermodynamics":** Moran and Shapiro are known for their rigorous approach. They will cover boundary work with a focus on the integral definition and its application to specific process curves like the polytropic process, often linking it to the first law.
*   **Sonntag, Borgnakke, & VanWylen, "Fundamentals of Thermodynamics":** This classic text provides a strong foundation. Expect detailed explanations of work, its relation to state changes, and specific process analyses, including the polytropic process.
*   **Ansermet & Brechet, "Thermodynamics: Principles and Applications":** This book might offer a more modern or theoretical perspective but will undoubtedly cover the fundamental definition and calculation of boundary work for common processes like the polytropic one, integrating it within broader thermodynamic principles.

The formula $W_b = \frac{P_2 V_2 - P_1 V_1}{1-n}$ for $n \neq 1$ and $W_b = P_1 V_1 \ln(\frac{V_2}{V_1})$ for $n=1$ are standard derivations found in all these core thermodynamics texts when discussing work done during a polytropic process.

### 8. Course Outcome Alignment

*   **CO1: Understand basic concepts of thermodynamics (K1, K2):** This topic reinforces concepts like work, pressure, volume, and processes, which are fundamental to thermodynamics. Understanding the meaning of the polytropic exponent 'n' also falls under this outcome.
*   **CO2: Understand the laws of thermodynamics (K1, K2):** While this topic focuses on the calculation of work, it's a component of the first law of thermodynamics (energy balance). Understanding how work is transferred in different processes is crucial for applying the first law.
*   **CO3: Conduct first law analysis of open and closed systems (K3):** The calculation of boundary work is a direct application in first law analysis, especially for closed systems. Knowing how to calculate $W_b$ is essential for determining the net energy transfer for a system undergoing a polytropic process.

### 9. Practice Questions/Exercises

**Question 1:**
A gas undergoes a polytropic process $PV^{1.25} = \text{constant}$. If the initial pressure is 200 kPa, initial volume is 0.5 m³, and the final pressure is 1000 kPa, calculate the work done during the process.

**Answer 1:**
First, find the final volume $V_2$:
$P_1 V_1^{1.25} = P_2 V_2^{1.25}$
$V_2 = V_1 \left( \frac{P_1}{P_2} \right)^{1/1.25} = 0.5 \text{ m}^3 \left( \frac{200}{1000} \right)^{1/1.25} = 0.5 \text{ m}^3 (0.2)^{0.8} = 0.5 \text{ m}^3 \times 0.2639 = 0.13195 \text{ m}^3$

Now, calculate the work ($n=1.25 \neq 1$):
$W_b = \frac{P_2 V_2 - P_1 V_1}{1-n} = \frac{(1000 \text{ kPa} \times 0.13195 \text{ m}^3) - (200 \text{ kPa} \times 0.5 \text{ m}^3)}{1 - 1.25}$
$W_b = \frac{131.95 \text{ kJ} - 100 \text{ kJ}}{-0.25} = \frac{31.95 \text{ kJ}}{-0.25} = -127.8 \text{ kJ}$

**Question 2:**
10 kg of steam undergoes a polytropic expansion process where $PV^{1.1} = \text{constant}$. The initial state is 400°C and 10 MPa, and the final state is 0.02 m³/kg. Calculate the boundary work done by the steam. (You may need steam tables or software for properties).

**Answer 2:**
*This question requires using steam tables for accurate property values, which are not directly provided in the question for illustrative purposes here. The general approach is outlined below.*

1.  **Find initial specific volume ($v_1$)** from steam tables at 400°C and 10 MPa. Let's assume, for example, $v_1 = 0.03266$ m³/kg.
2.  **Calculate initial total volume ($V_1$)**: $V_1 = m \times v_1 = 10 \text{ kg} \times 0.03266 \text{ m}^3/\text{kg} = 0.3266 \text{ m}^3$.
3.  **Calculate final total volume ($V_2$)**: $V_2 = m \times v_2 = 10 \text{ kg} \times 0.02 \text{ m}^3/\text{kg} = 0.2 \text{ m}^3$.
4.  **Calculate the work ($n=1.1 \neq 1$)**:
    $W_b = \frac{P_2 V_2 - P_1 V_1}{1-n}$
    Here, $P_1 = 10 \text{ MPa} = 10000 \text{ kPa}$.
    We need to find $P_2$ using $P_1 V_1^n = P_2 V_2^n$.
    $P_2 = P_1 \left( \frac{V_1}{V_2} \right)^n = 10000 \text{ kPa} \left( \frac{0.3266 \text{ m}^3}{0.2 \text{ m}^3} \right)^{1.1}$
    $P_2 = 10000 \text{ kPa} (1.633)^{1.1} = 10000 \text{ kPa} \times 1.740 = 17400 \text{ kPa} = 17.4 \text{ MPa}$.

    Now, calculate the work:
    $W_b = \frac{(17400 \text{ kPa} \times 0.2 \text{ m}^3) - (10000 \text{ kPa} \times 0.3266 \text{ m}^3)}{1 - 1.1}$
    $W_b = \frac{3480 \text{ kJ} - 3266 \text{ kJ}}{-0.1} = \frac{214 \text{ kJ}}{-0.1} = -2140 \text{ kJ}$

    The negative sign indicates compression, so work is done on the steam.

---
This concludes the study notes for Boundary Work in Polytropic Processes. Remember to refer to your textbooks for more detailed explanations and examples.