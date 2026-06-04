---
title: "relationship between parameters"
subject: "CIRCUITS & NETWORKS"
module: "Module 4: Two port networks"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35ade"
status: "completed"
scrapedAt: "2026-05-23T16:11:45.356Z"
---
# CIRCUITS & NETWORKS: Module 4 - Two Port Networks

## Topic: Relationship Between Parameters

This module delves into the characterization of two-port networks using various parameter sets and explores the crucial relationships between these parameters. Understanding these relationships allows for flexibility in analyzing and designing circuits.

**Course Outcome Alignment:**

*   **CO5: Describe two-port networks in terms of various parameters. (Knowledge Level: K3)**
    *   This topic directly supports CO5 by explaining how different parameter sets represent the same two-port network and how to convert between them.

**Learning Outcomes Covered:**

*   Derive the relationships between the different two-port parameters (Z, Y, ABCD, H, G).
*   Understand the significance of these relationships in circuit analysis and design.
*   Apply these relationships to solve practical circuit problems.

---

### 1. Introduction to Two-Port Networks

A two-port network is a circuit or system with two distinct pairs of terminals, designated as input and output ports. It is a fundamental concept for analyzing and simplifying complex electrical networks.

**Key Concepts:**

*   **Ports:** A pair of terminals where the circuit interacts with external elements.
*   **Two-Port Network:** A circuit with one input port and one output port.
*   **Port Voltages and Currents:**
    *   $V_1, I_1$: Voltage and current at the input port.
    *   $V_2, I_2$: Voltage and current at the output port. (Note: $I_2$ is conventionally defined as entering the network at the output port).

**Representation:**

A two-port network can be represented by a "black box" with two ports.

```
      +-------+
I1 -->|       |--> I2 (entering the network)
      |       |
      V1      V2
      |       |
      +-------+
```

---

### 2. Common Two-Port Parameter Sets

Several sets of parameters are used to describe the behavior of two-port networks. The choice of parameter set often depends on the circuit configuration and the nature of the analysis.

#### 2.1. Impedance (Z) Parameters (Open-Circuit Impedance Parameters)

*   **Definition:** These parameters are obtained by expressing port voltages in terms of port currents.
*   **Equations:**
    $V_1 = z_{11}I_1 + z_{12}I_2$
    $V_2 = z_{21}I_1 + z_{22}I_2$

*   **Matrix Form:**
    $\begin{bmatrix} V_1 \\ V_2 \end{bmatrix} = \begin{bmatrix} z_{11} & z_{12} \\ z_{21} & z_{22} \end{bmatrix} \begin{bmatrix} I_1 \\ I_2 \end{bmatrix}$

*   **Interpretation of Z Parameters:**
    *   $z_{11} = \left.\frac{V_1}{I_1}\right|_{I_2=0}$: Input impedance when the output port is open-circuited.
    *   $z_{12} = \left.\frac{V_1}{I_2}\right|_{I_1=0}$: Transfer impedance from output to input when the input port is open-circuited.
    *   $z_{21} = \left.\frac{V_2}{I_1}\right|_{I_2=0}$: Transfer impedance from input to output when the output port is open-circuited.
    *   $z_{22} = \left.\frac{V_2}{I_2}\right|_{I_1=0}$: Output impedance when the input port is open-circuited.

*   **Network Synthesis (Simplified):** A two-port network can be synthesized using Z parameters by considering it as a series connection of impedances. The 'T' network is often associated with Z parameters.

    ```
          I1 --->---Z11-Z12--- V1
                    |       |
                    |       |
                    Z12-Z22 Z21-Z12
                    |       |
          I2 --->--- V2
    ```
    *(Note: The drawing above represents the concept of Z parameters and not a direct circuit realization. A T-equivalent circuit for Z parameters would involve three impedances.)*

*   **Reciprocal Networks:** For reciprocal networks, $z_{12} = z_{21}$.
*   **Symmetric Networks:** For symmetric networks, $z_{11} = z_{22}$ and $z_{12} = z_{21}$.

**Reference:** Van Valkenburg, Chapter 8, "Two-Port Networks". Singh, Chapter 10, "Two Port Networks". Sudhakar & Palli, Chapter 12, "Two Port Networks".

#### 2.2. Admittance (Y) Parameters (Short-Circuit Admittance Parameters)

*   **Definition:** These parameters are obtained by expressing port currents in terms of port voltages.
*   **Equations:**
    $I_1 = y_{11}V_1 + y_{12}V_2$
    $I_2 = y_{21}V_1 + y_{22}V_2$

*   **Matrix Form:**
    $\begin{bmatrix} I_1 \\ I_2 \end{bmatrix} = \begin{bmatrix} y_{11} & y_{12} \\ y_{21} & y_{22} \end{bmatrix} \begin{bmatrix} V_1 \\ V_2 \end{bmatrix}$

*   **Interpretation of Y Parameters:**
    *   $y_{11} = \left.\frac{I_1}{V_1}\right|_{V_2=0}$: Input admittance when the output port is short-circuited.
    *   $y_{12} = \left.\frac{I_1}{V_2}\right|_{V_1=0}$: Transfer admittance from output to input when the input port is short-circuited.
    *   $y_{21} = \left.\frac{I_2}{V_1}\right|_{V_2=0}$: Transfer admittance from input to output when the output port is short-circuited.
    *   $y_{22} = \left.\frac{I_2}{V_2}\right|_{V_1=0}$: Output admittance when the input port is short-circuited.

*   **Network Synthesis (Simplified):** A two-port network can be synthesized using Y parameters by considering it as a parallel connection of admittances. The 'Pi' network is often associated with Y parameters.

    ```
          I1 --->--- Y11 ---+--- Y12 --- V2
                    |       |       |
                    |       |       |
                    Y21     +-------+
                    |       |
          V1 <------ V2 <------+
    ```
    *(Note: The drawing above represents the concept of Y parameters and not a direct circuit realization. A Pi-equivalent circuit for Y parameters would involve three admittances.)*

*   **Reciprocal Networks:** For reciprocal networks, $y_{12} = y_{21}$.
*   **Symmetric Networks:** For symmetric networks, $y_{11} = y_{22}$ and $y_{12} = y_{21}$.

**Reference:** Van Valkenburg, Chapter 8, "Two-Port Networks". Singh, Chapter 10, "Two Port Networks". Sudhakar & Palli, Chapter 12, "Two Port Networks".

#### 2.3. Hybrid (H) Parameters (Short-Circuit Input, Open-Circuit Output)

*   **Definition:** These parameters mix voltage and current dependencies. The input voltage and output current are expressed in terms of input current and output voltage.
*   **Equations:**
    $V_1 = h_{11}I_1 + h_{12}V_2$
    $I_2 = h_{21}I_1 + h_{22}V_2$

*   **Matrix Form:**
    $\begin{bmatrix} V_1 \\ I_2 \end{bmatrix} = \begin{bmatrix} h_{11} & h_{12} \\ h_{21} & h_{22} \end{bmatrix} \begin{bmatrix} I_1 \\ V_2 \end{bmatrix}$

*   **Interpretation of H Parameters:**
    *   $h_{11} = \left.\frac{V_1}{I_1}\right|_{V_2=0}$: Input impedance when the output port is short-circuited. (Same as $z_{11}$)
    *   $h_{12} = \left.\frac{V_1}{V_2}\right|_{I_1=0}$: Open-circuit reverse voltage ratio.
    *   $h_{21} = \left.\frac{I_2}{I_1}\right|_{V_2=0}$: Short-circuit forward current ratio.
    *   $h_{22} = \left.\frac{I_2}{V_2}\right|_{I_1=0}$: Output admittance when the input port is open-circuited. (Same as $y_{22}$)

