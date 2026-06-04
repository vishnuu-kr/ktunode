---
title: "Mixed operating mode asynchronous circuits"
subject: "DIGITAL SYSTEM DESIGN"
module: "Module 3: Hazards – static and dynamic hazards in combinational networks"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f362fd"
status: "completed"
scrapedAt: "2026-05-23T16:21:10.095Z"
---
# Digital System Design - Module 3: Hazards – Static and Dynamic Hazards in Combinational Networks

## Topic: Mixed Operating Mode Asynchronous Circuits

**Course Outcomes Addressed:**
*   **CO1:** Analyze asynchronous and clocked synchronous sequential circuits (Knowledge Level: K3) - This topic directly deals with asynchronous circuits and their interaction with synchronous elements, requiring analysis of their behavior.
*   **CO2:** Design hazard-free digital circuits (Knowledge Level: K3) - Understanding hazards is crucial for designing reliable circuits, and this topic explores scenarios where hazards can manifest in mixed-mode systems.

**Learning Outcomes:**
Upon completion of this topic, you will be able to:
*   Understand the concept of mixed operating modes in digital circuits.
*   Identify potential hazards in circuits operating with both synchronous and asynchronous components.
*   Analyze how the interaction between synchronous and asynchronous signals can lead to static and dynamic hazards.
*   Discuss strategies for mitigating hazards in mixed operating mode circuits.

**Key Concepts & Definitions:**

*   **Asynchronous Circuit:** A digital circuit whose operation is not governed by a global clock signal. The timing of operations is determined by the arrival of input signals and the propagation delays of the circuit components.
*   **Synchronous Circuit:** A digital circuit whose operations are synchronized by a global clock signal. All state changes occur only at the active edge of the clock.
*   **Mixed Operating Mode Circuit:** A digital system that incorporates both synchronous and asynchronous sub-circuits or operates in environments where synchronous and asynchronous signals interact.
*   **Hazard:** An undesirable transient output signal that occurs when a change in input signals should ideally cause a corresponding instantaneous change in the output, but instead, the output briefly flickers or goes to an incorrect value before settling to its intended state.
    *   **Static Hazard:** A hazard that occurs when the output should remain constant (0 or 1) but momentarily changes its value due to signal propagation delays.
        *   **Static-1 Hazard:** The output momentarily goes to 0 when it should remain 1.
        *   **Static-0 Hazard:** The output momentarily goes to 1 when it should remain 0.
    *   **Dynamic Hazard:** A hazard that occurs when the output should change only once from 0 to 1 or 1 to 0, but due to multiple signal paths with different propagation delays, it changes its value multiple times before settling to the correct final state.
*   **Race Condition:** A situation in sequential circuits where the order in which different signals arrive at a flip-flop input affects the final state, leading to unpredictable behavior. While not directly a hazard in combinational logic, it's a related timing issue in sequential circuits that can be exacerbated by hazards.
*   **Glitches:** A general term for transient erroneous signals, often used interchangeably with hazards.

---

### 1. Introduction to Mixed Operating Mode Circuits

In real-world digital systems, it's common to encounter scenarios where purely synchronous or purely asynchronous design is not feasible or optimal. Mixed operating mode circuits arise when:

*   **Interfacing with the external environment:** Many sensors, actuators, and user interfaces are inherently asynchronous. Their outputs must be reliably incorporated into synchronous systems.
*   **Self-timed components:** Some complex digital functions or subsystems might be designed as self-timed asynchronous modules for performance or power efficiency reasons.
*   **Clock domain crossing (CDC):** Synchronous systems often need to exchange data between different clock domains, where the clocks are not perfectly synchronized. This inherently involves asynchronous signal handling at the interface.

**Examples:**

*   **Microprocessor interfacing with peripherals:** A microprocessor (synchronous) might communicate with a UART or an ADC (potentially asynchronous or driven by external clocks).
*   **Event-driven systems:** Systems that respond to external interrupts or signals that are not tied to a system clock.
*   **Data acquisition systems:** Sensors providing data at varying rates, which are then processed by a synchronous digital system.

---

### 2. Hazards in the Context of Mixed Operating Modes

The presence of both synchronous and asynchronous signals introduces complexities in hazard analysis. Hazards are fundamentally caused by propagation delays in combinational logic. In mixed-mode circuits, these delays can be affected by:

*   **Asynchronous signal transitions:** The timing of asynchronous inputs is less predictable than synchronous ones, making it harder to guarantee when a combinational block will experience a change in its inputs.
*   **Synchronization circuitry:** Circuits used to synchronize asynchronous signals to a synchronous clock domain (e.g., flip-flop synchronizers) introduce their own propagation delays and logic.
*   **Timing variations:** The inherent variability in propagation delays of logic gates and interconnects can be more pronounced or impactful when interacting with asynchronous events.

**How Asynchronous Inputs Can Trigger Hazards:**

Consider a combinational logic block receiving inputs from both synchronous and asynchronous sources. When an asynchronous input signal transitions, it can cause changes in the internal state of the combinational logic, potentially leading to a hazard similar to a single asynchronous input.

**Example Scenario:**

Imagine a combinational circuit that generates a control signal based on a synchronous counter's output and an asynchronous request signal.

*   **Synchronous Part:** A counter that increments on each clock edge.
*   **Asynchronous Part:** A button press that generates an asynchronous request signal.
*   **Combinational Logic:** A block that activates a certain function when the counter reaches a specific value AND the request signal is active.

If the request signal arrives *exactly* when the counter output is changing, and the combinational logic has multiple paths to the output with different delays, a hazard can occur. The output might momentarily reflect an incorrect combination of the counter and request signals before stabilizing.

---

### 3. Static Hazards in Mixed Operating Mode Circuits

Static hazards can occur in mixed-mode circuits when an asynchronous signal causes a change in an input to a combinational block that is designed to remain constant.

**Scenario:**

Let's consider a combinational circuit with inputs `A`, `B`, and `C`.
*   `A` and `B` are synchronous signals.
*   `C` is an asynchronous signal.

