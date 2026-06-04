---
title: "ASCII to Decimal "
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS LAB"
module: "Module 9: Demo experiment using 8051 Microcontroller programming."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36500"
status: "completed"
scrapedAt: "2026-05-23T16:23:14.950Z"
---
# MICROPROCESSORS AND EMBEDDED SYSTEMS LAB: Module 9 - Demo Experiment: ASCII to Decimal Conversion using 8051 Microcontroller

## Topic: ASCII to Decimal Conversion

This module focuses on a practical demonstration of 8051 microcontroller programming by implementing an ASCII to Decimal conversion routine. This is a fundamental operation in many embedded systems, especially when dealing with user input from serial interfaces, keypads, or other character-based sources.

### Learning Outcomes:

Upon successful completion of this module, you will be able to:

*   Understand the concept of ASCII representation of characters.
*   Develop an 8051 Assembly Language Program (ALP) to convert an ASCII-represented decimal digit to its equivalent binary (decimal) value.
*   Develop an embedded C program to achieve the same ASCII to Decimal conversion.
*   Interface the 8051 microcontroller with peripherals to input ASCII characters for conversion.
*   Analyze the process of character-to-numeric conversion within embedded systems.
*   Debug and verify the functionality of the ASCII to Decimal conversion code on an 8051 development board.

### 1. Introduction to ASCII and Decimal Conversion

#### 1.1 What is ASCII?

*   **ASCII (American Standard Code for Information Interchange)** is a character encoding standard. It assigns a unique 7-bit or 8-bit binary value to each letter, number, punctuation mark, and control character.
*   For our purpose, we are concerned with the ASCII representation of decimal digits '0' through '9'.

#### 1.2 ASCII Representation of Decimal Digits

| Decimal Digit | ASCII Character | Hexadecimal Value | Binary Value |
| :------------ | :-------------- | :---------------- | :----------- |
| 0             | '0'             | 30H               | 0011 0000B   |
| 1             | '1'             | 31H               | 0011 0001B   |
| 2             | '2'             | 32H               | 0011 0010B   |
| 3             | '3'             | 33H               | 0011 0011B   |
| 4             | '4'             | 34H               | 0011 0100B   |
| 5             | '5'             | 35H               | 0011 0101B   |
| 6             | '6'             | 36H               | 0011 0110B   |
| 7             | '7'             | 37H               | 0011 0111B   |
| 8             | '8'             | 38H               | 0011 1000B   |
| 9             | '9'             | 39H               | 0011 1001B   |

**Key Observation:** Notice that the ASCII values for digits '0' through '9' are contiguous. They all start with the binary pattern `0011` (which is 3 in hexadecimal). The lower 4 bits represent the actual decimal value.

#### 1.3 The Conversion Logic

To convert an ASCII character representing a decimal digit to its actual numeric (decimal) value, we need to remove the "ASCII offset." This offset is the value `30H` (or `0011 0000B`).

**Conversion Formula:**

`Numeric Value = ASCII Character - ASCII Offset (30H)`

*   **Example 1:** Convert '5' to its decimal value.
    *   ASCII of '5' is 35H.
    *   Numeric value = 35H - 30H = 05H. (Which is 5 in decimal).

*   **Example 2:** Convert '9' to its decimal value.
    *   ASCII of '9' is 39H.
    *   Numeric value = 39H - 30H = 09H. (Which is 9 in decimal).

### 2. 8051 Assembly Language Program (ALP) for ASCII to Decimal Conversion

This section demonstrates how to implement the conversion logic using the 8051 instruction set. This aligns with **CO1: Develop and execute ALP programs for solving arithmetic and logical problems using microcontroller (Knowledge Level: K3)**.

#### 2.1 Algorithm

1.  Load the ASCII character into an 8051 register (e.g., A).
2.  Subtract the ASCII offset `30H` from the register.
3.  The result in the register is the decimal equivalent.

#### 2.2 ALP Example

