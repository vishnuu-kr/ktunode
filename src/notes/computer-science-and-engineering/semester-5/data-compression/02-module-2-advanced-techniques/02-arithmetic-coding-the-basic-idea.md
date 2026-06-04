---
title: "Arithmetic Coding - The Basic Idea"
subject: "DATA COMPRESSION"
module: "Module 2: Advanced Techniques :"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b784"
status: "completed"
scrapedAt: "2026-05-20T16:44:30.496Z"
---
# DATA COMPRESSION - Module 2: Advanced Techniques - Arithmetic Coding - The Basic Idea

These notes cover the basic idea behind arithmetic coding, a powerful and widely used lossless data compression technique.

## 1. Learning Outcomes

After studying this material, you should be able to:

*   Understand the fundamental principle of arithmetic coding.
*   Distinguish arithmetic coding from Huffman coding.
*   Explain how probabilities are used in arithmetic coding.
*   Describe the process of encoding a string using arithmetic coding.
*   Recognize the advantages and disadvantages of arithmetic coding.

## 2. Key Concepts and Definitions

*   **Arithmetic Coding:** A lossless data compression technique that encodes a string of symbols by representing it as a single floating-point number in the interval [0, 1).

*   **Probability Interval:** The sub-interval of [0, 1) assigned to each symbol based on its probability of occurrence.

*   **Cumulative Probability:** The sum of the probabilities of all symbols preceding a given symbol in the alphabet order.

*   **Encoding:** The process of converting the input string into a single floating-point number.

*   **Decoding:** The process of reconstructing the original string from the encoded floating-point number.

## 3. The Basic Idea

Arithmetic coding represents an entire message with a *single* number, an interval of real numbers between 0 and 1. This is a key difference from Huffman coding, which represents each symbol with a sequence of bits.  The length of the interval is based on the probability of the symbols in the message.  More frequent symbols will reduce the interval less, therefore leading to a shorter representation.

**Key Steps:**

1.  **Probability Assignment:** Assign probabilities to each symbol in the alphabet.  These probabilities can be fixed (static model) or adaptively updated (adaptive model).

2.  **Interval Subdivision:** Divide the interval [0, 1) into sub-intervals, each corresponding to a symbol. The size of each sub-interval is proportional to the probability of the corresponding symbol.

3.  **Encoding Process:**
    *   Start with the interval [0, 1).
    *   For each symbol in the input string:
        *   Narrow the current interval to the sub-interval corresponding to the symbol.  The new interval becomes the current interval for the next symbol.
    *   After encoding all symbols, choose any number within the final interval as the encoded output.

4.  **Decoding Process:**
    *   Use the same probability model as the encoder.
    *   Determine which sub-interval the encoded number falls into. This identifies the first symbol.
    *   Scale the encoded number based on the selected interval.
    *   Repeat the process until the entire message is decoded.

## 4. Arithmetic Coding vs. Huffman Coding

| Feature        | Arithmetic Coding                                   | Huffman Coding                                          |
|----------------|---------------------------------------------------|---------------------------------------------------------|
| Representation | Entire message as a single real number (interval) | Each symbol as a sequence of bits (variable-length code) |
| Efficiency    | Often higher compression ratio, especially for skewed probabilities | Less efficient for skewed probabilities                   |
| Complexity    | More computationally intensive                         | Less computationally intensive                            |
| Adaptability | Can easily adapt to changing probabilities (adaptive models) | Requires rebuilding the code tree when probabilities change |

## 5. Example

Let's consider a simple example to encode the string "ABA" using arithmetic coding. Assume the alphabet is {A, B} and the probabilities are:

*   P(A) = 0.6
*   P(B) = 0.4

**Encoding:**

1.  **Initial Interval:** [0, 1)

2.  **First Symbol (A):**
    *   The new interval is [0, 0.6) (0 + (1-0)*0.6 = 0.6)

3.  **Second Symbol (B):**
    *   The new interval is [0 + 0.6*0.4, 0 + 0.6*1)  which simplifies to [0.24, 0.6) (Lower Bound = 0.24, Upper Bound = 0.6)

4.  **Third Symbol (A):**
    *   The new interval is [0.24 + 0.36*0, 0.24 + 0.36*0.6) which simplifies to [0.24, 0.456) (Lower Bound = 0.24, Upper Bound = 0.456)

5.  **Final Encoding:**
    *   Any number within the interval [0.24, 0.456) can be chosen as the encoded output. For example, 0.3.

**Decoding:**

To decode 0.3, we would use the same probability model:

1.  **Initial Interval:** [0, 1)

2.  **First Symbol:** 0.3 falls within [0, 0.6), so the first symbol is A.

3.  **Scaled Value:** (0.3 - 0) / 0.6 = 0.5

