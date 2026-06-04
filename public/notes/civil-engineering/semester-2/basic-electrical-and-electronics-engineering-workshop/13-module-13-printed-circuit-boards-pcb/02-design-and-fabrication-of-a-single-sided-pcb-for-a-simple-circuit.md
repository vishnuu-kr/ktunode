---
title: "Design and fabrication of a single sided PCB for a simple circuit."
subject: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP"
module: "Module 13: Printed circuit boards (PCB) "
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912edf"
status: "completed"
scrapedAt: "2026-05-20T18:33:07.997Z"
---
# Module 13: Printed Circuit Boards (PCBs) - Design and Fabrication of a Single-Sided PCB

Welcome to Module 13! Today, we're going to dive into the fascinating world of Printed Circuit Boards, or PCBs. You've spent time learning about individual electronic components – resistors, capacitors, transistors, and the like – and how they work. Now, we’re going to learn how to bring them all together to build a functional circuit, not just on a breadboard, but in a more permanent and professional way. Specifically, we'll focus on designing and fabricating a *single-sided* PCB for a simple circuit.

You might wonder, why PCBs? Well, think about your mobile phone, your TV remote, or even the computer you might be using right now. They all have these green or brown boards with components soldered onto them. These are PCBs! They provide a robust and organized platform for connecting electronic components, making circuits more reliable, compact, and easier to manufacture. This is directly linked to **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB**. We start on a breadboard, which is great for prototyping, but for a finished product, the PCB is king.

## 1. What is a Printed Circuit Board (PCB)?

At its core, a PCB is a flat board made of insulating material, typically fiberglass, upon which conductive pathways, called **traces**, are etched. These traces are usually made of copper. Components are then soldered onto designated pads, which are connected by these traces.

Imagine a city map. The roads are like the traces, connecting different buildings (components) in an organized manner. A PCB does the same for electronic components, ensuring the correct flow of electricity.

### Types of PCBs

For our workshop, we're focusing on **single-sided PCBs**. What does that mean?

*   **Single-Sided PCB:** Has conductive copper traces on only one side of the insulating base material. This is the simplest and most common type for basic circuits.
*   **Double-Sided PCB:** Has copper traces on both sides of the base material. This allows for more complex connections and smaller circuit footprints.
*   **Multi-Layer PCB:** Has multiple layers of conductive material separated by insulating layers. These are used for very complex circuits with high component density, like in high-end smartphones or servers.

We'll be working with single-sided PCBs because they are fundamental and easier to fabricate in a workshop setting. This is crucial for understanding the basic principles before moving to more complex designs, aligning with **CO6**.

## 2. Designing a Single-Sided PCB: From Schematic to Layout

Before we can even think about making a PCB, we need a plan. This plan starts with a **schematic diagram**.

### The Schematic Diagram

A schematic diagram is a symbolic representation of an electronic circuit. It shows how components are connected, but not their physical layout. It’s like a blueprint for the electrical connections. For example, if we're making a simple LED flasher circuit, the schematic would show the battery, the blinking IC (like a 555 timer), a resistor, a capacitor, and the LED, all connected with lines representing wires.

This step is fundamental to **CO6** as it’s the first stage of applying design procedures. Understanding the schematic is also linked to **CO4: Identify various electronic components**, as you need to know what each symbol represents.

### PCB Layout Design

Once the schematic is finalized, we translate it into a physical layout on the PCB. This involves:

1.  **Component Placement:** Deciding where each component will sit on the board. Good placement is crucial. Components that generate a lot of heat should be spaced apart. Components that are frequently adjusted or accessed should be easily reachable. For our simple circuits, we'll aim for neatness and ease of soldering.
2.  **Trace Routing:** Drawing the copper paths (traces) that connect the component pins. For single-sided PCBs, we have to be mindful that traces can only be on one side. This means avoiding crossing traces. If two traces *must* cross, we can use a **jumper wire** (a small piece of insulated wire) to hop over one of them. This is a common technique in single-sided PCB design.

Think about arranging furniture in a room. You want to place things logically, make sure you can walk around, and ensure that the electrical outlets are accessible. PCB layout is similar – we want efficient connections without making it impossible to assemble.

