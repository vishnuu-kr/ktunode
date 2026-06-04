---
title: "Y-Bus formulation:"
subject: "POWER SYSTEM LAB"
module: "Module 1: Y"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f367dd"
status: "completed"
scrapedAt: "2026-05-23T16:30:36.238Z"
---
# POWER SYSTEM LAB: Module 1: Y-Bus Formulation

## 1. Introduction to Y-Bus Formulation

The Y-bus matrix, also known as the nodal admittance matrix, is a fundamental tool in power system analysis. It represents the admittance network of a power system and is crucial for solving various steady-state and transient problems. This module focuses on understanding and formulating the Y-bus matrix.

**Learning Outcomes:**

*   Understand the concept of nodal analysis and its application to power systems.
*   Formulate the Y-bus matrix from a single-line diagram of a power system.
*   Differentiate between the formation of diagonal and off-diagonal elements of the Y-bus matrix.
*   Apply the Y-bus formulation to solve simple power system problems.
*   Relate the Y-bus formulation to the development of mathematical models for power system analysis (CO1).

**Course Outcomes Alignment:**

*   **CO1: Develop mathematical models and conduct steady-state and transient analysis of power system networks using standard / dedicated software. (Knowledge Level: K3)**
    *   Y-bus formulation is the initial step in developing mathematical models (nodal equations) that are the basis for steady-state power flow analysis and transient stability studies. Understanding its construction allows us to translate a physical power system into a solvable mathematical form.

**Key Concepts and Definitions:**

*   **Node:** A point in the power system where two or more components are connected (e.g., buses, junctions).
*   **Bus:** A common point connecting two or more circuit elements. In Y-bus formulation, we are interested in the buses, which are the primary nodes for analysis.
*   **Admittance (Y):** The reciprocal of impedance ($Y = 1/Z$). It represents how easily current flows through a circuit element. Admittance is a complex quantity, usually expressed as $Y = G + jB$, where $G$ is conductance and $B$ is susceptance.
*   **Nodal Admittance Matrix (Y-bus):** A square matrix where the dimensions are equal to the number of buses in the power system. Each element $Y_{ij}$ represents the total admittance connecting bus $i$ to bus $j$.
*   **Self-Admittance ($Y_{ii}$):** The sum of all admittances connected directly to bus $i$, excluding those connecting bus $i$ to other buses (which are represented by off-diagonal elements).
*   **Mutual Admittance ($Y_{ij}$ for $i \neq j$):** The negative of the total admittance connecting bus $i$ directly to bus $j$.

---

## 2. Y-Bus Formulation: Step-by-Step Process

The Y-bus matrix is typically formulated using nodal analysis, a method that applies Kirchhoff's Current Law (KCL) at each bus.

**Principle:** KCL states that the algebraic sum of currents entering a node (or bus) is equal to the sum of currents leaving the node.

**Mathematical Representation:** For a power system with $n$ buses, the nodal equations can be written in matrix form as:

$[I] = [Y_{bus}] [V]$

Where:
*   $[I]$ is the column vector of injected currents at each bus (a complex quantity).
*   $[Y_{bus}]$ is the $n \times n$ nodal admittance matrix.
*   $[V]$ is the column vector of bus voltage phasors.

**Formation of Y-bus Elements:**

The elements of the Y-bus matrix are determined by considering the connections and admittances of the power system components (transmission lines, transformers, shunt elements).

### 2.1. Diagonal Elements ($Y_{ii}$)

The diagonal element $Y_{ii}$ represents the **sum of all admittances directly connected to bus $i$**. This includes admittances connected to ground (or reference) and admittances connected to other buses.

*   **Process:**
    1.  Identify bus $i$.
    2.  Sum the admittances of all branches connected *directly* to bus $i$.
    3.  If a branch connects bus $i$ to ground with admittance $y_{i0}$, it contributes to $Y_{ii}$.
    4.  If a branch connects bus $i$ to bus $j$ with admittance $y_{ij}$, it contributes to $Y_{ii}$ (and $-y_{ij}$ to $Y_{ij}$).

