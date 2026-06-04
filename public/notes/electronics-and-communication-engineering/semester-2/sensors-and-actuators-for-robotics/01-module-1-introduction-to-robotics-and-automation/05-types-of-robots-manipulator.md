---
title: "Types of robots: Manipulator"
subject: "SENSORS AND ACTUATORS FOR ROBOTICS"
module: "Module 1: Introduction to Robotics and Automation: "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9120463779487da660"
status: "completed"
scrapedAt: "2026-05-23T17:43:15.499Z"
---
# SENSORS AND ACTUATORS FOR ROBOTICS

## Module 1: Introduction to Robotics and Automation

### Topic: Types of Robots: Manipulator

Welcome, everyone! Today, we're diving into the fascinating world of robotics, specifically focusing on the different types of robots that make up this exciting field. As part of our introduction to robotics and automation, understanding the core building blocks of robots is crucial. And when we talk about robots performing tasks, we're often talking about **manipulators**.

This module, Module 1, is all about laying the groundwork. It's about getting a feel for what robotics is, its impact on our world, and where it's headed. We'll also start touching upon the fundamental components – the sensors that allow robots to perceive their environment and the actuators that enable them to act upon it. Our ultimate goal, as outlined in our Course Outcomes (COs), is to gain knowledge (K2 level) about these systems and how they function.

Let's begin by understanding the very essence of what a robot is, and then we'll narrow our focus to the **manipulator** – a term you'll hear a lot in robotics.

### What is a Robot? A Brief Refresher

Before we zero in on manipulators, let's quickly revisit what we mean by a "robot." Generally, a robot is a machine capable of carrying out a complex series of actions automatically, especially one programmable by a computer. Think of it as an electro-mechanical system that can interact with its physical environment. Robots are designed to perform tasks that are often dangerous, repetitive, or require a high degree of precision, thus contributing significantly to automation across various engineering applications. This directly ties into our **CO1: Understand the significance, social impact and future prospects of robotics and automation in various engineering applications**. We'll see how manipulators are central to many of these applications, from manufacturing to healthcare.

### The Heart of Action: The Robot Manipulator

So, what exactly is a **manipulator** in the context of robotics?

Imagine a human arm. It has a shoulder, an elbow, and a wrist, allowing it to reach, grasp, and manipulate objects. A robot manipulator is essentially the artificial equivalent of this – the part of a robot that is designed to interact with the physical world and perform tasks. It's the "working end" of the robot, if you will.

From the textbooks, like De Silva's "Sensors and Actuators: Engineering System Instrumentation," a manipulator is described as a multi-jointed arm that can be programmed to perform tasks. It's the component responsible for picking up, moving, and placing objects, or for performing operations like welding, painting, or assembly. Mikell P. Groover's "Industrial Robots" also emphasizes the manipulator as the primary tool for executing tasks in industrial settings.

Think about it: when you see a car being assembled on a factory line, the robotic arm doing the welding or painting – that's a manipulator. Or consider a surgical robot assisting a doctor – the robotic arm holding the instruments is the manipulator. They are the physical interfaces that allow robots to *do* things.

### Key Components of a Manipulator: Links and Joints

To understand how a manipulator works, we need to look at its fundamental building blocks:

1.  **Links:** These are the rigid segments that connect the joints. They are analogous to the bones in our arms and legs. Think of them as the "stiff" parts of the robot arm.
2.  **Joints:** These are the points where the links are connected and allow relative motion between them. Joints are what give the manipulator its degrees of freedom (DOF) – the ability to move in different directions.

This structure, consisting of links and joints, is what allows the manipulator to move its end-effector (the tool at the end of the arm) to desired positions and orientations in space.

### Degrees of Freedom (DOF): The Language of Movement

The **degrees of freedom (DOF)** of a manipulator are absolutely critical to understanding its capabilities. Each joint contributes a degree of freedom, allowing for a specific type of movement.

*   **What is DOF?** Simply put, it's the number of independent parameters that define the configuration of a robot manipulator. In more practical terms, it's the number of ways the manipulator can move.
*   **Common Joint Types:**
    *   **Revolute Joint:** This is like a hinge or a rotating joint (e.g., your elbow or shoulder). It allows for rotational motion around an axis.
    *   **Prismatic Joint:** This is like a sliding joint (e.g., a drawer slide or your thumb joint). It allows for linear motion along an axis.

Most robotic manipulators are designed with a combination of revolute and prismatic joints to achieve a wide range of motion. For example, a typical industrial robot arm might have six DOF: three for positioning the end-effector in 3D space (x, y, z coordinates) and three for controlling its orientation (roll, pitch, yaw). This is often referred to as a "6-DOF robot."

Why is understanding DOF so important? Because it dictates the manipulator's ability to reach and orient itself in its workspace. A robot with more DOF has greater dexterity and can perform more complex tasks. This relates to **CO3: Categorize and choose the suitable sensor to measure position, motion, and range of the obstacles**, as sensors are vital for providing feedback about the manipulator's position and the environment it's operating in.

