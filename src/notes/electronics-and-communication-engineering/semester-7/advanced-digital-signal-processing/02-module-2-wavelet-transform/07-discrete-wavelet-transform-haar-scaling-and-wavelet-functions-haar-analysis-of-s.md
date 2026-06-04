---
title: "Discrete Wavelet Transform- Haar Scaling and Wavelet Functions, Haar analysis of signals, concept of nested space."
subject: "ADVANCED DIGITAL SIGNAL PROCESSING"
module: "Module 2: Wavelet transform:"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff277"
status: "completed"
scrapedAt: "2026-05-23T18:04:13.118Z"
---
# ADVANCED DIGITAL SIGNAL PROCESSING

## Module 2: Wavelet Transform

### Topic: Discrete Wavelet Transform - Haar Scaling and Wavelet Functions, Haar Analysis of Signals, Concept of Nested Space

---

### **1. Introduction to Wavelet Transform**

*   **Motivation:** Traditional Fourier Transform (FT) represents a signal as a sum of sinusoids. While excellent for analyzing stationary signals, it struggles with signals that have time-varying frequency content (non-stationary signals). Wavelet Transform (WT) overcomes this limitation by using a family of time-frequency localized basis functions called wavelets.
*   **Key Idea:** WT analyzes a signal at different scales and positions. It breaks down a signal into different frequency components and examines each component with a resolution matched to its scale.
*   **Comparison with FT:**
    *   FT: Good time resolution, poor frequency resolution.
    *   STFT (Short-Time Fourier Transform): Compromise between time and frequency resolution, but fixed window size.
    *   WT: Variable time-frequency resolution (high frequency components analyzed with good time resolution, low frequency components with good frequency resolution).
*   **Types of WT:**
    *   Continuous Wavelet Transform (CWT)
    *   Discrete Wavelet Transform (DWT)

---

### **2. Discrete Wavelet Transform (DWT)**

*   **Definition:** DWT is a mathematical tool used to decompose a signal into different frequency components, each localized in time. It provides a time-scale representation of the signal.
*   **Basis Functions:** DWT uses a set of basis functions called *wavelets*. These wavelets are generated from a single *mother wavelet* by scaling and translation.
*   **DWT Decomposition:** A signal is projected onto these scaled and translated versions of the mother wavelet.

---

### **3. Haar Scaling and Wavelet Functions**

The Haar wavelet is the simplest and first discovered wavelet. It is discontinuous and computationally efficient.

#### **3.1 Haar Scaling Function ( $\phi(t)$ )**

*   **Definition:** The Haar scaling function, also known as the boxcar function, is defined as:
    $$ \phi(t) = \begin{cases} 1 & \text{if } 0 \le t < 1 \\ 0 & \text{otherwise} \end{cases} $$
*   **Properties:**
    *   Compactly supported: It is non-zero only over a finite interval.
    *   Normalized: $\int_{-\infty}^{\infty} \phi(t) dt = 1$.
    *   Average value: The average value of $\phi(t)$ over its support is 1. This is crucial for approximation.
*   **Graphical Representation:** A rectangular pulse of height 1 and width 1, from t=0 to t=1.

#### **3.2 Haar Wavelet Function ( $\psi(t)$ )**

*   **Definition:** The Haar wavelet function, also known as the Haar mother wavelet, is defined as:
    $$ \psi(t) = \begin{cases} 1 & \text{if } 0 \le t < 0.5 \\ -1 & \text{if } 0.5 \le t < 1 \\ 0 & \text{otherwise} \end{cases} $$
*   **Properties:**
    *   Compactly supported.
    *   Normalized: $\int_{-\infty}^{\infty} \psi(t) dt = 0$. This is a key property for analyzing details or differences.
    *   Orthogonal to the scaling function: $\int_{-\infty}^{\infty} \phi(t)\psi(t) dt = 0$.
*   **Graphical Representation:** A pulse of height 1 from t=0 to t=0.5, followed by a pulse of height -1 from t=0.5 to t=1.

