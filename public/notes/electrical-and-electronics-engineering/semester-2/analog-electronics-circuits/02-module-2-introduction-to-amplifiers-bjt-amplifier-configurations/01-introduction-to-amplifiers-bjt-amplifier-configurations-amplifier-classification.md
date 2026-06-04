---
title: "Introduction to Amplifiers  – BJT amplifier configurations – -Amplifier classifications"
subject: "ANALOG ELECTRONICS CIRCUITS"
module: "Module 2: Introduction to Amplifiers  – BJT amplifier configurations – "
branch: "Electrical and Electronics Engineering"
semester: 2
topicId: "68bd213e9ece2bdd875f95af"
status: "completed"
scrapedAt: "2026-05-23T16:04:21.253Z"
---
# ANALOG ELECTRONICS CIRCUITS: Module 2 - Introduction to Amplifiers & BJT Amplifier Configurations

## Topic: Introduction to Amplifiers – BJT Amplifier Configurations – Amplifier Classifications

Welcome everyone! In this module, we're diving into the fascinating world of **amplifiers**, the workhorses of analog electronics. Think of them as the volume knobs of our electronic systems – they take a small, weak signal and make it bigger, stronger, and more usable. We'll be focusing on **Bipolar Junction Transistor (BJT) amplifiers**, understanding how they are configured and, importantly, how we classify them. This foundational knowledge is crucial for our understanding of many analog circuits we'll encounter later.

### Why Amplifiers? The Core Idea

Before we get into the specifics of BJTs, let's establish what an amplifier *is* and *why* it's so fundamental. Imagine a tiny whisper coming from a distant microphone. Without an amplifier, that whisper would be lost. An amplifier takes that weak electrical signal (like the one from our microphone) and increases its amplitude – its voltage or current – without significantly distorting its shape. This boosted signal can then drive other devices, like speakers, or be processed further by other electronic circuits.

This concept directly relates to our **Course Outcome 1 (CO1)**: "Design of diode circuits." While we're not directly designing diodes here, understanding how signals are manipulated and amplified is a necessary precursor to designing more complex circuits involving diodes and other active components. More importantly, this topic directly addresses **CO2: Model BJT and FET amplifier circuits** and **CO3: Design amplifier and oscillator circuits using BJT**. By understanding the different BJT amplifier configurations and classifications, we are building the bedrock for modeling and designing these circuits.

### Understanding the BJT as an Amplifier

As you've likely learned in previous modules, the BJT, with its three terminals – Base, Collector, and Emitter – acts as a voltage-controlled current source. A small current flowing into the Base controls a larger current flowing between the Collector and Emitter. This inherent property of amplification is what we exploit in amplifier circuits.

The way we connect the input and output signals to these three terminals defines the **BJT amplifier configuration**. There are three basic ways to connect a BJT to amplify a signal, and each configuration has its own unique characteristics, advantages, and disadvantages. These are:

1.  **Common Emitter (CE) Amplifier:**
2.  **Common Collector (CC) Amplifier:**
3.  **Common Base (CB) Amplifier:**

We'll delve into the details of these configurations in subsequent sections. For now, the key takeaway is that the *choice* of configuration profoundly impacts how the amplifier behaves in terms of voltage gain, current gain, input impedance, and output impedance.

### Amplifier Classifications: A Necessary Distinction

Now, just like we classify different types of cars (sedans, SUVs, sports cars), amplifiers are also classified based on several criteria. Understanding these classifications helps us select the right amplifier for a specific application. The most common classification is based on the **portion of the input signal waveform that the amplifier reproduces**. This leads to the familiar A, B, AB, and C classifications.

Let's explore these classifications:

#### Class A Amplifier

*   **What it is:** In a Class A amplifier, the active device (in our case, the BJT) conducts for the **entire 360 degrees** of the input signal cycle. This means the transistor is always "on" and actively amplifying the signal throughout its positive and negative half-cycles.
*   **Analogy:** Imagine a very polite and attentive waiter at a restaurant who is always ready to serve you, no matter what you order or when you ask. They are continuously available.
*   **Key Characteristics:**
    *   **High Fidelity:** Class A amplifiers generally offer the lowest distortion, meaning they reproduce the input signal waveform with the highest accuracy. This is because the transistor is always operating in its linear region.
    *   **Low Efficiency:** The major drawback is poor efficiency. Since the transistor is always conducting, it dissipates power even when there's no input signal. This leads to a lot of heat generation.
    *   **Simple Design:** The circuit is typically the simplest to design.
