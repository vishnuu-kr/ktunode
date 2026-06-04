---
title: "Relay Interfacing"
subject: "MICROCONTROLLERS"
module: "Module 2: STM32 Microcontroller Overview and Peripheral Programming:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b61c"
status: "completed"
scrapedAt: "2026-05-20T16:48:33.347Z"
---
# MICROCONTROLLERS - Module 2: STM32 Microcontroller Overview and Peripheral Programming - Relay Interfacing

## Introduction

This document provides comprehensive study notes on Relay Interfacing with STM32 microcontrollers.  It covers key concepts, definitions, examples, and practice exercises to help you understand how to control relays using an STM32.

## Learning Outcomes

By the end of this module, you should be able to:

*   Understand the purpose and function of relays.
*   Describe different types of relays.
*   Explain the need for protection circuits when interfacing relays with microcontrollers.
*   Design and implement a circuit to control a relay using an STM32 microcontroller.
*   Write STM32 code to control a relay through a GPIO pin.

## 1. Relays: Purpose and Function

*   **Definition:** A relay is an electromechanical switch. It is an electrically operated switch that can be controlled with a relatively low-power signal to switch a higher-power circuit on or off.

*   **Purpose:**
    *   **Isolation:**  Relays provide electrical isolation between the control circuit (microcontroller) and the load circuit (e.g., a high-voltage device). This protects the microcontroller from damage due to high voltage or current.
    *   **Amplification:** A small current from the microcontroller can switch a much larger current in the load circuit.
    *   **Control of High-Power Devices:** Enables microcontrollers to control devices that require higher voltage or current levels than the microcontroller can provide.
    *   **Remote Control:** Allows control of circuits from a distance.

*   **Function:** A relay consists of a coil, an armature (movable contact), and a set of contacts (normally open - NO, normally closed - NC, and common - COM).  When a current flows through the coil, it generates a magnetic field, which attracts the armature. This moves the armature and changes the state of the contacts, either opening or closing the circuit.

## 2. Types of Relays

*   **Electromechanical Relays (EMR):**
    *   **Operating Principle:** Use a coil to generate a magnetic field that physically moves the contacts.
    *   **Advantages:** Simple to use, good for high voltage/current applications, provides good isolation.
    *   **Disadvantages:** Slower switching speed, larger size, mechanical wear and tear, higher power consumption.
    *   **Common Types:** General-purpose relays, power relays, latching relays (require a separate pulse to change state).

*   **Solid-State Relays (SSR):**
    *   **Operating Principle:** Use solid-state components (e.g., thyristors, transistors) to switch the load.
    *   **Advantages:** Faster switching speed, longer lifespan, smaller size, no mechanical parts, lower power consumption.
    *   **Disadvantages:** More sensitive to voltage spikes, less isolation than EMRs, may generate heat.
    *   **Common Types:** DC SSRs, AC SSRs.

*   **Reed Relays:**
    *   **Operating Principle:** Use a magnetic field to close reed switches (thin metal strips enclosed in a glass tube).
    *   **Advantages:** Fast switching, low contact resistance, good for low-level signals.
    *   **Disadvantages:** Limited current and voltage handling.

*   **Latching Relays (or Bistable Relays):**
    *   **Operating Principle:**  Maintain their state (either on or off) even after the control signal is removed.  They require separate pulses to set and reset.
    *   **Advantages:** Low power consumption (only consume power when switching), ideal for battery-powered applications.
    *   **Disadvantages:** More complex control circuitry.

## 3. Need for Protection Circuits

*   **Flyback Diode (Snubber Diode):**
    *   **Problem:** When the relay coil is de-energized (turned off), the magnetic field collapses. This collapsing field generates a large voltage spike (back EMF or flyback voltage) across the coil. This spike can damage the transistor or other components driving the relay.
    *   **Solution:** A flyback diode (e.g., 1N4001) is placed in reverse bias across the relay coil. When the relay is de-energized, the diode becomes forward-biased, providing a path for the current from the collapsing magnetic field to circulate through the diode and coil until the energy is dissipated.  This limits the voltage spike to approximately the diode's forward voltage drop (around 0.7V).
    *   **Importance:** Protects the microcontroller and driver circuitry from damage.

