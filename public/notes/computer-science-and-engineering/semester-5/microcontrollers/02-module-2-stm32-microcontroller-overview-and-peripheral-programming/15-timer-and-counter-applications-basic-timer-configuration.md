---
title: "Timer and Counter Applications: Basic Timer Configuration"
subject: "MICROCONTROLLERS"
module: "Module 2: STM32 Microcontroller Overview and Peripheral Programming:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b622"
status: "completed"
scrapedAt: "2026-05-20T16:48:37.708Z"
---
## MICROCONTROLLERS - Module 2: STM32 - Timer and Counter Applications: Basic Timer Configuration

**Module Overview:** This module provides an overview of the STM32 microcontroller family and focuses on programming its peripherals. This section specifically addresses the basic configuration of timers and counters, which are crucial for various embedded applications.

**Topic:** Timer and Counter Applications: Basic Timer Configuration

**Learning Outcomes:**

*   Understand the fundamental concepts of timers and counters in microcontrollers.
*   Describe the different types of timers available in STM32 microcontrollers (Basic, General-Purpose, and Advanced).
*   Explain the key registers and parameters involved in configuring a basic timer.
*   Configure a basic timer in STM32 using the STM32 HAL library for generating time delays.
*   Explain the use of prescalers and auto-reload registers for setting timer frequency and period.
*   Analyze the impact of different clock sources on timer operation.

---

### 1. Fundamental Concepts of Timers and Counters

*   **Definition:** Timers and counters are essential peripherals in microcontrollers used for:
    *   **Timing:** Measuring time intervals, creating delays, and generating periodic signals.
    *   **Counting:** Counting external events or internal clock cycles.

*   **Key Difference:**  While the hardware is often very similar, the primary function differentiates them:
    *   **Timer:** Driven by an internal clock source.  Used for measuring time.
    *   **Counter:** Driven by an external signal. Used for counting external events.

*   **Applications:**
    *   **Delay Generation:** Creating accurate delays for various tasks (e.g., blinking an LED).
    *   **Pulse Width Modulation (PWM):** Generating PWM signals for motor control, dimming LEDs, etc.
    *   **Input Capture:** Measuring the duration of external events (e.g., the width of a pulse).
    *   **Real-Time Clock (RTC):** Keeping track of time and date.
    *   **Event Counting:** Counting the number of times a specific event occurs.
    *   **Watchdog Timer:** Preventing program crashes by resetting the system if it hangs.

### 2. Timer Types in STM32 Microcontrollers

STM32 microcontrollers offer different types of timers with varying capabilities and features. The main categories are:

*   **Basic Timers (TIM6/TIM7):**
    *   Simplest timers.
    *   Primarily used for generating time delays and triggering DMA requests.
    *   Limited features compared to other timer types.
    *   Do *not* have capture/compare functionality.

*   **General-Purpose Timers (TIM2/TIM3/TIM4/TIM5, etc.):**
    *   More versatile than basic timers.
    *   Offer features like input capture, output compare, PWM generation, and encoder interface.
    *   Suitable for a wide range of applications.
    *   Vary in bit width (16-bit or 32-bit) depending on the specific timer.

*   **Advanced Timers (TIM1/TIM8):**
    *   Most complex timers.
    *   Designed for motor control and high-performance applications.
    *   Offer features like complementary PWM outputs, dead-time insertion, and fault detection.
    *   Generally, more pins are associated with advanced timers due to their complex functionalities.

**This section focuses on Basic Timers (TIM6/TIM7).**

### 3. Key Registers and Parameters for Basic Timer Configuration

To configure a basic timer (TIM6/TIM7) effectively, understand these key registers and parameters:

*   **Clock Source:**
    *   Basic Timers typically use the internal APB clock.  You need to enable the clock to the timer in the Reset and Clock Control (RCC) peripheral.
    *   The specific APB bus (APB1 or APB2) connected to the timer depends on the STM32 device.  Consult the reference manual for your specific microcontroller.

