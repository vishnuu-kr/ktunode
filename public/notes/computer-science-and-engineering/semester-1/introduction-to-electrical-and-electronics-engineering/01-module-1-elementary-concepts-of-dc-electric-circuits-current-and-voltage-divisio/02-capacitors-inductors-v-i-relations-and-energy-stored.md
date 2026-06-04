---
title: "Capacitors & Inductors: V-I relations and Energy stored."
subject: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING"
module: "Module 1: Elementary concepts of DC electric circuits: Current and Voltage Division Rule "
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5c63"
status: "completed"
scrapedAt: "2026-05-20T16:38:50.872Z"
---
## Module 1: Elementary Concepts of DC Electric Circuits - Capacitors & Inductors: V-I Relations and Energy Stored

Welcome, everyone, to our journey into the fascinating world of electrical and electronics engineering! In this first module, we're laying the foundational bricks, starting with the very basics of DC electric circuits. We've already touched upon fundamental quantities like current and voltage, and explored powerful tools like the Current and Voltage Division Rules. Today, we're going to introduce you to two of the most fundamental passive electronic components: **Capacitors** and **Inductors**.

Understanding these components is absolutely crucial. They are the building blocks for so many electronic systems, from simple filters to complex signal processing circuits. By the end of this session, you'll not only know *what* they are, but you'll also understand *how* they behave in a circuit, how their voltage and current are related, and how they store energy. This directly ties into our **Course Outcome 1 (CO1)**: "Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits." And understanding their properties will also help us with **Course Outcome 4 (CO4)**: "Explain the fundamental concepts of electronic components and devices."

Let's dive in!

### 1. The Capacitor: More Than Just Two Plates

Imagine you have a simple device that can hold electrical charge. That's essentially what a capacitor is! At its core, a capacitor consists of two conductive plates separated by an insulating material, called a **dielectric**. Think of it like this: you have two metal sheets, perhaps aluminum foil, separated by a thin layer of paper or plastic.

**(Analogy Time!)** Think about a water tank. You can fill it with water, and it holds that water until you open a tap. A capacitor is very similar, but instead of water, it stores **electric charge**. When you connect a voltage source to a capacitor, it starts to accumulate charge on its plates. One plate will get a positive charge, and the other a negative charge.

**Key Concept: Capacitance (C)**

The ability of a capacitor to store charge is quantified by its **capacitance**, denoted by the symbol **C**. Capacitance is measured in **Farads (F)**. A higher capacitance means the capacitor can store more charge for a given voltage.

Now, how do we describe the relationship between the voltage across a capacitor and the current flowing into it? This is where things get interesting, and it's different from simple resistors.

#### 1.1. The V-I Relation for a Capacitor

Let's say you apply a voltage **v(t)** across a capacitor with capacitance **C**. As we discussed, charge **q(t)** accumulates on the plates. The fundamental relationship between charge and voltage for a capacitor is:

$$q(t) = C \cdot v(t)$$

This equation tells us that the charge stored is directly proportional to the voltage applied. But in circuit analysis, we're usually more interested in *current*, not charge directly. Remember, current is the *rate of flow of charge*.

So, if we differentiate the charge equation with respect to time, we get the current **i(t)**:

$$i(t) = \frac{dq(t)}{dt}$$

Substituting our first equation:

$$i(t) = \frac{d}{dt} (C \cdot v(t))$$

Since capacitance C is usually constant (for a given capacitor), we can pull it out of the differentiation:

$$i(t) = C \frac{dv(t)}{dt}$$

**This is the crucial V-I relationship for a capacitor!** It tells us that the current flowing *into* a capacitor is proportional to the *rate of change* of the voltage across it.

**What does this *really* mean?**

*   **If the voltage across a capacitor is constant (DC steady state), the rate of change of voltage is zero, and therefore the current through it is zero.** This is a very important point, especially when analyzing DC circuits. In a DC circuit that has been connected for a while, a capacitor acts like an **open circuit**. Think back to our water tank analogy – if you're not changing the water level, no water is flowing *into* the tank.
*   **If the voltage is changing rapidly, a large current will flow.** Imagine quickly pushing more water into the tank – you need a higher flow rate. This is why capacitors are used in circuits that deal with changing signals, like AC circuits or signal filtering.

