---
title: "Embedded C: Fixed-width integer data types in C99, boolean type, mixing types, manipulating bits in memory and IO ports, accessing memory mapped IO using pointers, structures, packed structures, bit fields, casting address of an object, unions."
subject: "ARM ARCHITECTURE, PROGRAMMING AND INTERFACING"
module: "Module 1: Embedded C: Fixed"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec0f"
status: "completed"
scrapedAt: "2026-05-23T17:53:52.013Z"
---
# ARM Architecture, Programming and Interfacing: Module 1 - Embedded C: Fixed

## Introduction to Embedded C and Fixed-Width Integer Data Types

This module introduces fundamental C programming concepts crucial for embedded systems development, with a focus on features commonly used with ARM microcontrollers. We will explore how C's data types, particularly fixed-width integers and boolean types, are managed and manipulated to interact directly with hardware. Understanding these low-level details is essential for efficient and reliable embedded software.

**Learning Outcomes Covered:**
*   Use the features of C that are frequently used in embedded systems (CO1, K3)
*   Explain a programmer’s view of processor architecture (CO2, K2)

**Key Concepts:**
*   **Embedded C:** A subset or specialized usage of the C programming language tailored for embedded systems, often involving direct hardware manipulation.
*   **Fixed-Width Integer Data Types:** Integer types that are guaranteed to have a specific number of bits, essential for precise control over memory usage and hardware register manipulation.
*   **Data Type Portability:** The challenge of ensuring that C code behaves predictably across different architectures due to varying default integer sizes.

**Textbook References:**
*   **Fundamentals of Embedded Software with the ARM Cortex M3 by Daniel W. Lewis:** Provides a foundational understanding of embedded systems and C programming, likely covering standard C types and their implications. (Chapter 2, "Introduction to Embedded Systems Programming")
*   **Embedded systems with ARM Cortex M Microcontrollers in Assembly and C by Yifeng Zhu:** Offers detailed insights into C programming for ARM Cortex-M, including its specific data type handling. (Chapter 3, "C Programming for Embedded Systems")

---

### 1. Fixed-Width Integer Data Types in C99

The C99 standard introduced specific integer types that guarantee a minimum width, addressing the portability issues of default `int`, `short`, `long`, and `long long`. These types are critical for embedded systems where precise memory usage and direct hardware register mapping are common.

**Key Concepts:**
*   **`intN_t`:** An integer type with exactly `N` bits of width.
*   **`uintN_t`:** An unsigned integer type with exactly `N` bits of width.
*   **`N` values:** Typically 8, 16, 32, or 64.
*   **`stdint.h`:** The header file that defines these fixed-width integer types.
*   **Minimum Width Types:** `int_leastN_t` (smallest type with at least `N` bits) and `uint_leastN_t` (smallest unsigned type with at least `N` bits).
*   **Fastest Minimum Width Types:** `int_fastN_t` (fastest integer type with at least `N` bits) and `uint_fastN_t` (fastest unsigned integer type with at least `N` bits).

**Why are they important in Embedded C?**
*   **Hardware Register Mapping:** Microcontroller peripherals (like GPIO ports, timers, communication interfaces) have registers with specific bit widths. Fixed-width types allow direct and accurate mapping to these registers.
*   **Memory Efficiency:** Explicitly using smaller types (e.g., `uint8_t`) can save memory, which is often a scarce resource in embedded systems.
*   **Predictable Behavior:** Guarantees that a variable will occupy a specific amount of memory and hold values within a defined range, regardless of the compiler or target architecture.
*   **Bit Manipulation:** Essential for operations that target individual bits within a byte or word.

**Examples:**
```c
#include <stdint.h> // Include the header for fixed-width types

// Declaring variables with specific widths
uint8_t data_byte;      // An unsigned 8-bit integer
int16_t sensor_reading; // A signed 16-bit integer
uint32_t configuration_register; // An unsigned 32-bit integer

// Example of mapping to a hypothetical hardware register
// Assuming a register at memory address 0x40001000 controls an LED
uint8_t *led_control_reg = (uint8_t *)0x40001000;

// Turn on the LED (assuming bit 0 controls the LED)
*led_control_reg |= (1 << 0); // Use bitwise OR to set the bit

// Turn off the LED
*led_control_reg &= ~(1 << 0); // Use bitwise AND with inverted mask to clear the bit
```

**Important Points to Remember:**
*   Always include `<stdint.h>` when using fixed-width integer types.
*   Prefer `uintN_t` for hardware registers unless the register is explicitly defined as signed.
*   Understand the difference between `intN_t` and `int_leastN_t` / `int_fastN_t`. For direct hardware access, `intN_t` is usually preferred.

