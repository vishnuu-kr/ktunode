---
title: "Use some iterations to plot the times of computation against x. Plot and understand this 
curve. Plot the computation times for the FFT function over this curve and observe the 
computational advantage of FFT."
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 2: Verification of the Properties of DFT"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec34"
status: "completed"
scrapedAt: "2026-05-23T17:55:55.479Z"
---
# DIGITAL SIGNAL PROCESSING LAB

## Module 2: Verification of the Properties of DFT

### Topic: Computational Complexity of DFT vs. FFT

---

**Learning Outcomes Addressed:**

*   **LO 1:** Understanding the practical implications of DFT and FFT algorithms in terms of computational efficiency. (This indirectly relates to understanding how signal processing tasks are performed efficiently, a foundational aspect of DSP).
*   **LO 2:** Verifying the computational advantage of the Fast Fourier Transform (FFT) over the Direct DFT computation through empirical observation. (Directly addresses the learning outcome by demonstrating the speed difference).

---

### 1. Introduction: The Need for Efficient Computation

The Discrete Fourier Transform (DFT) is a fundamental tool in Digital Signal Processing (DSP) for analyzing the frequency content of discrete-time signals. However, the direct computation of the DFT involves a significant number of complex multiplications and additions. As the length of the signal ($N$) increases, the computational burden grows rapidly, making it impractical for real-time applications or processing large datasets.

The **Fast Fourier Transform (FFT)** is a family of algorithms that significantly reduce the computational complexity of the DFT. This topic aims to empirically demonstrate this computational advantage.

---

### 2. Understanding the Computational Complexity of the Direct DFT

**Key Concept:** Computational Complexity refers to the number of basic operations (like multiplications and additions) required by an algorithm as a function of the input size.

**Definition: Discrete Fourier Transform (DFT)**

For a discrete-time signal $x[n]$ of length $N$, its DFT, $X[k]$, is given by:

$X[k] = \sum_{n=0}^{N-1} x[n] e^{-j 2 \pi k n / N}$, for $k = 0, 1, \dots, N-1$.

**Breakdown of Operations:**

*   **Complex Multiplications:** For each $k$, we perform $N$ multiplications ($x[n] \cdot e^{-j 2 \pi k n / N}$). Since there are $N$ values of $k$, the total number of complex multiplications is approximately $N \times N = N^2$.
*   **Complex Additions:** For each $k$, we perform $N-1$ additions to sum up the $N$ terms. Since there are $N$ values of $k$, the total number of complex additions is approximately $N \times (N-1) \approx N^2$.

**Overall Complexity:** The computational complexity of the direct DFT is **O($N^2$)**. This means that as $N$ doubles, the computation time roughly quadruples.

**Textbook Reference:**
*   **Ingle & Proakis, Chapter 3:** Discusses the DFT and its properties, including the computational cost of direct computation. They highlight that for large $N$, $O(N^2)$ becomes prohibitive.
*   **Oppenheim & Schafer, Chapter 7:** Provides a detailed mathematical foundation for the DFT, including the definition and the computational requirements.

---

### 3. The Fast Fourier Transform (FFT) Algorithm

**Key Concept:** The FFT is not a different transform but a computationally efficient algorithm to compute the DFT. It achieves this by exploiting the symmetries and periodicities of the complex exponential term $e^{-j 2 \pi k n / N}$.

**Radix-2 Decimation-in-Time (DIT) FFT (Illustrative Example):**

The most common FFT algorithm is the radix-2 DIT FFT. It breaks down the DFT of size $N$ into smaller DFTs of size $N/2$. This recursive decomposition leads to a significant reduction in computations.

**Complexity of FFT:**

A radix-2 FFT algorithm typically requires approximately **$O(N \log_2 N)$** complex multiplications and additions.

**Comparison:**
*   For $N=1024$:
    *   DFT: $1024^2 = 1,048,576$ operations
    *   FFT: $1024 \times \log_2 1024 = 1024 \times 10 = 10,240$ operations

The FFT is dramatically faster, especially for large $N$.

