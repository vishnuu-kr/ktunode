---
title: "natural response and forced response"
subject: "CIRCUITS & NETWORKS"
module: "Module 3: Laplace transforms( Review only)"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35acf"
status: "completed"
scrapedAt: "2026-05-23T16:11:34.675Z"
---
# CIRCUITS & NETWORKS: Module 3 - Laplace Transforms (Review)

## Topic: Natural Response and Forced Response

---

### Introduction

This module provides a review of Laplace transforms, focusing on their application in analyzing the behavior of electric circuits. Specifically, we will revisit the concepts of natural response and forced response, which are fundamental to understanding how circuits react to changes in their inputs and initial conditions. The Laplace transform is a powerful tool that converts differential equations describing circuit behavior in the time domain into algebraic equations in the frequency (s) domain, simplifying the analysis of dynamic circuits.

---

### Learning Outcomes

By the end of this review, you should be able to:

*   Understand and differentiate between the natural and forced responses of an electric circuit.
*   Relate the natural and forced responses to the transient and steady-state behaviors of a circuit.
*   Apply Laplace transforms to determine the natural response of a circuit.
*   Apply Laplace transforms to determine the forced response of a circuit.
*   Combine natural and forced responses to obtain the complete solution for a dynamic circuit.
*   Recognize the role of initial conditions in determining the natural response.
*   Recognize the role of the input excitation in determining the forced response.

---

### Key Concepts and Definitions

#### 1. Dynamic Circuits

Circuits containing energy storage elements like inductors (L) and capacitors (C) are called dynamic circuits. Their behavior changes over time, and their analysis often involves solving differential equations.

#### 2. Natural Response (Transient Response)

*   **Definition:** The natural response of a circuit is the response that exists when the circuit is energized solely by its initial stored energy. This response is independent of the external excitation (input signal) but depends entirely on the circuit's internal characteristics (e.g., component values, topology) and its initial conditions.
*   **Characteristics:**
    *   It represents the circuit's tendency to return to its "natural" state after a disturbance.
    *   It decays over time due to energy dissipation in resistive elements.
    *   It is characterized by the roots of the characteristic equation of the circuit's differential equation. These roots are often called the *poles* of the system.
    *   It is often referred to as the *transient response* because it typically occurs during a transition period.
*   **Laplace Domain Representation:** In the s-domain, the natural response is primarily determined by the terms involving the characteristic roots (poles of the system) and the initial conditions.

#### 3. Forced Response (Steady-State Response)

*   **Definition:** The forced response of a circuit is the response that occurs due to the presence of an external excitation or input signal. This response persists as long as the input signal is applied and does not depend on the initial conditions of the circuit.
*   **Characteristics:**
    *   It reflects the circuit's behavior under the influence of the applied source.
    *   If the input is a constant or sinusoidal signal, the forced response often settles into a steady-state behavior (constant DC value or a sinusoid at the same frequency as the input).
    *   It is determined by the type of input signal and the circuit's impedance/admittance characteristics.
*   **Laplace Domain Representation:** In the s-domain, the forced response is primarily determined by the input excitation function and the circuit's transfer function.

#### 4. Total Response

The total response of a dynamic circuit is the sum of its natural response and its forced response.

$$v_{total}(t) = v_{natural}(t) + v_{forced}(t)$$

$$i_{total}(t) = i_{natural}(t) + i_{forced}(t)$$

#### 5. Initial Conditions

*   The behavior of dynamic circuits is influenced by the energy stored in capacitors (initial voltage across them) and inductors (initial current through them) at the time the circuit is activated or when the input changes.
*   These initial conditions are crucial for determining the natural response.

#### 6. Characteristic Equation and Poles

