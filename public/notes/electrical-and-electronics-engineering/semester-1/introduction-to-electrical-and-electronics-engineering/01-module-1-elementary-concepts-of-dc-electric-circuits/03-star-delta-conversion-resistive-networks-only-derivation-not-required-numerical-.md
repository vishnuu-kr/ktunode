---
title: "Star-delta conversion (resistive networks only - derivation not required) - numerical problems."
subject: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING"
module: "Module 1: Elementary concepts of DC electric circuits:"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f949f"
status: "completed"
scrapedAt: "2026-05-23T16:02:23.639Z"
---
# Module 1: Elementary Concepts of DC Electric Circuits
## Topic: Star-Delta (Y-$\Delta$) Conversion

Welcome, everyone, to our first module in Electrical and Electronics Engineering! Today, we're going to tackle a really useful technique in analyzing DC electric circuits, especially when dealing with resistive networks: **Star-Delta Conversion**.

You've already learned about series and parallel combinations of resistors, right? Those are the bread and butter of circuit analysis. But what happens when you have a circuit configuration that's not easily reduced to simple series or parallel? Think about situations where resistors are interconnected in a way that looks like a "Y" (or a star) or a "$\Delta$" (or a delta/triangle). This is where star-delta conversion becomes your best friend!

Our goal here, as per **CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits**, is to equip you with a tool to simplify these complex-looking networks into something manageable. This will allow us to calculate things like the total equivalent resistance, and subsequently, the current flowing through the circuit.

### Understanding the "Why" Behind Star-Delta Conversion

Imagine you're trying to analyze the resistance of a complex component made up of several resistors. Sometimes, the way these resistors are connected just doesn't fit the simple series-parallel mold. For instance, a central point might have three resistors emanating from it, forming a 'Y' shape. Or, three resistors might form a triangular loop, like a '$\Delta$'.

These configurations are very common in electrical systems. Think about the winding connections in motors, or certain types of measurement bridges. Being able to convert between these two forms is crucial for simplifying the analysis.

**Remember this:** Star-delta conversion is a tool to *transform* a part of a circuit from a star configuration to an equivalent delta configuration, or vice-versa, such that the *external* behavior of the circuit remains unchanged. This means the equivalent resistance seen between any two terminals connected to this section of the circuit will be the same before and after the conversion. We're not changing the circuit's overall function; we're just changing the internal arrangement to make it easier to analyze.

While the derivation of the conversion formulas involves some clever algebra (and you can find these derivations in textbooks like Kothari & Nagrath's "Basic Electrical Engineering" or Schaum's Outline), for our purposes today, we'll focus on understanding and applying the formulas. Our learning outcome here is about **application**, not necessarily the intricate proof.

### The Configurations: Star (Y) and Delta ($\Delta$)

Let's visualize these.

