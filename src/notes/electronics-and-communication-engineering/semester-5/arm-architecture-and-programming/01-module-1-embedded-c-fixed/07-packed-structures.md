---
title: "packed structures"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 1: Embedded C: Fixed"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feade"
status: "completed"
scrapedAt: "2026-05-23T17:53:14.031Z"
---
# ARM Architecture and Programming: Module 1: Embedded C - Packed Structures

This module delves into fundamental C concepts crucial for embedded systems development on ARM Cortex-M microcontrollers, with a specific focus on the efficient use of memory through packed structures.

## Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the concept of data alignment and its implications in embedded systems.
*   Explain why and when to use packed structures in Embedded C.
*   Declare and utilize packed structures in C code.
*   Recognize the potential trade-offs and performance implications of using packed structures.
*   Apply the knowledge of packed structures to optimize memory usage in embedded applications.

## 1. Introduction to Data Alignment in Embedded Systems

Embedded systems, especially those running on ARM Cortex-M processors, often have specific requirements regarding how data is laid out in memory. This is known as **data alignment**.

### 1.1 What is Data Alignment?

Data alignment refers to the practice of organizing data in memory such that its starting address is a multiple of its size or a power of two. This is done to improve memory access efficiency and sometimes to satisfy hardware requirements.

*   **Example:** A 4-byte integer (`int`) might ideally be stored at an address divisible by 4 (e.g., 0x00001000, 0x00001004, 0x00001008). A 2-byte short integer (`short`) might ideally be stored at an address divisible by 2.

### 1.2 Why is Data Alignment Important?

*   **Performance:** Processors, including ARM Cortex-M, are designed to access data most efficiently when it is properly aligned. Unaligned accesses can lead to:
    *   **Multiple Memory Cycles:** The processor might need to perform two or more memory accesses to fetch a single unaligned piece of data.
    *   **Exception Handling:** In some cases, unaligned accesses can trigger hardware exceptions (like a bus fault), which significantly degrade performance and require specific handling.
*   **Hardware Requirements:** Some hardware interfaces or specific memory regions might strictly enforce alignment rules.

### 1.3 Default Alignment Behavior

By default, C compilers for embedded systems typically align data members within structures to their natural sizes.

*   A `char` (1 byte) will be aligned to a 1-byte boundary.
*   A `short` (2 bytes) will be aligned to a 2-byte boundary.
*   An `int` (typically 4 bytes on ARM Cortex-M) will be aligned to a 4-byte boundary.
*   A `long long` (typically 8 bytes) will be aligned to an 8-byte boundary.

This default alignment often leads to **padding** within structures.

## 2. Structure Padding

**Padding** is the insertion of unused bytes between structure members or at the end of a structure to ensure that each member is aligned to its natural boundary. This is done by the compiler to optimize memory access.

### 2.1 How Padding Works

Consider a structure with members of different sizes:

```c
struct MyData {
    char a;       // 1 byte
    int b;        // 4 bytes
    char c;       // 1 byte
};
```

Without padding, the memory layout might appear as:

| Address    | Content |
| :--------- | :------ |
| 0x1000     | `a`     |
| 0x1001     | `b` (byte 0) |
| 0x1002     | `b` (byte 1) |
| 0x1003     | `b` (byte 2) |
| 0x1004     | `b` (byte 3) |
| 0x1005     | `c`     |

However, the `int b` member requires 4-byte alignment. If `a` is at address 0x1000 (which is not a multiple of 4), the compiler will insert padding before `b`.

The compiler will lay out `MyData` like this (assuming `char` is 1 byte and `int` is 4 bytes, and aiming for 4-byte alignment for `int`):

| Address    | Member | Size | Notes                 |
| :--------- | :----- | :--- | :-------------------- |
| 0x1000     | `a`    | 1    | `char a`              |
| 0x1001     | PAD    | 3    | Padding to align `b` |
| 0x1004     | `b`    | 4    | `int b` (aligned)     |
| 0x1008     | `c`    | 1    | `char c`              |
| 0x1009     | PAD    | 3    | Padding for structure |

