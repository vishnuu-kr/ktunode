---
title: "Generation of alternating voltages - Representation of sinusoidal waveforms: frequency, period, average value, RMS value and form factor - numerical problems"
subject: "INTRODUCTION TO ELECTRICAL AND ELECTRONICS ENGINEERING"
module: "Module 2: Electromagnetic Induction :"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f94a7"
status: "completed"
scrapedAt: "2026-05-23T16:02:29.899Z"
---
# Module 2: Electromagnetic Induction - Generation of Alternating Voltages and Sinusoidal Waveforms

Welcome, everyone, to our journey into the fascinating world of electrical engineering! In this module, we're going to delve into one of the most fundamental concepts that powers our modern world: **Electromagnetic Induction** and specifically, how we **Generate Alternating Voltages**. This is where the magic happens that allows us to light up our homes, power our devices, and indeed, create the entire electrical grid we rely on.

## 1. The Genesis of Alternating Voltages: Electromagnetic Induction in Action

Remember Faraday's Law of Electromagnetic Induction? If not, let's quickly recap. It states that a changing magnetic flux through a circuit induces an electromotive force (EMF), which we also call voltage. This is the cornerstone of generating electricity, and particularly, alternating current (AC) electricity.

**How does this lead to AC voltage?**

Imagine a simple coil of wire spinning within a stationary magnetic field, or alternatively, a magnet spinning near a stationary coil. As the coil rotates, the magnetic flux passing through it continuously changes. The flux is maximum when the coil's plane is perpendicular to the magnetic field lines and zero when it's parallel. This continuous change in flux, as the coil rotates, induces a voltage in the coil.

Now, think about the nature of this change. As the coil spins, the flux doesn't just increase and decrease linearly; it follows a pattern. When the coil is rotating at a constant speed, this pattern is a **sinusoidal waveform**. That's why AC voltage is so prevalent – it arises naturally from the basic principles of rotating machinery, like generators.

*   **Connecting to Course Outcomes:** This directly relates to **CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits**. Understanding *how* AC voltage is generated is the first step to analyzing circuits powered by it. It also touches upon **CO2: Classify series and magnetic circuits**, as the magnetic field is crucial for induction.

**Analogy Time:** Think of a merry-go-round. As you sit on one of the horses, your distance from the center continuously changes. If we consider the horse's position as analogous to the coil's orientation and the merry-go-round's rotation as constant speed, the induced voltage is like a force that keeps pushing you back and forth. It's not a steady push in one direction; it's a push that reverses periodically.

## 2. Representing the Rhythm: Sinusoidal Waveforms

So, we've established that the generated voltage is sinusoidal. But what exactly does that mean, and how do we describe it precisely? A sinusoidal waveform is a smooth, repetitive oscillation that can be described by a sine or cosine function.

A general equation for a sinusoidal voltage (or current) can be written as:

$v(t) = V_m \sin(\omega t + \phi)$

Let's break down these components, as they are vital for understanding AC signals:

*   **$v(t)$**: This represents the instantaneous voltage at any given time $t$. It's the value of the voltage right *now*.
*   **$V_m$ (Peak Value or Amplitude)**: This is the maximum voltage that the waveform reaches during its cycle. It's the highest point on the "hump" of the sine wave.
    *   **Real-world connection:** Imagine the voltage from your wall socket. It doesn't stay at 240V (or 120V in some regions) constantly. It swings up to a peak value, then down to zero, then to a negative peak, and back to zero. $V_m$ is that highest positive or lowest negative value it reaches.
*   **$\omega$ (Angular Frequency)**: This tells us how fast the waveform is oscillating in radians per second. It's related to how many "cycles" happen per second.
*   **$t$ (Time)**: The independent variable, simply indicating the moment in time we are considering.
*   **$\phi$ (Phase Angle)**: This is like a starting point for the waveform. It tells us where in its cycle the waveform begins at time $t=0$. A phase angle of zero means the waveform starts at zero and is increasing. A different phase angle means it's starting at some other point in its cycle.
    *   **Analogy:** Think of two people starting a race. If they start at the same line, their progress is "in phase." If one person gets a head start, they are "out of phase." The phase angle quantifies this difference.

