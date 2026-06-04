---
title: "rotary"
subject: "SENSORS AND ACTUATORS FOR ROBOTICS"
module: "Module 4: Definition"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd21409ece2bdd875f99c0"
status: "completed"
scrapedAt: "2026-05-23T16:10:39.570Z"
---
# Module 4: Definitions - Rotary Motion and Measurement in Robotics

Welcome, everyone! Today, we're diving into a crucial aspect of robotics: understanding and measuring **rotary motion**. As you know, robots aren't just about moving in straight lines; many of their critical joints, like those in an arm or a wheel, involve turning, rotating. So, how do we define and measure this rotational movement? This is where rotary sensors and actuators come into play.

This topic directly supports our understanding of how robots interact with their environment and perform tasks, which aligns with **CO1 (Significance of Robotics)**. More specifically, understanding how we measure rotation is essential for robots to know their own position and the motion of objects, directly linking to **CO3 (Categorize and choose suitable sensors for position and motion)**.

Let's start with the basics.

## Defining Rotary Motion and its Measurement

When we talk about rotary motion, we're essentially referring to the movement of an object around a fixed axis. Think of a merry-go-round, the hands of a clock, or the wheels of a car. In robotics, this translates to the joints of a robotic arm, the steering of a mobile robot, or the spinning of a gripper.

The key parameters we need to measure for rotary motion are:

*   **Angular Position:** Where is the object oriented? What angle has it turned to?
*   **Angular Velocity:** How fast is it rotating? This is the rate of change of its angular position.
*   **Angular Acceleration:** How quickly is its angular velocity changing?

Measuring these accurately is vital for precise robotic control. If a robot arm needs to pick up an object at a specific location, its joint angles must be known with high precision. Imagine trying to pour liquid from a bottle if you don't know the exact angle the bottle is tilted – it would be messy!

### Textbooks and our Foundation

As we explore these concepts, we'll be drawing from our excellent textbooks. De Silva's "Sensors and Actuators: Engineering System Instrumentation" and Rangan & Mani's "Instrumentation: Devices and Systems" provide excellent theoretical underpinnings for how sensors convert physical phenomena like rotation into electrical signals. Johnson's "Process Control Instrumentation Technology" is also invaluable for understanding the broader context of measurement in engineered systems.

## Rotary Sensors: The Robot's Eyes for Rotation

Rotary sensors are the devices that allow robots to "see" how much something has rotated. They translate the physical act of turning into a measurable electrical signal that the robot's brain (the controller) can understand.

### 1. Potentiometers (Pots) - The Analog Workhorses

Potentiometers are perhaps the simplest and most common rotary sensors. You might have encountered them in old volume knobs on stereos or dimmer switches for lights.

**How they work:** A potentiometer is essentially a variable resistor. It has a resistive element (like a wire-wound track or a conductive plastic track) and a wiper that moves along this track. When connected to a voltage source, the position of the wiper determines the output voltage. For a rotary potentiometer, this wiper is attached to a shaft that rotates. As the shaft turns, the wiper moves along the resistive track, changing the resistance and thus the output voltage.

**Analogy:** Imagine a long, thin piece of resistive paper. You attach a metal contact (the wiper) to a rotating rod. As the rod turns, the contact slides along the paper. The further it slides, the more resistance it encounters from the paper. If you apply a voltage across the ends of the paper, the voltage picked up by the wiper will change depending on its position.

**In Robotics:** Rotary potentiometers are used to measure the angular position of robot joints. A potentiometer can be coupled directly to a robot's joint. As the joint rotates, the potentiometer's shaft rotates, and the controller reads the output voltage. A simple voltage-to-angle mapping is then used to determine the joint's position.

**Key Point for Exams:** Potentiometers provide an analog output. This means the output is a continuously varying voltage. While simple and cost-effective, they have limitations like wear and tear on the resistive track (leading to noise and reduced lifespan) and potential for non-linearity. De Silva and Rangan & Mani both detail these characteristics.

### 2. Encoders - The Digital Precision Masters

For higher precision and reliability, especially in modern robotics, we use **encoders**. Encoders convert angular or linear position into digital data. There are two main types: incremental and absolute.

#### a) Incremental Encoders

Incremental encoders don't tell you the absolute position directly. Instead, they output a series of pulses as the shaft rotates. The robot counts these pulses to track changes in position and measures the frequency of pulses to determine speed.

