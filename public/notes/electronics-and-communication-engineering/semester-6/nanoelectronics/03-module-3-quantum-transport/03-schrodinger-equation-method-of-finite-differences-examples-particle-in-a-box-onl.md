---
title: "Schrodinger equation - Method of finite differences – Examples (particle in a box only)"
subject: "NANOELECTRONICS"
module: "Module 3: Quantum Transport"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780feed9"
status: "completed"
scrapedAt: "2026-05-23T18:02:00.251Z"
---
# NANOELECTRONICS - Module 3: Quantum Transport

## Topic: Schrödinger Equation - Method of Finite Differences - Examples (Particle in a Box)

---

### **1. Introduction to Quantum Transport**

**Learning Outcome Alignment:** CO1, CO3, CO4 (K2, K3)

Quantum transport in nanoelectronic devices is a fundamental aspect of understanding how electrons move at the nanoscale. Unlike classical physics, where we can precisely define an electron's position and momentum, quantum mechanics dictates a probabilistic behavior. This module focuses on how to numerically solve the Schrödinger equation to predict this behavior in confined nanostructures.

**Key Concepts:**

*   **Quantum Confinement:** When the dimensions of a material become comparable to the de Broglie wavelength of electrons, their motion becomes restricted, leading to quantized energy levels. This is a cornerstone of nanoelectronics. (Goser, GlÖsekötter, & Dienstuhl, 2004)
*   **Electron Wave Function ($\psi$)**: A mathematical function that describes the quantum mechanical state of an electron. The square of its magnitude, $|\psi|^2$, represents the probability density of finding the electron at a particular point in space. (Griffiths & Schroetter, 2018)
*   **Schrödinger Equation:** The fundamental equation of quantum mechanics that describes how the wave function of a quantum system evolves over time. For time-independent problems (like energy levels), we use the time-independent Schrödinger equation.
    *   **Time-Independent Schrödinger Equation:**
        $$ \hat{H}\psi = E\psi $$
        where:
        *   $\hat{H}$ is the Hamiltonian operator (representing the total energy of the system).
        *   $\psi$ is the wave function.
        *   $E$ is the energy eigenvalue (the possible energy values the system can have).

**Importance in Nanoelectronics:**

*   Understanding energy band structure and carrier transport in nanoscale transistors (e.g., FinFETs). (Taur & Ning, 2009)
*   Designing quantum dots, nanowires, and other quantum devices. (Martinez Duart, Martin Palma, & Rueda, 2006)
*   Predicting device performance limitations due to quantum mechanical effects as devices shrink. (Hanson, 2009)

---

### **2. The Schrödinger Equation**

**Learning Outcome Alignment:** CO3, CO4 (K2, K3)

The Schrödinger equation is the bedrock of quantum mechanics. In nanoelectronics, we often deal with the time-independent version to find the allowed energy states and corresponding wave functions of electrons in nanostructures.

**Key Concepts:**

*   **Hamiltonian Operator ($\hat{H}$):** In the context of a single particle in a potential $V(x)$, the Hamiltonian operator is given by:
    $$ \hat{H} = -\frac{\hbar^2}{2m^*}\frac{d^2}{dx^2} + V(x) $$
    where:
    *   $\hbar$ is the reduced Planck constant ($\hbar = h/2\pi$).
    *   $m^*$ is the effective mass of the electron in the material.
    *   $\frac{d^2}{dx^2}$ is the second derivative operator, representing kinetic energy.
    *   $V(x)$ is the potential energy function.

*   **Wave Function ($\psi(x)$):** The solution to the Schrödinger equation. For a 1D system, it's a function of position.

*   **Energy Eigenvalues ($E$):** The possible discrete or continuous energy values that a quantum system can possess.

**Reference:** Griffiths & Schroetter, 2018; Datta, 2005

---

### **3. Method of Finite Differences**

**Learning Outcome Alignment:** CO3, CO4 (K3)

