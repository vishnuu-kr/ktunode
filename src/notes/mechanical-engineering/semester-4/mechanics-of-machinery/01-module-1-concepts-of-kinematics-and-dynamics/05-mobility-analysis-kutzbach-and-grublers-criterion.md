---
title: "Mobility analysis - Kutzbach and Grubler’s criterion"
subject: "MECHANICS OF MACHINERY"
module: "Module 1: Concepts of Kinematics and Dynamics"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462fd0"
status: "completed"
scrapedAt: "2026-05-20T17:55:01.019Z"
---
# MECHANICS OF MACHINERY - Module 1: Concepts of Kinematics and Dynamics

## Topic: Mobility Analysis - Kutzbach and Gruebler's Criterion

### **Learning Outcomes:**

Upon successful completion of this topic, you will be able to:

*   Define mobility and understand its significance in mechanisms.
*   Apply Kutzbach's criterion to determine the degrees of freedom of a mechanism.
*   Apply Gruebler's criterion for planar mechanisms.
*   Distinguish between the applicability and limitations of Kutzbach's and Gruebler's criteria.
*   Analyze mechanisms to determine if they are statically determinate or indeterminate.
*   Relate mobility analysis to the kinematic inversions of mechanisms (CO1).

### **1. Introduction to Mobility and Degrees of Freedom (DOF)**

**Key Concept:** A mechanism is a system of interconnected rigid bodies (links) designed to transmit or modify motion and force. The *mobility* of a mechanism refers to the number of independent inputs required to fully define its configuration or motion. This is also known as the *degrees of freedom (DOF)*.

*   **Definition of Mobility (M):** The number of independent parameters that must be specified to completely define the position and orientation of all the links in a mechanism relative to a fixed reference.

*   **Significance of Mobility:**
    *   A mechanism with M = 1 is a *constrained mechanism*. It requires a single input (e.g., a motor) to control the motion of all other links. Most practical mechanisms fall into this category.
    *   A mechanism with M > 1 is an *unconstrained mechanism*. It requires more than one input to define its configuration.
    *   A mechanism with M < 1 (including M = 0 or negative) is a *statically determinate* or *pre-determined* structure. If M=0, it's a statically determinate frame. If M<0, it's statically indeterminate, meaning it has redundant constraints.

**Textbook Reference:**
*   Ballaney P. L. (2005) discusses mobility as the number of inputs to control the mechanism's motion.
*   Rattan S. S. (2009) emphasizes DOF as the independent variables needed to define the mechanism's configuration.

### **2. Mobility Analysis: Kutzbach's Criterion**

**Key Concept:** Kutzbach's criterion is a general formula for calculating the degrees of freedom of any mechanism, regardless of whether it's planar, spatial, or a combination. It accounts for the number of links, the number of joints, and the number of constraints imposed by each joint.

**The Formula:**

For a mechanism with:
*   $n$ = total number of links (including the fixed link, often called the frame)
*   $j$ = total number of joints
*   $f_i$ = degrees of freedom allowed by the $i$-th joint (or the number of constraints imposed by the $i$-th joint, which is $6 - f_i$ for spatial mechanisms)

**Kutzbach's Criterion (General Formula for Spatial Mechanisms):**

$M = 6(n - 1) - \sum_{i=1}^{j} f_i$

Where:
*   $M$ is the mobility of the mechanism.
*   $6(n - 1)$ represents the total possible degrees of freedom of $n$ links in 3D space, assuming each link could move freely relative to the fixed link.
*   $\sum_{i=1}^{j} f_i$ is the sum of the degrees of freedom allowed by all the joints.

**Simplification for Planar Mechanisms:**

For planar mechanisms, each link has 3 degrees of freedom in a plane (2 translational and 1 rotational). Thus, the total possible degrees of freedom of $n$ links in a plane are $3(n-1)$.

**Kutzbach's Criterion (for Planar Mechanisms):**

$M = 3(n - 1) - \sum_{i=1}^{j} f_i$

Where:
*   $f_i$ is the degrees of freedom allowed by the $i$-th joint in a plane.

**Common Joint Types and their Degrees of Freedom ($f_i$) in a Plane:**

