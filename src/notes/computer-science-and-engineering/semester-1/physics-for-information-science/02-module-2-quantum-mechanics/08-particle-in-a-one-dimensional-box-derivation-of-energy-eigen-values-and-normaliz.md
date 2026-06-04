---
title: "Particle in a one- dimensional box - Derivation of energy eigen values and normalized wave function"
subject: "PHYSICS FOR INFORMATION SCIENCE"
module: "Module 2: Quantum Mechanics"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6f58474a0b135b5d7a"
status: "completed"
scrapedAt: "2026-05-20T16:41:19.689Z"
---
Alright everyone, settle in! Welcome back to Physics for Information Science. Today, we're diving headfirst into the fascinating world of Quantum Mechanics, a subject that is absolutely crucial for understanding how modern technology, especially in information science, works at its most fundamental level. Remember our Course Outcome 2? "Explain the behaviour of matter in the atomic and subatomic level through the principles of quantum mechanics." Well, that's exactly what we're going to do today by exploring a foundational quantum mechanical model: **The Particle in a One-Dimensional Box**.

Think about it: at the heart of transistors, lasers, and even the way electrons move in materials, there's quantum mechanics at play. This simple model, the particle in a box, is our gateway to understanding how particles, like electrons, are confined and how their energy is quantized. This understanding directly relates to Course Outcome 3, "Apply the fundamentals of Semiconductor Physics in engineering," because the behavior of electrons in materials is often modeled by considering their confinement and energy levels.

Let's get started!

## Module 2: Quantum Mechanics - The Particle in a One-Dimensional Box

### 1. Introduction: Why the "Particle in a Box"?

So, why do we start with such a seemingly abstract concept as a "particle in a box"? It's a model designed to simplify a very complex reality. Imagine a tiny particle, like an electron, that is trapped within a region of space. This region has boundaries. What happens to this particle? In classical physics, it could have any amount of energy. But in quantum mechanics, things are dramatically different.

The "one-dimensional" part just means we're simplifying the problem by considering motion along a single straight line, like an electron trapped in a thin wire. The "box" represents the region where the particle is free to move, and outside this box, it's absolutely confined – it cannot exist. Think of it like a billiard ball confined to the surface of the billiard table, but with an invisible, impenetrable barrier all around it.

This model is foundational because it allows us to derive the **energy eigenvalues** (the possible energy values a quantum system can have) and the **normalized wave function** (which describes the probability of finding the particle at a certain point). These concepts are absolutely central to quantum mechanics and, by extension, to understanding the behavior of electrons in semiconductors, which is vital for Course Outcome 3.

### 2. Setting Up the Problem: The Potential Energy Function

To analyze any quantum system, we first need to define its **potential energy function**, usually denoted as $V(x)$. This function tells us the energy of the particle at different positions. For our particle in a one-dimensional box of length $L$, we define the potential as follows:

*   **Inside the box (0 < x < L):** The particle is free to move. This means there are no forces acting on it within this region. In terms of potential energy, this translates to a **constant potential energy**. For simplicity, we set this constant to zero: $V(x) = 0$. This is a common and convenient choice, as it simplifies our mathematical calculations.
*   **Outside the box (x ≤ 0 and x ≥ L):** The particle is completely confined and cannot escape. This implies an infinitely strong repulsive force, meaning the potential energy is infinitely large: $V(x) = \infty$.

So, our potential energy function looks like this:

$V(x) = \begin{cases} 0 & \text{for } 0 < x < L \\ \infty & \text{for } x \le 0 \text{ and } x \ge L \end{cases}$

This is a very important setup. The infinite potential walls ensure our particle stays strictly within the boundaries of the box. You'll find this concept of potential barriers and confinement discussed in various contexts, from electron confinement in quantum dots (relevant to semiconductor physics) to nuclear models.

### 3. The Schrödinger Equation: Our Quantum Compass

Now that we've defined our system using the potential energy, we need the fundamental equation that governs the behavior of quantum particles: the **time-independent Schrödinger equation**. This is our primary tool. For a particle of mass $m$ in one dimension, it's written as:

$$ \frac{-\hbar^2}{2m} \frac{d^2\psi(x)}{dx^2} + V(x)\psi(x) = E\psi(x) $$

