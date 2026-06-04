---
title: "Realize the hamming ( wH [n]) and kaiser ( wK[n]) windows."
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 7: FIR low pass filter"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec52"
status: "completed"
scrapedAt: "2026-05-23T17:56:13.418Z"
---
# DIGITAL SIGNAL PROCESSING LAB: Module 7 - FIR Low Pass Filter

## Topic: Realizing Hamming (wH[n]) and Kaiser (wK[n]) Windows

---

### 1. Introduction to FIR Filter Design and Windowing

**Concept:** Finite Impulse Response (FIR) filters are a fundamental class of digital filters. Designing FIR filters often involves specifying desired frequency response characteristics (e.g., cutoff frequency, stopband attenuation). A common approach is the **window method**, where an ideal filter's infinite impulse response is multiplied by a finite-length window function. This truncation process introduces ripples in the frequency response, which can be controlled by the choice of the window function.

**Key Concept:** The window method for FIR filter design involves:
1.  **Approximating the ideal filter:** The desired frequency response is defined.
2.  **Truncating the impulse response:** The ideal filter's impulse response is theoretically infinitely long. It's truncated to a finite length, say $N$.
3.  **Applying a window function:** The truncated impulse response is multiplied by a window function $w[n]$ of length $N$. This aims to smooth the transition from the passband to the stopband and reduce the Gibbs phenomenon (oscillations) caused by truncation.

**Relation to Course Outcomes:**
*   **CO5 (Design and Implement FIR low-pass filters):** This topic is directly related to the practical implementation of FIR low-pass filters using the window method, which is a core skill in filter design. (Knowledge Level: K3)

**Textbook References:**
*   **Proakis & Ingle, Chapter 6 (FIR Filter Design):** Discusses the window method as a primary technique for FIR filter design and introduces various window functions.
*   **Downey, Chapter 6 (FIR Filters):** Explains the concept of windows for FIR filter design and their impact on the frequency response.

---

### 2. Understanding Window Functions

**Concept:** Window functions are time-limited sequences that taper to zero at their edges. They are used to weight the impulse response, effectively smoothing out the discontinuities introduced by truncation. Different window functions offer trade-offs between the main lobe width (affecting transition bandwidth) and the side lobe levels (affecting stopband attenuation).

**Key Concepts:**
*   **Gibbs Phenomenon:** The oscillations that occur in the frequency response near discontinuities (like the cutoff frequency) when an ideal filter's impulse response is truncated. Window functions help to mitigate this.
*   **Main Lobe Width:** The width of the central peak in the window's frequency response. A wider main lobe leads to a wider transition band in the filter's frequency response.
*   **Side Lobe Levels:** The amplitude of the smaller peaks in the window's frequency response that occur away from the main lobe. Lower side lobes generally correspond to better stopband attenuation.

**Properties of "Good" Window Functions:**
*   Narrow main lobe for a sharp transition band.
*   Low side lobe levels for high stopband attenuation.
*   Achieving both simultaneously is often a compromise.

**Textbook References:**
*   **Proakis & Ingle, Chapter 6.3 (Properties of Window Functions):** Provides a detailed comparison of different window functions, including their frequency domain characteristics and the trade-offs involved.
*   **Downey, Chapter 6.4 (Window Functions):** Discusses the effect of window functions on the frequency response and the trade-off between transition band width and stopband attenuation.

---

### 3. Realizing the Hamming Window ($w_H[n]$)

**Concept:** The Hamming window is a widely used window function known for providing a good balance between a relatively narrow main lobe and reasonably low side lobes. It's often preferred over the Hanning window due to its significantly lower first side lobe.

**Mathematical Definition:**
For a window of length $N$, the Hamming window is defined as:
$$w_H[n] = \begin{cases} 0.54 - 0.46 \cos\left(\frac{2\pi n}{N-1}\right) & \text{for } 0 \le n \le N-1 \\ 0 & \text{otherwise} \end{cases}$$

**Key Features:**
*   **Symmetric:** The window is symmetric around its center.
*   **General Form:** It's a weighted sum of a DC component (0.54) and a cosine term.
*   **Side Lobe Suppression:** Offers about -41 dB of side lobe suppression.
*   **Transition Band:** Relatively narrow.

**Example Implementation (Python-like Pseudocode):**