```assembly
;-------------------------------------------------------------------------------
; Program: ASCII_TO_DECIMAL_CONVERSION
; Description: Converts an ASCII digit to its decimal equivalent.
; Input: ASCII digit in accumulator (A)
; Output: Decimal value in accumulator (A)
;-------------------------------------------------------------------------------

        ORG 0000H       ; Start address of the program

START:
        MOV A, #'5'     ; Load ASCII character '5' into accumulator
                        ; Alternatively, load from a memory location:
                        ; MOV A, [MEM_LOCATION]

        SUBB A, #'0'    ; Subtract the ASCII value of '0' (30H) from A.
                        ; SUBB is used to account for potential borrowed value
                        ; if we were subtracting a larger number, but here
                        ; SUBB A, #30H would also work. Using #'0' is more readable.

        ; Now, the accumulator (A) contains the decimal value of the digit.
        ; For '5', A will contain 05H.

        ; --- Further processing or output can be done here ---
        ; Example: Store the result in internal RAM
        MOV 30H, A      ; Store the decimal value at RAM location 30H

        SJMP $          ; Infinite loop to halt execution

        END
```

**Explanation of Instructions:**

*   `ORG 0000H`: Sets the program origin to memory address `0000H`.
*   `MOV A, #'5'`: Loads the ASCII representation of the character '5' into the Accumulator register (A). The assembler automatically converts `'5'` to its ASCII value `35H`.
*   `SUBB A, #'0'`: Subtracts the ASCII value of '0' (`30H`) from the Accumulator. The `SUBB` instruction (Subtract with Borrow) is often preferred in subtraction routines, even if no borrow is expected, as it can handle more complex scenarios. In this simple case, `SUB A, #'0'` would also work correctly. The result of the subtraction (e.g., `35H - 30H = 05H`) is stored back in the Accumulator.
*   `MOV 30H, A`: This is an example of storing the converted decimal value into an internal RAM location for later use. `30H` is a typical RAM address.
*   `SJMP $`: This creates an infinite loop, effectively stopping the program execution after the conversion.

**Incorporating Textbook Content:**

*   **Kenneth Ayala's "The 8051 Microcontroller":** Ayala extensively covers the 8051 instruction set, including arithmetic instructions like `SUBB`. He emphasizes the importance of understanding memory organization (internal RAM, ROM) and register usage for efficient programming. The concept of immediate data addressing (`#'5'`, `#30H`) is also clearly explained.
*   **R. Lyla B. Das's "Microprocessors and Microcontrollers":** Das likely provides examples of character manipulation and data conversion, highlighting the difference between ASCII character codes and their numerical equivalents.

#### 2.3 Practice Question (ALP)

**Question:** Write an 8051 ALP to convert the ASCII character '7' to its decimal equivalent and store the result in RAM location `40H`.

**Answer:**

```assembly
        ORG 0000H

START:
        MOV A, #'7'     ; Load ASCII character '7'
        SUBB A, #'0'    ; Convert to decimal (A = 07H)
        MOV 40H, A      ; Store the result in RAM location 40H

        SJMP $          ; Infinite loop

        END
```

### 3. Embedded C Programming for ASCII to Decimal Conversion

This section demonstrates how to achieve the same conversion using embedded C, aligning with **CO2: Develop embedded C programming using instruction sets of 8051 (Knowledge Level: K3)**. We will use a common C compiler for the 8051, such as Keil C or SDCC.

#### 3.1 Algorithm

1.  Declare a variable to hold the ASCII character.
2.  Declare a variable to hold the decimal result.
3.  Assign the ASCII character to the first variable.
4.  Perform the subtraction `ascii_char - '0'` and store the result in the decimal variable.

#### 3.2 Embedded C Example (Keil C Syntax)

```c
/*-----------------------------------------------------------------------------
 * Program: ascii_to_decimal_conversion.c
 * Description: Converts an ASCII digit to its decimal equivalent using Embedded C.
 * Input: ASCII digit is hardcoded.
 * Output: Decimal value is stored in a variable.
 *---------------------------------------------------------------------------*/

#include <reg51.h> // Include register definitions for 8051

// Define a type for unsigned characters, often used for ASCII
typedef unsigned char uint8_t;

void main(void) {
    uint8_t ascii_digit;
    uint8_t decimal_value;

    // --- Input Phase ---
    ascii_digit = '8'; // Load ASCII character '8'
                       // In a real system, this would come from a port,
                       // UART, or keypad.

    // --- Conversion Phase ---
    // Subtract the ASCII value of '0' to get the decimal equivalent.
    decimal_value = ascii_digit - '0'; // '8' (38H) - '0' (30H) = 8 (08H)

    // --- Output/Processing Phase ---
    // The decimal_value now holds the numeric representation (0-9).
    // You can now use this variable for calculations, display, etc.
    // For example, send it over UART or display on an LCD.

    // In this demo, we'll just keep the value in decimal_value.
    // If you were using a debugger, you could inspect decimal_value.

    // Example: Store in a specific RAM location (using absolute addressing if supported by compiler)
    // *((uint8_t volatile *)0x30) = decimal_value; // Storing at RAM address 30H

    while (1) {
        // Infinite loop to keep the program running
    }
}
```

