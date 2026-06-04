---
title: "Types of Robots- Manipulators, Mobile Robots-wheeled & Legged Robots, Aerial Robots"
subject: "INTRODUCTION TO ROBOTICS"
module: "Module 1: Definitions"
branch: "Electrical and Electronics Engineering"
semester: 8
topicId: "68a200872b85456187f36c40"
status: "completed"
scrapedAt: "2026-05-23T16:41:14.287Z"
---
# Introduction to Robotics: Module 1 - Definitions

## Topic: Types of Robots - Manipulators, Mobile Robots (Wheeled & Legged), Aerial Robots

### Learning Outcomes Covered in this Topic:

*   **CO1: Familiarise with anatomy, specifications and applications of Robots (Knowledge Level: K2)** - This topic directly addresses the anatomy and applications of various robot types.

---

### 1. Introduction to Robot Classification

Robots are broadly classified based on their **mobility** and **functionality**. Understanding these classifications is crucial for selecting the right robot for a specific task and for understanding their underlying principles.

---

### 2. Manipulator Robots (Industrial Robots)

Manipulators are the most common type of robot, characterized by a **robotic arm** that mimics the human arm's degrees of freedom. They are typically **fixed in position** and designed for repetitive tasks in industrial settings.

#### 2.1 Anatomy of a Manipulator

*   **Base:** The stationary foundation from which the manipulator extends.
*   **Links:** Rigid segments connected by joints.
*   **Joints:** Allow relative motion between links. These can be:
    *   **Prismatic Joints:** Provide linear motion (sliding).
    *   **Revolute Joints:** Provide rotational motion.
*   **End-Effector:** The tool or device attached to the end of the robotic arm that interacts with the environment (e.g., grippers, welders, drills, paint sprayers).
*   **Wrist:** The final joints of the manipulator, typically revolute, allowing the end-effector to orient itself.

#### 2.2 Degrees of Freedom (DOF)

The DOF of a manipulator refers to the number of independent parameters needed to specify its configuration.

*   **Human Arm:** Has approximately 7 DOF (shoulder: 3, elbow: 1, wrist: 3).
*   **Industrial Manipulators:** Commonly have 4 to 6 DOF, providing sufficient dexterity for most tasks. More DOF generally means greater flexibility and maneuverability.

#### 2.3 Common Manipulator Configurations (Referencing Craig, 2018; Saha, 2014)

The configuration describes the arrangement of joints and links.

*   **Cartesian/Gantry Robots:**
    *   **Joints:** Three prismatic joints (linear axes).
    *   **Configuration:** (P, P, P) - Three translational degrees of freedom.
    *   **Workspace:** Rectangular cuboid.
    *   **Applications:** Pick-and-place, material handling, CNC machining, 3D printing.
    *   **Advantages:** High accuracy, simple kinematics, large workspace.
    *   **Disadvantages:** Bulky, high moving mass, can be slow.

*   **Cylindrical Robots:**
    *   **Joints:** One revolute, two prismatic joints.
    *   **Configuration:** (R, P, P) - One rotational and two translational degrees of freedom.
    *   **Workspace:** Cylindrical.
    *   **Applications:** Machine tending, welding, assembly.
    *   **Advantages:** Relatively large workspace, good reach.
    *   **Disadvantages:** Limited dexterity in certain orientations.

*   **Spherical/Polar Robots:**
    *   **Joints:** Two revolute, one prismatic joint.
    *   **Configuration:** (R, R, P) - Two rotational and one translational degree of freedom.
    *   **Workspace:** Spherical segment.
    *   **Applications:** Spot welding, material handling.
    *   **Advantages:** Good reach in a specific volume.
    *   **Disadvantages:** Kinematics can be complex, limited dexterity.

