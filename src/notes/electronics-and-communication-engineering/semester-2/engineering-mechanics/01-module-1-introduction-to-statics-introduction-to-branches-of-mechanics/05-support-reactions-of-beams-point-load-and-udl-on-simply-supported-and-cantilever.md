---
title: "Support reactions of beams (point load and UDL on Simply supported and cantilever beams)"
subject: "ENGINEERING MECHANICS"
module: "Module 1: Introduction to statics:   Introduction to branches  of mechanics"
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da312"
status: "completed"
scrapedAt: "2026-05-23T17:38:47.337Z"
---
# Engineering Mechanics: Module 1 - Introduction to Statics: Support Reactions of Beams

Welcome, everyone, to our exploration of Engineering Mechanics! In this module, we're laying the foundational stones for understanding how forces act upon stationary objects – that's what **Statics** is all about. Think of it as the silent, unmoving heroes of our world: bridges holding up traffic, buildings standing tall, or even the table you're studying at right now. They might look still, but internally, they're engaged in a constant battle of forces.

We'll start by briefly touching upon the broader branches of mechanics, as outlined in your excellent textbooks by Timoshenko & Young, Hibbeler, and Shames. Mechanics, in essence, is the science that deals with the behavior of physical bodies when subjected to the action of forces. It's typically divided into:

*   **Statics:** This is our focus today. It deals with bodies at rest or moving with constant velocity. The key here is **equilibrium**. If an object is in equilibrium, the net force and net moment acting on it are zero.
*   **Dynamics:** This branch deals with bodies in motion, where forces cause changes in motion. This is further broken down into kinematics (study of motion itself) and kinetics (study of forces that cause motion).

While we'll dip our toes into the broader field, our main objective today is to understand a fundamental concept in statics: **Support Reactions of Beams**. This is crucial for understanding how structures behave under load.

### What are Support Reactions?

Imagine a simple wooden plank (a beam!) resting on two bricks. When you place a weight on the plank, it doesn't just sink into the ground, does it? The bricks exert upward forces to counteract the downward pull of gravity on the plank and the weight you placed. These upward forces exerted by the supports are what we call **support reactions**.

In structural engineering, beams are common structural elements used to carry loads over a span. These loads can be anything from the weight of the structure itself, people walking on a floor, furniture, or even wind and snow. For a beam to be stable and not collapse, the supports must provide reaction forces (and sometimes moments) that balance these applied loads. This directly relates to our **Course Outcome 1 (CO1)**: understanding forces and moments, and **CO3**: applying conditions of equilibrium. Without understanding these reactions, we can't ensure the beam remains in equilibrium.

### Types of Beams and Supports

Before we dive into calculating reactions, let's identify the common types of beams and the supports they might rest on. This will help us apply **CO4**: identifying appropriate principles.

**Common Beam Types:**

*   **Simply Supported Beam:** This is perhaps the most fundamental. It's a beam supported at both ends, typically with one end allowing rotation and vertical movement (a roller support) and the other end allowing rotation but preventing vertical movement (a pin or hinged support). Think of a plank laid across two sawhorses – it's free to roll slightly on the sawhorses and rotate.
*   **Cantilever Beam:** This beam is fixed at one end and free at the other. Imagine a diving board or a balcony extending from a wall. The fixed end must provide not only vertical and horizontal support but also a **moment** reaction to prevent rotation.

**Common Support Types:**

1.  **Pin Support (or Hinge):** A pin support prevents translation (movement in any direction) but allows rotation. It can provide both a vertical reaction force ($R_y$) and a horizontal reaction force ($R_x$).
2.  **Roller Support:** A roller support prevents translation perpendicular to the surface it rolls on. If the surface is horizontal, it provides only a vertical reaction force ($R_y$). It allows both horizontal translation and rotation. Think of a train wheel on a track.
3.  **Fixed Support (or Built-in):** A fixed support prevents both translation and rotation. It can provide a vertical reaction force ($R_y$), a horizontal reaction force ($R_x$), and a **moment reaction** ($M$). This is the strongest type of support.

