---
title: "Ohms Law and Kirchhoff’s laws"
subject: "BASIC ELECTRICAL & ELECTRONICS ENGINEERING"
module: "Module 1: Generation of alternating voltages : "
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edefeb4799d95e8367c"
status: "completed"
scrapedAt: "2026-05-20T17:41:12.083Z"
---
# Module 1: Generation of Alternating Voltages

## Topic: Ohm's Law and Kirchhoff's Laws

Welcome, everyone! In this module, we're diving into the fascinating world of alternating voltages and how they behave in electrical circuits. Before we get to the specifics of AC generation, it's absolutely crucial to build a strong foundation on the fundamental laws that govern all electrical circuits, whether they are dealing with steady DC or fluctuating AC. Today, we're going to revisit and solidify our understanding of two cornerstone principles: **Ohm's Law** and **Kirchhoff's Laws**. These aren't just abstract rules; they are the very bedrock upon which all electrical engineering is built. Mastering these will unlock your ability to analyze and solve almost any circuit problem you'll encounter, connecting directly to our Course Outcome 1 (CO1): "Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits."

---

### 1. Ohm's Law: The Relationship Between Voltage, Current, and Resistance

Think of an electrical circuit like a water system.

*   **Voltage (V)** is like the pressure that pushes the water through the pipes. The higher the pressure, the more forcefully the water flows. In electrical terms, voltage is the electrical potential difference that drives the flow of charge (current).
*   **Current (I)** is like the flow rate of the water – how much water passes a certain point per second. In electricity, current is the rate of flow of electric charge.
*   **Resistance (R)** is like the narrowness or obstruction in the pipes. A narrower pipe or an obstruction will restrict the flow of water, requiring more pressure to push the same amount of water through. Similarly, resistance is the opposition to the flow of current in an electrical conductor.

Now, **Ohm's Law**, named after Georg Simon Ohm, beautifully quantifies this relationship. It states that for a given resistor (or any linear circuit element), the **current flowing through it is directly proportional to the voltage across it, and inversely proportional to its resistance**, provided the temperature remains constant.

This is often expressed as a simple, elegant formula:

$$ V = IR $$

Let's break this down:

*   **V = IR**: If you know the voltage across a resistor and its resistance, you can calculate the current flowing through it.
*   **I = V/R**: This form is very useful. If you know the voltage and resistance, you can directly find the current. For instance, if you have a 12-volt battery connected to a 6-ohm resistor, the current is $12 \text{ V} / 6 \ \Omega = 2 \text{ Amperes}$.
*   **R = V/I**: This form is handy if you want to find the resistance of a component. If you apply 5 volts across a component and measure 0.5 amperes flowing through it, its resistance is $5 \text{ V} / 0.5 \text{ A} = 10 \ \Omega$.

**Units are Crucial!** Always remember:
*   Voltage is measured in **Volts (V)**.
*   Current is measured in **Amperes (A)**, often shortened to "Amps".
*   Resistance is measured in **Ohms ($\Omega$)**.

**Everyday Example:** Imagine you're riding a bicycle.
*   **Voltage** is like how hard you push the pedals.
*   **Current** is how fast you're moving.
*   **Resistance** is like the friction from the road, the air resistance, or even hills you're cycling up.

If you pedal harder (increase voltage), you go faster (increase current), assuming the resistance stays the same. If the road gets rougher or you face a headwind (increase resistance), you'll need to pedal harder (increase voltage) to maintain the same speed (current), or if you keep pedaling with the same force (voltage), your speed will drop (current decreases).

**Why is this important for AC?**
While Ohm's Law was initially formulated for DC circuits, its fundamental principle holds true for AC circuits as well, with a slight modification when we talk about *impedance* instead of just resistance. For now, understanding the voltage-current-resistance relationship is key. When we get to AC, we'll see that components like inductors and capacitors also oppose current flow, and we'll group this opposition under the umbrella of **impedance (Z)**. So, the AC equivalent of Ohm's Law becomes $V = IZ$. For purely resistive AC circuits, $Z$ is just $R$. This concept directly supports CO1 as it's the primary tool for analyzing circuits.

**From our textbooks:** D. P. Kothari and I. J. Nagrath (both editions) and Schaum's Outline by Cathey and Nasar are excellent resources that thoroughly cover Ohm's Law with numerous examples for both DC and AC circuits, emphasizing the foundational nature of this law. They often highlight that Ohm's Law is applicable to linear circuit elements, meaning their resistance doesn't change with voltage or current.

**Quick Recall Tip:** Remember the Ohm's Law triangle:
*   Put V at the top.
*   Put I and R at the bottom.
*   To find V, cover V: you get I * R.
*   To find I, cover I: you get V / R.
*   To find R, cover R: you get V / I.

---

### 2. Kirchhoff's Laws: Analyzing More Complex Circuits

