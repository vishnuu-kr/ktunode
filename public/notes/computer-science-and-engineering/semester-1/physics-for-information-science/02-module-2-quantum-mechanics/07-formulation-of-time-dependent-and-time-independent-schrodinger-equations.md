---
title: "Formulation of time dependent and time independent Schrodinger equations"
subject: "PHYSICS FOR INFORMATION SCIENCE"
module: "Module 2: Quantum Mechanics"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6f58474a0b135b5d79"
status: "completed"
scrapedAt: "2026-05-20T16:41:17.907Z"
---
Alright everyone, welcome back to Physics for Information Science! Today, we're diving headfirst into the fascinating world of **Quantum Mechanics**, specifically Module 2, and our focus is on a cornerstone concept: **The Formulation of the Time-Dependent and Time-Independent Schrödinger Equations.**

Now, you might be thinking, "Schrödinger? Isn't that the cat in the box?" Yes, that's the famous thought experiment, but today we're going to understand the *mathematical engine* behind it – the equations that describe how quantum systems evolve over time. This is absolutely crucial for understanding the behavior of matter at the atomic and subatomic level, which is directly related to **Course Outcome 2 (CO2)**. As we go through this, keep in mind how these principles underpin everything from how electrons behave in transistors to the very nature of information storage at its most fundamental level.

### 1. The Need for a New Framework: Why Classical Physics Falls Short

Before we get to Schrödinger's equations, let's briefly revisit why we even need quantum mechanics. You're all familiar with classical physics – Newton's laws, Maxwell's equations. These work beautifully for macroscopic objects, like planets orbiting stars or how a ball moves when you throw it. But when we shrink down to the atomic and subatomic realm, things get… weird.

Remember the photoelectric effect? Or atomic spectra? Classical physics, with its deterministic trajectories and continuous energy levels, simply couldn't explain these phenomena. We needed a new way of looking at the universe, a way that embraced probability and discreteness. This is where the wave-particle duality comes in, a concept you've likely encountered. Particles, like electrons, can behave like waves, and waves, like light, can exhibit particle-like properties (photons).

This duality is the bedrock upon which quantum mechanics is built. How do we describe the "wave-ness" of a particle? That's where our wave function, often denoted by the Greek letter psi ($\Psi$), comes into play.

### 2. The Wave Function ($\Psi$) and Its Meaning

Think of the wave function, $\Psi(\mathbf{r}, t)$, as the most complete description of a quantum system at a given position $\mathbf{r}$ and time $t$. It’s not something we can directly measure in the same way we measure a car's speed. Instead, its *square* gives us something tangible: probability.

Specifically, $|\Psi(\mathbf{r}, t)|^2 dV$ represents the probability of finding the particle within a tiny volume element $dV$ around the position $\mathbf{r}$ at time $t$. It's like a "probability density map" for the particle. This is a fundamental concept, and understanding it is key to grasping the probabilistic nature of quantum mechanics, directly contributing to **CO2**.

So, if $\Psi$ is the state of our quantum system, how does it change? How does it evolve? This leads us directly to the Schrödinger equations.

### 3. The Time-Dependent Schrödinger Equation (TDSE): The Quantum Evolution Equation

This equation is like the "Newton's Second Law" for quantum mechanics. It tells us how the wave function $\Psi(\mathbf{r}, t)$ changes over time. It was formulated by Erwin Schrödinger in 1926, building on the ideas of de Broglie's wave-particle duality and Planck's quantization of energy.

Let's break it down. We need to consider the total energy of a quantum system. In classical mechanics, the total energy ($E$) is the sum of kinetic energy ($K$) and potential energy ($V$).
$E = K + V$

In quantum mechanics, we represent these classical quantities with *operators* that act on the wave function.
*   **Kinetic Energy Operator ($\hat{K}$):** This is related to the momentum of the particle. For a particle of mass $m$, its kinetic energy is $p^2/(2m)$. The momentum operator in quantum mechanics is $\hat{\mathbf{p}} = -i\hbar \nabla$, where $i$ is the imaginary unit, $\hbar$ is the reduced Planck constant ($\hbar = h/2\pi$), and $\nabla$ is the gradient operator ($\nabla = \frac{\partial}{\partial x}\hat{\mathbf{i}} + \frac{\partial}{\partial y}\hat{\mathbf{j}} + \frac{\partial}{\partial z}\hat{\mathbf{k}}$).
    So, the kinetic energy operator becomes:
    $\hat{K} = \frac{\hat{\mathbf{p}}^2}{2m} = \frac{(-i\hbar \nabla) \cdot (-i\hbar \nabla)}{2m} = \frac{(i^2 \hbar^2) \nabla^2}{2m} = -\frac{\hbar^2}{2m} \nabla^2$
    Here, $\nabla^2$ is the Laplacian operator: $\nabla^2 = \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2}$.

