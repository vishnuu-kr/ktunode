---
title: "Properties of ideal and practical Op-amps - Gain, CMRR and Slew rate"
subject: "ANALOG ELECTRONICS CIRCUITS"
module: "Module 3: Operational Amplifiers : Block diagram of Op"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213e9ece2bdd875f95b7"
status: "completed"
scrapedAt: "2026-05-23T16:04:27.350Z"
---
## Module 3: Operational Amplifiers - Properties of Ideal and Practical Op-Amps

Welcome, everyone! In this module, we dive into the heart of analog electronics – the **Operational Amplifier**, or **Op-Amp**. You’ve probably seen these ubiquitous chips everywhere, and for good reason. They are the building blocks for so many essential analog circuits. Today, we're going to focus on understanding what makes an Op-Amp tick, by exploring the characteristics of both an *ideal* Op-Amp and a *practical* Op-Amp, specifically looking at its **Gain**, **Common-Mode Rejection Ratio (CMRR)**, and **Slew Rate**.

Understanding these properties is crucial, as it directly links to our **Course Outcome 4: Explain the basic concepts of Operational amplifier (OPAMP)** and also lays the foundation for **Course Outcome 5: Design and develop various OPAMP application circuits**. The concepts we discuss today will help you understand *why* certain Op-Amp circuits behave the way they do and how to choose the right Op-Amp for your design needs.

### The Op-Amp: A Versatile Building Block

Before we delve into the specific properties, let's quickly recap what an Op-Amp is and its basic structure. Think of an Op-Amp as a high-gain, direct-coupled, differential amplifier. It has two input terminals: an **inverting input** (marked with a '-') and a **non-inverting input** (marked with a '+'), and one output terminal.

The magic of an Op-Amp lies in its ability to amplify the *difference* between these two input voltages. It's like a very sensitive ear that listens to the difference between two sounds and amplifies it significantly.

From our textbooks, like David Bell's "Electronic Devices and Circuits" or Floyd's "Fundamentals of Analog Circuits," we learn that internally, an Op-Amp is a complex circuit comprising multiple stages, often including a differential amplifier stage, a gain stage, and an output buffer stage. This internal structure dictates its performance characteristics.

### The Ideal Op-Amp: A Designer's Dream

To truly understand the behavior of an Op-Amp, it's helpful to first consider a theoretical construct: the **ideal Op-Amp**. This is a perfect Op-Amp, with characteristics that simplify analysis and design. While no real Op-Amp can perfectly achieve these, they serve as excellent benchmarks. Let's explore these ideal properties, which are fundamental to grasping Op-Amp operations, directly aligning with **CO4**.

#### 1. Infinite Open-Loop Voltage Gain ($A_{OL}$)

The most defining characteristic of an ideal Op-Amp is its **infinite open-loop voltage gain**. What does this mean? The open-loop gain is the amplification the Op-Amp provides *without* any external feedback. So, even an infinitesimally small difference between the non-inverting and inverting inputs will result in an infinitely large output voltage.

Think of it like a magnifying glass that can enlarge a tiny speck of dust to the size of the moon. In practice, real Op-Amps have very high, but finite, open-loop gains, typically in the range of $10^5$ to $10^6$ (100,000 to 1,000,000).

