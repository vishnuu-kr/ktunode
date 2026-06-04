---
title: "Mason’s gain formula."
subject: "CONTROL SYSTEMS"
module: "Module 1: Introduction:  Basic Components of Control Systems"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe94e"
status: "completed"
scrapedAt: "2026-05-23T17:54:37.502Z"
---
# CONTROL SYSTEMS: Module 1: Introduction: Basic Components of Control Systems

## Topic: Mason's Gain Formula

### 1. Introduction to Mason's Gain Formula

Mason's Gain Formula is a powerful tool used to calculate the overall transfer function of a linear time-invariant (LTI) control system represented by a signal flow graph (SFG). It offers a systematic way to derive the transfer function without the need for repeated application of block diagram reduction techniques, especially for complex systems.

**Key Concepts:**

*   **Signal Flow Graph (SFG):** A graphical representation of a system where nodes represent variables and directed edges represent the functional relationship between these variables.
*   **Transfer Function:** The ratio of the Laplace transform of the output variable to the Laplace transform of the input variable, assuming zero initial conditions. For a control system, it typically represents the relationship between the system's output and its input.

**Learning Outcomes Addressed:**

*   **CO1: Analyze the systems using transfer function approach (Knowledge Level: K3)** - Mason's Gain Formula is a direct method for deriving the transfer function, enabling system analysis.

**Textbook References:**

*   **Nagarath & Gopal:** Likely discusses SFG and Mason's rule as a method for transfer function derivation. (Chapter 3: Signal Flow Graphs)
*   **Kuo & Golnaraghi:** Provides a detailed explanation of SFG and Mason's gain formula. (Chapter 4: Block Diagrams and Signal Flow Graphs)
*   **Ogata:** Covers SFGs and Mason's rule as a method for obtaining the overall transfer function. (Chapter 2: Block Diagram Algebra and Transfer Functions of Linear Uninterrupted Control Systems)
*   **Nise:** Offers a thorough treatment of SFGs and Mason's gain formula. (Chapter 3: Signal Flow Graphs)

### 2. Components of a Signal Flow Graph (SFG)

Before applying Mason's Gain Formula, understanding the basic building blocks of an SFG is crucial.

**Key Components and Definitions:**

*   **Node:** A point in the SFG representing a variable or signal in the system.
    *   **Input Node (Source Node):** A node with only outgoing edges.
    *   **Output Node (Sink Node):** A node with only incoming edges.
    *   **Intermediate Node:** A node with both incoming and outgoing edges.
*   **Branch:** A directed line segment connecting two nodes, representing the transfer function between them. The label on the branch is the transfer function value.
*   **Path:** A sequence of connected branches traversed in the direction of the arrows.
*   **Forward Path:** A path from the input node to the output node that does not pass through any node more than once.
*   **Loop:** A path that starts and ends at the same node and does not pass through any other node more than once (except the start/end node).
*   **Non-touching Loops:** Two loops are non-touching if they do not share any common nodes.

**Example:**

Consider a simple feedback system with a forward path transfer function $G(s)$ and a feedback path transfer function $H(s)$.

**Block Diagram:**

```
R(s) ---[G(s)]---> Y(s)
        ^           |
        |           |
        +----[-H(s)]-+
```

**Corresponding SFG:**

```
R(s) ----> Node A ----> Y(s)
            |          ^
            |          |
            +---[-H(s)]-+
```

*   Nodes: R(s), Node A, Y(s)
*   Branches: R(s) to Node A (gain 1), Node A to Y(s) (gain G(s)), Y(s) to Node A (gain -H(s))
*   Forward Path: R(s) -> Node A -> Y(s) (Path gain = 1 * G(s) = G(s))
*   Loop: Node A -> Y(s) -> Node A (Loop gain = G(s) * (-H(s)) = -G(s)H(s))

### 3. Mason's Gain Formula

Mason's Gain Formula provides a direct method to calculate the overall transfer function $T = \frac{Y(s)}{R(s)}$ for a system represented by an SFG.

**The Formula:**

