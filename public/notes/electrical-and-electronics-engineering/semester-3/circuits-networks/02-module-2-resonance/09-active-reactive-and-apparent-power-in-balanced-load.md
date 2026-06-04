---
title: "active, reactive and apparent 
power in balanced load"
subject: "CIRCUITS & NETWORKS"
module: "Module 2: Resonance"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35ac7"
status: "completed"
scrapedAt: "2026-05-23T16:11:29.436Z"
---
# CIRCUITS & NETWORKS: Module 2: Resonance

## Topic: Active, Reactive, and Apparent Power in Balanced Loads

---

### 1. Introduction to Power in AC Circuits

In AC circuits, power is a bit more complex than in DC circuits. Due to the presence of reactive components (inductors and capacitors), voltage and current may not always be in phase. This leads to different types of power that are crucial for understanding circuit behavior, efficiency, and power factor.

**Key Concept:** In AC circuits with sinusoidal excitation, power is not just a single value but is broken down into three components: active, reactive, and apparent power.

**Reference:** This concept is fundamental to AC circuit analysis and is extensively covered in **Van Valkenburg's "Network Analysis"** and **Sudhakar & Palli's "Circuits and Networks, Analysis and Synthesis"**.

---

### 2. Active Power (P)

**Definition:** Active power, also known as real power or true power, is the power that is actually dissipated by the circuit elements, primarily as heat in resistive components. It represents the useful power that performs work or is converted into other forms of energy.

**Units:** Watts (W) or Kilowatts (kW)

**Mathematical Representation:**
*   For a purely resistive load: $P = V_{rms} \cdot I_{rms}$
*   For any AC circuit: $P = V_{rms} \cdot I_{rms} \cdot \cos(\theta)$
    *   Where $V_{rms}$ is the RMS voltage across the load.
    *   $I_{rms}$ is the RMS current flowing through the load.
    *   $\theta$ is the phase difference between the voltage and current.
    *   $\cos(\theta)$ is the **power factor (PF)**.

**Key Points:**
*   Active power is always delivered to the load.
*   It is the power that contributes to the operation of devices like heaters, lights, and motors.
*   In purely inductive or capacitive circuits, the phase difference $\theta$ is $\pm 90^\circ$, so $\cos(\theta) = 0$, meaning no active power is consumed.

**Example:**
Consider a resistor of 10 $\Omega$ connected to an RMS voltage source of 230V.
$I_{rms} = V_{rms} / R = 230V / 10 \Omega = 23A$.
$P = V_{rms} \cdot I_{rms} = 230V \cdot 23A = 5290W = 5.29kW$.
Alternatively, $P = I_{rms}^2 \cdot R = (23A)^2 \cdot 10 \Omega = 5290W$.

---

### 3. Reactive Power (Q)

**Definition:** Reactive power is the power that is exchanged between the source and the reactive components (inductors and capacitors) in the circuit. It is associated with the energy stored and released by these components during each cycle. Inductors store energy in their magnetic fields, and capacitors store energy in their electric fields.

**Units:** Volt-Amperes Reactive (VAR) or Kilovolt-Amperes Reactive (kVAR)

**Mathematical Representation:**
*   For an inductive load: $Q_L = V_{rms} \cdot I_{rms} \cdot \sin(\phi)$ (positive sign)
*   For a capacitive load: $Q_C = -V_{rms} \cdot I_{rms} \cdot \sin(\phi)$ (negative sign)
    *   Where $\phi$ is the phase angle by which the voltage leads the current. (Note: $\theta$ in the active power formula is the angle of voltage *with respect to* current, so $\phi = -\theta$ if current lags voltage, and $\phi = \theta$ if current leads voltage. For consistency with reactive power conventions, we use $\phi$ here where positive Q is inductive.)

**Key Points:**
*   Reactive power does not perform useful work.
*   It is necessary for the operation of inductive loads (e.g., motors require magnetic fields).
*   An excess of reactive power can lead to voltage drops and reduced system efficiency.

**Example:**
Consider an inductor of 0.1 H connected to an RMS voltage source of 230V at 50 Hz.
The inductive reactance $X_L = \omega L = 2\pi f L = 2\pi (50 Hz)(0.1 H) = 31.42 \Omega$.
$I_{rms} = V_{rms} / X_L = 230V / 31.42 \Omega = 7.32 A$.
In an inductive circuit, current lags voltage by $90^\circ$, so $\phi = 90^\circ$.
$Q_L = V_{rms} \cdot I_{rms} \cdot \sin(90^\circ) = 230V \cdot 7.32A \cdot 1 = 1683.6 VAR = 1.68 kVAR$.

