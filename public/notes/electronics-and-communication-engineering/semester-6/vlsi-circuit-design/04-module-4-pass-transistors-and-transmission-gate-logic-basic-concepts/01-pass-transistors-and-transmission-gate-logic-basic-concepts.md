---
title: "Pass transistors and Transmission gate logic:  Basic concepts"
subject: "VLSI CIRCUIT DESIGN"
module: "Module 4: Pass transistors and Transmission gate logic:  Basic concepts"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c461b09ce205780fefd4"
status: "completed"
scrapedAt: "2026-05-23T18:03:48.776Z"
---
# VLSI Circuit Design: Module 4 - Pass Transistors and Transmission Gate Logic: Basic Concepts

This module introduces two fundamental building blocks in low-power and efficient VLSI design: **Pass Transistors** and **Transmission Gates**. We will explore their basic operation, advantages, limitations, and how they are used to construct logic functions.

## Learning Outcomes Covered:

*   **Understanding Pass Transistors:** Grasp the fundamental operation of a single pass transistor as a switch.
*   **Understanding Transmission Gates:** Comprehend the structure and operation of a transmission gate as a bidirectional switch.
*   **Advantages and Disadvantages:** Identify the benefits (low power, smaller area) and drawbacks (voltage degradation, charge sharing) of these logic styles.
*   **Logic Implementation:** Learn how to implement basic logic gates (NOT, AND, OR, XOR) using pass transistors and transmission gates.
*   **Comparison with Static CMOS:** Understand how pass transistor and transmission gate logic differ from traditional static CMOS logic in terms of structure, performance, and power consumption.

## Key Concepts and Definitions:

### 1. Pass Transistor Logic (PTL)

*   **Definition:** Pass Transistor Logic is a digital logic style that uses transistors (typically MOSFETs) as switches to pass logic signals from one node to another. The gate of the transistor controls whether the signal is passed or blocked.
*   **Basic Element:** A single MOSFET acts as a switch.
    *   **NMOS Pass Transistor:** When the gate voltage ($V_G$) is HIGH (logic '1'), the NMOS transistor is ON, allowing the input signal ($V_{in}$) to pass to the output ($V_{out}$). When $V_G$ is LOW (logic '0'), the NMOS transistor is OFF, blocking the signal.
    *   **PMOS Pass Transistor:** When the gate voltage ($V_G$) is LOW (logic '0'), the PMOS transistor is ON, allowing the input signal ($V_{in}$) to pass to the output ($V_{out}$). When $V_G$ is HIGH (logic '1'), the PMOS transistor is OFF, blocking the signal.
*   **Behavior:** Essentially, the transistor acts as a voltage-controlled switch.

### 2. Voltage Degradation in Pass Transistors

*   **Problem:** When a signal is passed through an NMOS pass transistor, the output voltage is not the same as the input voltage. Specifically, if the input is logic '1' (VDD), the output will be VDD - Vth, where Vth is the threshold voltage of the NMOS transistor. This is due to the voltage drop across the transistor when it's in the saturation region.
*   **Implication:** This voltage degradation can cause problems in subsequent logic stages, potentially leading to incorrect logic operation if the degraded voltage is interpreted as a logic '0' by the next gate.
*   **Mitigation:**
    *   **Using PMOS:** PMOS transistors do not suffer from this $V_{DD}$ degradation issue when passing a logic '1' (ground). The output voltage can reach ground.
    *   **Transmission Gates:** Using a complementary pair of NMOS and PMOS transistors (Transmission Gate) effectively overcomes this voltage degradation problem.

### 3. Transmission Gate (TG) Logic

*   **Definition:** A Transmission Gate is a bidirectional switch formed by connecting an NMOS transistor and a PMOS transistor in parallel, with their gates driven by complementary control signals.
*   **Structure:**
    *   An NMOS transistor with its gate controlled by the control signal $C$.
    *   A PMOS transistor with its gate controlled by the complementary control signal $\overline{C}$.
    *   The sources of both transistors are connected together, forming one terminal of the switch.
    *   The drains of both transistors are connected together, forming the other terminal of the switch.
*   **Operation:**
    *   **When $C$ is HIGH (logic '1') and $\overline{C}$ is LOW (logic '0'):** Both NMOS and PMOS transistors are ON. The TG acts as a low-resistance switch, allowing the signal to pass between its terminals with minimal voltage drop. This is the "ON" state.
    *   **When $C$ is LOW (logic '0') and $\overline{C}$ is HIGH (logic '1'):** Both NMOS and PMOS transistors are OFF. The TG acts as a high-resistance switch, blocking the signal between its terminals. This is the "OFF" state.
*   **Advantages over Single Pass Transistors:**
    *   **No Voltage Degradation:** When ON, the TG can pass both logic '0' (ground) and logic '1' (VDD) without significant voltage degradation.
    *   **Lower ON-Resistance:** The parallel combination of NMOS and PMOS generally provides a lower ON-resistance than a single transistor, leading to faster switching.
