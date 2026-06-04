---
title: "Capacitor filter"
subject: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP"
module: "Module 15: Assembling of electronic circuit/system on general purpose PCB, test and show the functioning (Any two)"
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edefeb4799d95e836e1"
status: "completed"
scrapedAt: "2026-05-20T17:41:51.953Z"
---
# Module 15: Assembling of Electronic Circuits on General Purpose PCB - Capacitor Filter

Welcome, everyone, to our workshop session on Module 15! Today, we’re diving into a crucial aspect of building practical electronic circuits: **assembling them on a general-purpose PCB (Printed Circuit Board)**. This module is all about taking those theoretical circuit diagrams we've been studying and bringing them to life, testing their functionality, and making sure they work as intended.

As part of this module, we're focusing on a specific, yet fundamental, electronic circuit: the **Capacitor Filter**. Think of it as the unsung hero in many power supply circuits, smoothing out the rough edges of rectified AC voltage. We’ll be covering how to build one, test it, and understand why it works.

Before we get our hands dirty, let's connect this topic to our broader course objectives, or **Course Outcomes (COs)**.

*   **CO1: Demonstrate safety measures against electrical shocks.** This is paramount in any workshop. When we’re dealing with power supplies, even low voltages, we must always be aware of safety. We’ll reiterate proper handling of tools, components, and power sources. Remember, a safe workshop is a productive workshop!
*   **CO2: Familiarise with transformers, rheostats, batteries and earthing schemes.** While our primary focus is the capacitor filter itself, it often works in conjunction with a power supply. If we're building a complete system, we might be using a transformer to step down voltage, or a battery as a source. Understanding these components will give us a better appreciation for the context in which our filter operates.
*   **CO3: Illustrate the connection diagram and identify the suitable accessories necessary for wiring simple electric circuits.** Building a circuit on a PCB involves following a connection diagram meticulously. We’ll learn to read these diagrams for the capacitor filter and select the right PCB, wires, and connectors.
*   **CO4: Identify various electronic components.** We’ll be working with capacitors, and likely diodes and resistors as well, depending on the specific filter circuit. Knowing what each component looks like and its symbol is essential.
*   **CO5: Select and Operate various measuring instruments.** To test our capacitor filter, we’ll definitely need instruments like a multimeter and perhaps an oscilloscope. Understanding how to use these tools correctly is key to verifying our circuit’s performance. This is where our **Knowledge Level K3** comes into play – we’re not just knowing *about* them, we’re *operating* them.
*   **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB.** This module directly addresses **CO6**. We'll be applying design principles to assemble our capacitor filter circuit onto a PCB. This involves understanding component placement, soldering techniques, and troubleshooting. The **Knowledge Level K3** here means we’re applying what we’ve learned about circuit design.
*   **CO7: Build the ability to work in a team with good interpersonal skills.** In a workshop setting, teamwork is often encouraged. You might be working with a partner to build and test the circuit, learning to communicate effectively and share tasks. This directly relates to **CO7**, fostering those essential **K3 interpersonal skills.**

So, you see, building a capacitor filter on a PCB isn't just about soldering; it's a practical application of many of the fundamental concepts we’ve covered throughout the course.

---

### Understanding the Need for Filtering: From Rough to Smooth

Let’s start with *why* we need capacitor filters. Imagine you’re powering a sensitive electronic device, like a radio receiver or a microcontroller. These devices need a clean, stable DC (Direct Current) voltage to operate correctly. What do we usually get from a mains power adapter? After rectification, we get a pulsating DC voltage. Think of it like a bumpy road – you have the general direction (DC), but there are a lot of ups and downs (ripples) that can disrupt the smooth ride your sensitive electronics need.

This is where the **filter** comes in. It’s like the suspension system for your electronics, smoothing out those bumps and providing a much more stable voltage.

### What is a Capacitor Filter?

At its core, a capacitor filter uses the property of a capacitor to store electrical energy. A capacitor acts like a tiny, temporary battery. When the voltage across it increases, it stores charge. When the voltage starts to drop, it releases that stored charge, effectively filling in the gaps and smoothing out the voltage waveform.

