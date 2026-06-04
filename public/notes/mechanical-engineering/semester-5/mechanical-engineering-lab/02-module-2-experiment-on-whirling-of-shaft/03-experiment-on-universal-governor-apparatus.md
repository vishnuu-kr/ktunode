---
title: "Experiment on Universal governor apparatus"
subject: "MECHANICAL ENGINEERING LAB"
module: "Module 2: Experiment on Whirling of shaft"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf480446370f"
status: "completed"
scrapedAt: "2026-05-20T18:01:34.200Z"
---
# Mechanical Engineering Lab: Module 2 - Experiment on Whirling of Shaft

## Topic: Experiment on Universal Governor Apparatus

This experiment aims to understand the behavior of governors, specifically the universal governor apparatus, which is crucial for maintaining a constant speed of an engine or machine regardless of the load variations.

---

### 1. Introduction to Governors

**1.1 Purpose of a Governor:**
*   To automatically control the speed of an engine or prime mover by regulating the supply of working fluid (e.g., steam, fuel).
*   To maintain a relatively constant engine speed under varying load conditions.

**1.2 Why are Governors Needed?**
*   **Load Fluctuations:** Engines experience changes in load. If the load increases, the engine tends to slow down. If the load decreases, the engine tends to speed up.
*   **Maintaining Stable Operation:** Governors prevent excessive speed variations, ensuring smooth and efficient operation of machinery.

**1.3 Classification of Governors:**
*   **Inertia Governors:** Respond to changes in kinetic energy of rotating parts.
*   **Centrifugal Governors:** Respond to changes in centrifugal force of rotating masses. The Universal Governor is a type of centrifugal governor.

---

### 2. The Universal Governor Apparatus

**2.1 Description:**
The universal governor apparatus is a common mechanical device used to demonstrate the principles of centrifugal governors. It typically consists of:
*   A rotating spindle.
*   A set of rotating balls (masses) attached to arms.
*   A sleeve that moves vertically along the spindle.
*   A linkage mechanism connecting the sleeve to a throttle valve (or a similar regulating device).
*   A mechanism for varying the load on the prime mover.

**2.2 Working Principle (Centrifugal Force):**
*   As the spindle rotates, the centrifugal force acting on the rotating balls tends to move them radially outwards.
*   This outward movement is resisted by gravity or a spring mechanism.
*   The position of the sleeve is directly related to the speed of rotation. At higher speeds, the balls move further out, causing the sleeve to rise. At lower speeds, the balls move inwards, causing the sleeve to drop.
*   The sleeve's movement is linked to the throttle valve. When the sleeve rises (higher speed), it closes the throttle valve, reducing the fuel/steam supply and slowing down the engine. When the sleeve drops (lower speed), it opens the throttle valve, increasing the fuel/steam supply and speeding up the engine.

**2.3 Key Components and Terminology:**
*   **Spindle:** The central rotating shaft.
*   **Arms:** Linkages that connect the balls to the spindle or a rotating collar.
*   **Balls (Masses):** Rotating weights that move radially outward with increasing speed.
*   **Sleeve:** A collar that slides vertically on the spindle, its movement controlled by the arms.
*   **Governor Effort:** The force exerted by the balls on the sleeve due to centrifugal action.
*   **Governor Force:** The force required to maintain equilibrium of the rotating parts at a given speed.
*   **Governor Radius:** The horizontal distance of the center of gravity of a ball from the spindle axis.
*   **Height of the Governor:** The vertical distance between the plane of rotation of the balls and the plane of the spindle's apex (or pivot).

**2.4 Types of Universal Governors (Commonly demonstrated):**
*   **Porter Governor:** Has a dead weight added to the sleeve, which increases the stability of the governor.
*   **Proell Governor:** Has a dead weight attached to the sleeve, but the balls are attached to a bell crank lever.
*   **Watt Governor:** A basic type with only rotating balls and no additional weights.

**This experiment primarily focuses on demonstrating the relationship between spindle speed and sleeve position (or height) for a given governor configuration.**

---

### 3. Experimental Setup and Procedure

**3.1 Apparatus:**
*   Universal Governor Apparatus (often with a motor to drive the spindle).
*   Tachometer or speed sensor to measure spindle speed.
*   Scale or measuring device to determine the sleeve position or governor height.
*   Means to adjust load (if the apparatus simulates a load).

**3.2 Procedure:**
1.  **Familiarization:** Understand the construction and working of the universal governor apparatus. Identify the spindle, balls, arms, and sleeve.
2.  **Initial Setup:** Ensure the apparatus is securely mounted and the motor is connected.
3.  **Speed Variation:** Start the motor and gradually increase the spindle speed.
4.  **Data Collection:**
    *   For each spindle speed (measured by the tachometer), carefully observe and record the corresponding position of the sleeve. This can be done by:
        *   Measuring the vertical distance of the sleeve from a fixed reference point.
        *   Measuring the "height of the governor" (vertical distance from the plane of the balls' rotation to the spindle's apex).
    *   Take readings over a range of speeds, from low to high.