*   **Star (Y) Configuration:** Imagine a central point, like the hub of a wheel. From this hub, three arms extend outwards. Each arm connects to a different external terminal. If you were to draw it, it would look like the letter 'Y' or a star.
    *   We have a central junction point.
    *   Three resistors connect from this central point to three distinct outer terminals (let's call them A, B, and C).
    *   So, we have resistors $R_{AB}$, $R_{BC}$, and $R_{CA}$ (if it were a delta) now becoming $R_{OA}$, $R_{OB}$, and $R_{OC}$ (if O is the central point) in a star configuration.

*   **Delta ($\Delta$) Configuration:** Now, imagine forming a triangle. You connect three resistors between three external terminals (A, B, and C) in a closed loop.
    *   One resistor connects between terminal A and terminal B.
    *   Another resistor connects between terminal B and terminal C.
    *   A third resistor connects between terminal C and terminal A.
    *   There's no central point in a pure delta configuration.

### The Conversion Formulas (Resistive Networks Only)

We have two main types of conversion:
1.  **Star to Delta ($\text{Y} \rightarrow \Delta$) Conversion**
2.  **Delta to Star ($\Delta \rightarrow \text{Y}$) Conversion**

Let's denote the resistors in the star configuration as $R_1$, $R_2$, and $R_3$ connected to terminals A, B, and C respectively, with a common point O. So, $R_1$ is between O and A, $R_2$ is between O and B, and $R_3$ is between O and C.

In the equivalent delta configuration, let the resistors be $R_{AB}$, $R_{BC}$, and $R_{CA}$ connecting terminals A to B, B to C, and C to A, respectively.

#### 1. Star to Delta ($\text{Y} \rightarrow \Delta$) Conversion

To convert a star network with resistors $R_1$, $R_2$, and $R_3$ into an equivalent delta network, the formulas are:

*   $R_{AB} = R_1 + R_2 + \frac{R_1 R_2}{R_3}$
*   $R_{BC} = R_2 + R_3 + \frac{R_2 R_3}{R_1}$
*   $R_{CA} = R_3 + R_1 + \frac{R_3 R_1}{R_2}$

Notice a pattern here? For each delta resistor, you sum the two star resistors connected to the respective terminals, plus the product of those two resistors divided by the third star resistor.

Think of it this way: to find the resistor between terminals A and B in the delta ($R_{AB}$), you use the star resistors connected to A ($R_1$) and B ($R_2$). The resistor $R_3$ (connected to C) is the one "left out" or the one not directly between A and B in the star arrangement.

#### 2. Delta to Star ($\Delta \rightarrow \text{Y}$) Conversion

This is the reverse process. Given a delta network with resistors $R_{AB}$, $R_{BC}$, and $R_{CA}$, we want to find an equivalent star network with resistors $R_1$, $R_2$, and $R_3$.

The formulas are:

*   $R_1 = \frac{R_{AB} R_{CA}}{R_{AB} + R_{BC} + R_{CA}}$ (This is the star resistor connected to terminal A)
*   $R_2 = \frac{R_{AB} R_{BC}}{R_{AB} + R_{BC} + R_{CA}}$ (This is the star resistor connected to terminal B)
*   $R_3 = \frac{R_{BC} R_{CA}}{R_{AB} + R_{BC} + R_{CA}}$ (This is the star resistor connected to terminal C)

A handy way to remember this is:
**The star resistor connected to a particular terminal is the product of the two delta resistors connected to that same terminal, divided by the sum of all three delta resistors.**

Let's check the denominator: $R_{AB} + R_{BC} + R_{CA}$. This sum appears in all three formulas for $R_1$, $R_2$, and $R_3$. Let's call this sum $R_{total\_delta}$.
So, $R_1 = \frac{R_{AB} R_{CA}}{R_{total\_delta}}$, $R_2 = \frac{R_{AB} R_{BC}}{R_{total\_delta}}$, and $R_3 = \frac{R_{BC} R_{CA}}{R_{total\_delta}}$.

**Key Takeaway:** When converting FROM Delta TO Star, the denominator is always the sum of all three delta resistors.

### Numerical Problems

Now, let's put these formulas into action. This is where we solidify our understanding for **CO1**.

#### Example 1: Delta to Star Conversion

Consider a $\Delta$ network with resistors $R_{AB} = 6 \Omega$, $R_{BC} = 12 \Omega$, and $R_{CA} = 8 \Omega$. Convert this $\Delta$ network into an equivalent Y network.

**Solution:**
First, identify the resistors and the configuration. We have a $\Delta$ with three known resistances. We want to find the equivalent $\text{Y}$ network.

Let the equivalent star resistors connected to terminals A, B, and C be $R_A$, $R_B$, and $R_C$ respectively.
The formulas are:
$R_A = \frac{R_{AB} R_{CA}}{R_{AB} + R_{BC} + R_{CA}}$
$R_B = \frac{R_{AB} R_{BC}}{R_{AB} + R_{BC} + R_{CA}}$
$R_C = \frac{R_{BC} R_{CA}}{R_{AB} + R_{BC} + R_{CA}}$

Let's calculate the sum of the delta resistors first:
$R_{AB} + R_{BC} + R_{CA} = 6 \Omega + 12 \Omega + 8 \Omega = 26 \Omega$.

Now, apply the formulas:
$R_A = \frac{(6 \Omega)(8 \Omega)}{26 \Omega} = \frac{48}{26} \Omega \approx 1.846 \Omega$
$R_B = \frac{(6 \Omega)(12 \Omega)}{26 \Omega} = \frac{72}{26} \Omega \approx 2.769 \Omega$
$R_C = \frac{(12 \Omega)(8 \Omega)}{26 \Omega} = \frac{96}{26} \Omega \approx 3.692 \Omega$

So, the equivalent Y network has resistors of approximately $1.846 \Omega$, $2.769 \Omega$, and $3.692 \Omega$ connected to a common point and to terminals A, B, and C respectively.

**Common Pitfall/Exam Tip:** Make sure you correctly identify which resistors go into the numerator for each star resistor. For $R_A$ (connected to terminal A), you use the delta resistors that *include* terminal A in their connection, namely $R_{AB}$ and $R_{CA}$.

#### Example 2: Star to Delta Conversion

Consider a Y network with resistors $R_1 = 2 \Omega$, $R_2 = 4 \Omega$, and $R_3 = 6 \Omega$ connected to terminals A, B, and C respectively, from a common point. Convert this to an equivalent $\Delta$ network.

**Solution:**
We have a $\text{Y}$ network with known resistances $R_1, R_2, R_3$. We want to find the equivalent $\Delta$ network.

Let the equivalent delta resistors between terminals A and B, B and C, and C and A be $R_{AB}$, $R_{BC}$, and $R_{CA}$ respectively.
The formulas are:
$R_{AB} = R_1 + R_2 + \frac{R_1 R_2}{R_3}$
$R_{BC} = R_2 + R_3 + \frac{R_2 R_3}{R_1}$
$R_{CA} = R_3 + R_1 + \frac{R_3 R_1}{R_2}$

Let's plug in the values:
$R_1 = 2 \Omega$, $R_2 = 4 \Omega$, $R_3 = 6 \Omega$.

Now, calculate each delta resistor:
$R_{AB} = 2 \Omega + 4 \Omega + \frac{(2 \Omega)(4 \Omega)}{6 \Omega} = 6 \Omega + \frac{8}{6} \Omega = 6 \Omega + \frac{4}{3} \Omega = \frac{18+4}{3} \Omega = \frac{22}{3} \Omega \approx 7.333 \Omega$

$R_{BC} = 4 \Omega + 6 \Omega + \frac{(4 \Omega)(6 \Omega)}{2 \Omega} = 10 \Omega + \frac{24}{2} \Omega = 10 \Omega + 12 \Omega = 22 \Omega$

$R_{CA} = 6 \Omega + 2 \Omega + \frac{(6 \Omega)(2 \Omega)}{4 \Omega} = 8 \Omega + \frac{12}{4} \Omega = 8 \Omega + 3 \Omega = 11 \Omega$

So, the equivalent $\Delta$ network has resistors $R_{AB} = \frac{22}{3} \Omega$, $R_{BC} = 22 \Omega$, and $R_{CA} = 11 \Omega$.

**Relatable Analogy:** Think about how you might connect three pipes to a central manifold in a plumbing system (this is your star). Now, if you wanted to achieve the same flow resistance between three outlets (A, B, C) without the central manifold, you might connect the pipes directly between these outlets in a triangular fashion (this is your delta). The conversion formulas help you figure out what sizes of pipes to use in the triangular arrangement to match the overall flow characteristics of the original manifold system.

#### Example 3: Simplifying a Complex Network

Consider a network where you have a $\Delta$ connection between terminals A, B, and C, and then a resistor $R_4$ is connected in series with one of the $\Delta$ branches, and another resistor $R_5$ is connected from terminal B to an external point D. This is where the power of conversion shines!

Let's say you have a $\Delta$ formed by $R_{AB}=3\Omega$, $R_{BC}=4\Omega$, $R_{CA}=5\Omega$.
Suppose $R_{AC}$ is actually a combination of a resistor $R_{AC}'=3\Omega$ in series with a resistor $R_{AC}''=2\Omega$. (So the total resistance between A and C is $5\Omega$, but it's not a single component).
And let's say there's a resistor $R_B=2\Omega$ connected from terminal B to a point D.
If you were asked to find the equivalent resistance between A and C, what would you do?

