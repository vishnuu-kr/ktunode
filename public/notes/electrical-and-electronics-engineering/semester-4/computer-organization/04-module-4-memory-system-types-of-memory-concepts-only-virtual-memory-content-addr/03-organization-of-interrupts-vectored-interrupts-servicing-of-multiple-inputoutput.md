---
title: "Organization of interrupts - vectored interrupts – Servicing of multiple input/output devices – Polling and daisy chaining schemes. Direct memory accessing (DMA)"
subject: "COMPUTER ORGANIZATION"
module: "Module 4: Memory system: Types of memory( Concepts only), Virtual memory , Content addressable memory, cache memories "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35f5f"
status: "completed"
scrapedAt: "2026-05-23T16:15:04.052Z"
---
# Computer Organization: Module 4 - Memory System & I/O Organization

## Topic: Interrupts and Direct Memory Access (DMA)

**Learning Outcomes:**

*   Understand the concept of interrupts and their role in CPU-peripheral interaction.
*   Differentiate between vectored and non-vectored interrupts.
*   Explain different mechanisms for servicing multiple I/O devices.
*   Describe the operation and benefits of Direct Memory Access (DMA).

**Course Outcomes Alignment:**

*   **CO1 (K2):** Understands the relevance of functional units (interrupt handling is crucial for efficient operation).
*   **CO2 (K2):** Illustrates processor logic design (interrupt handling impacts processor's sequential execution).
*   **CO5 (K2):** Illustrates the organization of different types of memories and I/O organization (interrupts and DMA are key I/O organization techniques).

---

### 1. Organization of Interrupts

Interrupts are signals that disrupt the normal execution flow of the CPU to handle an event, typically an I/O operation. They allow the CPU to efficiently manage multiple devices without constantly polling them.

**Key Concepts:**

*   **Interrupt:** A signal to the processor that a hardware device needs attention.
*   **Interrupt Service Routine (ISR) / Interrupt Handler:** A dedicated piece of code that the CPU executes when a specific interrupt occurs.
*   **Interrupt Vector:** A memory address that points to the ISR for a particular interrupt.

**How Interrupts Work:**

1.  **Interrupt Request (IRQ):** An I/O device asserts an interrupt signal to the CPU.
2.  **CPU Acknowledgment:** The CPU detects the interrupt signal (typically between instruction fetches).
3.  **Interrupt Enable/Disable:** The CPU has an interrupt enable flag. If disabled, interrupts are ignored until re-enabled.
4.  **Save CPU State:** Before jumping to the ISR, the CPU saves its current state (program counter (PC), general-purpose registers) onto the stack. This is crucial for resuming the interrupted program later.
5.  **Identify Interrupt Source:** The CPU determines which device generated the interrupt.
6.  **Execute ISR:** The CPU jumps to the ISR for that device and executes the necessary actions (e.g., reading data from the device).
7.  **Restore CPU State:** After the ISR completes, the CPU restores its saved state from the stack.
8.  **Resume Program:** The CPU resumes execution of the interrupted program from where it left off.

**Textbook References:**

*   **Hamacher, Vranesic, Zaky (5/e):** Chapter 7: Input/Output Organization (covers interrupts in detail).
*   **Mano (Digital Logic & Computer Design, 2004):** Chapter 10: Input-Output Organization (discusses interrupt handling).
*   **Mano (Computer System Architecture, 2007):** Chapter 8: Input-Output Organization (explains interrupt-driven I/O).

---

### 2. Vectored Interrupts

In a system with multiple I/O devices, each device might generate an interrupt. A vectored interrupt scheme provides a direct mechanism for the CPU to identify the interrupting device and jump to its specific ISR.

**Key Concepts:**

*   **Vectored Interrupt:** An interrupt handling scheme where the interrupting device provides a unique identifier (vector number) to the CPU. This vector number is used as an index into an **interrupt vector table** (also called interrupt vector or interrupt pointer table) stored in memory.
*   **Interrupt Vector Table:** An array of memory addresses, where each address points to the start of an ISR for a specific interrupt source.

**How Vectored Interrupts Work:**

1.  **Interrupt Request:** An I/O device asserts an interrupt.
2.  **CPU Acknowledgment & Vector Retrieval:** The CPU acknowledges the interrupt. The interrupting device, in response, places its unique vector number onto an interrupt request (or bus) line.
3.  **Vector Table Lookup:** The CPU uses this vector number as an index to access the interrupt vector table in memory.
4.  **Jump to ISR:** The address stored at the indexed location in the vector table is loaded into the PC, causing the CPU to jump directly to the ISR for that specific device.

**Advantages of Vectored Interrupts:**

*   **Faster Interrupt Service:** The CPU immediately knows which ISR to execute, reducing the overhead of identifying the device.
*   **Simpler CPU Design:** The CPU doesn't need complex logic to poll devices.

**Example:**

Consider an interrupt vector table starting at memory address `0x1000`.

| Vector Number | Memory Address of ISR |
| :------------ | :-------------------- |
| 0             | `0x1000` (Timer ISR)  |
| 1             | `0x1020` (Keyboard ISR) |
| 2             | `0x1040` (Disk ISR)   |
| ...           | ...                   |

If the keyboard generates an interrupt, it might provide vector number `1`. The CPU fetches the address `0x1020` from `0x1000 + (1 * size_of_address)` and jumps to the Keyboard ISR.

**Important Point to Remember:** The size of an entry in the vector table is typically the size of a memory address.

**Textbook References:**

*   **Hamacher, Vranesic, Zaky (5/e):** Section 7.3.2: Vectored Interrupts.
*   **Mano (Computer System Architecture, 2007):** Section 8.3: Interrupt-Initiated I/O (discusses interrupt vectors).

---

### 3. Servicing of Multiple Input/Output Devices

When multiple I/O devices can generate interrupts, the system needs a mechanism to manage these requests and prioritize them.

**Key Concepts:**

*   **Interrupt Priority:** A mechanism to determine which interrupt request is more important. Higher priority interrupts are serviced before lower priority ones.
*   **Interrupt Masking:** The ability to disable interrupts from specific devices or all devices temporarily.

**Schemes for Servicing Multiple I/O Devices:**

#### a) Polling Scheme

In a polling scheme, when an interrupt occurs, the CPU executes a single ISR that first checks a status register of each I/O device in a predefined order to identify the source of the interrupt.

**How Polling Works:**

1.  **Interrupt Occurs:** An interrupt signal is received from any I/O device.
2.  **CPU Acknowledgment:** The CPU acknowledges the interrupt.
3.  **Execute General ISR:** The CPU jumps to a common ISR.
4.  **Poll Devices:** The ISR sequentially checks the status flags of each I/O device.
5.  **Identify Source:** When a device with its interrupt flag set is found, the CPU identifies it as the source.
6.  **Execute Device-Specific Code:** The CPU then executes the specific service routine for that device or branches to it.
7.  **Clear Interrupt Flag:** The ISR clears the interrupt flag of the serviced device.
8.  **Continue Polling (if not found):** If no device flag is set, the ISR might do nothing or report an error.

**Advantages of Polling:**

*   **Simpler Hardware:** Requires less complex interrupt controller hardware.
*   **Flexibility:** Easy to add or remove devices.

**Disadvantages of Polling:**

*   **Slower:** The time taken to identify the interrupting device depends on the number of devices and their order in the polling sequence. If the interrupting device is at the end of the list, the CPU wastes time checking devices that did not interrupt.
*   **Inefficient for many devices:** Becomes very time-consuming with a large number of I/O devices.

**Textbook References:**

*   **Hamacher, Vranesic, Zaky (5/e):** Section 7.3.1: Multiple Interrupts (discusses polling).
*   **Mano (Computer System Architecture, 2007):** Section 8.2: Interrupt-Driven I/O (mentions polling as a method).

#### b) Daisy Chaining Scheme

Daisy chaining is a hardware-based interrupt management scheme that prioritizes interrupts. Devices are connected in a chain, and interrupt requests propagate through the chain.

**How Daisy Chaining Works:**

1.  **Interrupt Request:** An I/O device asserts an interrupt request (IRQ) to the interrupt controller.
2.  **Interrupt Controller Check:** The interrupt controller checks if it's currently allowing interrupts.
3.  **Device Identification (Sequential):** If an interrupt is pending, the controller enables the interrupting device to place its vector number on the data bus. It then asserts an **Interrupt Acknowledge (INTA)** signal.
4.  **Device Responds:** The INTA signal propagates down the daisy chain. The first device in the chain that asserted an IRQ will respond to the INTA signal by placing its vector number onto the data bus and preventing the INTA signal from propagating further down the chain.
5.  **CPU Fetches Vector:** The CPU reads the vector number from the data bus.
6.  **Service Device:** The CPU proceeds to service the device by jumping to its ISR.
7.  **Interrupt Controller Notifies Serviced Device:** The interrupt controller signals to the serviced device that its interrupt has been handled, allowing the INTA signal to continue down the chain for other pending interrupts.

**Priority Assignment:** The priority is determined by the position in the daisy chain. Devices closer to the controller have higher priority.

**Advantages of Daisy Chaining:**

*   **Hardware Priority:** Automatically prioritizes interrupts based on hardware connection.
*   **Efficient:** Faster identification of the interrupting device compared to software polling.

**Disadvantages of Daisy Chaining:**

*   **Less Flexible:** Adding or removing devices requires reconfiguring the chain.
*   **Potential for Priority Inversion:** A high-priority device might be blocked by a lower-priority device if the lower-priority device has a very long ISR.

**Textbook References:**

*   **Hamacher, Vranesic, Zaky (5/e):** Section 7.3.1: Multiple Interrupts (discusses daisy chaining).
*   **Mano (Computer System Architecture, 2007):** Section 8.3: Interrupt-Initiated I/O (often illustrates daisy chaining with interrupt controllers).
*   **Stallings (9/e):** Chapter 11: Input/Output (details various interrupt handling techniques).

---

### 4. Direct Memory Access (DMA)

Direct Memory Access (DMA) is a feature that allows certain hardware subsystems to access main system memory (RAM) independently of the central processing unit (CPU). This significantly improves performance for data-intensive operations by offloading the CPU.

**Key Concepts:**

*   **DMA Controller:** A specialized hardware component that manages DMA transfers.
*   **Data Transfer:** Moving blocks of data between peripheral devices and memory, or between memory and memory.
*   **Bus Master:** A device that can initiate and control data transfers on the system bus. The DMA controller acts as a bus master during a DMA transfer.

**How DMA Works:**

1.  **CPU Initiates Transfer:** The CPU tells the DMA controller what data to transfer, where to transfer it from/to, and the number of bytes to transfer. It also specifies the direction of the transfer (e.g., device to memory, memory to device).
2.  **DMA Controller Takes Over:** Once initiated, the DMA controller takes control of the system bus (acting as a bus master).
3.  **Data Transfer:** The DMA controller directly transfers data between the peripheral device and memory, or between memory locations, without CPU intervention.
4.  **Bus Arbitration:** The DMA controller requests the bus from the CPU (or bus arbiter) when it needs to perform a transfer. The CPU temporarily relinquishes the bus.
5.  **Completion Signal:** When the DMA transfer is complete, the DMA controller informs the CPU (usually by generating an interrupt).

**Benefits of DMA:**

*   **Increased CPU Availability:** The CPU is free to execute other instructions while DMA transfers are in progress.
*   **Faster Data Transfers:** DMA controllers are optimized for high-speed data transfers, often faster than CPU-mediated transfers.
*   **Reduced CPU Overhead:** Eliminates the need for the CPU to perform byte-by-byte transfers.

**Types of DMA:**

*   **Burst Mode:** The DMA controller transfers the entire block of data without interruption. The CPU is locked out of the bus for the duration of the transfer.
*   **Cycle Stealing Mode:** The DMA controller steals bus cycles from the CPU. It requests the bus for each word or byte transfer. The CPU can continue its execution, but at a slower pace.
*   **Transparent Mode:** The DMA controller transfers data only when the CPU is not using the bus. This is the slowest mode but offers maximum CPU availability.

**DMA Controller Structure (Simplified):**

*   **Registers:**
    *   **Address Register:** Stores the current memory address for the transfer.
    *   **Word Count Register:** Stores the number of words/bytes remaining to be transferred.
    *   **Control Register:** Specifies the transfer mode, direction, and enables the DMA request.
    *   **Status Register:** Indicates the status of the DMA transfer (e.g., busy, complete, error).

**Textbook References:**

*   **Hamacher, Vranesic, Zaky (5/e):** Chapter 7.4: Direct Memory Access (DMA).
*   **Mano (Computer System Architecture, 2007):** Section 8.4: Direct Memory Access.
*   **Patterson & Hennessy (5/e):** Chapter 4: Processor Datapath and Control (discusses I/O and DMA interfaces).
*   **Stallings (9/e):** Chapter 11.4: Direct Memory Access.

---

### Practice Questions and Answers

**1. Multiple Choice Questions:**

   a) Which of the following is NOT a characteristic of vectored interrupts?
      i) Faster interrupt service
      ii) Requires extensive polling by the CPU
      iii) Uses an interrupt vector table
      iv) Device provides a unique identifier

   b) In a daisy chaining scheme for interrupt servicing, which device has the highest priority?
      i) The device furthest from the interrupt controller.
      ii) The device closest to the interrupt controller.
      iii) The device that sends the interrupt request first.
      iv) Priority is determined randomly.

   c) DMA is primarily used to:
      i) Increase CPU workload.
      ii) Allow peripheral devices to access memory directly, freeing the CPU.
      iii) Improve the speed of instruction fetching.
      iv) Handle all I/O operations via software routines.