**Explanation of Code:**

*   `#include <reg51.h>`: This line includes the header file that defines the special function registers (SFRs) and bit addresses for the 8051 microcontroller.
*   `typedef unsigned char uint8_t;`: This creates a more descriptive alias for `unsigned char`, which is typically used for byte-sized data like ASCII characters.
*   `void main(void)`: The main function where program execution begins.
*   `uint8_t ascii_digit;`: Declares an unsigned 8-bit integer variable to hold the ASCII character.
*   `uint8_t decimal_value;`: Declares an unsigned 8-bit integer variable to hold the converted decimal value.
*   `ascii_digit = '8';`: Assigns the ASCII character '8' to the `ascii_digit` variable. The C compiler translates this to the corresponding ASCII hex value (`38H`).
*   `decimal_value = ascii_digit - '0';`: This is the core conversion. The C compiler understands that `'0'` represents the ASCII value of the character '0' (`30H`). It performs the subtraction, resulting in the decimal value.
*   `while (1)`: An infinite loop to prevent the program from exiting.

**Incorporating Textbook Content:**

*   **Kenneth Ayala's "The 8051 Microcontroller":** While Ayala's primary focus is on ALP, he may touch upon C programming as an alternative or advanced topic. He would likely highlight the underlying machine code generated by the C compiler and how it maps to 8051 instructions.
*   **Muhammad Ali Mazidi's "The 8051 Microcontroller and Embedded Systems":** Mazidi's book is known for its strong coverage of both ALP and embedded C. He would likely provide numerous examples of C code for various tasks, including character manipulation and conversion, and explain the mapping between C constructs and 8051 assembly instructions.

#### 3.3 Practice Question (Embedded C)

**Question:** Write an embedded C code snippet that takes an ASCII character representing a digit from port `P1` (assuming the character is already placed there) and converts it to its decimal value, storing the result in a variable named `result`.

**Answer:**

```c
#include <reg51.h>

typedef unsigned char uint8_t;

void main(void) {
    uint8_t ascii_input;
    uint8_t result;

    // Assuming the ASCII character is already on Port 1
    ascii_input = P1; // Read the ASCII character from Port 1

    // Convert ASCII to decimal
    result = ascii_input - '0';

    // The 'result' variable now holds the decimal value.
    // You can then output 'result' to another port, serial, etc.

    while (1);
}
```

### 4. Interfacing and Demonstration Experiment

This section addresses **CO3: Examine circuits for interfacing processor with various peripheral devices (Knowledge Level: K4)** and **CO4: Design a microcontroller based system with the help of various interfacing devices (Knowledge Level: K6)**.

#### 4.1 Required Hardware

*   8051 Microcontroller Development Board (e.g., based on AT89S52, P89V51RD2)
*   Power Supply
*   USB-to-Serial Converter (if using UART for input/output)
*   Keypad (Optional, for interactive input)
*   LCD Display (Optional, for outputting the result)
*   Jumper Wires
*   Computer with an IDE (e.g., Keil uVision, SDCC with a suitable front-end)

#### 4.2 Interfacing Options for Inputting ASCII Characters

1.  **Hardcoding in Code:** As shown in the examples above, the ASCII character can be directly embedded in the program. This is the simplest for demonstration.
2.  **Input via Port Pins:** An external device (e.g., another microcontroller, DIP switches) can place the ASCII character on one of the 8051's input ports (like P1, P2, P3). The program then reads from this port.
3.  **Input via UART (Serial Communication):** This is a very common method. An ASCII character can be typed on a computer's terminal program and sent to the 8051's UART. The 8051 receives the character via its RXD pin.
    *   **Circuit:** Connect the TXD pin of the USB-to-Serial converter to the RXD pin of the 8051. Connect the RXD pin of the USB-to-Serial converter to the TXD pin of the 8051. Ensure proper grounding.
    *   **Programming:** Requires configuring the 8051's serial port (SBUF, SCON registers) and writing interrupt service routines (ISRs) or polling routines to receive characters.
4.  **Input via Keypad:** A keypad can be interfaced with the 8051. A key press generates a specific ASCII code (or a row/column combination that can be translated to an ASCII code). This involves multiplexing and scanning techniques.

#### 4.3 Interfacing Options for Outputting the Decimal Value

