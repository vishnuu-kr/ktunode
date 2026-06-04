---
title: "Programmed I/O"
subject: "COMPUTER ORGANIZATION AND ARCHITECTURE"
module: "Module 4: Input / Output "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8b054"
status: "completed"
scrapedAt: "2026-05-20T16:11:25.642Z"
---
# COMPUTER ORGANIZATION AND ARCHITECTURE - MODULE 4: INPUT/OUTPUT - PROGRAMMED I/O

## Introduction

This module delves into the realm of Input/Output (I/O) techniques in computer systems.  This section focuses specifically on **Programmed I/O**, a fundamental I/O method where the CPU directly controls and monitors the I/O process.

## Learning Outcomes

Upon completion of this section, you should be able to:

1.  **Define Programmed I/O and its basic operation.**
2.  **Explain the advantages and disadvantages of Programmed I/O.**
3.  **Describe the roles of Status and Control registers in Programmed I/O.**
4.  **Differentiate between Polling and Interrupt-Driven I/O (brief introduction for comparison).**
5.  **Understand the steps involved in reading and writing data using Programmed I/O.**
6.  **Trace the execution flow of a simple Programmed I/O routine.**

## 1. Definition and Basic Operation of Programmed I/O

*   **Definition:** Programmed I/O is a method of handling I/O operations where the CPU directly controls and monitors the data transfer between the CPU and the I/O devices. The CPU continuously checks the status of the I/O device and initiates data transfers.

*   **Basic Operation:**
    1.  The CPU initiates an I/O operation by writing to the I/O device's control register.
    2.  The CPU repeatedly checks the I/O device's status register to determine if the device is ready (e.g., data available for reading or ready to accept data for writing). This is known as **polling**.
    3.  When the device is ready, the CPU reads data from the I/O device's data register (for input) or writes data to the I/O device's data register (for output).
    4.  The CPU updates the control register to initiate further operations or to indicate the completion of the current operation.

*   **Key Components:**

    *   **CPU:** Executes the program and controls the I/O operations.
    *   **I/O Device:** Peripheral device such as a keyboard, printer, or disk drive.
    *   **Data Register:** Used to hold the data being transferred between the CPU and the I/O device.
    *   **Status Register:** Contains status information about the I/O device (e.g., busy/ready, error).
    *   **Control Register:** Used by the CPU to send commands and control signals to the I/O device (e.g., initiate a read, initiate a write).
    *   **Address Bus:** Selects the specific I/O device (or a register within the device).
    *   **Data Bus:** Transfers data between the CPU and the I/O device.
    *   **Control Bus:** Carries control signals, such as read/write commands and interrupt requests.

## 2. Advantages and Disadvantages of Programmed I/O

*   **Advantages:**

    *   **Simple to implement:** Relatively straightforward to program and requires minimal hardware support compared to other I/O methods.
    *   **Low cost:**  Less complex hardware interface translates to lower implementation costs.
    *   **Direct control:** The CPU has complete control over the I/O process.

*   **Disadvantages:**

    *   **CPU intensive:** The CPU spends a significant amount of time polling the I/O device, wasting valuable processing time.  This makes the CPU unavailable for other tasks.
    *   **Slow data transfer rates:** The CPU's involvement in every byte of data transfer limits the overall I/O speed.
    *   **Inefficient for high-speed devices:** Not suitable for high-speed I/O devices as the CPU cannot keep up with the data transfer rate.

## 3. Roles of Status and Control Registers

*   **Status Register:**

    *   Provides information about the current state of the I/O device.
    *   Common status bits include:
        *   **Ready/Busy:** Indicates whether the device is ready to transfer data.
        *   **Error:** Indicates if an error has occurred during the I/O operation.
        *   **Data Available:** (Input) Indicates if new data is available to be read.
        *   **Buffer Empty:** (Output) Indicates if the device is ready to accept new data.

    *   The CPU reads the status register to determine the next action to take.

*   **Control Register:**

    *   Used by the CPU to send commands and control signals to the I/O device.
    *   Commands might include:
        *   Initiate a read operation.
        *   Initiate a write operation.
        *   Select a specific sector on a disk.
        *   Set the printer to bold mode.
        *   Reset the device.

    *   The CPU writes to the control register to control the I/O device's operation.

**Example:**

Consider a simple keyboard. The *Status Register* might have a bit indicating whether a key has been pressed (ready) or not (busy).  The *Control Register* might have a bit that clears the ready flag after the CPU has read the key.

## 4. Polling vs. Interrupt-Driven I/O (Brief Introduction)

*   **Polling (Programmed I/O):**
    *   The CPU repeatedly checks the status register of the I/O device.
    *   The CPU is actively waiting for the device to become ready.
    *   Inefficient use of CPU time.

*   **Interrupt-Driven I/O:**
    *   The I/O device sends an interrupt signal to the CPU when it is ready.
    *   The CPU handles the interrupt, performs the I/O operation, and then returns to its previous task.
    *   More efficient use of CPU time. The CPU is free to perform other tasks while the I/O device is working.

**Key Difference:** In polling, the CPU actively checks the device's status.  In interrupt-driven I/O, the device notifies the CPU when it's ready.

## 5. Steps in Reading and Writing Data using Programmed I/O

**Reading Data (Input):**

