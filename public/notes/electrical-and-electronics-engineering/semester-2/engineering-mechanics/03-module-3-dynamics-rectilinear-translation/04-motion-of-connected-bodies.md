---
title: "motion  of connected bodies."
subject: "ENGINEERING MECHANICS"
module: "Module 3: Dynamics  – Rectilinear translation "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9721"
status: "completed"
scrapedAt: "2026-05-23T16:06:40.492Z"
---
# Engineering Mechanics: Module 3 - Dynamics - Rectilinear Translation

## Topic: Motion of Connected Bodies

Welcome, everyone! Today, we're diving into a really exciting and practical part of dynamics: the motion of **connected bodies**. Think about it – in the real world, very few things move in isolation. Cranes lift loads, elevators go up and down, cars tow trailers, and systems of pulleys move heavy objects. All these scenarios involve multiple bodies whose motions are linked in some way. Understanding how these interconnected systems behave is crucial for any engineer.

This topic directly builds upon our understanding of rectilinear motion – that is, motion along a straight line – which we've been developing. We'll be applying Newton's Laws of Motion, particularly the second law ($\Sigma F = ma$), to these interconnected systems.

### Connecting Motion: The Essence of Kinematic Relationships

So, what does "connected bodies" really mean in mechanics? It means that the motion of one body in the system directly influences the motion of another. This influence is typically through some form of physical connection – like a rope, a belt, a link, or even just contact.

The core idea here is that **we can't analyze each body independently if their motions are coupled.** If a rope connects two blocks, and you pull one block, the other one *has* to move according to how the rope is attached. This interdependency creates what we call **kinematic relationships**. These relationships are simply mathematical equations that describe how the velocities, accelerations, and displacements of the connected bodies relate to each other.

Think about a simple clothesline with two clothespins on it. If you pull one pin along the line, the other pin, if it's attached to the same segment of the line, will move the same distance. This is a very basic form of a kinematic relationship.

**Let's tie this to our Course Outcomes (COs):**

*   **CO5 (Understand fundamental principles of rigid body dynamics):** This entire topic is a direct application of those fundamental principles. We're using Newton's laws, free-body diagrams, and kinematic analysis to understand how forces cause motion in a dynamic system.
*   **CO4 (Identify appropriate principles to solve problems of mechanics):** We'll need to identify which principles apply – Newton's Second Law for the dynamics, and then specifically kinematic equations to link the motions.
*   **CO2 (Identify and describe components of system of forces):** For each body in the connected system, we'll need to draw a Free Body Diagram (FBD) and identify all the forces acting on it. This is a foundational skill we've practiced.

### Setting Up the Problem: The Power of Free-Body Diagrams (FBDs)

Just like in statics, the most critical step in solving problems involving connected bodies is drawing accurate **Free-Body Diagrams (FBDs)** for *each* body in the system.

Why for each body? Because Newton's Second Law ($\Sigma F = ma$) applies to *each individual body*. If you have two connected blocks, you need one FBD for block 1 and another for block 2.

When drawing FBDs for connected bodies, pay special attention to:

1.  **Forces transmitted through connections:**
    *   **Ropes/Cables/Belts:** These are assumed to be **light** (negligible mass) and **inextensible** (do not stretch). This means the tension is constant throughout the rope, and the accelerations (or velocities) of the bodies connected by the rope are related in a very direct way. If you pull one end of a rope with a certain acceleration, the other end (and anything attached to it) will have the same acceleration in the direction of the rope. This is a key insight from Timoshenko & Young.
    *   **Pulleys:**
        *   **Pulleys themselves are often assumed to be frictionless and massless** unless stated otherwise. If a pulley is massless and frictionless, it simply redirects the tension. The tension on either side of the pulley is the same.
        *   **Fixed Pulley:** A pulley that doesn't move. It just changes the direction of the force.
        *   **Movable Pulley:** A pulley that moves with the load. This is where things get interesting! A movable pulley can provide mechanical advantage, meaning less force is needed to lift a heavier load. The kinematic relationships for movable pulleys are a bit more complex and require careful observation of how the rope moves.
    *   **Springs:** Springs exert a force that is proportional to their deformation (Hooke's Law: $F = ks$, where $k$ is the spring constant and $s$ is the displacement). The connection through a spring relates the positions and accelerations of the bodies.
    *   **Links/Rods:** These can transmit either tension or compression. If a link is **light** and **rigid**, it can transmit forces along its axis.

2.  **External forces:** Gravity (weight), applied forces, friction, etc.

**Let's visualize this with an example:**

Imagine you have two blocks, Block A and Block B, connected by a light rope passing over a frictionless, massless pulley. Block A is on a horizontal surface with friction, and Block B is hanging vertically.

*   **FBD for Block A:** You'll show its weight ($W_A$), the normal force ($N_A$) from the surface, the friction force ($f_A$) acting opposite to motion, and the tension ($T$) from the rope pulling it horizontally.
*   **FBD for Block B:** You'll show its weight ($W_B$) acting downwards and the tension ($T$) from the rope pulling it upwards.

Notice that the tension $T$ in the rope will be the *same* for both blocks because the rope is light and passes over a massless, frictionless pulley. This is a crucial link between the two FBDs!

### Kinematic Relationships: Linking the Motions

This is where the "connected" aspect really comes into play. The way the bodies are connected dictates how their accelerations (and therefore velocities and displacements) are related.

**The fundamental principle for connected bodies with inextensible ropes/cables:**
If two bodies are connected by a single, inextensible rope that passes over ideal pulleys, then the magnitudes of their accelerations along the rope are equal.

Let's take our rope example again. If Block A moves to the right with acceleration $a_A$, and Block B is connected to the other end of the rope, Block B *must* move upwards with acceleration $a_B$. Because the rope is inextensible, the length of the rope between the pulley and Block A plus the length of the rope between the pulley and Block B is constant.

Let $x_A$ be the position of Block A (measured, say, from the pulley) and $y_B$ be the position of Block B (measured from the pulley). If the rope length is $L$, and the distance from the pulley to the top of Block B is some constant $c$, then:

$x_A + y_B + (\text{length of rope over pulley}) = L$

If we assume the rope over the pulley is fixed, and we measure $x_A$ increasing as Block A moves right and $y_B$ increasing as Block B moves up, then $x_A + y_B = \text{constant}$.

Differentiating this equation twice with respect to time gives us the relationship between the accelerations:

$\frac{d^2 x_A}{dt^2} + \frac{d^2 y_B}{dt^2} = 0$

Or, using common notation: $a_A + a_B = 0$.

This means that if $a_A$ is positive (moving right), $a_B$ must be negative (moving down), and their magnitudes are equal: $a_A = -a_B$. So, $|a_A| = |a_B|$.

This is a *kinematic constraint*. It's essential to get these right!

**What if we have a movable pulley?**

Consider a system where Block A pulls a rope, and this rope passes through a movable pulley that is attached to Block B. Block B then hangs vertically. This is a bit trickier!

Let's define our positions carefully:
*   $x_A$: Position of Block A (e.g., how far it has been pulled).
*   $y_B$: Position of Block B (e.g., how far it has moved down).

Let $L$ be the total length of the rope. The rope segment that goes from a fixed point, down around the movable pulley (attached to B), and up to a fixed point (or to a winch pulling A) has a length that changes as A moves and B moves.

Imagine the rope starts at a fixed point, goes down to the movable pulley, then up to a fixed point. Let the fixed point above the pulley be $P_1$, the pulley itself be at $y_B$, and the other fixed point be $P_2$.
The length of the rope is approximately: $L = \sqrt{h_1^2 + (x_0 - x_A)^2} + y_B + \sqrt{h_2^2 + (x_1 - x_A)^2}$ (if A is moving horizontally).

However, for **rectilinear motion**, often the connections are simpler. A common setup is where Block A pulls a rope, which goes around a fixed pulley, and then is attached to a movable pulley. The movable pulley is attached to Block B, and the rope also goes around another fixed pulley and is then attached to some support.

Let's simplify: A rope is attached to a fixed point $F$. It goes down and around a movable pulley $P$ (attached to Block B), then up and around a fixed pulley $G$, and then down to Block A.
Let $y_B$ be the downward displacement of Block B. Let $x_A$ be the displacement of Block A (downward).
The length of the rope is $L = (\text{length from F to P}) + (\text{length from P to G}) + (\text{length from G to A})$.
The length from F to P is approximately $y_B$ (assuming F is directly above P when the system is at rest and P is at $y_B=0$).
The length from P to G is also approximately $y_B$.
The length from G to A is $x_A$.

So, $L = y_B + y_B + x_A = 2y_B + x_A$.
Since $L$ is constant, $2y_B + x_A = \text{constant}$.

Differentiating twice with respect to time:
$2 \frac{d^2 y_B}{dt^2} + \frac{d^2 x_A}{dt^2} = 0$
$2a_B + a_A = 0$

This means $a_B = -\frac{1}{2} a_A$. The magnitude of Block B's acceleration is half that of Block A! This is the mechanical advantage of a movable pulley system.

**Key takeaway for kinematic relationships:**
*   Identify the "degree of freedom" – how many independent variables are needed to describe the system's configuration.
*   Establish a coordinate system for each body.
*   Write down an equation relating the lengths of the connecting elements (ropes, springs).
*   Differentiate this equation *twice* with respect to time to get acceleration relationships. Remember that if one variable increases, another might decrease, leading to negative signs.

This connects to **CO5** by showing how the geometry of the system (the connections) dictates the dynamics.

### Applying Newton's Second Law: Solving the System

Once we have our FBDs and our kinematic relationships, we can apply Newton's Second Law to each body and then solve the system of equations.

For each body $i$:
$\Sigma F_{ix} = m_i a_{ix}$
$\Sigma F_{iy} = m_i a_{iy}$

Let's go back to our example: Block A on a rough horizontal surface, connected by a rope over a pulley to hanging Block B.

**Assumptions:**
*   Rope is light and inextensible.
*   Pulley is massless and frictionless.
*   Block A is on a horizontal surface with coefficient of kinetic friction $\mu_k$.

**FBDs:**
*   **Block A (mass $m_A$):**
    *   Forces in x-direction (horizontal): Tension $T$ to the right, Friction $f_k$ to the left.
    *   Forces in y-direction (vertical): Normal force $N_A$ up, Weight $W_A = m_A g$ down.
*   **Block B (mass $m_B$):**
    *   Forces in y-direction (vertical): Tension $T$ up, Weight $W_B = m_B g$ down.

**Equations of Motion:**
*   **Block A:**
    *   Horizontal: $\Sigma F_x = T - f_k = m_A a_A$
    *   Vertical: $\Sigma F_y = N_A - m_A g = 0 \implies N_A = m_A g$ (assuming no vertical acceleration for A)
    *   Friction: $f_k = \mu_k N_A = \mu_k m_A g$
    *   Substitute $f_k$: $T - \mu_k m_A g = m_A a_A$ (Equation 1)

*   **Block B:**
    *   Vertical: $\Sigma F_y = T - m_B g = m_B a_B$ (Equation 2)

**Kinematic Relationship:**
We established that $a_A = -a_B$. Let's assume motion is such that Block A moves to the right (positive $a_A$) and Block B moves down (positive $a_B$ in its own frame, or negative if we use A's frame and $a_A = -a_B$). Let's define $a$ as the magnitude of acceleration. If A moves right, B moves down.
So, let $a_A = a$ (to the right) and $a_B = a$ (downwards).

