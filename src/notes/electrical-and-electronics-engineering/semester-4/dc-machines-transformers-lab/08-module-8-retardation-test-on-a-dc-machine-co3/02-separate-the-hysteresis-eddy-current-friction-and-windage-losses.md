---
title: "Separate the hysteresis, eddy current, friction and windage losses"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 8: Retardation test on a DC machine (CO3)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360c3"
status: "completed"
scrapedAt: "2026-05-23T16:15:26.234Z"
---
# DC Machines & Transformers Lab: Module 8 - Retardation Test on a DC Machine

## Topic: Separating Hysteresis, Eddy Current, Friction, and Windage Losses

### 1. Introduction and Relevance

This module focuses on the **Retardation Test** performed on a DC machine. The primary objective of this test is to determine the **stray losses** (also known as rotational losses or constant losses) which are generally constant over a range of loads. Specifically, we aim to separate these stray losses into their constituent components: **hysteresis loss, eddy current loss, friction loss, and windage loss**. Understanding these losses is crucial for accurately determining the efficiency of a DC machine and predicting its performance under various operating conditions. This aligns with **CO3: Investigate the losses and efficiency in DC machines by conducting no-load tests (Knowledge Level: K3)**, as the retardation test is a type of no-load test that provides insights into these specific losses.

### 2. Key Concepts and Definitions

*   **Stray Losses (Rotational Losses):** These are the losses that occur in a DC machine that are essentially constant for a given speed and excitation. They are independent of the load current. They include:
    *   **Friction and Windage Losses:** Mechanical losses due to friction in bearings, brushes, and air resistance (windage) as the machine rotates.
    *   **Core Losses (Iron Losses):** Losses occurring in the iron core of the machine due to the alternating magnetic flux. These are further divided into:
        *   **Hysteresis Loss:** Energy dissipated as heat due to the repeated magnetization and demagnetization of the iron core as the magnetic field reverses.
        *   **Eddy Current Loss:** Energy dissipated as heat due to circulating currents induced in the iron core by the alternating magnetic flux.

*   **Retardation Test:** A method used to determine the stray losses of a DC machine. It involves disconnecting the electrical supply to the armature and observing the rate at which the machine's speed decreases due to the rotational losses.

*   **Moment of Inertia (J):** A measure of an object's resistance to changes in its rotational motion. It is analogous to mass in linear motion.

*   **Torque:** A twisting force that tends to cause rotation. In this context, the rotational losses produce a retarding torque that opposes the motion.

### 3. Theory of Retardation Test

The fundamental principle behind the retardation test is based on Newton's second law of rotational motion:

$$T_{net} = J \alpha$$

Where:
*   $T_{net}$ is the net torque acting on the rotating part.
*   $J$ is the moment of inertia of the rotating part.
*   $\alpha$ is the angular acceleration ($\frac{d\omega}{dt}$).

In the retardation test, after the machine is run at a certain speed and the supply is disconnected, the only torque acting on the rotating part is the **retarding torque ($T_{stray}$)**, which is due to the stray losses. Therefore:

$$T_{stray} = J \alpha$$

The stray losses ($P_{stray}$) are related to the retarding torque and speed by:

$$P_{stray} = T_{stray} \omega$$

Substituting $T_{stray} = J \alpha$:

$$P_{stray} = J \alpha \omega$$

Where $\omega$ is the angular speed.

The core idea is to measure the speed drop at different speeds and use this data to determine the stray losses.

### 4. Procedure for Retardation Test

1.  **Setup:**
    *   Connect the DC machine as a motor.
    *   Ensure the armature is connected to a variable DC supply, and the field winding is connected to a separate DC supply (for a separately excited DC motor, which is the most common configuration for this test).
    *   Connect a voltmeter across the armature and an ammeter in series with the armature.
    *   Connect a tachometer or voltmeter to measure the speed.

