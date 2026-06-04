---
title: "Testing of electronic components using multimeter - Resistor, Capacitor, Diode, Transistor and JFET."
subject: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP"
module: "Module 12: Testing of electronic components using multimeter "
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912edc"
status: "completed"
scrapedAt: "2026-05-20T18:33:06.564Z"
---
# Module 12: Testing of Electronic Components using Multimeter

Welcome to Module 12 of our Basic Electrical and Electronics Engineering Workshop! Today, we're going to dive into a fundamental skill for any aspiring electronics engineer: **testing electronic components using a multimeter.** Think of the multimeter as your most trusted sidekick in the workshop. It's the tool that tells you if a component is alive and kicking, or if it's given up the ghost. This is crucial for troubleshooting circuits, verifying component values, and generally understanding how things work.

This module directly connects with several of our Course Outcomes. Primarily, it directly addresses **CO5: Select and Operate various measuring instruments** (Knowledge Level: K3), as we'll be focusing on the multimeter. It also underpins **CO4: Identify various electronic components** (Knowledge Level: K2) because before we test, we need to know what we're looking at! And of course, any testing we do in a workshop setting requires adherence to safety, touching upon **CO1: Demonstrate safety measures against electrical shocks** (Knowledge Level: K2).

### What is a Multimeter?

Before we start testing, let's get acquainted with our tool. A multimeter, sometimes called a VOM (Volt-Ohm-Milliammeter), is a versatile instrument that can measure voltage, current, and resistance. Modern multimeters are often digital (DMMs), displaying readings numerically, but the principles remain the same for analog multimeters with a needle.

**Key Features and Functions:**

*   **Display:** Shows the measured value.
*   **Range Selector Dial:** This is where you choose what you want to measure (voltage, current, resistance) and the approximate range. It's vital to select the correct range to avoid damaging the meter or getting inaccurate readings.
*   **Input Jacks:** Where you plug in the test leads. Typically, there's a common (COM) jack (usually black) and jacks for voltage/resistance (VΩmA) and sometimes a separate jack for high current (A or 10A).
*   **Test Leads:** The probes (usually red and black) that you use to touch the component or circuit.

**Safety First (CO1 Connection):**

Before we plug anything in, let's reiterate a critical safety point: **Always ensure the multimeter is set to the correct function and range BEFORE touching any circuit points.** When measuring voltage, you're measuring potential difference, which can exist even in a seemingly "off" circuit if there are residual charges. Never touch exposed metal parts of test leads when connected to a live circuit. Remember that high voltages can be dangerous, and even low voltages can cause shocks if handled carelessly. When in doubt, disconnect power before making any connections or measurements.

### Testing Resistors

Resistors are fundamental passive components that impede the flow of current. Their primary characteristic is their resistance, measured in Ohms (Ω). Testing a resistor is about verifying if its actual resistance value is close to its marked or intended value.

**How to Test a Resistor:**

1.  **Identify the Resistor:** You'll usually see color bands on the resistor indicating its value. Alternatively, some resistors have numerical markings. (This ties into **CO4: Identify various electronic components**).
2.  **Remove from Circuit (Recommended):** For accurate readings, it's best to desolder and remove one leg of the resistor from the circuit board. This prevents other components in the circuit from interfering with the measurement. If you can't remove it, you might get a reading that's lower than the actual resistor value due to parallel paths in the circuit.
3.  **Set the Multimeter:**
    *   Turn the dial to the resistance (Ω) setting.
    *   Start with a resistance range that you estimate your resistor falls into. If you don't know, start with a higher range and work your way down. For example, if you see bands indicating a few kΩ, start with the 20kΩ range.
4.  **Connect the Test Leads:** Touch one probe to each lead of the resistor. Polarity doesn't matter for resistors.
5.  **Read the Display:**
    *   If the display shows a numerical value close to the resistor's marked value, it's likely good.
    *   If the display shows "OL" (Over Limit) or a very high value, you've likely exceeded the selected range, or the resistor is open (broken). Try a higher range.
    *   If the display shows a very low value (near zero ohms), the resistor might be shorted or you've chosen too low a range.
    *   If the display shows "0.00" or very close to it, and you selected a low resistance range, the resistor is essentially a short circuit (or the multimeter probes are touching each other!).

