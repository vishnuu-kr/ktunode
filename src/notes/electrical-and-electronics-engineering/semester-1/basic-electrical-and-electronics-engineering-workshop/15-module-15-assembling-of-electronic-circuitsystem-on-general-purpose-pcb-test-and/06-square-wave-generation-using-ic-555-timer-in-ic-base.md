---
title: "Square wave generation using IC 555 timer in IC base."
subject: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP"
module: "Module 15: Assembling of electronic circuit/system on general purpose PCB, test and show the functioning (Any two)"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213d9ece2bdd875f93a5"
status: "completed"
scrapedAt: "2026-05-23T16:01:00.466Z"
---
# Module 15: Assembling of electronic circuit/system on general purpose PCB, test and show the functioning

## Topic: Square Wave Generation using IC 555 Timer in IC Base

**(Learning Outcomes Covered: CO4, CO6)**

Welcome, everyone, to Module 15 of our Basic Electrical and Electronics Engineering Workshop! Today, we're diving into a really fundamental and exciting topic: how to build a square wave generator using the ubiquitous IC 555 timer, and specifically, how to assemble it on a general-purpose PCB (Printed Circuit Board) and make it work. This session is all about taking what we've learned about electronic components and applying it practically, which is exactly what this workshop is designed for.

Remember, our goal here, as stated in **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB**, is to move from understanding circuits to actually *building* them. We'll also be reinforcing **CO4: Identify various electronic components**, as we'll be working with several of them.

### 1. Understanding the IC 555 Timer: The Heart of Our Circuit

Before we start assembling, let's get reacquainted with our star player: the IC 555 Timer. You've probably seen it before, a small black chip with pins sticking out. It's incredibly versatile and can be configured in different ways to perform various timing functions. Think of it as a programmable timer or a switch that can be controlled electronically.

The 555 timer is a monolithic integrated circuit that can produce a wide range of **precise time delays** or **oscillations**. It's named '555' because it uses two 5kΩ resistors in its internal circuitry.

#### Key Concepts:
*   **Astable Mode:** This is the mode we'll be using to generate a continuous square wave. In astable mode, the 555 timer operates as a free-running oscillator – meaning it continuously switches between its HIGH and LOW states without any external trigger, creating a waveform.
*   **Monostable Mode:** This mode is for generating a single pulse in response to a trigger. We're not focusing on this today, but it's good to know the 555 can do that too!
*   **Bistable Mode:** This mode makes the 555 timer act like a flip-flop, a basic memory element.

#### What's inside the 555? (A Peek Under the Hood)
Internally, the 555 timer consists of two comparators, a flip-flop, and a discharge transistor. These components work together to control the charging and discharging of an external capacitor, which is the key to generating our timing pulses or oscillations.

### 2. Designing the Square Wave Generator Circuit

Now, let's talk about the circuit we're going to build. To generate a square wave in astable mode, we need a few external components in addition to the IC 555.

#### Required Components:
*   **IC 555 Timer:** Our main component.
*   **Resistors:** Typically two resistors, let's call them R1 and R2, and sometimes a third one for current limiting if we are driving an LED.
*   **Capacitor:** One capacitor, C1, which determines the timing of the square wave.
*   **Power Supply:** A DC voltage source (e.g., 5V to 15V).
*   **General Purpose PCB:** This is where we'll solder everything together.
*   **IC Base/Socket:** A plastic holder that makes it easy to insert and remove the IC, protecting it from heat during soldering.

#### The Circuit Diagram (Astable Mode):
The standard astable circuit for the 555 timer looks something like this:

**(Imagine a simple circuit diagram here. If this were a lecture, I'd be drawing this on the blackboard):**

*   Pin 8 (VCC) and Pin 1 (GND) are connected to the power supply.
*   Pin 4 (RESET) is usually tied to VCC to prevent accidental resets.
*   Pin 5 (CONTROL VOLTAGE) is typically connected to ground via a small capacitor (0.01µF or 0.1µF) to filter out noise. This isn't strictly necessary for basic operation but is good practice.
*   Pin 3 (OUTPUT) will give us our square wave.
*   Pin 7 (DISCHARGE) and Pin 6 (THRESHOLD) are connected together.
*   Resistor R1 connects between VCC (Pin 8) and Pin 7.
*   Resistor R2 connects between Pin 7 and Pin 6.
*   Capacitor C1 connects between Pin 6 (and Pin 7) and Ground (Pin 1).
*   Pin 2 (TRIGGER) is also connected to Pin 6.

**Why this arrangement?** When power is applied, capacitor C1 starts charging through R1 and R2. The voltage across C1 rises. When the voltage reaches 2/3 of VCC, the upper comparator in the 555 timer triggers the internal flip-flop, which sets the output (Pin 3) LOW and turns on the discharge transistor (connected to Pin 7). This transistor then discharges C1 through R2. As C1 discharges, its voltage drops. When the voltage across C1 falls to 1/3 of VCC, the lower comparator triggers the flip-flop, setting the output HIGH and turning off the discharge transistor. Now, C1 begins to charge again through R1 and R2, and the cycle repeats. This continuous charging and discharging creates the oscillating square wave output.

#### Calculating the Frequency and Duty Cycle:
This is where it gets really practical and exam-oriented! The timing of the square wave is determined by R1, R2, and C1.

*   **Time for which output is HIGH (T_high):** $T_{high} = 0.693 \times (R1 + R2) \times C1$
*   **Time for which output is LOW (T_low):** $T_{low} = 0.693 \times R2 \times C1$
*   **Time Period (T):** $T = T_{high} + T_{low} = 0.693 \times (R1 + 2R2) \times C1$
*   **Frequency (f):** $f = 1 / T = 1 / [0.693 \times (R1 + 2R2) \times C1] \approx 1.44 / [(R1 + 2R2) \times C1]$
*   **Duty Cycle:** The duty cycle is the ratio of the time the output is HIGH to the total time period, expressed as a percentage.
    *   Duty Cycle $(\%) = (T_{high} / T) \times 100 = [(R1 + R2) / (R1 + 2R2)] \times 100$

**A crucial point here (and a common exam question):** Notice that $T_{high}$ depends on both R1 and R2, but $T_{low}$ only depends on R2. This means if we want to achieve a 50% duty cycle (where the HIGH time equals the LOW time), we would ideally need R1 to be very small or zero, and R2 to be infinite, which isn't practical. For most common 555 astable circuits, the duty cycle will always be greater than 50%. To get closer to 50%, you'd make R1 much smaller than R2.

**Example for Calculation:**
Let's say we choose:
*   R1 = 10 kΩ
*   R2 = 47 kΩ
*   C1 = 1 µF (microFarad)

Then:
*   $T_{high} = 0.693 \times (10kΩ + 47kΩ) \times 1µF = 0.693 \times 57 \times 10^{-3} \times 1 \times 10^{-6} \approx 39.5 \times 10^{-3}$ seconds = 39.5 ms
*   $T_{low} = 0.693 \times 47kΩ \times 1µF = 0.693 \times 47 \times 10^{-3} \times 1 \times 10^{-6} \approx 32.6 \times 10^{-3}$ seconds = 32.6 ms
*   $T = 39.5 ms + 32.6 ms = 72.1 ms$
*   $f = 1 / 72.1 ms \approx 13.87 Hz$
*   Duty Cycle $= (39.5 ms / 72.1 ms) \times 100 \approx 54.8\%$

So, we'd get a square wave with a frequency of about 13.87 Hz and a duty cycle of around 55%. This is perfectly acceptable for a basic square wave generator.

### 3. Assembling the Circuit on a General Purpose PCB

This is where the "workshop" part really comes in! We're moving from a theoretical circuit diagram to a tangible, working circuit.

#### What is a General Purpose PCB?
A general-purpose PCB (often called a "perfboard" or "stripboard") is a board with holes drilled in it, usually arranged in a grid. These holes allow you to solder components onto the board. Sometimes, these holes have copper pads around them to facilitate soldering.

*   **Perfboard:** Typically has holes with no pre-existing connections between them. You have to wire everything using component leads or jumper wires.
*   **Stripboard (Veroboard):** Has pre-made copper strips connecting several holes. You often have to break these strips with a knife or drill to create individual connection points.

For our 555 timer circuit, a perfboard or a small stripboard with rows and columns of holes is ideal.

#### Using an IC Base/Socket:
It's highly recommended to use an IC base or socket. Why?
*   **Protection:** Soldering directly to the IC pins can overheat and damage the sensitive internal components of the 555 timer. The socket acts as a buffer.
*   **Flexibility:** If you want to replace the IC or try a different one, it's as simple as pulling the old one out and plugging in a new one.
*   **Ease of Assembly:** It provides a stable mounting point on the PCB.

#### Step-by-Step Assembly (General Approach):
Remember **CO7: Build the ability to work in a team with good interpersonal skills** – this is a great place to practice it, perhaps by dividing tasks.

1.  **Plan Your Layout:** Before you even pick up a soldering iron, sketch out your component placement on the PCB. Think about where the IC socket will go, where the resistors and capacitor will fit, and how you'll make connections. Keep wires short and neat to avoid confusion.
2.  **Mount the IC Socket:** Carefully insert the IC socket onto the PCB. Make sure it's oriented correctly (there's usually a notch or a dot indicating pin 1). Solder the socket's pins to the PCB. Check that each pin is securely connected and there are no solder bridges (unwanted connections between adjacent pins).
3.  **Install Resistors:** Solder R1 and R2 onto the board. Pay attention to their values (you can identify them by their color codes, or if they are labelled). If you are using a stripboard, you might need to break the copper strip between certain holes where the resistor leads connect to isolate them.
4.  **Install the Capacitor:** Solder C1. Remember that electrolytic capacitors (if you use one, though ceramic is common for this filtering role) have polarity – they must be connected with the positive lead to the positive voltage (Pin 6) and the negative lead to ground (Pin 1). Ceramic capacitors are usually non-polarized.
5.  **Wire Connections:** This is where you make all the connections using the PCB's traces, or by using component leads as jumper wires or actual jumper wires.
    *   Connect VCC (Pin 8) and RESET (Pin 4) to the positive power supply rail.
    *   Connect GND (Pin 1) to the ground rail.
    *   Connect Pin 7 to one end of R1, and the other end of R1 to VCC.
    *   Connect Pin 7 to one end of R2, and the other end of R2 to Pin 6.
    *   Connect Pin 6 and Pin 2 together.
    *   Connect C1 between Pin 6 (and Pin 2) and Ground.
    *   Connect the 0.01µF capacitor between Pin 5 and Ground.
    *   The OUTPUT (Pin 3) is where your square wave will appear. You might want to connect an LED through a current-limiting resistor (e.g., 330Ω to 1kΩ) to Pin 3 to visually confirm the output is oscillating. Connect the anode of the LED to the resistor, and the cathode to ground.

