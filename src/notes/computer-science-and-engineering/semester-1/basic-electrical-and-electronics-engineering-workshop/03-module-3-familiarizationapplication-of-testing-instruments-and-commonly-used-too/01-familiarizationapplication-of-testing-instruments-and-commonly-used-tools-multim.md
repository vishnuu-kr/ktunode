---
title: "Familiarization/Application of testing instruments and commonly used tools. - Multimeter, Function generator, Power supply, CRO, DSO."
subject: "BASIC ELECTRICAL AND ELECTRONICS  ENGINEERING WORKSHOP"
module: "Module 3: Familiarization/Application of testing instruments and commonly used tools. "
branch: "Computer Science and Engineering"
semester: 1
topicId: "68b45b6e58474a0b135b5cce"
status: "completed"
scrapedAt: "2026-05-20T16:36:46.194Z"
---
Alright everyone, settle in! Welcome to Module 3 of our Basic Electrical and Electronics Engineering Workshop. Today, we're diving into something absolutely crucial for anyone working with electricity and electronics: **Familiarization and Application of Testing Instruments and Commonly Used Tools**.

Think of this workshop as your toolbox for understanding the world of circuits. Just like a carpenter needs their hammer, saw, and measuring tape, we engineers need our instruments. These tools are our eyes and ears – they let us see what's happening inside a circuit, measure its performance, and ensure everything is working as it should, and most importantly, safely!

Our main focus today will be on five essential instruments: the **Multimeter**, the **Function Generator**, the **Power Supply**, the **Cathode Ray Oscilloscope (CRO)**, and the **Digital Storage Oscilloscope (DSO)**. We'll not only understand *what* they are but also *how* to use them effectively. This is where we really start to connect with **Course Outcome 5: Operate various measuring instruments (Knowledge Level: K3)**. We're moving beyond just knowing *about* these things to actually *using* them.

### The Indispensable Multimeter: Your Circuit's Health Checker

Let's start with the workhorse, the most common instrument you'll find on any workbench: the **Multimeter**. As the name suggests, it's "multi" – meaning it measures "multiple" electrical quantities. What are these quantities? Primarily, it measures:

*   **Voltage (V):** This is the electrical "pressure" or potential difference between two points in a circuit. Think of it like the water pressure in a pipe.
*   **Current (A):** This is the "flow" of electrical charge. Like the rate at which water flows through the pipe.
*   **Resistance (Ω):** This is the opposition to the flow of current. Like how narrow or obstructed a pipe is, making it harder for water to flow.

Most modern multimeters also measure other things like capacitance, frequency, and even test diodes and continuity.

**Why is the Multimeter so important?** It helps us diagnose problems, verify component values, and ensure our circuits are receiving the correct power.

**Connecting to Course Outcomes:**
*   **CO1 (Safety):** Using a multimeter correctly is fundamental to electrical safety. Measuring voltage incorrectly can lead to shocks. We'll emphasize proper probe placement and range selection.
*   **CO4 (Component Identification):** We can use a multimeter to check if a resistor has the correct value, or if a diode is working, helping us identify components.
*   **CO5 (Operating Instruments):** This is our first hands-on with an instrument we need to operate.

**How to Use It (The Basics):**

1.  **Select the Quantity:** You'll see a dial or buttons to choose whether you want to measure Volts (V), Amps (A), or Ohms (Ω).
2.  **Select the Range:** This is crucial! If you're measuring 5V, you don't want to set the multimeter to measure 1000V. Start with a higher range and work your way down if the reading is zero or too small. Most modern multimeters have an "auto-ranging" feature, which makes this easier, but it's good to know manual ranging too.
3.  **Connect the Probes:**
    *   **Black probe:** Always goes into the "COM" (common) jack. This is your reference point.
    *   **Red probe:** Goes into the jack corresponding to the quantity you're measuring. For voltage and resistance, it's usually the "VΩmA" or similar jack. For current, it's a separate jack, often labeled "10A" or "200mA" depending on the expected current.
4.  **Placement in the Circuit:**
    *   **Voltage:** You measure voltage *across* two points in the circuit. So, you connect the probes in parallel with the component or the power source you're measuring. Imagine checking the water pressure *across* a faucet.
    *   **Current:** This is a common point of confusion! To measure current, you must break the circuit and insert the multimeter *in series* with the path of current flow. The current has to *pass through* the multimeter. Think of inserting a flow meter *into* the pipe itself. **A critical error is to measure current in parallel – this can blow a fuse in the multimeter or even damage it!**
    *   **Resistance:** You measure resistance with the power *off* to the circuit. You connect the probes across the component whose resistance you want to measure, similar to voltage measurement.

