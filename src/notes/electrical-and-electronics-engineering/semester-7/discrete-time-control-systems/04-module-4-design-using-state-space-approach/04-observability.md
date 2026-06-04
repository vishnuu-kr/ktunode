---
title: "Observability."
subject: "DISCRETE TIME CONTROL SYSTEMS"
module: "Module 4: Design using State Space approach:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f368e2"
status: "completed"
scrapedAt: "2026-05-23T16:36:35.011Z"
---
# Module 4: Design using State Space Approach - Observability

## Introduction to Observability

Observability is a fundamental concept in state-space control theory, which deals with determining the internal state of a system based on its external outputs and inputs. In discrete-time control systems, understanding observability is crucial for designing observers (state estimators) and for analyzing the controllability of the system. This module will delve into the concept of observability in discrete-time systems, its tests, and its relationship with controllability.

**Course Outcome Alignment:**
*   **CO3: Model and analyse discrete-time system using state space approach.** (K3) - Observability is a key aspect of state-space analysis.
*   **CO4: Design discrete-time state feedback controllers and observers for a linear system.** (K3) - Observability is a prerequisite for designing observers.

**Learning Outcome Alignment:**
*   This entire module focuses on the concept of observability.

**Textbook References:**
*   Digital control and State Variable methods by M. Gopal (Tata McGraw –Hill, 1997) - Chapter on Observability.
*   Discrete Time Control Systems by K. Ogata (PHI Learning Private Limited, New Delhi, 2009.) - Chapter on State-Space Analysis, including observability.
*   Digital control system analysis and design by Philips and Nagle (Prentice Hall, 1984) - Chapter on State-Space Methods.

---

### 1. Key Concepts and Definitions

#### 1.1. State-Space Representation of Discrete-Time Systems

A linear time-invariant (LTI) discrete-time system can be represented in state-space form as:

$\qquad \mathbf{x}(k+1) = A \mathbf{x}(k) + B \mathbf{u}(k)$
$\qquad \mathbf{y}(k) = C \mathbf{x}(k) + D \mathbf{u}(k)$

Where:
*   $\mathbf{x}(k) \in \mathbb{R}^n$: State vector at time step $k$.
*   $\mathbf{u}(k) \in \mathbb{R}^m$: Input vector at time step $k$.
*   $\mathbf{y}(k) \in \mathbb{R}^p$: Output vector at time step $k$.
*   $A \in \mathbb{R}^{n \times n}$: State matrix.
*   $B \in \mathbb{R}^{n \times m}$: Input matrix.
*   $C \in \mathbb{R}^{p \times n}$: Output matrix.
*   $D \in \mathbb{R}^{p \times m}$: Feedthrough matrix.

**Important Note:** For the purpose of analyzing observability, we typically consider the case where the input $\mathbf{u}(k)$ is zero or known. If the input is unknown, it can affect our ability to estimate the state.

#### 1.2. Definition of Observability

A discrete-time linear system is said to be **completely observable** if its initial state $\mathbf{x}(0)$ can be uniquely determined from the sequence of observed outputs $\mathbf{y}(0), \mathbf{y}(1), \mathbf{y}(2), \dots, \mathbf{y}(N-1)$ and the input sequence $\mathbf{u}(0), \mathbf{u}(1), \mathbf{u}(2), \dots, \mathbf{u}(N-1)$, for some finite number of observation steps $N$.

In simpler terms, observability is the property of a system that allows us to infer its internal state by looking at its external outputs over time.

**Reference:** Ogata, "Discrete Time Control Systems," Chapter 3, discusses the concept of observability.

#### 1.3. Effect of Unknown Inputs on Observability

If the input $\mathbf{u}(k)$ is unknown, it becomes harder to uniquely determine the initial state. For instance, if $\mathbf{u}(k) = \mathbf{0}$ for all $k$, then the system becomes:

$\qquad \mathbf{x}(k+1) = A \mathbf{x}(k)$
$\qquad \mathbf{y}(k) = C \mathbf{x}(k)$

In this scenario, observability means we can determine $\mathbf{x}(0)$ from $\mathbf{y}(0), \mathbf{y}(1), \dots$. If the input $\mathbf{u}(k)$ is non-zero and unknown, we would need to account for its effect on the output. The standard observability tests assume either zero input or a known input sequence.

---

### 2. Observability Tests for Discrete-Time Systems

The observability of a linear time-invariant discrete-time system can be determined using various tests based on the system matrices $A$, $C$, and potentially $B$ (if input is considered).

