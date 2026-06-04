---
title: "Single phase transformers – constructional details - principle of operation - EMF equation - ideal and practical transformer – numerical problems"
subject: "DC MACHINES & TRANSFORMERS"
module: "Module 3: Single phase transformers – constructional details "
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b2e"
status: "completed"
scrapedAt: "2026-05-23T16:12:24.492Z"
---
# DC MACHINES & TRANSFORMERS - Module 3: Single Phase Transformers - Constructional Details

This module focuses on the fundamental aspects of single-phase transformers, including their construction, operating principle, EMF equation, and the distinction between ideal and practical transformers. It also provides a basis for analyzing transformer performance through numerical problems.

---

## Module Objectives:

Upon completion of this module, you should be able to:

*   Describe the constructional details of single-phase transformers.
*   Explain the principle of operation of a single-phase transformer.
*   Derive and understand the EMF equation of a single-phase transformer.
*   Differentiate between an ideal and a practical transformer.
*   Solve numerical problems related to single-phase transformers.

---

## Course Outcomes Addressed:

*   **CO4: Analyze the performance of 1-phase transformer and auto-transformer under various load conditions.** (Knowledge Level: K3) - This module lays the groundwork for understanding transformer performance by explaining its basic principles and components.
*   **CO5: Describe the constructional details and operation of 3-phase transformers.** (Knowledge Level: K2) - While this module focuses on single-phase transformers, the underlying principles of magnetic induction and flux linkage are fundamental to understanding three-phase transformers as well.

---

## 1. Single Phase Transformers – Constructional Details

A single-phase transformer is a static electrical device that transfers electrical energy from one circuit to another at a different voltage level through electromagnetic induction, without changing the frequency.

### 1.1 Core Construction

The core of a transformer provides a path of low reluctance for the magnetic flux. It is typically made of laminated sheets of silicon steel to minimize eddy current losses and hysteresis losses.

#### 1.1.1 Core Types

There are two main types of transformer cores:

*   **Core Type Transformer:**
    *   **Construction:** The windings surround the core. The limbs of the core carry both the primary and secondary windings.
    *   **Advantages:** Simpler construction, easier to insulate.
    *   **Disadvantages:** Lower copper utilization, more leakage flux.
    *   **Applications:** High voltage and low power transformers.
    *   **Diagram:** (Imagine a rectangular core with two limbs. Windings are placed on these limbs.)

*   **Shell Type Transformer:**
    *   **Construction:** The core surrounds the windings. The limbs of the core are arranged so that the windings are placed in the central window of the core, and the flux passes through the outer shell.
    *   **Advantages:** Better copper utilization, lower leakage flux, better mechanical support.
    *   **Disadvantages:** More complex construction, insulation is more challenging.
    *   **Applications:** Low voltage and high power transformers.
    *   **Diagram:** (Imagine a core with a central window where windings are placed. The core material forms a shell around the windings.)

#### 1.1.2 Laminations

*   **Purpose:** To reduce eddy current losses.
*   **Material:** Thin sheets of silicon steel (typically 0.35 mm to 0.5 mm thick for power transformers).
*   **Insulation:** Each lamination is insulated from the adjacent ones by a thin layer of varnish or oxide.
*   **Arrangement:** Laminations are stacked and tightly pressed to form the core limbs.

### 1.2 Winding Construction

The windings carry the primary and secondary currents. They are usually made of copper conductors, typically in the form of insulated wires or strips.

#### 1.2.1 Primary Winding

*   Connected to the AC input supply.
*   Usually has more turns if the transformer is a step-down transformer.

#### 1.2.2 Secondary Winding

*   Connected to the load.
*   Usually has fewer turns if the transformer is a step-down transformer.
*   Usually has more turns if the transformer is a step-up transformer.

#### 1.2.3 Conductor Types

*   **Round wires:** Used for smaller transformers.
*   **Rectangular strips or conductors:** Used for larger power transformers to reduce the AC resistance due to skin effect and proximity effect.

#### 1.2.4 Winding Arrangement

*   **Concentric Windings:** Primary and secondary windings are placed on the same limb, one over the other, separated by insulation. This is the most common arrangement.
*   **Sandwich Windings:** Sections of primary and secondary windings are alternated. This arrangement minimizes leakage flux but is more complex to construct.

### 1.3 Insulation

*   **Importance:** Crucial for preventing short circuits between windings, between windings and the core, and between adjacent turns.
*   **Materials:**
    *   **Paper:** Kraft paper, pressboard.
    *   **Varnish:** Impregnating varnish.
    *   **Oil:** Transformer oil (provides insulation and cooling).
    *   **Enamel:** Wire enamel coating.

### 1.4 Transformer Tank and Bushings

*   **Tank:** Encloses the core and windings, filled with transformer oil for insulation and cooling.
*   **Conservator Tank:** A small tank mounted above the main tank to allow for the expansion and contraction of transformer oil due to temperature changes.
*   **Breather:** Connected to the conservator tank, it contains a dehydrating agent (like silica gel) to remove moisture from the incoming air, preventing oil degradation.
*   **Bushings:** Insulated terminals that allow the high-voltage and low-voltage windings to be connected to the external circuit while maintaining electrical isolation from the tank.

---

## 2. Principle of Operation

The operation of a single-phase transformer is based on **Faraday's Law of Electromagnetic Induction**.

### 2.1 Mutual Induction

