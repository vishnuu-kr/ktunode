---
title: "Rectifier diode"
subject: "BASIC ELECTRICAL AND ELECTRONICS ENGINEERING WORKSHOP"
module: "Module 15: Assembling of electronic circuit/system on general purpose PCB, test and show the functioning (Any two)"
branch: "Civil Engineering"
semester: 2
topicId: "68b54566d74ec52cc0912ee6"
status: "completed"
scrapedAt: "2026-05-20T18:33:11.581Z"
---
# Module 15: Assembling of Electronic Circuits on General Purpose PCB: Rectifier Diodes

Welcome, everyone! Today, we're diving into a fundamental component that forms the backbone of many electronic power supplies and signal processing circuits: the **Rectifier Diode**. This is a crucial topic for our workshop, as understanding diodes is essential for assembling and testing the circuits we'll be working with in Module 15. We'll learn what they are, how they work, and how to incorporate them into our projects on a general-purpose PCB.

### 1. What is a Diode? The One-Way Street for Electricity

Imagine electricity as traffic. Most components are like roads where traffic can flow in both directions. A diode, however, is like a one-way street with a very specific rule: **current can only flow in one direction**. This fundamental property is what makes it so useful.

*   **Analogy:** Think of a check valve in a water pipe. It allows water to flow forward but prevents it from flowing backward. A diode does the same for electrical current.

From a structural point of view, a semiconductor diode is typically made from a single crystal of silicon or germanium. This crystal is "doped" – meaning impurities are intentionally added – to create two distinct regions:

*   **The P-type region:** This region has an excess of "holes" (which act as positive charge carriers).
*   **The N-type region:** This region has an excess of "electrons" (which are negative charge carriers).

When these two regions are brought together, a **PN junction** is formed. At this junction, some electrons from the N-side diffuse into the P-side, and some holes from the P-side diffuse into the N-side. This creates a region depleted of free charge carriers, known as the **depletion region**. This depletion region acts as a barrier, preventing current flow initially.

### 2. Forward Bias: Opening the Gate

Now, how do we make this one-way street work? We apply a voltage. When we connect the positive terminal of a voltage source to the P-type material (anode) and the negative terminal to the N-type material (cathode), we are **forward-biasing** the diode.

*   **How it works:** The applied positive voltage repels the holes in the P-side towards the junction, and the applied negative voltage repels the electrons in the N-side towards the junction. This pushes the charge carriers across the depletion region, effectively narrowing it. Once the applied voltage is large enough to overcome the barrier potential (typically around 0.7V for silicon diodes and 0.3V for germanium diodes), the diode conducts current readily. This small voltage is called the **forward voltage drop**.
*   **Visualizing:** Think of pushing a swing. Initially, it's hard to get going, but once you give it a good push (the forward voltage), it swings freely.

**(Relating to Course Outcomes):** Understanding forward bias is crucial for **CO6 (Apply the design procedure of simple electronic circuits)** and helps us identify how components like diodes behave when connected correctly, which links to **CO4 (Identify various electronic components)**.

### 3. Reverse Bias: Closing the Gate

What happens if we reverse the polarity of the voltage source? We connect the negative terminal to the P-type material (anode) and the positive terminal to the N-type material (cathode). This is called **reverse-biasing**.

*   **How it works:** In this case, the applied voltage pulls the free charge carriers (holes from the P-side and electrons from the N-side) away from the junction. This widens the depletion region, making it an even more effective insulator. Consequently, only a very tiny amount of current, called **reverse saturation current**, flows through the diode. This current is usually negligible for most practical purposes.
*   **Visualizing:** Imagine trying to push the swing from the opposite side to get it moving backward. It's difficult, and you'd need a very strong force to make it move significantly.

**(Relating to Course Outcomes):** Understanding reverse bias is key to grasping how diodes block current, which is fundamental for designing circuits and ensuring they operate correctly as per **CO6**.

### 4. The Rectifier Diode: From AC to DC

The most common application of diodes is in **rectification**. What is rectification? It's the process of converting alternating current (AC) into direct current (DC). Our mains electricity supply is AC, meaning the current periodically reverses direction. Many electronic devices, however, need a steady, unidirectional DC supply to operate. This is where rectifier diodes shine.

*   **Analogy:** Imagine AC is like a tide that goes in and out. DC is like a river that always flows in one direction. A rectifier diode acts like a one-way gate that allows only the "out" flow of the tide to pass, converting it into a continuous flow.

### 5. Types of Rectification

Based on how we use diodes to convert AC to DC, we have different types of rectifiers:

*   **Half-Wave Rectifier:** This is the simplest rectifier. It uses a single diode to allow only one half-cycle (either positive or negative) of the AC input to pass through, while blocking the other half-cycle.
    *   **How it works:** During the positive half-cycle of the AC input, the diode is forward-biased and conducts, allowing current to flow. During the negative half-cycle, the diode is reverse-biased and blocks current flow.
    *   **Result:** The output is a pulsating DC, where only the positive (or negative, depending on diode connection) pulses appear, with gaps in between.
    *   **Textbook Reference:** You'll find detailed explanations and circuit diagrams for half-wave rectifiers in Chapter 7 of "Basic Electronics and Linear Circuits" by Bhargava, Kulshreshtha, and Gupta. They explain how the ripple frequency in the output is the same as the input AC frequency.

*   **Full-Wave Rectifier:** This type of rectifier uses diodes to convert both the positive and negative half-cycles of the AC input into a pulsating DC output. This results in a more efficient and smoother DC output compared to half-wave rectification. There are two main configurations for full-wave rectifiers:

    *   **Center-Tapped Full-Wave Rectifier:** This uses a transformer with a center tap and two diodes.
        *   **How it works:** When the top of the transformer winding is positive, one diode is forward-biased and conducts. During the next half-cycle, when the bottom of the transformer winding is positive, the other diode is forward-biased and conducts.
        *   **Result:** Both halves of the AC input are utilized, resulting in a pulsating DC output with twice the ripple frequency of the input AC.

    *   **Bridge Full-Wave Rectifier:** This is more common and uses four diodes arranged in a bridge configuration. It does not require a center-tapped transformer, making it more versatile.
        *   **How it works:** In each half-cycle of the AC input, two diodes are forward-biased and conduct, allowing current to flow through the load in the same direction. The other two diodes are reverse-biased.
        *   **Result:** Similar to the center-tapped rectifier, it produces a pulsating DC output with twice the ripple frequency of the input AC. This configuration is often preferred because it makes better use of the transformer's secondary winding.

**(Relating to Course Outcomes):** Building both half-wave and full-wave rectifiers on a PCB will directly address **CO6 (Apply the design procedure of simple electronic circuits on breadboard and PCB)**. It will also require us to connect components correctly, aligning with **CO3 (Illustrate the connection diagram and identify the suitable accessories necessary for wiring simple electric circuits)** and to select appropriate diodes based on current and voltage ratings, which is part of **CO4 (Identify various electronic components)**.

### 6. Testing and Demonstrating Functionality

Once we've assembled a rectifier circuit on a general-purpose PCB, the next crucial step is to test it and demonstrate its functionality. This is where our understanding of diodes and our ability to use measuring instruments come into play.

*   **Tools we'll use (CO5):**
    *   **Multimeter:** Essential for checking voltages (DC and AC), continuity (to ensure connections are good), and sometimes current. We'll measure the input AC voltage from the transformer, the forward voltage drop across the diode, and the output DC voltage.
    *   **Oscilloscope:** The best tool for visualizing the AC input waveform and the pulsating DC output waveform. This allows us to clearly see the rectification process – how the diode blocks one half-cycle and allows the other to pass, or how both halves are utilized in a full-wave rectifier. We can observe the "ripple" in the DC output.
    *   **DC Power Supply (if applicable):** For some tests, we might use a DC power supply to verify the diode's behavior under different DC bias conditions.

*   **What to look for:**
    *   **Forward Voltage Drop:** Using a multimeter, we should measure a small voltage drop (around 0.7V for silicon) when the diode is forward-biased.
    *   **Reverse Current:** With the diode reverse-biased, a multimeter should show a very high resistance, indicating negligible current flow.
    *   **Output Voltage:** Measure the DC output voltage across the load resistor. For a half-wave rectifier, it will be lower than half the RMS AC input voltage. For a full-wave rectifier, it will be higher.
    *   **Waveforms (Oscilloscope):** Observe the input AC sine wave and the output pulsating DC. For a half-wave rectifier, you'll see half of the sine wave missing. For a full-wave rectifier, you'll see both halves converted to positive pulses.

**(Relating to Course Outcomes):** This testing phase directly addresses **CO5 (Select and Operate various measuring instruments)** and is the culmination of **CO6 (Apply the design procedure...)** and **CO4 (Identify various electronic components)**. Showing the functioning is also a key part of Module 15.

### 7. Safety First! (CO1)

Before we even touch a component or a power source, remember our paramount concern: **safety**. This is where **CO1 (Demonstrate safety measures against electrical shocks)** is absolutely critical.

