---
title: "DC Drives- Chopper control of Separately Excited DC drives (SEDC) –One quadrant, Two quadrant and four quadrant Chopper fed drives(Continuous conduction only)- Motoring and Regenerative braking – Speed-Torque characteristics – Speed control- Controlled rectifier fed separately excited DC motor drive- Single phase and three phase (Continuous conduction only)- Speed-Torque characteristics- Speed control –Dual converter drives (single phase) - Circulating current Type and Non-circulating current - Static four-quadrant operation with SEDC"
subject: "POWER ELECTRONICS AND DRIVES"
module: "Module 4: Introduction to Electric Drives– Advantages of adjustable speed electric drives –Block diagram, Types of loads – Classification of load torque"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e2e"
status: "completed"
scrapedAt: "2026-05-23T16:17:56.214Z"
---
# Power Electronics and Drives - Module 4: Introduction to Electric Drives - DC Drives

This module focuses on understanding the principles and applications of DC drives, particularly their control using choppers and controlled rectifiers, and their operation in various quadrants.

**Learning Outcomes:**

*   Understand the basic principles of DC motor operation.
*   Analyze the operation of chopper-fed DC drives in different quadrants (motoring and regenerative braking).
*   Understand the speed-torque characteristics of DC drives.
*   Analyze the operation of controlled rectifier-fed DC drives (single-phase and three-phase) in continuous conduction mode.
*   Understand the operation of dual converter drives for DC motors.
*   Analyze static four-quadrant operation with Separately Excited DC (SEDC) motors.

---

## 1. Introduction to Electric Drives

An electric drive system comprises an electric motor, a power converter, and a control system. It is used to control the speed and/or torque of the motor.

### 1.1. Advantages of Adjustable Speed Electric Drives

Adjustable speed electric drives offer significant advantages over fixed-speed drives:

*   **Energy Savings:** By matching motor speed to the load requirement, energy consumption can be drastically reduced, especially in applications where full speed is not always needed.
*   **Improved Process Control:** Precise speed control allows for better quality and consistency in manufacturing processes.
*   **Increased Productivity:** Optimal speed settings can lead to higher output and efficiency.
*   **Reduced Mechanical Stress:** Gradual starting and stopping through controlled acceleration and deceleration reduce wear and tear on mechanical components.
*   **Wider Operating Range:** Ability to operate at a wide range of speeds and torques.
*   **Lower Starting Current:** Soft starting reduces the inrush current, protecting the power supply and motor.
*   **Regenerative Braking:** Ability to recover energy during braking, improving overall system efficiency.

### 1.2. Block Diagram of a Typical Electric Drive

A general block diagram of an electric drive system can be represented as follows:

```
+-----------------+     +-----------------+     +-----------------+     +-----------------+
| Power Source    | --> | Power Converter | --> | Electric Motor  | --> | Load            |
+-----------------+     +-----------------+     +-----------------+     +-----------------+
        ^                       ^                       ^
        |                       |                       |
+-----------------+     +-----------------+     +-----------------+
| Control System  | --> |  Reference Input|     | Feedback Signals|
+-----------------+     +-----------------+     +-----------------+
```

**Components:**

*   **Power Source:** Typically AC mains or a DC source.
*   **Power Converter:** Converts the input power to a form suitable for the motor (e.g., DC-DC converter, rectifier, inverter).
*   **Electric Motor:** The prime mover that provides mechanical power to the load.
*   **Load:** The device or system that the motor drives.
*   **Control System:** Generates reference signals and processes feedback to regulate motor speed, torque, or position.
*   **Reference Input:** Desired operating point (e.g., desired speed).
*   **Feedback Signals:** Measurements of motor speed, torque, current, voltage, etc.

### 1.3. Types of Loads

Loads can be categorized based on how their torque and speed requirements change:

*   **Constant Torque Loads:** The load torque remains constant irrespective of the speed.
    *   *Examples:* Conveyor belts, positive displacement pumps, extrusion presses, printing presses.
*   **Constant Power Loads:** The load torque is inversely proportional to the speed (Torque $\times$ Speed = Constant).
    *   *Examples:* Lathes (cutting operation), boring machines, certain types of fans at very high speeds.
