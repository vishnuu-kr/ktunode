---
title: "Assembling of electronic circuit/system on general purpose PCB, test and show the functioning (Any two)-"
subject: "BASIC ELECTRICAL AND ELECTRONICS  ENGINEERING WORKSHOP"
module: "Module 7: Assembling of electronic circuit/system on general purpose PCB, test and show the functioning (Any two)"
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5cda"
status: "completed"
scrapedAt: "2026-05-20T16:36:55.022Z"
---
## Module 7: Assembling Electronic Circuits on General Purpose PCBs

**Welcome, future engineers!** In our journey through Basic Electrical and Electronics Engineering, we've explored the fundamental principles, identified components, and even dabbled with breadboarding. Now, it's time to take our creations from the temporary breadboard to a more permanent home: the **General Purpose Printed Circuit Board (PCB)**. This module is all about the practical skill of bringing an electronic circuit to life on a PCB, testing its functionality, and confidently demonstrating that it works as intended.

### Introduction to General Purpose PCBs

Think of a PCB as the foundation or chassis for our electronic circuits. Instead of messy wires and loose components, a PCB provides a neat, organized, and robust platform.

**What exactly is a General Purpose PCB?** It’s a versatile board, often made of fiberglass or phenolic resin, with a grid of holes. These holes are interconnected by copper tracks on one or both sides. Unlike custom-designed PCBs where the tracks are specifically etched for a particular circuit, general purpose PCBs offer a more flexible, off-the-shelf solution for prototyping and small-scale production. They are like a blank canvas with pre-drawn guidelines, allowing us to connect components as needed.

*   **Why use PCBs?** They offer several advantages over breadboards:
    *   **Durability and Reliability:** Connections are soldered, making them far more robust and less prone to accidental disconnections. This is crucial for circuits that need to be moved or used in real-world applications.
    *   **Compactness:** Circuits can be made significantly smaller and neater, which is essential for many electronic devices.
    *   **Reduced Noise:** Well-laid-out PCBs can minimize electrical interference, leading to more stable circuit performance.
    *   **Professional Appearance:** Let’s face it, a circuit on a PCB looks much more professional and polished than one held together with jumper wires.

*   **Connection to Course Outcomes:** This entire module directly addresses **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB**. We’ve already practiced designing on breadboards (which is a crucial first step!), and now we’re translating that into a more permanent form. We’ll also be leveraging skills learned in **CO4: Identify various electronic components** and **CO5: Operate various measuring instruments** for testing. And of course, remembering safety from **CO1: Demonstrate safety measures against electrical shocks** is paramount throughout the process.

### Essential Tools and Materials

Before we start soldering, let's make sure we have our toolkit ready. This is where we put our knowledge of components and tools to use.

*   **Soldering Iron:** The heart of our assembly. A good quality soldering iron with temperature control is ideal.
*   **Solder Wire:** Typically a tin-lead alloy, often with a flux core. The flux helps the solder flow smoothly and create good electrical connections.
*   **Soldering Flux:** Sometimes, you might need additional flux to help solder flow, especially on older or slightly oxidized component leads.
*   **Desoldering Wick/Pump:** For those inevitable mistakes! These tools help remove excess solder without damaging the PCB.
*   **Wire Strippers/Cutters:** To prepare component leads and connecting wires.
*   **Pliers (Needle-nose and cutting):** For bending component leads and cutting wires.
*   **General Purpose PCB:** The canvas we discussed earlier.
*   **Electronic Components:** As per your circuit diagram (resistors, capacitors, ICs, transistors, diodes, etc.).
*   **Hook-up Wire:** For making connections where PCB tracks aren't sufficient or for adding components that don't have leads that fit the PCB holes.
*   **Multimeter:** Absolutely essential for testing continuity, voltage, and current.
*   **Magnifying Glass/Bench Magnifier:** To inspect your solder joints closely.
*   **Safety Glasses:** Non-negotiable! Protect your eyes from solder splashes and flux fumes.
*   **Ventilation:** A well-ventilated area or a fume extractor is important to avoid inhaling flux fumes.