*   **Why is infinite gain important for analysis?** When we use Op-Amps in typical configurations with negative feedback (which we'll cover extensively in later topics), this high gain, combined with the feedback network, allows us to achieve very precise and predictable closed-loop gains that are determined by the external components, not the Op-Amp itself. This is a cornerstone of Op-Amp circuit design and directly supports **CO5**.

Let's represent the output voltage ($V_{out}$) in terms of the differential input voltage ($V_{d} = V_{+} - V_{-}$) and the open-loop gain ($A_{OL}$):

$V_{out} = A_{OL} \times (V_{+} - V_{-})$

For an ideal Op-Amp, $A_{OL} \to \infty$. This implies that for the output voltage to remain finite, the differential input voltage *must* be zero:

$V_{+} - V_{-} = 0 \quad \text{or} \quad V_{+} = V_{-}$.

This leads to a critical concept for analyzing Op-Amp circuits: the **virtual short** or **virtual ground** (if the non-inverting input is grounded). This is an assumption we frequently make in ideal Op-Amp analysis, and it’s essential for understanding configurations like inverting and non-inverting amplifiers.

#### 2. Infinite Input Impedance ($Z_{in}$)

An ideal Op-Amp draws **zero current** from the input signal source. This is because its input impedance is considered **infinite**.

Imagine you're trying to measure the temperature of a cup of coffee with a thermometer. If the thermometer draws a lot of heat from the coffee to operate, it will cool the coffee down, and you won't get an accurate reading of the coffee's original temperature. Similarly, if an amplifier draws significant current from the signal source, it can distort the original signal.

An infinite input impedance ensures that the Op-Amp doesn't "load down" the signal source. Whatever signal is presented to the Op-Amp's inputs is what it sees, without any of it being "siphoned off" by the amplifier itself. This is crucial for maintaining signal integrity.

So, for an ideal Op-Amp:
$I_{+} = 0$ and $I_{-} = 0$.

This assumption simplifies circuit analysis immensely. For instance, in many Op-Amp circuits, we can apply Kirchhoff's Current Law at the input nodes without worrying about current flowing *into* the Op-Amp itself. This property is key to the predictable behavior in circuits designed using **CO5**.

#### 3. Zero Output Impedance ($Z_{out}$)

An ideal Op-Amp has a **zero output impedance**. This means that no matter how much current is drawn from the output, the output voltage remains constant and is solely determined by the input voltage and the open-loop gain.

Think of a powerful loudspeaker. It can deliver sound at its specified volume whether you're listening alone in a small room or with a large crowd. The output voltage (or sound pressure level in this analogy) is independent of the "load" (your ears or the audience's ears).

A zero output impedance ensures that the Op-Amp can drive any load without its output voltage being affected. This is vital for applications where the Op-Amp needs to drive diverse loads, like different sensor circuits or display devices.

#### 4. Infinite Bandwidth (BW)

An ideal Op-Amp amplifies signals of **all frequencies** with its full open-loop gain, meaning it has infinite bandwidth.

Imagine a radio that could pick up every single radio station, from the lowest AM frequencies to the highest FM frequencies, and everything in between, with perfect clarity. An ideal Op-Amp does something similar for electrical signals.

In reality, Op-Amps have a finite bandwidth, which limits the range of frequencies they can amplify effectively. We’ll discuss this more when we talk about practical Op-Amps.

#### 5. Zero Input Offset Voltage ($V_{os}$)

An ideal Op-Amp produces **zero output voltage** when the differential input voltage is zero ($V_{+} = V_{-}$). In other words, if both inputs are at the same potential (e.g., both connected to ground), the output should be exactly zero.

This is like having a perfectly balanced scale; if you place nothing on either side, it remains perfectly level.

However, in practical Op-Amps, due to imperfections in the internal components (like slight mismatches in transistors), even when the inputs are identical, there might be a small output voltage. This is called the input offset voltage.

#### 6. Infinite Common-Mode Rejection Ratio (CMRR)

This is a big one and we will dedicate a specific section to it. For an ideal Op-Amp, the **Common-Mode Rejection Ratio (CMRR)** is **infinite**. We'll explore this concept shortly.

### The Practical Op-Amp: Reality Bites (But We Can Handle It!)

Now, let's bring ourselves back to the real world. Practical Op-Amps, while incredibly useful, deviate from these ideal characteristics. Understanding these deviations is crucial for selecting the right Op-Amp for a specific application and for predicting its performance, directly aiding **CO4** and **CO5**. Let's revisit the properties we discussed, but this time, with a realistic lens.

#### 1. Finite Open-Loop Voltage Gain ($A_{OL}$)

As we mentioned, practical Op-Amps have very high, but **finite**, open-loop voltage gains. Typical values range from $10^5$ to $10^6$. This is still a huge number!

*   **What does this mean for us?** While we still often assume infinite gain for simple circuit analysis (especially in negative feedback configurations), in high-frequency applications or when dealing with very small input signals, this finite gain can become a limiting factor. It also means that the Op-Amp itself contributes some gain to the circuit, which might need to be accounted for.
*   **Exam Tip:** For introductory analysis, assume ideal unless otherwise specified. However, when analyzing gain-bandwidth product or frequency response, the finite gain is critical. Textbooks like R. Gayakwad's "Op-Amps and Linear Integrated Circuits" often delve into how this finite gain affects the closed-loop gain accuracy.

#### 2. Finite Input Impedance ($Z_{in}$)

Practical Op-Amps have a **finite but very high input impedance**. For Bipolar Junction Transistor (BJT) input Op-Amps, the input impedance is typically in the range of hundreds of kilohms to a few megohms. For Field-Effect Transistor (FET) or CMOS input Op-Amps, the input impedance can be much, much higher – in the range of teraohms ($10^{12} \Omega$) or even more!

