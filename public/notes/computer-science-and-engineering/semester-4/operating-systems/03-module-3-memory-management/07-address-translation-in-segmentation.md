---
title: "Address translation in segmentation"
subject: "OPERATING SYSTEMS"
module: "Module 3: Memory management  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afbb"
status: "completed"
scrapedAt: "2026-05-20T16:14:17.589Z"
---
# OPERATING SYSTEMS: Module 3 - Memory Management: Address Translation in Segmentation

## Introduction

This module explores address translation in segmentation, a crucial technique in memory management. Segmentation allows a program's logical address space to be divided into multiple segments, each with its own base address and limit. This organization allows for logical structuring of programs and data, making memory management more efficient and robust.

## Learning Outcomes

By the end of this topic, you should be able to:

1.  **Define** the concept of segmentation in memory management.
2.  **Explain** the advantages and disadvantages of segmentation.
3.  **Describe** the structure of a logical address in a segmented system.
4.  **Illustrate** the address translation process in segmentation with diagrams and examples.
5.  **Differentiate** between segmentation and paging.
6.  **Identify** and explain the role of the Segment Table in address translation.
7.  **Calculate** physical addresses given a logical address and segment table.
8.  **Explain** the concept of memory protection in segmentation.

## 1. Defining Segmentation

*   **Definition:** Segmentation is a memory management technique where the logical address space of a process is divided into variable-sized segments. Each segment represents a logical unit of the program, such as code, data, stack, or heap.  These segments need not be of the same size.

*   **Key Concept: Logical Units:** Unlike paging, which divides memory into fixed-size pages, segmentation focuses on dividing memory based on the logical structure of the program.  This can provide better organization and protection.

*   **Example:** A C program might be divided into segments for `code`, `global variables`, `stack`, and `heap`.

## 2. Advantages and Disadvantages of Segmentation

**Advantages:**

*   **Logical Organization:** Programs can be organized into logical units, making code management and debugging easier.
*   **Memory Protection:** Each segment can have its own protection attributes (e.g., read-only, execute-only), preventing unauthorized access.
*   **Sharing:** Segments can be shared between processes, reducing memory consumption (e.g., shared libraries).
*   **Dynamic Memory Allocation:**  Segments can grow or shrink dynamically as needed (although this introduces complexities regarding external fragmentation).

**Disadvantages:**

*   **External Fragmentation:**  As segments are created and destroyed, gaps can appear in memory, leading to external fragmentation, where enough total memory exists, but it's not contiguous to satisfy a new segment allocation request.
*   **Complex Memory Management:**  Managing variable-sized segments can be more complex than managing fixed-size pages.
*   **Overhead:**  Maintaining the segment table adds overhead to the system.

## 3. Structure of a Logical Address in Segmentation

*   **Logical Address Format:** In segmentation, a logical address consists of two parts:
    *   **Segment Number (s):** Identifies the specific segment to which the address refers.
    *   **Offset (d):** Specifies the location of the desired byte within that segment.

*   **Visual Representation:**

    ```
    +-------+-------+
    |   s   |   d   |
    +-------+-------+
    ```

    *   `s`: Segment Number (used as an index into the Segment Table).
    *   `d`: Offset within the segment.

*   **Example:** If a logical address is represented as `<2, 150>`, it means: Segment 2, Offset 150.

## 4. Address Translation Process in Segmentation

*   **Overview:** The CPU generates a logical address.  The memory management unit (MMU) translates this logical address into a physical address.

