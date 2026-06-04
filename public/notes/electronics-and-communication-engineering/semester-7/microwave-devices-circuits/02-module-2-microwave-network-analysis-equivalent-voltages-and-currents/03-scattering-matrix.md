---
title: "Scattering matrix"
subject: "MICROWAVE DEVICES & CIRCUITS"
module: "Module 2: Microwave Network Analysis – Equivalent voltages and currents"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff494"
status: "completed"
scrapedAt: "2026-05-23T18:07:48.547Z"
---
# MICROWAVE DEVICES & CIRCUITS

## Module 2: Microwave Network Analysis – Equivalent Voltages and Currents

### Topic: Scattering Matrix (S-Matrix)

---

### 1. Introduction to Microwave Network Analysis

Microwave networks, unlike lower-frequency circuits, are typically characterized by their behavior at the ports in terms of incident and reflected waves. This is primarily due to the difficulty of directly measuring voltages and currents at microwave frequencies without significantly affecting the circuit's behavior. The **Scattering Matrix (S-Matrix)** provides a convenient and powerful way to describe the linear behavior of microwave networks.

*   **Why S-Matrix?**
    *   At microwave frequencies, it's challenging to define and measure "open" and "short" circuit conditions at ports without introducing significant parasitic effects.
    *   The impedance of the transmission lines connected to the ports is usually well-defined and constant (e.g., 50 ohms), making it easier to work with wave parameters.
    *   The S-matrix directly relates the incident and reflected waves at the ports, which are measurable quantities.

*   **Reference Textbooks:**
    *   Pozar, "Microwave Engineering," 4/e, Chapter 4.
    *   Collin, "Foundations of Microwave Engineering," 2/e, Chapter 5.
    *   Liao, "Microwave Devices & Circuits," 3/e, Chapter 2.

---

### 2. Definition of Scattering Parameters (S-Parameters)

For an N-port microwave network, the S-matrix relates the **incident waves** at each port to the **reflected waves** at each port.

Let:
*   $a_i$ be the incident voltage wave at port $i$.
*   $b_i$ be the reflected voltage wave at port $i$.

These waves are normalized such that their powers are proportional to the square of their magnitudes:
$P_{in, i} \propto |a_i|^2$
$P_{out, i} \propto |b_i|^2$

The relationship between the reflected waves ($b_i$) and the incident waves ($a_j$) can be expressed in matrix form as:

$$
\mathbf{b} = \mathbf{S} \mathbf{a}
$$

where:
*   $\mathbf{b}$ is the column vector of reflected waves: $\begin{bmatrix} b_1 \\ b_2 \\ \vdots \\ b_N \end{bmatrix}$
*   $\mathbf{a}$ is the column vector of incident waves: $\begin{bmatrix} a_1 \\ a_2 \\ \vdots \\ a_N \end{bmatrix}$
*   $\mathbf{S}$ is the N x N scattering matrix:
    $$
    \mathbf{S} = \begin{bmatrix}
    S_{11} & S_{12} & \cdots & S_{1N} \\
    S_{21} & S_{22} & \cdots & S_{2N} \\
    \vdots & \vdots & \ddots & \vdots \\
    S_{N1} & S_{N2} & \cdots & S_{NN}
    \end{bmatrix}
    $$

The individual scattering parameters $S_{ij}$ are defined as:

$$
S_{ij} = \frac{b_i}{a_j} \quad \text{when all other incident waves } a_k = 0 \text{ for } k \neq j
$$

**Interpretation of $S_{ij}$:**

*   **$S_{ij}$ (for $i \neq j$):** Represents the **reverse transmission** coefficient from port $j$ to port $i$ when port $i$ is terminated with the characteristic impedance ($Z_0$).
    *   This measures how much of the wave incident at port $j$ is transmitted to port $i$.
*   **$S_{ii}$:** Represents the **reflection** coefficient at port $i$ when port $i$ is terminated with the characteristic impedance ($Z_0$), and all other ports ($j \neq i$) are also terminated with $Z_0$.
    *   This measures how much of the wave incident at port $i$ is reflected back to port $i$.

*   **Key Concept:** The condition "$a_k = 0$ for $k \neq j$" means that port $k$ is terminated in the characteristic impedance $Z_0$. This is a crucial assumption for the definition of S-parameters.

