---
title: "Digital circuits-II"
subject: "MECHATRONIC SYSTEMS"
module: "Module 3: Microprocessors and microcontrollers: Digital circuits"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36ba8"
status: "completed"
scrapedAt: "2026-05-23T16:42:36.024Z"
---
# MECHATRONIC SYSTEMS: Module 3: Microprocessors and Microcontrollers: Digital Circuits - Digital Circuits II

This module delves into the fundamental digital circuits that form the building blocks of microprocessors and microcontrollers, crucial components in mechatronic systems. We will build upon the foundational knowledge of digital logic from Digital Circuits I to explore more complex combinatorial and sequential logic circuits.

## 1. Review of Digital Circuits I Concepts

Before proceeding, let's briefly recap key concepts from Digital Circuits I.

*   **Binary System:** The foundation of digital electronics, using only two states: 0 (low) and 1 (high).
*   **Logic Gates:** Fundamental building blocks of digital circuits (AND, OR, NOT, NAND, NOR, XOR, XNOR) that perform logical operations on binary inputs.
*   **Boolean Algebra:** The mathematical system used to analyze and simplify digital logic circuits.
*   **Truth Tables:** Tabular representations showing the output of a logic circuit for all possible combinations of input values.
*   **Combinational Logic Circuits:** Circuits whose output depends only on the current input values, without any memory of past inputs. Examples include adders, multiplexers, and decoders.

**Reference:** Bolton, W. (2010) - Chapters covering basic logic gates, Boolean algebra, and combinational circuits.

## 2. Advanced Combinational Logic Circuits

We will now explore more complex combinational circuits that are essential for data manipulation and control within microprocessors and microcontrollers.

### 2.1. Arithmetic Circuits

These circuits perform arithmetic operations on binary numbers.

*   **Half Adder:** Adds two single bits and produces a sum bit and a carry bit.
    *   **Inputs:** A, B
    *   **Outputs:** Sum (S), Carry (C)
    *   **Equations:** S = A ⊕ B, C = A ⋅ B
    *   **Implementation:** One XOR gate and one AND gate.

*   **Full Adder:** Adds three single bits (two input bits and a carry-in bit) and produces a sum bit and a carry-out bit.
    *   **Inputs:** A, B, Cin (Carry-in)
    *   **Outputs:** Sum (S), Cout (Carry-out)
    *   **Equations:** S = A ⊕ B ⊕ Cin, Cout = (A ⋅ B) + (Cin ⋅ (A ⊕ B))
    *   **Implementation:** Can be built using two half adders and an OR gate.

*   **Ripple-Carry Adder:** Multiple full adders connected in series, where the carry-out of one stage becomes the carry-in of the next.
    *   **Purpose:** To add multi-bit binary numbers.
    *   **Limitation:** The carry signal "ripples" through the stages, making it slow for a large number of bits.

*   **Parallel Adder (e.g., Carry-Lookahead Adder):** More advanced designs that reduce the delay caused by the ripple effect by pre-calculating carries. (Brief mention, detailed design might be beyond this scope).

**Example:** Adding 5 (0101) and 3 (0011) using a 4-bit ripple-carry adder.

**Key Concept:** The speed of arithmetic operations in a microprocessor is directly influenced by the design of these arithmetic circuits.

### 2.2. Multiplexers (MUX)

*   **Definition:** A digital switch that selects one of several input signals and forwards it to a single output line.
*   **Function:** Acts like a digital data selector.
*   **Inputs:** Data inputs (2^n), Select inputs (n), Enable input (optional)
*   **Output:** Single data output.
*   **Operation:** The select inputs determine which data input is routed to the output. If the enable input is active, the MUX operates; otherwise, the output is disabled (often at a high impedance or a default logic level).

**Example:** A 4-to-1 MUX has 4 data inputs and 2 select inputs. With select inputs '00', input D0 is selected; with '01', D1 is selected, and so on.

