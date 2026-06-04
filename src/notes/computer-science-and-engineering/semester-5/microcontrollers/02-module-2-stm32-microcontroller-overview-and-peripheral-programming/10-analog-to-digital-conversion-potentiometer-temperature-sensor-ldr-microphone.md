---
title: "Analog to Digital Conversion: Potentiometer, temperature sensor, LDR, Microphone"
subject: "MICROCONTROLLERS"
module: "Module 2: STM32 Microcontroller Overview and Peripheral Programming:"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b61d"
status: "completed"
scrapedAt: "2026-05-20T16:48:34.117Z"
---
# MICROCONTROLLERS - Module 2: STM32 Microcontroller Overview and Peripheral Programming

## Topic: Analog to Digital Conversion: Potentiometer, Temperature Sensor, LDR, Microphone

### Learning Outcomes:

*   Understand the principles of Analog-to-Digital Conversion (ADC).
*   Describe the ADC module in STM32 microcontrollers.
*   Interface and program an STM32 microcontroller to read data from a potentiometer.
*   Interface and program an STM32 microcontroller to read data from a temperature sensor (e.g., LM35).
*   Interface and program an STM32 microcontroller to read data from a Light Dependent Resistor (LDR).
*   Interface and program an STM32 microcontroller to read data from a microphone.
*   Understand common issues and troubleshooting techniques in ADC applications.

---

### 1. Principles of Analog-to-Digital Conversion (ADC)

*   **Definition:** Analog-to-Digital Conversion (ADC) is the process of converting a continuous analog signal (e.g., voltage, current) into a discrete digital representation.
*   **Why ADC?** Microcontrollers operate in the digital domain, whereas real-world signals are often analog. ADC is necessary to process real-world signals using a microcontroller.
*   **Key Concepts:**
    *   **Resolution:** The number of discrete values an ADC can produce over the range of input values.  Expressed in bits (e.g., 10-bit, 12-bit ADC). A higher resolution means finer granularity and better accuracy.
        *   *Example:* A 10-bit ADC can represent 2^10 = 1024 discrete levels.
    *   **Reference Voltage (Vref):** The maximum voltage the ADC can convert.  The ADC's output range is determined by Vref.
    *   **Sampling Rate:** The number of samples taken per second.  Determines how accurately the ADC can capture rapidly changing signals. Measured in samples per second (SPS) or Hertz (Hz).  The Nyquist-Shannon sampling theorem states that the sampling rate must be at least twice the highest frequency component of the analog signal to avoid aliasing.
    *   **Quantization Error:**  The error introduced because the ADC can only represent a finite number of discrete values.  The difference between the actual analog value and the nearest digital value.  This error can be reduced by increasing the resolution of the ADC.
    *   **Conversion Time:** The time required for the ADC to perform a single conversion.
    *   **Input Impedance:** The impedance presented by the ADC input. Important for signal conditioning and ensuring accurate readings.
*   **ADC Transfer Function:**
    *   `Digital Output = (Analog Input / Vref) * 2^Resolution`
    *   *Example:* For a 12-bit ADC with Vref = 3.3V and an Analog Input of 1.65V:
        *   `Digital Output = (1.65 / 3.3) * 2^12 = 0.5 * 4096 = 2048`
*   **Types of ADCs:**
    *   **Successive Approximation Register (SAR) ADC:** Common in microcontrollers due to its balance of speed, resolution, and power consumption.  STM32 uses SAR ADCs.
    *   **Sigma-Delta ADC:** Used for high-resolution, low-bandwidth applications.
    *   **Flash ADC:** Very fast but power-hungry and complex.

---

### 2. ADC Module in STM32 Microcontrollers

*   **Overview:** STM32 microcontrollers typically have one or more integrated ADCs. These are usually SAR ADCs.
*   **Key Features:**
    *   **Resolution:** STM32 ADCs typically offer 12-bit resolution.
    *   **Channels:** Multiple input channels that can be individually configured.
    *   **Sampling Rate:**  Can be configured, influencing accuracy and speed.
    *   **Conversion Modes:**
        *   **Single Conversion Mode:**  Performs a single conversion when triggered.
        *   **Continuous Conversion Mode:**  Continuously performs conversions on the selected channel(s).
        *   **Scan Mode:**  Scans multiple channels in sequence, converting each one.
        *   **Discontinuous Mode:**  Allows for pausing the scan sequence after each channel.
    *   **Trigger Sources:** Conversions can be triggered by:
        *   Software (manually initiated).
        *   Timers (periodic triggering).
        *   External events (external signal triggering).
    *   **Data Alignment:**  The converted digital data can be right-aligned or left-aligned in the data register.
    *   **Interrupts:** ADC completion interrupts can be enabled to signal the end of a conversion.
    *   **DMA (Direct Memory Access):**  ADC data can be transferred directly to memory via DMA, freeing up the CPU.
