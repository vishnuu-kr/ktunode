---
title: "Data synchronizers"
subject: "DIGITAL SYSTEM DESIGN"
module: "Module 3: Hazards – static and dynamic hazards in combinational networks"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe71b"
status: "completed"
scrapedAt: "2026-05-23T17:47:52.633Z"
---
# DIGITAL SYSTEM DESIGN: Module 3: Hazards – Static and Dynamic Hazards in Combinational Networks

## Topic: Data Synchronizers

---

### 1. Introduction to Data Synchronizers

**What are Data Synchronizers?**

Data synchronizers are essential circuits in digital systems that handle the asynchronous arrival of data from one clock domain to another. Their primary purpose is to prevent **metastability**, a state where a flip-flop's output is unpredictable and can oscillate for an indeterminate amount of time, potentially causing system malfunctions.

**Why are Synchronizers Needed?**

*   **Asynchronous Inputs:** Many real-world systems and external interfaces operate asynchronously to the main system clock. When data from these asynchronous sources needs to be sampled by a synchronous system, a synchronizer is required.
*   **Clock Domain Crossing (CDC):** In complex systems with multiple clock domains (e.g., different parts of an FPGA running at different frequencies, or communication between separate chips), data must be transferred across these domains. Without proper synchronization, metastability can occur.
*   **Avoiding Metastability:** Metastability arises when a flip-flop's setup or hold time is violated. This can happen during asynchronous data transitions. A synchronizer is designed to mitigate this risk.

**Connection to Hazards (Module 3 Context):**

While this topic is specifically about data synchronizers, it's important to note that the underlying principles of timing and signal propagation, which are central to understanding hazards (static and dynamic), are also critical for designing effective synchronizers. The unpredictable timing of asynchronous inputs is analogous to the timing issues that cause hazards in combinational logic.

---

### 2. Understanding Metastability

**Definition of Metastability:**

Metastability is a temporary unstable state in a sequential logic element (like a flip-flop or latch) where its output is neither a valid logic '0' nor a valid logic '1'. This occurs when the data or clock input violates the timing requirements, specifically the setup or hold times.

**Setup Time (t<sub>su</sub>):**

The minimum time data must be stable before the active clock edge.
*   **Givone, D. G. (2002).** *Digital Principles & Design.* Mentions setup time as a critical parameter for flip-flops.

**Hold Time (t<sub>h</sub>):**

The minimum time data must remain stable after the active clock edge.
*   **Mano & Ciletti, (2018).** *Digital Design with an introduction to HDL, VHDL and Verilog.* Emphasizes hold time constraints for proper flip-flop operation.

**What Happens During Metastability?**

When setup or hold time is violated:
1.  The flip-flop's internal state becomes unstable.
2.  The output may oscillate or float.
3.  It can take an unpredictable amount of time for the output to settle to a valid logic level.
4.  This settled time (recovery time) can be longer than the system's clock period, leading to incorrect data being latched by subsequent flip-flops.

**Consequences of Metastability:**

*   **System Malfunctions:** Incorrect data can propagate through the system, leading to erroneous calculations or state changes.
*   **Unpredictable Behavior:** The entire system's operation can become unreliable.
*   **Data Loss:** Data may be missed or corrupted.

---

### 3. Basic Data Synchronizer Structure: The Two-Flip-Flop Synchronizer

**The Core Idea:**

The simplest and most common data synchronizer uses two cascaded flip-flops clocked by the destination clock.

**Structure:**

```
Async Data ---| D Q  |---| D Q  |--- Synchronized Data
              | FF1  |   | FF2  |
Async Clock ---|------|---|------|
             CLK     CLK
```

**How it Works:**

1.  **First Flip-Flop (FF1):** The asynchronous data is clocked into FF1. If the data arrives close to the clock edge and violates setup/hold time, FF1 *might* enter a metastable state. However, FF1's output will eventually settle to a valid logic level, but the time it takes to settle is unpredictable.
2.  **Second Flip-Flop (FF2):** FF2 is clocked by the *same* destination clock as FF1. By the time FF2's clock edge arrives, FF1's output has had additional time to settle.
    *   **If FF1 settled before FF2's clock edge:** FF2 latches a valid logic level.
    *   **If FF1 is *still* metastable when FF2's clock edge arrives:** FF2 will also likely enter a metastable state. However, the probability of this happening is significantly reduced.

**Why Two Flip-Flops? (Mano & Ciletti, 2018):**