**Exam Tip:** This V-I relationship is fundamental. Make sure you can recall and apply it. Often, problems will give you the voltage waveform and ask for the current, or vice-versa.

**(From Textbooks):** Chinmoy Saha et al. in their "Basic Electronics: Principles and Applications" highlight this derivative relationship as key to understanding how capacitors respond to dynamic changes in voltage. D.P. Kothari and I.J. Nagrath also emphasize this in their "Basic Electrical Engineering" texts, referring to the capacitor as an "integrator" circuit element due to the inverse relationship between voltage and current when integrating over time.

#### 1.2. Energy Stored in a Capacitor

Capacitors don't just store charge; they store **energy** in the electric field between their plates.

Think about doing work to push charges onto those plates, separating them against their mutual repulsion. That work is stored as potential energy.

The power delivered to the capacitor is $p(t) = v(t) \cdot i(t)$. To find the total energy stored, we integrate this power over time:

$$w(t) = \int_{-\infty}^{t} p(\tau) d\tau$$

Substituting $i(\tau) = C \frac{dv(\tau)}{dt}$:

$$w(t) = \int_{-\infty}^{t} v(\tau) \cdot C \frac{dv(\tau)}{d\tau} d\tau$$

This simplifies nicely if we consider the voltage change from 0 to $v(t)$:

$$w(t) = \int_{0}^{v(t)} C \cdot v \cdot dv$$

Solving this integral gives us the energy stored:

$$w(t) = \frac{1}{2} C v(t)^2$$

**This is the formula for energy stored in a capacitor.** It's proportional to the capacitance and the *square* of the voltage across it.

**What's important here?**

*   Energy is stored in proportion to the voltage squared. This means if you double the voltage, the stored energy quadruples!
*   The energy stored is always positive, as voltage is squared, regardless of the polarity.

**Analogy:** Imagine lifting a heavy object. The higher you lift it, the more potential energy it gains. The capacitor stores energy much like an object gains gravitational potential energy when lifted – the "lift" here is applying voltage.

**Exam Focus:** You'll be asked to calculate the energy stored given capacitance and voltage, or sometimes deduce voltage from stored energy. Keep this formula handy.

### 2. The Inductor: Resisting Change in Current

Now, let's switch gears and talk about the inductor. While a capacitor stores energy in an electric field, an inductor stores energy in a **magnetic field**.

An inductor is typically a coil of wire, often wrapped around a core material (like iron or air). When current flows through this coil, it generates a magnetic field around it.

**(Analogy Time!)** Think about a heavy flywheel. If you try to spin it up, it takes effort, and once spinning, it wants to *keep* spinning. Similarly, an inductor resists changes in *current*. If current is flowing and you try to stop it, the inductor will try to keep the current flowing. If you try to increase the current, it will oppose that increase.

**Key Concept: Inductance (L)**

The ability of an inductor to store energy in a magnetic field is measured by its **inductance**, denoted by the symbol **L**. Inductance is measured in **Henrys (H)**. A higher inductance means the inductor stores more magnetic energy and offers more opposition to current changes.

#### 2.1. The V-I Relation for an Inductor

The defining characteristic of an inductor is its relationship between voltage and current. When a voltage **v(t)** is applied across an inductor of inductance **L**, it causes a current **i(t)** to flow through it, and this current creates a magnetic field. The voltage across the inductor is directly proportional to the *rate of change* of the current flowing through it.

The fundamental relationship is:

$$v(t) = L \frac{di(t)}{dt}$$

**This is the V-I relationship for an inductor!** It's the "dual" of the capacitor's relationship.

**What does this imply?**

