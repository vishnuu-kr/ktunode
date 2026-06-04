---
title: "Electrical actuating systems: Electric motors as actuators"
subject: "SENSORS AND ACTUATORS FOR ROBOTICS"
module: "Module 4: Definition"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd21409ece2bdd875f99c6"
status: "completed"
scrapedAt: "2026-05-23T16:10:44.104Z"
---
# Module 4: Definition - Electrical Actuating Systems: Electric Motors as Actuators

Welcome, everyone, to Module 4! Today, we're diving into the exciting world of **electrical actuating systems**, and more specifically, the workhorses of robotics: **electric motors**. When we talk about robots, we're really talking about machines that can sense their environment, process that information, and then *act* upon it. Actuators are the components that enable this action, translating electrical signals into physical motion. And among the most prevalent and versatile actuators we use, electric motors stand out.

As we progress through this module, remember our overarching **Course Outcomes (COs)**. Today's focus on electric motors directly contributes to **CO4: Describe the working principle of different actuators used in robotics**. Understanding how these motors work is fundamental to grasping how robots move, manipulate objects, and navigate their surroundings. It's also a foundational concept that underpins many of the sensor applications we'll discuss later, as actuators and sensors often work in a closed loop.

## 1. What is an Actuator? The "Muscle" of the Robot

Before we get to motors, let's solidify our understanding of what an actuator is in the context of robotics. Think of a robot as a living organism. It has a "brain" (the controller), "senses" (the sensors), and it needs "muscles" to move and interact with the world. **Actuators are these muscles**. They are the devices that convert energy, typically electrical energy in our case, into mechanical energy. This mechanical energy is what causes movement, whether it's the rotation of a wheel, the extension of a robotic arm, or the gripping action of a manipulator.

As Clarence W. De Silva eloquently puts it in "Sensors and Actuators: Engineering System Instrumentation," actuators are the "final control elements" in a system. They are the components that directly effect a change in the physical world based on commands from the control system.

## 2. Electric Motors: The Ubiquitous Powerhouses

Electric motors are by far the most common type of actuator in robotics. Why? Because they are efficient, relatively easy to control, can provide a wide range of speeds and torques, and are readily available in various forms. They are the reason your robotic vacuum cleaner moves, why an industrial robot arm can lift and position heavy components, and why a drone can fly.

### 2.1 The Fundamental Principle: Electromagnetism in Action

At their core, all electric motors operate on the principle of **electromagnetism**. You might recall this from your basic physics classes: when an electric current flows through a conductor, it creates a magnetic field around it. And conversely, when a conductor carrying current is placed within an external magnetic field, it experiences a force. This is the fundamental Lorentz force.

Imagine a simple setup: a wire carrying current placed within a magnetic field. The interaction between the magnetic field created by the current and the external magnetic field results in a force pushing the wire. If we arrange this in a specific way, like a coil of wire within a magnetic field, and we pass current through the coil, it will experience a torque, causing it to rotate. This rotational motion is the key to how motors do their work.

### 2.2 Types of Electric Motors Relevant to Robotics

While there are many types of electric motors, a few stand out in robotics due to their suitability for precise control, speed, and power requirements. Let's look at the most important ones:

#### a) DC Motors (Direct Current Motors)

DC motors are perhaps the simplest and most widely used in introductory robotics and many mobile robots. They run on direct current, meaning the current flows in one direction.

*   **How they work:** A typical DC motor has a stationary part (stator) with permanent magnets or electromagnets, and a rotating part (rotor or armature) with coils of wire. As current flows through the armature coils, they generate magnetic fields that interact with the stator's magnetic fields, producing a torque. A crucial component called a **commutator** and **brushes** are used to reverse the direction of current in the armature coils as it rotates. This continuous reversal ensures that the torque is always in the same direction, leading to continuous rotation.
*   **Why they are popular:** They are simple to understand, relatively inexpensive, and can be controlled easily. By varying the voltage applied, you can control the speed, and by reversing the polarity of the voltage, you can reverse the direction of rotation.
*   **Real-world analogy:** Think of a simple fan. The blades are attached to a rotating shaft powered by a DC motor. When you plug it in, the motor spins.
*   **Exam tip:** Be prepared to explain the role of the commutator and brushes in DC motor operation. Their function is critical for continuous rotation. Also, remember that varying the input voltage directly affects the motor's speed.

#### b) Brushless DC Motors (BLDC Motors)

BLDC motors are a more advanced and often preferred type of DC motor in modern robotics, especially where efficiency, reliability, and precise control are paramount.

