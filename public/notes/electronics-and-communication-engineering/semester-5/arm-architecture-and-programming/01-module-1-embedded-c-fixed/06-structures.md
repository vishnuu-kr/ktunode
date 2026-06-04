---
title: "structures"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 1: Embedded C: Fixed"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feadd"
status: "completed"
scrapedAt: "2026-05-23T17:53:13.333Z"
---
# ARM Architecture and Programming: Module 1 - Embedded C: Fixed - Structures

## Topic: Structures

**Learning Outcomes:**

*   Understand the concept of structures in C and their purpose in organizing data.
*   Declare and define structures.
*   Access members of a structure using the dot operator.
*   Understand the concept of structure padding and its implications.
*   Work with pointers to structures.
*   Utilize structures in embedded C programming for data abstraction and organization.
*   Relate the use of structures to the programmer's view of processor architecture (CO2).
*   Apply C features, including structures, in embedded systems (CO1).

---

### 1. Introduction to Structures

Structures are a fundamental data type in C that allow you to group together variables of different data types under a single name. This is crucial in embedded systems for creating meaningful representations of hardware components, data packets, or configuration settings.

**Key Concept:**
*   **User-Defined Data Type:** Structures enable you to create your own data types by combining existing ones. This promotes data abstraction and makes your code more organized and readable.

**Why are Structures Important in Embedded C?**

*   **Data Organization:** Representing hardware registers, sensor readings, communication protocol data, or configuration parameters.
*   **Code Readability and Maintainability:** Grouping related data makes the code easier to understand and modify.
*   **Memory Efficiency (with careful design):** Can sometimes help in organizing data for better memory utilization, although padding needs consideration.

---

### 2. Declaring and Defining Structures

A structure is defined using the `struct` keyword.

**Syntax:**

```c
struct structure_tag {
    data_type member1;
    data_type member2;
    // ... more members
};
```

*   `struct`: The keyword used to declare a structure.
*   `structure_tag`: An optional name for the structure. This tag can be used later to refer to the structure type.
*   `member1`, `member2`, ...: The individual variables within the structure. They can be of any valid C data type, including other structures.

**Example (Lewis, Chapter 5: Data Types):**

Let's define a structure to represent a sensor reading:

```c
// Declaration and definition of a SensorData structure
struct SensorData {
    int sensorID;         // Unique identifier for the sensor
    float temperature;    // Temperature reading in Celsius
    float humidity;       // Humidity reading in percentage
    unsigned long timestamp; // Time of reading (e.g., in milliseconds)
};
```

**Creating Variables of a Structure Type:**

Once a structure is defined, you can create variables (instances) of that structure type.

**Method 1: Using the `struct` keyword with the tag**

```c
struct SensorData mySensorReading;
```

**Method 2: Using `typedef` for convenience**

`typedef` allows you to create an alias for a data type. This is very common in embedded C to make structure declarations shorter and more readable.

```c
typedef struct {
    int sensorID;
    float temperature;
    float humidity;
    unsigned long timestamp;
} SensorData_t; // _t suffix is a common convention for type definitions

// Now you can declare variables without the 'struct' keyword
SensorData_t anotherSensorReading;
```

**(Lewis, Chapter 5)** `typedef` is a powerful tool for abstracting data types and improving code readability, which is a key aspect of CO1.

---

### 3. Accessing Structure Members

You access individual members of a structure variable using the **dot operator (`.`)**.

**Syntax:**

```c
structure_variable.member_name
```

**Example (Continuing from above):**

```c
// Declare a variable of the SensorData structure
struct SensorData currentReading;

// Assign values to the members
currentReading.sensorID = 101;
currentReading.temperature = 25.5f; // Using 'f' for float literals
currentReading.humidity = 60.2f;
currentReading.timestamp = 1678886400; // Example timestamp

// Access and print values
printf("Sensor ID: %d\n", currentReading.sensorID);
printf("Temperature: %.1f C\n", currentReading.temperature);
printf("Humidity: %.1f %%\n", currentReading.humidity);
printf("Timestamp: %lu\n", currentReading.timestamp);
```