**Answers:**
   a) ii) Requires extensive polling by the CPU
   b) ii) The device closest to the interrupt controller.
   c) ii) Allow peripheral devices to access memory directly, freeing the CPU.

**2. Short Answer Questions:**

   a) Explain the purpose of saving the CPU's state when an interrupt occurs.
   b) Differentiate between polling and daisy chaining as interrupt servicing schemes.
   c) What is the main advantage of using DMA over programmed I/O?

**Answers:**

   a) **Purpose of saving CPU state:** When an interrupt occurs, the CPU must suspend its current task, execute the Interrupt Service Routine (ISR), and then resume the interrupted task. Saving the CPU's state (Program Counter, status flags, and general-purpose registers) onto the stack ensures that the interrupted program can be restored exactly as it was before the interrupt, allowing for seamless resumption of its execution.

   b) **Polling vs. Daisy Chaining:**
      *   **Polling:** A software method where the CPU, after acknowledging an interrupt, sequentially checks the status of each I/O device to identify the source. It's flexible but slower due to the sequential checking.
      *   **Daisy Chaining:** A hardware method where devices are connected in a chain. The interrupt acknowledge signal propagates through the chain, and the first device in the chain that requested an interrupt responds. This provides hardware-defined priority and is faster than polling.

   c) **DMA vs. Programmed I/O Advantage:** The main advantage of DMA over programmed I/O is that DMA allows peripheral devices to transfer data directly to/from memory without involving the CPU in every data transfer. This significantly reduces the CPU's workload, freeing it up to perform other computations, thus improving overall system performance and efficiency. Programmed I/O requires the CPU to execute instructions for every byte/word transferred.

