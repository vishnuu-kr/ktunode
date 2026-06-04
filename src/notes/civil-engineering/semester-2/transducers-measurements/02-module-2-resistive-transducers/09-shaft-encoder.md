---
title: "Shaft Encoder."
subject: "TRANSDUCERS & MEASUREMENTS"
module: "Module 2: Resistive Transducers"
branch: "Civil Engineering"
semester: 2
topicId: "68b54567d74ec52cc09130a3"
status: "completed"
scrapedAt: "2026-05-20T18:38:35.683Z"
---
# TRANSDUCERS & MEASUREMENTS - Module 2: Resistive Transducers

## Topic: Shaft Encoders

Alright class, let's dive into Module 2, focusing on a really fascinating and practical type of transducer: the **Shaft Encoder**. You've already been introduced to the broad concepts of sensors and transducers in Module 1, understanding how they convert one form of energy to another, usually to electrical signals that our instruments can understand. Our goal in this module, and specifically with the shaft encoder, is to see how we can use resistive principles – or more broadly, how we can convert mechanical motion, like the rotation of a shaft, into meaningful electrical information. Remember, our Course Outcome 1 is all about summarizing concepts and classifying transducers, and the shaft encoder is a perfect example to help us do just that.

### 1. What is a Shaft Encoder? Why Do We Need It?

Imagine you have a rotating shaft – perhaps on a motor, a steering wheel, a robotic arm, or even a dial on a piece of equipment. You want to know *how much* it has rotated and *in which direction*. This is where the shaft encoder comes in. It's a transducer that converts the angular position or rotational motion of a shaft into a digital output signal.

Think about it like this: if you're driving a car, you need to know not just that the steering wheel is turning, but by how much and in which direction to steer effectively. Similarly, in industrial automation or robotics, precise control of movement relies on knowing the exact position and movement of rotating components. This is precisely what shaft encoders provide.

**Key Function:** To translate rotary motion into a series of electrical pulses that can be interpreted as position, speed, or direction.

This directly ties into **CO2: Apply the principles and functions of various types of Transducers in measuring systems.** We'll be seeing how the encoder's design allows us to apply its function to a wide range of measurement and control systems.

### 2. The Core Principle: How Does it Work?

While the topic is "Resistive Transducers," it's important to note that shaft encoders, in their most common implementations, don't always rely *purely* on a variable resistor principle like a potentiometer. However, the underlying idea of changing electrical properties due to physical movement is central. Many encoders work by using optical or magnetic principles to create these changes.

Let's look at the two main types:

#### 2.1 Incremental Encoders

These are the most common type. They don't tell you the absolute position of the shaft when you power them on. Instead, they tell you *changes* in position. They generate a sequence of pulses as the shaft rotates.

*   **How they achieve this:** Typically, an incremental encoder has a disc with a pattern of slots or markings attached to the shaft.
    *   **Optical Incremental Encoder:** This is a very common design. You have the disc with slots (or opaque/transparent segments), a light source (like an LED) on one side, and a light sensor (photodetector) on the other. As the shaft rotates, the slots allow light to pass through, and the opaque sections block it. This creates a series of on-off pulses at the sensor.
        *   **Analogy:** Imagine shining a flashlight through a spinning wheel with spokes. The light beam appears to flicker on and off as the spokes alternately pass in front of it.
        *   **Textbook Connection:** David A. Bell, in "Electronic Instrumentation and Measurements," discusses optical sensors and their ability to detect changes in light. This principle is fundamental here.

    *   **Quadrature Output:** To know the *direction* of rotation, incremental encoders usually provide two output signals, often called 'A' and 'B', which are 90 degrees out of phase. When shaft A leads shaft B, it means rotation in one direction (say, clockwise). When shaft B leads shaft A, it means rotation in the opposite direction (counter-clockwise).
        *   **Visualizing Quadrature:** Think of two people walking side-by-side. If one person takes a step slightly before the other, you can tell which way they are moving relative to each other. The pulses from A and B signals give us this relative timing information.
        *   **Exam Tip:** Understanding the 90-degree phase shift of A and B signals is crucial for determining direction. Questions often test this concept.

    *   **Index Pulse (Marker or Z Channel):** Many incremental encoders also have a third output, the 'Z' or Index pulse. This pulse occurs once per revolution, often at a specific reference point on the disc. This is useful for homing or re-establishing a known position.

*   **What we measure:** The number of pulses from the A (or B) channel tells us the *amount* of rotation. The sequence of A and B pulses tells us the *direction*. The Z pulse gives us a reference point.
*   **Connection to Resistive Transducers:** While optical encoders use light, the *concept* of a changing electrical signal due to physical movement is the link. Some older or specialized designs might use brushes wiping over a coded disc with resistive tracks, which is more directly a resistive principle. However, the optical approach is dominant today and serves the same functional purpose.

