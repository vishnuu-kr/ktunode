---
title: "Curvilinear translation - equations of kinematics projectile motion (solution starting from differential equations)"
subject: "ENGINEERING MECHANICS"
module: "Module 4: Curvilinear translation "
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1eddfeb4799d95e833f1"
status: "completed"
scrapedAt: "2026-05-20T17:37:35.793Z"
---
## Engineering Mechanics: Module 4 - Curvilinear Translation

### Topic: Projectile Motion - Kinematic Equations from Differential Equations

Welcome, everyone! Today, we're diving into a fascinating area of Engineering Mechanics: **Curvilinear Translation**, specifically focusing on **Projectile Motion**. We'll be building our understanding from the very foundation, starting with the differential equations that govern this type of motion. This will not only give us a deep conceptual grasp but also equip us to tackle those often-tricky exam problems. Think about that moment a baseball leaves the bat, or a cannonball fired from a fort – that’s projectile motion! It's a classic example of an object moving along a curved path, and understanding it is crucial for many engineering applications, from designing ballistics systems to analyzing the flight of drones.

This topic directly connects to our **Course Outcome 5: Develop the understanding of fundamental principles of rigid body dynamics**. By understanding projectile motion, we're essentially looking at the dynamics of a point mass (or a rigid body treated as a point mass) under the influence of gravity. It also helps us with **Course Outcome 4: Identify appropriate principles to solve problems of mechanics**, as we’ll learn to break down complex motion into simpler components.

#### 1. The Foundation: Newton's Second Law and Differential Equations

Remember Newton's Second Law of Motion? It's the bedrock of dynamics: **F = ma**. For an object undergoing curvilinear motion, this law holds true in its vector form: **$\vec{F} = m\vec{a}$**.

Now, what is acceleration ($\vec{a}$)? It's the rate of change of velocity ($\vec{v}$), and velocity is the rate of change of position ($\vec{r}$). So, we can express acceleration as:

$\vec{a} = \frac{d\vec{v}}{dt} = \frac{d^2\vec{r}}{dt^2}$

Substituting this into Newton's Second Law, we get our fundamental differential equation for motion:

$\vec{F} = m \frac{d^2\vec{r}}{dt^2}$

This is where we begin. This single vector equation encapsulates *all* the forces acting on the object and how they dictate its motion.

**For projectile motion**, what are the primary forces we consider? Typically, it's just **gravity**. Air resistance, while significant in real-world scenarios (think of a feather vs. a stone), is often **neglected in introductory engineering mechanics** to simplify the problem and focus on the core principles. So, the gravitational force is $\vec{F}_g = m\vec{g}$.

Let's set up a coordinate system. A Cartesian (x-y) system is most convenient here. We'll consider the horizontal (x) direction and the vertical (y) direction.

*   The acceleration due to gravity ($\vec{g}$) acts downwards. If we define our positive y-axis as upwards, then the acceleration in the y-direction is $a_y = -g$.
*   In the absence of air resistance, there are no horizontal forces acting on the projectile. Therefore, the acceleration in the x-direction is $a_x = 0$.

So, our vector equation $\vec{F} = m\vec{a}$ breaks down into component differential equations:

*   **In the x-direction:** $m a_x = 0 \implies m \frac{d^2x}{dt^2} = 0 \implies \frac{d^2x}{dt^2} = 0$
*   **In the y-direction:** $m a_y = -mg \implies m \frac{d^2y}{dt^2} = -mg \implies \frac{d^2y}{dt^2} = -g$

These two simple second-order ordinary differential equations are the starting point for all projectile motion analysis. They tell us that the horizontal motion is one of constant velocity (since acceleration is zero), and the vertical motion is one of constant deceleration (due to gravity).

