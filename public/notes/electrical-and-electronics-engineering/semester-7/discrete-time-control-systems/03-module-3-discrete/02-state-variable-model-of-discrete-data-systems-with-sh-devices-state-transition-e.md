---
title: "State variable model of discrete data systems with S/H devices - State transition equations, state diagrams."
subject: "DISCRETE TIME CONTROL SYSTEMS"
module: "Module 3: Discrete"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368d8"
status: "completed"
scrapedAt: "2026-05-23T16:36:22.513Z"
---
# Module 3: Discrete - State-Variable Model of Discrete-Data Systems with Sample-and-Hold (S/H) Devices

## 1. Introduction to Discrete-Data Systems and S/H Devices

Discrete-time control systems process information at discrete instants of time. This is typically achieved by sampling a continuous-time signal using an Analog-to-Digital Converter (ADC). However, for a digital controller to interact with a continuous-time plant, the discrete output of the controller needs to be converted back to a continuous-time signal. This is where the Sample-and-Hold (S/H) device plays a crucial role.

**Key Concepts:**

*   **Discrete-Time Signal:** A signal that exists only at specific, discrete instants of time ($nT$).
*   **Continuous-Time Signal:** A signal that exists for all values of time.
*   **Sampling:** The process of converting a continuous-time signal into a discrete-time signal by taking its values at regular intervals of time ($T$, the sampling period).
*   **Quantization:** The process of converting the sampled continuous-valued signal into a discrete-valued signal. This is part of the ADC.
*   **Digital-to-Analog Converter (DAC):** Converts a discrete-valued, discrete-time signal into a continuous-time, discrete-valued signal.
*   **Sample-and-Hold (S/H) Device:** A device that holds the last sampled value of a signal constant until the next sample is taken. This effectively converts a train of impulses (from the DAC output) into a piecewise-constant continuous-time signal.

**Role of S/H Device:**

The S/H device is essential for interfacing a digital controller with a continuous-time plant. The digital controller produces a sequence of discrete-time values, $u(nT)$. The DAC converts this into a train of impulse functions with weights equal to the digital control signal values. The S/H device then integrates these impulses over the sampling period, producing a continuous-time control signal that is held constant between samples. This piecewise-constant signal is what the continuous-time plant receives.

**Textbook References:**

*   **Ogata (2009):** Chapter 1 (Introduction to Discrete-Time Control Systems), Chapter 3 (Sampled-Data Systems).
*   **Philips and Nagle (1984):** Chapter 2 (The z-Transform), Chapter 4 (Discrete-Time Systems).
*   **Gopal (1997):** Chapter 1 (Introduction to Digital Control), Chapter 2 (Sampled Data Systems).

**Alignment with Course Outcomes:**

*   **CO1 (K3):** Understanding the role of S/H devices is fundamental to modeling discrete-time systems and their interaction with continuous-time plants, which is a core aspect of the pulse transfer function approach.
*   **CO3 (K3):** This topic directly addresses the modeling of discrete-time systems using state-space representations, particularly in the context of continuous-time plants controlled by digital controllers with S/H.

## 2. State-Variable Model of Discrete-Data Systems

The state-variable approach provides a more general and powerful method for analyzing and designing control systems, especially for multi-input, multi-output (MIMO) systems. For discrete-data systems, we aim to derive a discrete-time state-space representation.

### 2.1 Continuous-Time State-Space Model

Consider a linear time-invariant (LTI) continuous-time plant described by the state-space equations:

$$
\dot{x}_c(t) = A_c x_c(t) + B_c u_c(t)
$$
$$
y_c(t) = C_c x_c(t) + D_c u_c(t)
$$

where:
*   $x_c(t) \in \mathbb{R}^n$ is the continuous-time state vector.
*   $u_c(t) \in \mathbb{R}^m$ is the continuous-time input vector.
*   $y_c(t) \in \mathbb{R}^p$ is the continuous-time output vector.
*   $A_c, B_c, C_c, D_c$ are constant matrices of appropriate dimensions.

