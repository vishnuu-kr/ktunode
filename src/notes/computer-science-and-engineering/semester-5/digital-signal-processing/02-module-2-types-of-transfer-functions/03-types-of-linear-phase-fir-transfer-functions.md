---
title: "Types of linear phase FIR transfer functions"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 2: Types of transfer functions"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b7e2"
status: "completed"
scrapedAt: "2026-05-20T16:46:08.505Z"
---
# DIGITAL SIGNAL PROCESSING - Module 2: Types of Transfer Functions - Linear Phase FIR Transfer Functions

**Module:** 2: Types of Transfer Functions
**Topic:** Types of Linear Phase FIR Transfer Functions

**Learning Outcomes:**

*   Understand the concept of linear phase in FIR filters.
*   Identify and classify the four types of linear phase FIR filters.
*   Derive the conditions for linear phase in each type of FIR filter.
*   Understand the symmetry properties of the impulse response for each type.
*   Determine the frequency response characteristics for each type of linear phase FIR filter.
*   Recognize the implications of linear phase for signal processing applications.

## 1. Introduction to Linear Phase FIR Filters

*   **FIR Filters:** Finite Impulse Response (FIR) filters are a type of digital filter characterized by a finite-duration impulse response, meaning the output settles to zero in finite time when subjected to an impulse input.  They are always stable.

*   **Linear Phase:** A filter is said to have linear phase if its phase response is a linear function of frequency. This implies that all frequency components of the input signal are delayed by the same amount, preserving the shape of the signal.

*   **Importance of Linear Phase:**
    *   **Preservation of Signal Shape:** Critical in applications where signal distortion is unacceptable, such as audio processing, medical imaging, and data communication.
    *   **Constant Group Delay:** Linear phase implies constant group delay. Group delay is the negative of the derivative of the phase response with respect to frequency. Constant group delay ensures that all frequency components are delayed by the same amount of time.
    *   **Avoids Phase Distortion:** Non-linear phase can introduce phase distortion, which can alter the shape of a signal.

## 2. Conditions for Linear Phase in FIR Filters

*   **Impulse Response Symmetry:** FIR filters achieve linear phase by possessing a symmetric or anti-symmetric impulse response.
    *   **Symmetric:**  `h[n] = h[N-1-n]` for `n = 0, 1, ..., N-1`
    *   **Anti-Symmetric:** `h[n] = -h[N-1-n]` for `n = 0, 1, ..., N-1`

*   **Filter Length (N):** The length of the FIR filter (N) is crucial.  The symmetry requirement combined with even or odd lengths results in four distinct types of linear phase FIR filters.

## 3. The Four Types of Linear Phase FIR Filters

| Type | Filter Length (N) | Symmetry    | Condition on Impulse Response          | Frequency Response at ω=0 | Frequency Response at ω=π |
|------|--------------------|-------------|----------------------------------------|--------------------------|--------------------------|
| I    | Odd                | Symmetric   | `h[n] = h[N-1-n]`                   | Non-zero                | Non-zero                |
| II   | Even               | Symmetric   | `h[n] = h[N-1-n]`                   | Non-zero                | Zero                    |
| III  | Odd                | Anti-Symmetric| `h[n] = -h[N-1-n]`                  | Zero                    | Zero                    |
| IV   | Even               | Anti-Symmetric| `h[n] = -h[N-1-n]`                  | Zero                    | Non-zero                |

### 3.1 Type I Linear Phase FIR Filters (Odd Length, Symmetric)

*   **Length (N):** Odd (e.g., 3, 5, 7)
*   **Symmetry:** Symmetric:  `h[n] = h[N-1-n]`
*   **Transfer Function:**
    `H(z) = h[0] + h[1]z⁻¹ + h[2]z⁻² + ... + h[N-2]z⁻⁽ᴺ⁻²⁾ + h[N-1]z⁻⁽ᴺ⁻¹⁾`
    Due to symmetry, this can be rewritten in terms of cosines. The transfer function can be expressed as:
     `H(ω) = A(ω)e⁻ʲω(N-1)/2`
    where `A(ω)` is a real-valued function of frequency.
*   **Frequency Response Characteristics:**
    *   Can be used for low-pass, high-pass, band-pass, and band-stop filters.
    *   `H(0)` is generally non-zero.
    *   `H(π)` is generally non-zero.
*   **Example:**  `h[n] = {1, 2, 3, 2, 1}`  (N=5, symmetric)

### 3.2 Type II Linear Phase FIR Filters (Even Length, Symmetric)

*   **Length (N):** Even (e.g., 2, 4, 6)
*   **Symmetry:** Symmetric:  `h[n] = h[N-1-n]`
*   **Transfer Function:** Similar to Type I, but with an even number of terms, and can be rewritten to show the linear phase characteristic.  The transfer function can be expressed as:
     `H(ω) = A(ω)e⁻ʲω(N-1)/2`
    where `A(ω)` is a real-valued function of frequency.
*   **Frequency Response Characteristics:**
    *   Can be used for low-pass and band-pass filters.
    *   `H(π) = 0`.  Therefore, unsuitable for designing high-pass filters.
    *   Useful for applications where attenuation at the Nyquist frequency is desired.
*   **Example:** `h[n] = {1, 2, 2, 1}` (N=4, symmetric)

### 3.3 Type III Linear Phase FIR Filters (Odd Length, Anti-Symmetric)