*   **Prescaler (PSC):**  (TIMx_PSC)
    *   Divides the input clock frequency to achieve a desired timer clock frequency.
    *   `Timer_Clock_Frequency = Input_Clock_Frequency / (Prescaler + 1)`
    *   Prescaler value is a 16-bit unsigned integer (0-65535).

*   **Auto-Reload Register (ARR):** (TIMx_ARR)
    *   Specifies the maximum value the counter will count up to before resetting to 0.
    *   Determines the timer's period or duration.
    *   `Timer_Period = (ARR + 1) / Timer_Clock_Frequency`
    *   ARR value is a 16-bit unsigned integer (0-65535).

*   **Counter Register (CNT):** (TIMx_CNT)
    *   Read-only register that holds the current counter value.  It increments with each timer clock cycle.

*   **Control Register 1 (CR1):** (TIMx_CR1)
    *   Contains control bits to enable/disable the timer, set the counting mode (up-counting, down-counting, center-aligned), and enable/disable auto-reload preload.
    *   Key bits:
        *   **CEN (Counter Enable):** Enables or disables the counter.
        *   **ARPE (Auto-Reload Preload Enable):** Enables or disables buffering of the ARR register.  Generally enabled.
        *   **URS (Update Request Source):**  Controls the source of update interrupt.

*   **Interrupt Enable Register (DIER):** (TIMx_DIER)
    *   Enables or disables interrupts.
    *   Key bits:
        *   **UIE (Update Interrupt Enable):** Enables the update interrupt, which occurs when the counter reaches the ARR value and resets.

*   **Status Register (SR):** (TIMx_SR)
    *   Contains flags indicating the status of the timer, such as overflow and update events.
    *   Key bits:
        *   **UIF (Update Interrupt Flag):**  Set when the counter reaches the ARR value and resets. *Must be cleared in the interrupt handler.*

### 4. Configuring a Basic Timer with the STM32 HAL Library (Example)

This example demonstrates configuring TIM6 to generate a 1-second delay.

**Assumptions:**

*   STM32CubeIDE is being used.
*   HAL library is being used.
*   Clock source is the internal clock (HSI).
*   HSI clock frequency is 16 MHz (check your STM32 datasheet).
*   TIM6 is enabled in the RCC.

**Code Example (Conceptual - adjust for your specific STM32):**

```c
#include "stm32f4xx_hal.h"  // Replace with your STM32 header file

TIM_HandleTypeDef htim6; // Define a timer handle

void TIM6_Init(void) {
  // 1. Enable the TIM6 clock in RCC (Reset and Clock Control)
  __HAL_RCC_TIM6_CLK_ENABLE();

  // 2. Configure the Timer Handle structure
  htim6.Instance = TIM6;              // Select TIM6
  htim6.Init.Prescaler = 15999;       // Prescaler value: 16,000 - 1.  (16 MHz / 16000 = 1 kHz)
  htim6.Init.CounterMode = TIM_COUNTERMODE_UP; // Count Up
  htim6.Init.Period = 999;            // Auto-Reload value: 1000 - 1. (1 kHz / 1000 = 1 Hz = 1 second)
  htim6.Init.AutoReloadPreload = TIM_AUTORELOAD_PRELOAD_DISABLE; // Optional: buffer ARR register
  if (HAL_TIM_Base_Init(&htim6) != HAL_OK) {
    Error_Handler(); // Handle initialization error
  }

  // 3. Enable Update Interrupt
  HAL_TIM_Base_Start_IT(&htim6); // Start the timer and enable interrupt
    // OR just create a timed delay by not enabling interrupts
    // HAL_TIM_Base_Start(&htim6);
}

// 4.  Implement the interrupt handler (if using interrupts)
void TIM6_IRQHandler(void) {
  HAL_TIM_IRQHandler(&htim6);  // Call HAL timer interrupt handler
}

// 5. HAL timer interrupt callback
void HAL_TIM_PeriodElapsedCallback(TIM_HandleTypeDef *htim)
{
    if (htim->Instance == TIM6) {
        // This code will be executed every 1 second
        HAL_GPIO_TogglePin(GPIOA, GPIO_PIN_5);  // Example: Toggle an LED
    }
}
```