*   For an $n$-th order linear time-invariant (LTI) circuit, the differential equation describing its behavior will be an $n$-th order differential equation.
*   The *characteristic equation* is obtained by setting the forcing function (input) to zero and replacing derivatives with powers of 's'.
*   The roots of the characteristic equation are called the *poles* of the system. These poles dictate the form of the natural response.
    *   **Real and distinct poles:** Exponential decay (e.g., $Ae^{-at}$).
    *   **Real and repeated poles:** Exponential decay with a multiplicative 't' term (e.g., $(A+Bt)e^{-at}$).
    *   **Complex conjugate poles:** Oscillatory behavior with exponential decay (e.g., $e^{-at}(A\cos(\omega t) + B\sin(\omega t))$).

---

### Analyzing Natural and Forced Responses using Laplace Transforms

The Laplace transform provides a systematic way to find both the natural and forced responses.

**General Procedure:**

1.  **Transform the Circuit to the s-domain:**
    *   Replace resistors ($R$) with $R$.
    *   Replace inductors ($L$) with $sL$.
    *   Replace capacitors ($C$) with $\frac{1}{sC}$.
    *   **Initial Conditions:**
        *   For an inductor with initial current $i_L(0)$, it is represented by a voltage source in series with $sL$: $sL \cdot I(s) - L \cdot i_L(0)$.
        *   For a capacitor with initial voltage $v_C(0)$, it is represented by a current source in parallel with $\frac{1}{sC}$: $\frac{1}{sC} \cdot I(s) - C \cdot v_C(0)$.
    *   Transform the input excitation function $f(t)$ to $F(s)$.

2.  **Solve for the Total Response in the s-domain ($X(s)$):**
    *   Use circuit analysis techniques (e.g., nodal analysis, mesh analysis, voltage/current division, impedance/admittance combination) in the s-domain to find the overall response (e.g., voltage across a component, current through a branch) as a function of $s$. This will be a rational function of $s$.

3.  **Decompose the Total Response into Natural and Forced Components (using Partial Fraction Expansion):**
    *   The total response $X(s)$ can often be expressed as the sum of terms related to the natural response and terms related to the forced response.
    *   **Natural Response components:** These terms will have denominators corresponding to the poles of the system (roots of the characteristic equation) and numerators determined by the initial conditions.
    *   **Forced Response components:** These terms will have denominators corresponding to the roots of the input excitation function (e.g., for a step input $U(s) = 1/s$, there will be a term with $1/s$).

4.  **Inverse Laplace Transform:**
    *   Apply the inverse Laplace transform to each component to obtain the time-domain responses:
        *   $x_{natural}(t) = \mathcal{L}^{-1}\{X_{natural}(s)\}$
        *   $x_{forced}(t) = \mathcal{L}^{-1}\{X_{forced}(s)\}$
        *   $x_{total}(t) = x_{natural}(t) + x_{forced}(t)$

---

### Techniques for Separating Natural and Forced Responses

#### Method 1: Solving the Complete s-Domain Equation