Now, substitute these into our equations of motion. Let's be consistent with directions.
If Block A moves right, $a_A = a$. If Block B moves down, its acceleration is downwards.
From $\Sigma F_y$ for Block B, if downwards is positive: $m_B g - T = m_B a$.

So we have:
1.  $T - \mu_k m_A g = m_A a$
2.  $m_B g - T = m_B a$

Now we have two equations and two unknowns ($T$ and $a$). We can solve this system!
Adding Equation 1 and Equation 2:
$(T - \mu_k m_A g) + (m_B g - T) = m_A a + m_B a$
$m_B g - \mu_k m_A g = (m_A + m_B) a$
$a = \frac{m_B g - \mu_k m_A g}{m_A + m_B}$

Once we have $a$, we can find $T$ by substituting it back into either Equation 1 or Equation 2.

This process directly applies **CO4** (identifying principles) and **CO5** (applying dynamics principles). It also uses **CO2** (identifying forces on FBDs).

### Examples that Click: Beyond the Textbook

Let's make this more relatable.

**Analogy: A Tug-of-War with a Twist**
Imagine you and your friend are playing tug-of-war, but instead of pulling directly, you're both pulling on ropes. Your rope is attached to a cart on a frictionless track, and your friend's rope is attached to a weight hanging over the edge of a table. Both ropes go over the same pulley.

