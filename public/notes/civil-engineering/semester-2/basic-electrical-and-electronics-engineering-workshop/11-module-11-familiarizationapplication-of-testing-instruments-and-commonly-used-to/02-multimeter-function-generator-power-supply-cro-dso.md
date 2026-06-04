---
title: "Multimeter, Function generator, Power supply, CRO, DSO."
subject: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP"
module: "Module 11: Familiarization/Application of testing instruments and commonly used tools."
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912ed9"
status: "completed"
scrapedAt: "2026-05-20T18:33:05.133Z"
---
# Module 11: Familiarization/Application of Testing Instruments and Commonly Used Tools

Welcome, everyone! In our journey through Basic Electrical and Electronics Engineering, understanding the tools of our trade is just as crucial as understanding the circuits themselves. Think of it like a carpenter needing to know their hammer from their saw. In this module, we're going to get hands-on, or at least conceptually hands-on, with some of the most fundamental testing instruments we use in electrical and electronics workshops. This is where theory meets practice, and where we learn to measure, observe, and control – essential skills for any aspiring engineer.

Our primary goal here, as outlined in **CO5: Select and Operate various measuring instruments**, is to equip you with the knowledge to not only identify these instruments but also to understand their purpose and how to use them effectively. This directly ties into building practical skills, which is at the heart of any workshop module.

Let's dive into the instruments that will become your best friends in the lab!

## 1. The Multimeter: Your All-Purpose Lab Assistant

When I think of the multimeter, I always imagine it as the Swiss Army knife of electronics. It's versatile, indispensable, and can tell you so much about what's happening in a circuit. We'll be covering its different functions and how they help us understand electrical behavior.

### What is a Multimeter?

At its core, a multimeter is a device that combines several measurement functions in one unit. The "multi" in multimeter, as the name suggests, means it can measure multiple electrical quantities. The most common ones are:

*   **Voltage (Volts - V):** This is the electrical "pressure" or potential difference between two points in a circuit. Imagine water flowing through a pipe; voltage is like the difference in water pressure that makes the water flow.
*   **Current (Amperes - A):** This is the rate of flow of electric charge. In our water analogy, current is like the amount of water flowing through the pipe per second.
*   **Resistance (Ohms - Ω):** This is the opposition to the flow of current. In the water pipe, resistance would be like how narrow or rough the pipe is, making it harder for water to flow.

Modern multimeters, especially digital ones (which are the most common in workshops today), can also measure other parameters like:

*   **Continuity:** This checks if there's a complete path for current to flow. It often makes a beeping sound if continuity is present – a very useful feature for finding broken wires!
*   **Capacitance (Farads - F):** The ability of a component to store an electric charge.
*   **Transistor Testing:** Some multimeters have built-in testers for transistors.
*   **Frequency (Hertz - Hz):** The number of cycles of an alternating current (AC) waveform per second.
*   **Temperature:** Some advanced models can even measure temperature.

### Types of Multimeters: Analog vs. Digital

You might still encounter analog multimeters in older labs, but digital multimeters (DMMs) are the standard now.

*   **Analog Multimeters:** These use a needle that moves across a calibrated scale to indicate the measurement. They require more careful reading and can be affected by parallax error (reading the needle from an angle). However, they can sometimes be better at showing trends or rapid fluctuations in a signal due to their continuous display.
*   **Digital Multimeters (DMMs):** These display the measurement as a numerical value on an LCD or LED screen. They are generally more accurate, easier to read, and have features like auto-ranging (automatically selecting the correct measurement range).

### How to Use a Multimeter (Practical Application - CO5)

Using a multimeter involves a few key steps, and crucially, understanding which setting to use. This directly relates to **CO5: Select and Operate various measuring instruments**.

1.  **Select the Quantity:** Turn the dial to the measurement you want to make (Volts, Amps, Ohms, etc.).
2.  **Select the Range:** If your multimeter isn't auto-ranging, you need to select the appropriate range. For voltage and current, always start with a higher range and move down if needed, especially when you're unsure of the expected value. This prevents damage to the meter or blowing a fuse. For resistance, you select the range based on the expected value of the resistor.
3.  **Connect the Probes:** Red probe is usually for the positive (+) terminal, and the black probe for the common (COM) terminal. For voltage and resistance measurements, you connect the probes *across* the component or points you want to measure (in parallel). For current measurements, you connect the multimeter *in series* with the circuit, so the current flows *through* the multimeter. This is a crucial difference!
4.  **Read the Display:** For DMMs, read the number on the screen. For analog meters, interpret the needle's position on the scale.

