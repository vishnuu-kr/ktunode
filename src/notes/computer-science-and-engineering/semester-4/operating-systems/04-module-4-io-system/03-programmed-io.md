---
title: "Programmed I/O"
subject: "OPERATING SYSTEMS"
module: "Module 4: I/O system:"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afcc"
status: "completed"
scrapedAt: "2026-05-20T16:14:28.961Z"
---
## Module 4: I/O System - Topic: Programmed I/O

**Subject:** OPERATING SYSTEMS
**Module:** Module 4: I/O System
**Topic:** Programmed I/O

**Learning Outcomes:**

*   Understand the basic concept of Programmed I/O.
*   Explain how Programmed I/O works.
*   Identify the advantages and disadvantages of Programmed I/O.
*   Describe the role of the CPU in Programmed I/O.
*   Understand the concepts of busy waiting and its impact.

---

### 1. Introduction to Programmed I/O

*   **Definition:** Programmed I/O (PIO) is a method of performing I/O operations where the CPU is directly involved in controlling and transferring data between the I/O device and memory.  The CPU continuously monitors the device status and actively moves data.

*   **Core Idea:** The CPU directly executes instructions to handle each step of the I/O process, controlling the I/O device and moving data word by word or byte by byte.

*   **Historical Context:** PIO was one of the earliest I/O techniques and is still used in some embedded systems and situations where simplicity and direct control are paramount.

### 2. How Programmed I/O Works

The Programmed I/O process involves the following steps:

1.  **CPU Request:**  The CPU initiates an I/O operation by sending a command to the I/O device (e.g., read from disk, write to printer). This command is written to the device's control register.

2.  **Device Status Check:**  The CPU repeatedly checks the status register of the I/O device to determine if it's ready to transfer data.  This is often done by reading a specific bit in the status register.  This step is crucial and where "busy waiting" occurs.

3.  **Data Transfer:** Once the device is ready, the CPU transfers data between the I/O device and memory (either RAM or a CPU register).

    *   **Input:** CPU reads data from the device's data register.
    *   **Output:** CPU writes data to the device's data register.

4.  **Address Increment (if needed):**  If transferring a block of data, the CPU increments the memory address and the device address (if necessary) to prepare for the next data transfer.

5.  **Status Update:** The CPU updates the device's control register or other relevant registers to signal the completion of the data transfer or to initiate further operations.

6.  **Looping (Busy Waiting):**  The CPU loops back to step 2 to check the device status for each byte/word until the entire I/O operation is complete.

**Diagram:**

```
CPU  <--->  I/O Controller  <--->  I/O Device
```

*   **CPU:** Issues commands, checks status, transfers data.
*   **I/O Controller:** Interface between the CPU and the I/O device.  Contains device registers (control, status, data).
*   **I/O Device:** The actual device performing the I/O (e.g., keyboard, printer, disk).

**Example:**

Let's imagine reading a single byte from a keyboard using Programmed I/O:

1.  CPU writes a command to the keyboard controller's control register to initiate a read.
2.  CPU enters a loop, constantly reading the keyboard controller's status register.  It looks for a "ready" bit to be set.
3.  Once the "ready" bit is set, the CPU reads the data byte from the keyboard controller's data register and stores it in a memory location.
4.  CPU signals the keyboard controller that the data has been received (e.g., by writing to the control register).

### 3. Advantages and Disadvantages of Programmed I/O

**Advantages:**

*   **Simplicity:** Relatively simple to implement in hardware and software.
*   **Direct Control:** Provides precise control over the I/O process.
*   **Low Overhead (potentially):**  Can be efficient for very small, infrequent I/O transfers.

**Disadvantages:**

*   **CPU Overhead (Busy Waiting):**  The CPU spends a significant amount of time waiting for the I/O device to become ready. This "busy waiting" consumes CPU cycles that could be used for other tasks.
*   **Slow Data Transfer Rate:** Data transfer is limited by the speed of the CPU and the speed of the I/O device.
*   **Poor System Performance:**  CPU is tied up during I/O operations, leading to reduced overall system performance.
*   **Not Suitable for High-Speed I/O:** Inefficient for handling large data transfers or high-speed devices.

### 4. The Role of the CPU in Programmed I/O

The CPU plays the *central* role in Programmed I/O.  It is responsible for:

*   **Initiating I/O operations:**  Sending commands to the I/O device via the device's control register.
*   **Checking Device Status:**  Polling the status register of the I/O device to determine its readiness.  This is the *busy waiting* aspect.
*   **Transferring Data:**  Reading data from (input) or writing data to (output) the I/O device's data register.
*   **Managing Memory Addresses:**  Updating memory addresses if transferring a block of data.
*   **Controlling the I/O Controller:** Interacting directly with the I/O controller through registers.

