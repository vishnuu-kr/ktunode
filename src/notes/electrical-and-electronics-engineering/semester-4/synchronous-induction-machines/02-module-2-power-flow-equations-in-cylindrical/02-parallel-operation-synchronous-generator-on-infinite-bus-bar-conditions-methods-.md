---
title: "Parallel operation - synchronous generator on infinite bus-bar – conditions – methods of synchronisation – effect of change of mechanical input – effect of change of excitation - V-curves and inverted V curves – numerical problems"
subject: "SYNCHRONOUS & INDUCTION MACHINES"
module: "Module 2: Power flow equations in cylindrical"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35df0"
status: "completed"
scrapedAt: "2026-05-23T16:19:10.271Z"
---
# Module 2: Power Flow Equations in Cylindrical - Parallel Operation of Synchronous Generators on Infinite Bus-Bar

**Subject:** SYNCHRONOUS & INDUCTION MACHINES

**Module:** Module 2: Power Flow Equations in Cylindrical

**Topic:** Parallel operation - synchronous generator on infinite bus-bar – conditions – methods of synchronisation – effect of change of mechanical input – effect of change of excitation - V-curves and inverted V curves – numerical problems

**Course Outcomes Addressed:** CO1 (Knowledge Level: K3)

---

## 1. Introduction to Infinite Bus-Bar

An **infinite bus-bar** is an idealized power system characterized by:

*   **Constant Voltage:** Its voltage magnitude ($V$) remains constant regardless of the power drawn from or supplied to it.
*   **Constant Frequency:** Its frequency ($f$) remains constant regardless of the load variations.
*   **Infinite Capacity:** It can absorb or supply any amount of power without its voltage or frequency changing.

In practical terms, an infinite bus-bar represents a large, interconnected power grid, like the national grid, to which a single synchronous generator is connected. The generator's output voltage and frequency are controlled to match those of the grid.

---

## 2. Parallel Operation of Synchronous Generators

Connecting synchronous generators in parallel offers several advantages:

*   **Reliability:** If one generator fails, others can continue to supply power.
*   **Efficiency:** Generators can be operated closer to their rated capacity for better efficiency.
*   **Load Variation:** Generators can be switched on or off to meet varying load demands.
*   **Maintenance:** Units can be taken offline for maintenance without interrupting supply.

When a synchronous generator is connected to an infinite bus-bar, it acts as a supplier of real and reactive power to the system.

---

## 3. Conditions for Parallel Operation (Synchronization)

For a synchronous generator to be connected to an infinite bus-bar (or another synchronous generator) without causing disturbances or damage, the following conditions must be met. These are the fundamental conditions for **synchronization**:

*   **Equal Voltage Magnitude:** The voltage of the incoming generator ($E_g$) must be equal to the bus-bar voltage ($V_b$).
    *   $|E_g| = |V_b|$
*   **Equal Frequency:** The frequency of the incoming generator must be equal to the bus-bar frequency.
    *   $f_g = f_b$
*   **Equal Phase Sequence:** The phase sequence (e.g., R-Y-B) of the incoming generator must be the same as the bus-bar.
    *   Phase sequence (Generator) = Phase sequence (Bus-bar)
*   **Equal Phase Angle:** The phase angle difference between the incoming generator's voltage ($E_g$) and the bus-bar voltage ($V_b$) must be zero at the instant of closing the breaker.
    *   $\delta = 0^\circ$ (at the moment of connection)

---

## 4. Methods of Synchronization

Synchronization is the process of bringing a synchronous generator into phase with the bus-bar voltage before closing the circuit breaker. The primary methods are:

### 4.1. Synchronous Method (Lamp Method)

This is the most common and visual method for manual synchronization. It uses three lamps connected across the open breaker contacts.

**Procedure:**

1.  **Match Voltage:** Adjust the excitation of the incoming generator to match the bus-bar voltage magnitude.
2.  **Match Frequency:** Gradually increase the prime mover speed of the incoming generator until its frequency matches the bus-bar frequency. This is monitored by the rate of change of brightness of the lamps.
3.  **Observe Lamps:**
    *   **Two Lamps Dark, One Bright:** This indicates that the voltage of the incoming generator and the bus-bar are in phase, and the frequencies are matched. The phase sequence is correct.
    *   **All Lamps Bright:** This indicates that the incoming generator's voltage is significantly out of phase with the bus-bar voltage.
    *   **All Lamps Dark:** This indicates that the incoming generator's voltage is in phase but of opposite polarity to the bus-bar voltage, and the frequencies are matched. This could happen if the phase sequence is incorrect.
    *   **Flickering Lamps:** This indicates that the frequencies are not matched. If the lamps brighten and dim in sequence, the frequencies are close.

4.  **Close Breaker:** When the two lamps are dark and one is bright (indicating zero phase difference), close the circuit breaker.

**Why two lamps dark and one bright?**

Let $V_b$ be the bus-bar voltage and $E_g$ be the generator voltage. The voltage across the lamps are the phase differences.

*   **Lamp 1 (across phases A-a):** Connected to $V_{bA}$ and $E_{gA}$. If $V_{bA}$ and $E_{gA}$ are in phase, the voltage across the lamp is zero (dark).
*   **Lamp 2 (across phases B-b):** Connected to $V_{bB}$ and $E_{gB}$. If phase sequence is correct and phase angles are matched, $V_{bB}$ and $E_{gB}$ are in phase, voltage across lamp is zero (dark).
*   **Lamp 3 (across phases C-c):** Connected to $V_{bC}$ and $E_{gC}$. If phase sequence is correct and phase angles are matched, $V_{bC}$ and $E_{gC}$ are in phase, voltage across lamp is zero (dark).

**Wait! The standard practice is two dark, one bright.** Let's re-examine the connection.

Typically, the lamps are connected as follows:
*   Lamp 1: Phase A (bus) to Phase A (generator)
*   Lamp 2: Phase B (bus) to Phase B (generator)
*   Lamp 3: Phase C (bus) to Phase C (generator)

