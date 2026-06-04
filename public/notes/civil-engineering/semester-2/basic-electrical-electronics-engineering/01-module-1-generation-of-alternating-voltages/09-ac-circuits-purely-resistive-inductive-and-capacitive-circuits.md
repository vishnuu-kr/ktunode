---
title: "AC circuits : Purely resistive, inductive and capacitive circuits"
subject: "BASIC ELECTRICAL & ELECTRONICS ENGINEERING"
module: "Module 1: Generation of alternating voltages : "
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912dee"
status: "completed"
scrapedAt: "2026-05-20T18:32:36.341Z"
---
## Module 1: Generation of Alternating Voltages – AC Circuits: Purely Resistive, Inductive, and Capacitive Circuits

Welcome everyone! Today, we're diving into the fascinating world of AC (Alternating Current) circuits. We've already touched upon how alternating voltages are generated, and now we'll explore how these voltages behave when they interact with different fundamental circuit components: resistors, inductors, and capacitors. Understanding these purely reactive and resistive circuits is the bedrock for analyzing more complex AC circuits later on. Think of it as learning your ABCs before you can write a novel.

Our primary goal here is to understand how AC voltage and current interact with these components, looking at aspects like their magnitude, direction, and crucially, their *phase relationship*. This is where AC circuits get interesting and a bit different from the DC circuits we might be more familiar with.

**Connecting to Course Outcomes:**

Before we jump in, let's see how this topic directly ties into our course objectives. By the end of this session, you'll be able to:

*   **CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits (Knowledge Level: K2)** - We’ll be using Ohm’s Law and Kirchhoff’s laws, but adapting them for the AC context. We’ll also be looking at impedance, a concept vital for AC circuit analysis.
*   **CO2: Develop an awareness on the fundamentals of electric power generation, transmission and distribution (Knowledge Level: K3)** - While this topic focuses on circuits, the principles of AC voltage and current behavior are fundamental to how electricity is generated and transmitted efficiently.
*   **CO4: Describe the fundamental concepts of electronic components and devices (Knowledge Level: K2)** - We’ll be detailing the behavior of resistors, inductors, and capacitors when subjected to AC signals, which are the building blocks of many electronic systems.

Let's get started!

### 1. The Nature of AC Voltage and Current

Remember, AC voltage and current are constantly changing in magnitude and direction, typically following a sinusoidal pattern. We represent this as:

*   **Instantaneous Voltage:** $v(t) = V_m \sin(\omega t + \phi_v)$
*   **Instantaneous Current:** $i(t) = I_m \sin(\omega t + \phi_i)$

Where:
*   $V_m$ and $I_m$ are the **peak values** of voltage and current, respectively.
*   $\omega$ is the **angular frequency** (in radians per second), related to the frequency $f$ (in Hertz) by $\omega = 2\pi f$.
*   $t$ is **time**.
*   $\phi_v$ and $\phi_i$ are the **phase angles** of voltage and current, respectively.

The difference between these phase angles, $(\phi_v - \phi_i)$, tells us about the **phase relationship** between the voltage and current. This phase relationship is absolutely key in AC circuits and depends entirely on the circuit elements present.

**Think of it like this:** Imagine a perfectly smooth, oscillating wave, like the movement of a swing. That’s our AC signal. But the swing doesn’t just move back and forth; its position (voltage) and speed (current) are related. In AC circuits, how the "speed" (current) relates to the "position" (voltage) depends on what the swing is interacting with.

### 2. The Purely Resistive Circuit

Let's start with the simplest case: a circuit containing only a resistor connected to an AC voltage source.

**What happens?**

When an AC voltage is applied across a resistor, the current that flows through it is also alternating. Ohm's Law, $v = iR$, still holds true for instantaneous values.

*   If $v(t) = V_m \sin(\omega t)$, then $i(t) = \frac{v(t)}{R} = \frac{V_m \sin(\omega t)}{R}$.
*   Since $I_m = \frac{V_m}{R}$, we have $i(t) = I_m \sin(\omega t)$.

**The Key Insight:** Notice that both the voltage and current waveforms have the same angular frequency and the *same phase angle*. This means that in a purely resistive circuit, the **voltage and current are in phase**. When the voltage reaches its peak, the current also reaches its peak. When the voltage is zero, the current is also zero.

**Visualization:**

Imagine a graph with time on the horizontal axis and voltage/current on the vertical axis. In a purely resistive circuit, the sine wave for voltage and the sine wave for current would be perfectly aligned. They rise and fall together.

**Real-world Analogy:** Think of pushing a heavy box across a smooth, flat floor. The harder you push (voltage), the faster the box moves (current). The effort you put in and the resulting motion are directly proportional and happen at the same time. There's no delay or anticipation.