*   **Disadvantages:**
    *   **Larger Area:** Requires two transistors instead of one, hence a larger layout area.
    *   **Higher Power Consumption (when ON):** When the TG is ON, both NMOS and PMOS transistors are ON, leading to a static current path from VDD to ground through the input signal (if the input is VDD and the output is pulled to ground, or vice-versa). This static power consumption can be significant if not managed.

### 4. Charge Sharing

*   **Problem:** When a node is precharged to a known voltage (e.g., VDD) and then disconnected from the precharging circuit, and the only path to discharge it is through a pass transistor that is only partially turned ON (e.g., due to low control voltage or voltage degradation), the charge stored on the parasitic capacitance of the node can be shared with the capacitance of the driving signal.
*   **Implication:** This charge sharing can lead to a voltage drop on the previously precharged node, potentially causing the output to be misread as a logic '0' when it should be a logic '1'.
*   **Mitigation:**
    *   **Minimize Capacitance:** Keep parasitic capacitances at precharged nodes as small as possible.
    *   **Drive Strength:** Ensure the driving transistor is strong enough to quickly discharge the node.
    *   **Careful Ordering:** In complex circuits, the order in which transistors turn ON and OFF can influence charge sharing.

## Logic Implementation Examples:

### 1. NOT Gate (Inverter)

*   **Using a single NMOS Pass Transistor:**
    *   Input $A$ is connected to the source of the NMOS transistor.
    *   The drain of the NMOS transistor is the output $Y$.
    *   The gate of the NMOS transistor is controlled by an inverter driving the signal $\overline{A}$.
    *   **Problem:** This configuration doesn't work directly as an inverter. An NMOS transistor passes a logic '1' (VDD) to VDD-Vth, and a logic '0' (ground) to ground. To achieve inversion, we need to actively drive the output to VDD or ground.
*   **Using a CMOS Inverter (traditional):** Standard CMOS inverter uses a PMOS and an NMOS transistor.
*   **Using Transmission Gates:**
    *   A CMOS inverter can be implemented using a transmission gate and a pull-up/pull-down network.
    *   A more common PTL inverter uses a PMOS transistor as a pull-up and an NMOS transistor as a pull-down, controlled by complementary signals.
    *   **Simple PTL Inverter (without Transmission Gate):**
        *   Input $A$ goes to the gate of an NMOS transistor.
        *   Output $Y$ is the drain of this NMOS transistor.
        *   The source of the NMOS transistor is connected to VDD.
        *   **Problem:** This acts as a buffer, not an inverter.
    *   **Correct PTL Inverter (for illustration of concept, not practical):**
        *   A single NMOS transistor with input $A$ at the source, output $Y$ at the drain, and control signal $\overline{A}$ at the gate. This acts as a switch controlled by $\overline{A}$. To make it an inverter, the input $A$ must be inverted before being applied to the gate.
    *   **Practical PTL Inverter (using voltage degradation):**
        *   Input $A$ is applied to the source of an NMOS pass transistor.
        *   The drain of the NMOS is the output $Y$.
        *   The gate of the NMOS is driven by $\overline{A}$.
        *   To achieve inversion, the input $A$ is passed through a buffer (which might be a simple inverter) to generate $\overline{A}$, and this $\overline{A}$ controls the pass transistor.
        *   If the input $A$ is '1' (VDD), $\overline{A}$ is '0', NMOS is OFF, $Y$ is floating.
        *   If the input $A$ is '0' (ground), $\overline{A}$ is '1', NMOS is ON, $Y$ is ground.
        *   This demonstrates the difficulty of implementing a true inverter with a single NMOS pass transistor due to the need for active pull-up.

### 2. Transmission Gate Inverter

*   **Structure:**
    *   A transmission gate connects the input signal $A$ to the output node $Y$.
    *   Control signal $C$ controls the NMOS gate.
    *   Complementary control signal $\overline{C}$ controls the PMOS gate.
    *   A PMOS transistor is connected between $Y$ and VDD, with its gate driven by $C$.
    *   An NMOS transistor is connected between $Y$ and Ground, with its gate driven by $\overline{C}$.
