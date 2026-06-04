---
title: "Power flow equations in cylindrical-rotor type synchronous generator – numerical problems"
subject: "SYNCHRONOUS & INDUCTION MACHINES"
module: "Module 2: Power flow equations in cylindrical"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35def"
status: "completed"
scrapedAt: "2026-05-23T16:19:09.458Z"
---
# SYNCHRONOUS & INDUCTION MACHINES

## Module 2: Power Flow Equations in Cylindrical-Rotor Synchronous Generators

### Topic: Power Flow Equations in Cylindrical-Rotor Type Synchronous Generator – Numerical Problems

**Course Outcomes Addressed:**

*   **CO1:** Describe the constructional details and analyze the performance of synchronous generators under various load conditions. (Knowledge Level: K3)

---

### 1. Introduction to Cylindrical-Rotor Synchronous Generators

#### 1.1 Constructional Features (Brief Recap for Context)

*   **Stator:** Contains three distributed windings, spatially displaced by 120 electrical degrees. These windings carry the armature current, which flows when the generator is connected to a load.
*   **Rotor:** Typically an electromagnet. In cylindrical-rotor machines, the field winding is embedded in slots on the surface of a smooth rotor. This design is suitable for high-speed operation (e.g., turbo-generators).
*   **Field Winding:** Supplied with DC current via slip rings and brushes, creating a magnetic field that rotates with the rotor.

#### 1.2 Phasor Diagram of a Cylindrical-Rotor Synchronous Generator

The phasor diagram is crucial for understanding the power flow equations. It represents the voltages, currents, and impedances within the machine.

*   **Key Phasors:**
    *   $E_f$ or $E_a$: Generated EMF (internal voltage) in the armature winding due to the rotor field. This leads the rotor by the angle $\delta$ (power angle).
    *   $V_t$: Terminal voltage.
    *   $I_a$: Armature current.
    *   $jX_s$: Synchronous reactance of the machine.
    *   $R_a$: Armature resistance (often neglected for simplicity in initial analysis, but important for detailed power calculations).

*   **Basic Equation:** The fundamental relationship is:
    $V_t = E_f - I_a(R_a + jX_s)$
    *(Note: For a generator, the internal EMF $E_f$ leads the terminal voltage $V_t$ by the power angle $\delta$. The current $I_a$ flows *out* of the generator terminal.)*

*   **Simplified Equation (Neglecting $R_a$):**
    $V_t = E_f - jX_s I_a$

---

### 2. Power Flow Equations

The power flow equations describe how electrical power is transferred from the generated EMF to the terminal voltage and then to the load.

#### 2.1 Real and Reactive Power Output

From the simplified phasor equation: $E_f = V_t + jX_s I_a$

Let's represent the phasors in polar form:
*   $V_t = |V_t| \angle 0^\circ$ (We usually take the terminal voltage as the reference).
*   $E_f = |E_f| \angle \delta$
*   $I_a = |I_a| \angle -\phi$ (where $\phi$ is the load power factor angle, positive for lagging power factor)

Substituting into the equation:
$|E_f| \angle \delta = |V_t| \angle 0^\circ + jX_s (|I_a| \angle -\phi)$
$|E_f| \angle \delta = |V_t| \angle 0^\circ + X_s |I_a| \angle (90^\circ - \phi)$

Now, let's express $I_a$ in terms of $V_t$ and $E_f$:
$jX_s I_a = E_f - V_t$
$I_a = \frac{E_f - V_t}{jX_s} = \frac{|E_f| \angle \delta - |V_t| \angle 0^\circ}{jX_s}$

$I_a = \frac{1}{jX_s} [|E_f|(\cos \delta + j \sin \delta) - |V_t|]$
$I_a = \frac{1}{jX_s} [(|E_f| \cos \delta - |V_t|) + j |E_f| \sin \delta]$
$I_a = \frac{-j}{X_s} [(|E_f| \cos \delta - |V_t|) + j |E_f| \sin \delta]$
$I_a = \frac{-j(|E_f| \cos \delta - |V_t|)}{X_s} + \frac{|E_f| \sin \delta}{X_s}$
$I_a = \frac{|E_f| \sin \delta}{X_s} - j \frac{|E_f| \cos \delta - |V_t|}{X_s}$

