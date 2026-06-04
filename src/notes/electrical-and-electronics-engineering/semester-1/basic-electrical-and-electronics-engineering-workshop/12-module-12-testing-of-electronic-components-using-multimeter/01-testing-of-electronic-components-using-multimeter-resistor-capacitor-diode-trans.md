---
title: "Testing of electronic components using multimeter - Resistor, Capacitor, Diode, Transistor and JFET."
subject: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP"
module: "Module 12: Testing of electronic components using multimeter "
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213d9ece2bdd875f939a"
status: "completed"
scrapedAt: "2026-05-23T16:00:51.125Z"
---
# Module 12: Testing of Electronic Components Using Multimeter

Welcome, everyone! In this module, we're going to get our hands dirty with one of the most fundamental tools in any electrical and electronics workshop: the **multimeter**. You've probably seen it, maybe even used it for basic voltage checks. Today, we're going to elevate our understanding and learn how to use it not just as a measuring device, but as a diagnostic tool to test the health and functionality of various common electronic components. This is crucial for troubleshooting circuits, identifying faulty parts, and ensuring our projects work as intended.

Remember our Course Outcome 5: "Operate various measuring instruments"? This module directly addresses that (K3 - Understanding/Application). By the end of this session, you'll be proficient in using the multimeter to test resistors, capacitors, diodes, transistors, and even JFETs. This practical skill is also vital for CO6, "Apply the design procedure of simple electronic circuits on breadboard and PCB," because you need to be sure the components you're using are good before you even start building! And of course, we'll always be mindful of CO1, "Demonstrate safety measures against electrical shocks," as we work with any electrical equipment.

Let's start by quickly revisiting what a multimeter is and its basic functions, as covered in our introductory sessions.

## Understanding the Multimeter: Our Essential Toolkit

Think of a multimeter as a versatile toolbox for electrical measurements. It can measure voltage (AC and DC), current, and resistance. Most modern multimeters are digital (DMMs), displaying readings numerically, which makes them easier to read than older analog meters.

When testing components, we'll primarily be using two functions:
*   **Resistance Measurement (Ohmmeter):** This is used to measure how much a component opposes the flow of electrical current. It's like measuring how "sticky" a pipe is for water flow. A good resistor will have a resistance close to its marked value.
*   **Diode Test Function:** This is a specialized mode that applies a small voltage and measures the current flow, specifically designed to check diodes and transistors.

**Key Concept:** When measuring resistance, *always* ensure the circuit is powered off and the component is isolated if possible. Measuring resistance in a live circuit can damage the multimeter and give incorrect readings. This links back to our safety outcome, CO1.

Let's dive into testing each component.

### 1. Testing Resistors

Resistors are the workhorses of electronics, controlling the flow of current. Their primary characteristic is their **resistance**, measured in Ohms ($\Omega$).

**How to Test:**

1.  **Set the Multimeter:** Select the resistance (Ohms, $\Omega$) mode on your multimeter. You'll see a range of values.
2.  **Choose the Range:** Start with a range that you expect the resistor's value to fall into. If you don't know, start with a mid-range and adjust up or down. For example, if the resistor has color bands indicating 1k$\Omega$ (1000 Ohms), you'd set your multimeter to the 2k$\Omega$ or 20k$\Omega$ range.
3.  **Connect the Probes:** Touch the multimeter probes to the two leads of the resistor. Polarity doesn't matter for standard resistors.
4.  **Read the Value:**
    *   **Good Resistor:** The multimeter will display a value close to the resistor's marked value (considering its tolerance). For instance, if it's a 1k$\Omega$ resistor with 5% tolerance, the reading should be between 950$\Omega$ and 1050$\Omega$.
    *   **Open Resistor (Bad):** If the multimeter reads "OL" (Over Limit) or a very high, infinite resistance, the resistor is likely open-circuited and needs replacement. This means the path for current is broken. Imagine a pipe completely clogged.
    *   **Short Circuit (Bad):** If the multimeter reads very close to 0$\Omega$, the resistor might be short-circuited. This is less common for resistors unless they've been physically damaged.