*   **You pulling the cart:** This is like applying a force to Block A on the table.
*   **Your friend pulling the weight:** This is like Block B hanging.
*   **The pulley:** It just redirects the force. The tension in your rope and your friend's rope is the same if the pulley is ideal.
*   **The cart moving:** If you pull the cart 1 meter to the right, the weight your friend is holding *must* go up by 1 meter. Their accelerations along the rope are the same in magnitude.

**Another example: An Elevator and its Counterweight**
Modern elevators often use a counterweight system to reduce the energy needed to lift the elevator car. The elevator car is attached to one end of a cable, and the counterweight is attached to the other end. The cable passes over a large pulley.

*   **Elevator car:** Our Block A (or B, depending on how you set it up).
*   **Counterweight:** Our Block B (or A).
*   **Cable and Pulley:** Ideal rope and pulley.

If the elevator car is going up with acceleration $a_{car}$, the counterweight must be going down with the same magnitude of acceleration $a_{counterweight}$. The system is designed so that the counterweight's mass is close to the elevator car's mass (plus passengers). This way, the net force driving the system is small, requiring less motor power.

**What if the rope is *not* inextensible?**
This is where things get complicated and usually beyond the scope of introductory mechanics. If the rope stretches (like a bungee cord), the elongation changes the kinematic relationship, and you might need to consider spring-mass-damper systems. For our purposes, we stick to the ideal assumptions.

**What if the pulley is *not* massless or frictionless?**
If the pulley has mass $m_p$ and radius $r$, and there's friction at its axle (coefficient $\mu_{axle}$), it will have rotational inertia. The torque equation $\Sigma \tau = I \alpha$ will apply to the pulley. This adds another layer to the problem, requiring us to relate the linear accelerations of the blocks to the angular acceleration of the pulley ($\alpha = a/r$). Friction at the axle will introduce a resisting torque. These are more advanced topics, but it's good to be aware they exist.

**Connecting to Textbooks:**
*   **Hibbeler (Chapter 12, Dynamics of a System of Connected Bodies):** Hibbeler is excellent at breaking down these systems. He emphasizes the importance of defining coordinate systems and establishing the correct kinematic equations. You'll find many examples of block-and-pulley systems and systems where bodies are constrained by linkages. He's particularly good with diagrams that clearly show the positions and how they relate.
*   **Timoshenko & Young (Chapter 8, Work and Energy; Chapter 9, Impulse and Momentum):** While this topic fits under kinetics, Timoshenko and Young often approach these problems using work-energy or impulse-momentum methods. These can be powerful alternatives to force-acceleration analysis, especially when dealing with velocities or distances. For example, if you need to find the velocity of a block after it has moved a certain distance, the work-energy theorem might be more direct than finding the acceleration first.
*   **Shames (Chapter 13, Kinetics of Particles - Systems of Particles):** Shames also covers connected bodies as part of systems of particles. He focuses on the scalar approach to kinematics, which is often easier to manage for rectilinear motion. He stresses the "elimination of unknowns" by using the kinematic constraint equations to reduce the number of variables.

### Common Pitfalls and Exam Tips