**Important Point to Remember:**
*   Each instance of a structure occupies its own contiguous block of memory, holding all its members.

---

### 4. Structures and Memory: Padding

When the compiler lays out members of a structure in memory, it may insert extra bytes between members to align them to specific memory addresses. This alignment is often done to improve processor performance, as accessing data at aligned addresses can be faster. This insertion of extra bytes is called **padding**.

**Key Concepts:**
*   **Alignment:** Many processors can access data more efficiently if it is aligned to a certain boundary (e.g., 2-byte alignment for `short`, 4-byte alignment for `int` and `float` on many ARM Cortex-M processors).
*   **Padding:** Unused bytes inserted by the compiler for alignment purposes.

**Example (Illustrative):**

Consider the `SensorData` structure again:

```c
struct SensorData {
    int sensorID;         // Typically 4 bytes
    float temperature;    // Typically 4 bytes
    float humidity;       // Typically 4 bytes
    unsigned long timestamp; // Typically 4 bytes on a 32-bit ARM
};
```

On a 32-bit ARM processor, `int` and `float` are usually 4 bytes. `unsigned long` is also often 4 bytes.

A possible memory layout *without* padding (ideal scenario):

| Member      | Offset (bytes) | Size (bytes) |
| :---------- | :------------- | :----------- |
| `sensorID`  | 0              | 4            |
| `temperature` | 4              | 4            |
| `humidity`  | 8              | 4            |
| `timestamp` | 12             | 4            |
| **Total**   |                | **16**       |

In this ideal case, each member is perfectly aligned to its natural boundary (4-byte boundary for 4-byte data types). The total size is 16 bytes.

Now, consider a structure with different member types:

```c
struct MixedData {
    char flag;        // 1 byte
    int value;        // 4 bytes
    short status;     // 2 bytes
};
```

**Potential Memory Layout (with padding):**

Let's assume `char` is 1 byte, `int` is 4 bytes, and `short` is 2 bytes. On a 32-bit ARM, alignment requirements are typically 1 byte for `char`, 4 bytes for `int`, and 2 bytes for `short`.

| Member      | Offset (bytes) | Size (bytes) | Padding Added | Alignment |
| :---------- | :------------- | :----------- | :------------ | :-------- |
| `flag`      | 0              | 1            | 3 bytes       | To next 4-byte boundary for `value` |
| `value`     | 4              | 4            | 0 bytes       | Aligned to 4-byte boundary |
| `status`    | 8              | 2            | 2 bytes       | To next 4-byte boundary for the structure itself (if `sizeof(struct MixedData)` must be a multiple of 4) |
| **Total**   |                | **10**       | **5 bytes**   | **12 bytes** |

*   `flag` (1 byte) is at offset 0. The next member, `value` (4 bytes), needs 4-byte alignment. So, 3 padding bytes are added after `flag`.
*   `value` (4 bytes) starts at offset 4, which is a 4-byte boundary. No padding needed here.
*   `status` (2 bytes) starts at offset 8. For overall structure alignment, the total size of the structure might need to be a multiple of the largest alignment requirement (which is 4 bytes for `int`). So, 2 padding bytes are added after `status` to make the total size 12 bytes (a multiple of 4).

**(Lewis, Chapter 5)** discusses that the compiler determines padding to optimize memory access.

**Impact on Embedded Systems:**

*   **Memory Usage:** Padding can increase the memory footprint of your data structures. In resource-constrained embedded systems, this can be significant.
*   **Performance:** While padding can improve access speed, inefficient padding can lead to larger code size and slower execution.
*   **Interoperability:** When exchanging data with external systems or hardware, you need to be aware of padding, as the external system might not have the same padding rules.

**Controlling Padding (Advanced):**

Some compilers provide attributes or pragmas to control padding. For example, GCC's `__attribute__((packed))` can be used to pack structures tightly, eliminating padding.

```c
typedef struct __attribute__((packed)) {
    char flag;
    int value;
    short status;
} PackedData_t;
```

