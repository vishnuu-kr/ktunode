---
title: "Signal flow graph - Mason's gain formula."
subject: "INSTRUMENTATION AND CONTROL SYSTEMS"
module: "Module 3: System Modeling"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463677"
status: "completed"
scrapedAt: "2026-05-20T18:00:41.992Z"
---
# INSTRUMENTATION AND CONTROL SYSTEMS - Module 3: System Modeling

## Topic: Signal Flow Graph - Mason's Gain Formula

---

### **1. Introduction to Signal Flow Graphs (SFGs)**

Signal Flow Graphs (SFGs) are a graphical technique used to represent the relationships between variables in a linear system. They provide a powerful tool for analyzing complex systems, especially those with feedback loops, that are difficult to analyze using purely algebraic methods. SFGs are particularly useful in control systems engineering for determining the overall transfer function of a system.

**Key Concepts:**

*   **Node:** Represents a variable or signal in the system.
*   **Branch:** Represents a directed relationship (e.g., a transfer function) between two nodes. The value of the signal at the destination node is the product of the signal at the source node and the gain of the branch.
*   **Forward Path:** A sequence of connected branches from an input node to an output node that does not pass through any node more than once.
*   **Loop:** A closed path in the SFG that starts and ends at the same node.
*   **Self-Loop:** A loop that consists of a single branch connecting a node to itself.
*   **Input Node (Source Node):** A node with only outgoing branches.
*   **Output Node (Sink Node):** A node with only incoming branches.
*   **Non-touching Loops:** Two loops are non-touching if they do not share any common nodes.

**Learning Outcome Alignment:** This section lays the foundation for analyzing systems (CO5, CO6) by introducing a graphical representation method, which is a prerequisite for understanding how to derive system transfer functions.

**Textbook References:**
*   **Nise N.S. (Control Systems Engineering):** Provides a thorough introduction to SFGs, their components, and rules for construction.
*   **Ogata K (Modern Control Engineering):** Explains SFGs as a visual aid for understanding system behavior and for applying Mason's rule.

---

### **2. Constructing a Signal Flow Graph**

To construct an SFG from a set of linear algebraic equations, follow these steps:

1.  **Identify Variables:** Identify all the variables in the system that need to be represented. These will become the nodes of the SFG.
2.  **Represent Equations as Branches:** For each linear algebraic equation, express it in a form where one variable is on the left-hand side and is expressed as a sum of terms, each term being a product of a variable and a constant or transfer function.
3.  **Draw Nodes and Branches:**
    *   For each variable, draw a node.
    *   For each term in an equation, draw a directed branch from the node representing the variable on the right-hand side to the node representing the variable on the left-hand side. The gain of the branch is the coefficient of the term.
4.  **Connect Feedback Loops:** Ensure that all feedback paths are correctly represented by directed branches.
5.  **Identify Input and Output Nodes:** Typically, an SFG will have a designated input node (e.g., R(s)) and one or more output nodes (e.g., Y(s)).

**Example:**
Consider the following system equations:
*   $Y(s) = G_1(s)X(s) + G_3(s)B(s)$
*   $X(s) = G_2(s)Y(s) + R(s)$
*   $B(s) = H(s)Y(s)$

**SFG Construction:**
*   Nodes: R(s), X(s), Y(s), B(s)
*   Branches:
    *   From R(s) to X(s) with gain $1$.
    *   From X(s) to Y(s) with gain $G_1(s)$.
    *   From Y(s) to X(s) with gain $G_2(s)$ (feedback).
    *   From B(s) to Y(s) with gain $G_3(s)$.
    *   From Y(s) to B(s) with gain $H(s)$ (feedback).

**Important Point to Remember:** Each equation in the system corresponds to branches entering a single node representing the dependent variable of that equation.

**Learning Outcome Alignment:** This process is fundamental to understanding system representation, directly contributing to CO1, CO4, CO5, and CO6 by enabling the visualization of system structure.

---

### **3. Mason's Gain Formula**

