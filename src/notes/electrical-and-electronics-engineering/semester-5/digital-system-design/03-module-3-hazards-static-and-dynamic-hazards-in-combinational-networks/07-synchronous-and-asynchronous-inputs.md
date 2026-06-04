---
title: "Synchronous and asynchronous inputs"
subject: "DIGITAL SYSTEM DESIGN"
module: "Module 3: Hazards – static and dynamic hazards in combinational networks"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f362ff"
status: "completed"
scrapedAt: "2026-05-23T16:21:11.509Z"
---
# Digital System Design: Module 3 - Hazards

## Topic: Synchronous and Asynchronous Inputs

### Introduction

This topic explores the behavior of combinational logic circuits when dealing with inputs that change at different times relative to the system's clock. Understanding the distinction between synchronous and asynchronous inputs is crucial for designing reliable digital systems, particularly when avoiding hazards and ensuring correct operation in sequential circuits.

---

### 1. Synchronous Inputs

**Definition:** Synchronous inputs are signals that change their state only at specific, predetermined times, synchronized with the system's clock signal. In synchronous sequential circuits, all state changes occur on the active edge (rising or falling) of the clock.

**Key Characteristics:**

*   **Clock-Driven:** The timing of state changes is dictated by the clock signal.
*   **Predictable Behavior:** The behavior of the circuit is predictable because state transitions are controlled.
*   **Reduced Race Conditions:** By synchronizing all changes to the clock, the likelihood of race conditions (where the output depends on the order in which signals arrive) is minimized.
*   **State Machine Design:** Synchronous inputs are fundamental to the design of finite state machines (FSMs), where transitions between states occur on clock edges.

**How they are handled in digital systems:**

*   **Flip-flops:** Synchronous inputs are typically applied to the data inputs (D, J, K, T) of flip-flops. The flip-flop then samples its data input on the active clock edge and updates its output (and hence, the state of the circuit) accordingly.
*   **Registered Outputs:** Outputs of combinational logic blocks are often fed into flip-flops to make them synchronous. This effectively buffers the combinational logic output and presents a stable value to the next stage on the clock edge.

**Example (from Mano & Ciletti, Chapter 6 - Sequential Logic):**

Consider a simple synchronous counter. The clock signal dictates when the counter increments. If the count enable signal is asserted (high), the counter will increment its value only on the next rising edge of the clock. The count enable signal itself might be an asynchronous input that is *registered* to become synchronous.

**Relevance to Hazards:**

While synchronous systems aim to eliminate hazards by synchronizing all changes, hazards can still occur *within* the combinational logic that feeds the flip-flops. If an input to the combinational logic changes and causes a temporary glitch at its output, this glitch might be latched by the flip-flop on the next clock edge if it coincides with the glitch. However, the primary goal of synchronicity is to ensure that the *state transition itself* is clean and occurs only at the clock edge, not due to uncontrolled signal arrivals.

---

### 2. Asynchronous Inputs

**Definition:** Asynchronous inputs are signals that can change their state at any time, independent of the system's clock signal. These inputs can occur randomly and do not wait for a clock edge to take effect.

**Key Characteristics:**

*   **Clock-Independent:** Changes are not tied to the clock's timing.
*   **Unpredictable Timing:** The exact moment of change is not known in advance.
*   **Direct Control:** Asynchronous inputs are often used for direct control or to respond to external events that need immediate action.
*   **Potential for Race Conditions and Hazards:** Because they are not synchronized, asynchronous inputs are a major source of race conditions and can exacerbate hazards in combinational logic, leading to unpredictable circuit behavior.

**Common Asynchronous Inputs:**

*   **Reset (Clear):** Forces a sequential circuit (like a flip-flop) into a known initial state, regardless of the clock.
*   **Preset (Set):** Forces a sequential circuit into a specific state, regardless of the clock.
*   **Interrupts:** External signals that require immediate attention from the processor.
*   **External Triggers:** Signals from sensors or other external devices that need to initiate an action.

**How they are handled in digital systems:**

*   **Asynchronous Flip-flops:** Many flip-flops (like JK, SR, D) have dedicated asynchronous preset and clear inputs. These inputs directly affect the flip-flop's output without waiting for the clock.
    *   **Preset (S):** If asserted, forces the flip-flop's output to a predefined state (e.g., Q=1, Q'=0).
    *   **Clear (R):** If asserted, forces the flip-flop's output to the opposite predefined state (e.g., Q=0, Q'=1).
    *   These inputs often have higher priority than synchronous inputs.