Using `packed` will result in a `PackedData_t` structure that is 7 bytes in size (1 byte for `flag` + 4 bytes for `value` + 2 bytes for `status`). However, accessing members in a packed structure can be slower on some architectures.

**(Yiu, Chapter 7: Embedded Software Development with C)** often discusses memory layout and optimization techniques relevant to embedded systems.

**Important Point to Remember:**
*   The size of a structure is not simply the sum of the sizes of its members due to padding. Use `sizeof()` to determine the actual size.

---

### 5. Pointers to Structures

Just like any other data type, you can create pointers to structures. Pointers to structures are very powerful for:

*   Passing structures to functions efficiently (by passing the pointer instead of the entire structure).
*   Implementing data structures like linked lists or trees.
*   Accessing and modifying structure members dynamically.

**Declaring a Pointer to a Structure:**

```c
struct structure_tag *pointer_variable_name;
```

**Example:**

```c
struct SensorData myReading;
struct SensorData *readingPtr; // Declare a pointer to SensorData

// Assign the address of myReading to readingPtr
readingPtr = &myReading;
```

**Accessing Members via a Structure Pointer:**

You use the **arrow operator (`->`)** to access members of a structure when you have a pointer to it.

**Syntax:**

```c
structure_pointer->member_name
```

This is a shorthand for `(*structure_pointer).member_name`.

**Example (Continuing from above):**

```c
// Using the arrow operator
readingPtr->sensorID = 102;
readingPtr->temperature = 27.0f;
readingPtr->humidity = 55.5f;
readingPtr->timestamp = 1678886500;

// The changes are made directly to myReading
printf("Sensor ID via pointer: %d\n", myReading.sensorID); // This will print 102
```

**Passing Structures to Functions using Pointers:**

This is a common and efficient practice in embedded programming.

```c
void displaySensorData(const struct SensorData *data) {
    // 'const' indicates the function will not modify the data
    printf("Sensor ID: %d\n", data->sensorID);
    printf("Temperature: %.1f C\n", data->temperature);
    printf("Humidity: %.1f %%\n", data->humidity);
    printf("Timestamp: %lu\n", data->timestamp);
}

int main() {
    struct SensorData sensor1 = {103, 26.1f, 70.0f, 1678886600};
    displaySensorData(&sensor1); // Pass the address of the structure
    return 0;
}
```

**(CO1)** This demonstrates using C features (structures and pointers) in an embedded context.
**(CO2)** Passing pointers to functions aligns with a programmer's view of how data is managed and accessed in memory, especially when dealing with larger data objects.

**Important Point to Remember:**
*   The arrow operator `->` is exclusively used with pointers to structures. The dot operator `.` is used with structure variables directly.

---

### 6. Structures in Embedded C Programming

Structures are ubiquitous in embedded software development. Here are some common use cases:

*   **Hardware Register Abstraction:** Many microcontrollers have registers for controlling peripherals (timers, UART, GPIO, etc.). Structures can represent these registers and their bitfields.

    **(Yiu, Chapter 7)** or **(Zhu, Chapter 5)** might provide examples of mapping hardware registers to C structures.

    ```c
    // Example: Simplified representation of a Timer Control Register
    typedef struct {
        unsigned int ENABLE    : 1;  // Bit 0: Timer Enable
        unsigned int MODE      : 2;  // Bits 1-2: Timer Mode
        unsigned int PRESCALER : 4;  // Bits 3-6: Prescaler value
        unsigned int RESERVED  : 25; // Unused bits
    } TimerControl_t;

    // Assuming TimerBaseAddress is a pointer to the memory location of the timer control register
    // TimerControl_t *TIMER0_CR = (TimerControl_t *) TimerBaseAddress;
    // TIMER0_CR->ENABLE = 1; // Enable the timer
    // TIMER0_CR->MODE = 0b10; // Set to PWM mode
    ```
    This directly maps to **CO1** (using C features in embedded) and **CO2** (programmer's view of hardware).

*   **Configuration Data:** Storing device configuration parameters.

    ```c
    typedef struct {
        int baudRate;
        int dataBits;
        int stopBits;
        int parity;
    } UartConfig_t;

    UartConfig_t myUartConfig = {9600, 8, 1, 0}; // No parity
    ```

*   **Message/Packet Structures:** Representing data sent/received over communication interfaces like I2C, SPI, or CAN.

    ```c
    typedef struct {
        unsigned char header[4];  // Start of frame, message type, etc.
        unsigned char payloadLength;
        unsigned char payload[32];
        unsigned char checksum;
    } CanMessage_t;
    ```

*   **State Machines:** Representing the state of a system or a component.

    ```c
    typedef enum {
        STATE_IDLE,
        STATE_RUNNING,
        STATE_ERROR
    } SystemState_e;

    typedef struct {
        SystemState_e currentState;
        int counter;
        // other state-specific data
    } SystemStatus_t;
    ```

**(Lewis, Chapter 5)** emphasizes how structures help manage complexity in embedded systems.

---

### 7. Bitfields within Structures

Bitfields allow you to specify the exact number of bits a member should occupy within a structure. This is extremely useful for packing tightly and mapping directly to hardware registers where specific bits or groups of bits control certain functionalities.

**Syntax:**

```c
struct structure_tag {
    data_type member1 : num_bits;
    data_type member2 : num_bits;
    // ...
};
```

*   `num_bits`: An integer representing the number of bits for that member.
*   The `data_type` is usually `int`, `unsigned int`, `short`, `unsigned short`.

**Example (Revisiting Timer Control Register):**

```c
typedef struct {
    unsigned int ENABLE    : 1;  // Bit 0
    unsigned int MODE      : 2;  // Bits 1-2
    unsigned int PRESCALER : 4;  // Bits 3-6
    unsigned int RESERVED  : 25; // Remaining bits in a 32-bit word
} TimerControl_t;

// Usage:
TimerControl_t controlReg;
controlReg.ENABLE = 1;     // Sets the least significant bit
controlReg.MODE = 0b10;    // Sets bits 1 and 2
controlReg.PRESCALER = 0b0101; // Sets bits 3-6
```

**Advantages of Bitfields:**
*   **Memory Efficiency:** Significant reduction in memory usage, especially when dealing with many small flags or state bits.
*   **Direct Hardware Mapping:** Precisely matches the layout of hardware registers, simplifying low-level peripheral control.

**Disadvantages of Bitfields:**
*   **Portability:** The order and alignment of bitfields can be compiler-dependent and architecture-dependent. Using specific compiler extensions or carefully crafting structures might be necessary for maximum portability.
*   **Performance:** Accessing individual bitfields can sometimes be slower than accessing larger integer types, as the compiler might need to perform bitwise operations (shifts and masks).

**(Lewis, Chapter 5)** covers bitfields as a method for memory optimization. **(Yiu, Chapter 7)** also discusses bitfields in the context of hardware register access.

**Important Point to Remember:**
*   Bitfields are powerful for memory packing and hardware mapping but require careful consideration of portability and potential performance impacts.

---

### 8. Related Course Outcomes

*   **CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3)**
    *   This entire topic is a prime example of CO1. Structures, `typedef`, pointers to structures, and bitfields are fundamental C constructs heavily utilized in embedded C programming for organizing data, abstracting hardware, and managing memory.

*   **CO2: Explain a programmer’s view of processor architecture (Knowledge Level: K2)**
    *   Understanding structures, padding, and alignment helps a programmer visualize how data is laid out in memory and how the processor might access it. This knowledge is crucial for optimizing memory usage and understanding potential performance bottlenecks. Bitfields directly relate to the bit-level control often exposed by processor architectures for peripheral management.

*   **CO3: Choose between programming at the level of assembly or C as appropriate (Knowledge Level: K3)**
    *   While this topic focuses on C, the decision to use C structures (especially with bitfields) for hardware abstraction is a direct consequence of comparing C's capabilities with assembly. C provides a higher level of abstraction that is often more productive for complex tasks, while assembly might be reserved for highly optimized critical sections or direct register manipulation that C structures might abstract away. The efficiency of passing structures by pointer versus by value also influences this choice.