**Example:** Let's say you have a resistor with yellow, violet, red, and gold bands. From our basic electronics knowledge (CO4 - Identifying Components), these bands correspond to 4, 7, $\times 10^2$, and $\pm 5\%$ tolerance. So, it's a 4700$\Omega$ or 4.7k$\Omega$ resistor with a 5% tolerance. When you test it, you expect a reading between 4465$\Omega$ and 4935$\Omega$. If you get "OL," it's dead. If you get 0$\Omega$, it's shorted.

**Exam Tip:** Questions often ask about interpreting the multimeter reading for a resistor with a specific color code. Always remember to account for the tolerance!

### 2. Testing Capacitors

Capacitors store electrical energy in an electric field. Their ability to store charge is measured in Farads (F), typically in microfarads ($\mu$F), nanofarads (nF), or picofarads (pF).

Testing capacitors with a multimeter is a bit more nuanced than resistors, as a simple resistance test isn't always definitive.

**How to Test (Basic Check):**

1.  **Discharge the Capacitor:** **Crucially important!** Capacitors can hold a charge even when the circuit is off. Always discharge a capacitor before testing by shorting its leads with an insulated screwdriver or a resistor. Failing to do this is a safety hazard (CO1) and can damage your multimeter.
2.  **Set the Multimeter:** Switch to the resistance mode ($\Omega$).
3.  **Choose a High Range:** Select the highest resistance range on your multimeter (e.g., 200k$\Omega$ or higher).
4.  **Connect the Probes:** Touch the probes to the capacitor's leads. For polarized capacitors (like electrolytic capacitors), the **positive probe of the multimeter** should be connected to the **positive lead of the capacitor** (usually marked with a '+', or the longer lead). For non-polarized capacitors (like ceramic or film capacitors), polarity doesn't matter.
5.  **Observe the Reading:**
    *   **Good Capacitor (especially larger ones):** For larger capacitance values (e.g., $\mu$F range), the multimeter will initially show a low resistance as the capacitor starts to charge from the multimeter's battery. The resistance reading should then *gradually increase* towards infinity ("OL"). This is because the capacitor is charging up. It's like watching a bucket slowly fill with water – the flow (current) decreases as it fills.
    *   **Good Capacitor (small values):** For very small capacitance values (pF or low nF), the resistance might jump to "OL" almost immediately, which is normal as they charge very quickly.
    *   **Short-Circuited Capacitor (Bad):** If the multimeter immediately shows a very low resistance (close to 0$\Omega$) and stays there, the capacitor is short-circuited. It's like a pipe with a hole that lets all the water through instantly.
    *   **Open-Circuited Capacitor (Bad):** If the multimeter immediately reads "OL" and stays there, even for larger capacitors, it might be open-circuited. This means it cannot store any charge.

**Limitations:** This basic resistance test can only reliably identify shorted or totally open capacitors. It won't tell you if a capacitor has lost capacitance (degraded) or has high Equivalent Series Resistance (ESR), which can cause subtle circuit problems. For more accurate testing, you'd use a capacitance meter or an ESR meter. However, for basic workshop checks, this method is very useful for identifying dead capacitors.

**Example:** Imagine testing a 100$\mu$F electrolytic capacitor. You'd discharge it, set your multimeter to 200k$\Omega$, connect the red probe to the positive terminal and the black probe to the negative. You should see the reading start low (maybe a few k$\Omega$) and climb steadily towards "OL" over a few seconds. If it stays at 0$\Omega$, it's bad. If it immediately reads "OL," it's likely bad.

**Exam Tip:** Be prepared for questions on capacitor polarity and the characteristic resistance reading change (increasing resistance) when testing good capacitors. Always emphasize the discharge step!

### 3. Testing Diodes

Diodes are semiconductor devices that allow current to flow primarily in one direction. They act like a one-way valve for electricity. This unidirectional property is crucial for many circuits.

**How to Test:**

