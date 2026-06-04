---
title: "Interfacing Seven-Segment Display"
subject: "MICROCONTROLLERS"
module: "Module 2: STM32 Microcontroller Overview and Peripheral Programming:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b61a"
status: "completed"
scrapedAt: "2026-05-20T16:48:31.896Z"
---
## Microcontroller Study Notes: Module 2 - Interfacing Seven-Segment Display

**Subject:** MICROCONTROLLERS
**Module:** Module 2: STM32 Microcontroller Overview and Peripheral Programming
**Topic:** Interfacing Seven-Segment Display
**Description:** Interfacing a Seven-Segment Display with an STM32 Microcontroller

**Learning Outcomes:**

*   Understand the operation of a seven-segment display.
*   Learn how to interface a seven-segment display with an STM32 microcontroller.
*   Write STM32 code to display numbers and characters on a seven-segment display.
*   Understand the concepts of common anode and common cathode configurations.
*   Learn about different driving techniques, including direct driving and multiplexing.

---

### 1. Understanding Seven-Segment Displays

*   **Definition:** A seven-segment display is an electronic display device for displaying decimal numerals that is an alternative to the more complex dot-matrix displays.
*   **Construction:** It consists of seven LEDs (light-emitting diodes) arranged in a rectangular fashion. Each LED segment is individually controlled, allowing for the display of digits 0-9 and some letters.
*   **Segments:** The seven segments are usually labeled A through G, arranged as follows:

    ```
         _A_
        |   |
       F|   |B
        |_G_|
        |   |
       E|   |C
        |_D_|
    ```

*   **Decimal Representation:** By illuminating different combinations of these seven segments, different decimal digits (0-9) can be represented.
*   **Types:**
    *   **Common Anode (CA):**  All the anode pins of the LEDs are connected to a common pin. To light a segment, a LOW signal (GND) needs to be applied to the corresponding segment pin, while the common anode pin is connected to VCC (positive voltage).
    *   **Common Cathode (CC):** All the cathode pins of the LEDs are connected to a common pin. To light a segment, a HIGH signal (VCC) needs to be applied to the corresponding segment pin, while the common cathode pin is connected to GND (ground).

*   **Key Concepts:**
    *   **Forward Voltage (Vf):** The voltage required for an LED to conduct and emit light. Usually around 1.8-3.3V, depending on the color.
    *   **Forward Current (If):** The current that flows through the LED when it is forward biased. This needs to be limited using resistors to prevent the LED from burning out.
    *   **Current Limiting Resistors:** Essential to protect the LEDs from excessive current. Resistor value is calculated based on VCC, Vf, and If.
        *   `R = (VCC - Vf) / If`
        *   Example: If VCC = 5V, Vf = 2V, If = 20mA (0.02A), then R = (5-2)/0.02 = 150 Ohms. A standard 150 Ohm or 220 Ohm resistor would work well.

### 2. Interfacing with STM32 Microcontroller

*   **Pin Selection:** Choose suitable GPIO (General Purpose Input/Output) pins on the STM32 microcontroller to connect to the seven segments of the display.  Consider pins that are easily accessible and do not conflict with other peripherals.
*   **Wiring:** Connect each of the seven segment pins to a different GPIO pin on the STM32. Also, connect the common anode/cathode pin to VCC/GND, respectively. Remember to use current limiting resistors.
*   **STM32 Code:**
    *   **GPIO Initialization:** Configure the selected GPIO pins as output pins.
    *   **Segment Mapping:**  Create a lookup table (array) that maps each digit (0-9) to the corresponding segment states (HIGH/LOW).  This table will depend on whether you're using a common anode or common cathode display.
    *   **Digit Display Function:** Write a function that takes a digit (0-9) as input and sets the appropriate GPIO pins HIGH or LOW to display the digit on the seven-segment display.