**How they work:**
*   **Optical Incremental Encoders:** These are very common. They consist of a disc with a pattern of opaque and transparent sectors (or slots). A light source (LED) shines through the disc onto a light sensor. As the disc rotates, the light beam is interrupted, creating a series of pulses.
    *   **Quadrature Encoding:** To determine the direction of rotation (clockwise or counter-clockwise), incremental encoders use two sensors (e.g., two LEDs and two photodetectors) offset from each other, often 90 degrees out of phase. This is called **quadrature encoding**. The pattern on the disc and the placement of sensors generate two output signals (often labeled A and B) that are out of phase. By observing which signal leads the other, the controller can determine the direction.
    *   **Index Pulse (Z pulse):** Many incremental encoders also have a single mark on the disc. When this mark passes the sensor, it generates an "index" or "Z" pulse. This pulse is useful for establishing a reference point or homing the robot.

**Analogy:** Imagine a train moving past a series of signal posts. Each time the train passes a post, a light flashes (a pulse). If you start counting from a known starting point, you can know how far the train has traveled by counting the flashes. To know if it's going forward or backward, imagine two signal posts very close together. If you see the first post flash, then the second post flash, you know it's moving one way. If you see the second flash, then the first flash, it's moving the other way. The "Z" pulse is like a special marker on one of the posts, indicating "mile zero" or a home base.

**In Robotics:** Incremental encoders are widely used for measuring wheel rotation in mobile robots (to estimate distance traveled) and for joint rotation in robotic arms where homing procedures are used to establish a known starting position. They are good for measuring speed and relative position changes.

**Key Point for Exams:** Incremental encoders are great for speed and relative position. They require external circuitry to interpret the quadrature signals and a homing sequence to establish an initial absolute position. Groover et al. and Deb's books provide excellent details on encoder types and their applications in industrial automation.

#### b) Absolute Encoders

Absolute encoders, unlike incremental ones, provide the actual angular position of the shaft **directly**, even after power has been cycled. They don't need to count pulses.

**How they work:**
*   **Optical Absolute Encoders:** The disc for an absolute encoder has a unique pattern of transparent and opaque segments for *each possible angular position*. This pattern is typically encoded in binary or Gray code. A set of sensors reads this pattern. For example, if there are 10 bits of resolution, there will be 10 concentric tracks on the disc, each with a unique pattern. The sensors read these tracks simultaneously and the combination of light/dark signals from each track forms a unique binary number representing the exact angle.

**Analogy:** Instead of just flashing lights, imagine each position of a dial has a unique barcode. As the dial turns, the barcode changes. You have a scanner that reads the barcode. No matter where the dial is when you start scanning, the barcode tells you the exact position.

**In Robotics:** Absolute encoders are used in critical applications where knowing the exact position immediately upon power-up is essential. This includes joints in robot arms where you don't want to perform a homing sequence every time, or applications where accidental disconnection of power could lead to loss of positional information.

**Key Point for Exams:** Absolute encoders offer direct position reporting and don't lose position on power loss. This makes them more robust for applications requiring immediate, accurate positioning without homing. However, they are generally more complex and expensive than incremental encoders.

### 3. Resolvers

Resolvers are electromechanical sensors that are very robust and can operate in harsh environments (high temperature, vibration, shock). They are often used in industrial applications where reliability is paramount.

**How they work:** A resolver essentially works like a rotary transformer. It has a stationary part (stator) and a rotating part (rotor). The stator has windings that produce sine and cosine outputs. The rotor also has windings. As the rotor turns, the magnetic coupling between the rotor and stator windings changes, causing the sine and cosine outputs to vary with the angle. Special circuitry then decodes these sine and cosine signals to determine the angular position.

**Analogy:** Imagine two coils of wire. One coil is fixed, and the other is attached to a rotating shaft. When you send a signal into the fixed coil, it induces a signal in the rotating coil. The strength of this induced signal changes depending on how the rotating coil is oriented relative to the fixed coil. By cleverly designing the coils, you can get two signals that vary as sine and cosine of the angle, allowing you to pinpoint the exact position.

**In Robotics:** Resolvers are found in high-performance servo motors used for robotic arm joints where durability and continuous operation in tough conditions are required.

**Key Point for Exams:** Resolvers are known for their ruggedness and ability to withstand extreme environments. Their output is analog, and they require external signal processing to convert to digital position data.

