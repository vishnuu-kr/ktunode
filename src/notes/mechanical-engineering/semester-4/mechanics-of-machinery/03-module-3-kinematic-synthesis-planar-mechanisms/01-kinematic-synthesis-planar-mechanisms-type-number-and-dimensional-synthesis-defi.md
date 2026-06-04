---
title: "Kinematic synthesis (planar mechanisms) - type, number and dimensional synthesis –Definitions of Motion, Path and Function generation, precision points, Chebychev spacing, Freudenstein’s equation."
subject: "MECHANICS OF MACHINERY"
module: "Module 3: Kinematic synthesis (planar mechanisms) "
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462fe1"
status: "completed"
scrapedAt: "2026-05-20T17:55:11.937Z"
---
# Mechanics of Machinery: Module 3 - Kinematic Synthesis (Planar Mechanisms)

This module focuses on the design process of creating mechanisms to perform specific tasks, moving from a desired motion or function to the actual physical linkage.

---

## 1. Introduction to Kinematic Synthesis

**Definition:** Kinematic synthesis is the process of designing a mechanism to perform a specific task by determining the type of mechanism, the number of links required, and the dimensions (lengths and angles) of those links. It's essentially working backward from the desired motion to the mechanism itself.

**Importance:** While kinematic analysis deals with understanding the motion of a given mechanism, kinematic synthesis is about creating a mechanism that *will* produce the desired motion. This is crucial for designing new machines and improving existing ones.

**Relation to Course Outcomes:** This module directly addresses **CO3: Construct a mechanism for a specified output motion (Knowledge Level: K4)**. Understanding the principles of synthesis is fundamental to this outcome.

---

## 2. Types of Kinematic Synthesis

Kinematic synthesis problems can be broadly categorized into three main types:

### 2.1. Type Synthesis

*   **Definition:** Type synthesis is the process of determining the basic type of mechanism required to achieve a given task. This involves selecting the fundamental structure of the mechanism (e.g., four-bar linkage, slider-crank, etc.) and its degree of freedom.
*   **Key Considerations:**
    *   **Mobility:** The mechanism must have the necessary degrees of freedom (DOF) to perform the intended task. Gruebler's equation is often used here, though it has limitations.
    *   **Functionality:** The chosen mechanism must be capable of producing the desired motion, path, or function generation.
    *   **Simplicity:** Often, the simplest mechanism that meets the requirements is preferred for ease of manufacturing and reduced complexity.
*   **Example:** If you need to create a reciprocating motion from a rotary input, a slider-crank mechanism is a likely candidate identified through type synthesis.
*   **Reference:** Ballaney (2005) and Rattan (2009) discuss basic mechanism types and their applications in their introductory chapters.

### 2.2. Number Synthesis

*   **Definition:** Number synthesis is the process of determining the minimum number of links and joints required to synthesize a mechanism for a given task. This is closely related to type synthesis as the number of links dictates the possible mechanism types.
*   **Key Considerations:**
    *   **Gruebler's Equation:** $DOF = 3(n-1) - 2j_1 - j_2$, where:
        *   $n$ = number of links (including the fixed link)
        *   $j_1$ = number of full joints (1 DOF joints, like pin or prismatic)
        *   $j_2$ = number of higher-order joints (2 DOF joints)
    *   The goal is to select a mechanism with the appropriate DOF for the task (e.g., a 1-DOF mechanism for simple input-output relationship).
*   **Example:** To create a closed-loop mechanism with a specific motion transmission, you might need to determine the minimum number of links to achieve a certain degree of freedom.
*   **Reference:** Rattan (2009) and Ghosh (2008) provide detailed explanations and examples of applying Gruebler's equation for number synthesis.

### 2.3. Dimensional Synthesis

*   **Definition:** Dimensional synthesis is the process of determining the specific lengths of the links and the angles between them in a mechanism to achieve a precise desired motion, path, or function. This is where the actual geometry of the mechanism is defined.
*   **Key Considerations:**
    *   **Precision Points:** The number of positions the mechanism must accurately represent.
    *   **Synthesis Techniques:** Various analytical and graphical methods are used, including:
        *   **Graphical Methods:** Tracing, inversion, relative motion.
        *   **Analytical Methods:** Algebraic equations, complex numbers, vector loops.
    *   **Optimization:** Often, a trade-off is made between accuracy at precision points and other factors like transmission angle or slider range.
