---
title: "Block diagram representation - block diagram reduction"
subject: "INSTRUMENTATION AND CONTROL SYSTEMS"
module: "Module 3: System Modeling"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463676"
status: "completed"
scrapedAt: "2026-05-20T18:00:41.299Z"
---
# Instrumentation and Control Systems - Module 3: System Modeling

## Topic: Block Diagram Representation & Block Diagram Reduction

**Module Description:** This module introduces the fundamental concepts of system modeling, focusing on representing complex systems using block diagrams and manipulating these diagrams to simplify analysis.

**Learning Outcomes:**

*   Understand the concept of a block diagram as a graphical representation of a control system.
*   Identify standard block diagram elements and their functions.
*   Apply block diagram reduction techniques to simplify complex control systems.
*   Represent various signal flow paths and feedback loops within a block diagram.
*   Analyze the effect of block diagram manipulation on system behavior.
*   Derive the overall transfer function of a system from its block diagram.

---

### 1. Introduction to Block Diagrams

**Definition:** A block diagram is a pictorial representation of the functional relationship between the various signals and components of a control system. It provides a visual overview of how different parts of a system interact.

**Key Concepts:**

*   **System:** A collection of interconnected components that work together to achieve a specific objective.
*   **Signals:** Quantities that vary with time and represent information within the system (e.g., voltage, position, temperature).
*   **Components/Elements:** Individual parts of the system, each performing a specific function.

**Purpose of Block Diagrams:**

*   **Visualization:** Provides a clear, concise view of the system's structure and signal flow.
*   **Analysis:** Simplifies the process of understanding and analyzing system behavior.
*   **Design:** Aids in designing and modifying control systems.
*   **Troubleshooting:** Helps in identifying potential issues within a system.

---

### 2. Standard Block Diagram Elements

**2.1. Blocks:**

*   **Representation:** A rectangle.
*   **Function:** Represents a dynamic or static element that performs a specific mathematical operation on the input signal to produce an output signal.
*   **Transfer Function:** Each block is typically characterized by its transfer function, which is the ratio of the output to the input in the Laplace domain (Output(s) / Input(s)).
    *   *Example:* A proportional controller block with gain 'K' would have $G(s) = K$. An amplifier with gain $A$ would be a block with $A$. A motor with inertia $J$ and damping $B$ would have a transfer function like $\frac{1}{Js+B}$. (Refer to Doebelin for examples of physical system transfer functions).

**2.2. Summing Junctions (Take-off Points):**

*   **Representation:** A circle with inputs marked with '+' or '-' signs.
*   **Function:** Represents the algebraic summation of multiple input signals.
    *   **Positive Input:** Signal enters the circle without a sign (default is '+') or with a '+' sign.
    *   **Negative Input:** Signal enters the circle with a '-' sign.
*   **Example:** In a feedback system, the error signal is often the difference between the reference input and the feedback signal, represented by a summing junction with one '+' and one '-' input.

**2.3. Take-off Points:**

*   **Representation:** A point where a signal can be branched off to multiple destinations without altering the original signal.
*   **Function:** Allows a signal to be used in multiple parts of the system simultaneously.
*   **Example:** The output of a controller might be fed to both the plant and a monitoring unit.

**2.4. Input and Output Signals:**

*   **Representation:** Arrows indicating the direction of signal flow.
*   **Input Signal (R(s)):** The signal entering the system (often the reference or setpoint).
*   **Output Signal (C(s)):** The signal leaving the system (the controlled variable).

---

### 3. Block Diagram Representation of Control Systems

**3.1. Open-Loop Control System:**

*   **Description:** The output has no effect on the control action. The control action is independent of the output.
*   **Block Diagram:** A single block representing the process, with an input and an output.
*   **Example:** A toaster. The time set on the timer determines how long it toasts, regardless of how brown the toast actually is.

    ```
    R(s) ---> [ G(s) ] ---> C(s)
    ```

**3.2. Closed-Loop (Feedback) Control System:**

*   **Description:** The output signal is fed back and compared with the reference input signal to generate an error signal, which then drives the control action. This provides a self-correcting mechanism.
*   **Block Diagram Components:**
    *   **Reference Input (R(s)):** The desired output.
    *   **Error Detector (Summing Junction):** Calculates the difference between R(s) and the feedback signal.
    *   **Controller (G_c(s)):** Generates a control signal based on the error.
    *   **Plant/Process (G_p(s)):** The system being controlled.
    *   **Feedback Path (H(s)):** Measures the output and feeds it back.
    *   **Output (C(s)):** The actual output of the system.

