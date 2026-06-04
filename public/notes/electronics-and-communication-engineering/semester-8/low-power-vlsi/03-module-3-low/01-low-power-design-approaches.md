---
title: "Low-Power Design Approaches-"
subject: "LOW POWER VLSI"
module: "Module 3: Low"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff682"
status: "completed"
scrapedAt: "2026-05-23T18:14:43.447Z"
---
## LOW POWER VLSI - Module 3: Low-Power Design Approaches

---

### **Module 3 Overview**

This module delves into the various strategies and techniques employed to minimize power consumption in VLSI circuits. We will explore different levels of design where power reduction can be targeted, from architectural choices to circuit-level implementations. Understanding these approaches is crucial for designing energy-efficient integrated circuits for a wide range of applications, from mobile devices to high-performance computing.

---

### **Learning Outcomes**

Upon successful completion of this module, you will be able to:

*   Understand the fundamental principles and methodologies for achieving low power in VLSI designs.
*   Analyze the trade-offs between power, performance, and area for various low-power design techniques.
*   Apply specific circuit-level techniques to reduce power dissipation.
*   Evaluate different architectural and system-level strategies for power optimization.

---

### **Course Outcomes Alignment**

This module directly contributes to the following Course Outcomes (COs):

*   **CO3: Describe the various approaches for power management in digital ICs. (Knowledge Level: K2)** This module provides a comprehensive overview of these approaches.
*   **CO4: Apply various clocked and non-clocked design styles for logic implementation (Knowledge Level: K3)** Specific clocked and non-clocked techniques will be discussed and their application explored.
*   **CO5: Describe the use of Adiabatic switching for power management in digital ICs. (Knowledge Level: K2)** Adiabatic techniques will be covered as a specialized low-power approach.

---

## **3.1 Introduction to Low-Power Design Approaches**

Low-power design is no longer an option but a necessity in modern VLSI systems. As feature sizes shrink and transistor density increases, power dissipation becomes a major bottleneck, leading to issues like heat generation, reduced battery life, and electromagnetic interference. This section introduces the general philosophy and hierarchical approach to low-power design.

### **3.1.1 Why Low-Power Design?**

*   **Battery Life:** Essential for portable and battery-operated devices (mobile phones, wearables, IoT devices).
*   **Heat Dissipation:** High power consumption leads to overheating, requiring complex and expensive cooling solutions. (Ref: Baker, Li, Boyce, Ch. 10)
*   **Reliability:** Excessive heat can degrade circuit performance and reduce the lifespan of the chip.
*   **Cost:** Reduced power consumption can lead to smaller package sizes, less need for heat sinks, and potentially lower manufacturing costs.
*   **Environmental Impact:** Lower power consumption contributes to energy conservation.

### **3.1.2 Hierarchical Design Approach to Low Power**

Low-power design should be considered at every level of the design hierarchy:

1.  **System Level:** Power budgeting, power-aware architecture selection, power management policies (e.g., sleep modes, dynamic voltage and frequency scaling - DVFS).
2.  **Architectural Level:** Choosing efficient data paths, pipelining strategies, memory organization, and communication protocols.
3.  **Register-Transfer Level (RTL) Design:** Optimizing control logic, clock gating, and data flow.
4.  **Gate Level:** Using low-power standard cells, optimizing logic synthesis for power.
5.  **Circuit Level:** Transistor sizing, using specialized low-power circuit techniques (e.g., multi-threshold CMOS, sleep transistors).
6.  **Layout Level:** Careful placement and routing to minimize parasitic capacitances and leakage.

**Key Concept:** **Power Dissipation Components**
Recall from previous modules (CO2), the primary sources of power dissipation are:

*   **Dynamic Power:**
    *   **Switching Power:** $P_{dyn} = \alpha \cdot C_{load} \cdot V_{dd}^2 \cdot f$ (related to charging/discharging load capacitance).
    *   **Short-Circuit Power:** Occurs when both NMOS and PMOS are momentarily on during switching.
*   **Static Power (Leakage Power):**
    *   **Subthreshold Leakage:** $I_{sub} \propto e^{(V_{gs} - V_{th})/n V_T}$
    *   **Gate Leakage:** Tunneling current through the gate oxide.
    *   **Junction Leakage:** Reverse-biased PN junction leakage.

