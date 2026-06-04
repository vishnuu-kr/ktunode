---
title: "Particle in a one- dimensional box - Derivation of energy eigen values and normalized wave function"
subject: "PHYSICS FOR PHYSICAL SCIENCE AND LIFE SCIENCE"
module: "Module 3: Quantum Mechanics"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1edefeb4799d95e835c1"
status: "completed"
scrapedAt: "2026-05-20T17:40:08.694Z"
---
# Module 3: Quantum Mechanics

## Topic: Particle in a One-Dimensional Box: Energy Eigenvalues and Normalized Wave Function

Welcome, everyone, to our exploration of Quantum Mechanics! This module is where we start to delve into the truly fascinating world of the very small – the realm of atoms and subatomic particles. It's a world that behaves quite differently from our everyday experience, and one of the foundational concepts we'll tackle is the **Particle in a One-Dimensional Box**. This problem, though seemingly simple, is incredibly powerful because it illustrates fundamental quantum principles that apply to many more complex systems.

As we go through this, keep in mind our Course Outcome **CO3: Explain the behaviour of matter in the atomic and subatomic level through the principles of quantum mechanics.** This topic is a direct pathway to understanding that behaviour. Think about electrons in atoms or molecules – their energy isn't continuous; it's quantized, just like we'll see for our particle in a box!

### The Problem: A Particle Confined

Imagine a tiny particle, like an electron, trapped within a region of space. For simplicity, we'll consider this to be a one-dimensional "box." What does that mean? It means the particle can only move back and forth along a single line, say, the x-axis.

Crucially, this box has boundaries. Let's say the box extends from $x=0$ to $x=L$. Outside this box, from $x<0$ and $x>L$, the particle *cannot* be found. This is like a ball trapped in a perfectly sealed, infinitely long tube – it can't escape.

