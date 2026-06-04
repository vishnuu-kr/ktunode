---
title: "Familiarization/Identification of electronic components with specification (Functionality, type, size, colour coding, package, symbol and cost of -Active, Passive, Electrical, Electronic, Electro-mechanical, Wires, Cables, Connectors, Fuses, Switches, Relays, Crystals, Displays, Fasteners, Heat sink etc.)"
subject: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP"
module: "Module 9: Familiarization/Identification of electronic components with specification (Functionality, type, size, colour coding, package, symbol and cost of "
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213d9ece2bdd875f9396"
status: "completed"
scrapedAt: "2026-05-23T16:00:47.395Z"
---
# Module 9: Familiarization/Identification of Electronic Components with Specifications

Welcome, everyone! In this module, we're going to get our hands dirty – virtually, for now! – with the fundamental building blocks of all electrical and electronic systems: **electronic components**. Understanding these little guys is absolutely crucial, not just for passing this course, but for anyone who wants to build, repair, or even just understand how our gadgets and power systems work. Think of it like learning your ABCs before you can write a story.

Our goal today, as outlined in **CO4: Identify various electronic components (Knowledge Level: K2)**, is to become familiar with a wide range of components. We'll be looking at their **functionality** (what they *do*), their **type** (what *kind* of component they are), their **size**, how to read things like **colour coding**, their **package** (how they physically look), their **symbol** (how they are represented in diagrams), and even a bit about their **cost**. This practical knowledge directly supports **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB (Knowledge Level: K3)**, because you can't build a circuit if you don't know what parts you need and how they behave.

We'll be covering a broad spectrum, from simple wires and fuses to more complex relays and displays. Let's dive in!

---

## 1. The Big Picture: Active vs. Passive Components

Before we start naming specific components, it's good to understand the fundamental division in electronics: active and passive components. This is a core concept that helps us categorize and understand their roles.

### Active Components

Think of **active components** as the "muscles" of an electronic circuit. They are the ones that can *do* something more than just react. They can amplify a signal, switch a current on or off, or generate power. The key characteristic is that they often require an external power source to operate and can control the flow of electrical energy.

*   **Functionality:** Amplify, switch, generate signals, control power.
*   **Example:** The most common active component you'll encounter is the **transistor**. A transistor, like a tiny electronic tap, can take a small input signal and produce a much larger output signal (amplification), or it can be used to turn a larger current on and off very quickly. This is the foundation of all modern electronics, from your smartphone to your computer.
*   **Textbook Connection:** You'll find extensive discussions on transistors and other active components like diodes and integrated circuits (ICs) in **"Basic Electronics and Linear Circuits" by Bhargava, Kulshreshtha, and Gupta**.

### Passive Components

**Passive components**, on the other hand, are like the "bones and connective tissues." They don't amplify or generate power. Instead, they store, dissipate, or control electrical energy in simpler ways. They generally do not require an external power source to perform their basic function (though some might be part of a larger circuit that *is* powered).

*   **Functionality:** Store energy (capacitors), oppose current flow (resistors), react to current/voltage changes (inductors).
*   **Example:** The most basic passive component is the **resistor**. If you think of electricity as water flowing through a pipe, a resistor is like a narrowed section of the pipe that makes it harder for the water to flow. This "resistance" to flow is crucial for controlling how much current gets to different parts of a circuit, preventing damage and ensuring components work as intended. We'll talk more about how to identify their values using color codes later.
*   **Textbook Connection:** **"Basic Electrical Engineering" by Kothari and Nagrath** provides a solid foundation on the fundamental passive components like resistors, capacitors, and inductors.

---

## 2. Electrical vs. Electronic Components

It's also helpful to distinguish between purely **electrical** components and those that fall under **electronics**.

*   **Electrical Components:** These typically deal with the **direct flow of electrical power** in a system, often at higher voltages and currents. Think of the components in your home's electrical wiring.
    *   **Examples:** Wires, cables, switches, fuses, circuit breakers, motors.
    *   **Relevance to Course Outcomes:** This relates strongly to **CO1: Demonstrate safety measures against electrical shocks (Knowledge Level: K2)** and **CO3: Illustrate the connection diagram and identify the suitable accessories necessary for wiring simple electric circuits (Knowledge Level: K3)**. Understanding fuses and switches is critical for safety and proper circuit design.