**Total size of `struct MyData`:** 1 (a) + 3 (padding) + 4 (b) + 1 (c) + 3 (padding) = 12 bytes.

*   **CO1:** Understands how data is represented in memory and how compiler choices affect it.
*   **CO2:** Visualizes the programmer's view of memory layout for data structures.

### 2.2 Reasons for Padding:

*   **Performance Optimization:** Ensures that all members are accessed efficiently.
*   **Hardware Compatibility:** Some hardware might expect data at specific alignment boundaries.

## 3. The Need for Packed Structures

While padding is often beneficial for performance, it can lead to increased memory usage. In resource-constrained embedded systems, memory is a critical factor. This is where **packed structures** come into play.

### 3.1 When to Use Packed Structures?

*   **Memory Optimization:** When you need to minimize the memory footprint of your data structures. This is common when:
    *   Storing large arrays of structures.
    *   Interfacing with external hardware or communication protocols that define specific data layouts.
    *   Working with limited RAM.
*   **Interfacing with External Data:** When you receive data from external sources (e.g., sensor readings, network packets, peripheral registers) that are defined without padding.

### 3.2 What are Packed Structures?

A **packed structure** is a structure where the compiler is instructed to minimize or eliminate padding between members. All members are placed as close together as possible, typically with no padding between them.

*   **CO1:** Learns a C feature for controlling data layout.
*   **CO3:** Can choose when to deviate from default behavior for efficiency.

## 4. Implementing Packed Structures in Embedded C

The syntax for creating packed structures can vary slightly between compilers, but the concept is the same. For ARM compilers (like those used with Keil MDK, GCC for ARM), the common approach involves compiler-specific attributes.

### 4.1 Compiler Attributes for Packing

*   **GCC/Clang:** Uses `__attribute__((packed))`.
*   **Keil (ARMCC):** Uses `#pragma pack(1)` or `__packed`.

We will focus on the GCC/Clang `__attribute__((packed))` syntax as it's widely used.

### 4.2 Syntax and Examples

**Using `__attribute__((packed))`:**

You can apply the attribute to individual structure members or to the entire structure. Applying it to the entire structure is more common for achieving overall packing.

**Example 1: Packing an entire structure**

```c
#include <stdio.h>

// Define a packed structure
struct PackedSensorData {
    char id;         // 1 byte
    int timestamp;   // 4 bytes
    char status;     // 1 byte
} __attribute__((packed));

// Define a normal structure for comparison
struct NormalSensorData {
    char id;         // 1 byte
    int timestamp;   // 4 bytes
    char status;     // 1 byte
};

int main() {
    printf("Size of PackedSensorData: %zu bytes\n", sizeof(struct PackedSensorData));
    printf("Size of NormalSensorData: %zu bytes\n", sizeof(struct NormalSensorData));

    // Memory layout of PackedSensorData
    // id:     1 byte
    // timestamp: 4 bytes (no padding before)
    // status: 1 byte (no padding before)
    // Total: 1 + 4 + 1 = 6 bytes

    // Memory layout of NormalSensorData (assuming 4-byte alignment for int)
    // id:      1 byte
    // PAD:     3 bytes (padding)
    // timestamp: 4 bytes
    // status:  1 byte
    // PAD:     3 bytes (padding for alignment of next struct if in array)
    // Total: 1 + 3 + 4 + 1 + 3 = 12 bytes

    return 0;
}
```

**Output (typical):**

```
Size of PackedSensorData: 6 bytes
Size of NormalSensorData: 12 bytes
```

*   **CO1:** Demonstrates how to implement packed structures using attributes.
*   **CO2:** Highlights the difference in memory layout and size.

**Example 2: Packing specific members (less common, but possible with pragmas)**

While `__attribute__((packed))` applies to the whole structure, some compilers allow packing of individual members using pragmas or specific directives, though this is more verbose. The primary benefit of packing is usually achieved by packing the entire structure.

Consider the use of `#pragma pack` (common in Keil/ARMCC and some other compilers):