**Textbook References:**
*   **Fundamentals of Embedded Software with the ARM Cortex M3 by Daniel W. Lewis:** Likely discusses the importance of data types for hardware interaction. (Chapter 2, "Data Types and Operations")
*   **Embedded systems with ARM Cortex M Microcontrollers in Assembly and C by Yifeng Zhu:** Explicitly covers `stdint.h` types and their use in ARM. (Chapter 3, "C Programming for Embedded Systems")
*   **The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors by Joseph Yiu:** May touch upon register layouts and how C types map to them. (Chapter 4, "The C/C++ Programming Environment")

---

### 2. Boolean Type in C99

C99 introduced a standard boolean type, which is vital for representing true/false conditions and controlling program flow in embedded systems.

**Key Concepts:**
*   **`_Bool`:** The keyword for the boolean type.
*   **`stdbool.h`:** The header file that defines `bool` as an alias for `_Bool` and provides `true` and `false` macros.
*   **Values:** `0` represents false, and any non-zero value (conventionally `1`) represents true.
*   **Type Promotion:** When used in arithmetic operations, `_Bool` values are promoted to `int`.

**Why is it important in Embedded C?**
*   **Readability:** Makes code that expresses conditions much clearer than using integer `0` and `1`.
*   **Control Flow:** Directly used in `if`, `while`, `for` statements.
*   **State Representation:** Can represent the state of flags or conditions within the embedded system.

**Examples:**
```c
#include <stdbool.h> // Include the header for boolean types

// Using the bool type
bool system_initialized = false;
bool sensor_triggered = true;

// Example in a control flow statement
if (!system_initialized) {
    // Initialize the system
    system_initialized = true;
    // ... initialization code ...
}

// Using boolean in a loop condition
while (sensor_triggered) {
    // Process sensor data
    // ...
    // Eventually set sensor_triggered to false to exit loop
    sensor_triggered = false;
}
```

**Important Points to Remember:**
*   Always include `<stdbool.h>` to use `bool`, `true`, and `false`.
*   While `_Bool` can hold any integer value, it will be converted to `0` (false) or `1` (true) when assigned to or evaluated in a boolean context.

**Textbook References:**
*   **Fundamentals of Embedded Software with the ARM Cortex M3 by Daniel W. Lewis:** Likely covers standard C features like `stdbool.h`. (Chapter 2, "Data Types and Operations")
*   **Embedded systems with ARM Cortex M Microcontrollers in Assembly and C by Yifeng Zhu:** Will discuss C features relevant to embedded programming. (Chapter 3, "C Programming for Embedded Systems")

---

### 3. Mixing Types (Type Casting and Implicit Conversions)

When different data types are used together in expressions or assignments, the C compiler performs implicit type conversions. Understanding these conversions and when to use explicit type casting is crucial for preventing unexpected behavior and data loss.

**Key Concepts:**
*   **Implicit Type Conversion (Coercion):** The compiler automatically converts operands of different types to a common type before performing an operation. The "usual arithmetic conversions" rule determines this common type. Generally, smaller types are promoted to larger types.
*   **Explicit Type Casting:** The programmer explicitly converts a value from one type to another using the `(type)` syntax.
*   **Integer Promotions:** Smaller integer types (`char`, `short`, `_Bool`) are promoted to `int` or `unsigned int` when used in expressions.
*   **Usual Arithmetic Conversions:** Defines how types are converted to a common type for binary operations (e.g., `int` + `float` becomes `float` + `float`).

**Why is it important in Embedded C?**
*   **Data Interpretation:** When reading data from hardware registers or sensors, the data might be in a different format than expected by your variables.
*   **Arithmetic Operations:** Mixing signed and unsigned types, or types of different sizes, can lead to subtle bugs if not handled carefully.
*   **Bit Manipulation:** Operations like shifting or masking might involve different integer types.

**Examples:**
```c
#include <stdint.h>

uint8_t u8_val = 100;
int16_t s16_val = -50;
float float_val = 3.14;

// Implicit conversion: s16_val is promoted to int for addition, result is int
int result_int = u8_val + s16_val; // u8_val (100) is promoted to int, result is int (50)

// Implicit conversion: u8_val is promoted to float for addition, result is float
float result_float = u8_val + float_val; // u8_val (100) is promoted to float, result is float (103.14)

// Explicit type casting: To store the result of float operation in uint8_t
// This can lead to data loss if the float value is out of uint8_t range or not an integer
uint8_t truncated_val = (uint8_t)(float_val * 10); // 3.14 * 10 = 31.4, cast to uint8_t truncates to 31

// Mixing signed and unsigned types (potential for issues)
uint32_t unsigned_val = 5;
int32_t signed_val = -10;

// When signed and unsigned operands are used, the signed operand is often converted to unsigned.
// If the signed value is negative, this conversion can result in a very large positive number.
uint32_t problematic_comparison = (unsigned_val - signed_val); // 5 - (-10) = 15.
// If signed_val was -5, then 5 - (-5) = 10.
// If signed_val was -4294967290, then 5 - (-4294967290) would be problematic.
// A safer approach for mixed-type comparisons is to cast to a common, potentially larger, signed type.

// Safer comparison
if ((int32_t)unsigned_val > signed_val) { // Both are now int32_t
    // ...
}
```