*   **Electronic Components:** These typically deal with the **processing and control of signals**, often at lower voltages and currents. They are the workhorses of circuits that perform calculations, process information, and control devices.
    *   **Examples:** Resistors, capacitors, transistors, diodes, integrated circuits (ICs), crystals, displays.
    *   **Relevance to Course Outcomes:** This is the core of **CO4: Identify various electronic components (Knowledge Level: K2)** and directly supports **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB (Knowledge Level: K3)**.

---

## 3. Electro-mechanical Components

Some components bridge the gap between electrical and mechanical systems. These are **electro-mechanical components**, where an electrical input causes a mechanical action, or vice-versa.

*   **Functionality:** Convert electrical energy into mechanical motion or vice-versa, often used for switching or control.
*   **Examples:**
    *   **Relays:** A relay is essentially an electrically operated switch. You send a small electrical signal to a coil inside the relay, which creates a magnetic field. This magnetic field then pulls a switch mechanism, closing or opening contacts that can control a much larger electrical circuit. Think of it like using a tiny light switch to control a powerful floodlight – the light switch (coil) controls the bigger switch (contacts).
    *   **Motors:** Convert electrical energy into rotational mechanical energy.
    *   **Solenoids:** Convert electrical energy into linear mechanical motion.
*   **Textbook Connection:** Motors and relays are often discussed in the context of power systems and control circuits in books like **"Electrical Systems Design" by M K Giridharan**.

---

## 4. Wires, Cables, and Connectors: The Plumbing of Electronics

No circuit can function without the pathways for electricity to travel. These are our wires, cables, and connectors.

### Wires

*   **Functionality:** Conduct electrical current. They are the basic conductors.
*   **Type:** Solid core (stiff, good for breadboarding) vs. Stranded core (flexible, good for applications where bending is frequent).
*   **Size:** Measured by **American Wire Gauge (AWG)**. Lower AWG numbers mean thicker wires, which can carry more current. For instance, a 14 AWG wire is thicker than an 18 AWG wire.
*   **Material:** Most commonly copper (excellent conductor), sometimes aluminum.
*   **Identification:** Often distinguished by insulation color (e.g., red for positive, black for negative, green for ground in DC circuits; brown/blue/green-yellow in AC mains).
*   **Cost:** Generally inexpensive, but the cost increases with thickness (more material) and complexity (e.g., shielded wires).
*   **Relevance to Course Outcomes:** Crucial for **CO3: Illustrate the connection diagram and identify the suitable accessories necessary for wiring simple electric circuits (Knowledge Level: K3)**.

### Cables

*   **Functionality:** Essentially bundles of wires, often providing protection and organization.
*   **Type:**
    *   **Single-core cable:** A single insulated wire.
    *   **Multi-core cable:** Multiple insulated wires bundled together within an outer sheath.
    *   **Shielded cable:** Has an additional layer of conductive material (like foil or braid) to protect the signal from electromagnetic interference (EMI). Think of USB cables or audio cables.
    *   **Twisted pair cable:** Pairs of wires twisted together to reduce crosstalk (interference between adjacent wires). Ethernet cables use this.
*   **Identification:** Often color-coded within the cable and have specific designations for their intended use (e.g., speaker cable, power cable, data cable).
*   **Cost:** Varies widely based on construction, shielding, and material.

### Connectors

*   **Functionality:** Allow for easy and reliable connection and disconnection of wires or cables.
*   **Type:** Vast array!
    *   **Terminal blocks:** For joining wires securely.
    *   **Jumper wires:** Often used on breadboards, these are flexible wires with pins on the ends.
    *   **Banana plugs and sockets:** For connecting test leads.
    *   **DB connectors (e.g., DB9, DB25):** Older serial communication connectors.
    *   **USB, HDMI, RJ45 (Ethernet):** Modern standard connectors.
*   **Identification:** By shape, number of pins, and application.
*   **Cost:** Varies based on complexity, material, and brand.
*   **Relevance to Course Outcomes:** Essential for **CO3** and building circuits on breadboards for **CO6**.

---

## 5. Fuses: The Circuit's Safety Guardian

A **fuse** is a simple but vital safety device.

*   **Functionality:** Protects an electrical circuit from overcurrent or short circuits. It contains a thin wire or filament that is designed to melt and break the circuit when the current exceeds a safe level.
*   **Type:**
    *   **Cartridge fuses:** Cylindrical glass or ceramic bodies with metal caps.
    *   **Blade fuses:** Flat, plastic-bodied fuses with metal prongs.
    *   **Surface-mount fuses:** Very small, designed for circuit boards.
