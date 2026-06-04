---
title: "Types of Robots- Manipulators, Mobile Robots-wheeled & Legged Robots, Aerial Robots"
subject: "ROBOTICS"
module: "Module 1: Definitions"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446423d"
status: "completed"
scrapedAt: "2026-05-20T18:18:34.727Z"
---
# Robotics: Module 1 - Definitions

## Topic: Types of Robots - Manipulators, Mobile Robots (Wheeled & Legged), Aerial Robots

---

### **Learning Outcome Covered:**

*   Familiarize with anatomy, specifications, and types of Robots (CO1: K2)

---

### **Introduction to Robot Types**

Robots are versatile machines designed to perform tasks autonomously or semi-autonomously. Their classification is based on their mobility, purpose, and structure. Understanding these types is fundamental to selecting and applying robots for specific tasks, aligning with **CO1 (Familiarise with anatomy, specifications and types of Robots - K2)**.

---

### **1. Robotic Manipulators**

Robotic manipulators are the most common type of robot, characterized by their ability to grasp and manipulate objects in their workspace. They are essentially artificial arms that mimic human arm movements.

#### **1.1 Key Concepts and Definitions:**

*   **Manipulator:** A mechanical arm that can be programmed to perform tasks such as welding, painting, assembly, and material handling.
*   **End-Effector:** The tool attached to the end of the manipulator's arm, designed for a specific task (e.g., gripper, welding torch, paint sprayer).
*   **Degrees of Freedom (DOF):** The number of independent ways a manipulator can move. For a manipulator, DOF typically refers to the number of actuated joints.
    *   **Joints:** The movable connections between links of the manipulator. Common types include:
        *   **Revolute Joint:** Allows rotational motion (like a human elbow or wrist).
        *   **Prismatic Joint:** Allows linear sliding motion (like a piston).
*   **Workspace:** The set of all points in space that the manipulator's end-effector can reach.
*   **Kinematics:** The study of motion without considering the forces that cause it. Forward kinematics determines the position and orientation of the end-effector given the joint angles. Inverse kinematics determines the joint angles required to achieve a desired end-effector pose. (Relevant to **CO2: Obtain forward and inverse kinematic models of robotic manipulators - K3**)

#### **1.2 Types of Manipulators (Based on DOF and Configuration):**

*   **Articulated Robots:** Feature a series of revolute joints, resembling a human arm. They offer high flexibility and reach.
    *   *Example:* Industrial robots used in car manufacturing for welding and painting.
    *   *Reference:* Schilling, "Fundamentals of Robotics – Analysis and Control" (Prentice Hall of India, 1996) discusses articulated robot kinematics.
*   **Cylindrical Robots:** Have a prismatic joint for vertical movement and a revolute joint for rotation around a vertical axis, along with a revolute joint for arm extension/retraction. Their workspace is cylindrical.
    *   *Example:* Early pick-and-place operations.
*   **Cartesian Robots (Gantry Robots):** Use prismatic joints along three perpendicular axes (X, Y, Z). They have a rectangular workspace.
    *   *Example:* CNC machines, 3D printers, pick-and-place operations in controlled environments.
    *   *Reference:* Craig, "Introduction to Robotics (Mechanics and Control)" (Pearson Education Asia, 2002) covers the kinematic modeling of Cartesian robots.
*   **SCARA Robots (Selective Compliance Assembly Robot Arm):** Primarily use revolute joints for horizontal plane movement and a prismatic joint for vertical movement. They are rigid in the vertical direction but compliant in the horizontal plane, making them ideal for assembly tasks.
    *   *Example:* Electronics assembly, pick-and-place on a flat surface.
*   **Spherical Robots (Polar Robots):** Combine revolute and prismatic joints. Their base allows rotation, a prismatic joint provides linear extension, and another revolute joint allows for pitching motion. Their workspace is spherical.
    *   *Example:* Older welding and material handling applications.
*   **Delta Robots (Parallel Robots):** Feature multiple arms connected to a single base, with actuators typically located at the base. This parallel kinematic structure offers high speed and precision.
    *   *Example:* High-speed pick-and-place in the food and pharmaceutical industries.
    *   *Reference:* Ghoshal, "Robotics-Fundamental concepts and analysis" (Oxford University Press) provides insights into advanced manipulator configurations like parallel robots.

