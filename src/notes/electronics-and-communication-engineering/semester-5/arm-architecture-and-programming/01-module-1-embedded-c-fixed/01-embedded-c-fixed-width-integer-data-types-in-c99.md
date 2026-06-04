---
title: "Embedded C: Fixed-width integer data types in C99"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 1: Embedded C: Fixed"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fead8"
status: "completed"
scrapedAt: "2026-05-23T17:53:09.799Z"
---
# ARM Architecture and Programming: Module 1: Embedded C: Fixed-Width Integer Data Types in C99

## 1. Introduction to Embedded C and Data Types

Embedded systems often require precise control over memory usage and hardware behavior. This necessitates a deep understanding of data types, particularly those that guarantee specific bit widths. C99 introduced fixed-width integer data types to address this need, providing a standardized way to define integers with predictable sizes, crucial for interacting with hardware registers and memory-mapped peripherals.

**Key Concept:** Embedded systems development demands predictable behavior and efficient resource utilization. Fixed-width integer data types in C99 are essential tools for achieving this.

**Course Outcome Alignment:**
*   **CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3)** - Understanding and utilizing fixed-width integer types is a core C feature for embedded systems.
*   **CO2: Explain a programmer’s view of processor architecture (Knowledge Level: K2)** - Knowing how data types map to processor registers and memory is fundamental to this outcome.
*   **CO3: Choose between programming at the level of assembly or C as appropriate (Knowledge Level: K3)** - Fixed-width types allow C to mimic the precise bit manipulation often done in assembly.

## 2. The Need for Fixed-Width Integer Data Types

In traditional C, the size of integer types like `int`, `short`, and `long` is *implementation-defined*. This means their exact size can vary between different compilers and architectures. While this offers flexibility on general-purpose systems, it poses significant challenges in embedded programming:

*   **Hardware Interaction:** Embedded systems frequently interact with hardware peripherals through memory-mapped registers. These registers have specific bit widths (e.g., an 8-bit status register, a 16-bit control register). Using variable-width types like `int` might lead to incorrect data being written or read, causing hardware malfunction.
*   **Memory Optimization:** Embedded systems often have limited memory resources. Knowing the exact size of a variable allows for more efficient memory allocation and management.
*   **Portability:** Code written for one embedded platform might need to be ported to another. Relying on implementation-defined sizes makes such porting difficult and error-prone.
*   **Bit-Level Operations:** Manipulating individual bits within a data type is common in embedded systems (e.g., setting/clearing status flags). Fixed-width types ensure that bitwise operations behave predictably.

**Example:** Consider an 8-bit status register at a specific memory address. If you declare a variable to hold this status as `int`, and `int` is 32 bits on your target ARM processor, you might inadvertently read or write beyond the intended 8 bits, corrupting adjacent memory or registers.

**Textbook Reference:**
*   **Lewis (2015), Chapter 3: Data Types:** Discusses the limitations of traditional C data types and introduces the necessity of precise control.

## 3. C99 Standard: Fixed-Width Integer Types

The C99 standard (ISO/IEC 9899:1999) introduced a set of standard integer types with guaranteed minimum widths. These types are defined in the `<stdint.h>` header file.

**Key Concept:** The `<stdint.h>` header file provides a set of macros that define integer types with specific bit widths.

### 3.1. Signed Integer Types

Signed integers represent both positive and negative values. The most significant bit (MSB) is used to indicate the sign.

| Type Name           | Description                                      | Minimum Width | Requirements                                  |
| :------------------ | :----------------------------------------------- | :------------ | :-------------------------------------------- |
| `int8_t`            | 8-bit signed integer                             | 8 bits        | Range: -127 to +127 (or -128 to +127)         |
| `int16_t`           | 16-bit signed integer                            | 16 bits       | Range: -32767 to +32767 (or -32768 to +32767) |
| `int32_t`           | 32-bit signed integer                            | 32 bits       | Range: -2,147,483,647 to +2,147,483,647      |
| `int64_t`           | 64-bit signed integer (if supported)             | 64 bits       | Range: -9,223,372,036,854,775,807 to +9,223,372,036,854,775,807 |
| `int_least8_t`      | Smallest signed integer type with at least 8 bits | ≥ 8 bits      | The fastest integer type with at least 8 bits |
| `int_least16_t`     | Smallest signed integer type with at least 16 bits| ≥ 16 bits     | The fastest integer type with at least 16 bits|
| `int_least32_t`     | Smallest signed integer type with at least 32 bits| ≥ 32 bits     | The fastest integer type with at least 32 bits|
| `int_least64_t`     | Smallest signed integer type with at least 64 bits| ≥ 64 bits     | The fastest integer type with at least 64 bits|
| `int_fast8_t`       | Fastest signed integer type with at least 8 bits | *Implementation Defined* | The fastest available signed integer type     |
| `int_fast16_t`      | Fastest signed integer type with at least 16 bits| *Implementation Defined* | The fastest available signed integer type     |
| `int_fast32_t`      | Fastest signed integer type with at least 32 bits| *Implementation Defined* | The fastest available signed integer type     |
| `int_fast64_t`      | Fastest signed integer type with at least 64 bits| *Implementation Defined* | The fastest available signed integer type     |
| `intptr_t`          | Signed integer type capable of holding a pointer | *Implementation Defined* | For pointer arithmetic                        |
| `intmax_t`          | Largest signed integer type available            | *Implementation Defined* | The largest signed integer type               |

