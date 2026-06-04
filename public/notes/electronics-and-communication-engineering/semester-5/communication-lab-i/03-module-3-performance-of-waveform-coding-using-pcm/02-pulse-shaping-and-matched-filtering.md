---
title: "Pulse Shaping and Matched Filtering"
subject: "COMMUNICATION LAB I"
module: "Module 3: Performance of Waveform Coding Using PCM"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fecae"
status: "completed"
scrapedAt: "2026-05-23T17:54:19.141Z"
---
# COMMUNICATION LAB I: Module 3: Performance of Waveform Coding Using PCM

## Topic: Pulse Shaping and Matched Filtering

---

### **1. Introduction to Pulse Shaping**

**1.1. What is Pulse Shaping?**

*   **Definition:** Pulse shaping is the process of modifying the shape of digital pulses before transmission to optimize their performance in a communication channel. The goal is to transmit pulses in a way that minimizes intersymbol interference (ISI) while maximizing signal-to-noise ratio (SNR) at the receiver.
*   **Why is it necessary?**
    *   **Bandwidth Limitation:** Without pulse shaping, digital pulses (like rectangular pulses) have infinite bandwidth, which is not practical for transmission over real-world channels that have limited bandwidth. This can lead to significant distortion and errors.
    *   **Minimizing Intersymbol Interference (ISI):** ISI occurs when the tail of one pulse spreads into the sampling interval of the next pulse, corrupting the received signal. Pulse shaping aims to create pulses that are zero at the sampling instants of adjacent pulses.
    *   **Maximizing SNR at the Receiver:** Pulse shaping, especially when paired with matched filtering at the receiver, helps to maximize the energy of the desired signal at the sampling instant relative to the noise.
    *   **Controlled Spectrum:** Pulse shaping allows for control over the frequency spectrum of the transmitted signal, which is crucial for efficient use of allocated bandwidth and avoiding out-of-band emissions.

**1.2. Ideal Pulse Shape for Zero ISI**

*   **Nyquist Criterion:** The Nyquist criterion for zero ISI states that a pulse shape $p(t)$ satisfies zero ISI if its Fourier transform $P(f)$ has the property:
    $$ \sum_{k=-\infty}^{\infty} P\left(f - \frac{k}{T}\right) = \text{constant for all } f $$
    where $T$ is the symbol duration. This condition ensures that at each sampling instant, the signal from all other pulses sums to zero.
*   **Raised Cosine Pulse:** The raised cosine pulse is a commonly used pulse shape that satisfies the Nyquist criterion. It is characterized by its roll-off factor ($\alpha$), which controls the transition from the main lobe to the side lobes.
    *   **Spectral Shape:**
        $$ P(f) = \begin{cases} T & |f| \le \frac{1-\alpha}{2T} \\ \frac{T}{2}\left[1 + \cos\left(\frac{\pi T}{\alpha}\left(|f| - \frac{1-\alpha}{2T}\right)\right)\right] & \frac{1-\alpha}{2T} < |f| \le \frac{1+\alpha}{2T} \\ 0 & |f| > \frac{1+\alpha}{2T} \end{cases} $$
    *   **Roll-off Factor ($\alpha$):**
        *   $\alpha = 0$: This corresponds to the ideal rectangular pulse (sinc function in time domain), which has infinite bandwidth.
        *   $\alpha = 1$: This results in the minimum bandwidth required for zero ISI, with the most gradual roll-off.
        *   Intermediate values of $\alpha$ provide a trade-off between bandwidth efficiency and ISI suppression.
    *   **Bandwidth:** The null-to-null bandwidth of a raised cosine pulse is $B_{null} = \frac{1}{T}$. The 3-dB bandwidth (or half-power bandwidth) is approximately $B_{3dB} \approx \frac{1+\alpha}{2T}$. The absolute bandwidth is $B_{abs} = \frac{1+\alpha}{2T}$.
*   **Example (Textbook: *Digital Modulations using Python*):** Chapter 3, "Pulse Shaping and Equalization," discusses the raised cosine filter and its parameters. The book likely provides Python code examples to generate and visualize these pulses.
*   **Example (Textbook: *Principles of Communication Systems Simulation with Wireless Applications*):** Chapter 7, "Digital Signal Transmission," will likely cover pulse shaping techniques like raised cosine and their impact on ISI.

