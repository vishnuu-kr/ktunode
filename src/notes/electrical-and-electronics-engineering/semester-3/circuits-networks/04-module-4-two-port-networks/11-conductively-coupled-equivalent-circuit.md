---
title: "conductively coupled equivalent circuit"
subject: "CIRCUITS & NETWORKS"
module: "Module 4: Two port networks"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35ae5"
status: "completed"
scrapedAt: "2026-05-23T16:11:50.436Z"
---
## CIRCUITS & NETWORKS - Module 4: Two Port Networks

### Topic: Conductively Coupled Equivalent Circuit

**Course Outcomes (COs) addressed:** CO5, CO6

**Knowledge Level (KL):** K3 (Applying)

---

### 1. Introduction to Two-Port Networks

A two-port network is a fundamental concept in circuit analysis that simplifies the study of complex circuits by treating them as a black box with two pairs of terminals.

*   **Definition:** A two-port network is a circuit or system that has two distinct pairs of terminals, conventionally called the input port and the output port. Through these ports, energy or signals can enter or leave the network.
*   **Key Characteristics:**
    *   The internal structure of the network can be complex and may not be of immediate interest.
    *   The interaction with external circuits occurs solely through the defined ports.
    *   Typically, the sum of currents entering one port must equal the sum of currents leaving the other port (assuming no internal current sources).
*   **Applications:** Used extensively in filter design, amplifier analysis, transmission line modeling, and general system analysis.
*   **Textbook References:**
    *   **Van Valkenburg (3rd Ed., 2019):** Chapter 11, "Two-Port Networks." This chapter provides a thorough introduction to the concept and the various parameters used to describe them.
    *   **Ravish R Singh (2nd Ed., 2019):** Chapter 14, "Two Port Networks." Similar to Van Valkenburg, this section introduces the fundamental definitions and parameters.
    *   **Suresh Kumar (1st Ed., 2008):** Chapter 9, "Two Port Networks." This textbook offers a clear explanation of the concept and its associated parameters.
    *   **A Sudhakar & Shyammohan S Palli (5th Ed., 2017):** Chapter 13, "Two Port Networks." This reference also covers the foundational aspects of two-port networks.

---

### 2. Understanding Coupled Circuits

Coupled circuits are circuits where energy is transferred between different parts of the circuit through mutual inductance. This coupling can significantly affect the behavior of the network.

*   **Definition:** Coupled circuits are circuits containing magnetically coupled inductors. The magnetic field produced by one inductor can induce a voltage in another inductor.
*   **Mutual Inductance (M):** A measure of the magnetic coupling between two inductors. It quantifies the extent to which the magnetic flux produced by one coil links with the other.
*   **Dot Convention:** A crucial convention used to determine the polarity of induced voltages.
    *   If currents enter the dotted terminals of both coils, the induced voltages will have the same polarity (i.e., they add).
    *   If currents enter the dotted terminal of one coil and leave the dotted terminal of the other, the induced voltages will have opposite polarities (i.e., they subtract).
*   **Textbook References:**
    *   **Van Valkenburg (3rd Ed., 2019):** Chapter 10, "Coupled Circuits." This chapter is dedicated to the analysis of coupled inductors.
    *   **Ravish R Singh (2nd Ed., 2019):** Chapter 12, "Coupled Circuits." Provides detailed explanations of mutual inductance and its effects.
    *   **Suresh Kumar (1st Ed., 2008):** Chapter 8, "Coupled Circuits." Covers the fundamentals of magnetic coupling.
    *   **A Sudhakar & Shyammohan S Palli (5th Ed., 2017):** Chapter 12, "Coupled Circuits." Offers a comprehensive treatment of coupled circuits.

---

### 3. Conductively Coupled Equivalent Circuit

This section focuses on transforming a network exhibiting conductive coupling (often through shared components like resistors or capacitors) into a representation that can be analyzed using two-port network parameters. The core idea is to represent a network with shared elements as a cascade or combination of simpler two-port subnetworks.

*   **Concept:** A network with conductive coupling can be viewed as interconnected components where the behavior at one port influences the other due to shared elements. The conductively coupled equivalent circuit aims to represent this interaction in a standardized form, often leading to a T- or Pi-equivalent circuit of the coupled elements.