*   **Registers (Example for STM32 HAL):**
    *   `ADC->CR`: Control Register - Used to configure ADC parameters like enabling/disabling, conversion mode, and triggers.
    *   `ADC->SQR1`: Sequence Register 1 - Defines the sequence of channels to convert in scan mode.
    *   `ADC->SMPR1/2`: Sample Time Register - Sets the sampling time for each channel.
    *   `ADC->DR`: Data Register - Contains the converted digital value.
    *   `ADC->SR`: Status Register - Indicates the status of the ADC, such as whether a conversion is complete.
*   **STM32 HAL (Hardware Abstraction Layer):**
    *   The STM32 HAL library provides functions to simplify ADC configuration and usage.  It hides the complexity of direct register manipulation.
    *   *Example Functions:*
        *   `HAL_ADC_Init()`: Initializes the ADC module based on the provided ADC_HandleTypeDef structure.
        *   `HAL_ADC_ConfigChannel()`: Configures a specific ADC channel.
        *   `HAL_ADC_Start()`: Starts the ADC conversion.
        *   `HAL_ADC_Stop()`: Stops the ADC conversion.
        *   `HAL_ADC_GetValue()`: Retrieves the converted digital value from the data register.
        *   `HAL_ADC_Start_IT()`: Starts ADC conversion in interrupt mode.
        *   `HAL_ADC_Start_DMA()`: Starts ADC conversion with DMA.

---

### 3. Interfacing and Programming with a Potentiometer

*   **Hardware Interface:**
    *   Connect the potentiometer to the microcontroller as a voltage divider.
    *   Connect one end of the potentiometer to VCC (e.g., 3.3V).
    *   Connect the other end of the potentiometer to GND.
    *   Connect the wiper (center pin) of the potentiometer to an ADC input pin on the STM32.
*   **Software Implementation (using STM32 HAL):**
    1.  **Initialize the ADC:**
        ```c
        ADC_HandleTypeDef hadc1; // Define ADC handle
        void ADC1_Init(void) {
            hadc1.Instance = ADC1; // Assign the ADC instance
            hadc1.Init.ClockPrescaler = ADC_CLOCK_SYNC_PCLK_DIV4; // Clock prescaler
            hadc1.Init.Resolution = ADC_RESOLUTION_12B; // 12-bit resolution
            hadc1.Init.DataAlign = ADC_DATAALIGN_RIGHT; // Data alignment
            hadc1.Init.ScanConvMode = DISABLE; // Disable scan mode
            hadc1.Init.ContinuousConvMode = ENABLE; // Enable continuous conversion
            hadc1.Init.DiscontinuousConvMode = DISABLE; // Disable discontinuous mode
            hadc1.Init.ExternalTrigConv = ADC_SOFTWARE_START; // Software trigger
            hadc1.Init.NbrOfConversion = 1; // Number of conversions
            hadc1.Init.DMAContinuousRequests = DISABLE; // Disable DMA
            hadc1.Init.EOCSelection = ADC_EOC_SINGLE_CONV; // EOC selection
            if (HAL_ADC_Init(&hadc1) != HAL_OK) {
                Error_Handler(); // Handle initialization error
            }
        }
        ```
    2.  **Configure the ADC Channel:**
        ```c
        void ADC1_ChannelConfig(uint32_t channel) {
            ADC_ChannelConfTypeDef sConfig = {0};
            sConfig.Channel = channel; // Select the ADC channel
            sConfig.Rank = ADC_REGULAR_RANK_1; // Rank in the sequence
            sConfig.SamplingTime = ADC_SAMPLETIME_28CYCLES; // Sampling time
            if (HAL_ADC_ConfigChannel(&hadc1, &sConfig) != HAL_OK) {
                Error_Handler(); // Handle configuration error
            }
        }
        ```
    3.  **Read ADC Value:**
        ```c
        uint32_t readPotentiometerValue() {
            HAL_ADC_Start(&hadc1); // Start the ADC conversion
            HAL_ADC_PollForConversion(&hadc1, HAL_MAX_DELAY); // Wait for conversion to complete
            uint32_t adcValue = HAL_ADC_GetValue(&hadc1); // Read the ADC value
            HAL_ADC_Stop(&hadc1); // Stop the ADC conversion
            return adcValue;
        }
        ```
    4.  **Main Loop:**
        ```c
        int main(void) {
          //... (Initialization code)
          ADC1_Init();
          ADC1_ChannelConfig(ADC_CHANNEL_0); // Example: ADC Channel 0 (PA0)

          while (1) {
              uint32_t potValue = readPotentiometerValue();
              // Do something with the potentiometer value (e.g., print to serial)
              printf("Potentiometer Value: %lu\r\n", potValue);
              HAL_Delay(100); // Delay for 100ms
          }
        }
        ```
