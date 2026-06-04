---
title: "Fixed voltage power supply with transformer"
subject: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP"
module: "Module 15: Assembling of electronic circuit/system on general purpose PCB, test and show the functioning (Any two)"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912ee5"
status: "completed"
scrapedAt: "2026-05-20T18:33:10.864Z"
---
# BASIC ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP - MODULE 15: ASSEMBLING OF ELECTRONIC CIRCUIT/SYSTEM ON GENERAL PURPOSE PCB, TEST AND SHOW THE FUNCTIONING (ANY TWO)

## TOPIC: FIXED VOLTAGE POWER SUPPLY WITH TRANSFORMER

Welcome, everyone, to our workshop session on building practical electronic circuits! Today, we're diving into a fundamental building block of almost every electronic device: the **power supply**. Specifically, we'll be focusing on creating a **fixed voltage power supply using a transformer**. This is a critical skill, directly linking to our course objectives, especially in understanding and applying circuit design principles.

### 1. Understanding the Need for a Power Supply: The Foundation of Electronics

Before we even touch a component, let's ask ourselves: why do we need a power supply? Think about your mobile phone, your laptop, your TV – they all plug into the wall, right? But the power coming from the wall socket (typically 230V AC in India) isn't directly usable by the delicate electronic components inside these devices. These components, like microprocessors or transistors, often require a stable, lower DC voltage.

This is where our power supply comes in. Its primary job is to take the high-voltage AC power from the mains and convert it into a clean, stable, and low-voltage DC power that our electronic circuits can safely operate with. This concept aligns with **CO1: Demonstrate safety measures against electrical shocks**, as we'll be dealing with mains voltage, and understanding the conversion process is key to handling it safely.

### 2. The Role of the Transformer: Stepping Down the Voltage

Our journey begins with the **transformer**. As mentioned in **CO2: Familiarise with transformers, rheostats, batteries and earthing schemes**, transformers are essential for changing voltage levels.

**What is a Transformer?** Imagine a magical device that can "transform" voltage. In reality, it's a static electrical device that transfers electrical energy between two or more circuits through electromagnetic induction. It has two main coils of wire, insulated from each other, wound around a common iron core.

*   **Primary Winding:** This coil is connected to the input AC voltage source (the mains supply).
*   **Secondary Winding:** This coil provides the output voltage.

The magic happens because of the relationship between the number of turns in the primary and secondary windings. The **transformer turns ratio** dictates how the voltage changes.

*   **Step-down Transformer:** If the secondary winding has fewer turns than the primary, it "steps down" the voltage. This is exactly what we need for our power supply. We take the high 230V AC and step it down to a much lower, safer AC voltage, say 12V or 9V AC. This is crucial because our sensitive electronic components cannot handle such high voltages.
*   **Step-up Transformer:** Conversely, if the secondary has more turns, it steps up the voltage. Not needed for this specific circuit, but good to know!

**Relatable Example:** Think of a water hose connected to a high-pressure main. You need a special nozzle to reduce the pressure so you can control the water flow without it being too powerful. The transformer acts like that nozzle for electrical voltage.

**Exam Tip:** When asked about transformers, always remember the turns ratio and its effect on voltage and current. The product of voltage and current (power, neglecting losses) on both sides of an ideal transformer is roughly the same. So, if you step down voltage, the current tends to step up.

### 3. The Rectifier: Converting AC to Pulsating DC

After the transformer has done its job of stepping down the voltage, we have a lower AC voltage. However, our electronic circuits need DC (Direct Current), which flows in only one direction. This is where the **rectifier** comes in. Its job is to convert the AC input into pulsating DC.

There are two common types of rectifiers we encounter:

*   **Half-wave Rectifier:** This circuit uses a single diode. A diode is like a one-way street for electricity. It allows current to flow in only one direction. A half-wave rectifier essentially "chops off" half of the AC waveform, allowing only the positive or negative half-cycles to pass through.
    *   **Pros:** Simple, uses only one diode.
    *   **Cons:** Inefficient, produces a lot of ripple (fluctuations in the DC output), and the output current is not continuous.
