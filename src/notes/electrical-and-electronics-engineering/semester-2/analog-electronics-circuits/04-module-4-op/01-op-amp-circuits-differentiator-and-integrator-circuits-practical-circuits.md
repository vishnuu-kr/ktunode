---
title: "OP-AMP Circuits : Differentiator and Integrator circuits-practical circuits"
subject: "ANALOG ELECTRONICS CIRCUITS"
module: "Module 4: OP"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213e9ece2bdd875f95bc"
status: "completed"
scrapedAt: "2026-05-23T16:04:31.316Z"
---
# Module 4: Operational Amplifier (OP-AMP) Circuits

## Topic: Differentiator and Integrator Circuits - Practical Considerations

Welcome back everyone! In our journey through Analog Electronics, we've established a strong foundation in the miraculous world of the Operational Amplifier, or OP-AMP. We've seen how this versatile little IC can perform a myriad of functions, from simple amplification to complex signal processing. Today, we're diving deeper into two of its most powerful applications: the **Differentiator** and the **Integrator** circuits. These aren't just theoretical marvels; we'll be exploring how to build them in the real world, accounting for the little quirks and imperfections that make OP-AMPs behave the way they do.

This topic directly ties into **CO5: Design and develop various OPAMP application circuits**, as both differentiators and integrators are fundamental building blocks in many analog systems, from control systems to signal conditioning. Understanding their practical implementation will equip you to actually *build* these circuits, not just draw them on paper.

### 1. The Ideal Differentiator: A Quick Recap

Before we talk about "practical," let's quickly revisit the ideal. Remember our theoretical differentiator? It's a circuit where the output voltage is proportional to the *rate of change* of the input voltage. Mathematically, $V_{out} = -RC \frac{dV_{in}}{dt}$.

The core configuration uses a capacitor ($C$) in the feedback path and a resistor ($R$) at the input. The op-amp, with its near-infinite open-loop gain and zero input impedance, does its best to keep the inverting terminal voltage at virtual ground.

*   **How it works (Ideal):** As the input voltage changes, the capacitor charges or discharges. The rate at which it charges or discharges is directly related to the rate of change of the input voltage. The op-amp amplifies this charging/discharging current, producing an output voltage proportional to $dV_{in}/dt$.

### 2. The Problem with Ideal Differentiators in Practice

Now, the moment we connect a real-world capacitor and resistor to a real op-amp, things start to get a bit messy. The ideal differentiator, as beautiful as it is on paper, has some serious practical limitations that can make it unstable and prone to noise.

Let's think about the **transfer function** of an ideal differentiator: $V_{out}(s) / V_{in}(s) = -sRC$. This "s" term in the numerator is the culprit. What happens at high frequencies? The gain increases linearly with frequency! This is a big problem for a few reasons:

*   **High-Frequency Noise Amplification:** Real-world circuits are full of high-frequency noise. Our ideal differentiator would act like a sonic amplifier for every tiny speck of noise, drowning out our desired signal. Imagine trying to listen to a whisper in a stadium during a rock concert – that’s the kind of effect we’re talking about!
*   **Instability and Oscillation:** The increasing gain at high frequencies can lead to **instability**. The op-amp might start oscillating, producing unwanted outputs. This is like trying to balance a broomstick on your finger; at certain points, even a slight wobble can send it crashing down. The high gain at high frequencies makes the circuit very sensitive to phase shifts within the op-amp itself, which can cause positive feedback and lead to oscillations.

This is where our **Course Outcome 5** comes into play: we need to *design* circuits that overcome these limitations.

### 3. The Practical Differentiator Circuit

To tame the wild behavior of the ideal differentiator, we need to introduce some modifications. The goal is to limit the high-frequency gain.

**Circuit Configuration:**

A common practical differentiator circuit looks like this:

*   An input resistor ($R_1$) is placed in series with the input signal.
*   The capacitor ($C_f$) is still in the feedback path, but now it's in series with a feedback resistor ($R_f$).
*   Crucially, a small capacitor ($C_1$) is placed in **parallel** with the input resistor ($R_1$).

Let's sketch this out (imagine this on a blackboard):

