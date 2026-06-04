---
title: "Pulsed power supplies"
subject: "LOW POWER VLSI"
module: "Module 4: Circuit Design Styles for Low Power"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff69a"
status: "completed"
scrapedAt: "2026-05-23T18:15:00.324Z"
---
# LOW POWER VLSI - Module 4: Circuit Design Styles for Low Power - Pulsed Power Supplies

## Introduction

This module explores various circuit design styles that contribute to low-power VLSI design. Among these, **Pulsed Power Supplies** represent a powerful technique for reducing dynamic power consumption by controlling the delivery of power to circuit blocks based on their activity. This approach directly addresses CO3 (Describe the various approaches for power management in digital ICs) by offering a dynamic power control mechanism.

## 1. Understanding Pulsed Power Supplies

### 1.1 The Need for Pulsed Power

In traditional digital circuits, power is supplied continuously to all active components, regardless of whether they are actively performing computations. This leads to significant **static power dissipation** (due to leakage currents) and **dynamic power dissipation** (due to switching activity).

*   **Dynamic Power Dissipation:** Primarily governed by the formula: $P_{dyn} = \alpha \cdot C_{load} \cdot V_{DD}^2 \cdot f$, where:
    *   $\alpha$ is the switching activity factor.
    *   $C_{load}$ is the load capacitance.
    *   $V_{DD}$ is the supply voltage.
    *   $f$ is the clock frequency.

    Even when a circuit block is not actively computing, its transistors are biased, and leakage currents still contribute to power consumption.
*   **Challenge:** How to reduce power consumption when a circuit block is not in use?

### 1.2 Concept of Pulsed Power

Pulsed power supplies aim to deliver power to circuit blocks only when they are actively required. This is achieved by:

*   **Gating the Power Supply:** A switch (typically a PMOS transistor in CMOS technology) is placed in the power supply line to the circuit block.
*   **Control Signal:** This switch is controlled by an external signal, often derived from the clock or control logic, that indicates when the block needs to be powered up.

**Analogy:** Imagine a light bulb in a room. Instead of the bulb being always on and drawing power, it's only turned on when someone enters the room and turned off when they leave. Similarly, a pulsed power supply "turns on" the power to a circuit block only when it's actively switching or performing a computation.

**Key Idea:** By "shutting off" power to idle blocks, we significantly reduce both dynamic power (as switching activity becomes zero) and, importantly, **static power** (leakage) associated with those idle blocks.

## 2. Implementation of Pulsed Power Supplies

### 2.1 Basic Structure

The fundamental building block for a pulsed power supply involves:

*   **Power Gating Switch:** A transistor (usually a PMOS) placed in series with the $V_{DD}$ line of a functional block.
*   **Control Logic:** Logic that generates a signal to control the gate of the power gating switch. This signal is typically active low to enable the PMOS switch.

```
     VDD
      |
     ---
     | | PMOS (Power Gating Switch)
     ---
      | VDD_PULSED
      |-------+
      |       |
    [Circuit Block]
      |       |
     GND     GND
```

**Control Signal:**

*   When the control signal is HIGH (or asserted appropriately), the PMOS switch is ON, delivering $V_{DD}$ to the circuit block.
*   When the control signal is LOW (or de-asserted), the PMOS switch is OFF, disconnecting the $V_{DD}$ supply from the circuit block, thereby shutting it down.

### 2.2 Generating the Control Signal

The control signal is crucial and needs to be carefully designed to ensure proper operation and avoid glitches. Common sources for the control signal include:

*   **Clock Signal:** The control signal can be derived from the main clock or a localized clock signal. For instance, a block might only be powered when its clock is active.
    *   **Example:** A flip-flop whose power is gated based on the arrival of its valid data and clock edge.
*   **Enable Signals:** Explicit enable signals provided by the system's control logic that indicate when a specific functional block is required.
*   **Activity Detectors:** More sophisticated schemes might involve circuits that detect the actual switching activity within a block and generate a power-up signal accordingly.

### 2.3 Advantages of Pulsed Power Supplies