In quantum mechanics, we describe the state of a particle using a **wave function**, usually denoted by the Greek letter psi, $\Psi(x,t)$. For a particle in a stationary state (meaning its energy doesn't change with time), we often consider just the spatial part of the wave function, $\psi(x)$.

So, what are the rules governing our particle inside this box?

*   **Inside the box ($0 < x < L$):** The particle is free to move. There are no forces acting on it. This means the potential energy, $V(x)$, is constant inside the box. We can set this constant to zero for convenience: $V(x) = 0$ for $0 < x < L$.
*   **Outside the box ($x \le 0$ or $x \ge L$):** The particle is *completely confined*. This implies an infinitely high potential energy barrier outside the box. So, $V(x) = \infty$ for $x \le 0$ and $x \ge L$.

This setup is a classic example used in many quantum mechanics texts, like Avadhanulu, Kshirsagar & Murthy, and Malik & Singh. It helps us understand how confinement leads to quantized energy levels.

### The Schrödinger Equation: Our Guiding Principle

The fundamental equation that governs the behaviour of quantum mechanical systems is the **Time-Independent Schrödinger Equation (TISE)**. When we're looking for stationary states (states with definite energy), the TISE takes this form:

$$
-\frac{\hbar^2}{2m} \frac{d^2\psi(x)}{dx^2} + V(x)\psi(x) = E\psi(x)
$$

Let's break this down:
*   $\hbar$ (h-bar) is the reduced Planck constant ($\hbar = h/2\pi$). It's a fundamental constant of nature that relates energy and frequency, and its presence tells us we're in the quantum realm.
*   $m$ is the mass of the particle.
*   $\psi(x)$ is the wave function we want to find. It tells us the probability amplitude of finding the particle at position $x$.
*   $V(x)$ is the potential energy of the particle at position $x$.
*   $E$ is the total energy of the particle. This is what we want to determine!

### Solving the Schrödinger Equation for the Particle in a Box

Now, let's apply the TISE to our specific situation.

**1. Outside the Box ($x \le 0$ or $x \ge L$):**
Here, $V(x) = \infty$. The TISE becomes:

$$
-\frac{\hbar^2}{2m} \frac{d^2\psi(x)}{dx^2} + \infty \cdot \psi(x) = E\psi(x)
$$

For this equation to hold, if $\psi(x)$ were non-zero, the $\infty \cdot \psi(x)$ term would make the left side infinitely large, unless $E$ were also infinite, which isn't physically meaningful for a confined particle. The only way for the equation to be satisfied with finite energy $E$ is if the wave function itself is zero:

$$
\psi(x) = 0 \quad \text{for } x \le 0 \text{ and } x \ge L
$$

This makes perfect sense! The particle cannot exist where the potential energy is infinite. This is a key boundary condition.

**2. Inside the Box ($0 < x < L$):**
Here, $V(x) = 0$. The TISE simplifies beautifully:

$$
-\frac{\hbar^2}{2m} \frac{d^2\psi(x)}{dx^2} = E\psi(x)
$$

We can rearrange this to:

$$
\frac{d^2\psi(x)}{dx^2} = -\frac{2mE}{\hbar^2} \psi(x)
$$

This is a standard second-order linear differential equation. We can make a substitution for the constant term. Let $k^2 = \frac{2mE}{\hbar^2}$. Since energy $E$ must be positive (the particle is confined, not infinitely spread out with zero potential energy everywhere), $k$ will be a real number. So, our equation becomes:

$$
\frac{d^2\psi(x)}{dx^2} = -k^2 \psi(x)
$$

The general solution to this equation is of the form:

$$
\psi(x) = A \sin(kx) + B \cos(kx)
$$

where $A$ and $B$ are constants that we'll determine using our boundary conditions.

### Applying Boundary Conditions to Find Allowed Energies

Remember those boundary conditions we established?
1.  $\psi(0) = 0$ (the wave function must be zero at the left wall).
2.  $\psi(L) = 0$ (the wave function must be zero at the right wall).

Let's apply the first boundary condition, $\psi(0) = 0$:

$$
\psi(0) = A \sin(k \cdot 0) + B \cos(k \cdot 0) = 0
$$

$$
A \sin(0) + B \cos(0) = 0
$$

Since $\sin(0) = 0$ and $\cos(0) = 1$, this simplifies to:

$$
A \cdot 0 + B \cdot 1 = 0 \implies B = 0
$$

So, our wave function must be of the form:

$$
\psi(x) = A \sin(kx)
$$

Now, let's apply the second boundary condition, $\psi(L) = 0$:

$$
\psi(L) = A \sin(kL) = 0
$$

For this equation to be true, there are two possibilities:
*   $A = 0$: If $A=0$, then $\psi(x) = 0$ everywhere. This is the "trivial solution" and doesn't represent a particle being present. We want a non-zero wave function.
*   $\sin(kL) = 0$: This is the interesting case! The sine function is zero when its argument is an integer multiple of $\pi$.

$$
kL = n\pi
$$

where $n$ is an integer.

However, we need to be careful about the value of $n$.
*   If $n=0$, then $k=0$. This would mean $\psi(x) = A \sin(0) = 0$ everywhere, which is again the trivial solution. So, $n$ cannot be zero.
*   If $n$ is a negative integer (e.g., $n=-1, -2, \dots$), then $\sin(-n\pi x/L) = -\sin(n\pi x/L)$. This just changes the sign of the wave function, and since the square of the wave function gives the probability density, a negative sign doesn't represent a new physical state. We can absorb this negative sign into the constant $A$.

Therefore, we take $n$ to be a **positive integer**: $n = 1, 2, 3, \dots$.

This condition, $kL = n\pi$, is crucial! It tells us that $k$ can only take on specific values:

$$
k_n = \frac{n\pi}{L}
$$

### Deriving the Energy Eigenvalues

Remember our substitution $k^2 = \frac{2mE}{\hbar^2}$? Now that we know the allowed values of $k$, we can substitute $k_n$ back in to find the allowed energies, $E_n$:

$$
k_n^2 = \left(\frac{n\pi}{L}\right)^2 = \frac{2mE_n}{\hbar^2}
$$

Solving for $E_n$:

$$
E_n = \frac{n^2\pi^2\hbar^2}{2mL^2}
$$

This is a fundamental result! The energy of the particle is not continuous; it is **quantized**. It can only take on these discrete values, indexed by the quantum number $n$.

Let's think about what this means. This is directly related to CO3! It explains why electrons in atoms have specific energy levels. The confinement of the electron within the atom, by the electromagnetic forces from the nucleus, is analogous to our particle in a box.

*   **Ground State ($n=1$):** The lowest possible energy is when $n=1$.
    $$
    E_1 = \frac{\pi^2\hbar^2}{2mL^2}
    $$
    This is the lowest energy the particle can have, even when it's "confined." It's not zero! This is the **zero-point energy**, a purely quantum mechanical phenomenon. A particle, no matter how cold or confined, always has some minimum energy and cannot be perfectly at rest.

*   **Excited States ($n=2, 3, \dots$):** As $n$ increases, the energy increases. The energy levels are proportional to $n^2$. The spacing between energy levels increases as $n$ increases.

**Example Analogy:** Imagine a guitar string fixed at both ends. When you pluck it, it can vibrate at different frequencies. The fundamental frequency (lowest energy) corresponds to one "half-wavelength" fitting along the string. The next frequency (higher energy) corresponds to two half-wavelengths, and so on. Each allowed vibration mode is like a different energy level for our particle. The length of the string ($L$) and the properties of the string (analogous to $m$ and $\hbar$) determine the allowed frequencies (energies).

**Exam Tip:** Be sure to remember the formula for $E_n$. It's frequently tested! Also, understand the origin of the $n^2$ dependence – it comes from the $k^2$ term in the Schrödinger equation and the $n\pi$ quantization of $k$.

### Deriving the Normalized Wave Function

We found that the wave function inside the box is $\psi_n(x) = A \sin(k_n x)$, where $k_n = \frac{n\pi}{L}$. So, we have:

$$
\psi_n(x) = A \sin\left(\frac{n\pi x}{L}\right) \quad \text{for } 0 < x < L
$$

And $\psi_n(x) = 0$ elsewhere.

The constant $A$ is called the normalization constant. What does "normalized" mean? In quantum mechanics, the square of the wave function, $|\psi(x)|^2$, represents the **probability density** of finding the particle at position $x$. For the particle to be somewhere in the box, the total probability of finding it within the box must be 1. This is called the normalization condition:

$$
\int_{-\infty}^{\infty} |\psi(x)|^2 dx = 1
$$

Since our particle is only in the box from $0$ to $L$, this becomes:

$$
\int_{0}^{L} |\psi_n(x)|^2 dx = 1
$$

Let's substitute our wave function:

$$
\int_{0}^{L} \left|A \sin\left(\frac{n\pi x}{L}\right)\right|^2 dx = 1
$$

$$
|A|^2 \int_{0}^{L} \sin^2\left(\frac{n\pi x}{L}\right) dx = 1
$$

Now, we need to evaluate the integral. We use the trigonometric identity: $\sin^2(\theta) = \frac{1 - \cos(2\theta)}{2}$.
Let $\theta = \frac{n\pi x}{L}$. Then $2\theta = \frac{2n\pi x}{L}$.

$$
\int_{0}^{L} \sin^2\left(\frac{n\pi x}{L}\right) dx = \int_{0}^{L} \frac{1}{2} \left(1 - \cos\left(\frac{2n\pi x}{L}\right)\right) dx
$$

$$
= \frac{1}{2} \left[ x - \frac{L}{2n\pi} \sin\left(\frac{2n\pi x}{L}\right) \right]_{0}^{L}
$$

Let's evaluate this at the limits:
At $x=L$: $\frac{1}{2} \left[ L - \frac{L}{2n\pi} \sin\left(\frac{2n\pi L}{L}\right) \right] = \frac{1}{2} \left[ L - \frac{L}{2n\pi} \sin(2n\pi) \right]$. Since $\sin(2n\pi) = 0$ for any integer $n$, this term is $\frac{1}{2} L$.

At $x=0$: $\frac{1}{2} \left[ 0 - \frac{L}{2n\pi} \sin(0) \right] = 0$.

So, the integral evaluates to:

$$
\int_{0}^{L} \sin^2\left(\frac{n\pi x}{L}\right) dx = \frac{L}{2}
$$

Now, back to our normalization equation:

$$
|A|^2 \left(\frac{L}{2}\right) = 1
$$

$$
|A|^2 = \frac{2}{L}
$$

Taking the square root, we get $|A| = \sqrt{\frac{2}{L}}$. We can choose $A$ to be real and positive for simplicity:

$$
A = \sqrt{\frac{2}{L}}
$$

Therefore, the **normalized wave functions** for a particle in a one-dimensional box are:

$$
\psi_n(x) = \sqrt{\frac{2}{L}} \sin\left(\frac{n\pi x}{L}\right) \quad \text{for } 0 < x < L
$$

and $\psi_n(x) = 0$ elsewhere.

**What does this normalization mean visually?** If you square $\psi_n(x)$, you get $|\psi_n(x)|^2 = \frac{2}{L} \sin^2\left(\frac{n\pi x}{L}\right)$. This gives you the probability density. For $n=1$, the probability is highest in the middle of the box. For $n=2$, there are two "humps" of probability, with a node (zero probability) exactly in the middle. This is a direct manifestation of the wave nature of particles, as described by CO3.

**Connecting to other texts:** Arthur Beiser's "Concepts of Modern Physics" provides excellent visual representations of these wave functions and probability densities, which are very helpful for understanding the spatial distribution of the particle.

### Summary and Key Takeaways

Let's recap the essential points from our particle in a box problem:

*   **Confinement leads to Quantization:** When a particle is confined to a region, its energy can only take on discrete, specific values, not any value. This is a direct consequence of the wave nature of matter and the boundary conditions imposed by the confinement.
*   **Energy Eigenvalues:** The allowed energies are given by $E_n = \frac{n^2\pi^2\hbar^2}{2mL^2}$, where $n=1, 2, 3, \dots$.
    *   $n$ is the quantum number.
    *   $E_1$ is the lowest possible energy (zero-point energy).
    *   Energy levels increase with $n^2$.
*   **Normalized Wave Functions:** The probability of finding the particle at a given point is given by the square of the wave function. The wave functions must be normalized so that the total probability of finding the particle within the box is 1.
    *   $\psi_n(x) = \sqrt{\frac{2}{L}} \sin\left(\frac{n\pi x}{L}\right)$ for $0 < x < L$.
    *   The wave function has nodes (points of zero probability) at $x=0, L$ and also at $x = L/n, 2L/n, \dots, (n-1)L/n$ for $n > 1$.

This model, while simplified, is a powerful stepping stone to understanding more complex quantum phenomena like the behaviour of electrons in atoms, energy levels in molecules, and even the behaviour of particles in quantum wells in semiconductor physics. It’s a beautiful illustration of how classical physics breaks down at the atomic scale, and how quantum mechanics provides a consistent description.

Remember this: The particle in a box is not just a theoretical exercise; it's the fundamental building block for understanding why matter behaves the way it does at the atomic and subatomic levels, directly aligning with our course objective **CO3**.

---

### Sample Questions and Answers

**Q1. What is the lowest possible energy for a particle in a one-dimensional box of length $L$?**

**Answer:**
The energy eigenvalues are given by $E_n = \frac{n^2\pi^2\hbar^2}{2mL^2}$, where $n$ is a positive integer ($n=1, 2, 3, \dots$). The lowest possible energy, known as the ground state energy or zero-point energy, occurs when $n=1$.
Therefore, the lowest possible energy is $E_1 = \frac{(1)^2\pi^2\hbar^2}{2mL^2} = \frac{\pi^2\hbar^2}{2mL^2}$. This energy is non-zero, highlighting a key quantum mechanical principle.

**Q2. Explain why the wave function for a particle in a one-dimensional box must be zero at the boundaries ($x=0$ and $x=L$).**

**Answer:**
The problem statement defines the box as a region where the particle is confined. Outside the box ($x \le 0$ or $x \ge L$), the potential energy $V(x)$ is infinite. The time-independent Schrödinger equation, $-\frac{\hbar^2}{2m} \frac{d^2\psi}{dx^2} + V(x)\psi = E\psi$, requires that if $V(x)$ is infinite, and $E$ is finite, then the wave function $\psi(x)$ must be zero in those regions. This signifies that the probability of finding the particle where the potential energy is infinite is zero. Therefore, the wave function must smoothly connect to zero at the boundaries of the infinitely high potential walls.

**Q3. If a particle is in the $n=2$ state in a 1D box, what is its probability density at the center of the box ($x=L/2$)?**

**Answer:**
The normalized wave function is $\psi_n(x) = \sqrt{\frac{2}{L}} \sin\left(\frac{n\pi x}{L}\right)$.
The probability density is $|\psi_n(x)|^2 = \frac{2}{L} \sin^2\left(\frac{n\pi x}{L}\right)$.
For the $n=2$ state, the wave function is $\psi_2(x) = \sqrt{\frac{2}{L}} \sin\left(\frac{2\pi x}{L}\right)$.
The probability density is $|\psi_2(x)|^2 = \frac{2}{L} \sin^2\left(\frac{2\pi x}{L}\right)$.
At the center of the box, $x = L/2$:
$|\psi_2(L/2)|^2 = \frac{2}{L} \sin^2\left(\frac{2\pi (L/2)}{L}\right) = \frac{2}{L} \sin^2(\pi)$.
Since $\sin(\pi) = 0$, the probability density at the center of the box for the $n=2$ state is:
$|\psi_2(L/2)|^2 = \frac{2}{L} (0)^2 = 0$.
This means there is zero probability of finding the particle at the center of the box when it is in the $n=2$ state. This point is a "node" in the wave function.

**Q4. How does the energy of a particle in a 1D box change if the length of the box ($L$) is halved?**

**Answer:**
The energy of the particle is given by $E_n = \frac{n^2\pi^2\hbar^2}{2mL^2}$.
If the length of the box is halved, let the new length be $L' = L/2$.
The new energy levels, $E'_n$, will be:
$E'_n = \frac{n^2\pi^2\hbar^2}{2m(L/2)^2} = \frac{n^2\pi^2\hbar^2}{2m(L^2/4)} = \frac{4 n^2\pi^2\hbar^2}{2mL^2} = 4 \left(\frac{n^2\pi^2\hbar^2}{2mL^2}\right) = 4E_n$.
So, if the length of the box is halved, the energy levels increase by a factor of 4. This means the particle is more tightly confined, and its energy increases. This is a very important concept related to the uncertainty principle – tighter confinement leads to greater uncertainty in momentum, and thus higher kinetic energy.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
