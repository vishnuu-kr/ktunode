---
title: "Practical issues- clock skew and jitter"
subject: "DIGITAL SYSTEM DESIGN"
module: "Module 3: Hazards – static and dynamic hazards in combinational networks"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f362fe"
status: "completed"
scrapedAt: "2026-05-23T16:21:10.791Z"
---
## DIGITAL SYSTEM DESIGN: Module 3 - Hazards in Combinational Networks

### Topic: Practical Issues - Clock Skew and Jitter

---

**Learning Outcomes:**

*   Understand the impact of clock skew on synchronous digital systems.
*   Understand the impact of clock jitter on synchronous digital systems.
*   Identify situations where clock skew and jitter can lead to functional failures.
*   Recognize basic strategies for mitigating the effects of clock skew and jitter.

**Knowledge Level (K3):** Analyze, Design

**Course Outcomes Alignment:**

*   **CO1: Analyze asynchronous and clocked synchronous sequential circuits.** Understanding clock skew and jitter is crucial for analyzing the behavior and timing constraints of clocked synchronous sequential circuits, especially in complex designs.
*   **CO2: Design hazard-free digital circuits.** While hazards are primarily a concern in combinational logic, clock skew and jitter are critical *timing* issues that affect the reliable operation of sequential circuits, which are built upon combinational logic.
*   **CO3: Identify faults in digital circuits.** Clock skew and jitter can manifest as timing faults, leading to incorrect operation that might be misdiagnosed as other types of faults.
*   **CO4: Apply VHDL programming in digital system design.** Understanding clock skew and jitter is essential for writing VHDL code that accounts for timing constraints and ensures correct synthesis and simulation behavior.

---

### 1. Introduction to Clock Signals

A **clock signal** is a periodic digital signal that synchronizes the operation of all components in a synchronous digital system. It dictates when data is captured or updated in sequential elements like flip-flops. Ideally, a single clock signal is distributed to all clocked elements simultaneously.

**Key Concept:** Synchronous systems rely on a precise and consistent clock signal to function correctly.

---

### 2. Clock Skew

**Definition:** **Clock skew** is the phenomenon where the clock signal arrives at different sequential elements at different times. This difference in arrival times is due to variations in the propagation delays of the clock distribution network.

**Causes of Clock Skew:**

*   **Wire Length Variations:** Different paths in the clock distribution network have different physical lengths, leading to different propagation delays.
*   **Buffer Delays:** The clock signal often passes through multiple buffers or clock trees for amplification and distribution. Variations in the delays of these buffers contribute to skew.
*   **Device Loading:** The load presented by the sequential elements being driven by the clock can vary, affecting the clock signal's arrival time.
*   **Process Variations:** Manufacturing variations in integrated circuits can lead to slight differences in the intrinsic delays of clock network components.
*   **Temperature Variations:** Temperature changes can affect the propagation delays of transistors and wires.

**Types of Clock Skew:**

*   **Dispersive Skew:** The skew varies over time due to dynamic factors like temperature or voltage fluctuations.
*   **Non-Dispersive Skew:** The skew is relatively constant over time.

**Impact of Clock Skew on Synchronous Systems:**

Clock skew directly affects the **setup time** and **hold time** requirements of flip-flops.

*   **Setup Time:** The time interval during which the data input must be stable *before* the active clock edge.
*   **Hold Time:** The time interval during which the data input must be stable *after* the active clock edge.

Let's consider a simple synchronous system with a master flip-flop (FF_M) and a slave flip-flop (FF_S) connected in series, both driven by the same clock.

*   Let $T_{clk\_arrival\_M}$ be the arrival time of the clock at FF_M.
*   Let $T_{clk\_arrival\_S}$ be the arrival time of the clock at FF_S.
*   The **clock skew** between FF_M and FF_S is $\Delta T_{skew} = T_{clk\_arrival\_S} - T_{clk\_arrival\_M}$.

**Scenario 1: Setup Time Violation (Most Common Issue)**

If FF_S receives the clock *later* than FF_M ($\Delta T_{skew} > 0$), and the combinational logic between FF_M and FF_S has a propagation delay of $T_{pl}$, the data at the input of FF_S will be stable at $T_{clk\_arrival\_M} + T_{pl}$.

For FF_S to capture the data correctly, this data must be stable at least $T_{setup\_S}$ before its clock edge.
So, we need:
$T_{clk\_arrival\_M} + T_{pl} \ge T_{clk\_arrival\_S} + T_{setup\_S}$