*   **Example:**  If the potentiometer is set to its midpoint (50% of VCC), the ADC should read approximately half of its maximum value.  For a 12-bit ADC, this would be around 2048.
*   **Calculation:**
    *   `Voltage = (ADC_Value / 2^Resolution) * Vref`
    *   *Example:* If ADC_Value = 2048, Resolution = 12, and Vref = 3.3V:
        *   `Voltage = (2048 / 4096) * 3.3V = 1.65V`

---

### 4. Interfacing and Programming with a Temperature Sensor (e.g., LM35)

*   **Hardware Interface:**
    *   **LM35:** A precision centigrade temperature sensor.  Outputs a voltage proportional to temperature (10mV/°C).
    *   Connect the LM35 VCC pin to VCC (e.g., 3.3V or 5V, check LM35 datasheet).
    *   Connect the LM35 GND pin to GND.
    *   Connect the LM35 VOUT pin to an ADC input pin on the STM32.
*   **Software Implementation (using STM32 HAL):**
    1.  **Initialize the ADC:** (Same as Potentiometer Example)
    2.  **Configure the ADC Channel:** (Same as Potentiometer Example)
    3.  **Read ADC Value:** (Same as Potentiometer Example)
    4.  **Convert ADC Value to Temperature:**
        ```c
        float readTemperature() {
            uint32_t adcValue = readPotentiometerValue(); // Reuse potentiometer code to read value
            float voltage = (float)adcValue * 3.3 / 4096; // Calculate voltage (assuming Vref=3.3V, 12-bit ADC)
            float temperature = voltage * 100; // Temperature in Celsius (10mV/°C => 0.01V/°C => 1V/100°C)
            return temperature;
        }
        ```
    5.  **Main Loop:**
        ```c
        int main(void) {
          //... (Initialization code)
          ADC1_Init();
          ADC1_ChannelConfig(ADC_CHANNEL_1); // Example: ADC Channel 1 (PA1)

          while (1) {
              float temperature = readTemperature();
              // Do something with the temperature (e.g., print to serial)
              printf("Temperature: %.2f °C\r\n", temperature);
              HAL_Delay(1000); // Delay for 1 second
          }
        }
        ```
*   **Example:** If the temperature is 25°C, the LM35 output will be 0.25V. The ADC reading will then be converted back to 25°C.
*   **Calibration:** It is a good practice to calibrate the sensor by comparing its readings with a known accurate thermometer and adjusting the conversion formula if necessary.

---

### 5. Interfacing and Programming with a Light Dependent Resistor (LDR)

*   **Hardware Interface:**
    *   **LDR:** A resistor whose resistance changes depending on the amount of light falling on it.
    *   Create a voltage divider circuit with the LDR and a fixed resistor (e.g., 10kΩ).
    *   Connect the LDR in series with the fixed resistor.
    *   Connect the combination between VCC and GND.
    *   Connect the point between the LDR and the fixed resistor to an ADC input pin on the STM32.
*   **Software Implementation (using STM32 HAL):**
    1.  **Initialize the ADC:** (Same as Potentiometer Example)
    2.  **Configure the ADC Channel:** (Same as Potentiometer Example)
    3.  **Read ADC Value:** (Same as Potentiometer Example)
    4.  **Convert ADC Value to Light Intensity (Qualitative):** You can map the ADC value to a qualitative light level (e.g., "Dark", "Dim", "Bright"). You can also attempt to calibrate this to a known Lux meter.
        ```c
        typedef enum {
            DARK,
            DIM,
            BRIGHT
        } LightLevel;

        LightLevel getLightLevel() {
            uint32_t adcValue = readPotentiometerValue(); // Reuse potentiometer code to read value
            if (adcValue < 1000) {
                return DARK;
            } else if (adcValue < 3000) {
                return DIM;
            } else {
                return BRIGHT;
            }
        }
        ```
    5.  **Main Loop:**
        ```c
        int main(void) {
          //... (Initialization code)
          ADC1_Init();
          ADC1_ChannelConfig(ADC_CHANNEL_2); // Example: ADC Channel 2 (PA2)

          while (1) {
              LightLevel lightLevel = getLightLevel();
              // Do something with the light level (e.g., print to serial)
              switch (lightLevel) {
                  case DARK:
                      printf("Light Level: Dark\r\n");
                      break;
                  case DIM:
                      printf("Light Level: Dim\r\n");
                      break;
                  case BRIGHT:
                      printf("Light Level: Bright\r\n");
                      break;
              }
              HAL_Delay(1000); // Delay for 1 second
          }
        }
        ```
