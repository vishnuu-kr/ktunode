---
title: "Dictionary-Based Methods"
subject: "DATA COMPRESSION"
module: "Module 1: Basic Compression Techniques :"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b777"
status: "completed"
scrapedAt: "2026-05-20T16:44:22.089Z"
---
# DATA COMPRESSION: Module 1 - Basic Compression Techniques: Dictionary-Based Methods

## Introduction

This module explores dictionary-based compression techniques, a fundamental family of lossless data compression methods. These techniques leverage the redundancy inherent in data by replacing frequently occurring patterns with shorter codes from a dynamically or statically defined "dictionary."

## Learning Outcomes

By the end of this topic, you should be able to:

*   Understand the fundamental principles behind dictionary-based compression.
*   Differentiate between static and dynamic dictionary methods.
*   Explain and apply LZ77, LZ78, and LZW compression algorithms.
*   Analyze the advantages and disadvantages of dictionary-based techniques.
*   Understand the concept of dictionary adaptation.
*   Evaluate the compression ratio achieved by different dictionary-based methods.

## 1. Key Concepts and Definitions

*   **Data Compression:** Reducing the number of bits needed to represent data.  Lossless compression allows perfect reconstruction of the original data, whereas lossy compression sacrifices some data fidelity for higher compression ratios.
*   **Dictionary-Based Compression:** A type of lossless data compression that replaces recurring strings of characters with references (indices or pointers) to entries in a dictionary.
*   **Dictionary:** A collection of frequently occurring patterns (strings) within the data.
*   **Static Dictionary:** A pre-defined dictionary that remains constant throughout the compression and decompression process.  It is determined before compression starts and known to both the compressor and decompressor.
*   **Dynamic (Adaptive) Dictionary:** A dictionary that is built during the compression and decompression process. It adapts to the data being processed, allowing it to capture patterns that may not have been known beforehand.
*   **String Matching:** The process of finding the longest matching string in the dictionary for a given input sequence.
*   **Token:**  The replacement for a string found in the dictionary.  This is usually an index or a (pointer, length) pair.
*   **Compression Ratio:**  The ratio of the size of the original data to the size of the compressed data.  Higher ratios indicate better compression.  Defined as:  `Compression Ratio = Original Size / Compressed Size`
*   **Space Savings:** The percentage reduction in size achieved through compression.  Defined as: `Space Savings = (1 - (Compressed Size / Original Size)) * 100%`

## 2. Static Dictionary Methods

*   **Overview:** Static dictionary methods use a pre-defined, fixed dictionary. This simplifies the compression and decompression process, as the dictionary is known in advance.
*   **Advantages:**
    *   Simple to implement.
    *   Fast decompression since the dictionary is readily available.
*   **Disadvantages:**
    *   Less effective if the data contains patterns not included in the dictionary.
    *   The dictionary must be transmitted or stored alongside the compressed data, adding to the overall size.
*   **Example:**  Suppose we have a static dictionary containing frequently used words like {"the", "and", "is", "of"}.  If the input text is "the cat and the hat", we can replace "the" and "and" with their corresponding indices in the dictionary, leading to a compressed representation.

## 3. Dynamic Dictionary Methods

Dynamic dictionary methods are adaptive, meaning the dictionary is built and updated during the compression process. This allows them to capture patterns that may not have been foreseen in a static dictionary.  The key advantage is their ability to adapt to the characteristics of the input data.

### 3.1 LZ77 (Lempel-Ziv 77)

*   **Principle:** LZ77 maintains a "sliding window" consisting of two parts:
    *   **Search Buffer:** A window of previously encoded data.
    *   **Lookahead Buffer:** The next portion of the input data to be encoded.
