---
title: "Introduction to Arduino due(32bit) - micro controller board (based on the atmel sam3x-- arm cortex- m3 cpu)- Features, General Specifications Overview, General architecture- Features OF Microcontroller, INPUTS,OUTPUTS, Ratings, Functional Overview, Pinout- familiarization of the ports of the board."
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS"
module: "Module 4: ARM (Advanced RISC Machines) based Embedded System Design : Classification of Microprocessors based on the word length, architecture and  Instruction Set"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36229"
status: "completed"
scrapedAt: "2026-05-23T16:22:55.127Z"
---
# Microprocessors and Embedded Systems - Module 4: ARM Based Embedded System Design

## Topic: Introduction to Arduino Due (32-bit) - Microcontroller Board

### 1. Introduction to Microprocessors and Microcontrollers in Embedded Systems

*   **Embedded Systems:** Computer systems designed for specific functions within a larger mechanical or electrical system. They are characterized by their dedicated purpose, real-time computing constraints, and often limited resources. (Ref: Ram, B. - Fundamentals of Microprocessor and Microcontrollers)
*   **Microprocessor vs. Microcontroller:**
    *   **Microprocessor:** A central processing unit (CPU) on a single integrated circuit (IC). It requires external memory, I/O peripherals, and timing circuitry. (Ref: Gaonkar, R. - Microprocessor, Architecture, Programming and Applications)
    *   **Microcontroller:** A complete computer system on a single IC, including a CPU, memory (RAM, ROM/Flash), I/O ports, timers, and other peripherals. This makes them ideal for embedded applications.

### 2. ARM (Advanced RISC Machines) Architecture Overview

*   **RISC (Reduced Instruction Set Computing):** A processor design strategy that emphasizes a simple, highly optimized instruction set. Key characteristics include:
    *   Fixed-length instructions.
    *   Load/store architecture (memory access only through dedicated load/store instructions).
    *   Large number of general-purpose registers.
    *   Pipelined execution for improved performance.
    *   (Ref: Ram, B. - Fundamentals of Microprocessor and Microcontrollers, Chapter on RISC Architecture)
*   **ARM Architecture:** A family of RISC Instruction Set Architectures (ISAs) widely used in embedded systems due to its power efficiency, performance, and flexibility.

### 3. Introduction to Arduino Due (32-bit)

*   **Arduino Due:** A microcontroller board developed by Arduino.cc, based on the **Atmel SAM3X8E** microcontroller. This board signifies a move towards more powerful, 32-bit ARM-based solutions in the Arduino ecosystem.
*   **Learning Outcome Alignment:** This section directly addresses CO3 (Understand the need for embedded systems and selection of processors) by introducing a modern, ARM-based platform, and CO6 (Understand the RISC Architecture and Apply the knowledge for solving real-life problems using ARM - Arduino DUE board based embedded system).

#### 3.1. Atmel SAM3X8E Microcontroller (ARM Cortex-M3 CPU)

*   **Central Component:** The Arduino Due is powered by the Atmel SAM3X8E microcontroller, which features an **ARM Cortex-M3** processor.
*   **ARM Cortex-M3:** A 32-bit ARM processor core designed for microcontroller applications. It offers a balance of performance, power efficiency, and cost.
    *   **Key Features:**
        *   **32-bit RISC architecture:** Efficient instruction set.
        *   **Harvard Architecture:** Separate instruction and data buses, allowing simultaneous fetching of instructions and data.
        *   **Thumb-2 Instruction Set:** A mixed 16-bit and 32-bit instruction set for better code density and performance.
        *   **Nested Vectored Interrupt Controller (NVIC):** Efficient interrupt handling with priority levels.
        *   **Memory Protection Unit (MPU):** Provides memory access control for enhanced system reliability.
        *   **JTAG Debug Interface:** For debugging and programming.
        *   (Ref: Microprocessor Theory and Application by Rafiquzzaman - Understanding advanced processor architectures).

#### 3.2. Features of the Arduino Due Board

