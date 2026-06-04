---
title: "Receiver diversity – selection combining and maximal ratio combining."
subject: "ADVANCED COMMUNICATION THEORY"
module: "Module 4: Path loss and shadowing"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fed40"
status: "completed"
scrapedAt: "2026-05-23T17:59:18.606Z"
---
# ADVANCED COMMUNICATION THEORY: Module 4 - Path Loss and Shadowing

## Topic: Receiver Diversity - Selection Combining and Maximal Ratio Combining

---

### **1. Introduction to Receiver Diversity**

**1.1 The Problem: Fading**

*   **Fading:** The fluctuation of the received signal amplitude over time due to multipath propagation and time-varying channel characteristics. This can lead to signal degradation and errors.
*   **Impact of Fading:**
    *   **Rayleigh Fading:** When there are many multipath components with no dominant signal, the envelope of the received signal follows a Rayleigh distribution. This typically occurs in urban environments.
    *   **Rician Fading:** When there is a dominant line-of-sight (LOS) component along with multiple scattered components. The envelope follows a Rician distribution. This occurs in less obstructed environments.
    *   **Shadowing:** Large-scale variations in received signal strength due to obstacles like buildings, hills, etc., between the transmitter and receiver. This is often modeled as log-normal fading.
*   **Path Loss:** The reduction in signal strength as it propagates from the transmitter to the receiver. This is a deterministic component related to distance, and is often modeled as $PL(d) \propto d^n$, where $n$ is the path loss exponent.

**1.2 The Solution: Diversity**

*   **Diversity:** A technique used to mitigate the effects of fading by providing multiple independent copies of the signal at the receiver. The idea is that if one path is experiencing deep fade, another independent path might be strong.
*   **Key Principle:** The probability of all diversity branches being in a deep fade simultaneously is much lower than the probability of a single branch being in a deep fade.
*   **Types of Diversity:**
    *   **Space Diversity:** Using multiple antennas at the receiver (or transmitter). This is the most common form.
    *   **Frequency Diversity:** Transmitting the same information on closely spaced frequencies.
    *   **Time Diversity:** Transmitting the same information at different time instances.
    *   **Polarization Diversity:** Using antennas with different polarizations.

---

### **2. Receiver Diversity Techniques**

This section focuses on two prominent receiver diversity techniques: Selection Combining (SC) and Maximal Ratio Combining (MRC). Both are employed at the receiver to combine multiple received signal copies.

---

#### **2.1 Selection Combining (SC)**

**2.1.1 Concept:**

*   **Mechanism:** The receiver monitors the signal quality (e.g., Signal-to-Noise Ratio - SNR) on each of its diversity branches. It then **selects** the branch with the **best** (highest) SNR and uses only that branch for demodulation. The other branches are ignored.
*   **Simplicity:** SC is the simplest diversity combining technique to implement, requiring minimal hardware and processing.

**2.1.2 Performance:**

*   **Advantage:** Significantly improves performance compared to no diversity, especially in the presence of deep fades.
*   **Disadvantage:** Wasteful of resources, as only one branch is used at any given time, while the others are idle. The performance improvement is less than that of more complex combining techniques.
*   **Mathematical Basis (High-Level):** The performance of SC is determined by the probability that all branches are below a certain SNR threshold. This probability is significantly reduced by using multiple branches.

**2.1.3 Learning Outcome Alignment:**

*   **CO6:** Identifies the advantage of SC in improving receiver performance by mitigating fading. (Knowledge Level: K3)

**2.1.4 Key Concepts/Definitions:**

*   **Diversity Gain:** The improvement in performance (e.g., reduction in error rate) achieved by using diversity.
*   **Branch SNR:** The signal-to-noise ratio on a single diversity branch.
*   **Selection Criterion:** The metric used to choose the best branch (typically SNR).

**2.1.5 Example:**

Imagine a receiver with two antennas. At any given moment, antenna 1 might have a strong signal (low fade), while antenna 2 is in a deep fade. SC will detect this and select the signal from antenna 1. A moment later, if antenna 1 experiences a deep fade and antenna 2 has a good signal, SC will switch to antenna 2.

**2.1.6 Important Points to Remember:**

*   SC is simple but not optimal.
*   It requires a mechanism to estimate the SNR on each branch.

---

#### **2.2 Maximal Ratio Combining (MRC)**

**2.2.1 Concept:**

*   **Mechanism:** MRC **combines** the signals from all diversity branches. Crucially, it **weights** each branch's signal by its SNR before combining. The branch with the highest SNR is given the largest weight, and the branch with the lowest SNR is given the smallest weight.
*   **Optimal Combining:** MRC is considered the optimal combining technique in terms of maximizing the output SNR.
*   **Principle:** By optimally weighting and combining, MRC maximizes the signal power relative to the noise power in the combined signal.

**2.2.2 Performance:**

