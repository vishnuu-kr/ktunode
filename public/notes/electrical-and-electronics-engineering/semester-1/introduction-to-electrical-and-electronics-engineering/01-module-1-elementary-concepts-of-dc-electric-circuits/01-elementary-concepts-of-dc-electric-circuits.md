---
title: "Elementary concepts of DC electric circuits:"
subject: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING"
module: "Module 1: Elementary concepts of DC electric circuits:"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f949d"
status: "completed"
scrapedAt: "2026-05-23T16:02:22.031Z"
---
# Module 1: Elementary Concepts of DC Electric Circuits

Welcome, everyone! In this first module, we’re going to build the very foundation of everything we’ll be learning in Electrical and Electronics Engineering. We’re starting with the basics, the **elementary concepts of DC electric circuits**. Think of this as learning the alphabet before you can write stories. If we understand how Direct Current (DC) circuits work, we'll be well-equipped to tackle more complex AC circuits and the fascinating world of electronics later on.

Our main goal here is to understand how electricity flows in simple circuits and how we can describe and predict its behavior. This directly ties into our first Course Outcome: **CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits**. We’ll focus on the DC part now, and you'll see how these basic principles are the building blocks for everything else.

## 1. What is an Electric Circuit?

Let’s start with the absolute basics. What *is* an electric circuit? Imagine a race track. For cars to race, you need a track, right? An electric circuit is very similar. It's a **closed path** through which electric current can flow.

What do we need for this closed path?
*   **A source of energy:** This is like the engine of the car, providing the "push" for the electricity. In DC circuits, this is typically a **DC voltage source**, like a battery or a DC power supply.
*   **Conducting wires:** These are like the roads on our race track, allowing the "cars" (which are electrons, in this case) to move from one point to another.
*   **A load or component:** This is what uses the electrical energy. Think of it as a destination or a challenge on the race track, like a stadium where the cars might stop or interact. This could be a light bulb, a resistor, a motor, or any device that converts electrical energy into another form of energy (like light, heat, or motion).

So, a circuit is essentially a **complete loop** that allows charges to flow from a higher potential to a lower potential, driven by a voltage source, and doing some useful work at the load.

## 2. Fundamental Quantities in DC Circuits

To describe how electricity behaves in a circuit, we need to understand a few key quantities. These are the essential vocabulary we’ll use.

### 2.1 Electric Charge (Q)

We often talk about electricity as the flow of charge. What is charge? In simple terms, it’s a fundamental property of matter. We have two types of electric charge: **positive** and **negative**. The most common example we encounter are the protons (positive) and electrons (negative) within atoms. Electrons are the charge carriers that typically move in most electrical circuits.

*   **Analogy:** Think of charge like "potential customers" waiting to enter a shop. A certain number of customers represent a certain amount of charge.
*   **Unit:** The SI unit for electric charge is the **Coulomb (C)**. One Coulomb is a very large amount of charge, roughly equivalent to the charge of about 6.24 x 10^18 electrons.

### 2.2 Electric Current (I)

Electric current is simply the **rate of flow of electric charge**. It tells us how much charge is passing a particular point in the circuit per unit of time.

*   **Analogy:** Back to our race track, if charge is the customers, current is the *number of customers entering the shop per minute*. A higher number means a higher flow rate.
*   **Direction of Current:** By convention, we define the direction of electric current as the direction of flow of **positive charge**. This is a historical convention, established before the electron was fully understood. So, even though it's usually electrons (negative charge) that move in metallic conductors, we still draw the current arrow in the direction that positive charge *would* flow, from positive to negative terminal of the voltage source. This can be a bit confusing initially, but it’s crucial to remember.
*   **Unit:** The SI unit for electric current is the **Ampere (A)**, often called an **Amp**. One Ampere means one Coulomb of charge flowing per second (1 A = 1 C/s).

### 2.3 Electric Potential and Potential Difference (Voltage, V)

You can’t have current flowing without a "push." This push is provided by an **electric potential difference**, more commonly known as **voltage**. Voltage is the energy per unit charge. It’s what makes the charges move.

*   **Analogy:** Think of voltage like the *height difference* in a water system. Water flows downhill from a higher elevation (higher potential) to a lower elevation (lower potential). Similarly, electric charge flows from a point of higher electric potential to a point of lower electric potential, driven by voltage. A battery has a positive terminal (higher potential) and a negative terminal (lower potential), and this difference is the voltage it provides.
*   **Unit:** The SI unit for electric potential difference is the **Volt (V)**. When we say a battery is 1.5V, it means that for every Coulomb of charge that moves through the battery, 1.5 Joules of energy are supplied.