1.  When an alternating voltage $V_1$ is applied to the primary winding, an alternating current $I_1$ flows through it.
2.  This alternating current produces a periodically changing magnetic flux $\Phi$ in the core.
3.  This flux is confined to the core by its low reluctance and links with both the primary and secondary windings.
4.  According to Faraday's Law, this changing flux induces an electromotive force (EMF) in both the primary and secondary windings.
5.  The EMF induced in the primary winding ($E_1$) opposes the applied voltage $V_1$ (Lenz's Law).
6.  The EMF induced in the secondary winding ($E_2$) drives current through the load connected to it.

**Key Principle:** The **same** magnetic flux links both windings, hence the term "mutual induction."

### 2.2 Flux Pattern

*   The main flux, often called **mutual flux** ($\Phi_m$), is confined to the core and links both windings.
*   A small amount of flux produced by the primary winding that does not link with the secondary winding is called **leakage flux** of the primary ($\Phi_{l1}$).
*   Similarly, a small amount of flux produced by the secondary winding that does not link with the primary winding is called **leakage flux** of the secondary ($\Phi_{l2}$).

### 2.3 Voltage Transformation Ratio (Turns Ratio)

Let:
*   $N_1$ = Number of turns in the primary winding
*   $N_2$ = Number of turns in the secondary winding
*   $E_1$ = EMF induced in the primary winding
*   $E_2$ = EMF induced in the secondary winding

The induced EMF per turn is the same for both windings (assuming perfect flux linkage). Therefore:

$$
\frac{E_1}{N_1} = \frac{E_2}{N_2} = \text{EMF per turn}
$$

This leads to the relationship:

$$
\frac{E_2}{E_1} = \frac{N_2}{N_1} = a
$$

where $a$ is the **turns ratio** or **transformation ratio**.

*   If $N_2 > N_1$ (i.e., $a > 1$), the transformer is a **step-up transformer**.
*   If $N_2 < N_1$ (i.e., $a < 1$), the transformer is a **step-down transformer**.

**Note:** In an ideal transformer, $V_1 \approx E_1$ and $V_2 \approx E_2$. Therefore, the voltage transformation ratio is approximately:

$$
\frac{V_2}{V_1} \approx \frac{N_2}{N_1} = a
$$

---

## 3. EMF Equation

Let:
*   $V_1$ = RMS value of the applied primary voltage
*   $f$ = Frequency of the supply in Hz
*   $N_1$ = Number of turns in the primary winding
*   $\Phi_m$ = Maximum value of the flux in the core (in Webers, Wb)
*   $\phi(t)$ = Instantaneous flux in the core (in Webers, Wb)

Assume the flux varies sinusoidally:
$$
\phi(t) = \Phi_m \sin(\omega t)
$$
where $\omega = 2\pi f$.

The instantaneous EMF induced in the primary winding ($e_1$) is given by Faraday's Law:
$$
e_1(t) = -N_1 \frac{d\phi}{dt}
$$

Substituting the expression for $\phi(t)$:
$$
e_1(t) = -N_1 \frac{d}{dt}(\Phi_m \sin(\omega t))
$$
$$
e_1(t) = -N_1 \Phi_m (\omega \cos(\omega t))
$$
$$
e_1(t) = -N_1 \Phi_m \omega \cos(\omega t)
$$

We can rewrite $\cos(\omega t)$ as $\sin(\omega t + \frac{\pi}{2})$ or $-\sin(\omega t - \frac{\pi}{2})$. Let's use the latter:
$$
e_1(t) = -N_1 \Phi_m \omega [-\sin(\omega t - \frac{\pi}{2})]
$$
$$
e_1(t) = N_1 \Phi_m \omega \sin(\omega t - \frac{\pi}{2})
$$

The RMS value of the EMF induced in the primary winding ($E_1$) is the RMS value of this sinusoidal waveform. The RMS value of a sinusoid is $\frac{\text{Peak Value}}{\sqrt{2}}$.
$$
E_1 = \frac{N_1 \Phi_m \omega}{\sqrt{2}}
$$

Since $\omega = 2\pi f$:
$$
E_1 = \frac{N_1 \Phi_m (2\pi f)}{\sqrt{2}}
$$
$$
E_1 = N_1 \Phi_m f \frac{2\pi}{\sqrt{2}}
$$
$$
E_1 = N_1 \Phi_m f \sqrt{2} \pi
$$

Calculating the numerical value: $\sqrt{2} \pi \approx 1.414 \times 3.14159 \approx 4.44$.

Therefore, the RMS value of the primary induced EMF is:
$$
E_1 = 4.44 f N_1 \Phi_m \quad \text{Volts}
$$

Similarly, for the secondary winding:
$$
E_2 = 4.44 f N_2 \Phi_m \quad \text{Volts}
$$

**Important Points:**

*   The EMF equation relates the applied voltage, frequency, number of turns, and maximum flux.
*   The EMF induced in both windings is proportional to the number of turns in that winding and the frequency and flux.
*   The ratio of secondary to primary induced EMF is equal to the ratio of their turns:
    $$
    \frac{E_2}{E_1} = \frac{N_2}{N_1} = a
    $$

**Example 1:** A single-phase transformer has 100 turns on the primary and 400 turns on the secondary. The primary is connected to a 50 Hz supply with 240 V. Calculate the secondary voltage.

**Solution:**
Given:
$N_1 = 100$ turns
$N_2 = 400$ turns
$V_1 = 240$ V
$f = 50$ Hz

Assume $V_1 \approx E_1$.
Transformation ratio $a = \frac{N_2}{N_1} = \frac{400}{100} = 4$.

For an ideal transformer, $\frac{V_2}{V_1} = \frac{N_2}{N_1}$.
$V_2 = V_1 \times \frac{N_2}{N_1} = 240 \times 4 = 960$ V.

Alternatively, we can calculate the EMF per turn. We need the maximum flux first, which requires a given flux value or current. Since flux is not given, we rely on the turns ratio for voltage transformation.

**Example 2:** A 10 kVA, 2400/240 V, 50 Hz transformer has 1200 turns on the primary winding. Calculate:
a) The number of turns on the secondary winding.
b) The maximum flux in the core.
c) The EMF induced in the primary.

