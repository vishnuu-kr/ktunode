---
title: "Star-delta conversion (resistive networks only - derivation not required) - numerical problems."
subject: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING"
module: "Module 1: Elementary concepts of DC electric circuits: Current and Voltage Division Rule "
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5c65"
status: "completed"
scrapedAt: "2026-05-20T16:38:54.363Z"
---
## Module 1: Elementary Concepts of DC Electric Circuits

### Topic: Star-Delta (Y-Δ) Conversion (Resistive Networks Only)

Welcome everyone! Today, we're going to dive into a really powerful technique in circuit analysis, especially when dealing with more complex resistive networks. We've already covered the basics of current and voltage, and how they behave in simple series and parallel circuits using the Current Division Rule and Voltage Division Rule. But what happens when a circuit isn't neatly arranged into simple series or parallel components? That's where our topic for today, **Star-Delta Conversion**, comes in. It's a method that allows us to simplify these complex arrangements, making them much easier to analyze.

Our goal here is to understand *how* to convert between two common network configurations: the **Star (or Y)** configuration and the **Delta (or Δ)** configuration. We won't be delving into the mathematical derivations of *why* these conversions work – that’s a bit more in-depth than our introductory module requires. However, you *absolutely* need to master the conversion formulas and know when and how to apply them. This is a fundamental skill that directly supports **Course Outcome 1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits (Knowledge Level: K2)**. By simplifying circuits, we can more easily apply Ohm's Law, Kirchhoff's Laws, and those division rules we've already learned.

### Understanding the Configurations: Star (Y) and Delta (Δ)

Before we start converting, let's get a clear picture of what these configurations look like.

Imagine you have three resistors, let's call them R1, R2, and R3.

*   **The Star (Y) Configuration:** Think of a central point, like the hub of a wheel. From this central point, three branches extend outwards, each containing one of the resistors (R1, R2, R3). The other ends of these resistors are connected to three external terminals. If you were to draw it, it would resemble the letter 'Y' or a star shape.

    *   **Key Characteristic:** In a Star connection, each of the three resistors shares a common terminal (the central point).

*   **The Delta (Δ) Configuration:** Now, imagine connecting the resistors in a loop, forming a triangle. Each resistor connects two of the three external terminals. If you visualize it, it looks like the Greek letter Delta (Δ).

    *   **Key Characteristic:** In a Delta connection, there is no central common point. Each resistor connects two of the outer terminals.

Think about it like connecting household appliances. A simple toaster might be a series circuit (if it had a fuse in series, for example). A lighting circuit with multiple bulbs in parallel is a classic parallel connection. But what if you have a more complex appliance with multiple heating elements and fans, all interconnected in a way that isn't a simple series or parallel combination? That's where these Y and Δ configurations often appear in practical wiring.

### Why Convert? Simplification is Key!

You might be asking, "Why bother converting?" Well, many circuit analysis problems involve networks that are neither purely series nor purely parallel. If we can transform a difficult-to-analyze Y network into an equivalent Δ network (or vice versa), we can often break down the circuit into simpler series and parallel combinations that we already know how to solve. This is incredibly useful for finding equivalent resistances, currents, and voltages in more intricate circuits, directly aiding our ability to **CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits**.

### The Conversion Formulas (The Magic Numbers!)

As I mentioned, we're skipping the derivations. But what we *must* know are the formulas for converting between these two configurations. These are the tools you'll use in numerical problems.

#### 1. Star (Y) to Delta (Δ) Conversion

When you have a Y network with resistors connected as described, and you want to replace it with an equivalent Δ network, you use the following relationships. Let's say in the Y network, the resistors connected to the common point are R_A, R_B, and R_C, where R_A is between terminal 1 and the common point, R_B is between terminal 2 and the common point, and R_C is between terminal 3 and the common point.

To convert this to a Δ network connecting terminals 1, 2, and 3, you'll have three new resistors, let's call them R_12, R_23, and R_31, where R_12 is between terminals 1 and 2, R_23 between 2 and 3, and R_31 between 3 and 1.

The formulas are:

*   **R_12** (the resistor connecting terminals 1 and 2 in the Delta) = R_A + R_B + (R_A * R_B) / R_C
*   **R_23** (the resistor connecting terminals 2 and 3 in the Delta) = R_B + R_C + (R_B * R_C) / R_A
*   **R_31** (the resistor connecting terminals 3 and 1 in the Delta) = R_C + R_A + (R_C * R_A) / R_B

**A Handy Way to Remember This:**
Look closely at the formulas. To find a Delta resistor connecting two specific terminals (say, 1 and 2), you take the sum of the two Y resistors connected to those terminals (R_A and R_B) and add the product of those two resistors divided by the *third* Y resistor (R_C).

**Simplified Memory Trick (Crucial for Exams!):**

Let the Y-arm resistors be $R_a$, $R_b$, $R_c$ connected to terminals 1, 2, 3 respectively from a common point.
The corresponding Delta resistors connecting terminals (1,2), (2,3), (3,1) are $R_{12}$, $R_{23}$, $R_{31}$.

*   **Numerator:** The resistor in the Delta connecting terminals X and Y is calculated by taking the **sum of the products of resistances taken two at a time** in the Y-network, divided by the resistance *opposite* to the junction of the other two Y-arms.
    *   $R_{12} = \frac{R_a R_b + R_b R_c + R_c R_a}{R_c}$
    *   $R_{23} = \frac{R_a R_b + R_b R_c + R_c R_a}{R_a}$
    *   $R_{31} = \frac{R_a R_b + R_b R_c + R_c R_a}{R_b}$

**Important Note:** Notice the numerator is the same for all three Delta resistors. This sum of products of resistances taken two at a time is a very common term. Let $R_{sum} = R_a R_b + R_b R_c + R_c R_a$. Then:
*   $R_{12} = R_{sum} / R_c$
*   $R_{23} = R_{sum} / R_a$
*   $R_{31} = R_{sum} / R_b$

This form is much easier to remember and apply.

#### 2. Delta (Δ) to Star (Y) Conversion

Now, what if you have a Δ network and you need to convert it to an equivalent Y network? This is often the case when you have resistors connected in a triangular fashion, and you want to analyze it by simplifying it into a Y form.

Using the same resistor names as before (R_12, R_23, R_31 in the Delta, and R_A, R_B, R_C in the equivalent Y):

*   **R_A** (the resistor connecting terminal 1 to the common point in the Y) = (R_12 * R_31) / (R_12 + R_23 + R_31)
*   **R_B** (the resistor connecting terminal 2 to the common point in the Y) = (R_12 * R_23) / (R_12 + R_23 + R_31)
*   **R_C** (the resistor connecting terminal 3 to the common point in the Y) = (R_23 * R_31) / (R_12 + R_23 + R_31)

**A Handy Way to Remember This:**
To find a Y resistor connected to a specific terminal (say, terminal 1), you take the product of the two Delta resistors that are connected to that terminal (R_12 and R_31) and divide it by the **sum of all three Delta resistors**.

**Simplified Memory Trick (Crucial for Exams!):**

Let the Delta-arm resistors be $R_{12}$, $R_{23}$, $R_{31}$ connecting terminals (1,2), (2,3), (3,1) respectively.
The corresponding Y resistors connected to terminals 1, 2, 3 from a common point are $R_a$, $R_b$, $R_c$.

*   **Numerator:** The resistor in the Y connected to terminal X is calculated by taking the **product of the two Delta resistances adjacent to terminal X**, divided by the **sum of all three Delta resistances**.
    *   $R_a = \frac{R_{12} R_{31}}{R_{12} + R_{23} + R_{31}}$
    *   $R_b = \frac{R_{12} R_{23}}{R_{12} + R_{23} + R_{31}}$
    *   $R_c = \frac{R_{23} R_{31}}{R_{12} + R_{23} + R_{31}}$

**Important Note:** Again, notice the denominator is the same for all three Y resistors. This sum of all Delta resistances is a key component. Let $R_{total\_delta} = R_{12} + R_{23} + R_{31}$. Then:
*   $R_a = (R_{12} * R_{31}) / R_{total\_delta}$
*   $R_b = (R_{12} * R_{23}) / R_{total\_delta}$
*   $R_c = (R_{23} * R_{31}) / R_{total\_delta}$

