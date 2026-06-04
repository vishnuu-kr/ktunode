---
title: "Communication Protocols and USB:-"
subject: "MICROCONTROLLERS"
module: "Module 3: Communication Protocols and USB:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b626"
status: "completed"
scrapedAt: "2026-05-20T16:48:39.818Z"
---
## MICROCONTROLLERS - Module 3: Communication Protocols and USB

### Topic: Communication Protocols and USB

**Description:** This module covers various communication protocols used by microcontrollers for exchanging data with other devices, with a specific focus on USB (Universal Serial Bus).

**Learning Outcomes:**

*   Understand the fundamental concepts of serial and parallel communication.
*   Describe and compare different serial communication protocols: UART, SPI, I2C.
*   Explain the basics of USB communication including device classes, endpoints, and descriptors.
*   Understand the different USB transfer types and their applications.
*   Implement basic communication using UART protocol on a microcontroller.

---

**1. Fundamental Concepts of Serial and Parallel Communication**

*   **Definition:** Communication protocols are sets of rules that govern data exchange between two or more devices. These rules define the data format, timing, error checking, and other parameters necessary for successful communication.

*   **Parallel Communication:**
    *   **Definition:** Transmits multiple bits of data simultaneously over multiple wires.
    *   **Advantages:** Faster data transfer rates compared to serial communication (theoretically).
    *   **Disadvantages:**
        *   Requires more wires, increasing cost and complexity.
        *   Susceptible to skew (arrival time differences between parallel bits), limiting distance and speed.
        *   Higher power consumption.
    *   **Example:** Parallel printer port (historically).  Data bus in a microcontroller.

*   **Serial Communication:**
    *   **Definition:** Transmits data one bit at a time over a single wire (or a small number of wires).
    *   **Advantages:**
        *   Fewer wires, reducing cost and complexity.
        *   Less susceptible to skew, allowing for longer distances and higher speeds (in modern serial protocols).
        *   Lower power consumption compared to parallel.
    *   **Disadvantages:** Slower data transfer rates compared to parallel communication (historically, but modern serial can be very fast).
    *   **Examples:** UART, SPI, I2C, USB, Ethernet.

*   **Comparison Table:**

| Feature          | Parallel Communication | Serial Communication |
| ---------------- | ----------------------- | ----------------------- |
| Wires            | Multiple               | Single (or few)          |
| Speed            | Faster (theoretically) | Slower (historically)   |
| Complexity       | Higher                  | Lower                  |
| Distance         | Shorter                | Longer                 |
| Cost             | Higher                  | Lower                  |
| Skew Sensitivity | Higher                  | Lower                  |

---

**2. Serial Communication Protocols: UART, SPI, I2C**

*   **UART (Universal Asynchronous Receiver/Transmitter)**
    *   **Definition:** Asynchronous serial communication protocol.  "Asynchronous" means no clock signal is shared between devices; devices must agree on a data rate (baud rate) beforehand.
    *   **Key Features:**
        *   Two wires: TX (Transmitter), RX (Receiver).  GND is also typically needed.
        *   Asynchronous: Uses start and stop bits to frame data.
        *   Simple and widely used for point-to-point communication.
        *   No clock signal.
        *   Full-duplex communication (simultaneous sending and receiving).
        *   Baud rate: Commonly used baud rates include 9600, 115200, etc.  Devices must use the same baud rate.
        *   Data bits: Typically 8 bits, but can be configured for 5, 6, or 7.
        *   Parity bit: Optional bit used for error detection (even, odd, none).
        *   Stop bits: Typically 1 or 2 bits used to indicate the end of transmission.
    *   **Use Cases:**
        *   Connecting a microcontroller to a computer (via a USB-to-Serial adapter).
        *   Interfacing with GPS modules, Bluetooth modules, and other serial devices.
    *   **Example:**
        *   A microcontroller sends the character 'A' (ASCII value 65, binary 01000001) using UART with 8 data bits, no parity, and 1 stop bit, at a baud rate of 9600.  The transmission would consist of a start bit (typically low), followed by the 8 data bits, then the parity bit (if enabled), and finally the stop bit (typically high).

