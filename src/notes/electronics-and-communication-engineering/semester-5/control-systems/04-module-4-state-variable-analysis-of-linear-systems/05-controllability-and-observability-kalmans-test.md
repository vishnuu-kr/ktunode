---
title: "Controllability and observability - Kalman’s Test."
subject: "CONTROL SYSTEMS"
module: "Module 4: State Variable Analysis of Linear Systems:"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe965"
status: "completed"
scrapedAt: "2026-05-23T17:54:51.874Z"
---
# Control Systems: Module 4 - State Variable Analysis of Linear Systems

## Topic: Controllability and Observability - Kalman's Test

This module delves into the powerful state-space representation of linear systems and introduces the fundamental concepts of controllability and observability. These concepts are crucial for understanding the inherent properties of a system and its suitability for control design. We will specifically focus on Kalman's Test for determining these properties.

---

### 1. Introduction to State-Space Representation

Before diving into controllability and observability, it's essential to refresh the state-space representation of linear time-invariant (LTI) systems.

*   **State Variables:** A minimum set of variables that completely describe the internal state of a dynamic system at any given time.
*   **State Vector ($x(t)$):** A column vector containing all the state variables.
*   **Input Vector ($u(t)$):** A column vector containing all the input signals to the system.
*   **Output Vector ($y(t)$):** A column vector containing all the output signals of the system.

The standard LTI system in state-space form is represented by:

*   **State Equation:** $\dot{x}(t) = Ax(t) + Bu(t)$
*   **Output Equation:** $y(t) = Cx(t) + Du(t)$

Where:
*   $A$: State Matrix (n x n) - describes the internal dynamics of the system.
*   $B$: Input Matrix (n x m) - relates the input to the state changes.
*   $C$: Output Matrix (p x n) - relates the state to the output.
*   $D$: Feedforward Matrix (p x m) - relates the input directly to the output.

**Source Reference:**
*   *Control Systems Engineering* by Nagarath and Gopal (7th Ed., 2022), Chapter 6: State Variable Analysis.
*   *Modern Control Engineering* by Ogata (5th Ed., 2015), Chapter 2: State-Space Representation of Linear Systems.

---

### 2. Controllability

**Definition:** A system is said to be **completely controllable** if it is possible to transfer the system from any initial state $x(t_0)$ to any desired final state $x(t_f)$ in a finite time $t_f - t_0$ by applying a suitable unconstrained control input $u(t)$.

**Intuitive Explanation:** Controllability means that the system's states can be manipulated and driven to any desired value through the application of control inputs. If a system is uncontrollable, there are certain states that cannot be reached or controlled, regardless of the inputs applied.

**Importance:**
*   Essential for designing controllers that can achieve desired system behavior.
*   Ensures that we can drive the system to a desired operating point or stabilize it.
*   Related to the ability to move all modes of the system.

**Source Reference:**
*   *Automatic Control Systems* by Kuo and Golnaraghi (10th Ed., 2017), Chapter 6: State-Space Analysis.
*   *Nise's Control Systems Engineering* (8th Ed., 2017), Chapter 7: State-Space Analysis.

---

#### 2.1 Kalman's Controllability Test

Kalman's test is a widely used and effective method to determine the controllability of an LTI system. It involves constructing a **controllability matrix** and checking its rank.

**Method:**

For a system described by $\dot{x}(t) = Ax(t) + Bu(t)$, the controllability matrix $Q_c$ is defined as:

$Q_c = [B \quad AB \quad A^2B \quad \cdots \quad A^{n-1}B]$

Where:
*   $n$ is the order of the system (number of state variables).
*   The matrix $Q_c$ will have dimensions $n \times (nm)$.

**Kalman's Controllability Test:**

A linear time-invariant system is **completely controllable** if and only if the rank of the controllability matrix $Q_c$ is equal to the order of the system, $n$.

$\text{rank}(Q_c) = n$

**Steps to Apply Kalman's Test:**

1.  Determine the matrices $A$ and $B$ from the system's state-space equations.
2.  Calculate the powers of the $A$ matrix: $A^2, A^3, \ldots, A^{n-1}$.
3.  Calculate the matrices $AB, A^2B, A^3B, \ldots, A^{n-1}B$.
4.  Form the controllability matrix $Q_c$ by concatenating these matrices column-wise.
5.  Calculate the rank of $Q_c$.
6.  If $\text{rank}(Q_c) = n$, the system is controllable. Otherwise, it is not.