#### **3.3 Scaled and Translated Haar Functions**

*   **Scaling:** Scaling by a factor 'a' ($a > 0$) compresses or stretches the function.
    *   Scaled Scaling Function: $\phi_a(t) = \phi(t/a)$.
    *   Scaled Wavelet Function: $\psi_a(t) = \psi(t/a)$.
*   **Translation:** Translation by 'b' shifts the function.
    *   Translated Scaling Function: $\phi_{a,b}(t) = \phi((t-b)/a)$.
    *   Translated Wavelet Function: $\psi_{a,b}(t) = \psi((t-b)/a)$.

In DWT, we typically use dyadic scaling (powers of 2) and integer translations.
*   Scaling function at scale $j$: $\phi_{j,k}(t) = 2^{j/2} \phi(2^j t - k)$
*   Wavelet function at scale $j$: $\psi_{j,k}(t) = 2^{j/2} \psi(2^j t - k)$

For the Haar wavelet, the scaling factor is typically $2^{-j}$ and translations are $k \cdot 2^{-j}$.

---

### **4. Haar Analysis of Signals**

The Haar DWT decomposes a signal into approximation coefficients (representing low-frequency components) and detail coefficients (representing high-frequency components). This is achieved through a filter bank structure.

#### **4.1 Filter Bank Structure**

*   **Analysis Filters:**
    *   **Low-pass filter (h[n]):** This filter is associated with the scaling function and captures the approximation part of the signal.
    *   **High-pass filter (g[n]):** This filter is associated with the wavelet function and captures the detail part of the signal.
*   **Synthesis Filters:** Used to reconstruct the signal from its decomposed coefficients.

For Haar wavelet:
*   The low-pass filter coefficients (h[n]) are derived from the scaling function's integral over intervals.
*   The high-pass filter coefficients (g[n]) are derived from the wavelet function's integral over intervals.

Consider a discrete signal $x[n]$ of length $N$. The decomposition process at the first level involves:
1.  **Low-pass filtering:** $y_{low}[n] = \sum_{k} x[k] h[n-k]$
2.  **High-pass filtering:** $y_{high}[n] = \sum_{k} x[k] g[n-k]$
3.  **Downsampling (Decimation):** To reduce the data rate and avoid redundancy, the output of each filter is downsampled by a factor of 2. This means we keep only every second sample.
    *   Approximation coefficients ($cA_1[n]$): $cA_1[n] = y_{low}[2n]$
    *   Detail coefficients ($cD_1[n]$): $cD_1[n] = y_{high}[2n]$

The length of $cA_1$ and $cD_1$ is approximately $N/2$.

**Haar Filter Coefficients:**

For a discrete signal $x[n]$ of length $N$:

*   **Low-pass filter (averaging):** The coefficients are obtained by averaging adjacent samples.
    $$ cA_1[n] = \frac{x[2n] + x[2n+1]}{\sqrt{2}} $$
    *(Note: The $\sqrt{2}$ factor is for normalization to ensure energy preservation. Some definitions might omit it for simplicity, especially in introductory explanations. The key concept is averaging.)*

*   **High-pass filter (difference):** The coefficients are obtained by taking the difference of adjacent samples.
    $$ cD_1[n] = \frac{x[2n] - x[2n+1]}{\sqrt{2}} $$
    *(Again, $\sqrt{2}$ for normalization.)*

**Example of Haar Decomposition (1D):**

Let the signal be $x = [6, 8, 3, 1, 9, 7, 2, 4]$ (length $N=8$).

**Level 1 Decomposition:**