1.  **Incorrect FBDs:** This is the most common mistake. Double-check that you've included all forces and that their directions are correctly assigned. Pay attention to the direction of friction and applied forces.
2.  **Wrong Kinematic Equations:** Misinterpreting how the lengths of ropes relate can lead to incorrect acceleration relationships. Draw the system, define positions clearly, and carefully differentiate. For movable pulleys, draw the rope path and write down the length equation.
3.  **Sign Errors:** Inconsistent sign conventions for acceleration and forces are a major source of errors. Decide on a convention (e.g., right is positive, up is positive) and stick to it for all bodies. When relating accelerations ($a_A = -a_B$), ensure the signs reflect the opposing directions of motion.
4.  **Forgetting to Eliminate Tension (T):** In many block-and-pulley problems, the tension in the connecting rope is an unknown that you don't need in your final answer. You must use the kinematic relationships to create enough equations to solve for both acceleration and tension.
5.  **Treating connected bodies as a single unit:** You *cannot* simply sum the masses and divide by the total external force. The internal forces (like tension in the rope) cancel out when you sum the forces for the entire system *if* you're doing it that way, but the accelerations are not necessarily the same for all parts of a connected system (especially if they have different masses and are connected via pulleys). You *must* analyze each body individually first.

**Exam Strategy:**
*   **Read the problem carefully:** Identify the bodies, their connections, and any given parameters (masses, coefficients of friction, applied forces).
*   **Draw clear FBDs for *each* body:** This is non-negotiable.
*   **Establish kinematic relationships:** Focus on how the displacements, velocities, and accelerations are linked. Write down the equation(s).
*   **Apply Newton's Second Law to each body:** Write out the force and acceleration equations.
*   **Solve the system of equations:** Use substitution or elimination to find the unknown accelerations and/or tensions.
*   **Check your answer:** Does the magnitude of acceleration make sense? Are the directions consistent? If you found tension, does it seem reasonable?

### Summary: Key Principles to Remember

*   **Decompose the system:** Treat each connected body separately using FBDs.
*   **Kinematic Constraints are Key:** The connections (ropes, pulleys, etc.) define the relationships between the motions of the bodies. Differentiate length equations twice to get acceleration relationships.
*   **Newton's Second Law is Universal:** Apply $\Sigma F = ma$ to each body's FBD.
*   **Solve the System:** Combine the force equations and kinematic equations to solve for the desired unknowns (usually accelerations).

Understanding the motion of connected bodies is a cornerstone of dynamics. It teaches you how to break down complex systems into simpler parts and then put them back together using fundamental laws. Keep practicing these FBDs and kinematic setups, and you'll master this!

---

## Sample Questions with Answers

**Conceptual Questions:**

1.  **Question:** Two blocks, A and B, of different masses, are connected by a light, inextensible rope passing over a frictionless, massless pulley. If block A is on a horizontal surface and block B is hanging vertically, and block B starts to descend, will block A necessarily accelerate at the same rate as block B? Explain your reasoning.

    **Answer:** Yes, they will accelerate at the same rate (in magnitude) along the line of the rope. This is because the rope is inextensible. Any length of rope that Block B descends must be matched by Block A moving along the rope. If Block A is moving horizontally and Block B vertically, their displacements along the rope are related directly, and thus their accelerations along the rope are equal in magnitude. The different masses will affect the *value* of the acceleration and the tension, but not the equality of magnitudes of acceleration.

2.  **Question:** What is the primary role of a movable pulley in a connected system in terms of force and motion?

    **Answer:** A movable pulley typically provides a mechanical advantage, meaning it allows a smaller force to lift or move a larger weight. In terms of motion, it changes the kinematic relationship between the applied effort (e.g., pulling a rope) and the load's movement. Specifically, if a rope is pulled by a distance $d$, the load attached to a single movable pulley system will move by approximately $d/2$, meaning the load moves at half the speed/acceleration of the point where the rope is pulled.

3.  **Question:** Why is it crucial to draw a separate Free-Body Diagram (FBD) for *each* body in a connected system?

    **Answer:** Newton's Second Law ($\Sigma F = ma$) is applied to individual bodies or particles. Each body in a connected system may be subjected to different forces (e.g., friction, normal forces) and have different masses. By drawing separate FBDs, we can accurately identify all forces acting on each specific body and write the equation of motion for that body. These individual equations, combined with the kinematic relationships that link the motions, form the complete system of equations needed to solve the problem.

**Exam-Oriented Questions:**