Mason's Gain Formula is a theorem that directly calculates the overall transfer function of a linear, time-invariant (LTI) system represented by an SFG. It eliminates the need for tedious algebraic manipulations or block diagram reduction techniques.

**Formula:**

The overall forward path gain $T = \frac{Y(s)}{R(s)}$ is given by:

$T = \sum_{k=1}^{N} \frac{P_k \Delta_k}{1 - \sum L_i + \sum L_i L_j - \sum L_i L_j L_m + \dots}$

Where:

*   $T$: The overall transfer function from the input node to the output node.
*   $N$: The total number of forward paths from the input node to the output node.
*   $P_k$: The gain of the $k^{th}$ forward path.
*   $\Delta$: The determinant of the SFG. It is calculated as:
    $\Delta = 1 - (\text{sum of all individual loop gains}) + (\text{sum of gain products of all combinations of non-touching loops taken two at a time}) - (\text{sum of gain products of all combinations of non-touching loops taken three at a time}) + \dots$
*   $\Delta_k$: The determinant of the SFG that remains after removing the $k^{th}$ forward path and any loops that touch it.
*   $L_i$: The gain of the $i^{th}$ loop.
*   $L_i L_j$: The gain product of two non-touching loops $i$ and $j$.
*   $L_i L_j L_m$: The gain product of three non-touching loops $i$, $j$, and $m$.

**Steps to Apply Mason's Gain Formula:**

1.  **Identify Forward Paths:** Identify all possible paths from the input node to the output node. A forward path must not contain any loops and must not repeat any node. Calculate the gain ($P_k$) for each forward path (product of branch gains along the path).
2.  **Identify All Loops:** Identify all possible loops in the SFG. A loop starts and ends at the same node. Calculate the gain ($L_i$) for each individual loop.
3.  **Calculate $\Delta$:**
    *   **Individual Loops:** Calculate the gain of each individual loop ($L_i$). Sum these gains: $\sum L_i$.
    *   **Non-touching Loops (Two at a time):** Identify pairs of loops that do not share any common nodes. Calculate the product of their gains ($L_i L_j$). Sum these products: $\sum L_i L_j$.
    *   **Non-touching Loops (Three at a time):** Identify combinations of three loops that are mutually non-touching. Calculate the product of their gains ($L_i L_j L_m$). Sum these products: $\sum L_i L_j L_m$.
    *   Continue this process for combinations of four, five, etc., non-touching loops until no more combinations are possible.
    *   Substitute these sums into the formula for $\Delta$.
4.  **Calculate $\Delta_k$ for each Forward Path:** For each forward path $P_k$, determine which loops touch this path. Then, calculate $\Delta_k$ using the same procedure as for $\Delta$, but only considering loops that *do not* touch the $k^{th}$ forward path. Essentially, calculate the determinant of the subgraph formed by removing the $k^{th}$ forward path and all loops connected to it.
5.  **Compute the Overall Transfer Function:** Substitute the calculated $P_k$, $\Delta_k$, and $\Delta$ into Mason's Gain Formula to find the overall transfer function $T$.

**Learning Outcome Alignment:** This is the core of the topic, directly enabling system analysis and transfer function determination (CO5, CO6). It allows for the evaluation of system performance based on its structure.

**Textbook References:**
*   **Nise N.S. (Control Systems Engineering):** Dedicates a significant portion to Mason's rule, providing step-by-step guidance and numerous examples.
*   **Ogata K (Modern Control Engineering):** Presents Mason's rule as a systematic method for solving SFGs, highlighting its efficiency.
*   **Doebelin E.O. (Measurement systems applications and design):** While focused on measurement systems, the principles of system representation and analysis using graphical methods are transferable.

---

### **4. Example Application of Mason's Gain Formula**

Let's apply Mason's Gain Formula to the SFG constructed in Section 2:

*   **Nodes:** R(s), X(s), Y(s), B(s)
*   **Branches:** R(s) $\to$ X(s) (gain 1), X(s) $\to$ Y(s) ($G_1(s)$), Y(s) $\to$ X(s) ($G_2(s)$), B(s) $\to$ Y(s) ($G_3(s)$), Y(s) $\to$ B(s) ($H(s)$)

