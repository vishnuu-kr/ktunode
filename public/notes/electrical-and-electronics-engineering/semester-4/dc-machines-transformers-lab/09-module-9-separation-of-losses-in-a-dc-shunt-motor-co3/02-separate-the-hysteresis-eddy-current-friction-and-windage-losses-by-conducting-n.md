---
title: "Separate the hysteresis, eddy current, friction and windage losses by conducting no-load tests at different excitations."
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 9: Separation of losses in a DC shunt motor (CO3)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360c7"
status: "completed"
scrapedAt: "2026-05-23T16:15:28.474Z"
---
# DC Machines & Transformers Lab: Module 9 - Separation of Losses in a DC Shunt Motor

## 1. Introduction

This module focuses on understanding and experimentally determining the various losses incurred in a DC shunt motor. Specifically, we will learn how to separate the core losses (hysteresis and eddy current losses) from the mechanical losses (friction and windage losses) by conducting no-load tests at different excitations. This aligns with **CO3: Investigate the losses and efficiency in DC machines by conducting no-load tests (Knowledge Level: K3)**.

## 2. Key Concepts and Definitions

### 2.1 DC Shunt Motor

A DC shunt motor is a type of DC motor where the field winding is connected in parallel (shunt) with the armature winding. This connection results in a relatively constant field flux, leading to a nearly constant speed under varying loads.

**Reference:**
*   P.S. Bimbhra, "Electrical Machinery," Chapter 6: DC Shunt Motor, 7th edition 2021.
*   D.P. Kothari & I.J. Nagrath, "Electric Machines," Chapter 5: DC Motors, 5th edition 2017.

### 2.2 Losses in a DC Motor

Losses in a DC motor represent the energy dissipated as heat or converted into undesirable forms. These losses reduce the overall efficiency of the motor. They can be broadly categorized as:

*   **Constant Losses (Iron Losses or Core Losses + Mechanical Losses):** These losses remain relatively constant irrespective of the load applied to the motor. They are primarily due to magnetic effects and mechanical factors.
    *   **Iron Losses (Core Losses):** These occur in the magnetic core of the motor due to the alternating flux.
        *   **Hysteresis Loss:** This loss arises from the molecular friction within the iron core as it is repeatedly magnetized and demagnetized by the alternating flux. The energy required to realign the magnetic domains is dissipated as heat. It is dependent on the material properties, frequency of flux reversal, and the maximum flux density.
            *   **Formula (approximate):** $P_h = \eta B_m^{1.6} f V$
            *   Where:
                *   $P_h$ = Hysteresis loss
                *   $\eta$ = Steinmetz's constant (depends on the magnetic material)
                *   $B_m$ = Maximum flux density
                *   $f$ = Frequency of flux reversal
                *   $V$ = Volume of the core material
        *   **Eddy Current Loss:** This loss is caused by circulating currents induced in the conductive core material by the changing magnetic flux. These currents flow in closed paths within the core and dissipate energy as heat due to the resistance of the core material. Eddy current loss is proportional to the square of the flux density, the square of the frequency, and the thickness of the laminations.
            *   **Formula (approximate):** $P_e = C_e B_m^2 f^2 t^2 V$
            *   Where:
                *   $P_e$ = Eddy current loss
                *   $C_e$ = Eddy current constant (depends on the resistivity of the material)
                *   $B_m$ = Maximum flux density
                *   $f$ = Frequency of flux reversal
                *   $t$ = Thickness of laminations
                *   $V$ = Volume of the core material
    *   **Mechanical Losses:** These losses are due to physical movement and friction.
        *   **Friction Loss:** Occurs due to friction in bearings and brushes.
        *   **Windage Loss:** Occurs due to the friction between the rotating armature and the surrounding air.
        *   **Note:** Friction and windage losses are often grouped together as they are difficult to separate. They are generally considered to be speed-dependent.

*   **Variable Losses (Copper Losses):** These losses vary with the load and are primarily due to the resistance of the windings.
    *   **Armature Copper Loss ($I_a^2 R_a$):** Loss in the armature winding.
    *   **Shunt Field Copper Loss ($I_{sh}^2 R_{sh}$):** Loss in the shunt field winding. (This is constant if the supply voltage is constant, as the field current remains constant.)

### 2.3 No-Load Test

The no-load test is conducted on a DC shunt motor by driving the motor at its rated speed using an external prime mover (like another motor). The motor is not supplied with any electrical power from the mains, but its field is excited by the mains. This test is crucial for determining the constant losses.

**Important Note for this Experiment:** In this specific experiment, we will be *supplying* power to the DC shunt motor and running it *without load* on the shaft. The excitation of the field winding will be varied, and the motor will run at different speeds. This is the standard approach for separating losses in a DC motor.

## 3. Objective of the Experiment

To separate the hysteresis, eddy current, friction, and windage losses in a DC shunt motor by conducting a no-load test at different excitations.

## 4. Experimental Setup

*   DC Shunt Motor
*   DC Power Supply
*   Rheostat for field control (variable resistance)
*   Rheostat for armature control (optional, but good for starting and speed control)
*   Voltmeter (to measure armature voltage $V$)
*   Ammeter (to measure armature current $I_a$)
*   Ammeter (to measure field current $I_{sh}$)
*   Tachometer (to measure speed $N$)
*   Connecting wires
*   Load (for starting purposes, not for the no-load test itself)

