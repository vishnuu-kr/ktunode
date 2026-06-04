---
title: "Current and Voltage Division Rule - Relative potential Capacitors & Inductors: V-I relations and Energy stored. Ohms Law and Kirchhoff's laws - numerical problems."
subject: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING"
module: "Module 1: Elementary concepts of DC electric circuits:"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f949e"
status: "completed"
scrapedAt: "2026-05-23T16:02:22.848Z"
---
# Module 1: Elementary Concepts of DC Electric Circuits

Welcome, everyone, to our exciting journey into the world of Electrical and Electronics Engineering! This first module is all about building a strong foundation, and today we're diving deep into the absolute basics of DC electric circuits. Think of this as learning the alphabet before you can write a novel. We'll be covering some fundamental laws and concepts that are crucial for everything we'll do later in this course and indeed, throughout your engineering career.

Our learning objectives for this session are to understand and apply Ohm's Law and Kirchhoff's Laws, explore the concepts of voltage and current division, and get introduced to capacitors and inductors, specifically their voltage-current relationships and how they store energy. These are all key building blocks, and you'll see how they directly link to our Course Outcome 1: "Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits" (Knowledge Level K2 – Understanding).

Let's get started!

## 1. Ohm's Law: The Bedrock of Circuit Analysis

When we talk about electricity, the very first thing that comes to mind for many is Ohm's Law. It's named after the German physicist Georg Simon Ohm, and it describes the relationship between voltage, current, and resistance in a circuit. It’s incredibly simple, yet profoundly powerful.

Imagine water flowing through a pipe. The **voltage** is like the water pressure – it's what *pushes* the water. The **current** is like the flow rate – how much water is actually moving through the pipe per second. And **resistance**? That's like the narrowness or any obstructions in the pipe that hinder the water flow.

Ohm's Law states that **the current flowing through a conductor is directly proportional to the voltage across its ends, provided all physical conditions (like temperature) remain constant.**

Mathematically, we express this as:

$V = I \times R$

Where:
*   $V$ is the **Voltage** (measured in Volts, V), the electrical potential difference.
*   $I$ is the **Current** (measured in Amperes, A), the flow of electric charge.
*   $R$ is the **Resistance** (measured in Ohms, $\Omega$), the opposition to current flow.

From this basic formula, we can rearrange it to find current or resistance:

$I = \frac{V}{R}$
$R = \frac{V}{I}$

**Why is this so important?** Ohm's Law helps us determine how much current will flow if we know the voltage and resistance, or how much voltage is needed to drive a certain current through a resistor. It's the foundation for calculating power in circuits too ($P = V \times I = I^2R = \frac{V^2}{R}$).

**Remember this:** If you double the voltage across a resistor, the current through it doubles. If you double the resistance, the current halves (assuming voltage stays the same). It’s a direct and inverse relationship!

### Numerical Problem Illustration (Ohm's Law)

Let’s say you have a simple circuit with a 12V battery connected to a 4$\Omega$ resistor. How much current flows through the resistor?

Using Ohm's Law, $I = \frac{V}{R} = \frac{12V}{4\Omega} = 3A$. Simple as that!

Now, what if we wanted to limit the current to 0.5A using the same 12V battery? What resistance would we need?

$R = \frac{V}{I} = \frac{12V}{0.5A} = 24\Omega$. So, we'd need a 24$\Omega$ resistor.

## 2. Kirchhoff's Laws: Handling Complex Circuits

While Ohm's Law is great for simple circuits, most real-world circuits are more complex, involving multiple components and connections. That's where **Kirchhoff's Laws** come in. These laws, formulated by Gustav Kirchhoff, are essential for analyzing circuits that cannot be simplified using just Ohm's Law. They are based on fundamental principles of conservation of charge and energy.

### 2.1 Kirchhoff's Current Law (KCL) - The Current Junction Rule

Imagine a junction in a road network where multiple roads meet. KCL is like saying that the total number of cars arriving at the intersection must equal the total number of cars leaving it. No cars are created or destroyed at the junction itself.