**Example:**

Consider a system with the following state-space matrices:

$A = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix}$, $B = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$

Here, $n = 2$.

1.  **Calculate $A^1 B$:**
    $AB = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ -3 \end{bmatrix}$

2.  **Calculate $A^2 B$:**
    First, calculate $A^2$:
    $A^2 = A \cdot A = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} = \begin{bmatrix} -2 & -3 \\ 6 & 7 \end{bmatrix}$
    Now, $A^2B$:
    $A^2B = \begin{bmatrix} -2 & -3 \\ 6 & 7 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} -3 \\ 7 \end{bmatrix}$

    *Note: For $n=2$, we only need up to $A^{n-1}B = A^1B$. The $A^2B$ calculation is for illustration and understanding the general form of $Q_c$. We will use the full $n \times nm$ form.*

3.  **Form the controllability matrix $Q_c$:**
    $Q_c = [B \quad AB]$
    $Q_c = \begin{bmatrix} 0 & 1 \\ 1 & -3 \end{bmatrix}$

4.  **Calculate the rank of $Q_c$:**
    The determinant of $Q_c$ is $(0 \times -3) - (1 \times 1) = -1$.
    Since the determinant is non-zero, the rank of $Q_c$ is 2.

5.  **Conclusion:**
    Since $\text{rank}(Q_c) = 2$ and $n = 2$, the system is **completely controllable**.

**Important Point:** The number of columns in $Q_c$ is $n \times m$, where $m$ is the number of inputs. For controllability, we need the first $n$ columns to be linearly independent. The rank test ensures this. If the system has multiple inputs ($m>1$), the procedure remains the same, but $B$ and subsequent matrices will have multiple columns.

**Source Reference:**
*   *Feedback and Control Systems* by DiStefano, Stubberud, and Williams (3rd Ed., 2013), Chapter 3: State-Space Analysis.
*   *Control Systems Engineering* by Nagarath and Gopal (7th Ed., 2022), Section 6.7: Controllability and Observability.

---

### 3. Observability

**Definition:** A system is said to be **completely observable** if it is possible to determine the initial state $x(t_0)$ of the system from the measured output $y(t)$ and the input $u(t)$ over a finite time interval $t_0$ to $t_f$.

**Intuitive Explanation:** Observability means that we can infer the internal state of the system by only looking at its outputs and inputs. If a system is unobservable, there are certain internal states that cannot be deduced from the output measurements, making it difficult to monitor or control the system effectively.

**Importance:**
*   Crucial for state estimation (e.g., using observers like Luenberger observers).
*   Ensures that the system's internal behavior can be inferred from its external measurements.
*   Related to the ability to observe all modes of the system through the output.

**Source Reference:**
*   *Control Systems Engineering* by Nagarath and Gopal (7th Ed., 2022), Section 6.7: Controllability and Observability.
*   *Modern Control Engineering* by Ogata (5th Ed., 2015), Section 2.9: Observability.

---

#### 3.1 Kalman's Observability Test

Similar to controllability, Kalman's test provides a systematic way to check observability. It involves constructing an **observability matrix** and checking its rank.

**Method:**

For a system described by $\dot{x}(t) = Ax(t) + Bu(t)$ and $y(t) = Cx(t) + Du(t)$, the observability matrix $Q_o$ is defined as:

$Q_o = \begin{bmatrix} C \\ CA \\ CA^2 \\ \vdots \\ CA^{n-1} \end{bmatrix}$

Where:
*   $n$ is the order of the system.
*   The matrix $Q_o$ will have dimensions $(nm) \times n$.

**Kalman's Observability Test:**

A linear time-invariant system is **completely observable** if and only if the rank of the observability matrix $Q_o$ is equal to the order of the system, $n$.

$\text{rank}(Q_o) = n$

**Steps to Apply Kalman's Test:**

1.  Determine the matrices $A$ and $C$ from the system's state-space equations.
2.  Calculate the powers of the $A$ matrix: $A^2, A^3, \ldots, A^{n-1}$.
3.  Calculate the matrices $CA, CA^2, CA^3, \ldots, CA^{n-1}$.
4.  Form the observability matrix $Q_o$ by concatenating these matrices row-wise.
5.  Calculate the rank of $Q_o$.
6.  If $\text{rank}(Q_o) = n$, the system is observable. Otherwise, it is not.