Ohm's Law is fantastic for analyzing simple circuits with a single component or a few components in series or parallel. But what about circuits with multiple loops and branches, like the wiring in your house or a complex electronic device? That's where **Kirchhoff's Laws** come to the rescue. These laws, formulated by Gustav Kirchhoff, are based on the conservation of charge and energy and are essential for analyzing circuits of any complexity. They directly contribute to CO1 by providing methods to solve circuits that Ohm's law alone cannot handle.

There are two Kirchhoff's Laws:

#### 2.1. Kirchhoff's Current Law (KCL) - The Junction Rule

**What it is:** KCL is based on the **conservation of electric charge**. Imagine a junction or a node in a circuit – a point where three or more wires meet. Charge cannot just appear or disappear at this junction. It must flow *in* as much as it flows *out*.

**The Rule:** The algebraic sum of currents entering a junction (or node) is equal to the algebraic sum of currents leaving the junction.

Alternatively, the algebraic sum of all currents at a junction is zero.

We usually assign a sign convention:
*   Currents **entering** a node are considered **positive (+)**.
*   Currents **leaving** a node are considered **negative (-)**.

So, KCL can be written as:
$$ \sum_{\text{entering}} I = \sum_{\text{leaving}} I $$
or
$$ \sum I = 0 \quad \text{(at a junction)} $$

**Real-world Analogy:** Think about water pipes meeting at a crossroads. The total amount of water flowing *into* that intersection from all incoming pipes must equal the total amount of water flowing *out* of the intersection into all outgoing pipes. No water is lost or gained at the junction itself.

**Example:** Let's say at a junction (Node A), we have three wires connected.
*   Wire 1 carries current $I_1$ flowing *into* Node A.
*   Wire 2 carries current $I_2$ flowing *out of* Node A.
*   Wire 3 carries current $I_3$ flowing *out of* Node A.

According to KCL:
$I_1 = I_2 + I_3$
or
$I_1 - I_2 - I_3 = 0$

If $I_1 = 5 \text{ A}$, $I_2 = 3 \text{ A}$, then $I_3$ must be $5 \text{ A} - 3 \text{ A} = 2 \text{ A}$ flowing out.

**Application:** KCL is vital for understanding how current divides in parallel circuits and how to analyze current flow in complex networks. It's a fundamental tool when you're trying to figure out how much current goes through each branch of a circuit. Chinmoy Saha's book, for instance, provides excellent visual explanations of nodes and KCL, which is very helpful for grasping this concept.

#### 2.2. Kirchhoff's Voltage Law (KVL) - The Loop Rule

**What it is:** KVL is based on the **conservation of energy**. It deals with the voltages around a closed loop (or mesh) in a circuit. When you traverse a closed loop, starting from a point and returning to that same point, the total change in electrical potential must be zero.

**The Rule:** The algebraic sum of all the voltage drops and voltage rises around any closed loop in a circuit is equal to zero.

Again, we need a sign convention:
*   **Voltage Rise:** When you move across a voltage source from the negative to the positive terminal, it's a voltage *rise* (positive).
*   **Voltage Drop:** When you move across a resistor in the direction of current flow, there's a voltage *drop* (negative). Conversely, moving against the current is a voltage rise. When moving across a voltage source from positive to negative, it's a voltage drop.

So, KVL can be written as:
$$ \sum_{\text{around loop}} V = 0 $$

**Real-world Analogy:** Imagine climbing a mountain. You start at the base camp, go up to the summit, and then come back down to the base camp. If you sum up all your "gains" in altitude (going up) and "losses" in altitude (coming down), the net change in altitude from start to finish is zero. Similarly, in a circuit loop, the total voltage "gain" from sources must equal the total voltage "loss" across resistors and other components.

**Example:** Consider a simple series circuit with a battery (V) and two resistors ($R_1$, $R_2$).
Let's assume the current ($I$) flows clockwise.
Starting from the negative terminal of the battery and moving clockwise:
1.  **Across the battery:** We move from - to +, so it's a voltage rise: $+V$.
2.  **Across $R_1$:** We move in the direction of current, so it's a voltage drop: $-IR_1$.
3.  **Across $R_2$:** We move in the direction of current, so it's a voltage drop: $-IR_2$.

Applying KVL around this loop:
$V - IR_1 - IR_2 = 0$
This rearranges to $V = IR_1 + IR_2$, or $V = I(R_1 + R_2)$, which is exactly Ohm's Law applied to a series circuit.

**What if we have a more complex circuit?**
Let's say a circuit has a voltage source $V_1$ and a voltage drop $V_2$ across some component.
When traversing a loop, you might encounter:
*   $+V_1$ (source rise)
*   $-V_2$ (component drop)
*   $-I R_3$ (drop across resistor $R_3$)
*   $+I R_4$ (rise across resistor $R_4$ if current is opposite to traversal)

The sum must be zero: $V_1 - V_2 - I R_3 + I R_4 = 0$.

