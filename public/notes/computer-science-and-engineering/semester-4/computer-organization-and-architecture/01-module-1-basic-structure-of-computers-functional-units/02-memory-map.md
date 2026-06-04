---
title: "Memory map"
subject: "COMPUTER ORGANIZATION AND ARCHITECTURE"
module: "Module 1: Basic Structure of computers :– Functional units "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8b038"
status: "completed"
scrapedAt: "2026-05-20T16:11:07.793Z"
---
# COMPUTER ORGANIZATION AND ARCHITECTURE: Module 1 - Memory Map

## Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Define memory map and its purpose.
*   Explain the organization of memory space.
*   Differentiate between different types of memory (RAM, ROM) and their location in the memory map.
*   Describe how the CPU interacts with the memory map.
*   Understand the concept of memory addressing and address decoding.
*   Identify and resolve memory conflicts.
*   Apply the knowledge of memory mapping to design simple memory systems.

## 1. Introduction to Memory Map

*   **Definition:** A memory map is a diagram or table that shows how memory addresses are assigned to different components or memory modules within a computer system.  It visually represents the organization of the computer's memory space.

*   **Purpose:**
    *   Provides a clear understanding of how memory is allocated.
    *   Facilitates efficient memory management and utilization.
    *   Helps in debugging memory-related issues.
    *   Enables the CPU to access and manipulate data stored in different memory locations.
    *   Essential for operating system development and embedded systems programming.

## 2. Organization of Memory Space

*   **Address Space:** The total range of addresses that the CPU can access is called the address space.  The size of the address space is determined by the number of address lines of the CPU.  For example, a CPU with 32 address lines has an address space of 2<sup>32</sup> bytes (4GB).

*   **Memory Segments:** The address space is often divided into segments, each assigned to a specific purpose.  Typical segments include:
    *   **RAM (Random Access Memory):** Used for storing programs and data that the CPU is currently working with. It is volatile, meaning data is lost when power is turned off.
    *   **ROM (Read-Only Memory):**  Used for storing permanent instructions, such as the BIOS (Basic Input/Output System) in a PC. It is non-volatile, meaning data is retained even when power is turned off.
    *   **Reserved Memory:**  Address ranges reserved for specific hardware components or system functions.
    *   **I/O (Input/Output) Mapped Memory:** Address ranges assigned to I/O devices, allowing the CPU to communicate with them as if they were memory locations. (More common in memory-mapped I/O systems).

*   **Memory Addresses:** Each memory location within the address space is identified by a unique address.  Addresses are typically represented in hexadecimal notation (e.g., 0x0000, 0xFFFF).

*   **Example:** Consider a simple system with a 64KB (65536 bytes) memory space (2<sup>16</sup> bytes).  A possible memory map could be:

    | Address Range     | Memory Type | Purpose                       |
    | ------------------- | ----------- | ----------------------------- |
    | 0x0000 - 0x7FFF   | RAM         | Program and Data Storage     |
    | 0x8000 - 0xBFFF   | ROM         | BIOS and Boot Loader          |
    | 0xC000 - 0xFFFF   | Reserved    | Video Memory, I/O Devices etc. |

## 3. Types of Memory and Their Placement

*   **RAM (Random Access Memory):**
    *   **Placement:** Typically placed at the lower end of the memory map (e.g., 0x0000).  This allows the operating system and frequently accessed programs to be loaded and executed quickly.
    *   **Types:**
        *   **SRAM (Static RAM):**  Faster and more expensive than DRAM. Used for cache memory.
        *   **DRAM (Dynamic RAM):**  Slower and less expensive than SRAM. Used as main system memory. Includes types like DDR4, DDR5.

*   **ROM (Read-Only Memory):**
    *   **Placement:** Often placed at the higher end of the memory map. This ensures that the boot code is always available when the system powers up.
    *   **Types:**
        *   **Mask ROM:** Programmed at the factory, cannot be changed.
        *   **PROM (Programmable ROM):** Can be programmed once by the user.
        *   **EPROM (Erasable PROM):** Can be erased using ultraviolet light and reprogrammed.
        *   **EEPROM (Electrically Erasable PROM):** Can be erased and reprogrammed electrically. Includes Flash memory.

## 4. CPU Interaction with the Memory Map

*   **Address Bus:** The CPU uses the address bus to specify the memory location it wants to access.
*   **Data Bus:** The CPU uses the data bus to transfer data to or from the specified memory location.
*   **Control Bus:** The CPU uses the control bus to signal whether it wants to read from or write to the memory location.  Signals like `Read (RD#)` and `Write (WR#)` are used.
*   **Memory Controller:** A memory controller acts as an interface between the CPU and the memory modules. It decodes the address, generates the necessary control signals, and manages the data transfer.
*   **Process:** The CPU places the desired memory address on the address bus, asserts the read or write control signal, and the memory controller retrieves or stores the data accordingly.

## 5. Memory Addressing and Address Decoding

*   **Memory Addressing:**  The process of selecting a specific memory location within the memory map.

*   **Address Decoding:** The process of translating the CPU's address signals into signals that select a specific memory chip.  Address decoding circuits are essential to ensure that the correct memory chip is enabled for a given address.