**Remember this:** The key insight here is the **independence of horizontal and vertical motion**. Gravity only affects the vertical component; it doesn't speed up or slow down the horizontal movement. This is a concept that often helps students visualize the problem. Imagine throwing a ball horizontally – it will travel a certain distance forward while simultaneously dropping towards the ground. The forward speed doesn't change, but the downward speed increases steadily. This is a direct consequence of $\frac{d^2x}{dt^2} = 0$ and $\frac{d^2y}{dt^2} = -g$.

#### 2. Solving the Differential Equations: Kinematic Equations

Now, let's integrate these differential equations to find the equations of motion, i.e., how position, velocity, and time are related. This is where we develop the kinematic equations for projectile motion.

##### 2.1 Horizontal Motion (x-direction)

We have:
$\frac{d^2x}{dt^2} = 0$

**First Integration (to find velocity $v_x$):**
Integrate both sides with respect to time $t$:
$\int \frac{d^2x}{dt^2} dt = \int 0 \, dt$
$\frac{dx}{dt} = v_x(t) = C_1$

Here, $C_1$ is the constant of integration. What does this constant represent? It's the initial horizontal velocity at time $t=0$. Let's call it $v_{0x}$. So, $C_1 = v_{0x}$.

Thus, the horizontal velocity is constant:
$v_x(t) = v_{0x}$

**Second Integration (to find position $x$):**
Integrate $v_x(t)$ with respect to time $t$:
$\int v_x(t) dt = \int v_{0x} dt$
$x(t) = v_{0x} t + C_2$

$C_2$ is another constant of integration. At $t=0$, the position is $x_0$. So, $x(0) = v_{0x}(0) + C_2 \implies C_2 = x_0$.
If we assume the projectile starts at the origin $(0,0)$ at $t=0$, then $x_0 = 0$.

Therefore, the equation for horizontal position is:
$x(t) = x_0 + v_{0x} t$

If we start from the origin, $x(t) = v_{0x} t$.

These equations are crucial and align with **Course Outcome 4: Identify appropriate principles to solve problems of mechanics**. We've used calculus and Newton's laws to derive these fundamental relationships.

##### 2.2 Vertical Motion (y-direction)

We have:
$\frac{d^2y}{dt^2} = -g$

**First Integration (to find velocity $v_y$):**
Integrate both sides with respect to time $t$:
$\int \frac{d^2y}{dt^2} dt = \int (-g) dt$
$\frac{dy}{dt} = v_y(t) = -gt + C_3$

$C_3$ is the constant of integration. At $t=0$, the initial vertical velocity is $v_{0y}$. So, $v_y(0) = -g(0) + C_3 \implies C_3 = v_{0y}$.

Thus, the vertical velocity at any time $t$ is:
$v_y(t) = v_{0y} - gt$

Notice how the vertical velocity changes linearly with time, decreasing as gravity pulls the object down.

**Second Integration (to find position $y$):**
Integrate $v_y(t)$ with respect to time $t$:
$\int v_y(t) dt = \int (v_{0y} - gt) dt$
$y(t) = v_{0y} t - \frac{1}{2}gt^2 + C_4$

$C_4$ is another constant of integration. At $t=0$, the initial vertical position is $y_0$. So, $y(0) = v_{0y}(0) - \frac{1}{2}g(0)^2 + C_4 \implies C_4 = y_0$.

Therefore, the equation for vertical position is:
$y(t) = y_0 + v_{0y} t - \frac{1}{2}gt^2$

If we assume the projectile starts from the origin $(0,0)$ at $t=0$, then $y_0 = 0$, giving:
$y(t) = v_{0y} t - \frac{1}{2}gt^2$

These equations are incredibly powerful. They allow us to predict the position and velocity of a projectile at any given time, provided we know its initial conditions. This is directly applicable to **Course Outcome 4** and builds towards **Course Outcome 5**.

#### 3. Relating the Equations: The Trajectory Equation (y as a function of x)

Often, we're interested in the path the projectile takes – its trajectory. We can find this by eliminating time ($t$) from our position equations.

From the horizontal position equation, assuming $x_0=0$:
$x = v_{0x} t \implies t = \frac{x}{v_{0x}}$