*   **SPI (Serial Peripheral Interface)**
    *   **Definition:** Synchronous serial communication protocol. "Synchronous" means a clock signal is shared between the master and slave devices, providing precise timing.
    *   **Key Features:**
        *   Four wires:
            *   MOSI (Master Out Slave In): Data from master to slave.
            *   MISO (Master In Slave Out): Data from slave to master.
            *   SCK (Serial Clock): Clock signal generated by the master.
            *   SS/CS (Slave Select/Chip Select): Used by the master to select a specific slave device.
        *   Synchronous: Uses a clock signal for timing.
        *   Master-slave architecture: One master device controls multiple slave devices.
        *   Faster data transfer rates than UART.
        *   Full-duplex communication.
        *   Multiple SPI modes: Defined by clock polarity (CPOL) and clock phase (CPHA).
    *   **Use Cases:**
        *   Interfacing with sensors (e.g., temperature sensors, accelerometers).
        *   Communicating with memory devices (e.g., SD cards, flash memory).
        *   Driving displays (e.g., LCD screens).
    *   **Example:**
        *   A microcontroller (master) reads data from an accelerometer sensor (slave) using SPI. The master selects the accelerometer using its chip select line, then sends a command to request data. The accelerometer responds by sending the data back to the master over the MISO line, synchronized by the SCK signal.

*   **I2C (Inter-Integrated Circuit)**
    *   **Definition:** Synchronous serial communication protocol, also known as TWI (Two-Wire Interface).
    *   **Key Features:**
        *   Two wires:
            *   SDA (Serial Data): Data line.
            *   SCL (Serial Clock): Clock signal.
        *   Synchronous: Uses a clock signal for timing.
        *   Master-slave architecture: One or more master devices can communicate with multiple slave devices.
        *   Addressing: Each slave device has a unique 7-bit or 10-bit address.
        *   Slower data transfer rates than SPI.
        *   Open-drain lines: Requires pull-up resistors on SDA and SCL.
        *   Multi-master capability: Multiple masters can share the bus, but arbitration is required.
    *   **Use Cases:**
        *   Interfacing with EEPROM memory.
        *   Communicating with real-time clocks (RTCs).
        *   Connecting to environmental sensors (e.g., humidity sensors, pressure sensors).
    *   **Example:**
        *   A microcontroller (master) writes data to an EEPROM chip (slave) using I2C. The master first sends the slave address of the EEPROM, followed by the write command and the memory address to write to, and then the data itself. The EEPROM acknowledges each byte received.

*   **Comparison Table:**

| Feature          | UART                  | SPI                     | I2C                      |
| ---------------- | ----------------------- | ----------------------- | ----------------------- |
| Wires            | 2 (TX, RX)             | 4 (MOSI, MISO, SCK, SS) | 2 (SDA, SCL)             |
| Synchronization  | Asynchronous          | Synchronous           | Synchronous           |
| Architecture     | Point-to-Point       | Master-Slave          | Master-Slave (Multi-Master)|
| Speed            | Lower                 | Higher                  | Medium                   |
| Complexity       | Simple                | Medium                  | Medium                   |
| Addressing       | No                    | Slave Select            | 7-bit/10-bit              |
| Full-Duplex      | Yes                   | Yes                     | No (Half-Duplex)             |

---

**3. USB (Universal Serial Bus) Basics**

*   **Definition:** A standard for connecting computers and peripherals. It provides a standardized interface for power, data, and sometimes other functions.

*   **Key Features:**
    *   Hot-pluggable: Devices can be connected and disconnected while the host is running.
    *   Plug and Play: Automatically identifies and configures devices.
    *   Self-configuring: Most USB devices do not require manual configuration.
    *   Power delivery: Can provide power to connected devices.
    *   High-speed data transfer: Supports different transfer speeds (e.g., USB 2.0, USB 3.0, USB 3.1, USB 3.2, USB 4).

*   **USB Components:**
    *   **Host:** The computer or device that controls the USB bus.
    *   **Device:** The peripheral device connected to the USB bus (e.g., mouse, keyboard, flash drive).
    *   **Cable:** Connects the host and device, providing power and data lines.
    *   **Hub:** A device that expands the number of available USB ports.