*   **Current Limiting Resistor:**
    *   **Problem:**  The relay coil has a specific current requirement for proper operation. Connecting the coil directly to a voltage source without a current-limiting resistor could cause excessive current to flow, potentially damaging the coil and/or the driving transistor.
    *   **Solution:**  A resistor in series with the relay coil limits the current to a safe level.
    *   **Calculation:** Use Ohm's Law (R = V/I) to calculate the appropriate resistance value. V is the voltage source minus the transistor's voltage drop (VCEsat when on), and I is the relay coil's operating current (found in the relay's datasheet).

*   **Base Resistor (for Transistor Driver):**
    *   **Problem:**  The microcontroller's GPIO pins have limited current sourcing/sinking capabilities.  Directly connecting the GPIO pin to the base of a transistor (used to drive the relay) without a resistor can damage the GPIO pin.
    *   **Solution:** A base resistor (e.g., 1kΩ to 10kΩ) limits the current flowing into the base of the transistor.  This protects the GPIO pin from overcurrent.
    *   **Selection:** Choose a value that allows the transistor to saturate (fully turn on) when the GPIO pin is high. Consider the transistor's current gain (hFE) when selecting the base resistor value.

## 4. Designing and Implementing a Relay Control Circuit

Here's a typical circuit diagram for controlling a relay using an STM32 microcontroller:

```
                 +5V (or other appropriate voltage for relay coil)
                  |
                  +-------+
                  |       |
                  | Relay Coil |
                  |       |
                  +-------+
                  |
                  +----|>|----+  Flyback Diode (e.g., 1N4001)
                  |     |
                  +-----+
                  |
                  |
         R_limit  |
        ----/\/\----
                  |
                  |
                  |   B
                  |   |
                 +---| Transistor (e.g., 2N2222, BC547)
                 |   | E
        R_base  ----/\/\----
                  |   |
                  |   C
                  +---| GND
                  |
                  |
    STM32 GPIO Pin
```

**Explanation:**

1.  **STM32 GPIO Pin:** A digital output pin from the STM32 microcontroller.
2.  **R_base (Base Resistor):** Limits the current flowing into the base of the transistor. Typically, 1kΩ to 10kΩ.
3.  **Transistor (NPN):** Acts as a switch.  When the GPIO pin is high, the transistor turns on, allowing current to flow through the relay coil.
4.  **R_limit (Current Limiting Resistor):**  Limits the current through the Relay Coil, protecting both transistor and the relay coil.
5.  **Relay Coil:** The coil of the relay. Energizing the coil activates the relay.
6.  **Flyback Diode:** Protects the transistor from voltage spikes when the relay coil is de-energized. Placed in reverse bias across the relay coil.
7.  **+5V (or other voltage):** The voltage source required to energize the relay coil.
8.  **GND:** Ground connection.

**Steps to Design the Circuit:**

1.  **Choose a Relay:**  Select a relay with appropriate voltage and current ratings for the load you want to control.  Refer to the relay's datasheet.
2.  **Select a Transistor:** Choose an NPN transistor with sufficient current gain (hFE) and voltage/current ratings to drive the relay coil.  The transistor's collector current rating must be greater than the relay coil current.
3.  **Calculate R_limit:** Determine the required current for the relay coil (from the datasheet).  Use Ohm's Law (R = V/I) to calculate the resistance required to limit the current to that value, while considering the supply voltage (V) and the transistor's VCEsat when the transistor is in saturation.
4.  **Choose R_base:** Select a suitable base resistor (typically 1kΩ to 10kΩ) to ensure the transistor saturates when the GPIO pin is high.  Consider the transistor's hFE to ensure sufficient base current is supplied.
5.  **Select a Flyback Diode:** Use a standard rectifier diode like the 1N4001.

## 5. STM32 Code to Control the Relay

Here's a basic example using the STM32 HAL library to control a relay connected to GPIO pin PA0:

```c
#include "stm32f4xx_hal.h" // Or appropriate header for your STM32 series

// Define the GPIO port and pin for the relay
#define RELAY_GPIO_Port GPIOA
#define RELAY_GPIO_Pin GPIO_PIN_0

void Error_Handler(void); // Function to handle errors

void SystemClock_Config(void); // Function for clock configuration, required.


int main(void) {
  HAL_Init();  // Initialize the HAL library

  SystemClock_Config(); // Configure system clock

  // Enable the GPIO clock for the port where the relay is connected
  __HAL_RCC_GPIOA_CLK_ENABLE();

  // Configure the GPIO pin as an output
  GPIO_InitTypeDef GPIO_InitStruct = {0};
  GPIO_InitStruct.Pin = RELAY_GPIO_Pin;
  GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;  // Push-pull output
  GPIO_InitStruct.Pull = GPIO_NOPULL;          // No pull-up or pull-down resistors
  GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW; // Low speed
  HAL_GPIO_Init(RELAY_GPIO_Port, &GPIO_InitStruct);

  while (1) {
    // Turn the relay ON (set the GPIO pin HIGH)
    HAL_GPIO_WritePin(RELAY_GPIO_Port, RELAY_GPIO_Pin, GPIO_PIN_SET); // GPIO_PIN_SET = HIGH

    HAL_Delay(2000); // Wait for 2 seconds

    // Turn the relay OFF (set the GPIO pin LOW)
    HAL_GPIO_WritePin(RELAY_GPIO_Port, RELAY_GPIO_Pin, GPIO_PIN_RESET); // GPIO_PIN_RESET = LOW

    HAL_Delay(2000); // Wait for 2 seconds
  }
}


// System Clock Configuration (Example - adapt to your specific hardware)
void SystemClock_Config(void)
{
  RCC_OscInitTypeDef RCC_OscInitStruct = {0};
  RCC_ClkInitTypeDef RCC_ClkInitStruct = {0};

  /** Configure the main internal regulator output voltage
  */
  __HAL_RCC_PWR_CLK_ENABLE();
  __HAL_PWR_VOLTAGESCALING_CONFIG(PWR_REGULATOR_VOLTAGE_SCALE1);
  /** Initializes the RCC Oscillators according to the specified parameters
  * in the RCC_OscInitTypeDef structure.
  */
  RCC_OscInitStruct.OscillatorType = RCC_OSCILLATORTYPE_HSI;
  RCC_OscInitStruct.HSIState = RCC_HSI_ON;
  RCC_OscInitStruct.HSICalibrationValue = RCC_HSICALIBRATION_DEFAULT;
  RCC_OscInitStruct.PLL.PLLState = RCC_PLL_NONE;
  if (HAL_RCC_OscConfig(&RCC_OscInitStruct) != HAL_OK)
  {
    Error_Handler();
  }
  /** Initializes the CPU, AHB and APB buses clocks
  */
  RCC_ClkInitStruct.ClockType = RCC_CLOCKTYPE_HCLK|RCC_CLOCKTYPE_SYSCLK
                              |RCC_CLOCKTYPE_PCLK1|RCC_CLOCKTYPE_PCLK2;
  RCC_ClkInitStruct.SYSCLKSource = RCC_SYSCLKSOURCE_HSI;
  RCC_ClkInitStruct.AHBCLKDivider = RCC_SYSCLK_DIV1;
  RCC_ClkInitStruct.APB1CLKDivider = RCC_HCLK_DIV1;
  RCC_ClkInitStruct.APB2CLKDivider = RCC_HCLK_DIV1;

  if (HAL_RCC_ClockConfig(&RCC_ClkInitStruct, FLASH_LATENCY_0) != HAL_OK)
  {
    Error_Handler();
  }
}

void Error_Handler(void)
{
  /* USER CODE BEGIN Error_Handler_Debug */
  /* User can add his own implementation to report the HAL error return state */
  __disable_irq();
  while (1)
  {
  }
  /* USER CODE END Error_Handler_Debug */
}
```