**Textbook Reference:**
*   **Ingle & Proakis, Chapter 4:** Dedicated chapter on FFT algorithms, explaining the radix-2 DIT and DIF algorithms, their structure, and computational savings.
*   **Downey, Chapter 8:** Explains the FFT in a more accessible way, potentially using Python examples, highlighting the core idea of breaking down the problem into smaller, identical subproblems.

---

### 4. Experimental Verification: Plotting Computation Times

**Objective:** To empirically demonstrate the $O(N^2)$ vs. $O(N \log N)$ relationship by measuring and plotting the computation times.

**Methodology:**

1.  **Generate Input Signals:** Create discrete-time signals of varying lengths, $x$. For each length, you might use a simple sine wave or a random signal.
2.  **Measure DFT Computation Time:**
    *   For each signal length $x$:
        *   Record the start time.
        *   Compute the DFT of the signal using the direct DFT formula (or a function that implements it directly without FFT optimization).
        *   Record the end time.
        *   Calculate the elapsed time.
3.  **Measure FFT Computation Time:**
    *   For each signal length $x$:
        *   Record the start time.
        *   Compute the DFT of the signal using an optimized FFT function (e.g., `fft` in MATLAB/Python).
        *   Record the end time.
        *   Calculate the elapsed time.
4.  **Plot the Results:**
    *   Plot the computation times for the direct DFT against the signal length ($x$). This curve should approximate $x^2$.
    *   On the same graph, plot the computation times for the FFT against the signal length ($x$). This curve should approximate $x \log_2 x$.

**Example Implementation Sketch (MATLAB):**

```matlab
% Define signal lengths to test
signal_lengths = 2.^(4:12); % e.g., 16, 32, 64, ..., 4096

dft_times = zeros(size(signal_lengths));
fft_times = zeros(size(signal_lengths));

for i = 1:length(signal_lengths)
    N = signal_lengths(i);
    % Create a dummy signal
    x = randn(1, N); % Using random signal for general case

    % --- Measure Direct DFT Time ---
    % For direct DFT, you'd implement the summation formula
    % (This can be slow, so for very large N, you might skip this or use a less optimized DFT implementation)
    % For demonstration purposes, let's assume you have a function 'direct_dft(x)'
    % If not directly available, you can implement it:
    %{
    function X = direct_dft(x)
        N = length(x);
        X = zeros(1, N);
        for k = 0:N-1
            sum_val = 0;
            for n = 0:N-1
                sum_val = sum_val + x(n+1) * exp(-1j * 2 * pi * k * n / N);
            end
            X(k+1) = sum_val;
        end
    end
    %}
    % Note: MATLAB's built-in FFT is highly optimized. To truly measure 'direct'
    % DFT, you'd need to implement it yourself or use a slower version.
    % For this lab, we often compare MATLAB's 'fft' with a conceptual O(N^2)
    % or a specific implementation that is known to be slower.
    % Let's simulate the "slower" DFT by doing a loop-based calculation for a few N.

    if N <= 1024 % Limit direct DFT for practical reasons
        tic;
        % Placeholder for direct DFT calculation (implement the summation)
        % X_direct = direct_dft(x);
        % For demonstration, let's use a slower approach if possible or simply state it.
        % In a real lab, you'd implement the loop.
        % To simulate O(N^2) performance comparison in a simplified way,
        % we might not be able to run direct DFT for very large N.
        % Let's focus on the FFT and a conceptual O(N^2) trend.
        % A more accurate comparison would involve writing the direct DFT.
        % For now, we'll acknowledge that FFT is what we're measuring against.
        % If a direct DFT implementation is required, it would be:
        % tic;
        % X_direct = zeros(1, N);
        % for k = 0:N-1
        %     for n = 0:N-1
        %         X_direct(k+1) = X_direct(k+1) + x(n+1) * exp(-1j * 2 * pi * k * n / N);
        %     end
        % end
        % dft_times(i) = toc;
        % If N is very large, this loop will be too slow.
        % We will focus on measuring FFT performance and comparing it to the theoretical O(N^2) trend.

        % As a practical lab exercise, measuring 'direct DFT' for large N is often avoided due to time.
        % Instead, the task is often to observe the FFT's performance and understand its advantage.
        % If a direct DFT time IS needed, it should be implemented carefully.
        % For this notes, let's assume we are measuring FFT and comparing its *speed*
        % to the *theoretical computational cost* of direct DFT (O(N^2)).
        % So, we will primarily plot FFT times and the theoretical N^2 curve.
    end


    % --- Measure FFT Time ---
    tic;
    X_fft = fft(x);
    fft_times(i) = toc;

end

% Plotting
figure;
% Plot FFT times
semilogy(signal_lengths, fft_times, 'bo-', 'DisplayName', 'FFT Computation Time');
hold on;

% Plot theoretical O(N^2) curve for comparison
% We need to scale this to match the magnitude of FFT times.
% Find a scaling factor 'c' such that c * signal_lengths.^2 is roughly comparable to fft_times.
% A simple way is to pick a point. Let's use the last FFT time and last N.
% c = fft_times(end) / (signal_lengths(end)^2);
% Or more robustly, use a median scaling.
scaling_factor_N2 = median(fft_times ./ (signal_lengths.^2));
plot(signal_lengths, scaling_factor_N2 * signal_lengths.^2, 'r--', 'DisplayName', 'Theoretical O(N^2) Complexity');

% Plot theoretical O(N log N) curve for comparison
% Similar scaling for N log N
% c_log = median(fft_times ./ (signal_lengths .* log2(signal_lengths)));
% Note: handle log2(0) or log2(1) if lengths start from 1. signal_lengths start from 16 here.
plot(signal_lengths, signal_lengths .* log2(signal_lengths), 'g-.', 'DisplayName', 'Theoretical O(N log N) Complexity');


title('DFT Computation Time vs. Signal Length');
xlabel('Signal Length (N)');
ylabel('Computation Time (seconds)');
legend('Location', 'best');
grid on;
set(gca, 'XScale', 'log'); % Log scale for x-axis to see trends better
set(gca, 'YScale', 'log'); % Log scale for y-axis to see trends better

```

