---
title: "wheeled robot"
subject: "SENSORS AND ACTUATORS FOR ROBOTICS"
module: "Module 1: Introduction to Robotics and Automation: "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9120463779487da662"
status: "completed"
scrapedAt: "2026-05-23T17:43:17.431Z"
---
# Module 1: Introduction to Robotics and Automation
## Topic: Wheeled Robots

Welcome, everyone! Today, we embark on our journey into the fascinating world of sensors and actuators for robotics. We’re starting with the very foundation – understanding the basic building blocks of robots. And what’s a more fundamental robot than a wheeled one? Think about it, from your everyday Roomba vacuum cleaner to sophisticated exploration rovers on Mars, wheeled robots are everywhere. They are the workhorses of mobile robotics, enabling robots to navigate and interact with their environment. This module sets the stage for everything we'll learn, and understanding wheeled robots is crucial for grasping how sensors and actuators work together to make these machines intelligent and mobile.

### 1.1 What is a Wheeled Robot? The Basics of Mobility

At its core, a wheeled robot is a robotic platform that uses wheels for locomotion. This might sound simple, but the choice of wheels and their arrangement profoundly impacts how a robot moves, its maneuverability, and its ability to overcome obstacles.

Think about a car. It uses wheels to move, right? A wheeled robot is similar, but it’s designed to be autonomous – it makes its own decisions about where to go and how to get there, guided by its sensors and controlled by its actuators.

**Why Wheels?**
Wheels are a highly efficient method of locomotion on relatively flat surfaces. They offer several advantages:

*   **Energy Efficiency:** Compared to legged robots or flying drones for ground-based tasks, wheels generally require less energy to overcome friction and move forward. This is key for robots that need to operate for extended periods.
*   **Speed and Stability:** On suitable terrain, wheeled robots can achieve significant speeds and maintain good stability.
*   **Simplicity (Relatively):** While complex, the underlying mechanical principles of wheel-based movement are often simpler to implement and control than, say, the intricate coordination of multiple legs.

This simplicity is often a starting point in robotics education and research. As noted in **De Silva's "Sensors and actuators: Engineering system instrumentation,"** understanding basic mechanical configurations like wheeled platforms is essential before delving into more complex robotic systems.

### 1.2 Types of Wheeled Mobile Robots: Navigating Different Landscapes

Not all wheeled robots are created equal. The configuration of their wheels dictates their movement capabilities. Let’s explore the common types:

#### 1.2.1 Differential Drive Robots

This is perhaps the most common and simplest type of wheeled robot. Imagine two wheels, one on each side of the robot, that can rotate independently. They are typically driven by separate motors.

*   **How it works:** By varying the speed and direction of these two wheels, the robot can move forward, backward, and turn.
    *   **Forward/Backward:** Both wheels turn in the same direction at the same speed.
    *   **Turning in Place (Yaw):** One wheel turns forward, and the other turns backward at the same speed. Or, one wheel stays stationary while the other turns.
    *   **Turning while Moving:** One wheel turns faster than the other.
*   **Analogy:** Think of a shopping cart where you can push each of the main wheels independently. Or, more precisely, imagine a person on a wheelchair – they can propel themselves forward, backward, or pivot on the spot by controlling their wheels.
*   **Advantages:** Simple to control, good maneuverability, can turn in place.
*   **Disadvantages:** Cannot move sideways (strafe) or diagonally. Limited ability to overcome obstacles without dedicated mechanisms.
*   **Connection to Course Outcomes:** Understanding how the motors (actuators) control the wheels to achieve different movements directly relates to **CO4: Describe the working principle of different actuators used in robotics.** The independent control of each wheel is a fundamental aspect of actuator application.

#### 1.2.2 Ackerman Steering Robots

This is what most cars use! It’s based on the steering geometry designed by Ferdinand von Ackerman.

