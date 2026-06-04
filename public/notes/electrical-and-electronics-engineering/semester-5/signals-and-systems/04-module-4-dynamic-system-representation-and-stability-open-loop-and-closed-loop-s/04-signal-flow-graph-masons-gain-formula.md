---
title: "Signal flow graph - Mason's gain formula."
subject: "SIGNALS AND SYSTEMS"
module: "Module 4: Dynamic System Representation and Stability: Open loop and closed loop systems."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361e5"
status: "completed"
scrapedAt: "2026-05-23T16:23:55.446Z"
---
# Signals and Systems: Module 4 - Dynamic System Representation and Stability

## Topic: Signal Flow Graphs and Mason's Gain Formula

This module delves into the representation and analysis of dynamic systems, focusing on open-loop and closed-loop configurations. A key tool for understanding these systems is the **Signal Flow Graph (SFG)**, and its analysis is greatly simplified by **Mason's Gain Formula**.

---

### 4.1 Introduction to Dynamic Systems

**Key Concepts:**

*   **Dynamic System:** A system whose output depends not only on the current input but also on past inputs and internal states. These systems are typically described by differential or difference equations.
*   **Open-Loop System:** A system where the control action is independent of the system's output. There is no feedback. The output has no influence on the control input.
    *   **Example:** A toaster. The browning level is set manually, and it doesn't adjust based on how toasted the bread actually is.
*   **Closed-Loop System (Feedback System):** A system where the control action is dependent on the system's output. The output is fed back and compared to a desired reference input, and the difference (error) is used to adjust the control input.
    *   **Example:** A thermostat controlling room temperature. It measures the room temperature (output) and adjusts the heating/cooling system (control action) to maintain the desired temperature (reference input).
*   **Transfer Function:** A mathematical representation of a system's input-output relationship in the Laplace domain (for continuous-time systems) or the Z-domain (for discrete-time systems). It is defined as the ratio of the output transform to the input transform, assuming zero initial conditions.
    *   **Continuous-time:** $H(s) = \frac{Y(s)}{X(s)}$
    *   **Discrete-time:** $H(z) = \frac{Y(z)}{X(z)}$

**Relevance to Course Outcomes:**

*   **CO1 (K2):** Understanding that dynamic systems involve temporal dependencies is foundational for representing signals and performing operations.
*   **CO4 (K3):** The concepts of open and closed-loop systems are critical for analyzing the stability of continuous-time dynamical systems. Feedback mechanisms in closed-loop systems directly impact stability.

**Textbook References:**

*   **Haykin & Van Veen:** Discusses the fundamental characteristics of dynamic systems and introduces the concept of feedback.
*   **Nise:** Provides a thorough introduction to control system types, including open-loop and closed-loop systems, and their basic definitions.

---

### 4.2 Signal Flow Graphs (SFGs)

**Key Concepts:**

*   **Signal Flow Graph:** A graphical representation of a system that shows the cause-and-effect relationships between variables. It is a directed graph where nodes represent variables and directed branches represent the transfer functions between these variables.
*   **Nodes:** Represent variables (e.g., input, output, intermediate signals).
*   **Branches:** Represent the relationship (transfer function) between two nodes. The value flowing along a branch is the value at the originating node multiplied by the branch's transmittance.
*   **Transmittance:** The gain associated with a branch.
*   **Input Node (Source Node):** A node with only outgoing branches.
*   **Output Node (Sink Node):** A node with only incoming branches.
*   **Path:** A sequence of connected branches where the direction of travel is consistent.
*   **Forward Path:** A path from the input node to the output node that does not repeat any node.
*   **Feedback Path (Feedback Loop):** A path that starts and ends at the same node.
*   **Non-touching Paths:** Two paths are non-touching if they do not share any common nodes.

**Constructing a Signal Flow Graph:**

1.  **Identify System Variables:** Identify all the relevant variables in the system's equations. These will become the nodes in the SFG.
2.  **Represent Relationships as Branches:** For each equation, draw directed branches from the source variable to the destination variable with the coefficient of the source variable as the transmittance.
3.  **Connect Input and Output:** Ensure there is a clear input node and an output node. If there are multiple inputs or outputs, introduce dummy nodes and branches to simplify analysis.

**Example:**

Consider a simple feedback system with the following equations:

1.  $Y(s) = G_1(s)X(s) + G_2(s)E(s)$
2.  $E(s) = R(s) - H(s)Y(s)$

Here, $R(s)$ is the input, $Y(s)$ is the output, $E(s)$ is the error signal, $G_1(s)$ and $G_2(s)$ are forward path transmittances, and $H(s)$ is the feedback path transmittance.

**SFG Construction:**

*   Nodes: $R(s)$, $E(s)$, $Y(s)$.
*   Branches:
    *   From $R(s)$ to $E(s)$ with transmittance 1.
    *   From $E(s)$ to $Y(s)$ with transmittance $G_2(s)$.
    *   From $E(s)$ to $Y(s)$ with transmittance $G_1(s)$ (This represents the direct path from input to output if $E(s)$ was directly influenced by input). Let's assume $Y(s) = G_1(s)E(s) + G_2(s)U(s)$, and $E(s) = R(s) - H(s)Y(s)$.
        *   Nodes: $R(s)$, $E(s)$, $Y(s)$.
        *   Branch $R(s) \to E(s)$ with transmittance 1.
        *   Branch $E(s) \to Y(s)$ with transmittance $G_1(s)$.
        *   Branch $Y(s) \to E(s)$ with transmittance $-H(s)$.
        *   Need to add another input for $G_2(s)$. Let's say $U(s)$ is another input.
        *   Branch $U(s) \to Y(s)$ with transmittance $G_2(s)$.

