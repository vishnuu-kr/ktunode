---
title: "Design and fabrication of a single sided PCB for a simple circuit."
subject: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP"
module: "Module 13: Printed circuit boards (PCB) "
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc9020463779487da153"
status: "completed"
scrapedAt: "2026-05-23T17:32:59.995Z"
---
# Module 13: Printed Circuit Boards (PCBs) - Design and Fabrication of a Single-Sided PCB

Welcome, everyone! Today, we embark on a crucial and exciting journey into the heart of electronics: **Printed Circuit Boards**, or PCBs. Think of a PCB as the backbone of almost every electronic device you use – from your smartphone to your car's control system. It's where all the magic happens, connecting all the individual electronic components together in a precise and reliable way. In this module, we'll focus on the **design and fabrication of a single-sided PCB for a simple circuit**. This is a foundational skill, and understanding it will directly help us achieve **Course Outcome 6: Apply the design procedure of simple electronic circuits on breadboard and PCB (Knowledge Level: K3)**.

## 1. What Exactly is a PCB?

Before we dive into making one, let's understand what a PCB is. A PCB is a board made of a non-conductive material, usually fiberglass, onto which conductive pathways, called **traces**, are etched. These traces act like tiny wires, connecting the various electronic components mounted on the board. This is a massive improvement over older methods where components were wired together individually, leading to bulky, unreliable, and hard-to-troubleshoot circuits.

Imagine building a circuit with individual wires for every connection. It would be messy, prone to shorts (where wires accidentally touch, causing problems!), and a nightmare to fix if something went wrong. PCBs solve all these issues!

### Key Terms to Remember:

*   **Substrate:** The base material of the PCB, usually fiberglass (like FR-4). This is the non-conductive part.
*   **Conductor:** Typically copper, applied as a thin layer to the substrate. This is where we etch the traces.
*   **Traces:** The conductive pathways etched onto the copper layer. These are essentially the "wires" of the PCB.
*   **Pads:** Areas of copper where component leads are soldered.
*   **Vias:** Holes that connect traces on different layers of a multi-layer PCB (though for our single-sided PCB, we’ll mostly deal with through-holes for component leads).
*   **Solder Mask:** A protective layer, usually green or blue, that covers the copper traces, preventing solder bridges and corrosion.
*   **Silkscreen:** The printed text and graphics on the PCB, indicating component placement and other useful information.

**Reference Point:** Many of these fundamental concepts are explained in detail in chapters dealing with electronic component mounting and circuit board assembly in books like "Basic Electronics and Linear Circuits" by Bhargava, Kulshreshtha, and Gupta.

## 2. Why Single-Sided PCBs?

For a simple circuit, a single-sided PCB is perfectly adequate and much easier to fabricate than a double-sided or multi-layer board. This means all the components and traces are on **one side** of the board. This aligns perfectly with our workshop's goal of building foundational skills. It’s like learning to walk before you run – you master the basics first.

## 3. The Design Process: From Circuit to Blueprint

The fabrication process doesn't start with etching. It begins with a clear plan – the **design**.

### Step 1: Circuit Diagram and Component Selection

First, you need a functional circuit. Let's say we want to design a simple LED flasher circuit. You’d start with the **schematic diagram** – a symbolic representation of the circuit.

*   **Example:** A simple LED flasher might use a transistor, a couple of resistors, a capacitor, and an LED. Our **Course Outcome 4: Identify various electronic components (Knowledge Level: K2)** is crucial here. You need to know what an LED, a transistor, a resistor, and a capacitor look like and what their basic functions are to even start.

### Step 2: Layout Design – The PCB Blueprint

Once you have the schematic, you need to translate it into a physical layout. This is where the PCB design software comes in. For simple projects, there are many user-friendly options. The goal is to arrange the components and route the traces logically and efficiently.

*   **Component Placement:**
    *   Think about how components will be used. Heat-generating components should be placed away from sensitive ones.
    *   Consider the mechanical aspect – how will the board be mounted? Will there be connectors?
    *   Arrange components to minimize trace lengths and avoid crossovers.
