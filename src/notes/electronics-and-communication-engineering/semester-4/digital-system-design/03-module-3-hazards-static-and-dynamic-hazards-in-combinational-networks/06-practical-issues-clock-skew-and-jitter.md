---
title: "Practical issues- clock skew and jitter"
subject: "DIGITAL SYSTEM DESIGN"
module: "Module 3: Hazards – static and dynamic hazards in combinational networks"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe71d"
status: "completed"
scrapedAt: "2026-05-23T17:47:54.023Z"
---
## DIGITAL SYSTEM DESIGN - Module 3: Hazards – Static and Dynamic Hazards in Combinational Networks

**Topic: Practical Issues - Clock Skew and Jitter**

---

### 1. Introduction to Practical Issues in Digital Systems

While designing digital circuits, especially sequential systems, it's crucial to consider practical limitations that can affect their reliable operation. These issues stem from the physical implementation of the circuits and the way signals propagate. This section focuses on two critical timing-related practical issues: **Clock Skew** and **Clock Jitter**. Understanding these concepts is essential for building robust and predictable digital systems, particularly synchronous sequential circuits.

---

### 2. Understanding Clock Signals in Sequential Systems

Before diving into skew and jitter, let's revisit the role of the clock in synchronous sequential circuits.

*   **Clock Signal:** A periodic digital signal used to synchronize the operations of all sequential elements (like flip-flops) within a digital system.
*   **Clock Period (T):** The time duration of one complete cycle of the clock signal.
*   **Clock Frequency (f):** The number of clock cycles per unit time, where $f = 1/T$.
*   **Clock Edge:** The transition of the clock signal from low to high (rising edge) or high to low (falling edge). Sequential elements typically capture data on a specific clock edge.

---

### 3. Clock Skew

**Definition:** Clock skew is the **simultaneous arrival of clock signals at different sequential elements** within a digital system. It's the difference in arrival times of the clock signal at the clock input of various flip-flops or other clocked elements.

**Causes of Clock Skew:**

*   **Clock Distribution Network:** The physical layout of the wires (traces on a PCB or interconnects on an IC) carrying the clock signal to different flip-flops. Longer traces or traces with different electrical characteristics can lead to varying propagation delays.
*   **Buffering:** The use of buffers to drive the clock signal to multiple elements can introduce small delays, and if not perfectly matched, can contribute to skew.
*   **Load Capacitance:** Different flip-flops connected to the clock network may have slightly different input capacitance, affecting the time it takes for the clock signal to reach the switching threshold.
*   **Temperature Variations:** Localized temperature differences across an IC or PCB can affect the propagation speed of signals, leading to varying clock arrival times.
*   **Voltage Variations:** Fluctuations in power supply voltage can also impact signal propagation delays.

**Impact of Clock Skew on Sequential Circuits:**

Clock skew is a critical timing parameter because it directly affects the setup and hold time requirements of flip-flops.

*   **Setup Time Violation:** If the clock arrives *earlier* at a flip-flop than at another flip-flop that is supposed to provide data to it, the data might not be stable by the time the earlier clock edge arrives. This can lead to incorrect data capture.
*   **Hold Time Violation:** If the clock arrives *later* at a flip-flop than at the flip-flop providing the data, the data might change *after* the clock edge has already passed, violating the hold time requirement.

