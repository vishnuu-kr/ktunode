---
title: "DC Circuits : Resistance in Series and Parallel"
subject: "BASIC ELECTRICAL & ELECTRONICS ENGINEERING"
module: "Module 1: Generation of alternating voltages : "
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edefeb4799d95e8367b"
status: "completed"
scrapedAt: "2026-05-20T17:41:11.317Z"
---
### BASIC ELECTRICAL & ELECTRONICS ENGINEERING

**Module 1: Generation of Alternating Voltages**

**Topic: DC Circuits – Resistance in Series and Parallel**

Welcome, everyone! In this module, we're diving into the fundamentals of electrical engineering, and it all starts with understanding how electricity flows. While our module title mentions alternating voltages, before we get to that dynamic world, we need a solid grasp of the basics – direct current (DC) circuits. Think of DC as a steady, one-way street for electrons. And what governs how easily those electrons travel? Resistance. Today, we’ll explore how resistors behave when connected in series and parallel, which is absolutely crucial for understanding how circuits work. This is foundational knowledge, directly linked to **Course Outcome 1 (CO1): Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits**. Understanding these series and parallel combinations is the very first step in applying circuit laws.

#### The Concept of Resistance

Before we talk about combinations, let's briefly revisit what resistance is. You can think of resistance as the "friction" that electrical current encounters as it flows through a material. Every material offers some resistance, though some are much better conductors (low resistance) than others. In our circuits, we often use specific components called **resistors** to control the flow of current. We measure resistance in **Ohms (Ω)**, named after Georg Simon Ohm.

**Key Definition:**
*   **Resistance (R):** The opposition to the flow of electric current in a circuit.

The relationship between voltage (V), current (I), and resistance (R) is famously described by **Ohm's Law**:

$$ V = I \times R $$

This simple equation is the bedrock of DC circuit analysis. If you know any two of these, you can find the third.

#### Resistors in Series

Imagine you have a line of people trying to walk through a narrow corridor, and then another narrow corridor right after it. The total difficulty they face is the sum of the difficulty of each corridor. This is exactly how resistors in series behave.

When resistors are connected end-to-end, forming a single path for the current to flow, they are said to be in **series**.

**Visualizing Series Connection:**
Think of connecting batteries in a flashlight. Each battery is in series with the next, and together they provide the total voltage to power the bulb.

**How it works:**
*   **Current:** In a series circuit, the **current is the same** through all the resistors. Why? Because there's only one path for the electrons to take. They can't split up or disappear. If 5 Amperes (A) flows into the first resistor, 5 A will flow through the second, the third, and so on. This is a critical point often tested!
*   **Voltage:** The total voltage supplied to the series combination is **divided** among the resistors. The amount of voltage dropped across each resistor depends on its resistance value. Higher resistance means a larger voltage drop, as per Ohm's Law ($V = I \times R$).
*   **Total Resistance (Equivalent Resistance):** The total resistance of resistors in series is simply the **sum** of their individual resistances. It’s like adding up the lengths of all the narrow corridors.

**The Formula:**
If you have resistors $R_1$, $R_2$, $R_3$, ... connected in series, the total or equivalent resistance, $R_{eq}$, is:

$$ R_{eq} = R_1 + R_2 + R_3 + ... $$

**Example (Relatable):**
Imagine you’re filling a swimming pool with buckets of water.
*   Bucket 1 has a small opening (low resistance).
*   Bucket 2 has an even smaller opening (higher resistance).
*   Bucket 3 has a tiny opening (very high resistance).
If you pour water from Bucket 1 into Bucket 2, and then from Bucket 2 into Bucket 3, the total time it takes for the water to go through all of them will be the sum of the times it takes for each individual bucket. Each bucket offers its own resistance to the flow. Similarly, the total resistance is the sum of individual resistances.

**Exam Tip:** Always remember that in series, current is constant, and voltage adds up. The equivalent resistance is *always greater* than the largest individual resistance.

#### Resistors in Parallel

Now, let's consider a different scenario. Imagine a large river splitting into several smaller streams, and then rejoining later. The water has multiple paths to flow through. This is what happens with resistors in **parallel**.

When resistors are connected across the same two points in a circuit, they are said to be in **parallel**. Each resistor provides a separate path for the current.

**Visualizing Parallel Connection:**
Think of the multiple lanes on a highway. Cars (current) can choose to travel on any lane.

