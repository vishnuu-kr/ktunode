---
title: "Microprocessors and microcontrollers: Digital circuits-I"
subject: "MECHATRONIC SYSTEMS AND CONTROL"
module: "Module 3: Microprocessors and microcontrollers: Digital circuits"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200882b85456187f36cc7"
status: "completed"
scrapedAt: "2026-05-23T16:43:38.831Z"
---
# MECHATRONIC SYSTEMS AND CONTROL

## Module 3: Microprocessors and Microcontrollers: Digital Circuits
## Topic: Microprocessors and Microcontrollers: Digital Circuits-I

---

### **Introduction**

This module introduces the fundamental building blocks of mechatronic systems: microprocessors and microcontrollers. We will delve into the digital circuits that underpin their operation, enabling them to process information, make decisions, and control various components within a mechatronic system. This topic is crucial for understanding how mechatronic systems perceive their environment (via sensors), process this information, and act upon it (via actuators).

---

### **1. Fundamental Concepts of Digital Logic**

Mechatronic systems rely on digital circuits to process information in a binary format (0s and 1s). Understanding the basic principles of digital logic is essential for comprehending how microprocessors and microcontrollers function.

#### **1.1. Binary System**
*   **Definition:** A number system that uses only two digits, 0 and 1, to represent all values.
*   **Significance in Digital Circuits:** Electrical signals are typically represented by two distinct voltage levels, corresponding to logic 0 (low voltage) and logic 1 (high voltage).
*   **Conversion:**
    *   **Decimal to Binary:** Repeatedly divide the decimal number by 2 and record the remainders in reverse order.
    *   **Binary to Decimal:** Multiply each binary digit by its corresponding power of 2 and sum the results.

    *Example:* Convert decimal 13 to binary.
    13 ÷ 2 = 6 remainder 1
    6 ÷ 2 = 3 remainder 0
    3 ÷ 2 = 1 remainder 1
    1 ÷ 2 = 0 remainder 1
    Reading remainders from bottom up: 1101 (binary)

    *Example:* Convert binary 1011 to decimal.
    1011 = (1 * 2^3) + (0 * 2^2) + (1 * 2^1) + (1 * 2^0)
    = 8 + 0 + 2 + 1 = 11 (decimal)

#### **1.2. Logic Gates**
*   **Definition:** Basic electronic circuits that perform a logical operation on one or more binary inputs and produce a single binary output.
*   **Boolean Algebra:** The mathematical system used to analyze and simplify digital circuits.
    *   **Variables:** Represent binary values (0 or 1).
    *   **Operations:** AND, OR, NOT (Inversion), XOR, NAND, NOR.

*   **Common Logic Gates:**

    | Gate Name | Symbol | Boolean Expression | Truth Table |
    |---|---|---|---|
    | **AND** | $\text{A} \cdot \text{B}$ or $\text{AB}$ | `A` | `B` | `Output` |
    |  |  |  | 0 | 0 | 0 |
    |  |  |  | 0 | 1 | 0 |
    |  |  |  | 1 | 0 | 0 |
    |  |  |  | 1 | 1 | 1 |
    | **OR** | $\text{A} + \text{B}$ | `A` | `B` | `Output` |
    |  |  |  | 0 | 0 | 0 |
    |  |  |  | 0 | 1 | 1 |
    |  |  |  | 1 | 0 | 1 |
    |  |  |  | 1 | 1 | 1 |
    | **NOT (Inverter)** | $\overline{\text{A}}$ | `A` | `Output` |
    |  |  |  | 0 | 1 |
    |  |  |  | 1 | 0 |
    | **NAND (NOT AND)** | $\overline{\text{A} \cdot \text{B}}$ | `A` | `B` | `Output` |
    |  |  |  | 0 | 0 | 1 |
    |  |  |  | 0 | 1 | 1 |
    |  |  |  | 1 | 0 | 1 |
    |  |  |  | 1 | 1 | 0 |
    | **NOR (NOT OR)** | $\overline{\text{A} + \text{B}}$ | `A` | `B` | `Output` |
    |  |  |  | 0 | 0 | 1 |
    |  |  |  | 0 | 1 | 0 |
    |  |  |  | 1 | 0 | 0 |
    |  |  |  | 1 | 1 | 0 |
    | **XOR (Exclusive OR)** | $\text{A} \oplus \text{B}$ | `A` | `B` | `Output` |
    |  |  |  | 0 | 0 | 0 |
    |  |  |  | 0 | 1 | 1 |
    |  |  |  | 1 | 0 | 1 |
    |  |  |  | 1 | 1 | 0 |