### Loads on Beams

For our discussion today, we'll focus on two primary types of loads:

1.  **Point Load (Concentrated Load):** This is a load that acts at a single point on the beam. It's often represented by a downward arrow. Think of someone standing on a narrow plank, or a bolt connecting two members.
2.  **Uniformly Distributed Load (UDL):** This is a load spread evenly over a length of the beam. It's often represented by a series of small arrows or a shaded rectangle. Imagine the weight of concrete flooring or a uniform layer of snow on a bridge. For calculation purposes, a UDL can be treated as a single equivalent concentrated load acting at the **centroid** of the distributed load. If the UDL has an intensity of $w$ (force per unit length) over a length $L$, the total equivalent load is $W = w \times L$, and it acts at the midpoint of that length ($L/2$).

### Determining Support Reactions: The Core Principle

The fundamental principle for finding support reactions is the **Principle of Equilibrium**. For a rigid body to remain at rest (or in equilibrium), the sum of all forces acting on it, and the sum of all moments acting on it, must be zero. This is encapsulated in our three equations of static equilibrium:

*   $\Sigma F_x = 0$: The sum of all horizontal forces must be zero.
*   $\Sigma F_y = 0$: The sum of all vertical forces must be zero.
*   $\Sigma M = 0$: The sum of all moments about any point must be zero.

These equations are the backbone of statics and are directly tied to **CO3** and **CO4**. We'll be using these to solve for the unknown reaction forces and moments at the supports. Remember, the unknowns are the reactions we need to find.

Let's work through some examples to solidify these concepts.

### Example 1: Simply Supported Beam with a Point Load

**Scenario:** Imagine a simple bridge deck (our beam) spanning between two piers. Let's say the piers are 10 meters apart. A truck weighing 50 kN is parked exactly at the center of the bridge.

*   **Beam:** Simply supported.
*   **Supports:**
    *   At point A (left pier), a pin support. This means $R_{Ax}$ (horizontal reaction) and $R_{Ay}$ (vertical reaction) exist.
    *   At point B (right pier), a roller support. This means only $R_{By}$ (vertical reaction) exists.
*   **Load:** A point load of 50 kN acting downwards at the center (5 meters from A and 5 meters from B).

**Applying Equilibrium:**

1.  **Draw a Free Body Diagram (FBD):** This is absolutely critical! An FBD is a diagram showing only the beam, its supports, the applied loads, and the reaction forces at the supports. This is where **CO2** comes into play – identifying the components of forces.

    *   Draw a horizontal line representing the beam of length 10m.
    *   At the left end (A), draw an upward arrow labeled $R_{Ay}$ and a horizontal arrow to the right labeled $R_{Ax}$.
    *   At the right end (B), draw an upward arrow labeled $R_{By}$.
    *   At the center (5m from A), draw a downward arrow labeled 50 kN.