5.  **Load Variation (Optional but Recommended):** If the apparatus allows for load variation, repeat the data collection for different load conditions to observe the governor's response.
6.  **Analysis:** Plot the collected data.

---

### 4. Theoretical Concepts and Calculations

**4.1 Relationship between Speed and Governor Height (Watt Governor Example):**
For a Watt governor, the relationship between angular velocity ($\omega$) and the height of the governor ($h$) is approximately:
$\omega^2 = g/h$
where:
*   $\omega$ is the angular velocity in radians per second.
*   $g$ is the acceleration due to gravity (approx. 9.81 m/s²).
*   $h$ is the height of the governor in meters.

**4.2 Converting RPM to Angular Velocity:**
If speed is measured in Revolutions Per Minute (RPM), convert it to angular velocity ($\omega$) in rad/s:
$\omega = (2 \pi N) / 60$
where:
*   $N$ is the speed in RPM.

**4.3 Calculating Theoretical Speed for a Given Height:**
From $\omega^2 = g/h$, we can find the speed $N$ in RPM:
$N = (60 / 2\pi) * \sqrt{g/h}$

**4.4 Governor Characteristics:**
*   **Isochronous Governor:** Speed remains constant regardless of load. This is an ideal but rarely achieved governor.
*   **Stable Governor:** As the load decreases (speed increases), the governor moves to a new equilibrium position at a higher speed. The speed increases with increasing radius.
*   **Neutral Governor (Isochronous):** The equilibrium speed is the same for all radii.
*   **Unstable Governor:** As the load decreases (speed increases), the governor moves towards a position that causes further speed increase, leading to runaway. The speed decreases with increasing radius.

**4.5 Sensitiveness of a Governor:**
*   **Definition:** The ratio of the difference between the maximum and minimum equilibrium speeds to the mean equilibrium speed.
*   $Sensitiveness = (N_{max} - N_{min}) / N_{mean}$
    where $N_{max}$ and $N_{min}$ are the maximum and minimum stable equilibrium speeds respectively, and $N_{mean} = (N_{max} + N_{min})/2$.
*   **For a stable governor:** Sensitiveness > 1. A lower sensitiveness is generally desirable, indicating a smaller speed variation.
*   **For an isochronous governor:** Sensitiveness = 1.
*   **For an unstable governor:** Sensitiveness < 1.

**4.6 Effort and Power of a Governor:**
*   **Effort:** The rate at which the balls do work on the sleeve as the governor passes from its lowest to its highest sensible speed.
*   **Power:** The product of the effort and the vertical distance through which the sleeve moves. Power is related to the governor's ability to overcome the resistance of the throttle valve.

**5. Experiment on Universal Governor Apparatus - Specific Learning Outcomes and Alignment:**

*   **CO1: Choose the appropriate instruments for different measurements (Knowledge Level: K3):**
    *   **Learning Outcome:** To identify and use instruments like tachometers and measuring scales for accurate speed and position measurements.
    *   **Relevance:** You need to select a tachometer that can accurately measure the spindle speed and a caliper or ruler for precise sleeve position measurement. Understanding the limitations of these instruments is key (e.g., accuracy of the tachometer, parallax error in reading the scale).

*   **CO2: Determine dimensional and form accuracies of various components (Knowledge Level: K3):**
    *   **Learning Outcome:** While this experiment doesn't directly measure dimensional/form accuracy, understanding the governor's components (e.g., smooth movement of the sleeve, precision of the arms) is indirectly related to their manufacturing accuracy.
    *   **Relevance:** The smoothness of the sleeve's vertical movement depends on the tolerances of the spindle and sleeve. Any sticking or excessive play would affect the governor's performance.

*   **CO3: Develop knowledge of designing and analyzing mechanisms in machinery (Knowledge Level: K3):**
    *   **Learning Outcome:** To analyze the relationship between rotational speed and the mechanical response of the governor's linkage system. This involves understanding how centrifugal forces translate into sleeve movement.
    *   **Relevance:** This is the core of the experiment. You are analyzing the kinematic and dynamic behavior of the governor mechanism. You will plot speed vs. sleeve position, which is a direct analysis of the mechanism's function.

*   **CO4: Demonstrate the functions and control of various devices used for industrial automation (Knowledge Level: K3):**
    *   **Learning Outcome:** To understand how a governor acts as a feedback control system, automatically adjusting the engine's input (fuel/steam) to maintain a set speed.
    *   **Relevance:** The governor is a classic example of an open-loop or closed-loop control system in mechanical engineering. By observing how the sleeve position changes with speed, you demonstrate the control action. If the apparatus simulates a load, you can see how the governor attempts to maintain speed under load changes.