2.  **Excitation:**
    *   Run the machine as a motor at its rated speed with rated voltage and no load.
    *   Alternatively, run the machine at a speed slightly above the rated speed.
    *   Maintain a constant field excitation throughout the test. This is crucial because core losses are dependent on flux, and flux is dependent on field excitation.

3.  **Observation:**
    *   Once the desired speed is reached, disconnect the armature from the supply.
    *   Simultaneously, start a stopwatch to measure the time taken for the speed to drop.
    *   Record the speed ($N$) at regular time intervals ($\Delta t$). This will be a decreasing speed.

4.  **Calculations:**
    *   **Speed Conversion:** Convert the recorded speed ($N$ in RPM) to angular speed ($\omega$ in rad/s): $\omega = \frac{2\pi N}{60}$.
    *   **Calculate Angular Acceleration ($\alpha$):** For each interval, calculate the angular acceleration: $\alpha = \frac{\Delta \omega}{\Delta t} = \frac{\omega_2 - \omega_1}{\Delta t}$. Since the speed is decreasing, $\alpha$ will be negative. The magnitude of acceleration is used in the loss calculation.
    *   **Determine Moment of Inertia (J):** This is a critical step. There are two common methods:
        *   **Method 1: Using a Flywheel (External Inertia):** If a known flywheel of moment of inertia $J_{flywheel}$ is attached to the machine shaft, the total moment of inertia is $J = J_{machine} + J_{flywheel}$. This method requires knowing the moment of inertia of the machine itself.
        *   **Method 2: Using a Known Load (e.g., armature resistance):** If the armature resistance ($R_a$) is known, and if the machine is run as a generator and allowed to decelerate, then the armature current during deceleration is $I_a = \frac{V_{back\_emf}}{R_a} = \frac{k\omega}{R_a}$. The torque due to this current is $T_{load} = k I_a = k \frac{k\omega}{R_a} = \frac{k^2 \omega}{R_a}$. This torque is an additional retarding torque. The equation becomes $T_{stray} + T_{load} = J \alpha$, or $T_{stray} = J \alpha - T_{load}$. This method is less common for directly separating losses.
        *   **Method 3: Direct Calculation of $J$ (if possible):** In some lab setups, the moment of inertia of the armature can be approximated or calculated based on its physical dimensions and material. However, this is often not practical in a standard lab.
        *   **Method 4: A Priori Knowledge or Calibration:** Often, the moment of inertia of the machine's rotor is known from the manufacturer's specifications or has been determined in a previous experiment.

    *   **Calculate Stray Losses ($P_{stray}$):** Using $P_{stray} = J \alpha \omega$, calculate the stray losses at different speeds.
    *   **Plotting Stray Losses vs. Speed:** Plot the calculated stray losses against the corresponding speeds (or $\omega$).

### 5. Separating Hysteresis, Eddy Current, Friction, and Windage Losses

The retardation test directly gives the total stray losses ($P_{stray}$), which are the sum of mechanical losses ($P_{mech} = P_{friction} + P_{windage}$) and core losses ($P_{core} = P_{hysteresis} + P_{eddy\_current}$).

$$P_{stray} = P_{friction} + P_{windage} + P_{hysteresis} + P_{eddy\_current}$$

To separate these, we exploit their dependence on speed and flux (which is kept constant by constant field excitation).

*   **Mechanical Losses ($P_{mech}$):** Friction and windage losses are primarily dependent on speed. For a DC machine:
    *   $P_{friction} \propto N$ (approximately) or $P_{friction} \propto \omega$
    *   $P_{windage} \propto N^2$ (approximately) or $P_{windage} \propto \omega^2$
    *   Therefore, $P_{mech} = A\omega + B\omega^2$, where A and B are constants.

