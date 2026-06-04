---
title: "Two port networks"
subject: "CIRCUITS & NETWORKS"
module: "Module 4: Two port networks"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35adb"
status: "completed"
scrapedAt: "2026-05-23T16:11:43.117Z"
---
# CIRCUITS & NETWORKS - Module 4: Two-Port Networks

## Topic: Two-Port Networks

This module introduces the concept of two-port networks, which are fundamental building blocks in the analysis and design of complex electrical circuits. We will explore how to characterize these networks using various parameters and understand their behavior when interconnected.

---

### 1. Introduction to Two-Port Networks

**Key Concept:** A two-port network is a circuit containing two pairs of terminals, where current can enter one pair and leave the other. The two pairs of terminals are referred to as the "input port" and the "output port."

**Definition:** A two-port network is a linear, bilateral network that has two distinct pairs of access terminals, designated as port 1 and port 2. At each port, the currents entering the network are assumed to be equal in magnitude and opposite in direction.

**Diagram:**

```
      +---------+
      |         |
      |         |
  v1 --->o-------o--- v2
      |  PORT 1 |  |
      |         |  |
  i1 --->o-------o--- i2
      |         |
      +---------+
      PORT 2
```

*   **Port 1:** Characterized by voltage $v_1$ and current $i_1$.
*   **Port 2:** Characterized by voltage $v_2$ and current $i_2$.
*   **Convention:** Current $i_1$ enters port 1, and current $i_2$ leaves port 2. Voltage $v_1$ and $v_2$ are measured with respect to their respective reference terminals.

**Relevance to Course Outcomes:** This section directly addresses **CO5: Describe two-port networks in terms of various parameters.** It lays the foundation for understanding how these networks are characterized.

**Textbook Reference:**
*   **Van Valkenburg, Network Analysis:** Chapter 12 often covers two-port network analysis.
*   **Ravish R Singh, Network Analysis and Synthesis:** Chapter 10 or 11 usually deals with two-port networks.
*   **Suresh Kumar, Electric Circuits & Networks:** Similar chapters will cover this topic.
*   **A Sudhakar, Shyammohan S Palli, Circuits and Networks, Analysis and Synthesis:** Look for sections on two-port network analysis.

---

### 2. Characterization of Two-Port Networks using Parameters

Two-port networks can be described by sets of parameters that relate the voltages and currents at the ports. The most common sets of parameters are:

*   **Z-parameters (Impedance Parameters)**
*   **Y-parameters (Admittance Parameters)**
*   **H-parameters (Hybrid Parameters)**
*   **G-parameters (Inverse Hybrid Parameters)**
*   **ABCD-parameters (Transmission Parameters)**

These parameters provide a systematic way to analyze and interconnect complex networks.

#### 2.1 Z-parameters (Open-Circuit Impedance Parameters)

**Key Concept:** Z-parameters relate the port voltages to the port currents. They are derived by assuming one of the ports is open-circuited.

**Derivation:** Consider a general linear two-port network. The relationship between voltages and currents can be expressed as:

$v_1 = Z_{11}i_1 + Z_{12}i_2$  (Equation 2.1)
$v_2 = Z_{21}i_1 + Z_{22}i_2$  (Equation 2.2)

In matrix form:
$\begin{bmatrix} v_1 \\ v_2 \end{bmatrix} = \begin{bmatrix} Z_{11} & Z_{12} \\ Z_{21} & Z_{22} \end{bmatrix} \begin{bmatrix} i_1 \\ i_2 \end{bmatrix}$

Where:
*   $Z_{11}$: Driving-point impedance at port 1 when port 2 is open-circuited ($i_2 = 0$).
    $Z_{11} = \left. \frac{v_1}{i_1} \right|_{i_2=0}$
*   $Z_{12}$: Transfer impedance from port 2 to port 1 when port 2 is open-circuited ($i_1 = 0$).
    $Z_{12} = \left. \frac{v_1}{i_2} \right|_{i_1=0}$
*   $Z_{21}$: Transfer impedance from port 1 to port 2 when port 2 is open-circuited ($i_2 = 0$).
    $Z_{21} = \left. \frac{v_2}{i_1} \right|_{i_2=0}$
*   $Z_{22}$: Driving-point impedance at port 2 when port 1 is open-circuited ($i_1 = 0$).
    $Z_{22} = \left. \frac{v_2}{i_2} \right|_{i_1=0}$

**Units:** Z-parameters have units of Ohms ($\Omega$).

**Properties:**
*   For a passive network, $Z_{11} > 0$, $Z_{22} > 0$, and $Z_{11}Z_{22} - Z_{12}Z_{21} \ge 0$.
*   For a reciprocal network, $Z_{12} = Z_{21}$.

**Example:** Calculate the Z-parameters for a series resistor $R$.

```
      +---------+
      |         |
    v1 ---R---o--- v2
      |PORT 1 |PORT 2
    i1 --->o---o--- i2
      |         |
      +---------+
```

From the circuit:
$v_1 = i_1 R$
$v_2 = i_1 R$

Comparing with the general equations:
$v_1 = Z_{11}i_1 + Z_{12}i_2$
$v_2 = Z_{21}i_1 + Z_{22}i_2$

We need to express $v_1$ and $v_2$ in terms of $i_1$ and $i_2$. In this case, $i_1 = i_2 = i$ (current entering both ports).
$v_1 = iR$
$v_2 = iR$

However, the convention is $i_1$ entering and $i_2$ leaving. So, let's re-examine the circuit. If $i_1$ enters, and it's a single resistor, the current must leave port 2 as $i_2$. Therefore, $i_1 = i_2 = i$.

$v_1 = iR$
$v_2 = iR$

To fit the form $v_1 = Z_{11}i_1 + Z_{12}i_2$ and $v_2 = Z_{21}i_1 + Z_{22}i_2$:
Since $i_1 = i_2$, we can write:
$v_1 = Z_{11}i_1 + Z_{12}i_1 = (Z_{11} + Z_{12})i_1$
$v_2 = Z_{21}i_1 + Z_{22}i_1 = (Z_{21} + Z_{22})i_1$

