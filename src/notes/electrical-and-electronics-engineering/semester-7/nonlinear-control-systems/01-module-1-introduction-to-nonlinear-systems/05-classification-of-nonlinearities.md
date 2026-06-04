---
title: "Classification of nonlinearities."
subject: "NONLINEAR CONTROL SYSTEMS"
module: "Module 1: Introduction to nonlinear systems:"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f3699c"
status: "completed"
scrapedAt: "2026-05-23T16:38:04.564Z"
---
# NONLINEAR CONTROL SYSTEMS

## Module 1: Introduction to Nonlinear Systems

### Topic: Classification of Nonlinearities

---

### **1. Introduction to Nonlinearities in Control Systems**

Nonlinearities are ubiquitous in real-world control systems. Unlike linear systems, where the principle of superposition holds (the response to a sum of inputs is the sum of responses to individual inputs), nonlinear systems do not adhere to this principle. This fundamental difference makes the analysis and design of nonlinear control systems significantly more challenging.

**Key Concept:**
*   **Linearity:** A system is linear if it satisfies the properties of additivity and homogeneity.
    *   **Additivity:** $f(x_1 + x_2) = f(x_1) + f(x_2)$
    *   **Homogeneity:** $f(ax) = af(x)$, where 'a' is a scalar.
*   **Nonlinearity:** A system that does not satisfy either additivity or homogeneity is nonlinear.

**Importance of Understanding Nonlinearities:**
*   **Realism:** Most physical systems exhibit nonlinear behavior at certain operating points or over their entire operating range. Examples include saturation, backlash, dead zones, friction, and hysteresis.
*   **Unique Phenomena:** Nonlinear systems can exhibit behaviors not seen in linear systems, such as limit cycles, bistability, chaos, and bifurcations.
*   **Analysis and Design:** Proper classification of nonlinearities is crucial for selecting appropriate analysis techniques (e.g., phase plane analysis, describing functions, Lyapunov stability) and for designing effective controllers.

**Textbook References:**
*   **Khalil (2002):** Chapter 1 introduces the fundamental differences between linear and nonlinear systems and highlights the importance of studying nonlinearities.
*   **Slotine & Li (1991):** Chapter 1 provides an overview of nonlinear systems, emphasizing the need for different analytical tools.

---

### **2. Classification of Nonlinearities**

Nonlinearities can be classified based on various criteria. The most common classifications are:

#### **2.1. Based on the Mathematical Form of the Nonlinear Function**

This classification focuses on the algebraic structure of the nonlinear component in the system's differential equation.

**2.1.1. Polynomial Nonlinearities**
These are nonlinearities that can be expressed as polynomials of the system states or inputs.

*   **Examples:**
    *   Cubic friction: $\dot{x} = -ax - bx^3$
    *   Quadratic damping: $\dot{x} = -ax - bx^2$
    *   Square root relationship: $\dot{x} = \sqrt{x}$

**2.1.2. Rational Nonlinearities**
These are nonlinearities where the function is a ratio of polynomials.

*   **Examples:**
    *   $f(x) = \frac{x}{1+x^2}$
    *   $f(x) = \frac{x^2}{x+1}$

**2.1.3. Transcendental Nonlinearities**
These involve trigonometric, exponential, logarithmic, or hyperbolic functions.

*   **Examples:**
    *   Sine nonlinearity (common in robotic arms, pendulums): $f(x) = \sin(x)$
    *   Exponential saturation: $f(x) = 1 - e^{-kx}$
    *   Logarithmic behavior: $f(x) = \ln(x)$

**2.1.4. Piecewise-Linear Nonlinearities**
These nonlinearities have different linear characteristics over different regions of the state space or input range.

*   **Examples:**
    *   **Saturation (or hard limiting):** The output is limited to a maximum and minimum value.
        $$
        \text{sat}(u) =
        \begin{cases}
        u & \text{if } |u| \leq u_{sat} \\
        \text{sgn}(u) u_{sat} & \text{if } |u| > u_{sat}
        \end{cases}
        $$
        (See Khalil, Chapter 1, for detailed discussion on saturation).
    *   **Dead Zone:** A region around zero where the input has no effect on the output.
        $$
        \text{dz}(u) =
        \begin{cases}
        0 & \text{if } |u| \leq d \\
        u - \text{sgn}(u) d & \text{if } |u| > d
        \end{cases}
        $$
        (See Slotine & Li, Chapter 1, for examples of dead zones in actuators).
    *   **Hysteresis:** The output depends not only on the current input but also on the history of the input.
        *   **Bouncing Ball:** A classic example where the velocity changes direction upon impact.
        *   **Relay with Hysteresis:** The output switches states with a delay or dead zone in the switching characteristic.

