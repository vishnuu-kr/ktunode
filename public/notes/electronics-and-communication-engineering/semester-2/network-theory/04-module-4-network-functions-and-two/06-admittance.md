---
title: "Admittance"
subject: "NETWORK THEORY"
module: "Module 4: Network functions and two"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da521"
status: "completed"
scrapedAt: "2026-05-23T17:41:24.078Z"
---
# Network Theory: Module 4 - Network Functions and Two-Port Networks

## Topic: Admittance

Welcome everyone to Module 4 of Network Theory! Today, we're going to dive deep into a really fundamental concept: **Admittance**. This might sound a bit like a fancy word, but trust me, it's incredibly useful for analyzing our electrical circuits, especially when we start thinking about how circuits behave dynamically and interact with each other. We'll see how admittance is not just a definition but a powerful tool that connects directly to our course objectives, particularly in understanding network functions and the behavior of different circuit configurations.

### From Conductance to Admittance: A Natural Extension

You're all familiar with **Resistance** ($R$), right? It's our measure of how much a component *opposes* the flow of current. And we know that for a resistor, Voltage ($V$) equals Current ($I$) times Resistance ($R$), or $V = IR$. From this, we defined **Conductance** ($G$) as the reciprocal of resistance: $G = 1/R$. Conductance tells us how *easily* current flows through a component.

Now, what happens when we move beyond simple resistors and deal with capacitors and inductors? These components behave differently depending on the frequency of the signal applied. We introduce the concept of **Reactance** ($X$) for reactive components (capacitors and inductors). For a capacitor, the reactance is $X_C = -1/(\omega C)$, and for an inductor, it's $X_L = \omega L$, where $\omega$ is the angular frequency.

When we combine resistance and reactance, we get **Impedance** ($Z$). Impedance is the *total opposition* to current flow in an AC circuit. We express it as a complex number: $Z = R + jX$. Here, $j$ is the imaginary unit, representing the phase shift introduced by reactive components.

So, if impedance ($Z$) is the opposition to current flow, what do you think the *ease* of current flow would be? You guessed it! It's the reciprocal of impedance. This is what we call **Admittance** ($Y$).

**Definition of Admittance:**
Admittance ($Y$) is defined as the reciprocal of impedance ($Z$).
$$Y = \frac{1}{Z}$$
Just like impedance, admittance is also a complex quantity. If $Z = R + jX$, then:
$$Y = \frac{1}{R + jX}$$
To get this into a more usable form, we can multiply the numerator and denominator by the complex conjugate of the denominator:
$$Y = \frac{1}{R + jX} \times \frac{R - jX}{R - jX} = \frac{R - jX}{R^2 + X^2}$$
We can then separate this into its real and imaginary parts:
$$Y = \frac{R}{R^2 + X^2} - j\frac{X}{R^2 + X^2}$$
The real part of admittance is called **Conductance** ($G$), and the imaginary part is called **Susceptance** ($B$).
$$Y = G + jB$$
So, we have:
*   **Conductance ($G$)**: $G = \frac{R}{R^2 + X^2}$
*   **Susceptance ($B$)**: $B = -\frac{X}{R^2 + X^2}$

Notice how conductance ($G$) in AC circuits is not simply $1/R$ anymore. It depends on both resistance and reactance. This is a crucial distinction from DC circuits.

**Units of Admittance:** The unit of admittance is the **siemens** (S), named after Ernst Werner von Siemens. Before 1971, it was also called the "mho" (ohm spelled backward).

### Why Admittance? Connecting to Course Outcomes

Now, you might be asking, "Why bother with admittance when we already have impedance?" This is where our Course Outcomes come into play.

*   **CO1: Analyze electrical networks using mesh and node methods (Knowledge Level: K4)**
    *   When we analyze circuits using nodal analysis, we typically work with currents entering and leaving nodes. Admittance is directly related to how current flows through circuit elements. For example, if we have a branch with impedance $Z$, the current through it is $V/Z$. If we express this as $YV$, where $Y=1/Z$, it fits very naturally into nodal equations where we sum currents. This can often simplify the setup of nodal equations, especially in complex networks or when dealing with parallel combinations of elements.

*   **CO4: Identify the network functions and parameters of single-port and two-port networks (Knowledge Level: K2)**
    *   Admittance is fundamental to defining **admittance parameters** ($y$-parameters) for two-port networks. We’ll see later that these parameters relate input and output currents to input and output voltages. The very definition of these parameters directly uses admittance concepts. Understanding admittance is key to grasping the behavior and characterization of more complex circuits as single blocks.

