---
title: "MAC"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 4: Efficient Computation of DFT: Fast Fourier Transform and computational 
advantage over DFT"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe9a0"
status: "completed"
scrapedAt: "2026-05-23T17:55:41.439Z"
---
# Module 4: Efficient Computation of DFT: Fast Fourier Transform and Computational Advantage over DFT

## Topic: MAC (Multiply-Accumulate) Operation

### 1. Introduction to MAC Operation

The Multiply-Accumulate (MAC) operation is a fundamental building block in digital signal processing (DSP) and many other computational fields. It combines a multiplication and an addition into a single, atomic operation. This seemingly simple operation is incredibly powerful and forms the core of many algorithms, including the Discrete Fourier Transform (DFT) and its efficient counterpart, the Fast Fourier Transform (FFT).

*   **Definition:** A MAC operation computes $a \times b + c$, where $a$, $b$, and $c$ are typically numbers (real or complex). The result of the multiplication $(a \times b)$ is then added to the accumulator ($c$).

*   **Significance in DSP:** Many DSP operations, such as convolution, correlation, and filtering, can be expressed as a series of MAC operations. For example, the output of a Finite Impulse Response (FIR) filter is calculated as:

    $y[n] = \sum_{k=0}^{M-1} h[k] x[n-k]$

    This summation is essentially a sequence of MAC operations:
    $y[n] = h[0]x[n] + h[1]x[n-1] + ... + h[M-1]x[n-M+1]$

*   **Computational Advantage:** The efficiency of MAC operations is crucial for real-time DSP. Dedicated hardware units called MAC units are designed to perform this operation very quickly, often in a single clock cycle. This significantly speeds up computations compared to performing multiplication and addition as separate operations.

### 2. The MAC Operation and DFT

The Discrete Fourier Transform (DFT) of a sequence $x[n]$ of length $N$ is given by:

$X[k] = \sum_{n=0}^{N-1} x[n] e^{-j2\pi kn/N}$, for $k = 0, 1, ..., N-1$

Let's break down the computation for a single $X[k]$:

$X[k] = x[0] e^{-j2\pi k(0)/N} + x[1] e^{-j2\pi k(1)/N} + x[2] e^{-j2\pi k(2)/N} + ... + x[N-1] e^{-j2\pi k(N-1)/N}$

$X[k] = x[0] \cdot w_N^{0k} + x[1] \cdot w_N^{1k} + x[2] \cdot w_N^{2k} + ... + x[N-1] \cdot w_N^{(N-1)k}$

where $w_N = e^{-j2\pi/N}$ is the twiddle factor.

Each term in the summation is a product: $x[n] \cdot w_N^{nk}$. To compute $X[k]$, we sum up $N$ such products. This can be seen as a series of MAC operations:

*   Initialize accumulator to 0.
*   For $n=0$: $0 + x[0] \cdot w_N^{0k}$
*   For $n=1$: (previous result) $+ x[1] \cdot w_N^{1k}$
*   ...
*   For $n=N-1$: (previous result) $+ x[N-1] \cdot w_N^{(N-1)k}$

**Computational Cost of DFT:**

*   To compute one DFT coefficient $X[k]$, we need $N$ complex multiplications and $N-1$ complex additions.
*   Since there are $N$ DFT coefficients ($k=0$ to $N-1$), the total number of complex multiplications is $N \times N = N^2$.
*   The total number of complex additions is $N \times (N-1) \approx N^2$.

Therefore, the direct computation of the DFT requires approximately $N^2$ complex multiplications and $N^2$ complex additions.

### 3. The MAC Operation and FFT

The Fast Fourier Transform (FFT) is an algorithm that significantly reduces the computational complexity of computing the DFT. The most common FFT algorithm is the radix-2 Cooley-Tukey algorithm, which recursively breaks down an $N$-point DFT into smaller DFTs.

**The Butterfly Operation:**

At the heart of the radix-2 FFT algorithm is the "butterfly" operation. A basic radix-2 butterfly takes two complex inputs, say $A$ and $B$, and produces two complex outputs, $Y_1$ and $Y_2$:

$Y_1 = A + B \cdot W_N^m$
$Y_2 = A - B \cdot W_N^m$

where $W_N^m$ is a twiddle factor.

Notice that this butterfly operation involves:
1.  One complex multiplication: $B \cdot W_N^m$
2.  One complex addition: $A + (B \cdot W_N^m)$
3.  One complex subtraction: $A - (B \cdot W_N^m)$

These three operations can be viewed as performing two MAC-like operations if we consider the addition and subtraction separately. However, often the multiplication and addition/subtraction are grouped.

**Computational Cost of FFT:**

For an $N$-point DFT (where $N$ is a power of 2, $N = 2^p$):

*   The radix-2 FFT algorithm performs approximately $N/2$ butterfly operations at each stage.
*   There are $p = \log_2 N$ stages.
*   Each butterfly requires one complex multiplication and two complex additions.

Total complex multiplications: $(N/2) \times \log_2 N \approx \frac{N}{2} \log_2 N$.
Total complex additions: $N \times \log_2 N \approx N \log_2 N$.

**Computational Advantage:**

Comparing the DFT and FFT:

| Operation                 | DFT Complexity       | FFT Complexity (Radix-2) | Advantage (Ratio) |
| :------------------------ | :------------------- | :----------------------- | :---------------- |
| Complex Multiplications   | $N^2$                | $\frac{N}{2} \log_2 N$   | $\frac{N}{\log_2 N}$ |
| Complex Additions         | $N^2$                | $N \log_2 N$             | $\frac{N}{\log_2 N}$ |

For large $N$, the $\frac{N}{\log_2 N}$ factor represents a substantial computational saving.

**Example:** For $N=1024$:
*   DFT multiplications: $1024^2 = 1,048,576$
*   FFT multiplications: $\frac{1024}{2} \log_2 1024 = 512 \times 10 = 5,120$

The FFT is approximately $1,048,576 / 5,120 \approx 205$ times faster than the DFT for this example.

### 4. MAC in DSP Processors and Hardware Implementation

Modern Digital Signal Processors (DSPs) are specifically designed to accelerate signal processing computations. A key feature of their architecture is the presence of dedicated **MAC units**.

*   **Hardware MAC Unit:** A typical MAC unit in a DSP processor consists of a multiplier and an adder/accumulator. It can perform a multiplication and an accumulation in a single clock cycle. This is often referred to as a "single-cycle MAC."

*   **Benefits of Hardware MACs:**
    *   **Speed:** Significantly reduces the time required for computations involving multiplications and additions.
    *   **Efficiency:** Decreases the number of clock cycles needed for algorithms.
    *   **Power Saving:** Can be more power-efficient than performing the operations separately.
    *   **Pipelining:** MAC units are often designed to be pipelined, allowing new operations to begin before previous ones are completed, further increasing throughput.

*   **Impact on FFT Implementation:** The FFT algorithm, with its numerous multiplications and additions within butterfly operations, greatly benefits from hardware MAC units. The efficient execution of these basic operations is what makes real-time FFT processing feasible on DSP hardware.

### 5. Learning Outcomes Alignment

*   **CO1: Illustrate fundamental properties and relations relevant to DFT and solve basic problems involving DFT-based filtering methods.**
    *   Understanding the MAC operation is fundamental to understanding how DFT computations are structured. The $N^2$ complexity of the DFT arises directly from the repeated MAC-like operations within the summation.

*   **CO4: Compute DFT efficiently using FFT method and to explain the architecture of a DSP processor.**
    *   The MAC operation is the core computational element that the FFT algorithm optimizes. The computational advantage of FFT over DFT is precisely because it reorganizes the calculations to perform fewer MAC operations. The efficiency of DSP processors is largely due to their dedicated MAC hardware, which is perfectly suited for implementing FFT algorithms.

### 6. Key Concepts and Definitions