#### **2.1.5. Other Nonlinearities**
This category includes more complex forms or combinations.

*   **Examples:**
    *   **Backlash (or lost motion):** Occurs in gears and linkages where there is play between mating parts. The output lags behind the input.
    *   **Coulomb Friction:** Constant friction force that opposes motion, regardless of velocity.
    *   **Stiction (Static Friction):** Higher friction force that needs to be overcome to initiate motion.

**Course Outcome Alignment:**
*   **CO1 (K3):** Understanding these mathematical forms is essential for analyzing the qualitative behavior of systems around equilibrium points. For instance, a cubic nonlinearity might lead to different stability properties than a quadratic one.

---

#### **2.2. Based on the Nature of the Input-Output Relationship**

This classification focuses on how the output of the nonlinear element relates to its input, often considering the dynamic nature of the nonlinearity.

**2.2.1. Static Nonlinearities**
The output of the nonlinear element depends only on the present value of the input, not on its past or future values. All the piecewise-linear nonlinearities discussed above (saturation, dead zone, hysteresis) are often treated as static if their dynamics are negligible or explicitly modeled separately.

*   **Example:** A simple amplifier with saturation.

**2.2.2. Dynamic Nonlinearities**
The output of the nonlinear element depends on the past history of the input or on the rate of change of the input.

*   **Examples:**
    *   **Hysteresis:** As mentioned, the output depends on the input's history.
    *   **Backlash:** The position of the output gear depends on the direction of rotation.
    *   **Phase Lag:** Some nonlinear components introduce a phase shift that is dependent on the input amplitude or frequency.

**2.2.3. Memoryless Nonlinearities**
This is synonymous with static nonlinearities. The output at any given time depends only on the input at that same time.

**2.2.4. Nonlinearities with Memory**
This is synonymous with dynamic nonlinearities. The output depends on the past behavior of the input.

**Course Outcome Alignment:**
*   **CO1 (K3):** Static nonlinearities are often easier to analyze around equilibrium points using linearization techniques. Dynamic nonlinearities, however, require more advanced tools as the history of the input matters.

---

#### **2.3. Based on the Impact on System Stability and Behavior**

This classification focuses on how the nonlinearity affects the system's dynamic characteristics.

**2.3.1. Sector-Bounded Nonlinearities**
A nonlinearity $f(x)$ is sector-bounded if it lies between two lines passing through the origin with slopes $k_1$ and $k_2$.

*   **Definition:** $k_1 x^2 \leq x f(x) \leq k_2 x^2$ for all $x$.
    *   The sector is usually defined by $[k_1, k_2]$.
    *   If $k_1 = 0$, the sector is $[0, k_2]$, and the nonlinearity is called **monotonic**.
    *   If $k_1 > 0$, the nonlinearity is strictly monotonic and has no zeros for non-zero inputs.

*   **Examples:**
    *   **Saturation:** $f(x) = \text{sat}(x/u_{sat})$. For $|x| \leq u_{sat}$, $f(x)=x$, so $f(x)/x = 1$. For $|x| > u_{sat}$, $|f(x)| = u_{sat}$, so $|f(x)/x| < 1$. Thus, saturation is sector-bounded in the sector $[0, 1]$.
    *   **Linear:** A linear function $f(x) = kx$ is sector-bounded in the sector $[k, k]$.
    *   **Sine nonlinearity:** $f(x) = \sin(x)$. For small $x$, $\sin(x) \approx x$. For larger $x$, $|\sin(x)| \leq 1$. This nonlinearity is *not* strictly sector-bounded over its entire domain because the slope can become negative. However, it is sector-bounded in the sector $[0, 1]$ for $x \in [0, \pi/2]$. For control design purposes, it's often approximated or analyzed in regions where it's well-behaved.