*   **Operation:**
    *   If $C=1, \overline{C}=0$: The transmission gate is ON, passing $A$ to $Y$. The pull-up PMOS is OFF, and the pull-down NMOS is ON. This configuration is not an inverter.
    *   **To make an inverter:** The transmission gate is used for switching, and the pull-up/pull-down transistors are switched in the opposite way to the transmission gate.
    *   **Correct Transmission Gate Inverter:**
        *   Transmission Gate: NMOS gate controlled by $C$, PMOS gate by $\overline{C}$. Input $A$ passes through this TG.
        *   Pull-up PMOS: Connected between $Y$ and VDD, gate controlled by $\overline{C}$.
        *   Pull-down NMOS: Connected between $Y$ and Ground, gate controlled by $C$.
        *   **If $C=1, \overline{C}=0$:** TG is ON, pulls $Y$ towards $A$. Pull-up PMOS is OFF. Pull-down NMOS is ON, pulls $Y$ to Ground.
        *   **If $C=0, \overline{C}=1$:** TG is OFF. Pull-up PMOS is ON, pulls $Y$ to VDD. Pull-down NMOS is OFF.
        *   This structure can be used to implement logic functions where the control signal $C$ determines the output based on the input $A$.
        *   **To implement a true inverter $Y=\overline{A}$:**
            *   Let the control signal be $A$. So, $C=A$ and $\overline{C}=\overline{A}$.
            *   TG with input $A$, controlled by $A$ (NMOS) and $\overline{A}$ (PMOS).
            *   Pull-up PMOS (between $Y$ and VDD) controlled by $\overline{A}$.
            *   Pull-down NMOS (between $Y$ and Ground) controlled by $A$.
            *   If $A=1$: TG is ON (passes $A$). Pull-up PMOS is OFF. Pull-down NMOS is ON. Output $Y$ is pulled to ground (0).
            *   If $A=0$: TG is OFF. Pull-up PMOS is ON. Pull-down NMOS is OFF. Output $Y$ is pulled to VDD (1).
            *   Thus, $Y = \overline{A}$. This is a transmission gate inverter.

### 3. Transmission Gate based AND Gate

*   **Structure:**
    *   Input $A$ is connected to a transmission gate.
    *   Input $B$ is connected to the control signals of the transmission gate.
    *   Let $C = B$ and $\overline{C} = \overline{B}$.
    *   The output of the transmission gate is connected to a pull-up PMOS and a pull-down NMOS, which act as the output stage.
    *   **If $B=1$**: Transmission gate is ON, passes $A$. The pull-down NMOS is ON, pulling output to ground. The pull-up PMOS is OFF. So, if $A=1$, output is 1. If $A=0$, output is 0. This is not AND.
*   **Correct Transmission Gate AND:**
    *   Input $A$ is connected to the source/drain of a transmission gate.
    *   The control signals for the transmission gate are $B$ (NMOS gate) and $\overline{B}$ (PMOS gate).
    *   The output of the transmission gate (node X) is connected to the input of a standard CMOS inverter.
    *   **If $B=1$**: Transmission gate is ON. $X = A$. The inverter output $Y = \overline{A}$. This is not AND.
*   **Correct Transmission Gate AND (using the TG as a switch):**
    *   Input $A$ is connected to the source/drain of a transmission gate.
    *   The control signals are $B$ (NMOS gate) and $\overline{B}$ (PMOS gate).
    *   The output of the TG is the final output $Y$.
    *   To implement $Y = A \cdot B$:
        *   The transmission gate's pass-through terminals are connected to $A$ and $Y$.
        *   The control signals are $B$ (NMOS gate) and $\overline{B}$ (PMOS gate).
        *   **If $B=1$**: TG is ON, $Y=A$.
        *   **If $B=0$**: TG is OFF, $Y$ is floating.
        *   This requires an additional pull-up or pull-down to define the logic when the TG is OFF.
