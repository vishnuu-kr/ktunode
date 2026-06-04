---
title: "Rotary actuators."
subject: "SENSORS AND ACTUATORS"
module: "Module 4: Working principles of Actuators. Piezoelectric and Piezoresistive"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd21409ece2bdd875f9952"
status: "completed"
scrapedAt: "2026-05-23T16:10:04.173Z"
---
# Sensors and Actuators: Module 4 - Working Principles of Actuators (Piezoelectric and Piezoresistive) - Rotary Actuators

Welcome, everyone, to our exploration of actuators! In the previous modules, we’ve delved into the fascinating world of sensors – how they detect physical phenomena and translate them into electrical signals. Now, it’s time to flip the coin and understand how we can *cause* physical effects using electrical energy. That’s where actuators come in! Think of them as the muscles of our mechatronic systems, allowing them to move, interact, and perform tasks.

This module, specifically Module 4, focuses on the working principles of various actuators, with a special emphasis on **Piezoelectric** and **Piezoresistive** actuators. Today, we're going to zoom in on a particularly important type: **Rotary Actuators**.

Before we dive into rotary actuators specifically, let's briefly recap what we mean by an actuator in the context of mechatronics. An actuator is a component of a machine that is responsible for moving or controlling a mechanism or system. It takes an electrical signal (or other forms of energy, like hydraulic or pneumatic pressure) and converts it into mechanical motion. This motion can be linear (like a piston moving in a cylinder) or rotational (like a motor shaft spinning).

Our focus today, rotary actuators, are designed to produce rotational motion. Think about anything that spins: a fan, a robotic arm joint, the wheels of a vehicle, or even the needle on a record player. All of these are driven by rotary actuators.

## Understanding the "Why" of Rotary Actuators

Before we get into the "how," let's think about why we need different types of rotary actuators. Just like we have different types of sensors for different measurement needs, we have different actuators for different motion requirements. When selecting a rotary actuator, engineers consider:

*   **Torque:** How much turning force is needed?
*   **Speed:** How fast does it need to rotate?
*   **Precision:** How accurately does it need to control the rotation angle?
*   **Power Consumption:** How much energy can it draw?
*   **Size and Weight:** What are the space and weight constraints?
*   **Cost:** What is the budget?

These considerations often lead us to employ various technologies, and the piezoelectric and piezoresistive effects, while often associated with linear motion in MEMS devices, can also be cleverly utilized to achieve rotary motion.

*(Relating to Course Outcomes: This discussion touches upon CO1 – Fundamental Concepts. Understanding the need for different actuator types, like rotary actuators, is a foundational concept in mechatronics and instrumentation.)*

## Rotary Actuators: The Core Concept

At its heart, a rotary actuator converts an input signal into an output that involves a spinning motion. This output is typically measured in terms of **torque** (a rotational force) and **angular velocity** (rotational speed). The input is usually an electrical signal, often a voltage or current.

We can broadly categorize rotary actuators based on their operating principles. Some of the most common types, and those we'll implicitly touch upon when discussing how piezoelectric and piezoresistive effects can be harnessed for rotation, include:

*   **Electric Motors:** These are the workhorses of rotary actuation. They use electromagnetic principles (like DC motors, AC motors, stepper motors, and servo motors) to generate rotation.
*   **Hydraulic Motors:** These use pressurized fluid to create torque.
*   **Pneumatic Motors:** Similar to hydraulic, but use compressed air.

While our focus is on piezoelectric and piezoresistive principles, it's crucial to know that these effects are often employed in **micro-scale** rotary actuators, particularly within MEMS (Micro-Electro-Mechanical Systems) applications. At this tiny scale, the traditional bulk electric motors become impractical due to size, power, and efficiency limitations.

## Piezoelectric Actuators for Rotary Motion

Now, let's bring in our first key technology: **piezoelectricity**.

Remember the piezoelectric effect? It’s a fascinating property of certain materials (like quartz, certain ceramics like PZT - lead zirconate titanate) where they generate an electric charge when subjected to mechanical stress, and conversely, they deform mechanically when an electric field is applied across them. We call this the "converse piezoelectric effect."

