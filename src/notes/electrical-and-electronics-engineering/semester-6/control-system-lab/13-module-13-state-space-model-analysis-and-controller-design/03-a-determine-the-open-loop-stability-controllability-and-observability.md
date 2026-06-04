---
title: "a. Determine the open loop stability, controllability and observability"
subject: "CONTROL SYSTEM LAB"
module: "Module 13: State Space Model, Analysis and Controller Design"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f3678f"
status: "completed"
scrapedAt: "2026-05-23T16:25:38.469Z"
---
# Control System Lab - Module 13: State Space Model, Analysis and Controller Design

## Topic: a. Determine Open Loop Stability, Controllability and Observability

---

### **1. Introduction to State Space Representation**

State space representation is a powerful method for modeling and analyzing dynamical systems, especially complex, multi-input, multi-output (MIMO) systems. It provides a more comprehensive description of a system's internal behavior compared to traditional transfer function methods.

**Key Concepts:**

*   **State Variables:** A minimum set of variables that completely describe the internal state of a system at any given time. Knowing the state variables and the input at time $t_0$, the system's behavior for all $t \ge t_0$ can be determined.
*   **State Vector ($x(t)$):** A column vector containing all the state variables.
*   **Input Vector ($u(t)$):** A column vector containing all the input signals to the system.
*   **Output Vector ($y(t)$):** A column vector containing all the output signals from the system.
*   **State Equation:** A set of first-order differential equations describing how the state variables change over time as a function of the current state and the input.
    *   General Form: $\dot{x}(t) = Ax(t) + Bu(t)$
*   **Output Equation:** An algebraic equation describing how the output variables are related to the current state and the input.
    *   General Form: $y(t) = Cx(t) + Du(t)$

**Where:**

*   $A$: State matrix (system matrix)
*   $B$: Input matrix (control matrix)
*   $C$: Output matrix
*   $D$: Feedforward matrix (direct transmission matrix)

**(Refer to Ogata, Chapter 3; Nise, Chapter 1; Nagrath & Gopal, Chapter 2)**

---

### **2. Open Loop Stability**

A system is considered **stable** if its output remains bounded for all bounded inputs. In the context of state space representation, open-loop stability (stability of the system without any controller) is determined by the **eigenvalues** of the **state matrix ($A$)**.

**Key Concepts:**

*   **Eigenvalues:** The roots of the characteristic equation of a matrix. For the state matrix $A$, the eigenvalues are the solutions to $\det(A - \lambda I) = 0$, where $I$ is the identity matrix and $\lambda$ represents the eigenvalues.
*   **Characteristic Equation:** $\Delta(\lambda) = \det(A - \lambda I) = 0$.
*   **Poles of the System:** The eigenvalues of the state matrix $A$ are the poles of the system.

**Stability Criteria (for Linear Time-Invariant - LTI systems):**

1.  **All eigenvalues have negative real parts:** The system is asymptotically stable. The system will return to its equilibrium state after a disturbance.
2.  **At least one eigenvalue has a positive real part:** The system is unstable. The output will grow unbounded for even small initial conditions or inputs.
3.  **Eigenvalues have zero real parts, with no repeated eigenvalues at the origin:** The system is marginally stable. The output will oscillate or remain constant after a disturbance.
4.  **Eigenvalues have zero real parts, with repeated eigenvalues at the origin:** The system is unstable.

**Important Points:**

*   For discrete-time systems, stability is determined by the magnitude of the eigenvalues. If all eigenvalues have magnitudes less than 1, the system is stable.
*   In the lab, you will typically use software tools (like MATLAB/Simulink) to calculate the eigenvalues of the $A$ matrix.

**(Refer to Ogata, Chapter 6; Nise, Chapter 4; Nagrath & Gopal, Chapter 6)**

---

### **3. Controllability**

Controllability refers to the ability to steer a system's state variables from an initial state to any desired final state within a finite time using an appropriate input signal.

**Key Concepts:**

