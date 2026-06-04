---
title: "Overview of electric motors."
subject: "SENSORS AND ACTUATORS FOR ROBOTICS"
module: "Module 4: Definition"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9120463779487da693"
status: "completed"
scrapedAt: "2026-05-23T17:43:58.911Z"
---
# Module 4: Definition - Overview of Electric Motors in Robotics

Welcome to Module 4! Today, we're diving into a fundamental component that gives robots their ability to move and interact with the world: **electric motors**. Without them, our robots would just be static sculptures, right? They are the "muscles" of the robot, converting electrical energy into mechanical energy. This is directly related to our **Course Outcome 4 (CO4)**: "Describe the working principle of different actuators used in robotics." Electric motors are arguably the most common type of actuator in robotics, so understanding them is crucial.

### What Exactly is an Electric Motor?

At its core, an electric motor is a device that operates on the principle of **electromagnetism**. Remember from basic physics how a current-carrying wire placed in a magnetic field experiences a force? That's the magic at play! This force causes a rotating motion, and it's this rotation that we harness to drive joints, wheels, or any other moving part of a robot.

Think about it this way: imagine you have a spinning top. What makes it spin? You give it a push. An electric motor is like a smart spinning top that keeps spinning as long as you supply it with electrical power. The "push" comes from the interaction between magnetic fields and electric currents.

As De Silva highlights in *Sensors and Actuators: Engineering System Instrumentation*, motors are essential for "generating the motive power required for robotic locomotion and manipulation." This means they are responsible for *everything* that moves on a robot, from its wheels rolling across the floor to its arm joints articulating to pick up an object. This directly ties into **Course Outcome 1 (CO1)**, as motors are a key part of the "robotics and automation in various engineering applications."

### Why Electric Motors for Robotics?

You might wonder, why electric motors specifically? Why not pneumatic or hydraulic systems? While those have their places, electric motors offer several advantages that make them ideal for many robotic applications:

*   **Precision and Control:** Electric motors, especially when paired with encoders (which we'll discuss later), offer very precise control over speed, position, and torque. This is vital for delicate tasks like surgery or intricate assembly.
*   **Efficiency:** They are generally quite efficient in converting electrical energy to mechanical work, meaning they don't waste as much power as heat.
*   **Compact Size and Light Weight:** For many applications, especially mobile robots or robotic arms that need to be maneuverable, compact and lightweight motors are essential.
*   **Ease of Integration:** They are relatively easy to power and control using electronic circuits, making system integration smoother.
*   **Wide Availability and Variety:** There's a vast range of electric motors available, from tiny ones for micro-robots to powerful ones for industrial robots.

Rangan & Mani's *Instrumentation: Devices and Systems* also emphasizes the importance of motors in instrumentation, where precise movement is often required. Whether it's positioning a sensor or driving a component, motors are the workhorses.

### Key Components of Most Electric Motors

While there are different types of electric motors, most share some fundamental components that enable their operation:

1.  **Stator:** This is the stationary part of the motor. It typically houses magnets (permanent or electromagnets) that create a magnetic field. Think of it as the "outer shell" that sets the stage for the magnetic interaction.
2.  **Rotor:** This is the rotating part of the motor, mounted on a shaft. It's usually made of coils of wire. When current flows through these coils, they become electromagnets, interacting with the magnetic field of the stator.
3.  **Commutator (for DC motors):** This is a clever mechanical switch that reverses the direction of current in the rotor coils at the right moment. This continuous switching ensures that the rotor keeps turning in one direction. We'll see how this is handled differently in AC motors later.
4.  **Brushes (for DC motors):** These are conductive contacts that transfer electrical current from a stationary power source to the rotating commutator. They are like the "conductors" that deliver the electricity to the moving parts.

Imagine a simple DC motor. The stator has magnets creating a field. The rotor has coils. When you supply power, current flows through the brushes to the commutator, and then to the rotor coils. This creates a magnetic field in the rotor that interacts with the stator's field, causing it to turn. As it turns, the commutator reverses the current in the coil, so the magnetic force always pushes it in the same direction. It's a beautiful dance of electromagnetism!

### Types of Electric Motors Used in Robotics

Now, let's get a bit more specific. Not all electric motors are the same. The choice of motor depends heavily on the application's requirements for speed, torque, precision, and power consumption. Here are some of the most common types you'll encounter in robotics:

#### 1. Direct Current (DC) Motors

These are perhaps the most straightforward and widely used motors in robotics, especially for hobbyist projects, smaller robots, and applications requiring simple speed control.

*   **Brushed DC Motors:** These are the "classic" DC motors. They use brushes and a commutator to reverse the current in the armature (rotor) coils.
    *   **How they work:** The magnetic field is usually created by permanent magnets in the stator. When current flows through the rotor coils, they produce their own magnetic field. The interaction between these fields creates torque. The commutator's job is to switch the current direction in the rotor coils as it rotates, ensuring continuous torque in the same direction.
    *   **Advantages:** Simple to control (voltage directly relates to speed), relatively inexpensive, good starting torque.
    *   **Disadvantages:** Brushes wear out and can create electrical noise, less efficient than brushless motors, require maintenance.
    *   **Relatable Example:** Think of the motor in an old electric toy car or a basic electric fan. They work on this principle.
    *   **Exam Tip:** Be prepared to explain the role of the commutator and brushes in a brushed DC motor. They are often asked about.

*   **Brushless DC (BLDC) Motors:** These motors have eliminated the brushes and commutator. Instead, electronic commutation is used, typically managed by a motor controller.
    *   **How they work:** In BLDC motors, the permanent magnets are usually on the rotor, and the coils are on the stator. An electronic controller senses the rotor's position (often using Hall effect sensors or by back-EMF sensing) and switches current to the stator coils accordingly, creating a rotating magnetic field that the rotor magnets follow.
    *   **Advantages:** Higher efficiency, longer lifespan (no brushes to wear out), less electrical noise, better speed control, higher power-to-weight ratio.
    *   **Disadvantages:** Require a more complex electronic controller, can be more expensive initially.
    *   **Relatable Example:** Modern drones, high-performance electric RC cars, and many sophisticated robotic arms often use BLDC motors. They offer the power and precision needed.
    *   **Connection to CO4:** BLDC motors are a prime example of modern actuators with sophisticated control mechanisms.

#### 2. Alternating Current (AC) Motors

While DC motors dominate many smaller robotic applications, AC motors are prevalent in industrial settings and for applications requiring constant speed or higher power.

*   **Induction Motors:** These are the workhorses of industry. They rely on electromagnetic induction to generate torque.
    *   **How they work:** The stator creates a rotating magnetic field. This rotating field "induces" a current in the rotor (typically a squirrel cage rotor). The interaction between the induced magnetic field in the rotor and the stator's rotating field creates torque. The rotor always spins slightly slower than the stator's magnetic field – this difference is called "slip," and it's essential for induction.
    *   **Advantages:** Robust, reliable, low maintenance, inexpensive, available in high power ratings.
    *   **Disadvantages:** Speed is primarily determined by the AC frequency and number of poles, can be less efficient at lower loads, control of precise speed and position can be more complex than DC motors.
    *   **Relatable Example:** Think of the large motors powering conveyor belts in factories or the motors in washing machines and refrigerators.

*   **Synchronous Motors:** In these motors, the rotor rotates at the same speed as the rotating magnetic field produced by the stator.
    *   **How they work:** The rotor is either a permanent magnet or an electromagnet that locks onto the stator's rotating magnetic field.
    *   **Advantages:** Constant speed regardless of load (within limits), high efficiency.
    *   **Disadvantages:** Require a mechanism to bring them up to speed before they can "lock on" to the rotating field, often more expensive.
    *   **Relatable Example:** Used in applications where precise timing is crucial, like in some types of robots that need to synchronize movements precisely.

#### 3. Stepper Motors

These motors are very popular in robotics for applications where precise angular positioning is required *without* the need for a separate encoder for feedback.

*   **How they work:** Stepper motors divide a full rotation into a number of discrete "steps." By energizing specific coils in a precise sequence, the motor rotates by a fixed angle with each step. They are essentially digitally controlled motors.
    *   **Advantages:** Excellent for precise positioning, can hold a position firmly (holding torque), open-loop control is often sufficient (no need for feedback sensors like encoders for basic positioning), relatively simple to drive.
    *   **Disadvantages:** Can lose steps if overloaded or driven too fast (leading to position errors), generally less efficient than DC motors, can be noisy, limited speed and torque compared to DC motors.
    *   **Relatable Example:** Think of the motors that move the print head in an inkjet printer or the focus mechanism in a camera. They need to move in tiny, precise increments.
    *   **Connection to CO3:** Stepper motors directly help in positioning and motion control, linking to **Course Outcome 3 (CO3)** which is about choosing sensors to measure position and motion. While stepper motors *are* actuators, their precise stepping action is what makes position measurement or control easier.

#### 4. Servo Motors

Servo motors are not a fundamental type of motor in the same way as DC or AC motors. Instead, they are a *system* consisting of a motor (often a DC motor, but can be AC or BLDC), a feedback sensor (like a potentiometer or encoder), and a control circuit.

*   **How they work:** The control circuit compares the desired position (commanded) with the actual position of the motor shaft (measured by the feedback sensor). If there's a difference (an error), the controller sends power to the motor to move it closer to the desired position. This creates a closed-loop system.
    *   **Advantages:** High precision in position and speed control, ability to hold a specific position.
    *   **Disadvantages:** More complex, can be more expensive, prone to "hunting" (oscillating around the target position) if not tuned properly.
    *   **Relatable Example:** The small "servo motors" used in RC airplanes to control the flaps and rudder are a common example. They move to a specific angle and hold it. In robotics, they are used in robotic arms for precise joint movements.
    *   **Connection to CO2 & CO3:** Servo motors are the perfect blend of actuator (motor) and sensing (feedback). Their operation is directly tied to measuring position (CO3) and thus understanding their working principle relates to **Course Outcome 2 (CO2)** as well, as sensors are integral to their function.

### Key Motor Characteristics to Consider for Robotics

When selecting a motor for a robotic application, several characteristics are crucial:

*   **Torque:** This is the rotational force the motor can produce. High torque is needed for lifting heavy loads or overcoming resistance. This is often measured in Newton-meters (Nm).
    *   **Exam Tip:** You'll often see torque-speed curves for motors. Remember that torque is usually highest at low speeds and decreases as speed increases.
*   **Speed:** The rate at which the motor shaft rotates, typically measured in revolutions per minute (RPM).
*   **Power:** The rate at which the motor can do work, calculated as Torque × Speed.
*   **Efficiency:** The ratio of mechanical power output to electrical power input. Higher efficiency means less wasted energy as heat.
*   **Voltage and Current Ratings:** The electrical supply requirements of the motor.
*   **Gear Ratio (if applicable):** Motors often have gearboxes attached. A gearbox can increase torque but decrease speed, or vice-versa, allowing you to tailor the motor's output to the robot's needs. This is a very common practice in robotics to match motor capabilities to joint requirements.
    *   **Analogy:** Think of gears on a bicycle. Lower gears make it easier to pedal uphill (higher torque, lower speed), while higher gears allow you to go faster on flat ground (lower torque, higher speed).

Johnson's *Process Control Instrumentation Technology* often delves into the practical aspects of motor control and the characteristics that are important for industrial automation, which directly informs robotic applications.

### Conclusion and Key Takeaways

So, we've covered the basics of electric motors – what they are, why they're essential in robotics, their fundamental components, and the most common types like DC (brushed and brushless), AC, stepper, and servo motors. Understanding these concepts is foundational for grasping how robots move and how we control that movement.

**Remember this:**
*   Electric motors convert electrical energy into mechanical (rotational) energy via electromagnetism.
*   Brushed DC motors are simple but wear out; Brushless DC motors are more efficient and durable.
*   Stepper motors provide precise positional control without feedback for many applications.
*   Servo motors are closed-loop systems offering high precision through feedback.
*   Torque and speed are key characteristics to consider when selecting a motor.

This knowledge directly supports **CO4** by explaining the working principles of these crucial actuators. It also lays the groundwork for understanding how sensors (as discussed in other modules) are used to monitor and control these motors, linking to **CO2** and **CO3**.

---

### Sample Questions and Answers

**Q1. Explain the fundamental principle behind the operation of an electric motor.**

**Answer:** An electric motor operates on the principle of electromagnetism. Specifically, when a conductor carrying an electric current is placed in a magnetic field, it experiences a force. In an electric motor, this force is used to create a rotational motion. Typically, this involves the interaction between the magnetic field produced by permanent magnets or electromagnets in the stator and the magnetic field generated by current flowing through coils in the rotor. This interaction produces a torque that causes the rotor to spin.

**Q2. What is the primary role of the commutator in a brushed DC motor?**

**Answer:** The commutator in a brushed DC motor is a crucial component that acts as a mechanical switch. Its primary role is to reverse the direction of current flow in the rotor coils at precisely the right moment during rotation. This continuous reversal ensures that the torque on the rotor is always in the same direction, allowing for continuous rotation. Without the commutator, the rotor would only complete about half a rotation before stopping.

**Q3. Compare and contrast Brushless DC (BLDC) motors with brushed DC motors in the context of robotics.**

**Answer:**
*   **Brushed DC Motors:** Use physical brushes and a commutator for electronic switching. They are simpler, cheaper, and offer good starting torque. However, brushes wear out, requiring maintenance, and can cause electrical noise. They are less efficient and have a shorter lifespan.
*   **Brushless DC (BLDC) Motors:** Use electronic commutation controlled by an external circuit, eliminating brushes. This leads to higher efficiency, longer lifespan, less maintenance, lower electrical noise, and better speed control. However, they require a more complex and expensive controller. In robotics, BLDC motors are preferred for applications demanding high performance, reliability, and efficiency, such as drones or advanced robotic arms.

**Q4. When would you choose a stepper motor over a DC motor for a robotic application? Provide a scenario.**

**Answer:** You would choose a stepper motor when precise angular positioning or incremental movement is the primary requirement, and an open-loop control system is sufficient. For example, consider a robotic arm designed for precise pick-and-place operations where the arm needs to move to specific, repeatable positions with high accuracy. A stepper motor can achieve this by moving in discrete, known steps, eliminating the need for an expensive encoder feedback system that a DC motor would typically require for such precision. A DC motor is better suited for applications where continuous rotation, high speed, or variable speed control is more critical than precise, repeatable positioning.

**Q5. How does a servo motor achieve precise control over position?**

**Answer:** A servo motor is a system that uses a closed-loop feedback mechanism. It typically consists of a motor (often DC), a position sensor (like a potentiometer or encoder), and a control circuit. The control circuit receives a command for a desired position. It then reads the actual position of the motor shaft from the feedback sensor. By comparing the desired position with the actual position, the control circuit calculates an error signal. This error signal is used to drive the motor, adjusting its speed and direction until the actual position matches the desired position, thus achieving precise positional control. This integration of a sensor with the motor makes it a sophisticated actuator.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