---

### 4. Apparent Power (S)

**Definition:** Apparent power is the total power delivered to the circuit, which is the vector sum of active power and reactive power. It represents the power that the electrical system (wires, transformers, generators) must be designed to handle.

**Units:** Volt-Amperes (VA) or Kilovolt-Amperes (kVA)

**Mathematical Representation:**
*   $S = V_{rms} \cdot I_{rms}$
*   $S = \sqrt{P^2 + Q^2}$ (from the power triangle)

**Key Points:**
*   Apparent power is the product of RMS voltage and RMS current.
*   It is the quantity that utility companies use to rate their equipment (e.g., transformers are rated in kVA).
*   The ratio of active power to apparent power is the power factor.

**Example:**
Using the resistor example from section 2:
$S = V_{rms} \cdot I_{rms} = 230V \cdot 23A = 5290 VA = 5.29 kVA$.
Since this is a purely resistive load, $Q = 0$.
$S = \sqrt{P^2 + Q^2} = \sqrt{(5290W)^2 + (0 VAR)^2} = 5290 VA$.

Using the inductor example from section 3:
$S = V_{rms} \cdot I_{rms} = 230V \cdot 7.32A = 1683.6 VA = 1.68 kVA$.
$P = 0$ (purely inductive)
$Q = 1683.6 VAR$
$S = \sqrt{P^2 + Q^2} = \sqrt{(0W)^2 + (1683.6 VAR)^2} = 1683.6 VA$.

---

### 5. The Power Triangle

**Concept:** The relationship between active power (P), reactive power (Q), and apparent power (S) can be visualized using a right-angled triangle, known as the power triangle.

*   **Adjacent Side:** Active Power (P)
*   **Opposite Side:** Reactive Power (Q) (positive for inductive, negative for capacitive)
*   **Hypotenuse:** Apparent Power (S)
*   **Angle:** The phase angle $\phi$ between voltage and current.

**Relationships:**
*   $P = S \cos(\phi)$
*   $Q = S \sin(\phi)$
*   $S = \sqrt{P^2 + Q^2}$
*   $\tan(\phi) = Q/P$

**Diagram:**

```
       S (Apparent Power)
      /|
     / |
    /  | Q (Reactive Power)
   /   |
  /    |
 /_____|
   P
(Active Power)
```

**Example:**
A load draws 10 kW of active power and requires 8 kVAR of reactive power.
*   **Type of Load:** Since Q is positive, the load is inductive.
*   **Apparent Power:** $S = \sqrt{P^2 + Q^2} = \sqrt{(10 \text{ kW})^2 + (8 \text{ kVAR})^2} = \sqrt{100 + 64} = \sqrt{164} \approx 12.81 \text{ kVA}$.
*   **Power Factor:** $\cos(\phi) = P/S = 10 \text{ kW} / 12.81 \text{ kVA} \approx 0.78$.
    Also, $\tan(\phi) = Q/P = 8 \text{ kVAR} / 10 \text{ kW} = 0.8$. So, $\phi = \arctan(0.8) \approx 38.66^\circ$.
    $\cos(38.66^\circ) \approx 0.78$.

**Reference:** The power triangle is a visual aid commonly used in **Suresh Kumar's "Electric Circuits & Networks"** and **Ravish R Singh's "Network Analysis and Synthesis"**.

---

### 6. Power Factor (PF)

**Definition:** The power factor (PF) is the cosine of the phase angle ($\phi$) between the voltage and current in an AC circuit. It represents the ratio of active power to apparent power.

**Formula:** $PF = \cos(\phi) = P/S$

**Interpretation:**
*   **PF = 1 (Unity PF):** When voltage and current are in phase ($\phi = 0^\circ$). This occurs in purely resistive circuits. All delivered power is active power.
*   **PF < 1 (Lagging PF):** Occurs in inductive circuits where current lags voltage ($\phi > 0^\circ$). This is common in industrial loads like motors.
*   **PF < 1 (Leading PF):** Occurs in capacitive circuits where current leads voltage ($\phi < 0^\circ$). This is less common for loads themselves but can occur if a capacitive element is dominant.