#### **1.3 Applications of Manipulators:**

*   Industrial Automation (welding, painting, assembly, material handling)
*   Medical Surgery (robotic-assisted surgery)
*   Aerospace (component assembly)
*   Logistics and Warehousing

#### **1.4 Important Points to Remember:**

*   The number of DOF is crucial for a manipulator's flexibility and task capability.
*   End-effector selection is task-dependent.
*   Kinematic modeling is essential for control and planning.

---

### **2. Mobile Robots**

Mobile robots are designed to move around in their environment, interacting with it and performing tasks that require mobility.

#### **2.1 Key Concepts and Definitions:**

*   **Mobility:** The ability to move and navigate through an environment.
*   **Localization:** Determining the robot's position and orientation within a known map or environment.
*   **Mapping:** Creating a representation of the robot's environment.
*   **Path Planning:** Determining a sequence of movements from a starting point to a goal point, often while avoiding obstacles. (Relevant to **CO3: Plan trajectories in joint space & Cartesian space and avoid obstacles while robots are in motion - K4, K5**)
*   **Odometry:** Estimating the robot's position based on its wheel rotations or leg movements.

#### **2.1.1 Wheeled Robots:**

Wheeled robots use wheels for locomotion. They are generally efficient, fast, and simple to control for planar movement.

*   **Key Concepts:**
    *   **Drive System:** How the wheels are powered (e.g., differential drive, Ackerman steering).
    *   **Steering Mechanism:** How the robot changes direction.
    *   **Wheel Configuration:** The number and arrangement of wheels.

*   **Types of Wheeled Robots:**
    *   **Differential Drive:** Two independently controlled wheels on a common axis. Steering is achieved by varying the speed of each wheel.
        *   *Example:* Roomba vacuum cleaner, many indoor service robots.
        *   *Reference:* Siegwart, "Introduction to Autonomous Mobile Robots" (Cambridge, Mass.: MIT Press, Second Edition) provides detailed information on differential drive kinematics.
    *   **Ackermann Steering:** Similar to car steering, with steerable front wheels.
        *   *Example:* Autonomous vehicles, some outdoor robots.
    *   **Omnidirectional Wheels (Mecanum Wheels):** Wheels with rollers mounted on their circumference, allowing movement in any direction (forward, backward, sideways, and rotation) from a single platform.
        *   *Example:* Robots requiring high maneuverability in tight spaces, like some warehouse robots.
    *   **Tricycle Drive:** One steerable wheel and two fixed drive wheels.
        *   *Example:* Some older automated guided vehicles (AGVs).

*   **Advantages of Wheeled Robots:**
    *   Energy efficient on smooth surfaces.
    *   High speed.
    *   Relatively simple control.

*   **Disadvantages of Wheeled Robots:**
    *   Limited ability to traverse rough terrain or obstacles.
    *   Can get stuck on uneven surfaces.

#### **2.1.2 Legged Robots:**

Legged robots use limbs (legs) to move. They offer greater versatility in traversing challenging terrains.

*   **Key Concepts:**
    *   **Gait:** The pattern of leg movements used for locomotion.
    *   **Leg Configuration:** Number of legs (bipedal, quadrupedal, hexapedal, etc.) and their joint arrangements.
    *   **Stability:** Maintaining balance during movement.

*   **Types of Legged Robots:**
    *   **Bipedal Robots:** Have two legs. Mimic human locomotion but are inherently unstable and require sophisticated balance control.
        *   *Example:* ASIMO (Honda), Atlas (Boston Dynamics).
        *   *Reference:* Mittal, "Robotics and Control" (Tata McGraw Hill, New Delhi, 2003) discusses the dynamics and control of legged robots.
    *   **Quadrupedal Robots:** Have four legs. More stable than bipeds, can traverse varied terrain.
        *   *Example:* BigDog, Spot (Boston Dynamics).
    *   **Hexapedal Robots:** Have six legs. Offer high stability as they can always maintain at least three points of contact with the ground.
        *   *Example:* Insect-like robots for exploration.

*   **Advantages of Legged Robots:**
    *   Excellent for navigating unstructured and uneven terrain.
    *   Can step over obstacles.
    *   Can change their stance for stability.