| Joint Type             | Description                                       | Constraints ($6-f_i$ for spatial, $3-f_i$ for planar) | Degrees of Freedom in Plane ($f_i$) |
| :--------------------- | :------------------------------------------------ | :------------------------------------------------- | :---------------------------------- |
| **Revolute Joint (R)** | Pin joint, allows rotation about one axis.        | 2                                                  | 1                                   |
| **Prismatic Joint (P)**| Sliding joint, allows translation along one axis. | 2                                                  | 1                                   |
| **Higher Pair Joint**  | Contact between two surfaces (e.g., cam-follower) | Variable (depends on contact geometry)             | 2 (e.g., rolling contact)           |

*   **Important Note on Higher Pairs:** A higher pair introduces more constraints than a lower pair (like revolute or prismatic). For planar mechanisms, a higher pair typically allows 2 DOF, meaning it imposes 1 constraint ($3 - 2 = 1$). Kutzbach's formula is particularly useful when dealing with mechanisms involving higher pairs where Gruebler's criterion might be insufficient.

**Example: Four-Bar Mechanism (Planar)**

*   $n = 4$ (fixed link, crank, coupler, rocker)
*   $j = 4$ (four revolute joints)
*   Each revolute joint ($f_i$) allows 1 DOF.
*   $\sum f_i = 4 \times 1 = 4$

Using Kutzbach's criterion for planar mechanisms:
$M = 3(n - 1) - \sum f_i = 3(4 - 1) - 4 = 3(3) - 4 = 9 - 4 = 5$

**Wait! This result (M=5) seems incorrect for a typical four-bar mechanism, which we know has M=1.** This highlights a crucial aspect of Kutzbach's criterion and the need for a deeper understanding. The issue here is that Kutzbach's criterion, in its basic form, assumes *no redundant constraints* and that *each link is capable of independent motion*. However, real mechanisms often have constraints that are implicitly satisfied by the geometry, or links are not capable of independent motion.

**Correct Application of Kutzbach's Criterion (and a common pitfall):**

The formula $M = 3(n - 1) - \sum f_i$ is often simplified in many textbooks to:

$M = 3(n - 1) - 2j$  (Assuming all joints are lower pairs allowing 1 DOF in a plane)

Let's re-evaluate the four-bar mechanism with this simplified version:
*   $n = 4$
*   $j = 4$

$M = 3(4 - 1) - 2(4) = 3(3) - 8 = 9 - 8 = 1$

This gives the correct mobility (M=1) for the four-bar mechanism.

**Why the difference?** The term $2j$ in the simplified formula implicitly assumes that each joint provides *two* constraints in a planar system (since $3 - f_i = 3 - 1 = 2$ for a revolute or prismatic joint). Kutzbach's original formulation with $\sum f_i$ is more general, but its correct application requires careful consideration of the degrees of freedom *actually allowed* by each joint and the potential for redundant constraints or special geometrical conditions.

**Important Takeaway:** For planar mechanisms with only lower pairs (revolute and prismatic joints), the simplified Kutzbach's formula $M = 3(n-1) - 2j$ is often used and yields the correct mobility. However, understanding the general form with $\sum f_i$ is crucial for mechanisms with higher pairs or spatial mechanisms.

### **3. Mobility Analysis: Gruebler's Criterion**

**Key Concept:** Gruebler's criterion is a special case of Kutzbach's criterion specifically for **planar mechanisms** where all joints are **lower pairs** (revolute or prismatic) and there are **no redundant constraints**. It's a simpler formula that is widely applicable to many common planar mechanisms.

**The Formula (for Planar Mechanisms with only Lower Pairs):**

$M = 3(n - 1) - 2j$

Where:
*   $M$ = Mobility of the mechanism.
*   $n$ = Total number of links (including the fixed link).
*   $j$ = Total number of lower pair joints (each allowing 1 DOF in a plane).

**This formula is derived from Kutzbach's planar formula ($M = 3(n-1) - \sum f_i$) by assuming:**
*   $f_i = 1$ for all $j$ joints (since they are lower pairs).
*   $\sum f_i = j \times 1 = j$.
*   However, the derivation also implicitly accounts for the fact that each lower pair in a planar system introduces *two* constraints (3 DOF per link - 1 DOF allowed by joint = 2 constraints). So, the term becomes $2j$.