Think of a water pipe with a small reservoir attached. When water pressure is high, the reservoir fills up. When the pressure dips momentarily, the reservoir releases some water, keeping the flow more constant. A capacitor does something similar with electrical charge.

### Types of Capacitor Filters

While many filter circuits exist, for our purpose in this basic workshop, we'll primarily focus on the most common and fundamental type, often used in conjunction with rectifiers:

*   **The Capacitor Filter (or "C" Filter):** This is the simplest form. It consists of a single capacitor placed across the output of a rectifier.

We might also encounter circuits where a capacitor is used in combination with other components like inductors (forming LC filters) or resistors (forming RC filters) to achieve even better filtering. However, for this module, our focus will be on the standalone capacitor filter, which is a great starting point for understanding the principle.

### The "C" Filter in Action: Smoothing Rectified DC

Let’s consider a half-wave or full-wave rectifier. The output of a rectifier is not pure DC; it's DC with an AC ripple. For instance, a full-wave rectifier output might look like a series of humps, but there are still dips in voltage between these humps.

When we connect a capacitor in parallel with the rectifier's output, here’s what happens:

1.  **Charging Phase:** As the rectified voltage rises, current flows into the capacitor, charging it up. The capacitor voltage follows the rectifier output voltage.
2.  **Discharging Phase:** When the rectifier output voltage starts to fall (or goes to zero between pulses in a full-wave rectifier), the capacitor, being charged, now has a higher voltage than the rectifier output. It acts like a temporary voltage source, discharging into the load. This discharge continues until the rectifier output voltage rises again to meet or exceed the capacitor voltage.
3.  **Recharging Phase:** As soon as the rectifier output voltage rises above the capacitor voltage, the capacitor starts charging again, and the cycle repeats.

The effect of this charging and discharging is to "fill in" the valleys between the rectified pulses, significantly reducing the ripple voltage. The larger the capacitance value, the more charge it can store, and the longer it takes to discharge. Therefore, a larger capacitor generally results in better filtering (less ripple).

### Key Parameters and Calculations (A Quick Peek)

While detailed calculations are often found in textbooks like **"Basic Electronics and Linear Circuits" by Bhargava, Kulshreshtha, and Gupta**, let’s briefly touch upon what influences filter performance.

*   **Capacitance Value (C):** Measured in Farads (F) or microfarads ($\mu$F). Higher capacitance generally means better filtering.
*   **Load Resistance (R_L):** The resistance of the circuit connected to the filter output. A lower resistance (higher load current) leads to more ripple.
*   **Rectified Voltage (V_in):** The input voltage to the filter.
*   **Ripple Voltage ($\mathbf{V_r}$):** The unwanted AC component remaining after filtering. The goal of a filter is to minimize this.

A very rough approximation for the ripple voltage in a capacitor filter connected to a full-wave rectifier is often given by:

$V_r \approx \frac{V_{peak}}{4 \times f \times R_L \times C}$

Where:
*   $V_{peak}$ is the peak voltage from the rectifier.
*   $f$ is the AC supply frequency (e.g., 50 Hz or 60 Hz).
*   $R_L$ is the load resistance.
*   $C$ is the capacitance value.

This formula highlights that to reduce ripple voltage ($V_r$), we need to increase capacitance ($C$) or load resistance ($R_L$), or work with a higher frequency ($f$) supply. For our workshop, we’ll be selecting a capacitor based on the expected load and the rectifier circuit.

### Assembling the Capacitor Filter on a General Purpose PCB

Now, let's get practical. Building this on a **general-purpose PCB** (also known as a perfboard or stripboard, depending on the type) involves several steps, directly relating to **CO3** and **CO6**.

#### **1. Understanding the PCB**

A general-purpose PCB has holes drilled in a regular pattern. Depending on the type:

*   **Perfboard:** Just plain holes. You'll need to create connections using component leads or wires.
*   **Stripboard (or Veroboard):** Has copper strips connecting holes. You might need to cut these strips to isolate sections.