*   **Universality of NAND/NOR gates:** Any logic function can be implemented using only NAND gates or only NOR gates. This is important for integrated circuit design.

*   **Textbook Reference:** Bolton, Chapter 3 (Digital Electronics), covers these fundamental concepts extensively. Histand & Alciatore also provide an introduction to digital logic gates.

#### **1.3. Combinational Logic Circuits**
*   **Definition:** Digital circuits where the output depends only on the current input values. They do not have memory.
*   **Building Blocks:** Logic gates are combined to create more complex combinational circuits.

*   **Key Combinational Circuits:**
    *   **Half Adder:** Adds two single binary digits, producing a sum and a carry-out.
        *   Sum = A $\oplus$ B
        *   Carry-out = A $\cdot$ B
    *   **Full Adder:** Adds three single binary digits (two input bits and a carry-in bit), producing a sum and a carry-out. Used to add multi-bit numbers by cascading.
        *   Sum = A $\oplus$ B $\oplus$ Cin
        *   Carry-out = (A $\cdot$ B) + (Cin $\cdot$ (A $\oplus$ B))
    *   **Multiplexer (MUX):** Selects one of several input signals and forwards it to a single output line. The selection is controlled by select lines.
        *   *Analogy:* A rotary switch.
        *   *Application:* Data routing, implementing Boolean functions.
    *   **Demultiplexer (DEMUX):** Takes a single input signal and routes it to one of several output lines. The routing is controlled by select lines.
        *   *Analogy:* A one-to-many switch.
        *   *Application:* Data distribution.
    *   **Decoder:** Converts a binary input code into a unique output line. For an n-bit input, there are 2^n possible output lines.
        *   *Application:* Address decoding in memory systems.
    *   **Encoder:** Performs the reverse function of a decoder. It converts a set of input lines into a binary code.

*   **Textbook Reference:** Bolton provides detailed explanations and examples of these combinational circuits.

#### **1.4. Sequential Logic Circuits**
*   **Definition:** Digital circuits where the output depends not only on the current input values but also on the past sequence of inputs. They incorporate memory elements.
*   **Memory Elements:** Flip-flops and latches are the basic building blocks.
    *   **Latches:** Level-sensitive. The output changes when the enable signal is active and the input changes.
    *   **Flip-Flops:** Edge-sensitive. The output changes only on the rising or falling edge of a clock signal.

*   **Key Sequential Circuits:**
    *   **Flip-Flops (e.g., SR, JK, D, T):** Store a single bit of information.
        *   **SR Flip-Flop:** Has Set (S) and Reset (R) inputs.
        *   **JK Flip-Flop:** More versatile, can toggle its output.
        *   **D Flip-Flop:** Stores the value of the D input at the clock edge. This is very common in microcontrollers for registers.
        *   **T Flip-Flop:** Toggles its output when the T input is 1.
    *   **Registers:** A group of flip-flops used to store multiple bits of data.
        *   *Example:* An 8-bit register stores 8 bits.
    *   **Counters:** Circuits that sequence through a predefined series of states, typically counting up or down.
        *   **Asynchronous (Ripple) Counters:** Flip-flops are triggered sequentially by the output of the previous flip-flop.
        *   **Synchronous Counters:** All flip-flops are triggered by the same clock pulse, ensuring synchronized state changes.
    *   **Shift Registers:** Store data and can shift it from one flip-flop to another, either left or right.
        *   *Applications:* Serial-to-parallel conversion, parallel-to-serial conversion, delay lines.

*   **Textbook Reference:** Bolton's Chapter 3 provides a thorough treatment of sequential logic circuits.

---

### **2. Introduction to Microprocessors and Microcontrollers**

Microprocessors and microcontrollers are the "brains" of mechatronic systems, enabling them to perform complex tasks.

#### **2.1. Microprocessor (MPU)**
*   **Definition:** A central processing unit (CPU) on a single integrated circuit (IC). It contains the arithmetic logic unit (ALU), control unit, and registers.
*   **Functionality:** Executes instructions from a program stored in external memory.
*   **Key Components:**
    *   **Arithmetic Logic Unit (ALU):** Performs arithmetic (addition, subtraction) and logical operations (AND, OR, NOT).
    *   **Control Unit:** Fetches instructions from memory, decodes them, and generates control signals to execute them.
    *   **Registers:** Small, high-speed memory locations within the CPU used to temporarily store data and instructions.
    *   **Buses:** Electrical pathways that connect the CPU to other components (memory, I/O devices) to transfer data, addresses, and control signals.
        *   **Address Bus:** Carries memory addresses from the CPU to memory.
        *   **Data Bus:** Carries data between the CPU, memory, and I/O devices.
        *   **Control Bus:** Carries control signals (e.g., read, write, clock).
