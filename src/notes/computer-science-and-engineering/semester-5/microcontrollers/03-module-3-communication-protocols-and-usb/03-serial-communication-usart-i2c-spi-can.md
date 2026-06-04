---
title: "Serial communication (USART, I2C, SPI, CAN)"
subject: "MICROCONTROLLERS"
module: "Module 3: Communication Protocols and USB:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b628"
status: "completed"
scrapedAt: "2026-05-20T16:48:41.216Z"
---
## MICROCONTROLLERS - Module 3: Communication Protocols and USB - Serial Communication (USART, I2C, SPI, CAN)

**Introduction:**

This module delves into the world of serial communication protocols, a crucial aspect of microcontroller applications. Serial communication allows microcontrollers to exchange data with other devices using fewer wires compared to parallel communication.  We'll explore four common protocols: USART, I2C, SPI, and CAN, covering their principles, applications, and key differences.

**Learning Outcomes:**

Upon completion of this module, you will be able to:

1.  **Understand the principles of serial communication.**
2.  **Explain the operation of USART, I2C, SPI, and CAN protocols.**
3.  **Compare and contrast the characteristics of each protocol.**
4.  **Identify suitable protocols for specific applications.**
5.  **Implement basic serial communication using these protocols (theoretically or using simulation).**

### 1. Principles of Serial Communication

*   **Definition:** Serial communication is a method of data transmission where data bits are sent sequentially over a single wire (or a small number of wires).

*   **Advantages:**
    *   **Reduced Wiring:** Requires fewer wires compared to parallel communication, leading to smaller and cheaper connections.
    *   **Longer Distances:** More suitable for longer distances compared to parallel communication due to reduced signal degradation.
    *   **Simpler Connectors:** Smaller and less complex connectors are needed.

*   **Disadvantages:**
    *   **Lower Data Rate (potentially):**  Data is transmitted bit-by-bit, which can be slower than parallel communication if the serial data rate is not high enough.

*   **Key Concepts:**

    *   **Data Frame:** The structure of data being transmitted, including start bits, data bits, parity bits (optional), and stop bits.
    *   **Baud Rate:**  The number of bits transmitted per second.  Both the transmitter and receiver must be configured with the same baud rate for successful communication.
    *   **Synchronization:**  Methods used to ensure the transmitter and receiver are aligned in time to correctly interpret the data stream.  Can be synchronous (using a clock signal) or asynchronous (using start/stop bits).

### 2. USART (Universal Synchronous/Asynchronous Receiver/Transmitter)

*   **Definition:** USART is a flexible serial communication protocol that can operate in both synchronous and asynchronous modes. It is one of the most widely used protocols.

*   **Modes of Operation:**

    *   **Asynchronous Mode:**
        *   Uses start and stop bits to synchronize data transmission.
        *   No clock signal is required.
        *   Commonly referred to as UART (Universal Asynchronous Receiver/Transmitter).
        *   **Data Frame:** Typically consists of a start bit (logic low), data bits (5-9 bits), an optional parity bit (even, odd, or none), and one or more stop bits (logic high).
        *   **Applications:** Communication between a microcontroller and a PC (e.g., using a serial terminal), GPS modules, Bluetooth modules.

    *   **Synchronous Mode:**
        *   Uses a clock signal to synchronize data transmission.
        *   More efficient than asynchronous mode as it eliminates the need for start and stop bits.
        *   Requires an additional clock line.
        *   Less common than asynchronous mode in many microcontroller applications.

*   **Key Features:**

    *   **Full-Duplex Communication:**  Data can be transmitted and received simultaneously.
    *   **Programmable Baud Rate:**  The baud rate can be adjusted to suit different communication requirements.
    *   **Parity Checking:**  Optional parity bit can be used for error detection.

*   **Example:**  Connecting a microcontroller to a PC via a USB-to-Serial converter (which emulates a UART connection).

