---
title: "Familiarization of rheostats, measurement of potential across resistance elements and introducing the concept of relative potential using a DC circuit."
subject: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP"
module: "Module 7: Familiarization of rheostats, measurement of potential across resistance elements and introducing the concept of relative potential using a DC circuit."
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edefeb4799d95e836d1"
status: "completed"
scrapedAt: "2026-05-20T17:41:39.799Z"
---
# Module 7: Rheostats, Potential Measurement, and Relative Potential in DC Circuits

Welcome, everyone, to our practical session in the Basic Electrical and Electronics Engineering Workshop! Today, we're diving into Module 7, a hands-on exploration that will solidify our understanding of some fundamental electrical concepts. We'll be getting familiar with **rheostats**, learning how to **measure potential across resistance elements**, and crucially, we'll introduce the very important concept of **relative potential** using a simple DC circuit.

This module is designed to bridge the gap between theory and practice, helping you to not only understand these components but also to confidently work with them. As we progress, you'll see how these activities directly contribute to our overall course objectives, particularly in gaining practical familiarity with components (CO2), selecting and operating measuring instruments (CO5), and applying circuit principles (CO6).

---

## 1. Getting Acquainted with Rheostats (CO2)

Let's start with our first key component: the **rheostat**.

### What is a Rheostat?

Think of a rheostat as a variable resistor, but with a specific purpose. While a potentiometer also offers variable resistance, a rheostat is specifically designed to control the *current* flowing through a circuit by changing the *resistance* in the path. It essentially acts like a tap for electricity, allowing us to adjust the flow.

From a construction standpoint, a rheostat typically consists of a resistive wire wound on a ceramic former. This wire forms a fixed resistance. Then, there's a movable contact, often called a wiper or slider, that can move along this resistive wire. By moving this slider, we effectively change the length of the resistive wire through which the current has to flow.

### Types of Rheostats:

While the core principle is the same, you'll encounter a few common types in the workshop:

*   **Wire-wound Rheostats:** These are the most common type we'll be using. They are robust and can handle significant power. The resistive wire is wound around an insulating core, usually ceramic, to dissipate heat effectively.
*   **Carbon Composition Rheostats:** Less common in heavy-duty applications, these use carbon compounds to create resistance.

### How a Rheostat Works in a Circuit:

The crucial aspect of a rheostat for current control is how we connect it. Unlike a potentiometer, where we usually use all three terminals (one end of the resistance, the other end, and the wiper), a rheostat is typically connected using only **two terminals**: one end of the resistive element and the movable wiper.

Imagine you have a long, thin resistive wire. If you connect your circuit to one end of this wire and a point halfway down it (using the slider), the current only flows through half the wire's total resistance. If you move the slider further along, you increase the length of the wire the current travels, thus increasing the resistance. This increase in resistance, according to Ohm's Law ($V=IR$), will decrease the current ($I$) if the voltage ($V$) remains constant.

**Analogy Time:** Think of a long garden hose. The water pressure (voltage) is constant. If you only let water flow through a short section of the hose, it flows easily (low resistance, high flow). If you have to force the water through the entire length of the hose, it's harder, and the flow rate decreases (high resistance, low flow). The slider on the rheostat is like your hand pinching the hose to control the water flow.

**Key takeaway for current control:** By changing the position of the slider on a rheostat connected in series with a load, we can vary the total resistance in the circuit and, consequently, control the current flowing through the load. This is fundamental for applications like dimming lights or controlling the speed of small DC motors.

---

## 2. Measuring Potential Across Resistance Elements (CO5)

Now that we have a variable resistor in the form of a rheostat, we need a way to measure how "much" electrical potential, or voltage, is present across different parts of our circuit. This is where our trusty **voltmeter** comes in.

### Understanding Potential Difference (Voltage):