```
      Vin --- R1 ---+--- Op-Amp (-) --- Vout
                    |
                    Cf
                    |
                   ---
                    |
                   ---
                    |
                  Rf
                    |
       Op-Amp (+) -- Ground
```

*Wait, where's that extra capacitor? Ah, I misspoke!* The typical practical differentiator adds a resistor $R_f$ in series with the feedback capacitor $C_f$, and a small capacitor $C_1$ is added in parallel with the input resistor $R_1$. Let's redraw for clarity.

```
      Vin --- R1 ---+--- Op-Amp (-) --- Vout
                    |         |
                    C1        Rf
                              |
                             ---
                              |
                             Cf
                              |
       Op-Amp (+) -- Ground
```

*Hold on, I think I'm confusing myself with variations. Let's go with the most common and effective practical differentiator first, which addresses the high-frequency gain issue.*

The most effective way to limit the high-frequency gain is by adding a **feedback resistor ($R_f$) in series with the feedback capacitor ($C_f$)**. This effectively creates a low-pass filter characteristic in the feedback path, which limits the gain at very high frequencies.

**Revised Practical Differentiator Circuit:**

```
      Vin --- R1 ---+--- Op-Amp (-) --- Vout
                    |
                    Cf
                    |
                   ---
                    |
                   Rf
                    |
       Op-Amp (+) -- Ground
```

*Okay, this is the core idea. The addition of $R_f$ changes the game.*

**How it Works (Practical):**

1.  **Low-Frequency Operation:** At low frequencies, the impedance of the feedback capacitor $C_f$ (which is $1/(j\omega C_f)$) is very high. The feedback resistor $R_f$ has a constant impedance. Thus, the overall feedback impedance is dominated by $C_f$. The circuit behaves much like the ideal differentiator: $V_{out} \approx -R_f C_f \frac{dV_{in}}{dt}$.
2.  **High-Frequency Operation:** As the frequency increases, the impedance of $C_f$ decreases. Eventually, the impedance of $C_f$ becomes much smaller than $R_f$. At very high frequencies, the feedback path is dominated by $R_f$. This means the gain becomes limited by the ratio $R_f/R_1$, effectively turning the circuit into a simple non-inverting amplifier at extremely high frequencies. This prevents the gain from increasing indefinitely.

**Designing for Stability and Frequency Response:**

The key design choices are $R_1$, $C_f$, and $R_f$. We need to select them carefully to achieve a desired operating range and stability.

*   **The Cutoff Frequency ($f_H$) of the High-Frequency Roll-off:** The addition of $R_f$ creates a low-pass filter characteristic in the feedback loop with a cutoff frequency. This frequency is determined by $R_f$ and $C_f$:
    $f_H = \frac{1}{2\pi R_f C_f}$
    This $f_H$ should be set *below* the frequency where the op-amp's open-loop gain starts to roll off significantly, but *above* the highest frequency of interest in our input signal. This ensures that the differentiator action is preserved for the signal frequencies we care about, while high-frequency noise and potential instability are attenuated.

*   **The "Differentiating" Corner Frequency ($f_C$):** To ensure the circuit acts as a differentiator over a desired range, the impedance of the capacitor $C_f$ must be less than $R_1$ at the highest frequency of interest. The frequency at which $1/(2\pi f C_f) = R_1$ is often called the differentiating corner frequency:
    $f_C = \frac{1}{2\pi R_1 C_f}$
    For good differentiation, we want the signal frequencies to be *above* $f_C$.

