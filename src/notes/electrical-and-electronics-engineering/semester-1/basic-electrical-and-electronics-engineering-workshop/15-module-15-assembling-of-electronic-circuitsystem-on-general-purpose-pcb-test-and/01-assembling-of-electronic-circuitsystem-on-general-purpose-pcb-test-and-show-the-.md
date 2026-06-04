---
title: "Assembling of electronic circuit/system on general purpose PCB, test and show the functioning (Any two)-"
subject: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP"
module: "Module 15: Assembling of electronic circuit/system on general purpose PCB, test and show the functioning (Any two)"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213d9ece2bdd875f93a0"
status: "completed"
scrapedAt: "2026-05-23T16:00:56.375Z"
---
## Module 15: Assembling Electronic Circuits on General Purpose PCBs

Welcome, everyone, to Module 15 of our Basic Electrical and Electronics Engineering Workshop! Today, we're going to dive into a really exciting and practical part of electronics: actually *building* circuits. We've spent time understanding components, how circuits work, and how to measure things, but now it’s time to get our hands dirty and bring those designs to life.

Our main goal in this module is to learn how to assemble an electronic circuit or system on a **General Purpose PCB (Printed Circuit Board)**, and then thoroughly test it to ensure it's functioning as intended. We'll be focusing on the process for **any two** circuits, meaning the principles we learn are transferable to a wide range of projects.

### Connecting to Our Course Objectives

Before we jump into the 'how-to', let's see how this module directly links to what we've been learning throughout the course:

*   **CO1: Demonstrate safety measures against electrical shocks (Knowledge Level: K2)**: While assembling, especially when testing, safety is paramount. We’ll be reminded of proper handling of tools and power sources, reinforcing our understanding of electrical safety. Think about it like driving – you learn the rules of the road (safety) before you start the engine.
*   **CO2: Familiarise with transformers, rheostats, batteries and earthing schemes (Knowledge Level: K2)**: Depending on the circuit we choose, we might need to power it using a battery or a small power supply unit that might involve a transformer. Proper earthing is always a good practice, even in low-voltage circuits, to prevent static discharge.
*   **CO3: Illustrate the connection diagram and identify the suitable accessories necessary for wiring simple electric circuits (Knowledge Level: K3)**: This is central to our task! We’ll be working with connection diagrams, and selecting the right wires, connectors, and mounting hardware are all part of identifying necessary accessories.
*   **CO4: Identify various electronic components (Knowledge Level: K2)**: You already know your resistors from your capacitors, but now you'll be identifying them in their physical form on the PCB and distinguishing them based on their markings and package sizes.
*   **CO5: Operate various measuring instruments (Knowledge Level: K3)**: Testing is a crucial part of this module. We’ll be using multimeters, oscilloscopes (if available), and signal generators to verify our circuit's performance. This is where your understanding of measurement tools really comes into play.
*   **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB (Knowledge Level: K3)**: We’ve likely dabbled with breadboards already. Now, we’re taking that design and making it more permanent and robust on a PCB. This is a direct application of design principles.
*   **CO7: Build the ability to work in a team with good interpersonal skills (Knowledge Level: K3)**: Often, workshop tasks are done in pairs or small groups. This module is a fantastic opportunity to collaborate, share tasks, and communicate effectively with your peers.

So, you see, this module isn't just about soldering; it's about consolidating many of the foundational skills you've acquired.

### What is a General Purpose PCB?

Before we start building, let's clarify what a **General Purpose PCB**, often called a **Perfboard** or **Vero Board**, actually is. Unlike professionally designed PCBs that have pre-etched copper traces for specific circuits, a general purpose PCB is a board with a grid of holes, often with copper pads around them.

*   **Analogy:** Think of it like a very organized pegboard or a grid paper with holes. You have a blank canvas, and you use wires and solder to create the connections between components, much like you'd use wires to connect components on a breadboard, but in a more permanent way.
*   **Types:** You'll typically encounter two main types:
    *   **Stripboard (Vero Board):** This board has continuous copper strips running between rows of holes. You often have to "break" these strips with a cutting tool (like a track cutter or a small drill bit) to isolate sections where you don't want connections. This requires careful planning to avoid accidental shorts.
    *   **Pad-per-hole boards (Perfboards):** Each hole has its own separate copper pad. You have to create all connections using wire links (jumper wires). This offers more flexibility but can sometimes lead to a messier layout if not done neatly.

