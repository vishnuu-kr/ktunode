---
title: "–motion on horizontal and inclined surfaces"
subject: "ENGINEERING MECHANICS"
module: "Module 3: Dynamics – rectilinear translation "
branch: "Civil Engineering"
semester: 1
topicId: "68b54565d74ec52cc0912ae0"
status: "completed"
scrapedAt: "2026-05-20T18:29:16.887Z"
---
# Engineering Mechanics: Module 3 - Dynamics: Rectilinear Translation

## Topic: Motion on Horizontal and Inclined Surfaces

Welcome, everyone! Today, we dive into a fundamental aspect of dynamics: how objects move in a straight line, specifically when they are on horizontal and inclined surfaces. This is where we start applying Newton's Laws of Motion to understand acceleration, velocity, and displacement in real-world scenarios. Think about pushing a shopping cart across a supermarket floor or a skier gliding down a slope – these are classic examples of rectilinear translation. Our goal is to equip you with the tools to analyze and predict such motions.

This topic directly relates to **Course Outcome CO5: Develop the understanding of fundamental principles of rigid body dynamics (Knowledge Level: K3)**. By understanding motion on these surfaces, we're building the bedrock for more complex dynamic problems. We'll also be touching upon **CO1 (vector representation of forces)** and **CO2 (components of forces)** as we break down the forces acting on our moving objects.

### Understanding the Basics: Forces and Motion

Before we get into specific surfaces, let's quickly recap what drives motion.

*   **Newton's First Law (Law of Inertia):** An object at rest stays at rest, and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force. This tells us that *something* needs to cause a change in motion.
*   **Newton's Second Law (Law of Acceleration):** The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass. Mathematically, this is our superstar: $\Sigma F = ma$. This is the equation we'll be using constantly. It means if we know the forces, we can find the acceleration, and vice-versa.
*   **Newton's Third Law (Law of Action-Reaction):** For every action, there is an equal and opposite reaction. This is crucial when considering how surfaces interact with our moving object.

Remember these laws are vector equations. The direction of acceleration is the same as the direction of the net force.

**Key Concepts to Keep in Mind:**

*   **Mass (m):** A measure of an object's inertia, its resistance to changes in motion. It's a scalar quantity.
*   **Force (F):** A push or pull exerted on an object. It's a vector quantity.
*   **Acceleration (a):** The rate of change of velocity. It's also a vector quantity.
*   **Velocity (v):** The rate of change of displacement. A vector quantity.
*   **Displacement (s):** The change in position of an object. A vector quantity.

### The Power of Free-Body Diagrams (FBDs)

This is perhaps the most critical step in any dynamics problem. A Free-Body Diagram (FBD) is a drawing that shows the object of interest and all the external forces acting on it. Without a correct FBD, your $\Sigma F = ma$ equation will be wrong.

When drawing an FBD, we represent the object as a simple shape (like a block or a circle) and show all forces as arrows originating from the object. Some common forces we'll encounter are:

*   **Weight (W):** The force of gravity acting on the object, always directed vertically downwards. $W = mg$, where $g$ is the acceleration due to gravity (approximately 9.81 m/s² or 32.2 ft/s²).
*   **Normal Force (N):** The force exerted by a surface perpendicular to the surface of contact, preventing the object from penetrating the surface.
*   **Friction Force (f):** The force that opposes motion or impending motion between two surfaces in contact. We have two main types:
    *   **Static Friction ($f_s$):** Acts when there is no relative motion between surfaces. It adjusts its magnitude to oppose the applied force, up to a maximum value ($f_{s,max} = \mu_s N$, where $\mu_s$ is the coefficient of static friction).
    *   **Kinetic Friction ($f_k$):** Acts when there is relative motion between surfaces. It's generally constant and given by $f_k = \mu_k N$, where $\mu_k$ is the coefficient of kinetic friction. Typically, $\mu_k < \mu_s$.
*   **Applied Force (P):** Any external force deliberately applied to the object (e.g., a push, a pull, a tow rope).

**Connection to Course Outcomes:** Drawing accurate FBDs directly addresses **CO2: Identify and describe the components of system of forces acting on the rigid body (Knowledge Level: K3)**. It helps us visualize and categorize all forces.

### Motion on Horizontal Surfaces