If the generator is phase-shifted by $\phi$ relative to the bus, the voltage across the lamps would be proportional to $\sin(\phi)$, $\sin(\phi - 120^\circ)$, and $\sin(\phi + 120^\circ)$.

A common connection for the "dark-bright" method to indicate zero phase difference is:
*   **Lamp 1:** Phase A (bus) to Phase A (generator)
*   **Lamp 2:** Phase B (bus) to Phase C (generator)
*   **Lamp 3:** Phase C (bus) to Phase B (generator)

Let the bus voltage phases be $V_a, V_b, V_c$ and the generator voltage phases be $E_a, E_b, E_c$. Assume $V_a = V \angle 0^\circ$, $V_b = V \angle -120^\circ$, $V_c = V \angle 120^\circ$. Let the generator voltage be $E_a = E \angle \phi$, $E_b = E \angle (\phi - 120^\circ)$, $E_c = E \angle (\phi + 120^\circ)$. For synchronization, we need $E=V$ and $\phi=0^\circ$.

*   **Lamp 1 (A-a):** Voltage $\approx V_a - E_a$. If $\phi=0$, voltage is zero (dark). If $\phi=180^\circ$, voltage is $2V$ (bright).
*   **Lamp 2 (B-c):** Voltage $\approx V_b - E_c = V \angle -120^\circ - E \angle (\phi + 120^\circ)$.
    *   If $\phi = 0^\circ$: $V \angle -120^\circ - V \angle 120^\circ = V(-\frac{1}{2} - j\frac{\sqrt{3}}{2}) - V(-\frac{1}{2} + j\frac{\sqrt{3}}{2}) = -j\sqrt{3}V$. This is the maximum voltage difference (bright).
*   **Lamp 3 (C-b):** Voltage $\approx V_c - E_b = V \angle 120^\circ - E \angle (\phi - 120^\circ)$.
    *   If $\phi = 0^\circ$: $V \angle 120^\circ - V \angle -120^\circ = V(-\frac{1}{2} + j\frac{\sqrt{3}}{2}) - V(-\frac{1}{2} - j\frac{\sqrt{3}}{2}) = j\sqrt{3}V$. This is also the maximum voltage difference (bright).

So, **two lamps bright and one dark indicates correct synchronization.** The bright lamps show the maximum phase difference (when one is positive and the other is negative). The dark lamp indicates zero phase difference. This is crucial for understanding the method.

*   **Important Point:** The incoming generator's prime mover should be slightly faster than the bus-bar frequency so that when the breaker is closed, the generator takes on a lagging power factor (acting as a generator). If it's slower, it will act as a motor and draw power.

### 4.2. Synchroscope

A synchroscope is an electro-mechanical instrument that provides a visual indication of the phase difference and frequency difference.

*   **Rotating Pointer:** A pointer rotates around a dial.
*   **Zero Position:** When the pointer is at the top (usually marked "12" or "ON"), the generator is in phase with the bus.
*   **Direction of Rotation:**
    *   **Clockwise:** The incoming generator frequency is higher than the bus-bar frequency.
    *   **Counter-clockwise:** The incoming generator frequency is lower than the bus-bar frequency.

**Procedure:**

1.  **Match Voltage:** Adjust excitation to match bus-bar voltage magnitude.
2.  **Adjust Frequency:** Adjust the prime mover speed to make the synchroscope pointer rotate slowly and steadily in the clockwise direction (or at the desired slight overspeed).
3.  **Close Breaker:** Close the breaker when the pointer is at the "ON" or zero position.

### 4.3. Automatic Synchronization

Modern systems use automatic synchronizers, which are electronic devices that continuously monitor voltage, frequency, and phase angle. They automatically close the breaker when synchronization conditions are met. This is more precise and faster than manual methods.

---

## 5. Power Flow and Control on Infinite Bus-Bar

Once synchronized, the synchronous generator is connected to the infinite bus-bar. Its operation is governed by the following equations, derived from the power flow equations in cylindrical coordinates.

Let:
*   $V_b$ be the bus-bar voltage (phasor). We can assume $V_b = V \angle 0^\circ$.
*   $E_g$ be the generated voltage (phasor), $E_g = E \angle \delta$. Where $E$ is the magnitude of the generated voltage and $\delta$ is the power angle.
*   $X_s$ be the synchronous reactance of the generator.
*   $P$ be the real power output of the generator.
*   $Q$ be the reactive power output of the generator.

The phasor diagram for a synchronous generator connected to an infinite bus is crucial here. Assuming unity power factor for simplicity initially ($E_g$ in phase with $V_b$):

$P = \frac{VE}{X_s} \sin \delta$

$Q = \frac{VE}{X_s} \cos \delta - \frac{V^2}{X_s}$

**Key Concepts:**

*   **Power Angle ($\delta$):** The angle between the internally generated voltage ($E_g$) and the bus-bar voltage ($V_b$). It directly influences the real power output.
*   **Excitation Voltage ($E$):** The magnitude of the internally generated voltage, controlled by the field current. It influences both real and reactive power output.
*   **Bus-bar Voltage ($V$):** Assumed constant for an infinite bus.

### 5.1. Effect of Change of Mechanical Input (Prime Mover Torque)

The mechanical input to the synchronous generator (from its prime mover like a turbine) primarily controls the **real power output ($P$)**.

*   **Increasing Mechanical Input:** If the prime mover torque is increased, the generator's rotor speed will momentarily try to increase. This causes the power angle ($\delta$) to increase, leading to a higher real power output ($P$).
    *   $P = \frac{VE}{X_s} \sin \delta$
    *   As $\delta$ increases, $\sin \delta$ increases (for $\delta$ between $0^\circ$ and $90^\circ$).
*   **Decreasing Mechanical Input:** If the prime mover torque is decreased, the generator's rotor speed will momentarily try to decrease. This causes the power angle ($\delta$) to decrease, leading to a lower real power output ($P$).

**Important Note:** For parallel operation on an infinite bus, the generator's prime mover speed cannot deviate significantly from the system frequency. Any change in mechanical input is immediately translated into a change in $\delta$ rather than a change in frequency. The generator essentially absorbs or delivers real power to match the mechanical input to the electrical output.

