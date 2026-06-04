---
title: "Formulation of time dependent and time independent Schrodinger equations"
subject: "PHYSICS FOR PHYSICAL SCIENCE AND LIFE SCIENCE"
module: "Module 3: Quantum Mechanics"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1edefeb4799d95e835c0"
status: "completed"
scrapedAt: "2026-05-20T17:40:07.957Z"
---
# Module 3: Quantum Mechanics - Formulation of Time-Dependent and Time-Independent Schrödinger Equations

Welcome, everyone! In this module, we're diving into the fascinating world of Quantum Mechanics, the theory that governs the behavior of matter and energy at the atomic and subatomic levels. This is where things get *really* interesting, and it's fundamental to understanding why materials behave the way they do, why lasers work, and so much more. Our focus today is on the foundational equations of quantum mechanics: the Schrödinger equations.

You might be wondering, "Why Schrödinger? What's so special about these equations?" Well, just like Newton's laws of motion describe how macroscopic objects move, Schrödinger's equations describe the "motion" or evolution of quantum systems – things like electrons in atoms, or molecules. They are the absolute bedrock of quantum mechanics, and understanding their formulation is key to unlocking the secrets of the microscopic world. This directly ties into **Course Outcome 3 (CO3)**, which is about explaining the behavior of matter at the atomic and subatomic level through quantum mechanics principles.

## The Dawn of Quantum Mechanics: Wave-Particle Duality

Before we get to the equations themselves, we need to recall a crucial concept that paved the way for them: **wave-particle duality**. Remember de Broglie's hypothesis? He suggested that if light, which we traditionally think of as a wave, can also behave like a particle (photons), then perhaps particles like electrons should also exhibit wave-like properties. This was a radical idea, and it's the very foundation upon which Schrödinger built his theory.

Think about it: if an electron, which we usually picture as a tiny ball, also behaves like a wave, then we can't describe its position and momentum with the certainty we do with a billiard ball. Instead, we need a way to describe its *probability* of being in a certain place or having a certain momentum. This is where the **wave function**, often denoted by the Greek letter psi ($\Psi$), comes in.

### The Wave Function ($\Psi$): The Heart of Quantum Mechanics

The wave function $\Psi$ is not something we can directly observe or measure. It's a mathematical construct, a complex-valued function that contains *all* the information about a quantum system. What's crucial is its **square**, $|\Psi|^2$. The square of the magnitude of the wave function at a particular point in space and time gives us the **probability density** of finding the particle at that point and time.

Imagine you're looking for your keys. Classically, you know exactly where they are. Quantum mechanically, with the wave function, you'd know the probability of finding your keys in your living room, your kitchen, or under the sofa. $|\Psi|^2$ would tell you the "likelihood" of finding them in each place. This probabilistic nature is one of the most profound departures from classical physics and is central to **CO3**.

## Formulating the Time-Dependent Schrödinger Equation (TDSE)

Now, let's talk about evolution. How does this wave function $\Psi$ change over time? This is what the Time-Dependent Schrödinger Equation (TDSE) tells us. It's essentially the quantum mechanical equivalent of Newton's second law ($F=ma$) for waves.

We can draw an analogy here from classical wave mechanics. For a free particle, its wave motion can be described by an equation that relates its energy and momentum to its wave properties (frequency and wavelength). De Broglie's relations are key:

*   **Energy ($E$) and frequency ($\nu$):** $E = h\nu$, where $h$ is Planck's constant.
*   **Momentum ($p$) and wavelength ($\lambda$):** $p = h/\lambda$.

We also know the wave relation $v = \nu\lambda$, where $v$ is the wave speed.

Let's consider a free particle with mass $m$. Its total energy $E$ is the sum of its kinetic energy ($\frac{p^2}{2m}$) and its potential energy ($V$). For a free particle, $V=0$, so $E = \frac{p^2}{2m}$.

Now, let's translate these classical energy-momentum relations into quantum mechanical operators acting on the wave function $\Psi$. This is a crucial step, as taught in texts like Avadhanulu, Kshirsagar & Murthy.

*   **Energy Operator:** In quantum mechanics, the energy of a system is represented by the **Hamiltonian operator**, denoted by $\hat{H}$. For a single particle in a potential $V(x,t)$, the Hamiltonian is $\hat{H} = \frac{\hat{p}^2}{2m} + V(x,t)$.
*   **Momentum Operator:** The momentum operator in one dimension is $\hat{p} = -i\hbar \frac{\partial}{\partial x}$, where $\hbar = h/(2\pi)$ is the reduced Planck's constant. Notice the imaginary unit $i$ – this is why the wave function is complex!

