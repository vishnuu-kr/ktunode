---
title: "DFT and IDFT (Properties of DFT)"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 1: Definition of a digital signal processing system"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b7d9"
status: "completed"
scrapedAt: "2026-05-20T16:46:02.863Z"
---
# DIGITAL SIGNAL PROCESSING - Module 1: DFT and IDFT (Properties of DFT)

**Module:** 1: Definition of a digital signal processing system
**Topic:** DFT and IDFT (Properties of DFT)

**Learning Outcomes:**

*   Understand the definition and computation of the Discrete Fourier Transform (DFT) and Inverse Discrete Fourier Transform (IDFT).
*   Learn and apply the key properties of the DFT.
*   Understand the implications and applications of DFT properties in signal analysis and processing.
*   Be able to solve problems involving the DFT and its properties.

## 1. Introduction to DFT and IDFT

*   **Definition of DFT:** The Discrete Fourier Transform (DFT) transforms a finite-length sequence of time-domain samples into a sequence of frequency-domain samples.

*   **Mathematical Representation of DFT:**

    X[k] = ∑<sub>n=0</sub><sup>N-1</sup> x[n] * W<sub>N</sub><sup>kn</sup>   for k = 0, 1, ..., N-1

    Where:
    *   `X[k]` is the k-th frequency component of the DFT.
    *   `x[n]` is the n-th sample of the input sequence.
    *   `N` is the length of the input sequence.
    *   `W<sub>N</sub> = e<sup>-j2π/N</sup>` is the N-th root of unity (also known as the twiddle factor).
    *   `k` is the frequency index (0 to N-1).
    *   `n` is the time index (0 to N-1).

*   **Definition of IDFT:** The Inverse Discrete Fourier Transform (IDFT) transforms a sequence of frequency-domain samples back into a sequence of time-domain samples.

*   **Mathematical Representation of IDFT:**

    x[n] = (1/N) * ∑<sub>k=0</sub><sup>N-1</sup> X[k] * W<sub>N</sub><sup>-kn</sup>   for n = 0, 1, ..., N-1

    Where:
    *   `x[n]` is the n-th sample of the output sequence (time domain).
    *   `X[k]` is the k-th frequency component of the input sequence.
    *   `N` is the length of the input sequence (and DFT sequence).
    *   `W<sub>N</sub> = e<sup>-j2π/N</sup>` is the N-th root of unity.
    *   `k` is the frequency index (0 to N-1).
    *   `n` is the time index (0 to N-1).

*   **Key Difference between DFT and IDFT:** The DFT transforms a time-domain signal to the frequency domain, while the IDFT transforms a frequency-domain signal back to the time domain. The IDFT also includes a scaling factor of 1/N.

## 2. Properties of the DFT

*   **Linearity:**
    *   The DFT is a linear transformation.
    *   If DFT{x<sub>1</sub>[n]} = X<sub>1</sub>[k] and DFT{x<sub>2</sub>[n]} = X<sub>2</sub>[k], then DFT{a*x<sub>1</sub>[n] + b*x<sub>2</sub>[n]} = a*X<sub>1</sub>[k] + b*X<sub>2</sub>[k]
    *   Where `a` and `b` are constants.
    *   **Example:** If `x1[n] = {1, 2, 3, 4}` and `x2[n] = {5, 6, 7, 8}`, then DFT{2*x1[n] + x2[n]} = 2*DFT{x1[n]} + DFT{x2[n]}.

*   **Time Shifting (Circular Time Shift):**
    *   If DFT{x[n]} = X[k], then DFT{x[n-m]} = X[k] * W<sub>N</sub><sup>km</sup>
    *   Shifting the signal in the time domain by `m` samples corresponds to multiplying the DFT by a complex exponential. Remember this is a *circular* shift due to the finite length nature of DFT.
    *   **Example:** If `x[n] = {1, 2, 3, 4}` and we shift it by `m=1`, the shifted sequence is `x[n-1] = {4, 1, 2, 3}` (circular shift).  DFT{x[n-1]} = DFT{x[n]} * e<sup>-j2πk(1)/N</sup>

