---
title: "Typical system - Core of the Embedded System"
subject: "EMBEDDED SYSTEMS"
module: "Module 1: Introduction to Embedded Systems:"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c23a"
status: "completed"
scrapedAt: "2026-05-20T17:05:22.513Z"
---
# Embedded Systems: Module 1 - Introduction to Embedded Systems
## Topic: Typical System - Core of the Embedded System

---

### **Learning Outcomes:**

*   **LO1:** Understand the fundamental building blocks of a typical embedded system.
*   **LO2:** Identify and explain the role of the core processing unit in an embedded system.
*   **LO3:** Differentiate between various types of processing units commonly used in embedded systems.
*   **LO4:** Explain the significance of memory in an embedded system and its various types.
*   **LO5:** Describe the function of input/output (I/O) peripherals and their importance in interacting with the external world.

---

### **1. What is an Embedded System?**

*   **Definition:** An embedded system is a combination of computer hardware and software designed to perform a dedicated function, often within a larger mechanical or electrical system.
*   **Key Characteristics:**
    *   **Dedicated Functionality:** Performs a specific task, unlike general-purpose computers (e.g., a laptop).
    *   **Real-time Operation:** Often required to respond to events within strict time constraints.
    *   **Resource Constraints:** Typically have limited processing power, memory, and power consumption.
    *   **Interaction with the Real World:** Interacts with sensors, actuators, and users through I/O interfaces.
    *   **Reliability and Robustness:** Designed to operate continuously and reliably for extended periods.
    *   **Cost-Effectiveness:** Often designed with cost optimization in mind.

**Example:** A microwave oven's control panel, a car's anti-lock braking system (ABS), a smart thermostat, a digital camera.

---

### **2. Typical System - The Core of the Embedded System**

Every embedded system, regardless of its complexity or application, shares a common set of fundamental building blocks. The "core" of an embedded system refers to the central processing unit (CPU) and its associated components responsible for executing instructions and managing the system's operations.

#### **2.1 The Processing Unit (The "Brain")**

This is the heart of the embedded system, responsible for executing the software program. It fetches instructions from memory, decodes them, and performs the necessary operations.

##### **2.1.1 Types of Processing Units:**

*   **Microcontrollers (MCUs):**
    *   **Definition:** A single integrated circuit (IC) that contains a CPU, memory (RAM and ROM/Flash), and programmable input/output peripherals on a single chip.
    *   **Characteristics:**
        *   Highly integrated, leading to smaller size and lower cost.
        *   Often designed for low power consumption.
        *   Ideal for embedded applications with specific, limited tasks.
    *   **Examples:**
        *   **8-bit MCUs:** Used in simple devices like remote controls, calculators, toys. (e.g., 8051, PIC10, AVR ATtiny)
        *   **16-bit MCUs:** Offer more processing power and features for slightly more complex tasks like automotive control units, industrial automation. (e.g., PIC24, MSP430)
        *   **32-bit MCUs:** Provide significant processing power and are used in a wide range of applications from smart home devices to industrial controllers. (e.g., ARM Cortex-M series, ESP32)
    *   **Importance:** The most common choice for many embedded systems due to their integration and cost-effectiveness.

*   **Microprocessors (MPUs):**
    *   **Definition:** An IC that contains only the CPU. It requires external components like memory, I/O controllers, and other peripherals to form a complete system.
    *   **Characteristics:**
        *   More powerful and flexible than MCUs.
        *   Generally consume more power.
        *   Suitable for complex applications requiring significant processing power and large amounts of memory.
    *   **Examples:**
        *   **ARM Cortex-A series:** Found in smartphones, tablets, single-board computers (e.g., Raspberry Pi).
        *   **Intel x86 processors:** Used in traditional PCs and servers, but also in some high-end embedded systems.
    *   **Importance:** Used when the demands of the application exceed the capabilities of a microcontroller.

*   **Digital Signal Processors (DSPs):**
    *   **Definition:** Specialized microprocessors optimized for performing mathematical operations, particularly those involved in signal processing (e.g., filtering, Fourier transforms).
    *   **Characteristics:**
        *   High performance for repetitive mathematical tasks.
        *   Often feature specialized instructions and hardware multipliers.
    *   **Examples:**
        *   Audio processing in mobile phones.
        *   Image processing in digital cameras.
        *   Telecommunications equipment.
    *   **Importance:** Crucial for applications involving real-time signal manipulation.

