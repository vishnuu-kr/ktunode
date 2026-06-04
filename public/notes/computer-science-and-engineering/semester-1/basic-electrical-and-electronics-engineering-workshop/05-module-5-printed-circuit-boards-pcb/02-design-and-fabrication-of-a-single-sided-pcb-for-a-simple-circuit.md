---
title: "Design and fabrication of a single sided PCB for a simple circuit."
subject: "BASIC ELECTRICAL AND ELECTRONICS  ENGINEERING WORKSHOP"
module: "Module 5: Printed circuit boards (PCB) "
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5cd4"
status: "completed"
scrapedAt: "2026-05-20T16:36:50.606Z"
---
Welcome, future engineers! Today, we're diving into a topic that's the backbone of virtually all electronic devices you interact with – Printed Circuit Boards, or PCBs. Module 5 is all about understanding these crucial components, and our focus today is on the practical aspect: **Design and fabrication of a single-sided PCB for a simple circuit.**

Now, why is this so important? Think about your mobile phone, your computer, even that simple LED flashlight. Inside, all the electronic components are mounted and interconnected on a flat board. That board is a PCB! Without them, we’d be dealing with a tangled mess of wires, making everything bulky, unreliable, and impossible to repair. Our goal today is to understand how to create one of these fundamental building blocks ourselves.

This topic directly links to several of our Course Outcomes. Primarily, it addresses **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB** at a **K3 (Application)** level. We'll be taking a circuit idea and translating it onto a physical PCB. It also touches upon **CO4: Identify various electronic components** (K2 - Knowledge) as we’ll be placing them, and implicitly, **CO3: Illustrate the connection diagram and identify the suitable accessories necessary for wiring simple electric circuits** (K3 - Application) because the PCB design itself is a sophisticated connection diagram.

Let’s get started by understanding what a PCB *is* and why we use them.

## Understanding the Printed Circuit Board (PCB)

At its core, a PCB is a board made of a non-conductive material, usually fiberglass (like FR-4, which is common), with conductive pathways etched onto it. These pathways are typically made of copper. Imagine these pathways as tiny, precisely laid out wires connecting different electronic components.

### Why PCBs? The Advantages Over Traditional Wiring

Before PCBs became ubiquitous, circuits were often built using point-to-point wiring, where components were directly connected by wires. While this might seem straightforward, it had significant drawbacks:

*   **Bulk and Complexity:** Imagine trying to wire a modern smartphone this way! It would be a chaotic nest of wires, making it impossible to miniaturize.
*   **Reliability:** Each wire connection is a potential point of failure. Loose connections, shorts, or breaks could easily occur, leading to malfunctions.
*   **Manufacturability:** Building complex circuits by hand with wires was time-consuming, prone to errors, and difficult to scale for mass production.
*   **Cost:** While initial setup for wiring might seem cheap, the labor and error rates made it expensive for mass production.

PCBs solve all these problems. They offer:

*   **Miniaturization:** Components are mounted close together, allowing for compact designs.
*   **Reliability:** Connections are permanent and precisely etched, reducing failure points.
*   **Ease of Assembly:** Components can be automatically placed and soldered, speeding up production.
*   **Cost-Effectiveness:** Mass production of PCBs is highly efficient, driving down costs.

### Types of PCBs: A Quick Look

PCBs can be classified in several ways, but for our purpose today, the most relevant is by the number of conductive layers:

*   **Single-Sided PCBs:** These have copper on only **one side** of the insulating substrate. This is what we'll be focusing on. They are ideal for simple circuits and are the most cost-effective to produce.
*   **Double-Sided PCBs:** These have conductive copper layers on **both sides** of the substrate. This allows for more complex routing and component density.
*   **Multi-Layer PCBs:** These have three or more conductive layers, often separated by insulating layers. They are used for highly complex circuits found in advanced electronics like computers and high-speed communication devices.

Remember this: **for simple circuits, single-sided PCBs are the go-to.** They offer a good balance of functionality and ease of fabrication.