Comparing:
$Z_{11} + Z_{12} = R$
$Z_{21} + Z_{22} = R$

This indicates that Z-parameters might not be the most intuitive for simple series elements where current is the same. Let's use the definition:

*   $i_2 = 0$ (open circuit at port 2):
    $v_1 = Z_{11}i_1 \implies Z_{11} = v_1/i_1 = R$
    $v_2 = Z_{21}i_1 \implies Z_{21} = v_2/i_1 = R$
*   $i_1 = 0$ (open circuit at port 1):
    $v_1 = Z_{12}i_2 \implies Z_{12} = v_1/i_2$
    $v_2 = Z_{22}i_2 \implies Z_{22} = v_2/i_2$

In the series resistor case, $i_1$ and $i_2$ are not independent if only one port is considered. The definition requires independent control of one current while measuring the other voltage. Let's use the network itself:
When $i_2=0$, $v_1 = i_1 R$ and $v_2 = i_1 R$.
So, $Z_{11} = R$ and $Z_{21} = R$.

When $i_1=0$, current $i_2$ flows out of port 2. If $i_1=0$, the current through the resistor is effectively $-i_2$ entering from the right.
$v_1 = (-i_2)R$
$v_2 = (-i_2)R$
So, $Z_{12} = v_1/i_2 = -R$ and $Z_{22} = v_2/i_2 = -R$.

Wait, this is still not right. The initial setup of a series resistor is tricky for Z-parameters due to the same current. Let's consider a more standard example.

**Example (Corrected): Z-parameters for a series impedance Z.**

```
      +---------+
      |         |
  v1 --->o---Z---o--- v2
      | PORT 1 |PORT 2
  i1 --->o-------o--- i2
      |         |
      +---------+
```

This diagram implies $i_1$ enters, current flows through $Z$, and $i_2$ leaves. For a single element $Z$ in series, the current through it is $i_1$ (if $i_2=0$ and $i_1$ is the only source) or $i_1$ and then $i_2$ are related.

The actual definition of $i_1$ and $i_2$ is crucial. $i_1$ enters port 1, $i_2$ leaves port 2. In this series element, the current *through* the element is $i_1$ if $i_2=0$, and $i_1$ is also related to $i_2$.

Let's consider a T-network for a clearer example.
A T-network with impedances $Z_a, Z_b, Z_c$:

```
      +---------+
      |         |
  v1 --->o---Z_a---o--- v2
      |    |       |
      |    Z_b     |
      |    |       |
  i1 --->o-------o--- i2
      |PORT 1|PORT 2|
      +---------+
```
The internal connections mean:
Current through $Z_a$ is $i_1$. Voltage across $Z_a$ is $v_{1a} = i_1 Z_a$.
Current through $Z_b$ is $i_1 + i_2$ (assuming $i_2$ leaves port 2). This is not correct based on the diagram.

Let's redraw the T-network to clarify currents:
```
      +---------+
      |    +----Z_a----+----o v2
      |    |          |
  v1 --->o--Z_c--o    |
      |    |     |    |
      |    +----Z_b----+----
  i1 --->o---------o--- i2
      |PORT 1|PORT 2|
      +---------+
```
This diagram shows $i_1$ entering, splitting. This is not standard. The standard T-network has the center element connected to both ports.

**Standard T-Network Diagram:**

```
      +---------+
      |         |
  v1 --->o---Z_a---o---o v2
      |    |       |   |
      |    Z_b     |   |
      |    |       |   |
  i1 --->o-------o---Z_c---
      |PORT 1|PORT 2|
      +---------+
```
This is also not standard. Let's use the one with a common node.

**Standard T-Network (common node at bottom):**

```
      +---------+
      |         |
  v1 --->o---Z_a---o------> v2
      |    |       |
      |    Z_b     |
      |    |       |
  i1 --->o---Z_c---o------>
      |PORT 1|PORT 2|
      +---------+
```
Here, current through $Z_a$ is $i_1$. Voltage drop across $Z_a$ is $i_1 Z_a$.
Current through $Z_c$ is $i_2$ (entering port 2, so flowing out of the network).
Voltage drop across $Z_c$ is $i_2 Z_c$.
The current through $Z_b$ is $i_1 - i_2$ (if $i_1$ is entering and $i_2$ is leaving).

$v_1 = i_1 Z_a + (i_1 - i_2) Z_b = (Z_a + Z_b)i_1 - Z_b i_2$
$v_2 = (i_1 - i_2) Z_b - i_2 Z_c = Z_b i_1 - (Z_b + Z_c) i_2$

Comparing with:
$v_1 = Z_{11}i_1 + Z_{12}i_2$
$v_2 = Z_{21}i_1 + Z_{22}i_2$

We get:
$Z_{11} = Z_a + Z_b$
$Z_{12} = -Z_b$
$Z_{21} = Z_b$
$Z_{22} = Z_b + Z_c$

**Important Point:** The Z-parameters are associated with open-circuit conditions.

**Relevance to Course Outcomes:** Directly addresses **CO5**.

#### 2.2 Y-parameters (Short-Circuit Admittance Parameters)

**Key Concept:** Y-parameters relate the port currents to the port voltages. They are derived by assuming one of the ports is short-circuited.

**Derivation:** The relationship can be expressed as:

$i_1 = Y_{11}v_1 + Y_{12}v_2$  (Equation 2.3)
$i_2 = Y_{21}v_1 + Y_{22}v_2$  (Equation 2.4)

In matrix form:
$\begin{bmatrix} i_1 \\ i_2 \end{bmatrix} = \begin{bmatrix} Y_{11} & Y_{12} \\ Y_{21} & Y_{22} \end{bmatrix} \begin{bmatrix} v_1 \\ v_2 \end{bmatrix}$