**Step 1: Identify Forward Paths:**
There is only one forward path from R(s) to Y(s):
*   $P_1$: R(s) $\to$ X(s) $\to$ Y(s)
*   Gain $P_1 = 1 \times G_1(s) = G_1(s)$
*   $N = 1$

**Step 2: Identify All Loops:**
There are two loops in the SFG:
*   $L_1$: X(s) $\to$ Y(s) $\to$ X(s)
    *   Gain $L_1 = G_1(s) \times G_2(s)$
*   $L_2$: Y(s) $\to$ B(s) $\to$ Y(s)
    *   Gain $L_2 = H(s) \times G_3(s)$

**Step 3: Calculate $\Delta$:**
*   **Individual Loops:**
    *   $\sum L_i = L_1 + L_2 = G_1(s)G_2(s) + H(s)G_3(s)$
*   **Non-touching Loops (Two at a time):**
    *   Are $L_1$ and $L_2$ non-touching?
        *   $L_1$ involves nodes X(s) and Y(s).
        *   $L_2$ involves nodes Y(s) and B(s).
        *   They share a common node Y(s).
    *   Therefore, $L_1$ and $L_2$ are *touching* loops.
    *   The sum of products of non-touching loops taken two at a time is 0.
*   **Higher order combinations:** Since there are only two loops and they touch, all higher-order combinations of non-touching loops will also be 0.

*   So, $\Delta = 1 - (\sum L_i) = 1 - (G_1(s)G_2(s) + H(s)G_3(s))$.

**Step 4: Calculate $\Delta_k$ for each Forward Path:**
*   For $P_1$ (R(s) $\to$ X(s) $\to$ Y(s)):
    *   The forward path $P_1$ uses nodes R(s), X(s), Y(s).
    *   Loop $L_1$ touches $P_1$ at nodes X(s) and Y(s).
    *   Loop $L_2$ touches $P_1$ at node Y(s).
    *   Since all loops touch the forward path $P_1$, there are no non-touching loops with respect to $P_1$.
    *   Therefore, $\Delta_1 = 1 - 0 = 1$.

**Step 5: Compute the Overall Transfer Function:**
$T = \frac{P_1 \Delta_1}{1 - \sum L_i + \sum L_i L_j - \dots}$
$T = \frac{G_1(s) \times 1}{1 - (G_1(s)G_2(s) + H(s)G_3(s))}$
$T = \frac{G_1(s)}{1 - G_1(s)G_2(s) - H(s)G_3(s)}$

**Verification using Block Diagram Reduction:**
From the equations:
$Y(s) = G_1(s)X(s) + G_3(s)B(s)$
$X(s) = G_2(s)Y(s) + R(s)$
$B(s) = H(s)Y(s)$

Substitute B(s) into the first equation:
$Y(s) = G_1(s)X(s) + G_3(s)H(s)Y(s)$
$Y(s) - G_3(s)H(s)Y(s) = G_1(s)X(s)$
$Y(s)(1 - G_3(s)H(s)) = G_1(s)X(s)$
$Y(s) = \frac{G_1(s)}{1 - G_3(s)H(s)} X(s)$

Now substitute X(s):
$X(s) = G_2(s)Y(s) + R(s)$
$Y(s) = G_1(s) [G_2(s)Y(s) + R(s)] + G_3(s)H(s)Y(s)$
$Y(s) = G_1(s)G_2(s)Y(s) + G_1(s)R(s) + G_3(s)H(s)Y(s)$
$Y(s) - G_1(s)G_2(s)Y(s) - G_3(s)H(s)Y(s) = G_1(s)R(s)$
$Y(s) (1 - G_1(s)G_2(s) - G_3(s)H(s)) = G_1(s)R(s)$
$\frac{Y(s)}{R(s)} = \frac{G_1(s)}{1 - G_1(s)G_2(s) - G_3(s)H(s)}$