Let's use a more standard example from textbooks:

Consider the system:
$Y(s) = G_1(s)X(s) + G_2(s)E(s)$
$E(s) = R(s) - H(s)Y(s)$

Let's rewrite these to make them directly representable as SFG:

Assume the system is described by:
$X_1 = u + c_{12} X_2 + c_{13} X_3$
$X_2 = c_{21} X_1$
$X_3 = c_{32} X_2$
$y = c_{y1} X_1$

This can be represented with nodes $u$, $X_1$, $X_2$, $X_3$, $y$.
*   $u \to X_1$ with transmittance 1.
*   $X_1 \to X_2$ with transmittance $c_{12}$.
*   $X_1 \to X_3$ with transmittance $c_{13}$.
*   $X_2 \to X_1$ with transmittance $c_{21}$.
*   $X_2 \to X_3$ with transmittance $c_{32}$.
*   $X_1 \to y$ with transmittance $c_{y1}$.

**Relevance to Course Outcomes:**

*   **CO4 (K3):** SFGs provide a visual and analytical tool for understanding the interconnections in feedback systems, which is crucial for stability analysis.

**Textbook References:**

*   **Haykin & Van Veen:** Introduces SFGs as a method for system analysis, emphasizing their graphical nature.
*   **Nise:** Details the components of SFGs and provides systematic methods for their construction from system equations (differential or transfer function equations).
*   **Ogata:** Likely to cover SFGs in the context of control systems, particularly for deriving system transfer functions.

---

### 4.3 Mason's Gain Formula

**Key Concepts:**

Mason's Gain Formula provides a systematic method to calculate the overall transfer function of a linear, time-invariant (LTI) system represented by a signal flow graph. It allows us to find the ratio of the output node's value to the input node's value.

The formula is:

$$ \frac{y}{x} = \sum_{k=1}^{N} \frac{P_k \Delta_k}{\Delta} $$

Where:

*   $\frac{y}{x}$: The overall forward path gain from input node $x$ to output node $y$.
*   $N$: The total number of forward paths from $x$ to $y$.
*   $P_k$: The gain of the $k$-th forward path.
*   $\Delta$: The determinant of the SFG. It is calculated as:
    $$ \Delta = 1 - \sum (\text{individual loop gains}) + \sum (\text{gain product of two non-touching loops}) - \sum (\text{gain product of three non-touching loops}) + \dots $$
*   $\Delta_k$: The determinant of the SFG after removing the $k$-th forward path and all loops that touch it.

**Steps to Apply Mason's Gain Formula:**

1.  **Draw the Signal Flow Graph:** Represent the system as an SFG.
2.  **Identify Forward Paths:** Find all distinct paths from the input node to the output node that do not cross themselves. Calculate the gain ($P_k$) for each forward path.
3.  **Identify Feedback Loops:** Find all distinct closed paths in the SFG. Calculate the gain for each loop.
4.  **Calculate $\Delta$:**
    *   **Individual Loop Gains:** Sum the gains of all feedback loops.
    *   **Gain Product of Two Non-touching Loops:** Identify pairs of loops that do not share any common nodes. Multiply their gains and sum these products.
    *   **Gain Product of Three Non-touching Loops:** Identify triplets of loops that do not share any common nodes. Multiply their gains and sum these products.
    *   Continue this process for higher numbers of non-touching loops until no more combinations can be found.
    *   Substitute these sums into the formula for $\Delta$: $\Delta = 1 - \sum L_i + \sum L_i L_j (\text{non-touching}) - \sum L_i L_j L_k (\text{non-touching}) + \dots$
5.  **Calculate $\Delta_k$ for Each Forward Path:** For each forward path $P_k$:
    *   Remove the forward path $P_k$ from the SFG.
    *   Identify all feedback loops that do not touch $P_k$ (i.e., do not share any nodes with $P_k$).
    *   Calculate the determinant $\Delta_k$ for the remaining graph using the same formula as for $\Delta$, but only considering the loops that do not touch $P_k$. If there are no loops that do not touch $P_k$, then $\Delta_k = 1$.
6.  **Calculate the Overall Transfer Function:** Apply Mason's Gain Formula: $\frac{y}{x} = \frac{\sum P_k \Delta_k}{\Delta}$.

**Example:**

Consider the following system with block diagram:

[Imagine a block diagram here: Input R, summed with feedback signal from Y. The error signal E then goes through G1 to Y. Y also goes through H for feedback.]

System equations:
$Y(s) = G_1(s)E(s)$
$E(s) = R(s) - H(s)Y(s)$

**SFG Construction:**
Nodes: $R(s)$, $E(s)$, $Y(s)$.
*   Branch $R(s) \to E(s)$ with transmittance 1.
*   Branch $E(s) \to Y(s)$ with transmittance $G_1(s)$.
*   Branch $Y(s) \to E(s)$ with transmittance $-H(s)$.

```
      +1 ----> E(s) ---- G1(s) ----> Y(s)
       ^                               |
       |                               |
       +----------- -H(s) -------------+
```

**Applying Mason's Gain Formula:**

1.  **Forward Paths:**
    *   Path 1 ($P_1$): $R(s) \to E(s) \to Y(s)$.
    *   Gain ($P_1$): $1 \times G_1(s) = G_1(s)$.
    *   Number of forward paths, $N = 1$.

