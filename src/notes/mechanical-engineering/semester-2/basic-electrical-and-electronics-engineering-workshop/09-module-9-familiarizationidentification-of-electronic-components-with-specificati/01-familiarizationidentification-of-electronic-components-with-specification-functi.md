---
title: "Familiarization/Identification of electronic components with specification (Functionality, type, size, colour coding, package, symbol and cost of -Active, Passive, Electrical, Electronic, Electro-mechanical, Wires, Cables, Connectors, Fuses, Switches, Relays, Crystals, Displays, Fasteners, Heat sink etc.)"
subject: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP"
module: "Module 9: Familiarization/Identification of electronic components with specification (Functionality, type, size, colour coding, package, symbol and cost of "
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edefeb4799d95e836d4"
status: "completed"
scrapedAt: "2026-05-20T17:41:42.104Z"
---
# Module 9: Familiarization/Identification of Electronic Components with Specifications

Welcome, everyone, to Module 9 of our Basic Electrical and Electronics Engineering Workshop! Today, we’re diving into a fundamental, yet incredibly important, aspect of our field: **familiarizing ourselves with and identifying electronic components based on their specifications.** Think of this as learning the alphabet and grammar of electronics. You can’t build a sentence, let alone a circuit, if you don’t know the basic building blocks. This module directly supports our **Course Outcome 4 (CO4): Identify various electronic components (Knowledge Level: K2)**, and as we’ll see, it’s foundational for many other outcomes like CO6 (applying design procedures) and even CO3 (selecting necessary accessories for wiring).

Our goal today is to go beyond just seeing these little pieces of plastic and metal; we want to understand what they are, what they do, how to read their markings, and why they are chosen for specific jobs. We'll be covering a wide range of components, from the simple resistors and capacitors to more complex relays and displays.

## Why Identification and Specification Matter

Before we jump into specific components, let’s ask ourselves: *Why is this so crucial?*

Well, imagine you're building a circuit, maybe from a design you've worked on. If you pick the wrong resistor, your circuit might not work as intended, or worse, it could be damaged. If you use a wire that’s too thin for the current, it could overheat and even start a fire. This is where our **Course Outcome 1 (CO1): Demonstrate safety measures against electrical shocks (Knowledge Level: K2)** comes into play. Knowing your components helps you prevent hazardous situations.

Furthermore, when we talk about cost-effectiveness in electrical design, as mentioned in textbooks like Raina and Bhattacharya's "Electrical Design Estimating and Costing," selecting the *right* component in terms of size, power rating, and type directly impacts the overall project cost and reliability. So, understanding specifications isn't just about making a circuit work; it’s about making it work *safely*, *reliably*, and *economically*.

We’ll be exploring these specifications through the lens of functionality, type, size, colour coding, package, symbol, and cost. Let's break these down.

## Key Specifications of Electronic Components

When we pick up an electronic component, we're looking for specific pieces of information. These are like the component’s ID card.

*   **Functionality:** What does this component *do* in a circuit? Does it resist current? Does it store charge? Does it switch a signal? This is its primary purpose.
*   **Type:** Within its functionality, what specific *kind* of component is it? For example, for resistors, are they carbon film, metal film, or wirewound? For capacitors, are they ceramic, electrolytic, or tantalum?
*   **Size:** This refers to both the physical dimensions of the component and its power/voltage/current ratings. A small resistor might handle only a fraction of a watt, while a larger one could handle several watts. This is crucial for preventing overheating and ensuring durability.
*   **Colour Coding:** This is a visual system used to indicate the value (and sometimes tolerance or voltage rating) of components, especially resistors and some capacitors. It's a quick way for technicians to identify values without needing to print them directly on tiny components. We'll spend a good amount of time on this!
*   **Package:** This is the physical form the component takes, how it’s housed and how it connects to the circuit board. Common packages include through-hole (with leads that go through holes) and surface-mount (that sit on the surface of the PCB). The package affects how it’s mounted, its heat dissipation, and even its susceptibility to physical stress.
*   **Symbol:** Every component has a standardized graphical representation used in circuit diagrams (schematics). Recognizing these symbols is essential for reading and understanding circuit designs, directly linking to our ability to illustrate connection diagrams (CO3).
*   **Cost:** While not always explicitly marked, the cost is a significant factor in component selection, especially in larger-scale designs. We'll touch upon how type, quality, and volume influence cost.