*   **Why does this matter?** Even though it's high, it's not infinite. This means the Op-Amp *does* draw a small amount of current from the source. For sensitive signal sources or high-impedance sources, this can lead to signal attenuation or distortion. For example, if you're trying to amplify a signal from a very delicate sensor with a very high output impedance, a BJT-input Op-Amp might load it down more than a FET-input Op-Amp.
*   **Analogy:** Imagine trying to measure the water level in a sensitive tank. A pump that draws very little water will disturb the level less than a pump that draws a lot. The Op-Amp input impedance is like the "draw" of the measurement device.
*   **Connection to CO4/CO5:** Understanding input impedance helps in choosing the right Op-Amp for interfacing with different signal sources. A higher input impedance is generally preferred when the signal source has a high impedance.

#### 3. Non-Zero Output Impedance ($Z_{out}$)

Practical Op-Amps have a **small but non-zero output impedance**. This is typically in the range of tens to a few hundred ohms for most Op-Amps.

*   **What's the consequence?** When the Op-Amp drives a load, its output voltage will droop slightly as the load current increases. This is because the output voltage is effectively the ideal output voltage minus the voltage drop across this output impedance ($V_{out} = V_{ideal} - I_{load} \times Z_{out}$).
*   **Practical Implication:** If an Op-Amp needs to drive a low-impedance load (meaning it needs to supply a significant amount of current), the output voltage might deviate from the expected value. This can be a concern in power amplifier stages or when driving multiple loads.
*   **Textbook Mention:** Boylestad and Nashelsky's "Electronic Devices and Circuit Theory" often provides equivalent circuit models for Op-Amps that include this output resistance.

#### 4. Finite Bandwidth (BW)

Practical Op-Amps have a **limited bandwidth**. This means their gain decreases as the frequency of the input signal increases.

*   **Gain-Bandwidth Product (GBWP):** A key parameter related to bandwidth is the **Gain-Bandwidth Product (GBWP)**. For a given Op-Amp, this product is approximately constant. If the Op-Amp is used in a unity-gain configuration (gain = 1), its bandwidth will be equal to its GBWP. If it's used with a higher gain, its bandwidth will be lower.
    *   $GBWP \approx A_{OL} \times BW_{at\,A_{OL}}$
    *   $GBWP \approx A_{OL\_closed\_loop} \times BW_{at\,A_{OL\_closed\_loop}}$
*   **Analogy:** Think of a microphone with a specific frequency response. It might capture bass frequencies well, but treble frequencies might be attenuated. Similarly, an Op-Amp has a certain "frequency response."
*   **Relevance:** This is extremely important for signal processing applications where the Op-Amp is used to amplify signals that change rapidly. If the signal frequency exceeds the Op-Amp's bandwidth (for the given gain), the output signal will be attenuated and distorted. This directly impacts the design considerations for **CO5**.

#### 5. Non-Zero Input Offset Voltage ($V_{os}$)

As we touched upon with the ideal case, practical Op-Amps have a non-zero **input offset voltage**. This is a small DC voltage that appears at the output even when the differential input is zero. It's caused by unavoidable imbalances in the Op-Amp's internal circuitry.

*   **Impact:** This offset voltage can cause a small DC error at the output, which can be problematic in precision DC amplifier circuits or when amplifying very small signals.
*   **Mitigation:** Many Op-Amps are designed with offset null pins that allow you to adjust the output to be zero when the inputs are balanced. Alternatively, techniques like AC coupling can be used to block this DC offset if the application doesn't require amplifying DC signals.
*   **Textbook Insight:** Choudhury's "Linear Integrated Circuits" discusses the causes and compensation techniques for input offset voltage in detail.

#### 6. Finite Common-Mode Rejection Ratio (CMRR)

This is a crucial parameter that tells us how well an Op-Amp rejects unwanted signals that are common to both inputs. Let’s dive deeper into this.

---

### Understanding Common-Mode Rejection Ratio (CMRR)

This is a concept that often appears in exams, so pay close attention. **Course Outcome 4** is directly addressed here as we explain a fundamental Op-Amp concept.

#### What is Common-Mode Signal?

First, let's understand "common-mode." When we talk about the two inputs of an Op-Amp, the **differential-mode signal** is the *difference* between them ($V_d = V_+ - V_-$). The **common-mode signal** is the *average* of the two input signals ($V_{cm} = (V_+ + V_-) / 2$).

