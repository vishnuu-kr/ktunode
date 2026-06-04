---
title: "Case Study Implementation: Implementing a real-time system for a specific application (e.g., real-time data acquisition)"
subject: "REAL TIME OPERATING SYSTEM"
module: "Module 4: Real"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff3f5"
status: "completed"
scrapedAt: "2026-05-23T18:09:20.209Z"
---
# REAL TIME OPERATING SYSTEM

## Module 4: Real-Time System Implementation - Case Study: Real-Time Data Acquisition

---

### **1. Introduction to Real-Time Data Acquisition Systems (RTDAS)**

*   **Definition:** A Real-Time Data Acquisition System (RTDAS) is a system designed to capture, process, and analyze data from the physical world within strict time constraints. The "real-time" aspect means that the system must respond to external events or data inputs within a guaranteed deadline.
*   **Key Components of an RTDAS:**
    *   **Sensors/Transducers:** Convert physical phenomena (temperature, pressure, light, sound, etc.) into electrical signals.
    *   **Signal Conditioning:** Amplifies, filters, and isolates the sensor signals to make them suitable for digital processing.
    *   **Analog-to-Digital Converter (ADC):** Converts the analog electrical signals into digital data.
    *   **Microcontroller/Processor:** Executes the RTOS and the application software to manage data acquisition, processing, and decision-making.
    *   **Real-Time Operating System (RTOS):** Provides the necessary services for task scheduling, synchronization, inter-task communication, and resource management to meet real-time deadlines.
    *   **Data Storage/Logging:** Stores acquired data for analysis, historical review, or later transmission.
    *   **User Interface/Actuators:** Displays acquired data to the user or triggers actions based on the processed data (e.g., alarms, control signals).
*   **Importance of Real-Time Constraints:** In data acquisition, failure to acquire or process data within the specified time can lead to loss of critical information, inaccurate analysis, or dangerous system behavior.

---

### **2. Designing a Real-Time Data Acquisition System: A Step-by-Step Approach**

This section outlines the typical design process for implementing an RTDAS, drawing upon principles from the provided textbooks.

#### **2.1. Requirements Analysis and Specification**

*   **Objective:** Clearly define what the system needs to achieve.
    *   What data needs to be acquired? (e.g., temperature, voltage, frequency)
    *   From how many sources?
    *   What is the required sampling rate for each source? (This directly impacts task deadlines)
    *   What are the precision and accuracy requirements?
    *   What processing needs to be performed on the data? (e.g., filtering, averaging, FFT)
    *   What are the output requirements? (e.g., display, logging, control signals)
    *   What are the environmental conditions the system will operate in?
*   **Identifying Real-Time Constraints:**
    *   **Deadlines:** The maximum time allowed from data capture to action or output. This is the most critical aspect of real-time systems.
    *   **Jitter:** Variation in the timing of periodic tasks. Low jitter is often crucial for precise measurements.
    *   **Throughput:** The rate at which data can be acquired and processed.
*   **Example:** A system to monitor engine temperature in a car.
    *   *Data:* Engine temperature, RPM, throttle position.
    *   *Sampling Rate:* Temperature (e.g., 100 Hz), RPM (e.g., 50 Hz), throttle position (e.g., 20 Hz).
    *   *Processing:* Convert raw sensor readings to meaningful units, check for overheating, potentially adjust fuel injection.
    *   *Deadlines:* Temperature reading and processing must be done within a few milliseconds to detect overheating promptly.

#### **2.2. Hardware Selection**

*   **Microcontroller/Processor:**
    *   **Processing Power:** Sufficient to handle sampling, data processing, and RTOS overhead. (Valvano, Zhu)
    *   **Peripherals:** Built-in ADCs, timers, communication interfaces (UART, SPI, I2C), GPIOs are crucial for interfacing with sensors and other components.
    *   **Memory:** Sufficient RAM for data buffering and task stacks, and Flash for program storage.
    *   **Architecture:** ARM Cortex-M processors are common in embedded real-time systems due to their efficiency, peripherals, and ecosystem. (Valvano)
*   **Sensors and Actuators:** Chosen based on the physical phenomena to be measured and the required accuracy/resolution.
*   **ADC Selection:**
    *   **Resolution:** Number of bits the ADC can distinguish.
    *   **Sampling Rate:** How quickly it can convert analog to digital.
    *   **Input Range:** The voltage range the ADC can accept.
    *   **Conversion Time:** The time it takes for one conversion.
