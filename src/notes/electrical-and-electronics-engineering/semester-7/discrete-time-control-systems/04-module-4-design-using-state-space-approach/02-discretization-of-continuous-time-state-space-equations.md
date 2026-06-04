---
title: "Discretization of continuous time state-space equations"
subject: "DISCRETE TIME CONTROL SYSTEMS"
module: "Module 4: Design using State Space approach:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368e0"
status: "completed"
scrapedAt: "2026-05-23T16:36:32.112Z"
---
# Module 4: Design using State Space Approach - Discretization of Continuous-Time State-Space Equations

## 1. Introduction to State-Space Representation

The state-space approach provides a powerful framework for modeling, analyzing, and controlling dynamic systems. It represents the internal state of a system using a set of first-order differential equations, offering a more comprehensive understanding than traditional input-output transfer function methods, especially for multivariable systems and systems with internal dynamics.

### Key Concepts:

*   **State Vector ($\mathbf{x}(t)$):** A vector containing the minimum number of variables required to completely describe the system's behavior at any given time. These are the internal variables that capture the system's memory.
*   **Input Vector ($\mathbf{u}(t)$):** A vector containing the external signals applied to the system.
*   **Output Vector ($\mathbf{y}(t)$):** A vector containing the variables that are measured or observed from the system.
*   **State Equations:** A set of first-order differential equations describing the time evolution of the state vector.
    $$ \dot{\mathbf{x}}(t) = \mathbf{A}\mathbf{x}(t) + \mathbf{B}\mathbf{u}(t) $$
*   **Output Equations:** A set of algebraic equations relating the output vector to the state vector and input vector.
    $$ \mathbf{y}(t) = \mathbf{C}\mathbf{x}(t) + \mathbf{D}\mathbf{u}(t) $$
    Where:
    *   $\mathbf{A}$ is the **state matrix**.
    *   $\mathbf{B}$ is the **input matrix**.
    *   $\mathbf{C}$ is the **output matrix**.
    *   $\mathbf{D}$ is the **feedforward matrix**.

### Importance in Control Design:

The state-space representation is crucial for designing advanced control strategies such as:
*   State feedback control (CO4)
*   Observer design (CO4)
*   Optimal control
*   Robust control

## 2. The Need for Discretization

Digital control systems operate with discrete-time signals, meaning that continuous-time system variables are sampled at regular intervals. To design and implement digital controllers for continuous-time systems using the state-space approach, we need to convert the continuous-time state-space equations into their discrete-time equivalents. This process is called **discretization**.

**Key takeaway:** Digital controllers operate on sampled data, so we need a discrete-time representation of the continuous-time system to interface them.

## 3. Discretization of Continuous-Time State-Space Equations

Consider a continuous-time linear time-invariant (LTI) system described by:

$$ \dot{\mathbf{x}}(t) = \mathbf{A}\mathbf{x}(t) + \mathbf{B}\mathbf{u}(t) $$
$$ \mathbf{y}(t) = \mathbf{C}\mathbf{x}(t) + \mathbf{D}\mathbf{u}(t) $$

We assume that the input signal $\mathbf{u}(t)$ is held constant over each sampling interval $T$ (using a Zero-Order Hold or ZOH). Let $t_k = k T$ be the sampling instants, where $k$ is an integer. The state vector at time $t$ can be expressed as $\mathbf{x}(t)$. The sampled state vector at the $k$-th sampling instant is $\mathbf{x}(kT)$.

### Derivation of Discrete-Time State Equations:

The solution to the continuous-time state equation over a sampling interval $[kT, (k+1)T]$ is given by:

$$ \mathbf{x}((k+1)T) = e^{\mathbf{A}T} \mathbf{x}(kT) + \int_{kT}^{(k+1)T} e^{\mathbf{A}((k+1)T - \tau)} \mathbf{B}\mathbf{u}(\tau) d\tau $$

Assuming a Zero-Order Hold (ZOH) for the input $\mathbf{u}(t)$, i.e., $\mathbf{u}(\tau) = \mathbf{u}(kT)$ for $kT \le \tau < (k+1)T$, the integral becomes:

$$ \mathbf{x}((k+1)T) = e^{\mathbf{A}T} \mathbf{x}(kT) + \left( \int_{kT}^{(k+1)T} e^{\mathbf{A}((k+1)T - \tau)} d\tau \right) \mathbf{B}\mathbf{u}(kT) $$

