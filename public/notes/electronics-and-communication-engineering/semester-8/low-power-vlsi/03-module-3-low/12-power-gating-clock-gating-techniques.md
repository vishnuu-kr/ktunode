---
title: "Power gating& Clock gating Techniques"
subject: "LOW POWER VLSI"
module: "Module 3: Low"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff68d"
status: "completed"
scrapedAt: "2026-05-23T18:14:51.490Z"
---
# LOW POWER VLSI - Module 3: Low Power Techniques

## Topic: Power Gating & Clock Gating Techniques

**Course Outcomes Addressed:**
*   **CO1:** Describe the impact of technology scaling on power dissipation in digital ICs and various short channel effects (Knowledge Level: K2) - *While not directly covered here, understanding power dissipation is foundational.*
*   **CO2:** Discuss the different sources of power dissipation in digital ICs. (Knowledge Level: K2) - *These techniques directly address dynamic and leakage power.*
*   **CO3:** Describe the various approaches for power management in digital ICs. (Knowledge Level: K2) - *Power gating and clock gating are core power management approaches.*
*   **CO4:** Apply various clocked and non-clocked design styles for logic implementation (Knowledge Level: K3) - *Power gating is a non-clocked approach, while clock gating is clocked.*

---

### Introduction

As Integrated Circuits (ICs) shrink and operate at higher frequencies, power dissipation becomes a critical design challenge. This module focuses on two fundamental techniques for mitigating power consumption in digital VLSI: **Power Gating** and **Clock Gating**. These techniques aim to reduce both dynamic power (switching power) and static power (leakage power) by selectively disabling or switching off parts of the circuit that are not actively in use.

---

### 1. Power Gating

#### 1.1. Concept and Objective

**Power gating** is a technique used to reduce **static (leakage) power** consumption by shutting off the power supply to blocks of a circuit when they are not in use. This effectively isolates the block and prevents current leakage through transistors.

*   **Key Idea:** If a circuit block is idle, its power supply can be turned off. This significantly reduces leakage current, which is a major contributor to overall power consumption, especially in advanced technologies with shorter channel lengths and lower threshold voltages.
*   **Objective:** To drastically reduce leakage power in idle circuit blocks.

#### 1.2. Mechanism of Power Gating

Power gating is typically implemented by introducing a **power gating switch** (often a large PMOS or NMOS transistor) in series with the power or ground rails of the block to be powered down.

*   **PMOS as High-Side Switch:** A PMOS transistor is commonly used as a high-side switch, placed between the main VDD rail and the VDD rail of the block. When the PMOS is turned off, the block is disconnected from VDD.
    *   **Control Signal:** A "sleep" or "enable" signal controls the gate of the power gating switch.
    *   **Wake-up:** To wake up the block, the sleep signal turns off the PMOS switch, reconnecting the block to VDD.
*   **NMOS as Low-Side Switch:** An NMOS transistor can also be used as a low-side switch, placed between the ground rail and the block's ground rail. When the NMOS is turned off, the block is disconnected from ground. This is less common for complete power shut-off but can be used in specific scenarios.

#### 1.3. Power Gating Topologies

*   **Single-Phase Power Gating:** The simplest form where a single switch controls the power to a block.
*   **Multi-Phase Power Gating:** Uses multiple switches to control power to different parts of a larger block, allowing for finer-grained power control.

#### 1.4. Challenges and Considerations in Power Gating

*   **Wake-up Latency:** When a power-gated block needs to be reactivated, there's a delay associated with turning on the power gating switch and allowing the block's internal state to stabilize. This is often referred to as "wake-up time."
*   **State Retention:** When a block is powered down, its internal state (e.g., flip-flop values) is lost. Techniques like **state retention flip-flops** or **context saving** might be needed if the state must be preserved during the sleep mode.
*   **Inrush Current:** When the power gating switch turns on, a large current spike (inrush current) can occur as the parasitic capacitances of the block are charged. This can cause voltage droop on the main power supply and affect other parts of the chip.
    *   **Solutions:**
        *   **Controlled Turn-on:** Gradually turning on the power gating switch.
        *   **Header/Footer Switches:** Using multiple switches to control the power delivery.
        *   **Capacitive Decoupling:** Adding capacitors to buffer the inrush current.
