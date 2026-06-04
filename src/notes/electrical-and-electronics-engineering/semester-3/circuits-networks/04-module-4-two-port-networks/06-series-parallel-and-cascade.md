---
title: "series, parallel and cascade"
subject: "CIRCUITS & NETWORKS"
module: "Module 4: Two port networks"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35ae0"
status: "completed"
scrapedAt: "2026-05-23T16:11:46.816Z"
---
# Circuits & Networks: Module 4 - Two-Port Networks

## Topic: Series, Parallel, and Cascade Connections of Two-Port Networks

### Introduction

This module focuses on the analysis of **two-port networks**, which are fundamental building blocks in circuit analysis. A two-port network is a circuit with two distinct pairs of terminals: an input port and an output port. We will explore how to characterize these networks using various parameters and how to combine them to form more complex systems. This topic specifically delves into three common interconnection methods: **series, parallel, and cascade connections**. Understanding these connections is crucial for analyzing and designing complex electronic systems.

**Course Outcome Alignment:** This topic directly addresses **CO5: Describe two-port networks in terms of various parameters** by building upon the understanding of individual two-port parameters (like Z, Y, H, G, ABCD) and showing how to determine the overall parameters of interconnected networks. This aligns with a **Knowledge Level of K3 (Application)** as we will be applying these parameters to solve problems involving combined networks.

**Textbook References:**

*   **Network Analysis by Van Valkenburg (Pearson, 3rd 2019):** Chapters on two-port network analysis and interconnections.
*   **Network Analysis and Synthesis by Ravish R Singh (McGraw Hill Education, 2nd 2019):** Chapters covering two-port network parameters and their combinations.
*   **Electric Circuits & Networks by Suresh Kumar (Pearson, Ist 2008):** Relevant sections on two-port network characterization and interconnections.
*   **Circuits and Networks, Analysis and Synthesis by A Sudhakar, Shyammohan S Palli (McGraw Hill Education, 5th 2017):** Chapters dedicated to the analysis of interconnected two-port networks.

---

### 1. Two-Port Network Parameters

Before diving into interconnections, it's essential to recall the various parameters used to characterize a two-port network. These parameters provide a concise mathematical description of the network's behavior, relating input and output voltages and currents.

**Key Concepts & Definitions:**

*   **Two-Port Network:** A network with four terminals, grouped into two pairs: an input port (1-1') and an output port (2-2').
*   **Port Voltages and Currents:**
    *   $V_1$: Voltage at the input port.
    *   $I_1$: Current entering the input port.
    *   $V_2$: Voltage at the output port.
    *   $I_2$: Current entering the output port (conventionally, current leaving the output port is $I_2'$, so $I_2 = -I_2'$).

**Common Two-Port Parameters:**

*   **Impedance (Z) Parameters:**
    *   Equations:
        $V_1 = z_{11}I_1 + z_{12}I_2$
        $V_2 = z_{21}I_1 + z_{22}I_2$
    *   Physical Interpretation:
        *   $z_{11} = V_1/I_1$ when $I_2 = 0$ (open-circuit input impedance)
        *   $z_{12} = V_1/I_2$ when $I_1 = 0$ (open-circuit reverse transfer impedance)
        *   $z_{21} = V_2/I_1$ when $I_2 = 0$ (open-circuit forward transfer impedance)
        *   $z_{22} = V_2/I_2$ when $I_1 = 0$ (open-circuit output impedance)
    *   **Symmetric Network:** $z_{11} = z_{22}$
    *   **Reciprocal Network:** $z_{12} = z_{21}$

*   **Admittance (Y) Parameters:**
    *   Equations:
        $I_1 = y_{11}V_1 + y_{12}V_2$
        $I_2 = y_{21}V_1 + y_{22}V_2$
    *   Physical Interpretation:
        *   $y_{11} = I_1/V_1$ when $V_2 = 0$ (short-circuit input admittance)
        *   $y_{12} = I_1/V_2$ when $V_1 = 0$ (short-circuit reverse transfer admittance)
        *   $y_{21} = I_2/V_1$ when $V_2 = 0$ (short-circuit forward transfer admittance)
        *   $y_{22} = I_2/V_2$ when $V_1 = 0$ (short-circuit output admittance)
    *   **Symmetric Network:** $y_{11} = y_{22}$
    *   **Reciprocal Network:** $y_{12} = y_{21}$