This concept directly relates to **CO1**, as understanding voltage is fundamental to applying circuit laws.

### 2.4 Electric Power (P)

Power is the **rate at which energy is transferred or converted**. In an electric circuit, power is the rate at which electrical energy is converted into another form (like heat in a resistor, light in a bulb, or mechanical work in a motor).

*   **Formula:** Power is calculated as the product of voltage and current:
    $P = V \times I$
*   **Analogy:** If voltage is the "pressure" and current is the "flow rate," then power is like the *total amount of work done per second*. Imagine water flowing through a pipe. The pressure and flow rate together determine how much work a water wheel can do.
*   **Unit:** The SI unit for electric power is the **Watt (W)**. If 1 Ampere of current flows through a device with a voltage of 1 Volt across it, the power consumed is 1 Watt.

Power is a critical concept when we analyze how much energy a device uses or dissipates.

## 3. Ohm's Law: The Most Fundamental Law

Now that we have our basic quantities, let’s introduce the law that connects them for many circuit components: **Ohm's Law**. This law is absolutely fundamental and will be used constantly.

Ohm's Law states that **the voltage across a conductor is directly proportional to the current flowing through it, provided all physical conditions and temperature remain the same.**

*   **The relationship:**
    $V \propto I$
    When we introduce a constant of proportionality, which we call **Resistance (R)**, the relationship becomes:
    $V = I \times R$

    This is the most common form of Ohm's Law. We can rearrange it to find current ($I = V/R$) or resistance ($R = V/I$).

*   **Resistance (R):** Resistance is a measure of how much a material opposes the flow of electric current.
    *   **Analogy:** Think of resistance like the *friction* or *obstacles* on our race track. A smooth, wide track (low resistance) allows cars to go faster. A bumpy, narrow track with many roadblocks (high resistance) slows the cars down.
    *   **Unit:** The SI unit for resistance is the **Ohm (Ω)**, named after Georg Simon Ohm. A resistance of 1 Ohm means that when a voltage of 1 Volt is applied across it, a current of 1 Ampere flows through it.

**How to use Ohm's Law (and common exam applications):**
Ohm's law is your go-to for relating voltage, current, and resistance.
*   If you know voltage and resistance, you can find current.
*   If you know current and resistance, you can find voltage.
*   If you know voltage and current, you can find resistance.

**Example:** Suppose you have a 12V battery connected to a light bulb with a resistance of 4Ω. What is the current flowing through the bulb?
Using Ohm's Law: $I = V/R = 12V / 4Ω = 3A$.
So, 3 Amperes of current will flow.

**Important Note:** Ohm's Law applies directly to **ohmic** materials and components, like most resistors, where the resistance remains constant regardless of the voltage or current. Some components, like diodes or transistors, are **non-ohmic**, meaning their resistance changes with voltage or current, and Ohm's Law in its simple $V=IR$ form doesn't directly describe their behavior. However, the fundamental relationship between voltage, current, and the concept of resistance as opposition to flow is always present.

**Referencing Textbooks:** Both Kothari & Nagrath and Cathey & Nasar dedicate significant portions to explaining Ohm's Law and its applications in calculating current, voltage, and resistance. They often present it with circuits containing multiple resistors.

## 4. Resistors in Series and Parallel

In real-world circuits, we rarely have just one component. We often connect multiple resistors together. How these resistors are connected significantly affects the overall circuit behavior.

### 4.1 Resistors in Series

When resistors are connected end-to-end, forming a single path for current, they are in **series**.

*   **Analogy:** Imagine a series of toll booths on a highway. Each toll booth represents a resistor. For a car (current) to pass, it must go through each booth sequentially. The total delay (voltage drop) is the sum of delays at each booth.
*   **Key Characteristics:**
    1.  **Current is the same** through all resistors in series. $I_{total} = I_1 = I_2 = I_3 = ...$
    2.  **Voltage divides** across the resistors. The total voltage from the source is the sum of the voltage drops across each individual resistor. $V_{total} = V_1 + V_2 + V_3 + ...$
    3.  **Total Resistance (Equivalent Resistance):** The combined resistance of resistors in series is simply the sum of their individual resistances. This means the total resistance is *always greater* than the largest individual resistance.
        $R_{eq} = R_1 + R_2 + R_3 + ...$