*   **CO5: Demonstrate 3D printing technique (Knowledge Level: K3):**
    *   **Learning Outcome:** This outcome is **not directly applicable** to the Universal Governor experiment as described. This outcome is likely for a different experiment in the lab syllabus, possibly related to prototyping.

---

### 6. Data Analysis and Interpretation

**6.1 Graphical Representation:**
*   Plot a graph of **Spindle Speed (RPM) vs. Sleeve Position (or Height)**.
*   Theoretically, for a Watt governor, this relationship should be a hyperbola ($N \propto 1/\sqrt{h}$). For other governors, the curves will differ based on their mass distribution and spring/weight mechanisms.
*   Compare the experimental curve with the theoretical curve (if available for the specific governor type).

**6.2 Key Observations:**
*   How does the sleeve position change with increasing spindle speed?
*   Is the relationship linear or non-linear?
*   If load was varied, how did the governor respond to maintain speed? Did the speed fluctuate significantly?
*   What is the range of stable operation observed?

**6.3 Sources of Error:**
*   **Friction:** Friction in the sleeve, spindle bearings, and linkages can affect the movement and responsiveness of the governor.
*   **Inaccuracy of Instruments:** Tachometer calibration errors, parallax error in reading scales.
*   **Mass Distribution:** Variations in the mass of the balls or arms.
*   **Improper Calibration:** The governor might not be properly set up or calibrated.
*   **External Vibrations:** Can interfere with sensitive measurements.

---

### 7. Important Points to Remember

*   **Governor's Role:** Maintain constant engine speed under varying loads.
*   **Centrifugal Force:** The primary driving force for centrifugal governors.
*   **Speed vs. Sleeve Position:** There's a direct correlation: higher speed usually means higher sleeve position (for simple governors).
*   **Sensitivity:** Measures how much the speed must change for the governor to respond. Lower sensitivity is usually better.
*   **Accuracy:** The degree to which the governor maintains the desired speed.
*   **Friction:** A major factor that reduces governor performance and accuracy.
*   **Load:** Governors are designed to counteract the effects of load changes.

---

### 8. Practice Questions and Answers

**Question 1:** What is the primary function of a governor in an engine?
**Answer:** The primary function of a governor is to automatically maintain a constant engine speed irrespective of the variations in the load on the engine.

**Question 2:** Which force is primarily responsible for the operation of a centrifugal governor?
**Answer:** Centrifugal force acting on the rotating balls.

**Question 3:** If a governor is designed to be stable, what happens to the equilibrium speed as the governor radius increases?
**Answer:** For a stable governor, as the governor radius (horizontal distance of balls from the spindle) increases, the equilibrium speed also increases.

**Question 4:** Convert a spindle speed of 300 RPM to angular velocity in rad/s. (Assume $g = 9.81$ m/s²)
**Answer:**
$\omega = (2 \pi N) / 60$
$\omega = (2 \pi \times 300) / 60$
$\omega = 10 \pi \text{ rad/s}$
$\omega \approx 31.42 \text{ rad/s}$

**Question 5:** If the height of a Watt governor is 0.2 meters, calculate the theoretical speed in RPM.
**Answer:**
Using $N = (60 / 2\pi) * \sqrt{g/h}$
$N = (60 / (2\pi)) * \sqrt{9.81 / 0.2}$
$N = (9.55) * \sqrt{49.05}$
$N = (9.55) * 7$
$N \approx 66.85 \text{ RPM}$

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 9. Textbook and Reference Material Integration

*   **Metrology for Engineers (Shotbolt & Gayler):** This book would be relevant for understanding how to accurately measure quantities like the sleeve position and spindle speed, focusing on metrological principles and instrument usage (CO1).
*   **Practical Engineering Metrology (Sharp & Hume):** Similar to Shotbolt & Gayler, this text would provide insights into the practical aspects of measurement, including selecting and using measuring tools for the governor's components (CO1).
*   **Kinematics and Dynamics of Machinery (Wilson & Sadler):** This is a core reference for understanding the mechanism of the governor. It would detail the kinematic analysis of the linkages, the forces involved (centrifugal, gravitational), and the dynamic behavior of the system (CO3).
*   **Mechatronics: Electronic Control Systems (Bolton):** This book helps understand the governor as a control element. It explains how mechanical systems (like the governor) are integrated with control principles to achieve automation and maintain desired parameters (like speed), aligning with CO4.
*   **Engineering Measurements (Collett & Hope):** Provides broader principles of measurement, which are foundational for correctly conducting the experiment and interpreting the data (CO1).
*   **Machines and Mechanisms (Myskza):** Offers in-depth analysis of mechanisms, including force analysis, motion analysis, and dynamic behavior. This is highly relevant for understanding how the governor's linkage system functions and responds to speed changes (CO3).
*   **Mechatronics: Integrated Mechanical Electronic Systems (Ramachandran et al.):** Reinforces the mechatronic aspect of governors, showcasing how mechanical design is integrated with control strategies for effective performance, fitting with CO4.

---
**End of Notes**