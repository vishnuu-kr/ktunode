---
title: "Sequential Logic Design  :- Latches and Flip-Flops- SR latch, SR latch with enable, JK flipflop, D flipflop, Register Enabled Flip-Flop, Resettable Flip-Flop."
subject: "DIGITAL ELECTRONICS AND LOGIC DESIGN"
module: "Module 4: Sequential Logic Design  :"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ad5e"
status: "completed"
scrapedAt: "2026-05-20T16:23:58.871Z"
---
# DIGITAL ELECTRONICS AND LOGIC DESIGN: Sequential Logic Design - Latches and Flip-Flops

**Module 4: Sequential Logic Design**
**Topic: Sequential Logic Design - Latches and Flip-Flops**
**Focus: SR latch, SR latch with enable, JK flip-flop, D flip-flop, Register Enabled Flip-Flop, Resettable Flip-Flop**

**Learning Outcomes:**

*   Understand the fundamental differences between combinational and sequential logic.
*   Explain the basic operation of an SR latch.
*   Describe the function of an SR latch with enable input.
*   Analyze the operation of a JK flip-flop, including the race-around condition and how it's resolved.
*   Explain the function of a D flip-flop.
*   Understand the functionality of Register Enabled Flip-Flops.
*   Describe the concept and implementation of Resettable Flip-Flops.
*   Compare and contrast the different types of latches and flip-flops.
*   Analyze timing diagrams for latches and flip-flops.

## 1. Introduction to Sequential Logic

*   **Combinational Logic:** Output depends solely on the *current* input values.  No memory of past inputs. Examples: AND, OR, XOR gates, decoders, multiplexers.
*   **Sequential Logic:** Output depends on *both* the current inputs and the *past* history of inputs (stored in internal memory elements).  Provides memory capabilities. Examples: Latches, Flip-Flops, Registers, Counters.

## 2. Latches

*   **Definition:** A latch is a level-sensitive sequential logic circuit.  The output changes while the input signal is asserted (high or low depending on the latch type).  Not edge-triggered.  Often considered asynchronous.
*   **Key Features:**
    *   Simple structure.
    *   Sensitive to input signal duration.
    *   Generally avoided in complex synchronous designs due to timing uncertainty.

### 2.1 SR Latch (Set-Reset Latch)

*   **Construction:** Typically built using two cross-coupled NOR or NAND gates.
*   **Inputs:**
    *   **S (Set):** When asserted (typically HIGH), it forces the output Q to a HIGH state (Q=1).
    *   **R (Reset):** When asserted (typically HIGH), it forces the output Q to a LOW state (Q=0).
*   **Outputs:**
    *   **Q:** The primary output.
    *   **Q' (Q-bar):** The complement of Q. Ideally, Q' is always the opposite of Q.
*   **Truth Table (Using NOR gates, active HIGH S and R):**

    | S   | R   | Q(t+1)   | Q'(t+1) | Comment                         |
    |-----|-----|----------|----------|---------------------------------|
    | 0   | 0   | Q(t)     | Q'(t)   | No Change (Memory)              |
    | 0   | 1   | 0        | 1        | Reset (Q goes to 0)             |
    | 1   | 0   | 1        | 0        | Set (Q goes to 1)               |
    | 1   | 1   | Undefined/Invalid | Undefined/Invalid | Avoid this state (Race Condition) |

*   **Truth Table (Using NAND gates, active LOW S and R):**

    | S   | R   | Q(t+1)   | Q'(t+1) | Comment                         |
    |-----|-----|----------|----------|---------------------------------|
    | 0   | 0   | Undefined/Invalid | Undefined/Invalid | Avoid this state (Race Condition) |
    | 0   | 1   | 1        | 0        | Set (Q goes to 1)               |
    | 1   | 0   | 0        | 1        | Reset (Q goes to 0)             |
    | 1   | 1   | Q(t)     | Q'(t)   | No Change (Memory)              |

*   **Operation:**
    *   **Set (S=1, R=0):** Q becomes 1, Q' becomes 0.
    *   **Reset (S=0, R=1):** Q becomes 0, Q' becomes 1.
    *   **Hold (S=0, R=0):** Q and Q' retain their previous values (memory).
    *   **Invalid State (S=1, R=1 - NOR):** Both Q and Q' are forced to 0.  If both S and R return to 0 simultaneously, the final state of Q and Q' is unpredictable due to a race condition.  This state should be avoided.
    *   **Invalid State (S=0, R=0 - NAND):** Both Q and Q' are forced to 1.  If both S and R return to 1 simultaneously, the final state of Q and Q' is unpredictable due to a race condition.  This state should be avoided.