1.  **Question:** Block A (mass $m_A = 5$ kg) rests on a horizontal frictionless surface. It is connected by a light inextensible rope passing over a frictionless, massless pulley to block B (mass $m_B = 3$ kg) which hangs vertically. Block A is pulled to the right by an external force $P = 40$ N. Determine the acceleration of the blocks and the tension in the rope. (Use $g = 9.81 \text{ m/s}^2$).

    **Solution:**
    Let $a$ be the acceleration of Block A to the right, and consequently, the acceleration of Block B upwards (since the rope is inextensible and the pulley is ideal).

    **FBD for Block A:**
    *   Forces in horizontal direction: $P$ (right), $T$ (left).
    *   Forces in vertical direction: $N_A$ (up), $m_A g$ (down). Since no vertical motion, $N_A = m_A g$.

    **Equation of Motion for Block A (horizontal):**
    $\Sigma F_x = P - T = m_A a$
    $40 - T = 5a$  (Equation 1)

    **FBD for Block B:**
    *   Forces in vertical direction: $T$ (up), $m_B g$ (down).
    *   Acceleration is upwards, so $m_B g$ is acting against the acceleration.

    **Equation of Motion for Block B (vertical):**
    Let's define upwards as positive for Block B.
    $\Sigma F_y = T - m_B g = m_B a$
    $T - (3)(9.81) = 3a$
    $T - 29.43 = 3a$  (Equation 2)

    **Solving the system:**
    We have two equations and two unknowns ($T$ and $a$):
    1) $40 - T = 5a$
    2) $T - 29.43 = 3a$

    Add Equation 1 and Equation 2:
    $(40 - T) + (T - 29.43) = 5a + 3a$
    $40 - 29.43 = 8a$
    $10.57 = 8a$
    $a = \frac{10.57}{8} \approx 1.321 \text{ m/s}^2$

    Now, substitute $a$ back into Equation 2 to find $T$:
    $T = 29.43 + 3a$
    $T = 29.43 + 3(1.321)$
    $T = 29.43 + 3.963$
    $T \approx 33.39 \text{ N}$

    **Answer:** The acceleration of the blocks is approximately $1.321 \text{ m/s}^2$ (Block A to the right, Block B upwards), and the tension in the rope is approximately $33.39 \text{ N}$.

2.  **Question:** A system consists of block 1 (mass $m_1 = 2$ kg) on a rough horizontal surface and block 2 (mass $m_2 = 4$ kg) hanging vertically. They are connected by a rope that passes over a massless, frictionless pulley. The coefficient of kinetic friction between block 1 and the surface is $\mu_k = 0.2$. If the system is released from rest, determine the acceleration of the blocks and the tension in the rope. (Use $g = 10 \text{ m/s}^2$).

    **Solution:**
    Let $a$ be the magnitude of acceleration. Assume block 1 moves to the right and block 2 moves downwards.

    **FBD Block 1 ($m_1=2$ kg):**
    *   Horizontal forces: Tension $T$ (right), Friction $f_k$ (left).
    *   Vertical forces: Normal force $N_1$ (up), Weight $m_1 g$ (down).
    *   $N_1 = m_1 g = 2 \times 10 = 20$ N.
    *   $f_k = \mu_k N_1 = 0.2 \times 20 = 4$ N.

    **Equation of Motion for Block 1:**
    $\Sigma F_x = T - f_k = m_1 a$
    $T - 4 = 2a$  (Equation 1)

    **FBD Block 2 ($m_2=4$ kg):**
    *   Vertical forces: Tension $T$ (up), Weight $m_2 g$ (down).
    *   Acceleration $a$ is downwards.

    **Equation of Motion for Block 2:**
    Let downwards be positive for Block 2.
    $\Sigma F_y = m_2 g - T = m_2 a$
    $(4 \times 10) - T = 4a$
    $40 - T = 4a$  (Equation 2)

    **Solving the system:**
    1) $T - 4 = 2a$
    2) $40 - T = 4a$

    Add Equation 1 and Equation 2:
    $(T - 4) + (40 - T) = 2a + 4a$
    $36 = 6a$
    $a = \frac{36}{6} = 6 \text{ m/s}^2$

    Substitute $a$ into Equation 1 to find $T$:
    $T - 4 = 2(6)$
    $T - 4 = 12$
    $T = 16 \text{ N}$

    **Answer:** The acceleration of the blocks is $6 \text{ m/s}^2$ (Block 1 to the right, Block 2 downwards), and the tension in the rope is $16 \text{ N}$.