*   **Derivation for Coupled Inductors (as a specific case of conductive coupling):**
    Consider two inductively coupled coils with self-inductances $L_1$ and $L_2$, and mutual inductance $M$. The voltage equations are:
    $v_1 = L_1 \frac{di_1}{dt} \pm M \frac{di_2}{dt}$
    $v_2 = L_2 \frac{di_2}{dt} \pm M \frac{di_1}{dt}$

    The sign depends on the dot convention. Assuming the dots are placed such that $v_1 = L_1 \frac{di_1}{dt} + M \frac{di_2}{dt}$ and $v_2 = L_1 \frac{di_2}{dt} + M \frac{di_1}{dt}$ (currents entering dots).

    This can be represented in matrix form:
    $$ \begin{bmatrix} v_1 \\ v_2 \end{bmatrix} = \begin{bmatrix} L_1 & M \\ M & L_2 \end{bmatrix} \begin{bmatrix} \frac{di_1}{dt} \\ \frac{di_2}{dt} \end{bmatrix} $$

    This matrix form is a precursor to the admittance (y) or impedance (z) parameters of a two-port network.

*   **Transforming Coupled Inductors to an Equivalent Circuit:**
    The key idea here is to represent the coupled inductors using a set of uncoupled inductors and possibly ideal transformers, or directly as a network of resistors and inductors that exhibits the same terminal characteristics.

    **Method 1: Using T-equivalent of coupled inductors**

    For coils with positive coupling (currents entering dots induce voltages that add), the equivalent circuit consists of three uncoupled inductors arranged in a T-configuration:
    *   An inductor of value $L_{12} = L_1 - M$ in series with the first port.
    *   An inductor of value $L_{23} = L_2 - M$ in series with the second port.
    *   An inductor of value $L_{13} = M$ common to both ports.

    **Diagram (T-equivalent for positive coupling):**

    ```
            L12       L13
        o----[ ]----o----[ ]----o
        |           |           |
       v1          i1          i2
        |           |           |
        o-----------o-----------o----[ ]----o
                   L23               v2
                                    |
                                    o
    ```

    *   **Derivation of T-equivalent for positive coupling:**
        Let the currents flowing from the top terminals of $L_{12}$, $L_{13}$, and $L_{23}$ be $i_1$, $i_{net}$, and $i_2$ respectively.
        The voltage at port 1 is $v_1 = L_{12} \frac{di_1}{dt} + L_{13} \frac{d(i_1 + i_2)}{dt}$.
        The voltage at port 2 is $v_2 = L_{23} \frac{di_2}{dt} + L_{13} \frac{d(i_1 + i_2)}{dt}$.

        For this to be equivalent to the coupled inductors, we need:
        $v_1 = L_1 \frac{di_1}{dt} + M \frac{di_2}{dt}$
        $v_2 = L_2 \frac{di_2}{dt} + M \frac{di_1}{dt}$

        Substituting the T-equivalent currents:
        $v_1 = (L_1 - M) \frac{di_1}{dt} + M \frac{di_1}{dt} + M \frac{di_2}{dt} = L_1 \frac{di_1}{dt} + M \frac{di_2}{dt}$
        $v_2 = (L_2 - M) \frac{di_2}{dt} + M \frac{di_1}{dt} + M \frac{di_2}{dt} = L_2 \frac{di_2}{dt} + M \frac{di_1}{dt}$

        This confirms the T-equivalent for positive coupling.

    **Method 2: Using Pi-equivalent of coupled inductors**

    For coils with positive coupling, the Pi-equivalent circuit consists of three uncoupled inductors:
    *   An inductor of value $L_1 - M$ connected from the first port to a common node.
    *   An inductor of value $L_2 - M$ connected from the second port to the common node.
    *   An inductor of value $M$ connected between the two ports.

    **Diagram (Pi-equivalent for positive coupling):**

    ```
               L1-M
          o----[ ]----o
          |           |
         v1          i1
          |           |
          o----[ ]----o----[ ]----o
               M           L2-M
                           |
                          v2
                           |
                           o
    ```

    *   **Derivation of Pi-equivalent for positive coupling:**
        Let the currents entering the ports be $i_1$ and $i_2$.
        The current through the $M$ inductor is $i_M$.
        $i_1 = i_{12} + i_M$ where $i_{12}$ is current through $L_1-M$.
        $i_2 = i_{23} + i_M$ where $i_{23}$ is current through $L_2-M$.
        Voltage across $L_1-M$ is $v_{1} = (L_1-M) \frac{di_{12}}{dt}$.
        Voltage across $L_2-M$ is $v_{2} = (L_2-M) \frac{di_{23}}{dt}$.
        Voltage across $M$ is $v_M = M \frac{d(i_1-i_{12})}{dt} = M \frac{d(i_2-i_{23})}{dt}$.

        This method can be more complex to derive directly and is often obtained by transforming the T-equivalent.