*   **Race Condition:** The unpredictable output when both S and R are asserted simultaneously and then de-asserted.

### 2.2 SR Latch with Enable (SR Latch with Enable Input)

*   **Purpose:** Adds an enable input (E) to control when the latch can change state.
*   **Construction:** An SR latch with AND gates added to the S and R inputs, controlled by the Enable input.
*   **Inputs:**
    *   **S (Set):** As before.
    *   **R (Reset):** As before.
    *   **E (Enable):** When HIGH, the latch is enabled and behaves like a normal SR latch. When LOW, the latch is disabled, and the outputs remain unchanged (hold state).
*   **Truth Table (Using NOR Gate SR Latch and AND gates for Enable):**

    | E   | S   | R   | Q(t+1)   | Q'(t+1) | Comment                                    |
    |-----|-----|-----|----------|----------|--------------------------------------------|
    | 0   | X   | X   | Q(t)     | Q'(t)   | Disabled (Hold State)                      |
    | 1   | 0   | 0   | Q(t)     | Q'(t)   | No Change (Memory)                         |
    | 1   | 0   | 1   | 0        | 1        | Reset (Q goes to 0)                        |
    | 1   | 1   | 0   | 1        | 0        | Set (Q goes to 1)                          |
    | 1   | 1   | 1   | Undefined/Invalid | Undefined/Invalid | Avoid this state (Race Condition)              |

*   **Operation:**
    *   **E=0 (Disabled):** The outputs Q and Q' remain unchanged, regardless of the S and R inputs. The latch is in a "hold" state.
    *   **E=1 (Enabled):** The latch behaves like a regular SR latch. The S and R inputs determine the output state.

## 3. Flip-Flops

*   **Definition:** A flip-flop is an edge-triggered sequential logic circuit. The output changes only at a specific transition of the clock signal (rising edge or falling edge).  Edge-triggered devices provide more predictable timing compared to level-sensitive latches, making them suitable for synchronous designs.
*   **Key Features:**
    *   Edge-triggered (sensitive to clock transitions, not levels).
    *   Provides more stable and predictable behavior compared to latches.
    *   Essential building blocks for synchronous sequential circuits.

### 3.1 JK Flip-Flop

*   **Construction:** Based on an SR latch but with feedback paths from the outputs Q and Q' to the inputs of the AND gates feeding the SR latch inputs.
*   **Inputs:**
    *   **J:** Similar to S (Set).
    *   **K:** Similar to R (Reset).
    *   **CLK (Clock):** The trigger signal (either rising or falling edge).
*   **Outputs:**
    *   **Q:** The primary output.
    *   **Q':** The complement of Q.
*   **Truth Table (Assuming positive edge-triggered):**

    | CLK    | J   | K   | Q(t+1)   | Comment                         |
    |--------|-----|-----|----------|---------------------------------|
    | Rising | 0   | 0   | Q(t)     | No Change (Memory)              |
    | Rising | 0   | 1   | 0        | Reset (Q goes to 0)             |
    | Rising | 1   | 0   | 1        | Set (Q goes to 1)               |
    | Rising | 1   | 1   | Q'(t)    | Toggle (Q inverts)              |

*   **Operation:**
    *   **J=0, K=0:** No change; the flip-flop retains its current state.
    *   **J=0, K=1:** Reset; Q becomes 0.
    *   **J=1, K=0:** Set; Q becomes 1.
    *   **J=1, K=1:** Toggle; Q changes to its opposite state (if Q was 0, it becomes 1; if Q was 1, it becomes 0).
*   **Race-Around Condition:** Occurs when J=1, K=1, and the clock pulse is HIGH for a longer duration than the propagation delay of the flip-flop. The output toggles multiple times during a single clock pulse, leading to an unpredictable final state.
*   **Methods to Eliminate Race-Around:**
    *   **Edge-Triggering:** The flip-flop changes state only on the edge of the clock pulse, making it insensitive to the clock level duration.
    *   **Master-Slave Configuration:** Two SR latches are cascaded. The first (master) is activated when the clock is HIGH, and the second (slave) is activated when the clock is LOW. This prevents the output from changing multiple times during a single clock pulse.
    *   **Using Transmission Gate flip-flops:** These flip-flops have a very short propagation delay

### 3.2 D Flip-Flop (Data Flip-Flop)