**When Gruebler's Criterion is Applicable:**

*   **Planar Mechanisms ONLY.**
*   **All joints are lower pairs** (revolute or prismatic).
*   **No redundant constraints:** The mechanism is not over-constrained.
*   **No special geometric conditions:** The mechanism does not exhibit over-mobility due to specific link lengths or arrangements.

**When Gruebler's Criterion May NOT be Accurate:**

*   **Spatial Mechanisms:** It cannot be used for 3D mechanisms.
*   **Mechanisms with Higher Pairs:** The formula assumes each joint imposes 2 constraints, which is not true for higher pairs.
*   **Statically Indeterminate Mechanisms:** If a mechanism has redundant constraints (e.g., a structure that is essentially a rigid frame), Gruebler's criterion might yield a mobility of 0 or less, but the actual mobility might be different due to the over-constraint.
*   **Over-mobility due to geometry:** Some mechanisms might have more mobility than predicted by Gruebler's criterion due to specific geometric conditions (e.g., parallelogram linkage, which is a special case of the four-bar).

**Example: Slider-Crank Mechanism (Planar)**

*   $n = 4$ (fixed link, crank, connecting rod, slider)
*   $j = 4$ (1 revolute at crank-ground, 1 revolute at crank-coupler, 1 revolute at coupler-slider, 1 prismatic at slider-ground)
*   All are lower pairs.

Using Gruebler's Criterion:
$M = 3(n - 1) - 2j = 3(4 - 1) - 2(4) = 3(3) - 8 = 9 - 8 = 1$

This correctly indicates that the slider-crank mechanism has one degree of freedom and can be controlled by driving the crank.

**Example: Geneva Wheel (Planar)**

*   $n = 2$ (fixed frame, rotating wheel) + number of moving parts on the wheel (e.g., pins, slot)
    *   Let's consider the main components: Frame (1), Rotating Disk (1), Pins (say, 4) + Slots (4).
    *   A more precise count for a typical 4-station Geneva wheel:
        *   Links: 1 (frame) + 1 (disk) + 4 (pins) = 6 links.
        *   Joints: 1 (pin-disk) + 4 (pin-frame) + 4 (pin-slot interaction) = 9 joints.
        *   Each pin-disk connection is revolute ($f=1$).
        *   Each pin-frame connection is revolute ($f=1$).
        *   The pin-slot interaction is more complex. If we consider the point contact sliding in the slot, it can be approximated as allowing 1 DOF in planar motion (translation along the slot). However, a more accurate analysis often treats the slot as a cam-follower pair (higher pair), which might allow 2 DOF.

    *   **Let's use the simplified approach assuming lower pairs:**
        *   If we consider the disk and pins as individual links:
            *   $n = 1$ (frame) + 1 (disk) + 4 (pins) = 6 links.
            *   $j = 1$ (disk to frame) + 4 (pins to frame) + 4 (pins to slots) = 9 joints.
            *   All assumed revolute/prismatic (lower pairs).

        *   Using Gruebler's: $M = 3(6 - 1) - 2(9) = 3(5) - 18 = 15 - 18 = -3$.
        *   This negative value strongly suggests over-constraint or a structure. However, the Geneva wheel is designed to have M=1. This mismatch indicates that Gruebler's criterion is not appropriate here, likely due to the nature of the slot-pin interaction and potential over-mobility not captured by simple lower pair assumptions.

    *   **Using Kutzbach's general planar formula ($M = 3(n-1) - \sum f_i$):**
        *   $n = 1$ (frame) + 1 (disk) + 4 (pins) = 6 links.
        *   $j = 1$ (disk-frame, revolute, $f=1$) + 4 (pins-frame, revolute, $f=1$) + 4 (pin-slot, assume translational, $f=1$) = 9 joints.
        *   $\sum f_i = 1 + 4(1) + 4(1) = 9$.
        *   $M = 3(6 - 1) - 9 = 3(5) - 9 = 15 - 9 = 6$. Still not M=1.

    *   **The Geneva Wheel Problem:** The issue is that the slots are not truly independent constraints. Once the disk rotates, the pins are constrained by the slots, and the slots are part of the disk. The effective number of constraints and degrees of freedom are less straightforward. A common way to analyze the Geneva Wheel is to consider the disk and its pins as one unit, interacting with the frame.

    *   **A more practical view of the Geneva Wheel:** One input (driving the disk) is sufficient to control its intermittent motion. So, $M=1$. The failure of Gruebler's criterion highlights its limitations when dealing with mechanisms where the constraints are not simple lower pairs or when there are complex interactions.