**Important Point to Remember:** Addressing low-power design requires a holistic approach, considering all these power components at different design levels.

---

## **3.2 Architectural Level Approaches**

This section explores how power can be reduced by making intelligent decisions at the architectural and system level.

### **3.2.1 Power-Aware Architecture Design**

*   **Data Path Optimization:**
    *   **Minimize Data Movement:** Avoid unnecessary data transfers between functional units and memory.
    *   **Parallelism vs. Serialism:** Carefully balance parallelism (can increase throughput but also power) with serialism (lower throughput, lower power).
    *   **Functional Unit Selection:** Choose arithmetic units that are power-efficient for the required precision. For example, a simple adder might be sufficient instead of a complex multiplier if the operation is simple.
*   **Memory Hierarchy and Access:**
    *   **Cache Optimization:** Smaller, faster caches consume less power per access but might require more accesses. Larger caches consume more power per access but might reduce overall accesses. (Ref: Baker, Li, Boyce, Ch. 10.3.2)
    *   **Memory Organization:** Group frequently accessed data together to improve locality and reduce access time and power.
    *   **Power-Down Modes for Memory:** Architectures that can power down unused memory blocks.

### **3.2.2 Power Management Policies**

*   **Dynamic Voltage and Frequency Scaling (DVFS):**
    *   **Concept:** Adjusting the supply voltage ($V_{dd}$) and clock frequency ($f$) dynamically based on the workload. Lowering $V_{dd}$ has a squared effect on dynamic power ($V_{dd}^2$), making it a very effective technique. Lowering frequency also directly reduces dynamic power.
    *   **Implementation:** Requires a feedback mechanism to monitor performance and workload, and a voltage/frequency regulator.
    *   **Trade-off:** Lower performance when voltage/frequency are reduced.
    *   **(Ref: Baker, Li, Boyce, Ch. 10.3.1)**
    *   **Example:** A smartphone processor can run at a lower voltage and frequency when displaying static content to save battery, and ramp up when playing a video or running a game.
*   **Clock Gating:**
    *   **Concept:** Disabling the clock signal to idle modules or specific parts of modules. This significantly reduces dynamic power by preventing unnecessary switching activity. (CO3, CO4)
    *   **Types:**
        *   **Module-level Clock Gating:** Disabling the clock to entire blocks that are not in use.
        *   **Fine-grained Clock Gating:** Disabling the clock to individual flip-flops or logic gates within a block based on their specific enable signals.
    *   **Implementation:** Requires adding AND gates (or equivalent logic) to the clock tree of the modules being gated.
    *   **Trade-off:** Adds some gate delay and area overhead for the gating logic.
    *   **(Ref: Baker, Li, Boyce, Ch. 10.2.2.1)**
    *   **Example:** In a pipelined processor, if a stage is not actively processing data, its clock can be gated.
*   **Power Gating (Sleep Transistors):**
    *   **Concept:** Shutting off the power supply ($V_{dd}$) to idle blocks using high-performance sleep transistors (typically PMOS). This drastically reduces static leakage power in those blocks.
    *   **Implementation:** Requires additional sleep transistors and control logic to manage the power gating.
    *   **Trade-off:**
        *   **Wake-up Latency:** Re-enabling the power and stabilizing the voltage in a block takes time.
        *   **Rush Current:** When powering up, a large current surge can occur, which needs to be managed.
        *   **State Retention:** The state of registers in the powered-down block is lost. Techniques like state retention flip-flops or saving state to other powered blocks might be needed.
    *   **(Ref: Baker, Li, Boyce, Ch. 10.2.3)**
    *   **Example:** A CPU core that is not currently executing instructions can be power-gated to save leakage power.

### **3.2.3 Data Encoding and Activity Reduction**

*   **Concept:** Reducing the number of transitions (switching activity) in the circuit. Since dynamic power is proportional to activity factor ($\alpha$), reducing transitions directly reduces power.
*   **Techniques:**
    *   **One-Hot Encoding:** Can sometimes reduce transitions compared to binary encoding, but increases the number of gates and area.
    *   **Bus Encoding Schemes:**
        *   **Gray Coding:** Adjacent values differ by only one bit, minimizing transitions on data buses.
        *   **Transition-Minimizing Differential Signaling (TMDS):** Used in interfaces like HDMI to encode data for reduced transitions.
        *   **Encoded Schemes (e.g., Idle-Zero, Idle-One, Sentinel Encoding):** Add extra bits to data words to indicate when data is idle or has changed, allowing for bus inactivity detection and clock gating.