Think of it this way: Impedance is like thinking about how much "force" (voltage) is needed to push a certain amount of "stuff" (current) through. Admittance is like thinking about how much "stuff" (current) will flow if you apply a certain amount of "force" (voltage). In some situations, the second perspective is more convenient.

### Admittance of Basic Elements

Let's look at the admittance of our fundamental circuit components:

*   **Resistor ($R$)**:
    The impedance of a resistor is $Z_R = R$.
    Therefore, its admittance is $Y_R = \frac{1}{Z_R} = \frac{1}{R}$.
    This is our familiar conductance, $G = 1/R$. For a resistor, $X=0$, so $Y_R = \frac{R}{R^2+0^2} = \frac{R}{R^2} = \frac{1}{R}$. No imaginary part here, as expected!

*   **Capacitor ($C$)**:
    The impedance of a capacitor is $Z_C = \frac{1}{j\omega C}$.
    Therefore, its admittance is $Y_C = \frac{1}{Z_C} = \frac{1}{1/(j\omega C)} = j\omega C$.
    Here, the conductance $G = 0$ and the susceptance $B = \omega C$. This means a capacitor *conducts* or *passes* AC current more easily as the frequency increases. This makes intuitive sense – think of a capacitor as a "blocker" of DC, but the higher the frequency, the less it blocks. The term $j\omega C$ captures this behavior.

*   **Inductor ($L$)**:
    The impedance of an inductor is $Z_L = j\omega L$.
    Therefore, its admittance is $Y_L = \frac{1}{Z_L} = \frac{1}{j\omega L}$.
    To make this cleaner, we multiply by $j/j$:
    $$Y_L = \frac{1}{j\omega L} \times \frac{j}{j} = \frac{j}{j^2\omega L} = \frac{j}{-\omega L} = -j\frac{1}{\omega L}$$
    Here, the conductance $G = 0$ and the susceptance $B = -\frac{1}{\omega L}$. The negative susceptance for an inductor is important. An inductor "conducts" AC current less easily as the frequency increases. This also makes sense – inductors oppose changes in current, and at higher frequencies, the current is changing more rapidly.

**Summary of Basic Admittances:**
*   Resistor: $Y_R = G = 1/R$
*   Capacitor: $Y_C = j\omega C = G + jB$ (where $G=0$, $B=\omega C$)
*   Inductor: $Y_L = -j\frac{1}{\omega L} = G + jB$ (where $G=0$, $B=-1/(\omega L)$)

### Admittance in Series and Parallel Combinations

Just like impedance, admittance simplifies when dealing with parallel and series combinations, but in a slightly different way.

*   **Elements in Parallel:**
    Imagine three components with admittances $Y_1$, $Y_2$, and $Y_3$ connected in parallel. The total admittance $Y_{total}$ is simply the sum of individual admittances.
    $$Y_{total} = Y_1 + Y_2 + Y_3$$
    This is analogous to how conductances add in parallel in DC circuits ($G_{total} = G_1 + G_2 + G_3$). It makes sense because if you have multiple pathways for current to flow, the total ease of flow is the sum of the ease of flow through each path.
    Think of it like water pipes. If you have three pipes of different widths connected to a source, the total amount of water you can get out is the sum of the amounts from each pipe. Admittance is like the "width" of the current pathway.

*   **Elements in Series:**
    This is where admittance behaves differently from impedance. For elements in series, we cannot simply add admittances. Instead, we must use the reciprocal relationship. If we have elements with admittances $Y_1$, $Y_2$, and $Y_3$ in series, their equivalent impedance $Z_{eq}$ is the sum of their individual impedances: $Z_{eq} = Z_1 + Z_2 + Z_3$.
    Since $Z = 1/Y$, we have:
    $$Z_{eq} = \frac{1}{Y_1} + \frac{1}{Y_2} + \frac{1}{Y_3}$$
    The total admittance $Y_{total}$ is then the reciprocal of the equivalent impedance:
    $$Y_{total} = \frac{1}{Z_{eq}} = \frac{1}{\frac{1}{Y_1} + \frac{1}{Y_2} + \frac{1}{Y_3}}$$
    This is the general formula for series admittances. For just two elements in series with admittances $Y_1$ and $Y_2$:
    $$Y_{total} = \frac{1}{\frac{1}{Y_1} + \frac{1}{Y_2}} = \frac{1}{\frac{Y_2 + Y_1}{Y_1 Y_2}} = \frac{Y_1 Y_2}{Y_1 + Y_2}$$
    This form is very similar to the product-over-sum formula for two resistors in parallel. So, remember: *admittances add in parallel, and their reciprocals add in series*.