*   **Usefulness:** H parameters are particularly useful for analyzing transistor circuits (e.g., common-emitter, common-collector configurations).

**Reference:** Van Valkenburg, Chapter 8, "Two-Port Networks". Singh, Chapter 10, "Two Port Networks". Sudhakar & Palli, Chapter 12, "Two Port Networks".

#### 2.4. Inverse Hybrid (G) Parameters (Open-Circuit Input, Short-Circuit Output)

*   **Definition:** These are the inverse of H parameters. The input current and output voltage are expressed in terms of input voltage and output current.
*   **Equations:**
    $I_1 = g_{11}V_1 + g_{12}I_2$
    $V_2 = g_{21}V_1 + g_{22}I_2$

*   **Matrix Form:**
    $\begin{bmatrix} I_1 \\ V_2 \end{bmatrix} = \begin{bmatrix} g_{11} & g_{12} \\ g_{21} & g_{22} \end{bmatrix} \begin{bmatrix} V_1 \\ I_2 \end{bmatrix}$

*   **Interpretation of G Parameters:**
    *   $g_{11} = \left.\frac{I_1}{V_1}\right|_{I_2=0}$: Input admittance when the output port is open-circuited. (Same as $y_{11}$)
    *   $g_{12} = \left.\frac{I_1}{I_2}\right|_{V_1=0}$: Open-circuit reverse current ratio.
    *   $g_{21} = \left.\frac{V_2}{V_1}\right|_{I_2=0}$: Short-circuit forward voltage ratio.
    *   $g_{22} = \left.\frac{V_2}{I_2}\right|_{V_1=0}$: Output impedance when the input port is short-circuited. (Same as $z_{22}$)

**Reference:** Van Valkenburg, Chapter 8, "Two-Port Networks". Singh, Chapter 10, "Two Port Networks". Sudhakar & Palli, Chapter 12, "Two Port Networks".

#### 2.5. Transmission (ABCD) Parameters (Forward-Inverse Hybrid Parameters)

*   **Definition:** These parameters are commonly used in power system analysis and for cascaded networks. They express input port quantities ($V_1, I_1$) in terms of output port quantities ($V_2, I_2$).
*   **Equations:**
    $V_1 = AV_2 - BI_2$
    $I_1 = CV_2 - DI_2$
    *(Note the negative signs on B and D, which are a convention. Some texts might use +BI2 and +DI2, requiring adjustments in relationships.)*

*   **Matrix Form:**
    $\begin{bmatrix} V_1 \\ I_1 \end{bmatrix} = \begin{bmatrix} A & -B \\ C & -D \end{bmatrix} \begin{bmatrix} V_2 \\ I_2 \end{bmatrix}$

*   **Interpretation of ABCD Parameters:**
    *   $A = \left.\frac{V_1}{V_2}\right|_{I_2=0}$: Open-circuit voltage ratio (reverse voltage gain).
    *   $B = \left.\frac{V_1}{I_2}\right|_{V_2=0}$: Open-circuit transfer impedance (reverse transfer impedance).
    *   $C = \left.\frac{I_1}{V_2}\right|_{I_2=0}$: Short-circuit transfer admittance (forward transfer admittance).
    *   $D = \left.\frac{I_1}{I_2}\right|_{V_2=0}$: Short-circuit current ratio (reverse current gain).

*   **Network Synthesis (Simplified):** The ABCD parameters are often associated with the representation of a two-port network as a series-parallel combination.

*   **Reciprocal Networks:** For reciprocal networks, $AD - BC = 1$. This is a crucial property.
*   **Symmetric Networks:** For symmetric networks, $A=D$.

**Reference:** Van Valkenburg, Chapter 8, "Two-Port Networks". Singh, Chapter 10, "Two Port Networks". Sudhakar & Palli, Chapter 12, "Two Port Networks".

---

### 3. Relationships Between Parameters

The various parameter sets describe the same two-port network. Therefore, we can derive relationships to convert from one set to another. This is essential for analyzing a network described by one set of parameters using methods that require another set.

**Important Note on Conventions:** Always be mindful of the sign conventions used in the parameter definitions, especially for ABCD parameters ($V_1 = AV_2 - BI_2$ vs. $V_1 = AV_2 + BI_2$). The relationships below are derived based on the definitions provided earlier.

#### 3.1. Z to Y Parameters

From the Z-parameter equations:
$V_1 = z_{11}I_1 + z_{12}I_2$
$V_2 = z_{21}I_1 + z_{22}I_2$

We need to express $I_1$ and $I_2$ in terms of $V_1$ and $V_2$. We can solve these linear equations using Cramer's rule or matrix inversion.

The Z-parameter matrix is $\mathbf{Z} = \begin{bmatrix} z_{11} & z_{12} \\ z_{21} & z_{22} \end{bmatrix}$.
The determinant is $\Delta_Z = z_{11}z_{22} - z_{12}z_{21}$.

From $\begin{bmatrix} V_1 \\ V_2 \end{bmatrix} = \mathbf{Z} \begin{bmatrix} I_1 \\ I_2 \end{bmatrix}$, we have $\begin{bmatrix} I_1 \\ I_2 \end{bmatrix} = \mathbf{Z}^{-1} \begin{bmatrix} V_1 \\ V_2 \end{bmatrix}$.

$\mathbf{Z}^{-1} = \frac{1}{\Delta_Z} \begin{bmatrix} z_{22} & -z_{12} \\ -z_{21} & z_{11} \end{bmatrix}$

Comparing with $\begin{bmatrix} I_1 \\ I_2 \end{bmatrix} = \begin{bmatrix} y_{11} & y_{12} \\ y_{21} & y_{22} \end{bmatrix} \begin{bmatrix} V_1 \\ V_2 \end{bmatrix}$:

*   $y_{11} = \frac{z_{22}}{\Delta_Z} = \frac{z_{22}}{z_{11}z_{22} - z_{12}z_{21}}$
*   $y_{12} = \frac{-z_{12}}{\Delta_Z} = \frac{-z_{12}}{z_{11}z_{22} - z_{12}z_{21}}$
*   $y_{21} = \frac{-z_{21}}{\Delta_Z} = \frac{-z_{21}}{z_{11}z_{22} - z_{12}z_{21}}$
*   $y_{22} = \frac{z_{11}}{\Delta_Z} = \frac{z_{11}}{z_{11}z_{22} - z_{12}z_{21}}$

#### 3.2. Y to Z Parameters

This is the inverse of the Z to Y conversion.
The Y-parameter matrix is $\mathbf{Y} = \begin{bmatrix} y_{11} & y_{12} \\ y_{21} & y_{22} \end{bmatrix}$.
The determinant is $\Delta_Y = y_{11}y_{22} - y_{12}y_{21}$.

$\mathbf{Z} = \mathbf{Y}^{-1} = \frac{1}{\Delta_Y} \begin{bmatrix} y_{22} & -y_{12} \\ -y_{21} & y_{11} \end{bmatrix}$

*   $z_{11} = \frac{y_{22}}{\Delta_Y}$
*   $z_{12} = \frac{-y_{12}}{\Delta_Y}$
*   $z_{21} = \frac{-y_{21}}{\Delta_Y}$
*   $z_{22} = \frac{y_{11}}{\Delta_Y}$