**Reference Book Insight:**
*   Shigley & Uicker (2010) and Wilson & Sadler (2005) often emphasize that Gruebler's criterion is a guideline and that special cases might require closer examination. They also stress the importance of visual inspection and understanding the intended motion.

### **4. Comparing Kutzbach's and Gruebler's Criteria**

| Feature          | Kutzbach's Criterion (General)                      | Gruebler's Criterion (Planar, Lower Pairs Only) |
| :--------------- | :-------------------------------------------------- | :---------------------------------------------- |
| **Applicability**| Planar, Spatial, and mixed mechanisms.              | Planar mechanisms ONLY.                         |
| **Joint Types**  | Handles lower pairs ($f_i=1$) and higher pairs ($f_i>1$ or complex $f_i$). | Assumes ONLY lower pairs (revolute/prismatic) with $f_i=1$ in plane. |
| **Complexity**   | More general, requires detailed knowledge of joint DOFs. | Simpler formula, easier to apply for basic cases. |
| **Accuracy**     | Generally more accurate, especially for complex mechanisms. | Accurate for simple planar mechanisms; can be misleading for higher pairs or special geometries. |
| **Formula (Planar)** | $M = 3(n - 1) - \sum f_i$                          | $M = 3(n - 1) - 2j$                             |
| **Formula (Spatial)**| $M = 6(n - 1) - \sum f_i$                          | Not applicable.                                 |

**Key Point:** Gruebler's criterion is a specific simplification of Kutzbach's criterion for a common class of mechanisms. If your mechanism is planar and uses only pin or slider joints, Gruebler's criterion is likely sufficient. For any other case (spatial, higher pairs, or if you're unsure), Kutzbach's general criterion is the safer and more robust choice.

### **5. Statically Determinate vs. Statically Indeterminate Mechanisms**

**Key Concept:**
*   **Statically Determinate Mechanism:** A mechanism with mobility $M \ge 1$. It requires external input to move.
*   **Statically Indeterminate Structure/Mechanism:** A mechanism with mobility $M \le 0$.
    *   If $M = 0$, it's a statically determinate frame or structure. It's rigid and requires no external force to maintain its shape, but it cannot move.
    *   If $M < 0$, it's a statically indeterminate frame or structure. It's over-constrained and has redundant supports or connections. It cannot move without deforming or breaking unless the redundant constraints are removed.

**Relevance to Mobility Analysis:**
The mobility calculation directly tells us about the static determinacy.

*   If $M = 1$, it's a constrained mechanism that can be driven by a single input.
*   If $M = 0$, it's a rigid structure.
*   If $M < 0$, it implies redundant constraints, making it a statically indeterminate structure.

**Example:**
Consider a simple triangular frame made of three members connected by pins.
*   $n = 3$ (3 links)
*   $j = 3$ (3 joints, each revolute, $f=1$)
*   Using Gruebler's (assuming planar): $M = 3(3 - 1) - 2(3) = 3(2) - 6 = 6 - 6 = 0$.
    *   This indicates it's a statically determinate frame. It's rigid and won't move.

Now, add a fourth member that connects two opposite vertices of the triangle, forming a square, but connect it with another pin.
*   $n = 4$ (4 links)
*   $j = 4$ (4 joints, revolute, $f=1$)
*   Using Gruebler's: $M = 3(4 - 1) - 2(4) = 3(3) - 8 = 9 - 8 = 1$.
    *   This predicts mobility of 1. However, if all members are pinned, a square is also rigid. There's a discrepancy! This is a classic example of over-mobility predicted by Gruebler's when geometrical constraints are not accounted for. A square linkage is indeed rigid. The correct analysis here is that the joints are redundant for rigidity.