*   **Examples:**
    *   Designing a four-bar linkage to connect two points with specific orientations.
    *   Determining the crank and coupler lengths for a slider-crank to match a desired piston position at specific crank angles.
*   **Reference:** Shigley & Uicker (2010) and Wilson & Sadler (2005) are excellent resources for detailed analytical and graphical methods of dimensional synthesis.

---

## 3. Definitions of Motion, Path, and Function Generation

These are the three fundamental types of kinematic synthesis problems, based on what the designer wants the mechanism to achieve.

### 3.1. Motion Generation

*   **Definition:** In motion generation, the primary goal is to ensure that a specific link (often called the coupler) in the mechanism moves through a series of specified positions, orientations, and/or velocities. The input and output links may not have a specific functional relationship.
*   **Key Features:**
    *   Focus on the **coupler link**.
    *   Can involve **body guidance** (tracking a path) and **orientation control**.
    *   Often achieved using **four-bar linkages**.
*   **Example:** Designing a linkage for a robot arm to move a gripper through a series of positions in space.
*   **Reference:** Norton (2009) explains motion generation with clear graphical examples, often relating it to four-bar linkages.

### 3.2. Path Generation

*   **Definition:** In path generation, the goal is to guide a point on one of the links (typically the coupler) along a specific geometric path in space, regardless of the orientation of the link.
*   **Key Features:**
    *   Focus on a **specific point** on a link.
    *   **Orientation of the link is not important**.
    *   Often achieved using **four-bar linkages** (e.g., Watt's mechanism, Stephenson's mechanism).
*   **Example:** A mechanism designed to move a pen along a straight line or a curve, like the mechanism in a printing press.
*   **Reference:** Ballaney (2005) and Ghosh (2008) cover path generation, often illustrating with mechanisms that create approximate straight-line motion.

### 3.3. Function Generation

*   **Definition:** In function generation, the goal is to establish a specific mathematical relationship between the angular or linear displacements of two links (the input and output links). This is about creating a desired input-output relationship.
*   **Key Features:**
    *   Focus on the **relationship between input and output links**.
    *   Typically involves a **fixed input** and a **corresponding output**.
    *   Can be **exact** (for a finite number of positions) or **approximate** over a range of motion.
*   **Example:** Designing a linkage to control the opening and closing of a valve based on the rotation of an engine crankshaft.
*   **Reference:** Rattan (2009) dedicates significant attention to function generation, introducing Freudenstein's equation as a primary analytical tool.

---

## 4. Precision Points

*   **Definition:** Precision points are the specific configurations (positions and orientations) of the mechanism that the designer wants to reproduce accurately. The mechanism is synthesized to satisfy the kinematic conditions at these designated points.
*   **Key Considerations:**
    *   **Number of Precision Points:** The number of precision points that can be accurately reproduced depends on the mechanism type and the degrees of freedom available for synthesis. For a 1-DOF mechanism, you can typically achieve accurate synthesis for three positions (precision points) using analytical methods.
    *   **Geometric vs. Kinematic Precision Points:**
        *   **Geometric:** Specified positions and orientations of links.
        *   **Kinematic:** Specified velocity or acceleration relationships between links.
    *   **Trade-offs:** While more precision points might seem desirable, achieving perfect accuracy at many points can lead to undesirable characteristics like poor transmission angles or limited range of motion.
*   **Importance:** The accuracy of the mechanism's performance is directly tied to how well it meets the requirements at the chosen precision points.
*   **Reference:** Shigley & Uicker (2010) and Myskza (2013) discuss the concept of precision points extensively, especially in the context of analytical synthesis techniques.

---

## 5. Chebyshev Spacing

