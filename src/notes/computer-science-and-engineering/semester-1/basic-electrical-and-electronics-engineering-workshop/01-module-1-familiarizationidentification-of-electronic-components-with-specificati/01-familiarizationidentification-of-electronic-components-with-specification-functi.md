---
title: "Familiarization/Identification of electronic components with specification (Functionality, type, size, colour coding, package, symbol and cost of -Active, Passive, Electrical, Electronic, Electro-mechanical, Wires, Cables, Connectors, Fuses, Switches, Relays, Crystals, Displays, Fasteners, Heat sink etc.)"
subject: "BASIC ELECTRICAL AND ELECTRONICS  ENGINEERING WORKSHOP"
module: "Module 1: Familiarization/Identification of electronic components with specification (Functionality, type, size, colour coding, package, symbol and cost of "
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5cca"
status: "completed"
scrapedAt: "2026-05-20T16:36:42.346Z"
---
# BASIC ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP

## Module 1: Familiarization and Identification of Electronic Components with Specifications

Welcome, future engineers! In this first module, we're going to get our hands dirty, metaphorically at first, as we explore the fundamental building blocks of all electrical and electronic systems: **electronic components**. Think of these as the alphabet and grammar of our field. Without understanding these basic parts, we can't hope to build anything meaningful, whether it's a simple lighting circuit or a complex microcontroller. Our journey today is all about **familiarization and identification**. We need to know what these components are, what they *do*, how to *identify* them, and what their *specifications* tell us. This is crucial for our **Course Outcome 4: Identify various electronic components (Knowledge Level: K2)**. Moreover, as we learn about these components, we'll also touch upon safety, which directly relates to **Course Outcome 1: Demonstrate safety measures against electrical shocks (Knowledge Level: K2)**.

Let's begin by understanding what we mean by "components" and why their specifications are so important.

---

### What are Electronic Components?

At its core, an electronic component is a basic electronic element with leads or metallic connections that can be soldered to a printed circuit board (PCB) or used in an electronic circuit. They are the individual pieces that make up any electronic device, from your smartphone to the vast network that powers our cities.

We can broadly categorize these components based on their functionality and their interaction with electrical energy. A key distinction is between **active** and **passive** components.

#### Active vs. Passive Components

*   **Passive Components:** These components do not introduce energy into the circuit. Instead, they *consume*, *store*, or *release* energy. They cannot amplify a signal or control the flow of current independently. Think of them as the "nouns" in our electronic language – they have properties but don't *do* much on their own. Common examples include resistors, capacitors, and inductors.
    *   **Resistors:** These are the workhorses that *resist* the flow of current. Imagine a narrow pipe in a water system; it restricts the flow. Resistors do the same for electricity. Their main job is to control voltage and current levels.
    *   **Capacitors:** These components *store* electrical energy in an electric field. Think of a small, rechargeable battery that can quickly charge and discharge. They are essential for filtering signals and smoothing out voltage fluctuations.
    *   **Inductors:** These components *store* energy in a magnetic field when current flows through them. They are like a flywheel for electricity, opposing changes in current. They are often used in tuning circuits and filters.

*   **Active Components:** Unlike passive components, active components can *control* the flow of electrical energy and often *amplify* signals. They require an external power source to operate and can introduce energy into the circuit. These are the "verbs" – they *do* things!
    *   **Transistors:** These are the fundamental building blocks of modern electronics. They can act as electronic switches or amplifiers. Imagine a water faucet: a small turn of the handle (a small input signal) can control a large flow of water (a larger output signal).
    *   **Diodes:** These are like one-way valves for electricity. They allow current to flow in only one direction. This is crucial for converting AC to DC (rectification) and for protecting circuits.
    *   **Integrated Circuits (ICs) / Chips:** These are complex circuits fabricated on a single semiconductor chip. They can contain thousands or millions of transistors and other components, performing sophisticated functions like microprocessors, memory, and operational amplifiers.

This distinction between active and passive components is fundamental, and it's a concept that often comes up in exams. Remember: **passive components don't add energy, active components can.**

#### Electrical vs. Electronic Components

While we often use these terms interchangeably, there's a nuance worth understanding.

*   **Electrical Components:** These are typically used in power distribution and basic electrical circuits, often dealing with higher voltages and currents. They focus on the flow of electrical energy. Examples include wires, switches, fuses, and circuit breakers.
*   **Electronic Components:** These are generally used in signal processing and control circuits, often at lower voltages and currents. They deal with the manipulation of electrical signals. Examples include transistors, diodes, ICs, and microcontrollers.