## Designing Your Simple PCB: From Concept to Blueprint

Before we can fabricate anything, we need a design. This is where **CO6** really comes into play. We'll be translating a schematic diagram of a simple circuit into a physical layout for the PCB.

### Step 1: The Schematic Diagram – The Circuit's DNA

Every PCB project starts with a circuit schematic. This is a symbolic representation of your circuit, showing how components are connected electrically. For our workshop, we'll likely be working with a very basic circuit – perhaps an LED blinking circuit using a 555 timer, a simple amplifier, or a power supply circuit.

*   **Example:** Let’s say we want to build a simple circuit to turn on an LED when it gets dark. This might involve a transistor, a resistor, and an LDR (Light Dependent Resistor). The schematic will show exactly how these are connected – which leg of the transistor connects to which resistor, and so on.

You might have already designed and breadboarded this circuit (which relates to **CO6** and **CO3**). The schematic is simply the formal representation of that working circuit.

### Step 2: PCB Layout Design – Translating the Schematic to a Physical Map

This is the crucial step where we decide where each component will sit on the PCB and how the copper traces (the conductive pathways) will connect them.

#### Key Concepts in PCB Layout Design:

1.  **Components Placement:**
    *   **Grouping:** Place related components together. For instance, if you have a power input and a voltage regulator, keep them near each other.
    *   **Heat Dissipation:** If you have components that generate heat (like voltage regulators or power transistors), place them where they have some space or can benefit from airflow.
    *   **Signal Flow:** Try to arrange components logically to minimize the length of signal traces.
    *   **Connectors:** Place input/output connectors near the edges of the board for easy access.
    *   **Clearances:** Ensure there's enough space between components for soldering and future modifications.

    *Think of it like designing a city layout.* You wouldn't put the residential area right next to the noisy factory. You group similar functions and ensure good access roads (the traces).

