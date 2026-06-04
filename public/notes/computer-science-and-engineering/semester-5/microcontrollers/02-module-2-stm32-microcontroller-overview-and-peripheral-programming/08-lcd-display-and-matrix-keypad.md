---
title: "LCD Display, and Matrix Keypad"
subject: "MICROCONTROLLERS"
module: "Module 2: STM32 Microcontroller Overview and Peripheral Programming:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b61b"
status: "completed"
scrapedAt: "2026-05-20T16:48:32.645Z"
---
## MICROCONTROLLERS - Module 2: LCD Display & Matrix Keypad (STM32)

These notes cover the LCD Display and Matrix Keypad functionalities within the context of STM32 microcontroller programming.

**Learning Outcomes:**

*   Understand the principles of operation of LCD displays and Matrix Keypads.
*   Interface an LCD display and a Matrix Keypad with an STM32 microcontroller.
*   Develop STM32 code to display text and data on an LCD.
*   Develop STM32 code to read key presses from a Matrix Keypad.
*   Learn about relevant GPIO configuration for both devices.
*   Understand the timing considerations for LCD communication.
*   Implement debouncing techniques for the Matrix Keypad.

---

**1. LCD Display**

**1.1 Key Concepts and Definitions:**

*   **LCD (Liquid Crystal Display):** A flat-panel display technology using liquid crystals to modulate light.
*   **Character LCD:** Displays predefined characters (alphanumeric and some symbols) rather than arbitrary pixels.  Most commonly 16x2 (16 characters, 2 lines).
*   **GPIO (General Purpose Input/Output):** Pins on the microcontroller used to communicate with external devices.
*   **Data Pins (D0-D7):** Used to send data (characters, commands) to the LCD.  Often used in 4-bit mode to save pins.
*   **Control Pins:**
    *   **RS (Register Select):** Selects whether the data being sent is a command or character data. (RS = 0: Command, RS = 1: Data)
    *   **RW (Read/Write):** Selects whether to read from or write to the LCD.  (RW = 0: Write, RW = 1: Read).  Usually tied low (write only).
    *   **EN (Enable):** A pulse on this pin enables data transfer.  A high-to-low or low-to-high pulse usually triggers the LCD controller to latch the data.
*   **Initialization:**  A specific sequence of commands sent to the LCD upon power-up to configure its operating mode (e.g., 4-bit or 8-bit mode, number of lines, font).
*   **Data Sheet:** Contains information about the specific LCD model, including pinout, command set, timing diagrams, and electrical characteristics.  Crucial for successful interfacing.

**1.2 Principles of Operation:**

*   **Writing to the LCD:** The microcontroller sets the desired data (command or character) on the data pins.  It then sets the RS pin to indicate whether it's a command or data. The EN pin is pulsed to latch the data into the LCD controller.
*   **Command Set:** The LCD controller responds to a set of commands to control its operation (e.g., clear display, move cursor, set display mode). These commands are typically represented by numerical values (e.g., `0x01` for clear display).
*   **Character Encoding:**  Characters are represented by their ASCII values.  When you send the ASCII value of 'A' (0x41) to the LCD, it displays the character 'A'.
*   **Timing Considerations:**  The LCD requires specific timing for each operation (e.g., setup time, hold time, pulse width). These timing requirements must be met to ensure reliable communication.  Refer to the LCD's datasheet.

**1.3 Interfacing with STM32:**

1.  **Hardware Connections:**
    *   Connect the LCD data pins (D0-D7 or D4-D7 if using 4-bit mode) to GPIO pins on the STM32.
    *   Connect the LCD control pins (RS, RW, EN) to GPIO pins on the STM32.
    *   Connect the LCD VSS (ground) and VDD (power supply, typically 5V or 3.3V) to the appropriate power rails.
    *   Connect the LCD's backlight (if present) to a power supply with a suitable current limiting resistor.  Often an LED.
