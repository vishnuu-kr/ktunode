---
title: "Underflow"
subject: "DATA COMPRESSION"
module: "Module 2: Advanced Techniques :"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b786"
status: "completed"
scrapedAt: "2026-05-20T16:44:31.945Z"
---
# DATA COMPRESSION: Module 2 - Advanced Techniques: Underflow

These notes cover the topic of **Underflow** within the context of advanced data compression techniques.

**Learning Outcomes:**

*   Understand the concept of underflow in arithmetic coding.
*   Identify the causes of underflow.
*   Explain the solutions to prevent or mitigate underflow.
*   Implement or describe a solution to underflow within arithmetic coding.

## 1. Introduction to Underflow in Arithmetic Coding

Arithmetic coding is a sophisticated data compression technique that represents an entire message as a single real number interval between 0 and 1.  As the message gets longer, this interval becomes increasingly small.  **Underflow** occurs when the interval representing the current state of the arithmetic coder becomes so small that the computer's floating-point representation cannot accurately distinguish the upper and lower bounds. This loss of precision can lead to incorrect decoding, rendering the compression useless.

*   **Key Concept:** Underflow in arithmetic coding arises from the limitations of floating-point arithmetic when representing increasingly smaller intervals.

## 2. Causes of Underflow

Several factors contribute to the occurrence of underflow in arithmetic coding:

*   **Long Input Sequences:**  The longer the input sequence, the smaller the interval becomes, increasing the likelihood of underflow.  Each symbol shrinks the interval further.
*   **High-Probability Symbols:** If the input stream contains a long sequence of highly probable symbols, the interval can shrink very rapidly, accelerating the onset of underflow.
*   **Finite Precision Arithmetic:** Computers represent real numbers using a finite number of bits. This limits the smallest difference between two numbers that can be represented. Once the difference between the upper and lower bounds of the interval falls below this limit, underflow occurs. This is the *primary* cause.
*   **Choice of Probability Model:** Some probability models might lead to more rapid interval reduction than others, increasing underflow risk. Static models that over-estimate probabilities can cause this.

## 3. Solutions to Prevent or Mitigate Underflow

Several techniques are used to prevent or mitigate underflow in arithmetic coding:

*   **Rescaling/Renormalization (E1, E2, and E3 Mappings):** This is the most common and effective method. When the interval becomes too small (e.g., both bounds are within the lower half or upper half of the [0,1] range), we rescale the interval by doubling it (effectively shifting bits left). This allows us to maintain precision.  These mappings are generally classified into three types:

    *   **E1 Mapping:** If the interval is contained in [0, 0.5), then we double the interval:  `low = 2 * low; high = 2 * high`. This is equivalent to shifting the bits one position to the left.
    *   **E2 Mapping:** If the interval is contained in [0.5, 1), then we double the interval and subtract 1: `low = 2 * low - 1; high = 2 * high - 1`.  This is also equivalent to shifting the bits one position to the left after subtracting 0.5.
    *   **E3 Mapping:**  If the interval straddles 0.5, i.e., `low < 0.5 < high`, then we increase the count of 'bits-to-follow' and delay the E1 or E2 mapping until it's safe to apply them. When `low` and `high` are both either less than 0.5 or greater than 0.5 after applying E3 a suitable E1 or E2 mapping can then be applied. This is needed because we can't determine whether to use an E1 or E2 mapping without the potential for an error propagating through.

*   **Interval Size Check:**  Regularly check the size of the interval (`high - low`). If it falls below a predefined threshold, perform rescaling/renormalization.  This proactive approach helps avoid underflow before it occurs.
*   **Using Higher Precision Arithmetic:** Employing double-precision or even quadruple-precision floating-point numbers can delay the onset of underflow. However, this comes at the cost of increased memory usage and computational overhead. It only postpones the inevitable and doesn't eliminate the need for rescaling.
*   **Block-Based Arithmetic Coding:**  Instead of encoding the entire message as a single interval, divide the message into blocks and encode each block separately. This limits the length of sequences processed within each block, reducing the risk of underflow.  Each block has its own interval [low, high]. This is a compromise that reduces efficiency slightly.
*   **Adaptive Modeling:** Using adaptive models that adjust symbol probabilities based on the input sequence can help prevent the interval from shrinking too rapidly due to a long run of high-probability symbols. Adaptive modeling helps make the probabilities more uniform which in turn prevents the interval from shrinking to quickly.

## 4. Implementing Underflow Prevention (Rescaling Example)

Here's a simplified Python example illustrating the rescaling technique (E1 mapping):

```python
def arithmetic_encode(data, probabilities):
    low = 0.0
    high = 1.0

    for symbol in data:
        symbol_prob = probabilities[symbol]
        range_width = high - low
        high = low + range_width * symbol_prob[1]  # Cumulative high
        low = low + range_width * symbol_prob[0]   # Cumulative low

        # Underflow check and rescaling (simplified E1)
        while high < 0.5:
            print("Underflow detected. Rescaling...")
            low = 2 * low
            high = 2 * high
            # Output a '0' bit (because we're in the lower half) - IMPLEMENTATION DETAIL NOT SHOWN
    return low, high

# Example usage (replace with actual probabilities)
data = "AABA"
probabilities = {
    'A': (0.0, 0.7),  # (cumulative low, cumulative high)
    'B': (0.7, 1.0)
}

low, high = arithmetic_encode(data, probabilities)
print(f"Encoded interval: [{low}, {high}]")
```