**Explanation:**

1.  **Enable Clock:** The `__HAL_RCC_TIM6_CLK_ENABLE()` macro enables the clock for TIM6 in the RCC peripheral.  This is crucial; without it, the timer won't function.

2.  **Initialize Timer Handle:** The `TIM_HandleTypeDef` structure holds the timer's configuration information.
    *   `htim6.Instance = TIM6;`: Specifies that we are configuring TIM6.
    *   `htim6.Init.Prescaler = 15999;`: The prescaler divides the 16 MHz clock by 16000, resulting in a 1 kHz timer clock frequency.
    *   `htim6.Init.CounterMode = TIM_COUNTERMODE_UP;`:  Configures the timer to count up.
    *   `htim6.Init.Period = 999;`: The ARR register is set to 999.  The timer will count from 0 to 999, which takes 1000 cycles. With a 1 kHz timer clock, this translates to a 1-second period.
    *   `htim6.Init.AutoReloadPreload = TIM_AUTORELOAD_PRELOAD_DISABLE;`:  This option determines whether the ARR register is buffered. If enabled, any modifications will be applied after the next timer update.

3.  **Start Timer and Enable Interrupt (Optional):**
    *   `HAL_TIM_Base_Start_IT(&htim6);`: Starts the timer in interrupt mode, which means the `HAL_TIM_PeriodElapsedCallback()` function will be called every time the timer overflows (reaches the ARR value).
    *   `HAL_TIM_Base_Start(&htim6);` : Starts the timer without the interrupt enabled. Can be used as a delay.

4.  **Implement Interrupt Handler (Optional):**
    *   If using interrupts, you *must* implement the `TIM6_IRQHandler()` function.  This function is called when the timer interrupt occurs.
    *   `HAL_TIM_IRQHandler(&htim6);`: This function, provided by the HAL library, clears the interrupt flag (UIF) and calls the `HAL_TIM_PeriodElapsedCallback()` function.

5.  **HAL Timer Period Elapsed Callback (Optional):**
    *   `HAL_TIM_PeriodElapsedCallback(TIM_HandleTypeDef *htim)`: This function is automatically called by the HAL library when the timer reaches its period and an update event has been flagged (UIF).
    *   Inside this function, you can perform any desired action, such as toggling an LED.  Crucially, the `htim->Instance == TIM6` check ensures the callback is executed only for TIM6, in case you have multiple timers configured.

**Important Considerations:**

*   **Interrupt Priority:** You might need to configure the interrupt priority for TIM6 in the NVIC (Nested Vector Interrupt Controller) to ensure it doesn't interfere with other interrupts in your system.  This can be done in the `TIM6_IRQHandler()` function or using the NVIC API in the HAL library.
*   **Error Handling:**  The `Error_Handler()` function is a placeholder for your error handling code.  In a real application, you should implement a robust error handling mechanism to detect and respond to potential errors during timer initialization.
*   **Datasheet:** Refer to the STM32 datasheet for the exact clock source frequency and the APB bus connected to TIM6. This can change depending on the specific STM32 microcontroller being used.
*   **Clock Tree:** Understand the clock tree of your STM32.  The APB clock frequency may be derived from the system clock with prescalers.  Verify the actual APB clock frequency to ensure the timer configuration is correct.

### 5. Prescalers and Auto-Reload Register (ARR) in Detail

