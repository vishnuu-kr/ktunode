---
title: "Reporting and Summarizing Performance"
subject: "ADVANCED COMPUTER ARCHITECTURE"
module: "Module 1: Introduction – The impact of hardware and software technology trends Self review – Instruction set Architecture"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b84a"
status: "completed"
scrapedAt: "2026-05-20T16:42:26.264Z"
---
# ADVANCED COMPUTER ARCHITECTURE - Module 1: Reporting and Summarizing Performance

These notes cover the topic of reporting and summarizing performance in the context of advanced computer architecture, focusing on the impact of hardware and software trends and reviewing instruction set architecture (ISA).

**Learning Outcomes:**

*   Understand the importance of performance metrics in computer architecture.
*   Learn different performance metrics and their limitations.
*   Learn how to summarize performance using different averaging methods (arithmetic, harmonic, geometric mean).
*   Understand Amdahl's Law and its implications for performance improvement.
*   Analyze and compare performance data for different systems.

## 1. Importance of Performance Metrics

*   **Why Measure Performance?**
    *   **Comparison:**  Compare different architectures, implementations, or algorithms.
    *   **Optimization:** Identify bottlenecks and optimize code/hardware accordingly.
    *   **Investment Decisions:**  Justify investments in new hardware or software.
    *   **Design Evaluation:** Evaluate design choices during the architecture development process.
    *   **User Experience:**  Ultimately, performance impacts user experience and satisfaction.

*   **What Affects Performance?**
    *   **Algorithm:** Choice of algorithm fundamentally affects performance.
    *   **Programming Language:** Language features, compilation efficiency, and available libraries matter.
    *   **Compiler:** Compiler optimization techniques significantly impact performance.
    *   **Instruction Set Architecture (ISA):** Instruction set design impacts code size and execution efficiency.
    *   **Microarchitecture:** Processor design, caching, pipelining, and parallelism play a key role.
    *   **Hardware:** Memory speed, storage capacity, and I/O bandwidth are critical.

## 2. Performance Metrics: Definitions and Limitations

*   **Execution Time (Latency):**
    *   **Definition:**  The total time taken to execute a program or task.  Also called response time.
    *   **Units:** Seconds, milliseconds, microseconds, etc.
    *   **Types:**
        *   **Elapsed Time (Wall Clock Time):**  Includes everything – I/O, OS overhead, idle time.
        *   **CPU Time:** Time spent executing instructions on the CPU (user CPU time + system CPU time).
    *   **Limitation:**  Elapsed time can be misleading due to OS overhead and other processes running concurrently. CPU time is a better indicator of program efficiency.

*   **Throughput:**
    *   **Definition:** The amount of work completed per unit of time.  Also called bandwidth.
    *   **Units:** Tasks/second, transactions/second, bits/second, etc.
    *   **Types:**
        *   **System Throughput:**  Total work done by the system.
        *   **Application Throughput:** Work done by a specific application.
    *   **Limitation:** Doesn't necessarily reflect the execution time of a single task.  High throughput can be achieved at the expense of individual task latency.

*   **Clock Rate (Frequency):**
    *   **Definition:** The speed at which the processor clock ticks.
    *   **Units:** Hertz (Hz), Megahertz (MHz), Gigahertz (GHz).
    *   **Formula:** Clock Cycle Time = 1 / Clock Rate
    *   **Limitation:** Only a valid performance metric if comparing processors with identical architectures.  Clock rate alone doesn't tell the whole story (see CPI).

*   **Cycles Per Instruction (CPI):**
    *   **Definition:** The average number of clock cycles required to execute one instruction.
    *   **Formula:** CPI = (CPU Clock Cycles) / (Number of Instructions)
    *   **Factors Affecting CPI:** Instruction mix, pipeline stalls, cache misses, branch prediction accuracy.
    *   **Limitation:** Dependent on the instruction set and the specific program being executed.

*   **Instructions Per Cycle (IPC):**
    *   **Definition:** The average number of instructions executed per clock cycle.  The inverse of CPI.
    *   **Formula:** IPC = (Number of Instructions) / (CPU Clock Cycles)
    *   **Use:** Used to evaluate the efficiency of pipelining and parallel execution.