Where:
*   $Y_{11}$: Driving-point admittance at port 1 when port 2 is short-circuited ($v_2 = 0$).
    $Y_{11} = \left. \frac{i_1}{v_1} \right|_{v_2=0}$
*   $Y_{12}$: Transfer admittance from port 2 to port 1 when port 2 is short-circuited ($v_1 = 0$).
    $Y_{12} = \left. \frac{i_1}{v_2} \right|_{v_1=0}$
*   $Y_{21}$: Transfer admittance from port 1 to port 2 when port 2 is short-circuited ($v_2 = 0$).
    $Y_{21} = \left. \frac{i_2}{v_1} \right|_{v_2=0}$
*   $Y_{22}$: Driving-point admittance at port 2 when port 1 is short-circuited ($v_1 = 0$).
    $Y_{22} = \left. \frac{i_2}{v_2} \right|_{v_1=0}$

**Units:** Y-parameters have units of Siemens (S) or mhos.

**Properties:**
*   For a passive network, $Y_{11} > 0$, $Y_{22} > 0$, and $Y_{11}Y_{22} - Y_{12}Y_{21} \ge 0$.
*   For a reciprocal network, $Y_{12} = Y_{21}$.

**Example:** Calculate the Y-parameters for a shunt resistor $R$.

```
      +---------+
      |         |
  v1 --->o-------o--- v2
      |PORT 1|PORT 2|
  i1 --->o---R---o--- i2
      |         |
      +---------+
```
In this case, the resistor is connected between the output terminal of port 1 and the output terminal of port 2. This means $v_1 = v_2 = v$.

Let's use the definition:
*   $v_2 = 0$ (short circuit at port 2):
    The resistor $R$ is shorted out. So, $i_1 = 0$ and $i_2 = 0$ unless there's another path.
    This setup is tricky. A shunt resistor implies it is across the terminals.

**Correct Shunt Resistor Example:**

```
      +---------+
      |         |
  v1 --->o-------o--- v2
      |PORT 1|PORT 2|
      |         |
      R         R
      |         |
  i1 --->o-------o--- i2
      |         |
      +---------+
```
This is not a two-port element. A shunt resistor is *between* the two terminals of a port, or across the ports.

Consider a shunt resistor $R$ connected between terminals of port 2.

```
      +---------+
      |         |
  v1 --->o-------o--- v2
      |PORT 1|PORT 2|
      |         |
      +----R----+
      |         |
  i1 --->o-------o--- i2
      |         |
      +---------+
```
This means $v_2$ is the voltage across $R$, and $i_2$ is the current entering the port. The current through $R$ is $v_2/R$.
According to the convention ($i_2$ leaves port 2), the current *entering* the port is $i_2$. This current then splits.

Let's assume the convention: $i_1$ enters port 1, $i_2$ leaves port 2.
The voltage across port 2 is $v_2$.
The current through the shunt resistor $R$ is $v_2/R$. This current is *leaving* the port 2 node.
So, the total current leaving port 2 is $i_2$.
The current entering the port 2 node is $v_2/R$.
Therefore, $i_2 = -v_2/R$.

Now for $i_1$:
$i_1 = Y_{11}v_1 + Y_{12}v_2$
$i_2 = Y_{21}v_1 + Y_{22}v_2$

From the circuit:
$i_1$ directly enters port 1.
$i_2$ leaves port 2. The current through $R$ is $v_2/R$ and it's leaving the port 2 node.
So, the current entering the port 2 node is $v_2/R$. If $i_2$ is the current leaving, then the current entering the port 2 node is $-i_2$.
Therefore, $-i_2 = v_2/R$, which means $i_2 = -v_2/R$.

Let's think about the definition again. $i_1$ and $i_2$ are currents entering the network.
```
      +---------+
      |         |
  v1 --->o-------o--- v2
      |PORT 1|PORT 2|
      |         |
      +----R----+
      |         |
  i1 --->o-------o--- i2
      |         |
      +---------+
```
If $i_1$ enters port 1, and there's no connection between port 1 and port 2 except the external circuit, $i_1$ only affects port 1.
The current $i_2$ enters port 2.
The voltage across port 2 is $v_2$. The resistor $R$ is connected across port 2.
The current through $R$ is $v_2/R$. This current is leaving the top terminal of port 2 and entering the bottom terminal.
So, the current entering port 2 is $i_2$. This $i_2$ flows into the port 2 node.
The current through $R$ is $v_2/R$. This current is also flowing *out* of the port 2 node.
So, $i_2 = v_2/R$. This is if $i_2$ is entering the node.

Let's be precise with the convention: $i_1$ enters, $i_2$ leaves.
If the resistor $R$ is connected between the two terminals of port 2:
```
      +---------+
      |         |
  v1 --->o-------o--- v2
      |PORT 1|PORT 2|
      |         |
      +----R----+
      |         |
  i1 --->o-------o--- i2
      |         |
      +---------+
```
$i_1$ enters port 1.
$i_2$ leaves port 2.
The voltage across port 2 is $v_2$. The resistor $R$ is across port 2.
The current through $R$ is $v_2/R$. This current flows *from* the top terminal of port 2 *to* the bottom terminal of port 2.
So, the current leaving the top terminal of port 2 is $i_2$.
The current entering the top terminal of port 2 is $i_1$. (This is wrong, $i_1$ is at port 1).

Let's go back to the definition of Y-parameters and derive from a circuit.

**Example: Y-parameters for a Pi-network.**
A Pi-network with admittances $Y_a, Y_b, Y_c$:

```
      +---------+
      |         |
  v1 --->o---Y_a---o--- v2
      |         |   |
      |   Y_b   |   |
      |         |   |
  i1 --->o---Y_c---o---
      |PORT 1|PORT 2|
      +---------+
```
This diagram indicates that $Y_a$ is in series with the top line, $Y_c$ is in series with the bottom line, and $Y_b$ is connected between the two ports.
This is also not standard Pi.