*   **Identification:** Marked with their current rating (e.g., 1A, 5A, 10A) and voltage rating. *Crucially, you must use a fuse with a rating appropriate for the circuit.*
*   **Color Coding:** Sometimes the plastic body or cap is color-coded to indicate the current rating, but the printed number is the definitive value.
*   **Package:** Glass tube, ceramic tube, plastic body.
*   **Symbol:** A simple line with a break in it, often with a small rectangle indicating the element.
*   **Cost:** Very inexpensive.
*   **Relevance to Course Outcomes:** Directly relates to **CO1: Demonstrate safety measures against electrical shocks (Knowledge Level: K2)**. Using the correct fuse is a fundamental safety practice. Remember this: a fuse is designed to sacrifice itself to save the rest of the circuit and prevent fires.

---

## 6. Switches: Controlling the Flow

**Switches** are devices that interrupt or complete an electrical circuit.

*   **Functionality:** To turn circuits on or off, or to select different circuit paths.
*   **Type:** There are many types based on their function:
    *   **SPST (Single Pole Single Throw):** The simplest type, like a basic light switch. It connects or disconnects one wire.
    *   **SPDT (Single Pole Double Throw):** Has a common terminal and two other terminals. It can connect the common to either of the other two. Think of a 3-way light switch.
    *   **DPST (Double Pole Single Throw):** Connects or disconnects two separate circuits simultaneously.
    *   **DPDT (Double Pole Double Throw):** Connects or disconnects two circuits to one of two other circuits, respectively.
    *   **Pushbutton switches:** Activated by pressing. Can be momentary (springs back when released) or latching (stays on/off until pressed again).
    *   **Slide switches, toggle switches, rotary switches:** Other common actuation methods.
*   **Identification:** By the number of poles and throws, and the method of actuation.
*   **Package:** Can be panel-mounted, PCB-mounted, or standalone.
*   **Symbol:** Varies based on the type, but typically shows two contacts that can be opened or closed.
*   **Cost:** Generally inexpensive, but specialized switches can be pricier.
*   **Relevance to Course Outcomes:** Essential for **CO3: Illustrate the connection diagram and identify the suitable accessories necessary for wiring simple electric circuits (Knowledge Level: K3)** and **CO6**.

---

## 7. Relays: Electromechanical Switches

As mentioned earlier, **relays** are crucial electro-mechanical components.

*   **Functionality:** To use a low-power electrical signal to control a high-power electrical circuit. This provides isolation between the control circuit and the switched circuit, which is a key safety and design feature.
*   **Type:**
    *   **SPST-NO (Single Pole Single Throw, Normally Open):** Contacts are open when the coil is de-energized.
    *   **SPST-NC (Single Pole Single Throw, Normally Closed):** Contacts are closed when the coil is de-energized.
    *   **SPDT (Single Pole Double Throw):** Has one common contact and can connect to either a normally open or normally closed contact.
    *   **Multiple pole relays:** Can switch multiple circuits simultaneously.
*   **Identification:** By the coil voltage (e.g., 5V DC, 12V DC, 240V AC) and the contact configuration (e.g., SPDT, DPDT). Often printed directly on the relay package.
*   **Package:** Typically a small plastic cube that plugs into a socket or is soldered onto a PCB.
*   **Symbol:** Shows a coil (usually a rectangle with windings) and one or more sets of contacts, indicating their normal state (open or closed).
*   **Cost:** Relatively inexpensive for common types, but can increase with contact rating and features.
*   **Relevance to Course Outcomes:** Supports **CO3** by illustrating how to control higher power circuits and **CO6**.

---

## 8. Crystals: The Heartbeat of Precision Timing

**Crystals** are fascinating components that provide very stable and accurate timing signals.

*   **Functionality:** They act as very precise oscillators. When voltage is applied, they vibrate at a specific, constant frequency due to a property called the piezoelectric effect. This vibration can be used to create a clock signal for microprocessors and other digital circuits.
*   **Type:** Most commonly **quartz crystals**.
*   **Identification:** The frequency is etched onto the component (e.g., 4MHz, 8MHz, 16MHz).
*   **Package:** Often a small metal can with two or three pins.
*   **Symbol:** Usually a circle with two terminals, sometimes with extra pins for the can connection, and often labeled with the frequency.
*   **Cost:** Generally low, but high-precision or oven-controlled crystals can be expensive.
*   **Relevance to Course Outcomes:** Essential for **CO4** and understanding how digital circuits keep time, which is foundational for **CO6**.