**3. Conceptual Question:**

   Imagine a system with a keyboard, a disk drive, and a timer. The keyboard generates interrupts for keystrokes, the disk drive for completing read/write operations, and the timer for periodic events.

   a) If the system uses vectored interrupts, what role does the interrupt vector table play?
   b) If the system uses daisy chaining for interrupt priority, and the order is Timer -> Disk -> Keyboard, what happens if the Timer and Keyboard interrupt simultaneously?
   c) Describe a scenario where DMA would be highly beneficial.

**Answers:**

   a) **Role of Interrupt Vector Table:** The interrupt vector table acts as a lookup directory. Each entry in the table contains the memory address of the specific Interrupt Service Routine (ISR) for a particular device or interrupt source. When a vectored interrupt occurs, the interrupting device provides a vector number, which the CPU uses as an index into this table to find the correct ISR address and jump to it, thus enabling efficient and direct handling of the interrupt.

   b) **Daisy Chaining Scenario:** If the Timer and Keyboard interrupt simultaneously, and the priority order is Timer -> Disk -> Keyboard, the Timer, being at the highest priority in the chain, will be serviced first. The interrupt controller will acknowledge the Timer's request, and the Timer will provide its vector number. The interrupt acknowledge signal will not propagate past the Timer. Only after the Timer's ISR is completed and it signals completion to the controller will the interrupt acknowledge signal continue its path. If the Keyboard is still requesting an interrupt, it will then be recognized and serviced.

   c) **Scenario for DMA Benefit:** A scenario where DMA would be highly beneficial is during a large file transfer from a hard disk to main memory. Without DMA, the CPU would have to perform programmed I/O, fetching each sector or block of data from the disk, transferring it to memory, and repeating this process for potentially millions of bytes. This would consume a vast amount of CPU time. With DMA, the CPU initiates the transfer by instructing the DMA controller. The DMA controller then takes over the bus and transfers the entire file block directly from the disk to memory, allowing the CPU to continue executing other programs or tasks concurrently, leading to a significant performance improvement.

---

### Important Points to Remember

*   **Interrupts** are essential for efficient I/O management, allowing the CPU to multitask.
*   **Saving CPU state** (PC, registers) is critical for resuming interrupted programs.
*   **Vectored interrupts** provide a fast way to identify interrupt sources using a **vector table**.
*   **Polling** is a software-based method for identifying interrupt sources, while **daisy chaining** is a hardware-based priority scheme.
*   **DMA** offloads data transfer tasks from the CPU to a dedicated controller, significantly improving performance for high-volume data transfers.
*   The **DMA controller acts as a bus master**, requesting and controlling the system bus during transfers.
*   Understanding the trade-offs between polling, daisy chaining, and DMA is crucial for system design.

---

This study guide provides a comprehensive overview of interrupts and DMA, aligning with the specified learning and course outcomes and drawing upon the provided textbook references.
