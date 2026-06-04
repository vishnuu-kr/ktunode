---
title: "Faraday's laws, Lenz's law- statically induced and dynamically induced emf – Self-inductance and mutual inductance, coefficient of coupling (numerical problems not needed)"
subject: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING"
module: "Module 2: Electromagnetic Induction :"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc8f20463779487da0d5"
status: "completed"
scrapedAt: "2026-05-23T17:34:19.868Z"
---
# Module 2: Electromagnetic Induction

## Introduction: The Dance of Magnetism and Electricity

Welcome, everyone, to Module 2! This module is all about a fascinating phenomenon that underpins so much of our electrical world: **Electromagnetic Induction**. You know, the way we generate electricity in power plants, the way transformers work, and even the way your phone charges wirelessly – it all boils down to this fundamental principle. We're going to explore how changing magnetic fields can create electric currents, and vice-versa. It’s like a magical handshake between electricity and magnetism!

This topic directly relates to **Course Outcome 1 (CO1)**, where we learn to apply fundamental circuit laws. Understanding induction is crucial for analyzing AC circuits and the behavior of components like inductors, which we'll see are central to this module. It also touches on **CO2** by connecting magnetic fields to electrical effects, which are the basis of magnetic circuits.

### Faraday's Laws of Electromagnetic Induction: The Cornerstone

So, what exactly *is* electromagnetic induction? At its heart, it's the production of an electromotive force (EMF) across an electrical conductor in a changing magnetic field. Think about it: you have magnets and you have wires, and when one changes relative to the other, something electric happens!

The credit for this groundbreaking discovery goes to **Michael Faraday**, a brilliant scientist who, through meticulous experiments, laid down the fundamental laws.

#### Faraday's First Law: The "When" of Induction

Faraday's First Law states: **Whenever the magnetic flux linking with a circuit changes, an EMF is induced in the circuit.**

Let's break this down. What's "magnetic flux"? Imagine magnetic field lines passing through a surface. Magnetic flux is essentially a measure of the *total* number of these lines passing through that surface. So, if this flux *changes* – meaning more lines start passing through, fewer lines pass through, or the lines themselves change in strength – then, *poof*, an EMF is generated. This induced EMF is what drives current in a conductor.