**Regarding safety (CO1):** Always remember that a soldering iron gets extremely hot. Keep it in its stand when not in use, and never touch the tip. Be mindful of where you place the hot iron and the hot solder. Work in a well-ventilated area to avoid breathing in fumes.

### The Assembly Process: Step-by-Step

Let's break down how we actually put a circuit onto a general purpose PCB. This is where **CO6** really comes into play – applying the design.

**Step 1: Understanding the Circuit Diagram and PCB Layout**

*   **Circuit Diagram:** This is your blueprint. You need to thoroughly understand how each component is connected to the others. Trace the paths of current flow.
*   **PCB Layout:** This is where you decide where each component will physically sit on the general purpose PCB and how you will use the existing copper tracks or create new connections. For general purpose PCBs, we often refer to the layout as a **"layout sketch"** or a **"placement plan."**

    *   **Component Placement:** Decide where each component will go. Consider:
        *   **Size:** Larger components might need more space.
        *   **Heat:** Components that generate heat should be placed away from each other or have some airflow.
        *   **Orientation:** Polarized components like electrolytic capacitors, diodes, and ICs must be placed in the correct orientation. Pay attention to the polarity markings!
        *   **User Interface:** If your circuit has controls (like potentiometers or switches), place them where they are easily accessible.
        *   **Interconnections:** Try to minimize the length of wires and the number of crossovers (where one wire has to go over another).

    *   **Planning Connections:** Look at the PCB’s hole patterns. Can you use the existing copper tracks to connect components? If not, you’ll need to use hook-up wires. Often, you'll find a series of holes connected by a copper strip. These are your "bus lines" and are very useful for power and ground connections.

**Step 2: Component Preparation**

*   **Lead Bending:** For components like resistors and capacitors, you might need to bend their leads to fit the holes on the PCB. Use pliers for this. Try to make clean bends.
*   **Lead Trimming:** Don't leave excessively long leads sticking out from the underside of the PCB. Trim them neatly after soldering.
*   **IC Sockets:** For ICs, it's often good practice to use an IC socket. This protects the delicate IC from heat during soldering and makes it easy to replace the IC if it fails or if you want to upgrade.

**Step 3: Soldering the Components**

This is the critical part! Good soldering technique is key to a reliable circuit.

1.  **Insert Component:** Carefully insert the component leads into the appropriate holes on the PCB. Ensure it's seated firmly and in the correct orientation. For polarized components, double-check the markings.
2.  **Bend Leads (Optional but Recommended):** After inserting a component, you can gently bend its leads outwards on the underside of the PCB. This helps hold the component in place while you solder.
3.  **Heat the Joint:** Touch the tip of the hot soldering iron to *both* the component lead and the copper pad on the PCB simultaneously. You’re heating the connection point. This is crucial. Don’t just melt solder onto the iron tip and then touch it to the joint.
4.  **Apply Solder:** Feed the solder wire into the heated joint, allowing it to flow smoothly around the lead and the pad. You only need a small amount of solder – enough to create a shiny, volcano-shaped connection.
5.  **Remove Solder, Then Iron:** Remove the solder wire first, then remove the soldering iron.
6.  **Inspect the Joint:** A good solder joint should be shiny, smooth, and have a conical shape, covering the component lead and the copper pad. It shouldn’t look dull, lumpy, or like a ball.

*   **Common Soldering Pitfalls to Avoid:**
    *   **Cold Solder Joint:** This happens if the joint wasn't heated sufficiently. It looks dull and grainy and will likely cause intermittent connections. This is a frequent source of problems in workshops!
    *   **Too Much Solder:** This can bridge connections between adjacent pads, causing a short circuit.
    *   **Not Enough Solder:** The connection might not be mechanically or electrically sound.
    *   **Overheating:** Holding the iron on the joint for too long can damage the component or the PCB.