*   **System Architecture:** A microprocessor-based system typically requires external components like RAM, ROM (or flash memory), and I/O peripherals, connected via buses.
*   **Textbook Reference:** Histand & Alciatore introduce the basic architecture of microprocessors.

*   **Example Application:** Personal computers, servers, high-performance control systems where external memory and processing power are paramount.

#### **2.2. Microcontroller (MCU)**
*   **Definition:** A complete computer system on a single integrated circuit (IC). It integrates a CPU, memory (RAM and ROM/Flash), and input/output (I/O) peripherals.
*   **Functionality:** Designed for embedded control applications. It can directly interact with sensors and actuators without the need for extensive external circuitry.
*   **Key Components (Integrated):**
    *   **CPU:** Similar to a microprocessor, handles instruction execution.
    *   **Memory:**
        *   **RAM (Random Access Memory):** Volatile memory for temporary data storage during program execution.
        *   **ROM/Flash Memory:** Non-volatile memory for storing the program instructions.
    *   **Input/Output (I/O) Ports:** Digital pins that can be configured as inputs (to read sensor data) or outputs (to control actuators).
    *   **Peripherals:** Built-in hardware modules that perform specific functions, such as:
        *   **Timers/Counters:** For timing events, generating delays, and creating pulse-width modulation (PWM) signals.
        *   **Analog-to-Digital Converters (ADCs):** Convert analog sensor signals into digital values.
        *   **Digital-to-Analog Converters (DACs):** Convert digital values into analog signals.
        *   **Communication Interfaces:** e.g., UART, SPI, I2C for communicating with other devices.
*   **Textbook Reference:** Bishop's "Mechatronics: an introduction" and Shetty & Kolk's "Mechatronics system design" provide excellent overviews of microcontrollers and their role in mechatronic systems. Merzouki et al. also discuss microcontrollers in the context of intelligent mechatronic systems.

*   **Example Application:** Washing machines, car engine control units, robotics, industrial automation.

#### **2.3. Differences between Microprocessors and Microcontrollers**

| Feature        | Microprocessor (MPU)                                      | Microcontroller (MCU)                                        |
|----------------|-----------------------------------------------------------|--------------------------------------------------------------|
| **Integration**| CPU only (requires external memory and peripherals)         | CPU, Memory, and I/O peripherals on a single chip           |
| **System Design**| More complex, requires designing external bus interfaces | Simpler, all components are integrated                       |
| **Cost**       | Generally higher for the complete system                  | Generally lower for embedded applications                    |
| **Power Consumption**| Higher due to external components and flexibility       | Lower, designed for embedded, often low-power applications |
| **Speed**      | Can be very high for complex processing                   | Varies, but typically optimized for control tasks            |
| **Applications**| General-purpose computing, servers, workstations          | Embedded systems, control applications, automation           |
| **Flexibility**| High, can choose and configure external components        | Lower, peripherals are fixed on the chip                     |

*   **Learning Outcome Alignment:** This section directly addresses **CO3: Select microprocessors and microcontrollers for the implementation in mechatronic system (Knowledge Level: K2)** by outlining their characteristics and differentiating factors.

---

### **3. Microprocessor and Microcontroller Architecture**

Understanding the internal architecture is key to utilizing them effectively.

#### **3.1. Von Neumann vs. Harvard Architecture**

*   **Von Neumann Architecture:**
    *   **Concept:** Uses a single memory space for both instructions and data. Instructions and data share the same bus.
    *   **Pros:** Simpler hardware design.
    *   **Cons:** Potential bottleneck (Von Neumann bottleneck) as instructions and data cannot be fetched simultaneously.
    *   **Example:** Many early microprocessors and some microcontrollers.

*   **Harvard Architecture:**
    *   **Concept:** Uses separate memory spaces and buses for instructions and data.
    *   **Pros:** Allows simultaneous fetching of instructions and data, leading to faster execution.
    *   **Cons:** More complex hardware design.
    *   **Example:** Many modern microcontrollers (e.g., PIC, AVR) and DSPs. Some processors have a modified Harvard architecture where there are separate caches for instructions and data but a unified main memory.

*   **Textbook Reference:** Histand & Alciatore might touch upon these architectures when discussing processor fundamentals.

#### **3.2. Key Architectural Components (Common to both, with variations)**

