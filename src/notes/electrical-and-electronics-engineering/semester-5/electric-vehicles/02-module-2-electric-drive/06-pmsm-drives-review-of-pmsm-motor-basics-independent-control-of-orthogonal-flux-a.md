---
title: "PMSM Drives :  Review of PMSM motor basics – Independent control of orthogonal flux and torque (concept only)- Field Oriented Control (FOC) – Sensored and sensorless control (block diagram only). (4hrs)"
subject: "ELECTRIC VEHICLES"
module: "Module 2: Electric Drive"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f362a6"
status: "completed"
scrapedAt: "2026-05-23T16:21:34.105Z"
---
# ELECTRIC VEHICLES: Module 2 - Electric Drive
## Topic: PMSM Drives

This module focuses on Permanent Magnet Synchronous Motor (PMSM) drives, a crucial component in modern electric vehicles (EVs). We will review PMSM motor basics, understand the concept of independent control of flux and torque, delve into Field-Oriented Control (FOC), and examine sensored and sensorless control approaches through block diagrams.

---

### 1. Review of PMSM Motor Basics

Permanent Magnet Synchronous Motors (PMSMs) are widely adopted in EVs due to their high efficiency, high power density, and excellent torque-to-weight ratio.

#### 1.1 What is a PMSM?

*   A PMSM is a type of AC synchronous motor that uses permanent magnets on its rotor to create a magnetic field.
*   The stator has windings that, when supplied with AC current, produce a rotating magnetic field.
*   The rotor, with its permanent magnets, locks onto this rotating magnetic field and rotates at the same speed (synchronous speed).

#### 1.1.1 Construction of a PMSM

*   **Stator:** Similar to induction motors, the stator consists of a laminated iron core with slots. Three-phase windings are placed in these slots.
*   **Rotor:** The rotor contains permanent magnets. These magnets can be:
    *   **Surface-Mounted Permanent Magnet (SPM) Rotor:** Magnets are mounted on the surface of the rotor core. This design is simpler but can have lower magnet retention at high speeds and increased windage losses.
    *   **Internal Permanent Magnet (IPM) Rotor:** Magnets are embedded within the rotor core. This design offers better magnet retention, higher mechanical strength, and allows for flux weakening capabilities due to the saliency (difference in inductance along different axes). IPMs are more common in EV applications due to these advantages.

#### 1.1.2 Working Principle

*   When a three-phase AC voltage is applied to the stator windings, a rotating magnetic field is generated.
*   The permanent magnets on the rotor create a constant magnetic field.
*   The stator's rotating magnetic field interacts with the rotor's magnetic field, causing the rotor to align with and rotate at the same speed as the stator field. This is why it's called a "synchronous" motor.
*   The direction and speed of rotation are controlled by the frequency and phase of the AC current supplied to the stator.

#### 1.1.3 PMSM vs. Induction Motors (IMs)

| Feature         | PMSM                                           | Induction Motor (IM)                                  |
| :-------------- | :--------------------------------------------- | :---------------------------------------------------- |
| **Rotor Field** | Provided by permanent magnets                  | Induced by stator field (requires slip)               |
| **Efficiency**  | Higher, especially at light loads              | Lower, due to rotor copper losses                     |
| **Power Density** | Higher (smaller, lighter for same power)       | Lower                                                 |
| **Torque Density**| Higher                                         | Lower                                                 |
| **Excitation**  | No external excitation required for rotor      | Rotor current is induced, requiring excitation current |
| **Control**     | More complex (requires precise rotor position) | Simpler control, but performance can be less optimal  |
| **Cost**        | Can be higher due to rare-earth magnets        | Generally lower                                       |
| **Applications**| EVs, robotics, high-performance applications   | Industrial drives, pumps, fans                        |

*   **Reference:** Chau, K. T. (2015). *Electric Vehicles Machines and Drives- Design, Analysis and Application*. Chapter 4 covers PMSM fundamentals.

#### 1.1.4 Torque and Flux Production in PMSM

*   In a PMSM, torque is produced by the interaction of the magnetic fields of the stator and the rotor magnets.
*   The fundamental torque equation for a PMSM can be expressed as:
    $T_e = \frac{3}{2} P \frac{L_d - L_q}{2} i_d i_q + \frac{3}{2} P \frac{3}{2} \lambda_{pm} i_q$
    Where:
    *   $T_e$: Electromagnetic torque
    *   $P$: Number of pole pairs
    *   $L_d, L_q$: Inductances in the d and q axes respectively
    *   $i_d, i_q$: Currents in the d and q axes respectively
    *   $\lambda_{pm}$: Permanent magnet flux linkage

