---
title: "IGNITION & EMISSION SYSTEM:"
subject: "AUTOMOBILE POWER PLANT"
module: "Module 3: IGNITION & EMISSION SYSTEM:"
branch: "Mechanical Engineering"
semester: 2
topicId: "68bd1edefeb4799d95e83635"
status: "completed"
scrapedAt: "2026-05-20T17:40:47.596Z"
---
# AUTOMOBILE POWER PLANT: Module 3: IGNITION & EMISSION SYSTEM

Welcome, everyone! Today, we're diving into a crucial aspect of the automobile's heart – the **Ignition System** and its inseparable partner, the **Emission System**. These two components work hand-in-hand to ensure our engines not only run powerfully but also responsibly. Understanding these systems is vital for us to grasp how a gasoline engine actually produces that spark of life and how we manage the byproducts of combustion. This directly links to our Course Outcome **CO3: Explain the Ignition system & emission in IC engines**.

Remember, the ultimate goal of an internal combustion engine (ICE) is to convert chemical energy stored in fuel into mechanical energy. For gasoline engines, this conversion process relies on a precisely timed spark to ignite the air-fuel mixture. Without a proper ignition system, the engine simply won't start or run effectively. And as we'll see, the way we ignite that mixture and manage the resulting gases has a direct impact on the environment.

## Understanding the Ignition System: The Spark of Life

Think of the ignition system as the conductor of an orchestra. It doesn't play an instrument itself, but it dictates *when* and *how* each instrument (in our case, the spark plug) performs its crucial role. The primary job of the ignition system is to generate a high-voltage electrical current and deliver it to the spark plug at the precise moment needed to ignite the compressed air-fuel mixture in the cylinder.

This is fundamentally about creating a very powerful electrical arc across the gap of the spark plug. This arc needs to be hot enough and sustained long enough to reliably ignite the fuel vapors.

Let's break down the essential components and how they work together, drawing insights from texts like Ganesan's "Internal Combustion Engines" and Ramalingam's "Internal Combustion Engines."

### Key Components of a Conventional (Non-Electronic) Ignition System

While modern vehicles primarily use electronic ignition systems, understanding the conventional one is like learning the basics of building blocks before moving to advanced architecture. It helps us appreciate the evolution and the underlying principles.

1.  **Battery:** This is the energy source. It provides the initial low-voltage (12V) DC power required to operate the system. It’s like the power station that feeds electricity to the entire grid.

2.  **Ignition Switch:** This is the "on/off" control. When you turn the key, you're closing a circuit, allowing power to flow from the battery to the rest of the ignition system. Simple, but critical!

3.  **Ignition Coil (Transformer Coil):** This is the workhorse that steps up the battery's low voltage (12V) to the very high voltage (typically 20,000 to 30,000 volts, sometimes even higher!) needed to create a spark. How does it do this? It's essentially a transformer. It consists of two coils of wire:
    *   **Primary Winding:** A few hundred turns of thick copper wire.
    *   **Secondary Winding:** Thousands of turns of thin copper wire, wrapped around the primary winding.
    When current flows through the primary winding, it creates a magnetic field. When this current is suddenly interrupted (and this is key!), the magnetic field collapses rapidly. This rapid change in magnetic flux induces a very high voltage in the secondary winding due to electromagnetic induction, as explained by Faraday's Law. Think of it like a sudden stop creating a massive ripple effect. Textbooks like Rajput's "Internal Combustion Engines" detail this electromagnetic induction principle extensively.

4.  **Circuit Breaker (Contact Breaker or Points) and Condenser:** This duo works in perfect harmony to control the flow of current to the ignition coil.
    *   **Circuit Breaker Points:** These are essentially mechanical switches that open and close at precisely the right time. They are operated by a cam driven by the engine's camshaft (usually at half the engine speed for a four-stroke engine). When the points are closed, current flows from the battery, through the primary winding of the coil, and to ground. When the points open, the primary circuit is broken.
    *   **Condenser (Capacitor):** Connected in parallel with the breaker points, the condenser has a crucial job: to absorb the electrical energy stored in the magnetic field of the coil when the points open. Without the condenser, when the points open, a high voltage arc would jump across the contacts themselves, burning them out quickly and weakening the spark at the plug. The condenser absorbs this energy, allowing the magnetic field to collapse more rapidly and cleanly, thus producing a stronger spark at the spark plug. It’s like a surge protector for the points.