*   **Code Snippet (Illustrative, C):**

    ```c
    // Initialize UART
    void UART_Init(uint32_t baud) {
        // Configure UART registers (e.g., baud rate, data bits, parity, stop bits)
        // Example:
        UBRR0H = (uint8_t)(baud>>8);  // Baud rate high byte
        UBRR0L = (uint8_t)baud;       // Baud rate low byte
        UCSR0B = (1<<RXEN0)|(1<<TXEN0); // Enable receiver and transmitter
        UCSR0C = (3<<UCSZ00);           // 8 data bits, 1 stop bit
    }

    // Transmit a character
    void UART_Transmit(char data) {
        // Wait for empty transmit buffer
        while (!(UCSR0A & (1<<UDRE0)));
        // Put data into buffer, sends the data
        UDR0 = data;
    }

    // Receive a character
    char UART_Receive(void) {
        // Wait for data to be received
        while (!(UCSR0A & (1<<RXC0)));
        // Get and return received data from buffer
        return UDR0;
    }
    ```

### 3. I2C (Inter-Integrated Circuit)

*   **Definition:** I2C is a synchronous, multi-master, multi-slave serial communication protocol that uses only two wires: SDA (Serial Data) and SCL (Serial Clock).

*   **Key Features:**

    *   **Two-Wire Interface:** Uses only two wires, making it ideal for applications with limited pins.
    *   **Multi-Master/Multi-Slave:** Multiple master devices can initiate communication with multiple slave devices.
    *   **Addressing:** Each slave device has a unique address, allowing the master to select the desired device.
    *   **Acknowledge (ACK) / Not Acknowledge (NACK):**  Used to verify successful data transmission.
    *   **Arbitration:** Handles situations where multiple masters attempt to initiate communication simultaneously.

*   **Operation:**

    1.  **Start Condition:** The master initiates communication by pulling SDA low while SCL is high.
    2.  **Slave Address:** The master transmits the 7-bit slave address followed by a read/write bit (0 for write, 1 for read).
    3.  **Acknowledge (ACK):** The slave device acknowledges the address by pulling SDA low during the 9th clock cycle. If the slave doesn't acknowledge (NACK), the master terminates the communication.
    4.  **Data Transfer:** The master transmits (write) or receives (read) data from the slave. Each byte is followed by an ACK/NACK bit.
    5.  **Stop Condition:** The master terminates communication by pulling SDA high while SCL is high.

*   **Applications:** Real-time clocks (RTCs), EEPROMs, sensors (temperature, pressure), LCD displays.

*   **Example:**  Connecting a microcontroller to an I2C temperature sensor.

*   **Address Assignment:** I2C addresses are typically 7 bits, offering 128 possible addresses.  However, some addresses are reserved for specific purposes.

*   **Pull-up Resistors:** SDA and SCL lines require pull-up resistors to maintain a high logic level when no device is actively driving them low.  The resistor value depends on the bus capacitance and operating frequency.

### 4. SPI (Serial Peripheral Interface)

*   **Definition:** SPI is a synchronous serial communication protocol that allows full-duplex communication between a master device and one or more slave devices.

*   **Key Features:**

    *   **Four-Wire Interface:** Typically uses four wires:
        *   **MOSI (Master Out Slave In):** Data transmitted from the master to the slave.
        *   **MISO (Master In Slave Out):** Data transmitted from the slave to the master.
        *   **SCK (Serial Clock):** Clock signal generated by the master to synchronize data transfer.
        *   **SS/CS (Slave Select/Chip Select):** Used by the master to select a specific slave device.  Each slave has its own SS/CS line.
    *   **Full-Duplex Communication:** Data can be transmitted and received simultaneously.
    *   **High Speed:**  Generally faster than I2C.
    *   **No Addressing:**  Slave selection is done using the SS/CS lines, so no addressing is required in the data stream.
    *   **Master-Slave:** SPI always involves one master and one or more slaves.