The $\Delta$ configuration between A, B, and C is the key. Let's convert this $\Delta$ to a Y.
$R_{AB}=3\Omega$, $R_{BC}=4\Omega$, $R_{CA}=5\Omega$.
Sum of delta resistors = $3+4+5 = 12\Omega$.

Equivalent Y resistors:
$R_A = \frac{R_{AB} R_{CA}}{R_{AB} + R_{BC} + R_{CA}} = \frac{3 \times 5}{12} = \frac{15}{12} = 1.25 \Omega$ (This is from the common point to A)
$R_B = \frac{R_{AB} R_{BC}}{R_{AB} + R_{BC} + R_{CA}} = \frac{3 \times 4}{12} = \frac{12}{12} = 1 \Omega$ (This is from the common point to B)
$R_C = \frac{R_{BC} R_{CA}}{R_{AB} + R_{BC} + R_{CA}} = \frac{4 \times 5}{12} = \frac{20}{12} = \frac{5}{3} \Omega \approx 1.67 \Omega$ (This is from the common point to C)

Now, after conversion, the original $\Delta$ branches ($R_{AB}$, $R_{BC}$, $R_{CA}$) are replaced by these three Y resistors ($R_A$, $R_B$, $R_C$) connected to a new common point O.
The circuit now looks like:
Resistor $R_A$ from O to A.
Resistor $R_B$ from O to B.
Resistor $R_C$ from O to C.

