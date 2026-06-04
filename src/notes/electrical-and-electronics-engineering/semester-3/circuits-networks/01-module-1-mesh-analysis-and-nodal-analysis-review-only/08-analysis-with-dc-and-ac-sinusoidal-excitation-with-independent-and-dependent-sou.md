---
title: "analysis with DC and AC (sinusoidal) excitation with 
independent and dependent sources."
subject: "CIRCUITS & NETWORKS"
module: "Module 1: Mesh analysis and nodal analysis ( Review only)"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35abb"
status: "completed"
scrapedAt: "2026-05-23T16:11:21.312Z"
---
# CIRCUITS & NETWORKS - Module 1: Mesh Analysis and Nodal Analysis (Review)

**Topic:** Analysis with DC and AC (Sinusoidal) Excitation with Independent and Dependent Sources

**Course Outcomes Addressed:** CO1 (Apply circuit theorems to solve complex DC and AC electric networks)

---

## 1. Introduction to Circuit Analysis Techniques (Review)

This module serves as a foundational review of two powerful circuit analysis techniques: Mesh Analysis and Nodal Analysis. These methods are crucial for solving complex electric networks, whether they are DC or AC (sinusoidal) in nature, and regardless of whether they contain independent or dependent sources. Understanding these techniques is essential for applying various circuit theorems (CO1).

---

## 2. DC Excitation Analysis

### 2.1 DC Circuits

In DC circuits, the excitation is a constant voltage or current source. The analysis involves solving for steady-state conditions where capacitors act as open circuits and inductors act as short circuits.

### 2.2 Mesh Analysis with DC Excitation

**Key Concept:** Mesh analysis is based on Kirchhoff's Voltage Law (KVL). It involves assigning loop currents to each independent loop (mesh) in a circuit and writing KVL equations for each mesh.

**Steps for Mesh Analysis:**

1.  **Identify Meshes:** Identify the independent planar loops in the circuit.
2.  **Assign Mesh Currents:** Assign a clockwise or counter-clockwise current to each mesh.
3.  **Write KVL Equations:** For each mesh, apply KVL starting from a reference point and summing the voltage drops/rises.
    *   Voltage drop across a resistor $R$ with mesh current $I$ is $IR$.
    *   Voltage drop across a resistor shared by two meshes with currents $I_1$ and $I_2$ (both flowing in the same direction through the resistor) is $R(I_1 - I_2)$ or $R(I_2 - I_1)$, depending on the chosen direction.