2.  **Feedback Loops:**
    *   Loop 1 ($L_1$): $E(s) \to Y(s) \to E(s)$.
    *   Gain ($L_1$): $G_1(s) \times (-H(s)) = -G_1(s)H(s)$.

3.  **Calculate $\Delta$:**
    *   Individual loop gains: $\sum L_i = L_1 = -G_1(s)H(s)$.
    *   Non-touching loops: There is only one loop, so no pairs of non-touching loops.
    *   $\Delta = 1 - (\text{sum of individual loop gains}) = 1 - (-G_1(s)H(s)) = 1 + G_1(s)H(s)$.

4.  **Calculate $\Delta_k$:**
    *   For $P_1$: Remove the forward path $R(s) \to E(s) \to Y(s)$.
    *   The loop $L_1$ ($E(s) \to Y(s) \to E(s)$) touches $P_1$ because it shares nodes $E(s)$ and $Y(s)$.
    *   Since all loops touch $P_1$, there are no loops that do not touch $P_1$.
    *   Therefore, $\Delta_1 = 1$.

5.  **Calculate the Overall Transfer Function:**
    $$ \frac{Y(s)}{R(s)} = \frac{P_1 \Delta_1}{\Delta} = \frac{G_1(s) \times 1}{1 + G_1(s)H(s)} = \frac{G_1(s)}{1 + G_1(s)H(s)} $$

This matches the standard closed-loop transfer function.

**Example with Two Non-touching Loops:**

Consider a system with SFG:
*   Nodes: $x, x_1, x_2, x_3, y$
*   Branches:
    *   $x \to x_1$ (gain 1)
    *   $x_1 \to x_2$ (gain $a$)
    *   $x_2 \to x_3$ (gain $b$)
    *   $x_3 \to y$ (gain $c$)
    *   $x_1 \to x_3$ (gain $d$)
    *   $x_2 \to x_1$ (gain $e$, loop 1)
    *   $x_3 \to x_2$ (gain $f$, loop 2)

```
      +1 ----> x1 ---- a ----> x2 ---- b ----> x3 ---- c ----> y
       ^               |       ^       ^       |
       |               |       |       |       |
       +------- e -----+       +-- d ---+       +------ f -----+
```

**Applying Mason's Gain Formula:**

1.  **Forward Paths:**
    *   $P_1$: $x \to x_1 \to x_2 \to x_3 \to y$. Gain: $1 \times a \times b \times c = abc$.
    *   $P_2$: $x \to x_1 \to x_3 \to y$. Gain: $1 \times a \times d \times c = adc$.
    *   $N = 2$.

2.  **Feedback Loops:**
    *   $L_1$: $x_1 \to x_2 \to x_1$. Gain: $a \times e$.
    *   $L_2$: $x_2 \to x_3 \to x_2$. Gain: $b \times f$.
    *   $L_3$: $x_1 \to x_2 \to x_3 \to x_1$ (not a direct loop, but a path through multiple nodes). Let's redefine loops clearly.
    *   Loop 1: $x_1 \to x_2 \to x_1$. Gain $L_1 = ae$.
    *   Loop 2: $x_2 \to x_3 \to x_2$. Gain $L_2 = bf$.
    *   Loop 3: $x_1 \to x_2 \to x_3 \to x_1$. Gain $L_3 = a \times b \times e \times d$. This is not a loop as it goes from $x_1$ back to $x_1$ but uses the branch $x_3 \to x_1$. Let's re-examine the graph connections.

Let's use the standard representation of loops: a path that starts and ends at the same node.

Corrected Loops:
*   Loop 1: $x_1 \to x_2 \to x_1$. Gain $L_1 = ae$.
*   Loop 2: $x_2 \to x_3 \to x_2$. Gain $L_2 = bf$.
*   Loop 3: $x_1 \to x_2 \to x_3 \to y$ - not a loop.
*   Loop 4: $x_1 \to x_3 \to y$ - not a loop.

Consider the path $x_1 \to x_2 \to x_3 \to x_1$: This involves the branches $x_1 \to x_2$ (a), $x_2 \to x_3$ (b), and $x_3 \to x_1$ (let's assume there's a direct branch from $x_3$ to $x_1$ with gain $g$ to form a loop).
If there is no $g$ branch, then the existing structure can form loops:
*   Loop $L_1$: $x_1 \to x_2 \to x_1$ with gain $G_{12} \times G_{21} = a \times e$.
*   Loop $L_2$: $x_2 \to x_3 \to x_2$ with gain $G_{23} \times G_{32} = b \times f$.
*   Loop $L_3$: $x_1 \to x_3 \to x_2 \to x_1$ with gain $G_{13} \times G_{32} \times G_{21} = d \times f \times e$. (This is if we trace from $x_1$ through $x_3$ to $x_2$ and back to $x_1$).

Let's simplify the SFG representation as commonly seen in textbooks for this example:

```
      +1 ----> x1 ---- a ----> x2 ---- b ----> x3 ---- c ----> y
       ^       |       ^       |       ^       |
       |       |       |       |       |       |
       |       +-- e --+       +-- d ---+       +------ f -----+
       |               ^               ^
       |               |               |
       +---------------x3------------->x2-----------------------+
```
This connection implies $x_2$ receives from $x_1$ (a), $x_1$ receives from $x_2$ (e, loop 1), $x_3$ receives from $x_2$ (b), $x_3$ receives from $x_1$ (d), $y$ receives from $x_3$ (c), and $x_2$ receives from $x_3$ (f, loop 2).

