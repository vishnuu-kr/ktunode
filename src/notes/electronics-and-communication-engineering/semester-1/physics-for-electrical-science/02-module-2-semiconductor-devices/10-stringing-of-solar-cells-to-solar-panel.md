---
title: "Stringing of Solar cells to solar panel"
subject: "PHYSICS FOR ELECTRICAL SCIENCE"
module: "Module 2: Semiconductor Devices"
branch: "Electronics and Communication Engineering"
semester: 1
topicId: "68b7dc9020463779487da226"
status: "completed"
scrapedAt: "2026-05-23T17:35:39.808Z"
---
## Module 2: Semiconductor Devices - Stringing of Solar Cells to Solar Panel

Welcome, everyone, to our deep dive into semiconductor devices! Today, we're going to build upon our understanding of semiconductor physics from Module 2 and focus on a practical and incredibly important application: how we take individual solar cells and string them together to create a powerful solar panel. This process, often called "stringing," is fundamental to harnessing solar energy efficiently. As we explore this, keep our course outcomes in mind, especially CO1 (Fundamentals of Semiconductor Physics) and CO2 (Behavior of semiconductor materials in devices). We're essentially seeing how the tiny world of semiconductors scales up to a useful energy generation system.

### 1. From Individual Cell to a Functional Unit: The Need for Stringing

Remember from our earlier discussions that a single silicon solar cell, under ideal sunlight conditions, produces a relatively small voltage, typically around 0.5 to 0.6 volts, and a current that depends on its size and the light intensity. While this is fascinating from a physics perspective, it’s not enough power to run most everyday appliances. Think of it like a single drop of water – it's water, but you can't really do much with it. To make it useful, we need to gather many drops together to form a stream, and then a river!

Similarly, to achieve useful voltage and current outputs for applications like powering homes or charging batteries, we need to connect multiple solar cells. This is where the concept of "stringing" comes in. Stringing is the process of electrically connecting individual solar cells in a specific configuration to increase the overall voltage and/or current of the solar module (what we commonly call a solar panel).

This directly relates to **CO1: Explain the fundamentals of Semiconductor Physics** because the electrical characteristics of each cell (its voltage and current output, its internal resistance) dictate how they can be best connected. And it’s crucial for **CO2: Describe the behaviour of semiconductor materials in semiconductor devices** as we’re manipulating that behaviour at a larger scale by connecting them.

### 2. Connecting the Dots: Series and Parallel Connections

The way we connect these individual solar cells determines whether we are increasing the total voltage or the total current. The two primary methods are:

#### a) Series Connection: Boosting the Voltage

Imagine connecting the positive terminal of one battery to the negative terminal of another, and then repeating this for a chain of batteries. What happens? The voltages add up! This is exactly what we do when we connect solar cells in series.

*   **How it's done:** The positive (often the shiny front contact) of one solar cell is connected to the negative (typically the back contact) of the next solar cell. This continues for a series of cells.
*   **The result:** The total voltage of the string is the sum of the individual voltages of the cells in the string. However, the current that flows through the entire series string is limited by the cell with the *lowest* current output.

*   **Analogy:** Think of a water pipe system. If you have several small pumps (solar cells) connected end-to-end, each pump adds a bit of pressure (voltage) to the water as it flows through. The total pressure is the sum of the individual pressures. However, if one pump is significantly weaker than the others, it will restrict the flow rate (current) for the entire system.

*   **Why we do it:** Most solar panels require a higher voltage to be effective. For example, to charge a 12V battery, you’ll need a solar panel that produces a voltage significantly higher than 12V (often around 18-20V) to overcome internal resistances and efficiently charge the battery. Connecting cells in series is how we achieve this higher voltage.

*   **Textbook Connection:** Beiser's "Concepts of Modern Physics" and the other engineering physics texts will detail the forward and reverse bias characteristics of a single PN junction in a solar cell. When we connect them in series, we are essentially stacking these junctions, and the total voltage becomes the sum of the individual junction potentials under illumination. This is a direct application of understanding the V-I characteristics of semiconductor diodes.

#### b) Parallel Connection: Increasing the Current

Now, what if we want more current? We can connect the cells in parallel. This is like connecting all the positive terminals of the batteries together and all the negative terminals together.

*   **How it's done:** The positive terminals of all cells in the parallel group are connected together, and the negative terminals of all cells are connected together.
*   **The result:** The total current of the parallel string is the sum of the individual currents of the cells in the string. However, the voltage across the entire parallel string is limited by the cell with the *lowest* voltage output.

*   **Analogy:** Back to the water pipe analogy. If you have multiple pipes (solar cells) all drawing from the same source and feeding into the same destination, the total volume of water flowing per second (current) will be the sum of the water flowing through each individual pipe. However, the pressure (voltage) at the destination will be limited by the pipe that can sustain the least pressure.

*   **Why we do it:** While less common for the main voltage requirement of a system, parallel connections can be used to increase the overall current capacity of a solar array, especially for larger systems where the output of a single series string might not be sufficient.

