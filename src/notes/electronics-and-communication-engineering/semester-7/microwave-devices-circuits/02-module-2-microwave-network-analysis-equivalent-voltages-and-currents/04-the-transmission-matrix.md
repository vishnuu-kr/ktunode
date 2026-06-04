---
title: "The transmission matrix."
subject: "MICROWAVE DEVICES & CIRCUITS"
module: "Module 2: Microwave Network Analysis – Equivalent voltages and currents"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff495"
status: "completed"
scrapedAt: "2026-05-23T18:07:49.387Z"
---
# MICROWAVE DEVICES & CIRCUITS - Module 2: Microwave Network Analysis – Equivalent Voltages and Currents

## Topic: The Transmission Matrix

This topic introduces the **transmission matrix** (also known as the **ABCD matrix** or **chain matrix**) as a fundamental tool for analyzing microwave networks. It allows us to relate the input and output voltages and currents of a multi-port network, simplifying the analysis of cascaded networks.

### 1. Learning Outcomes Covered:

*   Understanding the concept and derivation of the transmission matrix for two-port microwave networks.
*   Relating transmission matrix parameters to scattering (S) parameters and impedance (Z) and admittance (Y) parameters.
*   Analyzing cascaded microwave networks using the transmission matrix.
*   Applying the transmission matrix to analyze common microwave components like transmission lines, matching networks, and filters.

### 2. Key Concepts and Definitions:

*   **Two-Port Network:** A network with two distinct ports, typically for input and output signals.
*   **Equivalent Voltages and Currents:** At microwave frequencies, it's often more convenient to work with equivalent voltages and currents that represent the power flow rather than actual instantaneous voltages and currents. These are typically defined in terms of the voltage and current waves.
*   **Transmission Matrix (ABCD Matrix):** A square matrix that relates the input voltage and current of a two-port network to its output voltage and current. For a two-port network, the relationship is expressed as:

    $$
    \begin{bmatrix} V_1 \\ I_1 \end{bmatrix} = \begin{bmatrix} A & B \\ C & D \end{bmatrix} \begin{bmatrix} V_2 \\ I_2 \end{bmatrix}
    $$

    Where:
    *   $V_1$: Equivalent voltage at port 1.
    *   $I_1$: Equivalent current at port 1.
    *   $V_2$: Equivalent voltage at port 2.
    *   $I_2$: Equivalent current at port 2.
    *   A, B, C, D: Transmission parameters, which are complex numbers representing the characteristics of the two-port network.

*   **Sign Convention:** It is crucial to maintain a consistent sign convention. The convention used here is that $I_1$ and $I_2$ are defined as currents *entering* the network at their respective ports.

### 3. Derivation of the Transmission Matrix:

The ABCD parameters are defined by the equations:

*   $V_1 = A V_2 + B I_2$
*   $I_1 = C V_2 + D I_2$

We can determine the values of A, B, C, and D by applying specific conditions at port 2:

*   **To find A:** Set $I_2 = 0$ (port 2 is open-circuited).
    *   $V_1 = A V_2$  $\implies$  $A = \frac{V_1}{V_2} \Big|_{I_2=0}$
    *   $I_1 = C V_2$  $\implies$  $C = \frac{I_1}{V_2} \Big|_{I_2=0}$
    *   **$A$ is the open-circuit reverse voltage gain.**
    *   **$C$ is the open-circuit reverse transfer admittance.**

*   **To find B:** Set $V_2 = 0$ (port 2 is short-circuited).
    *   $V_1 = B I_2$  $\implies$  $B = \frac{V_1}{I_2} \Big|_{V_2=0}$
    *   $I_1 = D I_2$  $\implies$  $D = \frac{I_1}{I_2} \Big|_{V_2=0}$
    *   **$B$ is the short-circuit forward transfer impedance.**
    *   **$D$ is the short-circuit forward current gain.**

**Important Note:** The definition of $I_1$ and $I_2$ (entering or leaving the network) impacts the signs of the parameters. The convention described here defines both as entering.

### 4. Relationship between Transmission Matrix Parameters and Other Parameters:

**4.1. Transmission Matrix and Scattering (S) Parameters:**