*   **Potential Energy Operator ($\hat{V}$):** This is usually just the potential energy function itself, $V(\mathbf{r}, t)$, which depends on position and possibly time.

The total energy operator, often called the **Hamiltonian operator ($\hat{H}$)**, is the sum of the kinetic and potential energy operators:
$\hat{H} = \hat{K} + \hat{V} = -\frac{\hbar^2}{2m} \nabla^2 + V(\mathbf{r}, t)$

Now, how does the wave function evolve? The core idea is that the rate of change of the wave function with respect to time is proportional to the total energy of the system acting on the wave function. This gives us the time-dependent Schrödinger equation:

$$i\hbar \frac{\partial}{\partial t} \Psi(\mathbf{r}, t) = \hat{H} \Psi(\mathbf{r}, t)$$

Or, substituting the Hamiltonian:

$$i\hbar \frac{\partial}{\partial t} \Psi(\mathbf{r}, t) = \left(-\frac{\hbar^2}{2m} \nabla^2 + V(\mathbf{r}, t)\right) \Psi(\mathbf{r}, t)$$

**Remember this:** The TDSE is a **first-order differential equation in time** and a **second-order differential equation in space**. It's a wave equation that governs the dynamics of quantum systems. It's fundamental to understanding how quantum states change, which is crucial for understanding phenomena relevant to information science, like how the state of a quantum bit (qubit) might evolve.

*   **Analogy:** Imagine you have a map showing the distribution of pollen in a garden. The TDSE is like the rule that tells you how that pollen distribution changes from moment to moment, depending on how the wind blows (the Hamiltonian) and the existing distribution.

**Connection to Course Outcomes:** This equation is the heart of **CO2**, explaining the behavior of matter at the subatomic level. Without it, we can't predict how electrons will behave in materials, which is essential for **CO3** and **CO4**.

### 4. The Time-Independent Schrödinger Equation (TISE): For Stationary States

Now, what if the potential energy $V(\mathbf{r}, t)$ doesn't change with time? If $V$ is only a function of position, $V(\mathbf{r})$, then we can simplify our problem significantly. Systems with potentials that don't change with time are called **stationary systems**.

In such cases, the wave function $\Psi(\mathbf{r}, t)$ can be separated into a spatial part and a temporal part. This is a common technique in solving differential equations, called **separation of variables**. We can write:

$\Psi(\mathbf{r}, t) = \psi(\mathbf{r}) \phi(t)$

Here, $\psi(\mathbf{r})$ depends only on position, and $\phi(t)$ depends only on time. Let's substitute this into the TDSE:

$i\hbar \frac{\partial}{\partial t} [\psi(\mathbf{r}) \phi(t)] = \left(-\frac{\hbar^2}{2m} \nabla^2 + V(\mathbf{r})\right) [\psi(\mathbf{r}) \phi(t)]$

Since $\psi(\mathbf{r})$ is constant with respect to $t$, and $\nabla^2$ is constant with respect to $t$:

$i\hbar \psi(\mathbf{r}) \frac{d}{d t} \phi(t) = \phi(t) \left(-\frac{\hbar^2}{2m} \nabla^2 \psi(\mathbf{r}) + V(\mathbf{r}) \psi(\mathbf{r})\right)$

Now, let's divide both sides by $\psi(\mathbf{r})\phi(t)$:

$i\hbar \frac{1}{\phi(t)} \frac{d\phi(t)}{dt} = \frac{1}{\psi(\mathbf{r})} \left(-\frac{\hbar^2}{2m} \nabla^2 \psi(\mathbf{r}) + V(\mathbf{r}) \psi(\mathbf{r})\right)$

Look at this equation carefully. The left side depends only on time ($t$), and the right side depends only on position ($\mathbf{r}$). If two expressions that depend on different variables are equal for all values of those variables, then both expressions must be equal to a constant. Let's call this constant $E$.

So, we get two separate equations:

1.  **The Time-Dependent Part:**
    $i\hbar \frac{1}{\phi(t)} \frac{d\phi(t)}{dt} = E$
    $\frac{d\phi(t)}{dt} = \frac{E}{i\hbar} \phi(t) = -\frac{iE}{\hbar} \phi(t)$
    The solution to this is $\phi(t) = e^{-iEt/\hbar}$. This tells us that the temporal part of the wave function oscillates with a frequency proportional to the energy $E$.

