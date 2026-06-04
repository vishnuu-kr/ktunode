---
title: "Advanced Techniques :-"
subject: "DATA COMPRESSION"
module: "Module 2: Advanced Techniques :"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b783"
status: "completed"
scrapedAt: "2026-05-20T16:44:29.797Z"
---
## Data Compression: Module 2 - Advanced Techniques

**Topic: Advanced Techniques**

**Learning Outcomes:**

Upon completion of this topic, you will be able to:

1.  Explain the principles and advantages of dictionary-based compression techniques (LZ77, LZ78, LZW).
2.  Describe and apply Burrows-Wheeler Transform (BWT) for data compression.
3.  Understand and utilize context modeling techniques for enhanced compression.
4.  Explain the concept and benefits of arithmetic coding and its relation to Huffman coding.
5.  Evaluate the performance of different compression techniques.
6.  Discuss the applications and limitations of advanced compression techniques in real-world scenarios.

**1. Dictionary-Based Compression Techniques**

*   **Concept:** These techniques replace frequently occurring sequences of data with shorter codes, effectively building a "dictionary" of these sequences. This dictionary can be static (predefined) or dynamic (built during compression).

*   **Advantages:** Can achieve good compression ratios, particularly for repetitive data. Relatively simple to implement (especially LZ77).

*   **Types:**

    *   **LZ77 (Lempel-Ziv 77):**
        *   **Principle:** Uses a *sliding window* consisting of a *search buffer* and a *lookahead buffer*. It searches the search buffer for the longest match of the lookahead buffer sequence. The output consists of an *offset* (distance from the start of the search buffer), *length* (length of the match), and *next symbol* (the symbol following the match in the lookahead buffer).
        *   **Example:** Consider the string "abcabcbbabc". Assume a window size of 10 (search buffer = 7, lookahead buffer = 3). When compressing the second "abc", the algorithm finds a match in the search buffer starting at offset 0 with a length of 3. The output would be (0, 3, 'b').
        *   **Encoding:** (offset, length, next character) - Typically encoded using variable-length codes.
        *   **Decoding:** Decodes by copying the matched sequence from the search buffer based on the offset and length. The 'next character' is appended.
        *   **Limitations:** Can struggle with data that doesn't have long repeating patterns.

    *   **LZ78 (Lempel-Ziv 78):**
        *   **Principle:** Builds a dictionary incrementally.  The encoder maintains a dictionary of previously seen phrases.  It looks for the longest prefix of the input that is already in the dictionary. The output is an index into the dictionary (the prefix) and the next character in the input.
        *   **Example:** Consider the string "abcabcbbabc".
            1.  Dictionary: {0: null}
            2.  Input: "a" - Not in the dictionary. Output: (0, 'a'). Dictionary updated: {0: null, 1: "a"}
            3.  Input: "b" - Not in the dictionary. Output: (0, 'b'). Dictionary updated: {0: null, 1: "a", 2: "b"}
            4.  Input: "c" - Not in the dictionary. Output: (0, 'c'). Dictionary updated: {0: null, 1: "a", 2: "b", 3: "c"}
            5.  Input: "a" - In the dictionary (index 1).  Input becomes "ab" - Not in the dictionary. Output: (1, 'b'). Dictionary updated: {0: null, 1: "a", 2: "b", 3: "c", 4: "ab"}
        *   **Encoding:** (dictionary index, next character)
        *   **Decoding:** Reconstructs the dictionary in parallel with the encoder.  Uses the dictionary index to retrieve the prefix and appends the character to reconstruct the sequence.
        *   **Limitations:** Requires the decoder to maintain an identical copy of the dictionary.

    *   **LZW (Lempel-Ziv-Welch):**
        *   **Principle:** A variant of LZ78, but it initializes the dictionary with all single-character strings.  It then encodes sequences by finding the longest prefix in the dictionary, outputting its index, and adding the prefix + the next character to the dictionary.  *Crucially, it does not explicitly transmit the next character.*  This is its main difference from LZ78.
        *   **Example:** Consider the string "ABABABABA". Initially, dictionary = {A: 0, B: 1}.
            1.  Input: "A" - Output: 0.  Dictionary update: {A: 0, B: 1, AB: 2}
            2.  Input: "B" - Output: 1. Dictionary update: {A: 0, B: 1, AB: 2, BA: 3}
            3.  Input: "AB" - Output: 2. Dictionary update: {A: 0, B: 1, AB: 2, BA: 3, ABA: 4}
            4.  Input: "ABA" - Output: 4. Dictionary update: {A: 0, B: 1, AB: 2, BA: 3, ABA: 4, ABAB: 5}
            5.  Input: "BA" - Output: 3. Dictionary update: {A: 0, B: 1, AB: 2, BA: 3, ABA: 4, ABAB: 5, BABA: 6}
            6.  Input: "A" - Output: 0
        *   **Encoding:** (dictionary index)
        *   **Decoding:** Similar to LZ78, builds the dictionary incrementally in parallel with the encoder. Requires careful handling of special cases where the encoder's ahead of the decoder in dictionary construction (e.g., emitting an index for a phrase that isn't fully in the decoder's dictionary yet - solvable by duplicating the previous decoded character).
        *   **Advantages:** Often better compression than LZ77 or LZ78 in practical scenarios due to its implicit handling of the next character.
        *   **Disadvantages:**  Can perform poorly if the input data has very little repetition.  Historically, was subject to patent issues (now expired).