The lines can blur, as many devices use both. For instance, a power supply unit in an electronic device uses electrical components (like fuses and transformers) to manage power before electronic components (like transistors and capacitors) process it. This topic is very relevant to **CO2: Familiarise with transformers, rheostats, batteries and earthing schemes (Knowledge Level: K2)** and **CO3: Illustrate the connection diagram and identify the suitable accessories necessary for wiring simple electric circuits (Knowledge Level: K3)**.

#### Electro-mechanical Components

These components combine electrical and mechanical principles. They use electrical energy to perform a mechanical action, or vice versa.

*   **Relays:** A relay is essentially an electrically operated switch. A small current flowing through a coil creates a magnetic field, which physically moves a switch to open or close a different, often higher-power, circuit. Think of it as a remote-controlled switch. This is a fantastic example of **CO2: Familiarise with transformers, rheostats, batteries and earthing schemes (Knowledge Level: K2)**, as relays often switch power to devices controlled by low-power electronics.
*   **Solenoids:** Similar to relays, solenoids use an electromagnet to create linear motion. They are used to open or close valves, lock mechanisms, or move mechanical parts.

---

### Specifications: The Component's Resume

Now that we've got a feel for the *types* of components, let's talk about their **specifications**. Every component has a datasheet or marking that tells us its vital statistics. Knowing these specifications is like reading a person's resume – it tells you what they can do, their capabilities, and their limitations. For us, this is the heart of **CO4: Identify various electronic components (Knowledge Level: K2)**.

What kind of information do we look for?

1.  **Functionality:** What does this component *do*? Is it a resistor, a capacitor, a transistor? This is the most basic identification.
2.  **Type:** Within a category, there are sub-types. For example, for resistors, there are carbon-film, metal-film, wire-wound, etc. Each has different properties like tolerance, temperature coefficient, and power rating. For transistors, there are Bipolar Junction Transistors (BJTs) and Field-Effect Transistors (FETs), each with different operating principles.
3.  **Size:** The physical dimensions are important, especially when designing circuits on a PCB or fitting components into a limited space. Component size also often indicates its power handling capability – bigger usually means it can dissipate more heat.
4.  **Colour Coding:** This is a very common way to quickly identify the value of passive components like resistors and capacitors.
    *   **Resistors:** The familiar coloured bands are a code that tells us the resistance value and its tolerance. We'll delve into the resistor colour code soon! This is a classic exam topic.
    *   **Capacitors:** Some capacitors also use colour codes, though it's less standardized than for resistors.
5.  **Package:** This refers to the physical housing of the component, particularly for semiconductor devices. Packages determine how the component is mounted (e.g., through-hole, surface mount) and how it connects to the circuit. Common through-hole packages include TO-92 (small transistors) and DIP (Dual In-line Package) for ICs. Surface-mount packages include SOT (Small Outline Transistor) and SMD (Surface Mount Device) components, which are tiny and soldered directly onto the PCB surface. The package dictates the tools and techniques we'll use for assembly, which links to **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB (Knowledge Level: K3)**.
6.  **Symbol:** Every component has a standardized schematic symbol. Learning these symbols is like learning the alphabet of circuit diagrams. When you see a zig-zag line, you know it's a resistor. A symbol with two parallel lines, one curved, signifies a capacitor. These symbols are universally understood in engineering and are essential for reading and creating circuit diagrams, directly impacting **CO3: Illustrate the connection diagram and identify the suitable accessories necessary for wiring simple electric circuits (Knowledge Level: K3)**.
7.  **Cost:** While not a technical specification for circuit design, cost is a critical factor in practical engineering, especially in production. Knowing the relative cost of components helps in making design choices that are both functional and economical. This relates to our textbook, "Electrical Design Estimating and Costing by K B Raina and S K Bhattacharya."

---

### Let's Dive Deeper into Specific Components and Their Specs

Here's a closer look at some of the components you'll encounter frequently in the workshop.

#### Resistors

