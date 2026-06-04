---
title: "Four bar chain"
subject: "MECHANICS OF MACHINERY"
module: "Module 1: Concepts of Kinematics and Dynamics"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462fd6"
status: "completed"
scrapedAt: "2026-05-20T17:55:05.390Z"
---
# MECHANICS OF MACHINERY

## Module 1: Concepts of Kinematics and Dynamics

### Topic: Four Bar Chain

---

### 1. Introduction to Four Bar Chain

A **four bar chain**, also known as a **quadric chain**, is the simplest type of closed kinematic chain. It consists of four links interconnected by four turning pairs (revolute joints). This fundamental mechanism forms the basis for many other mechanisms and is crucial for understanding the behavior of machinery.

**Key Concepts:**

*   **Link:** A rigid body that connects two or more joints. In a four-bar chain, there are four links.
*   **Joint (Pair):** A connection between two links that allows relative motion. A turning pair (revolute joint) allows only relative rotation.
*   **Kinematic Chain:** A series of links connected by joints to form a closed loop, allowing constrained relative motion between the links.
*   **Mechanism:** A kinematic chain where at least one link is fixed (frame), allowing useful work to be performed.

**Structure of a Four Bar Chain:**

*   **Link 1 (Fixed Link/Frame):** This link is stationary and provides the base for the chain.
*   **Link 2 (Cr</strong>a**nk):** A link that rotates about a fixed pivot on the frame.
*   **Link 3 (Coupler/Connecting Rod):** A link that connects the crank to the rocker. Its motion is complex, being neither pure rotation nor pure translation.
*   **Link 4 (Rocker/Lever):** A link that oscillates about a fixed pivot on the frame.

*(Diagram of a Four Bar Chain: A simple sketch showing four links forming a closed loop with revolute joints at each corner. Label the links 1, 2, 3, and 4, and indicate the fixed link.)*

---

### 2. Grashof's Law and Mechanism Mobility

**Mobility (Degree of Freedom, DOF):** The number of independent inputs required to completely specify the position and orientation of all links in a mechanism.

**Grübler's Equation (for planar mechanisms):**
The mobility (M) of a planar mechanism with 'n' links and 'j' binary joints (each contributing 1 degree of freedom) and 'h' higher pairs (each contributing 2 degrees of freedom) can be calculated as:

$M = 3(n - 1) - 2j_2 - h$

where:
*   $n$ = Number of links
*   $j_2$ = Number of binary joints (connecting two links)
*   $h$ = Number of higher pairs (e.g., surface contact between links)

For a **four bar chain** with four links (n=4) and four turning pairs (j=4, each being a binary joint), the mobility is:

$M = 3(4 - 1) - 2(4) = 3(3) - 8 = 9 - 8 = 1$

This means a four-bar chain has **one degree of freedom**, requiring one input to control the motion of the entire mechanism.

**Grashof's Law:** This law predicts the possible motions of the links in a four-bar chain based on the lengths of its links. Let the lengths of the four links be $l_1$ (fixed link), $l_2$ (crank), $l_3$ (coupler), and $l_4$ (rocker). Let $l_{min}$ be the shortest link and $l_{max}$ be the longest link.

**Grashof's Condition:** A four-bar mechanism can have at least one link that makes a complete revolution if the sum of the length of the shortest link and the length of the longest link is less than or equal to the sum of the lengths of the other two links.

$l_{min} + l_{max} \leq l_a + l_b$ (where $l_a$ and $l_b$ are the lengths of the other two links)

**Classification of Four Bar Mechanisms based on Grashof's Law:**

*   **Grashofian Mechanism:** If Grashof's condition is satisfied ($l_{min} + l_{max} \leq l_a + l_b$), the link adjacent to the shortest link can rotate completely. This leads to four possible types of mechanisms:
    *   **Double Crank Mechanism:** If the shortest link is adjacent to the fixed link and the crank. Both cranks rotate. (Example: Watt’s parallel motion mechanism linkage).
    *   **Crank Rocker Mechanism:** If the shortest link is the crank. The crank rotates continuously, and the rocker oscillates. (Most common type, e.g., connecting rod of an engine).
    *   **Double Rocker Mechanism:** If the shortest link is the coupler. Both the non-fixed links (crank and rocker) oscillate.
    *   **Rocker Crank Mechanism:** If the shortest link is the rocker. The crank rotates, and the rocker oscillates (symmetric to crank rocker).

*   **Non-Grashofian Mechanism:** If Grashof's condition is not satisfied ($l_{min} + l_{max} > l_a + l_b$), no link can make a complete revolution. All links will oscillate.
    *   **Double Idler Mechanism:** If the shortest link is the coupler, and the condition is not met, all links oscillate.