Let's analyze the integral term. Let $\sigma = (k+1)T - \tau$. Then $d\sigma = -d\tau$. When $\tau = kT$, $\sigma = T$. When $\tau = (k+1)T$, $\sigma = 0$.

$$ \int_{kT}^{(k+1)T} e^{\mathbf{A}((k+1)T - \tau)} d\tau = \int_{T}^{0} e^{\mathbf{A}\sigma} (-d\sigma) = \int_{0}^{T} e^{\mathbf{A}\sigma} d\sigma $$

So, the state equation at the sampling instants becomes:

$$ \mathbf{x}((k+1)T) = e^{\mathbf{A}T} \mathbf{x}(kT) + \left( \int_{0}^{T} e^{\mathbf{A}\sigma} d\sigma \right) \mathbf{B}\mathbf{u}(kT) $$

We can now define the discrete-time state-space matrices:

*   **Discrete-time state matrix ($\mathbf{A}_d$):** $\mathbf{A}_d = e^{\mathbf{A}T}$
*   **Discrete-time input matrix ($\mathbf{B}_d$):** $\mathbf{B}_d = \left( \int_{0}^{T} e^{\mathbf{A}\sigma} d\sigma \right) \mathbf{B}$

The discrete-time state equation is then:

$$ \mathbf{x}[k+1] = \mathbf{A}_d \mathbf{x}[k] + \mathbf{B}_d \mathbf{u}[k] $$

where $\mathbf{x}[k] = \mathbf{x}(kT)$ and $\mathbf{u}[k] = \mathbf{u}(kT)$.

The output equation can be discretized similarly. Assuming $\mathbf{u}(t) = \mathbf{u}(kT)$ for $kT \le t < (k+1)T$, we have:

$$ \mathbf{y}[k] = \mathbf{C}\mathbf{x}[k] + \mathbf{D}\mathbf{u}[k] $$

**Note:** The output matrix $\mathbf{C}$ and feedforward matrix $\mathbf{D}$ generally remain unchanged during discretization under the ZOH assumption, as they relate the output directly to the state and input at the sampling instant. However, if the output is defined as an integral of some state or if the ZOH has a significant impact on the output dynamics between samples, $\mathbf{C}$ might also be discretized. For standard practice, we assume $\mathbf{C}_d = \mathbf{C}$ and $\mathbf{D}_d = \mathbf{D}$.

### Calculating $\mathbf{A}_d$ and $\mathbf{B}_d$:

The calculation of $e^{\mathbf{A}T}$ and the integral term $\int_{0}^{T} e^{\mathbf{A}\sigma} d\sigma$ depends on the nature of the matrix $\mathbf{A}$.

**Case 1: $\mathbf{A}$ is a diagonal matrix**

If $\mathbf{A} = \text{diag}(\lambda_1, \lambda_2, \dots, \lambda_n)$, then:

$$ e^{\mathbf{A}T} = \text{diag}(e^{\lambda_1 T}, e^{\lambda_2 T}, \dots, e^{\lambda_n T}) $$

And the integral term:

$$ \int_{0}^{T} e^{\mathbf{A}\sigma} d\sigma = \int_{0}^{T} \text{diag}(e^{\lambda_1 \sigma}, \dots, e^{\lambda_n \sigma}) d\sigma = \text{diag}\left(\int_{0}^{T} e^{\lambda_1 \sigma} d\sigma, \dots, \int_{0}^{T} e^{\lambda_n \sigma} d\sigma\right) $$
$$ \int_{0}^{T} e^{\lambda_i \sigma} d\sigma = \begin{cases} \frac{e^{\lambda_i T} - 1}{\lambda_i} & \text{if } \lambda_i \neq 0 \\ T & \text{if } \lambda_i = 0 \end{cases} $$

**Case 2: $\mathbf{A}$ is a non-diagonalizable matrix or for general computation**

For a general matrix $\mathbf{A}$, we can use the **Padé Approximation** or the **Taylor Series Expansion** of the exponential function.

**Method 1: Taylor Series Expansion**

$$ e^{\mathbf{A}T} \approx \mathbf{I} + \mathbf{A}T + \frac{(\mathbf{A}T)^2}{2!} + \frac{(\mathbf{A}T)^3}{3!} + \dots $$

The integral term can be expanded as:

$$ \int_{0}^{T} e^{\mathbf{A}\sigma} d\sigma = \int_{0}^{T} \left( \mathbf{I} + \mathbf{A}\sigma + \frac{(\mathbf{A}\sigma)^2}{2!} + \dots \right) d\sigma $$
$$ = T\mathbf{I} + \frac{\mathbf{A}T^2}{2!} + \frac{\mathbf{A}^2 T^3}{3!} + \dots $$

**Important Point:** The accuracy of these approximations increases with the number of terms included. For small sampling times $T$, the first few terms usually provide a good approximation.

**Method 2: Jordan Canonical Form (for theoretical understanding)**

If $\mathbf{A}$ can be transformed into its Jordan canonical form $\mathbf{J}$ using a similarity transformation $\mathbf{A} = \mathbf{P}\mathbf{J}\mathbf{P}^{-1}$, then $e^{\mathbf{A}T} = \mathbf{P}e^{\mathbf{J}T}\mathbf{P}^{-1}$. This can simplify computations if $\mathbf{J}$ is simple. However, computing $\mathbf{P}$ and $\mathbf{J}$ can be numerically sensitive.

**Method 3: Direct computation of the matrix exponential**

Many numerical software packages (like MATLAB, SciPy in Python) have built-in functions to compute the matrix exponential $e^{\mathbf{A}T}$ and the integral $\int_{0}^{T} e^{\mathbf{A}\sigma} d\sigma$.

**A more robust analytical method for the integral term:**

If $\mathbf{A}$ has distinct eigenvalues $\lambda_1, \dots, \lambda_n$, then $e^{\mathbf{A}T} = \sum_{i=1}^n e^{\lambda_i T} \mathbf{M}_i$, where $\mathbf{M}_i$ are matrices.
Similarly, $\int_{0}^{T} e^{\mathbf{A}\sigma} d\sigma = \sum_{i=1}^n \frac{e^{\lambda_i T} - 1}{\lambda_i} \mathbf{M}_i$.

**A general closed-form expression for the integral $\int_{0}^{T} e^{\mathbf{A}\sigma} d\sigma$:**

Let $\boldsymbol{\Phi}(T) = e^{\mathbf{A}T}$. Then, if $\mathbf{A}$ is invertible,
$$ \int_{0}^{T} e^{\mathbf{A}\sigma} d\sigma = \mathbf{A}^{-1} (e^{\mathbf{A}T} - \mathbf{I}) = \mathbf{A}^{-1} (\boldsymbol{\Phi}(T) - \mathbf{I}) $$

If $\mathbf{A}$ is singular (not invertible), this formula cannot be directly applied. However, a generalized inverse can be used, or the Taylor series/Padé approximation is more practical.

**Alternative approach using the companion form:**

For single-input single-output (SISO) systems, if $\mathbf{A}$ is in companion form, there are specific methods to derive $\mathbf{A}_d$ and $\mathbf{B}_d$.

**Key Equation for $\mathbf{B}_d$ when $\mathbf{A}$ is invertible:**
$$ \mathbf{B}_d = \mathbf{A}^{-1}(\mathbf{A}_d - \mathbf{I})\mathbf{B} $$