#### 2.2 Absolute Encoders

Unlike incremental encoders, absolute encoders provide a unique digital code for *every* position of the shaft. Even if the encoder loses power and is powered back on, it knows its exact position immediately.

*   **How they achieve this:** Absolute encoders use discs with multiple, concentric tracks, each with a unique pattern of opaque and transparent segments. Each track corresponds to a bit in a digital word. For example, if you have a 10-bit absolute encoder, there are 10 tracks. The combination of light passing through or being blocked across all these tracks at any given moment produces a unique binary code representing that exact shaft position.
    *   **Analogy:** Imagine a multi-digit combination lock. Each dial has a specific setting, and the combination of all dial settings tells you the exact lock position. An absolute encoder's disc is like a series of these dials, but instead of numbers, they represent bits.
    *   **Textbook Mention:** Sawhney's "A Course in Electronic Measurements and Instrumentation" would likely cover various methods of digital position encoding, where absolute encoders are a prime example of converting angular position directly into a digital word.

*   **What we measure:** The output is a direct digital word (e.g., binary, Gray code) representing the shaft's angular position.
*   **Advantages:** Known position upon power-up, no need for homing sequences.
*   **Disadvantages:** Generally more complex and expensive than incremental encoders.

### 3. Applications of Shaft Encoders

Shaft encoders are ubiquitous in modern technology. Let's think about some practical examples:

*   **Robotics:** Precisely controlling the movement of robotic arms, joints, and grippers. A robotic arm needs to know exactly where its elbow or wrist is to pick up an object accurately. This is usually done with incremental encoders providing position feedback to motors.
*   **Industrial Automation:** Controlling conveyor belts, motor speeds, and positioning systems in factories. Imagine a bottling plant where bottles need to be moved and filled at precise intervals – shaft encoders on the conveyor and filling mechanisms are essential.
*   **CNC Machines:** Controlling the movement of cutting tools and workpieces in Computer Numerical Control machines requires extremely accurate position feedback, often provided by high-resolution encoders.
*   **Medical Equipment:** Devices like CT scanners and MRI machines use encoders to position the patient and the imaging sensors accurately.
*   **Consumer Electronics:** Think of a volume knob on a high-end audio system or a dial on a modern oven. While some might use simple potentiometers, more sophisticated ones might use encoders for finer control and digital feedback.
*   **Measurement of Speed and Direction:** By counting the pulses from an incremental encoder over a specific time period, we can accurately calculate the rotational speed of a shaft. The A/B quadrature signals are key here for determining direction. This relates to **CO2** again, as we are applying the transducer's output to a speed measurement system.

### 4. Types of Output Codes

The digital data from shaft encoders can be represented in various codes. The most common ones are:

*   **Binary Code:** The standard numerical representation.
*   **Gray Code:** This is particularly useful for absolute encoders. In Gray code, only one bit changes between any two adjacent positions. This significantly reduces errors that can occur if the bits are read at slightly different times during a transition. If a binary code had multiple bits changing simultaneously, and one bit changed slightly before another, you might momentarily get an incorrect reading. Gray code eliminates this ambiguity.
    *   **Exam Insight:** Understanding the advantage of Gray code for absolute encoders is a common question. Why is it preferred? Because it minimizes reading errors during transitions.

### 5. Key Parameters and Specifications

When selecting a shaft encoder, several parameters are important:

*   **Resolution:** This refers to the number of pulses per revolution (for incremental encoders) or the number of bits (for absolute encoders). Higher resolution means finer position accuracy. For example, an encoder with 1000 pulses per revolution provides more detail than one with 500 pulses per revolution.
*   **Accuracy:** How closely the measured position matches the actual physical position.
*   **Speed:** The maximum rotational speed the encoder can accurately track.
*   **Output Type:** Incremental vs. Absolute, and the specific signal logic (e.g., TTL, HTL).
*   **Environmental Rating:** For industrial applications, durability, temperature range, and resistance to dust/moisture are critical. This ties into **CO3**, as understanding these parameters helps us choose the right instrument and identify potential sources of error (e.g., environmental factors affecting performance).

### 6. Connecting to Course Outcomes & Exam Relevance

Let's explicitly link what we've discussed to our course objectives:

*   **CO1: Summarize the concepts of sensors, transducers and classify various transducers.** We've summarized the concept of a shaft encoder as a transducer converting rotary motion to digital signals. We've classified them into incremental and absolute types, with further sub-classifications based on working principle (optical).
*   **CO2: Apply the principles and functions of various types of Transducers in measuring systems.** We've seen how incremental encoders are applied to measure rotation amount, direction, and speed. Absolute encoders are applied for direct position sensing.
*   **CO3: Illustrate the working principles of electronic measuring instruments and identify various types of errors in measuring systems and choose methods for minimization of the errors.** The working principle of optical encoders (light source, sensor, coded disc) is illustrated. Errors could arise from:
    *   **Quantization Error:** Due to finite resolution (e.g., if a very small movement occurs between pulses).
    *   **Timing Errors:** In quadrature signals, if the phase relationship isn't perfectly 90 degrees.
    *   **Environmental Factors:** Dust obscuring the optical path, vibration affecting alignment.
    *   **Misalignment:** Between the disc and sensors.
    *   **Choosing Methods for Minimization:** Using higher resolution encoders, employing Gray code for absolute encoders, and ensuring proper installation and environmental protection are ways to minimize these errors.

### 7. Summary and Key Takeaways

*   Shaft encoders convert shaft rotation into digital signals.
*   **Incremental encoders** provide pulses indicating *changes* in position and use quadrature signals (A/B) to determine *direction*. They require a reference point (Z pulse) for absolute positioning.
*   **Absolute encoders** provide a unique digital code for *every* position, retaining position even after power loss.
*   Optical encoders are most common, using LEDs and photodetectors with a coded disc.
*   Gray code is preferred for absolute encoders to minimize reading errors.
*   Resolution is a key specification, indicating the detail of position measurement.

Remember this: the ability to convert precise mechanical movement into reliable digital data is fundamental to automated systems and precise measurement. Shaft encoders are a cornerstone technology for achieving this.

---

## Sample Questions with Answers

**Question 1 (Conceptual - CO1, CO2):** Differentiate between incremental and absolute shaft encoders. When would you choose one over the other?

**Answer:**
*   **Incremental Encoders:** Output pulses that indicate relative changes in shaft position. They do not provide an absolute position reading upon power-up. They require a reference point (Z-pulse) for homing. They are generally simpler and less expensive.
*   **Absolute Encoders:** Output a unique digital code for every position of the shaft. They retain their position information even if power is lost and restored. They are more complex and expensive.

**Choice:**
*   **Choose Incremental when:** Cost is a major factor, absolute position on power-up isn't critical, and you only need to track changes in position or speed (e.g., motor speed control, simple angle tracking).
*   **Choose Absolute when:** Knowing the exact position immediately upon power-up is critical, or when there's a risk of losing position during power interruptions (e.g., safety-critical robotic arm positioning, automated assembly lines where homing might be complex or time-consuming).

**Question 2 (Exam-Oriented - CO3):** Explain the purpose of quadrature signals (A and B outputs) in an incremental shaft encoder and how they are used to determine the direction of rotation.

**Answer:**
Quadrature signals, typically labeled 'A' and 'B', are two output channels from an incremental encoder that are intentionally phased 90 degrees apart.

*   **Purpose:** Their primary purpose is to enable the determination of the shaft's direction of rotation.
*   **Mechanism:** As the encoder disc rotates, the 'A' and 'B' sensors generate pulses. The sequence in which these pulses arrive indicates the direction.
    *   If the 'A' signal leads the 'B' signal (i.e., the pulse from 'A' occurs before the pulse from 'B' during a transition), it signifies rotation in one direction (e.g., clockwise).
    *   If the 'B' signal leads the 'A' signal, it signifies rotation in the opposite direction (e.g., counter-clockwise).

By monitoring this phase relationship using external circuitry or a microcontroller, the system can accurately track both the magnitude (by counting pulses) and direction of the shaft's movement. This is essential for closed-loop control systems.

**Question 3 (Conceptual - CO1):** What is the advantage of using Gray code in absolute shaft encoders compared to standard binary code?

**Answer:**
The primary advantage of using Gray code in absolute shaft encoders is its **"single-bit change" property**.

In Gray code, between any two adjacent shaft positions, only one bit in the digital output code changes. For example, the transition from position '011' to '010' involves only the last bit changing.

This is crucial for absolute encoders because the multiple tracks on the disc are read by separate sensors. It's highly unlikely that all sensors will switch state *exactly* simultaneously. If a standard binary code were used, a transition might involve multiple bits changing (e.g., '0111' to '1000'). If one bit is read slightly before or after the others, the system might interpret an incorrect intermediate binary value. With Gray code, since only one bit changes at a time, even if there's a slight timing skew between sensors, the resulting code will still represent a valid adjacent position, thus minimizing reading errors and improving reliability.
