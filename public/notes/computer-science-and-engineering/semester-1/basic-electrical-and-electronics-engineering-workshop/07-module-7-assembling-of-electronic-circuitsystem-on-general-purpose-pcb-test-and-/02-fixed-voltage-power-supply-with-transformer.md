---
title: "Fixed voltage power supply with transformer"
subject: "BASIC ELECTRICAL AND ELECTRONICS  ENGINEERING WORKSHOP"
module: "Module 7: Assembling of electronic circuit/system on general purpose PCB, test and show the functioning (Any two)"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5cdb"
status: "completed"
scrapedAt: "2026-05-20T16:36:56.122Z"
---
Absolutely! Let's dive into the fascinating world of building a fixed voltage power supply using a transformer. This is a fundamental building block in electronics, and by the end of these notes, you'll not only understand how it works but also how to assemble and test one on a general-purpose PCB, just as our module requires.

---

## Module 7: Assembling Electronic Circuits on PCB - Fixed Voltage Power Supply with Transformer

Welcome, everyone, to Module 7! This is where we bridge the gap between theory and practice. We've learned about various electronic components, and now it's time to put them to use. Our focus today is on assembling a **Fixed Voltage Power Supply with a Transformer** on a general-purpose PCB, testing it, and demonstrating its functionality. This is a crucial skill, as almost every electronic device needs a stable DC power source.

### 1. Why Do We Need a Power Supply? And What Kind?

Think about your phone charger, your laptop adapter, or even the small circuit board inside your TV. What do they all do? They take the AC mains voltage (that 230V or 115V from the wall socket) and convert it into a stable, lower DC voltage that the sensitive electronic components can use. This process is called **power conversion**.

Our AC mains supply is *alternating*, meaning the voltage polarity and magnitude change continuously. Most electronic components, especially integrated circuits (ICs) and microcontrollers, require a *direct* current (DC) supply with a constant voltage. If you try to connect them directly to AC mains, you'd likely burn them out instantly!

So, we need a power supply that can:

*   **Step down** the high AC mains voltage to a safer, usable level.
*   **Convert** this AC voltage into DC voltage.
*   **Regulate** the DC voltage so it remains constant, even if the input voltage or the load (the device drawing power) changes slightly.

Today, we're focusing on a common type: a **fixed voltage power supply**. This means it will output a specific, unchanging DC voltage, like 5V or 12V.

### 2. The Transformer: Our First Step-Down Hero

(Connecting to **CO2: Familiarise with transformers...**)

Remember our discussion about transformers? This is where they shine! A transformer is a passive electrical device that transfers electrical energy from one circuit to another through electromagnetic induction. Crucially, it can **step up** or **step down** AC voltages. For our power supply, we need to **step down** the high AC mains voltage.

**How it works (A Quick Recap):**
A transformer typically consists of two coils of wire wound around a common iron core. The coil connected to the input voltage is called the **primary winding**, and the coil connected to the output is called the **secondary winding**. The ratio of the number of turns in the primary to the secondary windings determines whether the voltage is stepped up or down.

The relationship is beautifully simple:
$$ \frac{V_s}{V_p} = \frac{N_s}{N_p} = a $$
where:
*   $V_s$ is the secondary voltage.
*   $V_p$ is the primary voltage.
*   $N_s$ is the number of turns in the secondary winding.
*   $N_p$ is the number of turns in the primary winding.
*   $a$ is the transformer ratio.

For a step-down transformer, $N_s < N_p$, so the output voltage $V_s$ will be less than the input voltage $V_p$.

**Choosing the Right Transformer:**
When selecting a transformer for our project, we need to consider:
*   **Primary Voltage:** This must match your local mains supply (e.g., 230V AC).
*   **Secondary Voltage:** This depends on the desired output voltage of our power supply, taking into account voltage drops in later stages. A common choice for a 5V DC output might be a transformer with a 6V or 9V AC secondary, as the subsequent components will cause some voltage loss. For a 12V DC output, you might choose a 15V or 18V AC transformer.
*   **Current Rating:** This indicates how much current the transformer can safely deliver. It should be rated higher than the maximum current your circuit will draw.