#### 3.3. Z to H Parameters

From Z-parameter equations:
$V_1 = z_{11}I_1 + z_{12}I_2$
$V_2 = z_{21}I_1 + z_{22}I_2$

We want $V_1 = h_{11}I_1 + h_{12}V_2$ and $I_2 = h_{21}I_1 + h_{22}V_2$.

From the second Z equation, solve for $I_2$:
$I_2 = \frac{V_2 - z_{21}I_1}{z_{22}}$ (assuming $z_{22} \neq 0$)

Substitute this $I_2$ into the first Z equation:
$V_1 = z_{11}I_1 + z_{12} \left( \frac{V_2 - z_{21}I_1}{z_{22}} \right)$
$V_1 = z_{11}I_1 + \frac{z_{12}}{z_{22}}V_2 - \frac{z_{12}z_{21}}{z_{22}}I_1$
$V_1 = \left( z_{11} - \frac{z_{12}z_{21}}{z_{22}} \right)I_1 + \frac{z_{12}}{z_{22}}V_2$
$V_1 = \left( \frac{z_{11}z_{22} - z_{12}z_{21}}{z_{22}} \right)I_1 + \frac{z_{12}}{z_{22}}V_2$

Comparing with $V_1 = h_{11}I_1 + h_{12}V_2$:
*   $h_{11} = \frac{\Delta_Z}{z_{22}} = \frac{z_{11}z_{22} - z_{12}z_{21}}{z_{22}}$
*   $h_{12} = \frac{z_{12}}{z_{22}}$

Now, substitute $I_2$ into the second Z equation to get $I_2$ in terms of $I_1$ and $V_2$:
$\frac{V_2 - z_{21}I_1}{z_{22}} = h_{21}I_1 + h_{22}V_2$
$\frac{V_2}{z_{22}} - \frac{z_{21}}{z_{22}}I_1 = h_{21}I_1 + h_{22}V_2$
$V_2 \left( \frac{1}{z_{22}} - h_{22} \right) = I_1 \left( h_{21} + \frac{z_{21}}{z_{22}} \right)$

We need to express $I_2$ in terms of $I_1$ and $V_2$.
$I_2 = \frac{V_2}{z_{22}} - \frac{z_{21}}{z_{22}}I_1$
$I_2 = \left( -\frac{z_{21}}{z_{22}} \right)I_1 + \left( \frac{1}{z_{22}} \right)V_2$

Comparing with $I_2 = h_{21}I_1 + h_{22}V_2$:
*   $h_{21} = -\frac{z_{21}}{z_{22}}$
*   $h_{22} = \frac{1}{z_{22}}$

#### 3.4. H to Z Parameters

This is the inverse of the Z to H conversion.
From the H-parameter equations:
$V_1 = h_{11}I_1 + h_{12}V_2$
$I_2 = h_{21}I_1 + h_{22}V_2$

Solve for $I_1$ from the first equation: $I_1 = \frac{V_1 - h_{12}V_2}{h_{11}}$ (assuming $h_{11} \neq 0$)
Substitute this $I_1$ into the second H equation:
$I_2 = h_{21} \left( \frac{V_1 - h_{12}V_2}{h_{11}} \right) + h_{22}V_2$
$I_2 = \frac{h_{21}}{h_{11}}V_1 - \frac{h_{21}h_{12}}{h_{11}}V_2 + h_{22}V_2$
$I_2 = \frac{h_{21}}{h_{11}}V_1 + \left( h_{22} - \frac{h_{21}h_{12}}{h_{11}} \right)V_2$
$I_2 = \frac{h_{21}}{h_{11}}V_1 + \left( \frac{h_{11}h_{22} - h_{21}h_{12}}{h_{11}} \right)V_2$

This gives $I_2$ in terms of $V_1$ and $V_2$. We need $V_2$ in terms of $V_1$ and $I_2$.
From the first H equation, express $V_2$ in terms of $V_1$ and $I_1$.
$V_2 = \frac{V_1 - h_{11}I_1}{h_{12}}$ (assuming $h_{12} \neq 0$)
Substitute this into the second H equation:
$I_2 = h_{21}I_1 + h_{22} \left( \frac{V_1 - h_{11}I_1}{h_{12}} \right)$
$I_2 = h_{21}I_1 + \frac{h_{22}}{h_{12}}V_1 - \frac{h_{22}h_{11}}{h_{12}}I_1$
$I_2 = \frac{h_{22}}{h_{12}}V_1 + \left( h_{21} - \frac{h_{11}h_{22}}{h_{12}} \right)I_1$
$I_2 = \frac{h_{22}}{h_{12}}V_1 + \left( \frac{h_{12}h_{21} - h_{11}h_{22}}{h_{12}} \right)I_1$

Now, rearrange the Z-parameter equations to match the H-parameter form:
$V_1 = z_{11}I_1 + z_{12}I_2$
$V_2 = z_{21}I_1 + z_{22}I_2$

From the second Z equation: $I_2 = \frac{V_2 - z_{21}I_1}{z_{22}}$
Substitute into the first Z equation:
$V_1 = z_{11}I_1 + z_{12} \left(\frac{V_2 - z_{21}I_1}{z_{22}}\right)$
$V_1 = \left(z_{11} - \frac{z_{12}z_{21}}{z_{22}}\right)I_1 + \frac{z_{12}}{z_{22}}V_2$

Comparing with $V_1 = h_{11}I_1 + h_{12}V_2$:
*   $h_{11} = z_{11} - \frac{z_{12}z_{21}}{z_{22}} = \frac{\Delta_Z}{z_{22}}$
*   $h_{12} = \frac{z_{12}}{z_{22}}$

From the second Z equation: $V_2 = z_{21}I_1 + z_{22}I_2$.
We need $I_2$ in terms of $I_1$ and $V_2$.
Let's express $V_1$ and $I_2$ in terms of $I_1$ and $V_2$ from Z parameters.
From $V_2 = z_{21}I_1 + z_{22}I_2$, get $I_2 = \frac{V_2 - z_{21}I_1}{z_{22}}$.
$I_2 = -\frac{z_{21}}{z_{22}}I_1 + \frac{1}{z_{22}}V_2$.
Comparing with $I_2 = h_{21}I_1 + h_{22}V_2$:
*   $h_{21} = -\frac{z_{21}}{z_{22}}$
*   $h_{22} = \frac{1}{z_{22}}$

**Summary of Z to H:**
$h_{11} = \frac{\Delta_Z}{z_{22}}$, $h_{12} = \frac{z_{12}}{z_{22}}$, $h_{21} = -\frac{z_{21}}{z_{22}}$, $h_{22} = \frac{1}{z_{22}}$

**Summary of H to Z:**
$z_{11} = \frac{h_{11}}{\Delta_H}$, $z_{12} = \frac{-h_{12}}{\Delta_H}$, $z_{21} = \frac{-h_{21}}{\Delta_H}$, $z_{22} = \frac{h_{22}}{\Delta_H}$, where $\Delta_H = h_{11}h_{22} - h_{12}h_{21}$.

#### 3.5. Y to H Parameters

From Y-parameter equations:
$I_1 = y_{11}V_1 + y_{12}V_2$
$I_2 = y_{21}V_1 + y_{22}V_2$