Solving the Schrödinger equation analytically is only possible for a limited set of simple potential functions. For most realistic nanostructures, analytical solutions are not feasible. The method of finite differences is a powerful numerical technique to approximate the solution by discretizing the continuous spatial domain.

**Key Concepts:**

*   **Discretization:** The process of converting a continuous domain into a discrete set of points or grid. The spatial coordinate $x$ is divided into discrete points $x_i = i \Delta x$, where $\Delta x$ is the spatial step size.
*   **Approximation of Derivatives:** The core idea is to approximate the continuous derivatives in the Schrödinger equation using finite differences.
    *   **First Derivative Approximation (Forward Difference):**
        $$ \frac{df}{dx} \approx \frac{f(x + \Delta x) - f(x)}{\Delta x} $$
    *   **First Derivative Approximation (Backward Difference):**
        $$ \frac{df}{dx} \approx \frac{f(x) - f(x - \Delta x)}{\Delta x} $$
    *   **Second Derivative Approximation (Central Difference):** This is the most commonly used and accurate for this purpose. For a function $f(x)$, the second derivative at point $x_i$ can be approximated as:
        $$ \frac{d^2f}{dx^2}\bigg|_{x_i} \approx \frac{f(x_{i+1}) - 2f(x_i) + f(x_{i-1})}{(\Delta x)^2} $$
        where $f(x_i)$ is represented by $f_i$, $f(x_{i+1})$ by $f_{i+1}$, and $f(x_{i-1})$ by $f_{i-1}$. So,
        $$ \frac{d^2f}{dx^2}\bigg|_{x_i} \approx \frac{f_{i+1} - 2f_i + f_{i-1}}{(\Delta x)^2} $$

*   **Discretized Schrödinger Equation:** Substituting the central difference approximation for the second derivative into the time-independent Schrödinger equation:
    $$ -\frac{\hbar^2}{2m^*}\frac{\psi_{i+1} - 2\psi_i + \psi_{i-1}}{(\Delta x)^2} + V(x_i)\psi_i = E\psi_i $$
    Rearranging this equation, we get a system of linear equations for the unknown wave function values $\psi_i$ at each grid point.

*   **Boundary Conditions:** Essential for solving differential equations. For quantum systems, these often relate to the behavior of the wave function at the edges of the domain (e.g., zero at infinity or at infinite potential walls).

**How it works:**

1.  **Define the Domain:** Specify the spatial region of interest (e.g., the length of a quantum wire or a potential well).
2.  **Discretize:** Divide the domain into a finite number of points with a uniform spacing $\Delta x$.
3.  **Approximate:** Replace the continuous derivatives in the Schrödinger equation with their finite difference approximations.
4.  **Formulate a System of Equations:** This leads to a system of linear algebraic equations. For an N-point grid, this results in an N x N matrix equation that can be represented in a form like:
    $$ \mathbf{H}\mathbf{\psi} = E\mathbf{\psi} $$
    where $\mathbf{H}$ is the discretized Hamiltonian matrix, $\mathbf{\psi}$ is a vector of wave function values at each grid point, and $E$ is the energy.
5.  **Solve:** This matrix equation is an eigenvalue problem. Solving it yields the allowed energy eigenvalues ($E$) and the corresponding eigenvectors, which represent the discretized wave functions ($\psi$).

**Advantages:**

*   Can handle complex potential profiles that are not analytically solvable.
*   Foundation for more advanced numerical methods in quantum transport simulations.

**Limitations:**

*   Accuracy depends on the step size $\Delta x$. A smaller $\Delta x$ increases accuracy but also computational cost.
*   Can suffer from numerical errors, especially for rapidly varying wave functions.

**Reference:** Datta, 2005; Hanson, 2009

---

### **4. Example: Particle in a One-Dimensional Infinite Potential Box**

**Learning Outcome Alignment:** CO3, CO4 (K3)

The particle in a box is a canonical problem in quantum mechanics, serving as a fundamental example to illustrate quantum confinement and the application of numerical methods. It represents a particle trapped in a region of space where the potential energy is zero, but infinitely high outside this region.