*   **Prescaler (PSC):**
    *   Allows you to slow down the timer clock frequency.
    *   A larger prescaler value results in a slower timer clock.
    *   Formula: `Timer_Clock_Frequency = Input_Clock_Frequency / (Prescaler + 1)`
    *   Example:
        *   Input Clock: 16 MHz
        *   Prescaler = 15999
        *   Timer Clock: 16 MHz / (15999 + 1) = 1 kHz

*   **Auto-Reload Register (ARR):**
    *   Determines the duration of the timer.
    *   The timer counts up to the ARR value and then resets.
    *   A larger ARR value results in a longer timer period.
    *   Formula: `Timer_Period = (ARR + 1) / Timer_Clock_Frequency`
    *   Example:
        *   Timer Clock: 1 kHz
        *   ARR = 999
        *   Timer Period: (999 + 1) / 1 kHz = 1 second

**Choosing Prescaler and ARR Values:**

The key is to choose values that result in the desired timer frequency and period.  There are usually multiple combinations that will achieve the same result. However, there are some practical considerations:

*   **Maximizing Resolution:** To achieve the highest possible resolution in your timing, aim for a lower prescaler and a higher ARR value. This allows you to measure time more precisely.

*   **Avoiding Overflow:** Ensure that the chosen ARR value does not exceed the maximum value that the register can hold (65535 for 16-bit timers).  If your calculation results in an ARR value that's too large, increase the prescaler to bring the ARR value down.

### 6. Impact of Clock Sources on Timer Operation

The clock source used for the timer directly impacts its accuracy and performance. Common clock sources include:

*   **Internal Clock (HSI/LSI):**
    *   HSI (High-Speed Internal): A factory-trimmed RC oscillator (typically 16 MHz).
    *   LSI (Low-Speed Internal): A low-power RC oscillator (typically 32 kHz).
    *   Generally less accurate than external crystals, but suitable for many applications where high precision isn't critical.  HSI is commonly used as a default.

*   **External Clock (HSE/LSE):**
    *   HSE (High-Speed External): Typically a crystal oscillator with frequencies ranging from a few MHz to tens of MHz.
    *   LSE (Low-Speed External): Typically a 32.768 kHz crystal oscillator used for RTC.
    *   More accurate than internal oscillators but require external components.

**Considerations:**

*   **Accuracy:** External crystals generally provide the highest accuracy and stability.
*   **Power Consumption:** Internal oscillators usually consume less power than external crystals.
*   **Startup Time:** Internal oscillators typically start up faster than external crystals.
*   **Clock Tree Configuration:** You need to configure the STM32 clock tree correctly to select the desired clock source and route it to the timer. This involves configuring the RCC registers.

---

### Practice Questions and Exercises

1.  **Question:** If the STM32 microcontroller has an HSI clock of 16 MHz and you want to configure a basic timer to generate a frequency of 100 Hz, what values should you choose for the prescaler (PSC) and auto-reload register (ARR)?

    **Answer:**
    *   Timer Clock Frequency = 16 MHz / (PSC + 1)
    *   Timer Period = (ARR + 1) / Timer Clock Frequency
    *   Desired Frequency = 100 Hz => Desired Period = 1/100 = 0.01 seconds = 10 ms

    One possible solution:
    *   Let PSC = 159. Then Timer Clock Frequency = 16 MHz / (159 + 1) = 100 kHz
    *   Then ARR = (Timer Period * Timer Clock Frequency) - 1 = (0.01 * 100000) - 1 = 999
    *   Therefore, PSC = 159 and ARR = 999

    Another possible solution (aiming for lower PSC, higher ARR for better resolution):
    *   Let PSC = 0. Then Timer Clock Frequency = 16 MHz
    *   Then ARR = (Timer Period * Timer Clock Frequency) - 1 = (0.01 * 16000000) - 1 = 159999.  *This is too high for a 16-bit timer!*. So PSC must be increased.