### 2.1 Key Descriptors of Sinusoidal Waveforms

To truly understand and work with AC signals, we need to quantify their characteristics.

#### 2.1.1 Frequency ($f$) and Period ($T$)

These two are intimately related and describe the *speed* of the oscillation.

*   **Period ($T$)**: This is the time it takes for one complete cycle of the waveform to occur. It's measured in seconds (s).
    *   **Visualize:** Think of a complete "up and down" movement of the sine wave. That whole journey from one point to the next identical point is the period.
*   **Frequency ($f$)**: This is the number of complete cycles that occur in one second. It's measured in Hertz (Hz).
    *   **The Relationship:** Frequency and period are inversely proportional. If something happens very frequently, the time for each occurrence (the period) will be short, and vice versa.
        *   $f = 1/T$
        *   $T = 1/f$
    *   **Connecting Angular Frequency:** We also see the relationship between angular frequency ($\omega$) and regular frequency ($f$). One full cycle corresponds to $2\pi$ radians. So, if there are $f$ cycles per second, the total angle covered per second is $2\pi f$ radians.
        *   $\omega = 2\pi f$
    *   **Real-world context:** The standard frequency for AC power in most of the world is 50 Hz or 60 Hz. This means the waveform completes 50 or 60 cycles every second! Your lights flicker, but so fast you can't see it.

#### 2.1.2 Average Value ($V_{avg}$ or $I_{avg}$)

The average value of a waveform over a complete cycle is a measure of its "DC equivalent" value. For a symmetrical waveform like a pure sine wave, the positive half-cycle is exactly the opposite of the negative half-cycle.

*   **Definition:** The average value of a periodic waveform over one period is given by the integral of the waveform over one period, divided by the period:
    $V_{avg} = \frac{1}{T} \int_{0}^{T} v(t) dt$
*   **For a pure sine wave:** If we integrate a sine wave over a full cycle (0 to $2\pi$ radians, or 0 to $T$ seconds), the positive area and the negative area cancel each other out perfectly.
    *   **Therefore, for a pure sinusoidal waveform, the average value over a complete cycle is ZERO.**
*   **Average Value of the Rectified Wave:** Often, we are interested in the average of the *rectified* waveform, meaning we only consider the positive half-cycles. This is important for DC power supplies. For a sinusoidal voltage $v(t) = V_m \sin(\omega t)$, the average of the positive half-cycle (from 0 to $\pi$ or 0 to $T/2$) is:
    $V_{avg(half-cycle)} = \frac{1}{T/2} \int_{0}^{T/2} V_m \sin(\omega t) dt = \frac{2V_m}{T} \left[ -\frac{\cos(\omega t)}{\omega} \right]_0^{T/2}$
    Since $\omega = 2\pi/T$, $\omega T/2 = \pi$.
    $V_{avg(half-cycle)} = \frac{2V_m}{T} \left( -\frac{\cos(\pi)}{\omega} - (-\frac{\cos(0)}{\omega}) \right) = \frac{2V_m}{T\omega} (-\cos(\pi) + \cos(0))$
    $V_{avg(half-cycle)} = \frac{2V_m}{T(2\pi/T)} (-(-1) + 1) = \frac{2V_m}{2\pi} (1+1) = \frac{2V_m}{\pi}$
    So, $V_{avg(half-cycle)} = \frac{2}{\pi} V_m \approx 0.637 V_m$.
    *   **Important Note:** Unless specified otherwise, "average value" for a complete AC cycle usually implies zero. If they mean the average of the rectified waveform, they'll typically state "average value of the rectified waveform" or "average of the absolute value." Be mindful of the wording in problems!