**Problem Setup:**

*   A particle of mass $m^*$ confined to a 1D box of length $L$.
*   Potential energy function:
    $$ V(x) = \begin{cases} 0 & \text{for } 0 \le x \le L \\ \infty & \text{otherwise} \end{cases} $$
*   The time-independent Schrödinger equation inside the box ($0 \le x \le L$):
    $$ -\frac{\hbar^2}{2m^*}\frac{d^2\psi(x)}{dx^2} = E\psi(x) $$
*   Boundary conditions: $\psi(0) = 0$ and $\psi(L) = 0$ (due to infinite potential walls).

**Analytical Solution (for comparison):**

The analytical solution provides the quantized energy levels:
$$ E_n = \frac{n^2\pi^2\hbar^2}{2m^*L^2}, \quad n = 1, 2, 3, \dots $$
And the corresponding wave functions:
$$ \psi_n(x) = \sqrt{\frac{2}{L}}\sin\left(\frac{n\pi x}{L}\right) $$

**Numerical Solution using Finite Differences:**

1.  **Discretize the Box:** Divide the box of length $L$ into $N$ segments, creating $N+1$ grid points. Let the points be $x_i = i \Delta x$ for $i = 0, 1, \dots, N$. The spacing is $\Delta x = L/N$.
2.  **Apply Finite Differences:** The Schrödinger equation at grid point $x_i$ becomes:
    $$ -\frac{\hbar^2}{2m^*}\frac{\psi_{i+1} - 2\psi_i + \psi_{i-1}}{(\Delta x)^2} = E\psi_i $$
    Rearranging:
    $$ -\frac{\hbar^2}{2m^*(\Delta x)^2}(\psi_{i+1} - 2\psi_i + \psi_{i-1}) = E\psi_i $$
3.  **Incorporate Boundary Conditions:**
    *   At $x_0=0$, we have $\psi_0 = 0$.
    *   At $x_N=L$, we have $\psi_N = 0$.
4.  **Form the Matrix Equation:** We are interested in the wave function values $\psi_1, \psi_2, \dots, \psi_{N-1}$ (since $\psi_0$ and $\psi_N$ are zero). Consider the equation for an interior point $x_i$ where $1 \le i \le N-1$:
    $$ \frac{\hbar^2}{2m^*(\Delta x)^2}\psi_{i-1} - \left(\frac{\hbar^2}{m^*(\Delta x)^2} + V(x_i)\right)\psi_i + \frac{\hbar^2}{2m^*(\Delta x)^2}\psi_{i+1} = E\psi_i $$
    Since $V(x_i) = 0$ inside the box:
    $$ \frac{\hbar^2}{2m^*(\Delta x)^2}\psi_{i-1} - \frac{\hbar^2}{m^*(\Delta x)^2}\psi_i + \frac{\hbar^2}{2m^*(\Delta x)^2}\psi_{i+1} = E\psi_i $$
    This can be written as $H_{i,j}\psi_j = E\psi_i$. For the diagonal term ($i=j$), the coefficient is $-\frac{\hbar^2}{m^*(\Delta x)^2}$. For the off-diagonal terms ($j=i+1$ and $j=i-1$), the coefficient is $\frac{\hbar^2}{2m^*(\Delta x)^2}$.
    Let $C = \frac{\hbar^2}{2m^*(\Delta x)^2}$. The equation becomes:
    $$ C\psi_{i-1} - 2C\psi_i + C\psi_{i+1} = E\psi_i $$
    This forms a tridiagonal matrix for the Hamiltonian $\mathbf{H}$. The matrix will be of size $(N-1) \times (N-1)$, considering only the interior points.
    The Hamiltonian matrix $\mathbf{H}$ will look like:

    $$
    \mathbf{H} =
    \begin{pmatrix}
    -2C & C & 0 & \dots & 0 \\
    C & -2C & C & \dots & 0 \\
    0 & C & -2C & \dots & 0 \\
    \vdots & \vdots & \vdots & \ddots & \vdots \\
    0 & 0 & 0 & \dots & -2C
    \end{pmatrix}
    $$

