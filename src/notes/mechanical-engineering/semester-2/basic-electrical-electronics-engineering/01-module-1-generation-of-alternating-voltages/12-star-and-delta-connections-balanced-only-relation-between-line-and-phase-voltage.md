---
title: "star and  delta connections (balanced only), relation between line and phase voltages, line and phase currents"
subject: "BASIC ELECTRICAL & ELECTRONICS ENGINEERING"
module: "Module 1: Generation of alternating voltages : "
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edefeb4799d95e83681"
status: "completed"
scrapedAt: "2026-05-20T17:41:15.879Z"
---
# Module 1: Generation of Alternating Voltages

## Topic: Star and Delta Connections (Balanced Systems)

Welcome, everyone! In this session, we're going to delve into a very fundamental and incredibly important aspect of AC systems: how we connect multiple AC voltage sources or loads. Specifically, we'll be focusing on the **star (or Y) connection** and the **delta ($\Delta$) connection**. These are the two primary ways three-phase AC systems are configured, and understanding them is crucial for virtually everything we'll do in electrical engineering. It's like learning the alphabet before you can read a book!

**(Connecting to Course Outcomes)**: As we explore these connections, keep in mind our Course Outcomes. Understanding star and delta connections directly ties into **CO1** (applying fundamental concepts and circuit laws to solve AC circuits) and is absolutely essential for **CO2** (developing an awareness on electric power generation, transmission, and distribution). After all, power plants generate three-phase power, and how it's transmitted and distributed heavily relies on these connections.

### Why Three-Phase? A Quick Recap

Before we dive into the connections, a quick reminder: why three-phase? Imagine trying to run a large industrial motor using a single-phase supply. It would struggle to start and wouldn't run as smoothly. Three-phase power, with its three alternating voltages that are out of phase with each other, provides a more constant and uniform power delivery. This makes it ideal for driving large machinery, powering entire cities, and much more.

### The Star (or Y) Connection

Let's start with the **star connection**. Think of it like arranging three separate coils or loads, and then bringing one end of each together at a single common point. This common point is often called the **neutral point**. The other ends of the coils are then connected to the three lines of the power system – let's call them Line 1, Line 2, and Line 3.

**Visualizing the Star Connection:**

Imagine three sleepy students, each holding a coil of rope. They decide to meet up. One end of each student's rope is tied together at a central spot (the neutral point). The other ends of their ropes are extended outwards to three different points: Line 1, Line 2, and Line 3.

**Key Components in a Star Connection:**

*   **Phase Voltages ($V_{ph}$):** These are the voltages across each individual coil or load in the star. If we have three coils labeled A, B, and C, then $V_{AB}$ would be the voltage across coil A, $V_{BC}$ across coil B, and $V_{CA}$ across coil C. In a star connection, these are the voltages from each line conductor to the neutral point. For example, $V_{AN}$, $V_{BN}$, $V_{CN}$ where 'N' is the neutral point.
*   **Line Voltages ($V_L$):** These are the voltages measured between any two line conductors. So, the voltage between Line 1 and Line 2, Line 2 and Line 3, or Line 3 and Line 1.

**Relation Between Line and Phase Voltages in a Star Connection:**

This is where things get interesting, and a bit of phasor math (or just understanding phase relationships) comes into play. Since the three phase voltages are sinusoidal and displaced by 120 degrees from each other, the voltage between any two lines is the **vector difference** of the two corresponding phase voltages.

Let's say our phase voltages are:
$V_{AN} = V_{ph} \angle 0^\circ$
$V_{BN} = V_{ph} \angle -120^\circ$
$V_{CN} = V_{ph} \angle +120^\circ$

The line voltage $V_{AB}$ is the phasor difference: $V_{AB} = V_{AN} - V_{BN}$.
When you perform this vector subtraction, you'll find that the magnitude of the line voltage is $\sqrt{3}$ times the magnitude of the phase voltage.

**Crucial Relationship:**

$$ V_L = \sqrt{3} \times V_{ph} $$

The phase of the line voltage is also shifted relative to the phase voltages. Specifically, the line voltage $V_{AB}$ leads the phase voltage $V_{AN}$ by 30 degrees.

**Example (Relatable):** Imagine three band members playing their instruments – say, a guitarist, a bassist, and a drummer. They are all playing in sync, but each with their own rhythm (120-degree phase shift). The overall "sound" you hear when you listen to just the guitarist is like a phase voltage. The "sound" you hear when you listen to both the guitarist and the bassist playing together, interacting, is more like a line voltage. The combined sound (line voltage) is more "intense" ( $\sqrt{3}$ times the magnitude) and has a slightly different character (phase shift) than just listening to one instrument.

**(Exam Focus):** This $\sqrt{3}$ relationship for voltage is a classic exam question for star connections. Make sure you can derive or at least recall it.

