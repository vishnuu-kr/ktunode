---
title: "Classical free electron theory"
subject: "PHYSICS FOR INFORMATION SCIENCE"
module: "Module 1: Electrical conductivity"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6f58474a0b135b5d64"
status: "completed"
scrapedAt: "2026-05-20T16:40:45.056Z"
---
# Physics for Information Science: Module 1 - Electrical Conductivity

## Topic: Classical Free Electron Theory

Welcome, everyone! Today, we're embarking on our journey into the fascinating world of electrical conductivity, and our first stop is the Classical Free Electron Theory. This is a foundational concept, and understanding it will pave the way for everything else we'll cover in this module and beyond in our quest to connect physics principles with information science.

Think about all the devices that power our digital lives – your smartphone, the servers that host the internet, even the simple wires carrying signals. What makes them work? It's the flow of electricity, the movement of charged particles. But what exactly *allows* this movement? That's where our understanding of conductivity comes in, and the Classical Free Electron Theory, as developed by pioneering scientists like Dr. Paul Drude, gives us our first, albeit simplified, look at this.

This theory, though classical, is crucial for us to grasp. It helps us understand *why* some materials conduct electricity well (like metals) and others don't (like insulators), which directly relates to **Course Outcome 1 (CO1): Explain electrical conductivity and Superconductivity.** While it doesn't delve into the quantum realm yet (that will come later, linking to **CO2**), it provides the essential building blocks.

### The Core Idea: Electrons as Free Travelers

Imagine a metal. What's it made of? Atoms, right? And these atoms have electrons orbiting their nucleus. Now, the Classical Free Electron Theory makes a bold assumption: in a metallic conductor, some of the outermost electrons, the valence electrons, are not tightly bound to their individual atoms. Instead, they are "free" to roam throughout the entire crystal lattice of the metal.

Think of it like this: imagine a bustling city. Most people live in specific houses (atoms). But in this city, there's a group of people who don't have fixed homes; they just wander around, visiting different parts of the city. These are our "free electrons."

These free electrons are essentially a "sea" or a "gas" of electrons that permeate the entire conductor. They move randomly, colliding with each other and with the stationary positive ions (the metal atoms that have lost their valence electrons). This random motion is happening all the time, even when there's no external electrical field applied.

**Why is this important?** Because it's these mobile charge carriers – these free electrons – that are responsible for carrying electric current.

### What is Electrical Conductivity? Let's Define It Clearly.

Before we go further, let's solidify our understanding of electrical conductivity. Conductivity, denoted by the Greek letter sigma ($\sigma$), is a material's ability to conduct electric current. It's the reciprocal of resistivity ($\rho$).

$\sigma = \frac{1}{\rho}$

A high conductivity means the material allows electric current to flow easily, while a low conductivity means it resists the flow. Metals, like copper and aluminum, have very high conductivity. Insulators, like rubber and glass, have extremely low conductivity. Semiconductors, which will be a major focus later (**CO3**, **CO4**), fall somewhere in between.

The Classical Free Electron Theory aims to explain *why* this difference in conductivity exists between materials.

### The Driving Force: The Electric Field

So, we have these free electrons moving randomly. How do we get a *current*? A current is a directional flow of charge. This directionality comes when we apply an external electric field across the conductor.

Imagine our city analogy again. The free electrons are wandering around. Now, imagine a police car (the electric field) driving down a main street. This police car exerts a force on the wanderers. If the police car is driving from left to right, it will tend to push the wanderers towards the right.

Similarly, when an electric field is applied across a conductor, it exerts a force on the free electrons. Since electrons are negatively charged, they are pushed in the *opposite* direction of the electric field. This directed motion of electrons, superimposed on their random thermal motion, constitutes an electric current.

### Drift Velocity: The Gentle Push

Now, it's crucial to understand that this electric field doesn't just accelerate the electrons to cosmic speeds. Every time an electron moves in the direction of the field, it's likely to collide with a positive ion or another electron. These collisions scatter the electron, essentially resetting its directed motion.

So, the electrons don't accelerate indefinitely. Instead, they gain a small, average velocity in the direction opposite to the electric field. This average velocity is called the **drift velocity ($v_d$)**.