2.  **Apply Equilibrium Equations:**

    *   **$\Sigma F_x = 0$**: The only horizontal force is $R_{Ax}$. So, $R_{Ax} = 0$. This makes sense because there are no other horizontal forces applied to the beam.
        *(This is a good point to remember: if no external horizontal forces act on a simply supported beam, the horizontal reaction at the supports will be zero.)*

    *   **$\Sigma F_y = 0$**: We have upward forces $R_{Ay}$ and $R_{By}$, and a downward force of 50 kN.
        $R_{Ay} + R_{By} - 50 \text{ kN} = 0$
        $R_{Ay} + R_{By} = 50 \text{ kN}$

    *   **$\Sigma M = 0$**: We need to choose a point to sum moments about. It's usually easiest to pick one of the supports because that eliminates one of the unknown reaction forces from the moment equation. Let's choose point A.
        Remember, moment = force × perpendicular distance. We'll consider counter-clockwise moments as positive.
        *   Moment due to $R_{Ay}$ about A: $R_{Ay} \times 0 = 0$ (since it passes through A).
        *   Moment due to $R_{Ax}$ about A: $R_{Ax} \times 0 = 0$ (since it passes through A).
        *   Moment due to the 50 kN load about A: This force acts downwards at 5m from A, causing a clockwise moment. So, $-50 \text{ kN} \times 5 \text{ m}$.
        *   Moment due to $R_{By}$ about A: This force acts upwards at 10m from A, causing a counter-clockwise moment. So, $+R_{By} \times 10 \text{ m}$.

        Summing these moments:
        $0 + 0 - (50 \text{ kN} \times 5 \text{ m}) + (R_{By} \times 10 \text{ m}) = 0$
        $-250 \text{ kNm} + 10 R_{By} \text{ m} = 0$
        $10 R_{By} \text{ m} = 250 \text{ kNm}$
        $R_{By} = \frac{250 \text{ kNm}}{10 \text{ m}} = 25 \text{ kN}$

3.  **Solve for Remaining Unknowns:** Now that we have $R_{By}$, we can substitute it back into the $\Sigma F_y = 0$ equation:
    $R_{Ay} + R_{By} = 50 \text{ kN}$
    $R_{Ay} + 25 \text{ kN} = 50 \text{ kN}$
    $R_{Ay} = 50 \text{ kN} - 25 \text{ kN} = 25 \text{ kN}$

**Result:**
*   $R_{Ax} = 0$
*   $R_{Ay} = 25 \text{ kN}$ (upwards)
*   $R_{By} = 25 \text{ kN}$ (upwards)

This makes intuitive sense! For a symmetrically loaded simply supported beam, the reactions should be equal. Each pier carries half the total load. This problem directly tests your ability to apply **CO3** and **CO4**, and understand force components as per **CO2**.

### Example 2: Simply Supported Beam with a UDL

**Scenario:** Let's extend our bridge example. Suppose instead of a truck, the bridge deck itself has a uniform weight, say 10 kN per meter, spread over its entire 10-meter length.

*   **Beam:** Simply supported (same supports A and B).
*   **Load:** Uniformly distributed load of $w = 10 \text{ kN/m}$ over the entire 10m span.

**Applying Equilibrium:**

1.  **Convert UDL to Equivalent Point Load:**
    *   Total load $W = w \times L = 10 \text{ kN/m} \times 10 \text{ m} = 100 \text{ kN}$.
    *   This equivalent load acts at the midpoint of the UDL, which is at $10 \text{ m} / 2 = 5 \text{ m}$ from A.

2.  **Draw FBD:**
    *   Beam of 10m.
    *   $R_{Ax}$ (horizontal) and $R_{Ay}$ (vertical) at A.
    *   $R_{By}$ (vertical) at B.
    *   A single downward arrow of 100 kN acting at the center (5m from A).

3.  **Apply Equilibrium Equations:** (These are the same equations as before, but with a different load!)

    *   **$\Sigma F_x = 0$**: $R_{Ax} = 0$.

    *   **$\Sigma F_y = 0$**: $R_{Ay} + R_{By} - 100 \text{ kN} = 0$
        $R_{Ay} + R_{By} = 100 \text{ kN}$

    *   **$\Sigma M_A = 0$**:
        $0 + 0 - (100 \text{ kN} \times 5 \text{ m}) + (R_{By} \times 10 \text{ m}) = 0$
        $-500 \text{ kNm} + 10 R_{By} \text{ m} = 0$
        $10 R_{By} \text{ m} = 500 \text{ kNm}$
        $R_{By} = \frac{500 \text{ kNm}}{10 \text{ m}} = 50 \text{ kN}$

4.  **Solve for Remaining Unknowns:**
    $R_{Ay} + R_{By} = 100 \text{ kN}$
    $R_{Ay} + 50 \text{ kN} = 100 \text{ kN}$
    $R_{Ay} = 50 \text{ kN}$