**Note on `int_least` and `int_fast` types:**
*   `int_leastN_t`: Guarantees at least N bits, and is the smallest type that does so. This is useful when you need a certain minimum range but want to favor smaller types for memory efficiency.
*   `int_fastN_t`: Represents the fastest integer type on the target system that is at least N bits wide. This is crucial for performance-critical operations. On many ARM Cortex-M processors, 32-bit operations are very efficient, so `int_fast32_t` might be the same as `int32_t`.

**Example Usage:**

```c
#include <stdint.h> // Include the header for fixed-width types

int8_t signed_byte = -50;
int16_t signed_short = 15000;
int32_t signed_int = -100000;
int_fast8_t fastest_signed_byte = -120; // Use the fastest 8-bit signed type
```

**Textbook Reference:**
*   **Lewis (2015), Chapter 3.3: Standardized Integer Types:** Provides detailed explanations of these types and their significance.

### 3.2. Unsigned Integer Types

Unsigned integers represent only non-negative values. All bits are used to represent the magnitude.

| Type Name           | Description                                      | Minimum Width | Requirements                                  |
| :------------------ | :----------------------------------------------- | :------------ | :-------------------------------------------- |
| `uint8_t`           | 8-bit unsigned integer                           | 8 bits        | Range: 0 to 255                               |
| `uint16_t`          | 16-bit unsigned integer                          | 16 bits       | Range: 0 to 65535                             |
| `uint32_t`          | 32-bit unsigned integer                          | 32 bits       | Range: 0 to 4,294,967,295                    |
| `uint64_t`          | 64-bit unsigned integer (if supported)             | 64 bits       | Range: 0 to 18,446,744,073,709,551,615        |
| `uint_least8_t`     | Smallest unsigned integer type with at least 8 bits | ≥ 8 bits      | The fastest unsigned integer type with at least 8 bits |
| `uint_least16_t`    | Smallest unsigned integer type with at least 16 bits| ≥ 16 bits     | The fastest unsigned integer type with at least 16 bits|
| `uint_least32_t`    | Smallest unsigned integer type with at least 32 bits| ≥ 32 bits     | The fastest unsigned integer type with at least 32 bits|
| `uint_least64_t`    | Smallest unsigned integer type with at least 64 bits| ≥ 64 bits     | The fastest unsigned integer type with at least 64 bits|
| `uint_fast8_t`      | Fastest unsigned integer type with at least 8 bits | *Implementation Defined* | The fastest available unsigned integer type     |
| `uint_fast16_t`     | Fastest unsigned integer type with at least 16 bits| *Implementation Defined* | The fastest available unsigned integer type     |
| `uint_fast32_t`     | Fastest unsigned integer type with at least 32 bits| *Implementation Defined* | The fastest available unsigned integer type     |
| `uint_fast64_t`     | Fastest unsigned integer type with at least 64 bits| *Implementation Defined* | The fastest available unsigned integer type     |
| `uintptr_t`         | Unsigned integer type capable of holding a pointer | *Implementation Defined* | For pointer arithmetic                        |
| `uintmax_t`         | Largest unsigned integer type available            | *Implementation Defined* | The largest unsigned integer type               |

**Example Usage:**

```c
#include <stdint.h>

uint8_t status_flags = 0xAF; // Represents 1010 1111 in binary
uint16_t counter = 30000;
uint32_t large_value = 2000000000;
uint_fast16_t fastest_unsigned_short = 45000; // Use the fastest 16-bit unsigned type
```

**Important Point to Remember:** Unsigned integer arithmetic wraps around. For example, `uint8_t max_val = 255; uint8_t overflow = max_val + 1;` will result in `overflow` being 0. This behavior is predictable and often leveraged in embedded programming for modulo arithmetic.

