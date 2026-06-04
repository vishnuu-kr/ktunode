---
title: "Testing of electronic components using multimeter - Resistor, Capacitor, Diode, Transistor and JFET."
subject: "BASIC ELECTRICAL AND ELECTRONICS  ENGINEERING WORKSHOP"
module: "Module 4: Testing of electronic components using multimeter "
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5cd1"
status: "completed"
scrapedAt: "2026-05-20T16:36:48.393Z"
---
# Module 4: Testing of Electronic Components Using a Multimeter

Welcome, future engineers! Today, we're diving into a foundational skill that every electrical and electronics enthusiast needs in their toolkit: **testing electronic components using a multimeter**. Think of the multimeter as your diagnostic Swiss Army knife for electronics. It's the first thing you reach for when you suspect a component is faulty, or when you need to verify a component's value before integrating it into a circuit. This module is all about empowering you with the knowledge and practical skills to use this indispensable instrument effectively.

This topic directly ties into several of our Course Outcomes. Primarily, **CO5: Operate various measuring instruments**. Using a multimeter is a prime example of this. We’ll also touch upon **CO4: Identify various electronic components**, as we'll be working with resistors, capacitors, diodes, transistors, and JFETs. Understanding how to test them also implicitly supports **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB**, because you can’t build a reliable circuit if you’re not sure your components are working correctly! And of course, as we'll discuss safety later, **CO1: Demonstrate safety measures against electrical shocks** is paramount whenever we're dealing with electrical circuits and instruments.

Throughout this module, we'll be drawing upon insights from our recommended textbooks, particularly **"Basic Electronics and Linear Circuits" by Bhargava, Kulshreshtha, and Gupta**, which offers a deep dive into the behavior of these components, and **"Basic Electrical Engineering" by Kothari and Nagrath**, for fundamental principles.

Let’s get started!

## 1. Introduction to the Multimeter: Your Essential Electronic Diagnostic Tool

Imagine you're building a circuit, and it's not behaving as expected. Where do you start troubleshooting? Most often, you’d reach for your multimeter.

### What is a Multimeter?
A multimeter, often called a VOM (Volt-Ohm-Milliammeter), is a versatile electronic measuring instrument that combines several measurement functions in one unit. It can measure:
*   **Voltage (V):** The electrical potential difference between two points.
*   **Current (A):** The flow of electric charge.
*   **Resistance (Ω):** The opposition to the flow of current.

Modern multimeters are typically digital (DMMs), providing a numerical display, but analog multimeters with a moving needle are also still in use. For our workshop, we'll focus on the digital multimeter, as it’s more common and generally easier to read.

### Types of Multimeters
While we’re focusing on testing components, it’s good to know there are different types:
*   **Analog Multimeters:** Use a needle that moves across a scale. They can be more sensitive to small changes but are prone to parallax error (reading error due to viewing angle) and are generally less precise than digital ones.
*   **Digital Multimeters (DMMs):** Display readings as numbers. They are more accurate, easier to read, and often come with additional features like auto-ranging and data hold.

### Safety First! (Connecting to CO1)

Before we even touch a component or the multimeter, let's talk safety. This is non-negotiable. **CO1: Demonstrate safety measures against electrical shocks** is critical.

*   **Always ensure the multimeter is set to the correct function and range** before making a connection. Measuring voltage with the meter set to resistance can damage the meter or the circuit.
*   **Never measure resistance or continuity on a powered circuit.** This is a common mistake and can lead to inaccurate readings or damage.
*   **Inspect the multimeter's probes and leads for any damage** (cracks, exposed wires). Replace them if damaged.
*   **Keep your work area clean and dry.**
*   **If working with higher voltages, be extra cautious.** For this module, we'll be working with low-voltage components, but the principle of safety remains.

Remember, your safety is always the priority. A damaged multimeter or a shock can have serious consequences.

## 2. Testing Resistors

Resistors are fundamental passive components used to control current flow in a circuit. They come in various shapes, sizes, and power ratings. Testing a resistor is usually about verifying its resistance value.

### How to Test a Resistor
Testing a resistor involves measuring its resistance using the multimeter’s Ohmmeter function.