**Example:** If you have three resistors, $R_1 = 10Ω$, $R_2 = 20Ω$, and $R_3 = 30Ω$, connected in series to a 12V battery.
*   Total resistance: $R_{eq} = 10Ω + 20Ω + 30Ω = 60Ω$.
*   Current: $I = V_{total} / R_{eq} = 12V / 60Ω = 0.2A$. This same 0.2A flows through each resistor.
*   Voltage drops: $V_1 = I \times R_1 = 0.2A \times 10Ω = 2V$. $V_2 = 0.2A \times 20Ω = 4V$. $V_3 = 0.2A \times 30Ω = 6V$. Notice that $2V + 4V + 6V = 12V$, which is our total voltage.

### 4.2 Resistors in Parallel

When resistors are connected across the same two points, offering multiple paths for current to flow, they are in **parallel**.

*   **Analogy:** Think of multiple identical shops lined up along a street, all accessible from the main road. A customer (current) can choose to enter any of these shops. The total number of customers entering the shops is the sum of customers entering each shop. The "ease" of reaching any shop from the road is what matters.
*   **Key Characteristics:**
    1.  **Voltage is the same** across all resistors in parallel. $V_{total} = V_1 = V_2 = V_3 = ...$
    2.  **Current divides** among the parallel branches. The total current from the source splits, with more current flowing through the path of lower resistance. $I_{total} = I_1 + I_2 + I_3 + ...$
    3.  **Total Resistance (Equivalent Resistance):** The reciprocal of the total resistance is the sum of the reciprocals of the individual resistances. The total resistance in a parallel combination is *always less* than the smallest individual resistance.
        $1/R_{eq} = 1/R_1 + 1/R_2 + 1/R_3 + ...$

    For the special case of **two resistors in parallel**, a simpler formula is often used:
    $R_{eq} = (R_1 \times R_2) / (R_1 + R_2)$

**Example:** Using the same resistors $R_1 = 10Ω$, $R_2 = 20Ω$, and $R_3 = 30Ω$, connected in parallel to a 12V battery.
*   Total resistance: $1/R_{eq} = 1/10Ω + 1/20Ω + 1/30Ω$. Finding a common denominator (60): $1/R_{eq} = 6/60 + 3/60 + 2/60 = 11/60$. So, $R_{eq} = 60/11 Ω \approx 5.45Ω$. Notice this is less than the smallest resistor (10Ω).
*   Total current: $I_{total} = V_{total} / R_{eq} = 12V / (60/11)Ω = 12 \times 11 / 60 = 132 / 60 = 2.2A$.
*   Branch currents: $I_1 = V_{total} / R_1 = 12V / 10Ω = 1.2A$. $I_2 = V_{total} / R_2 = 12V / 20Ω = 0.6A$. $I_3 = V_{total} / R_3 = 12V / 30Ω = 0.4A$. Notice that $1.2A + 0.6A + 0.4A = 2.2A$, which is our total current.

**Connection to Course Outcomes:** Understanding series and parallel combinations is crucial for **CO1**, as it allows us to simplify complex circuits into a single equivalent resistance, making it easier to calculate voltages and currents.

## 5. Kirchhoff's Laws: For More Complex Circuits

While Ohm's Law is powerful, it's not always enough for circuits with multiple voltage sources or where resistors are neither purely in series nor purely in parallel (like a bridge circuit). For these, we turn to **Kirchhoff's Laws**, derived from fundamental principles of charge conservation and energy conservation.

### 5.1 Kirchhoff's Current Law (KCL) - The Junction Rule

KCL is based on the principle of **conservation of charge**. It states that **the algebraic sum of currents entering any junction (or node) in an electric circuit is equal to the algebraic sum of currents leaving that junction.**

*   **Analogy:** Think of a water pipe junction. The total amount of water flowing into the junction must equal the total amount of water flowing out. Water doesn't magically appear or disappear at the junction.
*   **Mathematical Representation:**
    $\sum_{k=1}^{n} I_k = 0$
    where currents entering the node are taken as positive and currents leaving are taken as negative (or vice-versa, as long as you are consistent).

*   **Example:** Imagine a junction where three wires meet. If current $I_1$ enters the junction, and currents $I_2$ and $I_3$ leave the junction, then according to KCL:
    $I_1 = I_2 + I_3$
    Or, $I_1 - I_2 - I_3 = 0$.

**When is KCL useful?** Anytime you have a point where 3 or more wires meet, KCL helps you relate the currents in those wires. This is a core technique for analyzing more complex networks.

### 5.2 Kirchhoff's Voltage Law (KVL) - The Loop Rule