**1.3. Trade-offs in Pulse Shaping**

*   **Bandwidth vs. ISI:**
    *   Narrower bandwidth (smaller $\alpha$) leads to less spectral occupancy but increases the potential for ISI due to channel filtering and inter-symbol interference.
    *   Wider bandwidth (larger $\alpha$) reduces ISI but requires more bandwidth, making the system less bandwidth-efficient.
*   **Implementation Complexity:** More complex pulse shapes can be harder to implement in hardware.

---

### **2. Matched Filtering**

**2.1. What is Matched Filtering?**

*   **Definition:** A matched filter is a linear filter designed to maximize the instantaneous output SNR at a specific sampling instant in the presence of additive white Gaussian noise (AWGN).
*   **Principle:** The matched filter is designed to respond strongly to the transmitted pulse shape and to suppress the noise that is uncorrelated with the signal.
*   **The Matched Filter Theorem:** For a received signal $s(t)$ corrupted by AWGN with power spectral density $N_0/2$, the filter that maximizes the output SNR at time $t_0$ is a filter whose impulse response $h_{mf}(t)$ is a "reversed and time-scaled" version of the received signal, i.e.,
    $$ h_{mf}(t) = s(T - t) $$
    where $T$ is the symbol duration.
*   **Output SNR:** The maximum SNR at the sampling instant $t_0$ is given by:
    $$ \left(\frac{S}{N}\right)_{out,max} = \frac{2E_b}{N_0} $$
    where $E_b$ is the energy per bit.
*   **Implementation:** In practice, the received signal is often a shaped pulse. If the transmitted pulse is $p(t)$, the matched filter's impulse response is $h_{mf}(t) = p(T-t)$. The output of the matched filter at time $t=T$ (the sampling instant) is the convolution of the received signal and the filter's impulse response, which effectively becomes the correlation of the received signal with the transmitted pulse shape.

**2.2. Matched Filtering for Pulse Amplitude Modulation (PAM)**

*   **Transmitted Signal:** In PAM, the transmitted signal can be represented as:
    $$ s(t) = \sum_{n=-\infty}^{\infty} a_n p(t - nT) $$
    where $a_n$ are the pulse amplitudes (symbols) and $p(t)$ is the pulse shape.
*   **Receiver Operation:**
    1.  **Matched Filter:** The received signal is passed through a matched filter with impulse response $h_{mf}(t) = p(T-t)$.
    2.  **Sampling:** The output of the matched filter is sampled at the symbol interval $t = kT$.
    3.  **Decision:** The sampled output is compared to a threshold to decide the transmitted symbol $a_k$.
*   **Output of Matched Filter at Sampling Instant:** At $t=kT$, the output of the matched filter $y(t)$ is:
    $$ y(kT) = \int_{-\infty}^{\infty} r(\tau) h_{mf}(kT - \tau) d\tau $$
    where $r(t)$ is the received signal (including noise). Assuming the transmitted pulse is $p(t)$, the output due to the $k$-th symbol is $a_k \int_{-\infty}^{\infty} p(\tau) p(kT + \tau - kT) d\tau = a_k \int_{-\infty}^{\infty} p(\tau) p(\tau) d\tau$.
    If $p(t)$ is normalized such that $\int_{-\infty}^{\infty} p^2(t) dt = E_p$ (energy of the pulse), then the output due to the $k$-th symbol is $a_k E_p$.
    When a pulse shaping filter that satisfies the Nyquist criterion (like raised cosine) is used, and the matched filter is matched to this pulse shape, the intersymbol interference is zero at the sampling instants.
*   **Example (Textbook: *Digital Modulations using Python*):** The book likely explains how to implement matched filters using convolution in Python, correlating the received signal with the transmitted pulse shape.
*   **Example (Textbook: *Principles of Communication Systems Simulation with Wireless Applications*):** Chapter 7 would detail the matched filter concept, its derivation, and its application in PAM systems to achieve optimal detection in AWGN.