### Classification of Manipulators: More Than Just One Type

Manipulators aren't a one-size-fits-all solution. They are designed and classified based on their structure, kinematic configuration, and application. Let’s look at some common classifications:

#### Based on Kinematic Structure (How they are built and move):

This is a very important classification, often discussed in texts like Schilling's "Fundamentals of Robotics – Analysis and Control."

1.  **Cartesian Robots (or Gantry Robots):**
    *   **Structure:** These robots use three mutually perpendicular prismatic (linear) joints. Think of them like a bridge crane.
    *   **Movement:** They move along the X, Y, and Z axes.
    *   **Analogy:** Imagine a CNC milling machine or a 3D printer – that's a Cartesian robot in action. They are excellent for pick-and-place operations in a rectangular workspace.
    *   **Applications:** Packaging, assembly, 3D printing.

2.  **Cylindrical Robots:**
    *   **Structure:** They have one revolute joint (for rotation around a vertical axis) and two prismatic joints (one for vertical movement and one for radial movement).
    *   **Movement:** Their workspace is cylindrical in shape.
    *   **Analogy:** Think of a drill press where the head can move up and down, and the entire assembly can rotate around a central column.
    *   **Applications:** Machine tending, assembly.

3.  **Spherical Robots (or Polar Robots):**
    *   **Structure:** They have two revolute joints (one for rotation around a vertical axis and one for rotation of the arm up and down) and one prismatic joint (for extending or retracting the arm).
    *   **Movement:** Their workspace is spherical.
    *   **Analogy:** Imagine a classic industrial robot arm with a base that swivels, an arm that can pivot up and down, and the arm itself extending and retracting.
    *   **Applications:** Found in early industrial robots, now less common than articulated robots.

4.  **Articulated Robots (or Jointed-Arm Robots):**
    *   **Structure:** These are the most common type, resembling a human arm. They consist of a series of revolute joints. A typical configuration has three revolute joints at the "shoulder" and "elbow" for positioning, and usually three more revolute joints at the "wrist" for orientation.
    *   **Movement:** Highly flexible and versatile, capable of reaching many points in a complex 3D workspace.
    *   **Analogy:** This is what most people picture when they think of a robot arm – like those seen in car manufacturing plants.
    *   **Applications:** Welding, painting, assembly, material handling, even complex surgical procedures. This is where we see the direct application of sensors for feedback on joint angles and position, aligning with **CO2** and **CO3**.

5.  **SCARA Robots (Selective Compliance Assembly Robot Arm):**
    *   **Structure:** Typically have two parallel revolute joints for horizontal motion and a prismatic joint for vertical motion. The key characteristic is their compliance in the horizontal plane but rigidity in the vertical direction.
    *   **Movement:** Excellent for fast pick-and-place tasks in a horizontal plane.
    *   **Analogy:** Imagine a robot arm that can quickly move left-right and forward-backward, and then vertically lower or raise an object.
    *   **Applications:** High-speed assembly, pick-and-place operations, electronics manufacturing.

#### Based on Application:

While the kinematic structure defines *how* they move, their application defines *what* they do.

*   **Industrial Manipulators:** These are the workhorses of manufacturing. They perform repetitive tasks like welding, painting, assembly, and material handling. Their design is often optimized for speed, precision, and payload capacity.
*   **Service Manipulators:** These are found in non-industrial environments. Examples include:
    *   **Medical Manipulators:** Used in surgery (e.g., da Vinci Surgical System), rehabilitation, or for assisting the disabled. These require extreme precision and safety, often relying heavily on sophisticated sensors.
    *   **Exploration Manipulators:** Used in hazardous environments like space (e.g., Canadarm on the ISS) or underwater. They need to be robust and capable of remote operation, with clear feedback to the human operator.
    *   **Domestic Manipulators:** Robots in homes for tasks like cleaning or assisting the elderly.

### The Role of Sensors and Actuators with Manipulators

Now, let's connect this back to our core subject: **Sensors and Actuators**. Without them, a manipulator is just a collection of rigid links and joints.

*   **Sensors:** These are the robot's "eyes" and "ears." For a manipulator, sensors are absolutely vital for:
    *   **Position Sensing:** Knowing the exact angle of each joint (using encoders, for example) is crucial for the robot to know where its end-effector is in space. This is directly related to **CO2: Demonstrate the working principle and characteristics of proximity, force and pressure sensors** and **CO3: Categorize and choose the suitable sensor to measure position, motion, and range of the obstacles**. Imagine trying to pick up a delicate object without knowing exactly where your hand is – it would be impossible!
    *   **Force and Torque Sensing:** Allowing the robot to feel how much force it's applying. This is essential for tasks like delicate assembly or when interacting with humans, preventing damage or injury.
    *   **Proximity Sensing:** Detecting if an object is nearby, which helps in avoiding collisions and in precise grasping.
    *   **Vision Sensing (Cameras):** Providing the robot with visual feedback to identify objects, navigate, and inspect.