*   **Variable Torque Loads:**
    *   **Torque proportional to Speed ($\boldsymbol{T} \propto \boldsymbol{\omega}$):**
        *   *Examples:* Certain types of fans, centrifugal pumps.
    *   **Torque proportional to Speed Squared ($\boldsymbol{T} \propto \boldsymbol{\omega}^2$):**
        *   *Examples:* Propellers, centrifugal fans.
    *   **Torque proportional to $\boldsymbol{\omega}^n$ (where n is a fractional power):**
        *   *Examples:* Friction in bearings, some viscous loads.

### 1.4. Classification of Load Torque

Load torque can be classified based on its behavior:

*   **Torque of Acceleration ($\boldsymbol{T}_a$):** The torque required to accelerate the motor and the load inertia.
    $T_a = J \frac{d\omega}{dt}$
    where $J$ is the total inertia (motor + load) and $\frac{d\omega}{dt}$ is the angular acceleration.

*   **Torque of Load ($\boldsymbol{T}_L$):** The torque exerted by the load on the motor. This is what we classified in Section 1.3.

*   **Torque of Friction ($\boldsymbol{T}_f$):** The torque opposing motion due to friction.
    *   **Viscous Friction:** $T_f = B\omega$ (torque proportional to speed).
    *   **Coulombic Friction (Static Friction):** $T_f$ is constant when in motion, and has a higher value for starting.
    *   **Stiction:** The initial torque required to overcome static friction.

*   **Torque of Load and Inertia:** The total torque required from the motor is the sum of the torque to overcome the load torque and the torque to accelerate the inertia.
    $T_m = T_L + T_a + T_{friction}$
    $T_m = T_L + J \frac{d\omega}{dt} + T_{friction}$

---

## 2. DC Drives

DC motors are widely used in adjustable speed drives due to their excellent speed-torque characteristics and ease of control. We will focus on Separately Excited DC (SEDC) motors.

### 2.1. Separately Excited DC (SEDC) Motor

An SEDC motor has its field winding and armature winding supplied from separate DC sources. This allows independent control of field flux and armature voltage, enabling wide speed and torque control.

**Basic Equations:**

*   **Torque:** $T = k_T \Phi I_a$
    where $k_T$ is the motor torque constant, $\Phi$ is the field flux, and $I_a$ is the armature current.
*   **Back EMF:** $E_b = k_E \Phi \omega$
    where $k_E$ is the back EMF constant and $\omega$ is the motor speed.
*   **Armature Circuit Equation:** $V_a = E_b + I_a R_a$
    where $V_a$ is the armature voltage and $R_a$ is the armature resistance.

**Constant Flux Operation:**
If the field flux $\Phi$ is kept constant, then:
*   $T \propto I_a$
*   $E_b \propto \omega$

**Variable Flux Operation (Constant Armature Voltage):**
If the armature voltage is kept constant, then:
*   $T \propto \Phi I_a$
*   $\omega \propto \frac{1}{\Phi}$

---

## 3. Chopper Control of Separately Excited DC Drives

DC choppers are power electronic converters that step down DC voltage. They are used to vary the armature voltage of a DC motor, thereby controlling its speed.

**Chopper Operation:**
A DC chopper essentially switches a DC voltage source on and off rapidly. The average output voltage is controlled by varying the duty cycle ($ \alpha $) of the switch (e.g., MOSFET, IGBT).
$V_{out(avg)} = \alpha V_{in}$
where $ \alpha = \frac{T_{on}}{T_{on} + T_{off}} $, and $T_{on}$ and $T_{off}$ are the ON and OFF times of the switch.

**Continuous Conduction Mode:** In this mode, the armature current ($I_a$) does not drop to zero during the OFF period of the chopper. This is desirable for smooth operation and torque production.

### 3.1. One-Quadrant Chopper Fed Drive

This configuration allows for motoring operation in the first quadrant (positive speed and positive torque).

**Block Diagram:**

```
+----------+     +---------+     +-----------+     +--------+
| DC Source| --> | Chopper | --> | SEDC Motor| --> | Load   |
+----------+     +---------+     +-----------+     +--------+
                     ^                                  ^
                     | Control Signal                   | Speed/Current Feedback
                     +----------------------------------+
```