**Textbook References:**
*   **Khalil (2002):** Chapter 5 discusses sector-bounded nonlinearities in the context of Lyapunov stability and stability analysis using the Small Gain Theorem.
*   **Vidyasagar (1991):** Chapter 6 covers sector-bounded nonlinearities and their role in input-output stability.

**Importance:** Sector-bounded nonlinearities are crucial for applying techniques like the Circle Criterion and Popov Criterion, which are frequency-domain methods for stability analysis (Course Outcome CO3).

**2.3.2. Monotonic Nonlinearities**
A nonlinearity $f(x)$ is monotonic if its derivative (where it exists) is non-negative, meaning $f(x)$ is non-decreasing. This is equivalent to being sector-bounded in the sector $[0, \infty)$.

*   **Definition:** $f(x_1) \leq f(x_2)$ whenever $x_1 \leq x_2$.
*   **Equivalently:** If $f'(x) \geq 0$ wherever $f'(x)$ exists.

*   **Examples:**
    *   $f(x) = x^3$
    *   $f(x) = e^x$
    *   $f(x) = \sqrt{x}$ for $x \geq 0$
    *   Saturation (for $x \geq 0$, it's $x$ up to $u_{sat}$, then constant, so it's non-decreasing).

**Importance:** Monotonic nonlinearities often have desirable stability properties and simplify analysis.

**2.3.3. Odd/Even Nonlinearities**
*   **Odd Nonlinearity:** $f(-x) = -f(x)$ (e.g., $\sin(x)$, $x^3$, $ax$).
*   **Even Nonlinearity:** $f(-x) = f(x)$ (e.g., $x^2$, $\cos(x)$).

**Importance:** Odd nonlinearities simplify stability analysis, particularly when dealing with systems that are symmetric around the origin. The behavior of an odd nonlinearity is often mirrored for positive and negative states.

**2.3.4. Nonlinearities causing Limit Cycles**
Some nonlinearities, when present in a system, can lead to the emergence of stable oscillations known as limit cycles.

*   **Examples:**
    *   **Negative Resistance:** In certain electronic circuits.
    *   **Backlash:** Can contribute to oscillatory behavior.
    *   **Relay control with hysteresis:** Often leads to limit cycle oscillations.

**Textbook References:**
*   **Slotine & Li (1991):** Chapter 7 discusses limit cycles and analysis techniques like describing functions.
*   **Khalil (2002):** Chapter 6 deals with limit cycles and bifurcations.

**Course Outcome Alignment:**
*   **CO1 (K3):** Understanding how different nonlinearities (like those causing limit cycles) affect the qualitative behavior around equilibrium points (or lack thereof) is a core aspect of this outcome.
*   **CO2 (K3):** Stability analysis heavily relies on identifying the nature of nonlinearities and their impact on attracting or repelling trajectories.

---

#### **2.4. Based on the Origin of the Nonlinearity**

This classification relates to where the nonlinear behavior originates within the control system architecture.

**2.4.1. Actuator Nonlinearities**
These are inherent limitations or characteristics of the physical actuators used to exert control.

*   **Examples:**
    *   **Saturation:** Hydraulic or electric actuators often have a maximum force or torque output.
    *   **Dead Zone:** Mechanical play in gears or control valves.
    *   **Backlash:** In gear trains.
    *   **Hysteresis:** In magnetic actuators or relays.

**2.4.2. Sensor Nonlinearities**
These arise from the measuring devices used to sense the system's state.

*   **Examples:**
    *   **Saturation:** Limit on the measurement range of a sensor.
    *   **Quantization:** Discrete output levels from a digital sensor.
    *   **Non-monotonicity:** Some sensors may not always increase output with increasing input.

**2.4.3. Plant Nonlinearities**
These are nonlinear characteristics of the system being controlled.

*   **Examples:**
    *   **Aerodynamic drag:** Often proportional to the square of velocity.
    *   **Motor torque-speed characteristics:** Can be nonlinear.
    *   **Mass-spring-damper systems with nonlinear springs or damping.**
    *   **Robotic arms:** The inertia matrix depends on the configuration, and gravity forces are nonlinear.

**2.4.4. Controller Nonlinearities**
Nonlinearities introduced intentionally within the controller design.

