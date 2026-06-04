---
title: "Wired Communication: Basics of  Serial communication (UART, SPI, I2C)"
subject: "COMPONENTS OF INTELLIGENT SYSTEMS"
module: "Module 4: Introduction to Embedded Systems and IoT"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804463136"
status: "completed"
scrapedAt: "2026-05-20T17:52:10.460Z"
---
# Components of Intelligent Systems: Module 4 - Introduction to Embedded Systems and IoT

## Topic: Wired Communication: Basics of Serial Communication (UART, SPI, I2C)

---

### **Introduction**

This module introduces the fundamental concepts of embedded systems and the Internet of Things (IoT). A critical aspect of building intelligent systems is how different components, particularly microcontrollers and peripheral devices, communicate with each other. Wired communication protocols are essential for this, providing reliable and efficient data exchange. This topic focuses on three prevalent serial communication protocols: Universal Asynchronous Receiver/Transmitter (UART), Serial Peripheral Interface (SPI), and Inter-Integrated Circuit (I2C). Understanding these protocols is crucial for connecting sensors, actuators, and other devices in an embedded system.

---

### **1. Learning Outcomes**

Upon successful completion of this topic, you will be able to:

*   Explain the principles of serial communication.
*   Describe the working of UART, SPI, and I2C protocols.
*   Identify the key characteristics and differences between UART, SPI, and I2C.
*   Understand the typical applications of each serial communication protocol in embedded systems and IoT.
*   Discuss the advantages and disadvantages of each protocol.
*   Relate serial communication to connecting sensors and actuators in intelligent systems.

---

### **2. Course Outcomes Alignment**

This topic directly supports the following Course Outcomes (COs):

*   **CO1: Explain the working of sensors and transducers (Knowledge Level: K2)**
    *   Understanding serial communication is vital for receiving data from sensors and transducers, which often communicate via these protocols.
*   **CO2: Describe the operation of actuators for intelligent systems (Knowledge Level: K2)**
    *   Similarly, actuators receive commands and control signals through serial communication interfaces.
*   **CO4: Outline the basic concepts of Embedded Systems and IoT (Knowledge Level: K2)**
    *   Serial communication is a foundational element for inter-device communication in both embedded systems and IoT architectures.

---

### **3. Key Concepts and Definitions**

#### **3.1. Serial Communication**

*   **Definition:** A method of transmitting data one bit at a time, sequentially, over a single communication line or channel.
*   **Contrast with Parallel Communication:** In parallel communication, multiple bits are transmitted simultaneously over multiple lines. Serial communication is often preferred for longer distances or when reducing the number of wires is important, despite being slower per bit.
*   **Key Components:**
    *   **Sender:** Transmits the data.
    *   **Receiver:** Receives the data.
    *   **Data Line:** The physical wire(s) used for data transmission.
    *   **Clock Signal (sometimes):** Synchronizes the sender and receiver.

#### **3.2. Synchronous vs. Asynchronous Communication**

*   **Synchronous Communication:** Both the sender and receiver share a common clock signal. This clock signal dictates when each bit of data is transmitted and received, ensuring precise timing. This allows for higher data transfer rates. (e.g., SPI, I2C).
*   **Asynchronous Communication:** The sender and receiver do not share a common clock signal. Instead, timing is managed by start and stop bits within the data stream itself, and both sides agree on a specific data rate (baud rate). This requires extra overhead in the data packets but simplifies hardware. (e.g., UART).

---

### **4. Serial Communication Protocols**

#### **4.1. Universal Asynchronous Receiver/Transmitter (UART)**

*   **Description:** UART is an asynchronous serial communication protocol used for full-duplex communication between devices. It's a hardware component (often a dedicated chip or integrated into a microcontroller) that handles the conversion of parallel data from a computer or microcontroller into serial data for transmission, and vice-versa for reception.
*   **Key Characteristics:**
    *   **Asynchronous:** No shared clock signal.
    *   **Full-Duplex:** Can send and receive data simultaneously.
    *   **Point-to-Point:** Typically connects two devices directly.
    *   **Data Framing:** Data is sent in frames, which include:
        *   **Start Bit:** A low bit indicating the beginning of a frame.
        *   **Data Bits:** Typically 5 to 9 bits of actual data.
        *   **Parity Bit (Optional):** Used for error detection (even or odd parity).
        *   **Stop Bit(s):** One or more high bits indicating the end of a frame.
    *   **Baud Rate:** The speed at which data is transmitted, measured in bits per second (bps). Both sender and receiver must be configured to the same baud rate. Common baud rates include 9600, 19200, 57600, 115200 bps.
*   **Hardware Lines (Typical):**
    *   **TX (Transmit):** Line from the sender to the receiver.
    *   **RX (Receive):** Line from the receiver to the sender.
*   **Advantages:**
    *   Simple to implement and understand.
    *   No shared clock required, making it flexible for devices with different clock sources.
    *   Widely supported by microcontrollers.
*   **Disadvantages:**
    *   Slower due to start/stop bits overhead.
    *   Susceptible to timing drift if baud rates are not perfectly matched or if distances are very long.
    *   Primarily point-to-point communication.
