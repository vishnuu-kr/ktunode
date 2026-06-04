---
title: "point-to-point vs. continuous path planning"
subject: "ROBOTICS"
module: "Module 4: Trajectory Planning"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446425a"
status: "completed"
scrapedAt: "2026-05-20T18:18:53.001Z"
---
# ROBOTICS - Module 4: Trajectory Planning

## Topic: Point-to-Point vs. Continuous Path Planning

This module focuses on how robots move from one point to another in their workspace or joint space. We will explore two fundamental approaches to trajectory planning: **Point-to-Point (PTP)** and **Continuous Path (CP)** planning. Understanding these differences is crucial for selecting the appropriate movement strategy based on the task requirements.

### Learning Outcomes Covered in this Topic:

*   **Understanding the fundamental differences between PTP and CP trajectory planning.** (Directly addressed)
*   **Identifying scenarios where PTP planning is suitable.** (Directly addressed)
*   **Identifying scenarios where CP planning is suitable.** (Directly addressed)
*   **Understanding the implications of each planning method on robot motion and task execution.** (Directly addressed)
*   **Relating trajectory planning to achieving desired end-effector poses (CO2, CO3).** (PTP focuses on poses, CP on intermediate poses and the path between them.)
*   **Considering obstacle avoidance within the context of these planning strategies (CO3).** (Both methods can incorporate obstacle avoidance, but the approach might differ.)

---

### 1. Introduction to Trajectory Planning

Trajectory planning is the process of generating a sequence of desired positions, velocities, and accelerations for the robot's joints or end-effector over time. This ensures smooth, efficient, and safe motion.

*   **Trajectory:** A time-ordered sequence of configurations (positions and orientations) that a robot must follow.
*   **Configuration:** The set of joint variables that define the robot's pose.
*   **Joint Space:** The space of all possible joint variable values.
*   **Task Space / Cartesian Space:** The space of possible end-effector positions and orientations.

---

### 2. Point-to-Point (PTP) Trajectory Planning

**Definition:** Point-to-Point (PTP) trajectory planning involves moving the robot from an initial configuration to a final desired configuration, without specifying or controlling the path the robot takes *between* these two points. The focus is solely on reaching the target pose.

**Key Characteristics:**

*   **Focus on End Poses:** Only the start and end points of the motion are defined.
*   **Path is Implicit/Arbitrary:** The actual path taken by the robot's end-effector (or joints) is not explicitly defined. The robot controller determines the intermediate motion, often prioritizing speed and smoothness in joint space.
*   **Efficiency:** Often faster as it doesn't require complex path calculations between points.
*   **Simplicity:** Easier to implement and computationally less demanding.
*   **Suitable for Non-Continuous Tasks:** Ideal for tasks where the intermediate path is irrelevant, such as picking up an object, placing it, and then moving to the next pick-up location.

**How it Works (Conceptual):**

1.  **Define Start Configuration:** $q_{start}$ (joint angles) or $X_{start}$ (end-effector pose).
2.  **Define End Configuration:** $q_{end}$ (joint angles) or $X_{end}$ (end-effector pose).
3.  **Generate Joint Trajectories:** The robot controller interpolates between $q_{start}$ and $q_{end}$ in joint space, typically using polynomial functions (e.g., cubic or quintic splines) to ensure smooth transitions in velocity and acceleration.
4.  **End-Effector Path:** The path of the end-effector in Cartesian space is a consequence of the joint trajectories and the robot's kinematics. It is generally not controlled directly and can be complex or undesirable.

**Example Scenarios:**

*   **Pick-and-Place Operations:** Moving a robot arm from a pick-up location to a drop-off location. The path the arm takes to get from point A to point B is not critical, as long as it avoids obstacles and reaches the destination.
*   **Welding/Drilling at Specific Points:** Moving the tool to a series of discrete locations for operations.
*   **Assembly Tasks:** Moving components from one position to another.

**Advantages:**

*   Faster execution time.
*   Simpler implementation.
*   Less computational overhead.

**Disadvantages:**

*   End-effector path is not controlled, which can lead to undesirable motion or collisions if not carefully managed.
*   Not suitable for tasks requiring continuous interaction with the environment or precisely following a shape.

**References:**

