---
title: "analysis with DC 
and AC (sinusoidal) excitation"
subject: "CIRCUITS & NETWORKS"
module: "Module 1: Mesh analysis and nodal analysis ( Review only)"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35ab7"
status: "completed"
scrapedAt: "2026-05-23T16:11:18.295Z"
---
# CIRCUITS & NETWORKS: Module 1 Review - Mesh and Nodal Analysis with DC and AC Excitation

This module provides a foundational review of powerful circuit analysis techniques: mesh analysis and nodal analysis. We will explore how these methods are applied to circuits under both direct current (DC) and alternating current (AC) sinusoidal excitation, reinforcing your ability to solve complex networks as per CO1.

## 1. Introduction to Circuit Analysis Techniques

Understanding the behavior of electrical circuits is crucial for designing and analyzing electronic systems. Mesh analysis and nodal analysis are systematic methods for determining currents and voltages in any electrical network, regardless of its complexity.

### 1.1. Mesh Analysis

**Key Concept:** Mesh analysis is a technique based on Kirchhoff's Voltage Law (KVL). It involves defining loop currents (mesh currents) and applying KVL to each independent mesh in the circuit.

**When to Use:**
*   Circuits with a large number of series elements.
*   Circuits where current is the primary variable of interest.
*   When voltage sources are more prevalent than current sources.

**Steps for Mesh Analysis:**
1.  **Identify Meshes:** Define independent loops (meshes) in the circuit. A mesh is a loop that does not contain any other loops within it.
2.  **Assign Mesh Currents:** Assign a unique current variable to each mesh, usually in a clockwise direction.
3.  **Apply KVL to Each Mesh:** Write KVL equations for each mesh. Remember that a resistor shared between two meshes will have its voltage drop accounted for in both mesh equations with opposite signs.
    *   KVL: The algebraic sum of voltage drops around any closed loop is zero.
4.  **Solve the System of Equations:** Solve the resulting system of linear equations to find the mesh currents.
5.  **Calculate Branch Currents and Voltages:** Once mesh currents are known, calculate branch currents and voltages using the relationships between mesh currents and branch currents.

**Example (Van Valkenburg, Chapter 5):**
Consider a simple circuit with two meshes and a common resistor.

```
      R1
  +-----/\/\-----+
  |              |
 V1(+)         R3
  |              |
  +-----/\/\-----+----- V2(+)
        R2
```

*   Mesh 1: Assign current $I_1$ (clockwise).
*   Mesh 2: Assign current $I_2$ (clockwise).

KVL for Mesh 1: $-V_1 + I_1 R_1 + (I_1 - I_2) R_3 = 0$
KVL for Mesh 2: $-V_2 + I_2 R_2 + (I_2 - I_1) R_3 = 0$

Solving these two equations will give $I_1$ and $I_2$.

**Important Point to Remember:**
*   When a component is shared by two meshes, its voltage drop contribution in the KVL equation for each mesh must consider the difference between the mesh currents passing through it.
*   If a circuit contains current sources, it can simplify mesh analysis. A current source between two meshes effectively equates the mesh currents. A current source in a single mesh means that mesh current is equal to the source current (with appropriate sign).

### 1.2. Nodal Analysis

**Key Concept:** Nodal analysis is a technique based on Kirchhoff's Current Law (KCL). It involves identifying all essential nodes and assigning voltage variables to them. KCL is then applied to each essential node.

**When to Use:**
*   Circuits with a large number of parallel elements.
*   Circuits where voltage is the primary variable of interest.
*   When current sources are more prevalent than voltage sources.

**Steps for Nodal Analysis:**
1.  **Identify Essential Nodes:** An essential node is a point where three or more branches meet.
2.  **Choose a Reference Node:** Select one essential node as the reference node (ground), and assign it a voltage of 0V.
3.  **Assign Node Voltages:** Assign voltage variables ($V_a, V_b$, etc.) to all other essential nodes, with respect to the reference node.
4.  **Apply KCL to Each Non-Reference Node:** Write KCL equations for each non-reference node. Remember that current flowing *out* of a node is considered positive, and current flowing *into* a node is considered negative.
    *   KCL: The algebraic sum of currents entering a node is zero.