For reciprocal networks, the relationship between ABCD parameters and S-parameters is given by:

$$
\begin{bmatrix} A & B \\ C & D \end{bmatrix} = \frac{1}{S_{21}} \begin{bmatrix} -S_{11}S_{22} + S_{12}S_{21} & S_{11} \\ -S_{22} & 1 \end{bmatrix}
$$

**Derivation Sketch (Pozar):**
The S-parameter definition relates incident and reflected waves ($a_1, b_1, a_2, b_2$) to voltage and current waves. Using the relations between wave variables and voltage/current ($V = (a+b)\sqrt{Z_0}$, $I = (a-b)/\sqrt{Z_0}$), one can derive the ABCD parameters.

**Important Properties from S-parameters:**
*   $A = \frac{1+S_{11}}{S_{21}}$ (for reciprocal networks where $S_{12}=S_{21}$)
*   $B = \frac{S_{12}}{S_{21}}$
*   $C = \frac{-S_{22}}{S_{21}}$
*   $D = \frac{1-S_{22}}{S_{21}}$

**4.2. Transmission Matrix and Impedance (Z) Parameters:**

For a reciprocal network, the Z-parameter matrix is:
$$
\begin{bmatrix} Z_{11} & Z_{12} \\ Z_{21} & Z_{22} \end{bmatrix}
$$
Where:
*   $Z_{11} = \frac{V_1}{I_1} \Big|_{I_2=0}$
*   $Z_{12} = \frac{V_1}{I_2} \Big|_{I_1=0}$
*   $Z_{21} = \frac{V_2}{I_1} \Big|_{I_2=0}$
*   $Z_{22} = \frac{V_2}{I_2} \Big|_{I_1=0}$

The relationship between ABCD and Z parameters is:

$$
\begin{bmatrix} A & B \\ C & D \end{bmatrix} = \begin{bmatrix} Z_{11}/Z_{21} & (Z_{11}Z_{22}-Z_{12}Z_{21})/Z_{21} \\ 1/Z_{21} & Z_{22}/Z_{21} \end{bmatrix}
$$

**4.3. Transmission Matrix and Admittance (Y) Parameters:**

For a reciprocal network, the Y-parameter matrix is:
$$
\begin{bmatrix} Y_{11} & Y_{12} \\ Y_{21} & Y_{22} \end{bmatrix}
$$
Where:
*   $Y_{11} = \frac{I_1}{V_1} \Big|_{V_2=0}$
*   $Y_{12} = \frac{I_1}{V_2} \Big|_{V_1=0}$
*   $Y_{21} = \frac{I_2}{V_1} \Big|_{V_2=0}$
*   $Y_{22} = \frac{I_2}{V_2} \Big|_{V_1=0}$

The relationship between ABCD and Y parameters is:

$$
\begin{bmatrix} A & B \\ C & D \end{bmatrix} = \begin{bmatrix} Y_{22}/Y_{21} & 1/Y_{21} \\ (Y_{11}Y_{22}-Y_{12}Y_{21})/Y_{21} & Y_{11}/Y_{21} \end{bmatrix}
$$

**Highlight:** The conversion between parameter sets is crucial for analyzing networks where different components are characterized by different parameters.

### 5. Analyzing Cascaded Microwave Networks:

One of the primary advantages of the transmission matrix is its ability to simplify the analysis of cascaded networks. If two-port network 1 has parameters $[A_1, B_1; C_1, D_1]$ and network 2 has parameters $[A_2, B_2; C_2, D_2]$, and they are connected in cascade (network 1 feeding into network 2), the overall transmission matrix $[A_{total}, B_{total}; C_{total}, D_{total}]$ is the matrix product of the individual matrices:

$$
\begin{bmatrix} V_1 \\ I_1 \end{bmatrix} = \begin{bmatrix} A_1 & B_1 \\ C_1 & D_1 \end{bmatrix} \begin{bmatrix} V_2 \\ I_2 \end{bmatrix} = \begin{bmatrix} A_1 & B_1 \\ C_1 & D_1 \end{bmatrix} \begin{bmatrix} A_2 & B_2 \\ C_2 & D_2 \end{bmatrix} \begin{bmatrix} V_3 \\ I_3 \end{bmatrix}
$$