*   **How they work:** As the name suggests, BLDC motors eliminate brushes and commutators. Instead, the permanent magnets are typically on the rotor, and the electromagnets are on the stator. Electronic commutation, managed by an electronic control circuit (often called an ESC – Electronic Speed Controller), is used to switch the current in the stator coils in the correct sequence. This sequencing is based on the rotor's position, which is usually detected by sensors (like Hall effect sensors).
*   **Why they are preferred:** They offer higher efficiency, longer lifespan (no brushes to wear out), less electrical noise, and better speed control compared to brushed DC motors. This makes them ideal for applications like drones, high-performance robotic arms, and electric vehicles.
*   **Analogy:** Imagine a team of people taking turns to push a revolving door. In a brushed motor, the mechanism for "pushing" (current switching) is mechanical. In a BLDC motor, it's like a coordinated effort by an external manager (the ESC) who knows exactly when to push each person.
*   **Exam tip:** Focus on the advantages of BLDC motors over brushed DC motors, especially regarding efficiency and lifespan. Understanding the concept of electronic commutation is key.

#### c) Servo Motors

Servo motors are not a fundamentally different type of motor in terms of their electrical operation (they often use DC or BLDC motors internally), but they are packaged and controlled in a way that makes them excellent for precise positional control.

*   **How they work:** A servo motor system typically includes a DC motor, a gear reduction mechanism, a position feedback sensor (like a potentiometer), and a control circuit. The control circuit compares the desired position (commanded by the robot's brain) with the actual position of the motor shaft (measured by the feedback sensor). If there's a difference, the control circuit adjusts the motor's power to move the shaft to the correct position and then stops. This closed-loop system allows for highly accurate positioning.
*   **Why they are used:** They are perfect for applications requiring specific angular positions, such as controlling the joints of a robotic arm, positioning a camera, or steering a robot. You can tell a servo motor, "Go to 90 degrees," and it will move to that exact position and hold it.
*   **Analogy:** Think of a thermostat in your house. You set a desired temperature, and the system constantly monitors the room temperature and adjusts the heating or cooling to maintain that setpoint. A servo motor works similarly for position.
*   **Textbook Reference:** Rangan & Mani's "Instrumentation: Devices and Systems" would likely cover the principles of feedback control systems, which are integral to servo motor operation.
*   **Exam tip:** The defining characteristic of a servo motor is its **closed-loop positional control**. Understand how the feedback mechanism enables this precision.

#### d) Stepper Motors

Stepper motors are another type of DC motor that are prized for their ability to move in discrete, precise steps.

*   **How they work:** Stepper motors have their stator wound into a number of distinct electrical poles, and the rotor is often a permanent magnet or a piece of iron with teeth. By energizing the stator coils in a specific sequence, the rotor is forced to move in small, precise angular increments (steps). Each step corresponds to a precise rotation, and by counting these steps, you can achieve very accurate positional control without the need for a separate position feedback sensor (making them an "open-loop" system for positioning).
*   **Why they are used:** They are excellent for applications where precise, repeatable movements are needed, but the exact load and potential for stalling are well understood. They are commonly found in 3D printers, CNC machines, and some robotic manipulators where exact incremental movements are key.
*   **Analogy:** Imagine building with LEGOs. Each LEGO brick is a precise unit. A stepper motor moves in similar precise "bricks" of rotation. If you want to turn 180 degrees, you just tell it to take 100 steps (if each step is 1.8 degrees).
*   **Exam tip:** The key advantage of stepper motors is their **open-loop positional accuracy** due to their stepped movement. However, a significant drawback is that if the motor is overloaded or loses a step, the controller won't know, leading to positional errors. This is why knowing the load is important when using them.

## 3. Key Characteristics and Parameters for Motor Selection

When choosing a motor for a specific robotic application, several characteristics are crucial. These parameters help engineers decide which motor will best meet the robot's needs.

*   **Torque:** This is the rotational force the motor can produce. It's essential for tasks like lifting, pushing, or overcoming resistance. Think about how much effort is needed to turn a stubborn jar lid – that's torque!
*   **Speed:** This refers to how fast the motor can rotate, usually measured in revolutions per minute (RPM). Different robotic tasks require different speeds, from slow, deliberate movements to rapid actions.
*   **Power:** Power is the rate at which the motor can do work, often calculated as torque multiplied by angular velocity. It gives you an idea of the motor's overall capability.
*   **Efficiency:** This is the ratio of mechanical output power to electrical input power. A more efficient motor wastes less energy as heat, which is important for battery-powered robots and overall performance.
*   **Resolution/Accuracy (for steppers and servos):** How precisely can the motor be positioned? This is critical for tasks requiring fine manipulation.
*   **Operating Voltage:** The voltage required to power the motor. This needs to be compatible with the robot's power supply (batteries, power adapters).
*   **Cost and Size:** Practical considerations for any engineering project.

When you're looking at the specifications of a motor, these are the numbers you'll be paying close attention to. As Groover et al. mention in "Industrial Robots - Technology, Programming and Applications," the selection of an actuator is heavily influenced by the specific demands of the task.

## 4. Connecting Motor Concepts to Course Outcomes

Let's explicitly tie this back to our learning objectives:

*   **CO4: Describe the working principle of different actuators used in robotics.** We've just done this! We've explored the fundamental electromagnetic principles behind DC, BLDC, servo, and stepper motors, and how their unique designs lead to different capabilities.
*   **CO1: Understand the significance, social impact and future prospects of robotics and automation in various engineering applications.** Understanding how motors work is key to appreciating the capabilities of robots. Whether it's an industrial robot in a factory increasing production efficiency (social impact) or a medical robot assisting in surgery, the underlying electric motor is what enables these advancements. The ongoing development of more efficient, powerful, and smaller motors directly contributes to the future prospects of robotics.

## Summary and Key Takeaways

So, to wrap up our session on electric motors as actuators:

*   **Actuators are the "movers" of a robot**, converting electrical energy into mechanical motion.
*   **Electric motors are the most common actuators** due to their versatility and control.
*   Their operation is based on **electromagnetism**: the interaction between magnetic fields and electric currents.
*   We commonly use **DC motors** (simple, controllable), **BLDC motors** (efficient, reliable), **servo motors** (precise positional control via feedback), and **stepper motors** (precise incremental movement in open-loop).
*   When selecting a motor, critical parameters include **torque, speed, power, efficiency, and positional accuracy**.

Remember this: the choice of motor fundamentally dictates a robot's ability to move, interact, and perform its intended tasks. It's a crucial decision in robot design.

---

## Sample Questions and Answers

Here are a few questions to test your understanding, ranging from conceptual to more exam-oriented:

**Q1: Explain why a commutator and brushes are essential for the operation of a brushed DC motor but are absent in a Brushless DC (BLDC) motor.**

**Answer:**
In a brushed DC motor, the commutator and brushes work together to ensure continuous rotation. The commutator is a segmented ring attached to the rotor's shaft, and the brushes are stationary contacts that press against the commutator. As the rotor turns, the commutator segments switch contact with the brushes. This switching action reverses the direction of current flow in the armature coils at the precise moment required to maintain a consistent torque in one direction. Without this switching, the forces on the coil would oppose the motion, and the rotor would only oscillate.

In contrast, BLDC motors achieve rotation by electronically switching the current in the stator coils. Permanent magnets are typically on the rotor. Sensors (like Hall effect sensors) detect the rotor's position, and an electronic control circuit (ESC) uses this information to energize the stator coils in a timed sequence. This electronic commutation eliminates the need for mechanical brushes and a commutator, which are prone to wear and tear, leading to higher efficiency and a longer lifespan for BLDC motors.

**Q2: A robot arm needs to move to a very specific angle and hold that position precisely. Which type of electric motor would be most suitable for this task, and why?**

**Answer:**
A **servo motor** would be the most suitable for this task. The reason is its inherent **closed-loop positional control**. A servo motor system incorporates a feedback sensor (like a potentiometer) that continuously monitors the actual position of the motor shaft. A control circuit compares this actual position with the desired position. If there's any discrepancy, the circuit immediately adjusts the motor's power to move the shaft to the target angle and then holds it there, correcting for any external disturbances. This feedback mechanism ensures high accuracy and stability at the desired position, which is exactly what is needed for precise angular movements.

**Q3: Compare and contrast Stepper Motors and Servo Motors in terms of their positional control.**

**Answer:**
Both stepper motors and servo motors are used for precise positioning, but they achieve it differently:

*   **Stepper Motors:** These motors move in discrete, fixed angular increments called "steps." By energizing the stator coils in a specific sequence, the rotor advances one step at a time. Positional accuracy is achieved by counting these steps. This is typically an **open-loop** system for position control, meaning there's no direct feedback mechanism to confirm the motor reached the intended step. If the load is too high, the motor might "lose a step," leading to positional errors that the controller wouldn't be aware of.

*   **Servo Motors:** These motors use a **closed-loop** system for positional control. They typically have an internal encoder or potentiometer that provides feedback on the actual position of the motor shaft. A controller compares the desired position with the actual position and continuously adjusts the motor's power to minimize the error. This feedback makes servo motors inherently more robust against load variations and better at maintaining a precise position even under dynamic conditions. However, they can be more complex and expensive due to the feedback components and control circuitry.

**Q4: What is the fundamental physical principle that all electric motors rely on to produce rotation? (Knowledge Level: K2)**

**Answer:**
The fundamental physical principle is **electromagnetism**. Specifically, it relies on the interaction between magnetic fields and electric currents. When a current-carrying conductor is placed in a magnetic field, it experiences a force (Lorentz force). In a motor, this force is harnessed to create a torque on a rotating element (rotor), causing it to spin. This is the basis for converting electrical energy into mechanical rotational energy.