**Analogy:** Imagine pushing a swing. Your push is the mechanical input, the swing's position is like the power angle, and the energy transferred is the real power.

### 5.2. Effect of Change of Excitation (Field Current)

The excitation current of the synchronous generator controls the field flux, which in turn determines the magnitude of the internally generated voltage ($E$). Changes in $E$ primarily affect the **reactive power output ($Q$)**.

*   **Increasing Excitation (Stronger Field):**
    *   Increases $E$.
    *   **Real Power ($P$):** For a given $\delta$, increasing $E$ increases $P$. However, if the mechanical input is kept constant, $\delta$ will decrease slightly to maintain the power balance. The net effect on $P$ is usually small.
    *   **Reactive Power ($Q$):** As $E$ increases, $Q = \frac{VE}{X_s} \cos \delta - \frac{V^2}{X_s}$ increases. The generator absorbs less reactive power or supplies more reactive power (power factor becomes leading).
*   **Decreasing Excitation (Weaker Field):**
    *   Decreases $E$.
    *   **Real Power ($P$):** Similar to above, $P$ might decrease slightly as $\delta$ increases to compensate.
    *   **Reactive Power ($Q$):** As $E$ decreases, $Q$ decreases. The generator absorbs more reactive power or supplies less reactive power (power factor becomes lagging).

**Important Note:** A synchronous generator can operate at leading, lagging, or unity power factor by adjusting its excitation. This ability makes it useful for power factor correction.

---

## 6. V-Curves and Inverted V-Curves

These curves illustrate the relationship between the armature current ($I_a$) and the excitation voltage ($E$) or field current ($I_f$) for a synchronous machine operating at constant terminal voltage and constant real power output.

### 6.1. V-Curves

V-curves plot **armature current ($I_a$) on the Y-axis** against **field current ($I_f$) or excitation voltage ($E$) on the X-axis** for different constant real power outputs ($P$).

**Key Observations from V-Curves:**

*   **Minimum Armature Current (Unity Power Factor):** At a specific field current, the armature current is at its minimum. This corresponds to the condition where the generator is operating at unity power factor (i.e., $E_g$ is in phase with $V_b$, $\delta$ is such that $\cos \delta$ is maximum in relation to the $Q$ equation).
*   **Lagging Power Factor:** When the field current is below the value for unity power factor, the armature current is higher, and the machine operates at a lagging power factor (acting as a generator absorbing reactive power).
*   **Leading Power Factor:** When the field current is above the value for unity power factor, the armature current is higher, and the machine operates at a leading power factor (acting as a generator supplying reactive power).
*   **Constant Real Power Lines:** Each V-curve represents a constant real power output. As the real power output increases, the entire V-curve shifts upwards and to the right.

**Derivation Concept:**
The phasor diagram for a synchronous generator is key. With $V$ as the reference ($V \angle 0^\circ$), $E = E \angle \delta$.
$I_a = \frac{E - V}{jX_s} = \frac{E \cos \delta + jE \sin \delta - V}{jX_s} = \frac{V - E \cos \delta}{X_s} + j\frac{E \sin \delta}{X_s}$ (Incorrect phase order in subtraction)

Let's use the correct phasor relationship: $V_t = E - jX_s I_a$ (for generator, $I_a$ is outgoing)
$V_b = E_g - jX_s I_a$
$I_a = \frac{E_g - V_b}{jX_s} = \frac{E \angle \delta - V \angle 0}{jX_s}$

$I_a = \frac{(E \cos \delta + jE \sin \delta) - V}{jX_s} = \frac{E \sin \delta}{X_s} - j\frac{V - E \cos \delta}{X_s}$

$|I_a|^2 = (\frac{E \sin \delta}{X_s})^2 + (\frac{V - E \cos \delta}{X_s})^2$
$|I_a|^2 = \frac{E^2 \sin^2 \delta + V^2 - 2VE \cos \delta + E^2 \cos^2 \delta}{X_s^2}$
$|I_a|^2 = \frac{E^2 + V^2 - 2VE \cos \delta}{X_s^2}$

We know $P = \frac{VE}{X_s} \sin \delta$, so $\sin \delta = \frac{PX_s}{VE}$.
And $Q = \frac{VE}{X_s} \cos \delta - \frac{V^2}{X_s}$, so $\cos \delta = \frac{(Q + V^2/X_s)X_s}{VE} = \frac{QX_s + V^2}{VE}$.

Substituting $\cos \delta$:
$|I_a|^2 = \frac{E^2 + V^2 - 2VE (\frac{QX_s + V^2}{VE})}{X_s^2}$
$|I_a|^2 = \frac{E^2 + V^2 - 2(QX_s + V^2)}{X_s^2}$
$|I_a|^2 = \frac{E^2 - V^2 - 2QX_s}{X_s^2}$

Also, $P = \frac{VE}{X_s} \sin \delta$. For a fixed $P$ and $V$, $E \sin \delta$ is constant.
$E \cos \delta = \sqrt{E^2 - (E \sin \delta)^2} = \sqrt{E^2 - (\frac{PX_s}{V})^2}$

$|I_a|^2 = \frac{E^2 + V^2 - 2V\sqrt{E^2 - (PX_s/V)^2}}{X_s^2}$

This equation shows that for a fixed $P$, $|I_a|$ is a function of $E$. The minimum $|I_a|$ occurs when $E$ is adjusted such that the power factor is unity.

### 6.2. Inverted V-Curves

Inverted V-curves plot **field current ($I_f$) or excitation voltage ($E$) on the Y-axis** against **armature current ($I_a$) on the X-axis** for different constant real power outputs ($P$).

**Key Observations from Inverted V-Curves:**

*   **Minimum Field Current (Unity Power Factor):** At a specific armature current, the field current is at its minimum. This again corresponds to unity power factor operation.
*   **Lagging Power Factor:** When the field current is below the value for unity power factor, the armature current is higher, and the machine operates at a lagging power factor.
*   **Leading Power Factor:** When the field current is above the value for unity power factor, the armature current is higher, and the machine operates at a leading power factor.
*   **Constant Real Power Lines:** Similar to V-curves, each curve represents constant $P$. As $P$ increases, the curves shift upwards and to the right.