Now, substitute this expression for $t$ into the vertical position equation, assuming $y_0=0$:
$y = v_{0y} \left(\frac{x}{v_{0x}}\right) - \frac{1}{2}g \left(\frac{x}{v_{0x}}\right)^2$

This simplifies to:
$y = \frac{v_{0y}}{v_{0x}} x - \frac{g}{2v_{0x}^2} x^2$

We can express $\frac{v_{0y}}{v_{0x}}$ using the initial launch angle, $\theta$.
$v_{0x} = v_0 \cos\theta$
$v_{0y} = v_0 \sin\theta$

So, $\frac{v_{0y}}{v_{0x}} = \frac{v_0 \sin\theta}{v_0 \cos\theta} = \tan\theta$.

Substituting this back into the trajectory equation:
$y = (\tan\theta) x - \frac{g}{2(v_0 \cos\theta)^2} x^2$

This equation describes a **parabola**, which is the characteristic shape of a projectile's path (ignoring air resistance). This is a key takeaway and something that often comes up in exams. The form $y = Ax - Bx^2$ is the standard equation of a parabola opening downwards. This links our understanding to **Course Outcome 4** by showing how derived equations describe a physical phenomenon.

#### 4. Key Parameters of Projectile Motion

Based on these kinematic equations, we can derive several important parameters:

*   **Time of Flight (T):** This is the total time the projectile spends in the air. It's usually defined as the time until the projectile returns to its initial height ($y=y_0$).
    Setting $y = y_0$ in $y(t) = y_0 + v_{0y} t - \frac{1}{2}gt^2$:
    $y_0 = y_0 + v_{0y} t - \frac{1}{2}gt^2$
    $0 = v_{0y} t - \frac{1}{2}gt^2$
    $t \left( v_{0y} - \frac{1}{2}gt \right) = 0$

    This gives two solutions: $t=0$ (the start) and $v_{0y} - \frac{1}{2}gT = 0$.
    From the second solution, we get the time of flight:
    $T = \frac{2v_{0y}}{g}$

    If the projectile lands at a *different* height, you'd set $y = y_{final}$ and solve the quadratic equation for $t$.

*   **Maximum Height ($h_{max}$):** This occurs when the vertical velocity $v_y$ becomes zero.
    Using $v_y(t) = v_{0y} - gt$, set $v_y = 0$:
    $0 = v_{0y} - gt_{peak}$
    $t_{peak} = \frac{v_{0y}}{g}$ (Note: this is half the total time of flight, which makes sense if the landing height is the same as the launch height).

    Now, substitute $t_{peak}$ into the vertical position equation $y(t) = y_0 + v_{0y} t - \frac{1}{2}gt^2$:
    $h_{max} = y_0 + v_{0y} \left(\frac{v_{0y}}{g}\right) - \frac{1}{2}g \left(\frac{v_{0y}}{g}\right)^2$
    $h_{max} = y_0 + \frac{v_{0y}^2}{g} - \frac{1}{2}\frac{v_{0y}^2}{g}$
    $h_{max} = y_0 + \frac{v_{0y}^2}{2g}$

    If starting from $y_0=0$, $h_{max} = \frac{v_{0y}^2}{2g}$.

*   **Range (R):** This is the total horizontal distance traveled by the projectile. It's the horizontal position at the time of flight $T$.
    Using $x(t) = x_0 + v_{0x} t$, and assuming $x_0=0$:
    $R = v_{0x} T$
    $R = v_{0x} \left(\frac{2v_{0y}}{g}\right)$

    If the projectile is launched from the origin $(0,0)$ and lands at the same height ($y=0$), we have:
    $v_{0x} = v_0 \cos\theta$ and $v_{0y} = v_0 \sin\theta$.
    $R = (v_0 \cos\theta) \left(\frac{2 v_0 \sin\theta}{g}\right)$
    $R = \frac{v_0^2 (2 \sin\theta \cos\theta)}{g}$
    Using the trigonometric identity $2 \sin\theta \cos\theta = \sin(2\theta)$:
    $R = \frac{v_0^2 \sin(2\theta)}{g}$

    This formula is very useful for finding the range for a given launch speed and angle, and it's a common exam question. It highlights that the maximum range for a fixed speed $v_0$ is achieved when $\sin(2\theta) = 1$, which means $2\theta = 90^\circ$, or $\theta = 45^\circ$. This is a classic result.