*   **Core Losses ($P_{core}$):**
    *   **Hysteresis Loss ($P_{hysteresis}$):** This loss depends on the frequency of flux reversal and the maximum flux density. Since the speed is decreasing, the frequency of flux reversal also decreases. However, for a constant excitation, the flux density is assumed constant. Thus, hysteresis loss is proportional to the frequency of flux reversal. Since frequency is directly proportional to speed:
        $P_{hysteresis} \propto f \propto N \propto \omega$
    *   **Eddy Current Loss ($P_{eddy\_current}$):** This loss depends on the square of the frequency of flux reversal and the square of the flux density. For constant excitation, flux density is constant. Thus, eddy current loss is proportional to the square of the frequency:
        $P_{eddy\_current} \propto f^2 \propto N^2 \propto \omega^2$

Combining these:

$$P_{stray} = (P_{friction} + P_{hysteresis}) + (P_{windage} + P_{eddy\_current})$$
$$P_{stray} = (A'\omega) + (B'\omega^2)$$

Where $A'$ represents the sum of constants related to friction and hysteresis, and $B'$ represents the sum of constants related to windage and eddy current losses.

**Method of Separation:**

1.  **Conduct Retardation Test:** Obtain values of $P_{stray}$ at different speeds ($\omega$).
2.  **Plot $P_{stray}$ vs. $\omega$:** Plot the experimental data.
3.  **Plot $P_{stray}/\omega$ vs. $\omega$:** Divide the stray losses by the speed and plot it against speed.
    From $P_{stray} = A'\omega + B'\omega^2$, dividing by $\omega$:
    $\frac{P_{stray}}{\omega} = A' + B'\omega$
    This is a linear equation of the form $y = mx + c$, where:
    *   $y = \frac{P_{stray}}{\omega}$
    *   $x = \omega$
    *   $m = B'$ (slope)
    *   $c = A'$ (y-intercept)

    Plotting $\frac{P_{stray}}{\omega}$ against $\omega$ will yield a straight line.
    *   The **y-intercept ($A'$)** of this line represents the sum of friction and hysteresis losses per unit speed ($P_{friction}/\omega + P_{hysteresis}$).
    *   The **slope ($B'$)** of this line represents the constant related to windage and eddy current losses ($B_{windage} + B_{eddy\_current}$).

4.  **Further Separation:**
    *   **Mechanical Losses vs. Core Losses:** To separate mechanical losses from core losses, one can conduct a similar retardation test but with the field winding open-circuited (or at very low excitation). In this case, the core losses will be significantly reduced or zero, and the observed losses will be primarily mechanical. However, this is not always practical.
    *   **A More Common Approach:** After obtaining $A'$ and $B'$, we need to make an assumption or conduct another experiment to separate these components.
        *   **Assuming Hysteresis and Windage Dependence:**
            *   If we assume $P_{friction} = C_1 N$ and $P_{windage} = C_2 N^2$, then $P_{mech} = C_1 \omega + C_2 \omega^2$.
            *   If we assume $P_{hysteresis} = C_3 N$ and $P_{eddy} = C_4 N^2$, then $P_{core} = C_3 \omega + C_4 \omega^2$.
            *   So, $P_{stray} = (C_1+C_3)\omega + (C_2+C_4)\omega^2$.
            *   $A' = C_1 + C_3$
            *   $B' = C_2 + C_4$

        *   **Using a Single-Phase Transformer Model (Analogous Concept):** While not directly applicable to the DC machine retardation test for this separation, for transformers, the no-load losses (core losses) are separated from the load losses. Core losses are mainly constant with load. Here, we are dealing with speed-dependent losses.

        *   **The Standard Method for DC Machines:** Conduct the retardation test at *different field excitations*.
            *   **Experiment 1: Rated Excitation:** Conduct the retardation test at rated field current. This gives $P_{stray1} = (P_{friction} + P_{hysteresis, rated}) + (P_{windage} + P_{eddy\_current, rated})$.
            *   **Experiment 2: Reduced Excitation (e.g., half rated field current):** Conduct the retardation test at a reduced field current. This will result in lower flux density ($B$).
                *   $P_{friction}$ and $P_{windage}$ will remain approximately the same (assuming speed range is similar).
                *   $P_{hysteresis}$ will decrease significantly as $B$ decreases ($P_{hysteresis} \propto B^{1.6}$ to $B^2$).
                *   $P_{eddy\_current}$ will decrease even more significantly as $B$ decreases ($P_{eddy\_current} \propto B^2$).

            Let's assume $P_{stray} = P_{mech} + P_{core}$.
            $P_{mech} = A'\omega$ (simplification for illustration: considering friction and windage as linear with speed for initial separation)
            $P_{core} = P_{hysteresis} + P_{eddy\_current}$
            $P_{hysteresis} \propto B \omega$ (approximately)
            $P_{eddy\_current} \propto B^2 \omega^2$ (approximately)

            Let $P_{stray}(\omega, B) = A'\omega + C_1 B \omega + C_2 B^2 \omega^2$.

            This approach becomes complex to solve analytically without further assumptions. A more practical lab approach often relies on the plotting method and then making informed assumptions.

**Practical Approach for Separation in the Lab:**

1.  **Perform Retardation Test:** Obtain $P_{stray}$ values at different speeds ($\omega$) for a *fixed rated excitation*.
2.  **Plot $\frac{P_{stray}}{\omega}$ vs. $\omega$**: This gives $A'$ and $B'$.
    *   $P_{stray} = A'\omega + B'\omega^2$
3.  **Assume Mechanical Losses:** Typically, mechanical losses ($P_{friction} + P_{windage}$) are assumed to be approximately proportional to speed, or a combination of speed and speed squared. A common simplification is to assume they follow $P_{mech} = C_m \omega^n$, where $n$ is typically between 1 and 2.
    *   **If we assume $P_{friction} \propto \omega$ and $P_{windage} \propto \omega^2$, then $P_{mech} = A_m \omega + B_m \omega^2$.**
    *   **And core losses $P_{core} = A_c \omega + B_c \omega^2$.**
    *   Then $A' = A_m + A_c$ and $B' = B_m + B_c$.

    To separate, we might need another experiment or make an assumption about the ratio of $A_m$ to $A_c$ or $B_m$ to $B_c$.

    **A common simplified approach in labs is to consider the losses at the lowest speed as predominantly mechanical, and then extrapolate.** However, this is not rigorous.

    **Textbook Approach (e.g., Bimbhra, Kothari & Nagrath):**
    They often describe the retardation test to find total stray losses. The separation of individual components usually requires additional assumptions or experiments.

    **Example Method (as described in some lab manuals):**
    *   Conduct retardation test at rated excitation. Plot $\frac{P_{stray}}{\omega}$ vs. $\omega$. Obtain $A'$ and $B'$.
    *   **Hypothesis:** Assume mechanical losses ($P_{mech}$) are roughly proportional to speed up to moderate speeds, i.e., $P_{mech} \approx k \omega$. Core losses ($P_{core}$) are proportional to $\omega$ (hysteresis) and $\omega^2$ (eddy currents), so $P_{core} = A_c \omega + B_c \omega^2$.
    *   Then $P_{stray} = k\omega + A_c \omega + B_c \omega^2 = (k+A_c)\omega + B_c \omega^2$.
    *   So, $A' = k + A_c$ and $B' = B_c$.

    To separate $k$ and $A_c$, we need another piece of information.

    **Alternative Approach - Speed Variation:**
    1.  Perform the retardation test at rated field current ($I_f$) and record speed vs. time. Calculate $P_{stray1}$ at various speeds.
    2.  Repeat the retardation test at a *reduced* field current ($0.8 I_f$). Record speed vs. time. Calculate $P_{stray2}$ at various speeds.
    3.  Since $P_{mech}$ is largely independent of field current (for constant speed), and $P_{core}$ is dependent on flux (hence field current):
        *   $P_{stray1}(\omega) = P_{mech}(\omega) + P_{core1}(\omega)$
        *   $P_{stray2}(\omega) = P_{mech}(\omega) + P_{core2}(\omega)$

        Subtracting: $P_{stray1}(\omega) - P_{stray2}(\omega) = P_{core1}(\omega) - P_{core2}(\omega)$.
        This difference gives the reduction in core losses due to the reduced excitation.

        Now, let's assume $P_{mech} = A\omega + B\omega^2$ and $P_{core} = C\omega + D\omega^2$.
        Then $P_{stray}(\omega) = (A+C)\omega + (B+D)\omega^2$.
        Let $A' = A+C$ and $B' = B+D$.

        We can get $A'$ and $B'$ from the $\frac{P_{stray}}{\omega}$ vs. $\omega$ plot for each excitation.
        *   For rated excitation: $A'_1 = A+C_1$, $B'_1 = B+D_1$. (Flux is high)
        *   For reduced excitation: $A'_2 = A+C_2$, $B'_2 = B+D_2$. (Flux is low)

        *   Subtracting the equations:
            $A'_1 - A'_2 = C_1 - C_2$
            $B'_1 - B'_2 = D_1 - D_2$

        We know that $C \propto B$ and $D \propto B^2$. If field current is proportional to flux, then $B = k I_f$.
        Let $I_{f1}$ be rated current and $I_{f2}$ be reduced current.
        $C_1 \approx C_0 B_1$, $C_2 \approx C_0 B_2$. $C_1-C_2 = C_0 (B_1-B_2)$.
        $D_1 \approx D_0 B_1^2$, $D_2 \approx D_0 B_2^2$. $D_1-D_2 = D_0 (B_1^2-B_2^2)$.

        We still have unknowns like $A$, $C_0$, $D_0$, $B_1$, $B_2$. This separation is mathematically intensive and often simplified in labs.

    **Common Lab Simplification for Separation:**

    The most common method taught and practiced for separating these losses from the retardation test data in a typical undergraduate lab setting is to plot $\frac{P_{stray}}{\omega}$ vs. $\omega$.

    *   **From the plot of $\frac{P_{stray}}{\omega}$ vs. $\omega$, we obtain $A'$ and $B'$**.
    *   $P_{stray} = A'\omega + B'\omega^2$.

    **Assumptions to proceed:**
    *   **Friction and Windage ($P_{mech}$):** Often assumed to be a function of speed, e.g., $P_{mech} = k_1 \omega + k_2 \omega^2$.
    *   **Hysteresis Loss ($P_{hysteresis}$):** Proportional to speed for constant flux, $P_{hysteresis} = k_3 \omega$.
    *   **Eddy Current Loss ($P_{eddy}$):** Proportional to square of speed for constant flux, $P_{eddy} = k_4 \omega^2$.

    So, $P_{stray} = (k_1 + k_3)\omega + (k_2 + k_4)\omega^2$.
    $A' = k_1 + k_3$
    $B' = k_2 + k_4$

    **To separate these, a common practical approach is to run the retardation test at *two different field excitations*.**

    **Method using two excitations:**
    1.  **Rated Excitation:** Obtain $A'_1$ and $B'_1$.
        $A'_1 = k_1 + k_3(B_{rated})$
        $B'_1 = k_2 + k_4(B_{rated}^2)$
    2.  **Reduced Excitation (e.g., 80%):** Obtain $A'_2$ and $B'_2$.
        $A'_2 = k_1 + k_3(0.8 B_{rated})$
        $B'_2 = k_2 + k_4((0.8 B_{rated})^2)$

    We have 4 equations and 6 unknowns ($k_1, k_2, k_3, k_4, B_{rated}, 0.8 B_{rated}$). This is still insufficient.

    **The most common simplification for educational labs:**
    *   Perform the retardation test at *rated excitation*.
    *   Obtain $A'$ and $B'$.
    *   Assume:
        *   Friction loss is roughly constant or proportional to speed.
        *   Windage loss is proportional to speed squared.
        *   Hysteresis loss is proportional to speed.
        *   Eddy current loss is proportional to speed squared.

    *   **Then, the linear component ($A'\omega$) consists of:** Friction loss and Hysteresis loss.
    *   **And the quadratic component ($B'\omega^2$) consists of:** Windage loss and Eddy current loss.

    **A practical approximation often used:**
    *   Assume the friction and windage losses are roughly the same as those measured when the field is *very weak or zero* (if feasible).
    *   If the field is very weak, core losses are negligible. So, a retardation test with zero field would primarily give mechanical losses.
    *   $P_{mech} = A_m \omega + B_m \omega^2$.
    *   $P_{core} = A_c \omega + B_c \omega^2$.
    *   $P_{stray} = (A_m + A_c) \omega + (B_m + B_c) \omega^2$.
    *   $A' = A_m + A_c$
    *   $B' = B_m + B_c$

    If we can determine $A_m$ and $B_m$ (from a test with zero excitation), then:
    *   $A_c = A' - A_m$
    *   $B_c = B' - B_m$

    **So, the separation requires performing the retardation test at rated excitation and ideally at zero or very low excitation.**

    **If only one test (rated excitation) is performed:**
    *   We get $A'$ and $B'$.
    *   $P_{stray} = A'\omega + B'\omega^2$.
    *   The typical way to report is:
        *   Hysteresis + Friction Loss $\approx A'\omega$
        *   Eddy Current + Windage Loss $\approx B'\omega^2$
    *   Further separation usually isn't expected without more data or assumptions.

### 6. Practical Considerations and Precautions

*   **Constant Excitation:** Ensure the field excitation is kept constant throughout the test. Fluctuations in field current will alter the flux and hence the core losses, invalidating the results.
*   **Moment of Inertia (J):** Accurate determination of $J$ is crucial. If it's not provided, this is a significant limitation.
*   **Speed Range:** Conduct the test over a sufficient speed range to get reliable data points for the plot.
*   **Temperature:** Ensure the machine operates at a stable temperature.
*   **Braking Torque:** The armature circuit should be properly disconnected to ensure zero electrical load during deceleration.
*   **Data Recording:** Record speed and time accurately. Use a stopwatch and a reliable speed measuring device.
*   **Assumptions:** Be aware of the assumptions made, especially when separating losses into individual components.

### 7. Worked Example (Illustrative)

**Problem:** A retardation test was conducted on a DC machine. The following data was obtained:
*   Moment of Inertia of the rotor, $J = 0.5 \, kg-m^2$.
*   Field excitation was kept constant at rated value.
*   Speed vs. Time data during deceleration:

| Time (s) | Speed (RPM) |
| :------- | :---------- |
| 0        | 1500        |
| 10       | 1450        |
| 20       | 1402        |
| 30       | 1355        |
| 40       | 1308        |
| 50       | 1262        |

**Solution:**

1.  **Convert speed to rad/s ($\omega$) and calculate $\alpha$:**

    | Time (s) | Speed (RPM) | $\omega$ (rad/s) | $\Delta \omega$ (rad/s) | $\Delta t$ (s) | $\alpha$ (rad/s$^2$) |
    | :------- | :---------- | :--------------- | :---------------------- | :------------- | :------------------ |
    | 0        | 1500        | 157.08           | -                       | -              | -                   |
    | 10       | 1450        | 151.84           | -8.73                   | 10             | -0.873              |
    | 20       | 1402        | 146.81           | -5.03                   | 10             | -0.503              |
    | 30       | 1355        | 141.89           | -4.92                   | 10             | -0.492              |
    | 40       | 1308        | 137.00           | -4.89                   | 10             | -0.489              |
    | 50       | 1262        | 132.15           | -4.85                   | 10             | -0.485              |

    *Note: We are using the average speed for each interval to calculate losses.* Let's refine calculation using average speed for intervals.

    | Interval (s) | Avg. Speed (RPM) | Avg. $\omega$ (rad/s) | $\Delta \omega$ (rad/s) | $\Delta t$ (s) | Avg. $\alpha$ (rad/s$^2$) | $P_{stray} = J \alpha \omega$ (W) | $P_{stray}/\omega$ (W/(rad/s)) |
    | :----------- | :--------------- | :-------------------- | :---------------------- | :------------- | :------------------------ | :-------------------------------- | :------------------------------- |
    | 0-10         | 1475             | 154.46                | -8.73                   | 10             | -0.873                    | $0.5 \times (-0.873) \times 154.46 = -67.26$ | $-0.435$                         |
    | 10-20        | 1426             | 149.32                | -5.03                   | 10             | -0.503                    | $0.5 \times (-0.503) \times 149.32 = -37.50$ | $-0.251$                         |
    | 20-30        | 1378.5           | 144.35                | -4.92                   | 10             | -0.492                    | $0.5 \times (-0.492) \times 144.35 = -35.50$ | $-0.246$                         |
    | 30-40        | 1331.5           | 139.40                | -4.89                   | 10             | -0.489                    | $0.5 \times (-0.489) \times 139.40 = -34.07$ | $-0.244$                         |
    | 40-50        | 1285             | 134.57                | -4.85                   | 10             | -0.485                    | $0.5 \times (-0.485) \times 134.57 = -32.64$ | $-0.242$                         |

    *Note: The negative sign for losses is just a consequence of the formula $P=T\omega$ where $T$ is retarding torque and $\alpha$ is negative. We are interested in the magnitude of losses.*

    Let's use the magnitude of $\alpha$ and compute the power loss.

    | Interval (s) | Avg. $\omega$ (rad/s) | Avg. $|\alpha|$ (rad/s$^2$) | $P_{stray}$ (W) (Magnitude) | $P_{stray}/\omega$ (W/(rad/s)) |
    | :----------- | :-------------------- | :------------------------ | :-------------------------- | :------------------------------- |
    | 0-10         | 154.46                | 0.873                     | $0.5 \times 0.873 \times 154.46 = 67.26$ | $0.435$                          |
    | 10-20        | 149.32                | 0.503                     | $0.5 \times 0.503 \times 149.32 = 37.50$ | $0.251$                          |
    | 20-30        | 144.35                | 0.492                     | $0.5 \times 0.492 \times 144.35 = 35.50$ | $0.246$                          |
    | 30-40        | 139.40                | 0.489                     | $0.5 \times 0.489 \times 139.40 = 34.07$ | $0.244$                          |
    | 40-50        | 134.57                | 0.485                     | $0.5 \times 0.485 \times 134.57 = 32.64$ | $0.242$                          |

2.  **Plot $\frac{P_{stray}}{\omega}$ vs. $\omega$:**
    Plot points (154.46, 0.435), (149.32, 0.251), (144.35, 0.246), (139.40, 0.244), (134.57, 0.242).
    *Note: The points for lower speeds (149.32 rad/s onwards) seem to cluster around a line, while the first point is an outlier.* This could indicate that the assumption of constant losses is less valid at very high speeds where windage might increase more rapidly. Let's assume for a moment the data is more linear from the 10s mark.

    Using points from 10s onwards:
    (149.32, 0.251) and (134.57, 0.242)
    Slope ($B'$) = $\frac{0.251 - 0.242}{149.32 - 134.57} = \frac{0.009}{14.75} \approx 0.00061$
    Y-intercept ($A'$): $0.251 = A' + 0.00061 \times 149.32 \implies A' = 0.251 - 0.091 = 0.160$

    So, the equation is $\frac{P_{stray}}{\omega} = 0.160 + 0.00061 \omega$.
    And $P_{stray} = 0.160 \omega + 0.00061 \omega^2$.

    This means:
    *   $A' = 0.160 \, W/(rad/s)$. This represents (Friction loss/$\omega$ + Hysteresis loss/$\omega$).
    *   $B' = 0.00061 \, W/(rad/s)^2$. This represents (Windage loss/$\omega^2$ + Eddy current loss/$\omega^2$).

    **Separation of Losses (Requires additional test/assumption):**

    If we assume a second retardation test was performed with field open (or very low field), yielding $P_{mech}/\omega = A_m + B_m \omega$, and we found $A_m = 0.100$ and $B_m = 0.00030$.

    Then:
    *   $A' = A_m + A_c \implies 0.160 = 0.100 + A_c \implies A_c = 0.060 \, W/(rad/s)$.
    *   $B' = B_m + B_c \implies 0.00061 = 0.00030 + B_c \implies B_c = 0.00031 \, W/(rad/s)^2$.

    **Individual Loss Components at rated speed ($\omega = 157.08$ rad/s):**
    *   Friction Loss ($P_{friction}$) $\approx A_m \omega = 0.100 \times 157.08 \approx 15.71 \, W$.
    *   Windage Loss ($P_{windage}$) $\approx B_m \omega^2 = 0.00030 \times (157.08)^2 \approx 7.35 \, W$.
    *   Hysteresis Loss ($P_{hysteresis}$) $\approx A_c \omega = 0.060 \times 157.08 \approx 9.42 \, W$.
    *   Eddy Current Loss ($P_{eddy}$) $\approx B_c \omega^2 = 0.00031 \times (157.08)^2 \approx 7.60 \, W$.

    Total Stray Loss $P_{stray} = 15.71 + 7.35 + 9.42 + 7.60 = 40.08 \, W$.
    Using formula $P_{stray} = 0.160 \omega + 0.00061 \omega^2 = 0.160(157.08) + 0.00061(157.08)^2 = 25.13 + 14.98 = 40.11 \, W$. (Matches)

### 8. Practice Questions

1.  **What are the components of stray losses in a DC machine?**
    *   **Answer:** Friction, windage, hysteresis, and eddy current losses.

2.  **Explain the principle of the retardation test.**
    *   **Answer:** It is based on Newton's second law of rotational motion ($T_{net} = J\alpha$). By disconnecting the electrical supply, the machine decelerates due to retarding torques from stray losses. Measuring the speed drop over time allows calculation of these losses.

3.  **How are the stray losses plotted to facilitate separation?**
    *   **Answer:** By plotting $P_{stray}/\omega$ versus $\omega$. This results in a linear relationship of the form $y = mx + c$, where $y = P_{stray}/\omega$, $x = \omega$, $m = B'$, and $c = A'$.

4.  **What do the intercept and slope of the $P_{stray}/\omega$ vs. $\omega$ plot represent?**
    *   **Answer:** The intercept ($A'$) represents the sum of friction and hysteresis losses per unit speed, and the slope ($B'$) represents the sum of windage and eddy current losses per unit speed squared.

5.  **What is the primary difficulty in separating individual stray losses (friction, windage, hysteresis, eddy current) using only one retardation test?**
    *   **Answer:** A single test at rated excitation provides the total stray losses as a function of speed. To isolate the components, which have different speed dependencies and also depend on flux (field excitation), further experiments or assumptions are required. Typically, conducting the test at different field excitations is needed.

### 9. Important Points to Remember

*   **Constant Excitation:** The retardation test is valid only if the field excitation (and hence flux) is kept constant during the entire deceleration process.
*   **Moment of Inertia:** The accuracy of the results heavily depends on the accurate knowledge of the moment of inertia ($J$).
*   **Plotting Method:** The plot of $P_{stray}/\omega$ vs. $\omega$ is the key to separating losses into a linear component (friction + hysteresis) and a quadratic component (windage + eddy current).
*   **Further Separation:** Complete separation into all four individual components usually requires performing the retardation test at different field strengths or making reasonable assumptions based on the machine's characteristics.
*   **Educational Context:** In many labs, the primary goal is to determine the total stray losses and their speed dependence, represented by the $A'\omega + B'\omega^2$ relationship, rather than a precise individual separation of all four.
