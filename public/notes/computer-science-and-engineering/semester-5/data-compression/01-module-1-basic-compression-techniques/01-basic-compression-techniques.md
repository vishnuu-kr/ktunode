---
title: "Basic Compression Techniques :-"
subject: "DATA COMPRESSION"
module: "Module 1: Basic Compression Techniques :"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b773"
status: "completed"
scrapedAt: "2026-05-20T16:44:19.287Z"
---
# DATA COMPRESSION - Module 1: Basic Compression Techniques

## Topic: Basic Compression Techniques

### Learning Outcomes:

Upon completion of this topic, you should be able to:

*   Understand the fundamental concepts of data compression.
*   Differentiate between lossless and lossy compression.
*   Explain and apply Huffman coding for lossless compression.
*   Describe Run-Length Encoding (RLE) and its applications.
*   Describe Dictionary based Coding such as Lempel-Ziv (LZ77, LZ78)
*   Evaluate the effectiveness of different compression techniques.
*   Understand the concept of entropy and its relationship to compression.

### 1. Introduction to Data Compression

*   **Definition:** Data compression is the process of reducing the amount of storage space or bandwidth required to represent a given amount of data.
*   **Goal:** To represent information using fewer bits than the original representation, without losing (or minimally losing) essential information.
*   **Why Compress Data?**
    *   **Reduced Storage Space:**  Allows storing more data on a given storage medium.
    *   **Faster Transmission:**  Reduces the bandwidth required to transmit data, leading to faster transfer rates.
    *   **Cost Savings:** Lower storage and bandwidth requirements translate into cost savings.
*   **Key Concepts:**
    *   **Redundancy:** The presence of unnecessary or repetitive information in the data. Compression algorithms aim to remove or reduce this redundancy.
    *   **Data Encoding:** The process of converting data from one format to another, often to achieve compression.
    *   **Compression Ratio:** The ratio of the size of the original data to the size of the compressed data.  `Compression Ratio = Original Size / Compressed Size`
    *   **Compression Factor:** Inverse of Compression Ratio.  `Compression Factor = Compressed Size / Original Size`
*   **Types of Compression:**
    *   **Lossless Compression:**  Reconstructs the original data perfectly from the compressed data. Suitable for text, source code, and critical data where no loss is acceptable. Examples: Huffman coding, Run-Length Encoding (RLE), Lempel-Ziv (LZ) algorithms.
    *   **Lossy Compression:**  Some data is lost during compression, resulting in a smaller file size. Acceptable for images, audio, and video where a slight degradation in quality is often imperceptible. Examples: JPEG, MP3, MPEG.

### 2. Lossless vs. Lossy Compression

| Feature          | Lossless Compression                                  | Lossy Compression                                     |
|-------------------|------------------------------------------------------|------------------------------------------------------|
| Data Loss        | No data loss. Original data is perfectly reconstructed. | Some data is lost during compression.              |
| Compression Ratio | Generally lower than lossy compression.               | Generally higher than lossless compression.              |
| Use Cases        | Text files, source code, archives, medical images. | Images, audio, video where slight quality degradation is acceptable. |
| Complexity       | Generally less complex.                             | Generally more complex.                             |
| Examples         | Huffman coding, RLE, Lempel-Ziv (LZ)                | JPEG, MP3, MPEG                                    |

### 3. Huffman Coding

*   **Description:** A statistical lossless data compression algorithm used for variable-length encoding. It assigns shorter codes to more frequent symbols and longer codes to less frequent symbols.
*   **Algorithm Steps:**
    1.  **Frequency Analysis:** Calculate the frequency of each symbol in the input data.
    2.  **Tree Construction:**
        *   Create a leaf node for each symbol and its frequency.
        *   Repeatedly merge the two nodes with the lowest frequencies to form a new parent node, whose frequency is the sum of the merged nodes' frequencies.
        *   Repeat until only one node (the root) remains.
    3.  **Code Assignment:** Traverse the Huffman tree from the root to each leaf. Assign '0' to the left branch and '1' to the right branch. The code for each symbol is the sequence of 0s and 1s along the path from the root to its leaf.
    4.  **Encoding:** Replace each symbol in the input data with its corresponding Huffman code.
*   **Decoding:** Use the Huffman tree to decode the compressed data. Read the compressed bit stream, traversing the tree based on the '0' and '1' values until a leaf node is reached. The symbol at the leaf node is the decoded symbol.
*   **Example:**

    Let's say we have the string "AABBBCCCC"

    1.  **Frequency Analysis:**

        *   A: 2
        *   B: 3
        *   C: 4
    2.  **Tree Construction:** (Visual representation is best for understanding.  Imagine building a tree from the bottom up.)  The lowest two frequencies are A(2) and B(3), so you combine them into a new node AB(5).  Then combine AB(5) and C(4) into the root node ABC(9).
    3.  **Code Assignment:**

        *   A: 10
        *   B: 11
        *   C: 0

    4.  **Encoding:**
        *   Original string: AABBBCCCC
        *   Encoded string: 1010111110000 (13 bits)
        *   Original String bits: 9 * 8 = 72 bits (assuming 8 bits per char)