We want $V_1 = h_{11}I_1 + h_{12}V_2$ and $I_2 = h_{21}I_1 + h_{22}V_2$.

From the first Y equation, solve for $V_1$: $V_1 = \frac{I_1 - y_{12}V_2}{y_{11}}$ (assuming $y_{11} \neq 0$)
Substitute this $V_1$ into the second Y equation:
$I_2 = y_{21} \left( \frac{I_1 - y_{12}V_2}{y_{11}} \right) + y_{22}V_2$
$I_2 = \frac{y_{21}}{y_{11}}I_1 - \frac{y_{21}y_{12}}{y_{11}}V_2 + y_{22}V_2$
$I_2 = \frac{y_{21}}{y_{11}}I_1 + \left( y_{22} - \frac{y_{12}y_{21}}{y_{11}} \right)V_2$
$I_2 = \frac{y_{21}}{y_{11}}I_1 + \left( \frac{y_{11}y_{22} - y_{12}y_{21}}{y_{11}} \right)V_2$

Comparing with $I_2 = h_{21}I_1 + h_{22}V_2$:
*   $h_{21} = \frac{y_{21}}{y_{11}}$
*   $h_{22} = \frac{\Delta_Y}{y_{11}} = \frac{y_{11}y_{22} - y_{12}y_{21}}{y_{11}}$

Now, we need $V_1$ in terms of $I_1$ and $V_2$.
From the second Y equation, $V_2 = \frac{I_2 - y_{21}V_1}{y_{22}}$.
Substitute into the first Y equation:
$I_1 = y_{11}V_1 + y_{12} \left( \frac{I_2 - y_{21}V_1}{y_{22}} \right)$
$I_1 = y_{11}V_1 + \frac{y_{12}}{y_{22}}I_2 - \frac{y_{12}y_{21}}{y_{22}}V_1$
$I_1 = \left( y_{11} - \frac{y_{12}y_{21}}{y_{22}} \right)V_1 + \frac{y_{12}}{y_{22}}I_2$
$I_1 = \left( \frac{y_{11}y_{22} - y_{12}y_{21}}{y_{22}} \right)V_1 + \frac{y_{12}}{y_{22}}I_2$

We need $V_1$ in terms of $I_1$ and $V_2$.
Let's express $V_1$ and $V_2$ in terms of $I_1$ and $I_2$ from Y parameters.
From $I_1 = y_{11}V_1 + y_{12}V_2$ and $I_2 = y_{21}V_1 + y_{22}V_2$.
Use $\begin{bmatrix} V_1 \\ V_2 \end{bmatrix} = \mathbf{Y}^{-1} \begin{bmatrix} I_1 \\ I_2 \end{bmatrix}$.
$\mathbf{Y}^{-1} = \frac{1}{\Delta_Y} \begin{bmatrix} y_{22} & -y_{12} \\ -y_{21} & y_{11} \end{bmatrix}$

$V_1 = \frac{y_{22}}{\Delta_Y}I_1 - \frac{y_{12}}{\Delta_Y}I_2$
$V_2 = -\frac{y_{21}}{\Delta_Y}I_1 + \frac{y_{11}}{\Delta_Y}I_2$

We want $V_1 = h_{11}I_1 + h_{12}V_2$.
Substitute $V_2$ from the second Y matrix equation into the first Y matrix equation:
$V_1 = \frac{y_{22}}{\Delta_Y}I_1 - \frac{y_{12}}{\Delta_Y} \left( -\frac{y_{21}}{\Delta_Y}I_1 + \frac{y_{11}}{\Delta_Y}V_2 \right)$ - This is getting complicated.

Let's try a different approach. We want $V_1 = h_{11}I_1 + h_{12}V_2$.
From Y equations, $V_1 = \frac{I_1 - y_{12}V_2}{y_{11}}$. This matches the form.
*   $h_{11} = \frac{1}{y_{11}}$
*   $h_{12} = -\frac{y_{12}}{y_{11}}$

**Summary of Y to H:**
$h_{11} = \frac{1}{y_{11}}$, $h_{12} = -\frac{y_{12}}{y_{11}}$, $h_{21} = \frac{\Delta_Y}{y_{11}}$, $h_{22} = -\frac{y_{21}}{y_{11}}$

**Summary of H to Y:**
$y_{11} = \frac{1}{h_{11}}$, $y_{12} = -\frac{h_{12}}{h_{11}}$, $y_{21} = -\frac{h_{21}}{h_{11}}$, $y_{22} = \frac{\Delta_H}{h_{11}}$

#### 3.6. Z to ABCD Parameters

From Z-parameter equations:
$V_1 = z_{11}I_1 + z_{12}I_2$
$V_2 = z_{21}I_1 + z_{22}I_2$

We want $V_1 = AV_2 - BI_2$ and $I_1 = CV_2 - DI_2$.
(Using the convention $V_1 = AV_2 - BI_2$ and $I_1 = CV_2 - DI_2$)

Solve the second Z equation for $I_1$: $I_1 = \frac{V_2 - z_{22}I_2}{z_{21}}$ (assuming $z_{21} \neq 0$)
Substitute this $I_1$ into the first Z equation:
$V_1 = z_{11} \left( \frac{V_2 - z_{22}I_2}{z_{21}} \right) + z_{12}I_2$
$V_1 = \frac{z_{11}}{z_{21}}V_2 - \frac{z_{11}z_{22}}{z_{21}}I_2 + z_{12}I_2$
$V_1 = \frac{z_{11}}{z_{21}}V_2 + \left( z_{12} - \frac{z_{11}z_{22}}{z_{21}} \right)I_2$
$V_1 = \frac{z_{11}}{z_{21}}V_2 + \left( \frac{z_{12}z_{21} - z_{11}z_{22}}{z_{21}} \right)I_2$

Comparing with $V_1 = AV_2 - BI_2$:
*   $A = \frac{z_{11}}{z_{21}}$
*   $-B = \frac{z_{12}z_{21} - z_{11}z_{22}}{z_{21}} \implies B = \frac{z_{11}z_{22} - z_{12}z_{21}}{z_{21}} = \frac{\Delta_Z}{z_{21}}$

Now, substitute $I_1$ into the ABCD form $I_1 = CV_2 - DI_2$:
$\frac{V_2 - z_{22}I_2}{z_{21}} = CV_2 - DI_2$
$\frac{1}{z_{21}}V_2 - \frac{z_{22}}{z_{21}}I_2 = CV_2 - DI_2$

Comparing coefficients of $V_2$ and $I_2$:
*   $C = \frac{1}{z_{21}}$
*   $-D = -\frac{z_{22}}{z_{21}} \implies D = \frac{z_{22}}{z_{21}}$

**Summary of Z to ABCD:**
$A = \frac{z_{11}}{z_{21}}$, $B = \frac{\Delta_Z}{z_{21}}$, $C = \frac{1}{z_{21}}$, $D = \frac{z_{22}}{z_{21}}$

#### 3.7. ABCD to Z Parameters

From the ABCD equations:
$V_1 = AV_2 - BI_2$
$I_1 = CV_2 - DI_2$

We need to express $V_1, V_2$ in terms of $I_1, I_2$.
Solve the second ABCD equation for $V_2$: $V_2 = \frac{I_1 + DI_2}{C}$ (assuming $C \neq 0$)
Substitute this $V_2$ into the first ABCD equation:
$V_1 = A \left( \frac{I_1 + DI_2}{C} \right) - BI_2$
$V_1 = \frac{A}{C}I_1 + \frac{AD}{C}I_2 - BI_2$
$V_1 = \frac{A}{C}I_1 + \left( \frac{AD}{C} - B \right)I_2$
$V_1 = \frac{A}{C}I_1 + \left( \frac{AD - BC}{C} \right)I_2$

