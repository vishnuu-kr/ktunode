---
title: "Phase comparison line protection."
subject: "DIGITAL PROTECTION OF POWER SYSTEMS"
module: "Module 2: Protection of Transmission Lines:  Schemes of distance protection"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f36580"
status: "completed"
scrapedAt: "2026-05-23T16:25:54.021Z"
---
# Digital Protection of Power Systems

## Module 2: Protection of Transmission Lines: Schemes of Distance Protection

### Topic: Phase Comparison Line Protection

---

### 1. Introduction to Phase Comparison Line Protection

Phase comparison line protection is a specialized relaying scheme that relies on the principle of comparing the phase angle of current at the two ends of a transmission line. It is particularly effective for short to medium length transmission lines where traditional impedance or mho relays might face issues due to the low impedance of the line and the influence of load and fault impedance.

**Key Concept:** The fundamental principle is that during an internal fault (a fault occurring within the protected zone), the current flowing into the line at one end will be *out of phase* with the current flowing out of the line at the other end. This phase difference is the basis for detection.

**Reference:** While the module focuses on distance protection, phase comparison is a distinct carrier-aided or pilot wire protection scheme often discussed alongside. Johns and Salman (1995) in "Digital Protection of Power System" likely discuss pilot wire and carrier-aided schemes, which share similarities in communication requirements with phase comparison. Phadke and Thorpe (1988) in "Computer Relaying for Power Systems" might also touch upon communication-based schemes.

---

### 2. Principle of Operation

The core idea is to transmit the current waveform (or a representation of it) from one end of the line to the other. A relay at each end then compares the phase of the current at its local end with the phase of the current received from the remote end.

**Detailed Steps:**

1.  **Current Measurement:** At each terminal of the transmission line, the phase currents are measured using Current Transformers (CTs).
2.  **Phase Angle Determination:** The relay determines the phase angle of the local current relative to a reference (e.g., the voltage at the local end).
3.  **Communication Link:** A communication channel (like a pilot wire, carrier current, or fiber optic cable) is used to transmit the phase information (or the current waveform itself) from one terminal to the other.
4.  **Phase Comparison:**
    *   **Internal Fault:** For a fault *within* the protected zone, the direction of current flow reverses. This reversal results in a significant phase shift between the local current and the remote current. For example, if the current at terminal A is $I_A$ and the current at terminal B is $I_B$, during an internal fault, $I_A$ and $I_B$ will be approximately $180^\circ$ out of phase.
    *   **External Fault:** For a fault *outside* the protected zone, both terminals will see current flowing in the *same direction* into the line. This means the phase angles of the local and remote currents will be similar.
5.  **Relay Action:**
    *   If the phase difference between the local and remote currents exceeds a predefined threshold (typically close to $180^\circ$), the relay declares an internal fault and initiates tripping of the circuit breakers at both ends.
    *   If the phase difference is within a certain tolerance (close to $0^\circ$), it is considered an external fault or normal load condition, and no tripping occurs.

**Mathematical Representation (Conceptual):**

Let $I_{AL}$ be the local current at terminal A, and $I_{BL}$ be the received current from terminal B.
The relay at A calculates the phase difference $\Delta \phi = \text{phase}(I_{AL}) - \text{phase}(I_{BL})$.

*   If $|\Delta \phi| \approx 180^\circ$, an internal fault is detected.
*   If $|\Delta \phi| \approx 0^\circ$, an external fault or normal condition is assumed.

**Important Point:** This scheme is sensitive to the phase of the current, not its magnitude directly, although magnitude is often used as a blocking condition to prevent false tripping during power swings.

---

### 3. Requirements for Phase Comparison Schemes

Phase comparison schemes are pilot schemes, meaning they rely on communication between the two ends of the line.

*   **Communication Channel:** A reliable and fast communication channel is essential. This can be:
    *   **Pilot Wires:** Dedicated copper wires running between the line terminals. Suitable for short distances.
    *   **Carrier Current (Power Line Carrier Communication - PLCC):** Uses the transmission line itself as the communication medium. A carrier signal is superimposed onto the power line.
    *   **Fiber Optic Cables:** Dedicated fiber optic cables laid alongside or separately from the transmission line. Offers high bandwidth and immunity to electromagnetic interference.
*   **Synchronization:** While not as critical as in some other schemes, some level of synchronization in the timing of measurements at both ends can improve accuracy.
*   **Reliability and Security:** The communication system must be reliable to avoid tripping failure (missed faults) and secure to prevent false tripping (unnecessary operations).