*   **Construction:** Based on an SR latch, where the S input is directly connected to the D (Data) input, and the R input is connected to the complement of D (using an inverter).
*   **Inputs:**
    *   **D (Data):** The data input.
    *   **CLK (Clock):** The trigger signal.
*   **Outputs:**
    *   **Q:** The primary output.
    *   **Q':** The complement of Q.
*   **Truth Table (Assuming positive edge-triggered):**

    | CLK    | D   | Q(t+1)   | Comment                  |
    |--------|-----|----------|--------------------------|
    | Rising | 0   | 0        | Reset (Q follows D)      |
    | Rising | 1   | 1        | Set (Q follows D)        |

*   **Operation:**
    *   On the active clock edge, the value of the D input is transferred to the Q output.  Q follows D.
    *   If D=0 on the clock edge, Q becomes 0.
    *   If D=1 on the clock edge, Q becomes 1.
*   **Application:** Widely used for data storage, shift registers, and counters.
*   **Eliminates the undefined state:** The D flip-flop avoids the invalid input combination that causes the undefined state in SR latches and flip-flops.

### 3.3 Register Enabled Flip-Flop

*   **Concept:** This is more of a function or feature added to a flip-flop rather than a distinct type of flip-flop itself. It essentially allows a flip-flop to only update its state when a specific "enable" signal is asserted.
*   **Implementation:**  Can be implemented using an AND gate between the clock signal and the flip-flop's clock input, controlled by the enable signal. Other designs use a multiplexer to choose between the old state and the new state based on the enable signal.
*   **Functionality:**
    *   When the enable signal is active (e.g., HIGH), the flip-flop behaves normally, responding to the clock signal and the data inputs.
    *   When the enable signal is inactive (e.g., LOW), the flip-flop ignores the clock signal and holds its current state.  The input data is ignored.
*   **Application:**  Used for selectively updating registers or memory elements.
*   **Example:** Consider a D flip-flop with an enable input 'E'.  The output Q will only change to the value of D on the rising edge of the clock *if* E is HIGH. If E is LOW, the flip-flop will retain its current value regardless of the D input or clock edge.

### 3.4 Resettable Flip-Flop

*   **Concept:** A flip-flop that has a direct reset input (often asynchronous).  Allows the flip-flop to be forced to the reset state (Q=0) independently of the clock and other data inputs.
*   **Inputs:**
    *   Regular flip-flop inputs (e.g., J, K, D, CLK)
    *   **RST (Reset):** An asynchronous input that forces Q to 0, regardless of other inputs.  Can be active-HIGH or active-LOW.
*   **Implementation:**
    *   Can be added by using a NOR or NAND gate connected to the Q output of the basic flip-flop circuit. The active-high reset input is connected to the gate to reset the Q output when activated.
*   **Functionality:**
    *   When RST is asserted (active-HIGH reset means RST=1), the flip-flop immediately resets (Q=0).
    *   When RST is not asserted (active-HIGH reset means RST=0), the flip-flop operates according to its normal behavior (based on D, J, K, and CLK inputs).
*   **Asynchronous vs. Synchronous Reset:**
    *   **Asynchronous Reset:** The reset occurs immediately, regardless of the clock signal. This is the most common type.
    *   **Synchronous Reset:** The reset occurs only on the active clock edge, when the reset signal is asserted. This provides more predictable behavior in synchronous systems.
*   **Application:** Used for initializing systems, error recovery, and controlling the starting state of counters and other sequential circuits.

## 4. Comparison of Latches and Flip-Flops

| Feature          | Latch                                  | Flip-Flop                                   |
|-------------------|----------------------------------------|---------------------------------------------|
| Triggering       | Level-sensitive                         | Edge-triggered                              |
| Clock Input      | Not always present, or may be an Enable | Always present                                |
| Timing Stability | Less stable, susceptible to glitches    | More stable, predictable timing             |
| Complexity       | Simpler                                 | More complex                                  |
| Application      | Simple applications where timing is not critical | Synchronous systems, counters, shift registers |

## 5. Timing Diagrams