Let $I_a = I_{real} + jI_{imag}$ (in rectangular form).

The **apparent power** delivered to the load is:
$S = V_t I_a^*$ (where $I_a^*$ is the complex conjugate of $I_a$)

Using $V_t = |V_t| \angle 0^\circ$ and $I_a = \frac{|E_f| \sin \delta}{X_s} - j \frac{|E_f| \cos \delta - |V_t|}{X_s}$:
$I_a^* = \frac{|E_f| \sin \delta}{X_s} + j \frac{|E_f| \cos \delta - |V_t|}{X_s}$

$S = (|V_t| \angle 0^\circ) \times \left( \frac{|E_f| \sin \delta}{X_s} + j \frac{|E_f| \cos \delta - |V_t|}{X_s} \right)$
$S = |V_t| \left( \frac{|E_f| \sin \delta}{X_s} + j \frac{|E_f| \cos \delta - |V_t|}{X_s} \right)$
$S = \frac{|V_t| |E_f| \sin \delta}{X_s} + j \frac{|V_t| (|E_f| \cos \delta - |V_t|)}{X_s}$

The apparent power $S$ can be written as $S = P + jQ$.
Therefore:

*   **Real Power Output (P):**
    $P = \frac{|V_t| |E_f| \sin \delta}{X_s}$
    *(This equation is fundamental and relates real power output to terminal voltage, internal EMF, power angle, and synchronous reactance.)*

*   **Reactive Power Output (Q):**
    $Q = \frac{|V_t| (|E_f| \cos \delta - |V_t|)}{X_s}$

#### 2.2 Power Output Including Armature Resistance ($R_a$)

If armature resistance $R_a$ is considered:
$V_t = E_f - I_a(R_a + jX_s)$
$E_f = V_t + I_a(R_a + jX_s)$

Let $Z_s = R_a + jX_s$.
$I_a = \frac{E_f - V_t}{Z_s}$

$S = V_t I_a^* = V_t \left( \frac{E_f^* - V_t^*}{Z_s^*} \right)$

Let's use the phasor relationship: $E_f = V_t + I_a(R_a + jX_s)$.
Since $E_f$ leads $V_t$ by $\delta$, we can write $E_f$ in terms of $V_t$:
$E_f = V_t + I_a Z_s$
$E_f = |V_t|\angle 0^\circ + |I_a|\angle -\phi (R_a + jX_s)$
$E_f = |V_t| + |I_a| (R_a \cos(-\phi) - X_s \sin(-\phi)) + j |I_a| (R_a \sin(-\phi) + X_s \cos(-\phi))$
$E_f = |V_t| + |I_a| (R_a \cos \phi + X_s \sin \phi) + j |I_a| (-R_a \sin \phi + X_s \cos \phi)$

Since $E_f = |E_f| \angle \delta = |E_f| (\cos \delta + j \sin \delta)$, we equate the imaginary part:
$|E_f| \sin \delta = |I_a| (X_s \cos \phi - R_a \sin \phi)$

And the real part:
$|E_f| \cos \delta = |V_t| + |I_a| (R_a \cos \phi + X_s \sin \phi)$

Now, let's consider the power delivered. The power generated internally is $P_{in} = \text{Re}(E_f I_a^*)$.
$E_f = |E_f| \angle \delta$
$I_a = |I_a| \angle -\phi$
$I_a^* = |I_a| \angle \phi$

$E_f I_a^* = |E_f| \angle \delta \cdot |I_a| \angle \phi = |E_f| |I_a| \angle (\delta + \phi)$
$E_f I_a^* = |E_f| |I_a| (\cos(\delta + \phi) + j \sin(\delta + \phi))$

$P_{in} = |E_f| |I_a| \cos(\delta + \phi)$

However, it's more common to express power at the terminals.
$S = V_t I_a^* = P + jQ$
$P = |V_t| |I_a| \cos \phi$
$Q = |V_t| |I_a| \sin \phi$

We need to express $P$ and $Q$ in terms of $E_f$, $V_t$, $X_s$, and $\delta$.
From $E_f = V_t + jX_s I_a$ (neglecting $R_a$):
$I_a = \frac{E_f - V_t}{jX_s}$
$I_a^* = \frac{E_f^* - V_t^*}{-jX_s} = \frac{V_t^* - E_f^*}{jX_s}$

