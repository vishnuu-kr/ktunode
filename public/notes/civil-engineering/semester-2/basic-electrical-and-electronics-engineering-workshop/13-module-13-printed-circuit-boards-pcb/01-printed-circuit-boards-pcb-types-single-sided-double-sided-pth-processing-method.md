---
title: "Printed circuit boards (PCB) - Types, Single sided, Double sided, PTH, Processing methods."
subject: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP"
module: "Module 13: Printed circuit boards (PCB) "
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912ede"
status: "completed"
scrapedAt: "2026-05-20T18:33:07.280Z"
---
# Module 13: Printed Circuit Boards (PCBs) - Types, Single Sided, Double Sided, PTH, Processing Methods

Welcome, everyone, to our exploration of Printed Circuit Boards (PCBs)! Today, we're diving into the backbone of almost every electronic device you encounter, from your smartphone to your television, even the simplest calculator. Think of a PCB as the organized city where electronic components live and work together. Without them, all those tiny resistors, capacitors, and ICs would just be scattered parts, unable to communicate.

This module is particularly crucial for achieving **Course Outcome 6 (CO6): Apply the design procedure of simple electronic circuits on breadboard and PCB**. Understanding PCBs is the bridge between experimenting on a breadboard and creating a robust, permanent circuit. It’s about bringing your designs to life in a professional and reliable way. We'll also touch upon concepts relevant to **CO4 (Identify various electronic components)** as we discuss how these components are mounted on the PCB.

## What Exactly is a PCB?

At its heart, a Printed Circuit Board is a flat board made of a non-conductive material, usually fiberglass, that provides mechanical support for electronic components. What makes it special are the **conductive pathways**, called **traces**, etched onto its surface or embedded within its layers. These traces are made of copper and act like miniature wires, connecting the various components according to a specific circuit design.

Imagine a city plan. You have buildings (components) and roads connecting them (traces). The PCB is that meticulously planned city, ensuring that electricity flows exactly where it needs to go.

### Why PCBs are Essential

Before PCBs, circuits were often built using point-to-point wiring, where components were connected with individual wires. This was tedious, bulky, and prone to errors. PCBs revolutionized electronics by offering:

*   **Compactness:** Traces can be incredibly fine, allowing for dense component placement and smaller devices.
*   **Reliability:** Soldered connections are more robust and less prone to failure than soldered wires.
*   **Reproducibility:** Once a PCB design is finalized, it can be manufactured consistently, ensuring identical performance across multiple units.
*   **Ease of Assembly:** Components are placed in specific locations, simplifying the manufacturing process.

This connects directly to **CO6** because when you design a circuit, the PCB is the physical realization of that design, making it practical and manufacturable.

## Types of Printed Circuit Boards

PCBs aren't all the same. Their complexity and functionality vary, and we can classify them based on the number of conductive layers. This is a fundamental concept, so let's break it down.

### 1. Single-Sided PCBs

As the name suggests, a single-sided PCB has conductive copper traces on only *one* side of the insulating substrate. The components are typically mounted on the other side.

**How it works:**
Imagine a single layer of copper foil laminated onto a fiberglass board. Then, the unwanted copper is etched away, leaving only the desired traces. Components are soldered to these traces.

**Analogy:**
Think of a simple, one-lane road. All traffic flows in one direction, and there are no intersections in the sky. It’s straightforward and cost-effective for basic applications.

**Relatable Example:**
Many simple electronic devices like basic power adapters, calculators, or alarm clocks use single-sided PCBs. They are sufficient for circuits that don't require complex interconnections.

**Advantages:**
*   **Cost-Effective:** The manufacturing process is simpler and cheaper.
*   **Easy to Design and Manufacture:** Requires less complex machinery and fewer steps.

**Disadvantages:**
*   **Limited Component Density:** Can't accommodate as many components or as complex interconnections as multi-layer boards.
*   **Routing Limitations:** Traces can’t cross over each other, which can limit design flexibility.

**Connection to Course Outcomes:**
Understanding single-sided PCBs is a great starting point for **CO6**. It's like learning to draw a straight line before attempting a complex sketch. You can design and potentially even fabricate (in a workshop setting) simple circuits on single-sided boards.

### 2. Double-Sided PCBs

This is where things get a bit more interesting. A double-sided PCB has copper traces on *both* sides of the insulating substrate. This significantly increases the routing possibilities and the density of components.

**How it works:**
Both sides of the board have a copper layer. Traces are etched on both sides, and components can be placed on either or both sides.

**Analogy:**
Now, think of a two-lane road, perhaps with some simple overpasses. You have more flexibility in directing traffic, and you can connect points more efficiently.