**Solution:**
Given:
Apparent Power $S = 10$ kVA $= 10 \times 10^3$ VA
Primary Voltage $V_1 = 2400$ V
Secondary Voltage $V_2 = 240$ V
Frequency $f = 50$ Hz
Primary Turns $N_1 = 1200$

a) **Number of turns on the secondary winding ($N_2$):**
Transformation ratio $a = \frac{V_1}{V_2} = \frac{2400}{240} = 10$.
Also, $a = \frac{N_1}{N_2}$ (using voltage ratio $V_1/V_2$ where $V_1$ is the higher voltage).
$10 = \frac{1200}{N_2}$
$N_2 = \frac{1200}{10} = 120$ turns.

b) **Maximum flux in the core ($\Phi_m$):**
We use the EMF equation for the primary winding, assuming $E_1 \approx V_1$.
$E_1 = 4.44 f N_1 \Phi_m$
$2400 = 4.44 \times 50 \times 1200 \times \Phi_m$
$2400 = 266400 \times \Phi_m$
$\Phi_m = \frac{2400}{266400} \approx 0.009009$ Wb or $9.009$ mWb.

c) **EMF induced in the primary ($E_1$):**
As assumed in part (b), $E_1 \approx V_1 = 2400$ V.
If we were asked for $E_2$:
$E_2 = 4.44 f N_2 \Phi_m = 4.44 \times 50 \times 120 \times 0.009009 \approx 240$ V.

---

## 4. Ideal Transformer

An ideal transformer is a hypothetical transformer that has no losses and no imperfections.

### 4.1 Characteristics of an Ideal Transformer

*   **Zero Winding Resistance:** The resistance of the primary and secondary windings is zero ($R_1 = R_2 = 0$).
*   **Infinite Core Permeability:** The core has infinite permeability ($\mu \to \infty$), meaning it requires no magnetizing current to establish the flux. The reluctance of the core is zero ($R = 0$).
*   **No Core Losses:** No hysteresis loss and no eddy current loss in the core.
*   **No Leakage Flux:** All the flux produced by the primary winding links with the secondary winding and vice-versa.
*   **No Magnetizing Current:** The magnetizing current required to establish the flux is zero ($I_{m0} = 0$). This implies that the primary current $I_1$ is solely determined by the load current $I_2$ and the turns ratio.

### 4.2 Phasor Diagram of an Ideal Transformer

In an ideal transformer, the applied voltage $V_1$ is equal and opposite to the induced EMF $E_1$ ($V_1 = -E_1$).

*   **No Load:**
    *   The primary current $I_1$ is equal to the magnetizing current $I_{m0}$, which lags the applied voltage $V_1$ by 90 degrees.
    *   There is no secondary current ($I_2 = 0$).
    *   $E_1$ leads $V_1$ by 180 degrees (or lags $V_1$ by 0 degrees if $V_1$ is shown opposing $E_1$).
    *   $E_2$ is in phase with $E_1$.
    *   $V_2$ is in phase with $E_2$.

*   **On Load:**
    *   Let $I_2$ be the secondary current, lagging the secondary voltage $V_2$ by an angle $\phi_2$ (for a lagging power factor load).
    *   The primary current $I_1$ has two components:
        *   Magnetizing component $I_{m0}$ (which is zero in an ideal transformer).
        *   Load component $I'_{1}$ which is equal and opposite to the referred secondary current ($I'_{1} = -I_2 \frac{N_2}{N_1}$). This component is in phase with $I_2$ but in the opposite direction of $V_2$.
    *   In an ideal transformer, $I_1 = I'_{1}$ and $I_{m0} = 0$.
    *   $I_1$ lags $V_1$ by $\phi_1$, where $\phi_1 = \phi_2$.

#### Phasor Diagram Conventions:

*   Assume a lagging power factor load.
*   Draw the flux vector $\Phi$ as the reference.
*   $E_1$ lags $\Phi$ by 90 degrees. $E_2$ is in phase with $E_1$.
*   $V_1$ is equal and opposite to $E_1$.
*   $V_2$ is in phase with $E_2$.
*   $I_2$ lags $V_2$ by $\phi_2$.
*   The load component of primary current $I'_1$ is equal to $I_2 (N_2/N_1)$ and is in phase with $E_2$ (or opposite to $I_2$).
*   In an ideal transformer, $I_1 = I'_1$.
*   $V_1$ leads $I_1$ by 90 degrees.
*   The angle between $V_1$ and $I_1$ is $\phi_1$, which is equal to $\phi_2$.

**Key Relationship for Ideal Transformer:**
*   $\frac{V_1}{V_2} = \frac{N_1}{N_2} = a$
*   $\frac{I_2}{I_1} = \frac{N_1}{N_2} = a$
*   $V_1 I_1 = V_2 I_2$ (assuming power factor is the same for primary and secondary)
*   Volt-ampere rating of primary = Volt-ampere rating of secondary.

---

## 5. Practical Transformer

A practical transformer deviates from the ideal transformer due to various losses and imperfections.

### 5.1 Characteristics of a Practical Transformer

*   **Finite Winding Resistance:** The primary and secondary windings have resistance ($R_1$ and $R_2$). This causes $I^2R$ losses (copper losses) and a voltage drop within the windings.
*   **Finite Core Permeability:** The core has finite permeability, requiring a magnetizing current ($I_m$) to establish the flux. This current lags the applied voltage by a small angle (typically < 90 degrees).
*   **Core Losses:**
    *   **Hysteresis Loss ($P_h$):** Due to the repeated magnetization and demagnetization of the core material. It depends on the volume of the core, the frequency, and the maximum flux density.
    *   **Eddy Current Loss ($P_e$):** Due to circulating currents induced in the core by the changing flux. It depends on the frequency, the flux density, the thickness of laminations, and the resistivity of the core material.
    *   Total core loss ($P_{core}$) is often approximated as $P_{core} = P_h + P_e$.
