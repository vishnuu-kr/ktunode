---
title: "Controllability"
subject: "DISCRETE TIME CONTROL SYSTEMS"
module: "Module 4: Design using State Space approach:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368e1"
status: "completed"
scrapedAt: "2026-05-23T16:36:33.346Z"
---
# Discrete Time Control Systems: Module 4 - Design using State Space Approach: Controllability

## Introduction to State Space Representation

Before diving into controllability, let's briefly recap the state-space representation of a discrete-time linear time-invariant (LTI) system:

The system dynamics are described by the state equation:
$x(k+1) = Ax(k) + Bu(k)$

And the output equation:
$y(k) = Cx(k) + Du(k)$

Where:
*   $x(k)$: state vector at time step $k$ (n-dimensional)
*   $u(k)$: input vector at time step $k$ (m-dimensional)
*   $y(k)$: output vector at time step $k$ (p-dimensional)
*   $A$: state matrix (n x n)
*   $B$: input matrix (n x m)
*   $C$: output matrix (p x n)
*   $D$: feedforward matrix (p x m)

This state-space representation is fundamental for analyzing and designing controllers using modern control theory, as highlighted in **Course Outcome 3 (CO3)**: "Model and analyse discrete-time system using state space approach." (Knowledge Level: K3).

## Controllability

### 1. Key Concepts and Definitions

**Controllability** is a fundamental property of a linear control system. It essentially asks whether it's possible to steer the system from any initial state to any desired final state within a finite number of sampling periods using the system's input signals.

**Definition of Controllability:**
A discrete-time linear time-invariant system is said to be **completely state controllable** (or simply controllable) if for any initial state $x(0)$ and any desired final state $x_f$ at time step $N$, there exists an input sequence $u(0), u(1), \dots, u(N-1)$ that transfers the system from $x(0)$ to $x_f$.

**Conceptual Understanding:**
*   If a system is controllable, we have full authority over its state vector using the input signal.
*   If a system is uncontrollable, there are certain directions in the state space that cannot be influenced by the input. The states along these uncontrollable directions will evolve according to their internal dynamics, regardless of the input applied.

**Textbook Reference:**
*   **K. Ogata (PHI Learning Private Limited, New Delhi, 2009.):** Ogata's "Discrete Time Control Systems" extensively covers controllability. Chapter 2, "State-Space Analysis of Discrete-Time Linear Systems," typically introduces controllability. He defines it as the ability to transfer the system from any initial state to any final state within a finite number of sampling periods.
*   **Philips and Nagle (Prentice Hall, 1984):** Their book also provides a thorough treatment of controllability, often in the context of designing state feedback controllers.

### 2. Controllability of Discrete-Time Systems

#### 2.1. Controllability Gramian Method

The most common method to check for controllability of a discrete-time system involves the **controllability matrix**.

**Controllability Matrix ($W_c$):**
The controllability matrix for a discrete-time system is defined as:
$W_c = [B \quad AB \quad A^2B \quad \dots \quad A^{n-1}B]$

Where $n$ is the order of the system (number of states).

**Controllability Test:**
A discrete-time LTI system described by $x(k+1) = Ax(k) + Bu(k)$ is **completely state controllable** if and only if the controllability matrix $W_c$ has **full rank**. Full rank means the rank of $W_c$ is equal to the dimension of the state vector, i.e., $rank(W_c) = n$.

**Alternative Controllability Test (using Controllability Gramian):**
The controllability Gramian $W_c$ can also be defined as:
$W_c = \sum_{i=0}^{n-1} (A^i B) (A^i B)^T$
The system is controllable if and only if $W_c$ is positive definite (i.e., invertible). For discrete-time systems, it's often easier to work with the controllability matrix $W_c$ directly, as shown above.

**Important Note:** The controllability matrix can be constructed by stacking the columns $B$, $AB$, $A^2B$, ..., $A^{n-1}B$.

#### 2.2. Pole-Zero Cancellation and Controllability

Controllability is closely related to the concept of pole-zero cancellations in the transfer function representation. If a mode of the system (represented by a pole of the transfer function) is not controllable, it means the input $u(k)$ cannot affect that particular mode of the system's behavior.

**Textbook Reference:**
*   **M. Gopal (Tata McGraw-Hill, 1997):** Gopal's book, "Digital Control and State Variable Methods," often discusses the relationship between state-space properties like controllability and the transfer function representation. He might illustrate how uncontrollable modes manifest as pole-zero cancellations in the system's transfer function.

### 3. Examples

**Example 1: A Controllable System**
Consider the discrete-time system:
$x(k+1) = \begin{bmatrix} 1 & 1 \\ 0 & 2 \end{bmatrix} x(k) + \begin{bmatrix} 1 \\ 1 \end{bmatrix} u(k)$

