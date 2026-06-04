---
title: "Familiarization/Application of testing instruments and commonly used tools. - Multimeter,Function generator, Power supply, CRO, DSO."
subject: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP"
module: "Module 11: Familiarization/Application of testing instruments and commonly used tools. "
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213d9ece2bdd875f9398"
status: "completed"
scrapedAt: "2026-05-23T16:00:49.111Z"
---
# Module 11: Familiarization/Application of Testing Instruments and Commonly Used Tools

Welcome, everyone, to Module 11 of our Basic Electrical and Electronics Engineering Workshop! Today, we’re going to dive into something truly fundamental: the tools of our trade. Think of yourselves as budding electricians and electronics wizards. Just like a chef needs good knives and a painter needs brushes, we need reliable instruments to understand, build, and troubleshoot our circuits. This module is all about getting comfortable with these essential tools. We’ll be looking at five key instruments: the **Multimeter**, the **Function Generator**, the **Power Supply**, the **Cathode Ray Oscilloscope (CRO)**, and the **Digital Storage Oscilloscope (DSO)**.

Our journey here is crucial for several reasons. Firstly, it directly relates to **Course Outcome 5 (CO5): Operate various measuring instruments**. Without knowing how to use these, we can't verify our circuit’s performance or diagnose issues. It also ties into **Course Outcome 1 (CO1): Demonstrate safety measures against electrical shocks**. Many of these instruments are connected to electrical circuits, so using them safely is paramount. Furthermore, understanding these instruments will be vital when we start **applying design procedures on breadboard and PCB (CO6)**, as we’ll need them to test our creations. And of course, working with these tools often happens in a lab setting, so developing good practices here contributes to **CO7: Build the ability to work in a team with good interpersonal skills**, by sharing knowledge and ensuring everyone is using equipment properly.

Let's get started by getting familiar with each instrument.

## 1. The Multimeter: Our Everyday Electronic Swiss Army Knife

The multimeter is arguably the most essential tool in any electrical or electronics workshop. It’s called a multimeter because it can measure *multiple* electrical quantities. Think of it as your go-to diagnostic tool for checking basic electrical parameters.

### What can it measure?

At its core, a multimeter can measure:

*   **Voltage (V):** This is the electrical "pressure" or potential difference between two points. We measure voltage in Volts (V).
*   **Current (A):** This is the flow of electrical charge. We measure current in Amperes (A).
*   **Resistance (Ω):** This is the opposition to current flow. We measure resistance in Ohms (Ω).

Many modern multimeters, especially digital ones (which we’ll focus on, as they are more common now), can also measure:

*   **Capacitance (F):** The ability of a component to store electrical energy.
*   **Frequency (Hz):** The number of cycles per second of an AC signal.
*   **Temperature (°C or °F):** With a suitable probe.
*   **Continuity:** A quick check to see if there's a complete path for current to flow, often accompanied by a buzzer sound. This is fantastic for checking wires or solder joints.
*   **Diode Test:** To check if a diode is functioning correctly.

### How to Use It: A Practical Approach

Let’s break down how we use it, keeping safety and accuracy in mind. This is where **CO5 (Operate various measuring instruments)** comes into play directly.

#### Setting Up the Multimeter

1.  **Select the Function:** You'll see a dial or buttons to choose what you want to measure (Voltage, Current, Resistance, etc.).
2.  **Select the Range:** Most multimeters have different ranges for each measurement. For example, for voltage, you might have ranges for mV, V, or kV. It’s always best to start with a range slightly *higher* than what you expect to measure. If you don't know, pick the highest range first and then decrease it until you get an accurate reading. This prevents overloading the meter and damaging it.
3.  **Connect the Probes:** The multimeter has ports for the probes. Typically, there are three:
    *   **COM (Common):** This is always the black probe. It's the reference point.
    *   **VΩmA:** This is for measuring voltage, resistance, and *small* currents (milliamps). This is where the red probe usually goes.
    *   **10A or 20A:** This port is for measuring *larger* currents. **Crucially, if you forget to switch the red probe to this port when measuring large currents, or if you try to measure current without the red probe in a current port, you risk blowing a fuse inside the multimeter or even damaging it.** This is a common pitfall, so remember this!

