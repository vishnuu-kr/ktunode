---
title: "Rectifier diode"
subject: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP"
module: "Module 15: Assembling of electronic circuit/system on general purpose PCB, test and show the functioning (Any two)"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213d9ece2bdd875f93a2"
status: "completed"
scrapedAt: "2026-05-23T16:00:57.887Z"
---
# Module 15: Assembling of Electronic Circuit/System on General Purpose PCB, Test and Show the Functioning
## Topic: Rectifier Diode

Welcome, everyone! In this module, we're going to get our hands dirty with some practical work. We'll be building electronic circuits on a General Purpose PCB (Printed Circuit Board) and then testing them to see them come to life. This is where all the theory you've learned starts to make real-world sense.

Our first key component to explore today is the **Rectifier Diode**. You'll find diodes are fundamental building blocks in almost every electronic circuit. Think of them as one-way streets for electricity.

### What is a Rectifier Diode?

At its core, a diode is a **two-terminal semiconductor device** that primarily conducts current in **one direction**. This directional property is crucial. Imagine water flowing through a pipe with a special valve that only opens when the pressure is on one side. That's essentially what a diode does for electrical current.

*   **Anode and Cathode:** A diode has two terminals: the **anode** (positive) and the **cathode** (negative). Current flows from the anode to the cathode when the diode is "forward-biased."
*   **Forward Bias:** When a voltage is applied across the diode such that the anode is at a higher potential than the cathode, the diode is said to be forward-biased. In this state, it allows current to flow through it, almost like a closed switch, though there's a small voltage drop across it (typically around 0.7V for silicon diodes).
*   **Reverse Bias:** When the voltage is applied such that the cathode is at a higher potential than the anode, the diode is reverse-biased. In this state, it blocks the flow of current, acting like an open switch. However, a very small leakage current might flow, which is usually negligible for most applications.

**Why "Rectifier" Diode?**
The term "rectifier" comes from its most common application: **rectification**. Rectification is the process of converting alternating current (AC), which periodically reverses direction, into direct current (DC), which flows in only one direction. Our mains electricity supply is AC – it swings from positive to negative. Most electronic devices, like your phone charger or computer, need DC to operate. Diodes are the unsung heroes that make this conversion possible!

This directly connects to our **Course Outcome CO4: Identify various electronic components**. Today, we're identifying and working with the diode, recognizing its symbol and its function.

### Types of Rectifier Diodes

While all diodes have this one-way current property, there are different types optimized for specific tasks. For basic rectification, we often use:

1.  **General Purpose Diodes:** These are the workhorses. Examples include the 1N4001 through 1N4007 series. They are suitable for low-frequency AC to DC conversion.
2.  **Rectifier Diodes (Power Diodes):** These are designed to handle higher currents and voltages, essential when rectifying the output of transformers for power supplies.

**Relatable Example:** Think about the charging port on your laptop. It takes the AC from the wall socket and converts it into DC to charge your battery. Inside that power adapter, you'll find rectifier diodes doing this essential job. Without them, your laptop wouldn't get the stable DC power it needs to operate.

### How Diodes Work (A Deeper Look for Understanding)

To truly understand why a diode acts as a one-way street, we need to touch upon semiconductor physics. Diodes are typically made from silicon or germanium. A diode is essentially a **PN junction**.

*   **N-type Semiconductor:** This material has an excess of free electrons (negative charge carriers).
*   **P-type Semiconductor:** This material has an excess of "holes" (places where an electron is missing, acting like a positive charge carrier).

When you bring these two together, at the junction, some free electrons from the N-type side diffuse into the P-type side, and some holes from the P-type side diffuse into the N-type side. This diffusion creates a region depleted of free charge carriers right at the junction, called the **depletion region**. This region also has an electric field across it, known as the **built-in potential** or **barrier potential**.

*   **Forward Bias Explained:** When you apply a positive voltage to the P-side (anode) and negative to the N-side (cathode), this external voltage opposes the built-in potential. If the applied voltage is greater than the barrier potential (around 0.7V for silicon), it pushes charge carriers across the junction, overcoming the depletion region, and allowing current to flow.
*   **Reverse Bias Explained:** When you apply a negative voltage to the P-side and positive to the N-side, the external voltage adds to the built-in potential. This widens the depletion region and creates a strong barrier that prevents significant current flow.

This is a key concept, and understanding the PN junction helps us appreciate the diode's behavior. It's foundational knowledge in understanding many semiconductor devices.

### Applications of Rectifier Diodes in Circuits

The primary application we're focusing on in this module is rectification. Here's how it's used:

1.  **Half-Wave Rectification:** This is the simplest form. It uses a single diode to allow only half of the AC input waveform to pass through. The other half is blocked.
    *   **How it works:** During the positive half-cycle of the AC input, the diode is forward-biased and conducts. During the negative half-cycle, it's reverse-biased and blocks the current.
    *   **Result:** You get a pulsating DC output, where you have current flowing only during alternate half-cycles.
    *   **Visualisation:** Imagine a fan that only spins when you push it in one direction. The output is a series of "pulses" of rotation, not smooth continuous rotation.