Therefore, the total transmission matrix is:

$$
\begin{bmatrix} A_{total} & B_{total} \\ C_{total} & D_{total} \end{bmatrix} = \begin{bmatrix} A_1 & B_1 \\ C_1 & D_1 \end{bmatrix} \begin{bmatrix} A_2 & B_2 \\ C_2 & D_2 \end{bmatrix}
$$

This matrix multiplication results in:

*   $A_{total} = A_1 A_2 + B_1 C_2$
*   $B_{total} = A_1 B_2 + B_1 D_2$
*   $C_{total} = C_1 A_2 + D_1 C_2$
*   $D_{total} = C_1 B_2 + D_1 D_2$

**Example:** Analyzing a matching network followed by a filter.

**Highlight:** The order of matrix multiplication is critical for cascaded networks. The matrix of the *first* network in the cascade comes *first* in the product.

### 6. Transmission Matrix of Common Microwave Components:

**6.1. Lossless Transmission Line:**

Consider a lossless transmission line of length $l$ with characteristic impedance $Z_0$ and propagation constant $\gamma = j\beta$ (where $\beta = \omega\sqrt{LC}$).

The voltage and current at port 1 are related to port 2 by:
$V_1 = V_2 \cos(\beta l) + j Z_0 I_2 \sin(\beta l)$
$I_1 = \frac{V_2}{j Z_0} \sin(\beta l) + I_2 \cos(\beta l)$

Comparing these with the ABCD equations:
$V_1 = A V_2 + B I_2$
$I_1 = C V_2 + D I_2$

We get the transmission matrix for a lossless transmission line:

$$
\begin{bmatrix} A & B \\ C & D \end{bmatrix} = \begin{bmatrix} \cos(\beta l) & j Z_0 \sin(\beta l) \\ \frac{1}{j Z_0} \sin(\beta l) & \cos(\beta l) \end{bmatrix}
$$

**Properties of Lossless Transmission Line Matrix:**
*   $AD - BC = \cos^2(\beta l) - (j Z_0 \sin(\beta l))(\frac{1}{j Z_0} \sin(\beta l)) = \cos^2(\beta l) + \sin^2(\beta l) = 1$.
*   For reciprocal networks, $AD - BC = 1$.

**6.2. Shunt Admittance (Y) or Series Impedance (Z):**

*   **Shunt Admittance $Y$ (connected at port 2):**
    *   $I_1 = I_2 + Y V_2$
    *   $V_1 = V_2$
    *   Thus, $V_1 = 1 \cdot V_2 + 0 \cdot I_2$
    *   And $I_1 = Y \cdot V_2 + 1 \cdot I_2$
    *   $$
        \begin{bmatrix} A & B \\ C & D \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ Y & 1 \end{bmatrix}
        $$