*   **Example Applications:**
    *   Connecting a microcontroller to a computer via a USB-to-serial converter.
    *   Communicating with GPS modules, Bluetooth modules, or some sensors.
    *   Debugging output from embedded systems.
    *   **Reference (Das, 2012):** Das discusses UART as a fundamental serial communication method for microcontrollers, highlighting its role in inter-device communication and debugging.

#### **4.2. Serial Peripheral Interface (SPI)**

*   **Description:** SPI is a synchronous serial communication protocol developed by Motorola. It is designed for short-distance communication, primarily between microcontrollers and peripheral devices. It's a full-duplex, master-slave protocol.
*   **Key Characteristics:**
    *   **Synchronous:** Uses a dedicated clock line.
    *   **Full-Duplex:** Can send and receive data simultaneously.
    *   **Master-Slave Architecture:** One master device controls the communication, and one or more slave devices respond.
    *   **Multiple Slaves:** Can communicate with multiple slave devices using separate Slave Select (SS) lines.
    *   **Data Transfer:** Typically uses 4 wires.
*   **Hardware Lines (Typical):**
    *   **SCK (Serial Clock):** Generated by the master, synchronizes data transfer.
    *   **MOSI (Master Out, Slave In):** Data from the master to the slave.
    *   **MISO (Master In, Slave Out):** Data from the slave to the master.
    *   **SS/CS (Slave Select/Chip Select):** Activated by the master to select a specific slave device.
*   **Advantages:**
    *   High data transfer speeds due to synchronous nature.
    *   Full-duplex communication.
    *   Simple protocol without complex framing (like start/stop bits).
    *   Can support multiple slave devices.
*   **Disadvantages:**
    *   Requires more wires than I2C or UART (at least 4, more for multiple slaves).
    *   No built-in acknowledgment mechanism (error detection is typically handled by the application layer).
    *   Limited number of devices that can be connected compared to I2C's addressing scheme.
*   **Example Applications:**
    *   Interfacing with sensors that require high data rates (e.g., some accelerometers, gyroscopes).
    *   Communicating with external memory devices like SD cards or flash memory.
    *   Driving displays and audio codecs.
    *   **Reference (McRoberts, 2011):** Beginning Arduino often uses SPI for interfacing with various shields and modules, demonstrating its practical application in embedded projects.

#### **4.3. Inter-Integrated Circuit (I2C)**

*   **Description:** I2C (pronounced "I-squared-C" or "I-two-C") is a synchronous, serial communication bus protocol developed by Philips (now NXP). It's designed for short-distance, multi-master, multi-slave communication, typically on a single circuit board.
*   **Key Characteristics:**
    *   **Synchronous:** Uses a clock line.
    *   **Half-Duplex:** Data is transmitted in one direction at a time.
    *   **Multi-Master, Multi-Slave:** Multiple devices can initiate communication (masters), and multiple devices can respond (slaves) on the same bus.
    *   **Addressing:** Each slave device has a unique 7-bit or 10-bit address, allowing many devices to share the same bus.
    *   **Bus Arbitration:** If multiple masters try to communicate simultaneously, the protocol ensures that only one master controls the bus at a time without data corruption.
    *   **Acknowledgement (ACK):** The receiver acknowledges receipt of each data byte.
    *   **Typically uses 2 wires:**
*   **Hardware Lines (Typical):**
    *   **SDA (Serial Data):** Carries the data.
    *   **SCL (Serial Clock):** Generated by the master, synchronizes data transfer.
    *   *(Both lines are open-drain and require pull-up resistors)*.
*   **Advantages:**
    *   Requires only two wires (SDA and SCL).
    *   Supports multiple masters and slaves on the same bus.
    *   Built-in addressing and arbitration mechanisms.
    *   Acknowledgement mechanism for reliable data transfer.
*   **Disadvantages:**
    *   Generally slower than SPI.
    *   More complex protocol due to addressing, arbitration, and ACK/NACK handling.
    *   Requires pull-up resistors on SDA and SCL lines.
    *   Master devices generally initiate communication.
*   **Example Applications:**
    *   Communicating with various sensors (e.g., temperature sensors like LM75, humidity sensors like DHT22 (though often has its own protocol, some variants can use I2C), pressure sensors).
    *   Interfacing with Real-Time Clocks (RTCs).
    *   Controlling display driver ICs.
    *   EEPROM (Electrically Erasable Programmable Read-Only Memory) interfaces.
    *   **Reference (Saha, 2008):** While S.K. Saha's "Introduction to Robotics" focuses on robotics, it will likely touch upon sensor integration, where I2C is commonly used for interfacing with a wide array of sensors in robotic systems.
    *   **Reference (Kamal, 2013):** Raj Kamal's "Embedded Systems Architecture, programming and Design" will thoroughly cover I2C as a critical bus for connecting peripherals to microcontrollers, emphasizing its multi-device capability and addressing.

---

### **5. Comparison of UART, SPI, and I2C**