*   **Advantage:** Provides the maximum possible diversity gain. It exploits the information from all branches simultaneously.
*   **Disadvantage:** More complex to implement than SC, requiring adjustable gain amplifiers for each branch and a way to estimate the SNR and phase for each branch.
*   **Mathematical Basis (High-Level):** The output SNR of MRC is the sum of the SNRs of the individual branches. This is a significant improvement over SC, where the output SNR is simply the SNR of the best branch.

**2.2.3 Learning Outcome Alignment:**

*   **CO6:** Identifies the advantages of MRC in improving receiver performance by mitigating fading, achieving maximum diversity gain. (Knowledge Level: K3)

**2.2.4 Key Concepts/Definitions:**

*   **Combining:** Summing the signals from multiple branches.
*   **Weighting:** Multiplying each branch's signal by a factor.
*   **Optimal Weighting:** In MRC, the weight for each branch is proportional to the signal amplitude and inversely proportional to the noise variance (or directly proportional to the branch SNR).
*   **Output SNR:** The signal-to-noise ratio of the combined signal.

**2.2.5 Example:**

Consider a receiver with two antennas.
*   Branch 1 has a signal of $S_1$ and noise $N_1$. SNR$_1 = S_1/N_1$.
*   Branch 2 has a signal of $S_2$ and noise $N_2$. SNR$_2 = S_2/N_2$.

MRC combines these by:
Received Signal = $w_1 \cdot S_1 + w_2 \cdot S_2$
where $w_1 = \frac{S_1^*}{N_1}$ and $w_2 = \frac{S_2^*}{N_2}$ (where $S^*$ denotes the complex conjugate).

The output SNR is proportional to $\text{SNR}_1 + \text{SNR}_2$. This is a direct sum, unlike SC where the output SNR would just be $\max(\text{SNR}_1, \text{SNR}_2)$.

**2.2.6 Important Points to Remember:**

*   MRC offers the best performance among linear combining techniques.
*   Requires accurate estimation of channel gains (amplitude and phase) for each branch.
*   The output SNR is the sum of individual branch SNRs.

---

### **3. Comparison of SC and MRC**

| Feature          | Selection Combining (SC)                                    | Maximal Ratio Combining (MRC)                               |
| :--------------- | :---------------------------------------------------------- | :---------------------------------------------------------- |
| **Mechanism**    | Selects the best branch.                                    | Combines all branches with optimal weighting.               |
| **Complexity**   | Low (simple switches, SNR estimation).                      | High (adjustable gains, phase shifters, SNR estimation).    |
| **Performance**  | Good improvement over no diversity.                         | Optimal; best possible diversity gain.                      |
| **Resource Use** | Uses only one branch at a time (inefficient).             | Uses all branches simultaneously (efficient use of diversity). |
| **Output SNR**   | SNR of the selected branch.                                 | Sum of individual branch SNRs.                              |
| **Applications** | Simpler systems, where complexity is a major concern.       | High-performance systems, critical applications.            |

---

### **4. Mathematical Foundations (Optional - for deeper understanding)**

This section draws heavily on concepts from **Goldsmith**, **Rappaport**, and **Haykin**.

**4.1 System Model:**

Consider a system with $L$ diversity branches. Each branch $i$ receives a signal $y_i$ which can be modeled as:
$y_i = h_i s + n_i$
where:
*   $s$ is the transmitted signal.
*   $h_i$ is the complex channel gain for branch $i$ (representing multipath and fading).
*   $n_i$ is the additive white Gaussian noise (AWGN) on branch $i$, with power $N_0$.

The signal-to-noise ratio (SNR) on branch $i$ is $\gamma_i = \frac{E_s |h_i|^2}{N_0}$, where $E_s$ is the signal energy.

**4.2 Selection Combining (SC) Output SNR:**

For SC, the output SNR is simply the SNR of the selected branch:
$\gamma_{\text{SC}} = \max(\gamma_1, \gamma_2, \dots, \gamma_L)$

The probability of error for SC is related to the probability that all branches are below a certain SNR:
$P_e(\text{SC}) = P(\gamma_1 < \theta, \dots, \gamma_L < \theta) = \prod_{i=1}^L P(\gamma_i < \theta)$
Assuming independent and identically distributed (i.i.d.) Rayleigh fading channels, $P(\gamma_i < \theta) = 1 - e^{-\theta/\bar{\gamma}}$, where $\bar{\gamma}$ is the average SNR per branch.
So, $P_e(\text{SC}) = (1 - e^{-\theta/\bar{\gamma}})^L$.
This shows a significant reduction in the probability of error compared to a single branch ($L=1$).

**4.3 Maximal Ratio Combining (MRC) Output SNR:**

For MRC, the receiver combines the signals as follows:
$y_{\text{MRC}} = \sum_{i=1}^L w_i^* y_i$
where $w_i$ is the optimal weight for branch $i$. The optimal weights are $w_i = h_i / N_0$.

