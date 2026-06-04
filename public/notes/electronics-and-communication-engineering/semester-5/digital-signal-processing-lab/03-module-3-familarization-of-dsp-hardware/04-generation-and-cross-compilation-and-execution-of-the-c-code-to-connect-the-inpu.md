---
title: "Generation and cross compilation and execution of the C code to connect the input digital 
switches to the output LEDs."
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 3: Familarization of DSP Hardware"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec3d"
status: "completed"
scrapedAt: "2026-05-23T17:56:01.208Z"
---
# DIGITAL SIGNAL PROCESSING LAB - Module 3: Familiarization of DSP Hardware

## Topic: Generation, Cross-Compilation, and Execution of C Code to Connect Input Digital Switches to Output LEDs

### Introduction to the Topic

This lab module focuses on the fundamental interaction between software and hardware in a Digital Signal Processing (DSP) context. We will learn how to write a simple C program that reads the state of input digital switches on the DSP hardware and, based on that state, controls the state of output LEDs. This exercise is crucial for understanding how to interface with the DSP processor's peripherals and to gain hands-on experience with the development workflow.

### Learning Outcomes Covered

*   **Familiarization with DSP Hardware and Interface with Computer (CO3: K2):** This topic directly addresses this course outcome by providing practical experience in interacting with the DSP hardware's I/O ports. You will learn how to map logical operations in C code to physical hardware states.

### Key Concepts and Definitions

