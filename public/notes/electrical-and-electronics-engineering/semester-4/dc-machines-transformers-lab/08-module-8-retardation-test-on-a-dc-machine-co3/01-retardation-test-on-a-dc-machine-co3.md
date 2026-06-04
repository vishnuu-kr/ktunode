---
title: "Retardation test on a DC machine (CO3)"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 8: Retardation test on a DC machine (CO3)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360c2"
status: "completed"
scrapedAt: "2026-05-23T16:15:25.487Z"
---
# DC Machines & Transformers Lab: Module 8 - Retardation Test on a DC Machine (CO3)

## 1. Introduction

The Retardation Test is a crucial experimental procedure performed on DC machines to determine various parameters, primarily the **frictional and windage losses**. These losses are a significant component of the total losses in a DC machine and are difficult to measure directly under load conditions. This test, also known as the **Swinging Test** or **Speed-Time Curve Test**, allows for the estimation of these rotational losses by observing the machine's deceleration when the power supply is suddenly removed.

This module aligns with **Course Outcome 3 (CO3): Investigate the losses and efficiency in DC machines by conducting no-load tests (Knowledge Level: K3)**, as the retardation test directly contributes to understanding and quantifying rotational losses, which are essential for efficiency calculations.

## 2. Key Concepts and Definitions

*   **Rotational Losses:** These are losses that occur due to mechanical effects as the machine rotates. They primarily consist of:
    *   **Frictional Losses:** Due to friction in bearings and brushes.
    *   **Windage Losses:** Due to the resistance offered by the air to the rotating armature and fan.
    *   **Brush Contact Losses:** Although sometimes separated, these are often grouped with rotational losses.

*   **Losses in a DC Machine:** For a comprehensive understanding, it's important to recall the different types of losses in a DC machine:
    *   **Copper Losses (I²R losses):** In armature winding, field winding (shunt and series).
    *   **Iron Losses (Core Losses):**
        *   **Hysteresis Loss:** Due to the repeated magnetization and demagnetization of the armature core.
        *   **Eddy Current Loss:** Due to induced currents circulating within the armature core.
    *   **Mechanical Losses:**
        *   **Friction and Windage Losses (Rotational Losses):** As defined above.
    *   **Stray Load Losses:** Losses that are dependent on the load current and vary with the load. These are complex to determine and are often approximated.

*   **Retardation:** The rate at which the speed of the DC machine decreases when the power supply is interrupted. This deceleration is caused by the sum of all opposing torques, primarily the rotational losses.

*   **Torque:** The rotational force produced by the motor. In a DC machine, torque is proportional to the product of armature current and flux ($\tau \propto \Phi I_a$).

*   **Moment of Inertia (J):** A measure of an object's resistance to changes in its rotational motion. It depends on the mass of the object and how that mass is distributed relative to the axis of rotation.

## 3. Theoretical Basis of the Retardation Test

When a DC machine is running at a certain speed, the developed torque is balanced by the opposing torques (load torque and rotational loss torque). If the power supply is suddenly removed, the load torque becomes zero, and the machine starts to decelerate due to the rotational losses.

The equation of motion for a DC machine can be expressed as:

$J \frac{d\omega}{dt} = T_{developed} - T_{opposing}$

Where:
*   $J$ is the moment of inertia of the rotating parts (armature, fan, etc.).
*   $\frac{d\omega}{dt}$ is the angular acceleration (or deceleration in this case).
*   $\omega$ is the angular speed ($\omega = 2\pi N/60$, where $N$ is speed in RPM).
*   $T_{developed}$ is the developed electromagnetic torque.
*   $T_{opposing}$ is the total opposing torque, which includes rotational losses.

In the retardation test, after the power supply is cut off, $T_{developed} = 0$. Assuming that the rotational losses are primarily dependent on speed and are independent of the armature current and field excitation at no-load, we can approximate:

$T_{opposing} \approx T_{rotational} = K \omega^n$

Where $K$ and $n$ are constants. For many DC machines, rotational losses are approximately proportional to the square of the speed, so $n \approx 2$.

Therefore, the equation of motion becomes:

$J \frac{d\omega}{dt} = -T_{rotational}$

If we assume rotational losses are proportional to speed squared ($T_{rotational} = k \omega^2$), then:

$J \frac{d\omega}{dt} = -k \omega^2$

$\frac{d\omega}{\omega^2} = -\frac{k}{J} dt$

Integrating from $\omega_1$ to $\omega_2$ and time $t_1$ to $t_2$:

$\int_{\omega_1}^{\omega_2} \frac{d\omega}{\omega^2} = -\frac{k}{J} \int_{t_1}^{t_2} dt$

$[-\frac{1}{\omega}]_{\omega_1}^{\omega_2} = -\frac{k}{J} (t_2 - t_1)$

$\frac{1}{\omega_1} - \frac{1}{\omega_2} = -\frac{k}{J} \Delta t$

$\frac{\omega_2 - \omega_1}{\omega_1 \omega_2} = \frac{k}{J} \Delta t$

This approach can be complex. A more practical approach is to determine the braking torque from the speed-time curve.

**Method 1: Using the Speed-Time Curve**

The retardation test involves plotting a curve of speed versus time after the power supply is removed. From this curve, we can determine the rate of deceleration at any given speed.

The torque equation is:
$J \frac{d\omega}{dt} = T_{electromagnetic} - T_{rotational}$

When the power is switched off, the electromagnetic torque becomes zero.
$J \frac{d\omega}{dt} = -T_{rotational}$

The braking torque due to rotational losses is $T_{rotational} = -J \frac{d\omega}{dt}$.

The rotational losses in watts are given by:
$P_{rotational} = T_{rotational} \times \omega$
$P_{rotational} = (-J \frac{d\omega}{dt}) \times \omega$

To find $J$, we often rely on other methods or assumptions. However, the primary goal of the retardation test is to find the **rotational losses themselves**.

**Practical Determination of Rotational Losses:**

1.  **Run the machine at a constant speed:** The machine is typically run at or near its rated speed by exciting the field winding (for a DC shunt motor) or by applying a reduced voltage to the armature and field (for a separately excited DC motor).
2.  **Switch off the armature supply:** Immediately after reaching the desired stable speed, the armature supply is disconnected. The field excitation is usually maintained to ensure that the rotational losses are representative of the no-load conditions at that speed.
3.  **Record the speed-time data:** As the machine decelerates, record the speed at regular intervals of time. This data forms the speed-time curve.
4.  **Calculate deceleration:** From the speed-time curve, calculate the slope $\frac{d\omega}{dt}$ at various speeds. This is the angular deceleration.
5.  **Calculate rotational torque:** At each speed $\omega$, the rotational torque $T_{rotational}$ is calculated as $T_{rotational} = -J \frac{d\omega}{dt}$.
6.  **Calculate rotational losses:** The rotational losses $P_{rotational}$ at each speed are calculated as $P_{rotational} = T_{rotational} \times \omega = -J \omega \frac{d\omega}{dt}$.

**Challenges:**

*   **Determining J:** The moment of inertia ($J$) is not always known. If $J$ is unknown, the test can be conducted in two ways:
    *   **With field winding short-circuited:** This eliminates residual magnetism and excitation losses, so the deceleration is mainly due to friction and windage.
    *   **With field winding excited:** This includes rotational losses and any stray load losses that might be present due to residual magnetization or residual currents.

*   **Assumption of constant rotational losses:** The assumption that rotational losses are constant over a range of speeds can be an approximation. The loss is more accurately represented as a function of speed, typically $P_{rotational} = A + B\omega + C\omega^2$, where $A$ represents bearing friction (relatively constant), $B\omega$ represents brush friction, and $C\omega^2$ represents windage.

**A More Practical Approach (No need to know J):**

The test is often conducted by running the machine at its rated speed. The armature is then short-circuited (for a DC shunt motor) or the armature supply is disconnected (for a separately excited motor), and the speed is recorded as it falls. The field excitation is usually kept constant.

Let's consider the case where the machine is run at a specific speed $\omega_1$ and then allowed to decelerate to a lower speed $\omega_2$ in time $\Delta t$.

If we assume the rotational losses ($P_r$) are proportional to speed, i.e., $P_r = k \omega^2$, then the corresponding torque is $T_r = \frac{P_r}{\omega} = k \omega$.
The equation of motion during deceleration is $J \frac{d\omega}{dt} = -T_r = -k \omega$.