After transforming the circuit and obtaining the total response $X(s)$, perform a partial fraction expansion. The terms in the expansion will naturally fall into categories related to the system's natural modes (determined by the denominator's roots from the circuit's characteristic equation) and the input's modes (determined by the denominator's roots from the input function).

**Example:** Suppose the total response in the s-domain is given by:
$$X(s) = \frac{As + B}{(s+a)(s+b)} + \frac{C}{s+d}$$
where $(s+a)$ and $(s+b)$ are factors of the characteristic equation, and $(s+d)$ is a factor of the input function.

*   **Natural Response Components:** $\frac{As + B}{(s+a)(s+b)}$ (assuming these poles are from the characteristic equation). The inverse transform of this part will yield the natural response.
*   **Forced Response Components:** $\frac{C}{s+d}$ (assuming $s+d$ originates from the input function). The inverse transform of this part will yield the forced response.

#### Method 2: Separate Analysis (Conceptual)

While the Laplace domain approach is unified, conceptually, we can think of it as:

1.  **Natural Response:** Analyze the circuit with the input set to zero (short circuit for voltage sources, open circuit for current sources), and consider the effect of initial conditions. Transform this circuit to the s-domain, and solve for the response. This will directly give terms dependent on initial conditions and characteristic roots.
2.  **Forced Response:** Analyze the circuit with zero initial conditions and the original input applied. Transform this circuit to the s-domain and solve for the response. This will give terms dependent on the input and transfer function.

**Important Note:** In practice, using Method 1 by performing a full partial fraction expansion of the *total* s-domain response is more efficient and often less prone to error when using Laplace transforms.

---

### Example: First-Order RL Circuit

Consider an RL series circuit with a resistor $R$, an inductor $L$, and a voltage source $V_s$ applied at $t=0$. Assume an initial current $i(0)$ through the inductor.

**Circuit:**
```
   +---- R ----+---- L ----+
   |           |           |
 Vs(t)         i(t)       Ground
   |           |           |
   +-----------+-----------+
```

**Differential Equation (Time Domain):**
$L \frac{di(t)}{dt} + R i(t) = V_s(t)$

Let $V_s(t) = V_u(t)$ (a step voltage) for $t \ge 0$.
$L \frac{di(t)}{dt} + R i(t) = V_u(t)$

**Characteristic Equation:**
If we set the input to zero ($V_u(t) = 0$), we get $L \frac{di(t)}{dt} + R i(t) = 0$.
Replacing $\frac{d}{dt}$ with $s$, we get the characteristic equation:
$Ls + R = 0 \implies s = -\frac{R}{L}$

The pole of the system is at $s = -R/L$.

**Laplace Domain Analysis:**
Transform the equation:
$L(sI(s) - i(0)) + RI(s) = \frac{V}{s}$
$sLI(s) - Li(0) + RI(s) = \frac{V}{s}$
$I(s)(sL + R) = Li(0) + \frac{V}{s}$
$I(s) = \frac{Li(0)}{sL + R} + \frac{V}{s(sL + R)}$

**Separating Terms for Natural and Forced Response:**

Divide numerator and denominator by $L$:
$I(s) = \frac{i(0)}{s + R/L} + \frac{V}{s(s + R/L)}$

Let's perform partial fraction expansion on the second term:
$\frac{V}{s(s + R/L)} = \frac{A}{s} + \frac{B}{s + R/L}$
$V = A(s + R/L) + Bs$

Setting $s=0$: $V = A(R/L) \implies A = \frac{VL}{R}$
Setting $s=-R/L$: $V = B(-R/L) \implies B = -\frac{VL}{R}$

So, $\frac{V}{s(s + R/L)} = \frac{VL/R}{s} - \frac{VL/R}{s + R/L}$

Now, substitute back into $I(s)$:
$I(s) = \frac{i(0)}{s + R/L} + \frac{VL/R}{s} - \frac{VL/R}{s + R/L}$
$I(s) = \frac{VL/R}{s} + \frac{i(0) - VL/R}{s + R/L}$

**Identify Natural and Forced Components:**

*   **Natural Response ($I_{natural}(s)$):** This component is associated with the system pole $s = -R/L$ and is determined by the initial condition.
    $I_{natural}(s) = \frac{i(0) - VL/R}{s + R/L}$
    The term $VL/R$ represents the steady-state current at $t=0$ (if the step voltage was applied earlier and the circuit reached steady state). So, $i(0) - VL/R$ is the initial *difference* from the final steady-state value.

*   **Forced Response ($I_{forced}(s)$):** This component is associated with the input function (step voltage, $1/s$) and the circuit's steady-state behavior.
    $I_{forced}(s) = \frac{VL/R}{s}$

**Inverse Laplace Transform:**

*   **Natural Response ($i_{natural}(t)$):**
    $i_{natural}(t) = \mathcal{L}^{-1}\left\{\frac{i(0) - VL/R}{s + R/L}\right\} = \left(i(0) - \frac{V}{R}\right) e^{-(R/L)t}$
    This is an exponential decay. The term $\frac{V}{R}$ is the steady-state current. So, the natural response is an exponential decay of the initial deviation from the steady-state value.

*   **Forced Response ($i_{forced}(t)$):**
    $i_{forced}(t) = \mathcal{L}^{-1}\left\{\frac{V/R}{s}\right\} = \frac{V}{R}$
    This is a constant DC value, representing the steady-state current through the inductor after a long time when the inductor acts as a short circuit.

**Total Response:**
$i(t) = i_{natural}(t) + i_{forced}(t) = \left(i(0) - \frac{V}{R}\right) e^{-(R/L)t} + \frac{V}{R}$

Let's verify for $t=0$:
$i(0) = (i(0) - V/R)e^0 + V/R = i(0) - V/R + V/R = i(0)$. This is correct.

---

### Example: First-Order RC Circuit

Consider an RC series circuit with a resistor $R$, a capacitor $C$, and a voltage source $V_s$ applied at $t=0$. Assume an initial voltage $v_C(0)$ across the capacitor.

**Circuit:**
```
   +---- R ----+---- C ----+
   |           |           |
 Vs(t)         v_C(t)     Ground
   |           |           |
   +-----------+-----------+
```

**Differential Equation (Time Domain):**
$R i(t) + v_C(t) = V_s(t)$
where $i(t) = C \frac{dv_C(t)}{dt}$

Substituting $i(t)$:
$RC \frac{dv_C(t)}{dt} + v_C(t) = V_s(t)$

Let $V_s(t) = V_u(t)$ (a step voltage) for $t \ge 0$.
$RC \frac{dv_C(t)}{dt} + v_C(t) = V_u(t)$

**Characteristic Equation:**
$RCs + 1 = 0 \implies s = -\frac{1}{RC}$

The pole of the system is at $s = -1/(RC)$.

**Laplace Domain Analysis:**
Transform the equation:
$RC(sV_C(s) - v_C(0)) + V_C(s) = \frac{V}{s}$
$sRCV_C(s) - RCv_C(0) + V_C(s) = \frac{V}{s}$
$V_C(s)(sRC + 1) = RCv_C(0) + \frac{V}{s}$
$V_C(s) = \frac{RCv_C(0)}{sRC + 1} + \frac{V}{s(sRC + 1)}$

Divide numerator and denominator by $RC$:
$V_C(s) = \frac{v_C(0)}{s + 1/RC} + \frac{V/RC}{s(s + 1/RC)}$

Let's perform partial fraction expansion on the second term:
$\frac{V/RC}{s(s + 1/RC)} = \frac{A}{s} + \frac{B}{s + 1/RC}$
$V/RC = A(s + 1/RC) + Bs$

Setting $s=0$: $V/RC = A(1/RC) \implies A = V$
Setting $s=-1/RC$: $V/RC = B(-1/RC) \implies B = -V$

So, $\frac{V/RC}{s(s + 1/RC)} = \frac{V}{s} - \frac{V}{s + 1/RC}$

Now, substitute back into $V_C(s)$:
$V_C(s) = \frac{v_C(0)}{s + 1/RC} + \frac{V}{s} - \frac{V}{s + 1/RC}$
$V_C(s) = \frac{V}{s} + \frac{v_C(0) - V}{s + 1/RC}$

**Identify Natural and Forced Components:**

*   **Natural Response ($V_{C,natural}(s)$):**
    $V_{C,natural}(s) = \frac{v_C(0) - V}{s + 1/RC}$
    The term $V$ is the steady-state voltage across the capacitor. So, $v_C(0) - V$ is the initial deviation from the final steady-state value.

*   **Forced Response ($V_{C,forced}(s)$):**
    $V_{C,forced}(s) = \frac{V}{s}$
    This is a constant DC value, representing the steady-state voltage across the capacitor after a long time when the capacitor acts as an open circuit.

**Inverse Laplace Transform:**

*   **Natural Response ($v_{C,natural}(t)$):**
    $v_{C,natural}(t) = \mathcal{L}^{-1}\left\{\frac{v_C(0) - V}{s + 1/RC}\right\} = (v_C(0) - V) e^{-t/(RC)}$
    This is an exponential decay. The term $V$ is the steady-state voltage. So, the natural response is an exponential decay of the initial deviation from the steady-state value.

*   **Forced Response ($v_{C,forced}(t)$):**
    $v_{C,forced}(t) = \mathcal{L}^{-1}\left\{\frac{V}{s}\right\} = V$
    This is a constant DC value, representing the steady-state voltage across the capacitor.

**Total Response:**
$v_C(t) = v_{C,natural}(t) + v_{C,forced}(t) = (v_C(0) - V) e^{-t/(RC)} + V$

Let's verify for $t=0$:
$v_C(0) = (v_C(0) - V)e^0 + V = v_C(0) - V + V = v_C(0)$. This is correct.

---

### Second-Order Circuits (Briefly)

For second-order circuits (e.g., RLC circuits), the characteristic equation will be a quadratic equation:
$as^2 + bs + c = 0$
The roots of this equation (poles) can be:
*   **Real and distinct:** Overdamped response (two exponential decays).
*   **Real and repeated:** Critically damped response (one exponential decay multiplied by $t$).
*   **Complex conjugate:** Underdamped response (oscillatory decay).

The total response will be the sum of natural response terms (based on these pole types and initial conditions) and the forced response term(s) (based on the input).

---

### Important Points to Remember

*   **Natural Response:** Driven by initial conditions, decays to zero over time (if poles are in the left half of the s-plane).
*   **Forced Response:** Driven by the input signal, persists as long as the input is present.
*   The total response is the sum of natural and forced responses.
*   Laplace transforms convert differential equations into algebraic equations, simplifying analysis.
*   Initial conditions are crucial for determining the natural response and are incorporated into the s-domain model.
*   The denominator of the characteristic equation determines the form of the natural response.
*   Partial fraction expansion is key to separating the total s-domain response into natural and forced components.
*   **Textbook References:**
    *   **Van Valkenburg (Network Analysis):** Chapters on transient analysis, Laplace transforms, and second-order circuits will provide detailed explanations and examples of natural and forced responses.
    *   **Ravish R Singh (Network Analysis and Synthesis):** Similar coverage of transient analysis, Laplace transform techniques, and the decomposition of total response.
    *   **Suresh Kumar (Electric Circuits & Networks):** Focus on Laplace transform applications for analyzing dynamic circuits, including the concepts of transient and steady-state behaviors.
    *   **A. Sudhakar, Shyammohan S. Palli (Circuits and Networks, Analysis and Synthesis):** Likely to offer comprehensive treatments of differential equations in circuit analysis, Laplace transform methods, and the physical interpretation of natural and forced responses.

---

### Practice Questions and Exercises

**Question 1:**
A series RL circuit with $R=10\ \Omega$ and $L=0.5\ H$ is connected to a step voltage source of $50\ V$ at $t=0$. Assume the initial current through the inductor is $i(0) = 2\ A$.
1.  Determine the s-domain expression for the inductor current $I(s)$.
2.  Separate $I(s)$ into terms representing the natural and forced responses.
3.  Find the natural response $i_{natural}(t)$.
4.  Find the forced response $i_{forced}(t)$.
5.  Write the total response $i(t)$.

**Answer 1:**
1.  Characteristic equation pole: $s = -R/L = -10/0.5 = -20$.
    $I(s) = \frac{Li(0)}{sL+R} + \frac{V}{s(sL+R)} = \frac{0.5 \times 2}{s \times 0.5 + 10} + \frac{50}{s(s \times 0.5 + 10)}$
    $I(s) = \frac{1}{0.5(s+20)} + \frac{50}{0.5s(s+20)} = \frac{2}{s+20} + \frac{100}{s(s+20)}$

2.  Perform PFE on the second term: $\frac{100}{s(s+20)} = \frac{A}{s} + \frac{B}{s+20}$
    $100 = A(s+20) + Bs$
    $s=0 \implies 100 = 20A \implies A=5$
    $s=-20 \implies 100 = -20B \implies B=-5$
    So, $\frac{100}{s(s+20)} = \frac{5}{s} - \frac{5}{s+20}$

    $I(s) = \frac{2}{s+20} + \frac{5}{s} - \frac{5}{s+20} = \frac{5}{s} + \frac{2-5}{s+20} = \frac{5}{s} - \frac{3}{s+20}$

    *   **Natural Response Component in s-domain:** $I_{natural}(s) = -\frac{3}{s+20}$
    *   **Forced Response Component in s-domain:** $I_{forced}(s) = \frac{5}{s}$

3.  **Natural Response ($i_{natural}(t)$):**
    $i_{natural}(t) = \mathcal{L}^{-1}\left\{-\frac{3}{s+20}\right\} = -3e^{-20t}$

4.  **Forced Response ($i_{forced}(t)$):**
    $i_{forced}(t) = \mathcal{L}^{-1}\left\{\frac{5}{s}\right\} = 5$

5.  **Total Response ($i(t)$):**
    $i(t) = i_{natural}(t) + i_{forced}(t) = -3e^{-20t} + 5\ A$

**Question 2:**
Consider a series RC circuit with $R=5\ k\Omega$ and $C=0.1\ \mu F$. A step voltage of $10\ V$ is applied at $t=0$. The initial voltage across the capacitor is $v_C(0) = 8\ V$.
1.  Find the s-domain expression for the capacitor voltage $V_C(s)$.
2.  Determine the natural response $v_{C,natural}(t)$.
3.  Determine the forced response $v_{C,forced}(t)$.
4.  Write the total response $v_C(t)$.

**Answer 2:**
1.  Characteristic equation pole: $s = -1/(RC) = -1/((5 \times 10^3)(0.1 \times 10^{-6})) = -1/(0.5 \times 10^{-3}) = -2000$.
    $V_C(s) = \frac{v_C(0)}{s+1/RC} + \frac{V}{s(s+1/RC)} = \frac{8}{s+2000} + \frac{10}{s(s+2000)}$

2.  Perform PFE on the second term: $\frac{10}{s(s+2000)} = \frac{A}{s} + \frac{B}{s+2000}$
    $10 = A(s+2000) + Bs$
    $s=0 \implies 10 = 2000A \implies A = 10/2000 = 0.005$
    $s=-2000 \implies 10 = -2000B \implies B = -10/2000 = -0.005$
    So, $\frac{10}{s(s+2000)} = \frac{0.005}{s} - \frac{0.005}{s+2000}$

    $V_C(s) = \frac{8}{s+2000} + \frac{0.005}{s} - \frac{0.005}{s+2000} = \frac{0.005}{s} + \frac{8-0.005}{s+2000} = \frac{0.005}{s} + \frac{7.995}{s+2000}$

    *   **Natural Response Component in s-domain:** $V_{C,natural}(s) = \frac{7.995}{s+2000}$
    *   **Forced Response Component in s-domain:** $V_{C,forced}(s) = \frac{0.005}{s}$

3.  **Natural Response ($v_{C,natural}(t)$):**
    $v_{C,natural}(t) = \mathcal{L}^{-1}\left\{\frac{7.995}{s+2000}\right\} = 7.995e^{-2000t}$

4.  **Forced Response ($v_{C,forced}(t)$):**
    $v_{C,forced}(t) = \mathcal{L}^{-1}\left\{\frac{0.005}{s}\right\} = 0.005$

5.  **Total Response ($v_C(t)$):**
    $v_C(t) = v_{C,natural}(t) + v_{C,forced}(t) = 7.995e^{-2000t} + 0.005\ V$

---

### Alignment with Course Outcomes

*   **CO1 (Apply circuit theorems...):** While this module focuses on Laplace transforms, the underlying analysis of circuit behavior and the understanding of initial conditions and steady-state values implicitly rely on circuit theorems.
*   **CO2 (Apply transformation... solve dynamic electric circuits):** This is the core of the module. We are transforming from time to s-domain and solving for circuit responses, specifically breaking them down into natural and forced components.
*   **CO3, CO4, CO5, CO6:** While this specific topic is a review of fundamental concepts, understanding natural and forced responses is a prerequisite for analyzing resonant circuits, three-phase networks, two-port networks, and coupled circuits, as it provides the foundation for transient and steady-state behavior in these more complex scenarios.

---
---