The beauty of these boards is their versatility. They are excellent for prototyping and for hobbyist projects where a custom PCB isn't economically viable or necessary.

### The Process: From Component to Working Circuit

Building a circuit on a general purpose PCB involves several key stages:

1.  **Circuit Selection and Understanding:** Choosing the circuit is the first step. It should be simple enough for a workshop environment but complex enough to demonstrate the assembly process. Think of circuits like a simple LED flasher, a basic audio amplifier, or a voltage regulator circuit.
2.  **Component Identification and Preparation:** Gathering all the necessary components, checking their values, and ensuring they are in good working order.
3.  **Layout Planning:** Deciding where each component will sit on the PCB. This is crucial for a clean build and easy troubleshooting.
4.  **Assembly (Soldering):** The core of the process – attaching components and making electrical connections.
5.  **Testing and Troubleshooting:** Verifying the circuit's functionality and fixing any issues.

Let's break these down further.

#### 1. Circuit Selection and Understanding

For this workshop, you'll likely be given a choice of a couple of circuits. Let's imagine we're choosing to build a simple **LED Flasher Circuit** using a 555 timer IC.

*   **Why this circuit?** It's a classic introductory circuit that demonstrates the use of an integrated circuit (IC), resistors, capacitors, and an LED. It’s visually satisfying as the LED blinks!
*   **Understanding the Circuit:** Before you even touch a component, you need to understand the schematic diagram.
    *   What are the roles of the resistors? (e.g., setting timing, limiting current).
    *   What do the capacitors do? (e.g., filtering, timing).
    *   How is the 555 timer configured? (e.g., astable mode for oscillation).
    *   Where does the power go? Where does the output appear?
*   **Reference:** Your textbooks like **Basic Electronics and Linear Circuits by Bhargava, Kulshreshtha, and Gupta** will have detailed explanations of how ICs like the 555 timer work. This is your go-to for understanding the theory behind the circuit you're building.

#### 2. Component Identification and Preparation

Once you have your schematic, you need your components.

*   **Resistors:** You'll recognize them by their color bands. Remember your Ohm's Law and how to read resistor color codes. A common pitfall in exams is misreading these!
*   **Capacitors:** Electrolytic capacitors have polarity (positive and negative terminals) indicated by a stripe or a longer lead. Ceramic capacitors are usually non-polarized.
*   **LEDs:** Also polarized, with a longer lead typically being the anode (positive) and a shorter lead the cathode (negative). The flat side of the LED's plastic casing usually indicates the cathode.
*   **ICs (Integrated Circuits):** Like the 555 timer. These have a specific pin numbering system, usually indicated by a notch or a dot on the IC. You *must* orient these correctly. Plugging one in backwards is a common way to damage it.
*   **Wires:** For making connections (jumper wires or solid core wire).
*   **Tools:** Soldering iron, solder, desoldering braid/pump, wire cutters/strippers, pliers, multimeter, safety glasses.

**Safety First (CO1)!** Always wear safety glasses when soldering. The hot tip of the soldering iron and flying bits of solder are no joke. Keep your workspace tidy to avoid knocking things over or creating shorts. Never touch the hot soldering iron tip.

#### 3. Layout Planning: The Art of Placement

This is where you translate the schematic onto the physical PCB. Good planning makes assembly and troubleshooting much easier.

*   **Think about the flow:** Try to lay out components so that connections follow a logical path.
*   **Component Orientation:**
    *   **ICs:** Place them so the pin numbers are easy to read and connect to. Ensure the notch/dot is in the correct orientation as per the schematic.
    *   **Polarized Components (Capacitors, LEDs, Diodes):** Mark the polarity on the PCB side if it's not obvious, and ensure they are placed according to the schematic.
    *   **Resistors:** Can generally be placed in any orientation on perfboards, but on stripboards, their placement might be dictated by the copper strips.