5.  **Solve the System of Equations:** Solve the resulting system of linear equations to find the node voltages.
6.  **Calculate Branch Currents and Voltages:** Once node voltages are known, calculate branch currents and voltages using Ohm's Law.

**Example (Ravish R Singh, Chapter 4):**
Consider a simple circuit with three nodes and a current source.

```
      R1
  +---/\/\---+
  |          |
 V_a ---o--- R2 ---o--- V_b
  |          |     |
 I_s --->    R3    GND (Reference)
```

*   Node a: Voltage $V_a$.
*   Node b: Voltage $V_b$.
*   Reference Node (GND): Voltage 0V.

KCL at Node a: $\frac{V_a - 0}{R_1} + \frac{V_a - V_b}{R_2} - I_s = 0$
KCL at Node b: $\frac{V_b - V_a}{R_2} + \frac{V_b - 0}{R_3} = 0$

Solving these two equations will give $V_a$ and $V_b$.

**Important Point to Remember:**
*   When writing KCL for a node, express the current through each branch as the voltage difference across the branch divided by its impedance (or resistance).
*   Voltage sources connected between a non-reference node and the reference node simplify the equations; the node voltage is directly known.
*   Voltage sources connected between two non-reference nodes create a constraint equation, relating the two node voltages. This is often handled using a "supernode."

## 2. Analysis with DC Excitation

In DC circuits, the sources provide a constant voltage or current. The analysis methods (mesh and nodal) remain the same, but the impedances are simply resistances.

### 2.1. DC Mesh Analysis

*   **Impedances:** All impedances are purely resistive ($Z = R$).
*   **Voltage Sources:** Are constant values ($V$).
*   **Current Sources:** Are constant values ($I$).

**Example (Suresh Kumar, Chapter 3):**
A DC circuit with two loops.

```
      R1=2ohm
  +-----/\/\-----+
  |              |
 V1=10V        R3=3ohm
  |              |
  +-----/\/\-----+----- V2=5V
        R2=4ohm
```

*   Mesh 1: Assign current $I_1$ (clockwise).
*   Mesh 2: Assign current $I_2$ (clockwise).

KVL for Mesh 1: $-10 + 2I_1 + 3(I_1 - I_2) = 0 \Rightarrow 5I_1 - 3I_2 = 10$
KVL for Mesh 2: $-5 + 4I_2 + 3(I_2 - I_1) = 0 \Rightarrow -3I_1 + 7I_2 = 5$

Solving these equations:
Multiply first equation by 7, second by 3:
$35I_1 - 21I_2 = 70$
$-9I_1 + 21I_2 = 15$
Adding them: $26I_1 = 85 \Rightarrow I_1 = 85/26 \text{ A}$
Substitute $I_1$ back: $5(85/26) - 3I_2 = 10 \Rightarrow 425/26 - 3I_2 = 10 \Rightarrow 3I_2 = (425 - 260)/26 = 165/26 \Rightarrow I_2 = 55/26 \text{ A}$

### 2.2. DC Nodal Analysis

*   **Impedances:** All impedances are purely resistive ($Z = R$).
*   **Voltage Sources:** Are constant values ($V$).
*   **Current Sources:** Are constant values ($I$).

**Example (A Sudhakar, Chapter 3):**
A DC circuit with three nodes.

```
      R1=5ohm
  +---/\/\---+
  |          |
 Va ---o--- R2=10ohm ---o--- Vb
  |          |     |
 Is=2A --->  R3=2ohm GND (Reference)
```

*   Node a: Voltage $V_a$.
*   Node b: Voltage $V_b$.
*   Reference Node: Voltage 0V.

KCL at Node a: $\frac{V_a - 0}{5} + \frac{V_a - V_b}{10} - 2 = 0 \Rightarrow 0.2V_a + 0.1V_a - 0.1V_b = 2 \Rightarrow 0.3V_a - 0.1V_b = 2 \Rightarrow 3V_a - V_b = 20$
KCL at Node b: $\frac{V_b - V_a}{10} + \frac{V_b - 0}{2} = 0 \Rightarrow 0.1V_b - 0.1V_a + 0.5V_b = 0 \Rightarrow -0.1V_a + 0.6V_b = 0 \Rightarrow -V_a + 6V_b = 0 \Rightarrow V_a = 6V_b$

