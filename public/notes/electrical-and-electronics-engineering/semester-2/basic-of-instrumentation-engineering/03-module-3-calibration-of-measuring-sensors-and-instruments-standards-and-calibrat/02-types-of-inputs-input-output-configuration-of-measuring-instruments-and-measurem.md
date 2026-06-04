---
title: "TYPES OF INPUTS: Input output configuration of measuring instruments and measurement systems. Desired inputs, interfering inputs, modifying inputs. Methods of correction for interfering and modifying inputs. Loading effects. Input and output impedances. Input impedances, input admittance, output impedances, output admittance."
subject: "BASIC OF INSTRUMENTATION ENGINEERING"
module: "Module 3: CALIBRATION OF  MEASURING SENSORS  AND INSTRUMENTS: Standards and calibration – Necessity of calibration"
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213f9ece2bdd875f9639"
status: "completed"
scrapedAt: "2026-05-23T16:05:15.543Z"
---
# BASIC INSTRUMENTATION ENGINEERING: Module 3 - Calibration of Measuring Sensors and Instruments

## Topic: Types of Inputs, Input-Output Configuration, and Impedance Concepts

Welcome back, everyone! In our previous sessions, we've laid the groundwork for understanding what calibration is and why it's so crucial for accurate measurements. Today, in Module 3, we're going to dive deeper into the *heart* of how measuring instruments actually work by examining their **input-output configurations** and the types of signals they encounter. This is fundamental to understanding why calibration is necessary in the first place and how we can ensure our instruments are giving us the true picture of what we're trying to measure.

Think about it: an instrument isn't just a black box that magically spits out a number. It's a system designed to interact with the physical world, receive some kind of signal, and then process it to give us a meaningful output. Understanding this interaction, especially the different *types* of signals it can receive, is key to its proper functioning and calibration.

### Input-Output Configuration of Measuring Instruments and Measurement Systems

At its core, any measuring instrument or system can be viewed as a **system** that takes an **input** and produces an **output**. This is a fundamental concept in many engineering disciplines, and it's no different in instrumentation.

Imagine you're using a digital thermometer to measure the temperature of your coffee.

*   **The Input:** The heat energy from the coffee, which causes a change in the temperature sensor of the thermometer.
*   **The Output:** The numerical display on the thermometer, showing the temperature in degrees Celsius or Fahrenheit.

This simple example illustrates the basic **input-output configuration**. The sensor is the interface that converts the physical quantity (heat) into an electrical signal. This signal is then processed by the instrument's circuitry, and finally, it's presented as a readable output.

More complex measurement systems, like those used in industrial process control, might involve a chain of instruments. For instance, measuring liquid level in a tank might involve:

1.  A **level sensor** (e.g., a float switch or a radar transmitter).
2.  A **transmitter** that converts the sensor's signal into a standardized electrical signal (like 4-20 mA or a voltage).
3.  A **controller** that receives this signal and makes a decision.
4.  An **indicator** or **recorder** that displays or logs the level.

In such a system, the output of one instrument becomes the input for the next. This interconnectedness is what we mean by the input-output configuration of a measurement **system**. Understanding these links is crucial, especially when we consider how signals might be affected as they pass from one stage to another – a topic that will lead us directly to the concept of impedance.

### Types of Inputs: The Signals Our Instruments Encounter

Now, not all signals that reach our instrument are the ones we *want* to measure. This is a critical distinction we need to make. Instrumentation engineers, as described in texts like Rangan, Sarma, and Mani's "Instrumentation Devices & Systems," categorize these signals into three main types:

#### 1. Desired Inputs (or True Input, Measurand)

This is the primary signal or physical quantity that the instrument is designed to measure. It's the signal we're interested in.

*   **Example:** In our coffee thermometer, the desired input is the *actual temperature* of the coffee. If we're using a pressure gauge to measure the tire pressure of a car, the desired input is the *actual pressure* inside the tire.

The goal of any good measurement system is to accurately and faithfully convert this desired input into a usable output, with minimal distortion or alteration.

#### 2. Interfering Inputs (or Disturbing Inputs)