*   **Formula:**
    $Y_{ii} = \sum_{k=1, k \neq i}^{n} Y_{ik} + \sum_{j=1}^{m} Y_{ij0}$

    Where:
    *   $Y_{ik}$ is the admittance connecting bus $i$ to bus $k$.
    *   $Y_{ij0}$ is the admittance connecting bus $i$ to ground (bus 0).

### 2.2. Off-Diagonal Elements ($Y_{ij}$, $i \neq j$)

The off-diagonal element $Y_{ij}$ represents the **negative of the total admittance connecting bus $i$ directly to bus $j$**.

*   **Process:**
    1.  Identify buses $i$ and $j$ ($i \neq j$).
    2.  Find the direct connection (branch) between bus $i$ and bus $j$.
    3.  If there is a direct connection with admittance $y_{ij}$, then $Y_{ij} = -y_{ij}$.
    4.  If there is no direct connection between bus $i$ and bus $j$, then $Y_{ij} = 0$.
    5.  If there are multiple parallel branches between bus $i$ and bus $j$, sum their admittances and take the negative.

*   **Formula:**
    $Y_{ij} = - \sum_{\text{parallel branches}} y_{ij}$ (for $i \neq j$)

---

## 3. Handling Different Power System Components

The formulation of Y-bus involves translating the impedance/admittance of various components into their admittance representation.

### 3.1. Transmission Lines

Transmission lines are typically represented by their series impedance ($z_{ij}$) and shunt admittances.

*   **Series Impedance ($z_{ij}$):** The impedance of the line connecting bus $i$ to bus $j$ is $z_{ij} = r_{ij} + jx_{ij}$. Its corresponding admittance is $y_{ij} = 1/z_{ij}$.
    *   This $y_{ij}$ contributes to $Y_{ii}$, $Y_{jj}$, and $-y_{ij}$ to $Y_{ij}$ and $Y_{ji}$.

*   **Shunt Admittances ($y_{i0}$ and $y_{j0}$):** Transmission lines often have capacitance to ground, represented by shunt admittances at each end. Typically, half of the total shunt capacitance is lumped at each bus. So, if the total line-to-ground admittance is $y_{c\_ij}$, then $y_{i0} = y_{j0} = y_{c\_ij}/2$.
    *   These $y_{i0}$ and $y_{j0}$ contribute to $Y_{ii}$ and $Y_{jj}$ respectively.

*   **Summary for a single transmission line between bus $i$ and bus $j$:**
    *   $Y_{ii} = Y_{ii} + y_{ij} + y_{i0}$
    *   $Y_{jj} = Y_{jj} + y_{ij} + y_{j0}$
    *   $Y_{ij} = Y_{ij} - y_{ij}$
    *   $Y_{ji} = Y_{ji} - y_{ij}$
    (Here, $Y_{ii}$, $Y_{jj}$, $Y_{ij}$, $Y_{ji}$ on the right-hand side represent the accumulated values before considering this specific line).

### 3.2. Transformers

Transformers are represented by their series impedance and off-nominal turns ratio.

*   **Ideal Transformer with Unity Turns Ratio:** An ideal transformer with a 1:1 turns ratio between bus $i$ and bus $j$ with impedance $z_{ij}$ (referred to the line side) is equivalent to a series admittance $y_{ij} = 1/z_{ij}$ connecting buses $i$ and $j$.
    *   It contributes to $Y_{ii}$, $Y_{jj}$, and $-y_{ij}$ to $Y_{ij}$ and $Y_{ji}$.