**Line Currents ($I_L$) and Phase Currents ($I_{ph}$) in a Star Connection:**

In a star connection, the current flowing through each line conductor is the same as the current flowing through the corresponding phase winding or load. This is because there's no other path for the current to take.

$$ I_L = I_{ph} $$

**Example (Real-world):** Think of a house with three separate circuits (for lights, AC, and appliances). In a star-connected system, the current drawn by the lights in one circuit is directly the current that flows out of that particular line conductor. There's no branching or combining of currents within the connection itself for a balanced system.

**(Exam Focus):** The equality of line and phase currents in a star connection is another key takeaway. Simple, but fundamental!

### The Delta ($\Delta$) Connection

Now, let's move to the **delta connection**. Here, instead of having a central neutral point, we connect the end of one coil to the beginning of the next, forming a closed loop or a triangle – hence, delta.

**Visualizing the Delta Connection:**

Imagine our three sleepy students again, but this time, they form a circle. The first student's rope is connected to the second student's rope, the second to the third, and the third back to the first. The points where they connect are where the three line conductors (Line 1, Line 2, Line 3) are attached.

**Key Components in a Delta Connection:**

*   **Phase Voltages ($V_{ph}$):** In a delta connection, each coil or load is directly connected across two line conductors. Therefore, the voltage across each phase winding is **equal** to the voltage between the two lines it's connected to.
*   **Line Voltages ($V_L$):** These are, as before, the voltages measured between any two line conductors.

**Relation Between Line and Phase Voltages in a Delta Connection:**

This is straightforward. Because each phase winding is directly connected between two line conductors, the voltage across each phase winding is precisely the line voltage.

$$ V_L = V_{ph} $$

**Example (Analogy):** Think of a three-way street intersection where each road segment between intersections is a load. If you measure the voltage between any two road segments (line voltage), that's exactly the voltage across the road segment directly connecting them (phase voltage).

**(Exam Focus):** The equality of line and phase voltages in a delta connection is a direct consequence of its configuration. Very easy to remember.

**Line Currents ($I_L$) and Phase Currents ($I_{ph}$) in a Delta Connection:**

This is where the current relationships in delta become interesting, mirroring the voltage relationship in star. The current flowing in each line conductor is the **vector sum** of the currents flowing through the two phase windings connected to that line, but in opposite directions.

Let's say the currents flowing through the phase windings AB, BC, and CA are $I_{AB}$, $I_{BC}$, and $I_{CA}$ respectively.
The line current $I_A$ (flowing out of Line 1) would be $I_{AB} - I_{CA}$.

Similar to the voltage calculation in star, when you perform this vector subtraction, you find that the magnitude of the line current is $\sqrt{3}$ times the magnitude of the phase current.

**Crucial Relationship:**

$$ I_L = \sqrt{3} \times I_{ph} $$

The phase of the line current is also shifted relative to the phase currents. The line current $I_A$ lags the phase current $I_{AB}$ by 30 degrees (for a source connected to the delta).

**Example (Relatable):** Imagine three rivers flowing into a lake, and then the lake empties into three main outflow channels. If the rivers represent phase currents, and the outflow channels represent line currents, the total flow out of an outflow channel is influenced by the interaction and direction of the two rivers feeding into that point of the delta. The outflow (line current) will be a combination of the river flows (phase currents), and its magnitude will be greater than the flow of any single river.

**(Exam Focus):** This $\sqrt{3}$ relationship for current in a delta connection is another high-yield exam topic. Just like the voltage in star, remember this.

### Balanced Systems

We've been emphasizing "**balanced only**". What does this mean? A balanced three-phase system is one where:

1.  **Voltages:** The magnitudes of the phase voltages are equal, and they are displaced from each other by 120 electrical degrees.
2.  **Loads/Sources:** The impedances of the loads or the internal impedances of the sources connected in each phase are identical.

In a balanced system, the currents in each phase are also equal in magnitude and displaced by 120 degrees. This symmetry simplifies analysis greatly and is assumed for the relationships we've discussed. If the system is unbalanced, these simple $\sqrt{3}$ relationships don't hold directly, and more complex analysis (like symmetrical components) is required, which is beyond our current scope.

**(Connecting to Course Outcomes)**: Understanding "balanced" is key to applying circuit laws (**CO1**) in the context of three-phase power systems, which is crucial for **CO2**.

### Summary Table

To solidify your understanding, let's quickly summarize the key relationships for balanced systems:

| Connection | Voltage Relationship | Current Relationship |
| :--------- | :------------------- | :------------------- |
| **Star (Y)** | $V_L = \sqrt{3} V_{ph}$ | $I_L = I_{ph}$       |
| **Delta ($\Delta$)** | $V_L = V_{ph}$       | $I_L = \sqrt{3} I_{ph}$ |