*   **Operation:**

    1.  **Slave Selection:** The master activates the SS/CS line of the desired slave device.
    2.  **Clock Signal:** The master generates a clock signal on the SCK line.
    3.  **Data Transfer:** Data is transmitted and received simultaneously on the MOSI and MISO lines, synchronized by the SCK.
    4.  **Slave Deselection:** The master deactivates the SS/CS line to deselect the slave device.

*   **Clock Polarity (CPOL) and Clock Phase (CPHA):** SPI has four modes determined by the combination of CPOL and CPHA, affecting when data is sampled and transmitted relative to the clock edge.  The master and slave must be configured to use the same mode.

*   **Applications:** SD card interface, sensors, ADC/DAC converters, shift registers, displays.

*   **Example:**  Connecting a microcontroller to an SD card reader using SPI.

*   **Daisy Chaining:**  Multiple SPI devices can be daisy-chained together by connecting the MOSI of the master to the MOSI of the first slave, the MISO of the first slave to the MOSI of the second slave, and so on. The MISO of the last slave is connected to the MISO of the master. This minimizes the number of pins required on the master.

### 5. CAN (Controller Area Network)

*   **Definition:** CAN is a robust, multi-master, broadcast serial communication protocol designed for use in harsh environments, particularly in automotive applications.

*   **Key Features:**

    *   **Differential Signaling:** Uses two wires (CAN High and CAN Low) to transmit data using differential signaling, which makes it highly resistant to noise and interference.
    *   **Multi-Master/Broadcast:** Multiple nodes can transmit data on the bus, and all nodes receive all messages.
    *   **Message-Based:** Communication is based on messages rather than addressing specific devices.
    *   **Arbitration:**  Uses a "bit-wise arbitration" scheme to resolve conflicts when multiple nodes attempt to transmit simultaneously. The node with the highest priority message wins arbitration.
    *   **Error Detection and Handling:** Includes robust error detection and handling mechanisms to ensure reliable communication.
    *   **Standardized:**  Well-defined standard (ISO 11898) ensures interoperability between devices from different manufacturers.

*   **Operation:**

    1.  **Message Transmission:** A node transmits a CAN message onto the bus.
    2.  **Arbitration:** If multiple nodes transmit simultaneously, the node with the highest priority message (lowest ID value) wins arbitration.
    3.  **Message Reception:** All nodes on the bus receive the message, but only the nodes that are configured to accept messages with that particular identifier will process the message.

*   **CAN Message Structure:**
    *   **Start of Frame (SOF):** Indicates the beginning of a message.
    *   **Arbitration Field:** Contains the message identifier (priority) and a remote transmission request (RTR) bit.
    *   **Control Field:** Specifies the data length code (DLC).
    *   **Data Field:** Contains the actual data being transmitted (up to 8 bytes).
    *   **CRC Field:** Contains a cyclic redundancy check (CRC) for error detection.
    *   **ACK Field:** Contains an acknowledge bit, where the receiver indicates that it has successfully received the message.
    *   **End of Frame (EOF):** Indicates the end of the message.

*   **Applications:** Automotive electronics (engine management, anti-lock braking systems, airbags), industrial automation, medical equipment.

*   **Example:**  Communication between different electronic control units (ECUs) in a car.

### 6. Comparison of Communication Protocols

| Feature           | USART (UART)        | I2C                | SPI                  | CAN                   |
|-------------------|----------------------|--------------------|-----------------------|-----------------------|
| **Synchronization**| Asynchronous        | Synchronous        | Synchronous           | Synchronous           |
| **Wires Required**| 2 (TX, RX)         | 2 (SDA, SCL)       | 4 (MOSI, MISO, SCK, SS)| 2 (CAN High, CAN Low) |
| **Addressing**     | None (Point-to-Point)| Yes (7-bit)       | None (Slave Select)   | Message-based (ID)  |
| **Speed**         | Moderate             | Low to Moderate    | High                | Moderate to High      |
| **Complexity**     | Simple               | Moderate           | Moderate              | Complex               |
| **Topology**       | Point-to-Point       | Multi-Master/Slave | Master/Slave          | Multi-Master/Broadcast|
| **Error Handling** | Parity (Optional)   | ACK/NACK           | None                  | CRC, Error Frames      |
| **Applications**   | PC Communication, GPS| RTC, EEPROM, Sensors| SD Cards, Displays  | Automotive, Industrial|