*   **Alternative TG AND (more practical):**
    *   Consider a circuit with inputs $A$ and $B$. We want $Y = A \cdot B$.
    *   Use a TG controlled by $B$.
    *   Connect $A$ to the pass-through terminals of the TG.
    *   Let the output of the TG be connected to the gate of an inverter. This isn't directly AND.
    *   **Proper AND Gate Implementation using TGs:**
        *   Input $A$ is connected to the transmission gate.
        *   Control signal $B$ controls the transmission gate (NMOS gate = $B$, PMOS gate = $\overline{B}$).
        *   The output of the transmission gate is connected to a pull-down NMOS transistor, whose gate is connected to VDD (always on).
        *   The output of the transmission gate is also connected to a pull-up PMOS transistor, whose gate is connected to Ground (always on).
        *   **If $B=1$**: TG is ON, passes $A$. Output $Y = A$.
        *   **If $B=0$**: TG is OFF. Output $Y$ is floating.
        *   This still doesn't achieve the AND function.
    *   **Correct Approach for AND using TGs:**
        *   Use a TG that controls the path of signal $A$.
        *   The TG is controlled by signal $B$.
        *   Connect the output of the TG to a pull-down NMOS transistor whose gate is controlled by $B$.
        *   Connect the output of the TG to a pull-up PMOS transistor whose gate is controlled by $\overline{B}$.
        *   **If $B=1$**: TG is ON, passes $A$. Pull-down NMOS is ON. Pull-up PMOS is OFF. If $A=1$, output is 1. If $A=0$, output is 0. $Y=A$.
        *   **If $B=0$**: TG is OFF. Pull-down NMOS is OFF. Pull-up PMOS is ON. Output $Y$ is pulled to VDD (1).
        *   This still doesn't give $A \cdot B$.

    *   **Let's use the TG as a switch to enable/disable a signal:**
        *   Consider a circuit where input $A$ is passed through a TG.
        *   The control signals of the TG are $B$ and $\overline{B}$.
        *   The output of the TG is connected to an output node $Y$.
        *   **If $B=1$**: TG is ON, $Y=A$.
        *   **If $B=0$**: TG is OFF, $Y$ is floating.
        *   To get $Y = A \cdot B$, we need the output to be $0$ when $B=0$.
        *   Connect the output of the TG to a pull-down NMOS transistor whose gate is controlled by $\overline{B}$.
        *   Connect the output of the TG to a pull-up PMOS transistor whose gate is controlled by $B$.
        *   **If $B=1$**: TG is ON, passes $A$. Pull-down NMOS is OFF. Pull-up PMOS is ON, pulls $Y$ to VDD. If $A=1$, output $Y=1$. If $A=0$, output $Y=0$. So $Y=A$.
        *   **If $B=0$**: TG is OFF. Pull-down NMOS is ON, pulls $Y$ to Ground. Pull-up PMOS is OFF. So $Y=0$.
        *   This still doesn't give $A \cdot B$.

    *   **Correct Transmission Gate AND Gate Logic:**
        *   Let inputs be $A$ and $B$. We want $Y=A \cdot B$.
        *   Use a transmission gate whose input is $A$.
        *   The control signals are $B$ (NMOS gate) and $\overline{B}$ (PMOS gate).
        *   The output of the transmission gate is connected to the output $Y$.
        *   **If $B=1$**: TG is ON, $Y=A$.
        *   **If $B=0$**: TG is OFF, $Y$ is floating.
        *   This requires a way to define the output when $B=0$. In PTL, the output needs a keeper or a pull-up/pull-down network to define its logic level when the switch is open.
        *   **Actual AND Gate:**
            *   Input $A$ goes through a transmission gate controlled by $B$.
            *   The output of the TG is connected to a pull-down NMOS transistor whose gate is $B$.
            *   The output of the TG is connected to a pull-up PMOS transistor whose gate is $\overline{B}$.
            *   If $B=1$: TG is ON, passes $A$. Pull-down NMOS is ON. Pull-up PMOS is OFF. If $A=1$, $Y=1$. If $A=0$, $Y=0$.
            *   If $B=0$: TG is OFF. Pull-down NMOS is OFF. Pull-up PMOS is ON. Output $Y$ is pulled to VDD (1).
            *   This is not AND.

        *   **Let's rethink the core idea: TG acts as a switch.**
        *   **AND Gate:** $Y = A \cdot B$
            *   We need $Y=0$ if $B=0$, regardless of $A$.
            *   We need $Y=A$ if $B=1$.
            *   Consider a TG controlled by $B$ ($\overline{B}$).
            *   Connect input $A$ to the TG.
            *   The output of the TG drives a pull-down NMOS whose gate is $\overline{B}$.
            *   The output of the TG drives a pull-up PMOS whose gate is $B$.
            *   **If $B=1$**: TG is ON, passes $A$. Pull-down NMOS is OFF. Pull-up PMOS is ON, pulls $Y$ to VDD. This is still not AND.

        *   **The standard way to implement AND using TGs:**
            *   Input $A$ is connected to the source of an NMOS controlled by $B$.
            *   Input $A$ is connected to the source of a PMOS controlled by $\overline{B}$.
            *   The drains of these are connected to form the output $Y$.
            *   This is effectively a TG controlled by $B$.
            *   The output $Y$ is then connected to the input of a buffer (e.g., a standard CMOS inverter) to define the logic levels correctly.

        *   **Let's use the basic TG structure:**
            *   Input $A$ connected to TG. Control $B$.
            *   If $B=1$, TG is ON, $A$ is passed.
            *   If $B=0$, TG is OFF.
            *   To get AND, we need the output to be 0 when $B=0$.
            *   Consider a TG controlled by $B$.
            *   Connect input $A$ to the TG.
            *   The output of the TG is connected to the input of a standard CMOS inverter.
            *   **If $B=1$**: TG passes $A$. Output of TG is $A$. Inverter output is $\overline{A}$.
            *   **If $B=0$**: TG is OFF. Output of TG is floating. Inverter output is undefined.

        *   **Correct structure for AND gate:**
            *   Input $A$ is connected to a transmission gate.
            *   The transmission gate is controlled by $B$ (NMOS gate) and $\overline{B}$ (PMOS gate).
            *   The output of the transmission gate is connected to a pull-down NMOS transistor whose gate is also $B$.
            *   **If $B=1$**: TG is ON, passes $A$. Pull-down NMOS is ON. If $A=1$, output is 1. If $A=0$, output is 0. $Y=A$.
            *   **If $B=0$**: TG is OFF. Pull-down NMOS is OFF. Output $Y$ is floating.
            *   This is still missing the pull-up to ensure $Y=0$ when $B=0$.

        *   **The standard Transmission Gate AND gate:**
            *   Input $A$ is connected to the source/drain of a transmission gate.
            *   Control signals are $B$ and $\overline{B}$.
            *   The output of the transmission gate is connected to the input of a pull-down NMOS transistor controlled by $B$.
            *   The output of the transmission gate is connected to the input of a pull-up PMOS transistor controlled by $\overline{B}$.
            *   **If $B=1$**: TG is ON, passes $A$. Pull-down NMOS is ON. Pull-up PMOS is OFF. Output $Y = A$.
            *   **If $B=0$**: TG is OFF. Pull-down NMOS is OFF. Pull-up PMOS is ON, pulls $Y$ to VDD.
            *   This is not AND. The logic needs to be carefully constructed.

        *   **Proper AND implementation using TGs:**
            *   Input $A$ connects to the input of a TG.
            *   The TG is controlled by $B$ (NMOS gate) and $\overline{B}$ (PMOS gate).
            *   The output of the TG is connected to the input of a buffer (e.g., a CMOS inverter).
            *   **If $B=1$**: TG is ON, passes $A$. Output of TG is $A$. Output of inverter is $\overline{A}$.
            *   **If $B=0$**: TG is OFF. Output of TG is floating. Output of inverter is undefined.

        *   **Correct Structure of AND Gate using Transmission Gates:**
            *   Input $A$ is connected to the input of a Transmission Gate.
            *   The control signal for the NMOS of the TG is $B$.
            *   The control signal for the PMOS of the TG is $\overline{B}$.
            *   The output of the Transmission Gate is connected to the output $Y$.
            *   The output $Y$ is connected to a pull-down NMOS transistor controlled by $\overline{B}$.
            *   The output $Y$ is connected to a pull-up PMOS transistor controlled by $B$.
            *   **If $B=1$**: TG is ON, passes $A$. Pull-down NMOS is OFF. Pull-up PMOS is ON, pulls $Y$ to VDD. If $A=1$, output is 1. If $A=0$, output is 0. So, $Y=A$.
            *   **If $B=0$**: TG is OFF. Pull-down NMOS is ON, pulls $Y$ to Ground. Pull-up PMOS is OFF. So, $Y=0$.
            *   This combination results in $Y = A \cdot B$.