*   **If the current through an inductor is constant (DC steady state), the rate of change of current is zero, and therefore the voltage across it is zero.** In a DC circuit that has been connected for a while, an inductor acts like a **short circuit** (a simple piece of wire with negligible resistance). This is like the flywheel – once it's spinning at a constant speed, you don't need to apply any more force to keep it that way (ignoring friction).
*   **If the current is changing rapidly, a significant voltage will appear across the inductor.** If you try to quickly change the speed of the flywheel, you'll feel a strong resistance. This is why inductors are crucial in circuits that handle changing currents, like switching power supplies and AC circuits.

**Exam Tip:** Just like with capacitors, you'll encounter problems where you need to use this V-I relationship to find voltage from current or vice versa. Remember, voltage across an inductor is proportional to the *rate of change* of current.

**(From Textbooks):** Both Kothari & Nagrath and Chinmoy Saha et al. clearly present this $v(t) = L \frac{di(t)}{dt}$ formula. They often use the analogy of inertia for inductors, which is spot on – they resist changes in the "state of motion" (which is current flow in this case). Schaum's Outlines also provides numerous examples of applying this concept.

#### 2.2. Energy Stored in an Inductor

An inductor stores energy in the **magnetic field** it generates. The amount of energy stored depends on the inductance and the square of the current flowing through it.

Similar to the capacitor, power delivered to the inductor is $p(t) = v(t) \cdot i(t)$. We integrate this to find the energy stored:

$$w(t) = \int_{-\infty}^{t} p(\tau) d\tau$$

Substituting $v(\tau) = L \frac{di(\tau)}{dt}$:

$$w(t) = \int_{-\infty}^{t} L \frac{di(\tau)}{d\tau} \cdot i(\tau) d\tau$$

Assuming the current changes from 0 to $i(t)$:

$$w(t) = \int_{0}^{i(t)} L \cdot i \cdot di$$

Solving this integral gives us the energy stored:

$$w(t) = \frac{1}{2} L i(t)^2$$

**This is the formula for energy stored in an inductor.** It's proportional to the inductance and the *square* of the current flowing through it.

**Key Takeaways:**

*   Energy stored is proportional to the current squared. Double the current, and the stored energy increases by a factor of four!
*   Energy is always positive, as current is squared.

**Analogy:** Think about the kinetic energy of a moving object, $KE = \frac{1}{2}mv^2$. An inductor is analogous to mass in this sense; it has "inertia" to changes in current and stores energy proportional to the square of that "velocity" (current).

**Exam Focus:** Be prepared to calculate the energy stored in an inductor, given its inductance and the current.

### 3. Connecting Concepts: A Quick Summary and Where We're Going

So, we've seen that:

*   **Capacitors** oppose changes in **voltage** and act like open circuits in DC steady state. Their V-I relation is $i(t) = C \frac{dv(t)}{dt}$, and they store energy as $\frac{1}{2} C v(t)^2$.
*   **Inductors** oppose changes in **current** and act like short circuits in DC steady state. Their V-I relation is $v(t) = L \frac{di(t)}{dt}$, and they store energy as $\frac{1}{2} L i(t)^2$.

Notice the beautiful symmetry between these two components. It's almost like they're designed to be complementary. Capacitors are sensitive to how fast voltage changes, while inductors are sensitive to how fast current changes.

These fundamental relationships are the bedrock for understanding more complex circuits. For example, in AC circuits, these reactive properties (how they react to changes) are what give circuits their unique frequency-dependent behavior. Even in DC circuits, their transient behavior (how they behave immediately after a switch is flipped) is governed by these equations, and we'll explore that more as we move forward in the course.

This knowledge directly supports **CO1** as we now have the fundamental building blocks and their circuit laws. It also reinforces **CO4** by giving us a deeper understanding of the core principles of capacitors and inductors.

### Sample Questions with Answers

Let's test your understanding with a few questions.

---

**Question 1 (Conceptual):**
In a DC circuit operating in steady state, what is the equivalent resistance of an ideal capacitor and an ideal inductor?