*   **Reference Textbooks:** Pozar, Chapter 4; Collin, Chapter 5.

---

### 3. Properties of the Scattering Matrix

The S-matrix possesses several important properties that are derived from the physical characteristics of microwave networks.

#### 3.1. Reciprocity

A network is **reciprocal** if the transmission from port $j$ to port $i$ is the same as the transmission from port $i$ to port $j$, when all ports are terminated in $Z_0$.

For a reciprocal network:
$$
S_{ij} = S_{ji} \quad \text{for all } i, j
$$

*   **Physical Implication:** Most passive microwave devices (e.g., resistors, capacitors, inductors, transmission lines, filters, couplers) are reciprocal. Active devices (e.g., transistors) are generally non-reciprocal.

#### 3.2. Unitarity

For a **lossless** network, the S-matrix is **unitary**. This property relates to the conservation of power.

The unitarity condition is expressed as:
$$
\mathbf{S}^{\dagger} \mathbf{S} = \mathbf{I}
$$
and
$$
\mathbf{S} \mathbf{S}^{\dagger} = \mathbf{I}
$$
where:
*   $\mathbf{S}^{\dagger}$ is the conjugate transpose of $\mathbf{S}$ ($\mathbf{S}^{\dagger} = (\mathbf{S}^*)^T$).
*   $\mathbf{I}$ is the identity matrix.

*   **Physical Implication:** Unitarity signifies that the total power entering the network is equal to the total power leaving the network. No power is dissipated within the network.

*   **Example:** For a 2-port lossless network:
    $$
    \begin{bmatrix} S_{11}^* & S_{21}^* \\ S_{12}^* & S_{22}^* \end{bmatrix} \begin{bmatrix} S_{11} & S_{12} \\ S_{21} & S_{22} \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}
    $$
    This expands to:
    $|S_{11}|^2 + |S_{21}|^2 = 1$ (Power conservation at port 1 incident wave)
    $|S_{12}|^2 + |S_{22}|^2 = 1$ (Power conservation at port 2 incident wave)
    $S_{11}^* S_{12} + S_{21}^* S_{22} = 0$

#### 3.3. Symmetry

A network is **symmetric** if all its ports are identical in terms of their interaction with the outside world.

For a symmetric network:
$$
S_{ij} = S_{ji} \quad \text{and} \quad S_{ii} = S_{jj} \quad \text{for all } i, j
$$

*   **Physical Implication:** This is often seen in devices like symmetrical couplers or reciprocal networks where ports are interchangeable.

#### 3.4. Absence of Internal Sources