Remember these formulas! They are your keys to unlocking complex resistive networks. This knowledge directly helps in solving problems related to **CO1**.

### Numerical Problems: Putting it into Practice

Now, let's work through some examples. This is where you'll see how these conversions are applied to simplify circuits. Don't just look at the solution; try to follow the steps and understand *why* we're doing each conversion. This is crucial for building the **K2 understanding** required by **CO1**.

#### Example 1: Simplifying a Bridge Network (Y to Δ)

Consider a circuit with a source connected to terminals A and B. Between terminals A and C, there's a resistor $R_{AC}$ = 5 $\Omega$. Between terminals B and C, there's a resistor $R_{BC}$ = 10 $\Omega$. Between terminals A and D, there's $R_{AD}$ = 2 $\Omega$, and between B and D, there's $R_{BD}$ = 4 $\Omega$. Finally, there's a resistor $R_{CD}$ = 3 $\Omega$ connecting terminals C and D.

If you sketch this, you'll see a Wheatstone bridge configuration. The resistor $R_{CD}$ is often the 'galvanometer' resistor in a balanced bridge, but here it's just part of the network. Let's say we need to find the equivalent resistance between terminals A and B.

This looks complicated! It's not purely series or parallel. However, notice the resistors $R_{AD}$, $R_{BD}$, and $R_{CD}$. These three resistors form a **Y** configuration, with terminal D being the common point. The resistors $R_{AD}$ (2 $\Omega$), $R_{BD}$ (4 $\Omega$), and $R_{CD}$ (3 $\Omega$) are connected to this common point D. We can convert this Y network into an equivalent Delta network connected across terminals A, B, and C.

Let's label the Y resistors:
*   $R_a$ = $R_{AD}$ = 2 $\Omega$ (connected between A and D)
*   $R_b$ = $R_{BD}$ = 4 $\Omega$ (connected between B and D)
*   $R_c$ = $R_{CD}$ = 3 $\Omega$ (connected between C and D)

Now, let's convert this Y (AD, BD, CD) into a Delta (AB, BC, CA) connected across terminals A, B, and C. We'll call the new Delta resistors $R'_{AB}$, $R'_{BC}$, and $R'_{CA}$.

First, calculate the sum of products of Y resistances taken two at a time:
$R_{sum} = R_a R_b + R_b R_c + R_c R_a$
$R_{sum} = (2 \Omega \times 4 \Omega) + (4 \Omega \times 3 \Omega) + (3 \Omega \times 2 \Omega)$
$R_{sum} = 8 \Omega^2 + 12 \Omega^2 + 6 \Omega^2 = 26 \Omega^2$

Now, use the Y to Δ conversion formulas:
*   $R'_{AB} = R_{sum} / R_c = 26 \Omega^2 / 3 \Omega = 8.67 \Omega$ (This replaces the Y branches AD and BD, connecting A and B)
*   $R'_{BC} = R_{sum} / R_a = 26 \Omega^2 / 2 \Omega = 13.00 \Omega$ (This replaces the Y branches BD and CD, connecting B and C)
*   $R'_{CA} = R_{sum} / R_b = 26 \Omega^2 / 4 \Omega = 6.50 \Omega$ (This replaces the Y branches CD and AD, connecting C and A)

Okay, so what does our circuit look like *now*?
We had original resistors:
*   $R_{AC}$ = 5 $\Omega$
*   $R_{BC}$ = 10 $\Omega$

And we've replaced the Y at D with a Delta across A, B, C with resistors:
*   $R'_{AB}$ = 8.67 $\Omega$
*   $R'_{BC}$ = 13.00 $\Omega$
*   $R'_{CA}$ = 6.50 $\Omega$

This means the original resistor $R_{AC}$ (5 $\Omega$) is now in parallel with the newly formed Delta resistor $R'_{CA}$ (6.50 $\Omega$).
Similarly, the original resistor $R_{BC}$ (10 $\Omega$) is now in parallel with the newly formed Delta resistor $R'_{BC}$ (13.00 $\Omega$).
The new resistor $R'_{AB}$ (8.67 $\Omega$) is connected directly between terminals A and B.