Integrating: $\int_{\omega_1}^{\omega_2} \frac{d\omega}{\omega} = -\frac{k}{J} \int_{0}^{\Delta t} dt$
$\ln(\frac{\omega_2}{\omega_1}) = -\frac{k}{J} \Delta t$

This form is also not directly giving us the losses.

**The most common method for this lab is to plot the speed-time curve and from it, find the torque required to overcome rotational losses.**

The torque developed is $T = J \alpha$, where $\alpha = d\omega/dt$ is the angular acceleration. When the power is switched off, the developed torque is zero. The opposing torque is the rotational loss torque ($T_{rotational}$).
So, $0 = T_{electromagnetic} - T_{rotational}$ if running at constant speed (before switching off).
After switching off, $J \frac{d\omega}{dt} = -T_{rotational}$.

The rotational loss power is $P_{rotational} = T_{rotational} \times \omega = -J \omega \frac{d\omega}{dt}$.

To find $P_{rotational}$ without knowing $J$:

1.  **Run the DC machine at rated speed.**
2.  **Switch off the armature supply.** Maintain field excitation.
3.  **Record speed (N) vs. time (t) data** as the machine decelerates.
4.  **Calculate angular speed ($\omega$)** from $N$: $\omega = \frac{2\pi N}{60}$ rad/s.
5.  **Plot $\omega$ vs. $t$ and $t$ vs. $\omega$.**
6.  **Determine $\frac{d\omega}{dt}$ from the curve.** This is the slope of the $\omega$ vs. $t$ curve.
7.  **Crucially, we need to relate the deceleration to the losses.** The test is designed to estimate rotational losses, and this is typically done by assuming a form for the rotational loss. A common assumption is that rotational losses are proportional to the square of the speed, $P_{rotational} = K \omega^2$.
    Then, $T_{rotational} = \frac{P_{rotational}}{\omega} = K \omega$.
    So, $J \frac{d\omega}{dt} = -K \omega$.
    $\frac{d\omega}{dt} = -\frac{K}{J} \omega$.
    This gives us a linear relationship between $\frac{d\omega}{dt}$ and $\omega$.

    **Alternative interpretation for practical labs:** The test aims to find the **power dissipated due to rotational losses**.

    Consider the energy balance during deceleration:
    The rotational kinetic energy lost is converted into heat due to rotational losses.
    $d(KE) = -P_{rotational} dt$
    $d(\frac{1}{2} J \omega^2) = -P_{rotational} dt$
    $J \omega \frac{d\omega}{dt} = -P_{rotational}$
    $P_{rotational} = -J \omega \frac{d\omega}{dt}$

    This still requires $J$.

    **The most common practical approach in labs relies on the assumption that rotational losses at a given excitation are primarily dependent on speed.**

    **Procedure Outline:**
    1.  Run the DC machine at rated speed with rated field excitation (no load on armature).
    2.  Suddenly disconnect the armature from the supply.
    3.  Record speed $N$ (or $\omega$) at intervals of time $\Delta t$.
    4.  Plot the speed-time curve.
    5.  From the speed-time curve, find the deceleration ($\frac{dN}{dt}$ or $\frac{d\omega}{dt}$) at different speeds.
    6.  **To find rotational losses without knowing J:**
        *   Run the machine at a *fixed* excitation but at *different initial speeds* (e.g., 1200 RPM, 1000 RPM, 800 RPM).
        *   For each initial speed, record the speed-time curve during deceleration.
        *   Calculate the deceleration $\frac{dN}{dt}$ at a specific speed, say $N=1000$ RPM, from each of these curves.
        *   You will get different values of $\frac{dN}{dt}$ for the same speed $N=1000$ RPM, because the initial speed was different. This is because the rotational losses are not purely proportional to $N^2$.
        *   Plot these $\frac{dN}{dt}$ values against the *initial speeds*.
        *   Extrapolate to zero initial speed. The deceleration at zero speed will be primarily due to friction in bearings and brushes (constant friction loss), which is difficult to measure directly.
        *   However, the most common method uses a **single speed-time curve**.

    **Revised understanding for typical lab context:**
    The test is performed to *estimate* rotational losses. The core idea is that when power is removed, the machine decelerates due to rotational losses.

    1.  **Run the DC machine at rated speed (N_rated) with rated field excitation.** No load is applied to the armature.
    2.  **Suddenly disconnect the armature supply.**
    3.  **Record speed (N) at regular time intervals (Δt).**
    4.  **Plot the speed-time curve (N vs. t).**
    5.  **Calculate the deceleration $\frac{dN}{dt}$** at various speeds by finding the slope of the tangent to the curve at those points.
    6.  **Assume a relationship for rotational losses:**
        *   If $P_{rotational} = C_1 \omega$ (linear friction): $J \frac{d\omega}{dt} = -C_1$
        *   If $P_{rotational} = C_2 \omega^2$ (windage): $J \frac{d\omega}{dt} = -C_2 \omega$
        *   If $P_{rotational} = A + B\omega + C\omega^2$ (general form): $J \frac{d\omega}{dt} = -(A + B\omega + C\omega^2)$

    In many practical lab scenarios, the test is used to determine the constants of the rotational loss equation $P_{rotational} = A + B\omega + C\omega^2$.

    **Simplified Approach (Common in undergraduate labs):**
    The test aims to find the rotational losses at rated speed. By measuring the deceleration, and knowing the moment of inertia, we can calculate the torque that causes this deceleration.

    $T_{rotational} = J \times (\text{deceleration})$
    $P_{rotational} = T_{rotational} \times \omega = J \times \omega \times (\text{deceleration})$

    **A common simplified interpretation for lab reports is to assume that the total opposing torque is proportional to speed squared (or some power of speed) and that the test allows us to find the value of this torque at rated speed.**

    The key is to understand that the energy lost per unit time is the rotational loss. This energy loss causes the deceleration.