Let's start with the simpler case: motion on a flat, horizontal surface.

Imagine pushing a heavy box across a polished floor. What forces are acting on the box?

1.  **Weight (W):** Pulling it down.
2.  **Normal Force (N):** The floor pushing up on the box. Since the surface is horizontal and there are no vertical applied forces, the normal force perfectly balances the weight. So, $N = W = mg$.
3.  **Applied Force (P):** The push you're giving it. This could be horizontal or at an angle.
4.  **Friction Force (f):** The floor resisting the motion. This force will oppose the direction of motion (or intended motion).

**Scenario 1: Horizontal Applied Force on a Horizontal Surface**

Let's say you push a box horizontally with a force $P$.

*   **FBD:** Draw a box. Downward arrow for $W$. Upward arrow for $N$. Horizontal arrow to the right for $P$. Horizontal arrow to the left for $f_k$ (if it's moving).

*   **Equations of Motion:**
    *   **Vertical Direction (y-axis):** Since the box is not moving up or down, the net force in the vertical direction is zero. $\Sigma F_y = 0$.
        $N - W = 0 \implies N = W = mg$.
    *   **Horizontal Direction (x-axis):** This is where the motion happens. Let's assume the motion is to the right.
        $\Sigma F_x = ma_x$.
        $P - f_k = ma_x$.

    Now, remember $f_k = \mu_k N$. Substituting $N=mg$, we get $f_k = \mu_k mg$.
    So, the equation becomes: $P - \mu_k mg = ma_x$.

    From this, we can solve for acceleration: $a_x = \frac{P - \mu_k mg}{m}$.

*   **What if it's not moving? (Static Friction):** If the applied force $P$ is small, static friction ($f_s$) will oppose it, and the box won't move. The box remains in equilibrium ($a_x = 0$). In this case, $\Sigma F_x = 0$, so $P - f_s = 0$, which means $f_s = P$. This static friction force can be *any* value from 0 up to its maximum, $f_{s,max} = \mu_s N = \mu_s mg$. The box will start to move *only* when $P$ exceeds this maximum static friction.

**Example:** Imagine pushing a 50 kg box on a floor where $\mu_k = 0.2$. You push it horizontally with 120 N. What's its acceleration?
    *   $m = 50$ kg, $\mu_k = 0.2$, $P = 120$ N.
    *   Weight $W = mg = 50 \times 9.81 = 490.5$ N.
    *   Normal Force $N = W = 490.5$ N.
    *   Kinetic Friction $f_k = \mu_k N = 0.2 \times 490.5 = 98.1$ N.
    *   Using $\Sigma F_x = ma_x$: $P - f_k = ma_x$
    *   $120 \, N - 98.1 \, N = 50 \, kg \times a_x$
    *   $21.9 \, N = 50 \, kg \times a_x$
    *   $a_x = \frac{21.9}{50} = 0.438 \, m/s^2$.
    *   So, the box accelerates at $0.438 \, m/s^2$ in the direction of your push.

**Connection to Course Outcomes:** This problem uses **CO4: Identify appropriate principles to solve problems of mechanics (Knowledge Level: K3)**, specifically Newton's Second Law and understanding friction. It also relies heavily on **CO1 (vector representation of forces)** for setting up the FBD and equations.

**Scenario 2: Angled Applied Force on a Horizontal Surface**

What if you pull the box with a rope attached to it, and the rope is angled upwards? Think of pulling a suitcase with a handle.

Let the applied force $P$ be at an angle $\theta$ above the horizontal.

*   **FBD:** Draw the box. $W$ downwards, $N$ upwards, $f_k$ to the left (opposing motion to the right). Now, the applied force $P$ is an arrow going upwards and to the right at angle $\theta$.
*   **Resolving Forces:** Since $P$ is at an angle, we must resolve it into its horizontal ($P_x$) and vertical ($P_y$) components.
    *   $P_x = P \cos \theta$ (this component pulls the box forward)
    *   $P_y = P \sin \theta$ (this component lifts the box slightly)

*   **Equations of Motion:**
    *   **Vertical Direction (y-axis):** The normal force $N$ no longer equals the weight. The upward vertical component of the applied force ($P_y$) helps to reduce the load on the surface, meaning the normal force required is less.
        $\Sigma F_y = 0$ (still no vertical acceleration).
        $N + P_y - W = 0 \implies N = W - P_y = mg - P \sin \theta$.
        *Important Point:* Notice that the normal force is *reduced* when you pull upwards at an angle. This is a common point of confusion!
    *   **Horizontal Direction (x-axis):**
        $\Sigma F_x = ma_x$.
        $P_x - f_k = ma_x$.
        Substitute $P_x = P \cos \theta$ and $f_k = \mu_k N$.
        $P \cos \theta - \mu_k (mg - P \sin \theta) = ma_x$.

    From this, we can solve for acceleration: $a_x = \frac{P \cos \theta - \mu_k (mg - P \sin \theta)}{m}$.

**Example:** A 20 kg suitcase is pulled with a force of 50 N applied at an angle of 30 degrees above the horizontal. The coefficient of kinetic friction is 0.3. Find the acceleration.
    *   $m = 20$ kg, $P = 50$ N, $\theta = 30^\circ$, $\mu_k = 0.3$. $W = mg = 20 \times 9.81 = 196.2$ N.
    *   $P_x = 50 \cos 30^\circ = 50 \times 0.866 = 43.3$ N.
    *   $P_y = 50 \sin 30^\circ = 50 \times 0.5 = 25$ N.
    *   Vertical forces: $N + P_y - W = 0 \implies N = W - P_y = 196.2 - 25 = 171.2$ N.
    *   Kinetic Friction $f_k = \mu_k N = 0.3 \times 171.2 = 51.36$ N.
    *   Horizontal forces: $P_x - f_k = ma_x$
    *   $43.3 \, N - 51.36 \, N = 20 \, kg \times a_x$
    *   $-8.06 \, N = 20 \, kg \times a_x$
    *   $a_x = \frac{-8.06}{20} = -0.403 \, m/s^2$.
    *   Wait a minute! The acceleration is negative. What does this mean? It means the friction force is actually larger than the horizontal component of the pulling force! So, if the suitcase was already moving, it would slow down. If it was at rest, it wouldn't move, and the static friction would be equal and opposite to $P_x$ (if $P_x < f_{s,max}$). This highlights how important it is to check if motion actually occurs.

**Connection to Course Outcomes:** This reinforces **CO1, CO2, and CO4**. We're analyzing forces in components and applying the principles of dynamics.

### Motion on Inclined Surfaces

Now, let's elevate our discussion to inclined planes. Think of a car on a hill, a block sliding down a ramp, or even you on a ski slope. The game changes because gravity is no longer acting purely in the vertical direction relative to the surface.

When dealing with inclined planes, it's almost always beneficial to align your coordinate system with the plane. This means:

*   **x-axis:** Parallel to the inclined surface.
*   **y-axis:** Perpendicular to the inclined surface.

This choice simplifies the equations because acceleration, if it occurs along the slope, will only be in the x-direction, and there will be no acceleration in the y-direction.

Consider a block of mass $m$ on an inclined plane at an angle $\theta$ with the horizontal.

*   **Forces Acting on the Block:**
    1.  **Weight (W):** Still acting vertically downwards. $W = mg$.
    2.  **Normal Force (N):** Still acting perpendicular to the surface, so along our y-axis.
    3.  **Friction Force (f):** Acting parallel to the surface, opposing motion.

*   **Resolving Weight:** This is the crucial step. We need to resolve the weight vector ($W$) into components parallel and perpendicular to the inclined plane.
    *   Draw the weight vector $W$ straight down.
    *   Draw the inclined plane with angle $\theta$.
    *   Draw your x and y axes parallel and perpendicular to the plane.
    *   You'll find that the angle between the weight vector ($W$) and the perpendicular to the plane (our negative y-axis) is also $\theta$.
    *   Component of weight perpendicular to the plane ($W_\perp$): This component acts into the plane. $W_\perp = W \cos \theta = mg \cos \theta$.
    *   Component of weight parallel to the plane ($W_\parallel$): This component acts down the slope. $W_\parallel = W \sin \theta = mg \sin \theta$.

**Connection to Course Outcomes:** Resolving forces, especially gravity on an incline, is a direct application of **CO1 (vector representation of forces)** and **CO2 (components of system of forces)**. Understanding how these components interact is key to **CO5 (fundamental principles of rigid body dynamics)**.

**Scenario 3: Block Sliding Down an Inclined Plane (No Friction)**

Let's start simple. What if the surface is frictionless ($\mu = 0$)?

*   **FBD:** Block on an incline. $W$ straight down. $N$ perpendicular to the plane, pointing away. $W_\parallel$ pointing down the slope. $W_\perp$ pointing into the plane.

*   **Equations of Motion:**
    *   **y-direction (perpendicular to plane):** No acceleration here.
        $\Sigma F_y = 0$.
        $N - W_\perp = 0 \implies N = W_\perp = mg \cos \theta$.
        Notice the normal force is *less* than the weight, as some of gravity's pull is directed along the slope.
    *   **x-direction (parallel to plane):** Motion is down the slope.
        $\Sigma F_x = ma_x$.
        $W_\parallel = ma_x$.
        $mg \sin \theta = ma_x$.
        $a_x = g \sin \theta$.

    *Isn't that neat?* The acceleration of an object sliding down a frictionless incline depends only on the angle of the incline and gravity, not on the mass! This is a fundamental result.

**Example:** A block slides down a frictionless 30-degree incline. What is its acceleration?
    *   $a_x = g \sin \theta = 9.81 \times \sin 30^\circ = 9.81 \times 0.5 = 4.905 \, m/s^2$.
    *   The block accelerates at $4.905 \, m/s^2$ down the slope.

**Scenario 4: Block Sliding Down an Inclined Plane (With Friction)**

Now, let's add kinetic friction $f_k$ acting up the slope, opposing the downward motion.

*   **FBD:** Same as above, but now add an $f_k$ arrow pointing up the slope, parallel to the plane.

*   **Equations of Motion:**
    *   **y-direction (perpendicular to plane):**
        $\Sigma F_y = 0$.
        $N - W_\perp = 0 \implies N = W_\perp = mg \cos \theta$.
        The normal force is still $mg \cos \theta$.
    *   **x-direction (parallel to plane):** Motion is down the slope.
        $\Sigma F_x = ma_x$.
        The forces acting along the slope are the component of weight pulling it down ($W_\parallel$) and the friction force resisting it ($f_k$) pulling it up.
        $W_\parallel - f_k = ma_x$.
        Substitute $W_\parallel = mg \sin \theta$ and $f_k = \mu_k N = \mu_k (mg \cos \theta)$.
        $mg \sin \theta - \mu_k mg \cos \theta = ma_x$.

    We can divide by $m$ (since $m \neq 0$):
    $a_x = g \sin \theta - \mu_k g \cos \theta$.
    $a_x = g (\sin \theta - \mu_k \cos \theta)$.

    *Remember this formula!* It's very useful for problems on inclined planes with friction.

**Example:** A 10 kg block is on a 25-degree incline. The coefficient of kinetic friction is 0.2.
    *   $m = 10$ kg, $\theta = 25^\circ$, $\mu_k = 0.2$.
    *   Component of weight down the slope: $W_\parallel = mg \sin 25^\circ = 10 \times 9.81 \times \sin 25^\circ \approx 98.1 \times 0.4226 \approx 41.46$ N.
    *   Normal Force: $N = mg \cos 25^\circ = 10 \times 9.81 \times \cos 25^\circ \approx 98.1 \times 0.9063 \approx 88.91$ N.
    *   Kinetic Friction: $f_k = \mu_k N = 0.2 \times 88.91 \approx 17.78$ N.
    *   Using $a_x = g (\sin \theta - \mu_k \cos \theta)$:
    *   $a_x = 9.81 (\sin 25^\circ - 0.2 \cos 25^\circ)$
    *   $a_x = 9.81 (0.4226 - 0.2 \times 0.9063)$
    *   $a_x = 9.81 (0.4226 - 0.1813)$
    *   $a_x = 9.81 (0.2413) \approx 2.367 \, m/s^2$.
    *   So, the block accelerates down the slope at $2.367 \, m/s^2$.

**What if the block is moving UP the incline?**

Suppose an object is given an initial velocity up the incline. Now friction acts *down* the slope, and the component of weight $W_\parallel$ also acts *down* the slope.

*   **Equations of Motion (moving up):**
    *   **y-direction:** $N = mg \cos \theta$ (same as before).
    *   **x-direction:**
        $\Sigma F_x = ma_x$.
        The forces acting down the slope are $W_\parallel$ and $f_k$.
        $-W_\parallel - f_k = ma_x$.
        $-mg \sin \theta - \mu_k mg \cos \theta = ma_x$.
        $a_x = -g (\sin \theta + \mu_k \cos \theta)$.

    The acceleration is negative (down the slope), which is expected as forces oppose the upward motion, causing it to slow down.

**The Sliding Angle:**

There's a specific angle, called the **angle of repose** or **sliding angle**, at which an object will just begin to slide. This happens when the component of weight pulling it down the slope ($mg \sin \theta$) overcomes the maximum static friction ($f_{s,max} = \mu_s mg \cos \theta$).

So, motion starts when: $mg \sin \theta > \mu_s mg \cos \theta$
Dividing by $mg \cos \theta$ (assuming $\cos \theta \neq 0$):
$\tan \theta > \mu_s$.

The critical angle $\theta_c$ where sliding just begins is given by $\tan \theta_c = \mu_s$. This is a very important concept, often tested.

**Connection to Course Outcomes:** Understanding the transition from static to kinetic friction, and how friction opposes motion regardless of direction, is key to **CO4 (Identify appropriate principles)** and **CO5 (fundamental principles of dynamics)**.

### Connecting to Textbooks and Course Outcomes

As you study from Timoshenko & Young, Hibbeler, Shames, or Bansal, you'll see these principles elaborated with rigorous mathematical derivations. They all emphasize the importance of the FBD and the correct application of Newton's Laws.

*   **CO1 (Vector Representation):** Every force we've discussed (weight, normal, friction, applied forces) is a vector. Resolving forces into components on inclined planes (as in $W_\parallel$ and $W_\perp$) is a direct application of vector addition and decomposition.
*   **CO2 (Components of Forces):** Identifying $W_\parallel$, $W_\perp$, $P_x$, $P_y$, $N$, $f$ for each scenario directly fulfills this outcome.
*   **CO3 (Equilibrium):** While this topic focuses on *motion*, understanding equilibrium is the precursor. For example, the normal force calculation often relies on the vertical forces being in equilibrium ($\Sigma F_y = 0$). If the object is at rest on an incline, static friction will balance the component of weight pulling it down ($f_s = mg \sin \theta$), up to its maximum value.
*   **CO4 (Appropriate Principles):** Newton's Second Law ($\Sigma F = ma$) is the core principle. For friction, understanding $\mu_s$ and $\mu_k$ and their role is critical. For inclined planes, the concept of resolving forces relative to the surface is essential.
*   **CO5 (Rigid Body Dynamics):** This module is a foundational step towards understanding how forces cause changes in motion for rigid bodies. We're analyzing translational motion here, a key part of dynamics.

**Common Pitfalls to Watch Out For:**

1.  **Incorrect FBD:** Always start with a meticulously drawn FBD.
2.  **Confusing $\mu_s$ and $\mu_k$:** Use $\mu_s$ for static friction (prevents motion) and $\mu_k$ for kinetic friction (opposes motion).
3.  **Resolving Gravity Incorrectly on Inclines:** $mg \sin \theta$ is *parallel* to the incline, $mg \cos \theta$ is *perpendicular*. Get the angle $\theta$ right in your trigonometry.
4.  **Assuming $N=mg$ on Inclines:** The normal force is $mg \cos \theta$ on an incline. It's also affected by any vertical components of applied forces.
5.  **Friction Direction:** Remember friction *always* opposes relative motion or the tendency of motion. If an object is moving up an incline, friction acts down the incline. If it's moving down, friction acts up the incline.

### Summary of Key Formulas:

*   **Newton's Second Law:** $\Sigma F = ma$
*   **Friction:**
    *   Static: $f_s \le \mu_s N$
    *   Kinetic: $f_k = \mu_k N$
*   **Motion on Horizontal Surface (with horizontal force P):**
    *   Vertical: $N = mg$
    *   Horizontal: $P - f_k = ma_x$
*   **Motion on Inclined Plane (angle $\theta$, moving down):**
    *   Perpendicular to plane: $N = mg \cos \theta$
    *   Parallel to plane: $mg \sin \theta - \mu_k mg \cos \theta = ma_x$
    *   Acceleration: $a_x = g (\sin \theta - \mu_k \cos \theta)$
*   **Sliding Angle:** $\tan \theta_c = \mu_s$

Remember, practice is key! Work through as many problems as you can, drawing every FBD and writing out every equation.

---

## Sample Questions and Answers

**Question 1 (Conceptual):** When an object is pulled on a horizontal surface by a rope angled upwards, how does the normal force exerted by the surface on the object compare to the object's weight? Explain why.

**Answer:** The normal force will be *less* than the object's weight. This is because the upward vertical component of the pulling force ($P_y = P \sin \theta$) helps to "lift" the object, reducing the amount of support the surface needs to provide. In our vertical force balance ($\Sigma F_y = 0$), we had $N + P_y - W = 0$, which rearranges to $N = W - P_y$. Since $P_y$ is a positive value, $N$ must be less than $W$.

**Question 2 (Calculation - Horizontal Surface):** A 75 kg crate rests on a horizontal floor. The coefficient of static friction between the crate and the floor is 0.40, and the coefficient of kinetic friction is 0.30. If a horizontal force of 280 N is applied to the crate, will it move? If so, what will be its acceleration? (Use $g = 9.81 \, m/s^2$)

**Answer:**
First, calculate the maximum static friction:
$W = mg = 75 \times 9.81 = 735.75$ N.
$N = W = 735.75$ N (since it's on a horizontal surface with no vertical applied forces).
$f_{s,max} = \mu_s N = 0.40 \times 735.75 = 294.3$ N.

The applied force is $P = 280$ N.
Since $P$ (280 N) is less than $f_{s,max}$ (294.3 N), the crate will **not move**. The static friction force will be equal and opposite to the applied force, $f_s = 280$ N, and the acceleration is $0 \, m/s^2$.

**Question 3 (Calculation - Inclined Surface):** A block of mass 5 kg is placed on an inclined plane that makes an angle of 30° with the horizontal. The coefficient of kinetic friction between the block and the plane is 0.25. Calculate the acceleration of the block as it slides down the incline. (Use $g = 9.81 \, m/s^2$)

**Answer:**
We use the formula derived for acceleration down an incline with kinetic friction:
$a_x = g (\sin \theta - \mu_k \cos \theta)$

Given:
$m = 5$ kg
$\theta = 30^\circ$
$\mu_k = 0.25$
$g = 9.81 \, m/s^2$

$a_x = 9.81 (\sin 30^\circ - 0.25 \cos 30^\circ)$
$a_x = 9.81 (0.5 - 0.25 \times 0.866)$
$a_x = 9.81 (0.5 - 0.2165)$
$a_x = 9.81 (0.2835)$
$a_x \approx 2.781 \, m/s^2$

The acceleration of the block down the incline is approximately $2.781 \, m/s^2$.

**Question 4 (Conceptual/Exam-oriented):** Explain the concept of the "sliding angle" or "angle of repose" on an inclined plane. What is its relation to the coefficient of static friction?

**Answer:** The sliding angle (or angle of repose) is the minimum angle of inclination at which an object, initially at rest on the surface, will begin to slide down due to gravity. This occurs when the component of the object's weight acting parallel to the incline (pulling it downwards) becomes equal to the maximum possible static friction force that the surface can provide.

Mathematically, the condition for sliding is when the parallel component of weight ($mg \sin \theta$) exceeds the maximum static friction ($f_{s,max} = \mu_s N$). Since $N = mg \cos \theta$ on an incline, the condition becomes:
$mg \sin \theta > \mu_s mg \cos \theta$

The sliding angle $\theta_c$ is the angle where equality holds:
$mg \sin \theta_c = \mu_s mg \cos \theta_c$

Dividing both sides by $mg \cos \theta_c$ (assuming $\cos \theta_c \neq 0$):
$\frac{\sin \theta_c}{\cos \theta_c} = \mu_s$
$\tan \theta_c = \mu_s$

Therefore, the sliding angle is directly related to the coefficient of static friction; specifically, the tangent of the sliding angle is equal to the coefficient of static friction. This is a crucial relationship for determining when motion will initiate on an incline.
