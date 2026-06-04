---
title: "Assembling of electronic circuit/system on general purpose PCB, test and show the functioning (Any two)-"
subject: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP"
module: "Module 15: Assembling of electronic circuit/system on general purpose PCB, test and show the functioning (Any two)"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912ee4"
status: "completed"
scrapedAt: "2026-05-20T18:33:10.147Z"
---
# BASIC ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP: Module 15 - Circuit Assembly, Testing, and Demonstration

Welcome, everyone! In this module, we're going to roll up our sleeves and bring those electronic circuits we've been studying to life. It's all about taking theoretical designs and making them a physical reality on a **General Purpose Printed Circuit Board (PCB)**. We'll be focusing on assembling two different electronic circuits or systems, testing them rigorously to ensure they work as intended, and then demonstrating their functionality. This practical experience is crucial for solidifying your understanding, and it directly ties into what we've been aiming for in this workshop.

Remember, a lot of what we do here directly maps to our **Course Outcomes (COs)**. For instance, being able to select the right components and assemble them correctly relates to **CO4: Identify various electronic components** and **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB**. And of course, safety is paramount – we'll be mindful of that throughout, linking to **CO1: Demonstrate safety measures against electrical shocks**.

### Understanding the General Purpose PCB

Before we dive into assembly, let's talk about the General Purpose PCB, often called a "perfboard" or "stripboard." Unlike custom-designed PCBs, these are pre-drilled boards with rows or columns of holes.

*   **What is it?** Think of it as a blank canvas for our electronic creations. It provides a stable platform for mounting components and a way to connect them using solder and wires.
*   **Types:** You'll see boards with holes connected in rows (stripboard) or individual holes (perfboard). Stripboards have copper strips that connect groups of holes, which can be useful for power or ground rails. Perfboards offer more flexibility as you can wire every connection yourself.
*   **Why use it?** For prototyping and learning, it's fantastic! It allows us to quickly build and modify circuits without the expense and time of designing and fabricating custom PCBs. It's a step up from breadboarding, offering a more permanent and robust connection.

This practical aspect of building on a PCB is a core part of **CO6**, where we're applying design procedures.

### The Assembly Process: From Schematic to Solder

Assembling a circuit on a PCB is a methodical process. It’s like following a recipe, but for electronics!

**1. Circuit Selection and Understanding:**
We'll be choosing any two circuits from a provided list. Before you even pick up a soldering iron, you *must* understand the circuit you're building.
*   **Schematic:** You'll be given a circuit schematic. This is the blueprint. Spend time tracing the connections. Where does the power go? How are components interconnected?
*   **Component Identification:** Referencing **CO4**, make sure you can identify every component on the schematic and in your component kit. Know their symbols, their values (resistance, capacitance, voltage ratings), and their polarity (if any). For example, electrolytic capacitors and diodes have specific orientations you must get right.
*   **Functional Understanding:** What does this circuit *do*? Does it amplify a signal? Does it oscillate? Does it control something? This understanding is crucial for testing later.

**2. Preparing the PCB:**
*   **Layout Planning:** This is a critical step, often overlooked by beginners. Before soldering, lay out your components on the PCB. Think about:
    *   **Component Placement:** Place larger components first. Consider heat dissipation – components that get warm should have some space around them.
    *   **Wire Routing:** Plan how you'll connect components. Try to keep wires neat and short. Avoid crossing wires unnecessarily. This relates to good design practice, which is part of **CO6**.
    *   **Power and Ground:** Plan where your main power and ground connections will be.
*   **Cutting the PCB (if needed):** If you're using a larger board, you might need to cut it to size. Always do this in a well-ventilated area and wear safety glasses!