*   **Interface Circuits:** Signal conditioning, level shifting, isolation might be needed.

#### **2.3. Software Architecture Design**

*   **Task Decomposition:** Breaking down the system functionality into independent, concurrent tasks.
    *   **Common Tasks in RTDAS:**
        *   **Sensor Reading Task:** Periodically samples data from sensors.
        *   **Data Processing Task:** Performs calculations, filtering, analysis on acquired data.
        *   **Data Logging Task:** Writes data to storage.
        *   **User Interface Task:** Updates displays, handles user input.
        *   **Communication Task:** Sends/receives data over networks.
        *   **Timer/Periodic Event Handling Task:** Manages timing and periodic operations.
*   **Task Properties:**
    *   **Periodicity:** Is the task periodic (runs at regular intervals) or aperiodic (triggered by events)?
    *   **Execution Time:** The worst-case time a task takes to complete its execution. Crucial for scheduling. (Mall, Laplante)
    *   **Deadline:** The time by which a task must complete its execution relative to its release time.
    *   **Priority:** Assigned to tasks based on their criticality and deadlines.
*   **RTOS Selection and Configuration:**
    *   Choose an RTOS that meets the system's requirements (e.g., small footprint, deterministic behavior, specific scheduling algorithms, sufficient features). (Cooling, Valvano)
    *   Configure RTOS parameters like task priorities, time quanta, timer resolutions.
*   **Inter-Task Communication and Synchronization:**
    *   **Mechanisms:** Semaphores, mutexes, message queues, event flags. (Krishna & Shin, Liu)
    *   **Data Sharing:** How data is passed between tasks safely and efficiently.
    *   **Synchronization:** Ensuring tasks execute in the correct order and avoid race conditions.
    *   **Example:** A message queue can be used for the Sensor Reading Task to pass raw data to the Data Processing Task. A semaphore can protect a shared buffer used by multiple tasks.

#### **2.4. Scheduling Algorithm Selection**

*   **Goal:** To allocate CPU time to tasks in a way that meets all deadlines. (Mall, Kopetz)
*   **Common RTDAS Scheduling Algorithms:**
    *   **Rate Monotonic Scheduling (RMS):** A static-priority algorithm where priorities are assigned inversely proportional to the task periods. Shorter periods get higher priorities. Optimal among static-priority algorithms. (Mall)
    *   **Earliest Deadline First (EDF):** A dynamic-priority algorithm where the task with the earliest absolute deadline is executed next. Optimal among all scheduling algorithms. (Liu, Krishna & Shin)
    *   **Fixed Priority Preemptive Scheduling (FPPS):** A general category where tasks have fixed priorities, and higher-priority tasks can interrupt lower-priority ones. RMS is a specific instance of FPPS.
*   **Considerations for RTDAS:**
    *   **Periodicity of Data Acquisition:** RMS is well-suited for systems with predominantly periodic data acquisition tasks.
    *   **Aperiodic Events:** Handling sporadic sensor readings or alarm events might require mechanisms like servers or specialized scheduling policies. (Liu)
    *   **Overhead:** The scheduling algorithm itself introduces overhead.
*   **Example:** If sensor A needs to be read every 10ms and sensor B every 50ms, RMS would assign a higher priority to sensor A's task.

#### **2.5. Worst-Case Execution Time (WCET) Analysis**

*   **Definition:** The maximum possible time a task can take to execute, considering all possible input values and execution paths. (Mall, Laplante)
*   **Importance:** WCET is essential for determining if a schedule is feasible and if all deadlines can be met.
*   **Methods for WCET Calculation:**
    *   **Manual Analysis:** Examining the code, accounting for instruction execution times, loop iterations, and conditional branches. This is often detailed but can be error-prone and time-consuming.
    *   **Static Analysis Tools:** Automated tools that analyze the code and hardware to determine WCET. These can be powerful but may require specific hardware models.
    *   **Measurement-Based Methods:** Running the task under various conditions and measuring execution times. This is often used to validate WCET estimates but doesn't guarantee finding the absolute worst case.
*   **Factors Affecting WCET:**
    *   **Instruction Timing:** Different instructions take different amounts of time.
    *   **Cache Behavior:** Whether data or instructions are in the processor's cache significantly impacts speed. Cache misses increase execution time. (Valvano)
    *   **Pipeline Effects:** Modern processors pipeline instructions, which can be affected by branches and data dependencies.
    *   **Interrupt Latency:** Time taken to handle interrupts.
    *   **Memory Access Times:** Accessing slower memory (e.g., external DRAM) takes longer than fast internal memory.