**2.3. Importance of Matched Filtering**

*   **Optimal Detection in AWGN:** It provides the best possible performance in terms of minimizing the probability of error for a given SNR when the noise is AWGN.
*   **Maximizing SNR:** It effectively "collects" the energy of the signal pulse over its duration and minimizes the impact of noise.

---

### **3. Performance of Waveform Coding Using PCM with Pulse Shaping and Matched Filtering**

**3.1. Impact on Bit Error Rate (BER)**

*   **PCM Overview:** Pulse Code Modulation (PCM) is a method of digitally representing analog signals. It involves sampling, quantization, and encoding. The performance of PCM systems is often evaluated by the Signal-to-Quantization Noise Ratio (SQNR) and the Bit Error Rate (BER).
*   **Role of Pulse Shaping and Matched Filtering:**
    *   **Reducing ISI:** By using pulse shaping (e.g., raised cosine) that satisfies the Nyquist criterion, ISI can be eliminated or significantly reduced.
    *   **Maximizing SNR at the Detector:** Matched filtering at the receiver maximizes the SNR at the sampling instant, which directly leads to a lower probability of error (BER) for a given transmitted signal power.
*   **BER vs. SNR:** The BER of a digital communication system is a monotonically decreasing function of the SNR. By optimizing the system with pulse shaping and matched filtering, the effective SNR at the detector is improved, leading to a better BER.
*   **Mathematical Representation:**
    *   For a binary PAM system with coherent detection and matched filtering, the BER is typically given by:
        $$ P_e = Q\left(\sqrt{\frac{E_b}{N_0}}\right) $$
        where $Q(\cdot)$ is the Q-function.
    *   The term $E_b/N_0$ represents the energy per bit to noise power spectral density ratio, which is a key performance metric. Pulse shaping and matched filtering directly influence the achievable $E_b/N_0$ at the detector.

**3.2. System Design Considerations**

*   **Bandwidth Efficiency:** The choice of pulse shape (e.g., roll-off factor $\alpha$) impacts bandwidth efficiency. A higher $\alpha$ means more bandwidth but less ISI.
*   **Implementation Complexity:** The complexity of the pulse shaping filter and the matched filter needs to be considered for practical implementation.
*   **Channel Characteristics:** The actual channel response must be considered. If the channel itself introduces significant distortion or filtering, equalization techniques might be needed in addition to pulse shaping and matched filtering.

---

### **4. Relating to Course Outcomes**

*   **CO1: Setup simple prototype circuits for waveform coding and digital modulation techniques working in a team. (Knowledge Level: K3)**
    *   **Relevance:** Understanding pulse shaping and matched filtering is crucial for designing and implementing waveform coding (like PCM) and digital modulation schemes. This knowledge helps in selecting appropriate pulse shapes and designing the receiver's matched filter to achieve desired performance. For instance, understanding raised cosine pulses informs the design of analog or digital filters used in prototype circuits.
*   **CO2: Simulate the error performance of a digital communication system using standard binary and M-ary modulation schemes. (Knowledge Level: K4)**
    *   **Relevance:** Pulse shaping and matched filtering are fundamental to achieving good error performance (low BER). Simulations will demonstrate how different pulse shapes and the presence/absence of matched filtering affect the BER curves as a function of SNR. This directly addresses the simulation aspect of CO2.
*   **CO3: Develop hands-on skills to emulate a communication system with software-defined radio working in a team. (Knowledge Level: K5)**
    *   **Relevance:** Software-Defined Radio (SDR) implementations heavily rely on digital signal processing. Pulse shaping is implemented digitally in the transmitter's waveform generator, and matched filtering is a core component of the digital receiver. Understanding these concepts is essential for programming SDRs to emulate communication systems accurately and efficiently. The SDR itself provides a platform to test theoretical concepts of pulse shaping and matched filtering. (Reference: *The Hobbyist's Guide to the RTL-SDR*)

---

### **5. Important Points to Remember**