*   **Actuators:** These are the "muscles" of the manipulator. They are the devices that convert electrical or pneumatic energy into mechanical motion to drive the joints.
    *   **Electric Motors (DC, AC, Servo, Stepper):** The most common actuators. They provide precise control over speed and position. Servo motors are particularly important for precise control of joint angles, as discussed in **CO4: Describe the working principle of different actuators used in robotics**.
    *   **Hydraulic Actuators:** Used when very high force or speed is required, often in heavy industrial robots.
    *   **Pneumatic Actuators:** Simpler and often used for simpler movements, like opening and closing grippers.

The interplay between sensors and actuators is what makes a manipulator intelligent and effective. The sensors provide feedback, and the actuators act upon that feedback to achieve the desired task. It’s a closed-loop system, a concept we'll explore much more as we progress through the course.

### Why Study Manipulators?

Understanding manipulators is fundamental to grasping robotics and automation for several reasons:

*   **Core Functionality:** Manipulators are the primary means by which robots interact with and modify their environment.
*   **Diverse Applications:** They are at the heart of automation in almost every industry.
*   **Foundation for Advanced Topics:** The principles of kinematics, dynamics, and control that govern manipulators are the basis for understanding more complex robotic systems.
*   **Sensor/Actuator Integration:** They are the perfect platforms to understand how sensors and actuators work together to create functional robotic systems.

### Quick Recap and Key Takeaways

Remember this: a robot manipulator is the arm-like component of a robot that performs physical tasks. Its capability is defined by its links, joints, and degrees of freedom. We classify manipulators based on their kinematic structure (Cartesian, Cylindrical, Spherical, Articulated, SCARA) and their application (industrial, service). Crucially, manipulators rely heavily on sensors for perception and actuators for motion to execute their tasks.

This forms the bedrock of our understanding as we move forward. Next, we'll start to delve deeper into specific types of sensors and actuators and how they are integrated into these manipulators.

---

## Sample Questions with Answers

**1. Conceptual Question:**
What is the fundamental difference between a "link" and a "joint" in a robot manipulator? Explain why understanding the number of degrees of freedom (DOF) is important for a manipulator's capability.

**Answer:**
A **link** is a rigid structural component of a robot manipulator, analogous to a bone in a human arm, that connects different joints. A **joint** is a connection between two or more links that allows for relative motion between them, enabling movement. Understanding the number of **degrees of freedom (DOF)** is important because it directly determines the manipulator's ability to reach different positions and orientations within its workspace. A higher DOF generally means greater dexterity, flexibility, and capability to perform more complex tasks, such as reaching around obstacles or achieving specific end-effector orientations. For instance, a 6-DOF articulated robot is far more versatile than a 3-DOF Cartesian robot for many tasks.

**2. Exam-Oriented Question (Knowledge Level K2):**
Which type of robot manipulator is characterized by having two parallel revolute joints for horizontal motion and a prismatic joint for vertical motion, making it highly suitable for high-speed pick-and-place operations?
    a) Cartesian Robot
    b) Cylindrical Robot
    c) SCARA Robot
    d) Spherical Robot

**Answer:**
    c) SCARA Robot

**Reasoning:** The description perfectly matches the structural and functional characteristics of a SCARA (Selective Compliance Assembly Robot Arm) robot. SCARA robots are specifically designed for tasks requiring rapid and precise movements in the horizontal plane, with the vertical prismatic joint allowing for simple up-and-down insertion or placement. Cartesian robots use only prismatic joints, cylindrical robots have a mix of one revolute and two prismatic joints in a specific arrangement, and spherical robots have two revolute and one prismatic joint in a different configuration.

**3. Application-Based Question (Connecting to CO1 & CO3):**
A manufacturing company wants to automate the process of inserting small electronic components onto a circuit board. The components are arranged in a grid, and the insertion requires precise vertical placement. Which type of manipulator would be most suitable for this task, and what sensors would be critical for ensuring successful operation?

**Answer:**
A **SCARA robot** would be most suitable for this task. Its design excels at rapid horizontal movements needed to traverse the circuit board and its inherent vertical compliance (via the prismatic joint) is ideal for precise component insertion.

For successful operation, critical sensors would include:
*   **Encoders** on each joint: To provide precise feedback on the angular position of the revolute joints and the linear position of the prismatic joint, allowing the robot to know the exact location and orientation of its end-effector (the gripper holding the component). This directly addresses **CO2** and **CO3**.
*   **Vision Sensors (Cameras)**: To locate the exact position of the component on the circuit board and to guide the insertion process, ensuring alignment. This helps with **CO3**.
*   **Force Sensors** (potentially in the end-effector/gripper): To detect if the component has been properly grasped or if there is any resistance during insertion, preventing damage to the component or the board. This relates to **CO2**.

This scenario highlights how understanding manipulator types (**CO1**) and the necessity of specific sensors (**CO3**) are intertwined.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
