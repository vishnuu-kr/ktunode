---
title: "Generating a Sine Wave"
subject: "MICROCONTROLLERS"
module: "Module 2: STM32 Microcontroller Overview and Peripheral Programming:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b61f"
status: "completed"
scrapedAt: "2026-05-20T16:48:35.574Z"
---
## Microcontroller Module 2: STM32 – Generating a Sine Wave

**Subject:** MICROCONTROLLERS
**Module:** Module 2: STM32 Microcontroller Overview and Peripheral Programming
**Topic:** Generating a Sine Wave

**Introduction:** This document outlines the key concepts and techniques involved in generating a sine wave using an STM32 microcontroller. We'll cover the theory behind sine wave generation, the necessary hardware peripherals, and the software implementation details.

**Learning Outcomes:**

*   Understand the principles of sine wave generation using Direct Digital Synthesis (DDS).
*   Identify and configure the necessary STM32 peripherals (e.g., DAC, DMA, Timer).
*   Implement a sine wave generation program in C for an STM32 microcontroller.
*   Analyze the performance and limitations of the generated sine wave.

---

**1. Principles of Sine Wave Generation: Direct Digital Synthesis (DDS)**

*   **Definition:** Direct Digital Synthesis (DDS) is a technique for generating analog waveforms (like sine waves) using digital logic. It's particularly well-suited for microcontroller-based waveform generation due to its flexibility and precise frequency control.

*   **Key Components of a DDS System:**

    *   **Phase Accumulator:**  A digital register that increments by a fixed value (the frequency tuning word) on each clock cycle. The accumulator's overflow effectively creates a sawtooth waveform.
    *   **Frequency Tuning Word (FTW):** A digital value that determines the frequency of the generated sine wave. A larger FTW results in a higher frequency.  The resolution of the FTW directly impacts the frequency accuracy.
    *   **Phase-to-Amplitude Conversion:** Converts the phase value (from the phase accumulator) into a corresponding amplitude value for the sine wave. This is typically done using a Look-Up Table (LUT).
    *   **Look-Up Table (LUT):**  A table stored in memory (typically ROM or Flash) that contains pre-calculated amplitude values for one complete cycle of the sine wave. The phase value from the accumulator is used as an index into the LUT to retrieve the corresponding amplitude.
    *   **Digital-to-Analog Converter (DAC):** Converts the digital amplitude values from the LUT into an analog voltage, creating the desired sine wave output.

*   **Mathematical Representation:**

    *   Output frequency (f_out) = (FTW * f_clk) / 2<sup>N</sup>

        *   `f_out`: Output frequency of the sine wave.
        *   `FTW`: Frequency Tuning Word (an integer).
        *   `f_clk`: Clock frequency of the DDS system (e.g., microcontroller clock).
        *   `N`: Number of bits in the phase accumulator.

*   **Advantages of DDS:**

    *   **Fine Frequency Resolution:** DDS allows for very precise frequency control by adjusting the FTW.
    *   **Fast Frequency Switching:**  Frequency can be changed rapidly by simply updating the FTW.
    *   **Phase Coherence:** DDS generates phase-continuous waveforms.
    *   **Flexibility:**  Can generate various waveforms by modifying the LUT contents.

*   **Disadvantages of DDS:**

    *   **Spurious Signals:**  Quantization noise, DAC non-linearity, and clock jitter can introduce unwanted spectral components.
    *   **Memory Requirement:**  The LUT requires memory to store the amplitude values.
    *   **Clock Frequency Limitation:** The maximum output frequency is limited by the clock frequency and the processing speed of the microcontroller.

**2. STM32 Peripherals for Sine Wave Generation**