## Categorizing Electronic Components

To make sense of the vast number of components, we can broadly classify them into a few major categories. This helps us understand their roles within electronic systems.

### 1. Passive Components

These are the workhorses that don't amplify or control the flow of electrical energy. They simply store, dissipate, or limit energy. Think of them as the passive supporters in a team.

*   **Resistors:**
    *   **Functionality:** To oppose or limit the flow of electric current. They convert electrical energy into heat.
    *   **Type:** Carbon-film, Metal-film, Wirewound, Potentiometers (variable resistors), Thermistors (resistance changes with temperature), LDRs (Light Dependent Resistors, resistance changes with light).
    *   **Size/Rating:** Measured in Ohms ($\Omega$), with power ratings in Watts (W). A small 1/4W resistor is very different from a 5W power resistor.
    *   **Colour Coding:** The most common way to identify resistor values. We’ll cover this in detail shortly.
    *   **Package:** Through-hole (axial leads), Surface-mount (SMD) packages like chip resistors.
    *   **Symbol:** A zigzag line or a rectangle.
    *   **Cost:** Generally very inexpensive, especially common carbon-film types. Power resistors and specialized types can be more costly.
    *   **Analogy:** Think of a resistor as a narrow pipe in a water system that restricts the flow.

*   **Capacitors:**
    *   **Functionality:** To store electrical energy in an electric field. They block DC current once charged but allow AC current to pass.
    *   **Type:** Ceramic, Electrolytic (polarised, high capacitance), Tantalum (similar to electrolytic but smaller), Film (polyester, polypropylene), Variable capacitors.
    *   **Size/Rating:** Measured in Farads (F), typically in microfarads ($\mu$F), nanofarads (nF), or picofarads (pF). They also have voltage ratings (e.g., 10V, 25V, 450V). Exceeding the voltage rating can cause them to fail catastrophically.
    *   **Colour Coding:** Some older ceramic capacitors and some small film capacitors use colour bands. More commonly, values are printed directly as numbers or alphanumeric codes. Electrolytic capacitors often have a stripe indicating the negative terminal.
    *   **Package:** Through-hole (radial or axial leads), Surface-mount (SMD) packages.
    *   **Symbol:** Two parallel lines (one may be curved for polarized capacitors).
    *   **Cost:** Varies significantly. Ceramic and aluminum electrolytic capacitors are cheap. Tantalum and high-quality film capacitors can be more expensive.
    *   **Analogy:** A capacitor is like a small, temporary water tank that can store water and release it quickly.

*   **Inductors:**
    *   **Functionality:** To store energy in a magnetic field when electric current flows through them. They oppose changes in current.
    *   **Type:** Air-cored, Iron-cored, Toroidal. Often found in filters and power supplies.
    *   **Size/Rating:** Measured in Henries (H), typically in millihenries (mH) or microhenries ($\mu$H). They also have current ratings.
    *   **Colour Coding:** Less common than for resistors. Values are usually printed.
    *   **Package:** Through-hole, often with wire leads. Surface-mount inductors are also common.
    *   **Symbol:** A coil or series of loops.
    *   **Cost:** Generally more expensive than resistors and common capacitors, especially those with iron cores or high current ratings.
    *   **Analogy:** An inductor is like a heavy flywheel that resists changes in its speed of rotation.

### 2. Active Components