## 4. Experimental Setup

*   **DC Machine (Shunt or Separately Excited):** The machine under test.
*   **DC Power Supply:** To excite the field winding and/or power the armature.
*   **Rheostats:** For controlling field excitation and armature voltage (if applicable).
*   **Voltmeter:** To measure field voltage ($V_f$).
*   **Ammeter:** To measure armature current ($I_a$) and field current ($I_f$).
*   **Tachometer or Speedometer:** To measure the speed of the machine.
*   **Stopwatch:** To measure time intervals.
*   **Switch:** To suddenly disconnect the armature supply.
*   **Loading Rheostat (Optional):** Although this is a no-load test, the machine might be initially brought to speed under load conditions to simulate starting conditions, but for the retardation phase, the load is removed.

## 5. Procedure

**(Assuming a DC Shunt Motor, the procedure is similar for separately excited motors with appropriate supply to armature and field.)**

1.  **Connections:** Connect the DC shunt motor for operation. Ensure the field winding is connected to a variable DC supply through an ammeter and a rheostat. Connect the armature to the DC supply through a switch. A voltmeter is connected across the field winding, and an ammeter across the armature.
2.  **Initial Settings:** Set the field rheostat to provide rated field current (or a stable excitation) and the armature voltage to a suitable value to run the motor at or near its rated speed.
3.  **Start the Motor:** Close the armature circuit switch and adjust the field rheostat to start the motor and bring it to its rated speed (e.g., $N_{rated}$). Ensure that the armature current is minimal (no external load connected).
4.  **Stabilize Speed:** Allow the motor to run at rated speed for a short period to stabilize.
5.  **Perform Retardation:**
    *   Simultaneously open the armature circuit switch (disconnecting the armature supply) and start the stopwatch.
    *   Ensure the field excitation remains constant throughout the deceleration process.
6.  **Record Data:** Record the speed of the motor at regular time intervals (e.g., every 5 or 10 seconds). Continue recording until the motor comes to a standstill or its speed becomes very low.
7.  **Repeat (Optional but Recommended):** Repeat the test for different field excitations to study the effect of excitation on rotational losses.

## 6. Calculations and Analysis

1.  **Data Tabulation:** Create a table with columns for Time (t), Speed (N in RPM), Angular Speed ($\omega = \frac{2\pi N}{60}$ rad/s), and Deceleration ($\frac{d\omega}{dt}$ or $\frac{dN}{dt}$).
2.  **Speed-Time Curve:** Plot the recorded speed (N or $\omega$) against time (t).
3.  **Calculate Deceleration:** From the speed-time curve, determine the slope $\frac{d\omega}{dt}$ at various speeds. This can be done by drawing tangents to the curve or by using numerical differentiation methods (e.g., central difference).
    *   If using a table, you can calculate $\frac{\Delta \omega}{\Delta t}$ between consecutive readings. For better accuracy, a graphical method is preferred.
