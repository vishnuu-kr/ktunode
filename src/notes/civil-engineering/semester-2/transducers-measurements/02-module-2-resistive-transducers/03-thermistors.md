---
title: "Thermistors."
subject: "TRANSDUCERS & MEASUREMENTS"
module: "Module 2: Resistive Transducers"
branch: "Civil Engineering"
semester: 2
topicId: "68b54567d74ec52cc091309d"
status: "completed"
scrapedAt: "2026-05-20T18:38:31.500Z"
---
# Module 2: Resistive Transducers
## Topic: Thermistors

Welcome, everyone! Today, we're diving into a very important topic in our "Transducers and Measurements" course: **Thermistors**. As we progress through this module on Resistive Transducers, thermistors are a prime example of how a simple change in resistance can tell us a lot about our environment, specifically about temperature.

You'll recall from our introductory lectures (and CO1: Summarize the concepts of sensors, transducers and classify various transducers) that a **transducer** is a device that converts energy from one form to another. Thermistors are a perfect illustration of this: they convert a thermal energy input (heat) into an electrical energy output (a change in resistance).

Think about it this way: we often need to know how hot or cold something is, right? Whether it's the engine in your car, the food in your refrigerator, or even your own body temperature. To measure this, we need a sensor that can detect that temperature and then give us a signal that our instruments can understand. That's precisely what a thermistor does – it's a **temperature-sensitive resistor**.

### What Exactly is a Thermistor?

The name itself is a clue: "therm" for heat and "istor" from resistor. So, a thermistor is essentially a **thermally sensitive resistor**. Its resistance changes significantly and predictably with changes in temperature. This characteristic is what makes it so useful as a temperature sensor.

From your reading of A. K. Sawhney's "A Course in Electronic Measurements and Instrumentation," you'll know that materials exhibit different electrical properties, and thermistors are made from semiconductor materials, typically metal oxides like oxides of nickel, manganese, cobalt, iron, and uranium. These are usually formed into a ceramic-like material and then encapsulated.

There are two main types of thermistors, and understanding their behavior is crucial for their application:

#### Types of Thermistors:

1.  **Negative Temperature Coefficient (NTC) Thermistors:**
    *   These are the most common type.
    *   **What happens?** As the temperature *increases*, the resistance of an NTC thermistor *decreases*.
    *   **Why?** In semiconductor materials, as temperature rises, more charge carriers (electrons and holes) are freed from their atomic bonds. This increased number of charge carriers allows more current to flow, hence the resistance drops. Imagine more tiny roads opening up for traffic as it gets warmer; the overall flow becomes easier.
    *   **Relatable Example:** Think about a crowded room. As more people enter (higher temperature), the room becomes more "conductive" to movement (lower resistance).
    *   **Application Connection (CO2: Apply the principles and functions of various types of Transducers in measuring systems):** This inverse relationship is key. If you connect an NTC thermistor in a circuit where you're measuring voltage, as the temperature goes up, the resistance goes down, which in turn affects the voltage reading in a predictable way. We'll see how this is used for measurement very soon.

2.  **Positive Temperature Coefficient (PTC) Thermistors:**
    *   These are less common but have specific, important applications.
    *   **What happens?** As the temperature *increases*, the resistance of a PTC thermistor *increases*.
    *   **Why?** In PTC materials, there's a critical temperature range. Below this temperature, their resistance is low. However, as they approach and exceed this critical temperature, the material undergoes a phase transition, leading to a sharp increase in resistance. It's like a dam breaking, suddenly restricting flow.
    *   **Relatable Example:** Imagine a material that starts as a solid, allowing little electrical flow. As it heats up, it melts or undergoes some structural change, becoming very resistive, almost like an insulator.
    *   **Application Connection (CO2):** PTC thermistors are often used for overcurrent protection or as self-regulating heating elements. If a circuit draws too much current, it heats up the PTC, its resistance shoots up, limiting the current.

### The Thermistor's Resistance-Temperature Relationship:

The defining characteristic of a thermistor is how its resistance changes with temperature. This relationship is **non-linear**, especially for NTC thermistors. While they are not linear like some RTDs (Resistance Temperature Detectors, which we might discuss later), their non-linearity is very consistent and predictable, which is perfect for calibration.

The most widely used model for NTC thermistors is the **Steinhart-Hart equation**. However, a simpler and often sufficient model for many applications is the **Beta (β) parameter equation**:

$R_T = R_0 e^{\beta (\frac{1}{T} - \frac{1}{T_0})}$

Where:
*   $R_T$ is the resistance at temperature $T$ (in Kelvin).
*   $R_0$ is the resistance at a reference temperature $T_0$ (in Kelvin).
*   $\beta$ is the "beta coefficient" or "material constant," specific to the thermistor material and the temperature range. It's typically given in Kelvin (K).

**Let's break this down:**
*   **$R_0$ and $T_0$:** These are your known reference points. For example, a thermistor might be specified as 10 kΩ at 25°C (298.15 K). So, $R_0 = 10 \text{ kΩ}$ and $T_0 = 298.15 \text{ K}$.
*   **$\beta$:** This constant is usually provided by the manufacturer. A higher $\beta$ value generally means a larger resistance change over a given temperature range.
*   **$T$:** This is the temperature you want to find the resistance for, expressed in Kelvin. Remember to always use Kelvin for these equations: Kelvin = Celsius + 273.15.

**Why is this equation important? (Exam Focus - CO2, CO3)**
Understanding this equation allows us to not only predict the thermistor's behavior but also to design circuits that can accurately measure temperature. If we know $R_0$, $T_0$, and $\beta$, and we can measure $R_T$, we can then calculate $T$. This is fundamental to using thermistors in measuring systems. David Bell's "Electronic Instrumentation and Measurements" often discusses these fundamental relationships in detail.

**Quick Recall Tip:** Remember that for NTC, as $T$ increases, $\frac{1}{T}$ decreases. The term $(\frac{1}{T} - \frac{1}{T_0})$ becomes more negative. Since $\beta$ is positive, the exponent becomes more negative, leading to $e^{\text{negative value}}$, which results in a *smaller* resistance. So, higher temperature -> lower resistance for NTC.

### How Do We Measure Temperature with a Thermistor?

The core idea is to convert the change in resistance ($R_T$) into a measurable electrical quantity, like voltage or current. The most common way to do this is by using the thermistor in a **voltage divider circuit**.

**The Voltage Divider Circuit:**

Imagine a simple series circuit with a known resistor ($R_1$) and the thermistor ($R_T$) connected across a stable voltage source ($V_{in}$).

```
      V_in
       |
       R1
       |
   ----*---- Output Voltage (V_out)
       |
      R_T
       |
      GND
```

In this circuit, the output voltage ($V_{out}$) measured across the thermistor is given by:

$V_{out} = V_{in} \times \frac{R_T}{R_1 + R_T}$

**Now, let's analyze this for an NTC thermistor:**
*   As temperature increases, $R_T$ decreases.
*   If $R_T$ decreases, the ratio $\frac{R_T}{R_1 + R_T}$ decreases.
*   Therefore, $V_{out}$ decreases.

So, by measuring $V_{out}$, we can infer the change in $R_T$, and consequently, the change in temperature. This directly ties into **CO2** by showing how we apply the principle of a resistive transducer (the thermistor) in a measuring system (the voltage divider).

**Considerations for Measurement (CO3: Illustrate the working principles... and identify various types of errors):**

1.  **Self-Heating:** When current flows through the thermistor, it dissipates power ($P = I^2R_T$). This power dissipation generates heat, which can cause the thermistor's temperature to rise above the ambient temperature being measured. This is a source of error.
    *   **Minimization:** Use a voltage divider circuit where the current flowing through the thermistor is kept as low as possible. This means using higher resistance values for $R_1$ and the thermistor itself (within practical limits). Also, ensuring good thermal contact between the thermistor and the medium it's measuring is crucial. Kim R. Fowler's "Electronic Instrument Design" often highlights these practical design considerations.

2.  **Linearization:** The non-linear relationship between resistance and temperature can be a problem if you need a linear output signal for simpler processing or display.
    *   **Solutions:**
        *   **Circuit Design:** Using specific circuit configurations can help to linearize the output over a limited temperature range.
        *   **Digital Compensation:** Modern systems use microcontrollers. You can read the $V_{out}$, calculate $R_T$, and then use the Steinhart-Hart or Beta equation (or a lookup table derived from it) to calculate the temperature. The microcontroller can then apply algorithms to linearize the reading or display it directly. This relates to **CO5: Understand and utilize various measurement systems**, where digital processing is a key part of modern measurement.