**Operation:**
1.  The chopper switches a DC voltage source ($V_s$) to the motor armature.
2.  When the switch is ON, $V_a \approx V_s$. The motor accelerates, and current increases.
3.  When the switch is OFF, $V_a \approx 0$. The armature current circulates through a freewheeling diode, maintaining a positive current. The motor decelerates due to load and friction.
4.  By varying the duty cycle ($\alpha$) of the chopper, the average armature voltage ($V_{a(avg)} = \alpha V_s$) is controlled, thus controlling the motor speed.

**Speed-Torque Characteristic:**
*   For a constant field flux ($\Phi$), $T \propto I_a$.
*   The average armature voltage $V_{a(avg)} = \alpha V_s = E_b + I_a R_a$.
*   Since $E_b = k_E \Phi \omega$, we have $\alpha V_s = k_E \Phi \omega + I_a R_a$.
*   In continuous conduction, the instantaneous current is pulsed, but the average current dictates the average torque. For simplicity in speed-torque characteristics, we often consider the average values.
*   $V_{a(avg)} \approx k_E \Phi \omega + I_{a(avg)} R_a$.
*   $I_{a(avg)} = \frac{T}{k_T \Phi}$.
*   $\alpha V_s \approx k_E \Phi \omega + \frac{T}{k_T \Phi} R_a$.
*   $\omega \approx \frac{\alpha V_s - I_{a(avg)} R_a}{k_E \Phi} = \frac{\alpha V_s - \frac{T}{k_T \Phi} R_a}{k_E \Phi}$.
*   At constant $\alpha$ and $\Phi$, the speed-torque characteristic is a straight line with negative slope.
*   Increasing $\alpha$ shifts the characteristic upwards, increasing speed for a given torque.

**Speed Control:**
Speed is controlled by varying the duty cycle ($\alpha$) of the chopper, which directly controls the average armature voltage.

### 3.2. Two-Quadrant Chopper Fed Drive

This drive can operate in Quadrant I (motoring: positive speed, positive torque) and Quadrant II (regenerative braking: positive speed, negative torque).

**Block Diagram:**
This requires a chopper circuit capable of reversing the direction of current in the armature, or using a combination of switches. A common approach is a bidirectional chopper or two unidirectional choppers. A simpler concept for analysis uses a unidirectional chopper with a freewheeling path, but for regeneration, the voltage across the armature needs to be reversed relative to the current.

A practical two-quadrant drive can be implemented with a **Type-B chopper** or a **Type-C chopper** configuration.

**Type-B Chopper:**
*   Consists of a main switch (e.g., IGBT) and a diode.
*   The diode is connected in series with the motor, and the switch is in parallel with the motor and diode.
*   **Motoring (Quadrant I):** Similar to the one-quadrant chopper. When the main switch is ON, voltage is applied, and current increases. When OFF, current freewheels through the diode.
*   **Regenerative Braking (Quadrant II):** The DC source is replaced by a battery or an inductor. The motor acts as a generator. The generated EMF ($E_b$) drives current through the armature. When the main switch is ON, current flows from the armature through the switch to the DC link/source. When OFF, the current freewheels through the diode back to the armature. This allows for controlled braking and energy return to the source.

**Operation Summary:**
*   **Motoring:** Chopper ON ($V_a = V_s$), Chopper OFF ($V_a = 0$, freewheeling diode conducts). Average $V_a$ is positive, controlled by $\alpha$.
*   **Regenerative Braking:** Motor EMF $E_b$ drives current. Chopper ON ($V_a = -V_{source}$ effectively, current flows out of armature through switch), Chopper OFF ($V_a = 0$, current freewheels through diode). Average $V_a$ is effectively negative, controlled by varying the ON time relative to the switching period.

**Speed-Torque Characteristic:**
*   **Quadrant I (Motoring):** Similar to the one-quadrant drive.
*   **Quadrant II (Regenerative Braking):** Motor acts as a generator. $E_b = k_E \Phi \omega$. Load torque $T_L$ acts as braking torque.
    *   $E_b = V_a + I_a R_a$ (where $V_a$ is the voltage applied by the chopper).
    *   To brake, the chopper must apply a voltage such that current flows out of the armature, causing a braking torque $T = k_T \Phi I_a$ opposite to the direction of rotation.
    *   In a Type-B chopper for regeneration, when the switch is ON, $V_a$ is applied to the armature. $E_b$ drives current through the switch. $E_b = V_a + I_a R_a$. For braking, $I_a$ should be negative (opposite to motoring current), and $T$ should be negative.
    *   The average voltage across the motor terminals during switching can be controlled to regulate the braking torque and speed.

