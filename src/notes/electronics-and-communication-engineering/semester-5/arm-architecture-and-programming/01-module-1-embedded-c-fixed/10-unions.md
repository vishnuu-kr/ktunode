---
title: "unions."
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 1: Embedded C: Fixed"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feae1"
status: "completed"
scrapedAt: "2026-05-23T17:53:16.127Z"
---
# ARM Architecture and Programming: Module 1 - Embedded C: Fixed - Unions

## 1. Introduction to Unions

**Key Concept:** A union is a user-defined data type that allows different types of data to be stored in the same memory location. However, at any given time, only one member of the union can hold a value.

**Definition:**
A union in C is declared using the `union` keyword, similar to how a `struct` is declared. It defines a block of memory that can be interpreted as different data types.

**Learning Outcome Alignment:**
*   **LO: Understand the concept of unions and their role in memory management and data representation in embedded systems.**
    *   This section directly addresses this learning outcome by defining unions and explaining their fundamental purpose.
*   **CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3).**
    *   Understanding unions is crucial for effectively using C features for memory optimization and flexible data handling in embedded systems.

**Textbook/Reference Integration:**
*   **Fundamentals of Embedded Software with the ARM Cortex M3 by Daniel W Lewis:** Lewis likely discusses unions as a way to handle data of varying types that might arrive from peripherals or be used for configuration, emphasizing their role in efficient memory usage.
*   **The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors by Joseph Yiu:** Yiu might touch upon unions in the context of hardware register access, where a single memory address might be viewed as a byte, a half-word, or a word depending on the operation.
*   **Embedded systems with ARM Cortex M Microcontrollers by Yifeng Zhu:** Zhu's text would probably provide practical examples of unions for bit-field manipulation or accessing hardware registers with different data widths.

---

## 2. Union Declaration and Syntax

**Key Concept:** Unions are declared using the `union` keyword, followed by a tag name (optional) and a block of member declarations.

**Syntax:**

```c
union union_name {
    member_type1 member_name1;
    member_type2 member_name2;
    // ... more members
};
```

**Example:**

```c
union Data {
    int integer_val;
    float float_val;
    char char_array[10];
};
```

**Explanation:**
*   The `union_name` is the identifier for the union type.
*   Each `member_name` is an identifier for a member within the union.
*   All members share the same memory location. The size of the union is determined by the size of its largest member.

**Learning Outcome Alignment:**
*   **LO: Understand the concept of unions and their role in memory management and data representation in embedded systems.**
    *   This section provides the fundamental syntax for declaring and defining unions.
*   **CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3).**
    *   Knowing how to declare unions is a prerequisite for using them effectively.

---

## 3. Union Memory Allocation

**Key Concept:** The memory allocated for a union is equal to the size of its largest member. This is because all members occupy the same memory space.

**Example:**
Consider the `Data` union declared above:

```c
union Data {
    int integer_val;        // Assume int is 4 bytes
    float float_val;        // Assume float is 4 bytes
    char char_array[10];    // 10 bytes
};
```
If `int` is 4 bytes, `float` is 4 bytes, and `char_array[10]` is 10 bytes, the `Data` union will occupy **10 bytes** of memory.

**Important Point:** When you assign a value to one member, any previous value in other members is lost or corrupted because they are overwriting the same memory.

**Learning Outcome Alignment:**
*   **LO: Understand the concept of unions and their role in memory management and data representation in embedded systems.**
    *   This section clarifies the crucial aspect of memory allocation for unions.
*   **CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3).**
    *   Understanding memory allocation is vital for embedded programming to avoid memory leaks or incorrect data interpretation.

**Textbook/Reference Integration:**
*   **Fundamentals of Embedded Software with the ARM Cortex M3 by Daniel W Lewis:** Lewis would emphasize that unions are a tool for **memory optimization**, allowing developers to reuse the same memory space for different data types, which is critical in resource-constrained embedded systems.

---

## 4. Accessing Union Members

**Key Concept:** Union members are accessed using the dot operator (`.`) if you have a union variable directly, or the arrow operator (`->`) if you have a pointer to a union.

**Syntax:**

*   **Direct Access:** `union_variable.member_name`
*   **Pointer Access:** `union_pointer->member_name`

**Example:**

```c
#include <stdio.h> // For demonstration; in embedded, typically avoid stdio

union Data {
    int integer_val;
    float float_val;
    char char_array[10];
};

int main() {
    union Data my_data; // Declare a union variable

    // Assign a value to the integer member
    my_data.integer_val = 100;
    printf("Integer value: %d\n", my_data.integer_val);
    // When integer_val is accessed, it's valid.

    // Assign a value to the float member
    my_data.float_val = 3.14;
    printf("Float value: %f\n", my_data.float_val);
    // Now, the memory is interpreted as a float.
    // Accessing my_data.integer_val here would yield unpredictable results.

    // Assign a value to the char_array member
    strcpy(my_data.char_array, "Hello"); // strcpy is not in C standard, use strncpy for safety
    printf("Char array value: %s\n", my_data.char_array);
    // Now, the memory is interpreted as a char array.
    // Accessing my_data.integer_val or my_data.float_val would be incorrect.

    return 0;
}
```

