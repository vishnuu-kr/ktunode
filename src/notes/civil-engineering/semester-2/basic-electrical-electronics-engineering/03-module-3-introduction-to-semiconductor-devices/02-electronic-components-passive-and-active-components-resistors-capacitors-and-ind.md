---
title: "Electronic components- Passive and active components - Resistors, Capacitors and Inductors (constructional features not required): types, specifications. Standard values, colour coding"
subject: "BASIC ELECTRICAL & ELECTRONICS ENGINEERING"
module: "Module 3: Introduction to Semiconductor devices:"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912e00"
status: "completed"
scrapedAt: "2026-05-20T18:32:47.931Z"
---
# Module 3: Introduction to Semiconductor Devices

## Topic: Electronic Components - Passive and Active Components: Resistors, Capacitors, and Inductors (Types, Specifications, Standard Values, Colour Coding)

Welcome, everyone! Today, we're diving into the building blocks of all electrical and electronic circuits: the fundamental electronic components. You've already learned about basic circuit laws and concepts, and now we're going to see what makes those circuits actually *work*. Think of these components like the different ingredients in a recipe; you need the right ones in the right amounts to create the final dish.

Our focus today will be on three very important passive components: resistors, capacitors, and inductors. We'll also touch upon the distinction between passive and active components to set the stage. Remember, understanding these components is crucial for pretty much everything you'll do in electrical and electronics engineering, especially for achieving **Course Outcome 4: Describe the fundamental concepts of electronic components and devices**.

### 1. Passive vs. Active Components: A Fundamental Distinction

Before we get into the specifics of resistors, capacitors, and inductors, it's important to understand a core classification in electronics: the difference between passive and active components.

*   **Passive Components:** These are the workhorses that don't provide any energy gain. They either dissipate energy (like resistors) or store energy (like capacitors and inductors). They can't amplify a signal or generate a new one. Think of them as the "consumers" or "storage units" of electrical energy. They are essential for controlling and shaping the flow of electricity. According to **D. P. Kothari and I. J. Nagrath** in their "Basic Electrical Engineering," passive components are those that cannot introduce energy into a circuit or generate a voltage or current.

*   **Active Components:** These components, on the other hand, can deliver energy to a circuit or amplify signals. They are the "creators" or "amplifiers" of electrical energy. Examples include transistors, operational amplifiers (op-amps), and integrated circuits (ICs). They are the ones that make complex electronic functions possible. We'll delve into these more in later modules, but it's good to know they exist and how they differ from the passive components we're discussing today.

So, our focus today is on the passive ones: resistors, capacitors, and inductors. Let's start with the most fundamental of them all: the resistor.

### 2. Resistors: The Current Controllers

What does a resistor do? Simply put, it **resists** the flow of electric current. Imagine water flowing through a pipe. A resistor is like a narrow section or an obstacle in that pipe that makes it harder for the water to flow. The 'difficulty' it presents is measured by its **resistance**, usually denoted by the symbol 'R' and measured in **Ohms (Ω)**.

This concept is directly related to **Ohm's Law** ($V = IR$), which you've likely encountered. A resistor is the component that embodies this relationship between voltage and current.

**CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits.** Understanding resistors is absolutely key to applying Ohm's Law and Kirchhoff's Laws to analyze circuits.

#### Types of Resistors:

While all resistors resist current, they are designed and manufactured in different ways to suit various applications.

*   **Fixed Resistors:** These have a resistance value that is set during manufacturing and doesn't change.
    *   **Carbon Composition Resistors:** These are older but still found in some applications. They are made from a mixture of carbon powder and a binding resin. They are generally inexpensive but can have poor tolerance and are sensitive to temperature and humidity.
    *   **Carbon Film Resistors:** A thin layer of carbon is deposited onto a ceramic rod. They offer better stability and tolerance than carbon composition types and are good for general-purpose use.
    *   **Metal Film Resistors:** A thin film of metal alloy (like nickel-chromium) is deposited onto a ceramic rod. These are very popular due to their good stability, low temperature coefficient, and precise resistance values. They are often used in applications requiring accuracy, like measurement instruments.
    *   **Wire-Wound Resistors:** These are made by winding a resistive wire (often a Nichrome alloy) around a ceramic core. They can handle high power and are very robust. They are commonly used in power supplies, motor controls, and high-power circuits. You might see them used as "bleeder resistors" in power supplies to discharge capacitors safely, connecting to **CO2: Develop an awareness on the fundamentals of electric power generation, transmission and distribution** where power handling is critical.

