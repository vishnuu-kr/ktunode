---
title: "moving boundary work"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 2: First law of thermodynamics"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f48"
status: "completed"
scrapedAt: "2026-05-20T17:53:23.907Z"
---
# Engineering Thermodynamics: Module 2 - First Law of Thermodynamics

## Topic: Moving Boundary Work

---

### **Learning Outcomes:**

*   Understand the concept of boundary work in thermodynamic systems.
*   Calculate boundary work for various processes involving a moving boundary.
*   Apply the first law of thermodynamics to systems undergoing boundary work.
*   Relate boundary work to changes in system volume and external pressure.
*   Recognize the significance of the path taken during a process on the amount of boundary work done.

---

### **1. Introduction to Boundary Work (Moving Boundary Work)**

Boundary work, also known as expansion or compression work, is a form of work done by or on a closed system due to a change in its volume. This type of work is specifically associated with the movement of the system boundary. It's a fundamental concept when applying the first law of thermodynamics to systems like pistons, cylinders, turbines, and compressors.

*   **Definition:** Boundary work ($W_b$) is the work done by a closed system as its boundary moves due to a change in volume against an external pressure.
*   **KNOWLEDGE LEVEL:** K1 (Understanding concepts)
*   **REFERENCE:** Cengel & Boles (2011), Chapter 4: "Energy Analysis of Closed Systems"

---

### **2. Mechanism of Boundary Work**

Imagine a gas contained within a cylinder fitted with a movable piston. When the gas expands, it pushes the piston outwards, doing work on the surroundings. Conversely, when the gas is compressed, the surroundings do work on the gas.

*   **System Boundary:** In these cases, the boundary of the system is the surface of the gas itself, which changes shape and volume as the piston moves.
*   **Work Transfer:** Work is transferred across this moving boundary.
*   **Sign Convention:**
    *   Work done *by* the system (expansion) is **positive** ($W_b > 0$).
    *   Work done *on* the system (compression) is **negative** ($W_b < 0$).
*   **KNOWLEDGE LEVEL:** K1 (Understanding concepts)
*   **REFERENCE:** P.K. Nag (2017), Chapter 3: "First Law of Thermodynamics"

---

### **3. Mathematical Formulation of Boundary Work**

Consider a small displacement $dx$ of the piston for a system with a cross-sectional area $A$. The pressure of the gas inside is $P$.

*   **Force exerted by the gas:** $F = P \cdot A$
*   **Work done during displacement $dx$:** $\delta W_b = F \cdot dx = (P \cdot A) \cdot dx = P \cdot (A \cdot dx)$
*   Since $dV = A \cdot dx$ (change in volume), the infinitesimal boundary work is:
    $$ \delta W_b = P \, dV $$

To find the total boundary work done during a process from an initial state 1 to a final state 2, we integrate this expression:

$$ W_b = \int_{V_1}^{V_2} P \, dV $$

This integral represents the area under the process curve on a $P-V$ diagram.

*   **KNOWLEDGE LEVEL:** K2 (Understanding concepts), K3 (Conducting analysis)
*   **REFERENCE:** Cengel & Boles (2011), Chapter 4.3: "Moving Boundary Work"

---

### **4. Boundary Work for Different Processes**

The amount of boundary work done depends on how the pressure $P$ changes with volume $V$ during the process. This is why the path on a $P-V$ diagram is crucial.

#### **4.1. Constant Pressure Process (Isobaric Process)**

If the pressure $P$ remains constant during the process:

$$ W_b = \int_{V_1}^{V_2} P \, dV = P \int_{V_1}^{V_2} dV = P (V_2 - V_1) $$
Or,
$$ W_b = P \Delta V $$

*   **Example:** A gas in a cylinder is heated at constant pressure, causing it to expand and push a piston.
*   **KNOWLEDGE LEVEL:** K3 (Conducting analysis)
*   **REFERENCE:** P.K. Nag (2017), Chapter 3.3: "Work done in different processes"

#### **4.2. Constant Volume Process (Isochoric Process)**