---

### 9. Practice Questions and Exercises

**Questions:**

1.  What is the primary purpose of a `struct` in C programming, especially in embedded systems?
2.  Explain the difference between declaring a structure and defining its members.
3.  How do you access individual members of a structure variable?
4.  How do you access individual members of a structure when you have a pointer to that structure?
5.  What is structure padding, and why does the compiler introduce it? What are the implications of padding in embedded systems?
6.  What is the advantage of using `typedef` with structures?
7.  Provide a scenario where passing a pointer to a structure to a function is more beneficial than passing the structure by value.
8.  What are bitfields, and in what kind of embedded programming scenarios are they most useful?
9.  Consider the following structure definition:
    ```c
    typedef struct {
        unsigned char status_byte;
        unsigned int data_value;
        unsigned char command_code;
    } Packet_t;
    ```
    Assume `unsigned char` is 1 byte, `unsigned int` is 4 bytes, and the processor is a 32-bit ARM. Draw a possible memory layout for a `Packet_t` variable, indicating any padding. What is the total size of `Packet_t`?

**Exercises:**

1.  Define a structure `GPIO_PinConfig` with the following members:
    *   `pinNumber` (unsigned char)
    *   `direction` (unsigned char, 0 for input, 1 for output)
    *   `pullUp` (unsigned char, 0 for disabled, 1 for enabled)
    *   `outputState` (unsigned char, only relevant if direction is output, 0 for low, 1 for high)
    Use `typedef` to give this structure a shorter name, e.g., `GPIO_PinConfig_t`.

2.  Create an instance of your `GPIO_PinConfig_t` structure named `ledPin`. Initialize it to configure GPIO pin 5 as an output with the pull-up resistor disabled and the output state set to high.

3.  Write a function `configurePin(GPIO_PinConfig_t *pinConfig)` that takes a pointer to a `GPIO_PinConfig_t` structure and prints its configuration details in a human-readable format.

4.  Define a structure `SystemTimer` using bitfields to represent the following 32-bit control register:
    *   `Enable` (1 bit, bit 0)
    *   `Prescaler` (4 bits, bits 1-4)
    *   `InterruptEnable` (1 bit, bit 5)
    *   `Reserved` (26 bits, bits 6-31)
    Use `typedef` for this structure. Create an instance and set `Enable` to 1, `Prescaler` to 8, and `InterruptEnable` to 0.

---

### Answers to Practice Questions and Exercises

**Answers to Questions:**

1.  The primary purpose of a `struct` is to group together variables of different data types under a single name, allowing for logical organization and abstraction of complex data. In embedded systems, this is crucial for representing hardware registers, data packets, and system configurations.
2.  Declaring a structure defines its layout and member types (using `struct struct_name { ... };`). Defining its members involves assigning values to those members within a variable of that structure type.
3.  You access individual members of a structure variable using the dot operator (`.`), like `structure_variable.member_name`.
4.  When you have a pointer to a structure, you access its members using the arrow operator (`->`), like `structure_pointer->member_name`.
5.  Structure padding is the insertion of extra bytes by the compiler between structure members to align them on memory addresses that are multiples of their data type's size. This is done to improve processor performance, as aligned data access is often faster. In embedded systems, padding can increase memory usage and affect the exact size of data structures, which is critical for memory-constrained devices.
6.  `typedef` allows you to create an alias (a shorter, more readable name) for a structure type, making it easier to declare variables of that structure without repeatedly typing `struct structure_name`.
7.  Passing a pointer to a structure is more beneficial when the structure is large, as it avoids the overhead of copying the entire structure's contents to the function's stack. This improves performance and reduces stack usage. It also allows the function to directly modify the original structure.
8.  Bitfields are members of a structure that are allocated a specific number of bits. They are most useful for memory efficiency and for precisely mapping to hardware registers that have specific bit allocations for different control or status flags.
9.  **Possible Memory Layout and Total Size:**
    *   Assume `unsigned char` is 1 byte, `unsigned int` is 4 bytes.
    *   Processor: 32-bit ARM (natural alignment for `unsigned int` is 4 bytes).

    | Member          | Offset (bytes) | Size (bytes) | Padding Added       | Alignment Requirement |
    | :-------------- | :------------- | :----------- | :------------------ | :-------------------- |
    | `status_byte`   | 0              | 1            | 3 bytes (to align `data_value`) | 1 byte for `char`, 4 bytes for `int` |
    | `data_value`    | 4              | 4            | 0 bytes             | 4 bytes for `int`     |
    | `command_code`  | 8              | 1            | 3 bytes (to align structure to 4-byte boundary) | 1 byte for `char`, 4 bytes for total structure size multiple |
    | **Total Size**  |                | **8**        | **6 bytes**         | **12 bytes**          |

    The total size of `Packet_t` would likely be **12 bytes** due to padding.