**Important Note on Calculating $\mathbf{A}_d$ and $\mathbf{B}_d$ for non-diagonal matrices:**
Many control system texts and software (like MATLAB's `c2d` function) use an approach based on the augmented matrix:

$$ \mathbf{G} = \begin{bmatrix} \mathbf{A} & \mathbf{B} \\ \mathbf{0} & \mathbf{0} \end{bmatrix} $$

Then:
$$ e^{\mathbf{G}T} = \begin{bmatrix} e^{\mathbf{A}T} & \left(\int_{0}^{T} e^{\mathbf{A}\sigma} d\sigma\right) \mathbf{B} \\ \mathbf{0} & \mathbf{I} \end{bmatrix} = \begin{bmatrix} \mathbf{A}_d & \mathbf{B}_d \\ \mathbf{0} & \mathbf{I} \end{bmatrix} $$

This method is numerically stable and avoids separate computations.

### Discretization of Output Equations

Assuming a ZOH for the input and that the output is measured at the sampling instants:

$$ \mathbf{y}[k] = \mathbf{C}\mathbf{x}[k] + \mathbf{D}\mathbf{u}[k] $$

Thus, $\mathbf{C}_d = \mathbf{C}$ and $\mathbf{D}_d = \mathbf{D}$.

However, if the output is defined as an integral over the sampling period, or if the ZOH affects the output differently, the output matrix might need modification. For example, if $\mathbf{y}(t)$ is the integral of some internal state.

**Example:** If $\mathbf{y}(t) = \int_{0}^{t} \mathbf{x}(\tau) d\tau$. Then $\mathbf{y}[k] = \int_{0}^{kT} \mathbf{x}(\tau) d\tau$. This is not directly the output at the sampling instant.

For standard output equations like $\mathbf{y}(t) = \mathbf{C}\mathbf{x}(t) + \mathbf{D}\mathbf{u}(t)$, the discrete-time output equation is typically $\mathbf{y}[k] = \mathbf{C}_d \mathbf{x}[k] + \mathbf{D}_d \mathbf{u}[k]$ where $\mathbf{C}_d = \mathbf{C}$ and $\mathbf{D}_d = \mathbf{D}$.

## 4. Examples

**Example 1: Simple First-Order System**

Consider the continuous-time system:
$$ \dot{x}(t) = -2x(t) + u(t) $$
$$ y(t) = x(t) $$

Here, $A = -2$, $B = 1$, $C = 1$, $D = 0$.
Let the sampling time be $T = 0.1$ seconds.

**Discretization:**

$\mathbf{A}_d = e^{AT} = e^{(-2)(0.1)} = e^{-0.2} \approx 0.8187$

$\mathbf{B}_d = \int_{0}^{T} e^{A\sigma} d\sigma B = \left( \frac{e^{AT} - 1}{A} \right) B = \left( \frac{e^{-0.2} - 1}{-2} \right) (1) = \frac{0.8187 - 1}{-2} = \frac{-0.1813}{-2} \approx 0.09065$

$\mathbf{C}_d = C = 1$
$\mathbf{D}_d = D = 0$

The discrete-time state-space equations are:
$$ x[k+1] = 0.8187 x[k] + 0.09065 u[k] $$
$$ y[k] = x[k] $$

**Reference:** This method is fundamental and discussed in detail in Ogata (2009), Chapter 2, and Philips & Nagle (1984), Chapter 3.

**Example 2: Second-Order System (using MATLAB's `c2d` logic)**

Consider the continuous-time system:
$$ \dot{\mathbf{x}}(t) = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} \mathbf{x}(t) + \begin{bmatrix} 0 \\ 1 \end{bmatrix} u(t) $$
$$ \mathbf{y}(t) = \begin{bmatrix} 1 & 0 \end{bmatrix} \mathbf{x}(t) $$

Here, $\mathbf{A} = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix}$, $\mathbf{B} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$, $\mathbf{C} = \begin{bmatrix} 1 & 0 \end{bmatrix}$, $\mathbf{D} = 0$.
Let the sampling time be $T = 0.5$ seconds.

We use the augmented matrix method:
$$ \mathbf{G} = \begin{bmatrix} \mathbf{A} & \mathbf{B} \\ \mathbf{0} & \mathbf{0} \end{bmatrix} = \begin{bmatrix} 0 & 1 & 0 \\ -2 & -3 & 1 \\ 0 & 0 & 0 \end{bmatrix} $$

Now, we need to compute $e^{\mathbf{G}T}$ where $T=0.5$.
$$ \mathbf{G}T = \begin{bmatrix} 0 & 0.5 & 0 \\ -1 & -1.5 & 0.5 \\ 0 & 0 & 0 \end{bmatrix} $$

Using a numerical tool (like MATLAB `expm(G*T)`):
$$ e^{\mathbf{G}T} \approx \begin{bmatrix} 0.7788 & 0.7358 & 0.2162 \\ -1.4715 & -0.7358 & 0.2162 \\ 0 & 0 & 1.0000 \end{bmatrix} $$

Comparing with the form $\begin{bmatrix} \mathbf{A}_d & \mathbf{B}_d \\ \mathbf{0} & \mathbf{I} \end{bmatrix}$:
$$ \mathbf{A}_d = \begin{bmatrix} 0.7788 & 0.7358 \\ -1.4715 & -0.7358 \end{bmatrix} $$
$$ \mathbf{B}_d = \begin{bmatrix} 0.2162 \\ 0.2162 \end{bmatrix} $$
$$ \mathbf{C}_d = \mathbf{C} = \begin{bmatrix} 1 & 0 \end{bmatrix} $$
$$ \mathbf{D}_d = \mathbf{D} = 0 $$

