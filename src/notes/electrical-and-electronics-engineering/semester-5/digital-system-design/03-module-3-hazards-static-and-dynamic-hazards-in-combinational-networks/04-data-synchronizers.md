---
title: "Data synchronizers"
subject: "DIGITAL SYSTEM DESIGN"
module: "Module 3: Hazards – static and dynamic hazards in combinational networks"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f362fc"
status: "completed"
scrapedAt: "2026-05-23T16:21:09.339Z"
---
# DIGITAL SYSTEM DESIGN - Module 3: Hazards – Static and Dynamic Hazards in Combinational Networks

## Topic: Data Synchronizers

---

### 1. Introduction to Data Synchronizers

Data synchronizers are crucial components in digital systems, especially when dealing with signals from different clock domains or asynchronous inputs. Their primary purpose is to resolve potential timing issues and ensure that data is correctly registered in a synchronous system, even if the source is not synchronized to the destination clock.

**Key Concept:** The core problem data synchronizers address is **metastability**. Metastability occurs when a flip-flop (or any sequential element) receives an input that transitions too close to its clock edge, making it impossible for the flip-flop to settle into a stable '0' or '1' state before the next clock edge arrives. This can lead to unpredictable behavior.

**Why are they needed?**

*   **Asynchronous Inputs:** When a digital system receives data from an external source that operates on a different clock or no clock at all.
*   **Multiple Clock Domains:** In complex systems with multiple processors or hardware modules operating on independent clocks.
*   **Button Presses/External Events:** Physical inputs like button presses are inherently asynchronous.

---

### 2. The Problem: Metastability

**Definition:** Metastability is a temporary condition in a sequential logic element (like a flip-flop) where its output is neither a valid logic '0' nor a valid logic '1'. This typically happens when the setup time or hold time requirements of the flip-flop are violated due to an input signal arriving too close to the active clock edge.

**Causes of Metastability:**

*   **Asynchronous Input to a Synchronous Element:** An input that changes arbitrarily with respect to the system's clock.
*   **Propagation Delays in Multi-Clock Systems:** If data is passed directly between clock domains without proper synchronization, it can arrive at the receiving flip-flop's clock edge in an indeterminate state.

**Consequences of Metastability:**

*   **Unpredictable Output:** The flip-flop's output can fluctuate randomly.
*   **Failure to Latch Data:** The data might not be correctly captured.
*   **Propagating Errors:** Metastable states can propagate through the system, causing widespread functional failures.
*   **Increased Failure Rate:** While metastability is a transient state, if the resolving time exceeds the clock period, the system can experience persistent errors.

**Textbook Reference:**
*   **M. Morris Mano and Michel.D.Ciletti, "Digital Design with an introduction to HDL, VHDL and Verilog" (6/e, 2018):** This textbook often discusses metastability in the context of sequential circuit analysis and design, particularly when introducing flip-flops and clocking strategies. They explain how timing violations can lead to this problematic state.
*   **John F Wakerly, "Digital Design" (4/e, 2008):** Wakerly's book provides a detailed explanation of timing parameters like setup and hold times, which are fundamental to understanding why metastability occurs.

---

### 3. Basic Data Synchronizer Design: The Two-Flip-Flop Synchronizer

The most common and fundamental data synchronizer is the **two-flip-flop synchronizer**. It aims to significantly reduce the probability of metastability-induced errors.

**Circuit Diagram:**

```
      +----------+       +----------+
Input ---->|  FF1    |----->|  FF2    |----> Synchronized Output
      | Clock    |       | Clock    |
      +----------+       +----------+
           |                  |
           --------------------
                Common Clock
```

**How it works:**

1.  **First Flip-Flop (FF1):** The asynchronous input is fed into the data input of the first flip-flop. This flip-flop is clocked by the destination synchronous clock.
    *   If the input arrives at FF1 during its valid setup/hold window, the input will be reliably latched.
    *   If the input arrives during a metastable period, FF1 will enter a metastable state. The output of FF1 will be neither '0' nor '1' for some time.