**3. Component Mounting and Soldering:**
This is where the magic happens! But it requires precision and adherence to safety practices, as highlighted by **CO1**.
*   **Safety First!** Always wear safety glasses. Soldering irons are *hot*. Handle them with care and always place them in their stand when not in use. Work in a well-ventilated area to avoid inhaling solder fumes.
*   **Soldering Technique:**
    1.  **Heat the joint:** Touch the tip of the hot soldering iron to *both* the component lead and the PCB pad/hole simultaneously.
    2.  **Apply solder:** Touch the solder wire to the *heated joint* (not the iron itself). The solder should flow smoothly and create a shiny, cone-shaped joint.
    3.  **Remove solder, then iron:** Once a sufficient amount of solder has flowed, remove the solder wire first, and then the soldering iron.
    4.  **Inspect the joint:** A good solder joint looks shiny, smooth, and forms a fillet (a slight curve) between the lead and the pad. Avoid "cold joints" (dull, lumpy) or "solder bridges" (solder connecting two adjacent pads).
*   **Component Insertion:**
    *   **Diodes and Electrolytic Capacitors:** These have polarity. Look for a band on diodes or a stripe/plus sign on capacitors. Ensure these markings align with the correct orientation on the PCB, as shown in the schematic. Incorrect polarity can damage components or the circuit.
    *   **Resistors and Ceramic Capacitors:** These are usually not polarized, making them easier to install.
    *   **Integrated Circuits (ICs):** ICs often have a notch or a dot to indicate pin 1. Match this to the schematic's pinout diagram.
*   **Using Hook-up Wire:** For making connections between components that aren't directly connected via PCB tracks, you'll use insulated hook-up wire. Strip a small amount of insulation from the ends, tin them (apply a thin layer of solder), and then solder them to the appropriate pads.

Remember the principles discussed in **CO3** about connecting simple circuits – the same logic applies here, just on a more permanent medium.

**4. Post-Assembly Inspection:**
Before powering up, meticulously check your work.
*   **Visual Inspection:** Look for any solder bridges, cold joints, or components that might be poorly seated or incorrectly oriented. This is where a keen eye, developed through practice (tying into **CO5** as you learn to "see" the circuit), really pays off.
*   **Continuity Checks:** Using a multimeter (a key tool for **CO5**), check for unintended connections (shorts) between power and ground, or between signal paths. Also, check that intended connections are indeed present.

### Testing and Demonstration: Proving it Works!

Now for the exciting part – seeing if your creation actually functions as designed! This directly addresses the "test and show the functioning" part of our topic and aligns with **CO5** (operating measuring instruments) and **CO6** (applying design procedures).

**1. Powering Up Safely:**
*   **Initial Power Supply:** Start with a low voltage setting on your power supply, if possible.
*   **Polarity Check:** Double-check the power supply connections. Getting the polarity wrong is a common way to damage components.
*   **Listen and Look:** Before connecting the power, do one last visual check. When you connect power, are there any sparks, smoke, or unusual smells? If so, disconnect immediately!

**2. Functional Testing:**
This depends entirely on the circuit you've built. Here are some general approaches:

*   **Voltage Measurements:** Use a multimeter to measure voltages at key points in the circuit. Do they match the expected values from your analysis or simulation? For example, in a simple LED driver circuit, you'd check the voltage across the LED.
*   **Current Measurements:** If your circuit draws current, you can measure it using the multimeter in series with the power supply.
*   **Signal Verification:** If the circuit processes signals (like an amplifier or filter), you might use an oscilloscope to observe the input and output signals. This is a core skill for **CO5**. Does the output signal look as expected? Is it amplified? Is it filtered?
*   **Output Observation:** For circuits with a visible output, like an LED blinking circuit or a tone generator, simply observing the output is the primary test.

**3. Demonstrating Functionality:**
Once you've confirmed the circuit works correctly through testing, you need to demonstrate it.
*   **Explain What's Happening:** Clearly articulate what the circuit is supposed to do and how your assembled version achieves that. Point to the components on the PCB and explain their roles.
*   **Show the Input/Output:** If your circuit has distinct inputs and outputs, show how it behaves when you provide different inputs. For example, if you built a light-sensitive circuit, demonstrate how it reacts to changes in light.
*   **Teamwork:** Often, you'll be working in teams. This is where **CO7** comes into play. Coordinate with your team members to present a clear and concise demonstration. Who explains what? Who controls the power supply or input signals? Good communication is key.