*   **Leakage Flux:** A portion of the flux produced by each winding does not link with the other winding. This is accounted for by introducing leakage inductances.
*   **Non-sinusoidal Flux Waveform:** In reality, the flux waveform might not be perfectly sinusoidal, especially at light loads.
*   **Dielectric Losses:** Losses occurring in the insulating materials.

### 5.2 Equivalent Circuit of a Practical Transformer

The practical transformer can be represented by an equivalent circuit that includes the parameters associated with its imperfections.

#### 5.2.1 Exact Equivalent Circuit

This circuit accurately represents all parameters.

*   **Primary Side:**
    *   $R_1$: Resistance of the primary winding.
    *   $X_{l1}$: Leakage reactance of the primary winding ($X_{l1} = 2\pi f L_{l1}$).
    *   $R_c$: Resistance representing core losses ($P_{core} = \frac{V_{c1}^2}{R_c}$, where $V_{c1}$ is the voltage across the core, usually taken as $E_1$).
    *   $X_m$: Magnetizing reactance, representing the inductance of the primary winding needed for magnetization ($X_m = 2\pi f L_m$).
    *   The parallel combination of $R_c$ and $X_m$ represents the excitation branch.
    *   $E_1$: Induced EMF in the primary winding.
    *   $V_1$: Applied primary voltage.
    *   $I_1$: Primary current.
    *   $I_0$: No-load current, consisting of $I_m$ and $I_w$ (core loss component). $I_w = \frac{P_{core}}{V_1}$ is in phase with $V_1$. $I_m$ lags $V_1$ by 90 degrees.

*   **Secondary Side:**
    *   $R_2$: Resistance of the secondary winding.
    *   $X_{l2}$: Leakage reactance of the secondary winding ($X_{l2} = 2\pi f L_{l2}$).
    *   $I_2$: Secondary current.
    *   $V_2$: Terminal voltage of the secondary.
    *   $Z_L$: Impedance of the load connected to the secondary.

**Circuit Diagram:**
(Imagine a series impedance $R_1 + jX_{l1}$, followed by a parallel branch of $R_c$ and $X_m$, and then another series impedance $R_2 + jX_{l2}$ connected to the load $Z_L$.)

The induced EMF $E_1$ is in the primary side before the parallel branch, and $E_2$ is in the secondary side after the parallel branch, linked by the turns ratio.

#### 5.2.2 Approximate Equivalent Circuit

For practical analysis, especially for calculating voltage regulation and efficiency, the excitation branch ($R_c$ and $X_m$) is often neglected because the no-load current ($I_0$) is usually small (2-5% of full-load current).

*   **Approximate Equivalent Circuit Referred to Primary:**
    *   Series impedance: $(R_1 + R'_2) + j(X_{l1} + X'_{l2})$
    *   $R'_2 = a^2 R_2$
    *   $X'_{l2} = a^2 X_{l2}$
    *   The excitation branch is omitted.
    *   $V_1$ is applied to $(R_1 + R'_2) + j(X_{l1} + X'_{l2})$ and then to the referred load impedance $Z'_L = a^2 Z_L$.

*   **Approximate Equivalent Circuit Referred to Secondary:**
    *   Series impedance: $(R_1'' + R_2) + j(X_{l1}'' + X_{l2})$
    *   $R_1'' = R_1 / a^2$
    *   $X_{l1}'' = X_{l1} / a^2$
    *   The excitation branch is omitted.
    *   $V'_1 = V_1 / a$ is applied to $(R_1'' + R_2) + j(X_{l1}'' + X_{l2})$ and then to the load impedance $Z_L$.

**Choosing the Approximate Circuit:** It's usually convenient to refer all parameters to one side (e.g., primary) to simplify calculations.

### 5.3 Phasor Diagram of a Practical Transformer (Approximate)

Using the approximate equivalent circuit referred to the primary (excitation branch neglected).

*   **Reference:** $I_1$ (can be taken as reference for simplicity in some cases, or $V_1$). Let's take $I_2$ as a reference for load analysis.
*   Draw $I_2$ (lagging $V_2$ by $\phi_2$).
*   Draw $V_2$ (leading $I_2$ by $\phi_2$).
*   Draw $I'_1 = I_2 \times (N_2/N_1)$ in phase with $I_2$.
*   Draw the voltage drop across $R_2'$ and $X_{l2}'$: $I_2(R_2' + jX_{l2}')$. This drop leads $I_2$ by 90 degrees.
*   $E_1$ is the phasor sum of $V_2$ and $I_2(R_2' + jX_{l2}')$.
*   $V_1$ is the phasor sum of $E_1$ and the voltage drop across $R_1 + jX_{l1}$: $V_1 = E_1 + I_1(R_1 + jX_{l1})$.
*   The angle between $V_1$ and $I_1$ is $\phi_1$.

**Important Note on Phasor Diagrams:** The precise angle of the flux and EMFs depends on the magnitude and phase of the excitation current component. However, for approximate analysis where the excitation branch is ignored, the load component of the primary current is considered to be the total primary current.

### 5.4 Losses in a Transformer