*   **Examples:**
    *   **Relay Control (On-Off Control):** A simple form of nonlinear control often used for its simplicity.
    *   **Gain Scheduling:** Using different linear controllers based on operating conditions, which can be seen as a form of piecewise-linear nonlinearity.
    *   **Fuzzy Logic Controllers, Neural Network Controllers:** Inherently nonlinear controllers.

**Course Outcome Alignment:**
*   **CO4 (K3):** Understanding the source of nonlinearities helps in designing controllers that can either compensate for them or exploit them. For example, a controller might need to be robust to actuator saturation.

---

### **3. Why Classify Nonlinearities?**

The classification of nonlinearities serves several vital purposes in the study and application of nonlinear control systems:

*   **Analysis Method Selection:** Different types of nonlinearities suggest specific analytical tools.
    *   Piecewise-linear systems can often be analyzed using phase plane analysis or by breaking them into linear segments.
    *   Sector-bounded nonlinearities are amenable to frequency-domain techniques like the Circle Criterion.
    *   Memoryless nonlinearities are often easier to handle than those with memory.
*   **Stability Assessment:** The nature of the nonlinearity (e.g., monotonic, sector-bounded) strongly influences the system's stability properties and the conditions under which it can be guaranteed.
*   **Controller Design:** Knowing the type of nonlinearity allows for the design of appropriate compensation or robust control strategies. For instance, feedback linearization aims to cancel out nonlinearities.
*   **Predicting System Behavior:** Classifying nonlinearities helps predict phenomena like limit cycles, bistability, or the loss of stability that are characteristic of nonlinear systems.

---

### **4. Important Points to Remember**

*   **Superposition Does Not Apply:** This is the defining characteristic of nonlinear systems.
*   **No Single Theory:** Unlike linear systems, there isn't one unified theory for all nonlinear systems. Different classes of nonlinearities require different analysis and design techniques.
*   **Equilibrium Points:** The concept of equilibrium points is fundamental, but their stability is not as straightforward as in linear systems. The behavior *around* these points is crucial.
*   **Local vs. Global Behavior:** Linearization provides local behavior around an equilibrium. Nonlinear analysis often aims to understand global behavior or stability over larger regions.
*   **Common Nonlinearities:** Be familiar with saturation, dead zone, backlash, and friction as they appear frequently in practical systems.
*   **Sector-Boundedness:** A key concept for frequency-domain stability analysis (Circle/Popov Criteria).

---

### **5. Practice Questions and Exercises**

**Question 1:**
Identify the type of nonlinearity present in each of the following system equations and classify them based on their mathematical form and nature of the input-output relationship.

a) $\dot{x} = -x - 0.1x^3 + u$
b) $\dot{x} = -x + \text{sat}(u)$ where $\text{sat}(u) = \begin{cases} u & \text{if } |u| \leq 1 \\ \text{sgn}(u) & \text{if } |u| > 1 \end{cases}$
c) $\dot{x} = -2x + u$
   $y = \text{dz}(x)$ where $\text{dz}(x) = \begin{cases} 0 & \text{if } |x| \leq 0.5 \\ x - 0.5 \text{sgn}(x) & \text{if } |x| > 0.5 \end{cases}$
d) A robotic arm where the torque required is proportional to $\sin(\theta)$, where $\theta$ is the joint angle.

**Answer 1:**

a) **Polynomial Nonlinearity:** Cubic term ($-0.1x^3$). This is a static nonlinearity.
b) **Piecewise-Linear Nonlinearity (Saturation):** This is a static nonlinearity. It is sector-bounded in $[0, 1]$.
c) **Piecewise-Linear Nonlinearity (Dead Zone):** This is a static nonlinearity.
d) **Transcendental Nonlinearity:** Sine function ($\sin(\theta)$). This is a static nonlinearity.

**Question 2:**
Consider a system with a nonlinear term $f(x) = kx^2$. Is this nonlinearity sector-bounded? If so, in what sector?

**Answer 2:**
The nonlinearity is $f(x) = kx^2$.
We need to check if $k_1 x^2 \leq x f(x) \leq k_2 x^2$ for all $x$.
Substitute $f(x)$: $k_1 x^2 \leq x (kx^2) \leq k_2 x^2$.
$k_1 x^2 \leq kx^3 \leq k_2 x^2$.

