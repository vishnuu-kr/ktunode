---
title: "Printed circuit boards (PCB) - Types, Single sided, Double sided, PTH, Processing methods."
subject: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP"
module: "Module 13: Printed circuit boards (PCB) "
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213d9ece2bdd875f939b"
status: "completed"
scrapedAt: "2026-05-23T16:00:51.954Z"
---
Welcome, future engineers! Today, we embark on a fascinating journey into the heart of modern electronics: Printed Circuit Boards, or PCBs. Think about every electronic gadget you use – your smartphone, your laptop, even the humble LED bulb. What holds all those tiny components together and allows them to talk to each other? It’s the PCB! Module 13 is all about understanding these crucial components.

Our goal here is to demystify PCBs, from their basic types to how they're actually made. By the end of this session, you’ll understand what makes PCBs tick and how we, as engineers, design and fabricate them. This is directly linked to **Course Outcome 6 (CO6)**, where you’ll be applying the design procedure of simple electronic circuits on breadboard and PCB. We’re building the foundation for that hands-on experience.

---

## Module 13: Printed Circuit Boards (PCBs) - The Backbone of Electronics

### What Exactly is a Printed Circuit Board?

Let's start with the basics. A Printed Circuit Board, or PCB, is essentially a **non-conductive substrate** (usually a fiberglass material like FR-4) onto which **conductive pathways**, called **traces**, are etched. These traces are typically made of copper. Electronic components, like resistors, capacitors, integrated circuits (ICs), and connectors, are then soldered onto these pads, which are connected to the traces.

Think of it like a city map. The fiberglass board is the land, the copper traces are the roads, and the components are the buildings. The roads (traces) connect the buildings (components) and allow for the flow of electricity (traffic) between them, making the entire city (circuit) function.

The key advantages of using PCBs over traditional methods (like point-to-point wiring with individual wires) are:

*   **Miniaturization:** Components can be placed very close together, leading to smaller and more compact devices.
*   **Reliability:** Connections are permanent and well-defined, reducing the chances of loose connections and circuit failures.
*   **Cost-Effectiveness:** Mass production of PCBs is highly efficient, making electronic devices more affordable.
*   **Ease of Assembly and Troubleshooting:** Components are systematically laid out, simplifying assembly and making it easier to identify and fix faults.

This understanding of component placement and interconnection is vital for **CO6**, as it informs how we design our circuits for efficient assembly.

### Types of Printed Circuit Boards

PCBs aren't all the same; they come in various types based on their construction and complexity. The main categories we'll focus on are single-sided and double-sided PCBs.

#### 1. Single-Sided PCBs

This is the simplest and most basic type of PCB.

*   **Construction:** As the name suggests, a single-sided PCB has conductive copper traces on **only one side** of the insulating substrate. The components are typically mounted on the other side, and their leads are soldered to the copper pads on the component side.
*   **Where you'll see them:** You'll find these in simpler, less complex electronic devices where space and density are not major concerns. Think of basic LED lighting circuits, simple power adapters, or older consumer electronics like basic calculators.
*   **Analogy:** Imagine a single-lane road. It gets the job done for light traffic, but it's not ideal if you have a lot of vehicles or need to go in opposite directions simultaneously.

**Why are they important?** They represent the entry-level of PCB technology. Understanding them helps grasp the fundamental concept of conductive pathways. This is a good starting point for learning circuit layout, which directly relates to **CO6**.

#### 2. Double-Sided PCBs

These are much more common in modern electronics and offer significantly more design flexibility.

*   **Construction:** In a double-sided PCB, copper traces are present on **both the top and bottom surfaces** of the insulating substrate. This allows for more complex interconnections and a higher component density.
*   **How they work:** Components are usually mounted on one side (often the top), and their leads are soldered to pads. However, the traces on both sides can be interconnected using **vias**.
*   **What are Vias?** Vias are small holes that are plated with conductive material. They act like tunnels, allowing traces on one side of the board to connect to traces on the other side. This is a critical concept!
*   **Where you'll see them:** Almost everywhere! Your smartphone, computer motherboards, gaming consoles, more advanced power supplies – they all utilize double-sided PCBs to pack more functionality into smaller spaces.
*   **Analogy:** Now, think of a two-lane highway. You can have traffic flowing in both directions, and by building overpasses or underpasses (which are like our vias), you can connect different routes efficiently. This allows for more complex traffic management, just like double-sided PCBs allow for more complex circuits.

**Why are they important?** Double-sided PCBs are the workhorse of the electronics industry. They provide the density and flexibility needed for most modern circuits. Learning to route traces on both sides is a fundamental skill for PCB design and directly supports **CO6**.

### Through-Hole Technology (THT) vs. Surface Mount Technology (SMT) – A Quick Mention

While we're focusing on the PCB types, it’s worth briefly mentioning how components are attached.

