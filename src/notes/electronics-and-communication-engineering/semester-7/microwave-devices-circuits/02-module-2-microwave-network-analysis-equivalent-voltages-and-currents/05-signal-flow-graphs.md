---
title: "Signal flow graphs."
subject: "MICROWAVE DEVICES & CIRCUITS"
module: "Module 2: Microwave Network Analysis – Equivalent voltages and currents"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c462b09ce205780ff496"
status: "completed"
scrapedAt: "2026-05-23T18:07:50.209Z"
---
# MICROWAVE DEVICES & CIRCUITS - Module 2: Microwave Network Analysis – Equivalent Voltages and Currents

## Topic: Signal Flow Graphs

---

### 1. Introduction to Signal Flow Graphs (SFGs)

Signal Flow Graphs (SFGs) are a graphical technique used to represent and analyze systems. They provide a systematic way to break down complex systems into smaller, interconnected components and to derive the overall transfer function of the system. This is particularly useful in microwave engineering for analyzing circuits with multiple interconnected elements, such as cascaded amplifiers, filters, and feedback networks.

**Key Concepts:**

*   **Nodes:** Represent variables or quantities within the system (e.g., voltages, currents, power levels).
*   **Branches:** Represent the directed relationships or transfer functions between nodes. The value on a branch indicates how the signal from the originating node affects the destination node.
*   **Path:** A sequence of connected branches starting from an input node and ending at an output node.
*   **Forward Path:** A path that does not repeat any node.
*   **Feedback Loop (or Cycle):** A path that starts and ends at the same node.
*   **Non-touching Loops:** Two or more feedback loops that do not share any common nodes.

**Relevance to Microwave Network Analysis (CO2 - Knowledge Level: K3):**

SFGs are a powerful tool for analyzing microwave networks because microwave circuits often involve:
*   **Cascaded Stages:** Amplifiers, mixers, and filters are frequently connected in series. SFGs allow for the easy calculation of the overall gain or loss of such cascaded systems.
*   **Feedback Networks:** Many microwave amplifiers and oscillators utilize feedback, which can be effectively modeled and analyzed using SFGs to determine stability and performance.
*   **Interactions between Components:** SFGs can represent the signal flow and interactions between different microwave components within a larger system.

**Textbook References:**

*   **Pozar, "Microwave Engineering" (4/e):** While Pozar primarily focuses on S-parameters for network analysis, the underlying principles of system representation are relevant. SFGs can be seen as an alternative graphical representation of the system equations derived from S-parameter matrices.
*   **Liao, "Microwave Devices & Circuits" (3/e):** Liao often uses block diagrams and transfer functions, which SFGs visually complement and enhance.

---

### 2. Constructing Signal Flow Graphs

To construct an SFG for a microwave circuit, you need to:

1.  **Identify System Variables:** Determine the key signals (voltages, currents, power, etc.) at different points in the circuit. These will become the nodes in the SFG.
2.  **Express Relationships as Equations:** Write down the mathematical relationships between these variables. This typically involves transfer functions (ratios of output to input) or equations describing the behavior of individual components.
3.  **Draw Nodes and Branches:**
    *   For each variable, draw a node.
    *   For each equation representing a relationship (e.g., $V_{out} = G \cdot V_{in}$), draw a directed branch from the input variable's node to the output variable's node. The "gain" or "weight" of this branch is the transfer function ($G$ in this example).
    *   If a variable depends on multiple other variables, draw multiple branches leading to its node.

**Example:**

Consider two cascaded amplifier stages.
*   Stage 1: Input $V_{in1}$, Output $V_{out1} = G_1 \cdot V_{in1}$
*   Stage 2: Input $V_{in2}$, Output $V_{out2} = G_2 \cdot V_{in2}$

When cascaded, the output of Stage 1 ($V_{out1}$) becomes the input to Stage 2 ($V_{in2}$). So, $V_{in2} = V_{out1}$.

**SFG Construction:**

*   **Nodes:** $V_{in1}$, $V_{out1}$ (which is also $V_{in2}$), $V_{out2}$.
*   **Branches:**
    *   From $V_{in1}$ to $V_{out1}$ with gain $G_1$.
    *   From $V_{out1}$ to $V_{out2}$ with gain $G_2$.

**Diagram:**

```
      +-------G1-------+
Vin1 ----> | Vout1/Vin2 | ----> Vout2
      +----------------+
```

---

