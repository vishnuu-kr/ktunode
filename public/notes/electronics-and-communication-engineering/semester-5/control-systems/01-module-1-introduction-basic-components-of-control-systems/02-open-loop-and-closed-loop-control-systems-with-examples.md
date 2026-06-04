---
title: "Open-Loop and Closed-Loop Control Systems with examples."
subject: "CONTROL SYSTEMS"
module: "Module 1: Introduction:  Basic Components of Control Systems"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe94a"
status: "completed"
scrapedAt: "2026-05-23T17:54:34.660Z"
---
# CONTROL SYSTEMS: Module 1 - Introduction: Basic Components of Control Systems
## Topic: Open-Loop and Closed-Loop Control Systems with Examples

---

### **1. Introduction to Control Systems**

A **control system** is a system that manages, commands, or regulates the behavior of other systems or devices. The goal is to achieve a desired output by manipulating the input. Control systems are ubiquitous in our daily lives, from simple household appliances to complex industrial processes and aerospace applications.

**Key Concepts:**

*   **System:** A collection of interconnected components that work together to achieve a specific function.
*   **Input:** The signal or command that is applied to the system to initiate or modify its behavior.
*   **Output:** The response or effect produced by the system due to the input.
*   **Control:** The process of manipulating the input to achieve the desired output.
*   **Objective:** To make the system's output follow a desired reference or setpoint, despite disturbances.

---

### **2. Open-Loop Control Systems**

An **open-loop control system** is a system where the output has no effect on the control action. The control action is independent of the output. It operates based on a pre-determined input or a timer, without checking if the desired output has been achieved.

**Key Characteristics:**

*   **No Feedback:** The system does not measure its output and compare it to the desired input.
*   **Simpler Design:** Generally less complex to design and build.
*   **Lower Cost:** Typically less expensive due to fewer components.
*   **Less Accurate:** Susceptible to disturbances and variations in system parameters, leading to inaccuracies.
*   **Unreliable for Precision:** Not suitable for applications requiring high accuracy or when disturbances are significant.

**Block Diagram:**

```
      +--------+     +----------+
----->|        |---->|          |-----> Output
      | Input  |     | Controller|
      |        |     |          |
      +--------+     +----------+
                      |
                      | Controller's Action (e.g., actuator)
                      |
                      v
                   +-------+
                   | Plant |
                   |       |
                   +-------+
```

**Operation:**

The input signal is processed by the controller, which generates a control signal. This control signal is then applied to the plant (the system being controlled), producing an output. The system's performance is not monitored or adjusted based on the actual output.

**Examples:**

*   **Automatic Toaster:** You set the timer, and the toaster heats for that duration, regardless of how brown the toast actually is. If the bread is drier or moister than usual, the toast might be overcooked or undercooked.
    *   *Input:* Timer setting.
    *   *Controller:* Timer mechanism.
    *   *Actuator:* Heating elements.
    *   *Plant:* Bread being toasted.
    *   *Output:* Toasted bread.
*   **Washing Machine (Simple Timer-based):** The machine runs through its cycles (wash, rinse, spin) for pre-set durations, irrespective of how clean the clothes are.
    *   *Input:* Cycle selection and time.
    *   *Controller:* Timer and motor control.
    *   *Plant:* Clothes and water in the drum.
    *   *Output:* Washed clothes.
*   **Electric Fan with Speed Control:** Setting the fan to a specific speed (low, medium, high) ensures it runs at that speed, but it doesn't adjust based on room temperature or how much air is actually moving.
    *   *Input:* Speed selection.
    *   *Controller:* Speed control circuitry.
    *   *Plant:* Fan motor and blades.
    *   *Output:* Airflow.
*   **Traffic Lights (Fixed Timing):** Traffic lights operate on a pre-programmed schedule, changing colors at fixed intervals, irrespective of the actual traffic density.

---

### **3. Closed-Loop Control Systems (Feedback Control Systems)**

A **closed-loop control system**, also known as a **feedback control system**, is a system where the output is measured and compared to the desired input (reference) to produce an error signal. This error signal is then used to adjust the control action to bring the output closer to the desired value.

**Key Characteristics:**

*   **Feedback Mechanism:** The output is measured by a sensor and fed back to the input side.
*   **Error Detection:** A comparator compares the desired input (setpoint) with the measured output (feedback signal) to generate an error signal.
*   **Accuracy:** Generally more accurate and less sensitive to disturbances and parameter variations.
*   **Stability:** Can be designed to be stable, but improper design can lead to instability.
*   **Complexity:** More complex design and higher cost due to the inclusion of sensors and comparators.
*   **Self-Correcting:** The system automatically adjusts its control action to minimize the error.

**Block Diagram:**