1.  **Copper Losses ($P_{cu}$):** Occur in the windings due to their resistance.
    $P_{cu} = I_1^2 R_1 + I_2^2 R_2$ (in actual values)
    If referred to the primary: $P_{cu} = I_1^2 (R_1 + R'_2)$
    If referred to the secondary: $P_{cu} = I_2^2 (R_1'' + R_2)$
    Copper losses vary with the square of the load.

2.  **Iron Losses or Core Losses ($P_{core}$):** Occur in the core due to hysteresis and eddy currents.
    $P_{core} = P_h + P_e$
    These losses are approximately constant regardless of the load, provided the applied voltage and frequency are constant. They are significant at no load.

3.  **Total Losses ($P_{loss}$):**
    $P_{loss} = P_{cu} + P_{core}$

---

## 6. Numerical Problems

Let's work through some examples to solidify your understanding.

**Example 3:** A 10 kVA, 400/200 V, 50 Hz single-phase transformer has the following parameters:
Primary resistance ($R_1$) = 0.2 $\Omega$
Secondary resistance ($R_2$) = 0.05 $\Omega$
Primary leakage reactance ($X_{l1}$) = 0.5 $\Omega$
Secondary leakage reactance ($X_{l2}$) = 0.15 $\Omega$
Core loss ($P_{core}$) = 100 W

Calculate:
a) The equivalent impedance of the transformer referred to the primary side.
b) The equivalent impedance of the transformer referred to the secondary side.
c) The voltage regulation at full load, unity power factor.
d) The voltage regulation at full load, 0.8 lagging power factor.
e) The efficiency at full load, 0.8 lagging power factor.
f) The efficiency at half load, 0.8 lagging power factor.

**Solution:**

Given:
$S_{rated} = 10$ kVA $= 10000$ VA
$V_1 = 400$ V, $V_2 = 200$ V
$f = 50$ Hz
$R_1 = 0.2 \Omega$, $R_2 = 0.05 \Omega$
$X_{l1} = 0.5 \Omega$, $X_{l2} = 0.15 \Omega$
$P_{core} = 100$ W

Turns ratio $a = \frac{V_1}{V_2} = \frac{400}{200} = 2$.

a) **Equivalent impedance referred to primary ($Z_{eq1}$):**
$R'_{eq1} = R_1 + a^2 R_2 = 0.2 + (2)^2 \times 0.05 = 0.2 + 4 \times 0.05 = 0.2 + 0.2 = 0.4 \Omega$
$X'_{eq1} = X_{l1} + a^2 X_{l2} = 0.5 + (2)^2 \times 0.15 = 0.5 + 4 \times 0.15 = 0.5 + 0.6 = 1.1 \Omega$
$Z_{eq1} = R'_{eq1} + jX'_{eq1} = 0.4 + j1.1 \Omega$
Magnitude $|Z_{eq1}| = \sqrt{(0.4)^2 + (1.1)^2} = \sqrt{0.16 + 1.21} = \sqrt{1.37} \approx 1.170 \Omega$

b) **Equivalent impedance referred to secondary ($Z_{eq2}$):**
$R'_{eq2} = \frac{R_1}{a^2} + R_2 = \frac{0.2}{2^2} + 0.05 = \frac{0.2}{4} + 0.05 = 0.05 + 0.05 = 0.1 \Omega$
$X'_{eq2} = \frac{X_{l1}}{a^2} + X_{l2} = \frac{0.5}{2^2} + 0.15 = \frac{0.5}{4} + 0.15 = 0.125 + 0.15 = 0.275 \Omega$
$Z_{eq2} = R'_{eq2} + jX'_{eq2} = 0.1 + j0.275 \Omega$
Magnitude $|Z_{eq2}| = \sqrt{(0.1)^2 + (0.275)^2} = \sqrt{0.01 + 0.075625} = \sqrt{0.085625} \approx 0.2926 \Omega$

c) **Voltage Regulation at full load, unity power factor (PF = 1):**
Full load primary current $I_{l1} = \frac{S_{rated}}{V_1} = \frac{10000}{400} = 25$ A.
Load impedance referred to primary $Z'_L = \frac{V_1}{I_{l1}} = \frac{400}{25} = 16 \Omega$.
Since PF = 1, the load impedance is purely resistive, $Z'_L = 16 + j0 \Omega$.
The voltage drop due to the equivalent impedance is $I_{l1} Z_{eq1}$ (approximately, ignoring the phase difference between $I_{l1}$ and $Z_{eq1}$ for simplicity in the approximate voltage drop calculation: $\Delta V \approx I \times R_{eq}$).
$\Delta V \approx I_{l1} R'_{eq1} = 25 \times 0.4 = 10$ V.
(More accurate calculation using phasors: $I_{l1}$ is at 0 deg. $Z_{eq1} = 0.4 + j1.1$. $I_{l1} Z_{eq1} = 25(0.4 + j1.1) = 10 + j27.5$. This drop is added to the referred secondary voltage to get the primary voltage. The referred secondary voltage for a lagging load would have some angle. For simplicity in voltage regulation, we often use the simplified $I \times R_{eq}$ drop.)

For voltage regulation, we need to find the voltage at the secondary terminals ($V_2$) when supplying full load.
Referred to primary: $V'_2 = V_1 - I_{l1} Z_{eq1} = 400 - 25(0.4 + j1.1) = 400 - (10 + j27.5) = 390 - j27.5$.
The magnitude of the referred secondary voltage is $|V'_2| = \sqrt{390^2 + (-27.5)^2} \approx 390.98$ V.
Voltage Regulation (VR) = $\frac{|V'_2|_{\text{no load}} - |V'_2|_{\text{full load}}}{|V'_2|_{\text{full load}}} \times 100\%$
$|V'_2|_{\text{no load}} = V_1 = 400$ V.
$VR = \frac{400 - 390.98}{390.98} \times 100\% \approx \frac{9.02}{390.98} \times 100\% \approx 2.31\%$

Alternatively, using the approximate formula:
$\Delta V \approx I_{l1} R'_{eq1} \cos(\phi_2) + I_{l1} X'_{l1} \sin(\phi_2)$
For PF=1, $\phi_2 = 0$. $\cos(0) = 1$, $\sin(0) = 0$.
$\Delta V \approx 25 \times 0.4 \times 1 + 25 \times 1.1 \times 0 = 10$ V.
$VR = \frac{10}{400} \times 100\% = 2.5\%$. (This is a simplified approximation, the previous method is more accurate.)

c) **Voltage Regulation at full load, 0.8 lagging power factor:**
$I_{l1} = 25$ A.
$\cos(\phi_2) = 0.8$, so $\sin(\phi_2) = \sqrt{1 - 0.8^2} = \sqrt{1 - 0.64} = \sqrt{0.36} = 0.6$.
Using the approximate formula for voltage drop:
$\Delta V \approx I_{l1} R'_{eq1} \cos(\phi_2) + I_{l1} X'_{l1} \sin(\phi_2)$
$\Delta V \approx 25 \times 0.4 \times 0.8 + 25 \times 1.1 \times 0.6$
$\Delta V \approx 10 \times 0.8 + 27.5 \times 0.6$
$\Delta V \approx 8 + 16.5 = 24.5$ V.
$VR = \frac{\Delta V}{V_1} \times 100\% = \frac{24.5}{400} \times 100\% = 6.125\%$

