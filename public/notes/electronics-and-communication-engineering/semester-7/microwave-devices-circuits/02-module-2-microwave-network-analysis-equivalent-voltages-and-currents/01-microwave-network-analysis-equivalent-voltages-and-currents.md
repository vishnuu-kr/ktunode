---
title: "Microwave Network Analysis – Equivalent voltages and currents"
subject: "MICROWAVE DEVICES & CIRCUITS"
module: "Module 2: Microwave Network Analysis – Equivalent voltages and currents"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff492"
status: "completed"
scrapedAt: "2026-05-23T18:07:46.862Z"
---
# MICROWAVE DEVICES & CIRCUITS - Module 2: Microwave Network Analysis – Equivalent Voltages and Currents

## 1. Introduction to Microwave Network Analysis

Microwave network analysis is crucial for understanding and designing microwave circuits. Unlike lower frequencies where lumped element models are sufficient, microwave circuits operate at frequencies where the physical dimensions of the components become comparable to the wavelength of the signals. This necessitates a different approach, focusing on distributed effects and wave propagation.

### 1.1 Why Traditional Circuit Analysis Fails at Microwave Frequencies

*   **Wavelength vs. Component Size:** At microwave frequencies (typically 1 GHz to 300 GHz), the wavelength ($\lambda$) can be in the order of centimeters or millimeters. Components like resistors, capacitors, and inductors, even if physically small, can present significant impedances due to their physical layout and parasitic effects (e.g., parasitic inductance in resistors, parasitic capacitance in inductors).
*   **Distributed Effects:** Signals propagate as waves along transmission lines, not instantaneously as in simple wires. Reflections, phase shifts, and impedance mismatches become critical.
*   **Parasitic Elements:** Even simple components exhibit unwanted parasitic inductance, capacitance, and resistance due to their physical construction and proximity to other components or ground planes. These parasitics significantly alter the circuit's behavior at microwave frequencies.
*   **Skin Effect:** At high frequencies, current tends to flow on the surface of conductors, increasing the effective resistance.

### 1.2 Concept of Microwave Networks

A microwave network is a system comprised of interconnected microwave components, typically realized on transmission lines or waveguides. These networks can be active (containing sources and amplifiers) or passive (resistors, capacitors, inductors, filters, antennas, etc.).

### 1.3 Learning Outcomes Alignment

This section lays the groundwork for understanding the need for advanced analysis techniques, directly contributing to **CO2: Analyze Microwave Networks using signal flow graphs** by explaining why traditional methods are insufficient.

## 2. Equivalent Voltages and Currents in Microwave Networks

At microwave frequencies, the concept of a single voltage or current at a component's terminals is not as straightforward as in low-frequency circuits. Instead, we consider **traveling waves** and their associated **equivalent voltages and currents**.

### 2.1 Traveling Waves

In a transmission line, signals propagate as electromagnetic waves. These waves can be represented by their voltage and current components. For a lossless transmission line, the voltage and current waves are related by the characteristic impedance ($Z_0$) of the line:

$V(z) = V^+ e^{-j\beta z} + V^- e^{+j\beta z}$
$I(z) = \frac{V^+}{Z_0} e^{-j\beta z} - \frac{V^-}{Z_0} e^{+j\beta z}$

Where:
*   $V(z)$ and $I(z)$ are the voltage and current at position $z$.
*   $V^+$ is the amplitude of the forward-traveling voltage wave.
*   $V^-$ is the amplitude of the backward-traveling voltage wave.
*   $\beta$ is the phase constant.
*   $Z_0$ is the characteristic impedance of the transmission line.

### 2.2 Equivalent Voltage and Current

The "equivalent" voltage and current at a port (a connection point to the network) are defined based on the amplitudes of these traveling waves. These definitions are chosen to be consistent with low-frequency circuit analysis when the wavelengths are much larger than the circuit dimensions.

**Definition based on power:**

A common and rigorous definition is based on the power delivered to a matched load. If a voltage source $V_s$ with internal impedance $Z_s$ is connected to a transmission line with characteristic impedance $Z_0$, the voltage at the input of the line is $V_{in}$ and the current is $I_{in}$.