4.  **Estimate Rotational Losses:**
    *   **Method 1: Assuming Rotational Losses are Proportional to $\omega^2$**
        *   $P_{rotational} = K \omega^2$
        *   $T_{rotational} = \frac{P_{rotational}}{\omega} = K \omega$
        *   During deceleration: $J \frac{d\omega}{dt} = -T_{rotational} = -K \omega$
        *   $\frac{d\omega}{dt} = -\frac{K}{J} \omega$
        *   Plot $\frac{d\omega}{dt}$ against $\omega$. This should be a straight line passing through the origin (or close to it). The slope of this line is $-\frac{K}{J}$.
        *   If $J$ is known, $K$ can be found. Then $P_{rotational}$ can be calculated at any speed.
    *   **Method 2: More General Approach (often used to find constants $A, B, C$ for $P_{rotational} = A + B\omega + C\omega^2$)**
        *   This method is more involved and requires running the test at multiple excitations or with field short-circuited to isolate components.
        *   However, for the purpose of this lab, often the goal is to find the **rotational loss torque at a specific speed**.
        *   **If J is known:**
            $T_{rotational} = -J \frac{d\omega}{dt}$
            $P_{rotational} = T_{rotational} \times \omega = -J \omega \frac{d\omega}{dt}$
            Calculate $P_{rotational}$ at rated speed.
        *   **If J is unknown, but we assume $P_{rotational} = K \omega^2$:**
            Run the test at different field excitations. For each excitation, you get a speed-time curve.
            From the curve at rated speed, find $\frac{d\omega}{dt}$ at rated speed ($\omega_{rated}$).
            $J \frac{d\omega}{dt} = -K \omega^2$
            If you can estimate $J$ (e.g., from motor specifications or by other tests), you can find $K$.

    **Common Practical Interpretation for undergraduate labs:**
    The test is performed to determine the **rotational losses** at a particular operating condition (e.g., rated speed and field excitation). The value of $J$ is often provided or is assumed to be such that the calculation of $P_{rotational}$ is possible.

    **Let's assume we need to find rotational losses at rated speed ($N_{rated}$, $\omega_{rated}$).**
    1.  Find $\frac{d\omega}{dt}$ at $\omega_{rated}$ from the speed-time curve.
    2.  If $J$ is known: $P_{rotational, rated} = -J \times \omega_{rated} \times \left(\frac{d\omega}{dt}\right)_{rated}$.
    3.  If $J$ is not known, and the problem implies finding $K$ for $P_{rotational} = K \omega^2$:
        *   From the plot of $\frac{d\omega}{dt}$ vs. $\omega$, find the slope $m = -\frac{K}{J}$.
        *   If $J$ is known, $K = -m \times J$. Then $P_{rotational, rated} = K \omega_{rated}^2$.

    **Important Note:** The test is often used to determine the **no-load losses**. These include rotational losses and iron losses. If the field excitation is maintained constant, iron losses will also be relatively constant. Thus, $P_{no-load} \approx P_{rotational} + P_{iron}$. However, the retardation test is primarily about determining the rotational component.

## 7. Understanding Losses and Efficiency (CO3 Link)

The retardation test directly helps in achieving **CO3: Investigate the losses and efficiency in DC machines by conducting no-load tests.**

*   **Rotational Losses:** The primary output of the retardation test is the estimation of rotational losses ($P_{rotational}$) at various speeds and excitations.
*   **No-Load Test:** The retardation test is a form of a no-load test where the armature is disconnected.
*   **Efficiency Calculation:** To calculate the efficiency of a DC machine, all losses need to be known.
    Efficiency ($\eta$) = $\frac{\text{Output Power}}{\text{Output Power} + \text{Total Losses}}$
    Total Losses = Copper Losses ($I_a^2 R_a + I_f^2 R_f$) + Iron Losses + Rotational Losses

    The retardation test provides the rotational loss component, allowing for a more accurate efficiency calculation, especially at light loads.

**Example Calculation Scenario:**

