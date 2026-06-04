---
title: "Fixed voltage power supply with transformer"
subject: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP"
module: "Module 15: Assembling of electronic circuit/system on general purpose PCB, test and show the functioning (Any two)"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213d9ece2bdd875f93a1"
status: "completed"
scrapedAt: "2026-05-23T16:00:57.105Z"
---
## Module 15: Assembling Electronic Circuits on General Purpose PCB – Fixed Voltage Power Supply with Transformer

Welcome, everyone! Today, we're diving into a fundamental and incredibly useful topic in our workshop: **building a Fixed Voltage Power Supply using a Transformer.** This is a cornerstone of many electronic devices, and understanding how it works and how to assemble it on a general-purpose PCB will give you a fantastic practical skill.

Remember, the goal of this module is to get hands-on experience, assemble a working circuit, test it, and demonstrate its functionality. Specifically, we're focusing on a fixed voltage power supply with a transformer. Think of this as the "heart" that provides the steady, reliable power needed for other electronic components to function correctly.

### 1. The Necessity of a Power Supply: Why Do We Need This?

Before we get into the nitty-gritty of the circuit, let's ask ourselves: why do we even need a power supply? Our household wall sockets provide Alternating Current (AC) at a high voltage (like 230V in India). However, most electronic components, like the ones in your mobile phones, computers, or even a simple LED, require a low, stable Direct Current (DC) voltage (like 5V, 9V, or 12V).

So, the power supply's job is to bridge this gap. It takes the raw, fluctuating AC from the mains and transforms it into a clean, steady DC voltage that our sensitive electronic devices can use. This is where our **CO1: Demonstrate safety measures against electrical shocks** and **CO3: Illustrate the connection diagram and identify the suitable accessories necessary for wiring simple electric circuits** come into play. Working with mains voltage requires extreme caution, and we'll always be mindful of safety protocols. We’ll also need to identify the right wires, connectors, and fuse holders – the "accessories" for safe operation.

### 2. The Core Components: Our Building Blocks

Our fixed voltage power supply with a transformer relies on a few key components. Let's introduce them as we would in a lab:

#### 2.1 The Transformer: The Voltage Shaper

Our journey starts with the **transformer**. As mentioned in **CO2: Familiarise with transformers, rheostats, batteries and earthing schemes**, a transformer is a crucial passive electrical device that transfers electrical energy between two or more circuits through electromagnetic induction. Its primary function here is **voltage reduction**.

Think of a transformer like a set of gears. You can use gears to increase or decrease rotational speed and torque. Similarly, a transformer uses coils of wire wound around a magnetic core to "step down" the high AC voltage from the mains to a lower, more manageable AC voltage.

*   **Primary Winding:** This is connected to the AC mains supply.
*   **Secondary Winding:** This winding provides the reduced AC voltage.
*   **Turns Ratio:** The ratio of the number of turns in the primary winding to the number of turns in the secondary winding determines how much the voltage is stepped down. A higher turns ratio means a greater voltage reduction.

**Example:** Imagine you have a high-pressure water hose (high voltage AC) and you need to water your plants gently (low voltage DC). A transformer is like a special nozzle that reduces the water pressure before it reaches your delicate plants.

#### 2.2 The Rectifier: The AC to DC Converter

The output of the transformer is still AC – it alternates direction. Our electronic components need DC, which flows in only one direction. This is where the **rectifier** comes in. The most common rectifier we use for this purpose is the **diode**.

*   **Diodes:** These are like one-way valves for electricity. They allow current to flow in only one direction.
*   **Half-wave Rectifier:** Uses a single diode to allow only half of the AC waveform to pass. This is simple but inefficient.
*   **Full-wave Rectifier:** Uses multiple diodes (usually four in a **bridge rectifier configuration**) to utilize both halves of the AC waveform, providing a more efficient DC output. This is what we'll typically build.

