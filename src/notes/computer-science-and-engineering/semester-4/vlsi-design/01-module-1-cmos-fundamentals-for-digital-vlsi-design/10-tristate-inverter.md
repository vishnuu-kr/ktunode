---
title: "Tristate Inverter"
subject: "VLSI DESIGN"
module: "Module 1: CMOS Fundamentals for Digital VLSI Design :"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b2e9"
status: "completed"
scrapedAt: "2026-05-20T16:17:04.845Z"
---
## VLSI Design - Module 1: CMOS Fundamentals - Tristate Inverter

These notes cover the tristate inverter, a key component in digital VLSI design, as part of the CMOS Fundamentals module.

**Learning Outcomes:**

*   Understand the operation of a tristate inverter.
*   Learn the truth table and symbolic representation of a tristate inverter.
*   Analyze the circuit implementation of a tristate inverter using CMOS transistors.
*   Understand the applications of tristate inverters in VLSI design, particularly in multiplexers and bus systems.
*   Understand the advantages and disadvantages of using Tristate inverters.

**1. Key Concepts and Definitions**

*   **Tristate Inverter:** A logic gate that can output one of three states:
    *   **Logic High (1):** Similar to a standard inverter outputting a high voltage.
    *   **Logic Low (0):** Similar to a standard inverter outputting a low voltage.
    *   **High Impedance (Z):**  The output is essentially disconnected, presenting a very high resistance to the rest of the circuit. This is also sometimes called "floating."

*   **Enable Signal (EN):** A control signal that determines whether the tristate inverter is active (outputting 0 or 1) or inactive (outputting Z).

*   **Truth Table:** A table that shows the output of the tristate inverter for all possible combinations of input (A) and enable (EN) signals.

*   **High Impedance State (Z):** A state where the output of the gate is effectively disconnected from the circuit, offering very high resistance.

**2. Tristate Inverter Operation**

The tristate inverter behaves like a regular inverter when the enable signal is active. When the enable signal is inactive, the output is set to high impedance, effectively disconnecting the inverter from the rest of the circuit.

**3. Truth Table and Symbolic Representation**

*   **Symbolic Representation:** Typically represented as an inverter symbol with an additional enable input.

*   **Truth Table:**

    | Enable (EN) | Input (A) | Output (Q) |
    |-------------|-----------|------------|
    | 0           | 0         | Z          |
    | 0           | 1         | Z          |
    | 1           | 0         | 1          |
    | 1           | 1         | 0          |

    **Explanation:**

    *   When EN = 0 (Enable is low/inactive), the output (Q) is always in the high impedance state (Z) regardless of the input (A).
    *   When EN = 1 (Enable is high/active), the tristate inverter acts like a regular inverter:
        *   If A = 0, then Q = 1.
        *   If A = 1, then Q = 0.

**4. Circuit Implementation using CMOS Transistors**

The tristate inverter is implemented using a standard CMOS inverter with added NMOS and PMOS transistors to control the output state.

*   **Circuit Diagram (Conceptual):**

    ```
    Vdd
    |
    PMOS_EN
    |---- PMOS (Input A) ----- Output (Q)
    |
    GND
    |
    NMOS_EN
    |---- NMOS (Input A) -----|
    ```

    **Explanation:**

    *   **Basic CMOS Inverter:** Consists of a PMOS transistor connected to VDD and an NMOS transistor connected to GND. Both transistors have their gates connected to the input signal (A).
    *   **Enable Transistors:** An additional PMOS transistor (PMOS_EN) is placed in series with the original PMOS transistor, and an additional NMOS transistor (NMOS_EN) is placed in series with the original NMOS transistor.  The gates of PMOS_EN and NMOS_EN are controlled by the Enable signal (EN) or its inverse. The NMOS and PMOS can be configured as follows to implement the desired behaviour (EN=1 enabled, EN=0 is disabled):
          *  EN is used on the gate of PMOS_EN and NMOS_EN
        * **Operation:**
            *   **EN = 1 (Enabled):**  PMOS_EN and NMOS_EN are turned ON and OFF respectively, allowing the CMOS inverter to function normally.
                *   If A = 0, the PMOS transistor turns ON, and the NMOS transistor turns OFF, pulling the output (Q) HIGH (VDD).
                *   If A = 1, the PMOS transistor turns OFF, and the NMOS transistor turns ON, pulling the output (Q) LOW (GND).
            *   **EN = 0 (Disabled):**  PMOS_EN and NMOS_EN are turned OFF and ON respectively, regardless of the input (A). Both the pull-up (PMOS) and pull-down (NMOS) paths are disabled, effectively disconnecting the output from both VDD and GND, and setting the output (Q) to a high impedance state (Z).

**5. Applications of Tristate Inverters in VLSI Design**

Tristate inverters are crucial for several applications, primarily:

*   **Multiplexers (MUX):**  A multiplexer selects one of several input signals and passes it to a single output. Tristate inverters are used to enable only one input path at a time, while the others are disabled and present a high impedance to the output.
    *   **Example:** A 2-to-1 multiplexer can be implemented using two tristate inverters, each connected to a different input. The enable signals of the tristate inverters are controlled by the select line.  When a particular enable signal is high, the corresponding input is passed to the output.