```c
#include <stdio.h>

// Set packing alignment to 1 byte (no padding)
#pragma pack(1)

struct PackedSensorDataWithPragma {
    char id;         // 1 byte
    int timestamp;   // 4 bytes
    char status;     // 1 byte
};

// Restore default packing alignment (often 4 or 8 bytes)
#pragma pack()

struct NormalSensorDataWithPragma {
    char id;         // 1 byte
    int timestamp;   // 4 bytes
    char status;     // 1 byte
};

int main() {
    printf("Size of PackedSensorDataWithPragma: %zu bytes\n", sizeof(struct PackedSensorDataWithPragma));
    printf("Size of NormalSensorDataWithPragma: %zu bytes\n", sizeof(struct NormalSensorDataWithPragma));
    return 0;
}
```

**Output (typical):**

```
Size of PackedSensorDataWithPragma: 6 bytes
Size of NormalSensorDataWithPragma: 12 bytes
```

*   **CO1:** Introduces another method for controlling packing.
*   **CO3:** Shows how pragmas can be used to temporarily change compiler behavior.

### 4.3 Accessing Members of Packed Structures

You access members of packed structures just like regular structures. The difference is in the underlying memory layout.

```c
struct PackedSensorData sensor_reading;

sensor_reading.id = 0x01;
sensor_reading.timestamp = 1678886400; // Example timestamp
sensor_reading.status = 0x00;
```

*   **CO1:** Reinforces that the syntax for accessing members remains the same.

## 5. Trade-offs and Performance Implications of Packed Structures

While packed structures save memory, they can introduce performance penalties due to unaligned memory accesses.

### 5.1 Performance Costs

*   **Unaligned Access Penalty:** Accessing `sensor_reading.timestamp` in the `PackedSensorData` example might require the processor to perform multiple memory reads and bitwise operations to assemble the 4-byte integer from its unaligned position. This can be significantly slower than accessing a naturally aligned member.
*   **Instruction Set:** The impact of unaligned access depends on the specific ARM Cortex-M processor and its instruction set architecture (ISA). Some processors have hardware support for unaligned accesses, mitigating the penalty, while others might still incur significant overhead or trigger exceptions.
    *   **ARMv7-M Architecture (e.g., Cortex-M3, M4):** Generally supports unaligned access, but there's still a performance penalty compared to aligned access.
    *   **ARMv6-M Architecture (e.g., Cortex-M0, M0+):** Supports unaligned access, but the penalty is often more pronounced.
*   **Register Access:** When members of a packed structure are loaded into CPU registers, the alignment issue might be resolved. However, if the structure itself is passed by reference or if you're operating directly on memory, the penalty can be observed.

### 5.2 When is the Penalty Acceptable?

The performance penalty is often acceptable when:

*   **Memory is paramount:** In extremely memory-constrained environments, the savings might outweigh the performance hit.
*   **Access frequency is low:** If a packed structure is accessed infrequently, the performance impact might be negligible.
*   **Interfacing with hardware/protocols:** When the data format is dictated by external factors, you must adhere to it, regardless of performance.

### 5.3 Alternatives and Considerations

*   **Reordering Structure Members:** Sometimes, simply reordering structure members can reduce padding without resorting to packing the entire structure. This is a good first step for memory optimization if packing is not strictly necessary.
*   **Compiler-Specific Options:** Be aware of your compiler's options for controlling alignment and packing.
*   **Benchmarking:** If performance is critical, benchmark your code with and without packed structures to measure the actual impact.

*   **CO1:** Evaluates the pros and cons of using packed structures.
*   **CO3:** Makes informed decisions about choosing between packed and unpacked structures based on performance and memory requirements.

## 6. Practical Applications in Embedded Systems

### 6.1 Hardware Register Access

Many microcontrollers expose their peripheral registers as memory-mapped locations. These registers often have specific layouts and no padding. When you define a structure to represent these registers, you'll want it to be packed.

**Example:** Representing a Timer Control Register (simplified)