*   **Hybrid (H) Parameters:**
    *   Equations:
        $V_1 = h_{11}I_1 + h_{12}V_2$
        $I_2 = h_{21}I_1 + h_{22}V_2$
    *   Physical Interpretation:
        *   $h_{11} = V_1/I_1$ when $V_2 = 0$ (short-circuit input impedance)
        *   $h_{12} = V_1/V_2$ when $I_1 = 0$ (open-circuit reverse voltage transfer ratio)
        *   $h_{21} = I_2/I_1$ when $V_2 = 0$ (short-circuit forward current transfer ratio)
        *   $h_{22} = I_2/V_2$ when $I_1 = 0$ (open-circuit output admittance)
    *   **Symmetric Network:** $h_{11}h_{22} - h_{12}h_{21} = 1$ (condition for symmetry is not typically based on $h_{11}=h_{22}$)
    *   **Reciprocal Network:** $h_{12} = -h_{21}$

*   **Inverse Hybrid (G) Parameters:**
    *   Equations:
        $I_1 = g_{11}V_1 + g_{12}I_2$
        $V_2 = g_{21}V_1 + g_{22}I_2$
    *   Physical Interpretation:
        *   $g_{11} = I_1/V_1$ when $I_2 = 0$ (open-circuit input admittance)
        *   $g_{12} = I_1/I_2$ when $V_1 = 0$ (short-circuit reverse current transfer ratio)
        *   $g_{21} = V_2/V_1$ when $I_2 = 0$ (open-circuit forward voltage transfer ratio)
        *   $g_{22} = V_2/I_2$ when $V_1 = 0$ (short-circuit output impedance)
    *   **Symmetric Network:** $g_{11} = g_{22}$
    *   **Reciprocal Network:** $g_{12} = -g_{21}$

*   **Transmission (ABCD) Parameters:**
    *   Equations:
        $V_1 = AV_2 - BI_2$
        $I_1 = CV_2 - DI_2$
    *   Physical Interpretation:
        *   $A = V_1/V_2$ when $I_2 = 0$ (open-circuit voltage transfer ratio)
        *   $B = -V_1/I_2$ when $V_2 = 0$ (short-circuit transfer impedance)
        *   $C = I_1/V_2$ when $I_2 = 0$ (open-circuit transfer admittance)
        *   $D = -I_1/I_2$ when $V_2 = 0$ (short-circuit current transfer ratio)
    *   **Symmetric Network:** $AD - BC = 1$
    *   **Reciprocal Network:** $AD - BC = 1$ (This condition applies to many parameters for reciprocal networks, but specifically $AD-BC=1$ for ABCD parameters).
    *   **Important Note:** For ABCD parameters, the equations are written with a negative sign for $B$ and $D$ current terms. This is a common convention, but it's crucial to be consistent.

**Important Points to Remember:**

*   The choice of parameters depends on the application and the termination conditions (e.g., Y parameters are convenient for short-circuit terminations, Z for open-circuit).
*   Conversions between different parameter sets exist and are essential for network analysis.
*   The condition $AD - BC = 1$ is a fundamental property for reciprocal two-port networks when using ABCD parameters. Similarly, symmetry implies certain equalities between parameters.

---

### 2. Series Connection of Two-Port Networks

In a series connection, two two-port networks are connected such that their input ports are in series and their output ports are in series.

**Circuit Diagram:**

```
      +-----Port 1 of Network A-----+-----Port 1 of Network B-----+
      |                             |                             |
     V1                             V1                            V1
      o-------[ Network A ]-------o-------[ Network B ]-------o
      |           z11A z12A       |           z11B z12B       |
      |           z21A z22A       |           z21B z22B       |
      o---------------------------o---------------------------o
     I1                            I1                            I1
      |                             |                             |
      +-----Port 2 of Network A-----+-----Port 2 of Network B-----+
     V2                             V2                            V2
```