*   **Transformer with Off-Nominal Turns Ratio ($a$):** If a transformer connects bus $i$ (primary) to bus $j$ (secondary) with a turns ratio $a = N_i/N_j$, and its series impedance is $z_{ij}$, the equivalent circuit becomes more complex.
    *   The admittance $y_{ij} = 1/z_{ij}$ needs to be adjusted for the turns ratio.
    *   The admittance seen from bus $i$ side is $y'_{ij} = y_{ij} / a^2$.
    *   The admittance seen from bus $j$ side is $y''_{ij} = y_{ij}$.
    *   The mutual admittance is related to $y_{ij}/a$.

    *   **Formation with Off-Nominal Turns Ratio:**
        *   The series admittance of the transformer referred to bus $i$ is $y_{ii\_T} = y_{ij}/a^2$.
        *   The series admittance of the transformer referred to bus $j$ is $y_{jj\_T} = y_{ij}$.
        *   The mutual admittance term is $y_{ij\_T} = -y_{ij}/a$.

        When formulating the Y-bus, these terms are incorporated as follows:
        *   $Y_{ii} = Y_{ii} + y_{ii\_T}$
        *   $Y_{jj} = Y_{jj} + y_{jj\_T}$
        *   $Y_{ij} = Y_{ij} - y_{ij\_T}$
        *   $Y_{ji} = Y_{ji} - (y_{ij}/a)$ (This is $Y_{ji} = Y_{ji} - y_{ij} \times (N_j/N_i)$ if $a = N_i/N_j$)

        **Important Note:** The admittance matrix is always symmetric for passive networks. For transformers with off-nominal turns ratios, the relationship is no longer purely $Y_{ij} = Y_{ji}$. A modified approach or transformation is needed to maintain symmetry if the analysis method strictly requires it. However, for standard power flow formulations, the direct application of these terms often implicitly handles the asymmetry, or the formulation is adapted. A common approach in software is to include the mutual coupling as:
        *   $Y_{ii} = Y_{ii} + y_{ij}/a^2$
        *   $Y_{jj} = Y_{jj} + y_{ij}$
        *   $Y_{ij} = Y_{ij} - y_{ij}/a$
        *   $Y_{ji} = Y_{ji} - y_{ij}/a$

        In many practical Y-bus formulations, the matrix *is* made symmetric by ensuring $Y_{ji} = Y_{ij}$. This is achieved by splitting the mutual admittance term. The more rigorous formulation for a two-winding transformer connected between buses $i$ and $j$ with impedance $z_T$ and turns ratio $a=N_i/N_j$ is:

        $Y_{ii} = Y_{ii} + \frac{1}{z_T a^2}$
        $Y_{jj} = Y_{jj} + \frac{1}{z_T}$
        $Y_{ij} = Y_{ji} = -\frac{1}{z_T a}$

*   **Tap-Changing Transformers:** If a transformer has a tap setting (e.g., $t$), the turns ratio becomes $a \times t$. This $t$ value is used in the calculations above.

### 3.3. Shunt Elements (Shunt Capacitors/Reactors)

Shunt elements connected directly to a bus (not to ground) are not included in the Y-bus formulation as off-diagonal elements. Instead, they are treated as injections at that bus. However, shunt elements connected *to ground* at a bus are directly incorporated into the diagonal elements.

*   **Shunt Admittance to Ground ($Y_{i0}$):** If a shunt element with admittance $Y_{i0}$ is connected from bus $i$ to ground, it directly adds to the self-admittance of bus $i$.
    *   $Y_{ii} = Y_{ii} + Y_{i0}$

---

## 4. Example: Y-Bus Formulation for a Simple Power System

Let's consider a 3-bus system.

**System Description:**

*   **Bus 1:** Generator connected.
*   **Bus 2:** Load connected.
*   **Bus 3:** Load connected.

**Branches:**

1.  **Line 1-2:** Impedance $z_{12} = 0.02 + j0.08$ p.u. Shunt admittance to ground for this line: $y_{c12} = j0.04$ p.u. (lumped as $y_{c12}/2$ at each bus).
2.  **Line 1-3:** Impedance $z_{13} = 0.03 + j0.12$ p.u. Shunt admittance to ground for this line: $y_{c13} = j0.06$ p.u. (lumped as $y_{c13}/2$ at each bus).
3.  **Line 2-3:** Impedance $z_{23} = 0.02 + j0.06$ p.u. No shunt capacitance for this line.
4.  **Shunt Capacitor at Bus 2:** Admittance $Y_{C2} = j0.03$ p.u. (connected to ground).
5.  **Bus 1 is the slack bus (reference bus).**

