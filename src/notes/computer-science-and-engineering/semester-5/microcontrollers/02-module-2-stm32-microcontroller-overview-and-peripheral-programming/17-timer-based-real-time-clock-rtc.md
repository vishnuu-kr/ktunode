---
title: "Timer-Based Real-Time Clock (RTC)"
subject: "MICROCONTROLLERS"
module: "Module 2: STM32 Microcontroller Overview and Peripheral Programming:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b624"
status: "completed"
scrapedAt: "2026-05-20T16:48:39.108Z"
---
## Module 2: STM32 Microcontroller Overview and Peripheral Programming - Timer-Based Real-Time Clock (RTC)

**Introduction:** This module focuses on understanding and implementing a Real-Time Clock (RTC) using timers in STM32 microcontrollers. While dedicated RTC peripherals exist in STM32, this module explores how general-purpose timers can be leveraged to create a functional RTC, providing valuable insights into timer functionality and timekeeping principles.

**Learning Outcomes:**

*   Understand the concept of a Real-Time Clock (RTC) and its applications.
*   Learn how to implement a software-based RTC using STM32 timers.
*   Configure STM32 timers in specific modes for accurate timekeeping.
*   Implement interrupt-driven approaches to update time values.
*   Be able to retrieve and display the current time.
*   Compare the advantages and disadvantages of timer-based RTC vs. hardware RTC peripherals.

**1. Concept of a Real-Time Clock (RTC) and its Applications:**

*   **Definition:** A Real-Time Clock (RTC) is a clock that keeps track of the current time, even when the main power supply is switched off.

*   **Function:** Typically, RTCs are powered by a battery or a supercapacitor, allowing them to maintain time information independently of the main system.

*   **Key Features:**
    *   Keeps track of seconds, minutes, hours, days, months, and years.
    *   May include features like alarms, calendar functions, and temperature compensation.

*   **Applications:**
    *   **Embedded Systems:**  Data loggers, industrial control systems, wearable devices.
    *   **Consumer Electronics:**  Watches, alarm clocks, televisions, DVD players.
    *   **Automotive:**  Vehicle tracking, engine control units (ECUs).
    *   **Medical Devices:**  Patient monitoring systems, medical equipment.
    *   **IoT Devices:** Maintaining time synchronization for data integrity.

**2. Implementing a Software-Based RTC using STM32 Timers:**

*   **Core Idea:**  Use a timer to generate periodic interrupts.  Each interrupt represents a fixed time interval (e.g., 1 second).  Within the interrupt handler, update the timekeeping variables (seconds, minutes, hours, etc.).

*   **Benefits of Timer-Based RTC:**
    *   **Cost-effective:** Utilizes existing timer resources, avoiding the need for a dedicated RTC chip if high accuracy and low power are not critical requirements.
    *   **Flexibility:** Offers more customization options compared to some hardware RTC peripherals.  Software can be easily modified to implement specific features.
    *   **Educational Value:**  Provides a deep understanding of timer functionality and interrupt handling.

*   **Limitations of Timer-Based RTC:**
    *   **Accuracy:** Accuracy depends on the stability of the STM32's clock source (e.g., internal RC oscillator or external crystal).  Timer jitter and interrupt latency can introduce errors.
    *   **Power Consumption:** General-purpose timers typically consume more power than dedicated low-power RTC peripherals.
    *   **Resource Intensive:** Requires CPU time for interrupt handling and timekeeping calculations.
    *   **Volatility:** Requires system power to maintain time. Loss of power results in loss of time. Needs to be initialized on boot or saved to non-volatile memory (Flash).

**3. Configuring STM32 Timers for Accurate Timekeeping:**

*   **Timer Selection:** Choose a timer that is suitable for the task (e.g., a general-purpose timer with sufficient prescaler and counter resolution).

*   **Clock Source:**
    *   **Internal RC Oscillator (HSI):**  Simple to use but less accurate due to temperature and voltage variations.
    *   **External Crystal Oscillator (HSE):**  More accurate but requires external components.
    *   **LSE (Low Speed External):** Most accurate and low power option for RTC if available.

*   **Prescaler:**  The prescaler divides the timer's clock frequency to achieve a suitable counting frequency.  Calculate the prescaler value to achieve a desired interrupt frequency (e.g., 1 Hz for 1-second intervals).

    *   `Prescaler = (Timer Clock Frequency / Desired Counting Frequency) - 1`

*   **Counter Period (ARR - Auto-Reload Register):**  Determines the maximum count value before the timer resets and generates an interrupt.  Set the ARR value based on the desired interrupt frequency and the prescaled clock frequency.

    *   `ARR = (Prescaled Clock Frequency / Desired Interrupt Frequency) - 1`

