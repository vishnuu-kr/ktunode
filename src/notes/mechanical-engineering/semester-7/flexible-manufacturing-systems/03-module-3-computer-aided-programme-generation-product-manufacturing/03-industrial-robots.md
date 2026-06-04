---
title: "Industrial Robots"
subject: "FLEXIBLE MANUFACTURING SYSTEMS"
module: "Module 3: Computer aided programme generation & Product Manufacturing"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804464127"
status: "completed"
scrapedAt: "2026-05-20T18:13:27.140Z"
---
# Flexible Manufacturing Systems: Module 3 - Computer-Aided Programme Generation & Product Manufacturing

## Topic: Industrial Robots

This module delves into the critical role of industrial robots in modern manufacturing, particularly within the context of Flexible Manufacturing Systems (FMS). We will explore their fundamental principles, applications, programming, and integration, directly supporting our understanding of computer-aided program generation and product manufacturing.

### 1. Introduction to Industrial Robots

*   **Definition:** An industrial robot is a programmable, multi-functional manipulator designed to move materials, parts, tools, or specialized devices through variable programmed motions for the performance of a variety of tasks. (Groover, 2008)
*   **Purpose in FMS:** Industrial robots are the "hands" of FMS, providing flexibility in handling, assembling, processing, and inspecting parts, thereby enabling rapid product changeovers and efficient automation.
*   **Historical Context:** Early industrial robots were primarily used for simple pick-and-place operations. Modern robots are highly sophisticated, capable of complex tasks, and integrated with advanced sensing and control systems.

### 2. Classification of Industrial Robots

Robots can be classified based on various criteria:

#### 2.1. Based on Mechanical Structure/Configuration:

*   **Cartesian Robots (Gantry Robots):**
    *   **Description:** Utilizes three prismatic (linear) joints, usually arranged mutually perpendicular. Movement is along X, Y, and Z axes.
    *   **Advantages:** High accuracy, good for large work envelopes, simple programming.
    *   **Disadvantages:** Limited speed, can be bulky.
    *   **Example:** Loading/unloading CNC machines, material handling in a linear path.
    *   **Reference:** Luggen (1991) discusses the kinematic chains of different robot types.
*   **Cylindrical Robots:**
    *   **Description:** Combines one rotary joint (base rotation) and two prismatic joints.
    *   **Advantages:** Good reach in a cylindrical work envelope, relatively simple structure.
    *   **Disadvantages:** Limited dexterity, potential for joint collision.
    *   **Example:** Small assembly operations, machine tending.
*   **Spherical Robots (Polar Robots):**
    *   **Description:** Utilizes a rotary base, a prismatic (telescopic) arm, and a rotary wrist.
    *   **Advantages:** Large work envelope, can reach overhead.
    *   **Disadvantages:** Accuracy decreases with reach, complex kinematics.
    *   **Example:** Welding, palletizing.
*   **Articulated Robots (Revolute Robots):**
    *   **Description:** Consists of a series of rotary joints, mimicking the human arm (shoulder, elbow, wrist). Typically 4 to 6 axes.
    *   **Advantages:** High dexterity, flexible reach, can reach around obstacles.
    *   **Disadvantages:** Complex kinematics, can be computationally intensive to program.
    *   **Example:** Welding, painting, assembly, material handling. Most common type in FMS.
    *   **Reference:** Shivanand, Benal, & Koti (2006) likely provides detailed descriptions of these configurations.
*   **SCARA Robots (Selective Compliance Assembly Robot Arm):**
    *   **Description:** Two parallel rotary joints providing selective compliance in the horizontal plane, with a prismatic Z-axis.
    *   **Advantages:** High speed and accuracy for horizontal movements, suitable for assembly.
    *   **Disadvantages:** Limited vertical dexterity.
    *   **Example:** Pick-and-place, assembly of PCBs, screw driving.
*   **Delta Robots (Parallel Robots):**
    *   **Description:** Multiple arms connected to a common base and a mobile platform.
    *   **Advantages:** Extremely high speed and acceleration, good for pick-and-place of light objects.
    *   **Disadvantages:** Limited payload, smaller work envelope.
    *   **Example:** High-speed packaging, sorting, food processing.

#### 2.2. Based on Motion:

*   **Continuous Path Robots:** Can be programmed to follow a continuous path, allowing for smooth motion like welding or painting.
*   **Point-to-Point Robots:** Programmed to move from one discrete point to another. Suitable for pick-and-place operations.

#### 2.3. Based on Energy Source:

*   **Electric Robots:** Most common, powered by electric motors (DC and AC).
*   **Hydraulic Robots:** Use hydraulic fluid for power; suitable for heavy payloads but can be prone to leaks.
*   **Pneumatic Robots:** Use compressed air; generally simpler and cheaper, but with less precision and speed.

#### 2.4. Based on Control System:

*   **Non-servo Robots:** Simple on/off control, limited to end-point positioning.
*   **Servo Robots:** Use servomotors for precise control of joint positions and speeds.

**Important Point to Remember:** The choice of robot configuration depends heavily on the specific task requirements, payload, speed, accuracy, and work envelope needed within the FMS.

### 3. Components of an Industrial Robot

*   **Manipulator:** The mechanical structure of the robot, consisting of links, joints, and end-effector.
    *   **Links:** Rigid bodies connecting the joints.
    *   **Joints:** Provide relative motion between links. Common types include revolute (rotary) and prismatic (linear).
    *   **End-Effector:** The tool or device attached to the end of the manipulator arm to interact with the workpiece or environment (e.g., gripper, welding gun, paint sprayer).
*   **Controller:** The "brain" of the robot. It houses the computer, memory, and interface electronics.
    *   **Robot Control Unit (RCU):** Processes sensor data, executes programs, and sends commands to the actuators.
    *   **Teach Pendant:** A handheld device used for programming, jogging the robot, and monitoring its status.
*   **Sensors:** Devices that provide feedback to the controller about the robot's state and its environment.
    *   **Internal Sensors:** Encoders (measure joint angles), tachometers (measure joint speeds).
    *   **External Sensors:** Vision systems (cameras), force/torque sensors, proximity sensors, tactile sensors.
*   **Power Source:** Provides energy to operate the robot's actuators (motors).

**Reference:** Kalpakjin (1995) provides a comprehensive overview of manufacturing system components, including robots.

### 4. Robot Programming

Programming is crucial for enabling robots to perform tasks within an FMS. This directly relates to **CO3: Apply the knowledge of CAD and CAM considerations in planning and implementing FMS.**

#### 4.1. Methods of Robot Programming:

*   **Lead-by-demonstration (LBD) / Teach Pendant Programming:**
    *   **Description:** The robot is manually moved (jogged) to various points in its workspace, and these points are recorded as part of the program. This is the most common method for point-to-point operations.
    *   **Advantages:** Intuitive, no need for complex coding, quick for simple tasks.
    *   **Disadvantages:** Time-consuming for complex paths, requires operator presence, limited by human dexterity.
    *   **Reference:** Luggen (1991) likely discusses various programming techniques.
*   **Online Programming:** Programming performed while the robot is connected to its controller and actively controlling its movements.
*   **Offline Programming:**
    *   **Description:** The robot program is created using specialized software on a computer, often linked with CAD models of the robot and its environment.
    *   **Advantages:** Reduces robot downtime, allows for complex path planning, simulation and collision detection can be performed beforehand.
    *   **Disadvantages:** Requires sophisticated software, needs accurate geometric models.
    *   **Integration with CAD/CAM:**
        *   **CAD:** Robot models and workspace geometry can be imported into CAM software for simulation and path planning. This allows for virtual testing of robot reachability and collision avoidance before physical implementation.
        *   **CAM:** Generates robot motion trajectories based on part geometry and processing requirements (e.g., welding paths, machining tool paths).
    *   **Example:** Using SolidWorks or CATIA for robot simulation and then generating motion paths for a welding robot.
    *   **Reference:** Maleki (1991) likely touches upon the integration of robots with CAD/CAM systems.
*   **Textual Programming:**
    *   **Description:** Robot programs are written using a specific robot programming language (e.g., RAPID for ABB, KUKA Robot Language).
    *   **Advantages:** Allows for logic, control flow, and complex calculations.
    *   **Disadvantages:** Requires programming expertise.
*   **Sensory-Based Programming:**
    *   **Description:** Robots use sensor feedback (e.g., vision, force) to adapt their movements and react to environmental changes during operation. This is crucial for tasks like part insertion or working with variations in workpiece position.

#### 4.2. Robot Programming Languages:

*   **Purpose:** To command the robot's movements, control its end-effector, and manage its interaction with the environment.
*   **Key Features:**
    *   **Motion Commands:** `MOVEJ` (joint motion), `MOVEL` (linear motion).
    *   **End-Effector Control:** `OPEN`, `CLOSE` for grippers.
    *   **Conditional Statements:** `IF-THEN-ELSE` for decision-making.
    *   **Loops:** `FOR`, `WHILE` for repetitive tasks.
    *   **Subroutines/Functions:** For modular programming.
    *   **I/O Handling:** Reading sensor inputs and writing to actuators.