### 2.2 Discrete-Time State-Space Model with S/H

When a digital controller samples the system's input $u_c(t)$ at times $nT$ and holds the value constant over the interval $[nT, (n+1)T)$, the continuous-time input $u_c(t)$ becomes a piecewise-constant signal. Let the output of the digital controller at time $nT$ be $u(nT)$. The input to the continuous-time plant for $t \in [nT, (n+1)T)$ is $u_c(t) = u(nT)$.

The solution to the continuous-time state-space equation for $t \in [nT, (n+1)T)$ is:

$$
x_c(t) = e^{A_c(t-nT)} x_c(nT) + \int_{nT}^{t} e^{A_c(t-\tau)} B_c u_c(\tau) d\tau
$$

Let $x(n) = x_c(nT)$ be the state vector at discrete sampling instant $nT$. Substituting $u_c(\tau) = u(nT)$ for $\tau \in [nT, (n+1)T)$, we get:

$$
x_c(t) = e^{A_c(t-nT)} x(n) + \int_{nT}^{t} e^{A_c(t-\tau)} B_c u(nT) d\tau
$$

To obtain the discrete-time state-transition equation, we evaluate $x_c(t)$ at $t = (n+1)T$:

$$
x((n+1)T) = e^{A_c T} x(nT) + \int_{nT}^{(n+1)T} e^{A_c((n+1)T-\tau)} B_c u(nT) d\tau
$$

Let $k = n+1$ and $\sigma = (n+1)T - \tau$. Then $d\tau = -d\sigma$, and when $\tau = nT$, $\sigma = T$; when $\tau = (n+1)T$, $\sigma = 0$.

$$
x(n+1) = e^{A_c T} x(n) + \int_{T}^{0} e^{A_c \sigma} B_c u(n) (-d\sigma)
$$
$$
x(n+1) = e^{A_c T} x(n) + \int_{0}^{T} e^{A_c \sigma} B_c u(n) d\sigma
$$

This gives the discrete-time state-transition equation:

$$
x(n+1) = A x(n) + B u(n)
$$

where:
*   $x(n) \in \mathbb{R}^n$ is the discrete-time state vector at sampling instant $nT$.
*   $u(n) \in \mathbb{R}^m$ is the discrete-time input vector at sampling instant $nT$.
*   $A = e^{A_c T}$ is the discrete-time state transition matrix.
*   $B = \int_{0}^{T} e^{A_c \sigma} B_c d\sigma$ is the discrete-time input matrix.

**Derivation of A and B:**

*   **A:** $A = e^{A_c T}$ is the matrix exponential of $A_c T$.
*   **B:** The integral for $B$ can be evaluated using the matrix exponential series expansion or specific properties depending on the form of $A_c$.

**Example:**
If $A_c$ is invertible, then:
$$
B = A_c^{-1}(e^{A_c T} - I) B_c = A_c^{-1}(A - I) B_c
$$

**Important Point to Remember:** The discrete-time state matrices $A$ and $B$ depend on the continuous-time system matrices ($A_c, B_c$) and the sampling period ($T$).

**Output Equation:**
The discrete-time output equation is obtained by evaluating the continuous-time output at the sampling instants:

$$
y(n) = y_c(nT) = C_c x_c(nT) + D_c u_c(nT)
$$
$$
y(n) = C_c x(n) + D_c u(n)
$$

where:
*   $y(n) \in \mathbb{R}^p$ is the discrete-time output vector at sampling instant $nT$.
*   $C = C_c$ and $D = D_c$ are the discrete-time output and feedforward matrices, respectively.

**Textbook References:**

*   **Ogata (2009):** Chapter 3 (Sampled-Data Systems), Section 3.3 (State-Space Representation of Sampled-Data Systems).
*   **Philips and Nagle (1984):** Chapter 5 (State-Variable Analysis), Section 5.5 (Digital Control of Continuous-Time Systems).
*   **Gopal (1997):** Chapter 2 (Sampled Data Systems), Section 2.4 (State-Space Representation of Sampled-Data Systems).