$$ T = \frac{\sum_{k=1}^{n} P_k \Delta_k}{\Delta} $$

Where:

*   $T$: The overall transfer function from the input node to the output node.
*   $n$: The number of forward paths from the input node to the output node.
*   $P_k$: The gain of the $k^{th}$ forward path.
*   $\Delta$: The determinant of the SFG, calculated as:
    $$ \Delta = 1 - (\sum L_i) + (\sum L_{i}L_{j}) - (\sum L_{i}L_{j}L_{k}) + \dots $$
    Where:
    *   $L_i$: The gain of the $i^{th}$ loop.
    *   $L_i L_j$: The product of the gains of two non-touching loops.
    *   $L_i L_j L_k$: The product of the gains of three non-touching loops, and so on.
    *   The summation is over all possible combinations of loops that do not touch each other.
*   $\Delta_k$: The determinant of the SFG when the $k^{th}$ forward path is removed. This is calculated in the same way as $\Delta$, but considering only those loops that do not touch the $k^{th}$ forward path.

**Important Points to Remember for $\Delta$ and $\Delta_k$:**

*   $\Delta$ is calculated from the entire SFG.
*   For $\Delta_k$, remove the $k^{th}$ forward path and then identify all loops that do not touch any of the branches of the $k^{th}$ forward path.

**Steps to Apply Mason's Gain Formula:**

1.  **Draw the SFG:** Convert the given block diagram or system description into an SFG. Identify input and output nodes.
2.  **Identify Forward Paths:** Find all possible forward paths from the input node to the output node. Calculate the gain ($P_k$) for each forward path.
3.  **Identify Loops:** Find all possible loops in the SFG. Calculate the gain ($L_i$) for each loop.
4.  **Identify Non-Touching Loops:** Find combinations of loops that do not share any common nodes.
    *   Pairs of non-touching loops ($L_i L_j$).
    *   Triplets of non-touching loops ($L_i L_j L_k$), and so on.
5.  **Calculate $\Delta$:** Use the formula: $\Delta = 1 - (\sum L_i) + (\sum L_{i}L_{j}) - (\sum L_{i}L_{j}L_{k}) + \dots$
6.  **Calculate $\Delta_k$:** For each forward path $P_k$, remove that path and calculate the $\Delta$ of the *remaining* SFG. This means considering only loops that do not touch the $k^{th}$ forward path.
7.  **Apply Mason's Gain Formula:** Substitute the calculated values into $T = \frac{\sum_{k=1}^{n} P_k \Delta_k}{\Delta}$.

**Learning Outcomes Addressed:**

*   **CO1: Analyze the systems using transfer function approach (Knowledge Level: K3)** - Mason's Gain Formula is a direct application of this outcome.

### 4. Examples

Let's work through a few examples to illustrate the application of Mason's Gain Formula.

**Example 1: Simple Unity Feedback System**

Consider the SFG from the previous example:
R(s) ----> Node A ----> Y(s)
            |          ^
            |          |
            +---[-H(s)]-+
(Gain G(s) on the direct path from Node A to Y(s))

**Steps:**

1.  **SFG is already drawn.** Input node: R(s), Output node: Y(s).
2.  **Forward Paths:**
    *   $P_1$: R(s) -> Node A -> Y(s). $P_1 = 1 \times G(s) = G(s)$.
    *   There is only one forward path ($n=1$).
3.  **Loops:**
    *   $L_1$: Node A -> Y(s) -> Node A. $L_1 = G(s) \times (-H(s)) = -G(s)H(s)$.
    *   There is only one loop.
4.  **Non-touching Loops:**
    *   There are no pairs or triplets of non-touching loops since there is only one loop.
5.  **Calculate $\Delta$:**
    *   $\sum L_i = L_1 = -G(s)H(s)$
    *   $\sum L_i L_j = 0$ (no pairs of non-touching loops)
    *   $\Delta = 1 - (\sum L_i) = 1 - (-G(s)H(s)) = 1 + G(s)H(s)$.