*   **Approximation Coefficients ($cA_1$):**
    *   $cA_1[0] = \frac{x[0] + x[1]}{\sqrt{2}} = \frac{6 + 8}{\sqrt{2}} = \frac{14}{\sqrt{2}} = 7\sqrt{2} \approx 9.90$
    *   $cA_1[1] = \frac{x[2] + x[3]}{\sqrt{2}} = \frac{3 + 1}{\sqrt{2}} = \frac{4}{\sqrt{2}} = 2\sqrt{2} \approx 2.83$
    *   $cA_1[2] = \frac{x[4] + x[5]}{\sqrt{2}} = \frac{9 + 7}{\sqrt{2}} = \frac{16}{\sqrt{2}} = 8\sqrt{2} \approx 11.31$
    *   $cA_1[3] = \frac{x[6] + x[7]}{\sqrt{2}} = \frac{2 + 4}{\sqrt{2}} = \frac{6}{\sqrt{2}} = 3\sqrt{2} \approx 4.24$
    So, $cA_1 \approx [9.90, 2.83, 11.31, 4.24]$

*   **Detail Coefficients ($cD_1$):**
    *   $cD_1[0] = \frac{x[0] - x[1]}{\sqrt{2}} = \frac{6 - 8}{\sqrt{2}} = \frac{-2}{\sqrt{2}} = -\sqrt{2} \approx -1.41$
    *   $cD_1[1] = \frac{x[2] - x[3]}{\sqrt{2}} = \frac{3 - 1}{\sqrt{2}} = \frac{2}{\sqrt{2}} = \sqrt{2} \approx 1.41$
    *   $cD_1[2] = \frac{x[4] - x[5]}{\sqrt{2}} = \frac{9 - 7}{\sqrt{2}} = \frac{2}{\sqrt{2}} = \sqrt{2} \approx 1.41$
    *   $cD_1[3] = \frac{x[6] - x[7]}{\sqrt{2}} = \frac{2 - 4}{\sqrt{2}} = \frac{-2}{\sqrt{2}} = -\sqrt{2} \approx -1.41$
    So, $cD_1 \approx [-1.41, 1.41, 1.41, -1.41]$

The signal is now represented by $cA_1$ and $cD_1$. We can further decompose $cA_1$ to get more levels of approximation and detail.

#### **4.2 Multi-level Decomposition**

The process can be iterated on the approximation coefficients:
*   Level 2: Decompose $cA_1$ into $cA_2$ and $cD_2$.
*   Level 3: Decompose $cA_2$ into $cA_3$ and $cD_3$.
And so on.

This results in a set of coefficients: $\{cD_1, cD_2, \dots, cD_J, cA_J\}$ where $J$ is the maximum decomposition level.

#### **4.3 Reconstruction (Synthesis)**

Reconstruction is the reverse process of decomposition. It uses synthesis filters (upsampling followed by filtering).

*   **Upsampling:** The approximation coefficients ($cA_J$) and detail coefficients ($cD_J$) are upsampled by a factor of 2.
    *   Upsampled $cA_J$: $\text{up}(cA_J) = [\dots, cA_J[n], 0, cA_J[n+1], 0, \dots]$
    *   Upsampled $cD_J$: $\text{up}(cD_J) = [\dots, cD_J[n], 0, cD_J[n+1], 0, \dots]$
*   **Filtering:** The upsampled signals are then filtered using synthesis filters, which are related to the analysis filters. For Haar, these are essentially weighted summations.
    *   Reconstructed signal from level J: $x_{rec}^{(J)}[n] = \sum_{k} \text{up}(cA_J)[k] \tilde{h}[n-k] + \sum_{k} \text{up}(cD_J)[k] \tilde{g}[n-k]$
    where $\tilde{h}$ and $\tilde{g}$ are the synthesis low-pass and high-pass filters.

For Haar, the reconstruction is:
$$ x_{rec}^{(J)}[2n] = \frac{cA_J[n] + cD_J[n]}{\sqrt{2}} $$
$$ x_{rec}^{(J)}[2n+1] = \frac{cA_J[n] - cD_J[n]}{\sqrt{2}} $$

**Example of Haar Reconstruction (1D):**

Using the coefficients from the previous example:
$cA_1 \approx [9.90, 2.83, 11.31, 4.24]$
$cD_1 \approx [-1.41, 1.41, 1.41, -1.41]$

**Level 1 Reconstruction:**