### Example Circuits and Their Testing

Let's consider two classic examples you might encounter:

**Example Circuit 1: Simple LED Blinker (Astable Multivibrator using Transistors)**

*   **What it does:** This circuit uses two transistors oscillating back and forth, causing one or both LEDs connected to them to blink on and off. It's a fundamental concept in sequential logic and timing circuits.
*   **Component Identification (CO4):** You'll need NPN transistors (like BC547), resistors (for biasing and current limiting), capacitors (for timing), and LEDs.
*   **Assembly (CO6):** Pay close attention to the polarity of the LEDs and the base/collector/emitter connections of the transistors. Ensure your capacitor polarity is correct. Plan your layout to keep the timing components (R's and C's) accessible.
*   **Testing (CO5):**
    *   **Visual:** Check for blinking LEDs.
    *   **Voltage:** Measure voltages at the collector of each transistor. You should see them swing between near Vcc (supply voltage) and near ground as the transistors switch on and off.
    *   **Oscilloscope:** For a more detailed view, connect an oscilloscope to the collector of one transistor to see the square wave output.
*   **Demonstration:** Show how the blinking rate can be changed by altering the values of the timing capacitors or resistors. This demonstrates your understanding of the circuit's parameters.

**Example Circuit 2: Basic Voltage Regulator (e.g., using a Zener Diode and Transistor)**

*   **What it does:** This circuit takes a fluctuating or higher input voltage and provides a stable, lower output voltage, protecting sensitive components.
*   **Component Identification (CO4):** Zener diode (for voltage reference), a transistor (like 2N3904 or similar, acting as a pass element), resistors (for biasing the Zener and setting current), and potentially an input and output capacitor for smoothing.
*   **Assembly (CO6):** Correct Zener diode polarity is crucial. The transistor's base, collector, and emitter connections must be right.
*   **Testing (CO5):**
    *   **Input Voltage:** Apply a variable input voltage.
    *   **Output Voltage:** Measure the output voltage using a multimeter.
    *   **Load Testing:** Connect a "load" (like a resistor) to the output and see if the output voltage remains stable. Try varying the input voltage over a range (e.g., 8V to 15V) and observe how the output voltage stays constant (e.g., at 5V). This is the essence of voltage regulation.
*   **Demonstration:** Show how the output voltage remains stable even when the input voltage changes significantly. You can also demonstrate what happens if you try to draw too much current (the output voltage might drop).

**Key Takeaway for Exams:**
When demonstrating, always be prepared to explain *why* the circuit works and *how* changing specific component values would affect its performance. This shows a deeper understanding beyond just assembly. Also, be ready to explain the function of each major component on the PCB, linking back to **CO4**.

### Safety Reminders (Reinforcing CO1)

*   **Soldering Iron:** Always use the stand. Never leave it unattended.
*   **Ventilation:** Solder fumes are harmful. Work near an exhaust fan or open window.
*   **Eye Protection:** Safety glasses are non-negotiable.
*   **Electrical Safety:** Ensure power is OFF before making any connections or adjustments. Double-check polarity. If you're unsure about any step, ask! It's better to ask than to risk damaging components or yourself.
*   **Component Handling:** Be careful with static-sensitive components like ICs. Though less critical for basic workshop circuits, it's good practice.

This module is your chance to bridge the gap between theory and practice. By carefully assembling, testing, and demonstrating your circuits, you'll gain invaluable hands-on experience and a much deeper appreciation for how electronics work in the real world. Remember to use your resources – your schematics, your component datasheets, your multimeters, and your instructors! Good luck!

---

## Sample Questions and Answers