4.  **Second Symbol:** 0.5 falls within [0.6, 1), so the second symbol is B. This is incorrect because the scaled values and sub-intervals must have a cumulative probability.

    Let's correct our scaling, sub-intervals and cumulative probabilities:
    We need to take cumulative probability into account. So the scaling will be as follows

    * Sub-Interval for A would be [0, 0.6)
    * Sub-Interval for B would be [0.6, 1.0)

    This results in

    1. Initial Interval: [0, 1)
    2. First Symbol: 0.3 falls within [0, 0.6) , therefore the first symbol is A.
    3. Scaled Value: (0.3 - 0) / 0.6 = 0.5
    4. Second Symbol: 0.5 falls within [0, 0.6), therefore the second symbol is A. This is incorrect. Lets correct the issue below.

    To resolve this issue, we use sub-interval [0,1), and cumulative probabilities to derive correct intervals and scaling.
    Lets walk through the steps:

    1. First Symbol: encoded value of 0.3 falls into [0, 0.6) (A) (cumulative probability of 0)
    2. (0.3 - 0) / 0.6 = 0.5   #this gives us value of .5 which is scaled between 0-1 for use in the decoding process.
    3. Second Symbol: The number 0.5 falls in the interval [0.6, 1) which corresponds to the letter B. This is now correct.
    4. (0.5-0.6) / (1 - 0.6) = ( -0.1 / 0.4) = -0.25
    5. The new encoded value is -0.25. Because this value is negative, our approach is wrong, and we need to consider all previous information.

*DECODING PROCESS: Updated version*

Lets walk through the decoding using the sub-intervals derived from cumulative probability:

1. Enclose 0.3 in its initial limits: [0, 1).
2. Symbol one is found by determining the interval of [0.0, 0.6), this corresponds to the symbol A.
3. With symbol A derived from the encoded number 0.3, we update our new sub-interval that is [0.24, 0.456) based off of the final encoded sub-interval.
4. The next symbol is derived by where the encoded number sits in the interval [0.24, 0.456) which sits within the probabilities of the letter B.
5. Once we know where symbol B sits between the probabilities, we can conclude that our last symbol is A.

*RESULT: DECODED STRING: ABA*

**Note:** This is a simplified example.  In practice, we need to handle the precision limitations of computers and use techniques like scaling to prevent the interval from shrinking too much.

## 6. Advantages of Arithmetic Coding

*   **High Compression Ratio:**  Can achieve compression ratios close to the theoretical limit (entropy) of the data, especially for sources with highly skewed probabilities.

*   **Adaptability:**  Easily integrates with adaptive models, where probabilities are updated dynamically during encoding and decoding.

*   **Flexibility:** Works with any type of data, as long as a probability distribution can be assigned to the symbols.

## 7. Disadvantages of Arithmetic Coding

*   **Computational Complexity:** More computationally intensive than simpler techniques like Huffman coding.

*   **Precision Requirements:** Requires high precision arithmetic to represent the shrinking interval, which can be demanding on hardware resources.

*   **Patent Issues:**  Historically, there have been patent issues associated with arithmetic coding, though many key patents have now expired.

## 8. Important Points to Remember

*   Arithmetic coding represents the entire message as a single number.
*   The size of the interval is proportional to the probability of the symbols.
*   High precision is crucial for accurate encoding and decoding.
*   Adaptive models can improve compression performance.

## 9. Practice Questions/Exercises

**Question 1:** Explain the key difference between Huffman coding and arithmetic coding in terms of how they represent the input data.

**Answer:** Huffman coding represents each *symbol* with a variable-length code, while arithmetic coding represents the *entire message* with a single floating-point number.

**Question 2:**  Why is high precision arithmetic important in arithmetic coding?

**Answer:**  High precision arithmetic is essential because the interval representing the message shrinks with each encoded symbol.  Insufficient precision can lead to rounding errors and loss of information, resulting in incorrect decoding.

**Question 3:** Briefly describe the encoding process in arithmetic coding.

**Answer:** The encoding process involves repeatedly narrowing the interval [0, 1) based on the probabilities of the symbols in the input string.  The final interval represents the encoded message, and any number within that interval can be chosen as the encoded output.

**Question 4:**  Consider a simple alphabet {X, Y} with P(X) = 0.8 and P(Y) = 0.2.  Encode the string "XXY" using arithmetic coding. Show the interval at each step.

**Answer:**
1. Initial Interval: [0, 1)
2. First Symbol (X): [0, 0.8)
3. Second Symbol (X): [0, 0.64)
4. Third Symbol (Y): [0.64*0, 0.64 * .2) or [0.64, 0.64)
The final encoding is 0 + (.64 - 0) (0.2) or [0.512, 0.64). You can pick any value within this range.

**Question 5:** What are some advantages and disadvantages of using an adaptive model in arithmetic coding?

**Answer:**
*   **Advantages:** Adaptive models can achieve better compression performance by adjusting to changing probabilities in the input data.
*   **Disadvantages:** Adaptive models are more complex to implement and require more processing power.  They also require the encoder and decoder to maintain synchronized probability estimates.