```python
import numpy as np

def hamming_window(N):
  """Generates a Hamming window of length N."""
  if N <= 1:
    return np.ones(N) # Or handle as an error/special case
  n = np.arange(N)
  w = 0.54 - 0.46 * np.cos(2 * np.pi * n / (N - 1))
  return w

# Example Usage:
N = 50  # Desired window length
hamming_w = hamming_window(N)

# To visualize (requires matplotlib):
# import matplotlib.pyplot as plt
# plt.plot(hamming_w)
# plt.title('Hamming Window')
# plt.xlabel('Sample Index (n)')
# plt.ylabel('Amplitude')
# plt.grid(True)
# plt.show()

# To see its frequency response:
# freq_response = np.fft.fft(hamming_w)
# freq_response_db = 20 * np.log10(np.abs(freq_response))
# plt.plot(np.fft.fftshift(freq_response_db))
# plt.title('Frequency Response of Hamming Window')
# plt.xlabel('Frequency (Normalized)')
# plt.ylabel('Magnitude (dB)')
# plt.grid(True)
# plt.show()
```

**Relation to Course Outcomes:**
*   **CO1 (Generate basic signal waveforms):** Generating the window function itself can be considered generating a specific type of signal waveform. (Knowledge Level: K2)
*   **CO5 (Design and Implement FIR low-pass filters):** This is a direct application of the Hamming window for constructing FIR low-pass filters. (Knowledge Level: K3)

**Textbook References:**
*   **Proakis & Ingle, Section 6.3.2 (Hamming Window):** Provides the mathematical definition and discusses its characteristics.
*   **Downey, Section 6.4.1 (Hamming Window):** Offers a practical perspective and shows its effect on filter design.

---

### 4. Realizing the Kaiser Window ($w_K[n]$)

**Concept:** The Kaiser window is a more general and flexible window function. It is characterized by a parameter $\beta$ (beta), which allows for a tunable trade-off between the main lobe width and the side lobe level. This makes it very useful when specific attenuation requirements need to be met.

**Mathematical Definition:**
The Kaiser window is defined as:
$$w_K[n] = \begin{cases} \frac{I_0(\beta\sqrt{1 - (\frac{2n}{N-1}-1)^2})}{I_0(\beta)} & \text{for } 0 \le n \le N-1 \\ 0 & \text{otherwise} \end{cases}$$
where:
*   $N$ is the window length.
*   $I_0(x)$ is the modified Bessel function of the first kind of order zero.
*   $\beta$ is a design parameter.

**Key Features:**
*   **Tunable Trade-off:** The parameter $\beta$ controls the window's properties:
    *   **Small $\beta$:** Resembles a rectangular window with a narrow main lobe but high side lobes.
    *   **Large $\beta$:** Resembles a flat-top window with a wide main lobe but very low side lobes.
*   **Optimal Side Lobe Decay:** The Kaiser window is derived from the concept of an optimal window in the sense of maximizing the main lobe energy for a given side lobe attenuation.
*   **Approximation for $\beta$:** For practical implementation, the required $\beta$ can be approximated based on desired stopband attenuation ($A_s$) and transition bandwidth. A common approximation is:
    $$ \beta \approx \begin{cases} 0 & \text{if } A_s < 21 \\ 0.5842(A_s - 21)^{0.4} + 0.07886(A_s - 21) & \text{if } 21 \le A_s \le 50 \\ 0.1102(A_s - 8.7) & \text{if } A_s > 50 \end{cases} $$
    And the window length $N$ can be approximated by:
    $$ N \approx \frac{A_s + 8}{2.285 \Delta \omega} + 1 $$
    where $\Delta \omega$ is the desired transition bandwidth.

**Example Implementation (Python-like Pseudocode):**

```python
import numpy as np
from scipy.special import i0 # Modified Bessel function of the first kind of order zero

def kaiser_window(N, beta):
  """Generates a Kaiser window of length N with parameter beta."""
  if N <= 1:
    return np.ones(N) # Or handle as an error/special case
  n = np.arange(N)
  # Calculate the argument for the Bessel function
  arg = beta * np.sqrt(1 - ((2 * n / (N - 1)) - 1)**2)
  
  # Calculate the Bessel function values
  bessel_values = i0(arg)
  
  # Normalize by the central Bessel function value
  w = bessel_values / i0(beta)
  return w

# Example Usage:
N = 50
beta_value = 4.5 # Example beta for moderate attenuation

kaiser_w = kaiser_window(N, beta_value)

# To visualize (requires matplotlib):
# import matplotlib.pyplot as plt
# plt.plot(kaiser_w)
# plt.title(f'Kaiser Window (N={N}, beta={beta_value})')
# plt.xlabel('Sample Index (n)')
# plt.ylabel('Amplitude')
# plt.grid(True)
# plt.show()

# To see its frequency response:
# freq_response = np.fft.fft(kaiser_w)
# freq_response_db = 20 * np.log10(np.abs(freq_response))
# plt.plot(np.fft.fftshift(freq_response_db))
# plt.title(f'Frequency Response of Kaiser Window (N={N}, beta={beta_value})')
# plt.xlabel('Frequency (Normalized)')
# plt.ylabel('Magnitude (dB)')
# plt.grid(True)
# plt.show()
```