2.  **GPIO Configuration:**
    *   Configure the GPIO pins connected to the LCD as *output* pins.
    *   Set the GPIO pins to *push-pull* output mode (the standard for digital signals).
    *   Consider using *pull-up* or *pull-down* resistors if needed, but typically not required for LCD data pins.
3.  **Software Implementation:**
    *   **Initialization Sequence:** Implement the initialization sequence as specified in the LCD datasheet.  This is typically done once at the beginning of the program.
    *   **Command Writing Function:** Create a function to send commands to the LCD. This function should:
        *   Set the RS pin LOW.
        *   Set the data pins to the command value.
        *   Pulse the EN pin.
        *   Add a small delay (microseconds) to meet the LCD's timing requirements.
    *   **Data Writing Function:** Create a function to send character data to the LCD.  This function should:
        *   Set the RS pin HIGH.
        *   Set the data pins to the character data.
        *   Pulse the EN pin.
        *   Add a small delay (microseconds) to meet the LCD's timing requirements.
    *   **String Printing Function:** Create a function to print a string of characters to the LCD.  This function should iterate through the string and call the data writing function for each character.

**1.4 Example STM32 Code (Illustrative - using 4-bit mode with HAL library):**

```c
#include "stm32f4xx_hal.h" // Include the HAL library

// Define GPIO pins connected to the LCD
#define LCD_RS_Pin GPIO_PIN_0
#define LCD_EN_Pin GPIO_PIN_1
#define LCD_D4_Pin GPIO_PIN_2
#define LCD_D5_Pin GPIO_PIN_3
#define LCD_D6_Pin GPIO_PIN_4
#define LCD_D7_Pin GPIO_PIN_5

#define LCD_RS_GPIO_Port GPIOA
#define LCD_EN_GPIO_Port GPIOA
#define LCD_D4_GPIO_Port GPIOA
#define LCD_D5_GPIO_Port GPIOA
#define LCD_D6_GPIO_Port GPIOA
#define LCD_D7_GPIO_Port GPIOA


void LCD_Delay(uint32_t time) {
    HAL_Delay(time); // Simple delay function (adjust as needed)
}

void LCD_SendNibble(uint8_t nibble) {
    HAL_GPIO_WritePin(LCD_D4_GPIO_Port, LCD_D4_Pin, (nibble >> 0) & 0x01);
    HAL_GPIO_WritePin(LCD_D5_GPIO_Port, LCD_D5_Pin, (nibble >> 1) & 0x01);
    HAL_GPIO_WritePin(LCD_D6_GPIO_Port, LCD_D6_Pin, (nibble >> 2) & 0x01);
    HAL_GPIO_WritePin(LCD_D7_GPIO_Port, LCD_D7_Pin, (nibble >> 3) & 0x01);

    HAL_GPIO_WritePin(LCD_EN_GPIO_Port, LCD_EN_Pin, GPIO_PIN_SET);
    LCD_Delay(1);
    HAL_GPIO_WritePin(LCD_EN_GPIO_Port, LCD_EN_Pin, GPIO_PIN_RESET);
    LCD_Delay(1);
}

void LCD_SendCommand(uint8_t command) {
    HAL_GPIO_WritePin(LCD_RS_GPIO_Port, LCD_RS_Pin, GPIO_PIN_RESET); // RS = 0 for command
    LCD_SendNibble(command >> 4);   // Send upper nibble
    LCD_SendNibble(command & 0x0F); // Send lower nibble
}

void LCD_SendData(uint8_t data) {
    HAL_GPIO_WritePin(LCD_RS_GPIO_Port, LCD_RS_Pin, GPIO_PIN_SET);   // RS = 1 for data
    LCD_SendNibble(data >> 4);    // Send upper nibble
    LCD_SendNibble(data & 0x0F);  // Send lower nibble
}

void LCD_Init() {
    // Initialization sequence (important!)
    LCD_Delay(15);                   // Wait > 15ms after power-up
    LCD_SendCommand(0x30);          // Initialization command 1
    LCD_Delay(5);                    // Wait > 4.1ms
    LCD_SendCommand(0x30);          // Initialization command 2
    LCD_Delay(1);                    // Wait > 100us
    LCD_SendCommand(0x30);          // Initialization command 3
    LCD_SendCommand(0x20);          // 4-bit mode

    LCD_SendCommand(0x28);          // Function set: 4-bit, 2 lines, 5x8 font
    LCD_SendCommand(0x0C);          // Display control: Display on, cursor off, blink off
    LCD_SendCommand(0x06);          // Entry mode set: Increment cursor, no shift
    LCD_SendCommand(0x01);          // Clear display
    LCD_Delay(2);                    // Wait > 1.53ms
}

void LCD_PrintString(char *str) {
    while (*str) {
        LCD_SendData(*str++);
    }
}

void LCD_SetCursor(uint8_t row, uint8_t col) {
    uint8_t address;

    switch (row) {
        case 0:
            address = 0x00 + col;
            break;
        case 1:
            address = 0x40 + col;
            break;
        default:
            address = 0x00; // Default to first line, first column
    }
    LCD_SendCommand(0x80 | address); // Set DDRAM address
}


int main(void) {
    // ... (Initialization of STM32 clock, GPIO, etc.) ...

    // Initialize GPIO pins connected to the LCD
    GPIO_InitTypeDef GPIO_InitStruct = {0};

    /* GPIO Ports Clock Enable */
    __HAL_RCC_GPIOA_CLK_ENABLE();

    /*Configure GPIO pin Output Level */
    HAL_GPIO_WritePin(GPIOA, LCD_RS_Pin|LCD_EN_Pin|LCD_D4_Pin|LCD_D5_Pin|LCD_D6_Pin|LCD_D7_Pin, GPIO_PIN_RESET);

    /*Configure GPIO pins : PAPin PAPin PAPin PAPin
                           PAPin PAPin */
    GPIO_InitStruct.Pin = LCD_RS_Pin|LCD_EN_Pin|LCD_D4_Pin|LCD_D5_Pin|LCD_D6_Pin|LCD_D7_Pin;
    GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
    GPIO_InitStruct.Pull = GPIO_NOPULL;
    GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
    HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);



    LCD_Init(); // Initialize the LCD

    LCD_SetCursor(0, 0);
    LCD_PrintString("Hello, World!");
    LCD_SetCursor(1, 0);
    LCD_PrintString("STM32 LCD Test");

    while (1) {
        // Your main application loop
    }
}

```