### Example: A Parallel-Series Combination

Let's put this into practice. Consider a circuit with a resistor $R=10 \Omega$, a capacitor $C=0.1 F$, and an inductor $L=0.2 H$, all connected in series, and this entire series combination is connected to a voltage source of $V(t) = 10 \cos(5t) V$. We want to find the total admittance of the series combination.

First, let's find the angular frequency $\omega$. From $V(t) = 10 \cos(5t) V$, we have $\omega = 5$ rad/s.

Now, let's find the admittances of each component:
*   Resistor: $Y_R = \frac{1}{R} = \frac{1}{10} = 0.1$ S. (This is pure conductance, $G_R = 0.1$, $B_R = 0$).
*   Capacitor: $Y_C = j\omega C = j(5)(0.1) = j0.5$ S. (This is pure susceptance, $G_C = 0$, $B_C = 0.5$).
*   Inductor: $Y_L = -j\frac{1}{\omega L} = -j\frac{1}{(5)(0.2)} = -j\frac{1}{1} = -j1$ S. (This is pure susceptance, $G_L = 0$, $B_L = -1$).

These three are in series. To find the total admittance of the series combination, we use the formula:
$$Y_{series} = \frac{1}{\frac{1}{Y_R} + \frac{1}{Y_C} + \frac{1}{Y_L}}$$
We already know the impedances:
*   $Z_R = R = 10 \Omega$
*   $Z_C = \frac{1}{j\omega C} = \frac{1}{j0.5} = \frac{-j}{0.5} = -j2 \Omega$
*   $Z_L = j\omega L = j(5)(0.2) = j1 \Omega$

So, the total impedance is:
$Z_{series} = Z_R + Z_C + Z_L = 10 - j2 + j1 = 10 - j1 \Omega$.

Now, the total admittance is the reciprocal of this impedance:
$$Y_{series} = \frac{1}{Z_{series}} = \frac{1}{10 - j1}$$
To express this in $G+jB$ form:
$$Y_{series} = \frac{1}{10 - j1} \times \frac{10 + j1}{10 + j1} = \frac{10 + j1}{10^2 + (-1)^2} = \frac{10 + j1}{100 + 1} = \frac{10}{101} + j\frac{1}{101}$$
$$Y_{series} \approx 0.099 + j0.0099 \text{ S}$$
So, the conductance of this series combination is $G = 10/101$ S, and the susceptance is $B = 1/101$ S.

This calculation gives us the equivalent admittance of the entire series block. If this block were then connected in parallel with another component, say with admittance $Y_2$, the total admittance of that parallel combination would be $Y_{total} = Y_{series} + Y_2$.

### Admittance Parameter ($y$-parameters) for Two-Port Networks

Now, let's touch upon how admittance is crucial for characterizing two-port networks, linking directly to **CO4**. A two-port network is essentially a circuit block with two distinct pairs of terminals: an input port and an output port. We represent the relationships between the voltages and currents at these ports using various parameter sets. The **admittance parameters**, or $y$-parameters, are one such set.

For a two-port network, the $y$-parameter equations are:
$$I_1 = y_{11}V_1 + y_{12}V_2$$
$$I_2 = y_{21}V_1 + y_{22}V_2$$

Here, $I_1$ and $I_2$ are the currents entering the input and output ports respectively, and $V_1$ and $V_2$ are the voltages at the input and output ports.

The coefficients $y_{11}, y_{12}, y_{21}, y_{22}$ are the $y$-parameters. How are they defined? By setting one of the port voltages to zero (short-circuiting the port).

*   **$y_{11}$**: When $V_2 = 0$ (output port is short-circuited), $I_1 = y_{11}V_1$. Therefore, $y_{11} = \frac{I_1}{V_1}|_{V_2=0}$. This is the **input admittance** when the output is short-circuited.
*   **$y_{21}$**: When $V_2 = 0$, $I_2 = y_{21}V_1$. Therefore, $y_{21} = \frac{I_2}{V_1}|_{V_2=0}$. This is the **forward transfer admittance**.
*   **$y_{12}$**: When $V_1 = 0$ (input port is short-circuited), $I_1 = y_{12}V_2$. Therefore, $y_{12} = \frac{I_1}{V_2}|_{V_1=0}$. This is the **reverse transfer admittance**.
*   **$y_{22}$**: When $V_1 = 0$, $I_2 = y_{22}V_2$. Therefore, $y_{22} = \frac{I_2}{V_2}|_{V_1=0}$. This is the **output admittance** when the input is short-circuited.