### 3. Mason's Gain Formula

Mason's Gain Formula is the fundamental method for calculating the overall transfer function of a system represented by an SFG. It directly relates the overall gain from an input node to an output node to the gains of various paths and loops within the graph.

**The Formula:**

The overall forward path gain $T$ from input node $N_{in}$ to output node $N_{out}$ is given by:

$T = \frac{\sum_{k} P_k \Delta_k}{ \Delta }$

Where:

*   $P_k$: The gain of the $k$-th forward path from $N_{in}$ to $N_{out}$.
*   $\Delta$: The determinant of the SFG. It is calculated as:
    $\Delta = 1 - (\sum L_i) + (\sum L_i L_j \text{ (non-touching)}) - (\sum L_i L_j L_k \text{ (non-touching)}) + \dots$
    Where:
    *   $\sum L_i$: Sum of the gains of all individual forward paths (single loops).
    *   $\sum L_i L_j \text{ (non-touching)}$: Sum of the product of gains of all combinations of two non-touching forward paths.
    *   The terms continue with alternating signs for three, four, and more non-touching forward paths.
*   $\Delta_k$: The determinant of the SFG with the $k$-th forward path and all loops connected to it removed. $\Delta_k$ is calculated using the same formula as $\Delta$, but applied to the subgraph that does not contain the $k$-th forward path or any loop that touches it.

**Important Considerations for Applying Mason's Gain Formula:**

*   **Forward Paths:** Must be simple paths (no repeated nodes).
*   **Loops:** Must start and end at the same node.
*   **Non-touching:** Two paths or loops are non-touching if they do not share any common nodes.

**Textbook References:**

*   **Collin, "Foundations of Microwave Engineering" (2/e):** Collin's book is a strong resource for network analysis techniques, and SFGs are a natural extension for system-level analysis.
*   **Liao, "Microwave Devices & Circuits" (3/e):** Liao likely provides detailed examples of applying Mason's Gain Formula for various microwave circuits.

---

### 4. Applying SFGs to Microwave Network Analysis

SFGs can be applied to analyze various aspects of microwave networks, including:

*   **Overall Gain of Cascaded Systems:** As shown in the earlier example, the total gain is simply the product of individual stage gains.
*   **Feedback Amplifiers:** Analyzing the effect of feedback on gain, bandwidth, and stability.
*   **Oscillators:** Determining the oscillation frequency and output power.
*   **Transmission Line Effects:** Incorporating reflections and standing waves.

**Example: A Single-Stage Feedback Amplifier**

Consider a single transistor amplifier with a feedback path.
Let:
*   $V_{in}$: Input voltage
*   $V_1$: Voltage at the input of the amplifier stage
*   $V_{out}$: Output voltage
*   $A$: Forward gain of the amplifier stage ($V_{out} = A \cdot V_1$)
*   $\beta$: Feedback factor (fraction of output voltage fed back to the input, $V_{fb} = \beta \cdot V_{out}$)
*   $V_{in}'$: Net input voltage to the amplifier stage ($V_{in}' = V_{in} - V_{fb}$)

**SFG Construction:**

*   **Nodes:** $V_{in}$, $V_1$, $V_{out}$, $V_{fb}$.
*   **Equations:**
    1.  $V_1 = V_{in} - V_{fb}$
    2.  $V_{out} = A \cdot V_1$
    3.  $V_{fb} = \beta \cdot V_{out}$

**SFG Diagram:**

```
      +------A-------+
Vin ----> | V1 | ----> | Vout |
      ^      +-------+      |
      |                     |
      +-------beta--------+
```

**Analysis using Mason's Gain Formula:**