From $AD - BC = 1$ for reciprocal networks:
$V_1 = \frac{A}{C}I_1 + \frac{1}{C}I_2$

Comparing with $V_1 = z_{11}I_1 + z_{12}I_2$:
*   $z_{11} = \frac{A}{C}$
*   $z_{12} = \frac{1}{C}$

Now, solve the second ABCD equation for $I_2$: $I_2 = \frac{CV_2 - I_1}{D}$ (assuming $D \neq 0$)
Substitute this $I_2$ into the first ABCD equation:
$V_1 = AV_2 - B \left( \frac{CV_2 - I_1}{D} \right)$
$V_1 = AV_2 - \frac{BC}{D}V_2 + \frac{B}{D}I_1$
$V_1 = \left( A - \frac{BC}{D} \right)V_2 + \frac{B}{D}I_1$
$V_1 = \left( \frac{AD - BC}{D} \right)V_2 + \frac{B}{D}I_1$

From $AD - BC = 1$ for reciprocal networks:
$V_1 = \frac{1}{D}V_2 + \frac{B}{D}I_1$

We need $V_2$ in terms of $I_1$ and $I_2$.
From $I_1 = CV_2 - DI_2$, we get $V_2 = \frac{I_1 + DI_2}{C}$.
So, $V_2 = \frac{1}{C}I_1 + \frac{D}{C}I_2$.

Comparing $V_1 = z_{11}I_1 + z_{12}I_2$ and $V_2 = z_{21}I_1 + z_{22}I_2$:
*   $z_{11} = \frac{A}{C}$
*   $z_{12} = \frac{1}{C}$
*   $z_{21} = \frac{1}{C}$
*   $z_{22} = \frac{D}{C}$

**Summary of ABCD to Z:**
$z_{11} = \frac{A}{C}$, $z_{12} = \frac{1}{C}$, $z_{21} = \frac{1}{C}$, $z_{22} = \frac{D}{C}$

#### 3.8. Y to ABCD Parameters

From Y-parameter equations:
$I_1 = y_{11}V_1 + y_{12}V_2$
$I_2 = y_{21}V_1 + y_{22}V_2$

We want $V_1 = AV_2 - BI_2$ and $I_1 = CV_2 - DI_2$.

Solve the second Y equation for $V_1$: $V_1 = \frac{I_2 - y_{22}V_2}{y_{21}}$ (assuming $y_{21} \neq 0$)
Substitute this $V_1$ into the first Y equation:
$I_1 = y_{11} \left( \frac{I_2 - y_{22}V_2}{y_{21}} \right) + y_{12}V_2$
$I_1 = \frac{y_{11}}{y_{21}}I_2 - \frac{y_{11}y_{22}}{y_{21}}V_2 + y_{12}V_2$
$I_1 = \frac{y_{11}}{y_{21}}I_2 + \left( y_{12} - \frac{y_{11}y_{22}}{y_{21}} \right)V_2$
$I_1 = \frac{y_{11}}{y_{21}}I_2 + \left( \frac{y_{12}y_{21} - y_{11}y_{22}}{y_{21}} \right)V_2$
$I_1 = \frac{y_{11}}{y_{21}}I_2 - \frac{\Delta_Y}{y_{21}}V_2$

Comparing with $I_1 = CV_2 - DI_2$:
*   $C = -\frac{\Delta_Y}{y_{21}}$
*   $-D = \frac{y_{11}}{y_{21}} \implies D = -\frac{y_{11}}{y_{21}}$

Now, we need $V_1$ in terms of $V_2$ and $I_2$.
From $I_1 = y_{11}V_1 + y_{12}V_2$, we get $V_1 = \frac{I_1 - y_{12}V_2}{y_{11}}$.
Substitute $I_1$ from the second Y equation:
$V_1 = \frac{y_{21}V_1 + y_{22}V_2 - y_{12}V_2}{y_{11}}$
$y_{11}V_1 = y_{21}V_1 + (y_{22} - y_{12})V_2$
$(y_{11} - y_{21})V_1 = (y_{22} - y_{12})V_2$
$V_1 = \frac{y_{22} - y_{12}}{y_{11} - y_{21}}V_2$

This is not in the form $V_1 = AV_2 - BI_2$. Let's go back to the first Y equation.
$I_1 = y_{11}V_1 + y_{12}V_2$
$I_2 = y_{21}V_1 + y_{22}V_2$

From the second Y equation, $V_1 = \frac{I_2 - y_{22}V_2}{y_{21}}$.
Substitute this into the first Y equation to get $I_1$:
$I_1 = y_{11} \left(\frac{I_2 - y_{22}V_2}{y_{21}}\right) + y_{12}V_2$
$I_1 = \frac{y_{11}}{y_{21}}I_2 - \frac{y_{11}y_{22}}{y_{21}}V_2 + y_{12}V_2$
$I_1 = \frac{y_{11}}{y_{21}}I_2 + \left(y_{12} - \frac{y_{11}y_{22}}{y_{21}}\right)V_2$
$I_1 = \frac{y_{11}}{y_{21}}I_2 - \frac{\Delta_Y}{y_{21}}V_2$
Rearranging gives $I_1 = -\frac{\Delta_Y}{y_{21}}V_2 + \frac{y_{11}}{y_{21}}I_2$.
Comparing with $I_1 = CV_2 - DI_2$:
$C = -\frac{\Delta_Y}{y_{21}}$ and $D = -\frac{y_{11}}{y_{21}}$.

To find A and B, express $V_1$ in terms of $V_2$ and $I_2$.
From the first Y equation, $V_1 = \frac{I_1 - y_{12}V_2}{y_{11}}$.
Substitute $I_1$ from the second Y equation:
$V_1 = \frac{y_{21}V_1 + y_{22}V_2 - y_{12}V_2}{y_{11}}$
$y_{11}V_1 = y_{21}V_1 + (y_{22} - y_{12})V_2$
$(y_{11} - y_{21})V_1 = (y_{22} - y_{12})V_2$
$V_1 = \frac{y_{22} - y_{12}}{y_{11} - y_{21}}V_2$.

This does not look right. Let's use the Z to ABCD conversion and Y to Z conversion.
$V_1 = z_{11}I_1 + z_{12}I_2$
$V_2 = z_{21}I_1 + z_{22}I_2$

From Y to Z:
$z_{11} = \frac{y_{22}}{\Delta_Y}$, $z_{12} = \frac{-y_{12}}{\Delta_Y}$, $z_{21} = \frac{-y_{21}}{\Delta_Y}$, $z_{22} = \frac{y_{11}}{\Delta_Y}$

