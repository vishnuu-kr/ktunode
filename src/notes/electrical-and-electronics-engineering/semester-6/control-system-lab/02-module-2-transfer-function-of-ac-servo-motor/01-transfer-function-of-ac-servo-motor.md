---
title: "Transfer function of A.C. Servo motor."
subject: "CONTROL SYSTEM LAB"
module: "Module 2: Transfer function of A.C. Servo motor."
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36755"
status: "completed"
scrapedAt: "2026-05-23T16:25:02.989Z"
---
# CONTROL SYSTEM LAB

## Module 2: Transfer Function of A.C. Servo Motor

### Topic: Transfer Function of A.C. Servo Motor

---

### 1. Introduction to A.C. Servo Motors

#### 1.1 What is a Servo Motor?

*   **Definition:** A servo motor is a rotary or linear actuator that allows for precise control of angular or linear position, velocity, and acceleration.
*   **Key Characteristics:**
    *   Closed-loop control system.
    *   Requires a feedback mechanism (e.g., potentiometer, encoder).
    *   Designed for accurate and responsive movements.
    *   Used extensively in robotics, automation, aerospace, and industrial applications.

#### 1.2 Types of Servo Motors

*   **D.C. Servo Motors:** Generally simpler, often used in lower power applications.
*   **A.C. Servo Motors:** More robust, higher power density, suitable for demanding applications. This module focuses on A.C. servo motors.

#### 1.3 A.C. Servo Motor Construction and Operation

*   **Construction:**
    *   **Stator:** Contains windings that create a rotating magnetic field when supplied with AC voltages. Typically a two-phase stator winding.
    *   **Rotor:** Usually a squirrel cage rotor or a wound rotor. The rotating magnetic field from the stator induces currents in the rotor, generating torque.
    *   **Control Winding & Fixed Winding:** AC servo motors are typically two-phase motors.
        *   **Fixed Winding (Reference Winding):** Supplied with a constant AC voltage (e.g., from a constant AC excitation source).
        *   **Control Winding:** Supplied with a variable AC voltage, which is controlled by the servo amplifier. The phase and amplitude of this voltage determine the motor's speed and torque.
*   **Operation:**
    1.  A control signal (e.g., from a controller) is amplified and used to drive the control winding.
    2.  The control voltage is typically 90 degrees out of phase with the reference voltage.
    3.  The interaction between the magnetic fields produced by the stator windings generates a torque on the rotor.
    4.  The torque is proportional to the product of the control voltage and the reference voltage, and also depends on the phase relationship. For typical operation, the phase is fixed at 90 degrees.
    5.  The rotor rotates, and its position/velocity is often measured by a feedback sensor.
    6.  The feedback is compared to the desired setpoint, and the error is used to adjust the control voltage, thus closing the loop.

#### 1.4 Importance of Transfer Function

*   **Definition:** A transfer function represents the relationship between the output and input of a linear time-invariant (LTI) system in the Laplace domain.
*   **Purpose:**
    *   Allows for mathematical modeling and analysis of system dynamics.
    *   Essential for designing controllers and predicting system behavior.
    *   Facilitates simulation of system performance.
    *   Crucial for stability analysis and performance evaluation.
    *   Enables system synthesis (designing controllers to meet specifications).

---

### 2. Mathematical Modeling of an A.C. Servo Motor

*   This section focuses on deriving the transfer function from fundamental principles.

#### 2.1 Electromechanical Energy Conversion

*   **Torque Generation:** The torque produced by a two-phase AC servo motor is approximately proportional to the product of the instantaneous voltages applied to the control and fixed windings and the sine of the phase difference between them. For typical servo operation where the phase difference is maintained at 90 degrees, the torque ($T$) is given by:
    $T \approx k_t \cdot V_c \cdot V_{ref} \cdot \sin(\delta)$
    where:
    *   $k_t$ is the torque constant.
    *   $V_c$ is the control winding voltage.
    *   $V_{ref}$ is the reference winding voltage (assumed constant).
    *   $\delta$ is the phase difference.