**Standard Pi-Network Diagram:**

```
      +---------+
      |         |
  v1 --->o---Y_a---o--- v2
      |    |       |
      |    Y_b     |
      |    |       |
  i1 --->o-------o---
      |PORT 1|PORT 2|
      +---------+
```
Here, $Y_a$ is in series with port 1. $Y_c$ is in series with port 2. $Y_b$ is connected between the two ports. This is also not standard.

**Standard Pi-Network (with shunt admittances at ports and series admittance in middle):**

```
      +---------+
      |         |
  v1 --->o---Y_a---o--- v2
      |    |       |
      |    Y_b     |
      |    |       |
  i1 --->o-------o---
      |PORT 1|PORT 2|
      +---------+
```
This diagram is for a T-network in terms of impedance. For admittance, it should be:

**Correct Pi-Network for Y-parameters:**

```
      +---------+
      |         |
  v1 --->o---Y_a---o--- v2
      |    |       |
      |    Y_b     |
      |    |       |
  i1 --->o-------o---
      |PORT 1|PORT 2|
      +---------+
```
This diagram shows:
$i_1$ enters. It goes through $Y_a$.
The node between $Y_a$ and $Y_b$ has voltage $v_1$. So, current through $Y_a$ is $v_1 Y_a$.
The current $i_1$ is the sum of current through $Y_a$ and current entering $Y_b$.
The voltage across $Y_b$ is $v_1 - v_2$.
Current through $Y_b$ is $(v_1 - v_2)Y_b$.
$i_1 = v_1 Y_a + (v_1 - v_2)Y_b = (Y_a + Y_b)v_1 - Y_b v_2$

$i_2$ leaves port 2. The current entering port 2 is $-i_2$.
The current entering port 2 node is from $Y_b$ and $Y_c$.
Voltage across $Y_c$ is $v_2$. Current through $Y_c$ is $v_2 Y_c$. This current leaves port 2.
The current entering the port 2 node is from $Y_b$ and $Y_c$.
The current entering port 2 is $-i_2$.
$-i_2 = (v_2 - v_1)Y_b + v_2 Y_c = -Y_b v_1 + (Y_b + Y_c)v_2$
$i_2 = Y_b v_1 - (Y_b + Y_c)v_2$

Comparing with:
$i_1 = Y_{11}v_1 + Y_{12}v_2$
$i_2 = Y_{21}v_1 + Y_{22}v_2$

We get:
$Y_{11} = Y_a + Y_b$
$Y_{12} = -Y_b$
$Y_{21} = Y_b$
$Y_{22} = Y_b + Y_c$

**Important Point:** The Y-parameters are associated with short-circuit conditions.

**Relevance to Course Outcomes:** Directly addresses **CO5**.

#### 2.3 H-parameters (Hybrid Parameters)

**Key Concept:** H-parameters relate one port voltage and one port current to the other port voltage and current. They are called "hybrid" because they mix voltage and current variables.

**Derivation:**

$v_1 = h_{11}i_1 + h_{12}v_2$  (Equation 2.5)
$i_2 = h_{21}i_1 + h_{22}v_2$  (Equation 2.6)

In matrix form:
$\begin{bmatrix} v_1 \\ i_2 \end{bmatrix} = \begin{bmatrix} h_{11} & h_{12} \\ h_{21} & h_{22} \end{bmatrix} \begin{bmatrix} i_1 \\ v_2 \end{bmatrix}$

Where:
*   $h_{11} = \left. \frac{v_1}{i_1} \right|_{v_2=0}$ (Open-circuit input impedance)
*   $h_{12} = \left. \frac{v_1}{v_2} \right|_{i_1=0}$ (Open-circuit reverse voltage gain)
*   $h_{21} = \left. \frac{i_2}{i_1} \right|_{v_2=0}$ (Short-circuit forward current gain)
*   $h_{22} = \left. \frac{i_2}{v_2} \right|_{i_1=0}$ (Short-circuit output admittance)

**Units:**
*   $h_{11}$: $\Omega$
*   $h_{12}$: Dimensionless
*   $h_{21}$: Dimensionless
*   $h_{22}$: S

**Properties:**
*   For a reciprocal network, $h_{12} = -h_{21}$.

**Example:** Consider a simple transistor model (e.g., common emitter configuration). The input is usually current-controlled voltage, and output is voltage-controlled current. H-parameters are very useful here.

Let's take a T-network again for demonstration:
$Z_{11} = Z_a + Z_b$, $Z_{12} = -Z_b$, $Z_{21} = Z_b$, $Z_{22} = Z_b + Z_c$.

We can derive H-parameters from Z-parameters (and vice versa). From the Z-parameter equations:
$v_1 = Z_{11}i_1 + Z_{12}i_2$
$v_2 = Z_{21}i_1 + Z_{22}i_2$

From the H-parameter equations:
$v_1 = h_{11}i_1 + h_{12}v_2$
$i_2 = h_{21}i_1 + h_{22}v_2$

From the second Z-parameter equation, express $i_2$ in terms of $v_2$ and $i_1$:
$i_2 = -\frac{Z_{21}}{Z_{22}}i_1 + \frac{1}{Z_{22}}v_2$

Comparing this with $i_2 = h_{21}i_1 + h_{22}v_2$:
$h_{21} = -\frac{Z_{21}}{Z_{22}}$
$h_{22} = \frac{1}{Z_{22}}$

Now, substitute $i_2$ into the first Z-parameter equation:
$v_1 = Z_{11}i_1 + Z_{12}(-\frac{Z_{21}}{Z_{22}}i_1 + \frac{1}{Z_{22}}v_2)$
$v_1 = (Z_{11} - \frac{Z_{12}Z_{21}}{Z_{22}})i_1 + \frac{Z_{12}}{Z_{22}}v_2$