2.  **The Spatial Part (The Time-Independent Schrödinger Equation):**
    $\frac{1}{\psi(\mathbf{r})} \left(-\frac{\hbar^2}{2m} \nabla^2 \psi(\mathbf{r}) + V(\mathbf{r}) \psi(\mathbf{r})\right) = E$
    Multiplying by $\psi(\mathbf{r})$, we get the **Time-Independent Schrödinger Equation (TISE)**:

    $$ \left(-\frac{\hbar^2}{2m} \nabla^2 + V(\mathbf{r})\right) \psi(\mathbf{r}) = E \psi(\mathbf{r}) $$

    Or, more compactly:

    $$ \hat{H} \psi(\mathbf{r}) = E \psi(\mathbf{r}) $$

**This is a crucial equation, everyone!** The TISE is an **eigenvalue equation**. The Hamiltonian operator ($\hat{H}$) acts on the spatial wave function ($\psi(\mathbf{r})$) and returns the same wave function multiplied by a scalar value, $E$. These scalar values $E$ are the **energy eigenvalues**, representing the possible quantized energy levels of the system. The corresponding wave functions $\psi(\mathbf{r})$ are the **energy eigenfunctions** or **stationary states**.

**What does "stationary state" mean?** It means that the probability density $|\Psi(\mathbf{r}, t)|^2 = |\psi(\mathbf{r})\phi(t)|^2 = |\psi(\mathbf{r})e^{-iEt/\hbar}|^2 = |\psi(\mathbf{r})|^2 |e^{-iEt/\hbar}|^2$. Since $|e^{-iEt/\hbar}|^2 = (\cos(-Et/\hbar) + i\sin(-Et/\hbar))(\cos(-Et/\hbar) - i\sin(-Et/\hbar)) = \cos^2(Et/\hbar) + \sin^2(Et/\hbar) = 1$, the probability density $|\Psi(\mathbf{r}, t)|^2 = |\psi(\mathbf{r})|^2$ is **independent of time**. The physical properties of the system, like the probability of finding the particle at a certain location, do not change with time in a stationary state. The wave function itself *does* change in time (due to the $\phi(t)$ factor), but its *observable* characteristics remain constant.

**Think about it:** If a particle is in a stationary state, it's like it's "settled." Its energy is fixed, and the probability of finding it here or there doesn't change. This is what happens in stable atomic orbitals, for example.

**Examples and Applications:**
The TISE is used to solve for the energy levels and wave functions of many important quantum systems:
*   **Particle in a Box:** A classic example where a particle is confined to a region of space. This leads to quantized energy levels, a direct manifestation of wave-particle duality. This is a foundational concept for understanding confinement in quantum dots or quantum wells, which are vital in modern optoelectronics and information processing.
*   **Hydrogen Atom:** Solving the TISE for the potential of a proton and an electron beautifully explains the spectral lines of hydrogen, a triumph of quantum mechanics.
*   **Quantum Harmonic Oscillator:** This model is incredibly versatile, used to describe vibrations in molecules and even modes of excitation in solids.

**Connection to Textbooks:** You'll find detailed derivations and examples of the TISE in chapters discussing atomic structure and quantum phenomena in books like Beiser's "Concepts of Modern Physics" and Avadhanulu et al.'s "A Textbook of Engineering Physics." Streetman and Banerjee's "Solid State Electronic Devices" uses these concepts to explain electron behavior in semiconductors.

**Connection to Course Outcomes:** The TISE is paramount for **CO2**. The solutions to the TISE give us quantized energy levels, which are the basis for understanding the behavior of electrons in atoms and solids. This directly impacts **CO3** (Semiconductor Physics) because the energy band structure of semiconductors arises from solving the TISE for a large number of atoms. For instance, the forbidden energy gaps and allowed energy bands that dictate conductivity are direct consequences of the quantum mechanical solutions.

### 5. Key Takeaways and Exam Focus

Let's summarize the most important points and what to watch out for in exams:

*   **TDSE vs. TISE:** Know when to use which. TDSE describes the *evolution* of any quantum system, while TISE applies to systems with *time-independent potentials* and describes their *stationary states* and quantized energies.
*   **The Hamiltonian ($\hat{H}$):** This is the energy operator. Always remember its form: $\hat{H} = -\frac{\hbar^2}{2m} \nabla^2 + V(\mathbf{r}, t)$. For TISE, $V(\mathbf{r}, t) = V(\mathbf{r})$.
*   **Wave Function ($\Psi$ or $\psi$):** It's the complete description. $|\Psi|^2$ is the probability density.
*   **Quantization:** The TISE, when solved for bound systems, naturally leads to discrete, quantized energy levels. This is a major departure from classical physics.
*   **Stationary States:** Understand what they are and why the probability density is time-independent.