You can see how the term "admittance" is used here. $y_{11}$ and $y_{22}$ are literally admittances measured under specific conditions. Calculating these parameters often involves applying nodal analysis (linking to **CO1**) or using other network simplification techniques.

**Why use $y$-parameters?** They are particularly useful for analyzing circuits where voltages are easily controlled or measured, and currents are the outputs, or when the loads are predominantly short-circuited. They are also convenient when dealing with parallel-connected two-port networks.

### Frequency Domain and Network Functions

Our discussion on admittance, especially with terms like $\omega C$ and $1/(\omega L)$, highlights its role in the **frequency domain**. This is directly relevant to **CO3** (transient behavior using Laplace transforms) and **CO4** (network functions).

In the Laplace domain, impedance becomes $Z(s) = sL$ for an inductor and $Z(s) = 1/(sC)$ for a capacitor, where $s = \sigma + j\omega$. Admittance then becomes $Y(s) = 1/Z(s)$.
*   $Y_L(s) = 1/(sL)$
*   $Y_C(s) = sC$

These $Y(s)$ functions are crucial for defining network functions, such as the transfer function or input/output impedance/admittance in the $s$-domain. For instance, the input admittance of a circuit in the Laplace domain would be $Y_{in}(s) = I_1(s)/V_1(s)$ under certain conditions. Analyzing circuits with Laplace transforms allows us to capture both transient and steady-state responses, unifying our understanding of circuit behavior.

### Common Pitfalls and Exam Tips

*   **Confusing Admittance with Conductance:** Remember that in AC circuits, the real part of admittance is conductance ($G$), and it's NOT always $1/R$. Only for a pure resistor is $Y = 1/R$. For general impedances ($R+jX$), $G = R/(R^2+X^2)$.
*   **Series/Parallel Combinations:** Be very careful with series and parallel combinations of admittances. Admittances add in parallel, but their reciprocals add in series. It's often easier to convert admittances to impedances for series combinations and then take the reciprocal.
*   **Units:** Always keep track of units (Siemens for admittance, Ohms for impedance, Farads for capacitance, Henries for inductance, Hz for frequency).
*   **Complex Conjugate:** When calculating $Y = 1/Z$ in the form $G+jB$, remember to use the complex conjugate correctly.
*   **Two-Port Networks:** When calculating $y$-parameters, ensure you are short-circuiting the correct port and correctly identifying the current and voltage ratios.

### Recap

Admittance ($Y$) is the reciprocal of impedance ($Z$), representing the ease of current flow.
$Y = 1/Z = G + jB$, where $G$ is conductance and $B$ is susceptance.
Admittances of basic elements: $Y_R = 1/R$, $Y_C = j\omega C$, $Y_L = -j/(\omega L)$.
Admittances add in parallel.
Reciprocals of admittances add in series.
Admittance parameters ($y$-parameters) are fundamental for characterizing two-port networks, defined with short-circuited ports.
Admittance concepts are vital for network functions and frequency-domain analysis using Laplace transforms.

---

## Sample Questions with Answers

**Q1. A series combination of a 10 $\Omega$ resistor and a capacitor of $0.04$ F is connected to a sinusoidal voltage source of $100 \angle 0^\circ$ V at a frequency of $50$ Hz. Calculate the admittance of this series combination.**

**Answer:**
First, calculate the angular frequency: $\omega = 2\pi f = 2\pi (50) = 100\pi$ rad/s.

Calculate the impedance of each component:
*   Resistor: $Z_R = R = 10 \Omega$.
*   Capacitor: $Z_C = \frac{1}{j\omega C} = \frac{1}{j(100\pi)(0.04)} = \frac{1}{j4\pi} = -j\frac{1}{4\pi} \Omega$.

The total impedance of the series combination is:
$Z_{series} = Z_R + Z_C = 10 - j\frac{1}{4\pi} \Omega$.

The admittance is the reciprocal of the impedance:
$Y_{series} = \frac{1}{Z_{series}} = \frac{1}{10 - j\frac{1}{4\pi}}$.

