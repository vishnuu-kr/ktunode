---
title: "DC bridges: introduction, sources and detectors-General Equation-Types of bridges: Wheatstone, Kelvin bridge-"
subject: "TRANSDUCERS & MEASUREMENTS"
module: "Module 4: DC bridges: introduction, sources and detectors"
branch: "Civil Engineering"
semester: 2
topicId: "68b54567d74ec52cc09130b9"
status: "completed"
scrapedAt: "2026-05-20T18:38:49.569Z"
---
# TRANSDUCERS & MEASUREMENTS - Module 4: DC Bridges: Introduction, Sources and Detectors

Welcome, everyone, to Module 4 of our Transducers and Measurements course! Today, we're going to dive into the fascinating world of **DC Bridges**. These circuits are fundamental to many measurement applications, especially when we need to accurately determine unknown resistance values. We'll be focusing on their introduction, the essential components like sources and detectors, the general equation that governs their behavior, and then we'll get hands-on with two crucial types: the Wheatstone bridge and the Kelvin bridge.

This module is very important because understanding bridge circuits will directly help us achieve **CO2: Apply the principles and functions of various types of Transducers in measuring systems** and **CO5: Understand and utilize various measurement systems, enhancing their capability to apply theoretical knowledge in practical scenarios**. We're moving beyond just identifying transducers to understanding *how* we use them in practical measurement setups.

## 1. Introduction to DC Bridges: Why Use Them?

Think about measuring resistance. You might have a simple multimeter, right? But what happens when the resistance you need to measure is very small, or when you need extremely high accuracy? This is where bridges come into play.

At its core, a bridge circuit is a clever arrangement of components, typically resistors, arranged in a diamond or quadrilateral shape. The genius lies in its ability to **balance** the unknown quantity against known standards. When the bridge is balanced, certain conditions are met, allowing us to deduce the value of the unknown component.

Why are they so useful?

*   **High Accuracy:** Bridge circuits are known for their precision. By balancing the unknown against known, calibrated components, we can achieve a level of accuracy that's hard to match with simpler methods. This ties into **CO3: Illustrate the working principles of electronic measuring instruments... and choose methods for minimization of the errors**. Bridges are a prime example of minimizing measurement errors.
*   **Sensitivity:** They can be designed to be very sensitive to small changes in resistance, making them ideal for measuring quantities that are indirectly converted into resistance changes (like temperature with a thermistor, or strain with a strain gauge). This directly relates to **CO2** – using transducers to measure physical quantities and then employing bridges to measure the resulting electrical changes.
*   **Versatility:** While we're focusing on DC bridges today, the principle extends to AC bridges for measuring capacitance and inductance, which you'll explore later.

Let's consider an analogy. Imagine you're trying to determine the exact weight of a single grain of rice. Simply putting it on a regular scale won't work. But if you have a balance scale with standard weights, you can add known weights to one side until it perfectly balances the rice on the other. That's the essence of a bridge circuit! You're balancing an unknown against known standards.

## 2. Essential Components of a DC Bridge

Every DC bridge circuit needs three fundamental parts:

### 2.1. The DC Voltage Source

This is our "power supply" for the bridge. It provides the necessary DC voltage to drive current through the bridge network.

*   **What it does:** It establishes the potential difference across the bridge arms, allowing current to flow.
*   **Key characteristics:**
    *   **Stability:** The source voltage must be very stable. If the voltage fluctuates, it will directly affect the balance condition and lead to inaccurate readings. Imagine if the weight on your balance scale kept changing – you'd never find the true weight of the rice!
    *   **Low Internal Resistance:** Ideally, the source should have very low internal resistance. A high internal resistance can act as a series resistance in the bridge, altering the current distribution and affecting accuracy, especially when measuring low resistances.
*   **Common sources:**
    *   **Batteries:** Standard dry cells or rechargeable batteries can be used for simple setups.
    *   **DC Power Supplies:** Regulated DC power supplies offer better stability and are preferred for precise measurements.

### 2.2. The Bridge Arms (Resistors)

These are the core of the bridge circuit. They are typically precision resistors.

*   **The Unknown Resistor (Rx):** This is the component whose resistance we want to determine.
*   **Known Resistors:** These are calibrated resistors with known and stable values. They are used to balance the bridge.
    *   **Ratio Arms:** Often, two of the known resistors form a "ratio" (e.g., R1/R2). By adjusting this ratio, we can fine-tune the balance.
    *   **Standard Resistor:** One of the known resistors is often a precisely known, stable standard resistor.