**Importance of Power Factor:**
*   **Efficiency:** A low power factor means a higher apparent power is required for the same amount of active power. This leads to increased current, larger conductors, higher I²R losses in the wiring, and increased voltage drops.
*   **System Capacity:** Utility companies must generate and transmit apparent power. A low PF strains the system's capacity for the useful work being done.
*   **Cost:** Industrial consumers are often penalized by utility companies for low power factors, as it increases their operational costs.

**Power Factor Correction:**
Adding capacitors to an inductive load can improve the power factor by supplying leading reactive power to counteract the lagging reactive power of the inductive load.

**Reference:** Power factor is a crucial concept related to all types of power and is thoroughly explained in all the recommended textbooks.

---

### 7. Balanced Loads in Three-Phase Systems

**Concept:** In a balanced three-phase system, the three individual phase voltages and currents have equal magnitudes and are displaced from each other by 120 electrical degrees. A balanced load is one where the impedances in each of the three phases are identical.

**Types of Balanced Loads:**
*   **Balanced Resistive Load:** Three identical resistors connected in star or delta.
*   **Balanced Inductive Load:** Three identical inductors connected in star or delta.
*   **Balanced Capacitive Load:** Three identical capacitors connected in star or delta.
*   **Balanced Series R-L Load:** Three identical series combinations of R and L.
*   **Balanced Series R-C Load:** Three identical series combinations of R and C.
*   **Balanced Parallel R-L Load:** Three identical parallel combinations of R and L.
*   **Balanced Parallel R-C Load:** Three identical parallel combinations of R and C.
*   **Balanced Series R-L-C Load:** Three identical series combinations of R, L, and C.

**Power Calculations in Balanced Three-Phase Systems:**
Let $V_p$ be the phase voltage, $I_p$ be the phase current, and $\phi$ be the phase angle difference between phase voltage and phase current.

*   **Phase Power (P_phase):** $P_{phase} = V_p \cdot I_p \cdot \cos(\phi)$
*   **Total Active Power (P_total):**
    *   For Star connection: $V_L = \sqrt{3} V_p$, $I_L = I_p$. So, $P_{total} = 3 \cdot P_{phase} = 3 \cdot V_p \cdot I_p \cdot \cos(\phi) = 3 \cdot (V_L/\sqrt{3}) \cdot I_L \cdot \cos(\phi) = \sqrt{3} V_L I_L \cos(\phi)$.
    *   For Delta connection: $V_L = V_p$, $I_L = \sqrt{3} I_p$. So, $P_{total} = 3 \cdot P_{phase} = 3 \cdot V_p \cdot I_p \cdot \cos(\phi) = 3 \cdot V_L \cdot (I_L/\sqrt{3}) \cdot \cos(\phi) = \sqrt{3} V_L I_L \cos(\phi)$.
    *   **Therefore, for a balanced load, Total Active Power = $\sqrt{3} V_L I_L \cos(\phi)$.**

*   **Total Reactive Power (Q_total):**
    *   $Q_{total} = \sqrt{3} V_L I_L \sin(\phi)$

*   **Total Apparent Power (S_total):**
    *   $S_{total} = \sqrt{3} V_L I_L$
    *   Also, $S_{total} = \sqrt{P_{total}^2 + Q_{total}^2}$

**Example (Balanced Three-Phase Load):**
A balanced three-phase Y-connected load consists of three identical impedances, each with a resistance of 10 $\Omega$ and an inductive reactance of 10 $\Omega$. The line voltage is 400V.

1.  **Calculate Phase Voltage ($V_p$):**
    For Y-connection, $V_p = V_L / \sqrt{3} = 400V / \sqrt{3} \approx 230.9V$.

2.  **Calculate Phase Impedance ($Z_p$):**
    $Z_p = R + jX_L = 10 + j10 \Omega$.
    Magnitude of impedance $|Z_p| = \sqrt{10^2 + 10^2} = \sqrt{200} \approx 14.14 \Omega$.
    Phase angle $\phi = \arctan(10/10) = \arctan(1) = 45^\circ$ (lagging).

3.  **Calculate Phase Current ($I_p$):**
    $I_p = V_p / |Z_p| = 230.9V / 14.14 \Omega \approx 16.33A$.