*   Consider a five-bar linkage with all revolute joints.
    *   $n = 5$
    *   $j = 5$
    *   $M = 3(5-1) - 2(5) = 3(4) - 10 = 12 - 10 = 2$.
        *   This means a five-bar linkage has two degrees of freedom. You would need two independent inputs to control its configuration.

**Course Outcome Alignment:**
*   **CO1: Calculate degrees of freedom of mechanisms and Interpret their inversions.** Mobility analysis is the direct method for calculating DOF. Understanding DOF is essential for interpreting inversions because the number of links and joints that define a mechanism's mobility are the same components that form its inversions. For example, a slider-crank mechanism ($M=1$) has three inversions, all of which are also $M=1$.
*   **CO2, CO3:** Knowing the DOF helps in understanding how a mechanism can be actuated and if it can achieve a specified output motion. A mechanism with $M=1$ is a prime candidate for controlled motion.

### **6. Important Points to Remember**

*   **Mobility (M) vs. Number of Inputs:** For a practical mechanism, $M=1$ is desired, meaning only one input is required.
*   **Gruebler's is a Shortcut:** Use Gruebler's ($M = 3(n-1) - 2j$ for planar) only for planar mechanisms with all lower pairs.
*   **Kutzbach is General:** Use Kutzbach's ($M = 3(n-1) - \sum f_i$ for planar, $M = 6(n-1) - \sum f_i$ for spatial) when in doubt or when dealing with higher pairs or spatial mechanisms.
*   **Count Links and Joints Carefully:** Always include the fixed link (frame) in the count of $n$. Count every pivot or slider connection as a joint.
*   **$f_i$ for Joints:**
    *   Revolute (pin): $f_i = 1$ (planar)
    *   Prismatic (slider): $f_i = 1$ (planar)
    *   Higher Pairs (e.g., cam-follower): Often $f_i = 2$ (planar) for rolling contact, but can vary.
*   **Negative Mobility:** Indicates a statically indeterminate structure (over-constrained).
*   **Zero Mobility:** Indicates a statically determinate frame (rigid structure).
*   **Special Geometries:** Be aware that some mechanisms may have more mobility than predicted if their geometry allows for special configurations (e.g., parallelogram linkage). These are "paradoxical" mechanisms where Gruebler's fails.

### **7. Practice Questions and Exercises**

**Instructions:** For each mechanism below, determine the mobility using the appropriate criterion. State your assumptions.

**Question 1:**
Consider a planar mechanism with 5 links and 7 revolute joints.
*   **Analysis:**
    *   This is a planar mechanism with only revolute joints (lower pairs).
    *   We can use Gruebler's criterion: $M = 3(n - 1) - 2j$
    *   $n = 5$, $j = 7$
    *   $M = 3(5 - 1) - 2(7) = 3(4) - 14 = 12 - 14 = -2$
*   **Answer:** The mobility is -2. This indicates a statically indeterminate structure (over-constrained).

**Question 2:**
A Watt's mechanism (a type of six-bar linkage) is a planar mechanism. It has one fixed link, two cranks, two levers, and one connecting rod. It also has a cross-link.
*   Count the links ($n$): Fixed link + 2 cranks + 2 levers + 1 connecting rod + 1 cross-link = 1 + 2 + 2 + 1 + 1 = 7 links.
*   Count the joints ($j$): Assuming all are revolute joints. Each link connects to at least two other links (or the frame).
    *   Crank 1: 1 joint to frame, 1 joint to lever.
    *   Crank 2: 1 joint to frame, 1 joint to lever.
    *   Lever 1: 1 joint to crank, 1 joint to connecting rod.
    *   Lever 2: 1 joint to crank, 1 joint to connecting rod.
    *   Connecting Rod: 2 joints to levers.
    *   Cross-link: 2 joints to levers.
    *   Total joints = 2 (crank-frame) + 2 (lever-frame) + 2 (crank-lever) + 2 (lever-connecting rod) + 2 (connecting rod-lever) + 2 (cross-link-lever) = 12 joints.
    *   **Wait, let's simplify the counting:** Think of connections.
        *   Frame connects to 2 cranks (2 joints).
        *   Crank 1 connects to Lever 1 (1 joint).
        *   Crank 2 connects to Lever 2 (1 joint).
        *   Lever 1 connects to Connecting Rod and Cross-link (2 joints).
        *   Lever 2 connects to Connecting Rod and Cross-link (2 joints).
        *   Connecting Rod connects to Lever 1 and Lever 2 (already counted).
        *   Cross-link connects to Lever 1 and Lever 2 (already counted).
        *   So, total joints $j = 2 + 1 + 1 + 2 + 2 = 8$.