*   **Example Code Snippet (Common Cathode):**

    ```c
    #include "stm32f4xx.h" // Include correct header file for your STM32 family
    #include "stm32f4xx_gpio.h" // Include GPIO header
    #include "stm32f4xx_rcc.h" // Include RCC (Reset and Clock Control) header

    // Define GPIO pins for segments (adjust based on your wiring)
    #define SEG_A GPIO_Pin_0
    #define SEG_B GPIO_Pin_1
    #define SEG_C GPIO_Pin_2
    #define SEG_D GPIO_Pin_3
    #define SEG_E GPIO_Pin_4
    #define SEG_F GPIO_Pin_5
    #define SEG_G GPIO_Pin_6

    // Define GPIO Port
    #define SEG_PORT GPIOA

    //Lookup table for common cathode 7-segment display
    const uint8_t segmentMap[] = {
        0x3F,  // 0: A+B+C+D+E+F
        0x06,  // 1: B+C
        0x5B,  // 2: A+B+D+E+G
        0x4F,  // 3: A+B+C+D+G
        0x66,  // 4: B+C+F+G
        0x6D,  // 5: A+C+D+F+G
        0x7D,  // 6: A+C+D+E+F+G
        0x07,  // 7: A+B+C
        0x7F,  // 8: A+B+C+D+E+F+G
        0x6F   // 9: A+B+C+D+F+G
    };


    void GPIO_Config(void) {
        GPIO_InitTypeDef GPIO_InitStructure;
        RCC_AHB1PeriphClockCmd(RCC_AHB1Periph_GPIOA, ENABLE);

        GPIO_InitStructure.GPIO_Pin = SEG_A | SEG_B | SEG_C | SEG_D | SEG_E | SEG_F | SEG_G;
        GPIO_InitStructure.GPIO_Mode = GPIO_Mode_OUT;
        GPIO_InitStructure.GPIO_OType = GPIO_OType_PP;
        GPIO_InitStructure.GPIO_Speed = GPIO_Speed_50MHz;
        GPIO_InitStructure.GPIO_PuPd = GPIO_PuPd_NOPULL;

        GPIO_Init(SEG_PORT, &GPIO_InitStructure);
    }


    void displayDigit(uint8_t digit) {
        if (digit > 9) return; // Invalid digit

        uint8_t segments = segmentMap[digit];

        //Set each GPIO pin based on the segments value
        GPIO_WriteBit(SEG_PORT, SEG_A, (segments & 0x01) ? Bit_SET : Bit_RESET);    // A
        GPIO_WriteBit(SEG_PORT, SEG_B, (segments & 0x02) ? Bit_SET : Bit_RESET);    // B
        GPIO_WriteBit(SEG_PORT, SEG_C, (segments & 0x04) ? Bit_SET : Bit_RESET);    // C
        GPIO_WriteBit(SEG_PORT, SEG_D, (segments & 0x08) ? Bit_SET : Bit_RESET);    // D
        GPIO_WriteBit(SEG_PORT, SEG_E, (segments & 0x10) ? Bit_SET : Bit_RESET);    // E
        GPIO_WriteBit(SEG_PORT, SEG_F, (segments & 0x20) ? Bit_SET : Bit_RESET);    // F
        GPIO_WriteBit(SEG_PORT, SEG_G, (segments & 0x40) ? Bit_SET : Bit_RESET);    // G
    }


    int main(void) {
        RCC_ClocksTypeDef RCC_Clocks;
        RCC_GetClocksClocksFreq(&RCC_Clocks);

        GPIO_Config();

        while (1) {
            for (int i = 0; i < 10; i++) {
                displayDigit(i);
                for (volatile int j = 0; j < 1000000; j++); // Simple delay
            }
        }
    }

    ```

    **Explanation:**

    *   The code defines the GPIO pins used for each segment (A-G).  This needs to match your hardware setup.
    *   `segmentMap` is a lookup table. Each element (0-9) holds a byte.  Each bit in that byte corresponds to a segment.  A '1' means the segment should be ON (for common cathode) and a '0' means it should be OFF.  The values are chosen based on which segments need to be lit to form that digit.
    *   `GPIO_Config()` function configures the GPIO pins as output pins.
    *   `displayDigit()` function takes a digit as input and uses the lookup table to determine which segments to turn on.  It then sets the corresponding GPIO pins HIGH or LOW using `GPIO_WriteBit`.
    *   The `main()` function cycles through the digits 0-9, displaying each one for a short period using a simple delay loop.  **Important:** Use a timer-based delay instead of a simple loop for more accurate timing.

### 3. Common Anode vs. Common Cathode

*   **Common Anode (CA):**
    *   Common pin connected to VCC.
    *   To activate a segment, pull the corresponding GPIO pin LOW.
    *   The lookup table will be inverted compared to common cathode. Where a '1' was needed for common cathode, a '0' will be needed for common anode, and vice-versa.
    *   Example `segmentMap` for common anode:

        ```c
        const uint8_t segmentMap[] = {
            0xC0,  // 0: ~A+~B+~C+~D+~E+~F
            0xF9,  // 1: ~B+~C
            0xA4,  // 2: ~A+~B+~D+~E+~G
            0xB0,  // 3: ~A+~B+~C+~D+~G
            0x99,  // 4: ~B+~C+~F+~G
            0x92,  // 5: ~A+~C+~D+~F+~G
            0x82,  // 6: ~A+~C+~D+~E+~F+~G
            0xF8,  // 7: ~A+~B+~C
            0x80,  // 8: ~A+~B+~C+~D+~E+~F+~G
            0x90   // 9: ~A+~B+~C+~D+~F+~G
        };

        ```

*   **Common Cathode (CC):**
    *   Common pin connected to GND.
    *   To activate a segment, pull the corresponding GPIO pin HIGH.
    *   Requires more current from the microcontroller than common anode, as the microcontroller is sourcing the current.