Comparing this with $v_1 = h_{11}i_1 + h_{12}v_2$:
$h_{11} = Z_{11} - \frac{Z_{12}Z_{21}}{Z_{22}} = \frac{Z_{11}Z_{22} - Z_{12}Z_{21}}{Z_{22}}$
$h_{12} = \frac{Z_{12}}{Z_{22}}$

**Relevance to Course Outcomes:** Directly addresses **CO5**.

#### 2.4 G-parameters (Inverse Hybrid Parameters)

**Key Concept:** G-parameters relate one port current and one port voltage to the other port current and voltage. They are essentially the inverse of H-parameters.

**Derivation:**

$i_1 = g_{11}v_1 + g_{12}i_2$  (Equation 2.7)
$v_2 = g_{21}v_1 + g_{22}i_2$  (Equation 2.8)

In matrix form:
$\begin{bmatrix} i_1 \\ v_2 \end{bmatrix} = \begin{bmatrix} g_{11} & g_{12} \\ g_{21} & g_{22} \end{bmatrix} \begin{bmatrix} v_1 \\ i_2 \end{bmatrix}$

Where:
*   $g_{11} = \left. \frac{i_1}{v_1} \right|_{i_2=0}$ (Open-circuit input admittance)
*   $g_{12} = \left. \frac{i_1}{i_2} \right|_{v_1=0}$ (Short-circuit reverse current gain)
*   $g_{21} = \left. \frac{v_2}{v_1} \right|_{i_2=0}$ (Open-circuit forward voltage gain)
*   $g_{22} = \left. \frac{v_2}{i_2} \right|_{v_1=0}$ (Short-circuit output impedance)

**Units:**
*   $g_{11}$: S
*   $g_{12}$: Dimensionless
*   $g_{21}$: Dimensionless
*   $g_{22}$: $\Omega$

**Properties:**
*   For a reciprocal network, $g_{12} = -g_{21}$.

**Relationship to other parameters:** G-parameters can be obtained by inverting the H-parameter matrix.
$\begin{bmatrix} v_1 \\ i_2 \end{bmatrix} = \begin{bmatrix} h_{11} & h_{12} \\ h_{21} & h_{22} \end{bmatrix} \begin{bmatrix} i_1 \\ v_2 \end{bmatrix}$
$\begin{bmatrix} i_1 \\ v_2 \end{bmatrix} = \begin{bmatrix} h_{11} & h_{12} \\ h_{21} & h_{22} \end{bmatrix}^{-1} \begin{bmatrix} v_1 \\ i_2 \end{bmatrix}$

The inverse of the H-matrix is:
$\frac{1}{\Delta h} \begin{bmatrix} h_{22} & -h_{12} \\ -h_{21} & h_{11} \end{bmatrix}$, where $\Delta h = h_{11}h_{22} - h_{12}h_{21}$.

So,
$g_{11} = \frac{h_{22}}{\Delta h}$
$g_{12} = \frac{-h_{12}}{\Delta h}$
$g_{21} = \frac{-h_{21}}{\Delta h}$
$g_{22} = \frac{h_{11}}{\Delta h}$

**Relevance to Course Outcomes:** Directly addresses **CO5**.

#### 2.5 ABCD-parameters (Transmission Parameters)

**Key Concept:** ABCD-parameters relate the input voltage and current to the output voltage and current. They are commonly used in transmission line analysis and cascaded networks.

**Derivation:**

$v_1 = Av_2 - Bi_2$  (Equation 2.9)
$i_1 = Cv_2 - Di_2$  (Equation 2.10)

Note: The convention here is that $i_2$ is leaving the network. The equation is sometimes written with $+Bi_2$ and $+Di_2$, depending on the sign convention of $i_2$. The given form with a minus sign for $i_2$ is standard for transmission line parameters where $i_2$ is treated as current leaving the line.

In matrix form:
$\begin{bmatrix} v_1 \\ i_1 \end{bmatrix} = \begin{bmatrix} A & B \\ C & D \end{bmatrix} \begin{bmatrix} v_2 \\ -i_2 \end{bmatrix}$  (This is not directly from the equations above)

Let's use the standard matrix form directly from the equations:
$\begin{bmatrix} v_1 \\ i_1 \end{bmatrix} = \begin{bmatrix} A & B \\ C & D \end{bmatrix} \begin{bmatrix} v_2 \\ i_2 \end{bmatrix}$ is incorrect for the derived equations.

The correct matrix form for the equations $v_1 = Av_2 - Bi_2$ and $i_1 = Cv_2 - Di_2$ (where $i_2$ is the current leaving port 2) is:
$\begin{bmatrix} v_1 \\ i_1 \end{bmatrix} = \begin{bmatrix} A & -B \\ C & -D \end{bmatrix} \begin{bmatrix} v_2 \\ i_2 \end{bmatrix}$

Alternatively, if we express $v_1$ and $i_1$ in terms of $v_2$ and $i_2$ (where $i_2$ is entering port 2):
$v_1 = Av_2 + Bi_2$
$i_1 = Cv_2 + Di_2$
Then, $\begin{bmatrix} v_1 \\ i_1 \end{bmatrix} = \begin{bmatrix} A & B \\ C & D \end{bmatrix} \begin{bmatrix} v_2 \\ i_2 \end{bmatrix}$

Let's stick to the definition that requires deriving parameters.
*   $A = \left. \frac{v_1}{v_2} \right|_{i_2=0}$ (Open-circuit voltage ratio, or transmission ratio)
*   $B = \left. -\frac{v_1}{i_2} \right|_{v_2=0}$ (Open-circuit transfer impedance)
*   $C = \left. \frac{i_1}{v_2} \right|_{i_2=0}$ (Short-circuit transfer admittance)
*   $D = \left. -\frac{i_1}{i_2} \right|_{v_2=0}$ (Short-circuit current ratio)

**Units:**
*   A: Dimensionless
*   B: $\Omega$
*   C: S
*   D: Dimensionless

**Properties:**
*   For a reciprocal network, $AD - BC = 1$.

**Example:** ABCD-parameters for a series impedance $Z$.