**Textbook Reference:**
*   **Lewis (2015), Chapter 3.3: Standardized Integer Types:** Continues the discussion on unsigned fixed-width types.
*   **Yiu (2014), Chapter 2: ARM Cortex-M Architecture:** Discusses how data types are represented in registers, which is often 32-bit for Cortex-M.

## 4. Using Fixed-Width Types in Embedded Systems

### 4.1. Interfacing with Hardware Registers

This is the most common and critical use case for fixed-width integer types. Hardware registers on microcontrollers (like ARM Cortex-M) are typically 8, 16, or 32 bits wide.

**Example: ARM Cortex-M GPIO Control Register**

Let's assume a hypothetical GPIO data direction register (DDR) for a specific port, which is 32 bits wide, where each bit controls the direction of a corresponding pin.

```c
#include <stdint.h>

// Assume a base address for GPIO port A
#define GPIO_PORTA_BASE_ADDRESS 0x40020000

// Define the Data Direction Register (DDR) as a pointer to uint32_t
volatile uint32_t *const GPIO_PORTA_DDR = (volatile uint32_t *)(GPIO_PORTA_BASE_ADDRESS + 0x00);

// Define bit masks for individual pins
#define PIN0 (1U << 0) // 0000 0001
#define PIN1 (1U << 1) // 0000 0010
#define PIN2 (1U << 2) // 0000 0100

int main() {
    // Configure pins 0 and 1 as outputs, pin 2 as input
    // To set a bit to 1 (output), we write 1 to that bit in the DDR.
    // To set a bit to 0 (input), we write 0 to that bit in the DDR.

    // Read the current DDR value to avoid affecting other pins
    uint32_t current_ddr = *GPIO_PORTA_DDR;

    // Set pins 0 and 1 as outputs (set bits 0 and 1 to 1)
    current_ddr |= (PIN0 | PIN1);

    // Set pin 2 as input (clear bit 2 to 0)
    current_ddr &= ~PIN2;

    // Write the updated value back to the DDR
    *GPIO_PORTA_DDR = current_ddr;

    // Now, let's assume a GPIO Port Output Register (PORT) is at offset 0x04
    volatile uint32_t *const GPIO_PORTA_PORT = (volatile uint32_t *)(GPIO_PORTA_BASE_ADDRESS + 0x04);

    // Set pin 0 high (output)
    *GPIO_PORTA_PORT |= PIN0;

    // Clear pin 1 low (output)
    *GPIO_PORTA_PORT &= ~PIN1;

    return 0;
}
```

**Explanation:**

*   `volatile uint32_t *const GPIO_PORTA_DDR`:
    *   `volatile`: Tells the compiler that the value of this pointer can change at any time without any action on the part of the software. This prevents the compiler from optimizing away reads or writes to this memory location. Essential for hardware registers.
    *   `uint32_t *`: Declares a pointer to an unsigned 32-bit integer. This ensures we are treating the memory location as a 32-bit register.
    *   `const`: Indicates that the pointer itself cannot be reassigned to point to a different memory address.
*   `0x40020000 + 0x00`: This is the memory-mapped address of the register.
*   `PIN0 (1U << 0)`: Creates a bitmask with only the 0th bit set. `1U` ensures it's treated as an unsigned literal.
*   `|=`, `&= ~`: These are bitwise operations used to set or clear specific bits without affecting others.

**Reference:**
*   **Yiu (2014), Chapter 5: Memory-Mapped Peripherals:** Explains the concept of memory-mapped I/O and how to access hardware registers.
*   **Zhu (2018), Chapter 6: Memory-Mapped I/O:** Covers similar concepts related to interacting with hardware.

### 4.2. Ensuring Portability and Predictability

When you need code that behaves identically across different ARM Cortex-M variants or other embedded platforms, fixed-width types are invaluable.

**Example:** A function that performs a checksum calculation might require precise bitwise operations on a 16-bit value.

```c
#include <stdint.h>

// Function to calculate a simple 16-bit checksum
uint16_t calculate_checksum(const uint8_t data_buffer[], size_t buffer_size) {
    uint16_t checksum = 0;
    for (size_t i = 0; i < buffer_size; ++i) {
        checksum += data_buffer[i]; // Addition wraps around automatically for uint16_t
    }
    return checksum;
}

int main() {
    uint8_t sensor_data[] = {0x01, 0x02, 0x03, 0x04};
    uint16_t my_checksum = calculate_checksum(sensor_data, sizeof(sensor_data));
    // my_checksum will be 0x01 + 0x02 + 0x03 + 0x04 = 0x0A
    return 0;
}
```