**Relation to Course Outcomes:**
*   **CO1 (Generate basic signal waveforms):** Generating the Kaiser window involves calculating complex mathematical functions. (Knowledge Level: K2)
*   **CO5 (Design and Implement FIR low-pass filters):** The Kaiser window's tunability makes it a powerful tool for designing FIR low-pass filters with specific performance criteria. (Knowledge Level: K3)

**Textbook References:**
*   **Proakis & Ingle, Section 6.3.3 (Kaiser Window):** This section is crucial for understanding the mathematical formulation, the role of $\beta$, and the design equations for the Kaiser window.
*   **Oppenheim & Schafer, Chapter 7.4 (Window Design Techniques):** Discusses the Kaiser window as an optimal window in a minimax sense and provides its derivation.

---

### 5. Comparison of Hamming and Kaiser Windows

**Concept:** Both Hamming and Kaiser windows are popular choices for FIR filter design, each offering different trade-offs. The Hamming window is simpler to implement and provides good general-purpose performance. The Kaiser window, with its tunable $\beta$ parameter, offers greater flexibility to meet specific design requirements for stopband attenuation and transition bandwidth.

**Comparison Table:**

| Feature          | Hamming Window                                  | Kaiser Window                                                 |
| :--------------- | :---------------------------------------------- | :------------------------------------------------------------ |
| **Definition**   | Fixed formula: $0.54 - 0.46 \cos(\dots)$       | Tunable formula based on $\beta$ and Bessel function          |
| **Flexibility**  | Low (fixed trade-off)                           | High (tunable $\beta$ for desired $A_s$, $\Delta \omega$)    |
| **Main Lobe**    | Relatively narrow                               | Wider as $\beta$ increases                                    |
| **Side Lobes**   | ~ -41 dB suppression (fixed)                    | Can achieve much lower side lobes as $\beta$ increases         |
| **Transition Band** | Relatively sharp                                | Wider as $\beta$ increases                                    |
| **Complexity**   | Simpler to compute                              | Requires Bessel function, more computationally intensive      |
| **Use Case**     | General-purpose FIR filters                     | FIR filters requiring specific stopband attenuation/transition |

**Example Scenario:**
Suppose you need an FIR low-pass filter with a transition band that is not too wide and a stopband attenuation of at least 50 dB.
*   The **Hamming window** would provide about -41 dB attenuation. If this is insufficient, you might need a longer filter ($N$) or a different window.
*   The **Kaiser window** would allow you to directly specify 50 dB attenuation. Using the approximation formulas, you could calculate the appropriate $\beta$ and $N$ to meet this requirement precisely.

**Relation to Course Outcomes:**
*   **CO5 (Design and Implement FIR low-pass filters):** Understanding the comparison is crucial for making informed decisions when designing FIR filters. (Knowledge Level: K3)

**Textbook References:**
*   **Proakis & Ingle, Chapter 6.3 (Properties of Window Functions):** Directly compares various windows, including Hamming and Kaiser, in terms of their frequency domain characteristics.
*   **Downey, Chapter 6.4 (Window Functions):** Provides a conceptual comparison and emphasizes the tunability of the Kaiser window.

---

### 6. Practical Considerations and Implementation

**Concept:** When implementing these windows in the lab, it's important to consider the length of the window ($N$) and the choice of parameters ($\beta$ for Kaiser). These choices directly impact the filter's performance.

**Key Considerations:**
*   **Window Length ($N$):**
    *   A longer window generally leads to a narrower transition band but increases the filter's order (computational complexity) and delay.
    *   The required length is often determined by the desired transition bandwidth $\Delta \omega$.
*   **Parameter Selection ($\beta$ for Kaiser):**
    *   The $\beta$ parameter is directly related to the required stopband attenuation ($A_s$).
    *   Using the approximation formulas (as shown in Section 4) is common for initial design.
