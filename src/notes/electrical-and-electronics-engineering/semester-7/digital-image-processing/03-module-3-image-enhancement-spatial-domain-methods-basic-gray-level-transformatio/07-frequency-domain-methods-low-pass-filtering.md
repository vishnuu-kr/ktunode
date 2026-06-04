---
title: "Frequency domain methods: low pass filtering"
subject: "DIGITAL IMAGE PROCESSING"
module: "Module 3: Image Enhancement: Spatial domain methods: Basic Gray Level Transformations"
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f3692e"
status: "completed"
scrapedAt: "2026-05-23T16:35:30.348Z"
---
# DIGITAL IMAGE PROCESSING - Module 3: Image Enhancement

## Topic: Frequency Domain Methods: Low-Pass Filtering

**Prerequisites:** Basic understanding of image representation, Fourier Transform (2D DFT).

**Alignment with Course Outcomes:**

*   **CO2: Analyse the various concepts and mathematical transforms necessary for image processing (Knowledge Level: K3)** - This topic directly deals with the application of frequency domain transforms (specifically Fourier Transform) for image enhancement.
*   **CO4: Analyze the filtering and restoration of images (Knowledge Level: K3)** - Low-pass filtering is a fundamental technique for image smoothing and noise reduction, which are key aspects of image filtering and restoration.

---

### 1. Introduction to Frequency Domain Filtering

While spatial domain methods manipulate pixel values directly, frequency domain methods work on the Fourier Transform of the image. The 2D Discrete Fourier Transform (DFT) decomposes an image into its constituent frequencies.

*   **Concept:** An image can be represented as a sum of sinusoidal components of various frequencies and orientations.
*   **Frequency Domain:** In the frequency domain, an image is represented by its Fourier Transform, where the magnitude spectrum indicates the strength of different frequencies and the phase spectrum indicates their spatial arrangement.
    *   **Low Frequencies:** Correspond to slow variations in intensity (e.g., smooth areas, overall brightness).
    *   **High Frequencies:** Correspond to rapid variations in intensity (e.g., edges, fine details, noise).
*   **The Goal of Filtering:** To modify specific frequency components of the image to achieve a desired enhancement.

**Reference:** Gonzalez & Woods (4th Ed.), Chapter 4: "Frequency Domain Filtering".

---

### 2. The 2D Discrete Fourier Transform (DFT) and its Inverse (IDFT)

To understand frequency domain filtering, we need to recall the 2D DFT and IDFT.

**2D DFT:**
$$F(u, v) = \sum_{x=0}^{M-1} \sum_{y=0}^{N-1} f(x, y) e^{-j2\pi(ux/M + vy/N)}$$
where:
*   $f(x, y)$ is the image in the spatial domain (at coordinates (x, y)).
*   $F(u, v)$ is the image in the frequency domain (at frequencies (u, v)).
*   $M \times N$ is the size of the image.
*   $u, v$ are the frequency variables.

**2D IDFT:**
$$f(x, y) = \frac{1}{MN} \sum_{u=0}^{M-1} \sum_{v=0}^{N-1} F(u, v) e^{j2\pi(ux/M + vy/N)}$$

**Visualization of the Fourier Spectrum:**
The output of the DFT, $F(u, v)$, is generally a complex-valued function. We often visualize its magnitude spectrum:
$$|F(u, v)| = \sqrt{\text{Real}(F(u, v))^2 + \text{Imaginary}(F(u, v))^2}$$
The DC component (average intensity) is at $(u, v) = (0, 0)$. To visualize it easily, the spectrum is typically shifted so that the DC component is at the center.

**Important Note:** The computational complexity of the DFT is high ($O(M^2N^2)$). The Fast Fourier Transform (FFT) algorithm significantly reduces this complexity to $O(MN \log(MN))$.

**Reference:** Gonzalez & Woods (4th Ed.), Chapter 4.1: "Background", Jain (1988), Chapter 6: "The Fourier Transform".

---

### 3. Frequency Domain Filtering Process

The general process of frequency domain filtering involves the following steps:

1.  **Obtain the Image:** Start with the input image $f(x, y)$.
2.  **Move to the Frequency Domain:** Compute the 2D DFT of the image.
    *   It's common practice to add a small constant (like 1) to $f(x, y)$ before taking the DFT to avoid multiplying by zero, which can cause problems in visualization.
    *   Shift the zero-frequency component to the center of the spectrum using a function like `fftshift` in MATLAB.
    $$F(u, v) = \mathcal{F}\{f(x, y)\}$$
    $$F_{shifted}(u, v) = \mathcal{F}\{f(x, y) \cdot (-1)^{x+y}\}$$
3.  **Define a Filter:** Create a frequency domain filter $H(u, v)$. This filter will be multiplied element-wise with the Fourier Transform of the image.
4.  **Filter the Image:** Multiply the Fourier Transform of the image by the filter.
    $$G(u, v) = H(u, v) \cdot F(u, v)$$
    where $G(u, v)$ is the filtered image in the frequency domain.
5.  **Move Back to the Spatial Domain:** Compute the inverse 2D DFT of $G(u, v)$ to obtain the filtered image in the spatial domain.
    *   Shift the spectrum back if it was shifted earlier.
    $$g(x, y) = \mathcal{F}^{-1}\{G(u, v)\}$$
    $$g(x, y) = \mathcal{F}^{-1}\{H(u, v) \cdot F_{shifted}(u, v)\} \cdot (-1)^{x+y}$$

**Key Operation:** The multiplication of the filter $H(u, v)$ with the Fourier Transform $F(u, v)$ in the frequency domain corresponds to a **convolution** in the spatial domain. This is a fundamental property of the Fourier Transform.

