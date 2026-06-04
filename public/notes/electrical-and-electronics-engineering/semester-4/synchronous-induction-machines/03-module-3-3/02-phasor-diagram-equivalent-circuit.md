---
title: "Phasor diagram - equivalent circuit"
subject: "SYNCHRONOUS & INDUCTION MACHINES"
module: "Module 3: 3"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35df7"
status: "completed"
scrapedAt: "2026-05-23T16:19:15.051Z"
---
# SYNCHRONOUS & INDUCTION MACHINES - Module 3: Phasor Diagram - Equivalent Circuit

## Introduction

This module focuses on understanding the fundamental principles behind synchronous and induction machines by analyzing their **equivalent circuits** and representing their operating conditions using **phasor diagrams**. These tools are crucial for predicting machine performance, understanding losses, and designing efficient operating strategies.

**Learning Outcomes Covered:**

*   Understanding the equivalent circuit representation of both synchronous and induction machines.
*   Developing and interpreting phasor diagrams for various operating conditions.
*   Analyzing the impact of load on machine performance through equivalent circuits and phasor diagrams.
*   Relating these concepts to the performance of synchronous generators (CO1), synchronous motors (CO2), and induction motors (CO3).

## 3.1 Equivalent Circuit of a Synchronous Machine

Synchronous machines (both generators and motors) can be represented by a fundamental equivalent circuit that accounts for the stator winding impedance, the field winding excitation, and the mechanical power converted to electrical power (or vice-versa).

### 3.1.1 Synchronous Generator Equivalent Circuit

A synchronous generator converts mechanical power into electrical power. The equivalent circuit represents one phase of the machine.

**Key Components:**

*   **Armature Winding Resistance ($R_a$):** Represents the DC resistance of the armature windings. (Refer to Bhimbra, Chapter 5; Kothari & Nagrath, Chapter 11)
*   **Armature Winding Leakage Reactance ($X_{al}$):** Represents the magnetic flux that links only the armature winding and not the air gap.
*   **Armature Reaction Reactance ($X_a$):** Represents the effect of the armature magnetic field on the main field flux. This is dependent on the load current and its phase.
*   **Synchronous Reactance ($X_s = X_{al} + X_a$):** The total reactance presented to the armature current by the stator winding and the armature reaction. (Refer to Say, Chapter 7; Gupta, Chapter 10)
*   **Induced EMF ($E_f$ or $E_a$):** The electromotive force generated due to the rotation of the field poles in the armature winding. This is directly proportional to the field excitation.
*   **Terminal Voltage ($V_t$):** The voltage available at the terminals of the machine.

**Circuit Diagram (Per Phase):**

```
      Ef ---jXa   jXal
      |     |    |
     ( )   ( )  ( )
      |     |    |
      Ra   Load
      |     |
      -----
       Vt
```

*   The induced EMF ($E_f$) is in series with the armature resistance ($R_a$) and the synchronous reactance ($X_s$, often split into $X_a$ and $X_{al}$).
*   The voltage drop across $R_a$ and $X_s$ occurs due to the armature current ($I_a$).

**Mathematical Representation (Per Phase):**

$V_t = E_f - I_a(R_a + jX_s)$

**Important Note:** The sign convention for armature reaction depends on whether the machine is operating as a generator or a motor. For a generator, $E_f$ is the driving voltage and $V_t$ is the output voltage, hence the subtraction of voltage drops.

### 3.1.2 Synchronous Motor Equivalent Circuit

A synchronous motor converts electrical power into mechanical power. The equivalent circuit is similar to that of a generator, but the direction of power flow and the voltage-EMF relationship are reversed.

**Key Components:**

*   The components ($R_a$, $X_s$) are the same as for a generator.
*   **Induced Back EMF ($E_b$):** When operating as a motor, the rotating magnetic field induces a back EMF ($E_b$) in the armature windings, opposing the applied voltage. This back EMF is proportional to the field excitation.

**Circuit Diagram (Per Phase):**

```
      Vt ----jXa   jXal
      |     |    |
     ( )   ( )  ( )
      |     |    |
      Ra   Load
      |     |
      -----
       Eb
```

**Mathematical Representation (Per Phase):**

$V_t = E_b + I_a(R_a + jX_s)$

**Key Concept:** The synchronous motor's performance is highly dependent on the excitation and the phase difference between $V_t$ and $E_b$. By varying excitation, the power factor can be controlled.

---

## 3.2 Phasor Diagram of a Synchronous Machine