Substitute $V_a = 6V_b$ into the first equation:
$3(6V_b) - V_b = 20 \Rightarrow 18V_b - V_b = 20 \Rightarrow 17V_b = 20 \Rightarrow V_b = 20/17 \text{ V}$
$V_a = 6 * (20/17) = 120/17 \text{ V}$

## 3. Analysis with AC (Sinusoidal) Excitation

AC circuits involve time-varying sinusoidal sources. To analyze these circuits using mesh and nodal analysis, we transition from the time domain to the phasor or frequency domain.

### 3.1. Phasor and Impedance Concepts

**Key Concept:** Sinusoidal functions can be represented as phasors, which are complex numbers that capture both the magnitude and phase of the sinusoid. Impedance is the AC equivalent of resistance, and it's a complex quantity that accounts for the opposition to current flow by resistors, inductors, and capacitors.

*   **Sinusoidal Voltage/Current:** $v(t) = V_m \cos(\omega t + \phi)$ or $i(t) = I_m \cos(\omega t + \phi)$
*   **Phasor Representation:**
    *   Voltage: $\mathbf{V} = V_m e^{j\phi} = V_m \angle \phi$ (where $V_m$ is the amplitude, and $\phi$ is the phase angle)
    *   Current: $\mathbf{I} = I_m e^{j\phi} = I_m \angle \phi$
    *   We often use RMS values for phasors: $\mathbf{V} = \frac{V_m}{\sqrt{2}} \angle \phi$ and $\mathbf{I} = \frac{I_m}{\sqrt{2}} \angle \phi$. This convention is typically used in textbooks.
*   **Impedances of Components:**
    *   Resistor: $Z_R = R$ (purely real)
    *   Inductor: $Z_L = j\omega L = \omega L \angle 90^\circ$ (purely imaginary, positive)
    *   Capacitor: $Z_C = \frac{1}{j\omega C} = \frac{-j}{\omega C} = \frac{1}{\omega C} \angle -90^\circ$ (purely imaginary, negative)
*   **Ohm's Law in Phasor Domain:** $\mathbf{V} = \mathbf{I} Z$
*   **KVL and KCL in Phasor Domain:** They hold true for phasors just as they do for DC quantities.

### 3.2. AC Mesh Analysis (Sinusoidal)

The steps are identical to DC mesh analysis, but all quantities (voltages, currents) are represented as phasors, and all resistances are replaced by their complex impedances.

**Steps:**
1.  **Convert to Phasor Domain:** Represent all voltage/current sources as phasors and all circuit elements (R, L, C) by their impedances ($R, j\omega L, 1/(j\omega C)$).
2.  **Assign Mesh Currents:** Assign mesh current phasors ($I_1, I_2$, etc.).
3.  **Apply KVL to Each Mesh:** Write KVL equations using phasor quantities and impedances.
4.  **Solve the System of Equations:** Solve the resulting system of linear equations for the mesh current phasors.
5.  **Convert Back to Time Domain (if required):** If the final answer needs to be in the time domain, convert the phasor results back to their time-domain sinusoidal forms.

**Example (Van Valkenburg, Chapter 5, AC section):**
Consider a circuit with a sinusoidal voltage source and R, L, C components.

```
      R=2ohm
  +-----/\/\-----+
  |              |
 V(t)=10cos(wt)  L=0.1H (w=100 rad/s)
  |              |
  +-----/\/\-----+----- C=0.001F (w=100 rad/s)
        X=1ohm
```

Assume $w = 100$ rad/s.
*   $V_s(t) = 10 \cos(100t)$. Phasor: $\mathbf{V}_s = 10 \angle 0^\circ$ V (using RMS value as 10V for simplicity, often V_m/sqrt(2) is used).
*   $R = 2 \Omega$. Impedance: $Z_R = 2 \Omega$.
*   $L = 0.1$ H. Impedance: $Z_L = j\omega L = j(100)(0.1) = j10 \Omega$.
*   $C = 0.001$ F. Impedance: $Z_C = \frac{1}{j\omega C} = \frac{1}{j(100)(0.001)} = \frac{1}{j0.1} = -j10 \Omega$.
*   Let's assume there's an additional impedance of $1 \Omega$ in series with the capacitor. $Z_X = 1 \Omega$.