**Example:** Let's say you want to measure the voltage of a standard AA battery.
*   You'd turn the dial to DC Voltage (often indicated by a V with a straight line above it).
*   Since a AA battery is about 1.5V, you'd select a range slightly higher, perhaps 2V or 20V if your meter has those options.
*   You'd touch the red probe to the positive (+) terminal of the battery and the black probe to the negative (-) terminal.
*   The DMM should display a value close to 1.5V.

**Important Safety Reminder (CO1):** When measuring voltage, you are connecting the multimeter in parallel with the power source or component. If you accidentally touch the probes together while measuring voltage, it’s like creating a short circuit through the multimeter. Always be mindful of this! And remember **CO1: Demonstrate safety measures against electrical shocks**. Never touch exposed wires or components when the circuit is live.

**Exam Tip:** You'll often be asked to explain how to measure voltage, current, and resistance. The key difference to remember is how you connect the multimeter for current (in series) versus voltage and resistance (in parallel). Getting this wrong can damage the instrument.

## 2. The Function Generator: The Signal Chef

If the multimeter is the detective, the function generator is the chef in our lab. It’s responsible for creating specific, controlled electrical signals – like sine waves, square waves, or triangle waves – at precise frequencies and amplitudes. This is vital for testing how circuits behave under different input conditions.

### What is a Function Generator?

A function generator is an electronic test instrument that produces repeating electronic voltages with a variety of waveform shapes. It's used to test the frequency response of circuits, troubleshoot electronic systems, and generate test signals for various applications.

Key features you'll find on a function generator include:

*   **Waveform Selection:** Buttons or switches to choose between sine, square, triangle, sawtooth, and sometimes more complex waveforms.
*   **Frequency Control:** A dial or buttons to set the frequency of the output signal, often in Hertz (Hz), kilohertz (kHz), or megahertz (MHz).
*   **Amplitude/Voltage Control:** A knob to adjust the peak-to-peak voltage or amplitude of the waveform.
*   **DC Offset:** Allows you to add a DC voltage component to the AC waveform, effectively shifting the waveform up or down.
*   **Duty Cycle Control:** For square or pulse waves, this adjusts the ratio of the "on" time to the "off" time within a cycle.
*   **Output Impedance:** Usually a fixed value (often 50 ohms), which is important for matching with other equipment.

### Why Use a Function Generator?

Imagine you've built a circuit designed to amplify audio signals. How do you know if it works correctly? You need to feed it an audio signal! The function generator lets you create a clean sine wave, which is the fundamental building block of most audio signals. You can then vary the frequency and amplitude to see how your amplifier responds.

It's also essential for testing filters, oscillators, and other circuits that are sensitive to the frequency of the input signal. It allows us to simulate real-world signal conditions in a controlled laboratory environment. This aligns perfectly with **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB**, as you'll use the function generator to test the circuits you build.

**Relatable Example:** Think of tuning a radio. You're essentially looking for a specific frequency. A function generator lets you "tune" your circuit by feeding it different frequencies to see when it responds best.

**Exam Tip:** Be prepared to explain the primary purpose of a function generator and the different types of waveforms it can produce. Understanding that it’s used for testing circuit response to specific inputs is key.

## 3. The DC Power Supply: The Controlled Energy Source

Every electronic circuit needs a source of power to operate. While batteries are common, in a workshop setting, a controllable DC power supply is indispensable. It allows us to provide a stable and adjustable direct current voltage to our circuits.

### What is a DC Power Supply?

A DC power supply is a device that provides a direct current (DC) voltage to a circuit. In the lab, we typically use bench-top power supplies that are "regulated" and "adjustable."

*   **Regulated:** This means the output voltage remains constant even if the load on the supply changes (within its limits) or if the input AC voltage fluctuates slightly.
*   **Adjustable:** This is the key feature. You can set the output voltage to a specific value using knobs or digital controls, and often you can also limit the output current.

Typical controls on a bench-top DC power supply include:

*   **Voltage Control:** A knob (often with coarse and fine adjustments) to set the desired output voltage.
*   **Current Limit Control:** A knob to set the maximum current the supply will deliver. If the circuit draws more current than this limit, the supply will reduce its voltage to stay within the limit, protecting the circuit and the supply. This is a fantastic safety feature!
*   **Output Terminals:** Positive (+) and negative (-) terminals where you connect your circuit.
*   **Output On/Off Switch:** To enable or disable the power supply output without turning the whole unit off.

### Why Use a DC Power Supply?

Imagine you're testing a small LED that requires 2V to light up. You could use a battery, but what if you need 3V for another component? Or what if you need to test how your circuit behaves at different voltage levels? The adjustable DC power supply lets you dial in precisely the voltage you need.

More importantly, the current limiting feature is a lifesaver. If you accidentally create a short circuit in your project, the power supply won't surge with uncontrolled current. Instead, it will limit the current to a safe level, preventing damage to your components, the power supply, and even yourself. This directly supports **CO1: Demonstrate safety measures against electrical shocks** by providing a controlled energy source.

**Relatable Example:** Think of filling a bucket with water. A fixed voltage source is like a tap that's always on at full blast. An adjustable DC power supply is like a tap where you can control the flow rate (voltage) and also set a maximum water level you want the bucket to reach (current limit).

**Exam Tip:** Understand the difference between a fixed voltage source and an adjustable DC power supply. Emphasize the importance of voltage and current control, and especially the function of current limiting for circuit protection.

## 4. The Cathode Ray Oscilloscope (CRO): The Visualizer of Signals

Now, let's move to instruments that allow us to *see* electrical signals. The Cathode Ray Oscilloscope, or CRO, was the workhorse for visualizing waveforms for decades. While its successor, the DSO, is more common now, understanding the CRO is fundamental to grasping the principles of waveform display.

### What is a CRO?

A CRO is an electronic test instrument that allows you to observe the precise shape of an electrical waveform. It uses a vacuum tube with an electron gun and a phosphorescent screen. An electron beam is fired at the screen, causing it to glow where it strikes. The beam can be deflected horizontally and vertically by electric fields, allowing the display of a graph of voltage versus time.

Key controls on a CRO include:

*   **Vertical Controls (Y-axis):** These control the voltage sensitivity (Volts per division) and position of the trace on the screen. You use these to set how much voltage corresponds to a certain vertical deflection.
*   **Horizontal Controls (X-axis):** These control the time base (time per division). You use these to set how much time corresponds to a certain horizontal deflection, essentially controlling the speed at which the trace sweeps across the screen.
*   **Trigger Controls:** These are crucial! They determine when the electron beam starts to sweep, ensuring that the waveform is displayed stably and repeatedly. You can trigger the sweep based on the input signal itself, allowing you to "lock onto" a waveform.
*   **Focus and Intensity Controls:** To adjust the sharpness and brightness of the trace.

### How Does it Work (Simplified)?

1.  **Electron Gun:** Heats a filament, releasing electrons. These electrons are accelerated and focused into a beam.
2.  **Deflection Plates:** The beam passes between two pairs of parallel plates: vertical plates and horizontal plates.
3.  **Y-Input:** The signal you want to observe is applied to the vertical deflection plates. As the voltage on these plates changes, the electron beam is deflected up or down, proportional to the input voltage.
4.  **X-Input (Time Base):** A voltage that increases linearly with time (a sawtooth wave) is applied to the horizontal deflection plates. This causes the beam to sweep smoothly from left to right across the screen. When the sawtooth voltage reaches its peak, it quickly drops back down, and the beam snaps back to the left to start a new sweep.
5.  **Screen:** The inside of the screen is coated with a phosphorescent material that glows when struck by the electron beam. The combination of the horizontal sweep and the vertical deflection creates the waveform display.

### Why Use a CRO?

The CRO is like a high-speed camera for electrical signals. It allows you to see:

*   **Waveform Shape:** Is it a sine wave, square wave, or something distorted?
*   **Amplitude:** How large is the voltage?
*   **Frequency:** How fast is the signal repeating? (By measuring the time for one complete cycle and taking the reciprocal).
*   **Phase:** The relative timing of two or more signals.
*   **Time Delays:** How long does it take for a signal to propagate through a circuit?

This is incredibly useful for understanding the behavior of electronic circuits, especially in areas like signal processing and communications. It directly aids in **CO5: Select and Operate various measuring instruments** by providing a visual, temporal understanding of signals.