*   **Disadvantages of Legged Robots:**
    *   Complex mechanics and control.
    *   Lower speed and energy efficiency compared to wheeled robots on smooth surfaces.
    *   Dynamic instability can be a challenge.

#### **2.2 Applications of Mobile Robots:**

*   **Wheeled:** Warehouse automation, delivery services, surveillance, cleaning, exploration on flat surfaces.
*   **Legged:** Search and rescue, disaster response, planetary exploration, inspection in hazardous environments.

#### **2.3 Important Points to Remember:**

*   The choice between wheeled and legged robots depends on the operating environment.
*   Mobile robot operation relies heavily on localization, mapping, and path planning.

---

### **3. Aerial Robots (UAVs - Unmanned Aerial Vehicles)**

Aerial robots are robots capable of flight. They are primarily used for tasks requiring aerial observation, data collection, or manipulation from an elevated position.

#### **3.1 Key Concepts and Definitions:**

*   **Unmanned Aerial Vehicle (UAV):** Commonly known as a drone.
*   **Aerodynamics:** The study of how air interacts with moving objects.
*   **Flight Control:** Systems that manage the robot's orientation, altitude, and trajectory in the air.
*   **Navigation:** Determining the robot's position and controlling its movement in three-dimensional space.
*   **Payload:** The equipment carried by the aerial robot (e.g., cameras, sensors, grippers).

#### **3.2 Types of Aerial Robots:**

*   **Fixed-Wing UAVs:** Resemble traditional airplanes with wings that generate lift.
    *   *Advantages:* High endurance, speed, and payload capacity. Efficient for long-distance flights.
    *   *Disadvantages:* Require runways or launch/recovery systems, cannot hover, less maneuverable at low speeds.
    *   *Example:* Military reconnaissance drones, long-range mapping drones.
*   **Rotorcraft UAVs (Multi-rotor Drones):** Use multiple rotors (propellers) to generate lift and control movement.
    *   **Multi-rotor (e.g., Quadcopters, Hexacopters, Octocopters):** The most common type. Achieves lift and directional control by varying the speed of individual rotors.
        *   *Advantages:* Vertical Take-Off and Landing (VTOL), hovering capability, high maneuverability, no need for runways.
        *   *Disadvantages:* Shorter endurance and lower speed compared to fixed-wing, susceptible to wind.
        *   *Example:* Photography drones, delivery drones, inspection drones.
        *   *Reference:* Deb, "Robotics Technology and Flexible Automation" (Second Edition) may touch upon the operational aspects of different robot types.
    *   **Single-Rotor (Helicopter-like):** Use a main rotor and a tail rotor for control.
        *   *Advantages:* Can carry heavier payloads than multi-rotors, longer endurance.
        *   *Disadvantages:* Mechanically complex, require more maintenance.
        *   *Example:* Larger unmanned helicopters for surveillance.
*   **Hybrid UAVs:** Combine features of fixed-wing and rotorcraft designs to leverage the advantages of both.
    *   *Example:* Tilt-rotor drones or drones with wings and tilting rotors for VTOL and forward flight.

#### **3.3 Applications of Aerial Robots:**

*   **Photography and Videography:** Aerial shots for film, media, and real estate.
*   **Surveillance and Monitoring:** Border patrol, security, traffic monitoring, environmental monitoring.
*   **Inspection:** Infrastructure inspection (bridges, wind turbines, power lines), agricultural monitoring.
*   **Delivery:** Package delivery in remote or congested areas.
*   **Search and Rescue:** Locating missing persons in difficult terrain.
*   **Mapping and Surveying:** Creating detailed maps and 3D models of areas.
*   **Agriculture:** Crop monitoring, spraying, and precision farming.

#### **3.4 Important Points to Remember:**

*   Aerial robots are primarily defined by their mode of flight.
*   The choice of aerial robot depends on mission duration, payload, maneuverability requirements, and operating environment.
*   Flight control and navigation are critical aspects of aerial robot operation.

---

### **Connecting to Course Outcomes:**

