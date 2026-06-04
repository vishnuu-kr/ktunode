---
title: "Mixed operating mode asynchronous circuits"
subject: "DIGITAL SYSTEMS AND VLSI DESIGN"
module: "Module 3: Hazards – static and dynamic hazards in combinational networks"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe75b"
status: "completed"
scrapedAt: "2026-05-23T17:48:14.522Z"
---
# DIGITAL SYSTEMS AND VLSI DESIGN

## Module 3: Hazards – Static and Dynamic Hazards in Combinational Networks

### Topic: Mixed Operating Mode Asynchronous Circuits

---

### 1. Introduction to Asynchronous Circuits and Mixed Operating Modes

*   **Asynchronous Circuits:** These circuits do not rely on a global clock signal to synchronize operations. Instead, they use self-timing signals (e.g., handshaking protocols) to indicate the completion of operations and the readiness for the next. This offers potential advantages like higher speed, lower power consumption, and better modularity.
*   **Synchronous Circuits:** These circuits use a central clock signal to control the timing of state transitions. All state changes occur in lockstep with the clock pulses.
*   **Mixed Operating Mode:** This refers to systems that incorporate both synchronous and asynchronous circuit elements. Such systems are common in practice, where specific parts might benefit from asynchronous operation (e.g., interfacing with external devices, high-speed data paths) while others remain synchronous for simplicity and ease of design.

---

### 2. Why Mixed Operating Modes?

*   **Performance Optimization:** Asynchronous modules can be used in performance-critical sections of a system, operating at their own pace, potentially faster than a globally clocked system.
*   **Power Efficiency:** Asynchronous circuits only consume power when they are actively performing an operation, leading to potential power savings in idle periods.
*   **Interface with External World:** External devices or sensors often operate asynchronously. Integrating asynchronous components simplifies the interface and avoids the need for complex clock synchronization mechanisms.
*   **Modularity and Scalability:** Asynchronous designs can be more inherently modular, allowing different parts of a system to operate at different speeds without being constrained by a single clock.
*   **Reduced Clock Distribution Network Issues:** Eliminating or reducing the need for a global clock distribution network can simplify design and mitigate issues like clock skew and jitter.

---

### 3. Challenges in Mixed Operating Mode Asynchronous Circuits

*   **Design Complexity:** Designing and verifying asynchronous circuits is generally more complex than synchronous circuits due to the lack of a global clock. Hazards, races, and deadlocks are critical concerns.
*   **Hazard Mitigation:** The core concepts of hazards (static and dynamic) learned for combinational networks become even more crucial when interfacing synchronous and asynchronous parts.
*   **Interfacing:** The synchronization and data transfer between synchronous and asynchronous domains require careful design to avoid metastability and ensure reliable operation.
*   **Testing and Debugging:** Identifying and debugging issues in mixed-mode systems can be challenging due to the interplay of different timing domains.

---

### 4. Key Concepts from Combinational Hazards Applied to Mixed Mode

*   **Static Hazards:**
    *   **Definition:** A static hazard occurs when a change in an input variable causes the output to momentarily flicker from its steady-state value before settling to the correct value.
    *   **Impact in Mixed Mode:** If a combinational logic block within an asynchronous part of the system has static hazards, and its output is used to trigger a state change or control a synchronous component, it can lead to erroneous behavior. For instance, a glitch might cause a synchronous flip-flop to transition unexpectedly.
    *   **Mitigation:** Ensure all combinational logic in asynchronous sections is hazard-free, typically by using consensus terms or covering all adjacent 1s in the K-map with product terms. (Refer to Givone, Chapter 7; Wakerly, Chapter 5)
*   **Dynamic Hazards:**
    *   **Definition:** A dynamic hazard occurs when a change in an input variable causes the output to change multiple times before settling to its correct value.
    *   **Impact in Mixed Mode:** Dynamic hazards are even more problematic in mixed-mode circuits as they introduce multiple unpredictable glitches. If the asynchronous part uses these glitches to signal events, the system's behavior can become chaotic.
    *   **Mitigation:** Similar to static hazards, ensure combinational logic is hazard-free. This often involves implementing specific logic structures that eliminate the possibility of multiple paths leading to the output changing at different times. (Refer to Wakerly, Chapter 5; Yarbrough, Chapter 6)