*   **Digital-to-Analog Converter (DAC):**

    *   **Role:**  Converts the digital amplitude values (obtained from the LUT) into an analog voltage, which forms the sine wave output.
    *   **STM32 DAC Features:**
        *   Resolution:  Typically 12-bit resolution, determining the number of discrete voltage levels.
        *   Channels:  STM32 DACs often have multiple channels, allowing for simultaneous generation of multiple waveforms.
        *   Trigger Sources: DAC conversion can be triggered by software, timers, or external events.
        *   Data Alignment: The DAC can accept data aligned to the left or right.
    *   **Configuration:**  Requires setting the DAC's resolution, trigger source, and channel.

*   **Timer (e.g., TIM6, TIM7):**

    *   **Role:**  Generates a periodic interrupt or trigger signal that controls the rate at which the DAC is updated. This determines the sampling rate of the sine wave.
    *   **STM32 Timer Features:**
        *   Prescaler: Divides the system clock to achieve the desired timer frequency.
        *   Auto-Reload Register (ARR):  Defines the timer's period.  The timer counts up to the ARR value and then resets.
        *   Interrupt Generation:  Generates an interrupt when the timer reaches the ARR value.
        *   Trigger Output:  Can be configured to trigger the DAC directly.
    *   **Configuration:**  Requires setting the prescaler and ARR to achieve the desired sampling rate (DAC update frequency).  The timer trigger output (TRGO) should be configured to trigger the DAC.

*   **Direct Memory Access (DMA):**

    *   **Role:**  Transfers data (amplitude values from the LUT) to the DAC without CPU intervention. This significantly reduces the CPU load and allows for higher sine wave frequencies.
    *   **STM32 DMA Features:**
        *   Memory-to-Peripheral Transfer:  Transfers data from memory (LUT) to a peripheral (DAC).
        *   Circular Mode:  Automatically restarts the transfer after reaching the end of the buffer, allowing for continuous sine wave generation.
        *   Data Size:  Specifies the size of each data transfer (e.g., 8-bit, 16-bit, 32-bit).
        *   Increment/Decrement: Can automatically increment the source address (LUT) and/or the destination address (DAC).  Typically, the source address is incremented while the destination address (DAC data register) remains fixed.
    *   **Configuration:**  Requires setting the source address (LUT address), destination address (DAC data register address), data size, transfer length (LUT size), and circular mode.

*   **Example Pin Connections (Illustrative):**

    *   **DAC Output:** Connect the DAC output pin (e.g., PA4 or PA5) to an oscilloscope or other measurement device.
    *   **Debug (Optional):**  Consider using a logic analyzer or oscilloscope to monitor the timer output and DMA activity for debugging purposes.

**3. Software Implementation (C Code Example)**

