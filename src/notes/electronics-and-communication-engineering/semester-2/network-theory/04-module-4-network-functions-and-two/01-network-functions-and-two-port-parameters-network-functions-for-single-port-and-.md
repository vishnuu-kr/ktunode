---
title: "Network functions and two-port parameters: Network functions for single-port and two-port networks"
subject: "NETWORK THEORY"
module: "Module 4: Network functions and two"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da51c"
status: "completed"
scrapedAt: "2026-05-23T17:41:19.585Z"
---
# NETWORK THEORY - MODULE 4: NETWORK FUNCTIONS AND TWO-PORT PARAMETERS

Welcome to Module 4, where we delve into the powerful concepts of **Network Functions** and **Two-Port Parameters**. These tools are absolutely essential for analyzing and understanding the behavior of electrical circuits, especially as we move towards more complex systems. Think of them as specialized lenses that allow us to see how a circuit responds to inputs and how signals are processed when they pass through a network. This module directly addresses **Course Outcome 4 (CO4): Identify the network functions and parameters of single-port and two-port networks**, at a K2 knowledge level, which means we’ll be focusing on understanding and recalling these fundamental concepts. We’ll also touch upon how these are used in analysis (K4), which will be more prominent in later modules, but the foundation starts here.

## 1. Network Functions: The Heart of Circuit Response

What exactly is a "network function"? Imagine you have a black box representing a circuit. You poke it with a signal (an input), and it gives you a response (an output). A network function is essentially the mathematical relationship between that output and that input. It tells us *how* the circuit transforms the input signal.

### 1.1 Single-Port Networks: A Simple Connection

Let's start with the simplest case: a **single-port network**. This is a network with just one pair of terminals where we connect our input and observe our output. Think of it like a single speaker or a simple resistor connected to a power source.

The network function for a single-port network is defined as the ratio of the **output response** to the **input excitation**, assuming all initial conditions are zero. We usually work in the **s-domain** (using the Laplace transform), which is crucial for analyzing circuits with inductors and capacitors, especially their transient behavior. This connects directly to **CO3: Analyze transient behavior of electrical networks using Laplace transforms**.

Let's say we have a voltage source $V(s)$ connected to a circuit, and it draws a current $I(s)$. The input is $V(s)$ and the output is $I(s)$. The network function, often denoted by $H(s)$, would be:

$$H(s) = \frac{I(s)}{V(s)}$$

This function $H(s)$ is the **impedance** of the single-port network, often denoted as $Z(s)$. Conversely, if we apply a current $I(s)$ and measure the resulting voltage $V(s)$, the network function would be the **admittance**, $Y(s)$:

$$Y(s) = \frac{I(s)}{V(s)} = \frac{1}{Z(s)}$$

**Analogy:** Think of a garden hose. The input is the water pressure from the tap, and the output is the flow rate of water. The hose's resistance to flow is like the impedance. A wider hose (lower impedance) lets more water flow for the same pressure. If we think of it the other way around – applying a certain water flow and seeing how much pressure builds up – that’s like admittance.

**Key Definitions to Remember:**

*   **Impedance ($Z(s)$):** The ratio of voltage to current in the s-domain. It represents opposition to current flow. For passive components:
    *   Resistor: $Z_R(s) = R$
    *   Inductor: $Z_L(s) = sL$
    *   Capacitor: $Z_C(s) = \frac{1}{sC}$
*   **Admittance ($Y(s)$):** The ratio of current to voltage in the s-domain. It represents ease of current flow. For passive components:
    *   Resistor: $Y_R(s) = \frac{1}{R}$
    *   Inductor: $Y_L(s) = \frac{1}{sL}$
    *   Capacitor: $Y_C(s) = sC$

**Example:** Consider a simple series RL circuit connected to a voltage source $V(s)$. The total impedance is $Z(s) = R + sL$. The current $I(s)$ drawn from the source is:

$$I(s) = \frac{V(s)}{Z(s)} = \frac{V(s)}{R + sL}$$