*   **Standard Closed-Loop Block Diagram:**

    ```
         +----------+     +----------+     +----------+
    R(s)----->(+)------>| G_c(s)   |----->| G_p(s)   |-----> C(s)
             ^ (-)      +----------+     +----------+         |
             |                                                |
             +--------------+----------------------------------+
                            |
                         [ H(s) ]
    ```

*   **Example:** A thermostat controlling room temperature. The desired temperature is the reference input. The thermostat measures the actual room temperature (feedback), compares it with the desired temperature, and turns the heater/cooler on or off accordingly. (CO4)

---

### 4. Block Diagram Reduction

**Purpose:** To simplify a complex block diagram into a single block representing the overall transfer function of the system, making analysis easier.

**Key Rules for Block Diagram Reduction:**

*   **Combining Blocks in Cascade:** When blocks are in series, their transfer functions are multiplied.

    ```
    A ---> [ G1(s) ] ---> B ---> [ G2(s) ] ---> C
    ```
    Equivalent to:
    ```
    A ---> [ G1(s) * G2(s) ] ---> C
    ```

*   **Combining Blocks in Parallel:** When blocks have the same input and their outputs are summed, their transfer functions are added (considering signs).

    ```
    A ----+-----> [ G1(s) ] ---> C
          |                           ^
          +-----> [ G2(s) ] ----------+
          |                           |
          +-----> [ G3(s) ] ----------+

    (Assuming summing junction with + signs)
    ```
    Equivalent to:
    ```
    A ----+-----> [ G1(s) + G2(s) + G3(s) ] ---> C
    ```

*   **Eliminating a Summing Junction:** Rearrange signals and blocks to isolate the summing junction.

    *   **Shifting a summing junction *after* a block:** The signal entering the junction is multiplied by the block's transfer function.

        ```
        From A: A ---> [ G(s) ] ---+---> Summing Junction
                                   |
                                   From B: B ----+
        ```
        Equivalent to:
        ```
        From A: A ----------+-----> Summing Junction
                           |
        From B: B ---> [ G(s) ] ----+
        ```

    *   **Shifting a summing junction *before* a block:** The signal leaving the junction is divided by the block's transfer function.

        ```
                                   +-----> [ G(s) ] ---> To C
        From A: A ---> Summing Junction ----+
                                   |
        From B: B ----+------------+
        ```
        Equivalent to:
        ```
        From A: A ---+-----> Summing Junction ----> To C
                     |           |
        From B: B ---+-----> [ 1/G(s) ] ----> To C
        ```

*   **Eliminating a Take-off Point:** Not typically reduced; used to simplify visualization.

*   **Moving a Feedback Connection:**

    *   **Moving a summing junction *after* a block:**

        ```
        From A: A ---> [ G(s) ] ---+---> Summing Junction
                                   |
                                   From B: B ----+
        ```
        Equivalent to:
        ```
        From A: A ----------+-----> Summing Junction
                           |
        From B: B ---> [ G(s) ] ----+
        ```

    *   **Moving a summing junction *before* a block:**

        ```
                                   +-----> [ G(s) ] ---> To C
        From A: A ---> Summing Junction ----+
                                   |
        From B: B ----+------------+
        ```
        Equivalent to:
        ```
        From A: A ---+-----> Summing Junction ----> To C
                     |           |
        From B: B ---+-----> [ 1/G(s) ] ----> To C
        ```

    *   **Moving a take-off point *before* a block:**

        ```
        From A: A ---> Take-off Point ---+---> To C1
                                        |
                                        +-----> [ G(s) ] ---> To C2
        ```
        Equivalent to:
        ```
        From A: A ----------+-------------------> To C1
                           |
                           +-----> [ G(s) ] ---> To C2
        ```
        *Correction:* When moving a take-off point *before* a block, the signal branching off needs to go through the reciprocal of the block's transfer function.

        ```
        From A: A ---+---> To C1
                     |
                     +-----> [ G(s) ] ---> To C2
        ```
        Equivalent to:
        ```
        From A: A ----------+-------------------> To C1
                           |
                           +-----> [ 1/G(s) ] ---> To C2
        ```
        *Self-Correction based on standard rules:* The above is incorrect. Moving a take-off point *before* a block requires dividing subsequent signals by the block's transfer function.

        ```
        A ---> [ G1(s) ] ---+---> C1
                          |
                          +---> [ G2(s) ] ---> C2
        ```
        To move the take-off point before G1(s):
        ```
        A ----+-------------------> C1
              |
              +-----> [ 1/G1(s) ] ---> [ G2(s) ] ---> C2
        ```

    *   **Moving a take-off point *after* a block:**

        ```
        A ---> [ G(s) ] ---> Take-off Point ---+---> To C1
                                             |
                                             +---> To C2
        ```
        Equivalent to:
        ```
        A ---> [ G(s) ] ---> To C1
             --------> To C2
        ```
        *Correction:* This isn't quite right. The signal branched off *after* the block must also go through that block.

        ```
        A ---> [ G(s) ] ---+---> To C1
                          |
                          +---> To C2
        ```
        Equivalent to:
        ```
        A ---> [ G(s) ] ---> To C1
             --------> [ G(s) ] ---> To C2
        ```
        *Further Correction:* The standard rule is that the signal at the take-off point is $C(s) = G(s)R(s)$. If you move the take-off point before G(s), the signal at the take-off point needs to be $C(s)$. So, the signal $A$ needs to be multiplied by $G(s)$ to get $C(s)$.

        ```
        A ---> [ G(s) ] ---+---> To C1
                          |
                          +---> To C2
        ```
        Equivalent to:
        ```
        A ---+-------------------> To C1
             |
             +---> [ G(s) ] ---> To C2
        ```