**2. Burrows-Wheeler Transform (BWT)**

*   **Concept:** A reversible *permutation* of a string that tends to group similar characters together.  It doesn't actually compress data itself; it *prepares* the data for better compression by other algorithms, especially move-to-front coding and entropy encoding (like Huffman or Arithmetic coding).

*   **Steps:**
    1.  **Circular Rotations:** Generate all circular rotations of the input string.
    2.  **Sort:** Sort these rotations lexicographically (alphabetically).
    3.  **Last Column:**  The last column of the sorted matrix is the BWT output.

*   **Example:** Input: "BANANA$" (where '$' is a special end-of-string character).

    1.  Rotations:

        ```
        BANANA$
        ANANA$B
        NANA$BA
        ANA$BAN
        NA$BANA
        A$BANAN
        $BANANA
        ```

    2.  Sorted Rotations:

        ```
        $BANANA
        A$BANAN
        ANANA$B
        ANA$BAN
        BANANA$
        NA$BANA
        NANA$BA
        ```

    3.  BWT Output: "ANNBA$AA"

*   **Inverse BWT:**  Reconstructs the original string from the BWT output.  This process is more complex, but relies on the fact that the order of the first column of the sorted rotations is the same as the order of the characters in the original string.

*   **Why it works:**  The BWT groups characters that tend to occur in the same context together. In the example, the 'A's are clustered because they often appear after 'N'.

*   **Move-To-Front (MTF) Coding:** A technique often used *after* BWT.  It maintains a list of symbols.  When a symbol is encountered, its index in the list is output, and the symbol is moved to the front of the list.  This results in smaller indices for frequently occurring symbols.

*   **Advantages:** Significantly improves the compressibility of data, especially when combined with other techniques.

*   **Disadvantages:** BWT itself doesn't compress; requires further processing (MTF and entropy encoding).  Can be computationally expensive for large strings.

**3. Context Modeling**

*   **Concept:** Predicts the probability of the next symbol based on the preceding symbols (the context). The context is used to refine the probability estimates, leading to better compression with techniques like arithmetic coding.

*   **Example:** In English text, the letter "u" is highly likely to follow the letter "q".  A context model would learn this and assign a high probability to "u" when "q" is the current context.

*   **Types:**
    *   **Fixed-Order Modeling:** Uses a fixed number of preceding symbols as the context (e.g., order-1: the previous symbol, order-2: the previous two symbols).
    *   **Adaptive Modeling:** The context model adapts to the input data. The more data it sees, the better its predictions become.  Techniques include PPM (Prediction by Partial Matching).