2.  **Trace Routing:**
    *   **Trace Width:** The width of a trace is critical. Thicker traces are used for higher current paths (like power supply lines), while thinner traces are sufficient for low-current signals. A good rule of thumb, often referenced in design guides, is that trace width should be proportional to the current it carries to avoid overheating. (This relates to basic electrical principles you'd learn in **CO1** and **CO3**.)
    *   **Avoiding Sharp Angles:** Try to make traces bend at 90-degree angles rather than sharp 45-degree turns. Sharp turns can cause signal reflections, especially in high-frequency circuits.
    *   **Minimal Crossing:** Try to route traces without them crossing over each other. On a single-sided PCB, this can be challenging. If crossing is unavoidable, you might need to use a jumper wire or rethink the layout.
    *   **Clearance:** Maintain adequate spacing between traces to prevent short circuits, especially where voltage differences are high.

3.  **Vias (for multi-layer, but good to know):** A via is a plated hole that connects traces on different layers. Since we're focusing on single-sided PCBs, we won't be using vias for layer-to-layer connections. However, sometimes a via is used to connect a component pad to a trace on the same side, or as a point to solder a jumper wire if routing becomes difficult.

4.  **Ground Planes and Power Planes (less critical for simple single-sided but good to be aware of):** For more complex boards, sections of copper are often dedicated to ground or power distribution. For our simple circuit, we might just use wider traces for power and ground.

#### PCB Design Software: Your Digital Drafting Board

Traditionally, PCB layouts were drawn manually. Today, we use specialized software. Some popular options include:

*   **KiCad:** A free and open-source suite that's very powerful.
*   **Eagle (now Autodesk Fusion 360 Electronics):** A widely used industry standard, with a free version for hobbyists.
*   **EasyEDA:** A web-based tool, great for beginners.

These software packages allow you to:
*   Draw your schematic.
*   Import the netlist (the list of connections) into the layout editor.
*   Place components visually.
*   Route traces between component pads.
*   Generate design files, like Gerber files, which are used for manufacturing.

For our workshop, we might be using simplified versions or even manual methods for educational purposes, but understanding the role of software is essential.

## Fabricating Your Single-Sided PCB: Bringing the Design to Life

This is where the "workshop" aspect really shines. We'll be physically creating the PCB from our design. There are several methods, but we’ll focus on a common and accessible one.

### Method: The Etching Process

The most common method for fabricating single-sided PCBs in a workshop environment involves etching away unwanted copper from a copper-clad board, leaving only the desired traces and pads.

#### Materials and Tools You'll Need:

*   **Copper Clad Board:** A substrate (usually fiberglass) coated with a thin layer of copper on one side.
*   **Your PCB Layout Design:** Printed out to the exact size of the board.
*   **Cutting Tools:** A hacksaw or a PCB cutting tool for sizing the board.
*   **Drilling Tools:** A small drill press or a Dremel with fine drill bits (e.g., 0.8mm, 1mm) for making holes for component leads.
*   **Etching Process:**
    *   **Etchant:** A chemical solution that dissolves copper. Ferric Chloride ($\text{FeCl}_3$) is common, or Ammonium Persulfate ($\text{(NH}_4)_2\text{S}_2\text{O}_8$). **Safety first here!** These are corrosive chemicals. Always wear gloves and eye protection. (This directly relates to **CO1: Demonstrate safety measures against electrical shocks.** While this isn't about electric shock, safety with chemicals is paramount in a workshop.)
    *   **Plastic Container:** For the etching solution.
    *   **Water:** For rinsing.
    *   **Gloves and Eye Protection:** Absolutely essential.
*   **Cleaning Supplies:** Fine sandpaper, scrub brush, acetone or isopropyl alcohol for cleaning the copper surface.
*   **Transfer Method:** To get your layout onto the copper. Common methods include:
    *   **Toner Transfer Method:** Printing the layout onto glossy paper (like magazine paper or dedicated toner transfer paper) using a laser printer, then ironing it onto the copper. The toner acts as a resist.
    *   **Marker Method:** Using a permanent marker (like a Sharpie) to draw the traces directly onto the copper. This is best for very simple, straightforward designs.
*   **Soldering Iron and Solder:** For attaching components later.
*   **Flux:** To ensure good solder joints.
*   **Component Leads/Wires:** For jumper wires if needed.

#### Step-by-Step Fabrication Process:

1.  **Prepare the Copper Clad Board:**
    *   Cut the copper clad board to the required size using your design. Measure twice, cut once!
    *   Clean the copper surface thoroughly. Use fine sandpaper to remove any oxidation, then wash it with soap and water, and finally wipe it clean with acetone or isopropyl alcohol. The surface needs to be pristine for the toner or marker to adhere well.

2.  **Transfer the Design:**
    *   **Toner Transfer Method:**
        *   Print your PCB layout design from your CAD software onto glossy paper using a **laser printer**. Ensure the printout is mirrored if your software doesn't do it automatically (though most do for toner transfer). The toner is the protective layer.
        *   Place the printed paper face down onto the cleaned copper surface.
        *   Use a hot iron (on a high setting, no steam) to carefully iron over the paper for several minutes. Apply firm, even pressure. The heat melts the toner, transferring it to the copper.
        *   Let it cool completely, then carefully peel off the paper. If the transfer is poor, try again.
    *   **Marker Method:**
        *   For very simple circuits, you can directly draw the traces onto the cleaned copper using a permanent marker. Be neat and ensure there are no gaps or breaks in your lines.

3.  **Check the Transfer:**
    *   Inspect the transferred design under good light. Ensure all traces are solid, and there are no unintended breaks or bridges (where traces touch that shouldn't). Touch up any imperfections with a permanent marker.

4.  **Etching:**
    *   **Safety First:** Put on your gloves and eye protection.
    *   Prepare the etchant solution according to the manufacturer's instructions. Ferric Chloride usually requires mixing with warm water. Ammonium Persulfate is often a powder mixed with water.
    *   Place the copper clad board into the plastic container with the etchant solution, with the copper side facing up.
    *   Gently agitate the container or the board. Warming the etchant solution slightly (e.g., in a warm water bath, never directly on a stove!) can speed up the process.
    *   Watch the unwanted copper disappear. This can take anywhere from 15 minutes to over an hour, depending on the etchant and temperature. The areas covered by toner or marker will be protected.
    *   Once all the exposed copper is etched away, remove the board from the etchant.

5.  **Rinse and Clean:**
    *   Thoroughly rinse the board with clean water to remove all traces of etchant.
    *   Use a scrub brush and soap to remove the toner or marker. You should now see your copper traces clearly defined on the non-conductive substrate.

6.  **Drilling Holes:**
    *   Using a drill press or Dremel with the appropriate drill bit size, carefully drill holes for the component leads and any mounting holes. Ensure you align the drill bit with the center of the pads on your design. This requires precision to connect to the right traces.

7.  **Component Mounting and Soldering:**
    *   Now comes the fun part! Insert the component leads through the drilled holes on the component side of the PCB.
    *   Bend the leads slightly on the solder side to hold the components in place.
    *   Using your soldering iron, flux, and solder, carefully solder each component lead to its corresponding pad. Aim for clean, shiny solder joints – not dull or lumpy ones. A good solder joint is key for reliability, directly linking back to **CO6**.

8.  **Final Inspection:**
    *   Inspect your soldering. Ensure there are no solder bridges (unwanted connections between adjacent pads) and that all components are securely attached.
    *   Trim any excess component leads.
    *   You can optionally add a layer of protective lacquer (like a PCB conformal coating or even clear nail polish for a quick fix) over the traces to prevent oxidation and accidental shorts, though this isn't always necessary for simple workshop projects.

## Connecting to Course Outcomes: A Recap

Let's quickly tie this back to our Course Outcomes to ensure you see the full picture:

*   **CO1 (Safety):** We emphasized safety when handling etching chemicals and using tools like drills and soldering irons. Always follow lab safety guidelines!
*   **CO3 (Accessories/Wiring):** The PCB layout itself is an advanced wiring diagram. Choosing trace widths, clearances, and component placement all fall under designing the "wiring" for the circuit.
*   **CO4 (Component Identification):** As we place components on the PCB, you'll be identifying them by their shape and the pads they connect to.
*   **CO5 (Measuring Instruments):** While not directly fabricating, during the design phase (e.g., checking trace widths, signal integrity), you might use instruments like multimeters or oscilloscopes. During testing after soldering, these are essential.
*   **CO6 (Breadboard to PCB):** This entire topic is about moving from a conceptual circuit (often first proven on a breadboard) to a permanent PCB. It’s a core skill for any electronics engineer.
*   **CO7 (Teamwork):** In a workshop setting, you'll likely collaborate with peers, sharing tools, knowledge, and helping each other with challenging steps, fostering good interpersonal skills.

## Common Pitfalls and Exam Tips

*   **Toner Transfer Issues:** This is a common sticking point. Not using a laser printer, insufficient heat, or a dirty copper surface can lead to poor transfers. **Tip:** Practice the transfer method beforehand if possible. Ensure your printer toner is dense.
*   **Etching Problems:** Over-etching can eat away at your traces, while under-etching leaves unwanted copper. **Tip:** Monitor the process closely, agitate consistently, and consider the temperature of the etchant.
*   **Drilling Accuracy:** Off-center drilling can disconnect a component from its trace. **Tip:** Use a drill press with a steady hand or a guiding jig if available.
*   **Soldering Bridges:** Unwanted connections between pads are a frequent error. **Tip:** Use a fine-tipped soldering iron, apply just enough solder, and use a desoldering wick or pump if a bridge occurs.
*   **Exam questions often focus on:** the steps involved in PCB fabrication, safety precautions, the purpose of each step (especially etching and transfer), and the advantages of using PCBs over other wiring methods. They might also ask to identify potential problems in a given PCB layout or fabrication step.