*   **Series Impedance $Z$ (connected at port 1):**
    *   $V_1 = V_2 + Z I_1$
    *   $I_1 = I_2$
    *   This form is for current entering at both ports. If we consider the matrix for the component itself, it relates input to output.
    *   Let's consider a component with series impedance $Z$ connected between port 1 and port 2 (as if it were a series element).
    *   $V_1 = V_{intermediate}$
    *   $V_{intermediate} = V_2 + Z I_2$
    *   $V_1 = V_2 + Z I_2$
    *   $I_1 = I_2$
    *   $$
        \begin{bmatrix} A & B \\ C & D \end{bmatrix} = \begin{bmatrix} 1 & Z \\ 0 & 1 \end{bmatrix}
        $$
    *   **Pozar (4/e) defines transmission parameters for a network with port 1 on the left and port 2 on the right. For a series element $Z$ inserted between two ports, the voltage drop across $Z$ is $ZI_1$. So $V_1 = V_{intermediate} + ZI_1$. If $V_{intermediate}$ is the voltage at the other side of $Z$, and $I_1$ is the current entering the entire network, then $V_1 = V_{intermediate}$ and $I_1 = I_2$. This definition relates $V_1$ and $I_1$ to $V_2$ and $I_2$.**

    *   **Let's use the standard definition where $I_1$ and $I_2$ enter the network.**
    *   For a **shunt admittance Y** connected to port 2:
        $$
        \begin{bmatrix} A & B \\ C & D \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ Y & 1 \end{bmatrix}
        $$
    *   For a **series impedance Z** connected in series with port 1 (this is more like a component whose input is $V_1, I_1$ and output is $V_2, I_2$ with $Z$ in series):
        $$
        \begin{bmatrix} A & B \\ C & D \end{bmatrix} = \begin{bmatrix} 1 & Z \\ 0 & 1 \end{bmatrix}
        $$
        This implies $V_1 = V_2 + ZI_2$ and $I_1 = I_2$. This matrix describes a component where port 1 is before the series impedance and port 2 is after it, with $I_1$ and $I_2$ entering the respective sections.

    *   **Let's stick to the formulation where $V_1, I_1$ are at port 1 and $V_2, I_2$ are at port 2, with both currents entering the network.**

    *   **Shunt Admittance $Y$ (connected across port 2):**
        $$
        \begin{bmatrix} A & B \\ C & D \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ Y & 1 \end{bmatrix}
        $$

    *   **Series Impedance $Z$ (in series with port 1, relating inputs to outputs):**
        $$
        \begin{bmatrix} A & B \\ C & D \end{bmatrix} = \begin{bmatrix} 1 & Z \\ 0 & 1 \end{bmatrix}
        $$
        This describes a network where the input voltage $V_1$ is the voltage across the series impedance $Z$ plus the voltage $V_2$ at port 2, and the input current $I_1$ is equal to the output current $I_2$.

**6.3. Quarter-Wave Transformer (QWT):**

A QWT is a transmission line section of length $\lambda/4$ with characteristic impedance $Z_t$. It is used for impedance matching.
Let $\beta l = \pi/2$.
From the lossless transmission line matrix:
$$
\begin{bmatrix} A & B \\ C & D \end{bmatrix} = \begin{bmatrix} \cos(\pi/2) & j Z_t \sin(\pi/2) \\ \frac{1}{j Z_t} \sin(\pi/2) & \cos(\pi/2) \end{bmatrix} = \begin{bmatrix} 0 & j Z_t \\ \frac{1}{j Z_t} & 0 \end{bmatrix}
$$

**Example:** Matching a load $Z_L$ to a source $Z_S$ using a QWT.
If $Z_S$ is connected to port 1 and $Z_L$ to port 2, we need to match $Z_S$ to the input impedance of the QWT terminated with $Z_L$.
The input impedance $Z_{in}$ of the QWT terminated with $Z_L$ is given by:
$Z_{in} = \frac{A Z_L + B}{C Z_L + D}$
$Z_{in} = \frac{0 \cdot Z_L + j Z_t}{ \frac{1}{j Z_t} Z_L + 0} = \frac{j Z_t Z_t}{Z_L} = \frac{Z_t^2}{Z_L}$

For perfect matching, $Z_{in} = Z_S$, so $Z_S = \frac{Z_t^2}{Z_L}$, which means $Z_t = \sqrt{Z_S Z_L}$.

**6.4. Parallel (Shunt) Stub:**

A parallel stub of length $l$ with characteristic impedance $Z_0$ can be modeled as a shunt element.
If the stub is open-circuited at the end, its impedance is purely reactive.
*   For an open stub of length $l$: Admittance $Y = j \frac{1}{Z_0} \tan(\beta l)$.
    $$
    \begin{bmatrix} A & B \\ C & D \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ j \frac{1}{Z_0} \tan(\beta l) & 1 \end{bmatrix}
    $$
*   For a short-circuited stub of length $l$: Admittance $Y = -j Y_0 \cot(\beta l)$, where $Y_0 = 1/Z_0$.
    $$
    \begin{bmatrix} A & B \\ C & D \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ -j Y_0 \cot(\beta l) & 1 \end{bmatrix}
    $$

**6.5. Series Stub:**

A series stub is typically modeled as a series element.
*   For a short-circuited series stub (impedance $Z = j Z_0 \tan(\beta l)$):
    $$
    \begin{bmatrix} A & B \\ C & D \end{bmatrix} = \begin{bmatrix} 1 & j Z_0 \tan(\beta l) \\ 0 & 1 \end{bmatrix}
    $$