---

### 5. Interfacing Synchronous and Asynchronous Domains

This is a critical aspect of mixed-mode design. The primary challenge is ensuring that signals crossing the boundary between the two domains are handled reliably.

#### 5.1. Synchronous to Asynchronous Interface

*   **Problem:** A synchronous signal changing on a clock edge might propagate through asynchronous logic, and its effect might be misinterpreted due to the absence of a clock.
*   **Solution:** Use a **synchronizer circuit**. A common synchronizer uses two cascaded flip-flops. The first flip-flop samples the incoming synchronous signal. The second flip-flop samples the output of the first. This two-flip-flop synchronizer helps to reduce the probability of metastability, but it doesn't eliminate it entirely. The output of the second flip-flop is considered the "synchronized" asynchronous signal.
    *   **Example (Conceptual):**
        ```
        Sync_Input --> FF1 (posedge Clock) --> FF2 (posedge Clock) --> Async_Output
        ```
    *   **Important Note:** The synchronizer itself is a synchronous circuit. The output of the synchronizer is then used as an input to the asynchronous part.

#### 5.2. Asynchronous to Synchronous Interface

*   **Problem:** An asynchronous signal is not tied to a clock. If it's sampled by a synchronous circuit at the wrong time (i.e., during the clock edge or when the signal is unstable), it can lead to metastability in the synchronous circuit.
*   **Solution:** This is more challenging and typically involves **request-acknowledge (handshaking) protocols**.
    *   **Two-Phase Handshaking (e.g., Data Transfer):**
        1.  **Request (Req):** The asynchronous source asserts a `Req` signal when data is ready.
        2.  **Acknowledge (Ack):** The synchronous destination samples the data and `Req`. When it's ready to accept new data, it asserts an `Ack` signal.
        3.  The asynchronous source de-asserts `Req` upon seeing `Ack`.
        4.  The synchronous destination de-asserts `Ack` after seeing `Req` de-assert.
    *   **Metastability Prevention:** To prevent metastability in the synchronous circuit sampling the asynchronous `Req` signal, the `Req` signal is often **resynchronized** using a synchronizer circuit similar to the synchronous-to-asynchronous case, but with the understanding that the `Req` signal might change asynchronously. The `Ack` signal generated by the synchronous part must also be handled carefully by the asynchronous part.
    *   **Example (Conceptual - Asynchronous Source to Synchronous Destination):**
        *   **Asynchronous Source:**
            *   Data_Async, Req_Async
            *   When Data_Async is ready, assert Req_Async.
        *   **Synchronous Destination:**
            *   Clock, Data_Sync_Input, Req_Sync_Input, Ack_Sync_Output
            *   Use a synchronizer for Req_Async to get Req_Sync_Input.
            *   When Req_Sync_Input is asserted, capture Data_Async (which needs its own synchronizer or careful timing) into Data_Sync_Input.
            *   Assert Ack_Sync_Output.
        *   **Asynchronous Source (Responding to Ack):**
            *   De-assert Req_Async when it sees Ack_Sync_Output (or a resynchronized version of it).

*   **Common Interface Strategies (Refer to Wakerly, Chapter 13 for advanced techniques):**
    *   **FIFO Buffers:** First-In, First-Out buffers are often used to bridge asynchronous and synchronous domains. They can temporarily store data, smoothing out speed differences and allowing for synchronization.
    *   **Handshaking Protocols:** Essential for reliable data transfer. Examples include simple request-acknowledge pairs, or more complex multi-phase protocols.

---

### 6. Designing Hazard-Free Combinational Logic in Mixed-Mode

