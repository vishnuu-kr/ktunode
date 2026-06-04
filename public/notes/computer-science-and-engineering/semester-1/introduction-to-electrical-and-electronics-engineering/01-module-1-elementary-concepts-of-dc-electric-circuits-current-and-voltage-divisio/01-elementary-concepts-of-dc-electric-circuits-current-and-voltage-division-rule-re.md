---
title: "Elementary concepts of DC electric circuits: Current and Voltage Division Rule - Relative potential"
subject: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING"
module: "Module 1: Elementary concepts of DC electric circuits: Current and Voltage Division Rule "
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5c62"
status: "completed"
scrapedAt: "2026-05-20T16:38:49.031Z"
---
# Module 1: Elementary Concepts of DC Electric Circuits: Current and Voltage Division Rules - Relative Potential

Welcome, everyone! In our journey into the fascinating world of Electrical and Electronics Engineering, we're starting with the absolute fundamentals. Think of these as the building blocks upon which all more complex circuits and systems are built. Today, we're diving into **Direct Current (DC) electric circuits**, and specifically, we're going to tackle two incredibly powerful tools: the **Current Division Rule** and the **Voltage Division Rule**. But before we get our hands dirty with calculations, it's crucial to understand a foundational concept: **Relative Potential**.

## Understanding Potential: It's All About Difference!

When we talk about "potential" in electricity, we're really talking about **electrical potential energy per unit charge**. You might have heard of "voltage." Voltage is precisely that – the difference in electrical potential between two points. It's what drives the electric current, just like a difference in height drives water to flow downhill.

Now, why "relative" potential? Because in a circuit, we don't usually talk about the absolute potential of a single point. Instead, we're always interested in the **difference in potential** between two points. We often establish a **reference point**, and everything else is measured relative to that. The most common reference point, especially in circuit analysis, is **ground**.

**Think of it like this:** Imagine you're on a mountain. Your height above sea level is an absolute measurement. But if you're talking to a friend on another mountain, you're more likely to talk about the difference in height between your current location and theirs, or perhaps the difference between your location and the base of your mountain. In circuit analysis, the "base" or "sea level" is often our ground reference.

*   **Ground:** In many circuit diagrams, you'll see a symbol that looks like a series of horizontal lines, decreasing in length. This represents ground. By convention, the potential at the ground point is taken to be **zero volts**.
*   **Relative Potential:** Any other point in the circuit will have a potential *relative* to this ground. If a point is at +5V, it means its potential is 5 volts higher than the ground point. If a point is at -3V, its potential is 3 volts lower than the ground point.

This concept is fundamental because it helps us understand how energy is distributed and how components interact. Without voltage (potential difference), electrons would have no reason to move, and hence, no current would flow.

### Connection to Course Outcomes:

*   **CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits.** Understanding relative potential is the very first step in applying any circuit law. Voltage, being a potential difference, is the driving force we analyze. This knowledge helps us grasp how voltage sources affect different parts of a circuit.
*   **CO4: Explain the fundamental concepts of electronic components and devices.** Many electronic components, like transistors and diodes, operate based on specific voltage levels applied to their terminals. Understanding relative potential is key to understanding how these devices function.

## Ohm's Law: The Cornerstone of Circuit Analysis

Before we jump into the division rules, let's quickly recap our good friend, **Ohm's Law**. It's the bedrock of DC circuit analysis, relating voltage (V), current (I), and resistance (R).

**Ohm's Law states:** The current through a conductor between two points is directly proportional to the voltage across the two points and inversely proportional to the resistance between them.

Mathematically, it's expressed as:

$V = IR$

Where:
*   $V$ is the voltage across the resistor (in Volts, V)
*   $I$ is the current flowing through the resistor (in Amperes, A)
*   $R$ is the resistance of the conductor (in Ohms, $\Omega$)

This simple law is incredibly powerful. It tells us that if we increase the voltage across a resistor, the current will increase proportionally (assuming resistance stays the same). Conversely, if we increase the resistance, the current will decrease for the same voltage.

