---
title: "Multistage BJT Amplifiers: Types of multistage amplifiers"
subject: "ANALOG CIRCUITS"
module: "Module 2: BJT Amplifiers: Design of RC coupled CE amplifier "
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2ec"
status: "completed"
scrapedAt: "2026-05-23T17:44:14.733Z"
---
# ANALOG CIRCUITS: Module 2: BJT Amplifiers: Design of RC coupled CE amplifier

## Topic: Multistage BJT Amplifiers: Types of Multistage Amplifiers

This module focuses on extending the analysis and design of single-stage BJT amplifiers to multiple stages, aiming to achieve higher gain, improved frequency response, and specific impedance characteristics. Understanding different configurations of multistage amplifiers is crucial for designing complex analog circuits.

---

### Learning Outcomes:

*   **Analyze the characteristics of various multistage amplifier configurations.** This includes understanding how cascading amplifier stages affects overall gain, bandwidth, input impedance, and output impedance.
*   **Understand the purpose and application of different types of multistage amplifiers.** This involves recognizing when a specific configuration is required to meet performance objectives.
*   **Relate the concepts of single-stage amplification to the behavior of multistage systems.** This involves applying the principles learned in previous topics to predict the performance of cascaded amplifiers.
*   **(Implied, relating to CO2) Analyze multistage BJT amplifier circuits using equivalent models.** While this specific topic focuses on types, the underlying analysis technique will involve equivalent models.

---

### Course Outcomes Alignment:

*   **CO2: Analyze single stage and multistage BJT amplifier circuits using equivalent models.** This topic directly addresses the "multistage" aspect of this outcome, providing the foundation for analyzing cascaded amplifiers.

---

### Key Concepts and Definitions:

*   **Multistage Amplifier:** An amplifier formed by connecting two or more single-stage amplifiers in cascade (series). The output of one stage is fed to the input of the next.
*   **Cascading:** The process of connecting amplifier stages in series to achieve a higher overall gain or other desired performance characteristics.
*   **Gain of a Multistage Amplifier:** The overall voltage gain ($A_v$) of a multistage amplifier is the product of the individual stage gains.
    $A_v_{total} = A_{v1} \times A_{v2} \times A_{v3} \times ... \times A_{vn}$
    Similarly, current gain ($A_i$) and power gain ($A_p$) are also products of individual stage gains.
*   **Bandwidth of a Multistage Amplifier:** The overall bandwidth of a multistage amplifier is limited by the stage with the narrowest bandwidth.
    $BW_{total} \approx \sqrt{2^{1/n}-1} \times BW_{stage}$ for n identical stages. For non-identical stages, the narrowest bandwidth stage dominates.
*   **Input Impedance ($Z_{in}$) of a Multistage Amplifier:** The input impedance of the first stage determines the overall input impedance.
*   **Output Impedance ($Z_{out}$) of a Multistage Amplifier:** The output impedance of the last stage determines the overall output impedance.

---

### Types of Multistage BJT Amplifiers:

The classification of multistage amplifiers is primarily based on the configuration of the individual stages used and how they are interconnected. The most common types are:

#### 1. Direct-Coupled Multistage Amplifiers:

*   **Description:** In this configuration, amplifier stages are directly connected without any coupling components (like capacitors or transformers). The DC output of one stage is directly fed to the DC input of the next stage.
*   **Advantages:**
    *   Excellent low-frequency response (no coupling capacitors to block low frequencies).
    *   Simpler circuitry.
*   **Disadvantages:**
    *   DC drift: Any DC offset or drift in the initial stages will be amplified and passed to subsequent stages, potentially saturating the transistors or causing improper biasing.
    *   Susceptible to noise amplification.
*   **Applications:** Primarily used in applications where very low-frequency amplification is required, such as DC amplifiers and some instrumentation amplifiers.
*   **Textbook Reference:**
    *   **Boylestad & Nashelsky:** Discusses direct-coupled amplifiers in the context of multi-transistor circuits, highlighting their ability to amplify DC signals. (Chapter on DC biasing and multi-transistor circuits).
    *   **Sedra & Smith:** Addresses direct coupling in the context of operational amplifiers and integrated circuits, where it's a common technique. (Chapter on basic analog circuits and Op-Amps).

#### 2. RC-Coupled Multistage Amplifiers:

*   **Description:** This is the most common type. Stages are coupled using RC networks (typically capacitors). The coupling capacitor blocks the DC component of the signal from the previous stage's output and allows the AC signal to pass to the next stage's input.
*   **Advantages:**
    *   Good frequency response over a wide range of frequencies, excluding very low frequencies.
    *   Relatively simple design and implementation.
    *   Excellent isolation between the DC operating points of successive stages.
*   **Disadvantages:**
    *   Low-frequency attenuation: The coupling capacitors introduce a high-pass filtering effect, causing attenuation of very low frequencies. The lower cutoff frequency ($f_L$) is determined by the values of the coupling capacitors and the input/output impedances of the stages.
    *   Capacitors can add to the physical size and cost of the circuit.