*   **Bus Systems:** In a bus system, multiple devices share a common set of wires (the bus). Tristate buffers (often just tristate inverters) are used to allow only one device to drive the bus at a time, preventing signal contention.
    *   **Example:**  In a memory system, the CPU, DMA controller, and other devices may need to write data to the memory bus. Tristate buffers are used to ensure that only one device is driving the bus at any given time, preventing conflicts and data corruption.

*   **Memory Cells:** Can be used in Static Random-Access Memory (SRAM) to isolate memory cells during read/write operations.

**6. Advantages and Disadvantages**

*   **Advantages:**
    *   **Bus Sharing:** Enables multiple devices to share a common bus or output line.
    *   **Multiplexing:** Allows the selection of one signal from multiple inputs.
    *   **Isolation:**  Provides isolation between different circuit blocks.
    *   **Flexibility:** Offers flexibility in circuit design by allowing selective enabling/disabling of signal paths.

*   **Disadvantages:**
    *   **Performance:** Introducing transistors in series can slightly increase propagation delay and power consumption compared to a simple inverter.
    *   **Complexity:**  Requires more transistors than a standard inverter, leading to a larger area.
    *   **Floating Output:** The high impedance state can be susceptible to noise and may require pull-up or pull-down resistors in some applications to define a default state when the gate is disabled.

**7. Important Points to Remember**

*   The tristate inverter has three output states: 0, 1, and Z.
*   The enable signal controls the output state.
*   The high impedance state disconnects the output from the circuit.
*   Tristate inverters are widely used in multiplexers, bus systems, and memory designs.
*  Care should be taken when using Tristate inverters with other logic gates to ensure that the "floating" or "High-Z" state does not cause unexpected behaviour.
*  When using a Tristate inverter, the HIGH and LOW impedance values will vary depending on the technology and device size.

**8. Practice Questions/Exercises**

1.  **Draw the circuit diagram of a CMOS tristate inverter using NMOS and PMOS transistors and explain its operation.**

    *   **Answer:** See Section 4 for the circuit diagram. The explanation should cover how the enable signal controls the PMOS and NMOS transistors, effectively connecting or disconnecting the output from VDD and GND, resulting in either inverting behavior or a high impedance state.

2.  **Design a 4-to-1 multiplexer using tristate inverters.**  Illustrate the block diagram and explain how the select lines control the enable signals of the tristate inverters.

    *   **Answer:** A 4-to-1 MUX requires four tristate inverters (one for each input).  Two select lines (S1, S0) are needed.  A decoder (e.g., implemented using AND gates) is used to generate four unique enable signals based on the combination of S1 and S0. Each enable signal is connected to the enable input of one of the tristate inverters. When a particular combination of S1 and S0 is asserted, only the corresponding tristate inverter is enabled, allowing its input to pass to the output. The other three tristate inverters are disabled and present a high impedance.

3.  **What are the advantages and disadvantages of using tristate inverters in bus systems?**

    *   **Answer:**
        *   **Advantages:** Allows multiple devices to share the bus without contention.  Enables efficient resource utilization.
        *   **Disadvantages:**  Can introduce some delay and potential power overhead compared to dedicated connections. The high-impedance state can be susceptible to noise.

4.  **Complete the truth table for the following tristate buffer circuit where EN_B is the inverse of EN.**

    | Enable (EN) | Input (A) | Output (Q) |
    |-------------|-----------|------------|
    | 0           | 0         |     ?       |
    | 0           | 1         |     ?       |
    | 1           | 0         |     ?       |
    | 1           | 1         |     ?       |

    *   **Answer:**

        | Enable (EN) | Input (A) | Output (Q) |
        |-------------|-----------|------------|
        | 0           | 0         | Z          |
        | 0           | 1         | Z          |
        | 1           | 0         | 0          |
        | 1           | 1         | 1          |

5.  **Explain the effect of a floating output (high-Z state) in a circuit and how to mitigate potential issues.**

    *   **Answer:** A floating output means the output is not actively driven to a HIGH or LOW state.  It's highly susceptible to noise and can cause unpredictable behavior in downstream logic. To mitigate this, you can use:
        *   **Pull-up Resistor:** Connect a resistor between the output and VDD to weakly pull the output HIGH when the tristate gate is disabled.
        *   **Pull-down Resistor:** Connect a resistor between the output and GND to weakly pull the output LOW when the tristate gate is disabled.
        *   The choice between pull-up and pull-down depends on the desired default state when the gate is disabled.  The resistor value should be large enough to not significantly impact the performance when the tristate gate is active.

These notes provide a comprehensive overview of tristate inverters, covering their operation, implementation, applications, and limitations.  Understanding tristate inverters is crucial for designing efficient and flexible digital VLSI systems. Remember to always consider the trade-offs between performance, area, and power when using them in your designs.