*   **Header vs. Footer Gating:**
    *   **Header Gating (PMOS switch):** Effectively cuts off VDD. It's generally preferred because it isolates the block from the positive supply, ensuring that even leakage through the block's VDD connections is minimized. However, PMOS transistors are typically larger and have higher resistance than NMOS.
    *   **Footer Gating (NMOS switch):** Cuts off Ground. It's generally preferred for faster turn-on times and smaller switch area but may not completely eliminate leakage paths through the substrate.

#### 1.5. Power Gating Implementation Example (Conceptual)

Consider a functional block (e.g., a DSP unit) that is only active during certain operations.

```
      VDD ----+
              |
            [PMOS Switch] <-- Sleep Control Signal
              |
      VDD_Block-+-----> [Functional Block]
                  |
                Ground
```

*   When `Sleep Control Signal` is LOW, the PMOS switch is ON, and `VDD_Block` is connected to `VDD`. The functional block operates normally.
*   When `Sleep Control Signal` is HIGH, the PMOS switch is OFF, disconnecting `VDD_Block` from `VDD`. The functional block is powered down, and leakage current is minimized.

#### 1.6. Relevance to Course Outcomes

*   **CO2:** Directly addresses leakage power, a major source of power dissipation.
*   **CO3:** A primary technique for power management by turning off unused blocks.
*   **CO4:** Power gating can be seen as a non-clocked control mechanism to disable entire logic blocks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


#### 1.7. Textbook References

*   **Baker, Li, Boyce (4/e):** Likely discusses power gating as a method to reduce leakage power in chapters related to low power design.
*   **Sedra & Smith (8/e):** While primarily an analog textbook, it covers transistor characteristics that are relevant to the design of power gating switches (e.g., large PMOS/NMOS transistors).

---

### 2. Clock Gating

#### 2.1. Concept and Objective

**Clock gating** is a technique used to reduce **dynamic power** consumption by disabling the clock signal to logic blocks that are not actively computing any results. The clock signal is a major contributor to dynamic power because it causes switching in flip-flops and other sequential elements.

*   **Key Idea:** If a circuit block's output is not needed in the next clock cycle, its clock can be gated (stopped). This prevents unnecessary switching activity within the combinational logic driven by the flip-flops and also prevents the flip-flops themselves from switching.
*   **Objective:** To reduce dynamic power consumption by eliminating unnecessary clock switching in idle or non-computing modules.

#### 2.2. Mechanism of Clock Gating

Clock gating is implemented by inserting **clock gating cells** (also known as clock enables or clock multiplexers) into the clock distribution network. These cells have an enable input that controls whether the clock signal is passed through to the downstream logic.

*   **Enable Signal:** The enable signal is typically derived from the logic itself or from an external control unit. It indicates whether the block needs to perform an operation in the current or next clock cycle.
*   **Clock Gating Cell Structure:** A basic clock gating cell can be implemented using a multiplexer (MUX) where the select signal is the enable, the data inputs are the original clock and a fixed logic value (e.g., 0), and the output is the gated clock.

#### 2.3. Types of Clock Gating

1.  **Coarse-Grained Clock Gating:** Gating the clock to large functional blocks or modules. This is simpler to implement and provides significant power savings but might miss opportunities for finer-grained optimization.
2.  **Fine-Grained Clock Gating:** Gating the clock to individual registers or small groups of logic. This offers more aggressive power savings but can be more complex to implement and verify due to the increased number of control signals.

#### 2.4. Clock Gating Techniques

*   **Simple Clock Gating (CG):** Using an enable signal to control a MUX that selects between the original clock and a known state (e.g., '0' or the previous clock state).
    *   **Issue:** Can lead to **glitches** on the gated clock output if the enable signal changes simultaneously with the clock edge. Glitches can cause unintended switching, leading to power consumption and potential functional errors.