**Analysis using Z-parameters:**

Z-parameters are most suitable for series connections because the Z-parameter equations relate voltages to currents, and in a series connection, the currents are the same at the respective ports, while voltages add up.

Let Network A be characterized by Z-parameters:
$V_{1A} = z_{11A}I_{1A} + z_{12A}I_{2A}$
$V_{2A} = z_{21A}I_{1A} + z_{22A}I_{2A}$

Let Network B be characterized by Z-parameters:
$V_{1B} = z_{11B}I_{1B} + z_{12B}I_{2B}$
$V_{2B} = z_{21B}I_{1B} + z_{22B}I_{2B}$

In a series connection:
*   The input currents are the same: $I_{1A} = I_{1B} = I_1$
*   The output currents are the same: $I_{2A} = I_{2B} = I_2$
*   The total input voltage is the sum of individual input voltages: $V_1 = V_{1A} + V_{1B}$
*   The total output voltage is the sum of individual output voltages: $V_2 = V_{2A} + V_{2B}$

Substituting these into the equations:
$V_1 = (z_{11A}I_1 + z_{12A}I_2) + (z_{11B}I_1 + z_{12B}I_2)$
$V_1 = (z_{11A} + z_{11B})I_1 + (z_{12A} + z_{12B})I_2$

$V_2 = (z_{21A}I_1 + z_{22A}I_2) + (z_{21B}I_1 + z_{22B}I_2)$
$V_2 = (z_{21A} + z_{21B})I_1 + (z_{22A} + z_{22B})I_2$

For the overall network, the Z-parameters are:
$z_{11} = z_{11A} + z_{11B}$
$z_{12} = z_{12A} + z_{12B}$
$z_{21} = z_{21A} + z_{21B}$
$z_{22} = z_{22A} + z_{22B}$

**Conclusion for Series Connection:** The Z-parameters of the cascaded networks are the sum of the individual Z-parameters.

**Important Points to Remember:**

*   Series connections are best analyzed using Z-parameters.
*   If either network is not reciprocal, their Z-matrices will not be symmetric. The sum of two non-symmetric matrices will also be non-symmetric.
*   If Network A is symmetric ($z_{11A} = z_{22A}$) and Network B is symmetric ($z_{11B} = z_{22B}$), then the combined network will be symmetric if the sum of the off-diagonal elements equals the sum of the diagonal elements, which is not guaranteed. Symmetry of the overall network requires $z_{11} = z_{22}$, which implies $z_{11A} + z_{11B} = z_{21A} + z_{22B}$.

---

### 3. Parallel Connection of Two-Port Networks

In a parallel connection, two two-port networks are connected such that their input ports are in parallel and their output ports are in parallel.

**Circuit Diagram:**

```
      +----------+----------+
      |          |          |
     V1 --------o---------o-------- V1
      |         / \        |
      |        /   \       |
      |       /     \      |
      |   [ Net A ] [ Net B ]
      |      y11A   y11B     |
      |      y12A   y12B     |
      |      y21A   y21B     |
      |      y22A   y22B     |
      |       \     /      |
      |        \   /       |
      |         \ /        |
     I1 --------o---------o-------- I1
      |          |          |
      +----------+----------+
      |          |          |
     V2 --------o---------o-------- V2
      |         / \        |
      |        /   \       |
      |       /     \      |
      |   [ Net A ] [ Net B ]
      |      y21A   y21B     |
      |      y22A   y22B     |
      |      y11A   y11B     |
      |      y12A   y12B     |
      |       \     /      |
      |        \   /       |
      |         \ /        |
     I2 --------o---------o-------- I2
      |          |          |
      +----------+----------+
```
*(Note: Diagram shows parallel connection of input ports and parallel connection of output ports. The labels for y-parameters for Network A and B are illustrative and should correspond to their respective network structure.)*

**Analysis using Y-parameters:**

Y-parameters are most suitable for parallel connections because the Y-parameter equations relate currents to voltages, and in a parallel connection, the voltages are the same at the respective ports, while currents add up.