We’ll be using a perfboard for this exercise, which requires more deliberate wire connections.

#### **2. Circuit Diagram and Component Identification (CO4)**

Let's assume we have a full-wave bridge rectifier circuit whose output needs filtering. The filter circuit is simple:

*   **Capacitor (C):** This is our filter component. We'll select a suitable electrolytic capacitor, paying attention to its polarity (+ and - terminals).
*   **Resistor (R_L):** This will act as our load. We'll choose a value that draws a reasonable amount of current.
*   **DC Power Source:** This could be a battery or a filtered, regulated DC output from another stage, or even a rectified supply. For our demonstration, we’ll use a DC power supply.

We need to identify each component: the capacitor (often cylindrical with markings for polarity), the resistor (with color bands or numerical markings), and the connecting wires.

#### **3. Planning the Layout**

This is a critical step in **CO6**. Before you even pick up a soldering iron, you need to plan where each component will go on the PCB.

*   **Consider Component Size:** Electrolytic capacitors are usually larger than resistors.
*   **Consider Connections:** Think about how the leads will connect the components. You want short, direct connections where possible.
*   **Polarity:** Electrolytic capacitors are polarized. The negative terminal is usually marked with a stripe and/or a shorter lead. You *must* connect it correctly, or it can be damaged or even explode!
*   **Heat:** If your circuit will generate heat, place components accordingly.
*   **Test Points:** If possible, leave easy access points for testing with meters.

Imagine you have a small breadboard. You want to place the components neatly so that the circuit is easy to follow. The PCB is like a permanent, more robust version of that.

#### **4. Assembling the Circuit**

This is where we put our **CO6 (K3)** and **CO3 (K3)** skills to work.

*   **Safety First (CO1)!** Ensure the power supply is OFF. Wear safety glasses.
*   **Insert Components:** Start with the smaller components or those that sit low on the board. Push their leads through the appropriate holes.
    *   **Capacitor:** Pay *very close attention* to the polarity. The positive lead goes to the positive side of the rectified output, and the negative lead goes to the ground or negative rail.
    *   **Resistor (Load):** Connect it across the output, where the capacitor is also connected.
*   **Secure Components:** Bend the leads slightly on the underside of the PCB to keep them in place.
*   **Make Connections:** This is where the perfboard requires manual wiring. Use insulated connecting wires.
    *   Connect the positive terminal of the capacitor to the positive output of the rectifier (or your DC source).
    *   Connect the negative terminal of the capacitor to the negative output (ground) of the rectifier (or your DC source).
    *   Connect the load resistor across the capacitor (positive to positive, negative to negative).
    *   Ensure all connections are secure. Avoid loose wires.

#### **5. Soldering**

This is a skill that requires practice.

*   **Tinning:** Apply a small amount of solder to the tip of your soldering iron.
*   **Heating:** Touch the heated tip to both the component lead and the copper pad on the PCB simultaneously for a second or two.
*   **Applying Solder:** Touch the solder wire to the heated joint (not the iron tip directly). The solder should flow smoothly onto the lead and pad, forming a shiny, cone-shaped joint.
*   **Remove Solder, Then Iron:** Remove the solder wire first, then the soldering iron.
*   **Inspect:** Look for good, shiny joints. Avoid "cold solder joints" which are dull, lumpy, and can cause intermittent connections. Too much solder is also bad!

Remember **CO1** about safety: hot soldering iron, fumes. Work in a well-ventilated area.

---

### Testing and Demonstrating Functionality (CO5, CO6)

Once assembled and soldered, it's time to test! This directly engages **CO5** and solidifies our understanding for **CO6**.

#### **1. Pre-Test Checks**

*   **Visual Inspection:** Double-check all connections, especially polarity of the capacitor. Ensure no solder bridges (unintended connections) are present.
*   **Continuity Check (without power):** Use a multimeter in continuity mode to check that there are no short circuits where there shouldn't be. For instance, check that the positive and negative rails are not shorted.

#### **2. Applying Power and Measurement**