*   **Microcontroller:** Atmel SAM3X8E (ARM Cortex-M3 CPU)
*   **Operating Voltage:** 3.3V (This is a crucial difference from older 5V Arduinos like the Uno).
*   **Input/Output Voltage:** Recommended to be 3.3V. Applying 5V to I/O pins can damage the board.
*   **Clock Speed:** 84 MHz (Significantly faster than older Arduino boards).
*   **Flash Memory:** 512 KB (for program storage).
*   **SRAM:** 96 KB (64 KB + 32 KB for the core).
*   **Connectivity:**
    *   **USB Host/Device:** Supports USB on-the-go (OTG).
    *   **CAN Bus Interface:** For automotive and industrial networking.
    *   **Ethernet Controller:** Built-in support for networking.
    *   **SD Card Interface:** For expandable storage.
*   **Development Environment:** Arduino IDE (Integrated Development Environment).
    *   **Arduino IDE:** A user-friendly software suite for writing, compiling, and uploading code (sketches) to Arduino boards. (Ref: Arduino Cookbook by Michael Margolis, Arduino for beginners by John Baichtal).
    *   **Programming Language:** Based on C/C++ with simplified libraries. (Ref: Embedded C, Pont by Michael J)
*   **Learning Outcome Alignment:** This section directly supports CO4 (Able to gain working level knowledge about an Arduino Uno based system architecture and Arduino IDE) by describing the components and software environment, and CO5 (Write Programs using Embedded C and implement an application using Arduino UNO board) by introducing the platform for programming.

#### 3.3. General Specifications Overview

*   **Microcontroller:** Atmel SAM3X8E
*   **Architecture:** ARM Cortex-M3 (32-bit RISC)
*   **Clock Frequency:** 84 MHz
*   **Operating Voltage:** 3.3V
*   **Digital I/O Pins:** 54
*   **Analog Input Pins:** 12 (12-bit resolution, higher than typical 10-bit)
*   **Analog Output Pins (DAC):** 2 (12-bit resolution)
*   **PWM Pins:** 12 (Pulse Width Modulation)
*   **Flash Memory:** 512 KB
*   **SRAM:** 96 KB
*   **EEPROM:** No onboard EEPROM (Emulated via Flash).
*   **Power Input:** 7-12V recommended via DC barrel jack or VIN pin.
*   **USB:** Mini-USB connector for programming and serial communication, USB-Micro connector for USB Host.
*   **Dimensions:** Standard Arduino form factor (though slightly larger than Uno).

#### 3.4. General Architecture of the Arduino Due

The Arduino Due's architecture is centered around the Atmel SAM3X8E microcontroller.

```
+---------------------------------+
|         Atmel SAM3X8E           |
|       (ARM Cortex-M3 CPU)       |
|---------------------------------|
| 32-bit RISC Core (84MHz)        |
| Harvard Architecture            |
| Thumb-2 Instruction Set         |
|---------------------------------|
| Memory:                         |
|  - 512 KB Flash                 |
|  - 96 KB SRAM                   |
|---------------------------------|
| Peripherals:                    |
|  - GPIO Ports (Digital I/O)     |
|  - Analog-to-Digital Converters |
|  - Digital-to-Analog Converters |
|  - Timers/Counters (PWM)        |
|  - UARTs (Serial Communication) |
|  - SPI, I2C Interfaces          |
|  - CAN Bus Controller           |
|  - USB Host/Device Controller   |
|  - DMA Controller               |
|  - RTC (Real-Time Clock)        |
|  - ... and many more            |
+---------------------------------+
         |
         | (Connects to)
         |
+---------------------------------+
|       Arduino Due Board         |
|---------------------------------|
| - Power Management Circuit      |
| - USB Interface Circuit         |
| - Crystal Oscillator            |
| - Voltage Regulators (3.3V)     |
| - Headers for I/O Pins          |
| - Reset Button, User Button     |
| - LEDs (Power, L)               |
+---------------------------------+
```