**Alignment with Course Outcomes:**

*   **CO3 (K3):** This section directly addresses the core of modeling discrete-time systems using state-space, specifically how to derive these equations from a continuous-time plant under S/H control.

## 3. State Transition Equations

The state transition equation is the fundamental equation that describes how the state of a discrete-time system evolves from one sampling instant to the next. For a linear time-invariant discrete-time system, it is given by:

$$
x(n+1) = A x(n) + B u(n)
$$

This equation can be iterated to find the state at any future time instant, given the initial state $x(0)$ and the sequence of inputs $u(0), u(1), u(2), \dots$.

**Deriving State at Time k:**

*   $x(1) = A x(0) + B u(0)$
*   $x(2) = A x(1) + B u(1) = A(A x(0) + B u(0)) + B u(1) = A^2 x(0) + A B u(0) + B u(1)$
*   $x(3) = A x(2) + B u(2) = A(A^2 x(0) + A B u(0) + B u(1)) + B u(2) = A^3 x(0) + A^2 B u(0) + A B u(1) + B u(2)$

In general, the state vector at time $n$ is given by:

$$
x(n) = A^n x(0) + \sum_{i=0}^{n-1} A^{n-1-i} B u(i)
$$

This equation shows that the state at time $n$ is composed of two parts:
1.  **Zero-input response:** $A^n x(0)$ – the response due to the initial state with zero input.
2.  **Zero-state response:** $\sum_{i=0}^{n-1} A^{n-1-i} B u(i)$ – the response due to the input sequence $u(0), u(1), \dots, u(n-1)$ when the initial state is zero.

**Output Equation:**
The output at time $n$ is given by:

$$
y(n) = C x(n) + D u(n)
$$

Substituting the expression for $x(n)$:

$$
y(n) = C \left( A^n x(0) + \sum_{i=0}^{n-1} A^{n-1-i} B u(i) \right) + D u(n)
$$

**Textbook References:**

*   **Ogata (2009):** Chapter 4 (State-Space Analysis of Discrete-Time Systems), Section 4.1 (State-Space Representation of Discrete-Time Systems).
*   **Gopal (1997):** Chapter 3 (State-Space Analysis of Discrete-Time Systems), Section 3.1 (State-Space Representation).

**Alignment with Course Outcomes:**

*   **CO3 (K3):** The state transition equation is the fundamental equation for analyzing discrete-time systems in the state-space domain.

## 4. State Diagrams

State diagrams are graphical representations of discrete-time state-space models. They visually illustrate the flow of information between states and inputs, and how outputs are generated. A state diagram is particularly useful for understanding the dynamic behavior of the system and for designing controllers.

**Components of a State Diagram:**

*   **States:** Represented by circles or rectangles. Each state variable $x_i(n)$ is represented by a state.
*   **Inputs:** Represented by arrows or labels pointing into the state diagram. The input signal $u(n)$ influences the state transitions.
*   **Outputs:** Represented by labels associated with the output generation logic.
*   **State Transitions:** Arrows indicating how the state at time $n+1$ is determined from the state at time $n$ and the input $u(n)$.
*   **Delay Elements (z⁻¹):** Represent the storage of the state from the previous time instant.

**Constructing a State Diagram for $x(n+1) = A x(n) + B u(n)$ and $y(n) = C x(n) + D u(n)$:**

Let $A = \begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{bmatrix}$, $B = \begin{bmatrix} b_1 \\ b_2 \end{bmatrix}$, $C = \begin{bmatrix} c_1 & c_2 \end{bmatrix}$, $D = d$.
The state equations are:
$x_1(n+1) = a_{11} x_1(n) + a_{12} x_2(n) + b_1 u(n)$
$x_2(n+1) = a_{21} x_1(n) + a_{22} x_2(n) + b_2 u(n)$
$y(n) = c_1 x_1(n) + c_2 x_2(n) + d u(n)$