*   **Connect Power:** Carefully connect your DC power source.
*   **Measure Input Voltage:** If you have a rectified AC input (e.g., from a transformer and diodes), measure the input voltage to the filter. You'll likely see a pulsating DC waveform.
*   **Measure Output Voltage:** Now, measure the voltage across the load resistor (which is also across the capacitor).

#### **3. What to Observe**

*   **With a Simple Load (like a resistor):** You should see a much smoother DC voltage at the output compared to the input.
*   **Using an Oscilloscope (if available):** This is the best way to *see* the filtering effect.
    *   Connect the oscilloscope probe to the input of the filter (after the rectifier). You'll see the pulsating DC with a significant ripple.
    *   Connect the probe to the output of the filter. You should see a nearly flat DC line, with only a very small ripple, if any, superimposed. The difference between the input ripple and the output ripple is the effectiveness of your capacitor filter. This visual proof is excellent for demonstrating functionality.

This measurement and observation directly relate to **CO5** – selecting and operating measuring instruments.

#### **4. Demonstrating the Effect of Load Change**

You can even demonstrate how the filter performs under different load conditions:

*   **Light Load (High R_L):** You'll see very little ripple at the output.
*   **Heavy Load (Low R_L):** As the load current increases, the capacitor discharges more quickly, and the ripple voltage will increase. This is a good point to explain why sometimes larger capacitors or even multiple filter stages are needed for high-current applications.

Remember, the goal of this exercise is not just to build *a* circuit, but to build *and demonstrate the functionality* of a capacitor filter.

---

### Real-World Analogies and Examples

To make this even more concrete:

*   **Car Suspension:** Imagine the engine is producing rough power (rectified DC). The capacitor filter is like your car's suspension system. A good suspension (large capacitor) absorbs the bumps (ripple) and gives you a smooth ride (stable DC voltage). A worn-out suspension (small or faulty capacitor) means you feel every bump.
*   **Water Tank:** Think of a water pump that delivers water in bursts (rectified DC). If you connect a large tank (capacitor) to the outlet, the tank fills up during the bursts and then releases water steadily between bursts, providing a more consistent flow to your tap.

These analogies help solidify the concept: the capacitor is acting as a temporary energy reservoir to smooth out variations in the primary energy source.

### Common Pitfalls and Exam Tips

*   **Polarity:** This is the most common mistake with electrolytic capacitors. Always double-check the positive and negative markings before soldering. An incorrectly connected electrolytic capacitor can fail spectacularly.
*   **Solder Joints:** Cold solder joints are a frequent cause of circuit failure. Practice good soldering technique.
*   **Short Circuits:** Ensure no stray wires or solder splashes are bridging connections that shouldn't be connected.
*   **Component Values:** Using a capacitor that is too small will result in poor filtering. Using one that is too large might not be necessary or could even cause issues in some sensitive circuits. For exams, understanding the relationship between capacitance and ripple is key.
*   **Testing:** When asked to demonstrate functionality, being able to explain what you are measuring with a multimeter or oscilloscope and what that measurement signifies is important. For example, explaining that a lower ripple voltage at the output indicates successful filtering.

In exams, you might be asked to:
*   Draw the circuit diagram of a capacitor filter connected to a full-wave rectifier.
*   Explain the working principle of a capacitor filter.
*   Discuss the effect of capacitance value and load resistance on ripple voltage.
*   Identify the correct polarity for an electrolytic capacitor.

---

### Connecting Back to Textbooks

Our discussion on capacitor filters aligns well with concepts found in the recommended textbooks:

*   **"Basic Electronics and Linear Circuits" by Bhargava, Kulshreshtha, and Gupta:** This book will have detailed explanations of rectification and filtering, including mathematical derivations for ripple factor and efficiency. Chapter 10, for instance, typically covers rectifiers and filters extensively.
*   **"Basic Electrical Engineering" by Kothari and Nagrath:** While broader, it will cover DC power supplies and the fundamental behavior of capacitors, which are the building blocks of filters.
*   The other textbooks, **Raina & Bhattacharya** and **Giridharan**, focus more on electrical systems design and costing, which might be relevant if you were designing a larger power supply system for a building or industrial application, but for the core *electronic* component function, Bhargava is particularly relevant.