**Circuit Diagram:**

(A typical circuit diagram would show the DC supply connected to the shunt motor. The field winding is connected in series with a field rheostat and an ammeter across the supply. The armature winding is connected in series with an ammeter and optionally an armature rheostat across the supply. A voltmeter is connected across the armature terminals.)

## 5. Procedure

1.  **Initial Setup:**
    *   Connect the DC shunt motor as per the circuit diagram.
    *   Ensure all meters are correctly connected and calibrated.
    *   Start with the field rheostat set to its maximum resistance to limit the initial field current.
    *   Start the motor using an appropriate starting method (e.g., using an armature resistance starter if available, or by gradually increasing the field excitation while the armature is at rest, then applying armature voltage).
    *   Once the motor is running, set the armature rheostat to its minimum resistance (shorted) and adjust the field rheostat to achieve the rated speed (or slightly above).

2.  **No-Load Test:**
    *   Once the motor is running at approximately rated speed with the field excited and no load on the shaft, disconnect the armature starter (if used) and ensure the armature rheostat is set to minimum resistance.
    *   **Adjust Excitation:** Vary the field rheostat to change the field excitation and thus the speed of the motor.
    *   **Record Readings:** For each setting of the field rheostat, record the following values:
        *   Armature Voltage ($V$)
        *   Armature Current ($I_a$)
        *   Field Current ($I_{sh}$)
        *   Speed ($N$) in RPM (using a tachometer)
    *   **Range of Excitation:** Take readings over a range of speeds, typically from slightly below the rated speed to a speed slightly above the rated speed, by varying the field excitation. Start with a weaker field (higher resistance) and gradually increase the field current (decrease field resistance) to increase the speed.

**Important Safety Note:** Always ensure that the armature rheostat is used for starting to limit the initial armature current. Once running, it should be shorted out for the no-load test. Be cautious while varying the field excitation, as a very weak field at high speeds can lead to dangerous overspeeding.

## 6. Calculations and Analysis

From the recorded readings, we can calculate the various losses.

**At no-load, the input power to the motor is:**
$P_{in} = V \times I_a$ (assuming the voltmeter measures the voltage across the armature and the ammeter measures armature current)

**The losses at no-load are:**
$P_{losses, NL} = P_{in} - P_{out}$

Since the motor is running at no-load, the output mechanical power ($P_{out}$) is essentially zero. However, the input power is consumed by the losses.

The input power to the motor is distributed as follows:
$P_{in} = V \times I_a$

This input power is primarily consumed by:
*   Shunt field copper loss ($P_{sh}$)
*   Armature copper loss ($I_a^2 R_a$)
*   Core losses ($P_{core}$)
*   Mechanical losses ($P_{mech}$ = Friction + Windage)

**Equation for No-Load Input Power:**
$V \times I_a = I_{sh}^2 R_{sh} + I_a^2 R_a + P_{core} + P_{mech}$

**Crucial Insight for No-Load:**
At no-load, the armature current ($I_a$) is very small. Therefore, the armature copper loss ($I_a^2 R_a$) is negligible and can be ignored for practical purposes.

So, the no-load input power is approximately:
$P_{NL} \approx V \times I_a \approx I_{sh}^2 R_{sh} + P_{core} + P_{mech}$

Let's refine this. The voltage across the armature is $V$. The voltage across the field winding is the supply voltage, say $V_{supply}$.
$I_{sh} = \frac{V_{supply}}{R_{sh} + R_{field\_winding}}$

The total input power supplied to the motor is $P_{total} = V_{supply} \times I_{total}$, where $I_{total} = I_a + I_{sh}$.
However, it is more convenient to consider the power supplied to the armature circuit and the power supplied to the field circuit separately.

**Power supplied to armature circuit:** $P_{arm} = V \times I_a$
**Power supplied to field circuit:** $P_{field} = V_{supply} \times I_{sh}$

At no load:
$P_{arm} = I_a^2 R_a + P_{core} + P_{mech}$
$P_{field} = I_{sh}^2 R_{sh}$ (This is the shunt field copper loss itself)

Since $I_a$ is small at no-load, $I_a^2 R_a \approx 0$.
Therefore, $P_{arm} \approx P_{core} + P_{mech}$

Let $P_{NL} = P_{arm} = V \times I_a$ be the power input to the armature at no-load.
And $P_{sh} = V_{supply} \times I_{sh}$ be the power consumed by the shunt field.

The total power supplied to the motor is $P_{in} = (V \times I_a) + (V_{supply} \times I_{sh})$.
At no load, this input power is equal to the sum of all losses:
$P_{in} = P_{sh} + P_{arm, loss} + P_{core} + P_{mech}$
$P_{in} = I_{sh}^2 R_{sh} + I_a^2 R_a + P_{core} + P_{mech}$

Since $I_a$ is small at no-load, $I_a^2 R_a \approx 0$.
So, $P_{in} \approx I_{sh}^2 R_{sh} + P_{core} + P_{mech}$.