*   **(Ref: Baker, Li, Boyce, Ch. 10.2.1.1)**

---

## **3.3 Logic and Circuit Level Approaches**

This section focuses on techniques that can be applied at the gate and circuit levels to reduce power consumption.

### **3.3.1 Transistor Sizing**

*   **Concept:** Optimizing the width (W) of transistors to achieve a balance between performance (delay) and power.
*   **Impact:**
    *   **Larger W:** Lower resistance, faster switching, but higher input capacitance (leading to more power consumption during switching of preceding gates) and higher leakage.
    *   **Smaller W:** Higher resistance, slower switching, but lower capacitance and leakage.
*   **Approach:**
    *   For performance-critical paths, transistors might be sized up.
    *   For non-critical paths, transistors can be sized down to reduce power.
    *   **Leaky NMOS/PMOS:** Sizing PMOS wider than NMOS to balance pull-up and pull-down times can reduce short-circuit power.
*   **(Ref: Razavi, Ch. 4.5.1 - Transistor Sizing in Digital Gates, Sedra & Smith, Ch. 5.4.3 - Design of Digital Logic Gates)**

### **3.3.2 Multi-Vdd and Multi-Threshold CMOS (MTCMOS)**

*   **Concept:** Using transistors with different threshold voltages ($V_{th}$) and/or multiple supply voltages ($V_{dd}$) in the same circuit to achieve a power/performance trade-off.
*   **Multi-Threshold CMOS (MTCMOS):**
    *   **High $V_{th}$ Transistors:** Used for critical paths or performance-sensitive logic to reduce leakage.
    *   **Low $V_{th}$ Transistors:** Used for non-critical paths to achieve higher speed.
    *   **Challenge:** Managing the increased complexity of libraries and fabrication.
    *   **(Ref: Baker, Li, Boyce, Ch. 10.2.3.1 - Sleep Transistor Technique is a form of MTCMOS)**
*   **Multi-Vdd CMOS:**
    *   **Concept:** Using a higher $V_{dd}$ for performance-critical blocks and a lower $V_{dd}$ for less performance-critical blocks.
    *   **Level Shifters:** Required to interface between blocks operating at different voltages.
    *   **Benefits:** Significant reduction in dynamic power for blocks operating at lower $V_{dd}$.
    *   **(Ref: Baker, Li, Boyce, Ch. 10.3.1 - DVFS is a form of Multi-Vdd)**

### **3.3.3 Stack Effect**

*   **Concept:** Series-connected transistors (in a stack) share the voltage drop. This reduces the effective gate-to-source voltage ($V_{gs}$) for transistors further down the stack, thus reducing their subthreshold leakage.
*   **Implementation:**
    *   Can be achieved by using multiple transistors in series in logic gates, rather than a single transistor, especially in pull-up or pull-down networks.
    *   Example: A static CMOS gate with a wider transistor in series with a narrower transistor to improve leakage.
*   **Trade-off:** Increases delay and area.
*   **(Ref: Sedra & Smith, Ch. 5.4.1 - CMOS Inverter - delay and power discussion hints at series transistor impact)**

### **3.3.4 Adiabatic Switching (Reversible Computing)**

*   **Concept:** Adiabatic switching aims to minimize energy dissipation during switching by transferring charge slowly and controllably, ideally dissipating zero energy during the transition. This is achieved by making the voltage across the switching transistor infinitesimally small during the switching event. (CO5)
*   **Energy Dissipation in Conventional CMOS:** The energy dissipated in charging/discharging a capacitance $C$ to voltage $V_{dd}$ is $CV_{dd}^2$. In adiabatic circuits, this energy is ideally recovered and reused.
*   **Ideal Adiabatic Logic:** Energy dissipated per transition is ideally $E_{diss} = \int i(t) V(t) dt$. In adiabatic logic, the voltage across the transistor is controlled to be very small during switching.
*   **How it Works:**
    *   Uses a time-varying power supply (e.g., sinusoidal or trapezoidal waveform) instead of a fixed $V_{dd}$.
    *   Logic gates are designed with transistors that act as controlled switches, charging and discharging capacitors gradually.
    *   Often requires more complex circuitry and a different clocking scheme.
