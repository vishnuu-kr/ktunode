---
title: "Huffman Encoding - Huffman Decoding"
subject: "DATA COMPRESSION"
module: "Module 1: Basic Compression Techniques :"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b77a"
status: "completed"
scrapedAt: "2026-05-20T16:44:24.190Z"
---
# DATA COMPRESSION - Module 1: Basic Compression Techniques
## Topic: Huffman Encoding - Huffman Decoding

### Learning Outcomes:

*   Understand the concept of variable-length coding.
*   Describe the Huffman Encoding algorithm.
*   Apply the Huffman Encoding algorithm to generate an optimal prefix code.
*   Understand the concept of Prefix Codes
*   Understand and implement Huffman Decoding.
*   Calculate the compression ratio achieved by Huffman encoding.
*   Identify the limitations of Huffman encoding.

---

### 1. Introduction to Huffman Encoding

*   **What is Huffman Encoding?**
    *   A lossless data compression algorithm.
    *   Uses variable-length codes to represent source symbols (characters, pixels, etc.).
    *   Frequently occurring symbols are assigned shorter codes.
    *   Less frequently occurring symbols are assigned longer codes.
    *   Achieves compression by reducing the average number of bits required to represent the data.
    *   It's a *prefix code*, meaning no codeword is a prefix of another codeword. This allows for unambiguous decoding.

*   **Key Concepts:**
    *   **Symbol:**  A basic unit of data (e.g., a character in a text file, a pixel value in an image).
    *   **Frequency:** The number of times a symbol appears in the input data.
    *   **Code:** A sequence of bits used to represent a symbol.
    *   **Codeword:** The code assigned to a particular symbol.
    *   **Variable-Length Code:** Different symbols are represented by codes of different lengths.
    *   **Fixed-Length Code:** All symbols are represented by codes of the same length (e.g., ASCII).

*   **Why use Variable-Length Coding?**
    *   Fixed-length coding is inefficient when symbol frequencies are unevenly distributed.
    *   Variable-length coding can significantly reduce the average code length when some symbols occur more often than others.

*   **Example:**
    *   Suppose we have the text "AABBBCCCC".  A fixed-length code (2 bits per character) would need 2 bits * 9 characters = 18 bits.
    *   With Huffman, we could have A: 11, B: 10, C: 0. This yields (2 + 2 + 2 + 2 + 1 + 1 + 1 + 1 + 1) = 11 bits. (This will be derived properly in the example section below).

### 2. The Huffman Encoding Algorithm

*   **Step-by-Step Process:**

    1.  **Calculate Frequencies:** Determine the frequency of each symbol in the input data.
    2.  **Create Leaf Nodes:** Create a leaf node for each symbol, containing the symbol and its frequency.
    3.  **Build the Tree:**
        *   While there is more than one node in the forest (collection of trees):
            *   Select the two nodes with the lowest frequencies.
            *   Create a new internal node.
            *   Make the two selected nodes children of the new internal node.  The frequency of the internal node is the sum of the frequencies of its children.
            *   Assign edges leading to children as '0' (left) and '1' (right). (The assignment can be reversed, but must be consistent).
            *   Add the new internal node to the forest.
    4.  **Assign Codes:**  Traverse the tree from the root to each leaf node. The code for a symbol is the sequence of '0's and '1's encountered along the path.

*   **Example: Encoding the string "BCCABBDDAECCBBAEDD":**

    1.  **Frequencies:**
        *   A: 5
        *   B: 6
        *   C: 3
        *   D: 4
        *   E: 2

    2.  **Leaf Nodes:**
        *   A(5), B(6), C(3), D(4), E(2)

    3.  **Build the Tree (Steps are shown visually below, but describe the logic):**

        *   Combine E(2) and C(3) -> New Node EC(5) (E gets '0', C gets '1' initially as children of EC node)
        *   Combine A(5) and EC(5) -> New Node AEC(10) (A gets '0', EC gets '1')
        *   Combine D(4) and B(6) -> New Node DB(10) (D gets '0', B gets '1')
        *   Combine AEC(10) and DB(10) -> New Node AECDB(20) (AEC gets '0', DB gets '1')
           * The final node AECDB(20) is the root node.

        (Note: there are multiple valid Huffman Trees possible. Choosing E/C, then A/D would also be valid.)

    4.  **Assign Codes:**

        *   Trace from the root to each leaf:
            *   A: 00
            *   B: 11
            *   C: 011
            *   D: 10
            *   E: 010

    5. **Encoded string** : 11 011 011 00 11 11 10 10 00 010 011 11 11 00 010 10 10

