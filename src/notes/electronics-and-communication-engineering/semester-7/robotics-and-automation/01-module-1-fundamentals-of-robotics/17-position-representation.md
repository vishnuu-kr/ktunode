---
title: "Position representation."
subject: "ROBOTICS AND AUTOMATION"
module: "Module 1: Fundamentals of Robotics"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff182"
status: "completed"
scrapedAt: "2026-05-23T18:09:34.833Z"
---
# ROBOTICS AND AUTOMATION

## Module 1: Fundamentals of Robotics

### Topic: Position Representation

---

### Learning Outcomes Covered in this Topic:

*   **LO1:** Understand and represent the position of a rigid body in 2D and 3D space.
*   **LO2:** Differentiate between Cartesian coordinates and other common position representations.
*   **LO3:** Explain the concept of a frame of reference and its importance in position representation.
*   **LO4:** Understand how to represent the position of a robot's end-effector.

---

### Introduction to Position Representation

**What is Position?**

In robotics, **position** refers to the location of an object (or a point on an object) within a defined space. This is a fundamental concept as robots operate and interact with their environment based on their location.

**Why is Position Representation Important?**

*   **Navigation:** Robots need to know where they are and where they need to go.
*   **Manipulation:** To grasp and move objects, robots must accurately know the position of the object and their own end-effector.
*   **Control:** Control algorithms rely on accurate position information to command robot movements.
*   **Communication:** Standardized position representations allow different robotic components and systems to communicate effectively.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### Frames of Reference

A **frame of reference** (or coordinate system) is a set of axes originating from a common point (the origin) that defines a space. To describe the position of an object, we must define *within which frame* that position is being described.

*   **World Frame (or Global Frame):** A fixed frame of reference, usually established in the robot's environment, that does not move with the robot. This is often used as a common reference for multiple robots or objects. (Craig, Ch. 2)
*   **Robot Frame (or Base Frame):** A frame of reference attached to the base of the robot. This frame is fixed relative to the robot's base.
*   **Tool Frame (or End-Effector Frame):** A frame of reference attached to the end-effector of the robot. This frame moves with the end-effector and is used to describe the position and orientation of the tool. (Spong et al., Ch. 2)
*   **Object Frame:** A frame of reference attached to an object in the environment.

**Key Concept:** The position of a point is always defined *relative to a frame of reference*.

---

### Position Representation Methods

#### 1. Cartesian Coordinates (Rectangular Coordinates)

The most intuitive way to represent position is using Cartesian coordinates.

*   **2D Space:** A point in a 2D plane is represented by $(x, y)$, where:
    *   $x$ is the distance along the horizontal axis.
    *   $y$ is the distance along the vertical axis.

*   **3D Space:** A point in 3D space is represented by $(x, y, z)$, where:
    *   $x$ is the distance along the x-axis.
    *   $y$ is the distance along the y-axis.
    *   $z$ is the distance along the z-axis.

**Example:**
Imagine a robot arm moving on a table. The position of the gripper might be described as (0.5 meters, 0.2 meters, 0.1 meters) in the world frame, meaning 0.5 meters along the world's x-axis, 0.2 meters along the world's y-axis, and 0.1 meters along the world's z-axis.

**From Textbooks:**
Craig's "Introduction to Robotics" emphasizes that the choice of origin and the orientation of the axes for a Cartesian coordinate system are arbitrary but must be consistently defined for a given frame. (Craig, Ch. 2)

#### 2. Cylindrical Coordinates

While less common for direct robot joint control, cylindrical coordinates can be useful for describing positions in certain robot configurations (e.g., SCARA robots). A point is represented by $(r, \theta, z)$:

*   $r$: The radial distance from the z-axis.
*   $\theta$: The angle in the xy-plane from the x-axis to the projection of the point onto the xy-plane.
*   $z$: The height along the z-axis.

#### 3. Spherical Coordinates

Similar to cylindrical coordinates, spherical coordinates can be useful for representing points in space. A point is represented by $(\rho, \theta, \phi)$:

*   $\rho$: The radial distance from the origin.
*   $\theta$: The azimuthal angle in the xy-plane from the x-axis.
*   $\phi$: The polar angle from the z-axis.

**Important Note on Other Representations:**
While Cartesian coordinates are fundamental, other representations like joint space coordinates (e.g., angles of each robot link) are crucial for robot control, as discussed in later modules. This topic focuses on describing the *end-effector's position* in the workspace.

---

### Representing the Position of a Robot's End-Effector

The position of the robot's end-effector is a critical piece of information. It is usually represented in Cartesian coordinates $(x, y, z)$ with respect to a chosen frame of reference, most commonly the **world frame** or the **robot's base frame**.

**Relationship between Frames:**
The position of a point described in one frame can be transformed into another frame using coordinate transformations. This will be a key topic in subsequent modules concerning kinematics.

