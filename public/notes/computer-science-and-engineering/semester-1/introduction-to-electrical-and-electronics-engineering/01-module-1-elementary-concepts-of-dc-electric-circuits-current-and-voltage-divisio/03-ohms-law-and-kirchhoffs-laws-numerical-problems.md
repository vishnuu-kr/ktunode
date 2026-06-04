---
title: "Ohms Law and Kirchhoff's laws - numerical problems."
subject: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING"
module: "Module 1: Elementary concepts of DC electric circuits: Current and Voltage Division Rule "
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5c64"
status: "completed"
scrapedAt: "2026-05-20T16:38:52.827Z"
---
Absolutely! Here are comprehensive study notes for the topic "Ohm's Law and Kirchhoff's Laws - Numerical Problems" from Module 1 of your Introduction to Electrical and Electronics Engineering course. I've aimed for a natural, teaching style, incorporating your learning outcomes, textbook references, and a focus on building understanding for both conceptual clarity and exam success.

---

## Module 1: Elementary Concepts of DC Electric Circuits

### Topic: Ohm's Law and Kirchhoff's Laws - Numerical Problems

Welcome, everyone! In this session, we're going to dive into the foundational pillars of DC circuit analysis: Ohm's Law and Kirchhoff's Laws. These aren't just abstract rules; they are the very tools that allow us to understand and predict how electricity behaves in circuits. Mastering them is crucial, and that’s why we’ll be focusing on solving numerical problems. Think of it as learning to cook – you need to know the ingredients (components), the methods (laws), and then practice to make a delicious meal (analyze a circuit)!

Our journey today will directly help us achieve **Course Outcome 1 (CO1): Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits.** We'll be building your **Knowledge Level K2** – understanding – and progressively moving towards **K3** – application – as we work through examples.

### 1. Revisiting the Basics: What is Voltage, Current, and Resistance?

Before we jump into the laws, let's quickly refresh our core concepts. This is fundamental, so if these ideas are fuzzy, the laws will seem like magic!

*   **Voltage (V):** Imagine voltage as the "push" or electrical pressure that makes charges move. It's the potential difference between two points. Think of it like water pressure in a pipe. Higher pressure means water flows more forcefully. We measure voltage in **Volts (V)**.
*   **Current (I):** Current is the flow of electric charge. It's the rate at which charge passes a point. In our water analogy, this is the actual amount of water flowing per second. We measure current in **Amperes (A)**, often shortened to "amps."
*   **Resistance (R):** Resistance is the opposition to the flow of current. It's like a constriction or a rough patch in our water pipe that slows down the water. The higher the resistance, the harder it is for current to flow. We measure resistance in **Ohms ($\Omega$)**.

### 2. Ohm's Law: The Fundamental Relationship

Now, let's talk about the first major player: **Ohm's Law**. This law, attributed to Georg Ohm, describes the fundamental relationship between voltage, current, and resistance in many materials, especially conductors.

**The Law Itself:** Ohm's Law states that the current flowing through a conductor is directly proportional to the voltage across its ends, and inversely proportional to the resistance of the conductor, provided the temperature and other physical conditions remain unchanged.

Mathematically, this is expressed as:

$V = I \times R$

This simple equation is incredibly powerful! It tells us three things:

1.  **If you increase the voltage (the push), and resistance stays the same, the current (the flow) will increase proportionally.** (More push, more flow).
2.  **If you increase the resistance (the opposition), and voltage stays the same, the current will decrease.** (More opposition, less flow).
3.  **If you want to maintain the same current (flow) when resistance increases, you need to increase the voltage (push).**

**Rearranging Ohm's Law:** You can rearrange this formula to solve for any of the variables:

*   To find Current: $I = \frac{V}{R}$
*   To find Resistance: $R = \frac{V}{I}$

**Visualizing Ohm's Law:** Many students find it helpful to visualize this with a triangle. Draw a triangle with 'V' at the top, and 'I' and 'R' at the bottom corners. To find a variable, cover it up, and the remaining letters show you the relationship.

**Real-World Analogy:** Think about a simple flashlight.
*   The **battery** provides the voltage (the push).
*   The **filament in the bulb** has resistance (it opposes the flow).
*   The **current** is the flow of electrons through the filament.

If you use a higher voltage battery (say, from a 9V to a 12V system for a similar bulb), the bulb will glow brighter because more current flows. If you put a different, higher resistance bulb in the same 9V flashlight, it will glow dimmer because less current flows.

**Practical Application (CO1):** Understanding Ohm's Law is the absolute bedrock for solving any DC circuit problem. When you’re asked to find the current through a resistor, or the voltage across it, or the resistance value itself, Ohm's Law is almost always your first port of call. Remember this: **Ohm's Law is your fundamental tool for analyzing individual components in a DC circuit.**