5.  **Distributor:** This component is responsible for directing the high voltage from the ignition coil to the correct spark plug at the correct time, based on the firing order of the engine cylinders.
    *   **Distributor Rotor:** Attached to the shaft that's driven by the engine, this spins inside the distributor cap.
    *   **Distributor Cap:** This has several terminals – one central terminal connected to the ignition coil's high-voltage output, and others around the perimeter, each connected by a wire to a specific spark plug. As the rotor spins, it bridges the gap between the center terminal and the terminal for the cylinder about to fire, delivering the high-voltage pulse.

6.  **Spark Plug:** This is the final frontier, the device that actually creates the spark inside the combustion chamber. It has two electrodes (a central electrode and a ground electrode) separated by a small air gap. The high voltage from the coil forces electricity to jump this gap, creating a spark. The design of the spark plug, including the gap setting, is critical for efficient combustion.

### The Working Principle (Conventional System)

Let's trace the path of electricity:

1.  **Ignition Switch ON:** Current flows from the battery (12V).
2.  **Coil Primary Circuit:** Current flows through the ignition switch, then through the **closed** breaker points, and into the **primary winding** of the ignition coil. The condenser is also connected across the points.
3.  **Magnetic Field Buildup:** As current flows through the primary winding, a magnetic field builds up around the coil.
4.  **Breaker Points Open:** As the engine turns, the cam lobe on the distributor shaft pushes the breaker points apart, **opening** the primary circuit.
5.  **Field Collapse & High Voltage Induction:** The sudden interruption of current in the primary winding causes the magnetic field to collapse rapidly. This rapid collapse induces a very high voltage (thousands of volts) in the **secondary winding** of the coil. The condenser helps to absorb any arcing at the points, ensuring a cleaner collapse and a stronger induced voltage.
6.  **High Voltage Distribution:** The high voltage generated in the secondary winding is then sent to the **distributor cap**. The spinning **rotor** directs this high voltage pulse to the correct terminal in the cap.
7.  **Spark at Plug:** A high-voltage wire connects that terminal to the **spark plug** in the cylinder that is at the end of its compression stroke. The high voltage jumps the gap of the spark plug, creating a spark that ignites the compressed air-fuel mixture.
8.  **Cycle Repeats:** The breaker points close again, the magnetic field builds up, and the cycle repeats for the next cylinder in the firing sequence.

**Remember this:** The timing of when those breaker points open is *crucial*. Too early or too late, and the engine won't run efficiently, or at all! This timing is called **ignition timing**.

### Modern Electronic Ignition Systems

The conventional system, while understandable, has limitations. Wear and tear on the points and condenser, and the mechanical nature of timing, led to the development of more reliable and precise **electronic ignition (EI)** systems. These systems eliminate the mechanical breaker points and offer significant advantages.

**Types of Electronic Ignition Systems:**

1.  **Contactless (Hall Effect or Inductive Pickup) Systems:** These use electronic sensors to detect the position of the crankshaft or camshaft (or a rotating disc within the distributor) instead of mechanical points. A magnetic pickup or Hall effect sensor generates an electrical signal that tells an electronic control unit (ECU) or a dedicated ignition module when to trigger the ignition coil. This signal replaces the function of the breaker points.
    *   **Hall Effect Sensor:** Works based on the Hall effect. When a magnet (attached to the rotating component) passes near the sensor, it causes a change in the magnetic field, generating a voltage pulse.
    *   **Inductive Pickup:** Consists of a magnet and a coil. As a toothed wheel (like a reluctor wheel) rotates, the teeth alter the magnetic field, inducing a voltage in the coil.

2.  **Distributorless Ignition Systems (DIS) / Coil-on-Plug (COP):** These are the most advanced systems commonly found today.
    *   **DIS:** Eliminates the distributor altogether. Instead, ignition coils are paired up, with each coil serving two cylinders that are at opposite ends of their firing strokes (e.g., one on compression, one on exhaust). This is called "waste spark" ignition because a spark also occurs in the cylinder on the exhaust stroke, but it's wasted as there's no fuel mixture to ignite.
    *   **COP:** Each spark plug has its own dedicated ignition coil mounted directly on top of it. This provides the most precise timing and the strongest possible spark, as there are no long high-voltage wires to transmit the energy, which can lead to voltage loss and interference. Each coil is triggered directly by the engine's ECU.

**Advantages of Electronic Ignition:**