*   **Cascading and Parallel Simplification Combined:** Often, multiple rules need to be applied sequentially.

**Overall Transfer Function for a Basic Feedback System:**

The overall transfer function for a unity feedback system (H(s) = 1) is:
$T(s) = \frac{C(s)}{R(s)} = \frac{G(s)}{1 + G(s)}$

For a non-unity feedback system:
$T(s) = \frac{C(s)}{R(s)} = \frac{G(s)}{1 + G(s)H(s)}$
(This is often called the "Mason's Gain Formula" for a single loop system.)

**Important Point:** Always clearly label the signals when manipulating the block diagram to avoid confusion. (CO5)

---

### 5. Examples of Block Diagram Reduction

**Example 1: Simple Cascade**

*   **Block Diagram:**
    ```
    R(s) ---> [ 2 ] ---> [ s+1 ] ---> C(s)
    ```
*   **Reduction:** Combine blocks in cascade.
    $G(s) = 2 \times (s+1) = 2s+2$
*   **Resulting Block Diagram:**
    ```
    R(s) ---> [ 2s+2 ] ---> C(s)
    ```
*   **Overall Transfer Function:** $T(s) = 2s+2$

**Example 2: Simple Parallel**

*   **Block Diagram:**
    ```
    R(s) ----+-----> [ 5 ] ------> C(s)
             |
             +-----> [ 2 ] ------> C(s)
    ```
*   **Reduction:** Combine blocks in parallel (assuming summing with '+' signs).
    $G(s) = 5 + 2 = 7$
*   **Resulting Block Diagram:**
    ```
    R(s) ----> [ 7 ] ------> C(s)
    ```
*   **Overall Transfer Function:** $T(s) = 7$

**Example 3: Feedback System**

*   **Block Diagram:**
    ```
         +----------+     +----------+
    R(s)----->(+)------>| 5        |-----> C(s)
             ^ (-)      +----------+
             |
             +--------------+
                            |
                         [ 1/(s+2) ]
    ```
*   **Reduction:** This is a unity feedback system.
    $G(s) = 5$ (Forward path)
    $H(s) = 1/(s+2)$ (Feedback path)
    The formula for a feedback system is $\frac{G}{1+GH}$.
    $T(s) = \frac{5}{1 + 5 \times \frac{1}{s+2}} = \frac{5}{1 + \frac{5}{s+2}} = \frac{5}{\frac{s+2+5}{s+2}} = \frac{5(s+2)}{s+7} = \frac{5s+10}{s+7}$
*   **Overall Transfer Function:** $T(s) = \frac{5s+10}{s+7}$

**Example 4: More Complex System (requires multiple steps)**

*   **Block Diagram:**
    ```
             +----------+     +----------+
    R(s)----->(+)------>| G1       |------>| G2       |-----> C(s)
             ^ (-)      +----------+     +----------+
             |                                 |
             +--------------+--------------------+
                            |
                         [ H1 ]
    ```
