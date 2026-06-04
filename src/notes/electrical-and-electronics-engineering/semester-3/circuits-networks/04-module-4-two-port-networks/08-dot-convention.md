---
title: "dot convention"
subject: "CIRCUITS & NETWORKS"
module: "Module 4: Two port networks"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35ae2"
status: "completed"
scrapedAt: "2026-05-23T16:11:48.267Z"
---
# CIRCUITS & NETWORKS - Module 4: Two Port Networks

## Topic: Dot Convention

**Learning Outcomes Covered:**

*   Understanding the concept of dot convention in two-port networks.
*   Applying the dot convention to determine the polarity of induced voltages in coupled circuits.
*   Relating the dot convention to the analysis of magnetically coupled networks (which is a core aspect of two-port networks involving mutual inductance).

**Course Outcomes Alignment:**

*   **CO5: Describe two-port networks in terms of various parameters. (Knowledge Level: K3)**
    *   While dot convention is not a parameter itself, it's crucial for correctly defining and applying parameters (like impedance, admittance, hybrid) in networks containing mutual inductance, which are often represented as two-port networks.
*   **CO6: Explain the steady-state behaviour of coupled circuits with sinusoidal excitation (Knowledge Level: K3)**
    *   Dot convention is fundamental to correctly writing the equations for magnetically coupled circuits under steady-state sinusoidal excitation.

**1. Introduction to Dot Convention**

The dot convention is a graphical method used in circuit analysis to indicate the polarity of voltages induced in magnetically coupled coils. When coils are linked by a common magnetic flux, a voltage is induced in one coil due to the changing current in the other. The dot convention helps us determine the direction of this induced voltage, which is essential for setting up the correct circuit equations.

**Key Concepts:**

*   **Magnetic Coupling:** Two or more coils are magnetically coupled if the magnetic flux produced by one coil links with the other coils.
*   **Mutual Inductance ($M$):** A measure of the magnetic coupling between two coils.
*   **Induced Voltage:** A voltage that is generated across a coil due to a changing magnetic flux linkage through it.

**2. The Dot Convention Rule**

The dot convention is based on the principle that:

*   **If the current enters the dotted terminal of a coil, the induced voltage in the other coil will have a positive polarity at its dotted terminal.**
*   Conversely, **if the current enters the undotted terminal of a coil, the induced voltage in the other coil will have a negative polarity at its dotted terminal.**

**Visual Representation:**

Imagine two coils, Coil 1 and Coil 2, wound on a common core. Dots are placed next to one terminal of each coil.

```
      L1       L2
    +----o   o----+
    |    |   |    |
    |    (.) ( )  |  <- Dots indicate terminals
    |    |   |    |
    +----o   o----+
```

*   Let $i_1$ be the current flowing into Coil 1.
*   Let $v_1$ be the voltage across Coil 1.
*   Let $i_2$ be the current flowing into Coil 2.
*   Let $v_2$ be the voltage across Coil 2.
*   The voltage induced in Coil 1 due to $i_2$ is $v_{12}$.
*   The voltage induced in Coil 2 due to $i_1$ is $v_{21}$.

**3. Applying the Dot Convention to Voltage and Current Equations**

Consider two magnetically coupled coils with self-inductances $L_1$ and $L_2$, and mutual inductance $M$.

**Scenario 1: Current enters the dotted terminals of both coils.**

If $i_1$ enters the dotted terminal of Coil 1 and $i_2$ enters the dotted terminal of Coil 2, then the induced voltages add.

*   Voltage across Coil 1 ($v_1$): This includes the self-induced voltage and the mutually induced voltage from Coil 2.
    $v_1 = L_1 \frac{di_1}{dt} + M \frac{di_2}{dt}$
*   Voltage across Coil 2 ($v_2$): This includes the self-induced voltage and the mutually induced voltage from Coil 1.
    $v_2 = L_1 \frac{di_1}{dt} + L_2 \frac{di_2}{dt}$  (Correction: this should be $v_2 = M \frac{di_1}{dt} + L_2 \frac{di_2}{dt}$)

Let's correct the equations:

*   **Voltage across Coil 1 ($v_1$):**
    $v_1 = L_1 \frac{di_1}{dt} + M \frac{di_2}{dt}$ (when $i_1$ enters dotted terminal of Coil 1, and $i_2$ enters dotted terminal of Coil 2)

*   **Voltage across Coil 2 ($v_2$):**
    $v_2 = M \frac{di_1}{dt} + L_2 \frac{di_2}{dt}$ (when $i_1$ enters dotted terminal of Coil 1, and $i_2$ enters dotted terminal of Coil 2)