**Special Cases of Four Bar Chains:**

*   **Parallelogram Chain:** If opposite links are equal in length ($l_1 = l_3$ and $l_2 = l_4$). This mechanism, when driven by the crank, produces a parallel motion, meaning the rocker moves parallel to the crank. (Example: Lazy tongs mechanism component).
*   **Antiparallelogram Chain:** If adjacent links are equal in length ($l_1 = l_2$ and $l_3 = l_4$ or $l_1 = l_4$ and $l_2 = l_3$). This mechanism, when driven by the crank, produces a constant velocity ratio between the input and output links, making it useful for transmissions.

**Important Points to Remember:**
*   Grashof's Law is a *condition for possibility*, not a guarantee of motion.
*   The classification depends on which link is designated as the fixed link.

*(Reference: Ballaney P. L., Theory of Machines and Mechanisms, Chapter 3; Rattan S. S., Theory of Machines, Chapter 5)*

---

### 3. Inversions of the Four Bar Chain

**Inversion of a Mechanism:** An inversion is obtained by fixing a different link of the kinematic chain. The relative motion between the links remains the same, but the frame of reference changes, leading to different applications. A four-bar chain has four inversions.

**Inversion 1: Fixed Link 1 (Crank Rocker or Double Crank)**
*   This is the standard four-bar mechanism discussed.
*   If Grashof's condition is met ($l_{min} + l_{max} \leq l_a + l_b$), it can be a crank-rocker (shortest link is crank) or double-crank (shortest link is adjacent to frame and crank).
*   **Application:** Engine crankshaft mechanism, windscreen wiper mechanism.