*   **How it works:** The front wheels are mounted on a pivoting mechanism and are steered together. The key principle is that the inner wheel needs to turn at a sharper angle than the outer wheel when turning. This ensures that both wheels are rolling without slipping, which is more efficient and reduces tire wear.
*   **Analogy:** Think about the steering wheel of a car. When you turn, both front wheels pivot, but they do so at slightly different angles.
*   **Advantages:** Good for high-speed travel, stable turning, efficient on roads.
*   **Disadvantages:** Cannot turn in place, requires more space to make turns compared to differential drive.
*   **Connection to Course Outcomes:** While the steering mechanism itself is mechanical, the **actuators** (motors) are responsible for turning the wheels and controlling the steering angle. This reinforces **CO4**.

#### 1.2.3 Omnidirectional Robots (Mecanum Wheel Robots)

These are the "superstars" of maneuverability. They use special wheels called Mecanum wheels or Swedish wheels.

*   **How it works:** A Mecanum wheel has a series of small rollers mounted around its circumference, oriented at a 45-degree angle to the wheel's axis. By controlling the speed and direction of each wheel individually, the robot can move forward, backward, sideways, diagonally, and even rotate in place.
*   **Analogy:** Imagine a person pushing a box with a few very smooth, freely rotating caster wheels on the bottom. While caster wheels allow for easier sliding, Mecanum wheels offer precise, controlled movement in any direction. Or, picture a conveyor belt system where the rollers are angled. If you roll a ball across it, it can be directed left or right. Mecanum wheels combine this directional rolling with forward/backward movement.
*   **Advantages:** Extreme maneuverability, can move in any direction without reorienting its body.
*   **Disadvantages:** More complex to control, Mecanum wheels can be less efficient and noisy on certain surfaces, and they have difficulty with obstacles and rough terrain.
*   **Connection to Course Outcomes:** The intricate control of four or more wheels to achieve desired trajectories directly showcases the power of coordinated **actuator** control (**CO4**). The ability to move in any direction is a direct outcome of how these actuators are managed.

#### 1.2.4 Other Configurations

You'll also encounter robots with:

*   **Tricycle Drive:** One powered steered wheel at the front and two passive wheels at the back (or vice-versa). Think of a tricycle.
*   **Car Drive (Four-Wheel Drive):** Similar to Ackerman steering but might have all wheels powered.

The choice of configuration depends entirely on the robot’s intended application. A robot for navigating tight warehouse aisles might benefit from omnidirectional capabilities, while an outdoor exploration robot might prioritize stability and efficiency with a differential or Ackerman drive.

### 1.3 The Role of Sensors in Wheeled Robots: The Robot's Senses

Now, how does a wheeled robot know where it is, where it's going, or what's in its way? This is where sensors come in. Sensors are the "eyes and ears" of the robot, providing it with information about its internal state and its external environment. For wheeled robots, sensors are critical for:

*   **Navigation:** Knowing its position and orientation.
*   **Obstacle Avoidance:** Detecting objects to prevent collisions.
*   **Path Following:** Ensuring it stays on a designated route.
*   **Odometry:** Estimating distance traveled and turns made.

Let's briefly touch upon some key sensor types that are crucial for wheeled robots. We’ll delve deeper into these in later modules, but it's important to see how they fit in here.

*   **Wheel Encoders (Rotary Encoders):** These are attached to the motors driving the wheels. They measure the amount of rotation of the wheel. By counting the pulses from an encoder, we can determine how far the wheel has turned. This is fundamental for **odometry** – calculating the robot’s position and orientation based on wheel movements. This directly helps in achieving **CO3: Categorize and choose the suitable sensor to measure position, motion, and range of the obstacles.** Wheel encoders measure the *motion* of the robot's own parts.
*   **Inertial Measurement Units (IMUs):** IMUs typically contain accelerometers and gyroscopes.
    *   **Accelerometers:** Measure linear acceleration. This helps in detecting changes in speed and orientation (like tilting).
    *   **Gyroscopes:** Measure angular velocity. This helps in tracking rotations and maintaining orientation.
    *   An IMU provides information about the robot's motion and orientation, complementing wheel encoder data. This is also related to **CO3** by providing motion data.