*   **Relationship for Proper Operation:** To ensure a wide range of differentiation and avoid excessive peaking in the frequency response, it's generally recommended to have $f_H > f_C$. This means:
    $\frac{1}{2\pi R_f C_f} > \frac{1}{2\pi R_1 C_f}$
    Which simplifies to $R_1 > R_f$. This seems counterintuitive at first glance because we want to amplify the derivative, but remember, the *gain* at low frequencies is determined by $R_f/R_1$.

    *Wait, that's not quite right for the gain. Let's re-evaluate the transfer function.*

    Let's analyze the impedance of the feedback path as $Z_f = R_f + \frac{1}{sC_f} = \frac{sR_f C_f + 1}{sC_f}$.
    The input impedance at the summing junction is $Z_{in} = R_1$.
    The transfer function of the *practical* differentiator is approximately:
    $\frac{V_{out}(s)}{V_{in}(s)} \approx -\frac{Z_f}{Z_{in}} = -\frac{(sR_f C_f + 1)/sC_f}{R_1} = -\frac{R_f C_f}{R_1 C_f} \left( \frac{s + 1/(R_f C_f)}{s} \right)$

    So, $\frac{V_{out}(s)}{V_{in}(s)} \approx -\frac{R_f}{R_1} \left( 1 + \frac{1}{sR_f C_f} \right)$.

    This equation shows:
    *   At low frequencies (large $s$), the term $1/(sR_f C_f)$ dominates, and $\frac{V_{out}(s)}{V_{in}(s)} \approx -\frac{R_f}{R_1} \frac{1}{sR_f C_f} = -\frac{1}{sR_1 C_f}$. This looks like a differentiator, but the "gain constant" involves $R_1$ and $C_f$, not $R_f$ and $C_f$. Hmm, this is confusing.

    Let's go back to the original circuit analysis and consider the voltage at the inverting terminal.
    $V_- = V_{in} \frac{Z_f}{R_1 + Z_f}$
    $V_{out} = -A_{OL} V_-$
    For a *non-ideal* op-amp with finite gain $A_{OL}$ and input impedance $Z_{in\_opamp}$, the analysis gets complicated.
    However, for the practical differentiator we are discussing, where $Z_f$ is in series with $R_f$, the crucial element is how the feedback impedes the current.

    *Let's simplify and focus on the dominant effect.* The feedback loop impedance is $Z_f = R_f + 1/(sC_f)$.
    The circuit equation, assuming the op-amp forces $V_- \approx 0$, is:
    Current through $R_1$: $I_{in} = (V_{in} - 0)/R_1 = V_{in}/R_1$.
    This current flows through the feedback network: $I_{in} = V_{out} / Z_f$.
    So, $V_{in}/R_1 = V_{out} / (R_f + 1/(sC_f))$.
    $V_{out} = \frac{V_{in}}{R_1} (R_f + \frac{1}{sC_f}) = \frac{V_{in}}{R_1} (\frac{sR_f C_f + 1}{sC_f})$.
    $\frac{V_{out}}{V_{in}} = \frac{1}{R_1 C_f} (\frac{sR_f C_f + 1}{s}) = \frac{R_f}{R_1} + \frac{1}{sR_1 C_f}$.

    *Ah, this is the correct transfer function.*
    The term $\frac{1}{sR_1 C_f}$ represents the differentiator action, with a gain constant of $\frac{1}{R_1 C_f}$.
    The term $\frac{R_f}{R_1}$ represents a constant gain offset, which is the gain at very high frequencies.

    So, the frequency response has two important points:
    1.  **The "Differentiator" corner frequency:** This is where the impedance of $C_f$ equals $R_1$. $1/(2\pi f_C C_f) = R_1 \implies f_C = \frac{1}{2\pi R_1 C_f}$. Below this frequency, the capacitor's impedance is high, and the circuit starts deviating from pure differentiation.
    2.  **The "High-Frequency Roll-off" corner frequency:** This is where the impedance of $C_f$ equals $R_f$. $1/(2\pi f_H C_f) = R_f \implies f_H = \frac{1}{2\pi R_f C_f}$. Above this frequency, the feedback is dominated by $R_f$, and the gain becomes a constant $R_f/R_1$.

    *   **Designing for a wide differentiation range:** To ensure good differentiation up to a certain frequency, say $f_{max\_signal}$, we need $f_C$ to be *below* $f_{max\_signal}$. So, $f_C = \frac{1}{2\pi R_1 C_f} < f_{max\_signal}$.
    *   **Ensuring stability:** To prevent excessive gain at high frequencies, we introduce $R_f$. The gain is limited to $R_f/R_1$. We want this limiting gain to be relatively low, but the key is that it *is* limited. The frequency $f_H = \frac{1}{2\pi R_f C_f}$ marks where this limiting occurs. We want $f_H$ to be higher than $f_C$ to maintain a good differentiation region.
        $f_H > f_C \implies \frac{1}{2\pi R_f C_f} > \frac{1}{2\pi R_1 C_f} \implies R_1 > R_f$.

    **Summary of Design Choices:**
    *   Choose $R_1$ and $C_f$ to set the desired differentiating corner frequency $f_C$, based on your signal's bandwidth. A common choice is to set $f_C$ to the lowest frequency component of interest in the signal you want to differentiate.
    *   Choose $R_f$ to set the high-frequency cutoff $f_H$. This $f_H$ must be chosen to be above the highest signal frequency but below the frequency where op-amp instability might occur. Also, ensure $R_1 > R_f$.

