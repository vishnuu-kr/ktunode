---
title: "Find the moment of inertia of the rotating system"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 8: Retardation test on a DC machine (CO3)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360c4"
status: "completed"
scrapedAt: "2026-05-23T16:15:26.977Z"
---
# DC MACHINES & TRANSFORMERS LAB

## Module 8: Retardation Test on a DC Machine (CO3)

### Topic: Find the Moment of Inertia of the Rotating System

---

### 1. Introduction to Retardation Test

The retardation test is a method used to determine the rotational losses of a DC machine. By observing how the machine decelerates when the supply is suddenly switched off, we can infer the frictional and windage losses. This test is particularly useful for estimating these losses at different speeds, which are difficult to measure directly.

**Key Concept:** When the supply to a DC machine is removed, the kinetic energy stored in the rotating parts is dissipated as heat due to various retarding torques.

### 2. Purpose of the Retardation Test in this Context

While the primary purpose of the retardation test is to determine rotational losses (friction and windage), it also allows us to calculate the **moment of inertia (J)** of the rotating system. The moment of inertia is a fundamental property of any rotating object, representing its resistance to changes in its rotational speed.

**Learning Outcome Addressed:** This topic directly contributes to **CO3: Investigate the losses and efficiency in DC machines by conducting no-load tests (Knowledge Level: K3)**, as the moment of inertia is crucial for understanding the dynamics of the machine and subsequently calculating losses accurately.

### 3. Theoretical Background

#### 3.1. Torque Equation of a DC Machine

The fundamental torque equation for a DC machine is given by:

$T_{sh} = T_a - T_{losses}$

Where:
*   $T_{sh}$ = Shaft torque (the useful torque delivered by the machine)
*   $T_a$ = Armature torque (developed by the motor action)
*   $T_{losses}$ = Torque equivalent of rotational losses (friction, windage, and core losses)