Here, the network function relating the output current to the input voltage is $H(s) = \frac{I(s)}{V(s)} = \frac{1}{R + sL}$. This is the admittance of the RL combination.

If we were interested in the voltage across the resistor, $V_R(s)$, as the output, and $V(s)$ as the input, the network function would be:

$$H(s) = \frac{V_R(s)}{V(s)} = \frac{I(s) \times R}{V(s)} = \frac{\frac{V(s)}{R + sL} \times R}{V(s)} = \frac{R}{R + sL}$$

This is a **voltage transfer function**, and it tells us how much of the input voltage appears across the resistor. This concept of input-output ratios is fundamental and will be elaborated upon in more detail in later study materials as we build towards analyzing more complex systems.

## 2. Two-Port Networks: The Gateway to Interconnection

Now, let's move to the more versatile and widely used **two-port networks**. These are circuits with **two distinct pairs of terminals**, often referred to as the "input port" and the "output port." Think of them as signal processing blocks, like amplifiers, filters, or transformers. You feed a signal into one port, and you get a processed signal out of the other. This is where the real power of network analysis shines, as it allows us to treat complex sub-networks as single entities, simplifying the overall circuit analysis. This is directly relevant to **CO4** and also lays groundwork for **CO1** and **CO2** by simplifying analysis.

A two-port network is characterized by the relationship between the voltages and currents at its two ports. We typically denote the currents entering the ports as $I_1$ and $I_2$, and the voltages across the ports as $V_1$ and $V_2$.

![A typical two-port network representation with labelled ports.](https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Two-port_network.svg/300px-Two-port_network.svg.png)
*(Image courtesy of Wikimedia Commons)*

The challenge with two-port networks is that there are four variables: $V_1, I_1, V_2, I_2$. To describe the behavior of the network, we need to establish relationships between these variables. This is where **two-port parameters** come in. They are a set of coefficients that define these relationships, essentially creating a set of equations that characterize the network.

We can choose any two of these variables as independent (inputs) and the other two as dependent (outputs). This leads to different sets of parameters. The most common sets are:

*   **Z-parameters (Impedance parameters)**
*   **Y-parameters (Admittance parameters)**
*   **H-parameters (Hybrid parameters)**
*   **G-parameters (Inverse Hybrid parameters)**
*   **ABCD parameters (Transmission parameters)**

For our purposes in this module, we will focus on understanding the core concept of these parameters and how they are defined, primarily focusing on Z and Y parameters, as they directly extend the single-port impedance/admittance concepts.

### 2.1 Z-Parameters: The "Open-Circuit" Approach

Z-parameters are defined by taking the voltages at the ports as dependent variables and the currents as independent variables. This is like asking, "If I push these specific currents into the network, what voltages will I get out?"

The defining equations are:

$$V_1 = z_{11}I_1 + z_{12}V_2$$
$$V_2 = z_{21}I_1 + z_{22}V_2$$

Wait, that's not right. The currents are the independent variables, so the equations should be:

$$V_1 = z_{11}I_1 + z_{12}I_2$$
$$V_2 = z_{21}I_1 + z_{22}I_2$$

Here, $z_{11}, z_{12}, z_{21}, z_{22}$ are the Z-parameters. They have units of impedance (Ohms).

**How to find these parameters?** This is where the definitions become very intuitive. We achieve this by setting one of the independent currents to zero.

*   **To find $z_{11}$:** Set $I_2 = 0$. This means the output port is **open-circuited**.
    $$V_1 = z_{11}I_1 \quad \implies \quad z_{11} = \frac{V_1}{I_1} \Big|_{I_2=0}$$
    $z_{11}$ is the **input impedance with the output port open-circuited**.

*   **To find $z_{21}$:** Set $I_2 = 0$.
    $$V_2 = z_{21}I_1 \quad \implies \quad z_{21} = \frac{V_2}{I_1} \Big|_{I_2=0}$$
    $z_{21}$ is the **forward transfer impedance** or **open-circuit forward transfer impedance**. It tells us how much output voltage we get for a given input current when the output is open.