*   **Always work with low voltages:** When testing rectifier circuits, start with a low-voltage AC transformer. Avoid directly connecting to mains AC until you are absolutely certain of your connections and understanding.
*   **Double-check connections:** Before powering up, meticulously review your wiring against the circuit diagram. A misplaced wire can damage components or pose a shock hazard.
*   **Isolate your circuit:** Ensure your circuit is isolated from the mains supply when assembling. Use appropriate connectors and avoid touching live parts.
*   **Use insulated tools:** Employ tools with insulated handles.
*   **Understand your components:** Know the voltage and current ratings of your diodes and other components. Exceeding these can lead to failure, sometimes dramatically!

**(Relating to Course Outcomes):** Every step of our practical work in this workshop must be guided by **CO1**.

### 8. Practical Considerations and Component Selection

When selecting diodes for our project, we need to consider their specifications:

*   **Forward Current Rating (If):** This is the maximum average DC current the diode can handle in forward bias without overheating. We need to choose a diode with an If rating significantly higher than the expected load current.
*   **Peak Inverse Voltage (PIV) or Reverse Repetitive Voltage (VRRM):** This is the maximum reverse voltage that can be applied across the diode without it breaking down and conducting in reverse. For half-wave rectifiers, it's the peak AC input voltage. For full-wave rectifiers, it's twice the peak AC input voltage. We must select a diode with a PIV rating well above this value.
*   **Forward Voltage Drop (Vf):** As mentioned, this is the voltage required to turn the diode on. It affects the efficiency of the rectifier.

**(Relating to Course Outcomes):** Choosing the right diode based on these parameters directly relates to **CO4 (Identify various electronic components)** and contributes to the successful application of design procedures in **CO6**.

### 9. Putting It All Together on the PCB

Assembling on a general-purpose PCB involves:

1.  **Layout Planning:** Deciding where each component will go to minimize wire lengths and avoid interference.
2.  **Soldering:** Carefully soldering the diode, resistors, capacitors (often used for filtering after rectification), and connecting wires to the PCB pads.
3.  **Verification:** Using a multimeter to check for short circuits or open circuits before applying power.

**(Relating to Course Outcomes):** This is the practical embodiment of **CO6** and requires careful attention to detail, linking to **CO3** for understanding connections and accessories. Teamwork (**CO7**) can be very beneficial here for double-checking and efficient assembly.

---

### Sample Questions and Answers

**Question 1 (Conceptual):** Explain the primary function of a rectifier diode in an electronic circuit.

**Answer:** The primary function of a rectifier diode is to allow electric current to flow in only one direction. This characteristic is exploited to convert alternating current (AC), which periodically reverses direction, into direct current (DC), which flows in a single direction. This conversion is known as rectification and is fundamental for powering most electronic devices that require a stable DC supply.

**Question 2 (Exam-Oriented, K3):** You are assembling a full-wave bridge rectifier circuit on a PCB using silicon diodes. The AC input voltage from the transformer is 12V RMS. What is the *minimum* Peak Inverse Voltage (PIV) rating required for the diodes, and why?

**Answer:**
For a full-wave bridge rectifier, each diode experiences a reverse voltage during the half-cycle when it is supposed to be blocking current. In a bridge rectifier, the maximum reverse voltage across any diode when it is reverse-biased is equal to the peak value of the input AC voltage.

*   First, we find the peak AC voltage ($V_p$):
    $V_p = V_{RMS} \times \sqrt{2}$
    $V_p = 12V \times \sqrt{2} \approx 12V \times 1.414 \approx 16.97V$

*   Therefore, the minimum PIV rating required for each diode is approximately **17V**.

**Why?** If the diode's PIV rating is less than this peak reverse voltage, the diode will break down in the reverse direction during the negative half-cycle, failing to block current and potentially causing damage to itself or other components. It's good practice to select a diode with a PIV rating at least 20-50% higher than the calculated peak reverse voltage for reliability.

**Question 3 (Conceptual/Practical, K3):** When testing a forward-biased silicon diode with a multimeter in voltage measurement mode, what approximate reading would you expect across the diode, and what does this reading represent?

**Answer:**
When a silicon diode is properly forward-biased, you would expect to measure an approximate voltage drop of **0.6V to 0.7V** across it. This reading represents the **forward voltage drop ($V_f$)**. It is the minimum voltage required to overcome the internal potential barrier at the PN junction and allow significant current to flow through the diode. This value is inherent to the semiconductor material (silicon in this case) and the manufacturing process.