**Example:** Think of a turnstile at a stadium. It only allows people to pass through in one direction. A diode is similar – it only lets current flow one way. A full-wave rectifier is like having two turnstiles that work in opposite directions, allowing more people to enter efficiently.

#### 2.3 The Filter: Smoothing Out the Ripples

Even after rectification, the DC output isn't perfectly smooth. It still has "ripples" – variations in voltage. We need to smooth these out to provide a steady DC. This is the job of the **filter circuit**.

*   **Capacitors:** The most common filter component. Capacitors store electrical energy and release it when the voltage drops. When connected in parallel with the rectifier output, they act like a small reservoir, filling in the dips in the voltage, thus smoothing the output.

**Example:** Imagine filling a bucket with water using a ladle. If you just pour, the water level might fluctuate. But if you use a larger container and continuously add water, the level will be much more stable. A capacitor acts like that larger container, smoothing out the fluctuations.

#### 2.4 The Voltage Regulator: The Precision Keeper

While filtering significantly smooths the DC, the output voltage can still vary slightly with changes in the input voltage or the load (the device connected to the power supply). To ensure a perfectly constant output voltage, we use a **voltage regulator**.

*   **Zener Diodes:** These diodes have a special property: when the voltage across them reaches a specific "Zener voltage," they start conducting heavily and maintain a nearly constant voltage across themselves, regardless of fluctuations.
*   **Linear Regulators (like the popular 78xx series for positive voltage or 79xx for negative voltage):** These are integrated circuits (ICs) specifically designed to maintain a stable output voltage. They are very reliable and easy to use. For instance, a 7805 will give you a steady +5V output.

**Example:** Imagine you have a car's cruise control. It maintains a constant speed even when going uphill or downhill. A voltage regulator is like cruise control for voltage, keeping it precisely at the desired level.

### 3. Assembling the Circuit on a General Purpose PCB

Now, let's talk about putting it all together on our **general-purpose PCB**. This is where **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB** comes into play. A general-purpose PCB, often called a perfboard or veroboard, has pre-drilled holes connected by copper tracks. We'll be using soldering to connect components and wires to create our circuit.

**Step-by-Step Assembly (Conceptual):**

1.  **Understand the Circuit Diagram:** First, we need a clear schematic (circuit diagram) of the fixed voltage power supply. This shows us how all the components are connected. (This is crucial for **CO3**).
2.  **Component Identification:** Using **CO4: Identify various electronic components**, we'll identify each component: the transformer, diodes (for the bridge rectifier), capacitors (for filtering), and the voltage regulator IC (like 7805).
3.  **Layout Planning:** Before soldering, we plan the placement of components on the PCB. We want to keep connections short and neat, especially around the regulator IC, which can get warm.
4.  **Soldering:** We'll carefully solder the components to the PCB, ensuring good connections. This is a critical skill that requires practice. We'll use a soldering iron, solder, and flux.
5.  **Wiring:** We'll connect the transformer's output to the rectifier, the rectifier output to the filter capacitor, and the filtered output to the voltage regulator's input. The regulator's output will then be connected to the output terminals. We'll also need to consider input connections for the transformer and output connections for the regulated voltage.

**Key Considerations for PCB Assembly:**

*   **Polarity:** Diodes and electrolytic capacitors have polarity (positive and negative terminals). Connecting them incorrectly will prevent the circuit from working or even damage them. Always check the markings!
*   **Heat Sinks:** Voltage regulators can generate heat, especially when handling larger currents. If your regulator is likely to get hot, you might need to attach a **heat sink** to it. This is a metal component that dissipates heat away from the IC.
*   **Layout:** Try to keep the high-current paths (around the transformer and rectifier) separate from the more sensitive regulator and output stages.
*   **Safety First:** Always ensure the mains power is OFF and disconnected before you start working on the PCB, especially when handling the transformer's primary side.

### 4. Testing and Demonstration: Making it Work!

Once assembled, the real fun begins: testing! This is where **CO5: Operate various measuring instruments** becomes essential.