**Q1. Explain the importance of planning the PCB layout before soldering components.**

**Answer:** Planning the PCB layout is crucial for several reasons, directly impacting the circuit's performance, reliability, and ease of assembly.
*   **Signal Integrity:** Proper layout minimizes unwanted coupling between signal paths, reducing noise and interference, especially in high-frequency circuits.
*   **Thermal Management:** Components that generate heat should be placed with adequate spacing to allow for airflow and prevent overheating.
*   **Ease of Assembly and Troubleshooting:** A neat layout with logical component placement makes soldering easier, reduces the chance of errors, and simplifies future troubleshooting by making connections clear.
*   **Wire Routing:** Planning avoids messy, crossed wires that can lead to shorts or difficult modifications.
*   **Component Considerations:** Placement can be optimized for things like antenna orientation, sensor exposure, or heatsink mounting.
This practice relates to good design principles mentioned in **CO6**.

**Q2. What are the common signs of a "cold solder joint," and why is it problematic?**

**Answer:** A cold solder joint is a connection that did not receive enough heat during the soldering process.
*   **Signs:** It typically appears dull, grey, or lumpy, rather than shiny and smooth. It might also look like a ball of solder sitting on the joint rather than flowing into it.
*   **Problematic Because:** A cold joint is a poor electrical connection. It can lead to intermittent circuit operation (it might work sometimes but not others) or complete failure. In critical applications, it can cause malfunctions or even open circuits where a connection is expected. This highlights the importance of proper soldering technique and inspection, linking to **CO5** for visual inspection skills.

**Q3. You are assembling a circuit with an LED. If the LED doesn't light up after soldering and powering the circuit, what are the first three things you would check?**

**Answer:** Assuming the power supply is correctly connected and functional:
1.  **LED Polarity:** Is the LED inserted in the correct direction? The longer lead (anode) should be connected towards the positive supply or through a current-limiting resistor, and the shorter lead (cathode) towards ground or the transistor collector. Incorrect polarity is the most common reason for an LED not lighting up. (Relates to **CO4** and **CO6**).
2.  **Solder Joints:** Check the solder joints on both leads of the LED. Are they shiny and well-formed, or are they dull (cold joints) or bridged to adjacent pads? (Relates to **CO5**).
3.  **Continuity of the Circuit Path:** Using a multimeter in continuity mode, verify that there is a complete path from the positive terminal of the power supply, through any current-limiting resistors and the LED, to ground. Check that the cathode is indeed connected to ground and the anode is connected to the rest of the circuit path. (Relates to **CO5**).

**Q4. How does the demonstration of a voltage regulator circuit showcase its functionality, and which COs are primarily involved?**

**Answer:** Demonstrating a voltage regulator's functionality involves showing its ability to maintain a stable output voltage despite variations in the input voltage or the load connected to its output.
*   **Demonstration Steps:**
    *   Apply a low input voltage (e.g., 7V) and measure the constant output voltage (e.g., 5V).
    *   Gradually increase the input voltage (e.g., to 12V, then 18V) and show that the output voltage remains at 5V.
    *   Connect a resistive load to the output and demonstrate that the output voltage still stays at 5V, or if increasing the load causes a slight, acceptable drop, showing the regulator's load regulation capabilities.
*   **Primary COs Involved:**
    *   **CO5: Select and Operate various measuring instruments:** Essential for measuring input and output voltages accurately using a multimeter.
    *   **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB:** The assembly and successful functioning on the PCB demonstrate this.
    *   **CO4: Identify various electronic components:** The demonstrator should be able to identify the Zener diode, transistor, resistors, and capacitors and explain their roles.
    *   **CO1: Demonstrate safety measures against electrical shocks:** Ensuring safe connection and operation of the power supply.
    *   **CO7: Build the ability to work in a team:** If demonstrated in a team, coordination and explanation by team members showcase this.

This kind of demonstration proves the practical application of the circuit design and the student's understanding of its performance characteristics.