*   **To find $z_{22}$:** Set $I_1 = 0$. This means the input port is **open-circuited**.
    $$V_2 = z_{22}I_2 \quad \implies \quad z_{22} = \frac{V_2}{I_2} \Big|_{I_1=0}$$
    $z_{22}$ is the **output impedance with the input port open-circuited**.

*   **To find $z_{12}$:** Set $I_1 = 0$.
    $$V_1 = z_{12}I_2 \quad \implies \quad z_{12} = \frac{V_1}{I_2} \Big|_{I_1=0}$$
    $z_{12}$ is the **reverse transfer impedance** or **open-circuit reverse transfer impedance**. It tells us how much input voltage we get for a given output current when the input is open.

**Analogy:** Imagine a person talking on the phone. $V_1$ is the voltage at your microphone, $I_1$ is the current flowing from it. $V_2$ is the voltage at the listener's speaker, and $I_2$ is the current entering it.
*   $z_{11}$: If the listener doesn't say anything ($I_2=0$, open circuit), how much voltage does your microphone produce for a given current you speak? This is like the microphone's internal impedance.
*   $z_{21}$: If the listener doesn't say anything ($I_2=0$), how much voltage is sent to their speaker for the current you speak? This is the "forward gain" in terms of voltage-to-current transfer.
*   $z_{22}$: If you don't speak ($I_1=0$), how much voltage does the listener's speaker produce for a current entering it (maybe from some interference)? This is like the speaker's impedance.
*   $z_{12}$: If you don't speak ($I_1=0$), how much voltage is picked up by your microphone due to current entering the listener's speaker? This is "feedback" or "crosstalk."

**Why are Z-parameters useful?** They are particularly convenient for analyzing networks that are naturally open-circuited at the output, or when the driving source is a current source. They are also directly related to the concept of impedance, which we are familiar with from single-port networks. This aligns with **CO4** and builds understanding from basic impedance concepts.

### 2.2 Y-Parameters: The "Short-Circuit" Approach

Y-parameters are defined by taking the currents at the ports as dependent variables and the voltages as independent variables. This is like asking, "If I apply these specific voltages to the network, what currents will flow?"

The defining equations are:

$$I_1 = y_{11}V_1 + y_{12}V_2$$
$$I_2 = y_{21}V_1 + y_{22}V_2$$

Here, $y_{11}, y_{12}, y_{21}, y_{22}$ are the Y-parameters. They have units of admittance (Siemens).

**How to find these parameters?** We achieve this by setting one of the independent voltages to zero.

*   **To find $y_{11}$:** Set $V_2 = 0$. This means the output port is **short-circuited**.
    $$I_1 = y_{11}V_1 \quad \implies \quad y_{11} = \frac{I_1}{V_1} \Big|_{V_2=0}$$
    $y_{11}$ is the **input admittance with the output port short-circuited**.

*   **To find $y_{21}$:** Set $V_2 = 0$.
    $$I_2 = y_{21}V_1 \quad \implies \quad y_{21} = \frac{I_2}{V_1} \Big|_{V_2=0}$$
    $y_{21}$ is the **forward transfer admittance** or **short-circuit forward transfer admittance**. It tells us how much output current we get for a given input voltage when the output is shorted.

*   **To find $y_{22}$:** Set $V_1 = 0$. This means the input port is **short-circuited**.
    $$I_2 = y_{22}V_2 \quad \implies \quad y_{22} = \frac{I_2}{V_2} \Big|_{V_1=0}$$
    $y_{22}$ is the **output admittance with the input port short-circuited**.

*   **To find $y_{12}$:** Set $V_1 = 0$.
    $$I_1 = y_{12}V_2 \quad \implies \quad y_{12} = \frac{I_1}{V_2} \Big|_{V_1=0}$$
    $y_{12}$ is the **reverse transfer admittance** or **short-circuit reverse transfer admittance**. It tells us how much input current we get for a given output voltage when the input is shorted.