*   **Pulse shaping** is vital for transmitting digital signals over band-limited channels, minimizing ISI, and controlling the spectral characteristics of the transmitted signal.
*   The **raised cosine pulse** is a popular choice for its ability to achieve zero ISI with a controlled bandwidth. The **roll-off factor ($\alpha$)** is a key parameter.
*   **Matched filtering** is the optimal linear filter for maximizing SNR at the sampling instant in AWGN.
*   The combination of **pulse shaping and matched filtering** significantly improves the bit error rate performance of digital communication systems.
*   Understanding these concepts is fundamental for **simulating and implementing** digital communication systems, especially in the context of SDR.
*   The **Nyquist criterion** is the theoretical basis for achieving zero ISI.

---

### **6. Practice Questions and Answers**

**Question 1:** What is the primary purpose of pulse shaping in digital communication systems?
**Answer:** The primary purpose of pulse shaping is to limit the bandwidth of the transmitted signal, making it suitable for transmission over band-limited channels, and to minimize intersymbol interference (ISI).

**Question 2:** Explain the trade-off between the roll-off factor ($\alpha$) of a raised cosine pulse and its bandwidth.
**Answer:** A smaller roll-off factor ($\alpha$) leads to a narrower bandwidth but increases the potential for ISI. A larger roll-off factor ($\alpha$) results in a wider bandwidth but reduces the likelihood of ISI.

**Question 3:** How does a matched filter maximize the output SNR?
**Answer:** A matched filter maximizes the output SNR by being correlated with the transmitted signal's shape and uncorrelated with the noise. It effectively "collects" the energy of the signal over its duration while averaging out the random noise.

**Question 4:** If a system uses a pulse shape that satisfies the Nyquist criterion for zero ISI, and the receiver employs a matched filter, what is the expected impact on intersymbol interference (ISI) at the sampling instants?
**Answer:** The ISI at the sampling instants is expected to be zero or significantly minimized.

**Question 5:** For a binary PAM system in AWGN, what is the output SNR at the sampling instant provided by a matched filter in terms of transmitted energy per bit ($E_b$) and noise power spectral density ($N_0$)?
**Answer:** The maximum output SNR is given by $2E_b/N_0$.

**Question 6 (Simulation/Conceptual):** Imagine you are simulating a digital communication system using Python. You transmit binary data with rectangular pulses. What would you expect to happen to the BER if you switch to transmitting with raised cosine pulses (with a moderate $\alpha$) and implement matched filtering at the receiver, assuming the same transmitted power and bandwidth?
**Answer:** You would expect the BER to decrease significantly. This is because the raised cosine pulse shaping, combined with matched filtering, minimizes ISI and maximizes the SNR at the detector, leading to more reliable detection of the transmitted bits.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### **7. Textbook and Reference Integration**

*   **The Hobbyist's Guide to the RTL-SDR:** This book would provide practical context for how these concepts are implemented in real-world SDR systems. You would learn how to configure SDR hardware to receive and process signals that have undergone pulse shaping and require matched filtering for optimal demodulation.
*   **Principles of Communication Systems Simulation with Wireless Applications:** This textbook is a primary source for understanding the mathematical derivations and simulation methodologies behind pulse shaping and matched filtering. It will likely cover the spectral properties of raised cosine filters and the theoretical derivation of matched filter performance.
*   **Digital Modulations using Python:** This book offers a hands-on approach. It will likely provide Python code examples for generating raised cosine pulses, implementing matched filters using convolution or correlation, and simulating the BER performance of these systems, directly addressing CO2.
*   **Communication Systems (Haykin & Moher) / Modern Digital and Analog Communication Systems (Lathi & Ding) / Introduction to Analog and Digital Communication (Haykin & Moher):** These foundational textbooks provide the theoretical underpinnings of matched filtering, the Nyquist criterion, and the analysis of error performance in digital communication systems. They will offer detailed mathematical treatments of the concepts discussed here.
*   **Electronic communication systems (Kennedy):** This text would offer a broader perspective on communication systems, placing pulse shaping and matched filtering within the context of the overall communication chain, from modulation to demodulation and the role of various components.

---

This comprehensive study guide covers the key aspects of pulse shaping and matched filtering relevant to your COMMUNICATION LAB I course, Module 3. It aligns with your learning outcomes and references the provided textbooks. Remember to consult these resources for deeper understanding and practical examples.