#### Measuring Voltage

*   **Connecting:** To measure voltage, we connect the multimeter in **parallel** with the component or across the two points where we want to measure the potential difference.
*   **Analogy:** Imagine water flowing through a pipe. Voltage is like the water pressure. To measure the pressure, you connect your gauge *across* a point in the pipe, not *in series* with it, because you don't want to interrupt the flow itself.
*   **Polarity:** For DC voltage, the red probe connects to the positive side, and the black probe to the negative. If you get the polarity wrong, the digital display will simply show a minus sign. For AC voltage, polarity doesn't matter.
*   **Example:** To measure the voltage of a battery, touch the red probe to the positive terminal and the black probe to the negative terminal.

#### Measuring Current

*   **Connecting:** This is where it gets a bit different! To measure current, we must connect the multimeter **in series** with the circuit. This means you have to break the circuit and insert the multimeter so that the current flows *through* it.
*   **Analogy:** Going back to the water analogy, current is the flow rate of water. To measure how much water is flowing, you need to insert a flow meter *into* the pipe so all the water passes through it.
*   **Polarity:** For DC current, the current should enter the red probe and exit the black probe for a positive reading.
*   **Example:** If you want to know how much current a resistor is drawing, you'd disconnect one end of the resistor, connect the red probe to where the resistor was connected to the positive supply, and connect the black probe to the other end of the resistor. This is why it's vital to select the correct current port and range before doing this.
*   **Important Note for Exams:** Many questions will test your understanding of parallel vs. series connection for voltage and current measurement. Get this wrong, and you'll likely damage the meter.

#### Measuring Resistance

*   **Connecting:** To measure resistance, the component must be **isolated** from any power source and ideally from other components in the circuit. You then connect the probes across the component.
*   **Analogy:** Resistance is like friction in the pipe. To measure the friction of a specific section of pipe, you'd isolate that section and see how much it impedes flow.
*   **Polarity:** Polarity doesn't matter for resistance measurement.
*   **Example:** To measure the resistance of a resistor, disconnect it from the circuit, touch the probes to its leads, and read the value. If the multimeter shows "OL" (Over Limit) or a very high number, it means the resistance is too high for that range, or the component is open-circuited. If it shows a very low value (close to 0), it means the resistance is low, or the component is short-circuited.

**Key Takeaway for Multimeters:** Always check your settings (function and range) and probe connections *before* turning on the circuit or making connections. This is fundamental to safe and accurate work, linking to **CO1** and **CO5**.

## 2. The Function Generator: Creating Signals for Testing

Now, if the multimeter is our diagnostic tool, the function generator is our signal creator. It's like the conductor of our orchestra, providing the raw materials – the electrical signals – that we can then analyze with our multimeter or oscilloscope.

### What is it?

A function generator is an electronic test instrument that produces repetitive, electrical waveforms (like sine waves, square waves, triangle waves, and sawtooth waves) over a wide range of frequencies.

### Why do we use it?

We use function generators to:

*   **Test circuits:** We can feed a known signal into a circuit and see how the circuit modifies it. This helps us understand the circuit's behavior.
*   **Simulate inputs:** We can mimic signals from other parts of a larger system.
*   **Calibrate other equipment:** To ensure other instruments are reading accurately.
*   **Demonstrate concepts:** For teaching and learning about signal processing, filtering, amplification, etc.

### Key Controls and Waveforms

You’ll find several controls on a function generator:

*   **Frequency Control:** This is usually a knob or buttons that let you set the desired frequency. Often, there’s a display showing the frequency.
*   **Amplitude/Level Control:** This adjusts the "height" or voltage of the waveform.
*   **Waveform Selectors:** Buttons or switches to choose between sine, square, triangle, etc.
*   **Output Connector:** Where you connect your cables to the circuit under test.
*   **DC Offset:** This adds a constant DC voltage to the waveform, allowing you to shift the waveform up or down.