2.  **Exercise:**  Write the code to configure TIM7 to generate an interrupt every 500 milliseconds using the STM32 HAL library. Assume HSI = 16MHz. Include clock enabling, timer initialization, and the basic interrupt handler structure.

    **Answer:**

    ```c
    #include "stm32f4xx_hal.h"

    TIM_HandleTypeDef htim7;

    void TIM7_Init(void) {
        // 1. Enable the TIM7 clock in RCC
        __HAL_RCC_TIM7_CLK_ENABLE();

        // 2. Configure the Timer Handle structure
        htim7.Instance = TIM7;
        htim7.Init.Prescaler = 7999;  // 16 MHz / (7999 + 1) = 2 kHz
        htim7.Init.CounterMode = TIM_COUNTERMODE_UP;
        htim7.Init.Period = 999;     // 2 kHz / (999 + 1) = 2 Hz => 0.5 seconds
        htim7.Init.AutoReloadPreload = TIM_AUTORELOAD_PRELOAD_DISABLE;
        if (HAL_TIM_Base_Init(&htim7) != HAL_OK) {
            Error_Handler();
        }

        // 3. Enable Update Interrupt
        HAL_TIM_Base_Start_IT(&htim7);
    }

    // 4. Implement the interrupt handler
    void TIM7_IRQHandler(void) {
        HAL_TIM_IRQHandler(&htim7);
    }

    // 5. Implement the HAL timer period elapsed callback
    void HAL_TIM_PeriodElapsedCallback(TIM_HandleTypeDef *htim) {
        if (htim->Instance == TIM7) {
            // This code will be executed every 500 milliseconds
            HAL_GPIO_TogglePin(GPIOA, GPIO_PIN_5);  // Example: Toggle an LED
        }
    }
    ```

3.  **Question:** What is the purpose of the `HAL_TIM_IRQHandler()` function in the STM32 HAL library?

    **Answer:** The `HAL_TIM_IRQHandler()` function is a pre-defined function in the HAL library that must be called from your timer's interrupt handler (e.g., `TIM6_IRQHandler()`). It performs the following key tasks:

    *   **Clears the Interrupt Flag (UIF):** It clears the update interrupt flag (UIF) in the timer's status register (TIMx_SR). This is crucial to prevent the interrupt from being continuously triggered after the first occurrence.
    *   **Calls the HAL Timer Period Elapsed Callback:** If the update interrupt is enabled (UIE bit is set in TIMx_DIER), it calls the `HAL_TIM_PeriodElapsedCallback()` function. This callback function is where you implement the specific actions you want to perform each time the timer reaches its period (ARR value).

4.  **Question:** What happens if you don't enable the clock for the timer peripheral using `__HAL_RCC_TIMx_CLK_ENABLE()`?

    **Answer:** If you don't enable the clock for the timer peripheral, the timer will not function correctly. The timer will not receive any clock pulses, so the counter will not increment, and no interrupts will be generated. The timer registers might be accessible, but any changes you make to them will have no effect because the timer itself is not running.

---

### Important Points to Remember

*   **Clock Enable:** Always enable the clock to the timer peripheral in the RCC before configuring any timer registers.
*   **Datasheet:** Consult the STM32 datasheet for the specific clock frequencies, timer peripherals available, and the APB bus they are connected to.
*   **Interrupt Handling:** If using interrupts, clear the interrupt flag in the interrupt handler and configure the interrupt priority in the NVIC if necessary.
*   **HAL Library:** Leverage the STM32 HAL library for easier timer configuration and interrupt handling.
*   **Resolution vs. Range:**  Consider the trade-off between timer resolution and the maximum time delay you can achieve.  Choose prescaler and ARR values accordingly.
*   **Error Handling:** Implement error handling to detect and respond to potential errors during timer initialization and operation.
*   **Timer Selection:** Choose the appropriate timer type (Basic, General-Purpose, or Advanced) based on your application's requirements.  Start with Basic Timers (TIM6/TIM7) for simple delay tasks.
