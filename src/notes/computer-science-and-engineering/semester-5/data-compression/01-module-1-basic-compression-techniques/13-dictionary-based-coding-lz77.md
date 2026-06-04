---
title: "Dictionary based Coding- LZ77"
subject: "DATA COMPRESSION"
module: "Module 1: Basic Compression Techniques :"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b77f"
status: "completed"
scrapedAt: "2026-05-20T16:44:27.700Z"
---
# DATA COMPRESSION - Module 1: Basic Compression Techniques - Dictionary Based Coding: LZ77

## Learning Outcomes:

*   Understand the fundamental principles of dictionary-based compression.
*   Explain the LZ77 algorithm and its core mechanisms.
*   Describe the role of the sliding window in LZ77.
*   Encode and decode sequences using the LZ77 algorithm.
*   Identify the advantages and disadvantages of LZ77 compression.
*   Apply LZ77 to simple compression scenarios.

## 1. Introduction to Dictionary-Based Compression

*   **Definition:** Dictionary-based compression replaces frequently occurring sequences of data (phrases or strings) with shorter codes or indices that refer to entries in a dictionary.
*   **Key Concept:** Avoids repeated transmission of the same data by storing it in a reusable "dictionary."
*   **Types:** Static Dictionary (predefined) and Adaptive/Dynamic Dictionary (built during compression).  LZ77 falls under the adaptive dictionary method.
*   **Advantages:** Can achieve good compression ratios, particularly for data with repeating patterns.
*   **Disadvantages:** Requires overhead for transmitting/maintaining the dictionary.

## 2. LZ77 Algorithm: Core Mechanisms

*   **LZ77 (Lempel-Ziv 1977):** An adaptive dictionary-based lossless data compression algorithm. It builds a dictionary dynamically based on the data encountered so far.
*   **Key Idea:** Instead of explicitly storing every repeating sequence, LZ77 stores a pointer (offset, length) to a previous occurrence of the sequence within a "sliding window."
*   **Sliding Window:**  A conceptual window moving across the input data. It consists of two parts:
    *   **Search Buffer:** Holds previously encoded data (the "dictionary").
    *   **Lookahead Buffer:** Contains the data yet to be encoded.
*   **Output:**  The LZ77 encoder outputs a sequence of *triples*: `(offset, length, next_symbol)`.
    *   `offset`:  The distance (backward) from the beginning of the search buffer to the start of the matching sequence.
    *   `length`:  The length of the matching sequence.
    *   `next_symbol`:  The next symbol in the input stream *after* the matching sequence.  This is necessary because the matching sequence might not extend to the end of the lookahead buffer.

## 3. Sliding Window: Understanding its Role

*   **Purpose:** To provide a limited "memory" of previously seen data that can be used to identify and encode repeating sequences.
*   **Size:** The size of the sliding window (and its constituent search and lookahead buffers) is a critical parameter that affects compression performance.
    *   **Larger Window:**  Potentially better compression because more history is available, but requires more memory and potentially more bits to represent the offset.
    *   **Smaller Window:**  Less memory needed, but might miss longer or more distant repeating sequences.
*   **Sliding Mechanism:**  As each symbol is encoded, the sliding window "slides" forward, incorporating the encoded symbol into the search buffer and removing the oldest symbol from the search buffer.
*   **Typical Sizes:**  Search buffer sizes often range from hundreds to thousands of bytes. Lookahead buffer sizes are typically much smaller, usually tens of bytes.

## 4. Encoding with LZ77: Step-by-Step

1.  **Initialization:** Initialize the search buffer with empty data (e.g., null characters) and the lookahead buffer with the beginning of the input data.

2.  **Search:** Search the search buffer for the longest match of the beginning of the lookahead buffer.

3.  **Matching Cases:**
    *   **No Match:** If no match is found (the beginning of the lookahead buffer is not found in the search buffer), the triple `(0, 0, next_symbol)` is output, where `next_symbol` is the first symbol in the lookahead buffer.
    *   **Match Found:** If a match is found, the triple `(offset, length, next_symbol)` is output, where:
        *   `offset` is the backward distance from the current position in the lookahead buffer to the start of the matching sequence in the search buffer.
        *   `length` is the length of the matching sequence.
        *   `next_symbol` is the symbol in the lookahead buffer *immediately after* the matching sequence.