```c
// Assume TIM2_CR1 is at memory address 0x40000000
typedef struct {
    unsigned int CEN : 1;  // Counter Enable
    unsigned int URS : 1;  // Update Request Source
    unsigned int ARPE : 1; // Auto-Reload Register Preload Enable
    unsigned int CMS : 2;  // Center-aligned Mode Selection
    unsigned int DIR : 1;  // Direction
    unsigned int OPME : 1; // Output Compare/PWM mode selection
    unsigned int UIFRE : 1; // Update Interrupt Flag Reset Enable
    unsigned int TISO : 1; // Timestamp integer value capture Enable
    unsigned int TI1S : 1; // TI1FP1 Input Capture Enable
    unsigned int MSM : 1;  // Master/Slave Mode
    unsigned int CKD : 2;  // Clock Division
    unsigned int : 2;      // Reserved/Unused bits
    unsigned int : 10;     // Reserved/Unused bits
} TIM2_CR1_TypeDef;

// To ensure direct mapping to hardware registers, pack the structure
typedef struct {
    unsigned int CEN : 1;
    unsigned int URS : 1;
    unsigned int ARPE : 1;
    unsigned int CMS : 2;
    unsigned int DIR : 1;
    unsigned int OPME : 1;
    unsigned int UIFRE : 1;
    unsigned int TISO : 1;
    unsigned int TI1S : 1;
    unsigned int MSM : 1;
    unsigned int CKD : 2;
    unsigned int : 14; // Combine unused bits for clarity
} __attribute__((packed)) TIM2_CR1_TypeDef_Packed;


// Pointer to the packed register structure
volatile TIM2_CR1_TypeDef_Packed * const TIM2_CR1 = (volatile TIM2_CR1_TypeDef_Packed *)0x40000000;

int main() {
    // Enable the timer
    TIM2_CR1->CEN = 1;
    // Set direction to up-counting
    TIM2_CR1->DIR = 0;

    // This directly writes to the hardware register at 0x40000000
    // The packing ensures that each bitfield maps to the correct bit
    // in the hardware register without compiler-added padding.

    return 0;
}
```

*   **CO1:** Shows a primary use case for packed structures in embedded systems.
*   **CO2:** Connects C programming to the hardware register view.
*   **CO3:** Justifies the use of packed structures for hardware interaction.

### 6.2 Communication Protocols

When implementing communication protocols (e.g., SPI, I2C, UART, custom protocols), the data frames are often defined with a specific byte order and no padding. Packed structures are essential for accurately representing these frames.

**Example:** A simple packet structure for serial communication

```c
struct SerialPacket {
    uint8_t start_byte; // 1 byte
    uint16_t command_id; // 2 bytes
    uint8_t data_length; // 1 byte
    uint8_t data[10];    // 10 bytes
    uint32_t checksum;   // 4 bytes
} __attribute__((packed));
```

In this example, the `__attribute__((packed))` ensures that the `command_id` (2 bytes) and `checksum` (4 bytes) are placed immediately after the preceding member, without any 2-byte or 4-byte padding that a default compiler might insert.

*   **CO1:** Illustrates another practical application for memory optimization and external data representation.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


## 7. Reference Content from Textbooks

*   **"Fundamentals of Embedded Software with the ARM Cortex M3" by Daniel W. Lewis:** This textbook likely covers data structures, memory management, and C language features relevant to embedded systems. Expect discussions on data types, sizes, and how compilers handle them, which lays the groundwork for understanding alignment and padding. Chapter 4, "Embedded C Programming," would be a key area to look for details on C constructs and memory efficiency.
*   **"The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors" by Joseph Yiu:** This reference is invaluable for understanding the processor architecture's impact on software. Yiu's book will delve into memory access mechanisms, alignment requirements for the ARM architecture, and potential performance implications of unaligned accesses. It will explain *why* alignment matters at the hardware level, providing a deeper context for packed structures. Look for chapters on memory system architecture and data access.
*   **"Embedded systems with ARM Cortex M Microcontrollers in Assembly and C" by Yifeng Zhu:** This book often bridges the gap between C and assembly. It might demonstrate how C constructs, like structures, are translated into assembly code and how alignment affects the generated instructions. Examples of direct hardware register access using structures are also probable, where the need for packing becomes evident.

**Key Takeaways from References:**

*   **Lewis:** Focuses on the C programming aspects and best practices for embedded software, including memory efficiency.
*   **Yiu:** Provides the architectural foundation for understanding memory access and alignment penalties on ARM processors.
*   **Zhu:** Offers practical examples and may show the low-level implications of C constructs like packed structures.