## Rotary Actuators: Making Robots Rotate

Now that we know how robots *measure* rotation, let's look at how they *create* it. Rotary actuators are the components that provide the torque and rotational movement to the robot's joints.

### 1. Electric Motors - The Ubiquitous Rotators

Electric motors are the most common type of rotary actuator in robotics. They convert electrical energy into mechanical rotational energy.

#### a) DC Motors (Brushed and Brushless)

*   **Brushed DC Motors:** These are simple and relatively inexpensive. They use brushes and a commutator to reverse the current direction in the motor windings as it rotates, ensuring continuous torque.
    *   **In Robotics:** Used in smaller robots, mobile robot wheels, and less demanding joint applications. They are easy to control for speed and direction.
    *   **Key Point:** The brushes wear out over time, requiring maintenance. This limits their lifespan and suitability for high-duty cycle applications.

*   **Brushless DC (BLDC) Motors:** These motors eliminate the brushes and commutator, using electronic commutation controlled by sensors (like Hall effect sensors) or sensorless algorithms.
    *   **In Robotics:** BLDC motors are increasingly popular due to their higher efficiency, longer lifespan, and greater power density. They are used in almost all modern robotic applications, from sophisticated robot arm joints to high-speed manipulators.
    *   **Key Point:** More complex to control than brushed DC motors, requiring dedicated motor controllers. They offer superior performance and reliability. De Silva's book discusses motor control strategies in detail.

#### b) AC Motors

While less common in the joints of articulated robots compared to DC motors, AC motors are vital for many industrial automation tasks and mobile robot propulsion, especially where mains power is available.

*   **Synchronous AC Motors:** Rotate at a speed directly proportional to the frequency of the AC power supply.
*   **Induction AC Motors:** Very robust and widely used, their speed is slightly less than synchronous speed due to slip.

#### c) Servo Motors

A servo motor is essentially a DC motor (often brushless) integrated with a position feedback sensor (like an encoder or potentiometer) and a control circuit. This integration allows for precise control of angular position, velocity, and acceleration.

**How they work:** The control circuit within a servo motor receives a command signal (e.g., a target angle). It compares this command with the actual position reported by the feedback sensor. If there's a difference (an error), the controller drives the motor to reduce that error. This closed-loop control makes them ideal for applications requiring accurate positioning.

**Analogy:** Imagine you want to hold a door open at a specific angle. You tell someone, "Hold the door at 30 degrees." They look at the door's angle, and if it's not at 30 degrees, they adjust their grip to move it there. They keep checking and adjusting until the door stays at 30 degrees. A servo motor does this automatically and very quickly.

**In Robotics:** Servo motors are fundamental to robotic arms, allowing each joint to be precisely controlled to reach a desired configuration. This directly relates to **CO4 (Describe the working principle of different actuators)** and is crucial for achieving the precise movements needed for tasks.

**Key Point for Exams:** Servo motors are characterized by their closed-loop control, enabling precise position, speed, and torque control. Understanding the feedback mechanism is key.

### 2. Hydraulic and Pneumatic Actuators

While electric motors dominate many areas, hydraulic and pneumatic actuators are also used, especially for high-force applications or where specific environmental conditions prevail.

#### a) Hydraulic Motors

Hydraulic motors use pressurized fluid (usually oil) to generate torque. They are known for their high power density and ability to produce very high torques.

**How they work:** Pressurized hydraulic fluid is directed into ports on the motor, pushing against vanes, pistons, or gears, causing the motor shaft to rotate.

**In Robotics:** Used in heavy-duty industrial robots, construction robots, or where extremely high forces are required for a joint, such as in large robotic excavators.

**Key Point:** They require a hydraulic power unit (pump, reservoir, valves), which can be bulky and complex. They can also be prone to leaks.

#### b) Pneumatic Motors (Air Motors)

Pneumatic motors use compressed air to generate torque. They are generally lighter and simpler than hydraulic motors.

**How they work:** Similar to hydraulic motors, but driven by compressed air.

**In Robotics:** Used for tasks requiring moderate torque, rapid actuation, or in environments where hydraulics are not suitable (e.g., food processing due to potential oil contamination). They are also used for grippers and simple linear or rotary movements.

**Key Point:** They are often less precise than electric or hydraulic actuators and their performance can be affected by air pressure variations.

## Connecting to Course Outcomes