*   **Analysis:**
    *   Planar mechanism, all revolute joints (lower pairs).
    *   Use Gruebler's criterion: $M = 3(n - 1) - 2j$
    *   $n = 7$, $j = 8$
    *   $M = 3(7 - 1) - 2(8) = 3(6) - 16 = 18 - 16 = 2$
*   **Answer:** The mobility is 2. This means a Watt's mechanism has two degrees of freedom and requires two independent inputs to control its motion.

**Question 3:**
Consider a spatial mechanism consisting of a rotating platform connected to a fixed base by a universal joint and a ball joint. The platform itself has a slider mechanism on it, with a connecting rod and a crank.
*   **Analysis:**
    *   This is a spatial mechanism, so Gruebler's criterion is NOT applicable. We must use Kutzbach's general criterion for spatial mechanisms: $M = 6(n - 1) - \sum f_i$.
    *   Let's count the links ($n$):
        1.  Fixed Base (Frame)
        2.  Rotating Platform
        3.  Slider
        4.  Crank
        5.  Connecting Rod
        *   So, $n = 5$.
    *   Let's count the joints and their DOFs ($f_i$):
        1.  Universal Joint (Connects platform to base): Allows 2 DOFs (two perpendicular rotations). $f_1 = 2$.
        2.  Ball Joint (Connects crank to base): Allows 3 DOFs (arbitrary rotation about a point). $f_2 = 3$.
        3.  Revolute Joint (Crank to connecting rod): Allows 1 DOF. $f_3 = 1$.
        4.  Prismatic Joint (Slider on platform): Allows 1 DOF (translation along an axis). $f_4 = 1$.
        5.  Assume the connecting rod is also pinned to the platform (implicitly, or it's a 3-bar mechanism). Let's assume it connects to the platform with a revolute joint. $f_5 = 1$.
    *   Sum of joint DOFs: $\sum f_i = 2 + 3 + 1 + 1 + 1 = 8$.
    *   Calculate Mobility: $M = 6(n - 1) - \sum f_i = 6(5 - 1) - 8 = 6(4) - 8 = 24 - 8 = 16$.
*   **Answer:** The mobility is 16. This seems very high, indicating that the problem description might be oversimplified, or the combination of joints leads to high freedom. The analysis hinges critically on correctly identifying all links and joints and their respective DOFs in space. For example, the slider mechanism on the platform might be intended to be actuated independently of the platform's rotation.

**Question 4 (Conceptual):**
If a planar mechanism calculated using Gruebler's criterion results in a mobility of $M = 0$, what can you conclude about the mechanism?
*   **Answer:** You can conclude that it is a rigid structure (statically determinate frame). It has no degrees of freedom for motion, but it is not over-constrained.

**Question 5 (Conceptual):**
If a planar mechanism calculated using Kutzbach's criterion ($M = 3(n-1) - \sum f_i$) with all lower pairs results in $M = 1$, but the mechanism is observed to be a rigid structure, what might be the reason?
*   **Answer:** The most likely reason is that the mechanism has redundant constraints or a special geometry that locks its motion. Kutzbach's criterion, while general, assumes that the constraints are independent and not geometrically reinforcing. This situation is often referred to as "paradoxical" mobility or over-constrained structures.

---

This concludes Module 1, Topic: Mobility Analysis. Mastering these concepts is foundational for understanding how mechanisms behave and how they can be actuated.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