*   **Purpose:** Graphical representation of the signals (inputs and outputs) of a sequential circuit over time.
*   **Elements:**
    *   **Clock Signal:** Shows the clock pulses (rising and falling edges).
    *   **Input Signals (S, R, J, K, D, E, RST):** Shows the changes in input values.
    *   **Output Signals (Q, Q'):** Shows the resulting output changes.
*   **Analyzing Timing Diagrams:**
    *   Identify the clock edges that trigger changes in flip-flops.
    *   Trace the changes in input signals.
    *   Determine the resulting changes in the output signals based on the flip-flop's truth table.
    *   Look for setup and hold time violations.

**Example Timing Diagram (D Flip-Flop with Positive Edge Trigger):**

```
Clock:   _|‾‾|___|‾‾|___|‾‾|___|‾‾|___
          /  |  \ /  |  \ /  |  \ /  |  \
D:       ___|‾‾‾‾‾|_______|‾‾‾‾‾|_______
          /       \       /       \
Q:       _______|‾‾‾‾‾|___________|‾‾‾‾‾|
          /       \       /       \
```

In this example:

*   At the first rising clock edge, D is HIGH, so Q goes HIGH.
*   D remains HIGH until the second rising clock edge, so Q remains HIGH.
*   At the second rising clock edge, D is LOW, so Q goes LOW.
*   And so on...

## 6. Key Concepts and Important Points to Remember

*   **Setup Time (t_su):** The minimum amount of time that the input signal (D, J, K, etc.) must be stable *before* the active clock edge.
*   **Hold Time (t_h):** The minimum amount of time that the input signal must remain stable *after* the active clock edge.
*   **Metastability:** A state where the output of a flip-flop is neither HIGH nor LOW, but in an unstable intermediate state.  Can occur if setup and hold time requirements are violated.
*   **Synchronous vs. Asynchronous:** Synchronous circuits are controlled by a central clock signal, while asynchronous circuits are not. Flip-flops are used in synchronous designs because of their edge-triggered behavior. Latches are more commonly found in asynchronous designs.
*   **Active High vs. Active Low:** An active-high input is asserted when it is HIGH, while an active-low input is asserted when it is LOW.

## 7. Practice Questions and Exercises

1.  **Explain the difference between a latch and a flip-flop.**
    *   *Answer:* A latch is level-sensitive, while a flip-flop is edge-triggered.
2.  **What is the invalid state in an SR latch (using NOR gates)? What happens if the latch enters this state and the inputs simultaneously return to the inactive state?**
    *   *Answer:* The invalid state is S=1, R=1. If the inputs return to 0 simultaneously, the output state is unpredictable due to a race condition.
3.  **How does a JK flip-flop differ from an SR flip-flop?**
    *   *Answer:* The JK flip-flop eliminates the invalid input condition (J=1, K=1 results in a toggle), while the SR flip-flop has an undefined state (S=1, R=1).
4.  **Explain the function of a D flip-flop.**
    *   *Answer:* The D flip-flop transfers the value of the D input to the Q output on the active clock edge.
5.  **What is the race-around condition in a JK flip-flop, and how can it be avoided?**
    *   *Answer:* It's the repeated toggling of the output when J=K=1 and the clock pulse is HIGH for too long. It can be avoided using edge-triggering or master-slave configurations.
6.  **Design a D flip-flop with an active-low asynchronous reset. Describe its operation.**
    *   *Answer:*  Connect the Q output of the D Flip Flop to a two-input NOR gate. Connect the D input to the input of the D Flip Flop, and the clock signal to the clock input of the flip flop. Connect the Reset signal to the second input of the NOR gate. When Reset is low, the output will be 0 regardless of the D input or clock. When Reset is high, the flip flop will function normally, and the Q output follows the D input on the rising edge of the clock.
7.  **Consider a positive-edge triggered JK flip-flop with J=1 and K=0. Draw the timing diagram showing the clock signal and the Q output.**

    *   *Answer:* The Q output will go HIGH on the rising edge of the clock and will remain HIGH until J or K changes value.

        ```
        Clock:   _|‾‾|___|‾‾|___|‾‾|___|‾‾|___
                  /  |  \ /  |  \ /  |  \ /  |  \
        J:       ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
        K:       ____________________________________
                  /
        Q:       _______|‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
                  /
        ```

8. **Explain how a register-enabled D flip-flop can be used to selectively update a register.**
    *Answer:* Connect the enable signal to all register-enabled D flip-flops in the register. When the enable signal is active, data can be loaded into the register on the clock edge. When the enable signal is inactive, the existing data in the register is maintained, preventing updates.

## 8. Further Study

*   Explore different flip-flop implementations (e.g., using transmission gates).
*   Research the concepts of setup and hold time and their impact on circuit design.
*   Study the design and implementation of shift registers and counters using flip-flops.
*   Investigate the use of state diagrams and state tables for designing sequential circuits.