1.  **Visual Inspection:** Before powering up, we do a thorough visual check for any stray solder bridges (unintended connections), loose wires, or incorrectly placed components.
2.  **No-Load Test:**
    *   Connect the transformer's primary to the mains supply (preferably through a fuse and a switch).
    *   Using a **Multimeter** (set to AC Voltage mode), measure the AC voltage across the transformer's secondary winding. This should match the transformer's rating.
    *   Connect the rectifier and filter. Switch to DC Voltage mode and measure the DC voltage *before* the regulator. It will be a fluctuating DC (with ripples).
    *   Measure the DC voltage at the output of the voltage regulator. This should be a stable, fixed voltage (e.g., close to 5V if using a 7805).
3.  **Load Test:**
    *   Connect a load (like a resistor or an LED with a current-limiting resistor) to the output of the voltage regulator.
    *   Measure the output voltage again with the load connected. It should remain relatively stable. If the voltage drops significantly, your regulator might not be able to supply enough current, or the filtering might be inadequate.

**Demonstrating Functionality:**

We can demonstrate the working by:

*   Showing the regulated voltage reading on the multimeter.
*   Connecting an LED to the output. If the LED lights up brightly and steadily, it's a good sign the power supply is working well.
*   If you have a variable load, you can show how the output voltage remains constant even when the load changes.

### 5. Connecting to Course Outcomes: Making the Links

Let's explicitly see how this topic ties into our course outcomes:

*   **CO1 (Safety):** Handling mains voltage with the transformer directly links to understanding electrical shock hazards and using safety precautions like proper insulation, fuses, and grounding.
*   **CO2 (Familiarization):** We directly use a transformer, understand its function, and indirectly touch upon batteries (as a DC source we're trying to emulate stably) and earthing (important for the safety of mains-connected equipment).
*   **CO3 (Wiring Diagrams & Accessories):** The entire process of assembling on a PCB involves interpreting wiring diagrams and selecting appropriate accessories like wires, connectors, fuse holders, and maybe even a power switch.
*   **CO4 (Component Identification):** We identify and use transformers, diodes, capacitors, and voltage regulator ICs.
*   **CO5 (Measuring Instruments):** Testing the power supply heavily relies on using a multimeter to measure AC and DC voltages.
*   **CO6 (Design Procedure):** We apply the practical steps of assembling a circuit on a PCB, moving from schematic to a functional unit. This involves layout, soldering, and connecting components in the correct sequence.
*   **CO7 (Teamwork):** Often, these workshop activities are done in pairs or small groups, fostering teamwork and shared learning.

### 6. Exam Focus & Common Pitfalls

When it comes to exams for this topic, expect questions on:

*   **Function of each component:** Be ready to explain what the transformer, rectifier, filter, and regulator do.
*   **Circuit diagram:** You might be asked to draw or interpret a simplified schematic of a full-wave rectifier with filtering and regulation.
*   **Polarity:** Questions about correct polarity of diodes and capacitors are common. Incorrect polarity is a classic mistake students make.
*   **Testing:** What measurements would you take, and what values would you expect?
*   **Safety:** What safety precautions are necessary when working with mains voltage?

**Common Pitfalls:**

*   **Incorrect component placement:** Especially with ICs and polarized components.
*   **Bad solder joints:** Cold solder joints (dull, lumpy) can cause intermittent faults.
*   **Ignoring polarity:** This is a very frequent error.
*   **Short circuits:** Unintended connections between components or tracks.
*   **Overheating:** Not using a heat sink when necessary for the regulator.

**Quick Recall Tip:** Think of the power supply stages as a "pipeline": Transformer (reduces pressure) -> Rectifier (makes flow unidirectional) -> Filter (smoothes out surges) -> Regulator (maintains steady pressure).

***

### Sample Questions with Answers

**Q1. What is the primary function of the transformer in a DC power supply?**

**Answer:** The primary function of the transformer in a DC power supply is to **step down** the high AC voltage from the mains supply to a lower, more manageable AC voltage that can be safely processed by the subsequent components like the rectifier and regulator. This is crucial for matching the input voltage requirements of the electronic circuit and for safety.

*(Connects to CO2: Familiarise with transformers)*

**Q2. Explain why a filter capacitor is necessary after the rectifier stage.**

**Answer:** After rectification (especially full-wave rectification), the output is pulsating DC, meaning it alternates between positive voltage and zero (or negative voltage in some half-wave cases), but it still has significant "ripples" or variations in voltage. A filter capacitor, typically an electrolytic capacitor, is connected in parallel with the rectifier output. It charges up when the rectified voltage is high and discharges slowly when the voltage starts to drop, effectively "filling in" the dips. This significantly smooths out the pulsating DC, bringing it closer to a steady DC voltage before it reaches the voltage regulator. Without filtering, the voltage fluctuations could damage sensitive electronic components.

*(Connects to CO4: Identify various electronic components; CO6: Apply the design procedure)*

**Q3. A student is building a 5V power supply using an LM7805 voltage regulator. They measure 8V DC unregulated input voltage and then measure 4.5V DC at the output. What could be the most likely reasons for this low output voltage? (Choose TWO most likely reasons)**

**Possible Reasons:**
    a) The input AC voltage from the transformer was too low.
    b) The LM7805 regulator is faulty.
    c) The filter capacitor is too small.
    d) The load connected to the output is drawing excessive current.
    e) The regulator is connected with reverse polarity.