*   **Applications:** Widely used in audio amplifiers, general-purpose signal amplifiers, and instrumentation.
*   **Textbook Reference:**
    *   **Boylestad & Nashelsky:** Dedicates significant coverage to RC-coupled amplifiers, detailing the design considerations for coupling and bypass capacitors and their impact on frequency response. (Chapter on Frequency Response of Amplifiers).
    *   **Sedra & Smith:** Also provides a comprehensive analysis of RC-coupled amplifier design, including the impact of parasitic capacitances and coupling/bypass capacitors on the overall frequency response. (Chapter on Single-Stage Amplifiers and Frequency Response).
    *   **Bogart, Beasley, & Rico:** Explains the role of coupling capacitors in isolating DC bias points and their effect on the low-frequency gain. (Chapter on Frequency Response of Amplifiers).

#### 3. Transformer-Coupled Multistage Amplifiers:

*   **Description:** Stages are coupled using transformers. The transformer provides impedance matching and isolates the DC bias of the stages.
*   **Advantages:**
    *   Excellent impedance matching capability, allowing for maximum power transfer between stages.
    *   Provides DC isolation between stages.
    *   Can provide voltage or current gain depending on the transformer turns ratio.
*   **Disadvantages:**
    *   Bulky, heavy, and expensive due to the transformer.
    *   Limited frequency response: Transformers have inductive and capacitive properties that limit their performance at high frequencies. They also exhibit poor low-frequency response due to the magnetizing inductance.
    *   Magnetic coupling can lead to noise interference.
*   **Applications:** Historically used in power amplifiers and impedance matching networks, but less common in modern designs due to the availability of integrated circuits and other coupling methods.
*   **Textbook Reference:**
    *   **Boylestad & Nashelsky:** Discusses transformer coupling, particularly in the context of power amplifiers and impedance matching. (Chapter on Power Amplifiers).
    *   **Bell:** Explains transformer coupling and its role in impedance matching and isolation. (Chapter on Coupled Amplifiers).

#### 4. Impedance-Coupled Multistage Amplifiers:

*   **Description:** This is a less common configuration where a simple impedance (like a resistor or inductor) is used in the collector circuit of the first stage, and the input of the second stage is connected to this impedance. The coupling is primarily through the impedance itself, and often a bypass capacitor is used for AC signals.
*   **Advantages:**
    *   Simpler than transformer coupling.
    *   Can offer some degree of impedance matching.
*   **Disadvantages:**
    *   Low gain per stage compared to other methods.
    *   Frequency response can be limited by the coupling impedance.
*   **Applications:** Not as widely used as RC or direct coupling for general-purpose amplification.
*   **Textbook Reference:**
    *   While not as explicitly categorized as a distinct *type* in the same way as RC or transformer coupling in some introductory texts, the principles of coupling through impedances are implicitly covered when discussing the load in amplifier stages.
    *   **Referencing:** Readers might find concepts related to the load impedance's effect on gain and frequency response relevant in chapters discussing single-stage amplifier analysis in **Boylestad & Nashelsky** or **Sedra & Smith**.

---

### Comparing Multistage Amplifier Types:

| Feature               | Direct-Coupled      | RC-Coupled           | Transformer-Coupled      | Impedance-Coupled     |
| :-------------------- | :------------------ | :------------------- | :----------------------- | :-------------------- |
| **Low-Frequency Response** | Excellent           | Poor (attenuation)   | Poor (attenuation)       | Moderate              |
| **High-Frequency Response**| Good                | Good                 | Poor                     | Good                  |
| **DC Isolation**      | None                | Good (via capacitor) | Excellent (via transformer)| Good (via bypass cap) |
| **Complexity**        | Simple              | Moderate             | High                     | Moderate              |
| **Cost**              | Low                 | Low                  | High (transformer)       | Low                   |
| **Size/Weight**       | Small               | Small                | Bulky                    | Small                 |
| **Impedance Matching**| N/A                 | Limited              | Excellent                | Moderate              |
| **Typical Application**| DC Amplifiers       | Audio Amplifiers     | Power Amplifiers (hist.) | Less common           |

---

### Important Points to Remember:

*   **Overall Gain:** The total voltage or current gain of a multistage amplifier is the product of the individual stage gains. Any loss in one stage directly reduces the overall gain.
*   **Bandwidth Limitation:** The overall bandwidth of a multistage amplifier is determined by the stage with the narrowest bandwidth. To achieve a wide overall bandwidth, each stage must have a wide bandwidth.
*   **DC Bias Stability:** Direct coupling is problematic for DC stability due to cumulative DC offset. RC and transformer coupling offer DC isolation, which is generally preferred for stability.
*   **Trade-offs:** The choice of coupling method involves trade-offs between frequency response, complexity, cost, and DC stability. RC coupling is the most versatile and widely used for general-purpose amplification.
*   **Loading Effects:** When cascading stages, the output impedance of the preceding stage acts as the load for that stage, and the input impedance of the succeeding stage acts as the load for the preceding stage. These loading effects must be considered in the design to accurately predict overall gain. (This is a crucial aspect of CO2).