*   **Full-wave Rectifier:** This is a more efficient and preferred method. It utilizes either a center-tapped transformer with two diodes or a bridge rectifier with four diodes.
    *   **Center-tapped Full-wave Rectifier:** This uses a special transformer with a tap in the middle of the secondary winding. Two diodes are used, each conducting during alternate half-cycles of the AC input. This results in a pulsating DC that has fewer gaps than the half-wave rectifier.
    *   **Bridge Rectifier:** This is the most common configuration. It uses four diodes arranged in a "bridge" formation. Regardless of the polarity of the input AC voltage, the diodes are arranged such that the current always flows through the load in the same direction. This gives us a pulsating DC output where both half-cycles of the AC input are utilized.

**Analogy:** Imagine you have a swing that goes back and forth (AC). A half-wave rectifier is like only pushing the swing when it's moving in one direction. A full-wave rectifier is like pushing it every time it moves, ensuring it keeps going forward. The output isn't a smooth forward motion yet, but it's a lot more continuous.

**Connection to CO3:** Understanding these rectifier circuits and their connection diagrams is a direct application of **CO3: Illustrate the connection diagram and identify the suitable accessories necessary for wiring simple electric circuits**.

**Exam Focus:** Be prepared to draw and explain the working of both half-wave and full-wave rectifiers (center-tapped and bridge). Understanding the output waveforms and ripple factor is key.

### 4. The Filter: Smoothing Out the Ripples

The output from the rectifier is pulsating DC – it's not smooth and steady. If we were to connect this pulsating DC directly to our sensitive electronic components, it would be like giving them a jerky, inconsistent power supply, which could damage them or cause erratic behavior. We need to "smooth out" these pulses.

This is the job of the **filter**. The most common filter component used is a **capacitor**.

*   **Capacitor as a Filter:** A capacitor is like a small, temporary energy storage device. When the pulsating DC voltage is high, the capacitor charges up. When the voltage starts to drop, the capacitor discharges, supplying current to the load and keeping the voltage from dropping too low. It acts like a buffer, filling in the "gaps" in the pulsating DC.

The larger the capacitance value, the better it is at smoothing out the ripples. A common arrangement is to place a capacitor across the output of the rectifier. Sometimes, a small inductor is also used in conjunction with capacitors to create more effective filters (like LC filters), but for a basic power supply, a simple capacitor filter is often sufficient.

**Analogy:** Think back to the water hose. The pulsating DC is like water coming out in spurts. The capacitor is like a small reservoir that catches the spurt, and then releases it smoothly when the spurts stop, ensuring a more continuous flow.

**CO4 Relevance:** Identifying a capacitor and understanding its role as a smoothing element is directly related to **CO4: Identify various electronic components**.

### 5. The Voltage Regulator: Maintaining a Fixed Voltage

Even with a filter, the output voltage might still fluctuate slightly due to changes in the input AC voltage or the load connected to the power supply. For many electronic circuits, we need a *precisely* fixed DC voltage, regardless of these variations. This is where the **voltage regulator** comes into play.

*   **Linear Voltage Regulators:** These are the most common type used in basic power supplies. They are typically integrated circuits (ICs) that have three terminals:
    1.  **Input:** Connected to the filtered DC output.
    2.  **Ground:** Connected to the common ground.
    3.  **Output:** Provides the regulated, fixed DC voltage.

    Popular examples include the **78xx series** (e.g., 7805 for +5V, 7812 for +12V) for positive voltage regulation and the **79xx series** for negative voltage regulation.

*   **How they work (simplified):** A voltage regulator essentially acts like a variable resistor in series with the output. If the input voltage tries to rise above the desired regulated output, the regulator increases its internal resistance to "drop" the excess voltage. If the input voltage drops, the regulator might not be able to maintain the output, so there's a minimum input voltage requirement. They are "linear" because they control the voltage by dropping excess voltage as heat.

**Example:** Let's say you're using a 7805 regulator. This IC will always try to output a stable +5V DC, as long as the input voltage to it is, say, between 7V and 25V (typical range, check datasheet). If the filtered DC is 10V, the 7805 will drop 5V internally, dissipating it as heat, and provide a steady 5V at its output. If the filtered DC drops to 6V, the 7805 will still try to output 5V.

**CO6 Application:** This entire process – selecting a regulator IC, understanding its pinout, and connecting it – directly applies **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB**.