*   **Requirement:** Any combinational logic block that forms part of the asynchronous domain, or whose output directly influences the behavior of the asynchronous domain (e.g., triggers an event, controls a state transition in an ASC), *must* be hazard-free.
*   **Methods:**
    *   **K-map Simplification with Consensus:** When simplifying a Boolean function using a Karnaugh map (K-map), ensure that all pairs of adjacent 1s representing a product term are covered. For hazard-free design, it's often necessary to add redundant product terms (consensus terms) to cover all possible transitions. (Refer to Givone, Chapter 7; Yarbrough, Chapter 6)
        *   **Example:** If a function `F(A, B, C)` has `minterms m1, m3, m5` (001, 011, 101), the simplified SOP `F = A'C + BC` might have a static hazard for input changes `B=0 -> B=1` when `A=0, C=1`. The K-map shows `A=0, C=1` is covered by `A'C`. The transition `001 -> 011` means `A=0, B=0, C=1` to `A=0, B=1, C=1`. The original expression becomes `F = (0)'(1) + (0)(1) = 1 + 0 = 1`. Now consider `A=0, C=1`. If `B` changes from `0` to `1`, the terms change as follows:
            *   `A'C`: `(0)'(1) = 1` (no change)
            *   `BC`: `(0)(1) = 0` -> `(1)(1) = 1` (changes from 0 to 1)
            *   The output might momentarily flicker if the `BC` term isn't stable at the same time as the `A'C` term.
        *   To make it hazard-free, we add the consensus term `AC` (which is the consensus of `A'C` and `BC`, considering `B` as the variable being eliminated). The hazard-free expression becomes `F = A'C + BC + AC`. Now, when `B` changes `0->1` while `A=0, C=1`:
            *   `A'C`: `1`
            *   `BC`: `0` -> `1`
            *   `AC`: `0` -> `0`
            *   The output calculation is `1 + 0 -> 1 + 1` (stable at 1) or `1 + 0 + 0 -> 1 + 1 + 0` (stable at 1). The intermediate value remains `1`.
    *   **Static Hazard-Free Implementation:** Use logic gates (like NAND gates) that are known to be inherently hazard-free or design the logic to avoid the possibility of multiple paths changing at different times. This is a deeper topic in asynchronous design theory. (Refer to Biswas, Chapter 4)
    *   **Dynamic Hazard-Free Implementation:** Requires avoiding multiple paths that can change at different rates. This often leads to more complex logic structures.

---

### 7. Example Scenario: Mixed Mode Clock Generator

Consider a system where a high-frequency clock is generated synchronously, but it needs to be gated (turned on/off) based on an external, asynchronous request signal.

*   **Components:**
    *   **Synchronous Clock Generator:** Generates `clk_fast`.
    *   **Asynchronous Request Module:** Generates `async_req` signal.
    *   **Gating Logic:** Needs to combine `clk_fast` and `async_req` to produce `clk_gated`.
*   **Design Consideration:**
    1.  **Asynchronous to Synchronous Interface:** The `async_req` signal needs to be reliably sampled by the synchronous logic that controls the gating. A synchronizer (two flip-flops) would be used to convert `async_req` to `sync_req`.
    2.  **Gating Logic:** The `clk_gated` signal would be generated by an AND gate: `clk_gated = clk_fast AND sync_req`.
    3.  **Hazard Check:** The AND gate itself is a simple combinational circuit. If `sync_req` changes from 0 to 1, and `clk_fast` happens to be at its transition edge at that exact moment, there's a potential for a glitch in `clk_gated` if the AND gate has internal hazards. However, standard AND gates are generally designed to be hazard-free for simple input transitions. The main concern is the reliability of `sync_req`.

---

### 8. Course Outcomes Alignment

*   **CO1 (CSSNs):** While this topic focuses on asynchronous aspects, understanding mixed-mode interfaces is crucial when integrating CSSNs with asynchronous components.
*   **CO2 (ASCs):** This topic directly builds upon the design and analysis of ASCs by considering their integration with synchronous parts. Hazard mitigation is paramount for the stability of ASCs.
*   **CO3 (Hazards):** This topic is a direct application of hazard identification and mitigation concepts (static and dynamic) in a more complex scenario (mixed-mode). Ensuring hazard-free combinational logic is critical for robust mixed-mode designs.
*   **CO4 (VLSI Design Flow, VHDL):** In a VLSI context, mixed-mode design is common. When using VHDL, one would model synchronous components using clock-sensitive processes and asynchronous components using sensitivity list-based processes. Interfacing modules would require careful design to handle the synchronization and data transfer between these different modeling styles.

---

### 9. Important Points to Remember