*   **Types of Adiabatic Circuits:**
    *   **Single-phase power-clocked adiabatic logic:** Uses a single clock signal to control voltage and timing.
    *   **Two-phase power-clocked adiabatic logic:** Uses two interleaved clock signals.
    *   **Four-phase power-clocked adiabatic logic:** Uses four interleaved clock signals.
*   **Trade-offs:**
    *   **Performance:** Significantly slower than conventional CMOS due to gradual switching.
    *   **Complexity:** Requires more complex clocking circuitry and often more transistors per gate.
    *   **Area:** Larger area overhead.
    *   **Limited Applicability:** Currently more suited for specialized applications where extreme low power is critical, and performance is secondary.
*   **(Ref: Baker, Li, Boyce, Ch. 10.4 - Advanced Low Power Techniques often includes adiabatic logic)**
*   **Example:** EON (Efficient Or-Inverter) logic, Positive Feedback Adiabatic Logic (PFAL).

### **3.3.5 Logic Synthesis and Optimization for Power**

*   **Concept:** Using Electronic Design Automation (EDA) tools to optimize the logic design for power during synthesis.
*   **Techniques Employed by Tools:**
    *   **Library Selection:** Using low-power cell libraries (e.g., cells with higher $V_{th}$ or reduced drive strength).
    *   **Clock Gating Insertion:** Automatic insertion of clock gates where appropriate.
    *   **Retiming:** Moving flip-flops across combinational logic to balance delays and potentially reduce switching activity.
    *   **Logic Restructuring:** Reorganizing logic to minimize gate count and depth, which can reduce capacitance and transitions.
    *   **Buffer Insertion/Deletion:** Optimizing buffer placement for balanced delays and reduced capacitance.
*   **(Ref: Baker, Li, Boyce, Ch. 10.1.1 - Power Optimization during Synthesis)**

---

## **3.4 Low-Power Design Styles (Clocked vs. Non-Clocked)**

This section differentiates between design styles based on their clocking strategy and how it impacts power.

### **3.4.1 Clocked Design Styles**

*   **Concept:** Circuits where the state transitions are synchronized by a global or local clock signal. This is the dominant style in digital VLSI.
*   **Examples:**
    *   **Synchronous Design:** All state elements (flip-flops) are clocked by the same clock signal.
        *   **Advantages:** Simpler design, easier verification, predictable behavior.
        *   **Disadvantages:** Clock distribution network can be a major power consumer. All flip-flops toggle if not gated, even if their output doesn't change.
    *   **Asynchronous Design (partially or fully):** Operates without a global clock. State transitions are triggered by local handshaking signals between logic blocks.
        *   **Advantages:**
            *   **Zero Clock Power:** Eliminates power consumption of the clock distribution network.
            *   **Activity-Proportional Power:** Power consumption is directly proportional to the useful work being done, as there are no unnecessary transitions due to a global clock.
            *   **Self-Delaying Logic:** Logic automatically adjusts to process data at its own speed, potentially offering performance benefits.
        *   **Disadvantages:**
            *   **Design Complexity:** Much harder to design, verify, and debug. Requires specialized tools and expertise.
            *   **Setup/Hold Time Issues:** Needs careful handling of timing without a global clock.
            *   **Power Consumption of Handshaking:** Handshaking logic can consume power.
            *   **Area Overhead:** Often requires more transistors for handshaking logic.
*   **(Ref: Sedra & Smith, Ch. 10.5 - Synchronous Counters and Registers, Ch. 10.6 - State Machine Design - implies clocked nature. Asynchronous aspects are typically discussed in more advanced VLSI texts, but the concept of avoiding global clocks is key.)**

### **3.4.2 Non-Clocked Logic Styles**