**Answers to Exercises:**

1.  ```c
    typedef struct {
        unsigned char pinNumber;
        unsigned char direction;
        unsigned char pullUp;
        unsigned char outputState;
    } GPIO_PinConfig_t;
    ```

2.  ```c
    GPIO_PinConfig_t ledPin;
    ledPin.pinNumber = 5;
    ledPin.direction = 1;     // Output
    ledPin.pullUp = 0;        // Disabled
    ledPin.outputState = 1;   // High
    ```

3.  ```c
    #include <stdio.h> // Assuming stdio.h is available for printf

    // Structure definition from Exercise 1
    typedef struct {
        unsigned char pinNumber;
        unsigned char direction;
        unsigned char pullUp;
        unsigned char outputState;
    } GPIO_PinConfig_t;

    void configurePin(const GPIO_PinConfig_t *pinConfig) {
        printf("--- GPIO Pin Configuration ---\n");
        printf("Pin Number: %d\n", pinConfig->pinNumber);

        if (pinConfig->direction == 1) {
            printf("Direction: Output\n");
            printf("Output State: %s\n", (pinConfig->outputState == 1) ? "High" : "Low");
        } else {
            printf("Direction: Input\n");
        }

        printf("Pull-up Resistor: %s\n", (pinConfig->pullUp == 1) ? "Enabled" : "Disabled");
        printf("-----------------------------\n");
    }

    // Example usage in main (or another function)
    /*
    int main() {
        GPIO_PinConfig_t ledPin;
        ledPin.pinNumber = 5;
        ledPin.direction = 1;
        ledPin.pullUp = 0;
        ledPin.outputState = 1;

        configurePin(&ledPin); // Pass the address of ledPin

        GPIO_PinConfig_t buttonPin;
        buttonPin.pinNumber = 3;
        buttonPin.direction = 0; // Input
        buttonPin.pullUp = 1;    // Enabled

        configurePin(&buttonPin);

        return 0;
    }
    */
    ```

4.  ```c
    typedef struct {
        unsigned int Enable         : 1;  // Bit 0
        unsigned int Prescaler      : 4;  // Bits 1-4
        unsigned int InterruptEnable: 1;  // Bit 5
        unsigned int Reserved       : 26; // Bits 6-31
    } SystemTimer_t;

    // Example of creating and setting values:
    /*
    SystemTimer_t timerCtrl;
    timerCtrl.Enable = 1;
    timerCtrl.Prescaler = 8; // Binary 1000
    timerCtrl.InterruptEnable = 0;
    // timerCtrl.Reserved is automatically 0 if not explicitly set.

    // You can then cast this to a regular integer to write to hardware:
    // unsigned int *TIMER_CONTROL_REG_ADDR = (unsigned int *) 0x40001000; // Example address
    // *TIMER_CONTROL_REG_ADDR = *((unsigned int *)&timerCtrl);
    */
    ```

---
This concludes the study notes for structures in Embedded C for ARM Architecture and Programming. Remember to practice these concepts by implementing them in simple embedded projects or simulations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