4.  **Formulate System of Equations:** The KVL equations form a system of linear algebraic equations with the mesh currents as unknowns.
5.  **Solve the System:** Solve the system of equations using methods like substitution, elimination, or matrix methods (e.g., Cramer's rule, matrix inversion).

**Example (DC Circuit with Resistors and Independent Voltage Source):**

Consider a circuit with two meshes.

```
      R1
  +-----/\/\-----+
  |              |
  V1(+)          R2
  (-)          -----/\/\-----+
  |              |      |
  +--------------+------R3-----
                 |
                 GND
```

*   **Mesh 1:** Let the clockwise mesh current be $I_1$.
    KVL for Mesh 1: $-V_1 + I_1R_1 + (I_1 - I_2)R_2 = 0$
*   **Mesh 2:** Let the clockwise mesh current be $I_2$.
    KVL for Mesh 2: $(I_2 - I_1)R_2 + I_2R_3 = 0$

This gives a system of two linear equations in $I_1$ and $I_2$.

**Textbook Reference:** Van Valkenburg, Chapter 5 (Mesh Analysis)

**Important Point:** Mesh analysis is particularly effective for circuits with many series elements and few parallel branches.

### 2.3 Nodal Analysis with DC Excitation

**Key Concept:** Nodal analysis is based on Kirchhoff's Current Law (KCL). It involves identifying all essential nodes (junctions where three or more branches meet) and assigning node voltages to them.

**Steps for Nodal Analysis:**

1.  **Identify Essential Nodes:** Identify all nodes in the circuit. Choose one node as the reference node (ground, typically with voltage 0V).
2.  **Assign Node Voltages:** Assign a voltage variable to each non-reference node.
3.  **Write KCL Equations:** For each non-reference node, apply KCL by summing the currents leaving the node to zero.
    *   Current leaving a resistor $R$ connected to a node with voltage $V_a$ and another node with voltage $V_b$ is $(V_a - V_b)/R$.
    *   Current leaving a current source $I$ is $+I$. Current entering is $-I$.
4.  **Formulate System of Equations:** The KCL equations form a system of linear algebraic equations with the node voltages as unknowns.
5.  **Solve the System:** Solve the system of equations using methods like substitution, elimination, or matrix methods.

**Example (DC Circuit with Resistors and Independent Current Source):**

Consider a circuit with two essential nodes.

```
      R1
  +---/\/\-----+
  |     |      |
  I1 -> |      R2
  |     +------/\/\-----+
  +--------------+      |
  |                     R3
  |                     |
 GND ---------------------+
```

*   **Node 1:** Let the voltage at the top node be $V_1$. Assume node at the bottom is reference (0V).
    KCL at Node 1: $(V_1 - 0)/R_1 + (V_1 - 0)/R_2 - I_1 = 0$

This gives a single linear equation in $V_1$.

**Textbook Reference:** Van Valkenburg, Chapter 4 (Nodal Analysis)

**Important Point:** Nodal analysis is particularly effective for circuits with many parallel branches and few series elements.

---

## 3. AC (Sinusoidal) Excitation Analysis

### 3.1 AC Circuits and Phasors

**Key Concept:** In AC circuits with sinusoidal excitation, analysis is performed using **phasors**. A phasor is a rotating vector that represents a sinusoidal quantity (voltage or current) in terms of its amplitude and phase.

*   **Sinusoidal Function:** $v(t) = V_m \cos(\omega t + \phi)$
*   **Phasor Representation:** $V = V_m \angle \phi$ (where $V_m$ is the amplitude and $\phi$ is the phase angle). Alternatively, $V = \frac{V_m}{\sqrt{2}} \angle \phi$ if using RMS values, which is more common in engineering.
*   **Impedance (Z):** The AC equivalent of resistance. It's a complex quantity representing the opposition to current flow.
    *   Resistor: $Z_R = R$
    *   Inductor: $Z_L = j\omega L$ (where $j$ is the imaginary unit)
    *   Capacitor: $Z_C = \frac{1}{j\omega C} = -j\frac{1}{\omega C}$

### 3.2 Mesh Analysis with AC Excitation (Sinusoidal)

The process is identical to DC mesh analysis, but all quantities (voltages, currents) are represented by phasors, and resistances are replaced by impedances.

**Steps:**

1.  **Convert to Phasor Domain:** Represent all sinusoidal sources and circuit elements (inductors and capacitors) in the phasor domain using their impedances.
2.  **Assign Mesh Currents:** Assign clockwise or counter-clockwise phasor mesh currents.
3.  **Write KVL Equations:** Apply KVL to each mesh using phasor voltages and impedances.
    *   Voltage drop across an impedance $Z$ with mesh current $I$ is $IZ$.
    *   Voltage drop across an impedance $Z$ shared by two meshes with currents $I_1$ and $I_2$ is $Z(I_1 - I_2)$ or $Z(I_2 - I_1)$.
4.  **Formulate System of Equations:** Obtain a system of linear algebraic equations in the phasor domain.
5.  **Solve the System:** Solve for the unknown phasor mesh currents.
6.  **Convert back to Time Domain:** If required, convert the phasor solutions back to the time domain using the relationship: $v(t) = \text{Re}\{V e^{j\omega t}\}$ or $i(t) = \text{Re}\{I e^{j\omega t}\}$.

**Example (AC Circuit with Impedances and Independent Voltage Source):**

Consider a circuit with two meshes, containing resistors, inductors, and a sinusoidal voltage source.

```
      R1
  +-----/\/\-----+
  |              |
  Vm cos(wt+phi)  ZL = jwL
  (-) (+)        -----jX_L-----+
  |              |         |
  +--------------+---------ZC = 1/(jwC)----
                 |
                 GND
```

*   **Mesh 1:** Let the clockwise mesh current be $I_1$.
    KVL for Mesh 1: $-V_s + I_1R_1 + (I_1 - I_2)j\omega L = 0$
*   **Mesh 2:** Let the clockwise mesh current be $I_2$.
    KVL for Mesh 2: $(I_2 - I_1)j\omega L + I_2(\frac{1}{j\omega C}) = 0$

Where $V_s = V_m \angle \phi$ is the phasor representation of the voltage source.

**Textbook Reference:** Ravish R Singh, Chapter 7 (AC Steady State Analysis using Phasors and Impedances)

**Important Point:** The rules for applying KVL and setting up equations are the same as in DC analysis, but with complex impedances and phasor quantities.

### 3.3 Nodal Analysis with AC Excitation (Sinusoidal)

Similar to mesh analysis, nodal analysis in AC circuits uses phasor quantities and impedances.

**Steps:**

1.  **Convert to Phasor Domain:** Represent all sinusoidal sources and circuit elements in the phasor domain using their impedances.
2.  **Identify Nodes and Assign Voltages:** Choose a reference node and assign phasor node voltages to other essential nodes.
3.  **Write KCL Equations:** Apply KCL at each non-reference node using phasor currents and impedances.
    *   Current leaving a node through impedance $Z$ connected to node $V_a$ and another node $V_b$ is $(V_a - V_b)/Z$.
    *   Current leaving a current source $I$ is $+I$. Current entering is $-I$.
4.  **Formulate System of Equations:** Obtain a system of linear algebraic equations in the phasor domain.
5.  **Solve the System:** Solve for the unknown phasor node voltages.
6.  **Convert back to Time Domain:** If required, convert the phasor solutions back to the time domain.

**Example (AC Circuit with Impedances and Independent Current Source):**

Consider a circuit with two essential nodes and sinusoidal current source.

```
      ZL = jwL
  +-----jX_L-----+
  |     |        |
  Is = Im cos(wt+phi) -> |        ZR = R
  |     +--------/\/\-----+
  +--------------+        |
  |                       ZC = 1/(jwC)
  |                       |
 GND ----------------------+
```

*   **Node 1:** Let the voltage at the top node be $V_1$. Assume node at the bottom is reference (0V).
    KCL at Node 1: $\frac{V_1}{j\omega L} + \frac{V_1}{R} - I_s = 0$

Where $I_s = I_m \angle \psi$ is the phasor representation of the current source.

**Textbook Reference:** Suresh Kumar, Chapter 7 (AC Circuit Analysis using Phasor)

**Important Point:** The concept of admittance ($Y = 1/Z$) can also be useful in nodal analysis, as KCL equations are directly written in terms of currents leaving nodes through admittances.

---

## 4. Analysis with Dependent Sources

**Key Concept:** Dependent sources are controlled by a voltage or current elsewhere in the circuit. Their value changes based on this controlling parameter.

### 4.1 Dependent Sources in DC Circuits

The analysis techniques (mesh and nodal) remain the same. The dependent source's value is expressed as a function of another voltage or current in the circuit, which is also represented by the mesh currents or node voltages.

**Mesh Analysis with Dependent Sources:**

*   **Voltage Controlled Voltage Source (VCVS):** $v_o = \mu v_x$. Express $\mu v_x$ in terms of mesh currents.
*   **Current Controlled Voltage Source (CCVS):** $v_o = r i_x$. Express $r i_x$ in terms of mesh currents.
*   **Voltage Controlled Current Source (VCCS):** $i_o = g v_x$. Express $g v_x$ in terms of mesh currents.
*   **Current Controlled Current Source (CCCS):** $i_o = \beta i_x$. Express $\beta i_x$ in terms of mesh currents.

**Nodal Analysis with Dependent Sources:**

*   When a dependent voltage source is between two essential nodes, it can be handled by relating the node voltages. If the positive terminal is at $V_a$ and negative at $V_b$, and the source value is $v_o$, then $V_a - V_b = v_o$. If $v_o$ is dependent on another voltage $v_x$, substitute the expression for $v_x$ in terms of node voltages.
*   If a dependent source is connected to the reference node, its value directly affects the KCL equation of the other node.

**Example (DC circuit with a dependent source):**

Consider a circuit with a voltage-controlled current source (VCCS).

```
      R1
  +---/\/\-----+
  |     |      |
  V1    R2     i_o = g * V1
  |     -----/\/\-----+-----> (Controlled Current Source)
  +--------------+
  |
 GND
```

*   **Nodal Analysis:**
    KCL at Node 1: $\frac{V_1}{R_1} + \frac{V_1}{R_2} - i_o = 0$
    Substitute $i_o = gV_1$: $\frac{V_1}{R_1} + \frac{V_1}{R_2} - gV_1 = 0$
    $V_1 (\frac{1}{R_1} + \frac{1}{R_2} - g) = 0$. This implies $V_1 = 0$ unless there's an external source or a different configuration.

**Textbook Reference:** Sudhakar & Palli, Chapter 5 (Nodal and Mesh Analysis with Dependent Sources)

### 4.2 Dependent Sources in AC (Sinusoidal) Circuits

The principles are the same as in DC circuits, but all quantities and parameters are represented by phasors and complex impedances.

**Mesh Analysis with Dependent Sources (AC):**

*   Express the dependent source in terms of mesh currents and impedances. For example, if a VCVS $v_o = \mu v_x$ where $v_x$ is the voltage across an impedance $Z$ in mesh $k$ with current $I_k$, then $v_x = I_k Z$, and the source term becomes $\mu I_k Z$.

**Nodal Analysis with Dependent Sources (AC):**

*   Express the dependent source in terms of node voltages and impedances. For example, if a CCCS $i_o = \beta i_x$ where $i_x$ is the current through an impedance $Z$ between nodes $V_a$ and $V_b$, then $i_x = (V_a - V_b)/Z$, and the source term becomes $\beta (V_a - V_b)/Z$.

**Example (AC circuit with a dependent source):**

Consider a circuit with a current-controlled voltage source (CCVS).

```
      ZL = jwL
  +-----jX_L-----+
  |     |        |
  V1    I_x      v_o = r * I_x
  |     +--------/\/\-----+-----> (Controlled Voltage Source)
  +--------------+        |
  |                       R2
  |                       |
 GND ----------------------+
```

*   **Nodal Analysis:**
    Let the voltage at the top node be $V_1$. Assume the node between $Z_L$ and $R2$ is $V_2$.
    KCL at Node 1: $\frac{V_1 - 0}{j\omega L} + \frac{V_1 - V_2}{R2} - I_x = 0$
    KCL at Node 2: $\frac{V_2 - V_1}{R2} + \frac{V_2 - 0}{R_2} - (\text{current into source}) = 0$
    We also have the constraint from the CCVS: $V_1 - V_2 = v_o = r I_x$.
    And $I_x = (V_1 - V_2)/R2$.
    Substituting $I_x$ into the CCVS equation: $V_1 - V_2 = r \frac{V_1 - V_2}{R2}$.
    This simplifies to $V_1 - V_2 = \frac{r}{R2}(V_1 - V_2)$. This implies either $V_1=V_2$ or $1 = r/R2$. If $r \neq R2$, then $V_1=V_2$.

    Let's re-evaluate for a clearer example: Assume the controlled voltage source is between node 1 and ground, with its value controlled by a current in another branch.

    ```
          R1
      +---/\/\-----+
      |     |      |
      V1    I_x    v_o = r * I_x
      |     -----/\/\-----+-----> (+) v_o (-)
      +--------------+      |
      |                     R2
      |                     |
     GND -------------------+
    ```

    *   Assume $I_x$ is the current through $R1$.
    *   KCL at Node 1: $\frac{V_1}{R1} + \frac{V_1}{R2} - I_x = 0$
    *   $I_x = V_1/R1$.
    *   The controlled source $v_o = r I_x = r(V_1/R1)$ is connected between Node 1 and ground.
    *   KCL at Node 1, considering the controlled source: $\frac{V_1}{R1} + \frac{V_1}{R2} - I_x = 0$
    *   But wait, the controlled source is a voltage source that is part of the circuit topology. If it's between Node 1 and ground, then $V_1$ is directly affected by it. Let's assume it's connected to Node 1.

    A better approach for dependent sources: Treat them like any other branch.

    Let's consider a circuit where the controlled source's voltage is connected to a node.

    ```
          R1
      +---/\/\-----+
      |     |      |
      V1    Ix     R2
      |     -----/\/\-----+
      +--------------+      |
      |                     v_o = r * Ix
      |                     (+)
     GND ---------------   v_o  (-) -- Node 2
    ```

    *   KCL at Node 1: $\frac{V_1}{R1} + \frac{V_1 - V_{ground}}{R2} - I_x = 0$ (if ground is a node)
    *   Let's consider a two-node example properly:
    ```
           R1
       +---/\/\---+
       |    |     |
       V1   I_x   R2
       |    +-----/\/\---+
       +----------+      |
       |                v_o = r * I_x
       |                (+)
      GND -----------   v_o  (-) -- Node 2
    ```
    *   Assume $I_x$ is the current flowing through $R1$ from Node 1 to Node 2.
    *   KCL at Node 1: $\frac{V_1 - V_2}{R1} + \frac{V_1 - V_3}{R2} = 0$ (where $V_3$ is the voltage at the node connected to the positive terminal of $v_o$).
    *   $I_x = \frac{V_1 - V_2}{R1}$.
    *   Let's simplify and assume $I_x$ is the current through $R1$ at Node 1.
    *   KCL at Node 1: $\frac{V_1}{R1} + \frac{V_1}{R2} - I_x = 0$.
    *   $I_x = \frac{V_1}{R1}$.
    *   The dependent voltage source is connected to Node 1. Let's say it's $v_o$ between Node 1 and ground.
    *   Then KCL at Node 1: $\frac{V_1}{R1} + \frac{V_1}{R2} - I_x = 0$.
    *   Also, $I_x$ is the current *through* a branch. If $I_x$ is the current leaving Node 1 through $R1$, then $I_x = V_1/R1$.
    *   The controlled source value is $v_o = r * (V_1/R1)$. If this source is connected to Node 1, then $V_1$ itself is influenced by this source.

    The correct way to handle dependent sources is to include them in the KVL/KCL equations directly.

    **Example Revisited (AC with CCVS):**

    ```
         ZL = jwL
      +-----jX_L-----+
      |     |        |
      V1    Ix       R2
      |     -----/\/\-----+
      +--------------+      |
      |                     v_o = r * Ix
      |                     (+)
     GND ---------------   v_o  (-) -- Node 2
    ```

    *   Let $I_x$ be the current leaving Node 1 through $Z_L$. So, $I_x = V_1 / Z_L$.
    *   The voltage source $v_o$ is connected between Node 1 and Node 2.
    *   $v_o = r \cdot I_x = r \cdot (V_1 / Z_L)$.
    *   Relationship between Node 1 and Node 2 voltages: $V_1 - V_2 = v_o = r(V_1 / Z_L)$.
    *   KCL at Node 1: $\frac{V_1}{Z_L} + \frac{V_1 - V_2}{R2} = 0$
    *   Substitute $V_2$ from the voltage source equation: $V_2 = V_1 - r(V_1 / Z_L)$.
    *   KCL at Node 1: $\frac{V_1}{Z_L} + \frac{V_1 - (V_1 - r(V_1/Z_L))}{R2} = 0$
    *   $\frac{V_1}{Z_L} + \frac{r(V_1/Z_L)}{R2} = 0$
    *   $V_1 (\frac{1}{Z_L} + \frac{r}{R2 \cdot Z_L}) = 0$. This implies $V_1 = 0$ unless there's another source or a different topology.

    Let's consider a simpler dependency: A current source controlled by the voltage at Node 1.

    ```
             R1
         +---/\/\---+
         |    |     |
         V1   I_x   R2
         |    +-----/\/\---+
         +----------+      |
         |                Is = g * V1
         |                ---> (Controlled Current Source)
        GND
    ```
    *   KCL at Node 1: $\frac{V_1}{R1} + \frac{V_1}{R2} - I_s = 0$.
    *   Since $I_s$ is a current source leaving Node 1, it's simply $-I_s$ in the KCL equation.
    *   KCL at Node 1: $\frac{V_1}{R1} + \frac{V_1}{R2} - gV_1 = 0$. (If $I_s$ is leaving the node).
    *   $V_1 (\frac{1}{R1} + \frac{1}{R2} - g) = 0$. This setup still leads to $V_1=0$ unless there's an external source.

    The key is to ensure the dependent source's value is correctly expressed in terms of the chosen analysis variables (mesh currents or node voltages).

**Textbook Reference:** A Sudhakar, Shyammohan S Palli, Chapter 6 (Nodal and Mesh Analysis with Dependent Sources)

**Important Point:** When dealing with dependent sources, always ensure that the controlling variable is correctly expressed in terms of the mesh currents or node voltages you are using for your analysis.

---

## 5. Practice Questions and Exercises

**Instructions:** Solve the following problems using the appropriate method (Mesh or Nodal Analysis).

**Question 1 (DC Mesh Analysis):**
Find the mesh currents $I_1$ and $I_2$ in the following DC circuit.

```
      R1=2 Ohm
  +-----/\/\-----+
  |              |
  V1=10V(+)      R2=3 Ohm
  (-)          -----/\/\-----+
  |              |      |
  +--------------+------R3=4 Ohm-----
                 |
                 GND
```

**Answer 1:**
*   Mesh 1 KVL: $-10 + 2I_1 + 3(I_1 - I_2) = 0 \implies 5I_1 - 3I_2 = 10$
*   Mesh 2 KVL: $3(I_2 - I_1) + 4I_2 = 0 \implies -3I_1 + 7I_2 = 0$
Solving these equations:
From Mesh 2: $7I_2 = 3I_1 \implies I_1 = \frac{7}{3}I_2$.
Substitute into Mesh 1: $5(\frac{7}{3}I_2) - 3I_2 = 10$
$\frac{35}{3}I_2 - \frac{9}{3}I_2 = 10$
$\frac{26}{3}I_2 = 10 \implies I_2 = \frac{30}{26} = \frac{15}{13}$ A.
$I_1 = \frac{7}{3} \times \frac{15}{13} = \frac{35}{13}$ A.

**Question 2 (DC Nodal Analysis):**
Find the node voltage $V_1$ in the following DC circuit.

```
      R1=5 Ohm
  +---/\/\-----+
  |     |      |
  I1=2A -> |      R2=10 Ohm
  |     +------/\/\-----+
  +--------------+      |
  |                     R3=4 Ohm
  |                     |
 GND ---------------------+
```

**Answer 2:**
*   KCL at Node 1: $\frac{V_1}{R_1} + \frac{V_1}{R_2} + \frac{V_1}{R_3} - I_1 = 0$
*   $\frac{V_1}{5} + \frac{V_1}{10} + \frac{V_1}{4} - 2 = 0$
*   $V_1 (\frac{1}{5} + \frac{1}{10} + \frac{1}{4}) = 2$
*   $V_1 (\frac{4 + 2 + 5}{20}) = 2$
*   $V_1 (\frac{11}{20}) = 2 \implies V_1 = \frac{40}{11}$ V.

**Question 3 (AC Mesh Analysis):**
Find the mesh currents $I_1$ and $I_2$ (phasors) in the following AC circuit. The voltage source is $v(t) = 10 \cos(2t)$ V.
$R = 5 \Omega$, $L = 0.5$ H, $C = 0.25$ F.

```
      R=5 Ohm
  +-----/\/\-----+
  |              |
  v(t)           j w L = j 2 * 0.5 = j1
  (-) (+)        -----j1-----+
  |              |         |
  +--------------+---------1/(j w C) = 1/(j 2 * 0.25) = 1/(j 0.5) = -j2 ----
                 |
                 GND
```

**Answer 3:**
*   Source Phasor: $V_s = 10 \angle 0^\circ$ V.
*   Impedances: $Z_R = 5 \Omega$, $Z_L = j1 \Omega$, $Z_C = -j2 \Omega$.
*   Mesh 1 KVL: $-10 + 5I_1 + j1(I_1 - I_2) = 0 \implies (5+j1)I_1 - j1I_2 = 10$
*   Mesh 2 KVL: $j1(I_2 - I_1) + (-j2)I_2 = 0 \implies -j1I_1 + (-j1)I_2 = 0$
From Mesh 2: $I_2 = -I_1$.
Substitute into Mesh 1: $(5+j1)I_1 - j1(-I_1) = 10$
$(5+j1+j1)I_1 = 10$
$(5+j2)I_1 = 10$
$I_1 = \frac{10}{5+j2} = \frac{10(5-j2)}{(5+j2)(5-j2)} = \frac{50 - j20}{25 + 4} = \frac{50 - j20}{29}$ A.
$I_1 \approx 1.724 - j0.6897$ A.
$I_2 = -I_1 \approx -1.724 + j0.6897$ A.

**Question 4 (AC Nodal Analysis with Dependent Source):**
Find the voltage $V_1$ in the following AC circuit. The voltage source is $v_s(t) = 5 \cos(100t)$ V. $R_1 = 100 \Omega$, $R_2 = 50 \Omega$, and the dependent source is a voltage-controlled voltage source (VCVS) with $v_o = 2v_x$, where $v_x$ is the voltage across $R_1$.

```
      R1=100 Ohm
  +---/\/\-----+
  |     |      |
  Vs    v_x    R2=50 Ohm
  |     +------/\/\-----+
  +--------------+      |
  |                     v_o = 2*v_x
  |                     (+)
 GND ---------------   v_o  (-) -- Node 1
```

**Answer 4:**
*   Source Phasor: $V_s = 5 \angle 0^\circ$ V.
*   Impedances: $Z_{R1} = 100 \Omega$, $Z_{R2} = 50 \Omega$.
*   Let $V_1$ be the voltage at Node 1.
*   The voltage across $R_1$ is $v_x = V_s - V_1$ (assuming the positive terminal of $V_s$ is connected to one end of $R_1$ and the other end of $R_1$ is connected to Node 1). This is a bit ambiguous. Let's assume the circuit is:

    ```
             R1=100 Ohm
         +----/\/\----+---- Node 1 (V1)
         |            |
         Vs=5V        R2=50 Ohm
         |            |
        GND          Node 2 (V2)
                     |
                     v_o = 2*v_x
                     (+)
                     |
                    GND
    ```
    *   Let $v_x$ be the voltage across $R_1$. $v_x = V_s - V_1 = 5 - V_1$.
    *   $v_o = 2v_x = 2(5 - V_1)$.
    *   Node 2 voltage is determined by the dependent source: $V_2 = v_o = 2(5 - V_1)$.
    *   KCL at Node 1: $\frac{V_1 - V_s}{R_1} + \frac{V_1 - V_2}{R_2} = 0$
    *   $\frac{V_1 - 5}{100} + \frac{V_1 - 2(5 - V_1)}{50} = 0$
    *   $\frac{V_1 - 5}{100} + \frac{V_1 - 10 + 2V_1}{50} = 0$
    *   Multiply by 100: $(V_1 - 5) + 2(3V_1 - 10) = 0$
    *   $V_1 - 5 + 6V_1 - 20 = 0$
    *   $7V_1 = 25 \implies V_1 = \frac{25}{7}$ V.

---

## 6. Important Points to Remember

*   **Planarity:** Mesh analysis is applicable only to planar circuits. Nodal analysis is applicable to both planar and non-planar circuits.
*   **Current/Voltage Sources:**
    *   Pure current sources (DC or AC) in a mesh make that mesh current known if the source is unilateral, or relate two mesh currents if it's between meshes.
    *   Pure voltage sources (DC or AC) in a branch between two essential nodes simplify the nodal analysis by relating the node voltages.
*   **Supermeshes/Supernodes:** If a voltage source is present between two meshes, or a current source is present between two essential nodes, use the supermesh or supernode technique, respectively.
*   **Dependent Sources:** Their values are algebraic expressions of other voltages or currents. Ensure these expressions are correctly substituted into the KVL/KCL equations.
*   **AC Analysis:** Always convert to the phasor/impedance domain. Remember complex arithmetic and the conjugate for impedance calculations.
*   **RMS vs. Amplitude:** Be consistent with whether you are using RMS values or peak amplitudes. RMS is standard for AC steady-state analysis.
*   **Reference Node:** The choice of the reference node for nodal analysis affects the node voltage values but not the voltage differences between nodes.

---