---

### 4. Types of Phase Comparison Relays

Historically, phase comparison relays were electro-mechanical, but modern digital relays implement this logic using signal processing techniques.

*   **Blocking vs. Tripping Schemes:**
    *   **Blocking Scheme:** The relay at each end receives the current from the other end. If the phase difference indicates an internal fault, the relay sends a "trip" signal. If the phase difference indicates an external fault, it sends a "block" signal to the remote end. This is not the typical phase comparison scheme but a related concept.
    *   **Phase Comparison Tripping Scheme:** This is the primary focus. Relays at both ends compare their local current phase with the received remote current phase. If both ends detect a phase difference (indicating an internal fault), they trip.
*   **Magnitude Supervision:** To prevent false tripping during abnormal system conditions like power swings, a magnitude supervision element is usually incorporated. If the fault current magnitude is below a certain threshold, or if power swing conditions are detected, the phase comparison logic is blocked.

---

### 5. Digital Implementation of Phase Comparison

In a digital relaying system, phase comparison is implemented using digital signal processing (DSP) algorithms.

1.  **Sampling:** Analog current signals are sampled at a high frequency.
2.  **Digital Filtering:** Digital filters (e.g., Fourier filters, Kalman filters) are used to extract the fundamental frequency component of the current and to remove harmonics and DC offsets. This is crucial for accurate phase angle calculation.
3.  **Phase Angle Calculation:** Algorithms like the Fast Fourier Transform (FFT) or discrete Fourier Transform (DFT) are used to calculate the phase angle of the fundamental frequency component of the current. Alternatively, arctangent methods can be employed.
4.  **Comparison Logic:** The calculated phase angles from the local and remote ends are compared.
5.  **Decision Making:** Based on the phase difference and magnitude supervision, the relay makes a tripping decision.

**Example of Digital Phase Angle Calculation:**

Using DFT, the fundamental component of a sampled current signal $i(t)$ can be represented as:
$I_1 = \sum_{n=0}^{N-1} i(nT) e^{-j \frac{2\pi n}{N}}$
where $T$ is the sampling interval and $N$ is the number of samples per cycle. The phase angle is the argument of $I_1$.

**Reference:** Waldemar Rebizant (2008) in "Digital Signal Processing in Power System Protection and Control" would provide detailed explanations on sampling, filtering, and phase angle calculation techniques relevant to digital relays.

---

### 6. Advantages of Phase Comparison Line Protection

*   **Fast Operation:** Can provide very fast fault clearance, especially for short lines.
*   **Independent of Line Impedance:** Unlike distance relays, its operation is not directly dependent on the line impedance or fault resistance, making it suitable for short lines.
*   **Secure for External Faults:** With proper logic and supervision, it is generally secure against false tripping for external faults.
*   **Clear Zone of Protection:** It provides a well-defined zone of protection for the entire line length.

---

### 7. Disadvantages of Phase Comparison Line Protection

*   **Communication Dependency:** Relies heavily on the availability and reliability of the communication channel. Failure of the communication channel can lead to loss of protection.
*   **High Communication Costs:** The cost of establishing and maintaining a reliable communication channel can be significant.
*   **Susceptible to Communication Failures:** False tripping can occur if the communication channel is lost or carries spurious signals, unless adequate security measures (like blocking signals during loss of communication) are implemented.
*   **Susceptible to Power Swings:** Without proper supervision, power swings can lead to incorrect phase comparisons and false tripping.
*   **Limited for Long Lines:** For very long transmission lines, the current differentials due to fault location and system conditions can become complex, making phase comparison less suitable compared to traveling wave or modern distance schemes.

---

### 8. Applications and Suitability

Phase comparison protection is best suited for:

*   **Short to Medium Length Transmission Lines:** Where the reactive impedance of the line is relatively small compared to the resistive impedance.
*   **Lines where distance relays might overreach or underreach due to system configurations.**
*   **Underground Cables:** Where pilot wires are often readily available.

**Contrast with Distance Protection:**

Distance relays measure the apparent impedance to the fault, which is proportional to the line length. Phase comparison relays, however, measure the phase relationship of currents at the two ends, irrespective of the distance. This makes phase comparison more direct for short lines.

---

### 9. Learning Outcomes Alignment