*   **State Controllability:** A system is controllable if it's possible to transfer the system from any initial state $x(t_0)$ to any desired final state $x(t_f)$ by choosing a suitable control input $u(t)$ over the time interval $[t_0, t_f]$.

**Controllability Test:**

The most common test for controllability of an LTI system is using the **controllability matrix ($\mathcal{C}$)**.

*   **Controllability Matrix ($\mathcal{C}$):**
    $\mathcal{C} = [B \quad AB \quad A^2B \quad \dots \quad A^{n-1}B]$
    where $n$ is the order of the system (number of state variables).

**Controllability Condition:**

*   The system is controllable if and only if the controllability matrix $\mathcal{C}$ has full rank, i.e., $\text{rank}(\mathcal{C}) = n$.

**How to determine rank in the lab:**

You will use software tools to construct the $\mathcal{C}$ matrix and then compute its rank.

**Example:**

Consider a system with state equation $\dot{x}(t) = Ax(t) + Bu(t)$, where:
$A = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix}$, $B = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$
The order of the system is $n=2$.

1.  **Calculate $AB$:**
    $AB = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 \\ -3 \end{bmatrix}$

2.  **Form the controllability matrix $\mathcal{C}$:**
    $\mathcal{C} = [B \quad AB] = \begin{bmatrix} 0 & 1 \\ 1 & -3 \end{bmatrix}$

3.  **Calculate the rank of $\mathcal{C}$:**
    $\det(\mathcal{C}) = (0)(-3) - (1)(1) = -1 \neq 0$.
    Since the determinant is non-zero, the matrix is full rank, i.e., $\text{rank}(\mathcal{C}) = 2$.
    Therefore, the system is controllable.

**(Refer to Ogata, Chapter 3; Nise, Chapter 11; Nagrath & Gopal, Chapter 11)**

---

### **4. Observability**

Observability refers to the ability to determine the internal state variables of a system by observing its output signals and knowing the input signals over a finite time interval.

**Key Concepts:**

*   **State Observability:** A system is observable if it's possible to determine the initial state $x(t_0)$ by observing the output $y(t)$ and the input $u(t)$ over the time interval $[t_0, t_f]$.

**Observability Test:**

Similar to controllability, the observability of an LTI system is tested using the **observability matrix ($\mathcal{O}$)**.

*   **Observability Matrix ($\mathcal{O}$):**
    $\mathcal{O} = \begin{bmatrix} C \\ CA \\ CA^2 \\ \vdots \\ CA^{n-1} \end{bmatrix}$
    where $n$ is the order of the system.

**Observability Condition:**

*   The system is observable if and only if the observability matrix $\mathcal{O}$ has full rank, i.e., $\text{rank}(\mathcal{O}) = n$.

**How to determine rank in the lab:**

You will use software tools to construct the $\mathcal{O}$ matrix and then compute its rank.

**Example:**

Consider a system with state equation $\dot{x}(t) = Ax(t) + Bu(t)$ and output equation $y(t) = Cx(t) + Du(t)$, where:
$A = \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix}$, $B = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$, $C = \begin{bmatrix} 1 & 0 \end{bmatrix}$, $D = 0$
The order of the system is $n=2$.

1.  **Calculate $CA$:**
    $CA = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} 0 & 1 \\ -2 & -3 \end{bmatrix} = \begin{bmatrix} 0 & 1 \end{bmatrix}$

2.  **Form the observability matrix $\mathcal{O}$:**
    $\mathcal{O} = \begin{bmatrix} C \\ CA \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$

3.  **Calculate the rank of $\mathcal{O}$:**
    $\det(\mathcal{O}) = (1)(1) - (0)(0) = 1 \neq 0$.
    Since the determinant is non-zero, the matrix is full rank, i.e., $\text{rank}(\mathcal{O}) = 2$.
    Therefore, the system is observable.

**(Refer to Ogata, Chapter 3; Nise, Chapter 11; Nagrath & Gopal, Chapter 11)**

---

### **5. Duality Principle**