*   **Analogy:** Imagine you're trying to listen to a conversation between two people (the differential signal). If there's a loud background noise (like a buzzing fan) that both people are hearing equally, that's the common-mode signal. You want to hear the conversation, not the fan.

Noise picked up by cables, power supply fluctuations, or signals that are present on both input lines equally are examples of common-mode signals. We want our Op-Amp to amplify the *difference* signal and ignore the common-mode signal.

#### Defining CMRR

The **Common-Mode Rejection Ratio (CMRR)** is a measure of how well an Op-Amp rejects these common-mode signals. It's defined as the ratio of the differential-mode gain ($A_d$) to the common-mode gain ($A_{cm}$).

$CMRR = \frac{A_d}{A_{cm}}$

*   $A_d$: Gain for the differential input signal ($V_{out} = A_d \times (V_+ - V_-)$). This is the "good" gain we want.
*   $A_{cm}$: Gain for the common-mode input signal ($V_{out} = A_{cm} \times \frac{V_+ + V_-}{2}$). This is the "bad" gain we want to be as close to zero as possible.

#### Ideal vs. Practical CMRR

*   **Ideal Op-Amp:** Has an **infinite CMRR**. This means $A_{cm} = 0$. Any common-mode signal at the input is completely rejected, and the output is solely determined by the differential signal.
*   **Practical Op-Amp:** Has a **finite but very high CMRR**. Typical values range from 60 dB to 120 dB or more. CMRR is often expressed in decibels (dB) because the range of values is so large.
    *   $CMRR_{dB} = 20 \times \log_{10} \left( \frac{A_d}{A_{cm}} \right)$

#### Why is High CMRR Important?

A high CMRR is essential for several reasons:

1.  **Noise Immunity:** It helps the Op-Amp ignore noise that is common to both input lines, making it excellent for amplifying small signals in noisy environments.
2.  **Accuracy:** In applications where the common-mode voltage can vary, a high CMRR ensures that the output doesn't shift due to these variations. This is critical for precision measurements.
3.  **Sensing Applications:** In bridge sensors (like strain gauges) where both excited lines might pick up common noise, a high CMRR is vital for accurately measuring the differential output of the bridge. This directly links to the design potential in **CO5**.

*   **Example:** Suppose an Op-Amp has $A_d = 100,000$ and $A_{cm} = 0.1$.
    *   $CMRR = 100,000 / 0.1 = 1,000,000$.
    *   $CMRR_{dB} = 20 \times \log_{10}(1,000,000) = 20 \times 6 = 120$ dB.
    If the common-mode input voltage is 1V, the output due to common-mode signal is $0.1 \times 1V = 0.1V$. If the differential input is 1mV ($V_+ - V_- = 0.001V$), the output due to differential signal is $100,000 \times 0.001V = 100V$. The total output is the sum of these. A high CMRR means $A_{cm}$ is very small, making the output contribution from the common-mode signal negligible.

*   **Exam Pointer:** Be prepared to calculate CMRR in dB given $A_d$ and $A_{cm}$, or to find $A_{cm}$ if CMRR and $A_d$ are given. Also, understand the implications of a low CMRR on circuit performance.

---

### Understanding Slew Rate (SR)

The **Slew Rate** is another critical parameter for practical Op-Amps, especially when dealing with high-frequency or large-amplitude signals. This is key for understanding the dynamic behavior of Op-Amps, supporting **CO4** and influencing designs in **CO5**.

#### What is Slew Rate?

The Slew Rate (SR) is the **maximum rate of change of the Op-Amp's output voltage per unit time**. It is usually expressed in volts per microsecond ($\text{V}/\mu\text{s}$).

*   **Analogy:** Imagine you're driving a car with a very powerful engine, but the car has a governor that limits how quickly you can accelerate. Even if you stomp on the pedal, the car can only reach its maximum speed change per second. Similarly, an Op-Amp has a limit on how fast its output voltage can change.

#### Why is Slew Rate Important?

An Op-Amp's internal circuitry, particularly the compensation capacitor used to ensure stability, limits how quickly the output can change. When you apply a large input signal or a high-frequency signal, the Op-Amp might not be able to keep up.