**Steps to Draw the State Diagram:**

1.  **Draw State Boxes:** For each state variable ($x_1(n), x_2(n)$), draw a box or circle.
2.  **Add Delay Elements:** Each state variable at time $n+1$ depends on the state variables at time $n$ passed through a delay ($z^{-1}$). So, inside each state box, we conceptually have a $z^{-1}$ operator. The output of $z^{-1}$ represents the state at the current time instant $x_i(n)$.
3.  **Show State Transitions:**
    *   For $x_1(n+1)$: Draw arrows from the $x_1(n)$ and $x_2(n)$ outputs (after their $z^{-1}$ elements) to the input of the $x_1(n+1)$ box, scaled by $a_{11}$ and $a_{12}$ respectively.
    *   Also, draw an arrow from the input $u(n)$ to the $x_1(n+1)$ box, scaled by $b_1$.
    *   Repeat for $x_2(n+1)$ with $a_{21}, a_{22}, b_2$.
4.  **Show Output Generation:**
    *   Draw arrows from the $x_1(n)$ and $x_2(n)$ outputs to a summing point for the output $y(n)$, scaled by $c_1$ and $c_2$ respectively.
    *   Draw an arrow from the input $u(n)$ to the same summing point, scaled by $d$.

**Example State Diagram (for the above 2nd order system):**

```
      +-------+      a11         +-------+
u(n) ---|* b1   |----->| z^-1 x1(n)|-------+----->| Summing point for x1(n+1) ----> x1(n+1)
        +-------+      +-------+       |  a12
                       ^               |
                       |               |
                       |   +-------+   |
                       +---| z^-1 x2(n)|-------+
                           +-------+   | a21
                               |       |
                               |       |
      +-------+              |       |
u(n) ---|* b2   |--------------+       |
        +-------+                      |
                                       |
                                       |  a22
                                       |
                                       v
                                 +-------+
                                 | Summing point for x2(n+1) ----> x2(n+1)
                                 +-------+
                                     ^
                                     | c1
                                     |
                                     +-----------> y(n) (via sum)
                                     | c2
                                     |
                                     +-----------> y(n) (via sum)
                                     | d
                                     |
                                     +-----------> y(n) (via sum)
```
**Simplified Representation:**

A more compact way to draw state diagrams is to represent the $z^{-1}$ operator implicitly within the state boxes and show the connections directly.

```
      +------------------+
u(n) ---| + b1           |---> x1(n+1)
        |                |
        | + a11          |
        | + a12          |
        +--------+       |
                 |       |
                 v       |
           +-------+     |
           | z^-1  |     |
    x1(n) ---|       |-----+
           +-------+     |
                 ^       |
                 | a21   |
                 |       |
                 | +-----+
                 |       |
                 |       |
                 |       |
                 |       |
      +------------------+
u(n) ---| + b2           |---> x2(n+1)
        |                |
        | + a21          |
        | + a22          |
        +--------+       |
                 |       |
                 v       |
           +-------+     |
           | z^-1  |     |
    x2(n) ---|       |-----+
           +-------+     |
                 ^       |
                 | a12   |
                 |       |
                 | +-----+
                 |       |
                 |       |
                 |       |
                 |       |
                 | c1    |
                 |       |
                 +-------+
                 | c2    |
                 |       |
                 +-------+
                 | d     |
                 |       |
                 +-----------> y(n)
```

**Alternative Representation (more common):**

```
           +-------+      a11       +-------+
  u(n) ---[+ b1    |----->| z^-1 x1 |-------+-----> x1(n+1)
           +-------+      +-------+       | a12
                                          |
                                          v
                                    +-------+
                                    | z^-1 x2 |------------------+
                                    +-------+                  | a21
                                          ^                    |
                                          |                    |
                                          |                    |
           +-------+      a21       +-------+                  |
  u(n) ---[+ b2    |----->| z^-1 x1 |--------------------------+
           +-------+      +-------+       | a22
                                          |
                                          v
                                    +-------+
                                    | z^-1 x2 |------------------+
                                    +-------+                  |

Output path:
      +-------+
x1(n) ----| c1    |----------------------------------------------+
      +-------+                                                  |
                                                                 |
      +-------+                                                  |
x2(n) ----| c2    |----------------------------------------------+------> y(n)
      +-------+                                                  |
                                                                 |
      +-------+                                                  |
u(n) -----| d     |----------------------------------------------+
      +-------+
```