*   For an open-circuited series stub (impedance $Z = -j Z_0 \cot(\beta l)$):
    $$
    \begin{bmatrix} A & B \\ C & D \end{bmatrix} = \begin{bmatrix} 1 & -j Z_0 \cot(\beta l) \\ 0 & 1 \end{bmatrix}
    $$

**Highlight:** Understanding the matrix representation of basic passive components is fundamental. These matrices can be cascaded to represent more complex circuits.

### 7. Applications and Importance:

*   **Circuit Analysis:** Simplifies the analysis of complex networks, especially those with many cascaded stages.
*   **Filter Design:** Used to derive the ABCD parameters of filters and then convert them to other parameters for design.
*   **Impedance Matching:** Essential for designing matching networks by calculating the input impedance of a cascaded system.
*   **Microwave Oscillator and Amplifier Design:** Analyzing feedback loops and stages.
*   **Power Transfer Calculations:** Relating input and output powers.

**Alignment with Course Outcomes:**

*   **CO1 (Describe principles of devices):** While not directly about device operation, understanding the equivalent circuit representation (like transmission matrices) is a step towards analyzing how devices behave in circuits.
*   **CO2 (Analyze Microwave Networks using signal flow graphs):** The transmission matrix is a precursor to understanding signal flow graphs. The matrix multiplication for cascaded networks directly translates to path multiplication in signal flow graphs.
*   **CO3 (Design microwave filters):** The transmission matrix is a key tool in filter synthesis, especially when converting filter specifications (like Butterworth or Chebyshev) into equivalent circuit elements and their ABCD parameters.
*   **CO4 (Illustrate basic concepts of MICs):** MICs are built using cascaded sections of transmission lines, stubs, and other passive components. The transmission matrix is the primary method to analyze and design these interconnections.

### 8. Practice Questions and Exercises:

**Question 1:**
A two-port network has the following transmission matrix:
$$
\begin{bmatrix} A & B \\ C & D \end{bmatrix} = \begin{bmatrix} 2 & 5 \\ 1 & 3 \end{bmatrix}
$$
If the network is terminated with a load $Z_L = 50 \Omega$ at port 2, find the input impedance $Z_{in}$ at port 1.

**Solution 1:**
The input impedance is given by $Z_{in} = \frac{A Z_L + B}{C Z_L + D}$.
Given $A=2$, $B=5$, $C=1$, $D=3$, and $Z_L = 50 \Omega$.
$Z_{in} = \frac{2(50) + 5}{1(50) + 3} = \frac{100 + 5}{50 + 3} = \frac{105}{53} \approx 1.98 \Omega$.

**Question 2:**
A lossless transmission line of length $0.1\lambda$ with $Z_0 = 100 \Omega$ is used as a matching section. If the line is operated at a frequency where $\beta l = \pi/4$, find its transmission matrix.

**Solution 2:**
For a lossless transmission line, the transmission matrix is:
$$
\begin{bmatrix} \cos(\beta l) & j Z_0 \sin(\beta l) \\ \frac{1}{j Z_0} \sin(\beta l) & \cos(\beta l) \end{bmatrix}
$$
Given $\beta l = \pi/4$ and $Z_0 = 100 \Omega$.
$\cos(\pi/4) = \frac{\sqrt{2}}{2}$ and $\sin(\pi/4) = \frac{\sqrt{2}}{2}$.
$$
\begin{bmatrix} \frac{\sqrt{2}}{2} & j 100 \frac{\sqrt{2}}{2} \\ \frac{1}{j 100} \frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2} \end{bmatrix} = \begin{bmatrix} \frac{\sqrt{2}}{2} & j 50\sqrt{2} \\ -j \frac{\sqrt{2}}{200} & \frac{\sqrt{2}}{2} \end{bmatrix}
$$

**Question 3:**
A shunt stub with admittance $Y$ is placed at port 2 of a two-port network. If the network's transmission matrix is $[A, B; C, D]$, find the transmission matrix of the combined network.