Suppose you have a DC shunt motor and perform the retardation test.
*   Rated speed $N_{rated} = 1500$ RPM.
*   $\omega_{rated} = \frac{2\pi \times 1500}{60} = 50\pi$ rad/s $\approx 157.08$ rad/s.
*   From the speed-time curve, at $\omega = 157.08$ rad/s, the deceleration $\frac{d\omega}{dt} = -2.5$ rad/s².
*   The moment of inertia of the rotor is given as $J = 0.1$ kg-m².

**Calculate Rotational Losses at Rated Speed:**

$P_{rotational} = -J \omega \frac{d\omega}{dt}$
$P_{rotational} = -(0.1 \text{ kg-m}^2) \times (157.08 \text{ rad/s}) \times (-2.5 \text{ rad/s}^2)$
$P_{rotational} = 0.1 \times 157.08 \times 2.5 \text{ Watts}$
$P_{rotational} \approx 39.27 \text{ Watts}$

This value of $39.27$ W represents the rotational losses at rated speed and the specific field excitation used.

## 8. Practice Questions and Exercises

**Question 1:** What is the primary objective of conducting a retardation test on a DC machine?
**Answer:** To determine the rotational losses (friction and windage losses) of the machine.

**Question 2:** Explain the theoretical basis of the retardation test. How is the deceleration of the machine related to rotational losses?
**Answer:** When the power supply is disconnected, the machine decelerates due to opposing torques, primarily rotational losses. The equation of motion is $J \frac{d\omega}{dt} = -T_{rotational}$. Thus, rotational losses ($P_{rotational} = T_{rotational} \times \omega$) can be determined if the moment of inertia ($J$) and deceleration ($\frac{d\omega}{dt}$) are known.

**Question 3:** List the main components of rotational losses in a DC machine.
**Answer:** Frictional losses (bearings, brushes) and windage losses (air resistance).

**Question 4:** A DC shunt motor is run at 1200 RPM with rated field excitation. The armature supply is suddenly disconnected. The speed drops to 1000 RPM in 10 seconds. If the moment of inertia of the rotor is $0.2$ kg-m², calculate the average rotational loss torque during this period.
**Solution:**
*   Initial speed $N_1 = 1200$ RPM, $\omega_1 = \frac{2\pi \times 1200}{60} = 40\pi$ rad/s.
*   Final speed $N_2 = 1000$ RPM, $\omega_2 = \frac{2\pi \times 1000}{60} = \frac{100\pi}{3}$ rad/s $\approx 104.72$ rad/s.
*   Time interval $\Delta t = 10$ s.
*   Average angular deceleration $\frac{\Delta \omega}{\Delta t} = \frac{\omega_2 - \omega_1}{\Delta t} = \frac{104.72 - 40\pi}{10} = \frac{104.72 - 125.66}{10} = \frac{-20.94}{10} \approx -2.094$ rad/s².
*   The decelerating torque is $T_{deceleration} = -J \frac{\Delta \omega}{\Delta t}$.
*   The rotational loss torque is equal to this decelerating torque.
*   $T_{rotational} \approx -0.2 \text{ kg-m}^2 \times (-2.094 \text{ rad/s}^2) \approx 0.4188$ N-m.

**Question 5:** How does the retardation test contribute to understanding the efficiency of a DC machine?
**Answer:** It provides a method to estimate rotational losses, which are a significant component of total losses. Knowing all loss components ($I^2R$ losses, iron losses, and rotational losses) allows for accurate calculation of the machine's efficiency at various load conditions.

## 9. Important Points to Remember

*   The retardation test is performed on a **no-load** basis (armature disconnected).
*   **Field excitation must be maintained** during the test to ensure representative rotational losses (including core losses due to residual magnetism and windage).
*   The core principle is to measure the **deceleration rate** of the machine when power is removed.
*   The moment of inertia ($J$) of the rotating parts is crucial for calculating torques and losses accurately. If not known, assumptions about the nature of rotational losses (e.g., $P_{rotational} \propto \omega^2$) are often made, or the test is designed to determine these constants.
*   The speed-time data needs to be recorded accurately to determine the deceleration.
*   This test is a key method to identify and quantify **rotational losses**, which are essential for no-load loss determination and efficiency calculations.
*   Always ensure safety precautions are taken when working with electrical machinery.