4.  **Slide the Window:** Slide the window forward by `length + 1` positions. This means shifting `length + 1` symbols from the lookahead buffer into the search buffer, and discarding the oldest `length + 1` symbols from the search buffer.

5.  **Repeat:** Repeat steps 2-4 until the end of the input data is reached.

## 5. Decoding with LZ77: Step-by-Step

1.  **Initialization:** Initialize the search buffer with empty data, mirroring the initial state of the encoder.

2.  **Read a Triple:** Read the next triple `(offset, length, next_symbol)` from the encoded stream.

3.  **Decoding Cases:**
    *   **No Match (offset = 0, length = 0):** Output the `next_symbol`.  Append the `next_symbol` to the search buffer.
    *   **Match Found (offset > 0, length > 0):**
        *   Copy `length` symbols from the search buffer, starting at the position `offset` symbols back from the current position in the search buffer.
        *   Output these `length` copied symbols.
        *   Append these `length` copied symbols *and* the `next_symbol` to the search buffer.

4.  **Slide the Window (Implicitly):** The search buffer grows as data is decoded.  The sliding window effect is achieved by maintaining a fixed-size buffer; when the buffer is full, the oldest data is discarded to make room for new data.  The decoder maintains the search buffer in the same state as the encoder.

5.  **Repeat:** Repeat steps 2-4 until the end of the encoded stream is reached.

## 6. Example: Encoding

**Input:** `ABAABABAABABBA`
**Search Buffer Size:** 8
**Lookahead Buffer Size:** 4

Let's trace the LZ77 encoding process:

| Step | Lookahead Buffer | Search Buffer | Offset | Length | Next Symbol | Output Triple        | Encoded Data (growing) |
|------|-------------------|-----------------|--------|--------|-------------|-----------------------|------------------------|
| 1    | ABAA              | 00000000        | 0      | 0      | A           | (0, 0, A)             | A                       |
| 2    | BAA               | 0000000A        | 0      | 0      | B           | (0, 0, B)             | AB                      |
| 3    | AA                | 000000AB        | 0      | 0      | A           | (0, 0, A)             | ABA                     |
| 4    | A                 | 00000ABA        | 1      | 2      | B           | (1, 2, B)             | ABAAB                   |
| 5    | ABABA             | 000ABAAB        | 5      | 4      | A           | (5, 4, A)             | ABAABABAABA             |
| 6    | ABBA              | BAABABAAB        | 1      | 2      | B           | (1, 2, B)             | ABAABABAABABBA          |
| 7    |                   | ABAABABBA        |        |        |             |                       |                          |

**Encoded Output:** `(0, 0, A), (0, 0, B), (0, 0, A), (1, 2, B), (5, 4, A), (1, 2, B)`

## 7. Example: Decoding

**Encoded Input:** `(0, 0, A), (0, 0, B), (0, 0, A), (1, 2, B), (5, 4, A), (1, 2, B)`
**Search Buffer Size:** 8

Let's trace the LZ77 decoding process:

| Step | Encoded Triple | Search Buffer | Offset | Length | Next Symbol | Decoded Output |
|------|-----------------|-----------------|--------|--------|-------------|----------------|
| 1    | (0, 0, A)       | 00000000        | 0      | 0      | A           | A              |
| 2    | (0, 0, B)       | 0000000A        | 0      | 0      | B           | AB             |
| 3    | (0, 0, A)       | 000000AB        | 0      | 0      | A           | ABA            |
| 4    | (1, 2, B)       | 00000ABA        | 1      | 2      | B           | ABAAB          |
| 5    | (5, 4, A)       | 000ABAAB        | 5      | 4      | A           | ABAABABAABA    |
| 6    | (1, 2, B)       | BAABABAAB        | 1      | 2      | B           | ABAABABAABABBA |

**Decoded Output:** `ABAABABAABABBA`

## 8. Advantages and Disadvantages of LZ77

**Advantages:**

*   **Adaptive:** No prior knowledge of the data is required. The dictionary is built on-the-fly.
*   **Simple to Implement:** The core algorithm is relatively straightforward.
*   **Effective for Data with Repeating Patterns:** Performs well when data contains many repeated sequences.
*   **Lossless:**  Guarantees perfect reconstruction of the original data.