**Example:** Let's say we want to differentiate a signal with frequencies up to 1 kHz.
*   We could choose $C_f = 0.1 \mu F$.
*   To set $f_C = 100 Hz$ (meaning we differentiate well above 100 Hz), we can calculate $R_1 = \frac{1}{2\pi f_C C_f} = \frac{1}{2\pi \times 100 \times 0.1 \times 10^{-6}} \approx 15.9 k\Omega$. Let's use $R_1 = 16 k\Omega$.
*   Now, we need to set $f_H$. Let's pick $f_H = 10 kHz$. Then $R_f = \frac{1}{2\pi f_H C_f} = \frac{1}{2\pi \times 10000 \times 0.1 \times 10^{-6}} \approx 1.59 k\Omega$. Let's use $R_f = 1.6 k\Omega$.
*   Check: $R_1 = 16 k\Omega$ and $R_f = 1.6 k\Omega$. Indeed, $R_1 > R_f$.

This practical differentiator circuit will differentiate signals from roughly 100 Hz up to around 10 kHz, with the gain rolling off beyond 10 kHz. Frequencies below 100 Hz will not be differentiated properly.

**What about that $C_1$ parallel to $R_1$?**
You might see circuit diagrams with a small capacitor $C_1$ in parallel with $R_1$. This configuration is another way to limit high-frequency gain. When $C_1$ is in parallel with $R_1$, the input impedance becomes $R_1 || (1/sC_1) = \frac{R_1}{1 + sR_1 C_1}$.
The transfer function becomes: $\frac{V_{out}}{V_{in}} = -\frac{Z_f}{Z_{in}} = -\frac{R_f + 1/(sC_f)}{R_1/(1+sR_1 C_1)} = -\frac{(sR_f C_f + 1)/sC_f}{R_1/(1+sR_1 C_1)} = -\frac{(sR_f C_f + 1)(1+sR_1 C_1)}{sR_1 C_f}$.
This circuit is actually a bit more complex and leads to a more "lagging" response rather than a sharp limiting. The preferred method for limiting high-frequency gain and stabilizing a differentiator is by adding $R_f$ in series with $C_f$. If $C_1$ is added, it's usually to ensure that at very high frequencies where $C_f$ becomes dominant, the circuit doesn't start acting like a pure differentiator again after the $R_f$ roll-off. It's a way to put another "low-pass" element in. However, for introductory practical differentiators, the $R_f$ in series with $C_f$ is the most fundamental approach.

### 4. The Ideal Integrator: A Refresher

Now, let's switch gears to the integrator. An ideal integrator produces an output voltage proportional to the *time integral* of the input voltage. Mathematically, $V_{out} = -\frac{1}{RC} \int V_{in} dt$.

The ideal integrator circuit uses a resistor ($R$) at the input and a capacitor ($C$) in the feedback path. The op-amp, again, tries to maintain virtual ground at its inverting input.

*   **How it works (Ideal):** As the input voltage is applied, current flows through the input resistor and charges or discharges the feedback capacitor. The voltage across the capacitor is $V_C = \frac{1}{C} \int I dt$. Since $I = V_{in}/R$, we get $V_C = \frac{1}{C} \int \frac{V_{in}}{R} dt = \frac{1}{RC} \int V_{in} dt$. Because the inverting terminal is at virtual ground, $V_{out} = -V_C$.

### 5. The Problems with Ideal Integrators in Practice

The ideal integrator, while powerful, also suffers from practical issues, primarily related to **DC gain** and **input offset voltage**.