**Quick Tip for Exams:** Always remember the difference between measuring voltage (parallel) and current (series). And always ensure the power is OFF when measuring resistance!

### The Function Generator: Crafting Your Own Signals

Now, moving from measurement to creation, we have the **Function Generator**. This is like your music synthesizer for electronic signals. It allows you to generate various types of waveforms (like sine waves, square waves, triangular waves) at adjustable frequencies and amplitudes.

**Why is this essential?** When we're building and testing circuits, especially those that process signals (like amplifiers or filters), we need a known, stable input signal to see how our circuit reacts. The function generator provides this controlled input. It's your way of "playing" with your circuit to see how it responds.

**Connecting to Course Outcomes:**
*   **CO5 (Operating Instruments):** We’ll learn to set its controls for frequency, amplitude, and waveform type.
*   **CO6 (Circuit Application):** We'll use this to feed signals into circuits we build on breadboards.

**Key Controls and Their Roles:**

*   **Frequency Dial/Buttons:** Controls how fast the signal repeats (measured in Hertz, Hz). A low frequency might be 10 Hz (slow wave), a high frequency could be 10 kHz (10,000 waves per second).
*   **Amplitude/Level Knob:** Controls the "height" or intensity of the waveform (measured in Volts, often peak-to-peak or RMS).
*   **Waveform Selectors (Sine, Square, Triangle, etc.):** Buttons to choose the shape of the wave.
*   **DC Offset:** Allows you to shift the entire waveform up or down, so it's not centered around zero volts.

**Relatable Example:** Imagine you're testing a speaker. You wouldn't just blast music at it randomly. You'd use a function generator to send specific tones (sine waves) at different pitches (frequencies) and volumes (amplitudes) to see how well it reproduces them and at what point it distorts.

### The Power Supply: Giving Your Circuits Life

Every electronic circuit needs power to operate. That’s where the **Power Supply** comes in. It's essentially a device that converts the AC (Alternating Current) from the wall socket into stable DC (Direct Current) voltage and current that electronic components can use.

**Why is it important?** It’s the "food" for your circuit. Without a reliable power source, nothing will work. We often need adjustable power supplies so we can precisely control the voltage and current our circuit receives.

**Connecting to Course Outcomes:**
*   **CO1 (Safety):** Understanding how to connect and use a power supply safely is paramount. Incorrect connections can be dangerous.
*   **CO5 (Operating Instruments):** Setting the correct voltage and current limits.
*   **CO6 (Circuit Application):** Powering circuits built on breadboards or PCBs.

**Key Features of a Lab Power Supply:**

*   **Voltage Adjustment:** A knob or buttons to set the desired output DC voltage.
*   **Current Limit (or Current Adjustment):** This is a crucial safety and operational feature. You can set a maximum current that the power supply will deliver. If your circuit tries to draw more current than this limit (perhaps due to a short circuit), the power supply will limit the current to that set value, protecting both the supply and your circuit. Think of it like a circuit breaker for your lab experiment.
*   **Output Terminals:** Usually red (+) and black (-) terminals for connecting to your circuit.

**Example:** If you’re working with an LED that requires 2V and a maximum of 20mA (0.02A), you’d set your power supply to 2V and set the current limit to 20mA. This way, even if you accidentally short something, you won't burn out the LED or damage the power supply.

### The CRO (Cathode Ray Oscilloscope): Visualizing the Invisible

Now we're stepping into the realm of visualizing electrical signals over time. The **Cathode Ray Oscilloscope (CRO)**, often just called an oscilloscope, is like a very fast drawing pen that plots voltage against time on a screen.

**Why is it crucial?** It allows us to *see* the shape of electrical signals. We can observe how a signal changes, its frequency, its amplitude, and look for distortions or noise. It’s indispensable for analyzing dynamic circuits.

**Connecting to Course Outcomes:**
*   **CO5 (Operating Instruments):** Understanding its controls is key to interpreting signals.
*   **CO6 (Circuit Application):** Used extensively to observe the output of circuits when fed with signals from a function generator.

**The Screen and Basic Controls:**

The CRO screen is a grid, often called a "graticule" or "raster." The horizontal axis represents time, and the vertical axis represents voltage.