The results match!

**Learning Outcome Alignment:** This example demonstrates the practical application of Mason's rule, directly supporting CO5 and CO6 by showing how to derive the system transfer function. It also reinforces the understanding of system structure (CO1, CO4).

---

### **5. Practice Questions and Exercises**

**Question 1:**
Draw the SFG for the following system equations and find the overall transfer function Y(s)/R(s) using Mason's Gain Formula.
$y_1 = x_1 + y_2$
$y_2 = x_2 + y_3$
$y_3 = y_1 + y_2 + x_3$
Here, $x_1, x_2, x_3$ are inputs and we want to find the transfer function from $x_1$ to $y_3$.

**Answer 1:**
First, let's express the equations in a suitable form for SFG construction, assuming $x_1, x_2, x_3$ are external inputs and we're interested in $y_3$ as an output. We need to define which variable is dependent on which. Let's assume these are states or intermediate variables.
For clarity, let's consider $x_1$ as the input and $y_3$ as the output. We might need to adjust the system representation to fit a standard input-output scenario if the problem implies a single input/output.
However, if we treat $x_1, x_2, x_3$ as independent inputs and $y_1, y_2, y_3$ as dependent outputs, we can construct a multi-input, multi-output SFG. The question is phrased to find Y(s)/R(s), implying a single input R(s) and single output Y(s). Let's re-interpret.

Let's consider a standard control system block diagram that leads to such equations.
Assume:
$Y(s)/R(s)$ is the goal.
Let the equations represent a system where the output is affected by previous states.

**Re-interpreting the question for a standard SFG context:**
Usually, equations are of the form: Variable = Sum of (Gain * Variable).
Let's assume the equations given are:
$y_1 = x_1 + a y_2$
$y_2 = x_2 + b y_3$
$y_3 = c y_1 + d y_2 + x_3$

If we are to find $Y(s)/R(s)$, it implies a specific structure. Let's assume $x_1 = R(s)$, and we are interested in $y_3 = Y(s)$. And $x_2, x_3$ are zero for finding this transfer function. The equations as given are quite abstract for a typical control system SFG problem statement for Y(s)/R(s) unless we define the relationship between variables more explicitly.

**Let's consider a typical problem structure that leads to similar-looking equations:**
Consider a system with feedback.
Suppose we have the following relations:
$X_1 = R - G_{12} X_2$
$X_2 = G_{13} X_1 + G_{23} X_3$
$Y = G_{24} X_2$

This doesn't directly map to the given equations.

**Let's try to construct an SFG based on the given equations directly, assuming specific transfer functions:**
Given equations:
1.  $y_1 = x_1 + y_2$  => Node $x_1$ to $y_1$ (gain 1), Node $y_2$ to $y_1$ (gain 1).
2.  $y_2 = x_2 + y_3$  => Node $x_2$ to $y_2$ (gain 1), Node $y_3$ to $y_2$ (gain 1).
3.  $y_3 = y_1 + y_2 + x_3$ => Node $y_1$ to $y_3$ (gain 1), Node $y_2$ to $y_3$ (gain 1), Node $x_3$ to $y_3$ (gain 1).

If we want to find $Y(s)/R(s)$, we'd set $x_1 = R(s)$, $x_2 = 0$, $x_3 = 0$, and $Y(s) = y_3$.

**SFG Construction:**
Nodes: $x_1, y_1, y_2, y_3, x_2, x_3$.
If $x_1=R, x_2=0, x_3=0, y_3=Y$:
*   $y_1 = R + y_2$
*   $y_2 = 0 + y_3$
*   $y_3 = y_1 + y_2 + 0$

Simplified system:
*   $y_1 = R + y_2$
*   $y_2 = y_3$
*   $y_3 = y_1 + y_2$

SFG:
Nodes: R, $y_1$, $y_2$, $y_3$.
*   R $\to$ $y_1$ (gain 1)
*   $y_2$ $\to$ $y_1$ (gain 1)
*   $y_3$ $\to$ $y_2$ (gain 1)
*   $y_1$ $\to$ $y_3$ (gain 1)
*   $y_2$ $\to$ $y_3$ (gain 1)