**Result:**
*   $R_{Ax} = 0$
*   $R_{Ay} = 50 \text{ kN}$ (upwards)
*   $R_{By} = 50 \text{ kN}$ (upwards)

Again, due to symmetry, each support carries half the total load. This highlights how to handle UDLs, a key skill for **CO3** and **CO4**.

### Example 3: Cantilever Beam with a Point Load

**Scenario:** Let's think of a balcony extending from a building wall. The balcony (beam) is 3 meters long and fixed to the wall at one end (point A). A person weighing 750 N stands at the free end of the balcony (point B).

*   **Beam:** Cantilever beam.
*   **Support:** At point A (the wall), a fixed support. This means we have reactions $R_{Ax}$ (horizontal), $R_{Ay}$ (vertical), and a moment reaction $M_A$ (which resists rotation).
*   **Load:** A point load of 750 N acting downwards at the free end (point B), 3 meters from A.

**Applying Equilibrium:**

1.  **Draw FBD:**
    *   Beam of 3m.
    *   At the fixed end (A), draw upward $R_{Ay}$, rightward $R_{Ax}$, and a counter-clockwise moment arrow $M_A$ (assuming the load would tend to cause a clockwise rotation, the fixed support provides a counter-clockwise moment).
    *   At the free end (B), 3m from A, draw a downward arrow of 750 N.

2.  **Apply Equilibrium Equations:**

    *   **$\Sigma F_x = 0$**: The only horizontal force is $R_{Ax}$.
        $R_{Ax} = 0$.

    *   **$\Sigma F_y = 0$**: We have upward $R_{Ay}$ and downward 750 N.
        $R_{Ay} - 750 \text{ N} = 0$
        $R_{Ay} = 750 \text{ N}$

    *   **$\Sigma M = 0$**: This is where the moment reaction comes in. Let's sum moments about the fixed support A.
        *   Moment due to $R_{Ay}$ about A: $R_{Ay} \times 0 = 0$.
        *   Moment due to $R_{Ax}$ about A: $R_{Ax} \times 0 = 0$.
        *   Moment due to $M_A$ about A: $M_A$ (we defined it as counter-clockwise, so positive).
        *   Moment due to the 750 N load about A: This force acts downwards at 3m from A, causing a clockwise moment. So, $-750 \text{ N} \times 3 \text{ m}$.

        Summing these moments:
        $M_A - (750 \text{ N} \times 3 \text{ m}) = 0$
        $M_A - 2250 \text{ Nm} = 0$
        $M_A = 2250 \text{ Nm}$

**Result:**
*   $R_{Ax} = 0$
*   $R_{Ay} = 750 \text{ N}$ (upwards)
*   $M_A = 2250 \text{ Nm}$ (counter-clockwise)

Remember this! For a cantilever beam with a downward load at the free end, the fixed support provides an upward reaction equal to the load and a resisting moment equal to the load times its distance from the support. This demonstrates the importance of the moment reaction at fixed supports, crucial for **CO1** and **CO3**.

### Example 4: Cantilever Beam with a UDL

**Scenario:** Imagine a simple shelf fixed to a wall, extending 2 meters outwards. It has to support items that create a uniformly distributed load of 50 N per meter along its entire length.

*   **Beam:** Cantilever beam.
*   **Support:** Fixed support at A.
*   **Load:** UDL of $w = 50 \text{ N/m}$ over the 2m length.

**Applying Equilibrium:**

1.  **Convert UDL to Equivalent Point Load:**
    *   Total load $W = w \times L = 50 \text{ N/m} \times 2 \text{ m} = 100 \text{ N}$.
    *   This equivalent load acts at the midpoint of the UDL, which is at $2 \text{ m} / 2 = 1 \text{ m}$ from A.