The discrete-time state-space equations are:
$$ \mathbf{x}[k+1] = \begin{bmatrix} 0.7788 & 0.7358 \\ -1.4715 & -0.7358 \end{bmatrix} \mathbf{x}[k] + \begin{bmatrix} 0.2162 \\ 0.2162 \end{bmatrix} u[k] $$
$$ y[k] = \begin{bmatrix} 1 & 0 \end{bmatrix} \mathbf{x}[k] $$

**Reference:** This approach is common in numerical methods for discretization and is often the basis for functions like MATLAB's `c2d`. Franklin, Powell, & Workman (2005), Chapter 6, also covers discretization methods.

## 5. Discretization using Pole-Zero Mapping (for Transfer Functions)

While the primary focus is on state-space, it's worth noting that for SISO systems, transfer functions can also be discretized by mapping poles and zeros. However, this method is less general for state-space design as it doesn't directly provide the discrete-time state-space matrices $\mathbf{A}_d$ and $\mathbf{B}_d$. The state-space approach is more fundamental for control design.

**Important:** When discretizing from a continuous-time state-space model to a discrete-time state-space model, the matrix exponential method is the standard and most appropriate approach.

## 6. Relation to Course Outcomes

*   **CO1: Model and analyse discrete-time system using pulse transfer function approach.**
    *   Discretization allows us to obtain the discrete-time state-space representation, from which a pulse transfer function can be derived (e.g., $G(z) = \mathbf{C}_d(z\mathbf{I} - \mathbf{A}_d)^{-1}\mathbf{B}_d + \mathbf{D}_d$). This topic directly supports the ability to model discrete-time systems.
*   **CO3: Model and analyse discrete-time system using state space approach.**
    *   This entire topic is dedicated to converting continuous-time state-space models into discrete-time state-space models, which is a fundamental step in modeling discrete-time systems using state-space.
*   **CO4: Design discrete-time state feedback controllers and observers for a linear system.**
    *   To design controllers and observers for a physical system that is being controlled digitally, we first need to discretize its continuous-time state-space model. The resulting $\mathbf{A}_d, \mathbf{B}_d, \mathbf{C}_d$ matrices are what are used in the design of discrete-time controllers (e.g., pole placement) and observers (e.g., Kalman filters).

## 7. Practice Questions

**Question 1:**
Given the continuous-time state-space system:
$$ \dot{x}(t) = -0.5x(t) + 2u(t) $$
$$ y(t) = x(t) $$
Discretize this system with a sampling time $T = 0.2$ seconds using the exact method.
(Knowledge Level: K3)

**Question 2:**
Consider the continuous-time system:
$$ \dot{\mathbf{x}}(t) = \begin{bmatrix} -1 & 0 \\ 0 & -2 \end{bmatrix} \mathbf{x}(t) + \begin{bmatrix} 1 \\ 1 \end{bmatrix} u(t) $$
$$ \mathbf{y}(t) = \begin{bmatrix} 1 & 0 \end{bmatrix} \mathbf{x}(t) $$
Discretize this system with a sampling time $T = 1$ second.
(Knowledge Level: K3)

**Question 3:**
Explain the importance of the Zero-Order Hold (ZOH) in the discretization process of continuous-time state-space equations.
(Knowledge Level: K2)

## 8. Answers to Practice Questions

**Answer 1:**
Given $A = -0.5$, $B = 2$, $C = 1$, $D = 0$, and $T = 0.2$.

$\mathbf{A}_d = e^{AT} = e^{(-0.5)(0.2)} = e^{-0.1} \approx 0.9048$

$\mathbf{B}_d = \left( \frac{e^{AT} - 1}{A} \right) B = \left( \frac{e^{-0.1} - 1}{-0.5} \right) (2) = \left( \frac{0.9048 - 1}{-0.5} \right) (2) = \left( \frac{-0.0952}{-0.5} \right) (2) = (0.1904) (2) \approx 0.3808$

$\mathbf{C}_d = C = 1$
$\mathbf{D}_d = D = 0$

Discrete-time system:
$$ x[k+1] = 0.9048 x[k] + 0.3808 u[k] $$
$$ y[k] = x[k] $$