*   **USB Device Classes:**
    *   Defines the functionality of a USB device. Examples:
        *   **HID (Human Interface Device):** Keyboards, mice, joysticks.
        *   **Mass Storage Device (MSC):** USB flash drives, external hard drives.
        *   **CDC (Communication Device Class):** Serial ports, modems.
        *   **Audio Class:** Speakers, microphones.
        *   **Video Class (UVC):** Webcams.

*   **USB Endpoints:**
    *   Communication channels within a USB device.
    *   Each endpoint has a unique address and direction (IN or OUT).
    *   **Endpoint 0:** The control endpoint, used for device configuration and status.  Every device must have this.
    *   Other endpoints are used for data transfer.
    *   **IN endpoints:** Transfer data from the device to the host.
    *   **OUT endpoints:** Transfer data from the host to the device.

*   **USB Descriptors:**
    *   Data structures that describe the device's capabilities and configuration.
    *   **Device Descriptor:** General information about the device (e.g., vendor ID, product ID, USB version).
    *   **Configuration Descriptor:** Describes the device's power requirements and available interfaces.
    *   **Interface Descriptor:** Defines a specific interface provided by the device (e.g., audio interface, HID interface).
    *   **Endpoint Descriptor:** Describes the characteristics of an endpoint (e.g., address, transfer type, maximum packet size).
    *   These descriptors are used by the host to identify and configure the device.

---

**4. USB Transfer Types and Applications**

*   **Control Transfers:**
    *   Used for device configuration, status requests, and other control operations.
    *   Guaranteed delivery, but relatively slow.
    *   Typically used for endpoint 0.
    *   Example: The host reading the device's descriptors.

*   **Bulk Transfers:**
    *   Used for transferring large amounts of data that are not time-critical (e.g., file transfers).
    *   Guaranteed delivery, but lower priority than other transfer types.
    *   Example: Transferring files to a USB flash drive.

*   **Interrupt Transfers:**
    *   Used for transferring small amounts of data that are time-critical (e.g., keyboard input, mouse movements).
    *   Guaranteed delivery, with a fixed latency.
    *   Example: Receiving keystrokes from a USB keyboard.

*   **Isochronous Transfers:**
    *   Used for transferring real-time data where data loss is acceptable, but timely delivery is crucial (e.g., audio, video).
    *   Not guaranteed delivery, but high priority.
    *   Example: Streaming audio from a USB microphone.

*   **Transfer Type Comparison:**

| Transfer Type    | Data Volume | Delivery Guarantee | Latency Sensitivity | Priority | Example                       |
| ------------------ | ----------- | ------------------- | ------------------- | -------- | ----------------------------- |
| Control            | Small       | Guaranteed          | Low                 | Medium   | Device Configuration          |
| Bulk               | Large       | Guaranteed          | Low                 | Low      | File Transfers                |
| Interrupt          | Small       | Guaranteed          | High                | High     | Keyboard Input, Mouse Movements |
| Isochronous        | Medium/Large| Not Guaranteed     | Very High           | Highest  | Audio/Video Streaming         |

---

**5. Implementing Basic Communication Using UART Protocol on a Microcontroller**

*   **Steps:**
    1.  **Configure UART Pins:** Configure the microcontroller pins to function as TX and RX pins for the UART module.  This typically involves setting the pin mode and enabling the alternate function for the UART peripheral.
    2.  **Configure UART Module:** Initialize the UART module with the desired baud rate, data bits, parity, and stop bits.
    3.  **Implement Transmit Function:** Create a function to send data over UART. This function typically writes the data to the UART transmit buffer, which then automatically transmits the data bit by bit.
    4.  **Implement Receive Function:** Create a function to receive data over UART. This function typically waits for data to arrive in the UART receive buffer, and then reads the data from the buffer.
    5.  **Enable Interrupts (Optional):** Enable UART interrupts to handle data reception and transmission asynchronously.  This is especially useful for handling large amounts of data or for implementing event-driven communication.

