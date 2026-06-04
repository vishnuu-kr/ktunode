---
title: "Single-Phase half-controlled/fully-controlled Rectifier fed PMDC/Separately excited DC motor drive"
subject: "POWER ELECTRONICS AND DRIVES LAB"
module: "Module 6: Single"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f3613f"
status: "completed"
scrapedAt: "2026-05-23T16:18:05.820Z"
---
# POWER ELECTRONICS AND DRIVES LAB - Module 6: Single-Phase Rectifiers and DC Motor Drives

## Topic: Single-Phase Half-Controlled/Fully-Controlled Rectifier Fed PMDC/Separately Excited DC Motor Drive

This module focuses on understanding and analyzing the operation of DC motor drives powered by single-phase controlled rectifiers. We will explore both half-controlled and fully-controlled rectifier configurations and their impact on the performance of Permanent Magnet DC (PMDC) and Separately Excited DC (SEDC) motors.

---

### **1. Introduction to DC Motor Drives**

**1.1 What is a DC Motor Drive?**
A DC motor drive is a system that controls the speed and/or torque of a DC motor. It typically involves a power converter to supply the appropriate DC voltage and current to the motor, along with a control system.

**1.2 Why DC Motor Drives?**
DC motors offer inherent advantages for variable speed applications due to:
*   **Simple speed control:** Speed is directly proportional to armature voltage, and torque is proportional to armature current.
*   **Good starting torque:** Suitable for applications requiring high initial torque.
*   **Ease of control:** Well-established control techniques.

**1.3 Types of DC Motors Used in Drives:**
*   **Permanent Magnet DC (PMDC) Motor:** The field flux is produced by permanent magnets. Simpler construction, efficient, and good for low to medium power applications.
*   **Separately Excited DC (SEDC) Motor:** The field winding is separately excited by a DC source. Offers better control over field flux, allowing for wider speed ranges.

---

### **2. Single-Phase Controlled Rectifiers**

Rectifiers are power electronic circuits that convert AC voltage to DC voltage. Controlled rectifiers use controllable switches (like SCRs or Thyristors) to control the output DC voltage.

**2.1 Half-Controlled Rectifier**
*   **Structure:** Uses a combination of diodes and thyristors.
    *   **Single-Phase Half-Wave Controlled Rectifier:** Uses one thyristor and one diode. Provides only half-wave rectification.
    *   **Single-Phase Fully Controlled Bridge (Circulating Current Mode):** Typically uses two thyristors and two diodes.
*   **Operation:** The output DC voltage is controlled by the firing angle ($\alpha$) of the thyristors. The thyristors are triggered at a specific delay angle after the start of the positive half-cycle of the AC input.
*   **Output Voltage Control:** The average DC output voltage ($V_{dc}$) is given by:
    *   For a single-phase half-wave controlled rectifier: $V_{dc} = \frac{V_m}{2\pi}(1 + \cos\alpha)$
    *   For a single-phase fully controlled bridge: $V_{dc} = \frac{2V_m}{\pi}\cos\alpha$
    where $V_m$ is the peak AC input voltage.
*   **Firing Angle ($\alpha$):** The angle at which the thyristor is turned on after the AC voltage waveform crosses zero. $0 \le \alpha \le \pi$.
*   **Discontinuous Conduction:** For certain operating conditions (e.g., light loads), the motor current may become discontinuous, leading to pulsating DC current.
*   **Key Features:**
    *   Simpler control circuit compared to fully controlled rectifiers.
    *   Lower cost.
    *   May have lower power factor.

**2.2 Fully-Controlled Rectifier**
*   **Structure:** Uses only controllable switches (thyristors or IGBTs).
    *   **Single-Phase Fully Controlled Bridge (Anti-Parallel configuration):** Uses four thyristors or four IGBTs (often in anti-parallel configurations for bidirectional current flow if needed).
*   **Operation:** Both positive and negative half-cycles of the AC input can be controlled by the firing angles of the switches.
*   **Output Voltage Control:**
    *   For a single-phase fully controlled bridge: $V_{dc} = \frac{2V_m}{\pi}\cos\alpha$
    *   By controlling the firing angle ($\alpha$), the DC output voltage can be varied from $V_m \frac{2}{\pi}$ (when $\alpha=0$) to $0$ (when $\alpha=\frac{\pi}{2}$). For $\alpha > \frac{\pi}{2}$, the rectifier operates in an inverter mode, feeding power back to the AC source.