*   **CPU Core:** The central processing unit responsible for executing instructions. It includes:
    *   **Program Counter (PC):** Points to the memory address of the next instruction to be fetched.
    *   **Instruction Register (IR):** Holds the currently fetched instruction.
    *   **Accumulator:** A general-purpose register used for arithmetic and logic operations.
    *   **General-Purpose Registers:** Versatile registers for storing data.
    *   **Stack Pointer (SP):** Points to the top of the stack in memory, used for function calls and local variable storage.

*   **Memory Unit:**
    *   **Program Memory (ROM/Flash):** Stores the executable code.
    *   **Data Memory (RAM):** Stores variables and temporary data.

*   **Input/Output (I/O) Interface:**
    *   **Parallel I/O Ports:** Groups of digital pins that can be configured as input or output.
    *   **Serial I/O Ports:** For communication with other devices using serial protocols.

*   **Peripherals:** (Specific to Microcontrollers)
    *   **Timers/Counters:** Generate time delays, measure pulse widths, and create PWM signals for actuator control.
    *   **Analog-to-Digital Converters (ADCs):** Convert analog sensor signals (e.g., temperature, pressure) into digital values that the microcontroller can process.
    *   **Digital-to-Analog Converters (DACs):** Convert digital control signals into analog outputs (e.g., for controlling motor speed with a variable voltage).
    *   **Interrupt Controllers:** Manage external and internal events that require immediate attention from the CPU.
    *   **Watchdog Timers:** A safety mechanism that resets the microcontroller if the program gets stuck or hangs.

*   **Textbook Reference:** Bolton's Chapter 11 (Microprocessor and Microcontroller Systems) provides a good overview of these components and their functions.

---

### **4. Microcontrollers in Mechatronic Systems**

Microcontrollers are the workhorses of modern mechatronics due to their integrated nature and cost-effectiveness.

#### **4.1. Role in Mechatronic Systems**

*   **Data Acquisition:** Reading data from sensors (e.g., position, speed, temperature, force).
    *   **Learning Outcome Alignment:** Directly supports **CO1: Comprehend the importance of sensors with application to mechatronic systems (Knowledge Level: K2)** by highlighting how MCUs interface with sensors.
*   **Signal Conditioning:** Processing raw sensor data (e.g., filtering, amplification, analog-to-digital conversion).
    *   **Learning Outcome Alignment:** Directly supports **CO2: Identify actuator mechanisms and signal conditioning processes (Knowledge Level: K2)** by showing the MCU's role in processing sensor inputs which are precursors to actuator control.
*   **Decision Making:** Implementing control algorithms based on processed sensor data.
*   **Actuator Control:** Generating output signals to control actuators (e.g., motors, solenoids, hydraulic valves) often via PWM or digital ON/OFF signals.
    *   **Learning Outcome Alignment:** Directly supports **CO2: Identify actuator mechanisms and signal conditioning processes (Knowledge Level: K2)** by showing how MCUs drive actuators.

*   **Textbook Reference:** All the textbooks provide numerous examples of microcontrollers in mechatronic applications. Shetty & Kolk, and Bishop are particularly strong in this area.

#### **4.2. Interfacing with Sensors and Actuators**

*   **Sensors:**
    *   **Analog Sensors:** Require an ADC to convert analog voltage into digital values (e.g., potentiometers, thermistors, strain gauges).
    *   **Digital Sensors:** Output data in a digital format, often via serial communication protocols (e.g., rotary encoders, digital temperature sensors like DS18B20).
*   **Actuators:**
    *   **Digital Actuators:** Controlled by simple ON/OFF signals (e.g., relays, solenoids).
    *   **Analog Actuators:** Require varying control signals (e.g., DC motors controlled by PWM for speed, servo motors controlled by PWM for position).

*   **Textbook Reference:** Bolton's Chapter 11 and Histand & Alciatore's sections on interfacing provide detailed examples of sensor and actuator connections.

---

### **5. Practical Considerations and Examples**

#### **5.1. Common Microcontroller Architectures (Examples for CO3)**

*   **AVR Microcontrollers (e.g., ATmega series used in Arduino):**
    *   RISC architecture, Harvard architecture.
    *   Popular for hobbyist projects and rapid prototyping due to the Arduino platform.
    *   Features like ADCs, Timers, PWM outputs are crucial for mechatronics.
*   **PIC Microcontrollers (e.g., PIC16, PIC18 series):**
    *   Developed by Microchip Technology.
    *   Widely used in industrial and automotive applications.
    *   Offer a range of peripherals and low power consumption.
