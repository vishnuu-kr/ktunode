---
title: "solution using mesh analysis and nodal analysis"
subject: "CIRCUITS & NETWORKS"
module: "Module 3: Laplace transforms( Review only)"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35ad3"
status: "completed"
scrapedAt: "2026-05-23T16:11:37.638Z"
---
# CIRCUITS & NETWORKS - Module 3: Laplace Transforms (Review)

## Topic: Solution using Mesh Analysis and Nodal Analysis

**Knowledge Level:** K3 (Applying)

**Course Outcomes Addressed:**
*   **CO2:** Apply transformation from time domain to s-domain, solve dynamic electric circuits.

---

### 1. Introduction to Time Domain vs. s-Domain Analysis

*   **Time Domain Analysis:** Deals with circuits directly using differential equations. This can become complex, especially for circuits with multiple reactive elements (capacitors and inductors).
*   **s-Domain Analysis (Laplace Domain):** Transforms circuit elements and sources from the time domain ($t$) to the complex frequency domain ($s$). This converts differential equations into algebraic equations, simplifying the solution process.

---

### 2. Review of Laplace Transform Properties Relevant to Circuit Analysis

*   **Linearity:** $\mathcal{L}\{af(t) + bg(t)\} = aF(s) + bG(s)$
*   **Time Shifting:** $\mathcal{L}\{f(t-a)u(t-a)\} = e^{-as}F(s)$
*   **Frequency Shifting:** $\mathcal{L}\{e^{-at}f(t)\} = F(s+a)$
*   **Differentiation in Time Domain:**
    *   $\mathcal{L}\{f'(t)\} = sF(s) - f(0^-)$
    *   $\mathcal{L}\{f''(t)\} = s^2F(s) - sf(0^-) - f'(0^-)$
    *   **Initial Conditions:** The terms $f(0^-)$ and $f'(0^-)$ represent the initial values of the function and its derivative just before $t=0$. These are crucial for solving differential equations.
*   **Integration in Time Domain:** $\mathcal{L}\{\int_{0^-}^{t} f(\tau) d\tau\} = \frac{F(s)}{s}$
*   **Convolution:** $\mathcal{L}\{(f * g)(t)\} = F(s)G(s)$
*   **Initial Value Theorem (IVT):** $f(0^+) = \lim_{s \to \infty} sF(s)$ (Useful for checking initial conditions)
*   **Final Value Theorem (FVT):** $f(\infty) = \lim_{s \to 0} sF(s)$ (Useful for steady-state analysis, provided poles of $sF(s)$ are in the left-half plane or at the origin for marginally stable systems)

---

### 3. Circuit Elements in the s-Domain

The Laplace transform is applied to the circuit elements themselves, representing their impedance in the s-domain.

| Element     | Time Domain Voltage-Current Relation | s-Domain Impedance ($Z(s)$) | s-Domain Admittance ($Y(s)$) |
| :---------- | :----------------------------------- | :-------------------------- | :--------------------------- |
| Resistor (R) | $v(t) = Ri(t)$                       | $R$                         | $1/R$                        |
| Inductor (L) | $v(t) = L \frac{di(t)}{dt}$          | $sL$                        | $1/(sL)$                     |
| Capacitor (C) | $i(t) = C \frac{dv(t)}{dt}$          | $1/(sC)$                    | $sC$                         |

**Handling Initial Conditions for Inductors and Capacitors:**

*   **Inductor with Initial Current ($i_L(0^-) = I_0$):**
    *   The voltage across the inductor is $v_L(t) = L \frac{di_L(t)}{dt}$.
    *   Taking the Laplace transform: $V_L(s) = sL I_L(s) - L i_L(0^-)$.
    *   To represent this in the s-domain circuit, the inductor is replaced by its impedance $sL$ in series with a voltage source of value $L i_L(0^-)$ acting in the direction of the initial current. Alternatively, it can be represented by an impedance $sL$ in parallel with a current source of value $i_L(0^-)/s$.
    *   **Preferred Model:** Series voltage source $L i_L(0^-)$ across the impedance $sL$.
*   **Capacitor with Initial Voltage ($v_C(0^-) = V_0$):**
    *   The current through the capacitor is $i_C(t) = C \frac{dv_C(t)}{dt}$.
    *   Taking the Laplace transform: $I_C(s) = sC V_C(s) - C v_C(0^-)$.
    *   To represent this in the s-domain circuit, the capacitor is replaced by its impedance $1/(sC)$ in series with a voltage source of value $v_C(0^-)/s$. Alternatively, it can be represented by an impedance $1/(sC)$ in parallel with a current source of value $C v_C(0^-)$.
    *   **Preferred Model:** Series voltage source $V_0/s$ across the impedance $1/(sC)$.

---

### 4. Mesh Analysis in the s-Domain

Mesh analysis involves applying Kirchhoff's Voltage Law (KVL) to independent loops (meshes) in a circuit. In the s-domain, KVL is applied using s-domain impedances and source voltages.

**Steps:**

1.  **Transform the Circuit:**
    *   Replace all sources (voltage and current) with their Laplace transforms.
    *   Replace all resistors, inductors, and capacitors with their s-domain impedances ($R$, $sL$, $1/(sC)$ respectively).
    *   Include any initial conditions for inductors and capacitors as series voltage sources.
2.  **Define Mesh Currents:** Assign a mesh current (e.g., $I_1(s)$, $I_2(s)$, ...) to each independent loop in the circuit. Assume a clockwise direction for all mesh currents.
3.  **Write KVL Equations:** For each mesh, write a KVL equation by summing the voltage drops (impedance multiplied by mesh current, considering mutual impedances) and equating them to the sum of voltage sources in that mesh.
    *   The voltage drop across an impedance $Z(s)$ in a mesh with current $I_k(s)$ and adjacent mesh with current $I_j(s)$ is $Z(s) (I_k(s) \mp I_j(s))$, where the minus sign is used if the currents are in opposite directions through the impedance.
4.  **Solve the System of Linear Equations:** Solve the resulting system of linear algebraic equations for the unknown mesh currents $I_k(s)$. This can be done using substitution, elimination, Cramer's rule, or matrix methods.
5.  **Find Desired Quantities:** Once the mesh currents are found in the s-domain, they can be used to calculate other quantities like voltage across elements or current through specific branches. If the response in the time domain is required, use Inverse Laplace Transform.

**Example 1 (No Initial Conditions):**

Consider an RL circuit with a voltage source $v(t) = V_m u(t)$ connected in series with a resistor R and an inductor L.
*   **Time Domain Equation:** $L \frac{di(t)}{dt} + Ri(t) = V_m u(t)$
*   **s-Domain Transformation:**
    *   $V(s) = \mathcal{L}\{V_m u(t)\} = V_m/s$
    *   $Z_R(s) = R$
    *   $Z_L(s) = sL$
*   **KVL Equation:** $Z_L(s) I(s) + Z_R(s) I(s) = V(s)$
    *   $sL I(s) + R I(s) = V_m/s$
    *   $(sL + R) I(s) = V_m/s$
*   **Solve for $I(s)$:** $I(s) = \frac{V_m}{s(sL + R)}$
*   **Inverse Laplace Transform:** Using partial fraction decomposition, we can find $i(t)$.

**Example 2 (With Initial Condition):**

Consider the same RL circuit, but assume the inductor has an initial current $I_0$ at $t=0^-$.
*   **s-Domain Transformation (with initial condition):**
    *   $V(s) = V_m/s$
    *   $Z_R(s) = R$
    *   The inductor impedance is $sL$ in series with a voltage source $L i_L(0^-) = L I_0$.
*   **KVL Equation:** $L I_0 + Z_L(s) I(s) + Z_R(s) I(s) = V(s)$
    *   $L I_0 + (sL + R) I(s) = V_m/s$
*   **Solve for $I(s)$:**
    *   $(sL + R) I(s) = \frac{V_m}{s} - L I_0$
    *   $I(s) = \frac{V_m}{s(sL + R)} - \frac{L I_0}{sL + R}$
*   **Inverse Laplace Transform:** This expression can be decomposed and transformed back to the time domain to obtain the complete solution, including the transient due to the initial condition.

---

### 5. Nodal Analysis in the s-Domain

Nodal analysis involves applying Kirchhoff's Current Law (KCL) at independent nodes in a circuit. In the s-domain, KCL is applied using s-domain admittances and source currents.

**Steps:**

1.  **Transform the Circuit:**
    *   Replace all sources (voltage and current) with their Laplace transforms.
    *   Replace all resistors, inductors, and capacitors with their s-domain admittances ($1/R$, $1/(sL)$, $sC$ respectively).
    *   Include any initial conditions for inductors and capacitors as current sources. For an inductor with initial current $I_0$, it appears as a current source $I_0$ in parallel with $sL$ if modelled as a current source. For a capacitor with initial voltage $V_0$, it appears as a current source $C V_0$ in parallel with $sC$ if modelled as a current source. **Note:** The source representation for initial conditions in nodal analysis can be slightly counter-intuitive. A voltage source with initial voltage $V_0$ across a capacitor $C$ can be modelled as a current source $CV_0$ *leaving* the node where the capacitor voltage is defined. This is often easier to handle by converting voltage sources to current sources first.
    *   **Alternative for Voltage Sources with Initial Conditions:** If a voltage source $V(s)$ has an initial voltage $V_0$ associated with a capacitor in series, it's often easier to convert the voltage source to its Norton equivalent first. If a voltage source $V(s)$ is in series with an impedance $Z(s)$, its Norton equivalent is a current source $V(s)/Z(s)$ in parallel with $Z(s)$. If there's an initial voltage $V_0$ across a capacitor $C$, this would be modelled as a current source $CV_0$ *leaving* the node.
2.  **Define Node Voltages:** Assign a node voltage (e.g., $V_1(s)$, $V_2(s)$, ...) to each independent node. Choose a reference node (ground) with a voltage of 0.
3.  **Write KCL Equations:** For each non-reference node, write a KCL equation by summing the currents leaving the node and equating them to the sum of current sources entering the node.
    *   The current flowing from node $k$ to node $j$ through an admittance $Y(s)$ is $Y(s)(V_k(s) - V_j(s))$.
4.  **Solve the System of Linear Equations:** Solve the resulting system of linear algebraic equations for the unknown node voltages $V_k(s)$.
5.  **Find Desired Quantities:** Once the node voltages are found in the s-domain, they can be used to calculate other quantities like current through specific elements. If the response in the time domain is required, use Inverse Laplace Transform.

**Example 1 (No Initial Conditions):**

Consider a parallel RC circuit with a current source $i(t) = I_m u(t)$ connected in parallel with a resistor R and a capacitor C.
*   **Time Domain Equation:** $C \frac{dv(t)}{dt} + \frac{v(t)}{R} = I_m u(t)$
*   **s-Domain Transformation:**
    *   $I(s) = \mathcal{L}\{I_m u(t)\} = I_m/s$
    *   $Y_R(s) = 1/R$
    *   $Y_C(s) = sC$
*   **KCL Equation at the top node (assuming bottom is ground):** $Y_C(s) V(s) + Y_R(s) V(s) = I(s)$
    *   $sC V(s) + (1/R) V(s) = I_m/s$
    *   $(sC + 1/R) V(s) = I_m/s$
*   **Solve for $V(s)$:** $V(s) = \frac{I_m}{s(sC + 1/R)}$
*   **Inverse Laplace Transform:** Using partial fraction decomposition, we can find $v(t)$.

**Example 2 (With Initial Condition):**

Consider the same RC circuit, but assume the capacitor has an initial voltage $V_0$ at $t=0^-$.
*   **s-Domain Transformation (with initial condition):**
    *   $I(s) = I_m/s$
    *   $Y_R(s) = 1/R$
    *   The capacitor admittance is $sC$. The initial voltage $V_0$ across the capacitor can be modelled as a current source $C V_0$ leaving the node.
*   **KCL Equation at the top node:** $C V_0 + Y_C(s) V(s) + Y_R(s) V(s) = I(s)$
    *   $C V_0 + sC V(s) + (1/R) V(s) = I_m/s$
*   **Solve for $V(s)$:**
    *   $(sC + 1/R) V(s) = \frac{I_m}{s} - C V_0$
    *   $V(s) = \frac{I_m}{s(sC + 1/R)} - \frac{C V_0}{sC + 1/R}$
*   **Inverse Laplace Transform:** This expression can be decomposed and transformed back to the time domain to obtain the complete solution.

---

### 6. Comparison of Mesh and Nodal Analysis in the s-Domain

| Feature             | Mesh Analysis                                   | Nodal Analysis                                       |
| :------------------ | :---------------------------------------------- | :--------------------------------------------------- |
| **Principle**       | KVL                                             | KCL                                                  |
| **Variables**       | Mesh currents                                   | Node voltages                                        |
| **Equations**       | Number of equations = Number of meshes          | Number of equations = Number of non-reference nodes  |
| **Element Model**   | Impedances in series                            | Admittances in parallel                              |
| **Voltage Sources** | Directly included in KVL equations              | Often converted to current sources (Norton equivalent) |
| **Current Sources** | Converted to equivalent voltage sources (series) | Directly included in KCL equations                   |
| **Circuit Type**    | More suitable for circuits with fewer meshes (e.g., series-parallel) | More suitable for circuits with fewer nodes (e.g., parallel) |
| **Initial Conditions** | Inductor: series voltage source; Capacitor: series voltage source | Inductor: parallel current source; Capacitor: parallel current source (or handled via source conversion) |

---