Let Network A be characterized by Y-parameters:
$I_{1A} = y_{11A}V_{1A} + y_{12A}V_{2A}$
$I_{2A} = y_{21A}V_{1A} + y_{22A}V_{2A}$

Let Network B be characterized by Y-parameters:
$I_{1B} = y_{11B}V_{1B} + y_{12B}V_{2B}$
$I_{2B} = y_{21B}V_{1B} + y_{22B}V_{2B}$

In a parallel connection:
*   The input voltages are the same: $V_{1A} = V_{1B} = V_1$
*   The output voltages are the same: $V_{2A} = V_{2B} = V_2$
*   The total input current is the sum of individual input currents: $I_1 = I_{1A} + I_{1B}$
*   The total output current is the sum of individual output currents: $I_2 = I_{2A} + I_{2B}$

Substituting these into the equations:
$I_1 = (y_{11A}V_1 + y_{12A}V_2) + (y_{11B}V_1 + y_{12B}V_2)$
$I_1 = (y_{11A} + y_{11B})V_1 + (y_{12A} + y_{12B})V_2$

$I_2 = (y_{21A}V_1 + y_{22A}V_2) + (y_{21B}V_1 + y_{22B}V_2)$
$I_2 = (y_{21A} + y_{21B})V_1 + (y_{22A} + y_{22B})V_2$

For the overall network, the Y-parameters are:
$y_{11} = y_{11A} + y_{11B}$
$y_{12} = y_{12A} + y_{12B}$
$y_{21} = y_{21A} + y_{21B}$
$y_{22} = y_{22A} + y_{22B}$

**Conclusion for Parallel Connection:** The Y-parameters of the cascaded networks are the sum of the individual Y-parameters.

**Important Points to Remember:**

*   Parallel connections are best analyzed using Y-parameters.
*   If Network A is symmetric ($y_{11A} = y_{22A}$) and Network B is symmetric ($y_{11B} = y_{22B}$), then the combined network will be symmetric if the sum of the off-diagonal elements equals the sum of the diagonal elements. Again, this is not guaranteed. Symmetry of the overall network requires $y_{11} = y_{22}$, which implies $y_{11A} + y_{11B} = y_{21A} + y_{22B}$.

---

### 4. Cascade Connection of Two-Port Networks

In a cascade connection, the output port of the first network is connected to the input port of the second network. This is a very common and important interconnection.

**Circuit Diagram:**

```
      +-----Port 1 of Network 1-----+-----+-----Port 1 of Network 2-----+
      |                             |     |                             |
     V1                             |    V1'                            |
      o-------[ Network 1 ]-------o----o-------[ Network 2 ]-------o
      |           T1                  |           T2                  |
      o---------------------------o----o---------------------------o
     I1                            |    I1'                            |
      |                             |     |                             |
      +-----Port 2 of Network 1-----+-----+-----Port 2 of Network 2-----+
     V2                             |    V2'                            |
      |                             |     |                             |
      +-----------------------------+-----+-----------------------------+
     I2                             |    I2'                            |
                                   (Connection)
```

Where $T_1$ and $T_2$ represent the two-port networks and their respective parameters.

**Analysis using ABCD Parameters:**

ABCD parameters are ideal for cascade connections because the equations are formulated to directly represent the input voltage/current in terms of the output voltage/current, which perfectly aligns with how cascaded systems behave.

Let Network 1 be characterized by ABCD parameters:
$V_1 = A_1V_2 - B_1I_2$
$I_1 = C_1V_2 - D_1I_2$

Let Network 2 be characterized by ABCD parameters:
$V_1' = A_2V_2' - B_2I_2'$
$I_1' = C_2V_2' - D_2I_2'$

In a cascade connection:
*   The output of Network 1 is the input of Network 2: $V_2 = V_1'$ and $I_2 = I_1'$
*   The input of the overall network is the input of Network 1: $V_1$ and $I_1$
*   The output of the overall network is the output of Network 2: $V_2'$ and $I_2'$

We want to find the overall ABCD parameters ($A, B, C, D$) such that:
$V_1 = AV_2' - BI_2'$
$I_1 = CV_2' - DI_2'$