**1.5 Important Points to Remember:**

*   **Datasheet is crucial:** Always refer to the LCD datasheet for pinout, command set, and timing requirements.
*   **Initialization Sequence:**  The initialization sequence must be followed precisely.
*   **Timing:**  Meet the LCD's timing requirements for reliable communication. Use delays to ensure proper operation.
*   **Power Supply:** Make sure the LCD is powered with the correct voltage (typically 5V or 3.3V).
*   **Contrast Adjustment:** Most LCDs have a potentiometer for adjusting the display contrast.  Adjust it for optimal visibility.

**1.6 Practice Questions/Exercises:**

1.  **Question:** What are the functions of the RS, RW, and EN pins on an LCD?
    *   **Answer:**  RS (Register Select) selects between command and data registers. RW (Read/Write) selects the read or write operation. EN (Enable) latches data into the LCD controller.
2.  **Question:**  Why is it important to follow the initialization sequence in the LCD datasheet?
    *   **Answer:** The initialization sequence configures the LCD controller's operating mode (e.g., 4-bit or 8-bit mode, number of lines) and sets up the internal registers for proper operation.  Failure to follow the sequence will result in the LCD not functioning correctly.
3.  **Exercise:** Write a function to clear the LCD display.
    *   **Answer:** `LCD_SendCommand(0x01); LCD_Delay(2);` (The `0x01` command clears the display and sets the cursor to the home position. The delay is needed as the clear command takes longer.)
4.  **Exercise:** Write a program to display the current value of a variable (e.g., a counter) on the LCD. The value should be updated every second. You will need to convert the integer to a string using a function like `sprintf`.