*   **SCARA (Selective Compliance Articulated Robot Arm) Robots:**
    *   **Joints:** Two parallel revolute joints (horizontal plane) and one prismatic joint (vertical).
    *   **Configuration:** (R, R, P) - Primarily designed for horizontal manipulation.
    *   **Workspace:** Large cylindrical area with a vertical working stroke.
    *   **Applications:** High-speed assembly, pick-and-place, packaging.
    *   **Advantages:** High speed, high accuracy in the horizontal plane, good compliance in the vertical direction.
    *   **Disadvantages:** Limited ability to orient the end-effector in arbitrary directions.

*   **Articulated Robots (Anthropomorphic Robots):**
    *   **Joints:** Typically three or more revolute joints, mimicking the human arm.
    *   **Configuration:** (R, R, R, ...) - Most common are 6-DOF robots.
    *   **Workspace:** Spherical or semi-spherical.
    *   **Applications:** Welding, painting, assembly, material handling, surgery.
    *   **Advantages:** High dexterity, flexible, can reach into confined spaces.
    *   **Disadvantages:** Complex kinematics, potential for singularities.

*   **Parallel Robots (e.g., Delta Robot):**
    *   **Structure:** Multiple kinematic chains connecting the base to the end-effector.
    *   **Applications:** High-speed pick-and-place, precision assembly, flight simulators.
    *   **Advantages:** High speed, high stiffness, high precision.
    *   **Disadvantages:** Limited workspace, complex control.

#### 2.4 Applications of Manipulators (CO1)

*   **Manufacturing:** Welding, painting, assembly, machining, pick-and-place.
*   **Material Handling:** Loading/unloading, palletizing, dispensing.
*   **Healthcare:** Surgical robots (e.g., da Vinci Surgical System), prosthetics.
*   **Aerospace:** Component assembly, inspection.
*   **Food Industry:** Packaging, sorting.

---

### 3. Mobile Robots

Mobile robots are designed to move and navigate within their environment. Their classification is primarily based on their locomotion method.

#### 3.1 Wheeled Robots

Wheeled robots use wheels for locomotion. They are efficient on flat, smooth surfaces.

*   **Mechanism:** Wheels driven by motors, allowing for translation and rotation.
*   **Types of Configurations:**
    *   **Differential Drive:** Two independently driven wheels on opposite sides of the robot.
        *   **Movement:** Can move forward/backward and turn in place by varying wheel speeds.
        *   **Advantages:** Simple control, agile.
        *   **Disadvantages:** Cannot move sideways, requires a friction surface.
        *   **Example:** Roomba vacuum cleaner, many robotic platforms used in research.
    *   **Ackermann Steering (Car-like Steering):** Similar to a car, with front wheels that pivot.
        *   **Movement:** Can steer like a car.
        *   **Advantages:** Stable at higher speeds, can handle inclines.
        *   **Disadvantages:** More complex steering mechanism, cannot turn in place.
        *   **Example:** Autonomous vehicles, automated guided vehicles (AGVs) in warehouses.
    *   **Omni-directional (Mecanum Wheel):** Uses wheels with rollers mounted on their circumference at an angle.
        *   **Movement:** Can move in any direction (forward, backward, sideways, and rotate) without changing its orientation.
        *   **Advantages:** Highly maneuverable, can navigate tight spaces.
        *   **Disadvantages:** Complex wheels, can be sensitive to surface irregularities.
        *   **Example:** Advanced AGVs, robotic systems in manufacturing requiring precise lateral movement.
    *   **Tricycle Drive:** One steerable wheel and two fixed, driven wheels.
        *   **Movement:** Similar to differential drive but with a steering mechanism.
        *   **Advantages:** Simple steering, can pivot.
        *   **Disadvantages:** Stability issues at higher speeds.

*   **Applications of Wheeled Robots (CO1):**
    *   **Logistics & Warehousing:** Automated Guided Vehicles (AGVs), inventory management.
    *   **Inspection:** Pipeline inspection, facility monitoring.
    *   **Domestic:** Vacuum cleaners, lawnmowers.
    *   **Exploration:** Mars rovers (e.g., Curiosity, Perseverance).
    *   **Security:** Patrol robots.