*   **Frequency Shifting (Circular Frequency Shift):**
    *   If DFT{x[n]} = X[k], then DFT{x[n] * W<sub>N</sub><sup>-ln</sup>} = X[k-l]
    *   Multiplying the signal in the time domain by a complex exponential corresponds to shifting the DFT in the frequency domain by `l` samples (circular shift).
    *   **Example:** If `x[n] = {1, 2, 3, 4}` and we multiply it by  `W<sub>N</sub><sup>-ln</sup>` where `l=1`, then DFT{x[n] * W<sub>N</sub><sup>-n</sup>} = X[k-1] (circular shift).

*   **Time Reversal:**
    *   If DFT{x[n]} = X[k], then DFT{x[-n]} = X[-k] = X[N-k]  (because DFT is periodic with period N)
    *   Reversing the time-domain signal results in reversing the frequency-domain signal.
    *   **Example:** If `x[n] = {1, 2, 3, 4}`, then `x[-n] = {1, 4, 3, 2}` (considering circular reversal around n=0). DFT{x[-n]} = X[-k] = X[4-k].

*   **Circular Convolution:**
    *   If DFT{x<sub>1</sub>[n]} = X<sub>1</sub>[k] and DFT{x<sub>2</sub>[n]} = X<sub>2</sub>[k], then DFT{x<sub>1</sub>[n] ⊗ x<sub>2</sub>[n]} = X<sub>1</sub>[k] * X<sub>2</sub>[k]
    *   Where `⊗` denotes circular convolution.
    *   Circular convolution in the time domain corresponds to multiplication in the frequency domain. This is one of the most important properties.
    *   **Example:** Calculate the DFT of the circular convolution of `x1[n] = {1, 2}` and `x2[n] = {3, 4}`. First calculate DFT{x1[n]} = X1[k] and DFT{x2[n]} = X2[k].  Then DFT{x1[n] ⊗ x2[n]} = X1[k] * X2[k].  Finally, perform the IDFT of the result to find the circular convolution.

*   **Multiplication (Duality or Circular Correlation):**
    *   If DFT{x<sub>1</sub>[n]} = X<sub>1</sub>[k] and DFT{x<sub>2</sub>[n]} = X<sub>2</sub>[k], then DFT{x<sub>1</sub>[n] * x<sub>2</sub>[n]} = (1/N) * (X<sub>1</sub>[k] ⊗ X<sub>2</sub>[k])
    *   Multiplication in the time domain corresponds to circular convolution in the frequency domain (scaled by 1/N).  This is the dual of the convolution property.

*   **Parseval's Theorem:**
    *   ∑<sub>n=0</sub><sup>N-1</sup> |x[n]|<sup>2</sup> = (1/N) * ∑<sub>k=0</sub><sup>N-1</sup> |X[k]|<sup>2</sup>
    *   The energy of the signal in the time domain is equal to the energy of the signal in the frequency domain (scaled by 1/N).
    *   **Significance:**  This relates energy conservation between time and frequency domains.

*   **Symmetry Properties (for real-valued signals x[n]):**
    *   **Conjugate Symmetry:** X[k] = X*[-k] = X*[N-k]  (where * denotes complex conjugate)
        *   The real part of X[k] is even: Re{X[k]} = Re{X[N-k]}
        *   The imaginary part of X[k] is odd: Im{X[k]} = -Im{X[N-k]}
        *   The magnitude of X[k] is even: |X[k]| = |X[N-k]|
        *   The phase of X[k] is odd: ∠X[k] = -∠X[N-k]
    *   **Implications:** For real-valued signals, we only need to compute half of the DFT coefficients, as the other half can be obtained using conjugate symmetry.

## 3. Applications of DFT Properties

*   **Efficient Convolution using FFT (Fast Fourier Transform):**
    *   Linear convolution can be efficiently computed using DFT by converting it to circular convolution via zero-padding.  This is the basis of Fast Convolution algorithms.
    *   Calculate the DFTs of both sequences.
    *   Multiply the DFTs point-by-point.
    *   Compute the IDFT of the result.
*   **Signal Analysis and Spectral Estimation:**
    *   DFT is used to analyze the frequency content of signals.
    *   Properties like Parseval's theorem allow relating energy distribution in time and frequency.