**Application in Mechatronics:** Selecting data from different sensors, choosing between control signals. **(Relates to CO1 & CO2)**

### 2.3. Demultiplexers (DEMUX)

*   **Definition:** The inverse of a multiplexer. It takes a single input signal and routes it to one of several output lines.
*   **Function:** Acts like a digital data distributor.
*   **Inputs:** Single data input, Select inputs (n), Enable input (optional)
*   **Outputs:** Data outputs (2^n).
*   **Operation:** The select inputs determine which output line receives the input signal.

**Example:** A 1-to-4 DEMUX has 1 data input and 2 select inputs. With select inputs '00', the input is routed to output Y0; with '01', to Y1, and so on.

**Application in Mechatronics:** Distributing control signals to different actuators or subsystems. **(Relates to CO2)**

### 2.4. Decoders

*   **Definition:** A combinational circuit that converts coded input signals into a set of unique output signals.
*   **Function:** Typically used to translate an n-bit binary input into 2^n unique output lines, with only one output line active for each input combination.
*   **Inputs:** n input lines (representing the code).
*   **Outputs:** 2^n output lines.
*   **Operation:** For each unique combination of input bits, a specific output line is activated.

**Example:** A 3-to-8 decoder has 3 input lines (A, B, C) and 8 output lines (Y0 to Y7). If the input is 011 (binary 3), then output Y3 will be active (e.g., logic 1), and all other outputs will be inactive (e.g., logic 0).

**Application in Mechatronics:** Address decoding in memory systems, selecting specific instructions or devices in a microcontroller. **(Relates to CO3)**

**Important Point:** Decoders are fundamental to selecting specific memory locations or I/O ports in microcontrollers.

### 2.5. Encoders

*   **Definition:** The inverse of a decoder. It converts a set of activated input lines into a coded binary output.
*   **Function:** To represent multiple input states with a fewer number of output bits.
*   **Inputs:** 2^n input lines.
*   **Outputs:** n output lines.
*   **Operation:** Only one input line is typically active at a time. The encoder generates a binary code corresponding to the active input.

**Example:** An 8-to-3 encoder with 8 input lines (I0 to I7) and 3 output lines (A, B, C). If input I5 is active, the output might be 101 (binary 5).

**Application in Mechatronics:** Reading keyboard inputs, converting switch states into binary codes. **(Relates to CO1 & CO3)**

## 3. Sequential Logic Circuits

Sequential circuits have memory, meaning their output depends not only on the current inputs but also on the past states of the circuit. This is crucial for storing data and implementing control sequences.

### 3.1. Latches

*   **Definition:** A fundamental building block of memory that can store a single bit of information.
*   **Function:** To hold a state until instructed to change.
*   **Types:**
    *   **SR Latch (Set-Reset Latch):** Has two inputs, S (Set) and R (Reset).
        *   S=1, R=0: Sets the output to 1.
        *   S=0, R=1: Resets the output to 0.
        *   S=0, R=0: Holds the current state (memory).
        *   S=1, R=1: Invalid or forbidden state (leads to unstable output).
    *   **D Latch (Data Latch):** Has a data input (D) and an enable input (E).
        *   When E is active, the output (Q) follows the D input.
        *   When E becomes inactive, the output holds the last value of D.

**Reference:** Histand & Alciatore (2003) - Chapters covering basic flip-flops and latches.

### 3.2. Flip-Flops

*   **Definition:** A more controlled version of a latch, triggered by a clock signal. This synchronization is key to building complex digital systems.
*   **Function:** To store a bit of data and update it only at specific moments defined by the clock.
*   **Types (Triggered by Clock Edge):**
    *   **SR Flip-Flop:** Similar to SR latch but edge-triggered.
    *   **JK Flip-Flop:** A versatile flip-flop with inputs J and K.
        *   J=0, K=0: Hold the current state.
        *   J=0, K=1: Reset to 0.
        *   J=1, K=0: Set to 1.
        *   J=1, K=1: Toggle the state (flip).
    *   **D Flip-Flop (Data Flip-Flop):** Has a data input (D) and a clock input. The output (Q) changes to match the D input on the active clock edge. This is one of the most common types.
    *   **T Flip-Flop (Toggle Flip-Flop):** Has a single input (T). If T=0, the state is held. If T=1, the state is toggled on the active clock edge.