Kirchhoff's Current Law states that **the algebraic sum of currents entering a node (or junction) is equal to the algebraic sum of currents leaving the node.**

Mathematically, at any node:

$\sum_{\text{incoming}} I = \sum_{\text{outgoing}} I$

Or, if we consider currents entering a node as positive and leaving as negative (or vice-versa):

$\sum I_{\text{at a node}} = 0$

**Let's visualize this:** Suppose at a junction (node), three wires are connected.
*   Wire 1 has a current $I_1$ flowing into the junction.
*   Wire 2 has a current $I_2$ flowing away from the junction.
*   Wire 3 has a current $I_3$ flowing into the junction.

According to KCL: $I_1 + I_3 = I_2$.

**Why is this a key concept?** KCL ensures that charge is conserved. Charge doesn't build up or disappear at a connection point. This law is fundamental for analyzing how current divides and flows in parallel branches. It directly supports CO1 as it helps us understand current distribution in complex DC circuits.

### 2.2 Kirchhoff's Voltage Law (KVL) - The Loop Rule

Now, let's think about a closed loop, like a race track. KVL is about energy. It states that **the algebraic sum of all the voltage drops and rises around any closed loop or mesh in a circuit is equal to zero.**

Think of it like climbing up and down hills on a bicycle. If you start at a certain elevation and complete a full circuit, returning to your starting point, the total "up" you climbed must equal the total "down" you descended.

Mathematically, for any closed loop:

$\sum V = 0$

Where $V$ represents voltage drops (usually across resistors in the direction of current) and voltage rises (usually across sources like batteries).

**How do we apply this?**
1.  Choose a closed loop in the circuit.
2.  Assign a direction of traversal (clockwise or counter-clockwise).
3.  As you traverse the loop:
    *   If you pass through a voltage source from negative to positive, it's a voltage rise (+V).
    *   If you pass through a voltage source from positive to negative, it's a voltage drop (-V).
    *   If you pass through a resistor in the same direction as the assumed current, it's a voltage drop ($-\text{I} \times \text{R}$).
    *   If you pass through a resistor in the opposite direction of the assumed current, it's a voltage rise ($+\text{I} \times \text{R}$).
4.  Sum all these voltage changes and set them to zero.

**Why is KVL essential?** KVL is based on the conservation of energy. The total energy gained by charges from voltage sources must be dissipated in the circuit elements (like resistors) as they complete a loop. This law is crucial for calculating voltages across different components in series or complex networks, again supporting CO1.

### Numerical Problem Illustration (Kirchhoff's Laws)

Consider a circuit with a 10V battery and two resistors, $R_1 = 3\Omega$ and $R_2 = 7\Omega$, connected in series.

*   **Using Ohm's Law:** Total resistance $R_{total} = R_1 + R_2 = 3\Omega + 7\Omega = 10\Omega$.
    Current $I = \frac{V}{R_{total}} = \frac{10V}{10\Omega} = 1A$.
    Voltage drop across $R_1$, $V_1 = I \times R_1 = 1A \times 3\Omega = 3V$.
    Voltage drop across $R_2$, $V_2 = I \times R_2 = 1A \times 7\Omega = 7V$.
    Check with KVL: Sum of voltage drops $= V_1 + V_2 = 3V + 7V = 10V$. This equals the source voltage, so it's consistent.

*   **Using KVL directly (without calculating current first):**
    Let's traverse the loop clockwise. Assume current $I$ flows clockwise.
    $+10V$ (voltage rise from - to + of the battery)
    $-I \times R_1$ (voltage drop across $R_1$ in the direction of current)
    $-I \times R_2$ (voltage drop across $R_2$ in the direction of current)
    So, $10V - I \times R_1 - I \times R_2 = 0$
    $10V = I(R_1 + R_2)$
    $10V = I(3\Omega + 7\Omega)$
    $10V = I(10\Omega)$
    $I = \frac{10V}{10\Omega} = 1A$. This confirms our Ohm's Law calculation.