---

## 9. Displays: Visualizing Information

**Displays** are how electronic devices communicate information to us visually.

*   **Functionality:** To present numbers, text, or images.
*   **Type:**
    *   **LED Displays (Light Emitting Diode):**
        *   **Seven-segment display:** The classic digital display used for numbers (0-9) and some letters. Each segment is an LED.
        *   **LED matrix:** A grid of LEDs that can form any character or graphic.
        *   **RGB LEDs:** LEDs that can emit red, green, and blue light, allowing for a wide range of colors.
    *   **LCD Displays (Liquid Crystal Display):** Used in watches, calculators, and many screen devices. They don't emit light themselves but use a backlight and polarizers to control which parts of the display appear opaque or transparent.
    *   **OLED Displays (Organic Light Emitting Diode):** Similar to LEDs but use organic compounds. They offer better contrast and viewing angles than LCDs and don't require a backlight.
*   **Identification:** By the number of digits, characters, or resolution, and the interface method (e.g., parallel, serial).
*   **Package:** Can range from simple discrete LEDs to complex flat panels.
*   **Symbol:** Varies greatly depending on the type. For a seven-segment display, it's often a block with pins for each segment and common cathode/anode.
*   **Cost:** Varies significantly based on complexity, size, and technology. Seven-segment displays are very cheap, while large OLED screens can be very expensive.
*   **Relevance to Course Outcomes:** Directly supports **CO4** and is a common output for circuits designed in **CO6**.

---

## 10. Fasteners and Heat Sinks: The Supporting Cast

These are components that support the primary functional components.

### Fasteners

*   **Functionality:** To secure components, connect parts, or hold assemblies together.
*   **Type:** Screws, nuts, bolts, washers, rivets, zip ties.
*   **Identification:** By size (diameter, length), thread type (e.g., metric, imperial), and material.
*   **Cost:** Very low for standard fasteners.
*   **Relevance to Course Outcomes:** While not electronic, they are critical for **CO7: Build the ability to work in a team with good interpersonal skills (Knowledge Level: K3)** by enabling proper assembly and mounting of electronic projects.

### Heat Sinks

*   **Functionality:** To dissipate heat generated by electronic components, especially power transistors, ICs, or high-power LEDs. Excessive heat can damage components or reduce their lifespan.
*   **Type:** Made of highly conductive materials like aluminum or copper, often with fins to increase surface area.
*   **Identification:** By size, shape, and the thermal resistance rating (how effectively it dissipates heat).
*   **Package:** Metal finned structures that attach to components, often with thermal paste to ensure good contact.
*   **Cost:** Varies from very cheap for small heatsinks to moderately expensive for large, high-performance ones.
*   **Relevance to Course Outcomes:** Crucial for the reliability of circuits built in **CO6**, especially those involving active components that generate heat.

---

## 11. Colour Coding: A Universal Language (Especially for Resistors!)

One of the most practical skills you'll learn is reading **colour codes**. While some components have their values printed directly, many passive components, especially resistors, use a system of colored bands.

*   **Resistor Colour Code:** This is a standard system. Typically, there are 4 or 5 bands.
    *   **Band 1:** First digit of the resistance value.
    *   **Band 2:** Second digit of the resistance value.
    *   **Band 3 (for 4-band resistors):** Multiplier (how many zeros to add).
    *   **Band 3 (for 5-band resistors):** Third digit of the resistance value.
    *   **Band 4 (for 5-band resistors):** Multiplier.
    *   **Band 5 (or sometimes the 4th band):** Tolerance (how much the actual resistance can vary from the marked value).

Let's quickly recall the colors and their meanings:

| Color   | Digit | Multiplier | Tolerance |
| :------ | :---- | :--------- | :-------- |
| Black   | 0     | $10^0 = 1$ | -         |
| Brown   | 1     | $10^1 = 10$ | $\pm 1\%$  |
| Red     | 2     | $10^2 = 100$ | $\pm 2\%$  |
| Orange  | 3     | $10^3 = 1k$ | -         |
| Yellow  | 4     | $10^4 = 10k$ | -         |
| Green   | 5     | $10^5 = 100k$ | $\pm 0.5\%$ |
| Blue    | 6     | $10^6 = 1M$ | $\pm 0.25\%$ |
| Violet  | 7     | $10^7 = 10M$ | $\pm 0.1\%$ |
| Grey    | 8     | $10^8 = 100M$ | $\pm 0.05\%$ |
| White   | 9     | $10^9 = 1G$ | -         |
| Gold    | -     | $10^{-1} = 0.1$ | $\pm 5\%$  |
| Silver  | -     | $10^{-2} = 0.01$ | $\pm 10\%$ |
| None    | -     | -          | $\pm 20\%$ |

*   **Example:** A resistor with bands Brown, Black, Red, Gold.
    *   Brown = 1
    *   Black = 0
    *   Red = Multiplier $10^2$ (or 100)
    *   Gold = Tolerance $\pm 5\%$
    *   So, the value is 10 * 100 = 1000 Ohms, or 1 k$\Omega$, with a tolerance of $\pm 5\%$.

*   **Capacitor Colour Code:** Capacitors also use colour codes, but it's a bit more complex and less standardized than resistors. They often indicate capacitance in picofarads (pF) or microfarads ($\mu$F) and voltage rating. We'll cover this in more detail when we specifically look at capacitors.

*   **Textbook Connection:** **"Basic Electronics and Linear Circuits"** and **"Basic Electrical Engineering"** both have dedicated sections on colour codes. Mastering this is key for **CO4**.

---

## 12. Component Packages: How They Look and How They Fit

The **package** refers to the physical form of the component – how it's encased and how it connects to a circuit.

*   **Through-hole components:** These have leads (wires) that pass *through* holes drilled in a printed circuit board (PCB). They are typically larger and easier to solder by hand. Examples include most resistors, capacitors, transistors, and DIP (Dual In-line Package) ICs.
*   **Surface-mount components (SMD/SMT):** These are designed to be soldered directly onto the *surface* of a PCB. They are much smaller and are used in modern, compact electronics. Examples include small resistors and capacitors (often just tiny rectangular blocks), smaller transistors, and many ICs in packages like SOIC, QFP, or BGA.
*   **Axial vs. Radial Leads:**
    *   **Axial:** Leads come out from the ends of the component body, parallel to each other (common for many resistors and diodes).
    *   **Radial:** Leads come out from the bottom of the component body, perpendicular to the main axis (common for electrolytic capacitors and some transistors).

Understanding packages is crucial for **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB**. You need to know which components fit where and how to handle them.

---

## 13. Component Symbols: The Language of Schematics

Every electronic component has a standardized **symbol** that represents it in circuit diagrams (schematics). Learning these symbols is like learning the alphabet of electronics.

*   **Functionality:** To provide a universal, concise, and unambiguous way to represent components in design and documentation.
*   **Examples:**
    *   Resistor: A zig-zag line or a rectangle.
    *   Capacitor: Two parallel lines (sometimes one is curved for polarized capacitors).
    *   Diode: A triangle pointing towards a line.
    *   Transistor (BJT): A triangle with a bar and a third line representing the base.
    *   LED: A diode symbol with arrows pointing away from it.
    *   Fuse: A line with a break.
    *   Switch: Lines representing contacts that can be opened or closed.
*   **Relevance to Course Outcomes:** Absolutely fundamental for **CO3** and **CO6**. You cannot understand or create circuit diagrams without knowing these symbols.

---

## 14. Cost: The Practical Consideration

While not always directly tested on knowledge of specific prices, understanding that **cost** varies is important.

*   **Factors influencing cost:**
    *   **Material:** Copper is more expensive than aluminum.
    *   **Manufacturing complexity:** Precision components are more expensive.
    *   **Volume:** Mass-produced components are cheaper per unit.
    *   **Power/Current rating:** Higher ratings often mean more material and better construction, leading to higher costs.
    *   **Technology:** Newer, advanced components are often more expensive initially.
*   **Textbook Connection:** **"Electrical Design Estimating and Costing" by K B Raina and S K Bhattacharya** is our primary resource for understanding how cost estimation works in electrical projects. It helps us appreciate why component selection involves balancing performance with budget.
*   **Relevance to Course Outcomes:** Supports practical aspects of circuit design and project building, indirectly touching upon the realistic application of learned concepts.