**Relatable Example:** Imagine you have a high-pressure water hose (the mains AC). You can't directly water your delicate plants with it – it's too powerful. You need a reducer fitting (the transformer) to lower the water pressure to a gentle flow. The transformer does the same for electrical voltage.

*(Refer to D P Kothari and I J Nagrath, Chapter on Transformers, for detailed principles of operation and construction.)*

### 3. The Block Diagram: Seeing the Whole Picture

Before we get to the actual components, let's visualize the journey of electricity from AC mains to stable DC. A typical fixed voltage power supply with a transformer follows this path:

**AC Mains -> Transformer -> Rectifier -> Filter -> Voltage Regulator -> DC Output**

Let's break down each stage:

#### 3.1 Transformer: The Step-Down Device (Already Covered)

Takes high AC voltage and reduces it to a lower AC voltage.

#### 3.2 Rectifier: Converting AC to Pulsating DC

(Connecting to **CO4: Identify various electronic components** and **CO6: Apply the design procedure of simple electronic circuits...**)

The output from the transformer is still AC, meaning it alternates between positive and negative. Our electronic components need DC, which flows in only one direction. The rectifier's job is to convert AC into pulsating DC.

There are a few ways to do this:

*   **Half-Wave Rectifier:** Uses a single diode. It allows only one half of the AC waveform to pass through, blocking the other half. It's simple but inefficient, and the output is very "lumpy."
*   **Full-Wave Rectifier:** This is much more efficient. It uses either two diodes (in a center-tapped transformer configuration) or four diodes (in a **bridge rectifier** configuration) to utilize both halves of the AC waveform. The output is still pulsating DC, but it's smoother than half-wave.

The **bridge rectifier** is the most common and preferred method. It uses four diodes arranged in a diamond shape. When the input AC voltage is positive on one pair of input terminals, two diodes conduct, allowing current to flow through the load in one direction. When the AC voltage reverses, the other pair of diodes conducts, forcing the current through the load in the *same* direction.

**Component Identification:** Diodes are semiconductor devices with a specific direction for current flow. They have a band (usually silver or black) on one end, which indicates the cathode. Current flows from anode to cathode. In a bridge rectifier, we typically use **1N400x series diodes** (e.g., 1N4001, 1N4007) which are readily available and suitable for most common power supply applications.

**Exam Tip:** Be ready to draw the circuit diagram for a full-wave bridge rectifier and explain how it works for both positive and negative half-cycles of the AC input.

#### 3.3 Filter: Smoothing the Pulsating DC

(Connecting to **CO4: Identify various electronic components** and **CO6: Apply the design procedure of simple electronic circuits...**)

Even after rectification, the DC voltage is not constant. It rises and falls, creating "ripples." Imagine trying to pour water from a bucket with many holes – it wouldn't be a smooth flow! The filter's job is to smooth out these ripples, making the DC voltage much closer to a steady value.

The most common filter component is a **capacitor**. When connected in parallel with the rectifier's output, a capacitor charges up when the pulsating DC voltage is high and discharges when the voltage drops. This stored charge fills in the "gaps" between the pulses, significantly smoothing the output.

**Type of Capacitor:** We typically use **electrolytic capacitors** for filtering because they can store a large amount of charge in a small volume. These capacitors are polarized, meaning they have a positive (+) and negative (-) terminal, and they *must* be connected correctly. Reversing the polarity can cause the capacitor to overheat, leak, or even explode! Look for the stripe on the capacitor body – it usually indicates the negative terminal.

**Choosing the Capacitor Value:** The larger the capacitance value (measured in microfarads, $\mu$F) and the smaller the load current, the smoother the filtered DC voltage will be. For a typical 5V or 12V power supply, you might use a capacitor in the range of 1000 $\mu$F to 4700 $\mu$F.

**Relatable Analogy:** Think of the filter capacitor as a reservoir or a small water tank placed after the rectifier. The pulsating DC is like water being poured into the tank intermittently. The tank stores some water and releases it steadily, ensuring a more continuous flow out to the connected devices.

*(Refer to NN Bhargava, DC Kulshreshtha & SC Gupta, Chapter on Rectifiers and Filters, for detailed analysis of ripple factor and filter design.)*

#### 3.4 Voltage Regulator: The Precision Controller

