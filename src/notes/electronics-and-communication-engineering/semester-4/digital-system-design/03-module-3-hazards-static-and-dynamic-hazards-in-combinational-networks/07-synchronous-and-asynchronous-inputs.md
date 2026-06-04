---
title: "Synchronous and asynchronous inputs"
subject: "DIGITAL SYSTEM DESIGN"
module: "Module 3: Hazards – static and dynamic hazards in combinational networks"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe71e"
status: "completed"
scrapedAt: "2026-05-23T17:47:54.658Z"
---
# DIGITAL SYSTEM DESIGN - Module 3: Hazards – Static and Dynamic Hazards in Combinational Networks

## Topic: Synchronous and Asynchronous Inputs

### Learning Outcomes:
*   Understand the distinction between synchronous and asynchronous inputs in digital systems.
*   Identify the potential issues arising from asynchronous inputs in the context of combinational and sequential circuits.
*   Relate the concept of asynchronous inputs to the occurrence of hazards in combinational logic.
*   Analyze how asynchronous inputs can lead to erroneous behavior in digital systems.

---

### Introduction

In digital system design, the nature of input signals significantly influences circuit behavior. Inputs can be broadly categorized as either **synchronous** or **asynchronous**. Understanding this distinction is crucial, especially when dealing with potential timing issues like hazards, which are a primary focus of this module.

---

### 1. Synchronous Inputs

**Definition:**
Synchronous inputs are signals that are timed and controlled by a **clock signal**. They are expected to change their values only at specific, predictable moments in time, usually coinciding with the active edge (rising or falling) of the clock.

**Characteristics:**
*   **Clock-Dependent:** Changes are synchronized with the clock.
*   **Predictable Timing:** The exact moment of transition is known.
*   **Stable during Clock Period:** Ideally, the input remains stable throughout the clock period until the next active edge.
*   **Reduced Timing Issues:** Generally lead to more predictable and robust designs by minimizing timing uncertainties.

**In the Context of Hazards:**
In a purely synchronous system, the inputs to combinational logic are ideally stable for the duration of a clock cycle. When a clock edge arrives, all inputs are expected to have settled to their new stable values. If an input changes asynchronously and a clock edge arrives before that input has stabilized, it can lead to unpredictable behavior in the combinational logic, potentially triggering hazards.

**Textbook References:**
*   **M. Morris Mano & Michel D. Ciletti (6/e):** Discusses clocked sequential circuits and the role of the clock signal in synchronizing state transitions and input sampling. (Chapter 5: State Machines)
*   **John F. Wakerly (4/e):** Emphasizes synchronous design principles, where inputs are typically latched on the clock edge, ensuring stability for subsequent combinational logic processing. (Chapter 9: Sequential Logic Design)

---

### 2. Asynchronous Inputs

**Definition:**
Asynchronous inputs are signals that can change their values at **any time**, independent of the clock signal. They are not synchronized with the system's clock.

**Characteristics:**
*   **Clock-Independent:** Changes are not tied to the clock's timing.
*   **Unpredictable Timing:** The exact moment of transition is not known in advance.
*   **Potential for Glitches:** Can cause temporary, unintended changes in the output of combinational logic.
*   **Can Cause Timing Violations:** If not handled carefully, asynchronous inputs can lead to setup or hold time violations in sequential circuits.

**Types of Asynchronous Inputs:**
*   **External Events:** User interface buttons, sensor readings, communication data arriving from an external device not synchronized to the main clock.
*   **Internal Asynchronous Signals:** Signals generated within the system that are not directly controlled by the main clock.

**In the Context of Hazards:**
Asynchronous inputs are a primary cause of **dynamic hazards**. When an asynchronous input changes, it propagates through the combinational logic. If there are multiple paths for the signal to travel, and these paths have different propagation delays, the output can momentarily glitch (change from the intended stable value to the opposite, and then back) before settling to its final value. This glitching is precisely what constitutes a dynamic hazard.

**Textbook References:**
*   **Donald G. Givone (1/e):** While focusing on basic logic gates, it implicitly covers how signal propagation delays can lead to transient behavior, which is the root of hazards caused by asynchronous events. (Chapter 2: Boolean Algebra and Logic Gates)
*   **John M Yarbrough (1/e):** Might discuss the challenges of interfacing asynchronous signals with synchronous systems, highlighting the need for synchronization mechanisms. (Chapter 7: Sequential Circuit Design)
*   **Miron Abramovici, Melvin A. Breuer, Arthur D. Friedman (1994):** This advanced text delves deeply into testing for hazards, which are often triggered by timing variations, including those introduced by asynchronous inputs. (Chapter 2: Hazards)

---

### 3. Impact of Asynchronous Inputs on Hazards

Asynchronous inputs directly contribute to the problem of **dynamic hazards** in combinational logic.

**How it Happens:**
Consider a combinational logic circuit with inputs that can change asynchronously.
1.  An asynchronous input changes its state.
2.  This change propagates through the logic gates.
3.  Due to variations in propagation delays along different signal paths, the output of the combinational logic may momentarily transition to an incorrect value before settling to its final, intended stable state. This unintended transient output is a glitch.

**Example Scenario:**
Imagine a combinational circuit that implements a function like `Y = A * B + B' * C`.
Let `A` and `C` be synchronized inputs that change together on a clock edge.
Let `B` be an asynchronous input that changes independently.

Suppose at some point:
*   `A = 1`
*   `B = 1`
*   `C = 0`

The output `Y` should be `(1 * 1) + (0 * 0) = 1`.