*   **Encoding:** The algorithm searches the search buffer for the longest match to a prefix of the lookahead buffer.
    *   If a match is found, the encoder outputs a tuple: `(offset, length, next_symbol)`
        *   `offset`:  The distance (offset) from the beginning of the search buffer to the start of the match.
        *   `length`: The length of the matching string.
        *   `next_symbol`: The next symbol in the lookahead buffer after the matching string.  This is needed because the lookahead buffer might extend beyond the length of the search buffer.
    *   If no match is found, the encoder outputs `(0, 0, next_symbol)`, where `next_symbol` is the first symbol in the lookahead buffer.
*   **Decoding:** The decoder uses the received tuples to reconstruct the original data. It uses the `offset` and `length` to copy the matching string from the previously decoded data and appends the `next_symbol`.
*   **Example:**

    Let's say the input string is "ABRACADABRABRABRA".  Assume a search buffer of size 10 and a lookahead buffer of size 5.

    1.  Initially, the search buffer is empty. The first five characters "ABRAC" are in the lookahead buffer. No match is found in the search buffer.  Output: `(0, 0, A)`. Search buffer becomes "A".
    2.  Next, "BRACA" is in the lookahead buffer. No match in the search buffer. Output: `(0, 0, B)`. Search buffer becomes "AB".
    3.  Continuing, we eventually have "BRABR" in the lookahead buffer.  "BRA" matches at offset 5 and has length 3. The next symbol is 'A'. Output: `(5, 3, A)`.
*   **Advantages:** Simple and relatively efficient.
*   **Disadvantages:** The sliding window can limit the algorithm's ability to find long matches.  Finding the longest match can be computationally expensive.

### 3.2 LZ78 (Lempel-Ziv 78)

*   **Principle:** LZ78 builds a dictionary explicitly, storing previously encountered strings along with their corresponding indices.  It searches the dictionary for the longest prefix of the current input string.
*   **Encoding:**
    *   If a matching prefix is found in the dictionary, the encoder outputs a tuple: `(index, next_symbol)`
        *   `index`: The index of the matching prefix in the dictionary.
        *   `next_symbol`: The next symbol in the input string after the matching prefix.  This extends the existing dictionary entry with the new character.
    *   If no match is found, the encoder outputs `(0, next_symbol)`, where `next_symbol` is the first symbol in the input string.  This creates a new dictionary entry consisting of the `next_symbol`.
*   **Decoding:** The decoder maintains an identical dictionary. It uses the received `index` to retrieve the corresponding string from the dictionary and appends the `next_symbol` to reconstruct the original data. It also updates the dictionary with the newly formed string.
*   **Example:**

    Input string: "ABRACADABRABRABRA"

    1.  No match initially.  Output: `(0, A)`. Dictionary: `[null, A]`
    2.  No match. Output: `(0, B)`. Dictionary: `[null, A, B]`
    3.  No match. Output: `(0, R)`. Dictionary: `[null, A, B, R]`
    4.  No match. Output: `(0, A)`. Dictionary: `[null, A, B, R, C]`
    5.  'A' is at index 1. Output: `(1, C)`. Dictionary: `[null, A, B, R, C, AC]`
    ... and so on.
*   **Advantages:** More efficient than LZ77 when dealing with data containing recurring patterns at different locations.
*   **Disadvantages:** Requires storing the dictionary, which increases memory overhead.

### 3.3 LZW (Lempel-Ziv-Welch)

*   **Principle:** LZW is a refinement of LZ78, designed to improve its efficiency.  It starts with a dictionary pre-initialized with single-character strings (e.g., all possible ASCII characters).  Instead of outputting the `next_symbol` explicitly, LZW outputs the index of the longest matching string in the dictionary.
*   **Encoding:**
    1.  Initialize the dictionary with all single-character strings.
    2.  `w = null` (empty string)
    3.  Read the next character `k` from the input.
    4.  If `wk` (w concatenated with k) is in the dictionary:
        *   `w = wk`
    5.  Else:
        *   Output the dictionary index of `w`.
        *   Add `wk` to the dictionary.
        *   `w = k`
    6.  Repeat from step 3 until the end of the input.
    7.  Output the dictionary index of `w`.