2.  **Second Flip-Flop (FF2):** The output of FF1 is fed into the data input of the second flip-flop, which is also clocked by the same destination synchronous clock.
    *   **The key is the delay:** The output of FF1, even if metastable, will eventually resolve to either '0' or '1'. The amount of time it takes to resolve is called the **resolving time**.
    *   By using a second flip-flop, we essentially "sample" the output of FF1 again after a clock cycle. The probability of FF1 remaining metastable for longer than two clock periods is astronomically low, especially with well-designed flip-flops.
    *   If FF1's output resolves to a stable state within the first clock cycle, FF2 will latch that stable state correctly.
    *   If FF1's output is still oscillating or in an indeterminate state when FF2 samples it, FF2 itself might become metastable. However, the probability of this happening is greatly reduced because the resolving time of FF1 is typically much shorter than the clock period. The chances of FF2 entering metastability are significantly lower than FF1.

**Important Considerations for the Two-Flip-Flop Synchronizer:**

*   **Clock Period:** The clock period of the synchronous system must be significantly longer than the maximum expected resolving time of the flip-flops used.
*   **Flip-Flop Characteristics:** The choice of flip-flop is important. Flip-flops with shorter resolving times and lower metastability failure rates are preferred.
*   **Synchronizer Output Behavior:** The synchronized output will represent the value of the input at some clock edge, but there's no guarantee which edge. The output might be delayed by one or two clock cycles from the original input transition.
*   **Averaging the Metastability Risk:** The synchronizer doesn't eliminate metastability but drastically reduces the probability of an error propagating. The probability of failure for a single-flip-flop synchronizer is much higher than for a two-flip-flop synchronizer.

**Textbook Reference:**
*   **Donald G Givone, "Digital Principles & Design" (1/e 2002):** Givone might touch upon synchronization issues in the context of sequential circuit timing, though a dedicated chapter on synchronizers might be less common at this level. However, the principles of sequential element timing are covered.
*   **John M Yarbrough, "Digital Logic Applications and Design" (1/e 2006):** Yarbrough's text is likely to cover practical aspects of digital design, including synchronization challenges when interfacing asynchronous signals or different clock domains.

---

### 4. Performance and Probability of Failure

The effectiveness of a data synchronizer is measured by its **mean time between failures (MTBF)**. This is a statistical measure of how long, on average, the synchronizer will operate correctly before a metastability error occurs.

**Factors affecting MTBF:**

*   **Clock Frequency ($f_{clk}$):** Higher clock frequencies mean shorter clock periods, reducing the time available for resolution.
*   **Flip-Flop Metastability Parameters:**
    *   **Time $\tau$ (alpha):** This is a characteristic time constant of the flip-flop that relates the setup/hold time violation to the output settling time.
    *   **Maximum Resolving Time ($t_{max}$):** The maximum time the flip-flop might take to resolve.
    *   **Detection Window ($t_{detection}$):** The time window during which an input transition can cause metastability.
*   **Number of Synchronizer Stages:** A two-flip-flop synchronizer has a much higher MTBF than a single-flip-flop synchronizer.

**Mathematical Model (Simplified):**

