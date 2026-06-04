---
title: "Exercises on industrial robots- manual and programmed path planning"
subject: "MANUFACTURING TECHNOLOGY LAB"
module: "Module 1: Exercises on lathe: "
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1451d0cf4804463363"
status: "completed"
scrapedAt: "2026-05-20T17:54:29.249Z"
---
# MANUFACTURING TECHNOLOGY LAB - MODULE 1: EXERCISES ON LATHE

## TOPIC: EXERCISES ON INDUSTRIAL ROBOTS - MANUAL AND PROGRAMMED PATH PLANNING

### 1. INTRODUCTION TO INDUSTRIAL ROBOTS

**1.1 Definition:**
An industrial robot is a programmable, multi-functional manipulator designed to move materials, parts, tools, or specialized devices through variable programmed motions for the performance of a variety of tasks. (Koren, 2014)

**1.2 Key Characteristics of Industrial Robots:**
*   **Programmability:** Can be programmed to perform different tasks.
*   **Multi-functionality:** Can perform a variety of tasks by changing end-effectors or tooling.
*   **Automatic Operation:** Operates automatically without human intervention for the programmed tasks.
*   **Manipulation:** Possesses a mechanical arm or manipulator with joints and links.
*   **Motion:** Capable of moving along multiple axes or degrees of freedom (DOF).

**1.3 Importance in Manufacturing:**
*   **Increased Productivity:** Can operate continuously and at higher speeds than humans.
*   **Improved Quality & Consistency:** Reduces human error, leading to more uniform product quality.
*   **Enhanced Safety:** Can perform hazardous tasks, reducing worker exposure to dangerous environments.
*   **Flexibility:** Can be reprogrammed for different tasks and product variations.
*   **Cost Reduction:** Reduces labor costs over the long term.

**1.4 Types of Industrial Robots:**
*   **Articulated Robots:** Have a series of rotary joints, similar to a human arm (e.g., a shoulder, elbow, and wrist). Most common type.
*   **Cylindrical Robots:** Have a vertical column and a rotating base.
*   **Cartesian (or Gantry) Robots:** Move along three linear axes (X, Y, Z).
*   **SCARA Robots (Selective Compliance Assembly Robot Arm):** Primarily used for assembly tasks, with compliant motion in the horizontal plane and stiff motion in the vertical plane.
*   **Delta Robots:** Parallel robots with three arms, known for high speed and precision, often used for pick-and-place.
*   **Collaborative Robots (Cobots):** Designed to work alongside humans safely.

### 2. ROBOT MANIPULATORS AND COORDINATE SYSTEMS

**2.1 Robot Manipulator Components:**
*   **Base:** The stationary part of the robot.
*   **Links:** Rigid segments connecting the joints.
*   **Joints:** Allow relative motion between links. Can be:
    *   **Rotary Joints:** Provide rotational motion (e.g., waist, shoulder, elbow).
    *   **Prismatic Joints:** Provide linear motion (e.g., for telescoping arm sections).
*   **End-Effector (Tooling):** The device attached to the robot's wrist that interacts with the workpiece or environment (e.g., gripper, welding gun, paint sprayer).
*   **Wrist:** Provides rotational and bending capabilities to the end-effector.

**2.2 Degrees of Freedom (DOF):**
The number of independent parameters that define the configuration of the robot manipulator. A minimum of 6 DOF is generally required to position and orient an object in 3D space.

**2.3 Coordinate Systems:**
*   **Joint Space:** Defined by the angles of the robot's joints.
*   **Cartesian Space (World Coordinate System):** A fixed, three-dimensional coordinate system defining positions and orientations in the workspace.
*   **Tool Coordinate System:** A coordinate system attached to the end-effector, defining its position and orientation relative to the end-effector's mounting point.

### 3. ROBOT PATH PLANNING

**3.1 Definition:**
Path planning is the process of determining a sequence of movements (a trajectory) for the robot's end-effector to move from a starting point to a destination point while avoiding obstacles and satisfying task constraints.