*   **Variable Resistors (Potentiometers and Rheostats):** These allow you to change the resistance value.
    *   **Potentiometers:** These have three terminals. Two are connected to the ends of a resistive track, and the third is a wiper that moves along the track. By adjusting the wiper, you can get a variable voltage output, making them useful as volume controls or position sensors. Think of your home stereo volume knob – that's often a potentiometer.
    *   **Rheostats:** These are essentially potentiometers used with only two terminals (one end and the wiper) to vary current in a circuit. They are typically used for higher current applications than potentiometers.

#### Specifications of Resistors:

When choosing a resistor, you need to consider more than just its resistance value.

*   **Resistance Value:** The primary specification, measured in Ohms (Ω), Kilohms (kΩ), or Megohms (MΩ).
*   **Tolerance:** This tells you how much the actual resistance can deviate from the stated value. It's usually expressed as a percentage (e.g., ±5%, ±1%). A tighter tolerance means a more precise resistor. For example, a 100Ω resistor with 5% tolerance can have an actual resistance anywhere between 95Ω and 105Ω.
*   **Power Rating:** This is the maximum amount of power (in Watts) the resistor can dissipate without overheating or being damaged. It's crucial for preventing resistors from burning out. If you calculate that a resistor will dissipate 0.5W, you should choose a resistor with a power rating significantly higher than that, perhaps 1W or 2W, for safety and reliability. This ties into energy dissipation, a key concept in circuit analysis.
*   **Temperature Coefficient:** This indicates how much the resistance changes with a change in temperature. It's usually expressed in parts per million per degree Celsius (ppm/°C). Low temperature coefficients are desirable for applications where temperature variations are significant.
*   **Maximum Working Voltage:** The maximum voltage that can be applied across the resistor. Exceeding this can lead to breakdown.

#### Standard Values:

Resistors are not manufactured with every possible resistance value. They come in standard series of values, often based on the **E-series** (like E6, E12, E24, E48, E96). These series ensure that there's a reasonable progression of values without too much overlap. For instance, in the E12 series, you'll find values like 10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82, and then the next decade starts again (100, 120, etc.). This helps in standardizing component manufacturing and availability.

#### Colour Coding: The Resistor's "Identity Card"

How do we know the value of a resistor if there are no visible markings? For small resistors, like carbon film or metal film types, a coloured band system is used. This is a very common exam topic!

**The Resistor Colour Code:**

You'll see bands of colour on the resistor body. Typically, there are four or five bands.

*   **Four-Band Code:**
    *   **Band 1:** First digit of the resistance value.
    *   **Band 2:** Second digit of the resistance value.
    *   **Band 3:** Multiplier (the power of 10 by which to multiply the first two digits).
    *   **Band 4:** Tolerance (percentage of the resistance value).

*   **Five-Band Code (for precision resistors):**
    *   **Band 1:** First digit.
    *   **Band 2:** Second digit.
    *   **Band 3:** Third digit.
    *   **Band 4:** Multiplier.
    *   **Band 5:** Tolerance.

**Here's the crucial part – the colour-to-number mapping:**

| Colour | Digit | Multiplier | Tolerance (%) | Temperature Coeff (ppm/°C) |
| :----- | :---- | :--------- | :------------ | :------------------------- |
| Black  | 0     | $10^0$ (1) | -             | 250                        |
| Brown  | 1     | $10^1$ (10)| ±1            | 100                        |
| Red    | 2     | $10^2$ (100)| ±2            | 50                         |
| Orange | 3     | $10^3$ (1k)| -             | 15                         |
| Yellow | 4     | $10^4$ (10k)| -             | 25                         |
| Green  | 5     | $10^5$ (100k)| ±0.5          | 20                         |
| Blue   | 6     | $10^6$ (1M)| ±0.25         | 10                         |
| Violet | 7     | $10^7$ (10M)| ±0.1          | 5                          |
| Grey   | 8     | $10^8$ (100M)| ±0.05         | 1                          |
| White  | 9     | $10^9$ (1G)| -             | -                          |
| Gold   | -     | $10^{-1}$ (0.1)| ±5            | -                          |
| Silver | -     | $10^{-2}$ (0.01)| ±10           | -                          |
| None   | -     | -          | ±20           | -                          |