The probability of a flip-flop failing (entering a metastable state that doesn't resolve in time) in a single clock cycle is approximately given by:

$P_{fail\_per\_cycle} \approx A \cdot e^{-t_{settle} / \tau}$

Where:
*   $A$ is a factor related to the flip-flop's sensitivity to input changes.
*   $t_{settle}$ is the time available for the flip-flop output to settle (e.g., $T_{clk} - t_{propagation\_delay}$).
*   $\tau$ is the flip-flop's characteristic time constant.

The MTBF of a **two-flip-flop synchronizer** can be approximated as:

$MTBF \approx \frac{1}{f_{clk} \cdot P_{ metastable\_FF1}}$

Where $P_{ metastable\_FF1}$ is the probability that the first flip-flop goes metastable, which is a very small number in practice for a properly designed system.

**Key Takeaway:** The exponential relationship ($e^{-t_{settle} / \tau}$) shows that even a small increase in the settling time ($t_{settle}$) or a decrease in the time constant ($\tau$) dramatically increases the MTBF. Using a second flip-flop effectively increases the available settling time to approximately $2 \times T_{clk}$ (two clock periods), significantly reducing the probability of failure.

**Important Point to Remember:** No synchronizer can guarantee 100% immunity to metastability. It's about reducing the probability to an acceptable level for the application.

**Reference Book:**
*   **Miron Abramovici, Melvin A. Breuer, and Arthur D. Friedman, "Digital Systems Testing and Testable Design":** While this book focuses on testing, understanding timing and potential failure modes like metastability is essential for designing testable systems. They might discuss the underlying principles that lead to these timing issues.

---

### 5. Handling Multi-Bit Data Synchronization

Synchronizing a single bit of data is straightforward with the two-flip-flop approach. However, synchronizing a multi-bit data bus requires careful consideration.

**The Problem:** If you use separate two-flip-flop synchronizers for each bit of a data bus, there's a risk that different bits might be synchronized to different clock cycles. This can lead to the synchronized data bus having **glitches** or being **invalid** because the bits don't represent a consistent value from the source.

**Example:** Consider a 4-bit data bus `D[3:0]`. If `D` transitions from `0110` to `1001`, and each bit synchronizer independently latches the new value, one bit might be captured in one clock cycle, while another is captured in the next. This could result in the synchronized data appearing as, say, `0010` or `1101` temporarily.

**Solutions for Multi-Bit Synchronization:**

1.  **Handshake Protocol (Request/Acknowledge):** This is the most robust method.
    *   **Request Signal:** The source asserts a `REQUEST` signal when new data is ready.
    *   **Synchronization:** The `REQUEST` signal is synchronized using a two-flip-flop synchronizer.
    *   **Data Synchronization:** The multi-bit data bus is also synchronized, but its validity is now controlled by the synchronized `REQUEST` signal.
    *   **Acknowledge Signal:** The destination acknowledges receipt of the data by asserting an `ACKNOWLEDGE` signal, which is sent back to the source (and synchronized).
    *   **How it works:** The source only sends new data when the previous data has been acknowledged. This ensures that a valid data word is synchronized across all bits.

    ```
    Source Clock Domain      |       Destination Clock Domain
    -------------------------|------------------------------------
    Data[N-1:0] -------------> |   Data_Sync[N-1:0]
    Request -----------------> |-> FF -> FF -> Sync_Request
                              |     |      |
                              |     +------+---> Acknowledge (sent back to source)
    ```

2.  **Double-Edge Triggered Flip-Flops (Less Common/More Complex):** Some advanced flip-flops can sample on both rising and falling edges, potentially offering faster synchronization for multi-bit data, but this is less standard.

3.  **Synchronous Reset/Enable:** If the asynchronous input can be controlled with a synchronous enable signal from the destination clock domain, it can help manage when data is presented to the synchronizer. However, this requires a way to signal from the destination back to the source to enable the transmission.

**Important Point to Remember:** For multi-bit data, simply synchronizing each bit independently is **not sufficient** due to the potential for de-synchronization of the bits themselves. A handshake or similar mechanism is usually required.

**Textbook Reference:**
*   **John F Wakerly, "Digital Design" (4/e, 2008):** Wakerly's text is excellent for detailing asynchronous interface design and the handshake protocols needed for reliable multi-bit data transfer between clock domains.

---

### 6. Synchronizer Design Guidelines and Best Practices

To maximize the reliability of data synchronizers:

*   **Use Two Flip-Flops:** Always prefer a two-stage synchronizer over a single-stage one for critical data paths.
*   **Choose Fast Flip-Flops:** Select flip-flops with short $t_{setup}$, $t_{hold}$, and good metastable characteristics. High-speed flip-flops often have better resolving times.
*   **Ensure Sufficient Clock Period:** The clock period of the destination clock domain must be significantly longer than the maximum expected resolving time of the chosen flip-flops. A common rule of thumb is to ensure the clock period is at least 3-4 times the expected resolving time.
*   **Synchronize All Asynchronous Signals:** Not just data, but any control signals originating from an asynchronous source (like start/stop signals, status flags) should also be synchronized.
*   **Handle Multi-Bit Data Carefully:** Implement handshake protocols or other mechanisms to ensure multi-bit data remains coherent.
*   **Avoid Synchronizing Clocks Directly:** Never directly feed an asynchronous clock signal into a synchronous system's clock input. Clock crossing requires dedicated clock synchronization circuits (like two-flip-flop synchronizers for the clock signal itself, or more complex PLL-based solutions).
*   **Consider "Resettable" Synchronizers:** For certain applications, it might be beneficial to allow the synchronizer's output to be reset to a known state (e.g., '0') if a metastate condition is detected or if the system needs to re-establish synchronization. This requires additional logic.

**Example of a Resettable Synchronizer:**

```
      +----------+       +----------+       +-----------------+
Input ---->|  FF1    |----->|  FF2    |----->|   Combinational |
      | Clock    |       | Clock    |       |   Logic/Control |
      +----------+       +----------+       +-----------------+
           |                  |                       ^
           --------------------                       |
                Common Clock                            |
                                                        |
      +--------------------------------------------------+
      |                                                  |
      |                                                  |
      +--------------------+      +--------------------+
      |   Reset Logic      |----->|   Flip-Flop Reset  |
      +--------------------+      +--------------------+
```
The "Combinational Logic/Control" might detect prolonged metastable behavior and trigger a reset pulse for the flip-flops. This is advanced and needs careful design.

---

### 7. Relationship to Hazards (Module 3 Context)

While data synchronizers primarily address metastability in sequential circuits, the underlying principles of timing and signal propagation are related to hazard analysis in combinational circuits.

*   **Timing Violations:** Hazards are caused by unequal propagation delays through different paths in combinational logic, leading to temporary incorrect outputs. Metastability in sequential circuits is also fundamentally a timing issue, where input changes occur too close to the clock edge, preventing stable settling.
*   **Propagation Delays:** Both hazards and metastability are direct consequences of propagation delays inherent in logic gates and flip-flops.
*   **Reducing Uncertainty:** Hazard-free combinational design aims to eliminate temporary glitches. Data synchronizers aim to eliminate the *probability* of errors due to timing uncertainty by providing sufficient time for signals to settle.

**CO2: Design hazard-free digital circuits.**
While data synchronizers aren't directly about making combinational logic hazard-free, understanding timing is paramount. If an asynchronous input, before synchronization, is fed into combinational logic that is *not* hazard-free, the problem is compounded. The synchronizer aims to present stable inputs to the destination sequential logic, which then operates based on the system's clock. The combinational logic *between* the synchronizer's output and the next registered element still needs to be designed to be hazard-free with respect to that clocked input.

**CO1: Analyze asynchronous and clocked synchronous sequential circuits.**
Data synchronizers are a prime example of bridging asynchronous inputs to clocked synchronous sequential circuits. Analyzing their behavior requires understanding the timing characteristics of flip-flops and the impact of asynchronous events on synchronous systems.

---

### 8. Practice Questions and Exercises

**Question 1:**
Explain why a single-flip-flop synchronizer is generally not sufficient for reliable data synchronization in digital systems. What is the primary problem it tries to mitigate, and how does a second flip-flop help?

**Answer:**
A single-flip-flop synchronizer is not sufficient because if the input to the first flip-flop (FF1) violates its setup or hold time, FF1 can enter a metastable state. This means its output will be neither a stable '0' nor a stable '1' for an unpredictable amount of time. If this metastable output is then fed to subsequent logic or another flip-flop in the same clock cycle, it can cause unpredictable behavior or errors throughout the system. A second flip-flop (FF2), clocked by the same system clock, samples the output of FF1. The key is that FF1's output, even if metastable, will eventually resolve to a stable '0' or '1'. By using a second flip-flop, we provide an additional clock cycle for FF1's output to resolve. The probability of FF1 remaining metastable for longer than two clock cycles is astronomically low. FF2 will then reliably capture the resolved value, greatly reducing the chance of errors propagating.

---

**Question 2:**
Consider synchronizing a 4-bit data bus from an asynchronous source. If you use four independent two-flip-flop synchronizers (one for each bit), what potential problem can arise? How would you design a more robust synchronizer for the multi-bit data?

**Answer:**
The potential problem with using independent two-flip-flop synchronizers for each bit of a multi-bit data bus is that the bits may not be synchronized to the same clock edge. This means that the synchronized output might represent bits from different original data samples, leading to an invalid or glitchy data word. For example, if the original data was `0110` and it changes to `1001`, one bit might be captured on clock cycle N, while another bit is captured on clock cycle N+1. The synchronized output could temporarily appear as `0010` or `1101`.

A more robust solution is to use a **handshake protocol**. This involves:
1.  The asynchronous source asserting a `REQUEST` signal when new data is ready.
2.  The `REQUEST` signal is synchronized using a two-flip-flop synchronizer.
3.  The multi-bit data bus is presented alongside the `REQUEST`.
4.  The destination system, upon receiving a valid synchronized `REQUEST`, latches the corresponding data.
5.  The destination asserts an `ACKNOWLEDGE` signal back to the source (which is also synchronized).
This ensures that the entire data word is latched consistently by the destination system.

---

**Question 3:**
A system operates at a clock frequency of 100 MHz ($T_{clk} = 10$ ns). The flip-flops used have a characteristic time constant $\tau = 0.5$ ns and can achieve a maximum resolving time of 5 ns. Calculate the approximate MTBF for a single-flip-flop synchronizer and a two-flip-flop synchronizer. Assume the detection window for metastability is 1 ns. (Hint: You'll need to make some reasonable assumptions about the $A$ factor or focus on the exponential term).

*Note: This is a simplified model. A precise calculation involves more detailed MTBF formulas from datasheets.*

**Answer:**
Let's focus on the probability of failure per clock cycle and then estimate MTBF.

For a single flip-flop (FF1), let's assume the input is such that it enters a metastable state. The time available for settling is $T_{settle} \approx T_{clk} - t_{detection} = 10 \text{ ns} - 1 \text{ ns} = 9 \text{ ns}$. (This is a simplification, as the detection window is when it *can* go metastable, and the settling time is after that.) A more common approximation is $T_{settle} \approx T_{clk}$. Let's use $T_{settle} = 10$ ns for simplicity in this example.

Probability of failure per cycle for FF1 ($P_{fail\_per\_cycle\_FF1}$):
$P_{fail\_per\_cycle\_FF1} \approx A \cdot e^{-T_{settle} / \tau}$
Let's assume a typical $A$ value related to frequency and flip-flop characteristics. A common simplified form relates to how much *extra* time is available:
$P_{fail\_per\_cycle\_FF1} \approx k \cdot e^{-(T_{clk} - t_{max\_resolving}) / \tau}$
If we consider the entire clock period as available for settling in the worst case for analysis:
$P_{fail\_per\_cycle\_FF1} \approx A \cdot e^{-10 \text{ ns} / 0.5 \text{ ns}} = A \cdot e^{-20}$
$e^{-20} \approx 2.06 \times 10^{-9}$

For a two-flip-flop synchronizer, the effective time available for the first FF to resolve before the second FF samples it is roughly $2 \times T_{clk}$.
$P_{fail\_per\_cycle\_FF2} \approx A \cdot e^{-(2 \times T_{clk}) / \tau}$
$P_{fail\_per\_cycle\_FF2} \approx A \cdot e^{-20 \text{ ns} / 0.5 \text{ ns}} = A \cdot e^{-40}$
$e^{-40} \approx 4.24 \times 10^{-18}$

Let's assume a constant $A$ which is, for instance, $10^8$ (typical for a good FF at a given frequency).

*   **Single-Flip-Flop Synchronizer MTBF:**
    $MTBF_{single} \approx \frac{1}{f_{clk} \cdot P_{fail\_per\_cycle\_FF1}} = \frac{1}{100 \text{ MHz} \times (10^8 \times 2.06 \times 10^{-9})} = \frac{1}{100 \times 10^6 \times 0.206} \approx \frac{1}{2.06 \times 10^7} \approx 4.85 \times 10^{-8} \text{ seconds}$
    This is a very short MTBF (in the order of nanoseconds), indicating it's highly unreliable.

*   **Two-Flip-Flop Synchronizer MTBF:**
    The probability of the first flip-flop causing an issue that the second one also fails to resolve is the original failure probability. The MTBF is roughly calculated based on the failure rate of the first stage.
    $MTBF_{two} \approx \frac{1}{f_{clk} \times P_{fail\_per\_cycle\_FF1}}$
    If we assume the failure probability of the *entire 2-FF synchronizer* is $P_{fail\_per\_cycle\_FF2}$ (which represents the probability of both failing), then:
    $MTBF_{two} \approx \frac{1}{f_{clk} \times P_{fail\_per\_cycle\_FF2}} = \frac{1}{100 \text{ MHz} \times (10^8 \times 4.24 \times 10^{-18})} = \frac{1}{100 \times 10^6 \times 4.24 \times 10^{-10}} \approx \frac{1}{0.0424} \approx 23.6 \text{ seconds}$

    *Self-correction/Refinement:* The MTBF of a 2-FF synchronizer is generally calculated by considering the reduced failure probability of the *first* FF. The probability that the *first* FF fails and *also* the second FF fails is what we are interested in. The $e^{-t_{settle}/\tau}$ factor represents the probability of the FF *not* settling within $t_{settle}$. For a 2-FF synchronizer, the effective $t_{settle}$ is $\sim 2 \times T_{clk}$. So, the probability of the *entire system* failing in a cycle is what matters.
    The probability of failure in a cycle for the 2-FF synchronizer is $P_{fail\_cycle\_2FF} \approx A \times e^{-2 T_{clk} / \tau}$.
    $P_{fail\_cycle\_2FF} \approx 10^8 \times e^{-20 \text{ ns} / 0.5 \text{ ns}} = 10^8 \times e^{-40} \approx 10^8 \times 4.24 \times 10^{-18} = 4.24 \times 10^{-10}$.
    $MTBF_{two} \approx \frac{1}{f_{clk} \times P_{fail\_cycle\_2FF}} = \frac{1}{100 \times 10^6 \times 4.24 \times 10^{-10}} = \frac{1}{0.0424} \approx 23.6 \text{ seconds}$.

    This shows that the two-flip-flop synchronizer provides a dramatically improved MTBF, from nanoseconds to seconds, making it viable for many applications.

---

### 9. Summary and Key Takeaways

*   **Data synchronizers** are essential for interfacing asynchronous signals or signals from different clock domains into a synchronous system.
*   The primary problem they address is **metastability**, a temporary state where a flip-flop output is indeterminate, leading to potential errors.
*   The **two-flip-flop synchronizer** is the standard implementation, significantly reducing the probability of metastability-induced failures.
*   The **MTBF (Mean Time Between Failures)** quantifies the reliability of a synchronizer.
*   **Multi-bit data synchronization** requires careful handling, typically using handshake protocols, to ensure data coherence.
*   Always synchronize **all asynchronous signals**, not just data.
*   Understand that synchronizers **reduce probability**, they don't eliminate the possibility of failure.
*   The effectiveness of a synchronizer depends on the **clock period**, the **flip-flop characteristics**, and the **number of synchronization stages**.

---
This concludes the study notes for Data Synchronizers within Module 3. Remember to consult the recommended textbooks for deeper dives into the theoretical underpinnings and practical examples.