**3.2 Importance of Path Planning:**
*   **Task Execution:** Enables the robot to perform its intended function (e.g., welding, picking, placing).
*   **Collision Avoidance:** Crucial for safe operation and preventing damage to the robot or workpiece.
*   **Efficiency:** Optimizing paths can reduce cycle times and energy consumption.
*   **Precision:** Ensures the end-effector reaches the target accurately.

### 4. MANUAL PATH PLANNING (TEACHING)

**4.1 Concept:**
In manual path planning, an operator physically guides the robot arm through the desired sequence of movements. The robot's controller records these movements as a series of "teach points" or waypoints.

**4.2 Methods:**
*   **Lead-through Teaching:** The operator grasps the robot's manipulator (often through a special handle or mechanism) and manually moves it through the path. The robot's motors are often de-energized or held loosely to allow this.
*   **Pendant Teaching:** The operator uses a handheld programming pendant with joysticks and buttons to control each joint of the robot and move the end-effector to desired positions.

**4.3 Process:**
1.  **Setup:** Secure the workpiece and end-effector.
2.  **Reach Starting Point:** Manually move the robot to the beginning of the desired path.
3.  **Record Starting Point:** Store this position as the first waypoint.
4.  **Move Along Path:** Manually guide the robot through intermediate points that define the path.
5.  **Record Intermediate Points:** Store these waypoints.
6.  **Reach End Point:** Manually move the robot to the final destination.
7.  **Record End Point:** Store this position as the last waypoint.
8.  **Define Motion Parameters:** Specify speed, acceleration, and interpolation (e.g., linear or joint-based motion) between waypoints.
9.  **Playback:** Run the recorded program to test the path.
10. **Refinement:** Adjust waypoints, speed, and other parameters as needed.

**4.4 Advantages:**
*   **Intuitive and Easy:** Simple for operators with basic understanding of robot movement.
*   **Fast for Simple Tasks:** Can be quicker than programming for short, straightforward paths.
*   **Good for Complex Geometries:** Effective for paths that are difficult to mathematically describe.

**4.5 Disadvantages:**
*   **Tedious for Complex Paths:** Can be time-consuming for long or intricate trajectories.
*   **Lower Precision:** Human guiding can introduce slight inaccuracies compared to precise programmed paths.
*   **Limited Repeatability:** Manual movements might not be perfectly repeatable.
*   **Limited for Off-line Programming:** Requires the robot to be taken out of production for teaching.

**4.6 Textbook Relevance:**
While "Production Technology by HMT" and "Workshop Technology Part I by W. A. J. Chapman" focus on traditional machining, their emphasis on understanding machine operation, tool setting, and achieving desired part features (CO1) directly translates to the principles of manipulating a robot to achieve specific end-effector positions. The understanding of motion and control is fundamental to both.

### 5. PROGRAMMED PATH PLANNING (OFF-LINE PROGRAMMING)

**5.1 Concept:**
In programmed path planning, the robot's trajectory is generated mathematically or using specialized software without directly moving the robot. This is often referred to as off-line programming.

**5.2 Methods:**
*   **Direct Coordinate Input:** Manually entering XYZ coordinates and joint angles for each waypoint.
*   **CAD/CAM Integration:** Using Computer-Aided Design (CAD) and Computer-Aided Manufacturing (CAM) software to define the path based on a 3D model of the part or task. The software then generates the robot program.
*   **Simulation Software:** Advanced software allows users to create a virtual environment, model the robot and workpiece, and design complex paths. This also allows for simulation and collision detection before deploying to the actual robot.

**5.3 Process (General):**
1.  **Create Task Model:** Define the workpiece, robot, and end-effector in a programming environment.
2.  **Define Target Positions:** Specify the start, end, and intermediate points in the robot's workspace (often in Cartesian coordinates).
3.  **Generate Trajectory:** The software calculates the required joint angles and velocities to move the end-effector between these points, adhering to constraints. This often involves:
    *   **Forward Kinematics:** Calculating end-effector position/orientation from joint angles.
    *   **Inverse Kinematics:** Calculating joint angles required to reach a desired end-effector position/orientation.