These components can amplify or control the flow of electrical energy. They require a power source to operate and can provide gain. They are the "brains" or "muscles" of the circuit.

*   **Diodes:**
    *   **Functionality:** To allow current to flow in only one direction. They are like one-way valves for electricity.
    *   **Type:** Rectifier diodes (for converting AC to DC), Zener diodes (for voltage regulation), LEDs (Light Emitting Diodes – emit light when current flows), Photodiodes (convert light to current), Schottky diodes (fast switching, low voltage drop).
    *   **Size/Rating:** Rated by their forward voltage drop, reverse voltage (PIV - Peak Inverse Voltage), and forward current.
    *   **Colour Coding:** Usually a band or marking on one end (cathode) indicates the direction.
    *   **Package:** Through-hole (e.g., DO-41, DO-201), Surface-mount (e.g., SOD-123, DO-214AA). LEDs have distinct physical appearances with a flat spot or longer lead indicating polarity.
    *   **Symbol:** An arrowhead pointing towards a line.
    *   **Cost:** Very inexpensive for standard rectifier diodes and LEDs. Zener diodes and specialized diodes can be slightly more.
    *   **Analogy:** A diode is like a one-way check valve in plumbing, allowing water to flow in only one direction.

*   **Transistors:**
    *   **Functionality:** Act as electronically controlled switches or amplifiers. They use a small input signal to control a larger output current.
    *   **Type:** Bipolar Junction Transistors (BJTs – NPN and PNP), Field-Effect Transistors (FETs – JFETs, MOSFETs).
    *   **Size/Rating:** Rated by their voltage (Vce for BJT, Vds for FET), current (Ic for BJT, Id for FET), and power dissipation.
    *   **Colour Coding:** Typically printed numbers or codes identifying the type and manufacturer.
    *   **Package:** Through-hole (e.g., TO-92, TO-220 – often with a heatsink tab), Surface-mount (e.g., SOT-23, TO-263).
    *   **Symbol:** Several variations depending on BJT or FET type, showing three terminals (Base/Gate, Collector/Drain, Emitter/Source).
    *   **Cost:** Generally inexpensive for small signal transistors. Power transistors and specialized high-frequency transistors can be more costly.
    *   **Analogy:** A transistor is like a faucet where a small turn of the handle (base/gate signal) controls a large flow of water (collector/drain current).

*   **Integrated Circuits (ICs) / Microchips:**
    *   **Functionality:** Contain a complete electronic circuit or a complex logic function on a single silicon chip. They can be amplifiers, microprocessors, memory, logic gates, etc.
    *   **Type:** Operational Amplifiers (Op-Amps), Logic Gates (AND, OR, NOT), Microcontrollers, Memory chips (RAM, ROM), Voltage Regulators.
    *   **Size/Rating:** Defined by the number of pins, complexity, and specific function.
    *   **Colour Coding:** Manufacturers’ part numbers are printed on the chip. A dot or notch often indicates pin 1.
    *   **Package:** Dual In-line Package (DIP – through-hole), Plastic Leaded Chip Carrier (PLCC), Ball Grid Array (BGA), Small Outline Integrated Circuit (SOIC – surface mount).
    *   **Symbol:** A rectangular block with pins shown extending from its sides.
    *   **Cost:** Varies enormously from a few cents for simple logic gates to hundreds or thousands of dollars for complex microprocessors.

### 3. Electro-mechanical Components

These components use electrical energy to operate a mechanical switch or device. They bridge the gap between electrical control and mechanical action.

*   **Switches:**
    *   **Functionality:** To make or break an electrical connection, thereby controlling the flow of current.
    *   **Type:** Toggle switches, Push-button switches, Slide switches, Rotary switches, DIP switches, Rocker switches. Can be SPST (Single Pole Single Throw), SPDT, DPST, DPDT, etc., indicating the number of poles (circuits) and throws (positions).
    *   **Size/Rating:** Rated by current and voltage handling capacity.
    *   **Colour Coding:** Not typically used for value. Colour of the actuator might indicate function or style.
    *   **Package:** Various physical forms, usually with screw terminals or solder lugs for connection.
    *   **Symbol:** Depicts contacts that open or close.
    *   **Cost:** From very cheap for simple push-buttons to more expensive for heavy-duty or specialized switches.
    *   **Analogy:** A light switch is the classic example – it physically connects or disconnects the wire to the bulb.