*   Mixed-mode circuits combine synchronous and asynchronous elements.
*   The primary challenges lie in the **interface** between domains and the **reliability** of signals crossing boundaries.
*   **Metastability** is a key concern when sampling asynchronous signals in synchronous circuits.
*   **Synchronizers** (e.g., two-flip-flop) are used to reduce metastability.
*   **Handshaking protocols** are essential for reliable data transfer between asynchronous and synchronous parts.
*   All combinational logic within asynchronous sections, or logic that directly controls asynchronous behavior, **must be hazard-free** (static and dynamic).
*   K-map simplification with consensus terms is a standard method for achieving hazard-free combinational logic.
*   Careful consideration of signal timing and the potential for glitches is critical for successful mixed-mode design.

---

### 10. Practice Questions/Exercises

1.  **Question:** Explain why a combinational logic block with static hazards can be problematic when its output is used to trigger a state transition in an asynchronous sequential circuit.
    **Answer:** A static hazard causes the output to momentarily flicker. If this flickering output is used as an input to a state-determining flip-flop or logic within an ASC, it can cause an unintended state transition, leading to incorrect behavior or even a deadlock. The absence of a clock in the asynchronous domain means that any glitch can be interpreted as a valid event.

2.  **Question:** Describe the fundamental challenge in interfacing an asynchronous signal to a synchronous circuit and what common technique is used to mitigate it.
    **Answer:** The fundamental challenge is metastability. An asynchronous signal may change its value at any time, and if it happens to be sampled by a synchronous circuit (e.g., a flip-flop) when the signal is in transition or very close to the clock edge, the flip-flop's output can enter an indeterminate state for an unpredictable amount of time. The common mitigation technique is using a **synchronizer circuit**, typically consisting of two cascaded flip-flops, to significantly reduce the probability of metastability.

3.  **Question:** Consider a combinational circuit that needs to be hazard-free. If its K-map simplification yields `F = AB + BC`, and it's found to have a static hazard when `B` changes from 0 to 1 while `A=0` and `C=1`, what is the consensus term that can be added to make it hazard-free?
    **Answer:** The product terms are `AB` and `BC`. To find the consensus term that eliminates the hazard when `B` changes, we look at the product of the terms where `B` is complemented in one and not complemented in the other. Here, `A` is present in `AB` and `C` is present in `BC`. The consensus term is `AC`. Adding `AC` to the expression gives `F = AB + BC + AC`.

4.  **Question:** Briefly describe the purpose of a handshake protocol in mixed-mode asynchronous-synchronous communication.
    **Answer:** A handshake protocol is used to ensure reliable data transfer and synchronization between asynchronous and synchronous circuits. It establishes a communication sequence where one side signals readiness (e.g., "data is ready" or "request") and the other side signals acceptance (e.g., "data received" or "acknowledge"). This two-way communication prevents data loss and ensures that data is transferred only when both sides are ready.

5.  **Question:** Imagine you have an asynchronous sensor providing a "data ready" signal. You want to use this to trigger a synchronous counter. What are the key design steps and concerns?
    **Answer:**
    *   **Concern:** The asynchronous "data ready" signal could be unstable or change erratically. Sampling it directly by the synchronous counter's clock edge could lead to metastability.
    *   **Design Step 1 (Synchronization):** Implement a synchronizer circuit (e.g., two flip-flops) to reliably convert the asynchronous "data ready" signal into a synchronous "sync_data_ready" signal.
    *   **Design Step 2 (Hazard-Free Logic):** Ensure any combinational logic used to combine the "sync_data_ready" signal with the counter's clock or enable signals is hazard-free. A simple AND gate to enable the counter based on `sync_data_ready` is generally safe, but its inputs must be stable.
    *   **Design Step 3 (Counter Update):** The synchronous counter would be enabled or loaded based on the `sync_data_ready` signal, occurring synchronously with its own clock.
    *   **Design Step 4 (Acknowledgement - Optional but good practice):** The asynchronous sensor might need an acknowledgement from the synchronous system to indicate data has been read, to prevent re-triggering. This would involve a handshake mechanism.

---

This set of notes provides a foundational understanding of mixed operating mode asynchronous circuits within the context of digital systems and VLSI design, emphasizing the critical role of hazard awareness and synchronization techniques when integrating asynchronous and synchronous domains.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