* **Visualization of the Tree Building Process:**

    *Due to limitations of text-based markdown, representing the tree building process visually can be challenging.  In a real setting, this would be diagrammed step-by-step.  Here's a textual representation of the tree, and what it represents.*

       AECDB(20)
      /       \
     0         1
    /  \       / \
   AEC(10)  DB(10)
  /   \     /  \
 A(00) EC(01) D(10) B(11)
      /  \
     E(010) C(011)

*   **Important Notes:**

    *   The choice of which node to make the left or right child is arbitrary but must be consistent throughout the encoding and decoding process.
    *   Huffman coding guarantees an *optimal* prefix code, meaning it produces the minimum average code length for a given frequency distribution.

### 3. Understanding Prefix Codes

*   **Definition:**  A code in which no codeword is a prefix of any other codeword.
*   **Importance:** Prefix codes allow for unambiguous decoding. When reading a sequence of bits, you can immediately identify the end of a codeword without looking ahead.
*   **Example of a Prefix Code (Huffman code):**
    *   A: 00
    *   B: 11
    *   C: 011
    *   D: 10
    *   E: 010

*   **Example of a *Non*-Prefix Code:**
    *   A: 0
    *   B: 01
    *   C: 10
    *   D: 1
    *   E: 11
    *   In this case, if we read "01", it's unclear if it's "A" followed by "D", or simply "B".

*   **Relationship to Huffman Trees:**  The Huffman tree structure ensures that the resulting code is a prefix code. Because codewords are assigned to leaf nodes, no path from the root to a leaf node is a prefix of any other path to a leaf node.

### 4. Huffman Decoding

*   **Process:**
    1.  Start at the root of the Huffman tree.
    2.  Read the input bitstream, one bit at a time.
    3.  For each '0', move to the left child. For each '1', move to the right child.
    4.  When you reach a leaf node, the symbol associated with that leaf node is the decoded symbol.
    5.  Output the decoded symbol.
    6.  Return to the root of the tree and repeat steps 2-5 until the entire bitstream is decoded.

*   **Example (using the codes from the previous example):**

    *   **Encoded string:** 11011011001111101001111000101010
    *   **Huffman Tree:** (Same as shown in the encoding section)

    *   **Decoding Process:**
        *   "11":  Root -> Right -> Right -> B
        *   "011": Root -> Left -> Right -> Right -> C
        *   "011": Root -> Left -> Right -> Right -> C
        *   "00": Root -> Left -> Left -> A
        *   "11":  Root -> Right -> Right -> B
        *   "11":  Root -> Right -> Right -> B
        *   "10":  Root -> Right -> Left -> D
        *   "10":  Root -> Right -> Left -> D
        *   "00": Root -> Left -> Left -> A
        *   "010": Root -> Left -> Right -> Left -> E
        *   "011": Root -> Left -> Right -> Right -> C
        *   "11":  Root -> Right -> Right -> B
        *   "11":  Root -> Right -> Right -> B
        *   "00": Root -> Left -> Left -> A
        *   "010": Root -> Left -> Right -> Left -> E
        *   "10":  Root -> Right -> Left -> D
        *   "10":  Root -> Right -> Left -> D

    *   **Decoded String:** BCCABBDDAECCBBAEDD

*   **Important Note:** The decoder *must* have access to the same Huffman tree used for encoding.  This often means including the tree structure in the compressed file or having a pre-agreed upon tree.

### 5. Compression Ratio

*   **Definition:**  A measure of how effectively the data has been compressed.

*   **Formula:**

    *   `Compression Ratio = (Original Size) / (Compressed Size)`

*   **Calculation:**

    1.  **Original Size:** Number of symbols * bits per symbol (if fixed-length encoding)
    2.  **Compressed Size:** Sum of (frequency of each symbol * length of its Huffman code)

