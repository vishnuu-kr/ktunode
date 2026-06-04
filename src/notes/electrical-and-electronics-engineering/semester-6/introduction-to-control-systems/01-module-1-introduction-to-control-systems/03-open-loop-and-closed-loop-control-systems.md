---
title: "Open loop and Closed loop control systems"
subject: "INTRODUCTION TO CONTROL SYSTEMS"
module: "Module 1: Introduction to Control Systems"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f366ad"
status: "completed"
scrapedAt: "2026-05-23T16:29:07.816Z"
---
# Introduction to Control Systems - Module 1: Introduction to Control Systems

## Topic: Open Loop and Closed Loop Control Systems

---

### 1. Introduction to Control Systems

**Key Concept:** A control system is an arrangement of physical components that manages, commands, directs, or regulates the behavior of other devices or systems. The primary goal is to make the output of a system follow a desired reference input.

**Importance:** Control systems are ubiquitous in modern life, playing a crucial role in everything from simple household appliances to complex industrial processes and advanced aerospace applications. Understanding their fundamental principles is essential for engineering disciplines.

---

### 2. Types of Control Systems

Control systems can be broadly classified into two main categories based on their operational characteristics:

*   **Open-Loop Control Systems**
*   **Closed-Loop (Feedback) Control Systems**

---

### 3. Open-Loop Control Systems

**Definition:** In an open-loop control system, the control action from the controller is independent of the actual output of the system. The system operates based solely on the input provided, without any mechanism to measure or compare the output to the desired reference.

**Key Concepts:**

*   **No Feedback:** The defining characteristic is the absence of feedback. The controller doesn't know if the desired output has been achieved.
*   **Pre-determined Control Action:** The control action is pre-set and based on the expected behavior of the system.
*   **Simplicity and Cost:** Generally simpler and less expensive to implement.
*   **Reliance on Calibration:** Highly dependent on accurate calibration and predictable system behavior.
*   **Susceptible to Disturbances:** External disturbances or variations in system parameters can significantly affect the output accuracy.

**Block Diagram Representation:**

```
       +---------+     +----------+     +-------+
Input -->|Controller|--->|Process/  |--->|Output |
       +---------+     |Plant     |     +-------+
                       +----------+
```

**Explanation of Diagram Components:**

*   **Input:** The desired reference signal.
*   **Controller:** Generates the control signal.
*   **Process/Plant:** The system or device being controlled.
*   **Output:** The actual response of the system.

**Examples:**

*   **Automatic Toaster:** Set the timer, and the toaster applies heat for that duration, regardless of how toasted the bread actually is. If the bread is thicker or thinner, the toasting level will vary.
*   **Washing Machine (Basic):** A timer-controlled washing machine cycles through wash, rinse, and spin for fixed durations. It doesn't sense the cleanliness of the clothes.
*   **Sprinkler System with Timer:** Waters the lawn for a set period each day, irrespective of whether it rained recently or the soil moisture level.
*   **Traffic Lights with Fixed Timing:** Lights change based on a pre-set schedule, not based on the actual traffic flow.

**Advantages:**

*   Simple design and construction.
*   Lower cost.
*   Generally stable (unless the controller itself is unstable).
*   Easy to maintain.

**Disadvantages:**

*   Inaccurate and unreliable if there are disturbances or variations in the system.
*   Cannot compensate for unexpected changes or errors.
*   Requires careful calibration.
*   Limited ability to achieve high performance or precision.

---

### 4. Closed-Loop (Feedback) Control Systems

**Definition:** In a closed-loop control system, the control action is dependent on the actual output of the system. The system measures its output and compares it to the desired reference input. This difference, known as the error, is used by the controller to adjust the control action to minimize the error.

**Key Concepts:**

*   **Feedback:** The core principle is the use of feedback, where the output is sensed and fed back to the input.
*   **Error Detection:** The system continuously compares the desired output (reference) with the actual output.
*   **Error Signal:** The difference between the reference input and the feedback signal is the error signal.
*   **Controller Action:** The controller uses the error signal to generate a control signal that drives the system towards the desired output.
*   **Accuracy and Stability:** Can achieve higher accuracy and stability, and can compensate for disturbances.
*   **Complexity and Cost:** Generally more complex and expensive to design and implement.