**Software Tools:** While we can draw layouts manually, especially for simple circuits, professional design often uses **PCB Design Software** (also known as EDA – Electronic Design Automation software). Popular examples include:

*   **Eagle (Autodesk)**
*   **KiCad (Open Source)**
*   **EasyEDA**

These tools allow you to draw schematics, place components, and route traces automatically or manually. They can also check for design rule violations.

## 3. Fabrication of a Single-Sided PCB: The Etching Process

This is where the magic happens – turning our design into a tangible board. The most common method for workshop fabrication is **chemical etching**.

The basic process involves creating a mask on the copper-clad board that protects the desired traces, and then using a chemical etchant to remove the unwanted copper.

Let's break down the key steps involved in fabricating a single-sided PCB using the **etch resist method** (the most common in workshops):

### Step 1: Preparing the Copper-Clad Board

We start with a **copper-clad laminate**. This is a sheet of insulating material (like FR-4 fiberglass) with a thin layer of copper bonded to one side. You’ll need to cut this board to the required size for your circuit. Remember to wear safety glasses when cutting, as small pieces can fly off – this is a direct link to **CO1: Demonstrate safety measures against electrical shocks** and general workshop safety.

### Step 2: Transferring the PCB Design (The "Etch Resist" Layer)

This is a critical step. We need to transfer our layout design onto the copper surface of the board in a way that the copper we *want* to keep is protected from the etchant. There are several ways to do this:

*   **Toner Transfer Method (Laser Printer & Laminator):** This is very popular and effective.
    1.  Print your PCB layout design onto special **glossy photo paper** or **transfer paper** using a laser printer. It's crucial to print a *mirror image* of your layout if you're using this method, as the toner will be transferred onto the copper.
    2.  Sand the copper surface of the board lightly with fine-grit sandpaper or steel wool to remove any oxidation and create a clean surface for the toner to adhere to. Clean it thoroughly with a degreaser or alcohol.
    3.  Place the printed paper toner-side down onto the clean copper.
    4.  Use a laminator (heated) or a hot iron to transfer the toner from the paper onto the copper. The heat melts the toner, and the pressure helps it stick to the copper.
    5.  Carefully soak the board in warm water for a few minutes. The paper will soften, allowing you to gently peel or rub it off, leaving the toner (our etch resist) firmly adhered to the copper.
*   **Direct Etch Resist Pens:** For very simple designs, you can use special etch resist pens to draw the traces directly onto the copper. This is less precise but can work for basic circuits.
*   **Photoresist Method (More Advanced):** This involves coating the board with a light-sensitive chemical (photoresist). You then expose it to UV light through a mask of your PCB layout. The exposed areas harden, and the unexposed areas can be washed away, leaving the resist pattern. This is more precise but requires specialized equipment and chemicals.

We'll focus on the toner transfer method as it's accessible for workshop use and directly supports **CO6**. The key here is ensuring the toner transfer is complete, with no gaps or breaks in the traces. Any tiny gap will be etched away, breaking the connection.

### Step 3: Chemical Etching

Now, we remove the unwanted copper.

1.  **Prepare the Etchant:** The most common etchant for DIY PCBs is **Ferric Chloride (FeCl₃)**. It's a corrosive liquid, so **extreme caution and proper safety gear are paramount**. This is where **CO1** is extremely important: wear chemical-resistant gloves, eye protection (goggles), and an apron. Work in a well-ventilated area, away from children and pets.
2.  **The Etching Process:** Immerse the PCB in the ferric chloride solution. You can use a plastic tray or container. You'll see the exposed copper gradually dissolving.
    *   **Agitation:** Gently agitate the solution or the board to ensure fresh etchant comes into contact with the copper and speeds up the process. You can place the tray on a magnetic stirrer if available.
    *   **Temperature:** Heating the ferric chloride solution gently (e.g., placing the tray in a larger bath of warm water) can speed up etching. **Never use a microwave to heat ferric chloride!**
    *   **Monitoring:** Watch the process closely. You want all the unwanted copper to be gone, but you don't want the etchant to start attacking the protected traces.
3.  **Rinsing:** Once all the exposed copper is gone, carefully remove the PCB from the etchant using plastic tongs. Immediately rinse the board thoroughly with plenty of clean water.