If a network does not contain any active internal sources (i.e., it's a passive network), then:

*   If reciprocal, $S_{ij} = S_{ji}$.
*   If lossless, it's unitary.
*   If passive but lossy, $|S_{ii}| \leq 1$ and $|S_{ij}| \leq 1$ for $i \neq j$. Also, the sum of powers reflected and transmitted at each port is less than or equal to the incident power.

#### 3.5. Zero Transmission (Isolation)

If port $i$ is perfectly isolated from port $j$, it means no wave incident at port $j$ reaches port $i$.

$$
S_{ij} = 0 \quad \text{for } i \neq j
$$

*   **Physical Implication:** This is a desirable property for components like isolators or when designing networks where certain ports should not interact.

*   **Reference Textbooks:** Pozar, Chapter 4; Collin, Chapter 5.

---

### 4. Examples of Scattering Matrices for Basic Microwave Devices

Let's analyze the S-matrices for common 2-port devices. We assume the ports are terminated in the characteristic impedance $Z_0$.

#### 4.1. Ideal Transmission Line

An ideal transmission line of length $l$ and propagation constant $\gamma = \alpha + j\beta$ is a reciprocal and lossless device.

*   **$S_{11}$ (Reflection at Port 1):** If port 1 is terminated with $Z_0$, and port 2 is terminated with $Z_0$, then there is no reflection at port 1. $S_{11} = 0$.
*   **$S_{22}$ (Reflection at Port 2):** Similarly, $S_{22} = 0$.
*   **$S_{12}$ (Transmission from Port 2 to Port 1):** A wave incident at port 2 travels a distance $l$ through the line. The propagation factor is $e^{-\gamma l}$. So, $S_{12} = e^{-\gamma l}$.
*   **$S_{21}$ (Transmission from Port 1 to Port 2):** A wave incident at port 1 travels a distance $l$ through the line. The propagation factor is $e^{-\gamma l}$. So, $S_{21} = e^{-\gamma l}$.

Thus, for an ideal transmission line:
$$
\mathbf{S} = \begin{bmatrix}
0 & e^{-\gamma l} \\
e^{-\gamma l} & 0
\end{bmatrix}
$$
This matrix is reciprocal ($S_{12} = S_{21}$) and unitary (since $|e^{-\gamma l}|^2 = e^{-2\alpha l}$, which is 1 for a lossless line where $\alpha = 0$).

#### 4.2. Ideal Short-Circuit Termination

If port 2 of a 2-port network is terminated with a short circuit, and port 1 is terminated with $Z_0$, the reflected wave at port 2 is equal in magnitude and opposite in phase to the incident wave: $b_2 = -a_2$.

*   Let's consider a general 2-port network characterized by $\mathbf{S}$.
*   When port 2 is short-circuited, $b_2 = -a_2$.
*   From the S-matrix definition:
    $b_1 = S_{11}a_1 + S_{12}a_2$
    $b_2 = S_{21}a_1 + S_{22}a_2$
*   Substitute $b_2 = -a_2$ into the second equation:
    $-a_2 = S_{21}a_1 + S_{22}a_2$
    $a_2(S_{22} + 1) = -S_{21}a_1$
    $a_2 = -\frac{S_{21}}{S_{22} + 1} a_1$

*   Now substitute this $a_2$ back into the equation for $b_1$:
    $b_1 = S_{11}a_1 + S_{12} \left( -\frac{S_{21}}{S_{22} + 1} a_1 \right)$
    $b_1 = \left( S_{11} - \frac{S_{12}S_{21}}{S_{22} + 1} \right) a_1$

The reflection coefficient at port 1 when port 2 is short-circuited is $\Gamma_{1,SC} = \frac{b_1}{a_1}$:
$$
\Gamma_{1,SC} = S_{11} - \frac{S_{12}S_{21}}{S_{22} + 1}
$$

*   **This is a crucial identity relating S-parameters to reflection coefficients under different terminations.**

#### 4.3. Ideal Matched Termination

If all ports are terminated with $Z_0$, all incident waves are zero.

*   **$S_{11}$ (Reflection at Port 1):** If $a_1$ is incident and all other $a_j = 0$, then $b_1 = S_{11}a_1$. The reflection coefficient at port 1 is $\Gamma_{1} = b_1/a_1 = S_{11}$.
*   **$S_{21}$ (Transmission from Port 1 to Port 2):** If $a_1$ is incident and all other $a_j = 0$, then $b_2 = S_{21}a_1$. The transmission coefficient from 1 to 2 is $T_{12} = b_2/a_1 = S_{21}$.

So, $S_{11}$ is the reflection coefficient at port 1 when all ports are matched, and $S_{ij}$ (for $i \neq j$) is the transmission coefficient from port $j$ to port $i$ when all ports are matched.

#### 4.4. Ideal Circulator (3-port)

A 3-port circulator is a reciprocal (if non-magnetic) or non-reciprocal (if magnetic) device that directs signals from one port to the next in a sequential manner. A common non-reciprocal circulator routes signals from port 1 to 2, port 2 to 3, and port 3 to 1.

Assume perfect isolation between non-adjacent ports and perfect transmission between adjacent ports.
*   Port 1 incident ($a_1$): Reflected at port 1 ($S_{11}$), transmitted to port 2 ($S_{21}$), no transmission to port 3 ($S_{31}=0$).
*   Port 2 incident ($a_2$): Transmitted to port 3 ($S_{32}$), no transmission to port 1 ($S_{12}=0$), reflected at port 2 ($S_{22}$).
*   Port 3 incident ($a_3$): Transmitted to port 1 ($S_{13}$), no transmission to port 2 ($S_{23}=0$), reflected at port 3 ($S_{33}$).

For an ideal non-reciprocal circulator:
$$
\mathbf{S} = \begin{bmatrix}
0 & 0 & 1 \\
1 & 0 & 0 \\
0 & 1 & 0
\end{bmatrix}
$$
Here, $S_{11}=S_{22}=S_{33}=0$ (perfectly matched ports) and $S_{12}=S_{23}=S_{31}=1$ (perfect transmission). $S_{13}=S_{21}=S_{32}=0$ (perfect isolation).

*   **Important:** This device is **non-reciprocal** ($S_{12}=1$ but $S_{21}=0$).

#### 4.5. Ideal Isolator (2-port)

An isolator is a non-reciprocal device that allows signal transmission in one direction but attenuates it in the reverse direction.

*   **Forward direction (Port 1 to Port 2):** Near-perfect transmission. $S_{21} \approx 1$.
*   **Reverse direction (Port 2 to Port 1):** High attenuation. $S_{12} \approx 0$ (or a very small number indicating loss).
*   **Reflections:** Ideally, ports are matched. $S_{11} = 0$, $S_{22} = 0$.

For an ideal isolator:
$$
\mathbf{S} = \begin{bmatrix}
0 & \epsilon \\
1 & 0
\end{bmatrix}
$$
where $\epsilon$ is a very small number representing attenuation in the reverse direction.

*   **Reference Textbooks:** Pozar, Chapter 4; Collin, Chapter 5; Liao, Chapter 2.
*   **Reference Books:** Konishi, Chapter 1 (on MIC components like circulators and isolators).

---

### 5. S-Parameters and Power Relations

S-parameters are directly related to the power flowing into and out of the network.

*   **Incident Power at port $i$:** $P_{in,i} = |a_i|^2$ (assuming $Z_0$ is real, the impedance of the source).
*   **Reflected Power at port $i$:** $P_{out,i} = |b_i|^2$ (assuming $Z_0$ is real, the impedance of the load).

From $\mathbf{b} = \mathbf{S} \mathbf{a}$, we have:
$b_i = \sum_{j=1}^N S_{ij} a_j$

So, the reflected power at port $i$ is:
$P_{out,i} = |b_i|^2 = |\sum_{j=1}^N S_{ij} a_j|^2$

The total output power from the network is $\sum_{i=1}^N P_{out,i} = \sum_{i=1}^N |b_i|^2$.
The total input power to the network is $\sum_{j=1}^N P_{in,j} = \sum_{j=1}^N |a_j|^2$.

For a **lossless** network (unitarity):
$$
\sum_{i=1}^N |a_i|^2 = \sum_{i=1}^N |b_i|^2
$$
Total input power = Total output power.

For a **passive, lossy** network:
$$
\sum_{i=1}^N |b_i|^2 \leq \sum_{i=1}^N |a_i|^2
$$
Total output power $\leq$ Total input power. The difference is dissipated as heat.

**Transducer Power Gain ($G_T$) for a 2-port network:**
The transducer power gain is defined as the ratio of power delivered to the load (at port 2) to the power available from the source (at port 1).

Let:
*   $P_{L2} = |b_2|^2$ be the power delivered to the load at port 2.
*   $P_{av1} = \frac{|V_{s}|^2}{4R_s}$ be the power available from the source connected to port 1. (Assuming source impedance $Z_s = R_s + jX_s$)
*   $a_1 = \frac{V_s}{2\sqrt{Z_0}}$ if $Z_0$ is real and matched to the source impedance $Z_s$. More generally, $a_1 = \frac{V_s}{\sqrt{Z_0(Z_s + Z_0^*)}} \frac{\sqrt{Z_s+Z_0^*}}{2}$ (complex definition of normalized waves).

A simpler definition of $G_T$ for a 2-port network, assuming the source is matched to port 1 ($Z_s = Z_0$) and the load is connected to port 2 ($Z_L$):
The incident wave at port 1 is $a_1 = \frac{V_s}{2\sqrt{Z_0}}$.
The reflected wave at port 1 is $b_1 = S_{11}a_1 + S_{12}a_2$.
The reflected wave at port 2 is $b_2 = S_{21}a_1 + S_{22}a_2$.

The load is $Z_L$. The reflection coefficient at port 2 is $\Gamma_L = \frac{Z_L - Z_0}{Z_L + Z_0}$.
The relationship between incident ($a_2$) and reflected ($b_2$) waves at port 2 is $b_2 = \Gamma_L a_2$.

We have $a_2 = S_{21}a_1 + S_{22}a_2'$, where $a_2'$ is the wave incident from the load. No, this is wrong.
We have $b_2 = S_{21}a_1 + S_{22}a_2$. The wave incident from the load is $a_2$, and it produces the reflected wave $b_2$. So, $b_2 = \Gamma_L a_2$.
Therefore, $S_{21}a_1 + S_{22}a_2 = \Gamma_L a_2$.
$S_{21}a_1 = a_2( \Gamma_L - S_{22} )$.
$a_2 = \frac{S_{21}a_1}{\Gamma_L - S_{22}}$.

The power delivered to the load is $P_{L2} = |a_2|^2 (1 - |\Gamma_L|^2)$.
If $Z_0$ is real, $P_{av1} = |a_1|^2$.
$G_T = \frac{P_{L2}}{P_{av1}} = \frac{|a_2|^2 (1 - |\Gamma_L|^2)}{|a_1|^2} = \left|\frac{S_{21}}{\Gamma_L - S_{22}}\right|^2 (1 - |\Gamma_L|^2)$.

This is one form of transducer gain. Another important gain is **Power Gain ($G_P$)** where the load $Z_L$ is matched to $Z_0$ ($\Gamma_L = 0$).
In this case, $a_2 = \frac{S_{21}a_1}{-S_{22}}$. This is incorrect. If $\Gamma_L = 0$, then $b_2 = 0$.
$S_{21}a_1 + S_{22}a_2 = 0 \implies a_2 = -\frac{S_{21}}{S_{22}} a_1$.
$P_{L2} = |a_2|^2$. Assuming $Z_0$ is real, $P_{av1} = |a_1|^2$.
$G_P = \frac{|a_2|^2}{|a_1|^2} = \left|-\frac{S_{21}}{S_{22}}\right|^2 = \left|\frac{S_{21}}{S_{22}}\right|^2$.

For an amplifier with a matched load and source, the **available power gain** is:
$G_{AV} = \frac{|S_{21}|^2}{1 - |S_{11}|^2}$ (when port 2 is matched and port 1 has a source impedance $Z_0$).
The **transducer power gain** $G_T$ is:
$G_T = \frac{|S_{21}|^2}{(1-|S_{11}|^2)(1-|\Gamma_{in}|^2)}$, where $\Gamma_{in}$ is the input reflection coefficient when port 2 is terminated with $Z_L$.

*   **Reference Textbooks:** Pozar, Chapter 8 (Amplifier Design, gains).

---

### 6. Signal Flow Graphs and S-Parameters

Signal flow graphs (SFGs) are a powerful tool for visualizing and analyzing the signal paths within a network and can be used to derive the overall S-parameters or to calculate gains and reflection coefficients. This directly addresses **CO2: Analyse Microwave Networks using signal flow graphs**.

*   **How to construct an SFG from S-parameters:**
    1.  Represent each port as a node.
    2.  The relationship $b_i = \sum_j S_{ij} a_j$ represents a node "outputting" a signal proportional to the sum of "inputs" weighted by $S_{ij}$.
    3.  We can think of $a_j$ as an input signal to port $j$.
    4.  $b_i$ is the output signal from port $i$.
    5.  The $S_{ij}$ terms are the gains of the branches connecting the incident waves to the reflected waves.

*   **Example: 2-port network SFG**
    *   Nodes: $a_1, b_1, a_2, b_2$.
    *   Branch from $a_1$ to $b_1$ with gain $S_{11}$.
    *   Branch from $a_2$ to $b_1$ with gain $S_{12}$.
    *   Branch from $a_1$ to $b_2$ with gain $S_{21}$.
    *   Branch from $a_2$ to $b_2$ with gain $S_{22}$.

    The equations are:
    $b_1 = S_{11}a_1 + S_{12}a_2$
    $b_2 = S_{21}a_1 + S_{22}a_2$

    This basic SFG doesn't explicitly show the feedback loops due to reflections. A more useful SFG explicitly shows the interconnections between incident and reflected waves at the ports themselves and any external terminations.

*   **SFG for reflection coefficient calculation (e.g., $\Gamma_{1,SC}$):**
    Consider port 1 terminated with $Z_0$ (so $a_1$ is the incident wave and $b_1$ is the reflected wave, $\Gamma_1 = b_1/a_1 = S_{11}$).
    Now, consider port 2 terminated with a short circuit ($b_2 = -a_2$).
    The wave incident at port 2, $a_2$, originates from the reflection of $b_1$ back into port 2 (if $S_{12} \neq 0$) or from $a_1$ through transmission ($S_{21}$) and then reflection at port 2 ($S_{22}$), etc.

    A more detailed SFG for a 2-port network with an external load $\Gamma_L$ at port 2:
    *   Nodes: $a_1, b_1, a_2, b_2$.
    *   The input $a_1$ is an external signal.
    *   $b_1 = S_{11}a_1 + S_{12}a_2$.
    *   $b_2 = S_{21}a_1 + S_{22}a_2$.
    *   At port 2, the reflected wave $b_2$ is related to the incident wave $a_2$ by the load reflection coefficient: $b_2 = \Gamma_L a_2$. This means $a_2$ is proportional to $b_2$, with a proportionality constant of $1/\Gamma_L$ (if $\Gamma_L \neq 0$). So, $a_2 = \frac{1}{\Gamma_L} b_2$.

    The SFG becomes:
    *   Node $a_1$.
    *   Branch from $a_1$ to $b_1$ with gain $S_{11}$.
    *   Branch from $a_2$ to $b_1$ with gain $S_{12}$.
    *   Branch from $a_1$ to $b_2$ with gain $S_{21}$.
    *   Branch from $a_2$ to $b_2$ with gain $S_{22}$.
    *   Branch from $b_2$ back to $a_2$ with gain $\Gamma_L$. (This creates a feedback loop representing the load).

    This SFG can be simplified using Mason's Gain Formula.
    *   Forward path from $a_1$ to $b_1$ (which is the input reflection coefficient $\Gamma_{in}$):
        $a_1 \rightarrow b_1$ directly is $S_{11}$.
        $a_1 \rightarrow b_2 \rightarrow a_2 \rightarrow b_1$. The path gain is $S_{21} \cdot \Gamma_L \cdot S_{12}$.
    *   Therefore, $\Gamma_{in} = \frac{b_1}{a_1} = S_{11} + S_{12} \frac{S_{21} \Gamma_L}{1 - S_{22}\Gamma_L}$.

    This is another important identity. For example, if the load is a short circuit, $\Gamma_L = -1$.
    $\Gamma_{1,SC} = S_{11} + S_{12} \frac{S_{21}(-1)}{1 - S_{22}(-1)} = S_{11} - \frac{S_{12}S_{21}}{1 + S_{22}}$, which matches our previous result.

*   **Reference Textbooks:** Pozar, Chapter 4; Collin, Chapter 5; Liao, Chapter 2.
*   **Course Outcome Alignment:** Directly addresses CO2.

---

### 7. Application to Microwave Devices and Circuits

S-parameters are fundamental to characterizing and designing virtually all microwave devices and circuits.

#### 7.1. Amplifiers

*   **Gain:** $S_{21}$ represents the forward voltage gain when ports are matched.
*   **Stability:** $S_{11}$ and $S_{22}$ (input and output reflection coefficients under matched conditions) are used to determine input and output match. Stability factors like $K$ and $\Delta$ are derived from S-parameters.
*   **Design:** Matching networks are designed using S-parameters and Smith Charts to achieve desired gain and stability.

#### 7.2. Filters

*   **Transmission and Reflection:** $S_{21}$ describes the transmission through the filter (passband behavior), and $S_{11}$ describes reflections in the passband. $S_{12}$ and $S_{22}$ describe behavior in the reverse direction (for reciprocal filters, $S_{12}=S_{21}$).
*   **Design:** The filter's desired frequency response is translated into target S-parameter values, which are then used for synthesis.

#### 7.3. Couplers and Power Dividers

*   **Coupling:** $S_{31}$ (for a 4-port coupler) indicates the coupling factor from port 1 to port 3.
*   **Isolation:** $S_{12}, S_{14}, S_{23}, S_{34}$ indicate isolation between ports.
*   **Amplitude and Phase Balance:** $S_{21}$ and $S_{31}$ (for power dividers) are analyzed for magnitude and phase differences between output ports.

#### 7.4. Oscillators

*   While S-parameters describe linear behavior, they are used in oscillator design to define the characteristics of the feedback network and the active device (transistor) at the oscillation frequency. The loop gain must be unity and the phase shift 0 (or $360^\circ$) for oscillation.

#### 7.5. Monolithic Microwave Integrated Circuits (MMICs)

*   **Standard Characterization:** S-parameters are the standard way to characterize MMIC components and systems. Designers receive S-parameter files (.s2p, .s3p, etc.) for active devices (transistors) and passive components.
*   **System Design:** S-parameters are used in simulation software (like ADS, Microwave Office) to model the behavior of entire MMICs and predict performance.

*   **Reference Textbooks:** All textbooks have dedicated chapters on applications. Pozar, Chapters 7-11; Collin, Chapters 6-9; Liao, Chapters 2-7.
*   **Course Outcome Alignment:** This section directly supports CO1 (basic principles of devices), CO2 (analysis), CO3 (filter design), and CO4 (MIC concepts through standard characterization).

---

### 8. Important Points to Remember

*   **Definition:** S-parameters relate incident and reflected voltage waves at ports terminated in the characteristic impedance ($Z_0$).
*   **Measurability:** They are directly measurable quantities at microwave frequencies.
*   **Lossless Networks:** Are unitary ($\mathbf{S}^{\dagger} \mathbf{S} = \mathbf{I}$). This means power is conserved.
*   **Reciprocal Networks:** Have symmetric S-matrices ($S_{ij} = S_{ji}$).
*   **Reflection Coefficient:** $S_{ii}$ is the reflection coefficient at port $i$ when all other ports are matched.
*   **Transmission Coefficient:** $S_{ij}$ ($i \neq j$) is the transmission coefficient from port $j$ to port $i$ when all other ports are matched.
*   **SFGs:** Provide a graphical method to analyze networks and derive complex S-parameter relationships.
*   **Applications:** S-parameters are the universal language for describing microwave device behavior and are essential for design and simulation.
*   **Non-reciprocal Devices:** Examples include circulators and isolators, which have asymmetric S-matrices.

---

### 9. Practice Questions and Answers

**Q1.** Define scattering parameters $S_{ij}$ for a general N-port network.
**Answer:** $S_{ij} = \frac{b_i}{a_j} \quad \text{when all other incident waves } a_k = 0 \text{ for } k \neq j$. Here, $a_j$ is the incident voltage wave at port $j$ and $b_i$ is the reflected voltage wave at port $i$, normalized to have power proportional to $|a_j|^2$ and $|b_i|^2$ respectively, with all ports terminated in the characteristic impedance $Z_0$.

**Q2.** What is the condition for a 2-port network to be lossless?
**Answer:** A 2-port network is lossless if its scattering matrix is unitary, i.e., $\mathbf{S}^{\dagger} \mathbf{S} = \mathbf{I}$. For a 2-port network, this expands to:
$|S_{11}|^2 + |S_{21}|^2 = 1$
$|S_{12}|^2 + |S_{22}|^2 = 1$
$S_{11}^* S_{12} + S_{21}^* S_{22} = 0$
$S_{12}^* S_{11} + S_{22}^* S_{21} = 0$

**Q3.** For a reciprocal network, what property does its S-matrix possess?
**Answer:** For a reciprocal network, its S-matrix is symmetric, meaning $S_{ij} = S_{ji}$ for all $i, j$.

**Q4.** An ideal transmission line of length $l$ has a propagation constant $\gamma = j\beta$ (lossless). What is its 2-port S-matrix?
**Answer:**
$$
\mathbf{S} = \begin{bmatrix}
0 & e^{-j\beta l} \\
e^{-j\beta l} & 0
\end{bmatrix}
$$

**Q5.** A 2-port network has the following S-parameters:
$$
\mathbf{S} = \begin{bmatrix}
0.1 & 0.8 \\
0.8 & 0.1
\end{bmatrix}
$$
Is this network reciprocal? Is it lossless?
**Answer:**
*   **Reciprocal:** Yes, because $S_{12} = S_{21} = 0.8$.
*   **Lossless:** Let's check unitarity:
    $|S_{11}|^2 + |S_{21}|^2 = |0.1|^2 + |0.8|^2 = 0.01 + 0.64 = 0.65 \neq 1$.
    Since the first condition of unitarity is not met, the network is **lossy**, not lossless.

**Q6.** Using signal flow graphs, derive the input reflection coefficient $\Gamma_{in}$ for a 2-port network terminated with a load $\Gamma_L$ at port 2, assuming the source is matched to port 1 ($a_1$ is the incident wave from the source).
**Answer:**
The system can be represented by the equations:
$b_1 = S_{11}a_1 + S_{12}a_2$
$b_2 = S_{21}a_1 + S_{22}a_2$
And the load condition at port 2: $b_2 = \Gamma_L a_2$, which implies $a_2 = \frac{b_2}{\Gamma_L}$.

The signal flow graph has nodes $a_1, b_1, a_2, b_2$.
Branches:
*   $a_1 \rightarrow b_1$ with gain $S_{11}$.
*   $a_2 \rightarrow b_1$ with gain $S_{12}$.
*   $a_1 \rightarrow b_2$ with gain $S_{21}$.
*   $a_2 \rightarrow b_2$ with gain $S_{22}$.
*   Feedback from $b_2$ to $a_2$ with gain $\Gamma_L$.

We want to find $\Gamma_{in} = b_1/a_1$.
Paths from $a_1$ to $b_1$:
1.  Direct path: $a_1 \rightarrow b_1$ with gain $S_{11}$.
2.  Looping path: $a_1 \rightarrow b_2 \rightarrow a_2 \rightarrow b_1$. The gain is $S_{21} \cdot \Gamma_L \cdot S_{12}$.

Using Mason's Gain Formula (or simple inspection for this case):
$\Gamma_{in} = \frac{b_1}{a_1} = S_{11} + S_{12} \cdot \Gamma_L \cdot S_{21}$. (This is the gain from $a_1$ to $b_1$ through the path that involves the feedback loop.)

Wait, the relation between $a_2$ and $b_2$ is $b_2 = \Gamma_L a_2$. So the connection is $a_2 \leftarrow b_2$ with gain $\Gamma_L$. This is incorrect. It should be $b_2$ to $a_2$.
The actual feedback loop is $a_1 \rightarrow b_2 \rightarrow a_2 \rightarrow b_1$.
The direct signal path from $a_1$ to $b_1$ is $S_{11}$.
The signal $a_1$ also goes to $b_2$ with gain $S_{21}$. This $b_2$ is then related to $a_2$.
The correct feedback representation is: $b_2 = S_{21}a_1 + S_{22}a_2$. With the load, $b_2 = \Gamma_L a_2$.
So, $S_{21}a_1 + S_{22}a_2 = \Gamma_L a_2 \implies S_{21}a_1 = a_2(\Gamma_L - S_{22}) \implies a_2 = \frac{S_{21}a_1}{\Gamma_L - S_{22}}$.
Now, substitute this $a_2$ into the equation for $b_1$:
$b_1 = S_{11}a_1 + S_{12} \left( \frac{S_{21}a_1}{\Gamma_L - S_{22}} \right)$
$b_1 = \left( S_{11} + \frac{S_{12}S_{21}}{\Gamma_L - S_{22}} \right) a_1$.
Therefore, $\Gamma_{in} = \frac{b_1}{a_1} = S_{11} + \frac{S_{12}S_{21}}{\Gamma_L - S_{22}}$.

This is the correct derivation using algebraic manipulation of the S-matrix equations.

**Q7.** What is the physical significance of $|S_{11}|^2$ for a 2-port network?
**Answer:** $|S_{11}|^2$ represents the ratio of the power reflected back to port 1 to the power incident at port 1, when port 1 is terminated with the characteristic impedance ($Z_0$) and port 2 is also terminated with the characteristic impedance ($Z_0$). It is the power reflection coefficient at port 1 under matched conditions.

---

### 10. Course Outcome Alignment Review

*   **CO1: Describe the basic principles of Microwave solid state diodes, transistors, generators and amplifiers.**
    *   S-parameters are the fundamental parameters used to describe the linear behavior of transistors and other active devices in amplifiers and generators. Understanding S-parameters is crucial for describing how these devices operate in microwave circuits. (Implicitly covered through applications).
*   **CO2: Analyse Microwave Networks using signal flow graphs.**
    *   Section 4 covers SFGs, showing how they are constructed from S-parameters and used to derive network characteristics like reflection coefficients.
*   **CO3: Design microwave filters by different methods.**
    *   Section 7.2 mentions that S-parameters are used to define target responses for filters and are essential for synthesis.
*   **CO4: Illustrate the basic concepts of Monolithic Integrated Circuits (MICs).**
    *   Section 7.5 explains that S-parameters are the standard way to characterize MMIC components and systems, directly aligning with this outcome.

---
This concludes the comprehensive study notes on the Scattering Matrix for Module 2.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
