---
title: "Timers as Counters"
subject: "MICROCONTROLLERS"
module: "Module 2: STM32 Microcontroller Overview and Peripheral Programming:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b623"
status: "completed"
scrapedAt: "2026-05-20T16:48:38.411Z"
---
# MICROCONTROLLERS - Module 2: STM32 Timers as Counters

## Topic: Timers as Counters

**Introduction:**

This section focuses on understanding and utilizing STM32 timers specifically in *counter mode*. We will explore how timers can be configured to count external events or pulses, enabling functionalities like frequency measurement, pulse counting, and event monitoring.

**Learning Outcomes:**

*   Understand the difference between timer as a timer and timer as a counter.
*   Configure STM32 timers to operate as counters.
*   Utilize counter mode to measure external events and frequencies.
*   Explain different counting modes: Edge-aligned and Center-aligned.
*   Implement interrupt handling for overflow/update events in counter mode.
*   Use practical applications like frequency measurement using an STM32 timer as a counter.

**1. Key Concepts and Definitions**

*   **Timer as Timer (Time Base Generation):** In timer mode, the timer increments its counter based on an internal clock source (e.g., APB clock prescaled). This is used for generating precise delays, PWM signals, and triggering other peripherals at specific intervals.

*   **Timer as Counter (Event Counting):** In counter mode, the timer increments its counter based on an external signal applied to a specific timer input pin. This is used for counting events, measuring frequencies, or determining the duration of external pulses.

*   **Clock Source:**
    *   **Internal Clock:** The timer uses the internal APB clock as its time base in timer mode.
    *   **External Clock:** The timer uses an external signal applied to a designated input pin (e.g., TI1, TI2) as its clock source in counter mode.

*   **Prescaler:** Divides the input clock frequency to the counter. Important for adapting the counting frequency to the range of events you want to measure.

*   **Auto-Reload Register (ARR):** Determines the maximum count value. When the counter reaches ARR, it resets to 0 (or another configured value) and generates an update event (overflow).

*   **Counter Register (CNT):** Holds the current count value.  It increments on each rising/falling edge of the external clock signal.

*   **Update Event (Overflow):** Occurs when the counter reaches the value in ARR and resets. This event can trigger an interrupt.

*   **Counting Modes:**

    *   **Edge-Aligned Mode (Up-counting or Down-counting):**
        *   The counter increments (up-counting) or decrements (down-counting) on each rising or falling edge of the external clock signal.
        *   Simple to implement.
        *   Suitable for general event counting.

    *   **Center-Aligned Mode (Up-down counting):**
        *   The counter counts upwards from 0 to ARR and then downwards from ARR to 0.
        *   Generates more precise PWM signals in timer mode.  In counter mode, it allows counting both rising and falling edges, potentially doubling the resolution.
        *   More complex configuration.

*   **Input Capture (IC) (Relationship):** While not strictly 'counter mode', understanding Input Capture is helpful as IC often works in conjunction with counter configurations. IC is used to capture the timer's counter value when a specific event occurs on an input pin. It's often used to measure pulse widths or periods with high accuracy.  Counter mode can drive IC to provide more flexibility.

**2. Configuring STM32 Timers as Counters**

*   **Selecting the Timer:** Choose an appropriate timer based on your STM32 device and the available input pins. Refer to the STM32 datasheet.

*   **Enabling the Timer Clock:** Enable the clock for the selected timer in the RCC (Reset and Clock Control) peripheral.

*   **Configuring the GPIO Pin for Timer Input:** Configure the GPIO pin to be used as the external clock input (TI1, TI2, or ETR) in Alternate Function mode, associating it with the timer.

*   **Timer Configuration (Register Settings):**

    *   **Set the Counter Mode:** Configure the `CEN` (Counter Enable) bit in the `TIMx_CR1` register.
    *   **Set the Clock Source:**  Set the clock source. Usually by configuring the SMS bits in the `TIMx_SMCR` register to External Clock mode 1 or External Clock mode 2. This typically involves selecting the TI1, TI2, or ETR input as the clock source.
    *   **Configure the Prescaler:** Set the prescaler value in the `TIMx_PSC` register to divide the external clock frequency if needed. This is essential if the input frequency is too high for the timer's counter to handle.
    *   **Set the Auto-Reload Value (ARR):** Set the `TIMx_ARR` register to determine the maximum count value.  The counter will reset when it reaches this value.
    *   **Configure the Counting Direction (Edge-Aligned vs. Center-Aligned):** The counting direction can be set using the DIR bit in the TIMx_CR1 register.

*   **Enabling Interrupts (Optional):** If you want to be notified when the counter overflows (reaches ARR), enable the Update Interrupt (UIE) in the `TIMx_DIER` register and configure the NVIC (Nested Vector Interrupt Controller) to handle the timer interrupt.