1.  **DSP Hardware:** This refers to the specialized microprocessors or integrated circuits designed for performing digital signal processing tasks. They often have dedicated hardware accelerators for common DSP operations like multiplication and accumulation. In this lab, it refers to a specific DSP Development Board (e.g., TMS320C6x DSK, as per Chassaing's book).

2.  **Digital Switches:** These are physical input mechanisms on the DSP hardware that provide a digital signal (either HIGH or LOW, representing 1 or 0) to the processor. They can be simple toggle switches or push buttons.

3.  **LEDs (Light Emitting Diodes):** These are output indicators on the DSP hardware that can be turned ON or OFF based on signals from the processor. They are often used to provide visual feedback on the system's state.

4.  **GPIO (General Purpose Input/Output) Pins:** These are configurable pins on the DSP processor that can be used as either inputs or outputs to interface with external components like switches and LEDs.

5.  **C Programming Language:** A powerful and widely used high-level programming language that is often the preferred language for embedded systems and DSP development due to its efficiency and low-level hardware access capabilities.

6.  **Cross-Compilation:** The process of compiling source code on one system (the host computer, typically running Windows or Linux) for execution on a different system (the target DSP hardware). This is necessary because the DSP board has its own architecture and operating environment.

    *   **Host System:** The computer where you write and compile your code.
    *   **Target System:** The DSP hardware where the compiled code will be executed.
    *   **Cross-Compiler:** A compiler that runs on the host system but generates executable code for the target system.

7.  **DSP Development Environment (IDE):** An Integrated Development Environment (IDE) typically includes a code editor, a compiler, a debugger, and tools for loading code onto the target hardware. For TMS320C6x processors, this is often Code Composer Studio (CCS).

8.  **Memory-Mapped I/O:** A method of accessing hardware peripherals where I/O devices are treated as memory locations. The processor reads from or writes to specific memory addresses to control the peripherals.

9.  **Register:** A small, fast storage location within the DSP processor. Peripheral registers are used to configure and control hardware components like GPIO pins.

### How it Works: Connecting Switches to LEDs

The fundamental idea is to:
1.  **Configure GPIO Pins:** Set specific GPIO pins as inputs for the switches and as outputs for the LEDs.
2.  **Read Switch States:** Periodically read the digital value from the input GPIO pins connected to the switches.
3.  **Control LED States:** Based on the values read from the switches, write corresponding digital values to the output GPIO pins connected to the LEDs.

A common scenario is a direct mapping: if a switch is ON (logic HIGH), the corresponding LED is turned ON; if the switch is OFF (logic LOW), the corresponding LED is turned OFF.

### Development Workflow

The typical workflow for developing and executing code on a DSP board involves these steps:

1.  **Write C Code:** Create a `.c` file containing the program logic.
2.  **Configure Project:** Set up a project in the DSP IDE, specifying the target processor and build settings.
3.  **Cross-Compile:** Use the cross-compiler provided by the IDE to convert the C code into machine code executable by the DSP.
4.  **Link:** The linker combines the compiled object files and necessary libraries to create an executable file (often with a `.out` or `.hex` extension).
5.  **Load onto Target:** Transfer the executable file from the host computer to the DSP board's memory. This is typically done via a debug probe (like an XDS debugger for TI DSPs) or other communication interfaces.
6.  **Execute:** Run the program on the DSP board.
7.  **Debug (if necessary):** Use the debugger to inspect variables, set breakpoints, and identify issues if the program doesn't behave as expected.

### Example Scenario and Code Structure

Let's assume our DSP board has:
*   **Input Switches:** Connected to GPIO pins 0, 1, 2, 3.
*   **Output LEDs:** Connected to GPIO pins 4, 5, 6, 7.

The goal is to have LED `n` reflect the state of switch `n` (where `n` is 0, 1, 2, 3).

#### **Conceptual C Code Structure**

```c
#include <stdio.h> // For standard input/output functions (if needed)
// Include specific header files for DSP board peripherals
// (These will depend on the specific DSP and its SDK)
// Example: #include "c6x.h" for specific TI DSP registers

// Define base addresses for GPIO registers (example, actual addresses vary)
#define GPIO_BASE_ADDRESS 0x18000000 // Hypothetical address

// Define register offsets for configuration and data (example)
#define GPIO_DIRECTION_REG_OFFSET   0x00 // Register to set pin direction (input/output)
#define GPIO_DATA_IN_REG_OFFSET     0x04 // Register to read input data
#define GPIO_DATA_OUT_REG_OFFSET    0x08 // Register to write output data

// Define bit masks for individual pins
#define SWITCH_0 (1 << 0)
#define SWITCH_1 (1 << 1)
#define SWITCH_2 (1 << 2)
#define SWITCH_3 (1 << 3)

#define LED_0 (1 << 4)
#define LED_1 (1 << 5)
#define LED_2 (1 << 6)
#define LED_3 (1 << 7)

// Function to initialize GPIO
void initialize_gpio() {
    // Configure the lower 4 pins (0-3) as inputs
    // Assume a GPIO_DIRECTION_REG where 0 = input, 1 = output
    // We need to write a value where bits 0-3 are 0
    // And bits 4-7 are 1 (for LEDs)
    // This requires understanding the specific register's behavior.
    // For simplicity, let's assume a register where you set bits for output.
    // A more common approach is to set a direction register.

    // Example: Configure pins 0-3 as input, pins 4-7 as output
    // Let's assume a direction register where a bit set to 0 means input, 1 means output.
    unsigned int direction_config = 0x000000F0; // Pins 4-7 set as output

    // Pointer to the direction register
    volatile unsigned int *gpio_direction_ptr = (volatile unsigned int *)(GPIO_BASE_ADDRESS + GPIO_DIRECTION_REG_OFFSET);

    // Write the configuration to the direction register
    *gpio_direction_ptr = direction_config;

    // Ensure all LEDs are initially off
    volatile unsigned int *gpio_data_out_ptr = (volatile unsigned int *)(GPIO_BASE_ADDRESS + GPIO_DATA_OUT_REG_OFFSET);
    *gpio_data_out_ptr = 0x00; // Turn all LEDs off
}

// Main program loop
int main() {
    // Initialize the GPIO pins
    initialize_gpio();

    // Infinite loop to continuously monitor switches and control LEDs
    while (1) {
        // Pointer to the input data register
        volatile unsigned int *gpio_data_in_ptr = (volatile unsigned int *)(GPIO_BASE_ADDRESS + GPIO_DATA_IN_REG_OFFSET);

        // Read the state of the input switches
        unsigned int switch_states = *gpio_data_in_ptr;

        // Extract the state of the first 4 switches
        unsigned int switches_0_to_3 = (switch_states & 0x0000000F); // Mask to get only the first 4 bits

        // Prepare the value to write to the output LEDs
        // We want LED n to reflect switch n.
        // Since switches are on pins 0-3 and LEDs on 4-7, we need to shift the switch states.
        unsigned int led_states = (switches_0_to_3 << 4); // Shift switch states to the LED pin positions

        // Pointer to the output data register
        volatile unsigned int *gpio_data_out_ptr = (volatile unsigned int *)(GPIO_BASE_ADDRESS + GPIO_DATA_OUT_REG_OFFSET);

        // Write the calculated states to the output LEDs
        *gpio_data_out_ptr = led_states;

        // Optional: Add a small delay to avoid excessive polling, if the DSP is very fast
        // (The need for this depends on the clock speed and the specific task)
        // For example, a busy-wait loop or a hardware timer delay could be used.
    }

    return 0; // Should not be reached in this infinite loop
}
```

**Explanation of the Example Code:**

*   **Header Files:** We include necessary headers. `stdio.h` is standard. The crucial part is including the DSP-specific header file that defines the memory addresses and bit definitions for peripherals.
*   **Memory-Mapped I/O:** We define base addresses and register offsets. `volatile` is used to tell the compiler that the values at these addresses can change unexpectedly, preventing the compiler from optimizing away reads/writes.
*   **Pin Configuration:** The `initialize_gpio` function sets up the GPIO pins. This involves writing specific values to configuration registers. The exact bit manipulation depends heavily on the DSP's GPIO controller. In the example, we assume a direction register where bits control input/output.
*   **Reading Input:** The `main` loop continuously reads from the input data register. A bitmask (`0x0000000F`) is used to isolate the bits corresponding to the switches.
*   **Controlling Output:** The read switch states are shifted (`<< 4`) to align them with the LED output pins. These shifted values are then written to the output data register, controlling the LEDs.
*   **Infinite Loop:** The `while(1)` loop ensures the program continuously monitors the switches and updates the LEDs.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### Textbooks and Reference Material Integration

*   **"DSP applications using C and the TMS320C6x DSK" by Chassaing:** This book is **highly relevant** to this topic. It provides in-depth details on the TMS320C6x architecture, its peripherals, register definitions, and how to program them using C. You would refer to this book for:
    *   Specific memory-mapped addresses of GPIO registers for your DSP board.
    *   The exact bit configurations required for setting pin directions (input/output).
    *   Examples of how to use the CCS IDE for cross-compilation and debugging.
    *   Understanding the C6x instruction set and how it relates to efficient code generation.

*   **"Digital Signal Processing using Matlab" by Ingle & Proakis:** While primarily focused on MATLAB, this book provides a strong theoretical foundation for DSP concepts. Understanding signal generation and manipulation (CO1, CO2) from this book complements the hardware interaction. It helps in understanding *what* kind of signals you might want to process and *why* controlling hardware peripherals is important for real-world DSP.

*   **"Think DSP: Digital Signal Processing using Python" by Downey:** This book, using Python, offers a conceptual understanding of DSP. While the language is different, the core DSP principles remain the same. It can help in understanding the logic behind processing signals, which can be applied to the C code you write for the DSP hardware.

*   **"Discrete-Time Signal Processing" by Oppenheim & Schafer:** This is a foundational text for DSP theory. Understanding the concepts of sampling, quantization, and filtering from this reference will provide the context for *why* we need to interface with hardware to acquire real-world signals or generate analog outputs based on digital processing.

### Tools and Environment

*   **DSP Development Board:** (e.g., Texas Instruments TMS320C6713 DSK, C6455 DSK, etc.)
*   **Host Computer:** Running Windows or Linux.
*   **Integrated Development Environment (IDE):** Typically **Code Composer Studio (CCS)** for TI DSPs.
*   **Debug Probe:** (e.g., XDS560, XDS100) for connecting the host computer to the DSP board.
*   **C Compiler Toolchain:** Bundled with the IDE.

### Practical Steps and Exercises

**Objective:** Write a C program that makes an LED blink at a constant rate.

**Pre-requisites:**
*   Familiarity with the chosen DSP board's documentation.
*   Installation of the appropriate IDE and drivers.
*   Connection of the DSP board to the host computer via the debug probe.

**Steps:**

1.  **Understand your DSP's GPIO:** Consult the DSP's Technical Reference Manual or user guide. Identify:
    *   The base address of the GPIO module.
    *   The register offsets for direction control, input data, and output data.
    *   How to set a pin as an output.
    *   The bit positions corresponding to the LEDs.
2.  **Create a New Project in CCS:**
    *   Start CCS.
    *   Create a new "CCS Project" for your target DSP.
    *   Choose a template if available, or start with an empty project.
3.  **Write the C Code:** Implement a program similar to the conceptual code above, but tailored to your specific DSP's register addresses and bit configurations. For blinking an LED, you'll need to:
    *   Initialize a GPIO pin as an output.
    *   Enter an infinite loop.
    *   Inside the loop:
        *   Turn the LED ON (write a '1' to its corresponding output bit).
        *   Implement a delay (e.g., a busy-wait loop for a certain number of iterations).
        *   Turn the LED OFF (write a '0' to its corresponding output bit).
        *   Implement another delay.
4.  **Configure Project Settings:**
    *   Ensure the correct target processor is selected.
    *   Verify compiler settings.
5.  **Build the Project:** Compile and link the code. Check for any errors or warnings.
6.  **Load and Run:**
    *   Connect the DSP board to your computer.
    *   In CCS, "Debug" the project. This will load the executable onto the DSP board.
    *   Once loaded, "Run" the program.
7.  **Observe:** The designated LED should start blinking.

**Exercise 1: Direct Switch-to-LED Mapping**

**Problem:** Write a C program for your DSP board that maps the state of the first input switch (e.g., Switch 0) to the first output LED (e.g., LED 0). If Switch 0 is pressed (ON), LED 0 should be ON. If Switch 0 is released (OFF), LED 0 should be OFF.

**Solution Outline:**

1.  **Initialization:** Configure Switch 0's GPIO pin as input and LED 0's GPIO pin as output.
2.  **Loop:**
    *   Read the state of Switch 0's GPIO pin.
    *   If the switch pin is HIGH, write a HIGH value to LED 0's GPIO pin.
    *   If the switch pin is LOW, write a LOW value to LED 0's GPIO pin.
    *   You can achieve this directly: `*gpio_led_ptr = (*gpio_switch_ptr & SWITCH_0_MASK) << SHIFT_AMOUNT;` where `SHIFT_AMOUNT` is the difference in pin numbers.

**Practice Question 1:**

How does the `volatile` keyword affect the generated machine code when accessing peripheral registers?

**Answer 1:**
The `volatile` keyword instructs the compiler that the value of the variable can change at any time without any action on the part of the compiler. This prevents the compiler from performing certain optimizations, such as:
*   Caching the variable's value in a register.
*   Reordering read/write operations to the variable.
When dealing with hardware registers, `volatile` ensures that each read and write operation accesses the actual hardware register, not a cached copy, guaranteeing that the program's interaction with the hardware is as intended.

**Practice Question 2:**

You have a DSP board where GPIO pins 8 through 11 are connected to four LEDs. You want to turn ON LED 9 when a specific bit (bit 5) in an input status register is HIGH. What C code snippet would you use, assuming `INPUT_STATUS_REG_ADDRESS` is the memory address of the status register and `LED9_OUTPUT_REG_ADDRESS` is the address to control the LEDs? Assume the output register controls LEDs 8-11, where bit 8 controls LED 8, bit 9 controls LED 9, etc.

**Solution Outline 2:**

```c
// Assume these are correctly defined addresses and masks
#define INPUT_STATUS_REG_ADDRESS 0xABCD0000 // Hypothetical address
#define LED9_OUTPUT_REG_ADDRESS  0xABCD0010 // Hypothetical address
#define SWITCH_BIT_5 (1 << 5) // Mask for bit 5
#define LED9_BIT (1 << 9)     // Mask for LED 9 (assuming pin 9)

volatile unsigned int *status_reg = (volatile unsigned int *)INPUT_STATUS_REG_ADDRESS;
volatile unsigned int *led_reg = (volatile unsigned int *)LED9_OUTPUT_REG_ADDRESS;

// Read the status register
unsigned int current_status = *status_reg;

// Check if bit 5 is set
if (current_status & SWITCH_BIT_5) {
    // If bit 5 is HIGH, turn ON LED 9
    *led_reg |= LED9_BIT; // Use bitwise OR to set the specific LED bit
} else {
    // If bit 5 is LOW, turn OFF LED 9
    *led_reg &= ~LED9_BIT; // Use bitwise AND with the complement to clear the specific LED bit
}
```

**Explanation of Solution 2:**
*   We use `volatile` pointers to ensure direct hardware access.
*   We read the `status_reg`.
*   We use a bitwise AND (`&`) with `SWITCH_BIT_5` to check if bit 5 is set.
*   If it's set, we use a bitwise OR (`|=`) with `LED9_BIT` to turn ON LED 9 without affecting other LEDs.
*   If it's not set, we use a bitwise AND with the complement (`&= ~`) of `LED9_BIT` to turn OFF LED 9 without affecting other LEDs.

### Important Points to Remember

*   **DSP Documentation is Key:** Always refer to the specific documentation for your DSP hardware and IDE. Register addresses, bit fields, and peripheral configurations vary significantly between different DSP families and manufacturers.
*   **`volatile` Keyword:** Crucial for correct hardware interaction to prevent unwanted compiler optimizations.
*   **Cross-Compilation Setup:** Ensure your IDE is correctly configured for your target DSP processor.
*   **Debug Probe Functionality:** Understand how to use the debug probe to load and run code, and how to use the debugger's features (breakpoints, watch windows) for troubleshooting.
*   **Bit Manipulation:** Proficiency in bitwise operators (`&`, `|`, `^`, `~`, `<<`, `>>`) is essential for working with hardware registers.
*   **Memory Mapping:** Be aware that peripherals are accessed through memory addresses.

### Connecting to Course Outcomes

*   **CO3: Familiarize with DSP hardware and interface with Computer (Knowledge Level: K2):** This entire lab topic is directly aligned with CO3. By writing, compiling, and executing C code that controls LEDs based on switch inputs, you are actively interacting with the DSP hardware's I/O capabilities and learning the essential steps for interfacing it with your development computer. The understanding of registers, pin configurations, and the development workflow all contribute to this outcome.

This module provides the foundational skills needed to move on to more complex DSP tasks, such as acquiring data from analog-to-digital converters (ADCs) or generating analog signals via digital-to-analog converters (DACs), which often involve similar GPIO or peripheral control mechanisms.