```
      +---------+
      |         |
  v1 --->o---Z---o--- v2
      |PORT 1|PORT 2|
  i1 --->o-------o--- i2
      |         |
      +---------+
```
Here, $i_1$ enters, current through $Z$ is $i_1$, $i_2$ leaves port 2. So, the current through $Z$ is $i_1$ if $i_2=0$.
$v_1 = v_1$ across $Z$ and then nothing else.
$v_1 = v_Z = i_1 Z$
$v_2 = v_Z = i_1 Z$

Let's use the definitions by setting one port condition:
*   $i_2 = 0$:
    $v_1 = AZ \implies A = v_1/Z = i_1$ (This is not right, $A=v_1/v_2$)
    If $i_2=0$, then $i_1$ is the current through $Z$.
    $v_1 = i_1 Z$
    $v_2 = i_1 Z$
    So, $A = \left. \frac{v_1}{v_2} \right|_{i_2=0} = \frac{i_1 Z}{i_1 Z} = 1$.

    $i_1 = CZ \implies C = i_1/Z$ (This is not right, $C=i_1/v_2$)
    If $i_2=0$, $i_1$ is the current through $Z$.
    $i_1 = i_1$ (input current).
    So, $C = \left. \frac{i_1}{v_2} \right|_{i_2=0} = \frac{i_1}{i_1 Z} = \frac{1}{Z}$.

*   $v_2 = 0$:
    The circuit is effectively shorted at port 2.
    The impedance seen looking into port 1 is $Z$.
    $v_1 = -B i_2$. This means $B = -v_1/i_2$.
    Current through $Z$ is $i_1$. If $v_2=0$, then the current going out of port 2 must be $i_2$.
    This implies the current through $Z$ is $i_1$. If $v_2=0$, then $v_1 = i_1 Z$.
    $v_1 = AZ + B i_2$. (Using $v_1 = Av_2 - Bi_2$)
    With $v_2=0$: $v_1 = -Bi_2$.
    What is $i_1$ when $v_2=0$? $i_1$ is the current entering. This current flows through $Z$ and then out as $i_2$.
    So, $i_1 = i_2$.
    $v_1 = i_1 Z$.
    $v_1 = -B i_2$. Since $i_1=i_2$, $v_1 = -B i_1$.
    $i_1 Z = -B i_1 \implies B = -Z$.

    $i_1 = -D i_2$.
    Since $i_1 = i_2$, $-D = 1 \implies D = -1$.

So, for a series impedance $Z$: $A=1$, $B=Z$, $C=0$, $D=1$. (Using $v_1 = Av_2 + Bi_2$ convention).
Let's recheck with the $v_1 = Av_2 - Bi_2$ convention.
$A=1$, $B=-Z$, $C=0$, $D=-1$.
Let's verify $AD-BC = 1 \times (-1) - 0 \times (-Z) = -1$. This is not 1.

There is a sign convention for ABCD parameters.
If $\begin{bmatrix} v_1 \\ i_1 \end{bmatrix} = \begin{bmatrix} A & B \\ C & D \end{bmatrix} \begin{bmatrix} v_2 \\ i_2 \end{bmatrix}$ where $i_2$ is entering.
$v_1 = Av_2 + Bi_2$
$i_1 = Cv_2 + Di_2$
For series impedance $Z$:
$v_1 = v_{12}$ (voltage across Z)
$i_1 = i_{12}$ (current through Z)
$i_2$ is current leaving port 2. So $i_2 = -i_1$.
$v_1 = i_1 Z$.
$v_2 = 0$.
$v_1 = Av_2 + Bi_2 = A(0) + B(-i_1) = -Bi_1$.
So, $i_1 Z = -Bi_1 \implies B = -Z$.

$i_1 = Cv_2 + Di_2 = C(0) + D(-i_1) = -Di_1$.
So, $i_1 = -Di_1 \implies D = -1$.

Now for $i_2=0$:
$v_1 = Av_2$. $A = v_1/v_2$.
If $i_2=0$, then $i_1$ is the current. $v_1 = i_1 Z$, $v_2 = i_1 Z$.
So $A = (i_1 Z) / (i_1 Z) = 1$.

$i_1 = Cv_2$. $C = i_1/v_2$.
If $i_2=0$, then $i_1$ is the current. $v_1 = i_1 Z$, $v_2 = i_1 Z$.
So $C = i_1 / (i_1 Z) = 1/Z$.

So for series impedance $Z$, with $i_2$ entering:
$A=1$, $B=-Z$, $C=1/Z$, $D=0$.
Let's check $AD-BC = 1 \times 0 - (-Z) \times (1/Z) = 0 - (-1) = 1$. This is correct.

**Relevance to Course Outcomes:** Directly addresses **CO5**.

---

### 3. Interconnection of Two-Port Networks

Two-port networks can be connected in series, parallel, or cascade to form more complex systems. The parameters of the resultant network can be found by combining the parameters of the individual networks.

#### 3.1 Series Connection

**Key Concept:** In a series connection, the ports are connected in series. For example, port 2 of network 1 is connected to port 1 of network 2.

**Diagram:**

```
    PORT 1       PORT 1'      PORT 2'      PORT 2
  ----------   ----------   ----------   ----------
  | Network  | | Network  | | Network  | | Network  |
  |     1    | |     2    | |     3    | |     4    |
  ----------   ----------   ----------   ----------
```

This is not a series connection. A series connection of two-port networks typically means connecting port 2 of network 1 to port 1 of network 2.

**Diagram of Series Connection (Cascading):**

```
  v1 --->o--[ Network 1 ]--o--[ Network 2 ]--o---> v2
        |                  |                  |
       i1 --->o--[ Network 1 ]--o--[ Network 2 ]--o---> i2
```
Here, port 2 of Network 1 is connected to port 1 of Network 2.
If Network 1 has parameters $\begin{bmatrix} A_1 & B_1 \\ C_1 & D_1 \end{bmatrix}$ and Network 2 has $\begin{bmatrix} A_2 & B_2 \\ C_2 & D_2 \end{bmatrix}$, then the overall ABCD parameters are the product of individual matrices:

$\begin{bmatrix} A & B \\ C & D \end{bmatrix} = \begin{bmatrix} A_1 & B_1 \\ C_1 & D_1 \end{bmatrix} \begin{bmatrix} A_2 & B_2 \\ C_2 & D_2 \end{bmatrix}$

$A = A_1A_2 + B_1C_2$
$B = A_1B_2 + B_1D_2$
$C = C_1A_2 + D_1C_2$
$D = C_1B_2 + D_1D_2$

**Relevance to Course Outcomes:** This is crucial for analyzing cascaded systems and relates to the application of circuit analysis principles, supporting **CO1** and **CO5**.

#### 3.2 Parallel Connection

**Key Concept:** In a parallel connection, the corresponding ports of the two networks are connected together.

**Diagram:**

```
  v1 --->o--+--[ Network 1 ]--+--o---> v2
        |  |                 |  |
        |  +--[ Network 2 ]--+  |
        |                     |
  i1 --->o--+--[ Network 1 ]--+--o---> i2
        |  |                 |  |
        |  +--[ Network 2 ]--+  |
        |                     |
```
Here, port 1 of Network 1 is connected to port 1 of Network 2, and port 2 of Network 1 is connected to port 2 of Network 2.
The overall Y-parameters are the sum of individual Y-parameters:

$\begin{bmatrix} Y_{11} & Y_{12} \\ Y_{21} & Y_{22} \end{bmatrix} = \begin{bmatrix} Y_{11,1} & Y_{12,1} \\ Y_{21,1} & Y_{22,1} \end{bmatrix} + \begin{bmatrix} Y_{11,2} & Y_{12,2} \\ Y_{21,2} & Y_{22,2} \end{bmatrix}$

**Relevance to Course Outcomes:** Supports **CO5**.

#### 3.3 Series-Parallel Connection

This involves a combination of series and parallel connections. The analysis often involves converting between parameter sets.

#### 3.4 Interconnection of Z and Y parameters

It is possible to connect networks characterized by Z-parameters and Y-parameters. This usually involves converting one set of parameters to the other for calculation, or using specific derived formulas for mixed interconnections.

**Example:** Connecting a Z-parameter network in series with a Y-parameter network.

**Relevance to Course Outcomes:** Supports **CO5** and the ability to manipulate different parameter sets.

---

### 4. Terminated Two-Port Networks

When a load is connected to the output port (port 2) of a two-port network, the network is considered terminated. This is a very common scenario in practical applications.

**Key Concept:** The load connected at port 2 affects the overall input impedance and transfer characteristics of the two-port network.

**Diagram:**

```
      +---------+
      |         |
  v1 --->o-------o--- v_load
      | PORT 1 |PORT 2|
  i1 --->o-------o--- i_load
      |         |
      +---------+
           |
          Z_L (Load Impedance)
```
Here, $v_2 = v_{load}$ and $i_2 = -i_{load}$.
The relationship is $v_2 = Z_L i_{load}$ or $i_{load} = Y_L v_2$.
Using the Y-parameter equations:
$i_1 = Y_{11}v_1 + Y_{12}v_2$
$i_2 = Y_{21}v_1 + Y_{22}v_2$

Substitute $i_2 = -i_{load} = -Y_L v_2$:
$-Y_L v_2 = Y_{21}v_1 + Y_{22}v_2$
$Y_L v_2 + Y_{22}v_2 = -Y_{21}v_1$
$(Y_L + Y_{22})v_2 = -Y_{21}v_1$
$v_2 = -\frac{Y_{21}}{Y_L + Y_{22}}v_1$

Substitute this $v_2$ back into the first equation:
$i_1 = Y_{11}v_1 + Y_{12}(-\frac{Y_{21}}{Y_L + Y_{22}}v_1)$
$i_1 = (Y_{11} - \frac{Y_{12}Y_{21}}{Y_L + Y_{22}})v_1$

The input impedance seen at port 1 is $Z_{in} = v_1/i_1$.
$Z_{in} = \frac{1}{Y_{11} - \frac{Y_{12}Y_{21}}{Y_L + Y_{22}}} = \frac{Y_L + Y_{22}}{Y_{11}(Y_L + Y_{22}) - Y_{12}Y_{21}}$

**Example:** Find the input impedance of a two-port network with Z-parameters when terminated with a load $Z_L$.
Using Z-parameters:
$v_1 = Z_{11}i_1 + Z_{12}i_2$
$v_2 = Z_{21}i_1 + Z_{22}i_2$

We know $v_2 = Z_L i_{load}$ and $i_2 = -i_{load}$. So, $v_2 = -Z_L i_2$.
Substitute $v_2 = -Z_L i_2$ into the second equation:
$-Z_L i_2 = Z_{21}i_1 + Z_{22}i_2$
$Z_L i_2 + Z_{22}i_2 = -Z_{21}i_1$
$(Z_L + Z_{22})i_2 = -Z_{21}i_1$
$i_2 = -\frac{Z_{21}}{Z_L + Z_{22}}i_1$

Substitute this $i_2$ back into the first equation:
$v_1 = Z_{11}i_1 + Z_{12}(-\frac{Z_{21}}{Z_L + Z_{22}}i_1)$
$v_1 = (Z_{11} - \frac{Z_{12}Z_{21}}{Z_L + Z_{22}})i_1$

The input impedance $Z_{in} = v_1/i_1$:
$Z_{in} = Z_{11} - \frac{Z_{12}Z_{21}}{Z_L + Z_{22}}$

**Relevance to Course Outcomes:** This is a direct application of two-port network analysis for practical circuit design and analysis, supporting **CO1** and **CO5**.

---

### 5. Reciprocity Theorem for Two-Port Networks

