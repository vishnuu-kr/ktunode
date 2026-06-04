---
title: "I/O organization: Characteristics of I/O devices, Data transfer schemes - Programmed controlled I/O transfer, Interrupt controlled I/O transfer."
subject: "COMPUTER ORGANIZATION"
module: "Module 4: Memory system: Types of memory( Concepts only), Virtual memory , Content addressable memory, cache memories "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35f5e"
status: "completed"
scrapedAt: "2026-05-23T16:15:03.308Z"
---
# Computer Organization: Module 4 - I/O Organization

This module delves into the crucial aspect of how a computer interacts with the outside world – Input/Output (I/O) organization. We will explore the diverse characteristics of I/O devices and understand the fundamental schemes used for data transfer between the CPU and these devices.

---

## 1. Characteristics of I/O Devices

I/O devices are the peripherals that allow a computer to communicate with the external environment. They vary significantly in their operational characteristics, which dictates how they are managed by the computer system. Understanding these characteristics is essential for designing efficient I/O subsystems.

### Key Characteristics:

*   **Speed:**
    *   **High-speed devices:** Such as magnetic disks and solid-state drives (SSDs), are significantly slower than the CPU but much faster than humans. They require efficient transfer mechanisms to keep up.
    *   **Low-speed devices:** Like keyboards and mice, are much slower than the CPU. The CPU often has to wait for these devices to produce or accept data.
    *   **I/O bandwidth:** The rate at which data can be transferred to or from an I/O device. This is a crucial factor in overall system performance.
    *   *Example:* A keyboard might send a character every 100ms, while a hard drive can transfer data at megabytes per second.

*   **Data Format:**
    *   I/O devices may represent data in different formats than the internal representation used by the CPU (e.g., ASCII for text, binary for raw data).
    *   Conversion mechanisms are often required.
    *   *Example:* A keyboard sends ASCII characters, which the CPU might internally represent as EBCDIC or Unicode for processing.

*   **Number of Pins/Connections:**
    *   I/O devices have varying numbers of connections for data, control, and status signals.
    *   This impacts the interface design and the number of I/O ports required.
    *   *Example:* A simple button might require one data line and one ground, while a USB device requires multiple data and power lines.

*   **Error Rates:**
    *   Some I/O devices are more prone to errors than others (e.g., magnetic media can degrade).
    *   Error detection and correction mechanisms are vital.
    *   *Example:* Data read from a CD might have more errors than data from an SSD, requiring more robust error checking.

*   **Mode of Operation:**
    *   **Block-oriented devices:** Transfer data in fixed-size blocks (e.g., hard drives, SSDs).
    *   **Stream-oriented devices:** Transfer data as a continuous stream of characters or bytes (e.g., serial ports, printers).

*   **Duplexing:**
    *   **Simplex:** Data flows in only one direction (e.g., a speaker outputting sound).
    *   **Half-duplex:** Data can flow in both directions, but only one at a time (e.g., a walkie-talkie).
    *   **Full-duplex:** Data can flow in both directions simultaneously (e.g., a telephone conversation, Ethernet).

### **Important Point to Remember:**

The significant differences in speed and characteristics between the CPU and I/O devices create an "I/O bottleneck" problem. The CPU is much faster, and if it directly manages every data transfer from slow devices, it would spend most of its time waiting, severely impacting performance. This necessitates efficient data transfer schemes.

---

## 2. Data Transfer Schemes

These schemes define how data is moved between the I/O devices and the main memory or CPU. The choice of scheme significantly impacts the system's efficiency and complexity.

### 2.1. Programmed Controlled I/O Transfer (Polling)

In this method, the CPU is directly responsible for initiating and managing all data transfers. It continuously monitors the status of the I/O device to determine when it's ready for data transfer.

#### **Key Concepts:**

*   **CPU-Initiated:** The CPU explicitly issues commands to the I/O device and checks its status.
*   **Polling:** The CPU repeatedly checks a status register of the I/O device to see if it's ready to send or receive data.
*   **Busy-waiting:** While polling, the CPU is actively executing instructions to check the status, and if the device is not ready, it continues to "wait" by polling again. This is a major drawback.
*   **No hardware assistance for transfer:** The CPU fetches data from the device, stores it in an internal register, and then moves it to memory, or vice versa.
*   **I/O Instructions:** Special instructions (e.g., `IN`, `OUT`) are used to communicate with I/O devices. These instructions typically specify an I/O port number.

#### **How it Works (Example: CPU Reading from a Keyboard):**

1.  **CPU issues a "read" command:** The CPU sends a command to the keyboard controller.
2.  **CPU polls the status register:** The CPU repeatedly checks a status bit in the keyboard's controller. This bit indicates if a character has been typed and is ready.
3.  **Device ready:** When the status bit indicates a character is available, the CPU reads the data from the keyboard's data register.
4.  **Data transfer:** The CPU stores the character in an internal CPU register.
5.  **Move to memory:** The CPU then executes a move instruction to transfer the character from its internal register to the main memory.
6.  **Repeat:** The CPU continues this cycle for the next character.

#### **Advantages:**

*   **Simple to implement:** Requires minimal hardware support.
*   **Direct CPU control:** Easy to understand and debug for simple I/O operations.

#### **Disadvantages:**

*   **Inefficient:** The CPU spends most of its time polling and waiting, wasting valuable processing cycles. This is particularly bad for slow devices.
*   **CPU Overload:** For multiple I/O devices, the CPU might be too busy polling to perform other computational tasks.
*   **Not scalable:** Becomes impractical with many I/O devices or high-speed devices.