*   **Conductively Coupled Circuits (General Case):**
    The concept extends to circuits where components are shared conductively. For instance, a circuit with a common resistor connecting different parts. The goal is to isolate the coupled behavior and represent it using known two-port parameters or equivalent circuits.

    *   **Example: A resistor common to both ports**
        Consider a circuit where a resistor R is connected between terminal 1 of port 1 and terminal 1 of port 2.
        If we define $v_1, i_1$ for port 1 and $v_2, i_2$ for port 2, the voltage across R is $v_R$.
        $v_1 = \text{voltage across some impedance} + v_R$
        $v_2 = \text{voltage across some impedance} - v_R$ (assuming R connects in series with loop)
        $i_R = i_1 + i_2$ (if R is between the "return" paths)
        $v_R = i_R R = (i_1 + i_2)R$
        So, $v_1 = \text{impedance} + (i_1+i_2)R$
        And $v_2 = \text{impedance} - (i_1+i_2)R$

        This demonstrates how the shared resistor couples the behavior of the two ports. The conductively coupled equivalent circuit would represent the impedances and the coupling elements in a standard form.

    *   **Transforming a "bridged T" network:** A common scenario involves transforming a bridged T network, which exhibits conductive coupling, into a simpler equivalent circuit.

*   **Textbook References:**
    *   **Van Valkenburg (3rd Ed., 2019):** While the term "conductively coupled equivalent circuit" might not be explicitly used as a heading, the analysis of circuits with shared components (like common ground points, series/parallel resistors affecting both ports) in Chapter 11 implicitly leads to understanding these equivalent forms.
    *   **Ravish R Singh (2nd Ed., 2019):** Similar to Van Valkenburg, the analysis of complex networks that can be reduced to two-port representations will involve understanding how shared components create coupling.
    *   **Suresh Kumar (1st Ed., 2008):** Chapter 9 on two-port networks will cover methods to derive equivalent circuits for various configurations, including those with conductive coupling.
    *   **A Sudhakar & Shyammohan S Palli (5th Ed., 2017):** Chapter 13 will provide techniques for analyzing and simplifying networks, which includes identifying and representing conductive coupling.

---

### 4. Analyzing Conductively Coupled Circuits using Two-Port Parameters

The conductively coupled equivalent circuit can be readily analyzed using the established two-port parameters:

*   **Z-parameters (Open-circuit Impedance Parameters):**
    $v_1 = z_{11}i_1 + z_{12}i_2$
    $v_2 = z_{21}i_1 + z_{22}i_2$
    *   $z_{11} = v_1/i_1$ when $i_2=0$ (open output)
    *   $z_{12} = v_1/i_2$ when $i_1=0$ (open input)
    *   $z_{21} = v_2/i_1$ when $i_2=0$ (open output)
    *   $z_{22} = v_2/i_2$ when $i_1=0$ (open input)

*   **Y-parameters (Short-circuit Admittance Parameters):**
    $i_1 = y_{11}v_1 + y_{12}v_2$
    $i_2 = y_{21}v_1 + y_{22}v_2$
    *   $y_{11} = i_1/v_1$ when $v_2=0$ (short output)
    *   $y_{12} = i_1/v_2$ when $v_1=0$ (short input)
    *   $y_{21} = i_2/v_1$ when $v_2=0$ (short output)
    *   $y_{22} = i_2/v_2$ when $v_1=0$ (short input)

*   **Hybrid (h) Parameters:**
    $v_1 = h_{11}i_1 + h_{12}v_2$
    $i_2 = h_{21}i_1 + h_{22}v_2$

*   **Inverse Hybrid (g) Parameters:**
    $i_1 = g_{11}v_1 + g_{12}i_2$
    $v_2 = g_{21}v_1 + g_{22}i_2$

*   **Transmission (ABCD) Parameters:**
    $v_1 = Av_2 - Bi_2$
    $i_1 = Cv_2 - Di_2$

*   **How it applies to conductively coupled circuits:**
    Once a conductively coupled circuit is represented by its equivalent circuit (e.g., the T-equivalent of coupled inductors or a network of shared resistors), its Z, Y, or other parameters can be derived. These parameters then define the behavior of the two-port network, allowing for its connection to other networks or analysis under various load conditions.