Let's trace the paths and loops:
**Forward Paths from R to $y_3$:**
1.  $P_1$: R $\to$ $y_1$ $\to$ $y_3$. Gain = $1 \times 1 = 1$.
2.  $P_2$: R $\to$ $y_1$ $\to$ $y_2$ $\to$ $y_3$. Gain = $1 \times 1 \times 1 = 1$.

**Loops:**
1.  $L_1$: $y_1$ $\to$ $y_2$ $\to$ $y_3$ $\to$ $y_1$. Gain = $1 \times 1 \times 1 = 1$.
2.  $y_1 \to y_1$ (direct self loop) - Not present.
3.  $y_2 \to y_2$ (direct self loop) - Not present.
4.  $y_3 \to y_3$ (direct self loop) - Not present.

Let's re-examine the SFG structure with feedback.
Equations:
$y_1 = R + y_2$
$y_2 = y_3$
$y_3 = y_1 + y_2$

SFG:
Nodes: R, $y_1, y_2, y_3$.
*   R $\to$ $y_1$ (gain 1)
*   $y_2 \to y_1$ (gain 1)
*   $y_3 \to y_2$ (gain 1)
*   $y_1 \to y_3$ (gain 1)
*   $y_2 \to y_3$ (gain 1)

Let's correct the structure based on dependencies:
Node $y_1$ is dependent on R and $y_2$. So, branches enter $y_1$ from R and $y_2$.
Node $y_2$ is dependent on $y_3$. So, branch enters $y_2$ from $y_3$.
Node $y_3$ is dependent on $y_1$ and $y_2$. So, branches enter $y_3$ from $y_1$ and $y_2$.

Correct SFG representation for:
$y_1 = R + y_2$
$y_2 = y_3$
$y_3 = y_1 + y_2$

Nodes: R, $y_1, y_2, y_3$.
*   R $\to$ $y_1$ (gain 1)
*   $y_2 \to y_1$ (gain 1)
*   $y_3 \to y_2$ (gain 1)
*   $y_1 \to y_3$ (gain 1)
*   $y_2 \to y_3$ (gain 1)

Wait, the definition of SFG is that a node represents a variable and branches represent dependency.
Let's redraw based on the equations as they are:
For $y_1 = x_1 + y_2$: Branch $x_1 \to y_1$ (gain 1), branch $y_2 \to y_1$ (gain 1).
For $y_2 = x_2 + y_3$: Branch $x_2 \to y_2$ (gain 1), branch $y_3 \to y_2$ (gain 1).
For $y_3 = y_1 + y_2 + x_3$: Branch $y_1 \to y_3$ (gain 1), branch $y_2 \to y_3$ (gain 1), branch $x_3 \to y_3$ (gain 1).

Set $x_1 = R$, $x_2 = 0$, $x_3 = 0$, and $Y = y_3$.
Simplified system:
*   $y_1 = R + y_2$
*   $y_2 = y_3$
*   $y_3 = y_1 + y_2$

SFG:
Nodes: R, $y_1$, $y_2$, $y_3$.
*   R $\to$ $y_1$ (gain 1)
*   $y_2 \to y_1$ (gain 1)
*   $y_3 \to y_2$ (gain 1)
*   $y_1 \to y_3$ (gain 1)
*   $y_2 \to y_3$ (gain 1)

Let's check for loops again.
1.  $y_1 \to y_3 \to y_2 \to y_1$. Gain = $1 \times 1 \times 1 = 1$. ($L_1$)
2.  $y_1 \to y_1$ No.
3.  $y_2 \to y_2$ No.
4.  $y_3 \to y_2 \to y_1 \to y_3$. Gain = $1 \times 1 \times 1 = 1$. ($L_2$)
5.  $y_3 \to y_2 \to y_3$. Gain = $1 \times 1 = 1$. ($L_3$)

This is becoming complex, likely due to my interpretation of the original equations. Let's use a canonical SFG structure:

**Let's use a different approach for Question 1, assuming it implies a standard feedback system that needs to be modeled.**

Consider a system with forward path $G(s)$ and feedback path $H(s)$.
$Y = G X$
$X = R - H Y$
Substitute X: $Y = G(R - HY) = GR - GHY$
$Y(1 + GH) = GR$
$Y/R = G/(1+GH)$

Let's try to derive SFG for this:
Nodes: R, X, Y.
R $\to$ X (gain 1)
X $\to$ Y (gain G)
Y $\to$ X (gain -H) - This is a feedback loop.

The given equations are:
$y_1 = x_1 + y_2$
$y_2 = x_2 + y_3$
$y_3 = y_1 + y_2 + x_3$

Assume $x_1=R$, $y_3=Y$, $x_2=0$, $x_3=0$.
$y_1 = R + y_2$
$y_2 = y_3$
$y_3 = y_1 + y_2$

SFG Structure:
Nodes: R, $y_1, y_2, y_3$.
R $\to$ $y_1$ (gain 1)
$y_2 \to y_1$ (gain 1)
$y_3 \to y_2$ (gain 1)
$y_1 \to y_3$ (gain 1)
$y_2 \to y_3$ (gain 1)

Forward Paths (R to $y_3$):
1.  $P_1$: R $\to$ $y_1$ $\to$ $y_3$. Gain $P_1 = 1 \times 1 = 1$.
2.  $P_2$: R $\to$ $y_1$ $\to$ $y_2$ $\to$ $y_3$. Gain $P_2 = 1 \times 1 \times 1 = 1$.

Loops:
1.  $L_1$: $y_1 \to y_3 \to y_2 \to y_1$. Gain $L_1 = 1 \times 1 \times 1 = 1$.
2.  $L_2$: $y_1 \to y_1$. Not present.
3.  $L_3$: $y_2 \to y_1 \to y_3 \to y_2$. Gain $L_3 = 1 \times 1 \times 1 = 1$.
4.  $L_4$: $y_2 \to y_2$. Not present.
5.  $L_5$: $y_3 \to y_2 \to y_3$. Gain $L_5 = 1 \times 1 = 1$.

Let's re-verify loop identification: A loop must start and end at the same node.
*   Loop 1: $y_1 \to y_3 \to y_2 \to y_1$. Gain = $1 \times 1 \times 1 = 1$. This is a valid loop.
*   Loop 2: $y_1 \to y_1$. No branch.
*   Loop 3: $y_2 \to y_1 \to y_3 \to y_2$. Gain = $1 \times 1 \times 1 = 1$. This is a valid loop.
*   Loop 4: $y_2 \to y_2$. No branch.
*   Loop 5: $y_3 \to y_2 \to y_3$. Gain = $1 \times 1 = 1$. This is a valid loop.

Are loops $L_1$ and $L_3$ touching?
$L_1$: $y_1, y_3, y_2$
$L_3$: $y_2, y_1, y_3$
Yes, they share nodes $y_1, y_2, y_3$.

Are loops $L_1$ and $L_5$ touching?
$L_1$: $y_1, y_3, y_2$
$L_5$: $y_3, y_2$
Yes, they share nodes $y_2, y_3$.

Are loops $L_3$ and $L_5$ touching?
$L_3$: $y_2, y_1, y_3$
$L_5$: $y_3, y_2$
Yes, they share nodes $y_2, y_3$.

**Check $\Delta$ Calculation:**
$\sum L_i = L_1 + L_3 + L_5 = 1 + 1 + 1 = 3$.
All combinations of two non-touching loops are 0 because all loops touch each other.
$\Delta = 1 - \sum L_i = 1 - 3 = -2$.

**Check $\Delta_k$ Calculation:**
For $P_1$ (R $\to$ $y_1$ $\to$ $y_3$):
This path uses nodes R, $y_1$, $y_3$.
Loops touching $P_1$:
*   $L_1$ touches $P_1$ at $y_1$ and $y_3$.
*   $L_3$ touches $P_1$ at $y_1$ and $y_3$.
*   $L_5$ touches $P_1$ at $y_3$.
All loops touch $P_1$. So $\Delta_1 = 1$.