*   $x_{rec}^{(1)}[0] = \frac{cA_1[0] + cD_1[0]}{\sqrt{2}} = \frac{7\sqrt{2} + (-\sqrt{2})}{\sqrt{2}} = \frac{6\sqrt{2}}{\sqrt{2}} = 6$
*   $x_{rec}^{(1)}[1] = \frac{cA_1[0] - cD_1[0]}{\sqrt{2}} = \frac{7\sqrt{2} - (-\sqrt{2})}{\sqrt{2}} = \frac{8\sqrt{2}}{\sqrt{2}} = 8$
*   $x_{rec}^{(1)}[2] = \frac{cA_1[1] + cD_1[1]}{\sqrt{2}} = \frac{2\sqrt{2} + \sqrt{2}}{\sqrt{2}} = \frac{3\sqrt{2}}{\sqrt{2}} = 3$
*   $x_{rec}^{(1)}[3] = \frac{cA_1[1] - cD_1[1]}{\sqrt{2}} = \frac{2\sqrt{2} - \sqrt{2}}{\sqrt{2}} = \frac{1\sqrt{2}}{\sqrt{2}} = 1$
*   $x_{rec}^{(1)}[4] = \frac{cA_1[2] + cD_1[2]}{\sqrt{2}} = \frac{8\sqrt{2} + \sqrt{2}}{\sqrt{2}} = \frac{9\sqrt{2}}{\sqrt{2}} = 9$
*   $x_{rec}^{(1)}[5] = \frac{cA_1[2] - cD_1[2]}{\sqrt{2}} = \frac{8\sqrt{2} - \sqrt{2}}{\sqrt{2}} = \frac{7\sqrt{2}}{\sqrt{2}} = 7$
*   $x_{rec}^{(1)}[6] = \frac{cA_1[3] + cD_1[3]}{\sqrt{2}} = \frac{3\sqrt{2} + (-\sqrt{2})}{\sqrt{2}} = \frac{2\sqrt{2}}{\sqrt{2}} = 2$
*   $x_{rec}^{(1)}[7] = \frac{cA_1[3] - cD_1[3]}{\sqrt{2}} = \frac{3\sqrt{2} - (-\sqrt{2})}{\sqrt{2}} = \frac{4\sqrt{2}}{\sqrt{2}} = 4$

The reconstructed signal is $[6, 8, 3, 1, 9, 7, 2, 4]$, which is the original signal.

#### **4.4 2D Haar DWT (for Images)**

For images, the decomposition is applied in 2D.
1.  **Row processing:** Apply 1D DWT to each row of the image. This results in approximation coefficients (horizontal) and detail coefficients (horizontal).
2.  **Column processing:** Apply 1D DWT to the columns of the resulting matrices.
    *   Applying to approximation columns: yields LL (Approximation) subband.
    *   Applying to detail columns: yields LH (Horizontal Detail) subband.
    *   Applying to detail rows: yields HL (Vertical Detail) subband.
    *   Applying to detail rows and then detail columns: yields HH (Diagonal Detail) subband.

This results in four subbands: LL, LH, HL, HH. Each of these subbands can be further decomposed.

---

### **5. Concept of Nested Space (Multiresolution Analysis)**

The DWT provides a way to represent a signal at different levels of resolution. This is formalized by the concept of nested spaces, which forms the basis of Multiresolution Analysis (MRA).

#### **5.1 Approximation Spaces ($V_j$)**

*   **Definition:** For each scale $j$, there is a vector space $V_j$ that contains approximations of the signal at a certain resolution. These spaces are constructed using scaled and translated versions of the scaling function.
*   **Nested Property:** The spaces are nested, meaning that as the scale $j$ decreases (resolution increases), the spaces are nested within each other:
    $$ \dots \subset V_{j+1} \subset V_j \subset V_{j-1} \subset \dots $$
    This means that any signal approximation at a coarser resolution (larger scale $j+1$) is also an approximation at a finer resolution (smaller scale $j$).