**3. Utilizing Counter Mode to Measure External Events and Frequencies**

*   **Event Counting:** After configuring the timer as a counter, the `TIMx_CNT` register will hold the number of events that have occurred on the input pin. You can read this register at any time to determine the count.

*   **Frequency Measurement (Methods):**

    *   **Gate Time Method (Direct Counting):** Count the number of pulses within a known gate time.

        1.  Enable the timer as a counter.
        2.  Start the timer.
        3.  Wait for a predetermined gate time (e.g., 1 second).  This can be achieved using another timer configured as a timer.
        4.  Read the value of the `TIMx_CNT` register.
        5.  The frequency is the count divided by the gate time.

        ```
        Frequency = Count / Gate Time
        ```

    *   **Period Measurement (Reciprocal Method):**  Measure the time between two consecutive rising (or falling) edges. This is most effective when the frequency is relatively low. Use input capture to determine the period. Then, frequency is the reciprocal of period.

        1.  Configure the timer's input capture channel to capture the rising or falling edge of the signal.
        2.  Capture the first rising edge value.
        3.  Capture the second rising edge value.
        4.  The period is the difference between the two captured values.  Convert this to time based on timer clock.
        5.  The frequency is 1 / Period.

        ```
        Frequency = 1 / Period
        ```

**4. Examples (Code Snippets - Illustrative)**

```c
// Example:  STM32 Timer Configuration as Counter (Edge-Aligned)

#include "stm32f4xx.h" // Or appropriate header for your STM32 family

void Timer2_Counter_Init(void) {
    // 1. Enable Timer 2 clock in RCC
    RCC->APB1ENR |= RCC_APB1ENR_TIM2EN;

    // 2. Configure GPIO Pin A0 (PA0) for TIM2_CH1 (External Clock Input)
    RCC->AHB1ENR |= RCC_AHB1ENR_GPIOAEN;
    GPIOA->MODER |= GPIO_MODER_MODER0_1; // Alternate Function mode
    GPIOA->AFR[0] |= (0x01 << GPIO_AFRL_AFRL0_Pos); // AF1 for TIM2_CH1

    // 3. Timer 2 Configuration (Counter Mode)
    TIM2->CR1 &= ~TIM_CR1_DIR; //Upcounting direction
    TIM2->SMCR |= TIM_SMCR_SMS_2 | TIM_SMCR_SMS_0; // External clock mode 1
    TIM2->PSC = 0; // No prescaler
    TIM2->ARR = 0xFFFF; // Maximum count value

    // 4. Enable Update Interrupt (Optional)
    // TIM2->DIER |= TIM_DIER_UIE; // Enable Update Interrupt
    // NVIC_EnableIRQ(TIM2_IRQn);  // Enable Timer 2 IRQ in NVIC

    // 5. Enable Timer
    TIM2->CR1 |= TIM_CR1_CEN;

}

// Example: Reading the counter value

uint32_t Get_Event_Count(void) {
  return TIM2->CNT;
}

//Example of measuring frequency (using another timer as a gate)

#include "stm32f4xx.h"

uint32_t eventCount = 0;

void TIM3_IRQHandler(void) {
  if (TIM3->SR & TIM_SR_UIF) {
        eventCount = TIM2->CNT;
        TIM2->CNT = 0;

        TIM3->SR &= ~TIM_SR_UIF;
    }
}

void Timer3_Init(void)
{
  //Enable the clocks for timer 3
  RCC->APB1ENR |= RCC_APB1ENR_TIM3EN;
  TIM3->PSC = 8399; // Prescaler Value for 10kHz. Assuming APB1 at 84 MHz
  TIM3->ARR = 9999;  // Count Value for 1 Hz i.e. 1 Second.
  TIM3->DIER |= TIM_DIER_UIE;
  TIM3->CR1 |= TIM_CR1_CEN;
  NVIC_EnableIRQ(TIM3_IRQn);
}

float getFrequency(){
  return (float) eventCount;
}


int main(void) {
    Timer2_Counter_Init();
    Timer3_Init();

    while(1){
      float frequency = getFrequency();
      //Now do something with the frequency

    }
}
```

**Important Notes:**

*   Replace `stm32f4xx.h` with the appropriate header file for your specific STM32 device.
*   Refer to the STM32 Reference Manual and Datasheet for detailed register descriptions and pin assignments.
*   Proper GPIO pin configuration is crucial for the timer to receive the external clock signal correctly.
*   The prescaler value should be carefully selected to ensure that the input frequency is within the timer's acceptable range.
*   Debugging the interrupt handling is important if you're using update interrupts.