*   **Definition:** Chebyshev spacing (also known as Chebyshev spacing or Chebyshev nodes) is a method of selecting the input link positions for function generation to achieve an optimal approximation over a given range. It's a way to distribute the precision points to minimize the error between the synthesized mechanism and the desired function across the entire range of motion.
*   **Key Idea:** Instead of equally spacing the precision points, Chebyshev spacing places them closer together at the ends of the range and further apart in the middle. This often leads to a more uniform error distribution.
*   **Application:** Used in function generation to select the input link positions (e.g., crank angles) for synthesizing a mechanism to represent a desired function.
*   **Formula for selecting crank positions ($\theta$) for $n$ precision points over a range of $0$ to $L$ (where $L$ is the total range, e.g., 180 degrees or $2\pi$ radians):**
    $$ \theta_k = \frac{L}{2} \left[ 1 - \cos\left(\frac{(2k-1)\pi}{2n}\right) \right] $$
    where $k = 1, 2, ..., n$.
*   **Example:** If synthesizing a mechanism to reproduce a function from $0^\circ$ to $180^\circ$ with 3 precision points ($n=3$), the angles would be calculated using the formula.
*   **Reference:** Wilson & Sadler (2005) provides a thorough explanation of Chebyshev spacing and its benefits in achieving accurate function generation.

---

## 6. Freudenstein's Equation

*   **Definition:** Freudenstein's equation is a fundamental analytical equation used in the dimensional synthesis of four-bar linkages for function generation. It relates the link lengths and angular positions of the input and output links.
*   **Derivation:** Derived by considering the vector loop closure equation of a four-bar linkage and eliminating the coupler link coordinates.
*   **General Form (for a four-bar linkage):**
    $$ K_1 \cos(\theta) + K_2 \cos(\phi) + 1 = \cos(\theta - \phi) $$
    where:
    *   $\theta$ = input link (crank) angle
    *   $\phi$ = output link (rocker) angle
    *   $K_1 = \frac{r_2}{r_4}$
    *   $K_2 = \frac{r_1}{r_4}$
    *   $r_1, r_2, r_3, r_4$ are the link lengths (fixed link, input crank, coupler, output rocker respectively).
    *   The lengths are scaled relative to the output link ($r_4$).
*   **Application:**
    *   For function generation, we have a desired relationship between $\theta$ and $\phi$.
    *   By substituting the values of $\theta_i$ and $\phi_i$ for each precision point ($i=1, 2, 3$ for three precision points), we get a system of linear equations in terms of $K_1$ and $K_2$.
    *   Solving these equations allows us to determine the values of $K_1$ and $K_2$, which in turn determine the required link length ratios.
*   **Important Note:** Freudenstein's equation is typically derived for *three precision points* because it yields two unknowns ($K_1$, $K_2$). For more than three precision points, more complex analytical methods or iterative techniques are needed.
*   **Reference:** Rattan (2009) provides a detailed derivation and application of Freudenstein's equation for synthesizing four-bar linkages. Ghosh (2008) also covers this extensively.

---

## 7. Synthesis Techniques - Analytical vs. Graphical

*   **Analytical Synthesis:**
    *   **Description:** Uses mathematical equations and algebraic methods to determine link dimensions.
    *   **Advantages:** High accuracy, systematic approach, can handle complex relationships.
    *   **Disadvantages:** Can be mathematically intensive, might require specialized software.
    *   **Examples:** Freudenstein's equation, complex number methods.
*   **Graphical Synthesis:**
    *   **Description:** Uses geometric constructions and graphical tools to find link dimensions.
    *   **Advantages:** Intuitive, can be quicker for simple cases, visual understanding.
    *   **Disadvantages:** Less precise than analytical methods, limited to simpler problems, susceptible to drawing inaccuracies.
    *   **Examples:** Relative velocity diagrams, instantaneous center methods, graphical tracing.
*   **Reference:** Shigley & Uicker (2010) and Wilson & Sadler (2005) provide a comprehensive comparison and detailed explanations of both analytical and graphical methods. Myskza (2013) also emphasizes the practical application of these techniques.

---

## 8. Important Points to Remember

*   Kinematic synthesis is about *designing* mechanisms, not analyzing existing ones.
*   The three main types of synthesis are **type, number, and dimensional**.
*   The three main goals of synthesis are **motion, path, and function generation**.
*   **Precision points** define the specific configurations the mechanism must accurately represent.
*   **Chebyshev spacing** helps optimize the selection of precision points for function generation.
*   **Freudenstein's equation** is a powerful analytical tool for the dimensional synthesis of four-bar linkages for function generation, typically for three precision points.
*   The choice between analytical and graphical synthesis depends on the problem's complexity, required accuracy, and available tools.
*   Understanding the relationship between DOF and the number of precision points is crucial.
*   Synthesis often involves trade-offs between accuracy at precision points and other performance criteria.