**The key idea is that the sum of core losses and mechanical losses ($P_{core} + P_{mech}$) is nearly constant as long as the supply voltage and hence the flux are kept constant.** However, in this experiment, we are varying the field excitation, which changes the speed and the flux.

**Method of Separation:**

1.  **Calculate $I_{sh}^2 R_{sh}$ for each reading:** This is the shunt field copper loss, which is a constant loss component when $V_{supply}$ is constant.
2.  **Calculate $P_{NL} = V \times I_a$ for each reading:** This is the power input to the armature at no-load.
3.  **Deduce $P_{core} + P_{mech}$:** At no-load, the armature current $I_a$ is small, so $I_a^2 R_a$ is negligible. Thus, $P_{NL} \approx P_{core} + P_{mech}$.

Now, we have a set of values for $P_{NL}$ at different speeds (and thus different field currents and flux densities). We know that:
$P_{core} = P_h + P_e$
$P_{mech} = P_f + P_w$

*   **Core Losses ($P_{core}$):** These are dependent on flux density ($B$). For a DC motor, flux is roughly proportional to field excitation (field current $I_{sh}$ if $R_{sh}$ is constant, or to the air gap flux $\Phi$). Speed $N$ is inversely proportional to flux: $N \propto \frac{1}{\Phi}$. Thus, $\Phi \propto \frac{1}{N}$.
    *   Hysteresis loss $P_h \propto f \Phi^n$. Since the frequency of flux reversal in the armature is related to the speed of rotation, we can say $P_h \propto N \Phi^n$. Since $\Phi \propto 1/N$, $P_h \propto N (1/N)^n = N^{1-n}$. For typical values of $n$ (Steinmetz exponent), $P_h$ is approximately proportional to $N$ or $N^{1.5}$.
    *   Eddy current loss $P_e \propto f \Phi^2$. So, $P_e \propto N \Phi^2$. Since $\Phi \propto 1/N$, $P_e \propto N (1/N)^2 = 1/N$.
    *   Therefore, $P_{core} = P_h + P_e \propto N + \frac{1}{N}$ (approximately). More precisely, $P_{core} = A \cdot N + \frac{B}{N}$ where $A$ accounts for hysteresis and $B$ for eddy currents.

*   **Mechanical Losses ($P_{mech}$):** These losses are primarily dependent on speed. Friction losses are roughly proportional to speed, and windage losses are roughly proportional to the square of the speed. So, $P_{mech} \approx C \cdot N + D \cdot N^2$.

**We have $P_{NL} = V \times I_a = P_{core} + P_{mech}$ (approximately, neglecting $I_a^2 R_a$).**
Since $P_{core}$ depends on $N$ and $P_{mech}$ also depends on $N$, $P_{NL}$ is a function of speed.

**Graphical Method for Separation:**

1.  **Plot $P_{NL}$ vs. Speed ($N$):** Plot the armature input power ($P_{NL} = V \times I_a$) on the y-axis against the speed ($N$) on the x-axis. This curve will represent the sum of core and mechanical losses.