1.  **Store in Internal RAM:** As demonstrated, the result can be stored in internal RAM and inspected using a debugger.
2.  **Output via Port Pins:** The decimal value (which is typically 0-9, fitting in 4 bits) can be sent to output port pins. These pins can then drive LEDs (each bit illuminating a specific LED to represent the number) or be connected to an external display.
3.  **Output via LCD Display:** The decimal value can be converted to its ASCII representation again (by adding `30H`) and then sent to an LCD module for a human-readable display. This is a common output method.
4.  **Output via UART:** The decimal value can be converted to its ASCII representation and transmitted serially using the 8051's UART.

#### 4.4 Demonstration Procedure (Example using UART Input/Output)

1.  **Hardware Setup:**
    *   Connect the 8051 development board to your computer via the USB-to-Serial converter.
    *   Ensure the board is powered on.
2.  **Software Setup:**
    *   Open your 8051 IDE (e.g., Keil uVision).
    *   Create a new project and select your 8051 variant.
    *   Write the embedded C or ALP code to receive a character from UART, convert it to decimal, and send the decimal value back via UART.
    *   **Example C Code Snippet (Conceptual for UART):**
        ```c
        #include <reg51.h>

        typedef unsigned char uint8_t;

        // Function to initialize UART (requires detailed configuration of SCON, TMOD, etc.)
        void UART_Init(void);
        // Function to receive a byte via UART
        uint8_t UART_Receive(void);
        // Function to transmit a byte via UART
        void UART_Transmit(uint8_t byte);

        void main(void) {
            uint8_t received_char;
            uint8_t decimal_result;

            UART_Init(); // Initialize serial communication

            UART_Transmit('P'); // Indicate ready to receive
            UART_Transmit('r');
            UART_Transmit('e');
            UART_Transmit('s');
            UART_Transmit('s');
            UART_Transmit(' ');
            UART_Transmit('a');
            UART_Transmit(' ');
            UART_Transmit('d');
            UART_Transmit('i');
            UART_Transmit('g');
            UART_Transmit('i');
            UART_Transmit('t');
            UART_Transmit(':');
            UART_Transmit(' ');

            received_char = UART_Receive(); // Wait for and receive a character

            // Basic validation (optional but good practice)
            if (received_char >= '0' && received_char <= '9') {
                decimal_result = received_char - '0'; // Convert ASCII to decimal

                // Transmit the decimal result (as ASCII)
                UART_Transmit('Y');
                UART_Transmit('o');
                UART_Transmit('u');
                UART_Transmit('r');
                UART_Transmit(' ');
                UART_Transmit('d');
                UART_Transmit('e');
                UART_Transmit('c');
                UART_Transmit('i');
                UART_Transmit('m');
                UART_Transmit('a');
                UART_Transmit('l');
                UART_Transmit(' ');
                UART_Transmit('v');
                UART_Transmit('a');
                UART_Transmit('l');
                UART_Transmit('u');
                UART_Transmit('e');
                UART_Transmit(' ');
                UART_Transmit('i');
                UART_Transmit('s');
                UART_Transmit(':');
                UART_Transmit(' ');
                UART_Transmit(decimal_result + '0'); // Convert back to ASCII for display
                UART_Transmit('\r'); // Carriage return
                UART_Transmit('\n'); // Newline
            } else {
                UART_Transmit('I');
                UART_Transmit('n');
                UART_Transmit('v');
                UART_Transmit('a');
                UART_Transmit('l');
                UART_Transmit('i');
                UART_Transmit('d');
                UART_Transmit(' ');
                UART_Transmit('i');
                UART_Transmit('n');
                UART_Transmit('p');
                UART_Transmit('u');
                UART_Transmit('t');
                UART_Transmit('!');
                UART_Transmit('\r');
                UART_Transmit('\n');
            }


            while (1);
        }

        // --- Implement UART_Init, UART_Receive, UART_Transmit ---
        // These functions would involve configuring SCON, TMOD, TL0/TL1, TH0/TH1
        // and using polling or interrupts to handle serial data.
        // Refer to 8051 datasheets and textbooks for detailed implementation.
        ```
3.  **Compilation and Flashing:**
    *   Compile your C or ALP code.
    *   Use a programmer tool (often integrated into the IDE or a separate utility) to flash the generated `.hex` file onto the 8051 microcontroller on your development board.