**A handy mnemonic to remember the colours for digits (0-9):** "**B**ad **B**oys **R**ace **O**ur **Y**oung **G**irls **B**ut **V**iolet **G**enerally **W**ins." (Black, Brown, Red, Orange, Yellow, Green, Blue, Violet, Grey, White).

**Example:** A resistor with bands **Brown, Black, Red, Gold**.
*   Brown = 1
*   Black = 0
*   Red = Multiplier $10^2$ (100)
*   Gold = Tolerance ±5%

So, the resistance is $(10 \times 100) \Omega = 1000 \Omega = 1 \text{ k}\Omega$.
The tolerance is ±5%. This means the actual resistance can be anywhere between $1000 - 0.05 \times 1000 = 950 \Omega$ and $1000 + 0.05 \times 1000 = 1050 \Omega$.

**Remember this:** Always read the colour bands from the end with the closer bands. The tolerance band (often gold or silver) is usually separated from the others.

### 3. Capacitors: The Energy Storers (in Electric Fields)

If resistors control current flow by dissipating energy as heat, capacitors store energy in an **electric field**. Imagine two metal plates separated by an insulating material. This is the basic construction of a capacitor. When a voltage is applied, positive charge builds up on one plate and negative charge on the other, creating an electric field in the insulator.

The ability of a capacitor to store charge is called its **capacitance**, denoted by 'C' and measured in **Farads (F)**. However, the Farad is a very large unit, so you'll typically see capacitors measured in microfarads ($\mu$F), nanofarads (nF), or picofarads (pF).

$1 \mu\text{F} = 10^{-6}\text{ F}$
$1 \text{ nF} = 10^{-9}\text{ F}$
$1 \text{ pF} = 10^{-12}\text{ F}$

Capacitors have an important characteristic: they **oppose sudden changes in voltage**. If you try to change the voltage across a capacitor instantly, it will resist that change. This property is vital in smoothing out voltage fluctuations in power supplies or in filtering unwanted frequencies. This behaviour makes them crucial for **CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits** in dynamic circuit analysis.

#### Types of Capacitors:

Capacitors are classified by the type of dielectric (insulating material) used between the plates.

*   **Electrolytic Capacitors:** These offer very high capacitance values in small sizes. They use a thin oxide layer as the dielectric, formed by an electrochemical process.
    *   **Polarized:** This is a key feature. Electrolytic capacitors have a positive and negative terminal, and they *must* be connected correctly in a DC circuit. Reversing the polarity can damage or even destroy the capacitor. They are often used in power supply filtering.
    *   **Types:** Aluminum Electrolytic, Tantalum Electrolytic (known for their small size and stability, but can be more expensive).

*   **Non-Polarized Capacitors:** These can be connected in either direction in a circuit, making them suitable for AC applications.
    *   **Ceramic Capacitors:** Use ceramic as the dielectric. They are inexpensive, come in small sizes, and are good for high-frequency applications like decoupling and filtering. Their capacitance can vary significantly with temperature.
    *   **Film Capacitors:** Use plastic films (like polyester, polypropylene, polystyrene) as the dielectric. They offer good stability, low losses, and good performance at high frequencies. They are often used in audio circuits and timing circuits.
    *   **Mica Capacitors:** Use mica as the dielectric. They are known for their excellent stability, accuracy, and high-temperature performance, making them ideal for high-frequency applications where precision is needed, like in radio transmitters.

#### Specifications of Capacitors:

*   **Capacitance Value:** The primary specification, measured in Farads (or its sub-units).
*   **Tolerance:** Similar to resistors, it indicates the allowable deviation from the marked capacitance, usually ±10% or ±20% for electrolytic capacitors, and tighter for others.
*   **Working Voltage (WVDC or Voltage Rating):** The maximum DC voltage that can be safely applied across the capacitor. Always choose a capacitor with a working voltage significantly higher than the expected operating voltage in your circuit. For example, if your circuit has a 12V supply, a 16V or 25V rated capacitor would be a safe choice.
*   **Temperature Coefficient:** How capacitance changes with temperature. Some capacitors are designed to have very low temperature coefficients for stability.
*   **Leakage Current:** Ideally, a capacitor's dielectric is a perfect insulator, but in reality, a small amount of current can "leak" through it. Electrolytic capacitors tend to have higher leakage currents than others. This is important in circuits where very small currents are involved.
*   **ESR (Equivalent Series Resistance):** All real capacitors have a small amount of internal resistance in series with their capacitance. This ESR can affect performance, especially at high frequencies or in power applications.