3.  **Accuracy and Stability:** The accuracy of the temperature measurement depends heavily on the accuracy of the reference resistor ($R_1$), the stability of the voltage source ($V_{in}$), and the precision with which the thermistor's parameters ($\beta$, $R_0$) are known and maintained.
    *   **Reference Resistor:** Using a precision, low-temperature-coefficient resistor for $R_1$ is important.
    *   **Voltage Source:** A stable, regulated power supply is essential.
    *   **Thermistor Parameters:** Manufacturers provide datasheets with these values. It's vital to use the correct values for the specific thermistor model.

### Applications of Thermistors:

Thermistors are found everywhere! Their sensitivity, low cost, and good interchangeability (for many NTC types) make them incredibly versatile.

*   **Temperature Measurement:** This is the most obvious one. Think digital thermometers, thermostats for your home or car, ovens, refrigerators, and medical equipment.
*   **Temperature Compensation:** In electronic circuits, temperature can affect the performance of other components. A thermistor can be used to counteract these effects. For example, if another component's value drifts up with temperature, a thermistor whose resistance drifts down can be used to compensate. This is a great example of **CO2** and **CO3**.
*   **Inrush Current Limiting (PTC Thermistors):** As mentioned earlier, PTC thermistors are excellent for this. When a device is first powered on, there's a surge of current. A PTC thermistor placed in series will have low resistance initially, allowing the surge. As it heats up from the current, its resistance increases, limiting the current to a safe level. This is like a self-controlled fuse.
*   **Over-temperature Protection (PTC Thermistors):** Similar to inrush current limiting, if a device overheats, the PTC's resistance increases dramatically, potentially shutting off the current to prevent damage.
*   **Battery Pack Monitoring:** Thermistors are often embedded in rechargeable battery packs to monitor their temperature during charging and discharging, ensuring safety and optimizing performance.

### Thermistors vs. Other Temperature Sensors:

It's helpful to contrast thermistors with other common temperature sensors like RTDs and thermocouples.

*   **Thermistors (NTC):**
    *   **Pros:** High sensitivity, fast response time, low cost, good interchangeability (many types).
    *   **Cons:** Non-linear output, limited temperature range compared to thermocouples, self-heating can be an issue.
    *   **Ideal For:** Applications requiring high sensitivity and quick readings over moderate temperature ranges where linearity isn't paramount or can be compensated for.

*   **RTDs (Resistance Temperature Detectors, e.g., Pt100):**
    *   **Pros:** More linear output than thermistors, good accuracy, wider temperature range.
    *   **Cons:** Lower sensitivity than thermistors, more expensive, slower response time.
    *   **Ideal For:** Precision measurements where linearity and a wider temperature range are needed.

*   **Thermocouples:**
    *   **Pros:** Very wide temperature range (can go extremely high), robust, inexpensive per unit.
    *   **Cons:** Low output voltage (mV range), requires cold-junction compensation, less sensitive than thermistors, requires specialized instrumentation.
    *   **Ideal For:** High-temperature measurements, industrial applications where robustness is key.

Understanding these trade-offs, as discussed in books like D. Patranabis's "Sensors and Transducers," is vital for selecting the right sensor for a given application, which is a core concept in **CO1** and **CO2**.

### Summary and Key Takeaways:

So, to recap our discussion on thermistors:

*   They are **temperature-sensitive resistors**, typically made from semiconductor metal oxides.
*   **NTC thermistors** decrease resistance with increasing temperature, while **PTC thermistors** increase resistance with increasing temperature.
*   The resistance-temperature relationship is **non-linear**, often described by the Beta parameter equation or the Steinhart-Hart equation.
*   They are commonly used in **voltage divider circuits** to convert resistance changes into measurable voltage changes.
*   Key considerations for accurate measurement include **self-heating**, **linearization**, and ensuring **stable reference components**.
*   Applications span from simple **temperature measurement** to **over-current protection** and **temperature compensation**.

Remember this: thermistors are a fantastic blend of simplicity and effectiveness in temperature sensing. Their behavior is predictable, allowing us to leverage that predictability to build accurate and cost-effective measurement systems. This ties directly into **CO5**, where understanding how to *utilize* these measurement systems is crucial.

### Sample Questions with Answers:

**Question 1 (Conceptual - CO1, CO2):**
Explain why an NTC thermistor is considered a transducer and how its primary characteristic (resistance change) is utilized to measure temperature.