*   **Key Features:**
    *   Full control over the output voltage.
    *   Can achieve continuous output voltage from $V_m \frac{2}{\pi}$ down to $-V_m \frac{2}{\pi}$ (though for DC motor drives, we typically operate in the positive voltage region).
    *   Better power factor compared to half-controlled rectifiers.
    *   Can operate as an inverter (regeneration).

---

### **3. DC Motor Drive Control with Rectifiers**

The speed of a DC motor is primarily controlled by adjusting the armature voltage. The rectifier acts as the interface between the AC source and the DC motor, providing a controllable DC voltage.

**3.1 Speed Control Principles**
The fundamental relationship for a DC motor is:
*   **Back EMF ($E_b$):** $E_b = K_a \omega_m$, where $K_a$ is the motor constant and $\omega_m$ is the motor speed.
*   **Torque ($T$):** $T = K_a I_a$, where $I_a$ is the armature current.

In a rectifier-fed DC motor drive, the armature voltage $V_a$ is provided by the rectifier's DC output voltage $V_{dc}$. Therefore, $V_a \approx V_{dc}$.
$V_a = E_b + I_a R_a$, where $R_a$ is the armature resistance.
Substituting $E_b = K_a \omega_m$, we get:
$V_{dc} = K_a \omega_m + I_a R_a$

For speed control, we vary $V_{dc}$ by adjusting the firing angle $\alpha$ of the rectifier.

**3.2 Drive Scheme using Half-Controlled Rectifier**

*   **Circuit Configuration:** A single-phase AC source, a half-controlled bridge rectifier (e.g., two thyristors, two diodes), and a DC motor. A freewheeling diode is often placed across the motor terminals to handle inductive loads and prevent voltage spikes.
*   **Operation:**
    *   The firing angle $\alpha$ of the thyristors is controlled.
    *   For $\alpha = 0$, the rectifier acts like a diode bridge, providing the maximum possible DC output voltage (no control).
    *   As $\alpha$ increases, the average DC output voltage decreases, thus reducing the motor speed.
    *   The motor current may be continuous or discontinuous depending on the load and firing angle. Discontinuous current can lead to torque pulsations and reduced efficiency.
*   **Speed-Torque Characteristics:** The characteristic curves will show that at higher firing angles (lower $V_{dc}$), the maximum achievable speed is reduced. The torque capability also decreases with decreasing voltage.
*   **Power Factor:** The input power factor of the AC supply is generally lower than that of a fully controlled rectifier, especially at higher firing angles, due to the harmonic content in the input current.

**3.3 Drive Scheme using Fully-Controlled Rectifier**

*   **Circuit Configuration:** A single-phase AC source, a fully controlled bridge rectifier (e.g., four thyristors or IGBTs), and a DC motor.
*   **Operation:**
    *   The firing angle $\alpha$ of all four switching devices is controlled.
    *   By varying $\alpha$ from $0$ to $\pi/2$, the DC output voltage can be smoothly controlled from its maximum value down to zero.
    *   This allows for precise speed control across a wide range.
    *   If operated with $\alpha > \pi/2$, the rectifier can act as an inverter, allowing for regenerative braking (returning energy to the AC source).
*   **Speed-Torque Characteristics:** Similar to the half-controlled rectifier, but with smoother voltage control and potentially better performance over the entire range.
*   **Power Factor:** Offers a better input power factor compared to half-controlled rectifiers, especially in the region $0 \le \alpha \le \pi/2$.

---

### **4. PMDC vs. Separately Excited DC Motor in Rectifier Drives**

**4.1 PMDC Motor Drive**
*   **Field Flux:** Constant (produced by permanent magnets).
*   **Speed Control:** Achieved solely by varying the armature voltage using the rectifier.
*   **Advantages:** Simple, efficient, no need for separate field excitation.
*   **Disadvantages:** Field flux cannot be weakened, limiting the maximum speed achievable through field weakening. Speed range is primarily achieved by varying armature voltage.

**4.2 Separately Excited DC Motor Drive**
*   **Field Flux:** Controlled by adjusting the field current.
*   **Speed Control:** Can be achieved in two regions:
    *   **Constant Torque Region (Below Base Speed):** Armature voltage control ($V_a$) using the rectifier, while keeping field flux constant. Speed is proportional to $V_a$.
    *   **Constant Power Region (Above Base Speed):** Armature voltage is kept at its maximum (or near maximum), and the field flux is weakened by reducing the field current. Speed is inversely proportional to field flux.