*   **Trace Routing:**
    *   Traces are like the pathways on a city map. You want them to be as direct as possible.
    *   **Trace Width:** Wider traces are generally better for carrying more current. For signal lines, thinner traces are usually fine.
    *   **Spacing:** Ensure adequate spacing between traces to prevent short circuits. A good rule of thumb is at least twice the trace width, or more if space allows. This directly relates to **Course Outcome 1: Demonstrate safety measures against electrical shocks (Knowledge Level: K2)**, as poor spacing can lead to failures.
    *   **Avoid 90-degree angles:** While not strictly forbidden, using 45-degree bends (chamfered corners) for traces is generally preferred as it can help reduce signal reflections in high-frequency circuits (though less critical for simple DC circuits).
*   **Pads and Holes:**
    *   Each component lead needs a **pad** to solder onto.
    *   For through-hole components, you’ll need to specify the hole size. This needs to be slightly larger than the component lead diameter.

**Think of it like designing a plumbing system for a house.** You need to connect the faucet to the water supply (like connecting a component to power) and the drain to the sewage system (like connecting to ground). You want the pipes to be the right size, laid out efficiently, and without leaks (short circuits).

### Step 3: Generating the Gerber Files

The PCB design software then generates a set of files, known as **Gerber files**. These are the industry standard files that the PCB manufacturer uses to create the board. For a single-sided board, you'll typically need at least two Gerber files:

*   **Copper Layer:** This file defines the shape of the traces and pads on the conductive side.
*   **Solder Mask Layer:** This defines where the solder mask (the protective coating) should NOT be applied, leaving the pads exposed for soldering.
*   **Silkscreen Layer (Optional but recommended):** This file defines the text and component outlines for identification.

**Exam Tip:** Understanding the purpose of Gerber files and the layers they represent is important for grasping the manufacturing process.

## 4. Fabrication Process: Bringing the Design to Life

Now that we have our design, let's look at how we physically *make* the PCB. This involves several steps, and in a workshop setting, we'll focus on simplified, accessible methods.

### Step 1: Material Preparation – The Copper Clad Board

We start with a **copper-clad board**. This is a sheet of non-conductive substrate (like FR-4) with a thin layer of copper laminated onto one side.

### Step 2: Transferring the Design – The Etching Mask

The core idea is to protect the copper we want to keep (the traces and pads) and expose the copper we want to remove. This protected layer is called the **etching mask**. There are several ways to achieve this:

*   **Toner Transfer Method (Common in workshops):**
    *   Print your PCB layout (mirrored!) onto glossy photo paper or special transfer paper using a laser printer. The toner from the laser printer acts as the resist.
    *   Place the printed paper onto the copper-clad board.
    *   Apply heat and pressure (using a laminator or an iron). The heat melts the toner, causing it to adhere to the copper.
    *   Once cooled, soak the board in water. The paper will soften and peel away, leaving the toner on the copper.

*   **Direct Printing (using UV-curable ink):** Some advanced printers can directly print a UV-curable ink onto the PCB, which acts as the resist. This is less common in basic workshops but is a professional method.

*   **Photoresist Method:** This is a more professional method involving a light-sensitive coating (photoresist) applied to the copper. A mask of the PCB layout is placed over it, and UV light is shone through. The exposed areas harden, while the unexposed areas are washed away, leaving the resist in the desired pattern.

**Think of it like stencil art.** You have a stencil (your toner/resist) that covers the parts you don't want to paint (etch away).

### Step 3: Etching – Removing the Unwanted Copper

This is the most critical and potentially hazardous step. We use a chemical etchant to dissolve the exposed copper.

*   **Common Etchants:**
    *   **Ferric Chloride (FeCl₃):** A common, readily available etchant. It's effective but can stain everything.
    *   **Ammonium Persulphate ((NH₄)₂S₂O₈):** Another effective etchant, often used in a solution that turns blue as it etches.
    *   **Acid Etching:** Strong acids can also be used, but these are generally more hazardous and require specialized ventilation.

**Safety First!** This is where **Course Outcome 1: Demonstrate safety measures against electrical shocks (Knowledge Level: K2)**, and also general chemical safety, comes into play.
*   **Always wear safety goggles and chemical-resistant gloves.**
*   **Work in a well-ventilated area.**
*   **Handle etchants with extreme care.** Never ingest or come into direct skin contact.
*   **Follow disposal guidelines for used etchants.**