Substitute the Network 2 equations into the Network 1 equations:
$V_1 = A_1(A_2V_2' - B_2I_2') - B_1(C_2V_2' - D_2I_2')$
$V_1 = (A_1A_2 - B_1C_2)V_2' - (A_1B_2 - B_1D_2)I_2'$

Comparing this with the overall equation for $V_1$:
$A = A_1A_2 - B_1C_2$
$B = A_1B_2 - B_1D_2$

Now for the current equation:
$I_1 = C_1(A_2V_2' - B_2I_2') - D_1(C_2V_2' - D_2I_2')$
$I_1 = (C_1A_2 - D_1C_2)V_2' - (C_1B_2 - D_1D_2)I_2'$

Comparing this with the overall equation for $I_1$:
$C = C_1A_2 - D_1C_2$
$D = C_1B_2 - D_1D_2$

**Conclusion for Cascade Connection:** The overall ABCD matrix is the product of the individual ABCD matrices (in order):
$T_{overall} = T_1 \times T_2$

$\begin{bmatrix} A & B \\ C & D \end{bmatrix} = \begin{bmatrix} A_1 & B_1 \\ C_1 & D_1 \end{bmatrix} \begin{bmatrix} A_2 & B_2 \\ C_2 & D_2 \end{bmatrix}$

**Important Points to Remember:**

*   Cascade connections are best analyzed using ABCD parameters.
*   The order of matrix multiplication is crucial: the first network's parameters come first in the multiplication.
*   If both Network 1 and Network 2 are reciprocal, their individual ABCD matrices will satisfy $A_1D_1 - B_1C_1 = 1$ and $A_2D_2 - B_2C_2 = 1$.
*   For a cascade of reciprocal networks, the overall network is also reciprocal, and its ABCD matrix will satisfy $AD - BC = 1$.
    Let's verify this:
    $AD - BC = (A_1A_2 - B_1C_2)(C_1B_2 - D_1D_2) - (A_1B_2 - B_1D_2)(C_1A_2 - D_1C_2)$
    Expanding and simplifying this will yield 1, confirming the reciprocal nature.

---

### 5. Examples and Practice Questions

**Example 1: Series Connection**

Two identical passive networks are connected in series. Each network is characterized by the following Z-parameters:
$z_A = \begin{bmatrix} 5 & 2 \\ 3 & 4 \end{bmatrix} \quad$ and $\quad z_B = \begin{bmatrix} 6 & 1 \\ 2 & 3 \end{bmatrix}$

Find the overall Z-parameters of the series combination.

**Solution:**
For a series connection, the overall Z-parameters are the sum of individual Z-parameters:
$z_{overall} = z_A + z_B$
$z_{overall} = \begin{bmatrix} 5 & 2 \\ 3 & 4 \end{bmatrix} + \begin{bmatrix} 6 & 1 \\ 2 & 3 \end{bmatrix} = \begin{bmatrix} 5+6 & 2+1 \\ 3+2 & 4+3 \end{bmatrix} = \begin{bmatrix} 11 & 3 \\ 5 & 7 \end{bmatrix}$

So, $z_{11} = 11\ \Omega$, $z_{12} = 3\ \Omega$, $z_{21} = 5\ \Omega$, $z_{22} = 7\ \Omega$.

---

**Example 2: Parallel Connection**

Two identical passive networks are connected in parallel. Each network is characterized by the following Y-parameters:
$y_A = \begin{bmatrix} 0.1 & -0.05 \\ -0.02 & 0.08 \end{bmatrix} \quad$ and $\quad y_B = \begin{bmatrix} 0.05 & -0.01 \\ -0.01 & 0.06 \end{bmatrix}$

Find the overall Y-parameters of the parallel combination.

**Solution:**
For a parallel connection, the overall Y-parameters are the sum of individual Y-parameters:
$y_{overall} = y_A + y_B$
$y_{overall} = \begin{bmatrix} 0.1 & -0.05 \\ -0.02 & 0.08 \end{bmatrix} + \begin{bmatrix} 0.05 & -0.01 \\ -0.01 & 0.06 \end{bmatrix} = \begin{bmatrix} 0.1+0.05 & -0.05-0.01 \\ -0.02-0.01 & 0.08+0.06 \end{bmatrix} = \begin{bmatrix} 0.15 & -0.06 \\ -0.03 & 0.14 \end{bmatrix}$