*   **Field-Programmable Gate Arrays (FPGAs):**
    *   **Definition:** Semiconductor devices containing programmable logic blocks and interconnects that can be configured by the user after manufacturing.
    *   **Characteristics:**
        *   Highly customizable hardware.
        *   Can achieve very high parallelism and performance.
        *   More complex to program than MCUs/MPUs.
    *   **Examples:**
        *   High-speed data acquisition.
        *   Customized signal processing.
        *   Prototyping complex hardware designs.
    *   **Importance:** Offer ultimate flexibility in hardware design for specific, performance-critical tasks.

**Key Concept:** The choice of processing unit depends heavily on the application's requirements for processing power, power consumption, cost, and I/O capabilities.

#### **2.2 Memory System**

Memory is essential for storing program instructions and data. Embedded systems have various types of memory, each serving a specific purpose.

*   **Volatile Memory (RAM - Random Access Memory):**
    *   **Definition:** Memory that loses its contents when power is removed.
    *   **Function:** Used to store temporary data, variables, and the stack during program execution.
    *   **Types:**
        *   **SRAM (Static RAM):** Faster, more expensive, and consumes more power. Often used for CPU caches.
        *   **DRAM (Dynamic RAM):** Slower, cheaper, and more power-efficient. Used for main system memory.
    *   **Importance:** Essential for the dynamic operation of the system.

*   **Non-Volatile Memory (NVM):**
    *   **Definition:** Memory that retains its contents even when power is removed.
    *   **Function:** Used to store the program instructions (firmware) and persistent data.
    *   **Types:**
        *   **ROM (Read-Only Memory):** Data is permanently written during manufacturing.
            *   **PROM (Programmable ROM):** Can be programmed once.
            *   **EPROM (Erasable PROM):** Can be erased with UV light.
            *   **EEPROM (Electrically Erasable PROM):** Can be erased and reprogrammed electrically, bit by bit or by sector. Slower write speeds.
        *   **Flash Memory:**
            *   **Definition:** A type of EEPROM that allows for faster block-level erasure and programming.
            *   **Function:** Widely used for storing firmware in modern embedded systems.
            *   **Types:** NOR Flash (faster reads, slower writes) and NAND Flash (faster writes, slower reads, higher density).
    *   **Importance:** Crucial for storing the system's program and configuration data.

**Key Concept:** The interplay between fast, volatile RAM for active data and reliable, non-volatile memory for program storage is fundamental to embedded system operation.

#### **2.3 Input/Output (I/O) Peripherals**

These components allow the embedded system to interact with the external world, receiving data from sensors and sending commands to actuators.

*   **Input Peripherals:**
    *   **Definition:** Devices that bring data into the embedded system.
    *   **Examples:**
        *   **Sensors:** Temperature sensors, light sensors, pressure sensors, accelerometers, buttons, switches, touchscreens.
        *   **Communication Interfaces:** UART (Universal Asynchronous Receiver/Transmitter), SPI (Serial Peripheral Interface), I2C (Inter-Integrated Circuit) for receiving data from other devices.
        *   **Analog-to-Digital Converters (ADCs):** Convert analog sensor signals into digital values that the processor can understand.

*   **Output Peripherals:**
    *   **Definition:** Devices that allow the embedded system to send data or control signals to the external world.
    *   **Examples:**
        *   **Actuators:** Motors, relays, LEDs, buzzers, displays (LCD, OLED).
        *   **Communication Interfaces:** For sending data to other devices.
        *   **Digital-to-Analog Converters (DACs):** Convert digital values from the processor into analog signals (e.g., for audio output).
        *   **Pulse Width Modulation (PWM) Controllers:** Used to control the speed of motors or the brightness of LEDs by varying the pulse width of a digital signal.