If the transmission line is terminated with a matched load $Z_L = Z_0$, then the input impedance of the line is also $Z_0$. The voltage and current at the input are:

$V_{in} = V_s \frac{Z_0}{Z_s + Z_0}$
$I_{in} = \frac{V_{in}}{Z_0} = \frac{V_s}{Z_s + Z_0}$

The power delivered to the matched load is $P = |V_{in}|^2 / Z_0$.

For microwave network analysis, we define:

*   **Equivalent Voltage ($a_1$):** The amplitude of the forward-traveling voltage wave at the port. It is related to the power delivered to a matched load.
    $P_1 = |a_1|^2$
    Here, $a_1$ is defined such that the power delivered to a matched load ($Z_0$) connected to port 1 is $|a_1|^2$.

*   **Equivalent Current ($b_1$):** Similarly, the amplitude of the forward-traveling current wave.
    $P_1 = |b_1|^2 Z_0$

**Relationship between $a$ and $b$ waves and conventional voltage/current:**

Consider a port of a microwave device terminated by a matched load ($Z_0$).
The voltage wave entering the device is the forward wave $V^+$.
The voltage wave leaving the device and returning towards the source is the backward wave $V^-$.

If we define the equivalent voltage at the port as $V_{port}$ and equivalent current as $I_{port}$ flowing *into* the network:

$V_{port} = V^+ + V^-$
$I_{port} = \frac{V^+ - V^-}{Z_0}$

The amplitude of the forward-traveling voltage wave $V^+$ is directly related to our equivalent voltage "input" to the network, often denoted by $a$. Similarly, the amplitude of the backward-traveling voltage wave $V^-$ is related to the "reflected" wave, often denoted by $b$.

Therefore, we can define:
*   **Equivalent Voltage (input) at Port $k$: $a_k$** (Amplitude of forward voltage wave)
*   **Equivalent Voltage (output) at Port $k$: $b_k$** (Amplitude of backward voltage wave)

**Power relationship:**
The power delivered to a matched load at port $k$ is $|a_k|^2$.
The power reflected from port $k$ and traveling back is $|b_k|^2$.

### 2.3 Key Concepts and Definitions

*   **Port:** A terminal or set of terminals where energy enters or leaves a microwave network.
*   **Characteristic Impedance ($Z_0$):** The ratio of voltage to current for a traveling wave on a transmission line or waveguide. It is a real number for lossless lines and is typically 50 Ohms in microwave systems.
*   **Forward Wave:** The wave traveling from the source towards the network.
*   **Backward Wave:** The wave traveling from the network back towards the source, usually due to reflections.
*   **Incident Wave:** A wave traveling towards a port.
*   **Reflected Wave:** A wave traveling away from a port due to impedance mismatch.
*   **Matched Load:** A load impedance equal to the characteristic impedance of the transmission line ($Z_L = Z_0$). No reflection occurs.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 2.4 Textbooks and References

*   **Pozar (4/e), Chapter 2 (Two-Port Networks):** Pozar extensively discusses the concept of incident and reflected waves and their relation to voltage and current, leading into scattering parameters (S-parameters). He defines $a_k$ and $b_k$ as normalized quantities related to voltage waves.
*   **Collin (2/e), Chapter 3 (Transmission Line Theory):** Collin provides the fundamental equations for voltage and current on a transmission line with forward and backward waves, essential for understanding the basis of these definitions.
*   **Liao (3/e), Chapter 3 (Two-Port Networks):** Liao also introduces the concepts of incident and reflected waves and their significance in microwave network analysis.

## 3. Microwave Network Representation: Scattering Parameters (S-Parameters)

The most common method for analyzing microwave networks is using scattering parameters (S-parameters), which are defined in terms of these equivalent voltages and currents ($a_k$ and $b_k$).

### 3.1 Definition of S-Parameters

For an N-port network, the relationship between the incident waves ($a_k$) and the reflected waves ($b_k$) is given by:

$b_k = \sum_{l=1}^{N} S_{kl} a_l$