2.  **Draw FBD:**
    *   Beam of 2m.
    *   At fixed end A: $R_{Ay}$ (up), $R_{Ax}$ (right), $M_A$ (counter-clockwise).
    *   At 1m from A: Downward arrow of 100 N.

3.  **Apply Equilibrium Equations:**

    *   **$\Sigma F_x = 0$**: $R_{Ax} = 0$.

    *   **$\Sigma F_y = 0$**: $R_{Ay} - 100 \text{ N} = 0$
        $R_{Ay} = 100 \text{ N}$

    *   **$\Sigma M_A = 0$**:
        $M_A - (100 \text{ N} \times 1 \text{ m}) = 0$
        $M_A - 100 \text{ Nm} = 0$
        $M_A = 100 \text{ Nm}$

**Result:**
*   $R_{Ax} = 0$
*   $R_{Ay} = 100 \text{ N}$ (upwards)
*   $M_A = 100 \text{ Nm}$ (counter-clockwise)

See how the process is consistent? The key is correctly identifying the loads and their points of application (or equivalent points for UDLs) and then systematically applying the three equilibrium equations. This reinforces the application of **CO3** and **CO4**.

### Important Considerations and Common Pitfalls

*   **Free Body Diagrams (FBDs):** I cannot stress this enough. A correctly drawn FBD is 80% of the solution. Make sure you include ALL forces (applied loads and reactions) and their directions. Represent loads and reactions with arrows and label them clearly. Refer to Chapter 2 of Hibbeler or Shames for detailed FBD drawing techniques.
*   **Sign Conventions:** Be consistent with your sign conventions for forces (e.g., upward positive) and moments (e.g., counter-clockwise positive).
*   **Choice of Moment Center:** While any point can be used for the moment equation, choosing a point where one or more unknown forces pass through will significantly simplify the calculations by eliminating those unknowns from the moment equation.
*   **Units:** Always keep track of your units (N, kN, m, Nm, etc.) to ensure your final answer is dimensionally correct.
*   **Statics vs. Dynamics:** Remember, we are in statics. We assume the beam is not accelerating. All the principles discussed are for equilibrium.
*   **Types of Supports:** Misidentifying the reactions provided by a support (e.g., assuming a roller support provides a moment) is a common error. Review the types of supports and the reactions they provide. This links back to **CO2**.

### Connection to Course Outcomes

Let's explicitly tie what we've learned back to our Course Outcomes (COs):

*   **CO1: Understand the vector representation of forces and moments:** In drawing FBDs, we represent forces as vectors. The moment reaction at a fixed support is also a vector (a moment vector). Understanding that forces have magnitude and direction is fundamental.
*   **CO2: Identify and describe the components of system of forces acting on the rigid body:** When we break down forces into horizontal ($F_x$) and vertical ($F_y$) components, or when we identify the reactions at different support types (pin provides $R_x, R_y$; roller provides $R_y$; fixed provides $R_x, R_y, M$), we are identifying force system components.
*   **CO3: Apply the conditions of equilibrium to different force system:** Our entire process of calculating reactions relies on $\Sigma F_x = 0$, $\Sigma F_y = 0$, and $\Sigma M = 0$. We are applying these conditions to the force system acting on the beam.
*   **CO4: Identify appropriate principles to solve problems of mechanics:** The core principle we've used is the principle of static equilibrium. Recognizing when and how to apply these equations is crucial.
*   **CO5: Develop the understanding of fundamental principles of rigid body dynamics:** While this topic is purely statics, understanding equilibrium is the prerequisite for understanding *changes* in motion (dynamics). If forces *don't* balance, the body will accelerate, which is the domain of dynamics.

### Summary

Support reactions are the forces and moments exerted by supports to keep a beam in equilibrium under the action of applied loads. To find them, we:
1.  Draw a Free Body Diagram (FBD) of the beam.
2.  Identify all applied loads and the reactions at the supports.
3.  Apply the three equations of static equilibrium: $\Sigma F_x = 0$, $\Sigma F_y = 0$, and $\Sigma M = 0$.
4.  Solve the resulting system of equations for the unknown reaction forces and moments.