**Answer:**
The most likely reasons for a low output voltage of 4.5V when the input is 8V and the target is 5V are:

*   **d) The load connected to the output is drawing excessive current.** The LM7805 requires a certain minimum voltage drop across it (dropout voltage) to maintain regulation. If the connected load tries to draw more current than the regulator can supply (or the unregulated DC voltage is barely above the dropout voltage under load), the output voltage will drop below the regulated value.
*   **b) The LM7805 regulator is faulty.** Voltage regulators can fail, leading to incorrect or unstable output voltages. If the component itself is damaged, it will not perform its function correctly.

**Reasoning for other options:**
    *   a) If the input AC voltage was too low, the unregulated DC input to the regulator would be lower than 8V, which might also cause the output to be low, but 8V input is usually sufficient for a 5V regulator. However, it's the *unregulated DC input* that matters, and if it's already stable at 8V, this is less likely the *sole* cause than load or a faulty regulator.
    *   c) A filter capacitor being too small would lead to *more ripple*, but usually not a significantly lower *average* DC output unless the unregulated DC input itself is very unstable.
    *   e) If the regulator was connected with reverse polarity, it would likely not function at all, or potentially be damaged, rather than producing a low positive voltage.

*(Connects to CO4: Identify various electronic components; CO5: Operate various measuring instruments; CO6: Apply the design procedure)*

**Q4. What safety precautions are essential when connecting the primary side of the transformer to the mains supply?**

**Answer:** When connecting the primary side of the transformer to the mains supply, several critical safety precautions must be taken:
1.  **Ensure Mains Power is OFF:** Always disconnect the mains power before making any connections.
2.  **Proper Insulation:** All connections to the primary winding must be securely made and adequately insulated using heat-shrink tubing or electrical tape to prevent accidental contact.
3.  **Use a Fuse:** A fuse must be incorporated in series with the live wire of the mains supply. This acts as a safety device, blowing and disconnecting the power in case of a short circuit or overcurrent, preventing fire hazards and damage.
4.  **Earthing:** The metal chassis or casing of the power supply unit, if any, should be properly earthed to provide a safe path for current to flow to the ground in case of an internal fault, protecting the user from electric shock.
5.  **Avoid Touching Live Wires:** Never touch exposed wires or terminals when the unit is connected to the mains.

*(Connects to CO1: Demonstrate safety measures against electrical shocks; CO3: Illustrate the connection diagram and identify the suitable accessories necessary for wiring simple electric circuits)*
