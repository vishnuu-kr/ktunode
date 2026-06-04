---
title: "Open-loop and closed-loop control."
subject: "ROBOTICS AND AUTOMATION"
module: "Module 2: Control Systems for Robots"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff18a"
status: "completed"
scrapedAt: "2026-05-23T18:09:40.653Z"
---
# ROBOTICS AND AUTOMATION

## Module 2: Control Systems for Robots

### Topic: Open-loop and Closed-loop Control

---

### **1. Introduction to Robot Control**

Robot control is the process of directing and coordinating the actions of a robot to achieve a desired task. It involves receiving information from sensors, processing it, and then commanding actuators to perform specific movements. Understanding different control strategies is fundamental to designing effective robotic systems.

---

### **2. Open-Loop Control**

**2.1. Definition:**
An open-loop control system operates without using feedback from the output to adjust its actions. The control signal is generated solely based on the input command and the system's internal model, assuming predictable behavior.

**2.2. How it Works:**
*   **Input:** A desired command or setpoint is provided to the controller.
*   **Controller:** The controller generates a control signal based on the input command. This signal is often pre-calculated or follows a predefined sequence.
*   **Actuator:** The actuator receives the control signal and performs an action (e.g., moves a joint).
*   **Output:** The system's physical output (e.g., robot arm position) is produced.
*   **No Feedback:** The system does not measure its actual output and compare it to the desired output. Any discrepancies are not corrected.

**2.3. Block Diagram:**

```
+---------+      +-----------+      +----------+      +--------+
|  Input  |----->| Controller|----->| Actuator |----->| System |-----> Output
+---------+      +-----------+      +----------+      +--------+
```

**2.4. Characteristics:**
*   **Simplicity:** Generally simpler to design and implement.
*   **Cost-Effective:** Often less expensive due to the absence of sensors and feedback mechanisms.
*   **Fast Response:** Can be faster as there's no feedback processing delay.
*   **Sensitivity to Disturbances:** Highly susceptible to external disturbances (e.g., friction, load variations, external forces) and internal uncertainties (e.g., parameter drift).
*   **Accuracy:** Less accurate because it cannot compensate for errors or deviations from the desired output.
*   **Requires Calibration:** Needs accurate calibration and a well-understood system model.

**2.5. Examples in Robotics:**
*   **Simple timed movements:** A robot arm moves for a specific duration or distance based on a pre-programmed sequence, without checking if it reached the intended position.
*   **Uncontrolled motor rotation:** A motor is driven with a specific voltage, assuming it will rotate at a certain speed, without measuring the actual speed.
*   **Pre-programmed trajectory generation:** If a robot arm is programmed to follow a path without real-time position sensing, it's operating in an open-loop manner for that path execution.

**2.6. Limitations:**
Open-loop control is generally **not suitable for precise robotic tasks** where accuracy and robustness against disturbances are critical. For example, trying to pick up an object with precise force or position control would be impossible with an open-loop system due to the inability to adapt to variations in object weight or surface.

---

### **3. Closed-Loop Control (Feedback Control)**

**3.1. Definition:**
A closed-loop control system uses feedback from the output to compare the actual output with the desired output (setpoint) and adjusts the control signal accordingly to minimize the error.

**3.2. How it Works:**
*   **Input (Setpoint):** A desired command or target value is provided.
*   **Sensor:** A sensor measures the actual output of the system (e.g., joint angle, end-effector position).
*   **Comparator (Summing Junction):** The measured output is compared with the setpoint to calculate the **error signal**.
    *   `Error (e) = Setpoint (r) - Measured Output (y)`
*   **Controller:** The controller receives the error signal and generates a control signal (effort) to drive the actuator. The goal of the controller is to reduce the error to zero.
*   **Actuator:** The actuator receives the control signal and performs an action on the system.
*   **System:** The physical system responds to the actuator's action.
*   **Feedback Loop:** The sensor continuously monitors the output, closing the loop and allowing for real-time adjustments.

**3.3. Block Diagram:**

```
+---------+      +-----------+      +----------+      +--------+
|  Input  |----->| Comparator|----->| Controller|----->| Actuator |----->+--------+
| (Setpoint)|     |   (e=r-y) |      |          |      |          |      | System |
+---------+      +-----------+      +-----------+      +----------+      +--------+
                    ^                                                     |
                    |                                                     |
                    +-----------------------------------------------------+
                                         Sensor (y)
```