Rearranging for skew:
$T_{pl} - T_{setup\_S} \ge T_{clk\_arrival\_S} - T_{clk\_arrival\_M}$
$T_{pl} - T_{setup\_S} \ge \Delta T_{skew}$

If $\Delta T_{skew} > T_{pl} - T_{setup\_S}$, a setup time violation occurs. The data at FF_S will not have stabilized by the time its clock edge arrives, leading to an unpredictable output.

**Scenario 2: Hold Time Violation**

If FF_M receives the clock *earlier* than FF_S ($\Delta T_{skew} < 0$), and the combinational logic has a propagation delay of $T_{pl}$, the output of FF_M changes at $T_{clk\_arrival\_M} + T_{pd(FF\_M)}$, where $T_{pd(FF\_M)}$ is the propagation delay of FF_M.

For FF_S to capture the data correctly, the data at its input must remain stable for at least $T_{hold\_S}$ after its clock edge.
So, we need:
$T_{clk\_arrival\_S} + T_{hold\_S} \le T_{clk\_arrival\_M} + T_{pd(FF\_M)}$

Rearranging for skew:
$T_{hold\_S} + T_{pd(FF\_M)} \le T_{clk\_arrival\_M} - T_{clk\_arrival\_S}$
$T_{hold\_S} + T_{pd(FF\_M)} \le -\Delta T_{skew}$

If $-\Delta T_{skew} < T_{hold\_S} + T_{pd(FF\_M)}$, a hold time violation occurs. The data at FF_S changes too soon after its clock edge, leading to unpredictable output.

**Key Takeaway:** Positive skew (clock arrives later at a flip-flop) is more likely to cause setup time violations, while negative skew (clock arrives earlier) is more likely to cause hold time violations.

**Wakerly (4/e):** Chapter 7 discusses synchronous sequential circuit design and timing analysis, including setup and hold times, which are directly impacted by clock skew.
**Mano & Ciletti (6/e):** Chapter 5 covers sequential logic and timing considerations. Section 5.8, "Sequential Circuit Timing," is relevant.

**Example:**

Consider two flip-flops, FF1 and FF2, connected in series. The clock signal reaches FF1 at time $T$ and FF2 at time $T + 0.5$ ns. The combinational logic between them has a propagation delay of 2 ns. FF1 and FF2 have $T_{setup} = 1$ ns and $T_{hold} = 0.5$ ns. $T_{pd(FF1)} = 0.8$ ns.

*   Clock skew: $\Delta T_{skew} = 0.5$ ns (positive skew at FF2).

*   **Setup Time Check:**
    Data at FF2 input will be stable at $T + 2$ ns.
    Clock arrives at FF2 at $T + 0.5$ ns.
    Required stability time for FF2: $(T + 0.5 \text{ ns}) + T_{setup} = (T + 0.5 \text{ ns}) + 1 \text{ ns} = T + 1.5$ ns.
    Is $T + 2 \text{ ns} \ge T + 1.5 \text{ ns}$? Yes. Setup time is met.

*   **Hold Time Check:**
    Output of FF1 is stable at $T + 0.8$ ns.
    Clock arrives at FF2 at $T + 0.5$ ns.
    Data must be stable after clock edge for $T_{hold}$: $(T + 0.5 \text{ ns}) + T_{hold} = (T + 0.5 \text{ ns}) + 0.5 \text{ ns} = T + 1.0$ ns.
    Is $T + 0.8 \text{ ns} \le T + 1.0 \text{ ns}$? Yes. Hold time is met.

Now, let's swap the arrival times: FF1 at $T + 0.5$ ns, FF2 at $T$.

*   Clock skew: $\Delta T_{skew} = -0.5$ ns (negative skew at FF2).

*   **Setup Time Check:**
    Data at FF2 input will be stable at $(T + 0.5 \text{ ns}) + 2 \text{ ns} = T + 2.5$ ns.
    Clock arrives at FF2 at $T$.
    Required stability time for FF2: $T + T_{setup} = T + 1$ ns.
    Is $T + 2.5 \text{ ns} \ge T + 1 \text{ ns}$? Yes. Setup time is met.

*   **Hold Time Check:**
    Output of FF1 is stable at $(T + 0.5 \text{ ns}) + 0.8 \text{ ns} = T + 1.3$ ns.
    Clock arrives at FF2 at $T$.
    Data must be stable after clock edge for $T_{hold}$: $T + T_{hold} = T + 0.5$ ns.
    Is $T + 1.3 \text{ ns} \le T + 0.5 \text{ ns}$? **No.** Hold time violation! The output of FF1 is not stable at FF2's clock edge for the required hold time duration.