*   **Length (N):** Odd (e.g., 3, 5, 7)
*   **Symmetry:** Anti-Symmetric: `h[n] = -h[N-1-n]`
*   **Transfer Function:** Anti-symmetry results in a different structure.  The transfer function can be expressed as:
     `H(ω) = jB(ω)e⁻ʲω(N-1)/2`
    where `B(ω)` is a real-valued function of frequency.
*   **Frequency Response Characteristics:**
    *   `H(0) = 0` and `H(π) = 0`.  Therefore, unsuitable for designing low-pass or high-pass filters.
    *   Suitable for differentiators and Hilbert transformers.
*   **Example:** `h[n] = {1, 2, 0, -2, -1}` (N=5, anti-symmetric) Notice h[2] = 0 because otherwise anti-symmetry is impossible around n=(N-1)/2.
*    **Important Note**: Because of the anti-symmetry and odd length, the center tap h[(N-1)/2] is *always* zero.

### 3.4 Type IV Linear Phase FIR Filters (Even Length, Anti-Symmetric)

*   **Length (N):** Even (e.g., 2, 4, 6)
*   **Symmetry:** Anti-Symmetric: `h[n] = -h[N-1-n]`
*   **Transfer Function:** The transfer function can be expressed as:
     `H(ω) = jB(ω)e⁻ʲω(N-1)/2`
    where `B(ω)` is a real-valued function of frequency.
*   **Frequency Response Characteristics:**
    *   `H(0) = 0`.  Therefore, unsuitable for low-pass filters.
    *   `H(π)` is generally non-zero.
    *   Suitable for differentiators and Hilbert transformers.
*   **Example:** `h[n] = {1, 2, -2, -1}` (N=4, anti-symmetric)

## 4. Summary Table

| Type | Length | Symmetry      | Frequency Response at ω=0 | Frequency Response at ω=π | Suitable Applications                   |
|------|--------|---------------|--------------------------|--------------------------|---------------------------------------|
| I    | Odd    | Symmetric     | Non-zero                | Non-zero                | Low-pass, High-pass, Band-pass, Band-stop |
| II   | Even   | Symmetric     | Non-zero                | Zero                    | Low-pass, Band-pass                     |
| III  | Odd    | Anti-Symmetric| Zero                    | Zero                    | Differentiators, Hilbert Transformers    |
| IV   | Even   | Anti-Symmetric| Zero                    | Non-zero                | Differentiators, Hilbert Transformers    |

## 5. Implications of Linear Phase

*   **Signal Integrity:** The primary advantage of linear phase is the preservation of signal integrity.  Signals are delayed without distortion.

*   **Applications:**
    *   **Audio Processing:** Important for high-fidelity audio applications to avoid phase distortion.
    *   **Medical Imaging:** Crucial for preserving the shape of medical signals for accurate diagnosis.
    *   **Data Communication:** Essential for minimizing inter-symbol interference in communication systems.
    *   **Seismic Data Processing:** Used for filtering seismic data without introducing artifacts.

## 6. Practice Questions

1.  **Question:**  An FIR filter has an impulse response `h[n] = {1, 2, 3, 4, 3, 2, 1}`.  What type of linear phase FIR filter is this? Explain.
    **Answer:** This is a Type I linear phase FIR filter.  It has odd length (N=7) and is symmetric: `h[n] = h[N-1-n]`.

2.  **Question:** Can a Type II linear phase FIR filter be used to design a high-pass filter?  Why or why not?
    **Answer:** No, a Type II linear phase FIR filter is not suitable for designing a high-pass filter.  Type II filters have `H(π) = 0`, which means they always have zero gain at the Nyquist frequency (π). A high-pass filter requires non-zero gain at the Nyquist frequency.

3. **Question:** An FIR filter is defined by the impulse response h[n] = {1, 2, 0, -2, -1}.  Determine if this filter has linear phase and, if so, what type of linear phase FIR filter is it?
    **Answer:** Yes, the filter has linear phase.  The filter is Type III. This is because the length is odd (N=5) and the impulse response is anti-symmetric: h[n] = -h[N-1-n].

4.  **Question:**  Explain the importance of linear phase in an audio processing application.
    **Answer:** Linear phase is important in audio processing to preserve the timbral characteristics of the audio signal. Non-linear phase can cause phase distortion, which can alter the perceived sound quality by changing the relative timing of different frequency components.  Linear phase ensures that all frequencies are delayed equally, preserving the original sound.

5.  **Question:** What is the group delay of a linear phase FIR filter with a phase response of  `θ(ω) = -ω(N-1)/2 `?
    **Answer:** The group delay is the negative derivative of the phase with respect to frequency:  `τ(ω) = -dθ(ω)/dω`.  In this case, `τ(ω) = -d(-ω(N-1)/2)/dω = (N-1)/2`. This demonstrates that linear phase implies constant group delay.

## 7. Important Points to Remember

*   Linear phase is crucial for preserving signal shape.
*   FIR filters achieve linear phase through symmetric or anti-symmetric impulse responses.
*   The four types of linear phase FIR filters have different characteristics and are suitable for different applications.
*   Type II filters cannot be used for high-pass filters because H(π) = 0.
*   Type III filters cannot be used for either low-pass or high-pass filter because H(0) = 0 and H(π) = 0.
*   The group delay of a linear phase FIR filter is constant and equal to `(N-1)/2`, where N is the filter length.
*   Understanding the frequency response characteristics of each type is essential for designing appropriate filters for specific applications.