4.  **Calculate Line Current ($I_L$):**
    For Y-connection, $I_L = I_p \approx 16.33A$.

5.  **Calculate Total Active Power ($P_{total}$):**
    $P_{total} = \sqrt{3} V_L I_L \cos(\phi) = \sqrt{3} \cdot 400V \cdot 16.33A \cdot \cos(45^\circ) \approx 1.732 \cdot 400 \cdot 16.33 \cdot 0.707 \approx 8134W = 8.134 kW$.
    Alternatively, $P_{total} = 3 \cdot I_p^2 \cdot R = 3 \cdot (16.33A)^2 \cdot 10 \Omega \approx 3 \cdot 266.67 \cdot 10 \approx 8000W = 8 kW$. (Slight difference due to rounding in $I_p$).
    Using $V_p$, $P_{phase} = V_p I_p \cos(\phi) = 230.9V \cdot 16.33A \cdot \cos(45^\circ) \approx 2678W$.
    $P_{total} = 3 \times P_{phase} \approx 3 \times 2678W \approx 8034W$. (Again, rounding differences).
    Let's use the direct formula $P_{total} = 3 \times I_p^2 \times R = 3 \times (V_p/|Z_p|)^2 \times R = 3 \times (230.9/14.14)^2 \times 10 = 3 \times (16.33)^2 \times 10 \approx 8000W = 8kW$.

6.  **Calculate Total Reactive Power ($Q_{total}$):**
    $Q_{total} = \sqrt{3} V_L I_L \sin(\phi) = \sqrt{3} \cdot 400V \cdot 16.33A \cdot \sin(45^\circ) \approx 1.732 \cdot 400 \cdot 16.33 \cdot 0.707 \approx 8134 VAR = 8.134 kVAR$.
    Alternatively, $Q_{total} = 3 \cdot I_p^2 \cdot X_L = 3 \cdot (16.33A)^2 \cdot 10 \Omega \approx 8000 VAR = 8 kVAR$.

7.  **Calculate Total Apparent Power ($S_{total}$):**
    $S_{total} = \sqrt{3} V_L I_L = \sqrt{3} \cdot 400V \cdot 16.33A \approx 1.732 \cdot 400 \cdot 16.33 \approx 11420 VA = 11.42 kVA$.
    Check: $S_{total} = \sqrt{P_{total}^2 + Q_{total}^2} = \sqrt{(8000W)^2 + (8000 VAR)^2} = \sqrt{64 \times 10^6 + 64 \times 10^6} = \sqrt{128 \times 10^6} \approx 11314 VA$.
    Using $S_{total} = 3 \times V_p \times I_p = 3 \times 230.9V \times 16.33A \approx 11310 VA$. (Rounding is the main issue).
    Let's use the more precise calculation:
    $P_{total} = 3 \times (V_p/|Z_p|)^2 \times R = 3 \times (230.9 / \sqrt{200})^2 \times 10 = 3 \times (230.9^2 / 200) \times 10 = 3 \times (53315 / 200) \times 10 = 3 \times 266.575 \times 10 = 7997.25 W$.
    $Q_{total} = 3 \times (V_p/|Z_p|)^2 \times X_L = 3 \times (230.9 / \sqrt{200})^2 \times 10 = 7997.25 VAR$.
    $S_{total} = \sqrt{7997.25^2 + 7997.25^2} = \sqrt{2 \times 7997.25^2} = \sqrt{2} \times 7997.25 \approx 11309.6 VA$.

    Let's re-calculate using $V_L, I_L, \phi$:
    $I_L = V_L / (\sqrt{3}|Z_p|) = 400V / (\sqrt{3} \times \sqrt{200}\Omega) = 400V / (\sqrt{3} \times 14.14\Omega) = 400V / 24.49\Omega \approx 16.33A$.
    $P_{total} = \sqrt{3} V_L I_L \cos(\phi) = \sqrt{3} \times 400V \times 16.33A \times \cos(45^\circ) \approx 1.732 \times 400 \times 16.33 \times 0.707 \approx 8134 W$.

    **It's crucial to be consistent with the formulas and avoid intermediate rounding.**
    Using $V_p = 400/\sqrt{3}$ and $|Z_p| = \sqrt{200}$:
    $I_p = \frac{400/\sqrt{3}}{\sqrt{200}} = \frac{400}{\sqrt{600}} = \frac{400}{10\sqrt{6}} = \frac{40}{\sqrt{6}} \approx 16.33A$.
    $P_{total} = 3 \times I_p^2 \times R = 3 \times (\frac{40}{\sqrt{6}})^2 \times 10 = 3 \times \frac{1600}{6} \times 10 = 3 \times \frac{16000}{6} = \frac{16000}{2} = 8000W$.
    $Q_{total} = 3 \times I_p^2 \times X_L = 3 \times (\frac{40}{\sqrt{6}})^2 \times 10 = 8000 VAR$.
    $S_{total} = \sqrt{P_{total}^2 + Q_{total}^2} = \sqrt{8000^2 + 8000^2} = \sqrt{2 \times 8000^2} = 8000\sqrt{2} \approx 11313.7 VA$.
    Using $S_{total} = \sqrt{3} V_L I_L = \sqrt{3} \times 400 \times \frac{40}{\sqrt{6}} = \frac{400\sqrt{3} \times 40}{\sqrt{6}} = \frac{16000\sqrt{3}}{\sqrt{6}} = \frac{16000}{\sqrt{2}} = 8000\sqrt{2} \approx 11313.7 VA$.