5.  **Solve the Eigenvalue Problem:** Solve $\mathbf{H}\mathbf{\psi} = E\mathbf{\psi}$ for the eigenvalues $E$ and eigenvectors $\mathbf{\psi}$. The eigenvalues will approximate the analytical energy levels, and the eigenvectors will approximate the wave functions at the grid points.

**Example Calculation (Conceptual):**

Let $L=1$ nm, $m^* = 0.067 m_e$ (effective mass of GaAs), $\hbar = 1.054 \times 10^{-34}$ J.s, $m_e = 9.109 \times 10^{-31}$ kg.
Let's choose $N=10$ grid points, so $\Delta x = L/N = 0.1$ nm.
$C = \frac{(1.054 \times 10^{-34})^2}{2 \times (0.067 \times 9.109 \times 10^{-31}) \times (0.1 \times 10^{-9})^2}$ (Units will need careful conversion to eV, typically using eV = 1.602e-19 J).

Using numerical software (like Python with NumPy/SciPy) is practical for this. The eigenvalues obtained from the numerical solution should closely match the analytical values for small $n$.

**Important Point:** The accuracy of the numerical solution improves as $N$ increases (i.e., $\Delta x$ decreases).

**Reference:** Datta, 2005; Hanson, 2009; Griffiths & Schroetter, 2018

---

### **5. Practice Questions and Exercises**

**Question 1:**
Describe the fundamental difference between the behavior of electrons in bulk semiconductors and in quantum confined structures at the nanoscale. How does the Schrödinger equation help us understand this difference?

**Answer:**
In bulk semiconductors, electrons behave more like free particles with a continuous energy spectrum. At the nanoscale, when dimensions are comparable to the electron's de Broglie wavelength, quantum confinement occurs. This leads to the quantization of energy levels, similar to how energy levels are quantized in atoms. The Schrödinger equation, by describing the wave-like nature of electrons and their interaction with potentials, predicts these quantized energy levels and the discrete probability distributions (wave functions) within these confined structures. This is crucial for understanding the operation of nanodevices where quantum effects dominate.

**Question 2:**
Explain the core principle behind the method of finite differences as applied to solving the Schrödinger equation. What is the advantage of this method over analytical solutions?

**Answer:**
The method of finite differences approximates the continuous derivatives in the Schrödinger equation (specifically the second derivative) by using values of the wave function at discrete grid points. This transforms the differential equation into a system of algebraic equations. The advantage is that it allows us to solve the Schrödinger equation for systems with complex potential landscapes or geometries where analytical solutions are impossible to obtain.

**Question 3:**
Consider a particle in a 1D infinite potential box of length $L$.
(a) Write down the time-independent Schrödinger equation for this system inside the box.
(b) State the boundary conditions for this problem.
(c) If we discretize the box into $N$ segments, what is the approximate form of the second derivative at a grid point $x_i$?
(d) How does the accuracy of the numerical solution typically change as the number of grid points $N$ is increased?

**Answer:**
(a) $-\frac{\hbar^2}{2m^*}\frac{d^2\psi(x)}{dx^2} = E\psi(x)$ for $0 \le x \le L$.
(b) $\psi(0) = 0$ and $\psi(L) = 0$.
(c) $\frac{d^2\psi}{dx^2}\bigg|_{x_i} \approx \frac{\psi_{i+1} - 2\psi_i + \psi_{i-1}}{(\Delta x)^2}$, where $\Delta x = L/N$.
(d) As $N$ is increased (meaning $\Delta x$ decreases), the accuracy of the numerical solution generally increases because the approximation of the continuous derivatives becomes closer to the true values.