**Reference:** Gonzalez & Woods (4th Ed.), Chapter 4.2: "The 2-D Discrete Fourier Transform", Castleman (2003), Chapter 9: "Frequency Domain Filtering".

---

### 4. Low-Pass Filtering

Low-pass filters are designed to **pass low frequencies** and **attenuate (reduce) high frequencies**. This characteristic makes them suitable for **smoothing** the image and **reducing noise**.

*   **Effect on Image:**
    *   **Smoothing:** By removing high-frequency components, which are often associated with sharp transitions and noise, low-pass filters blur the image.
    *   **Noise Reduction:** Random noise in an image typically has a wide range of frequencies, including a significant high-frequency component. Low-pass filters can effectively reduce this noise.
    *   **Blurring:** The trade-off for noise reduction and smoothing is the loss of fine details and edges, as these are also associated with high frequencies.

**Types of Low-Pass Filters in the Frequency Domain:**

We will discuss three primary types of ideal and pseudo-ideal low-pass filters:

**4.1. Ideal Low-Pass Filter (ILPF)**

*   **Definition:** The ILPF passes all frequencies within a certain radius $D_0$ from the center of the frequency domain and blocks all frequencies outside this radius.
*   **Filter Function:**
    $$H(u, v) = \begin{cases} 1 & \text{if } D(u, v) \le D_0 \\ 0 & \text{if } D(u, v) > D_0 \end{cases}$$
    where $D(u, v) = \sqrt{u^2 + v^2}$ is the distance of a point $(u, v)$ from the center of the frequency domain (assuming the DC component is at the center). $D_0$ is the **cutoff frequency**.

*   **Characteristics:**
    *   **Sharp Cutoff:** The transition between passing and blocking frequencies is abrupt.
    *   **Ringing Artifacts:** Due to the sharp cutoff, the ILPF introduces "ringing" artifacts in the spatial domain. This is a consequence of the Gibbs phenomenon. The spatial domain equivalent of the ILPF is the **Bessel function of the first kind of order zero** ($J_0$), which has oscillations that cause ringing.
    *   **Not Physically Realizable:** An ideal filter with a sharp cutoff is not physically realizable in the real world because it would require an infinitely sharp transition, which is impossible.

*   **Example:** Imagine a circular window in the frequency domain. Everything inside the circle (low frequencies) is kept as is, and everything outside (high frequencies) is set to zero.

**Reference:** Gonzalez & Woods (4th Ed.), Chapter 4.2.2: "Ideal Lowpass Filters", Pratt (2007), Chapter 7: "Image Filtering".

**4.2. Butterworth Low-Pass Filter (BLPF)**

*   **Definition:** The BLPF has a smooth transition between the passband and stopband. It avoids the ringing artifacts of the ILPF.
*   **Filter Function:**
    $$H(u, v) = \frac{1}{1 + \left(\frac{D(u, v)}{D_0}\right)^{2n}}$$
    where:
    *   $D_0$ is the cutoff frequency (defined as the frequency at which $H(u, v) = 0.5$).
    *   $n$ is the **order** of the filter. A higher order $n$ results in a sharper transition, making it behave more like an ILPF but still without the severe ringing.

*   **Characteristics:**
    *   **Smooth Transition:** The gradual change in the filter response reduces ringing artifacts.
    *   **Controllable Sharpness:** The order $n$ allows control over how sharp the cutoff is.
    *   **Monotonic:** The response is monotonically decreasing.

*   **Example:** For $n=1$, the BLPF has a gradual roll-off. As $n$ increases, the filter becomes more selective, approaching the ideal filter's behavior but with less ringing.

**Reference:** Gonzalez & Woods (4th Ed.), Chapter 4.2.3: "Butterworth Lowpass Filters", Jayaraman et al. (1st Ed.), Chapter 4: "Image Enhancement - Frequency Domain".

**4.3. Gaussian Low-Pass Filter (GLPF)**

*   **Definition:** The GLPF uses a Gaussian function to define the filter's response in the frequency domain. This results in a very smooth transition.
*   **Filter Function:**
    $$H(u, v) = e^{-\frac{1}{2} \left(\frac{D(u, v)}{D_0}\right)^2}$$
    where:
    *   $D_0$ is the standard deviation of the Gaussian function. It controls the degree of smoothing.

*   **Characteristics:**
    *   **Extremely Smooth Transition:** The Gaussian filter has no ringing artifacts because its transition is very gradual.
    *   **No Sharp Cutoff:** Because the filter approaches zero asymptotically, there isn't a definitive cutoff frequency in the same sense as the ILPF or BLPF. However, $D_0$ still serves as a parameter to control the bandwidth.
    *   **Physically Realizable:** The Gaussian filter is considered physically realizable.
    *   **Spatial Domain Equivalent:** The spatial domain equivalent of a Gaussian filter is also a Gaussian function. This is a unique and desirable property, as applying a Gaussian smoothing in the frequency domain is equivalent to applying a Gaussian convolution in the spatial domain.

*   **Example:** A smaller $D_0$ will result in a wider Gaussian in the frequency domain, meaning more high frequencies are passed, leading to less smoothing. A larger $D_0$ will narrow the Gaussian in the frequency domain, attenuating more high frequencies and resulting in greater smoothing.

**Reference:** Gonzalez & Woods (4th Ed.), Chapter 4.2.4: "Gaussian Lowpass Filters", Castleman (2003), Chapter 9.

---

### 5. Frequency Domain vs. Spatial Domain Smoothing

Both spatial and frequency domain methods can be used for smoothing. However, there are differences:

| Feature             | Spatial Domain Smoothing (e.g., Mean, Median Filter)

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