Let's be precise with the variables and dependencies:
$x_1 = 1 \cdot x + e \cdot x_2$
$x_2 = a \cdot x_1 + f \cdot x_3$
$x_3 = b \cdot x_2 + d \cdot x_1$
$y = c \cdot x_3$

SFG Nodes: $x, x_1, x_2, x_3, y$.
*   $x \to x_1$ (gain 1)
*   $x_2 \to x_1$ (gain $e$)
*   $x_1 \to x_2$ (gain $a$)
*   $x_3 \to x_2$ (gain $f$)
*   $x_2 \to x_3$ (gain $b$)
*   $x_1 \to x_3$ (gain $d$)
*   $x_3 \to y$ (gain $c$)

```
      x --1--> x1 ---- a ----> x2 ---- b ----> x3 ---- c ----> y
             ^ |       ^       ^       ^       ^
             | |       |       |       |       |
             | |       +-- e --+       +-- d ---+
             | |                       ^       ^
             | +-----------------------+-------+
             |                         |       |
             +-------------------------f-------+
```

Let's redraw this more clearly:

```
       +1 --> x1 --(a)--> x2 --(b)--> x3 --(c)--> y
       ^      | \       ^       ^       ^
       |      |  \      |       |       |
       |      |   \     |       |       |
       |      e    \    f       d       |
       |      |     \   |       |       |
       +------x2-----x3--+-------x1------+
```
This depiction is still confusing. Let's stick to the definition: nodes are variables, branches are gains between them.

Correct SFG for:
$x_1 = x + e x_2$
$x_2 = a x_1 + f x_3$
$x_3 = b x_2 + d x_1$
$y = c x_3$

Nodes: $x, x_1, x_2, x_3, y$.
*   $x \xrightarrow{1} x_1$
*   $x_1 \xrightarrow{a} x_2$
*   $x_2 \xrightarrow{f} x_3$
*   $x_3 \xrightarrow{c} y$
*   $x_1 \xrightarrow{d} x_3$
*   $x_2 \xrightarrow{e} x_1$
*   $x_3 \xrightarrow{b} x_2$

```
      x --1--> x1 --(a)--> x2 --(f)--> x3 --(c)--> y
             ^ | \       ^       ^       ^
             | |  \      |       |       |
             | |   \     |       |       |
             | e    \    b       d       |
             | |     \   |       |       |
             +------x2-----x3-----x1------+
```
This is still not right. The dependencies define the branches.

Let's redraw the SFG correctly from the equations:
$x_1 = x + e x_2$
$x_2 = a x_1 + f x_3$
$x_3 = b x_2 + d x_1$
$y = c x_3$

Nodes: $x, x_1, x_2, x_3, y$.
*   $x \to x_1$ (gain 1)
*   $x_2 \to x_1$ (gain $e$)
*   $x_1 \to x_2$ (gain $a$)
*   $x_3 \to x_2$ (gain $f$)
*   $x_2 \to x_3$ (gain $b$)
*   $x_1 \to x_3$ (gain $d$)
*   $x_3 \to y$ (gain $c$)

Visual representation:
```
      x --(1)--> x1 --(a)--> x2 --(f)--> x3 --(c)--> y
             ^      ^ \       ^       ^       ^
             |      |  \      |       |       |
             |      |   \     |       |       |
             |      |    e    b       d       |
             |      |     \   |       |       |
             +------x2-----x3-----x1------+

```
This still suggests a loop from $x_1$ to $x_1$ via $x_2$ and $x_3$.
Let's trace the actual loops:
*   Loop 1: $x_1 \to x_2 \to x_1$. Gain $L_1 = a \times e$.
*   Loop 2: $x_2 \to x_3 \to x_2$. Gain $L_2 = b \times f$.
*   Loop 3: $x_1 \to x_2 \to x_3 \to x_1$. Gain $L_3 = a \times b \times d$. (This is incorrect, the connection is $x_1 \to x_3$ with gain $d$).