**Key Concept:** Flip-flops are the fundamental memory elements in microprocessors and microcontrollers, storing data bits in registers. **(Relates to CO3)**

### 3.3. Registers

*   **Definition:** A collection of flip-flops used to store a group of bits (a word).
*   **Function:** To hold data that the microprocessor or microcontroller is currently processing.
*   **Types:**
    *   **Shift Register:** Can shift its stored bits to the left or right, one position at a time, on each clock pulse. Used for serial-to-parallel and parallel-to-serial data conversion.
        *   **Example:** A serial-in, parallel-out (SIPO) shift register can receive data bit-by-bit and output all bits simultaneously.
    *   **Parallel Register:** Stores data in parallel. All bits are read or written simultaneously.

**Application in Mechatronics:** Data storage within the microcontroller's CPU (e.g., accumulator, instruction register), buffering data from sensors. **(Relates to CO3)**

### 3.4. Counters

*   **Definition:** A sequential circuit that counts a sequence of clock pulses.
*   **Function:** To keep track of the number of events or time intervals.
*   **Types:**
    *   **Asynchronous (Ripple) Counter:** Flip-flops are connected in series, with the output of one triggering the next. Similar to ripple-carry adders in terms of propagation delay.
    *   **Synchronous Counter:** All flip-flops are triggered by the same clock signal. This offers faster operation and is more common in microcontrollers.
    *   **Up Counter:** Counts from 0 upwards.
    *   **Down Counter:** Counts from a maximum value downwards.
    *   **Up/Down Counter:** Can count in either direction.

**Application in Mechatronics:** Timing control, frequency division, measuring elapsed time, controlling step motors. **(Relates to CO4)**

**Important Point:** Counters are essential for implementing timers and event counting within mechatronic systems.

## 4. State Machines (Finite State Machines - FSMs)

State machines are a powerful tool for designing sequential logic circuits that control the behavior of a system based on its current state and inputs.

*   **Definition:** A mathematical model of computation that describes the behavior of a system as a set of states, transitions between states, and outputs associated with states or transitions.
*   **Components:**
    *   **States:** Represent different conditions or configurations of the system.
    *   **Transitions:** The movement from one state to another, triggered by input events or conditions.
    *   **Inputs:** External signals that influence transitions.
    *   **Outputs:** Signals generated by the system, which can be associated with states (Moore machine) or transitions (Mealy machine).
*   **Types:**
    *   **Moore Machine:** Output depends only on the current state.
    *   **Mealy Machine:** Output depends on the current state and the current inputs.

**Design Process:**
1.  **Define States:** Identify all possible operational states of the system.
2.  **Define Transitions:** Determine how the system moves between states based on inputs.
3.  **Define Outputs:** Specify the outputs for each state or transition.
4.  **Create State Table:** A tabular representation of states, inputs, next states, and outputs.
5.  **Implement with Flip-Flops and Logic Gates:** Use flip-flops to store the current state and combinational logic to determine the next state and outputs.

**Example (Simple):** A traffic light controller.
*   **States:** Red, Yellow, Green.
*   **Inputs:** Timer (time elapsed), Pedestrian button.
*   **Transitions:** Green -> Yellow (after timer), Yellow -> Red (after timer), Red -> Green (after timer/pedestrian).
*   **Outputs:** Red light ON/OFF, Yellow light ON/OFF, Green light ON/OFF.

**Application in Mechatronics:** Control sequences for robotics, automated manufacturing processes, motor control, and any system requiring sequential operations. **(Relates to CO1, CO2, CO4)**