Let's redesign the example slightly for clarity with two meshes:

```
      R1=2ohm
  +-----/\/\-----+
  |              |
 V1(t)=10cos(wt)  L=0.1H (w=100 rad/s)
  |              |
  +-----/\/\-----+----- C=0.001F (w=100 rad/s)
        R2=1ohm
```

*   $w = 100$ rad/s.
*   $Z_{R1} = 2 \Omega$
*   $Z_L = j\omega L = j(100)(0.1) = j10 \Omega$
*   $Z_{R2} = 1 \Omega$
*   $Z_C = \frac{1}{j\omega C} = \frac{1}{j(100)(0.001)} = -j10 \Omega$
*   $\mathbf{V}_1 = 10 \angle 0^\circ$ V

Mesh 1 (current $I_1$):
KVL: $-\mathbf{V}_1 + \mathbf{I}_1 Z_{R1} + (\mathbf{I}_1 - \mathbf{I}_2) Z_L = 0$
$-10 + \mathbf{I}_1 (2) + (\mathbf{I}_1 - \mathbf{I}_2) (j10) = 0$
$10 + 2\mathbf{I}_1 + j10\mathbf{I}_1 - j10\mathbf{I}_2 = 0$
$(2 + j10)\mathbf{I}_1 - j10\mathbf{I}_2 = -10$  (Equation 1)

Mesh 2 (current $I_2$):
KVL: $-(\mathbf{I}_2 - \mathbf{I}_1) Z_L - \mathbf{I}_2 Z_{R2} - \mathbf{I}_2 Z_C = 0$
$-(\mathbf{I}_2 - \mathbf{I}_1) (j10) - \mathbf{I}_2 (1) - \mathbf{I}_2 (-j10) = 0$
$-j10\mathbf{I}_2 + j10\mathbf{I}_1 - \mathbf{I}_2 + j10\mathbf{I}_2 = 0$
$j10\mathbf{I}_1 - \mathbf{I}_2 = 0 \Rightarrow \mathbf{I}_2 = j10\mathbf{I}_1$ (Equation 2)

Substitute Equation 2 into Equation 1:
$(2 + j10)\mathbf{I}_1 - j10(j10\mathbf{I}_1) = -10$
$2\mathbf{I}_1 + j10\mathbf{I}_1 - j^2 100\mathbf{I}_1 = -10$
$2\mathbf{I}_1 + j10\mathbf{I}_1 + 100\mathbf{I}_1 = -10$
$(102 + j10)\mathbf{I}_1 = -10$
$\mathbf{I}_1 = \frac{-10}{102 + j10} = \frac{-10}{(102.47 \angle 5.63^\circ)}$
$\mathbf{I}_1 \approx -0.0976 \angle -5.63^\circ = 0.0976 \angle (180^\circ - 5.63^\circ) = 0.0976 \angle 174.37^\circ$ A

$\mathbf{I}_2 = j10 \mathbf{I}_1 = j10 (0.0976 \angle 174.37^\circ) = 10 \angle 90^\circ \times 0.0976 \angle 174.37^\circ$
$\mathbf{I}_2 = 0.976 \angle (90^\circ + 174.37^\circ) = 0.976 \angle 264.37^\circ$ A

The time-domain currents would be:
$i_1(t) = 0.0976 \cos(100t + 174.37^\circ)$ A
$i_2(t) = 0.976 \cos(100t + 264.37^\circ)$ A

### 3.3. AC Nodal Analysis (Sinusoidal)

Similar to AC mesh analysis, AC nodal analysis involves converting to the phasor domain and using impedances.

**Steps:**
1.  **Convert to Phasor Domain:** Represent all sources as phasors and elements by their impedances.
2.  **Choose Reference Node:** Select a reference node.
3.  **Assign Node Voltage Phasors:** Assign node voltage phasors ($\mathbf{V}_a, \mathbf{V}_b$, etc.).
4.  **Apply KCL to Each Non-Reference Node:** Write KCL equations using phasor quantities and impedances.
5.  **Solve the System of Equations:** Solve for the node voltage phasors.
6.  **Convert Back to Time Domain (if required):** Convert phasor results back to time-domain sinusoids.