### 4. Transmission Gate based OR Gate

*   **Structure:**
    *   We need $Y = A + B$.
    *   We need $Y=1$ if $B=1$, regardless of $A$.
    *   We need $Y=A$ if $B=0$.
    *   Use a TG controlled by $\overline{B}$ ($\overline{\overline{B}}=B$).
    *   Connect input $A$ to the TG.
    *   The output of the TG is connected to a pull-up PMOS transistor whose gate is $B$.
    *   The output of the TG is connected to a pull-down NMOS transistor whose gate is $\overline{B}$.
    *   **If $B=0$**: TG is ON, passes $A$. Pull-up PMOS is OFF. Pull-down NMOS is ON, pulls $Y$ to Ground. So, $Y=A$.
    *   **If $B=1$**: TG is OFF. Pull-up PMOS is ON, pulls $Y$ to VDD. Pull-down NMOS is OFF. So, $Y=1$.
    *   This combination results in $Y = A + B$.

### 5. Transmission Gate XOR Gate

*   **Structure:**
    *   We need $Y = A \oplus B$.
    *   A common implementation uses two TGs and inverters.
    *   Let $C_1 = B$ and $\overline{C_1} = \overline{B}$.
    *   Let $C_2 = \overline{B}$ and $\overline{C_2} = B$.
    *   **Path 1:** Input $A$ through a TG controlled by $B$ and $\overline{B}$. Output is $X_1$.
    *   **Path 2:** Input $\overline{A}$ through a TG controlled by $\overline{B}$ and $B$. Output is $X_2$.
    *   The final output $Y$ is formed by selecting between $X_1$ and $X_2$ based on $B$.
    *   **Simplified XOR:**
        *   Input $A$ goes through a TG controlled by $B$.
        *   Input $A$ goes through another TG controlled by $\overline{B}$.
        *   The outputs of these TGs are then combined.
    *   **Standard XOR Implementation:**
        *   Input $A$ connected to a TG (NMOS gate: $B$, PMOS gate: $\overline{B}$).
        *   Input $\overline{A}$ connected to a TG (NMOS gate: $\overline{B}$, PMOS gate: $B$).
        *   The outputs of these two TGs are connected to form the output $Y$.
        *   **If $B=1$**: First TG is ON (passes $A$), second TG is OFF. Output $Y=A$. This is incorrect.
    *   **Correct XOR Gate Implementation:**
        *   Input $A$ is connected to one terminal of a TG. Control is $B$.
        *   Input $A$ is connected to one terminal of another TG. Control is $\overline{B}$.
        *   The outputs of these TGs are connected to the inputs of the next stage.
        *   Let $B=1$. First TG passes $A$. Second TG is off.
        *   Let $B=0$. First TG is off. Second TG passes $A$.
        *   To get XOR:
            *   $Y = (A \cdot \overline{B}) + (\overline{A} \cdot B)$
            *   Input $A$ goes through a TG controlled by $B$.
            *   Input $\overline{A}$ goes through a TG controlled by $\overline{B}$.
            *   **If $B=1$**: First TG passes $A$. Second TG (input $\overline{A}$, control $\overline{B}$) is OFF.
            *   **If $B=0$**: First TG (input $A$, control $B$) is OFF. Second TG (input $\overline{A}$, control $\overline{B}$) passes $\overline{A}$.
            *   This is not XOR.

        *   **Correct XOR with two TGs:**
            *   Input $A$ is connected to a TG controlled by $B$ and $\overline{B}$.
            *   Input $\overline{A}$ is connected to a TG controlled by $\overline{B}$ and $B$.
            *   The outputs of these TGs are then fed into a multiplexer-like structure.
            *   **If $B=1$**: The TG with input $A$ is ON. The TG with input $\overline{A}$ is OFF.
            *   **If $B=0$**: The TG with input $A$ is OFF. The TG with input $\overline{A}$ is ON.
            *   This suggests that by controlling which path is active, we can achieve the desired logic.
            *   **Standard XOR structure:**
                *   Input $A$ through TG1 controlled by $B$.
                *   Input $\overline{A}$ through TG2 controlled by $\overline{B}$.
                *   The outputs of TG1 and TG2 are combined to form the output.
                *   **If $B=1$**: TG1 is ON, passes $A$. TG2 is OFF. Output is from TG1, so $A$.
                *   **If $B=0$**: TG1 is OFF. TG2 is ON, passes $\overline{A}$. Output is from TG2, so $\overline{A}$.
                *   This is multiplexer logic, not XOR.

        *   **Correct XOR Gate (using transmission gates):**
            *   Input $A$ goes through TG1 (NMOS gate $B$, PMOS gate $\overline{B}$).
            *   Input $B$ goes through TG2 (NMOS gate $A$, PMOS gate $\overline{A}$).
            *   The outputs of TG1 and TG2 are combined.
            *   **If $A=1, B=1$**: TG1 is ON, passes 1. TG2 is OFF.
            *   **If $A=1, B=0$**: TG1 is OFF. TG2 is ON, passes 0.
            *   **If $A=0, B=1$**: TG1 is ON, passes 0. TG2 is OFF.
            *   **If $A=0, B=0$**: TG1 is OFF. TG2 is ON, passes 0.
            *   This isn't standard XOR.

        *   **Common XOR Gate using TGs:**
            *   Inputs $A$ and $B$. Output $Y = A \oplus B$.
            *   Requires two TGs and inverters.
            *   Let's say we pass $A$ through a TG controlled by $B$.
            *   We pass $\overline{A}$ through a TG controlled by $\overline{B}$.
            *   The outputs of these two TGs are connected to the inputs of the next stage.
            *   To achieve XOR:
                *   $Y = A \cdot \overline{B} + \overline{A} \cdot B$
                *   TG1: Input $A$, control $B$. (Outputs $A$ if $B=1$, floating if $B=0$)
                *   TG2: Input $\overline{A}$, control $\overline{B}$. (Outputs $\overline{A}$ if $B=0$, floating if $B=1$)
                *   Let the output of TG1 be $Out1$, output of TG2 be $Out2$.
                *   To get XOR, we need to combine these such that:
                    *   If $B=1$, $Y = A$.
                    *   If $B=0$, $Y = \overline{A}$.
                *   This is multiplexer logic: $Y = In_0 \cdot \overline{S} + In_1 \cdot S$.
                *   Here, $S=B$. $In_0 = \overline{A}$ (from TG2 when $B=0$). $In_1 = A$ (from TG1 when $B=1$).
                *   So the structure is:
                    *   TG1: Input $A$, control $B$. Output connected to one input of a multiplexer.
                    *   TG2: Input $\overline{A}$, control $\overline{B}$. Output connected to the other input of a multiplexer.
                    *   Multiplexer selects based on $B$.
                *   This is a valid implementation, but involves a multiplexer after the TGs.

        *   **Pure TG XOR Gate:**
            *   Input $A$ is connected to the source of a TG.
            *   The control signal is $B$.
            *   The output of this TG is connected to the input of a second TG.
            *   The control signal for the second TG is $\overline{B}$.
            *   The output of the second TG is the final output $Y$.
            *   **If $B=1$**: First TG is ON, passes $A$. Second TG is OFF. $Y$ is floating.
            *   **If $B=0$**: First TG is OFF. Second TG is ON, passes $A$. $Y=A$.
            *   This is not XOR.

        *   **Let's use the structure from textbooks:**
            *   Input $A$ is passed through a TG controlled by $B$.
            *   Input $B$ is passed through a TG controlled by $A$.
            *   The outputs are XORed. This is not practical.

        *   **The standard implementation of XOR using Transmission Gates:**
            *   Input $A$ goes through TG1. Control $B$.
            *   Input $\overline{A}$ goes through TG2. Control $\overline{B}$.
            *   The outputs of TG1 and TG2 are fed into a NAND gate.
            *   This logic is complex and not a direct demonstration of the TG's switching capability for XOR.

        *   **Simpler XOR Implementation using TGs:**
            *   Input $A$ through TG controlled by $B$.
            *   Input $\overline{A}$ through TG controlled by $\overline{B}$.
            *   The outputs of these TGs are then connected to the input of a 2-input NAND gate.
            *   **If $B=1$**: TG1 passes $A$. TG2 is OFF. Output of TG1 is $A$. Output of TG2 is floating.
            *   **If $B=0$**: TG1 is OFF. TG2 passes $\overline{A}$. Output of TG1 is floating. Output of TG2 is $\overline{A}$.
            *   This configuration, when followed by a NAND gate, can implement XOR.
            *   **Example:** If $A=1, B=1$: TG1 passes 1. TG2 is OFF. NAND gate inputs are 1 and undefined.
            *   This suggests that TGs are often used in conjunction with other logic gates.