**Remember this table!** It's a concise summary that will save you a lot of time during problem-solving and revision.

### Why Both? Applications

Both star and delta connections have their uses.

*   **Star:** Often used in generation and distribution. The neutral point in a star connection is very useful. It allows for a three-wire system or a four-wire system (including the neutral). The four-wire system is common for supplying both three-phase loads (like large motors) and single-phase loads (like household appliances) from the same distribution system. Think of a power substation – they often use star connections for easier voltage transformation and distribution.
*   **Delta:** Commonly used in transmission and by many industrial loads, especially motors. Delta connections are good for carrying higher currents and are often used directly in motor windings.

**(Connecting to Course Outcomes)**: This section directly addresses **CO2**, highlighting the practical applications in power generation, transmission, and distribution.

### Sample Questions and Answers

Let's test our understanding with some typical questions you might encounter.

**Question 1 (Conceptual):**
In a balanced three-phase star-connected system, how does the line voltage relate to the phase voltage?
**(Knowledge Level: K2 - Understanding)**

**Answer 1:**
In a balanced three-phase star-connected system, the line voltage ($V_L$) is $\sqrt{3}$ times the phase voltage ($V_{ph}$). Mathematically, $V_L = \sqrt{3} \times V_{ph}$. This is because the line voltage is the phasor difference between two phase voltages.

---

**Question 2 (Conceptual):**
For a balanced delta-connected load, if the phase current is 10 A, what is the line current?
**(Knowledge Level: K2 - Understanding)**

**Answer 2:**
In a balanced delta-connected system, the line current ($I_L$) is $\sqrt{3}$ times the phase current ($I_{ph}$). Given $I_{ph} = 10$ A, the line current $I_L = \sqrt{3} \times 10$ A $\approx 17.32$ A.

---

**Question 3 (Application/Problem Solving):**
A 400 V, three-phase, balanced star-connected alternator supplies a balanced delta-connected load. The load has a phase impedance of $Z_{ph} = (8 + j6) \Omega$. Calculate:
a) The phase voltage of the alternator.
b) The phase current in the load.
c) The line current in the load.
**(Knowledge Level: K2 - Understanding, K3 - Application)**

**Answer 3:**
Given: Line voltage of alternator $V_L = 400$ V. The load is delta-connected and balanced.

a) **Phase voltage of the alternator:**
Since the alternator is star-connected, the phase voltage is $V_{ph\_alt} = V_L / \sqrt{3}$.
$V_{ph\_alt} = 400 \text{ V} / \sqrt{3} \approx 230.94$ V.
*Note: For a star-connected source supplying a delta-connected load, the line voltage from the source is what the delta load "sees" directly.* So, the phase voltage for the delta load is $V_{ph\_load} = V_L = 400$ V. (This is a common point of confusion, but the line voltage of the source is directly applied to the delta load phases).

b) **Phase current in the load:**
The load is delta-connected, so $V_{ph\_load} = V_L = 400$ V.
The phase impedance is $Z_{ph} = (8 + j6) \Omega$. The magnitude of the impedance is $|Z_{ph}| = \sqrt{8^2 + 6^2} = \sqrt{64 + 36} = \sqrt{100} = 10 \Omega$.
The phase current magnitude is $I_{ph\_load} = |V_{ph\_load}| / |Z_{ph}|$.
$I_{ph\_load} = 400 \text{ V} / 10 \Omega = 40$ A.

c) **Line current in the load:**
For a balanced delta-connected load, the line current is $I_L = \sqrt{3} \times I_{ph\_load}$.
$I_L = \sqrt{3} \times 40$ A $\approx 1.732 \times 40$ A $\approx 69.28$ A.

---

**Question 4 (Comparison):**
Briefly explain one advantage of using a star connection compared to a delta connection for power distribution.
**(Knowledge Level: K2 - Understanding, K3 - Application)**

**Answer 4:**
A significant advantage of the star connection for power distribution is the availability of a neutral point. This neutral point allows for a four-wire system, enabling both three-phase loads and single-phase loads to be powered from the same distribution network. This is essential for supplying power to residential areas where both large appliances (requiring three-phase) and standard household appliances (requiring single-phase) are used. Delta connections typically only provide a three-wire system.

---

**Question 5 (Conceptual Pitfall):**
If a three-phase motor is rated at 400 V and connected in delta, does 400 V refer to the line voltage or the phase voltage?
**(Knowledge Level: K2 - Understanding)**

**Answer 5:**
For a motor rated at 400 V and connected in delta, the 400 V typically refers to the **line voltage**. This is because in a delta connection, the line voltage is equal to the phase voltage, so the motor winding is directly subjected to the line voltage of the supply.

---

Keep practicing these relationships and understanding the underlying phasor diagrams. They are the bedrock of AC circuit analysis, especially in three-phase systems. We'll build upon this in our next session!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