---

### 3. Clock Jitter

**Definition:** **Clock jitter** is the unintended variation in the timing of clock signal edges from their ideal positions. It's a temporal deviation of the clock period from its nominal value.

**Causes of Clock Jitter:**

*   **Noise:** Electrical noise in the power supply or signal lines can perturb the clock signal's timing.
*   **Oscillator Instability:** The crystal oscillator or other timing sources used to generate the clock are not perfectly stable.
*   **Process Variations:** Similar to skew, variations in device manufacturing can affect oscillator frequency and stability.
*   **Temperature and Voltage Fluctuations:** These can impact the characteristics of timing components and circuits.
*   **Interference:** Electromagnetic interference (EMI) or crosstalk from other signals can couple into the clock lines.

**Types of Clock Jitter:**

*   **Periodic Jitter:** Jitter that repeats with a regular pattern, often caused by interference from other periodic signals in the system.
*   **Random Jitter (RJ):** Unpredictable variations in clock timing, often modeled as a Gaussian distribution.
*   **Bounded Jitter:** Jitter that is limited to a certain maximum deviation.
*   **Data-Dependent Jitter (DDJ):** Jitter caused by the data being transmitted, often due to intersymbol interference (ISI) or signal reflections.
*   **Duty Cycle Distortion (DCD):** A specific type of jitter where the pulse width of the clock signal varies, leading to an unequal duty cycle.

**Impact of Clock Jitter on Synchronous Systems:**

Clock jitter effectively reduces the available time for data to propagate and be stable before a flip-flop captures it. It contributes to uncertainty in the timing of clock edges.

Consider the **total timing uncertainty** at a flip-flop:
$T_{uncertainty} = T_{skew} + T_{jitter}$

*   **Setup Time Violation:** Jitter, like skew, can cause a setup time violation. If a clock edge arrives *earlier* than expected due to jitter, and the data hasn't stabilized, a violation can occur. The effective setup time required increases.
*   **Hold Time Violation:** If a clock edge arrives *later* than expected due to jitter, and the data has already changed at the input of the next flip-flop, a hold time violation can occur. The effective hold time required decreases.

**Mano & Ciletti (6/e):** While not a dedicated section on jitter itself, the timing analysis concepts in Chapter 5 (Sequential Circuit Timing) implicitly cover the effects of jitter as a source of timing uncertainty.
**Givone (1/e):** Likely discusses timing constraints in sequential circuits, where jitter would be a factor impacting those constraints.

**Example:**

Suppose a flip-flop has a clock period of 10 ns. The combinational logic delay is 3 ns. The setup time of the flip-flop is 1 ns.

*   **Ideal Case (no skew, no jitter):**
    Data is available at the input of the FF at 3 ns after the clock edge.
    The next clock edge arrives at 10 ns.
    Data must be stable for 1 ns before the edge. So, data must be stable by $10 \text{ ns} - 1 \text{ ns} = 9$ ns.
    Since data is available at 3 ns, and stable by 9 ns, this is met.