*   **Time Base (Horizontal Control):** This knob (often labeled "Sec/Div" or "Time/Div") determines how much time each horizontal division on the screen represents. Adjusting this lets you "zoom in" or "zoom out" on the time axis. For example, if it's set to 1ms/Div, each major grid square horizontally represents 1 millisecond.
*   **Vertical Sensitivity (Vertical Control):** This knob (labeled "Volts/Div") determines how much voltage each vertical division represents. Adjusting this lets you "zoom in" or "zoom out" on the voltage axis. If it's set to 1V/Div, each major grid square vertically represents 1 Volt.
*   **Trigger Controls:** This is perhaps the most important and sometimes tricky part. The trigger tells the CRO *when* to start drawing the waveform. Without proper triggering, the waveform on the screen will be unstable or won't appear at all. You usually set a trigger level (a specific voltage point) and a trigger slope (rising or falling edge of the signal). This ensures that the waveform is displayed consistently, starting at the same point each time. Imagine trying to film a repeating event; you need to press "record" at the same point in the event's cycle each time for the footage to be smooth.

**Relatable Analogy:** Think of the CRO as a slow-motion camera for electrical signals. You can adjust the speed (time base) and zoom level (vertical sensitivity) to capture and analyze exactly what's happening to the signal. The trigger is like setting your camera to capture a specific action – say, a runner crossing the finish line.

**Key Application:** You might use a CRO to check if the square wave from your function generator is perfectly square, or to see the output of an amplifier to measure how much it has magnified a sine wave.

### The DSO (Digital Storage Oscilloscope): The Modern, Smarter CRO

The **Digital Storage Oscilloscope (DSO)** is the modern evolution of the CRO. Instead of using a cathode ray tube, it digitizes the incoming signal and stores it in memory. This offers several advantages.

**Why the shift to DSO?** DSOs are generally more versatile, offer better accuracy, and provide features like automatic measurements, advanced triggering, and the ability to save waveforms for later analysis.

**Connecting to Course Outcomes:**
*   **CO5 (Operating Instruments):** Similar to CROs, but with digital interfaces.
*   **CO6 (Circuit Application):** Essential for modern circuit analysis.

**Key Advantages of DSOs:**

*   **Digital Display:** The waveform is displayed on an LCD screen.
*   **Storage Capability:** You can "freeze" a waveform and analyze it at your leisure. You can even save it to a USB drive or send it to a computer.
*   **Automatic Measurements:** DSOs can automatically measure parameters like frequency, amplitude, RMS voltage, peak-to-peak voltage, rise time, fall time, and more, saving you manual calculations.
*   **Advanced Triggering:** Often offer more sophisticated triggering options than traditional CROs, allowing you to capture specific events within a signal.
*   **Signal Analysis Tools:** Many DSOs include built-in mathematical functions like FFT (Fast Fourier Transform) to analyze the frequency content of a signal.

**How it Differs in Operation:** While the fundamental controls (time base, voltage/div, trigger) are similar, the interface is often more button-driven and menu-based. You'll see options like "Measure," "Cursor," "Run/Stop," and "Save."

**Example:** Imagine you're testing a circuit that only occasionally produces a glitch. With a traditional CRO, you might miss it because it flashes by too quickly. A DSO, however, can be set to capture that glitch, store it, and allow you to measure its duration and amplitude precisely.

### Commonly Used Tools in the Workshop

Beyond these sophisticated instruments, we also rely on simpler, but equally important, tools.