*   **Step 1:** Combine G1 and G2 in cascade.
    ```
             +----------+
    R(s)----->(+)------>| G1*G2    |-----> C(s)
             ^ (-)      +----------+
             |                                 |
             +--------------+--------------------+
                            |
                         [ H1 ]
    ```
*   **Step 2:** Apply the feedback formula $T(s) = \frac{G_{forward}}{1 + G_{forward}H_{feedback}}$.
    $G_{forward} = G1 \times G2$
    $H_{feedback} = H1$
    $T(s) = \frac{G1 \times G2}{1 + (G1 \times G2) \times H1}$

**Example 5: Shifting a Summing Junction**

*   **Block Diagram:**
    ```
    R(s) ---> [ 2 ] ---+---> Summing Junction ---+---> [ 3 ] ---> C(s)
                      |                         |
                      +-----> [ 5 ] -------------+
    ```
*   **Step 1:** Shift the summing junction past the block '3'. The signal '5' needs to be divided by '3'.
    ```
    R(s) ---> [ 2 ] ---+---------------------------> Summing Junction ---+---> C(s)
                      |                                                   |
                      +-----> [ 5 ] ----> [ 1/3 ] -----------------------+
    ```
*   **Step 2:** Combine the parallel branches.
    $5 \times (1/3) = 5/3$
    ```
    R(s) ---> [ 2 ] ---+---------------------------> Summing Junction ---+---> C(s)
                      |                                                   |
                      +-----> [ 5/3 ] ------------------------------------+
    ```
*   **Step 3:** Combine the parallel branches at the summing junction.
    $1 + 5/3 = 8/3$
    ```
    R(s) ---> [ 2 ] ---+---------------------------> [ 8/3 ] ---> C(s)
                      |
                      +---------------------------> [ 8/3 ] ---> C(s)
    ```
    *Correction on Step 3:* The summing junction is part of the combination. After shifting the junction, we have:
    ```
    R(s) ---> [ 2 ] ---+---------------------------> Summing Junction (+, -) ---+---> [ 3 ] ---> C(s)
                      |                                                     |
                      +-----> [ 5 ] -----------------------------------------+
    ```
    The output of the first summing junction is $2R(s) - 5$.
    Let's rethink shifting the summing junction.

    **Revised Example 5: Shifting a Summing Junction**
    *   **Block Diagram:**
        ```
        R(s) ---> [ 2 ] ---+---> Summing Junction ---+---> [ 3 ] ---> C(s)
                          |                         |
                          +-----> [ 5 ] -------------+
        ```
    *   **Goal:** Move the summing junction *before* the block [3].
    *   **Step 1:** Move the summing junction. The signal from the summing junction that goes to [3] will now pass through [3] to reach C(s). The other input (5) needs to go through [3] as well.
        ```
        R(s) ---> [ 2 ] ---+---------------------------> Summing Junction ---+---> [ 3 ] ---> C(s)
                          |                                                   |
                          +-----> [ 5 ] -----------> [ 3 ] -----------------+
        ```
    *   **Step 2:** Now the [3] blocks are in parallel.
        ```
        R(s) ---> [ 2 ] ---+---------------------------> Summing Junction ---+---> C(s)
                          |                                                   |
                          +-----> [ 5*3 ] = [ 15 ] --------------------------+
        ```
    *   **Step 3:** Combine the parallel branches at the summing junction.
        ```
        R(s) ---> [ 2 ] ---+---------------------------> Summing Junction (+, -) ---+---> C(s)
                          |                                                          |
                          +-----> [ 1 + 15 ] = [ 16 ] ------------------------------+
        ```
    *   **Step 4:** Combine the remaining cascade blocks.
        $2 \times 16 = 32$
    *   **Resulting Block Diagram:**
        ```
        R(s) ---> [ 32 ] ---> C(s)
        ```
    *   **Overall Transfer Function:** $T(s) = 32$

**Example 6: Moving a Take-off Point**

*   **Block Diagram:**
    ```
    R(s) ---> [ 4 ] ---+---> C(s)
                      |
                      +---> [ 2 ] ---> Y(s)
    ```
*   **Goal:** Move the take-off point *before* the block [4].
*   **Step 1:** The signal at the take-off point is $C(s) = 4R(s)$.
    To have this signal before the [4] block, we need to divide the original input R(s) by 4 to get the signal at the take-off point.
    ```
    R(s) ---+-------------------> C(s)
            |
            +---> [ 1/4 ] ---> [ 4 ] ---> Y(s)
    ```