So, the circuit is now simplified!
1.  Calculate the equivalent resistance of $R_{AC}$ in parallel with $R'_{CA}$:
    $R_{eq1} = (5 \Omega \times 6.50 \Omega) / (5 \Omega + 6.50 \Omega) = 32.5 \Omega^2 / 11.5 \Omega \approx 2.83 \Omega$
2.  Calculate the equivalent resistance of $R_{BC}$ in parallel with $R'_{BC}$:
    $R_{eq2} = (10 \Omega \times 13.00 \Omega) / (10 \Omega + 13.00 \Omega) = 130 \Omega^2 / 23 \Omega \approx 5.65 \Omega$

Now, the circuit between terminals A and B consists of:
*   $R'_{AB}$ = 8.67 $\Omega$
*   $R_{eq1}$ = 2.83 $\Omega$ (connected between A and C, then C to B, effectively in series with $R'_{AB}$) Wait, no, $R_{eq1}$ is between A and B (via C), and $R_{eq2}$ is between B and C (then C to A, effectively in series with $R'_{AB}$)

Let's redraw carefully:
Terminal A is connected to $R'_{AB}$ (8.67 $\Omega$) and $R_{eq1}$ (2.83 $\Omega$).
Terminal B is connected to $R'_{AB}$ (8.67 $\Omega$) and $R_{eq2}$ (5.65 $\Omega$).
The point C, after the parallel combinations, is now an internal connection that doesn't exist as a terminal anymore in this simplified form.