**Important Note from Textbooks:** Authors like D.P. Kothari and I.J. Nagrath (in their "Basic Electrical Engineering" texts) emphasize that Ohm's Law is applicable to linear components, where the resistance remains constant regardless of voltage or current. Most resistors are treated as linear.

#### Example 1: Simple Resistor Calculation

Let's say we have a **12V battery** connected across a **4 $\Omega$ resistor**. What is the current flowing through the resistor?

*   We know $V = 12$V and $R = 4$ $\Omega$.
*   We need to find $I$.
*   Using Ohm's Law: $I = \frac{V}{R}$
*   $I = \frac{12V}{4 \Omega} = 3A$

So, a current of 3 Amperes flows through the resistor. Simple, right?

#### Example 2: Finding Resistance

If a circuit element has a **5V drop** across it when **2A of current** flows through it, what is its resistance?

*   We know $V = 5$V and $I = 2$A.
*   We need to find $R$.
*   Using Ohm's Law: $R = \frac{V}{I}$
*   $R = \frac{5V}{2A} = 2.5 \Omega$

The resistance of the element is 2.5 Ohms.

#### Example 3: Finding Voltage

What is the voltage across a **10 $\Omega$ resistor** if **500mA** of current flows through it?

*   First, we need to convert current to Amperes: 500mA = 0.5A.
*   We know $I = 0.5$A and $R = 10$ $\Omega$.
*   We need to find $V$.
*   Using Ohm's Law: $V = I \times R$
*   $V = 0.5A \times 10 \Omega = 5V$

The voltage across the resistor is 5 Volts.

**Exam Tip:** Always ensure your units are consistent! If voltage is in Volts, current must be in Amperes, and resistance in Ohms. Don't forget to convert milliamps (mA) to Amps or kilohms (k$\Omega$) to Ohms when needed.

### 3. Kirchhoff's Laws: For More Complex Circuits

While Ohm's Law is fantastic for single components, real-world circuits are often made of interconnected components. This is where **Kirchhoff's Laws** come in. These laws are essential for analyzing circuits with multiple loops and branches, which is a direct application of **CO1**. They were formulated by Gustav Kirchhoff.

There are two Kirchhoff's Laws:

1.  **Kirchhoff's Current Law (KCL) - The Junction Rule**
2.  **Kirchhoff's Voltage Law (KVL) - The Loop Rule**

Let's break them down.

#### 3.1. Kirchhoff's Current Law (KCL)

**The Law:** KCL states that the algebraic sum of currents entering a junction (or node) is equal to the algebraic sum of currents leaving the junction.

**In Simpler Terms:** What goes into a junction must come out. It’s like a busy intersection in a city. The total number of cars arriving at the intersection must equal the total number of cars departing from it. No cars are created or destroyed at the intersection itself.

**Mathematical Expression:**
$\sum I_{in} = \sum I_{out}$
or
$\sum I = 0$ (where currents entering are taken as positive and currents leaving as negative, or vice-versa).

**How to Apply it:**
1.  **Identify a junction:** A junction is any point in a circuit where three or more wires connect.
2.  **Assign current directions:** For each branch connected to the junction, assume a direction of current flow. It's okay if you guess wrong; the math will sort it out. If you get a negative value for a current you assumed to be flowing in a certain direction, it simply means the actual current is flowing in the opposite direction.
3.  **Apply the rule:** Sum all currents entering the junction and set it equal to the sum of all currents leaving.

**Real-World Analogy:** Think about water pipes meeting at a T-junction. The amount of water flowing into the T from one pipe must equal the total amount of water flowing out through the other two pipes combined.

**Example 4: KCL in Action**

Consider a junction where three wires meet.
*   Wire 1 has current $I_1$ entering.
*   Wire 2 has current $I_2$ entering.
*   Wire 3 has current $I_3$ leaving.

If $I_1 = 2$A and $I_2 = 3$A, what is $I_3$?

*   Applying KCL: $I_1 + I_2 = I_3$
*   $2A + 3A = I_3$
*   $I_3 = 5A$

So, 5 Amperes flows out of the junction.

**Example 5: More Complex KCL**

Let's say at a junction:
*   Current $I_A$ (3A) is entering.
*   Current $I_B$ (1A) is leaving.
*   Current $I_C$ is entering.
*   Current $I_D$ (2A) is leaving.

What is the value and direction of $I_C$?

*   Apply KCL: $\sum I_{in} = \sum I_{out}$
*   $I_A + I_C = I_B + I_D$
*   $3A + I_C = 1A + 2A$
*   $3A + I_C = 3A$
*   $I_C = 3A - 3A$
*   $I_C = 0A$

In this case, no current flows through $I_C$.

**Example 6: Unknown Direction**

At a junction, we have:
*   $I_1 = 5$A entering.
*   $I_2 = 3$A leaving.
*   $I_3$ is connected, but we don't know its direction.

What is $I_3$, and in which direction does it flow?