Here:
*   $\hbar$ (h-bar) is the reduced Planck constant ($\hbar = h / 2\pi$). It's a fundamental constant of nature that governs the scale of quantum phenomena.
*   $m$ is the mass of the particle (e.g., an electron).
*   $\psi(x)$ is the **wave function**. This is not a physical wave like water waves, but rather a mathematical function that contains all the probabilistic information about the particle. The square of its magnitude, $|\psi(x)|^2$, gives the probability density of finding the particle at position $x$.
*   $V(x)$ is the potential energy function we just defined.
*   $E$ is the **total energy** of the particle. This is what we're ultimately trying to find – the allowed energy values.

This equation is the bedrock of quantum mechanics. It’s analogous to Newton's laws in classical mechanics – it tells us how the "state" of our quantum system evolves.

### 4. Solving the Schrödinger Equation: The Journey Begins

Let's apply the Schrödinger equation to our specific case of the particle in a box. We need to solve it for the two regions: inside and outside the box.

#### 4.1. Outside the Box (Region I: $x \le 0$ and Region III: $x \ge L$)

In these regions, $V(x) = \infty$. The Schrödinger equation becomes:

$$ \frac{-\hbar^2}{2m} \frac{d^2\psi(x)}{dx^2} + \infty \cdot \psi(x) = E\psi(x) $$

For this equation to hold with a finite energy $E$, the only possibility is that the wave function $\psi(x)$ must be zero in these regions. If $\psi(x)$ were non-zero, the term $\infty \cdot \psi(x)$ would be infinite, which would require $E$ to be infinite, which is not physically meaningful for a bound particle.

So, we have:
*   $\psi(x) = 0$ for $x \le 0$
*   $\psi(x) = 0$ for $x \ge L$

This is a direct consequence of the infinite potential walls. It makes perfect sense – the particle cannot be found where the potential is infinite.

#### 4.2. Inside the Box (Region II: $0 < x < L$)

Now for the interesting part! Inside the box, $V(x) = 0$. The Schrödinger equation simplifies to:

$$ \frac{-\hbar^2}{2m} \frac{d^2\psi(x)}{dx^2} = E\psi(x) $$

Let's rearrange this to make it look more familiar:

$$ \frac{d^2\psi(x)}{dx^2} = -\frac{2mE}{\hbar^2} \psi(x) $$

We know that $E$ must be positive for a free particle, so $2mE/\hbar^2$ is a positive constant. Let's define a new constant, $k^2$, where:

$$ k^2 = \frac{2mE}{\hbar^2} $$

So the equation becomes a standard second-order linear differential equation:

$$ \frac{d^2\psi(x)}{dx^2} = -k^2 \psi(x) $$

The general solution to this equation is well-known from differential equations:

$$ \psi(x) = A \sin(kx) + B \cos(kx) $$

Here, $A$ and $B$ are constants that we will determine using boundary conditions. This is our candidate wave function inside the box.

### 5. Applying Boundary Conditions: Unlocking the Secrets

Boundary conditions are crucial in quantum mechanics, just like they are in classical wave phenomena (think about a guitar string fixed at both ends). They are the physical constraints that limit the possible solutions. For our particle in a box, the wave function must be continuous. Since $\psi(x) = 0$ outside the box, it must also be zero at the boundaries.

**Boundary Condition 1: At x = 0**

We must have $\psi(0) = 0$. Let's plug this into our general solution:

$$ \psi(0) = A \sin(k \cdot 0) + B \cos(k \cdot 0) $$
$$ 0 = A \sin(0) + B \cos(0) $$
$$ 0 = A \cdot 0 + B \cdot 1 $$
$$ 0 = B $$

This tells us that the constant $B$ must be zero. Our wave function simplifies to:

$$ \psi(x) = A \sin(kx) $$

This makes sense – the $\cos(kx)$ term would give a non-zero value at $x=0$, which is not allowed.

**Boundary Condition 2: At x = L**

We must have $\psi(L) = 0$. Let's use this with our simplified wave function:

$$ \psi(L) = A \sin(kL) = 0 $$

Now, for this equation to be true, there are two possibilities: either $A = 0$ or $\sin(kL) = 0$.
If $A = 0$, then $\psi(x) = 0$ everywhere, which means there's no particle in the box – this is the trivial, non-physical solution.
Therefore, we must have $\sin(kL) = 0$.

The sine function is zero at integer multiples of $\pi$. So, we can write:

$$ kL = n\pi $$

where $n$ is an integer.
This condition is *extremely* important! It tells us that $k$ cannot take any arbitrary value, but is restricted to specific values.

$$ k_n = \frac{n\pi}{L} $$

Remember our definition of $k^2$: $k^2 = \frac{2mE}{\hbar^2}$. Substituting the allowed values of $k_n$:

$$ \left(\frac{n\pi}{L}\right)^2 = \frac{2mE_n}{\hbar^2} $$

Now we can solve for the energy levels, $E_n$:

$$ E_n = \frac{n^2\pi^2\hbar^2}{2mL^2} $$

These are the **energy eigenvalues** – the only possible energy values the particle can have!

#### 6. The Energy Eigenvalues: Quantized Energy Levels

Isn't that beautiful? The particle in a box is not allowed to have *any* energy. Its energy is **quantized**, meaning it can only exist at discrete energy levels determined by the integer $n$.

Let's analyze the allowed values for $n$:
*   If $n = 0$, then $k_0 = 0$, and $E_0 = 0$. This would mean $\psi(x) = A \sin(0) = 0$, which is the trivial solution where the particle doesn't exist. So, $n=0$ is not a physically valid state.
*   If $n = 1$, $E_1 = \frac{\pi^2\hbar^2}{2mL^2}$. This is the **ground state energy** – the lowest possible energy the particle can have.
*   If $n = 2$, $E_2 = \frac{4\pi^2\hbar^2}{2mL^2} = 4E_1$.
*   If $n = 3$, $E_3 = \frac{9\pi^2\hbar^2}{2mL^2} = 9E_1$.

And so on. The energy levels are proportional to $n^2$.

$$ E_n = n^2 \frac{\pi^2\hbar^2}{2mL^2}, \quad \text{where } n = 1, 2, 3, \dots $$

This quantization of energy is a core concept in quantum mechanics and is directly related to Course Outcome 2. It's why atoms have specific spectral lines and why materials behave as they do. In semiconductors (Course Outcome 3), the energy bands arise from electrons being confined in potentials created by the crystal lattice, and this particle-in-a-box model gives us a taste of that.

**Common Exam Point:** Students often forget that $n$ cannot be zero. Make sure to remember that $n$ starts from 1 for physically meaningful states.

### 7. The Wave Functions: Describing the Particle's State

We found that the allowed wave functions are of the form $\psi_n(x) = A \sin(k_n x)$, where $k_n = n\pi/L$. So, the wave functions for the particle in a box are:

$$ \psi_n(x) = A \sin\left(\frac{n\pi x}{L}\right), \quad \text{for } 0 < x < L $$

And $\psi_n(x) = 0$ elsewhere.

These are called **eigenfunctions**, and the corresponding energies $E_n$ are their **eigenvalues**. Together, the energy eigenvalue and its corresponding eigenfunction describe a stationary state of the system.

### 8. Normalization: Ensuring Probabilities Add Up

The constant $A$ in our wave function still needs to be determined. It's related to the **normalization** of the wave function. In quantum mechanics, the probability of finding the particle somewhere in space must be 1. Mathematically, this is expressed as:

$$ \int_{-\infty}^{\infty} |\psi(x)|^2 dx = 1 $$

Since our wave function is zero outside the box, this integral only needs to be calculated over the region $0 < x < L$:

$$ \int_{0}^{L} |\psi_n(x)|^2 dx = 1 $$

Substituting our wave function:

$$ \int_{0}^{L} \left| A \sin\left(\frac{n\pi x}{L}\right) \right|^2 dx = 1 $$
$$ A^2 \int_{0}^{L} \sin^2\left(\frac{n\pi x}{L}\right) dx = 1 $$

To solve this integral, we use the trigonometric identity: $\sin^2(\theta) = \frac{1 - \cos(2\theta)}{2}$. Let $\theta = \frac{n\pi x}{L}$.

$$ A^2 \int_{0}^{L} \frac{1 - \cos\left(\frac{2n\pi x}{L}\right)}{2} dx = 1 $$
$$ \frac{A^2}{2} \int_{0}^{L} \left( 1 - \cos\left(\frac{2n\pi x}{L}\right) \right) dx = 1 $$
$$ \frac{A^2}{2} \left[ x - \frac{L}{2n\pi} \sin\left(\frac{2n\pi x}{L}\right) \right]_0^L = 1 $$

Now, let's evaluate the expression at the limits:

At $x = L$: $L - \frac{L}{2n\pi} \sin\left(\frac{2n\pi L}{L}\right) = L - \frac{L}{2n\pi} \sin(2n\pi) = L - \frac{L}{2n\pi} \cdot 0 = L$
At $x = 0$: $0 - \frac{L}{2n\pi} \sin(0) = 0 - 0 = 0$

So the integral evaluates to $L$:

$$ \frac{A^2}{2} [L - 0] = 1 $$
$$ \frac{A^2 L}{2} = 1 $$

Solving for $A^2$:

$$ A^2 = \frac{2}{L} $$

And thus, $A = \sqrt{\frac{2}{L}}$ (we usually take the positive root for simplicity).

Therefore, the **normalized wave functions** for the particle in a one-dimensional box are:

$$ \psi_n(x) = \sqrt{\frac{2}{L}} \sin\left(\frac{n\pi x}{L}\right), \quad \text{for } 0 < x < L $$

And $\psi_n(x) = 0$ elsewhere.

**Remember this:** The normalization constant ensures that the total probability of finding the particle within the box is 1. This is fundamental to the probabilistic interpretation of quantum mechanics. The $\sin$ functions are the characteristic shapes of the wave functions for this system.

### 9. Visualizing the Wave Functions and Probability Densities

Let's take a moment to visualize these wave functions and what $|\psi_n(x)|^2$ (the probability density) looks like for a few values of $n$.

*   **n = 1 (Ground State):**
    *   $\psi_1(x) = \sqrt{\frac{2}{L}} \sin\left(\frac{\pi x}{L}\right)$
    *   This is a single half-wave, peaking in the middle of the box.
    *   $|\psi_1(x)|^2$ is a single hump, also peaking in the middle. This means the particle is *most likely* to be found in the center of the box.

*   **n = 2 (First Excited State):**
    *   $\psi_2(x) = \sqrt{\frac{2}{L}} \sin\left(\frac{2\pi x}{L}\right)$
    *   This wave function has one full wave, with a node (a point where $\psi(x)=0$) in the middle of the box.
    *   $|\psi_2(x)|^2$ has two humps, with zero probability of finding the particle in the exact center of the box. The particle is most likely to be found at $x = L/4$ and $x = 3L/4$.

*   **n = 3 (Second Excited State):**
    *   $\psi_3(x) = \sqrt{\frac{2}{L}} \sin\left(\frac{3\pi x}{L}\right)$
    *   This has one and a half waves, with nodes at $x = L/3$ and $x = 2L/3$.
    *   $|\psi_3(x)|^2$ has three humps, with zero probability at the nodes.

This behavior, with nodes appearing as energy increases, is a direct consequence of the wave nature of particles and the confinement. It’s similar to how a vibrating string fixed at both ends can only vibrate in specific modes (harmonics).

### 10. Connection to Course Outcomes

Let's explicitly tie this back to our Course Outcomes:

*   **CO2: Explain the behaviour of matter in the atomic and subatomic level through the principles of quantum mechanics.**
    *   **How this topic connects:** We've successfully derived the quantized energy levels and wave functions for a confined particle. This demonstrates that at the subatomic level, energy is not continuous but discrete, and particles are described by wave functions that dictate probabilities. This is a cornerstone of quantum mechanics.

*   **CO3: Apply the fundamentals of Semiconductor Physics in engineering.**
    *   **How this topic connects:** Semiconductor devices (like transistors, LEDs, lasers) rely on the quantum mechanical behavior of electrons within semiconductor materials. Electrons are not free to move anywhere; they are confined by the crystal lattice potential, forming energy bands. The particle-in-a-box model is a simplified analogy. For instance, in quantum well structures or quantum dots used in advanced optoelectronics, electrons are deliberately confined in very small regions, and their energy levels are highly quantized, similar to what we derived. Understanding these energy levels is critical for designing devices that emit specific wavelengths of light or control electron flow efficiently. The concept of energy quantization is directly applied here.

### 11. Summary and Key Takeaways

What should you absolutely remember from today's lecture on the particle in a one-dimensional box?

*   **The Problem:** A particle confined to a region of finite length ($L$) with infinite potential walls.
*   **The Tool:** The time-independent Schrödinger equation is used to find the particle's allowed states.
*   **The Potential:** $V(x) = 0$ inside the box $(0 < x < L)$ and $V(x) = \infty$ outside.
*   **The Solution:** The wave function inside the box is of the form $\psi(x) = A \sin(kx)$.
*   **Boundary Conditions:** The wave function must be zero at the walls ($x=0$ and $x=L$). This is what leads to quantization.
*   **Energy Eigenvalues:** The allowed energy levels are quantized and given by $E_n = \frac{n^2\pi^2\hbar^2}{2mL^2}$, where $n = 1, 2, 3, \dots$. (Crucially, $n \neq 0$).
*   **Wave Function Eigenfunctions:** The corresponding normalized wave functions are $\psi_n(x) = \sqrt{\frac{2}{L}} \sin\left(\frac{n\pi x}{L}\right)$ for $0 < x < L$.
*   **Physical Meaning:** This model illustrates energy quantization and the probabilistic nature of quantum particles, fundamental concepts for understanding atomic structure and solid-state physics.