So, after the Y-Delta conversion and parallel combinations, we have:
*   Resistor $R'_{AB}$ (8.67 $\Omega$) directly between A and B.
*   Resistor $R_{eq1}$ (2.83 $\Omega$) effectively between A and B (it was $R_{AC} || R'_{CA}$).
*   Resistor $R_{eq2}$ (5.65 $\Omega$) effectively between B and C. Hmm, this is still not quite right. Let's re-evaluate the topology after conversion.

**Correct Topology After Y-Δ Conversion:**

Original Y resistors: $R_{AD}$ ($R_a$), $R_{BD}$ ($R_b$), $R_{CD}$ ($R_c$).
Original Delta resistors: $R_{AC}$ (5 $\Omega$), $R_{BC}$ (10 $\Omega$).

We converted the Y (AD, BD, CD) to a Delta across terminals A, B, C with resistors $R'_{AB}$, $R'_{BC}$, $R'_{CA}$.

*   $R'_{AB}$ connects A and B.
*   $R'_{BC}$ connects B and C.
*   $R'_{CA}$ connects C and A.

Now, let's see how these connect with the *original* resistors that were NOT part of the Y we converted.
The original $R_{AC}$ (5 $\Omega$) was between A and C. The new $R'_{CA}$ (6.50 $\Omega$) is *also* between A and C. So, $R_{AC}$ and $R'_{CA}$ are in parallel. Their equivalent is $R_{eqAC} = R_{AC} || R'_{CA} = 2.83 \Omega$. This resultant equivalent resistance is connected between A and C.

The original $R_{BC}$ (10 $\Omega$) was between B and C. The new $R'_{BC}$ (13.00 $\Omega$) is *also* between B and C. So, $R_{BC}$ and $R'_{BC}$ are in parallel. Their equivalent is $R_{eqBC} = R_{BC} || R'_{BC} = 5.65 \Omega$. This resultant equivalent resistance is connected between B and C.

The new resistor $R'_{AB}$ (8.67 $\Omega$) is connected between A and B.

So, the circuit between terminals A and B is now composed of:
*   $R'_{AB}$ (8.67 $\Omega$) directly between A and B.
*   The equivalent resistance $R_{eqAC}$ (2.83 $\Omega$) which connects A to C.
*   The equivalent resistance $R_{eqBC}$ (5.65 $\Omega$) which connects B to C.

This forms a new Delta configuration between A, B, and C. Oh, wait, this seems to have gotten us back to a Delta-like structure. Let's re-think the approach.

The goal is to find resistance between A and B.
The Y formed by $R_{AD}$, $R_{BD}$, $R_{CD}$ with common point D is converted to a Delta across A, B, C.
*   $R'_{AB} = 8.67 \Omega$ (connects A and B)
*   $R'_{BC} = 13.00 \Omega$ (connects B and C)
*   $R'_{CA} = 6.50 \Omega$ (connects C and A)

Now, consider the entire network connected to terminals A and B.
*   The original $R_{AC}$ (5 $\Omega$) is between A and C. The new $R'_{CA}$ (6.50 $\Omega$) is also between A and C. So, $R_{AC} || R'_{CA} = 2.83 \Omega$ is the equivalent resistance between A and C.
*   The original $R_{BC}$ (10 $\Omega$) is between B and C. The new $R'_{BC}$ (13.00 $\Omega$) is also between B and C. So, $R_{BC} || R'_{BC} = 5.65 \Omega$ is the equivalent resistance between B and C.
*   The new $R'_{AB}$ (8.67 $\Omega$) is between A and B.

The circuit we are left with, between terminals A and B, is now a **Delta** configuration with resistors:
*   $R'_{AB} = 8.67 \Omega$ (directly between A and B)
*   $R_{eqAC} = 2.83 \Omega$ (between A and C)
*   $R_{eqBC} = 5.65 \Omega$ (between B and C)

This is still a Delta structure, but now it's connected between terminals A, B, and an *internal* point C. To find the equivalent resistance between A and B, we need to convert this *new* Delta back into a Star, with a common point now connecting A, B, and C to some central node.

Let's convert this Delta ($R'_{AB}$, $R_{eqAC}$, $R_{eqBC}$) into a Star. Let the new Star resistors connected to terminals A, B, C be $R''_A$, $R''_B$, $R''_C$ respectively, all meeting at a common point (let's call it O).

The Delta resistors are:
*   $R_{12}$ = $R'_{AB}$ = 8.67 $\Omega$ (between A and B)
*   $R_{23}$ = $R_{eqBC}$ = 5.65 $\Omega$ (between B and C)
*   $R_{31}$ = $R_{eqAC}$ = 2.83 $\Omega$ (between C and A)

Sum of Delta resistors: $R_{total\_delta} = 8.67 + 5.65 + 2.83 = 17.15 \Omega$.

Now, convert to Star:
*   $R''_A = (R_{12} \times R_{31}) / R_{total\_delta} = (8.67 \Omega \times 2.83 \Omega) / 17.15 \Omega \approx 24.53 \Omega^2 / 17.15 \Omega \approx 1.43 \Omega$ (This is the resistance from A to the new common point O)
*   $R''_B = (R_{12} \times R_{23}) / R_{total\_delta} = (8.67 \Omega \times 5.65 \Omega) / 17.15 \Omega \approx 49.00 \Omega^2 / 17.15 \Omega \approx 2.86 \Omega$ (This is the resistance from B to the new common point O)
*   $R''_C = (R_{23} \times R_{31}) / R_{total\_delta} = (5.65 \Omega \times 2.83 \Omega) / 17.15 \Omega \approx 15.98 \Omega^2 / 17.15 \Omega \approx 0.93 \Omega$ (This is the resistance from C to the new common point O)

So, the original network between terminals A and B has been simplified. The common point D of the initial Y is gone. The original resistors $R_{AC}$ and $R_{BC}$ have been combined in parallel with their corresponding Delta equivalents.

The circuit is now a Star configuration with resistors $R''_A$, $R''_B$, and $R''_C$ connected to a common point O.
*   $R''_A$ connects A to O.
*   $R''_B$ connects B to O.
*   $R''_C$ connects C to O.

Since we are looking for the equivalent resistance between terminals A and B, and terminal C is not part of the terminals we are interested in (it's an intermediate point), we can often simplify further if one of the Star arms is open circuit or irrelevant to the path between A and B.

However, in this case, the point C is still connected. Let's reconsider the original intent of such problems. Usually, after a conversion, we get simple series/parallel combinations.

Let's backtrack slightly to the state *after* the first Y-Δ conversion:
*   $R'_{AB}$ = 8.67 $\Omega$ (directly between A and B)
*   $R_{AC} || R'_{CA}$ = 2.83 $\Omega$ (between A and C)
*   $R_{BC} || R'_{BC}$ = 5.65 $\Omega$ (between B and C)

This looks like a bridge configuration again, but with different resistor values. The resistors $R_{AC} || R'_{CA}$ and $R_{BC} || R'_{BC}$ are connected to a common point C. The resistor $R'_{AB}$ connects A and B directly.

The structure is:
A --- 8.67 $\Omega$ --- B
| \                 / |
2.83 $\Omega$   5.65 $\Omega$
|     \         /     |
C ------ (implicit point)

This is a Delta configuration with vertices A, B, C. The resistors are:
*   $R_{AB}$ = 8.67 $\Omega$
*   $R_{AC}$ = 2.83 $\Omega$
*   $R_{BC}$ = 5.65 $\Omega$

We want the equivalent resistance between A and B. To find this, we can convert this Delta back into a Star, where the common point (let's call it P) is now somewhere central. The resistors will be $R_{AP}$, $R_{BP}$, $R_{CP}$.

Using the Delta to Star conversion formulas on this new Delta:
*   $R_{AP} = (R_{AB} \times R_{AC}) / (R_{AB} + R_{AC} + R_{BC})$
    $R_{AP} = (8.67 \times 2.83) / (8.67 + 2.83 + 5.65) = 24.53 / 17.15 \approx 1.43 \Omega$
*   $R_{BP} = (R_{AB} \times R_{BC}) / (R_{AB} + R_{AC} + R_{BC})$
    $R_{BP} = (8.67 \times 5.65) / (8.67 + 2.83 + 5.65) = 49.00 / 17.15 \approx 2.86 \Omega$
*   $R_{CP} = (R_{AC} \times R_{BC}) / (R_{AB} + R_{AC} + R_{BC})$
    $R_{CP} = (2.83 \times 5.65) / (8.67 + 2.83 + 5.65) = 15.98 / 17.15 \approx 0.93 \Omega$

So, the original complex network between terminals A and B is equivalent to a Star network with a central point P, and resistors $R_{AP}$ (1.43 $\Omega$) and $R_{BP}$ (2.86 $\Omega$). The resistor $R_{CP}$ (0.93 $\Omega$) connects this central point P to terminal C.

Since we are finding the equivalent resistance *between A and B*, the path through C (via $R_{CP}$) is irrelevant to the direct resistance path between A and B. The resistors $R_{AP}$ and $R_{BP}$ are in series because they both connect to the central point P, and we are observing from A and B.

Therefore, the equivalent resistance between A and B is:
$R_{eq(A-B)} = R_{AP} + R_{BP}$
$R_{eq(A-B)} = 1.43 \Omega + 2.86 \Omega = 4.29 \Omega$

**Key Takeaway for this Example:** Sometimes, you need to perform *multiple* conversions to simplify a circuit down to a solvable series/parallel combination. The crucial part is correctly identifying the Y or Delta groups and the terminals they connect.

#### Example 2: A Simple Delta to Star Conversion

Let's take a simpler scenario. Suppose we have a Delta network with three resistors:
*   $R_{12}$ = 10 $\Omega$ (between terminals 1 and 2)
*   $R_{23}$ = 15 $\Omega$ (between terminals 2 and 3)
*   $R_{31}$ = 20 $\Omega$ (between terminals 3 and 1)

We want to convert this to an equivalent Star network, with resistors $R_1$, $R_2$, $R_3$ connected to a common point (say, O), such that $R_1$ is connected to terminal 1, $R_2$ to terminal 2, and $R_3$ to terminal 3.

First, calculate the sum of all Delta resistors:
$R_{total\_delta} = R_{12} + R_{23} + R_{31} = 10 \Omega + 15 \Omega + 20 \Omega = 45 \Omega$.

Now, apply the Delta to Star conversion formulas:

*   $R_1$ (connected to terminal 1) = $(R_{12} \times R_{31}) / R_{total\_delta}$
    $R_1 = (10 \Omega \times 20 \Omega) / 45 \Omega = 200 \Omega^2 / 45 \Omega = 4.44 \Omega$ (approximately)

*   $R_2$ (connected to terminal 2) = $(R_{12} \times R_{23}) / R_{total\_delta}$
    $R_2 = (10 \Omega \times 15 \Omega) / 45 \Omega = 150 \Omega^2 / 45 \Omega = 3.33 \Omega$ (approximately)

*   $R_3$ (connected to terminal 3) = $(R_{23} \times R_{31}) / R_{total\_delta}$
    $R_3 = (15 \Omega \times 20 \Omega) / 45 \Omega = 300 \Omega^2 / 45 \Omega = 6.67 \Omega$ (approximately)

So, the equivalent Star network has resistors $R_1 = 4.44 \Omega$, $R_2 = 3.33 \Omega$, and $R_3 = 6.67 \Omega$, all connected to a common point O. This is much simpler to analyze if, for instance, you were to connect a voltage source between terminals 1 and 2. You could then easily find the current through $R_1$ and $R_2$ using Ohm's law.

This directly helps in solving problems related to **CO1**, as we are simplifying networks to apply basic laws.

#### Example 3: Identical Resistors in Y and Delta

A common scenario in exams involves identical resistors. This can make calculations much faster.

*   **Identical Y to Delta:** If you have a Y network with resistors $R$ in each arm, and you convert it to a Delta, each resistor in the Delta will be $3R$.
    *   Using the formula: $R_{sum} = R \cdot R + R \cdot R + R \cdot R = 3R^2$.
    *   Delta resistor = $R_{sum} / R = 3R^2 / R = 3R$.

*   **Identical Delta to Star:** If you have a Delta network with resistors $R$ in each arm, and you convert it to a Star, each resistor in the Star will be $R/3$.
    *   Using the formula: $R_{total\_delta} = R + R + R = 3R$.
    *   Star resistor = $(R \times R) / R_{total\_delta} = R^2 / 3R = R/3$.

Remember these special cases! They can save you a lot of time.

### When to Use Star-Delta Conversion

*   **Bridge Networks:** As seen in Example 1, bridge circuits are prime candidates. If they are not balanced, you cannot simplify them using simple series/parallel rules, and a conversion is necessary.
*   **Networks with Three-Terminal Connections:** Any time you have three resistors connected in a Y or a Delta arrangement that is preventing you from simplifying the circuit using basic series/parallel analysis, think about conversion.
*   **Finding Equivalent Resistance:** The ultimate goal is usually to find the total equivalent resistance between two terminals, or to find currents and voltages in a complex circuit.

### Common Pitfalls and Exam Tips

*   **Incorrectly Identifying the Y or Delta:** Always sketch the circuit and clearly label the terminals and resistors. Double-check which resistors form the Y or Delta.
*   **Mixing Up Conversion Formulas:** Be very careful with the numerators and denominators. For Y to Delta, the denominator is the *opposite* Y resistor. For Delta to Star, the denominator is the *sum of all three* Delta resistors.
*   **Not Simplifying Fully:** After a conversion, the resulting circuit might still require further simplification (e.g., combining parallel or series resistors). Don't stop at the first conversion if the circuit can be simplified further.
*   **Units:** Keep track of your units (Ohms for resistance).
*   **Calculations:** Precision matters in calculations. Use a calculator and be mindful of rounding. For exams, sometimes leaving the answer in fractional form can be more accurate than decimal approximations.

This topic is fundamental for applying circuit analysis techniques, directly addressing **CO1**. The ability to simplify complex networks using Star-Delta conversion is a critical skill that allows us to solve problems that would otherwise be intractable with basic series/parallel analysis.

### Sample Questions and Answers

Let's test your understanding with a couple of questions.

**Question 1 (Conceptual):**
In a Delta to Star conversion, what is the role of the sum of all three Delta resistances?
(a) It is the numerator for each of the Star resistances.
(b) It is the denominator for each of the Star resistances.
(c) It is used to calculate the equivalent Delta resistance.
(d) It is not used in the conversion formula.

**Answer 1:**
The correct answer is **(b)**. In the Delta to Star conversion, the sum of all three Delta resistances ($R_{12} + R_{23} + R_{31}$) serves as the denominator for calculating each of the Star resistances ($R_1, R_2, R_3$). Specifically, $R_1 = (R_{12} \times R_{31}) / (R_{12} + R_{23} + R_{31})$, and so on for $R_2$ and $R_3$.

**Question 2 (Numerical):**
Find the equivalent resistance between terminals A and B of the network shown below. All resistors are 10 $\Omega$.

*(Imagine a circuit here: Terminals A and B. Between A and C is 10 $\Omega$. Between B and C is 10 $\Omega$. Between A and D is 10 $\Omega$. Between B and D is 10 $\Omega$. Between C and D is 10 $\Omega$. This is the same bridge structure as Example 1, but all resistors are equal.)*

**Solution 2:**
This is a Wheatstone bridge. The resistors $R_{AD}$ (10 $\Omega$), $R_{BD}$ (10 $\Omega$), and $R_{CD}$ (10 $\Omega$) form a Y network with common point D. We need to find the resistance between A and B.

1.  **Convert the Y (AD, BD, CD) to Delta (AB, BC, CA):**
    Let $R_{AD} = R_{BD} = R_{CD} = R = 10 \Omega$.
    For Y to Delta conversion with identical resistors, each Delta resistor is $3R$.
    So, the new Delta resistors are:
    *   $R'_{AB} = 3 \times 10 \Omega = 30 \Omega$
    *   $R'_{BC} = 3 \times 10 \Omega = 30 \Omega$
    *   $R'_{CA} = 3 \times 10 \Omega = 30 \Omega$

2.  **Analyze the circuit after conversion:**
    The original circuit had resistors $R_{AC} = 10 \Omega$ and $R_{BC} = 10 \Omega$ (not part of the Y).
    After conversion, the circuit between terminals A and B is:
    *   $R'_{AB} = 30 \Omega$ (connected between A and B)
    *   $R_{AC}$ (10 $\Omega$) is in parallel with $R'_{CA}$ (30 $\Omega$), connecting A and C.
        $R_{eqAC} = R_{AC} || R'_{CA} = (10 \Omega \times 30 \Omega) / (10 \Omega + 30 \Omega) = 300 \Omega^2 / 40 \Omega = 7.5 \Omega$.
    *   $R_{BC}$ (10 $\Omega$) is in parallel with $R'_{BC}$ (30 $\Omega$), connecting B and C.
        $R_{eqBC} = R_{BC} || R'_{BC} = (10 \Omega \times 30 \Omega) / (10 \Omega + 30 \Omega) = 300 \Omega^2 / 40 \Omega = 7.5 \Omega$.

3.  **Simplify further:**
    We now have a Delta configuration with vertices A, B, and C, with resistors:
    *   $R_{AB\_new} = R'_{AB} = 30 \Omega$ (between A and B)
    *   $R_{AC\_new} = R_{eqAC} = 7.5 \Omega$ (between A and C)
    *   $R_{BC\_new} = R_{eqBC} = 7.5 \Omega$ (between B and C)

4.  **Convert the new Delta to Star:**
    Let the Star resistors be $R''_A$, $R''_B$, $R''_C$ connected to a common point P.
    Sum of Delta resistors = $30 \Omega + 7.5 \Omega + 7.5 \Omega = 45 \Omega$.

    *   $R''_A = (R_{AB\_new} \times R_{AC\_new}) / (\text{Sum of Delta resistors})$
        $R''_A = (30 \Omega \times 7.5 \Omega) / 45 \Omega = 225 \Omega^2 / 45 \Omega = 5 \Omega$.
    *   $R''_B = (R_{AB\_new} \times R_{BC\_new}) / (\text{Sum of Delta resistors})$
        $R''_B = (30 \Omega \times 7.5 \Omega) / 45 \Omega = 225 \Omega^2 / 45 \Omega = 5 \Omega$.
    *   $R''_C = (R_{AC\_new} \times R_{BC\_new}) / (\text{Sum of Delta resistors})$
        $R''_C = (7.5 \Omega \times 7.5 \Omega) / 45 \Omega = 56.25 \Omega^2 / 45 \Omega = 1.25 \Omega$.

5.  **Final Step:**
    The equivalent resistance between A and B is the sum of the Star arms connected to A and B:
    $R_{eq(A-B)} = R''_A + R''_B = 5 \Omega + 5 \Omega = 10 \Omega$.

**Key takeaway from this question:** When all resistors are equal, the bridge configuration, after conversion and re-conversion, often simplifies in a predictable way. In this case, the symmetry helps.

Keep practicing these problems! The more you work with them, the more intuitive the conversions will become. This is the essence of applying circuit laws, as stated in **CO1**.