These are unwanted signals that are *not* the desired measurand but can still affect the instrument's output. They often arise from external sources or phenomena that are present in the environment where the measurement is taking place.

*   **Example:** Imagine using that same coffee thermometer. What if the room temperature suddenly changes? Or what if someone accidentally blows on the thermometer? These external influences can cause small fluctuations in the thermometer's reading that are *not* due to the actual coffee temperature. These are interfering inputs.

Another classic example is trying to measure the voltage of a small battery (the desired input) when a nearby electrical appliance is also switched on, generating electromagnetic interference (EMI). This EMI can be picked up by the wires connected to your voltmeter and add unwanted noise to your measurement. As discussed in texts like Doeblin's "Measurement Systems: Application and Design," these inputs can corrupt the measurement by adding or subtracting from the desired signal.

#### 3. Modifying Inputs (or Influencing Inputs)

These inputs don't directly add to or subtract from the desired signal, but they change the **relationship** between the desired input and the instrument's output. They essentially alter the *sensitivity* or *gain* of the instrument.

*   **Example:** Think about a spring scale measuring weight. Its accuracy might depend on the ambient temperature. If it gets very hot, the spring might expand slightly, and for the same weight, the reading might be a bit different than when it's cold. The temperature is a modifying input because it changes how the weight (desired input) translates into the scale's displacement (which is then converted to an output reading).

In electronic instruments, changes in supply voltage or ambient humidity can also act as modifying inputs. They don't add a fixed error, but they shift the instrument's calibration curve. Sawhney's "A Course in Mechanical Measurement and Instrumentation" often highlights these as environmental factors that can affect instrument performance.

### Methods of Correction for Interfering and Modifying Inputs

So, we have these pesky interfering and modifying inputs that can throw our measurements off. What can we do about them? This is where good design, careful selection of instruments, and clever calibration come into play.

**Correcting for Interfering Inputs:**

The primary goal here is **isolation** and **filtering**.

1.  **Shielding:** For electrical interference (like EMI), we can use shielded cables and enclosures. These act like a Faraday cage, blocking external electromagnetic fields from reaching the sensitive instrument circuitry.
2.  **Filtering:** Electronic filters can be designed to remove signals within specific frequency ranges. If your desired signal is slow-changing and the interference is high-frequency noise (like from a motor), a low-pass filter can smooth out the noise. Conversely, if you're measuring a high-frequency signal and there's low-frequency hum, a high-pass filter might be used.
3.  **Differential Measurements:** For some types of interference, especially common-mode noise (where the interfering signal appears equally on both input lines), using a differential amplifier configuration can cancel it out. This is a very powerful technique in instrumentation.
4.  **Physical Isolation:** Sometimes, the simplest solution is to move the instrument away from the source of interference. If a particular piece of equipment is causing problems, try relocating your measurement setup.
5.  **Signal Averaging:** If the interfering input is random noise, taking multiple readings over a short period and averaging them can help reduce the impact of the noise, as the noise components tend to cancel each other out.

**Correcting for Modifying Inputs:**

Modifying inputs change the instrument's response characteristics. Correction often involves either:

1.  **Compensation Circuits:** Designers build in electronic circuits that automatically adjust the instrument's response to counteract the effect of known modifying inputs. For example, thermistors might be used in a circuit to compensate for temperature changes in other components.
2.  **Calibration:** This is where calibration truly shines. If an instrument's sensitivity changes with temperature, we can perform a calibration at a *specific* temperature and note the expected error. Or, even better, we can calibrate it at *several* different temperatures and create a lookup table or a mathematical model to correct for temperature variations. This is often done by plotting the instrument's output at different values of the modifying input while keeping the desired input constant.
3.  **Using Instruments with Low Sensitivity to Modifying Inputs:** Choosing instruments specifically designed to be robust against common environmental factors is always the best first step. For example, using a strain gauge with temperature compensation built-in.

Remember the learning outcome: "Develop a deep understanding of the principles of calibration and analysing input-output relationships in measurement systems." Understanding these types of inputs and how they affect the input-output relationship is *exactly* what calibration is all about. We calibrate to ensure that only the desired input is influencing the output in the way it's supposed to.

### Loading Effects