*   **WCET for RTDAS Tasks:**
    *   *Sensor Reading Task:* WCET might depend on the number of samples to read, ADC conversion time, and any pre-processing.
    *   *Data Processing Task:* WCET depends on the complexity of algorithms (e.g., FFT, filtering).
    *   *Task Switching Overhead:* The time the RTOS takes to switch between tasks must also be factored in.
*   **Example:** Estimating the WCET for a task that calculates the RMS value of an audio signal. This would involve analyzing the loop for summing samples, the division for averaging, and the square root operation, considering potential data cache behavior.

#### **2.6. Implementation and Testing**

*   **Coding Standards:** Adhering to coding standards for clarity, maintainability, and predictability (e.g., MISRA C for safety-critical systems).
*   **RTOS API Usage:** Correctly using RTOS services for task creation, scheduling, inter-task communication, and synchronization. (Valvano, Zhu)
*   **Debugging:** Using debuggers, logic analyzers, and oscilloscopes to identify and fix issues, especially timing-related problems.
*   **Verification:**
    *   **Functional Testing:** Ensuring the system performs its intended functions correctly.
    *   **Timing Verification:** Measuring task execution times, deadlines, and jitter to confirm real-time requirements are met. This often involves profiling tools.
    *   **Stress Testing:** Pushing the system to its limits by feeding it high data rates or triggering many events simultaneously to check robustness.
    *   **Integration Testing:** Testing how different tasks and hardware components work together.
*   **Hardware-in-the-Loop (HIL) Testing:** Simulating the real-world environment to test the embedded system. This is crucial for complex systems. (Kopetz)

---

### **3. Case Study Example: Implementing a Simple Real-Time Temperature Monitoring System**

Let's consider a basic RTDAS to monitor temperature from a single sensor and trigger an alert if the temperature exceeds a threshold.

#### **3.1. System Requirements**

*   **Data:** Temperature from an LM35 sensor (produces analog voltage proportional to temperature).
*   **Sampling Rate:** 10 Hz (one sample every 100 ms).
*   **Processing:** Convert analog reading to Celsius, compare with a threshold (e.g., 50°C).
*   **Output:**
    *   Display temperature on an LCD.
    *   Toggle an LED if the temperature exceeds 50°C.
*   **Real-Time Constraints:**
    *   Temperature reading and processing must be completed within 80 ms to allow time for display update and potential LED toggle within the 100 ms period.
    *   Low jitter is desirable for consistent readings.

#### **3.2. Hardware Selection (Example)**

*   **Microcontroller:** Arduino Uno (ATmega328P) or similar ARM Cortex-M microcontroller (e.g., STM32F4 series). Let's assume an ARM Cortex-M for better RTOS support.
*   **Sensor:** LM35 analog temperature sensor.
*   **ADC:** Built into the microcontroller.
*   **Display:** Standard 16x2 LCD interfaced via I2C.
*   **Indicator:** A simple LED.
*   **RTOS:** FreeRTOS (popular, widely used, and suitable for Cortex-M).

#### **3.3. Software Design and Implementation**

**Task Decomposition:**

1.  **`vTaskSensorRead`:**
    *   **Purpose:** Read analog value from LM35.
    *   **Period:** 100 ms.
    *   **Priority:** High (e.g., 2).
    *   **Action:** Trigger ADC conversion, wait for completion, store raw reading in a shared buffer.
    *   **Output:** Puts raw ADC value into a queue.
2.  **`vTaskProcessData`:**
    *   **Purpose:** Convert raw ADC reading to Celsius, check threshold.
    *   **Period:** Triggered by `vTaskSensorRead`.
    *   **Priority:** Medium (e.g., 1).
    *   **Action:** Receives raw ADC value from queue. Converts it to Celsius (e.g., `temp_C = raw_adc * (3.3 / 4095.0) * 100.0`). Compares `temp_C` with 50°C. Stores processed temperature and alert status.
    *   **Output:** Puts processed temperature and alert status into another queue.
3.  **`vTaskDisplay`:**
    *   **Purpose:** Update LCD display.
    *   **Period:** Triggered by `vTaskProcessData`.
    *   **Priority:** Low (e.g., 0).
    *   **Action:** Receives processed temperature and alert status from queue. Formats temperature string and displays it on the LCD.