**Important Points to Remember:**
*   **Loss of Data:** Be aware of potential data loss or overflow when converting from a larger type to a smaller type, or from floating-point to integer (truncation).
*   **Signed vs. Unsigned:** Mixing signed and unsigned integers in comparisons or arithmetic can lead to unexpected results, especially with negative numbers. The signed operand is often converted to unsigned.
*   **Explicit Casting:** Use explicit casts when you understand the conversion and its implications, especially when dealing with hardware registers or specific data requirements.
*   **Compiler Warnings:** Pay close attention to compiler warnings related to type conversions; they often indicate potential issues.

**Textbook References:**
*   **Fundamentals of Embedded Software with the ARM Cortex M3 by Daniel W. Lewis:** Discusses C data types and expressions. (Chapter 2, "Data Types and Operations")
*   **Embedded systems with ARM Cortex M Microcontrollers in Assembly and C by Yifeng Zhu:** Will cover C language constructs relevant to microcontrollers. (Chapter 3, "C Programming for Embedded Systems")

---

### 4. Manipulating Bits in Memory and I/O Ports

Direct bit manipulation is a cornerstone of embedded programming, enabling precise control over hardware functionalities.

**Key Concepts:**
*   **Bitwise Operators:**
    *   `&` (Bitwise AND): Used for masking (clearing specific bits).
    *   `|` (Bitwise OR): Used for setting specific bits.
    *   `^` (Bitwise XOR): Used for toggling specific bits.
    *   `~` (Bitwise NOT): Inverts all bits.
    *   `<<` (Left Shift): Shifts bits to the left, effectively multiplying by powers of 2.
    *   `>>` (Right Shift): Shifts bits to the right, effectively dividing by powers of 2.

*   **Bit Masking:** Using a pattern of bits (a mask) with bitwise operators to isolate, set, or clear specific bits within a byte or word.
*   **Bit Setting:** `variable |= (1 << bit_position);`
*   **Bit Clearing:** `variable &= ~(1 << bit_position);`
*   **Bit Toggling:** `variable ^= (1 << bit_position);`
*   **Bit Testing:** `if (variable & (1 << bit_position)) { /* bit is set */ }`

**Why is it important in Embedded C?**
*   **Controlling Hardware:** I/O ports, status registers, configuration registers, and control bits in peripherals are all manipulated at the bit level.
*   **Efficiency:** Bitwise operations are typically very fast and efficient.
*   **Data Packing:** Allows multiple pieces of information to be stored in a single byte or word.

**Examples:**
```c
#include <stdint.h>

// Assume we are controlling an LED via a single bit in a status register
uint8_t *status_register = (uint8_t *)0x40001004; // Hypothetical address

// Let's say bit 3 controls the LED
#define LED_BIT (1 << 3) // Create a mask for bit 3 (00001000 binary)

// Turn the LED ON
*status_register = *status_register | LED_BIT; // Sets bit 3 to 1, leaves others unchanged

// Turn the LED OFF
*status_register = *status_register & ~LED_BIT; // Clears bit 3 to 0, leaves others unchanged

// Toggle the LED state
*status_register = *status_register ^ LED_BIT; // Flips the state of bit 3

// Check if the LED is ON
if (*status_register & LED_BIT) {
    // LED is currently ON
} else {
    // LED is currently OFF
}

// Manipulating multiple bits (e.g., setting bits 1 and 2, clearing bit 0)
uint8_t control_byte = 0b00000110; // Initial value
#define BIT1_MASK (1 << 1)
#define BIT2_MASK (1 << 2)
#define BIT0_MASK (1 << 0)

// Set bits 1 and 2
control_byte |= (BIT1_MASK | BIT2_MASK); // control_byte becomes 0b00000110 | 0b00000110 = 0b00000110 (no change if already set)
// If control_byte was 0b00000000, it would become 0b00000110

// Clear bit 0
control_byte &= ~BIT0_MASK; // control_byte becomes 0b00000110 & ~0b00000001 = 0b00000110 & 0b11111110 = 0b00000110

// Toggling bit 1
control_byte ^= BIT1_MASK; // control_byte becomes 0b00000110 ^ 0b00000010 = 0b00000100
```