*   **Decoding:**
    1.  Initialize the dictionary with all single-character strings.
    2.  Read the first code (index) from the compressed data.
    3.  Output the string corresponding to that code.
    4.  `old_code = code`
    5.  Read the next code (index).
    6.  `string = dictionary[code]`
    7.  Output `string`
    8.  `character = first character of string`
    9.  Add `dictionary[old_code] + character` to the dictionary.
    10. `old_code = code`
    11. Repeat from step 5 until the end of the compressed data.
*   **Example:**

    Input string: "ABABABABABAB"

    1.  Dictionary initialized with A, B, etc. (assume indices 65, 66 respectively)
    2.  First character 'A'. w = null.  'A' is in the dictionary. w = 'A'
    3.  Next character 'B'. 'AB' is not in the dictionary. Output 65 (index of A). Add 'AB' to dictionary (e.g., index 256). w = 'B'
    4.  Next character 'A'. 'BA' is not in the dictionary. Output 66 (index of B). Add 'BA' to dictionary (e.g., index 257). w = 'A'
    5.  Next character 'B'. 'AB' is in the dictionary (index 256). w = 'AB'
    6.  Next character 'A'. 'ABA' is not in the dictionary. Output 256 (index of AB). Add 'ABA' to the dictionary (e.g., index 258). w = 'A'
    ... and so on.

    Output codes: 65, 66, 256, 257, 258,...
*   **Advantages:** High compression ratio, especially for data with repeating patterns.  No need to explicitly transmit the `next_symbol`.
*   **Disadvantages:** Can be slower than LZ77 or LZ78 due to the dictionary lookup process.  Needs more memory for the dictionary.
*   **Practical Use:** Used in GIF image format and early versions of the UNIX compress utility.

## 4. Advantages and Disadvantages of Dictionary-Based Techniques

| Feature           | Advantages                                                                                                                                | Disadvantages                                                                                                                                   |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **General**       | Lossless compression guarantees no data loss. Adaptable to different data types.                                                         | Can be computationally expensive. Dictionary maintenance overhead. May not be effective for data with little redundancy.                       |
| **Static**        | Simple to implement. Fast decompression.                                                                                                 | Less effective if the data doesn't match the dictionary. Dictionary must be stored or transmitted.                                           |
| **Dynamic (LZ77)** | Can adapt to local patterns in the data. Relatively simple algorithm.                                                                     | Limited by the sliding window size. Finding the longest match can be slow.                                                                  |
| **Dynamic (LZ78)** | Can handle patterns at different locations better than LZ77.                                                                                 | Requires storing the dictionary, increasing memory usage.                                                                                      |
| **Dynamic (LZW)** | High compression ratio, especially for repetitive data. No need to explicitly transmit the next symbol.                               | Can be slower than LZ77 or LZ78. Needs more memory. Dictionary may grow too large, requiring periodic resets or adaptation strategies.      |

## 5. Dictionary Adaptation

Dictionary adaptation refers to the techniques used to manage the dictionary in dynamic dictionary methods. This includes:

*   **Dictionary Growth:** How new entries are added to the dictionary.
*   **Dictionary Resetting:** When the dictionary becomes too large or no longer effectively represents the data, it may be reset to its initial state.  This can improve compression if the data characteristics change significantly.
*   **Dictionary Freezing:** Some implementations freeze the dictionary after a certain point to prevent it from growing indefinitely and potentially becoming less effective.
*   **Dictionary Aging:**  Some algorithms track the usage frequency of dictionary entries and remove less frequently used entries to make space for more relevant patterns.

## 6. Evaluating Compression Ratio

The effectiveness of a compression algorithm is primarily measured by its compression ratio and space savings.

*   **Example:**
    *   Original file size: 100 KB
    *   Compressed file size: 40 KB
    *   Compression Ratio = 100 KB / 40 KB = 2.5
    *   Space Savings = (1 - (40 KB / 100 KB)) * 100% = 60%

A higher compression ratio and space savings indicate better compression performance. However, factors like computational complexity and memory usage should also be considered.