**Speed Control:**
*   **Motoring:** Controlled by varying the duty cycle of the chopper to control the average armature voltage.
*   **Regenerative Braking:** Controlled by varying the duty cycle to regulate the current drawn from the armature, thereby controlling the braking torque.

### 3.3. Four-Quadrant Chopper Fed Drive

This drive can operate in all four quadrants:
*   Quadrant I: Motoring (positive speed, positive torque)
*   Quadrant II: Regenerative Braking (positive speed, negative torque)
*   Quadrant III: Motoring (negative speed, negative torque)
*   Quadrant IV: Regenerative Braking (negative speed, positive torque)

**Block Diagram:**
A four-quadrant drive typically uses a **Type-D chopper** or a **Type-E chopper**. A more flexible configuration uses a reversible DC-DC converter, often implemented using a bridge of four switches (similar to an H-bridge).

**H-Bridge Configuration for DC Motor:**
The H-bridge consists of four switches (e.g., IGBTs or MOSFETs) and four diodes.

```
           +-------+
      +----|  SW1  |----+
      |    +-------+    |
      |     D1 /       / D2
      |      /       /
+----+-----\-------/-----+----+
| DC Source |     | DC Source |
+----+-----\-------/-----+----+
      |      \       \
      |     D4 \       / D3
      |    +-------+    |
      +----|  SW2  |----+
           +-------+
```
(This simplified H-bridge diagram shows two pairs of switches. A full H-bridge has 4 switches).

**Operation:**

*   **Quadrant I (Motoring):**
    *   SW1 and SW4 ON: Positive voltage applied to the motor ($V_a = +V_{dc}$). Current flows from DC source, through SW1, motor armature, SW4, to DC return. Torque is positive.
*   **Quadrant II (Regenerative Braking):**
    *   SW2 and SW3 ON: Motor acts as a generator. Generated EMF drives current through SW2, back to the DC source. $V_a$ is effectively reversed relative to current. Current flows out of the armature, through SW2, and back to the DC bus. Torque is negative (braking).
*   **Quadrant III (Motoring):**
    *   SW2 and SW3 ON (same as QII initial state, but control pulses are different to cause motoring): Negative voltage applied to the motor ($V_a = -V_{dc}$). Current flows from DC return, through SW3, motor armature, SW2, to DC source. Torque is negative.
*   **Quadrant IV (Regenerative Braking):**
    *   SW1 and SW4 ON (same as QI initial state, but control pulses are different to cause braking): Motor acts as a generator. Generated EMF drives current through SW1, back to the DC source. Current flows out of the armature, through SW1, and back to the DC bus. Torque is positive (braking).

**Control Strategy:**
*   To achieve motoring in Q1, SW1 and SW4 are switched ON/OFF with a duty cycle $\alpha$.
*   To achieve motoring in Q3, SW2 and SW3 are switched ON/OFF with a duty cycle $\alpha$.
*   To achieve braking in Q2 or Q4, the switches are controlled to allow current to flow back to the source while the motor is generating.

**Speed-Torque Characteristics:**
*   The characteristics are linear with negative slopes in all four quadrants, similar to the DC motor's inherent characteristics, but shifted and scaled by the duty cycle and voltage.
*   For motoring (Q1 & Q3), increasing the duty cycle increases the average voltage, leading to higher speed for a given torque.
*   For braking (Q2 & Q4), controlling the duty cycle regulates the current returned to the source, thus controlling the braking torque.

**Speed Control:**
*   **Motoring:** Vary the duty cycle of the switches that apply voltage to the motor in the desired direction.
*   **Braking:** Vary the duty cycle to control the amount of current returned to the source, thereby controlling braking torque.

---

## 4. Controlled Rectifier Fed Separately Excited DC Motor Drive

Controlled rectifiers use thyristors or other controllable switches to convert AC voltage to controllable DC voltage. This allows for speed control of DC motors from an AC supply.