*   **Benefits:** Highly effective for data with uneven symbol frequencies.
*   **Drawbacks:** Requires frequency analysis, which adds overhead. Not suitable for data with uniform symbol frequencies.
*   **Important Points to Remember:**
    *   Huffman codes are prefix codes, meaning no code is a prefix of another code. This ensures unambiguous decoding.
    *   The Huffman tree is not unique, but the compression ratio will be the same for any valid Huffman tree.

### 4. Run-Length Encoding (RLE)

*   **Description:** A simple lossless compression algorithm that replaces consecutive occurrences of the same symbol (a run) with a single instance of the symbol and the number of times it occurs.
*   **Algorithm:**
    1.  Scan the input data for runs of consecutive identical symbols.
    2.  Replace each run with a pair: `(symbol, count)`, where `symbol` is the repeating symbol and `count` is the number of repetitions.
*   **Example:**

    *   Original data: `WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB`
    *   RLE encoded data: `(W,12)(B,1)(W,14)(B,3)(W,24)(B,1)`
*   **Benefits:**  Easy to implement, effective for data with long runs of identical symbols.
*   **Drawbacks:**  Can increase file size if there are few runs (e.g., random data).
*   **Variations:**
    *   **Byte-aligned RLE:**  Counts are stored as bytes. Limited to runs of 255 characters.
    *   **Bit-aligned RLE:**  Counts are stored using a specific number of bits.
*   **Applications:**  Image compression (e.g., fax machines), simple data formats.
*   **Important Points to Remember:**
    *   RLE works best on data with repeating sequences.
    *   Choose the appropriate count representation (byte-aligned, bit-aligned) based on the expected run lengths.

### 5. Dictionary based Coding : Lempel-Ziv (LZ77, LZ78)

*   **Description:** Dictionary-based compression algorithms build a dictionary of previously seen sequences and replace occurrences of those sequences with pointers to their dictionary entries. These methods are lossless.
*   **Key concepts:**
    *   **Dictionary:** A table of strings (sequences of symbols) that have already been encountered in the data.
    *   **Pointer:** A reference to an entry in the dictionary. This pointer usually consists of an offset (location in the dictionary) and a length (number of symbols).
*   **LZ77 (Sliding Window)**
    *   Maintains a *sliding window* over the previously seen text. This window consists of two parts: a *search buffer* and a *lookahead buffer*.
    *   **Encoding process:** For each symbol in the lookahead buffer, the algorithm searches for the longest match in the search buffer. If a match is found, the algorithm outputs a triple `(offset, length, next_symbol)`:
        *   `offset`: The distance from the beginning of the search buffer to the start of the match.
        *   `length`: The length of the match.
        *   `next_symbol`: The next symbol in the lookahead buffer *after* the match.
        If no match is found, the algorithm outputs `(0, 0, next_symbol)`.
    *   **Decoding process:** The decoder maintains the same sliding window. For each triple `(offset, length, next_symbol)`, the decoder copies `length` symbols from the search buffer at the given `offset`, and then appends `next_symbol` to the output.
    *   **Example:** Suppose the sliding window is of size 10, and the current text is "abcabcbbca". The search buffer is "abcabcbb", and the lookahead buffer is "ca". The longest match for "ca" in the search buffer is "ca" at offset 3. The encoder outputs `(3, 2, ' ')`.
*   **LZ78 (Dictionary based)**
    *   Builds an explicit dictionary of strings. The dictionary is initialized as empty.
    *   **Encoding process:** The algorithm reads the input string symbol by symbol. At each step, it searches for the longest match in the dictionary. If a match is found, the algorithm outputs a pair `(index, next_symbol)`, where:
        *   `index`: The index of the matching dictionary entry.
        *   `next_symbol`: The next symbol in the input *after* the match.
        The algorithm then adds the matched string, followed by the `next_symbol`, to the dictionary as a new entry.
        If no match is found, the algorithm outputs `(0, next_symbol)` and adds the `next_symbol` to the dictionary.
    *   **Decoding process:** The decoder builds the same dictionary as the encoder. For each pair `(index, next_symbol)`, the decoder looks up the dictionary entry at the given `index`, appends the corresponding string to the output, and then appends `next_symbol`. The decoder then adds the combined string (dictionary entry + `next_symbol`) to its dictionary.
    *   **Example:** Encoding "ababcbababa":
        1.  (0, a) - Dictionary: 1: a
        2.  (0, b) - Dictionary: 1: a, 2: b
        3.  (1, b) - Dictionary: 1: a, 2: b, 3: ab
        4.  (2, c) - Dictionary: 1: a, 2: b, 3: ab, 4: bc
        5.  (3, a) - Dictionary: 1: a, 2: b, 3: ab, 4: bc, 5: aba
        6.  (2, a) - Dictionary: 1: a, 2: b, 3: ab, 4: bc, 5: aba, 6: ba