**Remember this:** Ohm's Law is your go-to for relating voltage, current, and resistance in any part of a circuit.

### Connection to Course Outcomes:

*   **CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits.** Ohm's Law is one of the most fundamental circuit laws. We'll use it extensively to analyze circuits and find unknown values.

## Series and Parallel Resistors: The Setup for Division Rules

Our division rules work best when we have resistors connected in specific configurations: series and parallel.

### Resistors in Series: A Chain Reaction

When resistors are connected end-to-end, forming a single path for current, they are said to be in **series**.

**Analogy:** Imagine a group of people holding hands in a line. The person at the front is connected to the next, who is connected to the next, and so on. There's only one way for something to move through this line.

*   **Current:** The current is the **same** through all resistors in series. This is like water flowing through a single pipe – the flow rate is the same everywhere in that pipe.
*   **Voltage:** The total voltage across the series combination is the **sum** of the voltages across each individual resistor. Each resistor "drops" a portion of the total voltage.

The equivalent resistance ($R_{eq}$) of resistors in series is simply their sum:
$R_{eq} = R_1 + R_2 + R_3 + ... + R_n$

### Resistors in Parallel: Multiple Paths

When resistors are connected across the same two points, providing multiple paths for current, they are said to be in **parallel**.

**Analogy:** Think of a multi-lane highway. Cars (current) can choose to go on any of the lanes. The entry and exit points for all lanes are the same.

*   **Voltage:** The voltage is the **same** across all resistors in parallel. This is like water pressure being the same at the beginning and end of multiple parallel pipes.
*   **Current:** The total current entering the parallel combination is the **sum** of the currents flowing through each individual resistor. The current "divides" itself among the parallel paths.

The equivalent resistance ($R_{eq}$) for resistors in parallel is a bit trickier. The reciprocal of the equivalent resistance is the sum of the reciprocals of individual resistances:
$\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + ... + \frac{1}{R_n}$

For just two resistors in parallel, this simplifies nicely:
$R_{eq} = \frac{R_1 \times R_2}{R_1 + R_2}$ (This is often called the "product over sum" rule)

### Connection to Course Outcomes:

*   **CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits.** Series and parallel configurations are fundamental to circuit analysis. The division rules are derived from the behaviors of circuits with these configurations.

## The Voltage Division Rule: Sharing the Voltage Drop

Now, let's get to our first powerful tool: the **Voltage Division Rule**. This rule is specifically for **series circuits** and allows us to find the voltage across any one resistor (or a group of resistors) in that series combination without having to calculate the total current first.

**The Core Idea:** In a series circuit, the total voltage supplied by the source is "divided" among the resistors based on their resistance values. The resistor with the higher resistance will have a larger voltage drop across it.

Let's consider two resistors, $R_1$ and $R_2$, connected in series across a voltage source $V_s$.