And we still have the original circuit components that were *outside* the $\Delta$:
The series combination $R_{AC}'$ and $R_{AC}''$ (total $5\Omega$) was originally between A and C. In the context of the $\Delta$, this is the $R_{CA}$ resistor. When we convert the $\Delta$ to Y, we are replacing the $\Delta$ *itself* with an equivalent Y. The problem description implies the $\Delta$ *is* formed by $R_{AB}$, $R_{BC}$, and $R_{CA}$. So, $R_{AC}'$ and $R_{AC}''$ being in series means they *formed* the $R_{CA}$ branch of the $\Delta$. If the problem meant there was an *additional* $5\Omega$ resistor between A and C, the analysis would differ. Assuming the $5\Omega$ *was* the $R_{CA}$ branch of the $\Delta$:

Let's rephrase for clarity. Suppose the original circuit had three points A, B, C. Between A and B, there's $3\Omega$. Between B and C, there's $4\Omega$. Between C and A, there's $5\Omega$. This is the $\Delta$.
Now, let's say there's an *additional* resistor of $2\Omega$ connected from B to an external point D. And we want to find the equivalent resistance between A and C.

After converting the $\Delta$ (3, 4, 5 $\Omega$) to Y ($R_A=1.25\Omega, R_B=1\Omega, R_C=1.67\Omega$), the circuit looks like:
- Resistor $R_A=1.25\Omega$ from O to A.
- Resistor $R_B=1\Omega$ from O to B.
- Resistor $R_C=1.67\Omega$ from O to C.
- The original $R_{AB}$ and $R_{BC}$ are gone, replaced by these.
- The original $R_{CA}$ (which was $5\Omega$) is also gone, replaced by $R_C$ and $R_A$.
- We still have the resistor $R_B$ from B to D ($2\Omega$).

If the question is to find the equivalent resistance between A and C, we look at the paths from A to C.
Path 1: Directly from A to C through the replaced $R_A$ and $R_C$. So, $R_A + R_C = 1.25 \Omega + 1.67 \Omega = 2.92 \Omega$.
Path 2: From A to B, then B to C. This would involve $R_A$, then $R_B$, then $R_C$. This is not a simple series or parallel combination.

This highlights the importance of how the question is phrased and what it asks for. If the question is to find the equivalent resistance between A and C of the *entire* network, and the $\Delta$ is embedded, we'd perform the conversion and then simplify the resulting circuit.

Let's take a simpler, more common scenario for exam questions.

#### Example 4: Finding Equivalent Resistance using Star-Delta

Consider the following circuit. We want to find the equivalent resistance between terminals A and B.