**Important Point to Remember:** `size_t` is an unsigned integer type that is guaranteed to be able to represent the size of any object in bytes. It's used for array indexing and sizes.

### 4.3. Data Structures and Memory Layout

When defining structures that represent data packets or hardware configurations, using fixed-width types ensures predictable memory layout.

**Example:** A structure representing a configuration byte for a sensor.

```c
#include <stdint.h>

typedef struct {
    uint8_t config_param1 : 2;  // Bit-field: 2 bits for param1
    uint8_t enable_feature : 1; // Bit-field: 1 bit for feature enable
    uint8_t mode : 3;           // Bit-field: 3 bits for mode selection
    uint8_t reserved : 2;       // Bit-field: 2 bits reserved
} sensor_config_t;

int main() {
    sensor_config_t config;

    // Set values using bit-fields
    config.config_param1 = 0b10;      // Binary 10 (decimal 2)
    config.enable_feature = 1;        // Enable the feature
    config.mode = 0b101;              // Binary 101 (decimal 5)

    // The 'reserved' bits are 0 by default after declaration.

    // You can also cast a whole byte to the structure
    uint8_t raw_config_byte = 0b10101101; // Example raw byte
    config = *((sensor_config_t *)&raw_config_byte);

    // Accessing individual fields
    uint8_t param1_value = config.config_param1; // Will be 0b01 (due to bit order in structure)

    return 0;
}
```

**Explanation of Bit-fields:**
*   `uint8_t config_param1 : 2;`: This declares a member named `config_param1` that occupies 2 bits within the `uint8_t`. The compiler packs these bit-fields together.
*   The order of bit-fields in a structure is *implementation-defined*, but typically they are packed from least significant bit to most significant bit within a byte. In the example above, `config_param1` (2 bits), `enable_feature` (1 bit), `mode` (3 bits), and `reserved` (2 bits) would combine to form an 8-bit byte.

**Important Point to Remember:** While bit-fields offer memory savings, their exact layout can vary. For critical hardware register representations, it's often safer to use bitwise operations with individual fixed-width types or directly access memory addresses.

**Reference:**
*   **Lewis (2015), Chapter 3.4: Bit-Fields:** Discusses the use and implications of bit-fields.

## 5. Predefined Macros in `<stdint.h>`

Besides the type names, `<stdint.h>` also defines macros for limits and constants related to these types.