*   **Forward Path:**
    *   $P_1$: $V_{in} \rightarrow V_1 \rightarrow V_{out}$
    *   Gain $P_1 = A \cdot 1 = A$ (The '1' represents the implicit multiplication by 1 for the voltage subtraction to feed into $V_1$). The SFG can be drawn slightly differently to explicitly show the summation node:

    ```
             +-------A-------+
    Vin ---> | V1 | ----> | Vout |
             ^       +-------+      |
             |      /               |
             |     / (gain 1)      |
             |    /                |
             +----<----------------+
                  |
                  +-------beta-------+
    ```

    Let's redraw for clarity with explicit summation:

    ```
             +-------A-------+
    Vin ---> | V1 | ----> | Vout |
             ^       +-------+      |
             |      ^               |
             |     /                |
             |    / (-1)            |
             |   /                  |
             +--+-------------------+
                |
                +-------beta-------+
    ```
    Here, the subtraction at $V_1$ is represented by a branch with gain `-1` coming from $V_{fb}$.

    **Corrected SFG for Feedback:**
    Let's model the input subtraction more explicitly.
    Nodes: $V_{in}, V_{diff}, V_{out}, V_{fb}$.
    Equations:
    1. $V_{diff} = V_{in} - V_{fb}$ (represented by two branches: $V_{in} \rightarrow V_{diff}$ with gain +1, and $V_{fb} \rightarrow V_{diff}$ with gain -1)
    2. $V_{out} = A \cdot V_{diff}$
    3. $V_{fb} = \beta \cdot V_{out}$

    ```
             +-------+     +------A-------+
    Vin ---->|       |---->|              |----> Vout
             | Vdiff |     | Vout         |
             +-------+     +--------------+
                ^                 ^
                | (-1)            | (beta)
                |                 |
                +-----------------+
    ```

    *   **Forward Path:** $V_{in} \rightarrow V_{diff} \rightarrow V_{out}$
        *   $P_1 = 1 \times A = A$

    *   **Feedback Loops:**
        *   $L_1$: $V_{out} \rightarrow V_{fb} \rightarrow V_{diff} \rightarrow V_{out}$ (No, this path doesn't lead back to Vout directly. Let's trace the loop properly)
        *   $L_1$: $V_{out} \rightarrow V_{fb} \rightarrow V_{diff} \rightarrow (\text{which goes to } V_{out})$
        Let's re-examine the loop definition. A loop starts and ends at the same node.
        *   $V_{out} \rightarrow V_{fb}$ (gain $\beta$)
        *   $V_{fb} \rightarrow V_{diff}$ (gain -1)
        *   $V_{diff} \rightarrow V_{out}$ (gain A)
        So, the loop is $V_{out} \xrightarrow{\beta} V_{fb} \xrightarrow{-1} V_{diff} \xrightarrow{A} V_{out}$
        *   $L_1$ gain = $\beta \times (-1) \times A = -A\beta$

*   **Calculate $\Delta$:**
    *   $\Delta = 1 - (\sum L_i) + (\sum L_i L_j \text{ (non-touching)}) - \dots$
    *   There is only one loop ($L_1$).
    *   $\Delta = 1 - L_1 = 1 - (-A\beta) = 1 + A\beta$

*   **Calculate $\Delta_k$:**
    *   For $P_1$, the loop $L_1$ touches $P_1$ (at $V_{out}$). So, when removing $P_1$ and its touching loops, $L_1$ is removed.
    *   $\Delta_1 = 1$ (since there are no other loops left after removing $L_1$, and the forward path is removed).

*   **Overall Transfer Function ($T = V_{out} / V_{in}$):**
    *   $T = \frac{P_1 \Delta_1}{\Delta} = \frac{A \times 1}{1 + A\beta} = \frac{A}{1 + A\beta}$

This result is the well-known formula for a negative feedback amplifier.

**CO2 Alignment:** This example demonstrates how SFGs can be used to derive the transfer function of a microwave network with feedback, aligning with CO2's knowledge level K3 (Analyze).

---

### 5. Advanced SFG Concepts and Applications

*   **Input and Output Nodes:** A system can have multiple input and output nodes. Mason's formula is applied for each input-output pair.
*   **Self-Loops:** A branch that starts and ends at the same node. These are simply single-loop gains.
*   **Handling Complex Networks:** For systems with multiple cascaded stages, internal reflections, and feedback, SFGs can become complex but manageable. S-parameters can be converted to transfer functions to be used as branch gains.

**Example: Cascaded Stages with Reflections**

Consider two cascaded transmission lines, each with reflection coefficients $\Gamma_1$ and $\Gamma_2$ at their ports.

This can be modeled by breaking down the signal flow at each junction. The complexity arises from signals reflecting back and forth. SFGs, when combined with impedance or S-parameter analysis, can handle these reflections. However, directly modeling every single reflection in a general SFG can be cumbersome. For complex multi-reflection scenarios, using S-parameters directly in matrix form is often more efficient.

**Reference Book Usage:**

*   **Maloratsky, "Passive RF and Microwave Integrated Circuits":** This book might discuss how to represent multi-port networks (which are common in passive microwave circuits) using block diagrams that can be translated into SFGs.
*   **Kneppo, Fabian, et al., "Microwave Integrated Circuits":** This text could provide specific examples of SFG applications in the design of MIC components.