$S = V_t I_a^* = V_t \frac{V_t^* - E_f^*}{jX_s}$
$S = \frac{1}{jX_s} (V_t V_t^* - V_t E_f^*)$
$S = \frac{1}{jX_s} (|V_t|^2 - V_t E_f^*)$
$S = \frac{-j}{X_s} (|V_t|^2 - |V_t| \angle 0^\circ \cdot |E_f| \angle -\delta)$
$S = \frac{-j}{X_s} (|V_t|^2 - |V_t| |E_f| (\cos(-\delta) + j \sin(-\delta)))$
$S = \frac{-j}{X_s} (|V_t|^2 - |V_t| |E_f| (\cos \delta - j \sin \delta))$
$S = \frac{-j|V_t|^2}{X_s} + \frac{j|V_t| |E_f| \cos \delta}{X_s} - \frac{j^2 |V_t| |E_f| \sin \delta}{X_s}$
$S = \frac{|V_t| |E_f| \sin \delta}{X_s} + j \left( \frac{|V_t| |E_f| \cos \delta - |V_t|^2}{X_s} \right)$

This confirms the previous results.

**If $R_a$ is included:**
$S = V_t I_a^* = P + jQ$
$P = \text{Re}(V_t I_a^*)$
$Q = \text{Im}(V_t I_a^*)$

We have $I_a = \frac{E_f - V_t}{R_a + jX_s}$.
$I_a^* = \frac{E_f^* - V_t^*}{R_a - jX_s}$.

$S = V_t \frac{E_f^* - V_t^*}{R_a - jX_s}$
$S = \frac{V_t E_f^* - |V_t|^2}{R_a - jX_s}$
$S = \frac{(|V_t|\angle 0^\circ)(|E_f|\angle -\delta) - |V_t|^2}{R_a - jX_s}$
$S = \frac{|V_t||E_f|(\cos(-\delta) + j\sin(-\delta)) - |V_t|^2}{R_a - jX_s}$
$S = \frac{|V_t||E_f|\cos\delta - j|V_t||E_f|\sin\delta - |V_t|^2}{R_a - jX_s}$
$S = \frac{(|V_t||E_f|\cos\delta - |V_t|^2) - j|V_t||E_f|\sin\delta}{R_a - jX_s}$

Multiply numerator and denominator by the conjugate of the denominator $(R_a + jX_s)$:
$S = \frac{[(|V_t||E_f|\cos\delta - |V_t|^2) - j|V_t||E_f|\sin\delta](R_a + jX_s)}{(R_a - jX_s)(R_a + jX_s)}$
$S = \frac{1}{R_a^2 + X_s^2} [ (R_a|V_t||E_f|\cos\delta - R_a|V_t|^2) + j(X_s|V_t||E_f|\cos\delta - X_s|V_t|^2) - j(R_a|V_t||E_f|\sin\delta) - j^2(X_s|V_t||E_f|\sin\delta) ]$
$S = \frac{1}{R_a^2 + X_s^2} [ (R_a|V_t||E_f|\cos\delta - R_a|V_t|^2 + X_s|V_t||E_f|\sin\delta) + j(X_s|V_t||E_f|\cos\delta - X_s|V_t|^2 - R_a|V_t||E_f|\sin\delta) ]$

*   **Real Power Output (P) with $R_a$:**
    $P = \frac{1}{R_a^2 + X_s^2} [ R_a|V_t||E_f|\cos\delta + X_s|V_t||E_f|\sin\delta - R_a|V_t|^2 ]$

*   **Reactive Power Output (Q) with $R_a$:**
    $Q = \frac{1}{R_a^2 + X_s^2} [ X_s|V_t||E_f|\cos\delta - R_a|V_t||E_f|\sin\delta - X_s|V_t|^2 ]$

**Note on Textbooks:**
*   P.S. Bhimbra (Chapter 6, Synchronous Generators) and Kothari & Nagrath (Chapter 11, Synchronous Generators) often derive the power equations. They typically start with the phasor diagram and the fundamental voltage equation $E_f = V_t + I_a(R_a + jX_s)$ or $V_t = E_f - I_a(R_a + jX_s)$ and then work with complex conjugates to obtain $P$ and $Q$. M.G. Say also provides comprehensive phasor analysis.