These derivations show how we move from differential equations to practical, usable formulas, reinforcing **Course Outcome 4**. The concepts of maximum height, time of flight, and range are fundamental for analyzing any projectile motion problem and directly tie into **Course Outcome 5**.

#### 5. Example: A Baseball Pitch

Let's consider a real-world scenario. Imagine a baseball pitcher throws a fastball. The ball leaves the pitcher's hand with an initial speed of $v_0 = 40$ m/s at a slight downward angle, say $\theta = -5^\circ$ (meaning $5^\circ$ below the horizontal). Let's assume the ball is released from a height of $y_0 = 2$ meters above the ground (which we'll set as $y=0$).

We want to find:
a) The velocity components at $t=0$.
b) The time it takes for the ball to reach the ground.
c) The horizontal distance the ball travels before hitting the ground (the range).
d) The maximum height the ball reaches relative to the ground.

**Given:**
$v_0 = 40$ m/s
$\theta = -5^\circ$
$y_0 = 2$ m
$g = 9.81$ m/s$^2$

**Solution:**

**a) Initial velocity components:**
First, convert the angle to radians or ensure your calculator is in degree mode.
$v_{0x} = v_0 \cos\theta = 40 \cos(-5^\circ) = 40 \times 0.9962 = 39.85$ m/s
$v_{0y} = v_0 \sin\theta = 40 \sin(-5^\circ) = 40 \times (-0.0872) = -3.49$ m/s

So, $v_{0x} \approx 39.85$ m/s (horizontally) and $v_{0y} \approx -3.49$ m/s (downwards, as expected).

**b) Time to reach the ground:**
We use the vertical position equation: $y(t) = y_0 + v_{0y} t - \frac{1}{2}gt^2$.
We want to find $t$ when $y(t) = 0$.
$0 = 2 + (-3.49) t - \frac{1}{2}(9.81) t^2$
$0 = 2 - 3.49t - 4.905t^2$

Rearrange into standard quadratic form $at^2 + bt + c = 0$:
$4.905t^2 + 3.49t - 2 = 0$

Using the quadratic formula $t = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
$t = \frac{-3.49 \pm \sqrt{(3.49)^2 - 4(4.905)(-2)}}{2(4.905)}$
$t = \frac{-3.49 \pm \sqrt{12.18 + 39.24}}{9.81}$
$t = \frac{-3.49 \pm \sqrt{51.42}}{9.81}$
$t = \frac{-3.49 \pm 7.17}{9.81}$

We get two possible values for $t$:
$t_1 = \frac{-3.49 + 7.17}{9.81} = \frac{3.68}{9.81} \approx 0.375$ seconds
$t_2 = \frac{-3.49 - 7.17}{9.81} = \frac{-10.66}{9.81} \approx -1.09$ seconds

Time cannot be negative, so the time of flight is approximately $t \approx 0.375$ seconds.

**c) Horizontal distance (Range):**
We use the horizontal position equation: $x(t) = x_0 + v_{0x} t$. Assuming $x_0=0$.
$R = v_{0x} t = 39.85 \times 0.375$
$R \approx 14.94$ meters.

So, the ball travels about 15 meters horizontally before hitting the ground.

**d) Maximum height:**
First, find the time to reach maximum height: $t_{peak} = \frac{v_{0y}}{g}$.
$t_{peak} = \frac{-3.49}{9.81} \approx -0.356$ seconds.