*   **Significant Static Power Reduction:** This is the primary benefit. By turning off leakage paths in idle blocks, the overall static power dissipation can be drastically reduced. (Addresses CO3)
*   **Reduced Dynamic Power:** When a block is powered down, its dynamic power consumption is zero.
*   **Scalability:** The technique is applicable to various levels of granularity, from individual logic gates to entire blocks or cores.
*   **Flexibility:** The pulsed nature allows for dynamic power management based on the application's needs.

### 2.4 Challenges and Design Considerations

*   **Wake-up Latency:** When a powered-down block is switched back on, it takes time for the internal nodes to charge up to their operating voltages. This **wake-up latency** needs to be accounted for in the system design. This is a crucial point for systems requiring fast response.
*   **Rush Current:** When the power gating switch turns ON, a large transient current (rush current) can flow into the decoupling capacitors and the powered block. This can cause voltage droop on the main power supply line, affecting other active blocks.
    *   **Mitigation:** Careful sizing of the power gating switch, use of header/footer switches, and on-chip decoupling capacitors are essential.
*   **State Retention:** When a block is powered down, its internal state (e.g., flip-flop contents) is lost. If state retention is required, additional techniques like **sleep transistors** and specialized memory cells are needed.
*   **Control Signal Design:** The control signal must be robust and free from glitches to prevent unintended power-up or power-down events.
*   **Area Overhead:** The inclusion of power gating switches and control logic adds some area overhead.

## 3. Techniques for Implementing Pulsed Power

### 3.1 Header Switching (PMOS Transistor)

This is the most common approach. A PMOS transistor is placed in series with the $V_{DD}$ line.

```
     VDD
      |
     ---
     | | PMOS (Header Switch)
     ---
      | VDD_PULSED
      |-------+
      |       |
    [Circuit Block]
      |       |
     GND     GND
```

*   **Control:** The PMOS gate is controlled by an inverted signal (e.g., $\overline{EN}$). When $\overline{EN}$ is LOW, PMOS is ON; when $\overline{EN}$ is HIGH, PMOS is OFF.
*   **Advantages:** The output voltage is typically $V_{DD}$ when the switch is ON (assuming ideal PMOS), which is good for performance.
*   **Disadvantages:** PMOS transistors have higher resistance and leakage than NMOS for the same area, leading to a larger voltage drop ($V_{DD} - V_{DD\_PULSED}$) when heavily loaded and potentially higher leakage in the "ON" state. This also contributes to rush current.

### 3.2 Footer Switching (NMOS Transistor)

An NMOS transistor is placed in series with the GND line.

```
     VDD
      |-------+
      |       |
    [Circuit Block]
      |       |
     GND     GND
      |
     ---
     | | NMOS (Footer Switch)
     ---
      |
     GND_PULSED (effectively connected to GND when ON)
```

*   **Control:** The NMOS gate is controlled by an enable signal ($EN$). When $EN$ is HIGH, NMOS is ON; when $EN$ is LOW, NMOS is OFF.
*   **Advantages:** NMOS transistors generally have lower resistance and leakage than PMOS for the same area.
*   **Disadvantages:** When the NMOS footer is OFF, the circuit block is effectively floating at the $V_{DD}$ rail. This can lead to subthreshold leakage flowing through the pull-up network of the block, which can be significant if $V_{DD}$ is high. This method is generally less preferred for complete power shut-off.

### 3.3 Header and Footer Switching (Dual-Gating)

Using both a header (PMOS) and a footer (NMOS) switch provides better isolation and control.

```
     VDD
      |
     ---
     | | PMOS (Header)
     ---
      | VDD_PULSED
      |-------+
      |       |
    [Circuit Block]
      |       |
     GND_PULSED
      |
     ---
     | | NMOS (Footer)
     ---
      |
     GND
```

*   **Control:** Separate control signals for PMOS and NMOS. Typically, the PMOS is turned OFF first, then the NMOS is turned OFF, and vice-versa for power-up.
*   **Advantages:**
    *   Provides superior isolation: when both are OFF, the circuit block is truly disconnected from $V_{DD}$ and GND, minimizing leakage.
    *   Better control over wake-up and shut-down sequences.
    *   Can help mitigate rush current issues by controlling the turn-on sequence.