**Reference:** Shetty & Kolk (2010) - Chapters on sequential logic design and state machines.

## 5. Digital-to-Analog Converters (DACs) and Analog-to-Digital Converters (ADCs)

Microcontrollers interact with the real world, which is analog. DACs and ADCs are crucial interface components.

### 5.1. Digital-to-Analog Converters (DACs)

*   **Function:** Converts a digital binary input into an analog output voltage or current.
*   **Resolution:** The number of bits in the digital input determines the number of discrete analog output levels. Higher resolution means finer steps in the analog output.
*   **Types:**
    *   **Weighted Resistor DAC:** Each bit controls a switch connected to a resistor of a specific weighted value.
    *   **R-2R Ladder DAC:** Uses a ladder network of resistors with values R and 2R, offering better precision and simpler implementation than weighted resistor DACs.

**Application in Mechatronics:** Generating control signals for analog actuators (e.g., controlling motor speed with a variable voltage), creating audio or video signals. **(Relates to CO2)**

### 5.2. Analog-to-Digital Converters (ADCs)

*   **Function:** Converts an analog input voltage or current into a digital binary output.
*   **Resolution:** The number of bits in the digital output determines the number of discrete levels the analog input can be divided into.
*   **Quantization Error:** The inherent error introduced by approximating an analog value with a discrete digital value.
*   **Sampling:** The process of taking discrete measurements of the analog signal at regular time intervals. The **sampling rate** is critical for accurately representing the analog signal.
*   **Types:**
    *   **Successive Approximation ADC (SAR ADC):** A common type that uses a DAC and a comparator. It iteratively tries to match the analog input with a digital code.
    *   **Flash ADC:** The fastest type, using many comparators simultaneously.
    *   **Delta-Sigma ADC:** Offers very high resolution but slower conversion speeds, often used in precision measurement.

**Application in Mechatronics:** Reading sensor data (temperature, pressure, position, voltage), interfacing with analog input devices. **(Relates to CO1 & CO4)**

**Important Point:** ADCs are essential for bridging the gap between the physical analog world and the digital processing capabilities of microcontrollers.

## 6. Introduction to Microcontrollers

While this module focuses on digital circuits, understanding their application within microcontrollers is vital.

*   **Microcontroller:** A small computer on a single integrated circuit (IC) containing a processor core, memory (RAM and ROM/Flash), and programmable input/output peripherals.
*   **Key Peripherals often found in Microcontrollers:**
    *   **Timers/Counters:** For timing and counting operations.
    *   **Analog-to-Digital Converters (ADCs):** For reading analog sensors.
    *   **Digital-to-Analog Converters (DACs):** For outputting analog control signals.
    *   **Serial Communication Interfaces (UART, SPI, I2C):** For communicating with other devices.
    *   **General Purpose Input/Output (GPIO) Pins:** For digital input and output.
    *   **Pulse Width Modulation (PWM) Modules:** For controlling analog devices with digital signals (e.g., motor speed).

**Application in Mechatronics:** Microcontrollers are the "brains" of most mechatronic systems, processing sensor inputs, making decisions, and controlling actuators. **(Relates to CO3)**

**Reference:** Bolton (2010) & Histand & Alciatore (2003) - Chapters introducing microcontrollers and their architecture.

## 7. Linking Digital Circuits to Mechatronic Systems

*   **Control Logic:** Digital circuits, implemented within microcontrollers, execute the control algorithms that govern the behavior of mechatronic systems. This involves processing sensor data (via ADCs), making decisions based on FSMs or programmed logic, and generating actuator commands (via DACs or PWM). **(Relates to CO1, CO2, CO4)**
*   **Data Handling:** Registers and memory within microcontrollers store sensor readings, intermediate calculations, and actuator setpoints. Shift registers are crucial for serial data transmission from sensors or to actuators. **(Relates to CO1, CO2, CO3)**
*   **Timing and Synchronization:** Counters and timers ensure precise timing for operations like motor stepping, cyclic control, and communication protocols. **(Relates to CO4)**
*   **Device Selection:** Decoders are used to select specific peripherals or memory locations within the microcontroller, allowing it to interact with different parts of the system. **(Relates to CO3)**