**Steps:**
1.  **Identify the Resistor:** Look for its color bands or printed value.
2.  **Select Ohmmeter Function:** Turn the multimeter dial to the Ω (Omega) symbol.
3.  **Choose the Range:** If your multimeter has manual ranging, select a range that is *higher* than the expected resistance value of the resistor. For example, if you suspect a 1kΩ resistor, start with the 2kΩ range. If it reads "OL" (Over Limit) or "1." (indicating infinity), you need to select a higher range. If it shows a value that seems too small, try a lower range. Many modern multimeters have auto-ranging, which simplifies this.
4.  **Isolate the Resistor:** **Crucially, remove the resistor from the circuit** or at least ensure that at least one of its leads is disconnected. Why? Because if the resistor is in a circuit, other components can influence the resistance reading, giving you an incorrect result. Think of it like trying to measure the resistance of a single hose segment while it's still connected to a network of many hoses – the water flow from other hoses will affect your reading.
5.  **Connect the Probes:** Touch one multimeter probe to each lead of the resistor. Polarity doesn't matter for resistors.
6.  **Read the Display:** The multimeter will display the resistance value.

### What to Expect and Interpretation:
*   **Nominal Value:** The reading should be close to the resistor's stated value (from its color code or printing).
*   **Tolerance:** Resistors have a tolerance rating (e.g., ±5%, ±10%). This means the actual measured value can be within that percentage of the marked value. A 1kΩ resistor with 5% tolerance should measure between 950Ω and 1050Ω.
*   **Open Circuit:** If the multimeter reads "OL" or a very high resistance on all ranges, the resistor is likely open-circuited (broken internally). It's dead.
*   **Short Circuit:** If the multimeter reads close to 0Ω (often showing "0.00"), the resistor is likely short-circuited. This is rare for standard resistors but can happen with some types.
*   **Reading too High/Low:** If the reading is significantly outside the tolerance, the resistor is probably faulty.

**Exam Tip:** Questions often involve identifying a faulty resistor based on color codes and measured values. Always remember to check the tolerance!

## 3. Testing Capacitors

Capacitors store electrical energy in an electric field. They are used for filtering, smoothing, and timing in circuits. Testing capacitors is a bit more nuanced than resistors because their behavior depends on frequency and whether they are charged.

### How to Test a Capacitor (Basic Check)
A simple multimeter can perform a basic check for shorts or opens. For a more thorough test, you’d need a capacitance meter or an ESR meter, but for workshop purposes, this basic check is valuable.

**Steps:**
1.  **Discharge the Capacitor:** **This is EXTREMELY important for safety!** Capacitors can store a charge even after the circuit is powered off. To discharge, short the capacitor’s leads with a screwdriver or a resistor (preferably a 1kΩ to 10kΩ resistor to limit the current). Ensure the capacitor is discharged before testing. *Remember this for your safety and the safety of the equipment.*
2.  **Select Ohmmeter Function:** Turn the multimeter dial to the Ohmmeter function (Ω). Use a relatively high resistance range (e.g., 10kΩ or higher).
3.  **Observe Polarity (for Electrolytic Capacitors):** Electrolytic capacitors and some other types are polarized, meaning they have a positive (+) and negative (-) terminal.
    *   **Positive Probe:** Connect the red probe to the positive lead of the capacitor.
    *   **Negative Probe:** Connect the black probe to the negative lead of the capacitor.
    *   For non-polarized capacitors (like ceramic or film capacitors), the probe polarity doesn't matter.