```c
#include "stm32f4xx.h" // Or appropriate STM32 header file
#include <math.h>    // For sine wave calculation (optional, if not using pre-calculated LUT)

// Configuration Definitions
#define DAC_RESOLUTION 12 // 12-bit DAC
#define LUT_SIZE 256        // Size of the Look-Up Table
#define SYSTEM_CLOCK_HZ 16000000 // Example clock frequency (16 MHz)

// Global Variables
uint16_t sine_table[LUT_SIZE]; // Look-Up Table for sine wave amplitudes

// Function Prototypes
void SystemClock_Config(void);
void DAC_Config(void);
void Timer_Config(void);
void DMA_Config(void);
void GenerateSineTable(void);

int main(void) {
  // System Clock Configuration
  SystemClock_Config();

  // Initialize the sine table
  GenerateSineTable();

  // Peripheral Configuration
  DAC_Config();
  Timer_Config();
  DMA_Config();

  // Enable DAC, Timer, and DMA
  DAC->CR |= DAC_CR_EN1; // Enable DAC channel 1
  TIM6->CR1 |= TIM_CR1_CEN; // Enable Timer 6
  DMA1_Stream5->CR |= DMA_SxCR_EN; // Enable DMA Stream 5

  while (1) {
    // Main loop (empty, sine wave generation is handled by DMA and timer)
  }
}


// System Clock Configuration (Example - Adjust based on your hardware)
void SystemClock_Config(void) {
  // This is a placeholder.  You need to configure your system clock properly.
  // Consult your STM32 datasheet and reference manual for details.
  // Example using internal HSI oscillator (not ideal for high-performance applications)
  RCC->CR |= RCC_CR_HSION; // Enable HSI
  while (!(RCC->CR & RCC_CR_HSIRDY)); // Wait for HSI to be ready

  RCC->CFGR = 0; // Reset CFGR register
  RCC->CFGR |= RCC_CFGR_SW_HSI; // Select HSI as system clock
  while ((RCC->CFGR & RCC_CFGR_SWS) != RCC_CFGR_SWS_HSI); // Wait for HSI to be used as system clock

  // Configure AHB, APB1, and APB2 prescalers as needed for your peripherals
  RCC->CFGR |= RCC_CFGR_HPRE_DIV1;  //AHB prescaler = 1
  RCC->CFGR |= RCC_CFGR_PPRE1_DIV2; //APB1 prescaler = 2
  RCC->CFGR |= RCC_CFGR_PPRE2_DIV1; //APB2 prescaler = 1


  SystemCoreClockUpdate(); // Update SystemCoreClock variable
}


// DAC Configuration
void DAC_Config(void) {
  // Enable DAC clock
  RCC->APB1ENR |= RCC_APB1ENR_DACEN;

  // Configure DAC channel 1
  DAC->CR &= ~DAC_CR_TEN1; // Disable trigger for channel 1 initially
  DAC->CR |= DAC_CR_TSEL1_2; // Trigger selection - Timer 6 TRGO
  DAC->CR |= DAC_CR_EN1; // Enable DAC channel 1 (enabled again in main loop after DMA config)

  // Configure DAC pin (e.g., PA4) as analog
  RCC->AHB1ENR |= RCC_AHB1ENR_GPIOAEN; // Enable GPIOA clock
  GPIOA->MODER |= GPIO_MODER_MODER4_1 | GPIO_MODER_MODER4_0;  // Set PA4 to analog mode
}


// Timer Configuration
void Timer_Config(void) {
  // Enable Timer 6 clock
  RCC->APB1ENR |= RCC_APB1ENR_TIM6EN;

  // Configure timer prescaler and auto-reload value to achieve desired frequency
  // Example: Generate a 1 kHz sine wave with LUT_SIZE samples
  // Desired sampling rate = LUT_SIZE * sine_wave_frequency = 256 * 1000 = 256 kHz
  // Timer frequency = SystemClock / (Prescaler + 1)
  // Timer period (ARR) = Timer frequency / Sampling Rate - 1
  // Assuming SystemClock = 16 MHz, choose Prescaler = 0  (Timer frequency = 16 MHz)
  // ARR = (16000000 / 256000) - 1 = 62.5 -1 = ~62
  // Note: Adjust these values based on your desired frequency and system clock

  TIM6->PSC = 0;
  TIM6->ARR = 62;

  // Enable update interrupt (optional, for monitoring purposes) -  Not needed for DMA operation
  //TIM6->DIER |= TIM_DIER_UIE;
  //NVIC_EnableIRQ(TIM6_DAC_IRQn); // Enable Timer 6 interrupt in NVIC

  // Configure timer output trigger (TRGO) to trigger DAC
  TIM6->CR2 |= TIM_CR2_MMS_1; // Update event as trigger output
}


// DMA Configuration
void DMA_Config(void) {
  // Enable DMA1 clock
  RCC->AHB1ENR |= RCC_AHB1ENR_DMA1EN;

  // Configure DMA Stream 5, Channel 7 for DAC1
  // This example uses Stream 5 and Channel 7. Consult your STM32 reference manual
  // to find the correct stream and channel for your DAC and Timer.

  // Disable DMA stream before configuration
  DMA1_Stream5->CR &= ~DMA_SxCR_EN;
  while(DMA1_Stream5->CR & DMA_SxCR_EN);

  // Configure DMA stream
  DMA1_Stream5->CR &= ~DMA_SxCR_CHSEL; //Clear channel selection
  DMA1_Stream5->CR |= DMA_SxCR_CHSEL_2 | DMA_SxCR_CHSEL_1 ;  // Channel 7 for DAC1

  DMA1_Stream5->CR &= ~DMA_SxCR_DIR; // Memory-to-Peripheral (default)

  DMA1_Stream5->CR |= DMA_SxCR_MINC; // Memory increment mode enabled

  DMA1_Stream5->CR &= ~DMA_SxCR_PINC; // Peripheral increment mode disabled

  DMA1_Stream5->CR &= ~DMA_SxCR_PSIZE;  // Clear PSIZE bits
  DMA1_Stream5->CR |= DMA_SxCR_PSIZE_0;  // Peripheral data size = Half word (16-bit)

  DMA1_Stream5->CR &= ~DMA_SxCR_MSIZE;  // Clear MSIZE bits
  DMA1_Stream5->CR |= DMA_SxCR_MSIZE_0;  // Memory data size = Half word (16-bit)

  DMA1_Stream5->CR |= DMA_SxCR_CIRC;  // Enable circular mode

  DMA1_Stream5->CR &= ~DMA_SxCR_PINCOS; // Peripheral increment offset disabled

  DMA1_Stream5->CR &= ~DMA_SxCR_PL; // Clear PL bits
  DMA1_Stream5->CR |= DMA_SxCR_PL_1; // Priority level = High

  DMA1_Stream5->CR |= DMA_SxCR_TCIE; // Transfer complete interrupt enable (optional) - can be used for monitoring or error handling

  // Configure number of data items to transfer
  DMA1_Stream5->NDTR = LUT_SIZE;

  // Configure peripheral (DAC) address
  DMA1_Stream5->PAR = (uint32_t)&(DAC->DHR12R1); // DAC channel 1 12-bit right-aligned data holding register

  // Configure memory address
  DMA1_Stream5->M0AR = (uint32_t)&sine_table;

  // Enable DMA stream after setting everything up (moved to main loop)
  //DMA1_Stream5->CR |= DMA_SxCR_EN;
}

// Generate Sine Table (Look-Up Table)
void GenerateSineTable(void) {
  for (int i = 0; i < LUT_SIZE; i++) {
    float angle = 2 * M_PI * i / LUT_SIZE;
    float sine_value = sinf(angle);
    sine_value = (sine_value + 1.0) / 2.0; // Scale sine wave to range 0-1
    sine_table[i] = (uint16_t)(sine_value * ((1 << DAC_RESOLUTION) - 1)); // Convert to 12-bit value
  }
}



// Optional Interrupt Handler for Timer 6 (for debugging)
/*
void TIM6_DAC_IRQHandler(void) {
  if (TIM6->SR & TIM_SR_UIF) {
    TIM6->SR &= ~TIM_SR_UIF; // Clear interrupt flag

    // Add debugging code here, e.g., toggle an LED
  }
}
*/
```