## Practice Questions & Exercises

**Question 1:**
A 4-bit binary number (1011) is to be added to another 4-bit binary number (0101) using a ripple-carry adder.
a) Draw the block diagram of the ripple-carry adder required for this operation, showing the individual full adders.
b) Show the calculation for each bit position, including the carry propagation. What is the final sum and carry-out?
c) If this was a synchronous counter, what would be the main advantage over the ripple-carry adder in terms of speed?

**Answer 1:**
a) The block diagram would show four full adders. Let the first number be A = A3 A2 A1 A0 (1011) and the second be B = B3 B2 B1 B0 (0101).
   *   FA0: Inputs A0, B0, Cin0 (0). Outputs S0, Cout0.
   *   FA1: Inputs A1, B1, Cin1 (=Cout0). Outputs S1, Cout1.
   *   FA2: Inputs A2, B2, Cin2 (=Cout1). Outputs S2, Cout2.
   *   FA3: Inputs A3, B3, Cin3 (=Cout2). Outputs S3, Cout3 (final carry-out).

b)
    *   **Bit 0:** A0=1, B0=1, Cin0=0. S0 = 1⊕1⊕0 = 0, Cout0 = (1⋅1) + (0⋅(1⊕1)) = 1.
    *   **Bit 1:** A1=1, B1=0, Cin1=1. S1 = 1⊕0⊕1 = 0, Cout1 = (1⋅0) + (1⋅(1⊕0)) = 1.
    *   **Bit 2:** A2=0, B2=1, Cin2=1. S2 = 0⊕1⊕1 = 0, Cout2 = (0⋅1) + (1⋅(0⊕1)) = 1.
    *   **Bit 3:** A3=1, B3=0, Cin3=1. S3 = 1⊕0⊕1 = 0, Cout3 = (1⋅0) + (1⋅(1⊕0)) = 1.
    Final Sum (S3 S2 S1 S0) = 0000. Final Carry-out (Cout3) = 1.
    The result is 10000 (binary for 16). (1011 is 11, 0101 is 5. 11+5 = 16).

c) The main advantage of a synchronous counter over a ripple-carry counter is **faster operation** and **elimination of propagation delay (glitches)** because all flip-flops are clocked simultaneously.

---

**Question 2:**
You are designing a system to control a robot arm that has three different modes: "Move", "Grasp", and "Release". You want to use a microcontroller to manage these modes.
a) How can you use a decoder to select the active mode based on a 2-bit binary input from a mode selection switch?
b) If you have a rotary encoder attached to a joint to measure its angle, what type of ADC would be suitable for converting the analog output of the encoder to a digital value for processing? Briefly explain why.
c) Which type of sequential circuit would be most appropriate for storing the current operating mode of the robot arm, ensuring that the mode is updated only when a valid new mode selection is made?

**Answer 2:**
a) You would use a **2-to-4 decoder**. Let the 2-bit mode selection input be represented by bits S1 and S0.
    *   Input 00 could correspond to "Idle" or be unused.
    *   Input 01 could activate the "Move" mode.
    *   Input 10 could activate the "Grasp" mode.
    *   Input 11 could activate the "Release" mode.
    The decoder would have 4 output lines, say Y0, Y1, Y2, Y3. With input 01, Y1 would be active, indicating "Move" mode. You would then connect these active output lines to control logic or directly to mode selection pins of other components.

b) A **Successive Approximation ADC (SAR ADC)** would be a suitable choice for converting the analog output of a rotary encoder.
    *   **Reason:** Rotary encoders typically produce a relatively stable analog output (or can be made to do so) representing the angle. SAR ADCs provide a good balance between conversion speed and accuracy for such applications. They are commonly integrated into microcontrollers, making them convenient. For high-speed, highly dynamic angle changes, a faster ADC like a Flash ADC might be considered, but SAR is a good starting point.