In matrix form:
$\begin{bmatrix} b_1 \\ b_2 \\ \vdots \\ b_N \end{bmatrix} = \begin{bmatrix} S_{11} & S_{12} & \cdots & S_{1N} \\ S_{21} & S_{22} & \cdots & S_{2N} \\ \vdots & \vdots & \ddots & \vdots \\ S_{N1} & S_{N2} & \cdots & S_{NN} \end{bmatrix} \begin{bmatrix} a_1 \\ a_2 \\ \vdots \\ a_N \end{bmatrix}$

Where $S_{kl}$ are the scattering parameters.

### 3.2 Physical Interpretation of S-Parameters

*   **$S_{kl}$:** Represents the ratio of the voltage wave emerging from port $k$ ($b_k$) to the voltage wave incident on port $l$ ($a_l$), *when all other ports ($m \neq l$) are terminated in matched loads* ($a_m = 0$ for $m \neq l$).

    $S_{kl} = \frac{b_k}{a_l} \quad \text{when } a_m = 0 \text{ for all } m \neq l$

*   **$S_{kk}$ (Reflection Coefficient):**
    $S_{kk} = \frac{b_k}{a_k} \quad \text{when } a_l = 0 \text{ for all } l \neq k$
    This is the complex reflection coefficient at port $k$ when all other ports are matched. It indicates how much of the incident wave at port $k$ is reflected back from port $k$.

*   **$S_{kl}$ for $k \neq l$ (Transmission Coefficient):**
    $S_{kl} = \frac{b_k}{a_l} \quad \text{when } a_m = 0 \text{ for all } m \neq l$
    This is the complex transmission coefficient from port $l$ to port $k$ when all other ports are matched. It indicates how much of the wave incident on port $l$ is transmitted to port $k$.

### 3.3 Properties of S-Parameters

*   **Units:** S-parameters are dimensionless ratios.
*   **Magnitude:** $|S_{kl}|$ represents the ratio of amplitudes.
*   **Phase:** The phase of $S_{kl}$ represents the phase shift introduced by the network.
*   **Power Transfer:** The power delivered to port $k$ from port $l$ is related to $|S_{kl}|^2$.

### 3.4 Normalization and Power

The $a_k$ and $b_k$ waves are typically defined such that the power flowing into port $k$ is $|a_k|^2$ and the power flowing out of port $k$ is $|b_k|^2$, assuming a characteristic impedance $Z_0$.

Power incident at port $k$: $P_{inc,k} = |a_k|^2$
Power reflected from port $k$: $P_{ref,k} = |b_k|^2$
Power transmitted from port $l$ to port $k$: $P_{trans, l \to k} = |S_{kl}|^2 |a_l|^2$

### 3.5 Examples of S-Parameters for Simple Networks

*   **Two-Port Networks (e.g., a Resistor, Capacitor, Inductor):**
    For a two-port network, the S-parameter matrix is:
    $\begin{bmatrix} b_1 \\ b_2 \end{bmatrix} = \begin{bmatrix} S_{11} & S_{12} \\ S_{21} & S_{22} \end{bmatrix} \begin{bmatrix} a_1 \\ a_2 \end{bmatrix}$

    *   **Matched Load:** If port 2 is matched ($a_2=0$), then $b_1 = S_{11} a_1$ and $b_2 = S_{21} a_1$.
        *   $S_{11} = b_1 / a_1$: Reflection coefficient at port 1.
        *   $S_{21} = b_2 / a_1$: Transmission coefficient from port 1 to port 2.
    *   **Matched Source:** If port 1 is matched ($a_1=0$), then $b_1 = S_{12} a_2$ and $b_2 = S_{22} a_2$.
        *   $S_{12} = b_1 / a_2$: Transmission coefficient from port 2 to port 1.
        *   $S_{22} = b_2 / a_2$: Reflection coefficient at port 2.

*   **Ideal Transformer:**
    For an ideal transformer with turns ratio $n:1$ (primary to secondary), if ports are defined appropriately, it can be shown that:
    $S_{11} = S_{22} = 0$ (no reflection when matched)
    $S_{12} = S_{21} = \frac{n^2-1}{n^2+1}$ (transmission depends on turns ratio)

    *(Note: Detailed derivation requires careful definition of ports and matching conditions.)*