**Important Points to Remember:**
*   Use `uint8_t`, `uint16_t`, etc., for bit manipulation to avoid unexpected behavior with sign bits.
*   Create bit masks using left shifts (`1 << bit_position`).
*   The `~` operator is crucial when clearing bits.
*   Test bits before setting them if you only want to change them when they are in a specific state.

**Textbook References:**
*   **Fundamentals of Embedded Software with the ARM Cortex M3 by Daniel W. Lewis:** This is a core topic. (Chapter 3, "Bitwise Operations and Data Manipulation")
*   **Embedded systems with ARM Cortex M Microcontrollers in Assembly and C by Yifeng Zhu:** Will provide detailed examples of bit manipulation for ARM peripherals. (Chapter 3, "C Programming for Embedded Systems")
*   **The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors by Joseph Yiu:** May explain how bit operations map to ARM assembly instructions for efficiency. (Chapter 4, "The C/C++ Programming Environment")

---

### 5. Accessing Memory-Mapped I/O Using Pointers

In embedded systems, hardware peripherals are often accessed by reading from and writing to specific memory addresses. This is known as Memory-Mapped I/O (MMIO). Pointers are the C construct used to achieve this direct memory access.

**Key Concepts:**
*   **Memory-Mapped I/O (MMIO):** A method where I/O devices are treated as memory locations. The CPU accesses peripherals by reading from and writing to specific memory addresses that are mapped to device registers.
*   **Pointers:** Variables that store memory addresses.
*   **Pointer Declaration:** `type *pointer_name;` (e.g., `uint8_t *data_reg;`)
*   **Pointer Initialization:** `pointer_name = (type *)address;` (e.g., `data_reg = (uint8_t *)0x40013800;`)
*   **Dereferencing:** Using the `*` operator to access the value at the memory address stored in the pointer (e.g., `*data_reg = 0x05;` writes 0x05 to the address pointed to by `data_reg`).
*   **Volatile Keyword:** Crucial for MMIO. It tells the compiler that the value at the memory location can change at any time due to external factors (like hardware interrupts or hardware state changes) and that the compiler should not optimize away reads or writes to this location.

**Why is it important in Embedded C?**
*   **Direct Hardware Control:** Enables reading status from hardware, writing control commands, and configuring peripherals.
*   **Portability (within a target architecture):** While addresses are architecture-specific, the pointer mechanism is standard C.

**Examples:**
```c
#include <stdint.h>

// Define base addresses and offsets for hypothetical peripheral registers
// (These addresses are illustrative and depend on the specific microcontroller)
#define GPIO_PORTA_BASE_ADDRESS 0x40020000
#define GPIO_PORTA_DATA_OFFSET 0x0000 // Data register
#define GPIO_PORTA_DIR_OFFSET  0x0004 // Direction register

// Define a pointer to the Data Register for Port A
// Using 'volatile' is essential for MMIO!
volatile uint32_t *gpio_port_a_data;
volatile uint32_t *gpio_port_a_dir;

// Initialize the pointers with the correct memory addresses
gpio_port_a_data = (volatile uint32_t *)(GPIO_PORTA_BASE_ADDRESS + GPIO_PORTA_DATA_OFFSET);
gpio_port_a_dir  = (volatile uint32_t *)(GPIO_PORTA_BASE_ADDRESS + GPIO_PORTA_DIR_OFFSET);

// Configure pin 5 of Port A as output
// Assuming the Direction Register uses bits to set pin direction (1=output, 0=input)
*gpio_port_a_dir |= (1 << 5); // Set the 5th bit in the Direction Register

// Turn ON the LED connected to pin 5 (assuming writing 1 to the corresponding bit in Data Register)
*gpio_port_a_data |= (1 << 5); // Set the 5th bit in the Data Register

// Turn OFF the LED
*gpio_port_a_data &= ~(1 << 5); // Clear the 5th bit in the Data Register

// Read the current state of pin 6 (assuming bit 6 reflects input state)
uint32_t pin_6_state = (*gpio_port_a_data >> 6) & 0x01;
if (pin_6_state) {
    // Pin 6 is HIGH
} else {
    // Pin 6 is LOW
}
```

**Important Points to Remember:**
*   **`volatile` is MANDATORY:** Always declare pointers to MMIO locations as `volatile`. Without it, the compiler might optimize away reads/writes, leading to incorrect hardware behavior.
*   **Correct Address and Type:** Ensure you are using the correct memory addresses and that the pointer type (`uint8_t *`, `uint16_t *`, `uint32_t *`) matches the size of the hardware register you are accessing.
*   **Byte Ordering (Endianness):** Be aware of the target system's endianness (e.g., little-endian or big-endian), which affects how multi-byte registers are accessed. ARM Cortex-M is typically little-endian.
*   **Reference Manuals:** Always consult the microcontroller's reference manual for accurate memory addresses of peripherals and register bit definitions.