```
      +--------+     +----------+     +-------+
----->|        |---->|          |---->|       |-----> Output
      | Input  |     | Controller|     | Plant |
      | (Ref)  |     |          |     |       |
      +--------+     +----------+     +-------+
          ^                                |
          |                                |
          |          +----------+          |
          +----------|  Sensor  |<---------+
                     |          |
                     +----------+
                         |
                         | Feedback Signal
                         |
                         v
                   +----------+
                   |Comparator|
                   |          |
                   +----------+
                         | Error Signal
                         v
                  (To Controller)
```

**Operation:**

1.  The **Reference Input** (setpoint) is the desired value of the output.
2.  The **Output** is the actual response of the system.
3.  A **Sensor** measures the output and converts it into a feedback signal.
4.  A **Comparator** (e.g., summing junction) subtracts the feedback signal from the reference input to produce the **Error Signal**: `Error = Reference Input - Feedback Signal`.
5.  The **Controller** receives the error signal and generates a control signal.
6.  The **Actuator** (part of the plant or controlled by it) receives the control signal and influences the plant.
7.  The **Plant** (the system being controlled) produces the output.

**Examples:**

*   **Thermostat Controlled Air Conditioner:** The thermostat senses the room temperature (output) and compares it to the desired temperature (setpoint). If the room is too warm, it sends a signal to the air conditioner to cool it down. If it's too cold, it turns off the cooling.
    *   *Reference Input:* Desired room temperature.
    *   *Sensor:* Thermometer (in the thermostat).
    *   *Comparator:* Compares desired temp with actual temp.
    *   *Error Signal:* Difference between desired and actual temperature.
    *   *Controller:* Thermostat's logic.
    *   *Actuator:* Compressor, fan.
    *   *Plant:* Room and air conditioning system.
    *   *Output:* Actual room temperature.
*   **Cruise Control in a Car:** The driver sets a desired speed. A speed sensor measures the car's actual speed (output). If the actual speed is lower than the set speed, the system increases fuel to the engine. If it's higher, it reduces fuel.
    *   *Reference Input:* Desired speed.
    *   *Sensor:* Speedometer/speed sensor.
    *   *Comparator:* Compares desired speed with actual speed.
    *   *Error Signal:* Difference in speeds.
    *   *Controller:* Engine control unit (ECU).
    *   *Actuator:* Throttle.
    *   *Plant:* Car engine and drivetrain.
    *   *Output:* Actual car speed.
*   **Human Body Temperature Regulation:** Our body has a feedback mechanism to maintain a core temperature around 37°C. If we get too hot, we sweat (feedback to cool). If we get too cold, we shiver (feedback to generate heat).
    *   *Reference Input:* Normal body temperature (setpoint).
    *   *Sensor:* Thermoreceptors in the skin and hypothalamus.
    *   *Comparator:* Hypothalamus in the brain.
    *   *Error Signal:* Deviation from normal temperature.
    *   *Controller:* Brain.
    *   *Actuator:* Sweat glands, muscles (for shivering).
    *   *Plant:* Body's metabolic processes.
    *   *Output:* Actual body temperature.
*   **Automatic Pilot in an Aircraft:** Maintains the aircraft's altitude, heading, and speed by constantly monitoring these parameters and adjusting control surfaces.

---

### **4. Comparison: Open-Loop vs. Closed-Loop Control Systems**

| Feature          | Open-Loop Control System                 | Closed-Loop Control System                 |
| :--------------- | :--------------------------------------- | :----------------------------------------- |
| **Feedback**     | Absent                                   | Present                                    |
| **Accuracy**     | Low (sensitive to disturbances)          | High (less sensitive to disturbances)      |
| **Complexity**   | Simple                                   | Complex                                    |
| **Cost**         | Low                                      | High                                       |
| **Reliability**  | Less reliable for precision              | More reliable for precision                |
| **Bandwidth**    | Can have wider bandwidth (faster response) | Generally narrower bandwidth               |
| **Stability**    | Generally stable                         | Can be unstable if not designed properly   |
| **Calibration**  | Requires careful calibration             | Less dependent on calibration              |
| **Disturbances** | Cannot compensate for disturbances       | Compensates for disturbances               |
| **Examples**     | Timer-based toaster, fixed traffic lights | Thermostat, cruise control, human body     |

---

### **5. Key Concepts Recap and Important Points**

*   **Open-loop systems** are essentially "feedforward" systems; they operate without knowing the outcome.
*   **Closed-loop systems** are "feedback" systems; they use the output to guide their actions.
*   The presence or absence of a **feedback path** is the fundamental difference.
*   **Feedback** is crucial for achieving accuracy, robustness against disturbances, and reducing sensitivity to parameter variations.
*   The trade-off for closed-loop systems' advantages is increased **complexity** and potential for **instability**.

---

### **6. Practice Questions and Exercises**

