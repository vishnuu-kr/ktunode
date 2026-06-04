---
title: "Motion sensor: Encoder sensors"
subject: "SENSORS AND ACTUATORS FOR ROBOTICS"
module: "Module 3: Motion sensor: Encoder sensors"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9120463779487da676"
status: "completed"
scrapedAt: "2026-05-23T17:43:34.555Z"
---
# Module 3: Motion Sensors - Encoder Sensors

Welcome to Module 3 of our "Sensors and Actuators for Robotics" course! Today, we're diving deep into one of the most crucial types of motion sensors in robotics: **Encoder Sensors**. Understanding how robots track their own movement is fundamental to their operation, and encoders are our primary tools for this.

**(Connecting to Course Outcomes):** As we learn about encoders, remember our overarching goal of understanding robotics. Specifically, this module directly supports **CO3: Categorize and choose the suitable sensor to measure position, motion, and range of the obstacles**. Encoders are paramount for measuring *position* and *motion* internally within a robot. They are the "eyes" of the robot for its own limbs and joints, telling us exactly where they are and how they are moving. This knowledge will be vital when you need to select the right sensor for a specific robotic task.

## What are Encoder Sensors? The Fundamentals

At its core, an encoder is a device that converts *motion* into an *electrical signal*. Think about it: a robot's arm moves, a wheel spins, a robot's base translates. How does the robot's brain know *how much* it moved or *how fast* it's moving? That's where encoders come in. They provide precise, quantifiable information about the angular or linear displacement of a mechanical component.

In the context of robotics, encoders are often attached to the shafts of motors or directly to the joints of a robot arm. They are essential for **position feedback** and **velocity feedback**, which are critical for closed-loop control systems. Without encoders, a robot's motor would just spin wildly, and the robot wouldn't have any idea if its arm was at the target position or completely off course.

Let's break down the two primary types of encoders you'll encounter:

### 1. Incremental Encoders: Counting Every Step

Incremental encoders are the most common type. They don't tell you the absolute position of a shaft from a starting point. Instead, they tell you *how much* the shaft has moved *since* you started counting. Imagine a turnstile at a stadium entrance. Each time someone passes through, the turnstile clicks. An incremental encoder is like that click – it generates a pulse for a specific amount of movement.

#### How They Work: The Optical Principle

Most incremental encoders are **optical**. They consist of a disc with precise patterns of opaque and transparent segments (or slots) along its circumference. This disc is mounted on the rotating shaft. Opposite the disc, there's an LED (light-emitting diode) that shines light through the disc. On the other side, there's a light sensor (like a photodiode or phototransistor).

As the shaft rotates, the disc spins, and the light from the LED is either blocked or allowed to pass through to the sensor. This on-off switching of light creates a series of electrical pulses.

*   **The Quadrature Signal (A & B Channels):** To get more information than just "it moved," incremental encoders typically have two light sensors, offset from each other by a small angle (usually 90 degrees). These sensors read two separate tracks on the disc, resulting in two output signals, commonly labeled **Channel A** and **Channel B**.

    Why two channels? This is a brilliant design! When the shaft rotates, one channel's signal will lead the other. For example, if the disc spins clockwise, Channel A might go high *before* Channel B. If it spins counter-clockwise, Channel B will go high *before* Channel A. This **quadrature encoding** allows the robot's controller to determine not just the *amount* of movement but also the *direction* of movement.

    Think of it like this: if you only had one signal, you'd know movement happened, but you wouldn't know if the robot's arm moved up or down. With two signals in quadrature, you can tell. This is crucial for tasks like precise positioning.

*   **Index Pulse (Z Channel):** Many incremental encoders also have a third channel, the **Index Pulse** or **Z Channel**. This channel typically produces a single pulse per revolution of the disc. It's like a marker for a "home" position. When the robot starts up, it might move a joint until it detects this index pulse, establishing a known starting point. This is essential for system initialization or "homing" routines.