2.  **Full-Wave Rectification:** This is more efficient as it utilizes both halves of the AC input waveform. There are two common configurations:
    *   **Center-Tapped Full-Wave Rectifier:** This uses a transformer with a center tap and two diodes. Each diode conducts during one half of the AC cycle, effectively "flipping" the negative half-cycle to become positive in the output.
    *   **Bridge Rectifier:** This is the most common type and uses four diodes arranged in a diamond shape. It doesn't require a center-tapped transformer. Regardless of the polarity of the AC input, the diodes are arranged so that the current always flows through the load in the same direction.

**Connecting to Course Outcomes:**
*   **CO3: Illustrate the connection diagram and identify the suitable accessories necessary for wiring simple electric circuits:** When we build a rectifier circuit on the PCB, we'll be drawing connection diagrams and selecting the right diodes and other components.
*   **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB:** Building a rectifier is a prime example of applying design procedures. We'll select components, plan the layout on the PCB, and assemble it.
*   **CO5: Operate various measuring instruments:** After assembling, we'll use instruments like oscilloscopes and multimeters to test the output of our rectifier circuit and confirm it's working as expected. We'll be able to see the pulsating DC on the oscilloscope and measure voltage values with the multimeter.

### Assembling on General Purpose PCB

Now, let's think about the practical assembly part for our rectifier circuit on a General Purpose PCB.

*   **General Purpose PCB:** This is a board with many holes, often interconnected by copper tracks, designed to be flexible for building various circuits. You'll also encounter "dot" or "bus" boards where connections are made manually with wires. For our purposes, let's assume we are using a standard perforated board where we solder components and make connections using jumper wires or by bending component leads.
*   **Component Identification:** First, we need to be able to identify our rectifier diodes. They usually have a band on one end. **Remember this:** the band indicates the **cathode** of the diode. This is crucial for correct polarity.
    *   **Example:** The 1N4007 diode is a common small-signal rectifier. It has a silver band on one end, which is the cathode.
*   **Circuit Diagram:** We'll start with a clear circuit diagram of a half-wave or full-wave rectifier. This diagram is our blueprint.
*   **Layout Planning:** Before we start soldering, we need to plan the layout on the PCB.
    *   **Component Placement:** Think about how components will connect. Try to place them logically to minimize wire lengths.
    *   **Polarity:** Diodes are polarized. Ensure they are placed in the correct orientation according to the circuit diagram.
    *   **Power and Ground:** If your circuit involves a DC power supply, plan where the positive and negative connections will go.
*   **Soldering:** This is the skill of making permanent electrical connections.
    *   **Safety First!** (Connects to **CO1: Demonstrate safety measures against electrical shocks**). Always use a soldering iron stand, wear safety glasses to protect your eyes from stray solder splashes or fumes, and work in a well-ventilated area. Ensure your work area is clean and tidy.
    *   **Technique:** Heat the component lead and the PCB pad simultaneously with the soldering iron, then touch the solder to the heated joint. The solder should flow smoothly and create a shiny, conical joint. Avoid "cold joints" which are dull and lumpy – these indicate a poor connection.
*   **Wiring:** Use jumper wires to make connections between components if the PCB tracks aren't sufficient or if you're using a perfboard. Ensure wires are neat and don't cross unnecessarily.

**Relatable Analogy for Soldering:** Think of it like joining two pieces of metal with a special liquid metal that solidifies. You need the right temperature and the right way to apply it for a strong bond.

### Testing the Rectifier Circuit

Once the circuit is assembled, the real excitement begins – testing!

*   **Before Power-Up:**
    *   **Visual Inspection:** Carefully re-examine your soldering and component placement. Are all diodes in the correct orientation? Are there any accidental solder bridges connecting adjacent tracks?
    *   **Continuity Check (Optional but Recommended):** Using a multimeter in continuity mode, you can check if connections are made where they should be and that there are no shorts (unintended connections) where there shouldn't be.
*   **Powering Up:**
    *   **Low Voltage First:** If possible, start with a slightly lower voltage than the intended supply to test the circuit's basic functionality without risking damage.
    *   **Multimeter Usage:**
        *   **DC Voltage:** Set your multimeter to the DC voltage range. Measure the voltage across the output of the rectifier. You should see a DC voltage, likely with some ripple. Compare it to your expected value.
        *   **AC Voltage:** You can also measure the input AC voltage to ensure your power source is functioning correctly.
*   **Oscilloscope Usage:** This is where you can really *see* the waveform.
    *   **Input Waveform:** Connect the oscilloscope to the AC input. You'll see a sine wave.
    *   **Output Waveform:** Connect the oscilloscope to the output of your rectifier.
        *   **Half-wave:** You'll see pulses corresponding to half of the input sine wave.
        *   **Full-wave:** You'll see pulses corresponding to both halves of the input sine wave, with the negative parts flipped to positive. You'll also notice the **ripple**, which is the small AC component still present in the DC output.
*   **Demonstrating Functioning:** The goal is to show that the AC input has been successfully converted to a DC output. The readings on the multimeter and the waveforms on the oscilloscope are your proof.