Now, if `B` asynchronously transitions to `0`:
*   The `A * B` term becomes `1 * 0 = 0`.
*   The `B' * C` term becomes `1 * 0 = 0`.
*   The output `Y` should settle to `0`.

However, if the propagation delay through the `B'` inverter is different from the delay through the `A * B` AND gate and the `B' * C` AND gate, the output `Y` might momentarily go to `0` (from `A*B`) and then back to `1` (if `B'` has a delay that makes `B' * C` momentarily true before `A*B` stabilizes to `0`), or vice-versa, before finally settling to `0`. This glitch is a dynamic hazard.

**Relation to Course Outcomes:**
*   **CO1 (Analyze asynchronous and clocked synchronous sequential circuits):** This topic helps in understanding the fundamental behavior of circuits when asynchronous events occur, which is critical for analyzing any sequential circuit that might receive such inputs.
*   **CO2 (Design hazard-free digital circuits):** By understanding that asynchronous inputs can cause dynamic hazards, we are motivated to develop strategies (like hazard-free design techniques or proper synchronization) to mitigate these issues.
*   **CO3 (Identify faults in digital circuits):** Glitches caused by asynchronous inputs can sometimes be mistaken for functional faults, making it important to distinguish between them.

---

### 4. Handling Asynchronous Inputs and Hazards

Proper handling of asynchronous inputs is essential to prevent erroneous behavior.

**Methods:**
1.  **Synchronization:** The most common approach is to synchronize asynchronous inputs with the system clock. This typically involves using flip-flops. An asynchronous input is fed into a flip-flop, and the flip-flop's output, which is now synchronized to the clock, is used by the rest of the system. This effectively "latches" the asynchronous input at a clock edge, ensuring it is stable before being processed.

    *   **Double Flip-Flop Synchronizer:** Using two flip-flops in series is a robust method to reduce the probability of metastability issues that can arise when synchronizing asynchronous signals.

2.  **Hazard-Free Design:** For combinational logic that receives inputs that might change asynchronously, ensuring the combinational logic itself is hazard-free can mitigate the impact of glitches. Techniques include:
    *   **Consensus Theorem:** Used to eliminate essential hazards and some static hazards.
    *   **Redundant Product Terms:** Adding specific product terms to the Sum of Products (SOP) or Product of Sums (POS) form to cover critical races and eliminate hazards.

3.  **Debouncing:** For mechanical switches (a common source of asynchronous input), a debouncing circuit is necessary. When a switch is pressed or released, it can bounce, creating multiple rapid transitions that the digital circuit would interpret as multiple inputs. Debouncing circuits filter these rapid transitions to produce a single clean input signal.

**Important Points to Remember:**
*   **Asynchronous inputs are a major source of dynamic hazards.**
*   **Synchronization with a clock is the preferred method to handle asynchronous inputs.**
*   **A glitch is a temporary, unintended change in output.**
*   **Hazards are a property of combinational logic, but asynchronous inputs trigger them.**
*   **Static hazards occur when an input changes but the output incorrectly glitches before settling to the *same* stable state. Dynamic hazards occur when the output glitches and transitions through an intermediate value before reaching the *new* stable state.** (While this topic focuses on inputs, understanding the types of hazards is crucial for context).

---

### 5. Practice Questions & Exercises

**Question 1:**
What is the fundamental difference between a synchronous input and an asynchronous input?

**Answer:**
A synchronous input's timing is controlled by a clock signal, changing only at specific clock edges. An asynchronous input can change its value at any time, independent of the clock.

---

**Question 2:**
Which type of hazard is primarily caused by the timing variations associated with asynchronous inputs propagating through combinational logic?
    a) Static Hazard
    b) Dynamic Hazard
    c) Both Static and Dynamic Hazards
    d) Neither Static nor Dynamic Hazards

**Answer:**
    b) Dynamic Hazard

---

**Question 3:**
Describe a common technique used to safely incorporate an asynchronous input into a synchronous digital system.

**Answer:**
The most common technique is **synchronization**. This typically involves passing the asynchronous input through one or more flip-flops clocked by the system clock. The output of the flip-flop(s) is then used as the synchronized version of the asynchronous input, ensuring it is stable at clock edges.

---

**Question 4:**
Consider a combinational circuit with an asynchronous input `X`. If `X` changes, explain how a glitch might occur at the output of this circuit, even if the final stable output is correct.

**Answer:**
When the asynchronous input `X` changes, the signal propagates through the combinational logic. If there are multiple paths from `X` to the output, and these paths have different propagation delays, the output might momentarily transition to an incorrect value (a glitch) before settling to its final intended stable state. This is because the different paths will settle at different times.

---

**Question 5:**
If you have a button press (an asynchronous event) that needs to trigger an action in a processor controlled by a clock, what steps would you take to ensure reliable operation?

**Answer:**
1.  **Debounce the button:** Use a debouncing circuit to ensure that a single press or release of the button generates only one clean digital pulse.
2.  **Synchronize the debounced signal:** Pass the debounced signal through a flip-flop that is clocked by the system clock. This will "latch" the button press at the next active clock edge, making it a synchronous event for the processor.
3.  **Process the synchronized signal:** The processor can then safely react to this synchronized input.

---

### Conclusion

Understanding the distinction between synchronous and asynchronous inputs is fundamental in digital system design. Asynchronous inputs, by their unpredictable nature, can introduce timing anomalies like dynamic hazards into combinational logic. The primary strategy for dealing with asynchronous inputs in synchronous systems is **synchronization**, often employing flip-flops to ensure that the input is stable and properly timed with respect to the system clock. By carefully managing asynchronous inputs, designers can build more reliable and predictable digital systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