4.  **Connect the Probes:** Touch the probes to the capacitor leads.
5.  **Observe the Reading:**
    *   **For Electrolytic/Large Capacitors:** You should see the resistance reading start very low (as the capacitor begins to charge from the multimeter's internal battery) and then gradually increase towards infinity ("OL"). This is because the capacitor is charging. The larger the capacitor, the slower this rise will be.
    *   **For Small Ceramic/Film Capacitors:** The change might be too rapid to observe easily. You might just see a brief, low reading that quickly goes to "OL."
6.  **Check for Shorts:** If the multimeter immediately reads 0Ω or a very low resistance and stays there, the capacitor is likely short-circuited. It's faulty.
7.  **Check for Opens:** If the multimeter reads "OL" immediately and stays there, the capacitor might be open-circuited. However, this is less conclusive than a short circuit test, as very small capacitors might appear open on the highest resistance ranges.

### Interpretation:
*   **Charging Effect:** The key observation for good capacitors (especially larger ones) is the charging characteristic – resistance going from low to high. If you don't see this, it's suspect.
*   **"OL" Reading:** For very small capacitors, an "OL" reading is normal. If you test a known good small capacitor and get "OL" immediately, that’s fine.
*   **Short Circuit (0Ω):** A definitely faulty capacitor.
*   **No Change:** If the reading stays constant at a low value (not 0Ω but not increasing to OL), it might indicate a leaky capacitor, which is also a fault.

**Analogy:** Think of charging a balloon. A good capacitor is like a balloon that you can gradually inflate (charge). A shorted capacitor is like a balloon with a puncture that instantly deflates. An open capacitor is like a balloon that cannot be inflated at all.

**Exam Tip:** You might be asked to identify a faulty capacitor based on its behavior when tested with a multimeter in resistance mode. The charging effect is a key indicator. The safety aspect of discharging capacitors is also frequently tested.

## 4. Testing Diodes

Diodes are semiconductor devices that allow current to flow primarily in one direction. They are like one-way streets for electricity. Testing a diode involves checking this one-way property.

### How to Test a Diode
The multimeter’s Diode Test function (often indicated by a diode symbol: `->|--`) is specifically designed for this. This function applies a small current and measures the voltage drop across the diode.

**Steps:**
1.  **Select Diode Test Function:** Turn the multimeter dial to the Diode Test symbol.
2.  **Identify Diode Leads:** A diode has an anode (+) and a cathode (-). The cathode is usually marked with a band or a flat edge on the diode body.
3.  **Isolate the Diode:** As with resistors and capacitors, it’s best to remove the diode from the circuit or disconnect one lead for accurate testing.
4.  **Test in Forward Bias:**
    *   **Anode to Positive Probe:** Touch the red (positive) probe to the anode.
    *   **Cathode to Negative Probe:** Touch the black (negative) probe to the cathode.
    *   **Expected Reading:** A good diode will show a small voltage drop (typically between 0.5V and 0.8V for silicon diodes, and around 0.2V to 0.4V for germanium diodes). This is the "forward voltage drop." The multimeter displays this value.
5.  **Test in Reverse Bias:**
    *   **Anode to Negative Probe:** Touch the black (negative) probe to the anode.
    *   **Cathode to Positive Probe:** Touch the red (positive) probe to the cathode.
    *   **Expected Reading:** A good diode should block current in this direction, so the multimeter should display "OL" (Over Limit) or a very high reading, indicating an open circuit.

### Interpretation:
*   **Good Diode:** Shows a low voltage drop (0.5-0.8V) in forward bias and "OL" in reverse bias.
*   **Short-Circuited Diode:** Shows a very low voltage reading (close to 0V) or "0.00" in *both* forward and reverse bias. It’s essentially a wire.
*   **Open Diode:** Shows "OL" in *both* forward and reverse bias. It's not allowing current to flow in either direction.

**Analogy:** Imagine a turnstile at a subway station. A good diode is like a turnstile that allows one person to pass through in one direction, but blocks anyone trying to go the other way. A shorted diode is like a broken turnstile that is stuck open, letting everyone through. An open diode is like a turnstile that is jammed shut, stopping everyone.

**Exam Tip:** Understanding the forward voltage drop and the "OL" reading in reverse bias is crucial for testing diodes. Knowing how to identify the anode and cathode is also important.

## 5. Testing Transistors

Transistors are semiconductor devices that act as switches or amplifiers. They are the building blocks of modern electronics. Testing a transistor involves checking its internal junctions. Bipolar Junction Transistors (BJTs) are common, and we'll focus on them here.

### How to Test a Bipolar Junction Transistor (BJT)
Most modern digital multimeters have a dedicated transistor test socket or a specific setting for testing BJTs. This function typically tests the two PN junctions within the transistor. BJTs come in two main types: NPN and PNP.

**Testing NPN Transistor:**
An NPN transistor has two PN junctions that can be approximated as two diodes connected back-to-back, with the base being common.
*   Base-Emitter junction (N-P)
*   Base-Collector junction (N-P)

**Steps (using Diode Test Function):**
1.  **Select Diode Test Function:** Use the multimeter's Diode Test function (if it doesn't have a specific transistor test).
2.  **Identify Leads:** Identify the Base (B), Collector (C), and Emitter (E) leads of the NPN transistor. For many small signal transistors (like BC547, 2N2222), you can find pinout diagrams online or in datasheets.
3.  **Test Base-Emitter Junction:**
    *   Touch the red (positive) probe to the Base.
    *   Touch the black (negative) probe to the Emitter.
    *   **Expected Reading:** A low voltage drop (0.5-0.8V), similar to a forward-biased diode.