![Series Circuit Diagram](https://i.imgur.com/12345.png)  *(Imagine a simple diagram here: a voltage source connected to R1, and then R1 connected to R2, with R2 connected back to the other terminal of the voltage source)*

The total resistance in the circuit is $R_{total} = R_1 + R_2$.
The total current flowing through the circuit is $I = \frac{V_s}{R_1 + R_2}$.

Now, let's find the voltage drop across $R_1$, let's call it $V_1$. Using Ohm's Law ($V_1 = I \times R_1$), we substitute the expression for $I$:

$V_1 = \left(\frac{V_s}{R_1 + R_2}\right) \times R_1$

Rearranging this, we get the **Voltage Division Rule**:

$V_1 = V_s \times \frac{R_1}{R_1 + R_2}$

And similarly, the voltage drop across $R_2$, $V_2$, is:

$V_2 = V_s \times \frac{R_2}{R_1 + R_2}$

**Key Takeaway for the Rule:** The voltage across a specific resistor in a series combination is equal to the total voltage multiplied by the ratio of that resistor's value to the *total* resistance of the series combination.

**Generalizing for 'n' resistors in series:** If you have $R_1, R_2, ..., R_n$ in series across a voltage $V_s$, the voltage across $R_k$ is:

$V_k = V_s \times \frac{R_k}{R_1 + R_2 + ... + R_n}$

### Making it Relatable: The "Voltage Divider" Potentiometer

You've probably encountered a volume knob on a radio or a dimmer switch on a light. These often use a component called a **potentiometer**, which is essentially a variable resistor. Internally, a potentiometer acts like a fixed resistor with a movable wiper. When you connect it across a voltage source, the wiper's position determines how the total voltage is divided. This is a direct application of the voltage division rule! As you turn the knob, you're changing the resistance ratio and thus changing the output voltage.

**Example:** Imagine a 12V battery powering a simple circuit with two resistors in series: a 100 $\Omega$ resistor ($R_1$) and a 200 $\Omega$ resistor ($R_2$).

Using the Voltage Division Rule, what is the voltage across the 200 $\Omega$ resistor ($V_2$)?

$V_2 = V_s \times \frac{R_2}{R_1 + R_2}$
$V_2 = 12V \times \frac{200 \Omega}{100 \Omega + 200 \Omega}$
$V_2 = 12V \times \frac{200}{300}$
$V_2 = 12V \times \frac{2}{3}$
$V_2 = 8V$

So, 8 Volts are dropped across the 200 $\Omega$ resistor, and by extension, the voltage across the 100 $\Omega$ resistor ($V_1$) would be $12V - 8V = 4V$, or using the rule: $V_1 = 12V \times \frac{100 \Omega}{100 \Omega + 200 \Omega} = 12V \times \frac{1}{3} = 4V$. It all adds up!

**Common Pitfall/Exam Tip:** Remember that the voltage division rule *only* applies to series circuits. If you try to use it on parallel branches, you'll get incorrect results. Always identify your series components first!

### Connection to Course Outcomes:

*   **CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits.** This rule is a direct application of Ohm's Law and Kirchhoff's Voltage Law principles for series circuits, allowing us to solve for unknown voltages efficiently.

## The Current Division Rule: Sharing the Current Flow

Now, let's move on to the **Current Division Rule**. This rule is designed for **parallel circuits** and helps us determine how the total current entering a parallel combination divides itself among the branches.

**The Core Idea:** In a parallel circuit, the total current splits and flows through each parallel path. The amount of current that flows through a particular path is inversely proportional to the resistance of that path. In simpler terms, **more current flows through the path with lower resistance.**

Let's consider two resistors, $R_1$ and $R_2$, connected in parallel, with a total current $I_{total}$ entering the parallel combination.

![Parallel Circuit Diagram](https://i.imgur.com/67890.png) *(Imagine a diagram here: a current source or a point where current enters, splitting into two branches, one with R1 and the other with R2, and then the branches rejoining)*

Let $I_1$ be the current through $R_1$ and $I_2$ be the current through $R_2$. We know that $I_{total} = I_1 + I_2$.
We also know that the voltage across both resistors is the same, let's call it $V_{parallel}$. So, $V_{parallel} = I_1 R_1 = I_2 R_2$.

From $I_1 R_1 = I_2 R_2$, we can express $I_2$ in terms of $I_1$: $I_2 = I_1 \frac{R_1}{R_2}$.
Substitute this into the total current equation:

$I_{total} = I_1 + I_1 \frac{R_1}{R_2}$
$I_{total} = I_1 \left(1 + \frac{R_1}{R_2}\right)$
$I_{total} = I_1 \left(\frac{R_2 + R_1}{R_2}\right)$

Now, solve for $I_1$:

$I_1 = I_{total} \times \frac{R_2}{R_1 + R_2}$

And similarly, if we solve for $I_2$, we get:

$I_2 = I_{total} \times \frac{R_1}{R_1 + R_2}$

**Key Takeaway for the Rule:** The current through a specific branch in a parallel combination is equal to the total current entering the combination multiplied by the ratio of the *other* branch's resistance to the *sum* of the resistances of the parallel branches.

**Generalizing for 'n' parallel resistors:** If you have $R_1, R_2, ..., R_n$ in parallel, and the total current entering is $I_{total}$, the current through $R_k$ ($I_k$) is given by:

$I_k = I_{total} \times \frac{\frac{1}{R_k}}{\frac{1}{R_1} + \frac{1}{R_2} + ... + \frac{1}{R_n}}$

This general form looks a bit daunting, but often the two-resistor case is the most frequently used. For more than two resistors, it's sometimes easier to:
1.  Calculate the equivalent resistance of the entire parallel combination.
2.  Calculate the voltage across the parallel combination ($V_{parallel} = I_{total} \times R_{eq}$).
3.  Use Ohm's Law ($I_k = V_{parallel} / R_k$) to find the current in each branch.

**Example:** Consider a circuit where 10 Amperes of current enters a junction that splits into two parallel paths. The first path has a 50 $\Omega$ resistor ($R_1$), and the second path has a 100 $\Omega$ resistor ($R_2$). How much current flows through the 50 $\Omega$ resistor ($I_1$)?

Using the Current Division Rule:

$I_1 = I_{total} \times \frac{R_2}{R_1 + R_2}$
$I_1 = 10A \times \frac{100 \Omega}{50 \Omega + 100 \Omega}$
$I_1 = 10A \times \frac{100}{150}$
$I_1 = 10A \times \frac{2}{3}$
$I_1 = 6.67 A$ (approximately)

And the current through the 100 $\Omega$ resistor ($I_2$) would be:

$I_2 = I_{total} \times \frac{R_1}{R_1 + R_2}$
$I_2 = 10A \times \frac{50 \Omega}{50 \Omega + 100 \Omega}$
$I_2 = 10A \times \frac{50}{150}$
$I_2 = 10A \times \frac{1}{3}$
$I_2 = 3.33 A$ (approximately)

Check: $I_1 + I_2 = 6.67A + 3.33A = 10A$. It works! Notice how the path with lower resistance (50 $\Omega$) gets more current (6.67A) than the path with higher resistance (100 $\Omega$) which gets less current (3.33A).

**Relatable Scenario:** Imagine water flowing through a pipe that splits into two smaller pipes. If one smaller pipe is narrower (higher resistance), most of the water will flow through the wider pipe (lower resistance). This is exactly what the current division rule describes!

**Common Pitfall/Exam Tip:** The Current Division Rule uses the *opposite* resistor in the numerator. To find the current in $R_1$, you use $R_2$ in the numerator. This is because current prefers the path of least resistance – so the larger current goes through the smaller resistor. Make sure you don't mix this up with the voltage division rule!

### Connection to Course Outcomes:

*   **CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits.** The Current Division Rule is a direct consequence of Kirchhoff's Current Law and Ohm's Law applied to parallel circuits, providing a shortcut for current calculations.

## Putting It All Together: Why Are These Rules So Important?

You might be wondering, "Why do we need these special rules when we have Ohm's Law and Kirchhoff's Laws?" The answer is **efficiency and simplicity**.

While you can always solve any DC circuit using fundamental laws (Ohm's Law, KVL, KCL), these division rules offer a much faster way to find specific voltages or currents in common circuit configurations (series and parallel). They save you steps, reduce the chance of calculation errors, and help you gain a quicker understanding of how a circuit behaves.

**In essence:**

*   **Voltage Division Rule:** Use for **series** circuits to find **voltage** across a component. The numerator is the resistance of the component you're interested in.
*   **Current Division Rule:** Use for **parallel** circuits to find **current** through a branch. The numerator is the resistance of the *other* parallel branch.

These rules are fundamental in many areas of electronics. For instance, when you're designing a sensor circuit or a simple amplifier stage, you'll often be setting specific voltage levels or current flows using resistors in series or parallel. Understanding these rules allows you to predict and control the behavior of these circuits.

As you progress, you'll see how these concepts extend to more complex circuits, often as building blocks within larger analysis techniques. So, really master these!

### Connection to Course Outcomes:

*   **CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits.** These rules are essential tools for the application part of this outcome. Being able to quickly and correctly apply them is a hallmark of understanding basic circuit analysis.

## Sample Questions and Answers

Let's test your understanding with a few questions.

**Question 1 (Conceptual):**
In a series circuit, if you add another resistor, how does the voltage drop across the original resistors change, assuming the supply voltage remains constant?

**Answer 1:**
When you add another resistor in series, the total resistance of the circuit increases. According to Ohm's Law ($I = V/R_{total}$), the total current flowing in the circuit will decrease. Since the voltage drop across any resistor is $V = IR$, and the current ($I$) decreases, the voltage drop across each of the *original* resistors will also decrease. The voltage division rule highlights this: $V_k = V_s \times \frac{R_k}{R_{total}}$. As $R_{total}$ increases, the fraction $\frac{R_k}{R_{total}}$ decreases, thus decreasing $V_k$.

**Question 2 (Application - Voltage Division):**
A 9V battery is connected to a series combination of a 2 k$\Omega$ resistor and a 1 k$\Omega$ resistor. What is the voltage across the 2 k$\Omega$ resistor?

**Answer 2:**
Let $V_s = 9V$, $R_1 = 2 k\Omega$, and $R_2 = 1 k\Omega$. We want to find the voltage across $R_1$.
Using the Voltage Division Rule:
$V_1 = V_s \times \frac{R_1}{R_1 + R_2}$
$V_1 = 9V \times \frac{2 k\Omega}{2 k\Omega + 1 k\Omega}$
$V_1 = 9V \times \frac{2 k\Omega}{3 k\Omega}$
$V_1 = 9V \times \frac{2}{3}$
$V_1 = 6V$
So, the voltage across the 2 k$\Omega$ resistor is 6V.

**Question 3 (Application - Current Division):**
15 Amperes of current flows into a parallel combination of a 10 $\Omega$ resistor and a 5 $\Omega$ resistor. How much current flows through the 10 $\Omega$ resistor?

**Answer 3:**
Let $I_{total} = 15A$, $R_1 = 10 \Omega$, and $R_2 = 5 \Omega$. We want to find the current through $R_1$ ($I_1$).
Using the Current Division Rule:
$I_1 = I_{total} \times \frac{R_2}{R_1 + R_2}$
$I_1 = 15A \times \frac{5 \Omega}{10 \Omega + 5 \Omega}$
$I_1 = 15A \times \frac{5 \Omega}{15 \Omega}$
$I_1 = 15A \times \frac{1}{3}$
$I_1 = 5A$
So, 5 Amperes of current flows through the 10 $\Omega$ resistor.

**Question 4 (Analysis/Comparison):**
Why is the formula for current division different from voltage division, especially regarding which resistance value goes in the numerator?

**Answer 4:**
The difference lies in the fundamental behavior of series and parallel circuits.
*   **Voltage Division (Series):** Voltage is *shared* among components. The voltage drop across a component is *proportional* to its resistance. Therefore, to find the voltage across a specific resistor ($R_k$), you multiply the total voltage by the ratio of that resistor's value ($R_k$) to the total resistance. The higher the resistance, the higher the share of voltage.
*   **Current Division (Parallel):** Current *divides* among paths. The current through a path is *inversely proportional* to its resistance. To find the current through a specific branch ($R_k$), you multiply the total current by the ratio of the *other* branch's resistance ($R_{other}$) to the sum of resistances. This ensures that the path with lower resistance gets a larger portion of the current. If we had more than two branches, the numerator for $I_k$ would involve the reciprocal of $R_k$ divided by the sum of the reciprocals of all resistances, emphasizing the inverse relationship.

This concludes our introduction to relative potential, Ohm's Law, and the powerful Voltage and Current Division Rules. Keep practicing these, and you'll find DC circuit analysis much more manageable!
