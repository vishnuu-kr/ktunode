---
title: "Voltage and current divider rule (Simple numerical problems)"
subject: "BASIC ELECTRICAL & ELECTRONICS ENGINEERING"
module: "Module 1: Generation of alternating voltages : "
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912ded"
status: "completed"
scrapedAt: "2026-05-20T18:32:35.643Z"
---
# Module 1: Generation of Alternating Voltages

## Topic: Voltage and Current Divider Rule (Simple Numerical Problems)

Welcome, everyone! Today, we're going to dive into a couple of extremely fundamental and incredibly useful concepts in electrical engineering: the **Voltage Divider Rule** and the **Current Divider Rule**. These rules are like the trusty tools in any electrician's or electronics engineer's toolbox. They help us figure out how voltages and currents distribute themselves in a circuit, especially in series and parallel combinations of resistors. Understanding these will directly help you achieve **Course Outcome 1 (CO1): Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits**. We'll be focusing on DC circuits for now, but the principles extend beautifully to AC circuits once we start dealing with impedances.

### 1. The Voltage Divider Rule: Sharing the Voltage Load

Imagine you have a battery, say 12 volts, and you want to get a lower voltage, perhaps 5 volts, to power a small LED or a sensor. How do you do that without a more complex voltage regulator? One very simple way, for a resistive load, is to use a **voltage divider**.

#### What is a Voltage Divider?

A voltage divider is essentially a series connection of resistors across a voltage source. The voltage source is applied across the entire series combination. Because of Ohm's Law ($V=IR$), the current flowing through all resistors in series is the same. However, the voltage *across* each individual resistor will be different, proportional to its resistance. The higher the resistance, the larger the voltage drop across it.

Let's visualize this. Suppose we have a voltage source, $V_{in}$, connected to two resistors, $R_1$ and $R_2$, connected in series. The total resistance of the series combination is $R_{total} = R_1 + R_2$.

According to Ohm's Law, the current flowing through this series circuit is:
$I = \frac{V_{in}}{R_{total}} = \frac{V_{in}}{R_1 + R_2}$

Now, if we want to find the voltage across $R_2$ (let's call it $V_{out}$), we simply apply Ohm's Law to $R_2$:
$V_{out} = I \times R_2$

Substituting the expression for $I$:
$V_{out} = \left(\frac{V_{in}}{R_1 + R_2}\right) \times R_2$

This gives us the core **Voltage Divider Rule**:

$$V_{out} = V_{in} \times \frac{R_2}{R_1 + R_2}$$

See what's happening here? The output voltage is a *fraction* of the input voltage. That fraction is determined by the ratio of the resistor we're measuring across ($R_2$) to the *total* resistance of the series combination ($R_1 + R_2$).

**Key Idea to Remember:** The voltage across a particular resistor in a series circuit is the total voltage multiplied by the ratio of that resistor to the total series resistance.

This is a fundamental concept, as highlighted in texts like "Basic Electrical Engineering" by D.P. Kothari and I.J. Nagrath. They emphasize how this simple circuit allows for precise voltage scaling.

#### Example 1: Setting a Voltage for an LED

Let's say you have a 9V battery and you want to light up an LED that requires 3V to operate. You also know the LED needs about 20mA (0.02A) of current. To set this voltage, we can use a voltage divider.

Suppose we choose two resistors, $R_1$ and $R_2$, in series with the 9V battery. We want the voltage across $R_2$ to be 3V. The current through the series circuit will be determined by the total resistance. If we want 3V across $R_2$ with 20mA flowing, then the resistance of $R_2$ should be:
$R_2 = \frac{V_{R2}}{I} = \frac{3V}{0.02A} = 150 \Omega$

Now, this same current of 20mA must flow through $R_1$ as well. The voltage across $R_1$ will be the total voltage minus the voltage across $R_2$:
$V_{R1} = V_{in} - V_{R2} = 9V - 3V = 6V$

Using Ohm's Law for $R_1$:
$R_1 = \frac{V_{R1}}{I} = \frac{6V}{0.02A} = 300 \Omega$

So, if we connect a $300 \Omega$ resistor and a $150 \Omega$ resistor in series across a 9V battery, the voltage across the $150 \Omega$ resistor will be 3V.

However, there's a crucial point: this calculation assumes the voltage divider is *not loaded*. When you connect a device (like an LED, which has its own characteristics, or even another circuit) across $R_2$, it draws its own current. This added current changes the effective resistance and thus the voltage distribution. In our example, the LED draws current, which changes the voltage.

For precise voltage regulation, especially when the load current is significant or needs to be constant, a voltage regulator IC is preferred. But for understanding fundamental principles and for circuits where the load resistance is very high compared to $R_1$ and $R_2$, the voltage divider is a handy concept.

**Exam Tip:** Always check if the question implies a "loaded" or "unloaded" voltage divider. If a load is connected, you'll often need to calculate the equivalent resistance of the load in parallel with $R_2$ before applying the voltage divider rule.

### 2. The Current Divider Rule: Sharing the Current Flow

Now, let's switch gears and talk about how current splits in parallel circuits. This is where the **Current Divider Rule** comes in.

#### What is a Current Divider?

When current encounters a junction (a node) where there are multiple paths to flow, it naturally splits. For resistors in parallel, the current divides inversely proportional to their resistances. This means the path with *lower* resistance will get *more* current, and the path with *higher* resistance will get *less* current. This is a direct consequence of Kirchhoff's Current Law (KCL) and Ohm's Law.

Let's consider two resistors, $R_1$ and $R_2$, connected in parallel, with a total current $I_{in}$ entering the junction. The voltage across both parallel resistors will be the same, let's call it $V$.

According to Ohm's Law:
$I_1 = \frac{V}{R_1}$ (Current through $R_1$)
$I_2 = \frac{V}{R_2}$ (Current through $R_2$)

From Kirchhoff's Current Law, the total incoming current is equal to the sum of outgoing currents:
$I_{in} = I_1 + I_2$

The equivalent resistance of two parallel resistors is given by:
$\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} = \frac{R_2 + R_1}{R_1 R_2}$
So, $R_{eq} = \frac{R_1 R_2}{R_1 + R_2}$