---

## Summary and Key Takeaways for this Module:

Today, we've taken a broad look at the diverse world of electronic components. Remember these key points:

*   **Active vs. Passive:** Active components control or amplify signals (like transistors), while passive components manage energy (like resistors).
*   **Electrical vs. Electronic:** Electrical deals more with power distribution, while electronic deals with signal processing.
*   **Identification is Key:** Learn to identify components by their function, type, package, symbol, and specifications like color codes.
*   **Safety First:** Components like fuses are critical safety devices.
*   **Schematics are Your Map:** Understanding symbols is essential for designing and troubleshooting circuits.

This foundation is critical for everything we will do next. You'll be using these components daily in the workshop and in future labs. Keep your eyes open, ask questions, and get comfortable with these building blocks!

---

## Sample Questions with Answers

**Q1. A resistor has color bands: Brown, Black, Orange, Gold. What is its resistance value and tolerance?**

**Answer:**
Let's break down the color code:
*   Brown: Digit 1
*   Black: Digit 0
*   Orange: Multiplier $10^3$ (or 1000)
*   Gold: Tolerance $\pm 5\%$

Resistance = (Digit 1)(Digit 2) * Multiplier
Resistance = 10 * 1000 = 10,000 Ohms
Resistance = 10 k$\Omega$

Tolerance = $\pm 5\%$

Therefore, the resistor is 10 k$\Omega$ with a 5% tolerance.

**Q2. Explain the primary function of a fuse in an electrical circuit and why selecting the correct rating is important.**

**Answer:**
The primary function of a fuse is to **protect the electrical circuit from overcurrent or short circuits**. It contains a thin wire that melts and breaks the circuit when the current flowing through it exceeds a predetermined safe level.

Selecting the correct rating is crucial for safety and proper operation:
*   **If the fuse rating is too high:** The fuse might not blow when a dangerous overcurrent occurs, allowing excessive current to flow. This could damage sensitive components, overheat wires, cause fires, or lead to electrical shocks.
*   **If the fuse rating is too low:** The fuse might blow during normal operation (e.g., when a motor starts, which causes a brief surge of current), causing the circuit to unnecessarily shut down.

Therefore, the fuse rating must be chosen to be slightly above the normal operating current of the circuit but low enough to blow before any damage occurs during fault conditions. This directly relates to **CO1 (Knowledge Level: K2)**.

**Q3. Differentiate between through-hole and surface-mount components in terms of their physical characteristics and typical applications.**

**Answer:**
*   **Through-hole Components:**
    *   **Physical Characteristics:** Have longer leads (wires) that are inserted through holes drilled in a Printed Circuit Board (PCB). They are generally larger and easier to handle and solder manually.
    *   **Typical Applications:** Commonly used in older designs, hobbyist projects, prototyping on breadboards, and applications where components might need frequent replacement or are subject to mechanical stress.

*   **Surface-Mount Components (SMD/SMT):**
    *   **Physical Characteristics:** Designed to be soldered directly onto the surface of a PCB. They are much smaller, lighter, and do not have leads that pass through the board.
    *   **Typical Applications:** Ubiquitous in modern electronics (smartphones, laptops, etc.) due to their ability to enable miniaturization, higher component density, and automated manufacturing processes.

This distinction is important for **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB (Knowledge Level: K3)**, as it dictates how components are physically placed and soldered onto a PCB.

**Q4. What is the main difference in functionality between an active component and a passive component? Provide an example of each.**

**Answer:**
The main difference lies in their ability to control or amplify electrical energy.

*   **Active Components:** These components can **amplify a signal, switch, or generate electrical power**. They typically require an external power source to operate and can control the flow of current in a way that isn't directly proportional to the input signal.
    *   **Example:** A **transistor**. It can take a small input voltage/current and produce a larger output voltage/current (amplification), or it can act as an electronic switch.

*   **Passive Components:** These components **cannot amplify or generate electrical power**. They can only dissipate, store, or pass electrical energy. They generally do not require an external power source to perform their fundamental function.
    *   **Example:** A **resistor**. It opposes the flow of current and dissipates electrical energy as heat. Its function is directly proportional to the voltage across it (Ohm's Law).

This fundamental concept is key for **CO4: Identify various electronic components (Knowledge Level: K2)**.