*   **Component Height:** Place taller components (like capacitors or inductors, if used) so they don't obstruct smaller ones.
*   **Heat Dissipation:** If any component is expected to get warm (like voltage regulators), ensure it has some space around it.
*   **Wire Routing:** Plan where your jumper wires will go. Keep them short and neat. Avoid crossing wires unnecessarily.
*   **Breaking Strips (for Stripboards):** Identify which copper strips need to be cut to isolate components or create specific connections. Mark these areas on your layout.

*   **Example:** For our LED flasher, we might place the 555 timer near the center, with resistors and capacitors surrounding it, and the LED positioned where its light can be seen easily.

#### 4. Assembly: The Soldering Process

This is the hands-on part. Soldering is a skill that improves with practice.

**The Soldering Process (Step-by-Step):**

1.  **Prepare the Work Area:** Ensure good ventilation and clear space. Have all your components, PCB, soldering iron, solder, and tools ready.
2.  **Insert Components:** Carefully push the component leads through the appropriate holes on the PCB. Ensure they are seated properly. For ICs, insert them with the correct orientation.
3.  **Bend Leads (Optional but Recommended):** Gently bend the leads of components slightly outwards on the underside of the PCB. This helps hold them in place before soldering.
4.  **Solder One Lead First:** For components like resistors or capacitors, solder just one lead initially. This allows you to adjust the component's position before making the final connection.
5.  **Heat the Joint:** Touch the soldering iron tip to *both* the component lead *and* the copper pad on the PCB simultaneously.
6.  **Apply Solder:** Feed the solder wire to the heated joint. The solder should melt and flow smoothly, creating a shiny, cone-shaped connection that covers both the lead and the pad. **Remember this:** A good solder joint looks like a tiny silver volcano or a shiny drop.
7.  **Remove Solder and Iron:** Remove the solder wire first, then the soldering iron. Hold the component in place for a few seconds as the solder cools and solidifies.
8.  **Trim Excess Leads:** Once the solder joint has cooled, use wire cutters to trim off the excess component lead sticking out from the solder joint. Be careful not to disturb the joint itself.
9.  **Repeat for All Components:** Continue this process for all components, following your planned layout.
10. **Make Wire Links:** For connections not made by component leads or PCB traces, use short pieces of wire. Strip a small amount of insulation from each end, insert into the holes, and solder them just like component leads.

**Common Soldering Mistakes and How to Avoid Them:**

*   **Cold Solder Joints:** These look dull, lumpy, and crystalline. They are caused by not heating the joint properly or moving the joint while the solder is cooling. Result: intermittent connections or no connection at all. **Solution:** Ensure the iron is hot enough, heat both surfaces, and apply solder to the joint, not the iron.
*   **Solder Bridges (Shorts):** When solder accidentally connects two adjacent pads or component leads that shouldn't be connected. This is common with closely spaced components or IC pins. **Solution:** Use the right amount of solder. If a bridge occurs, use desoldering braid or a desoldering pump to remove the excess solder while reheating the joint.
*   **Overheating:** Holding the soldering iron on the joint for too long can damage components, especially sensitive semiconductors or ICs. **Solution:** Be quick and efficient. Heat the joint, apply solder, and remove.

**Textbook Connection:** While textbooks like **Electrical Design Estimating and Costing by Raina and Bhattacharya** might focus more on larger-scale electrical installations, the fundamental principles of making good connections are universal. The care and precision needed in workshop soldering mirror the need for reliable connections in any electrical system.

#### 5. Testing and Troubleshooting

This is where you see if your hard work paid off!

**Testing Procedures:**

1.  **Visual Inspection:** Before applying power, meticulously check your PCB for:
    *   Correct component orientation (ICs, electrolytic capacitors, LEDs).
    *   Solder bridges (shorts).
    *   Cold solder joints.
    *   Any loose wires or components.
    *   Any damage to the PCB traces or pads.
2.  **Continuity Testing (CO5):** With the circuit *unpowered*, use your multimeter in continuity mode (beeper mode) to:
    *   Check for unexpected shorts between power and ground rails, or between different signal lines.
    *   Verify connections between components that are supposed to be connected. For example, check if the resistor lead is indeed connected to the IC pin it's supposed to be.
    *   **Important:** If you used stripboard, check that you have broken the copper strips where planned.