*   **Large-Signal Bandwidth Limitation:** The slew rate limits the **large-signal bandwidth** of an Op-Amp. This is different from the small-signal bandwidth determined by the GBWP.
    *   Consider a sinusoidal input signal: $V_{in}(t) = A_{in} \sin(\omega t)$.
    *   The output voltage is ideally $V_{out}(t) = A_d \times V_{in}(t) = A_d A_{in} \sin(\omega t)$.
    *   The rate of change of the output is $\frac{dV_{out}}{dt} = A_d A_{in} \omega \cos(\omega t)$.
    *   The maximum rate of change (slew rate) is $|A_d A_{in} \omega|$.
    *   For the Op-Amp to accurately reproduce this sine wave, its slew rate (SR) must be greater than or equal to the maximum rate of change of the desired output signal.
    *   Therefore, $SR \ge |A_d A_{in} \omega|$.
    *   This gives us a frequency limit for a given amplitude: $f_{max} = \frac{SR}{2 \pi A_{in\_peak} \times A_d}$ (if we use $A_d$ for the circuit gain) or $f_{max} = \frac{SR}{2 \pi A_{out\_peak}}$ (if we consider the peak output voltage).
*   **Distortion:** If the required rate of change of the output signal exceeds the Op-Amp's slew rate, the output waveform will become distorted, often appearing "triangular" instead of sinusoidal. The Op-Amp simply cannot change its output voltage fast enough.
*   **Example:** An Op-Amp with $SR = 1 \text{ V}/\mu\text{s}$ can accurately reproduce a sine wave with a peak amplitude of 1V at a frequency of approximately 159 kHz ($1 \text{ V}/\mu\text{s} = 1 \text{ V}/10^{-6}\text{s} = 10^6 \text{ V/s}$; $f_{max} = \frac{10^6}{2\pi \times 1} \approx 159 \text{ kHz}$). However, if you try to amplify a 10V peak sine wave, the maximum frequency it can accurately reproduce is much lower ($f_{max} \approx \frac{10^6}{2\pi \times 10} \approx 15.9 \text{ kHz}$).

#### Relation to Small-Signal Bandwidth (GBWP)

It's important to distinguish slew rate from the small-signal bandwidth (determined by GBWP).

*   **GBWP:** Limits the gain for *small* signals as frequency increases.
*   **Slew Rate:** Limits the maximum rate of change for *large* signals.

In some applications, the slew rate limitation can be more restrictive than the GBWP limitation.

*   **Textbook Context:** Authors like R.L. Boylestad and L. Nashelsky often present graphs showing the output voltage limitations for different frequencies and amplitudes when slew rate limiting occurs.

### Summary of Key Properties

Let's quickly recap the essential differences and importance:

| Property             | Ideal Op-Amp            | Practical Op-Amp (Typical Range) | Importance                                                                                                | CO Link |
| :------------------- | :---------------------- | :------------------------------- | :-------------------------------------------------------------------------------------------------------- | :------ |
| Open-Loop Gain ($A_{OL}$) | $\infty$                | $10^5 - 10^6$                    | High gain enables precise closed-loop gains determined by external components.                              | CO4, CO5 |
| Input Impedance ($Z_{in}$) | $\infty$                | $k\Omega - M\Omega$ (BJT) to $T\Omega$ (FET) | Prevents loading of the input signal source, ensuring signal integrity. Higher is better.                 | CO4, CO5 |
| Output Impedance ($Z_{out}$) | $0 \Omega$              | $10 \Omega - 200 \Omega$         | Ensures output voltage is independent of load current. Lower is better.                                 | CO4, CO5 |
| Bandwidth            | $\infty$                | Finite (limited by GBWP)         | Limits the frequency range over which Op-Amp can amplify effectively.                                     | CO4, CO5 |
| Input Offset Voltage ($V_{os}$) | $0$ V                   | Few $\mu$V to few mV             | Causes a DC error at the output, needs compensation or filtering for DC applications.                     | CO4     |
| CMRR                 | $\infty$                | $60 - 120+$ dB                   | Rejects common-mode signals (noise), crucial for accuracy and performance in noisy environments.           | CO4, CO5 |
| Slew Rate (SR)       | $\infty$ V/$\mu$s         | $0.1 - 1000+$ V/$\mu$s           | Limits the maximum rate of change of output voltage; limits large-signal bandwidth and can cause distortion. | CO4, CO5 |

Understanding these properties allows us to choose the right Op-Amp for our applications, from simple audio amplifiers to complex data acquisition systems. Remember, the ideal Op-Amp is our guide, but the practical Op-Amp is what we work with, and its limitations define the performance envelope of our designs.

### Connecting to Course Outcomes

Throughout this discussion, you've seen how each property directly relates to our course outcomes:

*   **CO4 (Explain the basic concepts of Operational amplifier (OPAMP))**: Every property we discussed – gain, input/output impedance, CMRR, slew rate – is a fundamental concept defining an Op-Amp's operation and behavior.
*   **CO5 (Design and develop various OPAMP application circuits)**: The knowledge of these parameters is essential for making informed design choices. For instance:
    *   Choosing a FET-input Op-Amp for high-impedance sources.
    *   Selecting an Op-Amp with a high SR for high-frequency signal processing.
    *   Considering CMRR when working with sensors in noisy environments.
    *   Understanding GBWP to ensure the desired gain at the required frequencies.

---

### Sample Questions and Answers

**Q1. An Op-Amp has an open-loop gain of $2 \times 10^5$. If it is used in a unity-gain buffer configuration, what is the approximate closed-loop gain?**

**Answer:** For unity-gain configurations (or any negative feedback configuration), the high open-loop gain of the Op-Amp allows the closed-loop gain to be very accurately determined by the external feedback network. In a unity-gain buffer, the feedback network forces the closed-loop gain to be 1. The internal open-loop gain becomes less significant in determining the *circuit's* gain, though it's still crucial for maintaining accuracy. So, the closed-loop gain is approximately **1**.

**Reasoning:** This is a direct application of the principle that with negative feedback, the closed-loop gain is primarily set by the feedback components. The infinite open-loop gain of an ideal Op-Amp is the underlying reason this works so well. Even with a finite but high open-loop gain, the actual closed-loop gain is extremely close to the ideal value.

**Q2. Explain why an Op-Amp with a low slew rate might distort a high-frequency sine wave.**

**Answer:** The slew rate (SR) is the maximum rate of change of the Op-Amp's output voltage. A sine wave's rate of change is highest at its zero-crossing points. If the required rate of change for a given sine wave (determined by its amplitude and frequency) exceeds the Op-Amp's slew rate, the Op-Amp's output cannot keep up. The output voltage will change as fast as it can (at its slew rate limit), but then it will have to "wait" before it can start changing again. This causes the tops and bottoms of the sine wave to flatten, and the zero-crossing points to become non-linear, resulting in a distorted, often triangular, waveform.

**Reasoning:** This question tests the understanding of the *dynamic* limitation imposed by slew rate. It requires explaining the mechanism of distortion, which is the Op-Amp's inability to track the input signal's rate of change.

**Q3. A sensor outputs a signal of 1 mV, but it is connected to an Op-Amp in a noisy environment where common-mode noise of 50 mV is also present on both input lines. If the Op-Amp has a differential gain ($A_d$) of $10^5$ and a common-mode gain ($A_{cm}$) of 50, what is the total output voltage?**

**Answer:**
First, let's calculate the differential and common-mode components of the output:
Differential gain $A_d = 10^5$
Common-mode gain $A_{cm} = 50$

Differential input voltage, $V_d = V_+ - V_- = 1 \text{ mV} = 0.001 \text{ V}$.
Common-mode input voltage, $V_{cm} = (V_+ + V_-)/2 = 50 \text{ mV} = 0.050 \text{ V}$.

Output due to differential signal:
$V_{out,d} = A_d \times V_d = 10^5 \times 0.001 \text{ V} = 100 \text{ V}$.

Output due to common-mode signal:
$V_{out,cm} = A_{cm} \times V_{cm} = 50 \times 0.050 \text{ V} = 2.5 \text{ V}$.

Total output voltage = $V_{out,d} + V_{out,cm} = 100 \text{ V} + 2.5 \text{ V} = 102.5 \text{ V}$.

Now, let's calculate the CMRR in dB:
$CMRR = \frac{A_d}{A_{cm}} = \frac{10^5}{50} = 2000$.
$CMRR_{dB} = 20 \times \log_{10}(2000) \approx 20 \times 3.301 \approx 66 \text{ dB}$.

**Reasoning:** This question assesses the ability to apply the definitions of differential and common-mode signals and gains. It highlights the effect of a non-ideal CMRR, where the common-mode noise contributes significantly to the output. A practical Op-Amp with a much higher CMRR (e.g., 120 dB, meaning $A_{cm}$ would be 1000 times smaller) would result in a much smaller $V_{out,cm}$ (e.g., if $A_{cm} = 0.1$, $V_{out,cm} = 0.1 \times 0.050 \text{ V} = 5 \text{ mV}$, making the common-mode contribution almost negligible compared to the differential signal). This demonstrates the practical importance of high CMRR.

---