#### Safety First! (**CO1: Demonstrate safety measures against electrical shocks**)
Even though we are working with low voltages, always be mindful of safety.
*   Ensure your power supply is off when you are making connections or modifying the circuit.
*   When soldering, use a well-ventilated area and wear safety glasses to protect your eyes from fumes and stray solder.
*   Handle the soldering iron with care; it gets very hot.
*   Double-check your connections before applying power. A reversed polarity can damage components.

### 4. Testing and Demonstrating Functioning

Now for the moment of truth! We've built it, now let's see if it works.

#### How to Test:
1.  **Visual Inspection:** Before powering up, carefully inspect your PCB. Are all components in place? Are the solder joints clean? Are there any loose wires or solder bridges?
2.  **Apply Power:** Connect your power supply. If you connected an LED, it should be blinking, indicating the output is switching between HIGH and LOW. The blinking rate will depend on your component values.
3.  **Using an Oscilloscope (The Best Way):** If an oscilloscope is available (**CO5: Operate various measuring instruments**), this is the most effective way to see the square wave. Connect the oscilloscope probe to Pin 3 of the 555 timer. You should see a waveform that alternates between the HIGH voltage (close to VCC) and the LOW voltage (close to 0V). You can measure the frequency and observe the duty cycle.
4.  **Using a Multimeter (Limited):** A multimeter in DC voltage mode might show an average voltage if the frequency is low enough. In AC voltage mode, it's not very useful for a square wave. A frequency counter function on a multimeter can tell you the frequency if it's within its range.