*   **Timer Mode:**  Select a timer mode suitable for generating periodic interrupts.
    *   **Up-counting mode:** Counts from 0 to ARR and resets.
    *   **Center-aligned mode:** Counts up to ARR and then down to 0, or vice versa.

*   **Enable Interrupt:** Enable the timer's update interrupt in the NVIC (Nested Vectored Interrupt Controller) to trigger the interrupt handler when the counter reaches the ARR value.

**Example: Configuring Timer 2 for 1-second interrupts with a system clock of 72 MHz (HSI):**

```c
// Assuming SystemCoreClock is 72 MHz

void TIM2_Config(void) {
  // 1. Enable TIM2 clock in RCC
  RCC->APB1ENR |= RCC_APB1ENR_TIM2EN;

  // 2. Set prescaler to achieve a 1 kHz counting frequency
  //   Prescaler = (72000000 Hz / 1000 Hz) - 1 = 71999
  TIM2->PSC = 71999;

  // 3. Set Auto-Reload Register (ARR) to generate 1 Hz interrupt
  //   ARR = (1000 Hz / 1 Hz) - 1 = 999
  TIM2->ARR = 999;

  // 4. Enable Update Interrupt (UIE)
  TIM2->DIER |= TIM_DIER_UIE;

  // 5. Enable TIM2 interrupt in NVIC
  NVIC_EnableIRQ(TIM2_IRQn);

  // 6. Start TIM2
  TIM2->CR1 |= TIM_CR1_CEN;
}
```

**4. Implementing Interrupt-Driven Approaches to Update Time Values:**

*   **Interrupt Handler:**  Create an interrupt handler function that is executed each time the timer's update event occurs.

*   **Timekeeping Variables:**  Declare global variables to store the current time values: seconds, minutes, hours, day, month, year.  Choose appropriate data types (e.g., `uint8_t` for seconds, minutes, hours; `uint16_t` for year).

*   **Incrementing Time Values:** Inside the interrupt handler, increment the `seconds` variable.  When `seconds` reaches 60, reset it to 0 and increment `minutes`.  Repeat this process for `minutes`, `hours`, `day`, `month`, and `year`, handling the complexities of day/month length (e.g., leap years).

*   **Leap Year Calculation:**
    *   A year is a leap year if it is divisible by 4, unless it is also divisible by 100 but not by 400.

```c
// Global variables to store time
volatile uint8_t seconds = 0;
volatile uint8_t minutes = 0;
volatile uint8_t hours = 0;
volatile uint8_t day = 1;
volatile uint8_t month = 1;
volatile uint16_t year = 2023;


void TIM2_IRQHandler(void) {
  // Check if update interrupt flag is set
  if (TIM2->SR & TIM_SR_UIF) {
    // Clear the interrupt flag
    TIM2->SR &= ~TIM_SR_UIF;

    seconds++;

    if (seconds >= 60) {
      seconds = 0;
      minutes++;

      if (minutes >= 60) {
        minutes = 0;
        hours++;

        if (hours >= 24) {
          hours = 0;
          day++;

          // Days in each month
          uint8_t daysInMonth[] = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

          //Leap year calculation
          if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
              daysInMonth[2] = 29; // Leap year adjustment for February
          }


          if (day > daysInMonth[month]) {
            day = 1;
            month++;

            if (month > 12) {
              month = 1;
              year++;
            }
          }
        }
      }
    }
  }
}
```

**5. Retrieving and Displaying the Current Time:**

*   **Time Access:**  Create functions to retrieve the current time values from the global variables.

*   **Data Conversion:** Convert the time values into a suitable format for display (e.g., string format).

*   **Display Methods:**
    *   **UART:** Send the time information to a serial terminal.
    *   **LCD:** Display the time on an LCD screen.
    *   **Other Peripherals:** Use other output devices to indicate the time (e.g., LEDs, buzzers).

**Example: Retrieving and displaying the current time via UART:**

```c
#include <stdio.h> // for sprintf

void getTime(uint8_t *sec, uint8_t *min, uint8_t *hr, uint8_t *dy, uint8_t *mon, uint16_t *yr) {
  *sec = seconds;
  *min = minutes;
  *hr = hours;
  *dy = day;
  *mon = month;
  *yr = year;
}

void displayTimeViaUART(void) {
  uint8_t sec, min, hr, dy, mon;
  uint16_t yr;
  char timeString[50];

  getTime(&sec, &min, &hr, &dy, &mon, &yr);

  sprintf(timeString, "%02d:%02d:%02d  %02d/%02d/%04d\r\n", hr, min, sec, dy, mon, yr);

  // Assuming you have a UART_Transmit function
  UART_Transmit((uint8_t*)timeString, strlen(timeString));
}

// Call this function periodically in your main loop.
int main(void) {
  // Initialize clock, peripherals, timer, and UART
  SystemClock_Config(); // Function to set up your clock
  UART_Init(); // function to setup your UART
  TIM2_Config(); // Function to configure the timer

  while(1){
        displayTimeViaUART();
        HAL_Delay(1000); //Display every second
  }
}
```