*   **Concept:** Logic that does not rely on a periodic clock signal for operation. While fully asynchronous circuits are one example, this can also refer to combinational logic that is not part of a clocked state transition.
*   **Truly Non-Clocked (Combinational Logic):**
    *   **Definition:** Purely combinational logic gates (AND, OR, NOT, XOR, MUX) do not have memory elements and their output changes instantaneously (within propagation delay) with input changes. They don't inherently require a clock to function.
    *   **Power Consideration:** The power consumed by combinational logic is due to switching activity on its inputs. This can be reduced through techniques like logic synthesis for activity reduction and using low-power cells.
*   **Self-Timed Logic:**
    *   **Concept:** A form of asynchronous logic where each gate or block has its own local timing mechanism (e.g., using delay elements) to control its operation. It synchronizes its output based on its inputs and internal delays, rather than a global clock.
    *   **Advantages:** Eliminates global clock power, power scales with useful work.
    *   **Disadvantages:** Design complexity, potential for race conditions if not designed carefully.
*   **(Ref: Baker, Li, Boyce, Ch. 10.2.2 - Clock Gating is a technique applied to clocked designs. Asynchronous design principles are broader.)**

**Important Point to Remember:** While synchronous clocked designs are prevalent, asynchronous or self-timed approaches offer significant potential for zero clock power and activity-proportional power, but at the cost of increased design complexity.

---

## **3.5 Practice Questions and Exercises**

**Instructions:** Attempt these questions to solidify your understanding of the module's concepts.

**Question 1:**
Which of the following techniques can effectively reduce static leakage power in a CMOS circuit?
(a) Clock Gating
(b) DVFS
(c) Power Gating using sleep transistors
(d) Bus Encoding

**Answer 1:**
(c) Power Gating using sleep transistors. Power gating shuts off the power supply to idle blocks, thereby eliminating both dynamic and static leakage power in those blocks. Clock gating reduces dynamic power, DVFS primarily reduces dynamic power (with some impact on leakage due to lower $V_{th}$ in scaled-down voltage), and bus encoding reduces dynamic power by minimizing transitions.

---

**Question 2:**
Explain the concept of clock gating and its benefit for low-power design. Provide a simple example of how a clock gate could be implemented for a flip-flop.

**Answer 2:**
**Concept:** Clock gating is a technique where the clock signal to a specific logic block or flip-flop is disabled (gated) when that block is idle or not performing any useful computation. This prevents unnecessary switching activity within the gated logic.
**Benefit:** Reduces dynamic power consumption. The dynamic power of a clock signal is $P_{dyn} = f_{clock} \cdot V_{dd}^2 \cdot C_{clock\_tree}$, where $C_{clock\_tree}$ is the capacitance of the clock tree. By preventing the clock from reaching inactive parts of the circuit, the effective switching capacitance driven by the clock is reduced, leading to significant power savings.
**Example Implementation:** To gate the clock of a flip-flop, an AND gate can be used. The clock signal is fed to one input of the AND gate, and an enable signal (which is high when the flip-flop needs to be clocked and low when it should be idle) is fed to the other input.
```
      CLK --+-----------+
            |           |
            |           |
            |  AND Gate |--- CLK_GATED
            |           |
 Enable ----+-----------+
```
When Enable is high, CLK_GATED = CLK. When Enable is low, CLK_GATED = 0, and the flip-flop will not toggle.

---

**Question 3:**
Discuss the trade-offs associated with implementing DVFS (Dynamic Voltage and Frequency Scaling) for power management.

**Answer 3:**
**Trade-offs of DVFS:**
*   **Performance Reduction:** The primary trade-off is that when voltage and frequency are reduced to save power, the processing speed also decreases. This can lead to longer execution times for tasks.
*   **Complexity of Implementation:** DVFS requires a sophisticated power management unit that can monitor workload, predict future needs, and control voltage regulators and clock generators. This adds complexity to the system design.
*   **Power Management Overhead:** The overhead associated with monitoring, decision-making, and voltage/frequency transitions themselves can consume some power and introduce latency.
*   **Dynamic Range Limitations:** There are practical limits to how much voltage and frequency can be reduced before the circuit operation becomes unreliable due to noise or process variations.
*   **Impact on Memory and I/O:** When core voltage/frequency is scaled, memory controllers and I/O interfaces might also need to be scaled, or level shifters might be required, adding complexity and potential power overhead.
*   **Not Effective for Leakage:** While DVFS reduces dynamic power significantly, its impact on static leakage power is less direct. Lowering $V_{dd}$ does reduce leakage (especially $V_{th}$ leakage), but it's not as effective as power gating for completely turning off leakage in idle blocks.