*   **MIPS (Millions of Instructions Per Second):**
    *   **Definition:** A measure of how many millions of instructions a processor can execute per second.
    *   **Formula:** MIPS = (Instruction Count) / (Execution Time * 10^6)  OR  MIPS = Clock Rate / (CPI * 10^6)
    *   **Limitation:**  Highly dependent on the instruction set. A high MIPS rating on one architecture might not translate to better performance compared to a lower MIPS rating on another architecture with a more complex instruction set. MIPS can be misleading because it varies inversely with the program being executed.

*   **FLOPS (Floating-Point Operations Per Second):**
    *   **Definition:** A measure of how many floating-point operations a processor can perform per second.
    *   **Units:** MegaFLOPS, GigaFLOPS, TeraFLOPS, PetaFLOPS, ExaFLOPS.
    *   **Use:**  Commonly used for scientific and engineering applications.
    *   **Limitation:**  Only relevant for applications that are heavily dependent on floating-point operations. Not a good general-purpose performance metric.

**Important Points to Remember:**

*   No single metric is perfect. Choose the metrics that are most relevant to the specific application and comparison being made.
*   Consider the workload: performance is always relative to the workload.

## 3. Summarizing Performance: Averaging Methods

When comparing performance across multiple programs, a single summary metric is needed.

*   **Arithmetic Mean (AM):**
    *   **Definition:** Sum of the execution times divided by the number of programs.
    *   **Formula:** AM = (Execution Time<sub>1</sub> + Execution Time<sub>2</sub> + ... + Execution Time<sub>n</sub>) / n
    *   **Use:** Appropriate when all programs are equally important.
    *   **Limitation:** Can be misleading if the execution times vary widely or if the programs are not equally important. Sensitive to outliers.  If normalizing to a reference machine (i.e., calculating speedup), arithmetic mean of normalized values will **favor improvements in larger benchmarks**.

*   **Weighted Arithmetic Mean (WAM):**
    *   **Definition:**  Each execution time is multiplied by a weight representing its importance, then summed and divided by the sum of the weights.
    *   **Formula:** WAM = (Weight<sub>1</sub> * Execution Time<sub>1</sub> + Weight<sub>2</sub> * Execution Time<sub>2</sub> + ... + Weight<sub>n</sub> * Execution Time<sub>n</sub>) / (Weight<sub>1</sub> + Weight<sub>2</sub> + ... + Weight<sub>n</sub>)
    *   **Use:**  Suitable when programs have different levels of importance.
    *   **Limitation:** Requires carefully choosing the weights, which can be subjective.

*   **Harmonic Mean (HM):**
    *   **Definition:** The reciprocal of the arithmetic mean of the reciprocals of the execution rates.
    *   **Formula:** HM = n / ((1/Execution Rate<sub>1</sub>) + (1/Execution Rate<sub>2</sub>) + ... + (1/Execution Rate<sub>n</sub>))
        *   Where Execution Rate is often expressed as performance relative to a reference machine.
    *   **Use:** Preferred when dealing with rates or ratios (e.g., MIPS, FLOPS) normalized to a reference machine.  The use of harmonic mean with normalized values will **ensure that improvements in smaller benchmarks are not unfairly exaggerated**.
    *   **Limitation:** Less intuitive than the arithmetic mean.

*   **Geometric Mean (GM):**
    *   **Definition:** The nth root of the product of n execution times.
    *   **Formula:** GM = (Execution Time<sub>1</sub> * Execution Time<sub>2</sub> * ... * Execution Time<sub>n</sub>)<sup>(1/n)</sup>
        *   or, if using *normalized* execution times, GM = (Speedup<sub>1</sub> * Speedup<sub>2</sub> * ... * Speedup<sub>n</sub>)<sup>(1/n)</sup>
    *   **Use:**  Useful for comparing normalized execution times (speedups) across multiple programs. Least sensitive to outliers. Consistent regardless of which machine is used as the reference.
    *   **Limitation:** Can be difficult to interpret the meaning of the geometric mean.

**Important Points to Remember:**

*   The choice of averaging method depends on the specific goals of the performance evaluation.
*   Arithmetic mean is suitable for absolute execution times when all programs are equally important.
*   Harmonic mean is preferred for rates.
*   Geometric mean is useful for normalized execution times (speedups) to provide a consistent and less skewed comparison.