To express this in $G+jB$ form, multiply by the complex conjugate:
$Y_{series} = \frac{1}{10 - j\frac{1}{4\pi}} \times \frac{10 + j\frac{1}{4\pi}}{10 + j\frac{1}{4\pi}} = \frac{10 + j\frac{1}{4\pi}}{10^2 + (\frac{1}{4\pi})^2}$
$Y_{series} = \frac{10}{100 + \frac{1}{16\pi^2}} + j\frac{\frac{1}{4\pi}}{100 + \frac{1}{16\pi^2}}$.

Let's approximate $1/(4\pi) \approx 1/(12.566) \approx 0.07958$.
$Z_{series} \approx 10 - j0.07958 \Omega$.
$Y_{series} \approx \frac{1}{10 - j0.07958} \approx \frac{10 + j0.07958}{100 + 0.00633} \approx \frac{10 + j0.07958}{100.00633}$
$Y_{series} \approx 0.09999 + j0.0007957$ S.

So, $G \approx 0.09999$ S and $B \approx 0.0007957$ S.

**Q2. Explain why admittance parameters ($y$-parameters) are often preferred for analyzing parallel-connected two-port networks.**

**Answer:**
Two-port networks are characterized by parameters like $z$-parameters (impedance parameters), $h$-parameters (hybrid parameters), and $y$-parameters (admittance parameters). The $y$-parameters are defined using input and output currents ($I_1, I_2$) in terms of input and output voltages ($V_1, V_2$):
$I_1 = y_{11}V_1 + y_{12}V_2$
$I_2 = y_{21}V_1 + y_{22}V_2$

When two-port networks are connected in parallel, the total voltage across each network is the same ($V_1$ and $V_2$ are the same for all parallel components). The total current entering the parallel combination is the sum of the currents entering each individual network.

Let's say we have two networks, Network A and Network B, connected in parallel.
For Network A: $I_{1A} = y_{11A}V_1 + y_{12A}V_2$ and $I_{2A} = y_{21A}V_1 + y_{22A}V_2$.
For Network B: $I_{1B} = y_{11B}V_1 + y_{12B}V_2$ and $I_{2B} = y_{21B}V_1 + y_{22B}V_2$.

The total input current $I_1 = I_{1A} + I_{1B}$ and total output current $I_2 = I_{2A} + I_{2B}$.
Summing the equations for $I_1$:
$I_1 = (y_{11A}V_1 + y_{12A}V_2) + (y_{11B}V_1 + y_{12B}V_2)$
$I_1 = (y_{11A} + y_{11B})V_1 + (y_{12A} + y_{12B})V_2$
$I_1 = y_{11,total}V_1 + y_{12,total}V_2$

This shows that the $y$-parameters of the combined parallel network are simply the sum of the $y$-parameters of the individual networks ($y_{11,total} = y_{11A} + y_{11B}$, $y_{12,total} = y_{12A} + y_{12B}$). This is a very straightforward way to combine networks. Other parameter sets do not combine as simply when networks are connected in parallel. For example, $z$-parameters add in series, not parallel. This ease of combination makes $y$-parameters very convenient for analysis of parallel interconnections.

**Q3. If the admittance of a circuit element is $Y = 0.05 - j0.2$ S, what is its impedance?**

**Answer:**
The impedance ($Z$) is the reciprocal of the admittance ($Y$):
$Z = \frac{1}{Y} = \frac{1}{0.05 - j0.2}$ S$^{-1}$

To find the impedance in the form $R+jX$, we multiply the numerator and denominator by the complex conjugate of the denominator:
$Z = \frac{1}{0.05 - j0.2} \times \frac{0.05 + j0.2}{0.05 + j0.2}$
$Z = \frac{0.05 + j0.2}{(0.05)^2 + (-0.2)^2}$
$Z = \frac{0.05 + j0.2}{0.0025 + 0.04}$
$Z = \frac{0.05 + j0.2}{0.0425}$

Now, separate into real and imaginary parts:
$Z = \frac{0.05}{0.0425} + j\frac{0.2}{0.0425}$
$Z \approx 1.176 + j4.706 \Omega$.

So, the impedance is approximately $1.176 + j4.706 \Omega$. This means the element has a resistance of about $1.176 \Omega$ and a positive reactance (indicating it behaves like an inductor at this frequency) of about $4.706 \Omega$.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