**Purpose:** Inverted V-curves are more practical for operators as they can directly control the field current and observe the corresponding armature current and power factor. They help in determining the field current required to achieve a desired power factor or to minimize armature current for efficiency.

**Summary Table: V-curves vs. Inverted V-curves**

| Feature             | V-Curves                                  | Inverted V-Curves                               |
| :------------------ | :---------------------------------------- | :---------------------------------------------- |
| Y-axis              | Armature Current ($I_a$)                  | Field Current ($I_f$) or Excitation ($E$)       |
| X-axis              | Field Current ($I_f$) or Excitation ($E$) | Armature Current ($I_a$)                        |
| Minimum $I_a$ point | Indicates Unity Power Factor              | Indicates Unity Power Factor                    |
| Minimum $I_f$ point | N/A                                       | Indicates Unity Power Factor                    |
| Practical Use       | Demonstrates relation between $I_a$ and $I_f$ | More practical for operation control          |
| Constant Parameter  | Real Power Output ($P$)                   | Real Power Output ($P$)                         |

---

## 7. Numerical Problems

Let's work through some examples to solidify the concepts.

**Problem 1: Synchronization**

A 3-phase synchronous generator is to be paralleled with an infinite bus-bar operating at $400$ V and $50$ Hz. The generator has a synchronous reactance of $1.0 \Omega$/phase. The generator voltage is adjusted to $415$ V. The generator prime mover is adjusted such that the frequency is $50$ Hz, but the phase angle is $30^\circ$ lagging behind the bus-bar voltage.

**Calculate:**
(a) The initial real power output.
(b) The initial reactive power output.
(c) The initial armature current.
(d) If the excitation is increased to make $E_g = 415$ V and the phase angle becomes $0^\circ$, what is the new real and reactive power output?

**Solution:**

Assume $V_b = 400 \angle 0^\circ$ V (line-to-line)
Per phase voltage $V = \frac{400}{\sqrt{3}} \approx 230.94$ V.
$X_s = 1.0 \Omega$.

Given $E_g = 415$ V (line-to-line)
Per phase generated voltage magnitude $E = \frac{415}{\sqrt{3}} \approx 239.61$ V.
Phase angle $\delta = -30^\circ$ (lagging behind bus-bar voltage).

(a) **Real Power Output ($P$):**
$P = \frac{VE}{X_s} \sin \delta$
$P = \frac{230.94 \times 239.61}{1.0} \sin(-30^\circ)$
$P = 55306 \times (-0.5)$
$P \approx -27653$ W = **-27.65 kW**

*Interpretation:* The negative sign indicates that the generator is *absorbing* real power, acting as a motor, because the phase angle is lagging and the generated voltage magnitude is not sufficiently large to push power out. This is a common situation *before* achieving synchronization at the correct power angle. For true generator operation, $\delta$ should be positive for positive power. If the intent was for it to be a generator, the angle should have been +30 degrees, or E should have been larger relative to V. Let's assume the problem meant $\delta = 30^\circ$ for generator action. If $\delta = 30^\circ$: $P = 27.65$ kW. *However, standard convention for generator is positive delta. The fact that it's lagging often implies it's absorbing power if E is not high enough.* Let's proceed with $\delta = -30^\circ$ as stated.

(b) **Reactive Power Output ($Q$):**
$Q = \frac{VE}{X_s} \cos \delta - \frac{V^2}{X_s}$
$Q = \frac{230.94 \times 239.61}{1.0} \cos(-30^\circ) - \frac{(230.94)^2}{1.0}$
$Q = 55306 \times 0.866 - 53333.33$
$Q = 47883.8 - 53333.33$
$Q \approx -5449.5$ VAR = **-5.45 kVAR**

*Interpretation:* The negative sign for $Q$ indicates that the generator is absorbing reactive power, meaning it is operating at a lagging power factor (as expected if $E < V$ and $\delta$ is small or negative).

(c) **Armature Current ($I_a$):**
$I_a = \frac{E_g - V_b}{jX_s}$ (using line-to-line values for simplicity in phase representation, though per-phase is more accurate for calculations)
Let's use per-phase values:
$I_a = \frac{E \angle \delta - V \angle 0}{jX_s}$
$I_a = \frac{239.61 \angle -30^\circ - 230.94 \angle 0}{j1.0}$
$E_g = 239.61 (\cos(-30^\circ) + j \sin(-30^\circ)) = 239.61 (0.866 - j0.5) = 207.52 - j119.81$
$V_b = 230.94 \angle 0 = 230.94$
$I_a = \frac{(207.52 - j119.81) - 230.94}{j1.0} = \frac{-23.42 - j119.81}{j1.0}$
$I_a = \frac{-23.42}{j} - \frac{j119.81}{j} = j23.42 - 119.81$
$I_a = -119.81 + j23.42$ A

$|I_a| = \sqrt{(-119.81)^2 + (23.42)^2} = \sqrt{14354.4 + 548.5} = \sqrt{14902.9} \approx 122.08$ A

Power Factor angle of $I_a$: $\tan^{-1}(\frac{23.42}{-119.81}) \approx \tan^{-1}(-0.195) \approx -11.05^\circ$.
So $I_a \approx 122.08 \angle (0 - 11.05 + 90) = 122.08 \angle 78.95^\circ$ (This phase calculation might be tricky with the j denominator).

Let's calculate $I_a$ using $P$ and $Q$:
$S = P + jQ = -27653 - j5449.5$ VA
$|S| = \sqrt{(-27653)^2 + (-5449.5)^2} \approx \sqrt{764682809 + 29697000} \approx \sqrt{794379809} \approx 28184.7$ VA
$|I_a| = \frac{|S|}{\sqrt{3} V_{LL}} = \frac{28184.7}{\sqrt{3} \times 400} \approx \frac{28184.7}{692.8} \approx 40.68$ A (This is for line current).