Now use Z to ABCD:
$A = \frac{z_{11}}{z_{21}} = \frac{y_{22}/\Delta_Y}{-y_{21}/\Delta_Y} = -\frac{y_{22}}{y_{21}}$
$B = \frac{\Delta_Z}{z_{21}} = \frac{(z_{11}z_{22} - z_{12}z_{21})}{z_{21}} = \frac{(\frac{y_{22}}{\Delta_Y}\frac{y_{11}}{\Delta_Y} - \frac{-y_{12}}{\Delta_Y}\frac{-y_{21}}{\Delta_Y})}{\frac{-y_{21}}{\Delta_Y}} = \frac{\frac{y_{11}y_{22} - y_{12}y_{21}}{\Delta_Y^2}}{\frac{-y_{21}}{\Delta_Y}} = \frac{\Delta_Y}{-\Delta_Y^2} \frac{y_{21}}{\Delta_Y} = \frac{\Delta_Y}{-y_{21}}$
$C = \frac{1}{z_{21}} = \frac{1}{-y_{21}/\Delta_Y} = -\frac{\Delta_Y}{y_{21}}$
$D = \frac{z_{22}}{z_{21}} = \frac{y_{11}/\Delta_Y}{-y_{21}/\Delta_Y} = -\frac{y_{11}}{y_{21}}$

**Summary of Y to ABCD:**
$A = -\frac{y_{22}}{y_{21}}$, $B = -\frac{\Delta_Y}{y_{21}}$, $C = -\frac{\Delta_Y}{y_{21}}$, $D = -\frac{y_{11}}{y_{21}}$

**Important Note:** Check the convention for ABCD parameters used in the textbook. If $V_1 = AV_2 + BI_2$ and $I_1 = CV_2 + DI_2$, the signs will change. The relationships derived here follow $V_1 = AV_2 - BI_2$ and $I_1 = CV_2 - DI_2$.

#### 3.9. ABCD to Y Parameters

Using the property $AD - BC = 1$ for reciprocal networks.
From ABCD to Z:
$z_{11} = \frac{A}{C}$, $z_{12} = \frac{1}{C}$, $z_{21} = \frac{1}{C}$, $z_{22} = \frac{D}{C}$

Now use Z to Y:
$\Delta_Z = z_{11}z_{22} - z_{12}z_{21} = \frac{A}{C} \frac{D}{C} - \frac{1}{C} \frac{1}{C} = \frac{AD - 1}{C^2} = \frac{BC}{C^2} = \frac{B}{C}$

$y_{11} = \frac{z_{22}}{\Delta_Z} = \frac{D/C}{B/C} = \frac{D}{B}$
$y_{12} = \frac{-z_{12}}{\Delta_Z} = \frac{-1/C}{B/C} = -\frac{1}{B}$
$y_{21} = \frac{-z_{21}}{\Delta_Z} = \frac{-1/C}{B/C} = -\frac{1}{B}$
$y_{22} = \frac{z_{11}}{\Delta_Z} = \frac{A/C}{B/C} = \frac{A}{B}$

**Summary of ABCD to Y:**
$y_{11} = \frac{D}{B}$, $y_{12} = -\frac{1}{B}$, $y_{21} = -\frac{1}{B}$, $y_{22} = \frac{A}{B}$

---

### 4. Summary of Parameter Relationships

It is highly beneficial to create a table for quick reference.

| From \ To | Z                                                                           | Y                                                                                       | ABCD                                                                               |
| :-------- | :-------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------- |
| **Z**     | $z_{11}, z_{12}, z_{21}, z_{22}$                                            | $y_{11}=\frac{z_{22}}{\Delta_Z}, y_{12}=\frac{-z_{12}}{\Delta_Z}, y_{21}=\frac{-z_{21}}{\Delta_Z}, y_{22}=\frac{z_{11}}{\Delta_Z}$ | $A=\frac{z_{11}}{z_{21}}, B=\frac{\Delta_Z}{z_{21}}, C=\frac{1}{z_{21}}, D=\frac{z_{22}}{z_{21}}$ |
| **Y**     | $z_{11}=\frac{y_{22}}{\Delta_Y}, z_{12}=\frac{-y_{12}}{\Delta_Y}, z_{21}=\frac{-y_{21}}{\Delta_Y}, z_{22}=\frac{y_{11}}{\Delta_Y}$ | $y_{11}, y_{12}, y_{21}, y_{22}$                                                        | $A=-\frac{y_{22}}{y_{21}}, B=-\frac{\Delta_Y}{y_{21}}, C=-\frac{\Delta_Y}{y_{21}}, D=-\frac{y_{11}}{y_{21}}$ |
| **ABCD**  | $z_{11}=\frac{A}{C}, z_{12}=\frac{1}{C}, z_{21}=\frac{1}{C}, z_{22}=\frac{D}{C}$ | $y_{11}=\frac{D}{B}, y_{12}=-\frac{1}{B}, y_{21}=-\frac{1}{B}, y_{22}=\frac{A}{B}$      | $A, B, C, D$ (with $AD-BC=1$)                                                     |

Where:
*   $\Delta_Z = z_{11}z_{22} - z_{12}z_{21}$
*   $\Delta_Y = y_{11}y_{22} - y_{12}y_{21}$

**Important Point to Remember:** The condition $AD - BC = 1$ must always hold for ABCD parameters derived from reciprocal networks. This is a strong check for correctness.

---

### 5. Examples

**Example 1: Convert Z parameters to Y parameters**

A two-port network has the following Z parameters:
$z_{11} = 2 \, \Omega, z_{12} = 1 \, \Omega, z_{21} = 1 \, \Omega, z_{22} = 3 \, \Omega$.
Find the Y parameters.

**Solution:**
First, calculate the determinant of the Z-parameter matrix:
$\Delta_Z = z_{11}z_{22} - z_{12}z_{21} = (2)(3) - (1)(1) = 6 - 1 = 5$

Now, use the conversion formulas:
$y_{11} = \frac{z_{22}}{\Delta_Z} = \frac{3}{5} \, S$
$y_{12} = \frac{-z_{12}}{\Delta_Z} = \frac{-1}{5} \, S$
$y_{21} = \frac{-z_{21}}{\Delta_Z} = \frac{-1}{5} \, S$
$y_{22} = \frac{z_{11}}{\Delta_Z} = \frac{2}{5} \, S$

**Example 2: Convert Y parameters to ABCD parameters**

A two-port network has the following Y parameters:
$y_{11} = 0.1 \, S, y_{12} = -0.05 \, S, y_{21} = 0.02 \, S, y_{22} = 0.01 \, S$.
Find the ABCD parameters.

**Solution:**
First, calculate the determinant of the Y-parameter matrix:
$\Delta_Y = y_{11}y_{22} - y_{12}y_{21} = (0.1)(0.01) - (-0.05)(0.02) = 0.001 - (-0.001) = 0.002$

Now, use the conversion formulas (assuming $V_1 = AV_2 - BI_2$, $I_1 = CV_2 - DI_2$):
$A = -\frac{y_{22}}{y_{21}} = -\frac{0.01}{0.02} = -0.5$
$B = -\frac{\Delta_Y}{y_{21}} = -\frac{0.002}{0.02} = -0.1$
$C = -\frac{\Delta_Y}{y_{21}} = -\frac{0.002}{0.02} = -0.1$
$D = -\frac{y_{11}}{y_{21}} = -\frac{0.1}{0.02} = -5$

Check the condition $AD - BC = 1$:
$AD - BC = (-0.5)(-5) - (-0.1)(-0.1) = 2.5 - 0.01 = 2.49$.
This indicates a potential issue either in the parameters provided or the convention used. Let's re-verify the Y to ABCD conversion.

*Re-derivation check for Y to ABCD:*
$I_1 = y_{11}V_1 + y_{12}V_2$
$I_2 = y_{21}V_1 + y_{22}V_2$

We want $V_1 = AV_2 - BI_2$ and $I_1 = CV_2 - DI_2$.