#### What to Demonstrate:
*   **Show the blinking LED:** If you included an LED, a blinking LED is a clear visual confirmation that the circuit is oscillating.
*   **Present the PCB:** Show the assembled circuit board itself, demonstrating the neatness of your soldering and component placement. This showcases your ability to work on a PCB as per **CO6**.
*   **Explain the circuit:** Be prepared to explain how the circuit works, referring to the roles of R1, R2, and C1 in determining the frequency and duty cycle. Discuss the astable mode operation of the 555 timer.
*   **Show readings (if applicable):** If you used an oscilloscope, show the measured frequency and duty cycle.

### 5. Common Issues and Troubleshooting

It's rare for a circuit to work perfectly on the first try, especially when you're learning. Don't get discouraged!

*   **No Output/No Blinking LED:**
    *   Check power supply connections (Pin 8 and Pin 1).
    *   Ensure the IC is seated correctly in the socket and oriented properly.
    *   Verify R1, R2, and C1 values and connections. Is C1 connected correctly?
    *   Is the RESET pin (Pin 4) tied to VCC?
    *   Check for any breaks in the circuit traces or wires.
*   **LED is Constantly ON or OFF:**
    *   This often points to an issue with the timing components (R1, R2, C1) or their connections, preventing the 555 timer from switching states. Double-check the charging/discharging path.
    *   Is R2 too large, making $T_{low}$ extremely short or non-existent? Or is R1 too large, making $T_{high}$ too long?
*   **Incorrect Frequency/Duty Cycle:**
    *   Recalculate your timing components. Did you use the correct units (kΩ for resistance, µF for capacitance)?
    *   Are your resistor or capacitor values accurate? Sometimes components can have a tolerance of 5-10% or more.
    *   Ensure there are no unintended connections or shorts, especially around pins 6 and 7, or the connections involving R1 and R2.

### Connecting to Course Outcomes:

*   **CO4: Identify various electronic components (Knowledge Level: K2):** We've actively used and identified the 555 timer, resistors, capacitors, IC base, and power supply. Understanding their physical appearance and function is key.
*   **CO6: Apply the design procedure of simple electronic circuits on breadboard and PCB (Knowledge Level: K3):** This entire module is a direct application of this CO. We learned the design principles (astable mode, component calculations) and applied them to assemble the circuit on a PCB.
*   **CO1: Demonstrate safety measures against electrical shocks (Knowledge Level: K2):** We discussed critical safety procedures for handling tools and electrical components, essential for any workshop.
*   **CO5: Operate various measuring instruments (Knowledge Level: K3):** While we focused on the oscilloscope and multimeter for testing, this is a practical application of using these instruments to verify circuit function.

### Summary and Key Takeaways:

*   The IC 555 timer in astable mode is excellent for generating square waves.
*   The frequency and duty cycle are determined by R1, R2, and C1.
*   $T_{high} \approx 0.693(R1+R2)C1$ and $T_{low} \approx 0.693(R2)C1$.
*   Duty cycle is always >50% in this standard configuration.
*   Always use an IC base for protection and ease of use.
*   Careful planning and soldering are crucial for successful PCB assembly.
*   Always prioritize safety during assembly and testing.

Remember this: The 555 timer is a foundational component. Mastering its astable mode for square wave generation is a stepping stone to many other interesting electronic projects. You've not only learned theory but also the practical skill of bringing a circuit to life on a PCB!

---

## Sample Questions and Answers

**Q1. What is the primary function of the IC 555 timer when configured in astable mode?**
**Answer:** In astable mode, the IC 555 timer acts as a free-running oscillator, continuously producing a rectangular or square wave output without the need for an external trigger signal. This oscillation is achieved through the internal charging and discharging of an external capacitor.