**Block Diagram Representation:**

```
       +---------+     +----------+     +-------+
Ref --->|Summing  |--->|Controller|--->|Process|--->Output -->+
       | Junction|     +----------+     |/Plant |              |
       +----^----+                    +----------+              |
            |                                                  |
            +------------------|Feedback|-----------------------+
                               +--------+
                                  (Sensor)
```

**Explanation of Diagram Components:**

*   **Reference Input (Ref):** The desired value for the output.
*   **Summing Junction:** Compares the reference input with the feedback signal.
    *   Output = Reference Input - Feedback Signal (Error Signal)
*   **Controller:** Processes the error signal and generates a control signal.
*   **Process/Plant:** The system or device being controlled.
*   **Output:** The actual response of the system.
*   **Feedback Sensor:** Measures the output and converts it into a feedback signal.
*   **Feedback Signal:** The measured output signal, typically scaled and converted to be compatible with the reference input.

**Examples:**

*   **Thermostat for Room Temperature Control:**
    *   **Reference Input:** Desired room temperature.
    *   **Sensor:** Thermometer measures actual room temperature.
    *   **Summing Junction:** Calculates the difference between desired and actual temperature (error).
    *   **Controller:** Based on the error, it turns the heater ON (if too cold) or OFF (if too hot).
*   **Cruise Control in a Car:**
    *   **Reference Input:** Desired speed.
    *   **Sensor:** Speedometer measures actual car speed.
    *   **Summing Junction:** Calculates the speed error.
    *   **Controller:** Adjusts the throttle to maintain the desired speed, compensating for hills or wind.
*   **Human Body Temperature Regulation:** The body senses deviations from the normal temperature and initiates mechanisms like sweating or shivering to restore it.
*   **Robotic Arm Position Control:** Sensors measure the actual position of the arm, and the controller adjusts motor commands to reach the target position.

**Advantages:**

*   High accuracy due to the ability to minimize errors.
*   Can compensate for disturbances and system parameter variations.
*   Can handle non-linearities to some extent.
*   Improved performance and reliability.

**Disadvantages:**

*   More complex design and implementation.
*   Higher cost due to sensors and additional components.
*   Potential for instability if not designed properly (e.g., oscillations).
*   Reduced speed of response compared to some open-loop systems.

---

### 5. Comparison: Open-Loop vs. Closed-Loop Control Systems

| Feature             | Open-Loop Control System                                    | Closed-Loop (Feedback) Control System                               |
| :------------------ | :---------------------------------------------------------- | :------------------------------------------------------------------ |
| **Feedback**        | Absent                                                      | Present                                                             |
| **Output Measurement**| Not measured or used for control                          | Measured and used to compare with the reference                     |
| **Error Handling**  | Cannot detect or correct errors                             | Detects and corrects errors                                         |
| **Accuracy**        | Lower, highly dependent on calibration and disturbances     | Higher, can compensate for disturbances and parameter variations      |
| **Reliability**     | Lower, susceptible to external factors                      | Higher, more robust to external factors                             |
| **Sensitivity**     | High sensitivity to disturbances and parameter variations   | Low sensitivity to disturbances and parameter variations              |
| **Complexity**      | Simple                                                      | Complex                                                             |
| **Cost**            | Lower                                                       | Higher                                                              |
| **Stability**       | Generally stable (unless controller is unstable)            | Can become unstable if not designed properly                        |
| **Speed of Response**| Can be faster for simple systems                            | Can be slower due to feedback processing                            |
| **Examples**        | Automatic toaster, timed washing machine, traffic lights    | Thermostat, cruise control, human body regulation, missile tracking |

**Reference (Nise, 5th Ed., Chapter 1):** Nise emphasizes that the primary distinguishing feature is the presence or absence of feedback. He discusses the trade-offs between simplicity and performance. Open-loop systems are simpler and cheaper but lack accuracy and robustness. Closed-loop systems offer accuracy and robustness at the cost of increased complexity.