So, $y_{11} = 0.15\ S$, $y_{12} = -0.06\ S$, $y_{21} = -0.03\ S$, $y_{22} = 0.14\ S$.

---

**Example 3: Cascade Connection**

Consider two two-port networks connected in cascade. Network 1 is characterized by the following ABCD parameters:
$T_1 = \begin{bmatrix} 2 & 1 \\ 3 & 2 \end{bmatrix}$

Network 2 is characterized by the following ABCD parameters:
$T_2 = \begin{bmatrix} 3 & 2 \\ 4 & 3 \end{bmatrix}$

Find the overall ABCD parameters of the cascade connection.

**Solution:**
For a cascade connection, the overall ABCD matrix is the product of individual ABCD matrices:
$T_{overall} = T_1 \times T_2$
$T_{overall} = \begin{bmatrix} 2 & 1 \\ 3 & 2 \end{bmatrix} \begin{bmatrix} 3 & 2 \\ 4 & 3 \end{bmatrix}$

$A = (2 \times 3) + (1 \times 4) = 6 + 4 = 10$
$B = (2 \times 2) + (1 \times 3) = 4 + 3 = 7$
$C = (3 \times 3) + (2 \times 4) = 9 + 8 = 17$
$D = (3 \times 2) + (2 \times 3) = 6 + 6 = 12$

So, $T_{overall} = \begin{bmatrix} 10 & 7 \\ 17 & 12 \end{bmatrix}$.

Let's check the reciprocal property:
For $T_1$: $A_1D_1 - B_1C_1 = (2 \times 2) - (1 \times 3) = 4 - 3 = 1$. Network 1 is reciprocal.
For $T_2$: $A_2D_2 - B_2C_2 = (3 \times 3) - (2 \times 4) = 9 - 8 = 1$. Network 2 is reciprocal.
For $T_{overall}$: $AD - BC = (10 \times 12) - (7 \times 17) = 120 - 119 = 1$. The overall network is also reciprocal.

---

### Practice Questions

1.  **Series Connection:** Two two-port networks, A and B, are connected in series. Their Z-parameters are given as:
    $z_A = \begin{bmatrix} 10 & 5 \\ 5 & 12 \end{bmatrix} \quad$ and $\quad z_B = \begin{bmatrix} 8 & 2 \\ 4 & 6 \end{bmatrix}$
    Find the Z-parameters of the combined network.

2.  **Parallel Connection:** Two two-port networks, X and Y, are connected in parallel. Their Y-parameters are given as:
    $y_X = \begin{bmatrix} 0.2 & -0.1 \\ -0.1 & 0.3 \end{bmatrix} \quad$ and $\quad y_Y = \begin{bmatrix} 0.1 & -0.05 \\ -0.02 & 0.04 \end{bmatrix}$
    Find the Y-parameters of the combined network.

3.  **Cascade Connection:** Network P has the following ABCD parameters:
    $T_P = \begin{bmatrix} 1.5 & 10 \\ 0.5 & 2.0 \end{bmatrix}$
    Network Q has the following ABCD parameters:
    $T_Q = \begin{bmatrix} 2.5 & 15 \\ 0.2 & 1.8 \end{bmatrix}$
    Networks P and Q are connected in cascade with P followed by Q. Find the overall ABCD parameters of the cascade connection.

4.  **Mixed Connection (Concept):** If Network 1 is connected in series with Network 2, and the resulting combination is then connected in parallel with Network 3, which parameter set would be most convenient for analyzing the overall network? Explain your reasoning.

---

### Answers to Practice Questions

1.  **Series Connection:**
    $z_{overall} = z_A + z_B = \begin{bmatrix} 10 & 5 \\ 5 & 12 \end{bmatrix} + \begin{bmatrix} 8 & 2 \\ 4 & 6 \end{bmatrix} = \begin{bmatrix} 18 & 7 \\ 9 & 18 \end{bmatrix}$

