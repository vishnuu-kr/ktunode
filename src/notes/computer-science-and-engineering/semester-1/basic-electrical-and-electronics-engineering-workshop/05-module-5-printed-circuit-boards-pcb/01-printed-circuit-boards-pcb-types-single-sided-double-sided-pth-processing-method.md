---
title: "Printed circuit boards (PCB) - Types, Single sided, Double sided, PTH, Processing methods."
subject: "BASIC ELECTRICAL AND ELECTRONICS  ENGINEERING WORKSHOP"
module: "Module 5: Printed circuit boards (PCB) "
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5cd3"
status: "completed"
scrapedAt: "2026-05-20T16:36:49.495Z"
---
Absolutely! Let's dive into the fascinating world of Printed Circuit Boards (PCBs). Get ready for a journey that will solidify your understanding of how electronic circuits are built and why PCBs are so crucial in our modern technology.

## Module 5: Printed Circuit Boards (PCBs)

### Introduction: The Heart of Modern Electronics

Imagine building an electronic circuit by hand, connecting wires between components like resistors, capacitors, and ICs. It would be messy, unreliable, and frankly, impossible for the complex devices we use every day – our smartphones, computers, even your TV remote! This is where the Printed Circuit Board, or PCB, comes in. Think of it as the skeleton and nervous system of any electronic device, providing a robust, organized, and efficient platform for all the electronic components to connect and function.

In this module, we're going to explore what PCBs are, their different types, and how they are made. Understanding PCBs is fundamental to **Basic Electrical and Electronics Engineering Workshop** because it directly relates to **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB**. While breadboarding is great for prototyping, the PCB is what takes your design from a lab experiment to a real-world product.

Let's start by understanding the very building blocks of PCBs.

---

### 1. What is a Printed Circuit Board (PCB)?

At its core, a PCB is a board made of non-conductive material (usually fiberglass or a composite) on which conductive pathways, or **traces**, are etched. These traces act as the wires that connect the various electronic components soldered onto the board.

**Key Concepts:**

*   **Substrate:** This is the base material of the PCB. It provides mechanical support and electrical insulation. Common materials include FR-4 (Flame Retardant 4), which is a glass-reinforced epoxy laminate. Think of it as the foundation of a house, providing structure.
*   **Conductive Layer (Copper):** This is typically a thin layer of copper foil laminated onto the substrate. The traces are formed by selectively removing parts of this copper layer. This is where the "printing" or "etching" happens.
*   **Traces:** These are the conductive pathways created on the copper layer. They are essentially the printed wires that carry electrical signals between components.
*   **Pads:** These are small areas of copper on the surface of the board where component leads are soldered. They are connected to the traces.
*   **Vias:** These are plated-through holes that connect conductive layers together. If a signal needs to move from a trace on the top layer to a trace on the bottom layer, it goes through a via. Very important for multi-layered boards!

**Why are PCBs so important?**

PCBs offer several advantages over traditional wiring methods:

1.  **Reliability:** Soldered connections are much more stable and less prone to disconnection than wire wrapping or solderless breadboards. This directly contributes to the reliability of electronic systems.
2.  **Compactness:** They allow for dense component placement and intricate routing of traces, leading to smaller and lighter electronic devices. Think about how your phone fits into your pocket – PCBs are key to this miniaturization.
3.  **Efficiency:** The conductive traces are optimized for signal integrity, reducing noise and interference, which is crucial for high-speed digital circuits.
4.  **Cost-Effectiveness:** Once the design is finalized, mass production of PCBs is relatively inexpensive, making electronic devices affordable.

---

### 2. Types of Printed Circuit Boards (PCBs)

PCBs are classified based on the number of conductive layers they have. This is a crucial aspect that determines the complexity and functionality of the circuit.

#### 2.1 Single-Sided PCBs

**What they are:** These are the simplest type of PCBs. They have a conductive copper layer on only **one side** of the non-conductive substrate. Components are mounted on the other side, and their leads are soldered to the copper traces on the single conductive side.

**Think of it like:** A single-lane road. All the traffic (electrical signals) travels on one side.

**Where you'll find them:** Common in simple, low-cost electronic devices like:
*   Basic power supplies
*   Calculators
*   Simple lighting controllers
*   Some toys

**Advantages:**
*   Low cost of manufacturing
*   Simple design and fabrication process