**Common Waveforms:**

*   **Sine Wave:** The most basic AC waveform, like the hum of electricity. It's smooth and symmetrical. (Think of a gentle ripple on a pond).
*   **Square Wave:** Characterized by sharp transitions between high and low voltage levels. Essential for digital electronics and timing circuits. (Think of a light switch being flicked on and off very quickly).
*   **Triangle Wave:** Has linear ramps up and down. Useful for testing linearity in circuits. (Think of a ramp with constant slope).
*   **Sawtooth Wave:** Similar to a triangle wave but with one ramp much steeper than the other. Used in old CRT displays and some sweep generators.

**Example Scenario:** Imagine you’ve built an amplifier circuit on a breadboard. How do you know if it's working? You connect the function generator’s output to the input of your amplifier. You set the function generator to produce a sine wave of a certain frequency and amplitude. Then, using an oscilloscope (which we’ll discuss next), you can observe the output of your amplifier. If the amplifier is working, you should see a larger sine wave at the output, still at the same frequency but with increased amplitude. This is a direct application of **CO5** and **CO6**.

## 3. The Power Supply: The Lifeblood of Circuits

Every circuit needs power to operate. The power supply is the source of this electrical energy. In our workshop, we'll primarily use **DC Power Supplies**.

### What is a DC Power Supply?

A DC power supply converts the AC mains voltage from the wall socket into a stable, regulated DC voltage. This is what most electronic components, like transistors, ICs, and LEDs, need to function.

### Key Features and Controls

*   **Voltage Adjustment:** Most benchtop DC power supplies have knobs to precisely set the output voltage. Some have coarse and fine adjustment knobs for better control.
*   **Current Limit:** This is a very important safety and protection feature. You can set a maximum current that the power supply will deliver. If the circuit draws more current than this limit, the power supply will shut off or limit the current to protect itself and your circuit. This is crucial for preventing damage, reinforcing **CO1**.
*   **Output Terminals:** Usually clearly marked positive (+) and negative (-) terminals where you connect your circuit.
*   **Display:** Shows the set output voltage and, often, the actual output current being drawn by the circuit.

### Why is it important?

*   **Provides operating voltage:** Electronic components have specific voltage requirements.
*   **Protection:** The current limit feature prevents accidental shorts from damaging components or the power supply itself.
*   **Troubleshooting:** You can test a circuit with different voltage levels to see how it behaves.