(Connecting to **CO4: Identify various electronic components** and **CO6: Apply the design procedure of simple electronic circuits...**)

While the filter capacitor smooths out the ripples, the output voltage can still vary if the AC input voltage fluctuates or if the load current changes significantly. This is where the **voltage regulator** comes in. It's the "brains" of the power supply, ensuring a precise, constant output voltage regardless of input variations or load changes.

For fixed voltage power supplies, we commonly use **linear voltage regulators**, often in the form of ICs (Integrated Circuits). A very popular and ubiquitous choice is the **78xx series** of regulators.
*   **7805:** Provides a fixed +5V DC output.
*   **7812:** Provides a fixed +12V DC output.
*   **7809:** Provides a fixed +9V DC output, and so on.

These ICs have three terminals:
1.  **Input:** Connects to the filtered DC output from the capacitor.
2.  **Ground (GND):** Connects to the common ground of the circuit.
3.  **Output:** Provides the regulated, stable DC voltage.

**How it Works (Simplified):** The regulator constantly monitors its output voltage. If the output voltage starts to rise above the setpoint, the regulator increases its internal resistance, effectively "absorbing" the excess voltage as heat. If the output voltage tries to drop, it reduces its internal resistance to allow more current through.

**Important Note:** Linear regulators are simple but not very efficient, especially when the difference between the input and output voltage is large. The excess voltage is dissipated as heat. Therefore, for larger voltage drops or higher currents, you might need to attach a **heatsink** to the regulator IC to prevent it from overheating.

**An Analogy:** Imagine a tap that controls water flow to a shower. If the mains water pressure (input voltage) fluctuates, the tap (voltage regulator) adjusts itself automatically to maintain a constant flow and temperature (output voltage) for your shower. It might do this by slightly constricting the pipe, wasting some pressure as heat in the process.

*(Refer to NN Bhargava, DC Kulshreshtha & SC Gupta, Chapter on Voltage Regulators, for details on 78xx series and their applications.)*

#### 3.5 Optional Components:

*   **Input Capacitor (e.g., 0.1 $\mu$F ceramic):** Placed across the input of the regulator to filter out any high-frequency noise that might have passed through the main filter.
*   **Output Capacitor (e.g., 0.1 $\mu$F ceramic):** Placed across the output of the regulator to improve transient response and further smooth the output.

### 4. Assembling on a General Purpose PCB (Perfboard/Veroboard)

(Connecting to **CO1: Demonstrate safety measures...**, **CO3: Illustrate the connection diagram...**, **CO6: Apply the design procedure...**, and **CO7: Build the ability to work in a team...**)

Now for the hands-on part! We'll be assembling this circuit on a general-purpose PCB, also known as a **perfboard** or **veroboard**.

**Safety First! (CO1)**
Before we even touch any components or the PCB, remember the absolute golden rule: **always ensure the mains power is OFF and unplugged.** Work in a well-lit area. Be mindful of sharp component leads and the soldering iron, which gets very hot. If you're working with mains voltage, even after the transformer, it's good practice to have a fuse in series with the primary winding of the transformer.

**Understanding the PCB:**
*   **Perfboard:** This is a board with many holes arranged in a grid. You can connect components by soldering their leads together on the underside of the board or by using "jumper wires."
*   **Veroboard (Stripboard):** Similar to perfboard, but the holes are often connected in continuous tracks (strips) on one side. You might need to "break" these tracks with a cutting tool (like a track cutter or a drill bit) to isolate connections.

**Connection Diagram (CO3):**
Before you start soldering, draw a clear **wiring diagram** or **layout diagram**. This is your blueprint. It shows exactly where each component will go and how each connection will be made. A good layout minimizes wire lengths and avoids crossing wires, making the circuit easier to build and troubleshoot.

**Component Placement:**
1.  **Transformer:** This usually sits "off-board" or at one edge, with its primary winding connected to the mains input and its secondary winding providing the low-voltage AC.
2.  **Bridge Rectifier:** Place the four diodes in the diamond configuration. Ensure they are oriented correctly (anode and cathode).
3.  **Filter Capacitor:** Place the large electrolytic capacitor. Pay *critical* attention to polarity.
4.  **Voltage Regulator (e.g., 7805):** Mount the IC. If you need a heatsink, attach it now.
5.  **Optional Capacitors:** Place the smaller ceramic capacitors near the regulator's input and output pins.