4.  **Specify Motion Types:**
    *   **Joint Interpolation (or Joint-by-Joint):** Each joint moves independently at its own speed to reach the target joint angle. This results in a curved end-effector path.
    *   **Linear Interpolation (Cartesian Path):** The end-effector moves in a straight line in Cartesian space between two points. This requires coordinated movement of multiple joints.
5.  **Define Parameters:** Set speeds, accelerations, and tool orientations at each waypoint.
6.  **Simulate and Verify:** Run the program in the simulation environment to check for collisions, efficiency, and task completion.
7.  **Download to Robot:** Transfer the generated program to the robot controller for execution.

**5.4 Advantages:**
*   **High Precision and Repeatability:** Programs are based on precise mathematical calculations.
*   **Efficiency for Complex Tasks:** Faster and more accurate for intricate or repetitive paths.
*   **Reduced Robot Downtime:** Programming can be done while the robot is still in production.
*   **Optimized Paths:** Allows for sophisticated path optimization for speed and efficiency.
*   **Collision Detection:** Simulation tools can proactively identify and resolve potential collisions.

**5.5 Disadvantages:**
*   **Requires Specialized Software and Skills:** Needs trained personnel and investment in software.
*   **More Time-Consuming for Simple Paths:** Overkill for very basic tasks.
*   **Model Accuracy:** The accuracy of the generated path depends on the accuracy of the CAD models and robot simulations.

**5.6 Textbook Relevance:**
*   **Numerical Control of Machine Tools by Yoram Koren (2014):** This textbook is highly relevant. CNC machining fundamentally relies on programmed path planning using numerical data. The concepts of tool paths, interpolation (linear, circular), coordinate systems (G-code), and motion control are directly transferable to robot path planning. Understanding CO3 (Programming and manufacturing of complex profiles in CNC machines with high precision) is directly applicable here, as robot path planning for complex tasks shares many underlying principles with CNC programming.
*   **Production Technology by HMT (2017):** While primarily on traditional machines, HMT's emphasis on precision, tool geometry, and achieving specific part features (CO1) underpins the goal of robot path planning – to manipulate the end-effector precisely to achieve desired manufacturing outcomes.
*   **Production Technology by HMT (2017) & Workshop Technology Part I by W. A. J. Chapman (1972):** The understanding of kinematics and how machines achieve motion, as taught in these foundational texts, is essential for grasping how robot joints and links must be coordinated to achieve a desired end-effector path.

### 6. COMPARISON: MANUAL VS. PROGRAMMED PATH PLANNING

| Feature             | Manual Path Planning (Teaching)                     | Programmed Path Planning (Off-line)                       |
| :------------------ | :-------------------------------------------------- | :-------------------------------------------------------- |
| **Method**          | Operator guides robot arm directly                  | Mathematical calculation and software-based generation    |
| **Speed of Setup**  | Fast for simple paths                               | Slower for simple, faster for complex paths               |
| **Precision**       | Moderate, dependent on operator                     | High, based on calculations                               |
| **Repeatability**   | Lower                                               | High                                                      |
| **Robot Downtime**  | High (robot needed for teaching)                    | Low (programming done separately)                         |
| **Complexity**      | Suitable for simpler, intuitive paths               | Handles complex, intricate, and mathematically defined paths |
| **Skill Required**  | Operator skill, spatial awareness                   | Programming skills, software expertise, kinematics understanding |
| **Flexibility**     | Re-teach quickly for minor changes                  | Reprogramming required for significant changes            |
| **Applications**    | Spot welding, simple assembly, painting             | Arc welding, complex assembly, pick-and-place, machining |
| **Cost**            | Lower initial software cost, higher operational cost | Higher initial software/training cost, lower operational cost |