*   **Communication Peripherals:**
    *   **Definition:** Used for serial or parallel data transfer between the embedded system and other devices or networks.
    *   **Examples:**
        *   **UART/USART:** For serial communication with devices like GPS modules or other microcontrollers.
        *   **SPI/I2C:** For communicating with sensors, memory chips, and other peripherals on the same circuit board.
        *   **USB (Universal Serial Bus):** For connecting to PCs or other USB devices.
        *   **Ethernet:** For network connectivity.
        *   **Wi-Fi/Bluetooth:** For wireless communication.

**Key Concept:** I/O peripherals bridge the gap between the digital world of the processor and the analog or physical world, enabling the embedded system to sense, act, and communicate.

---

### **3. Other Essential Components:**

While the processing unit, memory, and I/O peripherals form the core, other components are crucial for the system's operation.

*   **Clock Generator:** Provides timing signals (clock pulses) to synchronize the operations of the processor and other components.
*   **Power Management Unit:** Regulates and distributes power to the various components, often designed for low power consumption.
*   **Buses:** Electrical pathways that connect different components (processor, memory, peripherals) and allow data and control signals to be transferred. Examples include Address Bus, Data Bus, and Control Bus.

---

### **4. Practice Questions:**

**Q1. What is the primary difference between a microcontroller and a microprocessor?**
    *   a) Microcontrollers have more memory.
    *   b) Microcontrollers integrate CPU, memory, and I/O peripherals on a single chip, while microprocessors are just the CPU.
    *   c) Microprocessors are always faster than microcontrollers.
    *   d) Microcontrollers are more power-hungry.

**Q2. Which type of memory is used to store the program instructions that an embedded system will execute?**
    *   a) RAM
    *   b) ROM
    *   c) SRAM
    *   d) Cache Memory

**Q3. Give an example of an input peripheral and an output peripheral in an embedded system.**
    *   Input:
    *   Output:

**Q4. What is the function of an ADC in an embedded system?**
    *   a) To convert digital signals to analog signals.
    *   b) To convert analog signals to digital signals.
    *   c) To provide timing signals for the processor.
    *   d) To store program instructions permanently.

**Q5. Why are FPGAs used in some embedded systems?**
    *   a) They are very cheap and low power.
    *   b) They offer high customization and performance for specific tasks.
    *   c) They are easy to program with simple languages.
    *   d) They are only used for simple input/output tasks.

---

### **5. Answers to Practice Questions:**

**A1. b) Microcontrollers have more memory. b) Microcontrollers integrate CPU, memory, and I/O peripherals on a single chip, while microprocessors are just the CPU.**
    *   *Explanation:* This is the defining characteristic. MCUs are self-contained, whereas MPUs are the core processing unit that needs external support.

**A2. b) ROM**
    *   *Explanation:* ROM (or its modern equivalent, Flash Memory) is non-volatile and is used to store the firmware, which is the program that runs the embedded system. RAM is volatile and used for temporary data.

**A3. Give an example of an input peripheral and an output peripheral in an embedded system.**
    *   **Input:** Button, Temperature Sensor, Touchscreen.
    *   **Output:** LED, Buzzer, Motor, LCD Display.
    *   *Explanation:* Input devices bring data into the system, and output devices send data or control signals out.

**A4. b) To convert analog signals to digital signals.**
    *   *Explanation:* ADCs are crucial for interfacing with real-world sensors that often produce analog outputs (like voltage or current representing temperature, light, etc.) and converting them into a format the digital processor can understand.

**A5. b) They offer high customization and performance for specific tasks.**
    *   *Explanation:* FPGAs are programmable hardware, allowing designers to create custom digital circuits for very specific, high-performance applications where standard processors might be too slow or inflexible.

---

### **Important Points to Remember:**

*   **Integration is Key:** Microcontrollers are highly integrated, making them ideal for many embedded applications.
*   **Non-Volatile for Program:** Always remember that program instructions reside in non-volatile memory.
*   **I/O is the Interface:** Peripherals are the system's eyes, ears, and hands for interacting with the real world.
*   **Resource Constraints Drive Design:** Embedded systems are often designed with limitations in mind (power, cost, size), which influences the choice of components.
*   **Real-time is often critical:** Many embedded systems must respond to events within strict time limits.

---