**Important Point:** It is the programmer's responsibility to keep track of which member is currently active or holds the valid data. Accessing a member other than the one most recently written to results in **undefined behavior** or **data corruption**.

**Learning Outcome Alignment:**
*   **LO: Understand the concept of unions and their role in memory management and data representation in embedded systems.**
    *   This section explains how to interact with union members.
*   **CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3).**
    *   Correctly accessing union members is key to using them effectively.

---

## 5. Use Cases of Unions in Embedded Systems

**Key Concepts:** Unions are particularly useful in embedded systems for:
*   **Handling data of varying types:** When receiving data from sensors or communication interfaces, the data format might differ.
*   **Memory-efficient data representation:** Storing different types of data that are mutually exclusive in a single memory location.
*   **Hardware register manipulation:** Accessing hardware registers that can be viewed as a whole word, or individual bytes/bits.
*   **Implementing state machines:** Storing different states or associated data for each state.

**Examples:**

**5.1. Handling Sensor Data:**
Imagine a system that can receive data from different sensors, each reporting a different data type (e.g., temperature as a float, humidity as an integer).

```c
typedef enum {
    SENSOR_TYPE_TEMP,
    SENSOR_TYPE_HUMIDITY,
    SENSOR_TYPE_PRESSURE
} SensorType;

typedef struct {
    SensorType type;
    union {
        float temperature;
        int humidity;
        int pressure; // Assuming pressure also fits in int
    } data;
} SensorReading;

// Example Usage:
SensorReading reading;
reading.type = SENSOR_TYPE_TEMP;
reading.data.temperature = 25.5f;

// Later, when processing a different sensor:
reading.type = SENSOR_TYPE_HUMIDITY;
reading.data.humidity = 60;
```
**Explanation:** The `SensorReading` struct uses a union to store the actual sensor value. The `type` field tells us which member of the union is currently valid. This saves memory compared to having separate fields for each sensor type.

**5.2. Hardware Register Access (Conceptual):**
Embedded systems often interact with hardware registers. A register might be 32 bits wide, but you might want to access individual bytes for specific settings.

```c
// Hypothetical ARM Cortex-M peripheral register
typedef volatile struct {
    union {
        uint32_t WORD; // Full 32-bit register value
        uint8_t  BYTE[4]; // Individual bytes (Byte 0, Byte 1, etc.)
        uint16_t HALFWORD[2]; // 16-bit halves
    } CONTROL_REGISTER;
    // Other registers...
} PeripheralRegisters;

// Example Usage (Conceptual):
// Assuming base address of peripheral is PERIPHERAL_BASE
PeripheralRegisters *periph = (PeripheralRegisters *)PERIPHERAL_BASE;

// To set the least significant byte of the control register:
periph->CONTROL_REGISTER.BYTE[0] = 0x55;

// To read the entire 32-bit control register:
uint32_t reg_value = periph->CONTROL_REGISTER.WORD;
```

**Learning Outcome Alignment:**
*   **LO: Understand the concept of unions and their role in memory management and data representation in embedded systems.**
    *   These examples demonstrate practical scenarios where unions are beneficial.
*   **CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3).**
    *   These use cases illustrate how to apply unions in typical embedded development tasks.
*   **CO2: Explain a programmer’s view of processor architecture (Knowledge Level: K2).**
    *   The hardware register access example hints at how memory addresses and data widths are fundamental to processor interaction.
*   **CO3: Choose between programming at the level of assembly or C as appropriate (Knowledge Level: K3).**
    *   Understanding when to use C constructs like unions is part of choosing the right level of abstraction.

**Textbook/Reference Integration:**
*   **Fundamentals of Embedded Software with the ARM Cortex M3 by Daniel W Lewis:** Lewis would likely use examples related to device drivers and peripheral configuration, showcasing how unions simplify the handling of registers with different access widths.
*   **The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors by Joseph Yiu:** Yiu's book is highly relevant for hardware register interaction. He would explain how unions are a C-level abstraction to map to the physical register layout, allowing access to bits, bytes, or words as defined by the processor's memory-mapped peripheral architecture.
*   **Embedded systems with ARM Cortex M Microcontrollers by Yifeng Zhu:** Zhu might provide more direct code examples for interacting with common peripherals on ARM Cortex-M microcontrollers, demonstrating the practical application of unions for register programming.

---

## 6. Unions vs. Structures

**Key Concept:** While both unions and structures group data members, they differ fundamentally in how they allocate memory and how members are accessed.