**Textbook References:**
*   **Fundamentals of Embedded Software with the ARM Cortex M3 by Daniel W. Lewis:** Extensively covers MMIO and pointer usage. (Chapter 5, "Memory-Mapped I/O")
*   **Embedded systems with ARM Cortex M Microcontrollers in Assembly and C by Yifeng Zhu:** Will provide practical examples of MMIO on ARM. (Chapter 4, "Accessing Peripherals using Memory-Mapped I/O")
*   **The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors by Joseph Yiu:** Discusses memory maps and how C interacts with them. (Chapter 5, "Memory Map")

---

### 6. Structures, Packed Structures, and Bit Fields

Structures provide a way to group related data items together. Packed structures and bit fields offer methods to control the memory layout of these structures, which is vital for efficient data storage and direct mapping to hardware registers with specific bit layouts.

#### 6.1 Structures

**Key Concepts:**
*   **`struct` Keyword:** Used to define a structure.
*   **Members:** Variables declared within a structure. They can be of different data types.
*   **Memory Layout:** By default, the compiler may add padding between structure members to align them for faster access, based on the architecture's word size. This can lead to wasted memory.

**Why are they important in Embedded C?**
*   **Data Organization:** Grouping related hardware states or configuration parameters into a single logical unit.
*   **Readability:** Improves code readability by encapsulating related data.

**Examples:**
```c
// Define a structure for a hypothetical sensor reading
struct SensorData {
    uint16_t temperature;
    uint16_t humidity;
    uint8_t status_flags;
};

// Declare a variable of this structure type
struct SensorData current_reading;

// Accessing members
current_reading.temperature = 250; // Store 25.0 degrees Celsius (assuming scale factor)
current_reading.humidity = 60;    // Store 60% humidity
current_reading.status_flags = 0x03; // Set status bits (e.g., 0b00000011)

// Example of accessing a specific bit within a structure member
if (current_reading.status_flags & (1 << 0)) { // Check if the first bit is set
    // Sensor fault detected
}
```

#### 6.2 Packed Structures

**Key Concepts:**
*   **`__attribute__((packed))` (GCC/Clang):** A compiler-specific attribute used to tell the compiler not to add padding to a structure. Members are placed immediately after each other in memory.
*   **No Padding:** Reduces memory usage but can lead to slower access times on some architectures due to unaligned memory accesses.

**Why are they important in Embedded C?**
*   **Memory Optimization:** Crucial when memory is extremely limited.
*   **Protocol/Data Format Mapping:** When a C structure needs to exactly match a data format defined by a communication protocol or a specific hardware register layout that has no padding.

**Examples:**
```c
// Define a packed structure - members are packed tightly without padding
struct PackedSensorData {
    uint16_t temperature;
    uint16_t humidity;
    uint8_t status_flags;
} __attribute__((packed)); // This syntax is common in GCC-based compilers

// Declare a variable of this packed structure type
struct PackedSensorData packed_reading;

// Accessing members is the same as a regular structure
packed_reading.temperature = 250;
packed_reading.humidity = 60;
packed_reading.status_flags = 0x03;

// The memory layout of packed_reading will be:
// [uint16_t temperature] [uint16_t humidity] [uint8_t status_flags]
// No padding bytes between members.
```

#### 6.3 Bit Fields

**Key Concepts:**
*   **`:` Operator:** Used within a structure definition to declare bit fields.
*   **`type member_name : num_bits;`:** Allocates `num_bits` to `member_name` from the type `type`.
*   **Compiler Dependent:** The exact layout and allocation of bit fields are compiler-dependent and can be complex. The compiler might group bits into larger types (e.g., `int` or `unsigned int`).
*   **Unsigned Types Preferred:** Generally, use unsigned types for bit fields to avoid sign extension issues.

**Why are they important in Embedded C?**
*   **Direct Mapping to Registers:** Allows a single structure member to represent a specific field within a hardware register.
*   **Memory Efficiency:** Consolidates multiple small flags or settings into a single byte or word.

