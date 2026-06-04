---
title: "Run-Length Encoding"
subject: "DATA COMPRESSION"
module: "Module 1: Basic Compression Techniques :"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b775"
status: "completed"
scrapedAt: "2026-05-20T16:44:20.682Z"
---
# DATA COMPRESSION: MODULE 1 - BASIC COMPRESSION TECHNIQUES: RUN-LENGTH ENCODING

## Introduction

Run-Length Encoding (RLE) is a simple and lossless data compression technique that is effective when data contains many consecutive repetitions of the same value. It works by replacing these runs of identical values with a single instance of the value and the number of times it repeats. This is particularly useful for images, text, and other data types where sequences of identical symbols occur frequently.

## Learning Outcomes

By the end of this topic, you should be able to:

*   Define Run-Length Encoding (RLE) and explain its basic principles.
*   Apply RLE to compress and decompress data.
*   Identify the advantages and disadvantages of RLE.
*   Recognize data types for which RLE is most suitable.
*   Calculate the compression ratio achieved by RLE.

## 1. Key Concepts and Definitions

*   **Run:** A sequence of consecutive, identical symbols in the data.
*   **Run-Length Encoding (RLE):** A data compression technique that replaces runs of identical data with a count and the symbol.
*   **Lossless Compression:** A compression method that allows the original data to be perfectly reconstructed from the compressed data.  RLE is lossless.
*   **Compression Ratio:** The ratio of the size of the original data to the size of the compressed data.  A higher compression ratio indicates better compression.  Calculated as: `(Original Size) / (Compressed Size)`
*   **Decompression:** The process of reconstructing the original data from the compressed data.

## 2. Basic Principles of RLE

The core idea behind RLE is to represent runs of identical data as a (count, symbol) pair.  This pair signifies that the 'symbol' is repeated 'count' times.

*   **Encoding:** Identifying runs in the data and replacing them with the (count, symbol) pair.
*   **Decoding:**  Reversing the process by reading the (count, symbol) pairs and expanding them back into the original sequence of symbols.

**General Representation:**

A run of `n` identical symbols `s` can be represented as `(n, s)`.

## 3. Applying RLE to Compress and Decompress Data

### 3.1 Encoding

**Example 1: Text Data**

Original Data: `WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW`

Encoded Data: `(12, W)(1, B)(12, W)(3, B)(24, W)(1, B)(14, W)`

**Example 2: Image Data (Black and White)**

Assume '0' represents black and '1' represents white.  Let's look at a single row of pixels:

Original Data: `0000011111111100000001111`

Encoded Data: `(5, 0)(9, 1)(7, 0)(4, 1)`

**Algorithm for Encoding:**