*(Relating to Course Outcomes: This directly addresses CO2 – Mechanical and Electromechanical Sensors, by explaining the electromechanical principle behind piezoelectric actuators. It also supports CO1 – Fundamental Concepts by detailing a core actuator technology.)*

### How Piezoelectricity Leads to Rotation

Directly creating a large, continuous rotation with a simple piezoelectric element can be challenging because their deformation is typically small and often bidirectional (they expand or contract depending on the voltage polarity). However, engineers have devised clever ways to exploit this small, precise deformation to achieve rotary motion, especially at the micro-scale.

One common approach is to use **bimorph actuators** or **stack actuators** to create a bending or tilting motion, and then use this motion to drive a wheel or a gear system.

Imagine a piezoelectric bimorph: it's like a sandwich of two piezoelectric layers with opposite polarization, or a piezoelectric layer bonded to a passive material. When you apply a voltage, one layer expands while the other contracts, causing the whole structure to bend.

**Analogy:** Think of a bimetallic strip used in thermostats. When heated, one metal expands more than the other, causing it to bend. A piezoelectric bimorph does something similar, but the "heat" is the electric field, and the "expansion/contraction" is due to the converse piezoelectric effect.

Now, how do we turn this bending into rotation?

1.  **Micro-gears or Ratchets:** A piezoelectric bimorph can be designed to oscillate or move in a specific pattern. If this oscillating element is in contact with a micro-gear or a ratchet mechanism, each oscillation can impart a tiny "push" or "step" to the gear, causing it to rotate incrementally. This is a form of **step motor** action, where precise angular movements are achieved by a series of small, controlled steps.
2.  **Vibratory Rotary Actuators:** Some designs use piezoelectric elements to create high-frequency vibrations. These vibrations can be directed to an output shaft or rotor in a way that, through friction or specialized couplings, results in a net rotation. Think of a very fast, precise tapping motion that, over time, causes something to spin.
3.  **Rotary Bimorphs:** More advanced designs might involve curved piezoelectric elements or arrangements that directly produce a torque when a voltage is applied, though these are more complex to design and fabricate.

**Example:** In micro-robotics or micro-optical systems, you might find a piezoelectric actuator that subtly bends and pushes a tiny wheel or a mirror mount. By controlling the bending precisely, you can rotate the wheel or mirror to a specific angle with very high accuracy. This is incredibly useful for positioning components in microscopes or precision assembly machines.