*   **MAC (Multiply-Accumulate):** A single operation that computes $a \times b + c$.
*   **Twiddle Factor:** Complex exponential term $e^{-j2\pi kn/N}$ used in DFT and FFT.
*   **Butterfly Operation:** The basic computational unit in radix-2 FFT algorithms, involving one multiplication and two additions/subtractions.
*   **DSP Processor:** A specialized microprocessor designed for efficient digital signal processing tasks.
*   **MAC Unit:** A dedicated hardware component in DSP processors that performs MAC operations in a single clock cycle.

### 7. Important Points to Remember

*   The MAC operation is a fundamental building block for many DSP algorithms, including convolution and correlation.
*   The direct computation of the DFT requires $O(N^2)$ complex multiplications and additions.
*   The FFT algorithm drastically reduces the computational complexity of the DFT to $O(N \log N)$.
*   This computational advantage of FFT over DFT stems from performing fewer MAC-like operations.
*   DSP processors heavily rely on hardware MAC units for their speed and efficiency.

### 8. Practice Questions/Exercises

**Question 1:**
What is the computational complexity of the DFT in terms of complex multiplications and additions?

**Answer 1:**
The DFT has a computational complexity of $O(N^2)$ complex multiplications and $O(N^2)$ complex additions for an $N$-point DFT.

**Question 2:**
Describe the basic butterfly operation in a radix-2 FFT algorithm. How many MAC operations (approximately) does it involve?

**Answer 2:**
The basic radix-2 butterfly takes inputs $A$ and $B$ and produces outputs $Y_1 = A + B \cdot W_N^m$ and $Y_2 = A - B \cdot W_N^m$. This involves one complex multiplication ($B \cdot W_N^m$) and two complex additions/subtractions. If we consider the multiplication and subsequent addition/subtraction as MAC-like operations, each butterfly effectively performs two such operations.

**Question 3:**
For an $N=8$ point DFT, how many complex multiplications are required for direct DFT computation and for FFT computation (using radix-2)?

**Answer 3:**
*   **Direct DFT:** $N^2 = 8^2 = 64$ complex multiplications.
*   **FFT (Radix-2):** $\frac{N}{2} \log_2 N = \frac{8}{2} \log_2 8 = 4 \times 3 = 12$ complex multiplications.

**Question 4:**
Why is the MAC operation important in the context of DSP processor architecture?

**Answer 4:**
The MAC operation is important because DSP processors contain dedicated hardware MAC units that can perform a multiplication and an accumulation in a single clock cycle. This significantly speeds up signal processing algorithms that are heavily reliant on these operations, such as FFT, convolution, and filtering.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 9. Textbooks and Reference Book Content Integration

This topic is foundational to understanding Module 4. The concepts of MAC operations are implicitly covered when discussing the computational structure of the DFT and FFT.

*   **Proakis & Ingle (3rd Ed.):** While not a specific section dedicated solely to "MAC," the discussions on the DFT formulation (Chapter 7 in earlier editions, similar sections in 3rd) will highlight the summations of products, which are performed via MACs. The FFT chapters will detail the butterfly structure and its computational savings, directly implying the efficiency gained from optimized MAC operations.

*   **Downey (2nd Ed.):** Downey's "Think DSP" emphasizes practical implementation and understanding. The book likely covers convolution and filtering, where the repeated application of the MAC operation is explicit. When moving to FFT, the reduction in operations will be explained as a consequence of reorganizing these MAC operations more efficiently.

*   **Oppenheim & Schafer (3rd Ed.):** This classic text provides a rigorous mathematical treatment. The computational complexity analysis of the DFT and FFT (likely in Chapters 7 and 8) will quantify the operations. The efficiency gains of FFT are directly tied to reducing the number of MAC operations, though the term "MAC" itself might be used more implicitly as a computational primitive.

*   **Reference Books (Apte, Mitra, Ifeachor & Jervis, Salivahanan):** These books will similarly cover the DFT and FFT algorithms. They will all emphasize the computational cost and the improvements offered by FFT. The underlying mechanism for these computations is the MAC operation, and the speed of DSPs is attributed to their specialized hardware, including MAC units. Mitra's "Computer based Approach" might offer more explicit details on hardware implementation aspects.

---