**Example (Ravish R Singh, Chapter 4, AC section):**
Consider a circuit with AC current source and R, L, C components.

```
      R1=10ohm
  +---/\/\---+
  |          |
 Va ---o--- L=0.05H (w=200 rad/s) ---o--- Vb
  |          |     |
 Is(t)=5cos(wt)  C=0.0005F (w=200 rad/s) GND (Reference)
```

Assume $w = 200$ rad/s.
*   $Z_{R1} = 10 \Omega$
*   $Z_L = j\omega L = j(200)(0.05) = j10 \Omega$
*   $Z_C = \frac{1}{j\omega C} = \frac{1}{j(200)(0.0005)} = \frac{1}{j0.1} = -j10 \Omega$
*   $\mathbf{I}_s = 5 \angle 0^\circ$ A (using RMS value)

KCL at Node a:
$\frac{\mathbf{V}_a - 0}{Z_{R1}} + \frac{\mathbf{V}_a - \mathbf{V}_b}{Z_L} - \mathbf{I}_s = 0$
$\frac{\mathbf{V}_a}{10} + \frac{\mathbf{V}_a - \mathbf{V}_b}{j10} - 5 = 0$
Multiply by $10j$:
$j\mathbf{V}_a + j(\mathbf{V}_a - \mathbf{V}_b) - 50j = 0$
$j\mathbf{V}_a + j\mathbf{V}_a - j\mathbf{V}_b = 50j$
$2j\mathbf{V}_a - j\mathbf{V}_b = 50j$
Divide by $j$: $2\mathbf{V}_a - \mathbf{V}_b = 50$ (Equation 1)