*   **PPM (Prediction by Partial Matching):**  A sophisticated adaptive context modeling technique.
    *   Starts with a long context (e.g., the last few symbols).
    *   If the next symbol cannot be predicted based on this context, it "escapes" to a shorter context.
    *   Continues to escape to shorter contexts until a prediction can be made, or it reaches the order-0 model (which predicts based on the overall frequency of symbols).
    *   Uses escape probabilities to account for the transitions between different context lengths.

*   **Advantages:** Can significantly improve compression, especially for data with strong local patterns.

*   **Disadvantages:** Can be computationally expensive, particularly for higher-order models. Requires significant memory to store the context model.

**4. Arithmetic Coding**

*   **Concept:** A more efficient form of entropy encoding than Huffman coding. Instead of assigning integer code lengths to symbols, arithmetic coding represents the entire input sequence as a *single* floating-point number within the interval [0, 1). The length of the interval assigned to each symbol is proportional to its probability.

*   **How it works:**
    1.  **Interval Division:** Start with the interval [0, 1).  Divide the interval into sub-intervals whose lengths are proportional to the probabilities of the input symbols.
    2.  **Sub-Interval Selection:** Select the sub-interval corresponding to the first symbol.
    3.  **Recursion:** Treat the selected sub-interval as the new interval and repeat steps 1 and 2 for each subsequent symbol.
    4.  **Output:**  After encoding all symbols, choose any number within the final sub-interval as the encoded representation.

*   **Example:**  Let's encode "CAB" with probabilities P(A)=0.1, P(B)=0.6, P(C)=0.3.

    1.  Initial interval: [0, 1)
    2.  Encoding "C":  New interval: [0, 0.3)
    3.  Encoding "A": New interval: [0.27, 0.3) (0.3 * 0.1 = 0.03 interval width added to the lower bound of the previous interval)
    4.  Encoding "B": New interval: [0.288, 0.3) (0.03 * 0.6 = 0.018 interval width added to the lower bound of the previous interval)
    5.  Output: Any number within [0.288, 0.3), like 0.29.

*   **Decoding:** The decoder uses the same probability model to reconstruct the original sequence by repeatedly identifying the symbol whose sub-interval contains the encoded number.

*   **Advantages:**
    *   Can achieve compression ratios very close to the theoretical entropy limit.
    *   Handles fractional bit allocations, which is particularly useful for low-probability symbols.  Better than Huffman Coding for these scenarios.
    *   Works well with context modeling, as the probability distribution can be updated adaptively based on the context.

*   **Disadvantages:**
    *   More computationally complex than Huffman coding.
    *   Requires high-precision arithmetic to avoid rounding errors.
    *   Historically subject to patent issues.

*   **Relation to Huffman Coding:** Both are entropy encoding techniques. Huffman assigns integer lengths to codes based on probability; arithmetic coding doesn't, and can therefore be more efficient. Arithmetic coding generally achieves better compression, especially when symbol probabilities are not powers of 1/2, which leads to inefficient Huffman coding.

**5. Evaluating Compression Performance**

*   **Compression Ratio:** The ratio of the original size of the data to the compressed size.  A higher ratio indicates better compression.
    *   `Compression Ratio = Original Size / Compressed Size`

*   **Space Saving:** The percentage reduction in size achieved by compression.
    *   `Space Saving = (1 - (Compressed Size / Original Size)) * 100%`

*   **Entropy:**  A theoretical lower bound on the average number of bits required to represent a symbol from a source.  It quantifies the information content of a source.  Compression algorithms aim to approach the entropy limit.

*   **Other factors:**
    *   **Computational complexity (encoding/decoding time):**  How long it takes to compress and decompress the data.
    *   **Memory requirements:** How much memory is required by the compression and decompression algorithms.
    *   **Ease of implementation:**  How easy it is to implement the algorithm.

**6. Applications and Limitations**