*   **Improved Reliability:** No mechanical parts to wear out or require adjustment (like points).
*   **Greater Accuracy:** Precise timing control, often managed by the ECU, which can adjust timing based on engine load, speed, temperature, and other factors.
*   **Stronger Spark:** Higher energy output for better combustion, especially at high RPMs or under load.
*   **Reduced Maintenance:** No need to set point gaps or replace points/condenser.
*   **Diagnostic Capabilities:** ECUs can often store fault codes related to the ignition system.

This evolution from mechanical to electronic ignition highlights how engineers continuously strive for better performance and efficiency, a recurring theme in "Internal Combustion Engines Fundamentals" by John Heywood.

## The Emission System: Cleaning Up Our Act

Now, let's shift gears to the Emission System. This is the environmental conscience of our engine. When fuel burns, it's not a perfectly clean process. In addition to the desired carbon dioxide (CO2) and water (H2O), incomplete combustion and high temperatures in the engine can produce harmful pollutants.

Our Course Outcome **CO3** also covers emissions, and it’s a topic that has become increasingly important due to environmental regulations. Think about the air we breathe; controlling engine emissions is a direct way the automotive industry contributes to cleaner air.

### Major Pollutants from Gasoline Engines

Before we talk about controlling them, let's identify the main culprits:

1.  **Hydrocarbons (HC):** Unburnt or partially burnt fuel. They contribute to smog and can be carcinogenic. They escape through the exhaust, blow-by (gas that leaks past the piston rings into the crankcase), and fuel evaporation.

2.  **Carbon Monoxide (CO):** A colorless, odorless, but highly toxic gas. It's formed when there isn't enough oxygen for complete combustion (rich air-fuel mixture). CO is a major air pollutant and a health hazard.

3.  **Oxides of Nitrogen (NOx):** This is a group of gases, primarily nitric oxide (NO) and nitrogen dioxide (NO2). They are formed at very high combustion temperatures when nitrogen and oxygen in the air react. NOx contributes to smog and acid rain, and it can irritate the respiratory system.

4.  **Particulate Matter (PM):** Tiny solid particles, often called soot, that are formed during incomplete combustion, especially in diesel engines but also present in gasoline engines. These are detrimental to respiratory health.

5.  **Lead (Pb):** Historically, lead compounds were added to gasoline as an anti-knock agent. However, lead is a highly toxic heavy metal, and its use has been phased out in most countries.

### Technologies for Controlling Emissions

The automotive industry has developed several ingenious technologies to mitigate these pollutants. These are often integrated with the engine's control systems.

1.  **Positive Crankcase Ventilation (PCV) System:**
    *   **Problem:** During engine operation, some combustion gases inevitably leak past the piston rings into the crankcase. These gases contain unburnt fuel (HC) and other harmful substances. If left to accumulate, they can degrade engine oil and build up pressure.
    *   **Solution:** The PCV system routes these blow-by gases back into the intake manifold to be re-combusted in the engine. A PCV valve, often a simple spring-loaded diaphragm, controls the flow of these gases. At idle, when manifold vacuum is high, the valve restricts flow. Under load, when manifold vacuum is lower, the valve opens more, allowing greater flow.
    *   **Impact:** Significantly reduces HC emissions by reintroducing them into the combustion process.

2.  **Fuel Evaporation Control System (EVAP):**
    *   **Problem:** Gasoline is volatile, meaning it evaporates easily. Fuel vapors can escape from the fuel tank and carburetor (in older vehicles) or fuel injectors and other parts of the fuel system. These vapors are primarily unburnt hydrocarbons (HC).
    *   **Solution:** The EVAP system captures these fuel vapors. Vapors are typically routed from the fuel tank into a charcoal canister filled with activated charcoal. The charcoal adsorbs the fuel vapors, preventing them from escaping into the atmosphere. Later, when the engine is running and the conditions are right (e.g., engine warm, not at idle), the ECU opens a purge control valve, allowing manifold vacuum to draw the stored vapors from the charcoal canister into the intake manifold for combustion.
    *   **Impact:** Reduces HC emissions from fuel evaporation.