*   Let's assume $I_3$ is leaving. Then: $I_1 = I_2 + I_3$
*   $5A = 3A + I_3$
*   $I_3 = 5A - 3A = 2A$

Since we got a positive value for $I_3$ and our assumption was that it's leaving, then $I_3$ is indeed **2A leaving** the junction.

What if we assumed $I_3$ was entering? Then: $I_1 + I_3 = I_2$
$5A + I_3 = 3A$
$I_3 = 3A - 5A = -2A$

A negative current means the assumed direction is wrong. If we assumed $I_3$ was entering and got -2A, it means the actual current is 2A *leaving*. Both methods lead to the same physical conclusion!

**Exam Tip:** For KCL problems, clearly mark your junctions and assign current directions. If you're asked to find a current, ensure your final answer specifies both magnitude and direction (or state it's leaving/entering if the direction is obvious from the problem setup).

#### 3.2. Kirchhoff's Voltage Law (KVL)

**The Law:** KVL states that the algebraic sum of all voltages around any closed loop in a circuit must be zero.

**In Simpler Terms:** If you start at any point in a closed loop and go around the entire loop, adding up all the voltage "rises" (like going from negative to positive terminal of a battery) and subtracting all the voltage "drops" (across resistors or sources in reverse), you'll end up back where you started with a net change of zero. It's essentially the conservation of energy applied to electric circuits.

**Mathematical Expression:**
$\sum V = 0$ (around a closed loop)

**How to Apply it:**
1.  **Identify a closed loop:** A loop is a path in the circuit that starts and ends at the same point without crossing itself.
2.  **Choose a starting point and direction:** Pick any point in the loop and decide whether you'll traverse the loop clockwise or counter-clockwise.
3.  **Assign voltage polarities:**
    *   For voltage sources (batteries), the polarity is given (e.g., positive terminal is marked '+', negative is '-').
    *   For resistors, the polarity of the voltage drop is determined by the direction of current flow. If current flows *into* the positive terminal of a resistor (as defined by your loop traversal), it's a voltage *drop* (negative in your sum). If current flows *out of* the positive terminal, it's a voltage *rise* (positive in your sum, but this is less common with standard resistor symbols). The most common convention is: current enters the positive terminal of a passive element (like a resistor) and leaves the negative. So, if your loop direction matches the current direction through a resistor, it's a voltage drop. If it opposes the current direction, it's a voltage rise.
4.  **Write the KVL equation:** Traverse the loop in your chosen direction.
    *   If you cross a voltage source from '-' to '+', add its voltage.
    *   If you cross a voltage source from '+' to '-', subtract its voltage.
    *   If you cross a resistor in the *same direction* as the assumed current, subtract $I \times R$ (voltage drop).
    *   If you cross a resistor in the *opposite direction* to the assumed current, add $I \times R$ (voltage rise).
5.  **Solve the equation:** You'll get an equation that you can solve for an unknown voltage, current, or resistance.

**Real-World Analogy:** Imagine hiking in a mountainous region. You start at base camp. You go up some hills (voltage rises from sources) and down into valleys (voltage drops across resistors). If you complete a circular hike and return to base camp, the total elevation gain must equal the total elevation loss. Your net change in altitude is zero.

**Example 7: Simple Series Circuit with KVL**

Consider a circuit with a **12V battery** and two resistors in series: $R_1 = 2 \Omega$ and $R_2 = 4 \Omega$.

*   **Step 1 & 2:** Choose the loop (the entire circuit) and let's traverse it clockwise.
*   **Step 3:** The battery has a '+' and '-' terminal. Assume current $I$ flows clockwise. Current will enter the positive terminal of $R_1$ and $R_2$.
*   **Step 4:** Let's write the KVL equation starting from the negative terminal of the battery and moving clockwise:
    *   Start at the negative terminal of the battery: $-0$ (our starting potential)
    *   Cross the battery from '-' to '+': $+12$V
    *   Cross $R_1$ in the direction of current $I$: $-I \times R_1 = -I \times 2 \Omega$
    *   Cross $R_2$ in the direction of current $I$: $-I \times R_2 = -I \times 4 \Omega$
    *   You are back to the starting point.
*   **Step 5:** The KVL equation is: $12V - (I \times 2 \Omega) - (I \times 4 \Omega) = 0$
    *   $12V = I \times (2 \Omega + 4 \Omega)$
    *   $12V = I \times 6 \Omega$
    *   $I = \frac{12V}{6 \Omega} = 2A$

This is the same result we'd get using Ohm's Law for a series circuit (total voltage / total resistance). KVL is more general and can handle circuits where simply adding resistances isn't straightforward.

**Example 8: Two Loops and Unknown Current**

Let's look at a circuit with two loops.