*   **Ideal Short Circuit:**
    If port 1 is terminated with an ideal short circuit ($V=0$), the reflection coefficient is -1.
    $S_{11} = -1$

*   **Ideal Open Circuit:**
    If port 1 is terminated with an ideal open circuit ($I=0$), the reflection coefficient is +1.
    $S_{11} = +1$

### 3.6 Learning Outcomes Alignment

This section directly addresses **CO2: Analyze Microwave Networks using signal flow graphs** by introducing S-parameters, the fundamental parameters used in such analyses. The interpretation of $S_{kl}$ relates to signal flow. It also supports **CO1: Describe the basic principles of Microwave solid state diodes, transistors, generators and amplifiers** as these devices are characterized using S-parameters at microwave frequencies.

## 4. Signal Flow Graphs for Microwave Network Analysis

Signal flow graphs (SFGs) provide a powerful graphical method for analyzing microwave networks composed of interconnected components characterized by their S-parameters.

### 4.1 What is a Signal Flow Graph?

An SFG is a directed graph where:
*   **Nodes:** Represent the signals (e.g., incident waves $a_k$, reflected waves $b_k$).
*   **Branches:** Represent the transfer functions (e.g., S-parameters $S_{kl}$) between signals.

### 4.2 Constructing SFGs from S-Parameters

For a two-port network:
$\begin{bmatrix} b_1 \\ b_2 \end{bmatrix} = \begin{bmatrix} S_{11} & S_{12} \\ S_{21} & S_{22} \end{bmatrix} \begin{bmatrix} a_1 \\ a_2 \end{bmatrix}$

This translates to the following equations:
$b_1 = S_{11} a_1 + S_{12} a_2$
$b_2 = S_{21} a_1 + S_{22} a_2$

The SFG would have nodes representing $a_1, b_1, a_2, b_2$.
*   A branch from $a_1$ to $b_1$ with transmittance $S_{11}$.
*   A branch from $a_2$ to $b_1$ with transmittance $S_{12}$.
*   A branch from $a_1$ to $b_2$ with transmittance $S_{21}$.
*   A branch from $a_2$ to $b_2$ with transmittance $S_{22}$.

However, it's more common to represent networks where the output of one component is the input to another. For a two-port network connected in cascade:

Port 1 of Network 1 connected to Port 2 of Network 2.
Port 2 of Network 1 connected to Port 1 of Network 2.

If Network 1 is characterized by $[S^{(1)}]$ and Network 2 by $[S^{(2)}]$, we need to correctly link the $a$ and $b$ waves.

Consider a two-port device with S-parameters $S_{ij}$:
$b_1 = S_{11} a_1 + S_{12} a_2$
$b_2 = S_{21} a_1 + S_{22} a_2$

If port 2 is terminated by another two-port network (Network B) characterized by $S'_{ij}$ and port 1 of Network B is terminated by a matched load ($a'_1 = 0$), then:
$b'_1 = S'_{11} a'_1 + S'_{12} a'_2 = S'_{12} a'_2$ (since $a'_1 = 0$)
$b'_2 = S'_{21} a'_1 + S'_{22} a'_2 = S'_{22} a'_2$ (since $a'_1 = 0$)