**Reference (Nagrath & Gopal, 5th Ed., Chapter 1):** Nagrath and Gopal also highlight the role of feedback in achieving desired system performance. They introduce the concept of "error-sensing" as the fundamental principle of feedback control.

---

### 6. Course Outcome Alignment

*   **CO1 & CO5: To represent continuous time systems in the classical domain. (K2)**
    *   This topic introduces the fundamental structures (block diagrams) of control systems. Understanding these structures is the first step in representing continuous-time systems mathematically using transfer functions, which is a key aspect of the classical domain.

*   **CO2: Analyse the time domain responses of linear systems and predict and diagnose transient response parameters of the system for standard input functions. (K2)**
    *   While this specific topic focuses on the *types* of systems, understanding whether a system is open-loop or closed-loop is crucial before analyzing its time-domain response. For example, a closed-loop system's response will be significantly influenced by the feedback mechanism and the controller's tuning, which directly impacts transient parameters.

---

### 7. Key Points to Remember

*   **Open-loop:** Control action is *independent* of the output. "Set it and forget it."
*   **Closed-loop:** Control action is *dependent* on the output via feedback. "Measure, compare, and adjust."
*   The **error signal** is the difference between the desired output and the actual output in closed-loop systems.
*   **Feedback** is the key differentiator.
*   Open-loop systems are simpler and cheaper but less accurate and robust.
*   Closed-loop systems are more accurate and robust but more complex and potentially prone to instability.
*   The choice between open-loop and closed-loop depends on the application's requirements for accuracy, cost, and complexity.

---

### 8. Practice Questions

**Question 1:**

Identify whether the following systems are typically open-loop or closed-loop control systems and justify your answer:

a) A microwave oven that cooks food for a pre-set time.
b) A driver steering a car to follow a lane.
c) A smart irrigation system that adjusts watering based on soil moisture sensors.
d) A simple fan with only an on/off switch and speed settings.

**Answer 1:**

a) **Open-loop:** The microwave cooks for a fixed time regardless of whether the food is cooked to the desired doneness. The controller doesn't check the food's state.
b) **Closed-loop:** The driver (controller) observes the car's position relative to the lane (output) and adjusts steering (control action) to reduce the error (deviation from the lane).
c) **Closed-loop:** The system measures soil moisture (output), compares it to a desired level, and adjusts watering (control action) based on the error.
d) **Open-loop:** The fan's speed is set manually and operates at that speed regardless of the room's actual temperature or air circulation. There's no feedback mechanism.

**Question 2:**

A company is designing a system to control the temperature of a chemical reactor. They are considering two options:

*   **Option A:** A simple system where a heater is turned ON for a fixed duration based on an initial estimate of the required heat.
*   **Option B:** A system with a temperature sensor inside the reactor that feeds back the actual temperature to a controller, which then adjusts the heater's power to maintain a setpoint temperature.

Which option represents a closed-loop control system? What are the potential advantages of Option B over Option A for this application?

**Answer 2:**

Option B represents a closed-loop control system because it uses a temperature sensor to measure the actual reactor temperature (output) and feeds it back to a controller. This controller then adjusts the heater's power based on the difference between the desired and actual temperature (error).

**Advantages of Option B:**

*   **Accuracy:** Option B can maintain the temperature much more accurately, as it continuously corrects for any deviations caused by heat loss, variations in the chemical reaction rate, or changes in the environment. Option A's fixed duration is unlikely to achieve the same precision.
*   **Robustness to Disturbances:** If external factors (e.g., ambient temperature changes) affect the reactor temperature, Option B can automatically compensate, whereas Option A would continue to heat for the fixed duration, potentially leading to overheating or underheating.
*   **Adaptability:** Option B can adapt to changes in the chemical process itself that might affect heat requirements over time.

**Question 3:**

Briefly explain the fundamental difference between open-loop and closed-loop control systems.

**Answer 3:**

The fundamental difference lies in the use of feedback. An open-loop control system's control action is independent of the system's output, meaning it doesn't measure or utilize the output to adjust its operation. In contrast, a closed-loop control system measures its output, compares it to the desired reference input, and uses the resulting error signal to modify the control action, thereby achieving greater accuracy and robustness.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