**Illustrative Example (Referencing Givone's "Digital Principles & Design"):**

Consider a simple synchronous sequential circuit with two flip-flops, FF1 and FF2. FF1 receives input data and its output is fed to FF2. The clock signal is distributed to both flip-flops.

*   **Scenario without Skew:** The clock arrives at FF1 and FF2 at the exact same time.
*   **Scenario with Skew:** Let the clock arrive at FF1 at time $t_{clk1}$ and at FF2 at time $t_{clk2}$. If $t_{clk1} \neq t_{clk2}$, then there is clock skew.

Let $t_{pd}$ be the propagation delay of the combinational logic between FF1 and FF2. For correct operation, the data from FF1 must be stable at the input of FF2 before the clock edge arrives at FF2.

**Critical Timing Condition:**

For a flip-flop to capture data correctly, the data must be stable at its input for a certain duration *before* the active clock edge (setup time, $t_{setup}$) and *after* the active clock edge (hold time, $t_{hold}$).

*   **Setup Time:** Data must be stable at the flip-flop input before the clock edge.
*   **Hold Time:** Data must remain stable at the flip-flop input after the clock edge.

Let $t_{clk\_arrival\_FF1}$ and $t_{clk\_arrival\_FF2}$ be the clock arrival times at FF1 and FF2, respectively.
Let $t_{data\_prop}$ be the propagation delay of the combinational logic between FF1 and FF2.
Let $t_{data\_ready\_FF1}$ be the time the data is available from FF1 after its clock edge.

**Impact on Setup Time:**
If clock skew causes the clock to arrive at FF2 *earlier* than at FF1, the data from FF1 might not be ready.
Consider the clock edge at FF1 at time $t_{edge1}$ and at FF2 at time $t_{edge2}$.
The data from FF1 will be available at $t_{edge1} + t_{data\_ready\_FF1} + t_{pd}$.
For FF2 to capture this data correctly without setup time violation:
$(t_{edge2} + t_{setup}) \le (t_{edge1} + t_{data\_ready\_FF1} + t_{pd})$
$t_{edge2} - t_{edge1} \le t_{data\_ready\_FF1} + t_{pd} - t_{setup}$

If $t_{edge2} - t_{edge1}$ (the skew) is too large and positive (clock arrives at FF2 later), the setup time at FF2 might be violated if the data from FF1 takes too long to propagate.

**Impact on Hold Time:**
If clock skew causes the clock to arrive at FF2 *later* than at FF1, the data might change after FF2 has already latched its value, violating the hold time.
Consider the clock edge at FF1 at time $t_{edge1}$ and at FF2 at time $t_{edge2}$.
The data from FF1 changes at $t_{edge1} + t_{data\_ready\_FF1} + t_{pd}$.
For FF2 to capture this data correctly without hold time violation:
$(t_{edge2} + t_{hold}) \le (t_{edge1} + t_{data\_ready\_FF1} + t_{pd})$
$t_{edge2} - t_{edge1} \le t_{data\_ready\_FF1} + t_{pd} - t_{hold}$

This expression highlights the critical trade-off. A larger positive skew ($t_{edge2} > t_{edge1}$) can lead to hold time violation.

**Managed Skew:**
In advanced designs, clock skew is sometimes intentionally introduced and controlled (managed skew) to balance out delays and improve overall timing. However, *unmanaged* or *excessive* skew is detrimental.

---

### 4. Clock Jitter

**Definition:** Clock jitter is the **unwanted variation or deviation of the clock signal's edges from their ideal periodic positions**. It's a temporal instability in the clock signal.

**Causes of Clock Jitter:**

*   **Noise:** Electrical noise from other components, power supply fluctuations, or electromagnetic interference can affect the precise timing of clock edges.
*   **Crystal Oscillators:** While precise, even crystal oscillators have inherent limitations and can exhibit small variations.
*   **Phase-Locked Loops (PLLs) / Delay-Locked Loops (DLLs):** These clock generation and distribution circuits, while powerful, can also introduce jitter during their operation.
*   **Temperature and Voltage Variations:** Similar to skew, environmental factors can also impact the stability of the clock signal's timing.

**Types of Clock Jitter:**

*   **Random Jitter (RJ):** Unpredictable variations caused by random noise sources.
*   **Deterministic Jitter (DJ):** Predictable variations caused by factors like crosstalk, power supply modulation, and intersymbol interference.
*   **Period Jitter:** The variation in the time between successive clock edges.
*   **Cycle-to-Cycle Jitter:** The variation in the length of consecutive clock periods.
*   **Long-Term Jitter:** Variations that occur over longer periods.

**Impact of Clock Jitter on Sequential Circuits:**

Clock jitter, like skew, directly impacts the timing windows for setup and hold times.

*   **Reduced Timing Margins:** Jitter effectively reduces the available time for data to propagate and stabilize before or after the clock edge.
*   **Setup Time Violation:** If a clock edge arrives earlier than its ideal position due to jitter, and the data is not yet stable, a setup time violation occurs.
*   **Hold Time Violation:** If a clock edge arrives later than its ideal position due to jitter, and the data changes before the actual edge, a hold time violation occurs.

**Illustrative Example (Referencing Mano & Ciletti's "Digital Design with an Introduction to HDL, VHDL and Verilog"):**

Imagine a clock signal with an ideal period of 10 ns. Without jitter, edges occur at 0, 10, 20, 30 ns, etc.

With jitter, these edges might occur at:
*   Edge 1: 0.2 ns
*   Edge 2: 9.8 ns
*   Edge 3: 20.5 ns
*   Edge 4: 29.5 ns

The variations around the ideal 10 ns period are the jitter. For example, the period between edge 1 and edge 2 is 9.6 ns (less than ideal), and between edge 2 and edge 3 is 10.7 ns (more than ideal).

This variability makes it harder to guarantee that data will always meet the setup and hold time requirements of flip-flops, especially when combined with clock skew.

**Relationship between Skew and Jitter:**

Both skew and jitter contribute to timing uncertainty in synchronous systems.
*   **Skew:** Differences in arrival times between *different* clock instances at *different* flip-flops.
*   **Jitter:** Variations in the arrival time of clock edges at a *single* clock input over time, or variations in the period between clock edges.

The total timing uncertainty at a flip-flop is often a combination of clock skew and clock jitter.

---

### 5. Mitigation Strategies for Clock Skew and Jitter

Addressing clock skew and jitter is crucial for designing reliable synchronous systems.

**Mitigation of Clock Skew:**

*   **Clock Tree Synthesis (CTS):** A structured approach to designing the clock distribution network to minimize skew. This involves using specialized routing techniques and buffers.
    *   **H-tree:** A common topology for clock distribution, aiming for balanced path lengths.
    *   **Clock Gating:** Turning off the clock to unused parts of the circuit can help reduce switching activity and potential skew.
*   **Buffer Insertion:** Strategically placing buffers along the clock path to equalize delays.
*   **Careful Layout and Routing:** Minimizing trace length differences and ensuring consistent electrical properties for clock traces.
*   **Use of Low-Skew Clock Buffers/Generators:** Employing specialized clock drivers designed for minimal skew.
*   **Managed Skew Techniques:** In complex designs, controlled skew might be introduced to optimize timing.

**Mitigation of Clock Jitter:**

*   **High-Quality Clock Sources:** Using stable and low-jitter oscillators or clock generators.
*   **Robust Clock Distribution Networks:** Designing distribution networks that are less susceptible to noise.
*   **Filtering:** Using filters to remove noise from the clock signal.
*   **Shielding:** Shielding clock traces to prevent external noise coupling.
*   **Careful Power Delivery Network (PDN) Design:** A stable power supply is essential for a stable clock.
*   **Using PLLs/DLLs with Low Jitter Specifications:** Selecting high-performance clock generation circuits.
*   **Timing Analysis Tools:** Using sophisticated static timing analysis (STA) tools to identify potential timing violations due to jitter and skew.

---

### 6. Practical Implications and Design Considerations

*   **Maximum Clock Frequency:** Clock skew and jitter directly limit the maximum clock frequency at which a synchronous system can operate reliably. The maximum frequency is inversely proportional to the total timing uncertainty.
*   **Setup and Hold Time Analysis:** Designers must perform thorough timing analysis, considering the worst-case scenarios of clock skew and jitter, to ensure that setup and hold time requirements are met across all operating conditions.
*   **FPGA Design:** In Field-Programmable Gate Arrays (FPGAs), the internal routing and clock management resources are critical. Understanding how the FPGA vendor's tools handle clock distribution and their specifications for skew and jitter is important.
*   **ASIC Design:** In Application-Specific Integrated Circuits (ASICs), designers have more control over the physical layout and clock distribution network, allowing for more sophisticated skew management.

---

### 7. Connection to Course Outcomes (COs)

*   **CO1: Analyze asynchronous and clocked synchronous sequential circuits.**
    *   Understanding clock skew and jitter is fundamental to analyzing the behavior and timing constraints of clocked synchronous sequential circuits. These practical issues introduce timing variations that must be accounted for in the analysis.
*   **CO2: Design hazard-free digital circuits.**
    *   While this topic is about timing issues in sequential circuits, it's important to note that hazards are also timing-dependent issues in combinational circuits. The precision required to manage clock skew and jitter emphasizes the broader importance of timing in digital design. Incorrect clocking can effectively make a well-designed hazard-free combinational circuit behave as if it has hazards due to data arriving at the wrong time.
*   **CO3: Identify faults in digital circuits.**
    *   Timing failures due to excessive clock skew or jitter can be considered a type of fault or malfunction. Understanding these phenomena helps in diagnosing and preventing such timing-related issues.
*   **CO4: Apply VHDL programming in digital system design.**
    *   When using VHDL (or Verilog) to describe sequential circuits, timing constraints related to clock periods, setup, and hold times are implicitly or explicitly defined. Designers must be aware of the underlying physical realities of clock skew and jitter that can affect the actual performance of the synthesized hardware. Simulation tools often allow for the modeling of clock jitter and skew to verify designs under realistic conditions.

---

### 8. Key Points to Remember

*   **Clock Skew:** Difference in clock arrival times at different clocked elements. Caused by distribution network variations.
*   **Clock Jitter:** Variation in clock edge timing from its ideal position. Caused by noise and instability in clock generation/distribution.
*   Both skew and jitter reduce timing margins and can lead to setup and hold time violations.
*   They directly limit the maximum operating frequency of synchronous systems.
*   Mitigation involves careful clock tree design, high-quality clock sources, and robust distribution networks.
*   Timing analysis tools are essential for characterizing and verifying designs against skew and jitter.

---

### 9. Practice Questions and Exercises

**Question 1:** Define clock skew and clock jitter. What are the primary causes for each?

**Answer:**
*   **Clock Skew:** The difference in arrival times of the clock signal at the clock input of different sequential elements. Causes include variations in the clock distribution network (wire lengths, buffer delays), load capacitances, temperature, and voltage.
*   **Clock Jitter:** The unwanted variation or deviation of the clock signal's edges from their ideal periodic positions. Causes include electrical noise, power supply variations, characteristics of clock generators (oscillators, PLLs), temperature, and voltage.

---

**Question 2:** Explain how clock skew can lead to a setup time violation in a sequential circuit.

**Answer:**
A setup time violation occurs if the data at the input of a flip-flop is not stable for the required duration before the active clock edge arrives. If clock skew causes the clock to arrive *earlier* at a destination flip-flop than at the source flip-flop providing the data, the data might still be transitioning and not yet stable by the time the earlier clock edge arrives at the destination flip-flop. This violates the setup time requirement, leading to incorrect data capture.

---

**Question 3:** A synchronous system has a clock period of 20 ns. The combinational logic between two flip-flops has a maximum propagation delay of 8 ns. The setup time of the destination flip-flop is 2 ns, and its clock-to-output delay is 1 ns. If there is a clock skew of 3 ns (clock arrives 3 ns later at the destination flip-flop), will the setup time be violated?

**Solution:**

Let:
*   $T$ = Clock Period = 20 ns
*   $t_{pd}$ = Propagation delay of combinational logic = 8 ns
*   $t_{setup}$ = Setup time of destination flip-flop = 2 ns
*   $t_{clk\_to\_q}$ = Clock-to-output delay of source flip-flop = 1 ns
*   $t_{skew}$ = Clock skew = 3 ns (destination receives clock 3 ns later)

For correct setup time, the data must arrive at the destination flip-flop at least $t_{setup}$ before the clock edge arrives at the destination flip-flop.

Let the clock edge arrive at the source flip-flop at time $t_{edge\_src}$.
The data becomes available from the source flip-flop at $t_{edge\_src} + t_{clk\_to\_q} = t_{edge\_src} + 1$ ns.
This data propagates through the combinational logic, taking $t_{pd} = 8$ ns.
So, the data arrives at the input of the destination flip-flop at $t_{edge\_src} + 1 + 8 = t_{edge\_src} + 9$ ns.

The clock edge arrives at the destination flip-flop at $t_{edge\_dest} = t_{edge\_src} + t_{skew} = t_{edge\_src} + 3$ ns.

For no setup time violation:
Data Arrival Time $\le$ Clock Arrival Time - $t_{setup}$
$t_{edge\_src} + 9 \le (t_{edge\_src} + 3) - 2$
$t_{edge\_src} + 9 \le t_{edge\_src} + 1$
$9 \le 1$

This inequality is false. Therefore, the setup time is violated.

**Answer:** Yes, the setup time is violated. The data arrives at the destination flip-flop too late relative to its clock edge.

---

**Question 4:** What are some common techniques to minimize clock skew in ASIC design?

**Answer:**
Common techniques include:
*   **Clock Tree Synthesis (CTS):** Using structured and balanced clock tree architectures like H-trees.
*   **Buffer Insertion:** Adding buffers strategically to equalize delays along different clock paths.
*   **Matching Trace Lengths:** Ensuring clock traces to critical components have similar lengths.
*   **Using Low-Skew Clock Drivers:** Employing high-performance clock distribution buffers.
*   **Clock Gating:** selectively disabling clocks to unused circuit blocks.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 10. Further Reading and References

*   **Digital Principles & Design by Donald G Givone:** Chapter on sequential circuit timing, which often discusses clocking issues.
*   **Digital Design with an introduction to HDL, VHDL and Verilog by M.Morris Mano and Michel.D.Ciletti:** Chapters on sequential circuits and timing analysis.
*   **Digital Design by John F Wakerly:** Comprehensive coverage of sequential circuit design and timing considerations, including skew and jitter.
*   **Digital Systems Testing and Testable Design by Miron Abramovici, Melvin A. Breuer and Arthur D. Friedman:** May discuss timing faults and their impact.

---