*   **DC Gain Issue:** The transfer function of an ideal integrator is $V_{out}(s) / V_{in}(s) = -1/(sRC)$. Notice the $1/s$ term in the denominator. What happens when $s \to 0$ (i.e., at DC, or very low frequencies)? The gain $1/(sRC)$ tends towards infinity!
    *   **Saturation:** Real op-amps have a finite DC gain. If there's any small DC offset voltage at the input (from the op-amp itself, or the input signal), it will be amplified by this infinite DC gain. This amplified DC offset will cause the output to saturate at either the positive or negative power supply rail. Imagine a tiny ripple on a perfectly still pond – an integrator will try to amplify that ripple into a tsunami!
    *   **Drift:** Even without an explicit DC input, op-amp input offset voltages and bias currents will cause a DC current to flow through the feedback capacitor, leading to a gradual drift in the output voltage towards saturation.

*   **Input Offset Voltage and Current:** As mentioned, op-amps are not perfect. They have small DC voltages (input offset voltage) and currents (input bias current) at their input terminals. In an integrator circuit, these small DC values are integrated over time, causing the output to drift.

### 6. The Practical Integrator Circuit

To make our integrator circuit usable in the real world, we need to address the DC gain problem. The most common solution is to **limit the DC gain**.

**Circuit Configuration:**

The most common practical integrator circuit adds a resistor ($R_f$) in **parallel** with the feedback capacitor ($C_f$).

**Circuit Diagram:**

```
      Vin --- R ---+--- Op-Amp (-) --- Vout
                   |         |
                   Cf       Rf
                   |         |
       Op-Amp (+) -- Ground
```

*Let's visualize this. A resistor at the input, a capacitor and a parallel resistor in the feedback path.*

**How it Works (Practical):**

1.  **Low-Frequency Operation (Integration-like):** For frequencies where the capacitive reactance of $C_f$ ($1/(j\omega C_f)$) is much smaller than the resistance of $R_f$, the feedback path is dominated by $C_f$. In this region, the circuit behaves very much like an ideal integrator: $V_{out} \approx -\frac{1}{RC} \int V_{in} dt$.
2.  **High-Frequency Operation (Low-Pass Filtering):** As the frequency increases, the impedance of $C_f$ decreases. Eventually, $C_f$ becomes much smaller than $R_f$. At very high frequencies, the feedback impedance is dominated by $R_f$. The circuit then acts like a simple inverting amplifier with a gain of $-R_f/R$.
3.  **DC Operation (Gain Limitation):** At DC ($f=0$, $s=0$), the capacitor $C_f$ has infinite impedance. However, the resistor $R_f$ has a finite impedance. The feedback impedance at DC is simply $R_f$. Therefore, the DC gain of the circuit is limited to $-R_f/R$. This prevents the output from saturating due to DC input offsets or bias currents.

**Designing for Integration and Stability:**

The choice of $R$, $C_f$, and $R_f$ is crucial.

*   **The "Integration" Corner Frequency ($f_C$):** This is the frequency below which the capacitor's impedance equals the resistor $R_f$. This frequency defines the lower limit of the integration region.
    $1/(2\pi f_C C_f) = R_f \implies f_C = \frac{1}{2\pi R_f C_f}$.
    For the circuit to act as an integrator for signals up to a certain frequency, say $f_{max\_signal}$, we need $f_C$ to be *below* $f_{max\_signal}$. Thus, we want $f_C \ll f_{max\_signal}$. A common rule of thumb is to set $f_C$ at least a decade below the lowest frequency of interest in the input signal.

*   **The Input Resistor ($R$) and Feedback Capacitor ($C_f$):** These determine the integration constant $1/RC$. To get a higher gain (meaning the output changes more rapidly for a given input), you would use a smaller $R$ or a smaller $C_f$.

*   **Relationship for Proper Operation:** For good integration over a broad range of frequencies, the integration region must be significantly larger than the region where the circuit acts as a simple amplifier. This means $f_C$ should be significantly lower than the frequencies of the signal we want to integrate.

**Summary of Design Choices:**

*   Choose $R_f$ and $C_f$ to set the lower frequency limit $f_C$ (the frequency at which the circuit starts to behave like a differentiator, or rather, where the integration term dominates). A smaller $f_C$ means a wider integration range. $f_C = \frac{1}{2\pi R_f C_f}$.
*   Choose $R$ and $C_f$ to set the integration constant $1/RC$.