*   **Example: Finding Z-parameters of a T-equivalent circuit (for coupled inductors)**
    Consider the T-equivalent of coupled inductors with positive coupling: $L_{12}$, $L_{13}$, $L_{23}$.
    The voltage equations are:
    $v_1 = (L_{12} + L_{13}) \frac{di_1}{dt} + L_{13} \frac{di_2}{dt}$
    $v_2 = L_{13} \frac{di_1}{dt} + (L_{23} + L_{13}) \frac{di_2}{dt}$

    Comparing with Z-parameter definition in the Laplace domain (s):
    $V_1(s) = (sL_{12} + sL_{13})I_1(s) + sL_{13}I_2(s)$
    $V_2(s) = sL_{13}I_1(s) + (sL_{23} + sL_{13})I_2(s)$

    Thus, the Z-parameters are:
    $z_{11} = s(L_{12} + L_{13}) = s(L_1 - M + M) = sL_1$
    $z_{12} = sL_{13} = sM$
    $z_{21} = sL_{13} = sM$
    $z_{22} = s(L_{23} + L_{13}) = s(L_2 - M + M) = sL_2$

    This is consistent with the original coupled inductor definition. The T-equivalent is a valid representation.

*   **Textbook References:** All textbooks listed provide detailed methods for calculating Z, Y, h, g, and ABCD parameters from circuit diagrams and for converting between them. Chapters dedicated to two-port networks are the primary sources.

---

### 5. Steady-State Behavior with Sinusoidal Excitation (CO6)

For AC circuits with sinusoidal excitation, the inductors and capacitors in the conductively coupled equivalent circuit are replaced by their impedances.

*   **Inductors:** $L \rightarrow j\omega L$
*   **Capacitors:** $C \rightarrow \frac{1}{j\omega C}$
*   **Resistors:** $R \rightarrow R$

*   **Analysis:**
    Once the equivalent circuit (e.g., T-equivalent) is established, and all components are replaced by their complex impedances, standard AC circuit analysis techniques (KCL, KVL, superposition, mesh analysis, nodal analysis) can be applied to determine the currents and voltages in the network.

*   **Example: Coupled inductors with sinusoidal excitation**
    Using the Z-parameters derived earlier for the T-equivalent of coupled inductors:
    $Z_{11} = j\omega L_1$
    $Z_{12} = j\omega M$
    $Z_{21} = j\omega M$
    $Z_{22} = j\omega L_2$

    These are the Z-parameters for the original coupled inductor pair, confirming the validity of the equivalent circuit under AC steady-state.

*   **Application:** This allows us to analyze the behavior of coupled circuits as two-port networks when driven by AC sources, which is critical for understanding the operation of transformers, resonant circuits with mutual inductance, and other AC systems.

*   **Textbook References:**
    *   **Van Valkenburg (3rd Ed., 2019):** Chapter 11 discusses AC steady-state analysis of two-port networks.
    *   **Ravish R Singh (2nd Ed., 2019):** Chapter 14 covers AC analysis.
    *   **Suresh Kumar (1st Ed., 2008):** Chapter 9 will include AC steady-state methods.
    *   **A Sudhakar & Shyammohan S Palli (5th Ed., 2017):** Chapter 13 will detail AC analysis techniques for two-port networks.
    *   **CO6 specifically:** This topic directly addresses CO6 by explaining how to analyze coupled circuits under sinusoidal excitation, which is a core aspect of steady-state behavior.

---

### 6. Important Points to Remember

*   **Conductive coupling** implies that there is a direct electrical connection or a shared component (like a common resistor or capacitor) between different parts of the circuit that leads to interaction. This is distinct from **magnetic coupling** which occurs via mutual inductance. However, the **equivalent circuit** of magnetically coupled inductors can be represented using conductively connected components (resistors and inductors).
*   The **dot convention** is essential for correctly representing the polarity of voltages induced by mutual inductance.
*   The **T- and Pi-equivalent circuits** are standard ways to represent coupled inductors as a network of uncoupled elements. These are crucial for simplifying analysis.
*   The **two-port parameters (Z, Y, h, g, ABCD)** provide a systematic way to characterize the behavior of any linear two-port network, including those with conductive coupling.
*   By converting circuit elements to their **phasor domain impedances** (for AC steady-state), conductively coupled circuits can be analyzed using standard circuit analysis techniques.
*   The concept of a conductively coupled equivalent circuit allows us to treat complex networks with shared components as simpler, interconnected two-port structures.

---

### 7. Practice Questions and Exercises