*   **Functionality:** Oppose the flow of electric current. They are used to set voltage levels, limit current, and divide voltage.
*   **Type:** Carbon-film, Metal-film, Wire-wound, etc.
*   **Size:** Varies with power rating. Smaller resistors (like 1/4 Watt) are common for signal circuits, while larger, often cylindrical ones (wire-wound) can handle much higher power.
*   **Colour Coding:** This is super important! For a 4-band resistor:
    *   **Band 1:** First digit of resistance value.
    *   **Band 2:** Second digit of resistance value.
    *   **Band 3:** Multiplier (how many zeros to add).
    *   **Band 4:** Tolerance (how accurate the value is, e.g., ±5%).
    *   *Example:* Brown (1), Black (0), Red (x100), Gold (±5%) = 10 x 100 = 1000 Ohms (1kΩ) ±5%.
    *   *A common mnemonic is "Bad Boys Race Our Young Girls But Violet Generally Wins"* (Black, Brown, Red, Orange, Yellow, Green, Blue, Violet, Grey, White).
*   **Package:** Typically through-hole axial leaded for general purpose. Surface mount resistors (SMD) are tiny rectangles.
*   **Symbol:** A zig-zag line or a rectangle.
*   **Cost:** Very low for common values.

#### Wires and Cables

*   **Functionality:** Conduct electricity from one point to another.
*   **Type:** Solid conductor (rigid), Stranded conductor (flexible). Different insulation materials (PVC, Teflon) offer varying temperature and chemical resistance. Cables are simply bundles of insulated wires, often with shielding.
*   **Size:** Measured by **Wire Gauge (AWG - American Wire Gauge)** or cross-sectional area (mm²). Smaller AWG numbers mean thicker wires, which can carry more current without overheating. This is critical for safety and relates to **CO1** and **CO3**.
*   **Colour Coding:** Crucial for identifying wires in a system, especially for power and signal lines. Common US colours: Black (neutral), White (hot/line), Green (ground). Red and Blue are often used for hot/switched lines. In Europe, Brown (line), Blue (neutral), Green/Yellow (earth). Misidentifying wires can lead to short circuits or incorrect connections!
*   **Package:** Supplied on spools or as pre-cut lengths.
*   **Symbol:** A simple line, often with an arrow for polarity or a number indicating gauge.
*   **Cost:** Relatively low, depends on material and gauge.

#### Connectors

*   **Functionality:** Allow for the easy and reliable connection and disconnection of electrical circuits or components.
*   **Type:** Numerous types: USB, HDMI, banana plugs, screw terminals, pin headers, Molex connectors, etc. Each designed for specific applications and pin counts.
*   **Size:** Varies greatly depending on the number of pins and the current/voltage they are rated for.
*   **Package:** The connector housing itself.
*   **Symbol:** Varies depending on the connector type, often depicting the mating interface.
*   **Cost:** Varies widely, from very cheap to expensive, depending on complexity and specifications.

#### Fuses

*   **Functionality:** A safety device designed to protect electrical circuits from overcurrents. They contain a thin wire that melts and breaks the circuit when the current exceeds a specific limit. This is a direct safety component for **CO1**.
*   **Type:** Cartridge fuses (glass or ceramic tube), Blade fuses (automotive), Surface mount fuses. Rated by current (Amps) and voltage (Volts).
*   **Size:** Varies with current rating. Larger fuses for higher currents.
*   **Colour Coding:** Some fuses use colour coding for their current rating, but it's more common to read the printed value.
*   **Package:** The physical form factor of the fuse.
*   **Symbol:** A rectangle with a line through it, often with a fuse symbol (a wavy line) inside.
*   **Cost:** Generally low, but essential for safety.

#### Switches

*   **Functionality:** To make or break an electrical circuit.
*   **Type:**
    *   **Toggle Switches:** The common lever type.
    *   **Push-button Switches:** Momentary (activates only while pressed) or latching (stays on until pressed again).
    *   **Rocker Switches:** Similar to toggle but with a wider rocker.
    *   **Slide Switches:** Use a sliding mechanism.
    *   **Rotary Switches:** Select between multiple positions.
*   **Specifications:** Number of poles (circuits controlled) and throws (positions per pole), and electrical rating (current/voltage).
*   **Package:** The physical body of the switch.
*   **Symbol:** Varies by type, showing the contacts and their states (open/closed).
*   **Cost:** Low to moderate.

#### Relays

*   **Functionality:** An electrically operated switch. A low-power control signal energizes a coil, creating a magnetic field that moves contacts to switch a higher-power circuit.
*   **Type:** Generally classified by coil voltage (e.g., 5V DC, 12V DC, 240V AC) and contact configuration (SPST, SPDT, DPDT – Single Pole Single Throw, Single Pole Double Throw, Double Pole Double Throw).
*   **Size:** Varies, from small signal relays to larger power relays.
*   **Package:** Can be PCB-mounted, panel-mounted, or have plug-in bases.
*   **Symbol:** Shows a coil and switch contacts.
*   **Cost:** Moderate.