*   **Decoding Methods:**
    *   **Linear Decoding (Full Decoding):**  Each address line from the CPU is directly used to decode the memory address. Requires a large number of gates for larger memory spaces. Efficient but expensive for large systems.
    *   **Partial Decoding:** Uses only a subset of the address lines for decoding. Simpler and cheaper but can lead to address aliasing (multiple addresses mapping to the same physical memory location).  Useful in smaller, simpler systems.
    *   **Decoder ICs:**  Integrated circuits (e.g., 74LS138) can be used to decode addresses. These ICs take a binary input (a subset of the address lines) and activate one of their output lines based on the input.

*   **Example (Partial Decoding):** Assume a memory chip with 1KB of memory (2<sup>10</sup> bytes). We need 10 address lines (A0-A9) to address each byte within the chip. Suppose we want to map this chip to the address range 0x1000-0x13FF. We only use higher-order address lines to enable the chip.

    *   A0-A9:  Connected directly to the chip's address lines.
    *   A10-A15: Used for chip selection. If A10 is HIGH and A11-A15 are LOW, then the address will fall into the range 0x1000 - 0x13FF and the chip will be selected.

## 6. Memory Conflicts and Resolution

*   **Memory Conflicts:** Occur when two or more devices or memory modules are assigned the same address range in the memory map. This can lead to unpredictable behavior and system malfunctions.

*   **Causes:**
    *   Incorrect address decoding.
    *   Incorrect memory chip selection.
    *   Design errors in the hardware.

*   **Resolution:**
    *   **Careful Planning:**  Design the memory map carefully to avoid overlapping address ranges.
    *   **Correct Address Decoding:**  Ensure that the address decoding logic is implemented correctly.  Use proper techniques (full or partial decoding) based on system requirements.
    *   **Address Line Verification:**  Double-check the connections of the address lines to the memory chips.
    *   **Debugging Tools:** Use logic analyzers or oscilloscopes to analyze the address and control signals.

## 7. Designing Simple Memory Systems

*   **Steps:**
    1.  **Determine Memory Requirements:**  Calculate the total memory size needed (RAM, ROM).
    2.  **Select Memory Chips:** Choose appropriate memory chips (RAM, ROM) based on capacity, speed, and cost.
    3.  **Create a Memory Map:**  Allocate address ranges to different memory components.
    4.  **Implement Address Decoding:**  Design the address decoding logic to select the appropriate memory chip for each address range.
    5.  **Connect Memory Chips:**  Connect the address, data, and control lines from the CPU to the memory chips and the address decoding logic.
    6.  **Test the System:**  Thoroughly test the memory system to ensure that it functions correctly.

*   **Considerations:**
    *   **Address Bus Width:**  Match the address bus width of the CPU to the address requirements of the memory chips.
    *   **Data Bus Width:**  Match the data bus width of the CPU to the data bus width of the memory chips.  If they don't match, memory interleaving or demultiplexing techniques may be needed.
    *   **Timing Considerations:**  Ensure that the memory chips meet the timing requirements of the CPU.

## 8. Important Points to Remember

*   The memory map is a fundamental concept in computer architecture.
*   Understanding memory maps is essential for designing and debugging embedded systems.
*   Address decoding is crucial for selecting the correct memory chip.
*   Memory conflicts can lead to system malfunctions and must be avoided.
*   The proper placement of different types of memory (RAM, ROM) is important for performance.

## Practice Questions and Exercises:

**Q1.** What is a memory map and why is it important?

**Answer:** A memory map is a diagram or table showing how memory addresses are assigned to different components within a computer system. It's important for understanding memory allocation, debugging memory issues, and enabling the CPU to access data.

**Q2.** Explain the difference between RAM and ROM, and their typical placement in the memory map.

**Answer:** RAM (Random Access Memory) is volatile memory used for storing programs and data that the CPU is actively using. It is typically placed at the lower end of the memory map. ROM (Read-Only Memory) is non-volatile memory used for storing permanent instructions like the BIOS. It is typically placed at the higher end of the memory map.

**Q3.** A CPU has a 20-bit address bus. What is the size of its address space?

**Answer:** The address space is 2<sup>20</sup> bytes = 1,048,576 bytes = 1MB.

**Q4.** What is address decoding, and why is it necessary?

**Answer:** Address decoding is the process of translating the CPU's address signals into signals that select a specific memory chip. It's necessary to ensure that the correct memory chip is enabled for a given address, preventing memory conflicts and allowing the CPU to access the intended memory location.

**Q5.** Describe the difference between linear (full) decoding and partial decoding.

**Answer:** Linear (full) decoding uses all the address lines to decode the address, providing a unique address for each memory location. Partial decoding uses only a subset of address lines, which is simpler and cheaper but can lead to address aliasing (multiple addresses mapping to the same physical memory location).

**Q6.** What are memory conflicts and how can they be resolved?

**Answer:** Memory conflicts occur when two or more devices or memory modules are assigned the same address range. They can be resolved through careful memory map planning, correct address decoding implementation, address line verification, and the use of debugging tools.

**Q7.** Design a memory map for a system with 64KB of RAM and 32KB of ROM. Suggest suitable address ranges for each.

**Answer:**

| Address Range     | Memory Type |
| ------------------- | ----------- |
| 0x0000 - 0xFFFF   | RAM         |    (64KB)
| 0x10000 - 0x17FFF | ROM         | (32KB)

**Q8:** Explain how the CPU interacts with memory using the address bus, data bus, and control bus.

**Answer:** The CPU uses the address bus to specify the memory location it wants to access. The data bus is used to transfer data to or from the specified memory location. The control bus signals whether the CPU wants to read from or write to the memory location (using signals like `RD#` and `WR#`).  A memory controller handles the interaction between the CPU and memory chips.