**CO5 Relevance:** When testing the output of the regulator, you'll be using measuring instruments like a voltmeter, as per **CO5: Select and Operate various measuring instruments**.

### 6. Practical Assembly on General Purpose PCB

Now, let's bring it all together on a **General Purpose PCB (Printed Circuit Board)**. This is where the hands-on work begins, directly addressing the module's core activity.

**What is a PCB?** A PCB is a board made of insulating material (like fiberglass) with conductive pathways (copper traces) etched onto it. These traces connect different electronic components, acting as the "wires" in our circuit. General purpose PCBs have a grid of holes, and we solder components and wires to connect them according to our circuit diagram.

**Steps for Assembly:**

1.  **Circuit Diagram:** Always start with a clear schematic diagram of the fixed voltage power supply. This diagram shows all components and how they are interconnected.
2.  **Component Identification (CO4):** Identify and gather all necessary components: transformer, diodes (e.g., 1N4007 for general rectification, bridge rectifier module), capacitors (electrolytic for filtering, ceramic for decoupling), voltage regulator IC (e.g., 7805), and any necessary resistors or LEDs for indication.
3.  **Layout Planning:** Decide how you will place the components on the PCB. Consider the flow of the circuit and keep connections short. Place the transformer near the edge.
4.  **Soldering:** Carefully solder each component onto the PCB. Ensure correct polarity for diodes and electrolytic capacitors. For ICs, it's often best to use an IC socket.
5.  **Wiring:** Connect the transformer to the input of the rectifier circuit on the PCB. Connect the output of the rectifier to the filter and then to the input of the voltage regulator. Connect the output of the regulator to the load (which could be a simple resistor or an LED).
6.  **Safety Check (CO1):** Double-check all connections, especially for shorts or incorrect polarities. Ensure no stray wires are loose.

**CO7 Importance:** This is a perfect activity for teamwork (**CO7: Build the ability to work in a team with good interpersonal skills**). You can divide tasks like component identification, soldering, and testing among team members.

### 7. Testing and Functioning

Once assembled, it's time to test our creation!

1.  **Initial Checks:**
    *   **Visual Inspection:** Re-examine the PCB for any obvious errors – solder bridges, misplaced components, reversed polarity.
    *   **Continuity Test:** Use a multimeter in continuity mode to check for any accidental shorts between power and ground rails before applying power.
2.  **Applying Power:**
    *   Connect the transformer's primary winding to a suitable AC source (start with a low voltage if possible, or just be very careful with mains).
    *   **Safety First (CO1):** Ensure the mains connection is secure and insulated. If possible, use a variac (variable transformer) to gradually increase the voltage for initial testing.
3.  **Measurement (CO5):**
    *   Use a multimeter to measure the AC voltage from the transformer's secondary winding. This should be close to the expected stepped-down value.
    *   Measure the DC voltage at the output of the rectifier. It will be pulsating.
    *   Measure the DC voltage after the filter capacitor. It should be smoother.
    *   Finally, measure the DC voltage at the output of the voltage regulator. This should be the stable, fixed voltage (e.g., +5V for a 7805).
4.  **Load Test:** Connect a small load (like an LED with a current-limiting resistor, or a small resistor) to the output of the regulator and re-measure the voltage to see how it behaves under load. The voltage should remain relatively stable.
5.  **Demonstration:** Show your working power supply to your instructor. Explain the function of each stage: transformer, rectifier, filter, and regulator. This demonstrates your understanding and application of the concepts.

### Summary and Key Takeaways

Building a fixed voltage power supply is a fundamental skill that combines AC to DC conversion, voltage regulation, and practical circuit assembly.

*   **Transformer:** Steps down AC voltage.
*   **Rectifier:** Converts AC to pulsating DC.
*   **Filter:** Smoothes out the pulsating DC.
*   **Voltage Regulator:** Provides a stable, fixed DC output.
*   **PCB Assembly:** Requires careful soldering and component placement.
*   **Testing:** Crucial for verifying correct operation and safety.

Remember this: a well-designed and tested power supply is the heart of any reliable electronic system. You've now learned how to build one, a skill that directly supports many of our course outcomes, from understanding basic components to applying design principles and ensuring safe operation.