**Examples:**
```c
// Define a structure with bit fields for a control register
struct ControlRegister {
    uint8_t : 3;           // Unused bits (padding/alignment)
    uint8_t enable_sensor : 1; // Bit 3: Enable Sensor (1 bit)
    uint8_t mode : 2;          // Bits 4-5: Operation Mode (2 bits)
    uint8_t reset : 1;         // Bit 6: Reset Flag (1 bit)
    uint8_t : 1;           // Unused bit
};

// Declare a variable for the control register
struct ControlRegister ctrl_reg;

// Setting bit fields
ctrl_reg.enable_sensor = 1;
ctrl_reg.mode = 0b10; // Set mode to binary 10 (decimal 2)
ctrl_reg.reset = 0;

// Reading bit fields
if (ctrl_reg.enable_sensor) {
    // Sensor is enabled
}
if (ctrl_reg.mode == 0b01) {
    // Operating in mode 1
}

// Note: Direct casting to uint8_t and bitwise operations are often safer and more portable
// for register manipulation than relying on bit field compiler behavior.

// A more explicit and often safer way to handle register bits:
typedef struct {
    unsigned int : 3; // Padding
    unsigned int enable_sensor : 1;
    unsigned int mode : 2;
    unsigned int reset : 1;
    unsigned int : 1; // Padding
} ControlRegisterFields;

volatile ControlRegisterFields *control_reg_ptr = (volatile ControlRegisterFields *)0x40001008; // Hypothetical address

// Accessing with bit fields
control_reg_ptr->enable_sensor = 1;
control_reg_ptr->mode = 0b10;
```

**Important Points to Remember:**
*   **Compiler Dependence:** Bit field layout is implementation-defined. Avoid relying on the exact order or packing of bit fields across different compilers.
*   **`packed` for Structures:** Use `__attribute__((packed))` for structures that need to exactly match external data formats or for strict memory optimization.
*   **Bit Fields vs. Bitwise Ops:** For direct hardware register access, using `volatile` pointers with fixed-width types and bitwise operations is often more predictable and recommended than relying on bit fields within structures, especially across different compilers or architectures. However, bit fields can be useful for conceptual grouping of register bits within a C structure.
*   **`unsigned int` for Bit Fields:** Use `unsigned int` for bit fields to avoid potential sign extension issues.

**Textbook References:**
*   **Fundamentals of Embedded Software with the ARM Cortex M3 by Daniel W. Lewis:** Covers structures and their memory layout. (Chapter 6, "Structures and Unions")
*   **Embedded systems with ARM Cortex M Microcontrollers in Assembly and C by Yifeng Zhu:** Discusses data structures for embedded programming. (Chapter 3, "C Programming for Embedded Systems")
*   **The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors by Joseph Yiu:** May offer insights into how the ARM architecture handles aligned and unaligned memory access, influencing padding. (Chapter 4, "The C/C++ Programming Environment")

---

### 7. Casting the Address of an Object

This refers to explicitly converting the memory address of a variable or object to a different pointer type.

**Key Concepts:**
*   **Address-of Operator (`&`):** Used to get the memory address of a variable.
*   **Pointer Conversion:** Casting the address obtained from `&` to a pointer of a different type.

**Why is it important in Embedded C?**
*   **Hardware Mapping:** When a hardware register is not directly at a known memory address but is accessed via a pointer that is relative to a base address.
*   **Interfacing with Functions:** Passing pointers to functions that expect a different pointer type (though this can be dangerous if not done correctly).
*   **Data Structure Alignment:** Forcing a pointer to point to an object that might not be naturally aligned.

**Examples:**
```c
#include <stdint.h>

// Example: A single byte variable
uint8_t my_byte = 0x55;

// Get the address of my_byte
uint8_t *byte_ptr = &my_byte;

// Cast the address to a uint16_t pointer
// This treats the memory location of my_byte as the start of a 16-bit value.
// This is dangerous if my_byte is not followed by another byte to form a valid uint16_t.
uint16_t *word_ptr = (uint16_t *)&my_byte;

// Example: Accessing a hardware register using a cast
// Assume a UART transmit data register is at address 0x40002004, and it's a 32-bit register
volatile uint32_t *uart_tx_data_reg;
uint32_t transmit_value = 0x12345678;

// We can get the address of a known value and cast it, or directly cast a literal address.
// Direct casting of a literal address is common for MMIO:
uart_tx_data_reg = (volatile uint32_t *)0x40002004;

// Writing to the register:
*uart_tx_data_reg = transmit_value;

// Suppose we have a structure and want to cast its address to a different type:
struct MyStruct {
    uint16_t member1;
    uint8_t member2;
};

struct MyStruct data;
data.member1 = 0xABCD;
data.member2 = 0xEF;

// Get the address of the structure
struct MyStruct *struct_ptr = &data;

// Cast the structure address to a uint8_t pointer
uint8_t *byte_ptr_from_struct = (uint8_t *)struct_ptr;

// Now byte_ptr_from_struct points to the start of 'data'.
// Accessing data.member1 byte by byte (assuming little-endian):
// byte_ptr_from_struct[0] would be 0xCD
// byte_ptr_from_struct[1] would be 0xAB
// Accessing data.member2:
// byte_ptr_from_struct[2] would be 0xEF (if no padding)
```