3.  **Catalytic Converter:** This is perhaps the most important emission control device in modern gasoline vehicles. It's a marvel of chemical engineering.
    *   **What it is:** A device installed in the exhaust system that uses precious metals (like platinum, palladium, and rhodium) as catalysts to convert harmful pollutants into less harmful substances.
    *   **How it works:** Most modern gasoline vehicles use a **three-way catalytic converter** (also known as a TWC). This is because it simultaneously handles three main types of pollutants:
        *   **Oxidation of Hydrocarbons (HC):** The catalyst promotes a reaction where HC combines with oxygen to form CO2 and H2O.
            *   `2 HCs + O2 → CO2 + H2O`
        *   **Oxidation of Carbon Monoxide (CO):** The catalyst promotes a reaction where CO combines with oxygen to form CO2.
            *   `2 CO + O2 → 2 CO2`
        *   **Reduction of Oxides of Nitrogen (NOx):** The catalyst promotes a reaction where NOx is broken down into nitrogen gas (N2) and oxygen (O2).
            *   `2 NOx → N2 + O2` (simplified)
    *   **Crucial Requirement: Stoichiometric Air-Fuel Ratio:** For the three-way catalytic converter to work most effectively, the air-fuel ratio must be precisely maintained at the **stoichiometric ratio** (approximately 14.7:1 for gasoline). This is where there is just enough oxygen to completely burn the fuel.
    *   **Oxygen Sensor (O2 Sensor or Lambda Sensor):** To maintain this critical stoichiometric ratio, vehicles are equipped with oxygen sensors, usually placed in the exhaust manifold before the catalytic converter. The O2 sensor measures the amount of oxygen in the exhaust gases. The engine's ECU constantly monitors this signal and adjusts the fuel injection (or carburetor mixture) to keep the air-fuel ratio near stoichiometric. If the mixture is too rich (too much fuel, not enough oxygen), the O2 sensor signals this, and the ECU reduces fuel. If the mixture is too lean (too much oxygen), the ECU increases fuel. It's a continuous feedback loop. As highlighted in Ganesan's book, this closed-loop control is fundamental to modern emission control.
    *   **Catalyst Coating:** The catalysts are coated onto a ceramic honeycomb or metallic substrate. This substrate provides a large surface area for the catalytic reactions to occur.

4.  **Exhaust Gas Recirculation (EGR) System (Primarily for NOx control):**
    *   **Problem:** NOx formation is directly linked to high combustion temperatures.
    *   **Solution:** The EGR system reintroduces a small amount of exhaust gas back into the intake manifold. Exhaust gas is mostly inert (nitrogen and CO2), so when it's mixed with the fresh air-fuel charge, it absorbs some of the heat during combustion, lowering the peak combustion temperature.
    *   **Impact:** By reducing combustion temperatures, the EGR system significantly reduces the formation of NOx. The amount of exhaust gas recirculated is carefully controlled by an EGR valve, which is typically operated by manifold vacuum or the ECU.

**Importance of Integrated Control:**

It’s vital to understand that these systems don't work in isolation. The engine's Electronic Control Unit (ECU) is the brain, managing everything from ignition timing to fuel injection and the operation of emission control devices like the EVAP purge valve and EGR valve, all based on input from sensors like the oxygen sensor. This integrated approach, often discussed in detail in reference texts like Mathur & Sharma, is what makes modern engines both powerful and relatively clean.

## Connecting to Course Outcomes

Let's quickly recap how this topic fulfills our Course Outcomes:

*   **CO1: Understand constructional details and working of various internal combustion engine:** We've delved into the components of the ignition system (coil, spark plug, distributor) and the working principles of both ignition and emission control systems.
*   **CO3: Explain the Ignition system & emission in IC engines:** This entire module directly addresses this outcome. We’ve covered the "what," "why," and "how" of ignition and emission control.

The other course outcomes, like fuel and air induction (CO2), and cooling/lubrication (CO4), are related systems that work alongside ignition and emissions to ensure the overall efficient and reliable operation of the engine, but our focus here is specifically on creating that spark and managing the exhaust.

## Exam Focus & Key Takeaways

When preparing for exams, remember these critical points:

*   **Ignition System:** Be able to describe the function of each component in a conventional system and explain *how* the high voltage is generated (transformer action). Understand the role of the breaker points and condenser. For electronic systems, focus on the *advantages* and *why* they replaced mechanical systems. Know the difference between DIS and COP.
*   **Emission System:** Identify the main pollutants (HC, CO, NOx) and their sources. Understand the purpose and working principle of PCV, EVAP, Catalytic Converter, and EGR. Crucially, understand *why* the stoichiometric air-fuel ratio is important for the catalytic converter and the role of the oxygen sensor.
*   **Interrelation:** How does ignition timing affect emissions? (e.g., advanced timing can increase NOx). How does air-fuel ratio affect emissions and the catalytic converter?