**Explanation:**

1.  **Include Header:** Includes the necessary header file for the STM32 HAL library. Make sure you include the correct one for your specific STM32 series.
2.  **Define GPIO Pin:** Defines the GPIO port and pin number connected to the relay (RELAY_GPIO_Port and RELAY_GPIO_Pin).
3.  **Clock Enable:**  Enables the clock for the GPIO port (GPIOA in this example) using `__HAL_RCC_GPIOA_CLK_ENABLE()`.
4.  **GPIO Configuration:** Configures the GPIO pin as an output with push-pull configuration, no pull-up/down resistors, and low speed.
5.  **Control the Relay:** The `HAL_GPIO_WritePin()` function sets the GPIO pin HIGH (`GPIO_PIN_SET`) to turn the relay ON and LOW (`GPIO_PIN_RESET`) to turn the relay OFF.
6.  **Delays:** Uses `HAL_Delay()` to introduce a delay between switching the relay states.
7.  **System Clock Configuration**: This function sets up the clock sources for the STM32. This is crucial for the HAL library to function correctly. This example is based on an internal HSI oscillator, but may need to be adapted for your specific board and clock requirements.
8.  **Error Handler**:  A simple error handler is provided.  In a real application, this should be more robust and provide debugging information.

**Important Notes:**

*   Replace `stm32f4xx_hal.h` with the correct header file for your STM32 series.
*   Ensure that the GPIO pin you select is not used for any other critical functions.
*   Adjust the delays as needed for your application.
*   The `SystemClock_Config()` function configures the system clock, which is crucial for the HAL library to function correctly. Adjust this function according to your specific board and clock configuration requirements.
*   The `Error_Handler()` function is a placeholder and should be replaced with a more robust error handling mechanism in a real application.
*   Consider adding error checking for HAL function calls to handle potential errors during GPIO initialization or pin writing.

## 6. Practice Questions/Exercises

**Q1:** What is the purpose of a relay?

**A1:** A relay is an electromechanical switch used to control a high-power circuit with a low-power signal, providing isolation and amplification.

**Q2:** Why is a flyback diode needed when interfacing a relay with a microcontroller?

**A2:** A flyback diode protects the driving transistor and microcontroller from voltage spikes generated when the relay coil is de-energized.

**Q3:** Explain the difference between an electromechanical relay (EMR) and a solid-state relay (SSR).

**A3:** EMRs use mechanical contacts, providing good isolation but slower switching speed. SSRs use solid-state components, offering faster switching speed and longer lifespan but less isolation.

**Q4:**  Design a circuit to control a 12V relay (coil current 50mA) using an STM32 microcontroller (3.3V logic). Assume you're using a BC547 transistor (hFE = 100) driven by a 3.3V GPIO pin.  Calculate appropriate values for R_limit and R_base.  Assume VCEsat ≈ 0.2V.

**A4:**

*   **R_limit calculation:**
    *   Voltage across R_limit = 12V - 0.2V (VCEsat) = 11.8V
    *   R_limit = V/I = 11.8V / 0.05A = 236Ω.  Choose a standard value close to this, such as 220Ω or 270Ω.
*   **R_base calculation:**
    *   Base current required (Ib) = Collector current (Ic) / hFE = 50mA / 100 = 0.5mA
    *   Voltage across R_base = 3.3V - 0.7V (Vbe) = 2.6V
    *   R_base = V/I = 2.6V / 0.0005A = 5200Ω. Choose a standard value close to this, such as 4.7kΩ or 5.1kΩ.

**Q5:** Write a simple STM32 code snippet (using HAL) to toggle a relay connected to GPIO pin PB5 every 500ms.

**A5:**