---

**2. Matrix Keypad**

**2.1 Key Concepts and Definitions:**

*   **Matrix Keypad:**  An array of pushbuttons arranged in a matrix of rows and columns.  This arrangement significantly reduces the number of I/O pins required to read a large number of keys.
*   **Rows:**  One side of the matrix keypad, typically connected to input pins.
*   **Columns:** The other side of the matrix keypad, typically connected to output pins.
*   **Scanning:**  The process of systematically activating each column one at a time and checking the row inputs to determine which key (if any) is pressed.
*   **Debouncing:**  Techniques used to eliminate spurious signals caused by the mechanical bounce of the key contacts.

**2.2 Principles of Operation:**

*   **Row/Column Arrangement:** A matrix keypad arranges `m` keys in `r` rows and `c` columns such that `m = r * c`. This allows `r+c` I/O pins to read `r*c` keys.
*   **Scanning Process:**
    1.  Set all column pins to a logic HIGH (or LOW, depending on the keypad design – common-row or common-column).
    2.  Set one column pin to the opposite logic level (e.g., LOW if the initial state was HIGH).
    3.  Read the row pins. If any row pin is at the opposite logic level (e.g., LOW if the column is HIGH), a key in that row and the currently activated column is pressed.
    4.  Repeat steps 2 and 3 for each column.
*   **Key Identification:**  The pressed key is identified by the row and column that are active when the key press is detected.
*   **Debouncing:**  Mechanical key switches exhibit "bounce" - they don't make a clean, single connection when pressed or released. This can result in multiple rapid on/off transitions, leading to multiple key presses being detected.  Debouncing techniques are used to filter out these spurious transitions.

**2.3 Interfacing with STM32:**

1.  **Hardware Connections:**
    *   Connect the keypad row pins to GPIO input pins on the STM32. Configure these pins with internal pull-up resistors (or external if needed).
    *   Connect the keypad column pins to GPIO output pins on the STM32.
2.  **GPIO Configuration:**
    *   **Rows:** Configure the GPIO pins connected to the keypad rows as *input* pins with internal *pull-up* resistors. This ensures that the pins are normally HIGH when no key is pressed.
    *   **Columns:** Configure the GPIO pins connected to the keypad columns as *output* pins in *push-pull* mode.
3.  **Software Implementation:**
    *   **Scanning Function:** Create a function to scan the keypad and detect key presses.
        *   Iterate through each column.
        *   Set the current column pin LOW (or HIGH, depending on the circuit).
        *   Read the row pins.
        *   If a row pin is LOW (or HIGH), a key is pressed.
        *   Determine the row and column of the pressed key.
        *   Set the current column pin back to HIGH (or LOW).
        *   Add a small delay.
    *   **Debouncing Implementation:** Implement a debouncing technique to filter out spurious key presses. Common techniques include:
        *   **Software Delay:**  Introduce a small delay after detecting a key press before reading the keypad again.  This allows the key to settle.
        *   **Sampling:**  Read the keypad multiple times within a short period. If the key state is consistent across multiple samples, then it is considered a valid key press.
    *   **Key Mapping:** Create a lookup table or a `switch` statement to map the row and column combination to the corresponding key value.

**2.4 Example STM32 Code (Illustrative - using HAL library):**