**Key to Application:** KVL is indispensable for analyzing series circuits, understanding voltage division, and, most importantly, for setting up equations in more complex networks that cannot be solved with simple series/parallel combinations alone. Textbooks like "Basic Electrical Engineering" by D.C. Kulshreshtha and "Electrical Engineering Fundamentals" by Del Toro V provide thorough step-by-step methods for applying KVL, which is critical for exam success in CO1.

**Common Pitfalls with Kirchhoff's Laws:**
*   **Inconsistent Sign Convention:** Always be consistent with your chosen signs for current direction and voltage rises/drops. If you make a mistake, your answer will be wrong.
*   **Missing a Loop or Junction:** Ensure you account for all possible independent loops and junctions in your circuit analysis.
*   **Assuming Current Direction Incorrectly:** If you assume a current direction and it turns out to be the opposite, don't worry! Your calculations will yield a negative value for that current, which simply tells you the actual direction is opposite to what you assumed. It's still correct!

**Connection to AC Circuits:** Just like Ohm's Law, Kirchhoff's Laws are fundamental for AC circuits. The voltage sources will now be alternating voltages (e.g., $V_m \sin(\omega t)$), and the "resistance" term will often be replaced by **impedance (Z)**, which includes resistance (R), inductive reactance ($X_L$), and capacitive reactance ($X_C$). So, Ohm's Law becomes $V = IZ$, and KVL becomes the sum of complex voltages (phasors) around a loop equals zero. This directly builds towards CO1 by showing how fundamental laws extend to AC analysis.

---

### Summary and Key Takeaways for Exams

Remember these core ideas:

*   **Ohm's Law ($V=IR$)** is the fundamental relationship between voltage, current, and resistance in a linear circuit. It's your first tool for circuit analysis. Keep the triangle handy!
*   **Kirchhoff's Current Law (KCL)** is about **charge conservation** at a **junction**. The sum of currents entering a node equals the sum of currents leaving it.
*   **Kirchhoff's Voltage Law (KVL)** is about **energy conservation** in a **closed loop**. The sum of voltage rises equals the sum of voltage drops around any loop.
*   **Consistency in Sign Convention** is paramount when applying Kirchhoff's Laws. Pick a convention and stick to it for every element in your analysis.
*   These laws are the foundation for solving any circuit, be it DC or AC. For AC, we'll extend these concepts to impedance.

Mastering these laws will allow you to approach any circuit problem with confidence. They are the building blocks for everything else we will learn in this course and beyond in electrical and electronics engineering.

---

### Sample Questions and Answers

**1. Conceptual Question:**
If you double the voltage across a resistor while keeping its resistance constant, what happens to the current flowing through it? Explain using Ohm's Law.

**Answer:**
According to Ohm's Law, $I = V/R$. If the voltage ($V$) is doubled and the resistance ($R$) remains constant, the current ($I$) will also be doubled. This is because current is directly proportional to voltage.

**2. Application Question (Exam-Oriented):**
In a circuit junction, three currents $I_1$, $I_2$, and $I_3$ meet. If $I_1$ is entering the junction with a value of 10A, and $I_2$ is leaving the junction with a value of 6A, what is the value and direction of $I_3$?

**Answer:**
We apply Kirchhoff's Current Law (KCL) at the junction. Let's assume $I_3$ is also leaving the junction.
KCL states: Sum of currents entering = Sum of currents leaving.
$I_1 = I_2 + I_3$
$10 \text{ A} = 6 \text{ A} + I_3$
$I_3 = 10 \text{ A} - 6 \text{ A}$
$I_3 = 4 \text{ A}$

Since the calculated value for $I_3$ is positive and we assumed it was leaving, $I_3$ is 4A leaving the junction. If we had assumed it was entering and got a positive result, it would mean our assumption was correct. If we had assumed it was leaving and got a negative result (e.g., -4A), it would mean the current was actually entering with 4A.

**3. Conceptual Question (Exam-Oriented):**
State Kirchhoff's Voltage Law (KVL) and explain the principle it is based upon.

**Answer:**
Kirchhoff's Voltage Law (KVL) states that the algebraic sum of all the voltage drops and voltage rises around any closed loop or mesh in a circuit is equal to zero. It is based on the principle of **conservation of energy**. As a charge moves around a closed electrical circuit, the total energy gained by the charge from sources must be equal to the total energy lost by the charge to components like resistors, capacitors, and inductors. The net change in potential energy for a charge moving around a closed loop must be zero.

**4. Application Question (Exam-Oriented):**
Consider a simple circuit with a 12V battery and a 6 Ohm resistor connected in series. Calculate the current flowing through the resistor.

**Answer:**
We use Ohm's Law, $I = V/R$.
Given:
Voltage, $V = 12 \text{ V}$
Resistance, $R = 6 \ \Omega$

Current, $I = \frac{12 \text{ V}}{6 \ \Omega} = 2 \text{ A}$

The current flowing through the resistor is 2 Amperes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