*   **Reference to Textbooks:** Raina & Bhattacharya’s "Electrical Design Estimating and Costing" and Giridharan’s "Electrical Systems Design" might touch upon materials and wiring practices, but for detailed soldering techniques, Bhargava, Kulshreshtha, and Gupta’s "Basic Electronics and Linear Circuits" is an excellent resource. They emphasize the importance of proper soldering for reliable circuit performance.

**Step 4: Making Wire Connections (if needed)**

If you need to connect points on the PCB that aren't already linked by copper tracks, or if you're adding components with wires, you'll use hook-up wire.

1.  **Strip Wire Ends:** Carefully strip a small amount of insulation (about 5mm) from each end of the hook-up wire.
2.  **Tinning:** It’s good practice to "tin" the stripped wire ends. Apply a small amount of solder to the wire ends to make them easier to insert and solder to the PCB holes or component leads.
3.  **Solder Connections:** Feed the tinned wire ends through the appropriate holes on the PCB and solder them in place, following the same soldering technique as for component leads.

**Step 5: Trimming Excess Leads**

Once all components are soldered and any necessary wires are in place, use wire cutters to trim any excess component leads sticking out from the underside of the PCB. Leave a small stub (about 1-2 mm) – this helps ensure the connection is solid and makes it easier to desolder later if needed.

### Testing and Demonstration

This is where we confirm that our hard work has paid off and that our circuit actually *does* something! This is where **CO5: Operate various measuring instruments** comes into play.

**1. Visual Inspection:**

*   Before applying power, give your PCB a thorough visual inspection.
    *   Check for any stray solder blobs or wires that might be shorting out adjacent connections.
    *   Ensure all components are correctly oriented (especially polarized ones like diodes, electrolytic capacitors, and ICs).
    *   Look for any signs of damage to the PCB.
    *   Are all components firmly soldered?

**2. Continuity Testing (using Multimeter):**

*   This is a crucial step before powering up. Set your multimeter to the continuity setting (usually indicated by a diode symbol or a sound wave symbol).
*   **Check for Shorts:** Test between power and ground points on your PCB. There should be no continuity (no beep). If there is, you have a short circuit that needs to be resolved before proceeding.
*   **Check for Open Circuits:** If your circuit involves specific paths, you can test for continuity along those intended paths.

**3. Powering Up and Functional Testing:**

*   **Low Voltage First:** If your circuit requires a power supply, start with the lowest voltage recommended for your circuit.
*   **Observe Carefully:** Power on the circuit and observe for any immediate signs of trouble – smoke, unusual smells, or overheating components. If you see any of these, immediately disconnect the power!
*   **Measure Key Voltages:** Use your multimeter to measure voltages at critical points in the circuit. For example, check if the regulated voltage is correct, or if the input voltage is reaching the components.
*   **Observe Output:** Depending on the circuit, you might be looking for an LED to light up, an audio output, a change in voltage, or some other observable behavior.
*   **Compare with Expected Results:** Refer to your circuit diagram and expected behavior. Does the circuit do what it's supposed to do?

**4. Demonstration:**

*   Once you are confident the circuit is functioning correctly, you need to demonstrate it.
*   **Explain Your Circuit:** Be prepared to briefly explain what the circuit does and how it works. Identify the key components and their roles. This ties back to **CO4** and your understanding of the circuit design.
*   **Show the Functionality:** Clearly demonstrate the intended operation of the circuit. For example, if it’s a light-activated switch, show how it turns on when light is shone on the sensor and off when the light is removed.
*   **Answer Questions:** Be ready to answer questions about the circuit, the assembly process, and the testing procedures.

### Example Circuit Scenarios (To illustrate the process)

Let's consider two common examples that you might encounter in this workshop. Remember, the specific components and their values will depend on the actual circuit you are assigned.

**Example 1: A Simple LED Flasher Circuit (e.g., using a 555 Timer IC)**

This is a classic beginner's circuit. A 555 timer IC, along with a few resistors and capacitors, can be configured to oscillate and blink an LED.