### 2.3. The Detector

This is the component that tells us when the bridge is balanced. It's designed to detect a very small voltage difference (or current).

*   **What it indicates:** When the bridge is balanced, there is no potential difference across the detector's terminals. The detector indicates this "null" or "zero" condition.
*   **Types of Detectors:**
    *   **Galvanometer:** This is a very sensitive ammeter that can detect minute currents. It's the classic detector for DC bridges. A galvanometer will show zero deflection when the current through it is zero, indicating bridge balance. Think of it as a highly sensitive needle that swings to indicate any imbalance.
    *   **High-Impedance Voltmeter:** A sensitive voltmeter with a very high input impedance can also be used. If the input impedance is high enough, it draws negligible current from the bridge, so it essentially measures the voltage difference without significantly disturbing the bridge's balance. This is a more modern approach, especially when dealing with higher impedance bridges.

**Important Note on Detectors:** The sensitivity of the detector directly impacts the accuracy of the measurement. A more sensitive detector allows you to achieve a more precise null point, leading to a more accurate determination of the unknown resistance. This reinforces how understanding and selecting the right components contribute to **CO3** and **CO5**.

## 3. The General Equation of a DC Bridge

Let's set up a generic DC bridge and derive its general equation. This equation is the foundation for all specific bridge types.