**Connecting to Course Outcomes:**
*   **CO5: Operate various measuring instruments:** This is the direct application. We use multimeters and oscilloscopes to verify our work.
*   **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB:** Successfully testing the circuit confirms the design and assembly were done correctly.

### Importance of Diodes in Everyday Electronics

Think about almost any electronic device you use:
*   **Power Supplies:** From your phone charger to the power supply in your computer, diodes are there to convert AC to DC.
*   **Battery Chargers:** To ensure current flows only into the battery and not out.
*   **Signal Demodulation:** In radio receivers, diodes help extract the audio signal from the radio waves.
*   **Protection Circuits:** Diodes can be used to protect sensitive components from voltage spikes or reverse polarity connections.

**Key Takeaway:** Diodes are foundational. Understanding their behavior and how to use them in rectifier circuits is a stepping stone to understanding much more complex electronic systems.

### Review and Exam Tips

*   **Understand the forward and reverse bias conditions** for a diode. This is a common exam question. Know the voltage drop (0.7V for silicon).
*   **Be able to draw and explain half-wave and full-wave rectifier circuits** (especially the bridge rectifier). Know the output waveform for each.
*   **Identify the cathode of a diode** (usually marked with a band). This is critical for assembly.
*   **Safety during soldering and testing** is paramount. Know the basic safety precautions.
*   **When asked to test, know which instruments to use and what readings to expect.** For rectification, you expect DC voltage at the output, and observing the waveform on an oscilloscope will show the pulsating nature.
*   **The textbooks mentioned (like Bhargava, Kulshreshtha, Gupta) provide detailed explanations of PN junctions and rectifier circuits, which are excellent resources for deeper understanding.** Kothari and Nagrath are great for overall electrical principles, and Raina/Bhattacharya and Giridharan are good for design aspects.

---

## Sample Questions and Answers

**Q1. What is the primary function of a rectifier diode?**

**Answer:** The primary function of a rectifier diode is to allow electric current to flow predominantly in only one direction, thereby converting alternating current (AC) into direct current (DC). This process is known as rectification.

**Reasoning:** This question tests the fundamental understanding of a diode's basic property and its most common application, directly related to the topic of rectification.

**Q2. In a forward-biased silicon diode, approximately how much voltage drop occurs across the diode?**
    a) 0.1V
    b) 0.3V
    c) 0.7V
    d) 1.2V

**Answer:** c) 0.7V

**Reasoning:** This is a specific, often-tested value for silicon diodes. Germanium diodes have a lower drop (around 0.3V), but silicon is more common. This falls under **CO4: Identify various electronic components** by knowing their characteristic parameters.

**Q3. Explain the role of the band on a rectifier diode when assembling a circuit on a PCB.**

**Answer:** The band on a rectifier diode typically indicates the **cathode** terminal. When assembling a circuit, it is crucial to orient the diode correctly according to the circuit diagram. The band must be placed at the cathode end to ensure correct current flow (from anode to cathode) when the diode is forward-biased, preventing the circuit from malfunctioning or being damaged. This directly relates to **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB**, specifically component orientation.

**Q4. You have assembled a bridge rectifier circuit and measured its output with a multimeter set to DC voltage. What kind of reading would you expect if the AC input is 12V RMS?**

**Answer:** For a bridge rectifier, the DC output voltage will be approximately the peak AC input voltage minus two diode voltage drops.
First, calculate the peak AC voltage: $V_{peak} = V_{RMS} \times \sqrt{2}$.
So, $V_{peak} \approx 12V \times 1.414 \approx 16.97V$.
Then, subtract the voltage drops of two diodes (since current passes through two diodes in a bridge rectifier):
$V_{DC\_output} \approx V_{peak} - 2 \times V_{diode\_drop}$.
Assuming a silicon diode voltage drop of 0.7V:
$V_{DC\_output} \approx 16.97V - 2 \times 0.7V \approx 16.97V - 1.4V \approx 15.57V$.
So, you would expect a DC voltage reading of approximately **15.57V**.

**Reasoning:** This question tests the understanding of full-wave rectification and the ability to apply basic AC-DC conversion formulas and account for diode voltage drops. It's a good example of applying the learned theory for calculations relevant to circuit design and testing, linking to **CO5** and **CO6**.

**Q5. Describe how you would use an oscilloscope to demonstrate that a half-wave rectifier is functioning correctly.**

**Answer:**
1.  **Input Measurement:** Connect the oscilloscope probe to the AC input signal (e.g., across the transformer secondary winding). You should observe a sinusoidal waveform centered around 0V, alternating between positive and negative peaks.
2.  **Output Measurement:** Connect the oscilloscope probe to the output of the half-wave rectifier circuit.
3.  **Observation:** You will see a series of positive pulses representing the positive half-cycles of the input AC waveform. The negative half-cycles will be absent or very small (due to leakage current) because the diode blocks them when reverse-biased. The waveform will be discontinuous, appearing as separate positive "humps" with gaps in between. This visual representation clearly demonstrates the conversion of AC to pulsating DC. This demonstrates understanding of diode behavior and oscilloscope operation as per **CO5** and the functional output required by the module.