Phasor diagrams provide a visual representation of the voltages, currents, and fluxes within a synchronous machine at a given instant. They are crucial for understanding the phase relationships and magnitudes of these quantities, and how they change with load and excitation.

### 3.2.1 Phasor Diagram of a Synchronous Generator

**Scenario: Lagging Power Factor Load**

*   **Reference Phasor:** Terminal Voltage ($V_t$) is usually taken as the reference.
*   **Armature Current ($I_a$):** Lags $V_t$ by an angle $\phi$.
*   **Voltage Drop ($I_aR_a$):** Is in phase with $I_a$.
*   **Voltage Drop ($I_aX_s$):** Leads $I_a$ by 90 degrees.
*   **Induced EMF ($E_f$):** $E_f = V_t + I_a(R_a + jX_s)$. $E_f$ will lead $V_t$ by an angle $\delta$ (the load angle).

**Phasor Diagram Construction (Lagging PF):**

1.  Draw $V_t$ as the reference.
2.  Draw $I_a$ lagging $V_t$ by $\phi$.
3.  Draw $I_aR_a$ in phase with $I_a$.
4.  Draw $jI_aX_s$ leading $I_a$ by 90 degrees.
5.  $E_f$ is the phasor sum of $V_t$, $I_aR_a$, and $jI_aX_s$. Alternatively, $E_f$ can be thought of as leading $V_t$ by $\delta$.

**Scenario: Leading Power Factor Load**

*   **Armature Current ($I_a$):** Leads $V_t$ by an angle $\phi$.
*   The construction is similar, but $I_a$ is drawn leading $V_t$. The $I_aR_a$ and $jI_aX_s$ drops will be in phase and leading $I_a$ respectively.

**Scenario: Unity Power Factor Load**

*   **Armature Current ($I_a$):** In phase with $V_t$.

**Important Points for Generator Phasor Diagrams:**

*   The load angle ($\delta$) is the angle between the resultant air-gap flux and the terminal voltage. It represents the mechanical lag of the rotor relative to the rotating stator field.
*   For a given field excitation, as the load increases (and $\delta$ increases), the induced EMF ($E_f$) required to maintain terminal voltage and deliver power increases.

### 3.2.2 Phasor Diagram of a Synchronous Motor

**Scenario: Lagging Power Factor Load**

*   **Reference Phasor:** Terminal Voltage ($V_t$).
*   **Armature Current ($I_a$):** Lags $V_t$ by an angle $\phi$.
*   **Voltage Drop ($I_aR_a$):** Is in phase with $I_a$.
*   **Voltage Drop ($I_aX_s$):** Leads $I_a$ by 90 degrees.
*   **Induced Back EMF ($E_b$):** $E_b = V_t - I_a(R_a + jX_s)$. $E_b$ will lag $V_t$ by an angle $\delta$.

**Phasor Diagram Construction (Lagging PF):**

1.  Draw $V_t$ as the reference.
2.  Draw $I_a$ lagging $V_t$ by $\phi$.
3.  Draw $I_aR_a$ in phase with $I_a$.
4.  Draw $jI_aX_s$ leading $I_a$ by 90 degrees.
5.  $E_b$ is obtained by subtracting the voltage drops from $V_t$. It will be seen to lag $V_t$ by $\delta$.

**Scenario: Leading Power Factor Load**

*   **Armature Current ($I_a$):** Leads $V_t$ by an angle $\phi$.
*   The construction is similar, with $I_a$ leading $V_t$.

**Scenario: Unity Power Factor Load**

*   **Armature Current ($I_a$):** In phase with $V_t$.

**Effect of Excitation on Synchronous Motor Phasor Diagrams (V-Curves):**

*   By varying the field excitation ($E_b$), the armature current ($I_a$) and its power factor change for a constant mechanical load and terminal voltage.
*   **Under-excitation:** $E_b < V_t$. $I_a$ lags $V_t$.
*   **Normal excitation:** $E_b = V_t$ (approximately). $I_a$ is in phase with $V_t$ (unity PF).
*   **Over-excitation:** $E_b > V_t$. $I_a$ leads $V_t$.

The locus of the tip of the $I_a$ phasor as excitation is varied, at constant load, forms a **V-curve**. (Refer to Bhimbra, Chapter 6; Kothari & Nagrath, Chapter 11; Gupta, Chapter 10)

**CO1 Alignment:** Understanding the generator phasor diagram helps analyze performance under various load conditions (lagging, leading, unity PF) and how excitation affects generated voltage.
**CO2 Alignment:** Synchronous motor phasor diagrams are directly used to analyze performance under various load conditions and, importantly, how excitation affects power factor and armature current, leading to the concept of V-curves.