#### 2.1. Observability Matrix Test (Zero Input Case)

For a system with **zero input** ($\mathbf{u}(k) = \mathbf{0}$), the state-space equations become:

$\qquad \mathbf{x}(k+1) = A \mathbf{x}(k)$
$\qquad \mathbf{y}(k) = C \mathbf{x}(k)$

The output at time step $k$ is given by:
$\qquad \mathbf{y}(k) = C \mathbf{x}(k) = C A^k \mathbf{x}(0)$

The sequence of outputs for $k = 0, 1, 2, \dots, n-1$ is:
$\qquad \mathbf{y}(0) = C \mathbf{x}(0)$
$\qquad \mathbf{y}(1) = C \mathbf{x}(1) = C A \mathbf{x}(0)$
$\qquad \mathbf{y}(2) = C \mathbf{x}(2) = C A^2 \mathbf{x}(0)$
$\qquad \vdots$
$\qquad \mathbf{y}(n-1) = C \mathbf{x}(n-1) = C A^{n-1} \mathbf{x}(0)$

These equations can be combined into a single matrix equation:

$\qquad \begin{bmatrix} \mathbf{y}(0) \\ \mathbf{y}(1) \\ \vdots \\ \mathbf{y}(n-1) \end{bmatrix} = \begin{bmatrix} C \\ C A \\ \vdots \\ C A^{n-1} \end{bmatrix} \mathbf{x}(0)$

Let the **observability matrix** be denoted by $\mathcal{O}$:

$\qquad \mathcal{O} = \begin{bmatrix} C \\ C A \\ \vdots \\ C A^{n-1} \end{bmatrix}$

The dimension of $\mathcal{O}$ is $pn \times n$.

**Theorem:** The system is completely observable if and only if the observability matrix $\mathcal{O}$ has **full column rank**, i.e., $\text{rank}(\mathcal{O}) = n$.

**Reference:** Gopal, "Digital control and State Variable methods," Chapter 5, extensively covers the observability matrix.

**Important Point:** For the system to be observable, we need to be able to uniquely solve for $\mathbf{x}(0)$. This requires the matrix multiplying $\mathbf{x}(0)$ to be invertible or have a null space only containing the zero vector.

#### 2.2. Observability Matrix Test (With Known Input)

If the input $\mathbf{u}(k)$ is known, the output equation becomes:

$\qquad \mathbf{y}(k) = C \mathbf{x}(k) + D \mathbf{u}(k)$

Substituting the state equation solution $\mathbf{x}(k) = A^k \mathbf{x}(0) + \sum_{i=0}^{k-1} A^{k-1-i} B \mathbf{u}(i)$:

$\qquad \mathbf{y}(k) = C (A^k \mathbf{x}(0) + \sum_{i=0}^{k-1} A^{k-1-i} B \mathbf{u}(i)) + D \mathbf{u}(k)$
$\qquad \mathbf{y}(k) = C A^k \mathbf{x}(0) + C \sum_{i=0}^{k-1} A^{k-1-i} B \mathbf{u}(i) + D \mathbf{u}(k)$

Rearranging to isolate the term involving $\mathbf{x}(0)$:

$\qquad \mathbf{y}(k) - C \sum_{i=0}^{k-1} A^{k-1-i} B \mathbf{u}(i) - D \mathbf{u}(k) = C A^k \mathbf{x}(0)$

Let $\tilde{\mathbf{y}}(k) = \mathbf{y}(k) - C \sum_{i=0}^{k-1} A^{k-1-i} B \mathbf{u}(i) - D \mathbf{u}(k)$. This is the contribution to the output due solely to the initial state.

Then, for $k = 0, 1, \dots, n-1$:

$\qquad \tilde{\mathbf{y}}(k) = C A^k \mathbf{x}(0)$

This leads to the same observability matrix as in the zero-input case:

$\qquad \begin{bmatrix} \tilde{\mathbf{y}}(0) \\ \tilde{\mathbf{y}}(1) \\ \vdots \\ \tilde{\mathbf{y}}(n-1) \end{bmatrix} = \begin{bmatrix} C \\ C A \\ \vdots \\ C A^{n-1} \end{bmatrix} \mathbf{x}(0)$

The system is observable if $\text{rank}(\mathcal{O}) = n$, provided we can compute $\tilde{\mathbf{y}}(k)$. This implies that if the input is known, the standard observability matrix test is sufficient.

**Reference:** Philips and Nagle, "Digital control system analysis and design," Chapter 7, discusses the role of known inputs.

#### 2.3. Observability Canonical Form