Wait, this gives a negative time for the peak! What does this mean? It means that for this specific trajectory, the ball *never actually reaches a peak height above its release point*. Because it was thrown downwards, its highest point was at the moment of release. The vertical velocity $v_y(t) = -3.49 - 9.81t$ is always negative for $t \ge 0$.

So, the maximum height the ball reaches *relative to the ground* is simply its initial release height:
$h_{max, ground} = y_0 = 2$ meters.

If the ball had been thrown upwards, we would have calculated the peak height using $h_{max} = y_0 + \frac{v_{0y}^2}{2g}$. For example, if it was thrown at $+5^\circ$ upwards with the same speed:
$v_{0y} = 40 \sin(5^\circ) = 3.49$ m/s.
$t_{peak} = \frac{3.49}{9.81} \approx 0.356$ s.
$h_{max} = 2 + \frac{(3.49)^2}{2 \times 9.81} = 2 + \frac{12.18}{19.62} \approx 2 + 0.62 = 2.62$ meters.
This shows how the initial vertical velocity direction is critical.

This example illustrates how we apply the derived kinematic equations to solve a practical problem, connecting to **Course Outcome 4**. It also demonstrates the importance of carefully interpreting results, especially with negative signs indicating direction. This is vital for exam success.

#### 6. Common Pitfalls and Exam Tips

*   **Sign Conventions:** Always be consistent with your sign conventions for displacement, velocity, and acceleration. If 'up' is positive y, then gravity is $-g$, and an initial upward velocity is positive. If the object is launched downwards, the initial vertical velocity is negative.
*   **Initial Conditions:** Pay close attention to the initial position ($x_0, y_0$) and initial velocity components ($v_{0x}, v_{0y}$). These are your integration constants. Starting at the origin $(0,0)$ simplifies things, but don't assume it if not stated.
*   **Angles:** Ensure your calculator is in the correct mode (degrees or radians) when using trigonometric functions. Often, problems are given in degrees.
*   **Horizontal vs. Vertical:** Remember the independence of motion. The horizontal component of velocity ($v_x$) is *constant* unless there's a horizontal force (like air resistance, which we're ignoring). The vertical component ($v_y$) changes due to gravity.
*   **Maximum Height:** Maximum height is reached when $v_y = 0$. It's not necessarily the total height if the object starts from a height and lands lower.
*   **Time of Flight:** If the landing height is different from the launch height, you will need to solve a quadratic equation for time.
*   **Range Formula:** The simple range formula $R = \frac{v_0^2 \sin(2\theta)}{g}$ is valid *only* when the launch and landing heights are the same.

By understanding the derivation from differential equations, you gain the flexibility to solve problems even when these simple formulas don't directly apply (e.g., landing at a different height). This depth of understanding is what distinguishes strong students and is key for **Course Outcome 4** and **Course Outcome 5**.

#### Summary

We've covered a lot of ground today, starting from the fundamental laws of motion and deriving the kinematic equations for projectile motion.

*   **Core Idea:** Projectile motion is curvilinear translation under constant gravitational acceleration.
*   **Differential Equations:** $\frac{d^2x}{dt^2} = 0$ and $\frac{d^2y}{dt^2} = -g$.
*   **Kinematic Equations:**
    *   $v_x(t) = v_{0x}$
    *   $x(t) = x_0 + v_{0x} t$
    *   $v_y(t) = v_{0y} - gt$
    *   $y(t) = y_0 + v_{0y} t - \frac{1}{2}gt^2$
*   **Trajectory:** $y = (\tan\theta) x - \frac{g}{2v_{0x}^2} x^2$ (parabolic path).
*   **Key Parameters:** Time of Flight, Maximum Height, Range.

Mastering these concepts will give you a solid foundation for more complex dynamics problems. Keep practicing, visualize the motion, and always check your signs!

---

### Sample Questions with Answers

**1. Conceptual Question:**
A cannonball is fired horizontally from a cliff. Another cannonball is dropped vertically from the same height at the same time. Which cannonball hits the ground first? Assume no air resistance.