*   **Relays:**
    *   **Functionality:** An electrically operated switch. A coil, when energized by a small current, generates a magnetic field that moves contacts to open or close a separate, often higher-power, circuit.
    *   **Type:** Power relays, Signal relays, Latching relays, Reed relays. Classified by coil voltage (e.g., 5V DC, 12V DC, 24V AC) and contact configuration (SPST, SPDT, DPDT, etc.) and rating.
    *   **Size/Rating:** Coil voltage and current, contact voltage and current rating.
    *   **Colour Coding:** Not typically used for value.
    *   **Package:** Often enclosed in a plastic casing with pins for plugging into sockets or soldering onto PCBs. Some are open-frame.
    *   **Symbol:** Shows a coil and contacts.
    *   **Cost:** Moderate. More complex than simple switches but very versatile.
    *   **Analogy:** Imagine a remote-controlled gate. You use a small electrical signal to open or close the gate, which might be controlling a much larger, heavier door.

### 4. Other Essential Components & Materials

These are crucial for building, housing, and protecting circuits.

*   **Wires and Cables:**
    *   **Functionality:** To conduct electrical current between components and systems.
    *   **Type:** Solid core vs. Stranded core (stranded is more flexible), various insulation materials (PVC, Teflon, Silicone), shielded cables (for noise reduction), coaxial cables (for high frequency), flat ribbon cables.
    *   **Size:** Defined by **gauge** (AWG – American Wire Gauge, or mm²). Lower AWG numbers indicate thicker wires, capable of carrying more current. This is critical for **CO1 (Safety)** and **CO3 (Wiring Accessories)**.
    *   **Colour Coding:** Often used for identification in wiring systems (e.g., Black/Blue for neutral, Brown/Red for live, Green/Yellow for earth). This is important for safe and correct connections.
    *   **Package:** Sold in spools or cut lengths.
    *   **Cost:** Depends on material, gauge, insulation, and length. Copper is the standard conductor.

*   **Connectors:**
    *   **Functionality:** To provide a removable or secure connection point between wires, cables, components, or equipment.
    *   **Type:** Terminal blocks, Spade connectors, Ring connectors, Banana plugs and jacks, RCA connectors, USB connectors, D-sub connectors, Header pins.
    *   **Size:** Defined by the number of pins/contacts and the type of connection they make. Current and voltage ratings are also important.
    *   **Colour Coding:** Sometimes used for specific types of connectors (e.g., audio jacks, power connectors) to prevent misconnections.
    *   **Package:** The connector itself, often with housing.
    *   **Cost:** Varies from very cheap for basic terminal blocks to expensive for specialized high-speed or waterproof connectors.

*   **Fuses:**
    *   **Functionality:** A safety device designed to protect electrical circuits from overcurrent. It contains a wire that melts and breaks the circuit when the current exceeds a safe level.
    *   **Type:** Cartridge fuses (glass or ceramic body), Blade fuses (automotive style), Resettable fuses (PTC fuses). Rated by current (Amperes, A) and voltage (Volts, V).
    *   **Size:** Physical dimensions vary, as do their current/voltage ratings.
    *   **Colour Coding:** Often, the plastic body or end caps are coloured to indicate the fuse rating (e.g., Red for 1A, Blue for 2A, Green for 3A, Grey for 5A, Brown for 10A, Blue for 15A, Yellow for 20A, Clear/Black for 25A, White for 30A – though colours can vary by manufacturer).
    *   **Package:** Cylindrical or blade-shaped, with metal end caps or contacts.
    *   **Symbol:** A rectangle with a line through it.
    *   **Cost:** Very inexpensive safety components.
    *   **Analogy:** A fuse is like a weak link in a chain, designed to break first to protect the rest of the chain from damage.