**Example:** Let's say you have a resistor with color bands brown (1), black (0), red (x100), and gold (5% tolerance). This means 10 x 100 Ohms = 1000 Ohms, or 1 kΩ, with a tolerance of 5%. You'd set your multimeter to the 2kΩ or 20kΩ range. If you connect the probes and the multimeter reads, say, 1.02 kΩ, this is well within the 5% tolerance (±50 Ohms), so the resistor is good. If it read 1.5 kΩ, it would be out of tolerance and likely faulty.

**Remember this:** Always compare the measured value against the component's tolerance. Components aren't perfect!

### Testing Capacitors

Capacitors store electrical energy in an electric field. They are characterized by their capacitance, measured in Farads (F), though we usually deal with microfarads (µF), nanofarads (nF), or picofarads (pF). Testing capacitors is a bit more nuanced than resistors, as a simple resistance test doesn't reveal everything about its performance.

**How to Test a Capacitor (Basic Check):**

A basic multimeter can give you a quick indication of whether a capacitor is shorted or open, but it cannot precisely measure capacitance or test for subtle failures like leakage or loss of capacitance. For accurate capacitance measurement, you'd need a multimeter with a capacitance function or a dedicated capacitance meter.

1.  **Identify the Capacitor:** Capacitors come in various shapes and sizes (ceramic discs, electrolytic cans, film capacitors). Electrolytic capacitors have polarity (positive and negative terminals).
2.  **Discharge the Capacitor (CRITICAL SAFETY STEP):** **Always discharge capacitors before testing, especially larger ones!** They can hold a significant charge even after power is removed. You can discharge a capacitor by shorting its terminals with an insulated screwdriver or a resistor of appropriate value. Be careful when discharging, as a spark can occur.
3.  **Set the Multimeter:**
    *   Turn the multimeter to its resistance (Ω) setting. Start with a high resistance range, like 10kΩ or higher.
    *   If your multimeter has a capacitance (F) setting, that's ideal for a more accurate test, but we'll cover the resistance method first.
4.  **Connect the Test Leads (Resistance Test):**
    *   **For non-polarized capacitors (ceramic, film):** Connect the probes to the capacitor's leads. Polarity doesn't matter.
    *   **For polarized capacitors (electrolytic):** Connect the red probe to the positive (+) terminal and the black probe to the negative (-) terminal.