## 8. Practice Questions and Exercises

**Question 1:**
Explain the concept of data alignment and why it is important in embedded systems programming, particularly for ARM Cortex-M microcontrollers.

**Answer:**
Data alignment refers to arranging data in memory at addresses that are multiples of its size. This is crucial for performance because processors are optimized to fetch data efficiently when it's aligned. Unaligned accesses can lead to multiple memory cycles, exception handling, or hardware restrictions, slowing down the program.

**Question 2:**
What is structure padding, and what is its purpose? Provide an example of how padding might occur in a C structure.

**Answer:**
Structure padding is the insertion of unused bytes by the compiler between structure members or at the end of a structure. Its purpose is to ensure that each member is aligned to its natural boundary, improving memory access performance.

*   **Example:**
    ```c
    struct Example {
        char c1;       // 1 byte
        int i;         // 4 bytes
        char c2;       // 1 byte
    };
    ```
    If `c1` is at an address not divisible by 4, the compiler will add padding (3 bytes) before `i` to align it. Then, after `c2`, it might add padding to align the entire structure to a multiple of 4 (or its largest member's alignment).

**Question 3:**
When would you choose to use a packed structure in your Embedded C code? What are the primary advantages?

**Answer:**
You would choose to use a packed structure primarily for memory optimization, especially in resource-constrained embedded systems. Other reasons include interfacing with external hardware or communication protocols that define specific, non-padded data layouts. The primary advantage is reduced memory footprint.

**Question 4:**
Consider the following structure:

```c
struct SensorReading {
    uint8_t sensor_id;
    uint32_t value;
    uint16_t status_code;
};
```

Assuming `uint8_t` is 1 byte, `uint16_t` is 2 bytes, and `uint32_t` is 4 bytes, and the ARM Cortex-M processor aims for 4-byte alignment for `uint32_t`:

a) What would be the approximate size of this structure without packing, and where might padding be inserted?
b) What would be the size of this structure if declared as packed? (Use `__attribute__((packed))` or `#pragma pack(1)`)

**Answer:**
a) Without packing (assuming 4-byte alignment for `uint32_t`):
    *   `sensor_id`: 1 byte
    *   Padding: 3 bytes (to align `value` to a 4-byte boundary)
    *   `value`: 4 bytes
    *   `status_code`: 2 bytes
    *   Padding: 2 bytes (to align the total size to a multiple of 4)
    *   **Total approximate size: 1 + 3 + 4 + 2 + 2 = 12 bytes.**

b) With packing (e.g., `__attribute__((packed))`):
    *   `sensor_id`: 1 byte
    *   `value`: 4 bytes (no padding before)
    *   `status_code`: 2 bytes (no padding before)
    *   **Total size: 1 + 4 + 2 = 7 bytes.**

**Question 5:**
What are the potential performance implications of using packed structures?

**Answer:**
The potential performance implication of using packed structures is the overhead associated with unaligned memory accesses. When members of a packed structure are not aligned to their natural boundaries, the processor may need to perform multiple memory operations or use special instructions to fetch or store the data, which can be slower than accessing naturally aligned data.

## 9. Important Points to Remember

*   **Alignment:** Processors prefer data to be at addresses that are multiples of its size.
*   **Padding:** Compilers insert padding bytes in structures to ensure alignment and improve access speed.
*   **Packed Structures:** These structures minimize or eliminate padding, saving memory but potentially incurring a performance penalty due to unaligned accesses.
*   **Compiler Attributes:** Use `__attribute__((packed))` (GCC/Clang) or `#pragma pack(1)` (ARMCC) to define packed structures.
*   **Trade-offs:** Carefully consider the trade-off between memory savings and potential performance degradation.
*   **Hardware/Protocol Interaction:** Packed structures are essential when the memory layout is dictated by external hardware interfaces or communication protocols.
*   **Benchmarking:** If performance is critical, always benchmark your code to measure the actual impact of packing.

This comprehensive set of notes provides a solid foundation for understanding and utilizing packed structures effectively in your ARM architecture and programming projects.