---
title: "Impedance and Admittance matrices"
subject: "MICROWAVE DEVICES & CIRCUITS"
module: "Module 2: Microwave Network Analysis – Equivalent voltages and currents"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff493"
status: "completed"
scrapedAt: "2026-05-23T18:07:47.662Z"
---
# MICROWAVE DEVICES & CIRCUITS - Module 2: Microwave Network Analysis – Equivalent Voltages and Currents

## Topic: Impedance and Admittance Matrices

**Course Outcomes Addressed:**

*   **CO2: Analyze Microwave Networks using signal flow graphs (Knowledge Level: K3)** (Understanding network parameters like Z and Y is fundamental to signal flow graph analysis).

**Learning Outcomes Covered:**

*   Understanding the concept of impedance and admittance matrices as a method for characterizing microwave networks.
*   Deriving and interpreting impedance and admittance matrices for various microwave components.
*   Relating impedance and admittance matrices to other network parameters (e.g., S-parameters).
*   Applying impedance and admittance matrices for network analysis and synthesis.

---

### 1. Introduction to Microwave Network Analysis

Microwave networks, which are comprised of interconnected microwave components (e.g., transmission lines, filters, amplifiers), are often analyzed by considering their input-output relationships. For multi-port networks, these relationships are conveniently expressed using **network parameters**. For microwave frequencies, it's essential to use models that account for distributed effects rather than lumped element models.

**Key Concept:** For N-port networks, we need N independent variables (voltages or currents) and N dependent variables (currents or voltages) to describe the network's behavior.

**Reference:** Pozar, "Microwave Engineering," Chapter 4.

---

### 2. Impedance (Z) Matrix Parameters

The impedance matrix, also known as the open-circuit impedance parameters, relates the **port voltages** to the **port currents** of a multi-port network.

#### 2.1 Definition

For an N-port network, the relationship between the port voltages ($V_i$) and port currents ($I_j$) is given by:

$$
\begin{bmatrix} V_1 \\ V_2 \\ \vdots \\ V_N \end{bmatrix}
=
\begin{bmatrix} Z_{11} & Z_{12} & \cdots & Z_{1N} \\ Z_{21} & Z_{22} & \cdots & Z_{2N} \\ \vdots & \vdots & \ddots & \vdots \\ Z_{N1} & Z_{N2} & \cdots & Z_{NN} \end{bmatrix}
\begin{bmatrix} I_1 \\ I_2 \\ \vdots \\ I_N \end{bmatrix}
$$

This can be written in a compact matrix form as:

$$
\mathbf{V} = \mathbf{Z} \mathbf{I}
$$

Where:
*   $\mathbf{V}$ is the column vector of port voltages.
*   $\mathbf{I}$ is the column vector of port currents.
*   $\mathbf{Z}$ is the N x N impedance matrix, with elements $Z_{ij}$.

#### 2.2 Interpretation of Z-parameters

The individual Z-parameters have a physical meaning when specific port conditions are met:

*   **$Z_{ii} = \frac{V_i}{I_i} \Big|_{I_j=0 \text{ for } j \neq i}$**: This is the **driving point impedance** at port $i$ when all other ports are open-circuited. It represents the impedance seen looking into port $i$ when no current is flowing out of any other port.

*   **$Z_{ij} = \frac{V_i}{I_j} \Big|_{I_k=0 \text{ for } k \neq j}$**: This is the **transfer impedance** from port $j$ to port $i$ when all other ports are open-circuited. It represents the voltage induced at port $i$ due to a current injected at port $j$, with all other ports being open.

#### 2.3 Properties of the Z-Matrix

*   **Reciprocity:** For passive, reciprocal networks (like most passive microwave components), the impedance matrix is **symmetric**, meaning $Z_{ij} = Z_{ji}$. This is because the voltage induced at port $i$ by a current at port $j$ is the same as the voltage induced at port $j$ by a current at port $i$ (when all other ports are open).

*   **Units:** The elements of the Z-matrix are impedances, measured in Ohms ($\Omega$).

*   **No inherent loss/gain:** Z-parameters are derived assuming open-circuited ports, which means no power is being absorbed or delivered by the external circuit at these ports.

#### 2.4 Derivation of Z-parameters

Z-parameters are typically derived from the circuit schematic of the microwave component or by using ABCD parameters (if known).

**Example: A Two-Port Network**

Consider a general two-port network:

```
     I1 --> [ Network ] --> V1
           |         |
           V2        I2
```

The equations are:
$V_1 = Z_{11}I_1 + Z_{12}I_2$
$V_2 = Z_{21}I_1 + Z_{22}I_2$

From these, we can see:
*   $Z_{11} = V_1/I_1$ when $I_2 = 0$ (Port 2 open)
*   $Z_{12} = V_1/I_2$ when $I_1 = 0$ (Port 1 open)
*   $Z_{21} = V_2/I_1$ when $I_2 = 0$ (Port 2 open)
*   $Z_{22} = V_2/I_2$ when $I_1 = 0$ (Port 1 open)

**Example from Pozar (Chapter 4): A Series RL Circuit (as a 2-port)**

Imagine a single series RL element connected between ports 1 and 2.
*   Connect $I_1$ to port 1, with port 2 open ($I_2=0$). $V_1 = Z \cdot I_1$, where $Z = R + j\omega L$. No voltage appears at port 2.
    $Z_{11} = R + j\omega L$
    $Z_{21} = 0$
*   Connect $I_2$ to port 2, with port 1 open ($I_1=0$). $V_2 = Z \cdot I_2$. No voltage appears at port 1.
    $Z_{12} = 0$
    $Z_{22} = R + j\omega L$

So, the Z-matrix is:
$$
\mathbf{Z} = \begin{bmatrix} R+j\omega L & 0 \\ 0 & R+j\omega L \end{bmatrix}
$$

**Important Point:** Z-parameters are useful for networks with series impedances or when ports are naturally open-circuited. However, in microwave circuits, it's difficult to achieve true open circuits due to parasitic effects.

---

### 3. Admittance (Y) Matrix Parameters

The admittance matrix, also known as the short-circuit admittance parameters, relates the **port currents** to the **port voltages** of a multi-port network.

#### 3.1 Definition

For an N-port network, the relationship between the port currents ($I_i$) and port voltages ($V_j$) is given by:

$$
\begin{bmatrix} I_1 \\ I_2 \\ \vdots \\ I_N \end{bmatrix}
=
\begin{bmatrix} Y_{11} & Y_{12} & \cdots & Y_{1N} \\ Y_{21} & Y_{22} & \cdots & Y_{2N} \\ \vdots & \vdots & \ddots & \vdots \\ Y_{N1} & Y_{N2} & \cdots & Y_{NN} \end{bmatrix}
\begin{bmatrix} V_1 \\ V_2 \\ \vdots \\ V_N \end{bmatrix}
$$

This can be written in a compact matrix form as:

$$
\mathbf{I} = \mathbf{Y} \mathbf{V}
$$

Where:
*   $\mathbf{I}$ is the column vector of port currents.
*   $\mathbf{V}$ is the column vector of port voltages.
*   $\mathbf{Y}$ is the N x N admittance matrix, with elements $Y_{ij}$.

#### 3.2 Interpretation of Y-parameters

The individual Y-parameters have a physical meaning when specific port conditions are met:

*   **$Y_{ii} = \frac{I_i}{V_i} \Big|_{V_j=0 \text{ for } j \neq i}$**: This is the **driving point admittance** at port $i$ when all other ports are short-circuited. It represents the admittance seen looking into port $i$ when all other ports are shorted.

*   **$Y_{ij} = \frac{I_i}{V_j} \Big|_{V_k=0 \text{ for } k \neq j}$**: This is the **transfer admittance** from port $j$ to port $i$ when all other ports are short-circuited. It represents the current flowing out of port $i$ due to a voltage applied at port $j$, with all other ports being shorted.

#### 3.3 Properties of the Y-Matrix

*   **Reciprocity:** For passive, reciprocal networks, the admittance matrix is **symmetric**, meaning $Y_{ij} = Y_{ji}$. This is due to the same reciprocity principle as for Z-parameters.

*   **Units:** The elements of the Y-matrix are admittances, measured in Siemens (S) or mhos ($\mho$).

*   **No inherent loss/gain:** Y-parameters are derived assuming short-circuited ports, which means no power is being delivered or absorbed by the external circuit at these ports.

#### 3.4 Derivation of Y-parameters

Y-parameters are typically derived from the circuit schematic of the microwave component or by inversion of the Z-matrix.

**Example: A Two-Port Network**

Consider the same general two-port network as before:

The equations are:
$I_1 = Y_{11}V_1 + Y_{12}V_2$
$I_2 = Y_{21}V_1 + Y_{22}V_2$

From these, we can see:
*   $Y_{11} = I_1/V_1$ when $V_2 = 0$ (Port 2 shorted)
*   $Y_{12} = I_1/V_2$ when $V_1 = 0$ (Port 1 shorted)
*   $Y_{21} = I_2/V_1$ when $V_2 = 0$ (Port 2 shorted)
*   $Y_{22} = I_2/V_2$ when $V_1 = 0$ (Port 1 shorted)

**Example from Pozar (Chapter 4): A Shunt Admittance Element (as a 2-port)**

Consider a shunt admittance $Y$ connected across ports 1 and 2.
*   Apply $V_1$ to port 1, with port 2 shorted ($V_2=0$). The current $I_1$ flows through the shunt admittance $Y$.
    $I_1 = Y \cdot V_1$. No current flows out of port 2.
    $Y_{11} = Y$
    $Y_{21} = -Y$ (Current flows out of port 2 into the short)
*   Apply $V_2$ to port 2, with port 1 shorted ($V_1=0$). The current $I_2$ flows through the shunt admittance $Y$.
    $I_2 = Y \cdot V_2$. No current flows out of port 1.
    $Y_{12} = -Y$ (Current flows out of port 1 into the short)
    $Y_{22} = Y$

So, the Y-matrix is:
$$
\mathbf{Y} = \begin{bmatrix} Y & -Y \\ -Y & Y \end{bmatrix}
$$

**Important Point:** Y-parameters are useful for networks with shunt admittances or when ports are naturally short-circuited. Short circuits are generally easier to achieve in practice at microwave frequencies than open circuits.

---

### 4. Relation Between Z and Y Matrices

For reciprocal two-port networks, the Z and Y matrices are the inverse of each other.

*   **From Z to Y:**
    $Y_{11} = \frac{Z_{22}}{Z_{11}Z_{22} - Z_{12}Z_{21}}$
    $Y_{12} = \frac{-Z_{12}}{Z_{11}Z_{22} - Z_{12}Z_{21}}$
    $Y_{21} = \frac{-Z_{21}}{Z_{11}Z_{22} - Z_{12}Z_{21}}$
    $Y_{22} = \frac{Z_{11}}{Z_{11}Z_{22} - Z_{12}Z_{21}}$

    Or in matrix form:
    $$ \mathbf{Y} = (\mathbf{Z})^{-1} $$

*   **From Y to Z:**
    $Z_{11} = \frac{Y_{22}}{Y_{11}Y_{22} - Y_{12}Y_{21}}$
    $Z_{12} = \frac{-Y_{12}}{Y_{11}Y_{22} - Y_{12}Y_{21}}$
    $Z_{21} = \frac{-Y_{21}}{Y_{11}Y_{22} - Y_{12}Y_{21}}$
    $Z_{22} = \frac{Y_{11}}{Y_{11}Y_{22} - Y_{12}Y_{21}}$

    Or in matrix form:
    $$ \mathbf{Z} = (\mathbf{Y})^{-1} $$

The denominator term $D = Z_{11}Z_{22} - Z_{12}Z_{21}$ (or $Y_{11}Y_{22} - Y_{12}Y_{21}$) is the **determinant** of the matrix. For reciprocal networks, $Z_{12} = Z_{21}$ and $Y_{12} = Y_{21}$.

**Important Point:** The conversion between Z and Y parameters is straightforward via matrix inversion, provided the inverse exists.

---

### 5. Examples of Impedance and Admittance Matrices for Common Microwave Components

#### 5.1 Transmission Line

A section of lossless transmission line of length $l$, characteristic impedance $Z_0$, and phase constant $\beta$ ($l = \lambda/4$ in some special cases):

*   **Z-parameters:**
    $Z_{11} = Z_{22} = j Z_0 \tan(\beta l)$
    $Z_{12} = Z_{21} = j Z_0 \csc(\beta l)$

*   **Y-parameters:**
    $Y_{11} = Y_{22} = j \frac{1}{Z_0} \tan(\beta l)$
    $Y_{12} = Y_{21} = -j \frac{1}{Z_0} \csc(\beta l)$

**Example: Quarter-Wave Transformer (QWT)**

For a QWT, $\beta l = \pi/2$.
$\tan(\pi/2) \to \infty$, $\csc(\pi/2) = 1$.