---

### 6. Advantages and Disadvantages of SFGs

**Advantages:**

*   **Systematic Approach:** Provides a structured way to analyze complex systems.
*   **Graphical Intuition:** Visual representation helps in understanding signal flow and interdependencies.
*   **Efficient for Feedback Systems:** Mason's Gain Formula handles feedback loops effectively.
*   **Component Simplification:** Complex block diagrams can be reduced to a simple SFG.

**Disadvantages:**

*   **Complexity for Large Systems:** SFGs can become very large and difficult to manage for highly interconnected systems.
*   **Requires Algebraic Manipulation:** Deriving branch gains from circuit parameters might require significant algebraic work.
*   **Less Intuitive for Distributed Elements:** While possible, modeling distributed elements (like transmission lines) with reflection requires careful formulation of branch gains. S-parameters are often more direct for multi-port distributed networks.
*   **Not Always the Most Efficient for Purely S-parameter Based Analysis:** If the system is entirely defined by S-parameters, direct matrix multiplication might be simpler than converting to SFG branch gains.

---

### 7. Learning Outcome Alignment

*   **CO1: Describe the basic principles of Microwave solid state diodes, transistors, generators and amplifiers. (Knowledge Level: K2)**
    *   While SFGs are primarily an analysis tool, understanding how to represent the gain and feedback characteristics of amplifiers (described in CO1) is a prerequisite for building their SFGs. The analysis using SFGs helps to solidify the understanding of these component behaviors in a system context.

*   **CO2: Analyse Microwave Networks using signal flow graphs (Knowledge Level: K3)**
    *   This entire module is dedicated to this CO. The construction of SFGs and the application of Mason's Gain Formula directly address this outcome.

*   **CO3: Design microwave filters by different methods (Knowledge Level: K3)**
    *   SFGs are not a primary filter *design* tool itself (methods like Butterworth, Chebyshev, etc., are used for that). However, once a filter is designed (e.g., represented by its transmission zeros and poles), SFGs can be used to analyze its performance in a larger system or to analyze the tuning and sensitivity of filter parameters.

*   **CO4: Illustrate the basic concepts of Monolithic Integrated Circuits (Knowledge Level: K2)**
    *   MICs often involve multiple interconnected active and passive components. SFGs can be used to represent the signal flow and analyze the overall performance of an MIC, thus illustrating basic system concepts relevant to MICs.

---

### 8. Practice Questions and Answers

**Question 1:**
Draw a Signal Flow Graph for a two-stage amplifier where the second stage has a feedback loop from its output to its input.
Stage 1: $V_{out1} = G_1 V_{in1}$
Stage 2: $V_{out2} = \frac{A_2}{1 + A_2 \beta} V_{in2}$ (assuming internal feedback in stage 2)
And $V_{in2} = V_{out1}$. The overall input is $V_{in1}$ and overall output is $V_{out2}$.

**Answer 1:**

Let's define the effective gain of Stage 2 as $A_{2,eff} = \frac{A_2}{1 + A_2 \beta}$.

Nodes: $V_{in1}$, $V_{out1}$ (also $V_{in2}$), $V_{out2}$.

SFG:

```
      +-----G1-----+-----A2,eff-----+
Vin1 ---> |          |----> |             |----> Vout2
      +------------+      +-------------+
```

If the question implies that the feedback is *external* to stage 2, and we model stage 2 as just having gain $A_2$ internally before the feedback loop is applied:

Let's define the signals more precisely.
Stage 1: Input $V_{in1}$, Output $V_{out1} = G_1 V_{in1}$.
Stage 2: Input $V_{in2}$, Internal amplifier gain $A_2$, Output $V_{out2}' = A_2 V_{in2}$.
Feedback loop from $V_{out2}'$ to $V_{in2}$ with gain $\beta$.
Overall output $V_{out2}$ is the final output after the feedback is considered.

Nodes: $V_{in1}$, $V_{out1}$ (also $V_{in2}$), $V_{in2\_stage2}$, $V_{out2\_stage2}$, $V_{fb}$, $V_{out2}$ (final).

Revised SFG for Stage 2 with feedback:
Let $V_{in2}$ be the input to stage 2.
$V_{out2\_stage2} = A_2 \cdot V_{in2\_stage2}$
$V_{fb} = \beta \cdot V_{out2\_stage2}$
$V_{in2\_stage2} = V_{in2} - V_{fb}$
$V_{out2} = V_{out2\_stage2}$