**6. Advantages and Disadvantages of Timer-Based RTC vs. Hardware RTC Peripherals:**

| Feature         | Timer-Based RTC                                                                              | Hardware RTC Peripheral                                                              |
|-----------------|---------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| **Accuracy**    | Lower. Dependent on system clock stability. Subject to interrupt latency and jitter.            | Higher. Typically uses a dedicated low-frequency crystal oscillator.                  |
| **Power Consumption** | Higher. General-purpose timers typically consume more power.                            | Lower. Designed for low-power operation, especially in backup mode.                 |
| **Cost**        | Lower. Utilizes existing timer resources.                                                     | Higher. Requires a dedicated RTC chip (integrated or external).                   |
| **Complexity**  | Simpler in hardware. More complex software for timekeeping logic.                            | More complex in hardware (dedicated peripheral). Simpler software interaction.    |
| **Features**      | Limited. Features are implemented in software.                                                | More advanced.  Often includes alarms, calendar functions, temperature compensation. |
| **Battery Backup** | Requires external circuitry and careful software management to store the time in case of power loss | Designed with battery backup. Maintains time even without main power supply.         |
| **Resource Use**  | Occupies a general-purpose timer. Requires CPU time for interrupt handling.                    | Requires a dedicated RTC peripheral.                                                 |
| **Flexibility** | High. Software-defined functionality can be adapted.                                         | Lower.  Limited by the capabilities of the RTC peripheral.                         |

**Important Points to Remember:**

*   **Clock Source Accuracy:** The accuracy of the timer-based RTC is directly related to the accuracy of the chosen clock source. Use an external crystal oscillator for better accuracy if needed.
*   **Interrupt Latency:** Interrupt latency can introduce inaccuracies. Minimize interrupt handler execution time to reduce latency.
*   **Overflow Handling:** Carefully handle overflows of the timekeeping variables to ensure correct timekeeping.
*   **Power Management:** In low-power applications, consider using low-power modes to reduce overall power consumption. Store the time in a non-volatile memory (like Flash) before entering a low-power mode where RAM contents are lost.
*   **Synchronization:** For increased accuracy, the timer-based RTC can be synchronized with an external time source (e.g., NTP server) periodically.
*   **Critical Sections:** Protect timekeeping variables with critical sections (disable interrupts) when reading or writing them to prevent race conditions. This is especially important if the variables are accessed from both the main loop and the interrupt handler.

**Practice Questions/Exercises:**

1.  **Calculate the prescaler and ARR values for Timer 3 to generate 2 Hz interrupts, assuming the timer clock frequency is 8 MHz.**
    *   *Answer:* Prescaler = (8000000 / 2000) - 1 = 3999; ARR = (2000 / 2) - 1 = 999
2.  **Explain the key difference between a timer-based RTC and a hardware RTC peripheral.**
    *   *Answer:* A timer-based RTC uses a general-purpose timer to keep track of time, while a hardware RTC peripheral is a dedicated chip designed specifically for timekeeping, typically with lower power consumption and higher accuracy.
3.  **Describe how to handle leap years in the timekeeping logic of a timer-based RTC.**
    *   *Answer:*  A year is a leap year if it is divisible by 4, unless it is also divisible by 100 but not by 400.  Adjust the number of days in February (29 days) accordingly.
4.  **What are the potential sources of error in a timer-based RTC and how can they be minimized?**
    *   *Answer:* Potential sources of error include clock source inaccuracy, interrupt latency, and timer jitter.  These can be minimized by using a more accurate clock source, reducing interrupt handler execution time, and using a timer with high resolution.
5.  **Write the code to initialize the RTC with the values: 08:30:00, 16/11/2024**
    ```c
    void RTC_Init_Date(uint8_t hr, uint8_t min, uint8_t sec, uint8_t dy, uint8_t mon, uint16_t yr) {
        hours = hr;
        minutes = min;
        seconds = sec;
        day = dy;
        month = mon;
        year = yr;

    }

    //...In the main method after configurations
    RTC_Init_Date(8, 30, 0, 16, 11, 2024);
    ```
**Conclusion:**

This module provided a comprehensive overview of implementing a Real-Time Clock (RTC) using STM32 timers.  While a dedicated hardware RTC peripheral is often preferred for critical applications requiring high accuracy and low power consumption, understanding the principles of timer-based timekeeping is invaluable for embedded systems development. You have learned how to configure timers, handle interrupts, implement timekeeping logic, and retrieve/display the current time. Remember to consider the trade-offs between accuracy, power consumption, and resource utilization when choosing between a timer-based RTC and a hardware RTC peripheral.