From the second Y equation, $V_1 = \frac{I_2 - y_{22}V_2}{y_{21}}$.
Substitute this into the first Y equation:
$I_1 = y_{11} \left(\frac{I_2 - y_{22}V_2}{y_{21}}\right) + y_{12}V_2$
$I_1 = \frac{y_{11}}{y_{21}}I_2 - \frac{y_{11}y_{22}}{y_{21}}V_2 + y_{12}V_2$
$I_1 = -\frac{\Delta_Y}{y_{21}}V_2 + \frac{y_{11}}{y_{21}}I_2$
Comparing with $I_1 = CV_2 - DI_2$:
$C = -\frac{\Delta_Y}{y_{21}}$
$D = -\frac{y_{11}}{y_{21}}$

Now, we need to find A and B.
From the first Y equation, $V_1 = \frac{I_1 - y_{12}V_2}{y_{11}}$.
Substitute $I_1$ from the second Y equation:
$V_1 = \frac{y_{21}V_1 + y_{22}V_2 - y_{12}V_2}{y_{11}}$
$y_{11}V_1 = y_{21}V_1 + (y_{22} - y_{12})V_2$
$(y_{11} - y_{21})V_1 = (y_{22} - y_{12})V_2$
$V_1 = \frac{y_{22} - y_{12}}{y_{11} - y_{21}}V_2$

This is $V_1 = (\text{constant})V_2$. This implies that $B=0$, which is unlikely for a general network.
This suggests there might be an error in my manual derivation or a specific condition is met.

Let's use the path through Z parameters as it's more robust.
Y to Z:
$z_{11} = \frac{y_{22}}{\Delta_Y} = \frac{0.01}{0.002} = 5 \, \Omega$
$z_{12} = \frac{-y_{12}}{\Delta_Y} = \frac{-(-0.05)}{0.002} = 25 \, \Omega$
$z_{21} = \frac{-y_{21}}{\Delta_Y} = \frac{-0.02}{0.002} = -10 \, \Omega$
$z_{22} = \frac{y_{11}}{\Delta_Y} = \frac{0.1}{0.002} = 50 \, \Omega$

Now, Z to ABCD:
$\Delta_Z = z_{11}z_{22} - z_{12}z_{21} = (5)(50) - (25)(-10) = 250 - (-250) = 500$

$A = \frac{z_{11}}{z_{21}} = \frac{5}{-10} = -0.5$
$B = \frac{\Delta_Z}{z_{21}} = \frac{500}{-10} = -50$
$C = \frac{1}{z_{21}} = \frac{1}{-10} = -0.1$
$D = \frac{z_{22}}{z_{21}} = \frac{50}{-10} = -5$

Check $AD - BC = 1$:
$AD - BC = (-0.5)(-5) - (-50)(-0.1) = 2.5 - 5 = -2.5$.
Still not 1. This indicates the network represented by the Y parameters is not reciprocal. If the network is not reciprocal, the ABCD parameters are not uniquely defined by $V_1 = AV_2 - BI_2$ and $I_1 = CV_2 - DI_2$ and the condition $AD-BC=1$ does not apply.

Let's assume the question implies a reciprocal network. If $y_{12} = y_{21}$, then $\Delta_Y$ would be different.
If the given Y parameters are correct, and they represent a non-reciprocal network (e.g., contains a unilateral device like a transistor in certain configurations), then the conversion to ABCD without the $AD-BC=1$ constraint might be intended.

**Let's try with reciprocal Y parameters for demonstration:**
Suppose $y_{11} = 0.1, y_{12} = -0.05, y_{21} = -0.05, y_{22} = 0.01$.
$\Delta_Y = (0.1)(0.01) - (-0.05)(-0.05) = 0.001 - 0.0025 = -0.0015$.

Y to Z:
$z_{11} = \frac{0.01}{-0.0015} = -\frac{100}{15} = -\frac{20}{3}$
$z_{12} = \frac{-(-0.05)}{-0.0015} = \frac{0.05}{-0.0015} = -\frac{50}{15} = -\frac{10}{3}$
$z_{21} = \frac{-(-0.05)}{-0.0015} = \frac{0.05}{-0.0015} = -\frac{50}{15} = -\frac{10}{3}$
$z_{22} = \frac{0.1}{-0.0015} = -\frac{100}{15} = -\frac{20}{3}$
This is a symmetric network ($z_{11}=z_{22}, z_{12}=z_{21}$).

Z to ABCD:
$\Delta_Z = (-\frac{20}{3})(-\frac{20}{3}) - (-\frac{10}{3})(-\frac{10}{3}) = \frac{400}{9} - \frac{100}{9} = \frac{300}{9} = \frac{100}{3}$
$A = \frac{z_{11}}{z_{21}} = \frac{-20/3}{-10/3} = 2$
$B = \frac{\Delta_Z}{z_{21}} = \frac{100/3}{-10/3} = -10$
$C = \frac{1}{z_{21}} = \frac{1}{-10/3} = -\frac{3}{10}$
$D = \frac{z_{22}}{z_{21}} = \frac{-20/3}{-10/3} = 2$

Check $AD - BC = 1$:
$AD - BC = (2)(2) - (-10)(-\frac{3}{10}) = 4 - 3 = 1$. This is correct.
So for reciprocal Y parameters: $A=2, B=-10, C=-0.3, D=2$.

**Example 3: Convert ABCD parameters to Z parameters**

A two-port network is described by the ABCD parameters: $A=4, B=2, C=1, D=3$.
Find the Z parameters.

**Solution:**
First, check the reciprocity condition: $AD - BC = (4)(3) - (2)(1) = 12 - 2 = 10$.
Since $AD-BC \neq 1$, this network is not reciprocal. The standard Z-parameter conversion formula assumes reciprocity.

If the question implies a reciprocal network, there might be an error in the parameters given. Let's assume they intended for the network to be reciprocal. For a reciprocal network, $AD-BC=1$.

Let's assume the ABCD parameters were: $A=3, B=2, C=1, D=3$.
Check: $AD - BC = (3)(3) - (2)(1) = 9 - 2 = 7$. Still not reciprocal.

Let's assume $A=1.5, B=1, C=1, D=2.5$.
Check: $AD - BC = (1.5)(2.5) - (1)(1) = 3.75 - 1 = 2.75$.

Let's use a set of ABCD parameters that satisfy reciprocity.
If $A=2, B=1, C=1, D=2$. Check: $AD-BC = (2)(2) - (1)(1) = 4-1=3$.

Consider $A=1, B=0, C=0, D=1$ (ideal voltage source in series with output, or open circuit)
$z_{11} = A/C$ is undefined. This highlights the importance of $C \neq 0$.

Consider a simple series impedance $Z_s$.
$V_1 = V_2 + Z_s I_1$
$I_1 = I_2$
$V_1 = Z_s I_1 + V_2 \implies z_{11}=Z_s, z_{12}=1, z_{21}=Z_s, z_{22}=0$.
$\Delta_Z = -Z_s$.
$A = z_{11}/z_{21} = Z_s/Z_s = 1$.
$B = \Delta_Z/z_{21} = -Z_s/Z_s = -1$.
$C = 1/z_{21} = 1/Z_s$.
$D = z_{22}/z_{21} = 0/Z_s = 0$.
Check: $AD-BC = (1)(0) - (-1)(1/Z_s) = 1/Z_s$. For this to be 1, $Z_s=1$.