```
     +---[ R1=2 ]---+
     |              |
    [V1=10V]        [R3=3]
     |              |
     +---[ R2=4 ]---+
     |              |
     +---[V2=-5V]--+ (Note: V2 is oriented with + at the bottom)
```
Let's simplify the diagram description: A circuit with a 10V source (positive at top) and a 2 Ohm resistor ($R_1$) in parallel. This parallel combination is then in series with another 4 Ohm resistor ($R_2$). Then, a second source ($V_2$) is connected in series with $R_2$, oriented with its positive terminal at the bottom.

Let's refine this scenario to be clearer for analysis. Imagine a circuit with:
*   A 10V voltage source ($V_1$), positive terminal up.
*   A 2 $\Omega$ resistor ($R_1$) connected in series with $V_1$.
*   This combination is then connected across a 5 $\Omega$ resistor ($R_2$).
*   And a 3 $\Omega$ resistor ($R_3$) is in series with $R_2$.
*   A 4V voltage source ($V_2$), positive terminal down, is also in series with $R_2$ and $R_3$.

This is becoming complex to describe without a diagram. Let's use a standard two-loop circuit example, often seen in textbooks like Schaum's Outlines.

**Standard Two-Loop Circuit Example:**

Consider a circuit with two loops.
*   **Loop 1:** Contains $V_1 = 10$V, $R_1 = 2 \Omega$, and $R_2 = 3 \Omega$.
*   **Loop 2:** Contains $V_2 = 5$V, $R_2 = 3 \Omega$, and $R_3 = 4 \Omega$.
*   $R_2$ is common to both loops.
*   $V_1$ and $R_1$ are in the "left" loop. $V_2$ and $R_3$ are in the "right" loop. $R_2$ is in the middle, connecting the two loops. Let $V_1$ positive be upwards, $V_2$ positive be downwards.

**Diagrammatic Representation (Conceptual):**

```
       +----[ R1=2 ]----+----[ R2=3 ]----+----[ R3=4 ]----+
       |                |                |                |
      [V1=10V]         (Branch A)      (Branch B)        [V2=5V]
       |                |                |                |
       +----------------+----------------+----------------+
```
Let's clarify the connection:
*   $V_1$ and $R_1$ are in series, forming the left branch.
*   $R_2$ is connected between the top node after $R_1$ and the bottom node after $V_2$.
*   $R_3$ and $V_2$ are in series, forming the right branch.

Let's define the nodes:
*   Node A: Top connection point between $R_1$, $R_2$, and the top of $V_1$.
*   Node B: Bottom connection point between $V_1$, $R_2$, and the bottom of $V_2$.
*   Node C: Top connection point between $R_1$, $R_2$, and the top of $R_3$.
*   Node D: Bottom connection point between $R_2$, $R_3$, and the bottom of $V_2$.

This is still complex to represent in text. A more standard example for KVL and KCL is a circuit where two voltage sources are connected in a way that creates two distinct loops.

**Let's use a common example:**

Consider a circuit with:
*   A **10V source ($V_1$)** with positive terminal up.
*   A **5V source ($V_2$)** with positive terminal down.
*   A **2 Ohm resistor ($R_1$)** in series with $V_1$.
*   A **3 Ohm resistor ($R_2$)** in series with $V_2$.
*   Both these branches are connected in parallel by a **4 Ohm resistor ($R_3$)**.

Let's define nodes:
*   Top node: $N_1$
*   Bottom node: $N_2$

Circuit structure:
$V_1$ and $R_1$ are in the left branch between $N_1$ and $N_2$.
$V_2$ and $R_2$ are in the right branch between $N_1$ and $N_2$.
$R_3$ is connected directly between $N_1$ and $N_2$.

This forms two loops:
*   Loop 1: $V_1$, $R_1$, $R_3$
*   Loop 2: $V_2$, $R_2$, $R_3$

Let's assume:
*   Current $I_1$ flows in the left loop (say, clockwise, so up through $V_1$ and $R_1$).
*   Current $I_2$ flows in the right loop (say, clockwise, so down through $R_2$ and up through $V_2$).
*   Current $I_3$ flows through $R_3$. Let's assume it flows from $N_1$ to $N_2$.

Now, let's apply the laws:

**Applying KCL at Node $N_1$:**
Current entering $N_1$ from $V_1/R_1$ branch.
Current entering $N_1$ from $V_2/R_2$ branch.
Current leaving $N_1$ through $R_3$.

Let's define branch currents more clearly:
*   $I_A$: Current flowing from $V_1$ up through $R_1$.
*   $I_B$: Current flowing from $V_2$ up through $R_2$.
*   $I_C$: Current flowing from $N_1$ down through $R_3$ to $N_2$.

KCL at $N_1$: $I_A + I_B = I_C$ (assuming $I_A$ and $I_B$ flow towards $N_1$ from their sources, and $I_C$ flows away from $N_1$)