Think of a simple analogy: Imagine you have a fishing net (that's your conductor or coil) and you're moving it through a river. If the river's current (the magnetic field) is constant, nothing much happens. But if the river's current suddenly surges (a change in magnetic flux), you'll feel a push or pull – that's your induced EMF!

Crucially, this law tells us *that* an EMF is induced when flux changes, but not *how much* or in *what direction*.

#### Faraday's Second Law: The "How Much" of Induction

Faraday's Second Law quantifies this induced EMF. It states: **The magnitude of the induced EMF is directly proportional to the rate of change of magnetic flux.**

Mathematically, we can express this as:
$EMF \propto \frac{d\Phi}{dt}$

Where:
*   $EMF$ is the induced electromotive force (voltage).
*   $\frac{d\Phi}{dt}$ is the rate of change of magnetic flux with respect to time.

The "d" here signifies a small change over a small time interval. So, the faster the magnetic flux changes, the larger the EMF that gets induced. If the flux changes very rapidly, you get a strong EMF. If it changes slowly, you get a weaker EMF. And if the flux doesn't change at all, then no EMF is induced, no matter how strong the magnetic field is. This is a key takeaway: **change is the key to induction!**

In a coil with multiple turns (like a solenoid), the induced EMFs in each turn add up. So, if you have $N$ turns, the total induced EMF is $N$ times the EMF induced in a single turn. Therefore, the more complete form is:

$EMF = -N \frac{d\Phi}{dt}$

That minus sign is super important, and it leads us to our next critical concept.

### Lenz's Law: The "Direction" of Induction – Nature's Opposition

Now, Faraday's laws tell us *that* an EMF is induced and *how much*, but what about the *direction* of this induced EMF and the resulting current? This is where **Heinrich Lenz** comes in with his eponymous law.

Lenz's Law states: **The direction of the induced EMF or current is always such that it opposes the change in magnetic flux that produced it.**

This law is a direct consequence of the conservation of energy. If the induced current could somehow reinforce the change in flux that caused it, you'd have a self-perpetuating cycle, creating energy out of nothing – which, as you know, is impossible! Nature doesn't allow that. The induced EMF acts like a little rebel, trying to push back against whatever is trying to change the magnetic situation.

Let's use an analogy. Imagine you're trying to push a swing forward. Lenz's Law is like the swing's natural tendency to swing back towards you after you push it. The induced EMF tries to counteract the very change in magnetic flux that created it.

**How does it oppose?**

*   If the magnetic flux *entering* a coil is *increasing*, the induced current will create its own magnetic field that opposes this increase, typically by pointing in the opposite direction to the external field.
*   If the magnetic flux *entering* a coil is *decreasing*, the induced current will create its own magnetic field that tries to *maintain* the flux, pointing in the same direction as the original external field.

The minus sign in Faraday's second law ($EMF = -N \frac{d\Phi}{dt}$) is precisely Lenz's Law. It indicates that the induced EMF is in a direction that opposes the rate of change of flux.

**Connecting to Course Outcomes:** Understanding Lenz's Law is fundamental to predicting the behavior of electrical circuits with changing magnetic fields, directly supporting **CO1** by allowing us to determine current direction in inductive circuits.

### Types of Induced EMF: Static vs. Dynamic

The way EMF is induced can be categorized into two main types, based on the motion involved:

#### Statically Induced EMF

This is EMF induced in a conductor when the magnetic field *around* it changes, but the conductor itself is **stationary**. Think of it as the magnetic field doing all the "moving" relative to the conductor.

*   **Transformation:** The classic example is a transformer. In a transformer, there's a primary coil and a secondary coil wound around a common iron core. When an alternating voltage is applied to the primary coil, it creates an alternating current, which in turn produces a continuously changing magnetic flux in the core. This changing flux then links with the secondary coil, inducing an EMF in it, even though neither coil is physically moving. This is crucial for changing voltage levels in AC power systems.
*   **Inductor Behavior:** This also explains the behavior of inductors in AC circuits. The fluctuating current in an inductor creates a fluctuating magnetic field, which induces an opposing EMF within the inductor itself. This self-induced EMF opposes changes in the current flowing through it.

**Textbook Connection:** You'll find extensive coverage of statically induced EMF in transformers in books like Kothari and Nagrath's "Basic Electrical Engineering" and Cathey and Nasar's "Schaum's Outline of Basic Electrical Engineering."

#### Dynamically Induced EMF

This type of EMF is induced when a conductor **moves** through a magnetic field, or when a magnetic field changes in such a way that it cuts across the conductor. Here, it's the conductor's motion that causes the change in flux linkage.

*   **Generators and Motors:** This is the principle behind how most of our electricity is generated. In a generator, a conductor (like a coil of wire) is rotated within a magnetic field (or a magnet is rotated near a stationary conductor). As the conductor moves and cuts through magnetic field lines, an EMF is induced across it. This is dynamically induced EMF. Similarly, when current flows through a conductor in a magnetic field, it experiences a force causing motion, which is the principle of electric motors.
*   **Linear Motion:** Imagine a straight wire moving at a constant velocity perpendicular to a uniform magnetic field. The charges within the wire experience a Lorentz force, which pushes them to one end of the wire, creating a potential difference (EMF) across its ends. The magnitude of this EMF is given by $EMF = Blv$, where $B$ is the magnetic field strength, $l$ is the length of the conductor in the field, and $v$ is its velocity.

**Key Distinction:** The crucial difference lies in *what* is changing:
*   **Statically induced EMF:** Caused by a **changing magnetic field** in a **stationary conductor**.
*   **Dynamically induced EMF:** Caused by a **moving conductor** cutting through a **magnetic field**, or a moving magnetic field cutting through a conductor.

**Relating to Course Outcomes:** Understanding these two types is vital for **CO1**, as it helps differentiate how EMF arises in different electrical machines and circuits.

### Inductance: The Property of Resisting Change

Now that we understand how EMF is induced, let's talk about a property that arises directly from this phenomenon: **Inductance**. Inductance is a measure of how effectively a coil or circuit can store energy in a magnetic field and, more importantly, how it opposes changes in electric current.

Think of inductance as the electrical equivalent of inertia for current. Just like a massive object resists changes in its velocity, an inductor resists changes in its current.

#### Self-Inductance ($L$): The Echo Within

**Self-inductance** is the phenomenon where a changing current in a circuit induces an EMF in the *same* circuit. It's like the circuit producing its own opposing force.

When current flows through a coil, it creates a magnetic field. If this current changes (either increasing or decreasing), the magnetic flux produced by it also changes. According to Faraday's laws, this changing flux will induce an EMF in the coil itself. And, by Lenz's Law, this induced EMF (called the **back EMF**) will always oppose the change in current that caused it.

*   **How it works:** If the current is increasing, the back EMF tries to reduce the current. If the current is decreasing, the back EMF tries to keep it flowing. This is why inductors are used to smooth out current variations or store energy in magnetic fields.
*   **Defining $L$:** The self-inductance ($L$) of a circuit element (like a coil) is defined as the ratio of the magnetic flux linkage to the current producing it, provided the flux is proportional to the current. More practically, it's defined by the relationship between the back EMF and the rate of change of current:
    $EMF_{induced} = -L \frac{di}{dt}$
    Here, $L$ is the self-inductance, measured in Henries (H). A larger $L$ means a greater opposition to current change.
*   **Factors affecting $L$:** The self-inductance of a coil depends on its physical construction:
    *   **Number of turns ($N$):** More turns mean more flux linkage, hence higher inductance.
    *   **Geometry:** The shape and dimensions (length, cross-sectional area) of the coil.
    *   **Core material:** The presence of a ferromagnetic core (like iron) significantly increases inductance compared to an air core because it concentrates the magnetic flux.

**Practical Example:** Think about a dimmer switch for a light. Older, more robust dimmers often use inductors. When you turn the knob, you're changing the current to the light bulb. The inductor, due to its self-inductance, resists these rapid changes in current, creating a smoother dimming effect. If you've ever heard a "hum" from such a dimmer, that's often the inductor working.

**Exam Tip:** Be clear about the definition of self-inductance. It's a property of a circuit element that relates the induced EMF to the *rate of change of current within that same circuit*.

#### Mutual Inductance ($M$): The Influence Between Circuits

**Mutual inductance** is the phenomenon where a changing current in one circuit induces an EMF in a *nearby* circuit, due to the magnetic flux linkage between them. It's about one circuit influencing another magnetically.

Imagine two coils placed close to each other. When current flows through the first coil (the primary), it produces a magnetic field. Some of this magnetic field lines will pass through the second coil (the secondary). If the current in the first coil changes, the magnetic flux it produces also changes. This changing flux, linking with the second coil, will induce an EMF in the second coil.

*   **The relationship:** The magnitude of the EMF induced in the secondary coil ($EMF_2$) due to a changing current in the primary coil ($i_1$) is given by:
    $EMF_2 = -M \frac{di_1}{dt}$
    Similarly, if the current in the secondary coil ($i_2$) changes, it will induce an EMF in the primary coil:
    $EMF_1 = -M \frac{di_2}{dt}$
    The value $M$ is the **mutual inductance** between the two circuits, and it's the same in both directions. It's measured in Henries (H).
*   **Factors affecting $M$:** Mutual inductance depends on:
    *   The physical characteristics of both coils (number of turns, geometry).
    *   Their relative positions and orientations (how close they are, how they're aligned).
    *   The properties of the medium (especially the core material) linking the magnetic flux between them.

**Practical Example:** This is the fundamental principle behind **wireless charging** for your phones. Your charging pad has a coil, and your phone has a coil. When the charging pad's coil carries an alternating current, it generates a changing magnetic field. This field links with the coil in your phone, inducing an EMF that charges the battery – all without a physical wire connection! Transformers also rely heavily on mutual inductance.

**Connecting to Course Outcomes:** Both self-inductance and mutual inductance are crucial for understanding the behavior of AC circuits and the operation of devices like transformers and coils, directly supporting **CO1**. Their principles are also foundational for many electronic communication systems, touching upon **CO5**.

### Coefficient of Coupling ($k$): How Tightly Linked Are They?

When we talk about mutual inductance, we often use the **coefficient of coupling** ($k$). This dimensionless factor tells us how effectively the magnetic flux produced by one coil links with the other coil. It essentially quantifies the degree of magnetic coupling between two circuits.

*   **Definition:** The coefficient of coupling is defined as the ratio of the mutual inductance ($M$) to the geometric mean of the self-inductances of the two coils ($L_1$ and $L_2$):
    $k = \frac{M}{\sqrt{L_1 L_2}}$
*   **Values of $k$:**
    *   $k = 1$: This represents **perfect coupling**. All the magnetic flux produced by one coil links with the other. This happens when the coils are very close and wound on a highly permeable core, ensuring minimal flux leakage. Transformers are designed for high coupling (ideally $k \approx 1$).
    *   $0 < k < 1$: This is the most common scenario. There is some flux linkage, but not all of it. Some magnetic flux from the primary coil "leaks" out into the air and doesn't reach the secondary coil, and vice versa.
    *   $k = 0$: This represents **no coupling**. The coils are positioned so far apart or oriented in such a way that the magnetic flux from one does not link with the other at all. In this case, $M = 0$.

**Intuition:** Imagine two people trying to pass a message. If they are right next to each other and shouting (perfect coupling, $k=1$), the message gets through perfectly. If they are across a large hall with walls in between (loose coupling, $k$ is small), only a fraction of the message gets through. If they are in different buildings (no coupling, $k=0$), the message doesn't pass at all.

**Why is $k$ important?** It helps us understand how efficient the magnetic energy transfer is between two circuits. A high $k$ means that a change in current in one coil will have a significant effect on the other, which is desirable in transformers.

**Connecting to Course Outcomes:** The concept of coupling is directly relevant to understanding the efficiency and operation of coupled circuits, which is applicable to **CO1** and also relevant to the principles in **CO5** for communication systems where signal transfer between circuits is key.

### Putting It All Together: A Quick Recap

*   **Faraday's Laws:** Change in magnetic flux induces EMF. The magnitude of EMF is proportional to the rate of change of flux.
*   **Lenz's Law:** The induced EMF opposes the change that caused it. This is the direction guide.
*   **Statically Induced EMF:** EMF induced in a stationary conductor due to a changing magnetic field (e.g., transformers).
*   **Dynamically Induced EMF:** EMF induced due to motion of a conductor in a magnetic field (e.g., generators).
*   **Self-Inductance ($L$):** A circuit's tendency to oppose changes in its own current, due to its own changing magnetic flux.
*   **Mutual Inductance ($M$):** The influence of a changing current in one circuit on a nearby circuit via magnetic flux linkage.
*   **Coefficient of Coupling ($k$):** Measures how well flux from one circuit links with another, ranging from 0 (no coupling) to 1 (perfect coupling).

Remember these core ideas, and you'll have a solid foundation for understanding how electromagnetic induction works and its vital role in electrical engineering.

---

## Sample Questions with Answers

Here are some questions to test your understanding of this module:

**1. Conceptual Question:** Explain why a stationary conductor placed in a constant magnetic field does not experience any induced EMF, even if the magnetic field is very strong.

    **Answer:** According to Faraday's First Law of Electromagnetic Induction, an EMF is induced in a conductor only when the magnetic flux linking with it *changes*. If the conductor is stationary and the magnetic field is constant, the magnetic flux passing through the conductor (or any loop formed by it) remains constant. Since there is no *change* in magnetic flux ($\frac{d\Phi}{dt} = 0$), no EMF is induced, regardless of the strength of the magnetic field.

**2. Conceptual Question:** A bar magnet is moved towards a coil connected to a galvanometer. Describe what happens to the galvanometer reading if the magnet is moved faster and then if it is moved slower.

    **Answer:** According to Faraday's Second Law, the magnitude of the induced EMF is directly proportional to the rate of change of magnetic flux ($\text{EMF} \propto \frac{d\Phi}{dt}$).
    *   **When the magnet is moved faster:** The rate at which the magnetic flux links with the coil increases. This results in a larger induced EMF and, consequently, a larger induced current. The galvanometer will show a larger deflection.
    *   **When the magnet is moved slower:** The rate of change of magnetic flux is smaller. This leads to a smaller induced EMF and a smaller induced current. The galvanometer will show a smaller deflection.

**3. Conceptual Question:** If you hold a loop of wire and suddenly move it through a region of zero magnetic field, will an EMF be induced? Why or why not?

    **Answer:** No, an EMF will not be induced. While the loop is moving, if it is entirely within a region of zero magnetic field, the magnetic flux passing through it is zero, and remains zero as it moves. Since there is no change in magnetic flux ($\frac{d\Phi}{dt} = 0$), no EMF is induced according to Faraday's Law.

**4. Conceptual Question:** In a transformer, the primary coil is connected to an AC voltage source, and the secondary coil is connected to a load. What type of induced EMF is present in the secondary coil, and what law governs its direction?

    **Answer:** The EMF induced in the secondary coil of a transformer is **statically induced EMF**. This is because the AC voltage in the primary coil creates a continuously changing magnetic flux in the iron core. This changing flux links with the stationary secondary coil, inducing an EMF without any physical movement of the coils. The direction of this induced EMF is governed by **Lenz's Law**, which states that it will oppose the change in flux that produced it.

**5. Conceptual Question:** What is the primary function of an inductor in an electrical circuit, and how does its inductance property relate to this function?

    **Answer:** The primary function of an inductor in an electrical circuit is to oppose changes in electric current. This opposition is quantified by its inductance ($L$). The relationship $EMF_{induced} = -L \frac{di}{dt}$ shows that a larger inductance ($L$) results in a larger back EMF for a given rate of change of current ($\frac{di}{dt}$). This back EMF acts to counteract any sudden increase or decrease in current, thus smoothing out current fluctuations and storing energy in its magnetic field.

**6. Conceptual Question:** Define the coefficient of coupling ($k$) between two coils. What does a value of $k=1$ signify, and what does it imply about the mutual inductance ($M$) in relation to their self-inductances ($L_1$, $L_2$)?

    **Answer:** The coefficient of coupling ($k$) is a dimensionless factor that quantifies the degree of magnetic flux linkage between two coils. It is defined as the ratio of the mutual inductance ($M$) to the geometric mean of the self-inductances of the two coils: $k = \frac{M}{\sqrt{L_1 L_2}}$.
    A value of $k=1$ signifies **perfect coupling**. This means that all the magnetic flux produced by one coil links with the other coil. In this scenario, the mutual inductance ($M$) is equal to the product of the self-inductances of the two coils, i.e., $M = \sqrt{L_1 L_2}$. This is an ideal situation often aimed for in transformer designs.

**7. Exam-Oriented Question:** Consider a scenario where a conductor moves perpendicular to a magnetic field. What is this type of induced EMF called, and what are the key factors determining its magnitude?

    **Answer:** This type of induced EMF is called **dynamically induced EMF**. The key factors determining its magnitude are:
    *   The strength of the magnetic field ($B$).
    *   The length of the conductor that is cutting the magnetic field lines ($l$).
    *   The velocity of the conductor ($v$) relative to the magnetic field.
    The magnitude is given by the formula $EMF = Blv$, assuming these quantities are mutually perpendicular.

**8. Exam-Oriented Question:** Explain the practical application of mutual inductance in everyday technology, providing a brief explanation of how it works in that application.

    **Answer:** A common practical application of mutual inductance is **wireless charging**. In this technology, a charging pad contains a primary coil, and the device to be charged (like a smartphone) contains a secondary coil. When an alternating current is supplied to the primary coil, it generates a changing magnetic field. This magnetic field extends outwards and passes through the secondary coil in the device. According to Faraday's Law and the principle of mutual inductance, this changing magnetic flux induces an EMF in the secondary coil. This induced EMF is then used to charge the device's battery. The efficiency of this power transfer is dependent on the mutual inductance and the coefficient of coupling between the two coils.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