Think of it as trying to walk through a crowded market. You're trying to move forward, but every few steps, you bump into someone, or someone bumps into you. You don't move in a straight, fast line; you sort of shuffle forward, making slow but steady progress. That slow shuffle is analogous to the drift velocity.

This drift velocity is the key to understanding Ohm's Law, a cornerstone of electrical circuits, and thus deeply relevant to our understanding of conductivity.

### Connecting Drift Velocity to Current: The Equation of Continuity

How do we relate this drift velocity to the macroscopic current we measure?

Let's consider a conductor with a cross-sectional area 'A' and length 'L'. Suppose the number of free electrons per unit volume in the conductor is 'n'. If each electron has a drift velocity $v_d$, then in a time $\Delta t$, each electron will travel a distance $v_d \Delta t$.

Consider a small segment of the conductor of length $v_d \Delta t$. The volume of this segment is $A \times (v_d \Delta t)$. The number of free electrons in this volume is $n \times A \times (v_d \Delta t)$.

The total charge passing through the cross-section 'A' in time $\Delta t$ is the product of the number of electrons and the charge of each electron (-e, where 'e' is the elementary charge).

So, $\Delta Q = n \times A \times (v_d \Delta t) \times e$.

Current ($I$) is defined as the rate of flow of charge: $I = \frac{\Delta Q}{\Delta t}$.

Substituting our expression for $\Delta Q$:

$I = \frac{n \times A \times v_d \times \Delta t \times e}{\Delta t}$

$I = n A e v_d$

This is a fundamental equation. It tells us that the current flowing through a conductor depends on the number density of free electrons (n), the cross-sectional area (A), the charge of an electron (e), and the drift velocity ($v_d$). This equation directly links the microscopic picture of electron motion to the macroscopic observable current.

### Drude's Model and Ohm's Law

Drude's model, built upon these ideas, was one of the first attempts to quantitatively explain electrical conductivity. He related the drift velocity to the applied electric field ($E$) using the concept of relaxation time ($\tau$).

The relaxation time ($\tau$) is the average time an electron travels between two successive collisions. It's like the average time you can walk in that crowded market without bumping into anyone.

When an electric field $E$ is applied, a free electron experiences a force $F = -eE$. According to Newton's second law, this force causes acceleration $a = \frac{F}{m} = \frac{-eE}{m}$, where 'm' is the mass of the electron.

During the time $\tau$ between collisions, the electron gains a velocity increment due to this acceleration. The drift velocity $v_d$ is the average of these velocity increments over all electrons. A simplified way to think about it is that the average velocity gained is $a \tau$.

So, $v_d = a \tau = \frac{-eE}{m} \tau$.

The negative sign indicates that the drift velocity is opposite to the electric field direction, as expected. However, for current magnitude, we often use the magnitude of drift velocity: $v_d = \frac{eE\tau}{m}$.

Now, let's substitute this into our current equation $I = n A e v_d$:

$I = n A e \left(\frac{eE\tau}{m}\right)$

$I = \frac{n A e^2 \tau}{m} E$

Rearranging this, we get:

$\frac{I}{A} = \left(\frac{n e^2 \tau}{m}\right) E$

We know that current density ($J$) is $I/A$, and we also know that $J = \sigma E$ from Ohm's Law in its microscopic form.

Therefore, the conductivity $\sigma$ from Drude's model is:

$\sigma = \frac{n e^2 \tau}{m}$

This is a phenomenal result! It tells us that conductivity depends on:

*   **n:** The number density of free electrons (more free electrons, higher conductivity).
*   **e:** The charge of an electron (larger charge, higher conductivity).
*   **$\tau$:** The relaxation time (longer time between collisions, higher conductivity).
*   **m:** The mass of the electron (lighter electrons, higher conductivity).

Remember this formula! It's a direct consequence of the Classical Free Electron Theory and explains why metals like copper, with a high 'n' and a reasonable '$\tau$', are excellent conductors. This formula directly addresses **CO1**.

### What About Resistance?

Resistance ($R$) is related to conductivity and the dimensions of the conductor. For a conductor of length $L$ and cross-sectional area $A$, resistance is given by:

$R = \rho \frac{L}{A}$

Since $\rho = \frac{1}{\sigma}$, we have:

$R = \frac{1}{\sigma} \frac{L}{A} = \frac{m}{n e^2 \tau} \frac{L}{A}$

This shows how the microscopic properties derived from the free electron model translate into the macroscopic resistance we measure.

### Limitations of the Classical Free Electron Theory

While incredibly insightful, the Classical Free Electron Theory has its limitations. It's important to acknowledge these because they set the stage for more advanced theories (like quantum mechanics) that we will encounter.

1.  **Specific Heat of Metals:** The classical theory predicts that free electrons should contribute significantly to the specific heat of metals, similar to how gas molecules contribute. However, experiments show that the electronic contribution to specific heat in metals is much smaller than predicted by the classical model. This was a major failure.
2.  **Hall Effect:** While the theory could predict the existence of the Hall effect (a voltage produced perpendicular to both current and applied magnetic field), it often got the sign wrong for certain materials (e.g., it predicted electrons as charge carriers when holes were actually responsible in some cases).
3.  **Temperature Dependence of Resistivity:** The theory correctly predicts that resistivity increases with temperature (as temperature increases, random thermal vibrations of ions increase, leading to more frequent collisions and a smaller $\tau$). However, it doesn't accurately predict the *magnitude* of this increase, especially at very low temperatures.
4.  **Constant $\tau$ and 'n':** The theory often assumes 'n' and '$\tau$' are constant, which isn't entirely accurate. These parameters can depend on temperature, material structure, and other factors.
5.  **No Quantum Mechanics:** The biggest limitation is its classical nature. It doesn't account for the wave-particle duality of electrons or the Pauli Exclusion Principle, which are fundamental to understanding electron behavior in solids and are key to explaining the failures mentioned above. This is where we will connect to **CO2** later.

Think of the Classical Free Electron Theory as a robust initial sketch. It gives us the main outlines and proportions, but the finer details and colors will come with quantum mechanics.

### Connecting to Course Outcomes: A Quick Recap

Let's quickly revisit how this topic ties into our course outcomes:

*   **CO1 (Explain electrical conductivity and Superconductivity):** We've directly addressed electrical conductivity by explaining the concept of free electrons, drift velocity, and deriving the formula for conductivity ($\sigma = \frac{n e^2 \tau}{m}$). Superconductivity, a more advanced topic, will build upon these foundations.
*   **CO2 (Explain the behaviour of matter... through quantum mechanics):** The limitations we discussed (specific heat, etc.) are precisely the points where classical theory breaks down, highlighting the need for quantum mechanics. We'll see how quantum mechanics resolves these issues.
*   **CO3 & CO4 (Apply/Describe Semiconductor Physics):** While this theory primarily explains metals, understanding these basic concepts of charge carriers and their movement is essential before we delve into semiconductors, where the *nature* and *density* of charge carriers are different and temperature-dependent in more complex ways.
*   **CO5 (Apply physics principles to conduct experiments):** Understanding the relationships between current, voltage, resistance, and material properties ($n, \tau$) allows us to design experiments to measure conductivity or resistivity of materials, and to predict how changes in temperature or dimensions will affect electrical measurements.

### Key Takeaways

*   **Free Electrons:** Metals have valence electrons that are not bound to individual atoms but are free to move throughout the material.
*   **Conduction:** An applied electric field causes these free electrons to have a net drift velocity in the direction opposite to the field, resulting in electric current.
*   **Drift Velocity ($v_d$):** The average velocity of electrons in the direction of the applied field.
*   **Current ($I$):** $I = n A e v_d$, where 'n' is electron density, 'A' is area, 'e' is electron charge.
*   **Conductivity ($\sigma$):** $\sigma = \frac{n e^2 \tau}{m}$, where '$\tau$' is relaxation time and 'm' is electron mass. This is a crucial formula.
*   **Limitations:** The theory fails to explain specific heat anomalies and other experimental results, pointing to the necessity of quantum mechanics.

Remember this: the Classical Free Electron Theory provides a valuable, albeit simplified, framework for understanding why metals conduct electricity. It introduces us to the fundamental concepts of free charge carriers and their response to electric fields.

---

## Sample Questions with Answers

Let's test our understanding with a few questions, the kind you might encounter in an exam.