6.  **Calculate $\Delta_k$:**
    *   For $P_1$: Remove the path R(s) -> Node A -> Y(s). The only loop $L_1$ touches this path (specifically, it touches node A and Y(s)). Therefore, there are no loops that do *not* touch $P_1$.
    *   $\Delta_1 = 1$. (This is the standard convention when no loops remain after removing the forward path).
7.  **Apply Mason's Gain Formula:**
    *   $T = \frac{P_1 \Delta_1}{\Delta} = \frac{G(s) \times 1}{1 + G(s)H(s)} = \frac{G(s)}{1 + G(s)H(s)}$.

This matches the well-known transfer function for a unity feedback system.

**Example 2: A More Complex System**

Consider the following SFG:

```
        +-------[G1]--------> N1 --------[G2]--------> Y
        |                    |           ^           ^
        |                    |           |           |
       R                     |           |           |
        |                    |           |           |
        +-----[G3]--------> N2 --------[G4]--------> N3
                             |           ^           ^
                             |           |           |
                             +-----[G5]----+---------+
```

**Let's define the nodes and branches:**
*   Input: R
*   Output: Y
*   Nodes: N1, N2, N3
*   Branches:
    *   R -> N1 (gain G1)
    *   N1 -> Y (gain G2)
    *   R -> N2 (gain G3)
    *   N2 -> N1 (gain G4) (feedback to N1 from N2)
    *   N2 -> N3 (gain G5)
    *   N3 -> Y (gain G6)
    *   N3 -> N2 (gain G7) (feedback to N2 from N3)

**Steps:**