3.  **Power-Up Test:**
    *   Connect the power supply (battery or adapter). Start with the lowest possible voltage if your circuit allows.
    *   Observe the circuit's behavior. For our LED flasher, the LED should start blinking!
4.  **Measurement (CO5):** Use your multimeter to check:
    *   Supply voltage at various points. Is it stable?
    *   Output voltage or current.
    *   If you have an oscilloscope, you can observe waveforms at different points to confirm the circuit is oscillating as expected.

**Troubleshooting Common Problems:**

*   **Nothing Happens:**
    *   Check power supply connections.
    *   Check the main power input to the circuit.
    *   Re-inspect for shorts or open circuits.
    *   Is the IC inserted correctly?
    *   Is the polarity of components correct?
*   **Circuit Behaves Erratically:**
    *   Look for intermittent connections (cold solder joints).
    *   Check for stray capacitance or inductance (can happen with long wires).
    *   Are the component values correct?
*   **LED Doesn't Light Up (for the flasher):**
    *   Check LED polarity.
    *   Check current-limiting resistor value.
    *   Check if the 555 timer is oscillating.

**The Importance of Documentation:** Keep your schematic and your layout plan handy. When troubleshooting, you can compare your physical circuit against these diagrams.

**Exam Tip:** In exams, you might be asked to identify common faults on a picture of a PCB or describe troubleshooting steps for a given faulty circuit. Understanding these common issues is key.

### Example Circuit: Simple LED Flasher (using 555 Timer)

Let's briefly touch upon what this circuit might look like on a perfboard.

**Components:**

*   1 x 555 Timer IC
*   2 x Resistors (e.g., 10kΩ and 1kΩ for timing)
*   2 x Capacitors (e.g., 10µF electrolytic and 0.01µF ceramic)
*   1 x LED
*   1 x Power Source (e.g., 9V battery)
*   Connecting wires

**Basic Idea:** The 555 timer in astable mode will generate a continuous square wave. This wave will switch the LED on and off. The frequency of blinking is determined by the values of the resistors and the capacitor.

*   **Understanding the Connections (CO3):** Pin 8 and 4 of the 555 timer go to Vcc (+ve supply). Pin 1 goes to Ground (0V). Pin 3 is the output, which drives the LED. Pins 2 and 7 are connected to the timing resistors and capacitors, creating the oscillation. Pin 5 is often connected to ground via a small capacitor for noise reduction.

### Teamwork and Skills Development (CO7)

Remember, this workshop is also about developing your ability to work with others.

*   **Communication:** Clearly explain your ideas and listen to your teammates.
*   **Task Delegation:** Divide tasks based on strengths and interests. One person might be good at soldering, another at planning the layout.
*   **Shared Responsibility:** Everyone is responsible for the success of the project. Help each other out when someone is stuck.
*   **Problem Solving:** When issues arise, brainstorm solutions together.

This collaborative approach is invaluable in any engineering field.

### Summary and Key Takeaways

*   **General Purpose PCBs** are versatile platforms for building electronic circuits by manually creating connections.
*   **Key Stages:** Circuit understanding, component prep, layout planning, assembly (soldering), and testing.
*   **Safety (CO1)** is paramount throughout the process. Always wear safety glasses.
*   **Soldering Technique:** Aim for shiny, cone-shaped joints. Avoid cold joints and bridges.
*   **Testing:** A thorough visual inspection followed by continuity and power-up tests is essential.
*   **Troubleshooting:** Systematic checking against the schematic is key to identifying faults.
*   **Teamwork (CO7)** is encouraged and enhances the learning experience.

By the end of this module, you should feel confident in taking a circuit diagram and bringing it to life on a PCB, and most importantly, knowing how to verify that it works correctly. This is a fundamental skill for any electronics enthusiast or engineer!

---

### Sample Questions with Answers

**Q1. What is the primary difference between a General Purpose PCB (Perfboard) and a custom-designed PCB?**