Here, $A = \begin{bmatrix} 1 & 1 \\ 0 & 2 \end{bmatrix}$ and $B = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$. The order of the system is $n=2$.

Let's construct the controllability matrix $W_c$:
$AB = \begin{bmatrix} 1 & 1 \\ 0 & 2 \end{bmatrix} \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 2 \\ 2 \end{bmatrix}$

$W_c = [B \quad AB] = \begin{bmatrix} 1 & 2 \\ 1 & 2 \end{bmatrix}$

Now, let's check the rank of $W_c$:
$rank(W_c) = 1$ (since the second column is a scalar multiple of the first column).

Since $rank(W_c) = 1 < n=2$, this system is **uncontrollable**.

**Example 2: Another Uncontrollable System**
Consider the system:
$x(k+1) = \begin{bmatrix} 0.5 & 0 \\ 0 & 0.2 \end{bmatrix} x(k) + \begin{bmatrix} 1 \\ 0 \end{bmatrix} u(k)$

Here, $A = \begin{bmatrix} 0.5 & 0 \\ 0 & 0.2 \end{bmatrix}$ and $B = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$. $n=2$.

$AB = \begin{bmatrix} 0.5 & 0 \\ 0 & 0.2 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 0.5 \\ 0 \end{bmatrix}$

$W_c = [B \quad AB] = \begin{bmatrix} 1 & 0.5 \\ 0 & 0 \end{bmatrix}$

$rank(W_c) = 1$ (since the second row is all zeros).
Since $rank(W_c) = 1 < n=2$, this system is also **uncontrollable**. Notice that the second state $x_2(k)$ is only affected by its own dynamics ($x_2(k+1) = 0.2 x_2(k)$) and not by the input $u(k)$ because the corresponding row in $B$ is zero.

**Example 3: A Controllable System**
Consider the system:
$x(k+1) = \begin{bmatrix} 0 & 1 \\ -0.2 & 1.1 \end{bmatrix} x(k) + \begin{bmatrix} 0 \\ 1 \end{bmatrix} u(k)$

Here, $A = \begin{bmatrix} 0 & 1 \\ -0.2 & 1.1 \end{bmatrix}$ and $B = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$. $n=2$.

$AB = \begin{bmatrix} 0 & 1 \\ -0.2 & 1.1 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ 1.1 \end{bmatrix}$

$W_c = [B \quad AB] = \begin{bmatrix} 0 & 1 \\ 1 & 1.1 \end{bmatrix}$

Let's calculate the determinant of $W_c$:
$det(W_c) = (0 \times 1.1) - (1 \times 1) = -1$

Since $det(W_c) = -1 \neq 0$, the rank of $W_c$ is 2.
Since $rank(W_c) = 2 = n$, this system is **controllable**.

**Reference for Examples:**
*   **G.F.Franklin, J. David Powell and M. Workman (3rd Ed.):** Their textbook provides numerous worked-out examples for checking controllability using the controllability matrix.

### 4. Controllability of Multivariable Systems (m > 1)

For systems with multiple inputs ($m > 1$), the controllability matrix $W_c$ is formed by concatenating the columns of $B$, $AB$, ..., $A^{n-1}B$. The dimension of $W_c$ becomes $n \times (mn)$. The system is controllable if $rank(W_c) = n$.

**Example 4: Multivariable Controllable System**
Consider the system:
$x(k+1) = \begin{bmatrix} 0 & 1 \\ 0 & 2 \end{bmatrix} x(k) + \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix} u(k)$

Here, $A = \begin{bmatrix} 0 & 1 \\ 0 & 2 \end{bmatrix}$ and $B = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$. $n=2$, $m=2$.

$AB = \begin{bmatrix} 0 & 1 \\ 0 & 2 \end{bmatrix} \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 2 & 0 \end{bmatrix}$

$W_c = [B \quad AB] = \begin{bmatrix} 0 & 1 & 1 & 0 \\ 1 & 0 & 2 & 0 \end{bmatrix}$

The dimension of $W_c$ is $2 \times 4$. We need to check if its rank is 2.
Let's consider submatrices:
The first two columns: $\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$ has determinant $(0 \times 0) - (1 \times 1) = -1 \neq 0$.
So, the rank is at least 2. Since the maximum possible rank is $min(n, mn) = min(2, 4) = 2$, the rank of $W_c$ is indeed 2.
Since $rank(W_c) = 2 = n$, this multivariable system is **controllable**.

**Reference for Multivariable Systems:**
*   **Constantine H. Houpis and Gary B. Lamont (McGraw Hill Book Company, 1985):** Their book "Digital control systems Theory, hardware software" is likely to cover controllability for multivariable systems in detail.

### 5. Effect of Controllability on System Design (Relating to CO4)