*   **When it's used:** They are used in applications where distortion is unacceptable and efficiency is not a primary concern, such as in high-quality audio pre-amplifiers or small signal amplifiers where power consumption is not an issue.

#### Class B Amplifier

*   **What it is:** In a Class B amplifier, the active device conducts for only **half (180 degrees)** of the input signal cycle. Typically, one transistor amplifies the positive half-cycle, and another amplifies the negative half-cycle.
*   **Analogy:** Think of two musicians, one who only plays during the day and another who only plays at night. They cover the entire 24-hour period but are never playing simultaneously.
*   **Key Characteristics:**
    *   **Improved Efficiency:** Class B amplifiers are significantly more efficient than Class A because the transistor is only active when there's a signal to amplify. Power is not wasted when there's no signal.
    *   **Crossover Distortion:** The major problem with Class B is **crossover distortion**. When the signal transitions from the positive half to the negative half (or vice versa), there's a brief period where both transistors are off, leading to a "dead zone" or distortion around the zero-crossing point.
    *   **Push-Pull Configuration:** To overcome crossover distortion, Class B amplifiers are almost always used in a **push-pull configuration**, often with two transistors working in tandem (as mentioned above).
*   **When it's used:** Commonly used in power amplifiers where efficiency is important, but the push-pull arrangement helps mitigate distortion.

#### Class AB Amplifier

*   **What it is:** Class AB is a compromise between Class A and Class B. The active device conducts for **slightly more than half (between 180 and 360 degrees)** of the input signal cycle. Each transistor in a push-pull configuration conducts for just over half a cycle.
*   **Analogy:** Imagine two musicians playing together. One plays most of the time, but the other also joins in for a short period when the first one is about to stop, ensuring a smooth transition.
*   **Key Characteristics:**
    *   **Reduced Crossover Distortion:** By having each transistor conduct for a small portion of the other's half-cycle, crossover distortion is significantly reduced compared to pure Class B.
    *   **Good Efficiency:** It offers much better efficiency than Class A while still providing a good balance of linearity.
    *   **Most Common:** This is arguably the most common classification for audio power amplifiers because it provides a good blend of efficiency and low distortion.
*   **When it's used:** Widely used in audio power amplifiers, where high fidelity and reasonable efficiency are both required.

#### Class C Amplifier

*   **What it is:** In a Class C amplifier, the active device conducts for **less than half (typically 90-120 degrees)** of the input signal cycle. The transistor is only "on" for a small portion of the cycle.
*   **Analogy:** Imagine a musician who only plays a specific short flourish or riff and then stops, leaving long silent periods.
*   **Key Characteristics:**
    *   **Highest Efficiency:** Class C amplifiers are the most efficient, as the transistor conducts for the shortest duration.
    *   **High Distortion:** They produce a very large amount of distortion. The output waveform is severely clipped and looks nothing like the input.
    *   **Tuned Circuits Required:** To recover a meaningful output signal (like a sine wave), Class C amplifiers typically require a **tuned resonant circuit** (like an LC tank circuit) at the output. This circuit "rings" at the desired frequency, filtering out the unwanted harmonics created by the Class C operation.
*   **When it's used:** Primarily used in radio frequency (RF) applications, such as RF power amplifiers in transmitters, where efficiency is paramount and the output is usually filtered by a resonant circuit. They are not suitable for audio amplification.

#### Other Amplifier Classifications (Briefly)

While Class A, B, AB, and C are the most fundamental classifications related to signal reproduction, you might also encounter other ways amplifiers are described:

*   **Small-Signal Amplifiers vs. Large-Signal Amplifiers:**
    *   **Small-Signal:** Designed to amplify signals that are small enough not to cause significant changes in the operating point of the transistor. They are typically focused on high gain and linearity. Often operate in Class A.
    *   **Large-Signal (Power Amplifiers):** Designed to deliver significant power to a load. Efficiency and power handling are key considerations. Often operate in Class B or Class AB.
*   **Frequency Range:** Amplifiers can be classified by the frequency range they are designed to operate in, such as Audio Amplifiers, RF Amplifiers, etc.