*   **Step 2:** Simplify the lower path.
    $(1/4) \times 4 = 1$.
    ```
    R(s) ---+-------------------> C(s)
            |
            +---> [ 1 ] ---> Y(s)
    ```
*   **Result:** The output $C(s)$ is now $R(s)$ and $Y(s)$ is $R(s)$. The system structure has changed.

---

### 6. Practice Questions

1.  **Question:** Find the overall transfer function $T(s) = C(s)/R(s)$ for the following block diagram:
    ```
             +----------+     +----------+
    R(s)----->(+)------>| 1/(s+1)  |----->| 1/s      |-----> C(s)
             ^ (-)      +----------+     +----------+
             |                                 |
             +--------------+--------------------+
                            |
                         [ 2 ]
    ```
    *(CO5)*

2.  **Question:** Simplify the given block diagram and find the overall transfer function $T(s) = C(s)/R(s)$.
    ```
            +--------+       +--------+
    R(s)----> Sum(+,+)--->|  G1    |-----> Take-off Point ---> Sum(+, -) --->| G3 | ---> C(s)
            |        |       +--------+                        |       |       +--------+
            |        |                                          |       |          ^
            |        +-----------> Sum(+,-) --->|  G2    |------+       |          |
            |                   ^              +--------+              |       |
            +-------------------+                                       |       |
                                                                        +-------+
                                                                          [ H1 ]
    ```
    *(CO5)*

3.  **Question:** For a unity feedback system with a forward path transfer function $G(s) = \frac{10}{s(s+2)}$, calculate the closed-loop transfer function.
    *(CO5)*

4.  **Question:** Describe the purpose of a summing junction in a feedback control system.
    *(CO4)*

---

### 7. Answers to Practice Questions

1.  **Answer:**
    *   Combine the cascade blocks: $\frac{1}{s+1} \times \frac{1}{s} = \frac{1}{s(s+1)}$
    *   Apply the feedback formula $T(s) = \frac{G}{1+GH}$:
        $G_{forward} = \frac{1}{s(s+1)}$
        $H_{feedback} = 2$
        $T(s) = \frac{\frac{1}{s(s+1)}}{1 + \frac{1}{s(s+1)} \times 2} = \frac{\frac{1}{s(s+1)}}{\frac{s(s+1)+2}{s(s+1)}} = \frac{1}{s(s+1)+2} = \frac{1}{s^2+s+2}$

