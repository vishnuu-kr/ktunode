---
title: "Digital to Analog Conversion: Simple DAC Output Generation"
subject: "MICROCONTROLLERS"
module: "Module 2: STM32 Microcontroller Overview and Peripheral Programming:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b61e"
status: "completed"
scrapedAt: "2026-05-20T16:48:34.820Z"
---
## MICROCONTROLLERS: Module 2 - Digital to Analog Conversion: Simple DAC Output Generation

**Subject:** MICROCONTROLLERS
**Module:** Module 2: STM32 Microcontroller Overview and Peripheral Programming
**Topic:** Digital to Analog Conversion: Simple DAC Output Generation

These notes cover the Digital to Analog Conversion (DAC) functionality within STM32 microcontrollers, focusing on generating a simple analog output signal.

**Learning Outcomes:**

*   Understand the principle of Digital to Analog Conversion (DAC).
*   Identify the DAC peripherals available in STM32 microcontrollers.
*   Learn how to configure the STM32 DAC for simple output generation.
*   Write code to generate a specific analog voltage using the DAC.
*   Understand the limitations and considerations when using the DAC.

**1. Key Concepts and Definitions:**

*   **Digital to Analog Conversion (DAC):** The process of converting a digital (binary) representation of a value into an equivalent analog voltage or current. This allows microcontrollers to interact with analog devices.

*   **Analog Signal:** A continuous signal that can take any value within a given range. Examples include voltage, current, temperature, and pressure.

*   **Digital Signal:** A discrete signal that can only take a limited number of values, typically represented by binary digits (0s and 1s).

*   **Resolution:** The number of discrete voltage levels the DAC can produce. Determined by the number of bits used in the digital input (e.g., a 12-bit DAC has 2^12 = 4096 possible levels).  Higher resolution implies finer control over the output voltage.

*   **Reference Voltage (VREF+):** The maximum voltage the DAC can output. The analog output voltage is proportional to the digital input value scaled by the reference voltage.  Typically connected to VDD or an external reference.

*   **Settling Time:** The time it takes for the DAC output to reach and stabilize at its final value after a new digital input is applied.

*   **Linearity:** A measure of how closely the actual DAC output voltage matches the ideal output voltage based on the input digital code.

*   **Monotonicity:**  Ensures that the DAC output voltage always increases (or decreases) when the digital input code increases (or decreases).  A non-monotonic DAC can produce glitches and inaccuracies.

**2. STM32 DAC Peripherals:**

*   STM32 microcontrollers often feature one or more integrated DAC peripherals.

*   **Key Features typically include:**
    *   **Resolution:** Usually 12-bit resolution (occasionally 8-bit).
    *   **Channels:**  Often two DAC channels (DAC1 and DAC2) that can operate independently or simultaneously.
    *   **Output Buffering:**  Option to enable or disable output buffers.  Enabling buffering reduces the output impedance, allowing the DAC to drive larger loads.
    *   **Triggering:** The DAC can be triggered by various events, such as timers, external interrupts, or software.
    *   **Noise Waveform Generation:** Some STM32 DACs support generating white noise or triangular waveforms directly.
    *   **DMA Support:** Direct Memory Access (DMA) allows the DAC to automatically convert and output data from memory without CPU intervention, useful for generating complex waveforms.

*   **Finding DAC Information:** Refer to the specific STM32 microcontroller's datasheet to determine the number of DAC channels, resolution, available features, and pin assignments.

**3. Configuring the STM32 DAC for Simple Output Generation:**

This section outlines the steps for configuring the DAC in simple mode, focusing on direct voltage output using software control.  The specific registers and bit names will vary depending on the STM32 family. Consult the reference manual for your specific device.

*   **Step 1: Enable the DAC Clock:**
    *   The DAC peripheral needs its clock enabled in the Reset and Clock Control (RCC) peripheral. This provides the necessary power and timing signals.
    *   Example (using HAL library):  `__HAL_RCC_DAC_CLK_ENABLE();`