Imagine a bridge with four arms, labeled P, Q, R, and S, with an unknown resistance Rx in one of the arms (let's say S). A DC voltage source is connected across one diagonal (say, between points A and C), and a detector is connected across the other diagonal (between points B and D).

```
       A
      / \
     P   Q
    /     \
   B-------D (Detector)
  / \     / \
 R   Rx (S)
/     \
C
  (Source)
```

Let:
*   $V_{AC}$ be the voltage supplied by the DC source.
*   $I_1$ be the current flowing from A to B.
*   $I_2$ be the current flowing from A to D.
*   $R_P$, $R_Q$, $R_R$, $R_S$ be the resistances of the arms P, Q, R, and S respectively.
*   $V_B$ be the potential at point B.
*   $V_D$ be the potential at point D.

The detector is connected between points B and D. For the bridge to be balanced, the voltage at point B must be equal to the voltage at point D, i.e., $V_B = V_D$. This means the voltage difference across the detector, $V_{BD} = V_B - V_D$, must be zero.

Let's express the potentials $V_B$ and $V_D$ in terms of the known quantities and currents.

From the voltage divider rule for the left branch (A-P-C):
$V_B = V_{AC} \times \frac{R_P}{R_P + R_R}$

And for the right branch (A-Q-S, where S is Rx):
$V_D = V_{AC} \times \frac{R_Q}{R_Q + R_S}$

Now, for the bridge to be balanced, $V_B = V_D$. So,
$V_{AC} \times \frac{R_P}{R_P + R_R} = V_{AC} \times \frac{R_Q}{R_Q + R_S}$

We can cancel $V_{AC}$ from both sides (assuming $V_{AC} \neq 0$):
$\frac{R_P}{R_P + R_R} = \frac{R_Q}{R_Q + R_S}$

Now, let's rearrange this equation to solve for $R_S$ (our unknown Rx).
Cross-multiply:
$R_P (R_Q + R_S) = R_Q (R_P + R_R)$
$R_P R_Q + R_P R_S = R_Q R_P + R_Q R_R$

Subtract $R_P R_Q$ from both sides:
$R_P R_S = R_Q R_R$

And finally, solve for $R_S$:
$R_S = \frac{R_Q R_R}{R_P}$

**This is the fundamental balance equation for a DC bridge!**

**Remember this:** For a DC bridge to be balanced, the product of the resistances of opposite arms must be equal. $\mathbf{R_P R_S = R_Q R_R}$.

This equation is crucial for understanding all types of bridges. It tells us that if we know three resistances and the voltage source, we can determine the fourth when the bridge is balanced. This is how we achieve accurate measurements, connecting back to **CO2** and **CO5**.

**Common Pitfall:** Students sometimes get confused about which arms are "opposite." Always visualize the circuit and the points where the source and detector are connected. The arms connected to the same source terminal are in series with each other, forming one side of the bridge, and the arms connected to the other source terminal form the other side. The arms connected between the detector terminals are the ones that matter for the balance condition.

## 4. Types of DC Bridges

Now that we understand the general principle and equation, let's look at two specific, very important DC bridge configurations.

### 4.1. The Wheatstone Bridge

The Wheatstone bridge is perhaps the most common and fundamental DC bridge circuit. It's named after Sir Charles Wheatstone.

**Circuit Diagram:**
The circuit diagram we used in section 3 is the standard Wheatstone bridge.

```
       A
      / \
     R1  R2
    /     \
   B-------D (Detector)
  / \     / \
 R3  Rx
/     \
C
  (Source)
```

Here, P=R1, Q=R2, R=R3, and S=Rx.

**Balance Condition:**
Using our general equation ($R_P R_S = R_Q R_R$), the balance condition for the Wheatstone bridge is:
$\mathbf{R_1 R_x = R_2 R_3}$

Therefore, the unknown resistance $R_x$ is given by:
$\mathbf{R_x = \frac{R_2 R_3}{R_1}}$

**Operation and Usage:**

The Wheatstone bridge is used to measure unknown resistances. The process involves:

1.  **Setting up the bridge:** Connect the unknown resistor ($R_x$) in one arm (say, S). Connect known resistors ($R_1$, $R_2$, $R_3$) in the other three arms. Connect the DC source across A and C, and the detector (galvanometer or sensitive voltmeter) across B and D.
2.  **Adjusting for balance:** One or more of the known resistors ($R_1$, $R_2$, $R_3$) are usually variable. You adjust these variable resistors until the detector shows zero deflection (null). This indicates that the bridge is balanced.
3.  **Calculating the unknown:** Once balanced, you use the balance equation ($R_x = \frac{R_2 R_3}{R_1}$) to calculate the value of $R_x$.

**Example:**
Let's say we have a Wheatstone bridge where:
*   $R_1 = 100 \Omega$ (fixed)
*   $R_2 = 1000 \Omega$ (variable)
*   $R_3 = 500 \Omega$ (fixed)
*   $R_x$ is our unknown.

We adjust $R_2$ until the galvanometer shows zero deflection. Suppose we find that $R_2$ needs to be set to $200 \Omega$ for balance.
Then, $R_x = \frac{R_2 R_3}{R_1} = \frac{200 \Omega \times 500 \Omega}{100 \Omega} = 1000 \Omega$.

**What if the unknown is very small?**

The Wheatstone bridge works well for medium to high resistances. However, it has a significant limitation when measuring **very low resistances** (typically below 1 Ohm).

**The Problem with Low Resistances:**
When $R_x$ is very small, the resistance of the connecting wires and the contact resistances at the terminals become comparable to $R_x$. These unwanted resistances add in series with the actual $R_x$ and the known resistors, introducing significant errors. In our balance equation $R_x = \frac{R_2 R_3}{R_1}$, the $R_x$ on the left should ideally be just the resistance of the component itself. But if we have extra resistance from wires ($R_w$) and contacts ($R_c$), the effective resistance in that arm becomes $R_x + R_w + R_c$. This alters the balance condition.

This is a critical point for exam preparation related to **CO3** (error minimization) and **CO5** (practical application limitations). The Wheatstone bridge's accuracy degrades significantly for low resistance measurements due to lead and contact resistances.

### 4.2. The Kelvin Bridge (Kelvin Double Bridge)

To overcome the limitations of the Wheatstone bridge for low resistance measurements, the Kelvin bridge was developed. It's specifically designed to eliminate or minimize the effects of lead and contact resistances.

**The Core Idea:**
The Kelvin bridge is essentially a modification of the Wheatstone bridge. It introduces an extra pair of resistors and connects the low-resistance unknown in a way that their effect is canceled out.

**Circuit Diagram:**
The Kelvin bridge has a slightly more complex arrangement. Imagine the unknown low resistance $R_x$ and a known low resistance $R_m$ connected in series with the arms of a Wheatstone bridge.

```
       A
      / \
     R1  R2
    /     \
   B-------X-------D (Detector)
  / \     / \     / \
 R3  Rx  Rm  R4
/     \ /     \
C       Y
  (Source)
```

In this diagram:
*   $R_1$, $R_2$, $R_3$ are known (often precision) resistors.
*   $R_x$ is the unknown low resistance.
*   $R_m$ is a known, matched low resistance (often made of the same material and length as $R_x$ to have similar temperature coefficients).
*   $R_4$ is a variable resistor.
*   The DC source is connected between C and A.
*   The detector is connected between B and X. However, a critical part is that the connection point X is between $R_x$ and $R_m$.

Now, there's a second set of ratio arms ($R_2$ and $R_4$) that are used to compensate for the resistance in the connecting link between $R_x$ and $R_m$.

**The "Double" in Kelvin Double Bridge:**
The name "Kelvin Double Bridge" comes from the two sets of ratio arms used.

**Deriving the Balance Condition (Conceptual Explanation):**

To achieve balance, we need $V_B = V_X$. The standard derivation (which you can find in Sawhney or Bell) involves Kirchhoff's laws. However, the key insight is that the balance condition can be achieved when the ratio of the main ratio arms ($R_1/R_2$) is equal to the ratio of the second set of ratio arms ($R_3/R_4$).

When the bridge is balanced, the following condition holds:

$\mathbf{R_x = R_m \frac{R_2}{R_1} + R_3 \left( \frac{R_m}{R_1} - \frac{R_4}{R_2} \right)}$

This looks complicated, but the real magic happens when we choose our components correctly. If we set the ratios such that $\mathbf{\frac{R_1}{R_2} = \frac{R_3}{R_4}}$, then the second term in the equation becomes zero:

$\mathbf{R_x = R_m \frac{R_2}{R_1}}$

This simplified equation is the balance condition for the Kelvin bridge when the ratio arms are matched.

**How it Works to Eliminate Errors:**
The brilliance of the Kelvin bridge is that the extra term in the general equation, $R_3 \left( \frac{R_m}{R_1} - \frac{R_4}{R_2} \right)$, precisely cancels out the voltage drop across the connecting wire between $R_x$ and $R_m$. This wire's resistance ($R_w$) is effectively put in series with $R_m$ from the perspective of the second ratio arms ($R_3, R_4$). When the ratios match, the error term becomes zero.

**Practical Considerations for Kelvin Bridge:**

*   **Matched Ratios:** It's essential to ensure that $R_1/R_2 = R_3/R_4$. Often, $R_1$ and $R_3$ are made equal, and $R_2$ and $R_4$ are made equal, or precision potentiometers are used to set these ratios.
*   **Low Resistance Standard ($R_m$):** $R_m$ is usually a low-resistance standard, often a piece of resistance wire or a standard resistance coil. It's important that $R_m$ is known accurately.
*   **Connecting $R_x$ and $R_m$:** These must be connected with heavy gauge, short wires to minimize their resistance, though the bridge design accounts for it. The terminals where $R_x$ and $R_m$ connect to the main bridge circuit are crucial.

**Example:**
Suppose you want to measure the resistance of a thick copper rod.
*   $R_1 = 100 \Omega$
*   $R_2 = 100 \Omega$
*   $R_3 = 10 \Omega$
*   $R_4$ is adjusted to $10 \Omega$ (to match $R_3/R_2$)
*   $R_m = 0.01 \Omega$ (a known low resistance standard)
*   $R_x$ is the unknown rod resistance.

When the detector shows null, $R_x = R_m \frac{R_2}{R_1} = 0.01 \Omega \times \frac{100 \Omega}{100 \Omega} = 0.01 \Omega$.

This shows how the Kelvin bridge can accurately measure very low resistances like $0.01 \Omega$, something the Wheatstone bridge would struggle with due to its inherent limitations.

**Connecting to Course Outcomes:**
*   **CO1 (Summarize concepts):** You've learned about DC bridges as measurement circuits and their components.
*   **CO2 (Apply principles):** Understanding how the Wheatstone and Kelvin bridges work allows you to apply them to measure unknown resistances, especially low ones.
*   **CO3 (Illustrate working, minimize errors):** We've seen how the Kelvin bridge specifically minimizes lead and contact resistance errors, a crucial aspect of instrument design and application.
*   **CO5 (Understand and utilize systems):** This module provides the foundational knowledge for utilizing these bridges in practical measurement systems for various transducers that output resistance changes.

## Summary of Key Takeaways

*   **DC Bridges:** Circuits used for accurate measurement of unknown resistances by balancing against known standards.
*   **Components:** DC Source (stable, low internal resistance), Bridge Arms (known/variable resistors), Detector (galvanometer or sensitive voltmeter).
*   **General Balance Equation:** Product of opposite arms are equal ($R_P R_S = R_Q R_R$).
*   **Wheatstone Bridge:**
    *   Balance: $R_1 R_x = R_2 R_3$.
    *   $R_x = \frac{R_2 R_3}{R_1}$.
    *   Best for medium to high resistances.
    *   Inaccurate for very low resistances due to lead/contact resistance.
*   **Kelvin Bridge (Double Bridge):**
    *   Designed for accurate measurement of very low resistances.
    *   Minimizes lead/contact resistance errors by using a second set of ratio arms.
    *   Balance (with matched ratios $R_1/R_2 = R_3/R_4$): $R_x = R_m \frac{R_2}{R_1}$.

This module has laid a strong foundation for understanding how we accurately measure electrical quantities. In subsequent modules, we'll see how these principles are applied with different types of transducers.

---

## Sample Questions with Answers

**Conceptual Questions:**

1.  **Question:** What is the primary advantage of using a bridge circuit over a simple ohmmeter for resistance measurement?
    **Answer:** The primary advantage is the higher accuracy and sensitivity achievable with bridge circuits, especially for measuring very small or very large resistances, or when minimizing errors is critical. Bridge circuits achieve this by balancing the unknown against known standards.

2.  **Question:** Explain why the DC source used in a bridge circuit must be stable.
    **Answer:** The stability of the DC source is crucial because the balance condition of the bridge depends on the voltage ratios across its arms. If the source voltage fluctuates, the balance point will shift, leading to an incorrect measurement of the unknown resistance.

3.  **Question:** What type of resistance measurement is the Wheatstone bridge not well-suited for, and why?
    **Answer:** The Wheatstone bridge is not well-suited for measuring very low resistances (typically below 1 $\Omega$). This is because the resistance of connecting wires and contact resistances at the terminals become significant compared to the unknown low resistance, introducing substantial errors that the bridge's basic configuration cannot compensate for.

**Exam-Oriented Questions:**

4.  **Question:** A Wheatstone bridge has arms with resistances $R_1 = 50 \Omega$, $R_2 = 100 \Omega$, and $R_3 = 200 \Omega$. If the bridge is balanced, what is the value of the unknown resistance $R_x$?
    **Answer:**
    The balance condition for a Wheatstone bridge is $R_1 R_x = R_2 R_3$.
    We need to find $R_x$. Rearranging the formula: $R_x = \frac{R_2 R_3}{R_1}$.
    Given values:
    $R_1 = 50 \Omega$
    $R_2 = 100 \Omega$
    $R_3 = 200 \Omega$
    Substituting the values:
    $R_x = \frac{100 \Omega \times 200 \Omega}{50 \Omega} = \frac{20000 \Omega^2}{50 \Omega} = 400 \Omega$.
    Therefore, the unknown resistance $R_x$ is $400 \Omega$.

5.  **Question:** Describe the Kelvin double bridge and explain how it overcomes the limitations of the Wheatstone bridge for measuring low resistances.
    **Answer:**
    The Kelvin double bridge is a modification of the Wheatstone bridge specifically designed for the accurate measurement of very low resistances (less than 1 $\Omega$).
    **How it overcomes limitations:**
    The Wheatstone bridge suffers from errors due to lead and contact resistances when measuring low values. The Kelvin bridge addresses this by using a second set of ratio arms ($R_3$ and $R_4$) and connecting the unknown low resistance ($R_x$) and a known low resistance standard ($R_m$) in a specific configuration.
    The general balance equation for a Kelvin bridge is: $R_x = R_m \frac{R_2}{R_1} + R_3 \left( \frac{R_m}{R_1} - \frac{R_4}{R_2} \right)$.
    By ensuring that the ratios of the two sets of arms are equal, i.e., $\frac{R_1}{R_2} = \frac{R_3}{R_4}$, the second term in the equation becomes zero. This effectively cancels out the voltage drop across the connecting wire between $R_x$ and $R_m$, which is the source of error in the Wheatstone bridge.
    When these ratios are matched, the balance condition simplifies to $R_x = R_m \frac{R_2}{R_1}$, allowing for accurate measurement of $R_x$ even in the presence of significant lead and contact resistances.

6.  **Question:** What is the role of the detector in a DC bridge circuit?
    **Answer:** The detector, typically a sensitive galvanometer or a high-impedance voltmeter, is used to indicate the condition of balance in the DC bridge. When the bridge is balanced, there is no potential difference across the detector's terminals, meaning no current flows through it (or the voltage is zero). The detector shows this "null" or "zero" indication, signaling that the balance condition has been achieved and the unknown resistance can be calculated.

---