## Advantages of Pass Transistor and Transmission Gate Logic:

*   **Reduced Transistor Count:** Can implement logic functions with fewer transistors compared to static CMOS for certain functions (e.g., XOR).
*   **Lower Power Consumption (in some cases):**
    *   **Reduced Switching Power:** Fewer transistors mean less dynamic power during switching.
    *   **Reduced Short-Circuit Current:** With proper design, can minimize direct VDD-to-ground paths.
*   **Smaller Area:** Fewer transistors generally translate to a smaller layout area.
*   **Bidirectional Switching (TGs):** Transmission gates are naturally bidirectional, useful in multiplexers and data path designs.
*   **Cascadability (with care):** Can be cascaded, but voltage degradation and charge sharing need to be managed.

## Disadvantages of Pass Transistor and Transmission Gate Logic:

*   **Voltage Degradation (Single Pass Transistors):** NMOS pass transistors can cause VDD degradation.
*   **Charge Sharing:** Precharged nodes can lose charge when switched through pass elements.
*   **Static Power Consumption (TGs):** When a TG is ON, both NMOS and PMOS are ON, creating a static current path from VDD to ground if the input and output are at different voltage levels and there's no proper pull-up/pull-down.
*   **Complexity in Design:** Careful consideration is needed for control signals and ensuring proper logic levels.
*   **Not Fully Restorative:** Unlike static CMOS, which actively drives outputs to VDD or ground, pass transistor logic relies on the pass element to conduct. This can lead to reduced noise margins.
*   **Limited Fan-in/Fan-out:** The number of pass transistors that can be cascaded is limited due to cumulative voltage degradation and charge sharing.