This inequality $k_1 x^2 \leq kx^3$ requires $k_1 \leq kx$ for $x>0$ and $k_1 \geq kx$ for $x<0$. This cannot hold for a fixed $k_1$ for all $x$ unless $k=0$.
If $k > 0$: For $x>0$, $kx^3$ can be arbitrarily large, violating $kx^3 \leq k_2 x^2$. For $x<0$, $kx^3$ is negative.
If $k < 0$: For $x>0$, $kx^3$ is negative. For $x<0$, $kx^3$ is positive.

The condition $k_1 x^2 \leq x f(x)$ means $k_1 \leq f(x)/x$ for $x \neq 0$.
$f(x)/x = kx$.
So, we need $k_1 \leq kx \leq k_2$.
If $k > 0$, then $kx$ can take any value from $-\infty$ to $+\infty$. This cannot be bounded by $k_2$ for all $x$.
If $k < 0$, then $kx$ can take any value from $+\infty$ to $-\infty$. This cannot be bounded by $k_1$ for all $x$.

Therefore, the nonlinearity $f(x) = kx^2$ (for $k \neq 0$) is **not sector-bounded** over its entire domain.
However, if we consider it for $x \ge 0$, then $f(x)/x = kx$. If $k>0$, we need $k_1 \leq kx$. This can be satisfied by $k_1=0$ if we allow $x=0$. But the inequality must hold for all $x$.
If we restrict the domain, e.g., for $x \in [a, b]$ with $a>0$, then $f(x) = kx^2$ is sector-bounded with sector $[ka, kb]$ (if $k>0$) or $[kb, ka]$ (if $k<0$). For $f(x)=x^2$, $k=1$, $f(x)/x = x$. This is not bounded over $(-\infty, \infty)$.

**Question 3:**
A common problem in robotic manipulators is the presence of torque ripple due to motor imperfections. This can be modeled as a nonlinearity in the torque command. Briefly explain how such a nonlinearity might affect the stability of a robotic arm's control system. (Relates to CO1, CO2)

**Answer 3:**
Torque ripple, if not properly accounted for, can introduce oscillatory behavior or unexpected disturbances in the robotic arm's motion. Depending on its nature (e.g., if it acts like a disturbance force or affects the effective inertia/damping), it could:
*   Cause the arm to deviate from its desired trajectory.
*   Lead to limit cycles around the desired position.
*   If the ripple is significant and poorly damped, it could destabilize the closed-loop system, causing vibrations or even uncontrolled motion.
*   Linear control designs might be unable to reject these nonlinear disturbances, leading to poor performance or instability. Advanced nonlinear control techniques might be necessary to mitigate the effects.

---

### **6. Examples from Textbooks**

*   **Khalil (2002):**
    *   **Chapter 1:** Introduces examples like a DC motor with saturation in the armature voltage, a mechanical system with backlash, and the Van der Pol oscillator exhibiting limit cycles.
    *   **Chapter 5:** Discusses saturation and dead zones in the context of Lyapunov stability analysis.
*   **Slotine & Li (1991):**
    *   **Chapter 1:** Uses examples of saturation in actuators and backlash in gears to illustrate the challenges in modeling and control.
    *   **Chapter 7:** Analyzes systems with hysteresis and backlash, discussing their impact on system performance and stability.

---

### **7. Alignment with Course Outcomes**

*   **CO1 (K3):** Understanding the different classifications of nonlinearities is the first step to analyzing the qualitative behavior of systems. For instance, knowing that a cubic nonlinearity can lead to hardening or softening springs helps predict behavior around equilibrium points.
*   **CO2 (K3):** Certain nonlinearities (e.g., those that lead to sector-boundedness) are critical for applying stability theorems like the Circle Criterion or for Lyapunov stability analysis. Identifying monotonic nonlinearities often implies better stability properties.
*   **CO3 (K2):** While this topic primarily focuses on classification, understanding nonlinearities like sector-bounded ones lays the groundwork for frequency-domain analysis methods (like describing functions or the Circle Criterion) that are covered later.
*   **CO4 (K3):** Knowing the type of nonlinearity present (e.g., actuator saturation) directly informs the design choices for feedback controllers. Controllers might need to be designed to be robust to these nonlinearities or use specific techniques to cancel them (e.g., feedback linearization).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