*   **Connection to CO1:** This concept is crucial for understanding how AC signals behave and how they can be converted to DC using rectifiers.

#### 2.1.3 RMS Value ($V_{rms}$ or $I_{rms}$)

The Root Mean Square (RMS) value is perhaps the most important characteristic of an AC waveform for practical power applications. It represents the equivalent DC voltage (or current) that would produce the same amount of heat in a resistive load.

*   **Definition:** The RMS value is the square root of the mean of the square of the waveform over one period.
    $V_{rms} = \sqrt{\frac{1}{T} \int_{0}^{T} [v(t)]^2 dt}$
*   **For a pure sine wave:** Let $v(t) = V_m \sin(\omega t)$.
    $[v(t)]^2 = V_m^2 \sin^2(\omega t)$
    We use the trigonometric identity: $\sin^2(\theta) = \frac{1 - \cos(2\theta)}{2}$
    So, $[v(t)]^2 = V_m^2 \frac{1 - \cos(2\omega t)}{2}$
    Now, we integrate this over one period $T$:
    $\int_{0}^{T} V_m^2 \frac{1 - \cos(2\omega t)}{2} dt = \frac{V_m^2}{2} \int_{0}^{T} (1 - \cos(2\omega t)) dt$
    $= \frac{V_m^2}{2} \left[ t - \frac{\sin(2\omega t)}{2\omega} \right]_0^{T}$
    Since $\omega = 2\pi/T$, $2\omega T = 4\pi$. So, $\sin(2\omega T) = \sin(4\pi) = 0$, and $\sin(0)=0$.
    The integral evaluates to $\frac{V_m^2}{2} [T - 0] = \frac{V_m^2 T}{2}$.
    Now we take the mean: $\frac{1}{T} \left(\frac{V_m^2 T}{2}\right) = \frac{V_m^2}{2}$.
    Finally, we take the square root for the RMS value:
    $V_{rms} = \sqrt{\frac{V_m^2}{2}} = \frac{V_m}{\sqrt{2}}$
*   **The Key Takeaway for Sine Waves:**
    *   $V_{rms} = \frac{V_m}{\sqrt{2}} \approx 0.707 V_m$
    *   Similarly, $I_{rms} = \frac{I_m}{\sqrt{2}} \approx 0.707 I_m$
*   **Why is RMS so important?** Power dissipation in a resistor is given by $P = I^2R$ or $P = V^2/R$. Since AC current and voltage are constantly changing, we can't use the peak value directly to calculate power. The RMS value gives us a constant equivalent DC value that results in the same power dissipation. When your electricity bill says you're using 240V, they mean 240V RMS.
    *   **Example:** If you have a 100W light bulb designed for 240V RMS, it means that when connected to a 240V RMS source, it will dissipate 100W of power. The peak voltage would be $240 \times \sqrt{2} \approx 339$V!
*   **Connection to CO1:** This is absolutely critical for AC circuit analysis and power calculations. All power formulas ($P=VI$, $P=I^2R$, $P=V^2/R$) use RMS values for AC quantities.

#### 2.1.4 Form Factor (FF)

The form factor is another parameter that describes the shape of a waveform. It's the ratio of the RMS value to the average value (of the rectified waveform).

*   **Definition:** $FF = \frac{V_{rms}}{V_{avg(half-cycle)}}$
*   **For a pure sine wave:**
    $FF = \frac{V_m/\sqrt{2}}{2V_m/\pi} = \frac{\pi}{2\sqrt{2}} \approx \frac{3.14159}{2 \times 1.41421} \approx \frac{3.14159}{2.82842} \approx 1.11$
*   **Significance:** The form factor helps characterize the waveform's shape. For non-sinusoidal waveforms, the form factor will be different. For example, a square wave has a form factor of 1, meaning its RMS value is equal to its average value (over a half-cycle, or its peak value if it's symmetrical square wave).
    *   **Think about it:** A square wave is "more like DC" in its average behavior compared to a sine wave, hence the lower form factor.