The voltage $V$ across the parallel combination is then:
$V = I_{in} \times R_{eq} = I_{in} \times \frac{R_1 R_2}{R_1 + R_2}$

Now, let's find the current through $R_2$, which we'll call $I_2$:
$I_2 = \frac{V}{R_2} = \frac{1}{R_2} \left( I_{in} \times \frac{R_1 R_2}{R_1 + R_2} \right)$

Notice how $R_2$ in the numerator and denominator cancels out! This leaves us with the **Current Divider Rule**:

$$I_2 = I_{in} \times \frac{R_1}{R_1 + R_2}$$

And similarly, for the current through $R_1$ ($I_1$):

$$I_1 = I_{in} \times \frac{R_2}{R_1 + R_2}$$

**The pattern here is crucial:** To find the current through a specific resistor in a parallel combination, you multiply the total incoming current by the ratio of the *other* resistance to the *sum* of the resistances. It's the opposite ratio of what we saw in the voltage divider.

**Key Idea to Remember:** Current divides inversely to resistance. The path of least resistance gets the most current.

This rule is a direct application of circuit analysis principles, as discussed in resources like "Schaum's Outline of Basic Electrical Engineering." It's a powerful shortcut for parallel circuits.

#### Example 2: Current Sharing in a Parallel Branch

Suppose you have a circuit where 10 Amperes of current enter a junction, and this current splits into two parallel branches. Branch 1 has a resistor $R_1 = 5 \Omega$, and Branch 2 has a resistor $R_2 = 10 \Omega$. How much current flows through each branch?

Using the Current Divider Rule:

Current through $R_1$ ($I_1$):
$I_1 = I_{in} \times \frac{R_2}{R_1 + R_2} = 10A \times \frac{10 \Omega}{5 \Omega + 10 \Omega} = 10A \times \frac{10}{15} = 10A \times \frac{2}{3} = 6.67A$

Current through $R_2$ ($I_2$):
$I_2 = I_{in} \times \frac{R_1}{R_1 + R_2} = 10A \times \frac{5 \Omega}{5 \Omega + 10 \Omega} = 10A \times \frac{5}{15} = 10A \times \frac{1}{3} = 3.33A$

Let's check: $I_1 + I_2 = 6.67A + 3.33A = 10A$. It matches our total incoming current, $I_{in}$. This confirms our calculations. Notice that $R_1$ is smaller than $R_2$, and $I_1$ (current through $R_1$) is larger than $I_2$ (current through $R_2$), which is exactly what we expect!

**What if there are more than two resistors in parallel?**

The rule can be extended, but it gets a bit more complex for current division. For current $I_x$ through resistor $R_x$ in a parallel combination of $R_1, R_2, \dots, R_n$:

$I_x = I_{in} \times \frac{R_{parallel\_except\_Rx}}{\text{Total Resistance of all parallel resistors}}$

Where $R_{parallel\_except\_Rx}$ is the equivalent resistance of *all other* parallel resistors combined, and the denominator is simply the sum of all individual resistances ($R_1 + R_2 + \dots + R_n$). This might seem counterintuitive compared to the two-resistor case, but it stems from how equivalent parallel resistances are calculated. A simpler way for more than two resistors is to find the voltage across the parallel combination ($V = I_{in} \times R_{eq}$) and then use Ohm's Law for the individual branch ($I_x = V/R_x$).

### Relating to Course Outcomes:

*   **CO1 (Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits):** Both voltage and current divider rules are direct applications of Ohm's Law and Kirchhoff's Laws. Mastering these allows you to solve basic series and parallel circuits, which is the foundation for more complex circuit analysis.
*   **CO2 (Develop an awareness on the fundamentals of electric power generation, transmission and distribution):** While not directly about power generation, understanding how voltage and current behave in circuits is foundational. For instance, during transmission, voltage is stepped up to reduce current and minimize power loss ($P_{loss} = I^2R$). Voltage dividers are used in control systems for generators, and current dividers might appear in protective relaying circuits.

### Sample Questions and Answers

Let's test your understanding with a few practice problems.