**Process:**
1.  Submerge the copper-clad board (with the toner resist) into the heated etchant solution.
2.  Agitate the solution gently (rocking the tray) to ensure even etching.
3.  Observe the process. The exposed copper will gradually disappear.
4.  Once all the unwanted copper is gone, remove the board.
5.  Rinse the board thoroughly with water.

**Exam Note:** You might be asked about the purpose of etching or the types of etchants used. The key is to remove unwanted copper, leaving only the traces and pads.

### Step 4: Removing the Resist

After etching, the toner or photoresist needs to be removed to expose the copper traces and pads.

*   **Toner Removal:** You can use a solvent like acetone or a scouring pad with some soap and water.
*   **Photoresist Removal:** A specific developer solution is used.

### Step 5: Drilling the Holes

Now, we need to make holes for component leads and mounting.

*   **Drilling:** Use a small drill bit (typically 0.8mm to 1.0mm for component leads) and a drill press or a rotary tool. Ensure the holes are drilled precisely where the pads are.
*   **Alignment:** If you transferred your design accurately, the drilled holes should align perfectly with the center of your pads. This step is crucial for the physical assembly of components. **Course Outcome 5: Operate various measuring instruments (Knowledge Level: K3)** might come into play if you need to accurately measure hole sizes or component lead diameters.

### Step 6: Soldering

This is where we connect the electronic components to the PCB.

*   **Tools:** Soldering iron, solder wire, flux, desoldering braid (for mistakes!).
*   **Process:**
    1.  Apply a small amount of flux to the pads. Flux cleans the metal surfaces and helps the solder flow smoothly.
    2.  Heat the pad and the component lead simultaneously with the soldering iron.
    3.  Touch the solder wire to the heated pad and lead (not the iron directly). The solder will melt and flow, forming a shiny, cone-shaped joint.
    4.  Remove the solder wire, then the soldering iron.
    5.  Inspect the joint. It should be shiny, not dull or lumpy. A dull joint often indicates a cold solder joint, which is unreliable.
*   **Safety:** Again, **Course Outcome 1** is vital here. Be aware of the hot soldering iron and the fumes produced (use a fume extractor if available). **Course Outcome 7: Build the ability to work in a team with good interpersonal skills (Knowledge Level: K3)** is relevant in a workshop setting where you might be helping each other with soldering.

**Analogies for Soldering:** Think of it like welding tiny metal pieces together. You need the right heat and material to create a strong, clean bond.

### Step 7: Cleaning and Inspection

After soldering, clean off any excess flux residue with isopropyl alcohol. Inspect all solder joints and connections. Ensure there are no **solder bridges** (where solder accidentally connects two adjacent pads) or **cold solder joints**.

### Step 8: Cutting and Finishing

*   **Cutting:** Cut the fabricated PCB to the desired size and shape using a PCB cutter, hacksaw, or shears.
*   **Deburring:** Remove any sharp edges.

## 5. Connecting to Course Outcomes

Let's explicitly link what we've learned to our course outcomes:

*   **CO1: Demonstrate safety measures against electrical shocks (K2):** Absolutely critical throughout the fabrication process. Handling etchants, hot soldering irons, and even the finished PCB requires an awareness of electrical safety and chemical handling. Poorly designed PCBs with inadequate spacing can also lead to shorts and shocks.
*   **CO2: Familiarise with transformers, rheostats, batteries and earthing schemes (K2):** While not directly fabricating these components, the PCB will likely be powered by a battery or a supply derived from a transformer. The design must account for the power requirements of the circuit, and proper earthing is essential for the overall system safety.
*   **CO3: Illustrate the connection diagram and identify the suitable accessories necessary for wiring simple electric circuits (K3):** The PCB design process *is* essentially translating the connection diagram (schematic) into a physical layout. We also consider accessories like mounting holes, connectors, etc., during the layout phase.
*   **CO4: Identify various electronic components (K2):** You need to know your resistors from your capacitors to place them correctly on the PCB and then solder them.
*   **CO5: Operate various measuring instruments (K3):** In a more advanced setup, instruments like multimeters are used to check continuity and test the circuit after assembly. Drilling accuracy might also involve measurement.
*   **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB (K3):** This entire module is dedicated to this outcome. We learn the steps from schematic to a functional PCB.
*   **CO7: Build the ability to work in a team with good interpersonal skills (K3):** PCB fabrication often involves shared tools and collaboration, especially in a workshop environment. Helping each other, sharing knowledge, and ensuring everyone follows safety procedures are key aspects.