#### Capacitor Colour Coding (Less Common than Resistors, but Exists):**

While resistors have a very standardized colour code, capacitor marking can be more varied. You'll often see direct numerical values printed, along with voltage ratings. For older or smaller capacitors, colour codes *were* used, but they are less uniform than resistor codes. If you encounter them, you'll need to consult a specific chart for that type of capacitor. The important takeaway is to be able to read the marked values and ratings directly on modern components.

### 4. Inductors: The Energy Storers (in Magnetic Fields)

Our third passive component is the inductor. An inductor is essentially a coil of wire, often wound around a core material (like air, iron, or ferrite). When current flows through the coil, it creates a **magnetic field**. This magnetic field stores energy.

The ability of an inductor to store energy in a magnetic field is called its **inductance**, denoted by 'L' and measured in **Henries (H)**. Like Farads, the Henry is a large unit, so you'll commonly see millihenries (mH) and microhenries ($\mu$H) used.

$1 \text{ mH} = 10^{-3}\text{ H}$
$1 \mu\text{H} = 10^{-6}\text{ H}$

Inductors have a key characteristic: they **oppose sudden changes in current**. If you try to change the current through an inductor quickly, it will generate a voltage that opposes this change. This is due to the magnetic field collapsing or building up. This property is crucial in filtering, tuning circuits (like in radios), and in power conversion. Inductors play a significant role in AC circuits and in energy storage. This connects to **CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits**.

#### Types of Inductors:

Inductors are categorized by their construction and core material.

*   **Air-Core Inductors:** The coil is wound on a non-magnetic form (like plastic or ceramic). They have no magnetic losses but lower inductance values. Useful in high-frequency RF circuits where precise inductance and minimal losses are critical.
*   **Iron-Core Inductors:** Use iron or ferrite as the core material. The iron core significantly increases the magnetic field strength, allowing for much higher inductance values.
    *   **Laminated Iron Core:** Used in transformers and chokes for AC applications. The laminations help reduce energy losses due to eddy currents.
    *   **Ferrite Core:** Ferrite is a ceramic material with magnetic properties. Ferrite-core inductors are common in power supplies, RF circuits, and suppression filters. They offer good inductance with moderate losses.
*   **Toroidal Inductors:** Coils wound around a doughnut-shaped (toroidal) core. They are popular because the magnetic flux is mostly contained within the core, reducing electromagnetic interference (EMI) and making them efficient.

#### Specifications of Inductors:

*   **Inductance Value:** The primary specification, measured in Henries (or its sub-units).
*   **Tolerance:** Indicates the allowable variation from the marked inductance, typically ±10% or ±20%.
*   **DC Resistance (DCR):** The resistance of the wire used to make the coil. This resistance causes power loss (as heat) when current flows through the inductor. Low DCR is desirable, especially in power applications.
*   **Current Rating:** The maximum current the inductor can handle before its core saturates or the wire overheats. Core saturation means the inductor loses its inductance property.
*   **Q Factor (Quality Factor):** A measure of the inductor's efficiency. It's the ratio of its inductive reactance to its resistance. A higher Q factor means a more ideal inductor with lower losses.

#### Inductor Colour Coding:

Inductors rarely use a colour coding system similar to resistors. They typically have their inductance value, tolerance, and sometimes other specifications printed directly on them. For smaller inductors, you might see numerical codes similar to capacitor markings.

### Connecting to Course Outcomes:

Throughout this discussion, we've seen how these components are fundamental to **CO4: Describe the fundamental concepts of electronic components and devices**. They are the basic elements used to build more complex circuits.

Furthermore, understanding how resistors dissipate power, capacitors store energy in electric fields, and inductors store energy in magnetic fields is crucial for **CO1: Apply fundamental concepts and circuit laws to solve simple DC/AC electric circuits**. You'll use these properties in analyzing steady-state and transient behavior of circuits.