*   **Explanation of the Code:**

    *   **Includes:** Includes necessary header files for STM32 peripherals and math functions (if applicable).
    *   **Configuration Definitions:** Defines constants for DAC resolution, LUT size, and system clock frequency. These values should be adjusted based on your specific hardware and requirements.
    *   **Global Variables:**  Declares the `sine_table` array, which will store the pre-calculated sine wave amplitude values.
    *   **`SystemClock_Config()`:** This function configures the system clock of the STM32 microcontroller.  **IMPORTANT: This is a placeholder. You *must* configure the system clock based on your specific hardware and the STM32 family you are using. Consult your STM32 datasheet and reference manual for the correct configuration.** Example shows enabling the HSI and setting some prescalers, but it is crucial to tailor this function for your setup.
    *   **`DAC_Config()`:** Configures the DAC peripheral: enables the DAC clock, configures the DAC channel, sets the trigger source (Timer 6 TRGO), and configures the corresponding GPIO pin as an analog output.
    *   **`Timer_Config()`:** Configures the timer peripheral: enables the timer clock, sets the prescaler and ARR values to achieve the desired sampling rate, and configures the timer's trigger output (TRGO) to trigger the DAC.  The example comments illustrate how to calculate ARR based on the desired sine wave frequency and system clock.
    *   **`DMA_Config()`:** Configures the DMA peripheral: enables the DMA clock, configures the DMA stream and channel, sets the data transfer direction (memory-to-peripheral), enables memory increment mode, disables peripheral increment mode, sets the data sizes (half-word for both memory and peripheral), enables circular mode, sets the number of data items to transfer (LUT size), and configures the peripheral (DAC) address and memory (LUT) address.
    *   **`GenerateSineTable()`:** Calculates the sine wave amplitude values and stores them in the `sine_table` array.  It scales the sine wave to the range 0-1 and then converts it to a 12-bit value suitable for the DAC.  This function uses the `sinf()` function from the `math.h` library. If you don't want to include `math.h` (for code size or performance reasons), you could use a pre-calculated sine table stored in flash memory.
    *   **`main()`:** Calls the configuration functions, enables the DAC, timer, and DMA, and enters an infinite loop. The sine wave generation is handled entirely by the DMA and timer, without requiring CPU intervention in the main loop.
    *   **`TIM6_DAC_IRQHandler()` (Optional):** This is an example of an interrupt handler for the Timer 6 update interrupt. It can be used for debugging purposes or to implement additional functionality.