*   **Key Architectural Concepts:**
    *   **Core:** The ARM Cortex-M3 CPU is the brain of the operation.
    *   **Memory System:** Flash for program storage and SRAM for data.
    *   **Peripherals:** Integrated hardware modules for specific functions (I/O, communication, timing).
    *   **Bus System:** Connects the CPU to memory and peripherals. The Cortex-M3 typically uses an Advanced High-performance Bus (AHB) and an Advanced Peripheral Bus (APB).
    *   **Interrupt Controller (NVIC):** Manages interrupt requests from peripherals and the CPU.

#### 3.5. Features of the Microcontroller (Atmel SAM3X8E)

*   **High-Performance Core:** ARM Cortex-M3 with a 32-bit RISC architecture operating at up to 84 MHz.
*   **Memory:**
    *   **Flash:** 512KB for storing program code.
    *   **SRAM:** 96KB for runtime data and stack.
    *   **ROM:** For bootloader and system functions.
*   **Rich Peripheral Set:**
    *   **GPIO:** Multiple General Purpose Input/Output pins.
    *   **ADC:** 12 channels of 12-bit Analog-to-Digital Converters.
    *   **DAC:** 2 channels of 12-bit Digital-to-Analog Converters.
    *   **Timers:** Multiple Timer/Counter modules supporting PWM generation, input capture, and more.
    *   **Communication Interfaces:** USARTs (Universal Synchronous/Asynchronous Receiver/Transmitter) for serial communication (UART, RS232, RS485), SPI (Serial Peripheral Interface), I2C (Inter-Integrated Circuit).
    *   **USB:** USB High-Speed Host and Device interfaces.
    *   **CAN:** Controller Area Network interface.
    *   **DMA:** Direct Memory Access controller for efficient data transfers without CPU intervention.
    *   **Real-Time Clock (RTC):** For timekeeping.
*   **Power Management:** Multiple power modes for energy saving.
*   **Debug Features:** JTAG and SWD (Serial Wire Debug) interfaces for in-circuit debugging.

#### 3.6. Inputs and Outputs (I/O)

*   **Digital Pins:**
    *   **Count:** 54 digital I/O pins.
    *   **Functionality:** Can be configured as inputs or outputs.
    *   **Voltage Level:** **3.3V tolerant**. Applying 5V to these pins can damage the microcontroller.
    *   **PWM:** Many digital pins support Pulse Width Modulation (PWM) for controlling analog devices like motors or LEDs.
*   **Analog Inputs:**
    *   **Count:** 12 analog input pins (connected to ADCs).
    *   **Resolution:** 12-bit resolution (0-4095). This provides a finer granularity for reading analog signals compared to 10-bit ADCs (0-1023).
    *   **Voltage Range:** Typically 0V to 3.3V.
*   **Analog Outputs (DAC):**
    *   **Count:** 2 analog output pins (connected to DACs).
    *   **Resolution:** 12-bit resolution.
    *   **Functionality:** Can generate analog voltage signals.
*   **Communication Ports:**
    *   **UART:** Multiple serial communication ports (e.g., for connecting to computers via USB, other serial devices).
    *   **I2C:** For connecting to sensors and other I2C-compatible devices.
    *   **SPI:** For high-speed serial communication.
    *   **CAN:** For robust communication in noisy environments, often used in automotive.

#### 3.7. Ratings

*   **Recommended Input Voltage (VIN):** 7-12V. The onboard voltage regulator will step this down to the 3.3V required by the microcontroller.
*   **Operating Voltage:** 3.3V (for the microcontroller and most I/O pins).
*   **DC Current per I/O Pin:** 7mA (recommended for stable operation).
*   **Current Consumption:** Varies depending on clock speed, peripherals used, and activity.
*   **Absolute Maximum Ratings:** Critical limits that should not be exceeded to prevent damage to the board. This includes voltage levels on pins. **Crucially, do not apply more than 3.3V to any digital or analog pin.**

#### 3.8. Functional Overview