**Relatable Example:**
Most common electronic devices you use daily, like TVs, computers, and audio equipment, utilize double-sided PCBs. They offer a good balance of complexity, cost, and performance.

**Advantages:**
*   **Higher Component Density:** More traces mean more components can be packed into a smaller area.
*   **Improved Routing Flexibility:** Traces can cross by using connections between layers, though this is achieved through PTHs (which we'll discuss next).
*   **Cost-Effective for Moderate Complexity:** More complex than single-sided but less expensive than multi-layer boards.

**Disadvantages:**
*   **More Complex Manufacturing:** Requires more precise etching and drilling processes.
*   **Potential for Interference:** If not designed carefully, signals on opposite sides can interfere.

**Connection to Course Outcomes:**
Double-sided PCBs are very relevant to **CO6**. When you move beyond the simplest circuits, you’ll often find yourself needing the routing capabilities of a double-sided board. This is where you start thinking about how components on one side connect to components on the other.

### 3. Through-Hole Plated (PTH) PCBs

This isn't a *type* of board in the same way as single or double-sided, but rather a crucial feature that enhances them. **Through-Hole Plating (PTH)** refers to the process of creating conductive layers *within the drilled holes* that pass through the PCB.

**How it works:**
After drilling holes for component leads or for connecting different layers, a process of metallization is used to create a conductive copper plating inside these holes. This plating electrically connects the traces on different layers of the PCB.

**Analogy:**
Imagine drilling tunnels through a mountain to connect roads on opposite sides. PTHs are like these plated tunnels, allowing electrical signals to pass between different layers (or different sides of a double-sided board) seamlessly.

**Relatable Example:**
When you look at a double-sided PCB, you'll see little copper rings around the holes where component leads go. These rings are the visible evidence of the PTH, connecting the top and bottom traces. Even on single-sided boards, PTHs are used to connect components to the single layer of traces.

**Why PTH is Important:**
*   **Inter-Layer Connectivity:** Essential for multi-layer PCBs and for making connections between the two sides of double-sided PCBs.
*   **Component Mounting:** Provides a strong mechanical and electrical connection for through-hole components.

**Connection to Course Outcomes:**
PTH is a fundamental aspect of board manufacturing and directly supports **CO6**. To effectively design a PCB, you must understand how components are connected through holes and how different layers communicate. This is the practical aspect of circuit realization.

**A Note on Multi-Layer PCBs:**
While we’re focusing on single and double-sided for this introductory module, it’s worth mentioning that PCBs can have many more layers (4, 8, 10, or even more). These are used for very complex circuits, like those found in high-performance computers or advanced communication systems. Each layer can contain copper traces, and PTHs connect them.

## PCB Processing Methods: Bringing the Design to Life

So, we have our circuit design, we've chosen the type of PCB. Now, how do we actually *make* it? This involves several key manufacturing steps. These processes are often automated and done in specialized factories, but understanding the principles is vital for anyone involved in electronics. This is where the "workshop" aspect comes in – understanding how your designs are physically realized. This directly relates to **CO6** by showing the practical steps involved in implementing a circuit design.

### 1. Design & Layout

This is the first and most critical step. Using specialized software (like Eagle, KiCad, Altium Designer), engineers translate a schematic diagram into a physical layout of traces, component pads, and vias (which are like PTHs that connect layers).

*   **Key Considerations:** Component placement, trace routing, power and ground planes, signal integrity, thermal management.
*   **Connection to CO6:** This is the core of applying the design procedure. You learn how to translate a conceptual circuit into a tangible layout.

### 2. Artwork Generation (Photographic Process)

The digital layout design is converted into film or photographic masks. These masks are like stencils for the copper etching process.

*   **How it works:** High-resolution films are created for each layer of the PCB (e.g., top copper, bottom copper, solder mask, silkscreen).
*   **Relatable Example:** Think of making a stencil for spray painting. The mask defines where the paint (copper) should remain and where it should be removed.

### 3. Copper Clad Preparation

The starting material for a PCB is a thin sheet of copper laminated onto a substrate (like FR-4, which is fiberglass reinforced epoxy resin).

*   **Substrate Material:** FR-4 is the most common due to its good electrical insulation properties, mechanical strength, and relatively low cost. Other materials are used for high-frequency or high-temperature applications.
*   **Connection to CO6:** Understanding the base material helps in selecting the right PCB for a given application.

### 4. Photo-Resist Application & Exposure

The copper-clad board is coated with a light-sensitive material called photo-resist. Then, the artwork film (from step 2) is placed over the photo-resist, and the board is exposed to UV light.

*   **How it works:** Where the film is transparent, UV light hits the photo-resist, hardening it. Where the film is opaque (the traces and pads), the photo-resist remains soft.
*   **Relatable Example:** Imagine developing a photograph. Light exposes the film, creating an image. Here, the light exposes the photo-resist to define the circuit pattern.

### 5. Developing & Etching

The board is immersed in a developer solution to remove the *unexposed* (soft) photo-resist. What remains is the hardened photo-resist protecting the desired copper traces. Then, the board is placed in an etching solution (like ferric chloride or ammonium persulfate) which dissolves away the *unprotected* copper.

*   **The Goal:** To leave only the copper that forms the circuit traces and pads.
*   **Relatable Example:** Think of cleaning a table with a cloth. You wipe away the dirt (unwanted copper), leaving the clean surface (traces) protected by the cloth (photo-resist).
*   **Exam Point:** This is a critical step. The quality of etching directly impacts the reliability of the PCB. It's often asked how etching works and what solutions are used.

### 6. Drilling

Holes for component leads and vias are drilled using precision CNC (Computer Numerical Control) drilling machines.

*   **Precision is Key:** The drill accuracy must match the fine features of modern PCBs.
*   **Connection to CO6:** This is where holes are made for mounting components, a direct application of design principles.

### 7. Through-Hole Plating (PTH) - The Connection Maker

As discussed earlier, this is a crucial step. After drilling, the holes are cleaned and metallized to create conductive pathways between layers.

*   **Process:** Typically involves a thin electroless copper deposition followed by electrolytic copper plating to build up the thickness of the conductive layer inside the hole.
*   **Importance:** Without PTH, connecting traces on opposite sides of a double-sided board or connecting different layers in a multi-layer board would be impossible.

### 8. Solder Mask Application

A protective layer, usually green (but can be other colors), called the solder mask, is applied to the board. It covers all copper traces except for the component pads where solder will be applied.

*   **Purpose:**
    *   **Prevents Solder Bridges:** Stops solder from flowing unintentionally between adjacent pads.
    *   **Protection:** Protects copper traces from oxidation and mechanical damage.
    *   **Electrical Insulation:** Provides a degree of electrical insulation.
*   **Relatable Example:** It's like painting a wall but leaving the windows uncovered for the glass to be installed. The green mask covers the "walls" (traces) while leaving the "window frames" (pads) open for soldering.
*   **Exam Point:** The function of the solder mask is a common exam question.

### 9. Silkscreen (Component Legend)

A layer of ink, typically white, is printed on the board to identify component locations, polarity markings, reference designators (like R1, C2), and other helpful information.

*   **Purpose:** Aids in component assembly and troubleshooting.
*   **Relatable Example:** It’s like the labels on a circuit breaker panel, telling you what each switch controls.

### 10. Surface Finish

The exposed copper pads are given a surface finish to prevent oxidation and improve solderability. Common finishes include HASL (Hot Air Solder Leveling), ENIG (Electroless Nickel Immersion Gold), and OSP (Organic Solderability Preservatives).

*   **Why it's needed:** Bare copper oxidizes quickly, making it difficult to solder.
*   **Connection to CO6:** A good surface finish is essential for successful soldering during component assembly.

### 11. Testing

The finished PCBs are rigorously tested for electrical continuity and shorts.

*   **Methods:** Flying probe testers, bed-of-nails fixtures.
*   **Importance:** Ensures that the manufactured board matches the design and is free from manufacturing defects.

## Connecting PCB Concepts to Course Outcomes

Let's explicitly tie these concepts back to our course objectives:

*   **CO1 (Safety):** While not directly about PCB processing, working safely in a workshop is paramount. Understanding PCB manufacturing might highlight specialized processes that require safety precautions (e.g., chemical etching).
*   **CO2 (Components/Schemes):** Understanding different PCB types helps in appreciating how transformers, batteries, and earthing schemes are physically implemented within electronic systems. For example, a power supply might require a specific PCB layout to accommodate a transformer or manage grounding.
*   **CO3 (Connection Diagrams/Accessories):** Designing a PCB is essentially creating a complex connection diagram. The layout software helps visualize and manage these connections, and the choice of PCB type (single, double-sided) dictates the complexity of the "wiring."
*   **CO4 (Identify Components):** As we place components on a PCB, we need to identify them based on the silkscreen and the connection points (pads).
*   **CO5 (Measuring Instruments):** In a PCB workshop, you might use multimeters to check continuity of traces or oscilloscopes to test circuit functionality on a populated PCB.
*   **CO6 (Apply design procedure on breadboard and PCB):** This is our primary focus. We start on a breadboard (flexible prototyping) and then move to PCB design (permanent implementation). Understanding PCB types, how components are connected (PTH), and the manufacturing steps are all integral parts of applying this design procedure. You learn to translate a schematic into a layout, consider routing, and understand the physical constraints.
*   **CO7 (Teamwork):** PCB design and manufacturing are often team efforts, involving schematic designers, layout engineers, manufacturing technicians, and assemblers.

## Key Takeaways and Exam Preparation

*   **PCB Definition:** A board providing mechanical support and electrical connections for components using conductive traces.
*   **Types:** Single-sided (one layer of copper), Double-sided (copper on both sides).
*   **PTH:** Critical for connecting traces between layers or sides.
*   **Manufacturing Flow:** Design -> Artwork -> Photo-resist -> Etching -> Drilling -> Plating -> Solder Mask -> Silkscreen -> Finishing -> Testing.
*   **Why are PCBs important?** Reliability, compactness, reproducibility.
*   **Exam Focus:** Be prepared to explain the difference between single and double-sided PCBs. Understand the purpose of the solder mask and silkscreen. Know the basic sequence of PCB manufacturing steps, particularly etching and plating. The role of PTH is also frequently tested.

Remember, the PCB is the physical foundation of your electronic circuit. A well-designed PCB ensures your circuit functions reliably and efficiently. Understanding these fundamental aspects will greatly help you in **CO6**, bridging the gap from theoretical design to practical implementation.

---

## Sample Questions and Answers

**Q1: Explain the fundamental difference between a single-sided and a double-sided PCB.**

**Answer:**
The fundamental difference lies in the number of conductive copper layers present on the insulating substrate.
*   A **single-sided PCB** has a single layer of copper traces on only one side of the board. Components are mounted on the opposite side.
*   A **double-sided PCB** has layers of copper traces on *both* sides of the insulating substrate. This allows for greater component density and more complex routing as traces can be interconnected using through-hole plating (vias).

**Q2: What is the purpose of the solder mask on a PCB? List at least two benefits.**

**Answer:**
The solder mask is a protective coating applied to the PCB, typically green, that covers all copper traces except for the component pads. Its primary purposes are:
1.  **Prevent Solder Bridges:** It prevents solder from unintentionally flowing between adjacent component pads during the soldering process, which could cause short circuits.
2.  **Protection of Traces:** It protects the copper traces from oxidation, moisture, and mechanical damage during handling, assembly, and the product's lifetime. It also provides a degree of electrical insulation.

**Q3: Briefly describe the etching process in PCB manufacturing.**

**Answer:**
The etching process is used to remove unwanted copper from the copper-clad board, leaving only the desired circuit traces and pads. It typically involves the following steps:
1.  **Photo-Resist Application & Exposure:** A light-sensitive photo-resist is applied to the copper-clad board. A mask containing the circuit pattern is placed over it, and the board is exposed to UV light. This hardens the photo-resist where the traces should be.
2.  **Developing:** The unexposed photo-resist is washed away, revealing the unwanted copper.
3.  **Etching:** The board is immersed in an etchant solution (e.g., ferric chloride). This solution dissolves the exposed copper.
4.  **Stripping:** The remaining hardened photo-resist is then removed, leaving the circuit pattern formed by the copper traces on the substrate.

**Q4: Why is Through-Hole Plating (PTH) important in PCB manufacturing?**

**Answer:**
Through-Hole Plating (PTH) is crucial for creating reliable electrical connections between different layers of a multi-layer PCB or between the two sides of a double-sided PCB. When holes are drilled for component leads or vias, PTH involves plating the inside walls of these holes with conductive material (usually copper). This plated hole acts as a continuous conductor, electrically connecting the traces on different layers or sides of the board. Without PTH, it would be impossible to route signals between layers, severely limiting the complexity and functionality of PCBs.

**Q5: Imagine you are designing a simple LED indicator circuit. Which type of PCB (single-sided or double-sided) would be most appropriate and why?**

**Answer:**
For a simple LED indicator circuit, a **single-sided PCB** would likely be the most appropriate and cost-effective choice.
*   **Reasoning:** A simple LED indicator circuit typically involves few components (an LED, a current-limiting resistor, and possibly a power source connection). These can be easily laid out and interconnected on a single layer of copper without requiring complex routing or crossovers. Using a double-sided PCB for such a simple circuit would be an unnecessary expense and over-complication. A single-sided board provides sufficient connectivity and mechanical support for this basic application. This demonstrates an understanding relevant to **CO6** – selecting the appropriate PCB type for a given circuit complexity.