SFG for Stage 2:
```
            +---------A2--------+
Vin2 ----> | V_in2_stage2 |----> | V_out2_stage2 |----> Vout2
            ^                 ^
            | (-1)            | (beta)
            +-----------------+
```

Now, cascade Stage 1 with this Stage 2: $V_{out1} = V_{in2}$.

Overall SFG:
```
      +-----G1-----+
Vin1 ---> |          |----> | Vin2 (stage 2 input) |
      +------------+      +----------------------+
                          |     +---------A2--------+
                          |     | V_in2_stage2 |----> | V_out2_stage2 |----> Vout2
                          |     ^                 ^
                          |     | (-1)            | (beta)
                          |     +-----------------+
```

This is a more detailed representation. If we simplify stage 2 to its effective transfer function, it's the first diagram. For analysis, the detailed one is more rigorous.

**Question 2:**
For the SFG below, find the overall transfer function from $X_1$ to $X_4$.
```
      +---2---+     +---(-1)---+     +---3---+
X1 ---> |       |----> |          |----> |       |----> X4
      +-------+     +----------+     +-------+
          ^           |
          | (1)       | (-0.5)
          |           |
          +-----------+
```
Where, the nodes are $X_1, X_2, X_3, X_4$.
Branches: $X_1 \rightarrow X_2$ (gain 2), $X_2 \rightarrow X_3$ (gain -1), $X_3 \rightarrow X_4$ (gain 3).
Also, a feedback loop: $X_2 \rightarrow X_3$ (gain -0.5). (This branch is not from X2 to X3, it's a loop from X3 back to X2). Let's assume the feedback loop is from $X_3$ back to $X_2$ with gain -0.5.

Let's redraw the SFG to be unambiguous:

```
      +---2---+     +---(-1)---+     +---3---+
X1 ---> | X2  |----> | X3       |----> | X4  |
      +-------+     +----------+     +-------+
                      ^    |
                      |    | (-0.5) (loop from X3 back to X2)
                      +----+
```

**Answer 2:**

*   **Forward Path:**
    *   $P_1$: $X_1 \rightarrow X_2 \rightarrow X_3 \rightarrow X_4$
    *   Gain $P_1 = 2 \times (-1) \times 3 = -6$

*   **Feedback Loops:**
    *   $L_1$: $X_2 \rightarrow X_3 \rightarrow X_2$
    *   Gain $L_1 = (-1) \times (-0.5) = 0.5$
    *(Correction: The feedback branch from X3 to X2 has gain -0.5. So the loop is $X_2 \xrightarrow{-1} X_3 \xrightarrow{-0.5} X_2$. The gain of $L_1$ is $(-1) \times (-0.5) = 0.5$)*

*   **Calculate $\Delta$:**
    *   $\Delta = 1 - (\sum L_i) + (\sum L_i L_j \text{ (non-touching)}) - \dots$
    *   $\Delta = 1 - L_1 = 1 - 0.5 = 0.5$

*   **Calculate $\Delta_k$:**
    *   For $P_1$, the loop $L_1$ touches $P_1$ (at nodes $X_2$ and $X_3$).
    *   Therefore, $\Delta_1 = 1$ (since the loop $L_1$ is removed when considering the forward path $P_1$).

*   **Overall Transfer Function ($T = X_4 / X_1$):**
    *   $T = \frac{P_1 \Delta_1}{\Delta} = \frac{(-6) \times 1}{0.5} = -12$

---

### 9. Important Points to Remember

*   **SFGs are directed graphs.**
*   **Nodes represent variables; branches represent relationships.**
*   **Mason's Gain Formula is the key to solving SFGs.**
*   **Correctly identify forward paths and loops.**
*   **Understand the concept of "touching" paths/loops for $\Delta_k$ calculation.**
*   **Be careful with signs in branch gains (especially for feedback).**
*   **SFGs are powerful for analyzing systems with feedback.**
*   **For very complex multi-port networks, S-parameter matrix methods might be more efficient.**

---
This comprehensive study note covers the topic of Signal Flow Graphs within the context of Microwave Network Analysis, aligning with the provided learning and course outcomes. The inclusion of textbook references, examples, and practice questions aims to facilitate a deep understanding of the subject.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