1.  **Initialize:**  The CPU may need to initialize the I/O device by writing to its control register (e.g., requesting data from a disk).
2.  **Check Status:** The CPU reads the device's status register.
3.  **Wait (Polling):** The CPU loops, repeatedly reading the status register until the "Data Available" bit is set (indicating data is ready).
4.  **Read Data:** The CPU reads the data from the device's data register.
5.  **Acknowledge:** The CPU may write to the control register to acknowledge the data has been read (e.g., clearing the "Data Available" bit).
6.  **Process Data:** The CPU processes the data received from the I/O device.

**Writing Data (Output):**

1.  **Initialize:** The CPU may need to initialize the I/O device by writing to its control register (e.g., selecting the printer).
2.  **Check Status:** The CPU reads the device's status register.
3.  **Wait (Polling):** The CPU loops, repeatedly reading the status register until the "Buffer Empty" bit is set (indicating the device is ready to receive data).
4.  **Write Data:** The CPU writes the data to the device's data register.
5.  **Initiate Operation:** The CPU may write to the control register to initiate the output operation (e.g., printing a character).
6.  **Verify Completion:** The CPU may need to check the status register again to ensure the data has been successfully written or the operation has completed.

## 6. Example Programmed I/O Routine (Pseudocode)

This example demonstrates writing a character to a display device.

```pseudocode
// Define I/O port addresses
DISPLAY_DATA_REGISTER = 0x3000
DISPLAY_STATUS_REGISTER = 0x3001
DISPLAY_CONTROL_REGISTER = 0x3002

// Status Register Bits
READY_BIT = 0x01  // Bit 0 indicates device is ready

// Control Register Bits
START_WRITE_BIT = 0x01 // Bit 0 initiates the write operation

// Function to write a character to the display
function write_character(character):
  // 1. Check device status
  status = read_memory(DISPLAY_STATUS_REGISTER)

  // 2. Wait until the display is ready (polling)
  while (status & READY_BIT) == 0:
    status = read_memory(DISPLAY_STATUS_REGISTER) // Keep checking

  // 3. Write data to the data register
  write_memory(DISPLAY_DATA_REGISTER, character)

  // 4. Start the write operation by setting the START_WRITE_BIT
  write_memory(DISPLAY_CONTROL_REGISTER, START_WRITE_BIT)

  // (Optional) Wait for the write operation to complete (polling could be used here also)
  //  In a more complex scenario, you might poll the status register again
  //  to confirm successful completion.
  //  For this simple example, we assume the write is fast.
end function

// Example usage:
write_character('H')
write_character('e')
write_character('l')
write_character('l')
write_character('o')
```

**Explanation:**

1.  **Define Constants:** Define memory addresses for the data, status, and control registers.  Also, define bit masks for the relevant status and control bits.
2.  **`write_character` function:**
    *   **Check Status:** Reads the status register.
    *   **Polling Loop:** Continuously checks the `READY_BIT` in the status register.  The loop continues as long as the device is not ready.
    *   **Write Data:** Once the device is ready, the character is written to the data register.
    *   **Start Write:**  The `START_WRITE_BIT` is set in the control register to initiate the write operation on the display.
3.  **Example Usage:**  The `write_character` function is called multiple times to write the word "Hello" to the display.

## Important Points to Remember

*   Programmed I/O is a simple but inefficient I/O method.
*   The CPU is heavily involved in the I/O process, consuming valuable processing time.
*   Polling is the main mechanism for checking the device status.
*   Status and Control registers are essential for controlling the I/O device.
*   Interrupt-driven I/O is a more efficient alternative for many applications.

## Practice Questions

1.  **What is Programmed I/O? Explain its basic operation in detail.**
    *   **Answer:**  Programmed I/O is an I/O technique where the CPU directly controls and monitors the data transfer between itself and an I/O device. The CPU initiates an I/O operation by writing to the control register, then repeatedly checks the status register (polling) until the device is ready. It then reads/writes data from/to the data register and may update the control register.

2.  **List two advantages and two disadvantages of using Programmed I/O.**
    *   **Answer:**
        *   *Advantages:* Simple to implement, low cost.
        *   *Disadvantages:* CPU intensive, slow data transfer rates.

3.  **Explain the purpose of the Status and Control registers in the context of Programmed I/O.**
    *   **Answer:** The *Status register* provides information about the current state of the I/O device (e.g., ready/busy, error). The *Control register* is used by the CPU to send commands and control signals to the I/O device (e.g., initiate read/write operations).

4.  **Differentiate between Polling and Interrupt-Driven I/O.**
    *   **Answer:** In *Polling*, the CPU repeatedly checks the device's status register.  In *Interrupt-Driven I/O*, the device sends an interrupt signal to the CPU when it's ready, allowing the CPU to perform other tasks in the meantime.

5.  **Describe the steps involved in reading data from an I/O device using Programmed I/O.**
    *   **Answer:** 1. Initialize. 2. Check Status. 3. Wait (Polling). 4. Read Data. 5. Acknowledge. 6. Process Data.

6.  **True or False: Programmed I/O is suitable for high-speed I/O devices.**
    *   **Answer:** False. Programmed I/O is inefficient and not suitable for high-speed devices due to the CPU overhead.

7.  **If the Status Register indicates the I/O device is busy, what should the CPU do in a Programmed I/O system?**
    *   **Answer:** The CPU should continue polling the Status Register, repeatedly checking until the device becomes ready (e.g., the "busy" bit is cleared).

8.  **What is the main drawback of using polling in Programmed I/O?**
     *  **Answer:** It consumes significant CPU time, preventing the CPU from performing other tasks.