The Arduino Due operates by executing programs (sketches) stored in its flash memory.
1.  **Power-up/Reset:** The microcontroller starts execution from a predefined memory address (usually the bootloader or the beginning of the sketch).
2.  **Initialization:** The sketch typically begins with setup code that configures the microcontroller's peripherals (e.g., setting pin modes, initializing serial communication).
3.  **Main Loop:** The `loop()` function is repeatedly executed, performing the main tasks of the embedded system (e.g., reading sensors, controlling actuators, communicating with other devices).
4.  **Interrupts:** The system can respond to external events (like button presses) or internal events (like timer expirations) through interrupts, allowing for efficient and timely responses without constant polling. (Ref: Ram, B. - Fundamentals of Microprocessor and Microcontrollers - Chapter on Interrupts)
5.  **Peripherals:** The various peripherals (ADC, DAC, timers, communication interfaces) are controlled by writing to specific memory-mapped registers within the SAM3X8E microcontroller. The Arduino libraries abstract much of this complexity, making it easier to use.

#### 3.9. Pinout - Familiarization of the Ports of the Board

The Arduino Due has various connectors and pin headers. Understanding their functions is crucial for designing and connecting external components.

**Key Pin Areas:**

1.  **Microcontroller (SAM3X8E) Pinouts (These are grouped on headers):**
    *   **Digital I/O Pins (0-53):**
        *   These are the primary pins for interacting with the outside world.
        *   Pins **0 (RX)** and **1 (TX)** are used for serial communication (USB-Serial).
        *   Many pins can be used for digital input, digital output, PWM, interrupt handling, and communication protocols (SPI, I2C).
        *   **Important:** Most of these pins operate at **3.3V**.
    *   **Analog Inputs (A0-A11):**
        *   Connected to the 12-bit ADCs.
        *   Used for reading analog sensors.
        *   These pins can also be used as digital I/O pins.
    *   **Analog Outputs (DAC0, DAC1):**
        *   Connected to the 12-bit DACs.
        *   Used for generating analog voltage signals.
    *   **Power Pins:**
        *   `3.3V`: Provides a regulated 3.3V output.
        *   `5V`: Usually sourced from the USB connection or VIN.
        *   `GND`: Ground reference.
        *   `VIN`: Input voltage (7-12V recommended).
        *   `IOREF`: The voltage reference for the I/O pins (typically 3.3V).
    *   **Communication Pins:**
        *   **UARTs (Serial):**
            *   `Serial` (Pins 0/RX, 1/TX): For USB-to-serial communication with the computer.
            *   `Serial1` (Pins 19/RX1, 18/TX1): General-purpose serial port.
            *   `Serial2` (Pins 17/RX2, 16/TX2): General-purpose serial port.
            *   `Serial3` (Pins 15/RX3, 14/TX3): General-purpose serial port.
        *   **SPI:** Pins `20 (SCK)`, `21 (MISO)`, `22 (MOSI)`, `23 (SS)` (Software Select/Chip Select).
        *   **I2C:** Pins `20 (SCL)`, `21 (SDA)`.
    *   **Other Important Pins:**
        *   `AREF`: Analog Reference voltage.
        *   `RESET`: Active low reset pin.

2.  **On-board Connectors:**
    *   **USB Device Port (Mini-USB):** Primarily used for programming the microcontroller and for serial communication with a computer.
    *   **USB Host Port (Micro-USB):** Used to connect USB devices like keyboards, mice, or flash drives to the Arduino Due. Supports USB OTG.
    *   **DC Power Jack:** For powering the board with an external power supply (7-12V).
    *   **ICSP Header:** In-Circuit Serial Programming header for programming the SAM3X8E directly (less common for typical Arduino users).

3.  **On-board Buttons and LEDs:**
    *   **RESET Button:** Resets the microcontroller.
    *   **ON/OFF Switch:** Some versions might have an ON/OFF switch, often related to the USB power.
    *   **L LED:** Connected to digital pin 13, often used for basic testing and feedback.
    *   **POWER LED:** Indicates that the board is receiving power.

**Important Points to Remember:**