**Key Principle:**
The output DC voltage of a controlled rectifier is controlled by adjusting the firing angle ($ \alpha $) of the thyristors.

### 4.1. Single-Phase Controlled Rectifier Fed SEDC Motor Drive

**Continuous Conduction Only:** Assumes the armature current remains continuous throughout the cycle.

**Block Diagram:**

```
+----------+     +--------------------+     +-----------+     +--------+
| AC Supply| --> | Single-Phase       | --> | SEDC Motor| --> | Load   |
|          |     | Controlled Rectifier|     +-----------+     +--------+
+----------+     +--------------------+             ^
                                                    | Speed/Current Feedback
                                                    +---------------------+
                                                    | Control System      |
                                                    +---------------------+
```

**Types:**

*   **Fully Controlled Rectifier (e.g., Thyristor Bridge):** Uses thyristors in both the positive and negative legs of the bridge.
*   **Semi-Controlled Rectifier (e.g., Thyristor-Diode Bridge):** Uses thyristors and diodes.

**Operation (Fully Controlled Rectifier):**
1.  The firing angle ($\alpha$) of the thyristors determines the output DC voltage.
2.  For $0 \le \alpha < \pi/2$, the average output voltage is positive.
3.  For $\pi/2 < \alpha \le \pi$, the average output voltage is negative.
4.  The motor speed is controlled by adjusting $\alpha$ to vary the average armature voltage $V_{a(avg)}$.

**Average Output Voltage Formulas:**
*   **Full-Wave Controlled Rectifier (Center-Tapped Transformer):** $V_{a(avg)} = \frac{2V_m}{\pi} \cos \alpha$, where $V_m$ is the peak secondary voltage.
*   **Single-Phase Full Bridge Controlled Rectifier:** $V_{a(avg)} = \frac{2V_m}{\pi} \cos \alpha$, where $V_m$ is the peak AC input voltage.

**Speed-Torque Characteristics:**
*   For a constant field flux, $T \propto I_a$.
*   $V_{a(avg)} = E_b + I_{a(avg)} R_a$.
*   $E_b = k_E \Phi \omega$.
*   $I_{a(avg)} = \frac{T}{k_T \Phi}$.
*   $V_{a(avg)} = k_E \Phi \omega + \frac{T}{k_T \Phi} R_a$.
*   $\omega = \frac{V_{a(avg)} - I_{a(avg)} R_a}{k_E \Phi} = \frac{V_{a(avg)} - \frac{T}{k_T \Phi} R_a}{k_E \Phi}$.
*   At constant $\alpha$ (and hence constant $V_{a(avg)}$) and constant $\Phi$, the speed-torque characteristic is a straight line with negative slope.
*   Increasing $V_{a(avg)}$ (by decreasing $\alpha$) shifts the characteristic upwards, increasing speed.

**Speed Control:**
*   **Motoring:** Speed is controlled by adjusting the firing angle $\alpha$ of the rectifier. Decreasing $\alpha$ increases $V_{a(avg)}$, thus increasing speed.
*   **Regenerative Braking:** By adjusting the firing angle into the inversion region ($\alpha > \pi/2$), the rectifier can operate as an inverter. The motor acts as a generator, and the generated power is fed back to the AC source. This requires a fully controlled rectifier. The average armature voltage becomes negative, causing the armature current to reverse and produce braking torque.

### 4.2. Three-Phase Controlled Rectifier Fed SEDC Motor Drive

Similar principles as single-phase, but with higher power handling capability and smoother output voltage/current.

**Block Diagram:**
Similar to the single-phase block diagram, but with a three-phase AC supply and a three-phase controlled rectifier.

**Operation:**
*   A three-phase full-wave controlled rectifier (e.g., 3-phase bridge rectifier with 6 thyristors) is used.
*   The output DC voltage is controlled by adjusting the firing angle $\alpha$ of the thyristors.
*   The average output voltage is given by:
    $V_{a(avg)} = \frac{3V_m}{\pi} \cos \alpha$ (for a 3-phase full bridge rectifier), where $V_m$ is the peak phase voltage.
*   This provides motoring operation for $0 \le \alpha < \pi/2$ and regenerative braking for $\pi/2 < \alpha \le \pi$.