**How it works:**
*   **Voltage:** In a parallel circuit, the **voltage is the same** across all the resistors. Why? Because they are all connected between the same two common points in the circuit. The "electrical pressure" is identical for each path.
*   **Current:** The total current entering the parallel combination **divides** among the resistors. The amount of current flowing through each branch depends on its resistance. According to Ohm's Law ($I = V/R$), the branch with lower resistance will receive more current, and the branch with higher resistance will receive less current. The total current is the sum of the currents in each branch.
*   **Total Resistance (Equivalent Resistance):** This is where it gets a bit different from series. The total resistance of resistors in parallel is **less** than the smallest individual resistance. This might seem counter-intuitive, but it makes sense: by providing more paths, you are making it easier for the current to flow overall.

**The Formula:**
For resistors $R_1$, $R_2$, $R_3$, ... connected in parallel, the reciprocal of the total or equivalent resistance, $R_{eq}$, is the sum of the reciprocals of the individual resistances:

$$ \frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + ... $$

Therefore, to find $R_{eq}$, you need to calculate the sum on the right and then take its reciprocal.

**Special Case: Two Resistors in Parallel**
For the common case of just two resistors ($R_1$ and $R_2$) in parallel, the formula simplifies to:

$$ R_{eq} = \frac{R_1 \times R_2}{R_1 + R_2} $$

This is often called the "product over sum" formula and is very handy.

**Example (Relatable):**
Imagine a group of friends at a concert.
*   If they all stand in one long single file line to get tickets (series), it will take them a long time.
*   If they can all go to separate ticket booths simultaneously (parallel), they will get their tickets much faster. The overall efficiency (low total resistance to getting tickets) is much higher. Each friend represents current, and each ticket booth represents a path with its own resistance.

**Exam Tip:** Remember that in parallel, voltage is constant, and current divides. The equivalent resistance is *always smaller* than the smallest individual resistance.

#### Connecting to Course Outcomes

*   **CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits.**
    *   Understanding series and parallel resistance is the absolute first step in applying circuit laws like Ohm's Law and Kirchhoff's Voltage Law (KVL) and Kirchhoff's Current Law (KCL). For instance, to find the total current drawn from a battery powering a circuit with multiple resistors, you first need to find the equivalent resistance of that combination. This is a direct application of these concepts.
    *   **Knowledge Level (K2):** You need to understand these relationships and be able to recall the formulas.
*   **CO2: Develop an awareness on the fundamentals of electric power generation, transmission and distribution.**
    *   While this topic is about DC circuits, the principles of series and parallel combinations are fundamental to understanding how loads are connected in power systems. For example, households are typically connected in parallel to the main power lines, ensuring they all receive the same voltage. The resistance of transmission lines themselves can be significant and often needs to be considered in series with the load.
*   **CO3: Compare different types of DC and AC motors.**
    *   The internal windings of DC motors, for example, often involve coils of wire that have resistance. Understanding how these coils are connected (series or parallel) within the motor's armature and field circuits is crucial for analyzing motor performance.
*   **CO4: Describe the fundamental concepts of electronic components and devices.**
    *   Resistors are basic electronic components. Their behavior in series and parallel circuits forms the basis for designing and analyzing more complex electronic circuits, from simple voltage dividers to intricate amplifier stages.

#### Quick Recap and Things to Remember

*   **Series:** One path for current. Current is the same everywhere. Voltage divides. Total resistance increases (sum of individuals).
*   **Parallel:** Multiple paths for current. Voltage is the same across all paths. Current divides. Total resistance decreases (reciprocal of sum of reciprocals).
*   For two resistors in parallel, use the "product over sum" formula for quick calculation.
*   These concepts are essential for understanding circuit behavior and will be used repeatedly throughout your studies.

---

### Sample Questions with Answers

**Q1. Conceptual Question:**
Explain why the equivalent resistance of resistors connected in parallel is always less than the smallest individual resistance.

**Answer:**
When resistors are connected in parallel, they provide multiple pathways for the electric current to flow. This effectively "opens up" more routes for the electrons, reducing the overall opposition they face. Imagine multiple doors to a room versus just one. More doors make it easier to enter. Similarly, more parallel paths make it easier for current to flow, thus lowering the total resistance. The total conductivity of the parallel combination is the sum of individual conductances (which are the reciprocals of resistance), and since conductance represents ease of flow, adding conductances always results in a higher total conductance, which means lower total resistance.

**Q2. Exam-Oriented Question:**
Three resistors, with values of 10 Ω, 20 Ω, and 30 Ω, are connected in series to a 12 V DC supply. Calculate the equivalent resistance and the current flowing through the circuit.

**Answer:**
*   **Given:**
    *   $R_1 = 10 \text{ Ω}$
    *   $R_2 = 20 \text{ Ω}$
    *   $R_3 = 30 \text{ Ω}$
    *   $V = 12 \text{ V}$
*   **Connection:** Series
*   **To find:** Equivalent resistance ($R_{eq}$) and current ($I$)