**Important Note:** The power factor in a three-phase system is also $\cos(\phi)$, where $\phi$ is the phase angle of the individual phase impedance.

**Reference:** This section heavily draws from **Sudhakar & Palli's "Circuits and Networks, Analysis and Synthesis"** for three-phase power calculations and **Van Valkenburg's "Network Analysis"**.

---

### 8. Learning Outcomes Alignment

This topic directly addresses the following learning outcomes:

*   **CO1: Apply circuit theorems to solve complex DC and AC electric networks (Knowledge Level: K3):** Understanding active, reactive, and apparent power is fundamental to analyzing AC networks. The power triangle and power factor calculations are applications of Ohm's Law and basic circuit analysis principles.
*   **CO4: Analyse three-phase networks in star and delta configurations under balanced and unbalanced conditions. (Knowledge Level: K3):** This topic focuses specifically on balanced three-phase loads, providing the foundational knowledge for power calculations in such systems. While unbalanced loads are a separate topic, understanding balanced loads is a prerequisite.

---

### 9. Practice Questions and Exercises

**Question 1:**
A single-phase load consumes 5 kW of active power and has a lagging power factor of 0.8. The voltage across the load is 240V (RMS). Calculate:
a) The apparent power.
b) The reactive power.
c) The current drawn by the load.

**Answer 1:**
a) $PF = P/S \implies S = P/PF = 5 \text{ kW} / 0.8 = 6.25 \text{ kVA}$.
b) $P = S \cos(\phi) \implies \cos(\phi) = 0.8 \implies \phi = \arccos(0.8) \approx 36.87^\circ$.
   $Q = S \sin(\phi) = 6.25 \text{ kVA} \cdot \sin(36.87^\circ) \approx 6.25 \text{ kVA} \cdot 0.6 = 3.75 \text{ kVAR}$.
c) $S = V_{rms} \cdot I_{rms} \implies I_{rms} = S / V_{rms} = 6250 VA / 240V \approx 26.04A$.

**Question 2:**
A purely capacitive load draws 10 kVA at a leading power factor of 0.707. The line voltage is 415V. Calculate:
a) The active power.
b) The reactive power.
c) The capacitance per phase if connected in a star configuration. (Assume frequency f = 50 Hz).

**Answer 2:**
a) $P = S \cdot PF = 10 \text{ kVA} \cdot 0.707 = 7.07 \text{ kW}$.
b) $\cos(\phi) = 0.707 \implies \phi = 45^\circ$ (leading).
   $Q = S \cdot \sin(\phi) = 10 \text{ kVA} \cdot \sin(45^\circ) = 10 \text{ kVA} \cdot 0.707 = 7.07 \text{ kVAR}$ (capacitive, hence negative in some conventions, but here we report magnitude).