d) **Efficiency at full load, 0.8 lagging power factor:**
Full load apparent power $S = 10000$ VA.
Real power output $P_{out} = S \times \cos(\phi_2) = 10000 \times 0.8 = 8000$ W.
Copper losses at full load $P_{cu\_fl} = I_{l1}^2 R'_{eq1} = (25)^2 \times 0.4 = 625 \times 0.4 = 250$ W.
Iron losses are constant: $P_{core} = 100$ W.
Total losses at full load $P_{loss\_fl} = P_{cu\_fl} + P_{core} = 250 + 100 = 350$ W.
Input power $P_{in} = P_{out} + P_{loss\_fl} = 8000 + 350 = 8350$ W.
Efficiency $\eta = \frac{P_{out}}{P_{in}} \times 100\% = \frac{8000}{8350} \times 100\% \approx 95.81\%$

e) **Efficiency at half load, 0.8 lagging power factor:**
Half load apparent power $S_{half} = 10 \, kVA / 2 = 5000$ VA.
Half load primary current $I_{half\_load} = \frac{S_{half}}{V_1} = \frac{5000}{400} = 12.5$ A.
Real power output $P_{out\_half} = S_{half} \times \cos(\phi_2) = 5000 \times 0.8 = 4000$ W.
Copper losses at half load $P_{cu\_half} = I_{half\_load}^2 R'_{eq1} = (12.5)^2 \times 0.4 = 156.25 \times 0.4 = 62.5$ W.
Iron losses are constant: $P_{core} = 100$ W.
Total losses at half load $P_{loss\_half} = P_{cu\_half} + P_{core} = 62.5 + 100 = 162.5$ W.
Input power $P_{in\_half} = P_{out\_half} + P_{loss\_half} = 4000 + 162.5 = 4162.5$ W.
Efficiency $\eta_{half} = \frac{P_{out\_half}}{P_{in\_half}} \times 100\% = \frac{4000}{4162.5} \times 100\% \approx 96.10\%$

---

## 7. Practice Questions

1.  What is the primary function of laminations in a transformer core?
    a) To increase magnetic flux density
    b) To reduce eddy current losses
    c) To increase insulation strength
    d) To improve mechanical strength

2.  The voltage transformation ratio 'a' of a single-phase transformer is defined as:
    a) $N_1/N_2$
    b) $V_2/V_1$
    c) $E_2/E_1$
    d) All of the above

3.  In an ideal transformer, if the secondary is open-circuited, what is the primary current?
    a) Full load current
    b) Zero current
    c) Magnetizing current
    d) Load component of primary current

4.  The EMF equation of a transformer is $E = 4.44 f N \Phi_m$. If the frequency is halved, and the number of turns is kept constant, what happens to the induced EMF?
    a) It doubles
    b) It remains the same
    c) It is halved
    d) It quadruples

5.  A 20 kVA, 2200/220 V, 50 Hz transformer has 500 turns on the primary. Calculate the maximum flux in the core.
    a) 14.7 mWb
    b) 29.4 mWb
    c) 1.47 mWb
    d) 2.94 mWb

6.  A 100 kVA, 6.6 kV/400 V, 50 Hz, delta-star single-phase transformer has equivalent impedance referred to the primary as $Z_{eq1} = (4 + j12) \Omega$. Calculate the voltage regulation at full load, 0.8 lagging power factor.

7.  Explain the difference between core type and shell type transformers, including their construction and typical applications.

8.  Derive the EMF equation for a single-phase transformer.

9.  A 400 kVA, 11 kV/400 V, 50 Hz transformer has the following losses:
    Full load copper loss = 4 kW
    Full load iron loss = 2.5 kW
    Calculate the efficiency at full load, 0.8 lagging power factor.
    Calculate the efficiency at half load, 0.8 lagging power factor.
    At what load (in kVA) will the efficiency be maximum, assuming the power factor is 0.8 lagging?

---

## 8. Answers to Practice Questions

1.  **b) To reduce eddy current losses**
2.  **d) All of the above** (Note: $a$ is generally defined as $N_2/N_1$ or $V_2/V_1$ for step-up, and $N_1/N_2$ or $V_1/V_2$ for step-down. However, when used as a ratio $E_2/E_1$, it's $N_2/N_1$. The question implies the ratio of voltages and turns.)
3.  **c) Magnetizing current** (In an ideal transformer, this is the only current when no load is connected).
4.  **a) It doubles** ($E \propto f$, so if $f$ is halved, $E$ is halved. The question states frequency is halved, so EMF should be halved. Let's re-check. Oh, the question says "frequency is halved" then "doubles" as an option. The EMF is proportional to frequency. If frequency is halved, EMF is halved. There might be a typo in the question options or my interpretation. Let's assume the question meant "frequency is doubled" to get "doubles". If frequency is halved, EMF is halved. Let's assume the intended question was "If frequency is doubled". Then it would be (a). If the question is stated as written, the answer is (c). For a practical transformer, if frequency is halved, the flux density would increase, but the EMF calculation $4.44fN\Phi_m$ still holds. Assuming $\Phi_m$ is constant, the EMF halves.)
    *Correction*: Re-reading carefully. "If the frequency is halved... what happens to the induced EMF?". EMF is directly proportional to frequency ($E = 4.44 f N \Phi_m$). If frequency is halved, EMF is halved. Therefore, the answer should be **c) It is halved**.
