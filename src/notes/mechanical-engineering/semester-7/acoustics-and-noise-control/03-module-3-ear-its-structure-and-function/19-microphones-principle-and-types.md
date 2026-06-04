---
title: "Microphones-principle and types"
subject: "ACOUSTICS AND NOISE CONTROL"
module: "Module 3: Ear its structure and function"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf4804463ffd"
status: "completed"
scrapedAt: "2026-05-20T18:09:52.912Z"
---
# ACOUSTICS AND NOISE CONTROL

## Module 3: The Ear - Its Structure and Function

### Topic: Microphones - Principle and Types

---

### **Introduction**

This topic delves into the fascinating world of microphones, the crucial transducers that convert acoustic energy (sound waves) into electrical energy. Understanding microphones is essential for noise control engineering as they are the primary sensors used in sound level meters, data acquisition systems, and other noise monitoring equipment. This knowledge directly contributes to Course Outcomes CO1 (understanding acoustic terminology and wave propagation), CO3 (understanding noise measuring devices), and indirectly to CO2 (analyzing sound transmission) and CO4 (explaining noise reducing measures) by providing the means to measure and quantify noise.

---

### **Learning Outcomes**

Upon successful completion of this topic, you will be able to:

*   Explain the fundamental principle of operation for microphones.
*   Identify and describe the working principles of various common microphone types.
*   Discuss the advantages and disadvantages of different microphone types in the context of acoustic measurements and noise control.
*   Relate microphone characteristics to their application in acoustics and noise control engineering.

---

### **1. Fundamental Principle of Microphones**

The core function of any microphone is **transduction**: converting sound energy into an electrical signal. This is achieved by a diaphragm, a thin, flexible membrane that vibrates in response to sound pressure variations. This vibration is then converted into an electrical signal through various physical principles depending on the microphone type.

**Key Concept:** **Transduction** - The conversion of one form of energy into another. In microphones, it's acoustic energy to electrical energy.

**Key Concept:** **Diaphragm** - A thin, sensitive membrane that vibrates when struck by sound waves.

**Principle of Operation:**

1.  **Sound Waves:** Incident sound waves exert varying pressure on the microphone's diaphragm.
2.  **Diaphragm Vibration:** The diaphragm oscillates back and forth, mirroring the pressure fluctuations of the sound wave.
3.  **Transduction Mechanism:** This mechanical vibration is converted into an electrical signal through one of several physical principles.
4.  **Electrical Signal:** The resulting electrical signal is a representation of the original sound wave, typically voltage or current.

---

### **2. Key Microphone Types and Their Working Principles**

Microphones are broadly categorized based on the transduction principle they employ. We will focus on the most common types used in acoustics and noise control.

#### **2.1. Condenser Microphones (Capacitor Microphones)**

Condenser microphones are widely used in acoustic measurements due to their excellent frequency response, sensitivity, and low self-noise.

**Working Principle:**

*   A condenser microphone utilizes a **capacitor** (or condenser) as its sensing element.
*   A capacitor consists of two parallel plates, one of which is a **movable diaphragm** (often metallized mylar or plastic) and the other is a fixed **backplate** (often metal or ceramic).
*   These plates are separated by a small gap, forming the dielectric of the capacitor.
*   A **polarizing voltage** (DC bias voltage) is applied across the plates.
*   When sound waves strike the diaphragm, it vibrates, changing the distance between the diaphragm and the backplate.
*   According to the capacitor formula ($C = \frac{\epsilon A}{d}$), where $C$ is capacitance, $\epsilon$ is permittivity, $A$ is the area of the plates, and $d$ is the distance between the plates, a change in distance ($d$) leads to a change in capacitance ($C$).
*   The change in capacitance, with a constant charge (or a constant voltage through a resistor), generates a varying voltage signal across the capacitor. This voltage signal is an electrical replica of the sound wave.

**Key Components:**

*   **Diaphragm:** Thin, conductive membrane that vibrates.
*   **Backplate:** Fixed conductive plate.
*   **Polarizing Voltage (Bias Voltage):** Provides the electric field necessary for operation. This is typically supplied by phantom power or an internal battery.
*   **Pre-amplifier:** An internal electronic circuit that amplifies the weak signal from the capsule and often converts it to a low-impedance output.

**Types of Condenser Microphones:**

*   **Electret Condenser Microphones:** These are very common and use a permanently charged material (electret) for the diaphragm or backplate, eliminating the need for an external polarizing voltage. However, they still require power for their internal pre-amplifier.
    *   **Reference:** As discussed in **Ver & Beranek (2006)**, electret microphones are a significant advancement for portable and cost-effective acoustic measurements.