### 7. PRACTICAL EXERCISES AND CONSIDERATIONS

**7.1 Exercise Scenario (Conceptual):**
Imagine a robot needs to weld a seam along a curved edge of a metal part.

*   **Manual Path Planning:** An operator would physically move the robot's welding torch along the seam. They would teach start, end, and possibly intermediate points defining the curve. The robot would then repeat this motion.
*   **Programmed Path Planning:** Using CAD software, the curved seam would be defined. A CAM system or robot programming software would calculate the precise path for the robot's wrist to follow, ensuring a consistent distance and angle of the welding torch relative to the workpiece. This would be downloaded to the robot.

**7.2 Key Learning Outcomes Alignment:**

*   **CO1 (Operate different machine tools...):** Understanding the robot's manipulator as a multi-DOF "machine tool" and how to control its "cutting tool" (end-effector) to produce desired features on a workpiece is central. Both manual and programmed path planning are methods of operating the robot.
*   **CO2 (Apply cutting mechanics...):** While not direct cutting mechanics in the traditional sense, the force and power considerations for moving the robot arm and the forces exerted by the end-effector (e.g., gripper force, welding pressure) relate to mechanics. Understanding path planning helps optimize motion for efficiency, akin to optimizing cutting parameters.
*   **CO3 (Programming and manufacturing of complex profiles in CNC machines...):** Programmed path planning for robots directly mirrors the principles of CNC programming for complex profiles. The ability to define intricate trajectories, manage tool orientation, and achieve high precision is common to both.
*   **CO5 (Gain knowledge on the structure, properties, testing and applications of ferrous and non ferrous metals.):** While not directly about metal properties, the robot's task is often to process these metals (welding, machining, handling). The path planning must consider the material's properties to ensure successful processing (e.g., weld penetration, machining surface finish).

### 8. PRACTICE QUESTIONS WITH ANSWERS

**Question 1:** What is the primary difference between manual and programmed path planning for industrial robots?
**Answer:** Manual path planning involves an operator physically guiding the robot, while programmed path planning uses software to generate the robot's movements mathematically.

**Question 2:** If a robot needs to follow a precisely defined helical path for a machining operation, which path planning method would likely be superior, and why?
**Answer:** Programmed path planning would be superior because it can accurately generate the complex, mathematically defined helical trajectory, ensuring high precision and repeatability, which is difficult to achieve through manual teaching for such a path.

**Question 3:** Which textbook mentioned is most directly relevant to the concepts of programmed path planning and why?
**Answer:** "Numerical Control of Machine Tools by Yoram Koren (2014)" is most relevant because CNC machining involves programmed path planning and motion control, which shares many fundamental principles with robot path planning, especially for complex profiles.

**Question 4:** List two advantages of manual path planning.
**Answer:**
    a) Intuitive and easy to learn.
    b) Fast for simple, short paths.

**Question 5:** List two advantages of programmed path planning.
**Answer:**
    a) High precision and repeatability.
    b) Reduced robot downtime for programming.

### 9. IMPORTANT POINTS TO REMEMBER

*   **Path planning is fundamental to robot task execution.**
*   **Manual teaching is operator-driven, while programmed planning is software-driven.**
*   **Choose the path planning method based on task complexity, precision requirements, and available resources.**
*   **Understanding robot kinematics (how joints translate to end-effector motion) is crucial for programmed path planning.**
*   **Off-line programming offers significant advantages in precision, repeatability, and robot utilization for complex tasks.**
*   **Safety and collision avoidance are paramount in all robot path planning.**

---
**(Note:** The specific exercises performed in the lab would involve hands-on operation of a robot simulator or a physical robot arm. The notes above provide the theoretical foundation and conceptual understanding required for those practical sessions. The textbook references are integrated to show how the foundational knowledge from traditional manufacturing principles supports understanding of robotic automation.)

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