*   **Crystals (Crystal Oscillators):**
    *   **Functionality:** To produce a very precise and stable frequency signal when a voltage is applied. They are the "heartbeat" for microcontrollers and digital circuits.
    *   **Type:** HC-49/US, SMD packages. Defined by their fundamental frequency (e.g., 16 MHz, 32.768 kHz) and tolerance.
    *   **Size:** Typically small metal cans or surface-mount packages.
    *   **Colour Coding:** Not used. Frequency is printed on the component.
    *   **Package:** Through-hole metal can, or surface-mount chip.
    *   **Symbol:** A circle with two or more terminals and sometimes an indication of frequency.
    *   **Cost:** Relatively inexpensive, but precise or high-frequency crystals can cost more.

*   **Displays:**
    *   **Functionality:** To visually present information, often numerical or textual.
    *   **Type:**
        *   **LED Displays:** Seven-segment displays (for numbers), dot matrix displays (for characters/graphics).
        *   **LCD Displays (Liquid Crystal Displays):** Character LCDs (e.g., 16x2, 20x4), Graphic LCDs.
        *   **OLED Displays (Organic Light Emitting Diodes):** Brighter, higher contrast displays.
    *   **Size:** Varies greatly depending on the number of digits/characters and physical dimensions.
    *   **Colour Coding:** Not applicable for the display itself, but associated components or connectors might use colour.
    *   **Package:** Typically a module with pins or a connector for interfacing.
    *   **Symbol:** Varies, often a block representing the display area with connection points.
    *   **Cost:** Varies from a few dollars for simple seven-segment LEDs to tens or hundreds of dollars for advanced graphic displays.