**Advantages:**

*   Excellent frequency response (often flat from low to high frequencies).
*   High sensitivity.
*   Low self-noise.
*   Good transient response (can capture fast-changing sounds accurately).
*   Can be made very small and omnidirectional.

**Disadvantages:**

*   Requires a power source (phantom power or battery) for the pre-amplifier.
*   Can be sensitive to humidity and temperature changes.
*   More fragile than dynamic microphones.
*   Can be more expensive.

**Application in Noise Control:**

*   High-accuracy sound level measurements (Type 1 and Type 2 sound level meters).
*   Laboratory measurements and calibration.
*   Acoustic analysis requiring precise frequency response.

#### **2.2. Dynamic Microphones (Moving-Coil Microphones)**

Dynamic microphones are robust, reliable, and do not require external power, making them suitable for many industrial and general-purpose applications.

**Working Principle:**

*   The working principle is based on **electromagnetic induction**.
*   A **diaphragm** is attached to a **voice coil**, a small coil of wire.
*   This coil is suspended within a magnetic field created by a permanent magnet.
*   When sound waves cause the diaphragm to vibrate, the voice coil moves back and forth within the magnetic field.
*   This movement of the coil, according to Faraday's Law of Induction, induces a voltage across the ends of the coil.
*   The induced voltage is proportional to the velocity of the coil's movement, which in turn is proportional to the sound pressure.

**Key Components:**

*   **Diaphragm:** Attached to the voice coil.
*   **Voice Coil:** A coil of wire attached to the diaphragm.
*   **Permanent Magnet:** Creates the magnetic field.

**Advantages:**

*   Robust and durable.
*   No external power required.
*   Can handle high sound pressure levels (SPLs) without distortion.
*   Relatively inexpensive.

**Disadvantages:**

*   Generally less sensitive than condenser microphones.
*   Frequency response may not be as flat or extended as condenser microphones, especially at higher frequencies.
*   Can have poorer transient response compared to condenser microphones.

**Application in Noise Control:**

*   Measuring high-intensity noise in industrial environments.
*   Field measurements where robustness is important.
*   General sound level monitoring.

#### **2.3. Piezoelectric Microphones**

Piezoelectric microphones utilize the piezoelectric effect, where certain crystalline materials generate an electric charge when subjected to mechanical stress.

**Working Principle:**

*   A **piezoelectric crystal** (e.g., Rochelle salt, ceramic) is used as the sensing element.
*   The diaphragm is coupled to the piezoelectric crystal.
*   When sound waves strike the diaphragm, they exert pressure on the crystal.
*   This mechanical stress causes the crystal to deform, generating an electrical charge on its surfaces.
*   This charge can be collected and converted into a voltage signal.

**Key Components:**

*   **Diaphragm:** Transfers sound pressure to the crystal.
*   **Piezoelectric Crystal:** Generates charge under stress.

**Advantages:**

*   Can be very simple and inexpensive.
*   No external power is required for the sensing element itself (though impedance matching might require active circuitry).
*   Can be robust.

**Disadvantages:**

*   Frequency response is often limited and non-linear.
*   Sensitivity can be lower than other types.
*   The output impedance is very high, requiring special pre-amplification.
*   Performance can be affected by temperature and humidity.

**Application in Noise Control:**

*   Less common for precision acoustic measurements compared to condenser microphones.
*   Can be found in some simpler acoustic sensors or vibration transducers.

#### **2.4. Ribbon Microphones**

Ribbon microphones are a type of dynamic microphone but are specifically designed with a thin, corrugated metal ribbon. They are known for their warm sound and excellent response.

**Working Principle:**

*   A very thin, corrugated **metal ribbon** (usually aluminum) is suspended in a strong magnetic field.
*   The ribbon is connected directly to an audio transformer, which provides impedance matching and some voltage amplification.
*   When sound waves strike the ribbon, it vibrates within the magnetic field.
*   This movement of the conductive ribbon within the magnetic field induces a voltage across the ribbon, following the principle of electromagnetic induction.

**Key Components:**

*   **Ribbon:** A thin, conductive strip that vibrates.
*   **Magnets:** Provide the magnetic field.
*   **Transformer:** Impedance matching and signal amplification.

**Advantages:**

*   Exceptional transient response.
*   Smooth and natural frequency response.
*   Can exhibit a figure-eight polar pattern (sensitive to front and back, rejecting sides), which can be useful for isolating sound sources.

**Disadvantages:**