*   **Disadvantages:** Increased area overhead due to two switches and more complex control logic.

**Reference:** Baker, Li, Boyce (4/e) likely discusses these gating techniques in detail within chapters on low-power design or power management. Razavi's textbooks might cover basic transistor switching principles relevant to these implementations.

## 4. Impact on System Design and Performance

### 4.1 Wake-up Latency

When a block is powered up from a powered-down state, the transistors need to switch from an off state to an on state, and internal node capacitances need to be charged. This takes time.

*   **Factors affecting wake-up latency:**
    *   Size of the power gating switch.
    *   Capacitance of the powered block.
    *   Strength of the driver transistors within the block.
    *   Supply voltage.
*   **Mitigation:**
    *   Careful selection of the power gating transistor size.
    *   Employing "always-on" logic for control and wake-up.
    *   Using faster charging mechanisms.
    *   Designing the system to tolerate the latency by scheduling operations accordingly.

### 4.2 State Retention

In many applications, when a block is powered down, its internal state must be preserved.

*   **Problem:** When $V_{DD}$ is removed, flip-flops and latches lose their stored data.
*   **Solutions:**
    *   **Sleep Transistors:** A low-leakage transistor (often a PMOS with its gate tied to $V_{DD}$) is placed in series with the pull-up network of a flip-flop or logic gate. While not a complete power-off, it significantly reduces leakage. This is a common technique discussed in low-power design literature.
    *   **State Saving:** Before powering down a block, its state can be saved to non-volatile memory or a dedicated state retention register that remains powered. This adds complexity and energy cost.
    *   **Specialized Memory Cells:** Some memory cells are designed to retain their state with very low power.

### 4.3 Rush Current Management

The sudden application of voltage to a large circuit block can draw a large transient current.

*   **Consequences:**
    *   Voltage droop on the main $V_{DD}$ rail.
    *   Potential malfunction of other active blocks.
    *   Electromigration issues if currents are sustained.
*   **Mitigation:**
    *   **Slew Rate Control:** Limiting the rate at which the power gating switch turns ON.
    *   **Gradual Power-Up:** Using a series of transistors or a controlled charging circuit.
    *   **On-chip Decoupling Capacitors:** These capacitors provide a local charge reservoir to supply the initial surge current, smoothing the voltage dip.
    *   **Footer Switching:** Can sometimes help by allowing the block to charge up gradually from the bottom.
    *   **Header and Footer Switching:** Allows for independent control of the charging process.

**Example:** Consider a CPU core that is mostly idle but needs to execute a task occasionally. Its power can be gated off. When a task arrives, a control unit signals the power gate to turn ON. The core then experiences a wake-up latency before it can start processing. The system must account for this delay in its scheduling.

## 5. Relation to Other Low Power Techniques

Pulsed power supplies complement other low-power techniques:

*   **Clock Gating:** Disables the clock signal to idle blocks, stopping switching activity. Pulsed power goes a step further by also disabling the power supply, reducing leakage.
*   **Power Gating with Sleep Transistors:** Pulsed power is a more aggressive form of power gating where the entire power supply is switched, not just a leakage-reducing transistor within the gate.
*   **Voltage and Frequency Scaling (DVFS):** Pulsed power can be used in conjunction with DVFS. Blocks can be powered down when idle, and when powered up, they can operate at a specific voltage and frequency.

## 6. Advanced Pulsed Power Concepts

### 6.1 Fine-grained vs. Coarse-grained Power Gating

*   **Coarse-grained:** Powering down entire functional units (e.g., CPU cores, DSP units). This offers substantial savings but higher wake-up latency.
*   **Fine-grained:** Powering down smaller blocks, individual logic gates, or even parts of a circuit. This offers faster wake-up but potentially smaller savings and higher overhead.

### 6.2 Activity-Based Power Gating