**Making Connections:**
*   **Soldering:** This is the most robust method. Heat the component lead and the PCB hole (or track) with the soldering iron, then apply a small amount of solder to the heated junction. The solder should flow smoothly, creating a shiny, strong connection. Avoid "cold solder joints" – these are dull, grainy, and unreliable.
*   **Jumper Wires:** Use insulated wires to make connections between points that are not physically adjacent on the PCB.

**Working as a Team (CO7):**
When assembling in a workshop, divide tasks! One person can focus on component placement, another on soldering, and another on testing. Communicate clearly about your progress and any issues you encounter.

**Example Layout Strategy:**
Start with the "input" side of the circuit and work your way through the stages.
1.  Connect the AC input to the transformer's primary.
2.  Connect the transformer's secondary to the AC input terminals of the bridge rectifier.
3.  Connect the DC output terminals of the bridge rectifier to the filter capacitor (observing polarity).
4.  Connect the filtered DC positive terminal to the input pin of the voltage regulator.
5.  Connect the ground pins of the capacitor and regulator together, and to the ground terminal of the transformer's secondary.
6.  Connect the output pin of the regulator to your final DC output terminals.
7.  Add the optional bypass capacitors.

### 5. Testing and Showing Functionality

(Connecting to **CO5: Operate various measuring instruments**)

This is the moment of truth!

**Tools You'll Need:**
*   **Multimeter:** Essential for measuring voltage and continuity.
*   **DC Power Supply (for initial testing if needed):** Sometimes useful to test the regulator IC before connecting to the transformer.
*   **AC Mains Plug and Cord:** To power the transformer.
*   **Optional: Load Resistor:** To simulate a device drawing current.