*   **Connection to CO1:** While not as directly used in basic calculations as RMS, it's a useful descriptor, especially when comparing different types of AC waveforms.

## 3. Numerical Problems and Practice

Now, let's put these concepts into practice with some examples. This is where you'll really solidify your understanding, and how these questions often appear in exams.

**General Approach to Problems:**

1.  **Identify the waveform:** Is it a pure sine wave? Is there a phase shift?
2.  **Extract given values:** What is the peak voltage ($V_m$)? What is the frequency ($f$)?
3.  **Determine what's asked:** Are they asking for frequency, period, peak value, RMS value, or average value?
4.  **Apply the correct formulas:** Use the relationships we've discussed.

---

**Problem 1: Basic Sine Wave Analysis**

A sinusoidal voltage is given by $v(t) = 170 \sin(314t)$ Volts. Determine:
a) The peak voltage ($V_m$)
b) The frequency ($f$)
c) The period ($T$)
d) The RMS voltage ($V_{rms}$)
e) The average value over a complete cycle ($V_{avg}$)
f) The average value of the positive half-cycle ($V_{avg(half-cycle)}$)

**Solution:**

We compare the given equation $v(t) = 170 \sin(314t)$ with the general form $v(t) = V_m \sin(\omega t)$.

a)  **Peak Voltage ($V_m$)**: By direct comparison, $V_m = 170$ Volts.
    *   *Exam Tip:* This is the most straightforward part. Just match the amplitude.

b)  **Frequency ($f$)**: We know $\omega = 314$ rad/s. The relationship is $\omega = 2\pi f$.
    So, $f = \frac{\omega}{2\pi} = \frac{314}{2\pi} \approx \frac{314}{2 \times 3.14159} \approx \frac{314}{6.28318} \approx 50$ Hz.
    *   *Common Pitfall:* Students sometimes forget to divide by $2\pi$ and just take $\omega$ as frequency. Remember $\omega$ is angular frequency (radians/sec), while $f$ is frequency (Hz or cycles/sec).

c)  **Period ($T$)**: Using the relationship $T = 1/f$.
    $T = \frac{1}{50 \text{ Hz}} = 0.02$ seconds, or 20 milliseconds (ms).
    *   *Quick Check:* Does $T = 2\pi/\omega$? $T = 2\pi/314 \approx 6.28318/314 \approx 0.02$ s. Yes, it matches.

d)  **RMS Voltage ($V_{rms}$)**: For a sine wave, $V_{rms} = \frac{V_m}{\sqrt{2}}$.
    $V_{rms} = \frac{170}{\sqrt{2}} \approx \frac{170}{1.41421} \approx 120.2$ Volts.
    *   *Exam Focus:* This is a very common calculation. Always remember the $\sqrt{2}$ factor.

e)  **Average Value over a Complete Cycle ($V_{avg}$)**: For a pure sinusoidal waveform, the average value over a complete cycle is always **ZERO**. This is because the positive and negative half-cycles cancel each other out.
    *   *Crucial point:* Always assume zero for average value of a pure sine wave over a full cycle unless the question specifies otherwise (e.g., "average of the absolute value").

f)  **Average Value of the Positive Half-Cycle ($V_{avg(half-cycle)}$)**: For a sine wave, $V_{avg(half-cycle)} = \frac{2V_m}{\pi}$.
    $V_{avg(half-cycle)} = \frac{2 \times 170}{\pi} = \frac{340}{\pi} \approx \frac{340}{3.14159} \approx 108.2$ Volts.
    *   *Distinction:* Note the difference between this value and the RMS value. RMS is higher than the average of the positive half-cycle, which is higher than the average of the full cycle (zero).

---

**Problem 2: Calculating Power with RMS**