```c
#include "stm32f4xx_hal.h" // Include the HAL library

// Define row and column pins
#define ROW1_Pin GPIO_PIN_0
#define ROW2_Pin GPIO_PIN_1
#define ROW3_Pin GPIO_PIN_2
#define ROW4_Pin GPIO_PIN_3
#define COL1_Pin GPIO_PIN_4
#define COL2_Pin GPIO_PIN_5
#define COL3_Pin GPIO_PIN_6

#define ROW1_GPIO_Port GPIOB
#define ROW2_GPIO_Port GPIOB
#define ROW3_GPIO_Port GPIOB
#define ROW4_GPIO_Port GPIOB
#define COL1_GPIO_Port GPIOB
#define COL2_GPIO_Port GPIOB
#define COL3_GPIO_Port GPIOB

// Keypad Layout (adjust to your specific keypad)
char keypad[4][3] = {
    {'1', '2', '3'},
    {'4', '5', '6'},
    {'7', '8', '9'},
    {'*', '0', '#'}
};

uint8_t Keypad_Scan() {
    for (int col = 0; col < 3; col++) {
        // Set the current column LOW
        switch (col) {
            case 0:
                HAL_GPIO_WritePin(COL1_GPIO_Port, COL1_Pin, GPIO_PIN_RESET);
                break;
            case 1:
                HAL_GPIO_WritePin(COL2_GPIO_Port, COL2_Pin, GPIO_PIN_RESET);
                break;
            case 2:
                HAL_GPIO_WritePin(COL3_GPIO_Port, COL3_Pin, GPIO_PIN_RESET);
                break;
        }

        // Read the rows
        for (int row = 0; row < 4; row++) {
            GPIO_PinState rowState;
            switch (row) {
                case 0:
                    rowState = HAL_GPIO_ReadPin(ROW1_GPIO_Port, ROW1_Pin);
                    break;
                case 1:
                    rowState = HAL_GPIO_ReadPin(ROW2_GPIO_Port, ROW2_Pin);
                    break;
                case 2:
                    rowState = HAL_GPIO_ReadPin(ROW3_GPIO_Port, ROW3_Pin);
                    break;
                case 3:
                    rowState = HAL_GPIO_ReadPin(ROW4_GPIO_Port, ROW4_Pin);
                    break;
            }

            if (rowState == GPIO_PIN_RESET) {
                // Debouncing delay
                HAL_Delay(20); // Debounce delay (adjust as needed)

                // Re-read the row to confirm the press
                switch (row) {
                    case 0:
                        rowState = HAL_GPIO_ReadPin(ROW1_GPIO_Port, ROW1_Pin);
                        break;
                    case 1:
                        rowState = HAL_GPIO_ReadPin(ROW2_GPIO_Port, ROW2_Pin);
                        break;
                    case 2:
                        rowState = HAL_GPIO_ReadPin(ROW3_GPIO_Port, ROW3_Pin);
                        break;
                    case 3:
                        rowState = HAL_GPIO_ReadPin(ROW4_GPIO_Port, ROW4_Pin);
                        break;
                }

                if (rowState == GPIO_PIN_RESET) {
                    // Key is pressed
                    // Wait for key release
                    while (rowState == GPIO_PIN_RESET){
                        switch (row) {
                            case 0:
                                rowState = HAL_GPIO_ReadPin(ROW1_GPIO_Port, ROW1_Pin);
                                break;
                            case 1:
                                rowState = HAL_GPIO_ReadPin(ROW2_GPIO_Port, ROW2_Pin);
                                break;
                            case 2:
                                rowState = HAL_GPIO_ReadPin(ROW3_GPIO_Port, ROW3_Pin);
                                break;
                            case 3:
                                rowState = HAL_GPIO_ReadPin(ROW4_GPIO_Port, ROW4_Pin);
                                break;
                        }
                    }
                   // Reset column pin
                    switch (col) {
                        case 0:
                            HAL_GPIO_WritePin(COL1_GPIO_Port, COL1_Pin, GPIO_PIN_SET);
                            break;
                        case 1:
                            HAL_GPIO_WritePin(COL2_GPIO_Port, COL2_Pin, GPIO_PIN_SET);
                            break;
                        case 2:
                            HAL_GPIO_WritePin(COL3_GPIO_Port, COL3_Pin, GPIO_PIN_SET);
                            break;
                    }

                    return keypad[row][col]; // Return the pressed key
                }
            }
        }

        // Reset column pin
        switch (col) {
            case 0:
                HAL_GPIO_WritePin(COL1_GPIO_Port, COL1_Pin, GPIO_PIN_SET);
                break;
            case 1:
                HAL_GPIO_WritePin(COL2_GPIO_Port, COL2_Pin, GPIO_PIN_SET);
                break;
            case 2:
                HAL_GPIO_WritePin(COL3_GPIO_Port, COL3_Pin, GPIO_PIN_SET);
                break;
        }

    }
    return 0; // No key pressed
}

int main(void) {
    // ... (Initialization of STM32 clock, GPIO, etc.) ...

    // Initialize GPIO pins connected to the Keypad
    GPIO_InitTypeDef GPIO_InitStruct = {0};

    /* GPIO Ports Clock Enable */
    __HAL_RCC_GPIOB_CLK_ENABLE();

    /*Configure GPIO pin Output Level */
    HAL_GPIO_WritePin(GPIOB, COL1_Pin|COL2_Pin|COL3_Pin, GPIO_PIN_SET);

    /*Configure GPIO pins : PBPin PBPin PBPin */
    GPIO_InitStruct.Pin = COL1_Pin|COL2_Pin|COL3_Pin;
    GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
    GPIO_InitStruct.Pull = GPIO_NOPULL;
    GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
    HAL_GPIO_Init(GPIOB, &GPIO_InitStruct);

    /*Configure GPIO pins : PBPin PBPin PBPin PBPin */
    GPIO_InitStruct.Pin = ROW1_Pin|ROW2_Pin|ROW3_Pin|ROW4_Pin;
    GPIO_InitStruct.Mode = GPIO_MODE_INPUT;
    GPIO_InitStruct.Pull = GPIO_PULLUP;
    HAL_GPIO_Init(GPIOB, &GPIO_InitStruct);

    char keyPressed;
    while (1) {
        keyPressed = Keypad_Scan();
        if (keyPressed != 0) {
            // Key is pressed, do something
            // Print the key to the LCD (assuming LCD is initialized)
             LCD_SetCursor(0,0);
             LCD_SendData(keyPressed);
        }
    }
}
```