Now consider a slightly more complex scenario with two loops, as often found in textbooks like Kothari & Nagrath. Imagine two loops where currents $I_1$ and $I_2$ are flowing. At a junction where $I_1$ enters, $I_2$ leaves, and another current $I_3$ leaves, KCL would be $I_1 = I_2 + I_3$. Then, KVL can be applied to each loop to write equations involving these currents and the voltage sources and resistances. This is the core of solving circuits using mesh analysis or nodal analysis, directly linking to CO1.

## 3. Voltage and Current Division Rule: Shortcuts for Simple Cases

When we have resistors connected in **series**, the same current flows through all of them. If we need to know the voltage drop across a particular resistor in a series chain, we can use **Voltage Division**. Similarly, when resistors are connected in **parallel**, the voltage across them is the same. If we need to know how the total current splits into different parallel branches, we use **Current Division**. These are powerful shortcuts that, when applied correctly, can save a lot of time.

### 3.1 Voltage Division Rule (for Series Resistors)

Consider a series combination of resistors $R_1, R_2, \dots, R_n$ connected to a voltage source $V$. The total resistance is $R_{total} = R_1 + R_2 + \dots + R_n$. The total current is $I = \frac{V}{R_{total}}$.

The voltage drop across any resistor $R_k$ in this series chain is $V_k = I \times R_k$.
Substituting $I$, we get $V_k = \frac{V}{R_{total}} \times R_k$.

This gives us the **Voltage Division Rule**:

$V_k = V \times \frac{R_k}{R_{total}} = V \times \frac{R_k}{R_1 + R_2 + \dots + R_n}$

In simpler terms, the voltage across a specific resistor in a series combination is the total voltage multiplied by the ratio of that resistor's value to the total resistance of the series combination.

**Analogy:** Imagine distributing a bag of candy (total voltage) among friends (resistors) lined up. The friend with the "biggest share" of the line (largest resistance relative to others) gets a proportionally larger portion of the candy.

**Important Note:** The voltage division rule *only* applies to components connected in **series**.

### 3.2 Current Division Rule (for Parallel Resistors)

Consider a parallel combination of resistors $R_1, R_2, \dots, R_n$. The voltage across all these parallel branches is the same, let's call it $V_p$. The total current entering this parallel combination is $I_{total}$.

The current through any resistor $R_k$ in this parallel combination is $I_k = \frac{V_p}{R_k}$.

For a simple case of two resistors $R_1$ and $R_2$ in parallel, connected to a total current $I_{total}$.
The voltage across them is $V_p = I_{total} \times R_{eq}$, where $R_{eq} = \frac{R_1 R_2}{R_1 + R_2}$.
So, $I_1 = \frac{V_p}{R_1} = \frac{I_{total} \times R_{eq}}{R_1} = \frac{I_{total} \times (\frac{R_1 R_2}{R_1 + R_2})}{R_1} = I_{total} \times \frac{R_2}{R_1 + R_2}$.

Similarly, $I_2 = I_{total} \times \frac{R_1}{R_1 + R_2}$.

This leads to the **Current Division Rule** for two parallel resistors:

$I_k = I_{total} \times \frac{R_{\text{opposite}}}{R_1 + R_2}$

Where $I_k$ is the current through one resistor, and $R_{\text{opposite}}$ is the value of the *other* resistor in the parallel pair.

**Generalization for n parallel resistors:** The current through $R_k$ is:

$I_k = I_{total} \times \frac{1/R_k}{1/R_1 + 1/R_2 + \dots + 1/R_n}$

This can also be written using conductance ($G = 1/R$):

$I_k = I_{total} \times \frac{G_k}{G_1 + G_2 + \dots + G_n}$

**Analogy:** Imagine a river (total current) splitting into several channels (parallel resistors). The wider, less obstructed channels will carry more water. The current division rule helps us calculate how much water goes down each channel.

**Key takeaway:** The current through a resistor in a parallel combination is inversely proportional to its resistance (or directly proportional to its conductance). The resistor with lower resistance gets more current. This is the opposite of voltage division.

### Numerical Problem Illustration (Voltage & Current Division)