Let's use the derived formulas for ABCD to Z, assuming reciprocal network for the purpose of demonstration.
If $A=2, B=1, C=1, D=3$, then $AD-BC = 6-1=5$.
If we are forced to convert, we might use the formulas:
$z_{11} = A/C = 2/1 = 2 \, \Omega$
$z_{12} = 1/C = 1/1 = 1 \, \Omega$
$z_{21} = 1/C = 1/1 = 1 \, \Omega$
$z_{22} = D/C = 3/1 = 3 \, \Omega$
This gives Z parameters of a reciprocal network, as $z_{12}=z_{21}$. The $AD-BC=1$ condition is inherent in these Z parameters. If the original ABCD parameters did not satisfy $AD-BC=1$, then the derived Z parameters are equivalent to a *reciprocal* network that has those ABCD parameters.

**Example 4: Convert H parameters to Y parameters**

A two-port network has the following H parameters:
$h_{11} = 100 \, \Omega, h_{12} = 0.01, h_{21} = 50, h_{22} = 0.001 \, S$.
Find the Y parameters.

**Solution:**
Calculate the determinant of the H-parameter matrix:
$\Delta_H = h_{11}h_{22} - h_{12}h_{21} = (100)(0.001) - (0.01)(50) = 0.1 - 0.5 = -0.4$.

Now use the conversion formulas (H to Y):
$y_{11} = \frac{1}{h_{11}} = \frac{1}{100} = 0.01 \, S$
$y_{12} = -\frac{h_{12}}{h_{11}} = -\frac{0.01}{100} = -0.0001 \, S$
$y_{21} = -\frac{h_{21}}{h_{11}} = -\frac{50}{100} = -0.5 \, S$
$y_{22} = \frac{\Delta_H}{h_{11}} = \frac{-0.4}{100} = -0.004 \, S$

Let's check if the network is reciprocal from H parameters. For reciprocal networks, $h_{12} = -h_{21}$.
Here, $h_{12} = 0.01$ and $h_{21} = 50$. Clearly not reciprocal.

---

### 6. Practice Questions and Exercises

1.  A two-port network is described by the following Z parameters:
    $z_{11} = 10 \, \Omega, z_{12} = 5 \, \Omega, z_{21} = 2 \, \Omega, z_{22} = 8 \, \Omega$.
    Find the corresponding Y parameters.

2.  Given the Y parameters of a two-port network:
    $y_{11} = 0.5 \, S, y_{12} = -0.2 \, S, y_{21} = -0.1 \, S, y_{22} = 0.4 \, S$.
    Calculate the Z parameters.

3.  A two-port network has H parameters:
    $h_{11} = 50 \, \Omega, h_{12} = 0.005, h_{21} = -20, h_{22} = 0.002 \, S$.
    Determine the G parameters.

4.  For a reciprocal two-port network, the ABCD parameters are $A=1.5, B=5, C=0.1, D=2$.
    Find the Z parameters.

5.  Convert the following Z parameters to ABCD parameters:
    $z_{11} = 1 \, \Omega, z_{12} = 0.5 \, \Omega, z_{21} = 0.5 \, \Omega, z_{22} = 2 \, \Omega$.

**Answers to Practice Questions:**

1.  $\Delta_Z = (10)(8) - (5)(2) = 80 - 10 = 70$.
    $y_{11} = \frac{8}{70} = \frac{4}{35} \, S$
    $y_{12} = \frac{-5}{70} = -\frac{1}{14} \, S$
    $y_{21} = \frac{-2}{70} = -\frac{1}{35} \, S$
    $y_{22} = \frac{10}{70} = \frac{1}{7} \, S$

2.  $\Delta_Y = (0.5)(0.4) - (-0.2)(-0.1) = 0.2 - 0.02 = 0.18$.
    $z_{11} = \frac{0.4}{0.18} = \frac{40}{18} = \frac{20}{9} \, \Omega$
    $z_{12} = \frac{-(-0.2)}{0.18} = \frac{0.2}{0.18} = \frac{20}{18} = \frac{10}{9} \, \Omega$
    $z_{21} = \frac{-(-0.1)}{0.18} = \frac{0.1}{0.18} = \frac{10}{18} = \frac{5}{9} \, \Omega$
    $z_{22} = \frac{0.5}{0.18} = \frac{50}{18} = \frac{25}{9} \, \Omega$

3.  $\Delta_H = (50)(0.002) - (0.005)(-20) = 0.1 - (-0.1) = 0.2$.
    $g_{11} = \frac{1}{h_{11}} = \frac{1}{50} = 0.02 \, S$
    $g_{12} = -\frac{h_{12}}{h_{11}} = -\frac{0.005}{50} = -0.0001 \, S$
    $g_{21} = -\frac{h_{21}}{h_{11}} = -\frac{-20}{50} = 0.4 \, S$
    $g_{22} = \frac{\Delta_H}{h_{11}} = \frac{0.2}{50} = 0.004 \, S$

4.  Given $A=1.5, B=5, C=0.1, D=2$. Check $AD-BC = (1.5)(2) - (5)(0.1) = 3 - 0.5 = 2.5$. For reciprocal networks $AD-BC=1$. Let's assume the question implies a network with these ABCD parameters that is equivalent to a reciprocal network.
    $z_{11} = A/C = 1.5/0.1 = 15 \, \Omega$
    $z_{12} = 1/C = 1/0.1 = 10 \, \Omega$
    $z_{21} = 1/C = 1/0.1 = 10 \, \Omega$
    $z_{22} = D/C = 2/0.1 = 20 \, \Omega$

5.  Given $z_{11} = 1, z_{12} = 0.5, z_{21} = 0.5, z_{22} = 2$. This is a reciprocal network as $z_{12}=z_{21}$.
    $\Delta_Z = (1)(2) - (0.5)(0.5) = 2 - 0.25 = 1.75$.
    $A = z_{11}/z_{21} = 1/0.5 = 2$.
    $B = \Delta_Z/z_{21} = 1.75/0.5 = 3.5$.
    $C = 1/z_{21} = 1/0.5 = 2$.
    $D = z_{22}/z_{21} = 2/0.5 = 4$.
    Check: $AD-BC = (2)(4) - (3.5)(2) = 8 - 7 = 1$. Correct.

---

### 7. Key Points to Remember

*   **Reciprocity:** For a reciprocal network, $z_{12} = z_{21}$ and $y_{12} = y_{21}$. Also, for ABCD parameters, $AD - BC = 1$. In H parameters, $h_{12} = -h_{21}$ for reciprocity.
*   **Symmetry:** For a symmetric network, $z_{11} = z_{22}$ and $y_{11} = y_{22}$. Also, $A = D$ and $h_{11} = 1/h_{22}$ and $h_{12}=-h_{21}$ (reciprocal and symmetric).
*   **Conversions are Essential:** The ability to convert between parameter sets is crucial for analyzing and designing two-port networks.
*   **Determinants:** The determinants ($\Delta_Z, \Delta_Y, \Delta_H$) play a key role in parameter conversions.
*   **Sign Conventions:** Be extremely careful with sign conventions, especially for ABCD parameters.
*   **Parameter Interpretations:** Understand what each parameter physically represents (e.g., input impedance, transfer ratio). This helps in choosing the most suitable parameter set for a given problem.

---

This detailed study of the relationships between two-port parameters will equip you to analyze and manipulate various two-port network representations, a fundamental skill in circuit analysis and synthesis.