*   **Advantages:** Wider speed range, can achieve constant power operation.
*   **Disadvantages:** Requires a separate field excitation circuit, more complex system.

**4.3 Impact of Rectifier on Motor Performance:**
*   **Torque Ripple:** The pulsating nature of the rectified DC output voltage (especially with discontinuous current) can lead to torque pulsations and vibrations in the motor.
*   **Harmonics:** The output of controlled rectifiers contains harmonics, which can cause additional heating in the motor and affect its performance.
*   **Commutation:** In thyristor-based rectifiers, commutation (turn-off) of thyristors depends on the load current.

---

### **5. Practical Considerations and Lab Implementation**

**5.1 Gating/Triggering Circuits:**
*   Need for precise triggering of thyristors/IGBTs at the desired firing angle $\alpha$.
*   Commonly use pulse generation circuits based on oscillators and comparison techniques.
*   For SCRs, a unijunction transistor (UJT) or operational amplifiers can be used to generate trigger pulses.
*   For IGBTs, gate driver circuits are essential to provide the required voltage and current for switching. (Relates to CO1).

**5.2 Freewheeling Diode:**
*   A diode connected in inverse parallel with the motor (or across the rectifier output) is crucial for inductive loads.
*   It provides a path for the current to flow when the thyristors turn off, preventing voltage spikes and ensuring continuous current flow, thus reducing torque ripple.

**5.3 Load Considerations:**
*   **Resistive Load:** Simpler analysis, but not representative of a DC motor.
*   **Inductive Load (DC Motor):** Introduces inductance in the armature circuit, affecting current waveform and requiring a freewheeling diode.
*   **Constant Torque Load:** Torque is independent of speed (e.g., conveyor belts).
*   **Constant Power Load:** Power is constant, torque is inversely proportional to speed (e.g., winding operations).
*   **Fan/Pump Load:** Torque is proportional to the square of speed.

**5.4 Measurement and Analysis:**
*   Measure input AC voltage and current waveforms.
*   Measure output DC voltage and current waveforms.
*   Calculate average voltage and current.
*   Analyze RMS values and harmonic content.
*   Measure motor speed and torque (if applicable).
*   Calculate power factor and efficiency.

---

### **6. Course Outcome Alignment**

*   **CO1 (K5):** Understanding the operation of SCRs/IGBTs (devices), designing gate driver circuits for triggering at specific angles, and selecting heatsinks for power devices. This is directly applicable to the implementation of the rectifiers.
*   **CO2 (K4):** Analyzing the operation of half-controlled and fully-controlled rectifiers by understanding the control of firing angle, the impact on output voltage, and the resulting waveforms. This is central to the topic.
*   **CO3 (K3):** While the focus is on rectifiers (AC-DC), understanding the concept of switching in power electronics is foundational. If IGBTs are used, their switching characteristics become relevant.
*   **CO4 (K3):** Understanding how the rectifier configuration affects the input current waveform, power factor, and potentially efficiency, and how these relate to utility interface and load waveforms.
*   **CO5 (K4):** Analyzing the basic drive schemes for DC motors by understanding how the controlled rectifier provides variable voltage to control speed and torque. This module directly addresses DC motor drives.

---

### **7. Key Concepts and Definitions to Remember**

*   **Firing Angle ($\alpha$):** The delay angle between the zero crossing of the AC voltage and the triggering of the thyristor.
*   **Average DC Output Voltage ($V_{dc}$):** The mean value of the rectified DC voltage.
*   **RMS Value:** The effective value of a voltage or current waveform.
*   **Continuous Conduction Mode (CCM):** The motor armature current flows continuously throughout the cycle.
*   **Discontinuous Conduction Mode (DCM):** The motor armature current drops to zero during part of the cycle.
*   **Freewheeling Diode:** A diode providing a path for inductive current when the main switching devices turn off.
*   **Back EMF ($E_b$):** Voltage generated in the motor armature due to rotation.
*   **Base Speed:** The speed of a DC motor at rated armature voltage and rated field flux.
*   **Field Weakening:** Reducing the field flux to achieve speeds above base speed.
*   **Power Factor:** The ratio of real power to apparent power, indicating how effectively electrical power is being utilized.
*   **Harmonics:** Frequency components in the output voltage or input current that are integer multiples of the fundamental frequency.