*   **Step 2: Configure the DAC GPIO Pins:**
    *   The DAC output pins are typically also used for other functions. You need to configure them as analog outputs.
    *   Configure the GPIO pin's mode to *Analog*.
    *   Disable pull-up/pull-down resistors.
    *   Example (using HAL library):

    ```c
    GPIO_InitTypeDef GPIO_InitStruct = {0};

    /*Configure GPIO pin : PA4 */
    GPIO_InitStruct.Pin = GPIO_PIN_4;
    GPIO_InitStruct.Mode = GPIO_MODE_ANALOG;
    GPIO_InitStruct.Pull = GPIO_NOPULL;
    HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);
    ```
    (This example configures PA4 as an analog output for DAC channel 1)

*   **Step 3: Initialize the DAC (Using HAL Library Example):**

    ```c
    DAC_HandleTypeDef hdac1;

    hdac1.Instance = DAC1; // Or DAC2, depending on the channel you're using
    HAL_DAC_Init(&hdac1);
    ```

*   **Step 4: Configure DAC Channel (e.g., DAC Channel 1):**

    ```c
    DAC_ChannelConfTypeDef sConfig = {0};

    sConfig.DAC_Trigger = DAC_TRIGGER_NONE; // No external trigger; software control
    sConfig.DAC_OutputBuffer = DAC_OUTPUTBUFFER_ENABLE; // Enable output buffer for lower impedance.  Disable for lower power
    HAL_DAC_ConfigChannel(&hdac1, &sConfig, DAC_CHANNEL_1);
    ```

*   **Step 5: Enable the DAC Channel:**

    ```c
    HAL_DAC_Start(&hdac1, DAC_CHANNEL_1);
    ```

**4. Writing Code to Generate a Specific Analog Voltage:**

*   **Determining the Digital Value:**

    The output voltage is determined by the following equation:

    `Vout = (Digital Value / 2^Resolution) * VREF+`

    Where:

    *   `Vout` is the desired output voltage.
    *   `Digital Value` is the integer value you need to write to the DAC register.
    *   `Resolution` is the DAC resolution (e.g., 4096 for a 12-bit DAC).
    *   `VREF+` is the reference voltage for the DAC.

    Rearranging the equation to solve for the `Digital Value`:

    `Digital Value = (Vout / VREF+) * 2^Resolution`

*   **Example:**

    Let's say you want to output 1.5V with a 12-bit DAC and VREF+ = 3.3V.

    `Digital Value = (1.5 / 3.3) * 4096 = 1861.82`

    Since the `Digital Value` needs to be an integer, round it to the nearest integer, 1862.

*   **Writing the Digital Value to the DAC:**

    Use the HAL library function:

    ```c
    uint32_t dac_value = 1862;  // Calculated Digital Value

    HAL_DAC_SetValue(&hdac1, DAC_CHANNEL_1, DAC_ALIGN_12B_R, dac_value);
    //DAC_ALIGN_12B_R means the 12-bit value is right-aligned in the 32-bit register
    ```