*   **Example (using the previous example):**

    *   **Original String:** "BCCABBDDAECCBBAEDD" (17 symbols)
    *   **Fixed Length Encoding:** If we used 3 bits per symbol to encode 5 distinct characters (A, B, C, D, E), the original size would be 17 * 3 = 51 bits.
    *   **Huffman Codes:**
        *   A: 00 (2 bits)
        *   B: 11 (2 bits)
        *   C: 011 (3 bits)
        *   D: 10 (2 bits)
        *   E: 010 (3 bits)
    *   **Compressed Size:** (5 * 2) + (6 * 2) + (3 * 3) + (4 * 2) + (2 * 3) = 10 + 12 + 9 + 8 + 6 = 45 bits.
    *   **Compression Ratio:** 51 / 45 = 1.13

    *   **Note:** This is just the size of the compressed *data*. To be a truly useable compressed file, you need to also include the Huffman tree itself, which will slightly reduce the overall compression ratio.

### 6. Limitations of Huffman Encoding

*   **Requires Frequency Information:** The encoder needs to know the frequency of each symbol to build the Huffman tree. This can be obtained by an initial pass through the data, which adds overhead. Alternatively, a pre-defined fixed Huffman tree can be used based on expected symbol frequencies (but may not be optimal for all data).
*   **Sensitivity to Frequency Distribution:** If the frequency distribution changes significantly, the Huffman tree and codes become suboptimal.
*   **Ineffective for Uniform Distributions:** If all symbols have roughly the same frequency, Huffman encoding provides little or no compression, and can actually increase the size of the data due to the overhead of storing the tree.
*   **Susceptible to Single-Bit Errors:** Since variable length codes are used, a single bit error in the compressed data can cause the decoder to lose synchronization and misinterpret subsequent symbols. Error correction techniques may be needed.
*   **Not Suitable for all data:** Huffman works best when there are frequently repeated patterns in a data. If the data contains random patterns Huffman will not achieve good compression.

### Practice Questions & Exercises

1.  **Question:** Given the following frequencies for symbols A, B, C, D, E: A: 10, B: 5, C: 8, D: 12, E: 3. Construct the Huffman tree and determine the codes for each symbol.
    *   **Answer:**
        1.  Combine E(3) and B(5) -> EB(8)
        2.  Combine EB(8) and C(8) -> EBC(16)
        3.  Combine A(10) and EBC(16) -> AEBC(26)
        4.  Combine D(12) and AEBC(26) -> DAEBC(38)

        *   Codes (one possible solution, depending on left/right assignments):
            *   A: 10
            *   B: 110
            *   C: 111
            *   D: 0
            *   E: 110

2.  **Question:** Using the Huffman codes generated in question 1, encode the string "ADBEAC".
    *   **Answer:** 010110011110

3.  **Question:**  What is a prefix code, and why is it important in Huffman encoding?
    *   **Answer:** A prefix code is a code where no codeword is a prefix of another codeword.  It is important because it allows for unambiguous decoding; you can instantly recognize the end of a codeword.

4.  **Question:** Explain what are the benefits and the draw backs of using the Huffman encoding technique?
    *   **Answer:**
        *   Benefits: Good compression rates for data with uneven symbol frequencies, simple and efficient algorithm.
        *   Drawbacks:  Requires frequency information (overhead), ineffective for uniform distributions, susceptible to error propagation.

5.  **Question:**  Suppose you are using a fixed-length code with 4 symbols.  Each codeword will be 2 bits long (00, 01, 10, 11). How many possible strings are possible?

    *   **Answer:** There are four possible one-symbol strings (00, 01, 10, 11). The number of strings of length *n* is 4<sup>*n*</sup>. For example, there are 4<sup>2</sup> = 16 possible 2-symbol strings.

---

### Important Points to Remember

*   Huffman encoding is a lossless compression technique.
*   Huffman codes are prefix codes.
*   The Huffman tree is constructed based on symbol frequencies.
*   The decoder needs the same Huffman tree used by the encoder.
*   The compression ratio depends on the frequency distribution of the input data.
*   Huffman encoding is not effective for uniformly distributed data.
* Huffman Encoding can be considered a static coding if the frequency analysis is done only once. If we constantly are checking the frequency distribution and change the Huffman tree according to that data change this then becomes an example of a Dynamic Coding technique.