5.  **b) 29.4 mWb**
    $a = 2200/220 = 10$.
    $V_1 \approx E_1 = 2200$ V.
    $E_1 = 4.44 f N_1 \Phi_m$
    $2200 = 4.44 \times 50 \times 500 \times \Phi_m$
    $2200 = 111000 \times \Phi_m$
    $\Phi_m = 2200 / 111000 \approx 0.0198$ Wb = 19.8 mWb.
    *Correction*: $a = 2200/220 = 10$. $N_1 = 500$.
    $E_1 = 4.44 \times 50 \times 500 \times \Phi_m = 111000 \Phi_m$.
    $2200 = 111000 \Phi_m$.
    $\Phi_m = 2200/111000 \approx 0.0198$ Wb = 19.8 mWb.
    Let's re-check the calculation.
    Ah, the question is likely asking for $N_1$ on primary to be used for $E_1$.
    $E_1 = 4.44 \times 50 \times 500 \times \Phi_m = 111000 \Phi_m$.
    $2200 = 111000 \Phi_m$.
    $\Phi_m = 2200/111000 \approx 0.0198$ Wb.
    Let's assume the question had different numbers or there's a misunderstanding.
    Let's use the apparent power. $V_1 \times I_1 = 20000$ VA. $I_1 = 20000/2200 \approx 9.09$ A.
    Let's assume the typical formula for maximum flux for a kVA rating is sometimes used: $\Phi_m \approx \frac{V_1}{4.44 f N_1}$.
    Let's re-evaluate the options if the flux were different.
    If $\Phi_m = 14.7$ mWb: $E_1 = 4.44 \times 50 \times 500 \times 0.0147 \approx 1632$ V. This is not 2200 V.
    If $\Phi_m = 29.4$ mWb: $E_1 = 4.44 \times 50 \times 500 \times 0.0294 \approx 3265$ V. This is not 2200 V.
    If $\Phi_m = 1.47$ mWb: $E_1 = 4.44 \times 50 \times 500 \times 0.00147 \approx 163.2$ V.
    If $\Phi_m = 2.94$ mWb: $E_1 = 4.44 \times 50 \times 500 \times 0.00294 \approx 326.5$ V.

    There seems to be a mismatch between the given parameters and the options for question 5.
    Let's recalculate the flux for $E_1 = 2200$ V, $f=50$ Hz, $N_1=500$.
    $2200 = 4.44 \times 50 \times 500 \times \Phi_m \Rightarrow \Phi_m \approx 0.0198$ Wb = 19.8 mWb.
    None of the options match this. Let's assume the primary voltage was intended to be different.
    If $\Phi_m = 14.7$ mWb, then $E_1 = 1632$ V.
    If $\Phi_m = 29.4$ mWb, then $E_1 = 3265$ V.
    Let's assume option **a) 14.7 mWb** is correct and work backwards to see what $V_1$ would be needed.
    If $\Phi_m = 14.7$ mWb, then $E_1 = 4.44 \times 50 \times 500 \times 0.0147 \approx 1632$ V.
    This implies the primary voltage might have been intended to be around 1.6 kV or the number of turns on primary was different.

    Let's assume the given $V_1$ is the terminal voltage, and induced EMF $E_1$ might be slightly different, but for calculation of flux, $E_1 \approx V_1$.

    Let's recalculate using the formula: $\Phi_m = \frac{2200}{4.44 \times 50 \times 500} = \frac{2200}{111000} = 0.0198$ Wb $= 19.8$ mWb.

    There is a discrepancy with the provided options. Assuming a typo in the question or options. However, if forced to choose and assuming the most common calculation method for flux from voltage and turns: $19.8$ mWb is the result. None of the options are close.

    **Let's assume a different calculation:** Sometimes a rough approximation might be used, but it's not standard.
    Let's recheck common transformer questions for similar values.

    Given the provided options, and the calculated value of 19.8 mWb, there's an issue. Let's consider the possibility of the question asking about secondary side parameters.
    $N_2 = N_1/a = 500/10 = 50$ turns.
    $E_2 = 4.44 \times 50 \times 50 \times \Phi_m = 11100 \Phi_m$.
    $V_2 \approx E_2 = 220$ V.
    $220 = 11100 \Phi_m \Rightarrow \Phi_m = 220/11100 \approx 0.0198$ Wb = 19.8 mWb. The flux is consistent.

    Let's reconsider the options and re-examine the question for any alternative interpretation.
    If option (a) 14.7 mWb is correct, then $V_1 = 4.44 \times 50 \times 500 \times 0.0147 \approx 1632$ V.
    If option (b) 29.4 mWb is correct, then $V_1 = 4.44 \times 50 \times 500 \times 0.0294 \approx 3265$ V.

    **Conclusion for Q5:** There's a strong indication of an error in the question or options. The calculated flux is 19.8 mWb.