### Important Points to Remember

*   **Baud Rate Matching:**  Ensure that the baud rates of the transmitter and receiver are the same for USART.
*   **Pull-up Resistors (I2C):** SDA and SCL lines in I2C require pull-up resistors.
*   **Slave Select (SPI):** Each SPI slave device needs its own slave select (SS/CS) line.
*   **Clock Polarity and Phase (SPI):**  Configure CPOL and CPHA correctly for SPI communication.
*   **CAN ID Priority:**  Lower CAN ID values have higher priority.
*   **Termination Resistors (CAN):** CAN networks require termination resistors at both ends of the bus (typically 120 ohms).
*   **Proper Grounding:** Ensure proper grounding to minimize noise and interference, especially in serial communication over longer distances.

### Practice Questions & Exercises

**1. What is the key difference between synchronous and asynchronous serial communication?**

*   **Answer:** Synchronous communication requires a clock signal for synchronization, while asynchronous communication uses start and stop bits.

**2. Which serial communication protocol uses only two wires for data transfer?**

*   **Answer:** I2C

**3.  Explain the purpose of the SS/CS line in SPI communication.**

*   **Answer:** The SS/CS (Slave Select/Chip Select) line is used by the master device to select a specific slave device for communication.

**4. Why is differential signaling used in CAN?**

*   **Answer:** Differential signaling provides high noise immunity, making CAN suitable for harsh environments.

**5. A microcontroller needs to communicate with an EEPROM to store configuration data. Which protocol would be most suitable, and why?**

*   **Answer:** I2C would be a suitable choice. EEPROMs often support I2C, and I2C requires only two wires, which is advantageous when pin count is limited.

**6.  Write a pseudocode example for transmitting the byte `0x5A` (binary 01011010) using UART with 8 data bits, no parity, and one stop bit.**

*   **Answer:**

    ```pseudocode
    UART_Init(9600)  // Initialize UART at 9600 baud
    data = 0x5A

    // Start bit (logic low)
    Transmit_Low()

    // Data bits (LSB first)
    Transmit_High()  // Bit 0 (0)
    Transmit_Low()   // Bit 1 (1)
    Transmit_High()  // Bit 2 (0)
    Transmit_Low()   // Bit 3 (1)
    Transmit_Low()   // Bit 4 (1)
    Transmit_High()  // Bit 5 (0)
    Transmit_Low()   // Bit 6 (1)
    Transmit_High()  // Bit 7 (0)

    // Stop bit (logic high)
    Transmit_High()
    ```

**7.  Research and compare the baud rates typically used for USART, I2C, SPI, and CAN.**

*   **Answer:**

    *   **USART:**  Common baud rates range from 300 bps to 115200 bps, but higher rates are possible.
    *   **I2C:** Standard mode: 100 kbps, Fast mode: 400 kbps, Fast mode Plus: 1 Mbps, High-speed mode: 3.4 Mbps.
    *   **SPI:** Can achieve speeds of several Mbps (e.g., 10 Mbps or higher) depending on the microcontroller and connected device.
    *   **CAN:** Standard CAN: Up to 1 Mbps.  CAN FD (CAN with Flexible Data-Rate): Up to 8 Mbps.

This comprehensive guide provides a solid foundation for understanding serial communication protocols in microcontroller applications.  Further study, experimentation, and practical implementation are encouraged to solidify your knowledge.