2.  **Extrapolation:** As the speed decreases and approaches zero, the mechanical losses ($P_{mech}$) become very small. The core losses ($P_{core}$) also decrease with speed, but not to zero.
    However, the primary method of separation involves observing how these losses behave with changing excitation.

    Let's reconsider the equation:
    $P_{NL} = V \times I_a = P_{core} + P_{mech}$ (neglecting $I_a^2 R_a$)

    We know that $P_{core} = P_h + P_e$, and $P_{mech} = P_f + P_w$.
    The fundamental idea is to vary the excitation, which changes the speed and the magnetic flux.

    **Consider the relationship between Flux and Speed:**
    For a DC shunt motor with constant supply voltage $V_{supply}$, the generated EMF is $E = V_{supply} - I_a R_a$.
    Also, $E \propto \Phi N$.
    So, $V_{supply} - I_a R_a \propto \Phi N$.
    At no load, $I_a$ is small, so $E \approx V_{supply}$.
    Thus, $V_{supply} \propto \Phi N$, which means $\Phi \propto \frac{V_{supply}}{N}$.

    **Loss Components as a function of Flux:**
    *   Hysteresis Loss ($P_h$) $\propto f \Phi^{1.6}$. Since $f \propto N$, $P_h \propto N \Phi^{1.6} \propto N (\frac{V_{supply}}{N})^{1.6} = V_{supply}^{1.6} N^{-0.6}$.
    *   Eddy Current Loss ($P_e$) $\propto f \Phi^2$. Since $f \propto N$, $P_e \propto N \Phi^2 \propto N (\frac{V_{supply}}{N})^2 = V_{supply}^2 N^{-1}$.
    *   Mechanical Losses ($P_{mech}$) are primarily speed-dependent, so $P_{mech} \approx C_1 N + C_2 N^2$.

    **The Power Input to the Armature at No-Load:**
    $P_{NL} = V \times I_a = I_a^2 R_a + P_{core} + P_{mech}$
    $P_{NL} = I_a^2 R_a + P_h + P_e + P_{mech}$

    Since $I_a$ is small, $I_a^2 R_a$ is small.
    $P_{NL} \approx P_{core} + P_{mech}$
    $P_{NL} \approx (P_h + P_e) + (P_f + P_w)$

    **Let's assume the flux density is proportional to the field current $I_{sh}$ (a simplification).**
    This is valid for a shunt motor where the armature reaction is negligible at no load.

    **The most common method for separating losses involves plotting $V \times I_a$ vs. $N$.**
    However, this alone doesn't separate core from mechanical losses.

    **The advanced method involves observing the power input at constant speed and varying excitation, or at constant excitation and varying speed.**

    **For separating hysteresis and eddy current losses from friction and windage:**
    We need to plot a quantity that is related to these losses.

    **Let's focus on the prompt's requirement:** "Separate the hysteresis, eddy current, friction and windage losses by conducting no-load tests at different excitations."

    The typical procedure involves:
    1.  Conducting the no-load test at different field excitations, varying the speed.
    2.  Recording $V, I_a, I_{sh}, N$.
    3.  Calculating $P_{NL} = V \times I_a$.

    **At no load, the equation is:**
    $V \times I_a = I_{sh}^2 R_{sh} + I_a^2 R_a + P_{core} + P_{mech}$

    If we assume $R_a$ and $R_{sh}$ are known, we can calculate $I_{sh}^2 R_{sh}$ and $I_a^2 R_a$.
    Let $P_{constant\_copper} = I_{sh}^2 R_{sh} + I_a^2 R_a$. (Note: $I_a^2 R_a$ is small but not zero, and it does vary slightly with $I_a$).
    Then $V \times I_a = P_{constant\_copper} + P_{core} + P_{mech}$.

    **The actual separation is usually done by assuming a model for the losses.**

    **Method based on Bimbhra:**
    P.S. Bimbhra, Chapter 6, discusses that at no-load, the input power to the armature is $P_{NL} = V \times I_a$.
    This power is spent in $I_a^2 R_a$ and mechanical and core losses.
    $P_{NL} = I_a^2 R_a + P_{core} + P_{mech}$.
    The term $P_{core} + P_{mech}$ is often referred to as " Stray Losses".

    **To separate these, we need more information or assumptions.**

    **Common Approach for Separation (often done in labs):**
    1.  **Constant Speed, Variable Excitation:** While the prompt says "different excitations", the standard separation is often more nuanced. If you keep the speed constant and vary the excitation, it's more for checking voltage regulation.
    2.  **Variable Speed, Variable Excitation (as per procedure):**
        *   Record $V, I_a, I_{sh}, N$.
        *   Calculate $P_{NL} = V \times I_a$.
        *   Calculate $P_{sh} = V_{supply} \times I_{sh}$.
        *   Assume $R_a$ (can be found from a resistance test or another experiment).
        *   Calculate $I_a^2 R_a$.
        *   Then, $P_{NL} - I_a^2 R_a = P_{core} + P_{mech}$.

    **The core of the separation lies in how $P_{core}$ and $P_{mech}$ change with speed.**
    *   $P_{mech} \approx aN + bN^2$ (Friction $\propto N$, Windage $\propto N^2$)
    *   $P_{core} = P_h + P_e$.
        *   $P_h \propto f \Phi^{1.6}$. With $f \propto N$ and $\Phi \propto 1/N$, $P_h \propto N \times (1/N)^{1.6} = N^{-0.6}$.
        *   $P_e \propto f \Phi^2$. With $f \propto N$ and $\Phi \propto 1/N$, $P_e \propto N \times (1/N)^2 = N^{-1}$.
        *   So, $P_{core} \approx c N^{-0.6} + d N^{-1}$. This is not a convenient form for plotting.

    **Alternative formulation:**
    $P_{NL} - I_a^2 R_a = P_{core} + P_{mech}$.
    Let $P_{stray} = P_{NL} - I_a^2 R_a$.

    Plot $P_{stray}$ vs. $N$.

    **If we assume $P_{mech} \approx C \times N$ (a simplification, often used for lower speeds), then $P_{stray} \approx P_{core} + C \times N$.**
    $P_{core} = P_{stray} - C \times N$.

    **A standard method involves plotting $(V \times I_a)$ vs. $N$.**
    Then, extrapolate this curve to zero speed. The value at zero speed is approximately the mechanical losses (assuming friction and windage are zero at zero speed, which is a simplification). However, this is not accurate as core losses also change.

    **The key to separating $P_{core}$ and $P_{mech}$ is to realize that at a given speed $N$, core losses are primarily dependent on the flux, while mechanical losses are primarily dependent on speed.**

    **Let's revisit the prompt and typical lab practices:**

    The standard approach to separate these losses in a DC shunt motor involves:
    1.  Conducting a no-load test by varying the field excitation. This results in different speeds and armature currents.
    2.  Calculating armature input power ($P_{NL} = V \times I_a$).
    3.  Calculating field copper loss ($P_{sh} = V_{supply} \times I_{sh}$).
    4.  Knowing $R_a$ (from a separate test), calculate armature copper loss ($I_a^2 R_a$).
    5.  The remaining power, $P_{NL} - I_a^2 R_a$, is the sum of core and mechanical losses ($P_{core} + P_{mech}$).

    **How to separate $P_{core}$ and $P_{mech}$?**

    *   **Assumption:** Mechanical losses ($P_{mech}$) are primarily dependent on speed. Core losses ($P_{core}$) are dependent on flux (which is related to speed inversely) and speed.
    *   **Plotting:** Plot $P_{NL} - I_a^2 R_a$ (stray losses) against speed $N$.
    *   **Separation Technique:**
        *   $P_{mech} \approx aN + bN^2$ (Friction and windage)
        *   $P_{core} = P_h + P_e$. $P_h \propto N \Phi^{1.6}$ and $P_e \propto N \Phi^2$. With $\Phi \propto 1/N$, these terms decrease with speed.

        **Consider the relationship: $P_{NL} - I_a^2 R_a = P_{core} + P_{mech}$.**
        If we plot $(P_{NL} - I_a^2 R_a) / N$ vs. $N$.
        This becomes $(P_{core} + P_{mech})/N = P_{core}/N + P_{mech}/N$.
        $P_{core}/N \approx (c N^{-0.6} + d N^{-1}) / N = c N^{-1.6} + d N^{-2}$.
        $P_{mech}/N \approx (aN + bN^2)/N = a + bN$.

        So, $(P_{NL} - I_a^2 R_a) / N \approx (c N^{-1.6} + d N^{-2}) + (a + bN)$.
        This is still not ideal for linear plotting.

    **The "Segner's method" or "parallel curve method" is often used for separation:**

    1.  Perform the no-load test at various excitations, recording $V, I_a, I_{sh}, N$.
    2.  Calculate $P_{NL} = V \times I_a$.
    3.  Calculate $P_{sh} = V_{supply} \times I_{sh}$.
    4.  Determine $R_a$ by a separate resistance test.
    5.  Calculate $P_{NL} - I_a^2 R_a = P_{stray}$ (Stray losses = Core losses + Mechanical losses).
    6.  Plot $P_{stray}$ vs. $N$.
    7.  **Assumption for Separation:**
        *   Mechanical losses ($P_{mech}$) are proportional to speed (often simplified as $P_{mech} = k N$, though $N^2$ term for windage is also present).
        *   Core losses ($P_{core}$) are proportional to $N \times (\Phi/N)^x$.

    **Correct Approach based on Textbooks (Bimbhra, Kothari & Nagrath):**
    The no-load test primarily determines the *sum* of core and mechanical losses. To separate them, additional information or assumptions are needed.

    A common technique:
    *   **The $P_{NL}$ vs. $N$ curve is plotted.**
    *   From this curve, one can observe that at higher speeds, mechanical losses dominate, and at lower speeds, core losses might be more significant relative to mechanical losses.
    *   **One method is to approximate $P_{mech} \approx k N$.**
    *   Then $P_{stray} = P_{core} + k N$.
    *   $P_{core} = P_{stray} - k N$.

    **The separation is achieved by plotting $P_{stray}$ against $N$, and then assuming a form for mechanical losses.**

    Let's use the formulation:
    $P_{stray} = P_{core} + P_{mech}$
    $P_{stray} = (a \sqrt{N} + b N) + (c N + d N^2)$  (approximating $\Phi \propto \sqrt{N}$ for field flux)

    **A more practical method presented in many labs:**
    1.  Conduct no-load test at various excitations, obtaining $V, I_a, I_{sh}, N$.
    2.  Calculate $P_{input\_to\_armature} = V \times I_a$.
    3.  Calculate $P_{armature\_copper\_loss} = I_a^2 R_a$.
    4.  Calculate $P_{stray} = (V \times I_a) - (I_a^2 R_a)$.
    5.  Plot $P_{stray}$ vs. $N$.
    6.  **Fit a curve of the form $P_{stray} = P_{core} + P_{mech}$ to the data.**
    7.  **The key separation:**
        *   Assume mechanical losses $P_{mech} = k \times N$ (This is a simplification, but often used).
        *   Then $P_{stray} = P_{core} + k N$.
        *   Rearranging, $P_{stray} - k N = P_{core}$.
        *   If we plot $P_{stray}$ vs $N$, and assume $P_{mech}$ grows linearly with $N$, we can try to find $k$.

    **The standard graphical method involves plotting $(V \times I_a)$ against $N$.**
    Then, a second curve is plotted: $(V \times I_a)/N$ against $N$.

    **Let's stick to the most common approach for educational labs:**
    1.  **Calculate $P_{stray} = (V \times I_a) - (I_a^2 R_a)$ for each reading.**
    2.  **Plot $P_{stray}$ vs. $N$.** This gives the sum of core and mechanical losses as a function of speed.
    3.  **Separation:**
        *   **At low speeds**, mechanical losses are dominant over core losses, and they increase with speed.
        *   **At high speeds**, core losses might be more significant.
        *   **Consider the nature of the losses:**
            *   $P_{mech} \approx aN + bN^2$.
            *   $P_{core} \approx cN^{-0.6} + dN^{-1}$ (or using flux directly).

    **A common simplification is to assume that at a certain range of speeds, the core losses can be assumed to be constant, or that mechanical losses are linearly proportional to speed.** This is not strictly accurate.

    **Let's use the graphical method from Bimbhra (Chapter 6):**
    Bimbhra shows a method where $P_{NL} - I_a^2 R_a$ is plotted against speed.
    Then, a curve of the form $P_{stray} = P_{core} + P_{mech}$ is fitted.
    $P_{mech}$ is often approximated as $kN$.
    If we assume $P_{core}$ can be treated as constant over a small speed range (a poor assumption here) or we use its speed dependence.

    **The separation of $P_{core}$ from $P_{mech}$ is generally done by assuming a functional form for one of them.**

    **Method:**
    1.  Calculate $P_{stray} = (V \times I_a) - I_a^2 R_a$.
    2.  Plot $P_{stray}$ vs. $N$.
    3.  Draw a smooth curve through these points.
    4.  **Assume $P_{mech} = k \times N$.**
    5.  Then $P_{core} = P_{stray} - k \times N$.
    6.  We need to find $k$.
        *   If we assume the curve $(P_{stray} - k N)$ represents $P_{core}$ which depends on flux (and hence $1/N$), we can iterate.

    **A more direct graphical method for separation:**
    1.  Plot $P_{stray} = (V \times I_a) - I_a^2 R_a$ against $N$.
    2.  **Assume $P_{mech} = k \times N$.** (This is a simplification for friction, windage is $N^2$)
    3.  The equation becomes $P_{stray} = P_{core} + k N$.
    4.  Rearrange: $P_{stray}/N = P_{core}/N + k$.
    5.  Plot $P_{stray}/N$ vs. $N$. The intercept on the y-axis (at $N=0$) would be $k$ if $P_{core}/N$ was zero, which is not the case.

    **Let's use the standard breakdown: Constant losses and Variable losses.**
    The no-load test determines the sum of iron losses and mechanical losses. These are the "constant losses" of the motor if we consider the excitation and speed to be approximately constant. However, in this experiment, we are *deliberately* varying the excitation and thus the speed.

    **Final Calculation Procedure:**

    1.  **From the recorded data:** $V, I_a, I_{sh}, N$.
    2.  **Calculate $P_{NL} = V \times I_a$** (Armature input power).
    3.  **Calculate $P_{sh} = V_{supply} \times I_{sh}$** (Shunt field copper loss).
    4.  **Determine $R_a$** (e.g., from a resistance test: $R_a = \frac{V}{I_a}$ when the armature is cold, or from datasheet).
    5.  **Calculate $P_{a, loss} = I_a^2 R_a$** (Armature copper loss).
    6.  **Calculate Stray Losses:** $P_{stray} = P_{NL} - P_{a, loss} = P_{core} + P_{mech}$.
    7.  **Plot:** Plot $P_{stray}$ (on Y-axis) against speed $N$ (on X-axis).

    **Separating Core and Mechanical Losses:**
    This is the critical step.
    *   **The core losses are a function of flux and frequency, and generally decrease with increasing speed because flux decreases.**
    *   **The mechanical losses (friction and windage) are a function of speed and increase with speed.**

    **Let's use the method described in some textbooks:**
    Assume $P_{mech} = aN + bN^2$ (linear friction + quadratic windage).
    Assume $P_{core} = c + dN$ (simplification for core loss varying with speed).

    This leads to fitting a polynomial. A simpler approach for educational labs is often assumed:

    **Assumption for separation:**
    *   Mechanical losses ($P_{mech}$) are assumed to be proportional to speed, i.e., $P_{mech} = K \times N$.
    *   Core losses ($P_{core}$) are assumed to be constant over the range of speeds tested (this is a strong assumption but often used for simplification).

    If $P_{core}$ is constant ($P_{core} = C$) and $P_{mech} = KN$:
    Then $P_{stray} = C + KN$.
    This is a linear equation. If we plot $P_{stray}$ vs. $N$, it should be a straight line.

    **However, this is not entirely accurate.** Core losses are not constant, and mechanical losses are not perfectly linear.

    **A more accepted graphical method:**
    1.  Plot $P_{stray}$ vs. $N$.
    2.  Draw a smooth curve.
    3.  **At very low speeds**, the dominant component of stray loss is mechanical friction. At higher speeds, windage and core losses become more significant.
    4.  **Assume $P_{mech} = k N$ (linear friction).**
    5.  Then $P_{core} = P_{stray} - k N$.
    6.  We can try to find $k$ by assuming that at a specific speed, $P_{core}$ follows a certain dependency.

    **Let's consider the relationship between flux and speed: $\Phi \propto 1/N$.**
    $P_h \propto N \Phi^{1.6} \propto N (1/N)^{1.6} \propto N^{-0.6}$
    $P_e \propto N \Phi^2 \propto N (1/N)^2 \propto N^{-1}$
    So, $P_{core} \approx A N^{-0.6} + B N^{-1}$.

    And $P_{mech} \approx C N + D N^2$.

    **The common practice in labs is to plot $P_{stray}$ vs. $N$.**
    Then, to separate, one might assume that the deviation from linearity is due to the core losses changing non-linearly.

    **The most robust method involves plotting $P_{stray}$ vs $N$, and then fitting a curve of the form $P_{stray} = P_{core} + aN + bN^2$.**

    However, for this experiment, the instruction is to "separate". This implies a simpler method is expected.

    **Let's use the common simplification: $P_{mech} = k \times N$.**
    Then $P_{stray} = P_{core} + kN$.
    $P_{core} = P_{stray} - kN$.

    We need to find the value of $k$.
    Consider two points $(N_1, P_{stray1})$ and $(N_2, P_{stray2})$ from the plot.
    $P_{stray1} = P_{core1} + k N_1$
    $P_{stray2} = P_{core2} + k N_2$

    This approach is challenging because $P_{core}$ also depends on $N$.

    **Let's follow Kothari & Nagrath (Chapter 5, Loss Calculation):**
    They suggest no-load test for finding $P_{core} + P_{mech}$.
    For separating them:
    "Iron losses are practically constant for all loads. If the motor is run at no-load at rated speed, the output power is zero and the input power is used to cover the iron losses and mechanical losses."

    This statement implies that $P_{core} + P_{mech}$ is constant. But we are varying speed.

    **The true separation method relies on the different dependencies of losses on speed and flux.**

    **Method for Separation (Practical Lab Approach):**
    1.  Calculate $P_{stray} = (V \times I_a) - I_a^2 R_a$ for each reading.
    2.  Plot $P_{stray}$ vs. $N$.
    3.  **Assume $P_{mech} = aN + bN^2$.**
    4.  **Assume $P_{core} = P_h + P_e$.**
        *   $P_h \propto f \Phi^{\text{1.6}} \propto N \Phi^{\text{1.6}}$
        *   $P_e \propto f \Phi^2 \propto N \Phi^2$
        *   For a shunt motor at no load, $\Phi \propto V_{supply}/N$.
        *   $P_h \propto N (V_{supply}/N)^{1.6} = V_{supply}^{1.6} N^{-0.6}$
        *   $P_e \propto N (V_{supply}/N)^2 = V_{supply}^2 N^{-1}$
        *   So, $P_{core} = C_1 N^{-0.6} + C_2 N^{-1}$.

    This requires fitting a curve of the form:
    $P_{stray} = (C_1 N^{-0.6} + C_2 N^{-1}) + (aN + bN^2)$.
    This is a complex fitting problem.

    **Let's try a simpler educational interpretation of "separation":**
    *   **Plot $P_{NL} = V \times I_a$ vs. $N$.**
    *   **Then, plot $P_{NL}/N$ vs. $N$.**
        *   $P_{NL}/N = (P_{core} + P_{mech})/N$
        *   $P_{NL}/N = P_{core}/N + P_{mech}/N$
        *   $P_{mech}/N \approx a + bN$ (linear friction + windage divided by $N$)
        *   $P_{core}/N \approx (C_1 N^{-0.6} + C_2 N^{-1}) / N = C_1 N^{-1.6} + C_2 N^{-2}$

    **Simplified Method for educational purpose:**
    1.  Calculate $P_{stray} = V \times I_a - I_a^2 R_a$.
    2.  Plot $P_{stray}$ vs. $N$.
    3.  **To separate friction and windage from core losses, assume:**
        *   **Mechanical losses are proportional to speed** ($P_{mech} = k N$).
        *   **Core losses are constant** ($P_{core} = C$).
        *   This gives $P_{stray} = C + kN$.
        *   Plotting $P_{stray}$ vs $N$ should yield a straight line. If it doesn't, this assumption is violated.

    **The most common practical method to *estimate* the separation is to use two different methods of plotting:**

    **Method 1: Plot $P_{stray}$ vs. $N$.**
    *   Assume $P_{mech} = KN$ (linear friction).
    *   $P_{stray} = P_{core} + KN$.
    *   This implies that the curve $P_{stray}$ vs. $N$ is a straight line if $P_{core}$ is constant.
    *   The slope is $K$, and the intercept is $P_{core}$.

    **However, this doesn't account for windage ($N^2$) and the speed dependence of core losses.**

    **A better approach:**
    1.  Calculate $P_{stray} = V \times I_a - I_a^2 R_a$.
    2.  Plot $P_{stray}$ vs. $N$.
    3.  **Consider the function $f(N) = P_{stray} / N$.**
    4.  $f(N) = P_{core}/N + P_{mech}/N$.
    5.  If we assume $P_{mech} \approx aN$, then $P_{mech}/N \approx a$.
    6.  If we assume $P_{core}$ is constant $C$, then $P_{core}/N = C/N$.
    7.  $f(N) \approx C/N + a$. Plot $f(N)$ vs $1/N$. This should be a straight line with slope $C$ and intercept $a$.
        *   $P_{core} = C$
        *   $P_{mech} = aN$

    **This is a widely accepted method for educational labs.**

    **Summary of Calculation Steps for Separation:**

    1.  **Record Data:** For each reading, record $V, I_a, I_{sh}, N$.
    2.  **Calculate:**
        *   Armature input power: $P_{NL} = V \times I_a$.
        *   Shunt field copper loss: $P_{sh} = V_{supply} \times I_{sh}$ (assuming $V_{supply}$ is constant).
        *   Armature copper loss: $P_{a, loss} = I_a^2 R_a$ (requires $R_a$).
        *   Stray losses: $P_{stray} = P_{NL} - P_{a, loss}$.
    3.  **Plot $P_{stray}$ vs. $N$.**
    4.  **Calculate:**
        *   $Y = P_{stray} / N$
        *   $X = 1/N$
    5.  **Plot $Y$ vs. $X$.** This should ideally be a straight line.
    6.  **Fit a straight line:** $Y = mX + c$.
        *   The slope $m$ represents the constant core losses ($P_{core}$).
        *   The intercept $c$ represents the coefficient for mechanical losses proportional to speed ($k$).
        *   Thus, $P_{core} = m$.
        *   And $P_{mech} = c \times N$.

    **This method separates losses into two categories:**
    *   Constant Core Losses ($P_{core}$)
    *   Mechanical Losses proportional to speed ($P_{mech} = cN$).

    **Note:** This method simplifies by:
    *   Assuming core losses are constant (ignoring their speed dependence).
    *   Assuming mechanical losses are linearly proportional to speed (ignoring windage $\propto N^2$).

    However, this is the standard way to "separate" these losses in a lab context for educational purposes.