c) A **D Flip-Flop** would be most appropriate for storing the current operating mode.
    *   **Reason:** The mode selection switch provides the input (D). A clock signal (perhaps generated by debouncing the switch or a specific clock pulse from the system) would be used to update the mode. The D flip-flop will capture the input state on the active clock edge and hold it until the next active edge, ensuring that the mode is updated only when a valid new selection is made (and synchronized by the clock).

---

**Question 3:**
Explain the difference between a latch and a flip-flop. Why are flip-flops preferred in microprocessor designs?

**Answer 3:**
*   **Latch:** A basic memory element that stores a bit. Its output changes immediately whenever the input changes and the enable signal is active. Latches are **level-sensitive**; they stay in their current state as long as the enable signal is high.
*   **Flip-Flop:** Also a memory element, but its output changes only at a specific point in time, determined by the **clock edge** (either rising or falling). Flip-flops are **edge-triggered**.

**Why Flip-Flops are Preferred in Microprocessor Designs:**
1.  **Synchronization:** The edge-triggering mechanism allows for precise synchronization of data transfers. All critical operations within a microprocessor happen in lockstep with the clock signal.
2.  **Clocked Operation:** This ensures that data updates occur predictably at specific times, preventing race conditions and glitches that can occur with level-sensitive latches in complex, asynchronous environments.
3.  **Predictable State Changes:** In a sequential circuit like a register or counter, using flip-flops ensures that all bits update simultaneously (or in a controlled sequence), leading to predictable behavior. Latches, if used for memory, could lead to intermediate states where not all bits are updated at the same time, causing errors.
4.  **Building Blocks for Complex Logic:** Flip-flops are the fundamental building blocks for registers, counters, and state machines, which are integral to the operation of any microprocessor.

---

**Question 4:**
Describe the function of a multiplexer (MUX) and provide a typical application in a mechatronic system.

**Answer 4:**
*   **Function of a Multiplexer (MUX):** A multiplexer is a combinational logic circuit that selects one of several input data lines and routes it to a single output line. The selection is controlled by a set of select lines. If there are 'n' select lines, the MUX can have up to 2^n input data lines. It's often referred to as a "data selector".

*   **Typical Application in a Mechatronic System:**
    *   **Sensor Data Selection:** In a mechatronic system, you might have multiple sensors (e.g., temperature sensor, pressure sensor, proximity sensor) connected to an analog-to-digital converter (ADC). A multiplexer can be used before the ADC to select which sensor's analog output is fed to the ADC at any given time. The microcontroller's output pins, acting as select lines for the MUX, can choose which sensor to read, allowing a single ADC to service multiple analog inputs efficiently. This is crucial for resource management in embedded systems. **(Relates to CO1)**

## Important Points to Remember

*   **Combinational vs. Sequential:** Combinational circuits' outputs depend only on current inputs, while sequential circuits' outputs depend on current inputs and past states (memory).
*   **Speed of Arithmetic:** Ripple-carry adders are simple but slow. Synchronous circuits are generally faster and more predictable.
*   **Memory Elements:** Latches are level-sensitive, while flip-flops are edge-triggered. Flip-flops are preferred for clocked synchronous systems.
*   **Data Flow:** MUXes select data, DEMUXes distribute data, decoders select devices/instructions, and encoders convert active lines to codes.
*   **State Machines:** Essential for designing complex control sequences in mechatronic systems.
*   **ADC/DAC Interface:** Crucial for converting between the analog physical world and the digital processing world.
*   **Microcontrollers:** Integrate processors, memory, and peripherals (including digital circuits) to form the core of mechatronic systems.

This comprehensive study guide covers the essential digital circuits II concepts relevant to mechatronic systems, building upon foundational knowledge and linking directly to the course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