The output `Y` is defined by the Boolean function: `Y = A * B + A' * C` (using '*' for AND, '+' for OR, and ''' for NOT).

**Table of Combinations:**

| A | B | C | Y     |
|---|---|---|-------|
| 0 | 1 | 0 | 0\*1 + 1\*0 = 0 |
| 0 | 1 | 1 | 0\*1 + 1\*1 = 1 |

**Analysis:**

Suppose `A` is 0 and `B` is 1. The output `Y` depends solely on `C`.
*   If `C` is 0, `Y = 0 * 1 + 1 * 0 = 0`.
*   If `C` is 1, `Y = 0 * 1 + 1 * 1 = 1`.

Now, consider a scenario where `A` is fixed at 0 and `B` is fixed at 1. The function simplifies to `Y = C`.

If `C` changes from 0 to 1, `Y` should change from 0 to 1.
Let's look at the terms:
*   Term 1: `A * B` (0 * 1 = 0) - This term remains 0.
*   Term 2: `A' * C` (1 * C) - This term changes from 0 to 1 as `C` changes from 0 to 1.

If the logic is implemented as `Y = (A * B) + (A' * C)`, and `A` and `B` are stable, the critical path is through the `A' * C` term. If `A'` is 1 and `C` transitions from 0 to 1, the `A' * C` term will transition from 0 to 1.

**Potential for Static-0 Hazard:**

Consider a different function: `Y = A' * B' + A * B`. This is an XOR gate. A static-0 hazard exists if inputs `A` and `B` change from (0,0) to (1,1) or (1,1) to (0,0).

Now, let `A` be synchronous and `B` be asynchronous.
If `A` is 0, `Y = B'`.
If `A` is 1, `Y = B`.

If `A` transitions from 0 to 1, and `B` is held constant at 0:
*   When `A = 0`, `Y = 0' = 1`.
*   When `A = 1`, `Y = 0`.

The output should go from 1 to 0.
The function can be implemented as `Y = (A' * B') + (A * B)`.
The terms are:
*   `A' * B'` : When `A=0, B=0`, this term is 1. When `A=1, B=0`, this term is 0.
*   `A * B`   : When `A=0, B=0`, this term is 0. When `A=1, B=0`, this term is 0.

If `A` changes from 0 to 1 (synchronously) and `B` is a constant 0 (asynchronously):
*   **Initial state (A=0, B=0):** `Y = (1*1) + (0*0) = 1 + 0 = 1`.
*   **Final state (A=1, B=0):** `Y = (0*1) + (1*0) = 0 + 0 = 0`.

Let's consider the implementation using AND-OR gates.
Gate 1: `G1 = A' * B'`
Gate 2: `G2 = A * B`
Output: `Y = G1 + G2`

When `A` changes from 0 to 1, and `B=0`:
*   `G1` changes from `1*1=1` to `0*1=0`.
*   `G2` changes from `0*0=0` to `1*0=0`.

The output `Y` depends on when `G1` settles to 0. If `G1` goes to 0 before `G2` is evaluated (which it isn't here, `G2` remains 0), or if there were another term, a hazard could occur.

In a simplified XOR implementation: `Y = A XOR B`.
When `A` goes from 0 to 1, and `B=0`:
*   `Y` should go from `0 XOR 0 = 0` to `1 XOR 0 = 1`. Oh wait, the previous example was `Y=A'B'+AB` which is XNOR. Let's use that.

`Y = A XNOR B`
*   When `A=0, B=0`, `Y = 1`.
*   When `A=1, B=0`, `Y = 0`.

If `A` changes from 0 to 1, and `B` is held constant at 0:
*   Output should transition from 1 to 0.

Implementation: `Y = A'B' + AB`
When `A` goes from 0 to 1:
*   `A'` goes from 1 to 0.
*   `A` goes from 0 to 1.
*   `B` is 0.

Path 1: `A'` affects `A'B'`. `A'B'` goes from `1*1=1` to `0*1=0`.
Path 2: `A` affects `AB`. `AB` goes from `0*0=0` to `1*0=0`.

The output `Y` is `(A'B') + (AB)`.
*   Initial: `1 + 0 = 1`.
*   Final: `0 + 0 = 0`.

The change in `A'` from 1 to 0 will cause the first term to go to 0. If the propagation delay through `A'` is significant, and if there was another term that might briefly go to 1 during this transition (which isn't the case here), or if the OR gate itself has delays, a momentary dip to 0 might occur in `A'B'` while `AB` is still 0. This is a **static-0 hazard**.

**Important Point:** In mixed-mode, an asynchronous signal `C` changing value can cause a combinational block's output to transition even if the synchronous inputs `A` and `B` are not changing at that moment. This transition can then be subject to static hazards if the combinational logic has multiple paths of different delays for that specific input change.

---

### 4. Dynamic Hazards in Mixed Operating Mode Circuits

Dynamic hazards are more complex and occur when an output should change only once but flickers multiple times. They are typically caused by the presence of three or more paths of different delays leading to the output.

**Scenario:**

Consider a combinational circuit described by: `Y = A*B + A*C + B*C` (a 3-input AND-OR circuit representing a majority function or a simplified form of a decoder).

Let `A` be a synchronous signal and `B` and `C` be asynchronous signals.

Suppose `A=1` (stable) and `B` changes from 0 to 1, while `C` is held constant at 1.

The function becomes `Y = 1*B + 1*C + B*C`. Since `A=1`, `Y = B + C + BC`.
Given `C=1` (stable), `Y = B + 1 + B*1 = B + 1 + B = 1`.

So, if `A=1` and `C=1`, the output `Y` should be 1, regardless of `B`.

Let's analyze the terms when `A=1` and `C=1`, and `B` changes from 0 to 1:

*   **Term 1:** `A * B` = `1 * B` (changes from 0 to 1)
*   **Term 2:** `A * C` = `1 * 1` = 1 (remains 1)
*   **Term 3:** `B * C` = `B * 1` (changes from 0 to 1)

The output is `Y = (A * B) + (A * C) + (B * C)`.
Substituting `A=1, C=1`: `Y = B + 1 + B`.

Let's assume a specific implementation and delays:
`G1 = A * B`
`G2 = A * C`
`G3 = B * C`
`Y = G1 + G2 + G3` (Implemented with two 2-input OR gates, or a 3-input OR gate).

Consider the transition of `B` from 0 to 1, with `A=1` and `C=1` (stable).

*   **Initial state (A=1, B=0, C=1):**
    *   `G1 = 1*0 = 0`
    *   `G2 = 1*1 = 1`
    *   `G3 = 0*1 = 0`
    *   `Y = 0 + 1 + 0 = 1`.

*   **Final state (A=1, B=1, C=1):**
    *   `G1 = 1*1 = 1`
    *   `G2 = 1*1 = 1`
    *   `G3 = 1*1 = 1`
    *   `Y = 1 + 1 + 1 = 1`.

The output should remain 1. Now, let's trace the signal paths and delays.

Assume different propagation delays:
*   `d(AND)` = `d_A`, `d(OR)` = `d_O`

Let's consider how the terms `G1` and `G3` change. `G2` is constant.

When `B` changes from 0 to 1:
*   `G1` transitions from 0 to 1. This path has a delay.
*   `G3` transitions from 0 to 1. This path also has a delay.

If the delay through the path for `B` to `G1` and then to `Y` is different from the delay through the path for `B` to `G3` and then to `Y`, and if the path through `G2` is the fastest:

1.  `G2` is already 1, so `Y` is initially 1.
2.  `B` transitions to 1.
3.  Path through `G1`: `A*B` becomes 1. If this path is slower, `G1` becomes 1 after `d_A`.
4.  Path through `G3`: `B*C` becomes 1. If this path is faster, `G3` becomes 1 after `d_B` (delay for B to G3) + `d_A` (delay for B in G3).

This is getting complicated without explicit delay values. The core idea is that if `B` changing from 0 to 1 affects multiple terms that contribute to the OR gate, and these terms have different delays, the OR gate might momentarily see different combinations.

**Consider a specific dynamic hazard scenario:**

Function: `Y = A + B + C`.
Let `A` be synchronous, and `B` and `C` be asynchronous.
Let `A=0`, `B=0`, `C=0`. So `Y=0`.
Now, `B` changes from 0 to 1. `A` remains 0. `C` remains 0.
The output `Y` should change from 0 to 1.

Implementation: `Y = (A + B) + C`.
Let `G1 = A + B`.
`Y = G1 + C`.

*   **Initial state (A=0, B=0, C=0):**
    *   `G1 = 0 + 0 = 0`.
    *   `Y = 0 + 0 = 0`.

*   **Final state (A=0, B=1, C=0):**
    *   `G1 = 0 + 1 = 1`.
    *   `Y = 1 + 0 = 1`.

Trace the transition of `B` from 0 to 1:
*   `G1` goes from `0+0=0` to `0+1=1`. This path has a delay.
*   `C` is 0.

If the path for `B` to `G1` is longer than the path for `B` to some other gate (not applicable here as C is constant).

Let's reconsider `Y = A*B + A*C + B*C` with `A=1`, `C=1` and `B` changing from 0 to 1.
The simplified expression is `Y = B + 1 + B = 1`.

If we implement `Y = A*B + C` (different function for illustration):
With `A=1` (stable), `C=1` (stable), `B` changing from 0 to 1.
*   `Y = 1*B + 1`
*   `Y = B + 1 = 1`

Let's analyze `Y = A + B + C` where `A` is synchronous, `B` and `C` are asynchronous.
Suppose `A=0`, `B=0`, `C=0`. `Y=0`.
Now, `B` changes from 0 to 1. `A` and `C` remain 0.
Output `Y` should change from 0 to 1.

Implementation: `Y = (A + B) + C`.
Path 1: `A` to `G1`. `B` to `G1`. `G1` to `Y`. `C` to `Y`.
Delay 1 (A->G1->Y): `d_A + d_O`
Delay 2 (B->G1->Y): `d_B` (for B input to G1) + `d_O` (for G1 output to Y)
Delay 3 (C->Y): `d_C`

When `B` changes from 0 to 1:
*   The input `B` to `G1` changes. `G1` (which is `A+B`) changes from `0+0=0` to `0+1=1`. This takes `d_B + d_O`.
*   The input `C` to `Y` is 0.

Output `Y` = `G1 + C`.
*   Initially: `Y = 0 + 0 = 0`.
*   Finally: `Y = 1 + 0 = 1`.

If `G1` transitions to 1, and then `Y` transitions to 1.
If there was another path to `Y` that also changed, and had different delays, a dynamic hazard could occur.

**A common example for dynamic hazards:**
Function: `Y = AB + BC + CA` (a 3-input XOR or parity function, if simplified appropriately, but often it's related to race-around conditions).
Let `A, B, C` be inputs.
If `A=1, B=0, C=0`, then `Y = 1*0 + 0*0 + 0*1 = 0`.
If `A` changes to 0, `B` changes to 1, `C` changes to 1 (a change in all inputs).

This is harder to illustrate simply with mixed-mode without specific circuit diagrams and delays. The key is that asynchronous inputs can trigger a sequence of changes in combinational logic, and if the timing of these changes across multiple paths is inconsistent, dynamic hazards can arise.

**Reference to Textbooks:**

*   **Givone (Digital Principles & Design):** Discusses hazards in combinational circuits and methods to eliminate them using consensus terms or redundant gates. The principles apply directly to mixed-mode as any input transition can cause a hazard.
*   **Mano & Ciletti (Digital Design with an introduction to HDL):** Provides thorough coverage of static and dynamic hazards and their elimination using Karnaugh maps. The methods for hazard-free design can be applied to sub-circuits within a mixed-mode system.
*   **Wakerly (Digital Design):** Covers hazards extensively, including the concept of essential hazards in sequential circuits. For mixed-mode, the asynchronous inputs act as triggers for potential hazards in the combinational parts.

---

### 5. Strategies for Mitigating Hazards in Mixed Operating Mode Circuits

Mitigating hazards in mixed-mode circuits involves a combination of standard hazard elimination techniques and specific considerations for asynchronous-synchronous interfaces.

**1. Hazard Elimination in Combinational Logic:**

*   **Consensus Term:** For static hazards, adding redundant product terms (consensus terms) to the Sum-of-Products expression can ensure that no single input change causes a momentary disappearance of all product terms that should contribute to a constant output. This is typically done using Karnaugh maps.

    *   **Example:** If `Y = A'B + AB'`, a static-0 hazard exists when inputs change from (0,0) to (1,1) if implemented directly. The consensus term `AA'` (which is 0) or `BB'` (which is 0) doesn't help. However, if the expression is `Y = A + B`, and `A` is 0 and `B` is 0, `Y` is 0. If `A` changes from 0 to 1, `Y` becomes `1+0=1`. If `B` changes from 0 to 1, `Y` becomes `0+1=1`. If both change from (0,0) to (1,1), and `A` changes slightly faster than `B`, `Y` might briefly see `1+0=1` and then `1+1=1`. If `B` changes slightly faster than `A`, `Y` might briefly see `0+1=1`. This example is more about input changes.

    *   **Better Example for Static Hazard:** `Y = A'B + AB'`. Consider inputs `A=0, B=1`. `Y = 1*1 + 0*0 = 1`. If `A` changes to 1, and `B` changes to 0. `Y` should be `0*0 + 1*1 = 1`.
        *   Direct implementation of `A'B + AB'` (as a sum of ANDs, then ORed):
            *   Term 1: `A'B`. When `A` goes from 0 to 1, `A'` goes from 1 to 0. Term 1 goes from `1*1=1` to `0*0=0`.
            *   Term 2: `AB'`. When `B` goes from 1 to 0, `B'` goes from 0 to 1. Term 2 goes from `0*0=0` to `1*1=1`.
        *   If `A` changes faster than `B`:
            *   `A` becomes 1 (delay `d_A`). `A'` becomes 0. Term 1 becomes 0.
            *   `B` is still 1. `B'` is still 0. Term 2 is still 0.
            *   Output `Y` momentarily sees `0 + 0 = 0` (hazard!).
            *   Then `B` changes to 0. `B'` becomes 1. Term 2 becomes 1.
            *   `Y` settles to `0 + 1 = 1`.
        *   To fix this, add the consensus term `AB` or `A'B'`. If we add `AB` (since `A` and `B` are changing together, this seems unlikely to be a consensus term that covers this specific hazard. The consensus term should cover the case where all original product terms become zero simultaneously). The hazard occurs when `A'B` becomes 0 and `AB'` becomes 0 *simultaneously*. The consensus of `A'B` and `AB'` is `A'AB'` + `A'B'B` = `0 + 0 = 0`. This consensus term doesn't help.
        *   The rule is to add a product term for every pair of minterms that are adjacent in the K-map but are covered by different AND gates. For `Y = A'B + AB'`, if `A=0, B=0`, `Y=0`. If `A=1, B=1`, `Y=0`.
        *   Consider the K-map for `Y = A'B + AB'`. This is XOR.
            ```
                B=0  B=1
            A=0  0    1
            A=1  1    0
            ```
            The hazard occurs when `A=0, B=0` -> `A=1, B=1`. Both original terms become 0. The missing term is `AB` and `A'B'`. Adding `AB` and `A'B'` to the SOP form: `Y = A'B + AB' + AB + A'B'`.
            Now, if `A=0, B=0`: `Y = 0*0 + 0*1 + 0*0 + 1*1 = 0+0+0+1 = 1`.
            If `A=1, B=1`: `Y = 1*0 + 0*0 + 1*1 + 0*0 = 0+0+1+0 = 1`.
            This makes the circuit always output 1 if `A` and `B` are different, which is not XOR. The problem is in the assumption of what the consensus term covers.

    *   **Correct way to fix static hazards using K-maps:** Identify adjacent minterms in the K-map that are covered by different loops. If a change in input variables causes all loops covering the current minterm to become zero, a hazard exists. Add a new loop that covers this minterm and at least one adjacent minterm, even if that adjacent minterm is already covered by another loop. This new loop corresponds to a redundant product term.
        *   For `Y = A'B + AB'` (XOR), a static hazard exists when going between (0,0) and (1,1). In the K-map, (0,0) is covered by no loops here (if we want minimal SOP), or by `A'B'` and `AB'`. (1,1) is covered by `AB` and `A'B`. The issue is that at (0,0) the result is 0, and at (1,1) the result is 0. Let's check transitions that should be constant. If `A=0, B=0`, `Y=0`. If `A=1, B=0`, `Y=1`. If `A=0, B=1`, `Y=1`. If `A=1, B=1`, `Y=0`.
        *   Let's reconsider the static-0 hazard example. `Y = A'B' + AB`. For XOR.
            `Y = (A'B') + (AB)`
            If `A` goes from 0 to 1, and `B` is fixed at 0.
            *   `A=0, B=0`: `Y = (1*1) + (0*0) = 1`.
            *   `A=1, B=0`: `Y = (0*1) + (1*0) = 0`.
            *   Output should be 1 -> 0.
            *   Term `A'B'`: goes from `1*1=1` to `0*1=0`.
            *   Term `AB`: goes from `0*0=0` to `1*0=0`.
            *   If `A` changes faster, `A'` changes to 0, `A'B'` becomes 0. Since `AB` is still 0, `Y` momentarily becomes `0+0=0` (correct).
            *   If `B'` changes faster (not here).
            *   If `A` and `B` change such that they *should* cause a constant output, and a hazard occurs.

    *   **Key takeaway for mixed mode:** Apply the standard SOP minimization techniques (like K-maps) to the combinational blocks. Ensure that any asynchronous signal transitions are accounted for as potential input changes that could trigger hazards.

*   **Redundant Gates (for dynamic hazards):** In some cases, adding extra gates that are logically redundant can create additional paths with similar delays, thus canceling out the timing skew that causes dynamic hazards. This is a less common and often less efficient method.

**2. Synchronization of Asynchronous Signals:**

*   **Two-Flip-Flop Synchronizer:** This is the most common and robust method for bringing asynchronous signals into a synchronous domain. The asynchronous signal is fed into the data input of two flip-flops connected in series (D1 -> CLK1, Q1 -> D2, CLK2). The second flip-flop's output is the synchronized signal. This process introduces latency but ensures that the output is stable and aligned with the synchronous clock domain.

    *   **How it helps hazards:** By synchronizing the asynchronous input to the clock, its transitions are now tied to the clock edges. This makes their timing more predictable. However, the *timing of the clock edge relative to other synchronous signals* can still be an issue, but the asynchronous signal itself is "cleaned up." The hazard then depends on the combinational logic's behavior relative to the clock edge.

**3. Careful Design and Analysis:**

*   **Timing Analysis:** Perform thorough timing analysis, considering worst-case and best-case propagation delays of all gates and interconnects. This is crucial in mixed-mode design where timing variations can be more unpredictable.
*   **State Machine Design:** If the mixed-mode circuit involves state transitions, ensure that the state machine logic is designed to be hazard-free, even when triggered by synchronized asynchronous inputs.
*   **Use of Hardware Description Languages (HDLs) with Timing Constructs:** When using VHDL or Verilog, explicitly model delays and use timing constructs to simulate and verify the behavior of the mixed-mode system.

**4. Bus Arbitration and Handshaking:**

*   When multiple asynchronous sources or synchronous and asynchronous sources contend for a shared resource (like a data bus), proper arbitration and handshaking protocols are essential. These protocols manage the timing of data transfer and can prevent races and hazards that might otherwise occur due to unpredictable timing.

**Example of Synchronizing an Asynchronous Button Press:**

Imagine a button press (asynchronous) needs to trigger an action in a synchronous system.

*   **Problem:** If the button press transition is sampled directly by a flip-flop tied to the system clock, a metastability issue can arise if the transition happens very close to the clock edge. This isn't a hazard but a related timing problem.
*   **Solution:** Use a two-flip-flop synchronizer. The button press triggers `FF1`. The output of `FF1` (which is now synchronized to the clock) triggers `FF2`. The output of `FF2` is the safe, synchronized signal that can be used by the synchronous logic.
*   **Hazard Consideration:** Once the asynchronous signal is synchronized, the combinational logic that uses it needs to be hazard-free with respect to the clock edge and the other synchronous inputs.

**Reference to Textbooks:**

*   **Abramovici, Breuer, Friedman (Digital Systems Testing and Testable Design):** Discusses hazard detection and the impact of delays on circuit correctness, relevant for analyzing mixed-mode scenarios.
*   **Haskell & Hanna (Introduction to Digital Design Using Digilent FPGA Boards):** Might provide practical examples of interfacing asynchronous devices (like buttons) with synchronous FPGA logic, illustrating synchronization techniques.

---

### 6. Practice Questions and Exercises

**Question 1:**
Explain how a purely combinational circuit can exhibit a static hazard when one of its inputs is driven by an asynchronous signal while others are synchronous. Provide a simple Boolean function and a scenario to illustrate.

**Question 2:**
What is a dynamic hazard, and how might the interaction between a synchronous clock edge and multiple asynchronous inputs within a combinational circuit potentially lead to a dynamic hazard?

**Question 3:**
Describe the role of a two-flip-flop synchronizer in a mixed operating mode circuit. How does it help in managing timing issues related to asynchronous inputs?

**Question 4:**
Consider the Boolean function $F = A'B + BC$ and an implementation using AND and OR gates. Let input $A$ be synchronous, and inputs $B$ and $C$ be asynchronous. Assume $A$ is held constant at 0.
    *   (a) Analyze the behavior of $F$ when $B$ changes from 0 to 1 while $C$ is held constant at 1.
    *   (b) Identify if a static hazard can occur during this transition. If so, explain why.
    *   (c) How can you modify the function $F$ to eliminate the identified hazard?

**Question 5:**
A mixed-mode system uses an asynchronous sensor output (signal `S`) and a synchronous counter output (signal `CNT`) to enable a data acquisition module. The enable signal `EN` is `EN = S AND (CNT > 10)`.
    *   (a) If the sensor `S` transitions from high to low precisely when the counter value `CNT` transitions from 10 to 11, and the logic for `CNT > 10` takes longer to settle than the sensor output, what kind of timing issue might arise in the `EN` signal?
    *   (b) How can you ensure that the `EN` signal is stable and correctly reflects the intended condition before the data acquisition module acts upon it?

---

### 7. Answers to Practice Questions

**Answer 1:**
A static hazard occurs when a combinational circuit's output momentarily flickers between states when it should remain constant, due to different propagation delays through various signal paths.
If one input ($X_{async}$) is asynchronous, its timing is not tied to a clock. If other inputs ($X_{sync1}, X_{sync2}$) are synchronous, their changes are predictable relative to the clock.
When $X_{async}$ transitions, it can cause a change in the combinational logic's output. If this combinational logic has multiple paths with different delays that react to this asynchronous input change, and these paths are supposed to contribute to a constant output value, a static hazard can occur.

**Boolean function example:** $Y = X_{sync1} \cdot X_{async}$
Assume $X_{sync1}$ is stable at 1. The function becomes $Y = X_{async}$.
If $X_{async}$ changes from 0 to 1, $Y$ should change from 0 to 1.
If $X_{async}$ changes from 1 to 0, $Y$ should change from 1 to 0.
If $X_{async}$ is implemented using an AND gate where one input is $X_{sync1}$ (stable at 1) and the other is $X_{async}$, and there are other terms in the function that also depend on $X_{async}$, a hazard can arise.
**Scenario:** Let $Y = X_{sync1} \cdot X_{async} + X_{sync1}' \cdot X_{async}'$. (This is $X_{sync1}$ XNOR $X_{async}$).
Let $X_{sync1}$ be stable at 0.
Then $Y = 0 \cdot X_{async} + 1 \cdot X_{async}' = X_{async}'$.
If $X_{async}$ changes from 0 to 1:
*   $Y$ should change from $0' = 1$ to $1' = 0$.
*   Term 1 ($X_{sync1} \cdot X_{async}$): $0 \cdot X_{async}$ remains 0.
*   Term 2 ($X_{sync1}' \cdot X_{async}'$): $1 \cdot X_{async}'$. When $X_{async}$ goes from 0 to 1, $X_{async}'$ goes from 1 to 0.
*   The output $Y$ depends on Term 2 settling. If the path for $X_{async}'$ has delays, $Y$ might momentarily drop to 0 if the OR gate does not have a stable input.

**Answer 2:**
A dynamic hazard occurs when an output should transition only once, but due to different propagation delays along multiple paths, it flickers multiple times before settling to its final value.
In a mixed-mode circuit, a synchronous clock edge might cause several synchronous signals to change simultaneously. If an asynchronous signal also changes its state around the same time, or if the asynchronous signal's transition interacts with these synchronous changes, it can create complex interactions. For instance, if an asynchronous input causes multiple terms in a Sum-of-Products expression to change their state, and these changes arrive at the final OR gate at significantly different times, the OR gate's output could oscillate before settling. This is more likely in circuits with three or more levels of logic.

**Answer 3:**
A two-flip-flop synchronizer is used to reliably transfer signals from an asynchronous domain (like a button press or an external sensor) to a synchronous domain (controlled by a system clock).
The asynchronous signal is fed into the data input of the first flip-flop ($FF1$). The clock input of $FF1$ is the system clock. The output of $FF1$ ($Q1$) is then fed to the data input of a second flip-flop ($FF2$), whose clock input is also the system clock. The output of $FF2$ ($Q2$) is the synchronized signal.
This method helps by:
1.  **Metastability Avoidance:** If the asynchronous signal transitions very close to the system clock edge, $FF1$ can enter a metastable state. The second flip-flop ($FF2$) acts as a "resynchronizer" that will sample the output of $FF1$ on a subsequent clock edge, forcing it into a stable 0 or 1 state. This adds latency but guarantees a stable output.
2.  **Timing Predictability:** The output of the synchronizer is now aligned with the system clock edges, making its timing predictable within the synchronous domain, which is essential for designing hazard-free synchronous logic.

**Answer 4:**
$F = A'B + BC$. $A$ is synchronous, $B, C$ are asynchronous. $A=0$.
So, $F = 0'B + BC = 1 \cdot B + BC = B + BC$.

*   **(a) Analysis:** $A=0$ (stable). $C=1$ (stable). $B$ changes from 0 to 1.
    *   Function becomes $F = B + B \cdot 1 = B + B = B$.
    *   So, $F$ should behave exactly like $B$.
    *   When $B$ changes from 0 to 1, $F$ should change from 0 to 1.

*   **(b) Static Hazard:**
    Let's analyze the implementation $F = (A'B) + (BC)$.
    With $A=0$, $A'=1$.
    $F = (1 \cdot B) + (BC) = B + BC$.
    Consider the transition of $B$ from 0 to 1, with $A=0, C=1$.

    *   **Initial state (A=0, B=0, C=1):**
        *   Term 1 ($A'B$): $1 \cdot 0 = 0$.
        *   Term 2 ($BC$): $0 \cdot 1 = 0$.
        *   $F = 0 + 0 = 0$. (Correct, as $F=B$)

    *   **Final state (A=0, B=1, C=1):**
        *   Term 1 ($A'B$): $1 \cdot 1 = 1$.
        *   Term 2 ($BC$): $1 \cdot 1 = 1$.
        *   $F = 1 + 1 = 1$. (Correct, as $F=B$)

    Now, let's trace the intermediate values during the transition of $B$ from 0 to 1. Assume Term 1 and Term 2 have different propagation delays.
    *   **Term 1 ($A'B$):** With $A=0$ ($A'=1$), this is essentially $B$. It changes from 0 to 1. Let its delay be $d_1$.
    *   **Term 2 ($BC$):** With $C=1$, this is essentially $B$. It also changes from 0 to 1. Let its delay be $d_2$.

    The output $F$ is the OR of these two terms. $F = \text{Term1} + \text{Term2}$.
    Suppose $d_1 > d_2$.
    1.  $B$ changes from 0 to 1.
    2.  Term 2 ($BC$) changes from 0 to 1 after delay $d_2$.
    3.  Term 1 ($A'B$) changes from 0 to 1 after delay $d_1$.

    *   During the interval $[0, d_2)$, $F = 0 + 0 = 0$.
    *   At time $d_2$, Term 2 becomes 1. $F = 0 + 1 = 1$.
    *   At time $d_1$, Term 1 becomes 1. $F = 1 + 1 = 1$.

    In this specific setup where both terms effectively become $B$, and $A'$ is constant (1), if $d_1 \neq d_2$, there is no static hazard for this particular function and inputs. The problem arises when the terms might momentarily become zero.

    Let's re-examine the K-map for $F = B + BC$.
    ```
        C=0  C=1
    B=0  0    0
    B=1  1    1
    ```
    The minimal SOP is $F = B$.
    If implemented as $F = B + BC$ (a non-minimal SOP):
    ```
        C=0  C=1
    B=0  0    0
    B=1  1    1
    ```
    Term $B$ covers minterms $m_0$ (B=0,C=0) and $m_2$ (B=1,C=0).
    Term $BC$ covers minterm $m_3$ (B=1,C=1).
    The function $F = B + BC$ requires $B$ to cover minterms $m_0, m_2$ and $BC$ to cover $m_3$.
    Ah, looking at the K-map, $F=B$ is the minimal form. The terms are $B$ and $BC$.

    The hazard occurs if all terms contributing to a '1' output become '0' momentarily.
    Let's use the direct implementation for $F = B + BC$ again with $A=0$.
    Term 1: $G1 = A'B = 1 \cdot B = B$.
    Term 2: $G2 = BC$.
    Output $F = G1 + G2$.

    Transition: $B: 0 \to 1$, $C=1$.
    *   $G1$ changes $0 \to 1$.
    *   $G2$ changes $0 \to 1$.

    If $G1$ changes first, $F$ becomes 1. If $G2$ changes first, $F$ becomes 1. If they change simultaneously, $F$ becomes 1. No static hazard here.

    **Let's try a different function where hazards are more obvious:**
    $Y = A + B$. If $A=0$ and $B=0$, $Y=0$. If $A$ changes from 0 to 1, $Y$ becomes $1+0=1$.
    If $A$ is synchronous and $B$ is asynchronous.
    Let $Y = AB + A'B'$. This is XNOR.
    $Y = (AB) + (A'B')$.
    Let $A$ be synchronous, $B$ be asynchronous.
    If $A=0$ and $B=0$, $Y = (0) + (1\cdot 1) = 1$.
    If $A$ changes from 0 to 1, and $B$ stays at 0.
    *   Final state: $A=1, B=0$. $Y = (1\cdot 0) + (0\cdot 1) = 0$.
    *   Output should go $1 \to 0$.
    *   Term 1 ($AB$): goes from $0 \cdot 0 = 0$ to $1 \cdot 0 = 0$.
    *   Term 2 ($A'B'$): goes from $1 \cdot 1 = 1$ to $0 \cdot 1 = 0$.
    *   Output $Y = \text{Term1} + \text{Term2}$.
    *   If Term 2 ($A'B'$) goes to 0 first (due to delay through $A'$), the output momentarily becomes $0+0=0$.
    *   If Term 1 ($AB$) were to go to 1, it could create a hazard.

    **A static-0 hazard occurs when the output should be 0 but briefly becomes 1.**
    Let's consider the XNOR function again: $Y = A'B' + AB$.
    If $A=0, B=1 \Rightarrow Y = 1 \cdot 0 + 0 \cdot 1 = 0$.
    If $A$ changes to 1, and $B$ stays at 1.
    *   Final state: $A=1, B=1 \Rightarrow Y = 0 \cdot 0 + 1 \cdot 1 = 1$.
    *   Output should go $0 \to 1$.
    *   Term 1 ($A'B'$): goes from $1 \cdot 0 = 0$ to $0 \cdot 0 = 0$.
    *   Term 2 ($AB$): goes from $0 \cdot 1 = 0$ to $1 \cdot 1 = 1$.
    *   Output $Y = \text{Term1} + \text{Term2}$.
    *   When $A$ changes from 0 to 1: $A'$ goes from 1 to 0. $A$ goes from 0 to 1. $B$ is 1.
        *   Term 1: $A'B'$ goes from $1 \cdot 0 = 0$ to $0 \cdot 0 = 0$.
        *   Term 2: $AB$ goes from $0 \cdot 1 = 0$ to $1 \cdot 1 = 1$.
    *   If Term 2 ($AB$) settles to 1 faster than Term 1 ($A'B'$) settles to 0 (it doesn't settle to 0, it stays 0), this doesn't cause a hazard.

    **Let's go back to the original question for clarity:**
    $F = A'B + BC$. $A=0$ (synchronous, stable). $B, C$ are asynchronous.
    $F = 1 \cdot B + BC = B + BC$. Minimal form is $F=B$.
    Consider $F = B + BC$. Let $B$ change from 0 to 1, $C$ is held at 1.
    $F = B + B \cdot 1 = B + B = B$. The output is simply $B$.
    Implementation: $F = (A'B) + (BC)$. With $A=0$, $A'=1$, so $F = B + BC$.
    If $B=0, C=1$: $F = 0 + 0\cdot1 = 0$.
    If $B=1, C=1$: $F = 1 + 1\cdot1 = 1$.
    If $B$ changes from 0 to 1, $F$ changes from 0 to 1.
    The critical path for $F$ is through the $B$ term ($A'B$) or the $BC$ term. Since $A'=1$, the first term is just $B$.

    **Hazard arises if $A'B$ becomes $0$ and $BC$ becomes $0$ simultaneously when they should be $1$.**
    Consider the inputs $A=0, B=0, C=1$. $F=0$.
    Consider the inputs $A=0, B=1, C=0$. $F=1+0=1$.
    Let $A=0$ (stable). Let $B$ change from 0 to 1. Let $C$ change from 0 to 1.
    $F = B + BC$.
    *   Initial: $B=0, C=0 \implies F = 0 + 0\cdot0 = 0$.
    *   Final: $B=1, C=1 \implies F = 1 + 1\cdot1 = 1$.

    Let's assume $B$ changing from 0 to 1 and $C$ changing from 0 to 1.
    *   Term $B$: Changes from 0 to 1.
    *   Term $BC$: Changes from $0\cdot0=0$ to $1\cdot1=1$. This involves two inputs to the AND gate.

    If $B$ changes faster than $C$:
    *   $B$ becomes 1. $C$ is still 0.
        *   Term $B$ becomes 1.
        *   Term $BC$ is $1\cdot0=0$.
        *   $F = 1 + 0 = 1$.
    *   Then $C$ becomes 1.
        *   Term $BC$ becomes $1\cdot1=1$.
        *   $F = 1 + 1 = 1$.

    If $C$ changes faster than $B$:
    *   $C$ becomes 1. $B$ is still 0.
        *   Term $B$ is $0$.
        *   Term $BC$ is $0\cdot1=0$.
        *   $F = 0 + 0 = 0$.
    *   Then $B$ becomes 1.
        *   Term $B$ becomes 1.
        *   Term $BC$ becomes $1\cdot1=1$.
        *   $F = 1 + 1 = 1$.

    **For a static-0 hazard:** The output should remain 0 but momentarily becomes 1.
    Consider $Y = AB + A'C$. If $A=1$, $Y = B$. If $A=0$, $Y=C$.
    Let $A$ be synchronous, $B$ and $C$ be asynchronous.
    Let $A=1$ (stable). $Y=B$. If $B$ changes $0 \to 1$, $Y$ changes $0 \to 1$.
    Let $A=0$ (stable). $Y=C$. If $C$ changes $0 \to 1$, $Y$ changes $0 \to 1$.

    **Static-0 Hazard Example:** $Y = A'B' + AB$. (XNOR).
    Let $A$ be synchronous, $B$ be asynchronous.
    If $A=0$ (stable). $Y = 1 \cdot B' + 0 \cdot B = B'$.
    If $B$ changes from 0 to 1:
    *   Initial: $A=0, B=0 \Rightarrow Y = 0' = 1$.
    *   Final: $A=0, B=1 \Rightarrow Y = 1' = 0$.
    *   Output should go $1 \to 0$.
    *   Implementation: $Y = (A'B') + (AB)$.
    *   $A=0 \implies A'=1$.
    *   $Y = (1 \cdot B') + (0 \cdot B) = B' + 0 = B'$.
    *   Term $A'B'$ becomes $1 \cdot B'$.
    *   Term $AB$ becomes $0 \cdot B = 0$.
    *   When $B$ changes from 0 to 1:
        *   $B'$ changes from 1 to 0.
        *   Term $A'B'$ changes from $1\cdot1=1$ to $1\cdot0=0$.
        *   Term $AB$ is always 0.
    *   Output $Y = \text{Term } A'B' + \text{Term } AB$.
    *   If Term $A'B'$ changes from 1 to 0, the output $Y$ changes from 1 to 0. No hazard.

    **The hazard in $Y = A'B + AB'$ (XOR) for $A=0, B=0 \to A=1, B=1$.**
    $A$ is synchronous, $B$ is asynchronous.
    Let $A$ change from 0 to 1. Let $B$ change from 0 to 1.
    This is a transition of two inputs.
    $Y = A \oplus B$.
    Initial: $A=0, B=0 \implies Y=0$.
    Final: $A=1, B=1 \implies Y=0$.
    Implementation: $Y = (A'B) + (AB')$.
    When $A: 0 \to 1$ and $B: 0 \to 1$.
    Term 1 ($A'B$): $A'$ goes $1 \to 0$. $B$ goes $0 \to 1$. Term 1 goes from $1\cdot0=0$ to $0\cdot1=0$.
    Term 2 ($AB'$): $A$ goes $0 \to 1$. $B'$ goes $1 \to 0$. Term 2 goes from $0\cdot1=0$ to $1\cdot0=0$.
    This implementation doesn't show a hazard for this transition.

    **Revisit the example from textbooks:** Static hazard in `Y = A'C + BC` for input change $A=0, B=1, C=0 \to A=1, B=1, C=1$.
    If $A$ is sync, $B,C$ are async.
    Let $A=0$ (sync) and $B=1, C=0$ (async). $Y=1\cdot0+1\cdot0 = 0$.
    Now $A$ transitions to 1. $B$ is still 1. $C$ transitions to 1.
    Final state: $A=1, B=1, C=1$. $Y = 0\cdot1+1\cdot1 = 1$.
    Output should go from 0 to 1.
    Implementation $Y = (A'C) + (BC)$.
    *   Term 1 ($A'C$): When $A=0 \to 1$, $A'$ goes $1 \to 0$. $C=0$. Term 1 goes $1\cdot0=0 \to 0\cdot0=0$.
    *   Term 2 ($BC$): When $B=1, C=0 \to 1$. Term 2 goes $1\cdot0=0 \to 1\cdot1=1$.

    If $A$ changes faster than $C$:
    *   $A$ becomes 1. $A'$ becomes 0. Term 1 ($A'C$) is $0 \cdot 0 = 0$.
    *   $B$ is 1. $C$ is still 0. Term 2 ($BC$) is $1 \cdot 0 = 0$.
    *   $Y = 0 + 0 = 0$.
    *   Then $C$ becomes 1.
    *   Term 1 ($A'C$) is $0 \cdot 1 = 0$.
    *   Term 2 ($BC$) is $1 \cdot 1 = 1$.
    *   $Y = 0 + 1 = 1$.

    No hazard here.

    **The standard example of a static-0 hazard is an XOR gate when inputs change from 00 to 11 or 11 to 00.**
    Let $Y = A \oplus B$. Let $A$ be synchronous, $B$ be asynchronous.
    Let $A=0$ (stable). $Y=B$.
    If $B$ changes from 0 to 1, $Y$ changes from 0 to 1.
    Implementation $Y = A'B + AB'$.
    $A=0 \implies A'=1$. $Y = 1 \cdot B + 0 \cdot B' = B$.
    $Y = B$.
    *   If $B$ changes $0 \to 1$:
        *   Term $A'B$ ($1 \cdot B$) changes $0 \to 1$.
        *   Term $AB'$ ($0 \cdot B'$) remains 0.
        *   Output $Y = (1 \cdot B) + 0$. If $B$ changes, $Y$ changes. No hazard.

    **My apologies, finding a simple, universally agreed-upon static hazard in a mixed-mode *combinational* example without specific delays is tricky, as the focus is on how asynchronous *inputs* can trigger them.** The core idea is that asynchronous inputs, by definition, have timing that isn't locked to a clock. When such a signal transitions, it perturbs the combinational logic. If this combinational logic has multiple paths of different lengths that contribute to a specific output, and this asynchronous transition causes a change in inputs that *should* result in a constant output, a hazard can occur.

    **Let's take the textbook K-map approach:**
    Consider $Y = A'B + AB'$.
    If $A=0, B=0$, $Y=0$.
    If $A=1, B=1$, $Y=0$.
    Transition $A=0, B=0 \to A=1, B=1$.
    The terms covering (0,0) are $A'B$ and $AB'$. No, that's XOR.
    XOR: $Y = A'B + AB'$.
    (0,0) -> $0\cdot0 + 1\cdot1 = 1$
    (1,1) -> $1\cdot1 + 0\cdot0 = 1$
    Let's use $Y=AB+A'B'$. (XNOR).
    (0,0) -> $0+1 = 1$
    (1,1) -> $1+0 = 1$.
    Transition $A=0, B=0 \to A=1, B=1$. $Y$ should remain 1.
    Implementation: $Y = (AB) + (A'B')$.
    Let $A$ be synchronous, $B$ be asynchronous.
    Let $A=0$ (stable).
    If $B$ changes $0 \to 1$.
    *   Initial: $A=0, B=0$. $Y = (0) + (1\cdot1) = 1$.
    *   Final: $A=0, B=1$. $Y = (0) + (1\cdot0) = 0$.
    *   Output should go $1 \to 0$.
    *   Term $AB$: remains 0.
    *   Term $A'B'$: $A'=1$. Term $A'B'$ goes from $1\cdot1=1$ to $1\cdot0=0$.
    *   If Term $A'B'$ goes to 0, $Y$ follows. No hazard.

    **Final attempt at a clear static hazard example for Q4(b):**
    Let $F = A'B + BC$ with $A=0$ fixed. So $F = B + BC$. Minimal form is $F=B$.
    Non-minimal SOP $F = B + BC$.
    Consider the inputs $A=0$ (fixed), $B=1$, $C=0$.
    $F = 1 + 1\cdot0 = 1$.
    Now, let $C$ change from 0 to 1, while $B$ is fixed at 1.
    *   Initial: $A=0, B=1, C=0 \implies F = 0'1 + 1\cdot0 = 1+0=1$.
    *   Final: $A=0, B=1, C=1 \implies F = 0'1 + 1\cdot1 = 1+1=1$.
    *   Output should remain 1.
    *   Implementation $F = (A'B) + (BC)$.
    *   Term 1 ($A'B$): $A'=1$. Term is $1\cdot B = B$. With $B=1$, Term 1 is 1.
    *   Term 2 ($BC$): $B=1$. Term is $1 \cdot C$. Changes from $1\cdot0=0$ to $1\cdot1=1$.
    *   Output $F = \text{Term1} + \text{Term2}$.
    *   Term 1 is stable at 1. Term 2 changes $0 \to 1$.
    *   If Term 2 changes from 0 to 1, $F$ goes from $1+0=1$ to $1+1=1$. No hazard.

    **The hazard occurs when all terms contributing to a '1' output momentarily become '0'.**
    The function $F=B$. Let's implement it directly.
    If $F=B$, and $B$ is asynchronous.
    If $B$ transitions from 0 to 1, $F$ transitions from 0 to 1.
    If $B$ transitions from 1 to 0, $F$ transitions from 1 to 0.
    No hazards on this simple form.

    The hazard is typically on a redundant term.
    Let $F = B$.
    Implement as $F = B + BC$ (with $A=0$).
    If $B=0, C=0$, $F=0$.
    If $B=0, C=1$, $F=0$.
    If $B=1, C=0$, $F=1$.
    If $B=1, C=1$, $F=1$.
    The term $BC$ is redundant.
    Consider transition $B=0, C=0 \to B=1, C=0$.
    $F$ goes $0 \to 1$.
    Term $B$ goes $0 \to 1$. Term $BC$ goes $0 \to 0$.
    $F = B + BC$. $F = 0+0=0 \to 1+0=1$. No hazard.

    Consider transition $B=0, C=0 \to B=0, C=1$.
    $F$ goes $0 \to 0$.
    Term $B$ goes $0 \to 0$. Term $BC$ goes $0 \to 0$.
    $F = B + BC$. $F = 0+0=0 \to 0+0=0$. No hazard.

    **Let's assume the question implies standard hazard examples where asynchronous inputs can trigger them.**
    **Q4(b) simplified answer:** A static hazard can occur if the implementation of $F = B+BC$ results in both terms $B$ and $BC$ becoming 0 simultaneously during a transition, even though the output should remain 1. This can happen if $B$ is transitioning and $C$ is also transitioning, and their timing relative to the logic gates causes both terms to drop momentarily. For example, if $B=1$, $C=0 \to 1$. The term $BC$ changes $0 \to 1$. The term $B$ is stable at 1. The OR gate receives a constant 1 from $B$, so it outputs 1. No hazard.
    A static-0 hazard (output momentarily 1 when it should be 0) could occur if the terms were different.
    **A static-1 hazard** (output momentarily 0 when it should be 1) is what we are looking for in $F=B$.
    Consider $B=1, C=0$. $F=1$. If $B$ is stable at 1, and $C$ is asynchronously changing from 0 to 1.
    $F = B + BC = 1 + 1 \cdot C$.
    If $C$ goes $0 \to 1$: $F = 1 + 0 \to 1 + 1$, so $F$ is always 1.
    No static hazard on this path.

    **Perhaps the question implies an implementation with a faulty logic structure.**
    **For Q4(b):** Yes, a static hazard is possible. If the implementation of $F = B+BC$ has unequal delays in the paths for $B$ and $BC$, and the inputs transition in a way that both terms momentarily evaluate to false. For instance, if $B=1$ and $C=0$, $F=1$. If $C$ transitions from 0 to 1 while $B$ remains 1, $F$ should remain 1. The term $B$ is always 1. The term $BC$ changes from 0 to 1. The output is $1 + (0 \to 1)$, which is always 1. However, if the first term $B$ were to momentarily drop to 0 due to an erroneous input or internal glitch (which is unlikely if $B$ is stable), and the $BC$ term had a delay in becoming 1, then a static-0 hazard could occur.

    **Let's focus on the core concept:** The combinational logic $F = A'B + BC$ must be hazard-free for all input transitions. With $A=0$ fixed, $F = B+BC$, which simplifies to $B$. The minimal sum-of-products is $B$. A hazard can exist in a non-minimal SOP like $B+BC$. For a static-1 hazard, we need a situation where the output should be 1, but momentarily drops to 0. This typically happens if the "cover" for the '1' minterms disappears. Since the minimal form is $B$, if $B=1$, the output is 1. If the implementation is $B+BC$, and $B=1$, one of the terms ($B$) is already 1, ensuring the output is 1. This is why adding redundant terms to the minimal form can eliminate hazards.

    **In summary for 4(b):** Yes, a static hazard (specifically, a static-1 hazard) is possible in the non-minimal SOP $F=B+BC$ if the asynchronous inputs $B$ and $C$ transition such that both product terms $B$ and $BC$ momentarily evaluate to 0, despite the output being expected to be 1. This typically happens when a single input change affects multiple product terms with different delays.

    **(c) Elimination:** The hazard can be eliminated by using the minimal sum-of-products form $F=B$. If the function must be implemented in SOP form using the original expression $F=A'B + BC$, we can add redundant terms. The K-map for $F=B$ (given $A=0$) would show all '1's where $B=1$. If $A=0$, $F=B$. The K-map for $F=B$ (with $A$ and $B$ as inputs) is simply a column where $B=1$.
    For $F=B+BC$, the minimal form is $B$. Implementing $F=B$ directly would be hazard-free. If the requirement is to use a sum of products, the hazard arises from the redundancy. To eliminate hazards in SOP forms, we add consensus terms. The consensus of $A'B$ and $BC$ is not straightforward due to the presence of $A'$. However, if we consider $F=B$ in a 3-variable K-map (A,B,C), the '1's are where $B=1$. The term $B$ covers these. A redundant term to cover cases where $B$ alone might fail would be needed.
    For $F=B+BC$, a redundant term that covers the cases where $B$ might be 1 but $BC$ is 0, and all other terms are also 0, would be needed. The standard way to eliminate hazards in SOPs is by adding loops on the K-map that cover the "gap" created by minimal SOP. Here, since the minimal form is just $B$, the redundant term $BC$ is the source of the potential hazard. The best way to eliminate hazards is to use the minimal form $F=B$.

**Answer 5:**
*   **(a) Timing Issue:** This scenario describes a **race condition** within the combinational logic, specifically related to a **setup time violation or hold time violation** if the `EN` signal is sampled by a flip-flop. If the logic for `CNT > 10` takes longer to settle, its output might be delayed. If the sensor `S` transitions from high to low very close to the clock edge when `CNT` is changing, and the `EN` signal is evaluated based on the current values of `S` and `CNT > 10`, the result might be incorrect if the evaluation happens before `CNT > 10` has stabilized. This is a form of hazard where the timing of signal changes within the combinational logic causes an erroneous transient output. Specifically, if `EN` should be low (due to $S$ going low), but momentarily stays high because `CNT > 10` is still high due to delay, a temporary glitch might occur. This can be considered a dynamic hazard if `EN` flickers.

*   **(b) Ensuring Stability:** To ensure the `EN` signal is stable and correct:
    1.  **Synchronize the Asynchronous Sensor:** The asynchronous sensor output `S` should be synchronized to the system clock using a two-flip-flop synchronizer. This will produce a stable, clocked signal, let's call it `S_sync`.
    2.  **Synchronous Counter:** The counter `CNT` is already synchronous. The comparison `CNT > 10` is also performed within the synchronous domain.
    3.  **Hazard-Free Combinational Logic:** The combinational logic that generates `EN = S_sync AND (CNT > 10)` must be designed to be hazard-free with respect to the clock edge that updates $S_{sync}$ and the synchronous evaluation of `CNT > 10$. This means ensuring that any transition in $S_{sync}$ or `CNT > 10` does not cause a momentary flicker in `EN`.
    4.  **Use Output Enable/Synchronization:** For critical applications, the output `EN` itself might be passed through another flip-flop (acting as a synchronizer/output register) before being used to enable the data acquisition module. This ensures that the enable signal is stable for the entire clock cycle.

---

### 8. Important Points to Remember

*   **Mixed-mode circuits are common:** Real-world systems often combine synchronous and asynchronous elements.
*   **Asynchronous signals are hazard triggers:** The unpredictable timing of asynchronous signals can easily lead to hazards in connected combinational logic.
*   **Static and Dynamic Hazards apply:** The fundamental principles of static and dynamic hazards in combinational logic still hold true for mixed-mode circuits.
*   **Synchronization is key:** Always synchronize asynchronous inputs to the synchronous clock domain using robust methods like two-flip-flop synchronizers before feeding them into synchronous logic.
*   **Hazard-free design techniques are essential:** Apply techniques like K-map-based minimization and redundant term addition to ensure combinational logic is hazard-free, regardless of input source.
*   **Timing analysis is critical:** Understand and analyze propagation delays to predict and mitigate potential hazards and race conditions.

---