*   **Interrelation:** The scaling property of the wavelet relates the spaces:
    $$ V_j = \text{span}\{\phi_{j,k}(t) : k \in \mathbb{Z}\} $$
    where $\phi_{j,k}(t) = 2^{j/2} \phi(2^j t - k)$.
    The key relation is $V_{j-1} = \text{span}\{\phi_{j-1,k}(t) : k \in \mathbb{Z}\}$.
    The relation between $\phi_{j-1,k}(t)$ and $\phi_{j,k}(t)$ is through the scaling function's two-scale relation:
    $$ \phi(t) = \sum_{n=-\infty}^{\infty} h[n] \phi(2t-n) $$
    which implies:
    $$ \phi_{j,k}(t) = \sum_{n} h[n-2k] \phi_{j-1,n}(t) $$
    This shows how the basis functions at one scale are formed by combinations of basis functions at the next finer scale.

#### **5.2 Detail Spaces ($W_j$)**

*   **Definition:** For each scale $j$, there is a vector space $W_j$ that contains the details (differences or high-frequency components) of the signal at that resolution. These spaces are constructed using scaled and translated versions of the wavelet function.
*   **Relationship with Approximation Spaces:** The detail space $W_j$ is the orthogonal complement of $V_{j+1}$ in $V_j$:
    $$ V_j = V_{j+1} \oplus W_{j+1} $$
    This means that the space at resolution $j$ can be decomposed into the space at the next coarser resolution ($V_{j+1}$) plus the space containing the details lost when going from resolution $j$ to $j+1$ ($W_{j+1}$).
*   **Orthogonality:** The detail spaces $W_j$ are orthogonal to each other for different scales $j$.

#### **5.3 Signal Representation in Nested Spaces**

An arbitrary signal $f(t)$ can be approximated by projecting it onto these spaces.
*   **Approximation at scale j:** $P_{V_j} f$, the projection of $f$ onto $V_j$.
*   **Detail at scale j:** $P_{W_j} f$, the projection of $f$ onto $W_j$.

The MRA states that a signal $f(t)$ can be represented as:
$$ f(t) = \sum_{j=-\infty}^{\infty} P_{W_j} f $$
where $P_{W_j} f$ are orthogonal components.

In practice, for discrete signals, we consider a finite number of decomposition levels.
*   A signal $x$ of length $N$ can be decomposed into:
    $$ x = cA_J + \sum_{j=1}^J cD_j $$
    where $cA_J$ are the approximation coefficients at the coarsest level $J$, and $cD_j$ are the detail coefficients at each level $j$.

**Intuition:**
Imagine a signal as a large block of information.
*   $V_\infty$ (finest resolution): Contains the signal itself.
*   $V_0$: Contains a coarse average of the signal.
*   $W_1$: Contains the "first level of detail" (high-frequency changes) needed to go from $V_0$ to $V_1$.
*   $V_1 = V_0 \oplus W_1$.
*   $V_j$ becomes progressively finer as $j$ decreases.
*   $W_j$ captures the difference (details) between $V_{j-1}$ and $V_j$.

This hierarchical representation allows for efficient storage and analysis. For instance, if the detail coefficients ($cD_j$) are small, they can be quantized or discarded without significant loss of information, leading to compression.

**Connection to Textbooks:**
*   **Oppenheim & Willsky:** Discusses sampling, digital filters, and provides foundations for signal processing concepts relevant to filter banks and signal decomposition. While not explicitly focusing on wavelets in early chapters, the principles of LTI systems and their frequency response are foundational. MRA concepts are often introduced later in advanced topics or specialized books.
*   **Haykin:** Similar to Oppenheim & Willsky, Haykin provides a broad overview of signal processing. His treatment of linear filters and discrete-time signals is essential for understanding the filter bank implementation of DWT.
*   **Reference Books (Kumar, Lathi, Ziemer, Ambardar, Apte):** These books cover the fundamentals of signals and systems, including Fourier analysis, Z-transforms, and LTI systems. Understanding these concepts is prerequisite for grasping how wavelets provide time-frequency localization that FT lacks. Lathi's book often delves into system properties like stability and causality, which are applicable to the filter banks used in DWT.