The second flip-flop acts as a "qualifier". It samples the output of the first flip-flop after some delay. If the first flip-flop enters metastability, it needs a certain amount of time to recover and settle. The second flip-flop samples the output of the first one. If the first flip-flop hasn't settled by the time the second flip-flop samples it, the second flip-flop will also become metastable. However, the probability of this occurring is exponentially reduced with each additional clock cycle provided for settling. Two flip-flops provide a reasonable trade-off between synchronization reliability and latency.

**Analysis of Metastability Probability (Advanced Concept):**

The probability of the second flip-flop becoming metastable depends on the time difference between the asynchronous data transition and the clock edge, and the recovery time of the flip-flops. With two flip-flops, the chance of both becoming metastable on consecutive clock edges is drastically reduced, often to acceptable levels for many applications.

*   **Wakerly, J. F. (2008).** *Digital Design.* Discusses the probabilistic nature of synchronizers and the reduction in metastability probability.

---

### 4. Design Considerations and Improvements

**1. Choice of Flip-Flop:**

*   **Faster Flip-Flops:** Flip-flops with faster propagation delays and shorter recovery times generally perform better in synchronizers.
*   **Specialized Synchronizer Flip-Flops:** Some manufacturers provide flip-flops specifically designed for synchronization with improved metastable behavior.

**2. Clock Frequency:**

*   **Higher Clock Frequencies:** A higher destination clock frequency provides more time for the first flip-flop to settle before the second flip-flop samples its output. This reduces the probability of the second flip-flop also going metastable.

**3. Number of Flip-Flops:**

*   **More Flip-Flops:** Adding more flip-flops in the chain (e.g., three or four) further reduces the probability of metastability. However, this increases latency. The choice depends on the required reliability and acceptable delay.
    *   **Yarbrough, J. M. (2006).** *Digital Logic Applications and Design.* Explores the trade-offs of using multiple flip-flops in synchronizers.

**4. Synchronizing a Bus:**

When synchronizing multiple data lines (a bus), each data line typically needs its own synchronizer.

```
Async Data Bus ---| D Q  |---| D Q  |--- Synchronized Data Bus
                  | FF1a |   | FF2a |
Async Clock -----| D Q  |---| D Q  |---
                 | FF1b |   | FF2b |
                 ------   ------
                  ...       ...
```

**Important Note:** The clock signals driving FF1 and FF2 must be the *same* destination clock. The asynchronous data is what arrives at different times.

---

### 5. Handling Multiple Asynchronous Signals

**Synchronization of Control Signals:**

When synchronizing control signals (e.g., an interrupt request), a simple two-flip-flop synchronizer is usually sufficient. The synchronized signal can then be used to trigger logic within the destination clock domain.

**Synchronization of Data Buses:**

As mentioned, each bit of a data bus should ideally be synchronized independently. However, this can lead to a problem: if the bits of a bus arrive at the synchronizer at slightly different times relative to the clock, they might be sampled by FF1 at different times. This could result in the synchronized bus data being **corrupted** or **incorrectly phased**, even if metastability is avoided.

**Solution: Bus Synchronization with Handshaking (More Complex):**

For critical data buses where the integrity of the entire bus word is important, more complex synchronization schemes are used, often involving handshaking protocols. These protocols ensure that the entire data word is stable before it's transferred and acknowledged. Examples include:

*   **Double Flop with Valid Bit:** One common approach is to use the two-flip-flop synchronizer for each data bit and also synchronize a "valid" signal. The receiving side only accepts the data when the synchronized "valid" signal is active.
*   **FIFO (First-In, First-Out) Buffers:** For higher throughput and more robust synchronization of data streams, FIFOs are used. A FIFO has separate write and read pointers, allowing data to be written from one clock domain and read from another. The FIFO's internal logic handles the synchronization.
    *   **Abramovici, Breuer, & Friedman, (1994).** *Digital Systems Testing and Testable Design.* While focused on testing, the principles of inter-clock domain communication are relevant to understanding robust data transfer mechanisms like FIFOs.

---

### 6. Practice Questions and Exercises

**Question 1:**
What is the primary purpose of a data synchronizer?
(a) To speed up data transfer
(b) To prevent metastability
(c) To convert asynchronous signals to synchronous signals
(d) Both (b) and (c)

**Question 2:**
Explain why a single flip-flop is generally not sufficient for synchronizing asynchronous data.