*   **Example (Pseudocode):**

```c
// Define UART pins
#define TX_PIN  // Define the TX pin number
#define RX_PIN  // Define the RX pin number

// Define UART settings
#define BAUD_RATE  9600
#define DATA_BITS  8
#define PARITY     NONE
#define STOP_BITS  1

// Initialize UART
void uart_init() {
    // Configure TX and RX pins
    configure_pin_mode(TX_PIN, OUTPUT);
    configure_pin_mode(RX_PIN, INPUT);

    // Configure UART module with defined settings (BAUD_RATE, DATA_BITS, PARITY, STOP_BITS)
    set_baud_rate(BAUD_RATE);
    set_data_bits(DATA_BITS);
    set_parity(PARITY);
    set_stop_bits(STOP_BITS);
}

// Transmit a character over UART
void uart_transmit(char data) {
    // Wait for the transmit buffer to be empty
    while (!is_transmit_buffer_empty());

    // Write the data to the transmit buffer
    write_to_transmit_buffer(data);
}

// Receive a character over UART
char uart_receive() {
    // Wait for data to be available in the receive buffer
    while (!is_receive_buffer_full());

    // Read the data from the receive buffer
    return read_from_receive_buffer();
}

int main() {
    uart_init();

    uart_transmit('H');
    uart_transmit('e');
    uart_transmit('l');
    uart_transmit('l');
    uart_transmit('o');

    char received_char = uart_receive();
    // Do something with received_char

    return 0;
}
```

**Important Considerations:**

*   **Microcontroller Specifics:** The specific implementation of UART communication will vary depending on the microcontroller being used. Refer to the microcontroller's datasheet and reference manual for detailed information on the UART module.
*   **Error Handling:** Implement error handling mechanisms to detect and handle errors such as parity errors, framing errors, and overrun errors.
*   **Baud Rate Synchronization:** Ensure that the transmitting and receiving devices are configured with the same baud rate. A mismatch in baud rates will result in corrupted data.

---

**Practice Questions/Exercises:**

1.  **Question:** What are the advantages and disadvantages of serial communication compared to parallel communication?
    *   **Answer:** See the comparison table in Section 1.

2.  **Question:** Explain the difference between synchronous and asynchronous serial communication. Give an example of each.
    *   **Answer:** Synchronous communication uses a clock signal, while asynchronous communication does not. Examples: SPI (synchronous), UART (asynchronous).

3.  **Question:** Describe the function of each of the four wires used in SPI communication.
    *   **Answer:** MOSI (Master Out Slave In), MISO (Master In Slave Out), SCK (Serial Clock), SS/CS (Slave Select/Chip Select).  See Section 2 for detailed descriptions.

4.  **Question:** What is the purpose of USB descriptors, and what are some examples of different types of descriptors?
    *   **Answer:** USB descriptors describe the device's capabilities and configuration. Examples: Device descriptor, configuration descriptor, interface descriptor, endpoint descriptor.

5.  **Question:** Explain the differences between the four USB transfer types: Control, Bulk, Interrupt, and Isochronous. Give an example of a scenario where each transfer type would be used.
    *   **Answer:** See the comparison table in Section 4.

6.  **Exercise:** Write a simple program (pseudocode or actual code) to transmit the string "Hello World!" over UART on a microcontroller.
    *   **Answer:** (Similar to the example in Section 5, but extended to transmit the full string). You'll need to adapt the example to the specific microcontroller you intend to use.

---

**Important Points to Remember:**

*   Understand the tradeoffs between different communication protocols. Choose the protocol that best suits the specific application requirements.
*   Pay close attention to timing considerations, especially when using synchronous protocols.
*   Always refer to the device datasheets and reference manuals for detailed information on the communication protocols and hardware peripherals.
*   Implement robust error handling to ensure reliable communication.
*   When using USB, understanding descriptors is critical for making your device work correctly with a host system.

This detailed study guide should provide a comprehensive overview of communication protocols and USB for microcontrollers.  Remember to practice by implementing these concepts on actual hardware to gain a deeper understanding. Good luck!