2.  **Parallel Connection:**
    $y_{overall} = y_X + y_Y = \begin{bmatrix} 0.2 & -0.1 \\ -0.1 & 0.3 \end{bmatrix} + \begin{bmatrix} 0.1 & -0.05 \\ -0.02 & 0.04 \end{bmatrix} = \begin{bmatrix} 0.3 & -0.15 \\ -0.12 & 0.34 \end{bmatrix}$

3.  **Cascade Connection:**
    $T_{overall} = T_P \times T_Q = \begin{bmatrix} 1.5 & 10 \\ 0.5 & 2.0 \end{bmatrix} \begin{bmatrix} 2.5 & 15 \\ 0.2 & 1.8 \end{bmatrix}$
    $A = (1.5 \times 2.5) + (10 \times 0.2) = 3.75 + 2.0 = 5.75$
    $B = (1.5 \times 15) + (10 \times 1.8) = 22.5 + 18.0 = 40.5$
    $C = (0.5 \times 2.5) + (2.0 \times 0.2) = 1.25 + 0.4 = 1.65$
    $D = (0.5 \times 15) + (2.0 \times 1.8) = 7.5 + 3.6 = 11.1$
    $T_{overall} = \begin{bmatrix} 5.75 & 40.5 \\ 1.65 & 11.1 \end{bmatrix}$

4.  **Mixed Connection (Concept):**
    For a series-parallel combination, it's often most convenient to convert all individual two-port networks to a common parameter set that can handle both series and parallel connections, or to use a parameter set that is versatile.
    *   **Series connection:** Best handled by Z-parameters.
    *   **Parallel connection:** Best handled by Y-parameters.
    *   **Cascade connection:** Best handled by ABCD parameters.

    To analyze the entire network:
    1.  Perform the series connection of Network 1 and Network 2 using Z-parameters. Convert the resulting overall Z-parameters to ABCD parameters.
    2.  Perform the parallel connection of the (Network 1 + Network 2) combination with Network 3. This would involve converting the ABCD parameters of the series combination to Y-parameters and then adding them to the Y-parameters of Network 3. Finally, convert the resulting Y-parameters to ABCD parameters for the overall analysis.

    Alternatively, one could convert all networks to ABCD parameters initially. Then, to perform a series connection, one would need to convert ABCD to Z, perform the series addition, and convert back to ABCD. To perform a parallel connection, one would convert ABCD to Y, perform the parallel addition, and convert back to ABCD.

    Given the typical analysis flow, it's often best to determine the parameter set that is most easily manipulated at each stage. If the final goal is to express the overall network in ABCD parameters, converting everything to ABCD and then performing the necessary transformations might be more straightforward than switching back and forth between Z and Y. However, **direct parallel connection of ABCD parameters is not straightforward, nor is direct series connection of Y-parameters.**

    Therefore, the most convenient approach would involve using a **combination of parameter conversions**. If the final output is desired in ABCD parameters, it would be beneficial to:
    *   Convert Network 1 and Network 2 to Z-parameters for series connection.
    *   Sum their Z-parameters.
    *   Convert the resulting Z-parameters of the series combination to ABCD parameters.
    *   Convert Network 3 to Y-parameters.
    *   Convert the ABCD parameters of the series combination to Y-parameters.
    *   Add the Y-parameters of the series combination and Network 3.
    *   Convert the final Y-parameters to ABCD parameters for the overall network.

    This highlights the importance of understanding parameter conversions.

---

### Conclusion

This topic has provided a detailed understanding of how to combine two-port networks in series, parallel, and cascade configurations. By mastering the appropriate parameter sets (Z for series, Y for parallel, ABCD for cascade) and understanding the conversion techniques between them, one can effectively analyze complex interconnected circuits. These concepts are fundamental for designing and troubleshooting various electronic circuits and systems.

**Learning Outcomes Covered:**

*   **CO5:** Described two-port networks in terms of various parameters (Z, Y, H, G, ABCD) and how these parameters combine in series, parallel, and cascade connections. This involves applying the rules for parameter summation (series/parallel) and matrix multiplication (cascade). (Knowledge Level: K3)