*   **Linearization:** For small signal analysis, we consider deviations from an operating point. Let $V_c = V_{c0} + v_c$ and $\delta = \delta_0 + \delta'$. Assuming the motor is operated around a nominal point where $\delta_0 = 90^\circ$, then $\sin(\delta) = \sin(90^\circ + \delta') = \cos(\delta')$. For small $\delta'$, $\cos(\delta') \approx 1$.
    Then, $T \approx k_t \cdot V_{ref} \cdot (V_{c0} + v_c) \cdot \cos(\delta')$.
    Assuming $V_{c0}$ is the voltage for zero speed and $\delta_0$ is adjusted to maintain operation, the torque can be linearized as:
    $T = K_a \cdot v_c$
    where $K_a$ is the **torque constant** (or control voltage to torque sensitivity). This constant incorporates $k_t$, $V_{ref}$, and the phase relationship.

#### 2.2 Mechanical Dynamics

*   The rotor of the servo motor experiences torque and inertia, and is subjected to damping forces.
*   The equation of motion for the rotor is given by Newton's second law for rotation:
    $J \frac{d^2\theta}{dt^2} + B \frac{d\theta}{dt} = T$
    where:
    *   $J$ is the moment of inertia of the rotor and connected load.
    *   $B$ is the viscous friction coefficient.
    *   $\theta$ is the angular displacement of the rotor.
    *   $\frac{d\theta}{dt}$ is the angular velocity ($\omega$).
    *   $T$ is the net torque acting on the rotor.

*   Substituting the linearized torque equation $T = K_a \cdot v_c$:
    $J \frac{d^2\theta}{dt^2} + B \frac{d\theta}{dt} = K_a v_c$

#### 2.3 Developing the Transfer Function

*   We want to find the transfer function from the control voltage $v_c(t)$ to the angular displacement $\theta(t)$.
*   Take the Laplace transform of the mechanical dynamics equation:
    $L\{J \frac{d^2\theta}{dt^2}\} + L\{B \frac{d\theta}{dt}\} = L\{K_a v_c\}$
    $J[s^2 \Theta(s) - s\theta(0) - \frac{d\theta(0)}{dt}] + B[s \Theta(s) - \theta(0)] = K_a V_c(s)$

*   Assuming zero initial conditions ($\theta(0) = 0$ and $\frac{d\theta(0)}{dt} = 0$):
    $J s^2 \Theta(s) + B s \Theta(s) = K_a V_c(s)$

*   Factor out $\Theta(s)$:
    $\Theta(s) (J s^2 + B s) = K_a V_c(s)$

*   The transfer function $G(s) = \frac{\Theta(s)}{V_c(s)}$ is:
    $G(s) = \frac{K_a}{J s^2 + B s}$

*   This can be further simplified by factoring out $s$:
    $G(s) = \frac{K_a}{s(J s + B)}$

*   **Standard Form:** Often, the transfer function is expressed in terms of time constants. Let $\tau_m = J/B$ (mechanical time constant).
    $G(s) = \frac{K_a/B}{s((\frac{J}{B}) s + 1)}$
    $G(s) = \frac{K_m}{s(\tau_m s + 1)}$
    where $K_m = K_a/B$ is the **motor velocity constant** or **gain**.

*   **Interpretation of the Transfer Function:**
    *   **Pole at s=0:** Indicates that the system is inherently capable of integrating the input, meaning a constant input voltage will result in a ramp output (constant velocity). This is characteristic of a motor.
    *   **Pole at s = -1/$\tau_m$:** Represents the natural response of the rotor's inertia and damping.

---

### 3. Experimental Determination of AC Servo Motor Parameters

*   **Objective:** To find the values of $K_m$ and $\tau_m$ (or $K_a$, $J$, $B$) experimentally.
*   **Alignment with Course Outcomes:**
    *   **CO1:** Identify and conduct suitable experiments to determine the parameters to model a physical system. (K3) - This section directly addresses this outcome.
    *   **CO2:** Conduct suitable experiments and determine the performance specifications. (K3) - The parameters derived are crucial for performance analysis.
    *   **CO3:** Analyze a linear continuous time system model using simulation tools. (K3) - Once parameters are known, the transfer function can be used in simulations.

#### 3.1 Methods for Parameter Estimation

**Method 1: Step Response Analysis (Commonly used in labs)**

1.  **Experimental Setup:**
    *   AC servo motor coupled to a load (or without additional load).
    *   Power amplifier to provide control voltage.
    *   Function generator to supply the step input.
    *   Data acquisition system (e.g., oscilloscope, DAQ card) to record motor position ($\theta$) and control voltage ($v_c$) vs. time.
    *   A feedback sensor is usually integrated into the servo motor.

2.  **Procedure:**
    *   Apply a step input voltage $V_{step}$ to the control winding of the motor.
    *   Record the angular position $\theta(t)$ of the motor shaft as a function of time.
    *   Ideally, the step input should be applied when the motor is at rest (zero initial velocity and position).

3.  **Analysis of Step Response:**
    *   The transfer function is $G(s) = \frac{\Theta(s)}{V_c(s)} = \frac{K_m}{s(\tau_m s + 1)}$.
    *   The output $\theta(t)$ for a step input $V_{step} \cdot u(t)$ is:
        $\Theta(s) = \frac{K_m}{s(\tau_m s + 1)} \cdot \frac{V_{step}}{s} = \frac{K_m V_{step}}{s^2(\tau_m s + 1)}$
    *   Using partial fraction expansion or inverse Laplace transform tables, the time-domain response is:
        $\theta(t) = K_m V_{step} [t - \tau_m (1 - e^{-t/\tau_m})]$
        $\theta(t) = K_m V_{step} t - K_m V_{step} \tau_m (1 - e^{-t/\tau_m})$
    *   Let $K_{final} = K_m V_{step} \tau_m$. This is related to the final position after some time.
    *   The steady-state velocity is: $\omega_{ss} = \lim_{t \to \infty} \frac{d\theta}{dt} = \lim_{s \to 0} s \cdot s\Theta(s) = \lim_{s \to 0} s^2 \frac{K_m V_{step}}{s^2(\tau_m s + 1)} = K_m V_{step}$.
    *   **Determining $K_m$ and $\tau_m$ from the step response:**
        *   **Steady-state velocity:** From the recorded $\theta(t)$, calculate the slope of the position curve in the steady-state region (where it becomes a ramp). This slope represents the steady-state angular velocity ($\omega_{ss}$).
            $\omega_{ss} = \frac{d\theta}{dt}_{ss}$
            From the transfer function, the steady-state velocity is $K_m V_{step}$.
            Therefore, $K_m = \frac{\omega_{ss}}{V_{step}}$.
        *   **Mechanical Time Constant ($\tau_m$):**
            *   **Method A (Using Time to Reach a Certain Percentage of Final Velocity):** The velocity is $\frac{d\theta}{dt} = K_m V_{step} e^{-t/\tau_m}$. This is incorrect.
            *   Let's re-evaluate the velocity from the transfer function $G(s) = \frac{\Theta(s)}{V_c(s)} = \frac{K_m}{s(\tau_m s + 1)}$.
            *   The velocity is $\Omega(s) = s\Theta(s) = \frac{K_m V_c(s)}{\tau_m s + 1}$.
            *   For a step input $V_c(s) = V_{step}/s$, the velocity is $\Omega(s) = \frac{K_m V_{step}}{\tau_m s + 1}$.
            *   The time-domain velocity is $\omega(t) = K_m V_{step} e^{-t/\tau_m}$.
            *   The steady-state velocity is $\omega_{ss} = K_m V_{step}$. This occurs as $t \to \infty$.
            *   The time constant $\tau_m$ is the time it takes for the velocity to decay to $e^{-1}$ (approximately 37%) of its initial value if the input was suddenly removed, or to reach $1 - e^{-1}$ (approximately 63.2%) of its final value if the input is a step. However, our derived $\omega(t)$ is decaying from an initial value (which doesn't make sense for a ramp).
            *   Let's reconsider the position equation: $\theta(t) = K_m V_{step} t - K_m V_{step} \tau_m (1 - e^{-t/\tau_m})$.
            *   The term $K_m V_{step} t$ represents a ramp, and the term $- K_m V_{step} \tau_m (1 - e^{-t/\tau_m})$ is a transient that limits the speed.
            *   **More practical way to find $\tau_m$ from step response:**
                *   Observe the position response $\theta(t)$. It starts at 0 and increases as a ramp, with a curvature that flattens out.
                *   The velocity is the slope of the $\theta(t)$ curve.
                *   The term $K_m V_{step} t$ would be a perfect ramp. The actual response $\theta(t)$ deviates from this perfect ramp due to the $\tau_m$ term.
                *   **Crucial observation:** The time constant $\tau_m$ influences how quickly the motor reaches its steady-state velocity.
                *   Consider the velocity $\omega(t) = \frac{d\theta}{dt} = K_m V_{step} e^{-t/\tau_m}$ is incorrect. The correct velocity from the transfer function is $\omega(t) = K_m V_{step} - K_m V_{step} e^{-t/\tau_m}$. This shows that velocity starts at zero and approaches $K_m V_{step}$ asymptotically. This makes sense for a step voltage.
                *   The time constant $\tau_m$ is the time it takes for the velocity to reach $1 - e^{-1}$ (approx. 63.2%) of its final value.
                *   So, find the steady-state velocity $\omega_{ss} = K_m V_{step}$.
                *   Find the time $t_{63\%}$ at which the velocity reaches $0.632 \cdot \omega_{ss}$.
                *   Then $\tau_m \approx t_{63\%}$.

        *   **Method B (Using Steady-State Velocity and Another Point):**
            *   We have $\omega_{ss} = K_m V_{step}$.
            *   At $t = \tau_m$, the velocity is $\omega(\tau_m) = K_m V_{step} (1 - e^{-1}) \approx 0.632 K_m V_{step} = 0.632 \omega_{ss}$.
            *   The position at $t=\tau_m$ is $\theta(\tau_m) = K_m V_{step} \tau_m - K_m V_{step} \tau_m (1 - e^{-1}) = K_m V_{step} \tau_m (1 - (1-e^{-1})) = K_m V_{step} \tau_m e^{-1}$.
            *   This looks complicated to extract directly from the position plot.

        *   **Method C (Using slope of position):**
            *   The velocity is the slope of the position plot.
            *   Steady-state velocity $\omega_{ss}$ is the slope of the $\theta(t)$ curve as $t \to \infty$.
            *   $K_m = \omega_{ss} / V_{step}$.
            *   Find the time $t_1$ where the slope is $0.632 \omega_{ss}$. Then $\tau_m \approx t_1$. This relies on accurately differentiating the noisy position data.

        *   **Method D (Tangential Method):**
            *   Draw a tangent to the $\theta(t)$ curve at $t=0$. This tangent would represent the trajectory if the motor had infinite speed capabilities.
            *   The slope of this tangent is $K_m V_{step}$ if the initial velocity was 0 and it instantly reached that. This is often tricky.
            *   A more common tangent method is to draw a tangent to the curve at its inflection point. The inflection point occurs where the acceleration is zero, i.e., where the velocity reaches its maximum. In our case, the velocity asymptotically approaches a value.
            *   The inflection point of $\theta(t)$ occurs when $\frac{d^2\theta}{dt^2} = 0$.
            *   $\frac{d\theta}{dt} = K_m V_{step} (1 - e^{-t/\tau_m})$
            *   $\frac{d^2\theta}{dt^2} = K_m V_{step} (- \frac{1}{\tau_m}) (-e^{-t/\tau_m}) = \frac{K_m V_{step}}{\tau_m} e^{-t/\tau_m}$.
            *   This acceleration is always positive and decays. This means the slope (velocity) is always increasing. My formula for velocity seems to be for acceleration.

            *   **Let's re-derive the response of $G(s) = \frac{K_m}{s(\tau_m s + 1)}$ to a step $V_c(s) = V_{step}/s$.**
                $\Theta(s) = \frac{K_m V_{step}}{s^2(\tau_m s + 1)}$
                Using partial fractions:
                $\Theta(s) = \frac{A}{s} + \frac{B}{s^2} + \frac{C}{\tau_m s + 1}$
                $1 = A s (\tau_m s + 1) + B (\tau_m s + 1) + C s^2$
                $s=0 \implies 1 = B(1) \implies B = 1$
                $s=-1/\tau_m \implies 1 = C (-1/\tau_m)^2 = C/\tau_m^2 \implies C = \tau_m^2$
                Equating coefficients of $s^2$: $0 = A \tau_m + C \implies A \tau_m = -C = -\tau_m^2 \implies A = -\tau_m$
                So, $\Theta(s) = \frac{-\tau_m}{s} + \frac{1}{s^2} + \frac{\tau_m^2}{\tau_m s + 1}$
                $\Theta(s) = \frac{-\tau_m}{s} + \frac{1}{s^2} + \frac{\tau_m}{s + 1/\tau_m}$
                Taking inverse Laplace Transform:
                $\theta(t) = -\tau_m + t + \tau_m e^{-t/\tau_m}$ (assuming $K_m V_{step} = 1$ for simplicity, then multiply by $K_m V_{step}$ at the end).
                $\theta(t) = (t - \tau_m) + \tau_m e^{-t/\tau_m}$
                Let's check the velocity:
                $\omega(t) = \frac{d\theta}{dt} = 1 - e^{-t/\tau_m}$ (assuming $K_m V_{step} = 1$)
                Steady-state velocity $\omega_{ss} = 1$.
                So $K_m V_{step}$ is the steady-state velocity.
                $\theta(t) = (K_m V_{step} t - K_m V_{step} \tau_m) + K_m V_{step} \tau_m e^{-t/\tau_m}$
                $\theta(t) = K_m V_{step} (t - \tau_m) + K_m V_{step} \tau_m e^{-t/\tau_m}$

            *   **How to find $\tau_m$ from this $\theta(t)$ plot?**
                *   The term $K_m V_{step} t$ represents the ideal ramp.
                *   The term $-K_m V_{step} \tau_m$ shifts this ramp down by $K_m V_{step} \tau_m$.
                *   The term $K_m V_{step} \tau_m e^{-t/\tau_m}$ is a decaying exponential offset.
                *   At $t = \tau_m$, $\theta(\tau_m) = K_m V_{step} (\tau_m - \tau_m) + K_m V_{step} \tau_m e^{-1} = 0.368 K_m V_{step} \tau_m$.
                *   The velocity at $t = \tau_m$ is $\omega(\tau_m) = K_m V_{step} (1 - e^{-1}) \approx 0.632 K_m V_{step}$.
                *   **Practical Method for $\tau_m$:**
                    1.  From the $\theta(t)$ response, find the steady-state velocity $\omega_{ss} = \lim_{t\to\infty} \frac{d\theta}{dt}$. This is the slope of the $\theta(t)$ graph in the linear region.
                    2.  Calculate $K_m = \frac{\omega_{ss}}{V_{step}}$.
                    3.  Find the time $t_{63\%}$ at which the velocity $\omega(t)$ reaches $0.632 \cdot \omega_{ss}$.
                        $\omega(t) = K_m V_{step} (1 - e^{-t/\tau_m}) = \omega_{ss} (1 - e^{-t/\tau_m})$.
                        So, $0.632 \omega_{ss} = \omega_{ss} (1 - e^{-t_{63\%}/\tau_m})$.
                        $0.632 = 1 - e^{-t_{63\%}/\tau_m}$
                        $e^{-t_{63\%}/\tau_m} = 1 - 0.632 = 0.368$
                        $-t_{63\%}/\tau_m = \ln(0.368) \approx -1$
                        $t_{63\%} \approx \tau_m$.
                    4.  **So, the time constant $\tau_m$ is approximately the time required for the motor's velocity to reach 63.2% of its final steady-state value.** This time can be estimated by taking the derivative of the recorded $\theta(t)$ data, or by observing the rate of change.

        *   **Method E (Using Steady State Position for a Different Input - not ideal for AC Servo):** If we were to apply a constant torque (which is not directly controllable by $V_c$), the motor would spin at constant velocity. But for a voltage input, the response is velocity.

**Method 2: Frequency Response Analysis (Bode Plot)**

1.  **Principle:** Apply a sinusoidal input voltage $v_c(t) = V_p \sin(\omega t)$ to the control winding. Measure the amplitude and phase of the output angular velocity $\omega(t)$ at different frequencies.
2.  **Experimental Setup:**
    *   AC servo motor.
    *   Function generator capable of sinusoidal output.
    *   Power amplifier.
    *   Oscilloscope or spectrum analyzer to measure output amplitude and phase relative to input.
    *   Consider measuring velocity $\omega(t)$ as the output because the transfer function of velocity is simpler: $G_v(s) = \frac{\Omega(s)}{V_c(s)} = \frac{K_m}{\tau_m s + 1}$.
3.  **Procedure:**
    *   Apply sinusoidal input voltage $V_c(j\omega)$.
    *   Measure the sinusoidal output velocity $\Omega(j\omega)$.
    *   Calculate the magnitude $|G_v(j\omega)| = \frac{|\Omega(j\omega)|}{|V_c(j\omega)|}$ and phase angle $\angle G_v(j\omega) = \angle \Omega(j\omega) - \angle V_c(j\omega)$.
    *   Plot the Bode diagram (magnitude and phase vs. log frequency).
4.  **Analysis of Bode Plot:**
    *   The transfer function for velocity is $G_v(s) = \frac{K_m}{\tau_m s + 1}$.
    *   In the frequency domain, $s = j\omega$: $G_v(j\omega) = \frac{K_m}{1 + j\omega\tau_m}$.
    *   Magnitude: $|G_v(j\omega)| = \frac{K_m}{\sqrt{1 + (\omega\tau_m)^2}}$.
    *   Phase: $\angle G_v(j\omega) = -\arctan(\omega\tau_m)$.
    *   **At low frequencies ($\omega \to 0$):**
        *   $|G_v(j\omega)| \approx K_m$ (Magnitude is constant, equal to the DC gain $K_m$). This is the **low-frequency asymptote** of the magnitude plot.
        *   $\angle G_v(j\omega) \approx 0^\circ$.
    *   **At the corner frequency ($\omega_c = 1/\tau_m$):**
        *   $|G_v(j\omega_c)| = \frac{K_m}{\sqrt{1 + (1/\tau_m \cdot \tau_m)^2}} = \frac{K_m}{\sqrt{1 + 1}} = \frac{K_m}{\sqrt{2}}$.
        *   In dB: $20 \log_{10}(|G_v(j\omega_c)|) = 20 \log_{10}(K_m/\sqrt{2}) = 20 \log_{10}(K_m) - 10 \log_{10}(2)$. This is 3 dB below the low-frequency asymptote.
        *   $\angle G_v(j\omega_c) = -\arctan(1) = -45^\circ$.
    *   **At high frequencies ($\omega \to \infty$):**
        *   $|G_v(j\omega)| \approx \frac{K_m}{\omega\tau_m}$. The magnitude rolls off at -20 dB/decade.
        *   $\angle G_v(j\omega) \to -90^\circ$.
    *   **Determining parameters from Bode Plot:**
        *   **$K_m$**: The magnitude of the low-frequency asymptote (in linear scale).
        *   **$\tau_m$**: The corner frequency $\omega_c$ is found where the magnitude is 3 dB below the DC gain, or where the phase is -45 degrees. $\tau_m = 1/\omega_c$.

**Method 3: Using Open-Loop Step Response of the Motor + Tachometer (If available)**

*   Many servo systems include a tachometer which provides a voltage proportional to velocity. Let's assume the output measured is velocity $\omega(t)$.
*   The transfer function from control voltage $v_c(t)$ to velocity $\omega(t)$ is $G_v(s) = \frac{\Omega(s)}{V_c(s)} = \frac{K_m}{\tau_m s + 1}$.
*   If we apply a step input voltage $V_{step}$ to $V_c(s)$, then $\Omega(s) = \frac{K_m V_{step}}{\tau_m s + 1}$.
*   The time response is $\omega(t) = K_m V_{step}(1 - e^{-t/\tau_m})$.
*   This is a standard first-order system response.
    *   **Determining $K_m$:** Steady-state velocity is $\omega_{ss} = K_m V_{step}$. So, $K_m = \omega_{ss} / V_{step}$.
    *   **Determining $\tau_m$:** The time constant $\tau_m$ is the time it takes for the output to reach $1 - e^{-1} \approx 63.2\%$ of its final value. So, find the time $t_{63\%}$ when $\omega(t) = 0.632 \cdot \omega_{ss}$. Then $\tau_m \approx t_{63\%}$.

---

### 4. Transfer Function of the Complete Servo System

*   A typical AC servo system includes the motor, a power amplifier, and a feedback sensor (e.g., tachometer for velocity feedback, or encoder/potentiometer for position feedback).
*   Let's consider a system with position feedback. The overall system is a closed-loop system.

#### 4.1 System Components and their Transfer Functions

1.  **AC Servo Motor (Plant):**
    *   We derived the transfer function from control voltage $V_c(s)$ to angular displacement $\Theta(s)$:
        $G_p(s) = \frac{\Theta(s)}{V_c(s)} = \frac{K_m}{s(\tau_m s + 1)}$

2.  **Power Amplifier:**
    *   The amplifier converts a low-power command signal (e.g., from a controller) to a high-power voltage suitable for the motor's control winding.
    *   Often modeled as a proportional gain, $K_a$.
    *   $G_{amp}(s) = K_a$.

3.  **Feedback Sensor (Potentiometer/Encoder):**
    *   Measures the angular position $\theta(t)$.
    *   Outputs a voltage $v_f(t)$ or digital signal proportional to $\theta(t)$.
    *   Modeled as a gain, $K_f$ (feedback gain, e.g., volts per radian).
    *   $H(s) = K_f$.

4.  **Controller:**
    *   The controller takes the error signal ($e(t) = \theta_{ref}(t) - \theta(t)$) and generates a command signal $u(t)$ for the amplifier.
    *   Commonly PID controllers, but for simplicity, let's consider a proportional controller $G_c(s) = K_p$.

#### 4.2 Block Diagram of the Closed-Loop System

```
      +-----------+     +-----------+     +-----------+     +----------+
      |           |---->|           |---->|           |---->|          |
u(t)-->|Controller |     | Amplifier |     | AC Motor  |     | Output   |--> theta(t)
      |  G_c(s)   |     |   K_a     |     |  G_p(s)   |     |  (Plant) |
      +-----------+     +-----------+     +-----------+     +----------+
            ^                                                     |
            |                                                     |
            | Error e(t)                                          | Feedback theta_f(t)
            |                                                     |
      +-----------+                                           +-----------+
      | Summing   |<--------------------------------------------| Feedback  |
      | Junction  |                                             | Sensor    |
      | (Ref-Fbk) |                                             |   H(s)    |
      +-----------+                                           +-----------+
```

*   **Input:** Reference position $\theta_{ref}(t)$.
*   **Output:** Actual position $\theta(t)$.
*   **Error:** $e(t) = \theta_{ref}(t) - \theta(t)$.
*   **Controller Output:** $u(t) = G_c(s) e(t)$.
*   **Amplifier Output:** $v_c(t) = K_a u(t)$.
*   **Motor Input:** $v_c(t)$ drives the motor.
*   **Motor Output:** $\Theta(s) = G_p(s) V_c(s)$.
*   **Feedback Signal:** $\theta_f(t) = H(s) \Theta(s)$.

#### 4.3 Deriving the Closed-Loop Transfer Function

*   The open-loop transfer function is $G_{OL}(s) = G_c(s) \cdot K_a \cdot G_p(s) \cdot H(s)$.
*   Let $G_{open\_loop}(s) = K_p \cdot K_a \cdot \frac{K_m}{s(\tau_m s + 1)} \cdot K_f$.
*   $G_{open\_loop}(s) = \frac{K_p K_a K_m K_f}{s(\tau_m s + 1)} = \frac{K_{OL}}{s(\tau_m s + 1)}$.
*   The closed-loop transfer function is given by the formula:
    $G_{CL}(s) = \frac{G_{OL}(s)}{1 + G_{OL}(s)}$
*   Substituting our $G_{OL}(s)$:
    $G_{CL}(s) = \frac{\frac{K_{OL}}{s(\tau_m s + 1)}}{1 + \frac{K_{OL}}{s(\tau_m s + 1)}}$
*   Multiplying numerator and denominator by $s(\tau_m s + 1)$:
    $G_{CL}(s) = \frac{K_{OL}}{s(\tau_m s + 1) + K_{OL}}$
    $G_{CL}(s) = \frac{K_{OL}}{\tau_m s^2 + s + K_{OL}}$
*   **This is a second-order system.** The standard form of a second-order system is:
    $G_{CL}(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$
*   Comparing our derived $G_{CL}(s)$ with the standard form (after dividing by $\tau_m$):
    $G_{CL}(s) = \frac{K_{OL}/\tau_m}{s^2 + (1/\tau_m) s + K_{OL}/\tau_m}$
*   We can identify:
    *   $\omega_n^2 = \frac{K_{OL}}{\tau_m} = \frac{K_p K_a K_m K_f}{\tau_m}$ (Undamped natural frequency)
    *   $2\zeta\omega_n = \frac{1}{\tau_m}$ (Damping ratio is determined by $\tau_m$ and the loop gain)

*   **Note:** If the controller is proportional-derivative (PD) or proportional-integral-derivative (PID), the controller transfer function $G_c(s)$ will be more complex, leading to a higher-order closed-loop transfer function. However, the fundamental motor transfer function $G_p(s)$ remains the same.

---

### 5. Role of Parameters in System Performance

*   **$K_m$ (Motor Gain):**
    *   Higher $K_m$ means a larger steady-state velocity for a given control voltage.
    *   Affects the overall gain of the system, influencing steady-state error and speed of response.
    *   Appears in $\omega_n^2$. Higher $K_m$ leads to higher $\omega_n$, meaning faster response, but can also lead to instability if not properly compensated.

*   **$\tau_m$ (Mechanical Time Constant):**
    *   Represents the inherent speed limitation of the motor due to inertia and damping.
    *   Smaller $\tau_m$ means the motor can respond faster to changes in control voltage.
    *   Appears in the denominator of the open-loop transfer function. It contributes to poles of the system.
    *   Affects the damping ratio. $2\zeta\omega_n = 1/\tau_m$. If $\tau_m$ is small, it tends to increase damping.

*   **$K_p, K_a, K_f$ (System Gains):**
    *   These gains affect the overall loop gain $K_{OL}$.
    *   Increasing the loop gain generally leads to:
        *   Faster response (higher $\omega_n$).
        *   Reduced steady-state error.
        *   However, it can also lead to reduced stability margins and increased overshoot/oscillations.

#### 5.1 Performance Specifications (as related to parameters)

*   **Speed of Response:** Determined by $\omega_n$ and $\zeta$. Affected by $K_m$, $\tau_m$, and controller gains.
*   **Overshoot:** Primarily influenced by the damping ratio $\zeta$. Higher $\zeta$ means less overshoot. $\zeta$ is a function of $K_m, \tau_m$, and controller gains.
*   **Steady-State Error:** For position control, a proportional controller will result in a steady-state error for a step input position. This error is inversely proportional to the loop gain $K_{OL}$ (specifically related to $K_{CL}(0)$ in a different formulation). Integral action in the controller is needed to eliminate steady-state position error.
*   **Stability:** The system is stable if the poles of the closed-loop transfer function have negative real parts. This is determined by the characteristic equation: $\tau_m s^2 + s + K_{OL} = 0$. The roots are $s = \frac{-1 \pm \sqrt{1 - 4\tau_m K_{OL}}}{2\tau_m}$. For stability, $1 - 4\tau_m K_{OL}$ must be less than 1, and $1$ must be positive. The real part is $-1/(2\tau_m)$, which is always negative for positive $\tau_m$. Stability is guaranteed for any positive $K_{OL}$ with this second-order system model. However, in practice, higher-order effects can lead to instability.

---

### 6. Lab Experiments and Analysis (Connecting to Outcomes)

#### 6.1 Experiment 1: Step Response of AC Servo Motor (Open-Loop)

*   **Objective:** Determine $K_m$ and $\tau_m$ of the AC servo motor.
*   **Procedure:**
    1.  Connect the AC servo motor to the amplifier.
    2.  Apply a step voltage input $V_{step}$ to the control winding via a function generator.
    3.  Record the angular position $\theta(t)$ using an oscilloscope or DAQ.
*   **Analysis:**
    1.  Plot $\theta(t)$ vs. time.
    2.  Calculate the steady-state velocity $\omega_{ss}$ by finding the slope of the linear portion of the $\theta(t)$ curve.
    3.  Calculate $K_m = \omega_{ss} / V_{step}$.
    4.  Estimate $\tau_m$ by finding the time $t_{63\%}$ at which the velocity (slope of $\theta(t)$) reaches $0.632 \cdot \omega_{ss}$.
    5.  **Outcome CO1 addressed:** Parameters ($K_m, \tau_m$) are determined.
    6.  **Outcome CO3 addressed:** The derived transfer function $G(s) = \frac{K_m}{s(\tau_m s + 1)}$ can be used in simulation tools (e.g., MATLAB/Simulink) to predict the step response and compare it with the experimental data.

#### 6.2 Experiment 2: Closed-Loop Step Response (with proportional controller)

*   **Objective:** Observe the closed-loop system behavior and compare with theoretical predictions.
*   **Procedure:**
    1.  Set up the servo system with a proportional controller (e.g., using a potentiometer and amplifier as a proportional controller).
    2.  Set a feedback gain $K_f$.
    3.  Apply a step input to the reference position $\theta_{ref}$.
    4.  Record the actual position $\theta(t)$.
*   **Analysis:**
    1.  Plot $\theta(t)$ vs. time.
    2.  Measure performance specifications: rise time, settling time, overshoot, steady-state error.
    3.  Calculate the expected closed-loop transfer function $G_{CL}(s)$ using the experimentally determined $K_m$, $\tau_m$ and known controller/amplifier/feedback gains ($K_p, K_a, K_f$).
    4.  Simulate the step response of $G_{CL}(s)$ using the determined parameters and compare it with the experimental plot.
    5.  **Outcome CO2 addressed:** Performance specifications are measured.
    6.  **Outcome CO3 addressed:** The closed-loop model is analyzed via simulation and compared with experiment.

#### 6.3 Experiment 3: Frequency Response (Optional, but good for validation)

*   **Objective:** Obtain the frequency response of the motor (or the open-loop system) and compare with theoretical predictions.
*   **Procedure:**
    1.  Apply sinusoidal input to the system at various frequencies.
    2.  Measure the amplitude and phase of the output (velocity or position).
*   **Analysis:**
    1.  Plot Bode plots (magnitude and phase vs. frequency).
    2.  Compare with the Bode plot of the derived transfer function $G_p(s)$ or $G_{OL}(s)$.
    3.  **Outcome CO1 addressed:** Can be used to confirm parameter values.

---

### 7. Practice Questions and Answers

**Q1. What is the general form of the transfer function for an AC servo motor, relating control voltage to angular displacement?**

**A1.** The transfer function is typically represented as $G(s) = \frac{K_m}{s(\tau_m s + 1)}$, where $K_m$ is the motor gain (velocity constant) and $\tau_m$ is the mechanical time constant.

**Q2. Explain how to determine the motor gain ($K_m$) from the step response of an AC servo motor.**

**A2.** The step response $\theta(t)$ for a step voltage input $V_{step}$ is approximately $\theta(t) = K_m V_{step} (t - \tau_m) + K_m V_{step} \tau_m e^{-t/\tau_m}$. The steady-state velocity is the slope of the $\theta(t)$ curve as $t \to \infty$, which is $\omega_{ss} = K_m V_{step}$. Therefore, $K_m = \frac{\omega_{ss}}{V_{step}}$. Measure the steady-state slope from the recorded $\theta(t)$ data and divide by the step input voltage.

**Q3. How can the mechanical time constant ($\tau_m$) be estimated from the step response of an AC servo motor?**

**A3.** From the velocity response $\omega(t) = K_m V_{step} (1 - e^{-t/\tau_m})$, the time constant $\tau_m$ is the time required for the velocity to reach approximately 63.2% of its final steady-state value ($\omega_{ss}$). This can be estimated by finding the time $t_{63\%}$ where the slope of the $\theta(t)$ plot equals $0.632 \cdot \omega_{ss}$.

**Q4. If an AC servo motor has a transfer function $G(s) = \frac{5}{s(0.1s + 1)}$ and is driven by a step voltage of 2V, what is the steady-state velocity?**

**A4.** The transfer function is $G(s) = \frac{K_m}{s(\tau_m s + 1)}$. From this, $K_m = 5$ rad/s/V and $\tau_m = 0.1$ s.
The steady-state velocity $\omega_{ss}$ for a step input voltage $V_{step}$ is given by $\omega_{ss} = K_m \cdot V_{step}$.
Here, $V_{step} = 2V$.
So, $\omega_{ss} = 5 \text{ rad/s/V} \times 2 \text{ V} = 10 \text{ rad/s}$.

**Q5. What is the order of the closed-loop transfer function of an AC servo system with a proportional controller, an amplifier, the motor, and a position feedback sensor?**

**A5.** The motor itself has a transfer function with an $s$ in the denominator, making it an integrator (effectively, the motor's input-output relationship is like a first-order system with an added integrator). When combined with other components and a proportional controller, the closed-loop system typically becomes a **second-order system**.

---

### 8. Important Points to Remember

*   **AC Servo Motor Model:** The core open-loop transfer function relating control voltage to angular displacement is $G(s) = \frac{K_m}{s(\tau_m s + 1)}$.
*   **Parameter Significance:** $K_m$ affects speed and gain, $\tau_m$ affects response speed and damping.
*   **Experimental Determination:** Step response is a common method to find $K_m$ (from steady-state velocity) and $\tau_m$ (from the time to reach 63.2% of steady-state velocity).
*   **Closed-Loop System:** When feedback and a controller are added, the AC servo system becomes a closed-loop system, typically modeled as a second-order system.
*   **Performance:** The parameters $K_m$, $\tau_m$, and controller gains directly influence the system's speed, overshoot, and steady-state error.
*   **Simulation:** Understanding the transfer function is crucial for simulating system behavior in tools like MATLAB/Simulink, allowing for prediction and design.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 9. Textbook and Reference Material Correlation

*   **Katsuhiko Ogata:** Chapters on modeling of mechanical systems, transfer functions, and step response analysis. Derivations of motor dynamics and system identification techniques are relevant. (e.g., Chapter 2: Mathematical Modeling, Chapter 5: Transient and Steady-State Response Analysis).
*   **Norman S. Nise:** Similar coverage on system modeling, transfer functions, time-domain analysis, and frequency-domain analysis. Concepts of second-order systems and their parameters ($\zeta, \omega_n$) are well-explained. (e.g., Chapter 2: Modeling in the Frequency Domain, Chapter 4: Time Response, Chapter 7: Stability).
*   **Nagrath & Gopal:** Provides comprehensive coverage on electromechanical systems and control system analysis. Their treatment of DC and AC servomotors would be particularly relevant. (e.g., Chapters on Servomotors, Modeling of Systems, Time and Frequency Response).

These notes cover the derivation and experimental identification of the AC servo motor transfer function, which directly supports **CO1 (Parameter Determination)** and **CO3 (Simulation and Analysis)**. The understanding of how these parameters affect performance lays the groundwork for **CO2 (Performance Specifications)** and **CO4 (Controller Design)** in subsequent modules.