**5. Interrupt Handling for Overflow/Update Events in Counter Mode**

*   **Enable the Update Interrupt:**  Set the `UIE` bit in the `TIMx_DIER` register.
*   **Configure the NVIC:** Enable the timer interrupt in the NVIC (Nested Vector Interrupt Controller) using `NVIC_EnableIRQ(TIMx_IRQn)`.
*   **Write the Interrupt Handler:**  Create the interrupt handler function (e.g., `TIM2_IRQHandler`) to process the update event. Within the handler:
    *   Clear the update interrupt flag (`UIF`) in the `TIMx_SR` register. **This is critical to prevent the interrupt from firing repeatedly.**
    *   Increment a global counter variable to keep track of the number of overflows.
    *   Perform any other necessary actions.

```c
// Example: Timer 2 Interrupt Handler

void TIM2_IRQHandler(void) {
    if (TIM2->SR & TIM_SR_UIF) {  // Check if Update Interrupt Flag is set
        // Update event occurred

        // Clear the Update Interrupt Flag (VERY IMPORTANT!)
        TIM2->SR &= ~TIM_SR_UIF;

        // Increment a global overflow counter
        overflowCount++;

        // Perform other actions as needed
    }
}
```

**6. Practice Questions/Exercises**

1.  **Question:** What is the key difference between using a timer in "timer mode" and "counter mode"?

    **Answer:** In timer mode, the timer increments based on an *internal* clock source, while in counter mode, it increments based on an *external* signal.

2.  **Question:** Explain how the prescaler affects the counting frequency when using a timer as a counter.

    **Answer:** The prescaler divides the external clock frequency. A higher prescaler value results in a lower counting frequency, allowing the timer to measure lower frequencies or longer event durations.

3.  **Question:** Describe the two primary methods for frequency measurement using an STM32 timer as a counter.

    **Answer:**
    *   **Gate Time Method:** Count the number of pulses within a known gate time. Frequency = Count / Gate Time.
    *   **Period Measurement (Reciprocal Method):** Measure the period (time between pulses) using input capture. Frequency = 1 / Period.

4. **Question:** A timer is configured as a counter.  The external clock signal has a frequency of 1 kHz. The prescaler is set to 10.  What is the effective counting frequency?

   **Answer:** The effective counting frequency is 1 kHz / 10 = 100 Hz.

5.  **Exercise:**  Write the initialization code (using CMSIS) to configure Timer 3 as an up-counting counter that counts pulses on the TIM3_CH1 input (assuming this is mapped to a suitable GPIO pin). Include the necessary GPIO configuration as well. Set the ARR to 1000. Do not enable interrupts.

   ```c
   #include "stm32f4xx.h"

   void Timer3_Counter_Init(void) {
       // 1. Enable Timer 3 clock in RCC
       RCC->APB1ENR |= RCC_APB1ENR_TIM3EN;

       // 2. Configure GPIO Pin for TIM3_CH1 (Example: PB4, consult datasheet)
       RCC->AHB1ENR |= RCC_AHB1ENR_GPIOBEN;
       GPIOB->MODER |= GPIO_MODER_MODER4_1; // Alternate Function mode
       GPIOB->AFR[0] |= (0x02 << GPIO_AFRL_AFRL4_Pos); // AF2 for TIM3_CH1

       // 3. Timer 3 Configuration (Counter Mode)
       TIM3->CR1 &= ~TIM_CR1_DIR; //Upcounting direction
       TIM3->SMCR |= TIM_SMCR_SMS_2 | TIM_SMCR_SMS_0; // External clock mode 1
       TIM3->PSC = 0; // No prescaler
       TIM3->ARR = 1000; // Set ARR value

       // 4. Enable Timer
       TIM3->CR1 |= TIM_CR1_CEN;
   }
   ```

**7. Important Points to Remember**

*   **Datasheet is Key:**  Always refer to the STM32 reference manual and datasheet for your specific device. Register names, bit fields, and pin mappings can vary.
*   **GPIO Configuration Matters:** Incorrect GPIO configuration will prevent the timer from receiving the external clock signal.
*   **Prescaler Selection:** Choose the prescaler value carefully to match the expected frequency range.  Overflowing the counter can lead to incorrect measurements.
*   **Clear Interrupt Flags:**  Always clear the update interrupt flag (UIF) in the interrupt handler to prevent infinite interrupts.
*   **Debugging:** Use a debugger to verify that the timer is counting correctly and that the interrupt handler is being called as expected.  Use breakpoints to examine the contents of timer registers (CNT, ARR, SR, etc.).
*   **Noise Sensitivity:**  External clock signals can be susceptible to noise.  Consider using filtering or debouncing techniques to ensure accurate counting.