---

## 9. Practice Questions and Exercises

**Question 1 (Type & Function Generation):**
You need to design a mechanism to automatically open and close a gate based on the rotation of a motor. The motor rotates at a constant speed, and you need the gate to open and close smoothly. Which type of synthesis problem is this primarily, and what kind of mechanism might you consider?

**Answer:** This is primarily a **function generation** problem because you need to establish a specific relationship between the motor's rotation (input) and the gate's position (output). A **slider-crank mechanism** or a **four-bar linkage** could be suitable depending on the desired motion profile for the gate.

**Question 2 (Precision Points):**
For a path generation problem, why is it important to select the precision points carefully? What happens if the precision points are too close together or too far apart?

**Answer:** Precision points define the desired output configurations.
*   If they are **too close**, the mechanism might be over-constrained or have very limited range of motion.
*   If they are **too far apart**, the mechanism's accuracy between these points will be poor, leading to significant errors in the generated path. Careful selection ensures a balance between accuracy at key positions and the overall range of operation.

**Question 3 (Freudenstein's Equation - Conceptual):**
If you were asked to synthesize a four-bar linkage to achieve a specific relationship between crank angle ($\theta$) and rocker angle ($\phi$) at three different positions, which equation would be your primary tool, and what would you be solving for?

**Answer:** You would use **Freudenstein's equation**. You would be solving for the dimensionless link length ratios, specifically $K_1 = \frac{r_2}{r_4}$ and $K_2 = \frac{r_1}{r_4}$, where $r_2$ is the crank length, $r_4$ is the rocker length, and $r_1$ is the ground link length.

**Question 4 (Chebyshev Spacing):**
If you need to synthesize a mechanism to approximate a function over a range of $0^\circ$ to $180^\circ$ using 4 precision points, would you place the precision points at $0^\circ, 45^\circ, 90^\circ, 135^\circ$? Explain why or why not, and mention the concept that would guide your selection.

**Answer:** No, you would not place them at equal intervals. You would use **Chebyshev spacing** to select the precision points. Chebyshev spacing suggests placing points closer at the ends and further apart in the middle to minimize error distribution. The formula for Chebyshev spacing would guide the selection of angles, resulting in a distribution different from equal spacing.

**Question 5 (Dimensional Synthesis - Application):**
A designer wants to create a four-bar linkage where the input crank (length $r_2$) is 50 mm, the coupler (length $r_3$) is 100 mm, and the output rocker (length $r_4$) is 75 mm. The fixed link (length $r_1$) is 125 mm. If they have derived Freudenstein's equation as $0.5 \cos(\theta) + 0.667 \cos(\phi) + 1 = \cos(\theta - \phi)$, how do the calculated $K_1$ and $K_2$ values compare to the actual link length ratios?

**Answer:**
Calculate the actual ratios:
$K_1_{actual} = \frac{r_2}{r_4} = \frac{50}{75} = 0.667$
$K_2_{actual} = \frac{r_1}{r_4} = \frac{125}{75} = 1.667$

The given Freudenstein's equation appears to have constants derived from the *opposite* link ratios, or a different scaling convention. Assuming the standard form, the equation derived from the link lengths would be:
$K_1 = \frac{r_2}{r_4} = \frac{50}{75} = 0.667$
$K_2 = \frac{r_1}{r_4} = \frac{125}{75} = 1.667$
So, the equation should be $0.667 \cos(\theta) + 1.667 \cos(\phi) + 1 = \cos(\theta - \phi)$. The provided equation $0.5 \cos(\theta) + 0.667 \cos(\phi) + 1 = \cos(\theta - \phi)$ implies different link length ratios or a different setup. This highlights the importance of correct derivation and consistent definition of terms when applying such equations.

---

This concludes the study notes for Kinematic Synthesis of Planar Mechanisms. Remember to refer to your textbooks for further details and specific examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