## 6. Common Pitfalls and Exam Tips

*   **Mirror Image Printing:** Always remember to print your layout **mirrored** for the toner transfer method. If you don't, the writing on your PCB will be reversed.
*   **Etching Time:** Don't over-etch (the traces can become too thin and break) or under-etch (you’ll leave unwanted copper that can cause shorts). Watch the process carefully.
*   **Solder Bridges:** The most common issue during soldering. Be precise and don't use too much solder.
*   **Cold Solder Joints:** These look dull and bumpy. Reheat the joint and add a little fresh solder to fix it.
*   **Trace Widths:** For simple circuits, it's a good habit to use slightly wider traces for power and ground connections compared to signal lines.
*   **Component Spacing:** Leave enough room for your fingers (or tweezers) to place components and for soldering.

**Remember this:** A well-designed and well-fabricated PCB is a testament to your understanding of electronic principles and attention to detail. It’s a skill that builds confidence and opens doors to more complex projects.

---

## Sample Questions with Answers

**1. Conceptual Question:** What is the primary purpose of the toner or photoresist in the PCB fabrication process?
**Answer:** The toner or photoresist acts as an **etching mask**. Its purpose is to protect the copper areas that we want to keep (the traces and pads) from being dissolved by the etchant solution, while leaving the unwanted copper exposed to be removed.

**2. Exam-Oriented Question:** When using the toner transfer method for PCB fabrication, why is it crucial to print the PCB layout in a mirrored orientation?
**Answer:** It is crucial to print the PCB layout in a **mirrored orientation** because the toner will be transferred from the paper to the copper side of the board. When the paper is placed face down onto the copper and then peeled off, the image is flipped. Printing it mirrored ensures that once transferred and etched, the layout on the copper board will appear in the correct, non-mirrored orientation when viewed from the top (component side). Failing to mirror it would result in reversed text and component footprints.

**3. Application Question:** You are designing a PCB for a simple amplifier circuit. You notice that the traces carrying power to the amplifier IC are very thin. What potential problem could this cause, and how would you rectify it during the design phase?
**Answer:**
*   **Potential Problem:** Very thin traces for power supply can cause a **voltage drop** due to their higher resistance. This can lead to insufficient voltage reaching the IC, potentially causing it to malfunction or perform poorly. In extreme cases, the thin trace might overheat and burn out.
*   **Rectification:** During the design phase, I would **increase the width of the power and ground traces**. Wider traces have lower resistance, allowing more current to flow with less voltage drop and reducing the risk of overheating. The exact width would depend on the current requirements of the IC, but it should be significantly wider than signal traces.

**4. Safety Question:** During the etching process using Ferric Chloride, you accidentally spill some on your lab coat. What immediate actions should you take?
**Answer:**
1.  **Immediately remove the contaminated lab coat.**
2.  **Rinse the affected skin area thoroughly with plenty of running water.**
3.  **Wash the lab coat separately with soap and water.**
4.  **Inform the instructor or supervisor about the incident.**
It’s also important to ensure that safety goggles and gloves were worn correctly during the process to prevent contact with skin and eyes. This highlights the importance of **CO1: Demonstrate safety measures**.

**5. Design Principle Question:** Explain the difference between a pad and a via in the context of PCB design, even though we are focusing on single-sided PCBs.
**Answer:**
*   A **pad** is a circular or square area of copper on the PCB surface where a component lead is soldered. It's where the electrical connection is made to the component.
*   A **via** is a plated hole that connects traces or copper areas on different layers of a PCB. While a single-sided PCB technically only has one copper layer, components that are inserted through holes and soldered on the bottom side (which is the only side with copper in our single-sided case) are essentially connected via these holes to the copper pads. If we were designing a double-sided PCB, vias would be critical for routing traces between the top and bottom layers. For single-sided, the through-holes for component leads serve a similar function of physically connecting the component to the copper plane.

This covers the fundamental aspects of designing and fabricating a single-sided PCB, a skill vital for anyone venturing into electronics. Keep practicing!

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