Let's redefine KCL based on loops.
Let $I_1$ be the current in the loop containing $V_1, R_1$ and $R_3$.
Let $I_2$ be the current in the loop containing $V_2, R_2$ and $R_3$.

*   Current through $V_1$ and $R_1$ is $I_1$.
*   Current through $V_2$ and $R_2$ is $I_2$.
*   Current through $R_3$: If $I_1$ flows left-to-right through $R_3$ and $I_2$ flows right-to-left through $R_3$, then the net current through $R_3$ is $I_1 - I_2$. (Let's assume $I_1$ goes clockwise in left loop, $I_2$ goes clockwise in right loop).

**Let's assume directions:**
*   Loop 1 (left): Clockwise, so current $I_1$ flows UP through $V_1$, UP through $R_1$, and RIGHT through $R_3$.
*   Loop 2 (right): Clockwise, so current $I_2$ flows DOWN through $R_2$, DOWN through $V_2$, and LEFT through $R_3$.

**KCL at the top node:**
Current entering = $I_1$ (through $R_1$) + $I_2$ (through $R_2$).
Current leaving = Current through $R_3$.
The current through $R_3$ from top to bottom would be $I_1$ (rightward) minus $I_2$ (leftward). No, this is where it gets confusing. Let's be systematic.

**Standard Approach: Mesh Analysis using KVL**
Let $I_1$ be the current in the left loop (flowing clockwise), and $I_2$ be the current in the right loop (flowing clockwise).

*   **Loop 1 KVL (Clockwise):** Start from bottom-left corner, moving clockwise.
    *   Cross $V_1$ from - to +: $+10$V
    *   Through $R_1$ (same direction as $I_1$): $-I_1 \times R_1 = -I_1 \times 2 \Omega$
    *   Through $R_3$ (same direction as $I_1$): $-I_1 \times R_3 = -I_1 \times 4 \Omega$
    *   Cross $V_2$ from + to -: $-5$V
    *   Through $R_2$ (opposite direction of $I_2$): $+I_2 \times R_2 = +I_2 \times 3 \Omega$
    *   Back to start.
    KVL Equation 1: $10 - 2I_1 - 4I_1 + 3I_2 - 5 = 0$
    $5 - 6I_1 + 3I_2 = 0$
    $6I_1 - 3I_2 = 5$  **(Equation A)**

*   **Loop 2 KVL (Clockwise):** Start from bottom-right corner, moving clockwise.
    *   Cross $V_2$ from - to +: $+5$V
    *   Through $R_2$ (same direction as $I_2$): $-I_2 \times R_2 = -I_2 \times 3 \Omega$
    *   Through $R_3$ (opposite direction of $I_1$): $+I_1 \times R_3 = +I_1 \times 4 \Omega$
    *   Cross $V_1$ from + to -: $-10$V
    *   Through $R_1$ (opposite direction of $I_1$): $+I_1 \times R_1 = +I_1 \times 2 \Omega$
    *   Back to start.
    KVL Equation 2: $5 - 3I_2 + 4I_1 - 10 + 2I_1 = 0$
    $-5 + 6I_1 - 3I_2 = 0$
    $6I_1 - 3I_2 = 5$  **(Equation B)**

Wait, Equation A and Equation B are the same! This means there might be a dependency, or I've structured the example poorly. Let's use a more standard textbook example where the loops are truly independent in their definition but share a component.

**Revised Standard Example:**

Consider two loops.
*   **Loop 1:** A 10V source ($V_1$), a 2 $\Omega$ resistor ($R_1$), and a 3 $\Omega$ resistor ($R_2$) in series.
*   **Loop 2:** A 5V source ($V_2$), a 4 $\Omega$ resistor ($R_3$), and the same 3 $\Omega$ resistor ($R_2$) in series.
*   The two loops are connected such that $R_2$ is common. Assume $V_1$ and $V_2$ are oriented to drive current in opposite directions through $R_2$.

Let's define the loops and currents:
*   Let $I_1$ be the current in the left loop (clockwise).
*   Let $I_2$ be the current in the right loop (clockwise).

**Circuit Structure (Conceptual):**

```
     +----[ R1=2 ]----+----[ R2=3 ]----+----[ R3=4 ]----+
     |                |                |                |
    [V1=10V]         (Node X)         (Node Y)        [V2=5V]
     |                |                |                |
     +----------------+----------------+----------------+
```
(Imagine the bottom line is the common return path, and the top path connects the elements.)

Let's assume $V_1$ is positive at the top, and $V_2$ is positive at the bottom.

*   **Loop 1 KVL (Clockwise):** Starting from bottom-left, moving clockwise:
    *   Cross $V_1$ from - to +: $+10$V
    *   Through $R_1$ (same direction as $I_1$): $-I_1 \times 2 \Omega$
    *   Through $R_2$ (same direction as $I_1$): $-I_1 \times 3 \Omega$
    *   Back to start.
    KVL Equation 1: $10 - 2I_1 - 3I_1 = 0$
    $10 - 5I_1 = 0$
    $5I_1 = 10 \implies I_1 = 2A$

*   **Loop 2 KVL (Clockwise):** Starting from bottom-right, moving clockwise:
    *   Cross $V_2$ from + to -: $-5$V
    *   Through $R_3$ (same direction as $I_2$): $-I_2 \times 4 \Omega$
    *   Through $R_2$ (opposite direction of $I_1$, same direction as $I_2$): $-I_2 \times 3 \Omega$
    *   Back to start.
    KVL Equation 2: $-5 - 4I_2 - 3I_2 = 0$
    $-5 - 7I_2 = 0$
    $7I_2 = -5 \implies I_2 = -\frac{5}{7}A$

What does a negative $I_2$ mean? It means our assumed clockwise direction for $I_2$ was incorrect. The actual current $I_2$ flows counter-clockwise with a magnitude of $\frac{5}{7}A$.

**Now, what is the current through $R_2$?**
If $I_1$ is clockwise and $I_2$ is actually counter-clockwise:
*   Current through $R_2$ from left to right = $I_1$ (which is 2A, flowing left to right through $R_2$ in our loop definition).
*   Current through $R_2$ from right to left = $|I_2|$ (which is $\frac{5}{7}A$, flowing right to left through $R_2$ because $I_2$ is counter-clockwise).

Let's redefine loop currents and directions to make it simpler and avoid confusion with shared components.
Let $I_1$ be the current flowing through $V_1$, $R_1$.
Let $I_2$ be the current flowing through $V_2$, $R_3$.
Let $I_3$ be the current flowing through $R_2$.

Assume:
*   $I_1$ flows upwards through $V_1$ and $R_1$.
*   $I_2$ flows downwards through $V_2$ and $R_3$.
*   $I_3$ flows from left to right through $R_2$.

Now, apply KCL at the top node: $I_1$ (into node) $+ I_2$ (into node) $= I_3$ (out of node). This setup is not forming distinct loops in the traditional mesh sense.

**Let's stick to the classic Mesh Analysis structure:**

Consider a circuit with two meshes (loops).
*   **Mesh 1:** Contains $V_1=10V$, $R_1=2\Omega$, and $R_2=3\Omega$. Assume $V_1$ has positive terminal at top.
*   **Mesh 2:** Contains $V_2=5V$, $R_3=4\Omega$, and $R_2=3\Omega$. Assume $V_2$ has positive terminal at bottom.
*   $R_2$ is shared between the meshes.

Let $I_1$ be the mesh current for Mesh 1 (clockwise).
Let $I_2$ be the mesh current for Mesh 2 (clockwise).

**KCL/KVL setup for Mesh Analysis:**
*   **Mesh 1 KVL (Clockwise):**
    *   $+10V$ (crossing $V_1$ from - to +)
    *   $-I_1 \times R_1$ (voltage drop across $R_1$)
    *   $-I_1 \times R_2$ (voltage drop across $R_2$ due to $I_1$)
    *   $+I_2 \times R_2$ (voltage rise across $R_2$ due to $I_2$ opposing $I_1$)
    *   $+5V$ (crossing $V_2$ from - to +)
    KVL1: $10 - 2I_1 - 3I_1 + 3I_2 + 5 = 0$
    $15 - 5I_1 + 3I_2 = 0$
    $5I_1 - 3I_2 = 15$ **(Equation A)**

*   **Mesh 2 KVL (Clockwise):**
    *   $+5V$ (crossing $V_2$ from - to +)
    *   $-I_2 \times R_3$ (voltage drop across $R_3$)
    *   $-I_2 \times R_2$ (voltage drop across $R_2$ due to $I_2$)
    *   $+I_1 \times R_2$ (voltage rise across $R_2$ due to $I_1$ opposing $I_2$)
    *   $-10V$ (crossing $V_1$ from + to -)
    KVL2: $5 - 4I_2 - 3I_2 + 2I_1 - 10 = 0$
    $-5 + 2I_1 - 7I_2 = 0$
    $-2I_1 + 7I_2 = -5$ **(Equation B)**

Now we have a system of two linear equations with two unknowns ($I_1, I_2$):

(A) $5I_1 - 3I_2 = 15$
(B) $-2I_1 + 7I_2 = -5$

We can solve this using substitution or elimination. Let's use substitution.
From (A): $5I_1 = 15 + 3I_2 \implies I_1 = 3 + \frac{3}{5}I_2$

Substitute this into (B):
$-2(3 + \frac{3}{5}I_2) + 7I_2 = -5$
$-6 - \frac{6}{5}I_2 + 7I_2 = -5$
$7I_2 - \frac{6}{5}I_2 = -5 + 6$
$\frac{35I_2 - 6I_2}{5} = 1$
$\frac{29I_2}{5} = 1$
$I_2 = \frac{5}{29}A$

Now substitute $I_2$ back into the equation for $I_1$:
$I_1 = 3 + \frac{3}{5} \times (\frac{5}{29})$
$I_1 = 3 + \frac{3}{29}$
$I_1 = \frac{87 + 3}{29} = \frac{90}{29}A$

So, $I_1 = \frac{90}{29}A \approx 3.1$A (clockwise in Mesh 1) and $I_2 = \frac{5}{29}A \approx 0.17$A (clockwise in Mesh 2).

**Finding current through $R_2$:**
The current through $R_2$ is the difference between the mesh currents.
Current through $R_2$ (flowing from Mesh 1 side to Mesh 2 side) $= I_1 - I_2$.
Current through $R_2 = \frac{90}{29} - \frac{5}{29} = \frac{85}{29}A$.
This current flows from the top node to the bottom node, given our loop definitions.

**Important Concepts Reinforced (CO1):**
*   We used KVL to define relationships in each loop.
*   The shared component ($R_2$) caused the mesh currents ($I_1, I_2$) to interact in the KVL equations.
*   Solving the system of equations allowed us to find the fundamental currents driving each loop.
*   From these mesh currents, we could find the actual current through any component.

**Exam Tip:** When solving problems with multiple loops, the most systematic approach is often Mesh Analysis (using KVL for each mesh) or Nodal Analysis (using KCL at each node). Always define your loop currents and directions clearly at the start. Pay close attention to how shared components affect the KVL equations for the respective meshes. For resistors, if the mesh current flows in the same direction as the assumed current through the resistor, it's a voltage drop (-IR); if it flows in the opposite direction, it's a voltage rise (+IR).

### 4. Current Division Rule (CDR) and Voltage Division Rule (VDR) - A Quick Mention

While Ohm's and Kirchhoff's Laws are paramount, you'll also be introduced to the Current Division Rule (CDR) and Voltage Division Rule (VDR) in this module. These are shortcuts derived from Ohm's Law and series/parallel combinations, and they are extremely useful for quickly finding currents in parallel branches or voltages across series components.

*   **VDR** helps find the voltage across a specific resistor in a series combination.
*   **CDR** helps find the current through a specific resistor in a parallel combination.

We won't delve deeply into their numerical problems here as they are distinct sub-topics, but remember they are derived from the very laws we've discussed and are powerful tools. For example, in the last example, we found the current through $R_2$ by subtracting mesh currents. If $R_1$ and $V_1$ were in one branch, and $R_3$ and $V_2$ were in another, and these branches were in parallel with $R_2$, you could use CDR on the combined source-resistor branches to find the current division into $R_2$ and the other path.

### 5. Connecting to Course Outcomes

Let's quickly recap how this session directly addresses our learning goals:

*   **CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits.**
    *   We have applied Ohm's Law to calculate voltage, current, and resistance in simple circuits.
    *   We have applied Kirchhoff's Current Law (KCL) to analyze current flow at junctions.
    *   We have applied Kirchhoff's Voltage Law (KVL) to analyze voltage relationships in closed loops, including multi-loop circuits using mesh analysis.
    *   This has directly equipped you to solve simple DC circuits, forming the basis for more complex AC circuit analysis later.

### 6. Summary and Key Takeaways

*   **Ohm's Law ($V=IR$)** is the fundamental relationship between voltage, current, and resistance for linear components. It's your primary tool for single-component analysis.
*   **Kirchhoff's Current Law (KCL)** states that the sum of currents entering a node equals the sum of currents leaving it ($\sum I_{in} = \sum I_{out}$). This is based on the conservation of charge.
*   **Kirchhoff's Voltage Law (KVL)** states that the sum of voltages around any closed loop is zero ($\sum V = 0$). This is based on the conservation of energy.
*   These laws are essential for analyzing circuits with multiple components and loops.
*   For multi-loop circuits, systematic application of KVL (like in Mesh Analysis) or KCL (like in Nodal Analysis) is crucial.
*   **Always be mindful of units and assumed current directions.** A negative result indicates the actual current is in the opposite direction to what you assumed.

Remember these laws are your bedrock. Practice is key to becoming fluent in applying them. Don't hesitate to draw circuits, label currents and voltages, and work through examples.

---

### Sample Questions and Answers

Here are a few questions to test your understanding.

**Question 1 (Conceptual):**
State Ohm's Law and explain its significance in a DC circuit. What happens to the current through a resistor if the voltage across it is doubled, while the resistance remains constant?

**Answer 1:**
Ohm's Law states that the current ($I$) flowing through a conductor between two points is directly proportional to the voltage ($V$) across the two points and inversely proportional to the resistance ($R$) between them, provided the temperature and other physical conditions remain unchanged. Its mathematical form is $V = IR$.
Its significance lies in establishing the fundamental linear relationship between voltage, current, and resistance in most conductive materials. It allows us to calculate any one of these quantities if the other two are known.
If the voltage across a resistor is doubled while the resistance remains constant, the current through the resistor will also double, as $I = V/R$. If $V$ becomes $2V$, then $I$ becomes $(2V)/R = 2(V/R) = 2I$.

**Question 2 (Numerical - Ohm's Law):**
A device has a resistance of 100 $\Omega$. If a voltage of 24V is applied across it, what is the current flowing through the device?

**Answer 2:**
Given: Resistance, $R = 100 \Omega$, Voltage, $V = 24$V.
We need to find the current, $I$.
Using Ohm's Law: $I = \frac{V}{R}$
$I = \frac{24V}{100 \Omega} = 0.24A$
The current flowing through the device is 0.24 Amperes.

**Question 3 (Numerical - KCL):**
At a junction in a circuit, current $I_1 = 5$A is entering, and current $I_2 = 2$A is leaving. If another current $I_3$ is also leaving the junction, what is the value of $I_3$?

**Answer 3:**
According to Kirchhoff's Current Law (KCL), the sum of currents entering a junction equals the sum of currents leaving the junction.
Let the currents entering be $I_{in}$ and currents leaving be $I_{out}$.
$\sum I_{in} = \sum I_{out}$
In this case, $I_1$ is entering, and $I_2$ and $I_3$ are leaving.
$I_1 = I_2 + I_3$
$5A = 2A + I_3$
$I_3 = 5A - 2A = 3A$
The value of $I_3$ is 3 Amperes, leaving the junction.

**Question 4 (Numerical - KVL/Mesh Analysis):**
Consider a circuit with two loops.
Loop 1: 12V source, 3 $\Omega$ resistor, and a 5 $\Omega$ resistor in series.
Loop 2: 8V source, 6 $\Omega$ resistor, and the 5 $\Omega$ resistor (common to both loops) in series.
Assume the 12V source's positive terminal is at the top. Assume the 8V source's positive terminal is at the bottom. Let the 5 $\Omega$ resistor be in the middle.
Let $I_1$ be the clockwise mesh current for Loop 1 and $I_2$ be the clockwise mesh current for Loop 2. Find the currents $I_1$ and $I_2$.

**Answer 4:**
**Loop 1 KVL (Clockwise):**
Assume 12V is positive at the top.
Starting from the bottom of the 12V source, moving clockwise:
$+12V$ (crossing 12V source from - to +)
$-I_1 \times 3\Omega$ (voltage drop across 3 $\Omega$)
$-I_1 \times 5\Omega$ (voltage drop across 5 $\Omega$ due to $I_1$)
$+I_2 \times 5\Omega$ (voltage rise across 5 $\Omega$ due to $I_2$ opposing $I_1$)
KVL1: $12 - 3I_1 - 5I_1 + 5I_2 = 0$
$12 - 8I_1 + 5I_2 = 0$
$8I_1 - 5I_2 = 12$  **(Equation A)**

**Loop 2 KVL (Clockwise):**
Assume 8V is positive at the bottom.
Starting from the bottom of the 8V source, moving clockwise:
$-8V$ (crossing 8V source from + to -)
$-I_2 \times 6\Omega$ (voltage drop across 6 $\Omega$)
$-I_2 \times 5\Omega$ (voltage drop across 5 $\Omega$ due to $I_2$)
$+I_1 \times 5\Omega$ (voltage rise across 5 $\Omega$ due to $I_1$ opposing $I_2$)
KVL2: $-8 - 6I_2 - 5I_2 + 5I_1 = 0$
$-8 - 11I_2 + 5I_1 = 0$
$5I_1 - 11I_2 = 8$  **(Equation B)**

Now we solve the system of equations:
(A) $8I_1 - 5I_2 = 12$
(B) $5I_1 - 11I_2 = 8$

Multiply (A) by 11 and (B) by 5 to eliminate $I_2$:
$88I_1 - 55I_2 = 132$
$25I_1 - 55I_2 = 40$

Subtract the second modified equation from the first:
$(88I_1 - 25I_1) - (55I_2 - 55I_2) = 132 - 40$
$63I_1 = 92$
$I_1 = \frac{92}{63}A \approx 1.46A$

Substitute $I_1$ back into Equation (A):
$8(\frac{92}{63}) - 5I_2 = 12$
$\frac{736}{63} - 5I_2 = 12$
$5I_2 = \frac{736}{63} - 12 = \frac{736 - 12 \times 63}{63} = \frac{736 - 756}{63} = \frac{-20}{63}$
$I_2 = \frac{-20}{63 \times 5} = \frac{-4}{63}A \approx -0.063A$

So, $I_1 \approx 1.46A$ (clockwise) and $I_2 \approx 0.063A$ (counter-clockwise, as $I_2$ is negative).

---