*   **Proximity Sensors:** These sensors detect the presence of nearby objects without physical contact. Examples include:
    *   **Infrared (IR) Sensors:** Emit IR light and detect its reflection.
    *   **Ultrasonic Sensors:** Emit sound waves and measure the time it takes for the echo to return.
    *   These are vital for obstacle avoidance, directly linking to **CO3**. Imagine a Roomba navigating a room – it uses proximity sensors to not bump into furniture.
*   **Lidar (Light Detection and Ranging) / Depth Cameras:** These provide a more detailed 3D map of the environment, allowing the robot to "see" its surroundings and identify obstacles more precisely. This is a more advanced form of ranging and is essential for complex navigation and mapping, again fitting under **CO3**.

Remember **CO2: Demonstrate the working principle and characteristics of proximity, force and pressure sensors**? Proximity sensors are a prime example of sensors you'll find on wheeled robots to interact with their environment. We'll explore their inner workings in detail!

### 1.4 The Role of Actuators in Wheeled Robots: Making it Move

If sensors are the robot's senses, actuators are its muscles. Actuators are the components that convert electrical energy into mechanical motion, enabling the robot to perform physical actions. For wheeled robots, the primary actuators are the motors that drive the wheels.

*   **DC Motors:** These are very common for driving wheels. They are relatively simple, provide good torque, and their speed can be controlled by varying the voltage applied.
*   **Stepper Motors:** These motors move in discrete steps, allowing for very precise control of angular position. This can be useful for steering mechanisms or if precise wheel positioning is needed.
*   **Servomotors:** These are also position-controlled motors, often used for steering mechanisms or for articulated arms attached to wheeled platforms.

**How Actuators Enable Movement (Connecting to CO4):**
Let's take the differential drive robot again.
*   To move forward, the **DC motors** on both wheels receive a signal to rotate in the same direction. The **speed controller** (which is part of the actuator system or works closely with it) dictates how fast they turn.
*   To turn left, the left motor might slow down or reverse, while the right motor continues forward, causing the robot to pivot around its center.

The smooth, controlled motion of a wheeled robot is entirely dependent on the precise control of these motor **actuators**. The ability to control speed, direction, and sometimes even position is what allows the robot to execute its programmed tasks.

**An Everyday Example:** Imagine you are trying to steer a remote-controlled car. You push the joystick forward, and the motors in the wheels spin. You turn the steering wheel, and the steering mechanism (driven by another small motor, a servo) turns the front wheels. These are simple, everyday examples of actuators at work, and they form the basis of what we study in robotics.

### 1.5 Putting it all Together: The Synergy of Sensors and Actuators

The real magic in robotics happens when sensors and actuators work in harmony. A wheeled robot isn't just a collection of motors and wheels; it's an intelligent system.

*   **Example: Obstacle Avoidance**
    1.  **Sensor Input:** An ultrasonic sensor detects an object directly in front of the robot.
    2.  **Processing:** The robot's onboard computer receives this data and decides, "There's an obstacle!"
    3.  **Actuator Command:** The computer sends a command to the **drive motors** to stop or change direction. For a differential drive robot, it might command the motors to reverse for a moment and then turn.
    4.  **Feedback Loop:** As the robot moves, the ultrasonic sensor continuously monitors the environment, and the motors adjust their output based on the sensor readings.

This constant cycle of sensing, processing, and acting is fundamental to all robotic systems, and wheeled robots provide a clear, tangible illustration of this principle. This interconnectedness is the essence of what we're exploring in **Sensors and Actuators for Robotics**. It’s about understanding how these components enable robots to perceive and interact with the world, fulfilling objectives like **CO1: Understand the significance, social impact and future prospects of robotics and automation in various engineering applications.** For instance, a simple obstacle-avoiding wheeled robot can be the basis for automated delivery systems or industrial cleaning robots, showcasing practical applications.