Let's use per-phase $|S| = |V| |I_a|$
$|I_a| = \frac{|S|}{|V|} = \frac{28184.7}{230.94} \approx 122.04$ A. This matches the previous calculation.

(d) **New Power Outputs at Synchronization ($\delta = 0^\circ$):**
$E_g$ is still $415$ V, so $E = 239.61$ V.
$V_b = 400$ V, so $V = 230.94$ V.
$X_s = 1.0 \Omega$.
$\delta = 0^\circ$.

New Real Power ($P_{new}$):
$P_{new} = \frac{VE}{X_s} \sin \delta = \frac{230.94 \times 239.61}{1.0} \sin(0^\circ) = 0$ W.

*Correction:* If $\delta=0^\circ$, and excitation is increased, this means the generated voltage $E$ is now higher than $V$. The actual condition for synchronization is to match voltage, frequency, and phase. Once matched, the prime mover power controls the real power output and thus the phase angle $\delta$. If we *assume* $\delta=0^\circ$ means zero phase difference and we want generator action, we must adjust mechanical input. If mechanical input is insufficient to overcome synchronous reactance, it won't produce real power even if phase matched. The problem implies that after synchronization (phase match), excitation is adjusted. Let's reinterpret: "If the excitation is increased to make $E_g = 415$ V *and the phase angle becomes $0^\circ$*..." This implies a change in mechanical input too.

Let's assume the question implies that *after* synchronizing (achieving $\delta=0$), the excitation is adjusted such that $E_g = 415$V, and we need to find $P$ and $Q$.

The problem is tricky. Usually, synchronization means closing the breaker when $\delta=0$. After closing, the prime mover sets $P$, which then determines $\delta$.
If $\delta=0$, $P = \frac{VE}{X_s} \sin(0) = 0$. This means no real power is exchanged *at the instant of zero phase difference*.

However, to maintain $\delta=0$ with $E > V$, mechanical input must be applied. The value of $E$ determines the *potential* power output.

Let's re-evaluate the problem statement's intent.
If the generator is synchronized *and then* excitation is increased to $E_g=415$V, what happens?
The prime mover dictates the real power $P$. Let's assume the prime mover is set to provide a certain mechanical power input. This power input determines $\delta$.

Let's assume the question implies: The generator is now operating on the bus. Its excitation is set to $E_g = 415$V. What is $P$ and $Q$ if $\delta=0^\circ$?

If $\delta = 0^\circ$, the power angle equation gives $P=0$.
The reactive power equation gives:
$Q_{new} = \frac{VE}{X_s} \cos(0^\circ) - \frac{V^2}{X_s}$
$Q_{new} = \frac{230.94 \times 239.61}{1.0} \times 1 - \frac{(230.94)^2}{1.0}$
$Q_{new} = 55306 - 53333.33 \approx 1972.67$ VAR = **1.97 kVAR**

*This scenario (P=0, Q>0) occurs when the generator is supplying only reactive power, acting like a synchronous condenser.*

It's more likely that after synchronization ($\delta=0$), the prime mover torque is adjusted to provide some real power $P$. Then $\delta$ will no longer be zero.

**Revised Interpretation:**
Assume the synchronization is complete. The generator is now on the bus.
The excitation is adjusted to $E_g = 415$V (per phase $E = 239.61$V).
Let's say the prime mover is adjusted to deliver $P = 10$ kW of real power.
Then, we can find the new $\delta$ and $Q$.

$P = \frac{VE}{X_s} \sin \delta$
$10000 = \frac{230.94 \times 239.61}{1.0} \sin \delta$
$10000 = 55306 \sin \delta$
$\sin \delta = \frac{10000}{55306} \approx 0.1808$
$\delta = \arcsin(0.1808) \approx 10.42^\circ$

Now, calculate $Q$ with $\delta = 10.42^\circ$:
$Q = \frac{VE}{X_s} \cos \delta - \frac{V^2}{X_s}$
$Q = \frac{230.94 \times 239.61}{1.0} \cos(10.42^\circ) - \frac{(230.94)^2}{1.0}$
$Q = 55306 \times 0.9829 - 53333.33$
$Q = 54359.3 - 53333.33 \approx 1026$ VAR = **1.03 kVAR**

This makes more sense. The initial part of the question about being "lagging" and $P$ being negative highlights the state *before* successful synchronization or control.

**Important Point:** The problem statement in (d) "if the excitation is increased to make $E_g=415$V and the phase angle becomes $0^\circ$" is problematic for generator action with $E>V$. $P=0$ at $\delta=0$. If $E>V$, $\delta$ would naturally tend to be positive to deliver power. If $E<V$, $\delta$ would tend to be negative to absorb power.

Let's assume they meant: "After synchronization, the excitation is adjusted to $E_g = 415$V, and the mechanical input is set to deliver $P=5$kW."
Then $\delta = \arcsin(\frac{5000}{55306}) \approx 5.22^\circ$.
$Q = 55306 \cos(5.22^\circ) - 53333.33 = 55306 \times 0.9959 - 53333.33 \approx 55074.6 - 53333.33 \approx 1741.3$ VAR = **1.74 kVAR**.

---

**Problem 2: V-Curve Analysis**

A synchronous generator is operating on an infinite bus-bar of $6.6$ kV (line-to-line) at a constant real power output of $500$ kW. The synchronous reactance is $X_s = 3 \Omega$/phase. The per-phase bus voltage is $V = \frac{6.6 \times 10^3}{\sqrt{3}} = 3810.5$ V.

The generator is operating at unity power factor.

**Calculate:**
(a) The magnitude of the internally generated voltage $E$.
(b) The armature current $I_a$ (per phase).
(c) If the excitation is increased, such that the generator now supplies $200$ kVAR, what is the new armature current and power factor?

**Solution:**

$P = 500$ kW $= 500000$ W.
$V = 3810.5$ V.
$X_s = 3 \Omega$.
$P = \frac{VE}{X_s} \sin \delta$.
At unity power factor, $E$ is in phase with $V$, so $\delta = 0^\circ$.