Let's re-verify loop paths:
*   Path 1: $x_1 \to x_2 \to x_1$. Branches $x_1 \to x_2$ (a) and $x_2 \to x_1$ (e). Loop gain $L_1 = ae$.
*   Path 2: $x_2 \to x_3 \to x_2$. Branches $x_2 \to x_3$ (b) and $x_3 \to x_2$ (f). Loop gain $L_2 = bf$.
*   Path 3: $x_1 \to x_3 \to x_2 \to x_1$. Branches $x_1 \to x_3$ (d), $x_3 \to x_2$ (f), $x_2 \to x_1$ (a). Loop gain $L_3 = dfa$. This loop involves nodes $x_1, x_3, x_2$.
*   Path 4: $x_1 \to x_2 \to x_3 \to x_1$. Branches $x_1 \to x_2$ (a), $x_2 \to x_3$ (b), $x_3 \to x_1$ (this branch doesn't exist as per equations). If we use $x_1 \to x_3$ (d), it's $x_1 \to x_2 \to x_3 \to x_1$. Let's use the $d$ branch to close the loop: $x_1 \to x_2 \to x_3 \to x_1$ implies a branch $x_3 \to x_1$.
    The equation $x_3 = b x_2 + d x_1$ means $x_3$ receives from $x_2$ (b) and $x_1$ (d).

Let's consider the loop $x_1 \to x_3 \to x_2 \to x_1$. The branches are: $x_1 \to x_3$ (d), $x_3 \to x_2$ (f), $x_2 \to x_1$ (a). Loop gain $L_3 = dfa$.

**3. Calculate $\Delta$:**
    *   Individual loop gains: $L_1 = ae$, $L_2 = bf$, $L_3 = dfa$.
    *   Sum of individual loop gains: $\sum L_i = ae + bf + dfa$.
    *   Non-touching loops:
        *   $L_1$ ($x_1, x_2$) and $L_2$ ($x_2, x_3$) touch at node $x_2$.
        *   $L_1$ ($x_1, x_2$) and $L_3$ ($x_1, x_3, x_2$) touch at nodes $x_1$ and $x_2$.
        *   $L_2$ ($x_2, x_3$) and $L_3$ ($x_1, x_3, x_2$) touch at nodes $x_2$ and $x_3$.
    *   There are no non-touching loops.
    *   $\Delta = 1 - (ae + bf + dfa)$.

**4. Calculate $\Delta_k$ for Forward Paths:**

*   **For $P_1$ ($x \to x_1 \to x_2 \to x_3 \to y$):**
    *   Forward path gains: $P_1 = 1 \times a \times b \times c = abc$.
    *   Nodes in $P_1$: $x, x_1, x_2, x_3, y$.
    *   Loops touching $P_1$:
        *   $L_1$ (nodes $x_1, x_2$) touches $P_1$.
        *   $L_2$ (nodes $x_2, x_3$) touches $P_1$.
        *   $L_3$ (nodes $x_1, x_3, x_2$) touches $P_1$.
    *   All loops touch $P_1$. Therefore, $\Delta_1 = 1$.

*   **For $P_2$ ($x \to x_1 \to x_3 \to y$):**
    *   Forward path gains: $P_2 = 1 \times d \times c = dc$.
    *   Nodes in $P_2$: $x, x_1, x_3, y$.
    *   Loops touching $P_2$:
        *   $L_1$ (nodes $x_1, x_2$). Node $x_1$ is in $P_2$. So $L_1$ touches $P_2$.
        *   $L_2$ (nodes $x_2, x_3$). Node $x_3$ is in $P_2$. So $L_2$ touches $P_2$.
        *   $L_3$ (nodes $x_1, x_3, x_2$). Nodes $x_1$ and $x_3$ are in $P_2$. So $L_3$ touches $P_2$.
    *   All loops touch $P_2$. Therefore, $\Delta_2 = 1$.

**5. Calculate the Overall Transfer Function:**

$$ \frac{y}{x} = \frac{P_1 \Delta_1 + P_2 \Delta_2}{\Delta} = \frac{abc \times 1 + dc \times 1}{1 - (ae + bf + dfa)} = \frac{abc + dc}{1 - ae - bf - dfa} $$

**Relevance to Course Outcomes:**

*   **CO4 (K3):** Mason's Gain Formula is a direct application of analyzing feedback systems and is crucial for determining the transfer function, which is the basis for stability analysis (poles of the transfer function).

**Textbook References:**

*   **Haykin & Van Veen:** Likely covers Mason's Gain Formula as a core technique for analyzing complex feedback systems.
*   **Nise:** Provides a detailed step-by-step derivation and application of Mason's Gain Formula, often with multiple examples.
*   **Ogata:** Will present Mason's Gain Formula as a standard method for finding the transfer function of complex control systems.

---

### 4.4 System Stability and Mason's Gain Formula

**Key Concepts:**

*   **Stability:** A system is considered stable if its output remains bounded for all bounded inputs and if, for zero input, its output returns to zero after a disturbance.
*   **Poles of the Transfer Function:** The roots of the denominator polynomial of a system's transfer function. The location of these poles in the s-plane (for continuous-time) or z-plane (for discrete-time) dictates the system's stability.
*   **Continuous-Time System Stability:** For a continuous-time system, stability is achieved if and only if all poles of its transfer function lie strictly in the left half of the s-plane (i.e., have negative real parts).
*   **Discrete-Time System Stability:** For a discrete-time system, stability is achieved if and only if all poles of its transfer function lie strictly inside the unit circle in the z-plane (i.e., $|z| < 1$).

**How Mason's Gain Formula Relates to Stability:**

Mason's Gain Formula directly provides the overall transfer function of a system. Once the transfer function $\frac{Y(s)}{X(s)}$ or $\frac{Y(z)}{X(z)}$ is obtained using the formula, we can:

1.  **Identify the Characteristic Equation:** The denominator of the transfer function represents the characteristic equation of the system.
2.  **Find the Poles:** Solve the characteristic equation to find the roots, which are the poles of the system.
3.  **Analyze Pole Locations:**
    *   For continuous-time systems: Check if all poles have negative real parts.
    *   For discrete-time systems: Check if all poles have magnitudes less than 1.

**Example of Stability Analysis using Mason's Gain Formula:**

Consider the system from the previous example: $\frac{Y(s)}{R(s)} = \frac{G_1(s)}{1 + G_1(s)H(s)}$.

If $G_1(s) = \frac{1}{s+1}$ and $H(s) = \frac{1}{s+2}$:

The transfer function is:
$$ \frac{Y(s)}{R(s)} = \frac{\frac{1}{s+1}}{1 + \frac{1}{s+1} \times \frac{1}{s+2}} = \frac{\frac{1}{s+1}}{\frac{(s+1)(s+2) + 1}{(s+1)(s+2)}} = \frac{s+2}{(s+1)(s+2) + 1} $$
$$ \frac{Y(s)}{R(s)} = \frac{s+2}{s^2 + 3s + 2 + 1} = \frac{s+2}{s^2 + 3s + 3} $$

**Stability Analysis:**
*   Characteristic equation: $s^2 + 3s + 3 = 0$.
*   Solving for the roots (poles) using the quadratic formula $s = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
    $$ s = \frac{-3 \pm \sqrt{3^2 - 4(1)(3)}}{2(1)} = \frac{-3 \pm \sqrt{9 - 12}}{2} = \frac{-3 \pm \sqrt{-3}}{2} = \frac{-3 \pm j\sqrt{3}}{2} $$
    The poles are $s_1 = -1.5 + j\frac{\sqrt{3}}{2}$ and $s_2 = -1.5 - j\frac{\sqrt{3}}{2}$.
*   Both poles have negative real parts (-1.5).
*   Therefore, the system is **stable**.

**Relevance to Course Outcomes:**

*   **CO4 (K3):** Directly addresses the stability of continuous-time dynamical systems by providing the tools to derive the system's transfer function and subsequently analyze the locations of its poles.

**Textbook References:**

*   **Haykin & Van Veen:** Likely discusses the relationship between transfer function poles and system stability in detail.
*   **Nise:** Extensively covers stability criteria (Routh-Hurwitz, Nyquist, Bode plots) and how to apply them to transfer functions obtained from SFGs or other methods.
*   **Ogata:** Focuses on control system stability, including pole placement and root locus techniques, all based on the system's transfer function.

---

### 4.5 Practice Questions and Exercises

**Question 1:**
Draw the signal flow graph for the following system of equations:
$x_1 = u + ax_2 + bx_3$
$x_2 = cx_1$
$x_3 = dx_2 + ex_1$
$y = fx_3$

Where $u$ is the input and $y$ is the output.

**Answer 1:**
Nodes: $u, x_1, x_2, x_3, y$.
Branches:
*   $u \to x_1$ (gain 1)
*   $x_1 \to x_2$ (gain $a$)
*   $x_1 \to x_3$ (gain $b$)
*   $x_2 \to x_1$ (gain $c$)
*   $x_2 \to x_3$ (gain $d$)
*   $x_1 \to x_3$ (gain $e$) - Note: this creates parallel branches $x_1 \to x_3$.
*   $x_3 \to y$ (gain $f$)

```
      u --(1)--> x1 --(a)--> x2 --(d)--> x3 --(f)--> y
             ^      ^ \       ^       ^
             |      |  \      |       |
             |      |   \     |       |
             |      c    b    e       |
             |      |     \   |       |
             +------x2-----x3-----x1------+
```
The branch $x_1 \to x_3$ with gain $b$ and the branch $x_1 \to x_3$ with gain $e$ are parallel. They can be combined into a single branch $x_1 \to x_3$ with gain $(b+e)$.

Revised SFG:
```
      u --(1)--> x1 --(a)--> x2 --(d)--> x3 --(f)--> y
             ^      ^ \       ^       ^
             |      |  \      |       |
             |      |   \     |       |
             |      c    (b+e) |       |
             |      |     \   |       |
             +------x2-----x3-----x1------+
```
There are also loops:
*   $L_1$: $x_1 \to x_2 \to x_1$. Gain = $a \times c$.
*   $L_2$: $x_1 \to x_2 \to x_3 \to x_1$. Gain = $a \times d \times (\text{gain from } x_3 \text{ to } x_1)$. This branch is not explicitly given.

Let's re-read the equations:
$x_1 = u + ax_2 + bx_3$ -> Node $u \to x_1$ (1), $x_2 \to x_1$ (a), $x_3 \to x_1$ (b).
$x_2 = cx_1$ -> Node $x_1 \to x_2$ (c).
$x_3 = dx_2 + ex_1$ -> Node $x_2 \to x_3$ (d), $x_1 \to x_3$ (e).
$y = fx_3$ -> Node $x_3 \to y$ (f).

SFG nodes: $u, x_1, x_2, x_3, y$.
*   $u \xrightarrow{1} x_1$
*   $x_1 \xrightarrow{a} x_2$
*   $x_1 \xrightarrow{e} x_3$
*   $x_2 \xrightarrow{c} x_1$
*   $x_2 \xrightarrow{d} x_3$
*   $x_3 \xrightarrow{b} x_1$
*   $x_3 \xrightarrow{f} y$

```
      u --(1)--> x1 --(a)--> x2 --(d)--> x3 --(f)--> y
             ^      ^ \       ^       ^       ^
             |      |  \      |       |       |
             |      |   \     |       |       |
             |      |    c    b       e       |
             |      |     \   |       |       |
             +------x2-----x3-----x1------+
```
This diagram correctly reflects the equations.

**Question 2:**
For the SFG in Question 1, find the transfer function $\frac{y}{u}$ using Mason's Gain Formula, assuming the combined gain for $x_1 \to x_3$ is $e$ only, and the branch $x_3 \to x_1$ has gain $b$.

Let's use the equations and resulting SFG as follows:
$x_1 = u + ax_2 + bx_3$
$x_2 = cx_1$
$x_3 = dx_2 + ex_1$
$y = fx_3$

SFG:
*   $u \xrightarrow{1} x_1$
*   $x_1 \xrightarrow{a} x_2$
*   $x_1 \xrightarrow{e} x_3$
*   $x_2 \xrightarrow{c} x_1$
*   $x_2 \xrightarrow{d} x_3$
*   $x_3 \xrightarrow{b} x_1$
*   $x_3 \xrightarrow{f} y$

**Answer 2:**
1.  **Forward Paths:**
    *   $P_1$: $u \to x_1 \to x_3 \to y$. Gain $P_1 = 1 \times e \times f = ef$.
    *   $P_2$: $u \to x_1 \to x_2 \to x_3 \to y$. Gain $P_2 = 1 \times a \times d \times f = adf$.
    *   $P_3$: $u \to x_1 \to x_2 \to x_1 \to x_3 \to y$. This path loops back. Let's consider simple paths.
    *   $P_4$: $u \to x_1 \to x_3 \to x_1 \to x_2 \to x_3 \to y$. This is complex.

    Let's re-examine the forward paths from $u$ to $y$ without repeating nodes:
    *   $P_1$: $u \to x_1 \to x_3 \to y$. Gain $P_1 = 1 \cdot e \cdot f = ef$.
    *   $P_2$: $u \to x_1 \to x_2 \to x_3 \to y$. Gain $P_2 = 1 \cdot a \cdot d \cdot f = adf$.
    *   $P_3$: $u \to x_1 \to x_3 \to x_1 \to x_2 \to x_3 \to y$. This is not a forward path as it repeats $x_1$ and $x_3$.
    *   $P_4$: $u \to x_1 \to x_2 \to x_1 \to e \to x_3 \to y$. This is not a forward path as it repeats $x_1$.
    *   $P_5$: $u \to x_1 \to x_2 \to x_1 \to \dots$
    *   $P_6$: $u \to x_1 \to x_3 \to b \to x_1 \to \dots$

    Consider the simple forward paths from $u$ to $y$:
    *   $P_1: u \to x_1 \to x_3 \to y$ with gain $1 \times e \times f = ef$.
    *   $P_2: u \to x_1 \to x_2 \to x_3 \to y$ with gain $1 \times a \times d \times f = adf$.
    *   $P_3: u \to x_1 \to x_2 \to x_1 \to x_3 \to y$. This is not a valid forward path as it repeats $x_1$.
    *   $P_4: u \to x_1 \to x_3 \to x_1 \to x_2 \to x_3 \to y$. Not valid.
    *   $P_5: u \to x_1 \to x_3 \to b \to x_1 \to \dots$. This creates a loop.

    Let's re-check the branches for the equations:
    $x_1 = u + ax_2 + bx_3$
    $x_2 = cx_1$
    $x_3 = dx_2 + ex_1$
    $y = fx_3$

    SFG Branches:
    *   $u \xrightarrow{1} x_1$
    *   $x_1 \xrightarrow{a} x_2$
    *   $x_1 \xrightarrow{e} x_3$
    *   $x_2 \xrightarrow{c} x_1$
    *   $x_2 \xrightarrow{d} x_3$
    *   $x_3 \xrightarrow{b} x_1$
    *   $x_3 \xrightarrow{f} y$

    Forward Paths from $u$ to $y$:
    *   $P_1$: $u \to x_1 \to x_3 \to y$. Gain $P_1 = 1 \times e \times f = ef$.
    *   $P_2$: $u \to x_1 \to x_2 \to x_3 \to y$. Gain $P_2 = 1 \times a \times d \times f = adf$.
    *   $P_3$: $u \to x_1 \to x_2 \to x_1 \to x_3 \to y$. This path repeats node $x_1$. It's not a simple forward path.

    Let's look for paths that might be missed. The direct path $u \to x_1 \to x_3 \to y$ is $P_1$. The path through $x_2$ is $u \to x_1 \to x_2 \to x_3 \to y$, this is $P_2$. What about paths involving $x_3 \to x_1$ (b)?
    Consider $u \to x_1 \to x_3 \to x_1 \to x_3 \to y$. This is not a forward path.

    There are only two simple forward paths from $u$ to $y$: $P_1$ and $P_2$. $N=2$.

2.  **Feedback Loops:**
    *   $L_1$: $x_1 \to x_2 \to x_1$. Gain $L_1 = a \times c$.
    *   $L_2$: $x_1 \to x_3 \to x_1$. Gain $L_2 = e \times b$.
    *   $L_3$: $x_1 \to x_2 \to x_3 \to x_1$. Gain $L_3 = a \times d \times b$.
    *   $L_4$: $x_1 \to x_3 \to x_2 \to x_1$. Gain $L_4 = e \times (\text{gain from } x_3 \text{ to } x_2) \times c$. The branch is $x_3 \to x_1$ (b) and $x_2 \to x_1$ (c).
    Let's be careful with loop definitions. A loop is a path that starts and ends at the same node.

    Loops:
    *   $L_1$: $x_1 \to x_2 \to x_1$. Gains: $x_1 \to x_2$ (a), $x_2 \to x_1$ (c). $L_1 = ac$.
    *   $L_2$: $x_1 \to x_3 \to x_1$. Gains: $x_1 \to x_3$ (e), $x_3 \to x_1$ (b). $L_2 = eb$.
    *   $L_3$: $x_1 \to x_2 \to x_3 \to x_1$. Gains: $x_1 \to x_2$ (a), $x_2 \to x_3$ (d), $x_3 \to x_1$ (b). $L_3 = adb$.
    *   $L_4$: $x_1 \to x_3 \to x_1$ is $L_2$.

    Let's check for loops involving $x_2 \to x_3$.
    $x_1 \to x_2 \to x_3 \to x_1$. Gain $L_3 = a \times d \times b$.

    Are there loops involving $x_1 \to x_3$ and $x_3 \to x_2$?
    $x_1 \to x_3 \to x_1$ is $L_2$.
    $x_1 \to x_3 \to x_2 \to x_1$: Gains $x_1 \to x_3$ (e), $x_3 \to x_2$ (this branch doesn't exist as per equations).

    Let's list all possible loops:
    *   $x_1 \xrightarrow{a} x_2 \xrightarrow{c} x_1$: $L_1 = ac$.
    *   $x_1 \xrightarrow{e} x_3 \xrightarrow{b} x_1$: $L_2 = eb$.
    *   $x_1 \xrightarrow{a} x_2 \xrightarrow{d} x_3 \xrightarrow{b} x_1$: $L_3 = adb$.
    *   $x_1 \xrightarrow{e} x_3 \xrightarrow{b} x_1$ is $L_2$.

    What about the branch $x_1 \to x_3$ (e) and $x_2 \to x_3$ (d)?
    And $x_3 \to x_1$ (b)?
    We need to ensure all branches are accounted for in loop formation.

    Let's list the loops again carefully:
    *   $L_1$: $x_1 \to x_2 \to x_1$ (Gains: $a, c$). $L_1 = ac$.
    *   $L_2$: $x_1 \to x_3 \to x_1$ (Gains: $e, b$). $L_2 = eb$.
    *   $L_3$: $x_1 \to x_2 \to x_3 \to x_1$ (Gains: $a, d, b$). $L_3 = adb$.
    *   Are there loops involving $x_1 \to x_3 \to x_2 \to x_1$? No branch $x_3 \to x_2$.

3.  **Calculate $\Delta$:**
    *   Sum of individual loop gains: $\sum L_i = ac + eb + adb$.
    *   Non-touching loops:
        *   $L_1$ (nodes $x_1, x_2$) touches $L_2$ (nodes $x_1, x_3$) at $x_1$.
        *   $L_1$ (nodes $x_1, x_2$) touches $L_3$ (nodes $x_1, x_2, x_3$) at $x_1, x_2$.
        *   $L_2$ (nodes $x_1, x_3$) touches $L_3$ (nodes $x_1, x_2, x_3$) at $x_1, x_3$.
    *   No non-touching loops.
    *   $\Delta = 1 - (ac + eb + adb)$.

4.  **Calculate $\Delta_k$:**
    *   **For $P_1$ ($u \to x_1 \to x_3 \to y$):**
        *   Gains: $P_1 = ef$. Nodes: $u, x_1, x_3, y$.
        *   Loops touching $P_1$:
            *   $L_1$ (nodes $x_1, x_2$): Touches $P_1$ at $x_1$.
            *   $L_2$ (nodes $x_1, x_3$): Touches $P_1$ at $x_1, x_3$.
            *   $L_3$ (nodes $x_1, x_2, x_3$): Touches $P_1$ at $x_1, x_3$.
        *   All loops touch $P_1$. $\Delta_1 = 1$.

    *   **For $P_2$ ($u \to x_1 \to x_2 \to x_3 \to y$):**
        *   Gains: $P_2 = adf$. Nodes: $u, x_1, x_2, x_3, y$.
        *   Loops touching $P_2$:
            *   $L_1$ (nodes $x_1, x_2$): Touches $P_2$ at $x_1, x_2$.
            *   $L_2$ (nodes $x_1, x_3$): Touches $P_2$ at $x_1, x_3$.
            *   $L_3$ (nodes $x_1, x_2, x_3$): Touches $P_2$ at $x_1, x_2, x_3$.
        *   All loops touch $P_2$. $\Delta_2 = 1$.

5.  **Calculate Transfer Function:**
    $$ \frac{y}{u} = \frac{P_1 \Delta_1 + P_2 \Delta_2}{\Delta} = \frac{ef \times 1 + adf \times 1}{1 - (ac + eb + adb)} = \frac{ef + adf}{1 - ac - eb - adb} $$

**Question 3 (Stability):**
A closed-loop system has the following transfer function:
$$ T(s) = \frac{s+1}{(s+2)(s+3) + k} $$
For what values of $k$ is the system stable?

**Answer 3:**
The transfer function is $T(s) = \frac{s+1}{s^2 + 5s + 6 + k}$.
For the system to be stable, all poles must lie in the left half of the s-plane. The poles are the roots of the denominator.
Characteristic equation: $s^2 + 5s + (6+k) = 0$.

Using the Routh-Hurwitz criterion for a second-order polynomial $as^2 + bs + c = 0$:
*   $a > 0$
*   $b > 0$
*   $c > 0$

In our case:
*   $a = 1 > 0$ (satisfied)
*   $b = 5 > 0$ (satisfied)
*   $c = 6+k > 0 \implies k > -6$.

Therefore, the system is stable for $k > -6$.

---

### 5. Important Points to Remember

*   **SFG Clarity:** Ensure your SFG accurately reflects the system equations. Nodes represent variables, and branches represent gains.
*   **Mason's Gain Formula Components:** Understand the meaning of $P_k$, $\Delta$, and $\Delta_k$.
*   **Non-Touching Loops:** The identification of non-touching loops is crucial for correctly calculating $\Delta$. Loops touch if they share any common node.
*   **$\Delta_k$ Calculation:** Remember to remove the forward path *and* any loops that touch it when calculating $\Delta_k$.
*   **Stability and Poles:** System stability is determined by the location of the transfer function's poles. For continuous-time systems, poles must be in the LHP (negative real part). For discrete-time systems, poles must be inside the unit circle.
*   **Characteristic Equation:** The denominator of the closed-loop transfer function is the characteristic equation. Its roots are the system poles.

---

This comprehensive study note covers the fundamentals of signal flow graphs and Mason's gain formula within the context of dynamic system representation and stability, aligning with the specified learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