**Testing Steps:**
1.  **Visual Inspection:** Before powering up, carefully inspect your soldering and component placement. Are all components correctly oriented? Are there any accidental shorts (solder bridges between adjacent tracks)?
2.  **Continuity Test (with power OFF):** Use the multimeter in continuity mode (beeps when there's a connection) to check for unexpected shorts between your positive and negative output terminals. Also, check that your ground connections are properly made to the mains earth if required (though for this basic lab setup, we might skip direct earthing unless specified).
3.  **AC Voltage Check (Low Voltage Side):** Connect the mains plug. With the multimeter set to AC Volts (appropriate range, e.g., 20V AC), measure the AC voltage across the secondary terminals of the transformer. This should be your expected lower AC voltage (e.g., 6V, 9V, 15V AC).
4.  **DC Voltage Check (After Rectifier & Filter):** With the multimeter set to DC Volts (appropriate range, e.g., 20V DC), measure the DC voltage at the output of the filter capacitor. This should be a pulsating DC, higher than your target regulated voltage (e.g., if you're aiming for 5V DC, you might see 8-10V DC here, depending on the transformer and rectifier).
5.  **Regulated DC Voltage Check:** Measure the DC voltage between the output pin of the voltage regulator and ground. This is your final, crucial measurement! It should be very close to the IC's specified voltage (e.g., around 5V for a 7805).
6.  **Load Test (Optional but Recommended):** Connect a suitable load resistor (e.g., a power resistor of appropriate value, like 100 $\Omega$, 1W or 5W). Measure the output voltage again while the load is connected. It should remain stable and close to the specified value. If the voltage drops significantly, your power supply might not be able to supply enough current, or there might be an issue with the filter capacitor.

**Demonstrating Functionality:**
Once you've confirmed the output voltage is correct, you can demonstrate:
*   **Measuring the output voltage** with the multimeter.
*   **Connecting an LED (with a current-limiting resistor!)** to the output. If the output is stable, the LED should light up with a consistent brightness.
*   **Showing that the voltage remains relatively constant** even if you slightly vary the mains input (if you have a variable AC source) or change the load (by switching different resistors).

### 6. Practical Considerations and Troubleshooting

*   **Component Ratings:** Always ensure your components can handle the expected voltage and current. Diodes should have a Peak Inverse Voltage (PIV) rating higher than the peak AC input voltage, and current rating higher than the expected load current. Capacitors must have a working voltage rating significantly higher than the DC voltage they will experience.
*   **Heat:** As mentioned, linear regulators dissipate heat. If your regulator gets too hot to touch, you need a heatsink.
*   **Noise:** For sensitive circuits, further filtering might be needed (e.g., adding more capacitors, ferrite beads, or using switching power supplies which are more complex).
*   **Short Circuits:** The most common fault is a short circuit. Always double-check your connections.
*   **Incorrect Polarity:** Reversed electrolytic capacitors are a fire hazard. Reversed diodes mean the circuit won't work, or the wrong half-wave will be rectified.
*   **Bad Solder Joints:** Leads to intermittent connections or complete failure.

### 7. Connecting to Course Outcomes Summary

Let's quickly recap how this topic directly addresses our course outcomes:

*   **CO1 (Safety):** We've emphasized safety at every step, especially concerning mains voltage and handling hot soldering irons.
*   **CO2 (Transformers):** We've delved into the transformer's role in stepping down AC voltage.
*   **CO3 (Connections & Accessories):** We've discussed connection diagrams and the necessary components (diodes, capacitors, regulators) and accessories (PCB, wires, solder).
*   **CO4 (Component ID):** You've learned to identify diodes (1N400x), electrolytic capacitors, ceramic capacitors, and voltage regulator ICs (78xx series).
*   **CO5 (Instruments):** We've covered how to use a multimeter for crucial voltage and continuity tests.
*   **CO6 (Application & Design):** This entire exercise is about applying design principles to build a functional circuit on a PCB.
*   **CO7 (Teamwork):** If you're working in a lab, this module is a perfect opportunity to practice teamwork.

### Sample Questions and Answers

**Q1. What is the primary function of a transformer in a power supply?**
**Answer:** The primary function of a transformer in a power supply is to step down the high AC mains voltage to a lower, safer AC voltage that is suitable for subsequent rectification and regulation stages.

**Q2. Why is a filter capacitor needed after the rectifier?**
**Answer:** A filter capacitor is needed to smooth out the pulsating DC output from the rectifier. It charges up during the peaks of the pulsating voltage and discharges during the troughs, thereby reducing the ripple voltage and providing a smoother DC input to the voltage regulator.

**Q3. You are building a 5V power supply using a 7805 voltage regulator. If the input DC voltage to the 7805 is 9V, and the regulator's quiescent current is negligible, what will be the approximate power dissipated as heat by the regulator?**
**Answer:**
Power dissipated = (Input Voltage - Output Voltage) * Current
Assuming the 7805 needs to supply some current (let's say 100mA for demonstration, although this is not given in the question), the power dissipated would be:
Power = (9V - 5V) * 0.1A = 4V * 0.1A = 0.4 Watts.
*Note: If no load current is specified, the question is incomplete for calculating power dissipation. However, the concept is to show that the voltage difference multiplied by current results in heat.*

**Q4. What is a critical safety precaution when working with electrolytic capacitors?**
**Answer:** The critical safety precaution is to ensure correct polarity. Electrolytic capacitors are polarized, and connecting them in reverse can cause them to overheat, leak electrolyte, or even explode. The negative terminal is usually marked with a stripe.

**Q5. Name two common types of diodes used in a bridge rectifier for power supplies and one common fixed voltage regulator IC.**
**Answer:**
*   **Diodes:** 1N4001 to 1N4007 series (e.g., 1N4001, 1N4007).
*   **Voltage Regulator IC:** 78xx series (e.g., 7805 for 5V, 7812 for 12V).

**Q6. Explain the basic operation of a full-wave bridge rectifier circuit.**
**Answer:** A full-wave bridge rectifier uses four diodes arranged in a diamond configuration. During the positive half-cycle of the AC input, two diodes conduct, allowing current to flow through the load in one direction. During the negative half-cycle, the other two diodes conduct, reversing the AC input polarity to ensure the current through the load continues to flow in the *same* direction. This effectively converts both halves of the AC waveform into pulsating DC.

---

And there you have it! A comprehensive look at building a fixed voltage power supply. This is a foundational skill, and mastering it will open doors to understanding and building many more complex electronic systems. Don't hesitate to ask questions, and happy building!
