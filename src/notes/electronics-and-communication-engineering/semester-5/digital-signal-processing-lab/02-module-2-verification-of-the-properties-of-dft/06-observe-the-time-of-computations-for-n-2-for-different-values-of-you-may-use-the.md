---
title: "Observe the time of computations for N = 2σ for different values of σ. (You may use 
the time module in Python)."
subject: "DIGITAL SIGNAL PROCESSING LAB"
module: "Module 2: Verification of the Properties of DFT"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec33"
status: "completed"
scrapedAt: "2026-05-23T17:55:54.759Z"
---
## Digital Signal Processing Lab: Module 2 - Verification of the Properties of DFT

### Topic: Observation of Computation Time for N = 2<sup>σ</sup> for Different Values of σ

**Course Outcomes Alignment:**

*   **CO2: Verify the properties of DFT (Knowledge Level: K2)** - This topic directly contributes to verifying the computational efficiency of the DFT, a key property.

**Learning Outcomes:**

*   Understand the computational complexity of the DFT.
*   Observe how the computation time of the DFT scales with the input signal length (N).
*   Analyze the impact of powers of 2 for the input signal length on DFT computation time.
*   Utilize Python's `time` module for performance measurement.

---

### 1. Introduction to the Discrete Fourier Transform (DFT)

The **Discrete Fourier Transform (DFT)** is a fundamental tool in digital signal processing that converts a finite sequence of discrete-time data points into a sequence of frequency-domain components. It allows us to analyze the frequency content of a signal.

**Key Concept:**

*   **DFT Definition:** For a finite sequence of $N$ samples, $x[n]$, its DFT, $X[k]$, is defined as:
    $$ X[k] = \sum_{n=0}^{N-1} x[n] e^{-j \frac{2\pi}{N} nk} \quad \text{for } k = 0, 1, \dots, N-1 $$

**Textbook Reference:**
*   **Ingle & Proakis (3rd Ed., 2011):** Chapter 1, "Introduction to Digital Signal Processing" and Chapter 2, "The Discrete-Time Fourier Transform." The DFT is introduced as a discrete-time counterpart to the continuous-time Fourier Transform.
*   **Downey (1st Ed., 2019):** Chapter 3, "Fourier Transforms." Downey emphasizes understanding the DFT conceptually and its relationship to the continuous Fourier Transform.

---

### 2. Computational Complexity of the DFT

Directly computing the DFT using its definition involves a nested loop structure. For each of the $N$ frequency components ($k$), we sum $N$ terms. Each term involves a complex multiplication and a complex addition.

**Key Concept:**

*   **Direct DFT Computation Complexity:** The direct computation of the DFT has a time complexity of **O(N<sup>2</sup>)**. This means that as the number of samples $N$ increases, the number of computations grows quadratically.

**Example:**
If $N=10$, we perform approximately $10 \times 10 = 100$ complex multiplications and additions.
If $N=100$, we perform approximately $100 \times 100 = 10000$ complex multiplications and additions.

**Textbook Reference:**
*   **Ingle & Proakis (3rd Ed., 2011):** Chapter 7, "Fast Fourier Transform Algorithms." This chapter will delve deeper into the computational aspects and introduce efficient algorithms.
*   **Chassaing (2/e, 2008):** Chapter 4, "The Fast Fourier Transform (FFT)." This book provides practical insights into FFT implementation and its advantages.

---

### 3. The Fast Fourier Transform (FFT) Algorithm

The computational bottleneck of the direct DFT calculation led to the development of the **Fast Fourier Transform (FFT)** algorithms. The FFT is not a different transform but an efficient method for computing the DFT.

**Key Concept:**

*   **FFT Algorithm Efficiency:** The most common FFT algorithms, such as the Cooley-Tukey algorithm, achieve a time complexity of **O(N log N)**. This is a significant improvement over the O(N<sup>2</sup>) complexity of the direct DFT, especially for large $N$.

**The Significance of N = 2<sup>σ</sup>:**
Many popular FFT algorithms, like the radix-2 Cooley-Tukey algorithm, are most efficient when the input signal length $N$ is a power of 2. This is because these algorithms decompose the DFT of size $N$ into smaller DFTs, and a power of 2 allows for a balanced decomposition into radix-2 subproblems.

**Textbook Reference:**
*   **Ingle & Proakis (3rd Ed., 2011):** Chapter 7, "Fast Fourier Transform Algorithms." This is the primary resource for understanding the mathematical basis of FFT.
*   **Oppenheim & Schafer (4th Ed., 2018):** Chapter 7, "The Fast Fourier Transform Algorithms." Offers a comprehensive theoretical treatment of various FFT algorithms.
*   **Downey (1st Ed., 2019):** Chapter 6, "FFT." Downey provides a more intuitive explanation of how the FFT works by breaking down the DFT.

---

### 4. Practical Implementation and Time Measurement in Python

We will use Python to implement the DFT and measure the computation time for different values of $N$ that are powers of 2.

**Key Concepts:**