*   **Case with Jitter:**
    Let's assume the clock edge at the flip-flop can arrive anywhere within a $\pm 0.5$ ns window around its ideal time due to jitter.

    *   **Worst-case for Setup:** The clock edge arrives 0.5 ns *early* (at 9.5 ns).
        Data is available at 3 ns.
        Data must be stable by $9.5 \text{ ns} - 1 \text{ ns} = 8.5$ ns.
        Data is stable at 3 ns, so this is met.

    *   **Worst-case for Hold:** The clock edge arrives 0.5 ns *late* (at 10.5 ns).
        The output of the previous flip-flop (assuming 1 ns propagation delay) changes at $1 \text{ ns} + 1 \text{ ns} = 2 \text{ ns}$ after the first clock edge.
        Hold time is 0.5 ns. So, data must be stable for 0.5 ns after the clock edge.
        The clock edge is at 10.5 ns. Data must be stable until $10.5 \text{ ns} + 0.5 \text{ ns} = 11.0$ ns.
        Data from the previous FF becomes available at 2 ns. The *next* data input would arrive after the output of the previous FF has changed, which is around 2 ns.
        The critical factor for hold time is when the *next* data input to FF2 arrives. If the previous FF's output changes *after* the clock edge of FF2 + hold time, then hold is met.
        Let's reconsider the hold time violation with jitter:
        The data at FF2's input is determined by FF1's output. FF1 output changes at $T_{clk\_FF1} + T_{pd(FF1)}$.
        The clock for FF2 arrives at $T_{clk\_FF2}$.
        Hold time requires $T_{clk\_FF2} + T_{hold} \le T_{clk\_FF1} + T_{pd(FF1)}$.
        If clock edge for FF2 arrives *late* by jitter (say, at $10.5$ ns), the condition becomes:
        $10.5 \text{ ns} + 0.5 \text{ ns} \le T_{clk\_FF1} + T_{pd(FF1)}$.
        If $T_{clk\_FF1}$ is ideal (10 ns) and $T_{pd(FF1)}$ is 1 ns, then $11.0 \text{ ns} \le 10 \text{ ns} + 1 \text{ ns} = 11.0 \text{ ns}$. This seems met.

        However, jitter's cumulative effect is important. Imagine a sequence of operations. If jitter causes a clock edge to be late, it effectively shortens the clock period *for that cycle*. This can be problematic for hold times.

        A more direct way to think about jitter's impact:
        The *effective* clock period is the nominal period minus the maximum jitter.
        Minimum clock period $T_{min\_period} = T_{nominal} - T_{jitter\_peak-to-peak}$.
        This minimum period must accommodate the combinational delay plus setup time.
        $T_{min\_period} \ge T_{pl} + T_{setup}$

        Similarly, the *effective* hold time window is reduced by jitter.
        The data from the previous stage is $T_{pl}$ after its clock edge. The current stage's clock edge is at $T_{clk}$. Hold time is violated if $T_{clk} + T_{hold} < T_{clk\_prev} + T_{pl}$.
        With jitter, the arrival time of $T_{clk}$ can vary. The critical case for hold is when $T_{clk}$ arrives as late as possible, while $T_{clk\_prev}$ arrives as early as possible (if skew is involved too, but considering jitter alone).
        The data must be stable for $T_{hold}$ after the clock edge. If the clock edge is late, it means the time between the previous edge and the current edge is effectively shorter than the nominal period. This reduces the time available for the data to become stable after the *previous* clock edge.

        **Key point from Mano & Ciletti (timing):** The total time available for propagation is the clock period minus setup and hold times. Jitter reduces this available time window.

---

### 4. Practical Implications and Mitigation Strategies

*   **System Clock Frequency:** Clock skew and jitter limit the maximum clock frequency at which a synchronous system can reliably operate.
*   **Timing Closure:** In complex ASIC and FPGA designs, achieving "timing closure" (ensuring all timing paths meet their requirements) is heavily influenced by managing clock skew and jitter.

**Mitigation Strategies:**

*   **Clock Tree Synthesis (CTS):** Sophisticated algorithms are used to design clock distribution networks that minimize skew. This often involves balancing wire lengths and buffer insertion.
    *   **Buffer Insertion:** Adding buffers to segments of the clock network to equalize delays.
    *   **Clock Gating:** Turning off the clock to inactive parts of the circuit to save power, but must be done carefully to avoid introducing skew.
*   **Clock Meshes:** For very high-speed designs, a grid-like clock mesh can provide more uniform clock distribution than a simple tree.
*   **Phase-Locked Loops (PLLs) and Delay-Locked Loops (DLLs):** These circuits can be used to generate and distribute clock signals with reduced jitter and to synchronize clocks across different parts of a chip.
*   **Clock Domain Crossing (CDC) Techniques:** When data needs to be transferred between different clock domains (with different clock frequencies or phases), special synchronization circuits (e.g., two-flip-flop synchronizers) are used to prevent metastability, which can be exacerbated by skew and jitter.
*   **Timing Constraints in HDL:** In VHDL or Verilog, designers specify timing constraints (clock periods, setup/hold times) that synthesis and place-and-route tools use to optimize the design and check for violations. Understanding skew and jitter is crucial for setting these constraints appropriately.
*   **Guard Bands:** Designers often add extra timing margins (guard bands) to account for unpredictable skew and jitter, effectively reducing the maximum operating frequency slightly to ensure reliability.
*   **Using Flip-Flops with Lower Setup/Hold Times:** Choosing flip-flops that are less sensitive to timing variations can help.

**Reference Books:**