*   **Schilling, R. J. (1996).** *Fundamentals of Robotics – Analysis and Control.* Discusses joint space interpolation for PTP movements.
*   **Craig, J. J. (2002).** *Introduction to Robotics (Mechanics and Control).* Provides foundational concepts on generating joint-space trajectories for PTP tasks.
*   **Saha, S. K. (2008).** *Introduction to Robotics.* Likely covers PTP motion control and its applications.

---

### 3. Continuous Path (CP) Trajectory Planning

**Definition:** Continuous Path (CP) trajectory planning involves defining and controlling the *exact path* that the robot's end-effector (or tool) must follow in Cartesian space, as well as the timing of that movement. This means specifying intermediate points or a continuous function that the end-effector must trace.

**Key Characteristics:**

*   **Focus on End-Effector Path:** The desired trajectory of the end-effector in Cartesian space is explicitly defined.
*   **Intermediate Points Specified:** Requires defining a series of points or a continuous curve (e.g., line, circle, spline) that the end-effector must follow.
*   **Higher Computational Cost:** Requires solving the inverse kinematics problem for multiple points or along a continuous curve, which can be computationally intensive.
*   **Precision and Control:** Provides precise control over the end-effector's motion.
*   **Suitable for Continuous Tasks:** Ideal for tasks requiring the robot to follow a specific shape or perform continuous operations.

**How it Works (Conceptual):**

1.  **Define Cartesian Path:** A sequence of desired end-effector poses ($X_1, X_2, \dots, X_n$) or a continuous curve in Cartesian space.
2.  **Inverse Kinematics:** For each desired pose $X_i$ in the Cartesian path, the inverse kinematics (IK) problem is solved to find the corresponding joint configuration $q_i$.
3.  **Generate Joint Trajectories:** Joint trajectories are then generated to smoothly interpolate between these calculated joint configurations ($q_1, q_2, \dots, q_n$).
4.  **Timing:** The speed and timing along the Cartesian path must also be controlled to ensure feasible joint velocities and accelerations. This often involves parameterizing the Cartesian path with a time variable.

**Example Scenarios:**

*   **Seam Tracking (Welding, Painting):** The robot's tool must follow a specific weld seam or painted line precisely.
*   **Dispensing (Adhesive, Sealant):** Applying material along a defined path.
*   **Machining/Milling:** Following a contour to shape a workpiece.
*   **Inspection Tasks:** Tracing a surface for inspection.
*   **Drawing/Writing:** Using a pen or marker to draw specific shapes or text.

**Advantages:**

*   Precise control over the end-effector's motion and path.
*   Suitable for tasks requiring following specific shapes or contours.
*   Can ensure smooth, continuous interaction with the environment.

**Disadvantages:**

*   Significantly more computationally intensive due to repeated inverse kinematics calculations.
*   Slower to compute and execute compared to PTP.
*   Requires careful management of joint velocities and accelerations to avoid singularities and ensure smooth execution of the Cartesian path.
*   Potential for issues if the defined Cartesian path leads to the robot encountering singularities or exceeding joint limits.

**References:**

*   **Craig, J. J. (2002).** *Introduction to Robotics (Mechanics and Control).* Likely details inverse kinematics and its application in generating CP trajectories.
*   **Siciliano, B., Sciavicco, L., Villani, L., & Oriolo, G. (2009).** *Robotics Modelling, Planning and Control.* Discusses task-space trajectory generation and control.
*   **Lynch, K. M., & Park, F. C. (2017).** *Modern Robotics Mechanics, Planning and Control.* Offers advanced techniques for path planning and control in task space.

---

### 4. Key Differences Summarized

| Feature              | Point-to-Point (PTP)                     | Continuous Path (CP)                           |
| :------------------- | :--------------------------------------- | :--------------------------------------------- |
| **Primary Goal**     | Reach a target pose.                     | Follow a specific path in Cartesian space.     |
| **Path Control**     | Path is not explicitly defined or controlled. | Path is explicitly defined and controlled.     |
| **Intermediate Pts** | Not specified.                           | Specified as a sequence or a curve.            |
| **Workspace**        | Joint space interpolation is common.     | Cartesian space path definition.               |
| **Inverse Kinematics** | Solved once for the end pose.            | Solved for multiple points or continuously.    |
| **Computational Cost** | Low.                                     | High.                                          |
| **Execution Speed**  | Generally faster.                        | Generally slower.                              |
| **Applications**     | Pick-and-place, discrete tasks.          | Seam tracking, dispensing, machining, drawing. |
| **Complexity**       | Simpler.                                 | More complex.                                  |