6.  **Voltage Regulation:**
    $S_{rated} = 100$ kVA $= 100000$ VA.
    $V_1 = 6.6$ kV $= 6600$ V.
    $V_2 = 400$ V.
    $Z_{eq1} = (4 + j12) \Omega$.
    Full load primary current $I_{l1} = \frac{100000}{6600} \approx 15.15$ A.
    $\cos(\phi_2) = 0.8$ (lagging), so $\sin(\phi_2) = 0.6$.
    Approximate voltage drop $\Delta V \approx I_{l1} R_{eq1} \cos(\phi_2) + I_{l1} X_{eq1} \sin(\phi_2)$
    $\Delta V \approx 15.15 \times 4 \times 0.8 + 15.15 \times 12 \times 0.6$
    $\Delta V \approx 48.48 + 108.04 = 156.52$ V.
    Voltage Regulation $VR = \frac{\Delta V}{V_1} \times 100\% = \frac{156.52}{6600} \times 100\% \approx 2.37\%$

7.  **Differences between Core Type and Shell Type Transformers:**
    *   **Core Type:**
        *   **Construction:** Windings surround the core limbs. Core is rectangular, with two or more limbs.
        *   **Flux Path:** Primarily through the core.
        *   **Leakage Flux:** Higher due to the winding configuration.
        *   **Insulation:** Easier to insulate the windings.
        *   **Applications:** High voltage, low power transformers.
    *   **Shell Type:**
        *   **Construction:** Core surrounds the windings. Central window for windings.
        *   **Flux Path:** Flux passes through the central limb and then the outer shell. Offers a complete metallic path for flux.
        *   **Leakage Flux:** Lower due to better flux confinement.
        *   **Insulation:** More complex due to interleaved windings.
        *   **Applications:** Low voltage, high power transformers.

8.  **EMF Equation Derivation:** (See Section 3 in the notes)
    Start with Faraday's Law of Induction and assume sinusoidal flux variation.

9.  **Efficiency Calculations:**
    Given:
    $S_{rated} = 400$ kVA.
    $P_{core}$ (Iron loss) = 2.5 kW (constant).
    $P_{cu\_fl}$ (Full load copper loss) = 4 kW.
    Power factor = 0.8 lagging.

    *   **Efficiency at full load, 0.8 PF:**
        $P_{out\_fl} = S_{rated} \times \cos(\phi) = 400 \text{ kVA} \times 0.8 = 320 \text{ kW}$.
        $P_{cu\_fl} = 4$ kW.
        $P_{loss\_fl} = P_{cu\_fl} + P_{core} = 4 \text{ kW} + 2.5 \text{ kW} = 6.5 \text{ kW}$.
        $P_{in\_fl} = P_{out\_fl} + P_{loss\_fl} = 320 \text{ kW} + 6.5 \text{ kW} = 326.5 \text{ kW}$.
        $\eta_{fl} = \frac{P_{out\_fl}}{P_{in\_fl}} \times 100\% = \frac{320}{326.5} \times 100\% \approx 98.01\%$

    *   **Efficiency at half load, 0.8 PF:**
        Load is half, so apparent power $S_{half} = 400 \text{ kVA} / 2 = 200 \text{ kVA}$.
        $P_{out\_half} = S_{half} \times \cos(\phi) = 200 \text{ kVA} \times 0.8 = 160 \text{ kW}$.
        Copper loss at half load is proportional to the square of the load:
        $P_{cu\_half} = P_{cu\_fl} \times (\frac{\text{Half Load}}{\text{Full Load}})^2 = 4 \text{ kW} \times (0.5)^2 = 4 \text{ kW} \times 0.25 = 1 \text{ kW}$.
        $P_{loss\_half} = P_{cu\_half} + P_{core} = 1 \text{ kW} + 2.5 \text{ kW} = 3.5 \text{ kW}$.
        $P_{in\_half} = P_{out\_half} + P_{loss\_half} = 160 \text{ kW} + 3.5 \text{ kW} = 163.5 \text{ kW}$.
        $\eta_{half} = \frac{P_{out\_half}}{P_{in\_half}} \times 100\% = \frac{160}{163.5} \times 100\% \approx 97.86\%$

    *   **Load for maximum efficiency:**
        Maximum efficiency occurs when copper losses equal iron losses.
        $P_{cu} = P_{core}$.
        Let the load be $x$ times the full load capacity.
        Copper loss at load $x$ is $P_{cu\_x} = x^2 P_{cu\_fl} = x^2 \times 4$ kW.
        Iron loss is constant $P_{core} = 2.5$ kW.
        Set $P_{cu\_x} = P_{core}$:
        $4x^2 = 2.5$
        $x^2 = \frac{2.5}{4} = 0.625$
        $x = \sqrt{0.625} \approx 0.7906$.
        The load for maximum efficiency is approximately 0.7906 times the full load.
        Maximum efficiency load in kVA = $x \times S_{rated} = 0.7906 \times 400 \text{ kVA} \approx 316.24 \text{ kVA}$.

---

## Important Points to Remember

*   Transformers operate on the principle of **mutual induction**.
*   The EMF equation $E = 4.44 f N \Phi_m$ is fundamental.
*   The turns ratio ($a = N_2/N_1 = E_2/E_1 \approx V_2/V_1$) determines voltage and current transformation.
*   **Laminations** are crucial for reducing eddy current losses.
*   **Silicon steel** is used for transformer cores due to its high permeability and low hysteresis loss.
*   **Transformer oil** serves as both an insulator and a coolant.
*   An **ideal transformer** has no losses and infinite core permeability.
*   A **practical transformer** has winding resistances, leakage reactances, and core losses (hysteresis and eddy currents).
*   The **equivalent circuit** helps analyze the behavior of practical transformers.
*   **Voltage regulation** indicates how the secondary terminal voltage changes with load.
*   **Efficiency** is calculated as (output power / input power) or (output power / (output power + losses)).
*   Maximum efficiency occurs when **copper losses equal iron losses**.

---

This module provides a strong foundation for understanding how single-phase transformers work and how to analyze their performance. The concepts learned here are transferable to more complex electrical machines.