**Q1. According to the Classical Free Electron Theory, what is the main reason metals are good electrical conductors?**

**Answer:** The Classical Free Electron Theory states that in metals, there exists a large number of "free" electrons (valence electrons) that are not bound to individual atoms but can move throughout the entire metal lattice. When an electric field is applied, these free electrons drift in a specific direction, constituting an electric current. The high density of these mobile charge carriers makes metals good conductors.

**Q2. Derive the expression for electrical conductivity ($\sigma$) based on the Classical Free Electron Theory.**

**Answer:**
1.  **Force on an electron:** When an electric field $E$ is applied, a free electron of charge $-e$ experiences a force $F = -eE$.
2.  **Acceleration:** According to Newton's second law, the acceleration of the electron is $a = \frac{F}{m} = \frac{-eE}{m}$, where $m$ is the mass of the electron.
3.  **Drift Velocity ($v_d$):** Electrons are in constant random motion and collide with the lattice ions. The relaxation time ($\tau$) is the average time between collisions. During this time, the electron accelerates. The average velocity gained due to the field is $v_d = a \tau$.
    Substituting the acceleration: $v_d = \left(\frac{-eE}{m}\right) \tau$.
    For magnitude, $v_d = \frac{eE\tau}{m}$.
4.  **Current ($I$):** If $n$ is the number of free electrons per unit volume, and $A$ is the cross-sectional area of the conductor, the current flowing through it is given by $I = n A e v_d$.
5.  **Substituting $v_d$:** $I = n A e \left(\frac{eE\tau}{m}\right) = \frac{n A e^2 \tau}{m} E$.
6.  **Conductivity ($\sigma$):** The microscopic form of Ohm's Law is $J = \sigma E$, where $J = I/A$ is the current density.
    So, $\frac{I}{A} = \sigma E$.
    From our derived equation, $\frac{I}{A} = \left(\frac{n e^2 \tau}{m}\right) E$.
    Comparing these, we get the conductivity: $\sigma = \frac{n e^2 \tau}{m}$.

**Q3. What is the physical significance of the relaxation time ($\tau$) in the Classical Free Electron Theory? How does it affect conductivity?**

**Answer:** The relaxation time ($\tau$) represents the average time an electron travels between successive collisions with the ions in the metal lattice. It's a measure of how "free" the electron is to move without being scattered.
A longer relaxation time ($\tau$) means electrons experience fewer collisions and can travel for a longer duration under the influence of the electric field before their directed motion is disrupted. According to the formula $\sigma = \frac{n e^2 \tau}{m}$, conductivity ($\sigma$) is directly proportional to the relaxation time ($\tau$). Therefore, a longer $\tau$ leads to higher electrical conductivity, as the electrons can more effectively carry current.

**Q4. Identify one significant failure of the Classical Free Electron Theory and explain why it is a problem.**

**Answer:** One significant failure is its prediction regarding the **electronic contribution to the specific heat of metals**. The classical theory treats the free electrons like a classical gas and predicts that they should contribute $\frac{3}{2} k_B$ per electron to the specific heat (where $k_B$ is the Boltzmann constant). This suggests a substantial electronic contribution to the total specific heat of metals. However, experimental measurements show that the actual electronic contribution to specific heat in metals is much smaller than predicted, especially at room temperature, and varies with temperature in a way that classical theory cannot explain. This discrepancy indicated that the assumption of electrons behaving like a classical gas was incorrect and pointed towards the need for a quantum mechanical description of electrons in metals.

**Q5. If you increase the temperature of a metallic conductor, how does the Classical Free Electron Theory explain the change in its electrical resistivity?**

**Answer:** According to the Classical Free Electron Theory, increasing the temperature of a metallic conductor leads to increased thermal vibrations of the positive ions in the lattice. These vibrations cause the free electrons to collide more frequently with the lattice. This increased collision frequency results in a shorter average time between collisions, meaning the relaxation time ($\tau$) decreases. Since resistivity ($\rho = \frac{1}{\sigma} = \frac{m}{n e^2 \tau}$) is inversely proportional to the relaxation time ($\tau$), a decrease in $\tau$ leads to an increase in resistivity. Hence, the electrical resistance of the conductor increases with temperature.