**Important Point to Remember:** Offline programming, coupled with CAD/CAM integration, is essential for maximizing the flexibility and efficiency of robots in FMS, minimizing downtime and ensuring complex tasks are executed reliably.

### 5. Robot Applications in FMS

Robots are versatile and find numerous applications in FMS, supporting **CO1: Understand the basic components, layout configurations, and functions of Flexible Manufacturing Systems (FMS).**

*   **Material Handling:**
    *   **Pick-and-Place:** Transferring parts between workstations, machines, and conveyors.
    *   **Palletizing/Depalletizing:** Loading and unloading pallets with parts.
    *   **Loading/Unloading Machines:** Feeding raw materials and removing finished parts from CNC machines, injection molding machines, etc. (Supports **CO2: Unattended Machining**).
*   **Assembly Operations:**
    *   **Component Insertion:** Placing components onto circuit boards or into assemblies.
    *   **Fastening:** Screwing, riveting.
    *   **Joining:** Sealing, press-fitting.
*   **Welding:**
    *   **Spot Welding:** Commonly used in automotive assembly.
    *   **Arc Welding:** For joining metal parts.
*   **Painting and Coating:**
    *   **Spray Painting:** Uniform application of paint.
*   **Machining Operations:**
    *   **Drilling, Deburring, Grinding:** While specialized machines are often used, robots can perform these tasks in flexible workcells.
*   **Inspection and Quality Control:**
    *   **Part Inspection:** Using vision systems or touch probes to verify dimensions and features.
*   **Tool Changing:**
    *   **Automatic Tool Changers:** Robots can handle the exchange of tools for multi-task machines. (Supports **CO4: Tool Management**).

**Example:** In an FMS for automotive component manufacturing, a SCARA robot might be used for high-speed pick-and-place of electronic components onto a chassis, while an articulated robot performs arc welding on the chassis structure.

### 6. Robot Integration in FMS

*   **Interfacing with Other Systems:**
    *   **Cell Controllers:** Robots are often managed by a cell controller that coordinates their activities with other machines and AGVs.
    *   **Material Handling Systems:** Robots work in conjunction with conveyors, AGVs, and AS/RS to move parts. (Supports **CO4: Automated Material Movement**).
    *   **Machine Tools:** Robots load/unload CNC machines, receive signals from machines about cycle completion.
*   **Sensors for Enhanced Functionality:**
    *   **Vision Systems:** For part identification, location, and inspection.
    *   **Force/Torque Sensors:** For compliant assembly tasks and detecting collisions.
*   **Workcell Design:**
    *   **Layout:** Considerations for robot reach, safety zones, and workflow.
    *   **Safety:** Implementing safety barriers, light curtains, and interlocks to protect human operators and prevent damage.
*   **Data Exchange:** Robots communicate with higher-level manufacturing execution systems (MES) and enterprise resource planning (ERP) systems for production scheduling and data reporting.

**Important Point to Remember:** Seamless integration of robots with other FMS components is crucial for achieving true flexibility and operational efficiency.

### 7. Robot Performance Characteristics

*   **Work Envelope:** The total space that the robot can reach.
*   **Payload:** The maximum weight the robot can carry at its end-effector while maintaining specified performance.
*   **Speed:** The maximum linear or angular velocity of the robot's axes.
*   **Accuracy:** How close the robot can move to a commanded position.
*   **Repeatability:** The ability of the robot to return to the same point repeatedly. This is often more critical than absolute accuracy in manufacturing tasks.
*   **Resolution:** The smallest increment of movement that the robot can detect or execute.

### 8. Safety Considerations for Industrial Robots

*   **Pinch Points:** Areas where moving robot parts can trap objects or people.
*   **Robot Reach:** The potential for the robot to move outside its intended workspace.
*   **End-Effector Hazards:** Hazards associated with the tool attached to the robot (e.g., sharp edges, heat).
*   **Safety Features:**
    *   **Guarding:** Physical barriers, cages, and enclosures.
    *   **Interlocks:** Safety switches that stop the robot when guards are opened.
    *   **Light Curtains:** Infrared beams that trigger a stop if broken.
    *   **Emergency Stop Buttons:** Readily accessible for immediate shutdown.
    *   **Slow Speed Operation:** During programming and setup.
    *   **Training:** Ensuring operators are properly trained on robot operation and safety procedures.