**Important Points to Remember:**
*   **Alignment:** Casting a pointer to a type larger than the original object's address can lead to unaligned access if the original address is not properly aligned for the new type. This can cause performance penalties or even exceptions on some architectures.
*   **Data Interpretation:** The compiler assumes the cast is correct and will access memory according to the new pointer type. If the underlying memory doesn't match the new type's expectations, you'll get incorrect data.
*   **Use with Caution:** Casting addresses is powerful but can be dangerous. Always ensure you understand the memory layout and the implications of the cast.

**Textbook References:**
*   **Fundamentals of Embedded Software with the ARM Cortex M3 by Daniel W. Lewis:** Likely discusses pointer manipulation and memory access. (Chapter 4, "Pointers")
*   **Embedded systems with ARM Cortex M Microcontrollers in Assembly and C by Yifeng Zhu:** Will cover low-level memory addressing. (Chapter 4, "Accessing Peripherals using Memory-Mapped I/O")

---

### 8. Unions

Unions are a special data structure in C that allow multiple members to share the same memory location. Only one member of a union can be active (meaningful) at any given time.

**Key Concepts:**
*   **`union` Keyword:** Used to define a union.
*   **Shared Memory:** All members of a union start at the same memory address. The size of the union is determined by the size of its largest member.
*   **Accessing Members:** You can access any member, but only the last member written to will hold a valid value. The programmer is responsible for tracking which member is currently active.

**Why are they important in Embedded C?**
*   **Memory Saving:** When you have data that can be interpreted in different ways but never simultaneously. For example, a peripheral might return data as a 32-bit word or as an array of 8-bit bytes.
*   **Data Reinterpretation:** Allows you to reinterpret the bit pattern of a value as a different data type. This is common when dealing with hardware registers that have multiple possible representations.

**Examples:**
```c
#include <stdint.h>

// Define a union that can hold a 32-bit value or two 16-bit values
union RegisterValue {
    uint32_t dword;          // 32-bit value
    uint16_t words[2];       // Array of two 16-bit values
    uint8_t bytes[4];        // Array of four 8-bit values
};

// Declare a variable of the union type
union RegisterValue reg_data;

// Example: Writing a 32-bit value
reg_data.dword = 0x12345678;

// Now, accessing the members will show how the 32-bit value is represented:
// The size of the union is 4 bytes (the size of uint32_t, the largest member).
// Assuming little-endian:
// reg_data.words[0] will be 0x5678
// reg_data.words[1] will be 0x1234
// reg_data.bytes[0] will be 0x78
// reg_data.bytes[1] will be 0x56
// reg_data.bytes[2] will be 0x34
// reg_data.bytes[3] will be 0x12

// Example: Reinterpreting the data
uint16_t low_word = reg_data.words[0]; // Get the lower 16 bits
uint16_t high_word = reg_data.words[1]; // Get the higher 16 bits

// Example: Using a union to map to a hardware register
// Suppose a register at 0x40001000 can be viewed as a single uint32_t or two uint16_t fields.
typedef union {
    volatile uint32_t u32;
    struct {
        uint16_t low_field;
        uint16_t high_field;
    } fields;
} PeripheralRegister;

volatile PeripheralRegister *peripheral_reg = (volatile PeripheralRegister *)0x40001000;

// Writing to the low field of the register
peripheral_reg->fields.low_field = 0xAAAA;

// This implicitly writes 0xAAAA to the lower 16 bits of the register at 0x40001000.
// If we then read the entire 32-bit value:
uint32_t current_reg_value = peripheral_reg->u32;
// current_reg_value will be 0x0000AAAA (assuming the higher bits were 0)
```

**Important Points to Remember:**
*   **Only One Active Member:** You must keep track of which member is currently valid. Writing to one member and reading from another is undefined behavior or leads to data interpretation based on the written value.
*   **Size of the Union:** The size of a union is the size of its largest member.
*   **`volatile` for Hardware:** When using unions to map to hardware registers, all members that can access that hardware memory should be declared `volatile`.
*   **Type Safety:** Unions bypass C's strong type checking, so they should be used judiciously and with careful documentation.

**Textbook References:**
*   **Fundamentals of Embedded Software with the ARM Cortex M3 by Daniel W. Lewis:** Discusses unions and their applications. (Chapter 6, "Structures and Unions")
*   **Embedded systems with ARM Cortex M Microcontrollers in Assembly and C by Yifeng Zhu:** May cover unions in the context of hardware register access. (Chapter 3, "C Programming for Embedded Systems")

---

## Course Outcome Alignment