*   **Note:** Accurately converting ADC values from an LDR to lux (light intensity) requires calibration with a lux meter. The LDR response is non-linear and varies between different LDRs.
*   **Calculation (Qualitative):**  The higher the light level, the lower the resistance of the LDR.  Therefore, the voltage at the ADC input will increase with increasing light.

---

### 6. Interfacing and Programming with a Microphone

*   **Hardware Interface:**
    *   **Microphone:** Converts sound waves into electrical signals. Often requires amplification and biasing.
    *   **Electret Microphone Amplifier:** Use an electret microphone amplifier module (e.g., MAX4466) to amplify the microphone signal. These modules often include biasing circuitry.
    *   Connect the microphone output to the amplifier's input.
    *   Connect the amplifier's output to an ADC input pin on the STM32.
    *   Connect the amplifier's VCC and GND pins to the microcontroller's power supply.
*   **Software Implementation (using STM32 HAL):**
    1.  **Initialize the ADC:** (Same as Potentiometer Example)
    2.  **Configure the ADC Channel:** (Same as Potentiometer Example)
    3.  **Read ADC Value (using DMA for continuous sampling):** Audio signals are dynamic and require continuous, fast sampling. DMA is essential.
        ```c
        uint16_t audioBuffer[AUDIO_BUFFER_SIZE]; // Define a buffer to store audio samples
        #define AUDIO_BUFFER_SIZE 256

        void HAL_ADC_ConvCpltCallback(ADC_HandleTypeDef *hadc) {
            // This callback is called when half of the DMA buffer is full
            // Process the first half of the buffer here (audioBuffer[0] to audioBuffer[AUDIO_BUFFER_SIZE/2 - 1])
            for (int i = 0; i < AUDIO_BUFFER_SIZE / 2; i++) {
                //Process audioBuffer[i]
                //Example: printf("%d\r\n", audioBuffer[i]);
            }
        }

        void HAL_ADC_ConvHalfCpltCallback(ADC_HandleTypeDef *hadc) {
            // This callback is called when the entire DMA buffer is full
            // Process the second half of the buffer here (audioBuffer[AUDIO_BUFFER_SIZE/2] to audioBuffer[AUDIO_BUFFER_SIZE - 1])
            for (int i = AUDIO_BUFFER_SIZE / 2; i < AUDIO_BUFFER_SIZE; i++) {
                //Process audioBuffer[i]
                //Example: printf("%d\r\n", audioBuffer[i]);
            }
        }

        void startAudioSampling() {
            HAL_ADC_Start_DMA(&hadc1, (uint32_t*)audioBuffer, AUDIO_BUFFER_SIZE);
        }
        ```

    4.  **Main Loop:**
        ```c
        int main(void) {
            //... (Initialization code - clocks, GPIO, DMA, NVIC)
            ADC1_Init();
            ADC1_ChannelConfig(ADC_CHANNEL_3); // Example: ADC Channel 3 (PA3)
            startAudioSampling();

            while (1) {
                // Main loop - other tasks
            }
        }
        ```
*   **Audio Processing:**
    *   The raw ADC data from the microphone is usually processed to extract meaningful information.
    *   **Amplitude:** The ADC values can be used to determine the loudness of the sound.
    *   **Frequency Analysis:** Fast Fourier Transform (FFT) can be applied to the audio data to analyze the frequency components of the sound.
    *   **Voice Activity Detection:** Algorithms can be used to detect when someone is speaking.