4.  **`vTaskIndicator`:**
    *   **Purpose:** Control the indicator LED.
    *   **Period:** Triggered by `vTaskProcessData`.
    *   **Priority:** Low (e.g., 0).
    *   **Action:** Receives alert status from queue. If alert is active, turns LED ON; otherwise, turns LED OFF.

**Inter-Task Communication:**

*   **Queue 1 (`xADCToProcessQueue`):** `vTaskSensorRead` sends raw ADC data (e.g., `uint16_t`). `vTaskProcessData` receives it.
*   **Queue 2 (`xProcessToDisplayQueue`):** `vTaskProcessData` sends processed data (e.g., a struct containing `float temperature_C` and `bool alert_status`). `vTaskDisplay` and `vTaskIndicator` receive from this queue.

**RTOS Task Creation (Conceptual FreeRTOS Code):**

```c
// Assume FreeRTOS includes and setup are done

QueueHandle_t xADCToProcessQueue;
QueueHandle_t xProcessToDisplayQueue;

void setup() {
    // Initialize hardware (ADC, I2C for LCD, GPIO for LED)
    // ...

    // Create queues
    xADCToProcessQueue = xQueueCreate(1, sizeof(uint16_t));
    xProcessToDisplayQueue = xQueueCreate(1, sizeof(struct { float temp; bool alert; }));

    // Create tasks
    xTaskCreate(vTaskSensorRead, "SensorRead", configMINIMAL_STACK_SIZE, NULL, 2, NULL);
    xTaskCreate(vTaskProcessData, "ProcessData", configMINIMAL_STACK_SIZE, NULL, 1, NULL);
    xTaskCreate(vTaskDisplay, "Display", configMINIMAL_STACK_SIZE, NULL, 0, NULL);
    xTaskCreate(vTaskIndicator, "Indicator", configMINIMAL_STACK_SIZE, NULL, 0, NULL);

    // Start the scheduler
    vTaskStartScheduler();

    // Should never reach here
    while(1);
}

void vTaskSensorRead(void *pvParameters) {
    uint16_t adc_value;
    const TickType_t xDelay = pdMS_TO_TICKS(100); // 100 ms

    for (;;) {
        // Start ADC conversion and wait for it to complete
        adc_value = read_adc_channel(LM35_CHANNEL); // Assume this function handles ADC

        // Send to processing task
        if (xQueueSendToBack(xADCToProcessQueue, &adc_value, portMAX_DELAY) != pdPASS) {
            // Handle queue full error if necessary
        }

        vTaskDelay(xDelay); // Wait for the next sampling interval
    }
}

void vTaskProcessData(void *pvParameters) {
    uint16_t raw_adc;
    float temperature_c;
    bool alert_status;
    struct { float temp; bool alert; } processed_data;

    const float ADC_TO_VOLTS = 3.3 / 4095.0;
    const float VOLTS_TO_CELSIUS = 100.0;
    const float TEMP_THRESHOLD = 50.0;

    for (;;) {
        // Receive from sensor read task
        if (xQueueReceive(xADCToProcessQueue, &raw_adc, portMAX_DELAY) == pdPASS) {
            // Process data
            float voltage = raw_adc * ADC_TO_VOLTS;
            temperature_c = voltage * VOLTS_TO_CELSIUS;
            alert_status = (temperature_c > TEMP_THRESHOLD);

            processed_data.temp = temperature_c;
            processed_data.alert = alert_status;

            // Send to display and indicator tasks
            xQueueSendToBack(xProcessToDisplayQueue, &processed_data, portMAX_DELAY);
        }
    }
}

void vTaskDisplay(void *pvParameters) {
    char display_buffer[20];
    struct { float temp; bool alert; } data_from_process;

    // Initialize LCD
    // ...

    for (;;) {
        if (xQueueReceive(xProcessToDisplayQueue, &data_from_process, portMAX_DELAY) == pdPASS) {
            // Format and display temperature
            snprintf(display_buffer, sizeof(display_buffer), "Temp: %.1f C%s",
                     data_from_process.temp, data_from_process.alert ? "!" : " ");
            lcd_print(display_buffer); // Assume lcd_print function exists
        }
    }
}

void vTaskIndicator(void *pvParameters) {
    struct { float temp; bool alert; } data_from_process;

    for (;;) {
        if (xQueueReceive(xProcessToDisplayQueue, &data_from_process, portMAX_DELAY) == pdPASS) {
            if (data_from_process.alert) {
                set_led_on(ALERT_LED_PIN); // Assume set_led_on function exists
            } else {
                set_led_off(ALERT_LED_PIN); // Assume set_led_off function exists
            }
        }
    }
}
```