A resistor of 10 $\Omega$ is connected to an AC voltage source. The voltage waveform is given by $v(t) = 200 \sin(100\pi t)$ Volts. Calculate:
a) The RMS voltage across the resistor.
b) The RMS current through the resistor.
c) The average power dissipated by the resistor.

**Solution:**

First, let's analyze the voltage waveform $v(t) = 200 \sin(100\pi t)$.
Here, $V_m = 200$ V and $\omega = 100\pi$ rad/s. This means $f = \omega/(2\pi) = (100\pi)/(2\pi) = 50$ Hz.

a)  **RMS Voltage ($V_{rms}$)**:
    $V_{rms} = \frac{V_m}{\sqrt{2}} = \frac{200}{\sqrt{2}} \approx 141.4$ Volts.

b)  **RMS Current ($I_{rms}$)**: Using Ohm's Law, $I = V/R$. For AC circuits, we use RMS values for power calculations.
    $I_{rms} = \frac{V_{rms}}{R} = \frac{141.4 \text{ V}}{10 \Omega} = 14.14$ Amperes.

c)  **Average Power Dissipated ($P_{avg}$)**: We can use any of the power formulas with RMS values.
    Using $P_{avg} = \frac{V_{rms}^2}{R}$:
    $P_{avg} = \frac{(141.4 \text{ V})^2}{10 \Omega} = \frac{20000 \text{ V}^2}{10 \Omega} = 2000$ Watts (or 2 kW).
    Alternatively, using $P_{avg} = I_{rms}^2 R$:
    $P_{avg} = (14.14 \text{ A})^2 \times 10 \Omega \approx 200 \times 10 = 2000$ Watts.
    *   *Why is it average power?* Even though the instantaneous power fluctuates, the average power is what remains constant over time due to the resistive nature of the load. The instantaneous power would be $p(t) = v(t)^2/R = (200 \sin(100\pi t))^2 / 10 = (40000 \sin^2(100\pi t))/10 = 4000 \sin^2(100\pi t)$ Watts. Using $\sin^2(\theta) = (1 - \cos(2\theta))/2$, $p(t) = 4000 (1 - \cos(200\pi t))/2 = 2000(1 - \cos(200\pi t))$ Watts. The average of $2000(1 - \cos(200\pi t))$ over a cycle is $2000 \times (1 - 0) = 2000$ W. This confirms our RMS calculation.

---

**Problem 3: Identifying Waveform Parameters from a Graph**

Imagine a graph showing a sinusoidal voltage waveform over time.
*   The voltage on the vertical axis ranges from -300V to +300V.
*   One complete cycle of the waveform occurs between time $t=0$s and $t=0.01$s.

Determine:
a) The peak voltage ($V_m$).
b) The RMS voltage ($V_{rms}$).
c) The frequency ($f$).
d) The period ($T$).

**Solution:**

a)  **Peak Voltage ($V_m$)**: The maximum value shown on the vertical axis is the peak voltage. From the description, $V_m = 300$ Volts.

b)  **RMS Voltage ($V_{rms}$)**: For a sine wave, $V_{rms} = V_m / \sqrt{2}$.
    $V_{rms} = \frac{300}{\sqrt{2}} \approx \frac{300}{1.41421} \approx 212.1$ Volts.

c)  **Frequency ($f$)**: The time for one complete cycle is the period, $T = 0.01$ s.
    Frequency is the reciprocal of the period: $f = 1/T = 1/0.01 = 100$ Hz.

d)  **Period ($T$)**: This is directly given from the graph description as the time for one complete cycle.
    $T = 0.01$ seconds, or 10 milliseconds (ms).

*   *Visualizing:* Being able to extract information from a graph of a waveform is a common exam skill. Look for the maximum/minimum values for $V_m$ and the time duration of one complete cycle for $T$.

---

**Key Takeaways from this Topic:**