*   **Important Notes:**

    *   **STM32 Family and Hardware:** This code is a general example and needs to be adapted for your specific STM32 family and hardware setup. Consult the STM32 datasheet and reference manual for the correct peripheral registers, stream/channel mappings, and pin configurations.
    *   **System Clock Configuration:**  The `SystemClock_Config()` function is a crucial part of the code and *must* be configured correctly.  Use a debugger to verify the system clock frequency.
    *   **Error Handling:**  Consider adding error handling code to check for potential issues, such as DMA transfer errors or timer overflow.
    *   **Optimization:** This code can be further optimized for performance by using compiler optimizations, hand-optimizing critical sections, and using assembly language.

**4. Analyzing Performance and Limitations**

*   **Frequency Accuracy:** The accuracy of the generated sine wave frequency depends on the precision of the frequency tuning word (FTW) and the stability of the system clock.  A higher bit-width for the FTW and a more stable clock will result in better frequency accuracy.

*   **Total Harmonic Distortion (THD):**  THD is a measure of the distortion present in the sine wave. Factors that contribute to THD include:
    *   **Quantization Noise:**  Due to the finite resolution of the DAC.
    *   **DAC Non-Linearity:**  Non-ideal behavior of the DAC can introduce harmonics.
    *   **Sampling Rate:**  Insufficient sampling rate can lead to aliasing and distortion.  Nyquist theorem applies - sampling rate must be at least twice the frequency you wish to generate.
    *   **Clock Jitter:**  Variations in the clock frequency can introduce phase noise and distortion.
    *   **LUT Resolution:**  If the LUT resolution is low, it can introduce distortion.

*   **Spurious Free Dynamic Range (SFDR):** SFDR is the difference between the power of the desired signal and the power of the largest spurious signal. A higher SFDR indicates a cleaner sine wave.

*   **Sampling Rate and Nyquist Theorem:**  The sampling rate (DAC update frequency) must be at least twice the desired sine wave frequency to avoid aliasing.  This is known as the Nyquist-Shannon sampling theorem.

*   **Performance Tuning:**

    *   **Increase Sampling Rate:**  If possible, increase the sampling rate to improve the quality of the sine wave.
    *   **Use a Higher-Resolution DAC:**  A higher-resolution DAC will reduce quantization noise.
    *   **Filter the Output:**  A low-pass filter can be used to attenuate high-frequency noise and harmonics.
    *   **Optimize the LUT:**  Use a larger LUT or a more efficient interpolation algorithm to improve the accuracy of the phase-to-amplitude conversion.
    *   **Clock Source:** Use a more stable clock source (e.g., external crystal oscillator) to reduce clock jitter.