**Example:**

Consider a system with the following state-space matrices:

$A = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix}$, $C = \begin{bmatrix} 1 & 0 \end{bmatrix}$

Here, $n = 2$.

1.  **Calculate $CA$:**
    $CA = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} = \begin{bmatrix} 0 & 1 \end{bmatrix}$

2.  **Calculate $CA^2$:**
    We already calculated $A^2 = \begin{bmatrix} -2 & -3 \\ 6 & 7 \end{bmatrix}$.
    $CA^2 = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} -2 & -3 \\ 6 & 7 \end{bmatrix} = \begin{bmatrix} -2 & -3 \end{bmatrix}$

    *Note: For $n=2$, we need up to $CA^{n-1} = CA^1$. The $CA^2$ calculation is for illustration.*

3.  **Form the observability matrix $Q_o$:**
    $Q_o = \begin{bmatrix} C \\ CA \end{bmatrix}$
    $Q_o = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$

4.  **Calculate the rank of $Q_o$:**
    The determinant of $Q_o$ is $(1 \times 1) - (0 \times 0) = 1$.
    Since the determinant is non-zero, the rank of $Q_o$ is 2.

5.  **Conclusion:**
    Since $\text{rank}(Q_o) = 2$ and $n = 2$, the system is **completely observable**.

**Important Point:** The number of rows in $Q_o$ is $nm$, where $m$ is the number of outputs. For observability, we need the first $n$ rows to be linearly independent. The rank test ensures this. If the system has multiple outputs ($p>1$), the procedure remains the same, but $C$ and subsequent matrices will have multiple rows.

**Source Reference:**
*   *Automatic Control Systems* by Kuo and Golnaraghi (10th Ed., 2017), Chapter 6: State-Space Analysis.
*   *Feedback and Control Systems* by DiStefano, Stubberud, and Williams (3rd Ed., 2013), Chapter 3: State-Space Analysis.

---

### 4. Duality Between Controllability and Observability

There's a fundamental duality relationship between controllability and observability for LTI systems.

*   A system $(A, B, C, D)$ is **controllable** if and only if the dual system $(A^T, C^T, B^T, D^T)$ is **observable**.
*   A system $(A, B, C, D)$ is **observable** if and only if the dual system $(A^T, C^T, B^T, D^T)$ is **controllable**.

This means that if you transpose the $A$ and $B$ matrices, and swap $C$ with $B^T$, the controllability of the original system is equivalent to the observability of the new system. This duality is a powerful theoretical tool.

**Proof Sketch (using matrices):**
The controllability matrix for $(A, B)$ is $Q_c = [B \quad AB \quad \cdots \quad A^{n-1}B]$.
The observability matrix for $(A^T, C^T)$ is $Q_o' = \begin{bmatrix} C^T \\ C^TA \\ \vdots \\ C^TA^{n-1} \end{bmatrix}$.

Consider the transpose of $Q_c$:
$(Q_c)^T = \begin{bmatrix} B^T \\ (AB)^T \\ \vdots \\ (A^{n-1}B)^T \end{bmatrix} = \begin{bmatrix} B^T \\ B^TA^T \\ \vdots \\ B^T(A^T)^{n-1} \end{bmatrix}$

If we replace $C^T$ with $B^T$ in the definition of the observability matrix for the dual system, we get:
$Q_o \text{ for dual system} = \begin{bmatrix} B^T \\ B^TA^T \\ \vdots \\ B^T(A^T)^{n-1} \end{bmatrix}$

This is precisely $(Q_c)^T$. Since the rank of a matrix is equal to the rank of its transpose, $\text{rank}(Q_c) = \text{rank}((Q_c)^T)$. Therefore, if $\text{rank}(Q_c) = n$, then $\text{rank}((Q_c)^T) = n$. This shows that the controllability of $(A, B)$ implies the observability of $(A^T, B^T)$ (if we consider $C=B^T$ for the dual system). The formal proof extends this to the matrices $A, B, C$.

**Source Reference:**
*   *Modern Control Engineering* by Ogata (5th Ed., 2015), Section 2.9: Observability.
*   *Nise's Control Systems Engineering* (8th Ed., 2017), Section 7.5: Duality.