This is the most dangerous part of the process due to the chemicals. Referencing **CO1** again, it’s about understanding the risks and taking precautions. **CO5: Select and Operate various measuring instruments** might seem distant here, but understanding the correct temperature for heating solutions (if applicable) or even measuring the concentration of the etchant are tasks that could involve measuring instruments.

### Step 4: Removing the Etch Resist

After rinsing, the toner resist needs to be removed to expose the copper traces.

*   Use a scouring pad or steel wool with a bit of soap or a solvent like **acetone** or **nail polish remover** to scrub away the toner. Clean the board again with water.

### Step 5: Drilling the Holes

Now that we have our copper traces and pads, we need to make holes for the component leads to pass through.

*   Use a **PCB drill press** or a **rotary tool** with very fine drill bits (typically 0.8mm to 1.0mm for most components).
*   Carefully align the drill bit with the center of each pad. Precision is key here.
*   Ensure you are wearing safety glasses and a dust mask, as drilling creates fine dust. This again links to **CO1** and general safety.
*   **CO6** is directly addressed here as we are physically creating the pathways for components.

### Step 6: Soldering the Components

This is the final assembly stage.

1.  **Component Insertion:** Insert the leads of the electronic components through the drilled holes from the non-copper side of the PCB. The leads will then be on the copper trace side, ready for soldering.
2.  **Soldering:** Using a soldering iron, solder wire, and flux, create a strong electrical and mechanical connection between the component leads and the copper pads.
    *   Ensure you achieve a good solder joint: shiny, smooth, and covering both the lead and the pad. Avoid "cold joints" (dull, lumpy solder), which are brittle and can cause intermittent connections.
    *   This step directly utilizes **CO6** by applying learned soldering techniques. It also involves **CO3: Illustrate the connection diagram and identify the suitable accessories necessary for wiring simple electric circuits**, as you’re connecting components as per the diagram. You'll also be using **CO5** skills if you're using a multimeter to check continuity before and after soldering.

### Step 7: Final Checks and Testing

*   **Visual Inspection:** Look for any solder bridges (unintended connections between adjacent traces or pads), cold joints, or components placed incorrectly.
*   **Continuity Test:** Use a multimeter (as per **CO5**) to check that all connections are as per the schematic and that there are no short circuits.
*   **Power Up:** Carefully apply power to your circuit and test its functionality.

## 4. Safety Considerations (Reiterated for Emphasis)

Working with chemicals and tools in PCB fabrication requires strict adherence to safety protocols.

*   **Chemicals:** Ferric chloride is corrosive. Always wear appropriate gloves, eye protection, and protective clothing. Work in a well-ventilated area. Keep chemicals away from food and water sources. Dispose of waste chemicals responsibly, as per local regulations.
*   **Tools:** Soldering irons are extremely hot. Use a soldering iron stand. Drill bits and cutting tools can cause injury. Always wear safety glasses.
*   **Electricity:** While fabricating the PCB itself doesn't involve electricity, the circuit *on* the PCB will. Always ensure power is off when making connections or modifications. Familiarize yourself with **CO1: Demonstrate safety measures against electrical shocks**.

## 5. Connecting to Course Outcomes

Let's recap how this entire process ties back to our course objectives:

*   **CO1: Demonstrate safety measures against electrical shocks:** This is paramount throughout the entire workshop, especially during chemical handling, drilling, and finally, testing the assembled circuit.
*   **CO2: Familiarise with transformers, rheostats, batteries and earthing schemes:** While not directly part of PCB fabrication, the circuit you *design* and *build* on the PCB will likely involve these components. Understanding their role in the circuit is essential for designing the PCB layout and ensuring proper connections.
*   **CO3: Illustrate the connection diagram and identify the suitable accessories necessary for wiring simple electric circuits:** The schematic diagram is your connection diagram. Identifying the components and planning their placement and connections on the PCB is what this outcome is all about. Accessories like solder, flux, and jumper wires (if needed) are also considered.
*   **CO4: Identify various electronic components:** You need to know what each component symbol in the schematic represents and what its physical form factor is to place it correctly on the PCB.
*   **CO5: Select and Operate various measuring instruments:** Multimeters are essential for checking continuity, voltage, and current. Even a simple thermometer might be used if you're heating etchant.
*   **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB:** This entire module is dedicated to this outcome. We go from schematic to layout to physical fabrication, applying design principles at each step.
*   **CO7: Build the ability to work in a team with good interpersonal skills:** PCB design and fabrication projects are often ideal for teamwork. One person might focus on the layout, another on drilling, and another on soldering, requiring communication and coordination.