**Scenario 2: Current enters the dotted terminal of Coil 1 and leaves the dotted terminal of Coil 2.**

If $i_1$ enters the dotted terminal of Coil 1 and $i_2$ leaves the dotted terminal of Coil 2 (meaning $i_2$ enters the undotted terminal of Coil 2), then the induced voltages subtract.

*   **Voltage across Coil 1 ($v_1$):**
    $v_1 = L_1 \frac{di_1}{dt} - M \frac{di_2}{dt}$ (when $i_1$ enters dotted terminal of Coil 1, and $i_2$ leaves dotted terminal of Coil 2)

*   **Voltage across Coil 2 ($v_2$):**
    $v_2 = -M \frac{di_1}{dt} + L_2 \frac{di_2}{dt}$ (when $i_1$ enters dotted terminal of Coil 1, and $i_2$ leaves dotted terminal of Coil 2)

**General Rule for Equations:**

Let's define the voltage across a coil as positive at the dot terminal if the current entering that dot terminal causes flux that aids the flux caused by current entering the other coil's dot terminal.

The voltage across coil 1 is given by:
$v_1 = L_1 \frac{di_1}{dt} \pm M \frac{di_2}{dt}$

The voltage across coil 2 is given by:
$v_2 = L_2 \frac{di_2}{dt} \pm M \frac{di_1}{dt}$

The sign of the mutual inductance term depends on the relative direction of the currents with respect to the dots.

*   **Positive sign ($+M \frac{di_2}{dt}$ in $v_1$ and $+M \frac{di_1}{dt}$ in $v_2$):**
    This occurs when the currents $i_1$ and $i_2$ enter the **same relative terminals** (both dotted or both undotted).
    *   If $i_1$ enters the dotted terminal of Coil 1, and $i_2$ enters the dotted terminal of Coil 2, the sign is positive.
    *   If $i_1$ enters the undotted terminal of Coil 1, and $i_2$ enters the undotted terminal of Coil 2, the sign is also positive.

*   **Negative sign ($-M \frac{di_2}{dt}$ in $v_1$ and $-M \frac{di_1}{dt}$ in $v_2$):**
    This occurs when the currents $i_1$ and $i_2$ enter **opposite relative terminals** (one dotted and one undotted).
    *   If $i_1$ enters the dotted terminal of Coil 1, and $i_2$ leaves the dotted terminal of Coil 2 (i.e., enters the undotted terminal), the sign is negative.

**In summary, if both currents enter the dotted terminals, the mutual inductance terms are positive. If one current enters the dotted terminal and the other leaves the dotted terminal (enters the undotted terminal), the mutual inductance terms are negative.**

**4. Determining the Dot Placement**

In many practical problems, the dots are provided. However, if they are not, we can determine their placement based on the winding direction:

*   **Right-hand rule:** If you wind Coil 1 in a certain direction and place a dot, then wind Coil 2 in the same direction on the same core, the dot for Coil 2 should be placed on the corresponding terminal.
*   **A simpler approach:** If current enters the dotted terminal of Coil 1, the magnetic field produced by Coil 1 will point in a certain direction (e.g., upwards through the core). If current enters the dotted terminal of Coil 2, the magnetic field produced by Coil 2 will also point in the same direction (e.g., upwards through the core). This means the fluxes produced by currents entering the dotted terminals will add.

**5. Dot Convention in AC Steady-State Analysis (Sinusoidal Excitation)**

In AC circuits, we use phasors. The derivatives are replaced by multiplication by $j\omega$.

Let $I_1$ and $I_2$ be the phasor currents, and $V_1$ and $V_2$ be the phasor voltages.

*   **Scenario 1: Current enters the dotted terminals of both coils.**
    $V_1 = j\omega L_1 I_1 + j\omega M I_2$
    $V_2 = j\omega M I_1 + j\omega L_2 I_2$

*   **Scenario 2: Current enters the dotted terminal of Coil 1 and leaves the dotted terminal of Coil 2.**
    $V_1 = j\omega L_1 I_1 - j\omega M I_2$
    $V_2 = -j\omega M I_1 + j\omega L_2 I_2$

**6. Dot Convention in Two-Port Network Parameters**

Two-port networks often involve magnetically coupled elements. When expressing these networks in terms of their parameters (Z, Y, H), the dot convention is crucial for writing the nodal or mesh equations correctly, which then lead to the parameter matrices.

**Example: A simple two-port network with mutual inductance.**

Consider two coils with self-inductances $L_1$ and $L_2$, and mutual inductance $M$. Let the input port be across Coil 1 and the output port be across Coil 2.