5.  **Observe the Reading (Resistance Test):**
    *   **Good Capacitor:** When you first connect the probes, the resistance should be low (as the capacitor starts charging from the multimeter's internal battery). The reading should then gradually increase towards infinity (OL - Over Limit). This indicates the capacitor is charging. For very small capacitors, this charging effect might be too fast to observe.
    *   **Shorted Capacitor:** If the multimeter immediately shows a very low resistance (near zero) and stays there, the capacitor is shorted and needs to be replaced.
    *   **Open Capacitor:** If the multimeter immediately shows OL (infinite resistance) and stays there, the capacitor is open (its internal connection is broken). This is less common.
    *   **Leaky Capacitor:** If the resistance increases but stops at a relatively low value instead of going to OL, the capacitor might have internal leakage.

**Using the Capacitance Function (if available):**

If your multimeter has a capacitance setting (usually marked with an F symbol, sometimes with microfarads µF or nanofarads nF):

1.  Ensure the capacitor is discharged.
2.  Set the multimeter to the appropriate capacitance range. If you don't know the value, start with a higher range.
3.  Connect the probes. For polarized capacitors, ensure correct polarity.
4.  The multimeter will display the capacitance value. Compare this to the marked value, considering the capacitor's tolerance (often ±10% or ±20% for common types).

**Example:** You have a 100 µF electrolytic capacitor. You discharge it. Setting your multimeter (with capacitance function) to the 200 µF range and connecting the leads (red to +, black to -), you might see a reading that starts a bit low and settles around 95 µF. If the tolerance is ±10%, then 95 µF is acceptable. If it reads 50 µF, it has likely lost capacitance and should be replaced. If it reads OL, it's open. If it reads 0.01 µF, it's shorted.

**Analogy:** Testing a capacitor with a multimeter in resistance mode is like checking if a bucket can hold water. A shorted capacitor is like a bucket with a hole in the bottom – water (charge) immediately leaks out. An open capacitor is like a bucket with a crack in the side, where water can't get in or out. A good capacitor is like a solid bucket that can hold water (charge) until it's full. The resistance test shows how well it holds the charge.

**Important Note:** This resistance test is a quick check. For critical applications or to verify if a capacitor performs correctly under AC conditions, more advanced testing is required.

### Testing Diodes

Diodes are semiconductor devices that allow current to flow primarily in one direction. They are crucial in rectifiers, voltage regulators, and many other circuits. Diodes have a polarity: an anode (+) and a cathode (-).

**How to Test a Diode:**

The key to testing a diode with a multimeter is to use its diode test function. This function applies a small voltage across the diode and measures the voltage drop when current flows.

1.  **Identify the Diode:** Diodes usually have a band (often silver or white) on one end, indicating the cathode (negative side). The other end is the anode (positive side). (Again, **CO4**).
2.  **Remove from Circuit (Recommended):** For a reliable test, desolder at least one leg of the diode from the circuit.
3.  **Set the Multimeter:**
    *   Turn the dial to the diode test symbol (often looks like a diode symbol: a triangle with a line across its tip, or sometimes labeled "DIODE"). This function usually applies a small forward voltage (around 0.5V to 3V).
4.  **Connect the Test Leads:**
    *   **Forward Bias:** Connect the red probe (positive) to the anode and the black probe (negative) to the cathode.
    *   **Reverse Bias:** Connect the red probe to the cathode and the black probe to the anode.
5.  **Observe the Readings:**
    *   **Forward Bias (Good Diode):** The multimeter should display a voltage drop, typically between 0.4V and 0.7V for silicon diodes, and about 0.2V to 0.3V for germanium diodes. This reading indicates that current is flowing and the diode is conducting. The exact value depends on the diode type and the multimeter's internal voltage.
    *   **Reverse Bias (Good Diode):** The multimeter should display "OL" (Over Limit) or a very high voltage, indicating that the diode is blocking current in the reverse direction.
    *   **Shorted Diode:** If the multimeter shows a low voltage reading (near 0V) in both forward and reverse bias, the diode is shorted and needs replacement.
    *   **Open Diode:** If the multimeter shows "OL" in both forward and reverse bias, the diode is open (broken internally) and needs replacement.

**Example:** You have a common 1N4001 silicon diode.
*   **Forward Test:** Red probe to anode, black probe to cathode. You expect a reading around 0.5V to 0.7V. Let's say it reads 0.65V. Good.
*   **Reverse Test:** Red probe to cathode, black probe to anode. You expect "OL". Good.
*   If it reads 0.01V in both tests, it's shorted. If it reads "OL" in both tests, it's open.

**Common Pitfalls:**
*   Testing a diode while it's still in the circuit can give misleading readings because other components can create parallel paths for current.
*   Mistaking the cathode band for the anode.

### Testing Transistors

Transistors are semiconductor devices that can amplify or switch electronic signals and electrical power. They are fundamental building blocks of modern electronics. There are two main types: Bipolar Junction Transistors (BJTs) and Field-Effect Transistors (FETs). We'll focus on BJTs here, as they are very common.

**Types of BJTs:**

*   **NPN:** Consists of a P-type semiconductor sandwiched between two N-type semiconductors. Current flows from Collector to Emitter when the Base is forward-biased with respect to the Emitter.
*   **PNP:** Consists of an N-type semiconductor sandwiched between two P-type semiconductors. Current flows from Emitter to Collector when the Base is reverse-biased with respect to the Emitter (or forward-biased with respect to the Collector).

A BJT has three terminals: **Base (B)**, **Collector (C)**, and **Emitter (E)**.

**How to Test a Transistor (BJT using Diode Test):**

You can test a BJT using the multimeter's diode test function by treating its internal structure as two diodes.

*   **NPN Transistor:** Think of it as an N-P-N structure. This is like two diodes connected anode-to-anode: the Base-Emitter junction acts like one diode (N-P), and the Base-Collector junction acts like another diode (N-P).
    *   **Forward Bias (Base-Emitter):** Red probe (positive) to Base (P-type), black probe (negative) to Emitter (N-type). You should get a diode drop (0.4V-0.7V).
    *   **Forward Bias (Base-Collector):** Red probe (positive) to Base (P-type), black probe (negative) to Collector (N-type). You should get a diode drop (0.4V-0.7V).
    *   **Reverse Bias:** Any other combination (Emitter to Base, Emitter to Collector, Collector to Emitter, Collector to Base) should show "OL".

*   **PNP Transistor:** Think of it as a P-N-P structure. This is like two diodes connected cathode-to-cathode: the Base-Emitter junction acts like one diode (P-N), and the Base-Collector junction acts like another diode (P-N).
    *   **Forward Bias (Base-Emitter):** Black probe (negative) to Base (N-type), red probe (positive) to Emitter (P-type). You should get a diode drop (0.4V-0.7V).
    *   **Forward Bias (Base-Collector):** Black probe (negative) to Base (N-type), red probe (positive) to Collector (P-type). You should get a diode drop (0.4V-0.7V).
    *   **Reverse Bias:** Any other combination (Emitter to Base, Emitter to Collector, Collector to Emitter, Collector to Base) should show "OL".

**Steps for Testing a BJT:**

1.  **Identify the Transistor Type (NPN/PNP) and Pinout:** This is crucial! You can find datasheets online or look for markings on the transistor. Many multimeters have a built-in transistor tester socket where you insert the transistor, and it automatically tells you the type and pinout. If you don't have that, you need to know the pinout. (CO4 again!).
2.  **Set the Multimeter:** Select the diode test function.
3.  **Test the Base-Emitter Junction:**
    *   For NPN: Red to Base, Black to Emitter.
    *   For PNP: Black to Base, Red to Emitter.
    *   You should get a reading in the 0.4V-0.7V range.
4.  **Test the Base-Collector Junction:**
    *   For NPN: Red to Base, Black to Collector.
    *   For PNP: Black to Base, Red to Collector.
    *   You should get a reading in the 0.4V-0.7V range.
5.  **Test Other Combinations:** Test all other possible connections between the three terminals. All these should result in "OL" (open circuit).

**Example:** You have a 2N2222 NPN transistor.
*   You determine its pinout is Base, Collector, Emitter (BCE).
*   Set multimeter to diode test.
*   **Test 1 (B-E Forward):** Red to Base, Black to Emitter. Reading: 0.6V. Good.
*   **Test 2 (B-C Forward):** Red to Base, Black to Collector. Reading: 0.6V. Good.
*   **Test 3 (E-B Reverse):** Red to Emitter, Black to Base. Reading: OL. Good.
*   **Test 4 (C-B Reverse):** Red to Collector, Black to Base. Reading: OL. Good.
*   **Test 5 (E-C Forward):** Red to Emitter, Black to Collector. Reading: OL. Good.
*   **Test 6 (C-E Reverse):** Red to Collector, Black to Emitter. Reading: OL. Good.
*   If any other combination shows a voltage reading, the transistor is likely damaged (e.g., collector-emitter shorted). If the base-emitter or base-collector junctions show OL in the forward direction, the transistor is open.

**Remember this:** The transistor's internal structure is like two diodes back-to-back. The Base is common to both junctions.

### Testing JFETs (Junction Field-Effect Transistors)

JFETs are another type of transistor that uses an electric field to control the conductivity of a channel. They have three terminals: **Gate (G)**, **Drain (D)**, and **Source (S)**. Unlike BJTs, JFETs are voltage-controlled devices and are usually operated with a reverse-biased Gate-Source junction.

**Types of JFETs:**

*   **N-channel:** The channel is made of N-type semiconductor material. The Gate is P-type.
*   **P-channel:** The channel is made of P-type semiconductor material. The Gate is N-type.

**How to Test a JFET (Basic Check using Resistance/Diode Test):**

Testing JFETs with a standard multimeter is less straightforward than BJTs, and a multimeter's diode test function might not be entirely reliable for all JFETs, especially for checking leakage or amplification capability. However, you can perform a basic check for shorts and open circuits.

1.  **Identify the JFET Type and Pinout:** Determine if it's N-channel or P-channel and identify the Gate, Drain, and Source terminals. This is critical. (CO4).
2.  **Set the Multimeter:** Use the resistance (Ω) setting, or if your multimeter has a specific JFET test function or a more advanced semiconductor test, use that.
3.  **Basic Checks (Resistance/Diode Test):**

    *   **Check for Shorts between Drain and Source:**
        *   Set the multimeter to a high resistance range (e.g., 10kΩ or 200kΩ).
        *   **N-channel:** Connect the red probe to the Source and the black probe to the Drain. You should see a relatively high resistance value. Now, reverse the probes (black to Source, red to Drain) – you should see a similar high resistance.
        *   **P-channel:** Connect the black probe to the Source and the red probe to the Drain. You should see a relatively high resistance. Reverse the probes – you should see a similar high resistance.
        *   **If you get a very low resistance (near 0Ω) in any direction between Drain and Source, the JFET is likely shorted.**

    *   **Check Gate-Source and Gate-Drain Junctions:** The Gate-Source and Gate-Drain junctions in a JFET are P-N junctions (reverse-biased during normal operation). You can test these like diodes.
        *   Set the multimeter to the diode test function.
        *   **N-channel:** The Gate is P-type, and the Drain/Source are N-type.
            *   **Forward Bias (Gate-Source):** Connect the red probe (positive) to the Gate (P-type) and the black probe (negative) to the Source (N-type). You should get a diode drop (0.4V-0.7V).
            *   **Forward Bias (Gate-Drain):** Connect the red probe (positive) to the Gate (P-type) and the black probe (negative) to the Drain (N-type). You should get a diode drop (0.4V-0.7V).
            *   **Reverse Bias:** Any other combination should show "OL".
        *   **P-channel:** The Gate is N-type, and the Drain/Source are P-type.
            *   **Forward Bias (Gate-Source):** Connect the black probe (negative) to the Gate (N-type) and the red probe (positive) to the Source (P-type). You should get a diode drop (0.4V-0.7V).
            *   **Forward Bias (Gate-Drain):** Connect the black probe (negative) to the Gate (N-type) and the red probe (positive) to the Drain (P-type). You should get a diode drop (0.4V-0.7V).
            *   **Reverse Bias:** Any other combination should show "OL".

**Important Considerations for JFETs:**
*   **Static Sensitivity:** JFETs are very sensitive to electrostatic discharge (ESD). Always handle them carefully, preferably with an anti-static wrist strap.
*   **Limited Test:** These checks mainly reveal shorts or open gates. They do not confirm if the JFET will amplify correctly. For that, you need to test it in a circuit or with specialized equipment.
*   **JFET Pinout Confusion:** It's easy to mix up Drain and Source, especially on smaller TO-92 packaged JFETs. If the Gate-Source test shows a reading but Gate-Drain does not, and swapping Drain and Source makes the Gate-Drain test work, then you've likely identified the correct pins.

**Example:** Let's test a 2N5457 N-channel JFET. Assume its pinout is Gate, Drain, Source (GDS).
*   Set multimeter to diode test.
*   **Test 1 (G-S Forward):** Red to Gate, Black to Source. Reading: 0.55V. Good.
*   **Test 2 (G-D Forward):** Red to Gate, Black to Drain. Reading: 0.55V. Good.
*   **Test 3 (S-G Reverse):** Red to Source, Black to Gate. Reading: OL. Good.
*   **Test 4 (D-G Reverse):** Red to Drain, Black to Gate. Reading: OL. Good.
*   **Test 5 (S-D Forward/Reverse):** Test between Source and Drain in both directions. You should get OL or very high resistance. If you get a diode drop, it indicates a short between Source and Drain, which is bad.

**Summary of Testing Components:**

*   **Resistors:** Check resistance value with Ω setting. Compare to marked value ± tolerance.
*   **Capacitors:** Basic check for shorts/opens using Ω or capacitance setting. Observe charging behavior (Ω) or read capacitance value (F). Always discharge first!
*   **Diodes:** Use diode test function. Forward bias should show a diode drop (0.4V-0.7V), reverse bias should show OL.
*   **Transistors (BJTs):** Use diode test function. Treat as two diodes back-to-back. Base-Emitter and Base-Collector junctions should show diode drops in forward bias, OL in reverse bias. All other combinations should be OL.
*   **JFETs:** Basic check for shorts/opens using Ω or diode test. Gate-Source/Gate-Drain junctions behave like diodes. Drain-Source should have high resistance.

By mastering these multimeter testing techniques, you're building a strong foundation for understanding how electronic circuits function and how to troubleshoot them effectively. This directly contributes to your ability to **CO5: Select and Operate various measuring instruments** and underpins your understanding of components required for **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB**.

---

## Sample Questions with Answers

**Q1. What is the primary purpose of the resistance setting on a multimeter?**
**Answer:** The resistance setting (Ω) on a multimeter is used to measure the opposition to the flow of electrical current. It helps us determine the value of resistors, check for continuity in conductors (like wires or fuse elements), and perform basic checks on semiconductor components like capacitors and diodes by observing their charging or blocking behavior.

**Q2. When testing a capacitor using the resistance mode of a multimeter, what reading would indicate a faulty (shorted) capacitor?**
**Answer:** If a capacitor is shorted, its internal elements are connected directly, creating a very low resistance path. When testing with a multimeter in resistance mode, a shorted capacitor will show a reading very close to zero ohms (0Ω) and the reading will not change (it won't show the initial charging behavior).

**Q3. Describe the expected readings when testing a good NPN transistor using the diode test function of a multimeter.**
**Answer:** A good NPN transistor can be thought of as two diodes connected anode-to-anode at the Base.
1.  **Base-Emitter Junction:** When testing with the red probe (positive) on the Base and the black probe (negative) on the Emitter, the multimeter should show a forward voltage drop (typically 0.4V to 0.7V for silicon).
2.  **Base-Collector Junction:** Similarly, when testing with the red probe on the Base and the black probe on the Collector, the multimeter should also show a forward voltage drop (0.4V to 0.7V).
3.  **All other combinations** (Emitter to Base, Emitter to Collector, Collector to Emitter, Collector to Base) should show "OL" (Over Limit) or a very high resistance, indicating the junctions are blocking current in the reverse direction.

**Q4. You are testing a diode with your multimeter's diode function. You get a reading of "OL" when you connect the red probe to the anode and the black probe to the cathode. What does this indicate?**
**Answer:** This indicates that the diode is open. The "OL" reading in the forward bias direction means that the diode is not allowing current to flow even when it should. An open diode is faulty and needs to be replaced.

**Q5. Why is it important to discharge a capacitor before testing it?**
**Answer:** It is critically important to discharge a capacitor before testing because capacitors can store electrical energy, even after the power source has been disconnected. If a capacitor is not discharged, it can deliver a potentially harmful shock or damage the multimeter. The stored charge can also lead to inaccurate test readings.