```c
#include "stm32f4xx_hal.h"

#define RELAY_GPIO_Port GPIOB
#define RELAY_GPIO_Pin GPIO_PIN_5

void Error_Handler(void); // Function to handle errors
void SystemClock_Config(void); // Function for clock configuration, required.


int main(void) {
  HAL_Init();

  SystemClock_Config(); // Configure system clock


  __HAL_RCC_GPIOB_CLK_ENABLE();

  GPIO_InitTypeDef GPIO_InitStruct = {0};
  GPIO_InitStruct.Pin = RELAY_GPIO_Pin;
  GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
  GPIO_InitStruct.Pull = GPIO_NOPULL;
  GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
  HAL_GPIO_Init(RELAY_GPIO_Port, &GPIO_InitStruct);

  while (1) {
    HAL_GPIO_TogglePin(RELAY_GPIO_Port, RELAY_GPIO_Pin); // Toggle the pin
    HAL_Delay(500);
  }
}

void SystemClock_Config(void)
{
  RCC_OscInitTypeDef RCC_OscInitStruct = {0};
  RCC_ClkInitTypeDef RCC_ClkInitStruct = {0};

  /** Configure the main internal regulator output voltage
  */
  __HAL_RCC_PWR_CLK_ENABLE();
  __HAL_PWR_VOLTAGESCALING_CONFIG(PWR_REGULATOR_VOLTAGE_SCALE1);
  /** Initializes the RCC Oscillators according to the specified parameters
  * in the RCC_OscInitTypeDef structure.
  */
  RCC_OscInitStruct.OscillatorType = RCC_OSCILLATORTYPE_HSI;
  RCC_OscInitStruct.HSIState = RCC_HSI_ON;
  RCC_OscInitStruct.HSICalibrationValue = RCC_HSICALIBRATION_DEFAULT;
  RCC_OscInitStruct.PLL.PLLState = RCC_PLL_NONE;
  if (HAL_RCC_OscConfig(&RCC_OscInitStruct) != HAL_OK)
  {
    Error_Handler();
  }
  /** Initializes the CPU, AHB and APB buses clocks
  */
  RCC_ClkInitStruct.ClockType = RCC_CLOCKTYPE_HCLK|RCC_CLOCKTYPE_SYSCLK
                              |RCC_CLOCKTYPE_PCLK1|RCC_CLOCKTYPE_PCLK2;
  RCC_ClkInitStruct.SYSCLKSource = RCC_SYSCLKSOURCE_HSI;
  RCC_ClkInitStruct.AHBCLKDivider = RCC_SYSCLK_DIV1;
  RCC_ClkInitStruct.APB1CLKDivider = RCC_HCLK_DIV1;
  RCC_ClkInitStruct.APB2CLKDivider = RCC_HCLK_DIV1;

  if (HAL_RCC_ClockConfig(&RCC_ClkInitStruct, FLASH_LATENCY_0) != HAL_OK)
  {
    Error_Handler();
  }
}

void Error_Handler(void)
{
  /* USER CODE BEGIN Error_Handler_Debug */
  /* User can add his own implementation to report the HAL error return state */
  __disable_irq();
  while (1)
  {
  }
  /* USER CODE END Error_Handler_Debug */
}
```

## 7. Important Points to Remember

*   **Safety First:** Always handle high-voltage circuits with extreme caution. Ensure the power is disconnected before making any connections.
*   **Datasheets are Key:** Always consult the datasheets for the relay, transistor, and any other components you are using.
*   **Protection is Crucial:** Never omit the flyback diode or other protection circuitry. They are essential for the reliable and safe operation of your circuit.
*   **Current Limiting:**  Calculate and use current-limiting resistors to protect the relay coil and the driving transistor.
*   **GPIO Limitations:** Be mindful of the current sourcing/sinking capabilities of the STM32 GPIO pins. Use a transistor to amplify the current.
*   **Proper Grounding:**  Ensure a good and stable ground connection for all parts of the circuit.
*   **SSR Considerations**: If using an SSR, pay attention to its input current and voltage requirements.  Some SSRs require an external resistor to limit the current flowing into the input.
*   **Noise**: Relays can generate electrical noise when switching. Consider using noise filtering techniques if this is a concern in your application.
*   **Component Selection**:  Make sure that all components (transistor, resistors, diode) have voltage and current ratings that exceed the maximum values they will experience in the circuit.  Overspecifying (within reason) can improve reliability.