KVL is based on the principle of **conservation of energy**. It states that **the algebraic sum of all voltage drops around any closed loop or mesh in a circuit is equal to the algebraic sum of all the voltage sources in that loop.**

*   **Analogy:** Imagine walking around a closed track. If you end up back where you started, your net change in elevation must be zero. Similarly, if you sum up all the "voltage gains" (from voltage sources) and "voltage losses" (due to resistance or other components) as you traverse a closed loop, the total must be zero.
*   **Mathematical Representation:**
    $\sum_{k=1}^{n} V_k = 0$
    around any closed loop. When traversing a loop, if you move from the negative terminal to the positive terminal of a voltage source, it's a voltage rise (positive). If you move from positive to negative, it's a voltage drop (negative). Similarly, for resistors, if you traverse in the same direction as the assumed current flow, it's a voltage drop ($ -IR $); if you traverse against the current, it's a voltage rise ($ +IR $).

*   **Example:** Consider a simple loop with a battery and a resistor. If you start at the negative terminal of the battery and go around the loop:
    *   You go up across the battery: +V
    *   You go across the resistor in the direction of current: -IR
    *   You return to the starting point.
    So, $V - IR = 0$, which is just Ohm's Law for this simple case! For more complex loops, you might have multiple voltage sources and multiple resistors.

**When is KVL useful?** KVL is fundamental for setting up equations to solve for unknown currents or voltages in circuits with multiple loops. It's a systematic way to apply energy conservation.

**Referencing Textbooks:** Kothari & Nagrath, Cathey & Nasar, and Kulshreshtha (Reference) all provide detailed explanations and examples of applying KCL and KVL to solve circuit problems, often using mesh analysis or nodal analysis techniques, which are built upon these laws. This is essential for **CO1** in solving *simple DC circuits*.

## 6. Practical DC Circuits and Components

While we’ve talked about ideal resistors and voltage sources, let's touch upon some real-world aspects.

### 6.1 Real Voltage Sources

A real battery or DC power supply isn't perfect. It has an internal resistance ($r_{int}$).

*   **Analogy:** Imagine a water pump. Besides pumping water, it also has internal friction within its pipes and mechanism. This internal friction is like the internal resistance.
*   **Effect:** When current flows from a real source, there's a voltage drop across this internal resistance ($V_{drop\_internal} = I \times r_{int}$). This means the terminal voltage (the voltage available to the external circuit) is less than the ideal "electromotive force" (EMF) of the source.
    $V_{terminal} = EMF - I \times r_{int}$

    As you draw more current, the terminal voltage drops more. This is why a battery might seem weaker when you try to power a high-power device.

### 6.2 Fuses and Circuit Breakers

These are crucial safety devices in any electrical system. They are essentially **resistors** designed to overheat and break the circuit when the current exceeds a safe limit.

*   **How they work:** They are made of a material that melts or breaks at a specific current level. When a fault occurs (like a short circuit), the current surges, causing the fuse to blow or the circuit breaker to trip, thus opening the circuit and preventing damage.
*   **Connection to Concepts:** This is a practical application of power dissipation ($P = I^2 R$). The excessive current causes excessive power dissipation in the fuse, leading to its failure.

### 6.3 Power Dissipation in Resistors

Resistors don’t just oppose current; they dissipate energy, usually as **heat**. This is known as **Joule heating**.

*   **Formula:** From $P = VI$ and $V=IR$, we get two other forms for power dissipated by a resistor:
    $P = I^2 R$
    $P = V^2 / R$

*   **Importance:** We need to ensure that components (especially resistors) are rated to handle the power they will dissipate. If a resistor is rated for 1/4 Watt but is dissipating 1 Watt, it will burn out! This is a common pitfall in practical circuit design and troubleshooting.

**Relatability:** You've experienced this if you've ever touched an electronic device that gets hot. That heat is the power being dissipated by the components inside.

## 7. Voltage Division and Current Division

These are very useful techniques derived from series and parallel concepts, often used to quickly find voltages and currents without resorting to full KCL/KVL equations for certain circuit configurations.

### 7.1 Voltage Divider

A **voltage divider** is a simple series circuit used to convert a higher voltage into a lower voltage. If you have two resistors, $R_1$ and $R_2$, in series across a voltage source $V_{in}$, the voltage across $R_2$ ($V_{out}$) is a fraction of $V_{in}$:

*   **Formula:** $V_{out} = V_{in} \times \frac{R_2}{R_1 + R_2}$