*   **Synchronizers:** To safely incorporate asynchronous inputs into a synchronous system, a synchronizer circuit is often used. This typically involves feeding the asynchronous input into one or two flip-flops to ensure that the signal presented to the synchronous part of the circuit is stable and synchronized with the clock.

**Example (from Wakerly, Chapter 7 - Flip-Flops and Latches):**

A common use of asynchronous inputs is in the reset functionality of a microprocessor or counter. When the reset button is pressed (an asynchronous input), it immediately clears all registers to their initial state (e.g., all zeros), ensuring a predictable starting point for the system.

**Relevance to Hazards:**

Asynchronous inputs are particularly problematic for hazard avoidance. If an asynchronous input triggers a change in a combinational network, and that network has its own timing dependencies and potential hazards, the resulting glitches can propagate. Furthermore, if an asynchronous input like a reset occurs precisely when a synchronous input is also causing a state change, the interaction can be complex and lead to unintended behaviors if not carefully designed.

**CO Alignment:**

*   **CO1: Analyze asynchronous and clocked synchronous sequential circuits:** This topic directly addresses the differences in behavior and design considerations for circuits driven by synchronous vs. asynchronous inputs, which is fundamental to analyzing sequential circuits. (Knowledge Level: K3)
*   **CO2: Design hazard-free digital circuits:** While this topic focuses on input types, it highlights the conditions (especially asynchronous inputs) that can *cause* hazards. Understanding these inputs is a prerequisite for designing hazard-free circuits, as you need to know what triggers them. (Knowledge Level: K3)

---

### 3. Interplay and Design Considerations

The fundamental challenge arises when asynchronous signals interact with synchronous clocked logic.

**Problem Areas:**

*   **Asynchronous Signals Feeding Combinational Logic:** If an asynchronous signal changes and directly influences combinational logic that feeds synchronous elements (like flip-flops), any hazards in that combinational logic can cause erroneous state changes.
*   **Asynchronous Control Signals:** Using asynchronous reset/set signals requires careful consideration of their timing relative to the clock. If an asynchronous reset is asserted at the same time a clock edge occurs, the flip-flop's behavior is defined by the specific flip-flop's architecture and timing characteristics.
*   **Meta-stability:** When an asynchronous signal is synchronized using a synchronizer circuit (e.g., two flip-flops), there's a small possibility of meta-stability occurring if the asynchronous signal changes very close to the flip-flop's clock edge. Meta-stability is a temporary state where the flip-flop output is uncertain for a short period.

**Design Strategies:**

*   **Synchronizers:** Use synchronizer circuits (typically two flip-flops) to convert asynchronous inputs into synchronous signals that can be safely used by the clocked logic. This is crucial for avoiding meta-stability and race conditions.
*   **Givone, Chapter 8 - State Machines:** Givone discusses the importance of state machine inputs and how they affect state transitions. Asynchronous inputs are treated as external events that might trigger a state transition or a reset, separate from the clock-driven transitions.
*   **Mano & Ciletti, Chapter 6 - Sequential Logic:** Mano and Ciletti emphasize synchronous sequential circuit design, where all inputs to state elements are assumed to be synchronized with the clock. Asynchronous inputs are often handled by a separate input synchronization circuit before being presented to the main clocked logic.
*   **Wakerly, Chapter 7 - Flip-Flops and Latches:** Wakerly provides detailed explanations of how asynchronous preset and clear inputs work, and the importance of understanding their timing relative to the clock and data inputs to avoid unintended behavior.

**Hazard Mitigation in the Context of Inputs:**

*   **Synchronous Inputs:** Hazards can still occur in the combinational logic *between* flip-flops. These are addressed using techniques like Karnaugh maps (K-maps) and consensus terms to ensure static and dynamic hazard-free logic. The output of this hazard-free combinational logic is then fed to the synchronous flip-flops.
*   **Asynchronous Inputs:** The primary method to deal with the *impact* of asynchronous inputs on synchronous logic is synchronization. Once synchronized, the signal effectively becomes a "delayed synchronous" signal, and any hazards within its feeding combinational logic are addressed as described above.

---

### 4. Practice Questions & Exercises