---

### **6. Learning Outcomes Covered**

*   **CO1: Classify continuous and discrete time signals and systems based on their properties and perform basic operations on signals.**
    *   The Haar wavelet and scaling functions are discrete-time basis functions.
    *   The decomposition and reconstruction processes are basic operations performed on signals using filter banks.
    *   Understanding the properties of Haar functions (compact support, vanishing moments) is part of signal classification.
*   **CO2: Determine the stability and causality of LTI systems using convolution operations.**
    *   The filter banks used in DWT are LTI systems. Their stability and causality depend on the filter coefficients and the downsampling/upsampling operations. While not directly calculated in this module's context, the underlying filter operations are LTI.
*   **CO3: Analyze signals in frequency domain using Laplace, Fourier and z-transforms and examine the properties of transforms.**
    *   While DWT's strength is time-frequency localization, its filter banks have frequency responses related to the Fourier and Z-transforms of the filter coefficients. Understanding how these filters pass/attenuate frequencies is crucial.
*   **CO4: Interpret the use of various transforms to analyze continuous and discrete time LTI systems.**
    *   DWT can be seen as a transformation that analyzes LTI systems (filter banks) in a multiresolution sense, offering a different perspective than traditional frequency-domain analysis for non-stationary signals.

---

### **7. Key Points to Remember**

*   **Haar Wavelet:** Simplest wavelet, discontinuous, uses averaging (low-pass) and differencing (high-pass) for decomposition.
*   **DWT Decomposition:** Signal broken into approximation coefficients (low-frequency) and detail coefficients (high-frequency) using filter banks and downsampling.
*   **DWT Reconstruction:** Signal rebuilt from coefficients using upsampling and synthesis filters.
*   **Multiresolution Analysis (MRA):** Formalizes DWT as decomposition into nested approximation spaces ($V_j$) and orthogonal detail spaces ($W_j$).
*   **Nested Spaces:** $V_{j+1} \subset V_j$, representing increasing resolution as $j$ decreases. $W_j$ captures the details between $V_{j-1}$ and $V_j$.
*   **Advantages of DWT:** Time-frequency localization, useful for non-stationary signals, potential for compression and denoising.
*   **Haar's Simplicity:** Computationally fast, but its discontinuity can lead to "ringing" artifacts in some applications.

---

### **8. Practice Questions & Exercises**

**Question 1:**
What are the Haar scaling and wavelet functions? Sketch them.

**Answer:**
*   **Haar Scaling Function ($\phi(t)$):**
    $$ \phi(t) = \begin{cases} 1 & \text{if } 0 \le t < 1 \\ 0 & \text{otherwise} \end{cases} $$
    *Sketch:* A rectangular pulse of height 1 and width 1, from $t=0$ to $t=1$.
*   **Haar Wavelet Function ($\psi(t)$):**
    $$ \psi(t) = \begin{cases} 1 & \text{if } 0 \le t < 0.5 \\ -1 & \text{if } 0.5 \le t < 1 \\ 0 & \text{otherwise} \end{cases} $$
    *Sketch:* A pulse of height 1 from $t=0$ to $t=0.5$, followed by a pulse of height -1 from $t=0.5$ to $t=1$.

**Question 2:**
Consider the signal $x = [2, 4, 1, 3]$. Perform one level of Haar DWT decomposition. Calculate the approximation coefficients ($cA_1$) and detail coefficients ($cD_1$).

**Answer:**
Signal: $x = [2, 4, 1, 3]$ (Length $N=4$)

**Level 1 Decomposition:**