The output of Network A at port 2 ($b_2$) becomes the input to Network B at port 1 ($a'_1$):
$a'_1 = b_2$

The output of Network B at port 2 ($b'_2$) becomes the input to Network A at port 1 ($a_2$):
$a_2 = b'_2$

Substituting these relationships into the equations for Network A:
$b_1 = S_{11} a_1 + S_{12} (S'_{22} a'_2)$
$b_2 = S_{21} a_1 + S_{22} a_2$  -> this $a_2$ should be $b'_2$ from Network B, but we made $a_2 = b'_2$, so this becomes $b_2 = S_{21} a_1 + S_{22} b'_2$.

The total reflected wave at port 1 of Network A is $b_1$. This includes the direct reflection from Network A ($S_{11} a_1$) and the reflection from Network B that propagates back through Network A ($S_{12} a_2 = S_{12} S'_{22} a'_2$). The $a_2$ here is actually the wave incident *into* Network A from Network B.

Let's re-evaluate with a clearer diagram.

Consider a single two-port device. We can draw the SFG like this:

*   **Node $a_1$**: Incident wave on port 1.
*   **Node $a_2$**: Incident wave on port 2.
*   **Node $b_1$**: Reflected wave from port 1.
*   **Node $b_2$**: Reflected wave from port 2.

Branches:
1.  $a_1 \xrightarrow{S_{11}} b_1$
2.  $a_2 \xrightarrow{S_{12}} b_1$
3.  $a_1 \xrightarrow{S_{21}} b_2$
4.  $a_2 \xrightarrow{S_{22}} b_2$

This is a direct representation. However, for complex systems, we often use SFGs to find the overall transfer function.

### 4.3 Mason's Gain Formula

Mason's gain formula is a systematic way to find the overall transfer function of a signal flow graph. For a graph with one source node and one sink node:

$G = \frac{\sum_{k} P_k \Delta_k}{1 - \sum_i L_i + \sum_{i,j} L_i L_j - \sum_{i,j,k} L_i L_j L_k + \dots}$

Where:
*   $P_k$: The transmittance of the $k$-th forward path from the source to the sink.
*   $\Delta$: The determinant of the graph, given by $\Delta = 1 - \sum_i L_i + \sum_{i,j} L_i L_j - \dots$, where $L_i$ are the transmittances of all fundamental forward loops.
*   $\Delta_k$: The determinant of the graph when the $k$-th forward path is removed (i.e., 1 minus the sum of loop transmittances that do not touch the $k$-th forward path).

### 4.4 Applications of SFGs in Microwave Networks

*   **Cascaded Networks:** Analyzing the overall S-parameters of multiple devices connected in series.
*   **Feedback Loops:** Analyzing the behavior of active devices with feedback.
*   **Oscillators and Amplifiers:** Designing and analyzing the stability and gain of these circuits.

### 4.5 Example: Two-Stage Amplifier

Consider two identical two-port amplifier stages, each with S-parameters $S_{11}, S_{12}, S_{21}, S_{22}$. Let the input be at port 1 of Stage 1, and the output be at port 2 of Stage 2. Port 2 of Stage 1 is connected to port 1 of Stage 2.

Let the S-parameters of Stage 1 be $[S^{(1)}]$ and Stage 2 be $[S^{(2)}]$.
The input to Stage 2 ($a^{(2)}_1$) is the output of Stage 1 ($b^{(1)}_2$).
The output of Stage 2 ($b^{(2)}_2$) is the overall output ($b_{out}$).
The input to Stage 1 ($a^{(1)}_1$) is the overall input ($a_{in}$).
The output of Stage 1 ($b^{(1)}_2$) is the input to Stage 2 ($a^{(2)}_1$).
The output of Stage 2 ($b^{(2)}_2$) is the overall output ($b_{out}$).

If port 2 of Stage 2 is terminated with a matched load ($a^{(2)}_2 = 0$):
$b^{(2)}_2 = S^{(2)}_{21} a^{(2)}_1$

The overall transfer function ($S_{21,total}$) is $b_{out} / a_{in} = b^{(2)}_2 / a^{(1)}_1$.
$b_{out} = S^{(2)}_{21} a^{(2)}_1 = S^{(2)}_{21} b^{(1)}_2 = S^{(2)}_{21} (S^{(1)}_{21} a^{(1)}_1)$
$S_{21,total} = S^{(2)}_{21} S^{(1)}_{21}$

This simple cascade shows how S-parameters multiply. SFGs help visualize and manage more complex interconnections.

**SFG for a single stage (input $a_1$, output $b_1$):**
Nodes: $a_1, b_1, a_2, b_2$.
$a_1 \xrightarrow{S_{11}} b_1$
$a_2 \xrightarrow{S_{12}} b_1$
$a_1 \xrightarrow{S_{21}} b_2$
$a_2 \xrightarrow{S_{22}} b_2$

For cascade:
$a_1 \xrightarrow{S^{(1)}_{11}} b_1$
$a_2^{(1)} \xrightarrow{S^{(1)}_{12}} b_1$
$a_1 \xrightarrow{S^{(1)}_{21}} b_2^{(1)}$
$a_2^{(1)} \xrightarrow{S^{(1)}_{22}} b_2^{(1)}$

$a_1^{(2)} \xrightarrow{S^{(2)}_{11}} b_1^{(2)}$
$a_2^{(2)} \xrightarrow{S^{(2)}_{12}} b_1^{(2)}$
$a_1^{(2)} \xrightarrow{S^{(2)}_{21}} b_2^{(2)}$
$a_2^{(2)} \xrightarrow{S^{(2)}_{22}} b_2^{(2)}$

Interconnections:
$a_2^{(1)} = b_2^{(1)}$ (This is incorrect if port 2 of stage 1 is connected to port 1 of stage 2)
Correct: $a_2^{(1)}$ is the input to stage 1 from outside. $b_2^{(1)}$ is the output of stage 1.
Let's define the interfaces correctly for cascade:
$a_{in} = a_1^{(1)}$
$b_{out} = b_2^{(2)}$
$b_2^{(1)} = a_1^{(2)}$
$b_1^{(2)} = a_2^{(1)}$ (if port 1 of stage 2 is connected to port 2 of stage 1)

The SFG for cascade analysis is more subtle. We need to represent the coupling between stages.
For two stages in cascade, $S_{21,total} = S_{21}^{(1)} S_{21}^{(2)}$, $S_{11,total} = S_{11}^{(1)}$, $S_{22,total} = S_{22}^{(2)}$. The intermediate $S_{12}$ and $S_{22}^{(1)}$, $S_{11}^{(2)}$ terms contribute to the overall $S_{12}$ and $S_{21}$ through feedback effects if not perfectly matched.

**Example from Pozar (Chapter 2, Figure 2.9):**
Analyzing a two-port network with source impedance $Z_s$ and load impedance $Z_L$.
The SFG involves the $a$ and $b$ waves at the two ports, with branches representing $S_{ij}$ for the device and the reflection coefficients at the source and load.

Let $\Gamma_{in} = \frac{Z_s - Z_0}{Z_s + Z_0}$ and $\Gamma_{out} = \frac{Z_L - Z_0}{Z_L + Z_0}$.
The equations are:
$b_1 = S_{11} a_1 + S_{12} a_2$
$b_2 = S_{21} a_1 + S_{22} a_2$

And the relationship between reflected and incident waves at the source and load:
$a_2 = \Gamma_{out} b_2$ (wave incident on port 2 is reflected from the load)
$a_1 = \Gamma_{in} b_1$ (wave incident on port 1 is reflected from the source)

SFG nodes: $a_1, b_1, a_2, b_2$.
Branches:
1.  $a_1 \xrightarrow{S_{11}} b_1$
2.  $a_2 \xrightarrow{S_{12}} b_1$
3.  $a_1 \xrightarrow{S_{21}} b_2$
4.  $a_2 \xrightarrow{S_{22}} b_2$
5.  $b_1 \xrightarrow{\Gamma_{in}} a_1$ (loop)
6.  $b_2 \xrightarrow{\Gamma_{out}} a_2$ (loop)

Using Mason's Gain Formula to find $S_{21,overall} = b_2 / a_1$ (when $a_2=0$ is not the correct condition here, we need $a_2$ related to $b_2$ via load):
We want $b_2/a_1$.
Forward path: $a_1 \xrightarrow{S_{21}} b_2$. Transmittance $P_1 = S_{21}$.
Loops:
L1: $b_1 \xrightarrow{\Gamma_{in}} a_1 \xrightarrow{S_{11}} b_1$. Loop transmittance $L_1 = \Gamma_{in} S_{11}$.
L2: $b_2 \xrightarrow{\Gamma_{out}} a_2 \xrightarrow{S_{22}} b_2$. Loop transmittance $L_2 = \Gamma_{out} S_{22}$.
L3: $a_1 \xrightarrow{S_{21}} b_2 \xrightarrow{\Gamma_{out}} a_2 \xrightarrow{S_{12}} b_1 \xrightarrow{\Gamma_{in}} a_1$. Loop transmittance $L_3 = S_{21} \Gamma_{out} S_{12} \Gamma_{in}$.

$\Delta = 1 - (L_1 + L_2 + L_3) + (\text{products of non-touching loops})$.
The forward path $a_1 \to b_2$ is not touched by loop L1. It is touched by L2 and L3.
Thus, $\Delta_1 = 1 - L_2$.

$S_{21,overall} = \frac{P_1 \Delta_1}{ \Delta } = \frac{S_{21} (1 - \Gamma_{out} S_{22})}{1 - (\Gamma_{in} S_{11} + \Gamma_{out} S_{22} + \Gamma_{in} S_{11} \Gamma_{out} S_{22}) + \dots}$
This looks complicated. The standard way is:
$b_1 = S_{11} a_1 + S_{12} a_2$
$b_2 = S_{21} a_1 + S_{22} a_2$
Substitute $a_2 = \Gamma_{out} b_2$:
$b_1 = S_{11} a_1 + S_{12} \Gamma_{out} b_2$
$b_2 = S_{21} a_1 + S_{22} \Gamma_{out} b_2$

From the second equation:
$b_2 (1 - S_{22} \Gamma_{out}) = S_{21} a_1$
$b_2 = \frac{S_{21}}{1 - S_{22} \Gamma_{out}} a_1$
So, $S_{21,overall} = \frac{S_{21}}{1 - S_{22} \Gamma_{out}}$

Similarly, we can substitute $a_1 = \Gamma_{in} b_1$ into the first equation:
$b_1 = S_{11} \Gamma_{in} b_1 + S_{12} a_2$
$b_1 (1 - S_{11} \Gamma_{in}) = S_{12} a_2$
$b_1 = \frac{S_{12}}{1 - S_{11} \Gamma_{in}} a_2$

The SFG approach leads to the same results and provides a visual understanding of signal propagation and feedback.

### 4.6 Learning Outcomes Alignment

This section directly addresses **CO2: Analyze Microwave Networks using signal flow graphs** by explaining the construction and application of SFGs and Mason's gain formula for microwave circuit analysis.

## 5. Practice Questions and Exercises

**Q1. Definition of S-parameters:**
Define the scattering parameters $S_{11}$ and $S_{21}$ for a two-port network in terms of incident ($a_k$) and reflected ($b_k$) voltage waves. What are the conditions under which these parameters are measured?

**Answer:**
*   $S_{11} = b_1 / a_1$ when $a_2 = 0$. It represents the reflection coefficient at port 1 when port 2 is terminated in a matched load.
*   $S_{21} = b_2 / a_1$ when $a_2 = 0$. It represents the forward transmission coefficient from port 1 to port 2 when port 2 is terminated in a matched load.

**Q2. Signal Flow Graph Interpretation:**
Consider a two-port network with the following S-parameter matrix:
$\begin{bmatrix} 0.2 \angle 30^\circ & 0.8 \angle 45^\circ \\ 0.7 \angle -20^\circ & 0.1 \angle 0^\circ \end{bmatrix}$

If a signal with amplitude $a_1 = 1$ is incident on port 1, and port 2 is terminated with a matched load (so $a_2 = 0$), calculate the amplitude and phase of the reflected wave from port 1 ($b_1$) and the transmitted wave to port 2 ($b_2$).

**Answer:**
Given: $S_{11} = 0.2 \angle 30^\circ$, $S_{12} = 0.8 \angle 45^\circ$, $S_{21} = 0.7 \angle -20^\circ$, $S_{22} = 0.1 \angle 0^\circ$.
$a_1 = 1$, $a_2 = 0$.

$b_1 = S_{11} a_1 + S_{12} a_2 = (0.2 \angle 30^\circ)(1) + (0.8 \angle 45^\circ)(0) = 0.2 \angle 30^\circ$
Amplitude of $b_1$ is 0.2, phase is 30°.

$b_2 = S_{21} a_1 + S_{22} a_2 = (0.7 \angle -20^\circ)(1) + (0.1 \angle 0^\circ)(0) = 0.7 \angle -20^\circ$
Amplitude of $b_2$ is 0.7, phase is -20°.

**Q3. Mason's Gain Formula Application:**
Draw a signal flow graph for a two-port network embedded between a source with reflection coefficient $\Gamma_s$ and a load with reflection coefficient $\Gamma_l$. Using Mason's Gain Formula, derive an expression for the overall forward voltage gain $b_2/a_1$ (where $a_1$ is the incident wave from the source, and $b_2$ is the wave reflected from the load).

**Answer:**
(Refer to Section 4.5 Example for the SFG and derivation steps). The derived expression is:
$G_{overall} = \frac{S_{21}}{1 - S_{22}\Gamma_l}$

*(Self-correction: The question asks for $b_2/a_1$ where $a_1$ is incident from source. My derivation in 4.5 used $a_1$ as incident wave and the load condition $a_2 = \Gamma_l b_2$. The result $S_{21,overall} = \frac{S_{21}}{1 - S_{22} \Gamma_{out}}$ is indeed the overall voltage gain from the source to the load. The source reflection $\Gamma_s$ is implicitly handled by the definition of $a_1$ relative to the source voltage.)*

**Q4. Power Consideration:**
If a microwave device has $S_{11} = 0.5 \angle 0^\circ$ and is driven by a source providing an incident wave $a_1$ such that the power delivered to a matched load at port 1 would be 1 Watt, what is the power reflected from port 1?

**Answer:**
Power delivered to matched load at port 1 is $|a_1|^2 = 1$ W.
$S_{11}$ is the reflection coefficient at port 1 when port 2 is matched.
The reflected wave amplitude is $b_1 = S_{11} a_1$.
The power reflected from port 1 is $|b_1|^2 = |S_{11} a_1|^2 = |S_{11}|^2 |a_1|^2$.
$|b_1|^2 = (0.5)^2 \times 1 \text{ W} = 0.25 \text{ W}$.
So, the reflected power is 0.25 Watts.

## 6. Important Points to Remember

*   **Wave Nature:** At microwave frequencies, signals behave as traveling waves, necessitating analysis based on voltage and current waves rather than lumped quantities.
*   **Equivalent Voltages and Currents ($a_k, b_k$):** These are defined based on the amplitudes of forward and backward traveling voltage waves, ensuring consistency with power measurements.
*   **S-Parameters:** The cornerstone of microwave network analysis, they describe the relationship between incident and reflected waves at the ports of a network.
*   **Matched Load Termination:** S-parameters are defined when all *other* ports are terminated in matched loads ($Z_0$).
*   **Signal Flow Graphs:** A powerful graphical tool for visualizing and analyzing the complex interconnections and feedback within microwave circuits.
*   **Mason's Gain Formula:** A systematic method for calculating the overall transfer function of signal flow graphs.
*   **Applications:** Understanding these concepts is vital for analyzing amplifiers, filters, oscillators, mixers, and other microwave devices described in **CO1**.

## 7. Course Outcomes Alignment Summary

*   **CO1: Describe the basic principles of Microwave solid state diodes, transistors, generators and amplifiers.**
    While this module focuses on network analysis, the S-parameters derived and used are the fundamental way to characterize these active devices at microwave frequencies. Understanding S-parameters ($S_{21}$ for gain, $S_{11}$ for input match, etc.) is directly linked to their principles.

*   **CO2: Analyze Microwave Networks using signal flow graphs.**
    This entire module is dedicated to this outcome. It introduces equivalent waves, S-parameters, and signal flow graphs as the tools for network analysis.

*   **CO3: Design microwave filters by different methods.**
    Filter design often involves cascading many reactive elements and transmission lines. S-parameter representations and SFGs are crucial for understanding the behavior of these cascaded structures to achieve desired filter characteristics.

*   **CO4: Illustrate the basic concepts of Monolithic Integrated Circuits (MICs).**
    MICs are built on transmission lines and integrated components. Network analysis using S-parameters and SFGs is essential for designing and analyzing these integrated circuits, as their performance is dictated by distributed effects and interconnections.

This comprehensive set of notes covers the fundamental concepts of microwave network analysis, focusing on equivalent voltages and currents, S-parameters, and signal flow graphs, directly addressing the learning outcomes and supporting the broader course objectives.