Remember the fundamental principle: capacitors oppose changes in voltage. This inherent property is what makes them effective filters.

---

### Summary

In this session, we've explored the capacitor filter, a vital component for smoothing DC voltage in electronic circuits. We've seen how it works by charging and discharging to fill in the gaps left by rectified AC, effectively reducing ripple. We’ve also walked through the practical steps of assembling it on a general-purpose PCB, emphasizing safety, component identification, layout planning, and soldering techniques. Crucially, we've discussed how to test and demonstrate its functionality using measuring instruments, directly linking this practical task to several key Course Outcomes.

This hands-on experience is invaluable. It bridges the gap between theory and practice, teaching you not just *what* a capacitor filter does, but also *how* to build and verify it. Keep practicing these skills, and always prioritize safety!

---

## Sample Questions with Answers

**Q1. What is the primary function of a capacitor filter in a DC power supply?**

**Answer:** The primary function of a capacitor filter is to smooth out the pulsating DC voltage obtained from a rectifier, reducing the unwanted AC ripple component and providing a more stable DC output voltage suitable for sensitive electronic circuits. It acts like a reservoir, storing charge when the voltage is high and releasing it when the voltage drops, thereby filling in the "valleys" of the waveform.

**Q2. An electrolytic capacitor is marked with a '+' sign on one side. Where should this terminal be connected in a typical capacitor filter circuit connected after a full-wave rectifier?**

**Answer:** The '+' terminal of an electrolytic capacitor is its positive terminal. In a capacitor filter circuit connected after a full-wave rectifier, this positive terminal should be connected to the positive DC output of the rectifier. The negative terminal (often marked with a stripe, '-' sign, or shorter lead) should be connected to the common ground or negative rail. Incorrect polarity can damage the capacitor.

**Q3. If you observe a significant ripple voltage at the output of your assembled capacitor filter, what are the two most likely component-related issues you would investigate first?**

**Answer:**
1.  **Capacitor Polarity:** The most common error is connecting the electrolytic capacitor with reversed polarity. This can lead to poor filtering or even damage to the capacitor.
2.  **Capacitor Value:** The selected capacitor might have a capacitance value that is too low for the load current, resulting in insufficient filtering and higher ripple voltage.
Additionally, one would also check for poor solder joints or unintended short circuits.

**Q4. You are testing your assembled capacitor filter using an oscilloscope. You measure the input voltage to the filter and see a waveform with a peak-to-peak ripple of 5V. After connecting the capacitor filter, you measure the output voltage and see a ripple of only 500mV peak-to-peak. What does this measurement tell you about the performance of your filter?**

**Answer:** This measurement indicates that the capacitor filter has significantly reduced the ripple voltage. The ripple has been reduced from 5V peak-to-peak to 500mV peak-to-peak, which is a reduction by a factor of 10. This demonstrates that the filter is functioning effectively in smoothing the DC output. It implies that the chosen capacitor value is appropriate for the load and that the circuit is assembled correctly.

**Q5. Explain the relationship between load resistance ($R_L$) and ripple voltage ($V_r$) in a capacitor filter. How does this affect the design choice of the capacitor?**

**Answer:** In a capacitor filter, the ripple voltage ($V_r$) is inversely proportional to the load resistance ($R_L$). This means that as the load resistance decreases (i.e., the load draws more current), the ripple voltage increases. Conversely, as the load resistance increases (load draws less current), the ripple voltage decreases.

This relationship is important for design: if the circuit is intended to operate with a heavy load (low $R_L$), a larger capacitor value ($C$) will be required to maintain an acceptable level of ripple voltage. A larger capacitor can store more charge, which helps to keep the voltage more stable during the periods when the rectifier is not supplying current, especially under heavy load conditions. Conversely, for a light load (high $R_L$), a smaller capacitor might suffice.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