If we apply the de Broglie relation $E = h\nu$ to the wave function $\Psi(x,t)$, we can relate the time derivative to energy. A simple plane wave looks like $\Psi(x,t) = Ae^{i(kx - \omega t)}$, where $\omega = 2\pi\nu$.

Taking the time derivative:
$\frac{\partial \Psi}{\partial t} = \frac{\partial}{\partial t} (Ae^{i(kx - \omega t)}) = -i\omega A e^{i(kx - \omega t)} = -i\omega \Psi$.
From $E = h\nu$, we have $\omega = E/ \hbar$ (since $\hbar = h/2\pi$).
So, $\frac{\partial \Psi}{\partial t} = -i \frac{E}{\hbar} \Psi$, which rearranges to $E \Psi = i\hbar \frac{\partial \Psi}{\partial t}$.
This gives us the **Energy Operator**: $\hat{E} \Psi = i\hbar \frac{\partial \Psi}{\partial t}$.

Similarly, for the momentum operator, consider $\Psi(x,t) = Ae^{i(kx - \omega t)}$.
$\frac{\partial \Psi}{\partial x} = \frac{\partial}{\partial x} (Ae^{i(kx - \omega t)}) = ik A e^{i(kx - \omega t)} = ik \Psi$.
From de Broglie's relation $p = h/\lambda$, we have $k = 2\pi/\lambda = p/\hbar$.
So, $\frac{\partial \Psi}{\partial x} = i \frac{p}{\hbar} \Psi$, which rearranges to $p \Psi = -i\hbar \frac{\partial \Psi}{\partial x}$.
This confirms our **Momentum Operator**: $\hat{p} \Psi = -i\hbar \frac{\partial}{\partial x}$.

Now, let's square the momentum operator:
$\hat{p}^2 \Psi = \hat{p}(\hat{p} \Psi) = \hat{p}(-i\hbar \frac{\partial \Psi}{\partial x}) = -i\hbar \hat{p} (\frac{\partial \Psi}{\partial x}) = -i\hbar (-i\hbar \frac{\partial}{\partial x}(\frac{\partial \Psi}{\partial x})) = (-i\hbar)^2 \frac{\partial^2 \Psi}{\partial x^2} = -\hbar^2 \frac{\partial^2 \Psi}{\partial x^2}$.
So, $\frac{\hat{p}^2}{2m} \Psi = -\frac{\hbar^2}{2m} \frac{\partial^2 \Psi}{\partial x^2}$.

Remember our classical energy relation for a free particle: $E = \frac{p^2}{2m}$.
In quantum mechanics, this becomes:
$E \Psi = \frac{\hat{p}^2}{2m} \Psi$.
Substituting the operator forms:
$i\hbar \frac{\partial \Psi}{\partial t} = -\frac{\hbar^2}{2m} \frac{\partial^2 \Psi}{\partial x^2}$.

This is the **Time-Dependent Schrödinger Equation in one dimension for a free particle**.

Now, let's incorporate the potential energy $V(x,t)$. The total energy operator (Hamiltonian) is $\hat{H} = \frac{\hat{p}^2}{2m} + V(x,t)$.
So, the **Time-Dependent Schrödinger Equation (TDSE)** in one dimension is:

$$ i\hbar \frac{\partial \Psi(x,t)}{\partial t} = \left( -\frac{\hbar^2}{2m} \frac{\partial^2}{\partial x^2} + V(x,t) \right) \Psi(x,t) $$

This is a cornerstone of quantum mechanics. It tells us how the wave function of a system evolves with time under the influence of a potential. This equation is crucial for understanding how quantum states change, for instance, how an electron's wave packet spreads out over time or how it interacts with changing electromagnetic fields. This is vital for **CO3**.

**Think of it this way:** If the TDSE is the overall rulebook for how quantum systems change, then the Time-Independent Schrödinger Equation (TISE) is like a snapshot of a system when it's in a stable state, not changing its energy.

## Formulating the Time-Independent Schrödinger Equation (TISE)