**Exam Tip:** Often, problems will ask you to derive the TISE from the TDSE for a time-independent potential. Make sure you can perform that separation of variables step clearly. Also, be prepared to discuss the physical meaning of the wave function and its relation to probability. Understanding the analogy between classical energy $E = \frac{p^2}{2m} + V$ and the operator equation $\hat{H}\psi = E\psi$ is also a good conceptual hook.

### 6. Sample Questions with Answers

Let's test your understanding with a couple of questions.

**Question 1 (Conceptual):**
What is the physical significance of the wave function $\Psi(\mathbf{r}, t)$ in quantum mechanics, and how does its square relate to observable quantities?

**Answer 1:**
The wave function $\Psi(\mathbf{r}, t)$ is the fundamental mathematical description of the state of a quantum mechanical system. It contains all the information that can be known about the system. It is not directly observable itself, but its square, $|\Psi(\mathbf{r}, t)|^2$, represents the probability density of finding the particle at position $\mathbf{r}$ at time $t$. Therefore, $|\Psi(\mathbf{r}, t)|^2 dV$ gives the probability of finding the particle within a small volume element $dV$ around position $\mathbf{r}$ at time $t$. This probabilistic interpretation is a core concept of quantum mechanics, aligning with **CO2**.

**Question 2 (Derivation/Conceptual):**
Derive the Time-Independent Schrödinger Equation from the Time-Dependent Schrödinger Equation, assuming the potential energy $V$ is independent of time. Explain the meaning of the term $E$ in the resulting equation.

**Answer 2:**
We start with the Time-Dependent Schrödinger Equation (TDSE):
$$i\hbar \frac{\partial}{\partial t} \Psi(\mathbf{r}, t) = \hat{H} \Psi(\mathbf{r}, t)$$
Given that the potential energy $V(\mathbf{r}, t) = V(\mathbf{r})$ (time-independent), the Hamiltonian operator is also time-independent: $\hat{H} = -\frac{\hbar^2}{2m} \nabla^2 + V(\mathbf{r})$.

We use the method of separation of variables. Assume the wave function can be written as a product of a spatial part and a temporal part:
$\Psi(\mathbf{r}, t) = \psi(\mathbf{r}) \phi(t)$

Substituting this into the TDSE:
$i\hbar \frac{\partial}{\partial t} (\psi(\mathbf{r}) \phi(t)) = \left(-\frac{\hbar^2}{2m} \nabla^2 + V(\mathbf{r})\right) (\psi(\mathbf{r}) \phi(t))$

Since $\psi(\mathbf{r})$ is independent of $t$, and $\nabla^2$ is independent of $t$:
$i\hbar \psi(\mathbf{r}) \frac{d\phi(t)}{dt} = \phi(t) \left(-\frac{\hbar^2}{2m} \nabla^2 \psi(\mathbf{r}) + V(\mathbf{r}) \psi(\mathbf{r})\right)$

Divide both sides by $\psi(\mathbf{r})\phi(t)$:
$i\hbar \frac{1}{\phi(t)} \frac{d\phi(t)}{dt} = \frac{1}{\psi(\mathbf{r})} \left(-\frac{\hbar^2}{2m} \nabla^2 \psi(\mathbf{r}) + V(\mathbf{r}) \psi(\mathbf{r})\right)$

The left side depends only on $t$, and the right side depends only on $\mathbf{r}$. For these to be equal for all $\mathbf{r}$ and $t$, both sides must be equal to a constant, which we call $E$.

From the left side, we get the temporal equation:
$i\hbar \frac{d\phi(t)}{dt} = E \phi(t) \implies \phi(t) = e^{-iEt/\hbar}$

From the right side, we get the spatial equation, which is the Time-Independent Schrödinger Equation (TISE):
$\frac{1}{\psi(\mathbf{r})} \left(-\frac{\hbar^2}{2m} \nabla^2 \psi(\mathbf{r}) + V(\mathbf{r}) \psi(\mathbf{r})\right) = E$
$\left(-\frac{\hbar^2}{2m} \nabla^2 + V(\mathbf{r})\right) \psi(\mathbf{r}) = E \psi(\mathbf{r})$

The term $E$ in the TISE represents the **total energy of the system**. When the potential is time-independent, the solutions $\psi(\mathbf{r})$ correspond to **stationary states** with definite, quantized energies $E$. These are the allowed energy eigenvalues of the system. This is crucial for understanding energy levels in atoms and solids, directly impacting **CO2** and **CO3**.

---

I hope this detailed breakdown has been helpful! Understanding these equations is fundamental to everything we'll cover in this course and beyond in information science. Keep these concepts fresh, and don't hesitate to ask questions. Happy studying!