#### 2.3 Power Flow Analysis

The power equations allow us to analyze the generator's performance under different operating conditions:

*   **Power Angle ($\delta$):**
    *   $\delta = 0$: Rotor field is aligned with the resultant air-gap field. No power transfer.
    *   $\delta > 0$: Rotor field lags the resultant air-gap field, resulting in positive real power output (generator action).
    *   $\delta < 0$: Rotor field leads the resultant air-gap field, resulting in negative real power output (motor action).
    *   The maximum real power output (synchronous power) occurs when $\sin \delta = 1$, i.e., $\delta = 90^\circ$. This maximum power is $P_{max} = \frac{|V_t| |E_f|}{X_s}$. This is the *steady-state stability limit*.

*   **Load Angle Characteristics:** The power output varies sinusoidally with $\delta$ (ignoring $R_a$). This is a key characteristic of synchronous machines.

*   **Power Factor:** The power factor is determined by $\phi$. From $S = P + jQ$, $\tan \phi = Q/P$.
    The load power factor angle $\phi$ is related to the internal voltage $E_f$ and terminal voltage $V_t$ by the phasor diagram.
    For generator action, $I_a$ lags $E_f$. The angle between $V_t$ and $I_a$ is $\phi$.

#### 2.4 Input Power

The real power input to the generator is the mechanical power supplied by the prime mover minus the rotational losses (friction, windage, and core losses).
$P_{input} = P_{output} + \text{Stator Copper Losses} + \text{Core Losses}$
$P_{input} = P + 3I_a^2 R_a + \text{Core Losses}$

The generated electrical power before stator losses is $P_{gen} = \text{Re}(E_f I_a^*)$.
$P_{gen} = \text{Re}((|V_t| + jX_s I_a) I_a^*) = \text{Re}(|V_t| I_a^* + jX_s |I_a|^2)$
$P_{gen} = \text{Re}(V_t I_a^*) + \text{Re}(jX_s |I_a|^2)$
$P_{gen} = P + 0$ (This is based on the simplified equation $V_t = E_f - jX_s I_a$, which means $E_f = V_t + jX_s I_a$. So $E_f I_a^* = (V_t + jX_s I_a)I_a^* = V_t I_a^* + jX_s |I_a|^2$. The real part is $P$. This means $P_{gen} = P$, which makes sense if we consider the power flowing *from* the internal EMF to the terminals *before* accounting for stator resistance losses.)

Let's use the relationship $E_f = |E_f|\angle\delta$ and $V_t = |V_t|\angle 0$.
$I_a = \frac{E_f - V_t}{jX_s} = \frac{|E_f|\angle\delta - |V_t|\angle 0}{jX_s}$
$I_a = \frac{(|E_f|\cos\delta - |V_t|) + j|E_f|\sin\delta}{jX_s}$
$I_a = \frac{-j(|E_f|\cos\delta - |V_t|)}{X_s} + \frac{|E_f|\sin\delta}{X_s}$
$I_a = \frac{|E_f|\sin\delta}{X_s} - j\frac{|E_f|\cos\delta - |V_t|}{X_s}$

$P_{gen} = \text{Re}(E_f I_a^*) = \text{Re}((|E_f|\angle\delta) \cdot (\frac{|E_f|\sin\delta}{X_s} + j\frac{|E_f|\cos\delta - |V_t|}{X_s}))$
$P_{gen} = \text{Re}(|E_f|(\cos\delta + j\sin\delta) \cdot (\frac{|E_f|\sin\delta}{X_s} + j\frac{|E_f|\cos\delta - |V_t|}{X_s}))$
$P_{gen} = |E_f| \text{Re}[ (\cos\delta + j\sin\delta)(\frac{|E_f|\sin\delta}{X_s} + j\frac{|E_f|\cos\delta - |V_t|}{X_s}) ]$
$P_{gen} = \frac{|E_f|}{X_s} \text{Re}[ \cos\delta|E_f|\sin\delta + j\cos\delta(|E_f|\cos\delta - |V_t|) + j\sin\delta|E_f|\sin\delta + j^2\sin\delta(|E_f|\cos\delta - |V_t|) ]$
$P_{gen} = \frac{|E_f|}{X_s} \text{Re}[ |E_f|\cos\delta\sin\delta - \sin\delta(|E_f|\cos\delta - |V_t|) + j(\cos\delta(|E_f|\cos\delta - |V_t|) + \sin\delta|E_f|\sin\delta) ]$
$P_{gen} = \frac{|E_f|}{X_s} [ |E_f|\cos\delta\sin\delta - |E_f|\sin\delta\cos\delta + |V_t|\sin\delta ]$
$P_{gen} = \frac{|E_f| |V_t| \sin\delta}{X_s} = P_{output}$