Substituting this back:
$y_{\text{MRC}} = \sum_{i=1}^L \frac{h_i^*}{N_0} (h_i s + n_i) = \frac{s}{N_0} \sum_{i=1}^L |h_i|^2 + \sum_{i=1}^L \frac{h_i^*}{N_0} n_i$

The output SNR for MRC is:
$\gamma_{\text{MRC}} = \sum_{i=1}^L \gamma_i$

This is the sum of the individual branch SNRs. The probability of error for MRC in Rayleigh fading is given by:
$P_e(\text{MRC}) = \left(\frac{1}{1 + \bar{\gamma}}\right)^L \sum_{k=0}^{L-1} \binom{L+k-1}{k} \left(\frac{1}{1 + \bar{\gamma}}\right)^k$
This formula demonstrates a much faster decrease in error probability with increasing $L$ compared to SC.

**4.4 Learning Outcome Alignment:**

*   **CO5:** Analyzes the performance of fading channels by understanding how diversity techniques like SC and MRC improve the signal quality against fading. (Knowledge Level: K2)
*   **CO6:** Explains the advantages of MRC for improving wireless receiver performance, particularly its optimality in maximizing SNR and its probability of error performance. (Knowledge Level: K3)

**4.5 Textbook References:**

*   **Goldsmith (Chapter 6):** Discusses diversity techniques in detail, including the performance analysis of SC and MRC under various fading models. It covers the mathematical derivations for output SNRs and error probabilities.
*   **Rappaport (Chapter 5 & 7):** Covers fading phenomena and mitigation techniques. Chapter 5 might discuss diversity in general, while Chapter 7 might delve into receiver design aspects and performance gains from diversity.
*   **Haykin (Chapter 3 & 4):** Likely to cover fundamentals of digital communication in fading channels and techniques for combating fading, including diversity.

---

### **5. Practice Questions and Answers**

**Question 1:**
Which receiver diversity technique is the simplest to implement?
a) Maximal Ratio Combining (MRC)
b) Selection Combining (SC)
c) Equal Gain Combining (EGC)
d) None of the above

**Answer 1:**
b) Selection Combining (SC)

**Question 2:**
What is the primary advantage of Maximal Ratio Combining (MRC) over Selection Combining (SC)?
a) Lower implementation complexity.
b) Higher achievable diversity gain.
c) Less sensitive to channel estimation errors.
d) Requires fewer antennas.

**Answer 2:**
b) Higher achievable diversity gain.

**Question 3:**
In Selection Combining (SC), how is the output signal determined?
a) By summing all received signals with equal weights.
b) By summing all received signals with weights proportional to their SNR.
c) By selecting the branch with the highest Signal-to-Noise Ratio (SNR).
d) By selecting the branch with the lowest Signal-to-Noise Ratio (SNR).

**Answer 3:**
c) By selecting the branch with the highest Signal-to-Noise Ratio (SNR).

**Question 4:**
If a wireless system employs 4-branch Maximal Ratio Combining (MRC) in Rayleigh fading, and the average SNR per branch is $\bar{\gamma}$, what is the approximate output SNR?
a) $\bar{\gamma}$
b) $4\bar{\gamma}$
c) $\max(\gamma_1, \gamma_2, \gamma_3, \gamma_4)$
d) $16\bar{\gamma}$

**Answer 4:**
b) $4\bar{\gamma}$ (Since $\gamma_{\text{MRC}} = \sum \gamma_i$ and the average of each $\gamma_i$ is $\bar{\gamma}$, the average of the sum is the sum of the averages).

**Question 5 (Conceptual):**
Explain why diversity techniques are effective in mitigating the effects of fading in wireless communication.

**Answer 5:**
Fading causes temporary deep signal drops. Diversity techniques provide multiple independent paths for the signal. The probability of all these independent paths experiencing a deep fade simultaneously is significantly lower than a single path experiencing a fade. By combining or selecting the best of these paths, the receiver can achieve a more robust and reliable communication link, reducing errors caused by fading.

---

### **6. Important Points to Remember**

*   **Diversity's Goal:** To combat fading by providing independent signal replicas.
*   **SC:** Simple, selects the best branch, but inefficient.
*   **MRC:** Optimal, combines all branches with optimal weighting, maximizes output SNR, but complex.
*   **Performance:** MRC offers superior performance (higher diversity gain, lower error probability) compared to SC.
*   **Implementation:** SC requires SNR estimation and switching. MRC requires SNR and phase estimation for weighting and combining.
*   **Underlying Principle:** The independence of diversity branches is crucial for the effectiveness of diversity techniques.

---

### **7. Conclusion**

Receiver diversity is a fundamental technique for improving the reliability of wireless communication systems operating in fading environments. Selection Combining (SC) offers a simple yet effective way to gain diversity benefits, while Maximal Ratio Combining (MRC) provides the optimal solution by leveraging all available diversity branches with precise weighting. Understanding the trade-offs in complexity and performance between these techniques is crucial for designing robust wireless receivers.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