**Speed-Torque Characteristics:**
*   Similar to the single-phase case, but the output voltage is more continuous, leading to smoother operation.
*   Linear speed-torque characteristics with negative slopes, which shift upwards with decreasing $\alpha$.

**Speed Control:**
*   **Motoring:** Achieved by decreasing the firing angle $\alpha$, increasing $V_{a(avg)}$.
*   **Regenerative Braking:** Achieved by increasing the firing angle $\alpha$ beyond $\pi/2$, causing the rectifier to operate as an inverter and return power to the AC source.

---

## 5. Dual Converter Drives (Single Phase)

A dual converter consists of two similar controlled rectifiers (converters) connected in inverse parallel. One converter (main converter) operates for motoring in one direction, and the other converter (active-filter or circulating-current converter) operates for motoring in the reverse direction or for braking.

**Purpose:** To achieve four-quadrant operation from a single AC source without requiring a reversing switch.

**Types:**

### 5.1. Circulating Current Type Dual Converter

*   **Operation:** Both converters are always connected to the DC motor. A current-limiting reactor is placed in series with the DC link to limit the circulating current between the two converters.
*   **Advantages:** Simpler control due to continuous conduction.
*   **Disadvantages:** Requires a reactor, which adds cost and size. Energy loss in the reactor.

**Block Diagram:**

```
+----------+     +--------------------+     +-----------------+     +-----------+     +--------+
| AC Supply| --> | Single-Phase       | --> | Current-        | --> | SEDC Motor| --> | Load   |
|          |     | Controlled Rectifier |     | Limiting Reactor|     +-----------+     +--------+
+----------+     | (Converter 1)      |     +-----------------+             ^
                 +--------------------+                                     | Speed/Current Feedback
                 +--------------------+                                     +---------------------+
                 | Single-Phase       | -->                                  | Control System      |
                 | Controlled Rectifier |                                    +---------------------+
                 | (Converter 2)      |
                 +--------------------+
```

**Control:**
*   For motoring in one direction, the corresponding converter is activated.
*   For braking or motoring in the opposite direction, the other converter is activated.
*   The circulating current is controlled by the relative firing angles of the two converters.

### 5.2. Non-Circulating Current Type Dual Converter

*   **Operation:** Only one converter is active at a time. The inactive converter is blocked. A reversing switch is required to reverse the polarity of the armature voltage if DC-DC converters are not used. Alternatively, if the dual converter itself inherently provides reversal, no external switch is needed.
*   **Advantages:** No circulating current, hence no reactor needed. Higher efficiency.
*   **Disadvantages:** Requires a mechanism to switch between converters, which can be complex.

**Block Diagram (Simplified, without explicit reversing switch for AC-DC conversion):**

```
+----------+     +--------------------+     +-----------+     +--------+
| AC Supply| --> | Single-Phase       | --> | SEDC Motor| --> | Load   |
|          |     | Dual Converter     |     +-----------+     +--------+
|          |     | (2 Converters)     |             ^
+----------+     +--------------------+             | Speed/Current Feedback
                                                    +---------------------+
                                                    | Control System      |
                                                    +---------------------+
```

**Control:**
*   One converter is fired to provide positive voltage for motoring.
*   The other converter is fired (with appropriate phase shift) to provide negative voltage for motoring in the reverse direction or positive voltage for regenerative braking (when the motor acts as a generator).
*   A logic ensures that only one converter is ON at any given time to prevent short-circuiting the AC supply.

**Speed-Torque Characteristics:**
*   **Non-Circulating Current Type:** Similar to four-quadrant chopper drives, with linear characteristics in all four quadrants.
*   **Circulating Current Type:** The presence of the reactor can affect the transient response and the exact shape of the characteristics, but the fundamental principles remain the same.

**Speed Control:**
*   Speed is controlled by adjusting the firing angles of the converters.
*   Motoring in both directions and regenerative braking in both directions can be achieved.

---

## 6. Static Four-Quadrant Operation with SEDC Motor

This refers to achieving four-quadrant operation using static power converters, as opposed to older methods involving mechanical reversing switches. This is typically achieved using:

*   **Four-Quadrant DC-DC Converter (e.g., H-bridge Chopper):** As discussed in Section 3.3.
*   **Dual Converter (AC-DC-AC):** As discussed in Section 5.