*   **Z-parameters:** $Z_{11} = Z_{22} = \infty$, $Z_{12} = Z_{21} = j Z_0$. This indicates that when ports are open-circuited, the impedance is infinite, and there's a direct coupling of $jZ_0$.

*   **Y-parameters:** $Y_{11} = Y_{22} = 0$, $Y_{12} = Y_{21} = -j/Z_0$. This indicates that when ports are short-circuited, the admittance is zero, and there's a current inversion with magnitude $1/Z_0$.

#### 5.2 Resistor

A resistor with resistance $R$ connected in series between ports 1 and 2 (as seen before):

$$
\mathbf{Z} = \begin{bmatrix} R & R \\ R & R \end{bmatrix}
$$
(Assuming $I_1$ and $I_2$ are flowing into the resistor, and $V_1, V_2$ are across the resistor segments)
*Correction based on previous series RL example:* If the resistor is in series between the two ports, and port currents are defined as entering the component:
$V_1 = R_{series}I_1$ and $V_2 = R_{series}I_2$ doesn't quite capture the connection.

Let's revisit the series resistor:
Imagine a two-port with a resistor $R$ in series between port 1 and port 2.

```
     I1 --> Port 1 --[ R ]-- Port 2 --> I2 (but current flows through)
           |                       |
           V1                      V2
```
The definition of port current $I_1$ is current entering port 1, and $I_2$ is current entering port 2. The resistor is *between* the ports.
So, $I_{in,1} = I_1$, $I_{in,2} = I_2$.
The current flowing through the resistor is $I_1$ (if $I_2=0$) or $I_2$ (if $I_1=0$). This requires careful definition of ports.

Let's use the definition where port currents flow *into* the network.
If the resistor $R$ is the entire two-port, with port 1 and port 2 being the terminals of the resistor:
*   $V_1$ is voltage across port 1. $I_1$ is current into port 1.
*   $V_2$ is voltage across port 2. $I_2$ is current into port 2.

If we consider the resistor as a single element from port 1 to port 2:
*   If we apply $V_1$ with $I_2=0$, then $V_1 = R \cdot I_1$.
*   If we apply $V_2$ with $I_1=0$, then $V_2 = R \cdot I_2$.
This implies $Z_{11} = R$, $Z_{21}=0$, $Z_{12}=0$, $Z_{22}=R$.

$$
\mathbf{Z} = \begin{bmatrix} R & 0 \\ 0 & R \end{bmatrix}
$$

And for Y-parameters:
$$
\mathbf{Y} = (\mathbf{Z})^{-1} = \begin{bmatrix} 1/R & 0 \\ 0 & 1/R \end{bmatrix}
$$

**Reference:** Collin, "Foundations of Microwave Engineering," Chapter 6.

#### 5.3 Short Circuit

A short circuit is an ideal case.
*   **Z-parameters:** $Z_{ij} = 0$ for all $i, j$. $\mathbf{Z} = \mathbf{0}$.
*   **Y-parameters:** The inverse of the zero matrix is undefined. However, if we consider it as a limit of a very low impedance, the Y-parameters would be very large. Physically, applying a voltage to a short circuit results in infinite current (if not for source limitations).

#### 5.4 Open Circuit

An open circuit is an ideal case.
*   **Z-parameters:** $Z_{ij} = \infty$ for all $i, j$. $\mathbf{Z} = \infty \cdot \mathbf{1}$ (where $\mathbf{1}$ is an identity matrix).
*   **Y-parameters:** $Y_{ij} = 0$ for all $i, j$. $\mathbf{Y} = \mathbf{0}$.

---

### 6. Limitations and Practical Considerations

*   **Difficulty of Open Circuits:** Achieving perfect open circuits at microwave frequencies is challenging due to parasitic capacitances and inductances, which can provide paths for current.
*   **Difficulty of Short Circuits:** While easier than open circuits, perfect short circuits are also ideal. Residual inductance in the shorting element can be significant.
*   **Interdependence:** When measuring Z or Y parameters, opening or shorting one port affects the behavior of the entire network, making isolated measurements tricky.
*   **Bandwidth Limitations:** The ideal nature of Z and Y parameters often assumes frequency-independent components or specific frequency responses that might not hold over a broad bandwidth.
*   **Dominance of S-parameters:** At microwave frequencies, **Scattering (S) parameters** are generally preferred because they are measured using transmission lines terminated with the characteristic impedance ($Z_0$), which is a more practical and reproducible condition. S-parameters describe the incident and reflected waves, which are directly related to power flow.