This confirms that if $R_a$ is neglected, the power generated internally equals the power delivered to the terminals.
When $R_a$ is included, the power delivered to the terminals is $P$. The power dissipated in the armature resistance is $3I_a^2 R_a$.
The mechanical power input to the rotor must supply $P$ and the stator losses.

---

### 3. Numerical Problems and Examples

#### Example 1: Calculating Power Output and Power Factor

A cylindrical-rotor synchronous generator has a synchronous reactance of $1.0 \text{ p.u.}$ (per unit). It is connected to an infinite bus of $1.0 \text{ p.u.}$ voltage. The excitation voltage is $1.2 \text{ p.u.}$ and the power angle is $30^\circ$. Calculate the real and reactive power output, and the power factor.

**Given:**
*   $|V_t| = 1.0 \text{ p.u.}$
*   $|E_f| = 1.2 \text{ p.u.}$
*   $X_s = 1.0 \text{ p.u.}$
*   $\delta = 30^\circ$

**Solution:**

Assuming armature resistance is negligible ($R_a = 0$):

1.  **Real Power Output (P):**
    $P = \frac{|V_t| |E_f| \sin \delta}{X_s}$
    $P = \frac{1.0 \times 1.2 \times \sin 30^\circ}{1.0}$
    $P = 1.2 \times 0.5 = 0.6 \text{ p.u.}$

2.  **Reactive Power Output (Q):**
    $Q = \frac{|V_t| (|E_f| \cos \delta - |V_t|)}{X_s}$
    $Q = \frac{1.0 \times (1.2 \times \cos 30^\circ - 1.0)}{1.0}$
    $Q = 1.2 \times \frac{\sqrt{3}}{2} - 1.0$
    $Q = 1.2 \times 0.866 - 1.0$
    $Q = 1.0392 - 1.0 = 0.0392 \text{ p.u.}$

3.  **Power Factor:**
    The power factor angle $\phi$ is given by $\tan \phi = Q/P$.
    $\tan \phi = \frac{0.0392}{0.6} = 0.06533$
    $\phi = \arctan(0.06533) \approx 3.74^\circ$

    Since $Q$ is positive, the power factor is leading.
    Power Factor = $\cos \phi = \cos(3.74^\circ) \approx 0.9977$ leading.

**Result:**
*   Real Power Output ($P$) = $0.6$ p.u.
*   Reactive Power Output ($Q$) = $0.0392$ p.u.
*   Power Factor $\approx 0.9977$ leading.

#### Example 2: Determining Excitation Voltage for a Given Load

A 3-phase synchronous generator has a synchronous reactance of $4 \Omega$ per phase. It is delivering $1000 \text{ kW}$ at a power factor of $0.8$ lagging to an infinite bus of $6.6 \text{ kV}$ (line-to-line). The stator resistance is negligible. Calculate the excitation voltage ($E_f$) per phase and the power angle ($\delta$).

**Given:**
*   $X_s = 4 \Omega$
*   $P = 1000 \text{ kW} = 10^6 \text{ W}$
*   $\cos \phi = 0.8$ lagging
*   $|V_t| = \frac{6.6 \times 10^3}{\sqrt{3}} = 3810.5 \text{ V}$ (per phase)

**Solution:**

1.  **Calculate Load Current ($I_a$) and Power Factor Angle ($\phi$):**
    From $P = \sqrt{3} |V_t| |I_a| \cos \phi$:
    $10^6 = \sqrt{3} \times (3810.5) \times |I_a| \times 0.8$
    $|I_a| = \frac{10^6}{\sqrt{3} \times 3810.5 \times 0.8} \approx 38.1 \text{ A}$

    For lagging power factor, $\phi = \arccos(0.8) = 36.87^\circ$.
    So, $I_a$ lags $V_t$ by $36.87^\circ$. If $V_t$ is at $0^\circ$, then $I_a$ is at $-36.87^\circ$.