*   **Advanced Clock Gating (e.g., Enable-Under-Transition or EUIT):** These techniques aim to prevent glitches. A common approach is to ensure that the enable signal only affects the clock when it's stable during a clock cycle, or to use latches to synchronize the enable signal with the clock.

    *   **Example: AND Gate Logic:**
        ```
        Clock_in -->+------------+
                    | CG Cell    | --> Clock_out
        Enable --->| MUX        |
                    +------------+
                       | 0
        ```
        If Enable is 1, Clock_out = Clock_in. If Enable is 0, Clock_out = 0. This is prone to glitches.

    *   **Example: Flip-flop controlled by Enable (more robust):**
        ```
             Clock_in -->+------------+
                         | D FF       | --> Enable_sync
           Enable --->---|            |
                         +------------+

             Clock_in -->+------------+
                         | MUX        | --> Clock_out
           Enable_sync -->|            |
                         +------------+
                            | 0
        ```
        This introduces a flip-flop to synchronize the enable signal, reducing glitches but adding a small latency.

#### 2.5. Challenges and Considerations in Clock Gating

*   **Control Logic Overhead:** The logic required to generate the enable signals for clock gating can consume area and power itself.
*   **Glitch Propagation:** Improperly implemented clock gating can introduce glitches into the clock network, leading to spurious transitions.
*   **Design Complexity:** Automatically inserting and verifying clock gating can be complex. Tools are crucial for this.
*   **Impact on Timing:** Clock gating can alter the effective clock frequency seen by a particular logic block, which needs to be accounted for in timing analysis.

#### 2.6. Clock Gating Implementation Example (Conceptual)

Consider a multiplier block that is only active when a 'multiply\_enable' signal is asserted.

```
      Clock_in ----+
                   |
                 [CG Cell] --> Clock_to_Multiplier
       Multiply_Enable --+

  [Multiplier Logic]  <-- Clock_to_Multiplier
```

*   When `Multiply_Enable` is HIGH, the CG cell passes `Clock_in` to `Clock_to_Multiplier`. The multiplier performs computations.
*   When `Multiply_Enable` is LOW, the CG cell disables `Clock_to_Multiplier`. The multiplier logic and its flip-flops do not switch, saving dynamic power.

#### 2.7. Relevance to Course Outcomes

*   **CO2:** Directly addresses dynamic power, a significant source of power consumption.
*   **CO3:** A fundamental technique for power management by controlling clock activity.
*   **CO4:** Directly applies to clocked design styles where clock enable signals are used to control logic.

#### 2.8. Textbook References

*   **Baker, Li, Boyce (4/e):** This book is highly likely to have detailed sections on clock gating techniques, including different implementations and their impact on power and timing.
*   **Sedra & Smith (8/e):** Provides foundational knowledge of digital logic and sequential circuits, which are the building blocks upon which clock gating is applied.

---

### 3. Comparison and Synergy of Power Gating and Clock Gating

| Feature            | Power Gating                                     | Clock Gating                                   |
| :----------------- | :----------------------------------------------- | :--------------------------------------------- |
| **Primary Goal**   | Reduce **Leakage Power**                         | Reduce **Dynamic Power**                       |
| **Mechanism**      | Shutting off VDD/Ground to a block.              | Disabling the clock to a block.                |
| **Switch Type**    | Large PMOS/NMOS transistors (Header/Footer).     | MUX-based clock gating cells.                  |
| **Impact**         | Significant leakage reduction, but introduces wake-up latency and inrush current. | Reduces switching activity, but control logic and glitches are concerns. |
| **Applicability**  | For blocks that are **idle for extended periods**. | For blocks that are **not computing every cycle**. |
| **State Retention**| State is lost unless explicit retention mechanisms are used. | State is preserved as the clock is merely stopped, not the power. |

#### Synergy:

These techniques are not mutually exclusive and are often used in conjunction to achieve maximum power savings.

1.  **Clock Gating within Active Blocks:** A functional block that is powered on (not power-gated) can still benefit from clock gating on its sub-modules if those sub-modules are not actively computing in a given cycle.
2.  **Power Gating Idle Blocks:** Blocks that are completely inactive for a long time are power-gated.
3.  **Combined Approach:** A system might power-gate a large processing unit (e.g., GPU) when not in use. Within that unit, when specific computational engines are idle, their clocks can be gated.

---

### 4. Impact of Technology Scaling (Relating to CO1)

As technology scales down (smaller feature sizes, lower supply voltages, lower threshold voltages):