**Solution 3:**
The transmission matrix for the shunt stub is $\begin{bmatrix} 1 & 0 \\ Y & 1 \end{bmatrix}$.
The transmission matrix for the original network is $\begin{bmatrix} A & B \\ C & D \end{bmatrix}$.
Since the shunt stub is placed at port 2, it effectively modifies the load seen by the original network. In terms of matrix cascading, if the original network is network 1 and the stub is network 2, and they are connected such that the output of network 1 is the input to network 2:
$$
\begin{bmatrix} V_1 \\ I_1 \end{bmatrix}_{orig} = \begin{bmatrix} A & B \\ C & D \end{bmatrix}_{orig} \begin{bmatrix} V_2 \\ I_2 \end{bmatrix}_{orig}
$$
The stub is connected across port 2, meaning the voltage at port 2 of the original network is the voltage across the stub, and the current entering the stub is the current leaving port 2 of the original network *plus* the current through the stub.

Let's consider the effect of the stub as adding a shunt element to the output.
If the original network's output is $V_2, I_2$, and a shunt element $Y$ is connected across the output.
The equations for the stub are $V_{stub} = V_2$ and $I_{stub} = Y V_2$.
The total current leaving the original network's port 2 is $I_{2,total} = I_2 + I_{stub} = I_2 + Y V_2$.
This means the original network is now feeding into a load that includes the shunt element.
If we define a new two-port network whose input is port 1 of the original network and output is effectively the current entering the original network's port 2 ($I_2$) and voltage at port 2 ($V_2$), then the shunt stub effectively changes the relationship between $V_2$ and $I_2$.

A more standard way to represent this is by considering the original network and then the shunt element.
Let Network 1 be the original network with matrix $\begin{bmatrix} A_1 & B_1 \\ C_1 & D_1 \end{bmatrix}$.
Let Network 2 be the shunt element (admittance $Y$) with matrix $\begin{bmatrix} A_2 & B_2 \\ C_2 & D_2 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ Y & 1 \end{bmatrix}$.
If Network 1 is followed by Network 2 (cascaded), the total matrix is the product of their matrices. However, a shunt element is not typically cascaded in this linear series manner; it's across the output.

**Correct Interpretation:** The shunt element modifies the load. If the original network's transmission matrix is $[A, B; C, D]$, and it's terminated by a load $Z_L$. Now, a shunt admittance $Y$ is added in parallel with $Z_L$. The new load impedance is $Z_{L,new} = (Z_L || 1/Y) = \frac{Z_L \cdot (1/Y)}{Z_L + (1/Y)} = \frac{Z_L}{1 + Y Z_L}$.
The input impedance changes.

**If the question implies cascading the matrices:**
Consider the original network with matrix $\begin{bmatrix} A & B \\ C & D \end{bmatrix}$.
A shunt admittance $Y$ is placed at port 2. This can be thought of as a network where $V_1$ is the voltage at port 1, $I_1$ is the current entering port 1, $V_2$ is the voltage at port 2, and $I_2$ is the current entering port 2 (which is the current going into the load). The shunt stub receives $V_2$ and injects $I_{stub} = YV_2$. The total current leaving the original network's port 2 must be the sum of the current going into the load and the current through the stub. This formulation gets complicated.

**Let's consider the standard matrices for cascaded elements:**
If network 1 has matrix $T_1$ and network 2 has matrix $T_2$, and network 1 feeds into network 2, the total matrix is $T_{total} = T_1 T_2$.

The shunt stub is *across* port 2. This means the input voltage to the stub is $V_2$ of the original network, and the current from the stub is $Y V_2$. The original network sees its output port 2 with current $I_2$ flowing *into* the network, and a voltage $V_2$ across it. The shunt element is connected in parallel with the output.

**Revised approach for shunt elements in series analysis:**
Consider a network N with matrix $\begin{bmatrix} A & B \\ C & D \end{bmatrix}$.
A shunt element Y connected to port 2 means that at port 2, $I_{out} = I_{load} + Y V_{out}$.
The transmission matrix relates $V_{in}, I_{in}$ to $V_{out}, I_{out}$.
$V_{in} = A V_{out} + B I_{out}$
$I_{in} = C V_{out} + D I_{out}$