## 7. Practice Questions & Exercises

**Question 1:**  Explain the difference between static and dynamic dictionary-based compression.  Provide an example of when you would use each.

**Answer:**

*   **Static Dictionary:**  Uses a pre-defined, fixed dictionary.  Suitable when the data source is well-defined and patterns are consistent (e.g., compressing documents that frequently use a specific vocabulary).
*   **Dynamic Dictionary:**  Builds the dictionary on-the-fly as it processes the data.  Suitable when the data characteristics are unknown or vary significantly (e.g., compressing general-purpose files).

**Question 2:**  Describe the LZ77 algorithm and explain the purpose of the "offset," "length," and "next_symbol" in the output tuple.

**Answer:**

LZ77 uses a sliding window to search for matching strings.  If a match is found, it outputs a tuple `(offset, length, next_symbol)`.

*   `offset`: The distance from the beginning of the search buffer to the start of the matching string.
*   `length`: The length of the matching string.
*   `next_symbol`: The symbol that follows the matching string in the lookahead buffer. This is necessary because the match might extend nearly to the end of the lookahead buffer.

**Question 3:**  Given the input string "ABABCBABABA", trace the LZW compression algorithm and show the output codes and the dictionary created during the process.  Assume the initial dictionary contains 'A' (index 65), 'B' (index 66), and 'C' (index 67).

**Answer:**

| Input String | w     | k     | wk      | Output | Dictionary Update (Index) |
|--------------|-------|-------|---------|--------|--------------------------|
| ABABCBABABA  | null  | A     | A       |        |                          |
| ABABCBABABA  | A     | B     | AB      | 65     | AB (256)                  |
| ABABCBABABA  | B     | A     | BA      | 66     | BA (257)                  |
| ABABCBABABA  | A     | B     | AB      |        |                          |
| ABABCBABABA  | AB    | C     | ABC     | 256    | ABC (258)                 |
| ABABCBABABA  | C     | B     | CB      | 67     | CB (259)                  |
| ABABCBABABA  | B     | A     | BA      |        |                          |
| ABABCBABABA  | BA    | B     | BAB     | 257    | BAB (260)                 |
| ABABCBABABA  | B     | A     | BA      |        |                          |
| ABABCBABABA  | BA    |       |         | 257    |                          |

Output codes: 65, 66, 256, 67, 257, 257

Final Dictionary:  A (65), B (66), C (67), AB (256), BA (257), ABC (258), CB (259), BAB (260)

**Question 4:**  What are the advantages and disadvantages of using LZW over LZ77 for compressing text data?

**Answer:**

*   **LZW Advantages over LZ77:**
    *   Generally achieves a higher compression ratio, particularly for data with repeating patterns.
    *   Doesn't need to explicitly transmit the "next_symbol," leading to more compact output.
*   **LZW Disadvantages over LZ77:**
    *   Can be slower due to the dictionary lookup process.
    *   Requires more memory for dictionary storage.

**Question 5:** Calculate the compression ratio and space savings given an original file size of 2MB and a compressed file size of 800KB.

**Answer:**

*   Compression Ratio = 2 MB / 800 KB = 2048 KB / 800 KB = 2.56
*   Space Savings = (1 - (800 KB / 2048 KB)) * 100% = (1 - 0.390625) * 100% = 60.9375%

## 8. Important Points to Remember

*   Dictionary-based compression exploits redundancy in data by replacing frequently occurring patterns with shorter codes.
*   Static dictionaries offer simplicity but can be less effective if the data characteristics don't match the dictionary.
*   Dynamic dictionaries adapt to the data, allowing for better compression but require more complex algorithms and memory management.
*   LZ77 uses a sliding window, LZ78 builds an explicit dictionary, and LZW builds upon LZ78 by simplifying the output.
*   LZW is widely used in image compression (GIF).
*   Compression ratio and space savings are key metrics for evaluating compression algorithm performance.  However, factors like speed and memory usage must also be considered.