**2.5 Important Points to Remember:**

*   **GPIO Configuration:**  Correctly configuring the row pins as inputs with pull-up resistors and the column pins as outputs is crucial.
*   **Debouncing:**  Debouncing is essential to prevent spurious key presses.
*   **Scanning Frequency:**  The scanning frequency should be fast enough to detect key presses quickly, but not so fast that it consumes excessive processing power.
*   **Keypad Layout:**  Make sure the `keypad` array in the code matches the physical layout of your keypad.
*   **Error Handling:** Consider adding error handling to detect invalid key presses or hardware issues.  For example, check if multiple rows are simultaneously low. This would indicate a hardware problem.

**2.6 Practice Questions/Exercises:**

1.  **Question:** Why are pull-up resistors used on the row pins of a matrix keypad?
    *   **Answer:** Pull-up resistors ensure that the row pins are normally HIGH when no key is pressed. When a key is pressed, it connects the row pin to the activated column (which is LOW), pulling the row pin LOW and indicating a key press.
2.  **Question:** Explain the concept of debouncing in the context of matrix keypads.
    *   **Answer:** Debouncing is the process of filtering out spurious signals caused by the mechanical bounce of key contacts. When a key is pressed or released, the contacts may bounce, creating multiple rapid on/off transitions. Debouncing techniques are used to ensure that only a single key press is detected.
3.  **Exercise:** Implement a keypad scanning function that detects multiple key presses (limited to two keys) simultaneously.  This is more complex and requires careful consideration of the scanning logic.  Note:  This is generally avoided in designs as simultaneous key presses are not reliably detected on all keypads and add significant complexity to the software.
4.  **Exercise:** Modify the provided keypad scanning code to use a sampling debouncing technique instead of a simple delay.  Take multiple readings within a short period and only register a key press if the reading is consistent.

These notes provide a comprehensive overview of interfacing LCD displays and Matrix Keypads with STM32 microcontrollers. Remember to consult the datasheets for specific devices and adjust the code accordingly. Good luck!