1.  Initialize an empty list to store the encoded data.
2.  Iterate through the input data.
3.  If the current symbol is the same as the previous symbol, increment the run count.
4.  If the current symbol is different from the previous symbol (or it's the first symbol), add the previous (count, symbol) pair to the encoded list (if a previous symbol exists) and start a new run with a count of 1.
5.  After the iteration, add the last (count, symbol) pair to the encoded list.

### 3.2 Decoding

Decoding is the reverse process of encoding. It takes the (count, symbol) pairs and expands them back into the original sequence.

**Example 1 (Decoding the Text Example):**

Encoded Data: `(12, W)(1, B)(12, W)(3, B)(24, W)(1, B)(14, W)`

Decoded Data: `WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW`

**Example 2 (Decoding the Image Example):**

Encoded Data: `(5, 0)(9, 1)(7, 0)(4, 1)`

Decoded Data: `0000011111111100000001111`

**Algorithm for Decoding:**

1.  Initialize an empty string/list to store the decoded data.
2.  Iterate through the encoded data (list of (count, symbol) pairs).
3.  For each pair, append the 'symbol' to the decoded data 'count' number of times.

## 4. Advantages and Disadvantages of RLE

**Advantages:**

*   **Simplicity:** Easy to understand and implement.
*   **Speed:** Fast encoding and decoding.
*   **Lossless:**  No data is lost during compression and decompression.
*   **Effectiveness:** Highly effective for data with long runs of identical symbols.

**Disadvantages:**

*   **Ineffective on Data with Little Repetition:**  Can actually *increase* the size of the data if there are few runs of identical symbols.  For example, the string "ABCDEFGH" would be encoded as (1, A)(1, B)(1, C)(1, D)(1, E)(1, F)(1, G)(1, H), which is larger than the original string.
*   **Variations in Implementation:** Multiple ways to implement RLE, which can cause compatibility issues if not standardized.

## 5. Data Types Suitable for RLE

RLE is most suitable for data types where runs of identical values are common. Examples include:

*   **Images:** Especially black and white images, fax transmissions, and images with large areas of the same color.
*   **Text:**  Documents with repeating characters, spaces, or formatting.
*   **Video:**  In certain video formats, particularly those with static backgrounds.
*   **Scientific Data:**  Data from sensors or simulations where repeated values may occur.
*   **Bitmap Images:**  Images composed of pixels, where adjacent pixels often have the same color.

## 6. Calculating Compression Ratio

Compression ratio is a key metric for evaluating the effectiveness of a compression algorithm.

**Formula:**

`Compression Ratio = (Original Size) / (Compressed Size)`

A compression ratio greater than 1 indicates that compression has occurred (i.e., the compressed data is smaller than the original). A compression ratio less than 1 means the data has actually increased in size after "compression".

**Example:**

Original Data: `WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW` (70 characters)

Encoded Data: `(12, W)(1, B)(12, W)(3, B)(24, W)(1, B)(14, W)` (14 elements * 2 bytes per element = 28 bytes. We assume each integer requires one byte and each character requires one byte)

Compression Ratio = 70 / 28 = 2.5

This means the compressed data is 2.5 times smaller than the original data.

## 7. Practice Questions/Exercises

**Question 1:**

Encode the following string using RLE: `AAABBBCCCDDDEFFFFGG`

**Answer:** `(3, A)(3, B)(3, C)(3, D)(1, E)(4, F)(2, G)`

**Question 2:**

Decode the following RLE encoded data: `(4, X)(2, Y)(3, Z)(1, A)`

**Answer:** `XXXXYYZZZA`

**Question 3:**

Calculate the compression ratio for the following data, after applying RLE:

*   Original Data: `BBBBBBBBBBBBBBBBBBWWWWWWWWWWWWWWWWWWWWAAAAAAAAA` (41 characters)
*   Encoded Data: `(18, B)(18, W)(5, A)` (Assume each integer and character requires one byte)

**Answer:**

*   Original Size: 41 bytes
*   Compressed Size: (3 pairs * 2 bytes/pair) = 6 bytes
*   Compression Ratio: 41 / 6 = 6.83 (approximately)

**Question 4:**

What are the limitations of using RLE for compressing data that has very little repetition? Give an example.

**Answer:**  RLE can be ineffective, and even *increase* the data size, if there are few runs of identical symbols.  For instance, compressing the string "ABCDEFGHIJKLMNOPQRSTUVWXYZ" using RLE would result in `(1,A)(1,B)(1,C)...(1,Z)`, which requires significantly more storage space than the original string.

**Question 5:**

In what type of image would RLE be most effective?

**Answer:**  RLE is most effective in images with large areas of uniform color, such as black and white images, fax transmissions, or images with solid backgrounds.

## 8. Important Points to Remember

*   RLE is a lossless compression technique.
*   RLE is most effective when the data contains long runs of identical symbols.
*   RLE can increase the size of the data if there is little or no repetition.
*   The compression ratio is a measure of the effectiveness of the compression.
*   Understand the algorithms for both encoding and decoding RLE data.
*   Pay attention to how the (count, symbol) pairs are represented in your specific implementation (e.g., fixed-length integers, variable-length integers, character encoding).