---

## 3.3 Equivalent Circuit of an Induction Machine

Induction machines operate on the principle of electromagnetic induction. Their equivalent circuit is a powerful tool for analyzing their behavior under different operating conditions.

### 3.3.1 Per-Phase Equivalent Circuit

The per-phase equivalent circuit of an induction motor is derived by considering the stator and rotor circuits.

**Key Components:**

*   **Stator Winding Resistance ($R_1$):** Resistance of the stator winding.
*   **Stator Winding Leakage Reactance ($X_{l1}$):** Reactance due to leakage flux in the stator.
*   **Magnetizing Reactance ($X_m$):** Represents the reluctance of the magnetic circuit. It's connected in parallel with the series combination of $R_1$ and $X_{l1}$.
*   **Core Loss Resistance ($R_c$):** Represents the power loss due to hysteresis and eddy currents in the core. Often lumped with $R_1$ or considered separately.
*   **Rotor Resistance Referred to Stator ($R'_2$):** The rotor resistance, scaled to be represented in the stator circuit.
*   **Rotor Leakage Reactance Referred to Stator ($X'_{l2}$):** The rotor leakage reactance, scaled to be represented in the stator circuit.
*   **Load Resistance ($R_{load}$):** Represents the mechanical output power developed by the motor. It is related to the air-gap power and slip. $R_{load} = R'_2 \left(\frac{1-s}{s}\right)$.

**Circuit Diagram (Per Phase):**

```
      V1 ----jXl1   Rc     jXm    R2'/(s)  jXl2'
      |      |     ||      |       |       |
     ( )    ( )    ( )    ( )     ( )     ( )
      |      |     ||      |       |       |
      R1     -----   -----  -------
             Magnetizing Branch
```

*   $V_1$: Applied stator phase voltage.
*   $I_1$: Stator current.
*   $I_m$: Magnetizing current.
*   $I_c$: Current representing core losses.
*   $I_2$: Rotor current referred to stator.

**Simplified Equivalent Circuit (Ignoring Core Losses):**

Often, the core loss resistance ($R_c$) is neglected for simplicity, and the magnetizing branch ($R_c || jX_m$) is represented by just $jX_m$. This is valid when the magnetizing current is small compared to the total stator current.

```
      V1 ----jXl1   jXm     R2'/(s)  jXl2'
      |      |     |       |       |
     ( )    ( )    ( )     ( )     ( )
      |      |     |       |       |
      R1     ----- -------
```

**The term $R'_2/s$ represents the mechanical power developed by the motor.**
*   $s$ is the slip.
*   Power dissipated in $R'_2$ is the electrical equivalent of mechanical friction and windage losses plus the useful output power.
*   The term $R'_2 \left(\frac{1-s}{s}\right)$ is the equivalent mechanical load resistance.

### 3.3.2 Phasor Diagram of an Induction Motor

The phasor diagram of an induction motor helps visualize the relationships between applied voltage, stator current, rotor current, internal voltages, and fluxes.

**Key Phasors:**

*   **Applied Voltage ($V_1$):** Reference phasor.
*   **Stator Current ($I_1$):** Lags $V_1$ by an angle $\phi_1$.
*   **Magnetizing Current ($I_m$):** Lags the applied voltage $V_1$ by approximately 90 degrees.
*   **Core Loss Current ($I_c$):** In phase with $V_1$.
*   **Rotor Current Referred ($I'_2$):** $I'_2 = I_1 - I_m - I_c$ (if core losses are considered). In the simplified model, $I'_2 = I_1 - I_m$. $I'_2$ lags $V_1$ by a larger angle than $I_1$.
*   **Voltage Drop across Stator Impedance ($I_1(R_1 + jX_{l1})$):** This drop is in phase and leads $I_1$ by 90 degrees respectively.
*   **Air Gap Voltage ($V_m$):** The voltage across the magnetizing branch. $V_m = V_1 - I_1(R_1 + jX_{l1})$. This voltage is also the effective voltage inducing current in the rotor. It will lead $I_1$.

**Phasor Diagram Construction (Typical Lagging PF):**

1.  Draw $V_1$ as the reference.
2.  Draw $I_m$ lagging $V_1$ by ~90 degrees.
3.  Draw $I_c$ in phase with $V_1$.
4.  Draw $I_1$ such that $I_1 = I_c + I_m$ (vectorially). $I_1$ will lag $V_1$ by $\phi_1$.
5.  Draw $I_1R_1$ in phase with $I_1$.
6.  Draw $jI_1X_{l1}$ leading $I_1$ by 90 degrees.
7.  $V_m$ is the phasor sum of $V_1$ and $-I_1(R_1 + jX_{l1})$. This voltage $V_m$ is used to derive rotor current $I'_2$.
8.  The rotor current $I'_2$ will lag $V_m$ by an angle $\phi_2$ where $\tan \phi_2 = \frac{X'_{l2}}{R'_2/s}$.
9.  The power factor angle of the stator current $\phi_1$ is the angle between $V_1$ and $I_1$.

**Effect of Load:**

*   As the load increases, the stator current ($I_1$) increases.
*   The power factor angle ($\phi_1$) generally improves (becomes less lagging) up to a certain load, then deteriorates.
*   The air gap voltage ($V_m$) decreases with increased load.
*   The slip ($s$) increases with load, which increases the effective rotor resistance $R'_2/s$, leading to higher rotor current $I'_2$.

**(Refer to Bhimbra, Chapter 10; Say, Chapter 8; Kothari & Nagrath, Chapter 9; Gupta, Chapter 8)**

**CO3 Alignment:** The equivalent circuit and phasor diagram of induction motors are fundamental to analyzing their steady-state performance under various load conditions (e.g., starting, no-load, full-load). They help determine current, voltage, power factor, and efficiency.

---

## 3.4 Practice Questions and Answers

**Question 1 (Synchronous Machine):**
A 3-phase, 1000 kVA, 11 kV, 50 Hz synchronous generator has a synchronous reactance of 4 $\Omega$ per phase and armature resistance of 0.5 $\Omega$ per phase. If the generator is delivering 800 kW at 0.8 lagging power factor to the grid. Calculate the induced EMF per phase. (Assume Y-connection)

**Solution 1:**
*   Line voltage $V_L = 11$ kV.
*   Phase voltage $V_t = V_L / \sqrt{3} = 11000 / \sqrt{3} \approx 6350.9$ V.
*   Apparent power $S = 1000$ kVA.
*   Real power $P = 800$ kW.
*   Power factor PF = 0.8 lagging.
*   Stator current $I_a = S / (\sqrt{3} V_L) = 1000 \times 10^3 / (\sqrt{3} \times 11 \times 10^3) \approx 52.48$ A.
*   Alternatively, $I_a = P / (\sqrt{3} V_L \times PF) = 800 \times 10^3 / (\sqrt{3} \times 11 \times 10^3 \times 0.8) \approx 52.48$ A.
*   The current $I_a$ lags the voltage $V_t$ by $\phi = \cos^{-1}(0.8) \approx 36.87^\circ$.
*   We use the generator equation: $E_f = V_t + I_a(R_a + jX_s)$.
*   In phasor form, let $V_t = 6350.9 \angle 0^\circ$ V.
*   $I_a = 52.48 \angle -36.87^\circ$ A.
*   $R_a = 0.5 \Omega$.
*   $X_s = 4 \Omega$.
*   $I_a(R_a + jX_s) = 52.48 \angle -36.87^\circ \times (0.5 + j4)$
    *   $(0.5 + j4) = \sqrt{0.5^2 + 4^2} \angle \tan^{-1}(4/0.5) = \sqrt{0.25 + 16} \angle \tan^{-1}(8) = \sqrt{16.25} \angle 82.87^\circ \approx 4.03 \angle 82.87^\circ$
    *   $I_a(R_a + jX_s) = 52.48 \angle -36.87^\circ \times 4.03 \angle 82.87^\circ = (52.48 \times 4.03) \angle (-36.87^\circ + 82.87^\circ) = 211.5 \angle 46^\circ$
    *   Convert to rectangular form: $211.5 \cos(46^\circ) + j 211.5 \sin(46^\circ) \approx 147.0 + j 152.2$ V.
*   $E_f = V_t + I_a(R_a + jX_s) = (6350.9 \angle 0^\circ) + (147.0 + j152.2)$
    *   $E_f = 6350.9 + 147.0 + j152.2 = 6497.9 + j152.2$ V.
*   Magnitude of $E_f = \sqrt{6497.9^2 + 152.2^2} \approx 6500.4$ V.
*   The induced EMF per phase is approximately **6500.4 V**.

**Question 2 (Induction Motor):**
A 3-phase, 4-pole, 400 V, 50 Hz induction motor has the following per-phase parameters referred to the stator: $R_1 = 0.5 \Omega$, $X_{l1} = 1.0 \Omega$, $R'_2 = 0.4 \Omega$, $X'_{l2} = 0.8 \Omega$, $X_m = 30 \Omega$. The motor is operating at a slip of 0.04. Calculate the stator current and power factor. (Assume Y-connection and negligible core losses).

**Solution 2:**
*   Line voltage $V_L = 400$ V.
*   Phase voltage $V_1 = V_L / \sqrt{3} = 400 / \sqrt{3} \approx 230.9$ V.
*   Slip $s = 0.04$.
*   Rotor resistance referred $R'_2 = 0.4 \Omega$.
*   Effective rotor resistance related to load $R'_{load} = R'_2 / s = 0.4 / 0.04 = 10 \Omega$.
*   Total rotor impedance referred $Z'_2 = (R'_2/s) + jX'_{l2} = 10 + j0.8 \Omega$.
*   Magnetizing reactance $X_m = 30 \Omega$.
*   Magnetizing branch impedance $Z_m = jX_m = j30 \Omega$.
*   Stator impedance $Z_{s1} = R_1 + jX_{l1} = 0.5 + j1.0 \Omega$.

*   We need to find the stator current $I_1$. We can use the approximate equivalent circuit by shifting the magnetizing branch to the input terminals.
*   Equivalent impedance seen by the source (approximate): $Z_{eq} \approx Z_{s1} + \frac{Z_m \times Z'_2}{Z_m + Z'_2}$
    *   $Z_m \times Z'_2 = j30 \times (10 + j0.8) = j300 + j^2 24 = -24 + j300$
    *   $Z_m + Z'_2 = j30 + 10 + j0.8 = 10 + j30.8$
    *   $\frac{-24 + j300}{10 + j30.8} = \frac{(-24 + j300)(10 - j30.8)}{(10 + j30.8)(10 - j30.8)} = \frac{-240 + j739.2 + j3000 - j^2 9240}{100 + 30.8^2} = \frac{-240 + 739.2 + 9240}{100 + 948.64} = \frac{9000 + j739.2}{1048.64} \approx 8.58 + j0.705$
*   $Z_{eq} \approx (0.5 + j1.0) + (8.58 + j0.705) = 9.08 + j1.705 \Omega$.
*   Magnitude of $Z_{eq} = \sqrt{9.08^2 + 1.705^2} = \sqrt{82.45 + 2.91} = \sqrt{85.36} \approx 9.24 \Omega$.
*   Angle of $Z_{eq} = \tan^{-1}(1.705 / 9.08) \approx \tan^{-1}(0.1878) \approx 10.65^\circ$.
*   So, $Z_{eq} \approx 9.24 \angle 10.65^\circ \Omega$.
*   Stator current $I_1 = V_1 / Z_{eq} = 230.9 \angle 0^\circ / 9.24 \angle 10.65^\circ \approx 25.0 \angle -10.65^\circ$ A.
*   Stator current magnitude $|I_1| \approx 25.0$ A.
*   Power factor (leading/lagging) is determined by the angle of $Z_{eq}$ with respect to $V_1$. Since the angle is positive (10.65°), the current leads the voltage if the impedance angle were positive. However, in an induction motor, the magnetizing branch makes the overall impedance angle positive when expressed as $V/I$. The current lags the voltage.
*   Power factor $\cos(\phi_1) = \cos(10.65^\circ) \approx 0.9827$ lagging.

**Answer:**
*   Stator current $|I_1| \approx 25.0$ A.
*   Power factor $\approx 0.9827$ lagging.

---

## 3.5 Important Points to Remember

*   **Synchronous Machines:** The excitation current ($I_f$) controls the induced EMF ($E_f$ for generator, $E_b$ for motor). The load angle ($\delta$) determines the power transfer. Varying excitation in a synchronous motor allows for power factor control (V-curves).
*   **Induction Machines:** The slip ($s$) is the key parameter that determines the induced voltage and frequency in the rotor, and consequently the torque and power output. The equivalent circuit's rotor resistance term $R'_2/s$ directly represents the mechanical power developed.
*   **Phasor Diagrams:** They are static representations of dynamic conditions. Always draw the reference phasor first (usually $V_t$ or $V_1$). Ensure correct phase relationships between currents, voltages, and voltage drops.
*   **Equivalent Circuit Simplification:** For induction motors, neglecting core losses and moving the magnetizing branch to the input terminals provides a simpler but often accurate approximation for calculations.
*   **Sign Conventions:** Pay close attention to the sign conventions when dealing with voltage drops ($I \cdot Z$) and induced EMFs in both types of machines. For generators, $E_f$ drives the current; for motors, $E_b$ opposes the applied voltage.

---