**5. Practice Questions/Exercises**

1.  **Calculate the FTW:**  Given a system clock of 48 MHz, a phase accumulator with 32 bits, and a desired output frequency of 1 kHz, calculate the required FTW.
    *   **Answer:**  FTW = (f_out * 2<sup>N</sup>) / f_clk = (1000 * 2<sup>32</sup>) / 48000000 = 89478.485 ...  Round to the nearest integer: 89478

2.  **Explain the role of the LUT:**  What is the purpose of the Look-Up Table (LUT) in a DDS system?
    *   **Answer:** The LUT stores pre-calculated amplitude values for one complete cycle of the sine wave.  The phase value from the phase accumulator is used as an index into the LUT to retrieve the corresponding amplitude value.

3.  **Explain the purpose of DMA in this application:** How does DMA improve sine wave generation performance in this scenario?
    *   **Answer:** DMA (Direct Memory Access) allows data to be transferred from the LUT to the DAC without CPU intervention. This reduces the CPU load, freeing it up for other tasks, and enables higher sine wave frequencies by allowing faster data transfer.

4.  **Explain what would happen if the sampling rate was less than twice the output frequency.**
    *   **Answer:** If the sampling rate is less than twice the output frequency (violating the Nyquist-Shannon sampling theorem), aliasing will occur.  Aliasing causes high-frequency components in the signal to be "folded" back into the lower frequency range, resulting in distortion of the reconstructed signal.  The generated sine wave will not be a clean sine wave and will contain unwanted frequency components.

5.  **Configure a timer for 10 kHz interrupts:** Given a system clock of 8 MHz, write the code to configure TIM7 to generate interrupts at a frequency of 10 kHz.
    ```c
    // Enable Timer 7 clock
    RCC->APB1ENR |= RCC_APB1ENR_TIM7EN;

    // Configure timer prescaler and auto-reload value
    // Timer frequency = SystemClock / (Prescaler + 1)
    // Timer period (ARR) = Timer frequency / Interrupt Frequency - 1
    // Assuming SystemClock = 8 MHz, choose Prescaler = 7 (Timer frequency = 1 MHz)
    // ARR = (1000000 / 10000) - 1 = 99

    TIM7->PSC = 7;
    TIM7->ARR = 99;

    // Enable update interrupt
    TIM7->DIER |= TIM_DIER_UIE;
    NVIC_EnableIRQ(TIM7_IRQn); // Enable Timer 7 interrupt in NVIC

    TIM7->CR1 |= TIM_CR1_CEN; // Enable Timer 7
    ```

---

**6. Important Points to Remember**

*   **Understand the DDS Principles:**  Know the function of each component in the DDS system (Phase Accumulator, FTW, LUT, DAC).
*   **Choose the Right Peripherals:** Select appropriate STM32 peripherals (DAC, Timer, DMA) based on the desired performance and complexity.
*   **Configure Peripherals Correctly:**  Pay close attention to the configuration of each peripheral, including clock settings, trigger sources, data sizes, and DMA transfer parameters. Refer to the STM32 reference manual.
*   **Calculate Frequencies and Timings Accurately:**  Ensure that the timer prescaler and ARR values are calculated correctly to achieve the desired sampling rate.
*   **Consider Performance Limitations:**  Be aware of the factors that can limit the performance of the sine wave generator, such as DAC resolution, sampling rate, and clock jitter.
*   **Test and Debug Thoroughly:**  Use an oscilloscope or spectrum analyzer to verify the frequency, amplitude, and distortion of the generated sine wave. Use a debugger to step through the code and identify any errors.
*   **System Clock Configuration:** Ensure you know how to correctly set up the system clock, as peripheral frequencies depend on it.

By understanding these concepts and following these guidelines, you can effectively generate sine waves using STM32 microcontrollers. Remember to adapt the code and configurations to your specific hardware and application requirements.