**Question 1:**
What is the primary characteristic that differentiates synchronous inputs from asynchronous inputs in a digital system?

**Answer:** The primary characteristic is the timing of their state changes. Synchronous inputs change their state only at specific times synchronized with the system clock, while asynchronous inputs can change their state at any time, independent of the clock.

**Question 2:**
Name two common examples of asynchronous inputs and their typical functions in digital circuits.

**Answer:**
1.  **Reset (Clear):** Used to force a sequential circuit (like a flip-flop or a counter) into a known initial state, irrespective of the clock signal.
2.  **Preset (Set):** Used to force a sequential circuit into a specific state, also irrespective of the clock signal.

**Question 3:**
Why is it important to synchronize asynchronous inputs before feeding them into the main clocked logic of a sequential circuit?

**Answer:** It is important to synchronize asynchronous inputs to avoid meta-stability and race conditions. Unsynchronized asynchronous inputs can cause unpredictable state transitions in sequential circuits because their timing is not controlled by the clock, potentially leading to errors or incorrect operation.

**Question 4:**
Consider a combinational circuit that generates an output $Y$. If the inputs to this circuit are a mix of synchronous and asynchronous signals, how can a hazard in this combinational logic potentially lead to an error in a sequential circuit that uses $Y$ as an input to a flip-flop?

**Answer:**
If $Y$ is an input to a flip-flop, and a hazard causes a temporary glitch (an unintended change in $Y$) in the combinational logic output, this glitch could be captured by the flip-flop if it coincides with the flip-flop's active clock edge. This captured glitch can lead to an incorrect state transition, even if the primary inputs to the combinational logic eventually settle to a correct stable state. The timing of the glitch relative to the clock edge is critical. If the glitch occurs when the flip-flop is sensitive to its input (i.e., around the active clock edge), it can cause an error.

**Question 5 (Design Exercise):**
Design a simple synchronizer circuit using two D flip-flops to take an asynchronous input signal `ASYNC_IN` and produce a synchronous output `SYNC_OUT` that is synchronized with a clock signal `CLK`. Assume `ASYNC_IN` is asserted for a minimum duration longer than the setup and hold times of the flip-flops.

**Solution Sketch:**
```
   ASYNC_IN ---->| CLK | D ---+--->| CLK | D ----> SYNC_OUT
                 | FF1 |----|    | FF2 |----|
                 +-----+    |    +-----+
                            | CLK (from CLK)
```
*   The asynchronous input `ASYNC_IN` is fed into the data input of the first D flip-flop (FF1).
*   The system clock `CLK` is fed into the clock input of FF1.
*   The output of FF1 (`Q1`) is fed into the data input of the second D flip-flop (FF2).
*   The system clock `CLK` is also fed into the clock input of FF2.
*   The output of FF2 (`Q2`) is the synchronized output `SYNC_OUT`.

**Explanation:** The first flip-flop samples `ASYNC_IN` on the clock edge. If `ASYNC_IN` is stable, `Q1` becomes stable. The second flip-flop then samples this stable `Q1` on the next clock edge, producing the `SYNC_OUT`. This process effectively delays the asynchronous input and makes it synchronous with the clock, while significantly reducing the probability of meta-stability.

---

### 5. Important Points to Remember

*   **Synchronous inputs:** Clock-controlled, predictable, essential for state machines.
*   **Asynchronous inputs:** Clock-independent, can change anytime, prone to timing issues.
*   **Asynchronous inputs are sources of hazards/errors:** Their uncontrolled timing makes them harder to integrate safely.
*   **Synchronizers are crucial:** Use synchronizer circuits (e.g., two flip-flops) to safely convert asynchronous inputs to synchronous ones.
*   **Hazards in combinational logic:** Can occur with *any* input changes (synchronous or asynchronous), but asynchronous inputs increase the likelihood of problematic timing interactions.
*   **Givone, Mano & Ciletti, Wakerly:** These texts provide foundational knowledge on sequential circuits, state machines, and flip-flop behavior, all relevant to understanding synchronous and asynchronous inputs.
*   **CO1 & CO2 are directly impacted:** Understanding these input types is fundamental to analyzing and designing sequential circuits and hazard-free combinational logic.

---
This concludes the notes on Synchronous and Asynchronous Inputs within the context of hazards in digital system design. The concepts covered are foundational for understanding and mitigating timing-related issues in digital circuits.
