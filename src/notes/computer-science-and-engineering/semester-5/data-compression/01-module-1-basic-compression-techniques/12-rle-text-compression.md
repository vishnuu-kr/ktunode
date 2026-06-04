---
title: "RLE Text compression"
subject: "DATA COMPRESSION"
module: "Module 1: Basic Compression Techniques :"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b77e"
status: "completed"
scrapedAt: "2026-05-20T16:44:26.997Z"
---
# DATA COMPRESSION - MODULE 1: BASIC COMPRESSION TECHNIQUES - RLE TEXT COMPRESSION

## Learning Outcomes:

*   Understand the fundamental concept of Run-Length Encoding (RLE) for text compression.
*   Be able to manually compress and decompress text strings using RLE.
*   Recognize the advantages and limitations of RLE for text compression.
*   Identify suitable data types for implementing RLE in a programming environment.
*   Evaluate the compression ratio achieved by RLE for a given text string.

## 1. Introduction to Run-Length Encoding (RLE)

*   **Definition:** Run-Length Encoding (RLE) is a simple lossless data compression algorithm. It works by replacing consecutive occurrences of the same data value (a "run") with a single instance of the value and the length of the run.
*   **Basic Idea:** Reduce the size of repeating sequential data.
*   **Applications:** Effective for data containing many repeated sequences, such as images with large areas of the same color, simple graphics, and text files with long sequences of identical characters.
*   **Lossless Compression:** Guarantees that the original data can be perfectly reconstructed from the compressed data.  No data is lost during compression or decompression.

## 2. RLE for Text Compression: Key Concepts and Definitions

*   **Run:** A sequence of identical characters in the text string.
    *   Example: In "AAABBBCC", "AAA" is a run, "BBB" is a run, and "CC" is a run.
*   **Encoding:** Replacing a run with a representation containing the character and the length of the run. The specific encoding method varies.
*   **Decoding:** Reconstructing the original run from the encoded representation by repeating the character according to the specified length.
*   **Run Length:** The number of times a character is repeated consecutively in a run.
*   **Encoded Format:** A common encoded format is `<character><length>`, where:
    *   `<character>` represents the repeating character.
    *   `<length>` represents the number of consecutive repetitions (the run length).  The length is usually represented as an integer.
*   **Compression Ratio:**  A measure of how effectively the data has been compressed. Calculated as:

    `Compression Ratio = (Original Size) / (Compressed Size)`

    A higher compression ratio indicates better compression.

## 3. RLE Encoding and Decoding Process

**Encoding:**

1.  **Scan the Text:** Iterate through the text string character by character.
2.  **Identify Runs:** Look for sequences of consecutive identical characters.
3.  **Encode Runs:**  For each run, replace it with the encoded representation.
4.  **Handle Single Characters:** Characters that are not part of a run (i.e., they appear only once) might be handled differently depending on the implementation.  Options include:
    *   Including them directly in the compressed output.
    *   Encoding them with a run length of 1.
5.  **Concatenate Encoded Units:** Combine the encoded representations of all runs and single characters to form the compressed string.

**Decoding:**

1.  **Parse the Compressed String:** Read the compressed string to identify encoded runs (character and length pairs).
2.  **Reconstruct Runs:** For each encoded run, repeat the character the specified number of times.
3.  **Handle Single Characters (if applicable):** If single characters are encoded with a run length of 1, decode them accordingly.  If they are represented directly in the compressed output, simply append them to the reconstructed string.
4.  **Concatenate Reconstructed Units:** Combine the reconstructed runs and single characters to form the original text string.

## 4. Examples

**Example 1: Basic Encoding**

*   **Original Text:** `AAABBBCCCDDE`
*   **Encoded Text (Example Format: `<character><length>`):** `A3B3C3D2E1`
*   **Decoding:**  Read A3 -> Reconstruct AAA. Read B3 -> Reconstruct BBB. Read C3 -> Reconstruct CCC. Read D2 -> Reconstruct DD. Read E1 -> Reconstruct E.  Concatenate to obtain AAABBBCCCDDE.

**Example 2: Handling Single Characters**

*   **Original Text:** `AABBCCDEFF`
*   **Encoded Text (Single characters included directly):** `A2B2C2DE2F2`
*   **Encoded Text (Single characters encoded with a run length of 1):** `A2B2C2D1E1F2`

**Example 3:  Example with Mixed Cases and Spaces**

*   **Original Text:** `WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB`
*   **Encoded Text (Example Format: `<character><length>`):** `W12B1W13B3W26B1`

## 5. Advantages and Limitations of RLE

**Advantages:**