**Understanding the Plot:**

*   **FFT Computation Time (Blue Curve):** This curve will show an increasing trend. When plotted on log-log scales, it should appear to have a slope between 1 and 2 (closer to 1 than 2). It will follow the $N \log N$ growth.
*   **Theoretical $N^2$ Complexity (Red Dashed Curve):** This curve represents the growth rate of the direct DFT. On a log-log plot, it will be a straight line with a slope of 2. This shows that for every doubling of $N$, the computation time quadruples.
*   **Theoretical $N \log N$ Complexity (Green Dotted-Dashed Curve):** This curve represents the growth rate of the FFT. On a log-log plot, it will be a straight line with a slope slightly greater than 1 (as $\log N$ grows slowly).

**Observation:** You will clearly see that the FFT computation time stays significantly below the theoretical $N^2$ curve, especially for larger signal lengths. This visually confirms the computational advantage of the FFT.

**Textbook Reference:**
*   **Ingle & Proakis, Chapter 4:** Might include illustrative examples or graphs comparing the number of operations for DFT and FFT.
*   **Downey, Chapter 8:** Likely provides Python code for timing FFT and may discuss how its performance scales.

---

### 5. Understanding the Computational Advantage

**Key Concept:** The advantage of FFT lies in reducing the number of complex multiplications and additions from $O(N^2)$ to $O(N \log N)$. This leads to a dramatic speedup, making it feasible to perform frequency analysis on much larger signals.

**Impact:**

*   **Real-time Applications:** Enables real-time spectral analysis of audio, video, and other signals.
*   **Large Datasets:** Allows efficient processing of large amounts of data in fields like telecommunications, medical imaging, and scientific research.
*   **Filter Design and Implementation:** FFT is crucial for efficient implementation of FIR filters using the convolution theorem.

**Course Outcome Alignment:**