**Disadvantages:**

*   **Variable-Length Codes:** The offset and length values can require a variable number of bits to represent, adding complexity.
*   **Overhead:** Requires overhead to store the (offset, length, next_symbol) triples, which can be significant for data with few repeating patterns.
*   **Window Size Limitations:** The size of the sliding window limits the maximum distance and length of matches that can be found.
*   **Worst Case:** Can perform poorly if there are few repeating sequences and the 'next_symbol' is often required.

## 9. Practice Questions/Exercises

1.  **Encoding:** Encode the following sequence using LZ77, with a search buffer size of 6 and a lookahead buffer size of 3:  `ABCABABCBABAAAA`

2.  **Decoding:** Decode the following LZ77 encoded sequence, assuming a search buffer size of 5: `(0, 0, A), (0, 0, B), (0, 0, C), (2, 3, B), (1, 3, A)`

3.  **Window Size Impact:** Explain how increasing the search buffer size in LZ77 can affect the compression ratio and memory requirements.

4.  **Worst-Case Scenario:** Describe a type of data where LZ77 would likely perform poorly, and explain why.

## 10. Answers to Practice Questions/Exercises

1.  **Encoding Solution:**

    | Step | Lookahead Buffer | Search Buffer | Offset | Length | Next Symbol | Output Triple |
    |------|-------------------|-----------------|--------|--------|-------------|---------------|
    | 1    | ABC               | 000000         | 0      | 0      | A           | (0, 0, A)     |
    | 2    | BCA               | 00000A         | 0      | 0      | B           | (0, 0, B)     |
    | 3    | CAB               | 0000AB         | 0      | 0      | C           | (0, 0, C)     |
    | 4    | ABC               | 000ABC         | 3      | 3      | B           | (3, 3, B)     |
    | 5    | BAB               | ABCAB          | 1      | 2      | A           | (1, 2, A)     |
    | 6    | AAA               | BCBABA         | 6      | 3      |             | (6, 3, )     |

    Encoded Output: `(0, 0, A), (0, 0, B), (0, 0, C), (3, 3, B), (1, 2, A), (6,3, )` Note: The last symbol may be padding or end of stream signal if the lookahead buffer doesn't require a 'next symbol' to fully encode the sequence.

2.  **Decoding Solution:**

    | Step | Encoded Triple | Search Buffer | Offset | Length | Next Symbol | Decoded Output |
    |------|-----------------|-----------------|--------|--------|-------------|----------------|
    | 1    | (0, 0, A)       | 00000          | 0      | 0      | A           | A              |
    | 2    | (0, 0, B)       | 0000A          | 0      | 0      | B           | AB             |
    | 3    | (0, 0, C)       | 000AB          | 0      | 0      | C           | ABC            |
    | 4    | (2, 3, B)       | 00ABC          | 2      | 3      | B           | ABCBCB         |
    | 5    | (1, 3, A)       | CABCBCB        | 1      | 3      | A           | ABCBCBCBA      |

    Decoded Output: `ABCBCBCBA`

3.  **Window Size Impact:**

    *   **Compression Ratio:** Increasing the search buffer size generally *improves* the compression ratio.  A larger search buffer allows the algorithm to find longer and more distant matches.
    *   **Memory Requirements:** Increasing the search buffer size *increases* the memory requirements for both the encoder and decoder.  Both need to store the contents of the buffer. Also, a larger offset requires more bits to represent.

4.  **Worst-Case Scenario:**

    LZ77 would likely perform poorly on data that is highly random or contains very few repeating sequences. For example, consider a stream of truly random numbers.  In such a case, the algorithm would rarely find matches in the search buffer, resulting in many triples of the form `(0, 0, next_symbol)`. The overhead of storing these triples could actually *increase* the size of the data. Another example is already heavily compressed data or data that has a very high entropy.

## 11. Important Points to Remember

*   LZ77 is a *lossless* compression algorithm.
*   The *sliding window* is the core mechanism for adaptive dictionary creation.
*   The *triple* `(offset, length, next_symbol)` is the fundamental output unit.
*   The *sizes* of the search and lookahead buffers significantly impact performance.
*   LZ77 is particularly effective for data with *repeating patterns*.
*   Consider the *trade-off* between compression ratio and memory requirements when choosing window sizes.