**Analogy:** Continuing the phone analogy.
*   $y_{11}$: If the listener's speaker is shorted ($V_2=0$), how much current does your microphone draw for a given voltage you speak? This is the microphone's admittance.
*   $y_{21}$: If the listener's speaker is shorted ($V_2=0$), how much current flows to the speaker for the voltage you speak? This is the forward current gain.
*   $y_{22}$: If your microphone is shorted ($V_1=0$), how much current does the listener's speaker draw for a given voltage entering it? This is the speaker's admittance.
*   $y_{12}$: If your microphone is shorted ($V_1=0$), how much current enters your microphone due to voltage at the listener's speaker? This is reverse feedback current.

**Why are Y-parameters useful?** They are particularly convenient for analyzing networks that are naturally short-circuited at the output, or when the driving source is a voltage source. Many active devices, like transistors, are often characterized using Y-parameters because their input and output are usually biased with voltages and have a low output impedance (making short-circuit conditions relevant for small-signal analysis). This again aligns with **CO4**.

### 2.3 Inter-relationship between Z and Y Parameters

A crucial aspect of two-port parameters is that you can convert from one set to another, provided the network is reciprocal and possesses the necessary conditions (e.g., no internal active sources that would violate the parameter definitions). This is a fundamental concept in network synthesis and analysis, often covered in detail in books like Franklin F. Kuo's "Network Analysis and Synthesis."

For example, if you have the Z-parameters, you can find the Y-parameters by inverting the Z-parameter matrix.

The Z-parameter matrix equation is:
$$ \begin{bmatrix} V_1 \\ V_2 \end{bmatrix} = \begin{bmatrix} z_{11} & z_{12} \\ z_{21} & z_{22} \end{bmatrix} \begin{bmatrix} I_1 \\ I_2 \end{bmatrix} $$

The Y-parameter matrix equation is:
$$ \begin{bmatrix} I_1 \\ I_2 \end{bmatrix} = \begin{bmatrix} y_{11} & y_{12} \\ y_{21} & y_{22} \end{bmatrix} \begin{bmatrix} V_1 \\ V_2 \end{bmatrix} $$

From these, we can see that:
$$ \begin{bmatrix} V_1 \\ V_2 \end{bmatrix} = \begin{bmatrix} z_{11} & z_{12} \\ z_{21} & z_{22} \end{bmatrix} \begin{bmatrix} I_1 \\ I_2 \end{bmatrix} = \begin{bmatrix} z_{11} & z_{12} \\ z_{21} & z_{22} \end{bmatrix} \begin{bmatrix} y_{11} & y_{12} \\ y_{21} & y_{22} \end{bmatrix} \begin{bmatrix} V_1 \\ V_2 \end{bmatrix} $$

Thus, the Z-matrix is the inverse of the Y-matrix:
$$ \begin{bmatrix} z_{11} & z_{12} \\ z_{21} & z_{22} \end{bmatrix} = \left( \begin{bmatrix} y_{11} & y_{12} \\ y_{21} & y_{22} \end{bmatrix} \right)^{-1} $$