(a) **Magnitude of $E$:**
$P = \frac{VE}{X_s} \sin \delta$
$500000 = \frac{3810.5 \times E}{3} \sin(0^\circ)$ --- This is incorrect. At unity PF, $\delta=0$ *relative to $V$*. The relation is $V_t = E - jX_s I_a$. For UPF, $I_a$ is in phase with $V_t$. So $I_a = I_a \angle 0$.
$V_t = V \angle 0$.
$E = V + jX_s I_a$.
$E$ will lead $V$ by $90^\circ$ if $I_a$ is in phase with $V$. This is not right for UPF.

Let's go back to the phasor diagram where $E$ leads $V$ by $\delta$.
$P = \frac{VE}{X_s} \sin \delta$.
$Q = \frac{VE}{X_s} \cos \delta - \frac{V^2}{X_s}$.
The condition for unity power factor ($P_f=1$) means that the power factor angle of the armature current $I_a$ is zero.
$I_a = \frac{E \angle \delta - V \angle 0}{jX_s} = \frac{E \cos \delta + jE \sin \delta - V}{jX_s}$
For $I_a$ to be in phase with $V$ (UPF), the real part of $I_a$ must be zero.
$\text{Re}(I_a) = \frac{E \sin \delta}{X_s} = 0$. Since $E, X_s \neq 0$, then $\sin \delta = 0$. This means $\delta = 0^\circ$.
This implies $E$ is in phase with $V$. However, for power transfer, there must be an angle.
The definition of unity power factor is when $V_t$ and $I_a$ are in phase.
If $V_t = V \angle 0$, then $I_a = I_a \angle 0$.
Then $E = V_t + jX_s I_a = V + jX_s I_a$.
So $E$ must lead $V$ by $90^\circ$ if $I_a$ is real. This is still confusing.

Let's use the standard phasor diagram relationships:
$V_b$ is reference $V \angle 0$.
$I_a$ is outgoing current.
$E_g = E \angle \delta$.
$V_b = E_g - jX_s I_a$.
$I_a = \frac{E_g - V_b}{jX_s}$.
Power factor angle $\phi$ is the angle between $V_b$ and $I_a$.
If $P_f = 1$, then $I_a$ is in phase with $V_b$. So $I_a = I_a \angle 0$.
Then $V_b = E_g - jX_s I_a \angle 0$.
$V \angle 0 = E \angle \delta - jX_s (I_a \angle 0)$.
$V = E \cos \delta + jE \sin \delta - jX_s I_a$.
Equating real parts: $V = E \cos \delta$.
Equating imaginary parts: $0 = E \sin \delta - X_s I_a$.
So, $I_a = \frac{E \sin \delta}{X_s}$.
And $V = E \cos \delta$.

From $V = E \cos \delta$, we have $\cos \delta = \frac{V}{E}$.
Since $\sin^2 \delta + \cos^2 \delta = 1$, we have $\sin \delta = \sqrt{1 - (\frac{V}{E})^2} = \frac{\sqrt{E^2 - V^2}}{E}$.

Now substitute into the power equation:
$P = \frac{VE}{X_s} \sin \delta = \frac{VE}{X_s} \frac{\sqrt{E^2 - V^2}}{E} = \frac{V\sqrt{E^2 - V^2}}{X_s}$.

This is the equation for real power at unity power factor.
$500000 = \frac{3810.5 \sqrt{E^2 - (3810.5)^2}}{3}$.
$1500000 = 3810.5 \sqrt{E^2 - 14519900}$.
$\frac{1500000}{3810.5} = \sqrt{E^2 - 14519900}$.
$393.63 = \sqrt{E^2 - 14519900}$.
$393.63^2 = E^2 - 14519900$.
$154961 = E^2 - 14519900$.
$E^2 = 154961 + 14519900 = 14674861$.
$E = \sqrt{14674861} \approx 3830.8$ V.

So, (a) The magnitude of the internally generated voltage $E$ is approximately **3830.8 V**.

(b) **Armature Current ($I_a$):**
At unity power factor, $I_a$ is in phase with $V_b$.
$P = V I_a$ (for per phase, if we consider $V$ and $I_a$ in phase).
$I_a = \frac{P}{V} = \frac{500000}{3810.5} \approx 131.21$ A.
The power factor angle of the armature current is $0^\circ$.

(c) **New Armature Current and Power Factor:**
Now $P = 500$ kW, but $Q_{new} = 200$ kVAR.
Total apparent power $S = P + jQ = 500 + j200$ kVA.
$|S| = \sqrt{P^2 + Q^2} = \sqrt{500^2 + 200^2} = \sqrt{250000 + 40000} = \sqrt{290000} = 538.5$ kVA.
$|S| = |V| |I_a|$.
$|I_a| = \frac{|S|}{|V|} = \frac{538500}{3810.5} \approx 141.32$ A.

The power factor angle $\phi$ is given by $\tan \phi = \frac{Q}{P} = \frac{200}{500} = 0.4$.
$\phi = \arctan(0.4) \approx 21.8^\circ$.
Since $Q$ is positive, the power factor is leading.

So, (c) The new armature current is approximately **141.32 A**, and the power factor is **leading by 21.8 degrees**.

---

## 8. Practice Questions

1.  List the four essential conditions for paralleling a synchronous generator with an infinite bus-bar.
2.  Describe the role of the synchroscope in the process of synchronization.
3.  For a synchronous generator connected to an infinite bus-bar, what parameter is primarily controlled by the mechanical input to the prime mover? What parameter is primarily controlled by the field excitation?
4.  Explain why a synchronous generator operating at minimum armature current on a V-curve operates at unity power factor.
5.  A synchronous generator is operating on an infinite bus at rated voltage and frequency. If the prime mover torque is increased, what will be the effect on the real power output and the power angle?
6.  A synchronous generator connected to an infinite bus draws $100$ kW real power and supplies $50$ kVAR reactive power. If the bus voltage is $11$ kV (line-to-line) and the synchronous reactance is $5 \Omega$/phase, calculate the magnitude of the internally generated voltage $E$ if the power angle is $15^\circ$. (Assume per-phase calculations).
7.  (Similar to Problem 1) A 3-phase synchronous generator is connected to an infinite bus of $480$ V, $60$ Hz. The generator's synchronous reactance is $0.8 \Omega$/phase. The internal generated voltage is $E_g = 300$ V (per phase). If the phase angle $\delta$ is $20^\circ$ leading. Calculate the real and reactive power output and the armature current per phase.