There's a fundamental relationship between controllability and observability, known as the **duality principle**.

**Duality Theorem:**

A linear system $(A, B, C)$ is controllable if and only if the dual system $(A^T, C^T, B^T)$ is observable.

This means if you transpose the matrices $A$, $B$, and $C$, the controllability of the original system is directly related to the observability of the dual system, and vice-versa.

**(Refer to Ogata, Chapter 3; Nise, Chapter 11)**

---

### **6. Practical Implementation in Control System Lab**

In a typical control system lab session for this topic, you will use software like MATLAB/Simulink.

**Steps:**

1.  **Obtain the State Space Matrices (A, B, C, D):** This might be given to you or derived from experimental data (refer to CO1).
2.  **Determine Open-Loop Stability:**
    *   Define the $A$ matrix in MATLAB.
    *   Use the `eig(A)` command to find the eigenvalues.
    *   Analyze the real parts of the eigenvalues to determine stability.
3.  **Determine Controllability:**
    *   Define the $A$ and $B$ matrices in MATLAB.
    *   Construct the controllability matrix: `ctrb(A, B)` command.
    *   Calculate the rank of the controllability matrix: `rank(ctrb(A, B))`.
    *   Compare the rank with the order of the system ($n$).
4.  **Determine Observability:**
    *   Define the $A$ and $C$ matrices in MATLAB.
    *   Construct the observability matrix: `obsv(A, C)` command.
    *   Calculate the rank of the observability matrix: `rank(obsv(A, C))`.
    *   Compare the rank with the order of the system ($n$).

**Example MATLAB Code Snippet:**

```matlab
% Define state space matrices
A = [0 1; -2 -3];
B = [0; 1];
C = [1 0];
D = 0;

% System order
n = length(diag(A)); % Or size(A, 1)

% --- Stability Analysis ---
eigenvalues = eig(A);
disp('Eigenvalues:');
disp(eigenvalues);
% Analyze real parts for stability

% --- Controllability Analysis ---
controllability_matrix = ctrb(A, B);
rank_controllability = rank(controllability_matrix);
disp('Controllability Matrix:');
disp(controllability_matrix);
disp(['Rank of Controllability Matrix: ', num2str(rank_controllability)]);
if rank_controllability == n
    disp('System is controllable.');
else
    disp('System is not controllable.');
end

% --- Observability Analysis ---
observability_matrix = obsv(A, C);
rank_observability = rank(observability_matrix);
disp('Observability Matrix:');
disp(observability_matrix);
disp(['Rank of Observability Matrix: ', num2str(rank_observability)]);
if rank_observability == n
    disp('System is observable.');
else
    disp('System is not observable.');
end
```

**(Refer to Lab manuals and software documentation for specific commands.)**

---

### **7. Alignment with Course Outcomes (COs)**

*   **CO1: Identify and conduct suitable experiments to determine the parameters to model a physical system. (Knowledge Level: K3)**
    *   This module assumes you have obtained or can obtain the state-space matrices $A, B, C, D$. In a lab setting, this could involve experimental identification of system parameters. While this specific topic focuses on analysis, the foundation for CO1 is the ability to represent a system in state space.
*   **CO2: Conduct suitable experiments and determine the performance specifications. (Knowledge Level: K3)**
    *   Stability is a key performance specification. Determining the eigenvalues directly assesses the system's inherent stability characteristics without external control.
*   **CO3: Analyse a linear continuous time system model using simulation tools. (Knowledge Level: K3)**
    *   This topic is the core of CO3. We are using state-space models and simulation tools (like MATLAB) to analyze system properties (stability, controllability, observability).
*   **CO4: Design suitable controllers/compensators to meet the performance requirements using simulation tools. (Knowledge Level: K5)**
    *   While this specific section doesn't cover design, understanding controllability and observability is *essential* for designing state feedback controllers (pole placement) and observers. Without controllability, you cannot place all poles. Without observability, you cannot design an observer to estimate states. This topic lays the groundwork for controller design.

---

### **8. Practice Questions and Answers**