4.  **Test Base-Collector Junction:**
    *   Touch the red (positive) probe to the Base.
    *   Touch the black (negative) probe to the Collector.
    *   **Expected Reading:** A low voltage drop (0.5-0.8V), similar to a forward-biased diode.
5.  **Test Emitter-Collector (Reverse Bias):**
    *   Touch the red (positive) probe to the Collector.
    *   Touch the black (negative) probe to the Emitter.
    *   **Expected Reading:** "OL" (open circuit).
    *   Reverse the probes (Emitter to red, Collector to black).
    *   **Expected Reading:** "OL" (open circuit). The collector-emitter path should be open in both directions when the base is not activated.

**Testing PNP Transistor:**
A PNP transistor is essentially the opposite of an NPN.
*   Base-Emitter junction (P-N)
*   Base-Collector junction (P-N)

**Steps (using Diode Test Function):**
1.  **Select Diode Test Function.**
2.  **Identify Leads:** Identify the Base (B), Collector (C), and Emitter (E) leads of the PNP transistor.
3.  **Test Base-Emitter Junction:**
    *   Touch the black (negative) probe to the Base.
    *   Touch the red (positive) probe to the Emitter.
    *   **Expected Reading:** A low voltage drop (0.5-0.8V).
4.  **Test Base-Collector Junction:**
    *   Touch the black (negative) probe to the Base.
    *   Touch the red (positive) probe to the Collector.
    *   **Expected Reading:** A low voltage drop (0.5-0.8V).
5.  **Test Emitter-Collector (Reverse Bias):**
    *   Touch the red (positive) probe to the Collector.
    *   Touch the black (negative) probe to the Emitter.
    *   **Expected Reading:** "OL".
    *   Reverse the probes (Emitter to black, Collector to red).
    *   **Expected Reading:** "OL".

### Interpretation:
*   **Good Transistor:** Behaves like two forward-biased diodes connected correctly (with the base as the common terminal), and the collector-emitter path is open in both directions.
*   **Short-Circuited Transistor:** If any junction shows a very low reading (0V) in both directions, or if the collector-emitter shows conductivity, it’s likely shorted.
*   **Open Transistor:** If any junction shows "OL" in both directions, it’s likely open.

**Using the Transistor Test Socket:**
Many multimeters have a socket with labels like E, B, C and NPN/PNP. You insert the transistor leads into the correct slots, select the transistor test mode, and the multimeter will directly give you a current gain (hFE) value, along with indicating if it's NPN or PNP. This is a more direct and easier test if your multimeter supports it.

**Exam Tip:** Understanding the internal diode structure of transistors is key to testing them with a diode test function. Knowing the polarity difference between NPN and PNP is essential.

## 6. Testing Junction Field-Effect Transistors (JFETs)

JFETs are another type of transistor that controls current flow via an electric field. Unlike BJTs, they are voltage-controlled devices and have a very high input impedance. JFETs have three terminals: Gate (G), Drain (D), and Source (S). There are two main types: N-channel and P-channel.

### How to Test a JFET
Testing JFETs with a standard multimeter is more challenging and less definitive than testing BJTs or diodes. A multimeter can only perform a basic check for shorts or opens between the terminals. For a proper test, you’d ideally use a curve tracer or a specific JFET tester. However, here's how you can do a basic check:

**Steps (using Diode Test or Resistance Mode):**
1.  **Select Diode Test or High Resistance Range:** You can use either the Diode Test function or a high resistance range (e.g., 200kΩ or higher) on your multimeter.
2.  **Identify Terminals:** Know the pinout of the JFET you are testing (Gate, Drain, Source). This is usually found in the datasheet.
3.  **Check for Shorts:**
    *   **Drain-Source:** Apply the probes across Drain and Source. For an N-channel JFET, the P-N junction between the P-type substrate (usually connected to the source in a package) and the N-channel is what we’re looking at. For a P-channel JFET, it’s the N-P junction.
        *   **N-channel:** Test with the black probe on the Drain and the red probe on the Source. You might get a diode-like reading if the substrate is connected to the source. Reversing polarity should give "OL".
        *   **P-channel:** Test with the red probe on the Drain and the black probe on the Source. You might get a diode-like reading. Reversing polarity should give "OL".
        *   **Crucially, any reading between Drain and Source that is consistently low (near 0V) or "OL" in both directions indicates a faulty JFET (shorted or open).**
    *   **Gate-Source/Gate-Drain:** The Gate is isolated from the channel by a reverse-biased PN junction.
        *   **N-channel:** Touch the red probe to the Gate and the black probe to the Source/Drain. You should get a high resistance reading ("OL"). Reversing the probes should also result in "OL".
        *   **P-channel:** Touch the black probe to the Gate and the red probe to the Source/Drain. You should get a high resistance reading ("OL"). Reversing the probes should also result in "OL".
        *   **Any consistent low reading between the Gate and other terminals is a sign of a faulty JFET.**

### Interpretation:
*   **Good JFET (Basic Check):** The Drain-Source path should show some conductivity (like a diode, with different readings for reversed polarity), and the Gate to Source/Drain paths should show very high resistance (effectively open circuits in both directions).
*   **Shorted JFET:** Low readings between any two terminals, especially Drain-Source in both directions.
*   **Open JFET:** "OL" readings for all combinations where a reading should exist (e.g., between Drain and Source, or between Gate and Source/Drain when the internal junction is forward biased by the meter).

**Analogy:** Think of JFETs like a water faucet with a very sensitive handle (the Gate). A good JFET allows you to control the flow from Source to Drain by turning the "handle." A shorted JFET is like the faucet being stuck open, water flows all the time. An open JFET is like the faucet being completely blocked.

**Exam Tip:** Testing JFETs with a multimeter is primarily for detecting gross faults (shorts or opens). The readings are not as definitive as for diodes or BJTs. Knowing the terminal names and the general behavior of their internal junctions is important.

## 7. Practical Considerations and Wrap-up

As we conclude this module, let's summarize some practical aspects and reinforce key takeaways.

### Multimeter Probes and Connections
*   **Red Probe:** Usually connected to the positive terminal or the higher potential.
*   **Black Probe:** Usually connected to the negative terminal or the lower potential.
*   **Common Terminal:** The black probe is almost always plugged into the "COM" jack. The red probe plugs into the jack corresponding to the measurement (V, Ω, mA, etc.). Be careful not to plug the red probe into the high current (e.g., 10A) jack unless you are intentionally measuring high current!

### When a Component Fails a Test
If a component fails your multimeter test:
1.  **Double-check your connections and multimeter settings.** Errors here are common.
2.  **Ensure the component was properly isolated from the circuit.**
3.  **If you're still getting an unexpected reading, the component is likely faulty.** You’ll need to replace it.

This process of testing components is fundamental to **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB**. You can’t build a working circuit if your parts are bad!

### Teamwork (Connecting to CO7)
Remember **CO7: Build the ability to work in a team with good interpersonal skills**. When you're in the workshop, collaborate with your lab partners. Help each other, discuss your findings, and learn from each other's techniques. Troubleshooting often becomes easier and faster when you have a second pair of eyes and a different perspective.