In some texts, observability is related to a specific canonical form of the state-space representation. For a single-output system ($p=1$), an observable canonical form exists if the system is observable. In this form, the output is directly related to the last state variable.

For a single-input, single-output (SISO) system, if the system is observable and the characteristic polynomial is $s^n + a_{n-1}s^{n-1} + \dots + a_1 s + a_0$, an observable canonical form is:

$\qquad A_{obs} = \begin{bmatrix} 0 & 1 & 0 & \dots & 0 \\ 0 & 0 & 1 & \dots & 0 \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & 0 & \dots & 1 \\ -a_0 & -a_1 & -a_2 & \dots & -a_{n-1} \end{bmatrix}$
$\qquad C_{obs} = \begin{bmatrix} 1 & 0 & 0 & \dots & 0 \end{bmatrix}$

The observability matrix for this form is easily seen to have full rank.

**Reference:** Gopal, "Digital control and State Variable methods," Chapter 5, explains canonical forms and their relation to controllability and observability.

#### 2.4. Eigenvalue Test for Observability

A system is observable if and only if for every eigenvalue $\lambda_i$ of $A$, the matrix $\begin{bmatrix} \lambda_i I - A \\ C \end{bmatrix}$ has full rank $n+1$. Alternatively, for each eigenvalue $\lambda_i$ of $A$, the eigenvectors $\mathbf{v}_i$ associated with $\lambda_i$ satisfy $C \mathbf{v}_i \neq \mathbf{0}$ for all $i$ where $\mathbf{v}_i$ is a right eigenvector of $A$.

This test is less commonly used for direct computation but provides theoretical insight.

**Reference:** Franklin, Powell, and Workman, "Digital Control of Dynamic Systems," Chapter 4, discusses eigenvalue properties in relation to system properties.

---

### 3. Relationship Between Observability and Controllability

Observability and controllability are dual concepts in state-space analysis.

*   **Controllability:** The ability to steer the system from any initial state to any final state in a finite number of steps using the input.
*   **Observability:** The ability to determine the initial state from the system's outputs.

For a discrete-time system described by $(A, B, C, D)$, the **dual system** is described by $(A^T, C^T, B^T, D^T)$.

**Duality Theorem:** A system $(A, B, C, D)$ is completely controllable if and only if its dual system $(A^T, C^T, B^T, D^T)$ is completely observable. Conversely, a system $(A, B, C, D)$ is completely observable if and only if its dual system $(A^T, C^T, B^T, D^T)$ is completely controllable.

**Observability Matrix of Dual System:**
The controllability matrix of the dual system is:
$\qquad \mathcal{C}_{dual} = \begin{bmatrix} C^T & A^T C^T & \dots & (A^T)^{n-1} C^T \end{bmatrix}$

The observability matrix of the original system is:
$\qquad \mathcal{O} = \begin{bmatrix} C \\ C A \\ \vdots \\ C A^{n-1} \end{bmatrix}$

The transpose of the observability matrix is:
$\qquad \mathcal{O}^T = \begin{bmatrix} C^T & (C A)^T & \dots & (C A^{n-1})^T \end{bmatrix} = \begin{bmatrix} C^T & A^T C^T & \dots & (A^T)^{n-1} C^T \end{bmatrix} = \mathcal{C}_{dual}$

Therefore, $\text{rank}(\mathcal{O}) = \text{rank}(\mathcal{O}^T) = \text{rank}(\mathcal{C}_{dual})$. This formally proves the duality.

**Reference:** Kuo, "Digital Control Systems," Chapter 11, provides a detailed explanation of duality.

---

### 4. Examples

#### Example 1: Check Observability of a System

Consider the following discrete-time state-space system:
$\qquad \mathbf{x}(k+1) = \begin{bmatrix} 0.5 & 0.2 \\ 0 & 0.8 \end{bmatrix} \mathbf{x}(k) + \begin{bmatrix} 1 \\ 0 \end{bmatrix} \mathbf{u}(k)$
$\qquad \mathbf{y}(k) = \begin{bmatrix} 1 & 0 \end{bmatrix} \mathbf{x}(k)$

Here, $A = \begin{bmatrix} 0.5 & 0.2 \\ 0 & 0.8 \end{bmatrix}$, $B = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$, and $C = \begin{bmatrix} 1 & 0 \end{bmatrix}$. The order of the system is $n=2$.

**Solution:**
We need to construct the observability matrix $\mathcal{O}$ and check its rank.

$\qquad \mathcal{O} = \begin{bmatrix} C \\ C A \end{bmatrix}$