Now, let's talk about a very common and important phenomenon in measurement systems: **Loading Effects**. This occurs when connecting a measuring instrument to a system *alters* the behavior of the system being measured. It's a direct consequence of the interaction between the source of the signal and the measuring instrument itself.

Think back to our coffee thermometer. What if the thermometer's sensor, to work, needed to draw a tiny bit of heat from the coffee itself? If the coffee is already losing heat to the environment, and the thermometer draws a little more, the coffee's temperature might drop slightly faster than it would have without the thermometer. The thermometer *loaded* the coffee.

In electrical systems, this is even more pronounced. When you connect a voltmeter across a component, the voltmeter itself draws a small amount of current. This current flow can change the voltage across the component being measured.

**The key here is that the measuring instrument, by its very presence, can change the quantity it is trying to measure.**

Doeblin's "Measurement Systems: Application and Design" emphasizes this: a measurement system is an integral part of the system under test, and its interaction cannot be ignored.

### Input and Output Impedances: The Key to Understanding Loading Effects

So, what governs these loading effects? It's all about **impedance**. Impedance is a generalized concept of opposition to current flow, analogous to resistance in DC circuits, but it also includes the effects of capacitance and inductance in AC circuits.

For our purposes, understanding **input impedance** and **output impedance** is crucial.

#### Input Impedance ($Z_{in}$ or $R_{in}$ for DC)

Input impedance is the impedance presented by the measuring instrument *to the source* it is connected to. It's essentially how much the instrument "resists" the signal coming from the source.

*   **Think of it like:** A water pipe connected to a container. The input impedance is like the resistance to water flow offered by the inlet of the container.

If the input impedance of the measuring instrument is **very high** compared to the impedance of the source signal, then the instrument will draw very little current from the source. This means it will have minimal effect on the source's behavior, and thus, the loading effect will be minimal.

*   **Example:** A high-quality digital voltmeter has a very high input impedance (often megaohms, $M\Omega$). When connected to measure a voltage, it draws such a tiny current that it barely disturbs the circuit it's measuring. This is why DVMs are preferred over older analog voltmeters with lower input impedances.

#### Input Admittance ($Y_{in}$ or $G_{in}$ for DC)

Admittance is the reciprocal of impedance ($Y = 1/Z$). It represents how easily current flows. For DC circuits, admittance is simply conductance ($G = 1/R$).

*   **High input impedance** means **low input admittance**. This is desirable for measuring instruments, as it minimizes the loading effect.

#### Output Impedance ($Z_{out}$ or $R_{out}$ for DC)

Output impedance is the impedance presented by the source or the preceding stage of a system *to the next stage* (which is usually the measuring instrument). It's how much the source itself resists changes in voltage due to current drawn from it.

*   **Think of it like:** The internal resistance of a battery. If you try to draw a lot of current, the battery's voltage drops because of this internal resistance.

If the output impedance of the source is **low**, it can supply current more readily without its voltage dropping significantly. This is good.

#### Output Admittance ($Y_{out}$ or $G_{out}$ for DC)

Similarly, output admittance ($Y_{out} = 1/Z_{out}$) is the reciprocal of output impedance.

*   **Low output impedance** means **high output admittance**. A source with high output admittance can effectively "drive" a load.

**How these relate to Loading Effects:**

Loading effects are most severe when:

1.  The **input impedance of the measuring instrument ($Z_{in}$)** is comparable to or lower than the **output impedance of the source ($Z_{out}$)**.
2.  Conversely, loading effects are minimized when the **input impedance of the measuring instrument ($Z_{in}$)** is much, much **higher** than the **output impedance of the source ($Z_{out}$)**.

Mathematically, the voltage measured by an instrument ($V_{measured}$) will be lower than the actual voltage of the source ($V_{source}$) when loaded. Consider a voltage source with voltage $V_s$ and internal resistance $R_{out}$, connected to a measuring instrument with input resistance $R_{in}$. The circuit forms a voltage divider. The measured voltage will be:

$V_{measured} = V_s \times \frac{R_{in}}{R_{out} + R_{in}}$