**Inversion 2: Fixed Link 2 (Cr**a**nk)**
*   When the crank is fixed, the mechanism becomes a **double rocker** (if Grashof's condition is met) or a **double idler** (if not met). The input link (originally the coupler) rotates the output link (originally the rocker).
*   **Application:** Used in some older agricultural machinery.

**Inversion 3: Fixed Link 3 (Coupler)**
*   When the coupler link is fixed, the mechanism becomes a **WATT's Parallel Motion Mechanism** (if $l_1=l_3$ and $l_2=l_4$, i.e., a parallelogram).
*   The input link (originally the crank) rotates, and the output link (originally the rocker) oscillates. The fixed link (originally the frame) moves.
*   **Application:** Used in early steam engines to convert rotary motion to approximate straight-line motion of a piston.

**Inversion 4: Fixed Link 4 (Rocker)**
*   When the rocker is fixed, the mechanism becomes a **COULTER's Parallel Motion Mechanism** (if $l_1=l_3$ and $l_2=l_4$, i.e., a parallelogram).
*   The input link (originally the crank) rotates, and the output link (originally the coupler) oscillates. The fixed link (originally the frame) moves.
*   **Application:** Used to guide a pump piston or a sliding element.

**Inversion 5: Fixed Link 1 (Pantograph)**
*   A special case of the parallelogram linkage is the **Pantograph**. If you fix one of the links in a parallelogram chain such that it forms a cross-shaped linkage, it can be used for:
    *   **Enlarging or Reducing Drawings:** The ratio of lengths of the links determines the magnification factor.
    *   **Reproducing shapes:** Maintaining the same angle.
*   **Application:** Drafting machines, robotic arms.

*(Reference: Ghosh A., Theory of Mechanisms and Machines, Chapter 4; Wilson C. E., Sadler P., Kinematics and Dynamics of Machinery, Chapter 6)*

---

### 4. Kinematic Analysis of Four Bar Chain

**Objective:** To determine the velocity and acceleration of each link in the mechanism. This is crucial for understanding the forces and stresses acting on the machine.

**Methods for Kinematic Analysis:**

*   **Graphical Method:** Using vector loops and instantaneous center of rotation. This is a visual approach but can be less precise.
*   **Analytical Method:** Using complex numbers or vector equations. This provides accurate results and is more suitable for computer-aided analysis.

**Vector Loop Equation:**
Consider a four-bar mechanism. Let the links be represented by complex numbers representing their position vectors.

$L_1 + L_2 + L_3 + L_4 = 0$ (for a closed loop)

where $L_i$ is the complex number representing the i-th link.
The magnitude of each complex number is the length of the link, and the argument is its angle.

Let $\theta_2, \theta_3, \theta_4$ be the angular positions of links 2, 3, and 4 with respect to the fixed link 1.
Let $r_1, r_2, r_3, r_4$ be the lengths of the links.

The position vector equation can be written as:
$r_1 e^{i \theta_1} + r_2 e^{i \theta_2} + r_3 e^{i \theta_3} + r_4 e^{i \theta_4} = 0$

Assuming link 1 is the frame and is fixed ($r_1=0$ or length is 0), and link 2 is the input crank rotating with angular velocity $\omega_2$:
$r_2 e^{i \theta_2} + r_3 e^{i \theta_3} + r_4 e^{i \theta_4} = 0$

This equation can be split into real and imaginary components, providing two equations. Since there are two unknowns ($\theta_3$ and $\theta_4$), these equations can be solved for the positions of all links.

**Velocity Analysis:**
Differentiate the vector loop equation with respect to time:
$r_2 i \omega_2 e^{i \theta_2} + r_3 i \omega_3 e^{i \theta_3} + r_4 i \omega_4 e^{i \theta_4} = 0$

Dividing by $i$:
$r_2 \omega_2 e^{i \theta_2} + r_3 \omega_3 e^{i \theta_3} + r_4 \omega_4 e^{i \theta_4} = 0$

This equation relates the angular velocities. It can be split into real and imaginary components to solve for unknown angular velocities ($\omega_3, \omega_4$) given the input angular velocity ($\omega_2$).

**Acceleration Analysis:**
Differentiate the velocity equation with respect to time:
$r_2 (\dot{\omega}_2 e^{i \theta_2} + i \omega_2^2 e^{i \theta_2}) + r_3 (\dot{\omega}_3 e^{i \theta_3} + i \omega_3^2 e^{i \theta_3}) + r_4 (\dot{\omega}_4 e^{i \theta_4} + i \omega_4^2 e^{i \theta_4}) = 0$

where $\dot{\omega}$ is the angular acceleration. This equation can be split into real and imaginary components to solve for unknown angular accelerations ($\dot{\omega}_3, \dot{\omega}_4$).

*(Reference: Rattan S. S., Theory of Machines, Chapter 5; Shigley J. E., Uicker J. J., Theory of Machines and Mechanisms, Chapter 7)*

**CO Alignment:** CO1 (Degrees of freedom, inversions), CO2 (Velocity and acceleration analysis).

---

### 5. Applications of Four Bar Chain

The four-bar chain is a fundamental building block for many mechanisms found in everyday machinery.

*   **Crank-Rocker Mechanisms:**
    *   **Reciprocating Engines:** The piston connecting rod and crankshaft form a crank-rocker mechanism. The crankshaft is the crank, the connecting rod is the coupler, and the cylinder/frame is the fixed link.
    *   **Reciprocating Pumps:** Similar to engines.
    *   **Electric Sewing Machines:** Used to drive the needle bar.
    *   **Windscreen Wiper Mechanisms:** A motor drives a crank, which oscillates a rocker arm.

*   **Double Crank Mechanisms:**
    *   **Crankshafts in Multi-Cylinder Engines:** The arrangement of multiple cranks and connecting rods.
    *   **Rocker Arm Mechanisms in some valve trains.**

*   **Double Rocker Mechanisms:**
    *   Less common, but found in some linkages for specific motion generation.

*   **Parallelogram Linkages:**
    *   **Watt's Parallel Motion:** Used in early steam engines to guide piston rods in an approximate straight line.
    *   **Lazy Tongs Mechanism:** A series of interconnected parallelograms used for lifting and positioning.
    *   **Modern Industrial Robots:** Used in some robotic arm configurations for precise positioning.

*   **Pantograph:**
    *   **Drafting Machines:** Used to draw lines parallel to reference lines at different scales.
    *   **Copying Machines:** For scaling images.
    *   **Electrically powered pantographs:** On the roofs of electric trains and trams to collect current from overhead wires.

*(Reference: Ballaney P. L., Theory of Machines and Mechanisms, Chapter 3; Myskza D. H., Machines and Mechanisms Applied Kinematic Analysis, Chapter 3)*

**CO Alignment:** CO3 (Constructing a mechanism for specified output motion), CO5 (Creating prototypes).

---

### 6. Practice Questions and Exercises

**Question 1:**
State Grashof's Law for a four-bar mechanism. If the lengths of the links of a four-bar chain are 25 mm, 50 mm, 75 mm, and 100 mm, can the mechanism form a crank-rocker mechanism? If so, in how many ways can it be configured?

**Answer 1:**
Grashof's Law states that a four-bar mechanism can have at least one link that makes a complete revolution if the sum of the lengths of the shortest link and the longest link is less than or equal to the sum of the lengths of the other two links.
Let the lengths be $l_1=25$ mm, $l_2=50$ mm, $l_3=75$ mm, $l_4=100$ mm.
$l_{min} = 25$ mm, $l_{max} = 100$ mm.
Sum of the other two links = $50 + 75 = 125$ mm.
Check Grashof's condition: $l_{min} + l_{max} = 25 + 100 = 125$ mm.
Since $125 \leq 125$, Grashof's condition is satisfied.
A crank-rocker mechanism is formed when the shortest link is the crank. In this case, the 25 mm link can act as the crank.
The mechanism can be configured as a crank-rocker in **two** ways, depending on which of the adjacent links to the shortest link is fixed:
1.  If the 50 mm link is fixed, the 25 mm link is the crank, and the 100 mm link is the rocker.
2.  If the 100 mm link is fixed, the 25 mm link is the crank, and the 50 mm link is the rocker.

**Question 2:**
A four-bar chain has links of lengths AB = 100 mm, BC = 200 mm, CD = 300 mm, and DA = 400 mm. Determine if this mechanism satisfies Grashof's condition. If link DA is the fixed link, what type of mechanism is it?

**Answer 2:**
Link lengths are: $l_1 = 400$ mm (fixed link DA), $l_2 = 100$ mm (AB), $l_3 = 200$ mm (BC), $l_4 = 300$ mm (CD).
$l_{min} = 100$ mm, $l_{max} = 400$ mm.
Sum of the other two links = $l_3 + l_4 = 200 + 300 = 500$ mm.
Check Grashof's condition: $l_{min} + l_{max} = 100 + 400 = 500$ mm.
Since $500 \leq 500$, Grashof's condition is satisfied.
The shortest link is AB (100 mm). The link adjacent to the shortest link (AB) and the fixed link (DA) is CD (300 mm). The other adjacent link to AB is BC (200 mm).
The shortest link is AB (100 mm).
The link adjacent to AB and the fixed link (DA) is CD.
If DA (400 mm) is fixed, then AB (100 mm) is the crank. BC (200 mm) is the coupler. CD (300 mm) is the rocker.
Since the shortest link (AB) is the crank, and Grashof's condition is met, it is a **Crank Rocker Mechanism**.

**Question 3:**
List the four inversions of a four-bar chain and describe one application for each.

**Answer 3:**
1.  **Inversion 1 (Fixed Crank):** Not a standard term, this refers to the case where the crank (usually link 2) is fixed. This results in a double rocker or double idler mechanism. Application: Some specialized linkages.
2.  **Inversion 2 (Fixed Coupler):** When the coupler (link 3) is fixed, and the links are of specific lengths (e.g., parallelogram), it forms Watt's parallel motion. Application: Early steam engines for approximate straight-line motion.
3.  **Inversion 3 (Fixed Rocker):** When the rocker (link 4) is fixed, and the links are of specific lengths (e.g., parallelogram), it forms Coulter's parallel motion. Application: Guiding sliding elements.
4.  **Inversion 4 (Fixed Frame):** This is the standard four-bar mechanism (Inversion 1 of the chain). Application: Engine crankshaft, windscreen wipers.

*(Note: The numbering of inversions can vary in different texts. The key is identifying which link is fixed.)*

**Question 4 (Conceptual):**
Why is it important to perform velocity and acceleration analysis for mechanisms?

**Answer 4:**
Velocity and acceleration analysis are crucial for:
*   **Understanding the motion:** Predicting the speed and rate of change of speed of all parts of the mechanism.
*   **Force analysis:** Since forces cause acceleration (F=ma), knowing the acceleration is essential for calculating the inertial forces acting on the links. These forces, along with applied forces, determine the total forces that the links and joints must withstand.
*   **Stress and Material Selection:** Understanding the forces allows engineers to determine the stresses on the components and select appropriate materials and dimensions to prevent failure.
*   **Vibration Analysis:** High accelerations can lead to vibrations, which can cause noise, wear, and premature failure.
*   **Balancing:** Analyzing accelerations helps in designing counterweights to balance the inertial forces.

---

### 7. Important Points to Remember

*   A four-bar chain is the simplest closed kinematic chain with four links and four turning pairs.
*   It has one degree of freedom, meaning one input determines the position of all other links.
*   Grashof's Law is essential for predicting whether a link can achieve full rotation.
*   The inversions of a four-bar chain lead to different types of motion and applications.
*   Parallelogram linkages provide parallel motion.
*   Kinematic analysis (velocity and acceleration) is fundamental for the design and analysis of any machine, enabling force calculations and ensuring structural integrity.
*   The vector loop equation is a powerful tool for analytical kinematic analysis.

---

This concludes the study notes for the Four Bar Chain. Further exploration can be done through the suggested textbooks and reference books to delve deeper into specific mathematical derivations and advanced applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