**Example:** You’re building a simple LED circuit. You know the LED needs about 2V and 20mA. You connect your power supply, set the voltage to 2V, and crucially, set the current limit to slightly above 20mA (say, 25mA). Then you connect the positive terminal of the power supply to the anode of the LED and the negative terminal to the cathode (perhaps through a current-limiting resistor if you haven't set the power supply current limit). If you accidentally reverse the connections or create a short, the power supply’s current limit will kick in, preventing damage. This demonstrates the practical application of **CO5** and safety awareness from **CO1**.

## 4. The Cathode Ray Oscilloscope (CRO): Visualizing Signals

The CRO is a classic instrument that allows us to "see" electrical signals. It displays a graph of voltage (on the vertical axis) against time (on the horizontal axis). It’s like an X-ray for electrical waveforms.

### How it Works (The Basics)

A CRO uses an electron beam that is accelerated and focused onto a fluorescent screen. This beam is then deflected horizontally and vertically by electrical signals. The deflection causes the beam to strike the screen, creating a visible spot of light.

*   **Vertical Deflection:** Controlled by the input signal, representing voltage.
*   **Horizontal Deflection:** Controlled by a "sweep generator" inside the CRO, which moves the beam from left to right at a constant rate, representing time.

### Key Controls and Their Purpose

*   **Vertical Controls (Y-axis):**
    *   **VOLTS/DIV:** Sets the voltage scale. For example, if set to 5V/DIV, each vertical division on the screen represents 5 volts. This directly relates to measuring voltage, linking back to **CO5**.
    *   **POSITION:** Moves the trace up or down.
*   **Horizontal Controls (X-axis):**
    *   **TIME/DIV:** Sets the time scale. For example, if set to 1ms/DIV, each horizontal division represents 1 millisecond. This allows us to see how the signal changes over time.
    *   **POSITION:** Moves the trace left or right.
*   **Trigger Controls:** This is one of the most important and often confusing parts of a CRO. The trigger system stabilizes the display by ensuring that the sweep starts at the same point in the waveform every time. You can trigger on the rising edge or falling edge of a signal, and set a trigger level. Proper triggering is essential for getting a stable, readable waveform. Think of it as synchronizing your camera flash to a moving object – you want the picture taken at the right moment.
*   **Input Connectors (CH1, CH2):** Most CROs have at least two input channels, allowing you to view and compare two signals simultaneously.
*   **Focus/Intensity:** Adjusts the brightness and sharpness of the trace.

### Applications of a CRO

*   **Observing Waveforms:** Visualizing the shape of signals from function generators, oscillators, or other circuit outputs.
*   **Measuring Voltage:** By counting the vertical divisions from the zero line to a peak of the waveform, using the VOLTS/DIV setting.
*   **Measuring Time:** By counting the horizontal divisions between two points on a waveform (e.g., the period of a wave), using the TIME/DIV setting. From the period, you can calculate frequency (Frequency = 1/Period).
*   **Checking Signal Integrity:** Identifying distortions, noise, or glitches in a signal.
*   **Phase Measurement:** Comparing the timing relationship between two signals displayed on the dual channels.

**Example:** You are testing a circuit that generates a pulse. You want to know the pulse width (how long it stays "high") and its amplitude. You connect the pulse output to a CRO channel. You adjust VOLTS/DIV to get a good vertical size for the pulse and TIME/DIV to get a few cycles across the screen. Then, you adjust the trigger level to lock onto the pulse. You can then measure the pulse width by counting the horizontal divisions that the pulse occupies and multiplying by the TIME/DIV setting. You measure the amplitude by counting vertical divisions from the baseline to the top of the pulse and multiplying by the VOLTS/DIV setting. This is a direct application of **CO5** and foundational for understanding circuit behavior in **CO6**.

## 5. The Digital Storage Oscilloscope (DSO): The Modern Evolution

The DSO is essentially a modern, more powerful version of the CRO. Instead of a beam hitting a phosphor screen, a DSO digitizes the input signal and stores it in memory. This digital data can then be processed, displayed on a screen (like an LCD), and analyzed in many more sophisticated ways.

### Key Advantages over CROs

*   **Digital Storage:** The ability to capture and store waveforms means you can "freeze" a signal, analyze it at your leisure, or even save it for later. This is a huge advantage for transient or intermittent signals.
*   **Higher Accuracy:** Digital conversion generally leads to more precise measurements.
*   **Advanced Analysis:** DSOs often have built-in measurement functions (like automatically calculating RMS voltage, frequency, rise/fall times), mathematical operations (like FFT for frequency domain analysis), and the ability to zoom in on specific parts of a waveform.
*   **Connectivity:** Many DSOs can connect to computers via USB or Ethernet for data transfer and remote control.
*   **User Interface:** Often more intuitive with clear menus and on-screen readouts.

### Key Controls on a DSO

While DSOs have evolved significantly, you'll still find similar core controls as on a CRO:

*   **Vertical Controls:** VOLTS/DIV, Vertical Position, Channel On/Off.
*   **Horizontal Controls:** TIME/DIV, Horizontal Position.
*   **Trigger Controls:** Trigger level, trigger source, trigger mode (edge, pulse, etc.). DSOs offer much more sophisticated triggering options.
*   **Acquisition Controls:** Controls how the DSO captures the waveform (e.g., sample rate, resolution).
*   **Measurement Menu:** Access to automated measurements.
*   **Run/Stop Button:** To start or pause the capture process.
*   **Save/Recall:** To store and load waveforms.

### Applications of a DSO

DSOs share most applications with CROs but offer enhanced capabilities:

*   **All CRO applications:** Visualizing, measuring voltage and time, phase checks.
*   **Capturing Transient Events:** A DSO can trigger on a specific event and capture the signal *before* and *after* the trigger, which is impossible with a basic CRO. Imagine trying to capture a brief power surge – a DSO is perfect for this.
*   **Automated Measurements:** Quickly get precise values for peak voltage, RMS, frequency, period, duty cycle, rise/fall times without manual counting.
*   **Signal Analysis:** Using built-in FFT (Fast Fourier Transform) to see the frequency components of a signal, useful for noise analysis or understanding modulated signals.
*   **Long-term Monitoring:** Some DSOs can log data over extended periods.

**Example:** You're working on a microcontroller project, and you suspect a signal from the microcontroller to a sensor is getting corrupted due to noise. You connect the signal to a DSO. You can set up a sophisticated trigger to capture the signal only when a specific error condition occurs. Then, you can use the DSO’s zoom feature to examine the exact moment the noise interferes with the signal, measure its amplitude and duration, and perhaps even identify its frequency if it’s a specific type of interference. This allows for much deeper analysis than a basic CRO, directly enhancing our ability to troubleshoot and understand circuits (**CO6**) and demonstrating advanced use of measuring instruments (**CO5**).

## Connecting to Course Outcomes: A Quick Recap

Throughout this module, we've seen how these instruments are the practical backbone of our learning:

*   **CO1 (Safety):** Understanding how to use the multimeter safely (probe placement, range selection) and the current limit on power supplies is critical.
*   **CO2 (Components):** While not directly about transformers or rheostats, these instruments are used to *test* and *analyze* circuits containing them.
*   **CO3 (Wiring):** After wiring a circuit, you use multimeters and oscilloscopes to verify if your wiring is correct and the circuit is behaving as expected.
*   **CO4 (Identify Components):** We use these instruments to test and characterize the components we identify. For instance, a multimeter checks a resistor's value or a capacitor's capacitance.
*   **CO5 (Operate Instruments):** This is the core of Module 11. We've learned the fundamental operation of the multimeter, function generator, power supply, CRO, and DSO.
*   **CO6 (Apply Design):** These instruments are indispensable for debugging, testing, and verifying any circuit you build on a breadboard or PCB. You cannot successfully apply a design without being able to test its output.
*   **CO7 (Teamwork):** In the workshop, you’ll often share these instruments. Knowing how to use them properly, keeping them organized, and explaining your findings to teammates are all part of collaborative work.

Remember, these aren't just tools; they are your senses in the world of electricity and electronics. Mastering them will give you confidence and capability in all your future practical work.

---

## Sample Questions and Answers

**Q1. When measuring resistance, should the multimeter be connected in series or parallel with the resistor? Explain why.**

**Answer:**
When measuring resistance, the multimeter should be connected in **parallel** with the resistor.
**Explanation:** The multimeter, when set to resistance mode, essentially applies a small known voltage across its probes and measures the resulting current. By Ohm's Law ($R = V/I$), it calculates the resistance. To measure the resistance of a specific component, all the current must flow through that component and then through the multimeter. Connecting it in parallel ensures that the multimeter is directly across the component, allowing the known voltage to drive current through the component and the meter, enabling an accurate resistance calculation. Connecting it in series would add the multimeter's internal resistance (which is very high in resistance mode) to the circuit, altering the current flow and giving an incorrect reading for the component itself. Moreover, you must disconnect the power supply from the circuit before measuring resistance, as the meter's internal voltage source is used.

**Q2. A student wants to measure the current flowing through a LED in a series circuit. They set their multimeter to measure voltage, select the correct range, and connect the red probe to the anode of the LED and the black probe to the cathode. What is wrong with this setup? What should they do instead?**

**Answer:**
The student has made two critical errors:
1.  **Incorrect Measurement Mode:** They are set to measure **voltage** but intend to measure **current**.
2.  **Incorrect Connection Method:** They have connected the multimeter in **parallel** with the LED, whereas current measurement requires a **series** connection.

**What they should do instead:**
1.  **Change the Multimeter Setting:** Switch the multimeter's function dial from Voltage (V) to Current (A).
2.  **Select the Correct Current Port:** Ensure the red probe is plugged into the appropriate current port (usually labeled 'mA' for small currents or 'A' or '10A' for larger currents). For a typical LED, the 'mA' port is appropriate.
3.  **Connect in Series:** Break the circuit where the current is to be measured (e.g., between the power source and the LED, or between the LED and the ground). Connect the multimeter's red probe to the point closer to the positive side of the power source and the black probe to the point closer to the negative side or ground, so that the current flows *through* the multimeter to reach the LED.

**Q3. What is the primary difference between a CRO and a DSO in terms of signal processing and display?**

**Answer:**
The primary difference lies in how they acquire and display signals:

*   **CRO (Cathode Ray Oscilloscope):** Uses an electron beam that is directly deflected by the input signal to draw a waveform on a phosphorescent screen. It displays signals in **real-time**, analog fashion. The signal is not stored digitally; if you turn off the power or change settings, the displayed waveform is lost.
*   **DSO (Digital Storage Oscilloscope):** First **digitizes** the incoming analog signal using an Analog-to-Digital Converter (ADC). This digital data is then stored in memory. The waveform is reconstructed from this digital data and displayed on a digital screen (like an LCD). This allows for **storage, advanced processing, automated measurements, and retrieval** of waveforms, even after the original signal is gone or changed. DSOs are generally more accurate and offer greater flexibility than traditional CROs.

**Q4. You are using a function generator to test an amplifier. You set the function generator to output a 1kHz sine wave at 1V peak-to-peak. You then connect the output of the function generator to the input of the amplifier and use a DSO to view the amplifier's output. If the DSO shows a 5V peak-to-peak sine wave at 1kHz, what can you conclude about the amplifier's performance regarding amplitude and frequency?**

**Answer:**
Based on the DSO reading, you can conclude the following:

*   **Amplitude:** The amplifier has **amplified** the signal. The output amplitude (5V peak-to-peak) is significantly larger than the input amplitude (1V peak-to-peak), indicating a voltage gain.
*   **Frequency:** The amplifier is **passing** the signal at the same frequency. The input frequency was 1kHz, and the output frequency is also displayed as 1kHz. This suggests that within the tested frequency range, the amplifier is not altering the signal's frequency.

This observation would be a positive result, indicating the amplifier is functioning correctly in terms of gain and frequency response for this specific input. This scenario directly applies **CO5** (operating the DSO) and **CO6** (applying design procedures by testing).

**Q5. Why is it important to set the current limit on a DC power supply when powering a circuit?**

**Answer:**
Setting the current limit on a DC power supply is crucial for **protection** – both for the power supply itself and for the circuit being powered.
*   **Protection for the Circuit:** Electronic components can be sensitive to overcurrents. If a short circuit occurs in the connected circuit due to wiring errors or component failure, a large amount of current would try to flow. Without a current limit, this surge could instantly burn out components, damage traces on a PCB, or even cause a fire. The current limit acts as a safeguard, preventing excessive current from flowing and thus protecting the sensitive components.
*   **Protection for the Power Supply:** Similarly, drawing excessively high current can overheat and damage the internal components of the power supply. The current limit prevents the power supply from being overloaded, ensuring its longevity and safe operation.

In essence, the current limit ensures that the circuit operates only within safe current parameters, acting as a vital safety feature, thus aligning with **CO1**.