For $P_2$ (R $\to$ $y_1$ $\to$ $y_2$ $\to$ $y_3$):
This path uses nodes R, $y_1$, $y_2$, $y_3$.
Loops touching $P_2$:
*   $L_1$ touches $P_2$ at $y_1$, $y_2$, $y_3$.
*   $L_3$ touches $P_2$ at $y_1$, $y_2$, $y_3$.
*   $L_5$ touches $P_2$ at $y_2$, $y_3$.
All loops touch $P_2$. So $\Delta_2 = 1$.

**Transfer Function:**
$T = \frac{P_1 \Delta_1 + P_2 \Delta_2}{1 - \sum L_i}$
$T = \frac{(1)(1) + (1)(1)}{1 - 3} = \frac{1+1}{-2} = \frac{2}{-2} = -1$.

Let's verify by substitution from original equations:
$y_1 = R + y_2$
$y_2 = y_3$
$y_3 = y_1 + y_2$

Substitute $y_2$ into eq 1: $y_1 = R + y_3$.
Substitute this $y_1$ into eq 3: $y_3 = (R + y_3) + y_2$.
Substitute $y_2=y_3$ into this: $y_3 = R + y_3 + y_3$.
$y_3 = R + 2y_3$.
$y_3 - 2y_3 = R$.
$-y_3 = R$.
$y_3/R = -1$.

The answer is -1. The SFG construction and Mason's rule application were correct.

---

**Question 2:**
For the SFG shown below, find the transfer function $Y(s)/R(s)$ using Mason's Gain Formula.