*   **Key Insight:** This equation shows that torque is produced from two components:
    1.  **Reluctance Torque:** Proportional to $(L_d - L_q) i_d i_q$. This component is significant in salient pole PMSMs (IPMs) where $L_d \neq L_q$.
    2.  **Magnet Torque:** Proportional to $\lambda_{pm} i_q$. This is the primary torque-producing component due to the permanent magnets.

#### 1.1.5 Synchronous d-q Transformation

*   To simplify the analysis and control of PMSMs, a transformation is used to convert the stator currents and voltages from the stationary (abc) frame to a rotating reference frame aligned with the rotor's magnetic field. This is the Park transformation (d-q transformation).
*   **d-axis (direct axis):** Aligned with the rotor's magnetic flux (often aligned with the permanent magnet flux).
*   **q-axis (quadrature axis):** Perpendicular to the d-axis, producing torque.
*   **Benefits of d-q transformation:**
    *   Transforms time-varying inductances into constant values ($L_d, L_q$).
    *   Decouples the stator currents into components responsible for flux ($i_d$) and torque ($i_q$) production, similar to DC motors.
    *   Simplifies the motor model to DC-like equations.

---

### 2. Independent Control of Orthogonal Flux and Torque (Concept Only)

This is the core idea behind Field-Oriented Control (FOC). By controlling the stator currents in the d-q frame, we can independently manage the flux and torque-producing components.

#### 2.1 The d-q Frame Analogy to DC Motors

*   In a separately excited DC motor, the field current ($i_f$) controls the magnetic flux, and the armature current ($i_a$) controls the torque:
    *   $T_e \propto \Phi i_a$
    *   $\Phi \propto i_f$
*   In a PMSM, after the d-q transformation:
    *   The $i_d$ current component (in the d-q frame) directly influences the rotor's magnetic flux. In PMSMs with magnets, $i_d$ can be used to **reduce** the net flux, allowing for field weakening. For maximum torque per ampere (MTPA), $i_d$ is typically controlled to be zero, allowing the permanent magnets to provide the primary flux.
    *   The $i_q$ current component directly controls the torque.
*   Therefore, by independently controlling $i_d$ and $i_q$, we can precisely regulate the motor's flux and torque, much like controlling field and armature currents in a DC motor.

#### 2.2 Independent Control Goals

*   **Flux Control:** Primarily managed by $i_d$.
    *   For most operating conditions (especially at lower speeds), $i_d=0$ is desired to maximize torque for a given current and achieve Maximum Torque Per Ampere (MTPA). This means the permanent magnets provide the main flux.
    *   At higher speeds, field weakening might be necessary to prevent over-voltages. This involves applying a negative $i_d$ current component to oppose the magnet flux, reducing the back-EMF and allowing the motor to reach higher speeds at a given DC bus voltage.
*   **Torque Control:** Primarily managed by $i_q$.
    *   A larger $i_q$ results in higher torque.
    *   The relationship between $i_q$ and torque is nearly linear, similar to DC motors.

#### 2.3 Importance for EV Applications

*   **Efficiency:** Independent control allows for operation at the most efficient point for any given speed and torque demand (e.g., using MTPA).
*   **Performance:** Enables precise and dynamic control of motor speed and torque, crucial for EV acceleration and responsiveness.
*   **Wide Speed Range:** Facilitates operation across a wide speed range, including efficient high-speed operation through field weakening.

*   **Reference:** Krishnan, R. (Year). *Permanent Magnet Synchronous and Brushless DC Motors Drives*. Chapter 5 discusses advanced control strategies.

---

### 3. Field-Oriented Control (FOC)

Field-Oriented Control (FOC), also known as Vector Control, is a sophisticated control strategy that allows independent control of flux and torque in AC motors, including PMSMs. It achieves this by transforming the stator currents into a rotating reference frame aligned with the rotor flux.

#### 3.1 Core Principles of FOC

1.  **Decoupling of Flux and Torque:** FOC aims to decouple the stator current vector into two orthogonal components: one aligned with the rotor flux (flux-producing current, $i_d$) and one perpendicular to it (torque-producing current, $i_q$).
2.  **DC-like Control:** By transforming quantities into the rotor-aligned d-q frame, the motor's dynamic equations become analogous to those of a DC motor, making control simpler and more effective.
3.  **Space Vector Modulation (SVM):** FOC typically uses Space Vector Modulation (SVM) to synthesize the required stator voltage vectors to drive the motor. SVM is a more efficient method for generating AC waveforms compared to sinusoidal PWM.