*   **Filter Design:**
    *   DFT properties are useful in designing digital filters in the frequency domain.
*   **Data Compression:**
    *   DFT and related transforms are used in data compression techniques like JPEG and MP3.

## 4. Practice Questions and Exercises

**Question 1:**

Given the sequence x[n] = {1, 2, 3, 4}, calculate its 4-point DFT, X[k].

**Answer:**

X[0] = 1 + 2 + 3 + 4 = 10
X[1] = 1 + 2*e<sup>-jπ/2</sup> + 3*e<sup>-jπ</sup> + 4*e<sup>-j3π/2</sup> = 1 - 2j - 3 + 4j = -2 + 2j
X[2] = 1 + 2*e<sup>-jπ</sup> + 3*e<sup>-j2π</sup> + 4*e<sup>-j3π</sup> = 1 - 2 + 3 - 4 = -2
X[3] = 1 + 2*e<sup>-j3π/2</sup> + 3*e<sup>-j3π</sup> + 4*e<sup>-j9π/2</sup> = 1 + 2j - 3 - 4j = -2 - 2j

Therefore, X[k] = {10, -2 + 2j, -2, -2 - 2j}.

**Question 2:**

Given the DFT of a sequence X[k] = {1, 0, 1, 0}, find the DFT of the time-reversed sequence x[-n].

**Answer:**

Since DFT{x[-n]} = X[-k] = X[N-k], and N=4 here:
X[-k] = {1, 0, 1, 0} (due to the symmetry X[0] = X[0] and X[2] = X[2] and X[1] = X[3] = 0)
Alternatively, X[N-k] = X[4-k].
X[4-0] = X[4] = X[0] = 1
X[4-1] = X[3] = 0
X[4-2] = X[2] = 1
X[4-3] = X[1] = 0

So the DFT of x[-n] is X[-k] = {1, 0, 1, 0}.

**Question 3:**

Let x[n] = {1, 2} and h[n] = {3, 4}.  Compute the 2-point circular convolution of x[n] and h[n].

**Answer:**
Using the convolution property:
1.  DFT{x[n]} = X[k]: X[0] = 1+2 = 3, X[1] = 1 - 2 = -1
2.  DFT{h[n]} = H[k]: H[0] = 3+4 = 7, H[1] = 3-4 = -1
3.  Y[k] = X[k] * H[k]: Y[0] = 3 * 7 = 21, Y[1] = (-1)*(-1) = 1
4.  y[n] = IDFT{Y[k]}:
    y[0] = (1/2) * (21 + 1) = 11
    y[1] = (1/2) * (21 - 1) = 10

So, x[n] ⊗ h[n] = {11, 10}.

We can also confirm this using direct calculation of circular convolution:
x[0]h[0] + x[1]h[1] = 1*3 + 2*4 = 3 + 8 = 11
x[0]h[1] + x[1]h[0] = 1*4 + 2*3 = 4 + 6 = 10

**Question 4:**

What is Parseval's theorem, and what is its significance in DSP?

**Answer:**

Parseval's theorem states that the energy of a signal in the time domain is equal to the energy of the signal in the frequency domain (scaled by 1/N):  ∑<sub>n=0</sub><sup>N-1</sup> |x[n]|<sup>2</sup> = (1/N) * ∑<sub>k=0</sub><sup>N-1</sup> |X[k]|<sup>2</sup>

Its significance is that it provides a link between the time and frequency domains, showing that the total energy of the signal is preserved under the DFT transformation.  This is useful for verifying DFT calculations and understanding how energy is distributed across different frequencies in a signal.

## 5. Important Points to Remember

*   The DFT is a discrete version of the Fourier Transform, operating on finite-length sequences.
*   The IDFT transforms frequency domain representation back to the time domain.
*   Understanding the properties of the DFT is crucial for efficient signal processing and analysis.
*   Circular convolution is different from linear convolution; zero-padding is needed to perform linear convolution using DFT.
*   Symmetry properties can significantly reduce the computational cost for real-valued signals.
*   Always remember the scaling factor (1/N) in the IDFT and related formulas.
*   W<sub>N</sub> = e<sup>-j2π/N</sup> is fundamental to DFT/IDFT calculations.