KCL at Node b:
$\frac{\mathbf{V}_b - \mathbf{V}_a}{Z_L} + \frac{\mathbf{V}_b - 0}{Z_C} = 0$
$\frac{\mathbf{V}_b - \mathbf{V}_a}{j10} + \frac{\mathbf{V}_b}{-j10} = 0$
Multiply by $10j$:
$j(\mathbf{V}_b - \mathbf{V}_a) - j\mathbf{V}_b = 0$
$j\mathbf{V}_b - j\mathbf{V}_a - j\mathbf{V}_b = 0$
$-j\mathbf{V}_a = 0 \Rightarrow \mathbf{V}_a = 0$ (This seems too simple, let's recheck the circuit diagram and equations)

Ah, if there's a current source feeding directly into node 'a', and then branches from 'a' to 'b' and 'a' to ground, the KCL must be written correctly.

Let's consider a slightly different structure to avoid the trivial $\mathbf{V}_a=0$ result that can happen with symmetric $Z_L$ and $Z_C$ connections.

**Revised Example:**

```
      R1=10ohm
  +---/\/\---+
  |          |
 Va ---o--- L=0.05H (w=200 rad/s) ---o--- Vb
  |          |     |
 Is(t)=5cos(wt)  R2=5ohm      GND (Reference)
```

*   $w = 200$ rad/s.
*   $Z_{R1} = 10 \Omega$
*   $Z_L = j\omega L = j(200)(0.05) = j10 \Omega$
*   $Z_{R2} = 5 \Omega$
*   $\mathbf{I}_s = 5 \angle 0^\circ$ A

KCL at Node a:
$\frac{\mathbf{V}_a - 0}{Z_{R1}} + \frac{\mathbf{V}_a - \mathbf{V}_b}{Z_L} - \mathbf{I}_s = 0$
$\frac{\mathbf{V}_a}{10} + \frac{\mathbf{V}_a - \mathbf{V}_b}{j10} - 5 = 0$
Multiply by $10j$:
$j\mathbf{V}_a + j(\mathbf{V}_a - \mathbf{V}_b) - 50j = 0$
$j\mathbf{V}_a + j\mathbf{V}_a - j\mathbf{V}_b = 50j$
$2j\mathbf{V}_a - j\mathbf{V}_b = 50j$
$2\mathbf{V}_a - \mathbf{V}_b = 50$ (Equation 1)

KCL at Node b:
$\frac{\mathbf{V}_b - \mathbf{V}_a}{Z_L} + \frac{\mathbf{V}_b - 0}{Z_{R2}} = 0$
$\frac{\mathbf{V}_b - \mathbf{V}_a}{j10} + \frac{\mathbf{V}_b}{5} = 0$
Multiply by $10j$:
$j(\mathbf{V}_b - \mathbf{V}_a) + j2\mathbf{V}_b = 0$
$j\mathbf{V}_b - j\mathbf{V}_a + j2\mathbf{V}_b = 0$
$-j\mathbf{V}_a + j3\mathbf{V}_b = 0$
Divide by $j$: $-\mathbf{V}_a + 3\mathbf{V}_b = 0 \Rightarrow \mathbf{V}_a = 3\mathbf{V}_b$ (Equation 2)

Substitute Equation 2 into Equation 1:
$2(3\mathbf{V}_b) - \mathbf{V}_b = 50$
$6\mathbf{V}_b - \mathbf{V}_b = 50$
$5\mathbf{V}_b = 50 \Rightarrow \mathbf{V}_b = 10$ V

$\mathbf{V}_a = 3\mathbf{V}_b = 3(10) = 30$ V

The time-domain node voltages would be:
$v_a(t) = 30 \cos(200t)$ V
$v_b(t) = 10 \cos(200t)$ V
(Assuming the source was $5 \cos(200t)$ V, then phase is $0^\circ$. If we used RMS, it would be $5/\sqrt{2}$ and the resulting node voltages would also be RMS.)

## 4. Important Points to Remember

*   **Consistency is Key:** Use either RMS values or peak values consistently for phasors. RMS is more common in AC power and circuit analysis.
*   **Phase Angles:** Pay close attention to phase angles, especially when dealing with inductors and capacitors.
*   **Complex Arithmetic:** Be proficient in complex number arithmetic (addition, subtraction, multiplication, division, polar and rectangular forms).
*   **Reference Node:** The choice of reference node in nodal analysis is arbitrary, but it should be chosen to minimize the number of equations.
*   **Mesh vs. Nodal:** Choose the method that results in fewer variables and equations for a given circuit. Generally, if there are more voltage sources, mesh analysis is preferred. If there are more current sources, nodal analysis is preferred.
*   **Supernodes and Supermeshes:** These are advanced techniques used when voltage sources are present between non-reference nodes (supernode) or when current sources are present in both meshes (supermesh). This module is a review, so you should recall these concepts.
*   **Frequency Domain:** All AC analysis using impedance is performed in the frequency domain ($j\omega$). The response can be translated back to the time domain if needed.
*   **Reciprocity:** Network Analysis by Van Valkenburg covers network theorems, which are foundational. While not directly mesh/nodal analysis, understanding theorems like superposition and reciprocity can aid in analysis.

## 5. Practice Questions and Exercises

**(Answers provided at the end)**

**Question 1 (DC Mesh Analysis):**
Find the current $I_x$ flowing through the $2\Omega$ resistor in the following DC circuit using mesh analysis.

```
      5ohm
  +-----/\/\-----+
  |              |
 10V(+)        2ohm
  |              |
  +-----/\/\-----+----- 4ohm
        3ohm         3V(+)
```

**Question 2 (DC Nodal Analysis):**
Find the voltage $V_x$ at the node between the $10\Omega$ and $2\Omega$ resistors in the following DC circuit using nodal analysis.

```
      10ohm
  +---/\/\---+
  |          |
 Vx ---o--- 2ohm ---o--- 5V(+)
  |          |     |
 3A --->    3ohm  GND (Reference)
```

**Question 3 (AC Mesh Analysis):**
For the circuit below, find the phasor current $\mathbf{I}_1$ through the inductor. Assume $v(t) = 20 \cos(100t + 30^\circ)$ V, $R_1 = 10 \Omega$, $L = 0.1$ H, $R_2 = 5 \Omega$, $C = 1$ mF. (Use RMS values for sources).

```
      R1=10ohm
  +-----/\/\-----+
  |              |
 V(t)          L=0.1H (w=100 rad/s)
  |              |
  +-----/\/\-----+----- C=1mF (w=100 rad/s)
        R2=5ohm
```

**Question 4 (AC Nodal Analysis):**
For the circuit below, find the phasor voltage $\mathbf{V}_1$ at node 1. Assume $i(t) = 5 \sin(50t - 45^\circ)$ A, $R_1 = 20 \Omega$, $L = 0.2$ H, $C = 200$ $\mu$F. (Use RMS values for sources).

```
      R1=20ohm
  +---/\/\---+
  |          |
 V1 ---o--- L=0.2H (w=50 rad/s) ---o--- V2=0 (GND)
  |          |
 i(t) --->   C=200uF (w=50 rad/s)
```

---

## Answers to Practice Questions

**Answer 1:**
*   Mesh 1 (current $I_1$): $-10 + 5I_1 + 2(I_1 - I_2) = 0 \Rightarrow 7I_1 - 2I_2 = 10$
*   Mesh 2 (current $I_2$): $-2(I_2 - I_1) - 3I_2 - 3 = 0 \Rightarrow 2I_1 - 5I_2 = 3$
*   Multiply eq1 by 5, eq2 by 2:
    $35I_1 - 10I_2 = 50$
    $4I_1 - 10I_2 = 6$
*   Subtract second from first: $31I_1 = 44 \Rightarrow I_1 = 44/31$ A
*   Current through $2\Omega$ resistor is $I_x = I_1 - I_2$.
*   From $7I_1 - 2I_2 = 10 \Rightarrow 2I_2 = 7I_1 - 10 = 7(44/31) - 10 = (308 - 310)/31 = -2/31 \Rightarrow I_2 = -1/31$ A
*   $I_x = I_1 - I_2 = 44/31 - (-1/31) = 45/31$ A.

**Answer 2:**
*   $Z_{R1} = 10\Omega$, $Z_{R2} = 2\Omega$, $Z_{R3} = 3\Omega$.
*   Node voltages $V_x$ and $V_y$ (for the $5V$ source). Let's call the node with $V_x$ as $V_a$ and the other node $V_b$.
*   KCL at Node a: $\frac{V_a - 0}{10} + \frac{V_a - V_b}{2} - 3 = 0 \Rightarrow 0.1V_a + 0.5V_a - 0.5V_b = 3 \Rightarrow 0.6V_a - 0.5V_b = 3$
*   Node b is connected to a voltage source of 5V to ground. So, $V_b = 5$ V.
*   Substitute $V_b=5$ into the first equation: $0.6V_a - 0.5(5) = 3 \Rightarrow 0.6V_a - 2.5 = 3 \Rightarrow 0.6V_a = 5.5 \Rightarrow V_a = 5.5 / 0.6 = 55/6$ V.
*   $V_x = V_a = 55/6$ V.

**Answer 3:**
*   $w = 100$ rad/s.
*   $Z_{R1} = 10 \Omega$.
*   $Z_L = j\omega L = j(100)(0.1) = j10 \Omega$.
*   $Z_{R2} = 5 \Omega$.
*   $Z_C = \frac{1}{j\omega C} = \frac{1}{j(100)(0.001)} = \frac{1}{j0.1} = -j10 \Omega$.
*   $\mathbf{V} = 20 \angle 30^\circ$ V (RMS).

*   Mesh 1 (current $\mathbf{I}_1$): $-\mathbf{V} + \mathbf{I}_1 Z_{R1} + (\mathbf{I}_1 - \mathbf{I}_2) Z_L = 0$
    $-20\angle 30^\circ + \mathbf{I}_1(10) + (\mathbf{I}_1 - \mathbf{I}_2)(j10) = 0$
    $(10 + j10)\mathbf{I}_1 - j10\mathbf{I}_2 = 20\angle 30^\circ$

*   Mesh 2 (current $\mathbf{I}_2$): $-(\mathbf{I}_2 - \mathbf{I}_1) Z_L - \mathbf{I}_2 Z_{R2} - \mathbf{I}_2 Z_C = 0$
    $-(\mathbf{I}_2 - \mathbf{I}_1)(j10) - \mathbf{I}_2(5) - \mathbf{I}_2(-j10) = 0$
    $-j10\mathbf{I}_2 + j10\mathbf{I}_1 - 5\mathbf{I}_2 + j10\mathbf{I}_2 = 0$
    $j10\mathbf{I}_1 - 5\mathbf{I}_2 = 0 \Rightarrow \mathbf{I}_2 = \frac{j10}{5}\mathbf{I}_1 = j2\mathbf{I}_1$

*   Substitute $\mathbf{I}_2$ into Mesh 1 equation:
    $(10 + j10)\mathbf{I}_1 - j10(j2\mathbf{I}_1) = 20\angle 30^\circ$
    $10\mathbf{I}_1 + j10\mathbf{I}_1 - j^2 20\mathbf{I}_1 = 20\angle 30^\circ$
    $10\mathbf{I}_1 + j10\mathbf{I}_1 + 20\mathbf{I}_1 = 20\angle 30^\circ$
    $(30 + j10)\mathbf{I}_1 = 20\angle 30^\circ$
    $Z_{eq} = 30 + j10 = \sqrt{30^2 + 10^2} \angle \arctan(10/30) = \sqrt{1000} \angle 18.43^\circ \approx 31.62 \angle 18.43^\circ$
    $\mathbf{I}_1 = \frac{20\angle 30^\circ}{31.62\angle 18.43^\circ} \approx 0.632 \angle (30^\circ - 18.43^\circ) = 0.632 \angle 11.57^\circ$ A.

**Answer 4:**
*   $w = 50$ rad/s.
*   $Z_{R1} = 20 \Omega$.
*   $Z_L = j\omega L = j(50)(0.2) = j10 \Omega$.
*   $Z_C = \frac{1}{j\omega C} = \frac{1}{j(50)(200 \times 10^{-6})} = \frac{1}{j0.01} = -j100 \Omega$.
*   $\mathbf{I} = 5 \sin(50t - 45^\circ)$ A. Convert to cosine form: $5 \cos(50t - 45^\circ - 90^\circ) = 5 \cos(50t - 135^\circ)$ A.
*   $\mathbf{I}_s = 5 \angle -135^\circ$ A (RMS).

*   KCL at Node 1:
    $\frac{\mathbf{V}_1 - 0}{Z_{R1}} + \frac{\mathbf{V}_1 - \mathbf{V}_2}{Z_L} + \frac{\mathbf{V}_1 - \mathbf{V}_2}{Z_C} - \mathbf{I}_s = 0$
    Since $\mathbf{V}_2 = 0$ (ground):
    $\frac{\mathbf{V}_1}{Z_{R1}} + \frac{\mathbf{V}_1}{Z_L} + \frac{\mathbf{V}_1}{Z_C} - \mathbf{I}_s = 0$
    $\mathbf{V}_1 (\frac{1}{Z_{R1}} + \frac{1}{Z_L} + \frac{1}{Z_C}) = \mathbf{I}_s$
    $\frac{1}{Z_{R1}} = \frac{1}{20} = 0.05$ S (Siemens)
    $\frac{1}{Z_L} = \frac{1}{j10} = -j0.1$ S
    $\frac{1}{Z_C} = \frac{1}{-j100} = j0.01$ S
    $\mathbf{Y}_{eq} = 0.05 - j0.1 + j0.01 = 0.05 - j0.09$ S
    $\mathbf{V}_1 = \frac{\mathbf{I}_s}{\mathbf{Y}_{eq}} = \frac{5 \angle -135^\circ}{0.05 - j0.09}$
    $\mathbf{Y}_{eq} = \sqrt{0.05^2 + (-0.09)^2} \angle \arctan(-0.09/0.05) = \sqrt{0.0025 + 0.0081} \angle -60.95^\circ = \sqrt{0.0106} \angle -60.95^\circ \approx 0.103 \angle -60.95^\circ$ S
    $\mathbf{V}_1 = \frac{5 \angle -135^\circ}{0.103 \angle -60.95^\circ} \approx 48.54 \angle (-135^\circ - (-60.95^\circ)) = 48.54 \angle -74.05^\circ$ V.

---

**Alignment with Course Outcomes:**

*   **CO1: Apply circuit theorems to solve complex DC and AC electric networks.** This entire module directly supports CO1. Mesh and nodal analysis are fundamental techniques used to solve networks. The examples and practice questions illustrate their application to both DC and AC circuits.
*   **Knowledge Level (K3):** The module requires understanding and applying these analysis techniques, which corresponds to the application (K3) level. Students are expected to perform calculations and derive results based on the principles of KVL and KCL.

This module serves as a critical review, reinforcing the skills necessary for more advanced topics in the course.