If $R_{in} \gg R_{out}$, then $R_{out} + R_{in} \approx R_{in}$, and $V_{measured} \approx V_s \times \frac{R_{in}}{R_{in}} = V_s$. This is the ideal scenario where the measurement is accurate.

However, if $R_{in}$ is not much larger than $R_{out}$, then $V_{measured}$ will be significantly less than $V_s$.

**Common Pitfalls and Exam Focus:**

*   Students often confuse input and output impedance. Remember: **Input impedance** is what the instrument *presents* to the source. **Output impedance** is what the source *presents* to the instrument.
*   The rule of thumb for minimizing loading is always: **High input impedance for the measuring instrument.**
*   Expect questions that ask you to identify the condition that minimizes loading effects or to calculate the error introduced by loading given source and instrument impedances.

In summary, understanding the input-output configuration, differentiating between desired, interfering, and modifying inputs, and grasping the concepts of impedance are fundamental to analyzing why instruments behave the way they do and how to ensure our calibration efforts yield accurate results. We'll build on these concepts in our upcoming sessions as we look at different types of sensors and instruments.

***

## Sample Questions with Answers

**Q1. What is the primary goal when choosing a measuring instrument for a sensitive electronic circuit?**

**Answer:** The primary goal is to select an instrument with a very **high input impedance**. This minimizes the loading effect, ensuring that the act of measuring the voltage or current in the circuit does not significantly alter the circuit's behavior and thus the measurement itself.

**Reasoning:** A high input impedance means the instrument draws very little current from the source. If it drew significant current, it would effectively change the voltage it's trying to measure (due to the source's own output impedance), leading to an inaccurate reading.

**Q2. Differentiate between interfering and modifying inputs, providing an example for each.**

**Answer:**
*   **Interfering Input:** An unwanted signal that directly adds to or subtracts from the desired signal, thus directly affecting the output reading.
    *   **Example:** Electromagnetic interference (EMI) from a nearby motor causing fluctuations in the reading of a sensitive strain gauge. The EMI is not the strain being measured, but it directly corrupts the signal from the strain gauge.
*   **Modifying Input:** An input that does not directly add to the signal but changes the relationship between the desired input and the output. It alters the instrument's performance characteristics (like sensitivity or gain).
    *   **Example:** Ambient temperature affecting the resistance of a wire in a resistance temperature detector (RTD). Even if the temperature being measured is constant, a change in ambient temperature might cause the RTD's resistance to change *for that same measured temperature*, thus altering the instrument's calibration.

**Reasoning:** This question tests the understanding of the definitions and the ability to provide practical examples. Interfering inputs cause additive/subtractive errors, while modifying inputs cause multiplicative or gain-related errors.

**Q3. If a voltage source has an output impedance of 100 $\Omega$ and an instrument with an input impedance of 10 k$\Omega$ is connected to measure the source voltage, what is the approximate percentage of voltage drop due to loading?**

**Answer:**
Let $V_s$ be the source voltage.
Output impedance of the source, $R_{out} = 100 \Omega$.
Input impedance of the instrument, $R_{in} = 10 \text{ k}\Omega = 10000 \Omega$.

The measured voltage, $V_{measured}$, is given by the voltage divider formula:
$V_{measured} = V_s \times \frac{R_{in}}{R_{out} + R_{in}}$
$V_{measured} = V_s \times \frac{10000}{100 + 10000}$
$V_{measured} = V_s \times \frac{10000}{10100}$
$V_{measured} \approx V_s \times 0.9901$

The voltage drop is $V_{drop} = V_s - V_{measured} = V_s - 0.9901 V_s = 0.0099 V_s$.

Percentage voltage drop = $\frac{V_{drop}}{V_s} \times 100\%$
Percentage voltage drop = $\frac{0.0099 V_s}{V_s} \times 100\% = 0.99\%$

Therefore, the approximate percentage of voltage drop due to loading is **0.99%**.

**Reasoning:** This is a classic calculation question focusing on the loading effect. It requires applying the voltage divider rule and understanding how impedance mismatch leads to voltage errors. The result shows that even with a relatively high input impedance (10 k$\Omega$), there's still a small error when the source impedance is not significantly smaller. A common exam pitfall is misinterpreting "high input impedance" to mean *zero* loading error.