*   **Simple to implement:**  RLE is a straightforward algorithm that is easy to understand and implement in various programming languages.
*   **Fast Encoding/Decoding:** Encoding and decoding are relatively quick processes, making RLE suitable for real-time applications where speed is crucial.
*   **Effective for highly repetitive data:**  RLE achieves significant compression ratios when dealing with data containing long sequences of identical characters.

**Limitations:**

*   **Ineffective for data with little repetition:** If the data does not contain long runs of identical characters, RLE can actually *increase* the size of the data.  The encoded representation might be larger than the original.
*   **Not suitable for all types of data:**  RLE is not a general-purpose compression algorithm. It is primarily effective for specific types of data, such as images with large areas of the same color, simple graphics, and text files with repeating characters.  It is generally not efficient for compressing complex or random data.
*   **Vulnerable to "run explosions":** If the data contains many short runs, the overhead of storing the run lengths can negate any compression gains.

## 6. Data Types for RLE Implementation

*   **Character:** Use `char` (or similar character data type in your programming language) to store the repeating character.
*   **Run Length:** Use an `integer` data type (`int`, `short`, `long`, `byte` depending on the expected maximum run length) to store the number of repetitions. Choose the smallest integer type that can accommodate the longest possible run length to minimize memory usage.
*   **Compressed String:**  Represent the compressed string as a sequence of character-length pairs.  This can be achieved using:
    *   **Arrays:** Create an array (or vector) to store the character-length pairs.  Each element in the array could be a structure or pair (e.g., `std::pair<char, int>` in C++).
    *   **Strings:**  Build a string to represent the encoded data.  Be mindful of how the length is encoded (e.g., fixed-width representation).  This can be less efficient if the length requires multiple characters to store.
*   **Original String:** Use `string` data type to store the original text for compression and the resulting decompressed text.

## 7. Evaluating Compression Ratio

1.  **Original Size:** Determine the size of the original text string.  For example, if the text is represented using ASCII encoding (1 byte per character), the original size is simply the number of characters in the string.
2.  **Compressed Size:** Determine the size of the compressed string. This will depend on the encoding scheme used. For example, if each character is represented by 1 byte and each length is represented by 1 byte, the compressed size is the number of runs multiplied by 2. If the length is represented by more than one byte, the size will be greater.
3.  **Calculate Compression Ratio:** Use the formula:

    `Compression Ratio = (Original Size) / (Compressed Size)`

**Example:**

*   **Original Text:** `AAAAABBBCC`
*   **Original Size:** 10 bytes (assuming ASCII)
*   **Encoded Text:** `A5B3C2` (Example format: `<character><length>`)
*   **Compressed Size:** 6 bytes (3 runs * 2 bytes/run)
*   **Compression Ratio:** 10 / 6 = 1.67

## 8. Important Points to Remember

*   RLE is a simple but specialized compression algorithm.
*   Its effectiveness depends on the characteristics of the data being compressed.
*   Carefully consider the encoding scheme and data types used for implementation.
*   Always test the compression ratio to evaluate the performance of RLE for a specific dataset.
*   RLE is often used as a building block in more complex compression algorithms.
*   Consider edge cases like empty strings and runs that exceed the maximum representable length.

## 9. Practice Questions/Exercises

**Question 1:**

Compress the following text string using RLE (format: `<character><length>`): `WWWWWWWWWBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW`

**Answer:**

`W9B30W39`

**Question 2:**

Decompress the following RLE encoded string (format: `<character><length>`): `A4B2C3D1`

**Answer:**

`AAAABBCCCD`

**Question 3:**

Calculate the compression ratio for the following text string compressed using RLE:

*   Original Text: `AAAAAAAAAAAAAAAAAAAAAAAAAAAAABBBCCCDDDDEEEEE`
*   Compressed Text: `A30B3C3D4E5` (assuming 1 byte for character and 1 byte for length)

**Answer:**

*   Original Size: 45 bytes
*   Compressed Size: 10 bytes
*   Compression Ratio: 45 / 10 = 4.5

**Question 4:**

What are the limitations of RLE and when is it not a suitable compression technique?

**Answer:**

RLE is ineffective for data with little repetition. If the data does not contain long runs of identical characters, RLE can actually *increase* the size of the data.  It's not suitable for complex or random data or when the runs are short and the overhead exceeds the benefits.

**Question 5:**

Describe the steps involved in encoding a text string using RLE.

**Answer:**

1.  Scan the text string character by character.
2.  Identify runs of consecutive identical characters.
3.  Encode each run with the character and the length of the run (e.g., `<character><length>`).
4.  Handle single characters (characters that are not part of a run) either by including them directly in the compressed output or encoding them with a run length of 1.
5.  Concatenate the encoded representations of all runs and single characters to form the compressed string.