```
      L1       L2
    +----o---o----+
    | ( .)      (.)|  <- Input Port 1 (V1, I1)
    |    |       |  |
    |    o-------o--+---- Output Port 2 (V2, I2)
    +----|-------|----|
         |       |
         +-------+
```

Assume current $I_1$ enters the dotted terminal of $L_1$ and current $I_2$ enters the dotted terminal of $L_2$.

From KVL around the loops:

*   **Port 1:** $V_1 = j\omega L_1 I_1 + j\omega M I_2$
*   **Port 2:** $V_2 = j\omega M I_1 + j\omega L_2 I_2$

To find the Z-parameters ($V_1 = Z_{11}I_1 + Z_{12}I_2$, $V_2 = Z_{21}I_1 + Z_{22}I_2$):

*   Set $I_2 = 0$ (open circuit at port 2):
    $V_1 = Z_{11}I_1 \implies Z_{11} = j\omega L_1$
    $V_2 = Z_{21}I_1 \implies Z_{21} = j\omega M$

*   Set $I_1 = 0$ (open circuit at port 1):
    $V_1 = Z_{12}I_2 \implies Z_{12} = j\omega M$
    $V_2 = Z_{22}I_2 \implies Z_{22} = j\omega L_2$

So, the Z-parameter matrix for this coupled network is:
$$
[Z] = \begin{bmatrix} j\omega L_1 & j\omega M \\ j\omega M & j\omega L_2 \end{bmatrix}
$$

**Important Note:** The signs of $M$ in the Z-matrix are crucial and depend entirely on the dot convention and the chosen direction of currents for the ports. If the dots were placed on opposite terminals (one on $L_1$'s entry, one on $L_2$'s exit), then $Z_{12}$ and $Z_{21}$ would be $-j\omega M$.

**7. Textual References and Content Incorporation:**

*   **Network Analysis by Van Valkenburg (Pearson, 3rd 2019):** Van Valkenburg's text extensively covers coupled circuits and the importance of the dot convention in determining the signs of mutual inductance terms when writing loop or nodal equations. It emphasizes that if currents enter the dots, the mutual inductance terms have the same sign (usually positive); if they enter opposite terminals, the signs are opposite.
*   **Network Analysis and Synthesis by Ravish R Singh (McGraw Hill Education, 2nd 2019):** Singh's book also dedicates a section to coupled circuits and the dot convention, clearly illustrating how to establish the polarity of induced voltages based on current direction and dot placement. It provides examples of writing KVL equations with mutual inductance terms.
*   **Electric Circuits & Networks by Suresh Kumar (Pearson, Ist 2008):** This textbook provides a foundational understanding of magnetic coupling and the dot convention, explaining its role in circuit analysis, particularly for transformer circuits which are a prime example of coupled circuits.
*   **Circuits and Networks, Analysis and Synthesis by A Sudhakar, Shyammohan S Palli (McGraw Hill Education, 5th 2017):** Sudhakar and Palli's book thoroughly explains the concept of dot convention with clear diagrams, showing its application in setting up equations for magnetically coupled systems and their representation in two-port network parameters. They highlight that the convention is a tool to ensure consistency in the direction of induced EMF.

**8. Practice Questions and Exercises:**

**Question 1:**
Two magnetically coupled coils have self-inductances $L_1 = 100$ mH and $L_2 = 400$ mH, with a coefficient of coupling $k = 0.8$. The coils are wound such that the magnetic flux produced by current entering the dotted terminal of $L_1$ aids the flux produced by current entering the dotted terminal of $L_2$. If $i_1(t) = 2 \cos(100t)$ A and $i_2(t) = 1 \sin(100t)$ A, determine the voltages $v_1(t)$ and $v_2(t)$ across the coils.

**Solution 1:**
Given: $L_1 = 0.1$ H, $L_2 = 0.4$ H, $k = 0.8$.
Mutual inductance $M = k \sqrt{L_1 L_2} = 0.8 \sqrt{0.1 \times 0.4} = 0.8 \sqrt{0.04} = 0.8 \times 0.2 = 0.16$ H.

The currents are given as:
$i_1(t) = 2 \cos(100t)$ A
$i_2(t) = 1 \sin(100t) = 1 \cos(100t - 90^\circ)$ A

Since both currents enter the dotted terminals, the mutual inductance terms have positive signs.
The voltage equations are:
$v_1(t) = L_1 \frac{di_1}{dt} + M \frac{di_2}{dt}$
$v_2(t) = M \frac{di_1}{dt} + L_2 \frac{di_2}{dt}$