## 7. Results and Graphs

1.  **Tabulate Readings:** Create a table with columns for $V, I_a, I_{sh}, N, P_{NL}, P_{sh}, P_{a,loss}, P_{stray}$.
2.  **Graph 1: $P_{stray}$ vs. $N$.**
3.  **Graph 2: $P_{stray}/N$ vs. $1/N$.**
    *   From the intercept of Graph 2, find the constant core losses ($P_{core}$).
    *   From the slope of Graph 2, find the mechanical loss coefficient ($c$).
    *   Then, calculate $P_{mech} = c \times N$ for each reading.
    *   Verify that $P_{stray} \approx P_{core} + P_{mech}$ for each data point.

## 8. Discussion

*   Explain the trend observed in the $P_{stray}$ vs. $N$ graph.
*   Comment on the linearity of the $P_{stray}/N$ vs. $1/N$ graph. If there are significant deviations, explain possible reasons (e.g., accuracy of readings, validity of assumptions).
*   Compare the determined values of $P_{core}$ and $P_{mech}$ with typical values or values calculated from motor design parameters if available.
*   Discuss the limitations of the assumptions made (constant core losses, linear mechanical losses). How would including windage ($N^2$) affect the results?
*   How do the core losses vary with flux and frequency? (Reference Steinmetz equation).
*   How do mechanical losses vary with speed?