#### 3.2 Legged Robots

Legged robots use legs to move. They are designed to navigate more complex and uneven terrains where wheels fail.

*   **Mechanism:** Legs with joints that can step over obstacles, climb stairs, and adapt to uneven surfaces.
*   **Types of Configurations:**
    *   **Bipedal Robots:** Two legs.
        *   **Movement:** Mimics human walking.
        *   **Advantages:** Can navigate human environments, potential for agile locomotion.
        *   **Disadvantages:** Highly complex control for stability, energy inefficient, prone to falling.
        *   **Example:** Honda ASIMO, Boston Dynamics Atlas.
    *   **Quadrupedal Robots:** Four legs.
        *   **Movement:** Mimics animal gaits (walking, trotting, bounding).
        *   **Advantages:** Good stability, can traverse challenging terrain, relatively simpler control than bipeds.
        *   **Disadvantages:** Still complex to control, can be energy intensive.
        *   **Example:** Boston Dynamics Spot, ANYbotics ANYmal.
    *   **Hexapedal Robots:** Six legs.
        *   **Movement:** Typically uses a tripod gait for stable locomotion.
        *   **Advantages:** Very stable, can easily overcome obstacles.
        *   **Disadvantages:** Slower than bipeds or quadrupeds, more mechanical complexity.
        *   **Example:** Insect-like robots for inspection or search and rescue.
    *   **Multi-legged Robots (8+ legs):**
        *   **Advantages:** Extreme stability and obstacle traversal.
        *   **Disadvantages:** Very slow and complex.

*   **Applications of Legged Robots (CO1):**
    *   **Search and Rescue:** Navigating collapsed structures.
    *   **Inspection:** Industrial sites, disaster zones.
    *   **Exploration:** Rough terrain, extraterrestrial exploration.
    *   **Military:** Reconnaissance, carrying payloads.
    *   **Research:** Studying locomotion and biomechanics.

---

### 4. Aerial Robots (Drones/UAVs)

Aerial robots are designed to fly and operate in the air. They are typically remotely controlled or autonomous.

*   **Mechanism:** Primarily use rotors or fixed wings for lift and propulsion.
*   **Types of Configurations:**
    *   **Rotorcraft (Multicopters):**
        *   **Mechanism:** Multiple rotors (typically 4, 6, or 8) whose speed is independently controlled to provide lift and maneuverability.
        *   **Movement:** Can hover, ascend/descend vertically, and move in any horizontal direction.
        *   **Advantages:** Vertical Take-Off and Landing (VTOL), hovering capability, high maneuverability.
        *   **Disadvantages:** Limited flight time due to battery power, susceptible to wind.
        *   **Examples:** Quadcopters (DJI Phantom, Mavic), Hexacopters, Octocopters.
    *   **Fixed-Wing Aircraft:**
        *   **Mechanism:** Aerodynamic wings generate lift, and a propeller or jet engine provides thrust.
        *   **Movement:** Requires forward motion to maintain lift. Cannot hover.
        *   **Advantages:** Longer flight times, higher speeds, greater range.
        *   **Disadvantages:** Requires a runway or catapult for launch/landing, cannot hover.
        *   **Examples:** Military reconnaissance drones (e.g., Global Hawk), some mapping drones.
    *   **Hybrid VTOL:** Combine features of rotorcraft and fixed-wing aircraft.
        *   **Mechanism:** Can use rotors for VTOL and then transition to fixed-wing flight for efficiency.
        *   **Advantages:** Combines the benefits of both types (VTOL and long-range flight).
        *   **Disadvantages:** Complex design and control.
        *   **Examples:** tilt-rotor drones.

*   **Applications of Aerial Robots (CO1):**
    *   **Photography & Videography:** Aerial shots for film, real estate, events.
    *   **Inspection:** Power lines, wind turbines, bridges, infrastructure.
    *   **Delivery:** Package delivery (emerging).
    *   **Agriculture:** Crop monitoring, spraying.
    *   **Surveillance & Security:** Border patrol, event monitoring.
    *   **Mapping & Surveying:** Creating 3D models of terrain.
    *   **Search and Rescue:** Locating people in remote or hazardous areas.