**Key Concept:** A two-port network is reciprocal if the transfer characteristics are the same regardless of the direction of signal transmission.

**Statement:** A two-port network is reciprocal if and only if its Z, Y, or G parameters satisfy $Z_{12} = Z_{21}$, $Y_{12} = Y_{21}$, or $G_{12} = G_{21}$ respectively. For ABCD parameters, the condition is $AD-BC=1$.

**Importance:** Reciprocity is a property of passive networks (containing only resistors, inductors, capacitors) and networks with passive components and bilateral active components (like thermistors). Networks with unilateral active components (like transistors in certain operating regions) are generally non-reciprocal.

**Relevance to Course Outcomes:** Understanding reciprocity is fundamental to classifying and analyzing networks, supporting **CO5**.

---

### 6. Applications of Two-Port Networks

*   **Amplifier Analysis:** H-parameters are widely used to model the behavior of transistors, which are key components in amplifiers.
*   **Filter Design:** Cascade connection of two-port networks is used to design complex filters.
*   **Transmission Line Analysis:** ABCD parameters are essential for analyzing signal propagation along transmission lines.
*   **Impedance Matching:** Understanding input impedance of terminated networks helps in matching impedances for maximum power transfer.
*   **Network Synthesis:** Two-port parameters are used as a basis for synthesizing electrical networks.

**Relevance to Course Outcomes:** This section highlights the practical utility of two-port networks, reinforcing the importance of **CO5** and showing how these concepts apply to broader circuit analysis and design.

---

### Practice Questions and Exercises

**Question 1:**
A two-port network is described by the following Y-parameters: $Y_{11} = 0.2$ S, $Y_{12} = -0.05$ S, $Y_{21} = 0.1$ S, $Y_{22} = 0.4$ S.
Calculate the Z-parameters for this network.

**Answer 1:**
We use the conversion formulas from Y to Z:
$Z_{11} = \frac{Y_{22}}{\Delta Y}$, $Z_{12} = \frac{-Y_{12}}{\Delta Y}$, $Z_{21} = \frac{-Y_{21}}{\Delta Y}$, $Z_{22} = \frac{Y_{11}}{\Delta Y}$, where $\Delta Y = Y_{11}Y_{22} - Y_{12}Y_{21}$.

$\Delta Y = (0.2)(0.4) - (-0.05)(0.1) = 0.08 - (-0.005) = 0.085$ S$^2$.

$Z_{11} = \frac{0.4}{0.085} \approx 4.706 \Omega$
$Z_{12} = \frac{-(-0.05)}{0.085} = \frac{0.05}{0.085} \approx 0.588 \Omega$
$Z_{21} = \frac{-(0.1)}{0.085} = \frac{-0.1}{0.085} \approx -1.176 \Omega$
$Z_{22} = \frac{0.2}{0.085} \approx 2.353 \Omega$

**Question 2:**
A two-port network is characterized by the ABCD parameters: $A=2$, $B=50 \Omega$, $C=0.1$ S, $D=1.5$.
If this network is terminated by a load of $Z_L = 100 \Omega$ at port 2, calculate the input impedance $Z_{in}$.

**Answer 2:**
The input impedance of a two-port network terminated by $Z_L$ can be found using ABCD parameters:
$Z_{in} = \frac{Av_2 + B}{Cv_2 + D}$ (if $i_1 = Cv_2 + Di_2$ and $i_2$ is entering)

Using the definition $v_1 = Av_2 - Bi_2$ and $i_1 = Cv_2 - Di_2$ with $i_2$ leaving:
We know $v_2 = Z_L i_{load}$. Since $i_2$ is leaving, $i_{load} = i_2$.
So, $v_2 = Z_L i_2$.

From $v_1 = Av_2 - Bi_2$:
$v_1 = A(Z_L i_2) - Bi_2 = (AZ_L - B)i_2$

From $i_1 = Cv_2 - Di_2$:
$i_1 = C(Z_L i_2) - Di_2 = (CZ_L - D)i_2$

The input impedance is $Z_{in} = v_1 / i_1$.
$Z_{in} = \frac{(AZ_L - B)i_2}{(CZ_L - D)i_2} = \frac{AZ_L - B}{CZ_L - D}$

Substituting the given values: $A=2, B=50, C=0.1, D=1.5, Z_L=100$.
$Z_{in} = \frac{(2 \times 100) - 50}{(0.1 \times 100) - 1.5} = \frac{200 - 50}{10 - 1.5} = \frac{150}{8.5} \approx 17.647 \Omega$.

**Question 3:**
Determine if a two-port network with the following Z-parameters is reciprocal:
$Z_{11} = 10 \Omega$, $Z_{12} = 5 \Omega$, $Z_{21} = 5 \Omega$, $Z_{22} = 20 \Omega$.

**Answer 3:**
A two-port network is reciprocal if $Z_{12} = Z_{21}$.
In this case, $Z_{12} = 5 \Omega$ and $Z_{21} = 5 \Omega$.
Since $Z_{12} = Z_{21}$, the network is reciprocal.

---

### Important Points to Remember

*   **Two-Port Convention:** Always adhere to the standard convention for port currents ($i_1$ entering, $i_2$ leaving) and voltages.
*   **Parameter Definitions:** Understand the conditions (open-circuit or short-circuit) under which each parameter is defined.
*   **Reciprocity:** Reciprocal networks have symmetric parameter matrices (e.g., $Z_{12} = Z_{21}$).
*   **Interconnection Rules:** Master the rules for combining parameters of networks connected in series, parallel, and cascade. For cascading, ABCD parameters are particularly useful.
*   **Terminated Networks:** Be able to calculate input impedance and transfer functions when a load is connected.
*   **Parameter Conversions:** Be comfortable converting between different sets of parameters (Z, Y, H, G, ABCD).

---

This comprehensive set of notes covers the fundamental aspects of two-port networks, aligning with the learning outcomes and course objectives. It provides definitions, derivations, examples, and practice problems to aid in understanding.