**Step 1: Convert Impedances to Admittances**

*   $y_{12} = 1/z_{12} = 1/(0.02 + j0.08) = 1.25 - j5.0$ p.u.
*   $y_{13} = 1/z_{13} = 1/(0.03 + j0.12) = 0.769 - j3.077$ p.u. (approx.)
*   $y_{23} = 1/z_{23} = 1/(0.02 + j0.06) = 1.562 - j4.688$ p.u. (approx.)

**Step 2: Calculate Shunt Admittances to Ground**

*   Line 1-2: $y_{10\_12} = y_{20\_12} = y_{c12}/2 = j0.04/2 = j0.02$ p.u.
*   Line 1-3: $y_{10\_13} = y_{30\_13} = y_{c13}/2 = j0.06/2 = j0.03$ p.u.

**Step 3: Formulate the Y-bus Matrix (3x3)**

We will fill the matrix element by element. Initially, assume all elements are zero.

*   **Bus 1 ($i=1$):**
    *   **$Y_{11}$ (Self-admittance):**
        *   From line 1-2 series admittance: $y_{12} = 1.25 - j5.0$
        *   From line 1-3 series admittance: $y_{13} = 0.769 - j3.077$
        *   From line 1-2 shunt: $y_{10\_12} = j0.02$
        *   From line 1-3 shunt: $y_{10\_13} = j0.03$
        *   $Y_{11} = y_{12} + y_{13} + y_{10\_12} + y_{10\_13}$
        *   $Y_{11} = (1.25 - j5.0) + (0.769 - j3.077) + j0.02 + j0.03$
        *   $Y_{11} = (1.25 + 0.769) + j(-5.0 - 3.077 + 0.02 + 0.03)$
        *   $Y_{11} = 2.019 - j8.027$ p.u.

    *   **$Y_{12}$ (Mutual admittance 1-2):**
        *   Direct connection between 1 and 2 with admittance $y_{12}$.
        *   $Y_{12} = -y_{12} = -(1.25 - j5.0) = -1.25 + j5.0$ p.u.

    *   **$Y_{13}$ (Mutual admittance 1-3):**
        *   Direct connection between 1 and 3 with admittance $y_{13}$.
        *   $Y_{13} = -y_{13} = -(0.769 - j3.077) = -0.769 + j3.077$ p.u.

*   **Bus 2 ($i=2$):**
    *   **$Y_{21}$ (Mutual admittance 2-1):**
        *   From the symmetry of the matrix for passive elements, $Y_{21} = Y_{12}$.
        *   $Y_{21} = -1.25 + j5.0$ p.u.

    *   **$Y_{22}$ (Self-admittance):**
        *   From line 1-2 series admittance: $y_{12} = 1.25 - j5.0$
        *   From line 2-3 series admittance: $y_{23} = 1.562 - j4.688$
        *   From line 1-2 shunt: $y_{20\_12} = j0.02$
        *   From shunt capacitor at bus 2: $Y_{C2} = j0.03$
        *   $Y_{22} = y_{12} + y_{23} + y_{20\_12} + Y_{C2}$
        *   $Y_{22} = (1.25 - j5.0) + (1.562 - j4.688) + j0.02 + j0.03$
        *   $Y_{22} = (1.25 + 1.562) + j(-5.0 - 4.688 + 0.02 + 0.03)$
        *   $Y_{22} = 2.812 - j9.638$ p.u.

    *   **$Y_{23}$ (Mutual admittance 2-3):**
        *   Direct connection between 2 and 3 with admittance $y_{23}$.
        *   $Y_{23} = -y_{23} = -(1.562 - j4.688) = -1.562 + j4.688$ p.u.