**Disadvantages:**
*   Limited circuit density (not many components can be placed)
*   Routing can be challenging for complex circuits, often requiring jumper wires to overcome trace intersections.

**Connection to Course Outcomes:** Understanding single-sided PCBs helps in **CO6** by showing the foundational approach to PCB design. It's a good starting point before moving to more complex designs. It also helps with **CO4** as you'll be identifying components that are typically mounted on simpler boards.

---

#### 2.2 Double-Sided PCBs

**What they are:** These PCBs have a conductive copper layer on **both sides** of the substrate. This allows for more complex circuitry and a higher density of components because traces can be routed on both the top and bottom layers. Components are typically mounted on one side, with traces running on both sides.

**Think of it like:** A two-lane highway. You have more flexibility in directing traffic and can carry more vehicles (components and signals) efficiently.

**Where you'll find them:** Widely used in a vast range of electronic devices, including:
*   Power supplies
*   Consumer electronics (TVs, audio systems)
*   Industrial controls
*   Many modern appliances

**Advantages:**
*   Increased component density and circuit complexity compared to single-sided PCBs.
*   More flexible circuit routing, reducing the need for jumper wires.

**Disadvantages:**
*   Higher manufacturing cost than single-sided PCBs.
*   Requires careful planning for trace routing to avoid shorts between layers.

**Connection to Course Outcomes:** Double-sided PCBs are a significant step up and directly support **CO6** by illustrating how designers increase the complexity and capability of circuits. When you encounter components like ICs and more sophisticated circuits in the workshop, you'll likely see them on double-sided boards.

---

#### 2.3 Multi-Layered PCBs (Brief Mention for Context)

While our focus is on single and double-sided, it's worth mentioning that even more complex PCBs exist with three or more conductive layers. These are used in very high-density applications like smartphones, computers, and sophisticated communication equipment. Signals can travel between any of these layers using vias.

---

### 3. Plated-Through Holes (PTH)

This is a critical concept, especially when we move beyond the simplest single-sided boards and into double-sided and multi-layered PCBs.

**What they are:** Plated-Through Holes (PTH) are precisely drilled holes in the PCB that are then coated (plated) with a conductive material, usually copper. The purpose of PTHs is to connect conductive traces on different layers of the PCB.

**Think of it like:** An elevator or a tunnel connecting different floors of a building. The hole is the shaft/tunnel, and the plating is the material that allows people/signals to move between floors.

**How they work:**
1.  The PCB is drilled to create holes at specific locations.
2.  The entire board, including the inside of these holes, is then electroplated with a thin layer of copper. This copper plating forms a conductive connection between the copper traces on the layers that the hole passes through.
3.  Component leads are then inserted into these plated holes and soldered, creating an electrical connection between the component and the traces on one or more layers.

**Why are PTHs important?**

*   **Inter-layer Connection:** They are essential for connecting traces on different layers, which is the basis of double-sided and multi-layered PCBs.
*   **Component Mounting:** They provide strong mechanical and electrical connections for through-hole components. Even on single-sided boards, PTHs might be used to connect component leads to the single copper layer.
*   **Reliability:** PTHs ensure a robust electrical connection, making the circuit more reliable.

**Connection to Course Outcomes:** PTHs are fundamental to **CO6** when you are tasked with actually building a circuit on a PCB. Understanding how connections are made between layers is vital for proper circuit assembly. It also relates to **CO4** as you'll be identifying through-hole components that use these holes.

---

### 4. PCB Processing Methods: How are PCBs Made?

Now that we understand the types and key features, let's look at the manufacturing process. The goal is to create precise copper traces on a substrate. The methods generally involve selectively removing copper from a copper-clad board.

#### 4.1 Etching

Etching is the process of selectively removing unwanted copper from a copper-clad PCB to create the conductive traces and patterns. It’s like sculpting – you start with a block of material and remove what you don’t need.

**The Basic Principle:** A protective layer (resist) is applied to the copper where the traces should remain. The board is then immersed in an etchant solution, which dissolves the exposed copper. The resist protects the desired copper traces.

**Common Etching Processes:**