*   **Complete Example Code Snippet:**

    ```c
    #include "stm32f4xx_hal.h" // Or the appropriate header for your STM32 family

    DAC_HandleTypeDef hdac1;

    void DAC_Init(void) {
        GPIO_InitTypeDef GPIO_InitStruct = {0};
        DAC_ChannelConfTypeDef sConfig = {0};

        /**DAC GPIO Configuration
        PA4     ------> DAC_OUT1
        */
        GPIO_InitStruct.Pin = GPIO_PIN_4;
        GPIO_InitStruct.Mode = GPIO_MODE_ANALOG;
        GPIO_InitStruct.Pull = GPIO_NOPULL;
        HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);

        /* DAC Initialization */
        hdac1.Instance = DAC1;
        HAL_DAC_Init(&hdac1);

        /** DAC channel OUT1 config */
        sConfig.DAC_Trigger = DAC_TRIGGER_NONE;
        sConfig.DAC_OutputBuffer = DAC_OUTPUTBUFFER_ENABLE;
        HAL_DAC_ConfigChannel(&hdac1, &sConfig, DAC_CHANNEL_1);

        HAL_DAC_Start(&hdac1, DAC_CHANNEL_1);
    }

    void Set_DAC_Output(float voltage) {
        uint32_t dac_value;
        float vref = 3.3;  //Your reference voltage
        dac_value = (uint32_t)((voltage / vref) * 4096);  // Calculate the digital value (12-bit)
        HAL_DAC_SetValue(&hdac1, DAC_CHANNEL_1, DAC_ALIGN_12B_R, dac_value); // Set the DAC value
    }

    int main(void) {
        HAL_Init();  // Initialize the HAL Library (must be called first)
        DAC_Init();  // Initialize DAC

        while (1) {
            Set_DAC_Output(1.5);  // Set DAC output to 1.5V
            HAL_Delay(1000);       // Wait for 1 second

            Set_DAC_Output(2.5);  // Set DAC output to 2.5V
            HAL_Delay(1000);       // Wait for 1 second
        }
    }
    ```

**5. Limitations and Considerations:**

*   **Output Current:** The DAC typically has a limited output current capability.  Using the output buffer can improve the drive strength but still has a limit.  If you need to drive a high-current load, you might need to use an external operational amplifier (op-amp) as a buffer.

*   **Accuracy:** The accuracy of the DAC output is affected by several factors, including the reference voltage accuracy, the DAC's linearity, and noise.

*   **Resolution:** The resolution of the DAC limits the smallest voltage change you can produce.  For applications requiring fine voltage control, a higher-resolution DAC may be necessary.

*   **Sampling Rate:**  While not directly relevant for static output generation, when using the DAC to generate waveforms, the rate at which you update the DAC value determines the maximum frequency of the generated signal (Nyquist Theorem).

*   **Power Consumption:**  Enabling the output buffer increases power consumption.  Consider disabling it if it's not needed to drive a load, especially in battery-powered applications.

*   **Glitching:**  DAC outputs can sometimes exhibit glitches during transitions. These are short, unwanted voltage spikes caused by internal switching delays.  Using a low-pass filter on the DAC output can help reduce the effects of glitches.

**6. Practice Questions/Exercises:**

1.  **What is the output voltage of a 12-bit DAC with a VREF+ of 3.3V if the digital input is 2048?**

    *   *Answer: Vout = (2048 / 4096) * 3.3V = 1.65V*

2.  **You need to generate a 0.75V output with a 10-bit DAC and a VREF+ of 5V. What digital value should you write to the DAC register?**

    *   *Answer: Digital Value = (0.75 / 5) * 1024 = 153.6. Rounding to the nearest integer, Digital Value = 154*

3.  **Why is it important to enable the DAC clock in the RCC peripheral?**

    *   *Answer: Enabling the DAC clock provides the necessary power and timing signals for the DAC peripheral to operate.*

4.  **What is the purpose of the DAC output buffer?**

    *   *Answer: The output buffer reduces the output impedance of the DAC, allowing it to drive larger loads without significant voltage drop.*

5.  **What are two limitations you should be aware of when using the DAC peripheral?**

    *   *Answer: Output current limitation, Accuracy of the output due to VREF+, linearity, and noise*

**7. Important Points to Remember:**

*   **Always consult the STM32 microcontroller's datasheet and reference manual.**  The specific register names, bit assignments, and features can vary significantly between different STM32 families.
*   **Understand the relationship between digital value, resolution, and reference voltage.** This is crucial for accurately controlling the DAC output.
*   **Consider the load impedance.** Use the output buffer if necessary, or an external op-amp if driving a very low impedance load.
*   **Be aware of potential glitches.** Use filtering if necessary to minimize their impact.
*   **Use the HAL library or CMSIS drivers to simplify DAC configuration and control.**

These notes should provide a solid foundation for understanding and implementing simple DAC output generation on STM32 microcontrollers. Remember to consult the specific documentation for your chosen STM32 device for detailed information. Good luck!