**Q2. How do you calculate the frequency of a square wave generated by a 555 timer in astable mode?**
**Answer:** The frequency ($f$) of the square wave is calculated using the formula:
$f = \frac{1.44}{(R1 + 2R2) \times C1}$
where R1 and R2 are the external resistors and C1 is the external capacitor. A lower frequency is achieved with higher resistance or capacitance values, and vice-versa.

**Q3. Explain why the duty cycle of a standard 555 timer astable circuit is always greater than 50%.**
**Answer:** The duty cycle is determined by the ratio of the time the output is HIGH ($T_{high}$) to the total time period ($T$). In the standard astable configuration, the capacitor charges through both R1 and R2 ($T_{high} = 0.693(R1+R2)C1$), but discharges only through R2 ($T_{low} = 0.693(R2)C1$). Since $T_{high}$ includes the resistance of R1 which is not present in $T_{low}$, $T_{high}$ will always be longer than $T_{low}$ (unless R1 is negligibly small or zero). Therefore, the duty cycle, which is $(T_{high}/T) \times 100$, will always be greater than 50%.

**Q4. What is the purpose of using an IC base or socket with the 555 timer when soldering onto a PCB?**
**Answer:** Using an IC base or socket is crucial for protecting the IC. It prevents the sensitive internal components of the 555 timer from being damaged by the heat of the soldering iron during assembly. Additionally, it allows for easy replacement of the IC if it fails or if a different IC needs to be tested, without desoldering the entire circuit.

**Q5. If the LED connected to the output of your 555 timer circuit is constantly ON, what is a likely cause? (Hint: Consider the timing states.)**
**Answer:** If the LED is constantly ON, it suggests the 555 timer's output is stuck in the HIGH state. This could be due to a problem with the internal circuitry of the 555 timer itself, or an issue with the components that trigger the output to go LOW. Specifically, check:
*   **Pin 4 (RESET):** Ensure it's properly tied to VCC. If it's floating or connected to ground, the timer might be reset or disabled.
*   **Pin 7 (DISCHARGE) and Pin 6 (THRESHOLD):** Verify these are connected correctly to R1, R2, and C1. If Pin 7 is not discharging the capacitor when it should, the output might remain HIGH.
*   **Component Values:** While less common for a "stuck HIGH" scenario, an incorrectly chosen R1/R2/C1 might lead to an extremely long HIGH time.
*   **A faulty IC:** The 555 timer itself might be damaged.

**Q6. You have assembled a square wave generator using R1=10kΩ, R2=100kΩ, and C1=0.1µF. Calculate its approximate frequency and duty cycle.**
**Answer:**
Given:
R1 = 10 kΩ = $10 \times 10^3$ Ω
R2 = 100 kΩ = $100 \times 10^3$ Ω
C1 = 0.1 µF = $0.1 \times 10^{-6}$ F

*   **Frequency (f):**
    $f \approx \frac{1.44}{(R1 + 2R2) \times C1}$
    $f \approx \frac{1.44}{(10 \times 10^3 + 2 \times 100 \times 10^3) \times 0.1 \times 10^{-6}}$
    $f \approx \frac{1.44}{(10 \times 10^3 + 200 \times 10^3) \times 0.1 \times 10^{-6}}$
    $f \approx \frac{1.44}{210 \times 10^3 \times 0.1 \times 10^{-6}}$
    $f \approx \frac{1.44}{210 \times 10^{-4}}$
    $f \approx \frac{1.44}{0.021}$
    $f \approx 68.57 Hz$

*   **Duty Cycle:**
    Duty Cycle $(\%) = \frac{R1 + R2}{R1 + 2R2} \times 100$
    Duty Cycle $(\%) = \frac{10kΩ + 100kΩ}{10kΩ + 2 \times 100kΩ} \times 100$
    Duty Cycle $(\%) = \frac{110kΩ}{210kΩ} \times 100$
    Duty Cycle $(\%) \approx 0.5238 \times 100$
    Duty Cycle $(\%) \approx 52.38\%$

Therefore, the approximate frequency is 68.57 Hz, and the duty cycle is approximately 52.38%.