**Answer:**
An NTC thermistor is a transducer because it converts thermal energy (temperature) into an electrical signal (a change in resistance). This change in resistance is not directly readable as a temperature value by most instruments. To utilize this characteristic, the thermistor is typically incorporated into an electrical circuit, most commonly a voltage divider. As the ambient temperature changes, the thermistor's resistance ($R_T$) changes according to its specific temperature-resistance relationship (e.g., Beta equation). This change in $R_T$ alters the voltage distribution across the circuit. For example, in a voltage divider with a fixed resistor $R_1$, a decrease in $R_T$ (due to increased temperature for NTC) causes the output voltage across the thermistor ($V_{out} = V_{in} \times R_T / (R_1 + R_T)$) to decrease. By measuring this output voltage, and knowing the parameters of the thermistor and the circuit, the temperature can be accurately calculated.

**Question 2 (Exam-Oriented - CO2, CO3):**
A particular NTC thermistor has a resistance of 10 kΩ at 25°C (298.15 K) and a Beta (β) value of 3435 K. If this thermistor is used in a voltage divider circuit with a 5V supply and a 10 kΩ fixed resistor ($R_1$), what will be the output voltage ($V_{out}$) across the thermistor when the temperature rises to 50°C (323.15 K)?

**Answer:**
First, we need to calculate the resistance of the thermistor at 50°C (323.15 K) using the Beta parameter equation:
$R_T = R_0 e^{\beta (\frac{1}{T} - \frac{1}{T_0})}$

Given:
*   $R_0 = 10 \text{ kΩ} = 10 \times 10^3 \text{ Ω}$
*   $T_0 = 25^\circ\text{C} = 298.15 \text{ K}$
*   $\beta = 3435 \text{ K}$
*   $T = 50^\circ\text{C} = 323.15 \text{ K}$

Calculate the exponent:
$\frac{1}{T} - \frac{1}{T_0} = \frac{1}{323.15 \text{ K}} - \frac{1}{298.15 \text{ K}}$
$\frac{1}{323.15} \approx 0.0030945$
$\frac{1}{298.15} \approx 0.0033540$
$(\frac{1}{T} - \frac{1}{T_0}) \approx 0.0030945 - 0.0033540 = -0.0002595 \text{ K}^{-1}$

Now, calculate the exponent term:
$\beta \times (\frac{1}{T} - \frac{1}{T_0}) = 3435 \text{ K} \times (-0.0002595 \text{ K}^{-1}) \approx -0.89198$

Calculate $R_T$:
$R_T = (10 \times 10^3 \text{ Ω}) \times e^{-0.89198}$
$R_T \approx (10 \times 10^3) \times 0.4102 \text{ kΩ}$
$R_T \approx 4.102 \text{ kΩ}$

Now, use the voltage divider formula to find $V_{out}$:
$V_{out} = V_{in} \times \frac{R_T}{R_1 + R_T}$
$V_{out} = 5 \text{ V} \times \frac{4.102 \text{ kΩ}}{10 \text{ kΩ} + 4.102 \text{ kΩ}}$
$V_{out} = 5 \text{ V} \times \frac{4.102}{14.102}$
$V_{out} \approx 5 \text{ V} \times 0.2908 \approx 1.454 \text{ V}$

Therefore, the output voltage across the thermistor at 50°C will be approximately 1.454 V. This demonstrates how a temperature change leads to a predictable voltage change, as per **CO2**.

**Question 3 (Conceptual/Application - CO3):**
What is self-heating in a thermistor, and how can it be minimized when used as a temperature sensor?

**Answer:**
Self-heating occurs when current flows through a thermistor, causing it to dissipate power as heat ($P = I^2 R_T$). This generated heat raises the thermistor's internal temperature, making it read a temperature higher than the actual ambient temperature it's supposed to measure. This is a significant error source in thermistor-based measurements.

To minimize self-heating:
1.  **Reduce Measuring Current:** The power dissipated is proportional to the square of the current. Therefore, keeping the current as low as possible is crucial. This is achieved by using higher resistance value thermistors and reference resistors in voltage divider circuits.
2.  **Use Appropriate Circuitry:** Design measurement circuits that require minimal current to obtain a readable output.
3.  **Ensure Good Thermal Contact:** Maximize the thermal conductivity between the thermistor and the environment it is measuring. This allows the heat generated by self-heating to dissipate quickly into the surrounding medium, reducing the temperature difference.
4.  **Limit Excitation Time:** In some applications, the excitation voltage/current is applied only for the short duration needed to take a reading, rather than continuously.

This question directly addresses error identification and minimization, aligning with **CO3**.