4.  **Execution and Verification:**
    *   Open a serial terminal program (e.g., PuTTY, Tera Term, RealTerm) on your computer.
    *   Configure the terminal program to match the 8051's serial port settings (Baud Rate, Data Bits, Parity, Stop Bits – typically 9600 baud, 8 data bits, no parity, 1 stop bit).
    *   Connect the serial terminal to the COM port associated with your USB-to-Serial converter.
    *   The 8051 board should display a prompt (e.g., "Press a digit:").
    *   Type a decimal digit (e.g., '3') into the serial terminal and press Enter.
    *   The 8051 should receive the '3', convert it to the decimal value `03H`, convert `03H` back to ASCII '3', and send it back to the terminal, displaying "Your decimal value is: 3".

#### 4.5 Key Concepts in Interfacing

*   **Port Pin Functionality:** Understanding that port pins can be configured as input or output.
*   **Special Function Registers (SFRs):** Registers like P1, P2, P3, SBUF, SCON, TMOD, etc., are crucial for controlling peripherals and communication.
*   **Timing:** For serial communication (UART), accurate baud rate generation is essential. This involves configuring timer modules.
*   **Interrupts (Optional but Efficient):** Using UART receive interrupts can make the program more efficient, as the CPU doesn't have to continuously poll the SBUF register.

### 5. Importance and Applications

*   **User Input:** Handling numerical input from keypads, touchscreens, or serial consoles.
*   **Data Logging:** Converting sensor readings or data received from external devices into a usable numerical format.
*   **Calculations:** Performing arithmetic operations on numbers that are initially received as ASCII characters.
*   **Displaying Numbers:** Converting internal binary/decimal values back to ASCII for display on LCDs or seven-segment displays.

### 6. Important Points to Remember

*   **ASCII Offset:** The key to conversion is subtracting the ASCII value of '0' (`30H`).
*   **Data Types:** Be mindful of data types when programming in C. `unsigned char` is suitable for single ASCII digits and their decimal equivalents.
*   **Input Source:** The method of inputting the ASCII character (port, UART, keypad) dictates the specific code required for data acquisition.
*   **Output Destination:** Similarly, the destination for the converted decimal value (RAM, port, LCD, UART) determines the output code.
*   **Error Handling:** In real-world applications, you would add checks to ensure the input character is indeed a valid digit ('0'-'9').

### 7. Practice Questions/Exercises

**Question 1 (ALP):**
Write an 8051 ALP that converts the ASCII character '2' to its decimal equivalent. Store the result in RAM location `50H`.

**Answer 1:**
```assembly
        ORG 0000H

START:
        MOV A, #'2'     ; Load ASCII '2'
        SUBB A, #'0'    ; Convert to decimal (A = 02H)
        MOV 50H, A      ; Store in RAM location 50H

        SJMP $          ; Loop

        END
```

**Question 2 (Embedded C):**
Write an embedded C code snippet that reads a character from port `P2`, converts it to decimal if it's a digit, and then sends the resulting decimal value back out via port `P1`. Assume the decimal value will be represented by the lower 4 bits of P1.

**Answer 2:**
```c
#include <reg51.h>

typedef unsigned char uint8_t;

void main(void) {
    uint8_t ascii_input;
    uint8_t decimal_value;

    // Read ASCII character from Port 2
    ascii_input = P2;

    // Check if it's a digit
    if (ascii_input >= '0' && ascii_input <= '9') {
        // Convert ASCII to decimal
        decimal_value = ascii_input - '0'; // Result is 0-9

        // Output the decimal value to Port 1
        P1 = decimal_value;
    } else {
        // If not a digit, perhaps output an error code or 0
        P1 = 0xFF; // Example: Indicate error with all LEDs on
    }

    while (1);
}
```

**Question 3 (Conceptual):**
Explain the difference between the ASCII representation of '5' and its actual binary (decimal) value. How would you convert between them in an 8051 program?

**Answer 3:**
The ASCII representation of '5' is the character `'5'`, which has a hexadecimal value of `35H`. Its actual binary (decimal) value is `05H` (or simply 5).

To convert from ASCII to decimal, you subtract the ASCII value of '0' (`30H`) from the ASCII character.
*   Example: `'5'` (35H) - `'0'` (30H) = `05H` (decimal 5).

To convert from a decimal value back to ASCII, you add the ASCII value of '0' (`30H`) to the decimal value.
*   Example: `05H` (decimal 5) + `'0'` (30H) = `35H` (ASCII '5').

This concludes the study notes for the ASCII to Decimal conversion experiment using the 8051 microcontroller. This fundamental skill is crucial for building interactive and data-processing embedded systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