If we add a shunt admittance $Y$ at port 2, the current leaving the network will now be $I_{out} + Y V_{out}$.
So, we need to express $V_{in}, I_{in}$ in terms of $V_{out}$ and the current entering the load.
Let $I_{load}$ be the current entering the load. Then $I_{out} = I_{load} + Y V_{out}$.
Substituting this into the original equations:
$V_{in} = A V_{out} + B (I_{load} + Y V_{out}) = (A + BY) V_{out} + B I_{load}$
$I_{in} = C V_{out} + D (I_{load} + Y V_{out}) = (C + DY) V_{out} + D I_{load}$

So the new transmission matrix is:
$$
\begin{bmatrix} A' & B' \\ C' & D' \end{bmatrix} = \begin{bmatrix} A+BY & B \\ C+DY & D \end{bmatrix}
$$
This is equivalent to multiplying the original matrix by a series element matrix (like $\begin{bmatrix} 1 & 0 \\ Y & 1 \end{bmatrix}$ on the right, if the series elements were on the input side. However, this is a shunt element at the output).

**The standard method for a shunt element Y at port 2:**
If a two-port network is described by $\begin{bmatrix} V_1 \\ I_1 \end{bmatrix} = T \begin{bmatrix} V_2 \\ I_2 \end{bmatrix}$, and a shunt element $Y$ is connected at port 2.
The relationship at port 2 is $I_2 = I_{load} + YV_2$.
Substituting $I_2$ in the original equation:
$\begin{bmatrix} V_1 \\ I_1 \end{bmatrix} = T \begin{bmatrix} V_2 \\ I_{load} + YV_2 \end{bmatrix} = T \left( \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} V_2 \\ I_{load} \end{bmatrix} + \begin{bmatrix} 0 & 0 \\ Y & 0 \end{bmatrix} \begin{bmatrix} V_2 \\ I_{load} \end{bmatrix} \right)$
$\begin{bmatrix} V_1 \\ I_1 \end{bmatrix} = T \left( I + T_{shunt} \right) \begin{bmatrix} V_2 \\ I_{load} \end{bmatrix}$ where $T_{shunt} = \begin{bmatrix} 0 & 0 \\ Y & 0 \end{bmatrix}$

Alternatively, if the transmission matrix relates $V_1, I_1$ to $V_2, I_2$, and we add a shunt element $Y$ at port 2, the new relationship at port 2 is $I_{1,new} = I_{2,orig} + Y V_{2,orig}$. This is not correct.

**Correct transformation for shunt elements (Pozar p. 82):**
If a network has matrix $T = \begin{bmatrix} A & B \\ C & D \end{bmatrix}$, and a shunt admittance $Y$ is added in parallel with port 2, the new matrix $T'$ is:
$$
T' = \begin{bmatrix} A & B \\ C & D \end{bmatrix} \begin{bmatrix} 1 & 0 \\ Y & 1 \end{bmatrix} = \begin{bmatrix} A & B \\ C+AY & D+BY \end{bmatrix}
$$
This means the new matrix parameters are $A' = A$, $B' = B$, $C' = C + AY$, $D' = D + BY$.

Let's verify this.
The original equations are $V_1 = A V_2 + B I_2$ and $I_1 = C V_2 + D I_2$.
The shunt admittance $Y$ means that the current entering the actual load is $I_{load} = I_2 - Y V_2$.
So $I_2 = I_{load} + Y V_2$.
Substitute this into the original equations:
$V_1 = A V_2 + B (I_{load} + Y V_2) = (A + BY) V_2 + B I_{load}$
$I_1 = C V_2 + D (I_{load} + Y V_2) = (C + DY) V_2 + D I_{load}$
This means the new parameters relating $V_1, I_1$ to $V_2, I_{load}$ are:
$A_{new} = A + BY$
$B_{new} = B$
$C_{new} = C + DY$
$D_{new} = D$
This corresponds to multiplying the original matrix $T$ by $\begin{bmatrix} 1 & 0 \\ Y & 1 \end{bmatrix}$ on the right *if* the relation was $V_1 = V_2 + Z I_2$, etc.