*   **Analogy:** Imagine you have a full water tank (high voltage) and you want to fill a smaller bucket to a certain level (lower voltage). You can use a pipe with a valve (resistor) to control the flow and get the desired level. The voltage divider is like splitting the total pressure (voltage) proportionally based on the resistances.

**Example:** If you have a 12V source and want to get 4V, you can use two resistors in series. If $R_1 = 20Ω$, what should $R_2$ be?
$4V = 12V \times \frac{R_2}{20Ω + R_2}$
$4/12 = R_2 / (20 + R_2)$
$1/3 = R_2 / (20 + R_2)$
$20 + R_2 = 3R_2$
$20 = 2R_2$
$R_2 = 10Ω$.

So, with 20Ω and 10Ω in series across 12V, the voltage across the 10Ω resistor will be 4V. This technique is incredibly useful for setting reference voltages in electronic circuits. It directly supports **CO1**.

### 7.2 Current Divider

A **current divider** uses parallel resistors to split a total current into smaller currents flowing through each branch. If a total current $I_{in}$ enters two parallel resistors, $R_1$ and $R_2$, the current through $R_1$ ($I_1$) is given by:

*   **Formula:** $I_1 = I_{in} \times \frac{R_2}{R_1 + R_2}$
    And the current through $R_2$ ($I_2$) is:
    $I_2 = I_{in} \times \frac{R_1}{R_1 + R_2}$

*   **Key Observation:** Notice that the current through a resistor is inversely proportional to its resistance. The path with lower resistance gets more current.

**Example:** If 6A of current flows into two parallel resistors, $R_1 = 10Ω$ and $R_2 = 20Ω$.
*   Current through $R_1$: $I_1 = 6A \times \frac{20Ω}{10Ω + 20Ω} = 6A \times \frac{20}{30} = 6A \times \frac{2}{3} = 4A$.
*   Current through $R_2$: $I_2 = 6A \times \frac{10Ω}{10Ω + 20Ω} = 6A \times \frac{10}{30} = 6A \times \frac{1}{3} = 2A$.
*   Check: $I_1 + I_2 = 4A + 2A = 6A = I_{in}$. This confirms our calculations.

Again, this directly supports **CO1** by providing a shortcut to analyze current distribution in parallel branches.

## 8. Simple DC Circuits in Everyday Life

Where do we see these basic DC circuit concepts?

*   **Flashlights:** A simple battery (DC source), switch, and bulb (load, essentially a resistor). The battery provides voltage, the wires conduct current, and the bulb lights up.
*   **Remote Controls:** Inside, they have small circuits with resistors, buttons (switches), and possibly LEDs. The batteries provide DC power.
*   **Battery-powered toys:** Motors, lights, sounds – all powered by DC batteries, forming various simple circuits.
*   **Car Electrical Systems:** While cars have complex systems, the fundamental DC circuits powered by the car battery are everywhere – headlights, interior lights, radio, starter motor (for starting the engine).
*   **Powering Electronics:** Your phone charger, once it converts AC to DC, provides a stable DC voltage to charge your phone’s battery and power its internal electronic components. Even though the phone's internal circuits are complex, they rely on stable DC voltage sources and the fundamental principles we've discussed.

**Connecting to CO6:** Understanding these basic DC circuits is the first step to appreciating how more complex systems, including those related to the Internet of Things (IoT) that Michael Miller discusses in his book, are built. IoT devices rely heavily on DC power and the manipulation of electrical signals.

## Conclusion for Module 1

So, in this module, we've covered the absolute essentials of DC electric circuits. We've defined charge, current, voltage, and power, and understood their relationships through Ohm's Law. We've learned how resistors behave when connected in series and parallel, and how to simplify these combinations. We've also introduced Kirchhoff's Laws as powerful tools for analyzing more complex circuits, and touched upon practical aspects like real sources and safety devices.

Remember these core ideas:
*   Current is the flow of charge.
*   Voltage is the "push" that makes charge flow.
*   Resistance opposes current flow.
*   Ohm's Law ($V=IR$) connects these three.
*   Series connection: same current, voltage divides, resistance adds.
*   Parallel connection: same voltage, current divides, reciprocal resistance adds.
*   KCL: Charge conservation at junctions.
*   KVL: Energy conservation in loops.

Mastering these concepts is vital for **CO1**. As you move forward, you'll see how these fundamental DC principles are extended and applied to AC circuits and the vast field of electronics. Keep these building blocks solid!

***

## Sample Questions and Answers