**From Textbooks (Kothari & Nagrath, Schaum's):** D.P. Kothari and I.J. Nagrath, in their foundational texts, emphasize that the power dissipated in a resistor is $P = I^2R$ or $P = V^2/R$. For AC circuits, we use RMS (Root Mean Square) values for current and voltage to calculate average power, which is $P_{avg} = V_{rms} \times I_{rms} = \frac{V_{rms}^2}{R} = I_{rms}^2 R$. This is the same as in DC circuits, and all the power is dissipated as heat.

**Exam Point:** Always remember that in a purely resistive AC circuit, the phase angle between voltage and current is **zero degrees**. This is a crucial takeaway.

### 3. The Purely Inductive Circuit

Now, let's consider a circuit with only an inductor connected to an AC voltage source. This is where things start to get interesting!

**What happens?**

An inductor opposes changes in current. This opposition is called **inductive reactance** ($X_L$), and it depends on the frequency of the AC source and the inductance of the coil ($L$).

*   The inductive reactance is given by: $X_L = \omega L = 2\pi fL$. Its unit is Ohms ($\Omega$).
*   The relationship between voltage and current across an inductor is $v(t) = L \frac{di(t)}{dt}$.

Now, if we apply a sinusoidal voltage $v(t) = V_m \sin(\omega t)$, the current will be such that its derivative, when multiplied by $L$, gives us the voltage. This implies a sinusoidal current, but with a phase shift.

Through calculus (which we won't get too deep into here, but it's derived from the voltage-current relationship), we find that the current lags the voltage by **90 degrees** (or $\pi/2$ radians).

*   If $v(t) = V_m \sin(\omega t)$, then $i(t) = I_m \sin(\omega t - 90^\circ)$.
*   The peak current $I_m$ is related to the peak voltage by $I_m = \frac{V_m}{X_L}$.

**The Key Insight:** In a purely inductive circuit, the **current lags the voltage by 90 degrees**. This means the current reaches its peak *after* the voltage has reached its peak.

**Visualization:**

On our graph, the current sine wave would be shifted to the right by a quarter of a cycle compared to the voltage sine wave. When voltage is at its peak, the current is at zero. When voltage is zero and falling, current is at its negative peak.

**Real-world Analogy:** Imagine trying to push a massive, heavy flywheel. When you start pushing (voltage applied), it takes a moment for the flywheel to start moving and gain speed (current). It doesn't instantly reach full speed. Your pushing effort is ahead of the flywheel's actual motion. Similarly, if you stop pushing, the flywheel will continue to spin for a while due to its inertia. This "inertia" to change in motion is analogous to how an inductor resists changes in current. The larger the flywheel (inductance) and the faster you try to change your push (higher frequency), the harder it is to get it moving instantly.

**From Textbooks (Boylestad, Saha et al.):** Textbooks like Boylestad's "Electronic Devices and Circuit Theory" and Saha's "Basic Electronics" would explain that inductors store energy in a magnetic field. This energy storage and release is what causes the phase shift. The opposition to current is frequency-dependent ($X_L \propto f$). At very low frequencies (approaching DC), $X_L$ is low, and the inductor acts almost like a short circuit. At very high frequencies, $X_L$ is very high, and it acts almost like an open circuit.

**Exam Point:** The defining characteristic of a purely inductive circuit is that the current **lags** the voltage by **90 degrees**. Also, remember $X_L = \omega L$.

### 4. The Purely Capacitive Circuit

Finally, let's examine a circuit containing only a capacitor connected to an AC voltage source.

**What happens?**

A capacitor opposes changes in voltage. This opposition is called **capacitive reactance** ($X_C$). It depends on the frequency of the AC source and the capacitance ($C$).

*   The capacitive reactance is given by: $X_C = \frac{1}{\omega C} = \frac{1}{2\pi fC}$. Its unit is also Ohms ($\Omega$).
*   The relationship between current and voltage across a capacitor is $i(t) = C \frac{dv(t)}{dt}$.

If we apply a sinusoidal voltage $v(t) = V_m \sin(\omega t)$, the current will be such that when integrated (the opposite of differentiation), it gives us the voltage. This again results in a sinusoidal current, but with a different phase shift.

The calculus shows that in a purely capacitive circuit, the **current leads the voltage by 90 degrees** (or $\pi/2$ radians).

*   If $v(t) = V_m \sin(\omega t)$, then $i(t) = I_m \sin(\omega t + 90^\circ)$.
*   The peak current $I_m$ is related to the peak voltage by $I_m = \frac{V_m}{X_C}$.

**The Key Insight:** In a purely capacitive circuit, the **current leads the voltage by 90 degrees**. This means the current reaches its peak *before* the voltage reaches its peak.

**Visualization:**

On our graph, the current sine wave would be shifted to the left by a quarter of a cycle compared to the voltage sine wave. When voltage is at its peak, the current is at zero. When voltage is zero and rising, current is at its positive peak.

**Real-world Analogy:** Imagine trying to fill a balloon with air using a pump. If you apply a sudden puff of air (voltage change), the balloon (capacitor) doesn't instantly inflate to its full size. It takes time for the air to fill it. However, the flow of air (current) into the balloon happens *before* the pressure inside the balloon (voltage) builds up significantly. The faster you pump (higher frequency), the more air (current) flows through the pump for a given pressure change, because the balloon has less time to charge up and oppose the flow.

**From Textbooks (Kennedy & Davis, Bhargava et al.):** Electronic communication texts like Kennedy and Davis, and foundational electronics books like Bhargava, Kulshreshtha, and Gupta, highlight that capacitors store energy in an electric field. This charging and discharging action is what causes the phase lead. The capacitive reactance is inversely proportional to frequency ($X_C \propto 1/f$). At very low frequencies (approaching DC), $X_C$ is very high, and the capacitor acts almost like an open circuit. At very high frequencies, $X_C$ is very low, and it acts almost like a short circuit.

**Exam Point:** The defining characteristic of a purely capacitive circuit is that the current **leads** the voltage by **90 degrees**. Also, remember $X_C = \frac{1}{\omega C}$.

### 5. Summarizing the Phase Relationships

It’s super important to have these fundamental phase relationships crystal clear. Let's summarize them:

*   **Purely Resistive Circuit:** Voltage and Current are **in phase** (0° difference).
*   **Purely Inductive Circuit:** Current **lags** Voltage by **90°**.
*   **Purely Capacitive Circuit:** Current **leads** Voltage by **90°**.

**Why is this important?** This phase difference affects how AC power is delivered and consumed. When voltage and current are out of phase, the instantaneous power (the product of instantaneous voltage and current) fluctuates, and the *average* power delivered might be less than what you'd expect based on RMS values alone. This concept leads us to power factor, which we’ll discuss later. For now, just nail down these phase angles.

### 6. Impedance (A Glimpse Ahead)

While this topic focuses on pure circuits, it’s worth mentioning that the total opposition to current flow in an AC circuit is called **impedance**, denoted by the symbol $Z$. It's a more general concept than just resistance or reactance, and it includes both magnitude and phase.

*   For a resistor, $Z = R$ (purely real, 0° phase).
*   For an inductor, $Z = jX_L$ (purely imaginary, +90° phase, using 'j' for the imaginary unit in electrical engineering).
*   For a capacitor, $Z = -jX_C$ (purely imaginary, -90° phase).

We’ll explore impedance in much greater detail when we look at series and parallel combinations of these components.

### Sample Questions and Answers

Here are a few questions to test your understanding and help you prepare for exams:

**Question 1 (Conceptual):** In a purely inductive AC circuit, what is the phase relationship between the voltage across the inductor and the current through it?

**Answer:** In a purely inductive circuit, the current **lags** the voltage by **90 degrees**. This is because the inductor opposes any change in current, and for a sinusoidal voltage, the current changes in such a way that it reaches its peak value a quarter cycle *after* the voltage reaches its peak.

**Question 2 (Conceptual/Exam-Oriented):** If the frequency of the AC supply to a capacitor is increased, what happens to its capacitive reactance ($X_C$)?

**Answer:** Capacitive reactance is given by $X_C = \frac{1}{2\pi fC}$. From this formula, we can see that $X_C$ is inversely proportional to frequency ($f$). Therefore, if the frequency is increased, the capacitive reactance $X_C$ will **decrease**.

**Question 3 (Numerical/Exam-Oriented):** An AC voltage of $v(t) = 100 \sin(314t)$ V is applied to a purely resistive coil of resistance 50 $\Omega$. What is the RMS value of the current through the coil?

**Answer:**
First, identify the given values:
*   Peak voltage $V_m = 100$ V.
*   Angular frequency $\omega = 314$ rad/s (This means $f = 314 / (2\pi) \approx 50$ Hz, though we don't strictly need $f$ for this calculation).
*   Resistance $R = 50$ $\Omega$.

For AC circuits, we often work with RMS values. The RMS voltage is $V_{rms} = \frac{V_m}{\sqrt{2}}$.
$V_{rms} = \frac{100}{\sqrt{2}}$ V.

Using Ohm's Law for RMS values: $I_{rms} = \frac{V_{rms}}{R}$.
$I_{rms} = \frac{100/\sqrt{2}}{50} = \frac{100}{50\sqrt{2}} = \frac{2}{\sqrt{2}} = \sqrt{2}$ A.

So, the RMS value of the current is approximately 1.414 A.

**Question 4 (Conceptual/Application):** Why is it important to understand phase relationships in AC circuits when transmitting power over long distances?

**Answer:** Understanding phase relationships is crucial for determining the power delivered to a load. In AC circuits, average power is not simply $V_{rms} \times I_{rms}$, but rather $P_{avg} = V_{rms} \times I_{rms} \times \cos(\phi)$, where $\phi$ is the phase angle between voltage and current. If the current and voltage are out of phase (as in inductive or capacitive circuits), the term $\cos(\phi)$ (the power factor) is less than 1. This means that for the same RMS voltage and current, less real power is delivered. In power transmission, maintaining a good power factor (close to 1) is essential for efficient power delivery and minimizing losses. Inductive loads, common in industries, often cause a lagging power factor, which needs to be corrected.

Keep practicing these concepts, and don't hesitate to ask questions! Understanding these basic building blocks will make tackling more complex AC circuits much easier.