**Answer:**
They will hit the ground at the same time.
**Reasoning:** The horizontal motion of the first cannonball does not affect its vertical motion. Both cannonballs start with zero initial vertical velocity ($v_{0y}=0$) and fall under the same acceleration due to gravity ($g$). Therefore, their vertical motion is identical, and they will take the same amount of time to reach the ground. This highlights the independence of horizontal and vertical motion, a direct consequence of the differential equations we derived ($\frac{d^2x}{dt^2}=0$ and $\frac{d^2y}{dt^2}=-g$).

**2. Exam-Oriented Question:**
A projectile is launched with an initial velocity of 50 m/s at an angle of 30° above the horizontal. Determine:
(a) The time of flight.
(b) The maximum height reached.
(c) The horizontal range.
(Assume $g = 9.81$ m/s$^2$ and no air resistance. The projectile is launched from ground level.)

**Answer:**
Given: $v_0 = 50$ m/s, $\theta = 30^\circ$, $y_0 = 0$.
First, calculate initial velocity components:
$v_{0x} = v_0 \cos\theta = 50 \cos(30^\circ) = 50 \times \frac{\sqrt{3}}{2} \approx 43.30$ m/s
$v_{0y} = v_0 \sin\theta = 50 \sin(30^\circ) = 50 \times \frac{1}{2} = 25.00$ m/s

**(a) Time of flight (T):**
Since the landing height is the same as the launch height ($y_0 = 0$ and final $y = 0$), we can use the formula $T = \frac{2v_{0y}}{g}$.
$T = \frac{2 \times 25.00}{9.81} = \frac{50.00}{9.81} \approx 5.097$ seconds.

**(b) Maximum height ($h_{max}$):**
The maximum height is reached when $v_y = 0$. We can use the formula $h_{max} = y_0 + \frac{v_{0y}^2}{2g}$.
Since $y_0=0$:
$h_{max} = \frac{(25.00)^2}{2 \times 9.81} = \frac{625.00}{19.62} \approx 31.85$ meters.

**(c) Horizontal range (R):**
Since the landing height is the same as the launch height, we can use the formula $R = \frac{v_0^2 \sin(2\theta)}{g}$.
$R = \frac{(50)^2 \sin(2 \times 30^\circ)}{9.81} = \frac{2500 \sin(60^\circ)}{9.81} = \frac{2500 \times \frac{\sqrt{3}}{2}}{9.81} = \frac{1250 \sqrt{3}}{9.81} \approx \frac{2165.06}{9.81} \approx 220.70$ meters.

Alternatively, using $R = v_{0x} T$:
$R = 43.30 \times 5.097 \approx 220.60$ meters. (Slight difference due to rounding).

**3. Conceptual/Application Question:**
A firefighter directs a hose stream from the ground towards a burning building. The water leaves the hose at 20 m/s. If the water stream hits a window at a height of 15 meters, what are the possible angles at which the hose could be aimed? (Assume $g = 9.81$ m/s$^2$).

**Answer:**
This problem requires us to work backward from the trajectory equation.
Given: $v_0 = 20$ m/s, $y = 15$ m. We need to find $\theta$.
The trajectory equation is $y = (\tan\theta) x - \frac{g}{2(v_0 \cos\theta)^2} x^2$.
Let $v_{0x} = v_0 \cos\theta$ and $v_{0y} = v_0 \sin\theta$.
$y = \frac{v_{0y}}{v_{0x}} x - \frac{g}{2 v_{0x}^2} x^2$
We also know that $v_y^2 = v_{0y}^2 - 2g(y - y_0)$. At the point where the water hits the window ($y=15, y_0=0$), the vertical velocity $v_y$ is unknown.
However, we can use a different kinematic equation that relates $v_y$, $v_{0y}$, $g$, and displacement:
$v_y^2 = v_{0y}^2 - 2g(y - y_0)$
$v_y^2 = (v_0 \sin\theta)^2 - 2g(15 - 0)$
$v_y^2 = (20 \sin\theta)^2 - 2(9.81)(15)$
$v_y^2 = 400 \sin^2\theta - 294.3$