*   **Steps:**

    1.  **Extract Segment Number (s) and Offset (d):** The CPU provides the logical address `<s, d>`.
    2.  **Use Segment Number as Index:** The segment number 's' is used as an index into the Segment Table.
    3.  **Retrieve Segment Table Entry:** The Segment Table entry at index 's' contains the *base address* and *limit* of the corresponding segment.
    4.  **Check Limit:**  The offset 'd' is checked to ensure that it is within the bounds of the segment. Specifically, `d < limit`. If `d >= limit`, a *segmentation fault* occurs (indicating an attempt to access memory outside the segment's boundaries).
    5.  **Calculate Physical Address:** If the offset is valid, the physical address is calculated by adding the *base address* from the Segment Table entry to the *offset*: `Physical Address = Base + Offset`.
    6.  **Access Memory:** The physical address is then used to access the desired memory location.

*   **Diagram:**

    ```
    Logical Address: <Segment Number (s), Offset (d)>

    +---------+
    | CPU     |----->  <s, d>
    +---------+          |
                         V
                         +-----------------+
                         |  Memory         |
                         |  Management Unit|
                         +-----------------+
                         |                   |
                         | Segment Table     |
                         |  s:  [Base, Limit]|--->  Base, Limit
                         |                   |
                         +-----------------+
                         |                   |
                         | d < Limit ?     |
                         |                   |
                         +-----------------+
                         |        YES        |
                         |  Physical Address|
                         |  = Base + Offset  |
                         +-----------------+
                         |                   |
                         V
    Physical Address -----> Memory
    ```

*   **Example:**

    Suppose the Segment Table is:

    | Segment | Base Address | Limit |
    |---------|--------------|-------|
    | 0       | 1000         | 500   |
    | 1       | 2500         | 1000  |
    | 2       | 4000         | 400   |

    If the logical address is `<1, 200>`, then:

    1.  `s = 1`, `d = 200`
    2.  Segment 1's entry in the Segment Table is `Base = 2500`, `Limit = 1000`.
    3.  Check: `200 < 1000` (True).
    4.  Physical Address = `2500 + 200 = 2700`.

    If the logical address is `<0, 600>`, then:

    1.  `s = 0`, `d = 600`
    2.  Segment 0's entry in the Segment Table is `Base = 1000`, `Limit = 500`.
    3.  Check: `600 < 500` (False).  A segmentation fault would occur.

## 5. Segmentation vs. Paging

| Feature         | Segmentation                                    | Paging                                        |
|-----------------|------------------------------------------------|------------------------------------------------|
| Division        | Logical units (segments of variable size)       | Fixed-size pages                                |
| Size            | Variable                                        | Fixed                                           |
| Fragmentation   | External                                        | Internal                                        |
| User View       | Visible to the user/programmer                 | Invisible to the user/programmer                 |
| Complexity      | More complex memory management                  | Simpler memory management                        |
| Sharing         | Easier to share logically related units         | Sharing is at the page level                   |
| Protection      | Based on segments                               | Based on pages                                 |

## 6. The Segment Table

*   **Role:** The Segment Table is a data structure that maps logical addresses to physical addresses. Each entry in the Segment Table corresponds to one segment in the process's address space.

*   **Contents of a Segment Table Entry:**
    *   **Base Address:** The starting physical address of the segment in memory.
    *   **Limit (or Length):** The size of the segment.
    *   **Protection Bits:** Indicate the access rights for the segment (e.g., read, write, execute).
    *   **Valid Bit:** Indicates whether the segment is currently loaded into memory.  This can be used for virtual memory implementations.

*   **Storage:** The Segment Table is typically stored in main memory.  To speed up address translation, a hardware cache called the **Translation Lookaside Buffer (TLB)** is often used to store frequently accessed Segment Table entries.

## 7. Calculating Physical Addresses: Practice Exercises

**Exercise 1:**

Given the following Segment Table:

| Segment | Base Address | Limit |
|---------|--------------|-------|
| 0       | 2000         | 400   |
| 1       | 5000         | 1500  |
| 2       | 8000         | 600   |

Calculate the physical address for the following logical addresses, or indicate if a segmentation fault occurs:

a) `<0, 300>`
b) `<1, 1000>`
c) `<2, 700>`
d) `<1, 2000>`
e) `<0, 500>`

**Exercise 2:**

A system uses a segmented memory architecture. A logical address is 16 bits, with 4 bits for the segment number and 12 bits for the offset.  How many segments can the process have?  What is the maximum size of each segment (in bytes)?

**Answers:**

**Exercise 1:**

a) Physical Address = 2000 + 300 = 2300
b) Physical Address = 5000 + 1000 = 6000
c) Segmentation Fault (700 > 600)
d) Segmentation Fault (2000 > 1500)
e) Segmentation Fault (500 > 400)

**Exercise 2:**

*   Number of Segments: 2<sup>4</sup> = 16
*   Maximum Segment Size: 2<sup>12</sup> bytes = 4096 bytes = 4KB

## 8. Memory Protection in Segmentation

*   **Protection Bits:** Each segment table entry includes protection bits that specify the access rights for that segment.

*   **Types of Protection:**
    *   **Read-Only:**  The segment can only be read; writes are prohibited.
    *   **Execute-Only:** The segment can only be executed; reads and writes are prohibited (useful for code segments).
    *   **Read-Write:** The segment can be both read and written.
    *   **Valid/Invalid:** Indicates whether the segment is currently in memory or not. This is used for virtual memory.

*   **Mechanism:** When the CPU attempts to access memory, the MMU checks the protection bits for the corresponding segment. If the requested access violates the protection rules, a protection fault (or segmentation fault) occurs, and the operating system handles the exception (e.g., by terminating the process).

*   **Example:** If a segment is marked as "Read-Only", any attempt to write to that segment will result in a protection fault.

## Important Points to Remember

*   Segmentation is a memory management technique that divides the logical address space into variable-sized segments.
*   It offers advantages like logical organization and memory protection but suffers from external fragmentation.
*   The Segment Table is crucial for address translation.
*   The logical address is composed of a segment number and an offset.
*   The physical address is calculated by adding the base address to the offset (after checking that the offset is within the segment limit).
*   Protection bits in the segment table ensure memory protection.
*   Segmentation is different from paging, which uses fixed-size pages.

## Practice Questions

1.  Explain how a segmentation fault occurs.
2.  What are the advantages of using segmentation over a monolithic memory management scheme?
3.  How does the operating system handle external fragmentation in a segmented memory system?
4.  Describe a scenario where memory sharing using segmentation can be beneficial.
5.  Why is a TLB beneficial in a segmented memory management system? How does it work in conjunction with the Segment Table?
6. A program has a segment table with the following entries:

    | Segment | Base | Limit | Protection |
    |---|---|---|---|
    | 0 | 0x1000 | 0x200 | RW |
    | 1 | 0x3000 | 0x100 | R |
    | 2 | 0x5000 | 0x50 | RX |

    For each of the following logical addresses, state whether the address is valid. If it is valid, give the corresponding physical address. If it is invalid, state whether the error is due to segmentation fault or protection violation.

    a) 0:0x100
    b) 1:0x50
    c) 2:0x60
    d) 0:0x300

## Additional Resources

*   Operating System Concepts by Abraham Silberschatz, Peter Baer Galvin, and Greg Gagne
*   Modern Operating Systems by Andrew S. Tanenbaum

These notes provide a comprehensive overview of address translation in segmentation. Understanding these concepts is essential for anyone working with operating systems and memory management. Remember to practice with examples to solidify your understanding.