**Answer:**
*   **Ideal Capacitor:** In DC steady state, the voltage across a capacitor is constant. Since $i(t) = C \frac{dv(t)}{dt}$ and $\frac{dv(t)}{dt} = 0$ for a constant voltage, the current through the capacitor is zero. This means it acts as an **open circuit**.
*   **Ideal Inductor:** In DC steady state, the current through an inductor is constant. Since $v(t) = L \frac{di(t)}{dt}$ and $\frac{di(t)}{dt} = 0$ for a constant current, the voltage across the inductor is zero. This means it acts as a **short circuit** (a piece of wire).

---

**Question 2 (Calculational - Exam Oriented):**
A capacitor of 10 $\mu$F has a voltage $v(t) = 100 \sin(120\pi t)$ V across it. Calculate the current flowing into the capacitor at $t = \frac{1}{360}$ s.

**Answer:**
We use the V-I relationship for a capacitor: $i(t) = C \frac{dv(t)}{dt}$.
First, let's find the derivative of the voltage:
$v(t) = 100 \sin(120\pi t)$
$\frac{dv(t)}{dt} = \frac{d}{dt} (100 \sin(120\pi t))$
$\frac{dv(t)}{dt} = 100 \cdot \cos(120\pi t) \cdot (120\pi)$
$\frac{dv(t)}{dt} = 12000\pi \cos(120\pi t)$ V/s

Now, substitute this into the current equation. Capacitance $C = 10 \mu\text{F} = 10 \times 10^{-6}$ F.
$i(t) = (10 \times 10^{-6}) \cdot (12000\pi \cos(120\pi t))$
$i(t) = 0.12\pi \cos(120\pi t)$ A

Now, evaluate at $t = \frac{1}{360}$ s:
$120\pi t = 120\pi \cdot \frac{1}{360} = \frac{120\pi}{360} = \frac{\pi}{3}$ radians

$i(\frac{1}{360}) = 0.12\pi \cos(\frac{\pi}{3})$
Since $\cos(\frac{\pi}{3}) = 0.5$:
$i(\frac{1}{360}) = 0.12\pi \cdot 0.5 = 0.06\pi$ A

So, the current is $0.06\pi$ A, or approximately 0.1885 A.

---

**Question 3 (Calculational - Exam Oriented):**
An inductor has an inductance of 50 mH. If the current flowing through it is $i(t) = 5e^{-2t}$ A, what is the voltage across the inductor? How much energy is stored in the inductor at $t=0$?

**Answer:**
**Voltage Calculation:**
We use the V-I relationship for an inductor: $v(t) = L \frac{di(t)}{dt}$.
Inductance $L = 50 \text{ mH} = 50 \times 10^{-3}$ H.
Current $i(t) = 5e^{-2t}$ A.

First, find the derivative of the current:
$\frac{di(t)}{dt} = \frac{d}{dt} (5e^{-2t})$
$\frac{di(t)}{dt} = 5 \cdot e^{-2t} \cdot (-2)$
$\frac{di(t)}{dt} = -10e^{-2t}$ A/s

Now, calculate the voltage:
$v(t) = (50 \times 10^{-3}) \cdot (-10e^{-2t})$
$v(t) = -0.5e^{-2t}$ V

**Energy Stored Calculation:**
We use the formula for energy stored in an inductor: $w(t) = \frac{1}{2} L i(t)^2$.
We need to find the energy at $t=0$.
At $t=0$, the current is $i(0) = 5e^{-2 \cdot 0} = 5e^0 = 5 \times 1 = 5$ A.

Now, substitute $L$ and $i(0)$ into the energy formula:
$w(0) = \frac{1}{2} \cdot (50 \times 10^{-3} \text{ H}) \cdot (5 \text{ A})^2$
$w(0) = \frac{1}{2} \cdot (0.05 \text{ H}) \cdot (25 \text{ A}^2)$
$w(0) = 0.05 \cdot 12.5$
$w(0) = 0.625$ Joules (J)

So, the voltage across the inductor is $v(t) = -0.5e^{-2t}$ V, and the energy stored at $t=0$ is 0.625 J.

---

Keep these fundamental relationships in mind, as they are truly the building blocks for everything we will learn in this course. See you in the next session!