2.  **Calculate Reactive Power Output (Q):**
    $Q = P \tan \phi = 1000 \text{ kW} \times \tan(36.87^\circ)$
    $Q = 1000 \text{ kW} \times 0.75 = 750 \text{ kVAR}$

3.  **Calculate Excitation Voltage ($E_f$) and Power Angle ($\delta$):**
    We use the power output equation $P = \frac{|V_t| |E_f| \sin \delta}{X_s}$.
    And $Q = \frac{|V_t| (|E_f| \cos \delta - |V_t|)}{X_s}$.

    From the $Q$ equation:
    $Q X_s = |V_t| |E_f| \cos \delta - |V_t|^2$
    $|V_t| |E_f| \cos \delta = Q X_s + |V_t|^2$
    $|V_t| |E_f| \cos \delta = (750 \times 10^3) \times 4 + (3810.5)^2$
    $|V_t| |E_f| \cos \delta = 3 \times 10^6 + 14.52 \times 10^6 = 17.52 \times 10^6$
    $|E_f| \cos \delta = \frac{17.52 \times 10^6}{3810.5} \approx 4597.7 \text{ V}$

    From the $P$ equation:
    $P X_s = |V_t| |E_f| \sin \delta$
    $|E_f| \sin \delta = \frac{P X_s}{|V_t|}$
    $|E_f| \sin \delta = \frac{(1000 \times 10^3) \times 4}{3810.5} \approx 1049.7 \text{ V}$

    Now we have two equations:
    (1) $|E_f| \cos \delta = 4597.7$
    (2) $|E_f| \sin \delta = 1049.7$

    Divide (2) by (1) to find $\tan \delta$:
    $\tan \delta = \frac{1049.7}{4597.7} \approx 0.2283$
    $\delta = \arctan(0.2283) \approx 12.87^\circ$

    Square both equations and add them to find $|E_f|$:
    $(|E_f| \cos \delta)^2 + (|E_f| \sin \delta)^2 = (4597.7)^2 + (1049.7)^2$
    $|E_f|^2 (\cos^2 \delta + \sin^2 \delta) = 21.14 \times 10^6 + 1.10 \times 10^6$
    $|E_f|^2 = 22.24 \times 10^6$
    $|E_f| = \sqrt{22.24 \times 10^6} \approx 4716 \text{ V}$

**Result:**
*   Excitation Voltage ($E_f$) per phase $\approx 4716 \text{ V}$
*   Power Angle ($\delta$) $\approx 12.87^\circ$

---

### 4. Practice Questions and Exercises

**Question 1:**
A cylindrical-rotor synchronous generator has a synchronous reactance of $1.2 \text{ p.u.}$ and negligible armature resistance. It is connected to an infinite bus of $1.0 \text{ p.u.}$ voltage. If the excitation voltage is $1.3 \text{ p.u.}$ and the generator delivers $0.7 \text{ p.u.}$ real power, determine the power angle ($\delta$) and the reactive power output ($Q$).

**Answer 1:**
*   Using $P = \frac{|V_t| |E_f| \sin \delta}{X_s}$:
    $0.7 = \frac{1.0 \times 1.3 \times \sin \delta}{1.2}$
    $\sin \delta = \frac{0.7 \times 1.2}{1.3} = \frac{0.84}{1.3} \approx 0.6462$
    $\delta = \arcsin(0.6462) \approx 40.27^\circ$

*   Using $Q = \frac{|V_t| (|E_f| \cos \delta - |V_t|)}{X_s}$:
    $\cos \delta = \cos(40.27^\circ) \approx 0.7624$
    $Q = \frac{1.0 \times (1.3 \times 0.7624 - 1.0)}{1.2}$
    $Q = \frac{1.0 \times (0.9911 - 1.0)}{1.2} = \frac{-0.0089}{1.2} \approx -0.0074 \text{ p.u.}$

    So, Power Angle ($\delta$) $\approx 40.27^\circ$, Reactive Power Output ($Q$) $\approx -0.0074$ p.u. (capacitive/leading power factor).