## 9. Conclusion

Summarize the values of core losses and mechanical losses obtained from the experiment. State the effectiveness of the method used for separating these losses.

## 10. Practice Questions and Answers

**Q1: What are the two main components of constant losses in a DC motor?**
**A1:** The two main components of constant losses are iron losses (hysteresis and eddy current losses) and mechanical losses (friction and windage losses). These are considered "constant" when the motor operates at a constant speed and excitation.

**Q2: In the no-load test for a DC shunt motor, why is the armature copper loss ($I_a^2 R_a$) often neglected?**
**A2:** At no-load, the armature current ($I_a$) is very small. Since the loss is proportional to the square of the current ($I_a^2$), the armature copper loss becomes negligible compared to other losses.

**Q3: What is the fundamental assumption used in the graphical method $Y = mX + c$ where $Y = P_{stray}/N$ and $X = 1/N$ for separating losses?**
**A3:** The assumption is that core losses ($P_{core}$) are constant, and mechanical losses ($P_{mech}$) are linearly proportional to speed ($P_{mech} = cN$). This leads to $P_{stray} = P_{core} + cN$, and dividing by $N$ gives $P_{stray}/N = P_{core}/N + c$. Plotting $P_{stray}/N$ vs. $1/N$ yields a straight line where the intercept is $P_{core}$ and the slope is $c$.