*   **Python `numpy.fft.fft`:** This function in the NumPy library efficiently computes the DFT using an FFT algorithm.
*   **Python `time` Module:** The `time` module provides functions to measure elapsed time. The `time.time()` function returns the current time in seconds since the epoch.

**Steps for Implementation:**

1.  **Import necessary libraries:** `numpy` for numerical operations and DFT, `time` for timing.
2.  **Generate a test signal:** A simple signal, such as a sine wave or random noise, can be used. The length of this signal will be $N$.
3.  **Choose values for σ:** Select a range of values for $\sigma$ (e.g., 5, 6, 7, 8, 9, 10, 11, 12, 13, 14). This will result in $N$ values of $2^\sigma$.
4.  **Loop through different N values:** For each $N = 2^\sigma$:
    *   Generate a signal of length $N$.
    *   Record the start time using `time.time()`.
    *   Compute the DFT using `numpy.fft.fft(signal)`.
    *   Record the end time using `time.time()`.
    *   Calculate the elapsed time: `end_time - start_time`.
    *   Store or print the value of $N$ and the corresponding computation time.
5.  **Analyze the results:** Plot the computation time versus $N$ or $N \log N$ to observe the scaling.

**Python Code Snippet (Illustrative):**

```python
import numpy as np
import time
import matplotlib.pyplot as plt

# Range of sigma values
sigma_values = range(5, 15)
N_values = [2**sigma for sigma in sigma_values]

computation_times = []
actual_N_values = []

for N in N_values:
    # Generate a test signal (e.g., a sine wave)
    fs = 1000 # Sampling frequency
    t = np.arange(N) / fs
    signal = np.sin(2 * np.pi * 50 * t) + 0.5 * np.sin(2 * np.pi * 120 * t) # Example signal

    # Measure computation time for DFT
    start_time = time.time()
    Xk = np.fft.fft(signal) # Compute DFT using NumPy's FFT
    end_time = time.time()

    elapsed_time = end_time - start_time
    computation_times.append(elapsed_time)
    actual_N_values.append(N)

    print(f"N = {N}: Computation time = {elapsed_time:.6f} seconds")

# Plotting the results
plt.figure(figsize=(10, 6))
plt.plot(actual_N_values, computation_times, marker='o')
plt.xlabel("Signal Length (N)")
plt.ylabel("Computation Time (seconds)")
plt.title("DFT Computation Time vs. Signal Length (N = 2^σ)")
plt.grid(True)
plt.xscale('log', base=2) # Log scale for N might be useful if ranges are very large
plt.yscale('log') # Log scale for time to see trends clearly
plt.show()

# Optional: Plotting N log N for comparison
# n_log_n = [N * np.log2(N) for N in actual_N_values]
# plt.figure(figsize=(10, 6))
# plt.plot(actual_N_values, n_log_n, marker='o', linestyle='--')
# plt.xlabel("Signal Length (N)")
# plt.ylabel("N log N (arbitrary units)")
# plt.title("N log N vs. Signal Length")
# plt.grid(True)
# plt.xscale('log', base=2)
# plt.yscale('log')
# plt.show()

```

**Textbook Reference:**
*   **Downey (1st Ed., 2019):** Chapter 6, "FFT." Downey's book is particularly good for practical Python implementations and understanding the code.
*   **Chassaing (2/e, 2008):** Chapter 4, "The Fast Fourier Transform (FFT)." Provides C-based examples, which can be conceptually mapped to Python implementations.

---

### 5. Expected Observations and Analysis

When you run the Python code, you should observe the following:

*   **Increasing Computation Time:** As $N$ increases, the computation time will generally increase.
*   **Logarithmic Growth:** The increase in computation time will not be linear or quadratic, but rather closer to $N \log N$. When plotted on a log-log scale, the relationship should appear roughly linear.
*   **Efficiency for Powers of 2:** While the NumPy implementation is highly optimized, the underlying FFT algorithms are designed to be most efficient for powers of 2. You might notice slight variations if you were to test non-power-of-2 lengths, but for this experiment, focusing on $N = 2^\sigma$ isolates the effect of $N$ itself.

**Analysis Points:**

*   **Compare observed time with O(N<sup>2</sup>) and O(N log N):** Even without calculating the exact operations, the visual trend on the plot should clearly indicate a sub-quadratic growth.
*   **Why are powers of 2 important?** The recursive nature of radix-2 FFT algorithms leads to a balanced decomposition, minimizing overhead and maximizing efficiency when $N$ is a power of 2. If $N$ is not a power of 2, the algorithm might need to pad the signal or use more complex mixed-radix algorithms, which can add some overhead.

**Textbook Reference:**
*   **Ingle & Proakis (3rd Ed., 2011):** Chapter 7. This chapter will provide the theoretical underpinnings for why FFT algorithms are efficient and why powers of 2 are advantageous.
*   **Oppenheim & Schafer (4th Ed., 2018):** Chapter 7. Detailed discussion on the complexity analysis of FFT algorithms.