Many quantum systems, like an electron bound to an atom, exist in states with definite, constant energy. In such cases, the potential energy $V$ does not depend on time, i.e., $V = V(x)$. When the potential is time-independent, the wave function $\Psi(x,t)$ can be separated into a spatial part and a temporal part. This is the method of **separation of variables**.

Let's assume our wave function can be written as a product of a spatial function and a temporal function:
$\Psi(x,t) = \psi(x) \phi(t)$.

Now, substitute this into the TDSE:
$i\hbar \frac{\partial}{\partial t} [\psi(x) \phi(t)] = \left( -\frac{\hbar^2}{2m} \frac{\partial^2}{\partial x^2} + V(x) \right) [\psi(x) \phi(t)]$

Since $\psi(x)$ is independent of $t$, and $V(x)$ is independent of $t$:
$i\hbar \psi(x) \frac{d\phi(t)}{dt} = \phi(t) \left( -\frac{\hbar^2}{2m} \frac{d^2\psi(x)}{dx^2} + V(x)\psi(x) \right)$

Now, to separate the variables, we divide both sides by $\psi(x)\phi(t)$:
$\frac{i\hbar}{\phi(t)} \frac{d\phi(t)}{dt} = \frac{1}{\psi(x)} \left( -\frac{\hbar^2}{2m} \frac{d^2\psi(x)}{dx^2} + V(x)\psi(x) \right)$

Look at this beautiful equation! The left side depends *only* on time ($t$), and the right side depends *only* on position ($x$). The only way for these two to be equal for all $x$ and $t$ is if both sides are equal to a constant. Let's call this constant $E$. This $E$ represents the **total energy** of the system. This is a very important insight from Professor Avadhanulu and others.

So, we have two separate equations:

**1. The Temporal Equation:**
$\frac{i\hbar}{\phi(t)} \frac{d\phi(t)}{dt} = E$
$i\hbar \frac{d\phi(t)}{dt} = E \phi(t)$
$\frac{d\phi}{\phi} = \frac{E}{i\hbar} dt = -\frac{iE}{\hbar} dt$
Integrating both sides:
$\int \frac{d\phi}{\phi} = \int -\frac{iE}{\hbar} dt$
$\ln(\phi(t)) = -\frac{iE}{\hbar} t + C$
$\phi(t) = e^{-\frac{iE}{\hbar} t + C} = e^C e^{-\frac{iE}{\hbar} t}$
Letting $A = e^C$ be a normalization constant, we get:
$\phi(t) = A e^{-\frac{iE}{\hbar} t}$
This shows that the temporal part of the wave function oscillates with a frequency proportional to the energy $E$, which is consistent with $E=h\nu$.

**2. The Spatial Equation (The Time-Independent Schrödinger Equation - TISE):**
$\frac{1}{\psi(x)} \left( -\frac{\hbar^2}{2m} \frac{d^2\psi(x)}{dx^2} + V(x)\psi(x) \right) = E$
Multiply by $\psi(x)$:
$-\frac{\hbar^2}{2m} \frac{d^2\psi(x)}{dx^2} + V(x)\psi(x) = E\psi(x)$

This is the **Time-Independent Schrödinger Equation (TISE) in one dimension**. It's a second-order linear differential equation.

We can rewrite this using the Hamiltonian operator we introduced earlier:
$\left( -\frac{\hbar^2}{2m} \frac{d^2}{dx^2} + V(x) \right) \psi(x) = E \psi(x)$
Or simply:
$\hat{H}\psi(x) = E\psi(x)$

This is a fundamental **eigenvalue equation**. $\hat{H}$ is the operator, $\psi(x)$ is the **eigenfunction** (or eigenstate), and $E$ is the corresponding **eigenvalue** (the allowed energy of the system).

**Why is this so important?** The TISE allows us to find the *allowed energy levels* of a quantum system. For example, it explains why electrons in atoms can only occupy specific energy levels (quantization of energy), leading to the discrete spectral lines observed in atomic emission and absorption spectra. This is a direct application that helps understand atomic structure, a key aspect of **CO3**. It's like finding the resonant frequencies of a musical instrument; only certain frequencies (energies) are allowed.

## Connecting with Course Outcomes

Let's explicitly link these equations to our Course Outcomes:

*   **CO3: Explain the behaviour of matter in the atomic and subatomic level through the principles of quantum mechanics.**
    *   The wave function ($\Psi$) and its probability interpretation ($|\Psi|^2$) are core quantum mechanical principles.
    *   The TDSE describes how these probabilistic wave functions evolve over time, essential for understanding dynamic quantum processes.
    *   The TISE, by yielding quantized energy levels, directly explains phenomena like atomic structure and spectral lines, which are classic examples of atomic and subatomic behavior. For instance, solving the TISE for the hydrogen atom is a major triumph of quantum mechanics.

*   **CO1: Explain the basic principles and properties of laser and optic fibers.**
    *   While not directly about lasers or fibers, the quantum mechanical principles underpinning these technologies are derived from these equations. Lasers, for example, rely on electrons transitioning between quantized energy levels in atoms or molecules, which are determined by solving the TISE. The interaction of light with matter, which is crucial for both lasers and fiber optics, is described by quantum mechanics.

*   **CO5: Apply basic knowledge of principles and theories in physics to conduct experiments.**
    *   Understanding the Schrödinger equations is fundamental to designing and interpreting quantum physics experiments, such as those involving atomic spectroscopy or electron diffraction. The predicted energy levels and wave functions guide experimental setup and analysis.

## Key Takeaways and Exam Focus

*   **Wave-Particle Duality:** The starting point for quantum mechanics. Remember de Broglie.
*   **Wave Function ($\Psi$):** Contains all information. $|\Psi|^2$ is probability density.
*   **TDSE:** $i\hbar \frac{\partial \Psi}{\partial t} = \hat{H} \Psi$. Describes how $\Psi$ changes with time. Crucial for understanding dynamics.
*   **TISE:** $\hat{H}\psi = E\psi$. For time-independent potentials. It's an eigenvalue equation that yields allowed energy levels and stationary states.
*   **Operators:** Energy ($\hat{H}$) and Momentum ($\hat{p}$) are operators that act on the wave function.
*   **Quantization:** The TISE naturally leads to quantized energy levels, a hallmark of quantum mechanics. This is a very common exam topic.