*   **Circuit Diagram:** You'll have a 555 timer IC, a couple of resistors (e.g., for timing), a capacitor (for timing), and an LED with a current-limiting resistor.
*   **PCB Assembly:**
    *   You'd identify the pins of the 555 timer.
    *   Place the IC in an IC socket if available.
    *   Place the resistors and capacitor, ensuring correct orientation for the capacitor (usually marked with a '+' symbol or a stripe indicating the negative pin).
    *   Place the LED, noting the polarity – the longer lead is usually positive (anode). The current-limiting resistor is placed in series with the LED.
    *   Solder all components carefully.
    *   You might need a hook-up wire to connect the output of the 555 timer (pin 3) through the current-limiting resistor to the LED.
*   **Testing:**
    *   Visually inspect for correct component placement and good solder joints.
    *   Continuity test between power and ground to check for shorts.
    *   Connect a suitable DC power supply (e.g., 5V or 9V, depending on the 555 timer's rating).
    *   You should see the LED blinking!
    *   You can measure the voltage across the timing capacitor to see the charging/discharging pattern, which is related to the blinking frequency.

*   **Demonstration:** Show the blinking LED. Explain that the blinking rate can be adjusted by changing the values of the resistors and capacitor, as dictated by the 555 timer's datasheet (a key piece of information!). This demonstrates your understanding of timing circuits and component selection, linking to **CO6**.

**Example 2: A Simple Voltage Regulator Circuit (e.g., using LM7805)**

This circuit takes a varying input voltage and outputs a stable 5V.

*   **Circuit Diagram:** You'll have an input capacitor, the LM7805 voltage regulator IC, an output capacitor, and potentially a heat sink for the LM7805 if significant current is expected.
*   **PCB Assembly:**
    *   Place the LM7805 IC. Note that it has specific pinouts for input, ground, and output. Check the datasheet for correct orientation and pin numbering. It often comes in a TO-220 package with a metal tab that needs to be connected to ground or a heat sink.
    *   Place the input and output capacitors. These are usually electrolytic capacitors, so correct polarity is critical. The negative terminal is often marked.
    *   If using a heat sink, ensure it's properly attached to the LM7805. If the tab needs to be connected to ground, you might use a small piece of wire or ensure it makes good contact with a grounded copper plane on the PCB.
    *   Solder all components.
*   **Testing:**
    *   Visual inspection: Check capacitor polarity, IC orientation, and solder joints.
    *   Continuity test: Ensure no shorts between input and ground, or output and ground.
    *   Connect an input voltage source (e.g., a variable DC power supply set to 9-12V).
    *   Connect your multimeter to the output pins of the LM7805 (after the output capacitor).
    *   Turn on the input power supply.
    *   Measure the output voltage. It should be a stable 5V, regardless of minor fluctuations in the input voltage.
    *   You can also test the circuit's ability to handle load by connecting a resistor (acting as a load) to the output and measuring the voltage again.

*   **Demonstration:** Show the stable 5V output using the multimeter. You could even connect a small load, like a few LEDs with current-limiting resistors, to the output and show they operate correctly, powered by the regulated 5V. This showcases your ability to build a functional power supply circuit, directly relating to **CO6** and **CO5**.

### Important Considerations and Common Exam Points

*   **Safety First:** This cannot be stressed enough. Always prioritize safety. **CO1** is fundamental.
*   **Soldering Quality:** The examiner will be looking for neat, shiny, and reliable solder joints. Avoid cold joints and solder bridges.
*   **Component Identification and Polarity:** Correctly identifying components (**CO4**) and their polarity is crucial for the circuit to function. Misplacing a capacitor or diode can lead to incorrect operation or even damage.
*   **Testing Procedure:** A systematic testing approach using a multimeter (**CO5**) is essential to diagnose and confirm functionality.
*   **Teamwork (CO7):** While you might be assembling individually, the principles of good communication and collaboration are vital in engineering projects. If working in teams, ensure everyone understands their role and contributes effectively.
*   **Understanding the Circuit:** Simply assembling isn't enough. You need to understand *what* your circuit is supposed to do and *why* it works. Be prepared to explain this.

**Remember this:** The goal of this module is to build confidence in taking a schematic, translating it into a physical layout on a general purpose PCB, and then verifying its operation through careful testing. It bridges the gap between theoretical understanding and practical application.

---

### Sample Questions and Answers

Here are a few questions to test your understanding, covering both concepts and potential exam scenarios.

**1. Question (Conceptual - K2/K3):** What is the primary advantage of using a PCB over a breadboard for a permanent electronic circuit?

**Answer:** The primary advantage of using a PCB is its **durability and reliability**. Unlike breadboards where connections are temporary and prone to loosening, PCB connections are made permanent through soldering. This makes the circuit much more robust, less susceptible to vibration or movement, and generally more reliable for long-term use. Additionally, PCBs allow for more compact and neat circuit designs compared to the often-cluttered wiring on breadboards.

**2. Question (Practical - K3):** You've just finished soldering a resistor onto a general purpose PCB. Upon visual inspection, you notice that the solder joint is dull grey and looks rough. What is this likely to be, and what is the consequence?

**Answer:** This is likely a **cold solder joint**. A cold solder joint occurs when the connection point (component lead and PCB pad) is not heated sufficiently before solder is applied. The consequence is a poor electrical and mechanical connection, which can lead to intermittent operation or complete failure of the circuit. In an exam, you might be asked to identify this from a picture or describe how to fix it (by reheating the joint and adding a little more solder).

**3. Question (Application - K3):** You are assembling a circuit that uses an electrolytic capacitor. You mistakenly place it with the polarity reversed. What is likely to happen, and why is it important to check polarity?

**Answer:** If an electrolytic capacitor is placed with reverse polarity and the circuit is powered on, it can lead to several outcomes, depending on the voltage and capacitor rating:
    *   **Leakage Current:** Initially, it might just draw more current than expected.
    *   **Heating:** The capacitor may heat up significantly.
    *   **Damage:** The dielectric layer inside the capacitor can break down, permanently damaging the capacitor.
    *   **Explosion/Rupture:** In severe cases, the capacitor can swell, bulge, and even rupture or explode, releasing electrolyte and potentially causing damage to other components or injury.
This highlights why understanding component identification and polarity (**CO4**) is crucial for safe and correct assembly.

**4. Question (Troubleshooting - K3):** Your assembled circuit is not working as expected. You've already performed a visual inspection and found no obvious shorts or misplaced components. What is the next logical step for troubleshooting using a multimeter?

**Answer:** The next logical step would be to perform **continuity testing** at various points in the circuit.
    *   First, check for any unintended shorts between power and ground rails.
    *   Then, verify continuity along the expected signal paths, from the input of a stage to the output of that stage. This helps identify if a component lead is not properly soldered, or if a break exists in a trace or wire connection.
    *   Measuring voltages at different points using the multimeter is also a key troubleshooting step. This helps confirm if the power supply is reaching the components and if intermediate stages are functioning as expected. This directly applies **CO5**.

**5. Question (Design & Assembly - K3):** When designing the layout of components on a general purpose PCB, why is it important to consider the placement of heat-dissipating components like voltage regulators?

**Answer:** Components that dissipate heat, such as voltage regulators (like the LM7805), can increase the temperature of the PCB and nearby components. If not placed properly, heat can build up, leading to:
    *   **Reduced Component Lifespan:** Excessive heat can shorten the operational life of electronic components.
    *   **Performance Degradation:** Some components' performance characteristics can change with temperature.
    *   **Thermal Runaway:** In extreme cases, the heat generated by one component can cause nearby components to overheat, creating a cycle.
Therefore, placing them with adequate spacing, or ensuring they are connected to a heat sink where appropriate, helps maintain reliable operation and prevents premature failure. This relates to the practical application aspect of **CO6**.
