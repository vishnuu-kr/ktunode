---
title: "Dynamic (Hardware-based) Relocation"
subject: "OPERATING SYSTEMS"
module: "Module 3: Memory management  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afb8"
status: "completed"
scrapedAt: "2026-05-20T16:14:15.403Z"
---
# OPERATING SYSTEMS - Module 3: Memory Management - Dynamic (Hardware-based) Relocation

## Learning Outcomes

Upon completion of this topic, you should be able to:

*   Understand the need for dynamic relocation.
*   Explain how dynamic relocation works, including the roles of base and limit registers.
*   Describe the advantages and disadvantages of dynamic relocation.
*   Differentiate between logical and physical addresses in the context of dynamic relocation.
*   Apply dynamic relocation to solve basic memory allocation problems.

## 1. Introduction: The Need for Dynamic Relocation

*   **What is Relocation?**  Relocation is the process of adjusting a program's address references (or addresses within a program) to reflect its actual location in memory.  This is crucial because a program might be loaded into different memory locations at different times.

*   **Static Relocation (Brief mention):** Static relocation happens *before* a program is executed, typically at compile or load time. It permanently modifies the program code.  If the program is loaded at a different location than originally intended, it won't work correctly.

*   **Limitations of Static Relocation:**
    *   Requires knowing the exact memory location *before* execution.
    *   Inflexible – the program can only run at that specific location.
    *   Doesn't support dynamic memory allocation or program sharing.
    *   Doesn't handle swapping well because if the program has been relocated to a new memory address during a swap, the addresses are now invalid.

*   **The Need for Dynamic Relocation:** Dynamic relocation addresses the limitations of static relocation by performing relocation *during* program execution.  This allows for:
    *   Flexibility in memory allocation.
    *   Program sharing (different processes can run the same program code simultaneously).
    *   Efficient memory utilization.
    *   Support for virtual memory and swapping.
    *   Protection: Prevents a process from accessing memory outside its allocated region.

*   **Key Idea:** Dynamic relocation allows the operating system to load a program into any available location in memory without modifying the program's code.

## 2. Dynamic Relocation: How it Works

Dynamic relocation relies on hardware support, specifically **base** and **limit** (or bound) registers.

*   **Base Register (Relocation Register):** Holds the starting physical address of a process's allocated memory region.  This is the *base* from which the program's logical addresses are offset.

*   **Limit Register (Bound Register):**  Holds the size (or length) of the process's allocated memory region. It defines the upper bound of valid memory addresses for that process.  Also referred to as a bounds register in some resources.

*   **Logical Address (Virtual Address):** The address referenced by the program itself.  The program assumes it starts at address 0.

*   **Physical Address:** The actual address in main memory.

*   **Address Translation Process:**
    1.  The CPU generates a logical address.
    2.  The hardware adds the logical address to the contents of the base register.
    3.  The resulting address is the physical address.
    4.  The hardware compares the logical address to the limit register.  If the logical address is greater than or equal to the limit register, an *addressing error* (memory protection fault) occurs, and the OS is notified.

*   **Formula:**

    `Physical Address = Base Register + Logical Address`

    `0 <= Logical Address < Limit Register` (Address translation only proceeds if this condition is met.)

*   **Example:**

    *   Base Register = 2000
    *   Limit Register = 1000
    *   Logical Address = 500
    *   Physical Address = 2000 + 500 = 2500
    *   Since 500 < 1000, the access is valid.

    *   Base Register = 2000
    *   Limit Register = 1000
    *   Logical Address = 1200
    *   Physical Address = 2000 + 1200 = 3200
    *   Since 1200 >= 1000, an addressing error occurs!

## 3. Advantages and Disadvantages of Dynamic Relocation