**Example:**
Consider a robot arm's base is at $(1, 1, 0)$ in the world frame. If the end-effector is at $(0.3, 0.2, 0.4)$ in the robot's base frame, its position in the world frame would be $(1+0.3, 1+0.2, 0+0.4) = (1.3, 1.2, 0.4)$. This highlights the importance of knowing the relationship between frames.

---

### Key Concepts & Definitions Recap

*   **Position:** The location of an object in space.
*   **Frame of Reference (Coordinate System):** A fixed system of axes used to define positions and orientations.
*   **World Frame:** A fixed, external frame of reference.
*   **Robot Frame:** A frame attached to the robot's base.
*   **Tool Frame:** A frame attached to the robot's end-effector.
*   **Cartesian Coordinates:** A system $(x, y, z)$ defining position along orthogonal axes.

---

### Alignment with Course Outcomes (Knowledge Level K2)

*   **CO1:** Describe the basic components, structural configurations, and degrees of freedom (DOF) of robots.
    *   *Alignment:* Understanding position representation is foundational to describing where a robot's components (like the end-effector) are and how their DOFs affect this position.
*   **CO2:** Apply forward and inverse kinematics for different types of robotic manipulators.
    *   *Alignment:* Position representation is the *output* of forward kinematics and the *goal* of inverse kinematics. You need to know how to represent a position to calculate the joint angles that achieve it, or vice-versa.
*   **CO3:** Implement various types of controllers and explain their impact on robot motion control.
    *   *Alignment:* Controllers direct robots to specific positions. Accurate position representation is essential for any control strategy.
*   **CO4:** Identify and compare different types of sensors and actuators used in robotic systems.
    *   *Alignment:* Sensors (like encoders, vision systems) provide position information, and actuators move the robot to desired positions.
*   **CO5:** Describe the basics of robot cell layouts considering multiple robots and machine interfaces.
    *   *Alignment:* To design a cell layout, you need to know the spatial reach and operational positions of robots and machines.

---

### Practice Questions & Exercises

**Question 1:**
A robot's end-effector has a position described as (0.8, -0.3, 0.5) in its base frame. The robot's base is located at (2.0, 1.5, 0.0) in the world frame. What is the position of the end-effector in the world frame?

**Answer 1:**
To find the position in the world frame, we add the base frame's position to the end-effector's position relative to the base frame.
End-effector position in world frame = Base frame position in world frame + End-effector position in base frame
End-effector position in world frame = (2.0, 1.5, 0.0) + (0.8, -0.3, 0.5)
End-effector position in world frame = (2.0 + 0.8, 1.5 - 0.3, 0.0 + 0.5)
End-effector position in world frame = **(2.8, 1.2, 0.5)**

**Question 2:**
Which of the following is NOT a common frame of reference used in robotics?
a) World Frame
b) Tool Frame
c) Joint Frame
d) Robot Base Frame

**Answer 2:**
c) Joint Frame. While joint angles are crucial, a "joint frame" isn't a standard term for representing the *position* of an object in space in the same way the others are. Frames are typically associated with rigid bodies or origins.

**Question 3:**
A robotic arm has a single joint that rotates in the XY plane. If the base of the arm is at the origin (0,0,0) and the arm has a link of length 1 meter, describe the possible positions of the end of the link using Cartesian coordinates.

**Answer 3:**
The end of the link will lie on a circle in the XY plane with a radius of 1 meter, centered at the origin. The positions can be represented as $(x, y, 0)$ where $x^2 + y^2 = 1^2$. For example, if the joint angle is 0 degrees, the position is (1,0,0). If it's 90 degrees, the position is (0,1,0). If it's 180 degrees, it's (-1,0,0), and so on.

---

### Important Points to Remember

*   **Always specify the frame of reference** when stating a position.
*   Cartesian coordinates $(x, y, z)$ are the most common way to represent the *position* of an end-effector in the workspace.
*   Transformations between frames are essential for relating positions described in different coordinate systems. This will be covered in more detail in future modules.
*   The origin and axis orientation of a frame must be consistently defined.

---

### References and Further Reading

*   **Craig, John J. "Introduction to Robotics: Mechanics and Control."**
    *   Chapter 2 (Homogeneous Transformations) discusses coordinate frames and transformations, which are intrinsically linked to position representation.
*   **Spong, Mark W., Seth Hutchinson, and M. Vidyasagar. "Robot Modeling and Control."**
    *   Chapter 2 (Rigid Body Transformations) covers coordinate frames, frames of reference, and the representation of points and transformations, directly supporting this topic.
*   **Groover, Mikell P. "Industrial Robotics."**
    *   Groover provides a foundational understanding of robot configurations and the workspace, which implies the need for position representation.

---