The inverse of a 2x2 matrix $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$ is $\frac{1}{ad-bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$.

So, we get the conversion formulas:
*   $y_{11} = \frac{z_{22}}{z_{11}z_{22} - z_{12}z_{21}}$
*   $y_{12} = \frac{-z_{12}}{z_{11}z_{22} - z_{12}z_{21}}$
*   $y_{21} = \frac{-z_{21}}{z_{11}z_{22} - z_{12}z_{21}}$
*   $y_{22} = \frac{z_{11}}{z_{11}z_{22} - z_{12}z_{21}}$

The denominator, $z_{11}z_{22} - z_{12}z_{21}$, is called the **determinant of the Z-matrix**. Similarly, $y_{11}y_{22} - y_{12}y_{21}$ is the determinant of the Y-matrix.

Similarly, to convert from Y to Z, you invert the Y-matrix.

**Remember this:** The ability to convert between parameter sets is vital. It means that if you know one set of parameters for a network, you can derive any other set. This is particularly useful when connecting different networks together; sometimes, one set of parameters is more convenient for a specific connection than another. This is a key analysis technique.

## 3. Network Functions for Two-Port Networks

While Z and Y parameters describe the relationship between voltage and current *at the ports*, we can also define **transfer functions** for two-port networks. These are ratios of specific port variables (voltage or current) from output to input, or vice versa, similar to what we saw for single-port networks.

*   **Voltage Transfer Function ($A_v(s)$):** Ratio of output voltage to input voltage.
    $$A_v(s) = \frac{V_2}{V_1}$$
    To calculate this, we need to connect a load impedance $Z_L$ at the output port ($V_2 = -I_2 Z_L$) and potentially a source impedance $Z_s$ at the input. This involves using the Z or Y parameter equations. For instance, using Z-parameters:
    $$V_1 = z_{11}I_1 + z_{12}I_2$$
    $$V_2 = z_{21}I_1 + z_{22}I_2$$
    Since $V_2 = -I_2 Z_L$, we have $I_2 = -\frac{V_2}{Z_L}$. Substituting this into the first equation:
    $$V_1 = z_{11}I_1 + z_{12}\left(-\frac{V_2}{Z_L}\right)$$
    $$V_1 = z_{11}I_1 - \frac{z_{12}}{Z_L}V_2$$
    Now we have two equations with $V_1, I_1, V_2$:
    1.  $V_1 + \frac{z_{12}}{Z_L}V_2 = z_{11}I_1$
    2.  $V_2 = z_{21}I_1 + z_{22}\left(-\frac{V_2}{Z_L}\right) = z_{21}I_1 - \frac{z_{22}}{Z_L}V_2$
    From equation 2: $V_2 \left(1 + \frac{z_{22}}{Z_L}\right) = z_{21}I_1 \implies V_2 \left(\frac{Z_L + z_{22}}{Z_L}\right) = z_{21}I_1 \implies I_1 = \frac{V_2}{z_{21}} \left(\frac{Z_L + z_{22}}{Z_L}\right)$.
    Substitute this $I_1$ into equation 1:
    $$V_1 + \frac{z_{12}}{Z_L}V_2 = z_{11} \left( \frac{V_2}{z_{21}} \left(\frac{Z_L + z_{22}}{Z_L}\right) \right)$$
    $$V_1 = V_2 \left[ \frac{z_{11}(Z_L + z_{22})}{z_{21}Z_L} - \frac{z_{12}}{Z_L} \right]$$
    $$V_1 = V_2 \left[ \frac{z_{11}Z_L + z_{11}z_{22} - z_{12}z_{21}}{z_{21}Z_L} \right]$$
    So, the voltage transfer function is:
    $$A_v(s) = \frac{V_2}{V_1} = \frac{z_{21}Z_L}{z_{11}Z_L + z_{11}z_{22} - z_{12}z_{21}}$$
    Notice the determinant of the Z-matrix appears here. This is a common theme.

*   **Current Transfer Function ($A_i(s)$):** Ratio of output current to input current.
    $$A_i(s) = \frac{I_2}{I_1}$$
    Similar analysis using Y-parameters would yield this.

*   **Input Impedance ($Z_{in}(s)$):** The effective impedance seen by the source at the input port, when a load is connected at the output.
    $$Z_{in}(s) = \frac{V_1}{I_1}$$
    Using the same setup as for $A_v(s)$, we found $V_1 = V_2 \left[ \frac{z_{11}Z_L + z_{11}z_{22} - z_{12}z_{21}}{z_{21}Z_L} \right]$. And $I_1 = \frac{V_2}{z_{21}} \left(\frac{Z_L + z_{22}}{Z_L}\right)$.
    $$Z_{in}(s) = \frac{V_1}{I_1} = \frac{V_2 \left[ \frac{z_{11}Z_L + z_{11}z_{22} - z_{12}z_{21}}{z_{21}Z_L} \right]}{\frac{V_2}{z_{21}} \left(\frac{Z_L + z_{22}}{Z_L}\right)} = \frac{z_{11}Z_L + z_{11}z_{22} - z_{12}z_{21}}{z_{21}Z_L} \times \frac{z_{21}Z_L}{Z_L + z_{22}}$$
    $$Z_{in}(s) = \frac{z_{11}Z_L + z_{11}z_{22} - z_{12}z_{21}}{Z_L + z_{22}}$$
    This also directly relates to the Z-parameters and the load impedance.

*   **Output Impedance ($Z_{out}(s)$):** The effective impedance seen by a source connected to the output port, when a source is connected at the input. This is a bit more complex as it requires a Thévenin equivalent at the input.

**Relating to Textbooks:** Van Valkenburg's "Network Analysis" and Irwin/Nelms' "Basic Engineering Circuit Analysis" provide excellent treatments of how to derive these transfer functions and input/output impedances from the Z and Y parameters, often involving matrix manipulations. These derivations are key to understanding how to analyze circuits composed of interconnected two-port networks.

**Relevance to Course Outcomes:** Understanding these transfer functions and parameters is the core of **CO4**. The process of deriving them, as briefly shown above, involves applying network analysis techniques like Kirchhoff's laws and impedance concepts, which ties into **CO1** and **CO2**. Furthermore, the use of $s$-domain implies the connection to **CO3**.

## Summary and Key Takeaways

*   **Network Function:** A ratio of output response to input excitation in the s-domain, crucial for understanding circuit behavior.
*   **Single-Port Networks:** Defined by a single impedance ($Z(s)$) or admittance ($Y(s)$) relating voltage and current at one port.
*   **Two-Port Networks:** Circuits with two ports, characterized by relationships between port voltages and currents.
*   **Z-Parameters:** Defined under open-circuit conditions, relating port voltages to port currents ($V=ZI$). Useful for current sources and open circuits.
*   **Y-Parameters:** Defined under short-circuit conditions, relating port currents to port voltages ($I=YV$). Useful for voltage sources and short circuits.
*   **Inter-conversion:** Z and Y parameters can be converted by matrix inversion, a vital skill for analysis.
*   **Transfer Functions:** For two-port networks, these describe signal transmission ratios (voltage or current) and are derived from parameter sets and terminal conditions.

These concepts form the bedrock for analyzing more complex interconnected networks and are fundamental building blocks for further study in network theory and circuit design.

---

## Sample Questions with Answers

**Q1. (Conceptual - CO4, K2)**
Define the Z-parameters of a two-port network. What conditions must be met at the ports to determine $z_{11}$?
**Answer:**
The Z-parameters of a two-port network describe the relationship between port voltages and port currents:
$V_1 = z_{11}I_1 + z_{12}I_2$
$V_2 = z_{21}I_1 + z_{22}I_2$

To determine $z_{11}$, we set the output port current $I_2$ to zero. This means the output port is **open-circuited**.
Then, $V_1 = z_{11}I_1$, so $z_{11} = \frac{V_1}{I_1} \Big|_{I_2=0}$.
$z_{11}$ represents the input impedance of the network when the output port is open-circuited.

---

**Q2. (Conceptual - CO4, K2)**
What is the physical significance of $y_{21}$ in the Y-parameter representation of a two-port network?
**Answer:**
The Y-parameters are defined by:
$I_1 = y_{11}V_1 + y_{12}V_2$
$I_2 = y_{21}V_1 + y_{22}V_2$

The parameter $y_{21}$ is obtained by setting the input port voltage $V_1$ to zero (short-circuiting the input port) and observing the output current $I_2$ for a given input voltage $V_1$: $y_{21} = \frac{I_2}{V_1} \Big|_{V_1=0}$.
Therefore, $y_{21}$ represents the **short-circuit forward transfer admittance**. It signifies how effectively the voltage applied at the input port is converted into current flowing out of the output port, under the condition that the input port is short-circuited. It's a measure of the "forward gain" in terms of current-to-voltage conversion when the input is effectively grounded.

---

**Q3. (Application/Analysis - CO4, K4)**
A two-port network has the following Z-parameters: $z_{11} = 5\Omega$, $z_{12} = 1\Omega$, $z_{21} = 2\Omega$, $z_{22} = 4\Omega$. Determine the Y-parameters for this network.
**Answer:**
The Z-parameter matrix is:
$$ \begin{bmatrix} z_{11} & z_{12} \\ z_{21} & z_{22} \end{bmatrix} = \begin{bmatrix} 5 & 1 \\ 2 & 4 \end{bmatrix} $$
The determinant of the Z-matrix is $\Delta_Z = z_{11}z_{22} - z_{12}z_{21} = (5)(4) - (1)(2) = 20 - 2 = 18$.

The Y-parameters are obtained by inverting the Z-matrix:
$$ \begin{bmatrix} y_{11} & y_{12} \\ y_{21} & y_{22} \end{bmatrix} = \frac{1}{\Delta_Z} \begin{bmatrix} z_{22} & -z_{12} \\ -z_{21} & z_{11} \end{bmatrix} $$
$$ \begin{bmatrix} y_{11} & y_{12} \\ y_{21} & y_{22} \end{bmatrix} = \frac{1}{18} \begin{bmatrix} 4 & -1 \\ -2 & 5 \end{bmatrix} = \begin{bmatrix} 4/18 & -1/18 \\ -2/18 & 5/18 \end{bmatrix} $$
So, the Y-parameters are:
$y_{11} = \frac{2}{9} S$
$y_{12} = -\frac{1}{18} S$
$y_{21} = -\frac{1}{9} S$
$y_{22} = \frac{5}{18} S$

---

**Q4. (Problem Solving - CO4, K4)**
Consider a single-port network consisting of a resistor $R$ in series with an inductor $L$.
a) Find its impedance function $Z(s)$.
b) If this network is connected to a voltage source $V(s)$, what is the network function describing the current drawn $I(s)$?
**Answer:**
a) For a series RL circuit, the impedance function is the sum of the individual impedances in the s-domain:
$Z(s) = Z_R(s) + Z_L(s) = R + sL$.
This is the impedance function of the single-port network.