## 4. Amdahl's Law

*   **Definition:**  Amdahl's Law states that the maximum speedup of a program is limited by the fraction of the program that cannot be improved.

*   **Formula:**
    `Speedup_overall = 1 / ((1 - Fraction_enhanced) + (Fraction_enhanced / Speedup_enhanced))`

    *   `Fraction_enhanced`: The fraction of the original execution time that can be improved.
    *   `Speedup_enhanced`: The speedup achieved by improving the enhanced part of the program.
    *   `1 - Fraction_enhanced`: The fraction of the original execution time that *cannot* be improved.

*   **Implications:**
    *   **Diminishing Returns:** As `Speedup_enhanced` approaches infinity, `Speedup_overall` approaches `1 / (1 - Fraction_enhanced)`. This highlights the diminishing returns of focusing on optimizing only a portion of the code.
    *   **Focus on the Common Case:** To achieve significant performance gains, focus on optimizing the most frequently executed portions of the code (the common case).
    *   **Parallelism Limitations:** Amdahl's Law highlights the limitations of parallelizing only a portion of a program. Even with infinite processors, the serial portion of the code will limit the overall speedup.

*   **Example:**
    Suppose 80% of a program can be improved with a new optimization technique that provides a speedup of 5. What is the overall speedup?

    *   `Fraction_enhanced = 0.8`
    *   `Speedup_enhanced = 5`
    *   `Speedup_overall = 1 / ((1 - 0.8) + (0.8 / 5)) = 1 / (0.2 + 0.16) = 1 / 0.36 = 2.78`

    The overall speedup is 2.78, significantly less than the speedup of 5 for the optimized portion.

**Important Points to Remember:**

*   Amdahl's Law is a fundamental principle in computer architecture.
*   It highlights the importance of optimizing the most frequently executed portions of the code.
*   It emphasizes the limitations of improving only a part of the system.

## 5. Analyzing and Comparing Performance Data

*   **Steps for Performance Analysis:**
    1.  **Define Goals:** What are you trying to achieve with the performance evaluation? (e.g., compare two systems, identify bottlenecks).
    2.  **Choose Benchmarks:** Select benchmarks that are representative of the target workload.
    3.  **Measure Performance:** Run the benchmarks on the systems being evaluated and collect performance data using appropriate metrics.
    4.  **Summarize Performance:** Calculate the average execution time, speedup, or other relevant metrics.
    5.  **Analyze Results:** Interpret the data and draw conclusions about the relative performance of the systems.
    6.  **Identify Bottlenecks:** Determine the factors that are limiting performance.
    7.  **Optimize:**  Implement changes to improve performance based on the analysis.  This could involve code optimization, hardware upgrades, or architectural modifications.
    8.  **Iterate:** Repeat the process to confirm improvements and identify new bottlenecks.

*   **Benchmarking:**
    *   **Definition:**  The process of running a set of standard programs (benchmarks) on a computer system to measure its performance.
    *   **Types of Benchmarks:**
        *   **Real Applications:**  Represent actual workloads (e.g., web servers, databases).
        *   **Kernels:**  Small, focused programs that represent a specific type of computation (e.g., Linpack for linear algebra).
        *   **Synthetic Benchmarks:**  Programs designed to stress specific aspects of the system (e.g., Dhrystone for integer performance, Whetstone for floating-point performance).
        *   **SPEC Benchmarks:** A widely used set of industry-standard benchmarks. SPEC CPU, SPECjbb, SPECpower, etc.

*   **Common Pitfalls in Performance Evaluation:**
    *   **Choosing unrealistic benchmarks.**
    *   **Ignoring variability in performance measurements.**
    *   **Drawing conclusions from insufficient data.**
    *   **Not accounting for compiler optimizations.**
    *   **Comparing systems with different configurations (e.g., memory size).**
    *   **Ignoring the impact of the operating system and other software.**
    *   **Reporting only peak performance, not sustained performance.**
    *   **Not considering the cost of the system.**

## 6. Instruction Set Architecture (ISA) Review (Self Review – Brief overview)