The goal is to independently control both speed and torque in both directions.

**Key Principles for Four-Quadrant Operation:**

*   **Motoring:** Applying voltage across the armature in the direction that produces torque in the same direction as rotation.
    *   Positive speed, positive torque.
    *   Negative speed, negative torque.
*   **Regenerative Braking:** Applying voltage across the armature in the direction that produces torque opposite to rotation, thus slowing down the motor and returning energy to the source.
    *   Positive speed, negative torque.
    *   Negative speed, positive torque.

**Converter Topologies for Four-Quadrant Operation:**

1.  **H-Bridge DC-DC Converter (Chopper):**
    *   Uses four switching devices.
    *   Allows for bidirectional current and bidirectional voltage across the motor terminals by switching combinations.
    *   Input can be a DC source.

2.  **Dual Converter (AC-DC-AC):**
    *   Uses two controlled rectifiers in inverse parallel.
    *   The rectifiers convert AC to controllable DC.
    *   By controlling the firing angles of both rectifiers, motoring and regenerative braking in both directions can be achieved directly from the AC supply.

**Speed-Torque Characteristics:**

The ideal speed-torque characteristics for an SEDC motor are linear in all four quadrants, with the slope determined by the armature resistance and motor constants.

*   **Motoring:**
    *   Speed increases with increasing voltage (decreasing firing angle $\alpha$ for rectifiers or increasing duty cycle for choppers).
    *   Torque is proportional to armature current.
*   **Regenerative Braking:**
    *   The motor acts as a generator.
    *   Speed decreases as braking torque (and thus reverse current) increases.
    *   The power is fed back to the source.

**Example of Control:**

*   **To achieve motoring in Quadrant I (positive speed, positive torque):**
    *   **Chopper:** Apply positive average voltage to armature using an H-bridge (e.g., SW1 & SW4 ON/OFF).
    *   **Rectifier:** Use the main converter with firing angle $0 < \alpha < \pi/2$.
*   **To achieve regenerative braking in Quadrant II (positive speed, negative torque):**
    *   **Chopper:** Apply negative average voltage to armature using an H-bridge (e.g., SW2 & SW3 ON/OFF). Motor generates, current flows back to source.
    *   **Rectifier:** Use the main converter with firing angle $\pi/2 < \alpha < \pi$. Motor generates, power is fed back to AC source.
*   **To achieve motoring in Quadrant III (negative speed, negative torque):**
    *   **Chopper:** Apply negative average voltage to armature using an H-bridge (e.g., SW2 & SW3 ON/OFF).
    *   **Rectifier:** Use the auxiliary converter (or block converter 1 and use converter 2) with firing angle $0 < \alpha < \pi/2$ (effective negative voltage due to reversal by the dual converter logic).
*   **To achieve regenerative braking in Quadrant IV (negative speed, positive torque):**
    *   **Chopper:** Apply positive average voltage to armature using an H-bridge (e.g., SW1 & SW4 ON/OFF). Motor generates, current flows back to source.
    *   **Rectifier:** Use the auxiliary converter with firing angle $\pi/2 < \alpha < \pi$.

---

## Important Points to Remember

*   **SEDC Motor Characteristics:** $T \propto \Phi I_a$, $E_b \propto \Phi \omega$.
*   **Speed Control Methods:**
    *   **Armature Voltage Control:** Via choppers or controlled rectifiers.
    *   **Field Flux Control:** By varying field current (typically for speeds below base speed).
*   **Chopper Duty Cycle ($\alpha$):** Directly controls the average output voltage.
*   **Rectifier Firing Angle ($\alpha$):** Controls the average output voltage. $V_{avg} \propto \cos \alpha$.
*   **Quadrants of Operation:**
    *   Quadrant I: Motoring (+ speed, + torque)
    *   Quadrant II: Regenerative Braking (+ speed, - torque)
    *   Quadrant III: Motoring (- speed, - torque)
    *   Quadrant IV: Regenerative Braking (- speed, + torque)