**Common Pitfalls:**
*   Confusing $\Psi$ with $|\Psi|^2$. Remember, $\Psi$ is complex, $|\Psi|^2$ is real and represents probability.
*   Forgetting the $\hbar$ (reduced Planck's constant) in the equations. It's always there!
*   Thinking of the wave function as a physical wave in space like a water wave. It's a wave of *probability*.

Remember, these equations are the language of the quantum world. Mastering their formulation is your first big step into understanding atomic and molecular behavior, which as we've seen, connects to several of our course objectives.

---

## Sample Questions and Answers

**1. Conceptual Question:**
What is the physical significance of the square of the magnitude of the wave function, $|\Psi(x,t)|^2$?

**Answer:**
$|\Psi(x,t)|^2$ represents the **probability density** of finding the particle at position $x$ at time $t$. It does not tell you the exact location, but rather the likelihood of finding the particle in a small region around $x$. This is a fundamental departure from classical mechanics.

**2. Conceptual Question:**
Why is the Time-Independent Schrödinger Equation called an eigenvalue equation?

**Answer:**
The Time-Independent Schrödinger Equation is written as $\hat{H}\psi(x) = E\psi(x)$. This is the standard form of an eigenvalue equation, where $\hat{H}$ is an operator, $\psi(x)$ is the eigenfunction (or eigenvector in more general linear algebra terms), and $E$ is the eigenvalue. In quantum mechanics, the eigenvalues ($E$) represent the possible, quantized values of energy that the system can possess, and the eigenfunctions ($\psi(x)$) represent the corresponding stationary states of the system.

**3. Exam-Oriented Question:**
Derive the Time-Dependent Schrödinger Equation in one dimension, starting from de Broglie's relations and considering the total energy of a particle.

**Answer:**
**Step 1: De Broglie Relations:**
*   Energy ($E$) and frequency ($\nu$): $E = h\nu = 2\pi\hbar\nu$.
*   Momentum ($p$) and wave number ($k$): $p = h/\lambda = 2\pi\hbar/\lambda$.

**Step 2: Wave Function Representation:**
A general plane wave can be written as $\Psi(x,t) = Ae^{i(kx - \omega t)}$, where $\omega = 2\pi\nu$.

**Step 3: Relating Wave Function to Energy:**
Take the time derivative of $\Psi(x,t)$:
$\frac{\partial \Psi}{\partial t} = \frac{\partial}{\partial t}(Ae^{i(kx - \omega t)}) = -i\omega Ae^{i(kx - \omega t)} = -i\omega \Psi$
Since $E = 2\pi\hbar\nu = \hbar\omega$, we have $\omega = E/\hbar$.
Substituting this, we get $\frac{\partial \Psi}{\partial t} = -i\frac{E}{\hbar} \Psi$.
Rearranging gives the energy operator relation: $E\Psi = i\hbar \frac{\partial \Psi}{\partial t}$.

**Step 4: Relating Wave Function to Momentum:**
Take the spatial derivative of $\Psi(x,t)$:
$\frac{\partial \Psi}{\partial x} = \frac{\partial}{\partial x}(Ae^{i(kx - \omega t)}) = ikAe^{i(kx - \omega t)} = ik \Psi$
Since $p = 2\pi\hbar/\lambda$ and $k = 2\pi/\lambda$, we have $k = p/\hbar$.
Substituting this, we get $\frac{\partial \Psi}{\partial x} = i\frac{p}{\hbar} \Psi$.
Rearranging gives the momentum operator relation: $p\Psi = -i\hbar \frac{\partial \Psi}{\partial x}$.

**Step 5: Squaring the Momentum Operator:**
$\hat{p}^2 \Psi = (-i\hbar \frac{\partial}{\partial x})(-i\hbar \frac{\partial \Psi}{\partial x}) = (-i\hbar)^2 \frac{\partial^2 \Psi}{\partial x^2} = -\hbar^2 \frac{\partial^2 \Psi}{\partial x^2}$.
Thus, the kinetic energy operator is: $\frac{\hat{p}^2}{2m} \Psi = -\frac{\hbar^2}{2m} \frac{\partial^2 \Psi}{\partial x^2}$.

**Step 6: Total Energy Relation:**
The total energy $E$ of a particle in a potential $V(x,t)$ is $E = \frac{p^2}{2m} + V(x,t)$.
In quantum mechanics, this becomes the operator equation: $\hat{H}\Psi = E\Psi$, where $\hat{H} = \frac{\hat{p}^2}{2m} + V(x,t)$.
Substituting the operator forms:
$\left( -\frac{\hbar^2}{2m} \frac{\partial^2}{\partial x^2} + V(x,t) \right) \Psi(x,t) = i\hbar \frac{\partial \Psi(x,t)}{\partial t}$.
This is the **Time-Dependent Schrödinger Equation in one dimension**.

**4. Exam-Oriented Question:**
Consider a particle in a 1D box of length $L$ (where $V(x) = 0$ for $0 < x < L$ and $V(x) = \infty$ otherwise). What are the allowed energy levels according to the Time-Independent Schrödinger Equation?

**Answer:**
The TISE inside the box is:
$-\frac{\hbar^2}{2m} \frac{d^2\psi(x)}{dx^2} = E\psi(x)$
This is a standard second-order differential equation, whose general solution is $\psi(x) = A\sin(kx) + B\cos(kx)$, where $k = \sqrt{2mE/\hbar^2}$.

Applying boundary conditions:
*   $\psi(0) = 0$: $A\sin(0) + B\cos(0) = 0 \implies B(1) = 0 \implies B=0$. So, $\psi(x) = A\sin(kx)$.
*   $\psi(L) = 0$: $A\sin(kL) = 0$. Since $A$ cannot be zero (otherwise $\psi(x)=0$ everywhere, meaning no particle), we must have $\sin(kL) = 0$.
This implies $kL = n\pi$, where $n = 1, 2, 3, ...$ (n=0 would mean k=0, so $\psi(x)=0$).
So, $k = \frac{n\pi}{L}$.

Now, substitute $k$ back into the relation for energy:
$k^2 = \frac{2mE}{\hbar^2} \implies E = \frac{\hbar^2 k^2}{2m}$
$E_n = \frac{\hbar^2}{2m} \left(\frac{n\pi}{L}\right)^2 = \frac{n^2 \pi^2 \hbar^2}{2mL^2}$
Since $\hbar = h/2\pi$, $\hbar^2 = h^2/4\pi^2$:
$E_n = \frac{n^2 \pi^2}{2mL^2} \frac{h^2}{4\pi^2} = \frac{n^2 h^2}{8mL^2}$

Thus, the allowed energy levels for a particle in a 1D box are $E_n = \frac{n^2 h^2}{8mL^2}$, where $n$ is a positive integer. This demonstrates energy quantization, a direct consequence of the TISE.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