*   **Important Considerations:**
    *   **Sampling Rate:**  Choose a sampling rate high enough to capture the frequencies of interest (e.g., 8kHz for speech, 44.1kHz for audio).
    *   **Biasing:** The microphone signal needs to be biased around Vref/2 for optimal ADC input.  The microphone amplifier module usually provides this biasing.
    *   **Amplification:** A microphone's output is typically very weak, so amplification is necessary.
    *   **Noise:** Microphone signals are often noisy. Filtering techniques (e.g., moving average filter) can be used to reduce noise.

---

### 7. Common Issues and Troubleshooting Techniques in ADC Applications

*   **Noise:**
    *   **Problem:** Inaccurate ADC readings due to electrical noise.
    *   **Solutions:**
        *   Use shielded cables.
        *   Filter the ADC input signal with a low-pass filter (RC filter).
        *   Ensure proper grounding.
        *   Decoupling capacitors near the ADC power pins.
        *   Increase the sampling time to average out noise.
*   **Aliasing:**
    *   **Problem:**  If the sampling rate is too low, high-frequency components in the analog signal can be misinterpreted as lower frequencies.
    *   **Solution:**  Ensure the sampling rate is at least twice the highest frequency component in the analog signal (Nyquist-Shannon sampling theorem).  Use an anti-aliasing filter (low-pass filter) before the ADC.
*   **Quantization Error:**
    *   **Problem:** Inherent error due to the discrete nature of the ADC.
    *   **Solution:** Increase the resolution of the ADC if possible.  Average multiple readings to reduce the effect of quantization error.
*   **Saturation:**
    *   **Problem:** The analog input voltage exceeds the ADC's input range (Vref).
    *   **Solution:** Ensure the analog input voltage is within the ADC's input range. Use a voltage divider or amplifier to scale the input signal.
*   **Offset Error:**
    *   **Problem:** The ADC readings are consistently shifted from the correct values.
    *   **Solution:** Calibrate the ADC by measuring a known input voltage (e.g., ground) and adjusting the offset in software.
*   **Non-Linearity:**
    *   **Problem:** The ADC's transfer function is not perfectly linear.
    *   **Solution:** Use a higher-quality ADC.  Apply a calibration curve to compensate for non-linearity.
*   **Power Supply Noise:** Fluctuations or noise in the power supply can affect the ADC reference voltage and thus the accuracy of the conversions. Stabilize voltage using LDO regulators and add capacitors.
*   **Software Issues:**
    *   **Problem:** Incorrect ADC configuration, bugs in the code.
    *   **Solution:** Thoroughly review the ADC configuration code.  Use a debugger to step through the code and check the values of ADC registers.

---

### Practice Questions and Exercises

1.  **Explain the difference between ADC resolution and sampling rate.**
    *   *Answer:* ADC resolution refers to the number of discrete levels the ADC can represent, while sampling rate refers to the number of samples taken per second.
2.  **What is the Nyquist-Shannon sampling theorem, and why is it important in ADC applications?**
    *   *Answer:* The Nyquist-Shannon sampling theorem states that the sampling rate must be at least twice the highest frequency component of the analog signal to avoid aliasing.
3.  **Describe how to interface an LM35 temperature sensor with an STM32 microcontroller, including both hardware and software aspects.**
    *   *Answer:* (See Section 4 above)
4.  **Explain the purpose of using DMA with the ADC when sampling audio signals from a microphone.**
    *   *Answer:* DMA allows for continuous and fast sampling of audio signals without constantly interrupting the CPU, which is essential for capturing the dynamic nature of audio.
5.  **What are some common causes of noise in ADC readings, and how can you mitigate them?**
    *   *Answer:* (See Section 7 above)
6.  **Exercise:** Write code to configure an STM32 ADC to read from two channels in scan mode, storing the results in an array.  Use interrupts to signal the completion of the scan.
    *   *Answer:* (Solution involves configuring `ADC->CR` for scan mode, setting up the channel sequence in `ADC->SQR1`, enabling ADC interrupts in `NVIC`, and writing the interrupt handler to store ADC values.)

---

### Important Points to Remember

*   **Understand the ADC specifications:** Resolution, Vref, sampling rate, input impedance.
*   **Use the STM32 HAL library:** Simplifies ADC configuration.
*   **Choose the appropriate conversion mode:** Single, continuous, scan, discontinuous.
*   **Handle ADC interrupts and DMA correctly:** For efficient data acquisition.
*   **Calibrate your sensors:** For accurate readings.
*   **Be aware of potential sources of error:** Noise, aliasing, quantization error.
*   **Use signal conditioning techniques:** Filtering, amplification, biasing.
*   **Read the STM32 Reference Manual:**  The definitive source of information on the STM32 ADC module.