**Textbook References:**

*   **Ogata (2009):** Chapter 4 (State-Space Analysis of Discrete-Time Systems), Section 4.1.3 (State-Diagram Representation).
*   **Gopal (1997):** Chapter 3 (State-Space Analysis of Discrete-Time Systems), Section 3.1.3 (State-Diagram Representation).
*   **Philips and Nagle (1984):** While this book focuses on z-transforms, understanding the underlying structure of discrete-time systems is implicitly linked to state diagrams.

**Alignment with Course Outcomes:**

*   **CO3 (K3):** State diagrams are a visual tool for understanding and manipulating discrete-time state-space models, aiding in analysis and design.

## 5. Example: Modeling a Continuous-Time System with S/H

Consider a continuous-time plant described by:
$$
\dot{x}_c(t) = -0.5 x_c(t) + 2 u_c(t)
$$
$$
y_c(t) = x_c(t)
$$

with a sampling period $T = 0.1$ seconds.
The digital controller outputs $u(n)$, which is held constant by an S/H device.

**1. Determine $A_c$ and $B_c$:**
$A_c = [-0.5]$
$B_c = [2]$
$C_c = [1]$
$D_c = [0]$

**2. Calculate the discrete-time matrices A and B:**
$A = e^{A_c T} = e^{-0.5 \times 0.1} = e^{-0.05}$

Using a calculator or series expansion: $e^{-0.05} \approx 1 - 0.05 + \frac{(-0.05)^2}{2!} - \dots \approx 0.9512$

So, $A = [0.9512]$

For $B$, since $A_c$ is invertible, we can use:
$B = A_c^{-1}(A - I) B_c$
$B = (-0.5)^{-1} (0.9512 - 1) [2]$
$B = -2 (-0.0488) [2]$
$B = 0.0976 \times 2 = [0.1952]$

**3. Discrete-Time State-Space Model:**
The discrete-time state-space model is:
$x(n+1) = [0.9512] x(n) + [0.1952] u(n)$
$y(n) = [1] x(n) + [0] u(n)$

**4. State Diagram:**

```
      +-------+
u(n) ---[+ 0.1952|----->| z^-1 x(n) |-------+-----> x(n+1)
        +-------+      +-------+       | 0.9512
                                       |
                                       v
                                 +-------+
      +-------+                | Sum   | ------> y(n)
u(n) ---[+ 0     |----------------+       |
        +-------+                +-------+
                                       ^
                                       | 1
                                       |
                                       +-----------> y(n)
```
**Simplified State Diagram:**

```
      +------------------+
u(n) ---| + 0.1952         |---> x(n+1)
        |                  |
        | + 0.9512         |
        +--------+         |
                 |         |
                 v         |
           +-------+       |
           | z^-1  |       |
    x(n) ---|       |-------+
           +-------+       |
                 ^         |
                 | 1       |
                 |         |
                 +-------------> y(n)
```

**Textbook References:**

*   **All textbooks:** All the listed textbooks provide examples for deriving discrete-time state-space models from continuous-time systems.

**Alignment with Course Outcomes:**

*   **CO3 (K3):** This example directly demonstrates the application of deriving discrete-time state-space models from continuous systems, which is crucial for CO3.

## 6. Practice Questions and Exercises

**Question 1:**
A continuous-time system is described by:
$$
\dot{x}_c(t) = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} x_c(t) + \begin{bmatrix} 0 \\ 1 \end{bmatrix} u_c(t)
$$
$$
y_c(t) = \begin{bmatrix} 1 & 0 \end{bmatrix} x_c(t)
$$
Derive the discrete-time state-space model for this system with a sampling period $T = 0.5$ seconds, assuming a zero-order hold (S/H device) at the input.