*   **Abramovici, Breuer, & Friedman:** Likely discusses timing analysis and fault modeling, where clocking imperfections are considered.
*   **Haskell & Hanna:** FPGA-specific design, which heavily relies on managing clock distribution and timing.
*   **Roth (TMH):** Digital System Design Using VHDL would cover timing considerations in HDL-based design.

---

### 5. Practice Questions and Exercises

**Question 1:** Define clock skew and clock jitter. What are the primary causes of each in digital systems?

**Answer:**
*   **Clock Skew:** The difference in arrival times of a clock signal at different sequential elements. Causes include wire length variations, buffer delays, device loading, and manufacturing process variations.
*   **Clock Jitter:** The unintended variation in the timing of clock signal edges from their ideal positions. Causes include noise, oscillator instability, temperature/voltage fluctuations, and interference.

---

**Question 2:** Consider a synchronous system where a flip-flop receives data from a combinational logic block. The clock period is 20 ns. The combinational logic has a propagation delay of 8 ns. The flip-flop has a setup time of 2 ns and a hold time of 1 ns.

a)  What is the maximum allowable clock skew that can be tolerated before a setup time violation occurs if the clock reaches the flip-flop at the nominal time?

b)  What is the minimum clock frequency the system can run at, assuming no skew or jitter?

**Answer:**

a)  **Setup Time Analysis:**
    Data arrives at the flip-flop input at $8$ ns after the clock edge at the previous stage.
    The flip-flop needs the data to be stable $2$ ns before its clock edge.
    So, data must be stable by $T_{clk} - 2$ ns.
    Data is stable at $T_{clk\_prev} + 8$ ns.
    Let's assume $T_{clk\_prev}$ is at time 0. Data is stable at 8 ns.
    The flip-flop's clock arrives at time $T_{clk}$.
    For no setup violation: $T_{clk\_prev} + 8 \text{ ns} \ge T_{clk} + 2 \text{ ns}$.
    If clock arrival is delayed by skew $\Delta T_{skew} = T_{clk} - T_{clk\_prev}$:
    $8 \text{ ns} \ge \Delta T_{skew} + 2 \text{ ns}$
    $\Delta T_{skew} \le 8 \text{ ns} - 2 \text{ ns}$
    $\Delta T_{skew} \le 6$ ns.
    Maximum allowable positive clock skew is 6 ns.

b)  **Minimum Clock Frequency:**
    The minimum clock period must accommodate the combinational logic delay and the setup time of the flip-flop.
    Minimum Clock Period ($T_{min}$) = Propagation Delay ($T_{pl}$) + Setup Time ($T_{setup}$)
    $T_{min} = 8 \text{ ns} + 2 \text{ ns} = 10$ ns.
    The given clock period is 20 ns, which is greater than the minimum required.
    Maximum Frequency = $1 / T_{min} = 1 / 10 \text{ ns} = 100$ MHz.
    The system can currently run at $1 / 20 \text{ ns} = 50$ MHz.

---

**Question 3:** How does clock jitter affect the reliable operation of synchronous sequential circuits, particularly in terms of setup and hold time requirements?

**Answer:**
Clock jitter introduces uncertainty in the exact timing of clock edges.
*   **Setup Time:** If jitter causes a clock edge to arrive *earlier* than expected, the data might not have reached its stable value at the flip-flop's input, potentially causing a setup time violation. This effectively reduces the available setup time.
*   **Hold Time:** If jitter causes a clock edge to arrive *later* than expected, the data at the flip-flop's input might change before the required hold time has passed since the *ideal* clock edge, potentially causing a hold time violation. This effectively reduces the available hold time. In essence, jitter shrinks the "aperture" for valid data capture.

---

### 6. Important Points to Remember

*   **Synchronous systems are critically dependent on precise clocking.**
*   **Clock skew** is the *spatial* difference in clock arrival times across different parts of a chip.
*   **Clock jitter** is the *temporal* variation in clock edge arrival times from their ideal positions.
*   Both skew and jitter reduce the timing margins (setup and hold times) available for data propagation.
*   Positive clock skew often leads to setup time violations.
*   Negative clock skew often leads to hold time violations.
*   Jitter can contribute to both setup and hold time violations by making clock edges arrive earlier or later than nominal.
*   Clock distribution networks (clock trees, meshes) are designed to minimize skew.
*   PLLs and DLLs are used to reduce jitter.
*   Timing analysis tools in EDA software are essential for verifying that designs meet timing requirements, accounting for skew and jitter budgets.
*   Understanding these concepts is vital for high-speed digital design and for setting correct timing constraints in HDL.

---