For example, in power electronics (related to **CO2: Develop an awareness on the fundamentals of electric power generation, transmission and distribution**), inductors are used in filters to smooth out rectified AC voltages, and capacitors are used to store energy and smooth voltage ripples.

### Example Scenario: A Simple Radio Tuner

Think about tuning an old analog radio.
*   The **capacitor** in the tuning circuit is often a variable capacitor. As you turn the tuning knob, you change the capacitance value.
*   This variable capacitor, along with a fixed **inductor** in the circuit, forms a "resonant circuit" (an LC circuit).
*   This circuit is designed to resonate at a specific frequency – the frequency of the radio station you want to listen to.
*   The **resistor**s in the circuit help control the flow of current and the overall behaviour of the tuning stage.

By changing the capacitance, you change the resonant frequency, allowing the circuit to pick up signals from different radio stations. This illustrates how these passive components, when combined, perform a specific function.

### Quick Review and Exam Tips:

*   **Passive vs. Active:** Resistors, capacitors, inductors are passive. They don't amplify.
*   **Resistor:** Resists current ($V=IR$), measured in Ohms. Key specs: Resistance, Tolerance, Power Rating. Remember the colour code for exams!
*   **Capacitor:** Stores energy in an electric field, opposes voltage change. Measured in Farads. Key specs: Capacitance, Tolerance, Working Voltage. Polarized vs. Non-polarized is important.
*   **Inductor:** Stores energy in a magnetic field, opposes current change. Measured in Henries. Key specs: Inductance, Tolerance, Current Rating, DCR.
*   **Common Pitfalls:** Incorrectly reading resistor colour codes (especially the multiplier and tolerance bands), connecting polarized capacitors incorrectly, choosing components with insufficient power or voltage ratings.

This foundation in passive components is vital. As we move forward, we'll see how these interact with active components to create all the amazing electronic devices we use every day.

---

### Sample Questions and Answers

**Q1. What is the primary function of a resistor in an electrical circuit?**
**Answer:** The primary function of a resistor is to oppose or limit the flow of electric current. It dissipates electrical energy as heat, and its behaviour is governed by Ohm's Law ($V = IR$).

**Q2. A resistor has the colour bands: Yellow, Violet, Orange, Silver. What is its resistance value and tolerance?**
**Answer:**
*   Yellow = 4 (first digit)
*   Violet = 7 (second digit)
*   Orange = $10^3$ (multiplier)
*   Silver = ±10% (tolerance)

Therefore, the resistance is $(47 \times 10^3) \Omega = 47 \text{ k}\Omega$.
The tolerance is ±10%.

**Q3. Explain the difference between a polarized and a non-polarized capacitor.**
**Answer:**
*   **Polarized capacitors** (like most electrolytic capacitors) have a specific polarity and must be connected with the correct voltage across their terminals (positive to positive, negative to negative). If connected in reverse, they can be damaged or fail. They are typically used in DC circuits.
*   **Non-polarized capacitors** (like ceramic or film capacitors) do not have a polarity and can be connected in either direction. They are suitable for both DC and AC circuits.

**Q4. Why are capacitors considered "passive" components?**
**Answer:** Capacitors are considered passive components because they do not provide any energy gain or amplification to the circuit. They store energy in an electric field, and while they can release this stored energy, they cannot generate new energy or increase the power of a signal.

**Q5. An inductor is said to oppose changes in current. Explain this phenomenon.**
**Answer:** When current flows through an inductor, it creates a magnetic field. If the current attempts to change rapidly, the changing magnetic field induces a voltage (back EMF) across the inductor. This induced voltage opposes the change in current, effectively slowing down or resisting the change. This is a fundamental property based on Faraday's Law of Induction.

**Q6. A 100 $\mu$F capacitor is rated for a working voltage of 16V. If it is used in a circuit with a supply voltage of 15V, is this a safe operating condition? Justify your answer.**
**Answer:** Yes, this is a safe operating condition. The working voltage rating (16V) indicates the maximum DC voltage the capacitor can withstand continuously. Since the supply voltage (15V) is less than the working voltage rating, the capacitor is operating within its specified limits. It's always good practice to have a margin between the operating voltage and the rated voltage.

---