*   **Through-Hole Technology (THT):** The component leads are inserted through holes drilled in the PCB and soldered on the opposite side. This is what you often see with older, larger components, or when a very strong mechanical connection is needed.
*   **Surface Mount Technology (SMT):** Components are mounted directly onto the surface of the PCB, and their leads are soldered to pads on the same surface. This is much more common today due to its efficiency and suitability for automation.

Most double-sided PCBs, especially, are designed with SMT components in mind, allowing for components on both sides and dense packing.

### Printed Circuit Board Processing Methods: How They Are Made

So, we’ve got our design and our components. How does a blank board become a functional circuit? The fabrication of PCBs involves several key steps. These processes are highly industrialized, but understanding the principles is essential for engineers.

#### **1. Design and Layout**

*   This is the first, and arguably most crucial, step. Using specialized software (like Altium Designer, Eagle, KiCad), engineers create the schematic (the circuit diagram) and then the PCB layout. This involves placing components and routing the copper traces to connect them according to the schematic.
*   **Connection to CO6:** This is the direct application of circuit design principles onto a physical medium. You choose component placement and trace routing for optimal performance and manufacturability.

#### **2. Material Preparation**

*   The starting material is typically a **laminate**, which is a thin sheet of fiberglass (like FR-4) bonded with epoxy resin. This is then clad on one or both sides with a thin layer of copper foil.
*   **Remember this:** The quality of the base material (FR-4) and the copper thickness are important specifications that affect the PCB's performance and cost.

#### **3. Creating the Circuit Pattern (Etching)**

This is where the magic happens – turning a copper-clad board into a board with intricate traces.

*   **Photoresist Application:** The copper surface is coated with a light-sensitive material called **photoresist**.
*   **Exposure:** A high-resolution film (called a **phototool** or **mask**) containing the desired circuit pattern is placed over the photoresist. The board is then exposed to UV light. The light hardens the photoresist in the areas that will become the traces. The areas that are *not* protected by the photoresist will be etched away.
*   **Developing:** The board is washed, and the unhardened photoresist is removed, exposing the copper underneath it.
*   **Etching:** The board is immersed in a chemical solution (typically ferric chloride or ammonium persulfate) that dissolves the exposed copper. The hardened photoresist protects the copper that forms the desired traces and pads.
*   **Stripping:** Finally, the remaining hardened photoresist is removed, leaving the copper traces on the board.

*   **Analogy:** Imagine you have a chocolate bar covered in foil, and you want to draw a pattern on it with a marker. You draw the pattern on the foil, then dip the whole bar in a special solution that dissolves the foil *except* where your marker is. Then you scrape off the marker. It’s a bit like that, but with chemicals and light!

**This etching process is fundamental to creating the conductive pathways we discussed. It's a key aspect of how a PCB is formed and directly impacts the circuit's functionality.**

#### **4. Drilling**

*   For double-sided PCBs, and for THT components, holes need to be drilled through the board. These holes are precisely located according to the design.
*   **Plating:** After drilling, these holes are coated internally with a thin layer of copper. This process is called **electroless copper plating** and then **electroplating**. This plating connects the traces on different layers of the board, creating the **vias**.
*   **Importance of Vias:** These plated through-holes are what allow signals to travel between the top and bottom layers of a double-sided PCB. Without them, you'd be severely limited in how you could route traces.

#### **5. Soldermask Application**

*   After etching and drilling, the entire board is coated with a protective layer called **soldermask**. This is typically a green, blue, or red epoxy material.
*   **Purpose of Soldermask:**
    *   **Prevents Solder Bridges:** It covers all the copper traces except for the pads where components will be soldered. This prevents solder from flowing and creating unwanted connections (solder bridges) between adjacent traces or pads during the soldering process.
    *   **Protection:** It protects the copper traces from oxidation, moisture, and physical damage.
*   **Example:** Think of it like painting a road network on a map. You paint the roads themselves, but you leave the areas between the roads unpainted. The soldermask does the same for our copper traces.

#### **6. Silkscreen Printing**

*   The final visible layer is the silkscreen. This is a layer of white or black ink printed onto the soldermask.
*   **Purpose of Silkscreen:** It displays component designators (like R1, C2, U1), polarity markings (+, -), pin numbers, company logos, and other helpful information for assembly and troubleshooting.
*   **Example:** It's like the labels and street signs on our city map, telling you what building is where and how to navigate.

#### **7. Finishing and Testing**

*   **Surface Finish:** The exposed copper pads might be treated with a surface finish (like HASL - Hot Air Solder Leveling, ENIG - Electroless Nickel Immersion Gold) to prevent oxidation and improve solderability.
*   **Electrical Testing:** The fabricated PCBs are then electrically tested using automated testers to ensure that all connections are correct and there are no short circuits or open circuits.

**This entire process, from design to testing, ensures that the PCB is a reliable platform for our electronic circuits. Understanding these steps is crucial for anyone aiming to master circuit board design and fabrication, directly supporting CO6.**

---

### Connecting to Course Outcomes

Let's quickly recap how this topic directly relates to our Course Outcomes:

*   **CO1: Demonstrate safety measures against electrical shocks:** While not directly about PCB fabrication steps, understanding how complex circuits are built on PCBs helps appreciate the potential hazards of handling energized circuits. Proper grounding and insulation, often built into PCB designs, are crucial for safety.
*   **CO2: Familiarise with transformers, rheostats, batteries and earthing schemes:** PCBs are the platforms where these components (and many others) are mounted and interconnected. Understanding PCB types helps visualize how these essential elements are integrated into larger systems.
*   **CO3: Illustrate the connection diagram and identify the suitable accessories necessary for wiring simple electric circuits:** PCB design is the ultimate realization of a connection diagram. The traces *are* the wiring, and the pads are where components connect.
*   **CO4: Identify various electronic components:** As we’ve seen, PCBs are designed to hold specific components. Understanding PCB layout often involves knowing the physical characteristics and pinouts of various components.
*   **CO5: Operate various measuring instruments:** When troubleshooting a circuit on a PCB, you'll use instruments like multimeters and oscilloscopes to measure voltages and currents at specific points (pads or test points) on the board.
*   **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB:** This is our primary outcome for this module. We learn what a PCB is, its types, and how it's made, so we can then design and potentially fabricate our own simple circuits on them. This module provides the foundational knowledge for that application.
*   **CO7: Build the ability to work in a team with good interpersonal skills:** PCB design and fabrication are often team efforts. Collaborating on a project involves clear communication, sharing designs, and coordinating tasks, all of which are enhanced by understanding the entire process.

---

### Exam Focus Points and Quick Recall

*   **Key Terms:** Single-sided, Double-sided, Vias, Traces, Pads, Soldermask, Silkscreen, Photoresist, Etching.
*   **Distinguishing Features:** What's the main difference between single-sided and double-sided PCBs? (Number of conductive layers).
*   **Function of Vias:** Crucial for interconnecting layers in double-sided PCBs.
*   **Purpose of Soldermask:** Prevents solder bridges and protects traces.
*   **Purpose of Silkscreen:** Provides information for assembly and troubleshooting.
*   **Etching Process:** Understand the role of photoresist and the chemical removal of copper.
*   **Common Question Type:** "Explain the fabrication process of a double-sided PCB." or "What are the functions of soldermask and silkscreen on a PCB?"

---

### Sample Questions and Answers

**Q1. What is the primary advantage of using a double-sided PCB over a single-sided PCB?**

**Answer:** The primary advantage of a double-sided PCB is its ability to have conductive traces on both sides of the substrate. This allows for more complex interconnections, higher component density, and more efficient routing of signals, enabling smaller and more feature-rich electronic devices. The use of vias to connect the two layers is key to this increased flexibility.

**Q2. Explain the role of 'vias' in a double-sided PCB.**

**Answer:** Vias are small, plated-through holes that electrically connect traces on different layers of a PCB. In a double-sided PCB, they act as bridges, allowing a trace on the top layer to connect to a trace on the bottom layer, or vice-versa. This is essential for routing signals efficiently and creating complex circuit layouts that wouldn't be possible with only one layer of conductors.

**Q3. Describe the main purpose of the soldermask layer on a PCB.**

**Answer:** The soldermask is a protective coating, typically green or blue, applied over the copper traces of a PCB. Its main purposes are:
1.  **Preventing solder bridges:** It covers all copper areas except the pads where components are to be soldered, preventing solder from flowing between adjacent traces or pads during the assembly process.
2.  **Protecting copper:** It shields the copper traces from oxidation, moisture, and environmental contaminants, ensuring long-term reliability.

**Q4. Imagine you're designing a simple LED circuit that needs to be mounted on a PCB. What type of PCB would be most appropriate for a basic, cost-effective solution, and why?**

**Answer:** For a simple, cost-effective LED circuit, a **single-sided PCB** would be most appropriate. This is because the circuit is likely to be uncomplicated, requiring only one layer of copper traces to connect the LED, resistor, and power source. Single-sided PCBs are the least expensive and simplest to manufacture, making them ideal for basic applications where space and circuit density are not primary concerns.

**Q5. Briefly outline the critical steps in etching the copper traces on a PCB.**

**Answer:** The critical steps in etching a PCB involve:
1.  **Applying photoresist:** Coating the copper-clad board with a light-sensitive chemical.
2.  **Exposure:** Using a mask (phototool) with the circuit pattern and UV light to harden the photoresist in the areas that will become traces.
3.  **Developing:** Washing away the unhardened photoresist.
4.  **Etching:** Using a chemical solution to remove the exposed copper, leaving only the protected trace patterns.
5.  **Stripping:** Removing the remaining hardened photoresist to reveal the final copper traces.

---

And that, ladies and gentlemen, is our introduction to the world of Printed Circuit Boards! Remember, PCBs are the unsung heroes of our electronic devices, and understanding their construction and types is a fundamental step in becoming a proficient electrical and electronics engineer. Keep these concepts in mind as we move forward!