### Recap of Key Points:
*   **Safety first!** Always check settings, discharge capacitors, and avoid testing live circuits for resistance.
*   **Isolate components** for accurate readings.
*   **Resistors:** Check if their measured resistance falls within the tolerance of their marked value.
*   **Capacitors:** Look for the charging effect in resistance mode (low to high resistance). Check for shorts.
*   **Diodes:** Use the Diode Test function. Look for a forward voltage drop and an open circuit in reverse.
*   **Transistors (BJTs):** Test as two diodes. Check base-emitter and base-collector junctions, and ensure collector-emitter is open.
*   **JFETs:** Basic checks for shorts/opens are possible, but less conclusive.

By mastering these techniques, you’ll be well-equipped to build, test, and troubleshoot electronic circuits confidently. This is a crucial step in your journey as an electrical and electronics engineer!

---

## Sample Questions with Answers

**Q1. You are testing a 10kΩ resistor with a tolerance of ±5%. What range of resistance values would be considered acceptable?**

**Answer:**
The acceptable range is calculated by applying the tolerance to the nominal value.
Lower limit = 10kΩ - (5% of 10kΩ) = 10,000Ω - (0.05 * 10,000Ω) = 10,000Ω - 500Ω = 9,500Ω (or 9.5kΩ).
Upper limit = 10kΩ + (5% of 10kΩ) = 10,000Ω + (0.05 * 10,000Ω) = 10,000Ω + 500Ω = 10,500Ω (or 10.5kΩ).
Therefore, an acceptable measured value would be between 9.5kΩ and 10.5kΩ.

**Q2. When testing a capacitor using a multimeter in resistance mode, what does it mean if the multimeter immediately shows "OL" and stays that way?**

**Answer:**
If the multimeter immediately shows "OL" (Over Limit, indicating infinite resistance) and stays that way when testing a capacitor (especially if it's a reasonably sized one), it suggests the capacitor might be **open-circuited**. This means the internal conductive path is broken, and it cannot hold or pass charge. For very small capacitors, this reading might be normal, but for larger electrolytic or ceramic capacitors, it usually indicates a fault.

**Q3. Describe the expected readings when testing a healthy silicon diode using the diode test function of a multimeter.**

**Answer:**
When testing a healthy silicon diode using the diode test function:
1.  **Forward Bias:** With the positive probe on the anode and the negative probe on the cathode, the multimeter should display a small, positive voltage reading, typically between **0.5V and 0.8V**. This is the forward voltage drop across the diode.
2.  **Reverse Bias:** With the probes reversed (negative probe on the anode and positive probe on the cathode), the multimeter should display **"OL"** (Over Limit) or a very high resistance reading, indicating that the diode is blocking current in this direction.

**Q4. How would you test if an NPN transistor is faulty using a multimeter in diode test mode? What are common failure modes?**

**Answer:**
To test an NPN transistor using a multimeter in diode test mode:
1.  **Identify Leads:** Determine which pins are the Base (B), Collector (C), and Emitter (E).
2.  **Test Base-Emitter Junction:** Connect the multimeter's positive probe to the Base and the negative probe to the Emitter. A good NPN transistor will show a forward voltage drop (around 0.5V-0.8V). Reversing the probes should show "OL".
3.  **Test Base-Collector Junction:** Connect the multimeter's positive probe to the Base and the negative probe to the Collector. A good NPN transistor will show a forward voltage drop (around 0.5V-0.8V). Reversing the probes should show "OL".
4.  **Test Collector-Emitter:** Connect the probes between Collector and Emitter in both directions. A good NPN transistor should show "OL" in both directions, as the collector-emitter path is an open circuit until the base is biased.

**Common failure modes:**
*   **Shorted Junctions:** If any junction (Base-Emitter or Base-Collector) shows a near 0V reading or "OL" in both forward and reverse bias, that junction is faulty.
*   **Shorted Collector-Emitter:** If there is a low reading between Collector and Emitter in either direction, the transistor is shorted.
*   **Open Junctions:** If a junction shows "OL" in both directions, it's open.

**Q5. True or False: You should always test the resistance of a component while it is still soldered into the circuit.**

**Answer:**
**False**. When testing the resistance of components like resistors or capacitors, it is crucial to **isolate them from the circuit**. Testing a component within a live circuit or while it's connected to other components can lead to inaccurate readings because the surrounding components can affect the measurement. For example, other components connected in parallel with the resistor would lower the measured resistance.