**Common Pitfalls:** Students sometimes confuse the roles of the primary and secondary windings in the coil or don't fully grasp the condenser's function. For emissions, make sure you know which system controls which pollutant and the underlying chemical reactions or physical principles involved.

Let's solidify this with some practice.

---

## Sample Questions with Answers

**Question 1 (Conceptual):** Explain the fundamental principle by which an ignition coil steps up low voltage to high voltage.

**Answer:** The ignition coil works on the principle of electromagnetic induction, specifically mutual induction between its primary and secondary windings. It is essentially a transformer. When a low voltage current (from the battery) flows through the primary winding, it creates a magnetic field. When this current is suddenly interrupted by the breaker points (or an electronic switch), the magnetic field collapses rapidly. This rapid change in magnetic flux induces a very high voltage in the secondary winding, which has many more turns of wire than the primary. This induced high voltage is then directed to the spark plug to create a spark. This is a direct application of Faraday's Law of Induction.

**Question 2 (Application):** Why is maintaining a stoichiometric air-fuel ratio essential for the efficient operation of a three-way catalytic converter?

**Answer:** A three-way catalytic converter simultaneously oxidizes hydrocarbons (HC) and carbon monoxide (CO) into carbon dioxide and water, and reduces oxides of nitrogen (NOx) into nitrogen and oxygen. For all three reactions to occur simultaneously and efficiently, the air-fuel ratio must be very close to the stoichiometric ratio (around 14.7:1 for gasoline).
*   At lean mixtures (excess oxygen), there is plenty of oxygen for HC and CO oxidation, but not enough for efficient NOx reduction.
*   At rich mixtures (insufficient oxygen), there is enough reducing potential for NOx reduction, but not enough oxygen for efficient HC and CO oxidation.
Therefore, the stoichiometric ratio provides the optimal balance of oxidizing and reducing conditions required for all three pollutant conversions, and this is precisely why oxygen sensors and ECU control are critical for modern emission systems.

**Question 3 (Exam-Oriented):** Differentiate between a Distributorless Ignition System (DIS) and a Coil-on-Plug (COP) system, highlighting their advantages.

**Answer:**
*   **Distributorless Ignition System (DIS):**
    *   **Working:** Eliminates the traditional distributor. Ignition coils are paired, with each coil serving two cylinders that are 180 degrees apart in their firing cycle. One cylinder is on its compression stroke (requiring a spark), while the other is on its exhaust stroke (spark is "wasted").
    *   **Advantages:** More reliable than conventional systems due to the absence of distributor wear parts (points, rotor). Simpler than COP as it still uses spark plug wires.
*   **Coil-on-Plug (COP) System:**
    *   **Working:** Each spark plug has its own individual ignition coil mounted directly on top of it. The ECU controls each coil independently.
    *   **Advantages:** Provides the most precise ignition timing and the strongest spark. Eliminates high-voltage spark plug wires entirely, which reduces voltage loss, radio frequency interference (RFI), and potential for wire failure. Offers the highest level of control and diagnostic capability for individual cylinders.

**Question 4 (Knowledge Recall):** List the major gaseous pollutants from a gasoline engine and their primary sources or formation mechanisms.

**Answer:**
*   **Hydrocarbons (HC):** Unburnt or partially burnt fuel. Sources include incomplete combustion, quenching (flame dying out near cylinder walls), and blow-by.
*   **Carbon Monoxide (CO):** Formed during incomplete combustion due to insufficient oxygen (rich air-fuel mixture).
*   **Oxides of Nitrogen (NOx):** Formed at high combustion temperatures when atmospheric nitrogen and oxygen react.

**Question 5 (Critical Thinking):** How does the PCV system contribute to reducing emissions?

**Answer:** The PCV (Positive Crankcase Ventilation) system reduces emissions by preventing the release of blow-by gases into the atmosphere. Blow-by gases are a mixture of unburnt fuel, combustion products, and oil vapors that leak past the piston rings into the crankcase. These gases are primarily hydrocarbons (HC) and are environmentally harmful. The PCV system routes these gases back into the intake manifold, where they are mixed with the fresh air-fuel charge and re-combusted in the engine. This effectively cleans up the crankcase and eliminates a source of HC emissions.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