*   AC voltages are generated through electromagnetic induction, often by rotating coils in magnetic fields.
*   Sinusoidal waveforms are the natural result of this process.
*   Understand the meaning and calculation of Peak Value ($V_m$), RMS Value ($V_{rms}$), Average Value ($V_{avg}$), Frequency ($f$), and Period ($T$).
*   For sine waves: $V_{rms} = V_m/\sqrt{2}$, $V_{avg(half-cycle)} = 2V_m/\pi$, $f = 1/T$, $\omega = 2\pi f$.
*   The average value of a pure sine wave over a *complete cycle* is zero.
*   RMS values are crucial for power calculations in AC circuits, as they represent the equivalent heating effect of a DC voltage.

This foundational knowledge will be essential as we move into analyzing AC circuits in more detail. Keep practicing these calculations, and don't hesitate to ask questions!

---

## Sample Questions with Answers

**Q1. A sinusoidal voltage is given by $v(t) = 100 \sin(100\pi t + \pi/4)$ V. What is its frequency?**

**Answer:**
The general form is $v(t) = V_m \sin(\omega t + \phi)$.
By comparison, $\omega = 100\pi$ rad/s.
The frequency $f$ is related to $\omega$ by $\omega = 2\pi f$.
So, $f = \frac{\omega}{2\pi} = \frac{100\pi}{2\pi} = 50$ Hz.
*(The phase angle $\pi/4$ does not affect the frequency.)*

**Q2. What is the RMS value of a voltage whose peak value is 311V?**

**Answer:**
For a sinusoidal waveform, the RMS value is given by $V_{rms} = \frac{V_m}{\sqrt{2}}$.
Given $V_m = 311$ V.
$V_{rms} = \frac{311}{\sqrt{2}} \approx \frac{311}{1.4142} \approx 220$ V.
*(This is a common conversion, e.g., from 220V RMS to peak voltage.)*

**Q3. Explain why the RMS value of an AC voltage is more important for power calculations than the peak value.**

**Answer:**
Power dissipation in a resistor depends on the square of the current or voltage ($P = I^2R = V^2/R$). Since AC voltage and current vary continuously, the instantaneous power also varies. The RMS (Root Mean Square) value is defined as the equivalent DC value that would produce the same amount of heat (power dissipation) in a given resistor. Therefore, using RMS values in power formulas ($P=VI$, $P=I^2R$, $P=V^2/R$) directly gives the *average* power consumed by the circuit, which is what matters for energy bills and device ratings. The peak value, while important for understanding the maximum voltage swing, doesn't directly relate to the average power delivered.

**Q4. A sinusoidal current has a frequency of 60 Hz and an RMS value of 10 A. What is its peak value and period?**

**Answer:**
Given: Frequency $f = 60$ Hz, RMS current $I_{rms} = 10$ A.
1.  **Peak Current ($I_m$)**:
    We know $I_{rms} = \frac{I_m}{\sqrt{2}}$.
    Rearranging for $I_m$: $I_m = I_{rms} \times \sqrt{2} = 10 \text{ A} \times \sqrt{2} \approx 10 \times 1.4142 = 14.142$ A.

2.  **Period ($T$)**:
    The period is the reciprocal of the frequency: $T = \frac{1}{f} = \frac{1}{60 \text{ Hz}} \approx 0.01667$ seconds, or 16.67 milliseconds.

**Q5. True or False: The average value of a pure sinusoidal voltage waveform over one complete cycle is equal to its RMS value.**

**Answer:**
**False**.
The average value of a pure sinusoidal voltage waveform over one *complete cycle* is zero because the positive and negative half-cycles cancel each other out. The RMS value for a sine wave is $V_m/\sqrt{2}$, which is approximately $0.707 V_m$. These are not equal unless $V_m=0$. The average of the *positive half-cycle* is $2V_m/\pi \approx 0.637 V_m$, which is also not equal to the RMS value.