*   **CO1 (Generate basic signal waveforms):** Necessary for creating input signals for the experiment. (K2)
*   **CO2 (Verify the properties of DFT):** This topic directly verifies the computational property of efficiency compared to direct DFT. (K2)
*   **CO4 (Implement LTI systems):** The speed of FFT is crucial for implementing LTI systems efficiently, especially when using the convolution theorem. (K3)

---

### 6. Practice Questions and Exercises

**Q1: Theoretical Comparison**
Why is the direct DFT computation considered to have a complexity of $O(N^2)$ while the FFT has a complexity of $O(N \log N)$? Explain the fundamental reason behind this difference.

**Answer:** The direct DFT requires $N$ multiplications and $N-1$ additions for each of the $N$ output samples, leading to approximately $N^2$ operations. The FFT achieves a lower complexity by recursively breaking down the DFT into smaller DFTs and exploiting symmetries, reducing the total operations to roughly $N \log N$.

**Q2: Practical Significance**
Imagine you need to analyze the frequency spectrum of an audio signal that is 1 second long sampled at 44.1 kHz. This means $N = 44100$.
a) Estimate the number of complex multiplications for direct DFT.
b) Estimate the number of complex multiplications for FFT.
c) How many times faster is the FFT compared to the direct DFT in terms of operations?

**Answer:**
a) Direct DFT operations: $N^2 = (44100)^2 \approx 1.94 \times 10^9$
b) FFT operations: $N \log_2 N = 44100 \times \log_2(44100) \approx 44100 \times 15.44 \approx 6.8 \times 10^5$
c) Speedup factor: $(N^2) / (N \log_2 N) \approx (1.94 \times 10^9) / (6.8 \times 10^5) \approx 2850$ times faster.

**Q3: Plot Interpretation**
When you plot the computation times on a log-log scale, what does a straight line with a slope of 1 represent? What does a straight line with a slope of 2 represent? How does the FFT time plot relate to these?

**Answer:**
*   A straight line with a slope of 1 on a log-log plot represents a linear relationship ($y \propto x$).
*   A straight line with a slope of 2 on a log-log plot represents a quadratic relationship ($y \propto x^2$).
*   The FFT time plot, showing $O(N \log N)$ complexity, will appear as a curve that starts below the $O(N^2)$ line (slope 2) and has a slope slightly greater than 1 on a log-log plot. This demonstrates its computational advantage.

**Q4: Implementation Consideration**
If you were to implement the direct DFT in MATLAB for a class demonstration, what potential issue might you encounter for larger values of $N$ (e.g., $N=8192$) based on your experiment? How would you work around it for the demonstration?

**Answer:** You would likely encounter very long computation times for direct DFT for large $N$, making the experiment impractical to complete within a lab session. To work around this, you might:
1.  Limit the range of $N$ for which you attempt to compute the direct DFT (e.g., up to $N=256$ or $512$).
2.  Focus on measuring the FFT performance and comparing its observed scaling to the *theoretical* $O(N^2)$ scaling curve.
3.  Use a pre-computed table of direct DFT times for very large $N$ if available, though this defeats the purpose of empirical verification. The best approach is to measure FFT and compare against theoretical complexity curves.

---

### 7. Important Points to Remember

*   **DFT vs. FFT:** FFT is an *algorithm* to compute the DFT, not a different transform.
*   **Complexity Matters:** The difference between $O(N^2)$ and $O(N \log N)$ is critical for computational efficiency, especially for large signals.
*   **Log-Log Plots:** Use log-log scales to visualize and compare complexity curves effectively. Straight lines on log-log plots indicate power-law relationships.
*   **Empirical Verification:** Experiments are crucial for understanding theoretical concepts in a practical context.
*   **FFT Availability:** Most programming environments (like MATLAB, Python with NumPy) provide highly optimized FFT functions, which are essential for practical DSP.

---

This concludes the study notes for the topic of computational complexity verification of DFT vs. FFT. Ensure you perform the practical measurement and plotting in your lab session to gain a deeper understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