### 5. Busy Waiting and its Impact

*   **Definition:** Busy waiting (or spin waiting) is a technique where a process (in this case, the CPU) repeatedly checks a condition (the device's status register) until the condition becomes true.

*   **Mechanism:**  The CPU enters a loop that continuously reads the status register of the I/O device. The CPU performs no other useful work during this loop.

*   **Impact:**
    *   **CPU Waste:**  CPU cycles are wasted checking the status register repeatedly, even when the device is not ready.  These cycles could be used for other processes or tasks.
    *   **Reduced System Throughput:** Overall system performance is degraded because the CPU is tied up waiting for I/O to complete.
    *   **Unresponsiveness:** The system may become unresponsive if the CPU is spending too much time in busy-waiting loops.

*   **Example (Code Snippet - Conceptual):**

```assembly
; Pseudo-assembly code for reading a byte from a device

IO_CONTROL_REG  EQU  0x2000  ; Address of the I/O control register
IO_DATA_REG     EQU  0x2001  ; Address of the I/O data register
READY_BIT       EQU  0x01    ; Bit in the control register indicating device ready

START_READ:
    MOV R0, IO_CONTROL_REG   ; Load address of control register into R0
    MOV R1, #READ_COMMAND  ; Set the read command value
    STR R1, [R0]            ; Write the read command to the control register

CHECK_STATUS:
    LDR R2, [R0]            ; Read the status register into R2
    AND R3, R2, #READY_BIT  ; Isolate the READY_BIT
    BEQ CHECK_STATUS        ; Branch back to CHECK_STATUS if READY_BIT is zero (busy waiting!)

; Device is now ready

    MOV R0, IO_DATA_REG       ; Load address of data register into R0
    LDR R4, [R0]            ; Read the data byte from the device into R4

; R4 now contains the data byte
```

*   **Mitigation:**  Busy waiting is generally avoided in modern operating systems.  Interrupt-driven I/O and DMA are used instead to allow the CPU to perform other tasks while waiting for I/O operations to complete.

### 6. Alternatives to Programmed I/O

While PIO illustrates the fundamental principles of I/O, more efficient methods are commonly used in modern systems:

*   **Interrupt-Driven I/O:** The I/O device signals the CPU when it's ready for data transfer, using an interrupt. This allows the CPU to perform other tasks while waiting.
*   **Direct Memory Access (DMA):** DMA allows the I/O device to transfer data directly to or from memory without the CPU's direct involvement.  The CPU initiates the DMA transfer and is notified upon completion.

### Important Points to Remember

*   Programmed I/O involves the CPU directly controlling and transferring data between the CPU and I/O devices.
*   Busy waiting is a major disadvantage of PIO, as the CPU wastes cycles waiting for I/O devices.
*   PIO is simple but inefficient compared to interrupt-driven I/O and DMA.
*   PIO is best suited for very simple and infrequent I/O operations.
*   Understanding PIO helps to appreciate the complexities and advantages of more advanced I/O techniques.

### Practice Questions and Exercises

**Question 1:**  What is the primary disadvantage of Programmed I/O that leads to poor system performance?

**Answer:** The primary disadvantage is **busy waiting**, where the CPU continuously polls the I/O device's status register, wasting CPU cycles that could be used for other tasks.

**Question 2:**  Describe the steps involved in a Programmed I/O read operation.

**Answer:** 1. CPU sends a read command to the device's control register. 2. CPU enters a loop, repeatedly checking the device's status register until the "ready" bit is set. 3. Once ready, the CPU reads the data from the device's data register and stores it in memory. 4. The CPU might signal the device that the data has been received.

**Question 3:** In what types of systems might Programmed I/O still be used today?

**Answer:** Programmed I/O might be used in **simple embedded systems** or in situations where **simplicity and direct control are paramount**, and where performance is not a critical concern.

**Question 4:**  Explain how Interrupt-Driven I/O is an improvement over Programmed I/O.

**Answer:** Interrupt-Driven I/O allows the CPU to perform other tasks while waiting for an I/O device to become ready.  Instead of busy waiting, the I/O device signals the CPU using an interrupt when it's ready for data transfer, improving CPU utilization and overall system performance.

**Question 5:**  What is the role of the I/O Controller in Programmed I/O?

**Answer:** The I/O controller acts as an **interface** between the CPU and the I/O device. It contains the device registers (control, status, and data registers) that the CPU interacts with to control the I/O device.