This might seem like a simple box, but the principles we've uncovered here – quantization of energy, wave functions, boundary conditions, and normalization – are the building blocks for understanding much more complex quantum systems.

### 12. Sample Questions and Answers

Let's test your understanding with a couple of questions.

**Question 1 (Conceptual):**
Why is the energy of a particle in a one-dimensional box quantized, unlike a classical particle?

**Answer:**
In classical physics, a particle's energy is continuous. However, in quantum mechanics, particles exhibit wave-like properties. The Schrödinger equation, when applied to a confined system like the particle in a box, leads to solutions that are only valid when certain boundary conditions are met. For the particle in a box, the wave function must be zero at the infinite potential walls. This requirement restricts the possible wavelengths and therefore the possible energies of the particle, leading to discrete, quantized energy levels. The condition $kL = n\pi$, derived from $\psi(L)=0$, directly links the wave number $k$ (and thus energy) to an integer $n$, enforcing quantization.

**Question 2 (Exam-Oriented/Calculation):**
An electron (mass $m_e = 9.11 \times 10^{-31}$ kg) is confined to a one-dimensional box of length $L = 10^{-9}$ m (1 nanometer). Calculate the energy of the electron in its ground state ($n=1$) and its first excited state ($n=2$). Use $\hbar = 1.055 \times 10^{-34}$ J·s.

**Answer:**
The energy eigenvalues are given by $E_n = \frac{n^2\pi^2\hbar^2}{2mL^2}$.

Given:
*   $m = m_e = 9.11 \times 10^{-31}$ kg
*   $L = 10^{-9}$ m
*   $\hbar = 1.055 \times 10^{-34}$ J·s
*   $\pi^2 \approx 9.87$

First, let's calculate the constant part: $\frac{\pi^2\hbar^2}{2mL^2}$
$\frac{\pi^2\hbar^2}{2mL^2} = \frac{(9.87)(1.055 \times 10^{-34} \text{ J}\cdot\text{s})^2}{2(9.11 \times 10^{-31} \text{ kg})(10^{-9} \text{ m})^2}$
$= \frac{(9.87)(1.113 \times 10^{-68} \text{ J}^2\cdot\text{s}^2)}{2(9.11 \times 10^{-31} \text{ kg})(10^{-18} \text{ m}^2)}$
$= \frac{1.099 \times 10^{-67} \text{ J}^2\cdot\text{s}^2}{18.22 \times 10^{-49} \text{ kg}\cdot\text{m}^2}$
Note: J = kg·m²/s², so J·s² = kg·m². The units are consistent.
$\approx 0.0603 \times 10^{-18} \text{ J}$
$\approx 6.03 \times 10^{-20} \text{ J}$

Now, let's find the energies:

*   **Ground State (n=1):**
    $E_1 = 1^2 \times \left(\frac{\pi^2\hbar^2}{2mL^2}\right) = 1 \times 6.03 \times 10^{-20} \text{ J}$
    $E_1 \approx 6.03 \times 10^{-20} \text{ J}$

*   **First Excited State (n=2):**
    $E_2 = 2^2 \times \left(\frac{\pi^2\hbar^2}{2mL^2}\right) = 4 \times 6.03 \times 10^{-20} \text{ J}$
    $E_2 \approx 24.12 \times 10^{-20} \text{ J}$
    $E_2 \approx 2.41 \times 10^{-19} \text{ J}$

**Important Note for Exams:** Always double-check your units and calculations. Make sure you are using consistent units (SI units are generally preferred). The energy levels are typically very small, so express them in Joules or electron-volts (eV). To convert Joules to eV, divide by the elementary charge $e = 1.602 \times 10^{-19}$ C.
$E_1 \approx \frac{6.03 \times 10^{-20} \text{ J}}{1.602 \times 10^{-19} \text{ J/eV}} \approx 0.376 \text{ eV}$
$E_2 \approx \frac{2.41 \times 10^{-19} \text{ J}}{1.602 \times 10^{-19} \text{ J/eV}} \approx 1.50 \text{ eV}$

That's all for today! We've laid a crucial foundation for understanding quantum mechanics. In our next session, we'll build upon this by looking at more complex systems. Keep these concepts sharp!