We also need to relate $x$ and $v_{0x}$. The horizontal motion is $x = v_{0x} t = (v_0 \cos\theta) t$.
The vertical motion is $y = v_{0y} t - \frac{1}{2}gt^2 = (v_0 \sin\theta) t - \frac{1}{2}gt^2$.
From $x = (v_0 \cos\theta) t$, we get $t = \frac{x}{v_0 \cos\theta}$.
Substitute $t$ into the $y$ equation:
$y = (v_0 \sin\theta) \left(\frac{x}{v_0 \cos\theta}\right) - \frac{1}{2}g \left(\frac{x}{v_0 \cos\theta}\right)^2$
$y = x \tan\theta - \frac{gx^2}{2v_0^2 \cos^2\theta}$
$15 = x \tan\theta - \frac{9.81 x^2}{2(20^2) \cos^2\theta}$
$15 = x \tan\theta - \frac{9.81 x^2}{800 \cos^2\theta}$

This equation has two unknowns, $x$ and $\theta$. This suggests we might be missing a piece of information or there might be an alternative approach.

Let's reconsider the problem. The water stream hits a window at a *specific location*. There isn't a given horizontal distance $x$ to the window. This means the problem might be ill-posed as stated, or it implies the water stream *can* reach that height.

A common variation of this problem is "What angles allow the stream to reach a horizontal distance $x$ and a height $y$?".

Let's assume the window is at a specific horizontal distance $x$ from the hose. If $x$ were provided, we could solve for $\theta$.
For example, if the window is at $x = 25$ meters:
$15 = 25 \tan\theta - \frac{9.81 (25)^2}{800 \cos^2\theta}$
$15 = 25 \tan\theta - \frac{6131.25}{800 \cos^2\theta}$
Using $\frac{1}{\cos^2\theta} = \sec^2\theta = 1 + \tan^2\theta$:
$15 = 25 \tan\theta - \frac{6131.25}{800} (1 + \tan^2\theta)$
Let $T = \tan\theta$:
$15 = 25 T - 7.664 (1 + T^2)$
$15 = 25 T - 7.664 - 7.664 T^2$
$7.664 T^2 - 25 T + 22.664 = 0$
Using the quadratic formula for $T$:
$T = \frac{25 \pm \sqrt{(-25)^2 - 4(7.664)(22.664)}}{2(7.664)}$
$T = \frac{25 \pm \sqrt{625 - 694.4}}{15.328}$
The discriminant is negative ($625 - 694.4 < 0$). This means, for a horizontal distance of 25 meters, it's impossible to hit a height of 15 meters with a 20 m/s stream.

This is a good lesson: **check feasibility**. The maximum range for a given speed $v_0$ is $R_{max} = \frac{v_0^2}{g}$ (at 45°).
$R_{max} = \frac{20^2}{9.81} = \frac{400}{9.81} \approx 40.77$ meters.
The maximum height for a given speed $v_0$ is $h_{max,max} = \frac{v_0^2}{2g}$ (at 90°).
$h_{max,max} = \frac{20^2}{2 \times 9.81} = \frac{400}{19.62} \approx 20.39$ meters.

Since the target height (15m) is less than the maximum possible height (20.39m), it's likely there are angles if the horizontal distance is within range. The original problem statement implies existence without specifying the horizontal distance, which is common to test understanding of projectile capabilities. Without a specified horizontal distance $x$, there isn't a single answer for $\theta$. The problem, as stated, is more about understanding the conditions for *hitting* a target rather than calculating specific angles without enough information.

If the problem intended to ask about the *maximum horizontal distance* at which the water stream could hit a height of 15m, that would be a different calculation. The key takeaway from this question is to recognize that projectile motion problems require specifying both target position (x, y) and initial conditions ($v_0, \theta$), or enough information to solve for them.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