**Solution 1:**
Here, $A_c = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix}$, $B_c = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$, $C_c = \begin{bmatrix} 1 & 0 \end{bmatrix}$, $D_c = [0]$.
$T = 0.5$ seconds.

We need to calculate $A = e^{A_c T}$ and $B = \int_{0}^{T} e^{A_c \sigma} B_c d\sigma$.
The characteristic equation of $A_c$ is $\det(A_c - \lambda I) = \det \begin{bmatrix} -\lambda & 1 \\ -2 & -3-\lambda \end{bmatrix} = -\lambda(-3-\lambda) - (-2)(1) = 3\lambda + \lambda^2 + 2 = (\lambda+1)(\lambda+2)$.
The eigenvalues are $\lambda_1 = -1$ and $\lambda_2 = -2$.

Since the eigenvalues are distinct, we can use the Cayley-Hamilton theorem or partial fraction expansion for $e^{A_c T}$. A simpler approach for calculating $e^{A_c T}$ is to use the formula for a 2x2 matrix:
For $A_c = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$,
$e^{A_c T} = \frac{e^{\lambda_1 T} - e^{\lambda_2 T}}{\lambda_1 - \lambda_2} A_c + \frac{\lambda_1 e^{\lambda_2 T} - \lambda_2 e^{\lambda_1 T}}{\lambda_1 - \lambda_2} I$
Here, $\lambda_1 = -1, \lambda_2 = -2, T = 0.5$.
$\lambda_1 T = -0.5$, $\lambda_2 T = -1.0$.
$e^{-0.5} \approx 0.6065$, $e^{-1.0} \approx 0.3679$.
$\lambda_1 - \lambda_2 = -1 - (-2) = 1$.

$A = e^{A_c T} = \frac{0.6065 - 0.3679}{1} \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} + \frac{(-1)e^{-1} - (-2)e^{-0.5}}{1} \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$
$A = 0.2386 \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} + (-0.3679 + 2 \times 0.6065) \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$
$A = \begin{bmatrix} 0 & 0.2386 \\ -0.4772 & -0.7158 \end{bmatrix} + (0.8451) \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$
$A = \begin{bmatrix} 0.8451 & 0.2386 \\ -0.4772 & 0.1293 \end{bmatrix}$

Now for $B = A_c^{-1}(A - I) B_c$. First, $A_c$ is invertible:
$A_c^{-1} = \frac{1}{(0)(-3) - (1)(-2)} \begin{bmatrix} -3 & -1 \\ 2 & 0 \end{bmatrix} = \frac{1}{2} \begin{bmatrix} -3 & -1 \\ 2 & 0 \end{bmatrix} = \begin{bmatrix} -1.5 & -0.5 \\ 1 & 0 \end{bmatrix}$.

$A - I = \begin{bmatrix} 0.8451 & 0.2386 \\ -0.4772 & 0.1293 \end{bmatrix} - \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} -0.1549 & 0.2386 \\ -0.4772 & -0.8707 \end{bmatrix}$.

$B = \begin{bmatrix} -1.5 & -0.5 \\ 1 & 0 \end{bmatrix} \begin{bmatrix} -0.1549 & 0.2386 \\ -0.4772 & -0.8707 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix}$
$B = \begin{bmatrix} (-1.5)(-0.1549) + (-0.5)(-0.4772) & (-1.5)(0.2386) + (-0.5)(-0.8707) \\ (1)(-0.1549) + (0)(-0.4772) & (1)(0.2386) + (0)(-0.8707) \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix}$
$B = \begin{bmatrix} 0.23235 + 0.2386 & -0.3579 + 0.43535 \\ -0.1549 & 0.2386 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix}$
$B = \begin{bmatrix} 0.47095 & 0.07745 \\ -0.1549 & 0.2386 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 0.07745 \\ 0.2386 \end{bmatrix}$