1.  **Isolate the Diode:** If the diode is in a circuit, it's best to desolder and remove at least one lead to avoid parallel paths affecting the reading.
2.  **Set the Multimeter:** Switch your multimeter to the **Diode Test** mode. This is usually represented by a diode symbol ($\rightarrow \hspace{-1mm} | \hspace{-1mm} \text{-}$). This mode applies a small voltage (typically around 2-3V) and measures the forward voltage drop.
3.  **Test in Forward Bias:** Connect the **red probe** (positive) to the **anode** of the diode (usually the end without the band) and the **black probe** (negative) to the **cathode** (usually the end with the band).
    *   **Good Diode (Forward Bias):** The multimeter should display a voltage reading, typically between 0.5V and 0.8V for silicon diodes, and around 0.2V to 0.3V for germanium diodes. This is the "forward voltage drop."
4.  **Test in Reverse Bias:** Now, reverse the probes. Connect the **red probe** to the **cathode** and the **black probe** to the **anode**.
    *   **Good Diode (Reverse Bias):** The multimeter should display "OL" (Over Limit) or a very high reading, indicating that very little to no current flows in the reverse direction.
5.  **Interpreting Results:**
    *   **Open Diode (Bad):** If you get "OL" in both forward and reverse directions, the diode is open (broken).
    *   **Shorted Diode (Bad):** If you get a low reading (close to 0V) in *both* forward and reverse directions, the diode is shorted.
    *   **Leaky Diode (Bad):** If you get a reading in reverse bias, it indicates leakage.

**Analogy:** Imagine a turnstile. In the forward direction (pushing correctly), it lets you pass with a slight effort (forward voltage drop). In the reverse direction, it should block you completely. If it's broken, it either blocks you always ("OL" in both directions), or it lets you pass from both sides (0V in both directions).

**Example:** Testing a common 1N4007 rectifier diode. When you apply the probes correctly (anode to red, cathode to black), you should see a reading around 0.6V to 0.7V. When you reverse the probes, you should see "OL." If you see "OL" both ways, it's bad. If you see 0V both ways, it's bad.

**Exam Tip:** Diodes are frequently tested in exams. Understand the anode/cathode convention and the expected readings in both forward and reverse bias. The 0.7V reading is a classic indicator for silicon diodes.

### 4. Testing Transistors (Bipolar Junction Transistors - BJTs)

Transistors are fundamental semiconductor devices that can amplify signals or act as electronic switches. A BJT has three terminals: Base (B), Collector (C), and Emitter (E). They come in two types: NPN and PNP.

Testing a transistor with a multimeter involves treating it like two diodes connected back-to-back.

**How to Test (NPN Transistor Example):**

1.  **Identify Terminals:** First, identify the Base, Collector, and Emitter. This is crucial and often requires a datasheet or component identifier, but you can often figure it out during testing.
2.  **Set the Multimeter:** Use the **Diode Test** mode.
3.  **Treat as Diodes:**
    *   **Base-Emitter Junction:** Connect the **red probe** to the **Base** and the **black probe** to the **Emitter**. You should get a diode-like reading (e.g., 0.5V - 0.8V). Reversing these probes (black to Base, red to Emitter) should yield "OL." This is like testing the P-N junction formed by the Base and Emitter.
    *   **Base-Collector Junction:** Connect the **red probe** to the **Base** and the **black probe** to the **Collector**. You should again get a diode-like reading. Reversing these probes (black to Base, red to Collector) should yield "OL." This is like testing the P-N junction formed by the Base and Collector.
4.  **Collector-Emitter Junction:** The connection between the Collector and Emitter in a good transistor should always read "OL" in both directions, regardless of how you connect the probes. There's no direct P-N junction there in a functioning transistor.

**Interpreting Results:**

*   **Good NPN Transistor:** You should see two diode-like readings (e.g., 0.6V-0.8V) when the positive probe is on the Base and the negative probe is on the Collector and Emitter. You should get "OL" when reversing probes on these junctions, and "OL" between Collector and Emitter.
*   **Bad Transistor:**
    *   If the Collector-Emitter junction shows a low reading in either direction, it's likely shorted.
    *   If any junction that should show a reading shows "OL" (except for C-E), the junction is open.
    *   If any junction that should show "OL" shows a reading, it indicates leakage or a short.