**Question 1:** A voltage divider consists of two resistors in series, $R_1 = 1k\Omega$ and $R_2 = 2k\Omega$. If the input voltage $V_{in} = 12V$, what is the output voltage $V_{out}$ measured across $R_2$?

**Answer 1:**
This is a straightforward voltage divider problem.
Using the Voltage Divider Rule:
$V_{out} = V_{in} \times \frac{R_2}{R_1 + R_2}$
$V_{out} = 12V \times \frac{2k\Omega}{1k\Omega + 2k\Omega}$
$V_{out} = 12V \times \frac{2k\Omega}{3k\Omega}$
$V_{out} = 12V \times \frac{2}{3}$
$V_{out} = 8V$

**Question 2:** In a parallel circuit, a total current of 5A flows into two resistors, $R_1 = 10\Omega$ and $R_2 = 15\Omega$. Calculate the current flowing through $R_1$.

**Answer 2:**
This requires the Current Divider Rule.
We want to find $I_1$, the current through $R_1$. The formula uses the *other* resistor's value in the numerator.
$I_1 = I_{in} \times \frac{R_2}{R_1 + R_2}$
$I_1 = 5A \times \frac{15\Omega}{10\Omega + 15\Omega}$
$I_1 = 5A \times \frac{15\Omega}{25\Omega}$
$I_1 = 5A \times \frac{15}{25}$
$I_1 = 5A \times \frac{3}{5}$
$I_1 = 3A$

To verify, let's calculate $I_2$:
$I_2 = I_{in} \times \frac{R_1}{R_1 + R_2} = 5A \times \frac{10\Omega}{10\Omega + 15\Omega} = 5A \times \frac{10}{25} = 5A \times \frac{2}{5} = 2A$.
Check: $I_1 + I_2 = 3A + 2A = 5A$, which is $I_{in}$. Correct!

**Question 3 (Conceptual):** If you have a voltage divider and you want to increase the output voltage for a fixed input voltage and a fixed $R_2$, what should you do to $R_1$?

**Answer 3:**
Let's look at the voltage divider formula: $V_{out} = V_{in} \times \frac{R_2}{R_1 + R_2}$.
We want to increase $V_{out}$ while $V_{in}$ and $R_2$ are constant. To make the fraction $\frac{R_2}{R_1 + R_2}$ larger, the denominator $(R_1 + R_2)$ must become smaller, given $R_2$ is fixed. Therefore, we need to **decrease $R_1$**. This makes intuitive sense: if $R_1$ is smaller, the voltage drop across it is smaller, leaving more voltage across $R_2$.

**Question 4 (Exam-oriented):** A circuit has a 10V source connected to a series combination of a $100\Omega$ resistor and a $200\Omega$ resistor. If a third resistor of $300\Omega$ is connected in parallel across the $200\Omega$ resistor, what is the voltage across the $200\Omega$ resistor in this new configuration?

**Answer 4:**
This is a mixed circuit problem. First, identify the parallel combination. The $300\Omega$ resistor is in parallel with the $200\Omega$ resistor.
Let's find the equivalent resistance of this parallel combination:
$R_{parallel} = \frac{R_2 \times R_3}{R_2 + R_3} = \frac{200\Omega \times 300\Omega}{200\Omega + 300\Omega} = \frac{60000 \Omega^2}{500\Omega} = 120\Omega$.

Now, we have a simplified circuit: a $10V$ source connected to a $100\Omega$ resistor ($R_1$) in series with the equivalent resistance of the parallel combination ($R_{parallel} = 120\Omega$).
The total resistance of this series circuit is $R_{total\_new} = R_1 + R_{parallel} = 100\Omega + 120\Omega = 220\Omega$.

Now we can find the current flowing through this simplified series circuit:
$I_{new} = \frac{V_{source}}{R_{total\_new}} = \frac{10V}{220\Omega} \approx 0.04545A$.

This current $I_{new}$ flows through both $R_1$ and the parallel combination ($R_{parallel}$). The voltage across the parallel combination is what we need to find, as it's the voltage across the original $200\Omega$ resistor.
Voltage across the parallel combination ($V_{parallel}$) = $I_{new} \times R_{parallel}$
$V_{parallel} = 0.04545A \times 120\Omega \approx 5.45V$.

Alternatively, using the voltage divider rule on the simplified series circuit:
The voltage across the parallel combination is the voltage across the equivalent resistance $R_{parallel}$.
$V_{parallel} = V_{source} \times \frac{R_{parallel}}{R_1 + R_{parallel}}$
$V_{parallel} = 10V \times \frac{120\Omega}{100\Omega + 120\Omega}$
$V_{parallel} = 10V \times \frac{120\Omega}{220\Omega}$
$V_{parallel} = 10V \times \frac{12}{22} = 10V \times \frac{6}{11} \approx 5.45V$.

The voltage across the $200\Omega$ resistor is $5.45V$. (Note: If the question asked for current through the $200\Omega$ resistor, you would then apply the current divider rule to the parallel branch using this $5.45V$ or the $I_{new}$ and $R_{parallel}$).

Remember these rules; they are foundational and will be your best friends when analyzing many electrical and electronic circuits!