*   **CO1: Identify the relay protection scheme suitable for overcurrent, differential and distance protection.**
    *   This topic directly addresses identifying phase comparison as a scheme, distinct from overcurrent and differential, and understanding its application context, especially in comparison to distance protection for transmission lines.
*   **CO3: Illustrate the operation of a numerical relay.**
    *   The digital implementation section explains how numerical relays use sampling, filtering, and algorithms to perform phase comparison, aligning with this outcome.
*   **CO4: Explain signal processing methods and algorithms in digital protection.**
    *   The discussion on sampling, digital filtering, and phase angle calculation (e.g., DFT, FFT) directly relates to this outcome.

---

### 10. Important Points to Remember

*   Phase comparison relies on the phase shift of current between the two ends of a line during an internal fault.
*   It is a pilot scheme requiring a communication channel.
*   It is generally fast and independent of line impedance.
*   It requires careful supervision to prevent tripping during power swings.
*   Digital implementation involves sophisticated signal processing for accurate phase angle calculation.
*   Best suited for short to medium length transmission lines.

---

### 11. Practice Questions and Exercises

**Question 1:** What is the fundamental principle behind phase comparison line protection?
**Answer:** The fundamental principle is to compare the phase angle of current at one end of the transmission line with the phase angle of current at the other end. During an internal fault, these phase angles will differ significantly (approximately 180 degrees), while during an external fault, they will be similar.

**Question 2:** Discuss the role of a communication channel in phase comparison protection.
**Answer:** A communication channel is essential for phase comparison schemes. It is used to transmit the current waveform or phase information from one terminal of the transmission line to the other. The reliability and speed of this channel are critical for the scheme's effectiveness.

**Question 3:** How does a digital relay implement phase comparison?
**Answer:** A digital relay samples the current, digitally filters it to extract the fundamental frequency component, calculates the phase angle of this component using algorithms like DFT or FFT, and then compares this phase angle with the phase angle of the current received from the remote end. Magnitude supervision is also often employed.

**Question 4:** What are the main advantages and disadvantages of phase comparison line protection compared to distance protection for short transmission lines?
**Answer:**
*   **Advantages (vs. Distance):** Faster operation, independent of line impedance and fault resistance, simpler for short lines.
*   **Disadvantages (vs. Distance):** Reliant on communication, higher communication costs, potential security issues due to communication failures or power swings if not supervised, less versatile for varying line lengths without adaptation.

**Question 5 (Conceptual):** Consider a transmission line where a fault occurs 80% of the way from terminal A to terminal B.
    a) Describe the phase relationship between the current at terminal A and the current at terminal B.
    b) How would a phase comparison relay at terminal A interpret this situation?
**Answer:**
    a) For a fault within the line, the current will flow from both terminals towards the fault. If the fault is closer to B, the current at A will flow into the line, and the current at B will also flow into the line. However, due to the fault impedance and the line characteristics, there will be a phase shift. For a fault, the currents at the ends will be largely out of phase ($180^\circ$). Specifically, the current $I_A$ flowing *into* the line at A and the current $I_B$ flowing *into* the line at B will be approximately $180^\circ$ apart in phase.
    b) A phase comparison relay at terminal A would receive the phase information of the current at terminal B. It would compare the phase of its local current ($I_A$) with the received remote current (effectively $I_B$). Since it's an internal fault, these phases would be approximately $180^\circ$ apart. If the magnitude is also within the acceptable range, the relay would operate to trip the circuit breaker.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 12. Further Reading (as per textbooks provided)

*   **Johns, A. T., & Salman, S. K. (1995). *Digital Protection of Power System*. Peter Peregrinus Ltd, UK.** - This book is a primary source for understanding the implementation of digital protection schemes, including carrier-aided and pilot wire schemes which share communication requirements with phase comparison.
*   **Phadke, A. G., & Thorpe, J. S. (1988). *Computer Relaying for Power Systems*. Research study press Ltd, John Wiley & Sons, Taunton, UK.** - This foundational text will provide insights into the evolution of relaying and the digital techniques used.
*   **Badri Ram & Viswakarma, D. N. (2011). *Power System Protection and Switchgear*. Tata McGraw Hill Education.** - This comprehensive book will offer a broad perspective on protection schemes, including their place within overall power system protection.
*   **Rebizant, W. (2008). *Digital Signal Processing in Power System Protection and Control*. Springer Publication.** - Essential for detailed understanding of the signal processing algorithms used in modern digital relays for phase comparison.

---