#### Crystals (Crystal Oscillators)

*   **Functionality:** Provide a very accurate and stable timing signal (frequency) for microcontrollers and other digital circuits. They use the piezoelectric property of quartz crystals.
*   **Type:** Specified by their resonant frequency (e.g., 4MHz, 16MHz, 32.768kHz).
*   **Size:** Usually small, cylindrical metal cans or SMD packages.
*   **Package:** Cylindrical metal case or SMD.
*   **Symbol:** A rectangle with lines representing the crystal, often with two loading capacitors shown.
*   **Cost:** Low to moderate.

#### Displays

*   **Functionality:** To visually present information.
*   **Type:**
    *   **LED Displays:** Light Emitting Diodes that glow when current passes. Can be single LEDs, 7-segment displays (for numbers), or dot matrix displays.
    *   **LCD Displays:** Liquid Crystal Displays, used in calculators and many digital devices.
    *   **OLED Displays:** Organic Light Emitting Diodes, offering brighter colours and wider viewing angles.
*   **Size:** Varies greatly, from tiny indicator LEDs to large display panels.
*   **Package:** The display unit itself.
*   **Symbol:** Varies by type, often showing segments or pixels.
*   **Cost:** Varies from very low for single LEDs to high for complex displays.

#### Fasteners

*   **Functionality:** While not strictly "electronic" in terms of signal processing, fasteners like screws, nuts, and bolts are essential for mechanically assembling electronic equipment and securing components or enclosures. They ensure the physical integrity of our projects.
*   **Type:** Screws (machine, self-tapping), nuts, washers, bolts. Different materials (steel, brass, plastic) and thread types.
*   **Size:** Standardized sizes (e.g., M3, M4 for metric screws; #4, #6 for imperial).
*   **Cost:** Very low.

#### Heat Sinks

*   **Functionality:** To dissipate heat generated by electronic components, preventing them from overheating and failing. They are typically made of thermally conductive materials like aluminum or copper and have fins to increase surface area for better cooling.
*   **Type:** Extruded, stamped, bonded fin. Different shapes and sizes designed for specific components (e.g., CPU heat sinks, TO-220 package heat sinks).
*   **Size:** Varies depending on the component's power dissipation.
*   **Package:** The metal heat sink itself.
*   **Symbol:** Not usually represented by a specific schematic symbol, but their presence is noted in the layout.
*   **Cost:** Low to moderate, depending on size and material.

---

### Tools and Safety in the Workshop

As we learn to identify these components, it’s vital to remember the practical aspects of working with them in the workshop. This directly supports **CO1: Demonstrate safety measures against electrical shocks (Knowledge Level: K2)**.

*   **Breadboards:** These are prototyping boards that allow you to build temporary circuits without soldering. They have rows of connected holes that make it easy to insert component leads and jumper wires. They are your best friend for learning and testing.
*   **Soldering Irons:** For permanent connections, we use soldering irons to melt solder, which then cools to form an electrical and mechanical bond between component leads and PCB pads. Always use a fume extractor and handle the hot iron with care.
*   **Wire Strippers:** To remove insulation from wires before connecting them.
*   **Pliers (Needle-nose, cutting):** For bending leads, holding components, and cutting wires.
*   **Multimeters:** These are indispensable diagnostic tools. We'll learn how to use them to measure voltage, current, and resistance. This is the core of **CO5: Operate various measuring instruments (Knowledge Level: K3)**.

**Safety First!**
*   Always disconnect power before touching any circuits.
*   Be aware of the voltage and current ratings of components and your equipment.
*   Wear safety glasses when soldering or cutting wires.
*   Handle hot soldering irons and components with extreme caution.
*   Understand the basics of grounding and earthing – this is vital for preventing shocks.

---

### Connecting to Course Outcomes

Let's quickly recap how our learning today directly contributes to your course outcomes:

*   **CO1 (Safety):** By understanding components like fuses and the need for proper wiring, we build a safety-conscious approach.
*   **CO2 (Transformers, Rheostats, Batteries, Earthing):** While we didn't detail rheostats and batteries today, they are electrical components similar in principle to resistors and capacitors. Transformers are key to voltage conversion, and earthing is a critical safety aspect of electrical systems. We'll cover these more.
*   **CO3 (Connection Diagrams, Accessories):** Identifying component symbols and understanding wire colours is the first step to reading and creating connection diagrams. Wires, connectors, and switches are the accessories we use.
*   **CO4 (Identify Components):** This entire module is dedicated to this outcome! We are learning to recognize, understand, and specify components.
*   **CO5 (Measuring Instruments):** While we'll use multimeters extensively, the context of *what* to measure (voltage across a resistor, current through a wire) comes from understanding the components themselves.
*   **CO6 (Circuit Design on Breadboard/PCB):** Knowing component types, packages, and symbols is essential before you can even think about placing them on a breadboard or PCB.
*   **CO7 (Teamwork):** As you work in the lab, you'll be sharing tools, discussing component identification, and helping each other. This practical workshop environment is perfect for developing those interpersonal skills.

---

### Quick Recap and What to Remember

*   **Active** components can control or amplify signals (transistors, ICs). **Passive** components store or dissipate energy (resistors, capacitors, inductors).
*   **Electrical** components are often for power, **electronic** for signal processing.
*   **Specifications** (function, type, size, colour code, package, symbol, cost) are critical for selecting and using components correctly.
*   **Colour codes** are a quick way to identify resistor values.
*   **Wire gauge** and **fuse ratings** are vital for electrical safety.
*   **Symbols** are the universal language of circuit diagrams.
*   **Safety** is paramount. Always be aware of electrical hazards.

---

### Sample Questions and Answers

**1. Question:** You are given a component with four coloured bands: Red, Violet, Orange, Silver. What is its approximate resistance and tolerance?

**Answer:**
*   Red = 2 (first digit)
*   Violet = 7 (second digit)
*   Orange = x 1000 (multiplier)
*   Silver = ±10% (tolerance)

Therefore, the resistance is 27 x 1000 Ohms = 27,000 Ohms or 27 kΩ, with a tolerance of ±10%. This tests your understanding of the resistor colour code (CO4).

**2. Question:** Explain the primary function of a fuse in an electrical circuit. Why is knowing its rating important for safety?

**Answer:** The primary function of a fuse is to protect an electrical circuit from damage due to overcurrent or short circuits. It contains a wire that melts and breaks the circuit if the current exceeds a predetermined level. Knowing its rating (e.g., 1A, 5A, 13A) is crucial because if a fuse with too high a rating is used, it will not blow when a dangerous overcurrent occurs, potentially leading to overheating of wires, damage to components, fire, or electric shock. This directly addresses **CO1: Demonstrate safety measures against electrical shocks (Knowledge Level: K2)**.

**3. Question:** Differentiate between a breadboard and a PCB in the context of building electronic circuits.

**Answer:**
*   A **breadboard** is a solderless prototyping tool. It allows you to insert components and jumper wires into pre-defined connection points, making it easy to build and modify temporary circuits for testing and learning. It is ideal for initial circuit development (aligns with **CO6**).
*   A **PCB (Printed Circuit Board)** is a rigid or flexible board with conductive pathways (traces) etched onto it, on which electronic components are mounted and interconnected. Circuits on PCBs are permanent, requiring soldering. PCBs are used for the final assembly of electronic devices, offering a more robust and compact solution (also relates to **CO6**).

**4. Question:** You see a component with a symbol that looks like a zig-zag line in a circuit diagram. What component is it, and what is its primary function?

**Answer:** The zig-zag line symbol represents a **resistor**. Its primary function is to **resist** the flow of electric current, thereby controlling the voltage and current levels within the circuit. This demonstrates understanding of component symbols (CO4) and their basic function.

**5. Question:** Why is it important to identify the "package" of an electronic component, especially for semiconductor devices like transistors or ICs?

**Answer:** The package of a component dictates its physical form factor, how it connects to the circuit, and the methods used for mounting it. For semiconductor devices:
*   **Through-hole packages** (like DIP) are inserted into holes on a PCB and soldered.
*   **Surface Mount Device (SMD) packages** (like SOT, SOIC) are much smaller and are soldered directly onto the surface of the PCB.
Knowing the package is essential for selecting the correct mounting method, soldering techniques, and for physical layout considerations on a PCB or breadboard, which is key for **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB (Knowledge Level: K3)**.

---

This concludes our introductory session on familiarizing ourselves with electronic components. Keep these notes handy as you'll be referring to them constantly in the workshop. The more you practice identifying and understanding these parts, the more confident you'll become in building and troubleshooting circuits!