**Answer 2:**
Given $A = \begin{bmatrix} -1 & 0 \\ 0 & -2 \end{bmatrix}$, $B = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$, $C = \begin{bmatrix} 1 & 0 \end{bmatrix}$, $D = 0$, and $T = 1$.

Since $\mathbf{A}$ is a diagonal matrix:
$\mathbf{A}_d = e^{\mathbf{A}T} = \begin{bmatrix} e^{-1 \cdot 1} & 0 \\ 0 & e^{-2 \cdot 1} \end{bmatrix} = \begin{bmatrix} e^{-1} & 0 \\ 0 & e^{-2} \end{bmatrix} \approx \begin{bmatrix} 0.3679 & 0 \\ 0 & 0.1353 \end{bmatrix}$

$\mathbf{B}_d = \left( \int_{0}^{T} e^{\mathbf{A}\sigma} d\sigma \right) \mathbf{B}$
The integral term is:
$\int_{0}^{1} e^{\mathbf{A}\sigma} d\sigma = \begin{bmatrix} \frac{e^{-1} - 1}{-1} & 0 \\ 0 & \frac{e^{-2} - 1}{-2} \end{bmatrix} = \begin{bmatrix} 1 - e^{-1} & 0 \\ 0 & \frac{1 - e^{-2}}{2} \end{bmatrix} \approx \begin{bmatrix} 0.6321 & 0 \\ 0 & 0.4323 \end{bmatrix}$

$\mathbf{B}_d = \begin{bmatrix} 0.6321 & 0 \\ 0 & 0.4323 \end{bmatrix} \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 0.6321 \\ 0.4323 \end{bmatrix}$

$\mathbf{C}_d = C = \begin{bmatrix} 1 & 0 \end{bmatrix}$
$\mathbf{D}_d = D = 0$

Discrete-time system:
$$ \mathbf{x}[k+1] = \begin{bmatrix} 0.3679 & 0 \\ 0 & 0.1353 \end{bmatrix} \mathbf{x}[k] + \begin{bmatrix} 0.6321 \\ 0.4323 \end{bmatrix} u[k] $$
$$ \mathbf{y}[k] = \begin{bmatrix} 1 & 0 \end{bmatrix} \mathbf{x}[k] $$

**Answer 3:**
The Zero-Order Hold (ZOH) is a crucial component in the discretization process. It samples the continuous-time input signal $\mathbf{u}(t)$ at discrete instants $kT$ and holds this sampled value constant for the entire duration of the sampling interval $[kT, (k+1)T)$. This is necessary because digital controllers generate discrete output signals (commands), which are typically applied to the physical system through an actuator that acts as a ZOH. By assuming a ZOH, we can derive the exact relationship between the state vectors at consecutive sampling instants, effectively converting the continuous-time differential equations into discrete-time difference equations. Without this assumption, it would be difficult to define a direct relationship for the system's evolution over discrete time steps.

## 9. Important Points to Remember

*   **ZOH Assumption:** The discretization formulas derived ($\mathbf{A}_d = e^{\mathbf{A}T}$, $\mathbf{B}_d = \int_{0}^{T} e^{\mathbf{A}\sigma} d\sigma \mathbf{B}$) are based on the assumption that the input is held constant over each sampling period.
*   **Matrix Exponential:** The core of discretization involves computing the matrix exponential $e^{\mathbf{A}T}$ and the integral of the matrix exponential.
*   **Numerical Methods:** For general matrices $\mathbf{A}$, numerical methods or approximations (like Taylor series or Padé approximation) are often used. The augmented matrix approach is numerically stable.
*   **Output Matrix:** Under the standard ZOH assumption, $\mathbf{C}_d = \mathbf{C}$ and $\mathbf{D}_d = \mathbf{D}$, but this might vary depending on how the output is defined.
*   **Sampling Time (T):** The choice of sampling time is critical. A smaller $T$ generally leads to a more accurate discretization and better performance but requires faster digital hardware. The sampling frequency ($1/T$) should be significantly higher than the system's bandwidth (Nyquist-Shannon theorem).
*   **Impact on System Properties:** Discretization can affect system properties like stability margins and transient response. The discrete-time system is an approximation of the continuous-time system within the sampling instants.
*   **Purpose:** The primary goal of discretization is to enable the design and implementation of digital controllers for continuous-time systems using state-space techniques.

This concludes the study notes on the discretization of continuous-time state-space equations. This topic is foundational for implementing digital control designs discussed in subsequent modules.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