The discrete-time state-space model is:
$x(n+1) = \begin{bmatrix} 0.8451 & 0.2386 \\ -0.4772 & 0.1293 \end{bmatrix} x(n) + \begin{bmatrix} 0.07745 \\ 0.2386 \end{bmatrix} u(n)$
$y(n) = \begin{bmatrix} 1 & 0 \end{bmatrix} x(n)$

**Question 2:**
Draw the state diagram for the discrete-time system described by:
$x_1(n+1) = 0.8 x_1(n) - 0.2 x_2(n) + u(n)$
$x_2(n+1) = 0.5 x_1(n) + 0.9 x_2(n)$
$y(n) = 0.3 x_1(n) + 0.1 x_2(n)$

**Solution 2:**
The state variables are $x_1(n)$ and $x_2(n)$. The input is $u(n)$, and the output is $y(n)$.

```
           +-------+      0.8       +-------+
  u(n) ---[+ 1     |----->| z^-1 x1 |-------+-----> x1(n+1)
           +-------+      +-------+       |-0.2
                                          |
                                          v
                                    +-------+
                                    | z^-1 x2 |------------------+
                                    +-------+                  | 0.5
                                          ^                    |
                                          |                    |
                                          |                    |
           +-------+      0.5       +-------+                  |
  u(n) ---[+ 0     |----->| z^-1 x1 |--------------------------+
           +-------+      +-------+       | 0.9
                                          |
                                          v
                                    +-------+
                                    | z^-1 x2 |------------------+
                                    +-------+                  |

Output path:
      +-------+
x1(n) ----| 0.3   |----------------------------------------------+
      +-------+                                                  |
                                                                 |
      +-------+                                                  |
x2(n) ----| 0.1   |----------------------------------------------+------> y(n)
      +-------+                                                  |
                                                                 |
      +-------+                                                  |
u(n) -----| 0     |----------------------------------------------+
      +-------+
```
*(Note: In the state diagram above, connections from u(n) to x2(n+1) are implicitly zero if not shown explicitly and scaled by zero.)*

**Textbook References:**

*   **Practice Questions:** These are designed to test understanding of the concepts covered.
*   **Answers:** The methodology for solving these questions is directly from the textbook material.

**Alignment with Course Outcomes:**

*   **CO3 (K3):** Both questions directly relate to modeling and analyzing discrete-time systems using the state-space approach.

## 7. Important Points to Remember

*   **S/H Device:** The Sample-and-Hold device is critical for interfacing digital controllers with continuous-time plants by converting a train of impulses into a piecewise-constant signal.
*   **Discrete-Time State Matrices:** The discrete-time state matrices $A$ and $B$ are derived from the continuous-time matrices $A_c$ and $B_c$ and the sampling period $T$.
*   **Matrix Exponential:** The calculation of $A = e^{A_c T}$ is a key step. For non-diagonalizable $A_c$, the Jordan form or other methods might be needed.
*   **Integral for B:** The integral $\int_{0}^{T} e^{A_c \sigma} B_c d\sigma$ for $B$ can be challenging to compute directly. Using matrix properties or series expansions is common. If $A_c$ is invertible, $B = A_c^{-1}(e^{A_c T} - I)B_c$.
*   **State Diagrams:** These provide a graphical representation that aids in understanding the system's dynamics and is useful for controller design.
*   **Consistency:** Ensure that the dimensions of matrices and vectors are consistent throughout the derivations.
*   **Sampling Period:** The choice of sampling period $T$ significantly impacts the discrete-time system matrices and its behavior.

## 8. Conclusion

This module has provided a comprehensive understanding of how to model discrete-data systems, particularly those involving continuous-time plants controlled by digital controllers with Sample-and-Hold devices, using the state-variable approach. We have covered the derivation of discrete-time state-space models, the fundamental state transition equations, and the visual representation through state diagrams. This foundation is crucial for the subsequent design of digital controllers and observers, aligning with the course outcomes, especially CO3.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