First, calculate $C A$:
$\qquad C A = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} 0.5 & 0.2 \\ 0 & 0.8 \end{bmatrix} = \begin{bmatrix} 0.5 & 0.2 \end{bmatrix}$

Now, form the observability matrix:
$\qquad \mathcal{O} = \begin{bmatrix} 1 & 0 \\ 0.5 & 0.2 \end{bmatrix}$

To check the rank, we can calculate the determinant of $\mathcal{O}$:
$\qquad \det(\mathcal{O}) = (1)(0.2) - (0)(0.5) = 0.2$

Since $\det(\mathcal{O}) \neq 0$, the matrix $\mathcal{O}$ is invertible and has full rank ($rank(\mathcal{O}) = 2 = n$).

**Conclusion:** The system is **completely observable**.

#### Example 2: Unobservable System

Consider the system:
$\qquad \mathbf{x}(k+1) = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix} \mathbf{x}(k) + \begin{bmatrix} 1 \\ 0 \end{bmatrix} \mathbf{u}(k)$
$\qquad \mathbf{y}(k) = \begin{bmatrix} 0 & 1 \end{bmatrix} \mathbf{x}(k)$

Here, $A = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}$ and $C = \begin{bmatrix} 0 & 1 \end{bmatrix}$. The order of the system is $n=2$.

**Solution:**
Construct the observability matrix:
$\qquad \mathcal{O} = \begin{bmatrix} C \\ C A \end{bmatrix}$

Calculate $C A$:
$\qquad C A = \begin{bmatrix} 0 & 1 \end{bmatrix} \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 0 & 1 \end{bmatrix}$

Form the observability matrix:
$\qquad \mathcal{O} = \begin{bmatrix} 0 & 1 \\ 0 & 1 \end{bmatrix}$

Calculate the determinant:
$\qquad \det(\mathcal{O}) = (0)(1) - (1)(0) = 0$

Since $\det(\mathcal{O}) = 0$, the matrix $\mathcal{O}$ does not have full rank. $\text{rank}(\mathcal{O}) = 1$, which is less than $n=2$.

**Conclusion:** The system is **not completely observable**.

This means that we cannot uniquely determine the initial state $\mathbf{x}(0)$ from the output sequence. Let $\mathbf{x}(0) = \begin{bmatrix} x_1(0) \\ x_2(0) \end{bmatrix}$.
$\qquad \mathbf{y}(0) = C \mathbf{x}(0) = \begin{bmatrix} 0 & 1 \end{bmatrix} \begin{bmatrix} x_1(0) \\ x_2(0) \end{bmatrix} = x_2(0)$
$\qquad \mathbf{x}(1) = A \mathbf{x}(0) = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} x_1(0) \\ x_2(0) \end{bmatrix} = \begin{bmatrix} x_1(0) + x_2(0) \\ x_2(0) \end{bmatrix}$
$\qquad \mathbf{y}(1) = C \mathbf{x}(1) = \begin{bmatrix} 0 & 1 \end{bmatrix} \begin{bmatrix} x_1(0) + x_2(0) \\ x_2(0) \end{bmatrix} = x_2(0)$

We see that $\mathbf{y}(0) = \mathbf{y}(1) = x_2(0)$. We can determine $x_2(0)$, but $x_1(0)$ is not determined by the output. Any initial state of the form $\begin{bmatrix} x_1(0) \\ x_2(0) \end{bmatrix}$ will produce the same output sequence if $x_2(0)$ is the same.

---

### 5. Importance of Observability

*   **Observer Design:** Observability is a prerequisite for designing an observer (state estimator). An observer is a dynamic system that estimates the state of the original system based on its inputs and outputs. If a system is not observable, its unobservable states cannot be estimated. (CO4)
*   **System Analysis:** It helps in understanding which parts of the system's internal state can be inferred from the measurements.
*   **Sensor Placement:** It can guide the placement of sensors (which determine the $C$ matrix) to ensure that the system is observable and all relevant states can be measured.
*   **Model Reduction:** If certain states are unobservable, they might be candidates for removal in a model reduction process.

**Reference:** Houpis and Lamont, "Digital control systems Theory, hardware software," Chapter 10, discusses the practical implications of observability in system design.

---

### 6. Practice Questions/Exercises

**Question 1:**
A discrete-time LTI system is described by:
$\qquad \mathbf{x}(k+1) = \begin{bmatrix} 0 & 1 \\ -0.2 & 0.7 \end{bmatrix} \mathbf{x}(k) + \begin{bmatrix} 0 \\ 1 \end{bmatrix} \mathbf{u}(k)$
$\qquad \mathbf{y}(k) = \begin{bmatrix} 1 & 0 \end{bmatrix} \mathbf{x}(k)$
Is this system completely observable? Justify your answer.