*   **Approximation Coefficients ($cA_1$):**
    *   $cA_1[0] = \frac{x[0] + x[1]}{\sqrt{2}} = \frac{2 + 4}{\sqrt{2}} = \frac{6}{\sqrt{2}} = 3\sqrt{2}$
    *   $cA_1[1] = \frac{x[2] + x[3]}{\sqrt{2}} = \frac{1 + 3}{\sqrt{2}} = \frac{4}{\sqrt{2}} = 2\sqrt{2}$
    So, $cA_1 = [3\sqrt{2}, 2\sqrt{2}] \approx [4.24, 2.83]$

*   **Detail Coefficients ($cD_1$):**
    *   $cD_1[0] = \frac{x[0] - x[1]}{\sqrt{2}} = \frac{2 - 4}{\sqrt{2}} = \frac{-2}{\sqrt{2}} = -\sqrt{2}$
    *   $cD_1[1] = \frac{x[2] - x[3]}{\sqrt{2}} = \frac{1 - 3}{\sqrt{2}} = \frac{-2}{\sqrt{2}} = -\sqrt{2}$
    So, $cD_1 = [-\sqrt{2}, -\sqrt{2}] \approx [-1.41, -1.41]$

**Question 3:**
Explain the concept of nested spaces in the context of Multiresolution Analysis (MRA). How does the Haar wavelet contribute to this concept?

**Answer:**
The concept of nested spaces in MRA describes how a signal can be represented at different levels of resolution. For each scale $j$, there's an approximation space $V_j$ and a detail space $W_j$. The key property is that these approximation spaces are nested: $\dots \subset V_{j+1} \subset V_j \subset \dots$. This means that information captured at a coarser scale ($V_{j+1}$) is also present at finer scales ($V_j$). The detail space $W_j$ contains the information (details) that distinguishes $V_{j-1}$ from $V_j$. The Haar wavelet, being the simplest orthonormal wavelet, provides a basis for these spaces. Its scaling function generates the approximation spaces, and its wavelet function generates the detail spaces. The simplicity of Haar means the spaces $V_j$ and $W_j$ are directly related to averages and differences of signal segments, illustrating the core idea of MRA.

**Question 4:**
If you have the approximation coefficients $cA_1 = [5, 2]$ and detail coefficients $cD_1 = [1, -3]$ from a Haar DWT of a signal of length 4, reconstruct the original signal.

**Answer:**
Given: $cA_1 = [5, 2]$ and $cD_1 = [1, -3]$.
Using the Haar reconstruction formulas:
*   $x_{rec}[2n] = \frac{cA_1[n] + cD_1[n]}{\sqrt{2}}$
*   $x_{rec}[2n+1] = \frac{cA_1[n] - cD_1[n]}{\sqrt{2}}$

For $n=0$:
*   $x_{rec}[0] = \frac{cA_1[0] + cD_1[0]}{\sqrt{2}} = \frac{5 + 1}{\sqrt{2}} = \frac{6}{\sqrt{2}} = 3\sqrt{2}$
*   $x_{rec}[1] = \frac{cA_1[0] - cD_1[0]}{\sqrt{2}} = \frac{5 - 1}{\sqrt{2}} = \frac{4}{\sqrt{2}} = 2\sqrt{2}$

For $n=1$:
*   $x_{rec}[2] = \frac{cA_1[1] + cD_1[1]}{\sqrt{2}} = \frac{2 + (-3)}{\sqrt{2}} = \frac{-1}{\sqrt{2}} = -\frac{1}{\sqrt{2}}$
*   $x_{rec}[3] = \frac{cA_1[1] - cD_1[1]}{\sqrt{2}} = \frac{2 - (-3)}{\sqrt{2}} = \frac{5}{\sqrt{2}} = \frac{5}{\sqrt{2}}$

The reconstructed signal is $[3\sqrt{2}, 2\sqrt{2}, -\frac{1}{\sqrt{2}}, \frac{5}{\sqrt{2}}]$.
Approximately: $[4.24, 2.83, -0.71, 3.54]$.

---
This concludes the study notes for the Discrete Wavelet Transform focusing on Haar functions and the concept of nested spaces. Remember to consult the specified textbooks for a more in-depth theoretical treatment and additional examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