*   **ARM Cortex-M Microcontrollers (e.g., STM32 series):**
    *   Widely adopted in embedded systems for their performance, power efficiency, and extensive peripheral sets.
    *   Often used in more complex mechatronic systems.

*   **Learning Outcome Alignment:** This directly supports **CO3: Select microprocessors and microcontrollers for the implementation in mechatronic system (Knowledge Level: K2)** by providing examples of commonly used MCUs.

#### **5.2. Example Scenario: Simple Robotic Arm Control**

Consider controlling a simple robotic arm with two servo motors (for joint angles) and reading the angle from a potentiometer.

1.  **Sensors:** A potentiometer connected to an analog input pin of the microcontroller.
2.  **Microcontroller:** An AVR microcontroller (like ATmega328P).
3.  **Actuators:** Two servo motors.
4.  **Process:**
    *   The microcontroller reads the analog value from the potentiometer using its ADC.
    *   This analog value is converted to a digital number representing the desired joint angle.
    *   A control algorithm converts this desired angle into a Pulse-Width Modulation (PWM) signal.
    *   The PWM signal is outputted to the servo motor driver, controlling the servo's position.
    *   This entire process is repeated in a loop, allowing for real-time control.

*   **Learning Outcome Alignment:** This scenario demonstrates the application of **CO1** (sensor reading), **CO2** (actuator control via PWM), and **CO3** (selection of a suitable MCU). It also implicitly supports **CO4** by hinting at the analysis of system response (how the arm moves based on control).

---

### **Important Points to Remember**

*   **Binary System:** The foundation of all digital operations.
*   **Logic Gates:** The fundamental building blocks of digital circuits.
*   **Combinational vs. Sequential Circuits:** The key difference is memory.
*   **Microprocessors vs. Microcontrollers:** Microcontrollers are complete systems on a chip, ideal for embedded control.
*   **Integrated Peripherals:** The advantage of microcontrollers in mechatronics lies in their built-in ADCs, timers, PWM generators, etc.
*   **Interfacing:** Proper understanding of how to connect sensors and actuators to the MCU's I/O pins is critical.

---

### **Practice Questions and Exercises**

**Question 1 (Knowledge Level: K2):**
Explain the primary difference between a microprocessor and a microcontroller. For a mechatronic system requiring real-time motor speed control and reading from multiple analog sensors, would you typically choose a microprocessor or a microcontroller? Justify your answer.

**Answer:**
The primary difference is integration. A microprocessor is a CPU, requiring external memory and peripherals. A microcontroller is a complete system on a chip, integrating a CPU, memory, and I/O peripherals. For real-time motor speed control (often involving PWM) and reading from analog sensors (requiring ADCs), a **microcontroller** is typically the better choice. This is because it has built-in peripherals like ADCs and PWM generators, simplifying the design, reducing component count, and lowering cost, making it ideal for embedded control applications.

**Question 2 (Knowledge Level: K2):**
What is the role of an Analog-to-Digital Converter (ADC) in a mechatronic system that uses a microcontroller to read the position of a robotic arm using a potentiometer?

**Answer:**
A potentiometer is an analog sensor, producing a voltage output that varies with its position. Microcontrollers process data in a digital format. The ADC's role is to convert this variable analog voltage from the potentiometer into a discrete digital number that the microcontroller can read and interpret. This digital value is then used by the microcontroller's control program to determine the robotic arm's current joint angle.

**Question 3 (Knowledge Level: K2):**
If you need to build a digital circuit that outputs a '1' only when both inputs A and B are '1', which logic gate would you use, and what would be its Boolean expression?

**Answer:**
You would use an **AND** gate. Its Boolean expression is $Output = A \cdot B$ (or $AB$).

**Question 4 (Conceptual - relating to future modules):**
Imagine you are designing a system to control the temperature of an oven. What type of signals would you expect to receive from a temperature sensor, and what type of signal would you likely send to a heating element to control the temperature? Briefly explain why.

**Answer:**
You would likely receive an **analog signal** from a temperature sensor (e.g., a thermistor or thermocouple) that varies with temperature. You would likely send a **digital signal, specifically Pulse-Width Modulation (PWM)**, to control a heating element. The microcontroller would adjust the duty cycle of the PWM signal to effectively regulate the average power delivered to the heating element, thereby controlling the oven's temperature. This aligns with **CO1** (sensor importance) and **CO2** (actuator control signal conditioning/generation).

---

This concludes the first part of our exploration into microprocessors and microcontrollers. The next topic will build upon these fundamentals by delving deeper into specific microcontroller architectures and programming.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