**Question 1:** For the system given by the state-space equations:
$\dot{x} = \begin{bmatrix} -1 & 0 \\ 0 & -2 \end{bmatrix}x + \begin{bmatrix} 1 \\ 0 \end{bmatrix}u$
$y = \begin{bmatrix} 1 & 0 \end{bmatrix}x$

Determine:
a) Open-loop stability.
b) Controllability.
c) Observability.

**Answer 1:**
Given:
$A = \begin{bmatrix} -1 & 0 \\ 0 & -2 \end{bmatrix}$, $B = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$, $C = \begin{bmatrix} 1 & 0 \end{bmatrix}$
System order $n=2$.

a) **Stability:**
Eigenvalues of $A$ are the diagonal elements: $\lambda_1 = -1$, $\lambda_2 = -2$.
Both eigenvalues have negative real parts.
**Result:** The system is asymptotically stable.

b) **Controllability:**
$AB = \begin{bmatrix} -1 & 0 \\ 0 & -2 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} -1 \\ 0 \end{bmatrix}$
Controllability matrix $\mathcal{C} = [B \quad AB] = \begin{bmatrix} 1 & -1 \\ 0 & 0 \end{bmatrix}$
$\det(\mathcal{C}) = (1)(0) - (-1)(0) = 0$.
$\text{rank}(\mathcal{C}) = 1$.
Since $\text{rank}(\mathcal{C}) = 1 < n=2$, the system is **not controllable**.

c) **Observability:**
$CA = \begin{bmatrix} 1 & 0 \end{bmatrix} \begin{bmatrix} -1 & 0 \\ 0 & -2 \end{bmatrix} = \begin{bmatrix} -1 & 0 \end{bmatrix}$
Observability matrix $\mathcal{O} = \begin{bmatrix} C \\ CA \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ -1 & 0 \end{bmatrix}$
$\det(\mathcal{O}) = (1)(0) - (0)(-1) = 0$.
$\text{rank}(\mathcal{O}) = 1$.
Since $\text{rank}(\mathcal{O}) = 1 < n=2$, the system is **not observable**.

---

**Question 2:** Consider a system with $A = \begin{bmatrix} 0 & 1 \\ -1 & -1 \end{bmatrix}$ and $B = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$. Is this system controllable?

**Answer 2:**
Given:
$A = \begin{bmatrix} 0 & 1 \\ -1 & -1 \end{bmatrix}$, $B = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$
System order $n=2$.

$AB = \begin{bmatrix} 0 & 1 \\ -1 & -1 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} 0 \\ -1 \end{bmatrix}$
Controllability matrix $\mathcal{C} = [B \quad AB] = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$
$\det(\mathcal{C}) = (1)(-1) - (0)(0) = -1 \neq 0$.
$\text{rank}(\mathcal{C}) = 2$.
Since $\text{rank}(\mathcal{C}) = n=2$, the system is **controllable**.

---

### **9. Important Points to Remember**

*   **Stability:** Determined by the eigenvalues of the $A$ matrix. All eigenvalues must have negative real parts for asymptotic stability.
*   **Controllability:** Assessed by the rank of the controllability matrix $\mathcal{C} = [B \quad AB \quad \dots \quad A^{n-1}B]$. Full rank ($n$) means controllable.
*   **Observability:** Assessed by the rank of the observability matrix $\mathcal{O} = \begin{bmatrix} C \\ CA \\ \vdots \\ CA^{n-1} \end{bmatrix}$. Full rank ($n$) means observable.
*   **Software Tools:** MATLAB's `eig()`, `ctrb()`, `obsv()`, and `rank()` functions are essential for these analyses.
*   **Duality:** The controllability of $(A, B)$ is equivalent to the observability of $(A^T, C^T)$.
*   **Foundation for Design:** Controllability and observability are prerequisite conditions for designing state feedback controllers and observers, respectively.

---

This concludes the notes for determining open-loop stability, controllability, and observability from state-space models. Remember to practice with different examples using MATLAB to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