Voltage is often described as the electrical "pressure" that drives the flow of charge (current). It's the energy per unit charge. When we talk about the potential *across* a resistance element, we're measuring the difference in electrical potential between the two ends of that element.

**Analogy:** Imagine a water pipe with a constriction or a valve in it. Water flows from a higher pressure point to a lower pressure point. The difference in pressure between these two points is analogous to the voltage across the resistor. The greater the pressure difference, the more forcefully the water flows. Similarly, the greater the voltage across a resistor, the more current will flow through it (Ohm's Law again!).

### Using a Voltmeter Correctly:

The most common tool for measuring voltage is a **voltmeter**. It's absolutely crucial to connect a voltmeter **in parallel** with the component across which you want to measure the potential difference.

*   **Why in Parallel?** A voltmeter has a very high internal resistance. If you were to connect it in series, it would act like an open circuit, blocking the flow of current and giving you incorrect readings for both voltage and current. By connecting it in parallel, the voltmeter offers a very high resistance path, so most of the current continues to flow through the component you're interested in, while a tiny, negligible amount flows through the voltmeter. This allows the voltmeter to accurately "sample" the potential difference without significantly disturbing the circuit's operation.

**Connecting a Voltmeter:** You'll have two probes on your voltmeter (usually red for positive and black for negative). To measure the voltage across a resistor, connect the red probe to one end of the resistor and the black probe to the other end. The meter will then display the voltage difference.

**Practical Tip (Exam Focus):** Always check the range of your voltmeter before connecting it. If you're unsure of the voltage level, start with the highest range and then decrease it to get a more precise reading. Connecting a high voltage to a low range can damage the meter. This relates directly to CO5: selecting and operating measuring instruments.

---

## 3. Introducing Relative Potential using a DC Circuit (CO6)

This is where things get really interesting and we start building towards more complex circuit analysis. The concept of **relative potential** is fundamental to understanding how voltages behave within a circuit.

### What is Relative Potential?

In any electrical circuit, potential is not an absolute value; it's always measured *relative* to some other point. We often establish a reference point in a circuit, and all other potentials are then expressed with respect to that reference. The most common reference point in DC circuits is the **ground** or **common** terminal, which is conventionally assigned a potential of **zero volts (0V)**.

Think of it like measuring height. We usually measure height relative to sea level, or relative to the ground floor of a building. A point 10 meters above the ground floor has a relative height of +10 meters. A basement 3 meters below the ground floor has a relative height of -3 meters. The ground floor is our reference point (0 meters).

Similarly, in an electrical circuit:

*   If a point in the circuit is at a higher potential than the reference, its potential is positive relative to the reference.
*   If a point is at a lower potential, its potential is negative relative to the reference.

### Setting Up a Simple DC Circuit for Demonstration:

Let's build a basic series circuit to demonstrate this. We'll use:

1.  A DC power supply (like a battery or a bench power supply).
2.  A fixed resistor (R1).
3.  A rheostat (our variable resistor).

We'll connect these in series. Let's say the DC power supply has a positive terminal and a negative terminal. We can choose to make the negative terminal of the power supply our **reference point (0V)**.

**Circuit Diagram (Conceptual):**

```
     + (V_source)
     |
    ---
    | | R1
    ---
     |
     o-----(Point A)
     |
    ---
    | | Rheostat (Slider position determines resistance)
    ---
     |
    ---
    | | R2 (if used, or just a wire if we omit a second resistor for simplicity)
    ---
     |
     - (0V Reference - connected to negative terminal of V_source)
```

*(Note: For simplicity in explaining relative potential, we'll focus on the potential at different points relative to the negative terminal of the power supply.)*

### Measuring Potentials and Understanding Relative Values:

Now, let's use our voltmeter (remember CO5 – selecting and operating measuring instruments).

1.  **Connect the negative probe of the voltmeter to the negative terminal of the power supply.** This establishes our 0V reference.
2.  **Measure the potential at the positive terminal of the power supply.** You should read the supply voltage (e.g., 5V, 12V). This is the potential of the positive terminal *relative* to the negative terminal.
3.  **Measure the potential at the point between R1 and the rheostat (Point A in the diagram).** Let's call this voltage $V_A$. This $V_A$ is the potential at Point A *relative* to our 0V reference.
4.  **Measure the potential at the other end of the rheostat (before it connects to the negative terminal).** You should read a voltage very close to 0V (ideally 0V), as this point is directly connected to our reference.

### Demonstrating the Effect of the Rheostat:

The real magic happens when we adjust the rheostat.

*   **With the slider positioned such that the rheostat offers maximum resistance:** The total resistance in the circuit is high. The current will be low. The voltage drop across R1 will be significant, and the voltage drop across the rheostat will also be significant. If you measure the potential at Point A (between R1 and the rheostat), it will be a specific positive value relative to 0V.
*   **As you move the slider to decrease the rheostat's resistance:** The total resistance in the circuit decreases, and the current increases. Now, if you measure the potential at Point A again, you will find that it has changed!

**Why does the potential at Point A change?**

Because the voltage drop across R1 is determined by the current flowing through it ($V_{R1} = I \times R1$). As we change the rheostat's resistance, we change the total circuit current ($I$), which in turn changes the voltage drop across R1. The potential at Point A is $V_{source} - V_{R1}$. So, as $V_{R1}$ changes, $V_A$ also changes.

**Relating to Relative Potential:**

This experiment clearly shows that the voltage reading at any point is always *relative* to the point where the voltmeter's negative probe is connected. By fixing the negative probe to the 0V reference, we are essentially measuring the absolute potential (or potential relative to ground) at different points.

This concept is the foundation for Kirchhoff's Voltage Law (KVL), which states that the algebraic sum of voltages around any closed loop in a circuit must be zero. KVL is a direct consequence of the conservation of energy and the concept of potential.

**Example Scenario:**

Let's say we have a 12V battery. We connect a 1kΩ resistor (R1) and a rheostat in series.

1.  We set the rheostat to 500Ω.
    *   Total Resistance = 1kΩ + 0.5kΩ = 1.5kΩ.
    *   Current ($I$) = $V_{source} / R_{total}$ = 12V / 1.5kΩ = 8mA.
    *   Voltage drop across R1 ($V_{R1}$) = $I \times R1$ = 8mA × 1kΩ = 8V.
    *   If our 0V reference is the negative terminal of the battery, the potential at the point between R1 and the rheostat is $12V - 8V = 4V$. So, $V_A = 4V$ (relative to 0V).

2.  Now, we adjust the rheostat to 2kΩ.
    *   Total Resistance = 1kΩ + 2kΩ = 3kΩ.
    *   Current ($I$) = $12V / 3kΩ = 4mA$.
    *   Voltage drop across R1 ($V_{R1}$) = $4mA \times 1kΩ = 4V$.
    *   The potential at the point between R1 and the rheostat is now $12V - 4V = 8V$. So, $V_A = 8V$ (relative to 0V).

See how the potential at the same point (Point A) changes as we alter the circuit conditions? And how all these potentials are measured *relative* to our chosen 0V reference. This is fundamental for understanding series and parallel circuits, voltage dividers, and troubleshooting.

**Connecting to Course Outcomes:**

*   **CO2 (Familiarise with rheostats):** We've directly handled and understood the function of rheostats.
*   **CO5 (Select and Operate measuring instruments):** We've used the voltmeter correctly to measure potential.
*   **CO6 (Apply the design procedure of simple electronic circuits on breadboard and PCB):** While we haven't built on a PCB yet, setting up this circuit on a breadboard is the first step in applying design principles to practical circuits. Understanding voltage distribution is key to designing circuits where specific voltage levels are required at different points. This also touches on **K3 (Application)** level for CO6.

---

## 4. Summary and Key Points to Remember

To wrap up this session, let's quickly recap the essential takeaways:

*   **Rheostats** are variable resistors primarily used to control current by changing the resistance in a circuit. They are typically connected using two terminals: one end and the wiper.
*   **Voltmeters** are used to measure potential difference (voltage). They must always be connected **in parallel** across the component of interest.
*   **Relative Potential** is crucial. Voltages are always measured with respect to a reference point, commonly designated as 0V (ground).
*   By setting a reference point (e.g., the negative terminal of the power supply), we can measure the potential at any other point in the circuit relative to that reference. This helps us understand voltage drops and distributions within the circuit.
*   Adjusting components like rheostats changes the circuit's current, which in turn affects voltage drops across other components, thereby altering the relative potentials at various points.

This understanding of rheostats and potential measurement is foundational for everything else we'll do in this workshop and in electrical engineering.

---

## Sample Questions with Answers

**1. Conceptual Question:**

**Question:** Explain why a voltmeter must be connected in parallel with a component, not in series.

**Answer:** A voltmeter is designed to have a very high internal resistance. If connected in series, this high resistance would significantly impede the flow of current in the circuit, acting almost like an open circuit. This would drastically alter the circuit's behavior and prevent accurate voltage measurement. By connecting it in parallel, the voltmeter draws only a very small current from the circuit, ensuring that the voltage distribution across the component remains largely unaffected while providing an accurate measurement. This principle is key to using measuring instruments correctly (CO5).

**2. Application Question:**

**Question:** You have a 9V battery and a simple circuit with a resistor (R = 1kΩ) and a rheostat connected in series. If you measure the voltage across the 1kΩ resistor and get 6V, what is the resistance value of the rheostat at this moment?

**Answer:**
Let $V_{source} = 9V$.
Let $R_1 = 1kΩ$.
Let the rheostat resistance be $R_{rheostat}$.
The voltage across $R_1$ is given as $V_{R1} = 6V$.

According to Ohm's Law, the voltage across $R_1$ is $V_{R1} = I \times R_1$.
So, the current ($I$) flowing through the circuit is $I = V_{R1} / R_1 = 6V / 1kΩ = 6mA$.

Since the components are in series, the same current flows through the rheostat. The voltage across the rheostat ($V_{rheostat}$) can be found using KVL or by calculating the remaining voltage drop from the source:
$V_{rheostat} = V_{source} - V_{R1} = 9V - 6V = 3V$.

Now, using Ohm's Law for the rheostat: $V_{rheostat} = I \times R_{rheostat}$.
So, $R_{rheostat} = V_{rheostat} / I = 3V / 6mA = 3V / 0.006A = 500Ω = 0.5kΩ$.

Therefore, the resistance of the rheostat at that moment is 500Ω. This demonstrates applying circuit principles and understanding relative potential drops (CO6).

**3. Safety/Familiarization Question:**

**Question:** When using a rheostat to control the brightness of a small lamp in a DC circuit, what safety precautions should you take, considering its function as a variable resistor? (Relates to CO1 and CO2).

**Answer:**
*   **Current Rating:** Ensure the rheostat's power and current rating are sufficient for the lamp. Overloading a rheostat can cause it to overheat and fail, potentially posing a fire hazard.
*   **Connection Integrity:** Make sure the slider is making good contact with the resistive wire and that all connections are secure to prevent arcing or intermittent contact, which can be dangerous and damage components.
*   **Insulation:** Use a wire-wound rheostat with good insulation, especially if dealing with higher voltages, and avoid touching the resistive element or the slider mechanism while the circuit is powered. The workshop environment and safety against electrical shocks (CO1) are paramount.
*   **Gradual Adjustment:** Adjust the rheostat gradually. Rapid changes can cause sudden surges in current or voltage, which might damage the lamp or the rheostat.

This covers familiarization with rheostats (CO2) and emphasizes safety (CO1).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