#### **3.4. WCET Analysis (Simplified)**

*   **`vTaskSensorRead`:**
    *   ADC conversion time: Assumed to be handled by `read_adc_channel` and might block for a fixed time or use interrupts. Let's assume it's relatively fast, e.g., 1 ms.
    *   Queue send: Small overhead.
    *   `vTaskDelay`: The OS handles this.
    *   *Estimated WCET:* ~2-3 ms. This leaves plenty of room within the 100 ms period.
*   **`vTaskProcessData`:**
    *   Queue receive: Small overhead.
    *   Floating-point arithmetic (multiplication, addition, comparison): Highly dependent on the FPU of the microcontroller. For a Cortex-M4 with FPU, these are typically very fast, e.g., a few tens of microseconds.
    *   Queue send: Small overhead.
    *   *Estimated WCET:* ~0.1-0.5 ms. Again, well within the time budget.
*   **`vTaskDisplay`:**
    *   Queue receive: Small overhead.
    *   String formatting (`snprintf`): Can be processor-intensive, depending on the implementation and buffer size. Let's estimate 1-2 ms.
    *   LCD I2C communication: This will be the slowest part, potentially tens of milliseconds depending on the LCD's response time and bus speed. Let's assume 20 ms for a safe estimate.
    *   *Estimated WCET:* ~25 ms. This is the most significant contributor to the deadline.
*   **`vTaskIndicator`:**
    *   Queue receive: Small overhead.
    *   LED toggle: Very fast, nanoseconds.
    *   *Estimated WCET:* Negligible, say < 1 ms.

**Schedule Feasibility Check:**

*   The tasks are designed to run periodically or be triggered by preceding tasks.
*   The dominant task `vTaskDisplay` has an estimated WCET of 25 ms, and it's triggered once every 100 ms.
*   The total processing time required within each 100 ms cycle is roughly: `WCET(SensorRead) + WCET(ProcessData) + WCET(Display) + WCET(Indicator)` = 3ms + 0.5ms + 25ms + 1ms = **29.5 ms**.
*   This is well within the 100 ms period, indicating the schedule is feasible with adequate slack.

#### **3.5. Testing and Verification**

*   **Functionality:** Verify that the temperature is displayed correctly and the LED turns on when the threshold is exceeded.
*   **Timing:** Use a logic analyzer to capture the signals related to ADC start/end, data transmission on the I2C bus, and LED toggling. Measure the time between sensor readings and display updates to ensure they meet the 80 ms deadline.
*   **Stress Test:** Simulate a rapid change in temperature to see if the system responds correctly without missing a reading or crashing.

---

### **4. Key Concepts and Their Relevance to the Case Study**

*   **Concurrency:** Multiple tasks (reading, processing, displaying) run seemingly simultaneously, managed by the RTOS. (CO1, CO4)
*   **Task Scheduling:** FreeRTOS uses a preemptive priority-based scheduler. Tasks with higher priority (e.g., `vTaskSensorRead`) will preempt lower-priority tasks if they become ready to run. (CO2, CO4)
*   **Inter-Task Communication (Queues):** Queues are used to safely pass data between tasks, preventing race conditions and ensuring data integrity. (CO4)
*   **Timers and Delays:** `vTaskDelay` is used to implement periodic behavior for the sensor reading task, crucial for sampling at a specific rate. (CO1, CO4)
*   **WCET:** Essential for confirming that the 100 ms sampling period can be reliably met by the processing chain. (CO3)
*   **Real-Time Constraints:** The 10 ms sampling period and the need for timely display updates are the driving factors behind the RTDAS design. (CO1, CO5)

---

### **5. Important Points to Remember**

*   **Timing is Paramount:** In RTDAS, the correctness of the system depends not only on the logical correctness of the output but also on the timeliness of the output.
*   **Determinism:** RTOSs aim for deterministic behavior, meaning that task execution times and responses are predictable.
*   **Resource Management:** The RTOS manages CPU time, memory, and peripherals, ensuring fair and timely access for all tasks.
*   **Abstraction:** The RTOS hides the complexities of low-level hardware interaction and multitasking, allowing developers to focus on application logic.
*   **Trade-offs:** Designing an RTDAS often involves trade-offs between performance, cost, power consumption, and complexity.
*   **Thorough Testing:** Rigorous testing, especially timing analysis, is critical for verifying that real-time deadlines are consistently met.