**Q4: If a DC shunt motor is run at rated speed and load, and then at rated speed but no load, will the core losses be the same? Explain why.**
**A4:** Yes, the core losses will be approximately the same. Core losses are primarily dependent on the flux density in the core and the frequency of flux reversal. In a shunt motor at rated speed and rated voltage, the flux is relatively constant, and the frequency is determined by the speed. Therefore, as long as the speed and flux are the same, the core losses will be similar, regardless of the load.

**Q5: What are the main factors affecting hysteresis loss?**
**A5:** Hysteresis loss is affected by the magnetic material properties (Steinmetz constant), the maximum flux density ($B_m$), the frequency of flux reversal ($f$), and the volume of the magnetic material ($V$).

**Q6: Which type of mechanical loss is more significantly affected by the motor's speed, friction or windage?**
**A6:** Windage loss is more significantly affected by the motor's speed. Friction loss is often approximated as being proportional to speed, while windage loss is approximately proportional to the square of the speed.

## 11. Important Points to Remember

*   The no-load test is crucial for determining the sum of core and mechanical losses.
*   The separation of core losses from mechanical losses requires specific assumptions or graphical methods due to their different dependencies on speed and flux.
*   The method of plotting $P_{stray}/N$ vs. $1/N$ is a common educational approach, assuming constant core losses and linearly speed-dependent mechanical losses.
*   Always use a resistance test to find $R_a$ accurately for calculating armature copper losses.
*   Be cautious about overspeeding when varying field excitation.
*   The accuracy of the separation depends heavily on the validity of the assumptions made.