**Q1. Conceptual Question:** What is the primary difference between electric current and electric voltage?

**Answer:**
*   **Electric Current (I)** is the **rate of flow of electric charge**. It's a measure of "how much charge is moving" per unit time. Its unit is the Ampere (A). Think of it as the flow rate of water in a pipe.
*   **Electric Voltage (V)** is the **electric potential difference**, representing the energy per unit charge. It's the "push" or "pressure" that causes the charge to flow. Its unit is the Volt (V). Think of it as the pressure difference that makes water flow.
Essentially, voltage drives current.

**Q2. Application Question (Ohm's Law):** A resistor has a value of 100Ω. If a voltage of 25V is applied across it, what is the current flowing through the resistor?

**Answer:**
We use Ohm's Law: $V = I \times R$.
We need to find the current, $I$. Rearranging the formula, we get $I = V / R$.
Given: $V = 25V$, $R = 100Ω$.
$I = 25V / 100Ω = 0.25A$.
So, the current flowing through the resistor is 0.25 Amperes.

**Q3. Circuit Analysis Question (Series Resistors):** Three resistors with values 5Ω, 10Ω, and 15Ω are connected in series to a 30V DC source.
a) What is the total equivalent resistance of the combination?
b) What is the current flowing through the circuit?
c) What is the voltage drop across the 10Ω resistor?

**Answer:**
a) **Total Equivalent Resistance ($R_{eq}$):** For resistors in series, $R_{eq} = R_1 + R_2 + R_3$.
$R_{eq} = 5Ω + 10Ω + 15Ω = 30Ω$.

b) **Current (I):** Using Ohm's Law for the entire circuit, $I = V_{source} / R_{eq}$.
$I = 30V / 30Ω = 1A$.
Since it's a series circuit, this same current flows through each resistor.

c) **Voltage Drop across the 10Ω resistor ($V_{10Ω}$):** We use Ohm's Law for the specific resistor. The voltage drop is the current through it multiplied by its resistance.
$V_{10Ω} = I \times R_{10Ω}$.
$V_{10Ω} = 1A \times 10Ω = 10V$.
(Check: Voltage drop across 5Ω is 1A*5Ω=5V, across 15Ω is 1A*15Ω=15V. Total voltage drops: 5V + 10V + 15V = 30V, which equals the source voltage. This confirms our calculations.)

**Q4. Circuit Analysis Question (Parallel Resistors):** Two resistors, 20Ω and 30Ω, are connected in parallel to a 12V DC source.
a) What is the equivalent resistance of this parallel combination?
b) What is the total current drawn from the source?
c) How much current flows through the 20Ω resistor?

**Answer:**
a) **Equivalent Resistance ($R_{eq}$):** For two resistors in parallel, $R_{eq} = (R_1 \times R_2) / (R_1 + R_2)$.
$R_{eq} = (20Ω \times 30Ω) / (20Ω + 30Ω) = 600Ω^2 / 50Ω = 12Ω$.

b) **Total Current ($I_{total}$):** Using Ohm's Law for the entire circuit, $I_{total} = V_{source} / R_{eq}$.
$I_{total} = 12V / 12Ω = 1A$.

c) **Current through the 20Ω resistor ($I_{20Ω}$):** We use the current divider formula: $I_{branch} = I_{total} \times \frac{R_{other\_branch}}{R_{branch} + R_{other\_branch}}$.
$I_{20Ω} = 1A \times \frac{30Ω}{20Ω + 30Ω} = 1A \times \frac{30}{50} = 1A \times \frac{3}{5} = 0.6A$.
(Check: Current through 30Ω resistor: $I_{30Ω} = 1A \times \frac{20Ω}{20Ω + 30Ω} = 1A \times \frac{20}{50} = 0.4A$. Total current $I_{20Ω} + I_{30Ω} = 0.6A + 0.4A = 1A$, which matches our total current. This confirms our calculations.)

**Q5. Conceptual Question (Kirchhoff's Laws):** State Kirchhoff's Current Law (KCL) and explain its fundamental principle.

**Answer:**
**Kirchhoff's Current Law (KCL)**, also known as the junction rule, states that **the algebraic sum of currents entering any node (or junction) in an electric circuit must equal the algebraic sum of currents leaving that node.**
The fundamental principle behind KCL is the **conservation of electric charge**. At any point in a circuit, charge cannot be accumulated or lost. Therefore, whatever amount of charge flows into a junction must flow out of it. In simpler terms, for any point where wires meet, the total current flowing in equals the total current flowing out.