**Question 1:**
Two coils with self-inductances $L_1 = 100$ mH and $L_2 = 200$ mH are coupled with a mutual inductance $M = 50$ mH. Draw the T-equivalent circuit for these coupled inductors assuming positive coupling. Calculate the values of the inductors in the T-equivalent circuit.

**Answer 1:**
Assuming positive coupling, the T-equivalent circuit consists of three inductors:
*   $L_{12} = L_1 - M = 100 \text{ mH} - 50 \text{ mH} = 50 \text{ mH}$
*   $L_{23} = L_2 - M = 200 \text{ mH} - 50 \text{ mH} = 150 \text{ mH}$
*   $L_{13} = M = 50 \text{ mH}$ (common inductor)

Diagram:
```
        o----[ 50mH ]----o----[ 50mH ]----o
        |                |                |
       v1               i1               i2
        |                |                |
        o----------------o----[ 150mH ]----o
                                          v2
                                           |
                                           o
```

**Question 2:**
A two-port network has the following Z-parameters:
$z_{11} = 5 + \frac{1}{s}$
$z_{12} = 1 + \frac{1}{s}$
$z_{21} = 1 + \frac{1}{s}$
$z_{22} = 3 + \frac{1}{s}$
Draw the T-equivalent circuit of this network. What does the $\frac{1}{s}$ term represent?

**Answer 2:**
The Z-parameters are given by:
$v_1 = z_{11}i_1 + z_{12}i_2$
$v_2 = z_{21}i_1 + z_{22}i_2$

These correspond to the Z-parameters of a T-equivalent circuit with impedances $z_{12}$ and $z_{21}$ in the common branch, and $z_{11}-z_{12}$ and $z_{22}-z_{21}$ in the series branches.

*   Common branch impedance: $z_{12} = z_{21} = 1 + \frac{1}{s}$
*   Input series branch impedance: $z_{11} - z_{12} = (5 + \frac{1}{s}) - (1 + \frac{1}{s}) = 4 \Omega$
*   Output series branch impedance: $z_{22} - z_{21} = (3 + \frac{1}{s}) - (1 + \frac{1}{s}) = 2 \Omega$

The $\frac{1}{s}$ term in the impedance represents a **capacitor**. Specifically, $Z_C = \frac{1}{sC}$. Therefore, $\frac{1}{s} = \frac{1}{sC}$ implies $C = 1$ Farad.

The T-equivalent circuit has:
*   A 4 $\Omega$ resistor in series with port 1.
*   A 2 $\Omega$ resistor in series with port 2.
*   A component of $1 + \frac{1}{s}$ in the common branch, which is a 1 $\Omega$ resistor in series with a 1 F capacitor.

Diagram:
```
        o----[ 4 Ohm ]----o----[ 1 Ohm + 1F ]----o
        |                 |                     |
       v1                i1                    i2
        |                 |                     |
        o-----------------o----[ 1 Ohm + 1F ]----o
                                               v2
                                                |
                                                o
```

**Question 3:**
Consider a circuit where a 10 $\Omega$ resistor is common to both ports. The input port has a 5 $\Omega$ series resistor, and the output port has a 2 $\Omega$ series resistor. Determine the Z-parameters of this two-port network and represent it as a conductively coupled equivalent circuit.

**Answer 3:**
This description directly defines a T-equivalent circuit. The common element represents the coupling.

*   Input series resistor ($z_{11} - z_{12}$): 5 $\Omega$
*   Output series resistor ($z_{22} - z_{21}$): 2 $\Omega$
*   Common branch resistor ($z_{12} = z_{21}$): 10 $\Omega$

From these, we can derive the Z-parameters:
$z_{11} = (z_{11} - z_{12}) + z_{12} = 5 \Omega + 10 \Omega = 15 \Omega$
$z_{12} = 10 \Omega$
$z_{21} = 10 \Omega$
$z_{22} = (z_{22} - z_{21}) + z_{21} = 2 \Omega + 10 \Omega = 12 \Omega$

The conductively coupled equivalent circuit is precisely this T-configuration of resistors.

Diagram:
```
        o----[ 5 Ohm ]----o----[ 10 Ohm ]----o
        |                 |                  |
       v1                i1                 i2
        |                 |                  |
        o-----------------o----[ 10 Ohm ]----o
                                            v2
                                             |
                                             o
```

---
This concludes the study notes for the conductively coupled equivalent circuit in two-port networks. Remember to consult the recommended textbooks for more in-depth explanations and additional examples.