[Imagine an SFG here. Let's describe it:]
*   Input node: R(s)
*   Output node: Y(s)
*   Nodes: R, A, B, Y
*   Branches:
    *   R $\to$ A (gain $G_1$)
    *   A $\to$ B (gain $G_2$)
    *   A $\to$ Y (gain $G_3$)
    *   B $\to$ Y (gain $G_4$)
    *   B $\to$ A (gain $H_1$) - Feedback loop 1
    *   Y $\to$ A (gain $H_2$) - Feedback loop 2

**Answer 2:**
**Step 1: Identify Forward Paths:**
There are two forward paths from R(s) to Y(s):
*   $P_1$: R $\to$ A $\to$ Y. Gain $P_1 = G_1 \times G_3$.
*   $P_2$: R $\to$ A $\to$ B $\to$ Y. Gain $P_2 = G_1 \times G_2 \times G_4$.
$N = 2$.

**Step 2: Identify All Loops:**
There are two loops:
*   $L_1$: A $\to$ B $\to$ A. Gain $L_1 = G_2 \times H_1$.
*   $L_2$: A $\to$ Y $\to$ A. Gain $L_2 = G_3 \times H_2$.

**Step 3: Calculate $\Delta$:**
*   **Individual Loops:**
    *   $\sum L_i = L_1 + L_2 = G_2H_1 + G_3H_2$.
*   **Non-touching Loops (Two at a time):**
    *   Does $L_1$ touch $L_2$?
        *   $L_1$ involves nodes A, B.
        *   $L_2$ involves nodes A, Y.
        *   They share node A.
    *   So, $L_1$ and $L_2$ are *touching* loops.
    *   The sum of products of non-touching loops taken two at a time is 0.
*   Therefore, $\Delta = 1 - (\sum L_i) = 1 - (G_2H_1 + G_3H_2)$.

**Step 4: Calculate $\Delta_k$ for each Forward Path:**
*   For $P_1$ (R $\to$ A $\to$ Y):
    *   This path uses nodes R, A, Y.
    *   $L_1$ (A $\to$ B $\to$ A) touches $P_1$ at node A.
    *   $L_2$ (A $\to$ Y $\to$ A) touches $P_1$ at nodes A and Y.
    *   Since both loops touch $P_1$, there are no non-touching loops with respect to $P_1$.
    *   Therefore, $\Delta_1 = 1 - 0 = 1$.

*   For $P_2$ (R $\to$ A $\to$ B $\to$ Y):
    *   This path uses nodes R, A, B, Y.
    *   $L_1$ (A $\to$ B $\to$ A) touches $P_2$ at nodes A and B.
    *   $L_2$ (A $\to$ Y $\to$ A) touches $P_2$ at node Y and A.
    *   Since both loops touch $P_2$, there are no non-touching loops with respect to $P_2$.
    *   Therefore, $\Delta_2 = 1 - 0 = 1$.

**Step 5: Compute the Overall Transfer Function:**
$T = \frac{P_1 \Delta_1 + P_2 \Delta_2}{\Delta}$
$T = \frac{(G_1 G_3)(1) + (G_1 G_2 G_4)(1)}{1 - (G_2H_1 + G_3H_2)}$
$T = \frac{G_1 G_3 + G_1 G_2 G_4}{1 - G_2H_1 - G_3H_2}$

---

### **6. Importance and Relevance to Course Outcomes**

*   **CO1: To get basic knowledge about industrial measurement system and different elements involved in it. (Knowledge Level: K2)**
    SFGs and Mason's gain formula are fundamental tools for understanding how different elements (sensors, transducers, signal conditioners, actuators) in a measurement or control system interact to produce an overall system response. By modeling these interactions, we gain a basic understanding of system behavior.

*   **CO4: To describe the role of various control blocks and components in feedback systems (Knowledge Level: K3)**
    SFGs visually represent the flow of signals through different blocks (representing components like controllers, plants, sensors) in a feedback system. Mason's rule allows us to quantify the contribution of each block and loop to the overall system performance, thus explaining their roles.

*   **CO5: To analyse the time domain responses of the linear systems and apply Root locus technique to assess the performance. (Knowledge Level: K4)**
    Deriving the transfer function using SFGs and Mason's rule is a crucial step before analyzing time-domain responses or applying techniques like Root Locus. The transfer function is the mathematical model from which these analyses are performed. Understanding SFGs enhances analytical capabilities.

*   **CO6: Analyse the stability of the given LTI system (Knowledge Level: K4)**
    The denominator of the transfer function obtained via Mason's gain formula (the $\Delta$ term) is known as the characteristic equation of the system when set to zero. Analyzing the roots of this characteristic equation is fundamental to determining system stability. SFGs provide an efficient way to obtain this characteristic equation.

**General Relevance:**
Mason's Gain Formula is a powerful analytical tool that simplifies the process of finding the overall transfer function for complex systems. It is more systematic and less error-prone than manual algebraic manipulation or block diagram reduction for intricate systems with multiple loops. Its application is widespread in control systems engineering, signal processing, and other fields dealing with interconnected systems.

---

### **7. Summary and Key Takeaways**

*   **Signal Flow Graphs (SFGs):** A graphical representation of a system where nodes are variables and branches are directed relationships (transfer functions).
*   **Mason's Gain Formula:** A theorem to compute the overall transfer function $T = Y/R$ of an SFG:
    $T = \sum_{k=1}^{N} \frac{P_k \Delta_k}{\Delta}$
    where $\Delta = 1 - \sum L_i + \sum L_i L_j - \dots$ and $\Delta_k$ is the determinant of the SFG without the $k^{th}$ forward path and its touching loops.
*   **Key Components of Mason's Formula:** Forward Paths ($P_k$), Individual Loops ($L_i$), Non-touching Loops, $\Delta$, $\Delta_k$.
*   **Systematic Application:** Requires careful identification of all paths and loops, and checking for non-touching combinations.
*   **Importance:** Provides an efficient and systematic method for deriving transfer functions of complex systems, which is essential for stability analysis, time-domain response analysis, and overall system design.

---
This concludes the study notes for Signal Flow Graph and Mason's Gain Formula. Remember to practice drawing SFGs and applying Mason's rule to various system examples to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
