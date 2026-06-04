---
title: "Memory"
subject: "SIGNALS AND SYSTEMS"
module: "Module 3: Discrete time systems "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b163"
status: "completed"
scrapedAt: "2026-05-20T16:15:54.031Z"
---
## Signals and Systems - Module 3: Discrete-Time Systems - Topic: Memory

These notes cover the concept of memory in discrete-time systems, a crucial characteristic that influences system behavior and implementation.

**Learning Outcomes:**

*   Understand the definition of memory in discrete-time systems.
*   Determine whether a given discrete-time system is memoryless or has memory.
*   Analyze the implications of memory on system behavior and its real-world applications.
*   Relate memory to concepts like state variables and difference equations.

**1. Key Concepts and Definitions**

*   **Discrete-Time System:** A system that processes a discrete-time input signal, x[n], to produce a discrete-time output signal, y[n].  The input and output are sequences of numbers defined at discrete points in time (n).

*   **Memoryless System (Static System):** A system is memoryless if its output *y[n]* at any time *n* depends *only* on the input *x[n]* at the *same time n*.  The current output is solely determined by the current input.  It doesn't depend on past or future inputs.

*   **System with Memory (Dynamic System):** A system has memory if its output *y[n]* at any time *n* depends on the input *x[n]* at *present and/or past times*.  The current output depends on past input values, thus "remembering" the input's history.  A system can also have *anticipatory memory* if the output depends on future inputs (though these are less common and often non-causal).

**2. Determining Memory: A Practical Approach**

The key to determining whether a system has memory is to examine its input-output relationship (mathematical equation).

*   **Memoryless:** If the equation only contains *x[n]* and *y[n]* (no x[n-k] or x[n+k] where k ≠ 0), the system is memoryless.

*   **With Memory:** If the equation contains *x[n-k]* (past input) or *x[n+k]* (future input) where *k ≠ 0*, the system has memory.

**3. Examples and Explanation**

Here are several examples to illustrate the difference between memoryless and systems with memory:

**Example 1: Memoryless System**

*   **System Equation:**  y[n] = 3x[n] + 2
*   **Analysis:** The output *y[n]* depends *only* on the input *x[n]* at the *same time* *n*. There are no past or future input terms.
*   **Conclusion:** This is a **memoryless** system.

**Example 2: System with Memory (Past Input)**

*   **System Equation:**  y[n] = x[n] + x[n-1]
*   **Analysis:** The output *y[n]* depends on the current input *x[n]* and the past input *x[n-1]*.
*   **Conclusion:** This system **has memory**.  Specifically, it "remembers" the previous input value. This could be a simple averaging filter (taking the average of the current and previous input).

**Example 3: System with Memory (Past Input and Output)**

*   **System Equation:** y[n] = 0.5y[n-1] + x[n]
*   **Analysis:**  The output *y[n]* depends on the current input *x[n]* and *also* on the *previous output* *y[n-1]*.  Since the previous output *y[n-1]* itself depends on previous inputs and outputs, the system has memory. This is an example of a recursive system or IIR (Infinite Impulse Response) filter.
*   **Conclusion:** This system **has memory**.

**Example 4: System with Memory (Future Input)**

*   **System Equation:** y[n] = x[n+1]
*   **Analysis:** The output *y[n]* depends on the *future* input *x[n+1]*.
*   **Conclusion:** This system **has memory**. This is an example of a *non-causal* system since the output at time *n* depends on a future input. While theoretically possible, physically realizable systems cannot depend on future inputs.

**Example 5: Memoryless System with a Constant**

*   **System Equation:** y[n] = 5
*   **Analysis:** The output is a constant value, irrespective of the input. While it seems like it might "remember" the value 5, it doesn't depend on *any* past or present inputs *x[n]*.  It's a special case of a memoryless system.
*   **Conclusion:** This system is **memoryless**.

**Example 6: System with Memory (Moving Average)**

*   **System Equation:** y[n] = (1/3) * (x[n] + x[n-1] + x[n-2])
*   **Analysis:** This is a 3-point moving average filter. The output at time *n* depends on the current input *x[n]* and the two previous inputs *x[n-1]* and *x[n-2]*.
*   **Conclusion:** This system **has memory**.

**4. Implications of Memory**

*   **Complexity:** Systems with memory are generally more complex to analyze and implement than memoryless systems. They require storage elements to hold past input or output values.

*   **Behavior:** Memory allows systems to exhibit more sophisticated behaviors, such as filtering, signal processing, and state-dependent operations. They can change their behavior based on past events.

*   **Real-World Applications:** Most real-world signal processing systems have memory.
    *   **Digital Filters:**  Used for noise reduction, equalization, and signal shaping.  They almost always have memory.
    *   **Control Systems:**  Controllers often use past error signals to adjust their control action.
    *   **Audio Processing:**  Effects like reverb and echo require memory to create delays and feedback.

*   **State Variables:**  Systems with memory can be described using *state variables*. These variables represent the internal "state" of the system and encapsulate the information about past inputs needed to determine future outputs.

*   **Difference Equations:** Discrete-time systems with memory are often described by *difference equations*. These equations relate the current output *y[n]* to past outputs *y[n-k]* and current and past inputs *x[n]* and *x[n-k]*.

**5. Practice Questions**

Determine whether the following discrete-time systems are memoryless or have memory. Justify your answer.

1.  y[n] = x[n]^2
2.  y[n] = sin(x[n])
3.  y[n] = x[n-2] + 2x[n]
4.  y[n] = y[n-1] + x[n]
5.  y[n] = x[2n]  (Note: This is a downsampling or decimation operation)

**6. Answers to Practice Questions**

1.  **Memoryless:** The output depends only on the current input *x[n]*.
2.  **Memoryless:** The output depends only on the current input *x[n]*. The sine function is a memoryless operation.
3.  **Has Memory:** The output depends on the current input *x[n]* and a past input *x[n-2]*.
4.  **Has Memory:** The output depends on the current input *x[n]* and the past output *y[n-1]*.
5.  **Memoryless:** Although the index is different, the output *y[n]* depends only on the *current* value of *x[2n]*. It's a *time-varying* system but is still memoryless because it does *not* depend on the past values of x.

**7. Important Points to Remember**

*   **Definition of Memory:** The key lies in whether the output depends *only* on the *current* input.
*   **x[n-k] or x[n+k] (k ≠ 0):**  These terms immediately indicate the presence of memory.
*   **Difference Equations:** Systems described by difference equations almost always have memory.
*   **Causality:** Physically realizable systems cannot depend on future inputs.
*   **Applications:** Memory enables complex signal processing functions.
*   **State Variables:** Are useful in characterizing systems with memory.

By understanding the concept of memory, you can better analyze and design discrete-time systems for various signal processing applications. Good luck!