*   **Regenerative Braking:** Occurs when the motor acts as a generator, and the generated power is fed back to the source. This requires the ability to reverse voltage or current polarity relative to the EMF.
*   **Four-Quadrant Operation:** Achieved using H-bridge choppers or dual converters.
*   **Continuous Conduction:** Essential for smooth operation and predictable torque.
*   **Dual Converter:** Enables four-quadrant operation from AC supply without mechanical reversing switches.

---

## Practice Questions with Answers

**Q1. Explain the principle of operation of a one-quadrant chopper fed separately excited DC motor drive.**

**Answer:** A one-quadrant chopper feeds a DC voltage to the armature of an SEDC motor. The chopper switches the DC supply ON and OFF rapidly. When the switch is ON, the motor receives the full DC supply voltage, causing acceleration and current buildup. When the switch is OFF, the armature current freewheels through a diode, and the motor decelerates due to load and friction. The average armature voltage, and thus the motor speed, is controlled by varying the duty cycle ($\alpha$) of the chopper. This drive operates only in the first quadrant (positive speed, positive torque).

**Q2. What is regenerative braking in the context of DC drives? How is it achieved using a two-quadrant chopper?**

**Answer:** Regenerative braking is a process where the motor acts as a generator during deceleration, and the kinetic energy of the rotating mass is converted into electrical energy, which is returned to the power source.
In a two-quadrant chopper (like a Type-B chopper), regenerative braking is achieved when the motor is driven by the load at a speed higher than the set speed. The armature voltage applied by the chopper is controlled such that it opposes the back EMF ($E_b$), causing the armature current to reverse its direction. This reversed current flows back to the DC source through the switching element (or a freewheeling path that allows return to the source). The reversed current produces a braking torque that opposes the direction of rotation, slowing down the motor.

**Q3. Describe the difference between circulating current and non-circulating current dual converters.**

**Answer:**
*   **Circulating Current Type:** Both converters are always connected to the DC motor. A current-limiting reactor is placed in the DC link to control the circulating current between the converters. This simplifies control but introduces losses and requires an additional component.
*   **Non-Circulating Current Type:** Only one converter is active at a time; the other is blocked. This avoids the need for a reactor and reduces losses, but requires a logic circuit to ensure only one converter is ON at any instant to prevent short-circuiting the AC supply.

**Q4. For a controlled rectifier fed SEDC motor, how does varying the firing angle ($\alpha$) affect the speed-torque characteristics?**

**Answer:** For an SEDC motor fed by a controlled rectifier, the average armature voltage is given by $V_{a(avg)} = k \cos \alpha$, where $k$ is a constant. The speed equation is approximately $\omega \approx \frac{V_{a(avg)} - I_{a(avg)} R_a}{k_E \Phi}$.
*   **Decreasing $\alpha$ (moving towards 0 degrees):** Increases $V_{a(avg)}$ (for motoring). This shifts the speed-torque characteristic upwards, resulting in higher speeds for any given torque.
*   **Increasing $\alpha$ (moving towards 90 degrees):** Decreases $V_{a(avg)}$ for motoring, shifting the characteristic downwards and reducing speed.
*   **Increasing $\alpha$ beyond 90 degrees:** Makes $V_{a(avg)}$ negative, leading to regenerative braking. The characteristics are in the negative torque region.

**Q5. Draw the block diagram of a static four-quadrant drive for an SEDC motor using an H-bridge chopper.**

**Answer:**
```
+----------+     +---------------------+     +-----------+     +--------+
| DC Source| --> | H-Bridge Chopper    | --> | SEDC Motor| --> | Load   |
+----------+     | (4 Switches)        |     +-----------+     +--------+
                 +---------------------+             ^
                                                     | Speed/Current Feedback
                                                     +---------------------+
                                                     | Control System      |
                                                     +---------------------+
```
**Explanation:** The H-bridge consists of four switches (e.g., IGBTs or MOSFETs). By controlling the switching of these four devices in different combinations, the polarity of the voltage applied to the motor armature and the direction of current flow can be controlled, enabling operation in all four quadrants.

---
**References:**

*   Power Electronics- Converters, Applications and Design, 3ed(Indian Adaptation) by Mohan, Undeland, Robbins
*   Power Electronics- Principles and Applications by Joseph Vithayathil
*   Power Electronics by Muhammad H. Rashid
*   Fundamentals of Electric Drives by G K Dubey