**3.4. Characteristics:**
*   **Accuracy:** Significantly more accurate as it can actively correct for errors and deviations.
*   **Robustness:** Less sensitive to external disturbances and internal uncertainties because the feedback mechanism compensates for them.
*   **Stability:** Can be designed to be stable, but improper design can lead to instability (oscillations).
*   **Complexity:** More complex to design and implement due to the need for sensors, feedback processing, and more sophisticated controllers.
*   **Cost:** Generally more expensive due to the inclusion of sensors and more complex control algorithms.
*   **Response Time:** Can have a slower response due to the time required for sensing, computation, and actuation.

**3.5. Types of Controllers (Commonly Used in Closed-Loop Robotics):**
*   **Proportional (P) Control:** The control output is proportional to the error signal. `Control Signal = Kp * e`
*   **Proportional-Derivative (PD) Control:** Adds a derivative term to the proportional term. The derivative term anticipates future error based on the rate of change of error, providing damping. `Control Signal = Kp * e + Kd * (de/dt)`
*   **Proportional-Integral-Derivative (PID) Control:** Adds an integral term to the PD control. The integral term accounts for past errors, eliminating steady-state errors. `Control Signal = Kp * e + Ki * ∫e dt + Kd * (de/dt)`

**3.6. Examples in Robotics:**
*   **Position control of a robot joint:** A motor is commanded to move a robot joint to a specific angle. An encoder (sensor) measures the actual angle, and the controller adjusts the motor's torque to reach and maintain the desired angle, even if there are external forces applied. (CO1, CO3, CO4)
*   **Velocity control of a robot arm:** A motor's speed is regulated based on feedback from a tachometer or encoder.
*   **Force control:** Sensors (e.g., force sensors) measure the force exerted by the robot's end-effector, and the controller adjusts actuator commands to achieve a desired force.
*   **Visual servoing:** A camera (sensor) is used to guide the robot's motion by processing image features. The robot's movement is controlled to reduce the error between the current image and a target image. (CO3, CO4)

---

### **4. Comparison: Open-Loop vs. Closed-Loop Control**

| Feature          | Open-Loop Control                                  | Closed-Loop Control                                |
| :--------------- | :------------------------------------------------- | :------------------------------------------------- |
| **Feedback**     | Absent                                             | Present                                            |
| **Accuracy**     | Lower, sensitive to disturbances                   | Higher, compensates for disturbances               |
| **Robustness**   | Low                                                | High                                               |
| **Complexity**   | Simple                                             | Complex                                            |
| **Cost**         | Lower                                              | Higher                                             |
| **Stability**    | Generally stable (if designed well)                | Can be unstable if not properly designed           |
| **Calibration**  | Requires precise calibration and system model      | Less dependent on perfect calibration              |
| **Error Handling** | Cannot correct errors                              | Can correct errors                                 |
| **Applications** | Simple, predictable tasks; processes where output variation is negligible. | Tasks requiring precision, adaptability, and immunity to disturbances. |

---

### **5. Key Concepts and Definitions**

*   **Control System:** A system that manages, commands, and regulates the behavior of other systems or devices.
*   **Setpoint (Reference Input):** The desired value or target state for the system's output.
*   **Control Signal:** The signal generated by the controller that drives the actuator.
*   **Actuator:** A component that converts a control signal into a physical action (e.g., motors, solenoids).
*   **Sensor:** A device that measures a physical quantity and converts it into a signal that can be interpreted by the controller.
*   **Output:** The actual state or response of the system being controlled.
*   **Error Signal:** The difference between the setpoint and the measured output in a closed-loop system. `e = Setpoint - Output`.
*   **Disturbance:** An external or internal factor that adversely affects the system's output.
*   **Feedback:** The process of measuring the system's output and using that information to adjust the control action.
*   **Controller:** The "brain" of the control system that decides what action to take based on the input and feedback.
*   **System (Plant):** The physical entity being controlled (e.g., a robot arm, a motor).

---

### **6. Importance for Robot Control**