*   **Code Modification for Common Anode:** The primary change required for common anode configuration is inverting the logic in your `displayDigit()` function and using the correct `segmentMap`.

    ```c
    void displayDigit(uint8_t digit) {
        if (digit > 9) return; // Invalid digit

        uint8_t segments = segmentMap[digit];

        //Set each GPIO pin based on the segments value (inverted logic for Common Anode)
        GPIO_WriteBit(SEG_PORT, SEG_A, (segments & 0x01) ? Bit_RESET : Bit_SET);    // A
        GPIO_WriteBit(SEG_PORT, SEG_B, (segments & 0x02) ? Bit_RESET : Bit_SET);    // B
        GPIO_WriteBit(SEG_PORT, SEG_C, (segments & 0x04) ? Bit_RESET : Bit_SET);    // C
        GPIO_WriteBit(SEG_PORT, SEG_D, (segments & 0x08) ? Bit_RESET : Bit_SET);    // D
        GPIO_WriteBit(SEG_PORT, SEG_E, (segments & 0x10) ? Bit_RESET : Bit_SET);    // E
        GPIO_WriteBit(SEG_PORT, SEG_F, (segments & 0x20) ? Bit_RESET : Bit_SET);    // F
        GPIO_WriteBit(SEG_PORT, SEG_G, (segments & 0x40) ? Bit_RESET : Bit_SET);    // G
    }

    ```

### 4. Driving Techniques

*   **Direct Driving:**
    *   Each segment of the seven-segment display is directly connected to a GPIO pin of the microcontroller.
    *   Simple to implement for single-digit displays.
    *   Requires a large number of GPIO pins (7 pins per digit + 1 common pin).
    *   Not practical for multi-digit displays due to pin limitations.

*   **Multiplexing:**
    *   Multiple seven-segment displays are connected to the same GPIO pins.
    *   Only one digit is active at a time.
    *   Rapidly switch between digits to create the illusion that all digits are lit simultaneously.
    *   Requires fewer GPIO pins than direct driving.
    *   Requires more complex code and faster switching speed.
    *   Can lead to reduced brightness if the refresh rate is too low.
    *   Uses an additional GPIO pin per digit to control the common anode/cathode of that digit (digit enable pins).

*   **Example of Multiplexing (conceptual):**
    1.  Connect segments A-G of all displays to the same GPIO pins.
    2.  Assign a unique GPIO pin to the common cathode/anode of each display (digit enable pins).
    3.  To display a number like "123":
        *   Enable digit 1 (set the corresponding digit enable pin HIGH/LOW depending on CA/CC) and display '1' on the segments. Delay for a short time (e.g., 2ms).
        *   Disable digit 1, enable digit 2, and display '2' on the segments. Delay for a short time.
        *   Disable digit 2, enable digit 3, and display '3' on the segments. Delay for a short time.
        *   Repeat the process rapidly and continuously.

### 5. Important Points to Remember

*   **Current Limiting Resistors are crucial.**  Do not connect LEDs directly to the microcontroller without resistors.  Calculate the appropriate resistor value.
*   **Understand the difference between Common Anode and Common Cathode.** The logic in your code will be different depending on the type you are using.
*   **Choose appropriate GPIO pins.** Avoid pins used by other peripherals or with special functions.
*   **Optimize your code.** Especially for multiplexing, efficient code is essential to achieve a good refresh rate.  Use timers and interrupts for accurate timing.
*   **Consider the power requirements.** Seven-segment displays can draw a significant amount of current. Make sure your power supply is adequate.
*   **Test thoroughly.** Start with a simple program to display a single digit and then gradually add complexity.

### 6. Practice Questions and Exercises

**Question 1:** What is the purpose of a current limiting resistor in a seven-segment display circuit?

**Answer:** To limit the current flowing through the LEDs, preventing them from being damaged due to overcurrent.

**Question 2:** Explain the difference between a common anode and a common cathode seven-segment display.

**Answer:** In a common anode display, all the anodes of the LEDs are connected to a common point connected to VCC, and the segments are lit by applying a LOW signal. In a common cathode display, all the cathodes are connected to a common point connected to GND, and the segments are lit by applying a HIGH signal.

**Question 3:** What are the advantages and disadvantages of using multiplexing to drive multiple seven-segment displays?

**Answer:**
*   **Advantages:** Fewer GPIO pins required.
*   **Disadvantages:** Requires more complex code, can reduce brightness if the refresh rate is too low, requires faster switching.

**Exercise 1:** Write the `segmentMap` array for a common anode seven-segment display. (See example above in section 3)

**Exercise 2:** Modify the example code (above) to display the numbers 0-9 continuously on a seven-segment display using a timer interrupt for accurate timing. This is more advanced.  You'll need to research how to use timers and interrupts on your specific STM32 microcontroller.

**Exercise 3:**  Design a circuit to interface two seven-segment displays with an STM32 microcontroller using multiplexing.  Show the wiring diagram and explain the code logic.

---

This comprehensive study guide should give you a solid understanding of interfacing seven-segment displays with STM32 microcontrollers.  Good luck with your studies! Remember to practice and experiment with the code to solidify your knowledge.
