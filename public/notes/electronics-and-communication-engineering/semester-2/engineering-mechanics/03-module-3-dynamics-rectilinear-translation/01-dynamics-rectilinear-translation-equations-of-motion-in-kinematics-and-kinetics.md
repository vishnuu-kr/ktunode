---
title: "Dynamics  – Rectilinear translation - equations of motion in kinematics and kinetics"
subject: "ENGINEERING MECHANICS"
module: "Module 3: Dynamics  – Rectilinear translation "
branch: "Electronics and Communication Engineering"
semester: 2
topicId: "68b7dc9020463779487da31e"
status: "completed"
scrapedAt: "2026-05-23T17:38:58.065Z"
---
# Engineering Mechanics: Module 3 - Dynamics: Rectilinear Translation

Welcome everyone! Today, we're diving into the exciting world of **Dynamics**, specifically focusing on **Rectilinear Translation**. This is where things start to move, and we want to understand *how* and *why* they move in a straight line. Think about that car accelerating down a highway, a train on a straight track, or even just a dropped object falling – these are all examples of rectilinear translation.

Our goal in this module is to equip you with the tools to analyze and predict the motion of objects moving in a straight line. We'll be looking at the **equations of motion** that govern this type of movement, both from a **kinematic** (describing motion without considering forces) and **kinetic** (linking forces to motion) perspective.

As we go through this, always keep our **Course Outcomes (COs)** in mind. We'll see how understanding the vector nature of forces (CO1), identifying forces on a body (CO2), applying equilibrium principles (CO3), choosing the right mechanics principles (CO4), and grasping rigid body dynamics fundamentals (CO5) all come together here. This topic really builds on your foundation in Statics, particularly CO1, CO2, and CO3, and sets the stage for more complex dynamics problems, directly impacting CO4 and CO5.

---

## 1. Introduction to Rectilinear Motion

Imagine you're tracking a runner on a straight track. What do we need to know to describe their movement? We need to know their **position** at any given time. This is the starting point for everything in dynamics.

### Position, Velocity, and Acceleration

*   **Position ($\vec{r}$ or $x$):** This tells us *where* an object is. In rectilinear motion, since the movement is restricted to a straight line, we can define a coordinate system along that line. Usually, we pick an origin and a positive direction. So, instead of a full 3D vector, we often just use a scalar value, like *x*, to represent the position along an axis (say, the x-axis).
    *   **Analogy:** Think of a car’s odometer. It tells you the total distance traveled, but if you wanted to know *where* the car is relative to your starting point on a straight road, you’d need a position measurement.
    *   **Textbook Connection:** You'll find this foundational concept of defining position along an axis extensively covered in the initial chapters of **Hibbeler** and **Shames**. They emphasize establishing a clear coordinate system, which is crucial.

*   **Velocity ($\vec{v}$ or $v$):** Velocity is the rate at which position changes. It tells us both *how fast* the object is moving and *in which direction*.
    *   **Definition:** Velocity is the first time derivative of position:
        $$ \vec{v} = \frac{d\vec{r}}{dt} \quad \text{or in rectilinear motion, } v = \frac{dx}{dt} $$
    *   **Analogy:** Imagine that runner again. If they are at the 100m mark at time $t_1$ and at the 150m mark at time $t_2$, their average velocity is $(150-100)/(t_2-t_1)$. Instantaneous velocity is that rate at a specific moment. A positive velocity means they are moving in the positive direction of our chosen axis, and a negative velocity means they're moving in the negative direction.
    *   **Quick Recall:** Velocity is the *rate of change of position*.