### Connecting to Course Outcomes and Exams

**How does this relate to our Course Outcomes?**

*   **CO2 (Model BJT and FET amplifier circuits) and CO3 (Design amplifier and oscillator circuits using BJT):** Understanding these classifications is *essential* for modeling and designing BJT amplifiers. When you are asked to design an audio amplifier, you'll immediately think of Class AB. If it's an RF transmitter, you'll consider Class C. The choice of class dictates the biasing, the transistor selection, and the overall circuit topology.
*   **Exam Focus:** In exams, you'll often be asked to differentiate between these classes, describe their characteristics (gain, efficiency, distortion), and explain why a particular class is chosen for a specific application. Expect questions asking you to explain crossover distortion in Class B and how it's overcome in Class AB. You might also be asked about the role of tuned circuits in Class C amplifiers.

**Important to Remember:**

*   **Class A:** 360-degree conduction, low distortion, low efficiency. Always on.
*   **Class B:** 180-degree conduction, higher efficiency, crossover distortion. Used in push-pull.
*   **Class AB:** Just over 180-degree conduction, good efficiency, reduced crossover distortion. Very common for audio.
*   **Class C:** Less than 180-degree conduction, highest efficiency, high distortion, requires tuned output. For RF.

The choice of amplifier class is a trade-off between fidelity (low distortion) and efficiency (power consumption). There's no "best" class; it entirely depends on the application's requirements.

We've now covered the fundamental classifications of amplifiers. In the next sections, we will delve deeper into the three basic BJT amplifier configurations (Common Emitter, Common Collector, Common Base) and see how these classifications apply to them.

---

## Sample Questions with Answers

**Q1. An amplifier that conducts for the entire 360 degrees of the input signal cycle is classified as:**
    a) Class A
    b) Class B
    c) Class AB
    d) Class C

**Answer:** a) Class A
**Reasoning:** Class A amplifiers are defined by their active device conducting for the full 360-degree input signal period, ensuring continuous amplification and low distortion.

**Q2. What is the primary disadvantage of a Class B amplifier, and how is it typically overcome?**

**Answer:** The primary disadvantage of a Class B amplifier is **crossover distortion**. This occurs when the input signal transitions through zero volts, causing a brief period where both transistors in a push-pull configuration are momentarily off, resulting in a "gap" in the amplified output waveform. It is typically overcome by using a **Class AB configuration**, where each transistor conducts for slightly more than half a cycle, ensuring that one transistor is always active during the signal's transition through zero.

**Q3. Which amplifier class is most suitable for high-fidelity audio power amplification and why?**

**Answer:** **Class AB** amplifiers are most suitable for high-fidelity audio power amplification. They offer a good balance between low distortion (achieved by conducting for just over half a cycle, minimizing crossover distortion) and reasonable efficiency (much better than Class A). Class A offers lower distortion but is very inefficient, while Class B suffers from significant crossover distortion, and Class C is too distorted for audio reproduction.

**Q4. A radio frequency (RF) transmitter's power amplifier is most likely to operate in which class, and what is the reason for this choice?**

**Answer:** An RF power amplifier is most likely to operate in **Class C**. The primary reason is its **high efficiency**. RF applications prioritize maximizing the output power delivered to the antenna for transmission, and Class C offers the highest efficiency. Although it has high distortion, this is acceptable in RF systems because the output signal is typically passed through a tuned resonant circuit (like an LC tank circuit) which filters out the unwanted harmonics and reconstructs a clean sinusoidal waveform at the desired transmission frequency.

**Q5. Explain the trade-off between amplifier efficiency and distortion for Class A, Class AB, and Class C amplifiers.**

**Answer:** There is an inverse relationship between amplifier efficiency and linearity (low distortion).
*   **Class A:** Offers the **lowest efficiency** (highest power loss, often less than 50%) but the **lowest distortion**, providing the most linear amplification.
*   **Class AB:** Provides a **compromise**, offering **moderate efficiency** (typically 50-75%) and **reduced distortion** compared to Class B or C, making it ideal for audio.
*   **Class C:** Achieves the **highest efficiency** (often exceeding 75-80%) but suffers from the **highest distortion**, making it unsuitable for applications requiring accurate waveform reproduction without filtering.

This summary highlights the fundamental trade-offs when selecting an amplifier class, a key concept for designing effective analog circuits.