---

### **6. Practice Questions and Answers**

**Question 1:**
What is the primary difference between a regular operating system and a Real-Time Operating System (RTOS) in the context of data acquisition?

**Answer 1:**
The primary difference lies in guaranteed response times. A regular OS aims for average performance and fairness, while an RTOS guarantees that tasks complete within specified deadlines. In data acquisition, missing a deadline means losing critical data, which is unacceptable in a real-time system. (CO1)

**Question 2:**
Given two tasks: Task A samples a sensor every 50ms with a WCET of 10ms, and Task B processes the data every 200ms with a WCET of 30ms. If both tasks have the same priority and are preemptible, describe what happens when both tasks are ready to run.

**Answer 2:**
If both tasks have the same priority, the behavior depends on the specific RTOS's tie-breaking mechanism (e.g., round-robin, FIFO). However, if Task A has a higher priority (e.g., due to Rate Monotonic Scheduling principles), Task A will preempt Task B. Task B will resume execution only after Task A has completed its current execution burst. (CO2)

**Question 3:**
Why is Worst-Case Execution Time (WCET) analysis crucial for designing a real-time data acquisition system?

**Answer 3:**
WCET analysis is crucial because it provides the upper bound on how long a task will take to execute. This information is essential for:
1.  **Schedulability Analysis:** Determining if all tasks can meet their deadlines under the chosen scheduling algorithm.
2.  **Resource Allocation:** Ensuring that tasks have enough CPU time and memory without jeopardizing other critical operations.
3.  **System Design:** Identifying potential bottlenecks and areas for optimization. (CO3)

**Question 4:**
In our temperature monitoring case study, what RTOS service was used for passing temperature data from the processing task to the display task? What is an alternative service, and when might it be preferable?

**Answer 4:**
In the case study, a **queue** was used to pass data from the processing task to the display task.
An alternative service is a **semaphore**.
A semaphore could be used if the processing task simply needs to signal the display task that new data is available, and the display task then reads the data directly from a shared global variable protected by the semaphore. This might be preferable if the overhead of queue management is a concern or if the data is large and copying it into a queue is inefficient, provided that data consistency can be maintained. However, queues are generally safer for passing data as they handle buffering and ownership. (CO4)

**Question 5:**
Describe a scenario in real-time data acquisition where EDF (Earliest Deadline First) scheduling might be more advantageous than RMS (Rate Monotonic Scheduling).

**Answer 5:**
EDF is a dynamic-priority scheduling algorithm that is optimal. It would be more advantageous than RMS in scenarios with a significant number of **aperiodic or sporadic tasks** that have varying and unpredictable deadlines. For example, in a complex industrial monitoring system, if an anomaly is detected (an aperiodic event), it might trigger a high-priority data acquisition and analysis task with a very tight, immediate deadline. EDF can adapt to these dynamic changes in deadlines more effectively than RMS, which relies on fixed priorities based on periods. (CO2, CO5)

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### **7. References and Further Reading**

*   **Jim Cooling, "Real-Time Operating Systems Book 1: The Theory"**: Provides a solid foundation in RTOS concepts, scheduling, and synchronization primitives, highly relevant for understanding task management in our case study. (CO1, CO2, CO4)
*   **Rajib Mall, "Real-Time Systems: Theory and Practice"**: Offers in-depth coverage of real-time scheduling, WCET analysis, and system design principles. Essential for understanding the theoretical underpinnings of our RTDAS. (CO1, CO2, CO3)
*   **Hermann Kopetz, "Real-Time Systems: Design Principles for Distributed Embedded Applications"**: Discusses distributed real-time systems and their design, which is relevant for more complex data acquisition networks. (CO1, CO5)
*   **Jonathan W. Valvano, "Embedded Systems: Real-Time Operating Systems for Arm Cortex-M Microcontrollers"**: Highly practical for implementing RTDAS on common embedded platforms like ARM Cortex-M, covering RTOS specifics and hardware interaction. (CO1, CO4, CO5)
*   **Jane W. S. Liu, "Real-Time Systems"**: A foundational text covering a wide range of topics, including scheduling, analysis, and fault tolerance. (CO1, CO2)
*   **Philip A. Laplante, Seppo J. Ovaska, "Real-Time Systems Design and Analysis"**: Focuses on the practical aspects of designing and analyzing real-time systems, including WCET and schedulability. (CO3, CO5)

---