**Question 2:**
A synchronous generator is operating with $|V_t| = 1.0 \text{ p.u.}$, $|E_f| = 1.1 \text{ p.u.}$, and $X_s = 1.0 \text{ p.u.}$. If the armature resistance is $0.1 \text{ p.u.}$, and the power angle $\delta = 20^\circ$. Calculate the real power output ($P$) and reactive power output ($Q$).

**Answer 2:**
We need to use the equations including $R_a$:
$P = \frac{1}{R_a^2 + X_s^2} [ R_a|V_t||E_f|\cos\delta + X_s|V_t||E_f|\sin\delta - R_a|V_t|^2 ]$
$Q = \frac{1}{R_a^2 + X_s^2} [ X_s|V_t||E_f|\cos\delta - R_a|V_t||E_f|\sin\delta - X_s|V_t|^2 ]$

Given: $|V_t|=1.0$, $|E_f|=1.1$, $R_a=0.1$, $X_s=1.0$, $\delta=20^\circ$.
$\cos 20^\circ \approx 0.9397$
$\sin 20^\circ \approx 0.3420$
$R_a^2 + X_s^2 = (0.1)^2 + (1.0)^2 = 0.01 + 1.0 = 1.01$

*   **Real Power Output (P):**
    $P = \frac{1}{1.01} [ (0.1)(1.0)(1.1)(0.9397) + (1.0)(1.0)(1.1)(0.3420) - (0.1)(1.0)^2 ]$
    $P = \frac{1}{1.01} [ 0.10337 + 0.3762 - 0.1 ]$
    $P = \frac{1}{1.01} [ 0.37957 ] \approx 0.3758 \text{ p.u.}$

*   **Reactive Power Output (Q):**
    $Q = \frac{1}{1.01} [ (1.0)(1.0)(1.1)(0.9397) - (0.1)(1.0)(1.1)(0.3420) - (1.0)(1.0)^2 ]$
    $Q = \frac{1}{1.01} [ 1.0337 - 0.03762 - 1.0 ]$
    $Q = \frac{1}{1.01} [ -0.00392 ] \approx -0.0039 \text{ p.u.}$

    So, Real Power Output ($P$) $\approx 0.3758$ p.u., Reactive Power Output ($Q$) $\approx -0.0039$ p.u.

---

### 5. Important Points to Remember

*   **Cylindrical Rotor:** Suitable for high-speed applications (turbo-generators).
*   **Phasor Diagram:** Essential for deriving power equations. Always place $V_t$ at the reference angle. $E_f$ leads $V_t$ by $\delta$. $I_a$ flows out of the generator terminal.
*   **Neglecting $R_a$:** Simplifies power equations to $P = \frac{|V_t| |E_f| \sin \delta}{X_s}$ and $Q = \frac{|V_t| (|E_f| \cos \delta - |V_t|)}{X_s}$.
*   **Including $R_a$:** Makes the equations more complex but provides a more accurate representation of power losses.
*   **Power Angle ($\delta$):** Dictates the amount of real power transferred. The maximum real power transfer occurs at $\delta = 90^\circ$ (steady-state limit).
*   **Infinite Bus:** An ideal bus with constant voltage magnitude and frequency, regardless of the load connected.
*   **Per Unit System:** Often used in power system analysis for simplification.
*   **Excitation Voltage ($E_f$):** Controls the reactive power output of the synchronous generator. Increasing $E_f$ (over-excitation) leads to sending reactive power (leading PF); decreasing $E_f$ (under-excitation) leads to absorbing reactive power (lagging PF).
*   **Stability Limit:** The maximum real power that can be delivered before the machine loses synchronism. In a simplified model ($R_a=0$), this is $P_{max} = \frac{|V_t| |E_f|}{X_s}$.

---

### 6. Alignment with Course Outcomes

*   **CO1:** This entire module and the notes directly address CO1 by analyzing the performance of synchronous generators under various load conditions through power flow equations and numerical examples. The understanding of $\delta$, $E_f$, $V_t$, and their impact on $P$ and $Q$ is central to this outcome.

---
This comprehensive study material covers the power flow equations for cylindrical-rotor synchronous generators and provides practical examples and practice questions, aligning with the specified learning outcomes and course objectives.