1.  **Toner Transfer (DIY/Small Scale):** This is a very accessible method often used by hobbyists and in educational workshops.
    *   **Design:** The circuit layout is printed in mirror image onto special gloss paper or heat transfer paper using a laser printer.
    *   **Transfer:** The printed toner is transferred from the paper to the copper surface of the PCB using heat (e.g., an iron or laminator). The toner acts as the resist.
    *   **Etching:** The board is placed in an etchant solution (like Ferric Chloride or Ammonium Persulphate), which eats away the exposed copper.
    *   **Cleaning:** The toner resist is then removed, leaving the copper traces behind.

    *This method directly links to **CO6** as it's a practical way to implement circuit designs learned in the workshop. It also involves **CO5** as you might use measuring tools to check the circuit after etching.*

2.  **Photolithography (Industrial Scale):** This is the standard industrial method, offering much higher precision and resolution.
    *   **Design:** The circuit layout is created as a film or mask.
    *   **Photosensitive Coating:** The copper-clad board is coated with a photosensitive material called **photoresist**.
    *   **Exposure:** The mask is placed over the photoresist-coated board, and the board is exposed to UV light. The UV light hardens the photoresist in the areas where the traces should be.
    *   **Developing:** The unhardened photoresist (where the traces will be) is washed away, exposing the copper.
    *   **Etching:** The board is etched in a chemical solution. The hardened photoresist protects the copper traces.
    *   **Stripping:** The remaining photoresist is stripped off, leaving the desired copper pattern.

    *While you might not perform photolithography in the workshop, understanding it helps appreciate the professional manufacturing process and why precision is key. It reinforces the concepts behind creating reliable circuits for **CO6**.*

#### 4.2 Drilling and Plating (for PTHs)

As we discussed earlier, PTHs are vital. The process involves:

1.  **Drilling:** Precisely drilling holes through the substrate at locations specified by the PCB design. This is usually done by high-speed CNC drilling machines for accuracy.
2.  **Deburring:** Removing any burrs or rough edges from the drilled holes.
3.  **Activation/Catalyzation:** The inside walls of the holes are treated with a chemical solution (like palladium) to make them receptive to copper deposition.
4.  **Electroless Copper Deposition:** A very thin layer of copper is deposited on all surfaces, including the inside of the holes, without using an electric current. This provides a base for the subsequent plating.
5.  **Electroplating (Copper):** A thicker layer of copper is electroplated onto the board, including the holes. This process builds up the conductive pathways and ensures a strong, conductive connection through the PTHs. This is a critical step for conductivity and reliability.
6.  **Solder Mask Application:** A protective layer (usually green) is applied over the copper traces, except for the pads where components will be soldered. This prevents solder bridges and protects the traces from environmental damage.
7.  **Silkscreen Printing:** Component designators (like R1, C2, U3) and other markings are printed on the surface of the PCB for easier assembly and identification.

**Connection to Course Outcomes:** Drilling and plating are essential for creating functional double-sided and multi-layer boards. Understanding this process is crucial for **CO6** as it explains how connections are physically realized. **CO5** comes into play when you need to measure resistances or voltages on a populated board, verifying the plating and connections.

#### 4.3 Component Mounting and Soldering

This is the stage where the electronic components are attached to the PCB.

1.  **Component Placement:** Components are placed into their respective pads/holes on the PCB.
2.  **Soldering:** The leads of the components are soldered to the copper pads to create a permanent electrical and mechanical connection.
    *   **Through-Hole Soldering:** For components with leads that go through holes (PTH components), soldering is done either by hand with a soldering iron or using wave soldering machines (in mass production).
    *   **Surface Mount Technology (SMT):** Modern PCBs also extensively use SMT components which are soldered directly onto the surface of the pads. This requires different soldering techniques like reflow soldering.

**Connection to Course Outcomes:** This is a core practical skill. **CO6** directly addresses applying the design to a PCB, which includes successful component mounting and soldering. **CO3** is also relevant here as you need to identify suitable accessories (like solder, flux, soldering iron) for wiring and connecting circuits. **CO7** plays a role if you're working in a team to assemble a PCB.

---

### Connecting to Course Outcomes - A Summary

Let's quickly recap how this module ties into your overall learning objectives:

*   **CO1 (Safety):** While not directly about PCB types, handling chemicals for etching or working with soldering irons (heat, fumes) requires adherence to safety protocols. You'll learn about proper ventilation and handling of etching solutions.
*   **CO2 (Components & Earthing):** Understanding how components like transformers, batteries, or even simple resistors and capacitors are mounted on PCBs links to recognizing and using these components effectively. Earthing schemes are designed into the PCB layout itself.
*   **CO3 (Wiring & Accessories):** PCBs are the ultimate form of organized wiring. You'll see how traces replace wires and learn about the accessories (solder, flux, tools) needed for the final assembly phase on the PCB.
*   **CO4 (Identify Components):** You'll encounter various component packages (through-hole, SMT) designed to be mounted on PCBs, further enhancing your ability to identify them.
*   **CO5 (Measuring Instruments):** After a PCB is assembled, you'll use multimeters, oscilloscopes, etc., to test its functionality, confirming the connections made through traces and PTHs.
*   **CO6 (Design & Application):** This module is central to CO6. You learn about different PCB types, the logic behind routing traces, the importance of PTHs, and the processes that lead to a functional PCB. This knowledge is directly applied when you design and build your own circuits on PCBs in the workshop.
*   **CO7 (Teamwork):** PCB design and assembly can be collaborative projects. Working in a team to design, fabricate, and populate a PCB is a great way to develop interpersonal skills.

---

### Exam-Oriented Tips and Pitfalls

*   **Definitions are key:** Be prepared to define terms like substrate, trace, via, photoresist, and etchant.
*   **Distinguish between PCB types:** Clearly explain the differences between single-sided and double-sided PCBs, focusing on the number of conductive layers and their implications for complexity and cost.
*   **Understand PTH's role:** Know why PTHs are crucial for connecting layers and for component mounting.
*   **Etching process:** Focus on the principle of selective copper removal. For DIY, toner transfer is common; for industry, photolithography is standard.
*   **Common Pitfall:** Confusing the resist in toner transfer (toner) with the resist in photolithography (photoresist). Also, not understanding how vias connect layers.

---

### Sample Questions and Answers

**Q1. What is the primary difference between a single-sided and a double-sided PCB?**

**Answer:** The primary difference lies in the number of conductive copper layers. A single-sided PCB has a conductive layer on only one side of the substrate, while a double-sided PCB has conductive layers on both the top and bottom sides. This allows double-sided PCBs to accommodate more complex circuitry and a higher density of components.

**Q2. Explain the purpose of a Plated-Through Hole (PTH) in a PCB.**

**Answer:** A PTH is a hole drilled through the PCB layers that is metallized (plated with copper). Its main purpose is to provide an electrical connection between conductive traces on different layers of a double-sided or multi-layer PCB. It also serves as a connection point for the leads of through-hole components, providing both electrical conductivity and mechanical support.

**Q3. Briefly describe the toner transfer method for PCB fabrication, highlighting its role as a resist.**

**Answer:** The toner transfer method is a simple technique for making PCBs, often used in workshops. First, the circuit layout is printed onto special paper using a laser printer, with the toner acting as a protective layer (resist). This toner is then transferred to the copper-clad board using heat. When the board is placed in an etching solution, the etchant dissolves the exposed copper, but the toner resist protects the copper areas that will form the circuit traces.

**Q4. Why is photolithography considered a more precise method than toner transfer for industrial PCB manufacturing?**

**Answer:** Photolithography uses UV light and a photosensitive material (photoresist) with a precisely designed mask to create the circuit pattern. This process offers much higher resolution and accuracy in defining fine traces and spaces compared to toner transfer, which relies on the quality of the toner and the transfer process. This precision is essential for manufacturing complex, high-density PCBs found in modern electronic devices.

**Q5. Imagine you've designed a simple LED flasher circuit. Would you likely use a single-sided or double-sided PCB for it, and why? (Relates to CO6)**

**Answer:** For a simple LED flasher circuit, a single-sided PCB would often be sufficient and more cost-effective. The component count and complexity are usually low enough that all traces can be routed on one side, possibly with a jumper wire if needed. However, if space is extremely limited or if you are using surface-mount components that occupy significant board area, a double-sided PCB might be chosen for better component placement and routing flexibility. The choice depends on the specific design constraints.

---

And there you have it! A comprehensive overview of PCBs, their types, and how they come to life. Remember, understanding these fundamentals is key to successfully bringing your electronic circuit designs to reality in the workshop! Keep practicing, and don't hesitate to ask questions.