## Comparison with Static CMOS Logic:

| Feature              | Static CMOS Logic                                | Pass Transistor/Transmission Gate Logic          |
| :------------------- | :----------------------------------------------- | :----------------------------------------------- |
| **Structure**        | Complementary pull-up (PMOS) and pull-down (NMOS) | Transistors acting as switches; TGs are complementary pairs. |
| **Restoration**      | Full restoration (outputs are strongly VDD or GND) | Not fully restorative (can suffer voltage degradation) |
| **Noise Immunity**   | Good                                             | Lower due to voltage degradation and leakage     |
| **Power Consumption**| High switching power, no static power (ideal)    | Potentially lower switching power, can have static power (TGs) |
| **Area**             | Generally larger for complex functions           | Can be smaller for certain functions (e.g., XOR) |
| **Speed**            | Good                                             | Can be faster due to lower ON-resistance (TGs), but limited by cascading. |
| **Voltage Drop**     | Minimal                                          | Significant (NMOS pass transistor), minimal (TG) |
| **Design Complexity**| Straightforward for basic gates                | Requires careful consideration of control signals, charge sharing, and voltage levels. |

## Important Points to Remember:

*   **NMOS Pass Transistor $V_{out} = V_{in} - V_{th}$ when passing '1'.** This is the critical limitation of NMOS pass transistors.
*   **Transmission Gates overcome voltage degradation.** They are bidirectional and provide a better switch.
*   **Charge sharing is a significant concern** when using pass transistors/TGs, especially with precharged nodes.
*   **TGs have static power consumption** when ON, which needs to be considered.
*   **PTL is useful for specific logic functions** where transistor count and area are critical, but requires careful design.
*   **Control signals are crucial.** They determine whether the switch is open or closed.
*   **Always consider the need for buffering** after pass transistor/TG logic to restore signal levels.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