#### Key Concepts for Incremental Encoders:

*   **Resolution (Pulses Per Revolution - PPR):** This is a critical specification. It tells you how many pulses the encoder will generate for one complete rotation of the shaft. A higher PPR means finer resolution, allowing for more precise position tracking. For example, an encoder with 1000 PPR will provide 1000 steps of information for every 360 degrees of rotation.
*   **Counts:** The controller counts these pulses. If it counts 100 pulses from a 1000 PPR encoder, it knows the shaft has moved 100/1000 = 0.1 revolutions, or 36 degrees.
*   **Speed Calculation:** By timing how often these pulses arrive, the controller can easily calculate the speed of rotation. Faster pulses mean faster rotation.

#### When to Use Incremental Encoders:

They are ideal for applications where you need continuous, high-resolution feedback on motion, like:

*   Motor speed control (e.g., ensuring a robot's wheels maintain a constant speed).
*   Robot arm joint position tracking (e.g., moving an arm to a specific angle).
*   Measuring linear distance (when coupled with a lead screw or a wheel).

**(Connecting to Textbooks):** As De Silva discusses in "Sensors and Actuators: Engineering System Instrumentation," incremental encoders are foundational for providing velocity and position *differences*. Rangan & Mani's "Instrumentation: Devices and Systems" also covers their optical principles and signal generation in detail.

### 2. Absolute Encoders: Knowing Your Exact Spot, Always!

Unlike incremental encoders, **absolute encoders** tell you the *exact position* of the shaft at any given moment, even if the power has been turned off and back on. They don't just count steps; they provide a unique digital code for each distinct position.

#### How They Work: Unique Codes for Each Position

Absolute encoders use a disc with a more complex pattern. Instead of just transparent and opaque slots, the disc has multiple tracks, and each track has a unique pattern of segments. The sensors read these patterns, and the combination of signals from all sensors at any given time represents a unique binary code corresponding to a specific angular position.

*   **Multiple Tracks:** Imagine a disc with several concentric rings. Each ring is divided into sectors, but the division patterns are different for each ring. The sensors are positioned to read these different rings simultaneously.
*   **Binary Output:** The output isn't just a series of pulses; it's a digital word (a series of bits). For example, a 10-bit absolute encoder can represent 2^10 = 1024 unique positions.

#### Types of Absolute Encoders:

*   **Optical Absolute Encoders:** Similar to incremental ones in principle but with encoded tracks.
*   **Magnetic Absolute Encoders:** Use magnetic patterns on a rotor and magnetic sensors. These are often more robust to dust and vibration than optical encoders.
*   **Capacitive Absolute Encoders:** Use changes in capacitance as the rotor moves.

#### Key Concepts for Absolute Encoders:

*   **Resolution:** Defined by the number of bits it outputs. A 12-bit encoder can distinguish 2^12 = 4096 positions.
*   **No Homing Required:** Since they know their position on startup, they don't need a homing sequence. This is a significant advantage.
*   **Direct Position Reading:** The controller reads a position value directly, no counting is needed.

#### When to Use Absolute Encoders:

They are ideal for applications where losing position information is unacceptable, or where immediate, known positioning is required:

*   Robots that need to maintain their exact pose even after power cycles (e.g., safety-critical systems).
*   Robots that operate in environments where homing might be difficult or impossible.
*   Applications requiring very high accuracy and immediate position certainty.

**(Connecting to Course Outcomes):** When choosing sensors for obstacle avoidance (CO3), knowing the precise position of the robot's own end-effector or base is crucial. Absolute encoders provide this certainty. Mikell P. Groover's "Industrial Robots" highlights the importance of feedback for accurate robot arm positioning, where absolute encoders shine.

## Comparing Incremental and Absolute Encoders: A Quick Recap

| Feature          | Incremental Encoder                               | Absolute Encoder                                        |
| :--------------- | :------------------------------------------------ | :------------------------------------------------------ |
| **Output**       | Pulses (A, B, Z signals)                          | Unique digital code for each position                   |
| **Position**     | Relative (counts movement since start)            | Absolute (knows position at all times)                  |
| **Power Loss**   | Loses position information                        | Retains position information                            |
| **Homing**       | Requires homing on startup                        | Does not require homing                                 |
| **Complexity**   | Simpler, lower cost                               | More complex, higher cost                               |
| **Speed Calc.**  | Easy (by counting pulses over time)               | Possible but requires reading the position data stream  |
| **Resolution**   | Pulses Per Revolution (PPR)                       | Number of bits                                          |
| **Typical Use**  | Speed control, continuous motion tracking         | Critical position maintenance, startup certainty        |

## Practical Examples and Analogies

Let's bring this to life.

*   **Incremental Encoder Analogy:** Imagine you are walking on a long path. You don't know your exact starting point (absolute position), but you can count your steps. Each step tells you how far you've moved from where you were a moment ago. If you decide to go forward then backward, counting steps (and perhaps noting which direction) tells you your final position relative to your starting point. This is like an incremental encoder. A robot arm might start at an unknown angle, but if it moves 10 degrees clockwise and then 5 degrees counter-clockwise, the controller knows it's now 5 degrees clockwise from its initial, unknown orientation.

*   **Absolute Encoder Analogy:** Now, imagine you have a GPS device. It always tells you your exact latitude and longitude, no matter if you just turned on the device or have been using it for hours. Even if you lose GPS signal for a bit and then regain it, it knows your precise location immediately. This is like an absolute encoder. A robot arm with an absolute encoder will know its exact angle (say, 45.3 degrees) the moment it powers up, without needing to move.

*   **Real-world Robot Example:** Consider a robotic arm on an assembly line.
    *   If the arm needs to quickly pick up a part and place it somewhere else, and it's crucial that the arm *always* knows its exact configuration for safety and accuracy, an **absolute encoder** would be used for its joints. If the power flickers, the robot will still know precisely where its arm is.
    *   If you have a robot cart moving across a floor, and you only care about its speed to maintain a constant velocity for navigation, an **incremental encoder** on the drive wheels might suffice. You just need to count how fast the wheels are turning.

## Beyond Optical: Other Encoder Technologies

While optical encoders are prevalent, it's good to be aware of others:

*   **Magnetic Encoders:** These use magnetic poles or patterns on a rotating element. They are generally more rugged and resistant to environmental factors like dust, dirt, oil, and vibrations than optical encoders. They are commonly found in industrial settings.
*   **Capacitive Encoders:** These measure changes in capacitance as a coded disc rotates. They offer good performance and can be quite compact.

**(Connecting to Textbooks):** De Silva covers magnetic and other sensing principles in detail, providing a broader context for how different physical phenomena can be harnessed for motion sensing.

## Importance in Robotics and Course Alignment

Why are encoders so critical in robotics?

*   **Precise Motion Control (CO3):** They are the backbone of controlling a robot's movement with accuracy. Without them, a robot arm would not be able to reach a specific point in space.
*   **Closed-Loop Systems (CO1, CO2):** Robotics relies heavily on feedback control. Encoders provide the essential feedback signal that allows a controller to compare the desired state (e.g., target position) with the actual state (current position) and make adjustments. This is fundamental to achieving sophisticated robotic behaviors, linking back to the overall "significance... of robotics and automation" (CO1).
*   **Safety:** Knowing the precise position of robot joints is also a safety feature. It helps prevent the robot from colliding with itself or its environment.

Remember this: **Encoders bridge the gap between mechanical movement and electrical information.** They are the eyes that tell the robot's brain where its parts are and how they are moving. This is indispensable for any robot that needs to do more than just move randomly.

## Common Pitfalls and Exam Focus

*   **Resolution vs. Accuracy:** Understand that high resolution (many pulses or bits) doesn't automatically mean high accuracy. Accuracy is about how close the encoder's reading is to the *true* position, which can be affected by manufacturing tolerances and mounting.
*   **Incremental vs. Absolute Choice:** Be prepared to explain *why* you would choose one over the other for a given robotic application. Think about cost, power loss implications, and startup procedures.
*   **Quadrature Decoding:** The concept of Channel A and Channel B and how they determine direction is often tested. Make sure you can explain it.
*   **The Index Pulse:** Its purpose in establishing a home position is important.

---

## Sample Questions and Answers

**1. Conceptual Question:** Explain the primary difference between an incremental encoder and an absolute encoder in terms of how they report position.

**Answer:** An **incremental encoder** reports position as a series of pulses, indicating *how much* movement has occurred since a starting point or since power-up. It does not inherently know its absolute position without external reference. In contrast, an **absolute encoder** provides a unique digital code for *every specific position* of the shaft, so it always knows its exact location, even after power cycles, without needing to count.

**Reasoning:** This question tests the fundamental distinction between the two encoder types, focusing on their position reporting mechanisms.

**2. Exam-Oriented Question:** A robotic arm needs to perform delicate surgical tasks where losing track of its joint positions after a brief power interruption could be catastrophic. Which type of encoder would be most suitable for its joints, and why?

**Answer:** An **absolute encoder** would be the most suitable choice. This is because absolute encoders maintain their position information even if the power supply is interrupted. When power is restored, the encoder immediately reports the correct, current position of the joint without requiring a re-homing procedure. This ensures the robot can resume its precise operation without any ambiguity or loss of critical positional data, which is paramount for safety and accuracy in surgical robotics.

**Reasoning:** This question requires applying the understanding of encoder types to a practical, high-stakes scenario, emphasizing the consequence of power loss.

**3. Technical Question:** What is the function of the quadrature signals (Channel A and Channel B) in an incremental encoder?

**Answer:** The quadrature signals (Channel A and Channel B) in an incremental encoder are two output signals generated by sensors that are offset in phase by 90 electrical degrees. This phase difference allows the control system to determine both the *magnitude* of rotation (by counting pulses from either channel) and the *direction* of rotation (by observing which channel leads or lags the other). For instance, if Channel A leads Channel B, it indicates rotation in one direction, while if Channel B leads Channel A, it indicates rotation in the opposite direction.

**Reasoning:** This probes the understanding of a key feature of incremental encoders that enables directional tracking, a crucial aspect for precise movement control.

**4. Application-Based Question:** You are designing a robot cart that needs to navigate a warehouse. You need to measure how far the cart travels. Would you prioritize resolution (PPR) or the distinction between incremental and absolute for this task, and why?

**Answer:** For measuring distance traveled by a robot cart, both are important, but the **choice between incremental and absolute** is a primary consideration, and **high resolution (PPR) is critical** within that choice.

*   **Incremental vs. Absolute:** An **incremental encoder** on the drive wheels is usually sufficient and more cost-effective for this application. The cart's position can be tracked by counting pulses from the wheel's rotation. Homing might be required upon startup if an initial known position is needed, but for simply measuring distance, relative tracking is fine. Absolute encoders are overkill and more expensive here.
*   **Resolution (PPR):** High resolution (high PPR) is crucial for accurate distance measurement. If the encoder has low resolution (e.g., 100 PPR), each pulse represents a larger increment of travel. This means the cart's actual position will be estimated with less precision. A higher PPR (e.g., 1000 or 2000 PPR) provides finer steps, allowing for a more accurate cumulative measurement of distance traveled.

Therefore, you'd select an incremental encoder with a **high resolution** for this task.

**Reasoning:** This question requires a comparative analysis and justification of sensor selection based on the application's requirements, balancing cost, functionality, and performance metrics.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