**Question 4 (Conceptual/Design):**
Imagine you are designing a quantum dot which acts like a particle in a 2D infinite potential box. Briefly describe how you might adapt the finite difference method to solve the 2D Schrödinger equation for this system. What would the Hamiltonian matrix look like conceptually?

**Answer:**
For a 2D infinite potential box of size $L_x \times L_y$, the Schrödinger equation would involve partial derivatives:
$$ -\frac{\hbar^2}{2m^*}\left(\frac{\partial^2\psi}{\partial x^2} + \frac{\partial^2\psi}{\partial y^2}\right) = E\psi $$
We would discretize both the x and y dimensions, creating a 2D grid of points $(x_i, y_j)$. The partial derivatives would be approximated using central differences in both directions:
$$ \frac{\partial^2\psi}{\partial x^2} \approx \frac{\psi_{i+1, j} - 2\psi_{i, j} + \psi_{i-1, j}}{(\Delta x)^2} $$
$$ \frac{\partial^2\psi}{\partial y^2} \approx \frac{\psi_{i, j+1} - 2\psi_{i, j} + \psi_{i, j-1}}{(\Delta y)^2} $$
The discretized equation would relate the wave function at point $(x_i, y_j)$ to its neighbors in the x and y directions. The Hamiltonian matrix would become much larger, representing the wave function on the 2D grid. It would still be sparse, with non-zero elements connecting a grid point to its immediate neighbors (up, down, left, right). The boundary conditions would be $\psi=0$ at the edges of the 2D box.

---

### **6. Important Points to Remember**

*   Quantum confinement is a key phenomenon in nanoelectronics, leading to quantized energy levels.
*   The Schrödinger equation is the fundamental equation describing quantum mechanical systems.
*   Analytical solutions to the Schrödinger equation are limited to simple potentials.
*   The method of finite differences is a numerical technique that discretizes space and approximates derivatives to solve the Schrödinger equation for more complex systems.
*   The accuracy of the finite difference method improves with smaller spatial step sizes (larger number of grid points).
*   The particle in a box is a foundational example demonstrating quantum confinement and the application of numerical methods.
*   Boundary conditions are crucial for obtaining unique solutions to the Schrödinger equation.
*   The discretized Schrödinger equation leads to an eigenvalue problem that can be solved using linear algebra techniques.

---

### **7. Alignment with Course Outcomes**

*   **CO1 (Challenges of scaling):** Understanding quantum confinement (discussed in intro) highlights how device behavior changes drastically at nanoscale, presenting scaling challenges. Finite differences are a tool to analyze these effects.
*   **CO3 (Outline quantum transport):** This topic directly addresses the core of quantum transport by showing how to model electron behavior in confined nanostructures using the Schrödinger equation and numerical methods.
*   **CO4 (Apply quantum mechanics):** The entire module is about applying quantum mechanics (Schrödinger equation, wave functions) to nanoelectronic devices, illustrated by the particle in a box example and the finite difference method.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### **8. References**

*   Taur, Y., & Ning, T. H. (2009). *Fundamentals of Modern VLSI Devices* (2nd ed.). Cambridge University Press.
*   Goser, K., GlÖsekötter, P., & Dienstuhl, J. (2004). *Nanoelectronics and Nanosystems*. Springer-Verlag Berlin Heidelberg.
*   Martinez Duart, J. M., Martin Palma, R. J., & Rueda, F. A. (2006). *Nanotechnology for microelectronics and optoelectronics*. Elsevier.
*   Colinge, J.-P. (2008). *FinFETs and Other multigate Transistors*. Springer.
*   Datta, S. (2005). *Quantum Transport: Atom to Transistor*. Cambridge University Press.
*   Hanson, G. W. H. (2009). *Fundamentals of nano electronics*. Pearson Education.
*   Lundstrom, M. (2000). *Fundamentals of Carrier Transport* (2nd ed.). Cambridge University Press.
*   Griffiths, D. J., & Schroetter, D. F. (2018). *Introduction to Quantum Mechanics* (3rd ed.). Cambridge University Press.

---