### 9. Practice Questions and Exercises

**Question 1:**
Describe the key differences between a Cartesian robot and an articulated robot, and provide a typical application for each within an FMS. (Relates to CO1, CO2)

**Answer 1:**
*   **Cartesian Robot:**
    *   **Structure:** Three linear prismatic joints, typically orthogonal (X, Y, Z axes).
    *   **Applications:** Machine tending (loading/unloading CNC machines), precise linear material transport.
    *   **Key Feature:** Simple kinematics, good for large, rectangular workspaces.
*   **Articulated Robot:**
    *   **Structure:** Series of rotary joints (like human arm: shoulder, elbow, wrist), typically 4-6 axes.
    *   **Applications:** Welding, painting, complex assembly, general pick-and-place where dexterity is needed.
    *   **Key Feature:** High dexterity and flexibility, can reach around obstacles.

**Question 2:**
Why is offline programming with CAD/CAM integration considered advantageous for robots in FMS? Explain the role of both CAD and CAM in this process. (Relates to CO3)

**Answer 2:**
Offline programming with CAD/CAM integration offers several advantages for robots in FMS:
*   **Reduced Downtime:** The robot can continue production while new programs are developed and tested virtually.
*   **Improved Accuracy and Reliability:** Complex paths can be meticulously planned and simulated, minimizing errors.
*   **Collision Detection:** CAD models of the robot and its environment allow for virtual collision checking, preventing damage to the robot and workspace.
*   **Optimization:** Motion paths can be optimized for speed and efficiency.
*   **Role of CAD:** Provides the geometric models of the robot, workpiece, and surrounding environment, enabling virtual simulation and reachability analysis.
*   **Role of CAM:** Generates the precise tool paths or motion trajectories for the robot based on manufacturing operations (e.g., welding torch path, deburring path).

**Question 3:**
List at least four types of sensors that can be integrated with industrial robots and explain their benefit in an FMS context. (Relates to CO4, CO1)

**Answer 3:**
1.  **Vision Sensors (Cameras):**
    *   **Benefit:** Part identification, location, orientation, and inspection. Enables robots to pick parts from bins or conveyors even if their position is not perfectly known, or to verify the quality of a processed part.
2.  **Force/Torque Sensors:**
    *   **Benefit:** Compliant assembly (e.g., inserting a peg into a hole), detecting unexpected contact or resistance, performing tasks requiring controlled pressure (e.g., polishing).
3.  **Proximity Sensors:**
    *   **Benefit:** Detecting the presence of objects or the robot's proximity to surfaces, aiding in safe stopping or precise positioning.
4.  **Tactile Sensors:**
    *   **Benefit:** Providing detailed information about contact, such as pressure distribution or surface texture, useful for delicate handling or surface inspection.

**Question 4:**
What is meant by "repeatability" in the context of industrial robots, and why is it often more important than absolute accuracy for many FMS tasks? (Relates to CO1)

**Answer 4:**
*   **Repeatability:** Refers to the robot's ability to return to a taught or programmed position consistently. It measures the variation in the robot's endpoint position over multiple movements to the same target.
*   **Importance:** In FMS, tasks like loading/unloading machines, welding, or assembly often involve repetitive motions to precise locations relative to a fixture or part. If the robot can reliably return to the same point every time (high repeatability), even if that point is slightly offset from its theoretical command position (lower absolute accuracy), the task can still be performed successfully. High repeatability ensures consistency in operations, which is critical for efficient production.

### 8. Key Takeaways and Important Points to Remember

*   Industrial robots are essential for the flexibility and automation in FMS, enabling a wide range of tasks.
*   The choice of robot configuration (Cartesian, Articulated, SCARA, etc.) is dictated by the application's demands for reach, speed, accuracy, and payload.
*   Programming methods, especially offline programming integrated with CAD/CAM, are vital for efficient robot utilization and minimizing production interruptions.
*   Robots are not standalone units; their successful integration with other FMS components (material handling, sensors, controllers) is crucial.
*   Robot safety is paramount and requires careful design, implementation of safety features, and proper operator training.
*   Repeatability is often a more critical performance characteristic than absolute accuracy in many FMS applications.

This concludes our detailed study of industrial robots within Module 3. Understanding these concepts will provide a strong foundation for appreciating how automation and computer-aided programming drive the flexibility of modern manufacturing systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