*   **Filter Design Process:**
    1.  Determine the desired specifications (cutoff frequency $f_c$, sampling frequency $f_s$, stopband attenuation $A_s$, transition bandwidth $\Delta \omega$).
    2.  Choose a window function (Hamming for general use, Kaiser for specific attenuation).
    3.  If using Kaiser, calculate $\beta$ and $N$ based on $A_s$ and $\Delta \omega$.
    4.  If using Hamming, determine $N$ based on $\Delta \omega$.
    5.  Calculate the ideal low-pass filter impulse response $h_d[n]$.
    6.  Multiply $h_d[n]$ by the chosen window function $w[n]$ to get the FIR filter coefficients $h[n] = h_d[n] w[n]$.

**Relation to Course Outcomes:**
*   **CO3 (Familiarize with DSP hardware and interface with Computer):** Understanding these practical aspects is essential for lab implementation and debugging on DSP hardware. (Knowledge Level: K2)
*   **CO4 (Implement LTI systems):** FIR filters are a type of LTI system, and their realization involves understanding the coefficients derived from windowing. (Knowledge Level: K3)
*   **CO5 (Design and Implement FIR low-pass filters):** This section directly addresses the practical steps in designing and implementing FIR low-pass filters. (Knowledge Level: K3)

**Textbook References:**
*   **Proakis & Ingle, Chapter 6.4 (Design of FIR Filters using Windows):** Details the step-by-step procedure for designing FIR filters using the window method, including determining $N$ and selecting windows.
*   **Downey, Chapter 6.5 (Designing FIR Filters):** Walks through the process of designing an FIR filter, highlighting the role of the window function.

---

### 7. Practice Questions

**Q1. Hamming Window Amplitude:**
What is the primary advantage of the Hamming window over the Hanning window in terms of its frequency response characteristics?
**Answer:** The Hamming window offers significantly lower side lobe levels (specifically, the first side lobe is lower) compared to the Hanning window, leading to better stopband attenuation for the same window length.

**Q2. Kaiser Window Parameter $\beta$:**
The parameter $\beta$ in the Kaiser window is used to control the trade-off between which two frequency domain properties?
**Answer:** $\beta$ controls the trade-off between the main lobe width (affecting transition bandwidth) and the side lobe levels (affecting stopband attenuation).

**Q3. Choosing Between Hamming and Kaiser:**
You are designing an FIR low-pass filter and have the following requirements:
*   Sampling frequency ($f_s$): 10 kHz
*   Cutoff frequency ($f_c$): 1 kHz
*   Transition bandwidth ($\Delta f$): 200 Hz
*   Minimum stopband attenuation ($A_s$): 45 dB

Would you likely choose a Hamming or Kaiser window? Justify your answer.
**Answer:** You would likely choose a **Kaiser window**. The Hamming window typically provides about 41 dB of side lobe suppression. Since the requirement is for at least 45 dB stopband attenuation, the Hamming window might not be sufficient on its own without increasing the filter length significantly. The Kaiser window's tunable $\beta$ parameter allows you to explicitly design for the required 45 dB attenuation.

**Q4. Window Function Implementation:**
Write a short Python function (or pseudocode) to generate a Kaiser window given the window length $N$ and the parameter $\beta$. You can assume access to the modified Bessel function $I_0(x)$.
**Answer:** (Refer to the example implementation in Section 4).

```python
# Assuming scipy.special.i0 is available
import numpy as np
from scipy.special import i0

def kaiser_window(N, beta):
  if N <= 1:
    return np.ones(N)
  n = np.arange(N)
  arg = beta * np.sqrt(1 - ((2 * n / (N - 1)) - 1)**2)
  w = i0(arg) / i0(beta)
  return w
```

---

### 8. Important Points to Remember

*   **Windowing is essential:** It's a method to approximate ideal filters with finite impulse responses, mitigating the Gibbs phenomenon.
*   **Trade-offs exist:** No window function is perfect. There's always a compromise between main lobe width and side lobe levels.
*   **Hamming:** Good general-purpose, simpler, fixed trade-off.
*   **Kaiser:** Highly flexible due to $\beta$, allowing specific attenuation requirements to be met.
*   **Parameter Tuning is Key:** For Kaiser, $\beta$ is crucial. For both, the window length $N$ impacts transition bandwidth.
*   **Practical Design:** Always refer to design tables or approximation formulas (like those for $\beta$ and $N$ in the Kaiser section) when implementing filters based on specific performance criteria.

---

This concludes the study notes for realizing Hamming and Kaiser windows. Remember to practice implementing these windows and observing their frequency responses in your lab sessions.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