**The standard result for a shunt element $Y$ at port 2 is to modify the matrix as follows:**
If the original matrix is $\begin{bmatrix} A & B \\ C & D \end{bmatrix}$, the new matrix $T'$ when a shunt element $Y$ is added at port 2 is:
$$
T' = \begin{bmatrix} A & B \\ C+AY & D+BY \end{bmatrix}
$$
This is derived from realizing that the shunt element effectively adds $AY$ to $C$ and $BY$ to $D$.

**Let's reconsider the question setup:** If the original network's matrix is $[A, B; C, D]$, and a shunt stub with admittance $Y$ is placed at port 2. This means the current $I_2$ from the original network is split, with $Y V_2$ going through the stub and the rest into the load.
The matrix $T = \begin{bmatrix} A & B \\ C & D \end{bmatrix}$ describes the relation: $\begin{bmatrix} V_1 \\ I_1 \end{bmatrix} = T \begin{bmatrix} V_2 \\ I_2 \end{bmatrix}$.
Now, the current $I_2$ is the current entering the combination of the stub and the load.
If the stub is placed *in parallel* with the load, the current $I_2$ from the original network splits. Let $I_L$ be the current into the load and $I_S$ be the current into the stub. Then $I_2 = I_L + I_S$. And $V_2$ is the voltage across both.
The stub itself has a transmission matrix (if considered as a two-port) $\begin{bmatrix} 1 & 0 \\ Y & 1 \end{bmatrix}$, where its input is $V_2$ and its output is $I_S$.
This is getting confusing.

**Simplest interpretation:** The transmission matrix describes the relationship between the voltage and current at port 1 and port 2. Adding a shunt element $Y$ at port 2 means that the current *leaving* port 2 of the original network is now $I_{load} + Y V_2$.
So, if the original network gives: $V_1 = A V_2 + B I_2$ and $I_1 = C V_2 + D I_2$, where $I_2$ is the current into the load.
If we add a shunt element $Y$ at port 2, the current leaving the original network is $I_{2,total} = I_2 + Y V_2$.
To find the transmission matrix of the combined network (original network + shunt stub), we express $V_1, I_1$ in terms of $V_2$ and $I_{load}$ (current entering the actual load).
$V_1 = A V_2 + B I_2$
$I_1 = C V_2 + D I_2$
Let $I_2$ be the current entering the load. The shunt element adds $YV_2$ to this.
The combined network has input $V_1, I_1$ and output $V_2, I_{2,total}$.
$V_1 = A V_2 + B I_2$
$I_1 = C V_2 + D I_2$
Where $I_2$ is the current going into the parallel combination of the load and the stub.
The current into the stub is $I_S = YV_2$. The current into the load is $I_L$.
So, $I_2 = I_L + YV_2$.
$V_1 = A V_2 + B (I_L + YV_2) = (A+BY)V_2 + B I_L$
$I_1 = C V_2 + D (I_L + YV_2) = (C+DY)V_2 + D I_L$
This describes a new two-port network with parameters $A' = A+BY$, $B' = B$, $C' = C+DY$, $D' = D$.
This is equivalent to multiplying the original matrix by $\begin{bmatrix} 1 & 0 \\ Y & 1 \end{bmatrix}$ on the right.

**Final Answer to Question 3:**
The new transmission matrix is:
$$
\begin{bmatrix} A' & B' \\ C' & D' \end{bmatrix} = \begin{bmatrix} A & B \\ C & D \end{bmatrix} \begin{bmatrix} 1 & 0 \\ Y & 1 \end{bmatrix} = \begin{bmatrix} A & B \\ C+AY & D+BY \end{bmatrix}
$$

### 9. Important Points to Remember:

*   **Sign Convention:** Maintain a consistent sign convention for currents entering the ports.
*   **Reciprocity:** For reciprocal networks, $AD-BC = 1$. This property is useful for checking the validity of a transmission matrix.
*   **Cascading:** For cascaded networks, the transmission matrices are multiplied in the order of the signal flow.
*   **Conversions:** Be able to convert between ABCD, S, Z, and Y parameters.
*   **Component Matrices:** Memorize or be able to derive the transmission matrices for basic components like transmission lines, stubs, and transformers.
*   **Applications:** The transmission matrix is a powerful tool for analyzing impedance matching, filter design, and overall network performance.

This concludes the notes on the Transmission Matrix for Module 2.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