*   **Bus 3 ($i=3$):**
    *   **$Y_{31}$ (Mutual admittance 3-1):**
        *   From the symmetry, $Y_{31} = Y_{13}$.
        *   $Y_{31} = -0.769 + j3.077$ p.u.

    *   **$Y_{32}$ (Mutual admittance 3-2):**
        *   From the symmetry, $Y_{32} = Y_{23}$.
        *   $Y_{32} = -1.562 + j4.688$ p.u.

    *   **$Y_{33}$ (Self-admittance):**
        *   From line 1-3 series admittance: $y_{13} = 0.769 - j3.077$
        *   From line 2-3 series admittance: $y_{23} = 1.562 - j4.688$
        *   From line 1-3 shunt: $y_{30\_13} = j0.03$
        *   $Y_{33} = y_{13} + y_{23} + y_{30\_13}$
        *   $Y_{33} = (0.769 - j3.077) + (1.562 - j4.688) + j0.03$
        *   $Y_{33} = (0.769 + 1.562) + j(-3.077 - 4.688 + 0.03)$
        *   $Y_{33} = 2.331 - j7.735$ p.u.

**The resulting Y-bus matrix is:**

$$
[Y_{bus}] = \begin{bmatrix}
2.019 - j8.027 & -1.25 + j5.0 & -0.769 + j3.077 \\
-1.25 + j5.0 & 2.812 - j9.638 & -1.562 + j4.688 \\
-0.769 + j3.077 & -1.562 + j4.688 & 2.331 - j7.735
\end{bmatrix}
$$

**Important Note on Calculations:** The accuracy of the off-diagonal elements of $y_{13}$ and $y_{23}$ can affect the final result. It's crucial to maintain sufficient precision during intermediate calculations, especially when dealing with reciprocal values of impedances.

---

## 5. Practice Questions and Exercises

**Question 1:**

Consider a simple power system with two buses (1 and 2) connected by a transmission line. The line has an impedance of $z_{12} = 0.01 + j0.05$ p.u. There is also a shunt capacitance to ground at bus 1 with admittance $Y_{10} = j0.02$ p.u., and at bus 2 with admittance $Y_{20} = j0.01$ p.u. Formulate the Y-bus matrix for this system.

**Answer 1:**

1.  **Calculate Admittance of the Line:**
    $y_{12} = 1/z_{12} = 1/(0.01 + j0.05) = 1.923 - j9.615$ p.u.

2.  **Formulate Y-bus:**
    *   $Y_{11} = y_{12} + Y_{10}$
        $Y_{11} = (1.923 - j9.615) + j0.02 = 1.923 - j9.595$ p.u.
    *   $Y_{12} = -y_{12} = -(1.923 - j9.615) = -1.923 + j9.615$ p.u.
    *   $Y_{21} = Y_{12} = -1.923 + j9.615$ p.u.
    *   $Y_{22} = y_{12} + Y_{20}$
        $Y_{22} = (1.923 - j9.615) + j0.01 = 1.923 - j9.605$ p.u.

    The Y-bus matrix is:
    $$
    [Y_{bus}] = \begin{bmatrix}
    1.923 - j9.595 & -1.923 + j9.615 \\
    -1.923 + j9.615 & 1.923 - j9.605
    \end{bmatrix}
    $$

**Question 2:**

A transformer with impedance $z_T = 0.01 + j0.1$ p.u. connects bus 1 to bus 2. The turns ratio is $a = N_1/N_2 = 1.05$. Formulate the contribution of this transformer to the Y-bus matrix (i.e., how it affects $Y_{11}, Y_{22}, Y_{12}, Y_{21}$). Assume no shunt admittances.

**Answer 2:**

1.  **Calculate Transformer Admittance:**
    $y_T = 1/z_T = 1/(0.01 + j0.1) = 0.990 - j9.901$ p.u.