| Feature           | Structure (`struct`)                                | Union (`union`)                                    |
| :---------------- | :-------------------------------------------------- | :------------------------------------------------- |
| **Memory Allocation** | Each member occupies its own distinct memory space. Total size is the sum of member sizes (plus padding). | All members share the *same* memory space. Total size is the size of the *largest* member. |
| **Data Access**   | Multiple members can hold valid data simultaneously. | Only *one* member can hold a valid value at any given time. |
| **Purpose**       | To group related data items that are *all* needed simultaneously. | To represent data that can be *one of several types* but not multiple types at once, often for memory efficiency or flexible data interpretation. |
| **Example**       | `struct Point { int x; int y; };` // x and y can both hold values. | `union Value { int i; float f; };` // i or f can hold a value, but not both simultaneously. |

**Important Point:** Structures are for composite data types where all parts are relevant at once. Unions are for type-variant data where only one interpretation is valid at a time.

**Learning Outcome Alignment:**
*   **LO: Understand the concept of unions and their role in memory management and data representation in embedded systems.**
    *   This comparison highlights the distinct role of unions in relation to structures.
*   **CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3).**
    *   Choosing between structs and unions is a common decision in embedded programming, and understanding their differences is key.

---

## 7. Important Points to Remember

*   **Memory is Shared:** All members of a union share the same memory location.
*   **Largest Member Dictates Size:** The size of a union is determined by the size of its largest member.
*   **One Active Member:** At any point, only one member of a union should be considered valid and actively holding data.
*   **Programmer Responsibility:** The programmer is responsible for tracking which member is currently active to avoid data corruption.
*   **Memory Optimization:** Unions are powerful tools for optimizing memory usage in resource-constrained embedded systems.
*   **Hardware Register Access:** Unions are frequently used to interpret hardware registers at different granularities (byte, half-word, word).

**Learning Outcome Alignment:**
*   **LO: Understand the concept of unions and their role in memory management and data representation in embedded systems.**
    *   These summary points reinforce the most critical aspects of unions.
*   **CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3).**
    *   These are essential takeaways for practical application.

---

## 8. Practice Questions and Exercises

**Question 1:**
Consider the following union declaration:
```c
union DeviceStatus {
    unsigned int status_code;
    unsigned char bytes[4];
    short half_words[2];
};
```
If `unsigned int` is 4 bytes, `unsigned char` is 1 byte, and `short` is 2 bytes, what will be the size of `DeviceStatus` in bytes?

**Answer:** 4 bytes (the size of `unsigned int` and `bytes[4]`).

---

**Question 2:**
Explain a scenario where using a union would be more advantageous than using a structure in an embedded system.

**Answer:** A union is advantageous when you need to store data that can take on different forms but will only ever be one of those forms at a time, and you want to save memory. For example, if a communication protocol can send either a 16-bit integer command or a 32-bit pointer, you could use a union to store the payload. Only one of these would be valid at any given message, and the union would save the memory difference between the 16-bit integer and the 32-bit pointer. In contrast, a structure would allocate memory for both, even though they couldn't be valid simultaneously.

---

**Question 3:**
Write a C code snippet that demonstrates how to access the individual bytes of a 32-bit variable using a union. Assume a `uint32_t` is 4 bytes and a `uint8_t` is 1 byte.

**Answer:**
```c
#include <stdint.h> // For uint32_t and uint8_t

union DataConverter {
    uint32_t full_word;
    uint8_t  byte_array[4];
};

int main() {
    union DataConverter converter;

    converter.full_word = 0x12345678; // Assign a 32-bit value

    // Accessing individual bytes
    uint8_t byte0 = converter.byte_array[0]; // Least significant byte
    uint8_t byte1 = converter.byte_array[1];
    uint8_t byte2 = converter.byte_array[2];
    uint8_t byte3 = converter.byte_array[3]; // Most significant byte

    // Example: Print the bytes (in a real embedded system, use appropriate output mechanisms)
    // printf("Byte 0: 0x%02X\n", byte0); // Example using printf
    // printf("Byte 1: 0x%02X\n", byte1);
    // printf("Byte 2: 0x%02X\n", byte2);
    // printf("Byte 3: 0x%02X\n", byte3);

    // The output would be:
    // Byte 0: 0x78
    // Byte 1: 0x56
    // Byte 2: 0x34
    // Byte 3: 0x12
    // (This assumes little-endian byte order, common in ARM Cortex-M)

    return 0;
}
```

---

**Question 4:**
What is the main risk associated with incorrect usage of unions?

**Answer:** The main risk is **data corruption** or **undefined behavior**. If you write to one member of a union and then attempt to read from a different member, the data might be misinterpreted, leading to incorrect calculations, system malfunctions, or crashes. It's crucial to always know which member is currently active.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