b) The network function relating the output current $I(s)$ to the input voltage $V(s)$ is the admittance function:
$H(s) = \frac{I(s)}{V(s)} = \frac{1}{Z(s)} = \frac{1}{R + sL}$.

---

**Q5. (Deeper Understanding - CO4, CO1/CO2, K4)**
A passive two-port network is described by its Z-parameters. Is it possible for $z_{12}$ to be equal to $z_{21}$? Explain why or why not, and what this condition implies about the network.
**Answer:**
Yes, it is possible for $z_{12}$ to be equal to $z_{21}$ for a passive two-port network.
This condition, $z_{12} = z_{21}$, implies that the network is **reciprocal**.
In a reciprocal network, the transfer impedance in one direction is equal to the transfer impedance in the reverse direction. That is, if a current $I_1$ entering port 1 produces a voltage $V_2$ at port 2 (with port 1 terminated appropriately, or open/shorted depending on parameter definition), then the same current $I_1$ entering port 2 would produce the same voltage $V_1$ at port 1 (with port 2 terminated appropriately, or open/shorted).
For passive networks composed of resistors, inductors, and capacitors, reciprocity is a fundamental property. This is related to Tellegen's theorem and other network analysis principles discussed in network theory. In contrast, networks containing active components like transistors or diodes are generally non-reciprocal, meaning $z_{12} \neq z_{21}$.

---
This concludes Module 4. Remember that understanding these network functions and parameters is your key to unlocking the behavior of complex circuits. Keep practicing the calculations and understanding the physical meaning behind each parameter!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