1.  **SFG is given.**
2.  **Forward Paths:**
    *   $P_1$: R -> N1 -> Y. $P_1 = G1 \times G2$.
    *   $P_2$: R -> N2 -> N3 -> Y. $P_2 = G3 \times G5 \times G6$.
    *   $P_3$: R -> N1 -> N2 -> N3 -> Y. $P_3 = G1 \times G4 \times G5 \times G6$.
    *   $P_4$: R -> N2 -> N3 -> N2 -> N1 -> Y. (This path passes through N2 twice, so it's not a valid forward path).
    *   $P_5$: R -> N1 -> N2 -> N1 -> Y. (This path passes through N1 twice, not a valid forward path).
    *   $P_6$: R -> N2 -> N1 -> Y. $P_6 = G3 \times G4 \times G2$.
    *   $P_7$: R -> N2 -> N1 -> N2 -> N3 -> Y. (Not a forward path).

    Let's re-examine to ensure we capture all distinct forward paths:
    *   $P_1$: R -> N1 -> Y. $P_1 = G1 G2$.
    *   $P_2$: R -> N2 -> N3 -> Y. $P_2 = G3 G5 G6$.
    *   $P_3$: R -> N1 -> N2 -> N3 -> Y. $P_3 = G1 G4 G5 G6$.
    *   $P_4$: R -> N2 -> N1 -> Y. $P_4 = G3 G4 G2$.

    So, $n=4$.

3.  **Loops:**
    *   $L_1$: N1 -> N2 -> N1. $L_1 = G4 \times G4$. *Correction:* N1 -> N2 (G4) -> N1 (Implicit feedback to N1 from N2 through G4). Let's re-interpret the diagram carefully. The diagram implies:
        *   N1 -> N2: Gain G4
        *   N2 -> N1: Implicit connection is usually via a branch with specified gain. If N2 to N1 is not explicitly shown, it doesn't exist. Let's assume from your description, there are branches:
            *   N1 -> N2 with G4
            *   N2 -> N1 with G4 (this would mean G4 feeds back from N2 to N1).
            *   N3 -> N2 with G7.

        Let's draw a more explicit SFG based on a typical representation.
        Assuming the diagram means:
        *   R --> G1 --> N1
        *   N1 --> G2 --> Y
        *   R --> G3 --> N2
        *   N1 --> G4 --> N2 (This seems to be missing from the path list above. Let's assume it exists.)
        *   N2 --> G5 --> N3
        *   N3 --> G6 --> Y
        *   N3 --> G7 --> N2 (This is a loop involving N2 and N3)

        Let's redefine based on a more standard SFG interpretation where branches are explicit.

        **Revised SFG Interpretation:**
        Nodes: R, N1, N2, N3, Y
        Branches:
        1. R -> N1 (Gain G1)
        2. N1 -> Y (Gain G2)
        3. R -> N2 (Gain G3)
        4. N1 -> N2 (Gain G4)
        5. N2 -> N3 (Gain G5)
        6. N3 -> Y (Gain G6)
        7. N3 -> N2 (Gain G7)

        **Revised Forward Paths (from R to Y):**
        *   $P_1$: R -> N1 -> Y. $P_1 = G1 G2$.
        *   $P_2$: R -> N2 -> N3 -> Y. $P_2 = G3 G5 G6$.
        *   $P_3$: R -> N1 -> N2 -> N3 -> Y. $P_3 = G1 G4 G5 G6$.
        *   $P_4$: R -> N2 -> N3 -> N2 -> N3 -> Y. (Not a forward path, repeats nodes).
        *   $P_5$: R -> N2 -> N3 -> N2 -> N1 -> Y. (Not a forward path, repeats nodes).
        *   $P_6$: R -> N1 -> N2 -> N3 -> N2 -> N1 -> Y. (Not a forward path).
        *   $P_7$: R -> N2 -> N1 -> Y. *This path implies a direct branch from N2 to N1. If it's not in the SFG, it doesn't exist.* Assuming from the initial problem description there was no direct N2 to N1 branch.

        Let's stick to the *provided text description* of the diagram, assuming the connections are as described by the arrows and labels.

        **Re-evaluating with explicit arrows as per the text description:**

        ```
        R ----[G1]----> N1 ----[G2]----> Y
        |             |                 ^
        |             |                 |
        +----[G3]----> N2 ----[G5]----> N3
                      ^       ^
                      |       |
                      +-[G4]--+----[G6]----> Y  (This G6 is from N3 to Y)
                      |       |
                      +-[G7]--+   (This G7 is from N3 to N2)
        ```
        *Correction based on visual interpretation of the text representation:*
        *   R -> N1 (G1)
        *   N1 -> Y (G2)
        *   R -> N2 (G3)
        *   N1 -> N2 (G4) (This G4 is from N1 to N2)
        *   N2 -> N3 (G5)
        *   N3 -> Y (G6)
        *   N3 -> N2 (G7)

        **Forward Paths (from R to Y):**
        *   $P_1$: R -> N1 -> Y. Gain $P_1 = G1 G2$.
        *   $P_2$: R -> N2 -> N3 -> Y. Gain $P_2 = G3 G5 G6$.
        *   $P_3$: R -> N1 -> N2 -> N3 -> Y. Gain $P_3 = G1 G4 G5 G6$.

        So, $n=3$.

    **Loops:**
    *   $L_1$: N2 -> N3 -> N2. Gain $L_1 = G5 G7$.
    *   $L_2$: N1 -> N2 -> N3 -> N2 -> N1. This path (N1->N2, N2->N3, N3->N2, N2->N1) is not a loop in itself unless there's a branch from N2 back to N1. Assuming the branches are as listed:
        *   There is a loop formed by N2 -> N3 -> N2. $L_1 = G5 \times G7$.
        *   Let's consider if the branch N1 -> N2 (G4) forms a loop with other elements.
        *   Consider the path N1 -> N2 -> N3 -> N2 -> N1. This implies a loop: N1 -> N2 (G4), N2 -> N3 (G5), N3 -> N2 (G7), N2 -> N1 (Implicitly via G4 again, which is incorrect).
        *   We need explicit branches for loops.
        *   Let's assume there is *another* branch from N2 back to N1 with some gain. If not, the loop $L_1 = G5G7$ is the only loop in the system.

        Let's assume, for demonstration, that there is also a branch from N2 back to N1 with a gain $G_f$:
        *   N2 -> N1 (Gain $G_f$)

        **Revised Loops with $G_f$:**
        *   $L_1$: N2 -> N3 -> N2. Gain $L_1 = G5 G7$.
        *   $L_2$: N1 -> N2 -> N1. Gain $L_2 = G4 G_f$.
        *   $L_3$: N1 -> N2 -> N3 -> N2 -> N1. Gain $L_3 = G4 G5 G7 G_f$. (This loop is a combination of L1 and L2, touching at N2).

        Let's go back to the provided diagram interpretation from the text. The most common interpretation for SFGs has explicit branches for all connections.

        **Let's assume the SFG corresponds to:**
        Nodes: R, N1, N2, N3, Y
        Branches:
        1. R -> N1 (Gain G1)
        2. N1 -> Y (Gain G2)
        3. R -> N2 (Gain G3)
        4. N1 -> N2 (Gain G4)
        5. N2 -> N3 (Gain G5)
        6. N3 -> Y (Gain G6)
        7. N3 -> N2 (Gain G7)

        **Forward Paths (from R to Y):**
        *   $P_1$: R -> N1 -> Y. $P_1 = G1 G2$.
        *   $P_2$: R -> N2 -> N3 -> Y. $P_2 = G3 G5 G6$.
        *   $P_3$: R -> N1 -> N2 -> N3 -> Y. $P_3 = G1 G4 G5 G6$.
        $n=3$.

    **Loops:**
    *   $L_1$: N2 -> N3 -> N2. Gain $L_1 = G5 G7$.
    *   Are there other loops?
        *   N1 -> N2 -> N3 -> N2 -> N1? This requires a branch from N2 back to N1. If it's not there, it's not a loop.
        *   What if the branch N1 -> N2 (G4) is part of a loop?
        *   Consider the path N1 -> N2 (G4). If there were a branch from N2 back to N1, say with gain $G_f$. Then $L_2 = G4 G_f$.
        *   Let's assume, for this example, that *only* $L_1$ exists as defined: N2 -> N3 -> N2.

    **Loops:**
    *   $L_1$: N2 -> N3 -> N2. Gain $L_1 = G5 G7$.

    **Non-touching Loops:**
    *   There's only one loop, so no pairs or triplets of non-touching loops.

    **Calculate $\Delta$:**
    *   $\sum L_i = L_1 = G5 G7$.
    *   $\sum L_i L_j = 0$.
    *   $\Delta = 1 - L_1 = 1 - G5 G7$.

    **Calculate $\Delta_k$:**
    *   $\Delta_1$ (for $P_1 = G1 G2$): Remove $P_1$ (branches R->N1, N1->Y). The loop $L_1$ (N2->N3->N2) does not touch any part of $P_1$. So, $\Delta_1 = \Delta = 1 - G5 G7$.
    *   $\Delta_2$ (for $P_2 = G3 G5 G6$): Remove $P_2$ (branches R->N2, N2->N3, N3->Y). The loop $L_1$ (N2->N3->N2) shares node N2 and N3 with $P_2$. So, $L_1$ touches $P_2$. Thus, there are no loops that do not touch $P_2$. $\Delta_2 = 1$.
    *   $\Delta_3$ (for $P_3 = G1 G4 G5 G6$): Remove $P_3$ (branches R->N1, N1->N2, N2->N3, N3->Y). The loop $L_1$ (N2->N3->N2) shares nodes N2 and N3 with $P_3$. So, $L_1$ touches $P_3$. Thus, there are no loops that do not touch $P_3$. $\Delta_3 = 1$.

    **Apply Mason's Gain Formula:**
    *   $T = \frac{P_1 \Delta_1 + P_2 \Delta_2 + P_3 \Delta_3}{\Delta}$
    *   $T = \frac{(G1 G2)(1 - G5 G7) + (G3 G5 G6)(1) + (G1 G4 G5 G6)(1)}{1 - G5 G7}$
    *   $T = \frac{G1 G2 (1 - G5 G7) + G3 G5 G6 + G1 G4 G5 G6}{1 - G5 G7}$

**Important Note on SFG Drawing:**
The accuracy of the SFG is paramount. Any missing branch or incorrectly identified node can lead to an incorrect transfer function. Always be meticulous in converting block diagrams to SFGs or directly drawing SFGs from system descriptions.

**Learning Outcomes Addressed:**

*   **CO1: Analyze the systems using transfer function approach (Knowledge Level: K3)** - Direct application of Mason's Gain Formula for transfer function derivation.

### 5. Practice Questions

**Question 1:**
For the following SFG, find the overall transfer function $\frac{Y}{R}$.

```
R ----[2]----> N1 ----[3]----> Y
      |         |        ^
      |         |        |
      +----[1]----> N2 --+----[4]----> Y
                ^      ^
                |      |
                +-[5]--+
```

Assume:
*   R is the input.
*   Y is the output.
*   N1 and N2 are intermediate nodes.
*   Branches and gains:
    *   R -> N1 (gain 2)
    *   N1 -> Y (gain 3)
    *   R -> N2 (gain 1)
    *   N1 -> N2 (gain 4)
    *   N2 -> Y (gain 5)
    *   N2 -> N1 (gain -1)

**Answer to Question 1:**

1.  **SFG:** Drawn as above.
2.  **Forward Paths:**
    *   $P_1$: R -> N1 -> Y. $P_1 = 2 \times 3 = 6$.
    *   $P_2$: R -> N2 -> Y. $P_2 = 1 \times 5 = 5$.
    *   $P_3$: R -> N1 -> N2 -> Y. $P_3 = 2 \times 4 \times 5 = 40$.
    *   $P_4$: R -> N2 -> N1 -> Y. $P_4 = 1 \times (-1) \times 3 = -3$.
    *   $P_5$: R -> N1 -> N2 -> N1 -> Y. Not a forward path (repeats N1).
    *   $P_6$: R -> N2 -> N1 -> N2 -> Y. Not a forward path (repeats N2).

    So, $n=4$.

3.  **Loops:**
    *   $L_1$: N1 -> N2 -> N1. $L_1 = 4 \times (-1) = -4$.
    *   $L_2$: N2 -> N1 -> N2. $L_2 = (-1) \times 4 = -4$. (Same loop as $L_1$, just traced differently). So only $L_1 = -4$.
    *   Are there any other loops? No.

4.  **Non-touching Loops:** Only one loop, so none.

5.  **Calculate $\Delta$:**
    *   $\sum L_i = L_1 = -4$.
    *   $\Delta = 1 - L_1 = 1 - (-4) = 5$.

6.  **Calculate $\Delta_k$:**
    *   $\Delta_1$ (for $P_1=6$): Remove R->N1 and N1->Y. Loop $L_1$ (N1->N2->N1) touches both nodes of $P_1$. So, $L_1$ touches $P_1$. $\Delta_1 = 1$.
    *   $\Delta_2$ (for $P_2=5$): Remove R->N2 and N2->Y. Loop $L_1$ (N1->N2->N1) touches node N2 of $P_2$. So, $L_1$ touches $P_2$. $\Delta_2 = 1$.
    *   $\Delta_3$ (for $P_3=40$): Remove R->N1, N1->N2, N2->Y. Loop $L_1$ (N1->N2->N1) touches nodes N1 and N2 of $P_3$. So, $L_1$ touches $P_3$. $\Delta_3 = 1$.
    *   $\Delta_4$ (for $P_4=-3$): Remove R->N2, N2->N1, N1->Y. Loop $L_1$ (N1->N2->N1) touches nodes N1 and N2 of $P_4$. So, $L_1$ touches $P_4$. $\Delta_4 = 1$.

7.  **Apply Mason's Gain Formula:**
    *   $T = \frac{P_1 \Delta_1 + P_2 \Delta_2 + P_3 \Delta_3 + P_4 \Delta_4}{\Delta}$
    *   $T = \frac{(6)(1) + (5)(1) + (40)(1) + (-3)(1)}{5}$
    *   $T = \frac{6 + 5 + 40 - 3}{5} = \frac{48}{5}$.

**Question 2:**
Consider the block diagram below. Convert it into an SFG and find the closed-loop transfer function using Mason's Gain Formula.

```
      +---------+       +---------+
R(s) -->|  G1(s)  |------>|  G2(s)  |------> Y(s)
      +---------+       +---------+
          |                 |
          |                 |
          +--------<--------+
          |                 |
          |     +---------+ |
          +-----|  -H(s)  |<--+
                +---------+
```
Assume the feedback loop from Y(s) goes back to the input of G1(s) with transfer function H(s).

**Answer to Question 2:**

**Block Diagram Interpretation:**
This is a unity feedback system where the error signal is $E(s) = R(s) - Y(s)$, and the plant transfer function is $G(s) = G1(s)G2(s)$. The feedback path has a transfer function $H(s)$.

**SFG Conversion:**
*   Input node: R(s)
*   Nodes: E(s) (Error signal), U(s) (Control signal), Y(s) (Output)
*   Branches:
    *   R(s) -> E(s) (gain 1)
    *   E(s) -> U(s) (gain G1(s))
    *   U(s) -> Y(s) (gain G2(s))
    *   Y(s) -> E(s) (gain -H(s))

**SFG:**

```
R(s) ----[1]----> E(s) ----[G1(s)]----> U(s) ----[G2(s)]----> Y(s)
                 ^                                           |
                 |                                           |
                 +----------------------[-H(s)]--------------+
```

1.  **Forward Paths:**
    *   $P_1$: R(s) -> E(s) -> U(s) -> Y(s). $P_1 = 1 \times G1(s) \times G2(s) = G1(s)G2(s)$.
    *   $n=1$.

2.  **Loops:**
    *   $L_1$: E(s) -> U(s) -> Y(s) -> E(s). $L_1 = G1(s) \times G2(s) \times (-H(s)) = -G1(s)G2(s)H(s)$.

3.  **Non-touching Loops:** Only one loop, so none.

4.  **Calculate $\Delta$:**
    *   $\sum L_i = L_1 = -G1(s)G2(s)H(s)$.
    *   $\Delta = 1 - L_1 = 1 - (-G1(s)G2(s)H(s)) = 1 + G1(s)G2(s)H(s)$.

5.  **Calculate $\Delta_k$:**
    *   $\Delta_1$ (for $P_1 = G1(s)G2(s)$): Remove $P_1$ (branches R->E, E->U, U->Y). The loop $L_1$ touches all nodes of $P_1$. So, $L_1$ touches $P_1$. $\Delta_1 = 1$.

6.  **Apply Mason's Gain Formula:**
    *   $T = \frac{P_1 \Delta_1}{\Delta} = \frac{(G1(s)G2(s)) \times 1}{1 + G1(s)G2(s)H(s)} = \frac{G1(s)G2(s)}{1 + G1(s)G2(s)H(s)}$.

### 6. Key Points to Remember

*   **Mason's Gain Formula is applicable to linear time-invariant systems represented by Signal Flow Graphs.**
*   **A Signal Flow Graph (SFG) is a directed graph where nodes represent variables and branches represent transfer functions.**
*   **Forward paths must not repeat any node.**
*   **Loops must start and end at the same node and must not repeat any other node.**
*   **Non-touching loops are crucial for calculating $\Delta$.** Two loops are non-touching if they do not share any common nodes.
*   **$\Delta_k$ is the determinant of the SFG with the $k^{th}$ forward path removed, considering only loops that *do not touch* the $k^{th}$ forward path.**
*   **The accuracy of the SFG is critical. Errors in drawing or interpreting the SFG will lead to incorrect results.**
*   **Mason's Gain Formula simplifies complex block diagram reduction by providing a direct method for finding the overall transfer function.**

### 7. Relation to Course Outcomes

*   **CO1: Analyze the systems using transfer function approach (Knowledge Level: K3)**
    Mason's Gain Formula is a direct tool for deriving the system's transfer function, which is the fundamental step in analyzing system behavior in the frequency and time domains. By obtaining the transfer function, one can proceed to analyze stability, transient response, and steady-state response, all of which fall under system analysis using the transfer function approach.

This concludes the study notes on Mason's Gain Formula. It's recommended to practice with various SFGs to gain proficiency in applying the formula.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