---

### **8. Practice Questions and Answers**

**Question 1:**
A single-phase fully controlled bridge rectifier is used to feed a PMDC motor. The AC supply voltage is $230$ V RMS. The motor requires an average armature voltage of $150$ V for a certain speed. Calculate the required firing angle ($\alpha$).
*(Assume $V_m = \sqrt{2} \times 230$ V)*

**Answer 1:**
The RMS AC supply voltage is $V_{ac} = 230$ V.
The peak AC voltage is $V_m = \sqrt{2} \times V_{ac} = \sqrt{2} \times 230 \approx 325.27$ V.
For a single-phase fully controlled bridge rectifier, the average DC output voltage is given by:
$V_{dc} = \frac{2V_m}{\pi}\cos\alpha$
We are given $V_{dc} = 150$ V.
$150 = \frac{2 \times 325.27}{\pi}\cos\alpha$
$150 = \frac{650.54}{\pi}\cos\alpha$
$150 \approx 207.08 \cos\alpha$
$\cos\alpha = \frac{150}{207.08} \approx 0.7244$
$\alpha = \cos^{-1}(0.7244) \approx 43.58^\circ$

**Question 2:**
What is the purpose of a freewheeling diode in a DC motor drive fed by a single-phase rectifier?

**Answer 2:**
The purpose of a freewheeling diode is to provide a path for the inductive current of the DC motor when the thyristors (or other controllable switches) in the rectifier turn off. This prevents high voltage spikes across the switching devices due to the collapsing magnetic field in the motor's armature winding. It also helps to maintain smoother current flow and reduce torque ripple, especially in discontinuous conduction modes.

**Question 3:**
Compare the advantages and disadvantages of using a half-controlled rectifier versus a fully controlled rectifier for feeding a DC motor drive.

**Answer 3:**

| Feature             | Half-Controlled Rectifier                                 | Fully Controlled Rectifier                                |
| :------------------ | :-------------------------------------------------------- | :-------------------------------------------------------- |
| **Components**      | Diodes + Thyristors                                       | Thyristors/IGBTs only                                     |
| **Control Range**   | Limited (positive voltage only)                           | Wider (positive voltage, inverter mode possible)          |
| **Output Voltage**  | Smooth control from max to min positive value             | Smooth control from max positive to zero, and negative    |
| **Power Factor**    | Generally lower, especially at higher firing angles       | Generally higher in motoring operation ($0 \le \alpha \le \pi/2$) |
| **Complexity**      | Simpler trigger circuits                                  | More complex trigger circuits                             |
| **Cost**            | Lower (fewer controllable devices)                        | Higher (more controllable devices)                        |
| **Applications**    | Simpler speed control, lower power applications           | Precise speed control, regenerative braking, higher power |

**Question 4:**
In the context of a separately excited DC motor drive operating above base speed, what method is primarily used for speed control, and how is it achieved?

**Answer 4:**
Above base speed, speed control is primarily achieved through **field weakening**. This involves reducing the field flux ($\phi$). Since the armature voltage ($V_a$) is typically kept at its maximum rated value, and $E_b = K_a \omega_m \phi$, to increase speed ($\omega_m$) while keeping $E_b$ within limits, the field flux ($\phi$) must be reduced. This is done by reducing the field current ($I_f$) using a separate control circuit for the field winding.

---

### **9. Important Points to Remember**

*   The firing angle ($\alpha$) is the primary control parameter for single-phase controlled rectifiers.
*   Half-controlled rectifiers use a combination of diodes and thyristors, offering simpler control but potentially lower power factor.
*   Fully controlled rectifiers use only thyristors (or IGBTs), providing wider control range and better power factor.
*   The output voltage of a rectifier directly controls the armature voltage of the DC motor, thus controlling its speed.
*   A freewheeling diode is essential for inductive loads like DC motors to prevent voltage spikes and ensure smoother current.
*   PMDC motors have constant field flux, so speed control is solely by armature voltage.
*   SEDC motors allow for speed control in two regions: armature voltage control (below base speed) and field weakening (above base speed).
*   Discontinuous conduction mode can lead to torque pulsations and reduced efficiency.

---

This comprehensive study note covers the essential aspects of single-phase controlled rectifier-fed DC motor drives, aligning with the provided learning outcomes and course objectives. Remember to consult the recommended textbooks for deeper theoretical understanding and practical details.