Calculate the derivatives:
$\frac{di_1}{dt} = \frac{d}{dt}(2 \cos(100t)) = -200 \sin(100t)$ A/s
$\frac{di_2}{dt} = \frac{d}{dt}(1 \sin(100t)) = 100 \cos(100t)$ A/s

Substitute values into the voltage equations:
$v_1(t) = (0.1)(-200 \sin(100t)) + (0.16)(100 \cos(100t))$
$v_1(t) = -20 \sin(100t) + 16 \cos(100t)$ V

$v_2(t) = (0.16)(-200 \sin(100t)) + (0.4)(100 \cos(100t))$
$v_2(t) = -32 \sin(100t) + 40 \cos(100t)$ V

**Question 2:**
In the circuit below, determine the Z-parameters.

```
      L1=5H    L2=2H
    +----o----o----+
    | (.)     (.) |  <- Port 1 (V1, I1)
    |     M=3H    |
    o-------------o----+---- Port 2 (V2, I2)
```

**Solution 2:**
The diagram shows that $I_1$ enters the dotted terminal of $L_1$, and $I_2$ enters the dotted terminal of $L_2$.
Therefore, the mutual inductance terms in the voltage equations will have positive signs.

Port 1 voltage: $V_1 = j\omega L_1 I_1 + j\omega M I_2$
Port 2 voltage: $V_2 = j\omega M I_1 + j\omega L_2 I_2$

Given $L_1 = 5$ H, $L_2 = 2$ H, $M = 3$ H.

$V_1 = j\omega (5) I_1 + j\omega (3) I_2$
$V_2 = j\omega (3) I_1 + j\omega (2) I_2$

Comparing with the Z-parameter definition ($V_1 = Z_{11}I_1 + Z_{12}I_2$, $V_2 = Z_{21}I_1 + Z_{22}I_2$):

$Z_{11} = j\omega 5$
$Z_{12} = j\omega 3$
$Z_{21} = j\omega 3$
$Z_{22} = j\omega 2$

The Z-parameter matrix is:
$$
[Z] = \begin{bmatrix} j\omega 5 & j\omega 3 \\ j\omega 3 & j\omega 2 \end{bmatrix}
$$

**Question 3:**
Consider the same circuit as Question 2, but assume the dot is placed on the opposite terminal of $L_2$. Determine the Z-parameters.

```
      L1=5H    L2=2H
    +----o----o----+
    | (.)     .  |  <- Port 1 (V1, I1)
    |     M=3H    |
    o-------------o----+---- Port 2 (V2, I2)
```
*(Note: The dot is now on the lower terminal of L2, while I2 enters from the upper terminal)*

**Solution 3:**
In this case, $I_1$ enters the dotted terminal of $L_1$. However, $I_2$ enters the undotted terminal of $L_2$ (it leaves the dotted terminal). Therefore, the mutual inductance terms in the voltage equations will have negative signs.

Port 1 voltage: $V_1 = j\omega L_1 I_1 - j\omega M I_2$
Port 2 voltage: $V_2 = -j\omega M I_1 + j\omega L_2 I_2$

Given $L_1 = 5$ H, $L_2 = 2$ H, $M = 3$ H.

$V_1 = j\omega (5) I_1 - j\omega (3) I_2$
$V_2 = -j\omega (3) I_1 + j\omega (2) I_2$

Comparing with the Z-parameter definition:

$Z_{11} = j\omega 5$
$Z_{12} = -j\omega 3$
$Z_{21} = -j\omega 3$
$Z_{22} = j\omega 2$

The Z-parameter matrix is:
$$
[Z] = \begin{bmatrix} j\omega 5 & -j\omega 3 \\ -j\omega 3 & j\omega 2 \end{bmatrix}
$$

**9. Important Points to Remember:**

*   The dot convention is a **visual aid** to determine the polarity of induced voltages in coupled coils.
*   **Current entering a dotted terminal** results in a voltage with **positive polarity** at the other coil's dotted terminal.
*   The **relative direction of currents** with respect to the dots determines the sign of the mutual inductance term in the voltage equations.
*   **Same relative current direction (both enter dots or both leave dots) $\implies$ positive mutual inductance term.**
*   **Opposite relative current direction (one enters dot, one leaves dot) $\implies$ negative mutual inductance term.**
*   The dot convention is fundamental to correctly modeling and analyzing transformers and other magnetically coupled circuits, which are often represented as two-port networks.
*   Always check the dot placement and the defined current directions carefully when setting up equations for coupled circuits.

This concludes the study notes on the dot convention in two-port networks. Remember to practice setting up equations for various configurations of coupled coils to solidify your understanding.