**Reference:** Liao, "Microwave Devices & Circuits," Chapter 4.

---

### 7. Relation to Other Network Parameters (Brief Mention)

While this topic focuses on Z and Y, it's important to note they can be converted to and from other common network parameters like ABCD, T, and scattering (S) parameters. The conversion formulas are available in most microwave engineering textbooks (e.g., Pozar, Chapter 4).

---

### 8. Practice Questions

**Question 1:**
A reciprocal two-port network has the following impedance matrix:
$$
\mathbf{Z} = \begin{bmatrix} 50 & 20 \\ 20 & 100 \end{bmatrix} \Omega
$$
Find the admittance matrix of this network.

**Answer 1:**
The determinant of the Z-matrix is $D = (50)(100) - (20)(20) = 5000 - 400 = 4600$.
Using the formula $\mathbf{Y} = (\mathbf{Z})^{-1}$:
$$
\mathbf{Y} = \frac{1}{4600} \begin{bmatrix} 100 & -20 \\ -20 & 50 \end{bmatrix} = \begin{bmatrix} \frac{100}{4600} & \frac{-20}{4600} \\ \frac{-20}{4600} & \frac{50}{4600} \end{bmatrix} \text{ S}
$$
$$
\mathbf{Y} = \begin{bmatrix} \frac{1}{46} & \frac{-1}{230} \\ \frac{-1}{230} & \frac{5}{460} \end{bmatrix} \text{ S} \approx \begin{bmatrix} 0.0217 & -0.0043 \\ -0.0043 & 0.0109 \end{bmatrix} \text{ S}
$$

**Question 2:**
A two-port network is characterized by the admittance matrix:
$$
\mathbf{Y} = \begin{bmatrix} 0.02 & -0.01 \\ -0.01 & 0.03 \end{bmatrix} \text{ S}
$$
If port 2 is terminated with a short circuit ($V_2=0$) and a voltage $V_1 = 10$ V is applied to port 1, what are the currents $I_1$ and $I_2$?

**Answer 2:**
The equations are:
$I_1 = Y_{11}V_1 + Y_{12}V_2$
$I_2 = Y_{21}V_1 + Y_{22}V_2$

Given $V_1 = 10$ V and $V_2 = 0$ V:
$I_1 = (0.02)(10) + (-0.01)(0) = 0.2$ A
$I_2 = (-0.01)(10) + (0.03)(0) = -0.1$ A

So, $I_1 = 0.2$ A and $I_2 = -0.1$ A. (Note: $I_2$ is current *entering* port 2. If it's a short, current flows *out* of port 2, hence the negative sign for entering current).

**Question 3:**
Explain why S-parameters are generally preferred over Z and Y parameters at microwave frequencies.

**Answer 3:**
S-parameters are preferred because they are measured under matched load conditions (termination with characteristic impedance $Z_0$). This is practically achievable and avoids the difficulties associated with creating true open or short circuits at microwave frequencies. Furthermore, S-parameters directly relate to incident and reflected power waves, which are more relevant for power transfer calculations and stability analysis in microwave circuits. They are also easier to measure with network analyzers.

---

### 9. Summary and Key Takeaways

*   **Z-matrix:** Relates port voltages to port currents for open-circuited ports. $V_i = \sum Z_{ij} I_j$. $Z_{ij}$ is transfer impedance.
*   **Y-matrix:** Relates port currents to port voltages for short-circuited ports. $I_i = \sum Y_{ij} V_j$. $Y_{ij}$ is transfer admittance.
*   **Reciprocity:** For reciprocal networks, $Z_{ij} = Z_{ji}$ and $Y_{ij} = Y_{ji}$.
*   **Conversion:** $\mathbf{Y} = (\mathbf{Z})^{-1}$ and $\mathbf{Z} = (\mathbf{Y})^{-1}$ for reciprocal networks.
*   **Practicality:** Z and Y parameters are less practical at microwave frequencies due to the difficulty in achieving ideal open or short circuits. S-parameters are generally preferred.
*   **Foundation for Analysis:** Understanding Z and Y parameters provides a fundamental basis for analyzing multi-port networks, which is crucial for developing more advanced analysis techniques like signal flow graphs (CO2).

---
This concludes the study notes for Impedance and Admittance Matrices.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