*   **Precision and Accuracy:** Closed-loop control is essential for robots that need to perform tasks with high precision, such as assembly, surgery, or intricate manipulation. (CO3)
*   **Adaptability and Robustness:** Robots often operate in dynamic environments with varying loads, unexpected obstacles, or sensor noise. Closed-loop control allows robots to adapt to these changes and maintain performance. (CO3)
*   **Safety:** In many applications, precise control is also a safety requirement. For example, controlling the force applied by a robot to prevent damage to itself or its environment.
*   **Understanding Basic Concepts:** Distinguishing between open-loop and closed-loop control is foundational for understanding more advanced robotic control techniques. (CO1)

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### **7. Textbook References**

*   **Craig, "Introduction to Robotics: Mechanics and Control":** This textbook provides a comprehensive treatment of robot kinematics, dynamics, and control. Chapter 6 (Robot Control) delves into various control strategies, including feedback control and trajectory tracking.
*   **Spong, Hutchinson, & Vidyasagar, "Robot Modeling and Control":** This book offers a rigorous approach to robot control, covering topics like manipulator dynamics, feedback control, and advanced control techniques. Chapters 4 and 5 discuss feedback control strategies like PID control.
*   **Groover, "Industrial Robotics":** Groover's book focuses on the practical aspects of industrial robotics. It discusses the fundamental control principles and how they are applied in industrial robot systems, often highlighting the necessity of feedback for accurate operation.

---

### **8. Practice Questions and Exercises**

**Question 1:**
A robot arm is programmed to move a gripper from point A to point B. If the robot relies solely on the programmed joint angles and motor commands without using any sensors to verify its actual position, what type of control system is it using?
a) Closed-loop control
b) Open-loop control
c) Both open-loop and closed-loop control
d) Adaptive control

**Answer:** b) Open-loop control

**Explanation:** The system is not using feedback to verify its position, making it an open-loop system.

**Question 2:**
Which of the following is a primary advantage of closed-loop control over open-loop control in robotic applications?
a) Simpler design
b) Lower cost
c) Higher accuracy and robustness to disturbances
d) Faster response time

**Answer:** c) Higher accuracy and robustness to disturbances

**Explanation:** Closed-loop control's ability to use feedback makes it more accurate and resilient to external influences.

**Question 3:**
Consider a robot arm tasked with picking up a fragile object. Explain why a closed-loop control system, specifically one that incorporates force sensing, would be superior to an open-loop system for this task. (Aligns with CO3, CO4)

**Answer:**
An open-loop system would attempt to apply a pre-programmed force or position without knowing the actual interaction force. This could easily lead to crushing the object if the programmed force is too high or failing to grasp it if it's too low. A closed-loop system with force sensing would measure the actual force exerted by the gripper. If the force exceeds a safe threshold, the controller would immediately reduce the actuator command, preventing damage. Conversely, if the object is not yet securely gripped, the controller could increase the force slightly until a stable grasp is achieved. This adaptive capability, driven by feedback, is crucial for handling delicate items.

**Question 4:**
A robot uses an encoder on a joint motor to measure the actual angular position. This measured position is then compared to the desired angle, and the difference (error) is used by a controller to adjust the motor's torque. What component is represented by the encoder in this scenario?
a) Actuator
b) Controller
c) Sensor
d) Setpoint

**Answer:** c) Sensor

**Explanation:** The encoder's function is to measure the physical state (angular position) and provide this information back to the control system.

---

### **9. Important Points to Remember**

*   **Feedback is the key differentiator:** Closed-loop systems use feedback; open-loop systems do not.
*   **Accuracy vs. Simplicity:** Open-loop offers simplicity and lower cost, while closed-loop provides higher accuracy and robustness at the expense of complexity and cost.
*   **Robot tasks often demand closed-loop:** Most robotic manipulators and mobile robots require closed-loop control for tasks involving precision, interaction with the environment, or navigation.
*   **Sensors are critical for closed-loop:** The effectiveness of closed-loop control relies heavily on the quality and type of sensors used. (CO4)
*   **Controller design impacts performance:** The choice of controller (P, PD, PID, etc.) significantly affects how well the closed-loop system responds to inputs and disturbances. (CO3)
*   **Understanding degrees of freedom (DOF) and kinematics (CO1, CO2) informs control:** The complexity of robot kinematics and the number of DOFs directly influence the complexity of the control system required, especially in closed-loop implementations.

---
This concludes the study notes for Open-loop and Closed-loop Control within Module 2 of Robotics and Automation. These concepts are fundamental to understanding how robots are made to perform tasks accurately and reliably.