---

### 5. Implications of Controllability and Observability

*   **Controllable System:**
    *   All modes of the system can be influenced by the input.
    *   It is possible to design a state feedback controller to place the closed-loop poles anywhere in the left-half of the s-plane.

*   **Observable System:**
    *   All modes of the system can be observed from the output.
    *   It is possible to design a Luenberger observer to estimate the system states.

*   **Both Controllable and Observable:**
    *   The system's behavior is completely determined by its inputs and outputs.
    *   It is possible to design both state feedback controllers and state observers, enabling full state feedback control.

*   **Uncontrollable System:**
    *   There are some modes that cannot be affected by the input.
    *   These uncontrollable modes will remain unchanged regardless of the input.

*   **Unobservable System:**
    *   There are some modes that do not affect the output.
    *   These unobservable modes cannot be detected from the output measurements.

**Coupled and Decoupled Systems:**
The concepts of controllability and observability also help in understanding the structure of a system. If a system is neither controllable nor observable, it can be decomposed into four subsystems:
1.  Controllable and Observable
2.  Controllable but Unobservable
3.  Uncontrollable but Observable
4.  Uncontrollable and Unobservable

Only the first subsystem affects the output and is affected by the input. The last subsystem is completely disconnected from both input and output.

**Source Reference:**
*   *Control Systems Engineering* by Nagarath and Gopal (7th Ed., 2022), Section 6.7: Controllability and Observability.
*   *Automatic Control Systems* by Kuo and Golnaraghi (10th Ed., 2017), Chapter 6: State-Space Analysis.

---

### 6. Practice Questions and Exercises

**Question 1:**
Consider a system with the following state-space representation:
$\dot{x} = \begin{bmatrix} -1 & 1 \\ 0 & -2 \end{bmatrix}x + \begin{bmatrix} 1 \\ 0 \end{bmatrix}u$
$y = \begin{bmatrix} 1 & 0 \end{bmatrix}x$

Determine if the system is controllable and observable using Kalman's test.

**Solution:**

**Controllability:**
$A = \begin{bmatrix} -1 & 1 \\ 0 & -2 \end{bmatrix}$, $B = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$, $n=2$.

1.  Calculate $AB$:
    $AB = \begin{bmatrix} -1 & 1 \\ 0 & -2 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} -1 \\ 0 \end{bmatrix}$

2.  Form the controllability matrix $Q_c$:
    $Q_c = [B \quad AB] = \begin{bmatrix} 1 & -1 \\ 0 & 0 \end{bmatrix}$

3.  Calculate the rank of $Q_c$:
    The determinant of $Q_c$ is $(1 \times 0) - (-1 \times 0) = 0$.
    Since the determinant is zero, the rank is less than 2. The rows are clearly linearly dependent (the second row is all zeros).
    $\text{rank}(Q_c) = 1$.

4.  **Conclusion for Controllability:**
    Since $\text{rank}(Q_c) = 1 \neq n=2$, the system is **not controllable**.

**Observability:**
$A = \begin{bmatrix} -1 & 1 \\ 0 & -2 \end{bmatrix}$, $C = \begin{bmatrix} 1 & 0 \end{bmatrix}$, $n=2$.

1.  Calculate $CA$:
    $CA = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} -1 & 1 \\ 0 & -2 \end{bmatrix} = \begin{bmatrix} -1 & 1 \end{bmatrix}$

2.  Form the observability matrix $Q_o$:
    $Q_o = \begin{bmatrix} C \\ CA \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ -1 & 1 \end{bmatrix}$

3.  Calculate the rank of $Q_o$:
    The determinant of $Q_o$ is $(1 \times 1) - (0 \times -1) = 1$.
    Since the determinant is non-zero, the rank is 2.
    $\text{rank}(Q_o) = 2$.

4.  **Conclusion for Observability:**
    Since $\text{rank}(Q_o) = 2 = n=2$, the system is **observable**.

---

**Question 2:**
Consider a system with:
$A = \begin{bmatrix} 0 & 0 & 0 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix}$, $B = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}$, $C = \begin{bmatrix} 0 & 0 & 1 \end{bmatrix}$

Determine the controllability and observability of this system.

**Solution:**