If the volume $V$ remains constant during the process ($V_1 = V_2$):

$$ W_b = \int_{V_1}^{V_2} P \, dV $$
Since $dV = 0$,
$$ W_b = 0 $$

*   **Important Note:** No boundary work is done when the volume of the system does not change.
*   **KNOWLEDGE LEVEL:** K3 (Conducting analysis)

#### **4.3. Polytropic Process**

A polytropic process is a general type of process that can be described by the relation $PV^n = \text{constant}$, where $n$ is the polytropic exponent.

From $PV^n = C$, we have $P = C V^{-n}$. Substituting this into the work integral:

$$ W_b = \int_{V_1}^{V_2} P \, dV = \int_{V_1}^{V_2} C V^{-n} \, dV $$
$$ W_b = C \int_{V_1}^{V_2} V^{-n} \, dV $$

**Case 1: $n \neq 1$**
$$ W_b = C \left[ \frac{V^{-n+1}}{-n+1} \right]_{V_1}^{V_2} = C \left( \frac{V_2^{1-n} - V_1^{1-n}}{1-n} \right) $$
Since $C = P_1 V_1^n = P_2 V_2^n$:
$$ W_b = \frac{P_2 V_2^n V_2^{1-n} - P_1 V_1^n V_1^{1-n}}{1-n} $$
$$ W_b = \frac{P_2 V_2 - P_1 V_1}{1-n} \quad (\text{for } n \neq 1) $$

**Case 2: $n = 1$ (Isothermal Process for Ideal Gas)**
If $n=1$, then $PV = \text{constant}$. For an ideal gas, $PV = mRT$. So, $PV = C$ corresponds to an isothermal process.

$$ W_b = \int_{V_1}^{V_2} P \, dV = \int_{V_1}^{V_2} \frac{C}{V} \, dV $$
$$ W_b = C \ln \left( \frac{V_2}{V_1} \right) $$
Since $C = P_1 V_1 = P_2 V_2$:
$$ W_b = P_1 V_1 \ln \left( \frac{V_2}{V_1} \right) = P_2 V_2 \ln \left( \frac{V_2}{V_1} \right) $$

*   **Important Note:** The polytropic process is a versatile model that can represent various processes:
    *   $n=0$: Isobaric process ($PV^0 = P = \text{constant}$)
    *   $n=1$: Isothermal process (for ideal gas, $PV = \text{constant}$)
    *   $n=\gamma$ (or $k$): Adiabatic process for ideal gas ($PV^\gamma = \text{constant}$)
    *   $n \to \infty$: Isochoric process ($PV^\infty = \text{constant} \implies V = \text{constant}$)
*   **KNOWLEDGE LEVEL:** K3 (Conducting analysis)
*   **REFERENCE:** Cengel & Boles (2011), Chapter 4.3: "Moving Boundary Work"

#### **4.4. Adiabatic Process**

For an adiabatic process of an ideal gas, $PV^\gamma = \text{constant}$, where $\gamma$ is the ratio of specific heats ($c_p/c_v$). This is a special case of the polytropic process with $n = \gamma$.

$$ W_b = \frac{P_2 V_2 - P_1 V_1}{1-\gamma} $$

*   **KNOWLEDGE LEVEL:** K3 (Conducting analysis)
*   **REFERENCE:** P.K. Nag (2017), Chapter 3.3: "Work done in different processes"

#### **4.5. Isothermal Process (General)**

For a general substance undergoing an isothermal process, the relationship between $P$ and $V$ is not simply $PV = C$. The integral $\int P \, dV$ needs to be evaluated based on the specific equation of state for the substance. For ideal gases, it simplifies to $P_1V_1 \ln(V_2/V_1)$.

*   **KNOWLEDGE LEVEL:** K3 (Conducting analysis)

---

### **5. First Law Analysis with Boundary Work**

The first law of thermodynamics for a closed system is expressed as:

$$ Q - W = \Delta U $$
where:
*   $Q$ is the net heat transfer *to* the system.
*   $W$ is the net work transfer *from* the system.
*   $\Delta U$ is the change in internal energy of the system.

For a closed system undergoing boundary work, the total work $W$ is often primarily the boundary work $W_b$. If other forms of work (like electrical work, shaft work) are negligible or absent, then $W \approx W_b$.

$$ Q - W_b = \Delta U $$

If the process involves heat transfer ($Q$) and boundary work ($W_b$), the first law equation helps us determine the change in internal energy.

*   **KNOWLEDGE LEVEL:** K3 (Conducting analysis)
*   **REFERENCE:** Cengel & Boles (2011), Chapter 4.1: "The First Law of Thermodynamics"

---

### **6. $P-V$ Diagram and Boundary Work**

The area under the $P-V$ curve represents the boundary work done.

*   **Expansion:** When a system expands ($V_2 > V_1$), the area under the curve is positive, indicating work done by the system.
*   **Compression:** When a system is compressed ($V_2 < V_1$), the area under the curve is negative (if considering the integral from $V_1$ to $V_2$), indicating work done on the system.

Comparing different processes between the same initial and final states on a $P-V$ diagram, the process with the largest area under the curve will have the most work done by the system (for expansion) or the least work done on the system (for compression).

*   **Example:** For expansion from $V_1$ to $V_2$:
    *   An isobaric process ($P = \text{constant}$) will generally involve more work than an isothermal process ($PV = C$), which will involve more work than an adiabatic process ($PV^\gamma = C$), assuming $P$ decreases as $V$ increases in all cases and $\gamma > 1$.
*   **KNOWLEDGE LEVEL:** K2 (Understanding concepts), K3 (Conducting analysis)
*   **REFERENCE:** Moran & Shapiro (2006), Chapter 5: "The First Law of Thermodynamics"

---

### **7. Important Points to Remember**

*   **Boundary work is specific to closed systems.** For open systems, flow work is also considered.
*   **The integral $\int P \, dV$ is path-dependent.** Different processes between the same initial and final states will result in different amounts of boundary work.
*   **For a process involving only boundary work, the first law can be written as $Q = \Delta U + W_b$.**
*   **Volume change is essential for boundary work.** If volume is constant, boundary work is zero.
*   **The $P-V$ diagram is a powerful tool for visualizing boundary work.**

---

### **8. Practice Questions and Exercises**

**Question 1:**
A gas in a piston-cylinder device expands slowly from an initial state of 0.1 MPa and 0.2 $m^3$ to a final state of 0.05 MPa and 0.4 $m^3$. The process can be approximated as a linear change in pressure with volume. Calculate the boundary work done by the gas during this process.

**Answer 1:**
The process is linear on a $P-V$ diagram, meaning it can be represented by a straight line. The work done is the area under this line.
We have two points: $(V_1, P_1) = (0.2 \text{ m}^3, 0.1 \text{ MPa})$ and $(V_2, P_2) = (0.4 \text{ m}^3, 0.05 \text{ MPa})$.
The area under the line on a $P-V$ diagram is a trapezoid.
Work $W_b = \frac{P_1 + P_2}{2} (V_2 - V_1)$
$W_b = \frac{0.1 \text{ MPa} + 0.05 \text{ MPa}}{2} (0.4 \text{ m}^3 - 0.2 \text{ m}^3)$
$W_b = \frac{0.15 \text{ MPa}}{2} (0.2 \text{ m}^3)$
$W_b = 0.075 \text{ MPa} \cdot \text{m}^3$
Since 1 MPa = $10^6$ Pa and 1 Pa $\cdot$ $m^3$ = 1 J,
$W_b = 0.075 \times 10^6$ J = 75,000 J = 75 kJ.

**Question 2:**
1 kg of an ideal gas at 150 kPa and 20 $^\circ$C undergoes a constant pressure expansion process to twice its initial volume. Calculate the boundary work done by the gas. Assume the gas constant $R = 0.287 \text{ kJ/kg} \cdot \text{K}$.