### 3. Combining for Power: Series-Parallel Combinations

In reality, most solar panels use a combination of series and parallel connections to achieve the desired voltage and current characteristics. This is where the concept of "modules" or "strings" within a panel becomes important.

*   **How it's done:** Cells are first connected in series to form strings, increasing the voltage. Then, multiple of these series strings are connected in parallel to increase the total current.
*   **The result:** This configuration allows us to tailor the output voltage and current to specific requirements. For example, a panel might have several series strings, each providing a certain voltage, and these strings are then connected in parallel to sum their currents.

*   **Example:** Imagine we need a panel that outputs 36V and 2A. If individual cells produce about 0.5V and 1A, we could:
    *   Connect about 72 cells in series (72 cells * 0.5V/cell = 36V).
    *   If we need 2A, and each cell produces 1A, we could have two such series strings of 72 cells each, and then connect these two strings in parallel. This would give us (36V) and (1A + 1A = 2A).

*   **Textbook Connection:** This is a great place to link back to **CO2: Describe the behaviour of semiconductor materials in semiconductor devices**. The internal resistance (series resistance and shunt resistance) of each cell, as discussed in texts like Streetman and Banerjee's "Solid State Electronic Devices," becomes critical here. When connecting in series, the lowest current cell dictates the string current. When connecting in parallel, the lowest voltage cell dictates the string voltage. Non-uniformities can lead to reduced overall efficiency.

### 4. The Interconnections: The "Stringing" Process

Now, let’s get into the actual physical connection. This is not just theoretical; it's a manufacturing process.

*   **Materials:** Solar cells are typically made of silicon, with metal contacts on the front and back. The front contacts are usually thin, grid-like lines called *fingers* that collect the generated current while minimizing shading of the active cell area. The back contact is usually a continuous metal layer.
*   **Soldering and Tabbing:** The most common method involves soldering thin, flat copper ribbons (called *tabbing wires*) onto the contacts of the solar cells.
    *   The front fingers of one cell are soldered to the back contact of the next cell in the series.
    *   These tabbing wires are crucial because they have low electrical resistance, ensuring minimal power loss during current transfer. They are also flexible enough to withstand some mechanical stress during handling and panel assembly.
*   **Busbars:** Wider ribbons, called *busbars*, are used to connect the ends of the series strings together, and then to the junction box of the solar panel. These busbars carry the higher currents from multiple strings.
*   **Encapsulation:** Once the cells are interconnected, they are encapsulated. This typically involves layers of EVA (Ethylene Vinyl Acetate) film, a clear tempered glass on the front, and a protective backsheet. This encapsulation protects the delicate cells and interconnections from moisture, dust, and physical damage, ensuring long-term reliability. The whole assembly is then heated and laminated under pressure.

*   **Exam Focus:** Questions might revolve around the role of tabbing wires and busbars in minimizing resistance and facilitating current flow. Understanding that the entire structure is then encapsulated for protection is also key.

### 5. Overcoming Challenges: Shading and Bypass Diodes

A significant challenge in solar panel operation is partial shading. If one or more cells in a series string are shaded, their current output drops dramatically. Because the current in a series string is limited by the weakest link, a shaded cell can severely reduce the output of the entire string, and thus the entire panel, even if the unshaded cells are working perfectly.

*   **The Problem:** Imagine a string of 10 cells in series, each producing 1A under full sun. Total current is 1A. If one cell is shaded and can only produce 0.1A, the entire string's current drops to 0.1A, a massive loss!
*   **The Solution: Bypass Diodes:** To mitigate this, bypass diodes are often incorporated into the solar panel design.
    *   **How they work:** A bypass diode is connected in *reverse parallel* across a group of series-connected cells (often across 10-20 cells).
    *   Under normal, unshaded conditions, the bypass diode is reverse-biased and does not conduct any current.
    *   If a group of cells becomes significantly shaded, their voltage drops. When the voltage across the group of cells becomes lower than the voltage provided by the rest of the string, the bypass diode becomes forward-biased.
    *   The current from the unshaded cells then bypasses the shaded group through the low-resistance path of the diode, continuing to flow through the rest of the string.
*   **Benefit:** This prevents the shaded cells from "bottlenecking" the entire string. While the shaded group still doesn't contribute power, the rest of the string can continue to operate closer to its potential, minimizing overall power loss.
*   **Textbook Connection:** This is a brilliant demonstration of **CO2: Describe the behaviour of semiconductor materials in semiconductor devices**. The diode equation and its forward/reverse bias characteristics are directly applied here. The bypass diode acts as a switch that turns on when the voltage across the cells it protects falls below a certain threshold due to shading.

*   **Exam Tip:** Understanding the role of bypass diodes in mitigating the impact of partial shading is a very common exam question. Students need to explain *why* shading is a problem for series strings and *how* bypass diodes solve it by providing an alternative current path.