---

### 6. Practice Questions and Exercises

**Question 1:**
What is the time complexity of the direct DFT computation? Explain why.
**Answer:** The time complexity of the direct DFT computation is $O(N^2)$. This is because, for each of the $N$ output points $X[k]$, we perform a summation of $N$ terms, each involving a complex multiplication and addition. Thus, the total number of operations is proportional to $N \times N$.

**Question 2:**
What is the time complexity of the Fast Fourier Transform (FFT) algorithm? How does it improve upon the direct DFT computation?
**Answer:** The time complexity of the FFT algorithm is $O(N \log N)$. It improves upon the direct DFT by cleverly reusing computed values and breaking down the larger DFT into smaller DFTs, significantly reducing the number of complex multiplications and additions required.

**Question 3:**
Why is $N$ being a power of 2 often preferred for FFT algorithms?
**Answer:** Many efficient FFT algorithms, like the radix-2 Cooley-Tukey algorithm, are designed to recursively divide the DFT of size $N$ into two DFTs of size $N/2$. This recursive structure is most balanced and efficient when $N$ is repeatedly divisible by 2, i.e., when $N$ is a power of 2. This allows for a clean decomposition without requiring complex padding or mixed-radix approaches.

**Question 4:**
Consider the following Python code snippet. What output would you expect for the computation times as $N$ increases?

```python
import numpy as np
import time

N_small = 128
N_large = 8192 # N_large is significantly larger than N_small

signal_small = np.random.rand(N_small)
signal_large = np.random.rand(N_large)

start_time_small = time.time()
np.fft.fft(signal_small)
end_time_small = time.time()
time_small = end_time_small - start_time_small

start_time_large = time.time()
np.fft.fft(signal_large)
end_time_large = time.time()
time_large = end_time_large - start_time_large

print(f"Time for N={N_small}: {time_small:.6f}s")
print(f"Time for N={N_large}: {time_large:.6f}s")
```

**Answer:**
You would expect `time_large` to be significantly greater than `time_small`. Furthermore, the ratio of `time_large / time_small` would be roughly proportional to $(N_{large} \log N_{large}) / (N_{small} \log N_{small})$. Since $N_{large} = 8192 = 2^{13}$ and $N_{small} = 128 = 2^7$, $N_{large}$ is $2^{13-7} = 2^6 = 64$ times larger than $N_{small}$. The $N \log N$ relationship suggests the time will increase much more than linearly, but significantly less than quadratically.

**Question 5 (Lab Exercise):**
Modify the Python code provided in Section 4.
a. Instead of a sine wave, use a random signal generated by `np.random.rand(N)`. Does the observation about computation time change significantly?
b. Experiment with a range of $\sigma$ values such that $N$ is *not* a power of 2 (e.g., $N=100, 200, 300$). How does the computation time compare to the nearest powers of 2? (Note: `numpy.fft.fft` handles non-power-of-2 lengths efficiently, but the underlying algorithms might have slightly different performance characteristics).
c. Plot the computation time on a linear y-axis and N on a log base 2 x-axis. Describe the shape of the curve.

**Answers to Lab Exercise:**
a. Using a random signal typically doesn't change the fundamental observation about computation time scaling. The computational cost is dominated by the number of operations on the data points, not the specific values of those points.
b. For non-power-of-2 lengths, NumPy's FFT implementation might use mixed-radix FFT algorithms or zero-padding internally. You might observe that the computation times for non-power-of-2 lengths are slightly higher than for the closest power of 2, or that the scaling is less perfectly smooth. However, the $O(N \log N)$ trend will likely still hold. The exact behavior can depend on the specific FFT implementation within NumPy.
c. When plotting computation time on a linear y-axis and $N$ on a log base 2 x-axis, the curve should appear roughly linear. This is because the relationship is approximately $T \propto N \log N$. Taking $\log_2$ of $N$ on the x-axis linearizes the $\log N$ term, and if we were to also take the log of the time on the y-axis, we'd expect a straight line. On a linear y-axis with log x-axis, the curve will have a characteristic upward bend.

---

### 7. Important Points to Remember

*   **DFT Complexity:** Direct computation is $O(N^2)$.
*   **FFT Efficiency:** FFT algorithms compute the DFT in $O(N \log N)$ time.
*   **Powers of 2:** FFT algorithms are often optimized for $N$ being a power of 2 due to their recursive, divide-and-conquer nature.
*   **Python `numpy.fft.fft`:** Use this function for efficient DFT computation in Python.
*   **Python `time` Module:** Use `time.time()` to measure execution duration.
*   **Observation:** The computation time grows significantly faster than linearly but much slower than quadratically with $N$.

---

**Course Outcome Contribution:**

*   **CO2: Verify the properties of DFT (Knowledge Level: K2)** - By conducting this experiment, students directly verify the computational efficiency property of the DFT (specifically how its computation time scales), understanding the advantage of FFT over direct DFT. This knowledge is foundational for applying DFT effectively in signal processing tasks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