**Answer 2:**
Given:
$m = 1$ kg
$P = 150$ kPa (constant)
$T_1 = 20^\circ$C = 293.15 K
$V_2 = 2 V_1$
$R = 0.287$ kJ/kg $\cdot$ K

For a constant pressure process, $W_b = P(V_2 - V_1)$.
We need to find $V_1$. Using the ideal gas law $PV = mRT$, we have $P V_1 = m R T_1$.
$V_1 = \frac{m R T_1}{P} = \frac{(1 \text{ kg})(0.287 \text{ kJ/kg} \cdot \text{K})(293.15 \text{ K})}{150 \text{ kPa}}$
$V_1 = \frac{84.184 \text{ kJ}}{150 \text{ kPa}} \approx 0.5612 \text{ m}^3$.
Since $V_2 = 2 V_1$, $V_2 = 2 \times 0.5612 \text{ m}^3 = 1.1224 \text{ m}^3$.

Now calculate the work:
$W_b = P (V_2 - V_1) = (150 \text{ kPa}) (1.1224 \text{ m}^3 - 0.5612 \text{ m}^3)$
$W_b = (150 \text{ kPa}) (0.5612 \text{ m}^3)$
$W_b = 84.18 \text{ kPa} \cdot \text{m}^3$
$W_b = 84.18$ kJ.

**Question 3:**
A gas contained in a cylinder is compressed from $V_1 = 0.5 \text{ m}^3$ to $V_2 = 0.1 \text{ m}^3$. During the compression, the pressure is given by $P = \frac{C}{V}$ where $C = 0.5 \text{ MN} \cdot \text{m}^{-1}$. Calculate the work done during this process.

**Answer 3:**
This is a polytropic process with $n=1$ (or an isothermal process for an ideal gas where $PV=C$).
The relation is $P = \frac{C}{V}$.
$W_b = \int_{V_1}^{V_2} P \, dV = \int_{0.5}^{0.1} \frac{C}{V} \, dV = C \ln \left( \frac{V_2}{V_1} \right)$
$W_b = (0.5 \text{ MN} \cdot \text{m}^{-1}) \ln \left( \frac{0.1 \text{ m}^3}{0.5 \text{ m}^3} \right)$
$W_b = (0.5 \times 10^6 \text{ N} \cdot \text{m}^{-1}) \ln (0.2)$
$W_b = (500,000 \text{ N}) (-1.6094)$
$W_b = -804,700 \text{ N} \cdot \text{m}$
$W_b = -804.7$ kJ.
The negative sign indicates that work is done on the system (compression).

---

### **9. Alignment with Course Outcomes**

*   **CO1: Understand basic concepts of thermodynamics (Knowledge Level: K1, K2)**
    *   Covered in Section 1 (Introduction), Section 2 (Mechanism), and Section 6 ($P-V$ Diagram).
*   **CO2: Understand the laws of thermodynamics (Knowledge Level: K1, K2)**
    *   Covered in Section 5 (First Law Analysis) where boundary work is integrated into the first law equation.
*   **CO3: Conduct first law analysis of open and closed systems (Knowledge Level: K3)**
    *   This topic focuses on closed systems, and Section 5 explicitly shows how boundary work is used in the first law analysis of closed systems.
*   **CO4: Determine entropy changes associated with different processes (Knowledge Level: K3)**
    *   While entropy is not directly calculated here, understanding the nature of different thermodynamic processes (isobaric, isothermal, adiabatic, polytropic) is foundational for later entropy calculations. The path dependence of boundary work also hints at the path dependence of entropy.
*   **CO5: Determine the properties of pure substances (Knowledge Level: K2, K3)**
    *   While this topic primarily uses ideal gas assumptions for simplicity in examples, the general formulation $\int P \, dV$ applies to any substance. Understanding how to integrate this requires knowledge of the pressure-volume relationship, which is a property of the substance.

---

This concludes the study notes on Moving Boundary Work. Remember to practice the calculations and understand the physical meaning behind the equations and the $P-V$ diagram.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