*   **Screwdrivers:** Various types and sizes (Phillips, flat-head) for assembling and disassembling equipment.
*   **Pliers:** Needle-nose for gripping small components, side cutters for trimming wires.
*   **Wire Strippers:** To carefully remove insulation from wires without damaging the conductor.
*   **Soldering Iron and Solder:** For making permanent electrical connections. (Though not directly a testing instrument, understanding their use is vital for building circuits you'll test.)
*   **Breadboard:** A prototyping tool that allows you to build and test circuits without soldering. It has rows of interconnected holes.
*   **Jumper Wires:** Used to make connections between components on a breadboard or between instruments.

**Connecting to Course Outcomes:**
*   **CO3 (Wiring Diagrams & Accessories):** These tools are the accessories needed to physically build circuits based on diagrams.
*   **CO6 (Circuit Application):** Essential for the practical building of circuits on breadboards.
*   **CO7 (Teamwork):** Often, using these tools effectively requires coordination and shared effort within a team.

### Putting It All Together: A Typical Workshop Scenario

Let's imagine a common task: testing a simple amplifier circuit you've built on a breadboard.

1.  **Power Up:** You connect your power supply, setting it to a specific voltage (say, 5V) and a safe current limit. **(CO1, CO5, CO6)**
2.  **Input Signal:** You connect your function generator to the input of your amplifier circuit. You select a sine wave, set a frequency (e.g., 1 kHz), and an amplitude (e.g., 100mV). **(CO5, CO6)**
3.  **Observation:** You connect your CRO or DSO probe to the output of your amplifier.
    *   You set the **Time Base** to capture the 1 kHz signal appropriately (e.g., 0.2 ms/Div to see a few cycles).
    *   You set the **Vertical Sensitivity** to see the amplified signal clearly (e.g., 1V/Div if you expect the output to be around 2-3V).
    *   You adjust the **Trigger** so the waveform is stable on the screen. **(CO5)**
4.  **Analysis:**
    *   You observe the waveform. Is it still a sine wave? Has its amplitude increased?
    *   Using the oscilloscope's cursors or automatic measurement functions, you measure the output amplitude and compare it to your expected gain.
    *   You might then use the multimeter to measure the DC voltage at various points in the circuit to ensure proper biasing. **(CO5)**
5.  **Troubleshooting:** If the output isn't right, you might use the multimeter to check voltages, check that the power supply is delivering the correct voltage, or use the function generator to try a different input signal. The oscilloscope helps you pinpoint *where* in the signal processing the problem might be.

This whole process, from setting up power to analyzing signals, directly addresses **CO5 (Operating various measuring instruments)** and is the foundation for **CO6 (Apply the design procedure of simple electronic circuits)**.

Remember, these instruments are not just pieces of hardware; they are extensions of your senses, allowing you to understand and control the invisible world of electricity. Mastering their use is a fundamental skill that will serve you throughout your engineering career.

---

### Sample Questions and Answers

**1. Conceptual Question:** Explain the difference between measuring voltage and current using a multimeter, focusing on how the instrument is connected in the circuit.

**Answer:**
Voltage is measured **in parallel** across a component or power source. This means the multimeter's probes are connected to the two points between which you want to measure the potential difference, without interrupting the circuit's current path.
Current, however, is measured **in series**. To measure current, the circuit must be broken, and the multimeter inserted into the path of current flow so that the current passes *through* the multimeter. This is a critical distinction; measuring current in parallel can damage the meter or the circuit.

**2. Exam-Oriented Question:** A student is testing a circuit and needs to measure the resistance of a resistor. They power on the circuit and set the multimeter to measure resistance. What is the correct procedure, and what is a potential pitfall?

**Answer:**
**Correct Procedure:**
1.  **Power Off:** The student MUST ensure the circuit is completely powered OFF before attempting to measure resistance.
2.  **Isolate Component (if necessary):** Ideally, the resistor should be isolated from the rest of the circuit (e.g., by lifting one leg) to prevent other components or paths from affecting the resistance reading.
3.  **Set Multimeter:** Select the resistance (Ω) function on the multimeter. Choose an appropriate range (or use auto-ranging).
4.  **Connect Probes:** Connect the black probe to the COM jack and the red probe to the VΩmA jack. Place the probes across the terminals of the resistor.
5.  **Read Value:** Observe the reading on the multimeter display.

**Potential Pitfall:** The most significant pitfall is attempting to measure resistance while the circuit is powered ON. This can lead to incorrect readings (due to current flowing through the resistor from the power source) and potentially damage the multimeter or the circuit. Another common mistake is not isolating the component, leading to parallel paths influencing the measurement.

**3. Application Question:** You are using a function generator to test an audio amplifier. You want to observe how the amplifier distorts a square wave at high input amplitudes. What settings would you primarily adjust on the function generator and the oscilloscope to best observe this distortion?

**Answer:**
**Function Generator Adjustments:**
*   **Waveform:** Select **Square Wave**.
*   **Amplitude:** Gradually **increase the input amplitude** to push the amplifier beyond its linear operating range.

**Oscilloscope Adjustments:**
*   **Time Base (Sec/Div):** Adjust to a suitable setting to see the shape of the square wave clearly (e.g., if the frequency is 1 kHz, a time base around 0.1 ms/Div or 0.2 ms/Div might be good to see a few cycles).
*   **Vertical Sensitivity (Volts/Div):** Adjust to see the full range of the input and output signals without clipping on the screen. You might need to change this as the amplitude increases.
*   **Trigger:** Ensure the trigger is set correctly (e.g., on the rising edge of the input square wave) to get a stable display of both the input and output signals.
*   **Channel Selection:** Ensure you are viewing the correct input and output channels simultaneously.

By increasing the function generator's amplitude, you will stress the amplifier. The oscilloscope will then visually display the resulting distortion in the output square wave (e.g., rounding of corners, clipping, overshoot, or ringing).