### 6. Efficiency and Performance Considerations

Stringing affects the overall efficiency and performance of a solar panel.

*   **Matching:** Ideally, all cells within a string should have similar electrical characteristics (voltage and current output) for maximum efficiency. Mismatches can lead to underperformance. Textbooks like "Solid State Physics" by S.O. Pillai discuss resistivity and doping profiles, which influence these cell characteristics.
*   **Temperature:** Solar cell performance is also temperature-dependent. Higher temperatures generally lead to a decrease in voltage output, although current might slightly increase. This is a fundamental property of semiconductor devices (again, **CO2**). Stringing configurations need to consider how temperature variations across a panel might affect individual strings.
*   **Series Resistance:** The resistance of the interconnections (tabbing wires, busbars) and the semiconductor material itself contributes to power loss (I²R losses). Minimizing these resistances is crucial for efficient power extraction. Pierret's "Semiconductor Device Fundamentals" delves into the physics of carrier transport and resistance in semiconductors.

### Connecting to Course Outcomes and Learning

Throughout this discussion, we've consistently linked our practical topic of stringing solar cells to our foundational understanding of semiconductor physics (**CO1**) and device behaviour (**CO2**). The way we connect cells directly manipulates the electrical characteristics derived from their semiconductor properties. The use of bypass diodes is a direct application of diode physics. While this topic doesn't directly touch upon superconductivity or dielectrics (**CO3**), lasers or fiber optics (**CO4**), or experimental procedures (**CO5**), it perfectly illustrates how the fundamental knowledge from **CO1** and **CO2** is applied in real-world engineering solutions that are vital for renewable energy systems.

**Remember this:** The goal of stringing is to combine the small power output of individual semiconductor devices (solar cells) into a larger, usable amount of power, while carefully considering the electrical characteristics and potential failure modes like shading.

---

### Sample Questions and Answers

**Q1. Explain why solar cells are connected in series in a solar panel.**

**Answer:** Solar cells produce a relatively low voltage (around 0.5-0.6V) individually. Most electrical applications require a higher voltage. Connecting solar cells in series effectively "stacks" these voltage sources, so the total voltage of the string becomes the sum of the individual cell voltages. For example, to achieve a panel voltage of around 18-20V suitable for charging a 12V battery, approximately 30-36 cells would be connected in series. This directly relates to **CO1** and **CO2** by leveraging the additive voltage characteristics of series-connected PN junctions.

**Q2. What is the main disadvantage of connecting solar cells in series, and how is it mitigated in modern solar panels?**

**Answer:** The main disadvantage of series connection is that the current flowing through the entire string is limited by the cell with the lowest current output. If one cell in a series string is shaded or damaged, its significantly reduced current output will drastically lower the current for all other cells in that same string, leading to substantial power loss. This is mitigated by incorporating **bypass diodes**. A bypass diode is connected in reverse parallel across a group of series cells. If a group of cells becomes shaded, the bypass diode becomes forward-biased and provides a low-resistance path for the current from the unshaded cells to bypass the shaded group, thus preventing the entire string from shutting down. This demonstrates the practical application of diode characteristics discussed in **CO2**.

**Q3. A solar panel manufacturer decides to connect two strings of 30 cells each in parallel. Each cell in the first string produces 0.5V and 0.8A, and each cell in the second string produces 0.5V and 0.9A. What will be the approximate voltage and current output of this parallel combination, assuming ideal conditions and no internal resistances?**

**Answer:**
When strings are connected in parallel, the voltage remains approximately the same as that of a single string, while the currents add up.

*   **Voltage of String 1:** 30 cells * 0.5V/cell = 15V
*   **Voltage of String 2:** 30 cells * 0.5V/cell = 15V
    Since they are connected in parallel, the total voltage will be approximately **15V**.

*   **Current of String 1:** The current in a series string is limited by the lowest current cell. Assuming all cells in String 1 produce 0.8A, the string current is 0.8A.
*   **Current of String 2:** Assuming all cells in String 2 produce 0.9A, the string current is 0.9A.

When these two strings are connected in parallel, their currents add up:
*   **Total Current:** 0.8A (from String 1) + 0.9A (from String 2) = **1.7A**.

Therefore, the approximate output will be **15V and 1.7A**. This highlights how parallel connections boost current while maintaining voltage, as discussed in the notes and related to **CO2**.

**Q4. What is the function of tabbing wires and busbars in a solar panel?**

**Answer:** Tabbing wires are thin, flat copper ribbons that are soldered to the front electrical contacts (fingers) of one solar cell and the back contact of the next cell in a series string. They serve to connect the cells electrically and conduct the generated current with minimal resistance. Busbars are wider ribbons used to connect the ends of series strings together, and then to the panel's junction box. Their primary function is to carry the accumulated current from multiple series strings efficiently and with low power loss (minimizing I²R losses). This relates to the practical aspects of semiconductor device assembly and the importance of low-resistance interconnects as per **CO2**.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