**Instructions:** For each scenario, identify whether it is an open-loop or closed-loop system and explain your reasoning.

**Question 1:**
A microwave oven that you set to cook for 2 minutes. After 2 minutes, it stops heating, regardless of whether the food is fully cooked.
*   **Answer:** Open-loop. The cooking time is pre-set and not adjusted based on the food's internal temperature.

**Question 2:**
A toilet tank float mechanism. When the water level drops after flushing, the float drops, opening a valve to refill the tank. Once the water reaches a certain level, the float rises and closes the valve.
*   **Answer:** Closed-loop. The water level (output) is sensed by the float, and this feedback controls the valve (actuator) to stop the filling process when the desired level is reached.

**Question 3:**
A person driving a car and steering to stay within the lanes.
*   **Answer:** Closed-loop. The driver (controller) observes the car's position relative to the lane markings (output) using their eyes (sensor) and adjusts the steering wheel (actuator) to correct any deviation (error signal).

**Question 4:**
A sprinkler system programmed to water a lawn for 30 minutes each morning, regardless of whether it rained the previous night.
*   **Answer:** Open-loop. The watering duration is fixed and does not consider the moisture content of the soil (which would be the output to be controlled).

**Question 5:**
A robot arm programmed to pick up an object from a specific location and place it at another. The robot's vision system confirms the object's presence and position before attempting the pickup.
*   **Answer:** Closed-loop. The vision system acts as a sensor, feeding back information about the object's location. This information is used to correct the arm's movement (control action) to ensure a successful pickup.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### **7. References and Further Reading**

*   **Control Systems Engineering by I.J. Nagarath, M. Gopal (New Age International Publishers, 7th Edition 2022)**
    *   Chapter 1 provides a fundamental introduction to control systems, including basic components and the classification of control systems. The distinction between open-loop and closed-loop systems is clearly elaborated with illustrative examples.
*   **Automatic Control Systems by Benjamin C. Kuo, Farid Golnaraghi, (Wiley, 10th Edition 2017)**
    *   Chapter 1 typically covers the basic concepts, definitions, and the historical development of automatic control. It thoroughly explains open-loop and closed-loop systems with their respective block diagrams and application examples.
*   **Modern Control Engineering by Katsuhiko Ogata (Pearson, Fifth Edition 2015)**
    *   Ogata's text is known for its detailed explanations. Chapter 1 will introduce the subject, emphasizing the importance of feedback in achieving desired control performance and detailing the structure of both open-loop and closed-loop systems.
*   **Nise's Control Systems Engineering by Norman S. Nise (Wiley India, 8th Edition 2017)**
    *   Chapter 1 in Nise's book is dedicated to "Introduction to Control Systems." It clearly distinguishes between open-loop and closed-loop systems, highlighting their characteristics, advantages, disadvantages, and providing numerous real-world examples.
*   **Feedback and Control Systems by Joseph DiStefano, Allen R. Stubberud, and Ivan J. Williams (McGraw Hill, Third Edition 2013)**
    *   This book delves into the foundational principles. Chapter 1 will likely introduce the concept of feedback and its role in creating systems that can perform tasks automatically and accurately, distinguishing between systems with and without feedback.

---

### **8. Alignment with Course Outcomes (COs)**

*   **CO1: Analyze the systems using transfer function approach (Knowledge Level: K3)**
    *   While this topic primarily focuses on conceptual understanding and system classification, understanding open-loop and closed-loop structures is the precursor to developing transfer function models for these systems. The block diagrams introduced here are essential for subsequent transfer function derivations.
*   **CO2: Perform time domain analysis and steady state analysis of systems (Knowledge Level: K2)**
    *   Understanding the basic difference between open-loop and closed-loop systems is foundational for analyzing their time-domain behavior (e.g., response to step inputs) and steady-state errors. Closed-loop systems inherently have mechanisms to reduce steady-state errors, which will be explored later.
*   **CO3: Determine the absolute stability and relative stability of a system using Routh Hurwitz Criterion and root locus (Knowledge Level: K3)**
    *   The stability of closed-loop systems is a major concern. The concepts of feedback and error signals are directly tied to stability analysis techniques like Routh-Hurwitz and root locus, which are applied to the characteristic equation derived from closed-loop system configurations.
*   **CO4: Apply frequency domain techniques to assess the system stability and to design different compensation techniques (Knowledge Level: K3)**
    *   Frequency domain analysis (e.g., Bode plots, Nyquist plots) is primarily used for closed-loop systems to assess stability margins and design compensators. The effectiveness of these techniques depends on understanding the closed-loop structure.
*   **CO5: Analyse system Controllability and Observability using state space representation (Knowledge Level: K3)**
    *   State-space representation, used for analyzing controllability and observability, can be applied to both open-loop and closed-loop system configurations. The distinction between the two types of systems helps in formulating their state-space models.

---