**PNP Transistors:** The testing procedure is similar, but the polarity is reversed. For a PNP transistor, the Base is P-type, and the Emitters and Collectors are N-type. So, the **black probe** should be on the Base, and the **red probe** on the Collector and Emitter to get the forward voltage drop.

**Built-in Transistor Tester:** Many multimeters have a dedicated transistor testing socket. You insert the transistor into the socket, matching the pinout, and the multimeter automatically tests it and indicates if it's NPN or PNP and if it's good. This is the easiest way if your multimeter has it!

**Example:** Testing an NPN transistor like a BC547. Identify the pins (often B, C, E from left to right when the flat side faces you). Set to Diode Test.
1.  Red probe on Base, black probe on Collector: Get ~0.7V.
2.  Red probe on Base, black probe on Emitter: Get ~0.7V.
3.  Any other combination of probes, or reversing probes on B-C and B-E junctions, should give "OL." Collector-Emitter should always give "OL."

**Exam Tip:** Understanding the diode-like behavior of a transistor is key. You might be asked to identify the type of transistor (NPN/PNP) based on test results or to explain why certain readings are expected.

### 5. Testing JFETs (Junction Field-Effect Transistors)

JFETs are another type of transistor, but they operate differently from BJTs. They have three terminals: Gate (G), Drain (D), and Source (S). The Gate controls the conductivity of the channel between Drain and Source. JFETs can be N-channel or P-channel.

**Important Note:** Standard multimeters generally **cannot reliably test JFETs**. The Gate-Source junction is a reverse-biased PN junction, and the small voltage from the multimeter's diode test mode is often insufficient to forward-bias it or to properly test its behavior as a voltage-controlled device.

**Why Multimeters Struggle with JFETs:**
*   **Gate Sensitivity:** The gate is designed to be reverse-biased or unbiased. A multimeter's diode test might apply a voltage that permanently damages the gate or gives misleading readings.
*   **High Input Impedance:** JFETs have extremely high input impedance. Testing their controlled conductivity (how resistance between Drain and Source changes with gate voltage) requires a variable voltage source and a way to measure drain current, which a basic multimeter doesn't offer.

**What You *Might* Be Able to Check (with extreme caution):**

You *might* be able to check for a short circuit between the terminals.

1.  **Set the Multimeter:** Diode Test mode.
2.  **Check for Shorts:** Carefully test all combinations of terminals. If you get a low reading (close to 0V or 0$\Omega$) between any terminals that shouldn't be shorted (especially Drain-Source), the JFET is likely damaged.
3.  **Expected Behavior (Limited):** For an N-channel JFET, the Gate-Source junction is a reverse-biased PN junction. If you *were* to apply the diode test (red to Source, black to Gate), you *might* see "OL." Reversing it (red to Gate, black to Source) *might* show a very low reading if the junction is forward-biased by the multimeter's supply, but this is not a reliable indicator of a good JFET.

**What's Really Needed:** To properly test a JFET, you need a curve tracer or a test circuit where you can apply a variable gate voltage and measure the resulting drain-source current or resistance.

**So, for workshop purposes and using a standard multimeter, focus on identifying shorts.** If you suspect a JFET is faulty and it's not shorted, you'll likely need to replace it and test your circuit.

**Example:** If you test an N-channel JFET and find that the Drain and Source terminals give a low reading (0V) in both directions, it's definitely shorted and bad. Any other unusual low readings between terminals can also indicate a fault.

**Exam Tip:** Be aware that direct JFET testing with a multimeter is limited. Questions might probe your understanding of why this is the case or ask about basic checks for shorts.

### Connecting to Course Outcomes Recap:

*   **CO4 (Identify Components):** This entire module is about testing these identified components.
*   **CO5 (Operate Measuring Instruments):** We've focused heavily on the multimeter's functions (Ohms, Diode Test) and how to select the correct range and mode.
*   **CO1 (Safety Measures):** We've stressed discharging capacitors and being aware of potential hazards.
*   **CO3 (Connection Diagrams/Accessories):** While not explicitly drawing circuits, identifying component terminals (like anode/cathode, Base/Collector/Emitter) and knowing how to connect probes is a direct application.
*   **CO6 (Design/Build):** Knowing how to test components ensures you use good parts for your breadboarding and PCB designs.