---

## 9. Answers to Practice Questions

1.  **Conditions for Parallel Operation:**
    *   Equal voltage magnitude.
    *   Equal frequency.
    *   Equal phase sequence.
    *   Equal phase angle (zero at the moment of connection).

2.  **Role of Synchroscope:** A synchroscope indicates the phase difference and frequency difference between the incoming generator and the bus-bar. It helps the operator adjust the prime mover speed to match the frequencies and bring the phase angles into alignment, allowing for safe closing of the circuit breaker.

3.  **Controlled Parameters:**
    *   Mechanical input: Primarily controls **real power output ($P$)**.
    *   Field excitation: Primarily controls **reactive power output ($Q$)**.

4.  **Minimum Armature Current at Unity Power Factor:** The armature current $|I_a| = \sqrt{(\frac{E \sin \delta}{X_s})^2 + (\frac{V - E \cos \delta}{X_s})^2}$. For a constant real power ($P = \frac{VE}{X_s} \sin \delta$), $|I_a|$ is minimized when the reactive power component is also minimized, which occurs at unity power factor ($\phi=0^\circ$). At unity power factor, the reactive power drawn/supplied by the machine is zero, leading to the lowest possible armature current for a given real power output.

5.  **Effect of Increased Torque:** If the prime mover torque is increased, the generator will attempt to speed up. On an infinite bus, the speed is fixed. Therefore, the **real power output ($P$) increases**, and the **power angle ($\delta$) increases** to absorb the extra mechanical power.

6.  **Calculation of E:**
    Given: $V_{LL} = 11$ kV, so $V = \frac{11000}{\sqrt{3}} \approx 6350.9$ V.
    $X_s = 5 \Omega$.
    $P = 100$ kW $= 100000$ W.
    $Q = 50$ kVAR $= 50000$ VAR.
    $\delta = 15^\circ$.

    First, find $I_a$.
    $S = P + jQ = 100000 + j50000$ VA.
    $|S| = \sqrt{100000^2 + 50000^2} = \sqrt{10^{10} + 2.5 \times 10^9} = \sqrt{1.25 \times 10^{10}} = 111803$ VA.
    $|I_a| = \frac{|S|}{|V|} = \frac{111803}{6350.9} \approx 17.605$ A.

    The power factor angle is $\tan \phi = \frac{Q}{P} = \frac{50000}{100000} = 0.5$.
    $\phi = \arctan(0.5) \approx 26.57^\circ$.
    So $I_a = 17.605 \angle 26.57^\circ$ A.

    Now, use $V_b = E_g - jX_s I_a$.
    $E_g = V_b + jX_s I_a$.
    $V_b = 6350.9 \angle 0^\circ$ V.
    $X_s I_a = j5 \times (17.605 \angle 26.57^\circ) = j5 \times (15.714 + j7.857)$
    $X_s I_a = j78.57 - 39.285 = -39.285 + j78.57$.

    $E_g = (6350.9 + j0) + (-39.285 + j78.57) = 6311.615 + j78.57$ V.
    $|E_g| = \sqrt{(6311.615)^2 + (78.57)^2} \approx \sqrt{39836479 + 6173} \approx \sqrt{39842652} \approx 6312.1$ V.

    *Check with formula:* $P = \frac{VE}{X_s} \sin \delta$.
    We need to find $E$. We know $P, V, X_s, \delta$.
    $100000 = \frac{6350.9 \times E}{5} \sin(15^\circ)$.
    $100000 = 1270.18 \times E \times 0.2588$.
    $100000 = 328.75 E$.
    $E = \frac{100000}{328.75} \approx 304.18$ V.

    *Wait, the calculation using the full phasor equation gave a very different E.* Let's recheck the conditions.
    $V_b = V \angle 0$. $I_a = I_a \angle \phi$. $E_g = E \angle \delta$.
    $V \angle 0 = E \angle \delta - jX_s (I_a \angle \phi)$.
    $V = E \cos \delta + jE \sin \delta - jX_s (I_a \cos \phi + j I_a \sin \phi)$.
    $V = E \cos \delta + jE \sin \delta - jX_s I_a \cos \phi + X_s I_a \sin \phi$.
    $V = (E \cos \delta + X_s I_a \sin \phi) + j(E \sin \delta - X_s I_a \cos \phi)$.

    Equating real parts: $V = E \cos \delta + X_s I_a \sin \phi$.
    Equating imaginary parts: $0 = E \sin \delta - X_s I_a \cos \phi$.

    We have $V=6350.9$, $I_a=17.605$, $\phi=26.57^\circ$, $X_s=5$.
    From imaginary part: $E \sin \delta = X_s I_a \cos \phi = 5 \times 17.605 \times \cos(26.57^\circ) = 88.025 \times 0.8944 \approx 78.71$.
    $E \sin \delta = 78.71$.

    From real part: $V = E \cos \delta + X_s I_a \sin \phi$.
    $6350.9 = E \cos \delta + 5 \times 17.605 \times \sin(26.57^\circ)$.
    $6350.9 = E \cos \delta + 88.025 \times 0.4472$.
    $6350.9 = E \cos \delta + 39.35$.
    $E \cos \delta = 6350.9 - 39.35 = 6311.55$.

    Now we have two equations:
    1) $E \sin \delta = 78.71$
    2) $E \cos \delta = 6311.55$

    Divide (1) by (2): $\tan \delta = \frac{78.71}{6311.55} \approx 0.01247$.
    $\delta = \arctan(0.01247) \approx 0.714^\circ$.

    The problem states $\delta=15^\circ$. This means my initial assumption of $I_a$ angle relative to $V$ might be incorrect, or the problem is set up with inconsistent parameters.
    Let's use the $P$ and $Q$ formulas directly with $\delta=15^\circ$.
    $P = \frac{VE}{X_s} \sin \delta \implies 100000 = \frac{6350.9 \times E}{5} \sin(15^\circ) \implies E \approx 304.18$ V.
    $Q = \frac{VE}{X_s} \cos \delta - \frac{V^2}{X_s} \implies 50000 = \frac{6350.9 \times 304.18}{5} \cos(15^\circ) - \frac{(6350.9)^2}{5}$.
    $50000 = 386478.5 \times 0.9659 - 8130789$.
    $50000 = 373344.5 - 8130789 \approx -7757444$. This is clearly wrong.

    The parameters $P, Q, V, X_s$ are given. $\delta=15^\circ$ is also given. We need $E$.
    From $P = \frac{VE}{X_s} \sin \delta$, we get $E \approx 304.18$ V.
    Let's check if this $E$ gives the correct $Q$.
    $Q = \frac{VE}{X_s} \cos \delta - \frac{V^2}{X_s} = \frac{6350.9 \times 304.18}{5} \cos(15^\circ) - \frac{6350.9^2}{5}$.
    $Q = 386478.5 \times 0.9659 - 8130789 = 373344.5 - 8130789 = -7757444.5$ VAR.
    This is far from the given $Q=50000$ VAR.

    **Conclusion:** The given parameters ($P=100$ kW, $Q=50$ kVAR, $V=11$ kV, $X_s=5\Omega$, $\delta=15^\circ$) are inconsistent.
    If we assume $P, Q, V, X_s$ are correct, we can find $\delta$ and then $E$.
    $\tan \phi = Q/P = 50000/100000 = 0.5 \implies \phi = 26.57^\circ$.
    $|S| = 111803$ VA. $|I_a| = 17.605$ A.
    $V = E \cos \delta + X_s I_a \sin \phi \implies 6350.9 = E \cos \delta + 5 \times 17.605 \times \sin(26.57^\circ) \implies E \cos \delta = 6311.55$.
    $0 = E \sin \delta - X_s I_a \cos \phi \implies E \sin \delta = 5 \times 17.605 \times \cos(26.57^\circ) \implies E \sin \delta = 78.71$.
    Dividing: $\tan \delta = 78.71 / 6311.55 = 0.01247 \implies \delta = 0.714^\circ$.
    $E = \sqrt{(6311.55)^2 + (78.71)^2} = 6312.1$ V.
    So, if $P, Q, V, X_s$ are correct, then $\delta \approx 0.714^\circ$ and $E \approx 6312.1$ V.

    Assuming the question meant to give consistent values, let's proceed with $E$ calculated from $P$:
    From $P$: $E \approx 304.18$ V. This value of $E$ is unusually low for a 11kV bus.

    Let's assume the question meant $Q$ was lagging. $S = 100 - j50$ kVA. $\phi = -26.57^\circ$.
    $|S| = 111803$ VA. $|I_a| = 17.605$ A.
    $V = E \cos \delta + X_s I_a \sin \phi \implies 6350.9 = E \cos \delta + 5 \times 17.605 \times \sin(-26.57^\circ) \implies E \cos \delta = 6350.9 - 5 \times 17.605 \times (-0.4472) = 6350.9 + 39.35 = 6390.25$.
    $0 = E \sin \delta - X_s I_a \cos \phi \implies E \sin \delta = 5 \times 17.605 \times \cos(-26.57^\circ) = 88.025 \times 0.8944 = 78.71$.
    $\tan \delta = 78.71 / 6390.25 = 0.0123 \implies \delta = 0.704^\circ$.
    $E = \sqrt{6390.25^2 + 78.71^2} = 6390.6$ V.
    Still $\delta$ very small.

    If we take $P=100$kW, $V=6.35$kV, $X_s=5\Omega$ and $\delta=15^\circ$.
    $E = P X_s / (V \sin \delta) = 100000 * 5 / (6350.9 * sin(15)) = 500000 / (6350.9 * 0.2588) = 500000 / 1643.8 = 304.18$ V.
    This E is very low. This question is flawed in its numbers.

    **Assuming the question's intent was to find $E$ using $P$ and $\delta$:**
    (a) $E \approx 304.18$ V.