*   **Minimum and Maximum Values:**
    *   `INT8_MIN`, `INT8_MAX`
    *   `INT16_MIN`, `INT16_MAX`
    *   `INT32_MIN`, `INT32_MAX`
    *   `INT64_MIN`, `INT64_MAX` (if supported)
    *   `UINT8_MAX` (no `UINT8_MIN` as it's always 0)
    *   `UINT16_MAX`
    *   `UINT32_MAX`
    *   `UINT64_MAX` (if supported)

*   **Smallest and Fastest Types Limits:**
    *   `INT_LEAST8_MIN`, `INT_LEAST8_MAX`, `UINT_LEAST8_MAX` (and similarly for 16, 32, 64)
    *   `INT_FAST8_MIN`, `INT_FAST8_MAX`, `UINT_FAST8_MAX` (and similarly for 16, 32, 64)

*   **Pointer Types Limits:**
    *   `INTPTR_MIN`, `INTPTR_MAX`
    *   `UINTPTR_MAX`

*   **Maximum Integer Type Limits:**
    *   `INTMAX_MIN`, `INTMAX_MAX`
    *   `UINTMAX_MAX`

*   **Integer Constant Macros:**
    *   `INT8_C(x)`, `INT16_C(x)`, `INT32_C(x)`, `INT64_C(x)`: Used to create signed integer constants of the specified width.
    *   `UINT8_C(x)`, `UINT16_C(x)`, `UINT32_C(x)`, `UINT64_C(x)`: Used to create unsigned integer constants of the specified width.

**Example Usage:**

```c
#include <stdint.h>
#include <stdio.h> // For printf

int main() {
    int32_t data_val = INT32_C(100000); // Equivalent to (int32_t)100000
    uint8_t flags = UINT8_C(0x0F);      // Equivalent to (uint8_t)0x0F

    printf("Max value for int8_t: %d\n", INT8_MAX);
    printf("Max value for uint8_t: %u\n", UINT8_MAX);

    // Using constant macros ensures the literal has the correct type
    int64_t large_const = INT64_C(9223372036854775807);

    return 0;
}
```

**Important Point to Remember:** Using the `_C` macros for integer literals (e.g., `INT32_C(123)`) is good practice when you want to explicitly ensure that a literal constant has a specific fixed-width type, especially when performing calculations or comparisons. This avoids potential issues with default integer type promotions.

## 6. Practice Questions and Exercises

**Question 1:**
Why are fixed-width integer data types in C99 important for embedded systems development?

**Answer:**
Fixed-width integer data types are crucial for embedded systems because:
1.  **Hardware Interfacing:** They precisely match the bit widths of hardware registers, preventing data corruption.
2.  **Portability:** They ensure code behaves consistently across different embedded platforms.
3.  **Memory Efficiency:** They allow for precise control over memory usage.
4.  **Predictable Behavior:** They guarantee predictable results for bitwise operations and arithmetic, essential for low-level control.

**Question 2:**
You are programming an ARM Cortex-M microcontroller and need to configure an 8-bit timer prescaler register. What C99 fixed-width integer type would be most appropriate to represent this register, and why?

**Answer:**
The most appropriate type would be `uint8_t`. This is because timer prescaler registers are commonly 8 bits wide, and `uint8_t` guarantees an 8-bit unsigned integer, ensuring a direct and correct mapping to the hardware register. Using `uint8_t` prevents any potential issues with sign extension or differing bit widths that might occur with `int` or `short`.

**Question 3:**
Consider the following C code snippet. What will be the final value of `result`? Explain your reasoning.

```c
#include <stdint.h>

int main() {
    uint8_t a = 250;
    uint8_t b = 10;
    uint8_t result;

    result = a + b; // Potential overflow

    return 0;
}
```

**Answer:**
The final value of `result` will be **4**.

**Reasoning:**
`uint8_t` is an unsigned 8-bit integer, with a range of 0 to 255.
When `a` (250) is added to `b` (10), the mathematical result is 260.
However, since `result` is a `uint8_t`, the addition will overflow. In unsigned integer arithmetic, overflow causes the value to wrap around.
The calculation can be seen as:
250 + 10 = 260
260 in binary is `1 0000 0100` (where the leading '1' is the carry-out bit).
When this is stored in an 8-bit `uint8_t`, the leading '1' is discarded, leaving `0000 0100`, which is decimal 4.

**Question 4:**
Write a C code snippet that declares a pointer to a memory-mapped 16-bit control register located at address `0x40010004` and then sets the 7th bit (LSB is bit 0) of this register to 1.

**Answer:**

```c
#include <stdint.h>

int main() {
    // Define the memory address of the 16-bit control register
    volatile uint16_t *control_register = (volatile uint16_t *)0x40010004;

    // Create a bit mask for the 7th bit (0-indexed)
    const uint16_t BIT7_MASK = (1U << 7); // 0b0000000010000000

    // Read the current value, set the 7th bit, and write back
    // Using volatile read ensures we get the latest value from the hardware
    uint16_t current_value = *control_register;
    current_value |= BIT7_MASK; // Set the 7th bit to 1
    *control_register = current_value; // Write the modified value back

    return 0;
}
```

**Question 5:**
Explain the difference between `int_least16_t` and `int_fast16_t`.

**Answer:**
*   `int_least16_t`: This type guarantees a signed integer with *at least* 16 bits. The compiler will select the smallest available signed integer type that meets this minimum width requirement. Its primary goal is to ensure a minimum range, potentially saving memory if a smaller type (e.g., 16-bit) suffices.
*   `int_fast16_t`: This type guarantees a signed integer with *at least* 16 bits, but it also specifies that it should be the *fastest* available signed integer type on the target architecture that meets this width. For many ARM Cortex-M processors, 32-bit operations are highly optimized, so `int_fast16_t` might often resolve to `int32_t` to achieve maximum performance for operations requiring at least 16 bits.

## 7. Summary and Key Takeaways

*   **Fixed-width integer types** (`int8_t`, `uint16_t`, etc.) are defined in `<stdint.h>` and provide **guaranteed bit widths**, unlike traditional C types (`int`, `short`).
*   They are **essential for embedded systems** for precise hardware interaction, portability, and memory management.
*   **`volatile` keyword** is crucial when accessing hardware registers to prevent compiler optimizations that could lead to incorrect behavior.
*   **Unsigned integer arithmetic wraps around** on overflow, a predictable behavior often used in embedded contexts.
*   **Bit-fields** can be used within structures for memory efficiency, but their exact layout is implementation-defined, making direct register mapping sometimes preferable for critical hardware.
*   **Predefined macros** (`INT8_MAX`, `UINT16_C`, etc.) in `<stdint.h>` provide important constants and enable creating typed literals.

This concludes Module 1 on Embedded C: Fixed-Width Integer Data Types. Understanding and correctly utilizing these types is a foundational skill for any embedded software engineer working with ARM architectures.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