```
      R1=10ohm
A----/\/\/\----+----/\/\/\----C
      |       R3=20ohm |
      |              |
      +----/\/\/\----+----/\/\/\----B
      R2=5ohm      R4=15ohm

```
In this diagram, we have a structure that is not directly series or parallel. Notice the connection points A, C, and B. Between A and C, we have $R_1$. Between A and another point (let's call it P), we have $R_2$. Between C and B, we have $R_3$. Between P and B, we have $R_4$. And we have a connection point where $R_2$ and $R_4$ meet, which we labeled P.

Let's redraw this to make it clearer. We have points A, C, and B, and an intermediate point P.

From A:
- To C: $R_1 = 10 \Omega$
- To P: $R_2 = 5 \Omega$

From C:
- To A: $R_1 = 10 \Omega$ (already listed)
- To B: $R_3 = 20 \Omega$

From P:
- To A: $R_2 = 5 \Omega$ (already listed)
- To B: $R_4 = 15 \Omega$

From B:
- To C: $R_3 = 20 \Omega$ (already listed)
- To P: $R_4 = 15 \Omega$ (already listed)

We are looking for the equivalent resistance between A and B.

Look at the resistors $R_1, R_2, R_3$. Wait, these don't form a $\Delta$ or Y directly from the *external* terminals A and B. Let's re-examine the structure.

Perhaps the problem is structured differently. Let's consider a classic $\Delta$-Y bridge-like structure.

Imagine a circuit with terminals A, B, and C.
Between A and B: $R_{AB} = 10\Omega$
Between B and C: $R_{BC} = 20\Omega$
Between C and A: $R_{CA} = 30\Omega$

This is a $\Delta$ connection between A, B, C.
Now, let's say we also have a resistor $R_4 = 15\Omega$ connected from terminal B to an external point D.
And we are asked to find the equivalent resistance between A and C.

This scenario usually involves converting the $\Delta$ to a Y to simplify the circuit.
Let's convert the $\Delta$ (10, 20, 30 $\Omega$) to a Y.
Sum of delta resistors = $10 + 20 + 30 = 60 \Omega$.

Equivalent Y resistors:
$R_A = \frac{R_{AB} R_{CA}}{R_{AB} + R_{BC} + R_{CA}} = \frac{10 \times 30}{60} = \frac{300}{60} = 5 \Omega$ (from common point O to A)
$R_B = \frac{R_{AB} R_{BC}}{R_{AB} + R_{BC} + R_{CA}} = \frac{10 \times 20}{60} = \frac{200}{60} = \frac{10}{3} \Omega \approx 3.33 \Omega$ (from common point O to B)
$R_C = \frac{R_{BC} R_{CA}}{R_{AB} + R_{BC} + R_{CA}} = \frac{20 \times 30}{60} = \frac{600}{60} = 10 \Omega$ (from common point O to C)

After converting the $\Delta$ between A, B, and C to a Y, the circuit looks like this:
- Resistor $R_A = 5\Omega$ (from O to A)
- Resistor $R_B = 10/3\Omega$ (from O to B)
- Resistor $R_C = 10\Omega$ (from O to C)
- The original resistor $R_4 = 15\Omega$ is still connected from B to D.

We need to find the equivalent resistance between A and C.
The path from A to C is now formed by:
1.  $R_A$ (from O to A)
2.  $R_C$ (from O to C)
These two resistors are in series, as they are on the path from A to C via the common point O. So, $R_{A-O-C} = R_A + R_C = 5\Omega + 10\Omega = 15\Omega$.

Is there any other path between A and C?
Yes, through the resistor $R_B$ which is connected to B. The resistor $R_4$ is connected to B, but it goes to point D, not A or C. So, $R_4$ and the connection to D are irrelevant if we're only looking for resistance between A and C.

So, the equivalent resistance between A and C is just $R_A + R_C = 15\Omega$.

**What if the question was:** Find the equivalent resistance between A and B?
In that case, the paths from A to B are:
1.  From A to O, then O to B: $R_A + R_B = 5\Omega + 10/3\Omega = 15/3 + 10/3 = 25/3 \Omega$.
2.  From A to O, O to C, then C to B: $R_A + R_C + R_{BC\_original} = 5\Omega + 10\Omega + 20\Omega = 35\Omega$. (But $R_{BC\_original}$ is replaced by the conversion).
Let's redraw the circuit after conversion and see it clearly for resistance between A and B:
- From O to A: $R_A=5\Omega$
- From O to B: $R_B=10/3\Omega$
- From O to C: $R_C=10\Omega$
- From B to D: $R_4=15\Omega$

To find resistance between A and B:
The path from A to B can be viewed as:
- A direct connection between A and B through the internal Y structure: $R_A + R_B = 5 + 10/3 = 25/3 \Omega$.
- A path through C: $R_A + R_C + (\text{path from C to B})$. The original $\Delta$ is gone. The original $R_{BC}$ is replaced. What is connected to C now? Only $R_C$. What is connected to B now? $R_B$ and $R_4$.
The original $R_{BC}$ (20 ohm) was between terminal B and terminal C. When we convert the $\Delta$, the effective connection between B and C is now through the Y configuration.

Let's trace the connections from the Y structure:
- Terminal A is connected to O via $R_A$.
- Terminal B is connected to O via $R_B$.
- Terminal C is connected to O via $R_C$.

And we have $R_4$ from B to D.
To find resistance between A and B:
We have $R_A$ from A to O, and $R_B$ from B to O. These two are in series to form a path between A and B via O. So, $R_{AOB} = R_A + R_B = 5 + 10/3 = 25/3 \Omega$.
Is there any other path between A and B?
The original $\Delta$ had branches AB, BC, CA. After conversion, we have a Y.
The external resistor $R_4$ from B to D is not on the path between A and B, so it's not relevant for R_AB unless D is somehow connected to A or C.

**Let's take a more canonical example found in textbooks (like Kothari & Nagrath).**

Consider the network shown below, where we need to find the equivalent resistance between terminals A and G.
The circuit typically involves a bridge-like structure that has both $\Delta$ and Y parts.

```
      10ohm          10ohm
A----/\/\/\----C------/\/\/\----D
      |       |        |
     5ohm    20ohm    15ohm
      |       |        |
P----/\/\/\----B------/\/\/\----Q
      |       |        |
     20ohm   30ohm    10ohm
      |       |        |
G----/\/\/\----E------/\/\/\----F
      10ohm          10ohm

```
Let's look at the $\Delta$ formed by resistors $R_{CB}=20\Omega$, $R_{CE}=30\Omega$, and $R_{EB}=($some resistor between E and B, let's assume it's part of a structure that makes CB E a $\Delta$).

Often, these problems are structured such that a $\Delta$ or Y is clearly identifiable and needs conversion to simplify.

**Consider a simple Wheatstone bridge configuration with one resistor out of place:**

```
      R1=6ohm          R3=8ohm
A----/\/\/\----C------/\/\/\----B
      | \             / |
      |  \           /  |
     R2=12ohm     R4=10ohm
      |    \       /    |
      |     \     /     |
G----/\/\/\----D------/\/\/\----E
      R5=15ohm         R6=20ohm
```
Suppose we want to find the equivalent resistance between A and B.

Notice that $R_1, R_2$ are connected to A, and $R_3, R_4$ are connected to B.
$R_1, R_2$ are connected to a common point C. So, $R_{AC}=6\Omega$ and $R_{AD}=12\Omega$. This is a Y-like connection from A.
$R_3, R_4$ are connected to a common point D. So, $R_{CB}=8\Omega$ and $R_{DB}=10\Omega$. This is a Y-like connection to B.
Between C and D, we have $R_{CD}=20\Omega$.
Between C and D, we have $R_{CE}=15\Omega$.
Between D and E, we have $R_{DE}=20\Omega$.

This is getting complicated with multiple letters. Let's simplify the problem presentation typically found in exams.

**Standard Exam Problem Setup:**
Find the equivalent resistance between terminals A and B of the following network:

```
      10 ohm
A-----/\/\/\-----C
      |          |
     5 ohm      15 ohm
      |          |
P-----/\/\/\-----D
      |          |
     20 ohm     25 ohm
      |          |
B-----/\/\/\-----E
```
Let's assume the points are labeled as shown and we want resistance between A and B.

We have a $\Delta$ formed by resistors connecting terminals C, P, and D.
$R_{CP} = 5\Omega$
$R_{PD} = 20\Omega$
$R_{DC} = 15\Omega$

The resistors connecting to the external terminals A and B are:
From A to C: $R_{AC} = 10\Omega$
From P to B: $R_{PB} = 25\Omega$ (This is the same as $R_{BP}$)
From D to B: $R_{DB} = 25\Omega$ (Wait, this is incorrect. D connects to B with 25 ohm. Let's correct the labels.)

Corrected circuit description for clarity:
Points are A, B, C, P, D.
Resistors:
$R_{AC} = 10\Omega$
$R_{CP} = 5\Omega$
$R_{AP} = 12\Omega$ (Let's introduce this to make a $\Delta$)

$R_{CD} = 15\Omega$
$R_{PD} = 20\Omega$
$R_{CB} = 25\Omega$ (Let's introduce this to make a $\Delta$)
$R_{DB} = 30\Omega$

Let's try a common exam pattern:

```
      10 ohm
A-----/\/\/\-----C-----/\/\/\-----D
      |          |          |
     5 ohm      15 ohm     20 ohm
      |          |          |
B-----/\/\/\-----E-----/\/\/\-----F
```
Find the equivalent resistance between A and B.
Here, we have a Y connection at C formed by $R_{AC}=10\Omega$, $R_{CE}=5\Omega$, and $R_{CB}=25\Omega$.
And a Y connection at E formed by $R_{ED}=15\Omega$, $R_{EF}=20\Omega$, and $R_{EB}=5\Omega$.
And $R_{CD}=15\Omega$, $R_{EF}=20\Omega$.

This can be simplified by converting the Y at C to a $\Delta$ and the Y at E to a $\Delta$. However, the problem states "resistive networks only - derivation not required" and implies we use the formulas directly.

Let's stick to the fundamental: If a part of the circuit is a $\Delta$ or $\text{Y}$, convert it.

**Example from Kothari & Nagrath (Simplified):**

Consider the circuit with terminals A and B.
Three resistors are connected in a $\Delta$ between points P, Q, R.
$R_{PQ} = 3\Omega$, $R_{QR} = 4\Omega$, $R_{RP} = 5\Omega$.
Resistor $R_{AP} = 10\Omega$.
Resistor $R_{BQ} = 20\Omega$.
Resistor $R_{CR} = 30\Omega$ (where C is a point, and R is connected to it).
Let's assume we want to find the resistance between A and B. And C is an external point connected to R.

This implies the $\Delta$ is between P, Q, R.
$R_{AP} = 10\Omega$.
$R_{BQ} = 20\Omega$.
$R_{RR'} = 30\Omega$ where R' is some point.

A more standard problem structure would be:
Find the equivalent resistance between A and B.
Points are A, B, C.
Resistors:
$R_{AC} = 10\Omega$
$R_{CB} = 20\Omega$
$R_{BA} = 30\Omega$
This forms a $\Delta$ between A, C, B.

Let's find the equivalent Y network.
$R_{AC} = 10\Omega$, $R_{CB} = 20\Omega$, $R_{BA} = 30\Omega$.
Sum = $10+20+30 = 60\Omega$.
$R_A (\text{to common point O}) = \frac{R_{AC} R_{AB}}{60} = \frac{10 \times 30}{60} = 5\Omega$. (Note: $R_{BA}$ is the same as $R_{AB}$)
$R_C (\text{to common point O}) = \frac{R_{AC} R_{CB}}{60} = \frac{10 \times 20}{60} = \frac{200}{60} = \frac{10}{3}\Omega$.
$R_B (\text{to common point O}) = \frac{R_{CB} R_{AB}}{60} = \frac{20 \times 30}{60} = \frac{600}{60} = 10\Omega$.

So, the equivalent Y network has resistors $R_A=5\Omega$, $R_C=10/3\Omega$, $R_B=10\Omega$ connected to a common point O, and to terminals A, C, B respectively.

If the question was to find the equivalent resistance between A and B, the path is A to O to B, giving $R_A + R_B = 5 + 10 = 15\Omega$.

**Let's ensure we cover the course outcomes:**
*   **CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits.** This topic directly addresses the application of circuit laws by providing a method (star-delta conversion) to simplify complex resistive networks, allowing us to apply Ohm's law and Kirchhoff's laws more easily to find equivalent resistance, and subsequently currents and voltages.

### Summary of Key Points

*   Star-delta conversion is used to simplify circuits that have $\text{Y}$ or $\Delta$ configurations of resistors which are not directly reducible by series-parallel combinations.
*   The conversion ensures that the external behavior (resistance between terminals) of the converted section remains the same.
*   **Y to $\Delta$:**
    *   $R_{AB} = R_1 + R_2 + \frac{R_1 R_2}{R_3}$
    *   $R_{BC} = R_2 + R_3 + \frac{R_2 R_3}{R_1}$
    *   $R_{CA} = R_3 + R_1 + \frac{R_3 R_1}{R_2}$
*   **$\Delta$ to Y:**
    *   $R_1 = \frac{R_{AB} R_{CA}}{R_{AB} + R_{BC} + R_{CA}}$ (Resistor to terminal A)
    *   $R_2 = \frac{R_{AB} R_{BC}}{R_{AB} + R_{BC} + R_{CA}}$ (Resistor to terminal B)
    *   $R_3 = \frac{R_{BC} R_{CA}}{R_{AB} + R_{BC} + R_{CA}}$ (Resistor to terminal C)
*   Remember to correctly identify which resistor in the $\Delta$ corresponds to the 'opposite' resistor in the $\text{Y}$ formula. For $\text{Y} \rightarrow \Delta$, the resistor in the denominator is the one not connected to the two terminals forming the $\Delta$ resistor. For $\Delta \rightarrow \text{Y}$, the denominator is the sum of all $\Delta$ resistors.

This technique is fundamental and appears in many circuit analysis problems, especially in examinations. Mastering it will give you a significant advantage.

---

### Sample Questions with Answers

**Q1. A Delta network has resistors $R_{AB} = 10\Omega$, $R_{BC} = 20\Omega$, and $R_{CA} = 30\Omega$. Convert this into an equivalent Star network.**

**Answer:**
We use the $\Delta \rightarrow \text{Y}$ conversion formulas.
Let the equivalent star resistors connected to terminals A, B, and C be $R_A$, $R_B$, and $R_C$ respectively.
The sum of the delta resistors is $R_{total\_delta} = R_{AB} + R_{BC} + R_{CA} = 10\Omega + 20\Omega + 30\Omega = 60\Omega$.

The star resistors are calculated as:
$R_A = \frac{R_{AB} R_{CA}}{R_{total\_delta}} = \frac{10\Omega \times 30\Omega}{60\Omega} = \frac{300}{60}\Omega = 5\Omega$.
$R_B = \frac{R_{AB} R_{BC}}{R_{total\_delta}} = \frac{10\Omega \times 20\Omega}{60\Omega} = \frac{200}{60}\Omega = \frac{10}{3}\Omega \approx 3.33\Omega$.
$R_C = \frac{R_{BC} R_{CA}}{R_{total\_delta}} = \frac{20\Omega \times 30\Omega}{60\Omega} = \frac{600}{60}\Omega = 10\Omega$.

So, the equivalent star network consists of resistors $R_A=5\Omega$, $R_B=10/3\Omega$, and $R_C=10\Omega$ connected from a common point to terminals A, B, and C respectively.

**Q2. A Star network has resistors $R_1 = 2\Omega$, $R_2 = 3\Omega$, and $R_3 = 4\Omega$ connected to terminals A, B, and C respectively, from a common point. Convert this into an equivalent Delta network.**

**Answer:**
We use the $\text{Y} \rightarrow \Delta$ conversion formulas.
Let the equivalent delta resistors between terminals A and B, B and C, and C and A be $R_{AB}$, $R_{BC}$, and $R_{CA}$ respectively.
$R_1 = 2\Omega$, $R_2 = 3\Omega$, $R_3 = 4\Omega$.

The delta resistors are calculated as:
$R_{AB} = R_1 + R_2 + \frac{R_1 R_2}{R_3} = 2\Omega + 3\Omega + \frac{2\Omega \times 3\Omega}{4\Omega} = 5\Omega + \frac{6}{4}\Omega = 5\Omega + 1.5\Omega = 6.5\Omega$.
$R_{BC} = R_2 + R_3 + \frac{R_2 R_3}{R_1} = 3\Omega + 4\Omega + \frac{3\Omega \times 4\Omega}{2\Omega} = 7\Omega + \frac{12}{2}\Omega = 7\Omega + 6\Omega = 13\Omega$.
$R_{CA} = R_3 + R_1 + \frac{R_3 R_1}{R_2} = 4\Omega + 2\Omega + \frac{4\Omega \times 2\Omega}{3\Omega} = 6\Omega + \frac{8}{3}\Omega = \frac{18+8}{3}\Omega = \frac{26}{3}\Omega \approx 8.67\Omega$.

So, the equivalent delta network has resistors $R_{AB}=6.5\Omega$, $R_{BC}=13\Omega$, and $R_{CA}=26/3\Omega$.

**Q3. (Conceptual Question) Why is Star-Delta conversion useful in circuit analysis?**

**Answer:**
Star-Delta conversion is useful because it allows us to simplify circuits that contain $\Delta$ or $\text{Y}$ configurations of resistors which cannot be directly reduced using simple series and parallel resistor rules. By converting these sections into their equivalent forms, the overall circuit can often be simplified into a series-parallel combination, making it easier to calculate the total equivalent resistance and subsequently analyze current and voltage distribution using Ohm's Law and Kirchhoff's Laws. This technique is essential for solving complex resistive networks, fulfilling the need to apply fundamental circuit concepts as per CO1.

**Q4. In a Delta-to-Star conversion, if the Delta resistors are $R_1, R_2, R_3$, and the resulting Star resistors connected to terminals A, B, C are $R_A, R_B, R_C$, which formula correctly calculates $R_A$?**
**(a) $R_A = \frac{R_1 R_2}{R_1 + R_2 + R_3}$**
**(b) $R_A = \frac{R_1 R_3}{R_1 + R_2 + R_3}$**
**(c) $R_A = \frac{R_2 R_3}{R_1 + R_2 + R_3}$**
**(d) $R_A = R_1 + R_2 + R_3$**

**Answer:**
**(b) $R_A = \frac{R_1 R_3}{R_1 + R_2 + R_3}$**

**Reasoning:** When converting from Delta to Star, the resistor in the Star network connected to a specific terminal (say, A) is the product of the two Delta resistors that are connected to that same terminal, divided by the sum of all three Delta resistors. If we consider $R_1$ as the Delta resistor between terminals A and B, $R_2$ between B and C, and $R_3$ between C and A. Then the Star resistor connected to terminal A ($R_A$) uses the Delta resistors adjacent to A, which are $R_1$ (between A and B) and $R_3$ (between C and A). Hence, $R_A = \frac{R_1 R_3}{R_1 + R_2 + R_3}$. (Note: The labeling in the question might be slightly different from the standard $R_{AB}, R_{BC}, R_{CA}$ notation, but the principle is that the numerator uses the two Delta resistors forming the corner of the Delta at the desired Star terminal).

In our standard notation where $R_{AB}, R_{BC}, R_{CA}$ are the delta resistors, the star resistor connected to terminal A ($R_A$) is $R_A = \frac{R_{AB} R_{CA}}{R_{AB} + R_{BC} + R_{CA}}$. If we map $R_{AB}$ to $R_1$, $R_{BC}$ to $R_2$, and $R_{CA}$ to $R_3$ in the question's options, then $R_A$ in the question's context should correspond to $\frac{R_1 R_3}{R_1+R_2+R_3}$, assuming $R_1$ and $R_3$ are the delta resistors connected at terminal A. This matches option (b).