---

**Question 4:**
What is the fundamental principle behind adiabatic switching, and why is it considered a low-power technique? What are its main drawbacks?

**Answer 4:**
**Fundamental Principle:** Adiabatic switching aims to minimize energy dissipation during state transitions by transferring charge slowly and controllably. In an ideal adiabatic process, the voltage across the switching element (transistor) is kept infinitesimally small during switching, meaning the energy dissipated during a charge/discharge cycle is ideally zero ($E_{diss} \approx 0$). This is achieved by using time-varying power supplies that ramp up and down gradually, rather than fixed DC voltages. The energy that would normally be lost in charging/discharging a capacitance is ideally recovered and reused.

**Low-Power Benefit:** By ideally eliminating energy loss during transitions, adiabatic circuits can achieve significantly lower power consumption compared to conventional CMOS, where energy is lost as heat due to the finite switching speed and voltage drops.

**Main Drawbacks:**
1.  **Performance:** Adiabatic circuits are significantly slower than conventional CMOS because the switching process is gradual rather than abrupt.
2.  **Complexity:** They require more complex circuitry for generating and managing the time-varying power supplies (power clocks) and often use more transistors per logic gate (e.g., to implement the controlled charging/discharging).
3.  **Area Overhead:** The increased complexity and additional components lead to a larger silicon area.
4.  **Limited Applicability:** Due to the performance and complexity limitations, adiabatic techniques are typically considered for niche applications where ultra-low power is paramount and performance is less critical, such as in extremely low-power sensor nodes or implantable devices.

---

**Question 5:**
Consider a digital system where a particular module is active only 10% of the time. How can you significantly reduce the power consumed by this module? Discuss at least two distinct techniques.

**Answer 5:**
Two distinct techniques to significantly reduce the power consumed by a module that is active only 10% of the time are:

1.  **Clock Gating:**
    *   **Mechanism:** The clock signal to this module can be gated. When the module is not needed (90% of the time), the clock signal is disabled. This prevents all the flip-flops within the module from toggling, thereby eliminating their dynamic switching power.
    *   **Effectiveness:** Very effective for reducing dynamic power. The power saved is proportional to the fraction of time the module is idle and the switching activity within the module.

2.  **Power Gating (with Sleep Transistors):**
    *   **Mechanism:** The power supply ($V_{dd}$) to the entire module can be switched off using a high-performance PMOS transistor (sleep transistor) when the module is idle. This not only eliminates dynamic power but also drastically reduces static leakage power in the module.
    *   **Effectiveness:** Highly effective for reducing both dynamic and static power. It's particularly beneficial if the module has significant leakage current due to its circuitry or technology node.
    *   **Consideration:** Requires a mechanism to save the state of the module before powering down and to restore it upon wake-up, which adds complexity and wake-up latency.

---

## **3.6 Important Points to Remember**

*   **Power Reduction is Multi-faceted:** It must be addressed at all levels of the design hierarchy, from system architecture to physical layout.
*   **Dynamic Power Dominance:** In most modern high-performance digital circuits, dynamic power (especially switching power) is the dominant component. Reducing switching activity and capacitance is key.
*   **Leakage is Growing:** As transistor dimensions shrink, leakage power is becoming increasingly significant and must be actively managed, especially in idle states.
*   **Trade-offs are Inevitable:** Low-power techniques often come with trade-offs in terms of performance, area, or design complexity.
*   **Clock Distribution is Power Hungry:** The clock tree itself consumes a significant portion of the total power. Techniques like clock gating and asynchronous design aim to mitigate this.
*   **DVFS is a Powerful Tool:** Dynamic Voltage and Frequency Scaling offers a significant power saving mechanism by matching supply voltage and clock speed to the workload.
*   **Adiabatic Logic: Future Potential:** While complex, adiabatic switching offers a theoretical path to near-zero power dissipation during transitions, with potential for very low-power applications.

---

This concludes Module 3 on Low-Power Design Approaches. You should now have a comprehensive understanding of the various techniques available to design energy-efficient VLSI circuits.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