*   **Benefits:**  Effective at capturing repeating patterns, even when the repetitions are not consecutive. Adaptable to changing data characteristics.
*   **Drawbacks:** Can be computationally expensive, especially LZ77, which requires searching a buffer. Dictionary size needs to be managed carefully.
*   **Applications:**  ZIP archives (DEFLATE, a variant of LZ77), GIF images (LZW, a variant of LZ78).
*   **Important points to remember:**
    *   LZ algorithms are adaptive, meaning they learn patterns in the data as they compress it.
    *   Variants of LZ algorithms exist (LZW, DEFLATE) that improve performance and memory usage.

### 6. Entropy and Data Compression

*   **Definition:** Entropy is a measure of the uncertainty or randomness of a source of data. It quantifies the average amount of information contained in each symbol or event.
*   **Formula:** The entropy H of a discrete random variable X with possible values {x1, x2, ..., xn} and probabilities P(x1), P(x2), ..., P(xn) is defined as:

    `H(X) = - Σ P(xi) * log2(P(xi))`  (summation from i=1 to n)

    Where `log2` is the base-2 logarithm.  The unit of entropy is bits per symbol.
*   **Relationship to Compression:**
    *   Entropy provides a theoretical lower bound on the number of bits required to represent a symbol without loss of information.
    *   Ideal lossless compression algorithms aim to achieve a compression ratio that approaches the entropy of the data source.  In reality, this is hard to achieve due to overhead and limitations of the algorithms.
    *   Data with high entropy (more randomness) is harder to compress than data with low entropy (more predictability).
*   **Example:**
    *   A fair coin toss has an entropy of 1 bit per toss (50% heads, 50% tails).
    *   A biased coin toss (90% heads, 10% tails) has an entropy less than 1 bit per toss.
*   **Significance:** Understanding entropy helps to assess the potential for data compression. Data with low entropy offers better compression possibilities.
*   **Important Points to Remember:**
    *   Entropy is a fundamental concept in information theory and is closely related to data compression.
    *   The higher the entropy, the harder it is to compress the data effectively.

### 7. Evaluating Compression Techniques

*   **Metrics:**
    *   **Compression Ratio:**  Original Size / Compressed Size.  A higher compression ratio indicates better compression.
    *   **Compression Factor:** Compressed Size / Original Size.  A lower compression factor indicates better compression.
    *   **Compression Speed:** The time it takes to compress the data.
    *   **Decompression Speed:** The time it takes to decompress the data.
    *   **Memory Requirements:**  The amount of memory required by the compression and decompression algorithms.
    *   **Complexity:**  The computational complexity of the algorithms.
    *   **Quality (for lossy compression):** Metrics like PSNR (Peak Signal-to-Noise Ratio) and SSIM (Structural Similarity Index) are used to evaluate the quality of reconstructed data after lossy compression.
*   **Factors to Consider:**
    *   **Type of data:** Different compression techniques are suitable for different types of data (text, images, audio, video).
    *   **Application requirements:** Some applications require high compression ratios, while others require fast compression and decompression speeds.
    *   **Trade-offs:**  There are often trade-offs between compression ratio, speed, and complexity.
*   **Important Points to Remember:**
    *   Choose the compression technique that best meets the specific needs of the application.
    *   Consider the trade-offs between different performance metrics.

### Practice Questions

1.  **Differentiate between lossless and lossy compression techniques, giving examples of each.**

    *Answer:* Lossless compression allows perfect reconstruction of the original data, while lossy compression sacrifices some data to achieve higher compression ratios. Examples of lossless techniques include Huffman coding, RLE, and LZ algorithms. Examples of lossy techniques include JPEG, MP3, and MPEG.*

2.  **Explain how Huffman coding works. Provide an example with a sample string and show the steps to generate the Huffman code.**

    *Answer:* (See Section 3 above for explanation and example)*

3.  **What are the advantages and disadvantages of Run-Length Encoding (RLE)?**

    *Answer:* Advantages: Simple to implement, effective for data with long runs of identical symbols. Disadvantages: Can increase file size if there are few runs.*

4. **Explain in your own words the difference between LZ77 and LZ78.**

    *Answer:* LZ77 uses a sliding window of previously seen text to find matches, while LZ78 builds an explicit dictionary to store seen sequences.*

5.  **Calculate the entropy of a source that emits three symbols with probabilities 0.5, 0.3, and 0.2.**

    *Answer:* H = - (0.5 * log2(0.5) + 0.3 * log2(0.3) + 0.2 * log2(0.2)) ≈ 1.485 bits/symbol*

6.  **What factors should be considered when evaluating different compression techniques?**

    *Answer:*  Compression ratio, compression speed, decompression speed, memory requirements, complexity, and quality (for lossy compression).*

### Important Points to Remember (Overall)

*   Data compression is essential for efficient storage and transmission of data.
*   Choose the appropriate compression technique based on the type of data and application requirements.
*   Understand the trade-offs between different compression techniques (e.g., compression ratio vs. speed).
*   Entropy is a theoretical limit on compression, providing a benchmark for evaluating the effectiveness of compression algorithms.