*   **Definition:** The interface between the hardware and software.  It defines the instructions that the processor can execute.
*   **Key Components of an ISA:**
    *   **Instruction Set:** The set of instructions that the processor can execute (e.g., arithmetic, logical, memory access, control flow).
    *   **Addressing Modes:** The methods used to specify the operands of an instruction (e.g., register direct, immediate, direct, indirect).
    *   **Data Types:** The types of data that the processor can manipulate (e.g., integers, floating-point numbers, characters).
    *   **Registers:** The storage locations within the processor that are used to hold data and addresses.
    *   **Memory Organization:** How memory is addressed and accessed.
    *   **Interrupts and Exceptions:** Mechanisms for handling unexpected events.

*   **Types of ISAs:**
    *   **CISC (Complex Instruction Set Computing):** Large number of complex instructions (e.g., x86).  Generally, lower code density.
    *   **RISC (Reduced Instruction Set Computing):** Small number of simple instructions (e.g., ARM, MIPS).  Generally, higher code density.

*   **ISA and Performance:**
    *   The ISA influences the number of instructions required to perform a task, the CPI, and the overall execution time.
    *   A well-designed ISA can simplify compiler design and improve performance.

## Practice Questions

1.  **Question:** Program A runs in 10 seconds on machine X and in 15 seconds on machine Y. Machine X has a 2 GHz clock, and machine Y has a 3 GHz clock.  What is the clock cycle count for each machine?

    **Answer:**
    *   Machine X: Cycles = Execution Time * Clock Rate = 10 s * 2 GHz = 20 * 10<sup>9</sup> cycles
    *   Machine Y: Cycles = Execution Time * Clock Rate = 15 s * 3 GHz = 45 * 10<sup>9</sup> cycles

2.  **Question:** A program executes 1 billion instructions on a processor with a 2 GHz clock and a CPI of 2.  What is the execution time of the program?

    **Answer:**
    *   Execution Time = (Instruction Count * CPI) / Clock Rate = (1 * 10<sup>9</sup> * 2) / (2 * 10<sup>9</sup>) = 1 second

3.  **Question:** You are comparing two processors, A and B.  Processor A executes a program in 5 seconds, and Processor B executes the same program in 8 seconds. What is the speedup of Processor A over Processor B?

    **Answer:**
    *   Speedup = Execution Time (B) / Execution Time (A) = 8 / 5 = 1.6

4.  **Question:** You have measured the execution times of three programs on two different machines.

    | Program | Machine A (seconds) | Machine B (seconds) |
    |---|---|---|
    | 1 | 10 | 15 |
    | 2 | 20 | 10 |
    | 3 | 30 | 20 |

    Calculate the arithmetic mean execution time for each machine. Which machine is faster according to this metric?

    **Answer:**

    *   AM (Machine A) = (10 + 20 + 30) / 3 = 20 seconds
    *   AM (Machine B) = (15 + 10 + 20) / 3 = 15 seconds

    Machine B is faster according to the arithmetic mean.

5. **Question:** Refer to the data in the previous question. Calculate the geometric mean speedup relative to Machine A for each machine. What does this tell you about their relative performance.

    **Answer:**
    Speedup program 1 = 10/15 = 0.667
    Speedup program 2 = 20/10 = 2
    Speedup program 3 = 30/20 = 1.5

    GM = (0.667 * 2 * 1.5)<sup>(1/3)</sup> = 1.26

    This says that machine A is, on average, only about 26% faster than machine B. Note that arithmetic mean of the speedups would have implied machine B was better on average.

6.  **Question:**  20% of a program takes 80% of the execution time. How much would you need to improve the performance of this part to make the program run 4x faster.

    **Answer:**
        Target_speedup = 4.  Target_fraction = 0.2.

        Using Amdahl's law in reverse:  4 = 1 / (0.8 + 0.2 / Speedup_enhanced).  
        0.8 + 0.2 / Speedup_enhanced = 1/4 = 0.25
        0.2 / Speedup_enhanced = 0.25 - 0.8 = -0.55  <-- This is not physically possible to achieve.
        The implication is that even with the perfect optimization (to take zero time), the overall speedup would only be 1/0.8 = 1.25. There is no amount of improvement that would satisfy the given condition.

These notes provide a comprehensive overview of reporting and summarizing performance in advanced computer architecture. Remember to practice these concepts with additional examples and exercises to solidify your understanding. Good luck!