**Voltage Division:**
Consider a 9V battery connected to three resistors in series: $R_1 = 1\Omega$, $R_2 = 2\Omega$, $R_3 = 3\Omega$.
Total resistance $R_{total} = 1 + 2 + 3 = 6\Omega$.
Voltage across $R_1$: $V_1 = 9V \times \frac{1\Omega}{6\Omega} = 9V \times \frac{1}{6} = 1.5V$.
Voltage across $R_2$: $V_2 = 9V \times \frac{2\Omega}{6\Omega} = 9V \times \frac{2}{6} = 3V$.
Voltage across $R_3$: $V_3 = 9V \times \frac{3\Omega}{6\Omega} = 9V \times \frac{3}{6} = 4.5V$.
Check: $1.5V + 3V + 4.5V = 9V$. Correct!

**Current Division:**
Suppose a total current of 5A enters a parallel combination of $R_1 = 10\Omega$ and $R_2 = 15\Omega$.
Current through $R_1$: $I_1 = 5A \times \frac{15\Omega}{10\Omega + 15\Omega} = 5A \times \frac{15}{25} = 5A \times 0.6 = 3A$.
Current through $R_2$: $I_2 = 5A \times \frac{10\Omega}{10\Omega + 15\Omega} = 5A \times \frac{10}{25} = 5A \times 0.4 = 2A$.
Check: $3A + 2A = 5A$. Correct!

These rules are extremely useful and directly help us solve circuit problems, fulfilling CO1.

## 4. Capacitors and Inductors: Storing Energy