7.  **Calculation:**
    $V_{LL} = 480$ V, $V = \frac{480}{\sqrt{3}} \approx 277.1$ V.
    $X_s = 0.8 \Omega$.
    $E_g = 300$ V.
    $\delta = 20^\circ$.

    Real Power ($P$):
    $P = \frac{VE}{X_s} \sin \delta = \frac{277.1 \times 300}{0.8} \sin(20^\circ) = 103912.5 \times 0.342 = 35564.5$ W = **35.56 kW**.

    Reactive Power ($Q$):
    $Q = \frac{VE}{X_s} \cos \delta - \frac{V^2}{X_s} = \frac{277.1 \times 300}{0.8} \cos(20^\circ) - \frac{(277.1)^2}{0.8}$.
    $Q = 103912.5 \times 0.9397 - 96670.5$.
    $Q = 97646.6 - 96670.5 = 976.1$ VAR = **0.98 kVAR**.

    Armature Current ($I_a$):
    $S = P + jQ = 35564.5 + j976.1$ VA.
    $|S| = \sqrt{35564.5^2 + 976.1^2} = \sqrt{1264845330 + 952770} \approx \sqrt{1265798100} \approx 35578$ VA.
    $|I_a| = \frac{|S|}{|V|} = \frac{35578}{277.1} \approx 128.4$ A.

    Power Factor Angle:
    $\tan \phi = \frac{Q}{P} = \frac{976.1}{35564.5} \approx 0.0274$.
    $\phi = \arctan(0.0274) \approx 1.57^\circ$.
    Since $Q$ is positive, the power factor is leading.

    So, $P \approx 35.56$ kW, $Q \approx 0.98$ kVAR (leading), $|I_a| \approx 128.4$ A, Power Factor $\approx 1.57^\circ$ leading.

---

This module covers the critical aspects of operating synchronous generators in parallel with a stable power system. Understanding the synchronization process, the impact of mechanical input and excitation changes, and the graphical representation through V-curves is fundamental for power system operation and control.