*   **3.3V Logic:** The Arduino Due is a **3.3V board**. All digital and analog pins operate at 3.3V. **Do not connect 5V devices directly to its I/O pins unless they are 5V tolerant (check the datasheet or specific pin documentation).** Use level converters if interfacing with 5V components. (Ref: Arduino Cookbook by Michael Margolis - crucial section on voltage levels).
*   **Higher Performance:** The 84 MHz clock speed and ARM Cortex-M3 core offer significantly more processing power than older Arduino boards like the Uno.
*   **More Memory:** Larger Flash and SRAM provide more space for complex programs and data.
*   **Advanced Peripherals:** The inclusion of DACs, CAN bus, and USB Host functionality opens up a wider range of applications.
*   **Library Compatibility:** While many Arduino libraries are compatible, some might need to be updated or rewritten for the Due due to differences in microcontroller architecture and pin mappings.

---

### Practice Questions and Exercises

1.  **Question:** What is the primary microcontroller used on the Arduino Due board, and what is its core architecture?
    **Answer:** The primary microcontroller is the Atmel SAM3X8E, which features an ARM Cortex-M3 CPU. The Cortex-M3 is based on a 32-bit RISC architecture. (CO6)

2.  **Question:** What is the recommended operating voltage for the Arduino Due's I/O pins? Why is this important?
    **Answer:** The recommended operating voltage for the Arduino Due's I/O pins is 3.3V. This is important because applying 5V to these pins can permanently damage the Atmel SAM3X8E microcontroller. (CO3, CO4)

3.  **Question:** List three key differences between the Arduino Due and a typical 5V Arduino board like the Arduino Uno.
    **Answer:**
    *   **Microcontroller Core:** Due uses ARM Cortex-M3 (32-bit RISC) vs. Uno uses AVR (8-bit RISC).
    *   **Operating Voltage:** Due operates at 3.3V vs. Uno operates at 5V.
    *   **Clock Speed:** Due is 84 MHz vs. Uno is 16 MHz.
    *   **Memory:** Due has significantly more Flash and SRAM.
    *   **Peripherals:** Due has DACs, CAN bus, USB Host, etc., which are not standard on the Uno.
    (CO3, CO6)

4.  **Question:** Explain the significance of the 12-bit resolution for the analog inputs and outputs on the Arduino Due.
    **Answer:** The 12-bit resolution for analog-to-digital converters (ADCs) and digital-to-analog converters (DACs) means that the board can represent analog values with 2^12 = 4096 distinct levels. This provides finer precision and a wider dynamic range for reading analog signals or generating analog output voltages compared to 10-bit converters (1024 levels). (CO6)

5.  **Question:** You want to connect a sensor that outputs a 5V signal to one of the Arduino Due's digital input pins. What precautions should you take?
    **Answer:** You should use a **logic level converter** or **voltage divider circuit** to reduce the 5V signal to a safe 3.3V level before connecting it to the Arduino Due's digital input pin. Directly connecting a 5V signal will likely damage the microcontroller. (CO3, CO5)

6.  **Question:** What is the purpose of the USB Host port on the Arduino Due?
    **Answer:** The USB Host port allows the Arduino Due to connect to and interact with standard USB devices, such as USB flash drives, keyboards, mice, or even other Arduino boards acting as USB devices. This enables features like data logging to a USB drive or user input from a keyboard. (CO6)

7.  **Exercise:** Write a simple Arduino sketch outline for the Arduino Due that:
    *   Initializes the serial communication at 9600 baud.
    *   Reads an analog sensor connected to pin `A0`.
    *   Prints the analog reading to the serial monitor.
    *   Waits for 1 second before repeating.

    **Sketch Outline:**

    ```c++
    // Define the analog input pin
    const int analogPin = A0;

    void setup() {
      // Initialize serial communication at 9600 bits per second:
      Serial.begin(9600);
    }

    void loop() {
      // Read the analog value from the sensor:
      int sensorValue = analogRead(analogPin);

      // Print the sensor value to the serial monitor:
      Serial.print("Sensor Value: ");
      Serial.println(sensorValue);

      // Wait for 1 second before the next reading
      delay(1000);
    }
    ```
    **(CO4, CO5)**

---