*   **CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3)**
    *   This entire module directly addresses CO1 by detailing fixed-width types, booleans, bit manipulation, pointers for MMIO, structures, packed structures, bit fields, and unions – all essential C features in embedded systems. The examples and explanations demonstrate how to *use* these features.
*   **CO2: Explain a programmer’s view of processor architecture (Knowledge Level: K2)**
    *   The discussion of Memory-Mapped I/O, pointer usage, and the `volatile` keyword explains how the CPU interacts with hardware peripherals through memory addresses, providing insight into the programmer's view of the processor's memory interface. The concepts of data types and their bit widths also relate to how the processor handles data.
*   **CO3: Choose between programming at the level of assembly or C as appropriate (Knowledge Level: K3)**
    *   While this module focuses on C, the emphasis on low-level control (bit manipulation, direct memory access) highlights the power of C in embedded systems, often reducing the need for assembly language for routine hardware interaction. Understanding these C features helps in making informed decisions about when C is sufficient and when assembly might still be needed for highly optimized routines.
*   **CO4: Analyze the interfacing of peripherals (Knowledge Level: K4)**
    *   Accessing Memory-Mapped I/O using pointers, manipulating bits in I/O ports, and using structures/bit fields to represent peripheral registers directly relate to analyzing peripheral interfaces. Understanding the register layouts and how to control them via C code is fundamental to peripheral interfacing.

---

## Practice Questions and Answers

**Question 1:**
You are working with a microcontroller where a specific status register is located at memory address `0x40020010`. This register is 8 bits wide, and bit 5 (LSB is bit 0) indicates whether an error condition is active. Write C code to check if an error is active.

**Answer 1:**
```c
#include <stdint.h>

// Define the address of the status register
#define STATUS_REGISTER_ADDRESS 0x40020010

// Define a mask for the error bit (bit 5)
#define ERROR_BIT (1 << 5) // 0b00100000

// Declare a volatile pointer to the status register
volatile uint8_t *status_reg_ptr = (volatile uint8_t *)STATUS_REGISTER_ADDRESS;

// Check for error condition
if (*status_reg_ptr & ERROR_BIT) {
    // Error is active
    // Perform error handling
} else {
    // No error
}
```

**Question 2:**
A configuration register requires setting bits 2 and 3 to `1` and clearing bit 0 to `0`. The register is a `uint16_t` at address `0x50000004`. Write C code to perform these operations.

**Answer 2:**
```c
#include <stdint.h>

// Define the address of the configuration register
#define CONFIG_REG_ADDRESS 0x50000004

// Define masks for bits to set/clear
#define BIT0_MASK (1 << 0) // 0b00000001
#define BIT2_MASK (1 << 2) // 0b00000100
#define BIT3_MASK (1 << 3) // 0b00001000

// Declare a volatile pointer to the configuration register
volatile uint16_t *config_reg_ptr = (volatile uint16_t *)CONFIG_REG_ADDRESS;

// Set bits 2 and 3
*config_reg_ptr |= (BIT2_MASK | BIT3_MASK);

// Clear bit 0
*config_reg_ptr &= ~BIT0_MASK;
```

**Question 3:**
You have a sensor that returns temperature data. The data comes as a `uint32_t` but you need to process it as two `uint16_t` values: the first 16 bits representing temperature and the next 16 bits representing humidity. You want to save memory by declaring a structure to hold this. How would you declare a *packed* structure to represent this data?

**Answer 3:**
```c
#include <stdint.h>

// Packed structure to hold two 16-bit sensor readings
struct SensorDataPacked {
    uint16_t temperature;
    uint16_t humidity;
} __attribute__((packed));
```

**Question 4:**
Consider the following `union`. If you write the 32-bit value `0xAABBCCDD` to `reg_data.dword`, what will be the value of `reg_data.bytes[0]` and `reg_data.bytes[3]` on a typical ARM Cortex-M processor (which is little-endian)?

```c
typedef union {
    uint32_t dword;
    uint8_t bytes[4];
} RegisterData;

RegisterData reg_data;
```

**Answer 4:**
On a little-endian system, the bytes are stored in reverse order of their significance.
*   `reg_data.dword = 0xAABBCCDD;`
*   The least significant byte (`DD`) will be at the lowest address.
*   `reg_data.bytes[0]` will be `0xDD`.
*   `reg_data.bytes[3]` will be `0xAA`.

**Question 5:**
Why is the `volatile` keyword essential when declaring pointers to memory-mapped I/O registers?

**Answer 5:**
The `volatile` keyword instructs the compiler that the value of the variable at that memory location can change at any time due to external factors (hardware, interrupts, etc.) without any action from the current code's sequence of operations. Without `volatile`, the compiler might optimize away reads or writes to that location, assuming the value remains constant or has already been read/written, leading to incorrect hardware interaction, race conditions, or missed updates.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
