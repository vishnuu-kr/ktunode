---
title: "motion of connected bodies"
subject: "ENGINEERING MECHANICS"
module: "Module 3: Dynamics – rectilinear translation "
branch: "Civil Engineering"
semester: 1
topicId: "68b54565d74ec52cc0912ae1"
status: "completed"
scrapedAt: "2026-05-20T18:29:17.586Z"
---
# Engineering Mechanics: Module 3 - Dynamics - Rectilinear Translation

## Topic: Motion of Connected Bodies

Welcome, everyone! Today, we're diving into a particularly exciting and practical aspect of dynamics: the **motion of connected bodies**. We've already laid the groundwork for understanding how single objects move in a straight line – their acceleration, velocity, and position. Now, we're going to explore what happens when these objects are linked together. Think about it: a train with multiple carriages, a system of pulleys, even a simple seesaw. The motion of one part directly influences the motion of the others. This is the essence of connected bodies, and mastering it is crucial for understanding many real-world engineering systems.

Our goal today is to equip you with the tools to analyze these scenarios. We'll see how the fundamental principles we’ve learned about Newton's Laws and kinematics can be extended to these more complex, interconnected systems. This ties directly into our **Course Outcome 5: Develop the understanding of fundamental principles of rigid body dynamics**, as these connected bodies, though moving rectilinearly, are the stepping stones to more complex dynamics. We’ll also be touching upon **CO1 (Vector representation of forces), CO2 (Components of forces), and CO4 (Appropriate principles to solve problems)** as we analyze the forces and motion involved.

### 1. The Core Concept: Kinematic Relationships

When bodies are connected, their motions are *not* independent. There's a **kinematic constraint** linking them. This is the absolutely critical starting point. What does this mean in practice? It means if one connected body moves a certain distance, or at a certain velocity, or with a certain acceleration, the other connected bodies *must* move in a related way.

Imagine two blocks connected by a rope over a frictionless pulley. If block A moves down by 2 meters, block B *must* move up by 2 meters. Their displacements are related. Similarly, their velocities and accelerations will also be related.

Let's consider a simple example, building on what you might find in Timoshenko and Young or Hibbeler.

**Example 1: The Rope and Pulley System**