2.  **Calculate Admittances for Y-bus formulation considering turns ratio:**
    *   Admittance referred to bus 1: $y_{11\_T} = y_T / a^2 = (0.990 - j9.901) / (1.05)^2 = (0.990 - j9.901) / 1.1025 = 0.898 - j9.003$ p.u.
    *   Mutual Admittance: $y_{12\_T} = -y_T / a = -(0.990 - j9.901) / 1.05 = -0.943 + j9.430$ p.u.

3.  **Formulate the contribution to Y-bus:**
    *   $Y_{11}$ increases by $y_{11\_T} = 0.898 - j9.003$ p.u.
    *   $Y_{22}$ increases by $y_T = 0.990 - j9.901$ p.u. (since $Y_{22}$ is unaffected by the turns ratio when calculating the series admittance from the secondary side)
    *   $Y_{12}$ decreases by $y_{12\_T} = -y_T/a$. So $Y_{12} = -(y_T/a)$ and $Y_{21} = -(y_T/a)$ is a simplified symmetric approach.
    *   Using the more rigorous formulation:
        *   $Y_{11}$ increases by $1/z_T a^2$.
        *   $Y_{22}$ increases by $1/z_T$.
        *   $Y_{12} = Y_{21} = -1/(z_T a)$.

    Let's calculate using the rigorous symmetric formulation:
    *   $1/(z_T a^2) = 1 / ((0.01+j0.1) * 1.05^2) = 0.898 - j9.003$
    *   $1/z_T = 0.990 - j9.901$
    *   $-1/(z_T a) = -(0.990 - j9.901) / 1.05 = -0.943 + j9.430$

    So, the transformer contributes:
    *   $Y_{11}$ increases by $0.898 - j9.003$ p.u.
    *   $Y_{22}$ increases by $0.990 - j9.901$ p.u.
    *   $Y_{12} = Y_{21}$ changes by $-0.943 + j9.430$ p.u.

---

## 6. Important Points to Remember

*   **Symmetry:** For passive networks, the Y-bus matrix is always symmetric ($Y_{ij} = Y_{ji}$).
*   **Ground as Reference:** The formulation assumes one bus is the reference (often bus 1, the slack bus). Admittances connected to ground are added to the diagonal elements of the bus they are connected to.
*   **Units:** Always work in per unit (p.u.) for power system analysis.
*   **Complex Numbers:** Admittances are complex numbers ($G+jB$). Pay careful attention to their addition and subtraction.
*   **Transformer Turns Ratio:** Off-nominal turns ratios significantly impact the formulation and require careful handling to ensure the correct admittance values are used for diagonal and off-diagonal elements.
*   **Numerical Precision:** Use sufficient precision in calculations to avoid errors, especially when calculating reciprocals of impedances.
*   **Software Implementation:** In software like MATLAB, Python (SciPy, NumPy), or dedicated power system analysis tools, the Y-bus is typically built by iterating through all branches and shunt elements, accumulating the admittances into the corresponding matrix elements.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


## 7. References and Further Reading

*   **Grainger, J. J., & Stevenson, W. D. (1994). *Power System Analysis*. McGraw-Hill.**
    *   This is a foundational text that provides comprehensive coverage of Y-bus formulation, nodal analysis, and their applications. Chapter 4 (Newton-Raphson method) often starts with the Y-bus formulation.
*   **Stagg, G. W., & El-Abiad, A. H. (1968). *Computer Methods in Power System Analysis*. McGraw-Hill.**
    *   Another classic text with detailed explanations and examples of Y-bus matrix construction for various power system configurations.
*   **Kundur, P. (1994). *Power System Stability and Control*. McGraw-Hill.**
    *   While primarily focused on stability, Kundur's book also covers the initial stages of network modeling, including Y-bus formation, as a prerequisite for dynamic analysis.
*   **Modern Power System Analysis textbooks:** Any recent edition of standard power system analysis textbooks will cover Y-bus formulation. Look for chapters on "Power System Modeling," "Nodal Analysis," or "Power Flow Studies."

---

This module provides the essential building blocks for many subsequent power system lab experiments and analyses. A solid understanding of Y-bus formulation is crucial for developing accurate mathematical models and interpreting the results obtained from power system software.