When the DC machine is running as a motor and the supply is suddenly switched off, the armature torque $T_a$ becomes zero (as there's no external current). The only torque acting is the retarding torque due to rotational losses.

#### 3.2. Retarding Torque and Angular Deceleration

The retarding torque ($T_r$) is responsible for slowing down the rotating system. This torque is primarily due to friction and windage.

The relationship between torque, moment of inertia, and angular acceleration is given by Newton's second law for rotation:

$T = J \alpha$

Where:
*   $T$ = Torque (in this case, $T_r$)
*   $J$ = Moment of inertia of the rotating system (kg-m²)
*   $\alpha$ = Angular acceleration (rad/s²)

When the machine is decelerating, the acceleration is negative. Let $\omega$ be the angular speed in rad/s. Then, angular acceleration is $\alpha = \frac{d\omega}{dt}$.

So, the equation becomes:

$T_r = J \frac{d\omega}{dt}$

#### 3.3. Rotational Losses ($T_{losses}$)

Rotational losses ($P_{rot}$) are typically expressed as a function of speed, often in the form:

$P_{rot} = A\omega + B\omega^2$

Where:
*   $A$ is a constant related to friction.
*   $B$ is a constant related to windage.

The torque equivalent of these losses is:

$T_{losses} = \frac{P_{rot}}{\omega} = \frac{A\omega + B\omega^2}{\omega} = A + B\omega$

This shows that the rotational torque loss is linearly dependent on speed.

**Reference:** This concept is elaborated in **P.S. Bimbhra, "Electrical Machinery," Chapter 6: DC Generators and Chapter 7: DC Motors (Losses and Efficiency)** and **D.P. Kothari & I.J. Nagrath, "Electric Machines," Chapter 4: DC Generators and Chapter 5: DC Motors (Losses and Efficiency)**. Both books discuss that rotational losses are primarily friction and windage and are speed-dependent.

### 4. Procedure for Finding the Moment of Inertia (J)

The retardation test is performed with the machine running at a constant speed, usually at or near its rated speed, under no-load conditions.

**Steps:**

1.  **Setup:**
    *   Connect the DC machine as a motor.
    *   Provide a variable DC supply to the field winding and armature winding.
    *   Ensure the machine is equipped with a tachometer or a method to measure its speed accurately.
    *   The brake drum and brake mechanism can be used for applying a variable load if needed, but for retardation, the supply is cut off.

2.  **Operation:**
    *   Run the DC machine as a motor at a desired speed (e.g., rated speed) under no-load conditions. This means only the field excitation is applied, and the armature is connected to the supply.
    *   Once the machine is running steadily at the desired speed, **suddenly disconnect the electrical supply** to the armature. The field excitation can either be maintained or also disconnected simultaneously depending on the specific test variant. For simplicity and to isolate rotational losses, maintaining field excitation is often preferred.
    *   **Simultaneously, start recording the speed of the machine** as it decelerates. This can be done using a tachometer and a timer, or a data acquisition system. Record speed at regular time intervals.

3.  **Data Collection:**
    *   Record the initial speed ($N_1$ or $\omega_1$) just before switching off the supply.
    *   Record the speed at various time intervals (e.g., $N_2$ at $t_2$, $N_3$ at $t_3$, etc.) until the machine comes to rest.
    *   It is advisable to perform this test at a few different initial speeds to get a more accurate estimation of J and its dependence on speed if any.

#### 4.1. Analyzing the Collected Data

The recorded data provides a speed-time curve for the decelerating machine. We need to extract the angular deceleration ($\alpha$) at different speeds.

**Method 1: Graphical Method**

1.  Plot the speed (N in RPM or $\omega$ in rad/s) on the y-axis against time (t in seconds) on the x-axis. This will give a deceleration curve.
2.  **Calculate Angular Speed ($\omega$):** If speed is recorded in RPM (N), convert it to rad/s using $\omega = \frac{2\pi N}{60}$.
3.  **Calculate Angular Deceleration ($\alpha$):**
    *   Draw tangents to the speed-time curve at different points (corresponding to different speeds).
    *   The slope of the tangent at any point gives the angular deceleration $\alpha = \frac{d\omega}{dt}$ at that speed.
    *   Alternatively, if you have pairs of (speed, time) data, you can approximate $\alpha \approx \frac{\Delta\omega}{\Delta t}$ for small time intervals.

**Method 2: Direct Calculation (if sufficient data points)**

If you have enough data points, you can directly calculate $\frac{\Delta\omega}{\Delta t}$ for small intervals and use the average $\omega$ for that interval.

#### 4.2. Determining the Moment of Inertia (J)

Once you have the values of retarding torque ($T_r$) and angular deceleration ($\alpha$) at various speeds, you can calculate the moment of inertia using $J = \frac{T_r}{\alpha}$.

However, the retarding torque ($T_r$) itself is speed-dependent (friction and windage).

**Approach to determine J:**

1.  **Assume Constant Rotational Losses (Simplification):** In a simplified approach, if we assume the rotational losses are constant over the short deceleration period, we can calculate an average deceleration. However, this is generally not accurate.

2.  **Determine Rotational Losses ($T_{losses}$) first:**
    *   Perform a **No-Load Test** separately. During the no-load test, the motor runs at a constant speed with excitation applied but no load connected. The power input to the motor during this no-load test, minus the core losses (which are often assumed to be relatively constant or can be estimated), gives the rotational losses.
    *   Alternatively, and more commonly for retardation tests, we can assume the rotational losses ($P_{rot}$) are known or can be estimated from separate tests or manufacturer data for the motor.
    *   From the no-load test, we can determine the torque equivalent of rotational losses ($T_{losses}$) at various speeds. A common empirical formula for rotational losses is $P_{rot} = K_f \omega + K_w \omega^2$, where $K_f$ and $K_w$ are constants for friction and windage respectively. The torque is $T_{losses} = K_f + K_w \omega$.
    *   If you have performed the retardation test at multiple initial speeds, you will have multiple deceleration curves, each yielding $T_{losses}$ as a function of $\omega$ (as $T_{losses} = J\alpha$ where $T_{losses}$ is the *net* retarding torque). This can be a bit circular.

3.  **The Standard Retardation Test Procedure for J:**
    *   Run the machine at rated speed under no load.
    *   Disconnect the armature supply.
    *   Record the speed ($N$) vs. time ($t$) as the machine decelerates.
    *   The torque causing deceleration is the rotational loss torque ($T_r$).
    *   $T_r = J \frac{d\omega}{dt}$
    *   The power dissipated as rotational losses is $P_{rot} = T_r \omega = J \omega \frac{d\omega}{dt}$.
    *   From the speed-time data, plot $\omega$ vs. $t$. Calculate the slope $\frac{d\omega}{dt}$ at various speeds.
    *   **Now, the crucial part:** The rotational losses themselves are speed-dependent. $P_{rot} = A\omega + B\omega^2$.
    *   Therefore, $J \omega \frac{d\omega}{dt} = A\omega + B\omega^2$.
    *   Dividing by $\omega$: $J \frac{d\omega}{dt} = A + B\omega$.
    *   This implies that $J\alpha = A + B\omega$.
    *   So, plot $J\alpha$ (calculated using the measured $\alpha$ and the moment of inertia of the machine *plus* any coupled load) against $\omega$. The intercept on the $J\alpha$ axis will be $A$, and the slope will be $B$.
    *   **However, we are trying to find J.** This is where the reference books provide a more direct method.

    **Reference Material (P.S. Bimbhra & Kothari & Nagrath):**
    A common and practical approach assumes that the rotational losses can be approximated as a constant value or estimated separately. If we assume the rotational losses are constant over the deceleration period, then the retarding torque $T_r$ is constant.

    *   Let $T_r$ be the constant retarding torque.
    *   $T_r = J \alpha$
    *   $J = \frac{T_r}{\alpha}$
    *   We can find the average deceleration $\alpha_{avg}$ from the speed-time curve, but using the slope at a specific speed is more accurate.
    *   The primary challenge is determining $T_r$ accurately without knowing $J$.

    **A more practical approach often used in labs is to determine the constants A and B for the rotational losses from a separate no-load test, and then use those constants in the retardation test.**

    **Revised Procedure (incorporating loss estimation):**

    1.  **No-Load Test:**
        *   Run the DC machine at various speeds (e.g., from 50% to 100% rated speed) with field excitation only (no mechanical load).
        *   Record the input armature power ($P_{in}$), armature voltage ($V_a$), field current ($I_f$), and speed ($\omega$).
        *   The armature current ($I_a$) will be very small and is primarily to supply rotational losses and core losses.
        *   $P_{rot} = V_a I_a - I_a^2 R_a - P_{core}$ (where $P_{core}$ is core loss).
        *   Core losses are also speed and flux dependent. Often, core losses are assumed to be proportional to speed ($P_{core} \propto \omega$) or a combination ($P_{core} = c_1 \omega + c_2 \omega^2$).
        *   A common simplification for no-load is $P_{in} \approx P_{rot} + P_{core}$.
        *   If we assume $P_{rot} = A\omega + B\omega^2$ and $P_{core} = C\omega$, then $P_{in} = (A+C)\omega + B\omega^2$.
        *   By plotting $P_{in}/\omega$ against $\omega$, we can find the coefficients.
        *   Alternatively, if we assume rotational losses are dominant over core losses at higher speeds and core losses are proportional to speed, then $P_{rot} \approx P_{in} - P_{core}$.
        *   A simpler assumption: Measure input power at no-load at rated speed ($P_{NL}$). This power is mainly rotational losses. $P_{rot} \approx P_{NL}$.
        *   Then, $T_{losses} = \frac{P_{NL}}{\omega_{rated}}$.
        *   This is still an approximation, as $P_{NL}$ includes core losses which are also speed dependent.

    2.  **Retardation Test for J:**
        *   Run the machine at a certain speed $\omega_1$.
        *   Disconnect the supply.
        *   Measure speed $\omega$ as a function of time $t$.
        *   Calculate $\alpha = \frac{d\omega}{dt}$.
        *   Now, use the estimated rotational torque $T_{losses}$ from the no-load test. Let's assume $T_{losses}$ is known at speed $\omega$.
        *   The net retarding torque is $T_r = T_{losses}(\omega)$.
        *   So, $J = \frac{T_r}{\alpha} = \frac{T_{losses}(\omega)}{\alpha}$.
        *   This method requires you to know the form of $T_{losses}(\omega)$ from prior tests.

    **Most Straightforward Lab Method for J:**

    The retardation test itself can be used to determine the constants $A$ and $B$ of rotational losses if done carefully.
    1. Run the machine at various speeds (e.g., 1200, 1000, 800, 600 RPM) with field excitation.
    2. Suddenly disconnect the armature supply.
    3. Record speed-time data for each initial speed.
    4. For each deceleration curve, calculate $\alpha = \frac{d\omega}{dt}$ at different speeds.
    5. The equation is $J\alpha = A + B\omega$.
    6. Rearrange: $\alpha = \frac{A}{J} + \frac{B}{J}\omega$.
    7. Let $k_1 = A/J$ and $k_2 = B/J$. Then $\alpha = k_1 + k_2 \omega$.
    8. Plot $\alpha$ (y-axis) against $\omega$ (x-axis). This should yield a straight line.
    9. The intercept of this line on the $\alpha$-axis is $k_1$. The slope of the line is $k_2$.
    10. **To find J, we need A or B from a separate test or assume them.** This is the tricky part.

    **Alternative interpretation from Bimbhra (Chapter 7, page 234):**
    The retardation test is described for determining rotational losses. The expression used is $P_{rot} = J \omega \frac{d\omega}{dt}$. If the machine is run at a specific speed (say $\omega_0$) and the supply is switched off, the power dissipated is $P_{rot} = J \omega_0 \alpha_0$, where $\alpha_0$ is the deceleration at $\omega_0$.
    To find J, one needs to know $P_{rot}$ at $\omega_0$.

    **Practical Lab Approach Often Taught:**

    1.  Run the DC machine at rated speed (say $\omega_0$).
    2.  Disconnect armature supply and start recording speed-time.
    3.  Calculate the deceleration $\alpha_0$ at the initial speed $\omega_0$.
    4.  From a separate no-load test or by assuming the power input at no-load near rated speed represents rotational losses, estimate the rotational torque $T_{losses}$ at $\omega_0$. Let's call this $T_{nl}$.
    5.  Then, $T_{nl} = J \alpha_0$ (assuming rotational losses are the only retarding torque and are constant during this brief period of deceleration).
    6.  $J = \frac{T_{nl}}{\alpha_0}$.

    **Let's use this simpler, common lab method for calculating J.**

#### 4.3. Example Calculation (Simplified Lab Method)

**Given Data:**
*   Machine: DC Shunt Motor
*   Initial Speed ($N_0$) = 1500 RPM
*   After 10 seconds, Speed ($N_1$) = 1400 RPM
*   After 20 seconds, Speed ($N_2$) = 1300 RPM
*   Assume rotational losses at 1500 RPM are measured from no-load test as $P_{rot}$ = 250 W.

**Calculations:**

1.  **Convert speeds to rad/s:**
    *   $\omega_0 = \frac{2\pi \times 1500}{60} = 157.08$ rad/s
    *   $\omega_1 = \frac{2\pi \times 1400}{60} = 146.61$ rad/s
    *   $\omega_2 = \frac{2\pi \times 1300}{60} = 136.14$ rad/s

2.  **Calculate average deceleration in intervals:**
    *   Interval 1 (0-10s): $\alpha_{avg1} = \frac{\omega_1 - \omega_0}{t_1 - t_0} = \frac{146.61 - 157.08}{10 - 0} = \frac{-10.47}{10} = -1.047$ rad/s²
    *   Interval 2 (10-20s): $\alpha_{avg2} = \frac{\omega_2 - \omega_1}{t_2 - t_1} = \frac{136.14 - 146.61}{20 - 10} = \frac{-10.47}{10} = -1.047$ rad/s²
    *   *Note: In this example, deceleration is constant, which is unlikely in practice. Real data will show decreasing deceleration.*

3.  **Estimate rotational torque ($T_{rot}$) at the initial speed ($\omega_0$):**
    *   $T_{rot} = \frac{P_{rot}}{\omega_0} = \frac{250 \text{ W}}{157.08 \text{ rad/s}} = 1.5915$ Nm

4.  **Calculate Moment of Inertia (J):**
    *   Using the deceleration at the initial speed (approximated by $\alpha_{avg1}$ if we assume it's the deceleration at the start, or by fitting a curve):
    *   $J = \frac{T_{rot}}{\left|\alpha_{avg1}\right|} = \frac{1.5915 \text{ Nm}}{1.047 \text{ rad/s}^2} \approx 1.519$ kg-m²

**Important Consideration:** The rotational losses ($P_{rot}$) themselves are speed dependent. If we use the rotational power at the initial speed ($\omega_0$) to calculate the torque ($T_{rot}$), and then use the average deceleration over a period, we are making an approximation. For more accuracy, one would need to determine the deceleration at the specific speed $\omega_0$ by drawing a tangent to the speed-time curve at that point.

### 5. Learning Outcomes Mapping

*   **CO1: Analyze the performance of DC generators by conducting load/no-load tests (Knowledge Level: K3):** While this topic is on DC motors, the principle of rotational losses is common. Understanding these losses is crucial for accurate performance analysis.
*   **CO2: Sketch the performance characteristics of DC shunt and series motors (Knowledge Level: K3):** The moment of inertia affects the transient behavior (acceleration/deceleration) of motors, which is part of their performance characteristics.
*   **CO3: Investigate the losses and efficiency in DC machines by conducting no-load tests (Knowledge Level: K3):** This is directly addressed. The retardation test, combined with no-load tests, helps in determining rotational losses, which are essential for efficiency calculations. The moment of inertia is a key parameter in understanding the dynamics of these losses.
*   **CO4 & CO5:** These COs relate to transformers and are not directly covered by this DC machine lab module.

### 6. Practice Questions and Answers

**Question 1:** What is the fundamental principle behind the retardation test for a DC machine?

**Answer:** The retardation test measures how a DC machine's speed decreases when the electrical supply is removed. This deceleration is caused by the retarding torques (mainly friction and windage), and by relating this deceleration to the known or estimated retarding torque, the moment of inertia of the rotating system can be determined.

**Question 2:** If a DC motor decelerates from 1200 RPM to 1000 RPM in 15 seconds, and the retarding torque at the initial speed of 1200 RPM is estimated to be 1.2 Nm, calculate the approximate moment of inertia of the rotating system.

**Answer:**
1.  Convert speeds to rad/s:
    *   $\omega_0 = \frac{2\pi \times 1200}{60} = 125.66$ rad/s
    *   $\omega_1 = \frac{2\pi \times 1000}{60} = 104.72$ rad/s
2.  Calculate average deceleration:
    *   $\alpha_{avg} = \frac{\omega_1 - \omega_0}{\Delta t} = \frac{104.72 - 125.66}{15} = \frac{-20.94}{15} = -1.396$ rad/s²
3.  Calculate Moment of Inertia:
    *   $J = \frac{T_{retarding}}{\left|\alpha_{avg}\right|} = \frac{1.2 \text{ Nm}}{1.396 \text{ rad/s}^2} \approx 0.8596$ kg-m²

**Question 3:** Why is it important to conduct a separate no-load test before or in conjunction with the retardation test for accurate determination of J?

**Answer:** The retardation test measures the deceleration caused by retarding torques. To calculate J using $J = T_{retarding} / \alpha$, we need to know the retarding torque. The retarding torque is primarily due to rotational losses (friction and windage), which are speed-dependent. A separate no-load test is used to estimate these rotational losses at different speeds, allowing for a more accurate calculation of the retarding torque at the specific speed of interest during the retardation test. Without an accurate estimation of the retarding torque, the calculated moment of inertia will be erroneous.

### 7. Important Points to Remember

*   **Rotational Losses:** Friction and windage constitute the main rotational losses. These are speed-dependent.
*   **Moment of Inertia (J):** A measure of the resistance of a rotating body to angular acceleration. Units are kg-m².
*   **Relationship:** $T = J \alpha$, where T is the net torque and $\alpha$ is the angular acceleration.
*   **Retardation Test Principle:** Supply is cut off, and the machine decelerates due to retarding torques.
*   **Data Required:** Speed-time data during deceleration.
*   **Calculation:** From speed-time data, calculate angular deceleration ($\alpha$). Estimate rotational torque ($T_{rot}$) from no-load tests. Then $J = T_{rot} / |\alpha|$.
*   **Accuracy:** The accuracy of J depends on the accurate estimation of rotational losses (retarding torque) and the precise measurement of deceleration.
*   **Coupled Loads:** If any load is coupled to the machine shaft, its moment of inertia must also be included in the total J. The test measures the moment of inertia of the *rotating system*.

---