*   Extremely fragile; the ribbon can be easily damaged by air blasts, humidity, or rough handling.
*   Low output voltage, requiring significant amplification.
*   Cannot handle very high SPLs without distortion or damage.
*   Generally more expensive.

**Application in Noise Control:**

*   Less common in standard noise measurement due to fragility and SPL limitations.
*   Can be used in specialized acoustic analysis or for capturing specific sound characteristics.

---

### **3. Microphone Characteristics and Selection Criteria for Noise Control**

When choosing a microphone for acoustic measurements in noise control, several key characteristics must be considered.

**Key Concept:** **Polar Pattern** - Describes the microphone's directional sensitivity to sound arriving from different angles.

*   **Omnidirectional:** Sensitive to sound equally from all directions. Ideal for general environmental noise measurements and calibrating sound fields. (e.g., ½-inch condenser microphones).
*   **Directional (Unidirectional, Cardioid, Bidirectional/Figure-eight, Hypercardioid):** Sensitive to sound from specific directions. Useful for isolating sound sources or rejecting unwanted noise.

**Key Concept:** **Frequency Response** - The range of frequencies a microphone can accurately reproduce and its sensitivity variation across that range.

*   For noise control, a **flat frequency response** across the audible spectrum (typically 20 Hz to 20 kHz) is crucial for accurate sound level measurements. Deviations in response can lead to misinterpretation of noise levels.
    *   **Reference:** **E Kinsler et al. (2000)** emphasizes the importance of a flat frequency response for accurate acoustic measurements.
*   **Standardization:** Acoustic measurements often adhere to standards like ANSI S1.4 (Sound Level Meters) and IEC 61672, which specify the required frequency response and accuracy of microphones used in Type 1 and Type 2 sound level meters.

**Key Concept:** **Sensitivity** - The output voltage produced by the microphone for a given sound pressure level (typically expressed in mV/Pa or dB re 1V/Pa).

*   Higher sensitivity is generally desirable for capturing faint sounds and reducing the impact of amplifier noise.
*   Condenser microphones typically have higher sensitivity.

**Key Concept:** **Self-Noise (Equivalent Input Noise)** - The electrical noise generated by the microphone's internal electronics and capsule.

*   Lower self-noise is critical for accurately measuring low sound levels.
*   Condenser microphones generally have lower self-noise.

**Key Concept:** **Dynamic Range** - The difference between the maximum sound pressure level a microphone can handle without significant distortion and its self-noise level.

*   A wide dynamic range is essential for measuring both very quiet and very loud sounds accurately.
*   Microphones must be chosen based on the expected range of noise levels. For example, measuring machinery noise might require a microphone with a high SPL capability.

**Key Concept:** **Signal-to-Noise Ratio (SNR)** - The ratio of the desired signal to the noise level.

*   A higher SNR indicates a cleaner signal.

**Key Concept:** **Impedance** - The electrical resistance of the microphone's output.

*   Low-impedance microphones are preferred as they are less susceptible to electrical interference and can drive longer cables without signal degradation.

**Important Points to Remember:**

*   **Condenser microphones** are the workhorse for precision acoustic measurements due to their flat frequency response and high sensitivity.
*   **Dynamic microphones** offer robustness and are suitable for high-SPL applications where extreme accuracy is not paramount.
*   The choice of microphone is dictated by the specific application, required accuracy, and the range of sound levels to be measured.
*   Always consider the **polar pattern** of the microphone in relation to the sound source and the measurement objective.
*   Microphones are often part of a larger measurement system (e.g., a sound level meter), and their performance is integral to the overall accuracy of the system.

---

### **4. Connection to Course Outcomes**

*   **CO1 (Define acoustic terminologies and understand physics of wave propagation):** Understanding how sound waves interact with a diaphragm and how this mechanical vibration is converted into an electrical signal directly relates to the physics of wave propagation. Terms like diaphragm, pressure variations, and transduction are fundamental.
*   **CO2 (Analyze sound transmission through different media and tubes):** While this topic focuses on the transducer, the output electrical signal from the microphone is used to analyze sound transmission. The microphone acts as the "receiver" in such analyses.
*   **CO3 (Understand the mechanism of hearing, noise regulations, and noise measuring devices):** Microphones are the primary components of noise measuring devices (sound level meters). Their principles of operation are essential to understanding how noise is quantified and how regulations are enforced based on these measurements.
*   **CO4 (Explain various noise reducing measures):** To implement and verify noise reduction measures, accurate noise measurements are required. Microphones are the instruments that provide these measurements.

---

### **Practice Questions and Answers**