---

### Important Points to Remember

*   **Degrees of Freedom (DOF)** are critical for understanding a robot's capability.
*   **Workspace** is the volume within which the robot's end-effector can operate.
*   **Configuration** dictates the arrangement of joints and links, influencing the robot's kinematics and workspace.
*   **Mobile robots** extend the robot's reach beyond a fixed base, introducing challenges in navigation and control.
*   **Aerial robots** offer unique perspectives and access, particularly for surveillance and inspection.
*   The choice of robot type depends heavily on the **application requirements**, including the environment, task complexity, speed, accuracy, and cost.

---

### Practice Questions

1.  **Question:** A robot used for high-speed pick-and-place operations on an assembly line in a factory, where it needs to move objects horizontally with great precision, is most likely a:
    a) Cartesian Robot
    b) Cylindrical Robot
    c) SCARA Robot
    d) Articulated Robot

    **Answer:** c) SCARA Robot. SCARA robots are specifically designed for high-speed, precise horizontal movements, making them ideal for assembly line tasks.

2.  **Question:** Which type of mobile robot is best suited for navigating a cluttered, uneven terrain like a collapsed building for search and rescue operations?
    a) Wheeled Robot with differential drive
    b) Wheeled Robot with omni-directional wheels
    c) Legged Robot (e.g., quadrupedal)
    d) Aerial Robot (fixed-wing)

    **Answer:** c) Legged Robot (e.g., quadrupedal). Legged robots, especially quadrupeds, are designed to overcome obstacles and traverse uneven surfaces, which wheels and fixed-wing aircraft cannot effectively do.

3.  **Question:** What are the primary advantages of a SCARA robot for assembly tasks compared to an articulated robot? (Relates to CO1)

    **Answer:** SCARA robots offer higher speed and better precision in the horizontal plane due to their parallel link structure. They are also generally simpler to control for planar movements compared to the multi-axis dexterity of articulated robots. Articulated robots offer greater dexterity in orienting the end-effector in 3D space.

4.  **Question:** Identify two distinct applications for aerial robots and explain why their aerial capability is essential for those tasks. (Relates to CO1)

    **Answer:**
    *   **Infrastructure Inspection (e.g., bridges, power lines):** Aerial robots can safely access and inspect hard-to-reach or hazardous locations without requiring humans to climb or shut down operations. Their aerial perspective provides a comprehensive view.
    *   **Aerial Photography/Videography:** Their ability to fly provides unique and dynamic vantage points that are impossible to achieve from the ground, essential for filmmaking, real estate marketing, and event coverage.

5.  **Question:** Describe the key difference in locomotion mechanisms between a differential drive wheeled robot and a bipedal legged robot. (Relates to CO1)

    **Answer:** A differential drive wheeled robot moves by controlling the rotational speed of two independent wheels on opposite sides of the robot, allowing forward/backward motion and turning. A bipedal legged robot mimics human walking, using legs with articulated joints to step and balance, enabling it to traverse more complex terrains.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### References and Further Reading

*   **Introduction to Robotics** by S K Saha (McGraw Hill Education (India) Private Limited, 2014) - Provides foundational understanding of robot types and configurations.
*   **Introduction to Robotics: Mechanics and Control** by John. J. Craig (Pearson Education Asia, 4th Edition, 2018) - Offers detailed explanations of manipulator kinematics and configurations.
*   **Robotics Technology and Flexible Automation** by S. R. Deb (McGraw-Hill Education LLC, Second Edition) - Discusses various industrial robot types and their applications.
*   **Robotics-Fundamental Concepts and Analysis** by Ashitava Ghosal (Oxford University Press, 2006) - Covers a broad spectrum of robotic systems, including mobile and aerial robots.

---