Picture two blocks, Block A and Block B, connected by an inextensible (meaning it doesn't stretch) and massless (for simplicity, a common assumption in introductory problems) rope over a smooth (no friction) pulley.

*   **Block A** is on a horizontal surface.
*   **Block B** is hanging vertically.

If Block A moves to the right with an acceleration $a_A$, what happens to Block B? Because the rope is inextensible, the length of rope passing over the pulley must be constant. This means that if Block A moves a distance $x_A$ to the right, Block B must move the same distance $x_B$ downwards.

Mathematically, if we define the position of Block A as $x_A$ (measured from a fixed point) and the position of Block B as $y_B$ (measured downwards from the pulley), then the total length of the rope is $L = x_A + y_B + \text{constant}$. Since $L$ and the constant are indeed constant, differentiating with respect to time gives us the relationship between their velocities:

$0 = v_A + v_B$
So, $v_B = -v_A$.

This negative sign is important! It tells us that if $v_A$ is positive (say, to the right), then $v_B$ is negative (meaning it's moving upwards, if we defined positive $y_B$ as downwards).

Differentiating again for acceleration:

$0 = a_A + a_B$
So, $a_B = -a_A$.

This fundamental relationship between accelerations, velocities, and displacements is the **kinematic equation** for this system. It's the direct consequence of the kinematic constraint imposed by the rope. This is where **CO4** comes into play – identifying the appropriate principle (kinematic constraint) to solve this problem.

*   **Key Takeaway:** For connected bodies, the first step is *always* to establish the kinematic relationship between their motions. Hibbeler often refers to this as developing the "kinematic equations" for the system.

### 2. Analyzing Forces: Free-Body Diagrams for Each Body

Now that we understand how the motions are linked, we need to figure out *why* they move the way they do. This is where Newton's Second Law ($\Sigma F = ma$) comes in. Since we have multiple bodies, we need to apply this law *to each body individually*.

This means drawing a **Free-Body Diagram (FBD)** for *each* connected body. This is a direct application of **CO2: Identify and describe the components of system of forces acting on the rigid body**.

Let's revisit our rope and pulley example:

**Free-Body Diagrams:**

*   **For Block A (on the horizontal surface):**
    *   Weight ($W_A = m_A g$) acting downwards.
    *   Normal force ($N_A$) from the surface acting upwards.
    *   Tension ($T$) in the rope acting horizontally to the left.
    *   Friction force ($f_k$) from the surface acting horizontally to the right (if there's friction).
    *   Applied force ($F$) pulling it, let's say to the right.

*   **For Block B (hanging vertically):**
    *   Weight ($W_B = m_B g$) acting downwards.
    *   Tension ($T$) in the rope acting upwards.

Notice that the tension $T$ in the rope is the *same* for both blocks, assuming a massless and frictionless rope/pulley. This is a common feature of connected body problems.

### 3. Applying Newton's Second Law and Solving the System

Once we have the FBDs and the kinematic relationships, we can write down Newton's Second Law for each body in the appropriate direction of motion.

Continuing with our example:

**Equations of Motion:**

*   **For Block A (horizontal motion, assuming motion to the right is positive):**
    $\Sigma F_x = m_A a_A$
    $F - f_k - T = m_A a_A$

*   **For Block B (vertical motion, assuming downward motion is positive):**
    $\Sigma F_y = m_B a_B$
    $W_B - T = m_B a_B$

Now, we have a system of equations. We have our kinematic relationship $a_B = -a_A$ (or $a_B = a_A$ if we chose consistent positive directions, but let's stick to the physical meaning for now). If we assume downward is positive for B, and rightward is positive for A, then $a_A$ and $a_B$ are actually in the *same direction of motion*, meaning $a_B = a_A$. Let's redefine our positive directions:

*   Let positive $x_A$ be to the right.
*   Let positive $y_B$ be downwards.

Then, the kinematic relationship becomes $a_B = a_A$.

The equations of motion become:

1.  $F - f_k - T = m_A a_A$
2.  $m_B g - T = m_B a_B$

And our kinematic constraint:

3.  $a_B = a_A$

We now have three equations and three unknowns ($T$, $a_A$, $a_B$, and if $f_k$ is known or can be calculated as $\mu_k N_A$). If $f_k$ is zero (frictionless), we have two unknowns $T$ and $a_A$ (since $a_B=a_A$).

Let's solve for $a_A$ and $T$ assuming no friction ($f_k=0$) and a coefficient of kinetic friction $\mu_k$ between block A and the surface.
First, for Block A, the normal force $N_A$ balances the weight $W_A$, so $N_A = m_A g$.
The kinetic friction force is $f_k = \mu_k N_A = \mu_k m_A g$.

Our equations are:
1.  $F - \mu_k m_A g - T = m_A a_A$
2.  $m_B g - T = m_B a_B$
3.  $a_B = a_A$

Substitute (3) into (2):
$m_B g - T = m_B a_A$

Now we have a system of two equations with two unknowns ($T$ and $a_A$):
1'. $F - \mu_k m_A g - T = m_A a_A$
2'. $m_B g - T = m_B a_A$

We can solve this system. A common technique is substitution or elimination. Let's solve for $T$ from (2') and substitute into (1'):

From (2'): $T = m_B g - m_B a_A$

Substitute this into (1'):
$F - \mu_k m_A g - (m_B g - m_B a_A) = m_A a_A$
$F - \mu_k m_A g - m_B g + m_B a_A = m_A a_A$

Now, gather terms with $a_A$:
$m_B a_A - m_A a_A = m_B g + \mu_k m_A g - F$
$a_A (m_B - m_A) = g(m_B + \mu_k m_A) - F$

Ah, wait. Looking at the signs, if Block A moves right, Block B moves down. So if $a_A$ is positive (right), $a_B$ should also be positive (down) in the *direction of motion*. Let's be very careful with our coordinate system and the kinematic relationships.

Let's define $x_A$ as the displacement of block A to the right, and $y_B$ as the displacement of block B downwards.
The rope length $L = x_A + y_B + (\text{constant length of rope from pulley to A and B})$.
$L = x_A + y_B + C$
$0 = \dot{x}_A + \dot{y}_B$ -> $v_B = -v_A$. This is if $x_A$ is to the right and $y_B$ is upwards.

Let's redefine $y_B$ as displacement of block B *upwards*.
Then $L = x_A + (\text{length of rope from B to pulley}) + (\text{length of rope from pulley to A})$.
$L = x_A + (L_{BP}) + (L_{PA})$.
If $y_B$ is upwards for block B, and $x_A$ is to the right for block A:
$L = x_A + y_B + C$
$0 = \dot{x}_A + \dot{y}_B \implies v_B = -v_A$.
And $a_B = -a_A$.

So if Block A moves right with acceleration $a_A$, Block B moves *up* with acceleration $a_B$, where $a_B = a_A$.

Now, FBDs and $\Sigma F = ma$:

*   **Block A (moving right, so $x_A$ positive to the right):**
    $\Sigma F_x = m_A a_A$
    $F - T - f_k = m_A a_A$
    where $f_k = \mu_k N_A = \mu_k m_A g$.
    So: $F - T - \mu_k m_A g = m_A a_A$ (Eq. 1)

*   **Block B (moving up, so $y_B$ positive upwards):**
    $\Sigma F_y = m_B a_B$
    $T - W_B = m_B a_B$
    $T - m_B g = m_B a_B$ (Eq. 2)

Kinematic constraint: $a_B = a_A$ (since if A moves right, B moves up with the same magnitude of acceleration).

Now we have:
1.  $F - T - \mu_k m_A g = m_A a_A$
2.  $T - m_B g = m_B a_A$

This is a system of two linear equations in two unknowns ($T$ and $a_A$). We can solve this. Add Eq. 1 and Eq. 2 to eliminate $T$:

$(F - T - \mu_k m_A g) + (T - m_B g) = m_A a_A + m_B a_A$
$F - \mu_k m_A g - m_B g = (m_A + m_B) a_A$

Now, solve for $a_A$:
$a_A = \frac{F - (\mu_k m_A + m_B) g}{m_A + m_B}$

And once $a_A$ is found, we can find $T$ from Eq. 2:
$T = m_B g + m_B a_A$

This systematic approach – kinematic relationships, FBDs for each body, and then solving the resulting system of equations – is the backbone of analyzing connected bodies. This is where **CO4** is applied extensively.

*   **Exam Tip:** Always draw your FBDs clearly and define your positive directions consistently. The kinematic equations are crucial for linking the accelerations (and velocities/displacements) of the connected bodies. Misinterpreting the kinematic link is a very common mistake.

### 4. Different Types of Connections and Kinematic Links

The rope-and-pulley example is fundamental, but connections can be more complex. The key is still understanding how the displacement of one point dictates the displacement of another.

#### 4.1. Inextensible Cables/Belts

As we saw, inextensible cables create direct relationships between displacements. If a cable is wrapped around a pulley and connects two bodies:

*   **Pulley:** If the pulley is *fixed*, the cable length remains constant between the points where it leaves the pulley.
*   **Pulley:** If the pulley is *movable* and attached to a body, its motion must also be accounted for in the kinematic relationship.

**Example 2: Movable Pulley System**

Imagine a block being lifted by a single movable pulley. A rope is attached to a fixed support, goes around the movable pulley (which is attached to the block), and then up to a motor.

Let:
*   $y_B$ be the position of the block (and pulley) upwards.
*   $L_1$ be the length of rope from the fixed support to the pulley.
*   $L_2$ be the length of rope from the pulley to the motor (held fixed).

The total length of the rope ($L$) is:
$L = L_1 + L_2$.
However, $L_1$ depends on the position of the block. The length of rope from the fixed support to the pulley is $y_B$ plus some constant offset. Let's say the rope from the support to the pulley is length $l_1$, and the rope from the pulley to the motor is length $l_2$.
$l_1 = Y_{support} - y_B$ (if $Y_{support}$ is the fixed support height, and $y_B$ is upwards).
$l_2$ is the length of the second segment.
Total rope length $L = l_1 + l_2 = (Y_{support} - y_B) + l_2$.
Since $L$, $Y_{support}$, and $l_2$ are constant (assuming the motor pulls at a fixed point), we have:
$0 = - \dot{y}_B \implies v_B = 0$? This is not right.

Let's re-think the movable pulley.
Consider a block being lifted by a rope attached to a fixed support (A), going down around a movable pulley (P) attached to the block, and then up to a person pulling.
Let $y_B$ be the position of the block (and pulley) upwards.
Let $x_1$ be the length of rope from support A to the pulley P.
Let $x_2$ be the length of rope from the pulley P to the person's hand.

The total length of the rope is $L = x_1 + x_2$.
The length $x_1$ is related to the block's position. If the support is at height $H$, and the block is at $y_B$ upwards, then the length of rope segment from support to pulley is $H - y_B$.
So, $x_1 = H - y_B$.

The length $x_2$ is the length of rope pulled by the person. Let's say the person pulls with a velocity $v_{pull}$.
$L = (H - y_B) + x_2$
$0 = - \dot{y}_B + \dot{x}_2$
$v_{pull} = \dot{x}_2$ and $v_B = \dot{y}_B$.
So, $v_{pull} = v_B$.

This means the velocity at which the person pulls the rope is equal to the velocity of the block.
But wait, if the person pulls 1 meter of rope, the block moves up by 1 meter. This seems too simple.

Ah, the key is that the rope goes *around* the pulley.
Let's consider the lengths of the rope segments more carefully.
Support A ---rope---> Pulley P (attached to block B) ---rope---> Hand H.
Let $y_B$ be the upward displacement of block B.
Let $y_H$ be the displacement of the hand pulling the rope upwards.

Length of rope from A to P: $l_{AP}$.
Length of rope from P to H: $l_{PH}$.
Total rope length: $L = l_{AP} + l_{PH}$.

If the support A is fixed, and the hand H moves up by $y_H$, and the block B moves up by $y_B$:
$l_{AP} = (\text{fixed height of A}) - y_B$. Let fixed height be $h_A$.
$l_{AP} = h_A - y_B$.
$l_{PH}$ is the length of rope segment being pulled by the hand. This is related to the hand's displacement. If the hand pulls the rope by an amount $s$, then $l_{PH}$ decreases by $s$. So, $l_{PH} = L_{initial} - s$. And the displacement of the hand $y_H$ is related to $s$.

Let's consider the total length of the rope being pulled. If the person pulls the rope with their hand, the velocity of the hand is $v_H$. This is the velocity at which the rope is being pulled.
The length of rope between the hand and the pulley is decreasing at rate $v_H$.
The length of rope between the pulley and the fixed support is also related to the block's motion.

Let $y$ be the position of the block upwards.
Let $s$ be the total length of rope pulled by the hand.
The rope segments are: Fixed support -> Pulley -> Hand.
The length of the first segment (support to pulley) is $h_{fixed} - y$.
The length of the second segment (pulley to hand) is $l_{pulley-hand}$.
Total rope length $L = (h_{fixed} - y) + l_{pulley-hand}$.
The rate at which the hand pulls the rope is $v_{hand} = -\frac{dl_{pulley-hand}}{dt}$.
So, $l_{pulley-hand} = L_{initial} - v_{hand} t$.
$L = (h_{fixed} - y) + (L_{initial} - v_{hand} t)$.
$0 = -\frac{dy}{dt} - v_{hand}$.
$v_{hand} = -\frac{dy}{dt}$.

This still suggests $v_{hand} = -v_B$. If $v_{hand}$ is upward velocity, then $v_B$ is downward velocity. This implies if hand pulls upwards, block moves downwards? That's incorrect.

Let's try a different perspective: **Sum of velocities of rope segments.**
Consider the points on the rope.
Point on rope at support A: Velocity = 0.
Point on rope going down from A to P: Velocity $v_P$ (same as pulley/block) downwards.
Point on rope going up from P to H: Velocity $v_H$ upwards.

Kinematic relation for velocity along the rope:
The velocity of the rope must be consistent. Consider the point where the rope bends around the pulley.
Let $v_A$ be the velocity of the rope at point A (0).
Let $v_P$ be the velocity of the rope at pulley P (which is $v_B$, the velocity of the block, let's assume downwards is positive for the block, $v_B$).
Let $v_H$ be the velocity of the rope at the hand H (let's assume upwards is positive, $v_H$).

The velocity of the rope segments must be related.
If the pulley is smooth and the rope is inextensible, the velocity of the rope just before and just after the pulley must be related.
Consider the segment of rope from the support to the pulley. Its velocity is $v_B$.
Consider the segment of rope from the pulley to the hand. Its velocity is $v_H$.

If the pulley moves down by $dy_B$, then the length of rope $l_{AP}$ from support to pulley increases by $dy_B$.
This increase must come from the rope being pulled by the hand.
The length of rope pulled by the hand is $ds = -dy_{PH}$. If hand pulls up by $dy_H$, then $ds = dy_H$.
So, $dy_B = dy_H$. This still gives $v_B = v_H$.

The mistake often is in counting the rope segments. In a movable pulley system where the rope goes around the pulley, if you pull the rope by a length $s$, the load attached to the pulley moves up by $s/2$.
Let $y_B$ be the upward position of the block. Let $s$ be the length of rope pulled by the hand.
The length of rope supporting the block from one side is $l_1$. The length from the other side is $l_2$.
$l_1 = h_{support} - y_B$.
$l_2 = s$.
Total rope length $L = l_1 + l_2 = (h_{support} - y_B) + s$.
$0 = -\dot{y}_B + \dot{s}$.
$\dot{y}_B = \dot{s}$.
This means the velocity of the block is equal to the velocity at which the rope is pulled.

This is a bit counter-intuitive for movable pulleys. Let's check textbooks like Shames or Bansal for a clear explanation of movable pulley kinematics.
Shames (4th Ed., p. 762) on velocity analysis of linked rigid bodies: "The velocity of any point on a flexible inextensible cord is the same as the velocity of any other point on the cord."
Okay, so $v_A = v_P = v_H$ in terms of rope speed.
Let $y_B$ be upward position of block. $v_B$ is its velocity.
Let $v_H$ be upward velocity of hand.
Support A ----- $l_1$ ----- Pulley P ----- $l_2$ ----- Hand H
$l_1 = H - y_B$ (H is fixed support height)
$l_2 = \text{length of rope from P to H}$. If hand moves up by $y_H$, $l_2$ decreases by $y_H$. So $l_2 = L_{initial} - y_H$.
Total length $L = l_1 + l_2 = (H - y_B) + (L_{initial} - y_H)$.
$0 = -\dot{y}_B - \dot{y}_H$.
$\dot{y}_B = -\dot{y}_H$.
This implies if hand moves up, block moves down. This is STILL wrong.

Let's redefine what $y_H$ represents. Let $s$ be the length of rope pulled by the hand. So the hand's displacement is $s$ upwards.
$l_1 = H - y_B$.
$l_2 = \text{length of rope from P to H}$. This length IS $s$, the amount of rope pulled.
So, $L = l_1 + l_2 = (H - y_B) + s$.
$0 = -\dot{y}_B + \dot{s}$.
$\dot{y}_B = \dot{s}$.
Here, $\dot{s}$ is the velocity at which the rope is pulled. So $v_B = v_{pull}$.
This means if you pull 1 meter of rope, the block moves up 1 meter. This contradicts the common understanding of movable pulleys giving mechanical advantage.

The standard analysis of a movable pulley giving a 2:1 advantage comes from the *force* aspect. For velocity, the rule is about the *length of rope* moved.

Think about it physically. If the block moves up by 1 meter, the rope segment on *both* sides of the pulley gets shorter by 1 meter. So, a total of 2 meters of rope must be pulled.
Let $y_B$ be upwards displacement of the block.
Let $s$ be upwards displacement of the hand.
Length of rope: $L = (H-y_B) + (\text{rope segment from P to H})$.
The length of rope from P to H is not simply $s$.
It's related to the *total* length of rope pulled.

Let's use the concept of velocity of points on the rope.
Point at support A: $v_A = 0$.
Pulley P moves with velocity $v_B$ (upwards).
Hand H moves with velocity $v_H$ (upwards).

Consider the segment of rope AP. Velocity of point A = 0. Velocity of point P = $v_B$. The velocity of rope along AP is $v_B$.
Consider the segment of rope PH. Velocity of point P = $v_B$. Velocity of point H = $v_H$.
If the pulley is smooth, the rope velocity on either side of the pulley must sum up to the velocity of the pulley itself in a specific way.

Let's go back to the simple formulation from Hibbeler or Shames for pulleys.
For a pulley lifting a block:
If block moves up by $y_B$, the rope from the support to the pulley shortens by $y_B$.
The rope from the pulley to the hand shortens by $y_H$.
Total rope pulled $s = y_B + y_H$.
So, velocity $v_{pull} = \dot{s} = \dot{y}_B + \dot{y}_H$.
If the hand is fixed, $v_H=0$. Then $v_{pull} = v_B$.
This is for a *fixed* pulley lifting a block directly.

For a movable pulley, the rope goes around it.
Support A --- $l_1$ --- Pulley P (with block) --- $l_2$ --- Hand H.
$l_1 = H - y_B$
$l_2$ is the length of rope from P to H. The total length of rope pulled by the hand is $s$. So $l_2$ decreases as $s$ increases.
Total length $L = l_1 + l_2$.
$L = (H - y_B) + (\text{length of rope from P to H})$.

Consider the points on the rope.
Let $v_A$ be velocity of rope at A (0).
Let $v_P$ be velocity of rope at P (same as $v_B$).
Let $v_H$ be velocity of rope at H ($v_H$).

The velocity of the rope is continuous.
Consider the velocities of the points on the rope that are *attached* to the moving bodies.
For pulley P (attached to block), its velocity is $v_B$.
For hand H, its velocity is $v_H$.

If you pull $s$ meters of rope, the block moves up $y_B$.
Total length of rope $L = (\text{length to P}) + (\text{length from P to H})$.
Length from support to P: $l_1$.
Length from P to H: $l_2$.
$L = l_1 + l_2$.
$l_1$ decreases by $y_B$ when block goes up by $y_B$.
$l_2$ decreases by $y_H$ when hand goes up by $y_H$.
$0 = -\dot{y}_B - \dot{y}_H$.

The error is in assuming $l_2$ is the amount pulled by hand directly.
Let $s$ be the total length of rope pulled by the hand.
Then the length of rope on *both* sides of the pulley has decreased.
Length on left = $L_{left}$. Length on right = $L_{right}$.
$L_{left} = H - y_B$.
$L_{right}$ is the length of rope from P to H.
The total length of rope pulled is $s$. This $s$ is distributed on both sides.

Let's use the "sum of velocities of rope segments passing over the pulley" approach.
For a movable pulley attached to the load, if the load moves up by $y_B$, the rope length from support to pulley decreases by $y_B$. The rope length from pulley to hand also decreases.

The crucial insight for movable pulleys:
If the block moves up by $y_B$, the length of rope on *both sides* of the pulley must shorten by $y_B$.
Thus, the total length of rope pulled by the hand is $s = 2y_B$.
Therefore, $v_{pull} = \dot{s} = 2\dot{y}_B = 2v_B$.
So, the velocity of the block is half the velocity at which the rope is pulled: $v_B = v_{pull} / 2$.
This gives the mechanical advantage for force. If the pull force is $F_{pull}$ and the tension in the rope is $T$, then $F_{pull} = T$. The load is supported by two rope segments, so the load weight $W_B = 2T$. Hence $W_B = 2F_{pull}$.

*   **Summary for Movable Pulley Kinematics:** If a load moves up by $y$, the rope must be pulled by $2y$. So, $v_{load} = v_{pull} / 2$.

#### 4.2. Linkages and Rigid Rods

Connected bodies can also be linked by rigid rods. If a rod is pinned at both ends to two moving bodies (or one moving, one fixed), the distance between the pinned ends remains constant. This is a **constraint equation**.

**Example 3: Two Blocks Connected by a Rod**

Consider two blocks, A and B, on inclined planes, connected by a rigid, massless rod of length $L$. Block A is on an incline of $\theta_A$ and Block B on an incline of $\theta_B$.

Let $x_A$ be the position of A along its incline (measured from some origin), and $x_B$ be the position of B along its incline.
The length of the rod $L$ can be expressed in terms of $x_A$ and $x_B$ using geometry.
If the rod is horizontal, $L = |x_B - x_A|$.
If they are on different inclined planes, and the angle of the rod with the horizontal is $\phi$, then:
$L^2 = (\Delta x)^2 + (\Delta y)^2$.
$\Delta x = x_B \cos\theta_B - x_A \cos\theta_A$.
$\Delta y = x_B \sin\theta_B - x_A \sin\theta_A$.
So, $L^2 = (x_B \cos\theta_B - x_A \cos\theta_A)^2 + (x_B \sin\theta_B - x_A \sin\theta_A)^2$.
This gives a constraint equation. Differentiating it twice with respect to time will yield the relationship between $a_A$ and $a_B$. This can get algebraically complex, which is why careful setup is vital.

Often, simpler geometric relationships are used. If the rod is of fixed length $L$ and connects points $(x_A, y_A)$ and $(x_B, y_B)$, then $(x_A - x_B)^2 + (y_A - y_B)^2 = L^2$. Differentiating this gives:
$2(x_A - x_B)(\dot{x}_A - \dot{x}_B) + 2(y_A - y_B)(\dot{y}_A - \dot{y}_B) = 0$.
This relates their velocities. Differentiating again relates their accelerations.

*   **Key Concept:** The distance between two points connected by a rigid rod is constant. This leads to a geometric constraint equation.

#### 4.3. Rolling Motion (Brief Mention)

While our focus is rectilinear translation, sometimes connected bodies involve rolling. For a wheel rolling without slipping on a horizontal surface:
*   The velocity of the center of the wheel ($v_c$) is related to its angular velocity ($\omega$) by $v_c = r\omega$, where $r$ is the radius.
*   The acceleration of the center ($a_c$) is related to its angular acceleration ($\alpha$) by $a_c = r\alpha$.

If a wheel is connected to a block, these relationships become part of the kinematic constraints. For example, if a wheel rolls without slipping and pulls a block with a rope wrapped around it, the block's velocity will be $r\omega$ if the rope is attached to the axle, or $r\omega$ if the rope is wrapped around the circumference.

### 5. Systems with More Than Two Bodies

The principles remain the same when you have more than two bodies connected. The key is:
1.  Identify *each* body that is moving.
2.  Draw an FBD for *each* body.
3.  Establish *all* the kinematic constraints between the motions of these bodies. This might involve multiple equations.
4.  Apply Newton's Second Law to *each* body.
5.  Solve the resulting system of algebraic equations for the unknown accelerations, tensions, forces, etc.

The complexity increases with the number of bodies and the intricacy of the connections. **CO4** is paramount here, as you need to select the right principles and organize your equations.

### 6. Example of a Multi-Body System

Consider a system where Block C moves vertically downwards, pulling a rope that goes over a fixed pulley, then around a movable pulley attached to Block A, and then up to a fixed support. Block B is on a horizontal surface and is connected to Block A by a rope.

This is a complex system requiring careful analysis of each connection:
*   **Block C:** Moves vertically downwards. $a_C$. FBD for C will involve its weight and tension in the rope.
*   **Fixed Pulley 1:** Changes the direction of tension.
*   **Movable Pulley (attached to A):** The kinematic relation for Block C pulling this movable pulley is crucial. If rope segment pulled by C has velocity $v_C$, and the movable pulley (and Block A) moves up with $v_A$, then $v_C = v_A + v_{rope\_segment\_from\_A\_to\_support}$. This is getting complicated!

Let's simplify it: Block C pulls a rope. This rope goes over pulley 1, then attaches to block A. Block A is on a horizontal surface and is connected by another rope to block B.

*   **Block C:** $W_C$ down, $T_1$ up. $W_C - T_1 = m_C a_C$.
*   **Block A:** $W_A$ down, $N_A$ up, $T_2$ (from its rope to B) left, $T_1$ (from rope attached to C) right. $T_1 - T_2 = m_A a_A$. (Assuming $T_1$ pulls A to the right, $T_2$ pulls A to the left).
*   **Block B:** $W_B$ down, $N_B$ up, $T_2$ (from its rope to A) right. $T_2 = m_B a_B$. (Assuming B moves to the right with $a_B$).

**Kinematic Link:** If the rope is inextensible, and Block C moves down by $s_C$, then Block A moves to the right by $s_A$. What's the relationship?
The length of rope between C and pulley 1 is $l_1$. $l_1 = (\text{initial dist}) - s_C$.
The length of rope between pulley 1 and A is $l_2$. $l_2 = (\text{initial dist}) - s_A$.
Total length $L = l_1 + l_2$.
$0 = -\dot{s}_C - \dot{s}_A$.
$a_A = -a_C$. This means if C moves down, A moves left.
If we assume Block A moves to the right, then $a_A$ should be positive to the right. Block C moves down, so $a_C$ is positive downwards.
Let's redefine directions:
*   $y_C$ positive downwards for block C.
*   $x_A$ positive to the right for block A.
*   $x_B$ positive to the right for block B.

Kinematic constraint: Rope connects C to A. If C moves down by $y_C$, A moves right by $x_A$.
$L = (\text{initial length of rope from C to pulley}) + (\text{initial length of rope from pulley to A})$.
$L = (L_{C0} - y_C) + (L_{A0} - x_A)$.
$0 = -\dot{y}_C - \dot{x}_A$.
So $a_A = -\dot{x}_A = \dot{y}_C = a_C$.
This means if C accelerates downwards, A accelerates to the *left*. This is crucial.

Now, let's assume Block A is connected to Block B by another rope. If Block A accelerates to the left, it pulls Block B. So $a_B = a_A$ (if they move together in the same direction).
If A moves left by $x_A$, B moves left by $x_B$, then $a_B = a_A$.

Let's reconsider the connection between A and B. Typically, a rope connecting A and B means if A moves, B moves with it. Let's assume the rope is taut and connects them.
If A moves left by $x_A$, B moves left by $x_B$, then $x_A = x_B$ and $a_A = a_B$.

But the rope is attached to Block A which is accelerating. The connection is between Block A and Block B. This means if Block A moves, Block B moves along with it.
Let's assume Block A moves to the right. Then Block B also moves to the right.
So, $a_A = a_B$.

The rope from C to A: If $y_C$ is displacement of C downwards, and $x_A$ is displacement of A to the right.
$L = (y_C - L_{C0}) + (x_A - L_{A0})$ NO.
$L = (L_{C0}-y_C) + (L_{A0}-x_A)$.
$0 = -\dot{y}_C - \dot{x}_A$.
$a_A = \dot{x}_A = -\dot{y}_C = -a_C$.
So, if C accelerates downwards ($a_C>0$), A accelerates to the left ($a_A < 0$).
If A accelerates to the left, and B is connected to A by a rope and moves with A, then B also accelerates to the left ($a_B = a_A$).

Let's assume Block B is pulled by the rope, meaning the tension in the rope $T_2$ causes $a_B$.
For block B, let positive direction be leftwards.
$T_2 = m_B a_B$.
For block A, let positive direction be leftwards.
$T_1 - T_2 = m_A a_A$.
For block C, let positive direction be downwards.
$m_C g - T_1 = m_C a_C$.

Kinematic relations:
$a_B = a_A$ (assuming B moves with A).
$a_A = -a_C$.

Substitute:
$a_B = -a_C$.

Now we have a system of 3 equations with 3 unknowns ($T_1, T_2, a_C$ if we assume we want $a_C$):
1. $T_2 = m_B (-a_C)$  (since $a_B = -a_C$)
2. $T_1 - T_2 = m_A (-a_C)$ (since $a_A = -a_C$)
3. $m_C g - T_1 = m_C a_C$

Substitute (1) into (2):
$T_1 - (m_B (-a_C)) = m_A (-a_C)$
$T_1 + m_B a_C = -m_A a_C$
$T_1 = -m_A a_C - m_B a_C = -(m_A + m_B)a_C$

Substitute this $T_1$ into (3):
$m_C g - (-(m_A + m_B)a_C) = m_C a_C$
$m_C g + (m_A + m_B)a_C = m_C a_C$
$m_C g = m_C a_C - (m_A + m_B)a_C$
$m_C g = (m_C - m_A - m_B)a_C$

$a_C = \frac{m_C g}{m_C - m_A - m_B}$

This highlights how carefully defining directions and kinematic links is essential. The result for $a_C$ depends on the masses. If $m_C$ is much larger than $m_A$ and $m_B$, $a_C$ is positive and approximately $g$. If $m_C$ is smaller than $m_A+m_B$, $a_C$ would be negative, meaning C accelerates upwards, which is unphysical if it's being pulled down by gravity. This means our assumption that the rope is taut and causes acceleration might be wrong, or the system might move differently.

*   **Important Note:** If you get unphysical results (like acceleration in the wrong direction or negative mass), it usually means you assumed a taut rope when it should be slack, or your assumed direction of motion is incorrect. In such cases, you might need to re-evaluate the FBDs and kinematic constraints, or consider that the system might not move as initially presumed.

### 7. Summary and Key Takeaways

To summarize our journey into the motion of connected bodies:

*   **Kinematic Constraint is King:** Always start by establishing the relationships between the velocities, accelerations, and displacements of the connected bodies. This is dictated by the nature of their connections (ropes, rods, pulleys). (CO4)
*   **Decomposition:** Treat each body in the system as an individual object for force analysis. Draw a separate Free-Body Diagram for each. (CO2)
*   **Newton's Second Law:** Apply $\Sigma F = ma$ to each body based on its FBD.
*   **System of Equations:** You will end up with a system of linear algebraic equations, linking the forces and motions of all bodies.
*   **Solve Systematically:** Solve these equations simultaneously to find the desired unknowns (accelerations, tensions, forces).
*   **Careful with Directions:** Define your coordinate systems and positive directions consistently for each body and kinematic relationship. This is a major source of errors. (CO1, CO4)
*   **Types of Connections:** Understand how ropes, pulleys (fixed and movable), and rigid rods impose different types of kinematic constraints.

This topic directly builds your understanding of **CO5** by showing how fundamental dynamics principles extend to interacting systems. It requires careful application of **CO1, CO2, CO3, and CO4**.

Remember, the beauty of mechanics lies in its logical structure. Once you master these steps, analyzing complex connected systems becomes a systematic, solvable problem.

---

## Sample Questions and Answers

**Question 1 (Conceptual):**
In a system of connected bodies, why is it essential to draw a separate free-body diagram for each body?

**Answer:**
It is essential to draw a separate free-body diagram (FBD) for each body because Newton's Second Law ($\Sigma F = ma$) applies to *individual* bodies. Each body experiences its own set of forces (gravity, normal forces, tensions, applied forces, friction, etc.). By isolating each body in its FBD, we can correctly identify and sum these forces acting *on that specific body* and equate them to its mass times its acceleration. Without individual FBDs, it's impossible to apply Newton's laws correctly to the entire interconnected system, which would lead to incorrect force balances and motion analysis. This directly relates to **CO2** (identifying force components) and **CO4** (applying appropriate principles).

**Question 2 (Kinematic Analysis):**
Two blocks, A and B, are connected by an inextensible rope passing over a frictionless pulley. Block A rests on a smooth horizontal surface, and Block B hangs vertically. If Block A moves to the right with an acceleration $a_A$, what is the acceleration of Block B ($a_B$)?

**Answer:**
Let $x_A$ be the displacement of Block A to the right and $y_B$ be the displacement of Block B downwards. Since the rope is inextensible and passes over a frictionless pulley, the total length of the rope segment between Block A and Block B, measured along the rope, remains constant. If Block A moves $x_A$ to the right, the rope segment on the horizontal surface shortens by $x_A$. This shortening must be compensated by the rope segment on the vertical side lengthening. Therefore, Block B must move downwards by the same distance $y_B = x_A$.
Differentiating with respect to time, the velocity of Block A to the right ($v_A = \dot{x}_A$) is equal in magnitude to the velocity of Block B downwards ($v_B = \dot{y}_B$). So, $v_B = v_A$.
Differentiating again with respect to time, the acceleration of Block A to the right ($a_A = \ddot{x}_A$) is equal in magnitude to the acceleration of Block B downwards ($a_B = \ddot{y}_B$). Thus, $a_B = a_A$.
This is a direct application of **CO4** (identifying appropriate principles) and understanding kinematic constraints.

**Question 3 (Problem Solving):**
Block A of mass $m_A = 5$ kg rests on a horizontal surface with a coefficient of kinetic friction $\mu_k = 0.2$. It is connected by a rope to Block B of mass $m_B = 10$ kg, which hangs vertically. The rope passes over a frictionless pulley. A horizontal force $F = 60$ N is applied to Block A. Calculate the acceleration of the system and the tension in the rope. (Take $g = 9.81 \, \text{m/s}^2$).

**Answer:**
**1. Free-Body Diagrams (FBDs):**
*   **Block A:** Weight $W_A = m_A g$ downwards, Normal force $N_A$ upwards, applied force $F$ to the right, Tension $T$ to the left, Kinetic friction $f_k$ to the left (opposing motion).
*   **Block B:** Weight $W_B = m_B g$ downwards, Tension $T$ upwards.

**2. Kinematic Relationship:**
As analyzed in Question 2, $a_A = a_B$. Let's assume motion to the right for A and downwards for B, so $a_A = a_B = a$.

**3. Equations of Motion:**
*   **For Block A (horizontal motion):**
    $\Sigma F_x = m_A a$
    $F - T - f_k = m_A a$
    The normal force $N_A$ balances the weight $W_A$, so $N_A = m_A g$.
    The kinetic friction $f_k = \mu_k N_A = \mu_k m_A g$.
    So, $F - T - \mu_k m_A g = m_A a$  (Eq. 1)

*   **For Block B (vertical motion):**
    $\Sigma F_y = m_B a$
    $W_B - T = m_B a$
    $m_B g - T = m_B a$  (Eq. 2)

**4. Solving the System:**
Substitute given values:
$m_A = 5$ kg, $m_B = 10$ kg, $\mu_k = 0.2$, $F = 60$ N, $g = 9.81 \, \text{m/s}^2$.

Calculate friction force: $f_k = 0.2 \times 5 \, \text{kg} \times 9.81 \, \text{m/s}^2 = 9.81 \, \text{N}$.
Calculate weights: $W_A = 5 \times 9.81 = 49.05 \, \text{N}$, $W_B = 10 \times 9.81 = 98.1 \, \text{N}$.

Eq. 1 becomes: $60 \, \text{N} - T - 9.81 \, \text{N} = 5a \implies 50.19 \, \text{N} - T = 5a$
Eq. 2 becomes: $98.1 \, \text{N} - T = 10a$

We have a system of two equations with two unknowns ($T$ and $a$):
1'. $50.19 - T = 5a$
2'. $98.1 - T = 10a$

Subtract Eq. 1' from Eq. 2' to eliminate $T$:
$(98.1 - T) - (50.19 - T) = 10a - 5a$
$98.1 - 50.19 = 5a$
$47.91 = 5a$
$a = \frac{47.91}{5} = 9.582 \, \text{m/s}^2$

Now substitute $a$ back into Eq. 1' to find $T$:
$50.19 - T = 5 \times 9.582$
$50.19 - T = 47.91$
$T = 50.19 - 47.91 = 2.28 \, \text{N}$

**Answer:** The acceleration of the system is $a = 9.582 \, \text{m/s}^2$, and the tension in the rope is $T = 2.28 \, \text{N}$. This question tests **CO4** (problem-solving principles), **CO2** (FBDs), and **CO1** (vector forces). The calculations are straightforward but require careful setup.

**Question 4 (Conceptual / Pitfall):**
Consider a block on an inclined plane connected to a hanging block by a rope over a pulley. If the hanging block is very light and the inclined plane has a high coefficient of static friction, what might happen if the system is released from rest?

**Answer:**
If the hanging block is very light and the friction on the inclined plane is high, the weight of the hanging block might not be sufficient to overcome the static friction force and the component of gravity pulling the block on the incline downwards. In such a scenario, the static friction force will adjust itself to prevent motion, and the system will remain at rest. The acceleration of both blocks would be zero ($a=0$). The tension in the rope would be equal to the weight of the hanging block. This is an important case to consider for **CO3** (conditions of equilibrium) – even when bodies are connected, they might not move if the forces involved don't exceed the static friction threshold. A common pitfall is to immediately assume motion occurs and calculate acceleration. Always check if static friction can hold the system.