**Question 3:**
Consider a scenario where you need to synchronize a control signal from a slow asynchronous device (e.g., a button press) to a fast system clock (100 MHz). Describe the basic synchronizer you would use and explain its operation.

**Question 4:**
What is the main challenge when synchronizing a multi-bit data bus using individual two-flip-flop synchronizers for each bit?

**Question 5:**
How does increasing the destination clock frequency affect the reliability of a two-flip-flop synchronizer?

---

### 7. Answers to Practice Questions

**Answer 1:**
**(d) Both (b) and (c)**
While it converts asynchronous signals to synchronous ones, its *critical* function is preventing metastability.

**Answer 2:**
A single flip-flop might enter a metastable state if the asynchronous data input violates its setup or hold time. The output of the flip-flop in this state is unpredictable and can take an indeterminate amount of time to settle to a valid logic level. This settled time can be longer than the system clock period, leading to the next flip-flop latching incorrect data. A second flip-flop provides an additional clock cycle for the first flip-flop's output to settle, significantly reducing the probability of metastability.

**Answer 3:**
You would use a basic **two-flip-flop synchronizer**.
*   **Structure:** Connect the asynchronous control signal (button press) to the D input of the first flip-flop (FF1). Clock both FF1 and the second flip-flop (FF2) with the 100 MHz system clock. The output of FF2 will be the synchronized control signal.
*   **Operation:** When the button is pressed, the asynchronous signal will eventually reach the clock edge of FF1. If it arrives too close to the edge, FF1 may become metastable. However, FF1's output will eventually settle. The second flip-flop (FF2), clocked by the same system clock, samples FF1's output after FF1 has had additional time to settle. This greatly reduces the chance of FF2 becoming metastable. The output of FF2 is a stable, synchronized version of the button press event.

**Answer 4:**
The main challenge is **data corruption or phase misalignment**. Even if each bit is synchronized without metastability, if the asynchronous data bits arrive at the synchronizer's clock edges at slightly different times relative to each other, the individual synchronized bits might not represent the correct *simultaneous* state of the original bus at any given moment. This can lead to an incorrect bus word being latched by the receiving system.

**Answer 5:**
Increasing the destination clock frequency provides more time for the output of the first flip-flop to **settle** before the second flip-flop samples it. This reduces the probability that the second flip-flop will also enter a metastable state. A higher clock frequency essentially increases the "window" of opportunity for the first flip-flop to recover.

---

### 8. Important Points to Remember

*   **Metastability is the primary problem addressed by data synchronizers.**
*   **Data synchronizers are crucial for Clock Domain Crossing (CDC).**
*   The **two-flip-flop synchronizer** is the most common and simplest design.
*   Both flip-flops in a synchronizer must be clocked by the **same destination clock**.
*   **Faster flip-flops** and **higher clock frequencies** generally improve synchronizer reliability.
*   Synchronizing a **data bus** is more complex than synchronizing a single control signal due to the need to maintain the integrity of the entire bus word.
*   For bus synchronization, **FIFOs** or more advanced handshaking protocols are often preferred.
*   The probability of metastability can be calculated, and for critical applications, multiple flip-flops may be used to achieve extremely low probabilities.

---

### 9. Alignment with Course Outcomes

*   **CO1: Analyze asynchronous and clocked synchronous sequential circuits (Knowledge Level: K3)**
    *   This topic directly supports CO1 by requiring analysis of sequential elements (flip-flops) operating under asynchronous input conditions and being driven by a synchronous clock. Understanding how the clocking mechanism interacts with asynchronous data is key.
*   **CO2: Design hazard-free digital circuits (Knowledge Level: K3)**
    *   While this topic is about synchronizers and not directly about static/dynamic hazards in combinational logic, the underlying concept of timing violations (setup/hold) that lead to metastability is related to the timing sensitivities that also cause hazards. Understanding these timing issues is fundamental.
*   **CO3: Identify faults in digital circuits (Knowledge Level: K3)**
    *   Metastability can be considered a functional fault condition arising from timing violations. Identifying the need for synchronizers is a way to prevent a common type of operational failure.
*   **CO4: Apply VHDL programming in digital system design (Knowledge Level: K3)**
    *   While not explicitly VHDL code, the concepts discussed are directly implemented in VHDL when designing systems with multiple clock domains. Students would need to understand these principles to correctly code synchronizers in VHDL.

---
**(End of Notes)**

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