This is a fundamental building block. As you progress in your studies, you'll use these reaction forces to calculate internal forces within the beam (shear force and bending moment), which are critical for designing safe structures.

---

### Sample Questions and Answers

**Question 1 (Conceptual):**
Why is it important to draw a Free Body Diagram (FBD) when calculating support reactions?

**Answer:**
The FBD is essential because it provides a clear and organized representation of all the forces acting on the beam. Without it, it's easy to miss forces, miscalculate distances, or apply the equilibrium equations incorrectly. The FBD allows us to isolate the object of interest (the beam) and systematically apply the principles of statics, ensuring all known and unknown forces are accounted for in their correct directions and locations. It's the visual roadmap for solving the problem.

---

**Question 2 (Exam-Oriented):**
A cantilever beam of length 4 meters is fixed at one end (A) and free at the other (B). It carries a uniformly distributed load of 20 kN/m over its entire length. Calculate the support reactions at A.

**Solution:**
1.  **FBD:**
    *   Beam of 4m, fixed at A, free at B.
    *   At A: $R_{Ay}$ (up), $R_{Ax}$ (right), $M_A$ (counter-clockwise).
    *   UDL: $w = 20 \text{ kN/m}$.

2.  **Convert UDL to Equivalent Point Load:**
    *   Total load $W = w \times L = 20 \text{ kN/m} \times 4 \text{ m} = 80 \text{ kN}$.
    *   This load acts at the midpoint of the UDL, which is at $4 \text{ m} / 2 = 2 \text{ m}$ from A.

3.  **Equilibrium Equations:**
    *   $\Sigma F_x = 0$: $R_{Ax} = 0$.
    *   $\Sigma F_y = 0$: $R_{Ay} - W = 0 \implies R_{Ay} - 80 \text{ kN} = 0 \implies R_{Ay} = 80 \text{ kN}$ (upwards).
    *   $\Sigma M_A = 0$: $M_A - (W \times \text{distance from A to W}) = 0$
        $M_A - (80 \text{ kN} \times 2 \text{ m}) = 0$
        $M_A - 160 \text{ kNm} = 0$
        $M_A = 160 \text{ kNm}$ (counter-clockwise).

**Answer:**
The support reactions at A are $R_{Ax} = 0$, $R_{Ay} = 80 \text{ kN}$ (upwards), and $M_A = 160 \text{ kNm}$ (counter-clockwise).

---

**Question 3 (Conceptual & Application):**
A simply supported beam of length 5 meters has a pin support at the left end (A) and a roller support at the right end (B). It has a single point load of 30 kN acting at a distance of 2 meters from support A. What is the total vertical upward force provided by the supports, and why is the horizontal reaction at A likely to be zero?

**Answer:**
*   **Total Vertical Upward Force:** According to the principle of equilibrium ($\Sigma F_y = 0$), for the beam to be in vertical equilibrium, the sum of all upward vertical forces must equal the sum of all downward vertical forces. The only downward vertical force is the 30 kN point load. Therefore, the total vertical upward force provided by the supports ($R_{Ay} + R_{By}$) must be equal to 30 kN to maintain equilibrium.

*   **Horizontal Reaction at A:** The horizontal reaction at support A ($R_{Ax}$) will be zero because there are no external horizontal forces acting on the beam. The pin support at A *can* provide a horizontal reaction if there were a horizontal load, but in this case, since there isn't one, $R_{Ax}$ is zero. This is seen from the equilibrium equation $\Sigma F_x = 0$. If there are no forces contributing to the sum of horizontal forces other than $R_{Ax}$ (and $R_{Ax}$ at the roller support is zero by definition for a horizontal beam), then $R_{Ax}$ must be zero.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