*   **Fasteners:**
    *   **Functionality:** While not electronic components themselves, screws, nuts, bolts, and standoffs are crucial for mechanical assembly, mounting components (like heatsinks), and securing enclosures. They ensure the physical integrity of a project.
    *   **Type:** Machine screws, wood screws, nuts (hex, lock), washers, standoffs (for mounting PCBs away from chassis).
    *   **Size:** Defined by thread size (e.g., M3, M4, #4-40) and length.
    *   **Cost:** Very low cost.

*   **Heatsinks:**
    *   **Functionality:** To dissipate excess heat generated by power-hungry components (like transistors, power regulators, CPUs) into the surrounding air, preventing them from overheating and failing. This is vital for component longevity and circuit reliability.
    *   **Type:** Extruded aluminum, stamped metal, bonded fin. Can be passive (rely on airflow) or active (with a fan).
    *   **Size:** Determined by the thermal resistance required (degrees Celsius per Watt) and the physical space available.
    *   **Colour Coding:** Not used for value, but surface coatings can affect heat dissipation.
    *   **Package:** Typically a finned metal component, often with screw holes or a clip mechanism. Thermal paste is often used between the component and the heatsink.
    *   **Cost:** Ranges from inexpensive for small passive heatsinks to quite costly for large, high-performance active heatsinks.

## Understanding Resistor Colour Coding (A Deeper Dive)

This is a classic topic, and understanding it is essential for identifying resistors, directly supporting **CO4**. Let's dedicate a moment to this.

Resistors have coloured bands that represent their resistance value and tolerance. For a standard 4-band resistor:

*   **Band 1:** First digit of the resistance value.
*   **Band 2:** Second digit of the resistance value.
*   **Band 3:** Multiplier (the number of zeros to add, or power of 10).
*   **Band 4:** Tolerance (how much the actual resistance can vary from the stated value).

Here’s the colour code:

| Colour    | Digit | Multiplier | Tolerance |
| :-------- | :---- | :--------- | :-------- |
| Black     | 0     | $10^0$ (1)  | -         |
| Brown     | 1     | $10^1$ (10) | ±1%       |
| Red       | 2     | $10^2$ (100)| ±2%       |
| Orange    | 3     | $10^3$ (1k) | -         |
| Yellow    | 4     | $10^4$ (10k)| -         |
| Green     | 5     | $10^5$ (100k)| ±0.5%     |
| Blue      | 6     | $10^6$ (1M) | ±0.25%    |
| Violet    | 7     | $10^7$ (10M)| ±0.1%     |
| Grey      | 8     | $10^8$      | ±0.05%    |
| White     | 9     | $10^9$      | -         |
| Gold      | -     | $10^{-1}$ (0.1)| ±5%       |
| Silver    | -     | $10^{-2}$ (0.01)| ±10%      |
| None      | -     | -          | ±20%      |

**Example:** A resistor with bands **Brown, Black, Red, Gold** would be:
*   Band 1 (Brown): 1
*   Band 2 (Black): 0
*   Band 3 (Red): x 100
*   Band 4 (Gold): ±5% tolerance

So, the value is 10 * 100 = 1000 Ohms, or 1 k$\Omega$, with a tolerance of ±5%. This means the actual resistance could be anywhere between 950 $\Omega$ and 1050 $\Omega$.

**5-Band Resistors:** Used for higher precision resistors.
*   Band 1: First digit
*   Band 2: Second digit
*   Band 3: Third digit
*   Band 4: Multiplier
*   Band 5: Tolerance

**Common Pitfall:** Sometimes the bands can be close together, making it hard to tell if you're starting from the "left" or "right." Usually, the gold or silver tolerance band is set slightly apart, or there’s a wider gap before the multiplier band if you're reading from the correct end. Also, look for the first digit band – it's rarely black.

**Exam Tip:** Be prepared to read colour codes, calculate resistance, and determine the range of acceptable values. You might also be asked to identify common tolerance values associated with colours.

## Connecting Components to Course Outcomes

Let's quickly recap how this module ties into our broader learning objectives:

*   **CO1 (Safety):** Understanding wire gauge, fuse ratings, and component power ratings is vital to prevent hazards like overheating and shorts.
*   **CO2 (Familiarization with specific components):** While this module covers a broad range, it directly aids in recognizing components like rheostats (variable resistors) and understanding the basics of batteries (as power sources for active components).
*   **CO3 (Wiring Diagrams & Accessories):** Recognizing component symbols is crucial for reading schematics. Knowing about connectors, wires, and terminal blocks helps in selecting the right accessories for making connections.
*   **CO4 (Identify various electronic components):** This is the primary focus of the module. We are learning to distinguish between active and passive, identify types, read markings, and understand their basic functions.
*   **CO5 (Operate measuring instruments):** Knowing the specs of a component helps us choose the correct instrument (e.g., a multimeter set to Ohms, Volts, or Amps) and range to measure its properties or test its function.
*   **CO6 (Apply design procedures):** You can't design or build a circuit if you don't know what components to use and what their limitations are. This module provides that foundational knowledge.
*   **CO7 (Teamwork):** When working in a lab, effectively communicating about components requires a shared understanding of their names, functions, and specifications.

## Summary and Key Takeaways

Today, we've covered a lot of ground, moving from basic definitions to specific component types and their critical specifications. Remember these key points:

*   **Every component has an ID:** Function, type, size/ratings, colour coding, package, symbol, and cost are all important for selection and use.
*   **Passive vs. Active:** Passive components (R, C, L) store, dissipate, or limit energy. Active components (diodes, transistors, ICs) control or amplify energy and require a power source.
*   **Safety First:** Always consider power ratings, voltage limits, and appropriate wire gauges to ensure safe operation.
*   **Color Codes are a Language:** Learn the resistor colour code and understand common markings on other components.
*   **Context is Key:** The "best" component depends on the application. A cheap carbon film resistor might be fine for a simple indicator circuit, but a precision metal film resistor is needed for accurate measurement.

This module is the bedrock for all practical work you'll do in the workshop. The more familiar you become with these components, the more confident and capable you will be in building and troubleshooting circuits. Keep this information readily accessible as you continue your learning journey!

---

## Sample Questions with Answers

**Question 1 (Conceptual):** Explain the difference between a passive and an active electronic component, providing an example of each.

**Answer:**
Passive components are those that do not provide amplification or gain and cannot control the flow of electrical energy. They typically dissipate, store, or limit energy. Examples include **Resistors** (which limit current and dissipate energy as heat), **Capacitors** (which store energy in an electric field), and **Inductors** (which store energy in a magnetic field).

Active components, on the other hand, require an external power source to operate and can amplify or control the flow of electrical energy. Examples include **Transistors** (which can amplify a signal or act as a switch) and **Integrated Circuits (ICs)** such as operational amplifiers or microprocessors.

**Question 2 (Exam-Oriented - Colour Coding):** A resistor has the colour bands: Yellow, Violet, Orange, Silver. What is its resistance value and tolerance?

**Answer:**
Let's break down the colour bands:
*   **Yellow:** First digit = 4
*   **Violet:** Second digit = 7
*   **Orange:** Multiplier = $10^3$ (or 1,000)
*   **Silver:** Tolerance = ±10%

Therefore, the resistance value is $47 \times 1000 \Omega = 47,000 \Omega$, which is **47 k$\Omega$**.
The tolerance is **±10%**.
This means the actual resistance could be anywhere between $47,000 \Omega - (0.10 \times 47,000 \Omega)$ and $47,000 \Omega + (0.10 \times 47,000 \Omega)$, which is between 42.3 k$\Omega$ and 51.7 k$\Omega$.

**Question 3 (Application/Safety):** Why is it important to select a wire with an appropriate gauge for carrying current in a circuit, and how does this relate to safety measures?

**Answer:**
The gauge of a wire determines its cross-sectional area, which in turn dictates how much electrical current it can safely carry without overheating. Thicker wires (lower AWG numbers) have a larger cross-sectional area, meaning lower resistance. This allows more current to flow with less energy loss as heat (Joule heating, $P = I^2R$).

Using a wire that is too thin for the current it needs to carry will cause it to have higher resistance. As current flows through this thin wire, a significant amount of electrical energy will be converted into heat. This can lead to:
1.  **Overheating:** The wire insulation can melt, causing short circuits.
2.  **Fire Hazard:** Excessive heat can ignite nearby materials.
3.  **Voltage Drop:** A significant voltage drop across the wire can cause connected components to malfunction or not receive the required voltage.

This directly relates to **CO1 (Demonstrate safety measures against electrical shocks)** because improper wire selection can lead to dangerous situations, including fires and potential electrical hazards. Selecting the correct wire gauge is a fundamental safety practice in electrical wiring.

**Question 4 (Identification/Functionality):** What is the primary function of a fuse, and how does its physical construction help it perform this function?

**Answer:**
The primary function of a fuse is to **protect an electrical circuit from overcurrent conditions**. It acts as a safety sacrificial element.

Its physical construction typically involves a metal wire or filament enclosed within a non-conductive casing (glass, ceramic, or plastic). This wire has a specific melting point and resistance. When the current flowing through the circuit exceeds the fuse's rated value for a sustained period, the wire inside heats up due to the $I^2R$ effect. Eventually, the heat causes the wire to melt, creating an open circuit. This interruption stops the flow of current, preventing damage to more sensitive or expensive components in the circuit, and reducing the risk of fire. The choice of casing material and the physical design of the fuse ensure that when the wire melts, it does so safely without causing an arc that could damage the fuse holder or surrounding components.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