*   **Leakage Power Increases:** Threshold voltages ($V_{th}$) decrease, making transistors more prone to leakage even when in the OFF state. This exacerbates the problem that power gating aims to solve.
*   **Dynamic Power per Gate Decreases (initially):** Lower $V_{dd}$ and shorter channel lengths can reduce dynamic power. However, as frequencies increase, the overall dynamic power can still rise. Clock gating is crucial for managing this.
*   **Short Channel Effects:**
    *   **Subthreshold Leakage:** Dominant in scaled technologies, directly impacting leakage power.
    *   **Gate Leakage:** As gate oxide thickness reduces, tunneling current through the gate dielectric becomes significant.
    *   **Drain-Induced Barrier Lowering (DIBL):** Reduces effective $V_{th}$ and increases leakage.
    *   **Velocity Saturation:** Affects switching speed but less directly power gating/clock gating applicability.

**In essence, power gating becomes even more critical in advanced technologies to combat the increasing leakage power. Clock gating remains essential for managing dynamic power, especially as clock frequencies continue to climb.**

---

### 5. Practice Questions & Answers

**Question 1:** What is the primary purpose of power gating?
    a) To reduce dynamic power
    b) To reduce leakage power
    c) To reduce switching capacitance
    d) To reduce short-circuit power

**Answer:** b) To reduce leakage power

**Question 2:** Which type of transistor is most commonly used as a high-side power gating switch?
    a) NMOS
    b) PMOS
    c) BJT
    d) JFET

**Answer:** b) PMOS

**Question 3:** What is a major challenge associated with power gating that needs to be managed?
    a) Increased clock frequency
    b) State retention
    c) Inrush current and wake-up latency
    d) Increased gate leakage

**Answer:** c) Inrush current and wake-up latency (State retention is also a challenge, but inrush/latency is a more immediate operational concern often discussed alongside the mechanism itself.)

**Question 4:** Clock gating primarily aims to reduce which component of power dissipation?
    a) Leakage Power
    b) Dynamic Power
    c) Static Power
    d) Dielectric Leakage

**Answer:** b) Dynamic Power

**Question 5:** What is a potential issue with simple clock gating implementations that advanced techniques aim to solve?
    a) Increased wake-up latency
    b) Voltage droop
    c) Glitches on the gated clock
    d) State loss

**Answer:** c) Glitches on the gated clock

**Question 6:** If a circuit block is only needed for 10% of the total operating time, which low-power technique would be most effective for the remaining 90% of the time? Explain why.

**Answer:** **Power gating** would be most effective. When a block is idle for such a significant duration (90%), completely shutting off its power supply via power gating will drastically reduce its leakage power. While clock gating would also reduce dynamic power if the block were to receive a clock signal but not compute, power gating eliminates virtually all current flow, including leakage, making it the superior choice for prolonged idle periods.

**Question 7:** Describe a scenario where both power gating and clock gating could be used synergistically in a mobile device's processor.

**Answer:** Consider a mobile processor with multiple cores and specialized units (e.g., GPU, DSP).
1.  **Power Gating:** When the mobile device is in a low-power standby mode or performing a task that doesn't require high performance (e.g., just displaying a static image), the entire processor or a subset of its cores could be power-gated. This eliminates leakage power from these inactive components.
2.  **Clock Gating:** When the processor is active but only one core is performing a simple task, the clock to the other cores (if not power-gated) can be gated to prevent unnecessary switching activity. Similarly, within the active core, if a specific functional unit (like an FPU or a cache controller) is not used in a particular clock cycle, its clock can be gated.

This combination ensures that leakage is minimized when parts are idle for long periods (power gating) and dynamic power is reduced when parts are active but not computing every cycle (clock gating).

---

### 6. Important Points to Remember

*   **Power Gating:** Target is **leakage power**. Achieved by switching off power to blocks. Key challenges: wake-up latency, inrush current, state retention. Commonly uses PMOS as header switch.
*   **Clock Gating:** Target is **dynamic power**. Achieved by disabling the clock to logic. Key challenges: control logic overhead, glitch generation. Essential for reducing switching activity.
*   **Synergy:** Both techniques are complementary and widely used together for maximum power savings.
*   **Technology Impact:** In advanced technologies, leakage power increases significantly, making power gating even more crucial. Dynamic power remains a concern due to higher frequencies, emphasizing the importance of clock gating.

---