**Question 1:**
What is the fundamental principle of operation for all microphones?

**Answer:**
The fundamental principle of operation for all microphones is **transduction**, the conversion of acoustic energy (sound waves) into electrical energy.

**Question 2:**
Explain the working principle of a condenser microphone.

**Answer:**
A condenser microphone operates on the principle of a variable capacitor. It consists of a diaphragm and a backplate forming a capacitor. A polarizing voltage is applied. Sound waves cause the diaphragm to vibrate, changing the distance between the diaphragm and the backplate. This change in distance alters the capacitance, which in turn generates a varying electrical voltage signal proportional to the sound pressure.

**Question 3:**
Which type of microphone is known for its robustness and ability to handle high sound pressure levels without external power?
    a) Condenser Microphone
    b) Dynamic Microphone
    c) Piezoelectric Microphone
    d) Ribbon Microphone

**Answer:**
    b) Dynamic Microphone

**Question 4:**
Why is a flat frequency response important for microphones used in noise control?

**Answer:**
A flat frequency response is crucial for microphones used in noise control because it ensures that the microphone reproduces all frequencies within the audible spectrum with equal sensitivity. This is vital for accurate sound level measurements, as any non-uniformity in the microphone's response would distort the measured sound level, leading to incorrect assessments of noise exposure and the effectiveness of noise control measures.

**Question 5:**
Describe the key advantage of an electret condenser microphone over a traditional condenser microphone.

**Answer:**
The key advantage of an electret condenser microphone is that it utilizes a permanently charged electret material, eliminating the need for an external polarizing voltage. While it still requires power for its internal pre-amplifier, it simplifies the external power requirements and makes them more portable and cost-effective compared to traditional condenser microphones.

**Question 6:**
Imagine you are tasked with measuring the noise levels from a high-speed industrial fan that generates intense, broad-spectrum noise. Which type of microphone would you likely choose, and why?

**Answer:**
For measuring high-intensity, broad-spectrum noise from an industrial fan, a **dynamic microphone** would be a suitable choice. This is because dynamic microphones are known for their ability to handle high Sound Pressure Levels (SPLs) without significant distortion and their robust nature is beneficial in industrial environments. While a condenser microphone might offer a flatter frequency response, its ability to handle extremely high SPLs without damage or clipping might be a concern, and its sensitivity to environmental factors could also be a drawback. The robustness and high SPL handling capability of a dynamic microphone make it a practical option for such an application, assuming the required accuracy is met. If the noise levels are extremely high and precision is paramount, a specialized heavy-duty condenser microphone designed for high SPLs might also be considered, but a standard dynamic microphone offers a good balance of performance and durability for this scenario.

---

### **Summary of Key Concepts**

*   **Transduction:** Conversion of sound energy to electrical energy.
*   **Diaphragm:** The vibrating element that responds to sound pressure.
*   **Condenser Microphone:** Uses a capacitor; requires polarization voltage; excellent frequency response and sensitivity.
*   **Dynamic Microphone:** Uses electromagnetic induction; robust; handles high SPLs; no external power needed for the capsule.
*   **Piezoelectric Microphone:** Uses the piezoelectric effect; simple; limited frequency response.
*   **Ribbon Microphone:** A type of dynamic microphone with a metal ribbon; excellent transient response but fragile.
*   **Polar Pattern:** Directional sensitivity of the microphone.
*   **Frequency Response:** Accuracy of sound reproduction across different frequencies.
*   **Sensitivity:** Output voltage per unit of sound pressure.
*   **Self-Noise:** Internal electrical noise generated by the microphone.
*   **Dynamic Range:** The range of sound pressure levels a microphone can accurately measure.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### **References**

*   **Ver, Istvan L., and Leo L. Beranek. *Noise and Vibration Control Engineering*. Wiley, Second edition, 2006.** (For electret microphones and general principles of measurement)
*   **E Kinsler, Lawrence E., Austin R Frey, Alan B Coppens, and James V Sanders. *Fundamentals of Acoustics*. Wiley, Fourth edition, 2000.** (For fundamental principles of sound and transducers)
*   **Munjal, M L. *Noise and Vibration Control*. World Scientific publishing, 2013.**
*   **Crocker, Malcom J. *Handbook of Noise and Vibration Control*. Wiley, 2007.**
*   **Barron, Randall F. *Industrial Noise Control and Acoustics*. Marcel Dekker, Inc., New York., 2001.**
*   **Lasithan L G. *Mechanical Vibrations and Industrial Noise Control*. PHI Learning, 2014.**

---