**Question 2:**
Consider the following system:
$\qquad A = \begin{bmatrix} 1 & 0 \\ 1 & 1 \end{bmatrix}$, $B = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$, $C = \begin{bmatrix} 1 & 1 \end{bmatrix}$, $D = 0$
Is this system completely observable?

**Question 3:**
Let a discrete-time system be defined by $(A, B, C)$. What is the condition for the system to be observable in terms of the observability matrix? State the duality relationship between controllability and observability.

---

### 7. Answers to Practice Questions

**Answer 1:**
Given $A = \begin{bmatrix} 0 & 1 \\ -0.2 & 0.7 \end{bmatrix}$ and $C = \begin{bmatrix} 1 & 0 \end{bmatrix}$.
The order of the system is $n=2$.
The observability matrix $\mathcal{O}$ is:
$\qquad \mathcal{O} = \begin{bmatrix} C \\ C A \end{bmatrix}$

Calculate $C A$:
$\qquad C A = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} 0 & 1 \\ -0.2 & 0.7 \end{bmatrix} = \begin{bmatrix} 0 & 1 \end{bmatrix}$

Form the observability matrix:
$\qquad \mathcal{O} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$

The determinant of $\mathcal{O}$ is $\det(\mathcal{O}) = (1)(1) - (0)(0) = 1$.
Since $\det(\mathcal{O}) \neq 0$, $\text{rank}(\mathcal{O}) = 2 = n$.
**Conclusion:** The system is completely observable.

**Answer 2:**
Given $A = \begin{bmatrix} 1 & 0 \\ 1 & 1 \end{bmatrix}$ and $C = \begin{bmatrix} 1 & 1 \end{bmatrix}$.
The order of the system is $n=2$.
The observability matrix $\mathcal{O}$ is:
$\qquad \mathcal{O} = \begin{bmatrix} C \\ C A \end{bmatrix}$

Calculate $C A$:
$\qquad C A = \begin{bmatrix} 1 & 1 \end{bmatrix} \begin{bmatrix} 1 & 0 \\ 1 & 1 \end{bmatrix} = \begin{bmatrix} 1(1) + 1(1) & 1(0) + 1(1) \end{bmatrix} = \begin{bmatrix} 2 & 1 \end{bmatrix}$

Form the observability matrix:
$\qquad \mathcal{O} = \begin{bmatrix} 1 & 1 \\ 2 & 1 \end{bmatrix}$

The determinant of $\mathcal{O}$ is $\det(\mathcal{O}) = (1)(1) - (1)(2) = 1 - 2 = -1$.
Since $\det(\mathcal{O}) \neq 0$, $\text{rank}(\mathcal{O}) = 2 = n$.
**Conclusion:** The system is completely observable.

**Answer 3:**
A discrete-time LTI system $(A, B, C)$ is completely observable if and only if the **observability matrix**
$\qquad \mathcal{O} = \begin{bmatrix} C \\ C A \\ \vdots \\ C A^{n-1} \end{bmatrix}$
has **full column rank**, i.e., $\text{rank}(\mathcal{O}) = n$, where $n$ is the order of the system.

**Duality Relationship:**
A system $(A, B, C)$ is completely controllable if and only if its dual system $(A^T, C^T, B^T)$ is completely observable.
Equivalently, a system $(A, B, C)$ is completely observable if and only if its dual system $(A^T, C^T, B^T)$ is completely controllable.

---

### 8. Important Points to Remember

*   Observability determines if the initial state $\mathbf{x}(0)$ can be uniquely determined from the outputs.
*   The standard test for observability involves the observability matrix $\mathcal{O}$.
*   A system is observable if and only if $\text{rank}(\mathcal{O}) = n$.
*   The observability matrix is formed by stacking $C, CA, CA^2, \dots, CA^{n-1}$.
*   Observability is crucial for designing observers (state estimators).
*   Observability and controllability are dual concepts. If a system $(A, B, C)$ is observable, then $(A^T, C^T, B^T)$ is controllable.

---

### Conclusion

This module has provided a comprehensive understanding of observability in discrete-time control systems. We have defined observability, discussed the observability matrix test, and highlighted its duality with controllability. The ability to assess observability is fundamental for effective state-space control system design, particularly for implementing state estimators, which will be a focus of subsequent modules.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