*   **Calculation of Equivalent Resistance ($R_{eq}$):**
    For resistors in series, $R_{eq} = R_1 + R_2 + R_3$.
    $R_{eq} = 10 \text{ Ω} + 20 \text{ Ω} + 30 \text{ Ω} = 60 \text{ Ω}$.
    *   **Remember this:** The equivalent resistance in series is always greater than the largest individual resistance, which is 30 Ω in this case. Our result of 60 Ω confirms this.

*   **Calculation of Current ($I$):**
    Using Ohm's Law, $V = I \times R_{eq}$, so $I = V / R_{eq}$.
    $I = 12 \text{ V} / 60 \text{ Ω} = 0.2 \text{ A}$.
    *   **Important:** Since this is a series circuit, this 0.2 A current flows through each of the resistors.

**Q3. Exam-Oriented Question:**
If the same three resistors (10 Ω, 20 Ω, and 30 Ω) are connected in parallel to a 12 V DC supply, calculate the equivalent resistance and the total current drawn from the supply.

**Answer:**
*   **Given:**
    *   $R_1 = 10 \text{ Ω}$
    *   $R_2 = 20 \text{ Ω}$
    *   $R_3 = 30 \text{ Ω}$
    *   $V = 12 \text{ V}$
*   **Connection:** Parallel
*   **To find:** Equivalent resistance ($R_{eq}$) and total current ($I_{total}$)

*   **Calculation of Equivalent Resistance ($R_{eq}$):**
    For resistors in parallel, $\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3}$.
    $\frac{1}{R_{eq}} = \frac{1}{10 \text{ Ω}} + \frac{1}{20 \text{ Ω}} + \frac{1}{30 \text{ Ω}}$
    To add these fractions, find a common denominator, which is 60:
    $\frac{1}{R_{eq}} = \frac{6}{60} + \frac{3}{60} + \frac{2}{60} = \frac{11}{60} \text{ S}$ (Siemens, the unit for conductance)
    Now, invert to find $R_{eq}$:
    $R_{eq} = \frac{60}{11} \text{ Ω} \approx 5.45 \text{ Ω}$.
    *   **Crucial check:** The equivalent resistance (approx. 5.45 Ω) is indeed less than the smallest individual resistance (10 Ω).

*   **Calculation of Total Current ($I_{total}$):**
    Using Ohm's Law, $I_{total} = V / R_{eq}$.
    $I_{total} = 12 \text{ V} / (\frac{60}{11} \text{ Ω}) = 12 \text{ V} \times \frac{11}{60 \text{ Ω}} = \frac{132}{60} \text{ A} = 2.2 \text{ A}$.

    Alternatively, you can find the current through each resistor and sum them up (since voltage is the same in parallel):
    $I_1 = V/R_1 = 12 \text{ V} / 10 \text{ Ω} = 1.2 \text{ A}$
    $I_2 = V/R_2 = 12 \text{ V} / 20 \text{ Ω} = 0.6 \text{ A}$
    $I_3 = V/R_3 = 12 \text{ V} / 30 \text{ Ω} = 0.4 \text{ A}$
    $I_{total} = I_1 + I_2 + I_3 = 1.2 \text{ A} + 0.6 \text{ A} + 0.4 \text{ A} = 2.2 \text{ A}$.
    Both methods yield the same result, confirming your understanding.

**Q4. Conceptual Question with Analogy:**
Think of water flowing through pipes. If you have two pipes connected one after another (series), the total flow rate is limited by the narrower pipe, and the resistance to flow is the sum of resistances of both pipes. If you have two pipes side-by-side, connected to the same tank at one end and draining to the same point at the other (parallel), the total flow rate increases because water has more paths. How does this analogy help understand the equivalent resistance of resistors in parallel?

**Answer:**
The analogy perfectly illustrates the concept of parallel resistance.
*   **Pipes one after another (Series):** The water (current) must pass through both pipes sequentially. The total "difficulty" or resistance to flow is the sum of the difficulty of each pipe.
*   **Pipes side-by-side (Parallel):** The water (current) can split and flow through both pipes simultaneously. This increases the overall capacity for flow. Because there are more paths, the overall resistance to flow is reduced. If one pipe is narrower than the other, more water will flow through the wider pipe, and less through the narrower one, but the total flow is greater than if only the narrower pipe was available. This reduction in overall resistance when adding parallel paths is the key takeaway. The total "ease of flow" (conductance) is the sum of the ease of flow through each pipe.

By understanding these fundamental concepts of series and parallel resistance, you are well on your way to mastering DC circuit analysis, a critical step in your journey through electrical and electronics engineering!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