*   **Acceleration ($\vec{a}$ or $a$):** Acceleration is the rate at which velocity changes. It tells us *how the velocity is changing*.
    *   **Definition:** Acceleration is the first time derivative of velocity, or the second time derivative of position:
        $$ \vec{a} = \frac{d\vec{v}}{dt} = \frac{d^2\vec{r}}{dt^2} \quad \text{or in rectilinear motion, } a = \frac{dv}{dt} = \frac{d^2x}{dt^2} $$
    *   **Analogy:** Think about a car. When you press the accelerator, you increase the speed – that’s acceleration. When you brake, you decrease the speed – that’s also acceleration (specifically, deceleration, which is negative acceleration). Even changing direction instantaneously, like a flick of the steering wheel on a straight road (though that's not perfectly rectilinear!), involves a change in velocity, hence acceleration.
    *   **Textbook Connection:** **Timoshenko and Young** often introduce acceleration as the "rate of change of velocity," a very intuitive way to grasp it.
    *   **Common Pitfall:** Students sometimes confuse speed with velocity. Speed is the magnitude of velocity. An object can have constant speed but changing velocity if its direction changes (which isn't the case in *rectilinear* motion, but it's a good distinction to make early on).

### Relationships: Kinematics

These three quantities – position, velocity, and acceleration – are fundamentally linked. Their relationships form the core of **kinematics**. Kinematics is all about describing motion, answering "what is happening?" without asking "why is it happening?".

The fundamental kinematic equations for rectilinear motion are derived directly from the definitions:

1.  **Velocity from acceleration:** $v = v_0 + \int_{0}^{t} a \, dt$
2.  **Position from velocity:** $x = x_0 + \int_{0}^{t} v \, dt$

These integral forms are the most general. However, for many common problems, the acceleration is constant, which simplifies things considerably.

---

## 2. Kinematic Equations for Constant Acceleration

When acceleration is constant, the relationships between position, velocity, and time become much simpler algebraic equations. This is a highly tested area in exams, so pay close attention!

Let's assume acceleration $a$ is constant.
*   If $a$ is constant, then $v = \frac{dx}{dt}$ and $a = \frac{dv}{dt}$.
*   Integrating $a$ with respect to time gives us $v = at + C_1$. If we know the velocity at time $t=0$ is $v_0$, then $v_0 = a(0) + C_1$, so $C_1 = v_0$.
    $$ v = v_0 + at $$
    This equation tells us the velocity at any time $t$ if we know the initial velocity and the constant acceleration.

*   Now, integrating $v$ with respect to time to find position: $x = \int v \, dt = \int (v_0 + at) \, dt = v_0t + \frac{1}{2}at^2 + C_2$. If we know the position at time $t=0$ is $x_0$, then $x_0 = v_0(0) + \frac{1}{2}a(0)^2 + C_2$, so $C_2 = x_0$.
    $$ x = x_0 + v_0t + \frac{1}{2}at^2 $$
    This equation gives us the position at any time $t$.

*   We can also derive a very useful equation that *eliminates time*:
    From $v = v_0 + at$, we get $t = \frac{v - v_0}{a}$.
    Substitute this into the position equation:
    $x = x_0 + v_0 \left(\frac{v - v_0}{a}\right) + \frac{1}{2}a \left(\frac{v - v_0}{a}\right)^2$
    $x - x_0 = \frac{v_0v - v_0^2}{a} + \frac{1}{2}a \frac{v^2 - 2vv_0 + v_0^2}{a^2}$
    $x - x_0 = \frac{v_0v - v_0^2}{a} + \frac{v^2 - 2vv_0 + v_0^2}{2a}$
    $2a(x - x_0) = 2(v_0v - v_0^2) + (v^2 - 2vv_0 + v_0^2)$
    $2a(x - x_0) = 2v_0v - 2v_0^2 + v^2 - 2vv_0 + v_0^2$
    $2a(x - x_0) = v^2 - v_0^2$
    $$ v^2 = v_0^2 + 2a(x - x_0) $$
    This is a powerful equation when you're interested in the relationship between velocities and displacement without knowing the time.

**Summary of Constant Acceleration Equations:**

Remember these like the back of your hand for exams!

*   $v = v_0 + at$
*   $x = x_0 + v_0t + \frac{1}{2}at^2$
*   $v^2 = v_0^2 + 2a(x - x_0)$

*   **Where:**
    *   $x$: final position
    *   $x_0$: initial position
    *   $v$: final velocity
    *   $v_0$: initial velocity
    *   $a$: constant acceleration
    *   $t$: time elapsed

*   **Exam Tip:** Always identify if acceleration is constant or variable. If it's variable, you *must* use integration. If it's constant, these handy equations are your go-to.

---

### Example: The Freely Falling Object

Think about dropping a ball from a height. Ignoring air resistance, the only force acting on it is gravity, which causes a constant downward acceleration. This is a classic example of rectilinear motion with constant acceleration.

Let's say you drop a stone from the top of a building 100 meters high.
*   Initial position ($x_0$) can be set to 100 m (if the ground is 0 m), or 0 m (if we measure distance fallen). Let's measure distance fallen, so $x_0 = 0$.
*   Initial velocity ($v_0$) = 0 m/s (since it's dropped).
*   Acceleration ($a$) = $g \approx 9.81 \, m/s^2$ (downwards). If we define 'down' as positive, $a = +9.81$.

**Question:** How fast is the stone moving when it hits the ground?

Here, we know $x_0=0$, $v_0=0$, $a=9.81 \, m/s^2$, and the final position $x = 100 \, m$. We want to find the final velocity $v$.
The equation that relates these without time is $v^2 = v_0^2 + 2a(x - x_0)$.

Plugging in the values:
$v^2 = 0^2 + 2(9.81 \, m/s^2)(100 \, m - 0 \, m)$
$v^2 = 1962 \, m^2/s^2$
$v = \sqrt{1962} \approx 44.29 \, m/s$

So, the stone is moving at about 44.29 m/s just before impact.

**Question:** How long does it take to hit the ground?

Now we need time. We can use $x = x_0 + v_0t + \frac{1}{2}at^2$.
$100 \, m = 0 \, m + (0 \, m/s)t + \frac{1}{2}(9.81 \, m/s^2)t^2$
$100 = 4.905 t^2$
$t^2 = \frac{100}{4.905} \approx 20.387$
$t = \sqrt{20.387} \approx 4.515 \, s$

It takes about 4.5 seconds to fall.

---

## 3. Kinematics with Variable Acceleration

What happens when acceleration isn't constant? This is where calculus becomes indispensable. The fundamental definitions $v = \frac{dx}{dt}$ and $a = \frac{dv}{dt}$ are always true. If acceleration is given as a function of time, $a(t)$, or velocity, $v(t)$, or position, $x(t)$, we use integration.

*   **If $a$ is a function of time, $a(t)$:**
    *   $v = v_0 + \int_{0}^{t} a(t') \, dt'$
    *   $x = x_0 + \int_{0}^{t} v(t') \, dt'$

*   **If $a$ is a function of velocity, $a(v)$:**
    *   This is a bit trickier. We can write $a = \frac{dv}{dt}$, so $dt = \frac{dv}{a(v)}$. Integrating from $t=0$ to $t$ and $v_0$ to $v$:
        $$ t = \int_{v_0}^{v} \frac{dv'}{a(v')} $$
    *   We can also write $a = v \frac{dv}{dx}$ (remembering $a = \frac{dv}{dt} = \frac{dv}{dx}\frac{dx}{dt} = v\frac{dv}{dx}$). So, $dx = \frac{v \, dv}{a(v)}$. Integrating from $x_0$ to $x$ and $v_0$ to $v$:
        $$ x - x_0 = \int_{v_0}^{v} \frac{v'}{a(v')} \, dv' $$

*   **If $a$ is a function of position, $a(x)$:**
    *   We use the $a = v \frac{dv}{dx}$ relationship again. $v \, dv = a(x) \, dx$. Integrating from $x_0$ to $x$ and $v_0$ to $v$:
        $$ \int_{v_0}^{v} v' \, dv' = \int_{x_0}^{x} a(x') \, dx' $$
        $$ \frac{1}{2}v^2 - \frac{1}{2}v_0^2 = \int_{x_0}^{x} a(x') \, dx' $$
        $$ v^2 = v_0^2 + 2\int_{x_0}^{x} a(x') \, dx' $$

*   **Textbook Connection:** **Shames** and **Meriam & Kraige** provide excellent detailed examples of integrating these functions, often involving polynomial or exponential relationships for acceleration. It's crucial to practice these integration techniques.

---

### Example: Engine Braking

Imagine a truck with a faulty engine where the deceleration is proportional to its velocity. Let's say $a = -kv$, where $k$ is a positive constant. The truck is moving at an initial velocity $v_0$ on a straight road.

**Question:** How long does it take for the truck to slow down to half its initial velocity?

Here, $a(v) = -kv$. We need to find time $t$ when $v = v_0/2$.
Using $t = \int_{v_0}^{v} \frac{dv'}{a(v')}$:
$t = \int_{v_0}^{v_0/2} \frac{dv'}{-kv'}$
$t = -\frac{1}{k} \int_{v_0}^{v_0/2} \frac{dv'}{v'}$
$t = -\frac{1}{k} [\ln|v'|]_{v_0}^{v_0/2}$
$t = -\frac{1}{k} (\ln(\frac{v_0}{2}) - \ln(v_0))$
$t = -\frac{1}{k} \ln(\frac{v_0/2}{v_0})$
$t = -\frac{1}{k} \ln(\frac{1}{2})$
$t = \frac{1}{k} \ln(2)$

So, it takes $(\ln 2) / k$ time to reach half the initial velocity.

**Question:** How far does the truck travel before its velocity reduces to half?

We need position $x-x_0$. We can use $x - x_0 = \int_{v_0}^{v} \frac{v'}{a(v')} \, dv'$
$x - x_0 = \int_{v_0}^{v_0/2} \frac{v'}{-kv'} \, dv'$
$x - x_0 = \int_{v_0}^{v_0/2} -\frac{1}{k} \, dv'$
$x - x_0 = -\frac{1}{k} [v']_{v_0}^{v_0/2}$
$x - x_0 = -\frac{1}{k} (\frac{v_0}{2} - v_0)$
$x - x_0 = -\frac{1}{k} (-\frac{v_0}{2})$
$x - x_0 = \frac{v_0}{2k}$

The truck travels a distance of $v_0 / (2k)$ before its velocity halves.

---

## 4. Kinetics: Newton's Second Law of Motion

Now we move from *kinematics* (describing motion) to *kinetics* (explaining the cause of motion). This is where forces come into play. The fundamental principle linking force and motion is **Newton's Second Law of Motion**.

*   **Newton's Second Law:** This law states that the net force acting on an object is equal to the product of its mass and its acceleration.
    $$ \sum \vec{F} = m\vec{a} $$
    where:
    *   $\sum \vec{F}$ is the vector sum of all external forces acting on the object.
    *   $m$ is the mass of the object (a scalar, constant quantity representing inertia).
    *   $\vec{a}$ is the acceleration of the object.

*   **Connecting to Rectilinear Motion:** For rectilinear motion along, say, the x-axis, we can write this law in scalar form as:
    $$ \sum F_x = ma_x $$
    This equation is the cornerstone of kinetic analysis in rectilinear motion. It tells us that if there's a net force in a particular direction, the object *will* accelerate in that direction. Conversely, if there's no net force ($\sum F_x = 0$), then the acceleration must also be zero ($a_x = 0$), meaning the object either remains at rest or moves with constant velocity (Newton's First Law).

*   **Course Outcome Connection:** This is a direct application of CO4 (Identify appropriate principles) and CO5 (Understand fundamental principles of rigid body dynamics). We are using a fundamental principle of dynamics – Newton's Second Law – to solve problems. CO1 and CO2 are also implicitly used as we need to identify and sum forces ($\sum F_x$) acting on the body.

*   **Textbook Connection:** **Hibbeler**, **Timoshenko & Young**, and **Shames** all dedicate significant portions to explaining and applying Newton's Second Law. They emphasize drawing Free Body Diagrams (FBDs) to correctly identify $\sum F_x$.

---

### The Process of Kinetic Analysis (using Newton's Second Law)

To solve problems using kinetics, we typically follow these steps:

1.  **Identify the Object of Interest:** What body or particle are we analyzing?
2.  **Draw a Free-Body Diagram (FBD):** This is CRITICAL. Isolate the object and draw all the external forces acting on it. For rectilinear motion along the x-axis, resolve all forces into their x-components. This step directly relates to CO2.
3.  **Draw a Kinetic Diagram (optional but helpful):** This diagram represents the $m\vec{a}$ term. For rectilinear motion along the x-axis, it would be a vector $ma_x$ acting along the x-axis.
4.  **Apply Newton's Second Law:** Sum the forces in the direction of motion (usually the x-direction): $\sum F_x = ma_x$.
5.  **Relate $a_x$ to position or velocity using Kinematics:** This is where the kinematics equations we discussed earlier come in.
    *   If $a_x$ is constant, use the constant acceleration formulas.
    *   If $a_x$ is variable (a function of $t$, $v$, or $x$), use integration based on the definitions $a_x = dv_x/dt$ or $a_x = v_x dv_x/dx$.
6.  **Solve the resulting equations:** You'll likely have a system of equations from step 4 and step 5 that you need to solve for the unknown(s).

---

### Example: Block on a Horizontal Surface with Applied Force

Consider a 10 kg block on a smooth horizontal surface. A horizontal force of 20 N is applied to it. What is the acceleration of the block?

1.  **Object:** The 10 kg block.
2.  **FBD:**
    *   Weight ($W = mg$) acting downwards.
    *   Normal force ($N$) from the surface acting upwards.
    *   Applied force ($F_{app} = 20 \, N$) acting horizontally.
    *   Friction force ($F_f$). Since the surface is smooth, we assume $F_f = 0$.
    *   Let's align our x-axis with the direction of the applied force.

3.  **Kinetic Diagram:** A vector $ma_x$ pointing in the direction of acceleration (same as applied force).

4.  **Newton's Second Law (along x-axis):**
    $\sum F_x = ma_x$
    $F_{app} - F_f = ma_x$
    Since $F_f = 0$:
    $20 \, N = (10 \, kg) a_x$

5.  **Solve for $a_x$:**
    $a_x = \frac{20 \, N}{10 \, kg} = 2 \, m/s^2$

The acceleration of the block is $2 \, m/s^2$ in the direction of the applied force.

**What if there's friction?**

Let's say the surface has a coefficient of kinetic friction $\mu_k = 0.2$.
First, we need to find the normal force $N$. From the FBD, summing forces in the y-direction (vertical):
$\sum F_y = 0$ (since there's no vertical acceleration)
$N - W = 0$
$N = W = mg = (10 \, kg)(9.81 \, m/s^2) = 98.1 \, N$

Now, the kinetic friction force is $F_f = \mu_k N = (0.2)(98.1 \, N) = 19.62 \, N$.

Applying Newton's Second Law again along the x-axis:
$\sum F_x = ma_x$
$F_{app} - F_f = ma_x$
$20 \, N - 19.62 \, N = (10 \, kg) a_x$
$0.38 \, N = (10 \, kg) a_x$
$a_x = \frac{0.38 \, N}{10 \, kg} = 0.038 \, m/s^2$

Notice how the acceleration is much smaller when friction is present. This highlights the importance of correctly identifying all forces (CO2) and using the right principles (CO4).

---

### Example: Elevator and Passenger

Imagine a 70 kg person standing on a scale in an elevator. The elevator is moving upwards and its speed is increasing at $2 \, m/s^2$.

1.  **Object:** The person (or the scale reading which represents the normal force on the person). Let's focus on the person.
2.  **FBD for the person:**
    *   Weight ($W = mg$) acting downwards. $W = 70 \, kg \times 9.81 \, m/s^2 = 686.7 \, N$.
    *   Normal force ($N$) from the scale acting upwards. This is what the scale reads.
    *   Let's define the upward direction as positive.

3.  **Kinetic Diagram:** $ma$ pointing upwards, with $a = +2 \, m/s^2$.

4.  **Newton's Second Law (along vertical x-axis):**
    $\sum F_x = ma_x$
    $N - W = ma$
    $N - 686.7 \, N = (70 \, kg)(2 \, m/s^2)$
    $N - 686.7 \, N = 140 \, N$
    $N = 686.7 \, N + 140 \, N = 826.7 \, N$

The scale would read 826.7 N. This is more than the person's weight (686.7 N). Why? Because the elevator is accelerating upwards, and the scale has to push harder on the person to provide that upward acceleration.

**What if the elevator is moving upwards but decelerating at $2 \, m/s^2$?**

In this case, the acceleration is still upwards in terms of the *system's change in velocity*, but the *velocity itself* is upwards and decreasing.
*   Velocity is upwards (positive).
*   Acceleration is downwards (negative). So, $a = -2 \, m/s^2$.

Let's re-apply Newton's Second Law:
$N - W = ma$
$N - 686.7 \, N = (70 \, kg)(-2 \, m/s^2)$
$N - 686.7 \, N = -140 \, N$
$N = 686.7 \, N - 140 \, N = 546.7 \, N$

The scale reads 546.7 N, which is less than the person's weight. This makes sense because the elevator is slowing down while moving up, meaning the net force must be downwards, so the scale pushes less.

**Exam Tip:** Always clearly define your positive direction when applying Newton's Second Law. For elevators, consider the direction of acceleration relative to the velocity.

---

## 5. Work-Energy Principle for Rectilinear Motion

While Newton's Second Law is powerful, sometimes it's more convenient to analyze motion using the **Work-Energy Principle**. This principle relates the *work done* by forces to the change in the object's *kinetic energy*. It's particularly useful when time is not given or is not of interest.

*   **Kinetic Energy ($T$):** The energy a body possesses due to its motion. For a particle of mass $m$ moving with velocity $v$:
    $$ T = \frac{1}{2}mv^2 $$

*   **Work ($U$):** Work done by a force $\vec{F}$ moving an object through a displacement $d\vec{r}$ is given by $dU = \vec{F} \cdot d\vec{r}$. For rectilinear motion along the x-axis, this simplifies to $dU = F_x \, dx$. The total work done by a force from position $x_1$ to $x_2$ is:
    $$ U = \int_{x_1}^{x_2} F_x \, dx $$

*   **Work-Energy Principle:** The net work done by all external forces acting on a particle as it moves from an initial position to a final position is equal to the change in the particle's kinetic energy:
    $$ U_{net} = \Delta T = T_2 - T_1 $$
    $$ \int_{x_1}^{x_2} (\sum F_x) \, dx = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2 $$

*   **Connection to Newton's Second Law:** Notice that $\sum F_x = ma_x = m\frac{dv}{dt}$. Also, $a_x = v\frac{dv}{dx}$. So, $\sum F_x = mv\frac{dv}{dx}$.
    If we integrate $\sum F_x \, dx$ from $x_1$ to $x_2$:
    $\int_{x_1}^{x_2} (\sum F_x) \, dx = \int_{x_1}^{x_2} mv\frac{dv}{dx} \, dx = \int_{v_1}^{v_2} mv \, dv = [\frac{1}{2}mv^2]_{v_1}^{v_2} = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2$.
    This shows that the Work-Energy principle is a direct consequence of Newton's Second Law.

*   **Textbook Connection:** **Chandramouli** and **Hibbeler** provide excellent examples of using the Work-Energy theorem. It's presented as an alternative to directly solving differential equations of motion.

---

### Example: Car Accelerating

A car of mass 1200 kg starts from rest ($v_1=0$) and accelerates along a straight road. The engine provides a constant driving force of 3000 N, and there's a constant resistance force (air resistance, friction) of 600 N.

**Question:** What is the speed of the car after it has traveled 100 meters?

1.  **Identify forces:**
    *   Driving force $F_{drive} = +3000 \, N$ (in direction of motion).
    *   Resistance force $F_{res} = -600 \, N$ (opposite to motion).
    *   Weight and Normal force. They act vertically and do no work in horizontal motion.

2.  **Calculate Net Force:**
    $\sum F_x = F_{drive} + F_{res} = 3000 \, N - 600 \, N = 2400 \, N$.
    Since this is a constant force, the net work done will be $U_{net} = (\sum F_x) \times \Delta x$.

3.  **Apply Work-Energy Principle:**
    $U_{net} = \Delta T$
    $(\sum F_x) \Delta x = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2$
    $(2400 \, N)(100 \, m) = \frac{1}{2}(1200 \, kg)v_2^2 - \frac{1}{2}(1200 \, kg)(0 \, m/s)^2$
    $240000 \, J = (600 \, kg)v_2^2$
    $v_2^2 = \frac{240000 \, J}{600 \, kg} = 400 \, m^2/s^2$
    $v_2 = \sqrt{400} = 20 \, m/s$

The speed of the car after 100 meters is 20 m/s.

Notice that if we used Newton's Second Law, we'd first find $a_x = (\sum F_x) / m = 2400 \, N / 1200 \, kg = 2 \, m/s^2$. Then use $v_2^2 = v_1^2 + 2a_x \Delta x$.
$v_2^2 = 0^2 + 2(2 \, m/s^2)(100 \, m) = 400 \, m^2/s^2$, which gives $v_2 = 20 \, m/s$. Both methods yield the same result when the force is constant, but the Work-Energy approach directly links displacement to velocity change without explicitly finding acceleration first.

---

## 6. Impulse and Momentum for Rectilinear Motion

The final powerful tool we have for analyzing rectilinear motion, especially when dealing with impacts or sudden changes in velocity, is the **Impulse-Momentum Principle**. This principle is derived from Newton's Second Law by integrating it with respect to time.

*   **Linear Momentum ($\vec{p}$):** For a particle of mass $m$ moving with velocity $\vec{v}$, linear momentum is defined as:
    $$ \vec{p} = m\vec{v} $$
    Momentum is a vector quantity.

*   **Impulse ($\vec{I}$):** Impulse is the integral of force over a time interval. It represents the "effect" of a force over time.
    $$ \vec{I} = \int_{t_1}^{t_2} \sum \vec{F} \, dt $$
    For rectilinear motion along the x-axis: $I_x = \int_{t_1}^{t_2} \sum F_x \, dt$.

*   **Impulse-Momentum Principle:** The impulse of the net force acting on a particle is equal to the change in its linear momentum:
    $$ \int_{t_1}^{t_2} \sum \vec{F} \, dt = \Delta \vec{p} = \vec{p}_2 - \vec{p}_1 $$
    $$ \int_{t_1}^{t_2} \sum F_x \, dt = m\vec{v}_2 - m\vec{v}_1 $$

*   **Connection to Newton's Second Law:** Start with $\sum F_x = ma_x = m \frac{dv_x}{dt}$. Rearrange: $\sum F_x \, dt = m \, dv_x$. Integrate both sides from $t_1$ to $t_2$:
    $\int_{t_1}^{t_2} \sum F_x \, dt = \int_{v_1}^{v_2} m \, dv_x = m[v_x]_{v_1}^{v_2} = m(v_2 - v_1)$.
    This confirms that the Impulse-Momentum principle is a direct time-based integration of Newton's Second Law.

*   **When is this useful?** This principle is particularly powerful for analyzing situations involving collisions or impacts, where forces might be very large but act over very short time intervals. The impulse of these forces can be calculated, and it directly relates to the change in momentum. Also useful when force is a function of time $F(t)$.

*   **Textbook Connection:** **Timoshenko & Young** and **Hibbeler** both provide clear derivations and examples, often focusing on impact problems and the concept of conservation of momentum when impulse is zero.

---

### Example: Collision of Two Cars

Imagine two cars colliding head-on on a straight road.
Car A (mass $m_A = 1000 \, kg$) is moving at $v_{A1} = 15 \, m/s$ to the right.
Car B (mass $m_B = 1500 \, kg$) is moving at $v_{B1} = 10 \, m/s$ to the left.
After the collision, Car A moves at $v_{A2} = -5 \, m/s$ (to the left).
What is the velocity of Car B after the collision, $v_{B2}$?

Assume no external forces act on the system during the very short collision time (i.e., the impulse from external forces is negligible compared to the impulse of the collision forces).

1.  **Define System and Direction:** The system is Car A + Car B. Let the right direction be positive.
2.  **Initial Momenta:**
    $p_{A1} = m_A v_{A1} = (1000 \, kg)(15 \, m/s) = 15000 \, kg \cdot m/s$
    $p_{B1} = m_B v_{B1} = (1500 \, kg)(-10 \, m/s) = -15000 \, kg \cdot m/s$
    Total initial momentum $P_1 = p_{A1} + p_{B1} = 15000 - 15000 = 0 \, kg \cdot m/s$.

3.  **Final Momenta:**
    $p_{A2} = m_A v_{A2} = (1000 \, kg)(-5 \, m/s) = -5000 \, kg \cdot m/s$
    $p_{B2} = m_B v_{B2} = (1500 \, kg)v_{B2}$
    Total final momentum $P_2 = p_{A2} + p_{B2} = -5000 + 1500 v_{B2}$.

4.  **Apply Conservation of Linear Momentum:** Since the net external impulse is zero, the total momentum is conserved:
    $P_1 = P_2$
    $0 = -5000 + 1500 v_{B2}$
    $1500 v_{B2} = 5000$
    $v_{B2} = \frac{5000}{1500} = \frac{50}{15} = \frac{10}{3} \approx 3.33 \, m/s$

So, Car B moves at approximately $3.33 \, m/s$ to the right after the collision.

**Exam Tip:** When dealing with collisions, always check if momentum conservation is applicable (i.e., if external impulses are negligible). This can often be a much faster way to solve problems than using Newton's Second Law and integrating forces.

---

## Conclusion and Key Takeaways

Throughout this module on Rectilinear Translation, we've explored the fundamental relationships between position, velocity, and acceleration (kinematics) and then linked these to the forces causing the motion (kinetics).

**Key Concepts to Remember:**

*   **Kinematics:** Describes motion.
    *   Position ($x$), Velocity ($v = dx/dt$), Acceleration ($a = dv/dt = d^2x/dt^2$).
    *   For constant acceleration, use the three kinematic equations: $v = v_0 + at$, $x = x_0 + v_0t + \frac{1}{2}at^2$, $v^2 = v_0^2 + 2a(x - x_0)$.
    *   For variable acceleration, integration is required.
*   **Kinetics:** Explains motion.
    *   Newton's Second Law: $\sum F_x = ma_x$. This is your primary tool for relating forces to acceleration.
    *   **Always draw Free Body Diagrams (FBDs)!** This is essential for correctly identifying $\sum F_x$.
*   **Work-Energy Principle:** Relates work done to change in kinetic energy. Useful when time is not a factor. $U_{net} = \Delta T$.
*   **Impulse-Momentum Principle:** Relates impulse (force over time) to change in momentum. Useful for impacts and when force is a function of time. $\int \sum F \, dt = \Delta p$.

**Connecting to Course Outcomes:**

*   **CO1 & CO2:** Force identification and vector representation are critical for applying Newton's Second Law.
*   **CO3:** While equilibrium is for static cases, understanding force balance is foundational for dynamics.
*   **CO4:** You've learned to identify and apply Newton's Second Law, Work-Energy, and Impulse-Momentum principles, depending on the problem.
*   **CO5:** These are the fundamental principles of dynamics for motion in a straight line.

Mastering these concepts will provide a solid foundation for more advanced dynamics topics like curvilinear motion and rigid body dynamics. Keep practicing with the textbook problems – that's where true understanding solidifies!

---

## Sample Questions and Answers

Here are a few questions to test your understanding, covering both conceptual and problem-solving aspects.

**Question 1 (Conceptual):**
A car is moving at a constant velocity. What is the net force acting on the car? Explain using Newton's Second Law.
**Answer:** If the car is moving at a constant velocity, its acceleration ($a$) is zero. According to Newton's Second Law, $\sum F = ma$. Since $m$ is non-zero and $a=0$, the net force ($\sum F$) acting on the car must be zero. This means all forces acting on the car are balanced.

**Question 2 (Constant Acceleration Kinematics):**
A ball is thrown vertically upwards with an initial velocity of 20 m/s. Neglecting air resistance, what is the maximum height it reaches and how long does it take to reach that height? (Use $g = 9.81 \, m/s^2$)
**Answer:**
We take the upward direction as positive.
Initial velocity, $v_0 = +20 \, m/s$.
Acceleration, $a = -g = -9.81 \, m/s^2$.
At the maximum height, the velocity ($v$) is momentarily zero.

*   **Time to reach maximum height:**
    Using $v = v_0 + at$:
    $0 = 20 + (-9.81)t$
    $9.81t = 20$
    $t = \frac{20}{9.81} \approx 2.04 \, s$

*   **Maximum height:**
    Using $v^2 = v_0^2 + 2a(x - x_0)$: Let $x_0 = 0$.
    $0^2 = (20)^2 + 2(-9.81)(x_{max} - 0)$
    $0 = 400 - 19.62 x_{max}$
    $19.62 x_{max} = 400$
    $x_{max} = \frac{400}{19.62} \approx 20.39 \, m$

The maximum height reached is approximately 20.39 meters, and it takes about 2.04 seconds to reach it.

**Question 3 (Newton's Second Law - Variable Acceleration):**
A particle's motion along the x-axis is described by $x(t) = 3t^3 - 2t^2 + 5t - 1$. Find the force acting on the particle at $t=2$ seconds, assuming the particle has a mass of 5 kg.
**Answer:**
First, find velocity $v(t)$ by differentiating $x(t)$:
$v(t) = \frac{dx}{dt} = \frac{d}{dt}(3t^3 - 2t^2 + 5t - 1) = 9t^2 - 4t + 5$.
Next, find acceleration $a(t)$ by differentiating $v(t)$:
$a(t) = \frac{dv}{dt} = \frac{d}{dt}(9t^2 - 4t + 5) = 18t - 4$.

Now, evaluate acceleration at $t=2$ s:
$a(2) = 18(2) - 4 = 36 - 4 = 32 \, m/s^2$.

Using Newton's Second Law, $F_x = ma_x$:
$F_x = (5 \, kg)(32 \, m/s^2) = 160 \, N$.
The force acting on the particle at $t=2$ s is 160 N.

**Question 4 (Work-Energy Principle):**
A 2 kg block is at rest on a frictionless horizontal surface. A force $F(x) = (2x+1)$ N is applied to the block, pushing it from $x=0$ to $x=3$ m. What is the speed of the block at $x=3$ m?
**Answer:**
Mass, $m = 2 \, kg$.
Initial velocity, $v_1 = 0 \, m/s$ (at rest).
Applied force, $F(x) = 2x+1$ N.
The motion is from $x_1=0$ to $x_2=3$ m.

Using the Work-Energy Principle: $U_{net} = \Delta T$
$U_{net} = \int_{x_1}^{x_2} F(x) \, dx = \int_{0}^{3} (2x+1) \, dx$
$U_{net} = [\frac{2x^2}{2} + x]_{0}^{3} = [x^2 + x]_{0}^{3}$
$U_{net} = (3^2 + 3) - (0^2 + 0) = (9+3) - 0 = 12 \, J$.

$\Delta T = T_2 - T_1 = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2$
$\Delta T = \frac{1}{2}(2 \, kg)v_2^2 - \frac{1}{2}(2 \, kg)(0 \, m/s)^2 = v_2^2$.

Equating $U_{net} = \Delta T$:
$12 \, J = v_2^2$
$v_2 = \sqrt{12} \approx 3.46 \, m/s$.

The speed of the block at $x=3$ m is approximately $3.46 \, m/s$.

**Question 5 (Impulse-Momentum):**
A 50 g bullet is fired horizontally into a stationary 5 kg block of wood. The bullet embeds itself in the block, and the block swings upwards to a maximum height of 0.5 m. Find the velocity of the bullet just before it hits the block. (Use $g=9.81 \, m/s^2$)
**Answer:**
This problem involves two stages: the impact (using Impulse-Momentum) and the subsequent swing (using Work-Energy).

**Stage 1: Impact (Impulse-Momentum)**
Let bullet velocity be $v_b$ and block velocity after impact be $v_{block}$.
Mass of bullet $m_b = 0.05 \, kg$.
Mass of block $m_w = 5 \, kg$.
Initial velocity of block $v_{w1} = 0$.
Since the bullet embeds, the system is conserved (no external impulse during impact).
Total initial momentum = $m_b v_b + m_w v_{w1} = 0.05 v_b + 5(0) = 0.05 v_b$.
After impact, the bullet and block move together with velocity $v_{block}$.
Total final momentum = $(m_b + m_w) v_{block} = (0.05 + 5) v_{block} = 5.05 v_{block}$.
By conservation of momentum: $0.05 v_b = 5.05 v_{block}$.
$v_b = \frac{5.05}{0.05} v_{block} = 101 v_{block}$.

**Stage 2: Swing (Work-Energy)**
The combined mass $(m_b + m_w) = 5.05 \, kg$ starts with velocity $v_{block}$ and swings up to a height $h = 0.5 \, m$. At the maximum height, its velocity is 0.
Using work-energy for the swing: $\Delta T = U_g$ (change in kinetic energy equals change in potential energy).
$0 - \frac{1}{2}(5.05)v_{block}^2 = -mg h$ (where $m=5.05$ kg)
$\frac{1}{2}(5.05)v_{block}^2 = (5.05)(9.81)(0.5)$
$\frac{1}{2}v_{block}^2 = (9.81)(0.5) = 4.905$
$v_{block}^2 = 2 \times 4.905 = 9.81$
$v_{block} = \sqrt{9.81} \approx 3.13 \, m/s$.

Now substitute $v_{block}$ back into the momentum equation:
$v_b = 101 v_{block} = 101 \times 3.13 \approx 316.13 \, m/s$.

The velocity of the bullet just before impact was approximately $316.13 \, m/s$.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