Let's quickly recap how this topic ties into our course objectives:

*   **CO1 (Significance):** Understanding rotary sensors and actuators is fundamental to appreciating how robots achieve sophisticated movements and interact with the world, highlighting their importance in manufacturing, logistics, healthcare, etc.
*   **CO2 (Proximity, Force, Pressure):** While this module focuses on rotary motion, it's important to remember that robots often need to combine these types of measurements. A robot arm might need to know its angular position (rotary sensor) and also sense the force it's exerting (force sensor) to avoid damaging an object.
*   **CO3 (Position, Motion, Range):** This is a direct hit! Rotary sensors are precisely how robots measure position (angular) and motion (angular velocity). Understanding encoders and potentiometers helps us choose the right sensor to determine the orientation of a robot's limbs or wheels.
*   **CO4 (Actuator Principles):** We've covered the core principles of electric motors (DC, BLDC, servo) and touched upon hydraulics and pneumatics, fulfilling this outcome by explaining how robots create motion.

## Sample Questions and Answers

Let's test your understanding with a few questions.

**Q1. What is the primary difference between an incremental encoder and an absolute encoder?**

**Answer:** The primary difference lies in how they report position. An **incremental encoder** outputs pulses that the robot controller must count to track relative changes in position. It does not inherently know its starting position and requires a homing sequence. An **absolute encoder**, on the other hand, provides a unique digital code for each specific angular position, directly reporting the shaft's absolute orientation without needing to count pulses and retaining its position even after power loss.

**Reasoning:** This question tests the fundamental distinction between two crucial sensor types. Understanding the pulse counting versus direct coding mechanism is key.

**Q2. You are designing a robotic arm joint that needs to move very precisely and maintain its position even if the power is momentarily interrupted. Which type of rotary sensor would you most likely choose, and why?**

**Answer:** I would choose an **absolute encoder**.

**Reasoning:**
*   **Precise movement:** Absolute encoders provide direct, unambiguous position information, allowing for highly accurate control of the joint's angle.
*   **Maintain position after power interruption:** This is the defining characteristic of absolute encoders. They store their position, so if power is cut and then restored, the robot immediately knows the exact angle of the joint without needing a recalibration or homing procedure. This is critical for applications where losing position would be detrimental.

**Q3. Explain the role of quadrature signals (A and B signals) in an incremental encoder.**

**Answer:** Quadrature signals (A and B) are generated by having two sensors offset by 90 degrees on an incremental encoder disc. Their primary purpose is to allow the robot's controller to determine the **direction of rotation**. By monitoring which signal leads the other (e.g., if signal A goes high before signal B, or vice-versa), the controller can distinguish between clockwise and counter-clockwise movement. This is essential for accurately tracking the cumulative angular displacement.

**Reasoning:** This probes deeper into the operational details of incremental encoders and highlights the importance of signal interpretation for functionality beyond just counting.

**Q4. A small, low-cost robot for educational purposes needs a simple way to measure the rotation of its wheels. Which rotary sensor is most suitable, and what are its main advantages and disadvantages for this application?**

**Answer:** A **rotary potentiometer** would be most suitable.

*   **Advantages:**
    *   **Low Cost:** Potentiometers are significantly cheaper than encoders or resolvers, making them ideal for budget-constrained educational projects.
    *   **Simplicity:** They are relatively easy to interface with microcontrollers, providing a simple analog voltage output that can be read by an Analog-to-Digital Converter (ADC).
    *   **Direct Analog Output:** The output directly corresponds to the angle, which can be intuitive for learning.

*   **Disadvantages:**
    *   **Wear and Tear:** The resistive track can wear out over time due to friction from the wiper, leading to noisy or inaccurate readings.
    *   **Limited Lifespan:** Compared to optical encoders, their mechanical nature limits their operational life, especially under frequent or rough use.
    *   **Accuracy and Linearity:** They can be less accurate and may not have a perfectly linear relationship between voltage and angle, especially at the extremes of their range.
    *   **No inherent speed/direction:** You only get position; to get speed, you'd need to sample position over time and calculate it.

**Reasoning:** This question assesses the ability to select appropriate technology based on application constraints (cost, simplicity) while also understanding the trade-offs involved, a key skill in engineering design.

---
This covers our introduction to rotary motion measurement and actuation. Keep these concepts in mind as we move forward, as they are foundational to understanding how robots truly operate!