**Controllability:**
$A = \begin{bmatrix} 0 & 0 & 0 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix}$, $B = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}$, $n=3$.

1.  Calculate $AB$:
    $AB = \begin{bmatrix} 0 & 0 & 0 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix} = \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}$

2.  Calculate $A^2B$:
    $A^2 = \begin{bmatrix} 0 & 0 & 0 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix} \begin{bmatrix} 0 & 0 & 0 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix} = \begin{bmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 1 & 0 & 0 \end{bmatrix}$
    $A^2B = \begin{bmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 1 & 0 & 0 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}$

3.  Form the controllability matrix $Q_c$:
    $Q_c = [B \quad AB \quad A^2B] = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$

4.  Calculate the rank of $Q_c$:
    The determinant of $Q_c$ is $1 \times (1 \times 1 - 0 \times 0) = 1$.
    Since the determinant is non-zero, the rank is 3.
    $\text{rank}(Q_c) = 3$.

5.  **Conclusion for Controllability:**
    Since $\text{rank}(Q_c) = 3 = n=3$, the system is **controllable**.

**Observability:**
$A = \begin{bmatrix} 0 & 0 & 0 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix}$, $C = \begin{bmatrix} 0 & 0 & 1 \end{bmatrix}$, $n=3$.

1.  Calculate $CA$:
    $CA = \begin{bmatrix} 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 0 & 0 & 0 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix} = \begin{bmatrix} 0 & 1 & 0 \end{bmatrix}$

2.  Calculate $CA^2$:
    $CA^2 = \begin{bmatrix} 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 1 & 0 & 0 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \end{bmatrix}$

3.  Form the observability matrix $Q_o$:
    $Q_o = \begin{bmatrix} C \\ CA \\ CA^2 \end{bmatrix} = \begin{bmatrix} 0 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 0 \end{bmatrix}$

4.  Calculate the rank of $Q_o$:
    The determinant of $Q_o$ can be calculated:
    $\det(Q_o) = 0 \times \det\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix} - 0 \times \det\begin{bmatrix} 0 & 0 \\ 1 & 0 \end{bmatrix} + 1 \times \det\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$
    $\det(Q_o) = 1 \times (0 \times 0 - 1 \times 1) = -1$.
    Since the determinant is non-zero, the rank is 3.
    $\text{rank}(Q_o) = 3$.

5.  **Conclusion for Observability:**
    Since $\text{rank}(Q_o) = 3 = n=3$, the system is **observable**.

---

### 7. Important Points to Remember

*   **Controllability:** The ability to drive all states to any desired value using the input. Tested using the controllability matrix $Q_c = [B \quad AB \quad \cdots \quad A^{n-1}B]$. Controllable if $\text{rank}(Q_c) = n$.
*   **Observability:** The ability to determine all states from the output and input. Tested using the observability matrix $Q_o = \begin{bmatrix} C \\ CA \\ \vdots \\ CA^{n-1} \end{bmatrix}$. Observable if $\text{rank}(Q_o) = n$.
*   **System Order (n):** The number of state variables, which is the dimension of the state vector $x$.
*   **Kalman's Test:** A deterministic test based on the rank of the controllability and observability matrices.
*   **Duality:** Controllability of $(A, B)$ is equivalent to the observability of $(A^T, B^T)$ (and vice versa).
*   **State Feedback Design:** Controllability is a prerequisite for arbitrary pole placement using state feedback.
*   **State Estimation:** Observability is a prerequisite for designing observers to estimate system states.
*   **System Structure:** Controllability and observability help decompose the system into modes that are accessible and visible, and those that are not.

---

### 8. Alignment with Course Outcomes

*   **CO5: Analyse system Controllability and Observability using state space representation (Knowledge Level: K3)**
    This entire module directly addresses CO5. We have covered the definitions, Kalman's test for analysis, and the implications of these properties within the state-space framework. The knowledge level K3 (Analysis) is met by understanding how to apply the tests and interpret their results for system characterization.

---

### 9. Conclusion

Controllability and observability are fundamental properties that dictate whether a system can be effectively controlled and monitored. Kalman's test provides a systematic algebraic method to determine these properties for linear time-invariant systems. Understanding these concepts is crucial for designing feedback controllers and state estimators, which are core tasks in control system engineering.

---
**End of Module Notes**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