It's amazing how much information we can get from this simple tool, isn't it? Remember, practice is key. The more you use the multimeter to test components, the more intuitive these tests will become.

---

## Sample Questions and Answers

**Q1. You are testing a resistor with color bands of Brown, Black, Orange, and Gold. What is the expected resistance range, and what reading would indicate an open circuit?**

**Answer:**
The color bands indicate:
*   Brown: 1
*   Black: 0
*   Orange: $\times 10^3$ (k$\Omega$)
*   Gold: $\pm 5\%$ tolerance

So, the nominal resistance is 10k$\Omega$ with a 5% tolerance.
The tolerance is 5% of 10k$\Omega$, which is 0.05 $\times$ 10,000$\Omega$ = 500$\Omega$.
Therefore, the expected resistance range is 10,000$\Omega$ - 500$\Omega$ to 10,000$\Omega$ + 500$\Omega$, i.e., **9.5k$\Omega$ to 10.5k$\Omega$**.

An **open circuit** would be indicated by the multimeter displaying **"OL"** (Over Limit) or a very high resistance reading, significantly above the upper tolerance limit.

**Q2. Explain the characteristic resistance reading when testing a good capacitor (e.g., 100 $\mu$F) using a multimeter in resistance mode, and why this happens.**

**Answer:**
When testing a good capacitor with a multimeter in resistance mode (on a high range), the reading will **start low** (indicating initial current flow) and then **gradually increase** towards infinity ("OL").

This happens because the multimeter's battery acts as a temporary power source, charging the capacitor. Initially, the capacitor is like a short circuit to the multimeter's internal current, allowing a low resistance reading. As the capacitor charges, its internal "plates" accumulate charge, opposing the flow of current. This increasing opposition is seen by the multimeter as a rising resistance. Eventually, when the capacitor is fully charged (or the multimeter's voltage can no longer push current into it against the stored charge), the resistance appears infinite ("OL").

**Q3. Describe how to test a silicon diode using a multimeter, and what readings indicate a faulty diode.**

**Answer:**
To test a silicon diode:
1.  Set the multimeter to **Diode Test** mode.
2.  Identify the anode (usually no band) and cathode (usually has a band).
3.  Connect the **red (positive) probe to the anode** and the **black (negative) probe to the cathode** (forward bias). A good silicon diode should show a reading between **0.5V and 0.8V**.
4.  Reverse the probes: **red probe to the cathode** and **black probe to the anode** (reverse bias). A good diode should show **"OL"** (Over Limit) or a very high resistance.

**Readings indicating a faulty diode:**
*   **Open Diode:** "OL" reading in **both** forward and reverse bias directions.
*   **Shorted Diode:** A low reading (close to 0V) in **both** forward and reverse bias directions.
*   **Leaky Diode:** A reading in the reverse bias direction (when it should show "OL").

**Q4. Why is it generally not possible to reliably test a JFET's functionality using only a standard multimeter's diode test function?**

**Answer:**
Standard multimeters lack the necessary capabilities to properly test a JFET for several reasons:
1.  **Gate Sensitivity:** JFETs are highly sensitive to gate voltage. The voltages applied by a multimeter in diode test mode might be too high for the gate, potentially damaging it or producing misleading readings.
2.  **Limited Test Voltage:** The diode test function provides a very limited voltage and current. It's insufficient to accurately assess the JFET's primary characteristic: its ability to control the conductivity of the channel between Drain and Source by varying the Gate-Source voltage.
3.  **No Control Mechanism:** A multimeter cannot provide the variable gate voltage required to observe changes in the Drain-Source resistance/current, which is how a JFET's amplification or switching capability is measured.

While a multimeter can detect a direct short circuit between JFET terminals, it cannot verify the integrity of its controlled conductivity. For proper testing, specialized equipment like a curve tracer or a dedicated test circuit is required.