### 1.6 Why is this important for you? (Connecting to Course Outcomes)

As we move through this course, remember that every concept we discuss – every sensor type, every actuator principle – will directly apply to understanding how robots, like these wheeled platforms, perform their tasks.

*   **CO1 (Significance, Impact, Future Prospects):** Understanding basic wheeled robots helps us appreciate the foundation of automation in logistics (delivery robots), manufacturing (mobile platforms), and even exploration (rovers). The future is full of autonomous systems, and wheeled robots are a vital part of that.
*   **CO2 (Proximity, Force, Pressure Sensors):** You’ll learn how proximity sensors help wheeled robots "see" obstacles, and later, how force sensors might help them gauge the resistance they encounter or grip objects.
*   **CO3 (Position, Motion, Range Sensors):** This module has shown you *why* you need sensors for position (where am I?), motion (how am I moving?), and range (what's around me?). Wheel encoders, IMUs, and proximity sensors are direct answers to these needs for wheeled robots.
*   **CO4 (Actuator Principles):** We’ve seen how DC motors, controlled precisely, are the actuators that drive wheeled robots. This module lays the groundwork for understanding how those motors work and how to control them effectively.

So, think of wheeled robots as your practical laboratory for learning about the fundamental components that bring robots to life.

---

### Sample Questions with Answers

**1. Conceptual Question:** Explain why a differential drive robot cannot move sideways without complex additional mechanisms.
    *   **Answer:** A differential drive robot relies on the differential rotation of its two independently driven wheels, which are typically aligned parallel to the robot's longitudinal axis. To move forward or backward, both wheels rotate in the same direction. To turn, the wheels rotate in opposite directions or at different speeds. However, there is no mechanism to directly generate a lateral (sideways) force or motion component using only these two wheels. Any perceived sideways movement would be a consequence of a controlled rotation while also attempting to move forward or backward, rather than a direct lateral translation. This is fundamentally different from omnidirectional robots using Mecanum wheels, where the angled rollers directly enable sideways movement.

**2. Exam-Oriented Question:** A wheeled robot uses wheel encoders to estimate its distance traveled. If an encoder on a wheel with a circumference of 0.3 meters outputs 100 pulses per revolution, and the robot’s control system records 500 pulses, how far has the robot traveled?
    *   **Answer:**
        *   **Understanding the Question:** We need to convert encoder pulses into linear distance. We are given wheel circumference and pulses per revolution.
        *   **Step 1: Calculate Revolutions:**
            *   Total pulses recorded = 500 pulses
            *   Pulses per revolution = 100 pulses/rev
            *   Number of revolutions = Total pulses / Pulses per revolution
            *   Number of revolutions = 500 pulses / 100 pulses/rev = 5 revolutions
        *   **Step 2: Calculate Distance:**
            *   Distance per revolution = Wheel circumference = 0.3 meters
            *   Total distance traveled = Number of revolutions × Distance per revolution
            *   Total distance traveled = 5 rev × 0.3 meters/rev = 1.5 meters
        *   **Final Answer:** The robot has traveled 1.5 meters.
        *   **Connection to Course Outcomes:** This question directly tests the understanding of how sensors (wheel encoders) provide motion data, relating to **CO3**. It’s a practical application of sensor data conversion.

**3. Conceptual Question:** What is the primary advantage of an omnidirectional robot using Mecanum wheels over a differential drive robot?
    *   **Answer:** The primary advantage of an omnidirectional robot with Mecanum wheels is its ability to move in any direction (forward, backward, sideways, and diagonally) and to rotate in place without changing its orientation. A differential drive robot is limited to forward/backward motion and turning around its center point; it cannot translate sideways or diagonally directly. This increased maneuverability makes omnidirectional robots highly suitable for tasks in confined spaces or where precise positioning is critical, such as automated warehousing or robotic assembly. This relates to understanding different robot configurations for specific applications, supporting **CO1**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