Instead of relying solely on explicit enable signals or clock signals, circuits can incorporate activity detectors. These detectors monitor the switching activity within a block.

*   **Operation:** If no switching activity is detected for a certain period, the control logic automatically gates off the power supply. When activity resumes, the power is restored.
*   **Benefit:** Adapts power management to the actual usage patterns of the circuit block.

## 7. Connection to Course Outcomes

*   **CO1 (Technology Scaling & Short Channel Effects):** While pulsed power is a design technique, the effectiveness of leakage reduction is amplified in advanced technologies where leakage currents are more significant due to shorter channel lengths. Understanding short-channel effects helps in choosing appropriate gating transistors and predicting leakage in powered-down states.
*   **CO2 (Sources of Power Dissipation):** Pulsed power directly targets both static (leakage) and dynamic power dissipation by strategically removing the supply from idle components.
*   **CO3 (Approaches for Power Management):** Pulsed power supplies are a key approach for dynamic power management in digital ICs, allowing for power state transitions.
*   **CO4 (Clocked and Non-Clocked Design Styles):** Pulsed power supplies are intrinsically linked to clocked designs (using clock signals for control) and can be extended to non-clocked logic through activity detection mechanisms. This topic contributes to understanding design styles that manage power.
*   **CO5 (Adiabatic Switching):** While distinct, both pulsed power and adiabatic switching aim to reduce energy consumption. Adiabatic switching focuses on minimizing switching energy dissipation, whereas pulsed power focuses on eliminating power consumption in idle states. They can be seen as complementary techniques in a low-power design arsenal.

## Practice Questions

**Q1.** Explain the primary benefit of using pulsed power supplies in VLSI circuits. (CO2, CO3)
**A1.** The primary benefit is the significant reduction in **static power dissipation** by completely shutting off the power supply to idle circuit blocks. This eliminates leakage currents that flow even when no switching activity occurs.

**Q2.** What is "wake-up latency" in the context of pulsed power supplies, and what factors influence it? (CO3)
**A2.** Wake-up latency is the time delay required for a powered-down circuit block to become fully operational after its power supply is restored. Factors influencing it include:
    *   Size of the power gating switch.
    *   Internal capacitance of the block.
    *   Strength of the transistors within the block.
    *   Supply voltage.

**Q3.** Briefly describe the differences between header switching and footer switching for implementing pulsed power. (CO3)
**A3.**
    *   **Header Switching:** Uses a PMOS transistor in series with the $V_{DD}$ line. The output voltage is well-regulated ($V_{DD}$) when ON.
    *   **Footer Switching:** Uses an NMOS transistor in series with the GND line. This can be more efficient in terms of resistance but can lead to floating nodes and subthreshold leakage when OFF.

**Q4.** What is "rush current," and how can it be mitigated when using pulsed power supplies? (CO3)
**A4.** Rush current is the large transient current drawn when a powered-down block is suddenly powered ON. It can cause voltage droop. Mitigation techniques include:
    *   Slew rate control of the power gating switch.
    *   Using on-chip decoupling capacitors.
    *   Gradual power-up sequences.

**Q5.** If a circuit block's state needs to be preserved after being powered down, what additional techniques might be required besides simple power gating? (CO3)
**A5.** Techniques like using **sleep transistors** within the gates, **saving the state** to auxiliary memory before shutdown, or using **specialized state-retention memory cells** are required.

## Important Points to Remember

*   **Pulsed power is a dynamic power management technique.**
*   **Primary Goal:** Reduce static power by eliminating leakage in idle blocks.
*   **Key Trade-offs:** Wake-up latency, rush current, and state retention.
*   **Common Implementations:** Header switching (PMOS) and footer switching (NMOS).
*   **Dual-gating (header + footer) offers superior isolation.**
*   **Advanced techniques:** Activity detection and fine-grained gating.
*   **Crucial for modern low-power designs**, especially in battery-operated devices and mobile systems.

This concludes the study notes for Pulsed Power Supplies. Remember to review the relevant chapters in your textbooks for deeper insights and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