So far, we've focused on resistors, which dissipate energy as heat. Now, let's introduce two fundamental components that store energy: **Capacitors** and **Inductors**. These are absolutely critical for understanding how electronic circuits work, especially when dealing with changing currents and voltages (AC circuits, which we'll touch upon later, but their DC behavior is a great starting point). These concepts are vital for CO1 and CO4 (describing fundamental concepts of electronic components).

### 4.1 Capacitors: The Charge Stores

A capacitor is essentially two conductive plates separated by an insulating material called a dielectric. Its primary function is to store electrical energy in an electric field.

*   **Symbol:** Two parallel lines (or one straight and one curved line).
*   **Unit:** Farad (F). Typically, we use microfarads ($\mu$F) or picofarads (pF) because a Farad is a very large unit.

#### Voltage-Current (V-I) Relation

When a voltage $v(t)$ is applied across a capacitor $C$, it causes charge $q(t)$ to accumulate on its plates. The relationship between charge and voltage is:

$q(t) = C \times v(t)$

Current is the rate of flow of charge, so $i(t) = \frac{dq(t)}{dt}$.
Substituting the first equation into the second:

$i(t) = \frac{d}{dt} (C \times v(t)) = C \frac{dv(t)}{dt}$

So, the current through a capacitor is directly proportional to the capacitance and the *rate of change* of the voltage across it.

**What does this mean for DC circuits?**
In a DC circuit, once a capacitor is fully charged, the voltage across it becomes constant. If the voltage is constant, its rate of change ($\frac{dv}{dt}$) is zero. Therefore, for a constant DC voltage, **the current through a capacitor is zero**. This is why a capacitor acts like an **open circuit** to steady DC voltage.

From the V-I relation, we can also express voltage in terms of current:

$v(t) = \frac{1}{C} \int i(t) dt + v(0)$

This shows that the voltage across a capacitor cannot change instantaneously. It takes time for charge to build up, so voltage changes smoothly.

#### Energy Stored

The energy stored in a capacitor is the work done in charging it. This energy is stored in the electric field between the plates.

Energy $W_C(t) = \frac{1}{2} C v(t)^2$

We can also express this in terms of charge and current:
$W_C(t) = \frac{1}{2} q(t) v(t) = \frac{1}{2} \frac{q(t)^2}{C}$

**Analogy:** Think of a capacitor like a rechargeable battery, but one that can charge and discharge much faster. When you apply voltage, you're "pushing" charge onto the plates, like pushing water into a flexible container. The container expands, storing potential energy.

### 4.2 Inductors: The Magnetic Field Stores

An inductor is typically a coil of wire, often wrapped around a magnetic core. Its primary function is to store electrical energy in a magnetic field.

*   **Symbol:** A coil or a zig-zag line.
*   **Unit:** Henry (H). Similar to Farads, we often use millihenries (mH) or microhenries ($\mu$H).

#### Voltage-Current (V-I) Relation

When a current $i(t)$ flows through an inductor $L$, it creates a magnetic field. This magnetic field generates a voltage across the inductor that opposes the change in current. This phenomenon is called inductance. The voltage across an inductor is directly proportional to the inductance and the *rate of change* of the current through it.

$v(t) = L \frac{di(t)}{dt}$

**What does this mean for DC circuits?**
In a DC circuit, after a transient period, the current becomes steady (constant). If the current is constant, its rate of change ($\frac{di}{dt}$) is zero. Therefore, for a constant DC current, **the voltage across an inductor is zero**. This is why an inductor acts like a **short circuit** to steady DC current.

From the V-I relation, we can express current in terms of voltage:

$i(t) = \frac{1}{L} \int v(t) dt + i(0)$

This shows that the current through an inductor cannot change instantaneously. It takes time for the magnetic field to build up, so current changes smoothly.

#### Energy Stored

The energy stored in an inductor is in its magnetic field.

Energy $W_L(t) = \frac{1}{2} L i(t)^2$

**Analogy:** Think of an inductor like a spinning flywheel. When you apply a current, you're "spinning it up," and it stores kinetic energy (analogous to magnetic field energy). To stop it or change its speed quickly, you need to apply a force that opposes the change.

### Comparison: Capacitors vs. Inductors

| Feature        | Capacitor                               | Inductor                                  |
| :------------- | :-------------------------------------- | :---------------------------------------- |
| **Stores Energy** | Electric Field                          | Magnetic Field                            |
| **V-I Relation** | $i(t) = C \frac{dv(t)}{dt}$             | $v(t) = L \frac{di(t)}{dt}$               |
| **DC Behavior**  | Open circuit (after charging)           | Short circuit (after steady state)        |
| **Response to Change** | Resists instantaneous voltage change | Resists instantaneous current change      |
| **Analogy**    | Flexible water tank                     | Spinning flywheel                         |

These fundamental concepts of capacitors and inductors, their V-I relationships, and energy storage are crucial for understanding circuit behavior, especially as we move towards AC circuits and more complex electronic systems. They directly tie into CO1 and CO4.

## Summary and Key Takeaways

Today, we've laid a very important groundwork for understanding DC electric circuits. We've covered:

*   **Ohm's Law:** The fundamental relationship between voltage, current, and resistance ($V=IR$). It's the backbone of simple circuit calculations.
*   **Kirchhoff's Laws:**
    *   **KCL (Current Law):** Sum of currents at a node is zero – conservation of charge.
    *   **KVL (Voltage Law):** Sum of voltages around a loop is zero – conservation of energy. These are essential for analyzing any circuit, no matter how complex.
*   **Voltage and Current Division Rules:** Handy shortcuts for calculating voltage across or current through specific components in series or parallel combinations, respectively.
*   **Capacitors and Inductors:** Components that store energy. Capacitors store energy in an electric field and act as open circuits to DC. Inductors store energy in a magnetic field and act as short circuits to DC. Their behavior is dictated by the *rate of change* of voltage/current.

Mastering these concepts is vital. They are directly tested in exams and are the building blocks for almost everything else we will learn. Practice the numerical problems; that's where true understanding solidifies. Remember to check your units and the physical meaning of your answers.

This module sets the stage for understanding how electrical energy is managed and manipulated. Keep practicing, and don't hesitate to ask questions!

---

## Sample Questions and Answers

**Q1. State Ohm's Law and its mathematical representation.**
**Answer:** Ohm's Law states that the current flowing through a conductor is directly proportional to the voltage across its ends and inversely proportional to the resistance, provided the temperature and other physical conditions remain constant.
Mathematical representation: $V = I \times R$, where $V$ is voltage, $I$ is current, and $R$ is resistance.

**Q2. A $12\Omega$ resistor is connected to a $24V$ DC supply. Calculate the current flowing through the resistor.**
**Answer:**
Using Ohm's Law, $I = \frac{V}{R}$.
Given: $V = 24V$, $R = 12\Omega$.
$I = \frac{24V}{12\Omega} = 2A$.
The current flowing through the resistor is 2 Amperes.

**Q3. Explain Kirchhoff's Current Law (KCL) with a simple diagram and equation.**
**Answer:** Kirchhoff's Current Law (KCL) states that the algebraic sum of currents entering any node (junction) in an electrical circuit is equal to the algebraic sum of currents leaving that node. It's based on the principle of conservation of charge.
**Diagram:**
```
      I1 --> Node X <-- I2
             |
             | I3
             V
```
**Equation:** At Node X, $\sum I_{\text{in}} = \sum I_{\text{out}}$.
So, $I_1 + I_3 = I_2$. Alternatively, $I_1 - I_2 + I_3 = 0$.

**Q4. A $10\mu$F capacitor is connected to a DC voltage source. What will be the current through the capacitor after it has been fully charged? Justify your answer.**
**Answer:**
The voltage-current relationship for a capacitor is $i(t) = C \frac{dv(t)}{dt}$.
Once a capacitor is fully charged in a DC circuit, the voltage across it becomes constant. If the voltage $v(t)$ is constant, its rate of change $\frac{dv(t)}{dt}$ is zero.
Therefore, the current $i(t) = C \times 0 = 0A$.
The capacitor acts as an open circuit to steady DC voltage.

**Q5. A $5\Omega$ resistor and a $15\Omega$ resistor are connected in parallel. If the total current entering the parallel combination is $4A$, find the current through the $5\Omega$ resistor.**
**Answer:**
Using the Current Division Rule for two parallel resistors: $I_k = I_{total} \times \frac{R_{\text{opposite}}}{R_1 + R_2}$.
Here, $I_{total} = 4A$, $R_1 = 5\Omega$, $R_2 = 15\Omega$. We want to find the current through $R_1$.
$I_{5\Omega} = 4A \times \frac{15\Omega}{5\Omega + 15\Omega}$
$I_{5\Omega} = 4A \times \frac{15\Omega}{20\Omega}$
$I_{5\Omega} = 4A \times \frac{3}{4}$
$I_{5\Omega} = 3A$.
The current through the $5\Omega$ resistor is 3 Amperes. (The current through $15\Omega$ would be $4A - 3A = 1A$).

**Q6. What is the energy stored in an inductor of $50$ mH when a steady current of $2A$ flows through it?**
**Answer:**
The energy stored in an inductor is given by the formula $W_L(t) = \frac{1}{2} L i(t)^2$.
Given: $L = 50$ mH $= 50 \times 10^{-3}$ H, $i(t) = 2A$.
$W_L = \frac{1}{2} \times (50 \times 10^{-3} H) \times (2A)^2$
$W_L = \frac{1}{2} \times 50 \times 10^{-3} \times 4$ Joules
$W_L = 100 \times 10^{-3}$ Joules
$W_L = 0.1$ Joules.
The energy stored in the inductor is 0.1 Joules.

**Q7. If a voltage of $10V$ is applied across a series combination of $2\Omega$ and $3\Omega$ resistors, what is the voltage across the $3\Omega$ resistor?**
**Answer:**
Using the Voltage Division Rule: $V_k = V \times \frac{R_k}{R_{total}}$.
Here, $V = 10V$, $R_1 = 2\Omega$, $R_2 = 3\Omega$. $R_{total} = R_1 + R_2 = 2\Omega + 3\Omega = 5\Omega$.
We want to find the voltage across $R_2 = 3\Omega$.
$V_{3\Omega} = 10V \times \frac{3\Omega}{5\Omega}$
$V_{3\Omega} = 10V \times \frac{3}{5}$
$V_{3\Omega} = 6V$.
The voltage across the $3\Omega$ resistor is 6 Volts.