---

### 5. Relationship to Course Outcomes

*   **CO1: Familiarise with anatomy, specifications and types of Robots:** Understanding PTP vs. CP is essential for choosing robots suitable for different tasks. A robot designed for PTP tasks might have different requirements than one needing precise CP following.
*   **CO2: Obtain forward and inverse kinematic models of robotic manipulators:** CP planning heavily relies on the inverse kinematics to convert Cartesian path points into joint angles. PTP also uses IK for the final pose, but the intermediate joint space motion is often prioritized.
*   **CO3: Plan trajectories in joint space & Cartesian space and avoid obstacles while robots are in motion:** This topic directly addresses planning in both joint space (implicitly for PTP) and Cartesian space (explicitly for CP). Obstacle avoidance needs to be considered within the framework of the chosen trajectory type. A PTP might plan a quick joint-space detour, while a CP might need to curve around an obstacle in Cartesian space.
*   **CO4: Develop a dynamic model and design the controller for robotic manipulators:** The choice between PTP and CP affects the required controller. CP requires more sophisticated control to maintain the desired Cartesian path, especially under dynamic conditions.
*   **CO5: Choose the appropriate Robotic configuration and list the technical specifications for robots used in different application:** The nature of the task (PTP or CP) will significantly influence the choice of robot configuration (e.g., SCARA, articulated arm) and its specifications (e.g., path accuracy, speed, repeatability).

---

### 6. Practice Questions and Exercises

**Question 1:**
A robot arm is used to pick up screws from a bin and place them into holes on a PCB. Which type of trajectory planning would be most suitable for moving the robot from one screw location to the next hole location? Justify your answer.

**Answer 1:**
Point-to-Point (PTP) trajectory planning would be most suitable. The primary goal is to move the robot's end-effector from a specific pick-up pose to a specific placement pose. The exact path the gripper takes between these two points is not critical, as long as it avoids obstacles and the end poses are reached accurately. PTP is computationally efficient, allowing for faster task completion in high-volume operations like screw insertion.

**Question 2:**
Consider a robot performing a painting task where it needs to apply paint along the edges of a complex geometric shape on a surface. What type of trajectory planning is required? Explain why.

**Answer 2:**
Continuous Path (CP) trajectory planning is required. The robot's tool (paint dispenser) must precisely follow the specified geometric shape on the surface. This means the path in Cartesian space is critical and must be accurately traced. CP planning allows for the definition and control of this exact path, ensuring the paint is applied along the intended contours.

**Question 3:**
What is the main computational difference between PTP and CP trajectory planning?

**Answer 3:**
The main computational difference lies in the requirement for inverse kinematics. CP planning requires solving the inverse kinematics problem for multiple points along the desired Cartesian path (or continuously), which is computationally intensive. PTP planning typically only requires solving the inverse kinematics once for the final target pose, with the intermediate motion often planned directly in joint space.

**Question 4 (Conceptual):**
If a robot is programmed for PTP motion between two points, and the end-effector is a welding torch, what might be a potential issue if the task involves welding along a seam?

**Answer 4:**
The potential issue is that the welding torch will not follow the seam precisely. Since PTP only defines start and end points, the torch might move in a straight line in joint space, resulting in a curved or indirect path in Cartesian space. This would mean the weld seam is not accurately followed, leading to an incomplete or incorrect weld.

---

### 7. Important Points to Remember

*   **PTP = Speed and Simplicity.** Focus on reaching a destination.
*   **CP = Precision and Path Following.** Focus on the journey.
*   The choice between PTP and CP is dictated by the **task requirements**.
*   **Inverse Kinematics (IK)** is a cornerstone for CP planning, as it translates desired Cartesian poses into joint angles.
*   **Computational cost** is a major trade-off: PTP is cheaper, CP is more expensive.
*   **Obstacle avoidance** needs to be integrated into both, but the methods will differ. For CP, it might involve modifying the Cartesian path; for PTP, it might involve a detour in joint space.

---

This concludes the notes on Point-to-Point vs. Continuous Path planning. The next steps in trajectory planning often involve elaborating on how to generate the actual time-parameterized motion (velocity and acceleration profiles) for both PTP and CP strategies, and how to incorporate obstacle avoidance techniques.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