---

### Examples:

**Example 1: RC-Coupled Two-Stage CE Amplifier**

Consider two common-emitter (CE) BJT stages cascaded using RC coupling.

*   **Stage 1:** Amplifies the input signal. Its output is coupled via a capacitor ($C_c1$) to the input of Stage 2.
*   **Stage 2:** Amplifies the signal from Stage 1. Its output is the final amplified signal.

The overall voltage gain will be approximately $A_{v_{total}} \approx A_{v1} \times A_{v2}$.
The lower cutoff frequency will be dominated by the coupling capacitor ($C_{c1}$) and the bypass capacitor in Stage 1, as well as the coupling capacitor ($C_{c2}$) and the bypass capacitor in Stage 2.

**Example 2: Why Direct Coupling is Problematic for High Gain:**

Imagine a direct-coupled amplifier where the first stage has a small positive DC offset at its output (e.g., 10mV). If the voltage gain of the first stage is 100, this offset becomes 1V at the input of the second stage. If the second stage also has a gain of 100, this 1V offset is amplified to 100V. This can easily drive the second stage into saturation, rendering the amplifier useless. This highlights the importance of DC isolation provided by RC or transformer coupling.

---

### Practice Questions:

1.  **What is the primary advantage of using RC coupling over direct coupling in a multistage amplifier?**
    *   A) Higher overall gain
    *   B) Better low-frequency response
    *   C) Improved DC bias stability
    *   D) Lower input impedance
    **Answer:** C) Improved DC bias stability

2.  **If a two-stage amplifier has voltage gains of $A_{v1} = -50$ and $A_{v2} = -100$, what is the overall voltage gain of the amplifier?**
    *   A) -150
    *   B) -5000
    *   C) 5000
    *   D) -100/50
    **Answer:** B) -5000 (Gain is the product of individual gains, and the negative signs indicate phase inversion in CE stages).

3.  **Which type of multistage amplifier is most suitable for amplifying DC signals and why?**
    *   **Answer:** Direct-coupled multistage amplifier. It is suitable because it does not use coupling capacitors or transformers, which would block DC signals.

4.  **Discuss the trade-offs between RC-coupled and transformer-coupled amplifiers in terms of frequency response and cost.**
    *   **Answer:**
        *   **RC-coupled:** Generally offers a wider bandwidth, especially at higher frequencies, compared to transformer-coupled amplifiers. It is also less expensive and less bulky. However, RC coupling exhibits poor low-frequency response due to the coupling capacitors.
        *   **Transformer-coupled:** Can provide excellent impedance matching and DC isolation. However, transformers are bulky, expensive, and have limited frequency response, particularly at both low and high frequencies, due to their inductive and capacitive properties.

5.  **How does the bandwidth of a multistage amplifier relate to the bandwidth of its individual stages? If you have three identical RC-coupled CE amplifier stages, each with a bandwidth of 20 kHz, what is the approximate overall bandwidth?**
    *   **Answer:** The overall bandwidth of a multistage amplifier is limited by the stage with the narrowest bandwidth. For $n$ identical stages, the overall bandwidth ($BW_{total}$) is approximately related to the individual stage bandwidth ($BW_{stage}$) by $BW_{total} \approx BW_{stage} \times \sqrt{2^{1/n}-1}$.
    *   For n=3 and $BW_{stage} = 20$ kHz:
        $BW_{total} \approx 20 \text{ kHz} \times \sqrt{2^{1/3}-1}$
        $BW_{total} \approx 20 \text{ kHz} \times \sqrt{1.2599 - 1}$
        $BW_{total} \approx 20 \text{ kHz} \times \sqrt{0.2599}$
        $BW_{total} \approx 20 \text{ kHz} \times 0.5098$
        $BW_{total} \approx 10.2 \text{ kHz}$
        *(Note: A simpler approximation often used is that the bandwidth decreases with each additional stage. For many practical purposes, the narrowest bandwidth stage dominates. The formula provides a more precise calculation for identical stages).*

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### Further Reading and Reference:

*   **Boylestad & Nashelsky, 11th ed., 2015:** Chapters on Frequency Response of Amplifiers and Multi-stage Amplifiers will provide detailed analysis of coupling methods and their impact on gain and bandwidth.
*   **Sedra & Smith, 6th ed., 2013:** Chapters on Single-Stage Amplifiers and Frequency Response, and potentially in sections on multistage amplifier design within feedback or op-amp contexts.
*   **Bogart, Beasley, & Rico, 6th ed.:** Refer to chapters on amplifier frequency response and multistage amplification.

This topic lays the groundwork for understanding how to build more complex and high-performance amplifier systems by connecting simpler amplifier stages. The next steps would involve analyzing the specific design considerations and calculations for these cascaded circuits.