*   **Advantages:**
    *   **Flexibility:** Programs can be loaded into any available memory location.
    *   **Memory Utilization:**  Reduces external fragmentation (though doesn't eliminate it entirely; contiguous allocation still has problems).
    *   **Program Sharing:** Multiple processes can share the same code by having their base registers point to the same physical memory location (if the code is re-entrant or read-only).
    *   **Protection:**  The limit register enforces memory boundaries, preventing a process from accessing memory belonging to other processes or the OS.
    *   **Swapping:** Allows programs to be swapped in and out of memory without requiring modifications to the program's code. The base register is simply updated when the program is swapped back in.

*   **Disadvantages:**
    *   **Hardware Overhead:** Requires base and limit registers, which adds to the cost and complexity of the hardware.
    *   **Address Translation Overhead:**  Address translation (adding the base register value) is performed on *every* memory access, which can slightly slow down execution. However, modern hardware does this very efficiently.
    *   **Contiguous Allocation Requirement:** Still relies on contiguous allocation, which can lead to external fragmentation.  While dynamic relocation improves memory utilization, it doesn't solve the fundamental problem of finding a large enough contiguous block.
    *   **Fixed Memory Allocation:** Each process is allocated a fixed amount of memory during its execution.  There is no ability to grow or shrink the memory allocated to the process.

## 4. Logical vs. Physical Addresses

It's crucial to understand the difference between logical and physical addresses:

| Feature          | Logical Address (Virtual Address)                               | Physical Address                               |
| ---------------- | ------------------------------------------------------------ | --------------------------------------------- |
| **What it is** | The address used by the program itself.  It's relative to the program's starting point (usually assumed to be 0). | The actual address in main memory.        |
| **Generated by** | CPU                                                              | Address Translation Hardware                |
| **Uniqueness**     | Can be the same for different processes.                        | Must be unique across all processes.          |
| **Visibility**    | Seen by the programmer.                                       | Hidden from the programmer.                   |
| **Independence** | Independent of the physical memory layout.                    | Dependent on the actual memory configuration. |

## 5. Applying Dynamic Relocation: Examples & Problems

Let's work through some examples to solidify your understanding:

**Example 1: Valid Address Access**

A process has the following parameters:

*   Base Register: 10000
*   Limit Register: 5000
*   Logical Address: 2000

1.  **Calculate the Physical Address:**  Physical Address = Base + Logical Address = 10000 + 2000 = 12000
2.  **Check Address Validity:** Is Logical Address < Limit Register?  2000 < 5000? Yes.
3.  **Conclusion:** The address access is valid.  The process will access memory location 12000.

**Example 2: Invalid Address Access (Protection Fault)**

A process has the following parameters:

*   Base Register: 5000
*   Limit Register: 2000
*   Logical Address: 2500

1.  **Calculate the Physical Address:** Physical Address = Base + Logical Address = 5000 + 2500 = 7500
2.  **Check Address Validity:** Is Logical Address < Limit Register? 2500 < 2000? No.
3.  **Conclusion:** The address access is *invalid*. A memory protection fault will occur. The OS will intervene, likely terminating the process or taking other appropriate action.

**Practice Questions/Exercises:**

1.  A process has a base register value of 8000 and a limit register value of 4000. What physical address will be generated if the process attempts to access logical address 3000? Is this a valid access?

    *   **Answer:** Physical Address = 8000 + 3000 = 11000.  Valid? 3000 < 4000? Yes. This is a valid access.

2.  A process has a base register value of 15000 and a limit register value of 1000. What physical address will be generated if the process attempts to access logical address 1200? Is this a valid access?

    *   **Answer:** Physical Address = 15000 + 1200 = 16200. Valid? 1200 < 1000? No. This is an invalid access. A memory protection fault will occur.

3.  Explain how dynamic relocation provides memory protection.

    *   **Answer:** Dynamic relocation uses the limit register to define the valid range of logical addresses that a process can access. The hardware compares the logical address to the limit register before translating it to a physical address. If the logical address is outside the allowed range, a protection fault occurs, preventing the process from accessing unauthorized memory locations.

4.  What are the advantages of using dynamic relocation over static relocation?

    *   **Answer:**  Dynamic relocation provides flexibility in memory allocation, allows for program sharing, improves memory utilization (although it still uses contiguous allocation), and supports swapping. Static relocation requires knowing the exact memory location before execution, making it inflexible and unable to support these features.

## 6. Important Points to Remember

*   Dynamic relocation happens *during* program execution.
*   Base register stores the *starting* physical address of a process's memory.
*   Limit register stores the *size* of a process's allocated memory.
*   Physical Address = Base Register + Logical Address
*   The hardware is responsible for address translation and boundary checking.
*   Dynamic relocation provides flexibility, memory protection, and supports program sharing and swapping.
*   It still relies on contiguous memory allocation and has some hardware and performance overhead.
*   Dynamic relocation requires hardware support in the form of base and bound registers.

## 7. Further Exploration

*   Research the different memory allocation strategies (first fit, best fit, worst fit) and how they interact with dynamic relocation.
*   Explore the concept of segmentation and paging, which are more advanced memory management techniques that build upon the concepts of dynamic relocation.
*   Consider how virtual memory systems use page tables and Translation Lookaside Buffers (TLBs) to further optimize address translation.