2.  **Answer:** This requires multiple steps, including moving summing junctions and take-off points.
    *   **Step 1:** Move the take-off point after G2 past G3. The signal branching off needs to be divided by G3.
    *   **Step 2:** Combine the parallel branches after G2.
    *   **Step 3:** Combine the cascade blocks G1 and the resulting parallel sum.
    *   **Step 4:** Apply the feedback formula.

    *Detailed breakdown would be extensive but follows the reduction rules.*
    Let's simplify the inner feedback first. The part with G2 and H1:
    Consider the signal coming out of G1. Let it be $X$.
    $X = G1 \times R(s)$
    The summing junction after G1 takes $(+,+)$ of R(s) and $G2$ output. Wait, the diagram is complex. Let's redraw and analyze carefully.

    Let's analyze the inner loop structure:
    Input to G2 = $G1 \times R(s) - (\text{output of } G2 \times H1)$

    Let's assume the first summing junction is (R(s) + Output_of_G2_from_lower_branch).
    And the second summing junction takes (Output_of_G1_G2 - Output_of_H1).

    *Revised Interpretation of Diagram 2:*
    ```
            +--------+       +--------+
    R(s)----> Sum1(+,+)--->|  G1    |-----> Take-off Point ---> Sum2(+,-) --->| G3 | ---> C(s)
            |        |       +--------+                        |       |       +--------+
            |        |                                          |       |          ^
            |        +-----------> Sum1(-,+?) --->|  G2    |------+       |          |
            |                   ^              +--------+              |       |
            +-------------------+                                       |       |
                                                                        +-------+
                                                                          [ H1 ]
    ```
    This diagram is ambiguously drawn regarding the second summing junction's inputs. Assuming a standard feedback structure where R(s) is the input and C(s) is the output.

    Let's try to interpret the diagram differently to make it solvable with standard rules:
    If the first summing junction is $E1 = R(s) + X_{lower}$, where $X_{lower}$ is the signal from the lower branch.
    If the second summing junction is $E2 = Y1 - Y_{feedback}$, where $Y1$ is from G1 and $Y_{feedback}$ is from H1.

    A more likely interpretation of Diagram 2 for a typical control system problem:
    ```
             +--------+       +--------+
    R(s)----> Sum1(+,+)--->|  G1    |-----> Sum2(+,-) --->| G3 | ---> C(s)
             |        |       +--------+        |       |       +--------+
             |        +---------> Sum1(-,+?)--->| G2    |--------+          |
             |                  ^               +--------+          |          |
             +------------------+                                     |          |
                                                                       +----------+
                                                                         [ H1 ]
    ```
    In this case:
    $E1 = R(s) + X_{lower}$
    $Y1 = G1 \times E1$
    $X_{lower} = -G2 \times Y2$  (Assuming the lower branch into Sum1 is negative feedback of Y2)
    $Y2 = G1 \times E1$ (This doesn't make sense, X_lower should be related to Y2, not Y1)

    Let's revert to the *take-off point* interpretation:
    ```
             +--------+       +--------+
    R(s)----> Sum1(+,+)--->|  G1    |-----> Take-off Point ---> Sum2(+,-) --->| G3 | ---> C(s)
             |        |       +--------+                        |       |       +--------+
             |        |                                          |       |          ^
             |        +-----------> Sum1(-,+?) --->| G2    |------+       |          |
             |                   ^              +--------+              |       |
             +-------------------+                                       |       |
                                                                         +-------+
                                                                           [ H1 ]
    ```
    Let $E1 = R(s) + X_{G2\_output}$.
    $Y_{G1} = G1 \times E1$.
    The take-off point is after G1, so the signal is $Y_{G1}$.
    The inputs to Sum2 are $Y_{G1}$ (positive) and $Y_{H1}$ (negative).
    $Y_{H1} = H1 \times C(s)$.
    $E2 = Y_{G1} - Y_{H1} = G1 \times E1 - H1 \times C(s)$.
    $C(s) = G3 \times E2 = G3 \times (G1 \times E1 - H1 \times C(s))$.
    $C(s) = G1 \times G3 \times E1 - G3 \times H1 \times C(s)$.
    $C(s) (1 + G1 \times G3 \times H1) = G1 \times G3 \times E1$.
    $C(s) = \frac{G1 \times G3}{1 + G1 \times G3 \times H1} \times E1$.

    Now we need to find $E1$. The diagram implies that the output of G2 goes to Sum1. Let's assume Sum1 is $E1 = R(s) - (\text{output of G2})$.
    Output of G2 = $G2 \times (\text{Input to G2})$.
    Input to G2 is $R(s)$ (not from the diagram) OR from the take-off point, OR from G1 output.
    This diagram is very poorly specified for a typical reduction problem without clear branching points.

    **Assuming a standard signal flow:**
    Let's try a simpler reduction sequence, assuming the lower branch into Sum1 is a feedback from the output of G2:
    ```
            +--------+       +--------+
    R(s)----> Sum1(+,+)--->|  G1    |-----> Sum2(+,-) --->| G3 | ---> C(s)
             |        |       +--------+        |       |       +--------+
             |        +---------> Sum1(-,+?)--->| G2    |--------+          |
             |                  ^               +--------+          |          |
             +------------------+                                     |          |
                                                                       +----------+
                                                                         [ H1 ]
    ```
    If the input to Sum1 is $R(s)$ and the output of G2.
    Let the output of G2 be $Y_{G2}$. Sum1's output $E1 = R(s) - Y_{G2}$.
    $Y_{G1} = G1 \times E1$.
    $Y_{G2} = G2 \times E1$.
    $E2 = Y_{G1} - Y_{H1} = G1 \times E1 - H1 \times C(s)$.
    $C(s) = G3 \times E2$.
    Substitute $E1$ and $E2$:
    $Y_{G2} = G2 \times (R(s) - Y_{G2})$.
    $Y_{G2} (1+G2) = G2 \times R(s)$.
    $Y_{G2} = \frac{G2}{1+G2} R(s)$.
    $E1 = R(s) - \frac{G2}{1+G2} R(s) = R(s) (1 - \frac{G2}{1+G2}) = R(s) (\frac{1+G2-G2}{1+G2}) = \frac{1}{1+G2} R(s)$.
    $Y_{G1} = G1 \times E1 = \frac{G1}{1+G2} R(s)$.
    $E2 = Y_{G1} - H1 \times C(s) = \frac{G1}{1+G2} R(s) - H1 \times C(s)$.
    $C(s) = G3 \times E2 = G3 \times (\frac{G1}{1+G2} R(s) - H1 \times C(s))$.
    $C(s) = \frac{G1 G3}{1+G2} R(s) - G3 H1 C(s)$.
    $C(s) (1 + G3 H1) = \frac{G1 G3}{1+G2} R(s)$.
    $T(s) = \frac{C(s)}{R(s)} = \frac{G1 G3}{(1+G2)(1+G3 H1)}$.
    This is one possible interpretation. Without clearer diagram, it's hard to be certain.

    **Let's assume the question implies a standard reduction that avoids complex interpretations:**
    Assume the lower branch into Sum1 is a direct input $R'(s)$, and the take-off point branches the output of G1.
    ```
             +--------+       +--------+
    R(s)----> Sum1(+,+)--->|  G1    |-----> Take-off Point ---> Sum2(+,-) --->| G3 | ---> C(s)
             |        |       +--------+                        |       |       +--------+
             |        +-----------> Sum1(+,-?) --->| G2    |------+       |          ^
             |                   ^              +--------+              |       |
             +-------------------+                                       |       |
                                                                         +-------+
                                                                           [ H1 ]
    ```
    If the lower branch into Sum1 is a parallel input, and the take-off is just a signal branch:
    Let $E1 = R(s) + X_{G2\_output}$.
    $Y_{G1} = G1 \times E1$.
    The take-off point splits $Y_{G1}$ into two paths: one to Sum2 (positive), and one that goes through G2 and back to Sum1 (negative). This is a complex nested feedback.

    **Most Probable Interpretation for a Test:**
    The diagram is intended to represent a system where the output of G2 feeds back to the first summing junction, and the output of G1 goes to the second summing junction where it's compared with H1.
    Let's re-evaluate this scenario:
    First Summing Junction: $E1 = R(s) + Y_{G2\_feedback}$
    $Y_{G1} = G1 \times E1$
    $Y_{G2} = G2 \times E1$ (if G2 also gets E1)
    Take-off point after G1: Signal is $Y_{G1}$.
    Second Summing Junction: $E2 = Y_{G1} - Y_{H1}$.
    $Y_{H1} = H1 \times C(s)$.
    $C(s) = G3 \times E2$.

    This is still difficult to resolve without clear definition of where G2's output goes relative to the take-off point and its own input.

    **Let's assume the problem meant this common configuration:**
    ```
                     +--------+       +--------+
             R(s)----> Sum1(+,+)--->|  G1    |-----> Sum2(+,-) --->| G3 | ---> C(s)
                     |        |       +--------+        |       |       +--------+
                     |        +---------> Sum1(-,+?)--->| G2    |--------+          |
                     |                  ^               +--------+          |          |
                     +------------------+                                     |          |
                                                                               +----------+
                                                                                 [ H1 ]
    ```
    In this case, the system can be reduced by:
    1.  Simplifying the inner loop involving G2 and its feedback (assuming Sum1's negative input comes from the output of G2).
        The inner loop is $R(s) \rightarrow E1 \rightarrow G1$ and $E1 \rightarrow G2$.
        If $E1 = R(s) - Y_{G2}$, and $Y_{G2} = G2 \times E1$, this is a direct feedback of $E1$ through $G2$. This is not typical.

    **Re-analyzing Question 2 based on common patterns:**
    Let's assume the output of G1 goes to Sum2 (positive input).
    Let's assume the output of G2 goes to Sum1 (negative input).
    Let's assume the input to G2 is the output of G1.
    Let's assume the input to G1 is R(s).
    ```
             +--------+       +--------+
    R(s)----> Sum1(+,+)--->|  G1    |-----> Sum2(+,-) --->| G3 | ---> C(s)
             |        |       +--------+        |       |       +--------+
             |        +---------> Sum1(-,+?)--->| G2    |--------+          |
             |                  ^               +--------+          |          |
             +------------------+                                     |          |
                                                                       +----------+
                                                                         [ H1 ]
    ```
    This interpretation still seems problematic.

    **Let's try another interpretation based on the take-off point:**
    ```
             +--------+       +--------+
    R(s)----> Sum1(+,+)--->|  G1    |-----> Take-off Point ---> Sum2(+,-) --->| G3 | ---> C(s)
             |        |       +--------+                        |       |       +--------+
             |        +-----------> Sum1(-,+?) --->| G2    |------+       |          ^
             |                   ^              +--------+              |       |
             +-------------------+                                       |       |
                                                                         +-------+
                                                                           [ H1 ]
    ```
    Let $E1 = R(s) + Y_{G2\_output}$ (assuming the lower branch is negative feedback for E1).
    $Y_{G1} = G1 \times E1$.
    The signal at the take-off point is $Y_{G1}$.
    $E2 = Y_{G1} - Y_{H1}$.
    $Y_{H1} = H1 \times C(s)$.
    $C(s) = G3 \times E2$.

    Let's assume the input to G2 is $Y_{G1}$.
    $Y_{G2} = G2 \times Y_{G1}$.
    And the input to Sum1 is $R(s)$ and $-Y_{G2}$.
    $E1 = R(s) - Y_{G2}$.
    $Y_{G1} = G1 \times E1$.
    $C(s) = G3 \times (Y_{G1} - H1 \times C(s))$.
    $C(s) = G3 \times (G1 \times E1 - H1 \times C(s))$.
    $C(s) (1 + G3 H1) = G1 G3 E1$.
    $E1 = R(s) - G2 \times Y_{G1} = R(s) - G2 \times (G1 \times E1)$.
    $E1 (1 + G1 G2) = R(s)$.
    $E1 = \frac{R(s)}{1 + G1 G2}$.
    $C(s) (1 + G3 H1) = G1 G3 \frac{R(s)}{1 + G1 G2}$.
    $T(s) = \frac{C(s)}{R(s)} = \frac{G1 G3}{(1 + G1 G2)(1 + G3 H1)}$.

    This is a consistent interpretation.

3.  **Answer:**
    For a unity feedback system, $H(s) = 1$.
    $G(s) = \frac{10}{s(s+2)}$.
    Closed-loop transfer function $T(s) = \frac{G(s)}{1 + G(s)H(s)} = \frac{\frac{10}{s(s+2)}}{1 + \frac{10}{s(s+2)} \times 1} = \frac{10}{s(s+2) + 10} = \frac{10}{s^2+2s+10}$.

4.  **Answer:**
    A summing junction is used to represent the comparison of signals within a control system. In a feedback system, it typically calculates the **error signal** by subtracting the feedback signal from the reference input signal. This error signal is then used by the controller to adjust the system's output. (CO4)

---

### 8. Important Points to Remember

*   **Block Diagrams are System Representations:** They show functional relationships, not physical connections.
*   **Transfer Functions:** Represent the input-output relationship of individual system components.
*   **Standard Elements:** Blocks, summing junctions, and take-off points have specific meanings.
*   **Reduction Rules:** Master the rules for cascading, parallel combination, and moving junctions/take-off points.
*   **Systematic Approach:** Apply reduction rules systematically, one step at a time.
*   **Transfer Function of Feedback Systems:** The $\frac{G}{1 \pm GH}$ formula is crucial.
*   **Double-Check:** Verify each step to avoid errors in complex reductions.
*   **Interpretation:** Be mindful of the diagram's intended meaning, especially with complex interconnections.
*   **CO Alignment:** This topic directly addresses CO5 (analyzing responses) and CO4 (role of control blocks), as the block diagram is the foundation for such analysis.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 9. Textbook References

*   **Industrial Instrumentation by K Krishnaswamy:** Provides foundational understanding of system elements and their representations.
*   **Measurement systems applications and design by Ernest O. Doebelin:** Offers insights into modeling physical systems with transfer functions, which are the core of blocks.
*   **Control Systems Engineering by Nise N.S.:** A comprehensive resource for block diagram algebra, reduction techniques, and their application in control system analysis. (Strongly recommended for detailed understanding of reduction rules).
*   **Modern Control Engineering by Ogata K:** Offers clear explanations and numerous examples of block diagram reduction.
*   **Control Systems by K R Varmah:** Covers the basics of block diagrams and their manipulation.
*   **Principles of Industrial Instrumentation by Patranabis D:** Useful for understanding how physical instruments are modeled as blocks.
*   **Industrial Instrumentation and Control by Singh, S.K:** Provides practical examples of block diagrams in industrial contexts.
*   **Control Systems Principles and Design by Gopal M:** Another strong reference for block diagram reduction methods.
*   **Automatic Control Systems by Kuo B. C:** A classic text that thoroughly explains block diagram representation and reduction.

---

This concludes Module 3, Topic 1. The ability to effectively represent and reduce block diagrams is fundamental to analyzing and designing control systems.

---