*(Relating to Course Outcomes: This delves into the "how" for CO2, explaining the electromechanical conversion. It also indirectly relates to CO1 as it's a fundamental working principle. Understanding these micro-scale applications is key for more advanced mechatronics.)*

**Key takeaway for piezoelectric rotary actuators:** They excel in **high precision**, **small displacements**, and **fast response times**, making them ideal for micro-positioning and applications requiring fine control. Their main limitation is the relatively small force or torque they can generate directly, and the need for complex mechanisms to achieve significant continuous rotation.

## Piezoresistive Actuators for Rotary Motion

Now, let's switch gears to our second key technology: **piezoresistivity**.

The piezoresistive effect is different from the piezoelectric effect. In piezoresistive materials (often semiconductors like silicon, or certain metals and polysilicon), the **electrical resistance changes** when mechanical stress or strain is applied.

*(Relating to Course Outcomes: Similar to piezoelectricity, this directly ties into CO2, as it describes another electromechanical sensing/actuation principle. It also supports CO1.)*

### How Piezoresistivity Can Lead to Rotation

This is where things get a bit more nuanced. Piezoresistivity is primarily known for its use in **sensors** – think pressure sensors or strain gauges, where the change in resistance is measured to detect the applied stress. However, the principle can be leveraged for actuation, particularly when combined with other effects or in cleverly designed structures.

Directly using piezoresistivity to create mechanical motion isn't as straightforward as the converse piezoelectric effect. The change in resistance is an electrical property, not a direct deformation. So, how can it be used for *actuation*, and specifically *rotary* actuation?

One way to think about it is in terms of **feedback control**. A piezoresistive element can be used to *sense* the strain or stress within an actuator system, and that information can be fed back to control the actuator's performance. However, this is more about control than direct actuation via piezoresistivity itself.

Let's consider more direct (though often indirect or combined) actuation mechanisms:

1.  **Thermal Expansion due to Joule Heating:** If a piezoresistive material (especially a semiconductor) is used as a resistive element, passing a current through it causes it to heat up due to **Joule heating** ($P = I^2R$ or $P = V^2/R$). This heating causes the material to **thermally expand**. If this thermal expansion is constrained or designed to cause bending or displacement, it can then be used to drive a rotary mechanism, similar to how piezoelectric bimorphs work with thermal actuation. The piezoresistive nature of the material might be incidental here; it's the thermal expansion that's causing the motion.
2.  **Electrostriction in some materials:** While distinct from true piezoresistivity, some materials exhibit electrostriction, where the strain is proportional to the *square* of the electric field. This can lead to deformation that is independent of voltage polarity. If a piezoresistive material structure also exhibits electrostriction, this deformation could potentially be used for rotary motion. This is a less direct connection, often found in specialized materials.
3.  **Integrated Sensing and Actuation:** In MEMS, a single device might incorporate both piezoresistive sensing and some other actuation mechanism (like electrostatic or thermal). A piezoresistive strain gauge might be used to measure the stress or strain *experienced by* a rotary component driven by an electrostatic motor, and this feedback signal could be used to adjust the driving voltage for more precise control. Here, piezoresistivity is essential for the *control* of the rotary motion, even if it's not the primary source of the torque.

**Example:** Imagine a micro-scale robotic arm designed for manipulating tiny components. The joints might be driven by electrostatic forces. However, to ensure the arm doesn't over-stress delicate parts, piezoresistive strain gauges could be integrated into the arm segments. If the arm tries to apply too much torque (causing excessive bending and strain), the piezoresistors sense this increased strain, and this signal is sent to a controller to reduce the electrostatic drive force. In this scenario, the piezoresistive element is crucial for safe and precise rotary control.

*(Relating to Course Outcomes: This explains the principle for CO2 and CO1. It also touches on the practical aspect of how sensing (using piezoresistivity) is integrated with actuation for better performance, which is a core mechatronics concept. While not directly generating rotation, its role in controlling it is vital.)*

**Key takeaway for piezoresistive applications in rotary systems:** Piezoresistivity is more commonly associated with **sensing the mechanical state** (like stress or strain) of a rotary system. When used for actuation, it's often indirectly through thermal expansion caused by Joule heating in resistive elements, or as a critical feedback component for precise control of other rotary actuation mechanisms. They offer high sensitivity for sensing and can be integrated into silicon substrates for micro-scale devices.

## Bridging the Gap: Piezoelectric and Piezoresistive Effects in Rotary Systems

It's important to reiterate that the direct application of simple piezoelectric or piezoresistive materials to create large, continuous rotary motion is not as common as, say, a DC motor. Instead, these principles are typically employed in:

*   **Micro-Electro-Mechanical Systems (MEMS):** At the micro-scale, where traditional motors are cumbersome, these effects are vital for creating very small, precise rotary stages, manipulators, and actuators.
*   **Precision Positioning:** For applications requiring extremely fine angular control, where displacements are measured in nanometers or micrometers, piezoelectric actuators are often preferred.
*   **Integrated Systems:** Piezoresistive sensing is frequently integrated with other actuation methods to provide closed-loop control, enhancing accuracy and safety.

For instance, a common MEMS rotary actuator might use electrostatic comb drives for motion. But to ensure precise positioning, the angular displacement might be sensed using piezoresistive strain gauges placed strategically to detect bending or stress induced by the rotation. This sensor feedback then refines the electrostatic drive signal.

*(Relating to Course Outcomes: This summary reinforces CO1 and CO2 by showing how these principles are applied in real-world (even if micro-scale) systems. It also hints at the broader field of mechatronics where sensors and actuators work hand-in-hand.)*

## Summary and Exam Focus

When you encounter questions about rotary actuators involving piezoelectric or piezoresistive effects, remember:

*   **Piezoelectric actuators** for rotary motion usually rely on the **converse piezoelectric effect** to create bending or small linear displacements, which are then translated into rotation via micro-mechanisms like ratchets or gears. They are known for precision and fast response.
*   **Piezoresistive actuators** are less direct. They primarily function in rotary systems by **sensing strain** to provide feedback for control. If they *do* cause motion, it's often through **thermal expansion** caused by Joule heating in a resistive element.

The key difference to remember for exams: **Piezoelectric = Electric field causes Deformation; Piezoresistive = Strain causes Resistance change.** For actuation, you're interested in the former (or its indirect effects like thermal expansion), and for sensing, you're interested in the latter.

*(Relating to Course Outcomes: This section directly helps students focus for exams, reinforcing the core concepts of CO1 and CO2. It's about recall (K1) of the fundamental differences and understanding (K2) of their application.)*

Let's recap the key definitions one last time, as these are fundamental:

*   **Actuator:** A device that converts an input signal (usually electrical) into mechanical motion.
*   **Rotary Actuator:** An actuator that produces rotational output.
*   **Piezoelectric Effect (Converse):** Applying an electric field to certain materials causes them to deform (expand/contract/bend).
*   **Piezoresistive Effect:** Applying mechanical stress/strain to certain materials changes their electrical resistance.
*   **Joule Heating:** The process where electrical energy is converted into heat due to resistance ($P=I^2R$).

---

## Sample Questions and Answers

**Question 1 (Conceptual - CO1, CO2):**
Describe the primary difference in how piezoelectric and piezoresistive effects are utilized for actuation, especially in generating rotary motion.

**Answer 1:**
The primary difference lies in the fundamental physical phenomenon they exploit for actuation.
*   **Piezoelectric actuation** relies on the **converse piezoelectric effect**, where applying an electric field directly causes a material deformation (expansion, contraction, or bending). This deformation, even if small, can be mechanically amplified or coupled to a mechanism to create rotary motion, often in micro-actuators.
*   **Piezoresistive actuation** is less direct. While the piezoresistive effect itself is about the change in *resistance* due to strain, it can lead to actuation through indirect means. The most common is **Joule heating**: if a piezoresistive element is also a resistor, passing current through it generates heat, causing thermal expansion. This thermal expansion can then induce mechanical motion, including rotary motion, if designed appropriately. Alternatively, piezoresistive elements are critically used for *sensing* strain in rotary systems, providing feedback for precise control of other actuators.

**Question 2 (Exam-Oriented - CO1, CO2):**
A micro-robotics application requires an actuator for precise rotational positioning of a tiny mirror. Which principle, piezoelectric or piezoresistive, would be more directly suitable for the primary *actuation* mechanism, and why?

**Answer 2:**
The **piezoelectric principle** would be more directly suitable for the primary actuation mechanism in this scenario.
**Reasoning:**
The requirement is for **precise rotational positioning**. Piezoelectric materials, through the converse piezoelectric effect, exhibit very small, but highly controlled and repeatable deformations when subjected to an electric field. This makes them ideal for applications demanding high precision and fine angular adjustments, even if the displacement is tiny. These small deformations can be used to drive a rotary stage or tilt a mirror with nanometer-level accuracy.
While piezoresistive elements are excellent for *sensing* the precise angle or strain in such a system (providing feedback), they do not inherently produce mechanical deformation from an electrical signal; they change resistance. To achieve actuation via piezoresistivity, one would typically rely on thermal expansion (which might not be as fast or precise for positioning) or integrate it with another actuation method. Therefore, for the primary *actuation* of precise rotation, piezoelectricity is the more direct and suitable choice.

**Question 3 (Conceptual - CO1):**
What is the main advantage of using piezoelectric actuators in micro-scale rotary systems compared to conventional electric motors?

**Answer 3:**
The main advantages of using piezoelectric actuators in micro-scale rotary systems compared to conventional electric motors are:
1.  **Size:** Piezoelectric actuators can be fabricated at the micro-scale, making them ideal for MEMS devices where traditional motors would be too large.
2.  **Precision and Resolution:** They offer extremely high precision and resolution in positioning, allowing for very fine angular adjustments.
3.  **Fast Response Time:** They can respond very quickly to electrical signals.
4.  **Low Power Consumption (for small displacements):** For their specific applications, they can be energy-efficient.
5.  **No Magnetic Fields:** They don't generate strong magnetic fields, which can be beneficial in sensitive environments.

While they have limitations in force and continuous rotation, their precision and miniaturization capabilities are paramount in micro-robotics and optics.