#### 3.2 Key Steps in FOC

1.  **Current Measurement:** Measure the stator currents (e.g., $i_a$, $i_b$, $i_c$).
2.  **Clarke Transformation:** Transform the three-phase stator currents ($i_a, i_b, i_c$) into two orthogonal stationary currents ($i_\alpha, i_\beta$) in the stationary $\alpha-\beta$ reference frame.
    $i_\alpha = i_a$
    $i_\beta = \frac{1}{\sqrt{3}}i_a + \frac{2}{\sqrt{3}}i_b$
3.  **Rotor Position/Flux Angle Estimation:** Determine the rotor's electrical position ($\theta_r$) or the rotor flux angle. This is a critical step and is achieved differently in sensored and sensorless control.
4.  **Park Transformation:** Transform the stationary $\alpha-\beta$ currents ($i_\alpha, i_\beta$) into rotor-aligned d-q currents ($i_d, i_q$) using the rotor flux angle $\theta_r$.
    $i_d = i_\alpha \cos(\theta_r) + i_\beta \sin(\theta_r)$
    $i_q = -i_\alpha \sin(\theta_r) + i_\beta \cos(\theta_r)$
5.  **Current Control:** Use independent PI controllers (or similar controllers) to regulate the actual $i_d$ and $i_q$ currents to their desired reference values ($i_d^*$ and $i_q^*$).
    *   $i_d^*$ is typically set to 0 for MTPA or a negative value for field weakening.
    *   $i_q^*$ is set based on the desired torque.
6.  **Inverse Park Transformation:** Transform the controlled d-q voltages ($v_d, v_q$) back to the stationary $\alpha-\beta$ frame using the rotor flux angle $\theta_r$.
    $v_\alpha = v_d \cos(\theta_r) - v_q \sin(\theta_r)$
    $v_\beta = v_d \sin(\theta_r) + v_q \cos(\theta_r)$
7.  **Space Vector Modulation (SVM):** Generate the appropriate switching signals for the inverter to synthesize the required voltage vectors ($v_\alpha, v_\beta$) to drive the motor.

#### 3.3 FOC for PMSM

*   **MTPA (Maximum Torque Per Ampere):** To achieve MTPA, the $i_d$ current reference ($i_d^*$) is typically set to zero for non-salient pole PMSMs. For salient pole (IPM) PMSMs, a specific non-zero $i_d^*$ value might yield MTPA, which is found by analyzing the torque equation.
*   **Field Weakening:** At high speeds, the back-EMF becomes significant. To prevent exceeding the DC bus voltage limit, a negative $i_d^*$ is applied to reduce the effective flux, thus reducing the back-EMF. This allows the motor to operate at speeds above its base speed.

*   **Reference:** Miller, J. M. (2010). *Propulsion Systems for Hybrid Vehicles*. Chapter 6 discusses PMSM control and FOC. Ehsani, M. et al. (Year). *Modern Electric, Hybrid and Fuel Cell Vehicles* also provides a good overview of FOC for EVs.

---

### 4. Sensored and Sensorless Control (Block Diagram Only)

The critical difference between sensored and sensorless FOC lies in how the rotor flux angle ($\theta_r$) is obtained.

#### 4.1 Sensored Control

Sensored control uses physical sensors mounted on the motor to directly measure the rotor position.

*   **Sensors Used:**
    *   **Encoders:** Optical or magnetic encoders provide high-resolution position feedback.
    *   **Resolvers:** Analog devices that provide continuous position information and are robust to harsh environments.
    *   **Hall Effect Sensors:** Provide coarse position information (typically 6 pulses per electrical revolution), usually used for simpler PMSM control or BLDC motors.

*   **Block Diagram for Sensored FOC:**

    ```mermaid
    graph TD
        A[Speed/Torque Command] --> B{PI Controller (Torque)};
        B --> C[i_q*];
        D[Flux Command (e.g., 0 or Field Weakening)] --> E{PI Controller (Flux)};
        E --> F[i_d*];

        subgraph Motor Control
            G[Stator Currents (ia, ib, ic)] --> H{Clarke Transform};
            H --> I[is_alpha, is_beta];
            J[Rotor Position Sensor] --> K{Park Transform};
            I --> K;
            K --> L[id, iq];
            L --> M{PI Controllers (id, iq)};
            M --> N[vd*, vq*];
            N --> O{Inverse Park Transform};
            O --> P[v_alpha*, v_beta*];
            P --> Q{Space Vector Modulation (SVM)};
            Q --> R[Inverter Switching Signals];
            R --> S[PMSM Motor];
            S --> G;
        end

        C --> M;
        F --> M;
        J --> K; % Rotor Position directly feeding Park Transform
    ```

    **Explanation:**
    *   The desired speed or torque is used to generate reference currents $i_q^*$ (for torque) and $i_d^*$ (for flux).
    *   Measured stator currents are transformed to the stationary $\alpha-\beta$ frame.
    *   Crucially, the rotor position from a sensor ($\theta_r$) is directly used in the Park transformation to get $i_d$ and $i_q$.
    *   $i_d$ and $i_q$ are compared to their references, and PI controllers generate voltage commands $v_d^*$ and $v_q^*$.
    *   These are transformed back to the stationary frame and then used by SVM to control the inverter.