*   **CO1 (K2):** This entire module directly addresses this outcome by introducing and categorizing different types of robots (manipulators, wheeled, legged, aerial) along with their basic specifications and applications.
*   **CO2 (K3):** While this topic focuses on types, the underlying structures of manipulators (joints, links) are the basis for kinematic modeling, which is the next step. The variety of manipulators discussed implicitly highlights the differences in their kinematic challenges.
*   **CO3 (K4, K5):** Mobile robots (wheeled and legged) are central to path planning and obstacle avoidance. The mobility aspect necessitates these capabilities for successful operation. Aerial robots also require sophisticated navigation and trajectory planning.
*   **CO4 (K4, K6):** The dynamic behavior and control of manipulators are heavily influenced by their type and configuration. Understanding the structure of different manipulators lays the groundwork for dynamic modeling and controller design.
*   **CO5 (K4):** This topic is foundational for CO5 as it provides the basic building blocks. By understanding the capabilities and limitations of each robot type, one can then choose the appropriate configuration and list technical specifications for a given application. For instance, if an application requires traversing rough terrain, a legged robot might be chosen over a wheeled one, leading to specific requirements for leg articulation and gait control.

---

### **Practice Questions:**

1.  **Question:** An industrial robot used for painting car bodies typically requires high reach and the ability to move its end-effector in complex paths. Which type of manipulator would be most suitable for this task and why?
    *   **Answer:** An articulated robot would be most suitable. Its multiple revolute joints mimic the human arm's flexibility, allowing it to reach various positions and orientations within the car body's complex geometry. Its ability to achieve a high number of degrees of freedom also enables intricate painting paths. (Relates to CO1, CO5)

2.  **Question:** You need a robot to transport items quickly and efficiently across a smooth, flat factory floor. Which mobility platform (wheeled or legged) would you choose, and what specific type of wheeled robot might be advantageous for maneuverability in narrow aisles?
    *   **Answer:** A wheeled robot would be more efficient for smooth, flat surfaces due to its higher speed and energy efficiency. For maneuverability in narrow aisles, a robot with omnidirectional wheels (e.g., Mecanum wheels) would be advantageous, as it can move sideways and rotate in place without changing its forward orientation. (Relates to CO1, CO5)

3.  **Question:** A company wants to inspect the structural integrity of bridges without needing to land. What type of aerial robot would be most appropriate for this task, and why?
    *   **Answer:** A multi-rotor aerial robot (like a quadcopter) would be most appropriate. Its ability to hover allows for close inspection of specific bridge components, and its vertical take-off and landing (VTOL) capability eliminates the need for a runway, making it practical for deployment at various bridge locations. (Relates to CO1, CO5)

4.  **Question:** Differentiate between the primary advantages and disadvantages of legged robots versus wheeled robots.
    *   **Answer:**
        *   **Legged Robots:**
            *   *Advantages:* Excellent for traversing rough, unstructured terrain; can step over obstacles; adaptable stance for stability.
            *   *Disadvantages:* Mechanically complex; lower speed and energy efficiency on smooth surfaces; sophisticated control required for balance.
        *   **Wheeled Robots:**
            *   *Advantages:* High speed and energy efficiency on smooth surfaces; simpler control; widely used in industrial settings.
            *   *Disadvantages:* Limited ability to traverse rough terrain or overcome significant obstacles; can get stuck easily. (Relates to CO1, CO5)

5.  **Question:** What is the main functional difference between a SCARA robot and a Cartesian robot in terms of their compliance?
    *   **Answer:** A SCARA robot is designed to be selectively compliant, meaning it is rigid in the vertical (Z) direction but compliant (flexible) in the horizontal (X-Y) plane. This makes it ideal for insertion tasks where components need to be fitted precisely. A Cartesian robot, using prismatic joints along X, Y, and Z axes, is generally rigid in all directions, offering high precision and predictability but less inherent compliance for insertion tasks. (Relates to CO1)

---

### **Key Takeaways:**

*   Robots are categorized based on their structure and mobility: Manipulators (arms), Mobile Robots (wheeled, legged), and Aerial Robots (drones).
*   Each robot type has specific advantages and disadvantages, making them suitable for different applications.
*   Understanding the degrees of freedom and joint types is crucial for manipulators.
*   Mobile robots require capabilities like localization, mapping, and path planning.
*   Aerial robots are distinguished by their flight mechanisms (fixed-wing, rotorcraft).
*   The choice of robot type is a critical first step in robotic system design and application.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