---

## Sample Questions with Answers

**Q1. What is the primary function of a transformer in a power supply circuit?**

**Answer:** The primary function of a transformer in a power supply circuit is to **step down** the high AC mains voltage (e.g., 230V AC) to a lower, safer AC voltage (e.g., 12V AC) which is suitable for the subsequent stages of the power supply. This is achieved through electromagnetic induction based on the turns ratio of the primary and secondary windings. This relates to **CO2**.

**Q2. Explain why a filter capacitor is used in a power supply circuit.**

**Answer:** A filter capacitor is used after the rectifier stage to **smooth out the pulsating DC output** from the rectifier. The rectifier converts AC to DC, but the output is not a steady DC voltage; it has significant "ripples" or variations. The capacitor acts as a temporary energy storage device, charging up when the rectified voltage is high and discharging when it drops, thereby filling in the gaps and providing a more constant, smoother DC voltage to the load. This is essential for the proper functioning of sensitive electronic components and relates to understanding component function (**CO4**) and circuit design (**CO6**).

**Q3. What is the difference between a half-wave and a full-wave rectifier? Which is generally preferred and why?**

**Answer:**
*   **Half-wave Rectifier:** Uses a single diode and conducts current during only one half-cycle of the AC input, effectively blocking the other half-cycle. Its output is highly pulsating with large gaps.
*   **Full-wave Rectifier:** Utilizes both half-cycles of the AC input. It can be implemented using a center-tapped transformer with two diodes or a bridge rectifier with four diodes. The output is pulsating DC but with fewer gaps and less ripple compared to a half-wave rectifier.

A **full-wave rectifier (especially the bridge rectifier)** is generally preferred because it is more efficient (utilizes both halves of the AC waveform), provides a smoother output DC with lower ripple, and thus requires less filtering. This leads to a more effective and stable power supply. This covers understanding rectifier circuits (**CO3**) and circuit design (**CO6**).

**Q4. If you are building a +5V fixed voltage power supply using a 7805 regulator, what voltage would you ideally expect at the input terminal of the 7805 IC? Briefly explain why.**

**Answer:** You would ideally expect a DC voltage slightly higher than +5V, typically in the range of **+7V to +12V DC**, at the input terminal of the 7805 regulator. This is because the 7805 is a linear voltage regulator, and it needs a minimum "dropout voltage" to function correctly. The dropout voltage is the minimum voltage difference required between its input and output terminals to maintain regulation. For the 7805, this is typically around 2V. Therefore, if the output is +5V, the input must be at least +5V + 2V = +7V. Providing a higher input voltage (e.g., +10V or +12V) ensures that the regulator operates well within its specified range, even with variations in the input or load, and it dissipates the excess voltage as heat. This relates to selecting and operating components (**CO4, CO6**) and understanding circuit behavior.

**Q5. You've assembled a power supply circuit on a PCB and upon testing, the output voltage is fluctuating significantly. What are two likely causes and how would you troubleshoot them?**

**Answer:**
1.  **Inadequate Filtering:**
    *   **Cause:** The filter capacitor might be too small for the load current, or it might be faulty (e.g., open circuit, reversed polarity if electrolytic).
    *   **Troubleshooting:**
        *   Check the value and rating of the filter capacitor against the circuit design.
        *   Verify the polarity of the electrolytic capacitor if used.
        *   Try increasing the capacitance value.
        *   Measure the voltage across the capacitor to see if it's smooth or still very pulsating.
        *   Check if the capacitor is shorted using a multimeter.
2.  **Unstable Input to the Regulator:**
    *   **Cause:** The output from the rectifier and filter stage might not be providing a stable enough DC voltage to the regulator IC. This could be due to insufficient filtering or issues in the rectifier stage itself (e.g., faulty diodes).
    *   **Troubleshooting:**
        *   Measure the voltage directly at the output of the rectifier (before the filter) to see the pulsation.
        *   Measure the voltage at the input of the regulator and ensure it's consistently above the dropout voltage requirement.
        *   Check the diodes in the rectifier circuit for proper operation.

These troubleshooting steps involve using measuring instruments (**CO5**) and understanding circuit operation (**CO6**).