**Explanation:**

1.  The `arithmetic_encode` function encodes the input `data` based on provided `probabilities`.
2.  It initializes the interval to `[0, 1]`.
3.  For each symbol, it updates the interval based on the symbol's probability range.
4.  The `while high < 0.5:` loop detects a simplified form of underflow (being in the lower half).
5.  If underflow is detected, the interval is rescaled by doubling.
6.  **Important:**  In a real implementation, you'd need to output the bits corresponding to the rescaling (e.g., '0' for E1 mapping, '1' for E2 mapping) and handle the "bits-to-follow" for E3 mappings. This example demonstrates the core principle of rescaling.

**A more complete E1/E2 example**

```python
def arithmetic_encode_with_rescaling(data, probabilities):
    low = 0.0
    high = 1.0
    output_bits = [] # store output

    bits_to_follow = 0

    for symbol in data:
        symbol_prob = probabilities[symbol]
        range_width = high - low
        high = low + range_width * symbol_prob[1]  # Cumulative high
        low = low + range_width * symbol_prob[0]   # Cumulative low


        while True:
            if high < 0.5:  # E1 Mapping
                output_bits.append('0')
                # Output bits to follow
                for _ in range(bits_to_follow):
                    output_bits.append('1')  # Invert for bits to follow
                bits_to_follow = 0
                low *= 2
                high *= 2
            elif low >= 0.5: # E2 Mapping
                output_bits.append('1')
                for _ in range(bits_to_follow):
                    output_bits.append('0')
                bits_to_follow = 0
                low = 2*low - 1
                high = 2*high - 1
            elif low >= 0.25 and high < 0.75: # E3 Mapping
                bits_to_follow += 1
                low = 2 * low - 0.5
                high = 2 * high - 0.5
            else:
                break # No mapping needed


    #Output terminal bits
    if low < 0.25:
        output_bits.append('0')
        for _ in range(bits_to_follow + 1):
            output_bits.append('1')
    else:
        output_bits.append('1')
        for _ in range(bits_to_follow + 1):
            output_bits.append('0')



    return low, high, "".join(output_bits)


# Example usage
data = "AABA"
probabilities = {
    'A': (0.0, 0.7),  # (cumulative low, cumulative high)
    'B': (0.7, 1.0)
}

low, high, output_bits = arithmetic_encode_with_rescaling(data, probabilities)
print(f"Encoded interval: [{low}, {high}]")
print(f"Encoded bits: {output_bits}")
```

**Important Considerations:**

*   This is a simplified illustration. A robust implementation would require a more precise underflow detection mechanism (based on the smallest representable difference in floating-point numbers) and proper handling of the output bitstream during rescaling.
*   E3 mapping handles cases where the interval straddles 0.5.
*   The terminal bits ensure the decoder can correctly recover the interval.

## 5. Practice Questions and Exercises

**Question 1:** What is underflow in the context of arithmetic coding, and why does it occur?

**Answer:** Underflow occurs when the interval representing the encoded message becomes so small that the computer's floating-point representation cannot accurately distinguish the upper and lower bounds, leading to loss of precision. It happens primarily due to the finite precision of floating-point arithmetic when encoding long sequences, especially those containing high-probability symbols.

**Question 2:** Explain the purpose of rescaling (E1, E2 and E3 Mappings) in arithmetic coding. How does it help prevent underflow?

**Answer:** Rescaling (E1/E2/E3 mappings) prevents underflow by doubling the interval (shifting bits left) when it becomes too small. This effectively increases the precision and allows the encoder to continue representing the interval accurately.  E3 mapping delays the application of an E1 or E2 mapping when the interval straddles 0.5.

**Question 3:** What are the disadvantages of using higher-precision arithmetic to avoid underflow in arithmetic coding?

**Answer:** While higher-precision arithmetic can delay the onset of underflow, it increases memory usage and computational overhead.  Moreover, it doesn't eliminate the problem entirely; it merely postpones it. Rescaling is still needed.

**Question 4:**  Describe an alternative to encoding an entire file in one large interval, and explain its benefit in terms of underflow.

**Answer:** Encoding the file in blocks is an alternative approach. By dividing the message into smaller blocks, the maximum length of each encoded sequence is limited.  This reduces the risk of the interval becoming excessively small within each block, thus mitigating underflow.

**Exercise:**  Modify the provided Python code to include a check for interval size (e.g., `high - low < threshold`) and perform rescaling when the interval size falls below the threshold.

## 6. Important Points to Remember

*   Underflow is a critical issue in arithmetic coding that can lead to decoding errors.
*   Rescaling is the most effective method for preventing underflow.
*   Always consider the limitations of floating-point arithmetic when implementing arithmetic coding.
*   Implement proper bit stream management during rescaling to ensure correct decoding.
*   E3 mapping is crucial for avoiding errors where a mapping would occur incorrectly if `low < 0.5 < high`.

By understanding the causes of underflow and implementing appropriate mitigation techniques, you can ensure the reliability and effectiveness of your arithmetic coding implementation.