**Course Outcome 4 (CO4):** "Design discrete-time state feedback controllers and observers for a linear system." (Knowledge Level: K3)

Controllability is a prerequisite for designing state feedback controllers.

*   **State Feedback Controller Design:** If a system is controllable, we can place the closed-loop poles anywhere in the z-plane by appropriately choosing the state feedback gain matrix $K$, such that $u(k) = -Kx(k)$. The closed-loop system dynamics become $x(k+1) = (A - BK)x(k)$. Without controllability, we cannot arbitrarily assign all the closed-loop poles. The uncontrollable modes will remain unaffected by the state feedback.
*   **Observer Design:** While controllability is directly related to controller design, observability (the dual concept) is crucial for observer design. However, understanding controllability helps in comprehending the limitations and capabilities of the overall system design.

**Textbook Reference:**
*   **K. Ogata (PHI Learning Private Limited, New Delhi, 2009.):** Ogata's book will discuss pole placement using state feedback, explicitly stating that controllability is a necessary condition for arbitrary pole placement.

### 6. Important Points to Remember

*   **Definition:** Controllability means the ability to steer the system from any initial state to any final state within a finite time using the input.
*   **Controllability Matrix:** $W_c = [B \quad AB \quad A^2B \quad \dots \quad A^{n-1}B]$.
*   **Test:** A discrete-time LTI system is controllable if and only if $rank(W_c) = n$, where $n$ is the order of the system.
*   **Uncontrollable Modes:** If a system is uncontrollable, there are certain modes (eigenvalues of A) that cannot be influenced by the input.
*   **State Feedback:** Controllability is a necessary condition for designing a state feedback controller to achieve arbitrary pole placement.

## Practice Questions and Exercises

**Question 1:**
Determine if the following discrete-time system is controllable:
$x(k+1) = \begin{bmatrix} 0.1 & 0 \\ 0 & 0.3 \end{bmatrix} x(k) + \begin{bmatrix} 0 \\ 1 \end{bmatrix} u(k)$

**Answer 1:**
$A = \begin{bmatrix} 0.1 & 0 \\ 0 & 0.3 \end{bmatrix}$, $B = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$, $n=2$.
$AB = \begin{bmatrix} 0.1 & 0 \\ 0 & 0.3 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 0.3 \end{bmatrix}$
$W_c = [B \quad AB] = \begin{bmatrix} 0 & 0 \\ 1 & 0.3 \end{bmatrix}$
$det(W_c) = (0 \times 0.3) - (0 \times 1) = 0$.
$rank(W_c) = 1$.
Since $rank(W_c) = 1 < n=2$, the system is **uncontrollable**.

**Question 2:**
Check the controllability of the system:
$x(k+1) = \begin{bmatrix} 0 & 1 \\ -0.5 & 1.5 \end{bmatrix} x(k) + \begin{bmatrix} 1 \\ 0 \end{bmatrix} u(k)$

**Answer 2:**
$A = \begin{bmatrix} 0 & 1 \\ -0.5 & 1.5 \end{bmatrix}$, $B = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$, $n=2$.
$AB = \begin{bmatrix} 0 & 1 \\ -0.5 & 1.5 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 0 \\ -0.5 \end{bmatrix}$
$W_c = [B \quad AB] = \begin{bmatrix} 1 & 0 \\ 0 & -0.5 \end{bmatrix}$
$det(W_c) = (1 \times -0.5) - (0 \times 0) = -0.5$.
Since $det(W_c) \neq 0$, $rank(W_c) = 2$.
Since $rank(W_c) = 2 = n$, the system is **controllable**.

**Question 3 (Conceptual):**
If a discrete-time system has an uncontrollable mode, what does this imply about the system's behavior and its response to control inputs?

**Answer 3:**
An uncontrollable mode means that the input $u(k)$ cannot influence the evolution of the states associated with that mode. These states will continue to evolve according to the system's natural dynamics (governed by the corresponding eigenvalues of A), irrespective of any control action taken. Consequently, it is impossible to steer the system to an arbitrary desired state if that state involves changes in the uncontrollable modes.

**Question 4:**
For a system with $n$ states and $m$ inputs, what is the dimension of the controllability matrix $W_c$?

**Answer 4:**
The controllability matrix $W_c$ is formed by concatenating $n$ matrices of size $n \times m$, each of the form $A^iB$. Therefore, the dimension of $W_c$ is $n \times (nm)$.

## Conclusion

Controllability is a fundamental concept in the state-space design of discrete-time control systems. It determines whether the system's states can be manipulated through the input. By constructing and evaluating the rank of the controllability matrix, we can ascertain this crucial property, which directly impacts our ability to design effective state feedback controllers. This understanding is vital for achieving the objectives outlined in **Course Outcome 4 (CO4)**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