**Relatable Example:** Imagine trying to understand how a roller coaster moves by just looking at its speed and acceleration readings. It's much easier to understand if you can see a video of the roller coaster's path and speed over time. The CRO provides that visual "video" of your electrical signal.

**Exam Tip:** Understand that a CRO displays voltage against time. You should be able to explain the roles of the vertical and horizontal deflection systems and the importance of triggering for stable display. Common questions involve measuring voltage, period, and frequency from a CRO display.

## 5. The Digital Storage Oscilloscope (DSO): The Modern Visualizer

The CRO was revolutionary, but technology has marched on. The Digital Storage Oscilloscope, or DSO, is the modern equivalent, offering much more flexibility, accuracy, and advanced features.

### What is a DSO?

A DSO samples an analog input signal and converts it into digital data. This digital data is then stored in memory and processed by a microprocessor for display on a screen (usually an LCD).

Key advantages of a DSO over a traditional CRO include:

*   **Digital Storage:** The waveform is captured and stored, meaning you can freeze a waveform, analyze it later, or even save it to a USB drive. This is a huge advantage when dealing with transient or infrequent events.
*   **Pre-Trigger View:** Because the DSO is constantly sampling and storing data, it can show you what happened *before* the trigger event occurred. This is invaluable for troubleshooting, as it lets you see the cause of a problem.
*   **Advanced Triggering:** DSOs offer a wide array of sophisticated triggering options, including edge, pulse width, video, logic, and more.
*   **Measurement Capabilities:** DSOs can often automatically measure many waveform parameters (peak-to-peak voltage, RMS voltage, frequency, rise time, fall time, etc.) and display them on the screen.
*   **Analysis Tools:** Many DSOs include built-in mathematical functions (like FFT for frequency analysis) and the ability to zoom in on specific parts of the waveform.
*   **Portability and Connectivity:** Modern DSOs are often more compact, and many have USB or LAN ports for transferring data to a computer or connecting to a network.

### How Does it Work (Simplified)?

1.  **Analog Front-End:** The input analog signal is conditioned (amplified or attenuated) and filtered.
2.  **Analog-to-Digital Converter (ADC):** This is the heart of the DSO. It takes snapshots (samples) of the analog signal at very high rates and converts each sample into a digital number.
3.  **Memory:** The digital samples are stored in the DSO's memory.
4.  **Microprocessor:** Processes the digital data, performs measurements, and prepares it for display.
5.  **Display:** The processed digital data is used to draw the waveform on the screen.

### Why Use a DSO?

For most modern electronic troubleshooting and design, a DSO is the preferred instrument. Its ability to capture and analyze signals digitally makes it incredibly powerful.

*   **Capturing Transients:** If a circuit glitches intermittently, a CRO might miss it. A DSO, with its fast sampling and storage, is much more likely to capture that glitch.
*   **Precise Measurements:** Automatic measurements are faster and less prone to reading errors than manually calculating from a CRO screen.
*   **Signal Analysis:** The ability to perform FFTs on a signal helps identify harmonic content or noise frequencies, which is crucial for audio and power electronics.

Using a DSO directly relates to **CO5: Select and Operate various measuring instruments** and also supports **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB** by providing detailed analysis of the circuits you build.

**Relatable Example:** Imagine you're trying to photograph a bird in flight. A regular camera might capture a blurry image if the bird moves too fast. A digital camera with a fast shutter speed and burst mode is like a DSO – it captures multiple high-resolution snapshots quickly, allowing you to freeze the action perfectly.

**Exam Tip:** You'll be expected to know the advantages of a DSO over a CRO. Key points include digital storage, pre-trigger view, automatic measurements, and advanced triggering capabilities.

---

## Connecting to Course Outcomes

Let's briefly recap how these instruments tie back to our course objectives:

*   **CO1: Demonstrate safety measures against electrical shocks:** Understanding the voltage and current ratings of multimeters, using current limiting on power supplies, and being aware of high voltages within a CRO are all crucial for safety.
*   **CO2: Familiarise with transformers, rheostats, batteries and earthing schemes:** While not directly covered in these instruments, you'll use these instruments *to test* these components. For instance, you'd use a multimeter to check the voltage of a battery or the resistance of a rheostat.
*   **CO3: Illustrate the connection diagram and identify the suitable accessories necessary for wiring simple electric circuits:** To wire circuits, you'll need power from a power supply, and you'll use multimeters to check connections and voltages.
*   **CO4: Identify various electronic components:** While these are test instruments, you'll use them to identify the behavior of other electronic components (resistors, capacitors, transistors, etc.).
*   **CO5: Select and Operate various measuring instruments:** This is the primary outcome addressed. We've explored how to select the right settings and understand the operation of multimeters, function generators, power supplies, CROs, and DSOs.
*   **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB:** These instruments are your tools for testing and verifying the circuits you design and build. You'll use the function generator as input, the power supply as an energy source, and the multimeter/oscilloscope to observe and measure the results.
*   **CO7: Build the ability to work in a team with good interpersonal skills:** In the workshop, you'll often work in pairs or groups. Learning to operate these instruments together, sharing knowledge, and helping each other troubleshoot are excellent ways to develop these teamwork skills.

Remember, the ability to effectively use these instruments is a cornerstone of practical electrical and electronics engineering. Master them, and you'll be well on your way to building and understanding complex systems.

---

## Sample Questions with Answers

Here are some questions that might appear in your exams, covering both conceptual understanding and practical application:

**1. Conceptual Question:**
What is the primary difference in how a multimeter is connected to measure voltage versus current?

**Answer:**
When measuring **voltage**, the multimeter is connected in **parallel** across the component or points in the circuit where the voltage is to be measured. This is because voltage is the potential difference *between* two points.
When measuring **current**, the multimeter is connected in **series** with the circuit. This means the circuit must be broken, and the multimeter inserted into the path so that the current flows *through* the multimeter. This is because current is the rate of flow of charge *through* a point.

**Reasoning:** This distinction is fundamental to circuit analysis and instrument usage. Connecting a multimeter incorrectly can lead to inaccurate readings or damage to the instrument.

**2. Application Question:**
You have a circuit with an unknown resistor, and you want to measure its resistance using a multimeter. Describe the steps you would take, including the multimeter settings.

**Answer:**
1.  **Isolate the Resistor:** If the resistor is part of a larger circuit, ensure the circuit is powered off and ideally, disconnect the resistor from the circuit to avoid interference from other components or voltage sources.
2.  **Select Resistance Mode:** Turn the multimeter's dial to the Ohm (Ω) setting.
3.  **Select Range:** Choose an appropriate resistance range. If you have no idea of the resistor's value, start with a high range (e.g., 200kΩ or 2MΩ if available) and then decrease the range if the reading is very low or shows "OL" (Over Limit). If the multimeter has auto-ranging, it will select the range automatically.
4.  **Connect Probes:** Connect the black probe to the COM terminal and the red probe to the VΩmA or similar terminal.
5.  **Measure Resistance:** Touch the probes to the two leads of the resistor. For a resistor, the polarity of the probes doesn't matter.
6.  **Read Display:** Observe the value on the multimeter's screen. If the reading is "OL" or "1", it indicates an open circuit or that the selected range is too low. If the reading is zero or very low, it might indicate a short circuit or that the range is too high.

**Reasoning:** Resistance measurement requires the multimeter to supply a small voltage to the resistor and measure the current that flows. This is why the circuit should ideally be unpowered to avoid the multimeter trying to measure the resistance in parallel with active parts of the circuit, leading to incorrect readings.

**3. Conceptual/Comparison Question:**
Explain the main advantage of a Digital Storage Oscilloscope (DSO) over a traditional Cathode Ray Oscilloscope (CRO) in terms of capturing and analyzing electrical signals.

**Answer:**
The primary advantage of a DSO over a CRO is its ability to **digitally store and process** the captured waveform. This means:
*   **Capture of Transient Events:** DSOs can capture short-lived or infrequent signals (transients) because they continuously sample the input and store it in memory. A CRO, which relies on a continuous sweep, might miss these brief events.
*   **Pre-Trigger Information:** DSOs can display the signal *before* the trigger event occurred, allowing engineers to see the sequence of events leading up to a problem. CROs typically only show what happens after the trigger.
*   **Advanced Analysis:** Stored digital data can be easily analyzed by the DSO's internal processor to perform automatic measurements (voltage, frequency, etc.), perform mathematical operations (like FFT), and allow for detailed examination by zooming in on specific sections of the waveform, which is much harder or impossible with a CRO.

**Reasoning:** The digital nature of the DSO allows for a far more comprehensive and flexible approach to signal analysis compared to the analog, real-time display of a CRO. This capability is crucial for modern electronic debugging and design.