**Example:** Let's say we want to integrate a signal that has significant components down to 100 Hz.
*   We want the integration to be effective down to 100 Hz. So, we set our lower corner frequency $f_C$ much lower, say at 10 Hz.
*   Let's choose $C_f = 0.1 \mu F$.
*   Using $f_C = 10 Hz$, we can find $R_f = \frac{1}{2\pi f_C C_f} = \frac{1}{2\pi \times 10 \times 0.1 \times 10^{-6}} \approx 159 k\Omega$. Let's use $R_f = 160 k\Omega$.
*   Now, we need to choose $R$ to set the integration constant. Let's say we want the output to increase by 1V for every 10ms of a constant 1V input (i.e., $1/RC = 100$, or $RC = 0.01$).
*   If we choose $R = 100 k\Omega$, then $RC = 100 k\Omega \times 0.1 \mu F = 10 ms$. This gives us an integration constant of $1/RC = 100 V/Vs$. So, $V_{out} = -100 \int V_{in} dt$.

This practical integrator circuit will integrate signals effectively down to about 10 Hz. Below 10 Hz, the feedback is dominated by $R_f$, and the circuit starts behaving like an inverting amplifier with a gain of $-R_f/R = -160k/100k = -1.6$. This prevents saturation and drift.

**Alternative "Practical" Integrator (Less Common but Sometimes Discussed):**

Another way to limit the DC gain is to place a **small capacitor $C_1$ in series with the input resistor $R$**.

*   **Circuit Diagram:**
    ```
          Vin ---+--- R ---+--- Op-Amp (-) --- Vout
                 |       |
                 C1     Cf
                 |       |
       Op-Amp (+) -- Ground
    ```

*   **How it works:** At DC, the capacitor $C_1$ has infinite impedance, so no current flows, and $V_{out} = 0$. At frequencies where $1/(j\omega C_1)$ is small compared to $R$, the circuit acts like an integrator. However, this configuration essentially turns the integrator into a differentiator at high frequencies because of the $1/(sC_1)$ term appearing in the numerator of the transfer function if analyzed carefully. This is usually *not* what we want if we're trying to build a stable integrator that can handle signals over a wide bandwidth. The $R_f$ in parallel with $C_f$ method is far more common and effective for a practical integrator.

### 7. Connecting to Course Outcomes

Let's recap how this relates to our course objectives:

*   **CO4: Explain the basic concepts of Operational amplifier (OPAMP).** Understanding the limitations of ideal circuits (infinite DC gain for integrators, high-frequency gain for differentiators) and how op-amp imperfections (offset voltage, bias current) affect performance directly enhances our understanding of op-amps as real-world devices.
*   **CO5: Design and develop various OPAMP application circuits.** This is the core of today's topic. We've learned how to take the theoretical differentiator and integrator and modify them to create practical, stable circuits. This involves choosing component values based on desired frequency response, signal characteristics, and stability criteria – the essence of circuit design.

### 8. Common Pitfalls and Exam Tips

*   **Differentiator:** Remember that the ideal differentiator amplifies high-frequency noise. The practical version *must* include a mechanism to limit high-frequency gain. The most common is the feedback resistor ($R_f$) in series with $C_f$. Be able to explain *why* it's needed (stability, noise) and *how* it works (limits gain at high frequencies). Know the formulas for $f_C$ and $f_H$ and how $R_1 > R_f$ is generally preferred for a good differentiation range.
*   **Integrator:** The biggest issue with ideal integrators is **DC gain**. The practical version *must* have a way to limit DC gain. The most common method is the parallel resistor ($R_f$) across the feedback capacitor ($C_f$). Know that this resistor sets the DC gain to $-R_f/R$ and also defines a corner frequency $f_C = 1/(2\pi R_f C_f)$ below which the circuit starts to deviate from integration. You need to choose $f_C$ to be well below your signal's lowest frequency.
*   **Component Selection:** For both circuits, the choice of components ($R, C, R_f$) depends on the desired frequency range and the signal you are processing. There isn't a single "right" set of values; it's about matching the circuit to the application.