| Feature          | UART                                     | SPI                                         | I2C                                              |
| :--------------- | :--------------------------------------- | :------------------------------------------ | :----------------------------------------------- |
| **Type**         | Asynchronous, Half/Full-Duplex           | Synchronous, Full-Duplex                    | Synchronous, Half-Duplex                         |
| **Clock**        | No shared clock (uses start/stop bits)   | Shared clock (SCK)                          | Shared clock (SCL)                               |
| **Data Lines**   | TX, RX (2 lines)                         | SCK, MOSI, MISO, SS (4+ lines)              | SDA, SCL (2 lines)                               |
| **Master/Slave** | Typically Point-to-Point (Master-Slave)  | Master-Slave                                | Multi-Master, Multi-Slave                        |
| **Addressing**   | None (direct connection)                 | Implicit via Slave Select                   | Explicit device addresses (7-bit or 10-bit)      |
| **Speed**        | Moderate (limited by timing accuracy)    | High (synchronous)                          | Moderate (lower than SPI)                        |
| **Complexity**   | Simple                                   | Moderate                                    | Complex (due to addressing, arbitration, ACK)    |
| **Devices/Bus**  | 2                                        | Limited by SS lines and master capabilities | Many (limited by pull-up values and capacitance) |
| **Overhead**     | Start/Stop bits, parity                  | Minimal                                     | Address, ACK/NACK bits                           |
| **Primary Use**  | PC communication, simple serial devices  | High-speed peripherals, sensors             | Low-speed peripherals, sensors, EEPROMs, RTCs    |

---

### **6. Practice Questions & Exercises**

**Question 1:**
Which serial communication protocol is asynchronous and uses start and stop bits to frame data?
a) SPI
b) I2C
c) UART
d) CAN

**Answer:** c) UART

**Question 2:**
If you need to connect multiple sensors to a microcontroller and want to minimize the number of wires used, which protocol would you most likely choose?
a) UART
b) SPI
c) I2C
d) Parallel Communication

**Answer:** c) I2C

**Question 3:**
Which SPI signal is responsible for synchronizing data transfer between the master and slave devices?
a) MOSI
b) MISO
c) SS
d) SCK

**Answer:** d) SCK

**Question 4:**
Explain the main difference between synchronous and asynchronous serial communication.

**Answer:** Synchronous communication uses a shared clock signal to time data transfer, ensuring precise synchronization between sender and receiver. Asynchronous communication does not use a shared clock; instead, it relies on start and stop bits within the data stream and a pre-agreed baud rate to manage timing.

**Question 5:**
You are designing an embedded system that needs to read data from a temperature sensor and control a motor driver. The temperature sensor outputs data at a relatively low rate and is easily available as an I2C device. The motor driver requires fast PWM signals and is available as an SPI device. Describe how you would connect these two peripherals to a microcontroller.

**Answer:**
You would connect the temperature sensor to the microcontroller using the I2C protocol. This would involve connecting the sensor's SDA pin to the microcontroller's SDA pin and the sensor's SCL pin to the microcontroller's SCL pin. The microcontroller would act as the I2C master, and the sensor would be a slave, identified by its unique I2C address.

You would connect the motor driver to the microcontroller using the SPI protocol. This would involve connecting the driver's SCK pin to the microcontroller's SCK pin, the driver's MOSI pin to the microcontroller's MOSI pin, and the driver's MISO pin to the microcontroller's MISO pin. Additionally, you would use a separate Slave Select (SS) line from the microcontroller to the motor driver to enable it for communication. The microcontroller would act as the SPI master.

---

### **7. Important Points to Remember**

*   **Serial communication** transmits data bit-by-bit, reducing the number of wires compared to parallel communication.
*   **UART** is asynchronous, full-duplex, and uses start/stop bits for framing. It's good for simple, point-to-point communication.
*   **SPI** is synchronous, full-duplex, master-slave. It's known for its high speed and can connect multiple slaves.
*   **I2C** is synchronous, half-duplex, multi-master/multi-slave. It uses addresses and requires only two wires, making it very versatile for connecting numerous devices.
*   The choice of protocol depends on factors like **speed requirements, number of devices, distance, and the number of available I/O pins**.
*   Understanding these protocols is fundamental to interfacing **sensors (CO1)** and **actuators (CO2)** in embedded systems and IoT devices **(CO4)**.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### **8. References and Further Reading**

*   **Das, Lyla B.** (2012). *Embedded Systems: An Integrated Approach*. Pearson Education India. (Chapter on communication protocols)
*   **McRoberts, Michael.** (2011). *Beginning Arduino*. Apress. (Chapters on serial communication and interfacing with sensors/modules)
*   **Saha, S. K.** (2008). *Introduction to Robotics*. McGraw-Hill Education (India). (Chapters related to sensor interfaces and communication in robotic systems)
*   **Kamal, Raj.** (2013). *Embedded Systems Architecture, programming and Design* (3rd ed.). Tata McGraw-Hil. (Chapters detailing serial communication protocols like UART, SPI, and I2C)
*   **SciTech Publishing Inc.** (2011). *Sensors, Actuators, and their Interfaces: A multidisciplinary introduction*. SciTech Publishing Inc. (Sections discussing how sensors and actuators communicate)

---