**Answer:**
A **custom-designed PCB** has pre-etched copper traces that form the circuit pathways, specifically designed for a particular circuit. In contrast, a **General Purpose PCB (Perfboard or Stripboard)** provides a grid of holes or pre-made copper strips, onto which the user manually creates the circuit connections using soldering and jumper wires. The perfboard offers more flexibility for prototyping, while custom PCBs are used for mass production and optimized designs.

**Q2. You have just soldered a resistor onto a perfboard. It looks dull and slightly lumpy. What is this likely to be, and what are the potential consequences? (Relates to CO1, CO6)**

**Answer:**
This description strongly suggests a **cold solder joint**.
**Consequences:** A cold solder joint has poor electrical conductivity. This can lead to:
1.  **Intermittent operation:** The circuit might work sometimes and fail others, depending on vibrations or temperature changes.
2.  **Complete failure:** The connection might be so poor that the circuit doesn't work at all.
3.  **Difficulty in troubleshooting:** It's often hard to spot visually and requires careful re-soldering.

**Q3. When assembling a circuit on a stripboard, you notice that two components intended to be isolated are connected by an unintended copper strip. What is the specific action you need to take to correct this, and what tool is commonly used? (Relates to CO3, CO6)**

**Answer:**
You need to **break the copper strip** at the point where the unwanted connection occurs. This is done to isolate the sections of the stripboard so that components or pads do not short circuit.
A common tool used for this is a **track cutter** or a small drill bit (e.g., a 1mm drill bit) used carefully to remove a section of the copper strip.

**Q4. You are about to power up a circuit you have assembled. What are the two most important checks you should perform *before* applying power, and why? (Relates to CO1, CO5)**

**Answer:**
The two most important checks before applying power are:
1.  **Visual Inspection:** This involves carefully looking over the entire PCB for any obvious errors such as:
    *   **Incorrect component orientation:** Especially for polarized components like ICs, electrolytic capacitors, and diodes/LEDs. If they are reversed, they can be damaged or cause the circuit to malfunction.
    *   **Solder bridges (shorts):** Accidental connections between adjacent pins or pads. These can cause a direct short circuit, potentially damaging components or the power supply.
    *   **Loose connections:** Components or wires that are not properly soldered might detach, causing an open circuit.
    *   **Any obvious damage** to components or the PCB itself.
    **Why:** This is a quick way to catch major errors that could lead to circuit damage or safety hazards upon power-up.

2.  **Continuity Testing (using a multimeter):** With the power *off*, use the multimeter in continuity mode to check for:
    *   **Short circuits:** Specifically, check for continuity between the positive power rail and ground, or between different signal lines that should be isolated. This confirms there are no unintended connections created by solder bridges.
    *   **Expected connections:** You can also verify that key components are indeed connected as per the schematic (e.g., IC power pins to the power rail).
    **Why:** This systematically verifies the electrical integrity of your wiring and helps ensure there are no hidden shorts that the visual inspection might miss, preventing potential damage to components or the power source when power is applied.

**Q5. Describe the proper technique for soldering a component lead to a PCB pad, ensuring a good electrical connection. (Relates to CO6)**

**Answer:**
The proper soldering technique involves the following steps:
1.  **Heat the Joint:** Place the tip of the preheated soldering iron so it simultaneously touches *both* the component lead and the copper pad on the PCB. The goal is to heat both surfaces evenly.
2.  **Apply Solder to the Joint:** Feed the solder wire to the heated junction of the component lead and the PCB pad. Do not apply solder to the soldering iron tip directly and then drip it onto the joint.
3.  **Melt and Flow:** The solder should melt instantly upon contact with the heated joint and flow smoothly, wetting both the lead and the pad. It should form a shiny, conical, or "volcano-shaped" fillet that encapsulates the lead and covers the pad.
4.  **Remove Solder, Then Iron:** Remove the solder wire first, followed immediately by the soldering iron.
5.  **Cooling:** Hold the component steady for a few seconds as the solder cools and solidifies.

A good solder joint will be shiny, smooth, and form a strong mechanical and electrical bond. Avoid dull, lumpy (cold joint), or excessively large (excess solder) joints.