c) For a star connection, $V_p = V_L / \sqrt{3} = 415V / \sqrt{3} \approx 239.6V$.
   $S_{total} = \sqrt{3} V_L I_L \implies I_L = S_{total} / (\sqrt{3} V_L) = 10000 VA / (\sqrt{3} \cdot 415V) \approx 13.87A$.
   For a star connection, $I_p = I_L \approx 13.87A$.
   Since it's a purely capacitive load, the phase angle $\phi$ is $-90^\circ$ (current leads voltage by 90). So, $PF = \cos(-90^\circ) = 0$. This contradicts the given PF of 0.707.
   Let's re-interpret the question: A three-phase load draws 10 kVA with a leading PF of 0.707.
   $P = 7.07 kW$. $Q = -7.07 kVAR$.
   $S_{total} = 10 kVA$.
   $I_L = S_{total} / (\sqrt{3} V_L) = 10000 VA / (\sqrt{3} \times 415V) \approx 13.87A$.
   For a star connection, $I_p = I_L \approx 13.87A$.
   The phase angle $\phi$ of the load impedance is such that $\cos(\phi) = 0.707$ (leading), so $\phi = -45^\circ$.
   The impedance per phase $Z_p = V_p / I_p = 239.6V / 13.87A \approx 17.27 \Omega$.
   This impedance has a phase angle of $-45^\circ$.
   $Z_p = |Z_p| (\cos(-45^\circ) + j \sin(-45^\circ)) = 17.27 (0.707 - j0.707) \approx 12.21 - j12.21 \Omega$.
   This is a parallel RC combination or a series RC combination if the sign is flipped.
   For a series RC circuit: $Z_p = R - jX_C$.
   $R = 12.21 \Omega$. $X_C = 12.21 \Omega$.
   $X_C = 1 / (2\pi f C) \implies C = 1 / (2\pi f X_C) = 1 / (2\pi \cdot 50 Hz \cdot 12.21 \Omega) = 1 / (7671.4) \approx 1.30 \times 10^{-4} F = 130 \mu F$.

**Question 3:**
A balanced three-phase Y-connected load has a resistance of 8 $\Omega$ and an inductance of 42.44 mH in series in each phase. The line voltage is 400V and the frequency is 50 Hz. Calculate the total apparent power.

**Answer 3:**
$R = 8 \Omega$. $L = 42.44 \text{ mH} = 0.04244 H$.
$X_L = 2\pi f L = 2\pi (50 Hz) (0.04244 H) \approx 13.33 \Omega$.
Phase impedance $Z_p = R + jX_L = 8 + j13.33 \Omega$.
Magnitude of phase impedance $|Z_p| = \sqrt{8^2 + 13.33^2} = \sqrt{64 + 177.69} = \sqrt{241.69} \approx 15.55 \Omega$.
Phase angle $\phi = \arctan(13.33 / 8) = \arctan(1.666) \approx 59.04^\circ$ (lagging).
Phase voltage $V_p = V_L / \sqrt{3} = 400V / \sqrt{3} \approx 230.9V$.
Phase current $I_p = V_p / |Z_p| = 230.9V / 15.55 \Omega \approx 14.85A$.
Line current $I_L = I_p \approx 14.85A$.
Total apparent power $S_{total} = \sqrt{3} V_L I_L = \sqrt{3} \times 400V \times 14.85A \approx 1.732 \times 400 \times 14.85 \approx 10281 VA \approx 10.28 kVA$.

---

### 10. Important Points to Remember

*   **Power is not just V*I in AC circuits.** The phase difference between voltage and current is critical.
*   **Active Power (P):** Useful power, dissipated as heat or converted to work. Measured in Watts (W).
*   **Reactive Power (Q):** Power exchanged with reactive components, stored and released. Measured in VAR. Necessary for magnetic fields (inductors) and electric fields (capacitors).
*   **Apparent Power (S):** Total power delivered, product of RMS voltage and current. Measured in VA. Determines the rating of electrical equipment.
*   **Power Triangle:** Visualizes the relationship $S^2 = P^2 + Q^2$.
*   **Power Factor (PF):** $\cos(\phi) = P/S$. A lagging PF is due to inductive loads, a leading PF is due to capacitive loads.
*   **Unity PF (1):** Ideal for efficient power transfer.
*   **Low PF:** Leads to higher currents, increased losses, voltage drops, and requires oversizing of equipment.
*   **Three-Phase Balanced Loads:** Power calculations are simplified and use the $\sqrt{3}$ factor for line quantities. $P_{total} = \sqrt{3} V_L I_L \cos(\phi)$, $Q_{total} = \sqrt{3} V_L I_L \sin(\phi)$, $S_{total} = \sqrt{3} V_L I_L$.

---