*   **Advantages of Sensored Control:**
    *   High accuracy and responsiveness.
    *   Good performance across the entire speed range, including zero speed.
    *   Robust to variations in motor parameters.

*   **Disadvantages of Sensored Control:**
    *   Requires additional sensors, increasing cost, complexity, and potential failure points.
    *   Mounting space for sensors.

#### 4.2 Sensorless Control

Sensorless control estimates the rotor position and flux angle without using dedicated position sensors. This is achieved by analyzing the back-EMF or the motor's terminal voltages and currents.

*   **Methods for Sensorless Control:**
    *   **Back-EMF Based Methods:** These methods rely on the back-EMF voltage, which is proportional to speed. They are effective at medium to high speeds where the back-EMF is significant. At low and zero speeds, the back-EMF is small, making estimation difficult.
        *   *Examples:* Sliding Mode Observer (SMO), Extended Kalman Filter (EKF), Back-EMF integration methods.
    *   **High-Frequency Injection (HFI) Methods:** For low and zero speed operation, a high-frequency voltage or current is injected into the motor. The resulting current change is modulated by the rotor's magnetic saliency (for IPMs) or the magnet's presence. Analyzing this modulation provides position information. This method is effective at low/zero speeds but can introduce noise and slight torque ripple.

*   **Block Diagram for Sensorless FOC (Back-EMF Based Example):**

    ```mermaid
    graph TD
        A[Speed/Torque Command] --> B{PI Controller (Torque)};
        B --> C[i_q*];
        D[Flux Command (e.g., 0 or Field Weakening)] --> E{PI Controller (Flux)};
        E --> F[i_d*];

        subgraph Motor Control
            G[Stator Currents (ia, ib, ic)] --> H{Clarke Transform};
            H --> I[is_alpha, is_beta];
            I --> J{Voltage Equation based Position/Flux Estimator}; % Estimation block
            J --> K[Estimated Rotor Flux Angle (theta_r_est)];
            I --> K; % Currents also feed estimation
            K --> L{Park Transform};
            I --> L; % Currents also feed Park Transform
            L --> M[id, iq];
            M --> N{PI Controllers (id, iq)};
            N --> O[vd*, vq*];
            O --> P{Inverse Park Transform};
            P --> Q[v_alpha*, v_beta*];
            Q --> R{Space Vector Modulation (SVM)};
            R --> S[Inverter Switching Signals];
            S --> T[PMSM Motor];
            T --> G; % Measured currents fed back
            T --> U[Stator Voltages (va, vb, vc)]; % Voltages might be measured or estimated for some estimators
            U --> J; % Voltages can feed the estimator
        end

        C --> N;
        F --> N;
        K --> L; % Estimated Rotor Position used in Park Transform
    ```

    **Explanation:**
    *   The process is similar to sensored control, but the rotor position sensor is replaced by a **Position/Flux Estimator**.
    *   The estimator uses measured stator currents ($i_\alpha, i_\beta$) and potentially stator voltages ($v_\alpha, v_\beta$) to estimate the rotor flux angle ($\hat{\theta}_r$).
    *   **Challenge:** Back-EMF based methods struggle at low/zero speeds. HFI methods are often used in conjunction or as a primary method for low-speed operation.

*   **Advantages of Sensorless Control:**
    *   Reduced system cost, complexity, and size.
    *   Increased reliability by eliminating sensors.
    *   More design flexibility in motor placement.

*   **Disadvantages of Sensorless Control:**
    *   Performance degradation at low and zero speeds.
    *   More complex control algorithms.
    *   Sensitivity to motor parameter variations (e.g., resistance, inductance).
    *   Potential for torque ripple or oscillations, especially during transients or at low speeds.

*   **Reference:** Hussein, I. (2003). *Electric and Hybrid Vehicles: Design Fundamentals*. Chapter 7 may discuss motor control aspects, including sensorless approaches.