## 6. Common Pitfalls and Exam Tips

*   **Exam Tip:** Expect questions on the *steps* of PCB fabrication, the *purpose* of each step, and *safety precautions*. They might ask about the difference between single-sided and double-sided PCBs or the advantages of using PCB design software.
*   **Pitfall:** Poor toner transfer is a very common issue leading to failed etching. Ensure your printer, paper, and transfer process are optimized.
*   **Pitfall:** Incomplete etching or over-etching. Over-etching can thin or break traces. Under-etching leaves unwanted copper shorts.
*   **Pitfall:** Incorrect drilling – not centering the holes on pads leads to bad solder joints.
*   **Pitfall:** Solder bridges. Always check carefully after soldering.

**Remember this:** A well-designed and fabricated PCB makes a circuit robust, reliable, and professional. It’s a fundamental skill for any electronics enthusiast or engineer.

---

## Sample Questions with Answers

**Q1. What is the primary purpose of the toner in the toner transfer method of PCB fabrication?**
**Answer:** The toner acts as an **etch resist**. It is a protective layer that prevents the chemical etchant (like Ferric Chloride) from dissolving the copper traces that we want to keep on the PCB. Only the copper *not* covered by the toner is removed during the etching process.

**Q2. Why is it important to print a mirror image of the PCB layout when using the toner transfer method with a laser printer?**
**Answer:** When you apply the printed paper onto the copper-clad board and then peel off the paper, the toner is transferred from the paper onto the copper. If you don't print a mirror image, the layout will be reversed on the copper, meaning the connections would be incorrect when you eventually solder components. Printing a mirror image ensures the layout is in the correct orientation on the copper after transfer.

**Q3. List the key safety precautions to be taken when working with Ferric Chloride during PCB etching.**
**Answer:**
1.  **Personal Protective Equipment (PPE):** Always wear chemical-resistant gloves, safety goggles or a face shield, and protective clothing (like an apron or lab coat).
2.  **Ventilation:** Work in a well-ventilated area or under a fume hood to avoid inhaling corrosive fumes.
3.  **Handling:** Use non-metallic tongs or tools to handle the PCB in the etchant and to retrieve it. Never use bare hands.
4.  **Storage and Disposal:** Store Ferric Chloride in a properly labeled, sealed container away from incompatible materials and out of reach of children. Dispose of waste etchant responsibly according to local environmental regulations.
5.  **First Aid:** Know the location of eyewash stations and safety showers. In case of skin contact, rinse immediately with plenty of water for at least 15 minutes and seek medical attention. For eye contact, rinse immediately and thoroughly and seek medical attention.

**Q4. Explain the significance of component placement and trace routing in PCB design.**
**Answer:**
*   **Component Placement:** It ensures efficient circuit operation, thermal management (spacing out heat-generating components), ease of assembly and repair, and a compact physical layout. Proper placement can significantly impact circuit performance and reliability.
*   **Trace Routing:** It defines the electrical connections between components. On single-sided PCBs, careful routing is needed to avoid trace crossovers, which might require the use of jumper wires. Routing affects signal integrity, impedance, and the overall density of components on the board.

**Q5. (Exam Scenario) You have fabricated a single-sided PCB, and after soldering the components, the LED in your circuit does not light up. You suspect a fault. Which troubleshooting step using a multimeter would be most appropriate first, and why?**
**Answer:** The most appropriate first step would be to perform a **continuity test** across the expected path of current flow to the LED and check for any **short circuits** between adjacent traces or power/ground rails.
*   **Reasoning:** Continuity testing with a multimeter (set to resistance or continuity mode) will verify if the copper traces are properly connected according to the schematic and if components are soldered correctly. If there's a break in the trace or a bad solder joint, continuity will be absent. Checking for short circuits will reveal if unwanted copper has been left behind or if solder has bridged between two points, which would prevent the circuit from functioning and could damage components. This directly relates to **CO5** (using measuring instruments) and **CO6** (applying design and build procedures).