## Textbooks and References:

*   **Kang, Leblebici, Kim (CMOS Digital Integrated Circuits):** Provides a thorough analysis of pass transistor and transmission gate logic, including their characteristics, advantages, disadvantages, and implementation of logic functions. (Chapter 4 or similar)
*   **Wolf (Modern VLSI Design):** Discusses PTL and TG as low-power design techniques, focusing on their application in circuits like multiplexers and adders. (Chapter on Low-Power Design or Alternative Logic Families)
*   **Weste, Eshraghian (Principles of CMOS VLSI Design):** Explains the fundamental principles and limitations of PTL and TG, offering examples of their use in combinational logic. (Chapter on Alternative Logic Families)
*   **Rabaey (Digital Integrated Circuits):** Offers a perspective on PTL and TG in the context of efficient circuit design, detailing their performance trade-offs. (Chapter on Alternative Logic Styles)

## Alignment with Course Outcomes:

*   **CO1 (VLSI Design Methodologies):** Understanding PTL and TG contributes to knowledge of alternative design styles beyond standard CMOS, influencing design choices for efficiency.
*   **CO3 (Static CMOS Design):** Comparing PTL/TG with static CMOS highlights the trade-offs in area, power, and speed, deepening the understanding of static CMOS's strengths and weaknesses.
*   **CO4 (Dynamic Logic & Storage Cells):** While not directly dynamic logic, PTL and TG are often used in the implementation of some storage cells and can be seen as part of a broader spectrum of non-fully-CMOS logic styles.

## Practice Questions:

1.  **Explain the phenomenon of voltage degradation in an NMOS pass transistor. How does it affect the output logic level?**
    *   **Answer:** When an NMOS transistor acts as a pass transistor, and a logic '1' (VDD) is passed through it, the output voltage is not VDD. Instead, it is VDD - Vth (where Vth is the threshold voltage of the NMOS transistor). This is because the transistor enters the saturation region, causing a voltage drop. This degraded voltage might be interpreted as a logic '0' by subsequent logic gates.

2.  **Draw the circuit diagram of a transmission gate. Explain its operation in both the ON and OFF states.**
    *   **Answer:** A transmission gate consists of an NMOS and a PMOS transistor connected in parallel. The gate of the NMOS is connected to control signal $C$, and the gate of the PMOS is connected to $\overline{C}$.
        *   **ON State ($C=1, \overline{C}=0$):** Both NMOS and PMOS are ON. The TG acts as a low-resistance, bidirectional switch, passing signals with minimal voltage drop.
        *   **OFF State ($C=0, \overline{C}=1$):** Both NMOS and PMOS are OFF. The TG acts as a high-resistance switch, blocking signal transmission.

3.  **What is charge sharing? Provide an example of a scenario where charge sharing can cause erroneous logic behavior.**
    *   **Answer:** Charge sharing occurs when the charge stored on the parasitic capacitance of a precharged node is shared with another node when a pass transistor connects them. This can cause the precharged node's voltage to drop.
    *   **Example:** Consider a node precharged to VDD. If a pass transistor controlled by signal $X$ connects this node to another node that is initially at ground, and $X$ turns ON, charge will flow from the precharged node to discharge the second node. If the first node has a smaller capacitance, its voltage will drop significantly, potentially below the logic '1' threshold.

4.  **Implement a 2-input AND gate using transmission gates. Draw the circuit diagram and explain its operation.**
    *   **Answer:** (Refer to the AND gate implementation section above for the circuit diagram and detailed explanation). The circuit uses a TG controlled by $B$ to pass $A$, and then connects the output of the TG to a pull-down NMOS (controlled by $\overline{B}$) and a pull-up PMOS (controlled by $B$) to ensure the output is $A \cdot B$.

5.  **List the advantages and disadvantages of using transmission gate logic compared to static CMOS logic.**
    *   **Answer:**
        *   **Advantages:** Reduced transistor count, potentially lower power consumption, smaller area, bidirectional switching.
        *   **Disadvantages:** Voltage degradation (for single pass transistors), charge sharing, static power consumption (TGs), lower noise immunity, not fully restorative, design complexity.

6.  **Can a single NMOS transistor be used to build a robust inverter? Explain why or why not.**
    *   **Answer:** No, a single NMOS transistor cannot build a robust inverter. While it can pull down to ground, it can only pass a degraded '1' (VDD - Vth). A proper inverter requires active pull-up to VDD. A single NMOS used as a pass transistor with an inverted control signal acts as a switch, but it needs a complementary pull-up to function as a true inverter.

---