---

### 5. Connecting to Course Outcomes

*   **CO1: Familiarise the performance of conventional vehicles and electric vehicles (Knowledge Level: K2)**
    *   Understanding PMSM efficiency, power/torque density (Section 1.1.3) helps appreciate EV advantages over conventional vehicles.
*   **CO2: Analyse the various drive train topologies for electric vehicles (Knowledge Level: K3)**
    *   While not a drive train topology itself, the PMSM is a key component within many EV drive trains. Understanding its control (FOC, Sections 3 & 4) is essential for analyzing how it integrates with other components like batteries and gearboxes.
*   **CO3: Discuss the propulsion unit for electric vehicles and selection of drive systems (Knowledge Level: K3)**
    *   This topic directly addresses the propulsion unit. PMSMs are a primary choice for EV propulsion due to their characteristics. Understanding FOC and its sensored/sensorless implementations informs the selection process based on cost, performance, and reliability requirements.
*   **CO4: Analyse the various energy storage systems and energy management strategies (Knowledge Level: K3)**
    *   Efficient motor control (like FOC for PMSM) directly impacts energy management. By maximizing motor efficiency through MTPA and optimizing operation at different speeds via field weakening, FOC contributes significantly to extending the EV's range and improving overall energy utilization from the battery.
*   **CO5: Study of chargers, charging stations and various communication protocols for EV (Knowledge Level: K2)**
    *   While not directly covered here, efficient motor operation managed by FOC influences the power drawn from the grid/charger and impacts the overall charging strategy and energy flow within the EV system.

---

### Practice Questions

1.  **Question:** What are the two main components of torque in a PMSM, and which current components in the d-q frame are primarily responsible for them? (Knowledge Level: K2)
    **Answer:** The two components are Magnet Torque and Reluctance Torque. Magnet Torque is primarily produced by the $i_q$ current, and Reluctance Torque is produced by the interaction of $i_d$ and $i_q$ currents, dependent on the difference between $L_d$ and $L_q$.

2.  **Question:** Explain the fundamental goal of Field-Oriented Control (FOC) in PMSM drives. (Knowledge Level: K3)
    **Answer:** The fundamental goal of FOC is to decouple the control of magnetic flux and torque in AC motors (like PMSMs) by transforming stator currents into a rotating reference frame aligned with the rotor flux. This allows for independent control of flux ($i_d$) and torque ($i_q$), similar to a DC motor, enabling precise and efficient operation.

3.  **Question:** What is the main difference in the block diagrams between sensored and sensorless FOC for PMSMs? (Knowledge Level: K2)
    **Answer:** The main difference is the presence of a dedicated rotor position sensor in sensored control, which directly feeds the Park transformation. In sensorless control, a position/flux estimator block replaces the sensor, deriving the rotor position estimate from motor terminal quantities (currents and voltages).

4.  **Question:** At high speeds, why is a negative $i_d$ current applied in a PMSM drive controlled by FOC? (Knowledge Level: K3)
    **Answer:** Applying a negative $i_d$ current opposes the flux produced by the permanent magnets. This reduces the motor's back-EMF. By reducing the back-EMF, the motor can operate at speeds higher than its base speed without exceeding the DC bus voltage limit. This is known as field weakening.

5.  **Question:** For a surface-mounted PMSM (SPM), what is the typical reference value for $i_d^*$ to achieve Maximum Torque Per Ampere (MTPA)? (Knowledge Level: K2)
    **Answer:** For an SPM, which has negligible saliency ($L_d \approx L_q$), the typical reference value for $i_d^*$ to achieve MTPA is zero. This maximizes the torque produced by the $i_q$ current for a given total stator current.

---

### Important Points to Remember

*   **PMSMs offer higher efficiency and power density than induction motors**, making them ideal for EVs.
*   The **d-q transformation** is crucial for simplifying PMSM control by creating a DC-like system.
*   **FOC enables independent control of flux ($i_d$) and torque ($i_q$) currents**, leading to precise and efficient operation.
*   **MTPA (Maximum Torque Per Ampere)** is achieved by controlling $i_d$ and $i_q$ to produce maximum torque for a given current magnitude. For SPMs, this usually means $i_d=0$.
*   **Field weakening** (using negative $i_d$) extends the operating speed range of PMSMs.
*   **Sensored control** offers superior performance across all speeds but is more complex and costly.
*   **Sensorless control** reduces cost and complexity but faces challenges at low and zero speeds, often requiring advanced estimation techniques.
*   **IPM rotors** offer saliency, which can contribute to reluctance torque and improve field-weakening performance.