*   **Applications:**

    *   **Image Compression:** JPEG2000 (uses wavelet transforms and arithmetic coding)
    *   **Video Compression:** H.264, H.265/HEVC (use motion estimation, transform coding, and entropy coding)
    *   **Data Archiving:**  ZIP, GZIP (use variations of LZ77/LZ78)
    *   **Text Compression:** BZIP2 (uses BWT, MTF, and Huffman coding)
    *   **Genomics:** Compression of DNA sequences.

*   **Limitations:**

    *   **Computational Complexity:** Some advanced techniques, like arithmetic coding and PPM, are computationally expensive, which can limit their use in real-time applications.
    *   **Memory Requirements:** Context modeling and dictionary-based techniques can require significant memory to store the model or dictionary.
    *   **Performance Degradation:** The performance of some algorithms (e.g., LZW) can degrade if the input data doesn't have the expected characteristics (e.g., little repetition).
    *   **Patent Restrictions:** Historically, some compression algorithms have been subject to patent restrictions, which limited their use in certain applications (many of these have now expired).
    *   **No Free Lunch Theorem:** There is no single compression algorithm that performs optimally for all types of data. The best algorithm depends on the characteristics of the data.  Some compression techniques might actually *increase* the size of the data (negative compression).

**Important Points to Remember:**

*   Advanced compression techniques aim to achieve higher compression ratios than simpler techniques by exploiting more sophisticated statistical properties of the data.
*   Dictionary-based techniques replace recurring sequences with shorter codes.
*   BWT reorders data to improve compression with subsequent techniques.
*   Context modeling uses prior symbols to predict the probability of the next symbol.
*   Arithmetic coding can achieve compression close to the theoretical entropy limit.
*   The choice of compression algorithm depends on the characteristics of the data and the application requirements.

**Practice Questions/Exercises:**

1.  **Explain the difference between LZ77 and LZ78.**
    *   *Answer:* LZ77 uses a sliding window to find matches in the past data, while LZ78 builds a dictionary of phrases incrementally.  LZ77 outputs (offset, length, next character), while LZ78 outputs (dictionary index, next character).

2.  **What is the purpose of the Burrows-Wheeler Transform (BWT)? Does it compress data directly?**
    *   *Answer:* The BWT reorders the input string to group similar characters together. It doesn't compress directly; it *prepares* the data for better compression by other algorithms like MTF and Huffman coding.

3.  **Describe the core idea behind context modeling. Give an example.**
    *   *Answer:* Context modeling predicts the probability of the next symbol based on the preceding symbols (the context). Example: In English, the letter "u" is highly likely to follow the letter "q".

4.  **Explain the key advantage of Arithmetic Coding over Huffman Coding.**
    *   *Answer:* Arithmetic coding can achieve compression ratios very close to the theoretical entropy limit and handles fractional bit allocations, which is particularly useful for low-probability symbols. Huffman coding assigns integer code lengths, making it less efficient for such cases.

5.  **Calculate the compression ratio and space saving if a file of 10MB is compressed to 4MB.**
    *   *Answer:*
        *   Compression Ratio = 10MB / 4MB = 2.5
        *   Space Saving = (1 - (4MB / 10MB)) * 100% = 60%

6.  **Why is the '$' symbol important in the BWT process?**

    *   *Answer:* The '$' is a unique end-of-string marker that is lexicographically smaller than any other character in the input. It guarantees that the original string can be uniquely reconstructed during the inverse BWT.

7.  **What is Move-to-Front (MTF) coding, and why is it often used after BWT?**

    *   *Answer:* MTF coding maintains an ordered list of symbols.  When a symbol is encountered, its index is output, and the symbol is moved to the front of the list.  It's often used after BWT because BWT tends to group similar characters, leading to frequent occurrences of the same characters in sequence, which results in small indices being output by MTF.

These notes provide a comprehensive overview of advanced data compression techniques. Remember to review the examples and practice questions to solidify your understanding. Good luck with your studies!
